(function() {
  var Cloud, CloudBit, Cross, Thunder;

  Cross = (function() {
    function Cross() {
      this.vars();
      this.init();
    }

    Cross.prototype.vars = function() {};

    Cross.prototype.init = function() {
      var $child, $circle, $circleBit, $circleLine, $circleProto, $div1, $div2, $div3, $div4, $easy, $fast, $fastShade, $line, $line2, $robust, $screen1, $slices, $velocity, attr, attr2, childs, circles, h, height, i, lineHeight, lines, lines2, r, size, slice, start, width, y, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _results;
      $div1 = helpers.createDiv({
        "class": 'c-green-g'
      });
      $div2 = helpers.createDiv({
        "class": 'c-green-g'
      });
      $div3 = helpers.createDiv({
        "class": 'c-green-g'
      });
      $div4 = helpers.createDiv({
        "class": 'c-green-g'
      });
      $circle = helpers.createDiv();
      $velocity = $('#js-velocity');
      $screen1 = $('#js-screen1');
      $circleLine = helpers.createDiv({
        "class": 'c-green-g',
        container: $screen1
      });
      width = 2;
      height = 200;
      $div1.css({
        width: height,
        height: width,
        top: '50%',
        right: '100%',
        'margin-top': -(width / 2)
      });
      $div3.css({
        width: height,
        height: width,
        top: '50%',
        left: '100%',
        'margin-top': -(width / 2)
      });
      $div2.css({
        width: width,
        height: height,
        left: '50%',
        'margin-left': -(width / 2),
        top: '100%'
      });
      $div4.css({
        width: width,
        height: height,
        left: '50%',
        'margin-left': -(width / 2),
        bottom: '100%'
      });
      $circleLine.css({
        width: width,
        height: 0,
        left: '50%',
        'margin-left': -(width / 2),
        top: '50%'
      });
      size = 20;
      attr = {
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        'margin-left': -(size / 2),
        'margin-top': -(size / 2),
        'border-radius': '50%',
        'opacity': 0,
        'border': "" + (size / 2) + "px solid #00FFC6"
      };
      $circle.css(attr);
      start = 0;
      $div1.velocity({
        right: '50%',
        width: 0
      }).velocity({
        right: '50%',
        width: height,
        opacity: 0
      });
      $div3.velocity({
        left: '50%',
        width: 0
      }).velocity({
        left: '50%',
        width: height,
        opacity: 0
      });
      $div2.velocity({
        top: '50%',
        height: 0
      }).velocity({
        top: '50%',
        height: height,
        opacity: 0
      });
      $div4.velocity({
        bottom: '50%',
        height: 0
      }).velocity({
        bottom: '50%',
        height: height,
        opacity: 0
      });
      attr = {
        scale: 5,
        opacity: 1
      };
      $circle.velocity(attr, {
        delay: 300,
        duration: 200
      }).velocity({
        scale: 1.5
      }, {
        duration: 1000,
        easing: 'spring'
      });
      $circleProto = $circle.clone();
      circles = helpers.cloneBits($circleProto);
      lineHeight = 200;
      attr = {
        scale: .1
      };
      $circle.velocity(attr, {
        duration: 2800
      });
      for (_i = 0, _len = circles.length; _i < _len; _i++) {
        $circleBit = circles[_i];
        attr = {
          scale: helpers.rand(2, 8) / 10
        };
        attr2 = {
          translateX: helpers.rand(-80, 80),
          'border-width': 0,
          opacity: 100,
          translateY: -2 * lineHeight + helpers.rand(-100, 100),
          scale: 1.15
        };
        $circleBit.velocity(attr, {
          duration: 0
        }).velocity(attr2, {
          delay: 1200 + helpers.rand(0, 1800),
          duration: 1200
        });
      }
      $circleLine.velocity({
        height: lineHeight,
        translateY: -lineHeight
      }, {
        delay: 3500,
        duration: 1000
      });
      $circle.velocity({
        opacity: 0
      }, {
        duration: 100
      });
      lines = helpers.cloneBits($circleLine, 8);
      r = 0;
      for (i = _j = 0, _len1 = lines.length; _j < _len1; i = ++_j) {
        $line = lines[i];
        r += r + i;
        $line.css({
          'margin-left': "" + (-i) + "px",
          height: lineHeight,
          'transform': "translateY(" + (-lineHeight) + "px) translateX(" + (-r) + "px)",
          opacity: 0
        }, {
          duration: 0
        });
        $line.velocity({
          opacity: 1
        }, {
          duration: 20,
          delay: 4500 + r
        }).velocity({
          opacity: 0
        }, {
          duration: 400
        });
      }
      $fast = $('#js-fast');
      $fastShade = $fast.find('.text-wrapper__shade');
      $robust = $('#js-robust');
      $easy = $('#js-easy');
      $fastShade.velocity({
        translateX: -300
      }, {
        delay: 4500,
        easing: 'easeOutExpo',
        duration: 700
      });
      $circleLine.velocity({
        translateX: -300
      }, {
        delay: 0,
        duration: 700,
        easing: 'easeOutExpo'
      });
      $robust.velocity({
        width: 300
      }, {
        delay: 5200,
        easing: 'easeOutExpo',
        duration: 400
      });
      $fastShade.velocity({
        translateX: 0
      }, {
        delay: 0,
        easing: 'easeOutExpo',
        duration: 400,
        complete: function() {
          $easy.css({
            'opacity': 1
          });
          return $fast.css({
            'display': 'none'
          });
        }
      });
      $circleLine.velocity({
        translateX: 0
      }, {
        delay: 0,
        duration: 400,
        easing: 'easeOutExpo'
      });
      $robust.velocity({
        width: 0
      }, {
        delay: 0,
        easing: 'easeOutExpo',
        duration: 300
      });
      $circleLine.velocity({
        translateX: -300
      }, {
        delay: 0,
        duration: 300,
        easing: 'easeOutExpo'
      });
      $circleLine.css({
        'transform-origin': '50% bottom'
      });
      $circleProto = $circleLine.clone();
      setTimeout((function(_this) {
        return function() {
          return new Thunder;
        };
      })(this), 14500);
      $circleLine.velocity({
        top: '100%'
      }, {
        delay: 200,
        duration: 500,
        easing: 'easeInExpo'
      }).velocity({
        rotateZ: 20
      }, {
        duration: 1,
        delay: 0
      }).velocity({
        rotateZ: 0
      }, {
        duration: 1500,
        easing: 'quake'
      });
      $circleProto.css({
        'margin-top': 0,
        'top': '100%',
        'margin-left': -300 - (width / 2),
        'transform': 'none'
      });
      lines2 = helpers.cloneBits($circleProto, 32, $screen1);
      for (i = _k = 0, _len2 = lines2.length; _k < _len2; i = ++_k) {
        $line2 = lines2[i];
        y = (i + 1) % 5 === 0 ? -200 : -100;
        h = (i + 1) % 5 === 0 ? height : height - 100;
        $line2.css({
          'margin-left': "" + (-300 - (width / 2) + ((i + 1) * 100)) + "px",
          height: h
        });
        $line2.velocity({
          translateY: y
        }, {
          easing: 'elasticOut',
          duration: i < 10 ? 700 : 1,
          delay: 6650 + (i * 50)
        });
        $line2.velocity({
          rotateZ: -90
        }, {
          delay: 800 + ((lines2.length - i) * 120),
          easing: 'easeOutBounce',
          duration: 600
        });
      }
      $screen1.velocity({
        translateX: -2400
      }, {
        duration: 2000,
        delay: 7000
      });
      $easy.velocity({
        translateX: -2400
      }, {
        duration: 2000,
        delay: 7000
      });
      $velocity.velocity({
        'margin-left': 0
      }, {
        duration: 2000,
        delay: 7000
      });
      childs = $velocity.children();
      for (i = _l = _ref = childs.length - 1; _ref <= 0 ? _l <= 0 : _l >= 0; i = _ref <= 0 ? ++_l : --_l) {
        $child = $(childs[i]);
        $child.velocity({
          translateX: -2000,
          translateY: -200 - helpers.rand(0, 400),
          rotateZ: helpers.rand(-500, 500)
        }, {
          delay: 9000 + ((childs.length - i) * 50),
          duration: 2000
        });
      }
      $slices = $('.slice');
      _results = [];
      for (i = _m = 0, _len3 = $slices.length; _m < _len3; i = ++_m) {
        slice = $slices[i];
        _results.push((function(i) {
          var $slice;
          $slice = $(slice);
          return $slice.velocity({
            rotateZ: -90
          }, {
            duration: 1500,
            delay: 10200 + (i * 200),
            easing: 'easeInExpo',
            complete: function() {
              return (i === 0) && new Cloud;
            }
          });
        })(i));
      }
      return _results;
    };

    return Cross;

  })();

  window.Cross = Cross;

  Cloud = (function() {
    function Cloud(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Cloud.prototype.vars = function() {
      this.$el = helpers.createDiv({
        "class": 'center c-grey-g'
      });
      return window.$cloud = this.$el;
    };

    Cloud.prototype.init = function() {
      new CloudBit({
        width: 90,
        height: 120,
        deg: 5,
        "class": 'inherit-bg circle center',
        container: this.$el
      });
      new CloudBit({
        width: 80,
        height: 90,
        deg: 45,
        "class": 'inherit-bg circle center',
        shiftY: 40,
        shiftX: -5,
        container: this.$el
      });
      new CloudBit({
        width: 80,
        height: 100,
        deg: -35,
        "class": 'inherit-bg circle center',
        shiftY: 20,
        shiftX: -90,
        container: this.$el
      });
      new CloudBit({
        width: 60,
        height: 60,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftY: 30,
        shiftX: -40,
        container: this.$el
      });
      new CloudBit({
        width: 70,
        height: 70,
        deg: 10,
        "class": 'inherit-bg circle center',
        shiftX: 55,
        shiftY: 40,
        container: this.$el
      });
      new CloudBit({
        width: 60,
        height: 30,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: 75,
        shiftY: 60,
        container: this.$el
      });
      new CloudBit({
        width: 70,
        height: 30,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: -100,
        shiftY: 60,
        container: this.$el
      });
      new CloudBit({
        width: 80,
        height: 50,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: -60,
        shiftY: 55,
        container: this.$el
      });
      new CloudBit({
        width: 40,
        height: 30,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: 25,
        shiftY: 55,
        container: this.$el
      });
      new CloudBit({
        width: 10,
        height: 10,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: 103,
        shiftY: 65,
        container: this.$el
      });
      new CloudBit({
        width: 5,
        height: 5,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: 110,
        shiftY: 66,
        container: this.$el
      });
      new CloudBit({
        width: 10,
        height: 10,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: -128,
        shiftY: 65,
        container: this.$el
      });
      return new CloudBit({
        width: 8,
        height: 5,
        deg: 0,
        "class": 'inherit-bg circle center',
        shiftX: -135,
        shiftY: 65,
        container: this.$el
      });
    };

    return Cloud;

  })();

  CloudBit = (function() {
    function CloudBit(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.$el = helpers.createDiv({
        "class": this.o["class"],
        container: this.o.container
      });
      this.setAttrs();
      this.loop();
      this.show();
    }

    CloudBit.prototype.vars = function() {
      this.scale = 0;
      return this.opacity = 0;
    };

    CloudBit.prototype.setAttrs = function() {
      var _base, _base1;
      return this.$el.css({
        width: this.o.width,
        height: this.o.height,
        marginLeft: (-this.o.width / 2) + ((_base = this.o).shiftX != null ? _base.shiftX : _base.shiftX = 0),
        marginTop: (-this.o.height / 2) + ((_base1 = this.o).shiftY != null ? _base1.shiftY : _base1.shiftY = 0),
        'opacity': 0
      }).velocity({
        scale: 0
      }, {
        duration: 0
      });
    };

    CloudBit.prototype.show = function() {
      return this.$el.velocity({
        opacity: 100,
        scale: 1
      }, {
        easing: 'easeOutElastic',
        delay: helpers.rand(0, 100),
        duration: 1200
      });
    };

    CloudBit.prototype.loop = function() {
      return this.$el.velocity({
        scaleX: .9,
        scaleY: 1,
        translateX: this.o.width / 20,
        translateY: 0,
        rotateZ: this.o.deg
      }, {
        duration: 500
      }).velocity({
        scaleY: .9,
        scaleX: 1,
        translateX: 0,
        translateY: this.o.height / 20,
        rotateZ: this.o.deg,
        complete: (function(_this) {
          return function() {
            return _this.loop();
          };
        })(this)
      }, {
        duration: 500
      });
    };

    CloudBit.prototype.destroy = function() {
      return clearInterval(this.interval);
    };

    return CloudBit;

  })();

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
