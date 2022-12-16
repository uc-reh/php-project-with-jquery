<?php
session_start();
// print_r($_POST);
// question: index
// answer: user answer
if (!isset($_SESSION['question'])) {
    $_SESSION['question'] = array();
} else {
    $_SESSION['question'][$_POST['question']] = ($_POST['answer']);
}

$inp = file_get_contents('question.json');
$array = json_decode($inp);
$s_array = json_decode($array[$_POST['question']]->content_text, true);


if ($s_array['answers'][$_POST['answer']]['is_correct']) {
    echo "1";
} else {
    echo "0";
}

?>