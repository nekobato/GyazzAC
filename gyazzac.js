!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){var a;a=function(){function e(){}var t,a,i,o,r,c,s,l,d,p;return c=[],t=[],a=0,i=0,s=null,p="980",r=function(){var e;e=!1,$("#contents > div:visible").each(function(n){var a,i;return i=$(this),a=i.children("span").html(),c[n]!==a?(c[n]=a,t[n]={level:i.attr("class"),html:a},e=!0):void 0}),e&&d()},o=function(){var e;return window.BASE_URL||(window.BASE_URL="https://nekobato.github.io/GyazzAC/"),n(4),$("body").prepend('<div id="gyazz_ac" class="gyazz-ac"></div>'),$("body").append('<div class="progress-bar"></div>'),e=!1,$(window).resize(function(){return e!==!1&&clearTimeout(e),e=setTimeout(function(){return document.body.style.zoom=$(document).width()/p},200)})},d=function(){var e,n,o,r,c,s,l,d,p,u;for(e=document.createElement("div"),e.innerHTML="<div class='ac-page ac-title'><p>"+$(".title").text()+"</p></div>",u=[],d=-1,n=o=0,c=t.length;c>o;n=++o)l=t[n],"listedit0"===l.level&&(d++,u[d]=document.createElement("div"),t[n+1]&&"listedit0"!==t[n+1].level?u[d].className="ac-page":u[d].className="ac-page ac-single"),u[d].innerHTML+="<div class='ac-line ac-"+l.level+"'>"+l.html+"</div>";for(i=u.length,r=0,s=u.length;s>r;r++)p=u[r],e.appendChild(p);$("#gyazz_ac").html(e),$(".ac-page").eq(a).addClass("active")},l=function(){var e;return e=(a+1)/(i+1)*100,$(".progress-bar").css("width",Math.floor(e)+"%")},e.prototype.prev=function(){return a>0?($("#gyazz_ac .active").removeClass("active").prev().addClass("active"),a--,l()):void 0},e.prototype.next=function(){return $(".ac-page").eq(a+1).length?($("#gyazz_ac .active").removeClass("active").next().addClass("active"),a++,l()):void 0},e.prototype.c=function(){return o(),r(),s=new MutationObserver(function(e){return r()}).observe(document.querySelector("#listbg0"),{attributes:!0,attributeFilter:["class"]}),d(),$(document).scrollTop(0),this},e}(),$(document).off("keydown").on("keydown",function(e,t){return 8===e.which||37===e.which||"prev"===t?(e.preventDefault(),ac.prev()):13===e.which||39===e.which||"next"===t?(e.preventDefault(),ac.next()):void 0}),$("#contents").on("click",function(){return $(this).toggleClass("pulldown")}),window.ac=(new a).c()},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'*,:after,:before{box-sizing:border-box}body,html{margin:0;padding:0}body{background-attachment:fixed;background-color:#e6e6ec!important;background-image:linear-gradient(#e6e6ec,#b7b6cb);background-repeat:no-repeat;background-size:cover;background-position:center center;font-family:helvetica neue,helvetica,arial,geneva,sans-serif!important;font-size:13px!important;color:#676482!important;text-shadow:hsla(0,0%,100%,.5) 0 1px 0}#links,.links,.title{display:none}#contents{position:fixed;left:0;right:0;top:-300px;margin:0 auto;padding:20px;width:80%;height:300px;background:#fff;border-radius:10px;transition:top .3s;overflow-y:scroll}#contents div{position:relative}#contents.pulldown{top:0;bottom:auto}#contents:after{content:"====";display:block;position:absolute;bottom:-12px;left:0;right:0;margin:0 auto;width:100px;text-align:center;background-color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;cursor:pointer}.gyazz-ac,.gyazz-ac>div{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0}.gyazz-ac{font-family:helvetica neue,helvetica,arial,geneva,sans-serif}.gyazz-ac .ac-page{display:none;position:relative;margin:3% auto 0;padding:2% 5%;width:90%;min-height:90%;text-align:center;font-size:28px}.gyazz-ac .ac-page:last-child{margin:0 auto 3%}.gyazz-ac .ac-page.active{display:block}.gyazz-ac .ac-title.active{display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;margin:auto;padding:0;width:100%;height:100%;font-size:48px;border:none;text-align:center}.gyazz-ac .ac-title.active p{width:100%;margin:auto 0;padding:.5em;border:1px solid #aaa;background-color:#e0e0e0;font-weight:700;vertical-align:middle}.gyazz-ac .ac-single.active{display:-webkit-flex;display:-ms-flexbox;display:flex}.gyazz-ac .ac-single.active .ac-line{margin:auto;width:90%}.gyazz-ac .ac-line{text-align:left}.gyazz-ac .ac-listedit0{margin-bottom:20px;text-align:center;font-size:48px}.gyazz-ac .ac-listedit1{margin-top:10px;font-size:36px}.gyazz-ac .ac-listedit1:before{content:"\\25A0";color:#00b000}.gyazz-ac .ac-listedit2{text-indent:2em}.gyazz-ac .ac-listedit2:before{content:"\\25A0";color:#00b000}.gyazz-ac .ac-listedit3{text-indent:3em}.gyazz-ac .ac-listedit3:before{content:"\\25A0";color:#00b000}.gyazz-ac .ac-listedit4{text-indent:4em}.gyazz-ac .ac-listedit4:before{content:"\\25A0";color:#00b000}.gyazz-ac .ac-listedit5{text-indent:5em}.gyazz-ac .ac-listedit5:before{content:"\\25A0";color:#00b000}.gyazz-ac .ac-listedit6{text-indent:6em}.gyazz-ac .ac-listedit6:before{content:"\\25A0";color:#00b000}.gyazz-ac span{position:relative!important;left:auto!important}.progress-bar{content:"";position:fixed;bottom:0;left:0;width:1%;height:3px;background:red;transition:width .1s}@media print{.gyazz-ac .ac-page{display:block;margin:3% auto 30%;border:1px solid #333}}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(a[o]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&a[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(e,t,n){function a(e,t){for(var n=0;n<e.length;n++){var a=e[n],i=f[a.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(l(a.parts[o],t))}else{for(var r=[],o=0;o<a.parts.length;o++)r.push(l(a.parts[o],t));f[a.id]={id:a.id,refs:1,parts:r}}}}function i(e){for(var t=[],n={},a=0;a<e.length;a++){var i=e[a],o=i[0],r=i[1],c=i[2],s=i[3],l={css:r,media:c,sourceMap:s};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function o(e,t){var n=v(),a=y[y.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function c(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function l(e,t){var n,a,i;if(t.singleton){var o=b++;n=m||(m=c(t)),a=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),a=u.bind(null,n),i=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(t),a=p.bind(null,n),i=function(){r(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}function d(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=z(t,i);else{var o=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function p(e,t){var n=t.css,a=t.media;t.sourceMap;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,t){var n=t.css,a=(t.media,t.sourceMap);a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var f={},g=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=g(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return a(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var c=n[r],s=f[c.id];s.refs--,o.push(s)}if(e){var l=i(e);a(l,t)}for(var r=0;r<o.length;r++){var s=o[r];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete f[s.id]}}}};var z=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var a=n(1);"string"==typeof a&&(a=[[e.id,a,""]]);n(3)(a,{});a.locals&&(e.exports=a.locals)}]);
//# sourceMappingURL=gyazzac.js.map