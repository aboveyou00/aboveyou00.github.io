function childHeightUpdated(hit)
{
  $("iframe#gift_body").height(hit + 300);
}
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
$(document).ready(function() {
  var who = getQueryParameter("who");
  $("iframe#gift_body").attr("src", who + "/index.html");
});
