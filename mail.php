<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'autoload.php';

//Instantiation and passing `true` enables exceptions

function send_mail($customer_mail, $msg, $subject)
{
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;                               // Enable verbose debug output

        // $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'https://sxb1plzcpnl473168.prod.sxb1.secureserver.net:2096';  // Specify main and backup SMTP servers
        // $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'The Vyne Pharmacy';                 // SMTP username
        $mail->Password = 'thevynepharmacy123@';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        $mail->setFrom('mail@thevynepharmacy.com', 'The Vyne Pharmacy');
        $mail->addAddress("somzie@yahoo.com");     // Add a recipient
        $mail->addAddress("thevyne@hotmail.com");     // Add a recipient
        $mail->addReplyto('mail@thevynepharmacy.com');

        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $msg;


        if ($mail->send()) {
            return true;
        } else {
            return false;
        }
    } catch (Exception $e) {
        return false;
    }
};
