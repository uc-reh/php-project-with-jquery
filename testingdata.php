<?php
session_start();
// print_r($_POST);

$question = $_POST['question'];
$answer = $_POST['answer'];
$newans = strip_tags($answer);
$newques = $_SESSION['question'] = $question;
$_SESSION['answer'] = $newans;



//$_SESSION = array_merge($_SESSION, $ans);

// print_r($_SESSION);
// echo $newques;
//echo $_SESSION['question'];
// $inp = file_get_contents('question.json');
// $tempArray = json_decode($inp);
// $newarr = json_decode($tempArray[$newques+1]->content_text);
// array_push($newarr->answers,($_SESSION['answer']));


 print_r($_SESSION);


file_put_contents("hi.json",json_encode($_SESSION));

// $newarr = array($_SESSION['answer'], $_SESSION['question']);


session_destroy();
// print_r();

?>