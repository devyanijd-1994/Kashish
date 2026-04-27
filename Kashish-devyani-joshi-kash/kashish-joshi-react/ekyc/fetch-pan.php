<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli("localhost", "u574447354_kashishweb", "Apex@#$2024", "u574447354_kashishweb");
/* $client_id     = "ACK260318121914906BNZ16ACYYIMEUF";
$client_secret = "H3CJX8MXLNBTWI2VUUFBZKZHYO4UNQPR";
$base_url      = "https://ext.digio.in:444"; */

$client_id     = "ACK260227195147680M14OCCESL5MUN9";
$client_secret = "M35812AGC712DPSPUII7Z2YHFJCDW5NH";
$base_url      = "https://api.digio.in";


$record_id = intval($_GET['id'] ?? 0);
if ($record_id) {
    $result = $conn->query("SELECT id, full_name, digio_request_id, digio_status FROM ekyc WHERE id=$record_id");
} else {
    $result = $conn->query("SELECT id, full_name, digio_request_id, digio_status FROM ekyc WHERE digio_request_id IS NOT NULL AND digio_request_id != '' ORDER BY id DESC LIMIT 10");
}

echo "<style>body{font-family:monospace;padding:20px;} pre{background:#f4f4f4;padding:15px;border-radius:6px;overflow:auto;} .ok{color:green;font-weight:bold;} .err{color:red;}</style>";
echo "<h2>Digio KYC Response Fetcher</h2>";

while ($row = $result->fetch_assoc()) {
    $rid = $row['digio_request_id'];
    echo "<hr><h3>Record ID: {$row['id']} | {$row['full_name']} | Status: {$row['digio_status']}</h3>";

    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL            => $base_url . "/client/kyc/v2/" . urlencode($rid) . "/response",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode(["id" => $rid]),
        CURLOPT_HTTPHEADER     => [
            "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
            "Content-Type: application/json",
            "Accept: application/json"
        ],
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_TIMEOUT        => 30,
    ]);
    $raw       = curl_exec($curl);
    $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

    file_put_contents("uploads/kyc_response_log.txt",
        date('Y-m-d H:i:s') . " - FETCH [$rid] HTTP $http_code: " . $raw . "\n\n", FILE_APPEND);

    $res = json_decode($raw, true);
    echo "<b>HTTP:</b> $http_code<br>";

    if ($http_code !== 200) {
        echo "<span class='err'>API Error</span><pre>" . htmlspecialchars(json_encode($res, JSON_PRETTY_PRINT)) . "</pre>";
        continue;
    }

    // Try to find PAN in actions details
    $pan_details   = [];
    $pan_key_found = '';
    foreach ($res['actions'] ?? [] as $i => $action) {
        foreach (['pan', 'pan_details', 'pan_card', 'pancard', 'PAN', 'pan_verification'] as $key) {
            if (!empty($action['details'][$key])) {
                $pan_details   = $action['details'][$key];
                $pan_key_found = "actions[$i][details][$key]";
                break 2;
            }
        }
    }

    if (!empty($pan_details)) {
        // PAN came from DigiLocker verification
        echo "<span class='ok'>PAN found via DigiLocker at: $pan_key_found</span><br>";
        $pan_name     = $conn->real_escape_string($pan_details['name'] ?? $pan_details['registered_name'] ?? '');
        $pan_dob      = $conn->real_escape_string($pan_details['dob']  ?? $pan_details['date_of_birth']   ?? '');
        $pan_status   = $conn->real_escape_string($pan_details['status'] ?? $pan_details['pan_status']    ?? 'verified');
        $pan_category = $conn->real_escape_string($pan_details['category'] ?? $pan_details['type']        ?? '');
    } else {
        // Fallback: use request_details (user submitted PAN + name)
        $req          = $res['request_details'] ?? [];
        $pan_name     = $conn->real_escape_string($req['full_name'] ?? '');
        $pan_dob      = $conn->real_escape_string($req['dob']       ?? '');
        $pan_status   = 'submitted';
        $pan_category = '';
        echo "<span class='ok'>PAN not in DigiLocker — saving from request_details (user submitted)</span><br>";
        echo "PAN Number: <b>" . htmlspecialchars($req['pan'] ?? '') . "</b><br>";
    }

    $conn->query("UPDATE ekyc SET
        pan_verified_name='$pan_name',
        pan_dob='$pan_dob',
        pan_status='$pan_status',
        pan_category='$pan_category'
        WHERE id={$row['id']}");
    echo "<span class='ok'>DB updated!</span><br>";

    // Update digio_status
    $api_status = $conn->real_escape_string($res['status'] ?? '');
    if ($api_status) {
        $conn->query("UPDATE ekyc SET digio_status='$api_status' WHERE id={$row['id']}");
        echo "Status: <b>$api_status</b><br>";
    }
}

echo "<hr><p>Log: <b>uploads/kyc_response_log.txt</b></p>";
?>
