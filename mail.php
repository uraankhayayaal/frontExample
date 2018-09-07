<?php

$name = $_POST['name'];
$subject = $_POST['subject'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$additional = $_POST['additional'];
$confirm = $_POST['confirm'];

$to      = 'uraankhayayaal@gmail.com';
$message = "$comment\n $additional\n $name\n $phone\n $email";
$headers = array(
    'From' => 'uraankhayayaal@gmail.com',
    'Reply-To' => 'uraankhayayaal@gmail.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);

header('Location: /');
exit;
?>