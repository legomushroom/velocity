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
      var $child, child, fastChilds, i, _i, _len;
      this.s = 1;
      this.$car1.velocity({
        right: '-40%',
        opacity: 2
      }, {
        duration: 400 * this.s
      });
      fastChilds = this.$fast.children();
      for (i = _i = 0, _len = fastChilds.length; _i < _len; i = ++_i) {
        child = fastChilds[i];
        $child = $(child);
        $child.velocity({
          rotateZ: 40
        }, {
          delay: (160 + (i * 15)) * this.s,
          duration: 100 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          delay: (60 + (i * 15)) * this.s,
          duration: 4500 * this.s,
          easing: 'quake'
        });
      }
      return setTimeout((function(_this) {
        return function() {
          var _j, _len1, _results;
          _this.$car2.velocity({
            left: '-40%',
            opacity: 1
          }, {
            delay: 0 * _this.s,
            duration: 400 * _this.s
          });
          _results = [];
          for (i = _j = 0, _len1 = fastChilds.length; _j < _len1; i = ++_j) {
            child = fastChilds[i];
            $child = $(child);
            $child.css({
              'transform-origin': 'center top'
            });
            _results.push($child.velocity({
              rotateZ: 40
            }, {
              delay: (160 + (fastChilds.length - i) * 15) * _this.s,
              duration: 100 * _this.s
            }).velocity({
              rotateZ: 0
            }, {
              delay: (60 + (fastChilds.length - i) * 15) * _this.s,
              duration: 4500 * _this.s,
              easing: 'quake'
            }));
          }
          return _results;
        };
      })(this), 5000 * this.s);
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 1000);

}).call(this);
