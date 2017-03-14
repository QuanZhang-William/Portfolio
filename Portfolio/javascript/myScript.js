$(document).ready(function(){
  $("a").on("click", function(){
    $('html, body').animate({
      scrollTop: $("#section1").offset().top
  }, 1000);
  });
});

$(document).ready(function(){
    $("#java_holder").hover(function(){
      $("#java").fadeToggle("fast");
      $("#java_detail").fadeToggle("fast");
    });
});
