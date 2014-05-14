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
      return this.$car2 = $('#js-car2');
    };

    Main.prototype.init = function() {
      var $child, child, i, _i, _len, _ref, _results;
      this.s = 1;
      this.start = 0 * this.s;
      this.dur = 400 * this.s;
      this.$car1.velocity({
        right: '-20%',
        width: '0%',
        opacity: 1,
        duration: this.dur
      });
      this.start = 0 * this.s;
      this.dur = 4500 * this.s;
      _ref = this.$fast.children();
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        child = _ref[i];
        $child = $(child);
        _results.push($child.velocity({
          rotateZ: 40
        }, {
          delay: 200 * this.s,
          duration: 100
        }).velocity({
          rotateZ: 0
        }, {
          delay: 60 + helpers.rand(0, 50),
          duration: this.dur,
          easing: 'quake'
        }));
      }
      return _results;
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 1000);

}).call(this);
