<?php
/**
 * Email Template Generator
 * Usage: getEmailTemplate($name, $pan, $date, $company)
 * Returns: HTML string for email body
 */

function getEmailTemplate($name, $pan, $date, $company = "Kashish Joshi Research") {
    $first_name = explode(' ', trim($name))[0];
    return '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agreement Signed – ' . htmlspecialchars($company) . '</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">

<!-- Wrapper -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f6fb;padding:30px 0;">
  <tr>
    <td align="center">

      <!-- Card -->
      <table width="600" cellpadding="0" cellspacing="0" border="0"
             style="background:#ffffff;border-radius:12px;overflow:hidden;
                    box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a2942 0%,#2d4a7a 100%);
                     padding:36px 40px;text-align:center;">
            <div style="font-size:32px;margin-bottom:8px;">📋</div>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;
                       letter-spacing:0.5px;">Agreement Successfully Signed</h1>
            <p style="margin:8px 0 0;color:#a8c4e8;font-size:13px;">
              ' . htmlspecialchars($company) . '
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">

            <!-- Greeting -->
            <p style="margin:0 0 20px;font-size:16px;color:#1a1a1a;font-weight:600;">
              Dear ' . htmlspecialchars($first_name) . ',
            </p>
            <p style="margin:0 0 24px;font-size:14px;color:#444;line-height:1.7;">
              Thank you for completing your KYC verification and digitally signing the
              <strong>Terms &amp; Conditions Agreement</strong> with
              <strong>' . htmlspecialchars($company) . '</strong>.
              Your signed agreement is attached to this email as a PDF for your records.
            </p>

            <!-- Info Box -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background:#f0f5ff;border-radius:8px;border-left:4px solid #2d4a7a;
                          margin-bottom:28px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 12px;font-size:13px;font-weight:700;
                             color:#1a2942;text-transform:uppercase;letter-spacing:0.5px;">
                    Agreement Details
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding:5px 0;font-size:13px;color:#666;width:40%;">Client Name</td>
                      <td style="padding:5px 0;font-size:13px;color:#1a1a1a;font-weight:600;">
                        ' . htmlspecialchars($name) . '
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:5px 0;font-size:13px;color:#666;">PAN Number</td>
                      <td style="padding:5px 0;font-size:13px;color:#1a1a1a;font-weight:600;">
                        ' . htmlspecialchars($pan) . '
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:5px 0;font-size:13px;color:#666;">Signed On</td>
                      <td style="padding:5px 0;font-size:13px;color:#1a1a1a;font-weight:600;">
                        ' . htmlspecialchars($date) . '
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:5px 0;font-size:13px;color:#666;">Status</td>
                      <td style="padding:5px 0;">
                        <span style="background:#d4edda;color:#155724;font-size:12px;
                                     font-weight:700;padding:3px 10px;border-radius:20px;">
                          ✔ Signed &amp; Verified
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Attachment Note -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background:#fffbf0;border-radius:8px;border:1px dashed #f0c040;
                          margin-bottom:28px;">
              <tr>
                <td style="padding:16px 20px;">
                  <p style="margin:0;font-size:13px;color:#7a5c00;">
                    📎 &nbsp;<strong>Attachment:</strong> Your signed agreement PDF is attached to this email.
                    Please save it for your future reference.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Disclaimer -->
            <p style="margin:0 0 8px;font-size:13px;color:#444;line-height:1.7;">
              <strong>Important Reminder:</strong>
            </p>
            <ul style="margin:0 0 24px;padding-left:18px;font-size:13px;color:#555;line-height:1.8;">
              <li>There are no guaranteed profits in trading or investment services.</li>
              <li>All sales are final — no refunds or cancellations.</li>
              <li>Trading involves significant risk. Please invest wisely.</li>
            </ul>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="margin-bottom:8px;">
              <tr>
                <td align="center">
                  <a href="https://kashishjoshiresearch.com"
                     style="display:inline-block;background:linear-gradient(135deg,#1a2942,#2d4a7a);
                            color:#ffffff;text-decoration:none;padding:13px 36px;
                            border-radius:8px;font-size:14px;font-weight:700;
                            letter-spacing:0.3px;">
                    Visit Our Website →
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:0 40px;">
            <hr style="border:none;border-top:1px solid #eee;margin:0;">
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;text-align:center;">
            <p style="margin:0 0 6px;font-size:12px;color:#999;">
              This is an automated email from <strong>' . htmlspecialchars($company) . '</strong>.
              Please do not reply to this email.
            </p>
            <p style="margin:0;font-size:12px;color:#bbb;">
              © ' . date('Y') . ' ' . htmlspecialchars($company) . ' · All rights reserved
            </p>
          </td>
        </tr>

      </table>
      <!-- /Card -->

    </td>
  </tr>
</table>

</body>
</html>';
}
