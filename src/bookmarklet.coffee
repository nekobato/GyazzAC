window.BASE_URL = "https://nekobato.github.io/GyazzAC/"
s = document.createElement 'script'
s.setAttribute 'src', "#{window.BASE_URL}gyazzac.js"
document.querySelector('head').appendChild(s)
s2 = document.createElement 'script'
s2.setAttribute 'src', "http://localhost:8080/webpack-dev-server.js"
document.querySelector('head').appendChild(s2)
