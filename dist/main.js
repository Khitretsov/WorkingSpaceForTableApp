/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin: 1em 5em;\r\n    background-color: #ffffe7;\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.form {\r\n    border-bottom: 0.08em solid rgb(226, 104, 104);\r\n    margin-bottom: 0.5em;\r\n    padding-bottom: 0.5em;\r\n}\r\n\r\n.form input {\r\n    position: absolute;\r\n    left: 30em;\r\n}\r\n\r\n.form button {\r\n    position: absolute;\r\n    left: 43em;\r\n    cursor: pointer;\r\n}\r\n\r\n.form div {\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.form span {\r\n    position: absolute;\r\n    left: 25em;\r\n    padding-right: 0.2em;\r\n    border-right: 0.1em solid rgb(226, 104, 104);\r\n}\r\n\r\n.table {\r\n    margin-top: 0.5em;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.table tbody tr {\r\n    text-align: left;\r\n    background-color: #ffffe7;\r\n}\r\n\r\n.table th {\r\n    border: 0.1em solid #ddd;\r\n    padding: 0.4em;\r\n}\r\n\r\n.table tbody th {\r\n    font-weight: normal;\r\n}\r\n\r\n.table tr:nth-child(even){ \r\n    background-color: #f3f3b4;\r\n}\r\n\r\n/* .table tr:hover {\r\n} */\r\n\r\n.table thead {\r\n    background: #f8eaa2fb;\r\n    border-bottom: 0.15em solid black;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.table caption {\r\n    background: #ffffe7;\r\n    /* border-top: 0.15em solid black; */\r\n    font-weight: bold;\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n.table caption span {\r\n    padding: 0em 0.6em;\r\n    cursor: pointer;\r\n}\r\n\r\n.table caption .selected {\r\n    background: rgb(226, 104, 104);\r\n    cursor: default;\r\n}\r\n\r\n.table caption .arrow_disable {\r\n    color: rgb(196, 190, 190);\r\n    cursor: default;\r\n}\r\n\r\n.table thead .selected {\r\n    text-decoration: underline;\r\n    background: #d7f8a2fb;\r\n}\r\n\r\n.table thead .selected_2 {\r\n    text-decoration: underline;\r\n    background: #b1f83ffb;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/MakeAForm.js":
/*!**************************!*\
  !*** ./src/MakeAForm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function MakeAForm(request, textBeforeInput, textUnderInput, textInButton) {
  var div = document.createElement('div');
  var input = document.createElement('input');

  (function () {
    function submit() {
      request(input.value);
      div.lastChild.innerHTML = input.value;
      input.value = '';
    }

    var component = document.createElement('div');
    component.classList.add('form');

    input.onkeydown = function (e) {
      if (e.key == 'Enter') submit();
    };

    var button = document.createElement('button');
    button.innerHTML = textInButton;

    button.onclick = function () {
      submit(); // request((input.value));
      // div.lastChild.innerHTML = input.value;
      // input.value = '';
    };

    component.append(input, button, div);
    input.insertAdjacentText('beforeBegin', textBeforeInput);
    div.insertAdjacentHTML('afterbegin', '<span></span>');
    div.insertAdjacentText('afterbegin', textUnderInput);
    document.body.append(component);
  })();

  this.clearFields = function (inInput, inBottom) {
    inInput ? input.value = '' : null;
    inBottom ? div.lastChild.innerHTML = '' : null;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (MakeAForm);

/***/ }),

/***/ "./src/MakeATable.js":
/*!***************************!*\
  !*** ./src/MakeATable.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BicycleTableCreator; });
/* harmony import */ var _filterAndSortAndPaginTableCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterAndSortAndPaginTableCreater */ "./src/filterAndSortAndPaginTableCreater.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function BicycleTableCreator(name, mapping, nameOfCol, amountOfRow) {
  var arrForCheck = ['String', 'Object', 'Map', 'Number'];

  try {
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i].__proto__.constructor.name != arrForCheck[i]) {
        throw new Error("\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ".concat(i, " \u0438\u043C\u0435\u0435\u0442 \u0442\u0438\u043F ").concat(arguments[i].__proto__.constructor.name, ", \u043A\u043E\u0433\u0434\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0442\u0438\u043F ").concat(arrForCheck[i]));
      }
    }

    if (arguments[3] < 1 || arguments[3] - Math.trunc(arguments[3]) != 0) {
      throw new Error('Количество отображаемых в таблице строк должно быть целым числом, большим нуля');
    }
  } catch (e) {
    console.error(e);
  }

  var table = null;
  var map = null;
  var tableHead = null;
  var data = {};

  (function () {
    // Наверно это сингхлтооон
    table = document.createElement('table');
    table.classList.add(name);
    table.innerHTML = 'table is empty';
    document.body.appendChild(table);
    map = mapping;
    tableHead = nameOfCol;
    var arr = map[Object.keys(map)[0]];

    for (var _i = 0; _i < arr.length; _i++) {
      if (_typeof(arr[_i]) != 'object') {
        data[arr[_i]] = [];
      } else {
        var subArr = arr[_i][Object.keys(arr[_i])];

        for (var j = 0; j < subArr.length; j++) {
          data[subArr[j]] = [];
        }
      }
    }
  })();

  var filterAndSortAndPaginTable = Object(_filterAndSortAndPaginTableCreater__WEBPACK_IMPORTED_MODULE_0__["default"])(data, map, nameOfCol, tableHead, table, amountOfRow);

  this.changeContent = function (content, filter) {
    filterAndSortAndPaginTable(content, filter);
  };
}

/***/ }),

/***/ "./src/filterAndSortAndPaginTableCreater.js":
/*!**************************************************!*\
  !*** ./src/filterAndSortAndPaginTableCreater.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filterAndSortAndPaginTableCreater; });
/* harmony import */ var _transformDataFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformDataFunc */ "./src/transformDataFunc.js");
/* harmony import */ var _sortAndPaginTableCreater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortAndPaginTableCreater */ "./src/sortAndPaginTableCreater.js");


