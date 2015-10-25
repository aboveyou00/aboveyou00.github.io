
$(document).ready(function() {
  $(window).resize(function() {
    var bday_1_hit = $(window).height();
    $("div.bday_1").height(bday_1_hit);
    $("div.bday_1_relative").height(bday_1_hit);
    $("div.bday_1_shadow").height(bday_1_hit);
    $("div.msg1").css({top: ($(window).height()/2)-$("div.msg1").height()});
    //alert("resized: " + bday_1_hit);
  }).resize();
  
  
});
