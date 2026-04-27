<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KYC & Agreement - Kashish Joshi Research</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

<style>
body {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    padding: 20px 0;
}

.kyc-box {
    background: #ffffff;
    border-radius: 15px;
    padding: 35px;
    box-shadow: 0px 6px 20px rgba(0,0,0,0.08);
    margin-top: 40px;
    margin-bottom: 40px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.kyc-box h3 {
    font-weight: 700;
    font-size: 24px;
    color: #1a1a1a;
    border-bottom: 3px solid #28a745;
    padding-bottom: 8px;
    display: inline-block;
    margin-bottom: 20px;
}

.kyc-section-title {
    font-weight: 700;
    font-size: 16px;
    color: #1a1a1a;
    margin-bottom: 18px;
}

.kyc-box .form-group label {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 6px;
    color: #333;
    display: block;
}

.kyc-box .form-group label span.req {
    color: red;
}

.kyc-box .form-control {
    height: 48px;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #fff;
    width: 100%;
    padding: 10px 14px;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.kyc-box .form-control:focus {
    border-color: #28a745;
    outline: none;
    box-shadow: 0 0 0 2px rgba(40,167,69,0.15);
}

.kyc-box input[type="file"].form-control {
    height: 48px;
    padding: 10px 14px;
    background-color: #fff;
}

.kyc-box .form-group {
    margin-bottom: 20px;
}

.kyc-btn {
    background: #28a745;
    color: white;
    font-size: 15px;
    padding: 12px 28px;
    border-radius: 6px;
    font-weight: 600;
    border: none;
    margin-top: 10px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

.kyc-btn:hover {
    background: #218838;
    transform: translateY(-1px);
}

.kyc-btn:active {
    transform: translateY(0);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .kyc-box {
        padding: 20px;
        margin: 20px 10px;
    }
    
    .kyc-box h3 {
        font-size: 20px;
    }
    
    .row {
        margin: 0 -5px;
    }
    
    .row > [class*="col-"] {
        padding: 0 5px;
    }
}

@media (max-width: 576px) {
    .kyc-box {
        padding: 15px;
        margin: 10px 5px;
    }
    
    .kyc-btn {
        width: 100%;
        padding: 15px;
        font-size: 16px;
    }
}
</style>
</head>
<body>

<div class="container-fluid">
    <div class="kyc-box">
        <h3>KYC &amp; Agreement</h3>

        <p class="kyc-section-title">Personal Details</p>

        <form action="ekyc-submit.php" method="POST" enctype="multipart/form-data">

            <!-- Row 1: Full Name | Father Name | Mobile Number -->
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Full Name (As Per PAN Card) <span class="req">*</span></label>
                        <input type="text" class="form-control" name="full_name" placeholder="Enter your name (As Per PAN Card)" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Father Name <span class="req">*</span></label>
                        <input type="text" class="form-control" name="father_name" placeholder="Enter your father name" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Mobile Number <span class="req">*</span></label>
                        <input type="text" class="form-control" id="mobile" name="mobile" placeholder="Enter mobile number"
                            pattern="[6-9][0-9]{9}" maxlength="10" inputmode="numeric"
                            title="Mobile number must start with 6, 7, 8 or 9 and be 10 digits"
                            required>
                        <small class="text-danger d-none" id="mobile_err">Enter valid 10-digit Indian mobile number</small>
                    </div>
                </div>
            </div>

            <!-- Row 2: Email | Address | DOB -->
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Email <span class="req">*</span></label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="e.g. abcd@gmail.com"
                            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                            title="Enter valid email e.g. abcd@gmail.com"
                            required>
                        <small class="text-danger d-none" id="email_err">Enter valid email address</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Address (As Per Aadhar Card) <span class="req">*</span></label>
                        <input type="text" class="form-control" name="address" placeholder="Enter Address (As Per Aadhar Card)" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>DOB <span class="req">*</span></label>
                        <input type="date" class="form-control" name="dob" placeholder="Enter Date Of Birth" required>
                    </div>
                </div>
            </div>

            <!-- Row 3: PAN Card | PAN Upload | Aadhaar Front Upload -->
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>PAN Card <span class="req">*</span></label>
                        <input type="text" class="form-control" id="pan" name="pan" placeholder="ENTER PAN CARD NUMBER"
                            maxlength="10" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" style="text-transform:uppercase;" required>
                        <small class="text-danger d-none" id="pan_err">Invalid PAN format (e.g. ABCDE1234F)</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>PAN Upload <span class="req">*</span></label>
                        <input type="file" class="form-control" name="pan_file" accept="image/*,.pdf" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Aadhar Front Upload</label>
                        <input type="file" class="form-control" name="aadhaar_front" accept="image/*,.pdf">
                    </div>
                </div>
            </div>

            <!-- Row 4: Aadhaar Back Upload (alone) -->
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Aadhar Back Upload</label>
                        <input type="file" class="form-control" name="aadhaar_back" accept="image/*,.pdf">
                    </div>
                </div>
            </div>

            <button type="submit" class="kyc-btn">Generate Agreement &#10148;</button>

        </form>
    </div>
</div>

<script>
document.querySelector('form').addEventListener('submit', function(e) {
    let valid = true;

    // Mobile: starts with 6-9, exactly 10 digits
    const mobile = document.getElementById('mobile');
    const mobileErr = document.getElementById('mobile_err');
    if (!/^[6-9][0-9]{9}$/.test(mobile.value.trim())) {
        mobileErr.classList.remove('d-none');
        mobile.classList.add('is-invalid');
        valid = false;
    } else {
        mobileErr.classList.add('d-none');
        mobile.classList.remove('is-invalid');
    }

    // Email
    const email = document.getElementById('email');
    const emailErr = document.getElementById('email_err');
    if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())) {
        emailErr.classList.remove('d-none');
        email.classList.add('is-invalid');
        valid = false;
    } else {
        emailErr.classList.add('d-none');
        email.classList.remove('is-invalid');
    }

    // PAN: 5 letters + 4 digits + 1 letter (uppercase)
    const pan = document.getElementById('pan');
    const panErr = document.getElementById('pan_err');
    const panVal = pan.value.trim().toUpperCase();
    pan.value = panVal;
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panVal)) {
        panErr.classList.remove('d-none');
        pan.classList.add('is-invalid');
        valid = false;
    } else {
        panErr.classList.add('d-none');
        pan.classList.remove('is-invalid');
    }

    if (!valid) e.preventDefault();
});

// Auto uppercase PAN while typing
document.getElementById('pan').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

// Only allow numbers in mobile
document.getElementById('mobile').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});
</script>

</body>
</html>
