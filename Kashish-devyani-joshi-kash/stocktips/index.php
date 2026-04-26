<?php
// Database connection details
    $servername = "localhost";
    $username = "u799843929_kashishjoshi"; 
    $password = "Apex@#$2024";
    $dbname = "u799843929_kashishjoshi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to get user location based on IP
function getUserLocation() {
    $ip = $_SERVER['REMOTE_ADDR'];
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }

    $ip = urlencode($ip);
    $url = "http://www.geoplugin.net/json.gp?ip={$ip}";
    $response = @file_get_contents($url);
    if ($response === FALSE) {
        return ['city' => 'Unknown', 'region' => 'Unknown', 'country' => 'Unknown'];
    }

    $data = json_decode($response, true);
    if ($data === NULL) {
        return ['city' => 'Unknown', 'region' => 'Unknown', 'country' => 'Unknown'];
    }

    $city = isset($data['geoplugin_city']) ? $data['geoplugin_city'] : 'Unknown';
    $region = isset($data['geoplugin_region']) ? $data['geoplugin_region'] : 'Unknown';
    $country = isset($data['geoplugin_countryName']) ? $data['geoplugin_countryName'] : 'Unknown';

    return ['city' => $city, 'region' => $region, 'country' => $country];
}

// Get the current date and time
date_default_timezone_set('Asia/Kolkata');
$date_and_time = date('Y-m-d h:i:s A');

