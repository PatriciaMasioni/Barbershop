
$(function(){

  $('body').sectionScroll();

///////////////////////////////////////*

 $('#vmc-slide').vmcSimpleSlide();

////////////////////////////////////////*

 dyscrollup.init();

////////////////////////////////////////*

    $("#hide").css("display","none");

    $("#button").click(function(){
      $("#hide").slideToggle("slow"),
      $("h2,h1").css("color","#ededed");
    });


////////////////////////////////////////*

    $("#hide").on ("mouseover", function(){
      $("#h3").css("color","#ededed");
    });

////////////////////////////////////////*

    $("h2").css("display","none");

    $("h1").on("mouseover", function(){
      $("h2").fadeIn(3000);
    });

///////////////////////////////////////*

  $("#h3").mouseover(function(){
    $("#h3").css("font-style","italic");
  });

});
