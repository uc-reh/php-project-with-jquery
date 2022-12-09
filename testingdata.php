<?php
session_start();
print_r($_POST);

$question = $_POST['question'];
$answer = $_POST['answer'];
$_SESSION['question'] = $question;
$_SESSION['answer'] = $answer;

file_put_contents("hi.json", json_encode($_POST));

echo $question;
session_destroy();
// print_r();

?>