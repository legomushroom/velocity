(function() {
  var Cross;

  $.easing.quake = function(t, millisecondsSince, startValue, endValue, totalDuration) {
    var b;
    b = Math.exp(-t * 10) * Math.cos(Math.PI * 2 * t * 10);
    if (t >= 1) {
      return 1;
    }
    return 1 - b;
  };

  Cross = (function() {
    function Cross() {
      this.vars();
      this.init();
    }

    Cross.prototype.vars = function() {};

    Cross.prototype.init = function() {
      var $circle, $circleBit, $circleLine, $circleProto, $div1, $div2, $div3, $div4, $line, attr, attr2, circles, height, i, lineHeight, lines, r, size, start, width, _i, _j, _len, _len1;
      $div1 = this.createDiv({
        "class": 'c-green-g'
      });
      $div2 = this.createDiv({
        "class": 'c-green-g'
      });
      $div3 = this.createDiv({
        "class": 'c-green-g'
      });
      $div4 = this.createDiv({
        "class": 'c-green-g'
      });
      $circle = this.createDiv();
      $circleLine = this.createDiv({
        "class": 'c-green-g'
      });
      width = 2;
      height = 200;
      $div1.css({
        width: height,
        height: width,
        top: '50%',
        right: '100%',
        'margin-top': -(width / 2)
      });
      $div3.css({
        width: height,
        height: width,
        top: '50%',
        left: '100%',
        'margin-top': -(width / 2)
      });
      $div2.css({
        width: width,
        height: height,
        left: '50%',
        'margin-left': -(width / 2),
        top: '100%'
      });
      $div4.css({
        width: width,
        height: height,
        left: '50%',
        'margin-left': -(width / 2),
        bottom: '100%'
      });
      $circleLine.css({
        width: width,
        height: 0,
        left: '50%',
        'margin-left': -(width / 2),
        top: '50%'
      });
      size = 20;
      attr = {
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        'margin-left': -(size / 2),
        'margin-top': -(size / 2),
        'border-radius': '50%',
        'opacity': 0,
        'border': "" + (size / 2) + "px solid #00FFC6"
      };
      $circle.css(attr);
      start = 0;
      $div1.velocity({
        right: '50%',
        width: 0
      }).velocity({
        right: '50%',
        width: height,
        opacity: 0
      });
      $div3.velocity({
        left: '50%',
        width: 0
      }).velocity({
        left: '50%',
        width: height,
        opacity: 0
      });
      $div2.velocity({
        top: '50%',
        height: 0
      }).velocity({
        top: '50%',
        height: height,
        opacity: 0
      });
      $div4.velocity({
        bottom: '50%',
        height: 0
      }).velocity({
        bottom: '50%',
        height: height,
        opacity: 0
      });
      attr = {
        scale: 5,
        opacity: 1
      };
      $circle.velocity(attr, {
        delay: 300,
        duration: 200
      }).velocity({
        scale: 1.5
      }, {
        duration: 1000,
        easing: 'spring'
      });
      $circleProto = $circle.clone();
      circles = this.cloneCircles($circleProto);
      lineHeight = 200;
      attr = {
        scale: .1
      };
      $circle.velocity(attr, {
        duration: 2800
      });
      for (_i = 0, _len = circles.length; _i < _len; _i++) {
        $circleBit = circles[_i];
        attr = {
          scale: this.rand(2, 8) / 10
        };
        attr2 = {
          translateX: this.rand(-80, 80),
          'border-width': 0,
          opacity: 100,
          translateY: -2 * lineHeight + this.rand(-100, 100),
          scale: 1.15
        };
        $circleBit.velocity(attr, {
          duration: 0
        }).velocity(attr2, {
          delay: 1200 + this.rand(0, 1800),
          duration: 1200
        });
      }
      $circleLine.velocity({
        height: lineHeight,
        translateY: -lineHeight
      }, {
        delay: 3500,
        duration: 1000
      });
      $circle.velocity({
        opacity: 0
      }, {
        duration: 100
      });
      lines = this.cloneCircles($circleLine, 7);
      r = 0;
      for (i = _j = 0, _len1 = lines.length; _j < _len1; i = ++_j) {
        $line = lines[i];
        r += r + i;
        $line.velocity({
          'margin-left': "" + (-i) + "px",
          height: lineHeight,
          translateY: -lineHeight,
          translateX: -r,
          opacity: 0
        }, {
          duration: 0
        });
        $line.velocity({
          opacity: 1
        }, {
          duration: 20,
          delay: 4200 + (r * 2)
        }).velocity({
          opacity: 0
        }, {
          duration: 400
        });
      }
      $circleLine.velocity({
        translateX: -200
      }, {
        delay: 200,
        duration: 700,
        easing: 'easeOutExpo'
      });
      return $circleLine.velocity({
        translateX: 0
      }, {
        delay: 200,
        duration: 700,
        easing: 'easeOutExpo'
      });
    };

    Cross.prototype.cloneCircles = function($proto, cnt) {
      var $new, circles, i, _i;
      if (cnt == null) {
        cnt = 20;
      }
      circles = [];
      for (i = _i = 0; 0 <= cnt ? _i < cnt : _i > cnt; i = 0 <= cnt ? ++_i : --_i) {
        $new = $proto.clone();
        $(document.body).append($new);
        circles.push($new);
      }
      return circles;
    };

    Cross.prototype.createDiv = function(o) {
      var $div;
      $div = $('<div />');
      ((o != null ? o["class"] : void 0) != null) && $div.addClass(o["class"]);
      $(document.body).append($div);
      return $div;
    };

    Cross.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    return Cross;

  })();

  window.Cross = Cross;

}).call(this);
