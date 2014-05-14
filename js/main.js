(function() {
  var Main;

  Main = (function() {
    function Main(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Main.prototype.vars = function() {
      this.$fast = $('#js-fast');
      this.$car1 = $('#js-car1');
      this.$car2 = $('#js-car2');
      this.$arrow1 = $('#js-arrow1');
      this.$arrow2 = $('#js-arrow2');
      this.$arrow3 = $('#js-arrow3');
      return this.$arrow4 = $('#js-arrow4');
    };

    Main.prototype.init = function() {
      var fastChilds;
      this.s = 1;
      this.$car1.velocity({
        right: '-40%',
        opacity: 2
      }, {
        duration: 400 * this.s
      });
      fastChilds = this.$fast.children();
      this.arrows();
      return setTimeout((function(_this) {
        return function() {
          var $child, angle, i, _i, _results;
          _results = [];
          for (i = _i = 0; _i <= 1; i = ++_i) {
            $child = $(fastChilds[i]);
            $child.css({
              'transform-origin': 'center center',
              'position': 'absolute'
            });
            if (i === 1) {
              angle = 280;
              _results.push($child.velocity({
                rotateZ: angle / 5,
                left: '45%',
                top: '55%'
              }, {
                duration: 50 * _this.s,
                easing: 'linear'
              }).velocity({
                rotateZ: angle,
                left: '-10%',
                top: '110%'
              }, {
                duration: 1000 * _this.s,
                easing: 'linear'
              }));
            } else {
              angle = 600;
              _results.push($child.velocity({
                rotateZ: angle / 10,
                left: '50%',
                top: '50%'
              }, {
                duration: 50 * _this.s,
                easing: 'linear'
              }).velocity({
                rotateZ: angle + helpers.rand(0, 40),
                left: '-10%',
                top: '20%'
              }, {
                duration: 1000 * _this.s,
                easing: 'linear'
              }));
            }
          }
          return _results;
        };
      })(this), 2200);
    };

    Main.prototype.arrows = function() {
      var angle, arrowAngle, delay, duration;
      arrowAngle = 20;
      delay = 1400;
      duration = 2000;
      angle = arrowAngle + helpers.rand(0, arrowAngle);
      this.$arrow1.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: delay * this.s
      }).velocity({
        left: '70%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
      angle = arrowAngle + helpers.rand(0, arrowAngle);
      this.$arrow2.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: (delay + 200) * this.s
      }).velocity({
        left: '10%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
      angle = arrowAngle + helpers.rand(0, arrowAngle);
      this.$arrow3.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: (delay + 250) * this.s
      }).velocity({
        left: '20%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
      angle = arrowAngle + helpers.rand(0, arrowAngle);
      return this.$arrow4.velocity({
        rotateZ: 90,
        left: '150%'
      }, {
        duration: 1,
        delay: (delay + 400) * this.s
      }).velocity({
        left: '50%',
        top: '50%',
        rotateZ: angle
      }, {
        duration: 400 * this.s
      }).velocity({
        rotateZ: 1.5 * angle
      }, {
        duration: 1
      }).velocity({
        rotateZ: angle
      }, {
        duration: duration * this.s,
        easing: 'quake'
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 1000);

}).call(this);
