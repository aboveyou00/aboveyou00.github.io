$(function() {
  function randomNormal() {
    return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
  }
  
  function addHeart() {
    var x, y;
    do {
      x = Math.floor(200 + (randomNormal() * 1000));
      y = Math.floor(100 + (randomNormal() * 500));
    }
    while (Math.sqrt((x-200)*(x-200) + (y-100)*(y-100)) < 200);
    
    var _class = "";
    
    var size = Math.random();
    if (size < .2) { _class += " small"; }
    else if (size < .4) { _class += " small_medium"; }
    else if (size < .6) { }
    else if (size < .8) { _class += " large_medium"; }
    else { _class += " large"; }
    
    var color = Math.random();
    if (color < .5) { _class += " red"; }
    else { _class += " white"; }
    
    var rotation = Math.floor(randomNormal() * 100);
    
    $('.overlay-heart').append('<div class="new deep' + _class + ' floating heart" style="left: ' + x + 'px; top: ' + y + 'px; transform: rotate(' + rotation + 'deg);"></div>');
    $('.new').on('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function(e) {
      $(e.target).detach();
    }).removeClass("new");
    
    window.setTimeout(addHeart, 100);
  }
  
  addHeart();
});