// Form submission logic
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = mysqli_real_escape_string($conn, trim($_POST['name']));
    $phone = mysqli_real_escape_string($conn, trim($_POST['phone']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $segment = mysqli_real_escape_string($conn, trim($_POST['segment']));

    // Check if the email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "Invalid email format";
        echo "<script>alert('$error_message'); window.history.back();</script>";
        exit();
    }

    // Check for duplicate email or phone number
    $checkQuery = "SELECT * FROM stocktips WHERE email = ? OR phone = ?";
    $stmtCheck = $conn->prepare($checkQuery);
    $stmtCheck->bind_param("ss", $email, $phone);
    $stmtCheck->execute();
    $resultCheck = $stmtCheck->get_result();

    if ($resultCheck->num_rows > 0) {
        $error_message = "Email or Phone number already exists!";
        echo "<script>alert('$error_message'); window.history.back();</script>";
        exit();
    }

    // Get user location
    $locationData = getUserLocation();
    $location = $locationData['city'] . ', ' . $locationData['region'] . ', ' . $locationData['country'];

    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO stocktips (name, phone, email, segment, location, created_at, `from`) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $name, $phone, $email, $segment, $location, $date_and_time, $from);

    // Assign a static value for 'from' field
    $from = 'laptop/pc';

    // Execute the statement
    if ($stmt->execute()) {
        echo "<script>window.location.href = 'https://kashishjoshiresearch.com/tradingtips/thankyou.html';</script>";
        exit();
    } else {
        $error_message = "Error: " . $stmt->error;
        echo "<script>alert('$error_message'); window.history.back();</script>";
    }

    $stmt->close();
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16690661395"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'AW-16690661395');
    </script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Responsive and modern agency template built on Bootstrap 4." />
    <meta name="keywords" content="business, marketing, agency" />
    <title>Kashish Joshi Research</title>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8K6NRCSCVX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-8K6NRCSCVX");
    </script>
    
    
    <!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1096724585197717'); 
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" 
  src="https://www.facebook.com/tr?id=1096724585197717&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->
    
    <!-- favicon -->
    <!--<link rel="icon" href="assets/images/favicon.png" type="image/gif">-->

    <link rel="icon" href="assets/images/Favicon-Icon1.png" type="image/gif" />

    <!-- bootstrap -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <!-- fontawesome -->
    <link rel="stylesheet" href="assets/css/all.min.css" />
    <!-- progress bar -->
    <link rel="stylesheet" href="assets/css/jQuery-plugin-progressbar.css" />
    <!-- mean menu -->
    <link rel="stylesheet" href="assets/css/meanmenu.css" />
    <!-- fontawesome -->
    <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
    <!-- slick -->
    <link rel="stylesheet" href="assets/css/slick.css" />
    <!-- flaticon -->
    <link rel="stylesheet" href="assets/css/font/flaticon.html" />
    <!-- nice select -->
    <link rel="stylesheet" href="assets/css/nice-select.css" />
    <!-- magnific popup -->
    <link rel="stylesheet" href="assets/css/magnific-popup.css" />
    <!-- style -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- responsive -->
    <link rel="stylesheet" href="assets/css/responsive.css" />



    <style>
        #whatsapp-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            /* Ensures it appears above other content */
        }

        #whatsapp-icon:hover img {
            transform: scale(1.1);
            /* Optional: enlarges the icon on hover */
        }


        .hero-utility {
            /*padding: 150px 120px;*/
            padding: 36px 120px;
            position: relative;
        }

        .profess span {
            color: #313493;
        }

        .header {
            /* background-image: linear-gradient(to right,
          #b9cbec,
          #b9cbec,
          #b9cbec,
          #ececed,
          #ececed,
          #b9cbec,
          #b9cbec); */


            background: url("./assets/images/newimg/fhhh.png") center center;

            background-repeat: no-repeat;
            background-size: cover;


            /*box-shadow: 31.133px -31.133px 31.133px 0px rgba(165, 165, 165, 0.07) inset,*/
            /*  -31.133px 31.133px 31.133px 0px rgba(255, 255, 255, 0.07) inset;*/
            /*backdrop-filter: blur(53.86066818237305px);*/
        }


        /*  */
        .single-slider-two {
            /* background: url("../images/newimg/head.png") center center; */

            background: url("./assets/images/newimg/fn1.png") center center;
            /* background-image: linear-gradient(
    to right,
    #b9cbec,
    #b9cbec,
    #b9cbec,
    #ececed,
    #ececed,
    #b9cbec,
    #b9cbec
  ); */
            background-repeat: no-repeat;
            background-size: cover;

            background: url("../images/newimg/head.png") lightgray 0% 0% / 100px 100px repeat,
                rgba(217, 217, 217, 0.07);
            /*box-shadow: 31.133px -31.133px 31.133px 0px rgba(165, 165, 165, 0.07) inset,*/
            /*  -31.133px 31.133px 31.133px 0px rgba(255, 255, 255, 0.07) inset;*/
            /*backdrop-filter: blur(53.86066818237305px);*/
        }

        .offer {
            background-image: linear-gradient(to right, #dceff9, #ebeef0, #ebeef0, #ececed, #eeeded, #eeeded, #eedfe1);
        }

        @media only screen and (max-width: 600px) {
            .site-logo img {
                width: 200px;
            }
        }

        a:hover {
            color: black !important;
        }

        .faq {
            /*padding: 135px 0 67px;*/
            /* 
  background-image: linear-gradient(
    to right,
    #d1e4de,
    #d1e4de,
    #fff,
    #fff,
    #fff,
    #d1e4de,
    #d1e4de
  ); */
            padding: 53px 0 67px;

        }

        .offer {
            padding: 51px 0 80px 0;
        }

        .footer {
            padding: 49px 0 11px 0;
        }

        .footer .newsletter {
            padding-bottom: 10px;
        }

        /* sliders css  */

        /* Image slide1r1 Styles */
        .image-slide1r11 {
            position: relative;
            /* max-width: 800px; */

            max-width: 1145px;
            margin: auto;
            overflow: hidden;
        }

        .slide1r1-container1 {
            position: relative;
        }

        .slide1r1 {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .slide1 {
            min-width: 100%;
            transition: opacity 1s ease;
        }

        .slide1 img {
            width: 100%;
            height: auto;
            display: block;
        }

        /* Navigation button1s */
        button1 {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 24px;
            z-index: 10;
            transition: background-color 0.3s;
        }

        button1:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        .prev1 {
            left: 0;
        }

        .next1 {
            right: 0;
        }

        /* dot1111s Navigation */
        .dot1111s-container1 {
            text-align: center;
            padding-top: 10px;
        }

        .dot1111 {
            height: 15px;
            width: 15px;
            margin: 0 5px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.3s;
            cursor: pointer;
        }

        .dot1111.active {
            background-color: #717171;
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
            .slider-container {
                max-width: 100%;
            }

            button {
                font-size: 18px;
                padding: 8px;
            }

            .dot111 {
                height: 12px;
                width: 12px;
            }
        }

        .box {
            padding: 20px;
            background-color: #303393;
            border: 1px solid #303393;
            border-radius: 5px;
        }

        .box1 img {
            height: auto;

        }
    </style>
</head>

<body>
    <a href="https://wa.link/iw4ct4" id="whatsapp-icon" target="_blank">
        <img src="assets/images/whatapp.png" width="70px" alt="WhatsApp" />
    </a>
    <!-- preloader -->
    <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="object_four"></div>
                <div class="object" id="object_three"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_one"></div>
            </div>
        </div>
    </div>

    <!-- header starts-->
    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-2 col-md-3 col-sm-4">
                    <div class="site-logo">
                        <a href="index">
                            <img src="assets/images/logoo2.png" alt="company logo" />
                        </a>
                    </div>
                </div>

                <div class="col-lg-10 col-md-6 col-sm-4 d-flex justify-content-end">
                    <nav class="main-menu" id="mobile-menu">
                        <ul>
                            <li>
                                <a href="https://kashishjoshiresearch.com/stocktips/" style="font-size: 16px;">Home</a>
                            </li>

                            <li>
                                <a href="#pricing" style="color: rgb(85, 85, 85); font-size: 16px;">Services</a>
                            </li>

                            <li>
                                <a href="#work" style="color: rgb(85, 85, 85); font-size: 16px;">How It Works</a>
                            </li>

                            <li>
                                <a href="#pricing" style="color: rgb(85, 85, 85); font-size: 16px;">Pricing </a>
                            </li>

                            <li>
                                <a href="#lets" style="color: rgb(85, 85, 85); font-size: 16px;">Testimonial</a>
                            </li>

                            <li class=" header-cta num">
                                <a
                                    href="https://api.whatsapp.com/send?phone=919171718451&text=Book%20My%20Trading%20Slot"><span
                                        style="color: black; font-size: 16px; color: rgb(85, 85, 85);">Whatsapp </span>
                                </a>
                            </li>

                            <li class=" header-cta num">
                                <a
                                    href="https://api.whatsapp.com/send?phone=919171718451&text=Book%20My%20Trading%20Slot"><span
                                        style="color: black; font-size: 16px; color: rgb(85, 85, 85);">+91 91717 18451
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col-12">
                    <div class="mobile-menu"></div>
                </div>
            </div>
        </div>
    </header>
    <!-- header ends-->

    <!-- Hero area starts-->

    <section class="hero-area">
        <div class="hero-slider">
            <div class="active-slider">

                <div class="single-slider-two hero-utility">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-8 col-lg-8">
                                <div class="hero-text" style="margin-top: 120px;">
                                    <h2 class="profess">
                                        Profit First, Payment Later <br>
                                        with <span style="font-weight: bold;">Best Trading & Investment Calls</span> <br />
                                        <br />
                                        <span style="background-image: linear-gradient(Transparent, #80d3a8);"><em>Research
                                                Analyst
                                                </em></span>
                                    </h2>
                                    <!-- <h1>Kashish Joshi Research</h1> -->
                                    <h4 class="mt-4">
                                        <img src="assets/images/newimg/Rectangle.png" alt="" />
                                        Get <b>Best Stocks </b> Today for Intraday Trade Tomorrow.
                                    </h4>
                                    <h4 class="mt-4">
                                        <img src="assets/images/newimg/Rectangle.png" alt="" />
                                        Get <b>Profitable</b> Banknifty & Nifty F&O Calls.
                                    </h4>
                                    <h4 class="mt-4">
                                        <img src="assets/images/newimg/Rectangle.png" alt="" />
                                        Get the <b>Best Stocks</b> to Invest in Now.
                                    </h4>
                                </div>

                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="hero-form">
                                    <div style="background-color: #303393; width: 100%; padding: 10px;">
                                        <h4 class="book">Get Free Services<br><span style="font-size: 20px;">SEBI
                                                Registration : INH000017240</span>
                                        </h4>

                                    </div>

                                    <div id="message-container"
                                        style="color: red; margin-bottom: 20px; font-weight: bold"></div>
                                    <form id="dataForm" action="" method="POST">
                                        <div class="form-group mb-2 form-floating">
                                            <div class="row">
                                                <div class="col-12"
                                                    style="justify-content: end; align-items: end; text-align: right;">
                                                    <img src="assets/images/newimg/im1.png"
                                                        style="margin-left: -34px; margin-top: -20px;" width="60px"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div style="margin-left: 10px; margin-right: 10px;">
                                            <div class="form-group floating-label">
                                                <input type="text" id="name" name="name" class="form-control"
                                                    required />
                                                <label for="name">Name</label>
                                            </div>
                                            <div class="form-group floating-label" style="color: black !important;">
                                                <input type="text" id="phone" name="phone" class="form-control"
                                                    minlength="10" maxlength="10" pattern="\d{10}" required />
                                                <label for="phone">Your Number</label>
                                            </div>
                                            <div class="form-group floating-label">
                                                <input type="email" id="email" name="email" class="form-control"
                                                    required />
                                                <label for="email">Your Email</label>
                                            </div>
                                            <div class="form-group mb-3 form-floating">
                                                <select class="form-control" id="segment" name="segment" required>
                                                    <option value="Stock Services - Cash, Future, Option">Bank Nifty/
                                                        Nifty Option</option>
                                                    <option value="Nifty/Bank Nifty Services - Option Future">Bank
                                                        Nifty/ Nifty Future</option>
                                                    <option value="Advance Trading Plan (ATP) Services">Stock Commodity
                                                    </option>
                                                    <option value="Commodity Services">Stock Cash</option>
                                                    <option value="Commodity Services">Stock F&O</option>
                                                    <option value="Commodity Services">Systematic Trading Plan (STP)
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="row">
                                                <div class="col-12"
                                                    style="justify-content: start; align-items: start; text-align: start;">
                                                    <img src="assets/images/newimg/phone.png"
                                                        style="margin-left: -14px; margin-top: -16px;" width="60px"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="header-cta bttnn p-1"
                                            style="margin-bottom: 30px; padding: 16px;">
                                            Start Free Trial
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>

    <style>
        .hero-form {
            background: #fff;
            /* padding: 20px; */
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
        }

        .hero-form .form-control {
            margin-bottom: 10px;
        }

        .hero-form h4 {
            margin-bottom: 15px;
            font-size: 1.5em;
        }

        .hero-form .button {
            width: 100%;
            text-align: center;
        }

        /* button blink css  */
        .blink-button {
            padding: 15px 30px;
            font-size: 18px;
            background-color: #303393;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: blinkAnimation 1s infinite;
            /* Continuous blink animation */
        }

        /* Blink Animation */
        @keyframes blinkAnimation {
            0% {
                background-color: #303393;
                color: white;
            }

            50% {
                background-color: #8dd5b2;
                color: white;
            }

            100% {
                background-color: #303393;
                color: white;
            }
        }

        /* left right sections  */

        .responsive-section11 {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            margin: 0 auto;
            max-width: 1200px;
            /* Max width of the section */
        }

        .image-container11 {
            flex: 1;
            max-width: 45%;
            margin-right: 20px;
        }

        .image-container11 img {
            width: 90%;
            height: 600px;
            border-radius: 8px;
        }

        .content-container11 {
            flex: 1;
            max-width: 45%;
            text-align: center;
        }

        .content-container11 {
            background-color: navy !important;
        }

        .cta-button11 {
            background-color: #007BFF;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease;
        }

        .cta-button11:hover {
            background-color: #0056b3;
        }

        /* Responsive Design: Stack image and content on smaller screens */
        @media screen and (max-width: 768px) {
            .responsive-section11 {
                flex-direction: column;
                align-items: center;
            }

            .image-container11,
            .content-container11 {
                max-width: 90%;
                /* Allow content to take more space on small screens */
                margin-bottom: 20px;
            }


            .cta-button11 {
                font-size: 1.1rem;
            }
        }
    </style>
    <!-- Hero area ends -->

    <!-- About Area Starts -->
    <!-- <section class="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-content">
            <div class="section-title">
              <div class="sub-heading">
                <img src="assets/images/section-title-icon.png" alt="caret" />
                <p>
                  Important Aspects of Our Financial Services
                  <img src="assets/images/newimg/arrow.png" width="80px" alt="" />
                </p>
              </div>
              <h2>
                Change Your 
                <span style="color: #303393;"><em>Investing </em><br />
                  <em>Approach</em></span>
                with the Help of <br />
                <span style="background-image: linear-gradient(#fff, #fff, #80d3a8); color: #303393;"><em> Kashish Joshi
                    Research</em></span>
              </h2>
            </div>

            <div class="text-content">
              <p>
                Have inquiries? We possess solutions. <br />
                Please give us a WhatsApp at
              </p>

              <div class="progress-wrapper">

              </div>


              <button style="border-radius: 40px; padding: 10px; border: 1px solid #313493; background-color: #fff; class="s">
                <a class="" href="https://api.whatsapp.com/send?phone=919171718451&text=Book%20My%20Trading%20Slot">
                <img src="assets/images/newimg/wt.png" width="36px" alt="" /> +91 91717
                18451</a>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-6 r-margin-top">
          <div class="container my-4">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-md-6 col-lg-12 mb-4">
                    <div class="card"
                      style="border-radius: 20px; box-shadow: rgba(17, 17, 26, 0.05) 0px 0px 0px, rgba(17, 17, 26, 0.05) 0px 8px 12px;">
                      <div class="card-body">
                        <img src="assets/images/newimg/card1-img.png" alt="">

                        <h5 class="card-title" style="color: #80D3A8;">Optimize Your Profitability</h5>
                        <p class="card-text">With our carefully thought-out recommendations, which are made to maximize
                          profits and minimize risk, you may realize the full potential of your investments</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-12 mb-4">
                    <div class="card"
                      style="border-radius: 20px; box-shadow: rgba(17, 17, 26, 0.05) 0px 0px 0px, rgba(17, 17, 26, 0.05) 0px 8px 12px;">
                      <div class="card-body">
                        <img src="assets/images/newimg/card2-img.png" alt="">
                        <h5 class="card-title" style="color: #303393;">Keep Up with the Trends</h5>
                        <p class="card-text">Keep abreast with current events and chances for investment with the help
                          of modern study and immediate market information.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             <div class="col-lg-6 col-md-12 mb-3 right-box" style="margin-top: 120px;">
                <div class="card h-75"
                  style="border-radius: 20px; box-shadow: rgba(17, 17, 26, 0.05) 0px 0px 0px, rgba(17, 17, 26, 0.05) 0px 8px 12px; background-color: #313493;">
                  <div class="card-body">
                    <img src="assets/images/newimg/card3-img.png" alt="">
                    <h5 class="card-title" style="color: #FF943F;">Customized Solutions</h5>
                    <p class="card-text text-white">Get individualized Research plans that complement your financial
                      objectives and offer precise pointers for portfolio optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section> -->
    <!-- About area ends -->

    <!-- Offer area starts -->
    <!-- <section class="offer" id="work">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <div class="sub-heading">
             <p>Behind the Scenes</p>
            </div>
            <h2 class="invest" style="text-align: center;"><span><em>Investing Strategy</em></span> Transformation with
              <br>
              <span style="background-image: linear-gradient(Transparent, #80d3a8);"><em>Kashish Joshi
                  Research</em></span>
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 r-mb p-0">
         <div class="offer-wrapper"
            style="border-top: 2px solid #3f42a3; border-top-left-radius: 20px;  border-top-right-radius: 20px; border-left: 2px solid #4b4eb4; height: 240px; border-right: 2px solid #989acc;  ">

            <iconify-icon icon="fluent-mdl2:design"></iconify-icon>
            <div class="dot"></div>
            <h2 style="text-align: center; color: #303393; font-size: 50px;">1</h2>
            <h5 style="text-align: center;">Get Your Free Trial Started</h5>
            <p style="text-align: center; ">
              Take use of our premium advice and insights without taking any risks, and observe how we can improve your
              investing approach
            </p>
            <div class="dot2"></div>
          </div>
         </div>

        <div class="col-lg-4 r-mb p-0">
          <div class="offer-wrapper"
            style=" border-bottom: 2px solid rgb(162, 163, 209); border-bottom-left-radius: 20px;     border-bottom-right-radius: 20px;  ">
            <iconify-icon icon="fluent:archive-settings-24-regular"></iconify-icon>

            <p>Receive individualized recommendations for stocks and commodities based on thorough analysis catered to
              your financial objectives</p>
            <h5>Get Professional Suggestions </h5>
            <h2 style="text-align: center; color: #303393; font-size: 50px;">2</h2>
            <div class="dot1"></div>

          </div>
        </div>

        <div class="col-lg-4 p-0">
          <div class="offer-wrapper" style="border-top: 2px solid #b7b8d8; border-top-left-radius: 20px;  border-top-right-radius: 20px; border-left: 2px solid #b7b8d8; height: 240px; border-right: 2px solid #d2d3e8; 
          
            ">
            <iconify-icon icon="carbon:application-web"></iconify-icon>
            <div class="dot"></div>
            <h2 style="text-align: center; color: #303393; font-size: 50px;">3</h2>
            <h5 style="text-align: center;">Make Well-Informed <br> Investment Selections</h5>
            <p style="text-align: center; ">
              Make strategic investments and move ahead of current markets by utilizing our knowledge to achieve the
              best possible results.
            </p>
          </div>
        </div>


      </div>
    </div>
  </section> -->


    <!-- screen shot images starts  -->
    <!-- Image slide1r1 Section -->
    <section class="image-slide1r11">
        <div>
            <div class="section-title">
                <p style="text-align: center; margin-top: 60px; ">Start Profit </p>
                <h2 class="invest"
                    style="text-align: center; color: #454040;   margin-bottom: 60px; font-size: 30px; color: black; ">
                    <span style="color:  #303393; font-size: 40px;"> Making Journey Today</span> <br>
                    <!-- <span style="color: black; background-image: linear-gradient(Transparent, #80d3a8);"> Research
                Solutions</span> -->
                </h2>

            </div>
        </div>
        <div class="slide1r1-container1">

            <div style="margin-top: -50px;">
                <hr
                    style="border: 1px solid #808080; width: 250px; text-align: center; justify-content: center; align-items: center;">

            </div>
            <div class="slide1r1">
                <div class="slide1">
                    <img src="./assets/images/newimg/ss1.png" alt="Screenshot 1">
                </div>
                <div class="slide1">
                    <img src="./assets/images/newimg/ss22.png" alt="Screenshot 2">
                </div>
                <!-- <div class="slide1">
                <img src="image3.jpg" alt="Screenshot 3">
            </div>
            <div class="slide1">
                <img src="image4.jpg" alt="Screenshot 4">
            </div> -->
            </div>

            <!-- Navigation button1s -->
            <button1 class="prev1" onclick="moveslide1(-1)">&#10094;</button1>
            <button1 class="next1" onclick="moveslide1(1)">&#10095;</button1>
        </div>

        <!-- Navigation dot1111s -->
        <div class="dot1111s-container1">
            <span class="dot1111" onclick="currentslide1(0)"></span>
            <span class="dot1111" onclick="currentslide1(1)"></span>
            <span class="dot1111" onclick="currentslide1(2)"></span>
            <!-- <span class="dot1111" onclick="currentslide1(3)"></span> -->
        </div>

    </section>

    <!-- button blink -->
    <div style="text-align: center; align-items: center; justify-content: center; margin-top: 40px;">
        <button class="blink-button"><a
                href="https://api.whatsapp.com/send?phone=919171718451&text=Book%20My%20Trading%20Slot">Start Chat With
                Research Analysts</a> </button>
    </div>
    <!-- screen shor images ends  -->
    <!-- left right sections starts -->
    <section class="responsive-section11" style="margin-top: 80px;">
        <!-- <div class="image-container11">
        <img src="assets/images/newimg/certificate1.png" alt="Example Image">
    </div>
    <div class="content-container11 ">
        <h2>Heading for the Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel urna eu justo consequat tempus. Integer vestibulum nisi a gravida fermentum.</p>
        <button class="cta-button11">Learn More</button>
    </div> -->

        <div class="container py-4">
            <div class="row">
                <!-- Left Side Box -->
                <div class="col-md-5 mb-3">
                    <div class="box1" style="height: auto;">
                        <div> <img src="assets/images/newimg/certificates.png" width="100%" alt="Example Image"></div>
                    </div>
                </div>
                <!-- Right Side Box -->
                <div class="col-md-6 mb-3">
                    <div class="box">
                        <h4 style="text-align: center !important; color: white; margin-top: 30px;">Your Trades is Our
                            Concern </h4>
                        <h2 style="text-align: center !important; color: white; margin-top: 10px;">Why Traders Trust Us
                        </h2>
                        <div>
                            <div class="d-flex mt-4">
                                <div> <img src="assets/images/newimg/cirlce1.png" width="40px" alt=""></div>
                                <div class="mt-2 " style="margin-left: 10px; font-size: 20px; color: white;"><span
                                        style="font-weight: bold;">SEBI Registered</span> Analyst.</div>
                            </div>

                            <div class="d-flex mt-4">
                                <div> <img src="assets/images/newimg/circle2.png" width="40px" alt=""></div>
                                <div class="mt-2 " style="margin-left: 10px; font-size: 20px; color: white;">Dedicated
                                    <span style="font-weight: bold;">Risk Management.</span>
                                </div>
                            </div>

                            <div class="d-flex mt-4">
                                <div> <img src="assets/images/newimg/circle3.png" width="40px" alt=""></div>
                                <div class="mt-2 " style="margin-left: 10px; font-size: 20px; color: white;"><span
                                        style="font-weight: bold;">Live Market</span> Support.</div>
                            </div>




                            <div class="d-flex mt-4">
                                <div> <img src="assets/images/newimg/circle4.png" width="40px" alt=""></div>
                                <div class="mt-2 " style="margin-left: 10px; font-size: 20px; color: white;"><span
                                        style="font-weight: bold;">Limited Trades </span> for
                                    <span style="font-weight: bold;">maximum gains.</span>
                                </div>
                            </div>

                            <div class="d-flex mt-4">
                                <div> <img src="assets/images/newimg/circle5.png" width="40px" alt=""></div>
                                <div class="mt-2 " style="margin-left: 10px; font-size: 20px; color: white;"> <span
                                        style="font-weight: bold;">Online research </span>support. </div>
                            </div>

                            <div class="d-flex mt-4">
                                <div> <img src="assets/images/newimg/circle6.png" width="40px" alt=""></div>
                                <div class="mt-2 " style="margin-left: 10px; font-size: 20px; color: white;"><span
                                        style="font-weight: bold;">Technical & Fundamental Research. </span> </div>
                            </div>

                            <div style="margin-top: 4px; margin-bottom: 30px; ">
                                <div style="text-align: center; align-items: center; justify-content: center;">
                                    <button class="blink-button"><a
                                            href="https://api.whatsapp.com/send?phone=919171718451&text=Book%20My%20Trading%20Slot">
                                            Enroll Now</a> </button>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!-- FAQ starts -->
    <section class="faq" id="pricing">


        <div class="container">


            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <p style="text-align: center;">Pricing Plans</p>

                        <h2 class="invest"
                            style="text-align: center; color: #454040; font-size: 20px; margin-bottom: 60px; font-size: 30px; color: black; ">
                            Pay For <span style="color:  #303393;"><em> Profitable Research</em></span> Calls <br>
                            <!-- <span style="color: black; background-image: linear-gradient(Transparent, #80d3a8);"> Research
                Solutions</span> -->
                        </h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <!-- 1st staets  -->
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="">
                                <h5 class="card-title"
                                    style="color: black; text-align: center; color: #303393; padding: 6px; font-size: 26px;">
                                    Bank
                                    Nifty/ <br>
                                    Nifty Option</h5>

                                <div class="carddd-content1 text-center">
                                    <p style="color: white;">Starting From</p>
                                    <h3><span>₹ 4,999 / Year</span></h3>
                                </div>
                                <p class="card-text text-center as">3–4 well-crafted suggestions every day </p>


                                <p class="card-text text-center as">As advised, three goals and a loss <br>
                                    buffer</p>

                                <p class="card-text text-center as">Quick updates with text message</p>

                                <p class="card-text text-center as">Entire nifty evaluations</p>

                                <p class="card-text text-center as">Two or three open positions at most <br>
                                    at once</p>


                                <!-- <div class="chose"> -->
                                <!-- <button class="chhoose">Choose Plan</button> -->
                                <div class="container my-4 chose1">
                                    <!-- Button to Open Modal -->
                                    <button type="button" class="btn " data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" style="color: white; background-color: #303393;">
                                        Choose Plan
                                    </button>
                                </div>

                                <!-- model starts -->

                                <div>
                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" style="padding: 40px; ">
                                            <div class="modal-content">
                                                <div class="modal-header"
                                                    style="background-color: #303393; width: 100%; padding: 10px;">
                                                    <div>
                                                        <h4 class="book">Get Free Services<br><span
                                                                style="font-size: 20px;">SEBI Registration
                                                                : INH000017240</span></h4>

                                                    </div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"> X
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <!-- Form Inside Modal -->
                                                    <form id="dataForm" action="" method="POST">
                                                        <div class="form-group mb-2 form-floating">
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: end; align-items: end; text-align: right;">
                                                                    <img src="assets/images/newimg/im1.png"
                                                                        style="margin-left: -34px; margin-top: -20px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="margin-left: 10px; margin-right: 10px;">
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="name" name="name"
                                                                    class="form-control" required />
                                                                <label for="name">Name</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="phone" name="phone"
                                                                    class="form-control" minlength="10" maxlength="10"
                                                                    pattern="\d{10}" required />
                                                                <label for="phone">Your Number</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="email" id="email" name="email"
                                                                    class="form-control" required />
                                                                <label for="email">Your Email</label>
                                                            </div>
                                                            <div class="form-group mb-3 form-floating">
                                                                <select class="form-control" id="segment" name="segment"
                                                                    required>
                                                                    <option
                                                                        value="Stock Services - Cash, Future, Option">
                                                                        Bank Nifty/ Nifty Option</option>
                                                                    <option
                                                                        value="Nifty/Bank Nifty Services - Option Future">
                                                                        Bank Nifty/ Nifty Future</option>
                                                                    <option value="Advance Trading Plan (ATP) Services">
                                                                        Stock Commodity</option>
                                                                    <option value="Commodity Services">Stock Cash
                                                                    </option>
                                                                    <option value="Commodity Services">Stock F&O
                                                                    </option>
                                                                    <option value="Commodity Services">Systematic
                                                                        Trading Plan (STP)</option>
                                                                </select>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: start; align-items: start; text-align: start;">
                                                                    <img src="assets/images/newimg/phone.png"
                                                                        style="margin-left: -14px; margin-top: -16px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="header-cta bttnn p-1"
                                                            style="margin-bottom: 30px; padding: 16px;">
                                                            Start Free Trial
                                                        </button>
                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- model ends -->
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="">
                                <h5 class="card-title"
                                    style="color: black; text-align: center; color: #F2B54C; padding: 6px; font-size: 26px;">
                                    Bank
                                    Nifty/ <br>
                                    Nifty Future</h5>
                                <!-- <p style="text-align: center; background-color: #303393; width: 100%;  ">Starting From <br> <span>₹ 4,999 / Year/</span></p> -->
                                <div class="carddd-content text-center">
                                    <p style="color: white;">Starting From</p>
                                    <h3><span>₹ 4,999 / Year</span></h3>
                                </div>
                                <p class="card-text text-center as">2 to 3 carefully suggestions every day</p>


                                <p class="card-text text-center as">Three precisely measured goal levels and <br>
                                    a stop-loss</p>

                                <p class="card-text text-center as">Timely notifications with SMS</p>

                                <p class="card-text text-center as">Ample time to complete trades</p>

                                <p class="card-text text-center as">2 or 3 open positions at most at <br> once </p>


                                <!-- <div class="chose">
                  <button class="chhoose">Choose Plan</button>
                </div> -->
                                <div class="container my-4 chose1">
                                    <!-- Button to Open Modal -->
                                    <button type="button" class="btn " data-bs-toggle="modal"
                                        data-bs-target="#exampleModal1"
                                        style="color: white; background-color: #303393;">
                                        Choose Plan
                                    </button>
                                </div>

                                <!-- model starts -->

                                <div>
                                    <div class="modal fade" id="exampleModal1" tabindex="-1"
                                        aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                        <div class="modal-dialog" style="padding: 40px; ">
                                            <div class="modal-content">
                                                <div class="modal-header"
                                                    style="background-color: #303393; width: 100%; padding: 10px;">
                                                    <div>
                                                        <h4 class="book">Get Free Services<br><span
                                                                style="font-size: 20px;">SEBI Registration
                                                                : INH000017240</span></h4>

                                                    </div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close">X
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <!-- Form Inside Modal -->
                                                    <form id="dataForm" action="" method="POST">
                                                        <div class="form-group mb-2 form-floating">
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: end; align-items: end; text-align: right;">
                                                                    <img src="assets/images/newimg/im1.png"
                                                                        style="margin-left: -34px; margin-top: -20px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="margin-left: 10px; margin-right: 10px;">
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="name" name="name"
                                                                    class="form-control" required />
                                                                <label for="name">Name</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="phone" name="phone"
                                                                    class="form-control" minlength="10" maxlength="10"
                                                                    pattern="\d{10}" required />
                                                                <label for="phone">Your Number</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="email" id="email" name="email"
                                                                    class="form-control" required />
                                                                <label for="email">Your Email</label>
                                                            </div>
                                                            <div class="form-group mb-3 form-floating">
                                                                <select class="form-control" id="segment" name="segment"
                                                                    required>
                                                                    <option
                                                                        value="Stock Services - Cash, Future, Option">
                                                                        Bank Nifty/ Nifty Future</option>
                                                                    <option
                                                                        value="Nifty/Bank Nifty Services - Option Future">
                                                                        Bank Nifty/ Nifty Option</option>
                                                                    <option value="Advance Trading Plan (ATP) Services">
                                                                        Stock Commodity</option>
                                                                    <option value="Commodity Services">Stock Cash
                                                                    </option>
                                                                    <option value="Commodity Services">Stock F&O
                                                                    </option>
                                                                    <option value="Commodity Services">Systematic
                                                                        Trading Plan (STP)</option>
                                                                </select>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: start; align-items: start; text-align: start;">
                                                                    <img src="assets/images/newimg/phone.png"
                                                                        style="margin-left: -14px; margin-top: -16px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="header-cta bttnn p-1"
                                                            style="margin-bottom: 30px; padding: 16px;">
                                                            Start Free Trial
                                                        </button>
                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- model ends -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="">
                                <h5 class="card-title"
                                    style="color: black; text-align: center; color: #027878; padding: 6px; font-size: 26px;">
                                    Stock <br>
                                    Commodity</h5>
                                <!-- <p style="text-align: center; background-color: #303393; width: 100%;  ">Starting From <br> <span>₹ 4,999 / Year/</span></p> -->
                                <div class="carddd-content3 text-center">
                                    <p style="color: white;">Starting From</p>
                                    <h3><span>₹ 4,999 / Year</span></h3>
                                </div>

                                <p class="card-text text-center as">3 to 4 carefully suggestions every day </p>


                                <p class="card-text text-center as">A precise stop-loss and three <br>
                                    goal levels</p>

                                <p class="card-text text-center as">Quick updates with text message</p>

                                <p class="card-text text-center as">Entire nifty evaluations</p>

                                <p class="card-text text-center as">2 or 3 open positions at most at <br> once</p>

                                <div class="container my-4 chose1">
                                    <!-- Button to Open Modal -->
                                    <button type="button" class="btn " data-bs-toggle="modal"
                                        data-bs-target="#exampleModal2"
                                        style="color: white; background-color: #303393;">
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- model starts -->

                        <div>
                            <div class="modal fade" id="exampleModal2" tabindex="-1"
                                aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                <div class="modal-dialog" style="padding: 40px; ">
                                    <div class="modal-content">
                                        <div class="modal-header"
                                            style="background-color: #303393; width: 100%; padding: 10px;">
                                            <div>
                                                <h4 class="book">Get Free Services<br><span
                                                        style="font-size: 20px;">SEBI Registration : INH000017240</span>
                                                </h4>

                                            </div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"> X
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <!-- Form Inside Modal -->
                                            <form id="dataForm" action="" method="POST">
                                                <div class="form-group mb-2 form-floating">
                                                    <div class="row">
                                                        <div class="col-12"
                                                            style="justify-content: end; align-items: end; text-align: right;">
                                                            <img src="assets/images/newimg/im1.png"
                                                                style="margin-left: -34px; margin-top: -20px;"
                                                                width="60px" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style="margin-left: 10px; margin-right: 10px;">
                                                    <div class="form-group floating-label">
                                                        <input type="text" id="name" name="name" class="form-control"
                                                            required />
                                                        <label for="name">Name</label>
                                                    </div>
                                                    <div class="form-group floating-label">
                                                        <input type="text" id="phone" name="phone" class="form-control"
                                                            minlength="10" maxlength="10" pattern="\d{10}" required />
                                                        <label for="phone">Your Number</label>
                                                    </div>
                                                    <div class="form-group floating-label">
                                                        <input type="email" id="email" name="email" class="form-control"
                                                            required />
                                                        <label for="email">Your Email</label>
                                                    </div>
                                                    <div class="form-group mb-3 form-floating">
                                                        <select class="form-control" id="segment" name="segment"
                                                            required>
                                                            <option value="Stock Services - Cash, Future, Option">Stock
                                                                Commodity</option>
                                                            <option value="Nifty/Bank Nifty Services - Option Future">
                                                                Bank Nifty/ Nifty Option</option>
                                                            <option value="Advance Trading Plan (ATP) Services">Bank
                                                                Nifty/ Nifty Future</option>
                                                            <option value="Commodity Services">Stock Cash</option>
                                                            <option value="Commodity Services">Stock F&O</option>
                                                            <option value="Commodity Services">Systematic Trading Plan
                                                                (STP)</option>
                                                        </select>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12"
                                                            style="justify-content: start; align-items: start; text-align: start;">
                                                            <img src="assets/images/newimg/phone.png"
                                                                style="margin-left: -14px; margin-top: -16px;"
                                                                width="60px" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" class="header-cta bttnn p-1"
                                                    style="margin-bottom: 30px; padding: 16px;">
                                                    Start Free Trial
                                                </button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- model ends -->
                    </div>
                </div>
            </div>

            <!-- 1st ends  -->

        </div>
        </div>

        </div>
        <!-- 2nd starts -->
        <div class="container">


            <br>
            <br>
            <div class="container">
                <div class="row">
                    <!-- 1st staets  -->
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="">
                                <h5 class="card-title"
                                    style="color: black; text-align: center; color: #61A7BE; padding: 6px; font-size: 26px;">
                                    Stock
                                    Cash </h5>
                                <!-- <p style="text-align: center; background-color: #303393; width: 100%;  ">Starting From <br> <span>₹ 4,999 / Year/</span></p> -->
                                <div class="carddd-content4 text-center">
                                    <p style="color: white;">Starting From</p>
                                    <h3><span>₹ 4,999 / Year</span></h3>
                                </div>
                                <p class="card-text text-center as">3–4 well-crafted suggestions every day </p>


                                <p class="card-text text-center as">As advised, three goals and a loss <br>
                                    buffer</p>

                                <p class="card-text text-center as">Quick updates with text message</p>

                                <p class="card-text text-center as">Entire nifty evaluations</p>

                                <p class="card-text text-center as">Two or three open positions at most <br>
                                    at once</p>




                                <div class="container my-4 chose1">
                                    <!-- Button to Open Modal -->
                                    <button type="button" class="btn " data-bs-toggle="modal"
                                        data-bs-target="#exampleModal3"
                                        style="color: white; background-color: #303393;">
                                        Choose Plan
                                    </button>
                                </div>

                                <!-- model starts -->

                                <div>
                                    <div class="modal fade" id="exampleModal3" tabindex="-1"
                                        aria-labelledby="exampleModalLabel3" aria-hidden="true">
                                        <div class="modal-dialog" style="padding: 40px; ">
                                            <div class="modal-content">
                                                <div class="modal-header"
                                                    style="background-color: #303393; width: 100%; padding: 10px;">
                                                    <div>
                                                        <h4 class="book">Get Free Services<br><span
                                                                style="font-size: 20px;">SEBI Registration
                                                                : INH000017240</span></h4>

                                                    </div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"> X
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <!-- Form Inside Modal -->
                                                    <form id="dataForm" action="" method="POST">
                                                        <div class="form-group mb-2 form-floating">
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: end; align-items: end; text-align: right;">
                                                                    <img src="assets/images/newimg/im1.png"
                                                                        style="margin-left: -34px; margin-top: -20px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="margin-left: 10px; margin-right: 10px;">
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="name" name="name"
                                                                    class="form-control" required />
                                                                <label for="name">Name</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="phone" name="phone"
                                                                    class="form-control" minlength="10" maxlength="10"
                                                                    pattern="\d{10}" required />
                                                                <label for="phone">Your Number</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="email" id="email" name="email"
                                                                    class="form-control" required />
                                                                <label for="email">Your Email</label>
                                                            </div>
                                                            <div class="form-group mb-3 form-floating">
                                                                <select class="form-control" id="segment" name="segment"
                                                                    required>
                                                                    <option
                                                                        value="Stock Services - Cash, Future, Option">
                                                                        Stock Cash</option>
                                                                    <option
                                                                        value="Nifty/Bank Nifty Services - Option Future">
                                                                        Bank Nifty/Nifty Option</option>
                                                                    <option value="Advance Trading Plan (ATP) Services">
                                                                        Bank Nifty/Nifty Future</option>
                                                                    <option value="Commodity Services">Stock Commodity
                                                                    </option>
                                                                    <option value="Commodity Services">Stock F&O
                                                                    </option>
                                                                    <option value="Commodity Services">Systematic
                                                                        Trading Plan (STP)</option>
                                                                </select>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: start; align-items: start; text-align: start;">
                                                                    <img src="assets/images/newimg/phone.png"
                                                                        style="margin-left: -14px; margin-top: -16px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="header-cta bttnn p-1"
                                                            style="margin-bottom: 30px; padding: 16px;">
                                                            Start Free Trial
                                                        </button>
                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- model ends -->
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="">
                                <h5 class="card-title"
                                    style="color: black; text-align: center; color: #3C4E8C; padding: 6px; font-size: 26px;">
                                    Stock F&O
                                </h5>
                                <!-- <p style="text-align: center; background-color: #303393; width: 100%;  ">Starting From <br> <span>₹ 4,999 / Year/</span></p> -->
                                <div class="carddd-content5 text-center">
                                    <p style="color: white;">Starting From</p>
                                    <h3><span>₹ 4,999 / Year</span></h3>
                                </div>
                                <p class="card-text text-center as">3–4 well-crafted suggestions every day</p>


                                <p class="card-text text-center as">As advised, three goals and a loss <br>
                                    buffer</p>

                                <p class="card-text text-center as">Quick updates with text message</p>

                                <p class="card-text text-center as">Entire nifty evaluations</p>

                                <p class="card-text text-center as">Two or three open positions at most <br>
                                    at once </p>


                                <!-- <div class="chose">
                  <button class="chhoose">Choose Plan</button>
                </div> -->

                                <div class="container my-4 chose1">
                                    <!-- Button to Open Modal -->
                                    <button type="button" class="btn " data-bs-toggle="modal"
                                        data-bs-target="#exampleModal4"
                                        style="color: white; background-color: #303393;">
                                        Choose Plan
                                    </button>
                                </div>

                                <!-- model starts -->

                                <div>
                                    <div class="modal fade" id="exampleModal4" tabindex="-1"
                                        aria-labelledby="exampleModalLabel4" aria-hidden="true">
                                        <div class="modal-dialog" style="padding: 40px; ">
                                            <div class="modal-content">
                                                <div class="modal-header"
                                                    style="background-color: #303393; width: 100%; padding: 10px;">
                                                    <div>
                                                        <h4 class="book">Get Free Services<br><span
                                                                style="font-size: 20px;">SEBI Registration
                                                                : INH000017240</span></h4>

                                                    </div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"> X
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <!-- Form Inside Modal -->
                                                    <form id="dataForm" action="" method="POST">
                                                        <div class="form-group mb-2 form-floating">
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: end; align-items: end; text-align: right;">
                                                                    <img src="assets/images/newimg/im1.png"
                                                                        style="margin-left: -34px; margin-top: -20px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="margin-left: 10px; margin-right: 10px;">
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="name" name="name"
                                                                    class="form-control" required />
                                                                <label for="name">Name</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="phone" name="phone"
                                                                    class="form-control" minlength="10" maxlength="10"
                                                                    pattern="\d{10}" required />
                                                                <label for="phone">Your Number</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="email" id="email" name="email"
                                                                    class="form-control" required />
                                                                <label for="email">Your Email</label>
                                                            </div>
                                                            <div class="form-group mb-3 form-floating">
                                                                <select class="form-control" id="segment" name="segment"
                                                                    required>
                                                                    <option value="Stock F&O">Stock F&O</option>
                                                                    <option value="Bank Nifty/Nifty Option">Bank
                                                                        Nifty/Nifty Option</option>
                                                                    <option value="Bank Nifty/Nifty Future">Bank
                                                                        Nifty/Nifty Future</option>
                                                                    <option value="Stock Commodity">Stock Commodity
                                                                    </option>
                                                                    <option value="Stock Cash">Stock Cash</option>
                                                                    <option value="Systematic Trading Plan (STP)">
                                                                        Systematic Trading Plan (STP)</option>
                                                                </select>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: start; align-items: start; text-align: start;">
                                                                    <img src="assets/images/newimg/phone.png"
                                                                        style="margin-left: -14px; margin-top: -16px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="header-cta bttnn p-1"
                                                            style="margin-bottom: 30px; padding: 16px;">
                                                            Start Free Trial
                                                        </button>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- model ends -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="">
                                <h5 class="card-title"
                                    style="color: black; text-align: center; color: #3C4E8C; padding: 6px; font-size: 24px;">
                                    Systematic Trading Plan
                                    (STP)</h5>
                                <!-- <p style="text-align: center; background-color: #303393; width: 100%;  ">Starting From <br> <span>₹ 4,999 / Year/</span></p> -->
                                <div class="carddd-content6 text-center">
                                    <p style="color: white;">Starting From</p>
                                    <h3><span>₹ 24,999 / Year</span></h3>
                                </div>
                                <p class="card-text text-center as">3–4 well-crafted suggestions every day</p>


                                <p class="card-text text-center as">As advised, three goals and a loss <br>
                                    buffer</p>

                                <p class="card-text text-center as">Quick updates with text message</p>

                                <p class="card-text text-center as">Risk Rewards Ratio 1 : 2</p>

                                <p class="card-text text-center as">Two or three open positions at most <br>
                                    at once</p>

                                <!-- 
                <div class="chose">
                  <button class="chhoose">Choose Plan</button>
                </div> -->
                                <div class="container my-4 chose1">
                                    <!-- Button to Open Modal -->
                                    <button type="button" class="btn " data-bs-toggle="modal"
                                        data-bs-target="#exampleModal5"
                                        style="color: white; background-color: #303393;">
                                        Choose Plan
                                    </button>
                                </div>

                                <!-- model starts -->

                                <div>
                                    <div class="modal fade" id="exampleModal5" tabindex="-1"
                                        aria-labelledby="exampleModalLabel5" aria-hidden="true">
                                        <div class="modal-dialog" style="padding: 40px; ">
                                            <div class="modal-content">
                                                <div class="modal-header"
                                                    style="background-color: #303393; width: 100%; padding: 10px;">
                                                    <div>
                                                        <h4 class="book">Get Free Services<br><span
                                                                style="font-size: 20px;">SEBI Registration
                                                                : INH000017240</span></h4>

                                                    </div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"> X
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <!-- Form Inside Modal -->
                                                    <form id="dataForm" action="" method="POST">
                                                        <div class="form-group mb-2 form-floating">
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: end; align-items: end; text-align: right;">
                                                                    <img src="assets/images/newimg/im1.png"
                                                                        style="margin-left: -34px; margin-top: -20px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="margin-left: 10px; margin-right: 10px;">
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="name" name="name"
                                                                    class="form-control" required />
                                                                <label for="name">Name</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="text" id="phone" name="phone"
                                                                    class="form-control" minlength="10" maxlength="10"
                                                                    pattern="\d{10}" required />
                                                                <label for="phone">Your Number</label>
                                                            </div>
                                                            <div class="form-group floating-label">
                                                                <input type="email" id="email" name="email"
                                                                    class="form-control" required />
                                                                <label for="email">Your Email</label>
                                                            </div>
                                                            <div class="form-group mb-3 form-floating">
                                                                <select class="form-control" id="segment" name="segment"
                                                                    required>
                                                                    <option value="Systematic Trading Plan (STP)">
                                                                        Systematic Trading Plan (STP)</option>
                                                                    <option value="Bank Nifty/Nifty Option">Bank
                                                                        Nifty/Nifty Option</option>
                                                                    <option value="Bank Nifty/Nifty Future">Bank
                                                                        Nifty/Nifty Future</option>
                                                                    <option value="Stock Commodity">Stock Commodity
                                                                    </option>
                                                                    <option value="Stock Cash">Stock Cash</option>
                                                                    <option value="Stock F&O">Stock F&O</option>
                                                                </select>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12"
                                                                    style="justify-content: start; align-items: start; text-align: start;">
                                                                    <img src="assets/images/newimg/phone.png"
                                                                        style="margin-left: -14px; margin-top: -16px;"
                                                                        width="60px" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="header-cta bttnn p-1"
                                                            style="margin-bottom: 30px; padding: 16px;">
                                                            Start Free Trial
                                                        </button>
                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- model ends -->
                            </div>
                        </div>
                    </div>

                    <!-- 1st ends  -->



                </div>
            </div>

        </div>
        <!-- 2nd ends  -->
    </section>
    <!-- FAQ ends -->
    <!-- Appointment area starts -->
    <div class="appointment">



        <div class="container trail-contain">
            <div class="row align-items-center">
                <!-- Left side content -->
                <div class="col-lg-6 col-md-12 col-12">
                    <h2 style="color: #303393; margin-top: 20px; "><span
                            style="background-image: linear-gradient(#fff, #fff, #80d3a8);"><em>Trial for
                                Free!</em></span></h2>
                    <h6 class="mt-3">Get a free trial of our services and discover us. No Debt Is Necessary</h6>
                    <p class="mt-3">To begin using one of our investment possibilities, please complete the inquiry form
                        here.</p>
                    <!-- <a href="#" class="btn mt-3" style="background: #303393;
color: white;">Start Free Trial</a> -->
                    <div class="container my-4 chose1" style="text-align: start;">
                        <!-- Button to Open Modal -->
                        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal"
                            style="color: white;">
                            Choose Plan
                        </button>
                    </div>
                </div>

                <!-- Right side image -->
                <div class="col-lg-6 col-md-12">
                    <img src="assets/images/newimg/trail1.png" width="420px" class="img-fluid" alt="Responsive image">
                </div>
            </div>
        </div>

    </div>

    <!-- FAQ starts -->
    <section class="faq" id="lets">

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2 class="invest" style="text-align: center;"><span
                                style="background-image: linear-gradient(Transparent, #80d3a8);">Let's see what our
                                clients are
                                saying</span>
                        </h2>
                        <h2 class="invest"
                            style="text-align: center; color: #454040; font-size: 20px; margin-bottom: 60px;">
                            Discover What Our Satisfied Clients Are Saying About Us</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="card-body">

                                <p class="card-text">Kashish Joshi Research analysis and suggestions are excellent their
                                    knowledge and
                                    commitment to client success have significantly changed my attitude to investing. I
                                    value their
                                    unwavering support and precise <br> direction.</p>

                                <h5 class="card-title" style="color: black;">Dhaval D Mehta</h5>
                                <p>Rajkot Gujarat</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="card-body">
                                <p class="card-text">Kashish Joshi Research is distinguished by its superb stock
                                    selections and
                                    perceptive research. It is quite admirable how
                                    committed their staff is to assisting clients in reaching their financial
                                    objectives. I heartily
                                    endorse their offerings.</p>

                                <h5 class="card-title" style="color: black;">Durga Prasad Singh</h5>
                                <p>Lucknow U.P </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div class="card crd">
                            <div class="card-body">
                                <p class="card-text">For my investing strategy, collaboration with Kashish Joshi
                                    Research has been
                                    revolutionary. Their thorough suggestions and devoted assistance have given me the
                                    assurance to make
                                    wise choices <br><span style="visibility: hidden">l</span></p>

                                <h5 class="card-title" style="color: black;">Abdul Rashid</h5>
                                <p>Delhi </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <!-- footer -->
    <footer class="footer">
        <div class="container">
            <div class="row newsletter align-items-center">
                <div class="col-lg-6 r-mb">
                    <h5 style="color: white;">Start a Free Trial</h5>
                    <p class="exp">By many years of expertise, we propel <br> corporate expansion and creativity.</p>
                </div>
                <div class="col-lg-6 d-end">
                    <!-- <input type="text" placeholder="Enter Email" /> -->
                    <a href="#" style="font-size: 22px;" class=" header-cta newsletter-btn trial">Start Free Trial</a>
                </div>
            </div>

            <div class="row widgets">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="widget">
                        <a href="index">
                            <!--              <img src="assets/images/logo.png" alt="logo" style="-->
                            <!--    width: 170px;-->
                            <!--">-->

                            <div style="background-color: #fff; width: 190px; border-radius: 10px;">
                                <div style="margin-left: 10px;">
                                    <img src="assets/images/logoo2.png" alt="logo" style="width: 170px" />
                                </div>
                            </div>
                            <p class="joshi">At Kashish Joshi Research, we provide cutting-edge market insights,
                                analysis, and trading
                                strategies to help you navigate the complexities of the financial markets. Whether
                                you're a seasoned
                                trader or just getting started, our tools and research reports offer a clear path to
                                informed
                                decision-making.</p>
                        </a>

                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 d-center">
                    <div class="widget w-text">
                        <h5>Contact Us</h5>
                        <ul>
                            <li><a href="https://api.whatsapp.com/send?phone=919171718451&text=Book%20My%20Trading%20Slot"
                                    class="no">+91 9171718451</a></li>
                            <li><a href="https://kashishjoshiresearch.com/stocktips/"
                                    class="no">www.kashishjoshiresearch.com</a></li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6 d-center">
                    <div class="widget w-text">
                        <h5>Links</h5>
                        <ul class="home-footer">
                            <li><a href="https://kashishjoshiresearch.com/stocktips/">Home</a></li>
                            <li><a href="#pricing">Services</a></li>
                            <li><a href="#lets">Testimonial</a></li>

                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="https://kashishjoshiresearch.com/contact.html">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 d-center">
                    <div class="widget w-text">
                        <h5>Guide</h5>
                        <ul class="home-footer">
                            <li><a href="https://kashishjoshiresearch.com/terms-condition.html">Term & Conditions</a>
                            </li>
                            <li>
                                <a href="https://kashishjoshiresearch.com/privacy-policy.html">Privacy Policy<br /> </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright mt-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10">
                        <div class="footer-menu ">
                            <p>
                                © 2024 <span>Kashish Joshi Research</span>. All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="footer-menu">
                            <p style="display: flex;">
                                <a href=""> <img src="assets/images/newimg/link.png" alt=""></a> &nbsp; &nbsp; &nbsp;
                                <a href=""><img src="assets/images/newimg/Mask.png" alt=""></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


    <!-- back to top button -->
    <div class="top-btn">
        <i class="fas fa-chevron-up"></i>
    </div>

    <!-- jquery -->
    <script src="assets/js/jquery-1.12.4.min.js"></script>
    <!-- bootstrap -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- progress bar -->
    <script src="assets/js/jQuery-plugin-progressbar.js"></script>
    <!-- fontawesome js-->
    <script src="assets/js/all.min.js"></script>
    <!-- mean menu js -->
    <script src="assets/js/jquery.meanmenu.min.js"></script>
    <!-- fontawesome js -->
    <script src="assets/js/fontawesome.min.js"></script>
    <!-- slick js-->
    <script src="assets/js/slick.min.js"></script>
    <!-- nice select js-->
    <script src="assets/js/jquery.nice-select.min.js"></script>
    <!-- magnific popup js-->
    <script src="assets/js/jquery.magnific-popup.js"></script>
    <!-- isotope  js-->
    <script src="assets/js/isotope.pkgd.min.js"></script>

    <script src="assets/js/app.js"></script>
    <script>
        $(document).ready(function () {
            // Fetch error message from sessionStorage
            var errorMessage = sessionStorage.getItem("error_message");
            if (errorMessage) {
                $("#message-container").html(
                    '<div class="error">' + errorMessage + "</div>"
                );
                sessionStorage.removeItem("error_message");
            }
        });
    </script>


    <!-- sliders -->

    <script>
        let currentslide1Index = 0;

        function moveslide1(direction) {
            const slide1s = document.querySelectorAll('.slide1');
            const totalslide1s = slide1s.length;

            currentslide1Index += direction;

            if (currentslide1Index < 0) {
                currentslide1Index = totalslide1s - 1;
            } else if (currentslide1Index >= totalslide1s) {
                currentslide1Index = 0;
            }

            updateslide1r1();
        }

        function currentslide1(index) {
            currentslide1Index = index;
            updateslide1r1();
        }

        function updateslide1r1() {
            const slide1r1 = document.querySelector('.slide1r1');
            const slide1s = document.querySelectorAll('.slide1');
            const dot1111s = document.querySelectorAll('.dot1111');

            slide1r1.style.transform = `translateX(-${currentslide1Index * 100}%)`;

            // Update dot1111 navigation
            dot1111s.forEach((dot1111, idx) => {
                dot1111.classList.remove('active');
                if (idx === currentslide1Index) {
                    dot1111.classList.add('active');
                }
            });
        }

        // Optional: Auto-slide1 every 5 seconds
        setInterval(() => moveslide1(1), 5000);

        // Initialize the first slide1 as active
        updateslide1r1();
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
</body>



</html>