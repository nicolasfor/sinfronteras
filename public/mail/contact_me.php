<?php
$json = file_get_contents('php://input');
$data = json_decode($json);
if(empty($data->name)      ||
   empty($data->city)     ||
   empty($data->email)     ||
   empty($data->phone)     ||
   empty($data->message)   ||
   !filter_var($data->email,FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($data->name));
$city = strip_tags(htmlspecialchars($data->city));
$email_address = strip_tags(htmlspecialchars($data->email));
$phone = strip_tags(htmlspecialchars($data->phone));
$message = strip_tags(htmlspecialchars($data->message));
   
// Create the email and send the message
$to = 'paola@abogadosinfrontera.es'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Abogados Sin Frontera: Respuesta a tu consulta Gratuita";
$email_body = "Has recibido un nuevo mensaje.\n\n"."Estos son los detalles:\n\nNombre: $name\n\nCiudad: $city\n\nCorreo: $email_address\n\nTelefono: $phone\n\nMensaje:\n$message";
$headers = "From: noreply@abogadosinfrontera.es\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>