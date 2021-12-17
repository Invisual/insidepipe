<?php
header("Access-Control-Allow-Origin: *");      
header("Access-Control-Allow-Headers:
{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST)) {
  $mail = new PHPMailer(TRUE);
  
  $username = $_POST['name'];
  $useremail = $_POST['email'];
  $usersubject = $_POST['subject'];
  $usermessage = $_POST['message'];
  
  try {
    // if(!filter_var($useremail, FILTER_VALIDATE_EMAIL)){
    //   echo 'Email inválido.';
    //   exit;
    // }
    // Server settings
    $mail->IsSMTP();
    $mail->Host = "mail.invisual.pt";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->Username = "suporte@invisual.pt";
    $mail->Password = "suporte#lausivni";
      
    // Recipients
    $mail->setFrom('noreply@invisual.pt', 'noreply');
    $mail->addAddress('suporte@invisual.pt', 'Contacto do website');
    $mail->addReplyTo($useremail, $username);
    
    // Content
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->WordWrap = 50;
    $mail->Subject = "Pedido de consulta pelo website por {$username} | Insidepipe";
    $mail->Body = "
    Acabou de receber um pedido de contacto através de www.insidepipe.pt<br/>
    _________________________________________________________<br/><br/>
    <b>Nome:</b> {$username}<br/><br/>
    <b>Email:</b> {$useremail}<br/><br/>
    <b>Assunto:</b> {$usersubject}<br/><br/>
    <b>Mensagem:</b> {$usermessage}<br/><br/>
    ";
    $mail->send();
    echo 'success';
  }
  catch (Exception $e)
  {
    /* PHPMailer exception. */
    echo $e->errorMessage();
  }
  catch (\Exception $e)
  {
    /* PHP exception (note the backslash to select the global namespace Exception class). */
    echo $e->getMessage();
  }

}