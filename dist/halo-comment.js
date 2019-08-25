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
/******/ 	return __webpack_require__(__webpack_require__.s = "2e76");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00d5":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("01f5");
var call = __webpack_require__("8bbc");
var isArrayIter = __webpack_require__("c847");
var anObject = __webpack_require__("a013");
var toLength = __webpack_require__("b146");
var getIterFn = __webpack_require__("1a9b");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "019a":
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__("8ef3"),
      utf8 = __webpack_require__("5c53").utf8,
      isBuffer = __webpack_require__("50aa"),
      bin = __webpack_require__("5c53").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "01f5":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("648a");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("28e0");
var isBuffer = __webpack_require__("1135");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "02c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "03b3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "046d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "04c3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, ".comment-fade-enter-active[data-v-af50c9c8],.comment-fade-leave-active[data-v-af50c9c8]{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.comment-fade-enter[data-v-af50c9c8],.comment-fade-leave-to[data-v-af50c9c8]{opacity:0}", ""]);

// exports


/***/ }),

/***/ "0669":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, ".halo-comment *{font-family:-apple-system,BlinkMacSystemFont,System Latin,System Emoji,System SC,sans-serif;outline:none;font-size:13px;line-height:1.5;padding:0;margin:0}.halo-comment ::-webkit-scrollbar{width:6px;height:6px;background-color:#eee}.halo-comment ::-webkit-scrollbar-thumb{background-color:#1890ff}.halo-comment ::-webkit-scrollbar-track{background-color:#eee}.halo-comment :after,.halo-comment :before{-webkit-box-sizing:border-box;box-sizing:border-box}.halo-comment .alert{border-radius:4px;padding:8px 16px;background-color:#f44336;color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.halo-comment .alert.success{background-color:#4caf50}.halo-comment .alert.info{background-color:#2196f3}.halo-comment .alert.warning{background-color:#ff9800}.halo-comment .closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:16px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.halo-comment .closebtn:hover{color:#000}.halo-comment .comment-placeholder{cursor:text;margin-bottom:10px;border:2px dashed #ededed;border-radius:8px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.halo-comment .comment-placeholder:hover{border:2px dashed #3b83ee}.halo-comment .comment-placeholder .comment-item{padding-top:15px;position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.halo-comment .comment-placeholder .comment-item .comment-item-author-avatar{float:left;width:56px;height:56px;border-radius:56px;line-height:56px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;margin-left:12px;margin-right:12px;border:1px solid #f5f5f5}.halo-comment .comment-placeholder .comment-item .comment-item-main{overflow:hidden;padding-bottom:.5rem;color:#555}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-header .header-author{position:relative;margin-right:10px;cursor:pointer;display:inline-block;font-size:16px;font-weight:700;color:#2c2e31;text-decoration:none}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-content{word-wrap:break-word;word-break:break-all;text-align:justify;position:relative;margin-bottom:6px;padding-top:6px}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-content p{line-height:2;font-size:16px;color:#667c99}.halo-comment .comment-items{padding:0 12px}.halo-comment .comment-items .comment-item{padding-top:15px;position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;border-bottom:1px solid #e8ecf3}.halo-comment .comment-items .comment-item .comment-item-author-avatar{float:left;width:56px;height:56px;border-radius:56px;line-height:56px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;margin-right:12px;border:1px solid #f5f5f5}.halo-comment .comment-items .comment-item .comment-item-main{overflow:hidden;padding-bottom:.5rem;color:#555}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author{position:relative;margin-right:10px;cursor:pointer;display:inline-block}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author a{font-size:15px;font-weight:700;color:#111;text-decoration:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author:before{content:\"\";position:absolute;bottom:0;left:0;right:0;height:2px;background-color:#565656;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author:hover:before{-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-time{position:relative;font-size:13px;color:#667c99;display:inline-block}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-id{float:right;font-size:13px;color:#667c99}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content{word-wrap:break-word;word-break:break-all;text-align:justify;position:relative;margin-bottom:6px;padding-top:6px}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content a{text-decoration:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content .content-at-id{font-size:13px;color:#1890ff;font-weight:500}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content p{overflow:auto;line-height:2;font-size:14px;color:#111}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols{float:right;position:relative}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul{list-style-type:none;padding:0;margin:0}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li{margin-right:0;margin-left:-5px;display:inline-block;vertical-align:top}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-more,.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-reply{display:inline-block;margin-bottom:0;text-align:center;vertical-align:middle;cursor:pointer;white-space:nowrap;padding:6px 12px;color:#667c99;border:none;background:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-more:hover,.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-reply:hover{color:#0084fe}.halo-comment .comment-items .comment-item .comment-item-children{margin-left:4rem;padding-left:1rem;border-left:.1rem solid cccccc;padding-left:0;padding-right:0}.halo-comment .comment-modal{position:fixed;bottom:0;left:0;right:0;width:100%;height:100%;z-index:2147483647;background-color:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.halo-comment .comment-modal .comment-modal-container{width:768px;position:relative}.halo-comment .comment-modal .comment-modal-container .comment-poster-editor-emoji{-webkit-box-shadow:0 2px 6px rgba(0,0,0,.35);box-shadow:0 2px 6px rgba(0,0,0,.35);position:absolute;bottom:58px;left:19%;z-index:1}.halo-comment .comment-modal .comment-modal-container #EmojiPicker{height:364px;width:100%}.halo-comment .comment-modal .comment-modal-container .comment-poster-container{border-radius:4px 4px 0 0;background:hsla(0,0%,100%,.95);-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;pointer-events:auto;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.35);box-shadow:0 2px 6px rgba(0,0,0,.35);height:248px;bottom:-248px;display:none}.halo-comment .comment-modal .comment-modal-container .comment-poster-container.active{height:265px;bottom:0;display:block}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls{position:absolute;right:10px;top:10px;z-index:1;list-style:none;padding:0;margin:0}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls li{display:inline-block}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls .editor-btn-close{float:right;font-size:28px;font-weight:700;font-family:inherit;color:#667c99;padding:.2rem .8rem;outline:none;border:none;background-color:transparent;border-radius:4px;cursor:pointer}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls .editor-btn-close:hover{background-color:#d7dfea;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main{padding:20px 20px 0}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-avatar{float:left;width:64px;height:64px;border-radius:64px;line-height:64px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;border:1px solid #f5f5f5}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content{margin-left:85px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header{list-style:none;padding:1px 0;margin:0 0 10px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li{position:relative;display:inline-block;margin-right:-4px;width:33.3%}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input{width:100%;color:#667c99;font-size:14px;font-family:inherit;background-color:transparent;border:1px solid transparent;border-bottom-color:rgba(61,239,255,.2)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-webkit-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-moz-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input:-ms-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-ms-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input:focus~span{-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li span{position:absolute;bottom:0;left:0;right:0;height:1px;background-color:#555;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-reply{max-height:18px;border-left:2px solid #667c99;padding:0 5px;color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-reply small{color:#0084fe}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-wrapper{position:relative}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-wrapper textarea{display:block;width:100%;background:none;border-radius:0;padding:0 0 10px;border:0;resize:none;color:#111;font-size:14px;line-height:1.7}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls{margin:0 -20px 0 -105px;padding:10px 20px;border-top:1px solid #e8ecf3;list-style-type:none;overflow-x:auto;white-space:nowrap}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls li{display:inline-block;margin-right:10px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply{font-size:inherit;font-family:inherit;color:#fff;padding:.5em 1em;outline:none;border:none;background-color:#1890ff;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply:hover{background-color:#0084fe;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply:disabled{background-color:#d8d8d8;color:#fff;cursor:not-allowed}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-preview{font-size:inherit;font-family:inherit;color:#667c99;padding:.5em 1em;outline:none;border:none;background-color:#e8ecf3;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-preview:hover{background-color:#d7dfea;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-emoji{font-size:inherit;font-family:inherit;color:#667c99;padding:.5em 1em;outline:none;border:none;background-color:#e8ecf3;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-emoji:hover{background-color:#d7dfea;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}@media screen and (max-width:768px){.halo-comment .comment-modal .comment-modal-container{width:100%}}.halo-comment .comment-loader-container{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0}.halo-comment .comment-loader-container .comment-loader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:2em}.halo-comment .comment-loader-container .comment-loader span{width:.3em;height:1em;background-color:#3b83ee}.halo-comment .comment-loader-container .comment-loader span:first-of-type{-webkit-animation:grow 1s ease-in-out -.45s infinite;animation:grow 1s ease-in-out -.45s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(2){-webkit-animation:grow 1s ease-in-out -.3s infinite;animation:grow 1s ease-in-out -.3s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(3){-webkit-animation:grow 1s ease-in-out -.15s infinite;animation:grow 1s ease-in-out -.15s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(4){-webkit-animation:grow 1s ease-in-out infinite;animation:grow 1s ease-in-out infinite}@-webkit-keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}@keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}.halo-comment .loading-fade-enter-active,.halo-comment .loading-fade-leave-active{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.halo-comment .loading-fade-enter,.halo-comment .loading-fade-leave-to{opacity:0}.halo-comment .comment-pagination{margin-top:20px;text-align:center}.halo-comment .comment-pagination .pagination{display:inline-block;padding:0;margin:0}.halo-comment .comment-pagination .pagination li{display:inline}.halo-comment .comment-pagination .pagination button{z-index:1;position:relative;font-size:inherit;font-family:inherit;color:#000;padding:.5em 1em;outline:none;border:0;background-color:#fff}.halo-comment .comment-pagination .pagination button:before{content:\"\";z-index:-1;position:absolute;top:0;bottom:0;left:0;right:0;background-color:#3b83ee;-webkit-transform-origin:center top;transform-origin:center top;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transition:-webkit-transform .25s ease-in-out;transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.halo-comment .comment-pagination .pagination button:hover{color:#fff;cursor:pointer}.halo-comment .comment-pagination .pagination button:hover:before{-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:scaleY(1);transform:scaleY(1)}.halo-comment .comment-pagination .pagination .prev-button:before{-webkit-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(0);transform:scaleX(0)}.halo-comment .comment-pagination .pagination .prev-button:hover:before{-webkit-transform-origin:center right;transform-origin:center right;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-pagination .pagination .next-button:before{-webkit-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(0);transform:scaleX(0)}.halo-comment .comment-pagination .pagination .next-button:hover:before{-webkit-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-pagination .pagination .active{background-color:#3b83ee;color:#fff}.modal-fade-enter,.modal-fade-leave-active{opacity:0}.modal-fade-enter-active,.modal-fade-leave-active{-webkit-transition:opacity .5s ease;transition:opacity .5s ease}", ""]);

// exports


/***/ }),

/***/ "0d5f":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("a013");
var aFunction = __webpack_require__("648a");
var SPECIES = __webpack_require__("8b37")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "0e44":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("88dd");
var anObject = __webpack_require__("a013");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("01f5")(Function.call, __webpack_require__("acb9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "0f51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "1135":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "14fc":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "173d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("a44d");
var utils = __webpack_require__("0260");
var InterceptorManager = __webpack_require__("0f51");
var dispatchRequest = __webpack_require__("96e2");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "190f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "1a9b":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("4819");
var ITERATOR = __webpack_require__("8b37")('iterator');
var Iterators = __webpack_require__("14fc");
module.exports = __webpack_require__("a4cc").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "1f98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("f425");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "22e9":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("88dd");
var cof = __webpack_require__("94ac");
var MATCH = __webpack_require__("8b37")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "2497":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0057":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ff12");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0547":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#VSvg[data-v-0c34d3e0]{display:inline-block;vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ "2350":
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

/***/ "26cc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7710");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f9920f70", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2bed":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#EmojiPicker[data-v-774a9568]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:DejaVu Sans,sans-serif;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f0f0f0;border-radius:4px;border:1px solid #e4e4e4;overflow:hidden;width:325px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);

// exports


/***/ }),

/***/ "324b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_640e8d29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a839");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_640e8d29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_640e8d29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_640e8d29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "6347":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("26cc");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7710":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#InputSearch[data-v-53790c21]{display:block;width:100%;max-width:100%}.container-search[data-v-53790c21]{display:block;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:5px 0;padding:0 5%}.container-search[data-v-53790c21],.container-search input[data-v-53790c21]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.container-search input[data-v-53790c21]{font-size:14px;padding:8px;border-radius:8px;background:#f6f6f6;color:#4a4a4a;border:1px solid #e2e2e2}", ""]);

// exports


/***/ }),

/***/ "7803":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d64e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "79a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d7ec");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272f7203-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=template&id=774a9568&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"EmojiPicker"}},[(_vm.showCategory)?_c('Categories',{on:{"select":function($event){return _vm.onChangeCategory($event)}}}):_vm._e(),(_vm.showSearch)?_c('InputSearch',{attrs:{"placeholder":_vm.labelSearch},model:{value:(_vm.filterEmoji),callback:function ($$v) {_vm.filterEmoji=$$v},expression:"filterEmoji"}}):_vm._e(),_c('EmojiList',{attrs:{"data":_vm.emojis,"category":_vm.category,"filter":_vm.filterEmoji,"emojisByRow":_vm.emojisByRow,"continuousList":_vm.continuousList},on:{"select":function($event){return _vm.onSelectEmoji($event)}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=template&id=774a9568&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272f7203-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Categories.vue?vue&type=template&id=ec684a60&scoped=true&
var Categoriesvue_type_template_id_ec684a60_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(categorie,index){return _c('div',{key:index,class:['category', { active: index === _vm.active }],on:{"click":function($event){return _vm.onSelect(index)}}},[_c('VSvg',{attrs:{"name":categorie.icon}})],1)}),0)}
var Categoriesvue_type_template_id_ec684a60_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/Categories.vue?vue&type=template&id=ec684a60&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272f7203-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VSvg.vue?vue&type=template&id=0c34d3e0&scoped=true&
var VSvgvue_type_template_id_0c34d3e0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{style:(_vm.styleSVG),attrs:{"id":"VSvg"},domProps:{"innerHTML":_vm._s(_vm.icon)}})}
var VSvgvue_type_template_id_0c34d3e0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/VSvg.vue?vue&type=template&id=0c34d3e0&scoped=true&

// CONCATENATED MODULE: ./src/components/VEmojiPicker/_icons.js
var categories = {
  activity: "\n  <svg style=\"max-height:18px\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 303.6 303.6\" fill=\"gray\">\n  <path d=\"M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z\"/>\n  <path d=\"M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z\"/>\n  </svg>\n  ",
  flags: "\n  <svg style=\"max-height:18px\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" fill=\"gray\">\n  <path d=\"M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z\"/>\n  </svg>\n  ",
  foods: "\n  <svg style=\"max-height:18px\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.999 511.999\" fill=\"gray\">\n  <path d=\"M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z\"/>\n  <path d=\"M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z\"/>\n  </svg>\n  ",
  frequenty: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.15 219.15\" width=\"24\" height=\"24\" fill=\"gray\">\n  <path d=\"M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z\"/>\n  <path d=\"M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z\"/>\n  </svg>\n  ",
  nature: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"24\" height=\"24\" fill=\"gray\">\n  <path d=\"M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z\"/>\n  </svg>\n  ",
  objects: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 792 792\" fill=\"gray\">\n  <path d=\"M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z\"/>\n  </svg>\n  ",
  peoples: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 106.059 106.059\" fill=\"gray\">\n  <path d=\"M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z\"/>\n  </svg>\n  ",
  places: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 611.999 611.998\" fill=\"gray\">\n  <path d=\"M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z\"/>\n  </svg>\n  ",
  symbols: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 511.626 511.626\" fill=\"gray\">\n  <path d=\"M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z\"/>\n  </svg>\n  "
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VSvg.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//

/* harmony default export */ var VSvgvue_type_script_lang_js_ = ({
  name: "VSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    styles: {
      type: Object
    }
  },
  computed: {
    icon: function icon() {
      return categories[this.name];
    },
    styleSVG: function styleSVG() {
      return _objectSpread({}, this.styles);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/VSvg.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_VSvgvue_type_script_lang_js_ = (VSvgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/VSvg.vue?vue&type=style&index=0&id=0c34d3e0&scoped=true&lang=scss&
var VSvgvue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss_ = __webpack_require__("0057");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VEmojiPicker/VSvg.vue






/* normalize component */

var component = normalizeComponent(
  VEmojiPicker_VSvgvue_type_script_lang_js_,
  VSvgvue_type_template_id_0c34d3e0_scoped_true_render,
  VSvgvue_type_template_id_0c34d3e0_scoped_true_staticRenderFns,
  false,
  null,
  "0c34d3e0",
  null
  
)

/* harmony default export */ var VSvg = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Categories.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Categoriesvue_type_script_lang_js_ = ({
  name: "Categories",
  components: {
    VSvg: VSvg
  },
  data: function data() {
    return {
      categories: [{
        name: "Frequenty",
        icon: "frequenty"
      }, {
        name: "Peoples",
        icon: "peoples"
      }, {
        name: "Nature",
        icon: "nature"
      }, {
        name: "Foods",
        icon: "foods"
      }, {
        name: "Activity",
        icon: "activity"
      }, {
        name: "Objects",
        icon: "objects"
      }, {
        name: "Places",
        icon: "places"
      }, {
        name: "Symbols",
        icon: "symbols"
      }, {
        name: "Flags",
        icon: "flags"
      }],
      active: 1
    };
  },
  methods: {
    onSelect: function onSelect(index) {
      this.active = index;
      var _category = this.categories[index];
      this.$emit("select", _category);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/Categories.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_Categoriesvue_type_script_lang_js_ = (Categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/Categories.vue?vue&type=style&index=0&id=ec684a60&lang=scss&scoped=true&
var Categoriesvue_type_style_index_0_id_ec684a60_lang_scss_scoped_true_ = __webpack_require__("7803");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/Categories.vue






/* normalize component */

var Categories_component = normalizeComponent(
  VEmojiPicker_Categoriesvue_type_script_lang_js_,
  Categoriesvue_type_template_id_ec684a60_scoped_true_render,
  Categoriesvue_type_template_id_ec684a60_scoped_true_staticRenderFns,
  false,
  null,
  "ec684a60",
  null
  
)

/* harmony default export */ var Categories = (Categories_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272f7203-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/EmojiList.vue?vue&type=template&id=640e8d29&scoped=true&
var EmojiListvue_type_template_id_640e8d29_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[(_vm.continuousList)?_vm._l((_vm.dataFilteredByCategory),function(category,category_name){return _c('div',{key:category_name,staticClass:"category-line"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(category.length),expression:"category.length"}],ref:category_name,refInFor:true,staticClass:"category-title"},[_vm._v("\n          "+_vm._s(category_name)+"\n        ")]),(category.length)?_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((category),function(emoji,index_e){return _c('Emoji',{key:(category_name + "-" + index_e),attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1):_vm._e()])}):_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((_vm.dataFiltered),function(emoji,index){return _c('Emoji',{key:index,attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)],2)])}
var EmojiListvue_type_template_id_640e8d29_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/EmojiList.vue?vue&type=template&id=640e8d29&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272f7203-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Emoji.vue?vue&type=template&id=12e68b38&scoped=true&
var Emojivue_type_template_id_12e68b38_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"emoji",domProps:{"innerHTML":_vm._s(_vm.data)}})}
var Emojivue_type_template_id_12e68b38_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/Emoji.vue?vue&type=template&id=12e68b38&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Emoji.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Emojivue_type_script_lang_js_ = ({
  name: "Emoji",
  props: {
    data: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/Emoji.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_Emojivue_type_script_lang_js_ = (Emojivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VEmojiPicker/Emoji.vue





/* normalize component */

var Emoji_component = normalizeComponent(
  VEmojiPicker_Emojivue_type_script_lang_js_,
  Emojivue_type_template_id_12e68b38_scoped_true_render,
  Emojivue_type_template_id_12e68b38_scoped_true_staticRenderFns,
  false,
  null,
  "12e68b38",
  null
  
)

/* harmony default export */ var Emoji = (Emoji_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/EmojiList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EmojiListvue_type_script_lang_js_ = ({
  name: "EmojiList",
  components: {
    Emoji: Emoji
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    emojisByRow: {
      type: Number,
      required: true
    },
    filter: {
      type: String
    },
    continuousList: {
      type: Boolean
    },
    category: {
      type: String
    }
  },
  methods: {
    onSelect: function onSelect(emoji) {
      this.$emit("select", emoji);
    }
  },
  computed: {
    gridDynamic: function gridDynamic() {
      var percent = 100 / this.emojisByRow;
      return {
        gridTemplateColumns: "repeat(".concat(this.emojisByRow, ", ").concat(percent, "%)")
      };
    },
    dataFiltered: function dataFiltered() {
      var data = this.data[this.category];
      var searchValue = this.filter.trim();

      if (searchValue) {
        data = data.filter(function (item) {
          return item.aliases.some(function (alias) {
            return alias.includes(searchValue.toLowerCase());
          });
        });
      }

      return data;
    },
    dataFilteredByCategory: function dataFilteredByCategory() {
      var _this = this;

      var _data = Object.assign({}, this.data);

      var searchValue = this.filter.trim();

      if (searchValue) {
        this.categories.forEach(function (category) {
          _data[category] = _this.data[category].filter(function (item) {
            return item.aliases.some(function (alias) {
              return alias.includes(searchValue.toLowerCase());
            });
          });
        });
      }

      return _data;
    },
    categories: function categories() {
      return Object.keys(this.data);
    }
  },
  watch: {
    data: function data() {
      this.$refs["container-emoji"].scrollTop = 0;
    },
    category: function category(new_category) {
      if (this.continuousList) {
        var firstItemCategory = this.$refs[new_category][0];
        var scrollTop = firstItemCategory.offsetTop - 80;
        this.$refs["container-emoji"].scrollTop = scrollTop;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/EmojiList.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_EmojiListvue_type_script_lang_js_ = (EmojiListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/EmojiList.vue?vue&type=style&index=0&id=640e8d29&lang=scss&scoped=true&
var EmojiListvue_type_style_index_0_id_640e8d29_lang_scss_scoped_true_ = __webpack_require__("324b");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/EmojiList.vue






/* normalize component */

var EmojiList_component = normalizeComponent(
  VEmojiPicker_EmojiListvue_type_script_lang_js_,
  EmojiListvue_type_template_id_640e8d29_scoped_true_render,
  EmojiListvue_type_template_id_640e8d29_scoped_true_staticRenderFns,
  false,
  null,
  "640e8d29",
  null
  
)

/* harmony default export */ var EmojiList = (EmojiList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272f7203-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/InputSearch.vue?vue&type=template&id=53790c21&scoped=true&
var InputSearchvue_type_template_id_53790c21_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.onKeyUp($event)}}})])])}
var InputSearchvue_type_template_id_53790c21_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/InputSearch.vue?vue&type=template&id=53790c21&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/InputSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputSearchvue_type_script_lang_js_ = ({
  name: "InputSearch",
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    // Emit value of v-model
    onKeyUp: function onKeyUp(event) {
      this.$emit("input", event.target.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/InputSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_InputSearchvue_type_script_lang_js_ = (InputSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/InputSearch.vue?vue&type=style&index=0&id=53790c21&lang=scss&scoped=true&
var InputSearchvue_type_style_index_0_id_53790c21_lang_scss_scoped_true_ = __webpack_require__("6347");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/InputSearch.vue






/* normalize component */

var InputSearch_component = normalizeComponent(
  VEmojiPicker_InputSearchvue_type_script_lang_js_,
  InputSearchvue_type_template_id_53790c21_scoped_true_render,
  InputSearchvue_type_template_id_53790c21_scoped_true_staticRenderFns,
  false,
  null,
  "53790c21",
  null
  
)

/* harmony default export */ var InputSearch = (InputSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var VEmojiPickervue_type_script_lang_js_ = ({
  name: "VEmojiPicker",
  props: {
    pack: {
      type: Array,
      required: true
    },
    labelSearch: {
      type: String,
      default: "Pesquisar..."
    },
    showCategory: {
      type: Boolean,
      default: true
    },
    emojisByRow: {
      type: Number,
      default: 5
    },
    showSearch: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    continuousList: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  components: {
    Categories: Categories,
    EmojiList: EmojiList,
    InputSearch: InputSearch
  },
  data: function data() {
    return {
      mapEmojis: {},
      category: "Peoples",
      filterEmoji: ""
    };
  },
  created: function created() {
    this.mapperData(this.pack);
  },
  methods: {
    onChangeCategory: function onChangeCategory(category) {
      this.category = category.name;
      this.$emit("changeCategory", this.category);
    },
    onSelectEmoji: function onSelectEmoji(emoji) {
      this.updateFrequenty(emoji);
      this.$emit("select", emoji);
    },
    updateFrequenty: function updateFrequenty(emoji) {
      this.mapEmojis["Frequenty"] = _toConsumableArray(new Set([].concat(_toConsumableArray(this.mapEmojis["Frequenty"]), [emoji])));
    },
    mapperData: function mapperData(dataEmojis) {
      var _this = this;

      this.$set(this.mapEmojis, "Frequenty", []);
      dataEmojis.forEach(function (emoji) {
        var _category = emoji["category"];

        if (!_this.mapEmojis[_category]) {
          _this.$set(_this.mapEmojis, _category, [emoji]);
        } else {
          _this.mapEmojis[_category].push(emoji);
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    delete this.mapEmojis;
  },
  computed: {
    emojis: function emojis() {
      return this.mapEmojis;
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_VEmojiPickervue_type_script_lang_js_ = (VEmojiPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=style&index=0&id=774a9568&lang=scss&scoped=true&
var VEmojiPickervue_type_style_index_0_id_774a9568_lang_scss_scoped_true_ = __webpack_require__("79a4");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue






/* normalize component */

var VEmojiPicker_component = normalizeComponent(
  VEmojiPicker_VEmojiPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "774a9568",
  null
  
)

/* harmony default export */ var VEmojiPicker = __webpack_exports__["a"] = (VEmojiPicker_component.exports);

/***/ }),

/***/ "a839":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c3fe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0a102ab8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return install; });
/* harmony import */ var _components_VEmojiPicker_VEmojiPicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9013");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VEmojiPicker", _components_VEmojiPicker_VEmojiPicker_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (_components_VEmojiPicker_VEmojiPicker_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c3fe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#Emojis[data-v-640e8d29]{display:block;width:100%;max-width:100%}#Emojis[data-v-640e8d29] ::-webkit-scrollbar{border-radius:4px;width:4px;background:hsla(0,0%,48.6%,.36)}#Emojis[data-v-640e8d29] ::-webkit-scrollbar-track{border-radius:4px}#Emojis[data-v-640e8d29] ::-webkit-scrollbar-thumb{border-radius:4px;background:rgba(0,0,0,.22)}#Emojis[data-v-640e8d29] ::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.38)}.container-emoji[data-v-640e8d29]{overflow-x:hidden;overflow-y:scroll;height:350px}.category-title[data-v-640e8d29]{text-transform:uppercase;font-size:.8em;padding:5px 0 0 16px;color:#848484}.category-title[data-v-640e8d29]:not(:first-of-type){padding:10px 0 0 16px}.grid-emojis[data-v-640e8d29]{display:grid;margin:5px 0;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.emoji[data-v-640e8d29]{display:inline-block;text-align:center;font-size:25px;padding:5px;max-height:30px;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d64e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e7b3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2610b8f7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d7ec":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2bed");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("fcd3b8ca", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e7b3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#Categories[data-v-ec684a60]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e4e4e4;background:#f0f0f0;color:#fff}.category[data-v-ec684a60]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-top:5px;padding-bottom:5px;text-align:center;cursor:pointer}.category.active[data-v-ec684a60]{border-bottom:3px solid #009688;-webkit-filter:saturate(3);filter:saturate(3);padding-bottom:2px}.category>img[data-v-ec684a60]{width:22px;height:22px}.category[data-v-ec684a60]:hover{-webkit-filter:saturate(3);filter:saturate(3)}", ""]);

// exports


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/index.js
var src = __webpack_require__("b635");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return src["b" /* install */]; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src["a" /* default */]);



/***/ }),

/***/ "ff12":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0547");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5eb55e04", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
});

/***/ }),

/***/ "265a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3754").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "28e0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "2e76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.11.0@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/_@vue_web-component-wrapper@1.2.0@@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js
var css_base = __webpack_require__("690e");

// EXTERNAL MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("565c");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ce95d72-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/Comment.vue?vue&type=template&id=f5dab5ae&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"halo-comment"},[_c('section',{staticClass:"header",on:{"click":_vm.handleCommentHeaderClick}},[_c('comment-author',{attrs:{"comment":_vm.editingComment,"options":_vm.options}})],1),_c('section',{staticClass:"\n      comment-alert"},[_vm._l((_vm.infoes),function(info,index){return _c('div',{key:index,staticClass:"alert info"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(info))])])}),_vm._l((_vm.successes),function(success,index){return _c('div',{key:index,staticClass:"alert success"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(success))])])}),_vm._l((_vm.warnings),function(warning,index){return _c('div',{key:index,staticClass:"alert warning"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(warning))])])})],2),_c('section',{staticClass:"loading"},[_c('comment-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.commentLoading),expression:"commentLoading"}]})],1),_c('section',{staticClass:"body"},[_c('comment-body',{directives:[{name:"show",rawName:"v-show",value:(!_vm.commentLoading),expression:"!commentLoading"}],attrs:{"comments":_vm.comments,"targetId":_vm.id,"target":_vm.target,"options":_vm.options},on:{"reply":_vm.handleReply}})],1),_c('section',{staticClass:"pagination"},[_c('pagination',{attrs:{"page":_vm.pagination.page,"size":_vm.pagination.size,"total":_vm.pagination.total},on:{"change":_vm.handlePaginationChange}})],1),_c('section',{staticClass:"footer-editor"},[_c('comment-editor',{directives:[{name:"show",rawName:"v-show",value:(_vm.editorVisiable),expression:"editorVisiable"}],attrs:{"targetId":_vm.id,"target":_vm.target,"replyingComment":_vm.replyingComment,"options":_vm.options},on:{"close":_vm.handleEditorClose,"exit":_vm.handleEditorExit,"input":_vm.handleEditorInput,"created":_vm.handleCommentCreated,"failed":_vm.handleFailedToCreateComment}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=template&id=f5dab5ae&shadow

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("f763");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("df67");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ce95d72-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentAuthor.vue?vue&type=template&id=544f0794&
var CommentAuthorvue_type_template_id_544f0794_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-placeholder",attrs:{"id":"comment-author"}},[_c('div',{staticClass:"comment-item"},[(_vm.options.comment_gravatar_default)?_c('img',{staticClass:"comment-item-author-avatar",attrs:{"src":_vm.avatar,"alt":_vm.comment.author}}):_vm._e(),_c('div',{staticClass:"comment-item-main"},[_c('div',{staticClass:"comment-item-header"},[_c('span',{staticClass:"header-author"},[_vm._v("\n          "+_vm._s(_vm.comment.author || '...')+"\n        ")])]),_c('div',{staticClass:"comment-item-content"},[(this.comment.content)?_c('p',{domProps:{"innerHTML":_vm._s(_vm.renderedContent)}}):_c('p',[_vm._v(_vm._s(_vm.options.comment_content_placeholder || '撰写评论...'))])])])])])}
var CommentAuthorvue_type_template_id_544f0794_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentAuthor.vue?vue&type=template&id=544f0794&

// EXTERNAL MODULE: ./node_modules/_marked@0.6.3@marked/lib/marked.js
var marked = __webpack_require__("9036");
var marked_default = /*#__PURE__*/__webpack_require__.n(marked);

// EXTERNAL MODULE: ./node_modules/_md5@2.2.1@md5/md5.js
var md5 = __webpack_require__("019a");
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentAuthor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CommentAuthorvue_type_script_lang_js_ = ({
  props: {
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      required: false,
      default: []
    }
  },
  computed: {
    renderedContent() {
      return this.comment.content ? marked_default()(this.comment.content, {
        sanitize: true
      }) : '';
    },

    avatar() {
      if (!this.comment.email) {
        return '//cn.gravatar.com/avatar?d=' + this.options.comment_gravatar_default;
      }

      var gravatarMd5 = md5_default()(this.comment.email);
      return `//cn.gravatar.com/avatar/${gravatarMd5}?s=256&d=` + this.options.comment_gravatar_default;
    }

  },

  created() {
    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author');
    this.comment.authorUrl = localStorage.getItem('comment-authorUrl');
    this.comment.email = localStorage.getItem('comment-email');
  }

});
// CONCATENATED MODULE: ./src/components/CommentAuthor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentAuthorvue_type_script_lang_js_ = (CommentAuthorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentAuthor.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = normalizeComponent(
  components_CommentAuthorvue_type_script_lang_js_,
  CommentAuthorvue_type_template_id_544f0794_render,
  CommentAuthorvue_type_template_id_544f0794_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentAuthor = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ce95d72-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentBody.vue?vue&type=template&id=af50c9c8&scoped=true&
var CommentBodyvue_type_template_id_af50c9c8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"comment-fade"}},[_c('div',{staticClass:"comment-items"},[_vm._l((_vm.comments),function(comment,index){return [_c('comment-node',{key:index,attrs:{"comment":comment,"targetId":_vm.targetId,"target":_vm.target,"options":_vm.options},on:{"reply":_vm.handleReply}})]})],2)])}
var CommentBodyvue_type_template_id_af50c9c8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentBody.vue?vue&type=template&id=af50c9c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentBody.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentBodyvue_type_script_lang_js_ = ({
  name: 'CommentBody',
  props: {
    comments: {
      type: Array,
      required: false,
      default: () => []
    },
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function validator(value) {
        // The value must match one of these strings
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    options: {
      required: false,
      default: []
    }
  },

  data() {
    return {};
  },

  methods: {
    handleReply(comment, repliedSuccess) {
      this.$emit('reply', comment, repliedSuccess);
    }

  }
});
// CONCATENATED MODULE: ./src/components/CommentBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentBodyvue_type_script_lang_js_ = (CommentBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentBody.vue



function CommentBody_injectStyles (context) {
  
  var style0 = __webpack_require__("fae0")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CommentBody_component = normalizeComponent(
  components_CommentBodyvue_type_script_lang_js_,
  CommentBodyvue_type_template_id_af50c9c8_scoped_true_render,
  CommentBodyvue_type_template_id_af50c9c8_scoped_true_staticRenderFns,
  false,
  CommentBody_injectStyles,
  "af50c9c8",
  null
  ,true
)

/* harmony default export */ var CommentBody = (CommentBody_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ce95d72-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentNode.vue?vue&type=template&id=5f10ce6c&
var CommentNodevue_type_template_id_5f10ce6c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-item",attrs:{"id":_vm.comment.id}},[(_vm.options.comment_gravatar_default)?_c('img',{staticClass:"comment-item-author-avatar",attrs:{"src":_vm.avatar,"alt":_vm.comment.author}}):_vm._e(),_c('div',{staticClass:"comment-item-main"},[_c('div',{staticClass:"comment-item-header"},[_c('span',{staticClass:"header-author"},[(_vm.urlValid)?_c('a',{attrs:{"href":_vm.comment.authorUrl,"target":"_blank"},domProps:{"textContent":_vm._s(_vm.comment.author)}}):_c('a',{attrs:{"href":"javascript:void(0)"},domProps:{"textContent":_vm._s(_vm.comment.author)}})]),_c('span',{staticClass:"header-time"},[_vm._v(_vm._s(_vm.createTimeAgo))]),_c('a',{attrs:{"href":'#'+_vm.comment.id}},[_c('span',{staticClass:"header-id",attrs:{"id":_vm.comment.id}},[_vm._v("\n          #"+_vm._s(_vm.comment.id)+"\n        ")])])]),_c('div',{staticClass:"comment-item-content"},[(_vm.hasParent)?_c('a',{attrs:{"href":'#' + _vm.comment.parentId}},[_c('span',{staticClass:"content-at-id"},[_vm._v("\n          #"+_vm._s(_vm.comment.parentId)+"\n        ")])]):_vm._e(),_c('p',{domProps:{"innerHTML":_vm._s(_vm.compileContent)}})]),_c('div',{staticClass:"comment-item-contols"},[_c('ul',[(_vm.comment.hasChildren)?_c('li',[_c('button',{staticClass:"item-control-more",on:{"click":_vm.handleMoreClick}},[_vm._v("更多")])]):_vm._e(),_c('li',[_c('button',{staticClass:"item-control-reply",on:{"click":_vm.handleReplyClick}},[_vm._v("回复")])])])])]),(_vm.hasChildrenBody)?_c('div',{staticClass:"comment-item-children"},[_c('section',{staticClass:"loading"},[_c('comment-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.commentLoading),expression:"commentLoading"}]})],1),_c('comment-body',{directives:[{name:"show",rawName:"v-show",value:(!_vm.commentLoading),expression:"!commentLoading"}],attrs:{"comments":_vm.children,"targetId":_vm.targetId,"target":_vm.target,"options":_vm.options},on:{"reply":_vm.handleChildReply}})],1):_vm._e()])}
var CommentNodevue_type_template_id_5f10ce6c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentNode.vue?vue&type=template&id=5f10ce6c&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("7c56");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("34a3");

// CONCATENATED MODULE: ./src/utils/util.js



/**
 * time ago
 * @param {*} time
 */
function timeAgo(time) {
  var currentTime = new Date().getTime();
  var between = currentTime - time;
  var days = Math.floor(between / (24 * 3600 * 1000));

  if (days === 0) {
    var leave1 = between % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));

    if (hours === 0) {
      var leave2 = leave1 % (3600 * 1000);
      var minutes = Math.floor(leave2 / (60 * 1000));

      if (minutes === 0) {
        var leave3 = leave2 % (60 * 1000);
        var seconds = Math.round(leave3 / 1000);
        return seconds + ' 秒前';
      }

      return minutes + ' 分钟前';
    }

    return hours + ' 小时前';
  }

  if (days < 0) return '刚刚';

  if (days < 1) {
    return days + ' 天前';
  } else {
    return formatDate(time, 'yyyy/MM/dd hh:mm');
  }
}

function formatDate(date, fmt) {
  date = new Date(date);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (var k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
} // From <https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php>


function isUrl(str) {
  var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
function isEmpty(content) {
  return content === null || content === undefined || content === '';
}
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6e26");

// EXTERNAL MODULE: ./node_modules/_axios@0.18.1@axios/index.js
var _axios_0_18_1_axios = __webpack_require__("f753");
var _axios_0_18_1_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_18_1_axios);

// EXTERNAL MODULE: ./node_modules/_nprogress@0.2.0@nprogress/nprogress.js
var nprogress = __webpack_require__("38bc");
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// EXTERNAL MODULE: ./node_modules/_nprogress@0.2.0@nprogress/nprogress.css
var _nprogress_0_2_0_nprogress_nprogress = __webpack_require__("70e7");

// CONCATENATED MODULE: ./src/utils/service.js



 // import Vue from "vue";

var service = _axios_0_18_1_axios_default.a.create({
  baseURL:  true ? '' : undefined,
  timeout: 5000,
  withCredentials: true
});
service.interceptors.request.use(config => {
  nprogress_default.a.start();
  return config;
}, error => {
  nprogress_default.a.remove();
  return Promise.reject(error);
});
service.interceptors.response.use(response => {
  nprogress_default.a.done();
  return response;
}, error => {
  nprogress_default.a.done();

  if (_axios_0_18_1_axios_default.a.isCancel(error)) {
    // Vue.$log.debug("Cancelled uploading by user.");
    return Promise.reject(error);
  } // Vue.$log.error("Response failed", error);


  var response = error.response; // const status = response ? response.status : -1;
  // Vue.$log.error("Server response status", status);

  var data = response ? response.data : null;

  if (data) {
    // Business response
    // Vue.$log.error("Business response status", data.status);
    if (data.status === 400) {// TODO handle 400 status error
    } else if (data.status === 401) {// TODO Handle 401 status error
    } else if (data.status === 403) {// TODO handle 403 status error
    } else if (data.status === 404) {// TODO handle 404 status error
    } else if (data.status === 500) {// TODO handle 500 status error
    }
  } else {// TODO Server unavailable
    }

  return Promise.reject(error);
});
/* harmony default export */ var utils_service = (service);
// CONCATENATED MODULE: ./src/apis/comment.js

var baseUrl = '/api/content';
var commentApi = {};
/**
 * Creates a comment.
 * @param {String} target
 * @param {Object} comment
 */

commentApi.createComment = (target, comment) => {
  return utils_service({
    url: `${baseUrl}/${target}/comments`,
    method: 'post',
    data: comment
  });
}; // List api


commentApi.listComments = function (target, targetId) {
  var view = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'list_view';
  var pagination = arguments.length > 3 ? arguments[3] : undefined;
  return utils_service({
    url: `${baseUrl}/${target}/${targetId}/comments/${view}`,
    params: pagination,
    method: 'get'
  });
};

commentApi.listChildren = (target, targetId, commentId) => {
  return utils_service({
    url: `${baseUrl}/${target}/${targetId}/comments/${commentId}/children`,
    method: 'get'
  });
};

/* harmony default export */ var apis_comment = (commentApi);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CommentNodevue_type_script_lang_js_ = ({
  name: 'CommentNode',
  props: {
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function validator(value) {
        // The value must match one of these strings
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    options: {
      required: false,
      default: []
    }
  },

  data() {
    return {
      children: [],
      commentLoading: false
    };
  },

  computed: {
    avatar() {
      return `//cn.gravatar.com/avatar/${this.comment.gravatarMd5}?s=256&d=` + this.options.comment_gravatar_default;
    },

    createTimeAgo() {
      return timeAgo(this.comment.createTime);
    },

    compileContent() {
      return marked_default()(this.comment.content, {
        sanitize: true
      });
    },

    urlValid() {
      return isUrl(this.comment.authorUrl);
    },

    hasChildrenBody() {
      return this.comment.hasChildren && this.children !== null && this.children.length > 0;
    },

    hasParent() {
      return this.comment.parentId !== null && this.comment.parentId > 0;
    }

  },
  methods: {
    handleMoreClick() {
      // Get children
      this.children = [];
      this.commentLoading = true;
      apis_comment.listChildren(this.target, this.targetId, this.comment.id).then(response => {
        this.children = response.data.data;
        setTimeout(() => {
          this.commentLoading = false;
        }, 300);
      });
    },

    handleReplyClick() {
      this.$emit('reply', this.comment, this.repliedSuccess);
    },

    handleChildReply(comment, repliedSuccess) {
      this.$emit('reply', comment, repliedSuccess);
    },

    repliedSuccess() {// DO NOTHING...
    }

  }
});
// CONCATENATED MODULE: ./src/components/CommentNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentNodevue_type_script_lang_js_ = (CommentNodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentNode.vue



function CommentNode_injectStyles (context) {
  
  
}

/* normalize component */

var CommentNode_component = normalizeComponent(
  components_CommentNodevue_type_script_lang_js_,
  CommentNodevue_type_template_id_5f10ce6c_render,
  CommentNodevue_type_template_id_5f10ce6c_staticRenderFns,
  false,
  CommentNode_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentNode = (CommentNode_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ce95d72-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=template&id=13e24146&
var CommentEditorvue_type_template_id_13e24146_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal-fade"}},[_c('div',{staticClass:"comment-modal",attrs:{"autofocus":""},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.close($event)},"~keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)}}},[_c('div',{staticClass:"comment-modal-container"},[_c('div',{staticClass:"comment-poster-editor-emoji"},[_c('VEmojiPicker',{directives:[{name:"show",rawName:"v-show",value:(_vm.emojiDialogVisible),expression:"emojiDialogVisible"}],attrs:{"pack":_vm.pack,"labelSearch":"搜索"},on:{"select":_vm.selectEmoji}})],1),_c('div',{staticClass:"comment-poster-container active"},[_c('ul',{staticClass:"comment-poster-controls"},[_c('li',{staticClass:"poster-item-close"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.exit}},[_vm._v("×")])])]),_c('div',{staticClass:"comment-poster-main"},[_c('div',{staticClass:"comment-poster-main-body"},[(_vm.options.comment_gravatar_default)?_c('img',{staticClass:"comment-poster-body-avatar",attrs:{"src":_vm.avatar,"alt":_vm.comment.author}}):_vm._e(),_c('div',{staticClass:"comment-poster-body-content"},[_c('ul',{staticClass:"comment-poster-body-header"},[_c('li',{staticClass:"header-item-nickname"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.author),expression:"comment.author"}],attrs:{"type":"text","placeholder":"昵称 *"},domProps:{"value":(_vm.comment.author)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "author", $event.target.value)},_vm.handleAuthorInput]}}),_c('span')]),_c('li',{staticClass:"header-item-email"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.email),expression:"comment.email"}],attrs:{"type":"email","placeholder":"邮箱 *"},domProps:{"value":(_vm.comment.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "email", $event.target.value)}}}),_c('span')]),_c('li',{staticClass:"header-item-website"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.authorUrl),expression:"comment.authorUrl"}],attrs:{"type":"text","placeholder":"网站"},domProps:{"value":(_vm.comment.authorUrl)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "authorUrl", $event.target.value)}}}),_c('span')])]),(_vm.replyingComment)?_c('span',{staticClass:"comment-poster-body-reply"},[_vm._v("回复：@"+_vm._s(_vm.replyingComment.author)+" "),_c('small',[_vm._v("#"+_vm._s(_vm.replyingComment.id))])]):_vm._e(),_c('div',{staticClass:"comment-poster-body-editor"},[_c('div',{staticClass:"comment-poster-editor-wrapper"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.content),expression:"comment.content"}],style:(_vm.replyingComment==null?'height: 146px;':'height: 128px;'),attrs:{"placeholder":"撰写评论...（1000 个字符内）"},domProps:{"value":(_vm.comment.content)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "content", $event.target.value)},_vm.handleContentInput]}})]),_c('ul',{staticClass:"comment-poster-editor-controls"},[_c('li',{staticClass:"editor-item-reply"},[_c('button',{staticClass:"editor-btn-reply",attrs:{"type":"button","disabled":!_vm.commentValid},on:{"click":_vm.handleSubmitClick}},[_vm._v("评论")])]),_c('li',{staticClass:"editor-item-preview"},[_c('button',{staticClass:"editor-btn-preview",attrs:{"type":"button"},on:{"click":_vm.handlePreviewClick}},[_vm._v("预览")])]),_c('li',{staticClass:"editor-item-emoji"},[_c('button',{staticClass:"editor-btn-emoji",attrs:{"type":"button"},on:{"click":_vm.toogleDialogEmoji}},[_vm._v("\n                      😃\n                    ")])])])])])])])])])])])}
var CommentEditorvue_type_template_id_13e24146_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=template&id=13e24146&

