
$(document).ready(function() {
  var scrolled = false;
  
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
    if (percent > 0 && !scrolled) {
      scrolled = true;
      $("div.scroll_notification").fadeOut(1000, function() { $(this).detach(); });
    }
    $("img.contained_img").css({top: -give*percent});
  }).scroll();
  
  window.setTimeout(function() {
    if (!scrolled) {
      $("div.bday_1_relative").append('<div class="scroll_notification">&darr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</div>');
      $("div.scroll_notification").hide().fadeIn(1000);
    }
  }, 5000);
  
});
