/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var GyazzA;
	
	GyazzA = (function() {
	  var ac_lines, ac_page, ac_page_total, attachAC, fetchGyazz, gyazz_lines, observer, progress, refresh, window_size;
	
	  function GyazzA() {}
	
	  gyazz_lines = [];
	
	  ac_lines = [];
	
	  ac_page = 0;
	
	  ac_page_total = 0;
	
	  observer = null;
	
	  window_size = '980';
	
	  fetchGyazz = function() {
	    var changeFlag;
	    changeFlag = false;
	    $('#contents > div:visible').each(function(index) {
	      var $line, $this;
	      $this = $(this);
	      $line = $this.children('span').html();
	      if (gyazz_lines[index] !== $line) {
	        gyazz_lines[index] = $line;
	        ac_lines[index] = {
	          level: $this.attr('class'),
	          html: $line
	        };
	        return changeFlag = true;
	      }
	    });
	    if (changeFlag) {
	      refresh();
	    }
	  };
	
	  attachAC = function() {
	    var timer;
	    window.BASE_URL || (window.BASE_URL = 'https://nekobato.github.io/GyazzAC/');
	    __webpack_require__(1);
	    $('body').prepend('<div id="gyazz_ac" class="gyazz-ac"></div>');
	    $('body').append('<div class="progress-bar"></div>');
	    timer = false;
	    return $(window).resize(function() {
	      if (timer !== false) {
	        clearTimeout(timer);
	      }
	      return timer = setTimeout(function() {
	        return document.body.style.zoom = $(document).width() / window_size;
	      }, 200);
	    });
	  };
	
	  refresh = function() {
	    var ac, i, j, k, len, len1, line, n, page, pages;
	    ac = document.createElement('div');
	    ac.innerHTML = "<div class='ac-page ac-title'><p>" + ($('.title').text()) + "</p></div>";
	    pages = [];
	    n = -1;
	    for (i = j = 0, len = ac_lines.length; j < len; i = ++j) {
	      line = ac_lines[i];
	      if (line.level === 'listedit0') {
	        n++;
	        pages[n] = document.createElement('div');
	        if (!ac_lines[i + 1] || ac_lines[i + 1].level === 'listedit0') {
	          pages[n].className = 'ac-page ac-single';
	        } else {
	          pages[n].className = 'ac-page';
	        }
	      }
	      pages[n].innerHTML += "<div class='ac-line ac-" + line.level + "'>" + line.html + "</div>";
	    }
	    ac_page_total = pages.length;
	    for (k = 0, len1 = pages.length; k < len1; k++) {
	      page = pages[k];
	      ac.appendChild(page);
	    }
	    $('#gyazz_ac').html(ac);
	    $('.ac-page').eq(ac_page).addClass('active');
	  };
	
	  progress = function() {
	    var pp;
	    pp = (ac_page + 1) / (ac_page_total + 1) * 100;
	    return $('.progress-bar').css('width', Math.floor(pp) + '%');
	  };
	
	  GyazzA.prototype.prev = function() {
	    if (ac_page > 0) {
	      $('#gyazz_ac .active').removeClass('active').prev().addClass('active');
	      ac_page--;
	      return progress();
	    }
	  };
	
	  GyazzA.prototype.next = function() {
	    if ($('.ac-page').eq(ac_page + 1).length) {
	      $('#gyazz_ac .active').removeClass('active').next().addClass('active');
	      ac_page++;
	      return progress();
	    }
	  };
	
	  GyazzA.prototype.c = function() {
	    attachAC();
	    fetchGyazz();
	    observer = new MutationObserver(function(mutations) {
	      return fetchGyazz();
	    }).observe(document.querySelector('#listbg0'), {
	      attributes: true,
	      attributeFilter: ["class"]
	    });
	    refresh();
	    $(document).scrollTop(0);
	    return this;
	  };
	
	  return GyazzA;
	
	})();
	
	$(document).off('keydown').on('keydown', function(e, order) {
	  if (e.which === 8 || e.which === 37 || order === 'prev') {
	    e.preventDefault();
	    return ac.prev();
	  } else if (e.which === 13 || e.which === 39 || order === 'next') {
	    e.preventDefault();
	    return ac.next();
	  }
	});
	
	$('#contents').on('click', function() {
	  return $(this).toggleClass('pulldown');
	});
	
	window.ac = new GyazzA().c();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/pleeease-loader/index.js!./gyazzac.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/pleeease-loader/index.js!./gyazzac.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "*{box-sizing:border-box}html,body{margin:0;padding:0;height:100%}body{width:100%;height:100%;background-attachment:fixed;background-color:#e6e6ec!important;background-image:linear-gradient(#e6e6ec,#b7b6cb);background-repeat:no-repeat;background-size:cover;background-position:center center;font-family:helvetica neue,helvetica,arial,geneva,sans-serif!important;font-size:13px!important;color:#676482!important;text-shadow:rgba(255,255,255,.5) 0 1px 0}.title,#links,.links{display:none}#contents{position:fixed;left:0;right:0;top:-300px;margin:0 auto;padding:20px;width:80%;height:300px;background:white;border-radius:10px;transition:top .3s;overflow-y:scroll}#contents div{position:relative}#contents.pulldown{top:0;bottom:auto}#contents:after{content:\"====\";display:block;position:absolute;bottom:-12px;left:0;right:0;margin:0 auto;width:100px;text-align:center;background-color:white;border-bottom-left-radius:10px;border-bottom-right-radius:10px;cursor:pointer}.gyazz-ac,.gyazz-ac>div{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0}.gyazz-ac{font-family:helvetica neue,helvetica,arial,geneva,sans-serif}.gyazz-ac .ac-page{display:none;position:relative;margin:3% auto 0;padding:2% 5%;width:90%;min-height:90%;text-align:center;font-size:28px}.gyazz-ac .ac-page:last-child{margin:0 auto 3%}.gyazz-ac .ac-page.active{display:block}.gyazz-ac .ac-title.active{display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;margin:auto;padding:0;width:100%;height:100%;font-size:48px;border:none;text-align:center}.gyazz-ac .ac-title.active p{width:100%;margin:auto 0;padding:.5em;border:1px solid #aaa;background-color:#e0e0e0;font-weight:700;vertical-align:middle}.gyazz-ac .ac-single.active{display:-webkit-flex;display:-ms-flexbox;display:flex}.gyazz-ac .ac-single.active .ac-line{margin:auto;width:90%}.gyazz-ac .ac-line{text-align:left}.gyazz-ac .ac-listedit0{margin-bottom:20px;text-align:center;font-size:48px}.gyazz-ac .ac-listedit1{margin-top:10px;font-size:36px}.gyazz-ac .ac-listedit1:before{content:\"\\25A0\";color:#00b000}.gyazz-ac .ac-listedit2{text-indent:2em}.gyazz-ac .ac-listedit2:before{content:\"\\25A0\";color:#00b000}.gyazz-ac .ac-listedit3{text-indent:3em}.gyazz-ac .ac-listedit3:before{content:\"\\25A0\";color:#00b000}.gyazz-ac .ac-listedit4{text-indent:4em}.gyazz-ac .ac-listedit4:before{content:\"\\25A0\";color:#00b000}.gyazz-ac .ac-listedit5{text-indent:5em}.gyazz-ac .ac-listedit5:before{content:\"\\25A0\";color:#00b000}.gyazz-ac .ac-listedit6{text-indent:6em}.gyazz-ac .ac-listedit6:before{content:\"\\25A0\";color:#00b000}.gyazz-ac span{position:relative!important;left:auto!important}.progress-bar{content:\"\";position:fixed;bottom:0;left:0;width:1%;height:3px;background:red;transition:width .1s}@media print{.gyazz-ac .ac-page{display:block;margin:3% auto 30%;border:1px solid #333}}", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=gyazzac.js.map