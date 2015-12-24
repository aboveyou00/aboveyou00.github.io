$(document).ready(function() {
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
    var windowScrollTop = $(window).scrollTop();
    $(".parallax").each(function(index, element) {
      var img = $(element).find(".parallax_img");
      var give = img.height() - $(window).height();
      var percent = (windowScrollTop - $(element).offset().top) / $(window).height();
      if (percent < 0) percent = 0;
      if (percent > 1) percent = 1;
      img.css({top: -give*percent});
    });
  }).scroll();
});
//Work around a race condition - make sure images have correct dimensions
$(window).load(function() {
  $(window).resize();
});
