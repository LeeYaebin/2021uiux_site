$(document).ready(function(){
  $(".slider").bxSlider({
    pager:false,
    auto:true
  });
  $(".suv_menu ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });
});
