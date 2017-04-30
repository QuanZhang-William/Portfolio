$(document).ready(function(){
  $(".nav").on("click", function(){
  	var id = $(this).attr('id');
  	var target = "#job" + id.charAt(3);
    $('html, body').animate({
      scrollTop: $(target).offset().top
  }, 1000);
  });
});

$(document).ready(function(){
  $(".project_nav").on("click", function(){
    var id = $(this).attr('id');
    var target = "#project" + id.charAt(3);
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

$(document).ready(function(){
    var from,to,subject,text;
    $("#submit_button").click(function(){
        to=$("#to").val();
        subject=$("#subject").val();
        text=$("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
        }
      });
    });
});
