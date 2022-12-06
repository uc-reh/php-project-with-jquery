<?php
$json_string = 'question.json';
$question = file_get_contents($json_string);
$arr = json_decode($question, true);
// echo '<pre>';
// print_r($arr);
// echo '</pre>';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
    <!--New rel" style="margin-right: 527px;-->
    <style>
        /* .start-btn {
            margin-top: 239px;
        } */
    </style>
</head>

<body>
    <nav class="navbar bg-light border border-dark ">
        <a href="#" class="col-1 col-xs-4 navbar-brand"> <img
                src="https://www.ucertify.com/layout/themes/bootstrap4/images/logo/ucertify_logo.png"
                alt="uCertify Logo"></a>
        <h1 class=" col-xs-4 navbar-nav mx-auto">uCertify Prep Test</h1>
    </nav>
    <div class="container">
        <div class="questions-n-ans my-4">
            <p class="question">
            </p>
            <button>NEXT</button>
        </div>
        <form>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1">
                <label class="form-check-label" for="radio1">Option 1</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">
                <label class="form-check-label" for="radio2">Option 2</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">
                <label class="form-check-label" for="radio2">Option 2</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">
                <label class="form-check-label" for="radio2">Option 2</label>
            </div>
        </form>
    </div>
   

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            //Jquery here...
            var i=1;
            $.ajax(
                {
                    url:"http://localhost/PHP_PROJECT/question.json",
                    type:"POST",
                    success: function(data){
                            $('.question').text(data[0]['snippet']);
                        // $.each(data, function(key,value)
                        // {
                        //     console.log(key);
                        //     console.log(value);
                        //    var n = data[i]['snippet'];
                        //    $('.question').text(n);
                        // });
                          $('button').click(function () {
                            k = i++;
                            if (k > data.length){
                                alert("Bhag ja ab");
                            }
                            else{
                            $('.question').text(data[k]['snippet']);
                            }

                        });
                    }
                });
         });
    </script>
</body>

</html>