# Config
BASE_URL = "http://localhost:8888/"
CSS_URL = "gyazze.min.css"

# unbind all Gyazz event
$("*").unbind();
$(document).unbind();
$('#contents > div').attr("style", "").hide()

# append Gyazz(e) style
gyazzeHead = "<link rel='stylesheet' href='#{BASE_URL}#{CSS_URL}' type='text/css' />"
$('head').append(gyazzeHead)

class Page

  _indexElements = $(".listedit0")

  indexes: [ [$(".title")] ]

  current:
    number: 0
    elements: [$(".title")]

  constructor: () ->

    # 再帰によるページ生成
    _pageInitilizer = (_element, _rows) ->
      _rows.push _element
      _next = _element.next("div")
      if _next.hasClass("listedit0") or _next.text() is ''
        return _rows
      unless _next.hasClass("listedit0")
        return arguments.callee _next, _rows

    # indexesにページコンテンツをpush
    # indexes = [ 0: $(".title"), 1:[pageedit0, pageedit1, ...], 2: ... ]
    _indexes = @indexes
    _indexElements.each (_i) ->
      _indexes.push _pageInitilizer $(this), []


  prev: () ->
    console.log "Hi, im prev"
    if @indexes[@current.number - 1]
      _element.hide() for _element in @current.elements
      @current.number--
      @current.elements = @indexes[@current.number]
      _element.show() for _element in @current.elements
      console.log @current
    @

  next: () ->
    console.log "Hi, im next"
    if @indexes[@current.number + 1]
      _element.hide() for _element in @current.elements
      console.log @current.elements
      @current.number++
      @current.elements = @indexes[@current.number]
      _element.show() for _element in @current.elements
      console.log @current
    @

page = new Page

$(document).on 'keydown', (e) ->
  if e.which is (8 or 37) # Backspace, Left
    event.preventDefault()
    page.prev()

  else if e.which is (13 or 39) # Enter or Right
    event.preventDefault()
    page.next()
