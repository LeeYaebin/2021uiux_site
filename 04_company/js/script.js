$(document).ready(function(){
  $(".slider").bxSlider({
    pager:false,
    auto:true,
    controls:false
  });
  $(".suv_menu ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class");
    if(toggle == "toggleMenu"){
    $(".toggleMenu").addClass("change");
    //$("#myTopMenu").css("left",0);
    $("#main_menu").stop().animate({left:0});

  }else{
    $(".toggleMenu").removeClass("change");
    //$("#myTopMenu").css("left","-100%");
    $("#main_menu").stop().animate({left:"-100%"});
  }
  });

  $(window).resize(function(){
    $("#main_menu").removeAttr("style");
    $(".toggleMenu").removeClass("change");
  });


  $(".youtube").colorbox({
    iframe:true,
    innerWidth:1400,
    innerHeight:393.75
  });
});
