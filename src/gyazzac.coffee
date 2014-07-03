# Class

class DefaultC

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
      if ! document.fullScreenElement and ! document.webkitFullscreenElement and ! document.mozFullScreenElement
        (document.body.requestFullScreen || document.body.mozRequestFullScreen || document.body.webkitRequestFullScreen).call(document.body)
      else
        (document.exitFullScreen || document.mozCancelFullScreen || document.webkitExitFullscreen).call(document)

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

    # Reset Table
    $("span")
      .filter () ->
        $(this).css('position') == 'absolute'
      .css("position", "relative")

    # Set fontsize
    _setFontSize = (width) ->

      style = ".listedit0 {font-size: " + Math.round(width/26) + "px !important;}" +
        ".listedit1 {font-size: " + Math.round(width/30) + "px !important;}" +
        ".listedit2,.listedit3,.listedit4,.listedit5,.listedit6,.listedit7,.listedit8" +
        "{font-size: " + Math.round(width/34) + "px !important;}"
      if $("#style-fontsize").length
        $("#style-fontsize").html style
      else
        $("head").append "<style id='style-fontsize'>#{style}</style>"
    _setFontSize $(window).width()

    $(window).resize () ->
      _setFontSize $(this).width()

  pagingAction: (_number, _current, _goto) ->
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


class GyazzA

  _pageInitializer = (_element, _rows) ->
    _rows ?= []
    _rows.push _element
    _next = _element.next("div")
    if _next.hasClass("listedit0") or _next.text() is ''
      return _rows
    unless _next.hasClass("listedit0")
      return arguments.callee _next, _rows

  _number = 0
  _pages = [[$(".title")]]

  constructor: (@C) ->
    console.log "page constructor"
    $(".listedit0").each () ->
      _pages.push _pageInitializer $(this)
    @C.applyTheme()

  prev: () ->
    console.log "prev"
    if _number > 0
      @C.pagingAction _number-1, _pages[_number], _pages[_number-1]
      _number--

  next: () ->
    console.log "next"
    if _number < _pages.length-1
      @C.pagingAction _number+1, _pages[_number], _pages[_number+1]
      _number++

  jump: (_goto) ->
    console.log "jump to #{_goto}"
    @C.pagingAction _goto, _pages[_number], _pages[_goto]
    _number = _goto


# Main

# Gyazzイベントには死んでもらいたい
$("*").unbind()
$(document).unbind()
# 全てのreloadを生まれる前に消し去りたい
clearTimeout reloadTimeout
# 用があるまでコンテンツには消えてもらいたい
$('#contents > div').attr("style", "display:none")
# 戻るボタンで元のGyazzページへ戻る
window.onbeforeunload = () -> location.reload true


# Config

unless window.C?
  #BASE_URL = "http://gyazzac.nekobato.net/"
  window.BASE_URL = "http://localhost:8888/"
  window.CSS_URL = "gyazzac.min.css"
  window.C = new DefaultC
GyazzAC = new GyazzA(window.C)

# append GyazzA(C) style
$('head').append(
  "<link rel='stylesheet' href='#{window.BASE_URL}#{window.CSS_URL}' type='text/css' />")


# Basic events

$(document).on 'keydown', (e, order) ->
  if e.which is 8 or e.which is 37 or order is 'prev' # Backspace, Left
    e.preventDefault()
    GyazzAC.prev()

  else if e.which is 13 or e.which is 39 or order is 'next' # Enter, Right
    e.preventDefault()
    GyazzAC.next()
