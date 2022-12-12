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
print_r($_SESSION['question']);

$inp = file_get_contents('question.json');
$array = json_decode($inp);
$s_array = json_decode($array[$_POST['question']]->content_text, true);

// print_r($s_array['answers'][$_POST['answer']]);

if ($s_array['answers'][$_POST['answer']]['is_correct']) {
    echo "correct";
} else {
    echo "incorrect";
}
//$temp_question = $_SESSION['question'][$_POST['question']];

// foreach ($temp_question as $key => $answer) {
//     $s_array = json_decode($array[$key]->content_text);

//     for ($i = 0; $i < 4; $i++) {
//         if (($answer) == $s_array->answers[$i]->answer) {
//             if ($s_array->answers[$i]->is_correct == 1) {
//                 echo 'correct';
//             } else {
//                 echo 'incorrect';
//             }
//         }
//     }
// }
// session_destroy();

?>