<?php
/* $client_id     = "ACK260318121914906BNZ16ACYYIMEUF";
$client_secret = "H3CJX8MXLNBTWI2VUUFBZKZHYO4UNQPR";
$base_url      = "https://ext.digio.in:444"; */

$client_id     = "ACK260227195147680M14OCCESL5MUN9";
$client_secret = "M35812AGC712DPSPUII7Z2YHFJCDW5NH";
$base_url      = "https://api.digio.in";
$request_id = isset($_GET['request_id']) ? trim($_GET['request_id']) : '';
if (empty($request_id)) {
    http_response_code(400);
    echo json_encode(["error" => "request_id is required"]);
    exit;
}

// This endpoint requires POST method
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

$response  = curl_exec($curl);
$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

header("Content-Type: application/json");
http_response_code($http_code);
echo $response;
?>