// EXTERNAL MODULE: ./node_modules/_v-emoji-picker@1.1.5@v-emoji-picker/dist/v-emoji-picker.umd.js
var v_emoji_picker_umd = __webpack_require__("2497");
var v_emoji_picker_umd_default = /*#__PURE__*/__webpack_require__.n(v_emoji_picker_umd);

// EXTERNAL MODULE: ./node_modules/_v-emoji-picker@1.1.5@v-emoji-picker/data/emojis.json
var emojis = __webpack_require__("4cfb");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var CommentEditorvue_type_script_lang_js_ = ({
  name: 'CommentEditor',
  components: {
    VEmojiPicker: v_emoji_picker_umd_default.a
  },
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function validator(value) {
        // The value must match one of these strings
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    replyingComment: {
      type: Object,
      required: false,
      default: null
    },
    options: {
      required: false,
      default: []
    }
  },

  data() {
    return {
      pack: emojis,
      emojiDialogVisible: false,
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: ''
      }
    };
  },

  computed: {
    avatar() {
      if (!this.comment.email) {
        return '//cn.gravatar.com/avatar?d=' + this.options.comment_gravatar_default;
      }

      var gravatarMd5 = md5_default()(this.comment.email);
      return `//cn.gravatar.com/avatar/${gravatarMd5}?s=256&d=` + this.options.comment_gravatar_default;
    },

    commentValid() {
      return !isEmpty(this.comment.author) && !isEmpty(this.comment.email) && !isEmpty(this.comment.content);
    }

  },

  created() {
    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author');
    this.comment.authorUrl = localStorage.getItem('comment-authorUrl');
    this.comment.email = localStorage.getItem('comment-email');
  },

  methods: {
    toogleDialogEmoji() {
      this.emojiDialogVisible = !this.emojiDialogVisible;
    },

    selectEmoji(emoji) {
      this.comment.content += emoji.emoji;
      this.toogleDialogEmoji();
    },

    close() {
      this.$emit('close', false);
    },

    exit() {
      if (this.comment.content && !window.confirm('评论还未发布，是否放弃？')) {
        return;
      }

      this.$emit('exit', false);
    },

    handleAuthorInput() {
      this.input();
    },

    handleContentInput() {
      this.input();
    },

    input() {
      this.$emit('input', this.comment);
    },

    handleSubmitClick() {
      // Submit the comment
      this.comment.postId = this.targetId;

      if (this.replyingComment) {
        // Set parent id if available
        this.comment.parentId = this.replyingComment.id;
      }

      apis_comment.createComment(this.target, this.comment).then(response => {
        // Store comment author, email, authorUrl
        localStorage.setItem('comment-author', this.comment.author);
        localStorage.setItem('comment-email', this.comment.email);
        localStorage.setItem('comment-authorUrl', this.comment.authorUrl); // clearn comment

        this.comment.content = null; // Emit a created event

        this.$emit('created', response.data.data);
        this.$emit('close', false);
      }).catch(error => {
        this.$emit('failed', error.response);
      });
    },

    handlePreviewClick() {
      window.location.href = '#comment-author';
    }

  }
});
// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentEditorvue_type_script_lang_js_ = (CommentEditorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentEditor.vue



function CommentEditor_injectStyles (context) {
  
  var style0 = __webpack_require__("6246")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CommentEditor_component = normalizeComponent(
  components_CommentEditorvue_type_script_lang_js_,
  CommentEditorvue_type_template_id_13e24146_render,
  CommentEditorvue_type_template_id_13e24146_staticRenderFns,
  false,
  CommentEditor_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentEditor = (CommentEditor_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ce95d72-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentLoading.vue?vue&type=template&id=4ba35724&
var CommentLoadingvue_type_template_id_4ba35724_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"loading-fade","mode":"in-out"}},[_c('div',{staticClass:"comment-loader-container"},[_c('div',{staticClass:"comment-loader"},[_c('span'),_c('span'),_c('span'),_c('span')])])])}
var CommentLoadingvue_type_template_id_4ba35724_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentLoading.vue?vue&type=template&id=4ba35724&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentLoading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentLoadingvue_type_script_lang_js_ = ({
  name: 'CommentLoading'
});
// CONCATENATED MODULE: ./src/components/CommentLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentLoadingvue_type_script_lang_js_ = (CommentLoadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentLoading.vue





/* normalize component */

var CommentLoading_component = normalizeComponent(
  components_CommentLoadingvue_type_script_lang_js_,
  CommentLoadingvue_type_template_id_4ba35724_render,
  CommentLoadingvue_type_template_id_4ba35724_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentLoading = (CommentLoading_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ce95d72-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=template&id=934ee70a&
var Paginationvue_type_template_id_934ee70a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-pagination"},[_c('ul',{staticClass:"pagination"},[_c('li',{staticClass:"page-item",class:{ disabled: !_vm.hasPrev }},[_c('button',{staticClass:"prev-button",attrs:{"tabindex":"-1"},on:{"click":_vm.handlePrevClick}},[_vm._v("上一页")])]),(_vm.firstPage != null)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.firstPage}},[_c('button',{class:{ active: _vm.page === _vm.firstPage},on:{"click":function($event){return _vm.handlePageItemClick(_vm.firstPage)}}},[_vm._v(_vm._s(_vm.firstPage + 1))])]):_vm._e(),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMorePrev),expression:"hasMorePrev"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),_vm._l((_vm.middlePages),function(middlePage){return _c('li',{key:middlePage,staticClass:"page-item",class:{ active: middlePage === _vm.page }},[_c('button',{class:{ active: middlePage === _vm.page },on:{"click":function($event){return _vm.handlePageItemClick(middlePage)}}},[_vm._v("\n        "+_vm._s(middlePage + 1)+"\n      ")])])}),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMoreNext),expression:"hasMoreNext"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),(_vm.lastPage)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.lastPage}},[_c('button',{class:{ active: _vm.page === _vm.lastPage},on:{"click":function($event){return _vm.handlePageItemClick(_vm.lastPage)}}},[_vm._v("\n        "+_vm._s(_vm.lastPage + 1)+"\n      ")])]):_vm._e(),_c('li',{staticClass:"page-item",class:{ disabled: !_vm.hasNext }},[_c('button',{staticClass:"next-button",on:{"click":_vm.handleNextClick}},[_vm._v("下一页")])])],2)])}
var Paginationvue_type_template_id_934ee70a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=template&id=934ee70a&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  model: {
    prop: 'page',
    event: 'change'
  },
  props: {
    page: {
      type: Number,
      required: false,
      default: 0
    },
    size: {
      type: Number,
      required: false,
      default: 10
    },
    total: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      middleSize: 3
    };
  },

  computed: {
    pages() {
      return Math.ceil(this.total / this.size);
    },

    hasNext() {
      return this.page < this.pages - 1;
    },

    hasPrev() {
      return this.page > 0;
    },

    firstPage() {
      if (this.pages === 0) {
        return null;
      }

      return 0;
    },

    hasMorePrev() {
      if (this.firstPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page >= 2 + this.middleSize / 2;
    },

    hasMoreNext() {
      if (this.lastPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page < this.lastPage - 1 - this.middleSize / 2;
    },

    middlePages() {
      if (this.pages <= 2) {
        return [];
      }

      if (this.pages <= 2 + this.middleSize) {
        return this.range(1, this.lastPage);
      }

      var halfMiddleSize = Math.floor(this.middleSize / 2);
      var left = this.page - halfMiddleSize;
      var right = this.page + halfMiddleSize;

      if (this.page <= this.firstPage + halfMiddleSize + 1) {
        left = this.firstPage + 1;
        right = left + this.middleSize - 1;
      } else if (this.page >= this.lastPage - halfMiddleSize - 1) {
        right = this.lastPage - 1;
        left = right - this.middleSize + 1;
      }

      return this.range(left, right + 1);
    },

    lastPage() {
      if (this.pages === 0 || this.pages === 1) {
        return 0;
      }

      return this.pages - 1;
    }

  },
  methods: {
    handleNextClick() {
      if (this.hasNext) {
        this.$emit('change', this.page + 1);
      }
    },

    handlePrevClick() {
      if (this.hasPrev) {
        this.$emit('change', this.page - 1);
      }
    },

    handlePageItemClick(page) {
      this.$emit('change', page);
    },

    range(left, right) {
      if (left >= right) {
        return [];
      }

      var result = [];

      for (var i = left; i < right; i++) {
        result.push(i);
      }

      return result;
    }

  }
});
// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Pagination.vue



function Pagination_injectStyles (context) {
  
  
}

/* normalize component */

var Pagination_component = normalizeComponent(
  components_Paginationvue_type_script_lang_js_,
  Paginationvue_type_template_id_934ee70a_render,
  Paginationvue_type_template_id_934ee70a_staticRenderFns,
  false,
  Pagination_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Pagination = (Pagination_component.exports);
// CONCATENATED MODULE: ./src/components/index.js

// Register components
 // pro components







var _components = {
  CommentAuthor: CommentAuthor,
  CommentBody: CommentBody,
  CommentNode: CommentNode,
  CommentEditor: CommentEditor,
  CommentLoading: CommentLoading,
  Pagination: Pagination
};
var components = {};
Object.keys(_components).forEach(key => {
  components[key] = external_Vue_default.a.component(key, _components[key]);
});
/* harmony default export */ var src_components = (components);
// CONCATENATED MODULE: ./src/apis/option.js

var option_baseUrl = '/api/content/options';
var optionApi = {};

optionApi.list = () => {
  return utils_service({
    url: `${option_baseUrl}/comment`,
    method: 'get'
  });
};

/* harmony default export */ var apis_option = (optionApi);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/Comment.vue?vue&type=script&lang=js&shadow


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Commentvue_type_script_lang_js_shadow = ({
  name: 'Comment',
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      required: false,
      default: 'post',
      validator: function validator(value) {
        // The value must match one of these strings
        return ['post', 'sheet', 'journal'].indexOf(value) !== -1;
      }
    }
  },

  data() {
    return {
      comments: [],
      pagination: {
        page: 0,
        sort: '',
        size: 5,
        total: 0
      },
      commentLoading: false,
      editorVisiable: false,
      alertVisiable: false,
      editingComment: {},
      infoes: [],
      warnings: [],
      successes: [],
      repliedSuccess: null,
      replyingComment: null,
      options: []
    };
  },

  computed: {
    target() {
      // pluralize it
      return `${this.type}s`;
    },

    infoAlertVisiable() {
      return this.infoes !== null && this.infoes.length > 0;
    },

    warningAlertVisiable() {
      return this.warnings !== null && this.warnings.length > 0;
    },

    successAlertVisiable() {
      return this.successes !== null && this.successes.length > 0;
    }

  },

  created() {
    this.loadComments();
    this.loadOptions();
  },

  methods: {
    loadComments() {
      this.comments = [];
      this.commentLoading = true;
      apis_comment.listComments(this.target, this.id, 'top_view', this.pagination).then(response => {
        this.comments = response.data.data.content;
        this.pagination.size = response.data.data.rpp;
        this.pagination.total = response.data.data.total;
      }).finally(() => {
        this.commentLoading = false;
      });
    },

    loadOptions() {
      apis_option.list().then(response => {
        this.options = response.data.data;
      });
    },

    handleCommentHeaderClick() {
      this.editorVisiable = true;
      this.replyingComment = null;
      this.repliedSuccess = null;
    },

    handlePaginationChange(page) {
      this.pagination.page = page;
      this.loadComments();
    },

    handleEditorClose() {
      this.editorVisiable = false;
    },

    handleEditorExit() {
      this.handleEditorClose();
      this.editingComment.content = null;
    },

    handleEditorInput(comment) {
      this.editingComment = comment;
    },

    handleCommentCreated(createdComment) {
      this.clearAlertClose();

      if (createdComment.status === 'PUBLISHED') {
        this.loadComments();

        if (this.repliedSuccess) {
          this.repliedSuccess();
        }

        this.successes.push('评论成功');
      } else {
        // Show tips
        this.infoes.push('您的评论已经投递至博主，等待博主审核！');
      }

      this.repliedSuccess = null;
    },

    handleFailedToCreateComment(response) {
      this.clearAlertClose();
      this.repliedSuccess = null;

      if (response.status === 400) {
        this.warnings.push(response.data.message);

        if (response.data) {
          var errorDetail = response.data.data;

          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach(key => {
              this.warnings.push(errorDetail[key]);
            });
          }
        }
      }
    },

    handleReply(comment, repliedSuccess) {
      this.replyingComment = comment;
      this.repliedSuccess = repliedSuccess;
      this.editorVisiable = true;
    },

    clearAlertClose() {
      this.infoes = [];
      this.warnings = [];
      this.successes = [];
    }

  }
});
// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Commentvue_type_script_lang_js_shadow = (Commentvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/Comment.vue?shadow



function Commentshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("a85a")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Commentshadow_component = normalizeComponent(
  components_Commentvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  Commentshadow_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Commentshadow = (Commentshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.11.0@@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('halo-comment', vue_wc_wrapper(external_Vue_default.a, Commentshadow))

/***/ }),

/***/ "2f03":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var defined = __webpack_require__("f01a");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "34a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a013");
var toObject = __webpack_require__("db4b");
var toLength = __webpack_require__("b146");
var toInteger = __webpack_require__("c481");
var advanceStringIndex = __webpack_require__("b0f4");
var regExpExec = __webpack_require__("35dd");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("629c")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "35dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("4819");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "3754":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "38bc":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "3a59":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("1f98");
__webpack_require__("b2f5")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "3a68":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6462");
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "40b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var setPrototypeOf = __webpack_require__("0e44").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "4713":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("03b3");
var toObject = __webpack_require__("db4b");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "4819":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("94ac");
var TAG = __webpack_require__("8b37")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "4ad6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, ".modal-fade-enter,.modal-fade-leave-active{opacity:0}.modal-fade-enter-active,.modal-fade-leave-active{-webkit-transition:opacity .5s ease;transition:opacity .5s ease}", ""]);

// exports


/***/ }),

