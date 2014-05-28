# Class

class Eroge

  indexes: []

  applyTheme: () ->

    # Set Seekbar
    $('body').append(
      "<div class='ctrlbar'>" +
        "<div id='seek'><div id='seek-bar'></div></div>" +
        "<span id='index-btn'>〓</span>" +
        "<span id='slideshow-btn'>▶</span>" +
        "<span id='prev-btn'>◀</span>" +
        "<span id='next-btn'>▶</span>" +
        "<span id='fullscreen-btn'>■</span>" +
      "</div>")

    # Seekbar events
    $("#prev-btn").bind "click", () ->
      $(document).trigger 'keydown', ['prev']
    $("#next-btn").bind "click", () ->
      $(document).trigger 'keydown', ['next']
    $("#seek").bind "click", (e) ->
      number = Math.round(
        $(".listedit0").length * e.offsetX / $("#seek").width() )
      GyazzAC.jump number

    # Set index
    _topTitle = $("#title").text()
    $('body').append(
      "<ul id='indexes'><li data-number='0'>#{_topTitle}</li></ul>")
    $(".listedit0").each (_i) ->
        $("#indexes").append(
          "<li data-number='#{_i+1}'>#{$(this).text()}</li>")

    # Index events
    $("#index-btn").bind "click", () ->
      $("#indexes").toggle()
    $("#indexes li").bind "click", () ->
      GyazzAC.jump $(this).data("number")

    # Fullscreen events
    $("#fullscreen-btn").bind "click", () ->
      console.log "fullscreen"
      (document.body.requestFullScreen || document.body.mozRequestFullScreen || document.body.webkitRequestFullScreen)
        .call(document.body)

    # slideshow events
    _slideInterval = null
    _intervalTime = 5000 # default: 5 sec
    $("#slideshow-btn").bind "click", () ->
      console.log "slideshow"
      $(this).toggleClass "active"
      if not _slideInterval
        _slideInterval = setInterval ->
          console.log "interval"
          $(document).trigger 'keydown', ['next']
        , _intervalTime
      else
        clearInterval _slideInterval


    # BGM settings
    _bgm = null
    $("#listbg0").find("a").each () ->
      if $(this).text() is "bgm"
        _bgm = $(this).attr('href')
        $(this).hide()
    if _bgm
      $("body").append "<audio id='bgm' src='#{_bgm}' preload loop autoplay>" +
        '</audio>'

  pagingAction: (_number, _current, _goto)->
    _barWidth = Math.round(
      $("#seek").width() / $(".listedit0").length * _number )
    _e.hide() for _e in _current
    _e.show() for _e in _goto

    # page decorations
    _backGround = null
    _sound = null
    _goto[0].find("a").each () ->
      _t = $(this)
      if _t.text() is "bg"
        _backGround = _t.attr('href')
        _t.hide()
      if _t.text() is "sound"
        _sound = _t.attr('href')
        _t.hide()
    if _backGround
      $('body').css("background-image", "url(#{_backGround})")
    if _sound
      $("body").append "<audio id='sound_#{_number}' src='#{_sound}' preload autoplay>" +
        '</audio>'

    else
      $('body').attr("style", "")

    # pageScroll
    $(document).scrollTop(0)

    # seekbar
    $("#seek-bar").animate {"width": _barWidth}, 100


# Config

unless window.C?
  #BASE_URL = "http://gyazzac.nekobato.net/"
  window.BASE_URL = "http://localhost:8888/"
  window.CSS_URL = "theme/eroge.min.css"
  window.C = new Eroge
