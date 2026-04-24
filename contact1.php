<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve the form data
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $segment = $_POST['segment'];
    $message = $_POST['message'];

    // Fetch the location from the IP address using IPInfo
    $ip = $_SERVER['REMOTE_ADDR'];
    $location = 'Unknown';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://ipinfo.io/{$ip}/json");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response) {
        $data = json_decode($response, true);
        if (isset($data['city']) && isset($data['region']) && isset($data['country'])) {
            $location = $data['city'] . ', ' . $data['region'] . ', ' . $data['country'];
        }
    }

    // Set the current date and time with AM/PM format according to Indian Standard Time
    date_default_timezone_set('Asia/Kolkata');
    $date_and_time = date('Y-m-d h:i:s A');

    // Database connection
    $servername = "localhost";
    $username = "u799843929_kashishjoshi"; 
    $password = "Apex@#$2024";
    $dbname = "u799843929_kashishjoshi";
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check for duplicates
    $stmt = $conn->prepare("SELECT id FROM contacts WHERE email = ? AND number = ?");
    $stmt->bind_param("ss", $email, $number);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Duplicate entry found
        echo "Duplicate entry found. The email or phone number already exists.";
    } else {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO contacts (name, number, email, segment, message, location, date_and_time) 
                                VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssss", $name, $number, $email, $segment, $message, $location, $date_and_time);

        // Execute the statement
        if ($stmt->execute()) {
            // Redirect to thankyou.html without any parameters
            header('Location: thankyou.html');
            exit;
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    }

    $conn->close();
} else {
    // If the request method is not POST, return an error
    http_response_code(405);
    echo json_encode(array('message' => 'Method Not Allowed'));
    exit;
}
?>
