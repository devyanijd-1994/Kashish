<?php
session_start();
if (empty($_SESSION['kyc_record_id'])) {
    header("Location: ekyc.php");
    exit;
}
$full_name   = $_SESSION['kyc_name']    ?? '';
$mobile      = $_SESSION['kyc_mobile']  ?? '';
$email       = $_SESSION['kyc_email']   ?? '';
$pan         = $_SESSION['kyc_pan']     ?? '';
$dob         = $_SESSION['kyc_dob']     ?? '';
$address     = $_SESSION['kyc_address'] ?? '';
$father_name = $_SESSION['kyc_father']  ?? '';
$record_id   = $_SESSION['kyc_record_id'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Terms & Conditions - KYC Agreement</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
<style>
body { background: #f0f4ff; }
.tc-box { background: #fff; border-radius: 12px; padding: 35px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin: 30px auto; max-width: 860px; }
.tc-box h2 { font-size: 22px; font-weight: 800; color: #1a2942; border-bottom: 3px solid #28a745; padding-bottom: 10px; margin-bottom: 20px; }
.tc-box h4 { font-size: 16px; font-weight: 700; color: #1a2942; margin-top: 20px; }
.tc-box p  { font-size: 13px; color: #444; line-height: 1.7; text-align: justify; }
.client-info { background: #f8f9fa; border-radius: 8px; padding: 15px 20px; margin-bottom: 20px; }
.client-info table td { padding: 4px 12px; font-size: 13px; }
.client-info table td:first-child { font-weight: 600; color: #555; width: 140px; }
.agree-bar { position: sticky; bottom: 0; background: #fff; border-top: 1px solid #ddd; padding: 15px 20px; display: flex; align-items: center; justify-content: space-between; }
.btn-sign { background: #28a745; color: #fff; font-size: 15px; font-weight: 600; padding: 12px 35px; border-radius: 8px; border: none; cursor: pointer; }
.btn-sign:disabled { background: #aaa; cursor: not-allowed; }
</style>
</head>
<body>
<div class="container">
<div class="tc-box">
    <h2>TERMS AND CONDITIONS OF RESEARCH SERVICES</h2>

    <div class="client-info">
        <table>
            <tr><td>Client Name</td><td>: <?= htmlspecialchars($full_name) ?></td></tr>
            <tr><td>Father Name</td><td>: <?= htmlspecialchars($father_name) ?></td></tr>
            <tr><td>Mobile</td><td>: <?= htmlspecialchars($mobile) ?></td></tr>
            <tr><td>Email</td><td>: <?= htmlspecialchars($email) ?></td></tr>
            <tr><td>PAN</td><td>: <?= htmlspecialchars($pan) ?></td></tr>
            <tr><td>Date of Birth</td><td>: <?= htmlspecialchars($dob) ?></td></tr>
            <tr><td>Address</td><td>: <?= htmlspecialchars($address) ?></td></tr>
            <tr><td>Date</td><td>: <?= date('d-m-Y') ?></td></tr>
        </table>
    </div>

    <h4>Term & Conditions</h4>
    <p>There are no certain or guaranteed profits given to traders or investors in the services. The past effectiveness of the services does not predict or ensure future effectiveness or value from any of the services. We don't have a cancellation or return policy. Every sale is final. There will be no refunds or cancellations if you decide to test out our products and services before committing to a subscription. Refunds for subscriptions that have already been used are not available. You have agreed to all terms and conditions by using the website kashishjoshiresearch.com to register for services.</p>
    <p>There is no promise or assurance of return provided to traders/investors in the services. The past effectiveness of the services does not predict or ensure future effectiveness or value from any of the amenities. We don't have an annulment or return policy. Every sale is final. There will be no refunds or cancellations if you decide to test out our products and services before committing to a commitment.</p>

    <h4>Risk Disclosure</h4>
    <p>Trading stocks is dangerous by nature. You need to understand the dangers associated with commodity trading and equities before you do so. Investments in this type have an elevated level of risk than other kinds of securities because of the high level of leverage attached to them. Use of leverage, also known as margin trading, might go against you and cause a big loss. The past success of these assets does not imply any future gains.</p>
    <p>Indian Advisory disclaims all responsibility for any loss, tax, fee, or brokerage you may have to pay on any gains or losses realized while working with us. Margin trading carries a significant risk and isn't appropriate for all investors. You should carefully evaluate your investing goals, degree of financial expertise, risk tolerance, and suitability of Kashish Joshi Research's services before making any trades.</p>
    <p>PLEASE NOTE: Kashish Joshi Research DOES NOT OFFER ANY PROGRAMS THAT ARE NOT PROVIDED IN OUR WEBSITE, PROFIT SHARING SERVICES, GUARANTEED SERVICES, PROJECT-BASED SERVICES, OR D-MAT/BROKERAGE SERVICES.</p>

    <h4>Dispute Settlement</h4>
    <p>According to the Arbitration and Conciliation Act, 1996, the sole arbitrator will hear all conflicts, disagreements, and inquiries of any kind that may arise within the parties. The Managing Director of Kashish Joshi Research adviser Private Limited will pick the lone arbitrator.</p>

    <h4>Jurisdiction</h4>
    <p>The two sides acknowledge that the court system will have sole control over any grievances, disagreements, and disputes, which include those pertaining to arrangements, shrinks, and purchases made with respect to a thing related to it or in recognition thereof.</p>

    <div class="agree-bar">
        <div>
            <input type="checkbox" id="agreeCheck" onchange="document.getElementById('btnSign').disabled=!this.checked">
            <label for="agreeCheck" style="font-size:13px;margin-left:6px">I have read and agree to the above Terms & Conditions</label>
        </div>
        <form action="sign-process.php" method="POST">
            <input type="hidden" name="record_id" value="<?= $record_id ?>">
            <button type="submit" class="btn-sign" id="btnSign" disabled>Sign Now &rarr;</button>
        </form>
    </div>
</div>
</div>
</body>
</html>
