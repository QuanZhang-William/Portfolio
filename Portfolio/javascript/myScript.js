$(document).ready(function(){
  $(".nav").on("click", function(){
  	var id = $(this).attr('id');
  	var target = "#job" + id.charAt(3);
  	console.log(target);
    $('html, body').animate({
      scrollTop: $(target).offset().top
  }, 1000);
  });
});

$(document).ready(function(){
    $(".holder").hover(function(){
    	console.log($(this).attr('id'));
      $(this).children().fadeToggle("fast");
    });
});
