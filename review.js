$(document).ready(function() {
    //Jquery here...
    var k = 0;
    $.ajax({
        url: "question.json",
        type: "POST",
        success: function(data) {
            var str = JSON.parse(data[0]["content_text"]);

            $(".question").text(str.question);
            $(".snippet").append(str.explanation);

            $(".options").empty();

            for (i = 0; i < 4; i++) {
                $(".options").append(
                    '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
                    (i + 1) +
                    '"name="optradio" value="' +
                    i +
                    '"><label class= "answer form-check-label d-block" for= "' +
                    JSON.parse(data[0]["content_text"]).answers[i].answer +
                    '">' +
                    str.answers[i].answer +
                    "</label></div>"
                );
            }

            $(".form-check-input").click(function() {
                sessionStorage.setItem("option0", $(this).attr("value"));
            });
            itemValue = sessionStorage.getItem("option0");
            if (itemValue !== null) {
                $('input[value="' + itemValue + '"]').click();
            }
            $(".form-check-input").attr("disabled", "true");

            if (sessionStorage.getItem("result" + k) == 1) {
                $(".checkit").append(
                    '<button class="btn btn-success d-flex mx-auto">Correct</button>'
                );
            } else if (sessionStorage.getItem("result" + k) == 0) {
                $(".checkit").append(
                    '<button class="btn btn-warning d-flex mx-auto">Incorrect</button>'
                );
            } else {
                $(".checkit").append(
                    '<button class="btn btn-danger d-flex mx-auto">Unattempt</button>'
                );
            }
            // $('input[value="' + 1 + '"]').addClass('bg-success');


            //function for selecting all correct answers
            function selectCorrect(que_no) {
                for (ans_no = 0; ans_no < 3; ans_no++) {
                    if (
                        JSON.parse(data[que_no]["content_text"]).answers[ans_no][
                            "is_correct"
                        ] == 1
                    ) {
                        $("#radio" + (ans_no + 1)).addClass("bg-success");
                    }
                }
            }
            selectCorrect(k);

            $(".data").text("0" + 1 + " of " + data.length);
            if (k == 0) {
                $(".prev").prop("disabled", true);
            } // disabling prev button by default

            //Everything on pressing next
            $(".next").click(function() {
                $(".options").empty();
                $(".checkit").empty();
                $(".snippet").empty();

                $(".prev").prop("disabled", false);
                k = k + 1;
                if (k > data.length - 1) {
                    k = data.length - 1;
                } else {
                    $(".question").text(JSON.parse(data[k]["content_text"]).question);
                    for (i = 0; i < 4; i++) {
                        $(".options").append(
                            '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
                            (i + 1) +
                            '" name="optradio" value="' +
                            i +
                            '"><label class="answer form-check-label d-block" for="' +
                            JSON.parse(data[k]["content_text"]).answers[i].answer +
                            '">' +
                            JSON.parse(data[k]["content_text"]).answers[i].answer +
                            "</label></div>"
                        );
                    }
                    if (k <= 8) {
                        $(".data").text("0" + (k + 1) + " of " + data.length);
                    } else {
                        $(".data").text("" + (k + 1) + " of " + data.length);
                    }

                    if (k == data.length - 1) {
                        $(".next").prop("disabled", true);
                    }
                    $(".form-check-input").click(function() {
                        $.post(
                            "testingdata.php", {
                                question: k,
                                answer: $(this).val(),
                            },
                            function(data) {
                                sessionStorage.setItem("result" + k, data);
                                itemValue = sessionStorage.getItem("result" + k);
                            }
                        );
                    });

                    $(".form-check-input").click(function() {
                        sessionStorage.setItem("option" + k, $(this).attr("value"));
                    });
                    itemValue = sessionStorage.getItem("option" + k);
                    if (itemValue !== null) {
                        $('input[value="' + itemValue + '"]').click();
                    }
                    $(".form-check-input").attr("disabled", "true");

                    if (sessionStorage.getItem("result" + k) == 1) {
                        $(".checkit").append(
                            '<button class="btn btn-success d-flex mx-auto">Correct</button>'
                        );
                    } else if (sessionStorage.getItem("result" + k) == 0) {
                        $(".checkit").append(
                            '<button class="btn btn-warning d-flex mx-auto">Incorrect</button>'
                        );
                    } else {
                        $(".checkit").append(
                            '<button class="btn btn-danger d-flex mx-auto">Unattempt</button>'
                        );
                    }
                    $(".snippet").append(
                        JSON.parse(data[k]["content_text"]).explanation
                    );
                    selectCorrect(k);
                }
            });

            //Everything on pressing prev
            $(".prev").click(function() {
                $(".options").empty();
                $(".checkit").empty();
                $(".snippet").empty();
                $(".next").prop("disabled", false);
                k = k - 1;
                if (k < 0) {
                    k = 0;
                } else {
                    $(".question").text(JSON.parse(data[k]["content_text"]).question);

                    for (i = 0; i < 4; i++) {
                        $(".options").append(
                            '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
                            (i + 1) +
                            '" name="optradio" value="' +
                            i +
                            '"><label class="answer form-check-label d-block" for="' +
                            JSON.parse(data[k]["content_text"]).answers[i].answer +
                            '">' +
                            JSON.parse(data[k]["content_text"]).answers[i].answer +
                            "</label></div>"
                        );
                    }

                    if (k <= 8) {
                        $(".data").text("0" + (k + 1) + " of " + data.length);
                    } else {
                        $(".data").text("" + (k + 1) + " of " + data.length);
                    }
                    if (k == 0) {
                        $(".prev").prop("disabled", true);
                    }
                    $(".form-check-input").click(function() {
                        $.post(
                            "testingdata.php", {
                                question: k,
                                answer: $(this).val(),
                            },
                            function(data) {
                                sessionStorage.setItem("result" + k, data);
                                itemValue = sessionStorage.getItem("result" + k);
                            }
                        );
                    });
                    $(".form-check-input").click(function() {
                        sessionStorage.setItem("option" + k, $(this).attr("value"));
                    });
                    itemValue = sessionStorage.getItem("option" + k);
                    if (itemValue !== null) {
                        $('input[value="' + itemValue + '"]').click();
                    }
                    $(".form-check-input").attr("disabled", "true");
                    if (sessionStorage.getItem("result" + k) == 1) {
                        $(".checkit").append(
                            '<button class="btn btn-success d-flex mx-auto">Correct</button>'
                        );
                    } else if (sessionStorage.getItem("result" + k) == 0) {
                        $(".checkit").append(
                            '<button class="btn btn-warning d-flex mx-auto">Incorrect</button>'
                        );
                    } else {
                        $(".checkit").append(
                            '<button class="btn btn-danger d-flex mx-auto">Unattempt</button>'
                        );
                    }
                    $(".snippet").append(
                        JSON.parse(data[k]["content_text"]).explanation
                    );
                    selectCorrect(k);
                }
            }); //End of prev click function

            //Prinitng the list (sidebar)
            for (n = 0; n < data.length; n++) {
                optValue = sessionStorage.getItem("option" + n);
                $(".list-group").append(
                    '<p class="list-group-item snip list-group-item-action" style="cursor:pointer; margin-top:-10px; z-index: 1;" id="' +
                    n +
                    'li"><b>Ques :  ' +
                    (n + 1) +
                    " </b>" +
                    data[n]["snippet"] +
                    '<br><span class="badge rounded-pill text-bg-warning att' +
                    n +
                    '">unattempted</span></p>'
                );

                if (optValue !== null) {
                    $(".att" + n)
                        .addClass("text-bg-success")
                        .text("attepmted")
                        .removeClass("text-bg-warning");
                }
            }

            //This is iterating the list items
            $(".list-group-item").click(function() {
                $(".options").empty();
                $(".snippet").empty();
                var qid = $(this).attr("id");
                var final_id = parseInt(qid);
                k = final_id;

                function SelectQues(k) {
                    $(".list-group-item").click(function() {
                        $(".options").empty();
                        var qid = $(this).attr("id");
                        var final_id = parseInt(qid);
                        k = final_id;
                        $(".question").text(
                            JSON.parse(data[k]["content_text"]).question
                        );
                        $(".snippet").text(
                            JSON.parse(data[k]["content_text"]).explanation
                        );
                        if (k <= 8) {
                            $(".data").text("0" + (k + 1) + " of " + data.length);
                        } else {
                            $(".data").text("" + (k + 1) + " of " + data.length);
                        }
                        for (i = 0; i < 4; i++) {
                            $(".options").append(
                                '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
                                (i + 1) +
                                '" name="optradio" value="' +
                                i +
                                '"><label class="answer form-check-label d-block" for="' +
                                JSON.parse(data[k]["content_text"]).answers[i]
                                .answer +
                                '">' +
                                JSON.parse(data[k]["content_text"]).answers[i]
                                .answer +
                                "</label>"
                            );

                            if (k > 0) {
                                $(".prev").prop("disabled", false);
                            }
                            if (k == data.length - 1) {
                                $(".next").prop("disabled", true);
                            }
                            if (k == 0) {
                                $(".prev").prop("disabled", true);
                            }
                        }
                    });
                }
                SelectQues(k);

                $(".form-check-input").click(function() {
                    $.post(
                        "testingdata.php", {
                            question: k,
                            answer: $(this).val(),
                        },
                        function(data) {
                            sessionStorage.setItem("result" + k, data);
                            itemValue = sessionStorage.getItem("result" + k);
                        }
                    );
                });
                $(".form-check-input").click(function() {
                    sessionStorage.setItem("option" + k, $(this).attr("value"));
                });
                itemValue = sessionStorage.getItem("option" + k);
                if (itemValue !== null) {
                    $('input[value="' + itemValue + '"]').click();
                }

                $(".at-b").click(function() {
                    $(".snip").empty();
                    $("p").removeClass("list-group-item");
                    $(".snip").css("margin-top", "-16px");

                    // $('.list-group-item-action').empty();
                    // $(".list-group-item").removeClass("list-group-item");
                    for (snips = 0; snips < data.length; snips++) {
                        optValue = sessionStorage.getItem("option" + snips);
                        if (optValue !== null) {
                            $(".list-group").append(
                                '<p class="list-group-item snip list-group-item-action" style="cursor:pointer; margin-top:-10px; z-index: 1;" id="' +
                                snips +
                                'li"><b>Ques :  ' +
                                (snips + 1) +
                                " </b>" +
                                data[snips]["snippet"] +
                                '<br><span class="badge rounded-pill text-bg-success att' +
                                snips +
                                '">attempted</span></p>'
                            );
                        }
                    }
                    SelectQues(snips);
                });
                $(".ut-b").click(function() {
                    $(".snip").empty();
                    $("p").removeClass("list-group-item");
                    $(".snip").css("margin-top", "-16px");
                    for (snips = 0; snips < data.length; snips++) {
                        optValue = sessionStorage.getItem("option" + snips);
                        if (optValue == null) {
                            $(".list-group").append(
                                '<p class="list-group-item snip list-group-item-action" style="cursor:pointer; margin-top:-10px; z-index: 1;" id="' +
                                snips +
                                'li"><b>Ques :  ' +
                                (snips + 1) +
                                " </b>" +
                                data[snips]["snippet"] +
                                '<br><span class="badge rounded-pill text-bg-warning att' +
                                snips +
                                '">unattempted</span></p>'
                            );
                        }
                    }
                    SelectQues(snips);
                });
                $(".all-b").click(function() {
                    $(".snip").empty();
                    $("p").removeClass("list-group-item");
                    $(".snip").css("margin-top", "-16px");
                    for (snips = 0; snips < data.length; snips++) {
                        optValue = sessionStorage.getItem("option" + snips);
                        if (optValue == null) {
                            $(".list-group").append(
                                '<p class="list-group-item snip list-group-item-action" style="cursor:pointer; margin-top:-10px; z-index: 1;" id="' +
                                snips +
                                'li"><b>Ques :  ' +
                                (snips + 1) +
                                " </b>" +
                                data[snips]["snippet"] +
                                '<br><span class="badge rounded-pill text-bg-warning att' +
                                snips +
                                '">unattempted</span></p>'
                            );
                        } else if (optValue !== null) {
                            $(".list-group").append(
                                '<p class="list-group-item snip list-group-item-action" style="cursor:pointer; margin-top:-10px; z-index: 1;" id="' +
                                snips +
                                'li"><b>Ques :  ' +
                                (snips + 1) +
                                " </b>" +
                                data[snips]["snippet"] +
                                '<br><span class="badge rounded-pill text-bg-success att' +
                                snips +
                                '">attempted</span></p>'
                            );
                        }
                    }
                    SelectQues(snips);
                });
            }); //End of iterating items function

            $(".form-check-input").click(function() {
                $.post(
                    "testingdata.php", {
                        question: k,
                        answer: $(this).val(),
                    },
                    function(data) {
                        sessionStorage.setItem("result" + k, data);
                        itemValue = sessionStorage.getItem("result" + k);
                    }
                );
            });
            // $(".snip").click(function() {
            //     $(".list-group").toggle();
            // });
            //Filtering The attempt

        }, // success: function (data) ends here
    }); //.ajax() ends here

    $(".list-bt").click(function() {
        $(".list-group").toggle();
    });
    $(".position").click(function() {
        $(".list-group").hide();
    });
    $(".itmlist").click(function() {
        $(".list-group").toggle();
    });

    $(".end").click(function() {
        $(".modal").show();
    });

    $(".modclose").click(function() {
        $(".modal").hide();
    });
    $(".goback").click(function() {
        window.location.href = "result.html";
    });
    //Start of result page
    // $(".endtest").show(".result-page");
});