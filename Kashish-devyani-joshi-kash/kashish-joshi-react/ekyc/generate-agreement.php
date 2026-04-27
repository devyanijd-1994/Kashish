<?php
// Generate T&C PDF and send to Digio for eSign
// Called after KYC is approved via webhook OR directly after form submit

require_once 'tcpdf/tcpdf.php'; // We'll use FPDF instead - simpler

// ---- Simple PDF without library using HTML + dompdf alternative ----
// Since we may not have TCPDF, we'll create the agreement as HTML
// and use Digio's document upload with base64 encoded PDF

$conn = new mysqli("localhost", "u574447354_kashishweb", "Apex@#$2024", "u574447354_kashishweb");

/* $client_id     = "ACK260318121914906BNZ16ACYYIMEUF";
$client_secret = "H3CJX8MXLNBTWI2VUUFBZKZHYO4UNQPR";
$base_url      = "https://ext.digio.in:444"; */

$client_id     = "ACK260227195147680M14OCCESL5MUN9";
$client_secret = "M35812AGC712DPSPUII7Z2YHFJCDW5NH";
$base_url      = "https://api.digio.in";

$record_id = intval($_GET['id'] ?? 0);
if (!$record_id) die("Invalid request");

$row = $conn->query("SELECT * FROM ekyc WHERE id=$record_id")->fetch_assoc();
if (!$row) die("Record not found");

$full_name = $row['full_name'];
$email     = $row['email'];
$mobile    = $row['mobile'];
$pan       = $row['pan'];
$date      = date('d-m-Y');

// ---------- Generate PDF using FPDF ----------
// Check if FPDF available, else use simple HTML-to-PDF approach
if (!file_exists('fpdf/fpdf.php')) {
    // Fallback: create a simple text-based PDF manually
    createAndSendAgreement($conn, $row, $client_id, $client_secret, $base_url);
} else {
    require('fpdf/fpdf.php');
    createAndSendAgreement($conn, $row, $client_id, $client_secret, $base_url);
}