/***/ "4c39":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "4cfb":
/***/ (function(module) {

module.exports = JSON.parse("[{\"emoji\":\"😀\",\"description\":\"grinning face\",\"category\":\"Peoples\",\"aliases\":[\"grinning\"],\"tags\":[\"smile\",\"happy\"]},{\"emoji\":\"😃\",\"description\":\"smiling face with open mouth\",\"category\":\"Peoples\",\"aliases\":[\"smiley\"],\"tags\":[\"happy\",\"joy\",\"haha\"]},{\"emoji\":\"😄\",\"description\":\"smiling face with open mouth & smiling eyes\",\"category\":\"Peoples\",\"aliases\":[\"smile\"],\"tags\":[\"happy\",\"joy\",\"laugh\",\"pleased\"]},{\"emoji\":\"😁\",\"description\":\"grinning face with smiling eyes\",\"category\":\"Peoples\",\"aliases\":[\"grin\"],\"tags\":[]},{\"emoji\":\"😆\",\"description\":\"smiling face with open mouth & closed eyes\",\"category\":\"Peoples\",\"aliases\":[\"laughing\",\"satisfied\"],\"tags\":[\"happy\",\"haha\"]},{\"emoji\":\"😅\",\"description\":\"smiling face with open mouth & cold sweat\",\"category\":\"Peoples\",\"aliases\":[\"sweat_smile\"],\"tags\":[\"hot\"]},{\"emoji\":\"😂\",\"description\":\"face with tears of joy\",\"category\":\"Peoples\",\"aliases\":[\"joy\"],\"tags\":[\"tears\"]},{\"emoji\":\"🤣\",\"description\":\"rolling on the floor laughing\",\"category\":\"Peoples\",\"aliases\":[\"rofl\"],\"tags\":[\"lol\",\"laughing\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"😌\",\"description\":\"smiling face\",\"category\":\"Peoples\",\"aliases\":[\"relaxed\"],\"tags\":[\"blush\",\"pleased\"]},{\"emoji\":\"😊\",\"description\":\"smiling face with smiling eyes\",\"category\":\"Peoples\",\"aliases\":[\"blush\"],\"tags\":[\"proud\"]},{\"emoji\":\"😇\",\"description\":\"smiling face with halo\",\"category\":\"Peoples\",\"aliases\":[\"innocent\"],\"tags\":[\"angel\"]},{\"emoji\":\"🙂\",\"description\":\"slightly smiling face\",\"category\":\"Peoples\",\"aliases\":[\"slightly_smiling_face\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🙃\",\"description\":\"upside-down face\",\"category\":\"Peoples\",\"aliases\":[\"upside_down_face\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"😉\",\"description\":\"winking face\",\"category\":\"Peoples\",\"aliases\":[\"wink\"],\"tags\":[\"flirt\"]},{\"emoji\":\"😌\",\"description\":\"relieved face\",\"category\":\"Peoples\",\"aliases\":[\"relieved\"],\"tags\":[\"whew\"]},{\"emoji\":\"😍\",\"description\":\"smiling face with heart-eyes\",\"category\":\"Peoples\",\"aliases\":[\"heart_eyes\"],\"tags\":[\"love\",\"crush\"]},{\"emoji\":\"😘\",\"description\":\"face blowing a kiss\",\"category\":\"Peoples\",\"aliases\":[\"kissing_heart\"],\"tags\":[\"flirt\"]},{\"emoji\":\"😗\",\"description\":\"kissing face\",\"category\":\"Peoples\",\"aliases\":[\"kissing\"],\"tags\":[]},{\"emoji\":\"😙\",\"description\":\"kissing face with smiling eyes\",\"category\":\"Peoples\",\"aliases\":[\"kissing_smiling_eyes\"],\"tags\":[]},{\"emoji\":\"😚\",\"description\":\"kissing face with closed eyes\",\"category\":\"Peoples\",\"aliases\":[\"kissing_closed_eyes\"],\"tags\":[]},{\"emoji\":\"😋\",\"description\":\"face savouring delicious food\",\"category\":\"Peoples\",\"aliases\":[\"yum\"],\"tags\":[\"tongue\",\"lick\"]},{\"emoji\":\"😜\",\"description\":\"face with stuck-out tongue & winking eye\",\"category\":\"Peoples\",\"aliases\":[\"stuck_out_tongue_winking_eye\"],\"tags\":[\"prank\",\"silly\"]},{\"emoji\":\"😝\",\"description\":\"face with stuck-out tongue & closed eyes\",\"category\":\"Peoples\",\"aliases\":[\"stuck_out_tongue_closed_eyes\"],\"tags\":[\"prank\"]},{\"emoji\":\"😛\",\"description\":\"face with stuck-out tongue\",\"category\":\"Peoples\",\"aliases\":[\"stuck_out_tongue\"],\"tags\":[]},{\"emoji\":\"🤑\",\"description\":\"money-mouth face\",\"category\":\"Peoples\",\"aliases\":[\"money_mouth_face\"],\"tags\":[\"rich\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤗\",\"description\":\"hugging face\",\"category\":\"Peoples\",\"aliases\":[\"hugs\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤓\",\"description\":\"nerd face\",\"category\":\"Peoples\",\"aliases\":[\"nerd_face\"],\"tags\":[\"geek\",\"glasses\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"😎\",\"description\":\"smiling face with sunglasses\",\"category\":\"Peoples\",\"aliases\":[\"sunglasses\"],\"tags\":[\"cool\"]},{\"emoji\":\"🤡\",\"description\":\"clown face\",\"category\":\"Peoples\",\"aliases\":[\"clown_face\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤠\",\"description\":\"cowboy hat face\",\"category\":\"Peoples\",\"aliases\":[\"cowboy_hat_face\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"😏\",\"description\":\"smirking face\",\"category\":\"Peoples\",\"aliases\":[\"smirk\"],\"tags\":[\"smug\"]},{\"emoji\":\"😒\",\"description\":\"unamused face\",\"category\":\"Peoples\",\"aliases\":[\"unamused\"],\"tags\":[\"meh\"]},{\"emoji\":\"😞\",\"description\":\"disappointed face\",\"category\":\"Peoples\",\"aliases\":[\"disappointed\"],\"tags\":[\"sad\"]},{\"emoji\":\"😔\",\"description\":\"pensive face\",\"category\":\"Peoples\",\"aliases\":[\"pensive\"],\"tags\":[]},{\"emoji\":\"😟\",\"description\":\"worried face\",\"category\":\"Peoples\",\"aliases\":[\"worried\"],\"tags\":[\"nervous\"]},{\"emoji\":\"😕\",\"description\":\"confused face\",\"category\":\"Peoples\",\"aliases\":[\"confused\"],\"tags\":[]},{\"emoji\":\"🙁\",\"description\":\"slightly frowning face\",\"category\":\"Peoples\",\"aliases\":[\"slightly_frowning_face\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"☹️\",\"description\":\"frowning face\",\"category\":\"Peoples\",\"aliases\":[\"frowning_face\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"😣\",\"description\":\"persevering face\",\"category\":\"Peoples\",\"aliases\":[\"persevere\"],\"tags\":[\"struggling\"]},{\"emoji\":\"😖\",\"description\":\"confounded face\",\"category\":\"Peoples\",\"aliases\":[\"confounded\"],\"tags\":[]},{\"emoji\":\"😫\",\"description\":\"tired face\",\"category\":\"Peoples\",\"aliases\":[\"tired_face\"],\"tags\":[\"upset\",\"whine\"]},{\"emoji\":\"😩\",\"description\":\"weary face\",\"category\":\"Peoples\",\"aliases\":[\"weary\"],\"tags\":[\"tired\"]},{\"emoji\":\"😤\",\"description\":\"face with steam from nose\",\"category\":\"Peoples\",\"aliases\":[\"triumph\"],\"tags\":[\"smug\"]},{\"emoji\":\"😠\",\"description\":\"angry face\",\"category\":\"Peoples\",\"aliases\":[\"angry\"],\"tags\":[\"mad\",\"annoyed\"]},{\"emoji\":\"😡\",\"description\":\"pouting face\",\"category\":\"Peoples\",\"aliases\":[\"rage\",\"pout\"],\"tags\":[\"angry\"]},{\"emoji\":\"😶\",\"description\":\"face without mouth\",\"category\":\"Peoples\",\"aliases\":[\"no_mouth\"],\"tags\":[\"mute\",\"silence\"]},{\"emoji\":\"😐\",\"description\":\"neutral face\",\"category\":\"Peoples\",\"aliases\":[\"neutral_face\"],\"tags\":[\"meh\"]},{\"emoji\":\"😑\",\"description\":\"expressionless face\",\"category\":\"Peoples\",\"aliases\":[\"expressionless\"],\"tags\":[]},{\"emoji\":\"😯\",\"description\":\"hushed face\",\"category\":\"Peoples\",\"aliases\":[\"hushed\"],\"tags\":[\"silence\",\"speechless\"]},{\"emoji\":\"😦\",\"description\":\"frowning face with open mouth\",\"category\":\"Peoples\",\"aliases\":[\"frowning\"],\"tags\":[]},{\"emoji\":\"😧\",\"description\":\"anguished face\",\"category\":\"Peoples\",\"aliases\":[\"anguished\"],\"tags\":[\"stunned\"]},{\"emoji\":\"😮\",\"description\":\"face with open mouth\",\"category\":\"Peoples\",\"aliases\":[\"open_mouth\"],\"tags\":[\"surprise\",\"impressed\",\"wow\"]},{\"emoji\":\"😲\",\"description\":\"astonished face\",\"category\":\"Peoples\",\"aliases\":[\"astonished\"],\"tags\":[\"amazed\",\"gasp\"]},{\"emoji\":\"😵\",\"description\":\"dizzy face\",\"category\":\"Peoples\",\"aliases\":[\"dizzy_face\"],\"tags\":[]},{\"emoji\":\"😳\",\"description\":\"flushed face\",\"category\":\"Peoples\",\"aliases\":[\"flushed\"],\"tags\":[]},{\"emoji\":\"😱\",\"description\":\"face screaming in fear\",\"category\":\"Peoples\",\"aliases\":[\"scream\"],\"tags\":[\"horror\",\"shocked\"]},{\"emoji\":\"😨\",\"description\":\"fearful face\",\"category\":\"Peoples\",\"aliases\":[\"fearful\"],\"tags\":[\"scared\",\"shocked\",\"oops\"]},{\"emoji\":\"😰\",\"description\":\"face with open mouth & cold sweat\",\"category\":\"Peoples\",\"aliases\":[\"cold_sweat\"],\"tags\":[\"nervous\"]},{\"emoji\":\"😢\",\"description\":\"crying face\",\"category\":\"Peoples\",\"aliases\":[\"cry\"],\"tags\":[\"sad\",\"tear\"]},{\"emoji\":\"😥\",\"description\":\"disappointed but relieved face\",\"category\":\"Peoples\",\"aliases\":[\"disappointed_relieved\"],\"tags\":[\"phew\",\"sweat\",\"nervous\"]},{\"emoji\":\"🤤\",\"description\":\"drooling face\",\"category\":\"Peoples\",\"aliases\":[\"drooling_face\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"😭\",\"description\":\"loudly crying face\",\"category\":\"Peoples\",\"aliases\":[\"sob\"],\"tags\":[\"sad\",\"cry\",\"bawling\"]},{\"emoji\":\"😓\",\"description\":\"face with cold sweat\",\"category\":\"Peoples\",\"aliases\":[\"sweat\"],\"tags\":[]},{\"emoji\":\"😪\",\"description\":\"sleepy face\",\"category\":\"Peoples\",\"aliases\":[\"sleepy\"],\"tags\":[\"tired\"]},{\"emoji\":\"😴\",\"description\":\"sleeping face\",\"category\":\"Peoples\",\"aliases\":[\"sleeping\"],\"tags\":[\"zzz\"]},{\"emoji\":\"🙄\",\"description\":\"face with rolling eyes\",\"category\":\"Peoples\",\"aliases\":[\"roll_eyes\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤔\",\"description\":\"thinking face\",\"category\":\"Peoples\",\"aliases\":[\"thinking\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤥\",\"description\":\"lying face\",\"category\":\"Peoples\",\"aliases\":[\"lying_face\"],\"tags\":[\"liar\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"😬\",\"description\":\"grimacing face\",\"category\":\"Peoples\",\"aliases\":[\"grimacing\"],\"tags\":[]},{\"emoji\":\"🤐\",\"description\":\"zipper-mouth face\",\"category\":\"Peoples\",\"aliases\":[\"zipper_mouth_face\"],\"tags\":[\"silence\",\"hush\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤢\",\"description\":\"nauseated face\",\"category\":\"Peoples\",\"aliases\":[\"nauseated_face\"],\"tags\":[\"sick\",\"barf\",\"disgusted\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤧\",\"description\":\"sneezing face\",\"category\":\"Peoples\",\"aliases\":[\"sneezing_face\"],\"tags\":[\"achoo\",\"sick\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"😷\",\"description\":\"face with medical mask\",\"category\":\"Peoples\",\"aliases\":[\"mask\"],\"tags\":[\"sick\",\"ill\"]},{\"emoji\":\"🤒\",\"description\":\"face with thermometer\",\"category\":\"Peoples\",\"aliases\":[\"face_with_thermometer\"],\"tags\":[\"sick\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤕\",\"description\":\"face with head-bandage\",\"category\":\"Peoples\",\"aliases\":[\"face_with_head_bandage\"],\"tags\":[\"hurt\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"😈\",\"description\":\"smiling face with horns\",\"category\":\"Peoples\",\"aliases\":[\"smiling_imp\"],\"tags\":[\"devil\",\"evil\",\"horns\"]},{\"emoji\":\"👿\",\"description\":\"angry face with horns\",\"category\":\"Peoples\",\"aliases\":[\"imp\"],\"tags\":[\"angry\",\"devil\",\"evil\",\"horns\"]},{\"emoji\":\"👹\",\"description\":\"ogre\",\"category\":\"Peoples\",\"aliases\":[\"japanese_ogre\"],\"tags\":[\"monster\"]},{\"emoji\":\"👺\",\"description\":\"goblin\",\"category\":\"Peoples\",\"aliases\":[\"japanese_goblin\"],\"tags\":[]},{\"emoji\":\"💩\",\"description\":\"pile of poo\",\"category\":\"Peoples\",\"aliases\":[\"hankey\",\"poop\",\"shit\"],\"tags\":[\"crap\"]},{\"emoji\":\"👻\",\"description\":\"ghost\",\"category\":\"Peoples\",\"aliases\":[\"ghost\"],\"tags\":[\"halloween\"]},{\"emoji\":\"💀\",\"description\":\"skull\",\"category\":\"Peoples\",\"aliases\":[\"skull\"],\"tags\":[\"dead\",\"danger\",\"poison\"]},{\"emoji\":\"☠️\",\"description\":\"skull and crossbones\",\"category\":\"Peoples\",\"aliases\":[\"skull_and_crossbones\"],\"tags\":[\"danger\",\"pirate\"],\"ios_version\":\"9.1\"},{\"emoji\":\"👽\",\"description\":\"alien\",\"category\":\"Peoples\",\"aliases\":[\"alien\"],\"tags\":[\"ufo\"]},{\"emoji\":\"👾\",\"description\":\"alien monster\",\"category\":\"Peoples\",\"aliases\":[\"space_invader\"],\"tags\":[\"game\",\"retro\"]},{\"emoji\":\"🤖\",\"description\":\"robot face\",\"category\":\"Peoples\",\"aliases\":[\"robot\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎃\",\"description\":\"jack-o-lantern\",\"category\":\"Peoples\",\"aliases\":[\"jack_o_lantern\"],\"tags\":[\"halloween\"]},{\"emoji\":\"😺\",\"description\":\"smiling cat face with open mouth\",\"category\":\"Peoples\",\"aliases\":[\"smiley_cat\"],\"tags\":[]},{\"emoji\":\"😸\",\"description\":\"grinning cat face with smiling eyes\",\"category\":\"Peoples\",\"aliases\":[\"smile_cat\"],\"tags\":[]},{\"emoji\":\"😹\",\"description\":\"cat face with tears of joy\",\"category\":\"Peoples\",\"aliases\":[\"joy_cat\"],\"tags\":[]},{\"emoji\":\"😻\",\"description\":\"smiling cat face with heart-eyes\",\"category\":\"Peoples\",\"aliases\":[\"heart_eyes_cat\"],\"tags\":[]},{\"emoji\":\"😼\",\"description\":\"cat face with wry smile\",\"category\":\"Peoples\",\"aliases\":[\"smirk_cat\"],\"tags\":[]},{\"emoji\":\"😽\",\"description\":\"kissing cat face with closed eyes\",\"category\":\"Peoples\",\"aliases\":[\"kissing_cat\"],\"tags\":[]},{\"emoji\":\"🙀\",\"description\":\"weary cat face\",\"category\":\"Peoples\",\"aliases\":[\"scream_cat\"],\"tags\":[\"horror\"]},{\"emoji\":\"😿\",\"description\":\"crying cat face\",\"category\":\"Peoples\",\"aliases\":[\"crying_cat_face\"],\"tags\":[\"sad\",\"tear\"]},{\"emoji\":\"😾\",\"description\":\"pouting cat face\",\"category\":\"Peoples\",\"aliases\":[\"pouting_cat\"],\"tags\":[]},{\"emoji\":\"👐\",\"description\":\"open hands\",\"category\":\"Peoples\",\"aliases\":[\"open_hands\"],\"tags\":[]},{\"emoji\":\"🙌\",\"description\":\"raising hands\",\"category\":\"Peoples\",\"aliases\":[\"raised_hands\"],\"tags\":[\"hooray\"]},{\"emoji\":\"👏\",\"description\":\"clapping hands\",\"category\":\"Peoples\",\"aliases\":[\"clap\"],\"tags\":[\"praise\",\"applause\"]},{\"emoji\":\"🙏\",\"description\":\"folded hands\",\"category\":\"Peoples\",\"aliases\":[\"pray\"],\"tags\":[\"please\",\"hope\",\"wish\"]},{\"emoji\":\"🤝\",\"description\":\"handshake\",\"category\":\"Peoples\",\"aliases\":[\"handshake\"],\"tags\":[\"deal\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"👍\",\"description\":\"thumbs up\",\"category\":\"Peoples\",\"aliases\":[\"+1\",\"thumbsup\"],\"tags\":[\"approve\",\"ok\"]},{\"emoji\":\"👎\",\"description\":\"thumbs down\",\"category\":\"Peoples\",\"aliases\":[\"-1\",\"thumbsdown\"],\"tags\":[\"disapprove\",\"bury\"]},{\"emoji\":\"👊\",\"description\":\"oncoming fist\",\"category\":\"Peoples\",\"aliases\":[\"fist_oncoming\",\"facepunch\",\"punch\"],\"tags\":[\"attack\"]},{\"emoji\":\"✊\",\"description\":\"raised fist\",\"category\":\"Peoples\",\"aliases\":[\"fist_raised\",\"fist\"],\"tags\":[\"power\"]},{\"emoji\":\"🤛\",\"description\":\"left-facing fist\",\"category\":\"Peoples\",\"aliases\":[\"fist_left\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤜\",\"description\":\"right-facing fist\",\"category\":\"Peoples\",\"aliases\":[\"fist_right\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤞\",\"description\":\"crossed fingers\",\"category\":\"Peoples\",\"aliases\":[\"crossed_fingers\"],\"tags\":[\"luck\",\"hopeful\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"✌️\",\"description\":\"victory hand\",\"category\":\"Peoples\",\"aliases\":[\"v\"],\"tags\":[\"victory\",\"peace\"]},{\"emoji\":\"🤘\",\"description\":\"sign of the horns\",\"category\":\"Peoples\",\"aliases\":[\"metal\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"👌\",\"description\":\"OK hand\",\"category\":\"Peoples\",\"aliases\":[\"ok_hand\"],\"tags\":[]},{\"emoji\":\"👈\",\"description\":\"backhand index pointing left\",\"category\":\"Peoples\",\"aliases\":[\"point_left\"],\"tags\":[]},{\"emoji\":\"👉\",\"description\":\"backhand index pointing right\",\"category\":\"Peoples\",\"aliases\":[\"point_right\"],\"tags\":[]},{\"emoji\":\"👆\",\"description\":\"backhand index pointing up\",\"category\":\"Peoples\",\"aliases\":[\"point_up_2\"],\"tags\":[]},{\"emoji\":\"👇\",\"description\":\"backhand index pointing down\",\"category\":\"Peoples\",\"aliases\":[\"point_down\"],\"tags\":[]},{\"emoji\":\"☝️\",\"description\":\"index pointing up\",\"category\":\"Peoples\",\"aliases\":[\"point_up\"],\"tags\":[]},{\"emoji\":\"✋\",\"description\":\"raised hand\",\"category\":\"Peoples\",\"aliases\":[\"hand\",\"raised_hand\"],\"tags\":[\"highfive\",\"stop\"]},{\"emoji\":\"🤚\",\"description\":\"raised back of hand\",\"category\":\"Peoples\",\"aliases\":[\"raised_back_of_hand\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🖐\",\"description\":\"raised hand with fingers splayed\",\"category\":\"Peoples\",\"aliases\":[\"raised_hand_with_fingers_splayed\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🖖\",\"description\":\"vulcan salute\",\"category\":\"Peoples\",\"aliases\":[\"vulcan_salute\"],\"tags\":[\"prosper\",\"spock\"],\"unicode_version\":\"7.0\"},{\"emoji\":\"👋\",\"description\":\"waving hand\",\"category\":\"Peoples\",\"aliases\":[\"wave\"],\"tags\":[\"goodbye\"]},{\"emoji\":\"🤙\",\"description\":\"call me hand\",\"category\":\"Peoples\",\"aliases\":[\"call_me_hand\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"💪\",\"description\":\"flexed biceps\",\"category\":\"Peoples\",\"aliases\":[\"muscle\"],\"tags\":[\"flex\",\"bicep\",\"strong\",\"workout\"]},{\"emoji\":\"🖕\",\"description\":\"middle finger\",\"category\":\"Peoples\",\"aliases\":[\"middle_finger\",\"fu\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"✍️\",\"description\":\"writing hand\",\"category\":\"Peoples\",\"aliases\":[\"writing_hand\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"🤳\",\"description\":\"selfie\",\"category\":\"Peoples\",\"aliases\":[\"selfie\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"💅\",\"description\":\"nail polish\",\"category\":\"Peoples\",\"aliases\":[\"nail_care\"],\"tags\":[\"beauty\",\"manicure\"]},{\"emoji\":\"💍\",\"description\":\"ring\",\"category\":\"Peoples\",\"aliases\":[\"ring\"],\"tags\":[\"wedding\",\"marriage\",\"engaged\"]},{\"emoji\":\"💄\",\"description\":\"lipstick\",\"category\":\"Peoples\",\"aliases\":[\"lipstick\"],\"tags\":[\"makeup\"]},{\"emoji\":\"💋\",\"description\":\"kiss mark\",\"category\":\"Peoples\",\"aliases\":[\"kiss\"],\"tags\":[\"lipstick\"]},{\"emoji\":\"👄\",\"description\":\"mouth\",\"category\":\"Peoples\",\"aliases\":[\"lips\"],\"tags\":[\"kiss\"]},{\"emoji\":\"👅\",\"description\":\"tongue\",\"category\":\"Peoples\",\"aliases\":[\"tongue\"],\"tags\":[\"taste\"]},{\"emoji\":\"👂\",\"description\":\"ear\",\"category\":\"Peoples\",\"aliases\":[\"ear\"],\"tags\":[\"hear\",\"sound\",\"listen\"]},{\"emoji\":\"👃\",\"description\":\"nose\",\"category\":\"Peoples\",\"aliases\":[\"nose\"],\"tags\":[\"smell\"]},{\"emoji\":\"👣\",\"description\":\"footprints\",\"category\":\"Peoples\",\"aliases\":[\"footprints\"],\"tags\":[\"feet\",\"tracks\"]},{\"emoji\":\"👁\",\"description\":\"eye\",\"category\":\"Peoples\",\"aliases\":[\"eye\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"👀\",\"description\":\"eyes\",\"category\":\"Peoples\",\"aliases\":[\"eyes\"],\"tags\":[\"look\",\"see\",\"watch\"]},{\"emoji\":\"🗣\",\"description\":\"speaking head\",\"category\":\"Peoples\",\"aliases\":[\"speaking_head\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"👤\",\"description\":\"bust in silhouette\",\"category\":\"Peoples\",\"aliases\":[\"bust_in_silhouette\"],\"tags\":[\"user\"]},{\"emoji\":\"👥\",\"description\":\"busts in silhouette\",\"category\":\"Peoples\",\"aliases\":[\"busts_in_silhouette\"],\"tags\":[\"users\",\"group\",\"team\"]},{\"emoji\":\"👶\",\"description\":\"baby\",\"category\":\"Peoples\",\"aliases\":[\"baby\"],\"tags\":[\"child\",\"newborn\"]},{\"emoji\":\"👦\",\"description\":\"boy\",\"category\":\"Peoples\",\"aliases\":[\"boy\"],\"tags\":[\"child\"]},{\"emoji\":\"👧\",\"description\":\"girl\",\"category\":\"Peoples\",\"aliases\":[\"girl\"],\"tags\":[\"child\"]},{\"emoji\":\"👨\",\"description\":\"man\",\"category\":\"Peoples\",\"aliases\":[\"man\"],\"tags\":[\"mustache\",\"father\",\"dad\"]},{\"emoji\":\"👩\",\"description\":\"woman\",\"category\":\"Peoples\",\"aliases\":[\"woman\"],\"tags\":[\"girls\"]},{\"emoji\":\"👱‍♀\",\"description\":\"blond-haired woman\",\"category\":\"Peoples\",\"aliases\":[\"blonde_woman\"],\"tags\":[]},{\"emoji\":\"👱\",\"description\":\"blond-haired person\",\"category\":\"Peoples\",\"aliases\":[\"blonde_man\",\"person_with_blond_hair\"],\"tags\":[\"boy\"]},{\"emoji\":\"👴\",\"description\":\"old man\",\"category\":\"Peoples\",\"aliases\":[\"older_man\"],\"tags\":[]},{\"emoji\":\"👵\",\"description\":\"old woman\",\"category\":\"Peoples\",\"aliases\":[\"older_woman\"],\"tags\":[]},{\"emoji\":\"👲\",\"description\":\"man with Chinese cap\",\"category\":\"Peoples\",\"aliases\":[\"man_with_gua_pi_mao\"],\"tags\":[]},{\"emoji\":\"👳‍♀\",\"description\":\"woman wearing turban\",\"category\":\"Peoples\",\"aliases\":[\"woman_with_turban\"],\"tags\":[]},{\"emoji\":\"👳\",\"description\":\"person wearing turban\",\"category\":\"Peoples\",\"aliases\":[\"man_with_turban\"],\"tags\":[]},{\"emoji\":\"👮‍♀\",\"description\":\"woman police officer\",\"category\":\"Peoples\",\"aliases\":[\"policewoman\"],\"tags\":[]},{\"emoji\":\"👮\",\"description\":\"police officer\",\"category\":\"Peoples\",\"aliases\":[\"policeman\",\"cop\"],\"tags\":[\"police\",\"law\"]},{\"emoji\":\"👷‍♀\",\"description\":\"woman construction worker\",\"category\":\"Peoples\",\"aliases\":[\"construction_worker_woman\"],\"tags\":[]},{\"emoji\":\"👷\",\"description\":\"construction worker\",\"category\":\"Peoples\",\"aliases\":[\"construction_worker_man\",\"construction_worker\"],\"tags\":[\"helmet\"]},{\"emoji\":\"💂‍♀\",\"description\":\"woman guard\",\"category\":\"Peoples\",\"aliases\":[\"guardswoman\"],\"tags\":[]},{\"emoji\":\"💂\",\"description\":\"guard\",\"category\":\"Peoples\",\"aliases\":[\"guardsman\"],\"tags\":[]},{\"emoji\":\"👩‍⚕\",\"description\":\"woman health worker\",\"category\":\"Peoples\",\"aliases\":[\"woman_health_worker\"],\"tags\":[\"doctor\",\"nurse\"]},{\"emoji\":\"👨‍⚕\",\"description\":\"man health worker\",\"category\":\"Peoples\",\"aliases\":[\"man_health_worker\"],\"tags\":[\"doctor\",\"nurse\"]},{\"emoji\":\"👩‍🌾\",\"description\":\"woman farmer\",\"category\":\"Peoples\",\"aliases\":[\"woman_farmer\"],\"tags\":[]},{\"emoji\":\"👨‍🌾\",\"description\":\"man farmer\",\"category\":\"Peoples\",\"aliases\":[\"man_farmer\"],\"tags\":[]},{\"emoji\":\"👩‍🍳\",\"description\":\"woman cook\",\"category\":\"Peoples\",\"aliases\":[\"woman_cook\"],\"tags\":[\"chef\"]},{\"emoji\":\"👨‍🍳\",\"description\":\"man cook\",\"category\":\"Peoples\",\"aliases\":[\"man_cook\"],\"tags\":[\"chef\"]},{\"emoji\":\"👩‍🎓\",\"description\":\"woman student\",\"category\":\"Peoples\",\"aliases\":[\"woman_student\"],\"tags\":[\"graduation\"]},{\"emoji\":\"👨‍🎓\",\"description\":\"man student\",\"category\":\"Peoples\",\"aliases\":[\"man_student\"],\"tags\":[\"graduation\"]},{\"emoji\":\"👩‍🎤\",\"description\":\"woman singer\",\"category\":\"Peoples\",\"aliases\":[\"woman_singer\"],\"tags\":[\"rockstar\"]},{\"emoji\":\"👨‍🎤\",\"description\":\"man singer\",\"category\":\"Peoples\",\"aliases\":[\"man_singer\"],\"tags\":[\"rockstar\"]},{\"emoji\":\"👩‍🏫\",\"description\":\"woman teacher\",\"category\":\"Peoples\",\"aliases\":[\"woman_teacher\"],\"tags\":[\"school\",\"professor\"]},{\"emoji\":\"👨‍🏫\",\"description\":\"man teacher\",\"category\":\"Peoples\",\"aliases\":[\"man_teacher\"],\"tags\":[\"school\",\"professor\"]},{\"emoji\":\"👩‍🏭\",\"description\":\"woman factory worker\",\"category\":\"Peoples\",\"aliases\":[\"woman_factory_worker\"],\"tags\":[]},{\"emoji\":\"👨‍🏭\",\"description\":\"man factory worker\",\"category\":\"Peoples\",\"aliases\":[\"man_factory_worker\"],\"tags\":[]},{\"emoji\":\"👩‍💻\",\"description\":\"woman technologist\",\"category\":\"Peoples\",\"aliases\":[\"woman_technologist\"],\"tags\":[\"coder\"]},{\"emoji\":\"👨‍💻\",\"description\":\"man technologist\",\"category\":\"Peoples\",\"aliases\":[\"man_technologist\"],\"tags\":[\"coder\"]},{\"emoji\":\"👩‍💼\",\"description\":\"woman office worker\",\"category\":\"Peoples\",\"aliases\":[\"woman_office_worker\"],\"tags\":[\"business\"]},{\"emoji\":\"👨‍💼\",\"description\":\"man office worker\",\"category\":\"Peoples\",\"aliases\":[\"man_office_worker\"],\"tags\":[\"business\"]},{\"emoji\":\"👩‍🔧\",\"description\":\"woman mechanic\",\"category\":\"Peoples\",\"aliases\":[\"woman_mechanic\"],\"tags\":[]},{\"emoji\":\"👨‍🔧\",\"description\":\"man mechanic\",\"category\":\"Peoples\",\"aliases\":[\"man_mechanic\"],\"tags\":[]},{\"emoji\":\"👩‍🔬\",\"description\":\"woman scientist\",\"category\":\"Peoples\",\"aliases\":[\"woman_scientist\"],\"tags\":[\"research\"]},{\"emoji\":\"👨‍🔬\",\"description\":\"man scientist\",\"category\":\"Peoples\",\"aliases\":[\"man_scientist\"],\"tags\":[\"research\"]},{\"emoji\":\"👩‍🎨\",\"description\":\"woman artist\",\"category\":\"Peoples\",\"aliases\":[\"woman_artist\"],\"tags\":[\"painter\"]},{\"emoji\":\"👨‍🎨\",\"description\":\"man artist\",\"category\":\"Peoples\",\"aliases\":[\"man_artist\"],\"tags\":[\"painter\"]},{\"emoji\":\"👩‍🚒\",\"description\":\"woman firefighter\",\"category\":\"Peoples\",\"aliases\":[\"woman_firefighter\"],\"tags\":[]},{\"emoji\":\"👨‍🚒\",\"description\":\"man firefighter\",\"category\":\"Peoples\",\"aliases\":[\"man_firefighter\"],\"tags\":[]},{\"emoji\":\"👩‍🚀\",\"description\":\"woman astronaut\",\"category\":\"Peoples\",\"aliases\":[\"woman_astronaut\"],\"tags\":[\"space\"]},{\"emoji\":\"👨‍🚀\",\"description\":\"man astronaut\",\"category\":\"Peoples\",\"aliases\":[\"man_astronaut\"],\"tags\":[\"space\"]},{\"emoji\":\"🤶\",\"description\":\"Mrs. Claus\",\"category\":\"Peoples\",\"aliases\":[\"mrs_claus\"],\"tags\":[\"santa\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"🎅\",\"description\":\"Santa Claus\",\"category\":\"Peoples\",\"aliases\":[\"santa\"],\"tags\":[\"christmas\"]},{\"emoji\":\"👸\",\"description\":\"princess\",\"category\":\"Peoples\",\"aliases\":[\"princess\"],\"tags\":[\"blonde\",\"crown\",\"royal\"]},{\"emoji\":\"🤴\",\"description\":\"prince\",\"category\":\"Peoples\",\"aliases\":[\"prince\"],\"tags\":[\"crown\",\"royal\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"👰\",\"description\":\"bride with veil\",\"category\":\"Peoples\",\"aliases\":[\"bride_with_veil\"],\"tags\":[\"marriage\",\"wedding\"]},{\"emoji\":\"🤵\",\"description\":\"man in tuxedo\",\"category\":\"Peoples\",\"aliases\":[\"man_in_tuxedo\"],\"tags\":[\"groom\",\"marriage\",\"wedding\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"👼\",\"description\":\"baby angel\",\"category\":\"Peoples\",\"aliases\":[\"angel\"],\"tags\":[]},{\"emoji\":\"🤰\",\"description\":\"pregnant woman\",\"category\":\"Peoples\",\"aliases\":[\"pregnant_woman\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🙇‍♀\",\"description\":\"woman bowing\",\"category\":\"Peoples\",\"aliases\":[\"bowing_woman\"],\"tags\":[\"respect\",\"thanks\"]},{\"emoji\":\"🙇\",\"description\":\"person bowing\",\"category\":\"Peoples\",\"aliases\":[\"bowing_man\",\"bow\"],\"tags\":[\"respect\",\"thanks\"]},{\"emoji\":\"💁\",\"description\":\"person tipping hand\",\"category\":\"Peoples\",\"aliases\":[\"tipping_hand_woman\",\"information_desk_person\",\"sassy_woman\"],\"tags\":[]},{\"emoji\":\"💁‍♂\",\"description\":\"man tipping hand\",\"category\":\"Peoples\",\"aliases\":[\"tipping_hand_man\",\"sassy_man\"],\"tags\":[\"information\"]},{\"emoji\":\"🙅\",\"description\":\"person gesturing NO\",\"category\":\"Peoples\",\"aliases\":[\"no_good_woman\",\"no_good\",\"ng_woman\"],\"tags\":[\"stop\",\"halt\"]},{\"emoji\":\"🙅‍♂\",\"description\":\"man gesturing NO\",\"category\":\"Peoples\",\"aliases\":[\"no_good_man\",\"ng_man\"],\"tags\":[\"stop\",\"halt\"]},{\"emoji\":\"🙆\",\"description\":\"person gesturing OK\",\"category\":\"Peoples\",\"aliases\":[\"ok_woman\"],\"tags\":[]},{\"emoji\":\"🙆‍♂\",\"description\":\"man gesturing OK\",\"category\":\"Peoples\",\"aliases\":[\"ok_man\"],\"tags\":[]},{\"emoji\":\"🙋\",\"description\":\"person raising hand\",\"category\":\"Peoples\",\"aliases\":[\"raising_hand_woman\",\"raising_hand\"],\"tags\":[]},{\"emoji\":\"🙋‍♂\",\"description\":\"man raising hand\",\"category\":\"Peoples\",\"aliases\":[\"raising_hand_man\"],\"tags\":[]},{\"emoji\":\"🤦‍♀\",\"description\":\"woman facepalming\",\"category\":\"Peoples\",\"aliases\":[\"woman_facepalming\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤦‍♂\",\"description\":\"man facepalming\",\"category\":\"Peoples\",\"aliases\":[\"man_facepalming\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤷‍♀\",\"description\":\"woman shrugging\",\"category\":\"Peoples\",\"aliases\":[\"woman_shrugging\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤷‍♂\",\"description\":\"man shrugging\",\"category\":\"Peoples\",\"aliases\":[\"man_shrugging\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🙎\",\"description\":\"person pouting\",\"category\":\"Peoples\",\"aliases\":[\"pouting_woman\",\"person_with_pouting_face\"],\"tags\":[]},{\"emoji\":\"🙎‍♂\",\"description\":\"man pouting\",\"category\":\"Peoples\",\"aliases\":[\"pouting_man\"],\"tags\":[]},{\"emoji\":\"🙍\",\"description\":\"person frowning\",\"category\":\"Peoples\",\"aliases\":[\"frowning_woman\",\"person_frowning\"],\"tags\":[\"sad\"]},{\"emoji\":\"🙍‍♂\",\"description\":\"man frowning\",\"category\":\"Peoples\",\"aliases\":[\"frowning_man\"],\"tags\":[]},{\"emoji\":\"💇\",\"description\":\"person getting haircut\",\"category\":\"Peoples\",\"aliases\":[\"haircut_woman\",\"haircut\"],\"tags\":[\"beauty\"]},{\"emoji\":\"💇‍♂\",\"description\":\"man getting haircut\",\"category\":\"Peoples\",\"aliases\":[\"haircut_man\"],\"tags\":[]},{\"emoji\":\"💆\",\"description\":\"person getting massage\",\"category\":\"Peoples\",\"aliases\":[\"massage_woman\",\"massage\"],\"tags\":[\"spa\"]},{\"emoji\":\"💆‍♂\",\"description\":\"man getting massage\",\"category\":\"Peoples\",\"aliases\":[\"massage_man\"],\"tags\":[\"spa\"]},{\"emoji\":\"🕴\",\"description\":\"man in business suit levitating\",\"category\":\"Peoples\",\"aliases\":[\"business_suit_levitating\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"💃\",\"description\":\"woman dancing\",\"category\":\"Peoples\",\"aliases\":[\"dancer\"],\"tags\":[\"dress\"]},{\"emoji\":\"🕺\",\"description\":\"man dancing\",\"category\":\"Peoples\",\"aliases\":[\"man_dancing\"],\"tags\":[\"dancer\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"👯\",\"description\":\"people with bunny ears partying\",\"category\":\"Peoples\",\"aliases\":[\"dancing_women\",\"dancers\"],\"tags\":[\"bunny\"]},{\"emoji\":\"👯‍♂\",\"description\":\"men with bunny ears partying\",\"category\":\"Peoples\",\"aliases\":[\"dancing_men\"],\"tags\":[\"bunny\"]},{\"emoji\":\"🚶‍♀\",\"description\":\"woman walking\",\"category\":\"Peoples\",\"aliases\":[\"walking_woman\"],\"tags\":[]},{\"emoji\":\"🚶\",\"description\":\"person walking\",\"category\":\"Peoples\",\"aliases\":[\"walking_man\",\"walking\"],\"tags\":[]},{\"emoji\":\"🏃‍♀\",\"description\":\"woman running\",\"category\":\"Peoples\",\"aliases\":[\"running_woman\"],\"tags\":[\"exercise\",\"workout\",\"marathon\"]},{\"emoji\":\"🏃\",\"description\":\"person running\",\"category\":\"Peoples\",\"aliases\":[\"running_man\",\"runner\",\"running\"],\"tags\":[\"exercise\",\"workout\",\"marathon\"]},{\"emoji\":\"👫\",\"description\":\"man and woman holding hands\",\"category\":\"Peoples\",\"aliases\":[\"couple\"],\"tags\":[\"date\"]},{\"emoji\":\"👭\",\"description\":\"two women holding hands\",\"category\":\"Peoples\",\"aliases\":[\"two_women_holding_hands\"],\"tags\":[\"couple\",\"date\"]},{\"emoji\":\"👬\",\"description\":\"two men holding hands\",\"category\":\"Peoples\",\"aliases\":[\"two_men_holding_hands\"],\"tags\":[\"couple\",\"date\"]},{\"emoji\":\"💑\",\"description\":\"couple with heart\",\"category\":\"Peoples\",\"aliases\":[\"couple_with_heart_woman_man\",\"couple_with_heart\"],\"tags\":[]},{\"emoji\":\"👩‍❤️‍👩\",\"description\":\"couple with heart: woman, woman\",\"category\":\"Peoples\",\"aliases\":[\"couple_with_heart_woman_woman\"],\"tags\":[]},{\"emoji\":\"👨‍❤️‍👨\",\"description\":\"couple with heart: man, man\",\"category\":\"Peoples\",\"aliases\":[\"couple_with_heart_man_man\"],\"tags\":[]},{\"emoji\":\"💏\",\"description\":\"kiss\",\"category\":\"Peoples\",\"aliases\":[\"couplekiss_man_woman\"],\"tags\":[]},{\"emoji\":\"👩‍❤️‍💋‍👩\",\"description\":\"kiss: woman, woman\",\"category\":\"Peoples\",\"aliases\":[\"couplekiss_woman_woman\"],\"tags\":[]},{\"emoji\":\"👨‍❤️‍💋‍👨\",\"description\":\"kiss: man, man\",\"category\":\"Peoples\",\"aliases\":[\"couplekiss_man_man\"],\"tags\":[]},{\"emoji\":\"👪\",\"description\":\"family\",\"category\":\"Peoples\",\"aliases\":[\"family_man_woman_boy\",\"family\"],\"tags\":[\"home\",\"parents\",\"child\"]},{\"emoji\":\"👨‍👩‍👧\",\"description\":\"family: man, woman, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_man_woman_girl\"],\"tags\":[]},{\"emoji\":\"👨‍👩‍👧‍👦\",\"description\":\"family: man, woman, girl, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_woman_girl_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👩‍👦‍👦\",\"description\":\"family: man, woman, boy, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_woman_boy_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👩‍👧‍👧\",\"description\":\"family: man, woman, girl, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_man_woman_girl_girl\"],\"tags\":[]},{\"emoji\":\"👩‍👩‍👦\",\"description\":\"family: woman, woman, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_woman_boy\"],\"tags\":[]},{\"emoji\":\"👩‍👩‍👧\",\"description\":\"family: woman, woman, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_woman_girl\"],\"tags\":[]},{\"emoji\":\"👩‍👩‍👧‍👦\",\"description\":\"family: woman, woman, girl, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_woman_girl_boy\"],\"tags\":[]},{\"emoji\":\"👩‍👩‍👦‍👦\",\"description\":\"family: woman, woman, boy, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_woman_boy_boy\"],\"tags\":[]},{\"emoji\":\"👩‍👩‍👧‍👧\",\"description\":\"family: woman, woman, girl, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_woman_girl_girl\"],\"tags\":[]},{\"emoji\":\"👨‍👨‍👦\",\"description\":\"family: man, man, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_man_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👨‍👧\",\"description\":\"family: man, man, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_man_man_girl\"],\"tags\":[]},{\"emoji\":\"👨‍👨‍👧‍👦\",\"description\":\"family: man, man, girl, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_man_girl_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👨‍👦‍👦\",\"description\":\"family: man, man, boy, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_man_boy_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👨‍👧‍👧\",\"description\":\"family: man, man, girl, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_man_man_girl_girl\"],\"tags\":[]},{\"emoji\":\"👩‍👦\",\"description\":\"family: woman, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_boy\"],\"tags\":[]},{\"emoji\":\"👩‍👧\",\"description\":\"family: woman, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_girl\"],\"tags\":[]},{\"emoji\":\"👩‍👧‍👦\",\"description\":\"family: woman, girl, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_girl_boy\"],\"tags\":[]},{\"emoji\":\"👩‍👦‍👦\",\"description\":\"family: woman, boy, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_boy_boy\"],\"tags\":[]},{\"emoji\":\"👩‍👧‍👧\",\"description\":\"family: woman, girl, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_woman_girl_girl\"],\"tags\":[]},{\"emoji\":\"👨‍👦\",\"description\":\"family: man, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👧\",\"description\":\"family: man, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_man_girl\"],\"tags\":[]},{\"emoji\":\"👨‍👧‍👦\",\"description\":\"family: man, girl, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_girl_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👦‍👦\",\"description\":\"family: man, boy, boy\",\"category\":\"Peoples\",\"aliases\":[\"family_man_boy_boy\"],\"tags\":[]},{\"emoji\":\"👨‍👧‍👧\",\"description\":\"family: man, girl, girl\",\"category\":\"Peoples\",\"aliases\":[\"family_man_girl_girl\"],\"tags\":[]},{\"emoji\":\"👚\",\"description\":\"woman’s clothes\",\"category\":\"Peoples\",\"aliases\":[\"womans_clothes\"],\"tags\":[]},{\"emoji\":\"👕\",\"description\":\"t-shirt\",\"category\":\"Peoples\",\"aliases\":[\"shirt\",\"tshirt\"],\"tags\":[]},{\"emoji\":\"👖\",\"description\":\"jeans\",\"category\":\"Peoples\",\"aliases\":[\"jeans\"],\"tags\":[\"pants\"]},{\"emoji\":\"👔\",\"description\":\"necktie\",\"category\":\"Peoples\",\"aliases\":[\"necktie\"],\"tags\":[\"shirt\",\"formal\"]},{\"emoji\":\"👗\",\"description\":\"dress\",\"category\":\"Peoples\",\"aliases\":[\"dress\"],\"tags\":[]},{\"emoji\":\"👙\",\"description\":\"bikini\",\"category\":\"Peoples\",\"aliases\":[\"bikini\"],\"tags\":[\"beach\"]},{\"emoji\":\"👘\",\"description\":\"kimono\",\"category\":\"Peoples\",\"aliases\":[\"kimono\"],\"tags\":[]},{\"emoji\":\"👠\",\"description\":\"high-heeled shoe\",\"category\":\"Peoples\",\"aliases\":[\"high_heel\"],\"tags\":[\"shoe\"]},{\"emoji\":\"👡\",\"description\":\"woman’s sandal\",\"category\":\"Peoples\",\"aliases\":[\"sandal\"],\"tags\":[\"shoe\"]},{\"emoji\":\"👢\",\"description\":\"woman’s boot\",\"category\":\"Peoples\",\"aliases\":[\"boot\"],\"tags\":[]},{\"emoji\":\"👞\",\"description\":\"man’s shoe\",\"category\":\"Peoples\",\"aliases\":[\"mans_shoe\",\"shoe\"],\"tags\":[]},{\"emoji\":\"👟\",\"description\":\"running shoe\",\"category\":\"Peoples\",\"aliases\":[\"athletic_shoe\"],\"tags\":[\"sneaker\",\"sport\",\"running\"]},{\"emoji\":\"👒\",\"description\":\"woman’s hat\",\"category\":\"Peoples\",\"aliases\":[\"womans_hat\"],\"tags\":[]},{\"emoji\":\"🎩\",\"description\":\"top hat\",\"category\":\"Peoples\",\"aliases\":[\"tophat\"],\"tags\":[\"hat\",\"classy\"]},{\"emoji\":\"🎓\",\"description\":\"graduation cap\",\"category\":\"Peoples\",\"aliases\":[\"mortar_board\"],\"tags\":[\"education\",\"college\",\"university\",\"graduation\"]},{\"emoji\":\"👑\",\"description\":\"crown\",\"category\":\"Peoples\",\"aliases\":[\"crown\"],\"tags\":[\"king\",\"queen\",\"royal\"]},{\"emoji\":\"⛑\",\"description\":\"rescue worker’s helmet\",\"category\":\"Peoples\",\"aliases\":[\"rescue_worker_helmet\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎒\",\"description\":\"school backpack\",\"category\":\"Peoples\",\"aliases\":[\"school_satchel\"],\"tags\":[]},{\"emoji\":\"👝\",\"description\":\"clutch bag\",\"category\":\"Peoples\",\"aliases\":[\"pouch\"],\"tags\":[\"bag\"]},{\"emoji\":\"👛\",\"description\":\"purse\",\"category\":\"Peoples\",\"aliases\":[\"purse\"],\"tags\":[]},{\"emoji\":\"👜\",\"description\":\"handbag\",\"category\":\"Peoples\",\"aliases\":[\"handbag\"],\"tags\":[\"bag\"]},{\"emoji\":\"💼\",\"description\":\"briefcase\",\"category\":\"Peoples\",\"aliases\":[\"briefcase\"],\"tags\":[\"business\"]},{\"emoji\":\"👓\",\"description\":\"glasses\",\"category\":\"Peoples\",\"aliases\":[\"eyeglasses\"],\"tags\":[\"glasses\"]},{\"emoji\":\"🕶\",\"description\":\"sunglasses\",\"category\":\"Peoples\",\"aliases\":[\"dark_sunglasses\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌂\",\"description\":\"closed umbrella\",\"category\":\"Peoples\",\"aliases\":[\"closed_umbrella\"],\"tags\":[\"weather\",\"rain\"]},{\"emoji\":\"☂️\",\"description\":\"umbrella\",\"category\":\"Peoples\",\"aliases\":[\"open_umbrella\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"🐶\",\"description\":\"dog face\",\"category\":\"Nature\",\"aliases\":[\"dog\"],\"tags\":[\"pet\"]},{\"emoji\":\"🐱\",\"description\":\"cat face\",\"category\":\"Nature\",\"aliases\":[\"cat\"],\"tags\":[\"pet\"]},{\"emoji\":\"🐭\",\"description\":\"mouse face\",\"category\":\"Nature\",\"aliases\":[\"mouse\"],\"tags\":[]},{\"emoji\":\"🐹\",\"description\":\"hamster face\",\"category\":\"Nature\",\"aliases\":[\"hamster\"],\"tags\":[\"pet\"]},{\"emoji\":\"🐰\",\"description\":\"rabbit face\",\"category\":\"Nature\",\"aliases\":[\"rabbit\"],\"tags\":[\"bunny\"]},{\"emoji\":\"🦊\",\"description\":\"fox face\",\"category\":\"Nature\",\"aliases\":[\"fox_face\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐻\",\"description\":\"bear face\",\"category\":\"Nature\",\"aliases\":[\"bear\"],\"tags\":[]},{\"emoji\":\"🐼\",\"description\":\"panda face\",\"category\":\"Nature\",\"aliases\":[\"panda_face\"],\"tags\":[]},{\"emoji\":\"🐨\",\"description\":\"koala\",\"category\":\"Nature\",\"aliases\":[\"koala\"],\"tags\":[]},{\"emoji\":\"🐯\",\"description\":\"tiger face\",\"category\":\"Nature\",\"aliases\":[\"tiger\"],\"tags\":[]},{\"emoji\":\"🦁\",\"description\":\"lion face\",\"category\":\"Nature\",\"aliases\":[\"lion\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🐮\",\"description\":\"cow face\",\"category\":\"Nature\",\"aliases\":[\"cow\"],\"tags\":[]},{\"emoji\":\"🐷\",\"description\":\"pig face\",\"category\":\"Nature\",\"aliases\":[\"pig\"],\"tags\":[]},{\"emoji\":\"🐽\",\"description\":\"pig nose\",\"category\":\"Nature\",\"aliases\":[\"pig_nose\"],\"tags\":[]},{\"emoji\":\"🐸\",\"description\":\"frog face\",\"category\":\"Nature\",\"aliases\":[\"frog\"],\"tags\":[]},{\"emoji\":\"🐵\",\"description\":\"monkey face\",\"category\":\"Nature\",\"aliases\":[\"monkey_face\"],\"tags\":[]},{\"emoji\":\"🙈\",\"description\":\"see-no-evil monkey\",\"category\":\"Nature\",\"aliases\":[\"see_no_evil\"],\"tags\":[\"monkey\",\"blind\",\"ignore\"]},{\"emoji\":\"🙉\",\"description\":\"hear-no-evil monkey\",\"category\":\"Nature\",\"aliases\":[\"hear_no_evil\"],\"tags\":[\"monkey\",\"deaf\"]},{\"emoji\":\"🙊\",\"description\":\"speak-no-evil monkey\",\"category\":\"Nature\",\"aliases\":[\"speak_no_evil\"],\"tags\":[\"monkey\",\"mute\",\"hush\"]},{\"emoji\":\"🐒\",\"description\":\"monkey\",\"category\":\"Nature\",\"aliases\":[\"monkey\"],\"tags\":[]},{\"emoji\":\"🐔\",\"description\":\"chicken\",\"category\":\"Nature\",\"aliases\":[\"chicken\"],\"tags\":[]},{\"emoji\":\"🐧\",\"description\":\"penguin\",\"category\":\"Nature\",\"aliases\":[\"penguin\"],\"tags\":[]},{\"emoji\":\"🐦\",\"description\":\"bird\",\"category\":\"Nature\",\"aliases\":[\"bird\"],\"tags\":[]},{\"emoji\":\"🐤\",\"description\":\"baby chick\",\"category\":\"Nature\",\"aliases\":[\"baby_chick\"],\"tags\":[]},{\"emoji\":\"🐣\",\"description\":\"hatching chick\",\"category\":\"Nature\",\"aliases\":[\"hatching_chick\"],\"tags\":[]},{\"emoji\":\"🐥\",\"description\":\"front-facing baby chick\",\"category\":\"Nature\",\"aliases\":[\"hatched_chick\"],\"tags\":[]},{\"emoji\":\"🦆\",\"description\":\"duck\",\"category\":\"Nature\",\"aliases\":[\"duck\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🦅\",\"description\":\"eagle\",\"category\":\"Nature\",\"aliases\":[\"eagle\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🦉\",\"description\":\"owl\",\"category\":\"Nature\",\"aliases\":[\"owl\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🦇\",\"description\":\"bat\",\"category\":\"Nature\",\"aliases\":[\"bat\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐺\",\"description\":\"wolf face\",\"category\":\"Nature\",\"aliases\":[\"wolf\"],\"tags\":[]},{\"emoji\":\"🐗\",\"description\":\"boar\",\"category\":\"Nature\",\"aliases\":[\"boar\"],\"tags\":[]},{\"emoji\":\"🐴\",\"description\":\"horse face\",\"category\":\"Nature\",\"aliases\":[\"horse\"],\"tags\":[]},{\"emoji\":\"🦄\",\"description\":\"unicorn face\",\"category\":\"Nature\",\"aliases\":[\"unicorn\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🐝\",\"description\":\"honeybee\",\"category\":\"Nature\",\"aliases\":[\"bee\",\"honeybee\"],\"tags\":[]},{\"emoji\":\"🐛\",\"description\":\"bug\",\"category\":\"Nature\",\"aliases\":[\"bug\"],\"tags\":[]},{\"emoji\":\"🦋\",\"description\":\"butterfly\",\"category\":\"Nature\",\"aliases\":[\"butterfly\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐌\",\"description\":\"snail\",\"category\":\"Nature\",\"aliases\":[\"snail\"],\"tags\":[\"slow\"]},{\"emoji\":\"🐚\",\"description\":\"spiral shell\",\"category\":\"Nature\",\"aliases\":[\"shell\"],\"tags\":[\"sea\",\"beach\"]},{\"emoji\":\"🐞\",\"description\":\"lady beetle\",\"category\":\"Nature\",\"aliases\":[\"beetle\"],\"tags\":[\"bug\"]},{\"emoji\":\"🐜\",\"description\":\"ant\",\"category\":\"Nature\",\"aliases\":[\"ant\"],\"tags\":[]},{\"emoji\":\"🕷\",\"description\":\"spider\",\"category\":\"Nature\",\"aliases\":[\"spider\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🕸\",\"description\":\"spider web\",\"category\":\"Nature\",\"aliases\":[\"spider_web\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🐢\",\"description\":\"turtle\",\"category\":\"Nature\",\"aliases\":[\"turtle\"],\"tags\":[\"slow\"]},{\"emoji\":\"🐍\",\"description\":\"snake\",\"category\":\"Nature\",\"aliases\":[\"snake\"],\"tags\":[]},{\"emoji\":\"🦎\",\"description\":\"lizard\",\"category\":\"Nature\",\"aliases\":[\"lizard\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🦂\",\"description\":\"scorpion\",\"category\":\"Nature\",\"aliases\":[\"scorpion\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🦀\",\"description\":\"crab\",\"category\":\"Nature\",\"aliases\":[\"crab\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🦑\",\"description\":\"squid\",\"category\":\"Nature\",\"aliases\":[\"squid\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐙\",\"description\":\"octopus\",\"category\":\"Nature\",\"aliases\":[\"octopus\"],\"tags\":[]},{\"emoji\":\"🦐\",\"description\":\"shrimp\",\"category\":\"Nature\",\"aliases\":[\"shrimp\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐠\",\"description\":\"tropical fish\",\"category\":\"Nature\",\"aliases\":[\"tropical_fish\"],\"tags\":[]},{\"emoji\":\"🐟\",\"description\":\"fish\",\"category\":\"Nature\",\"aliases\":[\"fish\"],\"tags\":[]},{\"emoji\":\"🐡\",\"description\":\"blowfish\",\"category\":\"Nature\",\"aliases\":[\"blowfish\"],\"tags\":[]},{\"emoji\":\"🐬\",\"description\":\"dolphin\",\"category\":\"Nature\",\"aliases\":[\"dolphin\",\"flipper\"],\"tags\":[]},{\"emoji\":\"🦈\",\"description\":\"shark\",\"category\":\"Nature\",\"aliases\":[\"shark\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐳\",\"description\":\"spouting whale\",\"category\":\"Nature\",\"aliases\":[\"whale\"],\"tags\":[\"sea\"]},{\"emoji\":\"🐋\",\"description\":\"whale\",\"category\":\"Nature\",\"aliases\":[\"whale2\"],\"tags\":[]},{\"emoji\":\"🐊\",\"description\":\"crocodile\",\"category\":\"Nature\",\"aliases\":[\"crocodile\"],\"tags\":[]},{\"emoji\":\"🐆\",\"description\":\"leopard\",\"category\":\"Nature\",\"aliases\":[\"leopard\"],\"tags\":[]},{\"emoji\":\"🐅\",\"description\":\"tiger\",\"category\":\"Nature\",\"aliases\":[\"tiger2\"],\"tags\":[]},{\"emoji\":\"🐃\",\"description\":\"water buffalo\",\"category\":\"Nature\",\"aliases\":[\"water_buffalo\"],\"tags\":[]},{\"emoji\":\"🐂\",\"description\":\"ox\",\"category\":\"Nature\",\"aliases\":[\"ox\"],\"tags\":[]},{\"emoji\":\"🐄\",\"description\":\"cow\",\"category\":\"Nature\",\"aliases\":[\"cow2\"],\"tags\":[]},{\"emoji\":\"🦌\",\"description\":\"deer\",\"category\":\"Nature\",\"aliases\":[\"deer\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐪\",\"description\":\"camel\",\"category\":\"Nature\",\"aliases\":[\"dromedary_camel\"],\"tags\":[\"desert\"]},{\"emoji\":\"🐫\",\"description\":\"two-hump camel\",\"category\":\"Nature\",\"aliases\":[\"camel\"],\"tags\":[]},{\"emoji\":\"🐘\",\"description\":\"elephant\",\"category\":\"Nature\",\"aliases\":[\"elephant\"],\"tags\":[]},{\"emoji\":\"🦏\",\"description\":\"rhinoceros\",\"category\":\"Nature\",\"aliases\":[\"rhinoceros\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🦍\",\"description\":\"gorilla\",\"category\":\"Nature\",\"aliases\":[\"gorilla\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🐎\",\"description\":\"horse\",\"category\":\"Nature\",\"aliases\":[\"racehorse\"],\"tags\":[\"speed\"]},{\"emoji\":\"🐖\",\"description\":\"pig\",\"category\":\"Nature\",\"aliases\":[\"pig2\"],\"tags\":[]},{\"emoji\":\"🐐\",\"description\":\"goat\",\"category\":\"Nature\",\"aliases\":[\"goat\"],\"tags\":[]},{\"emoji\":\"🐏\",\"description\":\"ram\",\"category\":\"Nature\",\"aliases\":[\"ram\"],\"tags\":[]},{\"emoji\":\"🐑\",\"description\":\"sheep\",\"category\":\"Nature\",\"aliases\":[\"sheep\"],\"tags\":[]},{\"emoji\":\"🐕\",\"description\":\"dog\",\"category\":\"Nature\",\"aliases\":[\"dog2\"],\"tags\":[]},{\"emoji\":\"🐩\",\"description\":\"poodle\",\"category\":\"Nature\",\"aliases\":[\"poodle\"],\"tags\":[\"dog\"]},{\"emoji\":\"🐈\",\"description\":\"cat\",\"category\":\"Nature\",\"aliases\":[\"cat2\"],\"tags\":[]},{\"emoji\":\"🐓\",\"description\":\"rooster\",\"category\":\"Nature\",\"aliases\":[\"rooster\"],\"tags\":[]},{\"emoji\":\"🦃\",\"description\":\"turkey\",\"category\":\"Nature\",\"aliases\":[\"turkey\"],\"tags\":[\"thanksgiving\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🕊\",\"description\":\"dove\",\"category\":\"Nature\",\"aliases\":[\"dove\"],\"tags\":[\"peace\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🐇\",\"description\":\"rabbit\",\"category\":\"Nature\",\"aliases\":[\"rabbit2\"],\"tags\":[]},{\"emoji\":\"🐁\",\"description\":\"mouse\",\"category\":\"Nature\",\"aliases\":[\"mouse2\"],\"tags\":[]},{\"emoji\":\"🐀\",\"description\":\"rat\",\"category\":\"Nature\",\"aliases\":[\"rat\"],\"tags\":[]},{\"emoji\":\"🐿\",\"description\":\"chipmunk\",\"category\":\"Nature\",\"aliases\":[\"chipmunk\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🐾\",\"description\":\"paw prints\",\"category\":\"Nature\",\"aliases\":[\"feet\",\"paw_prints\"],\"tags\":[]},{\"emoji\":\"🐉\",\"description\":\"dragon\",\"category\":\"Nature\",\"aliases\":[\"dragon\"],\"tags\":[]},{\"emoji\":\"🐲\",\"description\":\"dragon face\",\"category\":\"Nature\",\"aliases\":[\"dragon_face\"],\"tags\":[]},{\"emoji\":\"🌵\",\"description\":\"cactus\",\"category\":\"Nature\",\"aliases\":[\"cactus\"],\"tags\":[]},{\"emoji\":\"🎄\",\"description\":\"Christmas tree\",\"category\":\"Nature\",\"aliases\":[\"christmas_tree\"],\"tags\":[]},{\"emoji\":\"🌲\",\"description\":\"evergreen tree\",\"category\":\"Nature\",\"aliases\":[\"evergreen_tree\"],\"tags\":[\"wood\"]},{\"emoji\":\"🌳\",\"description\":\"deciduous tree\",\"category\":\"Nature\",\"aliases\":[\"deciduous_tree\"],\"tags\":[\"wood\"]},{\"emoji\":\"🌴\",\"description\":\"palm tree\",\"category\":\"Nature\",\"aliases\":[\"palm_tree\"],\"tags\":[]},{\"emoji\":\"🌱\",\"description\":\"seedling\",\"category\":\"Nature\",\"aliases\":[\"seedling\"],\"tags\":[\"plant\"]},{\"emoji\":\"🌿\",\"description\":\"herb\",\"category\":\"Nature\",\"aliases\":[\"herb\"],\"tags\":[]},{\"emoji\":\"☘️\",\"description\":\"shamrock\",\"category\":\"Nature\",\"aliases\":[\"shamrock\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🍀\",\"description\":\"four leaf clover\",\"category\":\"Nature\",\"aliases\":[\"four_leaf_clover\"],\"tags\":[\"luck\"]},{\"emoji\":\"🎍\",\"description\":\"pine decoration\",\"category\":\"Nature\",\"aliases\":[\"bamboo\"],\"tags\":[]},{\"emoji\":\"🎋\",\"description\":\"tanabata tree\",\"category\":\"Nature\",\"aliases\":[\"tanabata_tree\"],\"tags\":[]},{\"emoji\":\"🍃\",\"description\":\"leaf fluttering in wind\",\"category\":\"Nature\",\"aliases\":[\"leaves\"],\"tags\":[\"leaf\"]},{\"emoji\":\"🍂\",\"description\":\"fallen leaf\",\"category\":\"Nature\",\"aliases\":[\"fallen_leaf\"],\"tags\":[\"autumn\"]},{\"emoji\":\"🍁\",\"description\":\"maple leaf\",\"category\":\"Nature\",\"aliases\":[\"maple_leaf\"],\"tags\":[\"canada\"]},{\"emoji\":\"🍄\",\"description\":\"mushroom\",\"category\":\"Nature\",\"aliases\":[\"mushroom\"],\"tags\":[]},{\"emoji\":\"🌾\",\"description\":\"sheaf of rice\",\"category\":\"Nature\",\"aliases\":[\"ear_of_rice\"],\"tags\":[]},{\"emoji\":\"💐\",\"description\":\"bouquet\",\"category\":\"Nature\",\"aliases\":[\"bouquet\"],\"tags\":[\"flowers\"]},{\"emoji\":\"🌷\",\"description\":\"tulip\",\"category\":\"Nature\",\"aliases\":[\"tulip\"],\"tags\":[\"flower\"]},{\"emoji\":\"🌹\",\"description\":\"rose\",\"category\":\"Nature\",\"aliases\":[\"rose\"],\"tags\":[\"flower\"]},{\"emoji\":\"🥀\",\"description\":\"wilted flower\",\"category\":\"Nature\",\"aliases\":[\"wilted_flower\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🌻\",\"description\":\"sunflower\",\"category\":\"Nature\",\"aliases\":[\"sunflower\"],\"tags\":[]},{\"emoji\":\"🌼\",\"description\":\"blossom\",\"category\":\"Nature\",\"aliases\":[\"blossom\"],\"tags\":[]},{\"emoji\":\"🌸\",\"description\":\"cherry blossom\",\"category\":\"Nature\",\"aliases\":[\"cherry_blossom\"],\"tags\":[\"flower\",\"spring\"]},{\"emoji\":\"🌺\",\"description\":\"hibiscus\",\"category\":\"Nature\",\"aliases\":[\"hibiscus\"],\"tags\":[]},{\"emoji\":\"🌎\",\"description\":\"globe showing Americas\",\"category\":\"Nature\",\"aliases\":[\"earth_americas\"],\"tags\":[\"globe\",\"world\",\"international\"]},{\"emoji\":\"🌍\",\"description\":\"globe showing Europe-Africa\",\"category\":\"Nature\",\"aliases\":[\"earth_africa\"],\"tags\":[\"globe\",\"world\",\"international\"]},{\"emoji\":\"🌏\",\"description\":\"globe showing Asia-Australia\",\"category\":\"Nature\",\"aliases\":[\"earth_asia\"],\"tags\":[\"globe\",\"world\",\"international\"]},{\"emoji\":\"🌕\",\"description\":\"full moon\",\"category\":\"Nature\",\"aliases\":[\"full_moon\"],\"tags\":[]},{\"emoji\":\"🌖\",\"description\":\"waning gibbous moon\",\"category\":\"Nature\",\"aliases\":[\"waning_gibbous_moon\"],\"tags\":[]},{\"emoji\":\"🌗\",\"description\":\"last quarter moon\",\"category\":\"Nature\",\"aliases\":[\"last_quarter_moon\"],\"tags\":[]},{\"emoji\":\"🌘\",\"description\":\"waning crescent moon\",\"category\":\"Nature\",\"aliases\":[\"waning_crescent_moon\"],\"tags\":[]},{\"emoji\":\"🌑\",\"description\":\"new moon\",\"category\":\"Nature\",\"aliases\":[\"new_moon\"],\"tags\":[]},{\"emoji\":\"🌒\",\"description\":\"waxing crescent moon\",\"category\":\"Nature\",\"aliases\":[\"waxing_crescent_moon\"],\"tags\":[]},{\"emoji\":\"🌓\",\"description\":\"first quarter moon\",\"category\":\"Nature\",\"aliases\":[\"first_quarter_moon\"],\"tags\":[]},{\"emoji\":\"🌔\",\"description\":\"waxing gibbous moon\",\"category\":\"Nature\",\"aliases\":[\"moon\",\"waxing_gibbous_moon\"],\"tags\":[]},{\"emoji\":\"🌚\",\"description\":\"new moon face\",\"category\":\"Nature\",\"aliases\":[\"new_moon_with_face\"],\"tags\":[]},{\"emoji\":\"🌝\",\"description\":\"full moon with face\",\"category\":\"Nature\",\"aliases\":[\"full_moon_with_face\"],\"tags\":[]},{\"emoji\":\"🌞\",\"description\":\"sun with face\",\"category\":\"Nature\",\"aliases\":[\"sun_with_face\"],\"tags\":[\"summer\"]},{\"emoji\":\"🌛\",\"description\":\"first quarter moon with face\",\"category\":\"Nature\",\"aliases\":[\"first_quarter_moon_with_face\"],\"tags\":[]},{\"emoji\":\"🌜\",\"description\":\"last quarter moon with face\",\"category\":\"Nature\",\"aliases\":[\"last_quarter_moon_with_face\"],\"tags\":[]},{\"emoji\":\"🌙\",\"description\":\"crescent moon\",\"category\":\"Nature\",\"aliases\":[\"crescent_moon\"],\"tags\":[\"night\"]},{\"emoji\":\"💫\",\"description\":\"dizzy\",\"category\":\"Nature\",\"aliases\":[\"dizzy\"],\"tags\":[\"star\"]},{\"emoji\":\"⭐️\",\"description\":\"white medium star\",\"category\":\"Nature\",\"aliases\":[\"star\"],\"tags\":[],\"unicode_version\":\"5.1\"},{\"emoji\":\"🌟\",\"description\":\"glowing star\",\"category\":\"Nature\",\"aliases\":[\"star2\"],\"tags\":[]},{\"emoji\":\"✨\",\"description\":\"sparkles\",\"category\":\"Nature\",\"aliases\":[\"sparkles\"],\"tags\":[\"shiny\"]},{\"emoji\":\"⚡️\",\"description\":\"high voltage\",\"category\":\"Nature\",\"aliases\":[\"zap\"],\"tags\":[\"lightning\",\"thunder\"],\"unicode_version\":\"4.0\"},{\"emoji\":\"🔥\",\"description\":\"fire\",\"category\":\"Nature\",\"aliases\":[\"fire\"],\"tags\":[\"burn\"]},{\"emoji\":\"💥\",\"description\":\"collision\",\"category\":\"Nature\",\"aliases\":[\"boom\",\"collision\"],\"tags\":[\"explode\"]},{\"emoji\":\"☄\",\"description\":\"comet\",\"category\":\"Nature\",\"aliases\":[\"comet\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"☀️\",\"description\":\"sun\",\"category\":\"Nature\",\"aliases\":[\"sunny\"],\"tags\":[\"weather\"]},{\"emoji\":\"🌤\",\"description\":\"sun behind small cloud\",\"category\":\"Nature\",\"aliases\":[\"sun_behind_small_cloud\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛅️\",\"description\":\"sun behind cloud\",\"category\":\"Nature\",\"aliases\":[\"partly_sunny\"],\"tags\":[\"weather\",\"cloud\"],\"unicode_version\":\"5.2\"},{\"emoji\":\"🌥\",\"description\":\"sun behind large cloud\",\"category\":\"Nature\",\"aliases\":[\"sun_behind_large_cloud\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌦\",\"description\":\"sun behind rain cloud\",\"category\":\"Nature\",\"aliases\":[\"sun_behind_rain_cloud\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌈\",\"description\":\"rainbow\",\"category\":\"Nature\",\"aliases\":[\"rainbow\"],\"tags\":[]},{\"emoji\":\"☁️\",\"description\":\"cloud\",\"category\":\"Nature\",\"aliases\":[\"cloud\"],\"tags\":[]},{\"emoji\":\"🌧\",\"description\":\"cloud with rain\",\"category\":\"Nature\",\"aliases\":[\"cloud_with_rain\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛈\",\"description\":\"cloud with lightning and rain\",\"category\":\"Nature\",\"aliases\":[\"cloud_with_lightning_and_rain\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌩\",\"description\":\"cloud with lightning\",\"category\":\"Nature\",\"aliases\":[\"cloud_with_lightning\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌨\",\"description\":\"cloud with snow\",\"category\":\"Nature\",\"aliases\":[\"cloud_with_snow\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"☃️\",\"description\":\"snowman\",\"category\":\"Nature\",\"aliases\":[\"snowman_with_snow\"],\"tags\":[\"winter\",\"christmas\"],\"ios_version\":\"9.1\"},{\"emoji\":\"⛄️\",\"description\":\"snowman without snow\",\"category\":\"Nature\",\"aliases\":[\"snowman\"],\"tags\":[\"winter\"],\"unicode_version\":\"5.2\"},{\"emoji\":\"❄️\",\"description\":\"snowflake\",\"category\":\"Nature\",\"aliases\":[\"snowflake\"],\"tags\":[\"winter\",\"cold\",\"weather\"]},{\"emoji\":\"🌬\",\"description\":\"wind face\",\"category\":\"Nature\",\"aliases\":[\"wind_face\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"💨\",\"description\":\"dashing away\",\"category\":\"Nature\",\"aliases\":[\"dash\"],\"tags\":[\"wind\",\"blow\",\"fast\"]},{\"emoji\":\"🌪\",\"description\":\"tornado\",\"category\":\"Nature\",\"aliases\":[\"tornado\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌫\",\"description\":\"fog\",\"category\":\"Nature\",\"aliases\":[\"fog\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌊\",\"description\":\"water wave\",\"category\":\"Nature\",\"aliases\":[\"ocean\"],\"tags\":[\"sea\"]},{\"emoji\":\"💧\",\"description\":\"droplet\",\"category\":\"Nature\",\"aliases\":[\"droplet\"],\"tags\":[\"water\"]},{\"emoji\":\"💦\",\"description\":\"sweat droplets\",\"category\":\"Nature\",\"aliases\":[\"sweat_drops\"],\"tags\":[\"water\",\"workout\"]},{\"emoji\":\"☔️\",\"description\":\"umbrella with rain drops\",\"category\":\"Nature\",\"aliases\":[\"umbrella\"],\"tags\":[\"rain\",\"weather\"],\"unicode_version\":\"4.0\"},{\"emoji\":\"🍏\",\"description\":\"green apple\",\"category\":\"Foods\",\"aliases\":[\"green_apple\"],\"tags\":[\"fruit\"]},{\"emoji\":\"🍎\",\"description\":\"red apple\",\"category\":\"Foods\",\"aliases\":[\"apple\"],\"tags\":[]},{\"emoji\":\"🍐\",\"description\":\"pear\",\"category\":\"Foods\",\"aliases\":[\"pear\"],\"tags\":[]},{\"emoji\":\"🍊\",\"description\":\"tangerine\",\"category\":\"Foods\",\"aliases\":[\"tangerine\",\"orange\",\"mandarin\"],\"tags\":[]},{\"emoji\":\"🍋\",\"description\":\"lemon\",\"category\":\"Foods\",\"aliases\":[\"lemon\"],\"tags\":[]},{\"emoji\":\"🍌\",\"description\":\"banana\",\"category\":\"Foods\",\"aliases\":[\"banana\"],\"tags\":[\"fruit\"]},{\"emoji\":\"🍉\",\"description\":\"watermelon\",\"category\":\"Foods\",\"aliases\":[\"watermelon\"],\"tags\":[]},{\"emoji\":\"🍇\",\"description\":\"grapes\",\"category\":\"Foods\",\"aliases\":[\"grapes\"],\"tags\":[]},{\"emoji\":\"🍓\",\"description\":\"strawberry\",\"category\":\"Foods\",\"aliases\":[\"strawberry\"],\"tags\":[\"fruit\"]},{\"emoji\":\"🍈\",\"description\":\"melon\",\"category\":\"Foods\",\"aliases\":[\"melon\"],\"tags\":[]},{\"emoji\":\"🍒\",\"description\":\"cherries\",\"category\":\"Foods\",\"aliases\":[\"cherries\"],\"tags\":[\"fruit\"]},{\"emoji\":\"🍑\",\"description\":\"peach\",\"category\":\"Foods\",\"aliases\":[\"peach\"],\"tags\":[]},{\"emoji\":\"🍍\",\"description\":\"pineapple\",\"category\":\"Foods\",\"aliases\":[\"pineapple\"],\"tags\":[]},{\"emoji\":\"🥝\",\"description\":\"kiwi fruit\",\"category\":\"Foods\",\"aliases\":[\"kiwi_fruit\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🥑\",\"description\":\"avocado\",\"category\":\"Foods\",\"aliases\":[\"avocado\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍅\",\"description\":\"tomato\",\"category\":\"Foods\",\"aliases\":[\"tomato\"],\"tags\":[]},{\"emoji\":\"🍆\",\"description\":\"eggplant\",\"category\":\"Foods\",\"aliases\":[\"eggplant\"],\"tags\":[\"aubergine\"]},{\"emoji\":\"🥒\",\"description\":\"cucumber\",\"category\":\"Foods\",\"aliases\":[\"cucumber\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🥕\",\"description\":\"carrot\",\"category\":\"Foods\",\"aliases\":[\"carrot\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🌽\",\"description\":\"ear of corn\",\"category\":\"Foods\",\"aliases\":[\"corn\"],\"tags\":[]},{\"emoji\":\"🌶\",\"description\":\"hot pepper\",\"category\":\"Foods\",\"aliases\":[\"hot_pepper\"],\"tags\":[\"spicy\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🥔\",\"description\":\"potato\",\"category\":\"Foods\",\"aliases\":[\"potato\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍠\",\"description\":\"roasted sweet potato\",\"category\":\"Foods\",\"aliases\":[\"sweet_potato\"],\"tags\":[]},{\"emoji\":\"🌰\",\"description\":\"chestnut\",\"category\":\"Foods\",\"aliases\":[\"chestnut\"],\"tags\":[]},{\"emoji\":\"🥜\",\"description\":\"peanuts\",\"category\":\"Foods\",\"aliases\":[\"peanuts\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍯\",\"description\":\"honey pot\",\"category\":\"Foods\",\"aliases\":[\"honey_pot\"],\"tags\":[]},{\"emoji\":\"🥐\",\"description\":\"croissant\",\"category\":\"Foods\",\"aliases\":[\"croissant\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍞\",\"description\":\"bread\",\"category\":\"Foods\",\"aliases\":[\"bread\"],\"tags\":[\"toast\"]},{\"emoji\":\"🥖\",\"description\":\"baguette bread\",\"category\":\"Foods\",\"aliases\":[\"baguette_bread\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🧀\",\"description\":\"cheese wedge\",\"category\":\"Foods\",\"aliases\":[\"cheese\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🥚\",\"description\":\"egg\",\"category\":\"Foods\",\"aliases\":[\"egg\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍳\",\"description\":\"cooking\",\"category\":\"Foods\",\"aliases\":[\"fried_egg\"],\"tags\":[\"breakfast\"]},{\"emoji\":\"🥓\",\"description\":\"bacon\",\"category\":\"Foods\",\"aliases\":[\"bacon\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🥞\",\"description\":\"pancakes\",\"category\":\"Foods\",\"aliases\":[\"pancakes\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍤\",\"description\":\"fried shrimp\",\"category\":\"Foods\",\"aliases\":[\"fried_shrimp\"],\"tags\":[\"tempura\"]},{\"emoji\":\"🍗\",\"description\":\"poultry leg\",\"category\":\"Foods\",\"aliases\":[\"poultry_leg\"],\"tags\":[\"meat\",\"chicken\"]},{\"emoji\":\"🍖\",\"description\":\"meat on bone\",\"category\":\"Foods\",\"aliases\":[\"meat_on_bone\"],\"tags\":[]},{\"emoji\":\"🍕\",\"description\":\"pizza\",\"category\":\"Foods\",\"aliases\":[\"pizza\"],\"tags\":[]},{\"emoji\":\"🌭\",\"description\":\"hot dog\",\"category\":\"Foods\",\"aliases\":[\"hotdog\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🍔\",\"description\":\"hamburger\",\"category\":\"Foods\",\"aliases\":[\"hamburger\"],\"tags\":[\"burger\"]},{\"emoji\":\"🍟\",\"description\":\"french fries\",\"category\":\"Foods\",\"aliases\":[\"fries\"],\"tags\":[]},{\"emoji\":\"🥙\",\"description\":\"stuffed flatbread\",\"category\":\"Foods\",\"aliases\":[\"stuffed_flatbread\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🌮\",\"description\":\"taco\",\"category\":\"Foods\",\"aliases\":[\"taco\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌯\",\"description\":\"burrito\",\"category\":\"Foods\",\"aliases\":[\"burrito\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🥗\",\"description\":\"green salad\",\"category\":\"Foods\",\"aliases\":[\"green_salad\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🥘\",\"description\":\"shallow pan of food\",\"category\":\"Foods\",\"aliases\":[\"shallow_pan_of_food\"],\"tags\":[\"paella\",\"curry\"]},{\"emoji\":\"🍝\",\"description\":\"spaghetti\",\"category\":\"Foods\",\"aliases\":[\"spaghetti\"],\"tags\":[\"pasta\"]},{\"emoji\":\"🍜\",\"description\":\"steaming bowl\",\"category\":\"Foods\",\"aliases\":[\"ramen\"],\"tags\":[\"noodle\"]},{\"emoji\":\"🍲\",\"description\":\"pot of food\",\"category\":\"Foods\",\"aliases\":[\"stew\"],\"tags\":[]},{\"emoji\":\"🍥\",\"description\":\"fish cake with swirl\",\"category\":\"Foods\",\"aliases\":[\"fish_cake\"],\"tags\":[]},{\"emoji\":\"🍣\",\"description\":\"sushi\",\"category\":\"Foods\",\"aliases\":[\"sushi\"],\"tags\":[]},{\"emoji\":\"🍱\",\"description\":\"bento box\",\"category\":\"Foods\",\"aliases\":[\"bento\"],\"tags\":[]},{\"emoji\":\"🍛\",\"description\":\"curry rice\",\"category\":\"Foods\",\"aliases\":[\"curry\"],\"tags\":[]},{\"emoji\":\"🍚\",\"description\":\"cooked rice\",\"category\":\"Foods\",\"aliases\":[\"rice\"],\"tags\":[]},{\"emoji\":\"🍙\",\"description\":\"rice ball\",\"category\":\"Foods\",\"aliases\":[\"rice_ball\"],\"tags\":[]},{\"emoji\":\"🍘\",\"description\":\"rice cracker\",\"category\":\"Foods\",\"aliases\":[\"rice_cracker\"],\"tags\":[]},{\"emoji\":\"🍢\",\"description\":\"oden\",\"category\":\"Foods\",\"aliases\":[\"oden\"],\"tags\":[]},{\"emoji\":\"🍡\",\"description\":\"dango\",\"category\":\"Foods\",\"aliases\":[\"dango\"],\"tags\":[]},{\"emoji\":\"🍧\",\"description\":\"shaved ice\",\"category\":\"Foods\",\"aliases\":[\"shaved_ice\"],\"tags\":[]},{\"emoji\":\"🍨\",\"description\":\"ice cream\",\"category\":\"Foods\",\"aliases\":[\"ice_cream\"],\"tags\":[]},{\"emoji\":\"🍦\",\"description\":\"soft ice cream\",\"category\":\"Foods\",\"aliases\":[\"icecream\"],\"tags\":[]},{\"emoji\":\"🍰\",\"description\":\"shortcake\",\"category\":\"Foods\",\"aliases\":[\"cake\"],\"tags\":[\"dessert\"]},{\"emoji\":\"🎂\",\"description\":\"birthday cake\",\"category\":\"Foods\",\"aliases\":[\"birthday\"],\"tags\":[\"party\"]},{\"emoji\":\"🍮\",\"description\":\"custard\",\"category\":\"Foods\",\"aliases\":[\"custard\"],\"tags\":[]},{\"emoji\":\"🍭\",\"description\":\"lollipop\",\"category\":\"Foods\",\"aliases\":[\"lollipop\"],\"tags\":[]},{\"emoji\":\"🍬\",\"description\":\"candy\",\"category\":\"Foods\",\"aliases\":[\"candy\"],\"tags\":[\"sweet\"]},{\"emoji\":\"🍫\",\"description\":\"chocolate bar\",\"category\":\"Foods\",\"aliases\":[\"chocolate_bar\"],\"tags\":[]},{\"emoji\":\"🍿\",\"description\":\"popcorn\",\"category\":\"Foods\",\"aliases\":[\"popcorn\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🍩\",\"description\":\"doughnut\",\"category\":\"Foods\",\"aliases\":[\"doughnut\"],\"tags\":[]},{\"emoji\":\"🍪\",\"description\":\"cookie\",\"category\":\"Foods\",\"aliases\":[\"cookie\"],\"tags\":[]},{\"emoji\":\"🥛\",\"description\":\"glass of milk\",\"category\":\"Foods\",\"aliases\":[\"milk_glass\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍼\",\"description\":\"baby bottle\",\"category\":\"Foods\",\"aliases\":[\"baby_bottle\"],\"tags\":[\"milk\"]},{\"emoji\":\"☕️\",\"description\":\"hot beverage\",\"category\":\"Foods\",\"aliases\":[\"coffee\"],\"tags\":[\"cafe\",\"espresso\"],\"unicode_version\":\"4.0\"},{\"emoji\":\"🍵\",\"description\":\"teacup without handle\",\"category\":\"Foods\",\"aliases\":[\"tea\"],\"tags\":[\"green\",\"breakfast\"]},{\"emoji\":\"🍶\",\"description\":\"sake\",\"category\":\"Foods\",\"aliases\":[\"sake\"],\"tags\":[]},{\"emoji\":\"🍺\",\"description\":\"beer mug\",\"category\":\"Foods\",\"aliases\":[\"beer\"],\"tags\":[\"drink\"]},{\"emoji\":\"🍻\",\"description\":\"clinking beer mugs\",\"category\":\"Foods\",\"aliases\":[\"beers\"],\"tags\":[\"drinks\"]},{\"emoji\":\"🥂\",\"description\":\"clinking glasses\",\"category\":\"Foods\",\"aliases\":[\"clinking_glasses\"],\"tags\":[\"cheers\",\"toast\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍷\",\"description\":\"wine glass\",\"category\":\"Foods\",\"aliases\":[\"wine_glass\"],\"tags\":[]},{\"emoji\":\"🥃\",\"description\":\"tumbler glass\",\"category\":\"Foods\",\"aliases\":[\"tumbler_glass\"],\"tags\":[\"whisky\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍸\",\"description\":\"cocktail glass\",\"category\":\"Foods\",\"aliases\":[\"cocktail\"],\"tags\":[\"drink\"]},{\"emoji\":\"🍹\",\"description\":\"tropical drink\",\"category\":\"Foods\",\"aliases\":[\"tropical_drink\"],\"tags\":[\"summer\",\"vacation\"]},{\"emoji\":\"🍾\",\"description\":\"bottle with popping cork\",\"category\":\"Foods\",\"aliases\":[\"champagne\"],\"tags\":[\"bottle\",\"bubbly\",\"celebration\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🥄\",\"description\":\"spoon\",\"category\":\"Foods\",\"aliases\":[\"spoon\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🍴\",\"description\":\"fork and knife\",\"category\":\"Foods\",\"aliases\":[\"fork_and_knife\"],\"tags\":[\"cutlery\"]},{\"emoji\":\"🍽\",\"description\":\"fork and knife with plate\",\"category\":\"Foods\",\"aliases\":[\"plate_with_cutlery\"],\"tags\":[\"dining\",\"dinner\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⚽️\",\"description\":\"soccer ball\",\"category\":\"Activity\",\"aliases\":[\"soccer\"],\"tags\":[\"sports\"],\"unicode_version\":\"5.2\"},{\"emoji\":\"🏀\",\"description\":\"basketball\",\"category\":\"Activity\",\"aliases\":[\"basketball\"],\"tags\":[\"sports\"]},{\"emoji\":\"🏈\",\"description\":\"american football\",\"category\":\"Activity\",\"aliases\":[\"football\"],\"tags\":[\"sports\"]},{\"emoji\":\"⚾️\",\"description\":\"baseball\",\"category\":\"Activity\",\"aliases\":[\"baseball\"],\"tags\":[\"sports\"],\"unicode_version\":\"5.2\"},{\"emoji\":\"🎾\",\"description\":\"tennis\",\"category\":\"Activity\",\"aliases\":[\"tennis\"],\"tags\":[\"sports\"]},{\"emoji\":\"🏐\",\"description\":\"volleyball\",\"category\":\"Activity\",\"aliases\":[\"volleyball\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏉\",\"description\":\"rugby football\",\"category\":\"Activity\",\"aliases\":[\"rugby_football\"],\"tags\":[]},{\"emoji\":\"🎱\",\"description\":\"pool 8 ball\",\"category\":\"Activity\",\"aliases\":[\"8ball\"],\"tags\":[\"pool\",\"billiards\"]},{\"emoji\":\"🏓\",\"description\":\"ping pong\",\"category\":\"Activity\",\"aliases\":[\"ping_pong\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏸\",\"description\":\"badminton\",\"category\":\"Activity\",\"aliases\":[\"badminton\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🥅\",\"description\":\"goal net\",\"category\":\"Activity\",\"aliases\":[\"goal_net\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🏒\",\"description\":\"ice hockey\",\"category\":\"Activity\",\"aliases\":[\"ice_hockey\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏑\",\"description\":\"field hockey\",\"category\":\"Activity\",\"aliases\":[\"field_hockey\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏏\",\"description\":\"cricket\",\"category\":\"Activity\",\"aliases\":[\"cricket\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛳️\",\"description\":\"flag in hole\",\"category\":\"Activity\",\"aliases\":[\"golf\"],\"tags\":[],\"unicode_version\":\"5.2\"},{\"emoji\":\"🏹\",\"description\":\"bow and arrow\",\"category\":\"Activity\",\"aliases\":[\"bow_and_arrow\"],\"tags\":[\"archery\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎣\",\"description\":\"fishing pole\",\"category\":\"Activity\",\"aliases\":[\"fishing_pole_and_fish\"],\"tags\":[]},{\"emoji\":\"🥊\",\"description\":\"boxing glove\",\"category\":\"Activity\",\"aliases\":[\"boxing_glove\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🥋\",\"description\":\"martial arts uniform\",\"category\":\"Activity\",\"aliases\":[\"martial_arts_uniform\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"⛸\",\"description\":\"ice skate\",\"category\":\"Activity\",\"aliases\":[\"ice_skate\"],\"tags\":[\"skating\"],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎿\",\"description\":\"skis\",\"category\":\"Activity\",\"aliases\":[\"ski\"],\"tags\":[]},{\"emoji\":\"⛷\",\"description\":\"skier\",\"category\":\"Activity\",\"aliases\":[\"skier\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏂\",\"description\":\"snowboarder\",\"category\":\"Activity\",\"aliases\":[\"snowboarder\"],\"tags\":[]},{\"emoji\":\"🏋️‍♀️\",\"description\":\"woman lifting weights\",\"category\":\"Activity\",\"aliases\":[\"weight_lifting_woman\"],\"tags\":[\"gym\",\"workout\"]},{\"emoji\":\"🏋\",\"description\":\"person lifting weights\",\"category\":\"Activity\",\"aliases\":[\"weight_lifting_man\"],\"tags\":[\"gym\",\"workout\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤺\",\"description\":\"person fencing\",\"category\":\"Activity\",\"aliases\":[\"person_fencing\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤼‍♀\",\"description\":\"women wrestling\",\"category\":\"Activity\",\"aliases\":[\"women_wrestling\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤼‍♂\",\"description\":\"men wrestling\",\"category\":\"Activity\",\"aliases\":[\"men_wrestling\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤸‍♀\",\"description\":\"woman cartwheeling\",\"category\":\"Activity\",\"aliases\":[\"woman_cartwheeling\"],\"tags\":[]},{\"emoji\":\"🤸‍♂\",\"description\":\"man cartwheeling\",\"category\":\"Activity\",\"aliases\":[\"man_cartwheeling\"],\"tags\":[]},{\"emoji\":\"⛹️‍♀️\",\"description\":\"woman bouncing ball\",\"category\":\"Activity\",\"aliases\":[\"basketball_woman\"],\"tags\":[],\"unicode_version\":\"7.0\"},{\"emoji\":\"⛹\",\"description\":\"person bouncing ball\",\"category\":\"Activity\",\"aliases\":[\"basketball_man\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🤾‍♀\",\"description\":\"woman playing handball\",\"category\":\"Activity\",\"aliases\":[\"woman_playing_handball\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤾‍♂\",\"description\":\"man playing handball\",\"category\":\"Activity\",\"aliases\":[\"man_playing_handball\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🏌️‍♀️\",\"description\":\"woman golfing\",\"category\":\"Activity\",\"aliases\":[\"golfing_woman\"],\"tags\":[]},{\"emoji\":\"🏌\",\"description\":\"person golfing\",\"category\":\"Activity\",\"aliases\":[\"golfing_man\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏄‍♀\",\"description\":\"woman surfing\",\"category\":\"Activity\",\"aliases\":[\"surfing_woman\"],\"tags\":[],\"unicode_version\":\"7.0\"},{\"emoji\":\"🏄\",\"description\":\"person surfing\",\"category\":\"Activity\",\"aliases\":[\"surfing_man\",\"surfer\"],\"tags\":[]},{\"emoji\":\"🏊‍♀\",\"description\":\"woman swimming\",\"category\":\"Activity\",\"aliases\":[\"swimming_woman\"],\"tags\":[]},{\"emoji\":\"🏊\",\"description\":\"person swimming\",\"category\":\"Activity\",\"aliases\":[\"swimming_man\",\"swimmer\"],\"tags\":[]},{\"emoji\":\"🤽‍♀\",\"description\":\"woman playing water polo\",\"category\":\"Activity\",\"aliases\":[\"woman_playing_water_polo\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤽‍♂\",\"description\":\"man playing water polo\",\"category\":\"Activity\",\"aliases\":[\"man_playing_water_polo\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🚣‍♀\",\"description\":\"woman rowing boat\",\"category\":\"Activity\",\"aliases\":[\"rowing_woman\"],\"tags\":[]},{\"emoji\":\"🚣\",\"description\":\"person rowing boat\",\"category\":\"Activity\",\"aliases\":[\"rowing_man\",\"rowboat\"],\"tags\":[]},{\"emoji\":\"🏇\",\"description\":\"horse racing\",\"category\":\"Activity\",\"aliases\":[\"horse_racing\"],\"tags\":[]},{\"emoji\":\"🚴‍♀\",\"description\":\"woman biking\",\"category\":\"Activity\",\"aliases\":[\"biking_woman\"],\"tags\":[]},{\"emoji\":\"🚴\",\"description\":\"person biking\",\"category\":\"Activity\",\"aliases\":[\"biking_man\",\"bicyclist\"],\"tags\":[]},{\"emoji\":\"🚵‍♀\",\"description\":\"woman mountain biking\",\"category\":\"Activity\",\"aliases\":[\"mountain_biking_woman\"],\"tags\":[]},{\"emoji\":\"🚵\",\"description\":\"person mountain biking\",\"category\":\"Activity\",\"aliases\":[\"mountain_biking_man\",\"mountain_bicyclist\"],\"tags\":[]},{\"emoji\":\"🎽\",\"description\":\"running shirt\",\"category\":\"Activity\",\"aliases\":[\"running_shirt_with_sash\"],\"tags\":[\"marathon\"]},{\"emoji\":\"🏅\",\"description\":\"sports medal\",\"category\":\"Activity\",\"aliases\":[\"medal_sports\"],\"tags\":[\"gold\",\"winner\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎖\",\"description\":\"military medal\",\"category\":\"Activity\",\"aliases\":[\"medal_military\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🥇\",\"description\":\"1st place medal\",\"category\":\"Activity\",\"aliases\":[\"1st_place_medal\"],\"tags\":[\"gold\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"🥈\",\"description\":\"2nd place medal\",\"category\":\"Activity\",\"aliases\":[\"2nd_place_medal\"],\"tags\":[\"silver\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"🥉\",\"description\":\"3rd place medal\",\"category\":\"Activity\",\"aliases\":[\"3rd_place_medal\"],\"tags\":[\"bronze\"],\"unicode_version\":\"9.0\"},{\"emoji\":\"🏆\",\"description\":\"trophy\",\"category\":\"Activity\",\"aliases\":[\"trophy\"],\"tags\":[\"award\",\"contest\",\"winner\"]},{\"emoji\":\"🏵\",\"description\":\"rosette\",\"category\":\"Activity\",\"aliases\":[\"rosette\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎗\",\"description\":\"reminder ribbon\",\"category\":\"Activity\",\"aliases\":[\"reminder_ribbon\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎫\",\"description\":\"ticket\",\"category\":\"Activity\",\"aliases\":[\"ticket\"],\"tags\":[]},{\"emoji\":\"🎟\",\"description\":\"admission tickets\",\"category\":\"Activity\",\"aliases\":[\"tickets\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎪\",\"description\":\"circus tent\",\"category\":\"Activity\",\"aliases\":[\"circus_tent\"],\"tags\":[]},{\"emoji\":\"🤹‍♀\",\"description\":\"woman juggling\",\"category\":\"Activity\",\"aliases\":[\"woman_juggling\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🤹‍♂\",\"description\":\"man juggling\",\"category\":\"Activity\",\"aliases\":[\"man_juggling\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🎭\",\"description\":\"performing arts\",\"category\":\"Activity\",\"aliases\":[\"performing_arts\"],\"tags\":[\"theater\",\"drama\"]},{\"emoji\":\"🎨\",\"description\":\"artist palette\",\"category\":\"Activity\",\"aliases\":[\"art\"],\"tags\":[\"design\",\"paint\"]},{\"emoji\":\"🎬\",\"description\":\"clapper board\",\"category\":\"Activity\",\"aliases\":[\"clapper\"],\"tags\":[\"film\"]},{\"emoji\":\"🎤\",\"description\":\"microphone\",\"category\":\"Activity\",\"aliases\":[\"microphone\"],\"tags\":[\"sing\"]},{\"emoji\":\"🎧\",\"description\":\"headphone\",\"category\":\"Activity\",\"aliases\":[\"headphones\"],\"tags\":[\"music\",\"earphones\"]},{\"emoji\":\"🎼\",\"description\":\"musical score\",\"category\":\"Activity\",\"aliases\":[\"musical_score\"],\"tags\":[]},{\"emoji\":\"🎹\",\"description\":\"musical keyboard\",\"category\":\"Activity\",\"aliases\":[\"musical_keyboard\"],\"tags\":[\"piano\"]},{\"emoji\":\"🥁\",\"description\":\"drum\",\"category\":\"Activity\",\"aliases\":[\"drum\"],\"tags\":[]},{\"emoji\":\"🎷\",\"description\":\"saxophone\",\"category\":\"Activity\",\"aliases\":[\"saxophone\"],\"tags\":[]},{\"emoji\":\"🎺\",\"description\":\"trumpet\",\"category\":\"Activity\",\"aliases\":[\"trumpet\"],\"tags\":[]},{\"emoji\":\"🎸\",\"description\":\"guitar\",\"category\":\"Activity\",\"aliases\":[\"guitar\"],\"tags\":[\"rock\"]},{\"emoji\":\"🎻\",\"description\":\"violin\",\"category\":\"Activity\",\"aliases\":[\"violin\"],\"tags\":[]},{\"emoji\":\"🎲\",\"description\":\"game die\",\"category\":\"Activity\",\"aliases\":[\"game_die\"],\"tags\":[\"dice\",\"gambling\"]},{\"emoji\":\"🎯\",\"description\":\"direct hit\",\"category\":\"Activity\",\"aliases\":[\"dart\"],\"tags\":[\"target\"]},{\"emoji\":\"🎳\",\"description\":\"bowling\",\"category\":\"Activity\",\"aliases\":[\"bowling\"],\"tags\":[]},{\"emoji\":\"🎮\",\"description\":\"video game\",\"category\":\"Activity\",\"aliases\":[\"video_game\"],\"tags\":[\"play\",\"controller\",\"console\"]},{\"emoji\":\"🎰\",\"description\":\"slot machine\",\"category\":\"Activity\",\"aliases\":[\"slot_machine\"],\"tags\":[]},{\"emoji\":\"🚗\",\"description\":\"automobile\",\"category\":\"Places\",\"aliases\":[\"car\",\"red_car\"],\"tags\":[]},{\"emoji\":\"🚕\",\"description\":\"taxi\",\"category\":\"Places\",\"aliases\":[\"taxi\"],\"tags\":[]},{\"emoji\":\"🚙\",\"description\":\"sport utility vehicle\",\"category\":\"Places\",\"aliases\":[\"blue_car\"],\"tags\":[]},{\"emoji\":\"🚌\",\"description\":\"bus\",\"category\":\"Places\",\"aliases\":[\"bus\"],\"tags\":[]},{\"emoji\":\"🚎\",\"description\":\"trolleybus\",\"category\":\"Places\",\"aliases\":[\"trolleybus\"],\"tags\":[]},{\"emoji\":\"🏎\",\"description\":\"racing car\",\"category\":\"Places\",\"aliases\":[\"racing_car\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚓\",\"description\":\"police car\",\"category\":\"Places\",\"aliases\":[\"police_car\"],\"tags\":[]},{\"emoji\":\"🚑\",\"description\":\"ambulance\",\"category\":\"Places\",\"aliases\":[\"ambulance\"],\"tags\":[]},{\"emoji\":\"🚒\",\"description\":\"fire engine\",\"category\":\"Places\",\"aliases\":[\"fire_engine\"],\"tags\":[]},{\"emoji\":\"🚐\",\"description\":\"minibus\",\"category\":\"Places\",\"aliases\":[\"minibus\"],\"tags\":[]},{\"emoji\":\"🚚\",\"description\":\"delivery truck\",\"category\":\"Places\",\"aliases\":[\"truck\"],\"tags\":[]},{\"emoji\":\"🚛\",\"description\":\"articulated lorry\",\"category\":\"Places\",\"aliases\":[\"articulated_lorry\"],\"tags\":[]},{\"emoji\":\"🚜\",\"description\":\"tractor\",\"category\":\"Places\",\"aliases\":[\"tractor\"],\"tags\":[]},{\"emoji\":\"🛴\",\"description\":\"kick scooter\",\"category\":\"Places\",\"aliases\":[\"kick_scooter\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🚲\",\"description\":\"bicycle\",\"category\":\"Places\",\"aliases\":[\"bike\"],\"tags\":[\"bicycle\"]},{\"emoji\":\"🛵\",\"description\":\"motor scooter\",\"category\":\"Places\",\"aliases\":[\"motor_scooter\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🏍\",\"description\":\"motorcycle\",\"category\":\"Places\",\"aliases\":[\"motorcycle\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚨\",\"description\":\"police car light\",\"category\":\"Places\",\"aliases\":[\"rotating_light\"],\"tags\":[\"911\",\"emergency\"]},{\"emoji\":\"🚔\",\"description\":\"oncoming police car\",\"category\":\"Places\",\"aliases\":[\"oncoming_police_car\"],\"tags\":[]},{\"emoji\":\"🚍\",\"description\":\"oncoming bus\",\"category\":\"Places\",\"aliases\":[\"oncoming_bus\"],\"tags\":[]},{\"emoji\":\"🚘\",\"description\":\"oncoming automobile\",\"category\":\"Places\",\"aliases\":[\"oncoming_automobile\"],\"tags\":[]},{\"emoji\":\"🚖\",\"description\":\"oncoming taxi\",\"category\":\"Places\",\"aliases\":[\"oncoming_taxi\"],\"tags\":[]},{\"emoji\":\"🚡\",\"description\":\"aerial tramway\",\"category\":\"Places\",\"aliases\":[\"aerial_tramway\"],\"tags\":[]},{\"emoji\":\"🚠\",\"description\":\"mountain cableway\",\"category\":\"Places\",\"aliases\":[\"mountain_cableway\"],\"tags\":[]},{\"emoji\":\"🚟\",\"description\":\"suspension railway\",\"category\":\"Places\",\"aliases\":[\"suspension_railway\"],\"tags\":[]},{\"emoji\":\"🚃\",\"description\":\"railway car\",\"category\":\"Places\",\"aliases\":[\"railway_car\"],\"tags\":[]},{\"emoji\":\"🚋\",\"description\":\"tram car\",\"category\":\"Places\",\"aliases\":[\"train\"],\"tags\":[]},{\"emoji\":\"🚞\",\"description\":\"mountain railway\",\"category\":\"Places\",\"aliases\":[\"mountain_railway\"],\"tags\":[]},{\"emoji\":\"🚝\",\"description\":\"monorail\",\"category\":\"Places\",\"aliases\":[\"monorail\"],\"tags\":[]},{\"emoji\":\"🚄\",\"description\":\"high-speed train\",\"category\":\"Places\",\"aliases\":[\"bullettrain_side\"],\"tags\":[\"train\"]},{\"emoji\":\"🚅\",\"description\":\"high-speed train with bullet nose\",\"category\":\"Places\",\"aliases\":[\"bullettrain_front\"],\"tags\":[\"train\"]},{\"emoji\":\"🚈\",\"description\":\"light rail\",\"category\":\"Places\",\"aliases\":[\"light_rail\"],\"tags\":[]},{\"emoji\":\"🚂\",\"description\":\"locomotive\",\"category\":\"Places\",\"aliases\":[\"steam_locomotive\"],\"tags\":[\"train\"]},{\"emoji\":\"🚆\",\"description\":\"train\",\"category\":\"Places\",\"aliases\":[\"train2\"],\"tags\":[]},{\"emoji\":\"🚇\",\"description\":\"metro\",\"category\":\"Places\",\"aliases\":[\"metro\"],\"tags\":[]},{\"emoji\":\"🚊\",\"description\":\"tram\",\"category\":\"Places\",\"aliases\":[\"tram\"],\"tags\":[]},{\"emoji\":\"🚉\",\"description\":\"station\",\"category\":\"Places\",\"aliases\":[\"station\"],\"tags\":[]},{\"emoji\":\"🚁\",\"description\":\"helicopter\",\"category\":\"Places\",\"aliases\":[\"helicopter\"],\"tags\":[]},{\"emoji\":\"🛩\",\"description\":\"small airplane\",\"category\":\"Places\",\"aliases\":[\"small_airplane\"],\"tags\":[\"flight\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"✈️\",\"description\":\"airplane\",\"category\":\"Places\",\"aliases\":[\"airplane\"],\"tags\":[\"flight\"]},{\"emoji\":\"🛫\",\"description\":\"airplane departure\",\"category\":\"Places\",\"aliases\":[\"flight_departure\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛬\",\"description\":\"airplane arrival\",\"category\":\"Places\",\"aliases\":[\"flight_arrival\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚀\",\"description\":\"rocket\",\"category\":\"Places\",\"aliases\":[\"rocket\"],\"tags\":[\"ship\",\"launch\"]},{\"emoji\":\"🛰\",\"description\":\"satellite\",\"category\":\"Places\",\"aliases\":[\"artificial_satellite\"],\"tags\":[\"orbit\",\"space\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"💺\",\"description\":\"seat\",\"category\":\"Places\",\"aliases\":[\"seat\"],\"tags\":[]},{\"emoji\":\"🛶\",\"description\":\"canoe\",\"category\":\"Places\",\"aliases\":[\"canoe\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"⛵️\",\"description\":\"sailboat\",\"category\":\"Places\",\"aliases\":[\"boat\",\"sailboat\"],\"tags\":[],\"unicode_version\":\"5.2\"},{\"emoji\":\"🛥\",\"description\":\"motor boat\",\"category\":\"Places\",\"aliases\":[\"motor_boat\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚤\",\"description\":\"speedboat\",\"category\":\"Places\",\"aliases\":[\"speedboat\"],\"tags\":[\"ship\"]},{\"emoji\":\"🛳\",\"description\":\"passenger ship\",\"category\":\"Places\",\"aliases\":[\"passenger_ship\"],\"tags\":[\"cruise\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛴\",\"description\":\"ferry\",\"category\":\"Places\",\"aliases\":[\"ferry\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚢\",\"description\":\"ship\",\"category\":\"Places\",\"aliases\":[\"ship\"],\"tags\":[]},{\"emoji\":\"⚓️\",\"description\":\"anchor\",\"category\":\"Places\",\"aliases\":[\"anchor\"],\"tags\":[\"ship\"],\"unicode_version\":\"4.1\"},{\"emoji\":\"🚧\",\"description\":\"construction\",\"category\":\"Places\",\"aliases\":[\"construction\"],\"tags\":[\"wip\"]},{\"emoji\":\"⛽️\",\"description\":\"fuel pump\",\"category\":\"Places\",\"aliases\":[\"fuelpump\"],\"tags\":[],\"unicode_version\":\"5.2\"},{\"emoji\":\"🚏\",\"description\":\"bus stop\",\"category\":\"Places\",\"aliases\":[\"busstop\"],\"tags\":[]},{\"emoji\":\"🚦\",\"description\":\"vertical traffic light\",\"category\":\"Places\",\"aliases\":[\"vertical_traffic_light\"],\"tags\":[\"semaphore\"]},{\"emoji\":\"🚥\",\"description\":\"horizontal traffic light\",\"category\":\"Places\",\"aliases\":[\"traffic_light\"],\"tags\":[]},{\"emoji\":\"🗺\",\"description\":\"world map\",\"category\":\"Places\",\"aliases\":[\"world_map\"],\"tags\":[\"travel\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗿\",\"description\":\"moai\",\"category\":\"Places\",\"aliases\":[\"moyai\"],\"tags\":[\"stone\"]},{\"emoji\":\"🗽\",\"description\":\"Statue of Liberty\",\"category\":\"Places\",\"aliases\":[\"statue_of_liberty\"],\"tags\":[]},{\"emoji\":\"⛲️\",\"description\":\"fountain\",\"category\":\"Places\",\"aliases\":[\"fountain\"],\"tags\":[],\"unicode_version\":\"5.2\"},{\"emoji\":\"🗼\",\"description\":\"Tokyo tower\",\"category\":\"Places\",\"aliases\":[\"tokyo_tower\"],\"tags\":[]},{\"emoji\":\"🏰\",\"description\":\"castle\",\"category\":\"Places\",\"aliases\":[\"european_castle\"],\"tags\":[]},{\"emoji\":\"🏯\",\"description\":\"Japanese castle\",\"category\":\"Places\",\"aliases\":[\"japanese_castle\"],\"tags\":[]},{\"emoji\":\"🏟\",\"description\":\"stadium\",\"category\":\"Places\",\"aliases\":[\"stadium\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎡\",\"description\":\"ferris wheel\",\"category\":\"Places\",\"aliases\":[\"ferris_wheel\"],\"tags\":[]},{\"emoji\":\"🎢\",\"description\":\"roller coaster\",\"category\":\"Places\",\"aliases\":[\"roller_coaster\"],\"tags\":[]},{\"emoji\":\"🎠\",\"description\":\"carousel horse\",\"category\":\"Places\",\"aliases\":[\"carousel_horse\"],\"tags\":[]},{\"emoji\":\"⛱\",\"description\":\"umbrella on ground\",\"category\":\"Places\",\"aliases\":[\"parasol_on_ground\"],\"tags\":[\"beach_umbrella\"],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏖\",\"description\":\"beach with umbrella\",\"category\":\"Places\",\"aliases\":[\"beach_umbrella\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏝\",\"description\":\"desert island\",\"category\":\"Places\",\"aliases\":[\"desert_island\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛰\",\"description\":\"mountain\",\"category\":\"Places\",\"aliases\":[\"mountain\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏔\",\"description\":\"snow-capped mountain\",\"category\":\"Places\",\"aliases\":[\"mountain_snow\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗻\",\"description\":\"mount fuji\",\"category\":\"Places\",\"aliases\":[\"mount_fuji\"],\"tags\":[]},{\"emoji\":\"🌋\",\"description\":\"volcano\",\"category\":\"Places\",\"aliases\":[\"volcano\"],\"tags\":[]},{\"emoji\":\"🏜\",\"description\":\"desert\",\"category\":\"Places\",\"aliases\":[\"desert\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏕\",\"description\":\"camping\",\"category\":\"Places\",\"aliases\":[\"camping\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛺️\",\"description\":\"tent\",\"category\":\"Places\",\"aliases\":[\"tent\"],\"tags\":[\"camping\"],\"unicode_version\":\"5.2\"},{\"emoji\":\"🛤\",\"description\":\"railway track\",\"category\":\"Places\",\"aliases\":[\"railway_track\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛣\",\"description\":\"motorway\",\"category\":\"Places\",\"aliases\":[\"motorway\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏗\",\"description\":\"building construction\",\"category\":\"Places\",\"aliases\":[\"building_construction\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏭\",\"description\":\"factory\",\"category\":\"Places\",\"aliases\":[\"factory\"],\"tags\":[]},{\"emoji\":\"🏠\",\"description\":\"house\",\"category\":\"Places\",\"aliases\":[\"house\"],\"tags\":[]},{\"emoji\":\"🏡\",\"description\":\"house with garden\",\"category\":\"Places\",\"aliases\":[\"house_with_garden\"],\"tags\":[]},{\"emoji\":\"🏘\",\"description\":\"house\",\"category\":\"Places\",\"aliases\":[\"houses\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏚\",\"description\":\"derelict house\",\"category\":\"Places\",\"aliases\":[\"derelict_house\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏢\",\"description\":\"office building\",\"category\":\"Places\",\"aliases\":[\"office\"],\"tags\":[]},{\"emoji\":\"🏬\",\"description\":\"department store\",\"category\":\"Places\",\"aliases\":[\"department_store\"],\"tags\":[]},{\"emoji\":\"🏣\",\"description\":\"Japanese post office\",\"category\":\"Places\",\"aliases\":[\"post_office\"],\"tags\":[]},{\"emoji\":\"🏤\",\"description\":\"post office\",\"category\":\"Places\",\"aliases\":[\"european_post_office\"],\"tags\":[]},{\"emoji\":\"🏥\",\"description\":\"hospital\",\"category\":\"Places\",\"aliases\":[\"hospital\"],\"tags\":[]},{\"emoji\":\"🏦\",\"description\":\"bank\",\"category\":\"Places\",\"aliases\":[\"bank\"],\"tags\":[]},{\"emoji\":\"🏨\",\"description\":\"hotel\",\"category\":\"Places\",\"aliases\":[\"hotel\"],\"tags\":[]},{\"emoji\":\"🏪\",\"description\":\"convenience store\",\"category\":\"Places\",\"aliases\":[\"convenience_store\"],\"tags\":[]},{\"emoji\":\"🏫\",\"description\":\"school\",\"category\":\"Places\",\"aliases\":[\"school\"],\"tags\":[]},{\"emoji\":\"🏩\",\"description\":\"love hotel\",\"category\":\"Places\",\"aliases\":[\"love_hotel\"],\"tags\":[]},{\"emoji\":\"💒\",\"description\":\"wedding\",\"category\":\"Places\",\"aliases\":[\"wedding\"],\"tags\":[\"marriage\"]},{\"emoji\":\"🏛\",\"description\":\"classical building\",\"category\":\"Places\",\"aliases\":[\"classical_building\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛪️\",\"description\":\"church\",\"category\":\"Places\",\"aliases\":[\"church\"],\"tags\":[],\"unicode_version\":\"5.2\"},{\"emoji\":\"🕌\",\"description\":\"mosque\",\"category\":\"Places\",\"aliases\":[\"mosque\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🕍\",\"description\":\"synagogue\",\"category\":\"Places\",\"aliases\":[\"synagogue\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🕋\",\"description\":\"kaaba\",\"category\":\"Places\",\"aliases\":[\"kaaba\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛩\",\"description\":\"shinto shrine\",\"category\":\"Places\",\"aliases\":[\"shinto_shrine\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗾\",\"description\":\"map of Japan\",\"category\":\"Places\",\"aliases\":[\"japan\"],\"tags\":[]},{\"emoji\":\"🎑\",\"description\":\"moon viewing ceremony\",\"category\":\"Places\",\"aliases\":[\"rice_scene\"],\"tags\":[]},{\"emoji\":\"🏞\",\"description\":\"national park\",\"category\":\"Places\",\"aliases\":[\"national_park\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌅\",\"description\":\"sunrise\",\"category\":\"Places\",\"aliases\":[\"sunrise\"],\"tags\":[]},{\"emoji\":\"🌄\",\"description\":\"sunrise over mountains\",\"category\":\"Places\",\"aliases\":[\"sunrise_over_mountains\"],\"tags\":[]},{\"emoji\":\"🌠\",\"description\":\"shooting star\",\"category\":\"Places\",\"aliases\":[\"stars\"],\"tags\":[]},{\"emoji\":\"🎇\",\"description\":\"sparkler\",\"category\":\"Places\",\"aliases\":[\"sparkler\"],\"tags\":[]},{\"emoji\":\"🎆\",\"description\":\"fireworks\",\"category\":\"Places\",\"aliases\":[\"fireworks\"],\"tags\":[\"festival\",\"celebration\"]},{\"emoji\":\"🌇\",\"description\":\"sunset\",\"category\":\"Places\",\"aliases\":[\"city_sunrise\"],\"tags\":[]},{\"emoji\":\"🌆\",\"description\":\"cityscape at dusk\",\"category\":\"Places\",\"aliases\":[\"city_sunset\"],\"tags\":[]},{\"emoji\":\"🏙\",\"description\":\"cityscape\",\"category\":\"Places\",\"aliases\":[\"cityscape\"],\"tags\":[\"skyline\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🌃\",\"description\":\"night with stars\",\"category\":\"Places\",\"aliases\":[\"night_with_stars\"],\"tags\":[]},{\"emoji\":\"🌌\",\"description\":\"milky way\",\"category\":\"Places\",\"aliases\":[\"milky_way\"],\"tags\":[]},{\"emoji\":\"🌉\",\"description\":\"bridge at night\",\"category\":\"Places\",\"aliases\":[\"bridge_at_night\"],\"tags\":[]},{\"emoji\":\"🌁\",\"description\":\"foggy\",\"category\":\"Places\",\"aliases\":[\"foggy\"],\"tags\":[\"karl\"]},{\"emoji\":\"⌚️\",\"description\":\"watch\",\"category\":\"Objects\",\"aliases\":[\"watch\"],\"tags\":[\"time\"]},{\"emoji\":\"📱\",\"description\":\"mobile phone\",\"category\":\"Objects\",\"aliases\":[\"iphone\"],\"tags\":[\"smartphone\",\"mobile\"]},{\"emoji\":\"📲\",\"description\":\"mobile phone with arrow\",\"category\":\"Objects\",\"aliases\":[\"calling\"],\"tags\":[\"call\",\"incoming\"]},{\"emoji\":\"💻\",\"description\":\"laptop computer\",\"category\":\"Objects\",\"aliases\":[\"computer\"],\"tags\":[\"desktop\",\"screen\"]},{\"emoji\":\"⌨️\",\"description\":\"keyboard\",\"category\":\"Objects\",\"aliases\":[\"keyboard\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"🖥\",\"description\":\"desktop computer\",\"category\":\"Objects\",\"aliases\":[\"desktop_computer\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🖨\",\"description\":\"printer\",\"category\":\"Objects\",\"aliases\":[\"printer\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🖱\",\"description\":\"computer mouse\",\"category\":\"Objects\",\"aliases\":[\"computer_mouse\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🖲\",\"description\":\"trackball\",\"category\":\"Objects\",\"aliases\":[\"trackball\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🕹\",\"description\":\"joystick\",\"category\":\"Objects\",\"aliases\":[\"joystick\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗜\",\"description\":\"clamp\",\"category\":\"Objects\",\"aliases\":[\"clamp\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"💽\",\"description\":\"computer disk\",\"category\":\"Objects\",\"aliases\":[\"minidisc\"],\"tags\":[]},{\"emoji\":\"💾\",\"description\":\"floppy disk\",\"category\":\"Objects\",\"aliases\":[\"floppy_disk\"],\"tags\":[\"save\"]},{\"emoji\":\"💿\",\"description\":\"optical disk\",\"category\":\"Objects\",\"aliases\":[\"cd\"],\"tags\":[]},{\"emoji\":\"📀\",\"description\":\"dvd\",\"category\":\"Objects\",\"aliases\":[\"dvd\"],\"tags\":[]},{\"emoji\":\"📼\",\"description\":\"videocassette\",\"category\":\"Objects\",\"aliases\":[\"vhs\"],\"tags\":[]},{\"emoji\":\"📷\",\"description\":\"camera\",\"category\":\"Objects\",\"aliases\":[\"camera\"],\"tags\":[\"photo\"]},{\"emoji\":\"📸\",\"description\":\"camera with flash\",\"category\":\"Objects\",\"aliases\":[\"camera_flash\"],\"tags\":[\"photo\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📹\",\"description\":\"video camera\",\"category\":\"Objects\",\"aliases\":[\"video_camera\"],\"tags\":[]},{\"emoji\":\"🎥\",\"description\":\"movie camera\",\"category\":\"Objects\",\"aliases\":[\"movie_camera\"],\"tags\":[\"film\",\"video\"]},{\"emoji\":\"📽\",\"description\":\"film projector\",\"category\":\"Objects\",\"aliases\":[\"film_projector\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎞\",\"description\":\"film frames\",\"category\":\"Objects\",\"aliases\":[\"film_strip\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📞\",\"description\":\"telephone receiver\",\"category\":\"Objects\",\"aliases\":[\"telephone_receiver\"],\"tags\":[\"phone\",\"call\"]},{\"emoji\":\"☎️\",\"description\":\"telephone\",\"category\":\"Objects\",\"aliases\":[\"phone\",\"telephone\"],\"tags\":[]},{\"emoji\":\"📟\",\"description\":\"pager\",\"category\":\"Objects\",\"aliases\":[\"pager\"],\"tags\":[]},{\"emoji\":\"📠\",\"description\":\"fax machine\",\"category\":\"Objects\",\"aliases\":[\"fax\"],\"tags\":[]},{\"emoji\":\"📺\",\"description\":\"television\",\"category\":\"Objects\",\"aliases\":[\"tv\"],\"tags\":[]},{\"emoji\":\"📻\",\"description\":\"radio\",\"category\":\"Objects\",\"aliases\":[\"radio\"],\"tags\":[\"podcast\"]},{\"emoji\":\"🎙\",\"description\":\"studio microphone\",\"category\":\"Objects\",\"aliases\":[\"studio_microphone\"],\"tags\":[\"podcast\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎚\",\"description\":\"level slider\",\"category\":\"Objects\",\"aliases\":[\"level_slider\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🎛\",\"description\":\"control knobs\",\"category\":\"Objects\",\"aliases\":[\"control_knobs\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⏱\",\"description\":\"stopwatch\",\"category\":\"Objects\",\"aliases\":[\"stopwatch\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"⏲\",\"description\":\"timer clock\",\"category\":\"Objects\",\"aliases\":[\"timer_clock\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"⏰\",\"description\":\"alarm clock\",\"category\":\"Objects\",\"aliases\":[\"alarm_clock\"],\"tags\":[\"morning\"]},{\"emoji\":\"🕰\",\"description\":\"mantelpiece clock\",\"category\":\"Objects\",\"aliases\":[\"mantelpiece_clock\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⌛️\",\"description\":\"hourglass\",\"category\":\"Objects\",\"aliases\":[\"hourglass\"],\"tags\":[\"time\"]},{\"emoji\":\"⏳\",\"description\":\"hourglass with flowing sand\",\"category\":\"Objects\",\"aliases\":[\"hourglass_flowing_sand\"],\"tags\":[\"time\"]},{\"emoji\":\"📡\",\"description\":\"satellite antenna\",\"category\":\"Objects\",\"aliases\":[\"satellite\"],\"tags\":[\"signal\"]},{\"emoji\":\"🔋\",\"description\":\"battery\",\"category\":\"Objects\",\"aliases\":[\"battery\"],\"tags\":[\"power\"]},{\"emoji\":\"🔌\",\"description\":\"electric plug\",\"category\":\"Objects\",\"aliases\":[\"electric_plug\"],\"tags\":[]},{\"emoji\":\"💡\",\"description\":\"light bulb\",\"category\":\"Objects\",\"aliases\":[\"bulb\"],\"tags\":[\"idea\",\"light\"]},{\"emoji\":\"🔦\",\"description\":\"flashlight\",\"category\":\"Objects\",\"aliases\":[\"flashlight\"],\"tags\":[]},{\"emoji\":\"🕯\",\"description\":\"candle\",\"category\":\"Objects\",\"aliases\":[\"candle\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗑\",\"description\":\"wastebasket\",\"category\":\"Objects\",\"aliases\":[\"wastebasket\"],\"tags\":[\"trash\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛢\",\"description\":\"oil drum\",\"category\":\"Objects\",\"aliases\":[\"oil_drum\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"💸\",\"description\":\"money with wings\",\"category\":\"Objects\",\"aliases\":[\"money_with_wings\"],\"tags\":[\"dollar\"]},{\"emoji\":\"💵\",\"description\":\"dollar banknote\",\"category\":\"Objects\",\"aliases\":[\"dollar\"],\"tags\":[\"money\"]},{\"emoji\":\"💴\",\"description\":\"yen banknote\",\"category\":\"Objects\",\"aliases\":[\"yen\"],\"tags\":[]},{\"emoji\":\"💶\",\"description\":\"euro banknote\",\"category\":\"Objects\",\"aliases\":[\"euro\"],\"tags\":[]},{\"emoji\":\"💷\",\"description\":\"pound banknote\",\"category\":\"Objects\",\"aliases\":[\"pound\"],\"tags\":[]},{\"emoji\":\"💰\",\"description\":\"money bag\",\"category\":\"Objects\",\"aliases\":[\"moneybag\"],\"tags\":[\"dollar\",\"cream\"]},{\"emoji\":\"💳\",\"description\":\"credit card\",\"category\":\"Objects\",\"aliases\":[\"credit_card\"],\"tags\":[\"subscription\"]},{\"emoji\":\"💎\",\"description\":\"gem stone\",\"category\":\"Objects\",\"aliases\":[\"gem\"],\"tags\":[\"diamond\"]},{\"emoji\":\"⚖️\",\"description\":\"balance scale\",\"category\":\"Objects\",\"aliases\":[\"balance_scale\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🔧\",\"description\":\"wrench\",\"category\":\"Objects\",\"aliases\":[\"wrench\"],\"tags\":[\"tool\"]},{\"emoji\":\"🔨\",\"description\":\"hammer\",\"category\":\"Objects\",\"aliases\":[\"hammer\"],\"tags\":[\"tool\"]},{\"emoji\":\"⚒\",\"description\":\"hammer and pick\",\"category\":\"Objects\",\"aliases\":[\"hammer_and_pick\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛠\",\"description\":\"hammer and wrench\",\"category\":\"Objects\",\"aliases\":[\"hammer_and_wrench\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛏\",\"description\":\"pick\",\"category\":\"Objects\",\"aliases\":[\"pick\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🔩\",\"description\":\"nut and bolt\",\"category\":\"Objects\",\"aliases\":[\"nut_and_bolt\"],\"tags\":[]},{\"emoji\":\"⚙️\",\"description\":\"gear\",\"category\":\"Objects\",\"aliases\":[\"gear\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛓\",\"description\":\"chains\",\"category\":\"Objects\",\"aliases\":[\"chains\"],\"tags\":[],\"unicode_version\":\"5.2\",\"ios_version\":\"9.1\"},{\"emoji\":\"🔫\",\"description\":\"pistol\",\"category\":\"Objects\",\"aliases\":[\"gun\"],\"tags\":[\"shoot\",\"weapon\"]},{\"emoji\":\"💣\",\"description\":\"bomb\",\"category\":\"Objects\",\"aliases\":[\"bomb\"],\"tags\":[\"boom\"]},{\"emoji\":\"🔪\",\"description\":\"kitchen knife\",\"category\":\"Objects\",\"aliases\":[\"hocho\",\"knife\"],\"tags\":[\"cut\",\"chop\"]},{\"emoji\":\"🗡\",\"description\":\"dagger\",\"category\":\"Objects\",\"aliases\":[\"dagger\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⚔️\",\"description\":\"crossed swords\",\"category\":\"Objects\",\"aliases\":[\"crossed_swords\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛡\",\"description\":\"shield\",\"category\":\"Objects\",\"aliases\":[\"shield\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚬\",\"description\":\"cigarette\",\"category\":\"Objects\",\"aliases\":[\"smoking\"],\"tags\":[\"cigarette\"]},{\"emoji\":\"⚰️\",\"description\":\"coffin\",\"category\":\"Objects\",\"aliases\":[\"coffin\"],\"tags\":[\"funeral\"],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"⚱️\",\"description\":\"funeral urn\",\"category\":\"Objects\",\"aliases\":[\"funeral_urn\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏺\",\"description\":\"amphora\",\"category\":\"Objects\",\"aliases\":[\"amphora\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🔮\",\"description\":\"crystal ball\",\"category\":\"Objects\",\"aliases\":[\"crystal_ball\"],\"tags\":[\"fortune\"]},{\"emoji\":\"📿\",\"description\":\"prayer beads\",\"category\":\"Objects\",\"aliases\":[\"prayer_beads\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"💈\",\"description\":\"barber pole\",\"category\":\"Objects\",\"aliases\":[\"barber\"],\"tags\":[]},{\"emoji\":\"⚗️\",\"description\":\"alembic\",\"category\":\"Objects\",\"aliases\":[\"alembic\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🔭\",\"description\":\"telescope\",\"category\":\"Objects\",\"aliases\":[\"telescope\"],\"tags\":[]},{\"emoji\":\"🔬\",\"description\":\"microscope\",\"category\":\"Objects\",\"aliases\":[\"microscope\"],\"tags\":[\"science\",\"laboratory\",\"investigate\"]},{\"emoji\":\"🕳\",\"description\":\"hole\",\"category\":\"Objects\",\"aliases\":[\"hole\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"💊\",\"description\":\"pill\",\"category\":\"Objects\",\"aliases\":[\"pill\"],\"tags\":[\"health\",\"medicine\"]},{\"emoji\":\"💉\",\"description\":\"syringe\",\"category\":\"Objects\",\"aliases\":[\"syringe\"],\"tags\":[\"health\",\"hospital\",\"needle\"]},{\"emoji\":\"🌡\",\"description\":\"thermometer\",\"category\":\"Objects\",\"aliases\":[\"thermometer\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚽\",\"description\":\"toilet\",\"category\":\"Objects\",\"aliases\":[\"toilet\"],\"tags\":[\"wc\"]},{\"emoji\":\"🚰\",\"description\":\"potable water\",\"category\":\"Objects\",\"aliases\":[\"potable_water\"],\"tags\":[]},{\"emoji\":\"🚿\",\"description\":\"shower\",\"category\":\"Objects\",\"aliases\":[\"shower\"],\"tags\":[\"bath\"]},{\"emoji\":\"🛁\",\"description\":\"bathtub\",\"category\":\"Objects\",\"aliases\":[\"bathtub\"],\"tags\":[]},{\"emoji\":\"🛀\",\"description\":\"person taking bath\",\"category\":\"Objects\",\"aliases\":[\"bath\"],\"tags\":[\"shower\"]},{\"emoji\":\"🛎\",\"description\":\"bellhop bell\",\"category\":\"Objects\",\"aliases\":[\"bellhop_bell\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🔑\",\"description\":\"key\",\"category\":\"Objects\",\"aliases\":[\"key\"],\"tags\":[\"lock\",\"password\"]},{\"emoji\":\"🗝\",\"description\":\"old key\",\"category\":\"Objects\",\"aliases\":[\"old_key\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🚪\",\"description\":\"door\",\"category\":\"Objects\",\"aliases\":[\"door\"],\"tags\":[]},{\"emoji\":\"🛋\",\"description\":\"couch and lamp\",\"category\":\"Objects\",\"aliases\":[\"couch_and_lamp\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛏\",\"description\":\"bed\",\"category\":\"Objects\",\"aliases\":[\"bed\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛌\",\"description\":\"person in bed\",\"category\":\"Objects\",\"aliases\":[\"sleeping_bed\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🖼\",\"description\":\"framed picture\",\"category\":\"Objects\",\"aliases\":[\"framed_picture\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛍\",\"description\":\"shopping bags\",\"category\":\"Objects\",\"aliases\":[\"shopping\"],\"tags\":[\"bags\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🛒\",\"description\":\"shopping cart\",\"category\":\"Objects\",\"aliases\":[\"shopping_cart\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"🎁\",\"description\":\"wrapped gift\",\"category\":\"Objects\",\"aliases\":[\"gift\"],\"tags\":[\"present\",\"birthday\",\"christmas\"]},{\"emoji\":\"🎈\",\"description\":\"balloon\",\"category\":\"Objects\",\"aliases\":[\"balloon\"],\"tags\":[\"party\",\"birthday\"]},{\"emoji\":\"🎏\",\"description\":\"carp streamer\",\"category\":\"Objects\",\"aliases\":[\"flags\"],\"tags\":[]},{\"emoji\":\"🎀\",\"description\":\"ribbon\",\"category\":\"Objects\",\"aliases\":[\"ribbon\"],\"tags\":[]},{\"emoji\":\"🎊\",\"description\":\"confetti ball\",\"category\":\"Objects\",\"aliases\":[\"confetti_ball\"],\"tags\":[]},{\"emoji\":\"🎉\",\"description\":\"party popper\",\"category\":\"Objects\",\"aliases\":[\"tada\"],\"tags\":[\"hooray\",\"party\"]},{\"emoji\":\"🎎\",\"description\":\"Japanese dolls\",\"category\":\"Objects\",\"aliases\":[\"dolls\"],\"tags\":[]},{\"emoji\":\"🏮\",\"description\":\"red paper lantern\",\"category\":\"Objects\",\"aliases\":[\"izakaya_lantern\",\"lantern\"],\"tags\":[]},{\"emoji\":\"🎐\",\"description\":\"wind chime\",\"category\":\"Objects\",\"aliases\":[\"wind_chime\"],\"tags\":[]},{\"emoji\":\"✉️\",\"description\":\"envelope\",\"category\":\"Objects\",\"aliases\":[\"email\",\"envelope\"],\"tags\":[\"letter\"]},{\"emoji\":\"📩\",\"description\":\"envelope with arrow\",\"category\":\"Objects\",\"aliases\":[\"envelope_with_arrow\"],\"tags\":[]},{\"emoji\":\"📨\",\"description\":\"incoming envelope\",\"category\":\"Objects\",\"aliases\":[\"incoming_envelope\"],\"tags\":[]},{\"emoji\":\"📧\",\"description\":\"e-mail\",\"category\":\"Objects\",\"aliases\":[\"e-mail\"],\"tags\":[]},{\"emoji\":\"💌\",\"description\":\"love letter\",\"category\":\"Objects\",\"aliases\":[\"love_letter\"],\"tags\":[\"email\",\"envelope\"]},{\"emoji\":\"📥\",\"description\":\"inbox tray\",\"category\":\"Objects\",\"aliases\":[\"inbox_tray\"],\"tags\":[]},{\"emoji\":\"📤\",\"description\":\"outbox tray\",\"category\":\"Objects\",\"aliases\":[\"outbox_tray\"],\"tags\":[]},{\"emoji\":\"📦\",\"description\":\"package\",\"category\":\"Objects\",\"aliases\":[\"package\"],\"tags\":[\"shipping\"]},{\"emoji\":\"🏷\",\"description\":\"label\",\"category\":\"Objects\",\"aliases\":[\"label\"],\"tags\":[\"tag\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📪\",\"description\":\"closed mailbox with lowered flag\",\"category\":\"Objects\",\"aliases\":[\"mailbox_closed\"],\"tags\":[]},{\"emoji\":\"📫\",\"description\":\"closed mailbox with raised flag\",\"category\":\"Objects\",\"aliases\":[\"mailbox\"],\"tags\":[]},{\"emoji\":\"📬\",\"description\":\"open mailbox with raised flag\",\"category\":\"Objects\",\"aliases\":[\"mailbox_with_mail\"],\"tags\":[]},{\"emoji\":\"📭\",\"description\":\"open mailbox with lowered flag\",\"category\":\"Objects\",\"aliases\":[\"mailbox_with_no_mail\"],\"tags\":[]},{\"emoji\":\"📮\",\"description\":\"postbox\",\"category\":\"Objects\",\"aliases\":[\"postbox\"],\"tags\":[]},{\"emoji\":\"📯\",\"description\":\"postal horn\",\"category\":\"Objects\",\"aliases\":[\"postal_horn\"],\"tags\":[]},{\"emoji\":\"📜\",\"description\":\"scroll\",\"category\":\"Objects\",\"aliases\":[\"scroll\"],\"tags\":[\"document\"]},{\"emoji\":\"📃\",\"description\":\"page with curl\",\"category\":\"Objects\",\"aliases\":[\"page_with_curl\"],\"tags\":[]},{\"emoji\":\"📄\",\"description\":\"page facing up\",\"category\":\"Objects\",\"aliases\":[\"page_facing_up\"],\"tags\":[\"document\"]},{\"emoji\":\"📑\",\"description\":\"bookmark tabs\",\"category\":\"Objects\",\"aliases\":[\"bookmark_tabs\"],\"tags\":[]},{\"emoji\":\"📊\",\"description\":\"bar chart\",\"category\":\"Objects\",\"aliases\":[\"bar_chart\"],\"tags\":[\"stats\",\"metrics\"]},{\"emoji\":\"📈\",\"description\":\"chart increasing\",\"category\":\"Objects\",\"aliases\":[\"chart_with_upwards_trend\"],\"tags\":[\"graph\",\"metrics\"]},{\"emoji\":\"📉\",\"description\":\"chart decreasing\",\"category\":\"Objects\",\"aliases\":[\"chart_with_downwards_trend\"],\"tags\":[\"graph\",\"metrics\"]},{\"emoji\":\"🗒\",\"description\":\"spiral notepad\",\"category\":\"Objects\",\"aliases\":[\"spiral_notepad\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗓\",\"description\":\"spiral calendar\",\"category\":\"Objects\",\"aliases\":[\"spiral_calendar\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📆\",\"description\":\"tear-off calendar\",\"category\":\"Objects\",\"aliases\":[\"calendar\"],\"tags\":[\"schedule\"]},{\"emoji\":\"📅\",\"description\":\"calendar\",\"category\":\"Objects\",\"aliases\":[\"date\"],\"tags\":[\"calendar\",\"schedule\"]},{\"emoji\":\"📇\",\"description\":\"card index\",\"category\":\"Objects\",\"aliases\":[\"card_index\"],\"tags\":[]},{\"emoji\":\"🗃\",\"description\":\"card file box\",\"category\":\"Objects\",\"aliases\":[\"card_file_box\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗳\",\"description\":\"ballot box with ballot\",\"category\":\"Objects\",\"aliases\":[\"ballot_box\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗄\",\"description\":\"file cabinet\",\"category\":\"Objects\",\"aliases\":[\"file_cabinet\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📋\",\"description\":\"clipboard\",\"category\":\"Objects\",\"aliases\":[\"clipboard\"],\"tags\":[]},{\"emoji\":\"📁\",\"description\":\"file folder\",\"category\":\"Objects\",\"aliases\":[\"file_folder\"],\"tags\":[\"directory\"]},{\"emoji\":\"📂\",\"description\":\"open file folder\",\"category\":\"Objects\",\"aliases\":[\"open_file_folder\"],\"tags\":[]},{\"emoji\":\"🗂\",\"description\":\"card index dividers\",\"category\":\"Objects\",\"aliases\":[\"card_index_dividers\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🗞\",\"description\":\"rolled-up newspaper\",\"category\":\"Objects\",\"aliases\":[\"newspaper_roll\"],\"tags\":[\"press\"],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📰\",\"description\":\"newspaper\",\"category\":\"Objects\",\"aliases\":[\"newspaper\"],\"tags\":[\"press\"]},{\"emoji\":\"📓\",\"description\":\"notebook\",\"category\":\"Objects\",\"aliases\":[\"notebook\"],\"tags\":[]},{\"emoji\":\"📔\",\"description\":\"notebook with decorative cover\",\"category\":\"Objects\",\"aliases\":[\"notebook_with_decorative_cover\"],\"tags\":[]},{\"emoji\":\"📒\",\"description\":\"ledger\",\"category\":\"Objects\",\"aliases\":[\"ledger\"],\"tags\":[]},{\"emoji\":\"📕\",\"description\":\"closed book\",\"category\":\"Objects\",\"aliases\":[\"closed_book\"],\"tags\":[]},{\"emoji\":\"📗\",\"description\":\"green book\",\"category\":\"Objects\",\"aliases\":[\"green_book\"],\"tags\":[]},{\"emoji\":\"📘\",\"description\":\"blue book\",\"category\":\"Objects\",\"aliases\":[\"blue_book\"],\"tags\":[]},{\"emoji\":\"📙\",\"description\":\"orange book\",\"category\":\"Objects\",\"aliases\":[\"orange_book\"],\"tags\":[]},{\"emoji\":\"📚\",\"description\":\"books\",\"category\":\"Objects\",\"aliases\":[\"books\"],\"tags\":[\"library\"]},{\"emoji\":\"📖\",\"description\":\"open book\",\"category\":\"Objects\",\"aliases\":[\"book\",\"open_book\"],\"tags\":[]},{\"emoji\":\"🔖\",\"description\":\"bookmark\",\"category\":\"Objects\",\"aliases\":[\"bookmark\"],\"tags\":[]},{\"emoji\":\"🔗\",\"description\":\"link\",\"category\":\"Objects\",\"aliases\":[\"link\"],\"tags\":[]},{\"emoji\":\"📎\",\"description\":\"paperclip\",\"category\":\"Objects\",\"aliases\":[\"paperclip\"],\"tags\":[]},{\"emoji\":\"🖇\",\"description\":\"linked paperclips\",\"category\":\"Objects\",\"aliases\":[\"paperclips\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📐\",\"description\":\"triangular ruler\",\"category\":\"Objects\",\"aliases\":[\"triangular_ruler\"],\"tags\":[]},{\"emoji\":\"📏\",\"description\":\"straight ruler\",\"category\":\"Objects\",\"aliases\":[\"straight_ruler\"],\"tags\":[]},{\"emoji\":\"📌\",\"description\":\"pushpin\",\"category\":\"Objects\",\"aliases\":[\"pushpin\"],\"tags\":[\"location\"]},{\"emoji\":\"📍\",\"description\":\"round pushpin\",\"category\":\"Objects\",\"aliases\":[\"round_pushpin\"],\"tags\":[\"location\"]},{\"emoji\":\"✂️\",\"description\":\"scissors\",\"category\":\"Objects\",\"aliases\":[\"scissors\"],\"tags\":[\"cut\"]},{\"emoji\":\"🖊\",\"description\":\"pen\",\"category\":\"Objects\",\"aliases\":[\"pen\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🖋\",\"description\":\"fountain pen\",\"category\":\"Objects\",\"aliases\":[\"fountain_pen\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"✒️\",\"description\":\"black nib\",\"category\":\"Objects\",\"aliases\":[\"black_nib\"],\"tags\":[]},{\"emoji\":\"🖌\",\"description\":\"paintbrush\",\"category\":\"Objects\",\"aliases\":[\"paintbrush\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🖍\",\"description\":\"crayon\",\"category\":\"Objects\",\"aliases\":[\"crayon\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"📝\",\"description\":\"memo\",\"category\":\"Objects\",\"aliases\":[\"memo\",\"pencil\"],\"tags\":[\"document\",\"note\"]},{\"emoji\":\"✏️\",\"description\":\"pencil\",\"category\":\"Objects\",\"aliases\":[\"pencil2\"],\"tags\":[]},{\"emoji\":\"🔍\",\"description\":\"left-pointing magnifying glass\",\"category\":\"Objects\",\"aliases\":[\"mag\"],\"tags\":[\"search\",\"zoom\"]},{\"emoji\":\"🔎\",\"description\":\"right-pointing magnifying glass\",\"category\":\"Objects\",\"aliases\":[\"mag_right\"],\"tags\":[]},{\"emoji\":\"🔏\",\"description\":\"locked with pen\",\"category\":\"Objects\",\"aliases\":[\"lock_with_ink_pen\"],\"tags\":[]},{\"emoji\":\"🔐\",\"description\":\"locked with key\",\"category\":\"Objects\",\"aliases\":[\"closed_lock_with_key\"],\"tags\":[\"security\"]},{\"emoji\":\"🔒\",\"description\":\"locked\",\"category\":\"Objects\",\"aliases\":[\"lock\"],\"tags\":[\"security\",\"private\"]},{\"emoji\":\"🔓\",\"description\":\"unlocked\",\"category\":\"Objects\",\"aliases\":[\"unlock\"],\"tags\":[\"security\"]},{\"emoji\":\"❤️\",\"description\":\"red heart\",\"category\":\"Symbols\",\"aliases\":[\"heart\"],\"tags\":[\"love\"]},{\"emoji\":\"💛\",\"description\":\"yellow heart\",\"category\":\"Symbols\",\"aliases\":[\"yellow_heart\"],\"tags\":[]},{\"emoji\":\"💚\",\"description\":\"green heart\",\"category\":\"Symbols\",\"aliases\":[\"green_heart\"],\"tags\":[]},{\"emoji\":\"💙\",\"description\":\"blue heart\",\"category\":\"Symbols\",\"aliases\":[\"blue_heart\"],\"tags\":[]},{\"emoji\":\"💜\",\"description\":\"purple heart\",\"category\":\"Symbols\",\"aliases\":[\"purple_heart\"],\"tags\":[]},{\"emoji\":\"🖤\",\"description\":\"black heart\",\"category\":\"Symbols\",\"aliases\":[\"black_heart\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"💔\",\"description\":\"broken heart\",\"category\":\"Symbols\",\"aliases\":[\"broken_heart\"],\"tags\":[]},{\"emoji\":\"❣️\",\"description\":\"heavy heart exclamation\",\"category\":\"Symbols\",\"aliases\":[\"heavy_heart_exclamation\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"💕\",\"description\":\"two hearts\",\"category\":\"Symbols\",\"aliases\":[\"two_hearts\"],\"tags\":[]},{\"emoji\":\"💞\",\"description\":\"revolving hearts\",\"category\":\"Symbols\",\"aliases\":[\"revolving_hearts\"],\"tags\":[]},{\"emoji\":\"💓\",\"description\":\"beating heart\",\"category\":\"Symbols\",\"aliases\":[\"heartbeat\"],\"tags\":[]},{\"emoji\":\"💗\",\"description\":\"growing heart\",\"category\":\"Symbols\",\"aliases\":[\"heartpulse\"],\"tags\":[]},{\"emoji\":\"💖\",\"description\":\"sparkling heart\",\"category\":\"Symbols\",\"aliases\":[\"sparkling_heart\"],\"tags\":[]},{\"emoji\":\"💘\",\"description\":\"heart with arrow\",\"category\":\"Symbols\",\"aliases\":[\"cupid\"],\"tags\":[\"love\",\"heart\"]},{\"emoji\":\"💝\",\"description\":\"heart with ribbon\",\"category\":\"Symbols\",\"aliases\":[\"gift_heart\"],\"tags\":[\"chocolates\"]},{\"emoji\":\"💟\",\"description\":\"heart decoration\",\"category\":\"Symbols\",\"aliases\":[\"heart_decoration\"],\"tags\":[]},{\"emoji\":\"☮️\",\"description\":\"peace symbol\",\"category\":\"Symbols\",\"aliases\":[\"peace_symbol\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"✝️\",\"description\":\"latin cross\",\"category\":\"Symbols\",\"aliases\":[\"latin_cross\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"☪️\",\"description\":\"star and crescent\",\"category\":\"Symbols\",\"aliases\":[\"star_and_crescent\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"🕉\",\"description\":\"om\",\"category\":\"Symbols\",\"aliases\":[\"om\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"☸️\",\"description\":\"wheel of dharma\",\"category\":\"Symbols\",\"aliases\":[\"wheel_of_dharma\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"✡️\",\"description\":\"star of David\",\"category\":\"Symbols\",\"aliases\":[\"star_of_david\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"🔯\",\"description\":\"dotted six-pointed star\",\"category\":\"Symbols\",\"aliases\":[\"six_pointed_star\"],\"tags\":[]},{\"emoji\":\"🕎\",\"description\":\"menorah\",\"category\":\"Symbols\",\"aliases\":[\"menorah\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"☯️\",\"description\":\"yin yang\",\"category\":\"Symbols\",\"aliases\":[\"yin_yang\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"☦️\",\"description\":\"orthodox cross\",\"category\":\"Symbols\",\"aliases\":[\"orthodox_cross\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"🛐\",\"description\":\"place of worship\",\"category\":\"Symbols\",\"aliases\":[\"place_of_worship\"],\"tags\":[],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⛎\",\"description\":\"Ophiuchus\",\"category\":\"Symbols\",\"aliases\":[\"ophiuchus\"],\"tags\":[]},{\"emoji\":\"♈️\",\"description\":\"Aries\",\"category\":\"Symbols\",\"aliases\":[\"aries\"],\"tags\":[]},{\"emoji\":\"♉️\",\"description\":\"Taurus\",\"category\":\"Symbols\",\"aliases\":[\"taurus\"],\"tags\":[]},{\"emoji\":\"♊️\",\"description\":\"Gemini\",\"category\":\"Symbols\",\"aliases\":[\"gemini\"],\"tags\":[]},{\"emoji\":\"♋️\",\"description\":\"Cancer\",\"category\":\"Symbols\",\"aliases\":[\"cancer\"],\"tags\":[]},{\"emoji\":\"♌️\",\"description\":\"Leo\",\"category\":\"Symbols\",\"aliases\":[\"leo\"],\"tags\":[]},{\"emoji\":\"♍️\",\"description\":\"Virgo\",\"category\":\"Symbols\",\"aliases\":[\"virgo\"],\"tags\":[]},{\"emoji\":\"♎️\",\"description\":\"Libra\",\"category\":\"Symbols\",\"aliases\":[\"libra\"],\"tags\":[]},{\"emoji\":\"♏️\",\"description\":\"Scorpius\",\"category\":\"Symbols\",\"aliases\":[\"scorpius\"],\"tags\":[]},{\"emoji\":\"♐️\",\"description\":\"Sagittarius\",\"category\":\"Symbols\",\"aliases\":[\"sagittarius\"],\"tags\":[]},{\"emoji\":\"♑️\",\"description\":\"Capricorn\",\"category\":\"Symbols\",\"aliases\":[\"capricorn\"],\"tags\":[]},{\"emoji\":\"♒️\",\"description\":\"Aquarius\",\"category\":\"Symbols\",\"aliases\":[\"aquarius\"],\"tags\":[]},{\"emoji\":\"♓️\",\"description\":\"Pisces\",\"category\":\"Symbols\",\"aliases\":[\"pisces\"],\"tags\":[]},{\"emoji\":\"🆔\",\"description\":\"ID button\",\"category\":\"Symbols\",\"aliases\":[\"id\"],\"tags\":[]},{\"emoji\":\"⚛️\",\"description\":\"atom symbol\",\"category\":\"Symbols\",\"aliases\":[\"atom_symbol\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🉑\",\"description\":\"Japanese “acceptable” button\",\"category\":\"Symbols\",\"aliases\":[\"accept\"],\"tags\":[]},{\"emoji\":\"☢️\",\"description\":\"radioactive\",\"category\":\"Symbols\",\"aliases\":[\"radioactive\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"☣️\",\"description\":\"biohazard\",\"category\":\"Symbols\",\"aliases\":[\"biohazard\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"📴\",\"description\":\"mobile phone off\",\"category\":\"Symbols\",\"aliases\":[\"mobile_phone_off\"],\"tags\":[\"mute\",\"off\"]},{\"emoji\":\"📳\",\"description\":\"vibration mode\",\"category\":\"Symbols\",\"aliases\":[\"vibration_mode\"],\"tags\":[]},{\"emoji\":\"🈶\",\"description\":\"Japanese “not free of charge” button\",\"category\":\"Symbols\",\"aliases\":[\"u6709\"],\"tags\":[]},{\"emoji\":\"🈚️\",\"description\":\"Japanese “free of charge” button\",\"category\":\"Symbols\",\"aliases\":[\"u7121\"],\"tags\":[]},{\"emoji\":\"🈸\",\"description\":\"Japanese “application” button\",\"category\":\"Symbols\",\"aliases\":[\"u7533\"],\"tags\":[]},{\"emoji\":\"🈺\",\"description\":\"Japanese “open for business” button\",\"category\":\"Symbols\",\"aliases\":[\"u55b6\"],\"tags\":[]},{\"emoji\":\"🈷️\",\"description\":\"Japanese “monthly amount” button\",\"category\":\"Symbols\",\"aliases\":[\"u6708\"],\"tags\":[]},{\"emoji\":\"✴️\",\"description\":\"eight-pointed star\",\"category\":\"Symbols\",\"aliases\":[\"eight_pointed_black_star\"],\"tags\":[]},{\"emoji\":\"🆚\",\"description\":\"VS button\",\"category\":\"Symbols\",\"aliases\":[\"vs\"],\"tags\":[]},{\"emoji\":\"💮\",\"description\":\"white flower\",\"category\":\"Symbols\",\"aliases\":[\"white_flower\"],\"tags\":[]},{\"emoji\":\"🉐\",\"description\":\"Japanese “bargain” button\",\"category\":\"Symbols\",\"aliases\":[\"ideograph_advantage\"],\"tags\":[]},{\"emoji\":\"㊙️\",\"description\":\"Japanese “secret” button\",\"category\":\"Symbols\",\"aliases\":[\"secret\"],\"tags\":[]},{\"emoji\":\"㊗️\",\"description\":\"Japanese “congratulations” button\",\"category\":\"Symbols\",\"aliases\":[\"congratulations\"],\"tags\":[]},{\"emoji\":\"🈴\",\"description\":\"Japanese “passing grade” button\",\"category\":\"Symbols\",\"aliases\":[\"u5408\"],\"tags\":[]},{\"emoji\":\"🈵\",\"description\":\"Japanese “no vacancy” button\",\"category\":\"Symbols\",\"aliases\":[\"u6e80\"],\"tags\":[]},{\"emoji\":\"🈹\",\"description\":\"Japanese “discount” button\",\"category\":\"Symbols\",\"aliases\":[\"u5272\"],\"tags\":[]},{\"emoji\":\"🈲\",\"description\":\"Japanese “prohibited” button\",\"category\":\"Symbols\",\"aliases\":[\"u7981\"],\"tags\":[]},{\"emoji\":\"🅰️\",\"description\":\"A button (blood type)\",\"category\":\"Symbols\",\"aliases\":[\"a\"],\"tags\":[]},{\"emoji\":\"🅱️\",\"description\":\"B button (blood type)\",\"category\":\"Symbols\",\"aliases\":[\"b\"],\"tags\":[]},{\"emoji\":\"🆎\",\"description\":\"AB button (blood type)\",\"category\":\"Symbols\",\"aliases\":[\"ab\"],\"tags\":[]},{\"emoji\":\"🆑\",\"description\":\"CL button\",\"category\":\"Symbols\",\"aliases\":[\"cl\"],\"tags\":[]},{\"emoji\":\"🅾️\",\"description\":\"O button (blood type)\",\"category\":\"Symbols\",\"aliases\":[\"o2\"],\"tags\":[]},{\"emoji\":\"🆘\",\"description\":\"SOS button\",\"category\":\"Symbols\",\"aliases\":[\"sos\"],\"tags\":[\"help\",\"emergency\"]},{\"emoji\":\"❌\",\"description\":\"cross mark\",\"category\":\"Symbols\",\"aliases\":[\"x\"],\"tags\":[]},{\"emoji\":\"⭕️\",\"description\":\"heavy large circle\",\"category\":\"Symbols\",\"aliases\":[\"o\"],\"tags\":[],\"unicode_version\":\"5.2\"},{\"emoji\":\"🛑\",\"description\":\"stop sign\",\"category\":\"Symbols\",\"aliases\":[\"stop_sign\"],\"tags\":[],\"unicode_version\":\"9.0\"},{\"emoji\":\"⛔️\",\"description\":\"no entry\",\"category\":\"Symbols\",\"aliases\":[\"no_entry\"],\"tags\":[\"limit\"],\"unicode_version\":\"5.2\"},{\"emoji\":\"📛\",\"description\":\"name badge\",\"category\":\"Symbols\",\"aliases\":[\"name_badge\"],\"tags\":[]},{\"emoji\":\"🚫\",\"description\":\"prohibited\",\"category\":\"Symbols\",\"aliases\":[\"no_entry_sign\"],\"tags\":[\"block\",\"forbidden\"]},{\"emoji\":\"💯\",\"description\":\"hundred points\",\"category\":\"Symbols\",\"aliases\":[\"100\"],\"tags\":[\"score\",\"perfect\"]},{\"emoji\":\"💢\",\"description\":\"anger symbol\",\"category\":\"Symbols\",\"aliases\":[\"anger\"],\"tags\":[\"angry\"]},{\"emoji\":\"♨️\",\"description\":\"hot springs\",\"category\":\"Symbols\",\"aliases\":[\"hotsprings\"],\"tags\":[]},{\"emoji\":\"🚷\",\"description\":\"no pedestrians\",\"category\":\"Symbols\",\"aliases\":[\"no_pedestrians\"],\"tags\":[]},{\"emoji\":\"🚯\",\"description\":\"no littering\",\"category\":\"Symbols\",\"aliases\":[\"do_not_litter\"],\"tags\":[]},{\"emoji\":\"🚳\",\"description\":\"no bicycles\",\"category\":\"Symbols\",\"aliases\":[\"no_bicycles\"],\"tags\":[]},{\"emoji\":\"🚱\",\"description\":\"non-potable water\",\"category\":\"Symbols\",\"aliases\":[\"non-potable_water\"],\"tags\":[]},{\"emoji\":\"🔞\",\"description\":\"no one under eighteen\",\"category\":\"Symbols\",\"aliases\":[\"underage\"],\"tags\":[]},{\"emoji\":\"📵\",\"description\":\"no mobile phones\",\"category\":\"Symbols\",\"aliases\":[\"no_mobile_phones\"],\"tags\":[]},{\"emoji\":\"🚭\",\"description\":\"no smoking\",\"category\":\"Symbols\",\"aliases\":[\"no_smoking\"],\"tags\":[]},{\"emoji\":\"❗️\",\"description\":\"exclamation mark\",\"category\":\"Symbols\",\"aliases\":[\"exclamation\",\"heavy_exclamation_mark\"],\"tags\":[\"bang\"],\"unicode_version\":\"5.2\"},{\"emoji\":\"❕\",\"description\":\"white exclamation mark\",\"category\":\"Symbols\",\"aliases\":[\"grey_exclamation\"],\"tags\":[]},{\"emoji\":\"❓\",\"description\":\"question mark\",\"category\":\"Symbols\",\"aliases\":[\"question\"],\"tags\":[\"confused\"]},{\"emoji\":\"❔\",\"description\":\"white question mark\",\"category\":\"Symbols\",\"aliases\":[\"grey_question\"],\"tags\":[]},{\"emoji\":\"‼️\",\"description\":\"double exclamation mark\",\"category\":\"Symbols\",\"aliases\":[\"bangbang\"],\"tags\":[]},{\"emoji\":\"⁉️\",\"description\":\"exclamation question mark\",\"category\":\"Symbols\",\"aliases\":[\"interrobang\"],\"tags\":[],\"unicode_version\":\"3.0\"},{\"emoji\":\"🔅\",\"description\":\"dim button\",\"category\":\"Symbols\",\"aliases\":[\"low_brightness\"],\"tags\":[]},{\"emoji\":\"🔆\",\"description\":\"bright button\",\"category\":\"Symbols\",\"aliases\":[\"high_brightness\"],\"tags\":[]},{\"emoji\":\"〽️\",\"description\":\"part alternation mark\",\"category\":\"Symbols\",\"aliases\":[\"part_alternation_mark\"],\"tags\":[],\"unicode_version\":\"3.2\"},{\"emoji\":\"⚠️\",\"description\":\"warning\",\"category\":\"Symbols\",\"aliases\":[\"warning\"],\"tags\":[\"wip\"],\"unicode_version\":\"4.0\"},{\"emoji\":\"🚸\",\"description\":\"children crossing\",\"category\":\"Symbols\",\"aliases\":[\"children_crossing\"],\"tags\":[]},{\"emoji\":\"🔱\",\"description\":\"trident emblem\",\"category\":\"Symbols\",\"aliases\":[\"trident\"],\"tags\":[]},{\"emoji\":\"⚜️\",\"description\":\"fleur-de-lis\",\"category\":\"Symbols\",\"aliases\":[\"fleur_de_lis\"],\"tags\":[],\"unicode_version\":\"4.1\",\"ios_version\":\"9.1\"},{\"emoji\":\"🔰\",\"description\":\"Japanese symbol for beginner\",\"category\":\"Symbols\",\"aliases\":[\"beginner\"],\"tags\":[]},{\"emoji\":\"♻️\",\"description\":\"recycling symbol\",\"category\":\"Symbols\",\"aliases\":[\"recycle\"],\"tags\":[\"environment\",\"green\"],\"unicode_version\":\"3.2\"},{\"emoji\":\"✅\",\"description\":\"white heavy check mark\",\"category\":\"Symbols\",\"aliases\":[\"white_check_mark\"],\"tags\":[]},{\"emoji\":\"🈯️\",\"description\":\"Japanese “reserved” button\",\"category\":\"Symbols\",\"aliases\":[\"u6307\"],\"tags\":[]},{\"emoji\":\"💹\",\"description\":\"chart increasing with yen\",\"category\":\"Symbols\",\"aliases\":[\"chart\"],\"tags\":[]},{\"emoji\":\"❇️\",\"description\":\"sparkle\",\"category\":\"Symbols\",\"aliases\":[\"sparkle\"],\"tags\":[]},{\"emoji\":\"✳️\",\"description\":\"eight-spoked asterisk\",\"category\":\"Symbols\",\"aliases\":[\"eight_spoked_asterisk\"],\"tags\":[]},{\"emoji\":\"❎\",\"description\":\"cross mark button\",\"category\":\"Symbols\",\"aliases\":[\"negative_squared_cross_mark\"],\"tags\":[]},{\"emoji\":\"🌐\",\"description\":\"globe with meridians\",\"category\":\"Symbols\",\"aliases\":[\"globe_with_meridians\"],\"tags\":[\"world\",\"global\",\"international\"]},{\"emoji\":\"💠\",\"description\":\"diamond with a dot\",\"category\":\"Symbols\",\"aliases\":[\"diamond_shape_with_a_dot_inside\"],\"tags\":[]},{\"emoji\":\"Ⓜ️\",\"description\":\"circled M\",\"category\":\"Symbols\",\"aliases\":[\"m\"],\"tags\":[]},{\"emoji\":\"🌀\",\"description\":\"cyclone\",\"category\":\"Symbols\",\"aliases\":[\"cyclone\"],\"tags\":[\"swirl\"]},{\"emoji\":\"💤\",\"description\":\"zzz\",\"category\":\"Symbols\",\"aliases\":[\"zzz\"],\"tags\":[\"sleeping\"]},{\"emoji\":\"🏧\",\"description\":\"ATM sign\",\"category\":\"Symbols\",\"aliases\":[\"atm\"],\"tags\":[]},{\"emoji\":\"🚾\",\"description\":\"water closet\",\"category\":\"Symbols\",\"aliases\":[\"wc\"],\"tags\":[\"toilet\",\"restroom\"]},{\"emoji\":\"♿️\",\"description\":\"wheelchair symbol\",\"category\":\"Symbols\",\"aliases\":[\"wheelchair\"],\"tags\":[\"accessibility\"],\"unicode_version\":\"4.1\"},{\"emoji\":\"🅿️\",\"description\":\"P button\",\"category\":\"Symbols\",\"aliases\":[\"parking\"],\"tags\":[],\"unicode_version\":\"5.2\"},{\"emoji\":\"🈳\",\"description\":\"Japanese “vacancy” button\",\"category\":\"Symbols\",\"aliases\":[\"u7a7a\"],\"tags\":[]},{\"emoji\":\"🈂️\",\"description\":\"Japanese “service charge” button\",\"category\":\"Symbols\",\"aliases\":[\"sa\"],\"tags\":[]},{\"emoji\":\"🛂\",\"description\":\"passport control\",\"category\":\"Symbols\",\"aliases\":[\"passport_control\"],\"tags\":[]},{\"emoji\":\"🛃\",\"description\":\"customs\",\"category\":\"Symbols\",\"aliases\":[\"customs\"],\"tags\":[]},{\"emoji\":\"🛄\",\"description\":\"baggage claim\",\"category\":\"Symbols\",\"aliases\":[\"baggage_claim\"],\"tags\":[\"airport\"]},{\"emoji\":\"🛅\",\"description\":\"left luggage\",\"category\":\"Symbols\",\"aliases\":[\"left_luggage\"],\"tags\":[]},{\"emoji\":\"🚹\",\"description\":\"men’s room\",\"category\":\"Symbols\",\"aliases\":[\"mens\"],\"tags\":[]},{\"emoji\":\"🚺\",\"description\":\"women’s room\",\"category\":\"Symbols\",\"aliases\":[\"womens\"],\"tags\":[]},{\"emoji\":\"🚼\",\"description\":\"baby symbol\",\"category\":\"Symbols\",\"aliases\":[\"baby_symbol\"],\"tags\":[]},{\"emoji\":\"🚻\",\"description\":\"restroom\",\"category\":\"Symbols\",\"aliases\":[\"restroom\"],\"tags\":[\"toilet\"]},{\"emoji\":\"🚮\",\"description\":\"litter in bin sign\",\"category\":\"Symbols\",\"aliases\":[\"put_litter_in_its_place\"],\"tags\":[]},{\"emoji\":\"🎦\",\"description\":\"cinema\",\"category\":\"Symbols\",\"aliases\":[\"cinema\"],\"tags\":[\"film\",\"movie\"]},{\"emoji\":\"📶\",\"description\":\"antenna bars\",\"category\":\"Symbols\",\"aliases\":[\"signal_strength\"],\"tags\":[\"wifi\"]},{\"emoji\":\"🈁\",\"description\":\"Japanese “here” button\",\"category\":\"Symbols\",\"aliases\":[\"koko\"],\"tags\":[]},{\"emoji\":\"🔣\",\"description\":\"input symbols\",\"category\":\"Symbols\",\"aliases\":[\"symbols\"],\"tags\":[]},{\"emoji\":\"ℹ️\",\"description\":\"information\",\"category\":\"Symbols\",\"aliases\":[\"information_source\"],\"tags\":[],\"unicode_version\":\"3.0\"},{\"emoji\":\"🔤\",\"description\":\"input latin letters\",\"category\":\"Symbols\",\"aliases\":[\"abc\"],\"tags\":[\"alphabet\"]},{\"emoji\":\"🔡\",\"description\":\"input latin lowercase\",\"category\":\"Symbols\",\"aliases\":[\"abcd\"],\"tags\":[]},{\"emoji\":\"🔠\",\"description\":\"input latin uppercase\",\"category\":\"Symbols\",\"aliases\":[\"capital_abcd\"],\"tags\":[\"letters\"]},{\"emoji\":\"🆖\",\"description\":\"NG button\",\"category\":\"Symbols\",\"aliases\":[\"ng\"],\"tags\":[]},{\"emoji\":\"🆗\",\"description\":\"OK button\",\"category\":\"Symbols\",\"aliases\":[\"ok\"],\"tags\":[\"yes\"]},{\"emoji\":\"🆙\",\"description\":\"UP! button\",\"category\":\"Symbols\",\"aliases\":[\"up\"],\"tags\":[]},{\"emoji\":\"🆒\",\"description\":\"COOL button\",\"category\":\"Symbols\",\"aliases\":[\"cool\"],\"tags\":[]},{\"emoji\":\"🆕\",\"description\":\"NEW button\",\"category\":\"Symbols\",\"aliases\":[\"new\"],\"tags\":[\"fresh\"]},{\"emoji\":\"🆓\",\"description\":\"FREE button\",\"category\":\"Symbols\",\"aliases\":[\"free\"],\"tags\":[]},{\"emoji\":\"0️⃣\",\"description\":\"keycap: 0\",\"category\":\"Symbols\",\"aliases\":[\"zero\"],\"tags\":[]},{\"emoji\":\"1️⃣\",\"description\":\"keycap: 1\",\"category\":\"Symbols\",\"aliases\":[\"one\"],\"tags\":[]},{\"emoji\":\"2️⃣\",\"description\":\"keycap: 2\",\"category\":\"Symbols\",\"aliases\":[\"two\"],\"tags\":[]},{\"emoji\":\"3️⃣\",\"description\":\"keycap: 3\",\"category\":\"Symbols\",\"aliases\":[\"three\"],\"tags\":[]},{\"emoji\":\"4️⃣\",\"description\":\"keycap: 4\",\"category\":\"Symbols\",\"aliases\":[\"four\"],\"tags\":[]},{\"emoji\":\"5️⃣\",\"description\":\"keycap: 5\",\"category\":\"Symbols\",\"aliases\":[\"five\"],\"tags\":[]},{\"emoji\":\"6️⃣\",\"description\":\"keycap: 6\",\"category\":\"Symbols\",\"aliases\":[\"six\"],\"tags\":[]},{\"emoji\":\"7️⃣\",\"description\":\"keycap: 7\",\"category\":\"Symbols\",\"aliases\":[\"seven\"],\"tags\":[]},{\"emoji\":\"8️⃣\",\"description\":\"keycap: 8\",\"category\":\"Symbols\",\"aliases\":[\"eight\"],\"tags\":[]},{\"emoji\":\"9️⃣\",\"description\":\"keycap: 9\",\"category\":\"Symbols\",\"aliases\":[\"nine\"],\"tags\":[]},{\"emoji\":\"🔟\",\"description\":\"keycap 10\",\"category\":\"Symbols\",\"aliases\":[\"keycap_ten\"],\"tags\":[]},{\"emoji\":\"🔢\",\"description\":\"input numbers\",\"category\":\"Symbols\",\"aliases\":[\"1234\"],\"tags\":[\"numbers\"]},{\"emoji\":\"#️⃣\",\"description\":\"keycap: #\",\"category\":\"Symbols\",\"aliases\":[\"hash\"],\"tags\":[\"number\"]},{\"emoji\":\"*️⃣\",\"description\":\"keycap: *\",\"category\":\"Symbols\",\"aliases\":[\"asterisk\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"▶️\",\"description\":\"play button\",\"category\":\"Symbols\",\"aliases\":[\"arrow_forward\"],\"tags\":[]},{\"emoji\":\"⏸\",\"description\":\"pause button\",\"category\":\"Symbols\",\"aliases\":[\"pause_button\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⏯\",\"description\":\"play or pause button\",\"category\":\"Symbols\",\"aliases\":[\"play_or_pause_button\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"⏹\",\"description\":\"stop button\",\"category\":\"Symbols\",\"aliases\":[\"stop_button\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⏺\",\"description\":\"record button\",\"category\":\"Symbols\",\"aliases\":[\"record_button\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"⏭\",\"description\":\"next track button\",\"category\":\"Symbols\",\"aliases\":[\"next_track_button\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"⏮\",\"description\":\"last track button\",\"category\":\"Symbols\",\"aliases\":[\"previous_track_button\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"⏩\",\"description\":\"fast-forward button\",\"category\":\"Symbols\",\"aliases\":[\"fast_forward\"],\"tags\":[]},{\"emoji\":\"⏪\",\"description\":\"fast reverse button\",\"category\":\"Symbols\",\"aliases\":[\"rewind\"],\"tags\":[]},{\"emoji\":\"⏫\",\"description\":\"fast up button\",\"category\":\"Symbols\",\"aliases\":[\"arrow_double_up\"],\"tags\":[]},{\"emoji\":\"⏬\",\"description\":\"fast down button\",\"category\":\"Symbols\",\"aliases\":[\"arrow_double_down\"],\"tags\":[]},{\"emoji\":\"◀️\",\"description\":\"reverse button\",\"category\":\"Symbols\",\"aliases\":[\"arrow_backward\"],\"tags\":[]},{\"emoji\":\"🔼\",\"description\":\"up button\",\"category\":\"Symbols\",\"aliases\":[\"arrow_up_small\"],\"tags\":[]},{\"emoji\":\"🔽\",\"description\":\"down button\",\"category\":\"Symbols\",\"aliases\":[\"arrow_down_small\"],\"tags\":[]},{\"emoji\":\"➡️\",\"description\":\"right arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_right\"],\"tags\":[]},{\"emoji\":\"⬅️\",\"description\":\"left arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_left\"],\"tags\":[],\"unicode_version\":\"4.0\"},{\"emoji\":\"⬆️\",\"description\":\"up arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_up\"],\"tags\":[],\"unicode_version\":\"4.0\"},{\"emoji\":\"⬇️\",\"description\":\"down arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_down\"],\"tags\":[],\"unicode_version\":\"4.0\"},{\"emoji\":\"↗️\",\"description\":\"up-right arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_upper_right\"],\"tags\":[]},{\"emoji\":\"↘️\",\"description\":\"down-right arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_lower_right\"],\"tags\":[]},{\"emoji\":\"↙️\",\"description\":\"down-left arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_lower_left\"],\"tags\":[]},{\"emoji\":\"↖️\",\"description\":\"up-left arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_upper_left\"],\"tags\":[]},{\"emoji\":\"↕️\",\"description\":\"up-down arrow\",\"category\":\"Symbols\",\"aliases\":[\"arrow_up_down\"],\"tags\":[]},{\"emoji\":\"↔️\",\"description\":\"left-right arrow\",\"category\":\"Symbols\",\"aliases\":[\"left_right_arrow\"],\"tags\":[]},{\"emoji\":\"↪️\",\"description\":\"left arrow curving right\",\"category\":\"Symbols\",\"aliases\":[\"arrow_right_hook\"],\"tags\":[]},{\"emoji\":\"↩️\",\"description\":\"right arrow curving left\",\"category\":\"Symbols\",\"aliases\":[\"leftwards_arrow_with_hook\"],\"tags\":[\"return\"]},{\"emoji\":\"⤴️\",\"description\":\"right arrow curving up\",\"category\":\"Symbols\",\"aliases\":[\"arrow_heading_up\"],\"tags\":[]},{\"emoji\":\"⤵️\",\"description\":\"right arrow curving down\",\"category\":\"Symbols\",\"aliases\":[\"arrow_heading_down\"],\"tags\":[]},{\"emoji\":\"🔀\",\"description\":\"shuffle tracks button\",\"category\":\"Symbols\",\"aliases\":[\"twisted_rightwards_arrows\"],\"tags\":[\"shuffle\"]},{\"emoji\":\"🔁\",\"description\":\"repeat button\",\"category\":\"Symbols\",\"aliases\":[\"repeat\"],\"tags\":[\"loop\"]},{\"emoji\":\"🔂\",\"description\":\"repeat single button\",\"category\":\"Symbols\",\"aliases\":[\"repeat_one\"],\"tags\":[]},{\"emoji\":\"🔄\",\"description\":\"anticlockwise arrows button\",\"category\":\"Symbols\",\"aliases\":[\"arrows_counterclockwise\"],\"tags\":[\"sync\"]},{\"emoji\":\"🔃\",\"description\":\"clockwise vertical arrows\",\"category\":\"Symbols\",\"aliases\":[\"arrows_clockwise\"],\"tags\":[]},{\"emoji\":\"🎵\",\"description\":\"musical note\",\"category\":\"Symbols\",\"aliases\":[\"musical_note\"],\"tags\":[]},{\"emoji\":\"🎶\",\"description\":\"musical notes\",\"category\":\"Symbols\",\"aliases\":[\"notes\"],\"tags\":[\"music\"]},{\"emoji\":\"➕\",\"description\":\"heavy plus sign\",\"category\":\"Symbols\",\"aliases\":[\"heavy_plus_sign\"],\"tags\":[]},{\"emoji\":\"➖\",\"description\":\"heavy minus sign\",\"category\":\"Symbols\",\"aliases\":[\"heavy_minus_sign\"],\"tags\":[]},{\"emoji\":\"➗\",\"description\":\"heavy division sign\",\"category\":\"Symbols\",\"aliases\":[\"heavy_division_sign\"],\"tags\":[]},{\"emoji\":\"✖️\",\"description\":\"heavy multiplication x\",\"category\":\"Symbols\",\"aliases\":[\"heavy_multiplication_x\"],\"tags\":[]},{\"emoji\":\"💲\",\"description\":\"heavy dollar sign\",\"category\":\"Symbols\",\"aliases\":[\"heavy_dollar_sign\"],\"tags\":[]},{\"emoji\":\"💱\",\"description\":\"currency exchange\",\"category\":\"Symbols\",\"aliases\":[\"currency_exchange\"],\"tags\":[]},{\"emoji\":\"™️\",\"description\":\"trade mark\",\"category\":\"Symbols\",\"aliases\":[\"tm\"],\"tags\":[\"trademark\"]},{\"emoji\":\"©️\",\"description\":\"copyright\",\"category\":\"Symbols\",\"aliases\":[\"copyright\"],\"tags\":[]},{\"emoji\":\"®️\",\"description\":\"registered\",\"category\":\"Symbols\",\"aliases\":[\"registered\"],\"tags\":[]},{\"emoji\":\"〰️\",\"description\":\"wavy dash\",\"category\":\"Symbols\",\"aliases\":[\"wavy_dash\"],\"tags\":[]},{\"emoji\":\"➰\",\"description\":\"curly loop\",\"category\":\"Symbols\",\"aliases\":[\"curly_loop\"],\"tags\":[]},{\"emoji\":\"➿\",\"description\":\"double curly loop\",\"category\":\"Symbols\",\"aliases\":[\"loop\"],\"tags\":[]},{\"emoji\":\"🔚\",\"description\":\"END arrow\",\"category\":\"Symbols\",\"aliases\":[\"end\"],\"tags\":[]},{\"emoji\":\"🔙\",\"description\":\"BACK arrow\",\"category\":\"Symbols\",\"aliases\":[\"back\"],\"tags\":[]},{\"emoji\":\"🔛\",\"description\":\"ON! arrow\",\"category\":\"Symbols\",\"aliases\":[\"on\"],\"tags\":[]},{\"emoji\":\"🔝\",\"description\":\"TOP arrow\",\"category\":\"Symbols\",\"aliases\":[\"top\"],\"tags\":[]},{\"emoji\":\"🔜\",\"description\":\"SOON arrow\",\"category\":\"Symbols\",\"aliases\":[\"soon\"],\"tags\":[]},{\"emoji\":\"✔️\",\"description\":\"heavy check mark\",\"category\":\"Symbols\",\"aliases\":[\"heavy_check_mark\"],\"tags\":[]},{\"emoji\":\"☑️\",\"description\":\"ballot box with check\",\"category\":\"Symbols\",\"aliases\":[\"ballot_box_with_check\"],\"tags\":[]},{\"emoji\":\"🔘\",\"description\":\"radio button\",\"category\":\"Symbols\",\"aliases\":[\"radio_button\"],\"tags\":[]},{\"emoji\":\"⚪️\",\"description\":\"white circle\",\"category\":\"Symbols\",\"aliases\":[\"white_circle\"],\"tags\":[],\"unicode_version\":\"4.1\"},{\"emoji\":\"⚫️\",\"description\":\"black circle\",\"category\":\"Symbols\",\"aliases\":[\"black_circle\"],\"tags\":[],\"unicode_version\":\"4.1\"},{\"emoji\":\"🔴\",\"description\":\"red circle\",\"category\":\"Symbols\",\"aliases\":[\"red_circle\"],\"tags\":[]},{\"emoji\":\"🔵\",\"description\":\"blue circle\",\"category\":\"Symbols\",\"aliases\":[\"large_blue_circle\"],\"tags\":[]},{\"emoji\":\"🔺\",\"description\":\"red triangle pointed up\",\"category\":\"Symbols\",\"aliases\":[\"small_red_triangle\"],\"tags\":[]},{\"emoji\":\"🔻\",\"description\":\"red triangle pointed down\",\"category\":\"Symbols\",\"aliases\":[\"small_red_triangle_down\"],\"tags\":[]},{\"emoji\":\"🔸\",\"description\":\"small orange diamond\",\"category\":\"Symbols\",\"aliases\":[\"small_orange_diamond\"],\"tags\":[]},{\"emoji\":\"🔹\",\"description\":\"small blue diamond\",\"category\":\"Symbols\",\"aliases\":[\"small_blue_diamond\"],\"tags\":[]},{\"emoji\":\"🔶\",\"description\":\"large orange diamond\",\"category\":\"Symbols\",\"aliases\":[\"large_orange_diamond\"],\"tags\":[]},{\"emoji\":\"🔷\",\"description\":\"large blue diamond\",\"category\":\"Symbols\",\"aliases\":[\"large_blue_diamond\"],\"tags\":[]},{\"emoji\":\"🔳\",\"description\":\"white square button\",\"category\":\"Symbols\",\"aliases\":[\"white_square_button\"],\"tags\":[]},{\"emoji\":\"🔲\",\"description\":\"black square button\",\"category\":\"Symbols\",\"aliases\":[\"black_square_button\"],\"tags\":[]},{\"emoji\":\"▪️\",\"description\":\"black small square\",\"category\":\"Symbols\",\"aliases\":[\"black_small_square\"],\"tags\":[]},{\"emoji\":\"▫️\",\"description\":\"white small square\",\"category\":\"Symbols\",\"aliases\":[\"white_small_square\"],\"tags\":[]},{\"emoji\":\"◾️\",\"description\":\"black medium-small square\",\"category\":\"Symbols\",\"aliases\":[\"black_medium_small_square\"],\"tags\":[],\"unicode_version\":\"3.2\"},{\"emoji\":\"◽️\",\"description\":\"white medium-small square\",\"category\":\"Symbols\",\"aliases\":[\"white_medium_small_square\"],\"tags\":[],\"unicode_version\":\"3.2\"},{\"emoji\":\"◼️\",\"description\":\"black medium square\",\"category\":\"Symbols\",\"aliases\":[\"black_medium_square\"],\"tags\":[],\"unicode_version\":\"3.2\"},{\"emoji\":\"◻️\",\"description\":\"white medium square\",\"category\":\"Symbols\",\"aliases\":[\"white_medium_square\"],\"tags\":[],\"unicode_version\":\"3.2\"},{\"emoji\":\"⬛️\",\"description\":\"black large square\",\"category\":\"Symbols\",\"aliases\":[\"black_large_square\"],\"tags\":[],\"unicode_version\":\"5.1\"},{\"emoji\":\"⬜️\",\"description\":\"white large square\",\"category\":\"Symbols\",\"aliases\":[\"white_large_square\"],\"tags\":[],\"unicode_version\":\"5.1\"},{\"emoji\":\"🔈\",\"description\":\"speaker low volume\",\"category\":\"Symbols\",\"aliases\":[\"speaker\"],\"tags\":[]},{\"emoji\":\"🔇\",\"description\":\"muted speaker\",\"category\":\"Symbols\",\"aliases\":[\"mute\"],\"tags\":[\"sound\",\"volume\"]},{\"emoji\":\"🔉\",\"description\":\"speaker medium volume\",\"category\":\"Symbols\",\"aliases\":[\"sound\"],\"tags\":[\"volume\"]},{\"emoji\":\"🔊\",\"description\":\"speaker high volume\",\"category\":\"Symbols\",\"aliases\":[\"loud_sound\"],\"tags\":[\"volume\"]},{\"emoji\":\"🔔\",\"description\":\"bell\",\"category\":\"Symbols\",\"aliases\":[\"bell\"],\"tags\":[\"sound\",\"notification\"]},{\"emoji\":\"🔕\",\"description\":\"bell with slash\",\"category\":\"Symbols\",\"aliases\":[\"no_bell\"],\"tags\":[\"volume\",\"off\"]},{\"emoji\":\"📣\",\"description\":\"megaphone\",\"category\":\"Symbols\",\"aliases\":[\"mega\"],\"tags\":[]},{\"emoji\":\"📢\",\"description\":\"loudspeaker\",\"category\":\"Symbols\",\"aliases\":[\"loudspeaker\"],\"tags\":[\"announcement\"]},{\"emoji\":\"👁‍🗨\",\"description\":\"eye in speech bubble\",\"category\":\"Symbols\",\"aliases\":[\"eye_speech_bubble\"],\"tags\":[],\"ios_version\":\"9.1\"},{\"emoji\":\"💬\",\"description\":\"speech balloon\",\"category\":\"Symbols\",\"aliases\":[\"speech_balloon\"],\"tags\":[\"comment\"]},{\"emoji\":\"💭\",\"description\":\"thought balloon\",\"category\":\"Symbols\",\"aliases\":[\"thought_balloon\"],\"tags\":[\"thinking\"]},{\"emoji\":\"🗯\",\"description\":\"right anger bubble\",\"category\":\"Symbols\",\"aliases\":[\"right_anger_bubble\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"♠️\",\"description\":\"spade suit\",\"category\":\"Symbols\",\"aliases\":[\"spades\"],\"tags\":[]},{\"emoji\":\"♣️\",\"description\":\"club suit\",\"category\":\"Symbols\",\"aliases\":[\"clubs\"],\"tags\":[]},{\"emoji\":\"♥️\",\"description\":\"heart suit\",\"category\":\"Symbols\",\"aliases\":[\"hearts\"],\"tags\":[]},{\"emoji\":\"♦️\",\"description\":\"diamond suit\",\"category\":\"Symbols\",\"aliases\":[\"diamonds\"],\"tags\":[]},{\"emoji\":\"🃏\",\"description\":\"joker\",\"category\":\"Symbols\",\"aliases\":[\"black_joker\"],\"tags\":[]},{\"emoji\":\"🎴\",\"description\":\"flower playing cards\",\"category\":\"Symbols\",\"aliases\":[\"flower_playing_cards\"],\"tags\":[]},{\"emoji\":\"🀄️\",\"description\":\"mahjong red dragon\",\"category\":\"Symbols\",\"aliases\":[\"mahjong\"],\"tags\":[]},{\"emoji\":\"🕐\",\"description\":\"one o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock1\"],\"tags\":[]},{\"emoji\":\"🕑\",\"description\":\"two o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock2\"],\"tags\":[]},{\"emoji\":\"🕒\",\"description\":\"three o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock3\"],\"tags\":[]},{\"emoji\":\"🕓\",\"description\":\"four o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock4\"],\"tags\":[]},{\"emoji\":\"🕔\",\"description\":\"five o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock5\"],\"tags\":[]},{\"emoji\":\"🕕\",\"description\":\"six o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock6\"],\"tags\":[]},{\"emoji\":\"🕖\",\"description\":\"seven o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock7\"],\"tags\":[]},{\"emoji\":\"🕗\",\"description\":\"eight o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock8\"],\"tags\":[]},{\"emoji\":\"🕘\",\"description\":\"nine o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock9\"],\"tags\":[]},{\"emoji\":\"🕙\",\"description\":\"ten o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock10\"],\"tags\":[]},{\"emoji\":\"🕚\",\"description\":\"eleven o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock11\"],\"tags\":[]},{\"emoji\":\"🕛\",\"description\":\"twelve o’clock\",\"category\":\"Symbols\",\"aliases\":[\"clock12\"],\"tags\":[]},{\"emoji\":\"🕜\",\"description\":\"one-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock130\"],\"tags\":[]},{\"emoji\":\"🕝\",\"description\":\"two-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock230\"],\"tags\":[]},{\"emoji\":\"🕞\",\"description\":\"three-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock330\"],\"tags\":[]},{\"emoji\":\"🕟\",\"description\":\"four-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock430\"],\"tags\":[]},{\"emoji\":\"🕠\",\"description\":\"five-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock530\"],\"tags\":[]},{\"emoji\":\"🕡\",\"description\":\"six-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock630\"],\"tags\":[]},{\"emoji\":\"🕢\",\"description\":\"seven-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock730\"],\"tags\":[]},{\"emoji\":\"🕣\",\"description\":\"eight-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock830\"],\"tags\":[]},{\"emoji\":\"🕤\",\"description\":\"nine-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock930\"],\"tags\":[]},{\"emoji\":\"🕥\",\"description\":\"ten-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock1030\"],\"tags\":[]},{\"emoji\":\"🕦\",\"description\":\"eleven-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock1130\"],\"tags\":[]},{\"emoji\":\"🕧\",\"description\":\"twelve-thirty\",\"category\":\"Symbols\",\"aliases\":[\"clock1230\"],\"tags\":[]},{\"emoji\":\"🏳️\",\"description\":\"white flag\",\"category\":\"Flags\",\"aliases\":[\"white_flag\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏴\",\"description\":\"black flag\",\"category\":\"Flags\",\"aliases\":[\"black_flag\"],\"tags\":[],\"unicode_version\":\"7.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🏁\",\"description\":\"chequered flag\",\"category\":\"Flags\",\"aliases\":[\"checkered_flag\"],\"tags\":[\"milestone\",\"finish\"]},{\"emoji\":\"🚩\",\"description\":\"triangular flag\",\"category\":\"Flags\",\"aliases\":[\"triangular_flag_on_post\"],\"tags\":[]},{\"emoji\":\"🏳️‍🌈\",\"description\":\"rainbow flag\",\"category\":\"Flags\",\"aliases\":[\"rainbow_flag\"],\"tags\":[\"pride\"]},{\"emoji\":\"🇦🇫\",\"description\":\"Afghanistan\",\"category\":\"Flags\",\"aliases\":[\"afghanistan\"],\"tags\":[]},{\"emoji\":\"🇦🇽\",\"description\":\"Åland Islands\",\"category\":\"Flags\",\"aliases\":[\"aland_islands\"],\"tags\":[]},{\"emoji\":\"🇦🇱\",\"description\":\"Albania\",\"category\":\"Flags\",\"aliases\":[\"albania\"],\"tags\":[]},{\"emoji\":\"🇩🇿\",\"description\":\"Algeria\",\"category\":\"Flags\",\"aliases\":[\"algeria\"],\"tags\":[]},{\"emoji\":\"🇦🇸\",\"description\":\"American Samoa\",\"category\":\"Flags\",\"aliases\":[\"american_samoa\"],\"tags\":[]},{\"emoji\":\"🇦🇩\",\"description\":\"Andorra\",\"category\":\"Flags\",\"aliases\":[\"andorra\"],\"tags\":[]},{\"emoji\":\"🇦🇴\",\"description\":\"Angola\",\"category\":\"Flags\",\"aliases\":[\"angola\"],\"tags\":[]},{\"emoji\":\"🇦🇮\",\"description\":\"Anguilla\",\"category\":\"Flags\",\"aliases\":[\"anguilla\"],\"tags\":[]},{\"emoji\":\"🇦🇶\",\"description\":\"Antarctica\",\"category\":\"Flags\",\"aliases\":[\"antarctica\"],\"tags\":[]},{\"emoji\":\"🇦🇬\",\"description\":\"Antigua & Barbuda\",\"category\":\"Flags\",\"aliases\":[\"antigua_barbuda\"],\"tags\":[]},{\"emoji\":\"🇦🇷\",\"description\":\"Argentina\",\"category\":\"Flags\",\"aliases\":[\"argentina\"],\"tags\":[]},{\"emoji\":\"🇦🇲\",\"description\":\"Armenia\",\"category\":\"Flags\",\"aliases\":[\"armenia\"],\"tags\":[]},{\"emoji\":\"🇦🇼\",\"description\":\"Aruba\",\"category\":\"Flags\",\"aliases\":[\"aruba\"],\"tags\":[]},{\"emoji\":\"🇦🇺\",\"description\":\"Australia\",\"category\":\"Flags\",\"aliases\":[\"australia\"],\"tags\":[]},{\"emoji\":\"🇦🇹\",\"description\":\"Austria\",\"category\":\"Flags\",\"aliases\":[\"austria\"],\"tags\":[]},{\"emoji\":\"🇦🇿\",\"description\":\"Azerbaijan\",\"category\":\"Flags\",\"aliases\":[\"azerbaijan\"],\"tags\":[]},{\"emoji\":\"🇧🇸\",\"description\":\"Bahamas\",\"category\":\"Flags\",\"aliases\":[\"bahamas\"],\"tags\":[]},{\"emoji\":\"🇧🇭\",\"description\":\"Bahrain\",\"category\":\"Flags\",\"aliases\":[\"bahrain\"],\"tags\":[]},{\"emoji\":\"🇧🇩\",\"description\":\"Bangladesh\",\"category\":\"Flags\",\"aliases\":[\"bangladesh\"],\"tags\":[]},{\"emoji\":\"🇧🇧\",\"description\":\"Barbados\",\"category\":\"Flags\",\"aliases\":[\"barbados\"],\"tags\":[]},{\"emoji\":\"🇧🇾\",\"description\":\"Belarus\",\"category\":\"Flags\",\"aliases\":[\"belarus\"],\"tags\":[]},{\"emoji\":\"🇧🇪\",\"description\":\"Belgium\",\"category\":\"Flags\",\"aliases\":[\"belgium\"],\"tags\":[]},{\"emoji\":\"🇧🇿\",\"description\":\"Belize\",\"category\":\"Flags\",\"aliases\":[\"belize\"],\"tags\":[]},{\"emoji\":\"🇧🇯\",\"description\":\"Benin\",\"category\":\"Flags\",\"aliases\":[\"benin\"],\"tags\":[]},{\"emoji\":\"🇧🇲\",\"description\":\"Bermuda\",\"category\":\"Flags\",\"aliases\":[\"bermuda\"],\"tags\":[]},{\"emoji\":\"🇧🇹\",\"description\":\"Bhutan\",\"category\":\"Flags\",\"aliases\":[\"bhutan\"],\"tags\":[]},{\"emoji\":\"🇧🇴\",\"description\":\"Bolivia\",\"category\":\"Flags\",\"aliases\":[\"bolivia\"],\"tags\":[]},{\"emoji\":\"🇧🇶\",\"description\":\"Caribbean Netherlands\",\"category\":\"Flags\",\"aliases\":[\"caribbean_netherlands\"],\"tags\":[]},{\"emoji\":\"🇧🇦\",\"description\":\"Bosnia & Herzegovina\",\"category\":\"Flags\",\"aliases\":[\"bosnia_herzegovina\"],\"tags\":[]},{\"emoji\":\"🇧🇼\",\"description\":\"Botswana\",\"category\":\"Flags\",\"aliases\":[\"botswana\"],\"tags\":[]},{\"emoji\":\"🇧🇷\",\"description\":\"Brazil\",\"category\":\"Flags\",\"aliases\":[\"brazil\"],\"tags\":[]},{\"emoji\":\"🇮🇴\",\"description\":\"British Indian Ocean Territory\",\"category\":\"Flags\",\"aliases\":[\"british_indian_ocean_territory\"],\"tags\":[]},{\"emoji\":\"🇻🇬\",\"description\":\"British Virgin Islands\",\"category\":\"Flags\",\"aliases\":[\"british_virgin_islands\"],\"tags\":[]},{\"emoji\":\"🇧🇳\",\"description\":\"Brunei\",\"category\":\"Flags\",\"aliases\":[\"brunei\"],\"tags\":[]},{\"emoji\":\"🇧🇬\",\"description\":\"Bulgaria\",\"category\":\"Flags\",\"aliases\":[\"bulgaria\"],\"tags\":[]},{\"emoji\":\"🇧🇫\",\"description\":\"Burkina Faso\",\"category\":\"Flags\",\"aliases\":[\"burkina_faso\"],\"tags\":[]},{\"emoji\":\"🇧🇮\",\"description\":\"Burundi\",\"category\":\"Flags\",\"aliases\":[\"burundi\"],\"tags\":[]},{\"emoji\":\"🇨🇻\",\"description\":\"Cape Verde\",\"category\":\"Flags\",\"aliases\":[\"cape_verde\"],\"tags\":[]},{\"emoji\":\"🇰🇭\",\"description\":\"Cambodia\",\"category\":\"Flags\",\"aliases\":[\"cambodia\"],\"tags\":[]},{\"emoji\":\"🇨🇲\",\"description\":\"Cameroon\",\"category\":\"Flags\",\"aliases\":[\"cameroon\"],\"tags\":[]},{\"emoji\":\"🇨🇦\",\"description\":\"Canada\",\"category\":\"Flags\",\"aliases\":[\"canada\"],\"tags\":[]},{\"emoji\":\"🇮🇨\",\"description\":\"Canary Islands\",\"category\":\"Flags\",\"aliases\":[\"canary_islands\"],\"tags\":[]},{\"emoji\":\"🇰🇾\",\"description\":\"Cayman Islands\",\"category\":\"Flags\",\"aliases\":[\"cayman_islands\"],\"tags\":[]},{\"emoji\":\"🇨🇫\",\"description\":\"Central African Republic\",\"category\":\"Flags\",\"aliases\":[\"central_african_republic\"],\"tags\":[]},{\"emoji\":\"🇹🇩\",\"description\":\"Chad\",\"category\":\"Flags\",\"aliases\":[\"chad\"],\"tags\":[]},{\"emoji\":\"🇨🇱\",\"description\":\"Chile\",\"category\":\"Flags\",\"aliases\":[\"chile\"],\"tags\":[]},{\"emoji\":\"🇨🇳\",\"description\":\"China\",\"category\":\"Flags\",\"aliases\":[\"cn\"],\"tags\":[\"china\"]},{\"emoji\":\"🇨🇽\",\"description\":\"Christmas Island\",\"category\":\"Flags\",\"aliases\":[\"christmas_island\"],\"tags\":[]},{\"emoji\":\"🇨🇨\",\"description\":\"Cocos (Keeling) Islands\",\"category\":\"Flags\",\"aliases\":[\"cocos_islands\"],\"tags\":[\"keeling\"]},{\"emoji\":\"🇨🇴\",\"description\":\"Colombia\",\"category\":\"Flags\",\"aliases\":[\"colombia\"],\"tags\":[]},{\"emoji\":\"🇰🇲\",\"description\":\"Comoros\",\"category\":\"Flags\",\"aliases\":[\"comoros\"],\"tags\":[]},{\"emoji\":\"🇨🇬\",\"description\":\"Congo - Brazzaville\",\"category\":\"Flags\",\"aliases\":[\"congo_brazzaville\"],\"tags\":[]},{\"emoji\":\"🇨🇩\",\"description\":\"Congo - Kinshasa\",\"category\":\"Flags\",\"aliases\":[\"congo_kinshasa\"],\"tags\":[]},{\"emoji\":\"🇨🇰\",\"description\":\"Cook Islands\",\"category\":\"Flags\",\"aliases\":[\"cook_islands\"],\"tags\":[]},{\"emoji\":\"🇨🇷\",\"description\":\"Costa Rica\",\"category\":\"Flags\",\"aliases\":[\"costa_rica\"],\"tags\":[]},{\"emoji\":\"🇨🇮\",\"description\":\"Côte d’Ivoire\",\"category\":\"Flags\",\"aliases\":[\"cote_divoire\"],\"tags\":[\"ivory\"]},{\"emoji\":\"🇭🇷\",\"description\":\"Croatia\",\"category\":\"Flags\",\"aliases\":[\"croatia\"],\"tags\":[]},{\"emoji\":\"🇨🇺\",\"description\":\"Cuba\",\"category\":\"Flags\",\"aliases\":[\"cuba\"],\"tags\":[]},{\"emoji\":\"🇨🇼\",\"description\":\"Curaçao\",\"category\":\"Flags\",\"aliases\":[\"curacao\"],\"tags\":[]},{\"emoji\":\"🇨🇾\",\"description\":\"Cyprus\",\"category\":\"Flags\",\"aliases\":[\"cyprus\"],\"tags\":[]},{\"emoji\":\"🇨🇿\",\"description\":\"Czech Republic\",\"category\":\"Flags\",\"aliases\":[\"czech_republic\"],\"tags\":[]},{\"emoji\":\"🇩🇰\",\"description\":\"Denmark\",\"category\":\"Flags\",\"aliases\":[\"denmark\"],\"tags\":[]},{\"emoji\":\"🇩🇯\",\"description\":\"Djibouti\",\"category\":\"Flags\",\"aliases\":[\"djibouti\"],\"tags\":[]},{\"emoji\":\"🇩🇲\",\"description\":\"Dominica\",\"category\":\"Flags\",\"aliases\":[\"dominica\"],\"tags\":[]},{\"emoji\":\"🇩🇴\",\"description\":\"Dominican Republic\",\"category\":\"Flags\",\"aliases\":[\"dominican_republic\"],\"tags\":[]},{\"emoji\":\"🇪🇨\",\"description\":\"Ecuador\",\"category\":\"Flags\",\"aliases\":[\"ecuador\"],\"tags\":[]},{\"emoji\":\"🇪🇬\",\"description\":\"Egypt\",\"category\":\"Flags\",\"aliases\":[\"egypt\"],\"tags\":[]},{\"emoji\":\"🇸🇻\",\"description\":\"El Salvador\",\"category\":\"Flags\",\"aliases\":[\"el_salvador\"],\"tags\":[]},{\"emoji\":\"🇬🇶\",\"description\":\"Equatorial Guinea\",\"category\":\"Flags\",\"aliases\":[\"equatorial_guinea\"],\"tags\":[]},{\"emoji\":\"🇪🇷\",\"description\":\"Eritrea\",\"category\":\"Flags\",\"aliases\":[\"eritrea\"],\"tags\":[]},{\"emoji\":\"🇪🇪\",\"description\":\"Estonia\",\"category\":\"Flags\",\"aliases\":[\"estonia\"],\"tags\":[]},{\"emoji\":\"🇪🇹\",\"description\":\"Ethiopia\",\"category\":\"Flags\",\"aliases\":[\"ethiopia\"],\"tags\":[]},{\"emoji\":\"🇪🇺\",\"description\":\"European Union\",\"category\":\"Flags\",\"aliases\":[\"eu\",\"european_union\"],\"tags\":[]},{\"emoji\":\"🇫🇰\",\"description\":\"Falkland Islands\",\"category\":\"Flags\",\"aliases\":[\"falkland_islands\"],\"tags\":[]},{\"emoji\":\"🇫🇴\",\"description\":\"Faroe Islands\",\"category\":\"Flags\",\"aliases\":[\"faroe_islands\"],\"tags\":[]},{\"emoji\":\"🇫🇯\",\"description\":\"Fiji\",\"category\":\"Flags\",\"aliases\":[\"fiji\"],\"tags\":[]},{\"emoji\":\"🇫🇮\",\"description\":\"Finland\",\"category\":\"Flags\",\"aliases\":[\"finland\"],\"tags\":[]},{\"emoji\":\"🇫🇷\",\"description\":\"France\",\"category\":\"Flags\",\"aliases\":[\"fr\"],\"tags\":[\"france\",\"french\"]},{\"emoji\":\"🇬🇫\",\"description\":\"French Guiana\",\"category\":\"Flags\",\"aliases\":[\"french_guiana\"],\"tags\":[]},{\"emoji\":\"🇵🇫\",\"description\":\"French Polynesia\",\"category\":\"Flags\",\"aliases\":[\"french_polynesia\"],\"tags\":[]},{\"emoji\":\"🇹🇫\",\"description\":\"French Southern Territories\",\"category\":\"Flags\",\"aliases\":[\"french_southern_territories\"],\"tags\":[]},{\"emoji\":\"🇬🇦\",\"description\":\"Gabon\",\"category\":\"Flags\",\"aliases\":[\"gabon\"],\"tags\":[]},{\"emoji\":\"🇬🇲\",\"description\":\"Gambia\",\"category\":\"Flags\",\"aliases\":[\"gambia\"],\"tags\":[]},{\"emoji\":\"🇬🇪\",\"description\":\"Georgia\",\"category\":\"Flags\",\"aliases\":[\"georgia\"],\"tags\":[]},{\"emoji\":\"🇩🇪\",\"description\":\"Germany\",\"category\":\"Flags\",\"aliases\":[\"de\"],\"tags\":[\"flag\",\"germany\"]},{\"emoji\":\"🇬🇭\",\"description\":\"Ghana\",\"category\":\"Flags\",\"aliases\":[\"ghana\"],\"tags\":[]},{\"emoji\":\"🇬🇮\",\"description\":\"Gibraltar\",\"category\":\"Flags\",\"aliases\":[\"gibraltar\"],\"tags\":[]},{\"emoji\":\"🇬🇷\",\"description\":\"Greece\",\"category\":\"Flags\",\"aliases\":[\"greece\"],\"tags\":[]},{\"emoji\":\"🇬🇱\",\"description\":\"Greenland\",\"category\":\"Flags\",\"aliases\":[\"greenland\"],\"tags\":[]},{\"emoji\":\"🇬🇩\",\"description\":\"Grenada\",\"category\":\"Flags\",\"aliases\":[\"grenada\"],\"tags\":[]},{\"emoji\":\"🇬🇵\",\"description\":\"Guadeloupe\",\"category\":\"Flags\",\"aliases\":[\"guadeloupe\"],\"tags\":[]},{\"emoji\":\"🇬🇺\",\"description\":\"Guam\",\"category\":\"Flags\",\"aliases\":[\"guam\"],\"tags\":[]},{\"emoji\":\"🇬🇹\",\"description\":\"Guatemala\",\"category\":\"Flags\",\"aliases\":[\"guatemala\"],\"tags\":[]},{\"emoji\":\"🇬🇬\",\"description\":\"Guernsey\",\"category\":\"Flags\",\"aliases\":[\"guernsey\"],\"tags\":[]},{\"emoji\":\"🇬🇳\",\"description\":\"Guinea\",\"category\":\"Flags\",\"aliases\":[\"guinea\"],\"tags\":[]},{\"emoji\":\"🇬🇼\",\"description\":\"Guinea-Bissau\",\"category\":\"Flags\",\"aliases\":[\"guinea_bissau\"],\"tags\":[]},{\"emoji\":\"🇬🇾\",\"description\":\"Guyana\",\"category\":\"Flags\",\"aliases\":[\"guyana\"],\"tags\":[]},{\"emoji\":\"🇭🇹\",\"description\":\"Haiti\",\"category\":\"Flags\",\"aliases\":[\"haiti\"],\"tags\":[]},{\"emoji\":\"🇭🇳\",\"description\":\"Honduras\",\"category\":\"Flags\",\"aliases\":[\"honduras\"],\"tags\":[]},{\"emoji\":\"🇭🇰\",\"description\":\"Hong Kong SAR China\",\"category\":\"Flags\",\"aliases\":[\"hong_kong\"],\"tags\":[]},{\"emoji\":\"🇭🇺\",\"description\":\"Hungary\",\"category\":\"Flags\",\"aliases\":[\"hungary\"],\"tags\":[]},{\"emoji\":\"🇮🇸\",\"description\":\"Iceland\",\"category\":\"Flags\",\"aliases\":[\"iceland\"],\"tags\":[]},{\"emoji\":\"🇮🇳\",\"description\":\"India\",\"category\":\"Flags\",\"aliases\":[\"india\"],\"tags\":[]},{\"emoji\":\"🇮🇩\",\"description\":\"Indonesia\",\"category\":\"Flags\",\"aliases\":[\"indonesia\"],\"tags\":[]},{\"emoji\":\"🇮🇷\",\"description\":\"Iran\",\"category\":\"Flags\",\"aliases\":[\"iran\"],\"tags\":[]},{\"emoji\":\"🇮🇶\",\"description\":\"Iraq\",\"category\":\"Flags\",\"aliases\":[\"iraq\"],\"tags\":[]},{\"emoji\":\"🇮🇪\",\"description\":\"Ireland\",\"category\":\"Flags\",\"aliases\":[\"ireland\"],\"tags\":[]},{\"emoji\":\"🇮🇲\",\"description\":\"Isle of Man\",\"category\":\"Flags\",\"aliases\":[\"isle_of_man\"],\"tags\":[]},{\"emoji\":\"🇮🇱\",\"description\":\"Israel\",\"category\":\"Flags\",\"aliases\":[\"israel\"],\"tags\":[]},{\"emoji\":\"🇮🇹\",\"description\":\"Italy\",\"category\":\"Flags\",\"aliases\":[\"it\"],\"tags\":[\"italy\"]},{\"emoji\":\"🇯🇲\",\"description\":\"Jamaica\",\"category\":\"Flags\",\"aliases\":[\"jamaica\"],\"tags\":[]},{\"emoji\":\"🇯🇵\",\"description\":\"Japan\",\"category\":\"Flags\",\"aliases\":[\"jp\"],\"tags\":[\"japan\"]},{\"emoji\":\"🎌\",\"description\":\"crossed flags\",\"category\":\"Flags\",\"aliases\":[\"crossed_flags\"],\"tags\":[]},{\"emoji\":\"🇯🇪\",\"description\":\"Jersey\",\"category\":\"Flags\",\"aliases\":[\"jersey\"],\"tags\":[]},{\"emoji\":\"🇯🇴\",\"description\":\"Jordan\",\"category\":\"Flags\",\"aliases\":[\"jordan\"],\"tags\":[]},{\"emoji\":\"🇰🇿\",\"description\":\"Kazakhstan\",\"category\":\"Flags\",\"aliases\":[\"kazakhstan\"],\"tags\":[]},{\"emoji\":\"🇰🇪\",\"description\":\"Kenya\",\"category\":\"Flags\",\"aliases\":[\"kenya\"],\"tags\":[]},{\"emoji\":\"🇰🇮\",\"description\":\"Kiribati\",\"category\":\"Flags\",\"aliases\":[\"kiribati\"],\"tags\":[]},{\"emoji\":\"🇽🇰\",\"description\":\"Kosovo\",\"category\":\"Flags\",\"aliases\":[\"kosovo\"],\"tags\":[]},{\"emoji\":\"🇰🇼\",\"description\":\"Kuwait\",\"category\":\"Flags\",\"aliases\":[\"kuwait\"],\"tags\":[]},{\"emoji\":\"🇰🇬\",\"description\":\"Kyrgyzstan\",\"category\":\"Flags\",\"aliases\":[\"kyrgyzstan\"],\"tags\":[]},{\"emoji\":\"🇱🇦\",\"description\":\"Laos\",\"category\":\"Flags\",\"aliases\":[\"laos\"],\"tags\":[]},{\"emoji\":\"🇱🇻\",\"description\":\"Latvia\",\"category\":\"Flags\",\"aliases\":[\"latvia\"],\"tags\":[]},{\"emoji\":\"🇱🇧\",\"description\":\"Lebanon\",\"category\":\"Flags\",\"aliases\":[\"lebanon\"],\"tags\":[]},{\"emoji\":\"🇱🇸\",\"description\":\"Lesotho\",\"category\":\"Flags\",\"aliases\":[\"lesotho\"],\"tags\":[]},{\"emoji\":\"🇱🇷\",\"description\":\"Liberia\",\"category\":\"Flags\",\"aliases\":[\"liberia\"],\"tags\":[]},{\"emoji\":\"🇱🇾\",\"description\":\"Libya\",\"category\":\"Flags\",\"aliases\":[\"libya\"],\"tags\":[]},{\"emoji\":\"🇱🇮\",\"description\":\"Liechtenstein\",\"category\":\"Flags\",\"aliases\":[\"liechtenstein\"],\"tags\":[]},{\"emoji\":\"🇱🇹\",\"description\":\"Lithuania\",\"category\":\"Flags\",\"aliases\":[\"lithuania\"],\"tags\":[]},{\"emoji\":\"🇱🇺\",\"description\":\"Luxembourg\",\"category\":\"Flags\",\"aliases\":[\"luxembourg\"],\"tags\":[]},{\"emoji\":\"🇲🇴\",\"description\":\"Macau SAR China\",\"category\":\"Flags\",\"aliases\":[\"macau\"],\"tags\":[]},{\"emoji\":\"🇲🇰\",\"description\":\"Macedonia\",\"category\":\"Flags\",\"aliases\":[\"macedonia\"],\"tags\":[]},{\"emoji\":\"🇲🇬\",\"description\":\"Madagascar\",\"category\":\"Flags\",\"aliases\":[\"madagascar\"],\"tags\":[]},{\"emoji\":\"🇲🇼\",\"description\":\"Malawi\",\"category\":\"Flags\",\"aliases\":[\"malawi\"],\"tags\":[]},{\"emoji\":\"🇲🇾\",\"description\":\"Malaysia\",\"category\":\"Flags\",\"aliases\":[\"malaysia\"],\"tags\":[]},{\"emoji\":\"🇲🇻\",\"description\":\"Maldives\",\"category\":\"Flags\",\"aliases\":[\"maldives\"],\"tags\":[]},{\"emoji\":\"🇲🇱\",\"description\":\"Mali\",\"category\":\"Flags\",\"aliases\":[\"mali\"],\"tags\":[]},{\"emoji\":\"🇲🇹\",\"description\":\"Malta\",\"category\":\"Flags\",\"aliases\":[\"malta\"],\"tags\":[]},{\"emoji\":\"🇲🇭\",\"description\":\"Marshall Islands\",\"category\":\"Flags\",\"aliases\":[\"marshall_islands\"],\"tags\":[]},{\"emoji\":\"🇲🇶\",\"description\":\"Martinique\",\"category\":\"Flags\",\"aliases\":[\"martinique\"],\"tags\":[]},{\"emoji\":\"🇲🇷\",\"description\":\"Mauritania\",\"category\":\"Flags\",\"aliases\":[\"mauritania\"],\"tags\":[]},{\"emoji\":\"🇲🇺\",\"description\":\"Mauritius\",\"category\":\"Flags\",\"aliases\":[\"mauritius\"],\"tags\":[]},{\"emoji\":\"🇾🇹\",\"description\":\"Mayotte\",\"category\":\"Flags\",\"aliases\":[\"mayotte\"],\"tags\":[]},{\"emoji\":\"🇲🇽\",\"description\":\"Mexico\",\"category\":\"Flags\",\"aliases\":[\"mexico\"],\"tags\":[]},{\"emoji\":\"🇫🇲\",\"description\":\"Micronesia\",\"category\":\"Flags\",\"aliases\":[\"micronesia\"],\"tags\":[]},{\"emoji\":\"🇲🇩\",\"description\":\"Moldova\",\"category\":\"Flags\",\"aliases\":[\"moldova\"],\"tags\":[]},{\"emoji\":\"🇲🇨\",\"description\":\"Monaco\",\"category\":\"Flags\",\"aliases\":[\"monaco\"],\"tags\":[]},{\"emoji\":\"🇲🇳\",\"description\":\"Mongolia\",\"category\":\"Flags\",\"aliases\":[\"mongolia\"],\"tags\":[]},{\"emoji\":\"🇲🇪\",\"description\":\"Montenegro\",\"category\":\"Flags\",\"aliases\":[\"montenegro\"],\"tags\":[]},{\"emoji\":\"🇲🇸\",\"description\":\"Montserrat\",\"category\":\"Flags\",\"aliases\":[\"montserrat\"],\"tags\":[]},{\"emoji\":\"🇲🇦\",\"description\":\"Morocco\",\"category\":\"Flags\",\"aliases\":[\"morocco\"],\"tags\":[]},{\"emoji\":\"🇲🇿\",\"description\":\"Mozambique\",\"category\":\"Flags\",\"aliases\":[\"mozambique\"],\"tags\":[]},{\"emoji\":\"🇲🇲\",\"description\":\"Myanmar (Burma)\",\"category\":\"Flags\",\"aliases\":[\"myanmar\"],\"tags\":[\"burma\"]},{\"emoji\":\"🇳🇦\",\"description\":\"Namibia\",\"category\":\"Flags\",\"aliases\":[\"namibia\"],\"tags\":[]},{\"emoji\":\"🇳🇷\",\"description\":\"Nauru\",\"category\":\"Flags\",\"aliases\":[\"nauru\"],\"tags\":[]},{\"emoji\":\"🇳🇵\",\"description\":\"Nepal\",\"category\":\"Flags\",\"aliases\":[\"nepal\"],\"tags\":[]},{\"emoji\":\"🇳🇱\",\"description\":\"Netherlands\",\"category\":\"Flags\",\"aliases\":[\"netherlands\"],\"tags\":[]},{\"emoji\":\"🇳🇨\",\"description\":\"New Caledonia\",\"category\":\"Flags\",\"aliases\":[\"new_caledonia\"],\"tags\":[]},{\"emoji\":\"🇳🇿\",\"description\":\"New Zealand\",\"category\":\"Flags\",\"aliases\":[\"new_zealand\"],\"tags\":[]},{\"emoji\":\"🇳🇮\",\"description\":\"Nicaragua\",\"category\":\"Flags\",\"aliases\":[\"nicaragua\"],\"tags\":[]},{\"emoji\":\"🇳🇪\",\"description\":\"Niger\",\"category\":\"Flags\",\"aliases\":[\"niger\"],\"tags\":[]},{\"emoji\":\"🇳🇬\",\"description\":\"Nigeria\",\"category\":\"Flags\",\"aliases\":[\"nigeria\"],\"tags\":[]},{\"emoji\":\"🇳🇺\",\"description\":\"Niue\",\"category\":\"Flags\",\"aliases\":[\"niue\"],\"tags\":[]},{\"emoji\":\"🇳🇫\",\"description\":\"Norfolk Island\",\"category\":\"Flags\",\"aliases\":[\"norfolk_island\"],\"tags\":[]},{\"emoji\":\"🇲🇵\",\"description\":\"Northern Mariana Islands\",\"category\":\"Flags\",\"aliases\":[\"northern_mariana_islands\"],\"tags\":[]},{\"emoji\":\"🇰🇵\",\"description\":\"North Korea\",\"category\":\"Flags\",\"aliases\":[\"north_korea\"],\"tags\":[]},{\"emoji\":\"🇳🇴\",\"description\":\"Norway\",\"category\":\"Flags\",\"aliases\":[\"norway\"],\"tags\":[]},{\"emoji\":\"🇴🇲\",\"description\":\"Oman\",\"category\":\"Flags\",\"aliases\":[\"oman\"],\"tags\":[]},{\"emoji\":\"🇵🇰\",\"description\":\"Pakistan\",\"category\":\"Flags\",\"aliases\":[\"pakistan\"],\"tags\":[]},{\"emoji\":\"🇵🇼\",\"description\":\"Palau\",\"category\":\"Flags\",\"aliases\":[\"palau\"],\"tags\":[]},{\"emoji\":\"🇵🇸\",\"description\":\"Palestinian Territories\",\"category\":\"Flags\",\"aliases\":[\"palestinian_territories\"],\"tags\":[]},{\"emoji\":\"🇵🇦\",\"description\":\"Panama\",\"category\":\"Flags\",\"aliases\":[\"panama\"],\"tags\":[]},{\"emoji\":\"🇵🇬\",\"description\":\"Papua New Guinea\",\"category\":\"Flags\",\"aliases\":[\"papua_new_guinea\"],\"tags\":[]},{\"emoji\":\"🇵🇾\",\"description\":\"Paraguay\",\"category\":\"Flags\",\"aliases\":[\"paraguay\"],\"tags\":[]},{\"emoji\":\"🇵🇪\",\"description\":\"Peru\",\"category\":\"Flags\",\"aliases\":[\"peru\"],\"tags\":[]},{\"emoji\":\"🇵🇭\",\"description\":\"Philippines\",\"category\":\"Flags\",\"aliases\":[\"philippines\"],\"tags\":[]},{\"emoji\":\"🇵🇳\",\"description\":\"Pitcairn Islands\",\"category\":\"Flags\",\"aliases\":[\"pitcairn_islands\"],\"tags\":[]},{\"emoji\":\"🇵🇱\",\"description\":\"Poland\",\"category\":\"Flags\",\"aliases\":[\"poland\"],\"tags\":[]},{\"emoji\":\"🇵🇹\",\"description\":\"Portugal\",\"category\":\"Flags\",\"aliases\":[\"portugal\"],\"tags\":[]},{\"emoji\":\"🇵🇷\",\"description\":\"Puerto Rico\",\"category\":\"Flags\",\"aliases\":[\"puerto_rico\"],\"tags\":[]},{\"emoji\":\"🇶🇦\",\"description\":\"Qatar\",\"category\":\"Flags\",\"aliases\":[\"qatar\"],\"tags\":[]},{\"emoji\":\"🇷🇪\",\"description\":\"Réunion\",\"category\":\"Flags\",\"aliases\":[\"reunion\"],\"tags\":[]},{\"emoji\":\"🇷🇴\",\"description\":\"Romania\",\"category\":\"Flags\",\"aliases\":[\"romania\"],\"tags\":[]},{\"emoji\":\"🇷🇺\",\"description\":\"Russia\",\"category\":\"Flags\",\"aliases\":[\"ru\"],\"tags\":[\"russia\"]},{\"emoji\":\"🇷🇼\",\"description\":\"Rwanda\",\"category\":\"Flags\",\"aliases\":[\"rwanda\"],\"tags\":[]},{\"emoji\":\"🇧🇱\",\"description\":\"St. Barthélemy\",\"category\":\"Flags\",\"aliases\":[\"st_barthelemy\"],\"tags\":[]},{\"emoji\":\"🇸🇭\",\"description\":\"St. Helena\",\"category\":\"Flags\",\"aliases\":[\"st_helena\"],\"tags\":[]},{\"emoji\":\"🇰🇳\",\"description\":\"St. Kitts & Nevis\",\"category\":\"Flags\",\"aliases\":[\"st_kitts_nevis\"],\"tags\":[]},{\"emoji\":\"🇱🇨\",\"description\":\"St. Lucia\",\"category\":\"Flags\",\"aliases\":[\"st_lucia\"],\"tags\":[]},{\"emoji\":\"🇵🇲\",\"description\":\"St. Pierre & Miquelon\",\"category\":\"Flags\",\"aliases\":[\"st_pierre_miquelon\"],\"tags\":[]},{\"emoji\":\"🇻🇨\",\"description\":\"St. Vincent & Grenadines\",\"category\":\"Flags\",\"aliases\":[\"st_vincent_grenadines\"],\"tags\":[]},{\"emoji\":\"🇼🇸\",\"description\":\"Samoa\",\"category\":\"Flags\",\"aliases\":[\"samoa\"],\"tags\":[]},{\"emoji\":\"🇸🇲\",\"description\":\"San Marino\",\"category\":\"Flags\",\"aliases\":[\"san_marino\"],\"tags\":[]},{\"emoji\":\"🇸🇹\",\"description\":\"São Tomé & Príncipe\",\"category\":\"Flags\",\"aliases\":[\"sao_tome_principe\"],\"tags\":[]},{\"emoji\":\"🇸🇦\",\"description\":\"Saudi Arabia\",\"category\":\"Flags\",\"aliases\":[\"saudi_arabia\"],\"tags\":[]},{\"emoji\":\"🇸🇳\",\"description\":\"Senegal\",\"category\":\"Flags\",\"aliases\":[\"senegal\"],\"tags\":[]},{\"emoji\":\"🇷🇸\",\"description\":\"Serbia\",\"category\":\"Flags\",\"aliases\":[\"serbia\"],\"tags\":[]},{\"emoji\":\"🇸🇨\",\"description\":\"Seychelles\",\"category\":\"Flags\",\"aliases\":[\"seychelles\"],\"tags\":[]},{\"emoji\":\"🇸🇱\",\"description\":\"Sierra Leone\",\"category\":\"Flags\",\"aliases\":[\"sierra_leone\"],\"tags\":[]},{\"emoji\":\"🇸🇬\",\"description\":\"Singapore\",\"category\":\"Flags\",\"aliases\":[\"singapore\"],\"tags\":[]},{\"emoji\":\"🇸🇽\",\"description\":\"Sint Maarten\",\"category\":\"Flags\",\"aliases\":[\"sint_maarten\"],\"tags\":[]},{\"emoji\":\"🇸🇰\",\"description\":\"Slovakia\",\"category\":\"Flags\",\"aliases\":[\"slovakia\"],\"tags\":[]},{\"emoji\":\"🇸🇮\",\"description\":\"Slovenia\",\"category\":\"Flags\",\"aliases\":[\"slovenia\"],\"tags\":[]},{\"emoji\":\"🇸🇧\",\"description\":\"Solomon Islands\",\"category\":\"Flags\",\"aliases\":[\"solomon_islands\"],\"tags\":[]},{\"emoji\":\"🇸🇴\",\"description\":\"Somalia\",\"category\":\"Flags\",\"aliases\":[\"somalia\"],\"tags\":[]},{\"emoji\":\"🇿🇦\",\"description\":\"South Africa\",\"category\":\"Flags\",\"aliases\":[\"south_africa\"],\"tags\":[]},{\"emoji\":\"🇬🇸\",\"description\":\"South Georgia & South Sandwich Islands\",\"category\":\"Flags\",\"aliases\":[\"south_georgia_south_sandwich_islands\"],\"tags\":[]},{\"emoji\":\"🇰🇷\",\"description\":\"South Korea\",\"category\":\"Flags\",\"aliases\":[\"kr\"],\"tags\":[\"korea\"]},{\"emoji\":\"🇸🇸\",\"description\":\"South Sudan\",\"category\":\"Flags\",\"aliases\":[\"south_sudan\"],\"tags\":[]},{\"emoji\":\"🇪🇸\",\"description\":\"Spain\",\"category\":\"Flags\",\"aliases\":[\"es\"],\"tags\":[\"spain\"]},{\"emoji\":\"🇱🇰\",\"description\":\"Sri Lanka\",\"category\":\"Flags\",\"aliases\":[\"sri_lanka\"],\"tags\":[]},{\"emoji\":\"🇸🇩\",\"description\":\"Sudan\",\"category\":\"Flags\",\"aliases\":[\"sudan\"],\"tags\":[]},{\"emoji\":\"🇸🇷\",\"description\":\"Suriname\",\"category\":\"Flags\",\"aliases\":[\"suriname\"],\"tags\":[]},{\"emoji\":\"🇸🇿\",\"description\":\"Swaziland\",\"category\":\"Flags\",\"aliases\":[\"swaziland\"],\"tags\":[]},{\"emoji\":\"🇸🇪\",\"description\":\"Sweden\",\"category\":\"Flags\",\"aliases\":[\"sweden\"],\"tags\":[]},{\"emoji\":\"🇨🇭\",\"description\":\"Switzerland\",\"category\":\"Flags\",\"aliases\":[\"switzerland\"],\"tags\":[]},{\"emoji\":\"🇸🇾\",\"description\":\"Syria\",\"category\":\"Flags\",\"aliases\":[\"syria\"],\"tags\":[]},{\"emoji\":\"🇹🇼\",\"description\":\"Taiwan\",\"category\":\"Flags\",\"aliases\":[\"taiwan\"],\"tags\":[]},{\"emoji\":\"🇹🇯\",\"description\":\"Tajikistan\",\"category\":\"Flags\",\"aliases\":[\"tajikistan\"],\"tags\":[]},{\"emoji\":\"🇹🇿\",\"description\":\"Tanzania\",\"category\":\"Flags\",\"aliases\":[\"tanzania\"],\"tags\":[]},{\"emoji\":\"🇹🇭\",\"description\":\"Thailand\",\"category\":\"Flags\",\"aliases\":[\"thailand\"],\"tags\":[]},{\"emoji\":\"🇹🇱\",\"description\":\"Timor-Leste\",\"category\":\"Flags\",\"aliases\":[\"timor_leste\"],\"tags\":[]},{\"emoji\":\"🇹🇬\",\"description\":\"Togo\",\"category\":\"Flags\",\"aliases\":[\"togo\"],\"tags\":[]},{\"emoji\":\"🇹🇰\",\"description\":\"Tokelau\",\"category\":\"Flags\",\"aliases\":[\"tokelau\"],\"tags\":[]},{\"emoji\":\"🇹🇴\",\"description\":\"Tonga\",\"category\":\"Flags\",\"aliases\":[\"tonga\"],\"tags\":[]},{\"emoji\":\"🇹🇹\",\"description\":\"Trinidad & Tobago\",\"category\":\"Flags\",\"aliases\":[\"trinidad_tobago\"],\"tags\":[]},{\"emoji\":\"🇹🇳\",\"description\":\"Tunisia\",\"category\":\"Flags\",\"aliases\":[\"tunisia\"],\"tags\":[]},{\"emoji\":\"🇹🇷\",\"description\":\"Turkey\",\"category\":\"Flags\",\"aliases\":[\"tr\"],\"tags\":[\"turkey\"],\"unicode_version\":\"8.0\",\"ios_version\":\"9.1\"},{\"emoji\":\"🇹🇲\",\"description\":\"Turkmenistan\",\"category\":\"Flags\",\"aliases\":[\"turkmenistan\"],\"tags\":[]},{\"emoji\":\"🇹🇨\",\"description\":\"Turks & Caicos Islands\",\"category\":\"Flags\",\"aliases\":[\"turks_caicos_islands\"],\"tags\":[]},{\"emoji\":\"🇹🇻\",\"description\":\"Tuvalu\",\"category\":\"Flags\",\"aliases\":[\"tuvalu\"],\"tags\":[]},{\"emoji\":\"🇺🇬\",\"description\":\"Uganda\",\"category\":\"Flags\",\"aliases\":[\"uganda\"],\"tags\":[]},{\"emoji\":\"🇺🇦\",\"description\":\"Ukraine\",\"category\":\"Flags\",\"aliases\":[\"ukraine\"],\"tags\":[]},{\"emoji\":\"🇦🇪\",\"description\":\"United Arab Emirates\",\"category\":\"Flags\",\"aliases\":[\"united_arab_emirates\"],\"tags\":[]},{\"emoji\":\"🇬🇧\",\"description\":\"United Kingdom\",\"category\":\"Flags\",\"aliases\":[\"gb\",\"uk\"],\"tags\":[\"flag\",\"british\"]},{\"emoji\":\"🇺🇸\",\"description\":\"United States\",\"category\":\"Flags\",\"aliases\":[\"us\"],\"tags\":[\"flag\",\"united\",\"america\"]},{\"emoji\":\"🇻🇮\",\"description\":\"U.S. Virgin Islands\",\"category\":\"Flags\",\"aliases\":[\"us_virgin_islands\"],\"tags\":[]},{\"emoji\":\"🇺🇾\",\"description\":\"Uruguay\",\"category\":\"Flags\",\"aliases\":[\"uruguay\"],\"tags\":[]},{\"emoji\":\"🇺🇿\",\"description\":\"Uzbekistan\",\"category\":\"Flags\",\"aliases\":[\"uzbekistan\"],\"tags\":[]},{\"emoji\":\"🇻🇺\",\"description\":\"Vanuatu\",\"category\":\"Flags\",\"aliases\":[\"vanuatu\"],\"tags\":[]},{\"emoji\":\"🇻🇦\",\"description\":\"Vatican City\",\"category\":\"Flags\",\"aliases\":[\"vatican_city\"],\"tags\":[]},{\"emoji\":\"🇻🇪\",\"description\":\"Venezuela\",\"category\":\"Flags\",\"aliases\":[\"venezuela\"],\"tags\":[]},{\"emoji\":\"🇻🇳\",\"description\":\"Vietnam\",\"category\":\"Flags\",\"aliases\":[\"vietnam\"],\"tags\":[]},{\"emoji\":\"🇼🇫\",\"description\":\"Wallis & Futuna\",\"category\":\"Flags\",\"aliases\":[\"wallis_futuna\"],\"tags\":[]},{\"emoji\":\"🇪🇭\",\"description\":\"Western Sahara\",\"category\":\"Flags\",\"aliases\":[\"western_sahara\"],\"tags\":[]},{\"emoji\":\"🇾🇪\",\"description\":\"Yemen\",\"category\":\"Flags\",\"aliases\":[\"yemen\"],\"tags\":[]},{\"emoji\":\"🇿🇲\",\"description\":\"Zambia\",\"category\":\"Flags\",\"aliases\":[\"zambia\"],\"tags\":[]},{\"emoji\":\"🇿🇼\",\"description\":\"Zimbabwe\",\"category\":\"Flags\",\"aliases\":[\"zimbabwe\"],\"tags\":[]}]");

/***/ }),

