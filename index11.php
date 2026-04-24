<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve the form data
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $segment = $_POST['segment'];

 function getUserLocation() {
    $ip = $_SERVER['REMOTE_ADDR'];
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }

    // Ensure the IP address is URL-encoded
    $ip = urlencode($ip);
    
    $url = "http://www.geoplugin.net/json.gp?ip={$ip}";
    $response = file_get_contents($url);

    if ($response === FALSE) {
        die('Error fetching GeoPlugin data');
    }

    $data = json_decode($response, true);

    if ($data === NULL) {
        die('Error decoding JSON response');
    }

    // Log the API response for debugging
    error_log(print_r($data, true));

    // Extract city, region, and country information
    $city = isset($data['geoplugin_city']) ? $data['geoplugin_city'] : 'Unknown';
    $region = isset($data['geoplugin_region']) ? $data['geoplugin_region'] : 'Unknown';
    $country = isset($data['geoplugin_countryName']) ? $data['geoplugin_countryName'] : 'Unknown';

    return ['city' => $city, 'region' => $region, 'country' => $country];
}

  

    date_default_timezone_set('Asia/Kolkata');
    // Set the current date and time with AM/PM format
    $date_and_time = date('Y-m-d h:i:s A');

    // Database connection
    $servername = "localhost";
    $username = "u799843929_kashishjoshi"; 
    $password = "Apex@#$2024";
    $dbname = "u799843929_kashishjoshi";
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        $_SESSION['error'] = "Connection failed: " . $conn->connect_error;
        header('Location: index.html');
        exit;
    }

    // Check for duplicates
    $stmt = $conn->prepare("SELECT id FROM homepage WHERE email = ? OR number = ?");
    $stmt->bind_param("ss", $email, $number);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Duplicate entry found
        $_SESSION['error_message'] = "Duplicate entry found. The email or phone number already exists.";
        $stmt->close();
        $conn->close();
        header('Location: index.html');
        exit;
    } else {
        $locationData = getUserLocation();
    $location = $locationData['city'] . ', ' . $locationData['region'] . ', ' . $locationData['country'];
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO homepage (name, number, email, segment, location, date_and_time) 
                                VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $name, $number, $email, $segment, $location, $date_and_time);

        // Execute the statement
        if ($stmt->execute()) {
            // Redirect to thankyou.html without any parameters
            header('Location: https://kashishjoshiresearch.com/tradingtips/thankyou.html');
            exit;
        } else {
            $_SESSION['error_message'] = "Error: " . $stmt->error;
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
