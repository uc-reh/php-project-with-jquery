<?php

$inp = file_get_contents('question.json');

$array = json_decode($inp);


$s_array = json_decode($array[0]->content_text);

echo '<pre>';
// print_r($s_array->answers[0]->answer);
// print_r($s_array->answers[0]->is_correct);
echo '</pre>';

for($i=0; $i<4; $i++){
if('Consultation'==$s_array->answers[$i]->answer)
{
    if($s_array->answers[$i]->is_correct==1){
        echo 'correct';
    }
    else{
            echo 'incorrect';
    }
}
}
//[0]=>answer is this




?>