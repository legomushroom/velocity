(function() {
  var Thunder;

  Thunder = (function() {
    function Thunder(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Thunder.prototype.vars = function() {
      return this.$slice = $('.slice1');
    };

    Thunder.prototype.init = function() {
      var $bit, thunder;
      $bit = helpers.createDiv({
        "class": 'c-green-g center circle'
      });
      $bit.css({
        width: 2,
        height: 0,
        marginLeft: -1,
        'transform-origin': 'top center'
      });
      thunder = helpers.cloneBits($bit, 15);
      this.makeBoom(thunder, $bit);
      return setTimeout((function(_this) {
        return function() {
          _this.makeBoom(thunder, $bit);
          return setTimeout(function() {
            return _this.makeBoom(thunder, $bit);
          }, 350);
        };
      })(this), 320);
    };

    Thunder.prototype.makeBoom = function(thunder, $bit) {
      var $bit1, $prevBit, i, size, _fn, _i, _len, _results;
      this.prevAngle = 100;
      $prevBit = $bit;
      $bit.css({
        'z-index': 9
      });
      $cloud.addClass('c-green-g').removeClass('c-grey-g');
      this.$slice.velocity({
        'opacity': 0
      }, {
        duration: 40
      }).velocity({
        'opacity': 1
      }, {
        delay: 200,
        duration: 40,
        complete: (function(_this) {
          return function() {
            return $cloud.removeClass('c-green-g').addClass('c-grey-g');
          };
        })(this)
      });
      _fn = (function(_this) {
        return function(i) {
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
      })(this);
      _results = [];
      for (i = _i = 0, _len = thunder.length; _i < _len; i = ++_i) {
        $bit1 = thunder[i];
        $bit1.css({
          top: '100%',
          opacity: 0
        });
        $prevBit.append($bit1);
        size = this.calcSize(i);
        _fn(i);
        _results.push($prevBit = $bit1);
      }
      return _results;
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

}).call(this);