function filterAndSortAndPaginTableCreater(data, map, nameOfCol, tableHead, table, amountOfRow) {
  var transformData = Object(_transformDataFunc__WEBPACK_IMPORTED_MODULE_0__["default"])(data, map);
  return function (content, filter) {
    if (!data[Object.keys(data)[0]].length && content == null) {
      //  Прекращение выполнения, если фильтрация запускается при отсутствии данных
      return;
    }

    var copiedData = {};

    if (filter == undefined) {
      transformData(content);

      for (var key in data) {
        copiedData[key] = data[key].map(function (item) {
          return item;
        });
      }
    } else {
      for (var _key in data) {
        copiedData[_key] = [];
      }

      for (var i = 0; i < data[Object.keys(data)[0]].length; i++) {
        var isRowAppropriate = false;

        for (var _key2 in data) {
          if (data[_key2][i] != null) {
            data[_key2][i] = data[_key2][i] + ''; // Для перевода в строки чисел и логических значений

            var regExp = new RegExp(filter, 'i');

            if (data[_key2][i].search(regExp) > -1) {
              isRowAppropriate = true;
              break;
            }
          }
        }

        if (isRowAppropriate) {
          for (var _key3 in data) {
            copiedData[_key3].push(data[_key3][i]);
          }
        }
      }
    }

    var sortAndPaginTable = Object(_sortAndPaginTableCreater__WEBPACK_IMPORTED_MODULE_1__["default"])(copiedData, nameOfCol, tableHead, table, amountOfRow);
    sortAndPaginTable();
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MakeAForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakeAForm */ "./src/MakeAForm.js");
/* harmony import */ var _MakeATable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeATable */ "./src/MakeATable.js");




function request(param) {
  var url = "https://api.hh.ru/vacancies?text=".concat(param);
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    } // body: JSON.stringify(data)

  }).then(function (response) {
    return response.json();
  }).then(function (myJson) {
    newTable.changeContent(myJson);
    filterForm.clearFields(1, 1);
  });
}

var map = {
  items: [// Структура данных (Путь к массиву с данными в приходящем ответе и массив ключей объектов-элементов массива)
  {
    'snippet': ['requirement', 'responsibility']
  }, {
    'salary': ['currency', 'to', 'from', 'gross']
  }, 'name']
};
var nameOfCol = new Map([// Порядок элементов имеет значение
['name', 'Название'], ['responsibility', 'Суть'], ['requirement', 'Требования'], ['from', 'От'], ['to', 'До'], ['currency', 'Валюта'], ['gross', 'До вычетов']]);
var form = new _MakeAForm__WEBPACK_IMPORTED_MODULE_1__["default"](request, 'Ключевое слово для поиска: ', 'Поиск произведён по слову: ', 'Поиск');
/* eslint-disable-line */
// new MakeAForm(request, 'Ключевое слово для поиска: ');

function filter(param) {
  newTable.changeContent(null, param);
}

var filterForm = new _MakeAForm__WEBPACK_IMPORTED_MODULE_1__["default"](filter, 'Фильтровать данные по слову: ', 'Фильтрация произведена по слову: ', 'Фильтровать');
var newTable = new _MakeATable__WEBPACK_IMPORTED_MODULE_2__["default"]('table', map, nameOfCol, 3);

/***/ }),

/***/ "./src/paginTableCreater.js":
/*!**********************************!*\
  !*** ./src/paginTableCreater.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return paginTableCreater; });
/* harmony import */ var _tableCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableCreater */ "./src/tableCreater.js");

function paginTableCreater(copiedData, tableHead, table, amountOfRow) {
  // Переименовать copiedData в data 
  var createTable = Object(_tableCreater__WEBPACK_IMPORTED_MODULE_0__["default"])(copiedData, tableHead, table);
  return function () {
    if (table.getElementsByTagName('caption')[0]) {
      table.removeChild(table.getElementsByTagName('caption')[0]);
    }

    var caption = document.createElement('caption');
    var lengthOfData = copiedData[Object.keys(copiedData)[0]].length;
    var maxPage = lengthOfData % amountOfRow == 0 ? lengthOfData / amountOfRow : Math.trunc(lengthOfData / amountOfRow) + 1;

    for (var i = 0; i < maxPage; i++) {
      var span = document.createElement('span');
      span.innerHTML = i + 1;
      i == 0 ? span.classList.add('selected') : null; // Хо-хо

      caption.appendChild(span);
    }

    for (var _i = 0; _i < 2; _i++) {
      var _span = document.createElement('span');

      if (_i) {
        _span.innerHTML = 'Следующая';

        _span.setAttribute('name', 'next');

        maxPage == 1 || maxPage == 0 ? _span.classList.add('arrow_disable') : null;
        caption.append(_span);
      } else {
        _span.innerHTML = 'Предидущая';

        _span.setAttribute('name', 'previous');

        _span.classList.add('arrow_disable');

        caption.prepend(_span);
      }
    }

    caption.onclick = function (e) {
      //  Проделегируем события
      if (caption.getElementsByClassName('selected').length == 0 || caption.children.length == 3) return;

      if (!isNaN(+e.target.innerHTML)) {
        caption.firstChild.classList.remove('arrow_disable');
        caption.lastChild.classList.remove('arrow_disable');
        caption.getElementsByClassName('selected')[0].classList.remove('selected');
        caption.children[+e.target.innerHTML].classList.add('selected');
        range.changePage = +e.target.innerHTML - 1;
      } else {
        if (e.target == caption.firstChild) {
          if (range.currentPage == 0) return;
          range.changePage = range.currentPage - 1;
          caption.getElementsByClassName('selected')[0].classList.remove('selected');
          caption.children[range.currentPage + 1].classList.add('selected');
        } else {
          if (caption.getElementsByClassName('selected')[0].innerHTML == caption.children.length - 2) return;
          range.changePage = range.currentPage + 1;
          caption.getElementsByClassName('selected')[0].classList.remove('selected');
          caption.children[range.currentPage + 1].classList.add('selected');
        }
      }

      if (range.currentPage == 0) {
        caption.firstChild.classList.add('arrow_disable');
      } else if (range.currentPage == caption.children.length - 3) {
        caption.lastChild.classList.add('arrow_disable');
      } else {
        caption.firstChild.classList.remove('arrow_disable');
        caption.lastChild.classList.remove('arrow_disable');
      }

      createTable(range);
    };

    table.append(caption);
    var range = {
      start: 0,
      end: amountOfRow,
      currentPage: 0,

      set changePage(value) {
        // value = value < 0 ? 0 : value;
        this.start = value * amountOfRow;
        this.end = value * amountOfRow + amountOfRow;
        this.currentPage = value;
      }

    };
    createTable(range);
  };
}

/***/ }),

/***/ "./src/sortAndPaginTableCreater.js":
/*!*****************************************!*\
  !*** ./src/sortAndPaginTableCreater.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortAndPaginTableCreater; });
/* harmony import */ var _paginTableCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginTableCreater */ "./src/paginTableCreater.js");

