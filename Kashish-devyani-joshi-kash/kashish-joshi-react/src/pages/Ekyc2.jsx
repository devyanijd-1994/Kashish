import React, { useEffect } from 'react';

const Ekyc2 = () => {
  useEffect(() => {
    // Add Bootstrap CSS
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
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
    `;
    document.head.appendChild(style);

    // Add form validation script
    const handleFormSubmit = (e) => {
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
    };

    // Auto uppercase PAN while typing
    const handlePanInput = () => {
      const pan = document.getElementById('pan');
      if (pan) {
        pan.value = pan.value.toUpperCase();
      }
    };

    // Only allow numbers in mobile
    const handleMobileInput = () => {
      const mobile = document.getElementById('mobile');
      if (mobile) {
        mobile.value = mobile.value.replace(/[^0-9]/g, '');
      }
    };

    // Add event listeners
    const form = document.querySelector('form');
    const panInput = document.getElementById('pan');
    const mobileInput = document.getElementById('mobile');

    if (form) form.addEventListener('submit', handleFormSubmit);
    if (panInput) panInput.addEventListener('input', handlePanInput);
    if (mobileInput) mobileInput.addEventListener('input', handleMobileInput);

    // Cleanup function
    return () => {
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(style);
      if (form) form.removeEventListener('submit', handleFormSubmit);
      if (panInput) panInput.removeEventListener('input', handlePanInput);
      if (mobileInput) mobileInput.removeEventListener('input', handleMobileInput);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="kyc-box">
        <h3>KYC &amp; Agreement</h3>

        <p className="kyc-section-title">Personal Details</p>

        <form action="ekyc-submit.php" method="POST" encType="multipart/form-data">

          {/* Row 1: Full Name | Father Name | Mobile Number */}
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Full Name (As Per PAN Card) <span className="req">*</span></label>
                <input type="text" className="form-control" name="full_name" placeholder="Enter your name (As Per PAN Card)" required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Father Name <span className="req">*</span></label>
                <input type="text" className="form-control" name="father_name" placeholder="Enter your father name" required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Mobile Number <span className="req">*</span></label>
                <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Enter mobile number"
                  pattern="[6-9][0-9]{9}" maxLength="10" inputMode="numeric"
                  title="Mobile number must start with 6, 7, 8 or 9 and be 10 digits"
                  required />
                <small className="text-danger d-none" id="mobile_err">Enter valid 10-digit Indian mobile number</small>
              </div>
            </div>
          </div>

          {/* Row 2: Email | Address | DOB */}
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Email <span className="req">*</span></label>
                <input type="email" className="form-control" id="email" name="email" placeholder="e.g. abcd@gmail.com"
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  title="Enter valid email e.g. abcd@gmail.com"
                  required />
                <small className="text-danger d-none" id="email_err">Enter valid email address</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Address (As Per Aadhar Card) <span className="req">*</span></label>
                <input type="text" className="form-control" name="address" placeholder="Enter Address (As Per Aadhar Card)" required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>DOB <span className="req">*</span></label>
                <input type="date" className="form-control" name="dob" placeholder="Enter Date Of Birth" required />
              </div>
            </div>
          </div>

          {/* Row 3: PAN Card | PAN Upload | Aadhaar Front Upload */}
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>PAN Card <span className="req">*</span></label>
                <input type="text" className="form-control" id="pan" name="pan" placeholder="ENTER PAN CARD NUMBER"
                  maxLength="10" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" style={{textTransform: 'uppercase'}} required />
                <small className="text-danger d-none" id="pan_err">Invalid PAN format (e.g. ABCDE1234F)</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>PAN Upload <span className="req">*</span></label>
                <input type="file" className="form-control" name="pan_file" accept="image/*,.pdf" required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Aadhar Front Upload</label>
                <input type="file" className="form-control" name="aadhaar_front" accept="image/*,.pdf" />
              </div>
            </div>
          </div>

          {/* Row 4: Aadhaar Back Upload (alone) */}
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Aadhar Back Upload</label>
                <input type="file" className="form-control" name="aadhaar_back" accept="image/*,.pdf" />
              </div>
            </div>
          </div>

          <button type="submit" className="kyc-btn">Generate Agreement &#10148;</button>

        </form>
      </div>
    </div>
  );
};

export default Ekyc2;