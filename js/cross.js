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

  $.easing.elasticOut = function(t, millisecondsSince, startValue, endValue, totalDuration) {
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

  Cross = (function() {
    function Cross() {
      this.vars();
      this.init();
    }

    Cross.prototype.vars = function() {};

    Cross.prototype.init = function() {
      var $circle, $circleBit, $circleLine, $circleProto, $div1, $div2, $div3, $div4, $easy, $fast, $fastShade, $line2, $robust, $screen1, attr, attr2, circles, h, height, i, lineHeight, lines2, size, start, width, y, _i, _j, _len, _len1;
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
      $screen1 = $('#js-screen1');
      $circleLine = this.createDiv({
        "class": 'c-green-g',
        container: $screen1
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
      $fast = $('#js-fast');
      $fastShade = $fast.find('.text-wrapper__shade');
      $robust = $('#js-robust');
      $easy = $('#js-easy');
      $fastShade.velocity({
        translateX: -300
      }, {
        delay: 4500,
        easing: 'easeOutExpo',
        duration: 700
      });
      $circleLine.velocity({
        translateX: -300
      }, {
        delay: 0,
        duration: 700,
        easing: 'easeOutExpo'
      });
      $robust.velocity({
        width: 300
      }, {
        delay: 5200,
        easing: 'easeOutExpo',
        duration: 400
      });
      $fastShade.velocity({
        translateX: 0
      }, {
        delay: 0,
        easing: 'easeOutExpo',
        duration: 400,
        complete: function() {
          $easy.css({
            'opacity': 1
          });
          return $fast.css({
            'display': 'none'
          });
        }
      });
      $circleLine.velocity({
        translateX: 0
      }, {
        delay: 0,
        duration: 400,
        easing: 'easeOutExpo'
      });
      $robust.velocity({
        width: 0
      }, {
        delay: 0,
        easing: 'easeOutExpo',
        duration: 300
      });
      $circleLine.velocity({
        translateX: -300
      }, {
        delay: 0,
        duration: 300,
        easing: 'easeOutExpo'
      });
      $circleLine.css({
        'transform-origin': '50% bottom'
      });
      $circleProto = $circleLine.clone();
      $circleLine.velocity({
        top: '100%'
      }, {
        delay: 200,
        duration: 500,
        easing: 'easeInExpo'
      }).velocity({
        rotateZ: 20
      }, {
        duration: 1,
        delay: 0
      }).velocity({
        rotateZ: 0
      }, {
        duration: 1500,
        easing: 'quake'
      });
      $circleProto.css({
        'margin-top': 0,
        'top': '100%',
        'margin-left': -300 - (width / 2),
        'transform': 'none'
      });
      lines2 = this.cloneCircles($circleProto, 38, $screen1);
      for (i = _j = 0, _len1 = lines2.length; _j < _len1; i = ++_j) {
        $line2 = lines2[i];
        y = (i + 1) % 5 === 0 ? -200 : -100;
        h = (i + 1) % 5 === 0 ? height : height - 80;
        $line2.css({
          'margin-left': "" + (-300 - (width / 2) + ((i + 1) * 100)) + "px",
          height: h
        });
        $line2.velocity({
          translateY: y
        }, {
          easing: 'elasticOut',
          duration: 700,
          delay: 6650 + (i * 50)
        }).velocity({
          rotateZ: -90
        }, {
          delay: (lines2.length - i) * 120,
          easing: 'easeOutBounce',
          duration: 300
        });
      }
      $screen1.velocity({
        translateX: -3000
      }, {
        duration: 2000,
        delay: 7000
      });
      return $easy.velocity({
        translateX: -3000
      }, {
        duration: 2000,
        delay: 7000
      });
    };

    Cross.prototype.cloneCircles = function($proto, cnt, $container) {
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

    Cross.prototype.createDiv = function(o) {
      var $cont, $div;
      $div = $('<div />');
      ((o != null ? o["class"] : void 0) != null) && $div.addClass(o["class"]);
      $cont = (o != null ? o.container : void 0) || $(document.body);
      $cont.append($div);
      return $div;
    };

    Cross.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    return Cross;

  })();

  window.Cross = Cross;

}).call(this);
