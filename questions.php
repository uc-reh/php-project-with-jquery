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
    <title>Prepkit Questions</title>
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


    <div class="list-group w-25" style="display:none; float: left;">
        <!-- <p class="list-group-item list-group-item-action li-1"></p> -->
    </div>
    <div class="container">
        <div class="questions-n-ans my-4">
            <p class="question">
            </p>
            <div class="fixed-bottom bg-light p-3 border border-dark" style="z-index: -1;">
                <div class="d-flex justify-content-end">
                    <p class="time">1:20</p>
                    <button class="list-bt btn btn-secondary col-1 mx-5">LIST</button>
                    <button class="prev btn btn-secondary col-1 mx-5">PREV</button>
                    <p class="data col-1"></p>
                    <button class="next btn btn-secondary col-1 mx-5">NEXT</button>
                    <button class="end btn btn-secondary col-1 mx-5">END TEST</button>
                </div>
            </div>



        </div>
        <form>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1">
                <label class="answer0 form-check-label" for="radio1"></label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">
                <label class="answer1 form-check-label" for="radio2"></label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">
                <label class="answer2 form-check-label" for="radio2"></label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">
                <label class="answer3 form-check-label" for="radio2"></label>
            </div>
        </form>
    </div>

    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Are you sure?</h5>
                    <button type="button" class="btn-close modclose"></button>
                </div>
                <div class="modal-body">
                    <p>You want to end the test</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="modclose btn btn-secondary">Cancel</button>
                    <button type="button" class="endtest btn btn-danger">End</button>
                </div>
            </div>
        </div>
    </div>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="script.js"></script>
    <!-- <script>
        $(document).ready(function () {
            //Jquery here...
            var i = 1;
            $.ajax(
                {
                    url: "http://localhost/PHP_PROJECT/question.json",
                    type: "POST",
                    success: function (data) {
                        var str = JSON.parse(data[0]['content_text']);
                        // console.log(str.question);
                        $('.question').text(str.question);
                        // console.log(data[0]['content_text']);
                        // $.each(data, function(key,value)
                        // {
                        //     console.log(key);
                        //     console.log(value);
                        //    var n = data[i]['snippet'];
                        //    $('.question').text(n);
                        // });
                        $('.next').click(function () {
                            k = i++;
                            console.log(k);
                            if (k > data.length - 1) {
                                alert("Questions khatam!!");
                            }
                            else {
                                $('.question').text(JSON.parse(data[k]['content_text']).question);
                                // l=k;
                            }
                        });
                        $('.prev').click(function () {
                            k = k - 1;
                            if (k < 0) {
                                k = 0;
                            }
                            //  else if(m==(l-1)){
                            //     m--;
                            //  }
                            console.log(k);

                            if (k > data.length - 1 || k < 0) {
                                alert("Questions khatam!!");
                            }
                            else {
                                $('.question').text(JSON.parse(data[k]['content_text']).question);
                            }
                        });
                        $('.end')
                    }
                });
        });
    </script> -->
</body>

</html>