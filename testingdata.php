<?php
session_start();
$_SESSION['question'] = $_POST['question'];
echo "This is the name". $_SESSION['name'];
print_r($_POST);

file_put_contents("hi.txt", ($_SESSION['question']));
session_destroy();
echo "bye";

?>