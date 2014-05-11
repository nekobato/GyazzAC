# Class

class DefaultC

  indexes: []

  applyTheme: () ->
    
    # Set Seekbar
    $('body').append(
      "<div class='ctrlbar'>" +
        "<div id='seek'><div class='seek-bar'></div></div>" +
        "<span id='index-btn'>〓</span>" +
        "<span id='prev-btn'>◀</span>" +
        "<span id='next-btn'>▶</span>" +
      "</div>")

    # Seekbar events
    $("#prev-btn").bind "click", $(document).trigger 'keydown', ['prev']
    $("#next-btn").bind "click", $(document).trigger 'keydown', ['next']

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
      
    
  prevAction: (_current, _prev)->
    _e.hide() for _e in _current
    _e.show() for _e in _prev

  nextAction: (_current, _next) ->
    _e.hide() for _e in _current
    _e.show() for _e in _next

  jumpAction: (_current, _jump) ->
    _e.hide() for _e in _current
    _e.show() for _e in _jump


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

  constructor: (@theme) ->
    $(".listedit0").each () ->
      _pages.push _pageInitializer $(this)
    console.log _pages

    console.log "page constructor"
    @theme.applyTheme()

  prev: () ->
    console.log "prev"
    if _number > 0
      @theme.prevAction _pages[_number], _pages[_number-1]
      _number--

  next: () ->
    console.log "next"
    if _number < _pages.length-1
      @theme.nextAction _pages[_number], _pages[_number+1]
      _number++

  jump: (_goto) ->
    console.log "jump to #{_number}"

    console.log _pages[_number]
    console.log _pages[_number]
    @theme.jumpAction _pages[_number], _pages[_goto]
    _number = _goto


# Main

# Gyazzイベントには死んでもらいたい
$("*").unbind()
$(document).unbind()
# 全てのreloadを生まれる前に消し去りたい
clearTimeout reloadTimeout
# 用があるまでコンテンツには消えてもらいたい
$('#contents > div').attr("style", "display:none")


# Config

unless theme?
  BASE_URL = "http://localhost:8888/"
  CSS_URL = "gyazzac.min.css"
  C = new DefaultC
  GyazzAC = new GyazzA(C)

# append GyazzA(C) style
$('head').append("<link rel='stylesheet' href='#{BASE_URL}#{CSS_URL}' type='text/css' />")



# Basic events

$(document).on 'keydown', (e, order) ->
  if e.which is (8 or 37) or order is 'prev' # Backspace, Left
    event.preventDefault()
    GyazzAC.prev()

  else if e.which is (13 or 39) or order is 'next' # Enter or Right
    event.preventDefault()
    GyazzAC.next()
