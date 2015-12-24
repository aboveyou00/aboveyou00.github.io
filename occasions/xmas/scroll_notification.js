$(document).ready(function() {
  var scrolled = false;
  
  $(document).scroll(function() {
    if ($(window).scrollTop() > 0 && !scrolled) {
      scrolled = true;
      $("div.scroll_notification").fadeOut(1000, function() { $(this).detach(); });
    }
  }).scroll();
  
  window.setTimeout(function() {
    if (!scrolled) {
      $("div.parallax_relative").first().append('<div class="scroll_notification">&darr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</div>');
      $("div.scroll_notification").hide().fadeIn(1000);
    }
  }, 5000);
});