/***/ "50aa":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "5325":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("88dd");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "540f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("648a");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "565c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "568a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("dad2") && !__webpack_require__("b6f1")(function () {
  return Object.defineProperty(__webpack_require__("e3e0")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "59c9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "5b34":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var isObject = __webpack_require__("88dd");
var newPromiseCapability = __webpack_require__("540f");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "5b55":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("8b37")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5c53":
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "5fad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "5fe5":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "6016":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "6246":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a8f0");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "629c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3a59");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var fails = __webpack_require__("b6f1");
var defined = __webpack_require__("f01a");
var wks = __webpack_require__("8b37");
var regexpExec = __webpack_require__("1f98");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "644a":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("8b37")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("743d")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "6462":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("94ac");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "648a":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "6594":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("ddf7").f;
var has = __webpack_require__("03b3");
var TAG = __webpack_require__("8b37")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "67f1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("04c3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("565c").default
module.exports.__inject__ = function (shadowRoot) {
  add("da017f06", content, shadowRoot)
};

/***/ }),

/***/ "690e":
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

/***/ "6e26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ca2b");
var global = __webpack_require__("3754");
var ctx = __webpack_require__("01f5");
var classof = __webpack_require__("4819");
var $export = __webpack_require__("b2f5");
var isObject = __webpack_require__("88dd");
var aFunction = __webpack_require__("648a");
var anInstance = __webpack_require__("d74e");
var forOf = __webpack_require__("00d5");
var speciesConstructor = __webpack_require__("0d5f");
var task = __webpack_require__("d1f6").set;
var microtask = __webpack_require__("9d86")();
var newPromiseCapabilityModule = __webpack_require__("540f");
var perform = __webpack_require__("e588");
var userAgent = __webpack_require__("82cd");
var promiseResolve = __webpack_require__("5b34");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("8b37")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("f216")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("6594")($Promise, PROMISE);
__webpack_require__("c650")(PROMISE);
Wrapper = __webpack_require__("a4cc")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5b55")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "70e7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8dcd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("565c").default
module.exports.__inject__ = function (shadowRoot) {
  add("6527aeed", content, shadowRoot)
};

