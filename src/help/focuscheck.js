(function () {
  var hasFocus = document.hasFocus();
  setInterval(function () {
    var hasFocusNow = document.hasFocus();
    if (hasFocus !== hasFocusNow && hasFocus) {
      // lost focus
      $('#output').append('<p>focus lost</p>');
    } else if (hasFocus !== hasFocusNow) {
      // gained focus
      $('#output').append('<p>focus gained</p>');
    }
    hasFocus = hasFocusNow;
  }, 500);
})();
