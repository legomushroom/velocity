(function() {
  var Spark;

  Spark = (function() {
    function Spark(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Spark.prototype.vars = function() {};

    Spark.prototype.init = function() {
      var $proto, $spark, i, size, _i, _len, _ref, _results;
      $proto = helpers.createDiv({
        "class": 'spark'
      });
      this.sparks = helpers.cloneBits($proto, this.o.cnt || helpers.rand(10, 20));
      size = this.o.size || 2;
      _ref = this.sparks;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        $spark = _ref[i];
        _results.push($spark.css({
          width: size + helpers.rand(0, size),
          height: size + helpers.rand(0, size),
          left: this.o.left || '50%',
          top: "" + (this.o.top || 50) + "%",
          marginTop: this.o.shiftY,
          marginLeft: this.o.shiftX
        }));
      }
      return _results;
    };

    Spark.prototype.run = function() {
      var $spark, blowSize, i, top, _i, _len, _ref, _results;
      _ref = this.sparks;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        $spark = _ref[i];
        blowSize = this.o.blowSize || 100;
        top = 2 * this.o.top || 100;
        if (top < 100) {
          top = 100;
        }
        _results.push($spark.velocity({
          translateX: helpers.rand(-blowSize, blowSize),
          translateY: helpers.rand(-blowSize, blowSize),
          opacity: 1
        }, {
          duration: 500 + blowSize,
          easing: 'easeInOutQuad',
          delay: (this.o.delay || 0) + helpers.rand(0, 100)
        }).velocity({
          top: "" + top + "%",
          translateY: 0,
          marginTop: 0,
          opacity: -2
        }, {
          duration: this.o.duration || 2500,
          easing: 'easeInOutExp'
        }));
      }
      return _results;
    };

    return Spark;

  })();

  window.Spark = Spark;

}).call(this);
