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
      this.$arrow4 = $('#js-arrow4');
      this.$arrowWrap = $('#js-arrow-wrap');
      this.$robust = $('#js-robust');
      this.$robustShade1 = this.$robust.find('#js-robust-shade1');
      return this.$robustShade2 = this.$robust.find('#js-robust-shade2');
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
        $child = $child.find('#js-bit-inner');
        $child.velocity({
          rotateZ: 40
        }, {
          delay: (160 + (i * 15)) * this.s,
          duration: 100 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          delay: (60 + (i * 15)) * this.s,
          duration: 5000 * this.s,
          easing: 'quake'
        });
      }
      setTimeout((function(_this) {
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
            $child = $child.find('#js-span');
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
              duration: 5000 * _this.s,
              easing: 'quake'
            }));
          }
          return _results;
        };
      })(this), 700 * this.s);
      this.arrows();
      setTimeout((function(_this) {
        return function() {
          var angle, _j, _results;
          _results = [];
          for (i = _j = 0; _j <= 1; i = ++_j) {
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
      this.$arrowWrap.velocity({
        translateX: -200
      }, {
        delay: 3400 * this.s
      });
      this.$robustShade1.velocity({
        translateX: -200
      }, {
        delay: 3400 * this.s,
        complete: (function(_this) {
          return function() {
            _this.$robustShade2.hide();
            return _this.$fast.hide();
          };
        })(this)
      });
      return this.$robust.velocity({
        top: '100%',
        rotateZ: -50,
        marginTop: -55
      }, {
        delay: 3800 * this.s,
        easing: 'easeInQuad',
        duration: 300 * this.s
      }).velocity({
        rotateZ: 0
      }, {
        duration: 500 * this.s,
        easing: 'easeOutBounce'
      });
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
      angle = 20;
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
