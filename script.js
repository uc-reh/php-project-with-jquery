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
        $(".answer" + i).text(str.answers[i].answer);
      }
      $(".next").click(function () {
        k = k + 1;
        if (k > data.length - 1) {
          k = data.length - 1;
        } else {
          $(".question").text(JSON.parse(data[k]["content_text"]).question);
          console.log(k);
          $(".data").text(" " + (k + 1) + " of " + data.length);
          for (i = 0; i < 4; i++) {
            $(".answer" + i).text(
              JSON.parse(data[k]["content_text"]).answers[i].answer
            );
          }
        }
      });
      $(".prev").click(function () {
        k = k - 1;
        if (k < 0) {
          k = 0;
        }
         else{
          $(".question").text(JSON.parse(data[k]["content_text"]).question);
          $(".data").text(" " + (k + 1) + " of " + data.length);

          for (i = 0; i < 4; i++) {
            $(".answer" + i).text(
              JSON.parse(data[k]["content_text"]).answers[i].answer
            );
          }
        }
      });
        
      for (n = 0; n < data.length; n++) {
        $(".list-group").append(
          '<p class="list-group-item list-group-item-action li-1"><b>Ques :  ' +
            (n + 1) +
            " </b>" +
            data[n]["snippet"] +
            "</p>"
        );
      }
      $(".list-group-item").append(
        '<span class="badge rounded-pill text-bg-warning">Warning</span>'
      );
    } // success: function (data) ends here
  }); //.ajax() ends here
    
    
    
  $(".list-bt").click(function () {
    $(".list-group").toggle();
  });
  
    $('.end').click(function () {
        $('.modal').show();
    });
    
    $(".modclose").click(function () {
        $('.modal').hide();
    });
    
    
});
