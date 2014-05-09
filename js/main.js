(function() {
  var Main;

  Main = (function() {
    function Main(o) {
      this.o = o != null ? o : {};
      this.vars();
      new window.Cross;
    }

    Main.prototype.vars = function() {};

    return Main;

  })();

  setTimeout(function() {
    return new window.Cross;
  }, 1000);

}).call(this);
