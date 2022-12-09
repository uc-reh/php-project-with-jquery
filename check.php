<?php

// $data[] = $_POST['data'];

$inp = file_get_contents('question.json');
$tempArray = json_decode($inp);
// echo $tempArray[0];
// print_r($arr);
// echo '<pre>';
// print_r($tempArray[0]->content_text);
// echo '</pre>';

$newarr = json_decode($tempArray[0]->content_text);
echo '<pre>';
// print_r($newarr);
echo '</pre>';
array_push($newarr->answers,"Policies and Procedures");
echo '<pre>';
print_r($newarr->answers);
print_r($newarr->answers[0]->answer);

echo '</pre>';

if($newarr->answers[0]->answer == $newarr->answers[4]){
    echo "correct";
}
else{
    echo "incorrect";
}
// array_push($tempArray, $data);
// $jsonData = json_encode($tempArray);
// file_put_contents('results.json', $jsonData);

?>