/***/ }),

/***/ "7266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a7b8");
var descriptor = __webpack_require__("7dea");
var setToStringTag = __webpack_require__("6594");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("743d")(IteratorPrototype, __webpack_require__("8b37")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "743d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var createDesc = __webpack_require__("7dea");
module.exports = __webpack_require__("dad2") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "7656":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ca2b");
var $export = __webpack_require__("b2f5");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var $iterCreate = __webpack_require__("7266");
var setToStringTag = __webpack_require__("6594");
var getPrototypeOf = __webpack_require__("4713");
var ITERATOR = __webpack_require__("8b37")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "7847":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "7a07":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7c56":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var inheritIfRequired = __webpack_require__("44de");
var dP = __webpack_require__("ddf7").f;
var gOPN = __webpack_require__("a891").f;
var isRegExp = __webpack_require__("22e9");
var $flags = __webpack_require__("f425");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("dad2") && (!CORRECT_NEW || __webpack_require__("b6f1")(function () {
  re2[__webpack_require__("8b37")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("e5ef")(global, 'RegExp', $RegExp);
}

__webpack_require__("c650")('RegExp');


/***/ }),

/***/ "7dea":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "8021":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "82cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "8812":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "88dd":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8b37":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("adbd")('wks');
var uid = __webpack_require__("9d01");
var Symbol = __webpack_require__("3754").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "8bbc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("a013");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "8dcd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, "#nprogress{pointer-events:none}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;-webkit-box-shadow:0 0 10px #29d,0 0 5px #29d;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translateY(-4px);transform:rotate(3deg) translateY(-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);

// exports


/***/ }),

