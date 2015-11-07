module.exports =

  createAC: ->

    slides = getSlides
    setGyazzAC(slides)

    # Gyazzページに変更があった場合はGyazzACを更新する
    @observer = new MutationObserver (mutations) ->
      refreshGyazzAC()
    .observe document.querySelector('#contents'),
      attributes: true
      attributeFilter: ["class"]

  getSlides: ->

    slides = []

    # タイトル生成
    titleText = $('.title').text()
    titleElement = getTitle titleText
    slides.push titleElement

    # ページごとに分割
    page = 0
    $('#contents > div:visible').each (index) ->
      el = $(this)

      if el.classList.contains('listedit0')
        page++
        slides.push [el]
      else
        slides[page].push el

    return slides

  aclify: ->

    for slide in slides
      pageHTML = ""
      if slide.length # is array?
        for line in slide
          pageHTML += line.innerHTML
      else
        pageHTML = slide.innerHTML

    return slides

  setGyazzAC: (html) ->

    for slide in slides
      $('#gyazzac').innerHTML += slide
