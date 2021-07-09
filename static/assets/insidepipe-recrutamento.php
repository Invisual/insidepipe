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
  $userdob = $_POST['dob'];
  $userphone = $_POST['phone'];
  $useremail = $_POST['email'];
  $userdegree = $_POST['degree'];
  $userschool = $_POST['school'];
  $usermotive = $_POST['motive'];
  $usernotes = $_POST['notes'];
  $usercv = $_POST['cv'];
  
  try {
    // Server settings
    $mail->IsSMTP();
    $mail->Host = "mail.invisual.pt";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->Username = "suporte@invisual.pt";
    $mail->Password = "suporte#lausivni";
      
    // Recipients
    $mail->setFrom('noreply@ipmd.pt', 'noreply');
    $mail->addAddress('suporte@invisual.pt', 'IPMD');
    $mail->addReplyTo($useremail, $username);
    
    // Content
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->WordWrap = 50;
    $mail->Subject = "Envio de candidatura | Insidepipe";
    $mail->Body = "
    Acabou de receber um pedido de inscrição através de insidepipe.pt<br/>
    _________________________________________________________<br/><br/>
    <b>Nome:</b> {$username}<br/><br/>
    <b>Data de nascimento:</b> {$userdob}<br/><br/>
    <b>Telefone:</b> {$userphone}<br/><br/>
    <b>Email:</b> {$useremail}<br/><br/>
    <b>Escolariedade:</b> {$userdegree}<br/><br/>
    <b>Escola:</b> {$userschool}<br/><br/>
    <b>Motivo de candidatura:</b> {$usermotive}<br/><br/>
    <b>Observações:</b> {$usernotes}<br/><br/>
    ";
    if (isset($_FILES['cv']) &&
    $_FILES['cv']['error'] == UPLOAD_ERR_OK) {
        $mail->AddAttachment($_FILES['cv']['tmp_name'],
                             $_FILES['cv']['name']);
    }
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