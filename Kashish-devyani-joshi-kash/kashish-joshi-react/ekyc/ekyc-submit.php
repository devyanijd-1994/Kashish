<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli("localhost", "u574447354_kashishweb", "Apex@#$2024", "u574447354_kashishweb");
if ($conn->connect_error) die("DB Error: " . $conn->connect_error);
/* $client_id     = "ACK260318121914906BNZ16ACYYIMEUF";
$client_secret = "H3CJX8MXLNBTWI2VUUFBZKZHYO4UNQPR";
$base_url      = "https://ext.digio.in:444";
$template_name = "KYC INTEGRATION"; */

// Digio API Credentials (Production)
$client_id     = "ACK260227195147680M14OCCESL5MUN9";
$client_secret = "M35812AGC712DPSPUII7Z2YHFJCDW5NH";
$base_url      = "https://api.digio.in";
$template_name = "DIGILOCKER INTEGRATION"; // DIGILOCKER INTEGRATION v5 - latest published

$uploadDir = "uploads/";
if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

$full_name   = trim($_POST['full_name']   ?? '');
$father_name = trim($_POST['father_name'] ?? '');
$mobile      = trim($_POST['mobile']      ?? '');
$email       = trim($_POST['email']       ?? '');
$address     = trim($_POST['address']     ?? '');
$dob         = trim($_POST['dob']         ?? '');
$pan         = strtoupper(trim($_POST['pan'] ?? ''));

$pan_file      = $uploadDir . time() . "_pan_"   . basename($_FILES['pan_file']['name']      ?? 'file');
$aadhaar_front = $uploadDir . time() . "_front_" . basename($_FILES['aadhaar_front']['name'] ?? 'file');
$aadhaar_back  = $uploadDir . time() . "_back_"  . basename($_FILES['aadhaar_back']['name']  ?? 'file');

if (!empty($_FILES['pan_file']['tmp_name']))      move_uploaded_file($_FILES['pan_file']['tmp_name'],      $pan_file);
if (!empty($_FILES['aadhaar_front']['tmp_name'])) move_uploaded_file($_FILES['aadhaar_front']['tmp_name'], $aadhaar_front);
if (!empty($_FILES['aadhaar_back']['tmp_name']))  move_uploaded_file($_FILES['aadhaar_back']['tmp_name'],  $aadhaar_back);

$fn  = $conn->real_escape_string($full_name);
$fan = $conn->real_escape_string($father_name);
$mob = $conn->real_escape_string($mobile);
$em  = $conn->real_escape_string($email);
$add = $conn->real_escape_string($address);
$db  = $conn->real_escape_string($dob);
$pn  = $conn->real_escape_string($pan);

$conn->query("INSERT INTO ekyc (full_name,father_name,mobile,email,address,dob,pan,pan_file,aadhaar_front,aadhaar_back)
    VALUES ('$fn','$fan','$mob','$em','$add','$db','$pn',
    '{$conn->real_escape_string($pan_file)}',
    '{$conn->real_escape_string($aadhaar_front)}',
    '{$conn->real_escape_string($aadhaar_back)}')");
$record_id = $conn->insert_id;

// KYC Workflow API — use mobile as primary identifier so OTP goes to mobile first
$customer_identifier = !empty($mobile) ? $mobile : $email;
$reference_id = 'REF' . $record_id . '_' . time();
$dob_formatted       = !empty($dob) ? date("d-m-Y", strtotime($dob)) : '';

$payload = [
    "customer_identifier"    => $customer_identifier,
    "customer_name"          => $full_name,
    "reference_id"           => $reference_id,
    "template_name"          => $template_name,
    "notify_customer"        => true,
    "generate_access_token"  => true,
    "generate_deeplink_info" => true,
    "expire_in_days"         => 10,
    "request_details"        => [
        "full_name"   => $full_name,
        "father_name" => $father_name,
        "mobile"      => $mobile,
        "email"       => $email,
        "address"     => $address,
        "dob"         => $dob_formatted,
        "pan"         => $pan
    ]
];

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL            => $base_url . "/client/kyc/v2/request/with_template",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_HTTPHEADER     => [
        "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
        "Content-Type: application/json",
        "Accept: application/json"
    ],
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_TIMEOUT        => 60,
]);

