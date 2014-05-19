(function() {
  var Thunder;

  Thunder = (function() {
    function Thunder(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Thunder.prototype.vars = function() {
      this.$background = $('#js-thunder-bg');
      this.$robust = $('#js-robust');
      this.$robustScreen = $('#js-robust-screen');
      this.$robustScreen2 = $('#js-robust-screen2');
      return this.boomCnt = 0;
    };

    Thunder.prototype.init = function() {
      this.spark1 = new Spark({
        shiftY: -140,
        shiftX: -120,
        top: 100,
        blowSize: 50
      });
      this.spark2 = new Spark({
        shiftY: -80,
        shiftX: -210,
        top: 100,
        blowSize: 50
      });
      this.spark3 = new Spark({
        shiftY: -100,
        shiftX: 50,
        top: 100,
        blowSize: 75
      });
      this.spark4 = new Spark({
        shiftY: -120,
        shiftX: -190,
        top: 100
      });
      this.$bit = helpers.createDiv({
        "class": 'c-grey-g center circle'
      });
      this.$bit.css({
        width: 2,
        height: 0,
        marginLeft: -1,
        'transform-origin': 'top center'
      });
      return this.thunder = helpers.cloneBits(this.$bit, 20);
    };

    Thunder.prototype.run = function() {
      return setTimeout((function(_this) {
        return function() {
          _this.makeBoom(_this.thunder, _this.$bit);
          return setTimeout(function() {
            return _this.makeBoom(_this.thunder, _this.$bit);
          }, 320);
        };
      })(this), this.o.delay);
    };

    Thunder.prototype.makeBoom = function(thunder, $bit) {
      var $bit1, $prevBit, i, jump, sign, size, _fn, _i, _len;
      this.boomCnt++;
      this.prevAngle = 100;
      $prevBit = $bit;
      $bit.css({
        'z-index': 9
      });
      $cloud.addClass('c-grey-g').removeClass('c-green-g');
      this.$robust.css('color', '#383838');
      this.$background.velocity({
        'opacity': 1
      }, {
        duration: 40
      }).velocity({
        'opacity': 0
      }, {
        delay: 200,
        duration: 40,
        complete: (function(_this) {
          return function() {
            $cloud.removeClass('c-grey-g').addClass('c-green-g');
            return _this.$robust.css('color', '#00FFC6');
          };
        })(this)
      });
      _fn = function(i) {
        return $bit1.velocity({
          height: size.height,
          rotateZ: size.angle,
          opacity: 1,
          width: 4,
          marginLeft: -2
        }, {
          duration: 200
        }).velocity({
          width: 0,
          marginLeft: 0
        }, {
          duration: 50
        });
      };
      for (i = _i = 0, _len = thunder.length; _i < _len; i = ++_i) {
        $bit1 = thunder[i];
        $bit1.css({
          top: '100%',
          opacity: 0
        });
        $prevBit.append($bit1);
        size = this.calcSize(i);
        _fn(i);
        $prevBit = $bit1;
      }
      this.s = 1;
      if (this.boomCnt === 1) {
        this.$robust.css({
          'transform-origin': 'center bottom'
        });
        sign = helpers.rand(-1, 1);
        (sign === 0) && (sign = 1);
        this.$robust.velocity({
          rotateZ: helpers.rand(15, 25) * sign
        }, {
          duration: 100 * this.s,
          delay: 160 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          duration: 500 * this.s,
          easing: 'easeOutBounce'
        });
        jump = 100;
        this.$robustScreen.velocity({
          marginTop: -jump
        }, {
          duration: 50 * this.s,
          delay: 160 * this.s
        });
        this.$robustScreen2.velocity({
          marginTop: jump
        }, {
          duration: 900 * this.s,
          delay: 150 * this.s,
          easing: 'easeOutBounce'
        });
      }
      if (this.boomCnt === 1) {
        this.spark1.run();
        setTimeout((function(_this) {
          return function() {
            return _this.spark3.run();
          };
        })(this), 100);
      }
      if (this.boomCnt === 2) {
        this.spark2.run();
        return setTimeout((function(_this) {
          return function() {
            return _this.spark4.run();
          };
        })(this), 50);
      }
    };

    Thunder.prototype.calcSize = function(i) {
      var angle, height;
      angle = 0;
      if (i === 0) {
        angle = helpers.rand(15, 25);
        height = 50;
      } else {
        if (i % 2 === 0) {
          angle = -this.prevAngle + helpers.rand(0, 10);
          this.prevAngle = angle;
          height = helpers.rand(40, 150);
        } else {
          angle = -this.prevAngle + helpers.rand(0, 20);
          height = helpers.rand(10, 40);
          this.prevAngle = angle;
        }
      }
      return {
        angle: angle,
        height: height
      };
    };

    return Thunder;

  })();

  window.Thunder = Thunder;

}).call(this);
