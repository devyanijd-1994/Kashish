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

file_put_contents("uploads/webhook_log.txt", date('Y-m-d H:i:s') . " - WEBHOOK: " . $raw . "\n", FILE_APPEND);

if (empty($data)) { http_response_code(400); exit("Invalid"); }

$event   = $data['event']   ?? '';
$payload = $data['payload'] ?? [];

// ============================================================
// HANDLE KYC EVENTS
// ============================================================
if (strpos($event, 'kyc.request') !== false) {
    $kyc        = $payload['kyc_request'] ?? [];
    $request_id = $conn->real_escape_string($kyc['id']     ?? '');
    $status     = $conn->real_escape_string($kyc['status'] ?? '');

    if (empty($request_id)) { http_response_code(400); exit("Missing KYC ID"); }

    $conn->query("UPDATE ekyc SET digio_status='$status' WHERE digio_request_id='$request_id'");

    if (in_array($status, ['approved', 'completed', 'approval_pending'])) {
        // Fetch Aadhaar data
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL            => $base_url . "/client/kyc/v2/" . urlencode($request_id) . "/response",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => json_encode(["id" => $request_id]),
            CURLOPT_HTTPHEADER     => [
                "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
                "Content-Type: application/json",
            ],
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_TIMEOUT        => 30,
        ]);
        $raw_res = curl_exec($curl);
        curl_close($curl);
        file_put_contents("uploads/kyc_response_log.txt", date('Y-m-d H:i:s') . " - KYC RESPONSE [$request_id]: " . $raw_res . "\n", FILE_APPEND);
        $res = json_decode($raw_res, true);

        // Loop through all actions to find aadhaar and pan details
        $actions = $res['actions'] ?? [];
        $aadhaar = [];
        $pan_details = [];
        foreach ($actions as $action) {
            $details = $action['details'] ?? [];
            if (!empty($details['aadhaar'])) $aadhaar     = $details['aadhaar'];
            if (!empty($details['pan']))     $pan_details = $details['pan'];
        }

        if (!empty($aadhaar)) {
            $name      = $conn->real_escape_string($aadhaar['name']            ?? '');
            $dob       = $conn->real_escape_string($aadhaar['dob']             ?? '');
            $gender    = $conn->real_escape_string($aadhaar['gender']          ?? '');
            $id_number = $conn->real_escape_string($aadhaar['id_number']       ?? '');
            $address   = $conn->real_escape_string($aadhaar['current_address'] ?? '');

            $photo_path = '';
            if (!empty($aadhaar['image'])) {
                $img = $aadhaar['image'];
                if (strpos($img, ',') !== false) $img = explode(',', $img)[1];
                $photo_path = "uploads/aadhaar_photo_" . time() . ".png";
                file_put_contents($photo_path, base64_decode($img));
                $photo_path = $conn->real_escape_string($photo_path);
            }

            $conn->query("UPDATE ekyc SET
                aadhaar_ref_id='$id_number', aadhaar_name='$name',
                aadhaar_dob='$dob', aadhaar_gender='$gender',
                aadhaar_address='$address', aadhaar_photo='$photo_path'
                WHERE digio_request_id='$request_id'");
        }

        if (!empty($pan_details)) {
            $pan_name     = $conn->real_escape_string($pan_details['name']      ?? $pan_details['registered_name'] ?? '');
            $pan_dob      = $conn->real_escape_string($pan_details['dob']       ?? $pan_details['date_of_birth']   ?? '');
            $pan_status   = $conn->real_escape_string($pan_details['status']    ?? $pan_details['pan_status']      ?? 'verified');
            $pan_category = $conn->real_escape_string($pan_details['category']  ?? $pan_details['type']            ?? '');
        } else {
            // Fallback: save from request_details (user submitted PAN)
            $req          = $res['request_details'] ?? [];
            $pan_name     = $conn->real_escape_string($req['full_name'] ?? '');
            $pan_dob      = $conn->real_escape_string($req['dob']       ?? '');
            $pan_status   = 'submitted';
            $pan_category = '';
        }

        $conn->query("UPDATE ekyc SET
            pan_verified_name='$pan_name',
            pan_dob='$pan_dob',
            pan_status='$pan_status',
            pan_category='$pan_category'
            WHERE digio_request_id='$request_id'");
    }
}

// ============================================================
// HANDLE DIGISIGN EVENTS
// ============================================================
if (strpos($event, 'doc.') !== false || strpos($event, 'document') !== false) {
    $doc       = $payload['document'] ?? [];
    $doc_id    = $conn->real_escape_string($doc['id']     ?? '');
    $doc_status = $conn->real_escape_string($doc['status'] ?? '');

    if (empty($doc_id)) { http_response_code(200); exit("OK"); }

    $conn->query("UPDATE ekyc SET digio_sign_status='$doc_status' WHERE digio_doc_id='$doc_id'");

    // If document signed — download signed PDF
    if ($doc_status === 'signed' || $event === 'doc.signed') {
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL            => $base_url . "/v2/client/document/download?document_id=" . urlencode($doc_id),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER     => [
                "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
            ],
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_TIMEOUT        => 30,
        ]);
        $pdf_data = curl_exec($curl);
        curl_close($curl);

        if (!empty($pdf_data) && strlen($pdf_data) > 100) {
            $signed_path = "uploads/signed_" . $doc_id . ".pdf";
            file_put_contents($signed_path, $pdf_data);
            $sp = $conn->real_escape_string($signed_path);
            $conn->query("UPDATE ekyc SET signed_pdf='$sp' WHERE digio_doc_id='$doc_id'");
        }
    }
}

http_response_code(200);
echo "OK";
?>
