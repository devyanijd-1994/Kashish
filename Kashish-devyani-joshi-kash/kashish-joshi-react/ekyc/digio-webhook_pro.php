<?php
$conn = new mysqli("localhost", "u574447354_kashishweb", "Apex@#$2024", "u574447354_kashishweb");

//$client_id     = "ACK260318121914906BNZ16ACYYIMEUF";
//$client_secret = "H3CJX8MXLNBTWI2VUUFBZKZHYO4UNQPR";
$client_id     = "ACK260227195147680M14OCCESL5MUN9";
$client_secret = "M35812AGC712DPSPUII7Z2YHFJCDW5NH";
//$base_url      = "https://ext.digio.in:444";
$base_url      = "https://api.digio.in";
$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);

file_put_contents("uploads/webhook_log.txt", date('Y-m-d H:i:s') . " - " . $raw . "\n", FILE_APPEND);

if (empty($data)) { http_response_code(400); exit("Invalid data"); }

$event = $data['event'] ?? '';

// -------- DIGISIGN DOCUMENT WEBHOOK --------
if (strpos($event, 'document.') === 0) {
    $doc    = $data['payload']['document'] ?? [];
    $doc_id = $conn->real_escape_string($doc['id'] ?? '');
    $doc_status = $conn->real_escape_string($doc['status'] ?? '');

    if (!empty($doc_id)) {
        $conn->query("UPDATE ekyc SET digio_sign_status='$doc_status' WHERE digio_doc_id='$doc_id'");

        // If signed — download signed PDF
        if ($doc_status === 'completed' || $doc_status === 'esigned') {
            $curl = curl_init();
            curl_setopt_array($curl, [
                CURLOPT_URL            => $base_url . "/v3/client/document/download?document_id=" . urlencode($doc_id),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_HTTPHEADER     => [
                    "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
                ],
                CURLOPT_SSL_VERIFYPEER => false,
                CURLOPT_TIMEOUT        => 30,
            ]);
            $pdf_data  = curl_exec($curl);
            $pdf_code  = curl_getinfo($curl, CURLINFO_HTTP_CODE);
            curl_close($curl);

            if ($pdf_code === 200 && !empty($pdf_data)) {
                $pdf_path = "uploads/signed_agreement_" . $doc_id . ".pdf";
                file_put_contents($pdf_path, $pdf_data);
                $pdf_path_esc = $conn->real_escape_string($pdf_path);
                $conn->query("UPDATE ekyc SET signed_pdf='$pdf_path_esc' WHERE digio_doc_id='$doc_id'");
            }
        }
    }
    http_response_code(200);
    echo "OK";
    exit;
}

// -------- KYC WEBHOOK --------

$kyc        = $data['payload']['kyc_request'] ?? [];
$request_id = $conn->real_escape_string($kyc['id'] ?? '');
$status     = $conn->real_escape_string($kyc['status'] ?? '');

if (empty($request_id)) { http_response_code(400); exit("Missing request_id"); }

// Update status
$conn->query("UPDATE ekyc SET digio_status='$status' WHERE digio_request_id='$request_id'");

// Fetch full data when approved or completed
if (in_array($status, ['approved', 'completed', 'approval_pending'])) {

    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL            => $base_url . "/client/kyc/v2/" . urlencode($request_id) . "/response",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode(["id" => $request_id]),
        CURLOPT_HTTPHEADER     => [
            "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
            "Content-Type: application/json",
            "Accept: application/json"
        ],
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_TIMEOUT        => 30,
    ]);

    $response = curl_exec($curl);
    curl_close($curl);

    $res     = json_decode($response, true);
    $aadhaar = $res['actions'][0]['details']['aadhaar'] ?? [];

    file_put_contents("uploads/webhook_log.txt", date('Y-m-d H:i:s') . " - AADHAAR: " . json_encode($aadhaar) . "\n", FILE_APPEND);

    if (!empty($aadhaar)) {
        $name        = $conn->real_escape_string($aadhaar['name']            ?? '');
        $dob         = $conn->real_escape_string($aadhaar['dob']             ?? '');
        $gender      = $conn->real_escape_string($aadhaar['gender']          ?? '');
        $id_number   = $conn->real_escape_string($aadhaar['id_number']       ?? '');
        $address     = $conn->real_escape_string($aadhaar['current_address'] ?? '');
        $father_name = $conn->real_escape_string($aadhaar['father_name']     ?? '');

        // Save Aadhaar photo
        $photo_path = '';
        if (!empty($aadhaar['image'])) {
            $img_data = $aadhaar['image'];
            if (strpos($img_data, ',') !== false) {
                $img_data = explode(',', $img_data)[1];
            }
            $photo_path = "uploads/aadhaar_photo_" . time() . ".png";
            file_put_contents($photo_path, base64_decode($img_data));
            $photo_path = $conn->real_escape_string($photo_path);
        }

        $conn->query("UPDATE ekyc SET
            aadhaar_ref_id  = '$id_number',
            aadhaar_name    = '$name',
            aadhaar_dob     = '$dob',
            aadhaar_gender  = '$gender',
            aadhaar_address = '$address',
            aadhaar_photo   = '$photo_path'
            WHERE digio_request_id = '$request_id'");

        // Auto-trigger DigiSign after KYC approved
        $kyc_record = $conn->query("SELECT id FROM ekyc WHERE digio_request_id='$request_id'")->fetch_assoc();
        if (!empty($kyc_record['id'])) {
            $sign_url = "https://kashishweb.questdigiflex.in/generate-agreement.php?id=" . $kyc_record['id'];
            // Trigger agreement generation in background
            $ch = curl_init($sign_url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            curl_exec($ch);
            curl_close($ch);
        }
    }
}

http_response_code(200);
echo "OK";
?>
