<?php
$gw = base64_decode($_POST['gw'] ?? '');
if (empty($gw) || !preg_match('#^https://(ext\.digio\.in|app\.digio\.in|api\.digio\.in)#', $gw)) {
    die("Invalid request.");
}
header("Location: " . $gw);
exit;
