<?php
session_start();
// print_r($_POST);

$question = $_POST['question'];
$answer = $_POST['answer'];
$newans = strip_tags($answer);
$newques = $_SESSION['question'] = $question;
$_SESSION['answer'] = $newans;
// print_r($_SESSION);

//echo $_SESSION['question'];
$inp = file_get_contents('question.json');
$tempArray = json_decode($inp);
$newarr = json_decode($tempArray[0]->content_text);
array_push($newarr->answers,($_SESSION['answer']));

// file_put_contents("question.json", array_push($newarr->answers, ($_SESSION['answer'])));


// file_put_contents("hi.json", json_encode($_POST));

// $newarr = array($_SESSION['answer'], $_SESSION['question']);


session_destroy();
// print_r();

?>