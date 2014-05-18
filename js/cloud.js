(function() {
  var Cloud, CloudBit;

  Cloud = (function() {
    function Cloud(o) {
      var timeout;
      this.o = o != null ? o : {};
      this.vars();
      this.init();
      timeout = setTimeout((function(_this) {
        return function() {
          clearTimeout(timeout);
          return _this.hide();
        };
      })(this), this.o.hideDelay);
    }

    Cloud.prototype.vars = function() {
      this.$el = helpers.createDiv({
        "class": 'center c-green-g'
      });
      return window.$cloud = this.$el;
    };

    Cloud.prototype.init = function() {
      var className;
      className = 'inherit-bg circle center';
      this.bits = [];
      this.bits.push(new CloudBit({
        width: 90,
        height: 120,
        deg: 5,
        "class": className,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 80,
        height: 90,
        deg: 45,
        "class": className,
        shiftY: 40,
        shiftX: -5,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 80,
        height: 100,
        deg: -35,
        "class": className,
        shiftY: 20,
        shiftX: -90,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 60,
        height: 60,
        deg: 0,
        "class": className,
        shiftY: 30,
        shiftX: -40,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 70,
        height: 70,
        deg: 10,
        "class": className,
        shiftX: 55,
        shiftY: 40,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 60,
        height: 30,
        deg: 0,
        "class": className,
        shiftX: 75,
        shiftY: 60,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 70,
        height: 30,
        deg: 0,
        "class": className,
        shiftX: -100,
        shiftY: 60,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 80,
        height: 50,
        deg: 0,
        "class": className,
        shiftX: -60,
        shiftY: 55,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 40,
        height: 30,
        deg: 0,
        "class": className,
        shiftX: 25,
        shiftY: 55,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 10,
        height: 10,
        deg: 0,
        "class": className,
        shiftX: 103,
        shiftY: 65,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 5,
        height: 5,
        deg: 0,
        "class": className,
        shiftX: 110,
        shiftY: 66,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      this.bits.push(new CloudBit({
        width: 10,
        height: 10,
        deg: 0,
        "class": className,
        shiftX: -128,
        shiftY: 65,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
      return this.bits.push(new CloudBit({
        width: 8,
        height: 5,
        deg: 0,
        "class": className,
        shiftX: -135,
        shiftY: 65,
        container: this.$el,
        delay: this.o.delay,
        hideDelay: this.o.hideDelay
      }));
    };

    Cloud.prototype.hide = function() {
      var bit, i, _i, _len, _ref, _results;
      _ref = this.bits;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        bit = _ref[i];
        _results.push(bit.hide());
      }
      return _results;
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
        delay: this.o.delay + helpers.rand(0, 100),
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
            return !_this.disallowAnimation && _this.loop();
          };
        })(this)
      }, {
        duration: 500
      });
    };

    CloudBit.prototype.destroy = function() {
      return this.disallowAnimation = true;
    };

    CloudBit.prototype.hide = function() {
      this.destroy();
      return this.$el.velocity({
        scale: 0,
        translateX: -500
      }, {
        duration: 750
      });
    };

    return CloudBit;

  })();

  window.Cloud = Cloud;

}).call(this);
