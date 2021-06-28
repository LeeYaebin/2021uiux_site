$(document).ready(function(){

    $("nav >ul >li").mouseover(function(){
      $(this).find(".submenu").stop().slideDown();
    });
    $("nav >ul >li").mouseout(function(){
      $(this).find(".submenu").stop().slideUp();
    });


   var slide = 0;

   setInterval(function(){
       if(slide<2){
           slide++
       }else{
           slide=0;
       }
       $(".slider >li").eq(slide).siblings().fadeOut();
       $(".slider >li").eq(slide).fadeIn();
   },5000);

   $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class");
    if(toggle == "toggleMenu"){
    $(".toggleMenu").addClass("change");
    $("nav").stop().animate({right:"0"},500);
    //$("#myTopMenu").css("left",0);

  }else{
    $(".toggleMenu").removeClass("change");
    //$("#myTopMenu").css("left","-100%");
    $("nav").stop().animate({right:"-80%"});
  }
  });

  $(window).resize(function(){
    $("#main_menu").removeAttr("style");
    $(".toggleMenu").removeClass("change");
  });


  $(".youtube").colorbox({
    iframe:true,
    innerWidth:700,
    innerHeight:393.75
  });


  const paths = $(".svgWrap").find("path");
  const pathLength = paths.length;

  for(let i=0; i<pathLength; i++){
    const total_length = paths.get(i).getTotalLength();
    console.log(total_length);
    paths.get(i).style.strokeDasharray = total_length;
    paths.get(i).style.strokeDashoffset = total_length;

    $(paths.get(i)).animate({"strokeDashoffset":0},8000)
  };


});
