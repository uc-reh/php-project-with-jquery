<?php
session_start();
$file = file_get_contents("hi.json");

$oldarr = json_decode($file, true);
// print_r($_POST);

// question: index
// answer: user answer
if (isset($_SESSION[$_POST['question']])) {
    $_SESSION[$_POST['question']]['answer'] = $_POST['answer'];
} else {
    $temp = array();
    $temp[$_POST['question']]['answer'] = $_POST['answer'];
    array_push($_SESSION, $temp);
}

// $_SESSION['question'] = $_POST['question'];
// $_SESSION['answer'] = $_POST['answer'];
// $finalans = strip_tags($_SESSION['answer']);
// $newques = $_SESSION['question'];
// $newans  = $finalans;


// $array = array(array('question'=>$newques, 'answer'=>$newans));
// $temparray = $array;
// if (empty($oldarr)) {
//     $_SESSION= $array;
// }

// else if(!empty($oldarr)){
//     $_SESSION = array_merge($array, $oldarr);
// }
// $temparray = 0;
// $_SESSION['question'];
// $_SESSION['answer'];
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