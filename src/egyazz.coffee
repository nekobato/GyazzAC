
CSS_URL = "../egyazz.min.css"

eGyazzHead =
  "<link rel='stylesheet' href='#{CSS_URL}' type='text/css' />"

$('head').append(eGyazzHead)

$(document).on 'keyDown', (e) ->
  if e.which is 37
    displaySlide(getCurrentSlideIndex() - 1)
  else if e.which is 39
    $(document).scrollTop($(document).scrollTop() + "100%")
  else if e.which is 27
    resetGist()

getCurrentSlideIndex = () ->
  bottom = $window.scrollTop() + $window.height
