$(document).ready(function () {
  //Jquery here...
    
  var k = 0;
  $.ajax({
    url: "http://localhost/PHP_PROJECT/question.json",
    type: "POST",
    success: function (data) {
      var str = JSON.parse(data[0]["content_text"]);
      $(".question").text(str.question);
      $(".data").text(" " + 1 + " of " + data.length);
      for (i = 0; i < 4; i++) {
        $(".options").append(
          '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
            (i + 1) +
            '"name="optradio" value="option' +
            (i + 1) +
            '"><label label class= "answer form-check-label d-block" for= "radio' +
            (i + 1) +
            '">' +
            str.answers[i].answer +
            "</label>"
        );
      }
      if (k == 0) {
        $(".prev").prop("disabled", true);
      } // disabling prev button by default

      $(".next").click(function () {
        //Everything on pressing next
        $(".options").empty();
        $(".prev").prop("disabled", false);

        k = k + 1;
        if (k > data.length - 1) {
          k = data.length - 1;
        } else {
          $(".question").text(JSON.parse(data[k]["content_text"]).question);
          console.log(k);
          $(".data").text(" " + (k + 1) + " of " + data.length);
          for (i = 0; i < 4; i++) {
            $(".options").append(
              '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
                (i + 1) +
                '" name="optradio" value="option' +
                (i + 1) +
                '"><label class="answer form-check-label d-block" for="radio' +
                (i + 1) +
                '">' +
                JSON.parse(data[k]["content_text"]).answers[i].answer +
                "</label>"
            );
          }
          if (k == data.length - 1) {
            $(".next").prop("disabled", true);
          }
          }
          $.post(
            "testingdata.php",
            {
              name: "Abdul",
              college: "Mangalmay",
              question: $(".question").text(),
            },
            function (data) {
              console.log(data);
            }
          );
      });
      $(".prev").click(function () {
        //Everything on pressing prev
        $(".options").empty();
        $(".next").prop("disabled", false);

        k = k - 1;
        if (k < 0) {
          k = 0;
        } else {
          $(".question").text(JSON.parse(data[k]["content_text"]).question);
          $(".data").text(" " + (k + 1) + " of " + data.length);

          for (i = 0; i < 4; i++) {
            $(".options").append(
              '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
                (i + 1) +
                '" name="optradio" value="option1"><label class="answer form-check-label d-block" for="radio' +
                (i + 1) +
                '">' +
                JSON.parse(data[k]["content_text"]).answers[i].answer +
                "</label>"
            );
          }
          console.log(k);
          if (k == 0) {
            $(".prev").prop("disabled", true);
          }
        }
      });

      for (n = 0; n < data.length; n++) {
        $(".list-group").append(
          '<p class="list-group-item list-group-item-action" style="cursor:pointer;" id="' +
            n +
            'li"><b>Ques :  ' +
            (n + 1) +
            " </b>" +
            data[n]["snippet"] +
            "</p>"
        );
      }
      $(".list-group-item").append(
        '<span class="badge rounded-pill text-bg-warning">Warning</span>'
      );

      //This is iterating the list items
      $(".list-group-item").click(function () {
        $(".options").empty();
        var qid = $(this).attr("id");
          var final_id = parseInt(qid);
          k = final_id;
        console.log(k);

        $(".question").text(
          JSON.parse(data[k]["content_text"]).question
        );
        $(".data").text(" " + (k + 1) + " of " + data.length);
        for (i = 0; i < 4; i++) {
          $(".options").append(
            '<div class="form-check"><input type="radio" class="form-check-input" id="radio' +
              (i + 1) +
              '" name="optradio" value="option1"><label class="answer form-check-label d-block" for="radio' +
              (i + 1) +
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
      });
        $.post(
          "testingdata.php",
          {
            name: "Abdul",
            college: "Mangalmay",
            question: $(".question").text(),
          },
          function (data) {
            console.log(data);
          }
        );
        
      }// success: function (data) ends here
  }); //.ajax() ends here
    
     

  $(".list-bt").click(function () {
    $(".list-group").toggle();
  });

  $(".end").click(function () {
    $(".modal").show();
  });

  $(".modclose").click(function () {
    $(".modal").hide();
  });
  //Saving the session
    function setValSession()
    {
        // localStorage.setItem("value", "hell0");
        sessionStorage.setItem("val", "hello");
    }
    $(".end").click(function () {
         sessStorage.setItem("val", "hell0");
    });
       
});