function sortAndPaginTableCreater(data, nameOfCol, tableHead, table, amountOfRow) {
  var copiedData = {};

  for (var key in data) {
    copiedData[key] = data[key].map(function (item) {
      return item;
    });
  }

  var paginTable = Object(_paginTableCreater__WEBPACK_IMPORTED_MODULE_0__["default"])(copiedData, tableHead, table, amountOfRow);
  return function () {
    var orderOfSortAndCol = {
      order: 0,
      colName: ''
    };
    paginTable();

    table.onclick = function sorting(e) {
      if (e.target.parentElement.parentElement.nodeName != 'THEAD') {
        selectedColl();
        return;
      } else {
        if (orderOfSortAndCol.colName != e.target.innerHTML) {
          orderOfSortAndCol.order = 0;
          orderOfSortAndCol.colName = e.target.innerHTML;
        }
      }

      var sortForColumn; // Определение нажатого столбца

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nameOfCol[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          if (e.target.innerHTML == value[1]) {
            sortForColumn = value[0];
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      function sort(copiedData, count) {
        // Ф-ция сортировки объекта данных
        switch (orderOfSortAndCol.order) {
          case 0:
            orderOfSortAndCol.order = 1;
            break;

          case 1:
            orderOfSortAndCol.order = -1;
            break;

          case -1:
            orderOfSortAndCol.order = 0;

            for (var _key in copiedData) {
              copiedData[_key] = data[_key].map(function (item) {
                return item;
              });
            }

            paginTable();
            selectedColl();
            return;
        }

        function recursion(copiedData, count) {
          if (count == undefined) count = 0;
          var arr = copiedData[sortForColumn];
          var indexOfMaxElem = 0;

          for (var i = 1; i < arr.length - count; i++) {
            if (!isNaN(+arr[i])) {
              +arr[i];
              +arr[indexOfMaxElem];
            }

            switch (orderOfSortAndCol.order) {
              case 1:
                if (arr[i] > arr[indexOfMaxElem]) {
                  // > по возрастанию
                  indexOfMaxElem = i;
                }

                break;

              case -1:
                if (arr[i] < arr[indexOfMaxElem]) {
                  // < по убыванию
                  indexOfMaxElem = i;
                }

                break;
            }
          }

          var buf = arr[arr.length - 1 - count];
          arr[arr.length - 1 - count] = arr[indexOfMaxElem];
          arr[indexOfMaxElem] = buf;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = nameOfCol.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _key2 = _step2.value;
              if (_key2 == sortForColumn) continue;
              var _buf = copiedData[_key2][arr.length - 1 - count];
              copiedData[_key2][arr.length - 1 - count] = copiedData[_key2][indexOfMaxElem];
              copiedData[_key2][indexOfMaxElem] = _buf;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (count < arr.length - 1) {
            count++;
            recursion(copiedData, count);
          }
        }

        recursion(copiedData, count);
      }

      sort(copiedData);
      paginTable();

      function selectedColl() {
        //  Ф-ция для подсветки выбранных для сортировки столбцов
        Array.prototype.forEach.call(document.getElementsByClassName('table')[0].tHead.firstChild.children, function (item) {
          if (item.innerHTML == orderOfSortAndCol.colName) {
            switch (orderOfSortAndCol.order) {
              case 0:
                item.classList.remove('selected');
                break;

              case -1:
                item.classList.remove('selected');
                item.classList.add('selected_2');
                break;

              default:
                item.classList.add('selected');
            }
          }
        });
      }

      selectedColl();
    };
  };
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/tableCreater.js":
/*!*****************************!*\
  !*** ./src/tableCreater.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tableCreater; });
function tableCreater(data, tableHead, table) {
  return function (range) {
    // console.log(range.currentPage);
    var thead = document.createElement('thead');
    var colums = document.createElement('tr');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tableHead.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var prop = _step.value;
        var nameOfColumn = document.createElement('th');
        nameOfColumn.innerText = prop;
        colums.appendChild(nameOfColumn);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    thead.appendChild(colums);
    table.childNodes[0].replaceWith(thead);
    var tbody = document.createElement('tbody'); // for (let i = 0; i < data[Object.keys(data)[0]].length; i++) {

    for (var i = range.start; i < range.end; i++) {
      var row = document.createElement('tr');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = tableHead.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;
          var item = document.createElement('th');
          item.innerText = data[key][i] == undefined ? null : data[key][i];
          row.appendChild(item);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      tbody.appendChild(row);
    }

    if (table.tBodies.length != 0) {
      table.tBodies[0].replaceWith(tbody);
    } else {
      table.appendChild(tbody);
    }
  };
}

/***/ }),

/***/ "./src/transformDataFunc.js":
/*!**********************************!*\
  !*** ./src/transformDataFunc.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transformDataFunc; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function transformDataFunc(data, map) {
  //  copiedData 
  return function (content) {
    if (data[Object.keys(data)[0]].length != 0) {
      for (var key in data) {
        data[key] = [];
      }
    }

    var arrOfData = content[Object.keys(content)[0]];
    arrOfData.forEach(function (item) {
      map[Object.keys(map)[0]].forEach(function (item2) {
        if (_typeof(item2) != 'object') {
          data[item2].push(item.hasOwnProperty(item2) ? item[item2] : '---');
        } else {
          var nameOfComplexProp = Object.keys(item2)[0];
          item2[Object.keys(item2)[0]].forEach(function (item2) {
            data[item2].push(item[nameOfComplexProp] == null ? null : item[nameOfComplexProp].hasOwnProperty(item2) ? item[nameOfComplexProp][item2] : null);
          });
        }
      });
    });
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ha2VBRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFrZUFUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVyQW5kU29ydEFuZFBhZ2luVGFibGVDcmVhdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnaW5UYWJsZUNyZWF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvcnRBbmRQYWdpblRhYmxlQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzc1MjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNmb3JtRGF0YUZ1bmMuanMiXSwibmFtZXMiOlsiTWFrZUFGb3JtIiwicmVxdWVzdCIsInRleHRCZWZvcmVJbnB1dCIsInRleHRVbmRlcklucHV0IiwidGV4dEluQnV0dG9uIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQiLCJzdWJtaXQiLCJ2YWx1ZSIsImxhc3RDaGlsZCIsImlubmVySFRNTCIsImNvbXBvbmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm9ua2V5ZG93biIsImUiLCJrZXkiLCJidXR0b24iLCJvbmNsaWNrIiwiYXBwZW5kIiwiaW5zZXJ0QWRqYWNlbnRUZXh0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYm9keSIsImNsZWFyRmllbGRzIiwiaW5JbnB1dCIsImluQm90dG9tIiwiQmljeWNsZVRhYmxlQ3JlYXRvciIsIm5hbWUiLCJtYXBwaW5nIiwibmFtZU9mQ29sIiwiYW1vdW50T2ZSb3ciLCJhcnJGb3JDaGVjayIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfX3Byb3RvX18iLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiTWF0aCIsInRydW5jIiwiY29uc29sZSIsImVycm9yIiwidGFibGUiLCJtYXAiLCJ0YWJsZUhlYWQiLCJkYXRhIiwiYXBwZW5kQ2hpbGQiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic3ViQXJyIiwiaiIsImZpbHRlckFuZFNvcnRBbmRQYWdpblRhYmxlIiwiZmlsdGVyQW5kU29ydEFuZFBhZ2luVGFibGVDcmVhdGVyIiwiY2hhbmdlQ29udGVudCIsImNvbnRlbnQiLCJmaWx0ZXIiLCJ0cmFuc2Zvcm1EYXRhIiwidHJhbnNmb3JtRGF0YUZ1bmMiLCJjb3BpZWREYXRhIiwidW5kZWZpbmVkIiwiaXRlbSIsImlzUm93QXBwcm9wcmlhdGUiLCJyZWdFeHAiLCJSZWdFeHAiLCJzZWFyY2giLCJwdXNoIiwic29ydEFuZFBhZ2luVGFibGUiLCJzb3J0QW5kUGFnaW5UYWJsZUNyZWF0ZXIiLCJwYXJhbSIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJteUpzb24iLCJuZXdUYWJsZSIsImZpbHRlckZvcm0iLCJpdGVtcyIsIk1hcCIsImZvcm0iLCJwYWdpblRhYmxlQ3JlYXRlciIsImNyZWF0ZVRhYmxlIiwidGFibGVDcmVhdGVyIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZW1vdmVDaGlsZCIsImNhcHRpb24iLCJsZW5ndGhPZkRhdGEiLCJtYXhQYWdlIiwic3BhbiIsInNldEF0dHJpYnV0ZSIsInByZXBlbmQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpc05hTiIsInRhcmdldCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJyYW5nZSIsImNoYW5nZVBhZ2UiLCJjdXJyZW50UGFnZSIsInN0YXJ0IiwiZW5kIiwicGFnaW5UYWJsZSIsIm9yZGVyT2ZTb3J0QW5kQ29sIiwib3JkZXIiLCJjb2xOYW1lIiwic29ydGluZyIsInBhcmVudEVsZW1lbnQiLCJub2RlTmFtZSIsInNlbGVjdGVkQ29sbCIsInNvcnRGb3JDb2x1bW4iLCJzb3J0IiwiY291bnQiLCJyZWN1cnNpb24iLCJpbmRleE9mTWF4RWxlbSIsImJ1ZiIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJ0SGVhZCIsInRoZWFkIiwiY29sdW1zIiwidmFsdWVzIiwicHJvcCIsIm5hbWVPZkNvbHVtbiIsImlubmVyVGV4dCIsImNoaWxkTm9kZXMiLCJyZXBsYWNlV2l0aCIsInRib2R5Iiwicm93IiwidEJvZGllcyIsImFyck9mRGF0YSIsIml0ZW0yIiwiaGFzT3duUHJvcGVydHkiLCJuYW1lT2ZDb21wbGV4UHJvcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFD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QUFuQixDQUFELENBQUwsQ0FBNkJmLE9BQTdCLENBQXFDLFVBQUNlLEtBQUQsRUFBVztBQUM1QzNGLGdCQUFJLENBQUMyRixLQUFELENBQUosQ0FBWXRFLElBQVosQ0FBaUJMLElBQUksQ0FBQzZFLGlCQUFELENBQUosSUFBMkIsSUFBM0IsR0FBa0MsSUFBbEMsR0FBeUM3RSxJQUFJLENBQUM2RSxpQkFBRCxDQUFKLENBQXdCRCxjQUF4QixDQUF1Q0QsS0FBdkMsSUFBZ0QzRSxJQUFJLENBQUM2RSxpQkFBRCxDQUFKLENBQXdCRixLQUF4QixDQUFoRCxHQUFpRixJQUEzSTtBQUNILFdBRkQ7QUFHSDtBQUNKLE9BVEQ7QUFVSCxLQVhEO0FBWUgsR0FwQkQ7QUFxQkgsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDFlbSA1ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZTc7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDAuMDhlbSBzb2xpZCByZ2IoMjI2LCAxMDQsIDEwNCk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGlucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAzMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBidXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDQzZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gZGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDI1ZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMmVtO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuMWVtIHNvbGlkIHJnYigyMjYsIDEwNCwgMTA0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB0Ym9keSB0ciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZTc7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB0aCB7XFxyXFxuICAgIGJvcmRlcjogMC4xZW0gc29saWQgI2RkZDtcXHJcXG4gICAgcGFkZGluZzogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB0Ym9keSB0aCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2I0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAudGFibGUgdHI6aG92ZXIge1xcclxcbn0gKi9cXHJcXG5cXHJcXG4udGFibGUgdGhlYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjhlYWEyZmI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDAuMTVlbSBzb2xpZCBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGNhcHRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmU3O1xcclxcbiAgICAvKiBib3JkZXItdG9wOiAwLjE1ZW0gc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGNhcHRpb24gc3BhbiB7XFxyXFxuICAgIHBhZGRpbmc6IDBlbSAwLjZlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgY2FwdGlvbiAuc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI2LCAxMDQsIDEwNCk7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGNhcHRpb24gLmFycm93X2Rpc2FibGUge1xcclxcbiAgICBjb2xvcjogcmdiKDE5NiwgMTkwLCAxOTApO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB0aGVhZCAuc2VsZWN0ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Q3ZjhhMmZiO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgdGhlYWQgLnNlbGVjdGVkXzIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IxZjgzZmZiO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcclxuZnVuY3Rpb24gTWFrZUFGb3JtKHJlcXVlc3QsIHRleHRCZWZvcmVJbnB1dCwgdGV4dFVuZGVySW5wdXQsIHRleHRJbkJ1dHRvbikge1xyXG4gICAgXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICBmdW5jdGlvbiBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QoKGlucHV0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGRpdi5sYXN0Q2hpbGQuaW5uZXJIVE1MID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xyXG5cclxuICAgICAgICBpbnB1dC5vbmtleWRvd24gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSBzdWJtaXQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRleHRJbkJ1dHRvbjtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzdWJtaXQoKTtcclxuICAgICAgICAgICAgLy8gcmVxdWVzdCgoaW5wdXQudmFsdWUpKTtcclxuICAgICAgICAgICAgLy8gZGl2Lmxhc3RDaGlsZC5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgLy8gaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbXBvbmVudC5hcHBlbmQoaW5wdXQsIGJ1dHRvbiwgZGl2KTtcclxuICAgICAgICBpbnB1dC5pbnNlcnRBZGphY2VudFRleHQoJ2JlZm9yZUJlZ2luJywgdGV4dEJlZm9yZUlucHV0KTtcclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxzcGFuPjwvc3Bhbj4nKTtcclxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRUZXh0KCdhZnRlcmJlZ2luJywgdGV4dFVuZGVySW5wdXQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb21wb25lbnQpO1xyXG4gICAgfSgpKTsgICAgXHJcblxyXG4gICAgdGhpcy5jbGVhckZpZWxkcyA9IGZ1bmN0aW9uKGluSW5wdXQsIGluQm90dG9tKSB7XHJcbiAgICAgICAgaW5JbnB1dCA/IGlucHV0LnZhbHVlID0gJycgOiBudWxsO1xyXG4gICAgICAgIGluQm90dG9tID8gZGl2Lmxhc3RDaGlsZC5pbm5lckhUTUwgPSAnJyA6IG51bGw7IFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFrZUFGb3JtOyIsImltcG9ydCBmaWx0ZXJBbmRTb3J0QW5kUGFnaW5UYWJsZUNyZWF0ZXIgZnJvbSAnLi9maWx0ZXJBbmRTb3J0QW5kUGFnaW5UYWJsZUNyZWF0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmljeWNsZVRhYmxlQ3JlYXRvcihuYW1lLCBtYXBwaW5nLCBuYW1lT2ZDb2wsIGFtb3VudE9mUm93KSB7XHJcblxyXG4gICAgbGV0IGFyckZvckNoZWNrID0gWydTdHJpbmcnLCAnT2JqZWN0JywgJ01hcCcsICdOdW1iZXInXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5fX3Byb3RvX18uY29uc3RydWN0b3IubmFtZSAhPSBhcnJGb3JDaGVja1tpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDQkNGA0LPRg9C80LXQvdGCINC/0L7QtCDQvdC+0LzQtdGA0L7QvCAke2l9INC40LzQtdC10YIg0YLQuNC/ICR7YXJndW1lbnRzW2ldLl9fcHJvdG9fXy5jb25zdHJ1Y3Rvci5uYW1lfSwg0LrQvtCz0LTQsCDRgtGA0LXQsdGD0LXRgtGB0Y8g0YLQuNC/ICR7YXJyRm9yQ2hlY2tbaV19YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50c1szXSA8IDEgfHwgKGFyZ3VtZW50c1szXSAtIE1hdGgudHJ1bmMoYXJndW1lbnRzWzNdKSkgIT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+INC+0YLQvtCx0YDQsNC20LDQtdC80YvRhSDQsiDRgtCw0LHQu9C40YbQtSDRgdGC0YDQvtC6INC00L7Qu9C20L3QviDQsdGL0YLRjCDRhtC10LvRi9C8INGH0LjRgdC70L7QvCwg0LHQvtC70YzRiNC40Lwg0L3Rg9C70Y8nKTtcclxuICAgICAgICB9ICBcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0YWJsZSA9IG51bGw7XHJcbiAgICBsZXQgbWFwID0gbnVsbDtcclxuICAgIGxldCB0YWJsZUhlYWQgPSBudWxsO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuXHJcbiAgICAoZnVuY3Rpb24oKSB7IC8vINCd0LDQstC10YDQvdC+INGN0YLQviDRgdC40L3Qs9GF0LvRgtC+0L7QvtC9XHJcbiAgICAgICAgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gJ3RhYmxlIGlzIGVtcHR5JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICBtYXAgPSBtYXBwaW5nO1xyXG4gICAgICAgIHRhYmxlSGVhZCA9IG5hbWVPZkNvbDtcclxuXHJcbiAgICAgICAgbGV0IGFyciA9IG1hcFtPYmplY3Qua2V5cyhtYXApWzBdXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihhcnJbaV0pICE9ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2FycltpXV0gPSBbXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdWJBcnIgPSBhcnJbaV1bT2JqZWN0LmtleXMoYXJyW2ldKV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YkFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbc3ViQXJyW2pdXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuXHJcbiAgICBsZXQgZmlsdGVyQW5kU29ydEFuZFBhZ2luVGFibGUgPSBmaWx0ZXJBbmRTb3J0QW5kUGFnaW5UYWJsZUNyZWF0ZXIoZGF0YSwgbWFwLCBuYW1lT2ZDb2wsIHRhYmxlSGVhZCwgdGFibGUsIGFtb3VudE9mUm93KTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZUNvbnRlbnQgPSBmdW5jdGlvbihjb250ZW50LCBmaWx0ZXIpIHtcclxuICAgICAgICBmaWx0ZXJBbmRTb3J0QW5kUGFnaW5UYWJsZShjb250ZW50LCBmaWx0ZXIpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB0cmFuc2Zvcm1EYXRhRnVuYyBmcm9tICcuL3RyYW5zZm9ybURhdGFGdW5jJztcclxuaW1wb3J0IHNvcnRBbmRQYWdpblRhYmxlQ3JlYXRlciBmcm9tICcuL3NvcnRBbmRQYWdpblRhYmxlQ3JlYXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJBbmRTb3J0QW5kUGFnaW5UYWJsZUNyZWF0ZXIoZGF0YSwgbWFwLCBuYW1lT2ZDb2wsIHRhYmxlSGVhZCwgdGFibGUsIGFtb3VudE9mUm93KSB7XHJcbiAgICBcclxuICAgIGxldCB0cmFuc2Zvcm1EYXRhID0gdHJhbnNmb3JtRGF0YUZ1bmMoZGF0YSwgbWFwKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGVudCwgZmlsdGVyKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXS5sZW5ndGggJiYgY29udGVudCA9PSBudWxsKSB7ICAvLyAg0J/RgNC10LrRgNCw0YnQtdC90LjQtSDQstGL0L/QvtC70L3QtdC90LjRjywg0LXRgdC70Lgg0YTQuNC70YzRgtGA0LDRhtC40Y8g0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQv9GA0Lgg0L7RgtGB0YPRgtGB0YLQstC40Lgg0LTQsNC90L3Ri9GFXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvcGllZERhdGEgPSB7fTtcclxuICAgICAgICBpZiAoZmlsdGVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1EYXRhKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29waWVkRGF0YVtrZXldID0gZGF0YVtrZXldLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvcGllZERhdGFba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0ubGVuZ3RoOyBpKyspIHsgICBcclxuICAgICAgICAgICAgICAgIGxldCBpc1Jvd0FwcHJvcHJpYXRlID0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV1baV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV1baV0gPSBkYXRhW2tleV1baV0gKyAnJzsgIC8vINCU0LvRjyDQv9C10YDQtdCy0L7QtNCwINCyINGB0YLRgNC+0LrQuCDRh9C40YHQtdC7INC4INC70L7Qs9C40YfQtdGB0LrQuNGFINC30L3QsNGH0LXQvdC40LlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoZmlsdGVyLCAnaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldW2ldLnNlYXJjaChyZWdFeHApID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUm93QXBwcm9wcmlhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSb3dBcHByb3ByaWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcGllZERhdGFba2V5XS5wdXNoKGRhdGFba2V5XVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzb3J0QW5kUGFnaW5UYWJsZSA9IHNvcnRBbmRQYWdpblRhYmxlQ3JlYXRlcihjb3BpZWREYXRhLCBuYW1lT2ZDb2wsIHRhYmxlSGVhZCwgdGFibGUsIGFtb3VudE9mUm93KTtcclxuICAgICAgICBzb3J0QW5kUGFnaW5UYWJsZSgpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTWFrZUFGb3JtIGZyb20gJy4vTWFrZUFGb3JtJztcclxuaW1wb3J0IEJpY3ljbGVUYWJsZUNyZWF0b3IgZnJvbSAnLi9NYWtlQVRhYmxlJztcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QocGFyYW0pIHtcclxuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkuaGgucnUvdmFjYW5jaWVzP3RleHQ9JHtwYXJhbX1gO1xyXG4gICAgZmV0Y2goIHVybCwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH1cclxuICAgICkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKG15SnNvbikge1xyXG4gICAgICAgIG5ld1RhYmxlLmNoYW5nZUNvbnRlbnQobXlKc29uKTtcclxuICAgICAgICBmaWx0ZXJGb3JtLmNsZWFyRmllbGRzKDEsIDEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmxldCBtYXAgPSB7aXRlbXM6IFsgIC8vINCh0YLRgNGD0LrRgtGD0YDQsCDQtNCw0L3QvdGL0YUgKNCf0YPRgtGMINC6INC80LDRgdGB0LjQstGDINGBINC00LDQvdC90YvQvNC4INCyINC/0YDQuNGF0L7QtNGP0YnQtdC8INC+0YLQstC10YLQtSDQuCDQvNCw0YHRgdC40LIg0LrQu9GO0YfQtdC5INC+0LHRitC10LrRgtC+0LIt0Y3Qu9C10LzQtdC90YLQvtCyINC80LDRgdGB0LjQstCwKVxyXG4gICAgeyAnc25pcHBldCcgOiBbJ3JlcXVpcmVtZW50JywgJ3Jlc3BvbnNpYmlsaXR5J10gfSxcclxuICAgIHsgJ3NhbGFyeSc6IFsnY3VycmVuY3knLCAndG8nLCAnZnJvbScsICdncm9zcyddIH0sXHJcbiAgICAnbmFtZScsXHJcbiAgICAvLyAnYXBwbHlfYWx0ZXJuYXRlX3VybCcsXHJcbl19O1xyXG5cclxubGV0IG5hbWVPZkNvbCA9IG5ldyBNYXAoWyAgLy8g0J/QvtGA0Y/QtNC+0Log0Y3Qu9C10LzQtdC90YLQvtCyINC40LzQtdC10YIg0LfQvdCw0YfQtdC90LjQtVxyXG4gICAgWyduYW1lJywgJ9Cd0LDQt9Cy0LDQvdC40LUnXSxcclxuICAgIFsncmVzcG9uc2liaWxpdHknLCAn0KHRg9GC0YwnXSxcclxuICAgIFsncmVxdWlyZW1lbnQnLCAn0KLRgNC10LHQvtCy0LDQvdC40Y8nXSxcclxuICAgIFsnZnJvbScsICfQntGCJ10sXHJcbiAgICBbJ3RvJywgJ9CU0L4nXSxcclxuICAgIFsnY3VycmVuY3knLCAn0JLQsNC70Y7RgtCwJ10sXHJcbiAgICBbJ2dyb3NzJywgJ9CU0L4g0LLRi9GH0LXRgtC+0LInXSxcclxuICAgIC8vIFsnYXBwbHlfYWx0ZXJuYXRlX3VybCcsICfQodGB0YvQu9C60LAnXVxyXG5dKTtcclxuXHJcbmxldCBmb3JtID0gbmV3IE1ha2VBRm9ybShyZXF1ZXN0LCAn0JrQu9GO0YfQtdCy0L7QtSDRgdC70L7QstC+INC00LvRjyDQv9C+0LjRgdC60LA6ICcsICfQn9C+0LjRgdC6INC/0YDQvtC40LfQstC10LTRkdC9INC/0L4g0YHQu9C+0LLRgzogJywgJ9Cf0L7QuNGB0LonKTsgLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xyXG4vLyBuZXcgTWFrZUFGb3JtKHJlcXVlc3QsICfQmtC70Y7Rh9C10LLQvtC1INGB0LvQvtCy0L4g0LTQu9GPINC/0L7QuNGB0LrQsDogJyk7XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIocGFyYW0pIHtcclxuICAgIG5ld1RhYmxlLmNoYW5nZUNvbnRlbnQobnVsbCwgcGFyYW0pO1xyXG59XHJcblxyXG5sZXQgZmlsdGVyRm9ybSA9IG5ldyBNYWtlQUZvcm0oZmlsdGVyLCAn0KTQuNC70YzRgtGA0L7QstCw0YLRjCDQtNCw0L3QvdGL0LUg0L/QviDRgdC70L7QstGDOiAnLCAn0KTQuNC70YzRgtGA0LDRhtC40Y8g0L/RgNC+0LjQt9Cy0LXQtNC10L3QsCDQv9C+INGB0LvQvtCy0YM6ICcsICfQpNC40LvRjNGC0YDQvtCy0LDRgtGMJyk7XHJcblxyXG5sZXQgbmV3VGFibGUgPSBuZXcgQmljeWNsZVRhYmxlQ3JlYXRvcigndGFibGUnLCBtYXAsIG5hbWVPZkNvbCwgMyk7IiwiaW1wb3J0IHRhYmxlQ3JlYXRlciBmcm9tICcuL3RhYmxlQ3JlYXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpblRhYmxlQ3JlYXRlcihjb3BpZWREYXRhLCB0YWJsZUhlYWQsIHRhYmxlLCBhbW91bnRPZlJvdykgeyAgLy8g0J/QtdGA0LXQuNC80LXQvdC+0LLQsNGC0YwgY29waWVkRGF0YSDQsiBkYXRhIFxyXG4gICAgbGV0IGNyZWF0ZVRhYmxlID0gdGFibGVDcmVhdGVyKGNvcGllZERhdGEsIHRhYmxlSGVhZCwgdGFibGUpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhcHRpb24nKVswXSkge1xyXG4gICAgICAgICAgICB0YWJsZS5yZW1vdmVDaGlsZCh0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FwdGlvbicpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcHRpb24nKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbGVuZ3RoT2ZEYXRhID0gY29waWVkRGF0YVtPYmplY3Qua2V5cyhjb3BpZWREYXRhKVswXV0ubGVuZ3RoO1xyXG4gICAgICAgIGxldCBtYXhQYWdlID0gbGVuZ3RoT2ZEYXRhICUgYW1vdW50T2ZSb3cgPT0gMCA/IGxlbmd0aE9mRGF0YSAvIGFtb3VudE9mUm93IDogTWF0aC50cnVuYyhsZW5ndGhPZkRhdGEgLyBhbW91bnRPZlJvdykgKyAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4UGFnZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IGkgKyAxO1xyXG4gICAgICAgICAgICBpID09IDAgPyBzcGFuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJykgOiBudWxsOyAgLy8g0KXQvi3RhdC+XHJcbiAgICAgICAgICAgIGNhcHRpb24uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrICkge1xyXG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgaWYgKGkpIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJ9Ch0LvQtdC00YPRjtGJ0LDRjyc7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlID09IDEgfHwgbWF4UGFnZSA9PSAwID8gc3Bhbi5jbGFzc0xpc3QuYWRkKCdhcnJvd19kaXNhYmxlJykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgY2FwdGlvbi5hcHBlbmQoc3Bhbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9ICfQn9GA0LXQtNC40LTRg9GJ0LDRjyc7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdhcnJvd19kaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uLnByZXBlbmQoc3Bhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYXB0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7ICAvLyAg0J/RgNC+0LTQtdC70LXQs9C40YDRg9C10Lwg0YHQvtCx0YvRgtC40Y9cclxuICAgICAgICAgICAgaWYgKGNhcHRpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKS5sZW5ndGggPT0gMCB8fCBjYXB0aW9uLmNoaWxkcmVuLmxlbmd0aCA9PSAzKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oK2UudGFyZ2V0LmlubmVySFRNTCkpIHtcclxuICAgICAgICAgICAgICAgIGNhcHRpb24uZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvd19kaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvd19kaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGNhcHRpb24uY2hpbGRyZW5bK2UudGFyZ2V0LmlubmVySFRNTF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLmNoYW5nZVBhZ2UgPSArZS50YXJnZXQuaW5uZXJIVE1MIC0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PSBjYXB0aW9uLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UuY3VycmVudFBhZ2UgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLmNoYW5nZVBhZ2UgPSByYW5nZS5jdXJyZW50UGFnZSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbi5jaGlsZHJlbltyYW5nZS5jdXJyZW50UGFnZSArIDFdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXB0aW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJylbMF0uaW5uZXJIVE1MID09IGNhcHRpb24uY2hpbGRyZW4ubGVuZ3RoIC0gMikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLmNoYW5nZVBhZ2UgPSByYW5nZS5jdXJyZW50UGFnZSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbi5jaGlsZHJlbltyYW5nZS5jdXJyZW50UGFnZSArIDFdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJhbmdlLmN1cnJlbnRQYWdlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNhcHRpb24uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhcnJvd19kaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UuY3VycmVudFBhZ2UgPT0gY2FwdGlvbi5jaGlsZHJlbi5sZW5ndGggLSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhcnJvd19kaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYXJyb3dfZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY2FwdGlvbi5sYXN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYXJyb3dfZGlzYWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZVRhYmxlKHJhbmdlKTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNhcHRpb24pO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHJhbmdlID0ge1xyXG4gICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgZW5kOiBhbW91bnRPZlJvdyxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHNldCBjaGFuZ2VQYWdlKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSA9IHZhbHVlIDwgMCA/IDAgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB2YWx1ZSphbW91bnRPZlJvdztcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kID0gdmFsdWUqYW1vdW50T2ZSb3cgKyBhbW91bnRPZlJvdztcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNyZWF0ZVRhYmxlKHJhbmdlKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgcGFnaW5UYWJsZUNyZWF0ZXIgZnJvbSAnLi9wYWdpblRhYmxlQ3JlYXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0QW5kUGFnaW5UYWJsZUNyZWF0ZXIoZGF0YSwgbmFtZU9mQ29sLCB0YWJsZUhlYWQsIHRhYmxlLCBhbW91bnRPZlJvdykge1xyXG4gICAgXHJcbiAgICBsZXQgY29waWVkRGF0YSA9IHt9O1xyXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBjb3BpZWREYXRhW2tleV0gPSBkYXRhW2tleV0ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFnaW5UYWJsZSA9IHBhZ2luVGFibGVDcmVhdGVyKGNvcGllZERhdGEsIHRhYmxlSGVhZCwgdGFibGUsIGFtb3VudE9mUm93KTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGxldCBvcmRlck9mU29ydEFuZENvbCA9IHtcclxuICAgICAgICAgICAgb3JkZXI6IDAsXHJcbiAgICAgICAgICAgIGNvbE5hbWU6ICcnXHJcbiAgICAgICAgfTsgXHJcblxyXG4gICAgICAgIHBhZ2luVGFibGUoKTtcclxuXHJcbiAgICAgICAgdGFibGUub25jbGljayA9IGZ1bmN0aW9uIHNvcnRpbmcoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9ICdUSEVBRCcpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyT2ZTb3J0QW5kQ29sLmNvbE5hbWUgIT0gZS50YXJnZXQuaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJPZlNvcnRBbmRDb2wub3JkZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyT2ZTb3J0QW5kQ29sLmNvbE5hbWUgPSBlLnRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNvcnRGb3JDb2x1bW47ICAvLyDQntC/0YDQtdC00LXQu9C10L3QuNC1INC90LDQttCw0YLQvtCz0L4g0YHRgtC+0LvQsdGG0LBcclxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgbmFtZU9mQ29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MID09IHZhbHVlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZvckNvbHVtbiA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzb3J0KGNvcGllZERhdGEsIGNvdW50KSB7ICAvLyDQpC3RhtC40Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0L7QsdGK0LXQutGC0LAg0LTQsNC90L3Ri9GFXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9yZGVyT2ZTb3J0QW5kQ29sLm9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJPZlNvcnRBbmRDb2wub3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyT2ZTb3J0QW5kQ29sLm9yZGVyID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyT2ZTb3J0QW5kQ29sLm9yZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29waWVkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3BpZWREYXRhW2tleV0gPSBkYXRhW2tleV0ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpblRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2lvbihjb3BpZWREYXRhLCBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSB1bmRlZmluZWQpIGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IGNvcGllZERhdGFbc29ydEZvckNvbHVtbl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2ZNYXhFbGVtID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoIC0gY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCthcnJbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArYXJyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgK2FycltpbmRleE9mTWF4RWxlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvcmRlck9mU29ydEFuZENvbC5vcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldID4gYXJyW2luZGV4T2ZNYXhFbGVtXSkgeyAgLy8gPiDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleE9mTWF4RWxlbSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0gPCBhcnJbaW5kZXhPZk1heEVsZW1dKSB7ICAvLyA8INC/0L4g0YPQsdGL0LLQsNC90LjRjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4T2ZNYXhFbGVtID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnVmID0gYXJyW2Fyci5sZW5ndGggLSAxIC0gY291bnRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyclthcnIubGVuZ3RoIC0gMSAtIGNvdW50XSA9IGFycltpbmRleE9mTWF4RWxlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyW2luZGV4T2ZNYXhFbGVtXSA9IGJ1ZjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIG5hbWVPZkNvbC5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PSBzb3J0Rm9yQ29sdW1uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZiA9IGNvcGllZERhdGFba2V5XVthcnIubGVuZ3RoIC0gMSAtIGNvdW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29waWVkRGF0YVtrZXldW2Fyci5sZW5ndGggLSAxIC0gY291bnRdID0gY29waWVkRGF0YVtrZXldW2luZGV4T2ZNYXhFbGVtXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29waWVkRGF0YVtrZXldW2luZGV4T2ZNYXhFbGVtXSA9IGJ1ZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50IDwgYXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaW9uKGNvcGllZERhdGEsIGNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWN1cnNpb24oY29waWVkRGF0YSwgY291bnQpOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvcnQoY29waWVkRGF0YSk7XHJcbiAgICAgICAgICAgIHBhZ2luVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlbGVjdGVkQ29sbCgpIHsgIC8vICDQpC3RhtC40Y8g0LTQu9GPINC/0L7QtNGB0LLQtdGC0LrQuCDQstGL0LHRgNCw0L3QvdGL0YUg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4INGB0YLQvtC70LHRhtC+0LJcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFibGUnKVswXS50SGVhZC5maXJzdENoaWxkLmNoaWxkcmVuLCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlubmVySFRNTCA9PSBvcmRlck9mU29ydEFuZENvbC5jb2xOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChvcmRlck9mU29ydEFuZENvbC5vcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRfMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxlY3RlZENvbGwoKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhYmxlQ3JlYXRlcihkYXRhLCB0YWJsZUhlYWQsIHRhYmxlKSB7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFuZ2UpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5nZS5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgbGV0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgICAgICBsZXQgY29sdW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHRhYmxlSGVhZC52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBsZXQgbmFtZU9mQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICAgICAgbmFtZU9mQ29sdW1uLmlubmVyVGV4dCA9IHByb3A7XHJcbiAgICAgICAgICAgIGNvbHVtcy5hcHBlbmRDaGlsZChuYW1lT2ZDb2x1bW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGVhZC5hcHBlbmRDaGlsZChjb2x1bXMpO1xyXG4gICAgICAgIHRhYmxlLmNoaWxkTm9kZXNbMF0ucmVwbGFjZVdpdGgodGhlYWQpO1xyXG5cclxuICAgICAgICBsZXQgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2Uuc3RhcnQ7IGkgPCByYW5nZS5lbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIHRhYmxlSGVhZC5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gZGF0YVtrZXldW2ldID09IHVuZGVmaW5lZCA/IG51bGwgOiBkYXRhW2tleV1baV07XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhYmxlLnRCb2RpZXMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgdGFibGUudEJvZGllc1swXS5yZXBsYWNlV2l0aCh0Ym9keSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhRnVuYyhkYXRhLCBtYXApIHsgIC8vICBjb3BpZWREYXRhIFxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICBpZiAoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0ubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhcnJPZkRhdGEgPSBjb250ZW50W09iamVjdC5rZXlzKGNvbnRlbnQpWzBdXTtcclxuXHJcbiAgICAgICAgYXJyT2ZEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbWFwW09iamVjdC5rZXlzKG1hcClbMF1dLmZvckVhY2goKGl0ZW0yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGl0ZW0yKSAhPSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaXRlbTJdLnB1c2goaXRlbS5oYXNPd25Qcm9wZXJ0eShpdGVtMikgPyBpdGVtW2l0ZW0yXSA6ICctLS0nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVPZkNvbXBsZXhQcm9wID0gT2JqZWN0LmtleXMoaXRlbTIpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yW09iamVjdC5rZXlzKGl0ZW0yKVswXV0uZm9yRWFjaCgoaXRlbTIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpdGVtMl0ucHVzaChpdGVtW25hbWVPZkNvbXBsZXhQcm9wXSA9PSBudWxsID8gbnVsbCA6IGl0ZW1bbmFtZU9mQ29tcGxleFByb3BdLmhhc093blByb3BlcnR5KGl0ZW0yKSA/IGl0ZW1bbmFtZU9mQ29tcGxleFByb3BdW2l0ZW0yXSA6IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==