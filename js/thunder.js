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
      return this.boomCnt = 0;
    };

    Thunder.prototype.init = function() {
      var $bit, thunder;
      this.spark1 = new Spark({
        shiftY: -180,
        shiftX: -120,
        top: 100
      });
      this.spark2 = new Spark({
        shiftY: -140,
        shiftX: -120,
        top: 100
      });
      $bit = helpers.createDiv({
        "class": 'c-grey-g center circle'
      });
      $bit.css({
        width: 2,
        height: 0,
        marginLeft: -1,
        'transform-origin': 'top center'
      });
      thunder = helpers.cloneBits($bit, 15);
      return setTimeout((function(_this) {
        return function() {
          _this.makeBoom(thunder, $bit);
          return setTimeout(function() {
            _this.makeBoom(thunder, $bit);
            return setTimeout(function() {
              return _this.makeBoom(thunder, $bit);
            }, 380);
          }, 320);
        };
      })(this), this.o.delay);
    };

    Thunder.prototype.makeBoom = function(thunder, $bit) {
      var $bit1, $prevBit, i, size, _fn, _i, _len;
      this.boomCnt++;
      this.prevAngle = 100;
      $prevBit = $bit;
      $bit.css({
        'z-index': 9
      });
      $cloud.addClass('c-grey-g').removeClass('c-green-g');
      this.$robust.css('color', '#777');
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
      if (this.boomCnt === 1 || this.boomCnt === 3) {
        this.$robust.velocity({
          rotateZ: -30 + helpers.rand(0, -30)
        }, {
          duration: 50 * this.s,
          delay: 160 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          duration: 400 * this.s,
          easing: 'easeOutBounce'
        });
      }
      if (this.boomCnt === 1) {
        this.spark1.run();
      }
      if (this.boomCnt === 3) {
        return this.spark2.run();
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
