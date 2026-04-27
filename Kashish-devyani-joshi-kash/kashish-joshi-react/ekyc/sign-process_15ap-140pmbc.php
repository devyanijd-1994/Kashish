<?php
session_start();
ini_set('display_errors', 1);

$conn          = new mysqli("localhost", "u574447354_kashishweb", "Apex@#$2024", "u574447354_kashishweb");
$client_id     = "ACK260227195147680M14OCCESL5MUN9";
$client_secret = "M35812AGC712DPSPUII7Z2YHFJCDW5NH";
$base_url      = "https://api.digio.in";

$record_id = intval($_POST['record_id'] ?? $_GET['record_id'] ?? $_SESSION['kyc_record_id'] ?? 0);
if (!$record_id) die("Invalid session. <a href='ekyc.php'>Go back</a>");

$row = $conn->query("SELECT * FROM ekyc WHERE id=$record_id")->fetch_assoc();
if (!$row) die("Record not found.");

$full_name   = $row['full_name'];
$mobile      = $row['mobile'];
$email       = $row['email'];
$pan         = $row['pan'];
$dob         = $row['dob'];
$address     = $row['address'];
$father_name = $row['father_name'];
$identifier  = !empty($mobile) ? $mobile : $email;

// ── Step 1: Generate & save PDF (always regenerate fresh) ──
$pdf_path = "uploads/agreement_" . $record_id . ".pdf";

// Delete old PDF to force regeneration with new FPDF template
if (file_exists($pdf_path)) {
    unlink($pdf_path);
}
// Also clear old digio_doc_id so fresh upload happens
$conn->query("UPDATE ekyc SET digio_doc_id='' WHERE id=$record_id");
$row['digio_doc_id'] = ''; // update local var too

$pdf_content = makePDF($full_name, $father_name, $mobile, $email, $pan, $dob, $address);
file_put_contents($pdf_path, $pdf_content);
$conn->query("UPDATE ekyc SET signed_pdf='" . $conn->real_escape_string($pdf_path) . "' WHERE id=$record_id");

$pdf_content = file_get_contents($pdf_path);
$pdf_base64  = base64_encode($pdf_content);
$file_name   = preg_replace('/[^A-Za-z0-9\-_]/', '', $full_name) . "-" . $pan . ".pdf";

if (empty($pdf_base64)) die("PDF generation failed. Please try again.");

// ── Step 2: Upload PDF to Digio (only if not already uploaded) ──
$redirect_back = urlencode("https://kashishweb.questdigiflex.in/kyc-success.php?record_id=$record_id");
$esign_url = '';

// Check if already uploaded — reuse existing doc_id + fetch fresh token
$existing_doc_id = $row['digio_doc_id'] ?? '';

if (!empty($existing_doc_id)) {
    // Already uploaded — get fresh access token from Digio
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL            => $base_url . "/v2/client/document/detail?document_id=" . urlencode($existing_doc_id),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER     => [
            "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
            "Accept: application/json",
        ],
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_TIMEOUT        => 30,
    ]);
    $detail_resp = curl_exec($curl);
    curl_close($curl);
    $detail = json_decode($detail_resp, true);

    file_put_contents("uploads/debug_sign.txt",
        date('Y-m-d H:i:s') . " REUSE DOC DETAIL:\n" . $detail_resp . "\n\n", FILE_APPEND);

    $token = $detail['signing_parties'][0]['access_token'] ?? '';
    if (is_array($token)) $token = $token['id'] ?? '';

    // If entity not found or no token — reset and do fresh upload
    if (!empty($detail['code']) && $detail['code'] === 'ENTITY_NOT_FOUND') {
        // clear old doc_id and fall through to fresh upload
        $conn->query("UPDATE ekyc SET digio_doc_id='' WHERE id=$record_id");
        $existing_doc_id = '';
    } elseif (!empty($token)) {
        $esign_url = "https://app.digio.in/#/gateway/login/"
            . urlencode($existing_doc_id) . "/"
            . urlencode($token) . "/"
            . urlencode($identifier)
            . "?redirect_url=" . $redirect_back
            . "&sign_type=aadhaar";
    } elseif (!empty($detail['authentication_url'])) {
        $esign_url = $detail['authentication_url'];
    }
}

