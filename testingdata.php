<?php
session_start();
// print_r($_POST);
// question: index
// answer: user answer
if (!isset($_SESSION['question'])) {
    $_SESSION['question'] = array();
} else {
    $_SESSION['question'][$_POST['question']] = strip_tags($_POST['answer']);
}
print_r($_SESSION['question']);

$inp = file_get_contents('question.json');
$array = json_decode($inp);
foreach (array_slice($_SESSION['question'],1) as $key => $answer) {
    $s_array = json_decode($array[$key]->content_text);
    for ($i = 0; $i < 4; $i++) {
        if (($answer) == $s_array->answers[$i]->answer) {
            if ($s_array->answers[$i]->is_correct == 1) {
                echo 'correct';
            } else {
                echo 'incorrect';
            }
        }
    }

}

?>