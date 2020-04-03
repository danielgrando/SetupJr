<?php

if(isset($POST['email']) && !empty($POST['email'])){
    $nome = addslashes($POST['name']);
    $email = addslashes($POST['email']);
    $telefone = addslashes($POST['phone']);
    $mensagem = addslashes($POST['mesage']);


    $to = "setupjr@hotmail.com";
    $subject = "Contato - Orçamento";
    $body = "Nome: ".$nome "\r\n".
            "Email: ".$email "\r\n".
            "Telefone: ".$telefone "\r\n". 
            "Mensagem: ".$mensagem;
            
    $header = "From: setupjr@hotmail.com"."\r\n"
            ."Reply-To: ".$email. "\r\n"
            ."X=Mailer:PHP/".phpversion();


    if(mail($to,$subject,$body,$header){
        echo("Email Enviado com Sucesso!");
    }else{
        echo("Email não enviado!");
    } 
}
?> 