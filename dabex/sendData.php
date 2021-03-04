<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Instantiation and passing `true` enables exceptions

if($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $statement = $_POST["statement"];
    $message = $_POST["message"];

    $errors = [];
    $return = [];

    if(empty($name)) {
        array__push($errors, "name");
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "email");
    }

    if(empty($phone)) {
        array__push($errors, "phone");
    }

    if(empty($statement)) {
        array__push($errors, "statement");
    }

    if(count($errors) > 0) {
        $return["errors"] = $errors;
    } else {
        // $headers = "MIME-Version: 1.0" . "\r\n";
        // $headers = "Content-type: text/html; charset=UTF-8". "\r\n";
        $headers = "From: ".$email."\r\n";
        // $headers = "Reply-to: ".$email;
        $message = "<tr><td colspan=1>" . date('d/m/Y, H:i:s') . "</td></tr>";
        $message .= "
            <html>
                <head>
                    <meta charset=\"utf-8\">
                </head>
                <body>
                    <div> Imię: $name</div>
                    <div> Email: <a href=\"mailto:$email\">$email</a> </div>
                    <div> Telefon: $phone</div>
                    <div> Stanowisko: $statement</div>
                </body>
            </html>";
            $mail = new PHPMailer(true);
            try {
                //Server settings
                // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'kamil.ogrodowczyk111@gmail.com';                     //SMTP username
                $mail->Password   = 'Nowakowscy6';                               //SMTP password
                $mail->SMTPSecure = 'tls';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->CharSet = 'UTF-8';
                $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
                $mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
            
            
                //Recipients
                $mail->setFrom('kamil.ogrodowczyk111@gmail.com', 'Kamil');
                $mail->addAddress('kamil.ogrodowczyk111@gmail.com');     //Add a recipient
            
                // $body = "Wiadomość ze strony -  . date("d-m-Y") $message $headers";
                
                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = "Wiadomość ze strony - $headers";
                $mail->Body    = $message;
                // $mail->AltBody = strip_tags($body);
            
                $mail->send();
                echo 'Message has been sent';
            } catch (Exception $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }

        if ($mail) {
            $return["status"] = "ok";
        } else {
            $return["status"] = "error";
        }
    }
    header("Content-Type: application/json");
    header('Access-Control-Allow-Origin: *');
    header('Allow: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
    echo json_encode($return);
}