(function() {
  var Helpers;

  Helpers = (function() {
    function Helpers() {}

    Helpers.prototype.createDiv = function(o) {
      var $cont, $el;
      if (o == null) {
        o = {};
      }
      $el = $('<div />');
      (o["class"] != null) && $el.addClass(o["class"]);
      $cont = (o != null ? o.container : void 0) || $(document.body);
      $cont.append($el);
      return $el;
    };

    Helpers.prototype.cloneBits = function($proto, cnt, $container) {
      var $cont, $new, circles, i, _i;
      if (cnt == null) {
        cnt = 20;
      }
      circles = [];
      for (i = _i = 0; 0 <= cnt ? _i < cnt : _i > cnt; i = 0 <= cnt ? ++_i : --_i) {
        $new = $proto.clone();
        $cont = $container || $(document.body);
        $cont.append($new);
        circles.push($new);
      }
      return circles;
    };

    Helpers.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    return Helpers;

  })();

  window.helpers = new Helpers;

  $.easing.quake = function(t) {
    var b;
    b = Math.exp(-t * 10) * Math.cos(Math.PI * 2 * t * 10);
    if (t >= 1) {
      return 1;
    }
    return 1 - b;
  };

  $.easing.elasticOut = function(t) {
    var a, p, s;
    s = void 0;
    a = 0.1;
    p = 0.4;
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
  };

}).call(this);