$response  = curl_exec($curl);
$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
$curl_err  = curl_error($curl);
curl_close($curl);

if ($curl_err) die("cURL Error: " . htmlspecialchars($curl_err));

// Log API response for debugging
file_put_contents("uploads/kyc_api_log.txt",
    date('Y-m-d H:i:s') . " HTTP:$http_code | " . $response . "\n", FILE_APPEND);

$res = json_decode($response, true);

if ($http_code !== 200 || empty($res['id'])) {
    echo "<pre style='background:#fff3cd;padding:20px;font-family:monospace'>";
    echo "<b>API Error (HTTP $http_code)</b>\n\n";
    echo "<b>Payload:</b>\n" . htmlspecialchars(json_encode($payload, JSON_PRETTY_PRINT));
    echo "\n\n<b>Response:</b>\n" . htmlspecialchars(json_encode($res, JSON_PRETTY_PRINT));
    echo "</pre>";
    exit;
}

// Save to DB
$digio_request_id   = $conn->real_escape_string($res['id']);
$digio_access_token = $conn->real_escape_string((string)($res['access_token']['id'] ?? $res['access_token'] ?? ''));
$conn->query("UPDATE ekyc SET digio_request_id='$digio_request_id', digio_access_token='$digio_access_token' WHERE id=$record_id");

// Build Digio gateway URL
$redirect_back    = urlencode("https://kashishweb.questdigiflex.in/kyc-success.php?status=success&record_id=$record_id");
$access_token_val = is_array($res['access_token']) ? ($res['access_token']['id'] ?? '') : ($res['access_token'] ?? '');

// Use deeplink URL as-is (no redirect_url appended — Digio eDIGIO links don't support it)
if (!empty($res['deeplink_info']['url'])) {
    $gateway_url = $res['deeplink_info']['url'];
} elseif (!empty($access_token_val)) {
    $gateway_url = "https://app.digio.in/#/gateway/login/"
        . urlencode($res['id']) . "/"
        . urlencode($access_token_val) . "/"
        . urlencode($customer_identifier)
        . "?redirect_url=" . $redirect_back;
} else {
    die("Request created (ID: " . htmlspecialchars($digio_request_id) . ") but no redirect URL.");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>KYC & Agreement</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <style>
    body { background: #28a745; display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0; }
    .box { background:#fff; border-radius:12px; padding:50px 40px; max-width:520px; width:100%; box-shadow:0 5px 20px rgba(0,0,0,0.15); }
    .box h4 { font-weight:700; font-size:20px; border-bottom:3px solid #28a745; display:inline-block; padding-bottom:6px; margin-bottom:12px; }
    .box p { color:#555; font-size:14px; margin-bottom:28px; }
    .btn-verify { background:#28a745; color:#fff; padding:12px 32px; border-radius:6px; font-size:15px; font-weight:600; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:8px; transition:background 0.2s; }
    .btn-verify:hover { background:#218838; }
    .btn-verify:disabled { background:#6c757d; cursor:not-allowed; }
    .spinner { display:none; width:16px; height:16px; border:2px solid #fff; border-top-color:transparent; border-radius:50%; animation:spin 0.7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    </style>
</head>
<body>
<div class="box">
    <h4>KYC &amp; Agreement</h4>
    <p>Your details have been saved successfully. Click <strong>Verify</strong> to proceed with Aadhaar KYC authentication.</p>
    <button class="btn-verify" id="btn" onclick="startKYC()">
        <span class="spinner" id="spin"></span>
        <span id="btn-text">Verify &#10148;</span>
    </button>
</div>
<script>
function startKYC() {
    var btn = document.getElementById('btn');
    btn.disabled = true;
    document.getElementById('spin').style.display = 'inline-block';
    document.getElementById('btn-text').textContent = 'Loading...';
    // Direct redirect to Digio deeplink — same link as SMS/email sent to customer
    window.location.href = <?= json_encode($gateway_url) ?>;
}
</script>
</body>
</html>
