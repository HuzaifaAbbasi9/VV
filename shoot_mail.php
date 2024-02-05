<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header("Access-Control-Allow-Credentials: true");

require 'mail.php';
$data = json_decode(file_get_contents('php://input'), true);
if (isset($_GET['book_prescriptions']) && $_GET['book_prescriptions'] == '1') {

    $name = $_POST['name'];
    $nhs_number = $_POST['nhs_number'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $prescription_drugs = $_POST['prescription_drugs'];


    $message = "Name: " . nl2br(stripslashes($name));
    $message .= "<br/>NHS Number: " . nl2br(stripslashes($nhs_number));
    $message .= "<br/>Phone Number: " . nl2br(stripslashes($phone_number));
    $message .= "<br/>Email: " . nl2br(stripslashes($email));
    $message .= "<br/>Prescription Drugs: " . nl2br(stripslashes($prescription_drugs));
} else if (isset($_GET['mega_tab_2']) && $_GET['mega_tab_2'] == '1') {

    $name = $_POST['name'];
    $date = date("d-m-Y", strtotime($_POST['date']));
    $time = date("h:i a", strtotime($_POST['time']));
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];


    $message = "Full Name: " . nl2br(stripslashes($name));
    $message .= "<br/>Date: " . nl2br(stripslashes($date));
    $message .= "<br/>Time Slot: " . nl2br(stripslashes($time));
    $message .= "<br/>Phone Number: " . nl2br(stripslashes($phone_number));
    $message .= "<br/>Email: " . nl2br(stripslashes($email));
} else if (isset($_GET['contact_frm']) && $_GET['contact_frm'] == '1') {



    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $message_text = $_POST['message'];


    $message = "Name: " . nl2br(stripslashes($name));
    $message .= "<br/>Phone Number: " . nl2br(stripslashes($phone_number));
    $message .= "<br/>Email: " . nl2br(stripslashes($email));
    $message .= "<br/>Message: " . nl2br(stripslashes($message_text));
} else {
    echo json_encode(array('error' => 'error'));
}

$from_email = 'mail@thevynepharmacy.com';
$toEmail = "";
$subject = 'New Query from The Vyne Pharmacy';
$mailHeaders = "MIME-Version: 1.0" . "\r\n";
$mailHeaders .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$mailHeaders .= "From: " . $from_email . "\r\n";

if (send_mail($toEmail, $message, $subject)) {
    echo json_encode(array('status' => true));
} else {
    echo json_encode(array('status' => false));
}
