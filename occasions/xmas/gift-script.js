$(document).ready(function() {
  $(window).resize(function() {
    parent.childHeightUpdated(document.body.scrollHeight);
  }).resize();
});
