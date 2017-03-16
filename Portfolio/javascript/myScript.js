$(document).ready(function(){
  $("#go_up_icon").on("click", function(){
    $('html, body').animate({
      scrollTop: $("#section1").offset().top
  }, 1000);
  });
});

$(document).ready(function(){
    $(".holder").hover(function(){
    	console.log($(this).attr('id'));
      $(this).children().fadeToggle("fast");
    });
});
