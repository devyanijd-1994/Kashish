<?php
date_default_timezone_set('Asia/Kolkata');
$conn = new mysqli("localhost", "u574447354_kashishweb", "Apex@#$2024", "u574447354_kashishweb");

$type      = $_GET['type']        ?? '';
$message   = $_GET['exitMessage'] ?? '';
$record_id = intval($_GET['record_id'] ?? 0);

$is_success = ($type === 'success' || ($type !== 'failure' && empty($message)));

if (!$is_success || !$record_id) {
    // Failed
    ?>
<!DOCTYPE html>
<html>
<head><title>Failed</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
<style>body{background:#f0f4ff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}.box{background:#fff;border-radius:16px;padding:50px 40px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,.1);max-width:480px;width:100%}</style>
</head>
<body><div class="box">
<div style="font-size:70px;color:#dc3545;">&#10008;</div>
<h4 class="mt-3 font-weight-bold text-danger">Process Failed</h4>
<p class="text-muted mt-2"><?= htmlspecialchars($message ?: 'Something went wrong. Please try again.') ?></p>
<a href="ekyc.php" class="btn btn-primary mt-3 px-4">Try Again</a>
</div></body></html>
    <?php
    exit;
}

// Check DB — if digio_doc_id is set = eSign callback, else = KYC callback
$row = $conn->query("SELECT full_name, digio_doc_id FROM ekyc WHERE id=$record_id")->fetch_assoc();
$doc_id      = $row['digio_doc_id'] ?? '';
$client_name = $row['full_name']    ?? 'Client';

if (!empty($doc_id)) {
    // ── eSIGN COMPLETED ──
    $conn->query("UPDATE ekyc SET digio_sign_status='signed' WHERE id=$record_id");
    ?>
<!DOCTYPE html>
<html>
<head>
<title>Document Signed Successfully</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
<meta http-equiv="refresh" content="4;url=https://kashishweb.questdigiflex.in">
<style>
body{background:#f0f4ff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.box{background:#fff;border-radius:16px;padding:50px 40px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,.1);max-width:480px;width:100%}
</style>
</head>
<body>
<div class="box">
    <div style="font-size:72px;color:#28a745;">&#10004;</div>
    <h4 class="mt-3 font-weight-bold text-success">Document Signed Successfully!</h4>
    <p class="text-muted mt-2">
        Dear <strong><?= htmlspecialchars($client_name) ?></strong>,<br>
        Your agreement has been digitally signed via Aadhaar eSign.<br>
        A copy will be sent to your registered email.
    </p>
    <p class="text-muted" style="font-size:13px;">Redirecting in <span id="sec">4</span> seconds...</p>
    <a href="https://kashishweb.questdigiflex.in" class="btn btn-success mt-2 px-5">Go to Website ➜</a>
</div>
<script>
var s = 4;
var t = setInterval(function(){
    s--;
    document.getElementById('sec').textContent = s;
    if(s <= 0){ clearInterval(t); window.location.href = 'https://kashishweb.questdigiflex.in'; }
}, 1000);
</script>
</body>
</html>
    <?php
} else {
    // ── KYC COMPLETED → go to sign-process ──
    header("Location: https://kashishweb.questdigiflex.in/sign-process.php?record_id=$record_id");
}
exit;