/***/ "8ef3":
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "9036":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function(root) {
'use strict';

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  nptable: noop,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noop,
  lheading: /^([^\n]+)\n {0,3}(=|-){2,} *(?:\n+|$)/,
  paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block.paragraph)
  .replace('hr', block.hr)
  .replace('heading', block.heading)
  .replace('lheading', block.lheading)
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = edit(block.paragraph)
  .replace('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  .getRegex();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});

/**
 * Pedantic grammar
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = Object.create(null);
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.pedantic) {
    this.rules = block.pedantic;
  } else if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      listStart,
      listItems,
      t,
      space,
      i,
      tag,
      l,
      isordered,
      istask,
      ischecked;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      var lastToken = this.tokens[this.tokens.length - 1];
      src = src.substring(cap[0].length);
      // An indented code block cannot interrupt a paragraph.
      if (lastToken && lastToken.type === 'paragraph') {
        lastToken.text += '\n' + cap[0].trimRight();
      } else {
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          codeBlockStyle: 'indented',
          text: !this.options.pedantic
            ? rtrim(cap, '\n')
            : cap
        });
      }
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (cap = this.rules.nptable.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(item.cells[i], item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;

      listStart = {
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : '',
        loose: false
      };

      this.tokens.push(listStart);

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      listItems = [];
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) */, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull.length > 1 ? b.length === 1
            : (b.length > 1 || (this.options.smartLists && b !== bull))) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        if (loose) {
          listStart.loose = true;
        }

        // Check for task list items
        istask = /^\[[ xX]\] /.test(item);
        ischecked = undefined;
        if (istask) {
          ischecked = item[1] !== ' ';
          item = item.replace(/^\[[ xX]\] +/, '');
        }

        t = {
          type: 'list_item_start',
          task: istask,
          checked: ischecked,
          loose: loose
        };

        listItems.push(t);
        this.tokens.push(t);

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      if (listStart.loose) {
        l = listItems.length;
        i = 0;
        for (; i < l; i++) {
          listItems[i].loose = true;
        }
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }
      continue;
    }

    // table (gfm)
    if (cap = this.rules.table.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(
            item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
            item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noop,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', block._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/;
inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.pedantic) {
    this.rules = inline.pedantic;
  } else if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = '',
      link,
      text,
      href,
      title,
      cap,
      prevCapZero;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[1]);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = true;
      } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = false;
      }

      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      var lastParenIndex = findClosingBracket(cap[2], '()');
      if (lastParenIndex > -1) {
        var linkLen = cap[0].length - (cap[2].length - lastParenIndex) - (cap[3] || '').length;
        cap[2] = cap[2].substring(0, lastParenIndex);
        cap[0] = cap[0].substring(0, linkLen).trim();
        cap[3] = '';
      }
      src = src.substring(cap[0].length);
      this.inLink = true;
      href = cap[2];
      if (this.options.pedantic) {
        link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        } else {
          title = '';
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }
      href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
      out += this.outputLink(cap, {
        href: InlineLexer.escapes(href),
        title: InlineLexer.escapes(title)
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      src = src.substring(cap[0].length);
      out += this.renderer.link(href, null, text);
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      if (this.inRawBlock) {
        out += this.renderer.text(cap[0]);
      } else {
        out += this.renderer.text(escape(this.smartypants(cap[0])));
      }
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.escapes = function(text) {
  return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = link.href,
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || marked.defaults;
}

Renderer.prototype.code = function(code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw, slugger) {
  if (this.options.headerIds) {
    return '<h'
      + level
      + ' id="'
      + this.options.headerPrefix
      + slugger.slug(raw)
      + '">'
      + text
      + '</h'
      + level
      + '>\n';
  }
  // ignore IDs
  return '<h' + level + '>' + text + '</h' + level + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.checkbox = function(checked) {
  return '<input '
    + (checked ? 'checked="" ' : '')
    + 'disabled="" type="checkbox"'
    + (this.options.xhtml ? ' /' : '')
    + '> ';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  if (body) body = '<tbody>' + body + '</tbody>';

  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + body
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' align="' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }
  var out = '<a href="' + escape(href) + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }

  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function(text) {
  return text;
};

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
};

TextRenderer.prototype.br = function() {
  return '';
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
  this.slugger = new Slugger();
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, { renderer: new TextRenderer() })
  );
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  this.token = this.tokens.pop();
  return this.token;
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)),
        this.slugger);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';
      var loose = this.token.loose;
      var checked = this.token.checked;
      var task = this.token.task;

      if (this.token.task) {
        body += this.renderer.checkbox(checked);
      }

      while (this.next().type !== 'list_item_end') {
        body += !loose && this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }
      return this.renderer.listitem(body, task, checked);
    }
    case 'html': {
      // TODO parse inline content if parameter markdown=1
      return this.renderer.html(this.token.text);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
    default: {
      var errMsg = 'Token with "' + this.token.type + '" type was not found.';
      if (this.options.silent) {
        console.log(errMsg);
      } else {
        throw new Error(errMsg);
      }
    }
  }
};

