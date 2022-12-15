<?php
$json_string = 'question.json';
$question = file_get_contents($json_string);
$arr = json_decode($question, true);
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
    .options {
        background-color: gainsboro;

        padding: 20px;
    }
    /* .position{
        z-index: 4;
    } */
</style>
</head>

<body>
    <div class="position">
    <nav class="navbar bg-white border border-dark ">
        <a href="#" class="col-1 col-xs-4 navbar-brand"> <img
                src="https://www.ucertify.com/layout/themes/bootstrap4/images/logo/ucertify_logo.png"
                alt="uCertify Logo"></a>
        <h1 class=" col-xs-4 navbar-nav mx-auto">uCertify Prep Test</h1>
    </nav>
</div>

    <div class="list-group w-25" style="display:none; float: left; background: white; z-index: 1; position:relative; float: left;
    background: white;
    z-index: 1;
    position: relative;
    height: 610px;
    width: 215px;
    overflow: auto;
    float: left;
    position: relative;
    margin-left: -5px;">
        <div class="d-flex" style="top: 1px; position: relative; z-index: 2; cursor:pointer;">
            <p class="list-group-item list-group-item-action" style="cursor:pointer;margin-top: 4px;z-index: 1;"
                id="0li">
                <span class="badge at-b rounded-pill text-bg-success w-25" style="background-color: white;">Attempted</span>
                <span class="badge ut-b rounded-pill text-bg-warning w-25"
                    style="background-color: white;">Unattempted</span>
                    <span class="badge all-b rounded-pill text-bg-primary w-25"
                    style="background-color: white;">All</span>
            </p>
        </div>
        </div>
        <!-- <p class="list-group-item list-group-item-action li-1"></p> -->
    
    <div class="container">
        <div class="questions-n-ans my-4">
            <p class="question" style="z-index: -1;" id="quest">
            </p>
           



        </div>
    </div>

        <form class="options container position">
            <!-- <div class="form-check">
                <input type="answer radio" class="form-check-input" id="radio1" name="optradio" value="option1">
                <label class="answer form-check-label" for="radio1"></label>
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
            </div> -->
        </form>
    </div>
           <div class="position" style="position:fixed; position: absolute; width: 100%; height: 45%;"></div>
         <div class="fixed-bottom bg-light p-3 border border-dark" style="z-index: -1;">
                <div class="d-flex justify-content-end">
                    <p id="time"></p>
                    <button class="list-bt btn btn-secondary col-1 mx-5">LIST</button>
                    <button class="prev btn btn-secondary col-1 mx-5">PREV</button>
                    <p class="data col-1"></p>
                    <button class="next btn btn-secondary col-1 mx-5">Next</button>
                    <button class="end btn btn-secondary col-1 mx-5">End Test</button>
                </div>
            </div>
        <div class="modal" tabindex="-1" style="z-index:3;">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Are you sure?</h5>
                        <button type="button" class="btn-close modclose"></button>
                    </div>
                    <div class="modal-body">
                        <p>You want to end the test</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-primary">Total <br><span class="total-item"></span>
                            </button>
                            <button class="btn btn-danger">Unattempt <br><span class="unattempt"></span></button>
                            <button class="btn btn-success">Attempt <br><span class="attempt"></span></button>
                            
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="itmlist btn btn-warning" style="z-index: 10!important;">Go to item list</button>
                        <button type="button" class="modclose btn btn-secondary" style="z-index: 10!important;">Cancel</button>
                        <a href="result.html">
                            <button type="button" class="endtest btn btn-danger" style="z-index: 10!important;">End</button></a>
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