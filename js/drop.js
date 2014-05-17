(function() {
  var Drop;

  Drop = (function() {
    function Drop(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Drop.prototype.vars = function() {
      return this.$proto = $('<div class="circle c-green-g drop" />');
    };

    Drop.prototype.init = function() {
      this.radius = this.o.radius || 200;
      this.cnt = this.radius / 10;
      return this.$els = helpers.cloneBits(this.$proto, this.cnt, this.o.$container);
    };

    Drop.prototype.run = function() {
      var $el, angle, centerX, centerY, i, left, left2, step, top, top2, _i, _len, _ref, _results;
      step = (2 * Math.PI) / this.cnt;
      angle = 0;
      centerX = 0;
      centerY = 0;
      _ref = this.$els;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        $el = _ref[i];
        left = parseInt(centerX + (Math.cos(angle) * (this.radius / 1.25)), 10);
        top = parseInt(centerY + (Math.sin(angle) * (this.radius / 1.25)), 10);
        $el.css({
          marginLeft: left,
          marginTop: top
        });
        left2 = parseInt(centerY + (Math.cos(angle) * (1.1 * this.radius)), 10);
        top2 = parseInt(centerY + (Math.sin(angle) * (1.1 * this.radius)), 10);
        left2 -= left;
        top2 -= top;
        $el.velocity({
          translateX: left2,
          translateY: top2,
          opacity: 1
        }, {
          delay: this.o.i * 15,
          easing: 'easeOutElastic',
          duration: 1500
        });
        if (left2 > 0) {
          $el.velocity({
            translateX: -200 - helpers.rand(0, 200),
            translateY: helpers.rand(-400, 400),
            rotate: 0
          }, {
            delay: helpers.rand(0, 500) + 3000,
            duration: 1500
          });
        }
        _results.push(angle += step);
      }
      return _results;
    };

    return Drop;

  })();

  window.Drop = Drop;

}).call(this);
