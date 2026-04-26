<?php
session_start();
header('Content-Type: application/json');

$response = array();

if (isset($_SESSION['errors'])) {
    $response['errors'] = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

echo json_encode($response);
?>
