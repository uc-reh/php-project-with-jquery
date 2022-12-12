<?php

// $data[] = $_POST['data'];

$inp = file_get_contents('question.json');
$h_inp = file_get_contents('hi.json');
$tempArray = json_decode($inp);
$h_tempArray = json_decode($h_inp);
// echo $tempArray[0];
// print_r($arr);
// echo '<pre>';
// print_r($tempArray[0]->content_text);
// echo '</pre>';

foreach ($tempArray as $tarray) {
    $newarr = (json_decode($tarray->content_text));
    echo '<pre>';
    $finarr = (array($newarr->answers)[0]);
    print_r(array($finarr));
    echo '</pre>';
    // echo $newarr->answers;

}


foreach ((array_reverse($h_tempArray)) as $htarray) {

    // $h_newarr = $htarray;
    // echo '<pre>';
    // print_r($h_newarr);
    // echo '</pre>';

}

// foreach ($tempArray as $tarray) {
//     foreach ((array_reverse($h_tempArray)) as $htarray) {

//         $newarr = json_decode($tarray->content_text);
//         $h_newarr = $htarray;

//         if($newarr->answers[$h_newarr->question]){

//         }



//     }
// }

// array_push($newarr->answers,"Policies and Procedures");
// echo '<pre>';
// print_r($newarr->answers[2]);
// print_r($newarr->answers[0]->answer);

// echo '</pre>';

// if ($newarr->answers[2] == $newarr->answers[2]) {
//     echo "correct";
// } else {
//     echo "incorrect";
// }
// array_push($tempArray, $data);
// $jsonData = json_encode($tempArray);
// file_put_contents('results.json', $jsonData);

?>