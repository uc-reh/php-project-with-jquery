$(document).ready(function () {
  //Jquery here...

  var k = 0;
  $.ajax({
    url: "http://localhost/PHP_PROJECT/question.json",
    type: "POST",
    success: function (data) {
      var str = JSON.parse(data[0]["content_text"]);
      $(".question").text(str.question);
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
            "</label></div>"
        );
      }
      $(".data").text("0" + 1 + " of " + data.length);
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
        }
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
        }
      });

      for (n = 0; n < data.length; n++) {
        $(".list-group").append(
          '<p class="list-group-item list-group-item-action" style="cursor:pointer; margin-top:-19px;" id="' +
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
              '" name="optradio" value="option' +
              (i + 1) +
              '"><label class="answer form-check-label d-block" for="radio' +
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

      $("#radio1").click(function () {
        $.post(
          "testingdata.php",
          {
            question: $(".question").text(),
            answer: $(".answer").attr("for"),
          },
          function (data) {
            console.log(data);
          }
        );
      });
    }, // success: function (data) ends here
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
});
function startTimer(duration, display) {
  var start = Date.now(),
    diff,
    minutes,
    seconds;
  function timer() {
    // get the number of seconds that have elapsed since
    // startTimer() was called
    diff = duration - (((Date.now() - start) / 1000) | 0);

    // does the same job as parseInt truncates the float
    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (diff <= 0) {
      // add one second so that the count down starts at the full duration
      // example 05:00 not 04:59
      start = Date.now() + 1000;
    }
  }
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 1000);
}

window.onload = function () {
  var tenMinutes = 60 * 10,
    display = document.querySelector("#time");
  startTimer(tenMinutes, display);
};

// $(document).ready(() => {
//     $("#radio1").click(function () {
//         console.log("helo");
//           $.ajax({
//             url: "testingdata.php",
//             type: "POST",
//             data: {
//               func: "testing",
//               ajax: 1,
//               domain_name: "org_domain",
//             },
//             success: (result) => {
//               console.log(result);
//             },
//           });
//     })
// });
