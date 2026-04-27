<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli("localhost", "u574447354_kashishweb", "Apex@#$2024", "u574447354_kashishweb");
if ($conn->connect_error) die("DB Error: " . $conn->connect_error);

$uploadDir = "uploads/";
if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

// ── Form data ──
$full_name   = trim($_POST['full_name']   ?? '');
$father_name = trim($_POST['father_name'] ?? '');
$mobile      = trim($_POST['mobile']      ?? '');
$email       = trim($_POST['email']       ?? '');
$address     = trim($_POST['address']     ?? '');
$dob         = trim($_POST['dob']         ?? '');
$pan         = strtoupper(trim($_POST['pan'] ?? ''));

// ── File uploads ──
$pan_file      = $uploadDir . time() . "_pan_"   . basename($_FILES['pan_file']['name']      ?? 'file');
$aadhaar_front = $uploadDir . time() . "_front_" . basename($_FILES['aadhaar_front']['name'] ?? 'file');
$aadhaar_back  = $uploadDir . time() . "_back_"  . basename($_FILES['aadhaar_back']['name']  ?? 'file');

if (!empty($_FILES['pan_file']['tmp_name']))      move_uploaded_file($_FILES['pan_file']['tmp_name'],      $pan_file);
if (!empty($_FILES['aadhaar_front']['tmp_name'])) move_uploaded_file($_FILES['aadhaar_front']['tmp_name'], $aadhaar_front);
if (!empty($_FILES['aadhaar_back']['tmp_name']))  move_uploaded_file($_FILES['aadhaar_back']['tmp_name'],  $aadhaar_back);

// ── Save to DB ──
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

// ── Skip KYC — go directly to document sign ──
header("Location: https://kashishweb.questdigiflex.in/sign-process.php?record_id=$record_id");
exit;
