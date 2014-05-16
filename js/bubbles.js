(function() {
  var Bubbles;

  Bubbles = (function() {
    function Bubbles(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Bubbles.prototype.vars = function() {
      this.$el = helpers.createDiv({
        "class": "bubbles"
      });
      return this.$proto = $('<div class="bubble" />');
    };

    Bubbles.prototype.init = function() {
      var $bit, i, size, _i, _len, _ref, _results;
      this.bits = helpers.cloneBits(this.$proto, 30, this.$el);
      _ref = this.bits;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        $bit = _ref[i];
        size = helpers.rand(12, 24);
        _results.push($bit.css({
          width: size,
          height: size,
          borderWidth: size / 2
        }));
      }
      return _results;
    };

    Bubbles.prototype.run = function(delay) {
      var $bit, i, _i, _len, _ref;
      _ref = this.bits;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        $bit = _ref[i];
        $bit.velocity({
          top: '-10%',
          borderWidth: 0,
          translateX: helpers.rand(-120, 120),
          translateY: helpers.rand(0, 300),
          opacity: 100
        }, {
          duration: 1400,
          delay: helpers.rand(i * 25, i * 25 + 1000) + delay
        });
      }
      return this.$el.velocity({
        marginTop: 0
      }, {
        duration: 1000,
        delay: delay
      });
    };

    return Bubbles;

  })();

  window.Bubbles = Bubbles;

}).call(this);
