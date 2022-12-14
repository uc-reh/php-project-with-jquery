$(document).ready(function () {
  //Jquery here...
  var k = 0;
    $.ajax({
        url: "http://localhost/php-project-with-jquery/question.json",
        type: "POST",
        success: function (data) {
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

            $(".form-check-input").click(function () {
                sessionStorage.setItem("option0", $(this).attr("value"));
            });
            itemValue = sessionStorage.getItem("option0");
            //   console.log(itemValue);
            if (itemValue !== null) {
                $('input[value="' + itemValue + '"]').click();

            }
            $(".form-check-input").attr("disabled", "true");
             
            if (sessionStorage.getItem("result" + k) == 1) {
              $(".checkit").append(
                '<p class="alert alert-success d-flex justify-content-center">correct</p>'
              );
            } else if (sessionStorage.getItem("result" + k) == 0) {
              $(".checkit").append(
                '<p class="alert alert-warning d-flex justify-content-center">Incorrect</p>'
              );
            } else {
              $(".checkit").append(
                '<p class="alert alert-danger d-flex justify-content-center">Unattempt</p>'
              );
            }

         

        
      $(".data").text("0" + 1 + " of " + data.length);
      if (k == 0) {
        $(".prev").prop("disabled", true);
      } // disabling prev button by default


      //Everything on pressing next
      $(".next").click(function () {
        $(".options").empty();
          $(".checkit").empty();
          $(".snippet").empty();
        $(".prev").prop("disabled", false);
        k = k + 1;
        if (k > data.length - 1) {
          k = data.length - 1;
        } else {
          $(".question").text(JSON.parse(data[k]["content_text"]).question);
          console.log(k);
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
          $(".form-check-input").click(function () {
            $.post(
              "testingdata.php",
              {
                question: k,
                answer: $(this).val(),
              },
              function (data) {
                console.log(data);
                sessionStorage.setItem("result" + k, data);
                itemValue = sessionStorage.getItem("result" + k);
                console.log(itemValue);
              }
            );
          });

          $(".form-check-input").click(function () {
            sessionStorage.setItem("option" + k, $(this).attr("value"));
          });
          itemValue = sessionStorage.getItem("option" + k);
          if (itemValue !== null) {
              $('input[value="' + itemValue + '"]').click();
              
            }
            $(".form-check-input").attr("disabled", "true");

              if (sessionStorage.getItem("result" + k) == 1) {
                $(".checkit").append(
                  '<p class="alert alert-success d-flex justify-content-center">correct</p>'
                );
              } else if (sessionStorage.getItem("result" + k) == 0) {
                $(".checkit").append(
                  '<p class="alert alert-warning d-flex justify-content-center">Incorrect</p>'
                );
              } else {
                $(".checkit").append(
                  '<p class="alert alert-danger d-flex justify-content-center">Unattempt</p>'
                );
            }
            $(".snippet").append(JSON.parse(data[k]["content_text"]).explanation);
            
            
          }
          
      });
        
      //Everything on pressing prev
      $(".prev").click(function () {
          $(".options").empty();
        $(".checkit").empty();
          $('.snippet').empty();
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
            
          console.log(k);
          if (k <= 8) {
            $(".data").text("0" + (k + 1) + " of " + data.length);
          } else {
            $(".data").text("" + (k + 1) + " of " + data.length);
          }
          if (k == 0) {
            $(".prev").prop("disabled", true);
          }
          $(".form-check-input").click(function () {
            $.post(
              "testingdata.php",
              {
                question: k,
                answer: $(this).val(),
              },
              function (data) {
                console.log(data);
                sessionStorage.setItem("result" + k, data);
                itemValue = sessionStorage.getItem("result" + k);
                console.log(itemValue);
              }
            );
          });
          $(".form-check-input").click(function () {
            sessionStorage.setItem("option" + k, $(this).attr("value"));
          });
          itemValue = sessionStorage.getItem("option" + k);
          // console.log(itemValue);
          if (itemValue !== null) {
              $('input[value="' + itemValue + '"]').click();              
            }
            $(".form-check-input").attr("disabled", "true");
              if (sessionStorage.getItem("result" + k) == 1) {
                $(".checkit").append(
                  '<p class="alert alert-success d-flex justify-content-center">correct</p>'
                );
              } else if (sessionStorage.getItem("result" + k) == 0) {
                $(".checkit").append(
                  '<p class="alert alert-warning d-flex justify-content-center">Incorrect</p>'
                );
              } else {
                  $(".checkit").append(
                    '<p class="alert alert-danger d-flex justify-content-center">Unattempt</p>'
                  );
            }
            $(".snippet").append(
              JSON.parse(data[k]["content_text"]).explanation
            );
            
        
            
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

        // console.log(optValue);
        if (optValue !== null) {
          $(".att" + n)
            .addClass("text-bg-success")
            .text("attepmted")
            .removeClass("text-bg-warning");
        }
      }
       
      //This is iterating the list items
      $(".list-group-item").click(function () {
          $(".options").empty();
          $('.snippet').empty();
        var qid = $(this).attr("id");
        var final_id = parseInt(qid);
        k = final_id;
        console.log(k);

        $(".question").text(JSON.parse(data[k]["content_text"]).question);
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
              JSON.parse(data[k]["content_text"]).answers[i].answer +
              '">' +
              JSON.parse(data[k]["content_text"]).answers[i].answer +
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
        $(".form-check-input").click(function () {
          $.post(
            "testingdata.php",
            {
              question: k,
              answer: $(this).val(),
            },
            function (data) {
              console.log(data);
              sessionStorage.setItem("result" + k, data);
              itemValue = sessionStorage.getItem("result" + k);
              console.log(itemValue);
            }
          );
        });
        $(".form-check-input").click(function () {
          sessionStorage.setItem("option" + k, $(this).attr("value"));
        });

        itemValue = sessionStorage.getItem("option" + k);
        if (itemValue !== null) {
            $('input[value="' + itemValue + '"]').click();            
          }
          $(".form-check-input").attr("disabled", "true");

           if (sessionStorage.getItem("result" + k) == 1) {
             $(".checkit").append(
               '<p class="alert alert-success d-flex justify-content-center">correct</p>'
             );
           } else if (sessionStorage.getItem("result" + k) == 0) {
             $(".checkit").append(
               '<p class="alert alert-warning d-flex justify-content-center">Incorrect</p>'
             );
           } else {
             $(".checkit").append(
               '<p class="alert alert-danger d-flex justify-content-center">Unattempt</p>'
             );
          }
            $(".snippet").append(
              JSON.parse(data[k]["content_text"]).explanation
            );
          
          
      }); //End of iterating items function

      $(".form-check-input").click(function () {
        $.post(
          "testingdata.php",
          {
            question: k,
            answer: $(this).val(),
          },
          function (data) {
            console.log(data);
            sessionStorage.setItem("result" + k, data);
            itemValue = sessionStorage.getItem("result" + k);
            console.log(itemValue);
          }
        );
      });
             $(".snip").click(function () {
               $(".list-group").toggle();
             });
    }, // success: function (data) ends here
  }); //.ajax() ends here

  $(".list-bt").click(function () {
    $(".list-group").toggle();
  });

  $(".itmlist").click(function () {
    $(".list-group").toggle();
  });

  $(".end").click(function () {
    $(".modal").show();
  });

  $(".modclose").click(function () {
    $(".modal").hide();
  });
  //Start of result page
  // $(".endtest").show(".result-page");
});
