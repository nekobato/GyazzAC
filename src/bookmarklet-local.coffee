window.BASE_URL = "http://localhost:8888/"
s = document.createElement 'script'
s.setAttribute 'src', "#{window.BASE_URL}gyazzac.js"
document.getElementsByTagName('head')[0].appendChild(s)
