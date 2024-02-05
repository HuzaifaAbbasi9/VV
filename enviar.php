<?php
  
if($_POST) {
    $full_name = "";
    $email = "";
    $phone = "";
    $message = "";
    $email_body = "<div>";
      
    if(isset($_POST['full_name'])) {
        $full_name = filter_var($_POST['full_name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Name:</b></label>&nbsp;<span>".$full_name."</span>
                        </div>";
    }
 
    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Email:</b></label>&nbsp;<span>".$email."</span>
                        </div>";
    }
    
    if(isset($_POST['phone'])) {
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
        $phone .= "<div>
                           <label><b>Phone:</b></label>&nbsp;<span>".$phone."</span>
                        </div>";
    }
      

      
    
      
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
        $email_body .= "<div>
                           <label><b>Message:</b></label>
                           <div>".$message."</div>
                        </div>";
    }
    
    $recipient = "info@thevynepharmacy.com, somzie@yahoo.com, mail@thevynepharmacy.com";
      
    $email_body .= "</div>";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
      
    if(mail($recipient, $email, $email_body, $headers)) {
        echo "<p><h1>Thank you for contacting us, $full_name.</h1></p> 
        <p><h3>You will get a reply within 24 hours.</h3></p>";
        header("Refresh:4; url=http://thevynepharmacy.com"); 
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
      
} else {
    echo '<p>Something went wrong</p>';
}
?>