function createAndSendAgreement($conn, $row, $client_id, $client_secret, $base_url) {
    $full_name = $row['full_name'];
    $email     = $row['email'];
    $mobile    = $row['mobile'];
    $pan       = $row['pan'];
    $date      = date('d-m-Y');
    $record_id = $row['id'];

    // Build PDF content as HTML string, then convert to base64
    $html = '<!DOCTYPE html><html><head><meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; font-size: 12px; margin: 40px; color: #222; }
        h1 { text-align: center; font-size: 18px; color: #1a2942; }
        h2 { font-size: 14px; color: #1a2942; margin-top: 20px; }
        p { line-height: 1.6; text-align: justify; }
        .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .info-table td { padding: 8px; border: 1px solid #ddd; font-size: 12px; }
        .info-table td:first-child { font-weight: bold; width: 35%; background: #f5f5f5; }
        .sign-box { margin-top: 40px; border-top: 1px solid #ccc; padding-top: 20px; }
    </style></head><body>
    <h1>TERMS AND CONDITIONS OF RESEARCH SERVICES</h1>
    <h1>Kashish Joshi Research</h1>
    <hr>
    <table class="info-table">
        <tr><td>Client Name</td><td>' . htmlspecialchars($full_name) . '</td></tr>
        <tr><td>Mobile</td><td>' . htmlspecialchars($mobile) . '</td></tr>
        <tr><td>Email</td><td>' . htmlspecialchars($email) . '</td></tr>
        <tr><td>PAN Number</td><td>' . htmlspecialchars($pan) . '</td></tr>
        <tr><td>Date</td><td>' . $date . '</td></tr>
    </table>

    <h2>Term & Conditions</h2>
    <p>There are no certain or guaranteed profits given to traders or investors in the services. The past effectiveness of the services does not predict or ensure future effectiveness or value from any of the services. We don\'t have a cancellation or return policy. Every sale is final. There will be no refunds or cancellations if you decide to test out our products and services before committing to a subscription. Refunds for subscriptions that have already been used are not available. You have agreed to all terms and conditions by using the website kashishjoshiresearch.com to register for services.</p>
    <p>There is no promise or assurance of return provided to traders/investors in the services. The past effectiveness of the services does not predict or ensure future effectiveness or value from any of the amenities. We don\'t have an annulment or return policy. Every sale is final. There will be no refunds or cancellations if you decide to test out our products and services before committing to a commitment. Refunds for subscriptions that have already been used are not available.</p>

    <h2>Risk Disclosure</h2>
    <p>Trading stocks is dangerous by nature. You need to understand the dangers associated with commodity trading and equities before you do so. Investments in this type have an elevated level of risk than other kinds of securities because of the high level of leverage attached to them. Use of leverage, also known as margin trading, might go against you and cause a big loss. The past success of these assets does not imply any future gains.</p>
    <p>Indian Advisory disclaims all responsibility for any loss, tax, fee, or brokerage you may have to pay on any gains or losses realized while working with us. Margin trading carries a significant risk and isn\'t appropriate for all investors. You should carefully evaluate your investing goals, degree of financial expertise, risk tolerance, and suitability of Kashish Joshi Research\'s services before making any trades.</p>
    <p>PLEASE NOTE: Kashish Joshi Research DOES NOT OFFER ANY PROGRAMS THAT ARE NOT PROVIDED IN OUR WEBSITE, PROFIT SHARING SERVICES, GUARANTEED SERVICES, PROJECT-BASED SERVICES, OR D-MAT/BROKERAGE SERVICES.</p>

    <h2>Dispute Settlement</h2>
    <p>According to the Arbitration and Conciliation Act, 1996, the sole arbitrator will hear all conflicts, disagreements, and inquiries of any kind that may arise within the parties. The Managing Director of Kashish Joshi Research will pick the lone arbitrator.</p>

    <h2>Jurisdiction</h2>
    <p>The two sides acknowledge that the court system will have sole control over any grievances, disagreements, and disputes, which include those pertaining to arrangements and purchases made with respect to a thing related to it.</p>

    <div class="sign-box">
        <p><strong>Client Signature:</strong> ______________________ &nbsp;&nbsp;&nbsp; <strong>Date:</strong> ' . $date . '</p>
        <p><strong>Name:</strong> ' . htmlspecialchars($full_name) . '</p>
        <p><em>This document is digitally signed via Aadhaar eSign through Digio.</em></p>
    </div>
    </body></html>';

    // Save HTML as temp file
    $html_file  = "uploads/agreement_" . $record_id . "_" . time() . ".html";
    $pdf_file   = "uploads/agreement_" . $record_id . "_" . time() . ".pdf";
    file_put_contents($html_file, $html);

    // Convert HTML to PDF using wkhtmltopdf if available
    // Otherwise use a simple PDF generation
    $wk = shell_exec("which wkhtmltopdf 2>/dev/null");
    if (!empty(trim($wk ?? ''))) {
        shell_exec("wkhtmltopdf $html_file $pdf_file 2>/dev/null");
        $pdf_content = file_get_contents($pdf_file);
    } else {
        // Fallback: use PHP's built-in to create minimal PDF
        $pdf_content = generateMinimalPDF($full_name, $mobile, $email, $pan, $date);
        file_put_contents($pdf_file, $pdf_content);
    }

    $pdf_base64 = base64_encode($pdf_content);
    $file_name  = $full_name . "-" . $pan . ".pdf";
    $file_name  = preg_replace('/[^A-Za-z0-9\-_\.]/', '', $file_name);

    // ---------- Digio DigiSign API ----------
    $payload = [
        "document_name"  => "KYC Agreement - " . $full_name,
        "file_name"      => $file_name,
        "signers"        => [[
            "identifier"          => !empty($email) ? $email : $mobile,
            "name"                => $full_name,
            "sign_type"           => "aadhaar",
            "page_num"            => 1,
            "reason"              => "I agree to the Terms and Conditions of Kashish Joshi Research",
        ]],
        "display_on_page" => "all",
        "notify_signers"  => true,
        "send_sign_link"  => true,
        "include_authentication_url" => true,
        "expire_in_days"  => 10,
    ];

    // Multipart form data with PDF file
    $boundary = uniqid();
    $body  = "--$boundary\r\n";
    $body .= "Content-Disposition: form-data; name=\"request\"\r\n";
    $body .= "Content-Type: application/json\r\n\r\n";
    $body .= json_encode($payload) . "\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Disposition: form-data; name=\"file\"; filename=\"$file_name\"\r\n";
    $body .= "Content-Type: application/pdf\r\n\r\n";
    $body .= $pdf_content . "\r\n";
    $body .= "--$boundary--\r\n";

    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL            => $base_url . "/v2/client/document/uploadpdf",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $body,
        CURLOPT_HTTPHEADER     => [
            "Authorization: Basic " . base64_encode("$client_id:$client_secret"),
            "Content-Type: multipart/form-data; boundary=$boundary",
        ],
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_TIMEOUT        => 30,
    ]);

    $response  = curl_exec($curl);
    $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

    $res = json_decode($response, true);

    file_put_contents("uploads/webhook_log.txt", date('Y-m-d H:i:s') . " - DigiSign Response ($http_code): " . $response . "\n", FILE_APPEND);

    if ($http_code !== 200 || empty($res['id'])) {
        echo "<pre style='background:#fff3cd;padding:20px;font-family:monospace'>";
        echo "<b>DigiSign API Error (HTTP $http_code)</b>\n\n";
        echo htmlspecialchars(json_encode($res, JSON_PRETTY_PRINT));
        echo "</pre>";
        return;
    }

    // Save document ID to DB
    $doc_id = $conn->real_escape_string($res['id']);
    $sign_url = $conn->real_escape_string($res['authentication_url'] ?? $res['signing_url'] ?? '');

    // Add column if not exists (safe update)
    $conn->query("UPDATE ekyc SET digio_doc_id='$doc_id', digio_sign_url='$sign_url' WHERE id=$record_id");

    // Redirect to signing URL
    if (!empty($res['authentication_url'])) {
        header("Location: " . $res['authentication_url']);
        exit;
    }

    echo "Agreement created. Document ID: " . htmlspecialchars($doc_id);
}

function generateMinimalPDF($name, $mobile, $email, $pan, $date) {
    // Minimal valid PDF structure
    $text = "TERMS AND CONDITIONS - Kashish Joshi Research\n\n";
    $text .= "Client: $name | Mobile: $mobile | Email: $email | PAN: $pan | Date: $date\n\n";
    $text .= "There are no certain or guaranteed profits given to traders or investors.\n";
    $text .= "Every sale is final. No refunds or cancellations.\n\n";
    $text .= "Risk Disclosure: Trading stocks is dangerous by nature.\n\n";
    $text .= "By signing, I agree to all Terms and Conditions of Kashish Joshi Research.";

    $pdf = "%PDF-1.4\n";
    $pdf .= "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n";
    $pdf .= "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n";
    $pdf .= "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]\n";
    $pdf .= "/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n";

    $stream = "BT\n/F1 11 Tf\n50 750 Td\n";
    $lines = explode("\n", wordwrap($text, 80, "\n", true));
    foreach ($lines as $line) {
        $line = str_replace(['(', ')', '\\'], ['\\(', '\\)', '\\\\'], $line);
        $stream .= "($line) Tj\n0 -16 Td\n";
    }
    $stream .= "ET\n";

    $pdf .= "4 0 obj\n<< /Length " . strlen($stream) . " >>\nstream\n$stream\nendstream\nendobj\n";
    $pdf .= "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n";
    $pdf .= "xref\n0 6\n0000000000 65535 f\n";
    $pdf .= "trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n9\n%%EOF";

    return $pdf;
}
?>
