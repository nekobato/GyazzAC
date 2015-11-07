factory = require('./factory.coffee')

slide_width = 980

class GyazzAC

  constructor: ->

    # kill gyazz events
    $(document).off 'keydown'

    # gyazzac 本体
    require('./gyazzac.less')
    $('body').append require('./gyazzac.jade')

    factory.createAC()
    @setKeyBinds()
    @setMouseEvents()

    # resizeの度にzoomを変更する
    timer = false
    $(window).resize ->
      unless timer is false
        clearTimeout(timer)
      timer = setTimeout ->
        document.body.style.zoom = $(document).width() / slide_width
      , 200

    $(document).scrollTop(0)

  setKeyBinds: ->
    $(document).on 'keydown', (e, order) ->
      if e.which is 8 or e.which is 37 or order is 'prev' # bs or left
        e.preventDefault()
        @slidePrevPage()
      else if e.which is 13 or e.which is 39 or order is 'next' # Enter, Right
        e.preventDefault()
        @slideNextPage()

  setMouseEvents: ->

  slidePrevPage: ->
    if ac_page > 0
      $('#gyazz_ac .active').removeClass 'active'
      .prev().addClass 'active'
      ac_page--
      @progress()

  slideNextPage: ->
    if $('.ac-page').eq(ac_page+1).length
      $('#gyazz_ac .active').removeClass 'active'
      .next().addClass 'active'
      ac_page++
      @progress()

  progress: ->
    pp = (ac_page+1) / (ac_page_total+1) * 100
    $('.progress-bar').css('width', Math.floor(pp) + '%')

new GyazzAC()
