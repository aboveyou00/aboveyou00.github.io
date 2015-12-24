$(document).ready(function() {
  $(window).resize(function() {
    parent.childHeightUpdated($("body").height());
  }).resize();
  setTimeout(function() { $(window).resize(); }, 1000); //For IE and Edge, they have issues with the document not yet being ready sometimes
});
