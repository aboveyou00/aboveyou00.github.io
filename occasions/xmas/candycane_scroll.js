$(document).ready(function() {
  $(document).scroll(function() {
    var windowScrollTop = $(window).scrollTop();
    $(".candycane-horiz:odd").css({"background-position": windowScrollTop + "px 0px"});
    $(".candycane-horiz:even").css({"background-position": "-" + windowScrollTop + "px 0px"});
  });
});