if (empty($existing_doc_id) && empty($esign_url)) {
    // Fresh upload to Digio

$payload = json_encode([
    "document_name"              => "KYC Agreement - " . $full_name,
    "file_name"                  => $file_name,
    "file_data"                  => $pdf_base64,
    "signers"                    => [[
        "identifier" => $identifier,
        "name"       => $full_name,
        "sign_type"  => "aadhaar",
        "reason"     => "I agree to Terms and Conditions of Kashish Joshi Research",
    ]],
    "sign_coordinates"           => [
        $identifier => [
            "1" => [[
                "llx" => 40.0,
                "lly" => 60.0,
                "urx" => 220.0,
                "ury" => 130.0,
            ]]
        ]
    ],
    "display_on_page"            => "all",
    "notify_signers"             => true,
    "send_sign_link"             => true,
    "include_authentication_url" => true,
    "generate_access_token"      => true,
    "expire_in_days"             => 10,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL            => $base_url . "/v2/client/document/uploadpdf",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => [
        "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
        "Content-Type: application/json",
        "Accept: application/json",
    ],
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_TIMEOUT        => 60,
]);
$response  = curl_exec($curl);
$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

file_put_contents("uploads/webhook_log.txt",
    date('Y-m-d H:i:s') . " - DigiSign ($http_code): " . $response . "\n", FILE_APPEND);

$res = json_decode($response, true);

file_put_contents("uploads/debug_sign.txt",
    date('Y-m-d H:i:s') . " HTTP:$http_code\n" . $response . "\n\n", FILE_APPEND);

    if ($http_code === 200 && !empty($res['id'])) {
        $doc_id = $conn->real_escape_string($res['id']);
        $conn->query("UPDATE ekyc SET digio_doc_id='$doc_id' WHERE id=$record_id");

        // token can be at top level OR inside signing_parties
        $token = $res['access_token'] ?? $res['signing_parties'][0]['access_token'] ?? '';
        if (is_array($token)) $token = $token['id'] ?? '';

        // auth_url can be at top level OR inside signing_parties
        $auth_url = $res['authentication_url']
            ?? $res['signing_parties'][0]['authentication_url']
            ?? '';

        if (!empty($token)) {
            $esign_url = "https://app.digio.in/#/gateway/login/"
                . urlencode($res['id']) . "/"
                . urlencode($token) . "/"
                . urlencode($identifier)
                . "?redirect_url=" . $redirect_back
                . "&sign_type=aadhaar";
        } elseif (!empty($auth_url)) {
            $esign_url = $auth_url;
        }
    }
} // end fresh upload block
$pdf_url = "https://kashishweb.questdigiflex.in/" . $pdf_path;
?>
<!DOCTYPE html>
<html>
<head>
    <title>Review Agreement</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <style>
    body { background:#f0f4ff; margin:0; padding:20px; }
    .wrapper { max-width:860px; margin:0 auto; }
    .header-box { background:#fff; border-radius:12px; padding:24px 30px; margin-bottom:16px; box-shadow:0 2px 12px rgba(0,0,0,0.08); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
    .header-box h5 { margin:0; font-weight:700; color:#1a1a1a; font-size:18px; }
    .header-box p  { margin:0; color:#666; font-size:13px; }
    .pdf-frame { width:100%; height:75vh; border:none; border-radius:10px; box-shadow:0 2px 12px rgba(0,0,0,0.1); background:#fff; }
    .btn-esign { background:#6f42c1; color:#fff; padding:13px 36px; border-radius:8px; font-size:15px; font-weight:600; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:8px; transition:background 0.2s; text-decoration:none; }
    .btn-esign:hover { background:#5a32a3; color:#fff; }
    .footer-bar { background:#fff; border-radius:12px; padding:18px 30px; margin-top:16px; box-shadow:0 2px 12px rgba(0,0,0,0.08); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
    .spinner { display:none; width:16px; height:16px; border:2px solid #fff; border-top-color:transparent; border-radius:50%; animation:spin 0.7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    </style>
</head>
<body>
<div class="wrapper">
    <div class="header-box">
        <div>
            <h5>📄 Review Your Agreement</h5>
            <p>Please read the Terms &amp; Conditions carefully before signing.</p>
        </div>
        <a href="<?= htmlspecialchars($pdf_url) ?>" target="_blank" class="btn btn-outline-secondary btn-sm">⬇ Download PDF</a>
    </div>
    <iframe class="pdf-frame" src="<?= htmlspecialchars($pdf_url) ?>#toolbar=0"></iframe>
    <div class="footer-bar">
        <div>
            <strong><?= htmlspecialchars($full_name) ?></strong><br>
            <small class="text-muted">PAN: <?= htmlspecialchars($pan) ?> &nbsp;|&nbsp; Mobile: <?= htmlspecialchars($mobile) ?></small>
        </div>
        <?php if (!empty($esign_url)): ?>
            <a href="<?= htmlspecialchars($esign_url) ?>" class="btn-esign" id="esign-btn">
                <span class="spinner" id="spin"></span>
                <span id="btn-text">Auto signing in 5s...</span>
            </a>
        <?php else: ?>
            <div style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:12px 18px;font-size:13px;color:#856404;">
                ⚠️ eSign is currently being activated. Please wait or contact support.
            </div>
        <?php endif; ?>
    </div>
</div>
<script>
var eb = document.getElementById('esign-btn');
var countdown = 5;

function startCountdown() {
    if (!eb) return;
    var timer = setInterval(function() {
        countdown--;
        var btnText = document.getElementById('btn-text');
        if (countdown > 0) {
            btnText.textContent = 'Auto signing in ' + countdown + 's...';
        } else {
            clearInterval(timer);
            btnText.textContent = 'Redirecting...';
            document.getElementById('spin').style.display = 'inline-block';
            eb.style.pointerEvents = 'none';
            eb.click();
        }
    }, 1000);
}

if (eb) {
    // show initial countdown text
    document.getElementById('btn-text').textContent = 'Auto signing in ' + countdown + 's...';
    startCountdown();

    eb.addEventListener('click', function() {
        this.style.pointerEvents = 'none';
        document.getElementById('spin').style.display = 'inline-block';
        document.getElementById('btn-text').textContent = 'Redirecting...';
        window.location.href = this.getAttribute('href');
    });
}
</script>
</body>
</html>
<?php

// ═══════════════════════════════════════════════════════════════
//  makePDF() — uses FPDF
// ═══════════════════════════════════════════════════════════════
function makePDF($name, $father, $mobile, $email, $pan, $dob, $address) {
    require_once __DIR__ . '/fpdf.php';

    $date = date('d M Y');

    class KJR_PDF extends FPDF {
        public $clientName = '';
        public $pageDate   = '';

        function Header() {
            // top blue rule
            $this->SetDrawColor(46, 97, 184);
            $this->SetLineWidth(0.8);
            $this->Line(12, 8, 198, 8);
            $this->SetLineWidth(0.2);
            $this->SetDrawColor(0, 0, 0);
        }

        function Footer() {
            $this->SetY(-12);
            $this->SetFont('Helvetica', '', 7);
            $this->SetTextColor(160, 160, 160);
            // page number right side
            $this->Cell(0, 5, $this->PageNo(), 0, 0, 'R');
            // client name left side
            $this->SetX(12);
            $this->Cell(0, 5, $this->clientName . '  |  ' . $this->pageDate, 0, 0, 'L');
        }
    }

    $pdf = new KJR_PDF('P', 'mm', 'A4');
    $pdf->clientName = $name;
    $pdf->pageDate   = $date;
    $pdf->SetMargins(12, 14, 12);
    $pdf->SetAutoPageBreak(true, 18);
    $pdf->AddPage();

    $W = 186; // usable width

    // ── helper closures ──────────────────────────────────────

    // Section heading: bold blue + underline
    $heading = function($text) use ($pdf, $W) {
        $pdf->Ln(4);
        $pdf->SetFont('Helvetica', 'B', 11);
        $pdf->SetTextColor(26, 60, 120);
        $pdf->Cell($W, 6, $text, 0, 1, 'L');
        $pdf->SetDrawColor(180, 195, 220);
        $pdf->SetLineWidth(0.3);
        $pdf->Line(12, $pdf->GetY(), 198, $pdf->GetY());
        $pdf->SetDrawColor(0,0,0);
        $pdf->Ln(3);
        $pdf->SetTextColor(0,0,0);
    };

    // Body text paragraph
    $para = function($text, $bold=false) use ($pdf, $W) {
        $pdf->SetFont('Helvetica', $bold ? 'B' : '', 9);
        $pdf->SetTextColor(40, 40, 40);
        $pdf->MultiCell($W, 5, $text, 0, 'J');
        $pdf->Ln(2);
    };

    // Numbered list item
    $listItem = function($num, $text) use ($pdf, $W) {
        $pdf->SetFont('Helvetica', '', 9);
        $pdf->SetTextColor(40, 40, 40);
        $pdf->SetX(12);
        $pdf->Cell(7, 5, $num . '.', 0, 0, 'L');
        $pdf->MultiCell($W - 7, 5, $text, 0, 'J');
        $pdf->Ln(1);
    };

    // Blue info box
    $infoBox = function(array $rows) use ($pdf, $W) {
        $lh   = 5.5;
        $pad  = 4;
        $boxH = count($rows) * $lh + $pad * 2;
        $x    = 12;
        $y    = $pdf->GetY();

        // light blue bg
        $pdf->SetFillColor(232, 240, 254);
        $pdf->Rect($x, $y, $W, $boxH, 'F');
        // blue left bar
        $pdf->SetFillColor(46, 97, 184);
        $pdf->Rect($x, $y, 1.5, $boxH, 'F');
        $pdf->SetFillColor(255,255,255);

        $ty = $y + $pad;
        foreach($rows as $row) {
            $pdf->SetXY($x + 4, $ty);
            $pdf->SetFont('Helvetica', '', 9);
            $pdf->SetTextColor(26, 60, 120);
            $pdf->Cell($W - 4, $lh, $row, 0, 0, 'L');
            $ty += $lh;
        }
        $pdf->SetY($y + $boxH + 3);
        $pdf->SetTextColor(0,0,0);
    };

    // Signature box — dashed border + dynamic name
    $sigBox = function() use ($pdf, $name, $date) {
        $pdf->Ln(3);
        $x = 12;
        $y = $pdf->GetY();
        $w = 55; $h = 16;

        // dashed border via raw PDF
        $pdf->SetDrawColor(120, 120, 200);
        $pdf->SetLineWidth(0.4);
        // inject raw PDF operator for dashed line
        $pdf->Rect($x, $y, $w, $h, 'D');
        $pdf->SetLineWidth(0.2);
        $pdf->SetDrawColor(0,0,0);

        // name inside box
        $pdf->SetXY($x + 2, $y + 2);
        $pdf->SetFont('Helvetica', '', 7);
        $pdf->SetTextColor(130, 130, 130);
        $pdf->Cell($w - 4, 4, 'Client Signature', 0, 2, 'L');

        $pdf->SetX($x + 2);
        $pdf->SetFont('Helvetica', 'B', 9);
        $pdf->SetTextColor(46, 97, 184);
        $pdf->Cell($w - 4, 5, $name, 0, 0, 'L');

        $pdf->SetY($y + $h + 4);
        $pdf->SetTextColor(0,0,0);
    };

    // ── PAGE 1 CONTENT ───────────────────────────────────────

    // Title
    $pdf->Ln(2);
    $pdf->SetFont('Helvetica', 'B', 14);
    $pdf->SetTextColor(26, 60, 120);
    $pdf->Cell($W, 8, 'TERMS AND CONDITIONS OF RESEARCH SERVICES', 0, 1, 'C');
    $pdf->SetFont('Helvetica', '', 9);
    $pdf->SetTextColor(80, 80, 80);
    $pdf->Cell($W, 5, 'Kashish Joshi Research', 0, 1, 'C');
    $pdf->Ln(3);

    // Parties
    $heading('Parties to these Terms and Conditions');
    $infoBox([
        '1. Research Analyst: Kashish Joshi, Proprietor of Kashish Joshi Research, a SEBI Registered',
        '   Research Analyst having its registered office at Indore, Madhya Pradesh.',
        '2. Hereinafter referred to as: "Research Analyst" or "RA".',
        '3. Client: The individual or entity subscribing to or availing research services provided by',
        '   the Research Analyst, hereinafter referred to as the "Client".',
    ]);
    $pdf->Ln(2);

    // 1. Availing the Services
    $heading('1. Availing the Services');
    $para('The Client hereby accepts the research services and confirms to avail the research services on its own discretion provided by the Research Analyst ("RA"), and the Research Analyst agrees to provide such services in accordance with the terms and conditions set forth underneath.');

    // 2. Obligations
    $heading('2. Obligations on RA and Client');
    $para('The client and the Research Analyst shall be bound by all applicable regulations, rules, circulars, and amendments issued by SEBI, including the SEBI (Research Analysts) Regulations, 2014, and all the other notifications of the Government, if any from time to time.');
    $sigBox();

    // 3. Client Information and KYC
    $heading('3. Client Information and KYC');
    $para('The client is bound, upon acceptance of services, to submit all requisite documents as requested by the research analyst and help the RA to complete the KYC process. The client hereby gives consent to the research analyst to fetch his KYC documents from the KYC Registration Agency (KRA).');
    $infoBox([
        'Client Name   : ' . $name,
        'Father Name   : ' . $father,
        'Mobile        : ' . $mobile,
        'Email         : ' . $email,
        'PAN Number    : ' . $pan,
        'Date of Birth : ' . $dob,
        'Address       : ' . $address,
        'Date          : ' . $date,
    ]);
    $pdf->Ln(2);

    // 4. Standard Terms
    $heading('4. Standard Terms of Service');
    $para('The Client acknowledges and gives his consent to be bound by the terms set forth herewith, as well as any applicable amendments or updates provided by the Research Analyst.');
    $para('The Client hereby agrees that:', true);
    $listItem(1, 'I have read and understood the terms and conditions applicable to a research analyst as defined under regulation 21(1)(a) of the SEBI (Research Analyst) Regulations, 2014, including the fee structure.');
    $listItem(2, 'I am subscribing to the research services for my own benefit and consumption, and any reliance placed on the research report provided by the Research Analyst shall be based on my own judgment and assessment of the conclusions contained in the research report.');
    $para('I understand that:', true);
    $listItem(1, 'Any investment made based on the recommendations in the research report is subject to market risk.');
    $listItem(2, 'Recommendations in the research report do not provide any assurance of returns.');
    $listItem(3, 'There is no recourse to claim any losses incurred on investments made based on the recommendations in the research report.');
    $pdf->Ln(2);

    // Declaration by Research Analyst
    $heading('Declaration by Research Analyst');
    $sigBox();
    $listItem(1, 'The Research Analyst is duly registered with SEBI as a Research Analyst having Registration No. INH000000000, Date of Registration: 21st October, 2024.');
    $listItem(2, 'It has registration and qualifications required to render the services contemplated under the RA Regulations, and the same are valid and subsisting.');
    $listItem(3, 'The services provided by the RA do not conflict with or violate any provision of law, rule, regulation, contract, or other instrument to which it is a party or to which any of its property is or may be subject.');
    $listItem(4, 'The maximum fee that may be charged by the RA is 1.51 lakhs per annum per family of clients.');
    $listItem(5, 'The recommendations provided by the RA do not provide any assurance of returns.');
    $pdf->Ln(2);

    // 5. Consideration and Mode of Payment
    $heading('5. Consideration and Mode of Payment');
    $listItem(1, 'The Client shall duly pay the fees to the Research Analyst against the invoice raised or for any mutually agreed amount, whether written or oral, within two (2) days from the date of such invoice or agreement.');
    $listItem(2, 'The Client agrees to make all payments only through verified banking channels, including but not limited to UPI, Net Banking, Payment Gateway, or any other approved electronic banking mode. The Client shall not make any payment in cash.');
    $listItem(3, 'The Client hereby agrees to remit all fees exclusively to the bank account of the Research Analyst. The Research Analyst shall not be responsible or liable for any payment made by the Client to any third-party account.');
    $pdf->Ln(2);

    // 6. Risk Factors
    $heading('6. Risk Factors');
    $para('The Client understands and acknowledges that the services provided by the Research Analyst involve inherent risks. The Client agrees to bear full responsibility for any financial or other consequences arising from the use of such research services.');
    $para('Investments in the securities market are subject to market risks and are also subject to, but not limited to, the following factors:');
    $sigBox();
    $listItem(1, 'Trading in equities, derivatives, and other securities involves market risks, and there is no assurance or guarantee of returns.');
    $listItem(2, 'Past performance of securities or research recommendations does not indicate or guarantee future performance.');
    $listItem(3, 'Research recommendations may not always be profitable, as actual market movements may differ from anticipated or expected trends.');
    $listItem(4, 'The Research Analyst shall not be responsible or liable for any losses incurred by the Client as a result of acting upon the research recommendations.');
    $listItem(5, 'Investments in the securities market are subject to market risks. Clients are advised to read all related documents carefully before investing.');
    $listItem(6, 'Registration granted by SEBI, enlistment as a Research Analyst with any exchange, and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors.');
    $pdf->Ln(2);

    // 7. Conflict of Interest
    $heading('7. Conflict of Interest');
    $para('The Research Analyst shall adhere to all applicable regulations, circulars, and directions issued by the Securities and Exchange Board of India (SEBI) from time to time in relation to the disclosure and mitigation of any actual or potential conflicts of interest.');
    $para('Without prejudice to the generality of the above, the following disclosures are made:');
    $listItem(1, 'The Research Analyst or any of its officers or employees does not trade in the securities which are the subject matter of the research recommendations.');
    $listItem(2, 'There are no actual or potential conflicts of interest arising from any connection with or association to any issuer of products or securities, including any material information or facts that could reasonably compromise the objectivity or independence of the Research Analyst in the provision of research services. Any such conflict, if arising in the future, shall be promptly disclosed to the Client.');
    $listItem(3, 'The Research Analyst, its employees, or its associates have not received any compensation, consideration, or benefit from the company which is the subject matter of the research report.');
    $sigBox();

    // 8. Grievance Redressal
    $heading('8. Grievance Redressal');
    $para('Contact No.: +91 7772994182');
    $para('Email ID: info@kashishjoshiresearch.com');
    $listItem(2, 'If the Client is not satisfied with the resolution provided by the Research Analyst, the Client may lodge a complaint with the Securities and Exchange Board of India (SEBI) through the SCORES platform at www.scores.sebi.gov.in.');
    $listItem(3, 'The Client may also seek resolution through the Online Dispute Resolution (ODR) mechanism via the SMART ODR Portal at https://smartodr.in.');
    $pdf->Ln(2);
    $para('Disclaimer: The Client is strictly required to follow the grievance redressal procedure as stated above. Failure to adhere to the prescribed procedure may result in delay in resolution, for which the Research Analyst shall not be held liable.', false);
    $para('Note: Clients are advised to read the Dos and Don\'ts for dealing with the Research Analyst as specified in SEBI Master Circular No. SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024, and any amendments thereto.', false);
    $pdf->Ln(2);

    // 9. Most Important Terms and Conditions
    $heading('9. Most Important Terms and Conditions');
    $listItem(1, 'These terms and conditions and the consent provided herein are strictly for the research services offered by the Research Analyst (RA). The Research Analyst shall not execute or carry out any trade (purchase or sale of securities) on behalf of the Client. Clients are advised not to permit the Research Analyst to execute any trades on their behalf.');
    $listItem(2, 'The fees charged by the Research Analyst shall be subject to the maximum limits prescribed by the Securities and Exchange Board of India (SEBI) and/or the Research Analyst Administration and Supervisory Body (RAASB) from time to time, applicable only to Individual and Hindu Undivided Family (HUF) Clients.');
    $para('Note:', true);
    $sigBox();
    $listItem(1, 'The current fee limit is 1,51,000/- (Rupees One Lakh Fifty-One Thousand only) per annum per family of Client for all research services of the Research Analyst.');
    $listItem('', '  i. The fee limit does not include applicable statutory charges.');
    $listItem('', '  ii. The fee limit shall not apply to non-individual Clients or accredited investors.');
    $listItem(3, 'The Research Analyst may charge fees in advance, subject to the Client\'s consent. Such advance fees shall not exceed the period stipulated by SEBI, which is presently one (1) year. In case of premature termination of services by either the Client or the Research Analyst, the Client shall be entitled to a refund of proportionate fees for the unexpired period only.');
    $listItem(4, 'Fees payable to the Research Analyst may be paid by the Client through permitted modes such as cheque, online bank transfer, UPI, or other electronic banking channels. Cash payments are strictly prohibited. Optionally, the Client may make payments through the Centralised Fee Collection Mechanism (CaFCoM) managed by BSE Limited (currently recognised as RAASB).');
    $listItem(5, 'The Research Analyst shall comply with all applicable regulations, circulars, and directions issued by SEBI and RAASB from time to time in relation to the disclosure and mitigation of any actual or potential conflict of interest and shall endeavour to promptly inform the Client of any such conflict that may affect the services rendered.');
    $listItem(6, 'Any assured, guaranteed, or fixed return schemes, or schemes of similar nature, are strictly prohibited by law. The Research Analyst shall not offer any such schemes to the Client.');
    $listItem(7, 'The Research Analyst does not guarantee any returns, profits, accuracy, or risk-free investments from the use of its research services. All opinions, projections, estimates, and recommendations are based on the analysis of available data and contain assumptions as on the date of preparation or publication of the research report.');
    $listItem(8, 'Any investment made based on the recommendations contained in the research reports is subject to market risks. The recommendations do not provide any assurance of returns, and there shall be no recourse or claim any losses incurred. Any reliance placed on the research report shall be based solely on the Client\'s own judgment and assessment.');
    $listItem(9, 'Registration granted by SEBI, enlistment as a Research Analyst with any exchange, and certification from NISM do not guarantee the performance of the intermediary or provide any assurance of returns to investors.');
    $listItem(10, 'In case of any grievance:');
    $pdf->SetX(19);
    $pdf->SetFont('Helvetica', '', 9);
    $pdf->MultiCell($W - 7, 5, 'The Client shall first contact the Research Analyst using the contact details provided herein.', 0, 'J');
    $listItem('', 'If the resolution is unsatisfactory, the Client may lodge a grievance through SEBI\'s SCORES platform at www.scores.sebi.gov.in.');
    $listItem('', 'The Client may also seek resolution through the Online Dispute Resolution (ODR) mechanism via the Smart ODR portal at https://smartodr.in.');
    $listItem(11, 'Clients are required to keep their contact details, including email address and mobile number(s), updated with the Research Analyst at all times.');
    $listItem(12, 'The Research Analyst shall never ask for the Client\'s high-risk passwords, passwords, or one-time passwords (OTPs) for trading, demat, or bank accounts. Clients are advised never to share such information with anyone, including the Research Analyst.');
    $pdf->Ln(2);

    // 10. Optional Centralised Fee Collection
    $heading('10. Optional Centralised Fee Collection Mechanism');
    $para('There is an optional Centralised Fee Collection Mechanism for Investment Advisors and Research Analysts (CaFCoM) for fee payments. The Research Analyst has presently not opted for the same and once the Research Analyst gets registered for it, then thereafter said mechanism will be available for the client.');

    // 11. Confidentiality
    $heading('11. Confidentiality');
    $para('Client shall not share any confidential information with third party without prior consent from the RA which has come to its knowledge.');

    // 12. Dispute
    $heading('12. Dispute');
    $para('No suit, prosecution or other legal proceeding shall be against the Research Analyst for any damage caused or likely to be caused by anything which is done in good faith or intended to be done under the provisions of the Securities and Exchange Board of India (Research Analyst) Regulations, 2014. Any Disputes between the parties shall be resolved through arbitration or other methods mutually agreed upon, in accordance with applicable legal and regulatory guidelines.');
    $sigBox();

    // 13. Severability
    $heading('13. Severability');
    $para('If any provision of this Terms and Conditions is found to be invalid, illegal, or unenforceable, the remaining provisions will remain in full effect, provided the essential purpose of the Terms and Conditions is not undermined.');

    // 14. Force Majeure
    $heading('14. Force Majeure');
    $para('Neither party shall be held liable for any failure or delay in the performance of its obligations under these Terms and Conditions due to circumstances beyond their reasonable control, including but not limited to natural disasters, acts of God, government actions, system failures, or other unforeseen events.');
    $pdf->Ln(2);
    $para('The Client hereby confirms that he/she has read, understood, and agrees to abide by all the terms and conditions governing the research services provided by the Research Analyst.');
    $pdf->SetFont('Helvetica', 'I', 8);
    $pdf->SetTextColor(120, 120, 120);
    $pdf->Cell($W, 5, '© Kashish Joshi Research | SEBI Registered Research Analyst', 0, 1, 'C');
    $pdf->SetTextColor(0,0,0);
    $pdf->Ln(4);
    $sigBox();

    return $pdf->Output('S');
}
