class GyazzA

  gyazz_lines = []
  ac_lines = []
  ac_page = 0
  ac_page_total = 0
  observer = null

  window_size = '980'

  fetchGyazz = ->

    changeFlag = false

    $('#contents > div:visible').each (index) ->
      $this = $(this)
      $line = $this.children('span').html()
      if gyazz_lines[index] isnt $line
        gyazz_lines[index] = $line
        ac_lines[index] =
          level: $this.attr('class')
          html:  $line
        changeFlag = true

    refresh() if changeFlag
    return

  attachAC = ->

    require('./gyazzac.less')
    $('body').prepend '<div id="gyazz_ac" class="gyazz-ac"></div>'
    decorationsElement = require('./decorations.jade')
    $('body').prepend decorationsElement
    $('body').append '<div class="progress-bar"></div>'

    # resizeの度にzoomを変更する
    timer = false
    $(window).resize ->
      unless timer is false
        clearTimeout(timer)
      timer = setTimeout ->
        document.body.style.zoom = $(document).width() / window_size
      , 200

  refresh = ->

    ac = document.createElement 'div'
    ac.innerHTML = "<div class='ac-page ac-title'><p>#{$('.title').text()}</p></div>"

    pages = []
    n = -1

    for line, i in ac_lines
      if line.level is 'listedit0'
        n++
        pages[n] = document.createElement 'div'
        if !ac_lines[i+1] or ac_lines[i+1].level is 'listedit0'
          pages[n].className = 'ac-page ac-single'
        else
          pages[n].className = 'ac-page'
      pages[n].innerHTML += "<div class='ac-line ac-#{line.level}'>#{line.html}</div>"

    ac_page_total = pages.length

    for page in pages
      ac.appendChild(page)

    $('#gyazz_ac').html(ac)
    $('.ac-page').eq(ac_page).addClass 'active'
    return

  progress = ->
    pp = (ac_page+1) / (ac_page_total+1) * 100
    $('.progress-bar').css('width', Math.floor(pp) + '%')

  prev: ->
    if ac_page > 0
      $('#gyazz_ac .active').removeClass 'active'
      .prev().addClass 'active'
      ac_page--
      progress()

  next: ->
    if $('.ac-page').eq(ac_page+1).length
      $('#gyazz_ac .active').removeClass 'active'
      .next().addClass 'active'
      ac_page++
      progress()

  c: -> # init

    attachAC()
    fetchGyazz()

    observer = new MutationObserver (mutations) ->
      # どうせ全書き換えなのでmutationsは使わない
      fetchGyazz()
    .observe document.querySelector('#listbg0'),
      attributes: true
      attributeFilter: ["class"]

    refresh()
    $(document).scrollTop(0)
    return @

$(document).off 'keydown'
.on 'keydown', (e, order) ->
  if e.which is 8 or e.which is 37 or order is 'prev' # bs or left
    e.preventDefault()
    ac.prev()
  else if e.which is 13 or e.which is 39 or order is 'next' # Enter, Right
    e.preventDefault()
    ac.next()

$('#contents').on 'click', () ->
  $(this).toggleClass('pulldown')

window.ac = new GyazzA().c()
