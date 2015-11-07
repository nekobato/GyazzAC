javascript: !(function() {
  var s1= document.createElement('script');
  s1.setAttribute('src', "http://localhost:8080/gyazzac.js?date=" + Date.now());
  document.querySelector('head').appendChild(s1);
}).call(this)