/**
 * Slugger generates header id
 */

function Slugger() {
  this.seen = {};
}

/**
 * Convert string to unique id
 */

Slugger.prototype.slug = function(value) {
  var slug = value
    .toLowerCase()
    .trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-');

  if (this.seen.hasOwnProperty(slug)) {
    var originalSlug = slug;
    do {
      this.seen[originalSlug]++;
      slug = originalSlug + '-' + this.seen[originalSlug];
    } while (this.seen.hasOwnProperty(slug));
  }
  this.seen[slug] = 0;

  return slug;
};

/**
 * Helpers
 */

function escape(html, encode) {
  if (encode) {
    if (escape.escapeTest.test(html)) {
      return html.replace(escape.escapeReplace, function(ch) { return escape.replacements[ch]; });
    }
  } else {
    if (escape.escapeTestNoEncode.test(html)) {
      return html.replace(escape.escapeReplaceNoEncode, function(ch) { return escape.replacements[ch]; });
    }
  }

  return html;
}

escape.escapeTest = /[&<>"']/;
escape.escapeReplace = /[&<>"']/g;
escape.replacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function(match, offset, str) {
        var escaped = false,
            curr = offset;
        while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
        if (escaped) {
          // odd number of slashes means | is escaped
          // so we leave it alone
          return '|';
        } else {
          // add space before unescaped |
          return ' |';
        }
      }),
      cells = row.split(/ \|/),
      i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  if (str.length === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  var suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < str.length) {
    var currChar = str.charAt(str.length - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, str.length - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.getDefaults = function() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: new Renderer(),
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tables: true,
    xhtml: false
  };
};

marked.defaults = marked.getDefaults();

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.Slugger = Slugger;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else {}
})(this || (typeof window !== 'undefined' ? window : global));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("a1bb")))

