(function() {
  var CSS_URL, eGyazzHead, getCurrentSlideIndex;

  CSS_URL = "../egyazz.min.css";

  eGyazzHead = "<link rel='stylesheet' href='" + CSS_URL + "' type='text/css' />";

  $('head').append(eGyazzHead);

  $(document).on('keyDown', function(e) {
    if (e.which === 37) {
      return displaySlide(getCurrentSlideIndex() - 1);
    } else if (e.which === 39) {
      return $(document).scrollTop($(document).scrollTop() + "100%");
    } else if (e.which === 27) {
      return resetGist();
    }
  });

  getCurrentSlideIndex = function() {
    var bottom;
    return bottom = $window.scrollTop() + $window.height;
  };

}).call(this);
