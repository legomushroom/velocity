(function() {
  var Main;

  Main = (function() {
    function Main(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Main.prototype.vars = function() {
      var $lineProto, i;
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
      this.$robustShade2 = this.$robust.find('#js-robust-shade2');
      this.$easy = $('#js-easy');
      this.$easyWrapper = $('#js-easy-wrapper');
      this.$easyText = $('#js-easy-text');
      this.$easyScreen = $('#js-easy-screen');
      this.$screen1 = $('#js-screen1');
      this.$screen2 = $('#js-screen2');
      this.$logosScreen = $('#js-logos-screen');
      this.$restart = $('#js-restart');
      this.$github = $('#js-github');
      this.$lego = $('#js-lego');
      this.$easyLine1 = $('#js-easy-line1');
      this.$easyLine2 = $('#js-easy-line2');
      this.$restart.on('click', function() {
        return location.reload();
      });
      this.$velocity = $('#js-velocity');
      this.$line = $('#js-line');
      $lineProto = this.$line.clone();
      $lineProto.css({
        top: '100%',
        transform: "none"
      });
      this.lines = helpers.cloneBits($lineProto, 20, this.$screen1);
      this.thunder = new Thunder;
      this.drops = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 10; i = ++_i) {
          _results.push(new Drop({
            radius: i * 50,
            i: i,
            $container: this.$screen2
          }));
        }
        return _results;
      }).call(this);
      return this.bubbles = new Bubbles;
    };

    Main.prototype.init = function() {
      this.s = 1;
      this.car1(0);
      this.car2(700);
      this.arrows();
      this.throwFA(2200);
      this.shiftRobustArrow(3400);
      this.fallRobust(3800);
      this.showCloud(3200 * this.s);
      this.showThunder(5200 * this.s);
      this.waterDrop(7400 * this.s);
      this.showBubbles(8800 * this.s);
      this.shiftScreen(10900 * this.s);
      this.blow(12100 * this.s);
      return this.showLogos(14000 * this.s);
    };

    Main.prototype.showLogos = function(delay) {
      return this.$logosScreen.velocity({
        opacity: 1
      }, {
        delay: delay,
        complete: (function(_this) {
          return function() {
            var amount;
            _this.$logosScreen.show();
            amount = 15;
            _this.$github.velocity({
              translateY: -amount
            }, {
              duration: 1
            }).velocity({
              translateY: 0,
              opacity: 1
            }, {
              easing: 'easeInOutQuad',
              duration: 1500 * _this.s,
              delay: 0 * _this.s
            });
            _this.$lego.velocity({
              translateY: amount
            }, {
              duration: 1
            }).velocity({
              translateY: 0,
              opacity: 1
            }, {
              easing: 'easeInOutQuad',
              duration: 1500 * _this.s,
              delay: 0 * _this.s
            });
            return _this.$restart.velocity({
              translateY: -amount
            }, {
              duration: 1
            }).velocity({
              opacity: 1,
              translateY: 0
            }, {
              easing: 'easeInOutQuad',
              duration: 1500 * _this.s,
              delay: 0 * _this.s
            });
          };
        })(this)
      });
    };

    Main.prototype.blow = function(delay) {
      var $child, childs, coef, i, _i, _ref;
      coef = 1;
      childs = this.$velocity.children();
      for (i = _i = _ref = childs.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
        $child = $(childs[i]);
        $child.velocity({
          translateX: -2000,
          translateY: -200 - helpers.rand(0, 400),
          rotateZ: helpers.rand(-500, 500)
        }, {
          delay: delay + ((childs.length - i) * 75),
          duration: 2000 * this.s * coef
        });
      }
      return setTimeout((function(_this) {
        return function() {
          var $line, _j, _len, _ref1, _results;
          _ref1 = _this.lines;
          _results = [];
          for (i = _j = 0, _len = _ref1.length; _j < _len; i = ++_j) {
            $line = _ref1[i];
            _results.push((function(i) {
              return $line.velocity({
                rotateZ: -90
              }, {
                duration: 600 * _this.s * coef,
                delay: 450 + ((_this.lines.length - i) * 100 * coef),
                easing: 'easeOutBounce',
                complete: function() {
                  return $(this).css({
                    'display': 'none'
                  });
                }
              });
            })(i));
          }
          return _results;
        };
      })(this), delay);
    };

    Main.prototype.shiftScreen = function(delay) {
      var dur;
      dur = 1400 * this.s;
      this.$screen1.velocity({
        translateX: -2000
      }, {
        delay: delay,
        duration: dur
      });
      this.$screen2.velocity({
        left: '-50%'
      }, {
        delay: delay,
        duration: dur
      });
      return this.$velocity.velocity({
        translateX: -1500
      }, {
        delay: delay,
        duration: dur
      });
    };

    Main.prototype.showBubbles = function(delay) {
      this.bubbles.run(delay);
      return setTimeout((function(_this) {
        return function() {
          var $line, h, i, y, _i, _len, _ref, _results;
          _this.$easyText.css({
            height: 240,
            width: 240
          }).velocity({
            translateX: -120,
            translateY: -120
          }, {
            duration: 1400 * _this.s,
            delay: 115 * _this.s
          });
          _this.$easy.velocity({
            width: 0,
            height: 0
          }, {
            duration: 1400 * _this.s
          });
          _this.$line.velocity({
            height: 200,
            translateY: -200
          }, {
            delay: 1000 * _this.s,
            duration: 700 * _this.s
          }).velocity({
            top: '100%'
          }, {
            easing: 'easeInExpo',
            duration: 500 * _this.s
          }).velocity({
            rotateZ: 20
          }, {
            duration: 1
          }).velocity({
            rotateZ: 0
          }, {
            easing: 'quake',
            duration: 1500 * _this.s
          });
          _ref = _this.lines;
          _results = [];
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            $line = _ref[i];
            y = (i + 1) % 5 === 0 ? -200 : -100;
            h = (i + 1) % 5 === 0 ? 200 : 100;
            $line.css({
              height: h,
              marginLeft: "" + (-1 + ((i + 1) * 100)) + "px",
              transform: "rotate(20deg)"
            });
            _results.push($line.velocity({
              translateY: y
            }, {
              delay: 2250 + (i * 50),
              duration: 100 * _this.s
            }));
          }
          return _results;
        };
      })(this), delay);
    };

    Main.prototype.waterDrop = function(delay) {
      return setTimeout((function(_this) {
        return function() {
          _this.$easy.velocity({
            width: 240,
            height: 240
          }, {
            easing: 'easeOutElastic',
            duration: 1500 * _this.s
          });
          _this.$easyWrapper.velocity({
            rotateZ: -30
          }, {
            duration: 1
          }).velocity({
            rotateZ: 0
          }, {
            easing: 'quake',
            duration: 6000 * _this.s
          });
          return setTimeout(function() {
            var drop, _i, _len, _ref;
            _ref = _this.drops;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              drop = _ref[_i];
              drop.run();
            }
            return _this.$robust.velocity({
              top: '100%',
              marginTop: 0
            });
          }, 100);
        };
      })(this), delay);
    };

    Main.prototype.showThunder = function(delay) {
      return setTimeout((function(_this) {
        return function() {
          return _this.thunder.run();
        };
      })(this), delay);
    };

    Main.prototype.showCloud = function(delay) {
      return this.cloud = new Cloud({
        delay: delay,
        hideDelay: 6000 * this.s
      });
    };

    Main.prototype.car1 = function(delay) {
      var $child, child, i, _i, _len, _ref, _results;
      this.$car1.velocity({
        right: '-40%',
        opacity: 2
      }, {
        duration: 400 * this.s,
        delay: delay * this.s
      });
      this.fastChilds = this.$fast.children();
      _ref = this.fastChilds;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        child = _ref[i];
        $child = $(child);
        $child = $child.find('#js-bit-inner');
        _results.push($child.velocity({
          rotateZ: 40
        }, {
          delay: (delay + 160 + (i * 15)) * this.s,
          duration: 100 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          delay: (60 + (i * 15)) * this.s,
          duration: 5000 * this.s,
          easing: 'quake'
        }));
      }
      return _results;
    };

    Main.prototype.car2 = function(delay) {
      var $child, child, i, _i, _len, _ref, _results;
      this.$car2.velocity({
        left: '-40%',
        opacity: 1
      }, {
        delay: delay * this.s,
        duration: 400 * this.s
      });
      _ref = this.fastChilds;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        child = _ref[i];
        $child = $(child);
        $child = $child.find('#js-span');
        $child.css({
          'transform-origin': 'center top'
        });
        _results.push($child.velocity({
          rotateZ: 40
        }, {
          delay: (delay + 160 + (this.fastChilds.length - i) * 15) * this.s,
          duration: 100 * this.s
        }).velocity({
          rotateZ: 0
        }, {
          delay: (60 + (this.fastChilds.length - i) * 15) * this.s,
          duration: 5000 * this.s,
          easing: 'quake'
        }));
      }
      return _results;
    };

    Main.prototype.fallRobust = function(delay) {
      var $arrow, arrows, i, _i, _len;
      this.$robust.velocity({
        top: '100%',
        rotateZ: -50,
        marginTop: -55
      }, {
        delay: delay * this.s,
        easing: 'easeInQuad',
        duration: 300 * this.s
      }).velocity({
        rotateZ: 0
      }, {
        duration: 500 * this.s,
        easing: 'easeOutBounce'
      });
      arrows = [this.$arrow1, this.$arrow2, this.$arrow3];
      for (i = _i = 0, _len = arrows.length; _i < _len; i = ++_i) {
        $arrow = arrows[i];
        $arrow.velocity({
          'top': '100%',
          marginTop: 0,
          rotateZ: 60 + helpers.rand(0, 20)
        }, {
          easing: 'easeInQuad'
        }).velocity({
          rotateZ: 90
        }, {
          easing: 'easeOutBounce',
          duration: 400 * this.s,
          complete: function() {
            return $(this).hide();
          }
        });
      }
      return this.$arrow4.velocity({
        'top': '100%',
        marginTop: 0,
        rotateZ: 60 + helpers.rand(0, 20)
      }, {
        easing: 'easeInQuad'
      }).velocity({
        rotateZ: 90
      }, {
        easing: 'easeOutBounce',
        duration: 400 * this.s,
        complete: function() {
          return $(this).hide();
        }
      });
    };

    Main.prototype.shiftRobustArrow = function(delay) {
      this.$arrowWrap.velocity({
        translateX: -206
      }, {
        delay: delay * this.s
      });
      return this.$robustShade1.velocity({
        marginLeft: -206
      }, {
        delay: delay * this.s,
        complete: (function(_this) {
          return function() {
            _this.$robustShade2.hide();
            return _this.$fast.hide();
          };
        })(this)
      });
    };

    Main.prototype.throwFA = function(delay) {
      var $child, angle, attrs2, i, _i, _results;
      _results = [];
      for (i = _i = 0; _i <= 1; i = ++_i) {
        $child = $(this.fastChilds[i]);
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
            duration: 50 * this.s,
            easing: 'linear',
            delay: delay * this.s
          }).velocity({
            rotateZ: angle,
            left: '-10%',
            top: '110%'
          }, {
            duration: 1000 * this.s,
            easing: 'linear'
          }));
        } else {
          angle = 600;
          attrs2 = {
            rotateZ: angle + helpers.rand(0, 40),
            left: '-10%',
            top: '20%'
          };
          _results.push($child.velocity({
            rotateZ: angle / 10,
            left: '50%',
            top: '50%'
          }, {
            duration: 50 * this.s,
            easing: 'linear',
            delay: delay * this.s
          }).velocity(attrs2, {
            duration: 1000 * this.s,
            easing: 'linear'
          }));
        }
      }
      return _results;
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