/***/ }),

/***/ "94ac":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "967c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "96e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");
var transformData = __webpack_require__("02c8");
var isCancel = __webpack_require__("046d");
var defaults = __webpack_require__("a44d");
var isAbsoluteURL = __webpack_require__("8021");
var combineURLs = __webpack_require__("40b2");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "9c46":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "9d01":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "9d86":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var macrotask = __webpack_require__("d1f6").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("94ac")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "9f58":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("3a68");
var toLength = __webpack_require__("b146");
var toAbsoluteIndex = __webpack_require__("5fe5");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "9f97":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0669");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("565c").default
module.exports.__inject__ = function (shadowRoot) {
  add("fb5cdffe", content, shadowRoot)
};

/***/ }),

/***/ "a013":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "a1bb":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "a1c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");
var bind = __webpack_require__("28e0");
var Axios = __webpack_require__("173d");
var defaults = __webpack_require__("a44d");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a07");
axios.CancelToken = __webpack_require__("d053");
axios.isCancel = __webpack_require__("046d");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("6016");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "a44d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("0260");
var normalizeHeaderName = __webpack_require__("967c");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("eda7");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("eda7");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4c39")))

/***/ }),

/***/ "a4cc":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a7b8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("a013");
var dPs = __webpack_require__("bf29");
var enumBugKeys = __webpack_require__("b4e0");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("e3e0")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("265a").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a85a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9f97");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a891":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("fb6d");
var hiddenKeys = __webpack_require__("b4e0").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "a8f0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4ad6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("565c").default
module.exports.__inject__ = function (shadowRoot) {
  add("6551fb7e", content, shadowRoot)
};

/***/ }),

/***/ "acb9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d217");
var createDesc = __webpack_require__("7dea");
var toIObject = __webpack_require__("3a68");
var toPrimitive = __webpack_require__("5325");
var has = __webpack_require__("03b3");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("dad2") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "adbd":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a4cc");
var global = __webpack_require__("3754");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("ca2b") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "b0f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("2f03")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "b146":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("c481");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b2f5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var core = __webpack_require__("a4cc");
var hide = __webpack_require__("743d");
var redefine = __webpack_require__("e5ef");
var ctx = __webpack_require__("01f5");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "b4e0":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "b6f1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "bf29":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var anObject = __webpack_require__("a013");
var getKeys = __webpack_require__("cfc7");

module.exports = __webpack_require__("dad2") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "c481":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c650":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var dP = __webpack_require__("ddf7");
var DESCRIPTORS = __webpack_require__("dad2");
var SPECIES = __webpack_require__("8b37")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "c847":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("14fc");
var ITERATOR = __webpack_require__("8b37")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "ca2b":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "cc26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("cc5a");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "cc5a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("190f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "cfc7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("fb6d");
var enumBugKeys = __webpack_require__("b4e0");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "d053":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a07");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "d1f6":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("01f5");
var invoke = __webpack_require__("8812");
var html = __webpack_require__("265a");
var cel = __webpack_require__("e3e0");
var global = __webpack_require__("3754");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("94ac")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "d217":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d74e":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "dac5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("644a");
var step = __webpack_require__("e650");
var Iterators = __webpack_require__("14fc");
var toIObject = __webpack_require__("3a68");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("7656")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "dad2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("b6f1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "daf2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("adbd")('native-function-to-string', Function.toString);


/***/ }),

/***/ "db4b":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "ddf7":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var toPrimitive = __webpack_require__("5325");
var dP = Object.defineProperty;

exports.f = __webpack_require__("dad2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "df67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("b2f5");
var core = __webpack_require__("a4cc");
var global = __webpack_require__("3754");
var speciesConstructor = __webpack_require__("0d5f");
var promiseResolve = __webpack_require__("5b34");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "dfab":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("adbd")('keys');
var uid = __webpack_require__("9d01");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "e3e0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var document = __webpack_require__("3754").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "e588":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "e5ef":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var has = __webpack_require__("03b3");
var SRC = __webpack_require__("9d01")('src');
var $toString = __webpack_require__("daf2");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("a4cc").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "e650":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "eda7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");
var settle = __webpack_require__("cc26");
var buildURL = __webpack_require__("9c46");
var parseHeaders = __webpack_require__("5fad");
var isURLSameOrigin = __webpack_require__("7847");
var createError = __webpack_require__("cc5a");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("59c9");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "f01a":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "f216":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("e5ef");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "f425":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("a013");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "f753":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a1c5");

/***/ }),

/***/ "f763":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("dac5");
var getKeys = __webpack_require__("cfc7");
var redefine = __webpack_require__("e5ef");
var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var wks = __webpack_require__("8b37");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "fae0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_af50c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("67f1");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_af50c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_af50c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_af50c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_af50c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_af50c9c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb6d":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("03b3");
var toIObject = __webpack_require__("3a68");
var arrayIndexOf = __webpack_require__("9f58")(false);
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ })

/******/ });
//# sourceMappingURL=halo-comment.js.map