# Class

class DefaultC

  indexes: []

  applyTheme: () ->

    # Set Seekbar
    $('body').append(
      "<div class='ctrlbar'>" +
        "<div id='seek'><div id='seek-bar'></div></div>" +
        "<span id='index-btn'>〓</span>" +
        "<span id='prev-btn'>◀</span>" +
        "<span id='next-btn'>▶</span>" +
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


  pagingAction: (_number, _current, _goto)->
    _barWidth = Math.round(
      $("#seek").width() / $(".listedit0").length * _number )
    _e.hide() for _e in _current
    _e.show() for _e in _goto

    # background
    _backGround = null
    _goto[0].find("a").each () ->
      if $(this).text() is "bg"
        _backGround = $(this).attr('href')
        $(this).hide()
    if _backGround
      $('body').css("background-image", "url(#{_backGround})")
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

unless theme?
  #BASE_URL = "http://gyazzac.nekobato.net/"
  BASE_URL = "http://localhost:8888/"
  CSS_URL = "gyazzac.min.css"
  C = new DefaultC
  GyazzAC = new GyazzA(C)

# append GyazzA(C) style
$('head').append(
  "<link rel='stylesheet' href='#{BASE_URL}#{CSS_URL}' type='text/css' />")



# Basic events

$(document).on 'keydown', (e, order) ->
  if e.which is 8 or e.which is 37 or order is 'prev' # Backspace, Left
    e.preventDefault()
    GyazzAC.prev()

  else if e.which is 13 or e.which is 39 or order is 'next' # Enter, Right
    e.preventDefault()
    GyazzAC.next()
