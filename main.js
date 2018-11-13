(function($) {

  var el = null;
  $(document).ready(function() {
    el = $("#talateri");
    setTimeout(Inc, 0);
  });

  var r=5;
  var a=0;
  var cx=100;
  var cy=100;

  function Inc() {
    if(r > 40)
      return;
    var x = cx + r * Math.cos(a);
    var y = cy + r * Math.sin(a);
    el.css('top', y + 'px');
    el.css('left', x + 'px');
    a +=0.03;
    r +=0.03;

    setTimeout(Inc, 8);
  }


})(jQuery);
