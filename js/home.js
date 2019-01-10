$(document).ready(function() {
  console.log("start js should be working");
  var moveTimer;
  var $reveal = $(".reveal"),
    revealWHalf = $reveal.width() / 2,
    revealCur = $reveal.width();
  $(document).on("mouseout", function(e) {
    clearTimeout(moveTimer);
  });

  $(document).on("mousemove", function(e) {
    revealCur += 3;
    // revealWHalf = $reveal.width() / 2;
    console.log("I'm moving!");
    $reveal.css({
      "left": e.pageX - revealWHalf,
      "top": e.pageY - revealWHalf,
      "width": revealCur
    });

    clearTimeout(moveTimer);

    moveTimer = setTimeout(function() {
      console.log("I stopped moving!");
      revealCur = $reveal.width();
      $reveal.css({
        'width': '20rem',
        "transition": "width 5s"
      });
    }, 100)
  });

});
