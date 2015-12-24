
function getQueryParameter(key)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++)
  {
    var pair = vars[i].split("=");
    if (pair[0] == key) return pair[1];
  }
  return "";
}
function childHeightUpdated(hit)
{
  $("iframe#gift_body").height(hit + 300);
}

$(document).ready(function() {
  var scrolled = false;
  
  var who = getQueryParameter("who");
  $("iframe#gift_body").attr("src", who + "/index.html");
  
  $(window).resize(function() {
    var window_width = $(window).width();
    var window_height = $(window).height();
    $(".parallax").each(function(index, element) {
      var parent = $(element);
      var img = parent.find(".parallax_img");
      var ratio = img.width() / img.height();
      var max_hit = window_width / ratio;
      var parallax_hit = Math.min(window_height, max_hit);
      parent.height(parallax_hit);
      parent.find(".parallax_relative").height(parallax_hit);
      parent.find(".parallax_shadow").height(parallax_hit);
      parent.find(".msg1").each(function(msg_index, msg_element) {
        $(msg_element).css({
          top: ($(window).height()/2)-$(msg_element).height()
        });
      });
    });
    
    $(".screen_hit").height($(window).height());
  }).resize();
  
  $(document).scroll(function() {
    $(".parallax").each(function(index, element) {
      var img = $(element).find(".parallax_img");
      var give = img.height() - $(window).height();
      var percent = ($(window).scrollTop() - $(element).offset().top) / $(window).height();
      if (percent < 0) percent = 0;
      if (percent > 1) percent = 1;
      img.css({top: -give*percent});
    });
    /*if (percent > 0 && !scrolled) {
      scrolled = true;
      $("div.scroll_notification").fadeOut(1000, function() { $(this).detach(); });
    }*/
  }).scroll();
  
  /*window.setTimeout(function() {
    if (!scrolled) {
      $("div.bday_1_relative").append('<div class="scroll_notification">&darr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</div>');
      $("div.scroll_notification").hide().fadeIn(1000);
    }
  }, 5000);*/
  
  window.setInterval(function() {
    createFirework(18,76,7,1,null,null,null,null,false,false);
  }, 500);
  
});
