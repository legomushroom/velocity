(function() {
  var Cross;

  Cross = (function() {
    function Cross() {
      this.vars();
      this.init();
    }

    Cross.prototype.vars = function() {};

    Cross.prototype.init = function() {
      var $circle, $circleLine, $circleProto, $div1, $div2, $div3, $div4, attr, circles, height, lineHeight, size, width;
      $div1 = $("<div class='c-green-g' />");
      $div2 = $("<div class='c-green-g' />");
      $div3 = $("<div class='c-green-g' />");
      $div4 = $("<div class='c-green-g' />");
      $circle = $("<div class='' />");
      $circleLine = $("<div class='c-green-g' />");
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
        'margin-left': width / 2,
        top: '100%'
      });
      $div4.css({
        width: width,
        height: height,
        left: '50%',
        'margin-left': width / 2,
        bottom: '100%'
      });
      $circleLine.css({
        width: width,
        height: 0,
        left: '50%',
        'margin-left': -(width / 2),
        top: '100%'
      });
      $circle.append($circleLine);
      size = 20;
      $circle.css({
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        'margin-left': -(size / 2),
        'margin-top': -(size / 2),
        'border-radius': '50%',
        'opacity': 0,
        'border': "" + (size / 2) + "px solid #00FFC6"
      });
      $(document.body).append($div1);
      $(document.body).append($div2);
      $(document.body).append($div3);
      $(document.body).append($div4);
      $(document.body).append($circle);
      $div1.velocity({
        right: '50%',
        width: 0
      });
      $div3.velocity({
        left: '50%',
        width: 0
      });
      $div2.velocity({
        top: '50%',
        height: 0
      });
      $div4.velocity({
        bottom: '50%',
        height: 0
      });
      attr = {
        scale: 1.5,
        opacity: 1
      };
      $circle.velocity(attr, {
        delay: 300,
        duration: 200
      }).velocity({
        scale: 1
      }, {
        duration: 1000,
        easing: 'spring'
      });
      $circleProto = $circle.clone();
      circles = this.cloneCircles($circleProto);
      console.log(circles[0][0]);
      lineHeight = 200;
      attr = {
        translateY: -lineHeight,
        'border-width': 0
      };
      $circle.velocity(attr, {
        delay: 300,
        duration: 700
      });
      return $circleLine.velocity({
        height: lineHeight
      }, {
        delay: 1800,
        duration: 700
      });
    };

    Cross.prototype.cloneCircles = function($proto) {
      var $new, circles, i, _i;
      circles = [];
      for (i = _i = 0; _i <= 5; i = ++_i) {
        $new = $proto.clone();
        $(document.body).append($new);
        circles.push($new);
      }
      return circles;
    };

    return Cross;

  })();

  window.Cross = Cross;

}).call(this);
