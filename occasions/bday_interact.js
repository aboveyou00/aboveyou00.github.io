
$(document).ready(function() {
  $(window).resize(function() {
    var ratio = $("img.contained_img").width() / $("img.contained_img").height();
    var max_hit = $(window).width() / ratio;
    var bday_1_hit = Math.min($(window).height(), max_hit);
    $("div.bday_1").height(bday_1_hit);
    $("div.bday_1_relative").height(bday_1_hit);
    $("div.bday_1_shadow").height(bday_1_hit);
    $("div.msg1").css({top: ($(window).height()/2)-$("div.msg1").height()});
    
    var give = $("img.contained_img").height() - $(window).height();
    var percent = $(window).scrollTop() / $(window).height();
    if (percent < 0) percent = 0;
    if (percent > 1) percent = 1;
    //alert("resized: " + bday_1_hit);
  }).resize();
  
  $(document).scroll(function() {
    var give = $("img.contained_img").height() - $(window).height();
    var percent = $(window).scrollTop() / $(window).height();
    if (percent < 0) percent = 0;
    if (percent > 1) percent = 1;
    $("img.contained_img").css({top: -give*percent});
  }).scroll();
  
  
});
