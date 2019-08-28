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
exports.push([module.i, ".halo-comment *{font-family:-apple-system,BlinkMacSystemFont,System Latin,System Emoji,System SC,sans-serif;outline:none;font-size:13px;line-height:1.5;padding:0;margin:0}.halo-comment ::-webkit-scrollbar{width:6px;height:6px;background-color:#eee}.halo-comment ::-webkit-scrollbar-thumb{background-color:#1890ff}.halo-comment ::-webkit-scrollbar-track{background-color:#eee}.halo-comment :after,.halo-comment :before{-webkit-box-sizing:border-box;box-sizing:border-box}.halo-comment .alert{border-radius:4px;padding:8px 16px;background-color:#f44336;color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.halo-comment .alert.success{background-color:#4caf50}.halo-comment .alert.info{background-color:#2196f3}.halo-comment .alert.warning{background-color:#ff9800}.halo-comment .closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:16px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.halo-comment .closebtn:hover{color:#000}.halo-comment .comment-placeholder{cursor:text;margin-bottom:10px;border:2px dashed #ededed;border-radius:8px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.halo-comment .comment-placeholder:hover{border:2px dashed #3b83ee}.halo-comment .comment-placeholder .comment-item{padding-top:15px;position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.halo-comment .comment-placeholder .comment-item .comment-item-author-avatar{float:left;width:56px;height:56px;border-radius:56px;line-height:56px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;margin-left:12px;margin-right:12px;border:1px solid #f5f5f5}.halo-comment .comment-placeholder .comment-item .comment-item-main{overflow:hidden;padding-bottom:.5rem;color:#555}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-header .header-author{position:relative;margin-right:10px;cursor:pointer;display:inline-block;font-size:16px;font-weight:700;color:#2c2e31;text-decoration:none}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-content{word-wrap:break-word;word-break:break-all;text-align:justify;position:relative;margin-bottom:6px;padding-top:6px}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-content p{line-height:2;font-size:16px;color:#667c99}.halo-comment .comment-items{padding:0 12px}.halo-comment .comment-items .comment-item{padding-top:15px;position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;border-bottom:1px solid #e8ecf3}.halo-comment .comment-items .comment-item .comment-item-author-avatar{float:left;width:56px;height:56px;border-radius:56px;line-height:56px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;margin-right:12px;border:1px solid #f5f5f5}.halo-comment .comment-items .comment-item .comment-item-main{overflow:hidden;padding-bottom:.5rem;color:#555}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author{position:relative;margin-right:10px;cursor:pointer;display:inline-block}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author a{font-size:15px;font-weight:700;color:#111;text-decoration:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author:before{content:\"\";position:absolute;bottom:0;left:0;right:0;height:2px;background-color:#565656;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author:hover:before{-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-time{position:relative;font-size:13px;color:#667c99;display:inline-block}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-id{float:right;font-size:13px;color:#667c99}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content{word-wrap:break-word;word-break:break-all;text-align:justify;position:relative;margin-bottom:6px;padding-top:6px}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content a{text-decoration:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content .content-at-id{font-size:13px;color:#1890ff;font-weight:500}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content p{overflow:auto;line-height:2;font-size:14px;color:#111}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols{float:right;position:relative}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul{list-style-type:none;padding:0;margin:0}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li{margin-right:0;margin-left:-5px;display:inline-block;vertical-align:top}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-more,.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-reply{display:inline-block;margin-bottom:0;text-align:center;vertical-align:middle;cursor:pointer;white-space:nowrap;padding:6px 12px;color:#667c99;border:none;background:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-more:hover,.halo-comment .comment-items .comment-item .comment-item-main .comment-item-contols ul li .item-control-reply:hover{color:#0084fe}.halo-comment .comment-items .comment-item .comment-item-children{margin-left:4rem;padding-left:1rem;border-left:.1rem solid cccccc;padding-left:0;padding-right:0}.halo-comment .comment-modal{position:fixed;bottom:0;left:0;right:0;width:100%;height:100%;z-index:2147483647;background-color:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.halo-comment .comment-modal .comment-modal-container{width:768px;position:relative}.halo-comment .comment-modal .comment-modal-container .comment-poster-editor-emoji{-webkit-box-shadow:0 2px 6px rgba(0,0,0,.35);box-shadow:0 2px 6px rgba(0,0,0,.35);position:absolute;bottom:58px;left:19%;z-index:1}.halo-comment .comment-modal .comment-modal-container #EmojiPicker{width:100%}.halo-comment .comment-modal .comment-modal-container .comment-poster-container{border-radius:4px 4px 0 0;background:hsla(0,0%,100%,.95);-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;pointer-events:auto;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.35);box-shadow:0 2px 6px rgba(0,0,0,.35);height:248px;bottom:-248px;display:none}.halo-comment .comment-modal .comment-modal-container .comment-poster-container.active{height:265px;bottom:0;display:block}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls{position:absolute;right:10px;top:10px;z-index:1;list-style:none;padding:0;margin:0}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls li{display:inline-block}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls .editor-btn-close{float:right;font-size:28px;font-weight:700;font-family:inherit;color:#667c99;padding:.2rem .8rem;outline:none;border:none;background-color:transparent;border-radius:4px;cursor:pointer}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls .editor-btn-close:hover{background-color:#d7dfea;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main{padding:20px 20px 0}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-avatar{float:left;width:64px;height:64px;border-radius:64px;line-height:64px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;border:1px solid #f5f5f5}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content{margin-left:85px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header{list-style:none;padding:1px 0;margin:0 0 10px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li{position:relative;display:inline-block;margin-right:-4px;width:33.3%}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input{width:100%;color:#667c99;font-size:14px;font-family:inherit;background-color:transparent;border:1px solid transparent;border-bottom-color:rgba(61,239,255,.2)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-webkit-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-moz-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input:-ms-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-ms-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input:focus~span{-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li span{position:absolute;bottom:0;left:0;right:0;height:1px;background-color:#555;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-reply{max-height:18px;border-left:2px solid #667c99;padding:0 5px;color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-reply small{color:#0084fe}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-wrapper{position:relative}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-wrapper textarea{display:block;width:100%;background:none;border-radius:0;padding:0 0 10px;border:0;resize:none;color:#111;font-size:14px;line-height:1.7}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls{margin:0 -20px 0 -105px;padding:10px 20px;border-top:1px solid #e8ecf3;list-style-type:none;overflow-x:auto;white-space:nowrap}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls li{display:inline-block;margin-right:10px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply{font-size:inherit;font-family:inherit;color:#fff;padding:.5em 1em;outline:none;border:none;background-color:#1890ff;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply:hover{background-color:#0084fe;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply:disabled{background-color:#d8d8d8;color:#fff;cursor:not-allowed}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-preview{font-size:inherit;font-family:inherit;color:#667c99;padding:.5em 1em;outline:none;border:none;background-color:#e8ecf3;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-preview:hover{background-color:#d7dfea;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-emoji{font-size:inherit;font-family:inherit;color:#667c99;padding:.5em 1em;outline:none;border:none;background-color:#e8ecf3;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-emoji:hover{background-color:#d7dfea;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}@media screen and (max-width:768px){.halo-comment .comment-modal .comment-modal-container{width:100%}}.halo-comment .comment-loader-container{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0}.halo-comment .comment-loader-container .comment-loader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:2em}.halo-comment .comment-loader-container .comment-loader span{width:.3em;height:1em;background-color:#3b83ee}.halo-comment .comment-loader-container .comment-loader span:first-of-type{-webkit-animation:grow 1s ease-in-out -.45s infinite;animation:grow 1s ease-in-out -.45s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(2){-webkit-animation:grow 1s ease-in-out -.3s infinite;animation:grow 1s ease-in-out -.3s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(3){-webkit-animation:grow 1s ease-in-out -.15s infinite;animation:grow 1s ease-in-out -.15s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(4){-webkit-animation:grow 1s ease-in-out infinite;animation:grow 1s ease-in-out infinite}@-webkit-keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}@keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}.halo-comment .loading-fade-enter-active,.halo-comment .loading-fade-leave-active{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.halo-comment .loading-fade-enter,.halo-comment .loading-fade-leave-to{opacity:0}.halo-comment .comment-pagination{margin-top:20px;text-align:center}.halo-comment .comment-pagination .pagination{display:inline-block;padding:0;margin:0}.halo-comment .comment-pagination .pagination li{display:inline}.halo-comment .comment-pagination .pagination button{z-index:1;position:relative;font-size:inherit;font-family:inherit;color:#000;padding:.5em 1em;outline:none;border:0;background-color:#fff}.halo-comment .comment-pagination .pagination button:before{content:\"\";z-index:-1;position:absolute;top:0;bottom:0;left:0;right:0;background-color:#3b83ee;-webkit-transform-origin:center top;transform-origin:center top;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transition:-webkit-transform .25s ease-in-out;transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.halo-comment .comment-pagination .pagination button:hover{color:#fff;cursor:pointer}.halo-comment .comment-pagination .pagination button:hover:before{-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:scaleY(1);transform:scaleY(1)}.halo-comment .comment-pagination .pagination .prev-button:before{-webkit-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(0);transform:scaleX(0)}.halo-comment .comment-pagination .pagination .prev-button:hover:before{-webkit-transform-origin:center right;transform-origin:center right;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-pagination .pagination .next-button:before{-webkit-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(0);transform:scaleX(0)}.halo-comment .comment-pagination .pagination .next-button:hover:before{-webkit-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-pagination .pagination .active{background-color:#3b83ee;color:#fff}.halo-comment #EmojiPicker{font-family:Noto,Twemoji,NotomojiColor,Notomoji,Symbola,sans-serif;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;border-radius:4px;border:1px solid #e4e4e4;overflow:hidden;width:325px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.halo-comment #EmojiPicker,.halo-comment #EmojiPicker #Categories{-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f0f0f0}.halo-comment #EmojiPicker #Categories{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #e4e4e4;color:#fff}.halo-comment #EmojiPicker .category{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-top:5px;padding-bottom:5px;text-align:center;cursor:pointer}.halo-comment #EmojiPicker .category.active{border-bottom:3px solid #009688;-webkit-filter:saturate(3);filter:saturate(3);padding-bottom:2px}.halo-comment #EmojiPicker .category>img{width:22px;height:22px}.halo-comment #EmojiPicker .category:hover{-webkit-filter:saturate(3);filter:saturate(3)}.halo-comment #EmojiPicker #InputSearch{display:block;width:100%;max-width:100%}.halo-comment #EmojiPicker .container-search{display:block;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:5px 0;padding:0 5%}.halo-comment #EmojiPicker .container-search input{width:100%;font-size:14px;padding:8px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;background:#f6f6f6;color:#4a4a4a;border:1px solid #e2e2e2}.halo-comment #EmojiPicker #Emojis{display:block;width:100%;max-width:100%}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar{border-radius:4px;width:4px;background:hsla(0,0%,48.6%,.36)}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar-track{border-radius:4px}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar-thumb{border-radius:4px;background:rgba(0,0,0,.22)}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.38)}.halo-comment #EmojiPicker .container-emoji{overflow-x:hidden;overflow-y:scroll;height:350px}.halo-comment #EmojiPicker .category-title{text-transform:uppercase;font-size:.8em;padding:5px 0 0 16px;color:#848484}.halo-comment #EmojiPicker .category-title:not(:first-of-type){padding:10px 0 0 16px}.halo-comment #EmojiPicker .grid-emojis{display:grid;margin:5px 0;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.halo-comment #EmojiPicker .emoji{display:inline-block;text-align:center;font-size:25px;padding:5px;max-height:30px;cursor:pointer}.halo-comment #EmojiPicker #VSvg{display:inline-block;vertical-align:middle}.modal-fade-enter,.modal-fade-leave-active{opacity:0}.modal-fade-enter-active,.modal-fade-leave-active{-webkit-transition:opacity .5s ease;transition:opacity .5s ease}", ""]);

// exports


/***/ }),

/***/ "0993":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__("57c2");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__("c2b2");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


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

/***/ "11f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("343e");


/***/ }),

/***/ "14fc":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "1685":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("5f3b");

var $Object = GetIntrinsic('%Object%');
var $TypeError = GetIntrinsic('%TypeError%');
var $String = GetIntrinsic('%String%');

var assertRecord = __webpack_require__("743c");
var $isNaN = __webpack_require__("6d85");
var $isFinite = __webpack_require__("75fa");

var sign = __webpack_require__("af00");
var mod = __webpack_require__("ad12");

var IsCallable = __webpack_require__("2b42");
var toPrimitive = __webpack_require__("69c8");

var has = __webpack_require__("fb81");

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return !!value;
	},
	ToNumber: function ToNumber(value) {
		return +value; // eslint-disable-line no-implicit-coercion
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return $String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return $Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new $TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// https://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
		if (this.Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.1
	IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
			return false;
		}

		return true;
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.2
	IsDataDescriptor: function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
			return false;
		}

		return true;
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.3
	IsGenericDescriptor: function IsGenericDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
			return true;
		}

		return false;
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.4
	FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}

		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (this.IsDataDescriptor(Desc)) {
			return {
				value: Desc['[[Value]]'],
				writable: !!Desc['[[Writable]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else if (this.IsAccessorDescriptor(Desc)) {
			return {
				get: Desc['[[Get]]'],
				set: Desc['[[Set]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else {
			throw new $TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
		}
	},

	// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5
	ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
		if (this.Type(Obj) !== 'Object') {
			throw new $TypeError('ToPropertyDescriptor requires an object');
		}

		var desc = {};
		if (has(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
		}
		if (has(Obj, 'configurable')) {
			desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
		}
		if (has(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (has(Obj, 'writable')) {
			desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
		}
		if (has(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
				throw new TypeError('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (has(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
				throw new $TypeError('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}

		if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
			throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	}
};

module.exports = ES5;


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

/***/ "1ce9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var $export = __webpack_require__("b2f5");
var redefine = __webpack_require__("e5ef");
var redefineAll = __webpack_require__("f216");
var meta = __webpack_require__("3cc6");
var forOf = __webpack_require__("00d5");
var anInstance = __webpack_require__("d74e");
var isObject = __webpack_require__("88dd");
var fails = __webpack_require__("b6f1");
var $iterDetect = __webpack_require__("5b55");
var setToStringTag = __webpack_require__("6594");
var inheritIfRequired = __webpack_require__("44de");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
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

/***/ "216d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__("fb66");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("a1bb")))

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

/***/ "22f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("dad2");
var getKeys = __webpack_require__("cfc7");
var gOPS = __webpack_require__("f7c1");
var pIE = __webpack_require__("d217");
var toObject = __webpack_require__("db4b");
var IObject = __webpack_require__("6462");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("b6f1")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "2338":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("b2f5");
var ownKeys = __webpack_require__("2e9a");
var toIObject = __webpack_require__("3a68");
var gOPD = __webpack_require__("acb9");
var createProperty = __webpack_require__("f59b");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
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

/***/ "2b42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (typeof value === 'function' && !value.prototype) { return true; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
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

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
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

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/Comment.vue?vue&type=template&id=f5dab5ae&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"halo-comment"},[_c('section',{staticClass:"header",on:{"click":_vm.handleCommentHeaderClick}},[_c('comment-author',{attrs:{"comment":_vm.editingComment,"options":_vm.options}})],1),_c('section',{staticClass:"\n      comment-alert"},[_vm._l((_vm.infoes),function(info,index){return _c('div',{key:index,staticClass:"alert info"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(info))])])}),_vm._l((_vm.successes),function(success,index){return _c('div',{key:index,staticClass:"alert success"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(success))])])}),_vm._l((_vm.warnings),function(warning,index){return _c('div',{key:index,staticClass:"alert warning"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(warning))])])})],2),_c('section',{staticClass:"loading"},[_c('comment-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.commentLoading),expression:"commentLoading"}]})],1),_c('section',{staticClass:"body"},[_c('comment-body',{directives:[{name:"show",rawName:"v-show",value:(!_vm.commentLoading),expression:"!commentLoading"}],attrs:{"comments":_vm.comments,"targetId":_vm.id,"target":_vm.target,"options":_vm.options},on:{"reply":_vm.handleReply}})],1),_c('section',{staticClass:"pagination"},[_c('pagination',{attrs:{"page":_vm.pagination.page,"size":_vm.pagination.size,"total":_vm.pagination.total},on:{"change":_vm.handlePaginationChange}})],1),_c('section',{staticClass:"footer-editor"},[_c('comment-editor',{directives:[{name:"show",rawName:"v-show",value:(_vm.editorVisiable),expression:"editorVisiable"}],attrs:{"targetId":_vm.id,"target":_vm.target,"replyingComment":_vm.replyingComment,"options":_vm.options},on:{"close":_vm.handleEditorClose,"exit":_vm.handleEditorExit,"input":_vm.handleEditorInput,"created":_vm.handleCommentCreated,"failed":_vm.handleFailedToCreateComment}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=template&id=f5dab5ae&shadow

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("f763");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("df67");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentAuthor.vue?vue&type=template&id=544f0794&
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentBody.vue?vue&type=template&id=af50c9c8&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentNode.vue?vue&type=template&id=5f10ce6c&
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



__webpack_require__("eb94").shim();


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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=template&id=7753300c&
var CommentEditorvue_type_template_id_7753300c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal-fade"}},[_c('div',{staticClass:"comment-modal",attrs:{"autofocus":""},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.close($event)},"~keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)}}},[_c('div',{staticClass:"comment-modal-container"},[_c('div',{staticClass:"comment-poster-editor-emoji"},[_c('VEmojiPicker',{directives:[{name:"show",rawName:"v-show",value:(_vm.emojiDialogVisible),expression:"emojiDialogVisible"}],attrs:{"pack":_vm.pack,"labelSearch":"搜索表情"},on:{"select":_vm.selectEmoji}})],1),_c('div',{staticClass:"comment-poster-container active"},[_c('ul',{staticClass:"comment-poster-controls"},[_c('li',{staticClass:"poster-item-close"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.exit}},[_vm._v("×")])])]),_c('div',{staticClass:"comment-poster-main"},[_c('div',{staticClass:"comment-poster-main-body"},[(_vm.options.comment_gravatar_default)?_c('img',{staticClass:"comment-poster-body-avatar",attrs:{"src":_vm.avatar,"alt":_vm.comment.author}}):_vm._e(),_c('div',{staticClass:"comment-poster-body-content"},[_c('ul',{staticClass:"comment-poster-body-header"},[_c('li',{staticClass:"header-item-nickname"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.author),expression:"comment.author"}],attrs:{"type":"text","placeholder":"昵称 *"},domProps:{"value":(_vm.comment.author)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "author", $event.target.value)},_vm.handleAuthorInput]}}),_c('span')]),_c('li',{staticClass:"header-item-email"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.email),expression:"comment.email"}],attrs:{"type":"email","placeholder":"邮箱 *"},domProps:{"value":(_vm.comment.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "email", $event.target.value)}}}),_c('span')]),_c('li',{staticClass:"header-item-website"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.authorUrl),expression:"comment.authorUrl"}],attrs:{"type":"text","placeholder":"网站"},domProps:{"value":(_vm.comment.authorUrl)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "authorUrl", $event.target.value)}}}),_c('span')])]),(_vm.replyingComment)?_c('span',{staticClass:"comment-poster-body-reply"},[_vm._v("回复：@"+_vm._s(_vm.replyingComment.author)+" "),_c('small',[_vm._v("#"+_vm._s(_vm.replyingComment.id))])]):_vm._e(),_c('div',{staticClass:"comment-poster-body-editor"},[_c('div',{staticClass:"comment-poster-editor-wrapper"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.content),expression:"comment.content"}],style:(_vm.replyingComment==null?'height: 146px;':'height: 128px;'),attrs:{"placeholder":"撰写评论...（1000 个字符内）"},domProps:{"value":(_vm.comment.content)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "content", $event.target.value)},_vm.handleContentInput]}})]),_c('ul',{staticClass:"comment-poster-editor-controls"},[_c('li',{staticClass:"editor-item-reply"},[_c('button',{staticClass:"editor-btn-reply",attrs:{"type":"button","disabled":!_vm.commentValid},on:{"click":_vm.handleSubmitClick}},[_vm._v("评论")])]),_c('li',{staticClass:"editor-item-preview"},[_c('button',{staticClass:"editor-btn-preview",attrs:{"type":"button"},on:{"click":_vm.handlePreviewClick}},[_vm._v("预览")])]),_c('li',{staticClass:"editor-item-emoji"},[_c('button',{staticClass:"editor-btn-emoji",attrs:{"type":"button"},on:{"click":_vm.toogleDialogEmoji}},[_vm._v("\n                      😃\n                    ")])])])])])])])])])])])}
var CommentEditorvue_type_template_id_7753300c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=template&id=7753300c&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=template&id=d23cd26c&
var VEmojiPickervue_type_template_id_d23cd26c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"EmojiPicker"}},[(_vm.showCategory)?_c('Categories',{on:{"select":function($event){return _vm.onChangeCategory($event)}}}):_vm._e(),(_vm.showSearch)?_c('InputSearch',{attrs:{"placeholder":_vm.labelSearch},model:{value:(_vm.filterEmoji),callback:function ($$v) {_vm.filterEmoji=$$v},expression:"filterEmoji"}}):_vm._e(),_c('EmojiList',{attrs:{"data":_vm.emojis,"category":_vm.category,"filter":_vm.filterEmoji,"emojisByRow":_vm.emojisByRow,"continuousList":_vm.continuousList},on:{"select":function($event){return _vm.onSelectEmoji($event)}}})],1)}
var VEmojiPickervue_type_template_id_d23cd26c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=template&id=d23cd26c&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.set.js
var es6_set = __webpack_require__("3cb6");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Categories.vue?vue&type=template&id=77978050&
var Categoriesvue_type_template_id_77978050_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(categorie,index){return _c('div',{key:index,class:['category', { active: index === _vm.active }],on:{"click":function($event){return _vm.onSelect(index)}}},[_c('VSvg',{attrs:{"name":categorie.icon}})],1)}),0)}
var Categoriesvue_type_template_id_77978050_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/Categories.vue?vue&type=template&id=77978050&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VSvg.vue?vue&type=template&id=2d7c38fb&
var VSvgvue_type_template_id_2d7c38fb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{style:(_vm.styleSVG),attrs:{"id":"VSvg"},domProps:{"innerHTML":_vm._s(_vm.icon)}})}
var VSvgvue_type_template_id_2d7c38fb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/VSvg.vue?vue&type=template&id=2d7c38fb&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("2338");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./src/components/EmojiPicker/_icons.js
/* based on https://github.com/joaoeudes7/V-Emoji-Picker */
var categories = {
  activity: `
  <svg style="max-height:18px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.6 303.6" fill="gray">
  <path d="M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z"/>
  <path d="M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z"/>
  </svg>
  `,
  flags: `
  <svg style="max-height:18px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="gray">
  <path d="M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z"/>
  </svg>
  `,
  foods: `
  <svg style="max-height:18px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" fill="gray">
  <path d="M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z"/>
  <path d="M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z"/>
  </svg>
  `,
  frequenty: `
  <svg style="max-height:18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.15 219.15" width="24" height="24" fill="gray">
  <path d="M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z"/>
  <path d="M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z"/>
  </svg>
  `,
  nature: `
  <svg style="max-height:18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="gray">
  <path d="M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z"/>
  </svg>
  `,
  objects: `
  <svg style="max-height:18px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 792 792" fill="gray">
  <path d="M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z"/>
  </svg>
  `,
  peoples: `
  <svg style="max-height:18px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 106.059 106.059" fill="gray">
  <path d="M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z"/>
  </svg>
  `,
  places: `
  <svg style="max-height:18px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 611.999 611.998" fill="gray">
  <path d="M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z"/>
  </svg>
  `,
  symbols: `
  <svg style="max-height:18px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 511.626 511.626" fill="gray">
  <path d="M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z"/>
  </svg>
  `
};
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VSvg.vue?vue&type=script&lang=js&




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VSvgvue_type_script_lang_js_ = ({
  name: 'VSvg',
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
    icon() {
      return categories[this.name];
    },

    styleSVG() {
      return _objectSpread({}, this.styles);
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/VSvg.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_VSvgvue_type_script_lang_js_ = (VSvgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/VSvg.vue



function VSvg_injectStyles (context) {
  
  
}

/* normalize component */

var VSvg_component = normalizeComponent(
  EmojiPicker_VSvgvue_type_script_lang_js_,
  VSvgvue_type_template_id_2d7c38fb_render,
  VSvgvue_type_template_id_2d7c38fb_staticRenderFns,
  false,
  VSvg_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var VSvg = (VSvg_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Categories.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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
  name: 'Categories',
  components: {
    VSvg: VSvg
  },
  data: () => ({
    categories: [{
      name: 'Frequenty',
      icon: 'frequenty'
    }, {
      name: 'Peoples',
      icon: 'peoples'
    }, {
      name: 'Nature',
      icon: 'nature'
    }, {
      name: 'Foods',
      icon: 'foods'
    }, {
      name: 'Activity',
      icon: 'activity'
    }, {
      name: 'Objects',
      icon: 'objects'
    }, {
      name: 'Places',
      icon: 'places'
    }, {
      name: 'Symbols',
      icon: 'symbols'
    }, {
      name: 'Flags',
      icon: 'flags'
    }],
    active: 1
  }),
  methods: {
    onSelect(index) {
      this.active = index;
      var _category = this.categories[index];
      this.$emit('select', _category);
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/Categories.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_Categoriesvue_type_script_lang_js_ = (Categoriesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/Categories.vue



function Categories_injectStyles (context) {
  
  
}

/* normalize component */

var Categories_component = normalizeComponent(
  EmojiPicker_Categoriesvue_type_script_lang_js_,
  Categoriesvue_type_template_id_77978050_render,
  Categoriesvue_type_template_id_77978050_staticRenderFns,
  false,
  Categories_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Categories = (Categories_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/EmojiList.vue?vue&type=template&id=52365ea0&
var EmojiListvue_type_template_id_52365ea0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[(_vm.continuousList)?_vm._l((_vm.dataFilteredByCategory),function(category,category_name){return _c('div',{key:category_name,staticClass:"category-line"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(category.length),expression:"category.length"}],ref:category_name,refInFor:true,staticClass:"category-title"},[_vm._v("\n          "+_vm._s(category_name)+"\n        ")]),(category.length)?_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((category),function(emoji,index_e){return _c('Emoji',{key:(category_name + "-" + index_e),attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1):_vm._e()])}):_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((_vm.dataFiltered),function(emoji,index){return _c('Emoji',{key:index,attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)],2)])}
var EmojiListvue_type_template_id_52365ea0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/EmojiList.vue?vue&type=template&id=52365ea0&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("9604");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("f301");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Emoji.vue?vue&type=template&id=a7aa5fde&
var Emojivue_type_template_id_a7aa5fde_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"emoji",domProps:{"innerHTML":_vm._s(_vm.data)}})}
var Emojivue_type_template_id_a7aa5fde_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/Emoji.vue?vue&type=template&id=a7aa5fde&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Emoji.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Emojivue_type_script_lang_js_ = ({
  name: 'Emoji',
  props: {
    data: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/Emoji.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_Emojivue_type_script_lang_js_ = (Emojivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/Emoji.vue



function Emoji_injectStyles (context) {
  
  
}

/* normalize component */

var Emoji_component = normalizeComponent(
  EmojiPicker_Emojivue_type_script_lang_js_,
  Emojivue_type_template_id_a7aa5fde_render,
  Emojivue_type_template_id_a7aa5fde_staticRenderFns,
  false,
  Emoji_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Emoji = (Emoji_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/EmojiList.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EmojiList',
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
    onSelect(emoji) {
      this.$emit('select', emoji);
    }

  },
  computed: {
    gridDynamic() {
      var percent = 100 / this.emojisByRow;
      return {
        gridTemplateColumns: `repeat(${this.emojisByRow}, ${percent}%)`
      };
    },

    dataFiltered() {
      var data = this.data[this.category];
      var searchValue = this.filter.trim();

      if (searchValue) {
        data = data.filter(item => item.aliases.some(alias => alias.includes(searchValue.toLowerCase())));
      }

      return data;
    },

    dataFilteredByCategory() {
      var _data = Object.assign({}, this.data);

      var searchValue = this.filter.trim();

      if (searchValue) {
        this.categories.forEach(category => {
          _data[category] = this.data[category].filter(item => item.aliases.some(alias => alias.includes(searchValue.toLowerCase())));
        });
      }

      return _data;
    },

    categories() {
      return Object.keys(this.data);
    }

  },
  watch: {
    data() {
      this.$refs['container-emoji'].scrollTop = 0;
    },

    category(new_category) {
      if (this.continuousList) {
        var firstItemCategory = this.$refs[new_category][0];
        var scrollTop = firstItemCategory.offsetTop - 80;
        this.$refs['container-emoji'].scrollTop = scrollTop;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/EmojiList.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_EmojiListvue_type_script_lang_js_ = (EmojiListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/EmojiList.vue



function EmojiList_injectStyles (context) {
  
  
}

/* normalize component */

var EmojiList_component = normalizeComponent(
  EmojiPicker_EmojiListvue_type_script_lang_js_,
  EmojiListvue_type_template_id_52365ea0_render,
  EmojiListvue_type_template_id_52365ea0_staticRenderFns,
  false,
  EmojiList_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var EmojiList = (EmojiList_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/InputSearch.vue?vue&type=template&id=1cd4bfb9&
var InputSearchvue_type_template_id_1cd4bfb9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.onKeyUp($event)}}})])])}
var InputSearchvue_type_template_id_1cd4bfb9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/InputSearch.vue?vue&type=template&id=1cd4bfb9&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/InputSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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
  name: 'InputSearch',
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
    onKeyUp(event) {
      this.$emit('input', event.target.value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/InputSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_InputSearchvue_type_script_lang_js_ = (InputSearchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/InputSearch.vue



function InputSearch_injectStyles (context) {
  
  
}

/* normalize component */

var InputSearch_component = normalizeComponent(
  EmojiPicker_InputSearchvue_type_script_lang_js_,
  InputSearchvue_type_template_id_1cd4bfb9_render,
  InputSearchvue_type_template_id_1cd4bfb9_staticRenderFns,
  false,
  InputSearch_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var InputSearch = (InputSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VEmojiPicker',
  props: {
    pack: {
      type: Array,
      required: true
    },
    labelSearch: {
      type: String,
      default: 'Pesquisar...'
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
      default: () => true
    },
    continuousList: {
      type: Boolean,
      default: () => false
    }
  },
  components: {
    Categories: Categories,
    EmojiList: EmojiList,
    InputSearch: InputSearch
  },
  data: () => ({
    mapEmojis: {},
    category: 'Peoples',
    filterEmoji: ''
  }),

  created() {
    this.mapperData(this.pack);
  },

  methods: {
    onChangeCategory(category) {
      this.category = category.name;
      this.$emit('changeCategory', this.category);
    },

    onSelectEmoji(emoji) {
      this.updateFrequenty(emoji);
      this.$emit('select', emoji);
    },

    updateFrequenty(emoji) {
      this.mapEmojis['Frequenty'] = [...new Set([...this.mapEmojis['Frequenty'], emoji])];
    },

    mapperData(dataEmojis) {
      this.$set(this.mapEmojis, 'Frequenty', []);
      dataEmojis.forEach(emoji => {
        var _category = emoji['category'];

        if (!this.mapEmojis[_category]) {
          this.$set(this.mapEmojis, _category, [emoji]);
        } else {
          this.mapEmojis[_category].push(emoji);
        }
      });
    }

  },

  beforeDestroy() {
    delete this.mapEmojis;
  },

  computed: {
    emojis() {
      return this.mapEmojis;
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_VEmojiPickervue_type_script_lang_js_ = (VEmojiPickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue



function VEmojiPicker_injectStyles (context) {
  
  
}

/* normalize component */

var VEmojiPicker_component = normalizeComponent(
  EmojiPicker_VEmojiPickervue_type_script_lang_js_,
  VEmojiPickervue_type_template_id_d23cd26c_render,
  VEmojiPickervue_type_template_id_d23cd26c_staticRenderFns,
  false,
  VEmojiPicker_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var VEmojiPicker = (VEmojiPicker_component.exports);
// CONCATENATED MODULE: ./src/components/EmojiPicker/data/emojis.js
/* eslint-disable prettier/prettier */

/* based on https://github.com/joaoeudes7/V-Emoji-Picker */
class emojis_Emoji {
  constructor(emoji, description, category, aliases, tags) {
    this.emoji = emoji;
    this.description = description;
    this.category = category;
    this.aliases = aliases;
    this.tags = tags;
  }

}

/* harmony default export */ var emojis = ([new emojis_Emoji("😀", "grinning face", "Peoples", ["grinning"], ["smile", "happy"]), new emojis_Emoji("😃", "smiling face with open mouth", "Peoples", ["smiley"], ["happy", "joy", "haha"]), new emojis_Emoji("😄", "smiling face with open mouth & smiling eyes", "Peoples", ["smile"], ["happy", "joy", "laugh", "pleased"]), new emojis_Emoji("😁", "grinning face with smiling eyes", "Peoples", ["grin"], []), new emojis_Emoji("😆", "smiling face with open mouth & closed eyes", "Peoples", ["laughing", "satisfied"], ["happy", "haha"]), new emojis_Emoji("😅", "smiling face with open mouth & cold sweat", "Peoples", ["sweat_smile"], ["hot"]), new emojis_Emoji("😂", "face with tears of joy", "Peoples", ["joy"], ["tears"]), new emojis_Emoji("🤣", "rolling on the floor laughing", "Peoples", ["rofl"], ["lol", "laughing"]), new emojis_Emoji("😌", "smiling face", "Peoples", ["relaxed"], ["blush", "pleased"]), new emojis_Emoji("😊", "smiling face with smiling eyes", "Peoples", ["blush"], ["proud"]), new emojis_Emoji("😇", "smiling face with halo", "Peoples", ["innocent"], ["angel"]), new emojis_Emoji("🙂", "slightly smiling face", "Peoples", ["slightly_smiling_face"], []), new emojis_Emoji("🙃", "upside-down face", "Peoples", ["upside_down_face"], []), new emojis_Emoji("😉", "winking face", "Peoples", ["wink"], ["flirt"]), new emojis_Emoji("😌", "relieved face", "Peoples", ["relieved"], ["whew"]), new emojis_Emoji("😍", "smiling face with heart-eyes", "Peoples", ["heart_eyes"], ["love", "crush"]), new emojis_Emoji("😘", "face blowing a kiss", "Peoples", ["kissing_heart"], ["flirt"]), new emojis_Emoji("😗", "kissing face", "Peoples", ["kissing"], []), new emojis_Emoji("😙", "kissing face with smiling eyes", "Peoples", ["kissing_smiling_eyes"], []), new emojis_Emoji("😚", "kissing face with closed eyes", "Peoples", ["kissing_closed_eyes"], []), new emojis_Emoji("😋", "face savouring delicious food", "Peoples", ["yum"], ["tongue", "lick"]), new emojis_Emoji("😜", "face with stuck-out tongue & winking eye", "Peoples", ["stuck_out_tongue_winking_eye"], ["prank", "silly"]), new emojis_Emoji("😝", "face with stuck-out tongue & closed eyes", "Peoples", ["stuck_out_tongue_closed_eyes"], ["prank"]), new emojis_Emoji("😛", "face with stuck-out tongue", "Peoples", ["stuck_out_tongue"], []), new emojis_Emoji("🤑", "money-mouth face", "Peoples", ["money_mouth_face"], ["rich"]), new emojis_Emoji("🤗", "hugging face", "Peoples", ["hugs"], []), new emojis_Emoji("🤓", "nerd face", "Peoples", ["nerd_face"], ["geek", "glasses"]), new emojis_Emoji("😎", "smiling face with sunglasses", "Peoples", ["sunglasses"], ["cool"]), new emojis_Emoji("🤡", "clown face", "Peoples", ["clown_face"], []), new emojis_Emoji("🤠", "cowboy hat face", "Peoples", ["cowboy_hat_face"], []), new emojis_Emoji("😏", "smirking face", "Peoples", ["smirk"], ["smug"]), new emojis_Emoji("😒", "unamused face", "Peoples", ["unamused"], ["meh"]), new emojis_Emoji("😞", "disappointed face", "Peoples", ["disappointed"], ["sad"]), new emojis_Emoji("😔", "pensive face", "Peoples", ["pensive"], []), new emojis_Emoji("😟", "worried face", "Peoples", ["worried"], ["nervous"]), new emojis_Emoji("😕", "confused face", "Peoples", ["confused"], []), new emojis_Emoji("🙁", "slightly frowning face", "Peoples", ["slightly_frowning_face"], []), new emojis_Emoji("☹️", "frowning face", "Peoples", ["frowning_face"], []), new emojis_Emoji("😣", "persevering face", "Peoples", ["persevere"], ["struggling"]), new emojis_Emoji("😖", "confounded face", "Peoples", ["confounded"], []), new emojis_Emoji("😫", "tired face", "Peoples", ["tired_face"], ["upset", "whine"]), new emojis_Emoji("😩", "weary face", "Peoples", ["weary"], ["tired"]), new emojis_Emoji("😤", "face with steam from nose", "Peoples", ["triumph"], ["smug"]), new emojis_Emoji("😠", "angry face", "Peoples", ["angry"], ["mad", "annoyed"]), new emojis_Emoji("😡", "pouting face", "Peoples", ["rage", "pout"], ["angry"]), new emojis_Emoji("😶", "face without mouth", "Peoples", ["no_mouth"], ["mute", "silence"]), new emojis_Emoji("😐", "neutral face", "Peoples", ["neutral_face"], ["meh"]), new emojis_Emoji("😑", "expressionless face", "Peoples", ["expressionless"], []), new emojis_Emoji("😯", "hushed face", "Peoples", ["hushed"], ["silence", "speechless"]), new emojis_Emoji("😦", "frowning face with open mouth", "Peoples", ["frowning"], []), new emojis_Emoji("😧", "anguished face", "Peoples", ["anguished"], ["stunned"]), new emojis_Emoji("😮", "face with open mouth", "Peoples", ["open_mouth"], ["surprise", "impressed", "wow"]), new emojis_Emoji("😲", "astonished face", "Peoples", ["astonished"], ["amazed", "gasp"]), new emojis_Emoji("😵", "dizzy face", "Peoples", ["dizzy_face"], []), new emojis_Emoji("😳", "flushed face", "Peoples", ["flushed"], []), new emojis_Emoji("😱", "face screaming in fear", "Peoples", ["scream"], ["horror", "shocked"]), new emojis_Emoji("😨", "fearful face", "Peoples", ["fearful"], ["scared", "shocked", "oops"]), new emojis_Emoji("😰", "face with open mouth & cold sweat", "Peoples", ["cold_sweat"], ["nervous"]), new emojis_Emoji("😢", "crying face", "Peoples", ["cry"], ["sad", "tear"]), new emojis_Emoji("😥", "disappointed but relieved face", "Peoples", ["disappointed_relieved"], ["phew", "sweat", "nervous"]), new emojis_Emoji("🤤", "drooling face", "Peoples", ["drooling_face"], []), new emojis_Emoji("😭", "loudly crying face", "Peoples", ["sob"], ["sad", "cry", "bawling"]), new emojis_Emoji("😓", "face with cold sweat", "Peoples", ["sweat"], []), new emojis_Emoji("😪", "sleepy face", "Peoples", ["sleepy"], ["tired"]), new emojis_Emoji("😴", "sleeping face", "Peoples", ["sleeping"], ["zzz"]), new emojis_Emoji("🙄", "face with rolling eyes", "Peoples", ["roll_eyes"], []), new emojis_Emoji("🤔", "thinking face", "Peoples", ["thinking"], []), new emojis_Emoji("🤥", "lying face", "Peoples", ["lying_face"], ["liar"]), new emojis_Emoji("😬", "grimacing face", "Peoples", ["grimacing"], []), new emojis_Emoji("🤐", "zipper-mouth face", "Peoples", ["zipper_mouth_face"], ["silence", "hush"]), new emojis_Emoji("🤢", "nauseated face", "Peoples", ["nauseated_face"], ["sick", "barf", "disgusted"]), new emojis_Emoji("🤧", "sneezing face", "Peoples", ["sneezing_face"], ["achoo", "sick"]), new emojis_Emoji("😷", "face with medical mask", "Peoples", ["mask"], ["sick", "ill"]), new emojis_Emoji("🤒", "face with thermometer", "Peoples", ["face_with_thermometer"], ["sick"]), new emojis_Emoji("🤕", "face with head-bandage", "Peoples", ["face_with_head_bandage"], ["hurt"]), new emojis_Emoji("😈", "smiling face with horns", "Peoples", ["smiling_imp"], ["devil", "evil", "horns"]), new emojis_Emoji("👿", "angry face with horns", "Peoples", ["imp"], ["angry", "devil", "evil", "horns"]), new emojis_Emoji("👹", "ogre", "Peoples", ["japanese_ogre"], ["monster"]), new emojis_Emoji("👺", "goblin", "Peoples", ["japanese_goblin"], []), new emojis_Emoji("💩", "pile of poo", "Peoples", ["hankey", "poop", "shit"], ["crap"]), new emojis_Emoji("👻", "ghost", "Peoples", ["ghost"], ["halloween"]), new emojis_Emoji("💀", "skull", "Peoples", ["skull"], ["dead", "danger", "poison"]), new emojis_Emoji("☠️", "skull and crossbones", "Peoples", ["skull_and_crossbones"], ["danger", "pirate"]), new emojis_Emoji("👽", "alien", "Peoples", ["alien"], ["ufo"]), new emojis_Emoji("👾", "alien monster", "Peoples", ["space_invader"], ["game", "retro"]), new emojis_Emoji("🤖", "robot face", "Peoples", ["robot"], []), new emojis_Emoji("🎃", "jack-o-lantern", "Peoples", ["jack_o_lantern"], ["halloween"]), new emojis_Emoji("😺", "smiling cat face with open mouth", "Peoples", ["smiley_cat"], []), new emojis_Emoji("😸", "grinning cat face with smiling eyes", "Peoples", ["smile_cat"], []), new emojis_Emoji("😹", "cat face with tears of joy", "Peoples", ["joy_cat"], []), new emojis_Emoji("😻", "smiling cat face with heart-eyes", "Peoples", ["heart_eyes_cat"], []), new emojis_Emoji("😼", "cat face with wry smile", "Peoples", ["smirk_cat"], []), new emojis_Emoji("😽", "kissing cat face with closed eyes", "Peoples", ["kissing_cat"], []), new emojis_Emoji("🙀", "weary cat face", "Peoples", ["scream_cat"], ["horror"]), new emojis_Emoji("😿", "crying cat face", "Peoples", ["crying_cat_face"], ["sad", "tear"]), new emojis_Emoji("😾", "pouting cat face", "Peoples", ["pouting_cat"], []), new emojis_Emoji("👐", "open hands", "Peoples", ["open_hands"], []), new emojis_Emoji("🙌", "raising hands", "Peoples", ["raised_hands"], ["hooray"]), new emojis_Emoji("👏", "clapping hands", "Peoples", ["clap"], ["praise", "applause"]), new emojis_Emoji("🙏", "folded hands", "Peoples", ["pray"], ["please", "hope", "wish"]), new emojis_Emoji("🤝", "handshake", "Peoples", ["handshake"], ["deal"]), new emojis_Emoji("👍", "thumbs up", "Peoples", ["+1", "thumbsup"], ["approve", "ok"]), new emojis_Emoji("👎", "thumbs down", "Peoples", ["-1", "thumbsdown"], ["disapprove", "bury"]), new emojis_Emoji("👊", "oncoming fist", "Peoples", ["fist_oncoming", "facepunch", "punch"], ["attack"]), new emojis_Emoji("✊", "raised fist", "Peoples", ["fist_raised", "fist"], ["power"]), new emojis_Emoji("🤛", "left-facing fist", "Peoples", ["fist_left"], []), new emojis_Emoji("🤜", "right-facing fist", "Peoples", ["fist_right"], []), new emojis_Emoji("🤞", "crossed fingers", "Peoples", ["crossed_fingers"], ["luck", "hopeful"]), new emojis_Emoji("✌️", "victory hand", "Peoples", ["v"], ["victory", "peace"]), new emojis_Emoji("🤘", "sign of the horns", "Peoples", ["metal"], []), new emojis_Emoji("👌", "OK hand", "Peoples", ["ok_hand"], []), new emojis_Emoji("👈", "backhand index pointing left", "Peoples", ["point_left"], []), new emojis_Emoji("👉", "backhand index pointing right", "Peoples", ["point_right"], []), new emojis_Emoji("👆", "backhand index pointing up", "Peoples", ["point_up_2"], []), new emojis_Emoji("👇", "backhand index pointing down", "Peoples", ["point_down"], []), new emojis_Emoji("☝️", "index pointing up", "Peoples", ["point_up"], []), new emojis_Emoji("✋", "raised hand", "Peoples", ["hand", "raised_hand"], ["highfive", "stop"]), new emojis_Emoji("🤚", "raised back of hand", "Peoples", ["raised_back_of_hand"], []), new emojis_Emoji("🖐", "raised hand with fingers splayed", "Peoples", ["raised_hand_with_fingers_splayed"], []), new emojis_Emoji("🖖", "vulcan salute", "Peoples", ["vulcan_salute"], ["prosper", "spock"]), new emojis_Emoji("👋", "waving hand", "Peoples", ["wave"], ["goodbye"]), new emojis_Emoji("🤙", "call me hand", "Peoples", ["call_me_hand"], []), new emojis_Emoji("💪", "flexed biceps", "Peoples", ["muscle"], ["flex", "bicep", "strong", "workout"]), new emojis_Emoji("🖕", "middle finger", "Peoples", ["middle_finger", "fu"], []), new emojis_Emoji("✍️", "writing hand", "Peoples", ["writing_hand"], []), new emojis_Emoji("🤳", "selfie", "Peoples", ["selfie"], []), new emojis_Emoji("💅", "nail polish", "Peoples", ["nail_care"], ["beauty", "manicure"]), new emojis_Emoji("💍", "ring", "Peoples", ["ring"], ["wedding", "marriage", "engaged"]), new emojis_Emoji("💄", "lipstick", "Peoples", ["lipstick"], ["makeup"]), new emojis_Emoji("💋", "kiss mark", "Peoples", ["kiss"], ["lipstick"]), new emojis_Emoji("👄", "mouth", "Peoples", ["lips"], ["kiss"]), new emojis_Emoji("👅", "tongue", "Peoples", ["tongue"], ["taste"]), new emojis_Emoji("👂", "ear", "Peoples", ["ear"], ["hear", "sound", "listen"]), new emojis_Emoji("👃", "nose", "Peoples", ["nose"], ["smell"]), new emojis_Emoji("👣", "footprints", "Peoples", ["footprints"], ["feet", "tracks"]), new emojis_Emoji("👁", "eye", "Peoples", ["eye"], []), new emojis_Emoji("👀", "eyes", "Peoples", ["eyes"], ["look", "see", "watch"]), new emojis_Emoji("🗣", "speaking head", "Peoples", ["speaking_head"], []), new emojis_Emoji("👤", "bust in silhouette", "Peoples", ["bust_in_silhouette"], ["user"]), new emojis_Emoji("👥", "busts in silhouette", "Peoples", ["busts_in_silhouette"], ["users", "group", "team"]), new emojis_Emoji("👶", "baby", "Peoples", ["baby"], ["child", "newborn"]), new emojis_Emoji("👦", "boy", "Peoples", ["boy"], ["child"]), new emojis_Emoji("👧", "girl", "Peoples", ["girl"], ["child"]), new emojis_Emoji("👨", "man", "Peoples", ["man"], ["mustache", "father", "dad"]), new emojis_Emoji("👩", "woman", "Peoples", ["woman"], ["girls"]), new emojis_Emoji("👱‍♀", "blond-haired woman", "Peoples", ["blonde_woman"], []), new emojis_Emoji("👱", "blond-haired person", "Peoples", ["blonde_man", "person_with_blond_hair"], ["boy"]), new emojis_Emoji("👴", "old man", "Peoples", ["older_man"], []), new emojis_Emoji("👵", "old woman", "Peoples", ["older_woman"], []), new emojis_Emoji("👲", "man with Chinese cap", "Peoples", ["man_with_gua_pi_mao"], []), new emojis_Emoji("👳‍♀", "woman wearing turban", "Peoples", ["woman_with_turban"], []), new emojis_Emoji("👳", "person wearing turban", "Peoples", ["man_with_turban"], []), new emojis_Emoji("👮‍♀", "woman police officer", "Peoples", ["policewoman"], []), new emojis_Emoji("👮", "police officer", "Peoples", ["policeman", "cop"], ["police", "law"]), new emojis_Emoji("👷‍♀", "woman construction worker", "Peoples", ["construction_worker_woman"], []), new emojis_Emoji("👷", "construction worker", "Peoples", ["construction_worker_man", "construction_worker"], ["helmet"]), new emojis_Emoji("💂‍♀", "woman guard", "Peoples", ["guardswoman"], []), new emojis_Emoji("💂", "guard", "Peoples", ["guardsman"], []), new emojis_Emoji("👩‍⚕", "woman health worker", "Peoples", ["woman_health_worker"], ["doctor", "nurse"]), new emojis_Emoji("👨‍⚕", "man health worker", "Peoples", ["man_health_worker"], ["doctor", "nurse"]), new emojis_Emoji("👩‍🌾", "woman farmer", "Peoples", ["woman_farmer"], []), new emojis_Emoji("👨‍🌾", "man farmer", "Peoples", ["man_farmer"], []), new emojis_Emoji("👩‍🍳", "woman cook", "Peoples", ["woman_cook"], ["chef"]), new emojis_Emoji("👨‍🍳", "man cook", "Peoples", ["man_cook"], ["chef"]), new emojis_Emoji("👩‍🎓", "woman student", "Peoples", ["woman_student"], ["graduation"]), new emojis_Emoji("👨‍🎓", "man student", "Peoples", ["man_student"], ["graduation"]), new emojis_Emoji("👩‍🎤", "woman singer", "Peoples", ["woman_singer"], ["rockstar"]), new emojis_Emoji("👨‍🎤", "man singer", "Peoples", ["man_singer"], ["rockstar"]), new emojis_Emoji("👩‍🏫", "woman teacher", "Peoples", ["woman_teacher"], ["school", "professor"]), new emojis_Emoji("👨‍🏫", "man teacher", "Peoples", ["man_teacher"], ["school", "professor"]), new emojis_Emoji("👩‍🏭", "woman factory worker", "Peoples", ["woman_factory_worker"], []), new emojis_Emoji("👨‍🏭", "man factory worker", "Peoples", ["man_factory_worker"], []), new emojis_Emoji("👩‍💻", "woman technologist", "Peoples", ["woman_technologist"], ["coder"]), new emojis_Emoji("👨‍💻", "man technologist", "Peoples", ["man_technologist"], ["coder"]), new emojis_Emoji("👩‍💼", "woman office worker", "Peoples", ["woman_office_worker"], ["business"]), new emojis_Emoji("👨‍💼", "man office worker", "Peoples", ["man_office_worker"], ["business"]), new emojis_Emoji("👩‍🔧", "woman mechanic", "Peoples", ["woman_mechanic"], []), new emojis_Emoji("👨‍🔧", "man mechanic", "Peoples", ["man_mechanic"], []), new emojis_Emoji("👩‍🔬", "woman scientist", "Peoples", ["woman_scientist"], ["research"]), new emojis_Emoji("👨‍🔬", "man scientist", "Peoples", ["man_scientist"], ["research"]), new emojis_Emoji("👩‍🎨", "woman artist", "Peoples", ["woman_artist"], ["painter"]), new emojis_Emoji("👨‍🎨", "man artist", "Peoples", ["man_artist"], ["painter"]), new emojis_Emoji("👩‍🚒", "woman firefighter", "Peoples", ["woman_firefighter"], []), new emojis_Emoji("👨‍🚒", "man firefighter", "Peoples", ["man_firefighter"], []), new emojis_Emoji("👩‍🚀", "woman astronaut", "Peoples", ["woman_astronaut"], ["space"]), new emojis_Emoji("👨‍🚀", "man astronaut", "Peoples", ["man_astronaut"], ["space"]), new emojis_Emoji("🤶", "Mrs. Claus", "Peoples", ["mrs_claus"], ["santa"]), new emojis_Emoji("🎅", "Santa Claus", "Peoples", ["santa"], ["christmas"]), new emojis_Emoji("👸", "princess", "Peoples", ["princess"], ["blonde", "crown", "royal"]), new emojis_Emoji("🤴", "prince", "Peoples", ["prince"], ["crown", "royal"]), new emojis_Emoji("👰", "bride with veil", "Peoples", ["bride_with_veil"], ["marriage", "wedding"]), new emojis_Emoji("🤵", "man in tuxedo", "Peoples", ["man_in_tuxedo"], ["groom", "marriage", "wedding"]), new emojis_Emoji("👼", "baby angel", "Peoples", ["angel"], []), new emojis_Emoji("🤰", "pregnant woman", "Peoples", ["pregnant_woman"], []), new emojis_Emoji("🙇‍♀", "woman bowing", "Peoples", ["bowing_woman"], ["respect", "thanks"]), new emojis_Emoji("🙇", "person bowing", "Peoples", ["bowing_man", "bow"], ["respect", "thanks"]), new emojis_Emoji("💁", "person tipping hand", "Peoples", ["tipping_hand_woman", "information_desk_person", "sassy_woman"], []), new emojis_Emoji("💁‍♂", "man tipping hand", "Peoples", ["tipping_hand_man", "sassy_man"], ["information"]), new emojis_Emoji("🙅", "person gesturing NO", "Peoples", ["no_good_woman", "no_good", "ng_woman"], ["stop", "halt"]), new emojis_Emoji("🙅‍♂", "man gesturing NO", "Peoples", ["no_good_man", "ng_man"], ["stop", "halt"]), new emojis_Emoji("🙆", "person gesturing OK", "Peoples", ["ok_woman"], []), new emojis_Emoji("🙆‍♂", "man gesturing OK", "Peoples", ["ok_man"], []), new emojis_Emoji("🙋", "person raising hand", "Peoples", ["raising_hand_woman", "raising_hand"], []), new emojis_Emoji("🙋‍♂", "man raising hand", "Peoples", ["raising_hand_man"], []), new emojis_Emoji("🤦‍♀", "woman facepalming", "Peoples", ["woman_facepalming"], []), new emojis_Emoji("🤦‍♂", "man facepalming", "Peoples", ["man_facepalming"], []), new emojis_Emoji("🤷‍♀", "woman shrugging", "Peoples", ["woman_shrugging"], []), new emojis_Emoji("🤷‍♂", "man shrugging", "Peoples", ["man_shrugging"], []), new emojis_Emoji("🙎", "person pouting", "Peoples", ["pouting_woman", "person_with_pouting_face"], []), new emojis_Emoji("🙎‍♂", "man pouting", "Peoples", ["pouting_man"], []), new emojis_Emoji("🙍", "person frowning", "Peoples", ["frowning_woman", "person_frowning"], ["sad"]), new emojis_Emoji("🙍‍♂", "man frowning", "Peoples", ["frowning_man"], []), new emojis_Emoji("💇", "person getting haircut", "Peoples", ["haircut_woman", "haircut"], ["beauty"]), new emojis_Emoji("💇‍♂", "man getting haircut", "Peoples", ["haircut_man"], []), new emojis_Emoji("💆", "person getting massage", "Peoples", ["massage_woman", "massage"], ["spa"]), new emojis_Emoji("💆‍♂", "man getting massage", "Peoples", ["massage_man"], ["spa"]), new emojis_Emoji("🕴", "man in business suit levitating", "Peoples", ["business_suit_levitating"], []), new emojis_Emoji("💃", "woman dancing", "Peoples", ["dancer"], ["dress"]), new emojis_Emoji("🕺", "man dancing", "Peoples", ["man_dancing"], ["dancer"]), new emojis_Emoji("👯", "people with bunny ears partying", "Peoples", ["dancing_women", "dancers"], ["bunny"]), new emojis_Emoji("👯‍♂", "men with bunny ears partying", "Peoples", ["dancing_men"], ["bunny"]), new emojis_Emoji("🚶‍♀", "woman walking", "Peoples", ["walking_woman"], []), new emojis_Emoji("🚶", "person walking", "Peoples", ["walking_man", "walking"], []), new emojis_Emoji("🏃‍♀", "woman running", "Peoples", ["running_woman"], ["exercise", "workout", "marathon"]), new emojis_Emoji("🏃", "person running", "Peoples", ["running_man", "runner", "running"], ["exercise", "workout", "marathon"]), new emojis_Emoji("👫", "man and woman holding hands", "Peoples", ["couple"], ["date"]), new emojis_Emoji("👭", "two women holding hands", "Peoples", ["two_women_holding_hands"], ["couple", "date"]), new emojis_Emoji("👬", "two men holding hands", "Peoples", ["two_men_holding_hands"], ["couple", "date"]), new emojis_Emoji("💑", "couple with heart", "Peoples", ["couple_with_heart_woman_man", "couple_with_heart"], []), new emojis_Emoji("👩‍❤️‍👩", "couple with heart: woman, woman", "Peoples", ["couple_with_heart_woman_woman"], []), new emojis_Emoji("👨‍❤️‍👨", "couple with heart: man, man", "Peoples", ["couple_with_heart_man_man"], []), new emojis_Emoji("💏", "kiss", "Peoples", ["couplekiss_man_woman"], []), new emojis_Emoji("👩‍❤️‍💋‍👩", "kiss: woman, woman", "Peoples", ["couplekiss_woman_woman"], []), new emojis_Emoji("👨‍❤️‍💋‍👨", "kiss: man, man", "Peoples", ["couplekiss_man_man"], []), new emojis_Emoji("👪", "family", "Peoples", ["family_man_woman_boy", "family"], ["home", "parents", "child"]), new emojis_Emoji("👨‍👩‍👧", "family: man, woman, girl", "Peoples", ["family_man_woman_girl"], []), new emojis_Emoji("👨‍👩‍👧‍👦", "family: man, woman, girl, boy", "Peoples", ["family_man_woman_girl_boy"], []), new emojis_Emoji("👨‍👩‍👦‍👦", "family: man, woman, boy, boy", "Peoples", ["family_man_woman_boy_boy"], []), new emojis_Emoji("👨‍👩‍👧‍👧", "family: man, woman, girl, girl", "Peoples", ["family_man_woman_girl_girl"], []), new emojis_Emoji("👩‍👩‍👦", "family: woman, woman, boy", "Peoples", ["family_woman_woman_boy"], []), new emojis_Emoji("👩‍👩‍👧", "family: woman, woman, girl", "Peoples", ["family_woman_woman_girl"], []), new emojis_Emoji("👩‍👩‍👧‍👦", "family: woman, woman, girl, boy", "Peoples", ["family_woman_woman_girl_boy"], []), new emojis_Emoji("👩‍👩‍👦‍👦", "family: woman, woman, boy, boy", "Peoples", ["family_woman_woman_boy_boy"], []), new emojis_Emoji("👩‍👩‍👧‍👧", "family: woman, woman, girl, girl", "Peoples", ["family_woman_woman_girl_girl"], []), new emojis_Emoji("👨‍👨‍👦", "family: man, man, boy", "Peoples", ["family_man_man_boy"], []), new emojis_Emoji("👨‍👨‍👧", "family: man, man, girl", "Peoples", ["family_man_man_girl"], []), new emojis_Emoji("👨‍👨‍👧‍👦", "family: man, man, girl, boy", "Peoples", ["family_man_man_girl_boy"], []), new emojis_Emoji("👨‍👨‍👦‍👦", "family: man, man, boy, boy", "Peoples", ["family_man_man_boy_boy"], []), new emojis_Emoji("👨‍👨‍👧‍👧", "family: man, man, girl, girl", "Peoples", ["family_man_man_girl_girl"], []), new emojis_Emoji("👩‍👦", "family: woman, boy", "Peoples", ["family_woman_boy"], []), new emojis_Emoji("👩‍👧", "family: woman, girl", "Peoples", ["family_woman_girl"], []), new emojis_Emoji("👩‍👧‍👦", "family: woman, girl, boy", "Peoples", ["family_woman_girl_boy"], []), new emojis_Emoji("👩‍👦‍👦", "family: woman, boy, boy", "Peoples", ["family_woman_boy_boy"], []), new emojis_Emoji("👩‍👧‍👧", "family: woman, girl, girl", "Peoples", ["family_woman_girl_girl"], []), new emojis_Emoji("👨‍👦", "family: man, boy", "Peoples", ["family_man_boy"], []), new emojis_Emoji("👨‍👧", "family: man, girl", "Peoples", ["family_man_girl"], []), new emojis_Emoji("👨‍👧‍👦", "family: man, girl, boy", "Peoples", ["family_man_girl_boy"], []), new emojis_Emoji("👨‍👦‍👦", "family: man, boy, boy", "Peoples", ["family_man_boy_boy"], []), new emojis_Emoji("👨‍👧‍👧", "family: man, girl, girl", "Peoples", ["family_man_girl_girl"], []), new emojis_Emoji("👚", "woman’s clothes", "Peoples", ["womans_clothes"], []), new emojis_Emoji("👕", "t-shirt", "Peoples", ["shirt", "tshirt"], []), new emojis_Emoji("👖", "jeans", "Peoples", ["jeans"], ["pants"]), new emojis_Emoji("👔", "necktie", "Peoples", ["necktie"], ["shirt", "formal"]), new emojis_Emoji("👗", "dress", "Peoples", ["dress"], []), new emojis_Emoji("👙", "bikini", "Peoples", ["bikini"], ["beach"]), new emojis_Emoji("👘", "kimono", "Peoples", ["kimono"], []), new emojis_Emoji("👠", "high-heeled shoe", "Peoples", ["high_heel"], ["shoe"]), new emojis_Emoji("👡", "woman’s sandal", "Peoples", ["sandal"], ["shoe"]), new emojis_Emoji("👢", "woman’s boot", "Peoples", ["boot"], []), new emojis_Emoji("👞", "man’s shoe", "Peoples", ["mans_shoe", "shoe"], []), new emojis_Emoji("👟", "running shoe", "Peoples", ["athletic_shoe"], ["sneaker", "sport", "running"]), new emojis_Emoji("👒", "woman’s hat", "Peoples", ["womans_hat"], []), new emojis_Emoji("🎩", "top hat", "Peoples", ["tophat"], ["hat", "classy"]), new emojis_Emoji("🎓", "graduation cap", "Peoples", ["mortar_board"], ["education", "college", "university", "graduation"]), new emojis_Emoji("👑", "crown", "Peoples", ["crown"], ["king", "queen", "royal"]), new emojis_Emoji("⛑", "rescue worker’s helmet", "Peoples", ["rescue_worker_helmet"], []), new emojis_Emoji("🎒", "school backpack", "Peoples", ["school_satchel"], []), new emojis_Emoji("👝", "clutch bag", "Peoples", ["pouch"], ["bag"]), new emojis_Emoji("👛", "purse", "Peoples", ["purse"], []), new emojis_Emoji("👜", "handbag", "Peoples", ["handbag"], ["bag"]), new emojis_Emoji("💼", "briefcase", "Peoples", ["briefcase"], ["business"]), new emojis_Emoji("👓", "glasses", "Peoples", ["eyeglasses"], ["glasses"]), new emojis_Emoji("🕶", "sunglasses", "Peoples", ["dark_sunglasses"], []), new emojis_Emoji("🌂", "closed umbrella", "Peoples", ["closed_umbrella"], ["weather", "rain"]), new emojis_Emoji("☂️", "umbrella", "Peoples", ["open_umbrella"], []), new emojis_Emoji("🐶", "dog face", "Nature", ["dog"], ["pet"]), new emojis_Emoji("🐱", "cat face", "Nature", ["cat"], ["pet"]), new emojis_Emoji("🐭", "mouse face", "Nature", ["mouse"], []), new emojis_Emoji("🐹", "hamster face", "Nature", ["hamster"], ["pet"]), new emojis_Emoji("🐰", "rabbit face", "Nature", ["rabbit"], ["bunny"]), new emojis_Emoji("🦊", "fox face", "Nature", ["fox_face"], []), new emojis_Emoji("🐻", "bear face", "Nature", ["bear"], []), new emojis_Emoji("🐼", "panda face", "Nature", ["panda_face"], []), new emojis_Emoji("🐨", "koala", "Nature", ["koala"], []), new emojis_Emoji("🐯", "tiger face", "Nature", ["tiger"], []), new emojis_Emoji("🦁", "lion face", "Nature", ["lion"], []), new emojis_Emoji("🐮", "cow face", "Nature", ["cow"], []), new emojis_Emoji("🐷", "pig face", "Nature", ["pig"], []), new emojis_Emoji("🐽", "pig nose", "Nature", ["pig_nose"], []), new emojis_Emoji("🐸", "frog face", "Nature", ["frog"], []), new emojis_Emoji("🐵", "monkey face", "Nature", ["monkey_face"], []), new emojis_Emoji("🙈", "see-no-evil monkey", "Nature", ["see_no_evil"], ["monkey", "blind", "ignore"]), new emojis_Emoji("🙉", "hear-no-evil monkey", "Nature", ["hear_no_evil"], ["monkey", "deaf"]), new emojis_Emoji("🙊", "speak-no-evil monkey", "Nature", ["speak_no_evil"], ["monkey", "mute", "hush"]), new emojis_Emoji("🐒", "monkey", "Nature", ["monkey"], []), new emojis_Emoji("🐔", "chicken", "Nature", ["chicken"], []), new emojis_Emoji("🐧", "penguin", "Nature", ["penguin"], []), new emojis_Emoji("🐦", "bird", "Nature", ["bird"], []), new emojis_Emoji("🐤", "baby chick", "Nature", ["baby_chick"], []), new emojis_Emoji("🐣", "hatching chick", "Nature", ["hatching_chick"], []), new emojis_Emoji("🐥", "front-facing baby chick", "Nature", ["hatched_chick"], []), new emojis_Emoji("🦆", "duck", "Nature", ["duck"], []), new emojis_Emoji("🦅", "eagle", "Nature", ["eagle"], []), new emojis_Emoji("🦉", "owl", "Nature", ["owl"], []), new emojis_Emoji("🦇", "bat", "Nature", ["bat"], []), new emojis_Emoji("🐺", "wolf face", "Nature", ["wolf"], []), new emojis_Emoji("🐗", "boar", "Nature", ["boar"], []), new emojis_Emoji("🐴", "horse face", "Nature", ["horse"], []), new emojis_Emoji("🦄", "unicorn face", "Nature", ["unicorn"], []), new emojis_Emoji("🐝", "honeybee", "Nature", ["bee", "honeybee"], []), new emojis_Emoji("🐛", "bug", "Nature", ["bug"], []), new emojis_Emoji("🦋", "butterfly", "Nature", ["butterfly"], []), new emojis_Emoji("🐌", "snail", "Nature", ["snail"], ["slow"]), new emojis_Emoji("🐚", "spiral shell", "Nature", ["shell"], ["sea", "beach"]), new emojis_Emoji("🐞", "lady beetle", "Nature", ["beetle"], ["bug"]), new emojis_Emoji("🐜", "ant", "Nature", ["ant"], []), new emojis_Emoji("🕷", "spider", "Nature", ["spider"], []), new emojis_Emoji("🕸", "spider web", "Nature", ["spider_web"], []), new emojis_Emoji("🐢", "turtle", "Nature", ["turtle"], ["slow"]), new emojis_Emoji("🐍", "snake", "Nature", ["snake"], []), new emojis_Emoji("🦎", "lizard", "Nature", ["lizard"], []), new emojis_Emoji("🦂", "scorpion", "Nature", ["scorpion"], []), new emojis_Emoji("🦀", "crab", "Nature", ["crab"], []), new emojis_Emoji("🦑", "squid", "Nature", ["squid"], []), new emojis_Emoji("🐙", "octopus", "Nature", ["octopus"], []), new emojis_Emoji("🦐", "shrimp", "Nature", ["shrimp"], []), new emojis_Emoji("🐠", "tropical fish", "Nature", ["tropical_fish"], []), new emojis_Emoji("🐟", "fish", "Nature", ["fish"], []), new emojis_Emoji("🐡", "blowfish", "Nature", ["blowfish"], []), new emojis_Emoji("🐬", "dolphin", "Nature", ["dolphin", "flipper"], []), new emojis_Emoji("🦈", "shark", "Nature", ["shark"], []), new emojis_Emoji("🐳", "spouting whale", "Nature", ["whale"], ["sea"]), new emojis_Emoji("🐋", "whale", "Nature", ["whale2"], []), new emojis_Emoji("🐊", "crocodile", "Nature", ["crocodile"], []), new emojis_Emoji("🐆", "leopard", "Nature", ["leopard"], []), new emojis_Emoji("🐅", "tiger", "Nature", ["tiger2"], []), new emojis_Emoji("🐃", "water buffalo", "Nature", ["water_buffalo"], []), new emojis_Emoji("🐂", "ox", "Nature", ["ox"], []), new emojis_Emoji("🐄", "cow", "Nature", ["cow2"], []), new emojis_Emoji("🦌", "deer", "Nature", ["deer"], []), new emojis_Emoji("🐪", "camel", "Nature", ["dromedary_camel"], ["desert"]), new emojis_Emoji("🐫", "two-hump camel", "Nature", ["camel"], []), new emojis_Emoji("🐘", "elephant", "Nature", ["elephant"], []), new emojis_Emoji("🦏", "rhinoceros", "Nature", ["rhinoceros"], []), new emojis_Emoji("🦍", "gorilla", "Nature", ["gorilla"], []), new emojis_Emoji("🐎", "horse", "Nature", ["racehorse"], ["speed"]), new emojis_Emoji("🐖", "pig", "Nature", ["pig2"], []), new emojis_Emoji("🐐", "goat", "Nature", ["goat"], []), new emojis_Emoji("🐏", "ram", "Nature", ["ram"], []), new emojis_Emoji("🐑", "sheep", "Nature", ["sheep"], []), new emojis_Emoji("🐕", "dog", "Nature", ["dog2"], []), new emojis_Emoji("🐩", "poodle", "Nature", ["poodle"], ["dog"]), new emojis_Emoji("🐈", "cat", "Nature", ["cat2"], []), new emojis_Emoji("🐓", "rooster", "Nature", ["rooster"], []), new emojis_Emoji("🦃", "turkey", "Nature", ["turkey"], ["thanksgiving"]), new emojis_Emoji("🕊", "dove", "Nature", ["dove"], ["peace"]), new emojis_Emoji("🐇", "rabbit", "Nature", ["rabbit2"], []), new emojis_Emoji("🐁", "mouse", "Nature", ["mouse2"], []), new emojis_Emoji("🐀", "rat", "Nature", ["rat"], []), new emojis_Emoji("🐿", "chipmunk", "Nature", ["chipmunk"], []), new emojis_Emoji("🐾", "paw prints", "Nature", ["feet", "paw_prints"], []), new emojis_Emoji("🐉", "dragon", "Nature", ["dragon"], []), new emojis_Emoji("🐲", "dragon face", "Nature", ["dragon_face"], []), new emojis_Emoji("🌵", "cactus", "Nature", ["cactus"], []), new emojis_Emoji("🎄", "Christmas tree", "Nature", ["christmas_tree"], []), new emojis_Emoji("🌲", "evergreen tree", "Nature", ["evergreen_tree"], ["wood"]), new emojis_Emoji("🌳", "deciduous tree", "Nature", ["deciduous_tree"], ["wood"]), new emojis_Emoji("🌴", "palm tree", "Nature", ["palm_tree"], []), new emojis_Emoji("🌱", "seedling", "Nature", ["seedling"], ["plant"]), new emojis_Emoji("🌿", "herb", "Nature", ["herb"], []), new emojis_Emoji("☘️", "shamrock", "Nature", ["shamrock"], []), new emojis_Emoji("🍀", "four leaf clover", "Nature", ["four_leaf_clover"], ["luck"]), new emojis_Emoji("🎍", "pine decoration", "Nature", ["bamboo"], []), new emojis_Emoji("🎋", "tanabata tree", "Nature", ["tanabata_tree"], []), new emojis_Emoji("🍃", "leaf fluttering in wind", "Nature", ["leaves"], ["leaf"]), new emojis_Emoji("🍂", "fallen leaf", "Nature", ["fallen_leaf"], ["autumn"]), new emojis_Emoji("🍁", "maple leaf", "Nature", ["maple_leaf"], ["canada"]), new emojis_Emoji("🍄", "mushroom", "Nature", ["mushroom"], []), new emojis_Emoji("🌾", "sheaf of rice", "Nature", ["ear_of_rice"], []), new emojis_Emoji("💐", "bouquet", "Nature", ["bouquet"], ["flowers"]), new emojis_Emoji("🌷", "tulip", "Nature", ["tulip"], ["flower"]), new emojis_Emoji("🌹", "rose", "Nature", ["rose"], ["flower"]), new emojis_Emoji("🥀", "wilted flower", "Nature", ["wilted_flower"], []), new emojis_Emoji("🌻", "sunflower", "Nature", ["sunflower"], []), new emojis_Emoji("🌼", "blossom", "Nature", ["blossom"], []), new emojis_Emoji("🌸", "cherry blossom", "Nature", ["cherry_blossom"], ["flower", "spring"]), new emojis_Emoji("🌺", "hibiscus", "Nature", ["hibiscus"], []), new emojis_Emoji("🌎", "globe showing Americas", "Nature", ["earth_americas"], ["globe", "world", "international"]), new emojis_Emoji("🌍", "globe showing Europe-Africa", "Nature", ["earth_africa"], ["globe", "world", "international"]), new emojis_Emoji("🌏", "globe showing Asia-Australia", "Nature", ["earth_asia"], ["globe", "world", "international"]), new emojis_Emoji("🌕", "full moon", "Nature", ["full_moon"], []), new emojis_Emoji("🌖", "waning gibbous moon", "Nature", ["waning_gibbous_moon"], []), new emojis_Emoji("🌗", "last quarter moon", "Nature", ["last_quarter_moon"], []), new emojis_Emoji("🌘", "waning crescent moon", "Nature", ["waning_crescent_moon"], []), new emojis_Emoji("🌑", "new moon", "Nature", ["new_moon"], []), new emojis_Emoji("🌒", "waxing crescent moon", "Nature", ["waxing_crescent_moon"], []), new emojis_Emoji("🌓", "first quarter moon", "Nature", ["first_quarter_moon"], []), new emojis_Emoji("🌔", "waxing gibbous moon", "Nature", ["moon", "waxing_gibbous_moon"], []), new emojis_Emoji("🌚", "new moon face", "Nature", ["new_moon_with_face"], []), new emojis_Emoji("🌝", "full moon with face", "Nature", ["full_moon_with_face"], []), new emojis_Emoji("🌞", "sun with face", "Nature", ["sun_with_face"], ["summer"]), new emojis_Emoji("🌛", "first quarter moon with face", "Nature", ["first_quarter_moon_with_face"], []), new emojis_Emoji("🌜", "last quarter moon with face", "Nature", ["last_quarter_moon_with_face"], []), new emojis_Emoji("🌙", "crescent moon", "Nature", ["crescent_moon"], ["night"]), new emojis_Emoji("💫", "dizzy", "Nature", ["dizzy"], ["star"]), new emojis_Emoji("⭐️", "white medium star", "Nature", ["star"], []), new emojis_Emoji("🌟", "glowing star", "Nature", ["star2"], []), new emojis_Emoji("✨", "sparkles", "Nature", ["sparkles"], ["shiny"]), new emojis_Emoji("⚡️", "high voltage", "Nature", ["zap"], ["lightning", "thunder"]), new emojis_Emoji("🔥", "fire", "Nature", ["fire"], ["burn"]), new emojis_Emoji("💥", "collision", "Nature", ["boom", "collision"], ["explode"]), new emojis_Emoji("☄", "comet", "Nature", ["comet"], []), new emojis_Emoji("☀️", "sun", "Nature", ["sunny"], ["weather"]), new emojis_Emoji("🌤", "sun behind small cloud", "Nature", ["sun_behind_small_cloud"], []), new emojis_Emoji("⛅️", "sun behind cloud", "Nature", ["partly_sunny"], ["weather", "cloud"]), new emojis_Emoji("🌥", "sun behind large cloud", "Nature", ["sun_behind_large_cloud"], []), new emojis_Emoji("🌦", "sun behind rain cloud", "Nature", ["sun_behind_rain_cloud"], []), new emojis_Emoji("🌈", "rainbow", "Nature", ["rainbow"], []), new emojis_Emoji("☁️", "cloud", "Nature", ["cloud"], []), new emojis_Emoji("🌧", "cloud with rain", "Nature", ["cloud_with_rain"], []), new emojis_Emoji("⛈", "cloud with lightning and rain", "Nature", ["cloud_with_lightning_and_rain"], []), new emojis_Emoji("🌩", "cloud with lightning", "Nature", ["cloud_with_lightning"], []), new emojis_Emoji("🌨", "cloud with snow", "Nature", ["cloud_with_snow"], []), new emojis_Emoji("☃️", "snowman", "Nature", ["snowman_with_snow"], ["winter", "christmas"]), new emojis_Emoji("⛄️", "snowman without snow", "Nature", ["snowman"], ["winter"]), new emojis_Emoji("❄️", "snowflake", "Nature", ["snowflake"], ["winter", "cold", "weather"]), new emojis_Emoji("🌬", "wind face", "Nature", ["wind_face"], []), new emojis_Emoji("💨", "dashing away", "Nature", ["dash"], ["wind", "blow", "fast"]), new emojis_Emoji("🌪", "tornado", "Nature", ["tornado"], []), new emojis_Emoji("🌫", "fog", "Nature", ["fog"], []), new emojis_Emoji("🌊", "water wave", "Nature", ["ocean"], ["sea"]), new emojis_Emoji("💧", "droplet", "Nature", ["droplet"], ["water"]), new emojis_Emoji("💦", "sweat droplets", "Nature", ["sweat_drops"], ["water", "workout"]), new emojis_Emoji("☔️", "umbrella with rain drops", "Nature", ["umbrella"], ["rain", "weather"]), new emojis_Emoji("🍏", "green apple", "Foods", ["green_apple"], ["fruit"]), new emojis_Emoji("🍎", "red apple", "Foods", ["apple"], []), new emojis_Emoji("🍐", "pear", "Foods", ["pear"], []), new emojis_Emoji("🍊", "tangerine", "Foods", ["tangerine", "orange", "mandarin"], []), new emojis_Emoji("🍋", "lemon", "Foods", ["lemon"], []), new emojis_Emoji("🍌", "banana", "Foods", ["banana"], ["fruit"]), new emojis_Emoji("🍉", "watermelon", "Foods", ["watermelon"], []), new emojis_Emoji("🍇", "grapes", "Foods", ["grapes"], []), new emojis_Emoji("🍓", "strawberry", "Foods", ["strawberry"], ["fruit"]), new emojis_Emoji("🍈", "melon", "Foods", ["melon"], []), new emojis_Emoji("🍒", "cherries", "Foods", ["cherries"], ["fruit"]), new emojis_Emoji("🍑", "peach", "Foods", ["peach"], []), new emojis_Emoji("🍍", "pineapple", "Foods", ["pineapple"], []), new emojis_Emoji("🥝", "kiwi fruit", "Foods", ["kiwi_fruit"], []), new emojis_Emoji("🥑", "avocado", "Foods", ["avocado"], []), new emojis_Emoji("🍅", "tomato", "Foods", ["tomato"], []), new emojis_Emoji("🍆", "eggplant", "Foods", ["eggplant"], ["aubergine"]), new emojis_Emoji("🥒", "cucumber", "Foods", ["cucumber"], []), new emojis_Emoji("🥕", "carrot", "Foods", ["carrot"], []), new emojis_Emoji("🌽", "ear of corn", "Foods", ["corn"], []), new emojis_Emoji("🌶", "hot pepper", "Foods", ["hot_pepper"], ["spicy"]), new emojis_Emoji("🥔", "potato", "Foods", ["potato"], []), new emojis_Emoji("🍠", "roasted sweet potato", "Foods", ["sweet_potato"], []), new emojis_Emoji("🌰", "chestnut", "Foods", ["chestnut"], []), new emojis_Emoji("🥜", "peanuts", "Foods", ["peanuts"], []), new emojis_Emoji("🍯", "honey pot", "Foods", ["honey_pot"], []), new emojis_Emoji("🥐", "croissant", "Foods", ["croissant"], []), new emojis_Emoji("🍞", "bread", "Foods", ["bread"], ["toast"]), new emojis_Emoji("🥖", "baguette bread", "Foods", ["baguette_bread"], []), new emojis_Emoji("🧀", "cheese wedge", "Foods", ["cheese"], []), new emojis_Emoji("🥚", "egg", "Foods", ["egg"], []), new emojis_Emoji("🍳", "cooking", "Foods", ["fried_egg"], ["breakfast"]), new emojis_Emoji("🥓", "bacon", "Foods", ["bacon"], []), new emojis_Emoji("🥞", "pancakes", "Foods", ["pancakes"], []), new emojis_Emoji("🍤", "fried shrimp", "Foods", ["fried_shrimp"], ["tempura"]), new emojis_Emoji("🍗", "poultry leg", "Foods", ["poultry_leg"], ["meat", "chicken"]), new emojis_Emoji("🍖", "meat on bone", "Foods", ["meat_on_bone"], []), new emojis_Emoji("🍕", "pizza", "Foods", ["pizza"], []), new emojis_Emoji("🌭", "hot dog", "Foods", ["hotdog"], []), new emojis_Emoji("🍔", "hamburger", "Foods", ["hamburger"], ["burger"]), new emojis_Emoji("🍟", "french fries", "Foods", ["fries"], []), new emojis_Emoji("🥙", "stuffed flatbread", "Foods", ["stuffed_flatbread"], []), new emojis_Emoji("🌮", "taco", "Foods", ["taco"], []), new emojis_Emoji("🌯", "burrito", "Foods", ["burrito"], []), new emojis_Emoji("🥗", "green salad", "Foods", ["green_salad"], []), new emojis_Emoji("🥘", "shallow pan of food", "Foods", ["shallow_pan_of_food"], ["paella", "curry"]), new emojis_Emoji("🍝", "spaghetti", "Foods", ["spaghetti"], ["pasta"]), new emojis_Emoji("🍜", "steaming bowl", "Foods", ["ramen"], ["noodle"]), new emojis_Emoji("🍲", "pot of food", "Foods", ["stew"], []), new emojis_Emoji("🍥", "fish cake with swirl", "Foods", ["fish_cake"], []), new emojis_Emoji("🍣", "sushi", "Foods", ["sushi"], []), new emojis_Emoji("🍱", "bento box", "Foods", ["bento"], []), new emojis_Emoji("🍛", "curry rice", "Foods", ["curry"], []), new emojis_Emoji("🍚", "cooked rice", "Foods", ["rice"], []), new emojis_Emoji("🍙", "rice ball", "Foods", ["rice_ball"], []), new emojis_Emoji("🍘", "rice cracker", "Foods", ["rice_cracker"], []), new emojis_Emoji("🍢", "oden", "Foods", ["oden"], []), new emojis_Emoji("🍡", "dango", "Foods", ["dango"], []), new emojis_Emoji("🍧", "shaved ice", "Foods", ["shaved_ice"], []), new emojis_Emoji("🍨", "ice cream", "Foods", ["ice_cream"], []), new emojis_Emoji("🍦", "soft ice cream", "Foods", ["icecream"], []), new emojis_Emoji("🍰", "shortcake", "Foods", ["cake"], ["dessert"]), new emojis_Emoji("🎂", "birthday cake", "Foods", ["birthday"], ["party"]), new emojis_Emoji("🍮", "custard", "Foods", ["custard"], []), new emojis_Emoji("🍭", "lollipop", "Foods", ["lollipop"], []), new emojis_Emoji("🍬", "candy", "Foods", ["candy"], ["sweet"]), new emojis_Emoji("🍫", "chocolate bar", "Foods", ["chocolate_bar"], []), new emojis_Emoji("🍿", "popcorn", "Foods", ["popcorn"], []), new emojis_Emoji("🍩", "doughnut", "Foods", ["doughnut"], []), new emojis_Emoji("🍪", "cookie", "Foods", ["cookie"], []), new emojis_Emoji("🥛", "glass of milk", "Foods", ["milk_glass"], []), new emojis_Emoji("🍼", "baby bottle", "Foods", ["baby_bottle"], ["milk"]), new emojis_Emoji("☕️", "hot beverage", "Foods", ["coffee"], ["cafe", "espresso"]), new emojis_Emoji("🍵", "teacup without handle", "Foods", ["tea"], ["green", "breakfast"]), new emojis_Emoji("🍶", "sake", "Foods", ["sake"], []), new emojis_Emoji("🍺", "beer mug", "Foods", ["beer"], ["drink"]), new emojis_Emoji("🍻", "clinking beer mugs", "Foods", ["beers"], ["drinks"]), new emojis_Emoji("🥂", "clinking glasses", "Foods", ["clinking_glasses"], ["cheers", "toast"]), new emojis_Emoji("🍷", "wine glass", "Foods", ["wine_glass"], []), new emojis_Emoji("🥃", "tumbler glass", "Foods", ["tumbler_glass"], ["whisky"]), new emojis_Emoji("🍸", "cocktail glass", "Foods", ["cocktail"], ["drink"]), new emojis_Emoji("🍹", "tropical drink", "Foods", ["tropical_drink"], ["summer", "vacation"]), new emojis_Emoji("🍾", "bottle with popping cork", "Foods", ["champagne"], ["bottle", "bubbly", "celebration"]), new emojis_Emoji("🥄", "spoon", "Foods", ["spoon"], []), new emojis_Emoji("🍴", "fork and knife", "Foods", ["fork_and_knife"], ["cutlery"]), new emojis_Emoji("🍽", "fork and knife with plate", "Foods", ["plate_with_cutlery"], ["dining", "dinner"]), new emojis_Emoji("⚽️", "soccer ball", "Activity", ["soccer"], ["sports"]), new emojis_Emoji("🏀", "basketball", "Activity", ["basketball"], ["sports"]), new emojis_Emoji("🏈", "american football", "Activity", ["football"], ["sports"]), new emojis_Emoji("⚾️", "baseball", "Activity", ["baseball"], ["sports"]), new emojis_Emoji("🎾", "tennis", "Activity", ["tennis"], ["sports"]), new emojis_Emoji("🏐", "volleyball", "Activity", ["volleyball"], []), new emojis_Emoji("🏉", "rugby football", "Activity", ["rugby_football"], []), new emojis_Emoji("🎱", "pool 8 ball", "Activity", ["8ball"], ["pool", "billiards"]), new emojis_Emoji("🏓", "ping pong", "Activity", ["ping_pong"], []), new emojis_Emoji("🏸", "badminton", "Activity", ["badminton"], []), new emojis_Emoji("🥅", "goal net", "Activity", ["goal_net"], []), new emojis_Emoji("🏒", "ice hockey", "Activity", ["ice_hockey"], []), new emojis_Emoji("🏑", "field hockey", "Activity", ["field_hockey"], []), new emojis_Emoji("🏏", "cricket", "Activity", ["cricket"], []), new emojis_Emoji("⛳️", "flag in hole", "Activity", ["golf"], []), new emojis_Emoji("🏹", "bow and arrow", "Activity", ["bow_and_arrow"], ["archery"]), new emojis_Emoji("🎣", "fishing pole", "Activity", ["fishing_pole_and_fish"], []), new emojis_Emoji("🥊", "boxing glove", "Activity", ["boxing_glove"], []), new emojis_Emoji("🥋", "martial arts uniform", "Activity", ["martial_arts_uniform"], []), new emojis_Emoji("⛸", "ice skate", "Activity", ["ice_skate"], ["skating"]), new emojis_Emoji("🎿", "skis", "Activity", ["ski"], []), new emojis_Emoji("⛷", "skier", "Activity", ["skier"], []), new emojis_Emoji("🏂", "snowboarder", "Activity", ["snowboarder"], []), new emojis_Emoji("🏋️‍♀️", "woman lifting weights", "Activity", ["weight_lifting_woman"], ["gym", "workout"]), new emojis_Emoji("🏋", "person lifting weights", "Activity", ["weight_lifting_man"], ["gym", "workout"]), new emojis_Emoji("🤺", "person fencing", "Activity", ["person_fencing"], []), new emojis_Emoji("🤼‍♀", "women wrestling", "Activity", ["women_wrestling"], []), new emojis_Emoji("🤼‍♂", "men wrestling", "Activity", ["men_wrestling"], []), new emojis_Emoji("🤸‍♀", "woman cartwheeling", "Activity", ["woman_cartwheeling"], []), new emojis_Emoji("🤸‍♂", "man cartwheeling", "Activity", ["man_cartwheeling"], []), new emojis_Emoji("⛹️‍♀️", "woman bouncing ball", "Activity", ["basketball_woman"], []), new emojis_Emoji("⛹", "person bouncing ball", "Activity", ["basketball_man"], []), new emojis_Emoji("🤾‍♀", "woman playing handball", "Activity", ["woman_playing_handball"], []), new emojis_Emoji("🤾‍♂", "man playing handball", "Activity", ["man_playing_handball"], []), new emojis_Emoji("🏌️‍♀️", "woman golfing", "Activity", ["golfing_woman"], []), new emojis_Emoji("🏌", "person golfing", "Activity", ["golfing_man"], []), new emojis_Emoji("🏄‍♀", "woman surfing", "Activity", ["surfing_woman"], []), new emojis_Emoji("🏄", "person surfing", "Activity", ["surfing_man", "surfer"], []), new emojis_Emoji("🏊‍♀", "woman swimming", "Activity", ["swimming_woman"], []), new emojis_Emoji("🏊", "person swimming", "Activity", ["swimming_man", "swimmer"], []), new emojis_Emoji("🤽‍♀", "woman playing water polo", "Activity", ["woman_playing_water_polo"], []), new emojis_Emoji("🤽‍♂", "man playing water polo", "Activity", ["man_playing_water_polo"], []), new emojis_Emoji("🚣‍♀", "woman rowing boat", "Activity", ["rowing_woman"], []), new emojis_Emoji("🚣", "person rowing boat", "Activity", ["rowing_man", "rowboat"], []), new emojis_Emoji("🏇", "horse racing", "Activity", ["horse_racing"], []), new emojis_Emoji("🚴‍♀", "woman biking", "Activity", ["biking_woman"], []), new emojis_Emoji("🚴", "person biking", "Activity", ["biking_man", "bicyclist"], []), new emojis_Emoji("🚵‍♀", "woman mountain biking", "Activity", ["mountain_biking_woman"], []), new emojis_Emoji("🚵", "person mountain biking", "Activity", ["mountain_biking_man", "mountain_bicyclist"], []), new emojis_Emoji("🎽", "running shirt", "Activity", ["running_shirt_with_sash"], ["marathon"]), new emojis_Emoji("🏅", "sports medal", "Activity", ["medal_sports"], ["gold", "winner"]), new emojis_Emoji("🎖", "military medal", "Activity", ["medal_military"], []), new emojis_Emoji("🥇", "1st place medal", "Activity", ["1st_place_medal"], ["gold"]), new emojis_Emoji("🥈", "2nd place medal", "Activity", ["2nd_place_medal"], ["silver"]), new emojis_Emoji("🥉", "3rd place medal", "Activity", ["3rd_place_medal"], ["bronze"]), new emojis_Emoji("🏆", "trophy", "Activity", ["trophy"], ["award", "contest", "winner"]), new emojis_Emoji("🏵", "rosette", "Activity", ["rosette"], []), new emojis_Emoji("🎗", "reminder ribbon", "Activity", ["reminder_ribbon"], []), new emojis_Emoji("🎫", "ticket", "Activity", ["ticket"], []), new emojis_Emoji("🎟", "admission tickets", "Activity", ["tickets"], []), new emojis_Emoji("🎪", "circus tent", "Activity", ["circus_tent"], []), new emojis_Emoji("🤹‍♀", "woman juggling", "Activity", ["woman_juggling"], []), new emojis_Emoji("🤹‍♂", "man juggling", "Activity", ["man_juggling"], []), new emojis_Emoji("🎭", "performing arts", "Activity", ["performing_arts"], ["theater", "drama"]), new emojis_Emoji("🎨", "artist palette", "Activity", ["art"], ["design", "paint"]), new emojis_Emoji("🎬", "clapper board", "Activity", ["clapper"], ["film"]), new emojis_Emoji("🎤", "microphone", "Activity", ["microphone"], ["sing"]), new emojis_Emoji("🎧", "headphone", "Activity", ["headphones"], ["music", "earphones"]), new emojis_Emoji("🎼", "musical score", "Activity", ["musical_score"], []), new emojis_Emoji("🎹", "musical keyboard", "Activity", ["musical_keyboard"], ["piano"]), new emojis_Emoji("🥁", "drum", "Activity", ["drum"], []), new emojis_Emoji("🎷", "saxophone", "Activity", ["saxophone"], []), new emojis_Emoji("🎺", "trumpet", "Activity", ["trumpet"], []), new emojis_Emoji("🎸", "guitar", "Activity", ["guitar"], ["rock"]), new emojis_Emoji("🎻", "violin", "Activity", ["violin"], []), new emojis_Emoji("🎲", "game die", "Activity", ["game_die"], ["dice", "gambling"]), new emojis_Emoji("🎯", "direct hit", "Activity", ["dart"], ["target"]), new emojis_Emoji("🎳", "bowling", "Activity", ["bowling"], []), new emojis_Emoji("🎮", "video game", "Activity", ["video_game"], ["play", "controller", "console"]), new emojis_Emoji("🎰", "slot machine", "Activity", ["slot_machine"], []), new emojis_Emoji("🚗", "automobile", "Places", ["car", "red_car"], []), new emojis_Emoji("🚕", "taxi", "Places", ["taxi"], []), new emojis_Emoji("🚙", "sport utility vehicle", "Places", ["blue_car"], []), new emojis_Emoji("🚌", "bus", "Places", ["bus"], []), new emojis_Emoji("🚎", "trolleybus", "Places", ["trolleybus"], []), new emojis_Emoji("🏎", "racing car", "Places", ["racing_car"], []), new emojis_Emoji("🚓", "police car", "Places", ["police_car"], []), new emojis_Emoji("🚑", "ambulance", "Places", ["ambulance"], []), new emojis_Emoji("🚒", "fire engine", "Places", ["fire_engine"], []), new emojis_Emoji("🚐", "minibus", "Places", ["minibus"], []), new emojis_Emoji("🚚", "delivery truck", "Places", ["truck"], []), new emojis_Emoji("🚛", "articulated lorry", "Places", ["articulated_lorry"], []), new emojis_Emoji("🚜", "tractor", "Places", ["tractor"], []), new emojis_Emoji("🛴", "kick scooter", "Places", ["kick_scooter"], []), new emojis_Emoji("🚲", "bicycle", "Places", ["bike"], ["bicycle"]), new emojis_Emoji("🛵", "motor scooter", "Places", ["motor_scooter"], []), new emojis_Emoji("🏍", "motorcycle", "Places", ["motorcycle"], []), new emojis_Emoji("🚨", "police car light", "Places", ["rotating_light"], ["911", "emergency"]), new emojis_Emoji("🚔", "oncoming police car", "Places", ["oncoming_police_car"], []), new emojis_Emoji("🚍", "oncoming bus", "Places", ["oncoming_bus"], []), new emojis_Emoji("🚘", "oncoming automobile", "Places", ["oncoming_automobile"], []), new emojis_Emoji("🚖", "oncoming taxi", "Places", ["oncoming_taxi"], []), new emojis_Emoji("🚡", "aerial tramway", "Places", ["aerial_tramway"], []), new emojis_Emoji("🚠", "mountain cableway", "Places", ["mountain_cableway"], []), new emojis_Emoji("🚟", "suspension railway", "Places", ["suspension_railway"], []), new emojis_Emoji("🚃", "railway car", "Places", ["railway_car"], []), new emojis_Emoji("🚋", "tram car", "Places", ["train"], []), new emojis_Emoji("🚞", "mountain railway", "Places", ["mountain_railway"], []), new emojis_Emoji("🚝", "monorail", "Places", ["monorail"], []), new emojis_Emoji("🚄", "high-speed train", "Places", ["bullettrain_side"], ["train"]), new emojis_Emoji("🚅", "high-speed train with bullet nose", "Places", ["bullettrain_front"], ["train"]), new emojis_Emoji("🚈", "light rail", "Places", ["light_rail"], []), new emojis_Emoji("🚂", "locomotive", "Places", ["steam_locomotive"], ["train"]), new emojis_Emoji("🚆", "train", "Places", ["train2"], []), new emojis_Emoji("🚇", "metro", "Places", ["metro"], []), new emojis_Emoji("🚊", "tram", "Places", ["tram"], []), new emojis_Emoji("🚉", "station", "Places", ["station"], []), new emojis_Emoji("🚁", "helicopter", "Places", ["helicopter"], []), new emojis_Emoji("🛩", "small airplane", "Places", ["small_airplane"], ["flight"]), new emojis_Emoji("✈️", "airplane", "Places", ["airplane"], ["flight"]), new emojis_Emoji("🛫", "airplane departure", "Places", ["flight_departure"], []), new emojis_Emoji("🛬", "airplane arrival", "Places", ["flight_arrival"], []), new emojis_Emoji("🚀", "rocket", "Places", ["rocket"], ["ship", "launch"]), new emojis_Emoji("🛰", "satellite", "Places", ["artificial_satellite"], ["orbit", "space"]), new emojis_Emoji("💺", "seat", "Places", ["seat"], []), new emojis_Emoji("🛶", "canoe", "Places", ["canoe"], []), new emojis_Emoji("⛵️", "sailboat", "Places", ["boat", "sailboat"], []), new emojis_Emoji("🛥", "motor boat", "Places", ["motor_boat"], []), new emojis_Emoji("🚤", "speedboat", "Places", ["speedboat"], ["ship"]), new emojis_Emoji("🛳", "passenger ship", "Places", ["passenger_ship"], ["cruise"]), new emojis_Emoji("⛴", "ferry", "Places", ["ferry"], []), new emojis_Emoji("🚢", "ship", "Places", ["ship"], []), new emojis_Emoji("⚓️", "anchor", "Places", ["anchor"], ["ship"]), new emojis_Emoji("🚧", "construction", "Places", ["construction"], ["wip"]), new emojis_Emoji("⛽️", "fuel pump", "Places", ["fuelpump"], []), new emojis_Emoji("🚏", "bus stop", "Places", ["busstop"], []), new emojis_Emoji("🚦", "vertical traffic light", "Places", ["vertical_traffic_light"], ["semaphore"]), new emojis_Emoji("🚥", "horizontal traffic light", "Places", ["traffic_light"], []), new emojis_Emoji("🗺", "world map", "Places", ["world_map"], ["travel"]), new emojis_Emoji("🗿", "moai", "Places", ["moyai"], ["stone"]), new emojis_Emoji("🗽", "Statue of Liberty", "Places", ["statue_of_liberty"], []), new emojis_Emoji("⛲️", "fountain", "Places", ["fountain"], []), new emojis_Emoji("🗼", "Tokyo tower", "Places", ["tokyo_tower"], []), new emojis_Emoji("🏰", "castle", "Places", ["european_castle"], []), new emojis_Emoji("🏯", "Japanese castle", "Places", ["japanese_castle"], []), new emojis_Emoji("🏟", "stadium", "Places", ["stadium"], []), new emojis_Emoji("🎡", "ferris wheel", "Places", ["ferris_wheel"], []), new emojis_Emoji("🎢", "roller coaster", "Places", ["roller_coaster"], []), new emojis_Emoji("🎠", "carousel horse", "Places", ["carousel_horse"], []), new emojis_Emoji("⛱", "umbrella on ground", "Places", ["parasol_on_ground"], ["beach_umbrella"]), new emojis_Emoji("🏖", "beach with umbrella", "Places", ["beach_umbrella"], []), new emojis_Emoji("🏝", "desert island", "Places", ["desert_island"], []), new emojis_Emoji("⛰", "mountain", "Places", ["mountain"], []), new emojis_Emoji("🏔", "snow-capped mountain", "Places", ["mountain_snow"], []), new emojis_Emoji("🗻", "mount fuji", "Places", ["mount_fuji"], []), new emojis_Emoji("🌋", "volcano", "Places", ["volcano"], []), new emojis_Emoji("🏜", "desert", "Places", ["desert"], []), new emojis_Emoji("🏕", "camping", "Places", ["camping"], []), new emojis_Emoji("⛺️", "tent", "Places", ["tent"], ["camping"]), new emojis_Emoji("🛤", "railway track", "Places", ["railway_track"], []), new emojis_Emoji("🛣", "motorway", "Places", ["motorway"], []), new emojis_Emoji("🏗", "building construction", "Places", ["building_construction"], []), new emojis_Emoji("🏭", "factory", "Places", ["factory"], []), new emojis_Emoji("🏠", "house", "Places", ["house"], []), new emojis_Emoji("🏡", "house with garden", "Places", ["house_with_garden"], []), new emojis_Emoji("🏘", "house", "Places", ["houses"], []), new emojis_Emoji("🏚", "derelict house", "Places", ["derelict_house"], []), new emojis_Emoji("🏢", "office building", "Places", ["office"], []), new emojis_Emoji("🏬", "department store", "Places", ["department_store"], []), new emojis_Emoji("🏣", "Japanese post office", "Places", ["post_office"], []), new emojis_Emoji("🏤", "post office", "Places", ["european_post_office"], []), new emojis_Emoji("🏥", "hospital", "Places", ["hospital"], []), new emojis_Emoji("🏦", "bank", "Places", ["bank"], []), new emojis_Emoji("🏨", "hotel", "Places", ["hotel"], []), new emojis_Emoji("🏪", "convenience store", "Places", ["convenience_store"], []), new emojis_Emoji("🏫", "school", "Places", ["school"], []), new emojis_Emoji("🏩", "love hotel", "Places", ["love_hotel"], []), new emojis_Emoji("💒", "wedding", "Places", ["wedding"], ["marriage"]), new emojis_Emoji("🏛", "classical building", "Places", ["classical_building"], []), new emojis_Emoji("⛪️", "church", "Places", ["church"], []), new emojis_Emoji("🕌", "mosque", "Places", ["mosque"], []), new emojis_Emoji("🕍", "synagogue", "Places", ["synagogue"], []), new emojis_Emoji("🕋", "kaaba", "Places", ["kaaba"], []), new emojis_Emoji("⛩", "shinto shrine", "Places", ["shinto_shrine"], []), new emojis_Emoji("🗾", "map of Japan", "Places", ["japan"], []), new emojis_Emoji("🎑", "moon viewing ceremony", "Places", ["rice_scene"], []), new emojis_Emoji("🏞", "national park", "Places", ["national_park"], []), new emojis_Emoji("🌅", "sunrise", "Places", ["sunrise"], []), new emojis_Emoji("🌄", "sunrise over mountains", "Places", ["sunrise_over_mountains"], []), new emojis_Emoji("🌠", "shooting star", "Places", ["stars"], []), new emojis_Emoji("🎇", "sparkler", "Places", ["sparkler"], []), new emojis_Emoji("🎆", "fireworks", "Places", ["fireworks"], ["festival", "celebration"]), new emojis_Emoji("🌇", "sunset", "Places", ["city_sunrise"], []), new emojis_Emoji("🌆", "cityscape at dusk", "Places", ["city_sunset"], []), new emojis_Emoji("🏙", "cityscape", "Places", ["cityscape"], ["skyline"]), new emojis_Emoji("🌃", "night with stars", "Places", ["night_with_stars"], []), new emojis_Emoji("🌌", "milky way", "Places", ["milky_way"], []), new emojis_Emoji("🌉", "bridge at night", "Places", ["bridge_at_night"], []), new emojis_Emoji("🌁", "foggy", "Places", ["foggy"], ["karl"]), new emojis_Emoji("⌚️", "watch", "Objects", ["watch"], ["time"]), new emojis_Emoji("📱", "mobile phone", "Objects", ["iphone"], ["smartphone", "mobile"]), new emojis_Emoji("📲", "mobile phone with arrow", "Objects", ["calling"], ["call", "incoming"]), new emojis_Emoji("💻", "laptop computer", "Objects", ["computer"], ["desktop", "screen"]), new emojis_Emoji("⌨️", "keyboard", "Objects", ["keyboard"], []), new emojis_Emoji("🖥", "desktop computer", "Objects", ["desktop_computer"], []), new emojis_Emoji("🖨", "printer", "Objects", ["printer"], []), new emojis_Emoji("🖱", "computer mouse", "Objects", ["computer_mouse"], []), new emojis_Emoji("🖲", "trackball", "Objects", ["trackball"], []), new emojis_Emoji("🕹", "joystick", "Objects", ["joystick"], []), new emojis_Emoji("🗜", "clamp", "Objects", ["clamp"], []), new emojis_Emoji("💽", "computer disk", "Objects", ["minidisc"], []), new emojis_Emoji("💾", "floppy disk", "Objects", ["floppy_disk"], ["save"]), new emojis_Emoji("💿", "optical disk", "Objects", ["cd"], []), new emojis_Emoji("📀", "dvd", "Objects", ["dvd"], []), new emojis_Emoji("📼", "videocassette", "Objects", ["vhs"], []), new emojis_Emoji("📷", "camera", "Objects", ["camera"], ["photo"]), new emojis_Emoji("📸", "camera with flash", "Objects", ["camera_flash"], ["photo"]), new emojis_Emoji("📹", "video camera", "Objects", ["video_camera"], []), new emojis_Emoji("🎥", "movie camera", "Objects", ["movie_camera"], ["film", "video"]), new emojis_Emoji("📽", "film projector", "Objects", ["film_projector"], []), new emojis_Emoji("🎞", "film frames", "Objects", ["film_strip"], []), new emojis_Emoji("📞", "telephone receiver", "Objects", ["telephone_receiver"], ["phone", "call"]), new emojis_Emoji("☎️", "telephone", "Objects", ["phone", "telephone"], []), new emojis_Emoji("📟", "pager", "Objects", ["pager"], []), new emojis_Emoji("📠", "fax machine", "Objects", ["fax"], []), new emojis_Emoji("📺", "television", "Objects", ["tv"], []), new emojis_Emoji("📻", "radio", "Objects", ["radio"], ["podcast"]), new emojis_Emoji("🎙", "studio microphone", "Objects", ["studio_microphone"], ["podcast"]), new emojis_Emoji("🎚", "level slider", "Objects", ["level_slider"], []), new emojis_Emoji("🎛", "control knobs", "Objects", ["control_knobs"], []), new emojis_Emoji("⏱", "stopwatch", "Objects", ["stopwatch"], []), new emojis_Emoji("⏲", "timer clock", "Objects", ["timer_clock"], []), new emojis_Emoji("⏰", "alarm clock", "Objects", ["alarm_clock"], ["morning"]), new emojis_Emoji("🕰", "mantelpiece clock", "Objects", ["mantelpiece_clock"], []), new emojis_Emoji("⌛️", "hourglass", "Objects", ["hourglass"], ["time"]), new emojis_Emoji("⏳", "hourglass with flowing sand", "Objects", ["hourglass_flowing_sand"], ["time"]), new emojis_Emoji("📡", "satellite antenna", "Objects", ["satellite"], ["signal"]), new emojis_Emoji("🔋", "battery", "Objects", ["battery"], ["power"]), new emojis_Emoji("🔌", "electric plug", "Objects", ["electric_plug"], []), new emojis_Emoji("💡", "light bulb", "Objects", ["bulb"], ["idea", "light"]), new emojis_Emoji("🔦", "flashlight", "Objects", ["flashlight"], []), new emojis_Emoji("🕯", "candle", "Objects", ["candle"], []), new emojis_Emoji("🗑", "wastebasket", "Objects", ["wastebasket"], ["trash"]), new emojis_Emoji("🛢", "oil drum", "Objects", ["oil_drum"], []), new emojis_Emoji("💸", "money with wings", "Objects", ["money_with_wings"], ["dollar"]), new emojis_Emoji("💵", "dollar banknote", "Objects", ["dollar"], ["money"]), new emojis_Emoji("💴", "yen banknote", "Objects", ["yen"], []), new emojis_Emoji("💶", "euro banknote", "Objects", ["euro"], []), new emojis_Emoji("💷", "pound banknote", "Objects", ["pound"], []), new emojis_Emoji("💰", "money bag", "Objects", ["moneybag"], ["dollar", "cream"]), new emojis_Emoji("💳", "credit card", "Objects", ["credit_card"], ["subscription"]), new emojis_Emoji("💎", "gem stone", "Objects", ["gem"], ["diamond"]), new emojis_Emoji("⚖️", "balance scale", "Objects", ["balance_scale"], []), new emojis_Emoji("🔧", "wrench", "Objects", ["wrench"], ["tool"]), new emojis_Emoji("🔨", "hammer", "Objects", ["hammer"], ["tool"]), new emojis_Emoji("⚒", "hammer and pick", "Objects", ["hammer_and_pick"], []), new emojis_Emoji("🛠", "hammer and wrench", "Objects", ["hammer_and_wrench"], []), new emojis_Emoji("⛏", "pick", "Objects", ["pick"], []), new emojis_Emoji("🔩", "nut and bolt", "Objects", ["nut_and_bolt"], []), new emojis_Emoji("⚙️", "gear", "Objects", ["gear"], []), new emojis_Emoji("⛓", "chains", "Objects", ["chains"], []), new emojis_Emoji("🔫", "pistol", "Objects", ["gun"], ["shoot", "weapon"]), new emojis_Emoji("💣", "bomb", "Objects", ["bomb"], ["boom"]), new emojis_Emoji("🔪", "kitchen knife", "Objects", ["hocho", "knife"], ["cut", "chop"]), new emojis_Emoji("🗡", "dagger", "Objects", ["dagger"], []), new emojis_Emoji("⚔️", "crossed swords", "Objects", ["crossed_swords"], []), new emojis_Emoji("🛡", "shield", "Objects", ["shield"], []), new emojis_Emoji("🚬", "cigarette", "Objects", ["smoking"], ["cigarette"]), new emojis_Emoji("⚰️", "coffin", "Objects", ["coffin"], ["funeral"]), new emojis_Emoji("⚱️", "funeral urn", "Objects", ["funeral_urn"], []), new emojis_Emoji("🏺", "amphora", "Objects", ["amphora"], []), new emojis_Emoji("🔮", "crystal ball", "Objects", ["crystal_ball"], ["fortune"]), new emojis_Emoji("📿", "prayer beads", "Objects", ["prayer_beads"], []), new emojis_Emoji("💈", "barber pole", "Objects", ["barber"], []), new emojis_Emoji("⚗️", "alembic", "Objects", ["alembic"], []), new emojis_Emoji("🔭", "telescope", "Objects", ["telescope"], []), new emojis_Emoji("🔬", "microscope", "Objects", ["microscope"], ["science", "laboratory", "investigate"]), new emojis_Emoji("🕳", "hole", "Objects", ["hole"], []), new emojis_Emoji("💊", "pill", "Objects", ["pill"], ["health", "medicine"]), new emojis_Emoji("💉", "syringe", "Objects", ["syringe"], ["health", "hospital", "needle"]), new emojis_Emoji("🌡", "thermometer", "Objects", ["thermometer"], []), new emojis_Emoji("🚽", "toilet", "Objects", ["toilet"], ["wc"]), new emojis_Emoji("🚰", "potable water", "Objects", ["potable_water"], []), new emojis_Emoji("🚿", "shower", "Objects", ["shower"], ["bath"]), new emojis_Emoji("🛁", "bathtub", "Objects", ["bathtub"], []), new emojis_Emoji("🛀", "person taking bath", "Objects", ["bath"], ["shower"]), new emojis_Emoji("🛎", "bellhop bell", "Objects", ["bellhop_bell"], []), new emojis_Emoji("🔑", "key", "Objects", ["key"], ["lock", "password"]), new emojis_Emoji("🗝", "old key", "Objects", ["old_key"], []), new emojis_Emoji("🚪", "door", "Objects", ["door"], []), new emojis_Emoji("🛋", "couch and lamp", "Objects", ["couch_and_lamp"], []), new emojis_Emoji("🛏", "bed", "Objects", ["bed"], []), new emojis_Emoji("🛌", "person in bed", "Objects", ["sleeping_bed"], []), new emojis_Emoji("🖼", "framed picture", "Objects", ["framed_picture"], []), new emojis_Emoji("🛍", "shopping bags", "Objects", ["shopping"], ["bags"]), new emojis_Emoji("🛒", "shopping cart", "Objects", ["shopping_cart"], []), new emojis_Emoji("🎁", "wrapped gift", "Objects", ["gift"], ["present", "birthday", "christmas"]), new emojis_Emoji("🎈", "balloon", "Objects", ["balloon"], ["party", "birthday"]), new emojis_Emoji("🎏", "carp streamer", "Objects", ["flags"], []), new emojis_Emoji("🎀", "ribbon", "Objects", ["ribbon"], []), new emojis_Emoji("🎊", "confetti ball", "Objects", ["confetti_ball"], []), new emojis_Emoji("🎉", "party popper", "Objects", ["tada"], ["hooray", "party"]), new emojis_Emoji("🎎", "Japanese dolls", "Objects", ["dolls"], []), new emojis_Emoji("🏮", "red paper lantern", "Objects", ["izakaya_lantern", "lantern"], []), new emojis_Emoji("🎐", "wind chime", "Objects", ["wind_chime"], []), new emojis_Emoji("✉️", "envelope", "Objects", ["email", "envelope"], ["letter"]), new emojis_Emoji("📩", "envelope with arrow", "Objects", ["envelope_with_arrow"], []), new emojis_Emoji("📨", "incoming envelope", "Objects", ["incoming_envelope"], []), new emojis_Emoji("📧", "e-mail", "Objects", ["e-mail"], []), new emojis_Emoji("💌", "love letter", "Objects", ["love_letter"], ["email", "envelope"]), new emojis_Emoji("📥", "inbox tray", "Objects", ["inbox_tray"], []), new emojis_Emoji("📤", "outbox tray", "Objects", ["outbox_tray"], []), new emojis_Emoji("📦", "package", "Objects", ["package"], ["shipping"]), new emojis_Emoji("🏷", "label", "Objects", ["label"], ["tag"]), new emojis_Emoji("📪", "closed mailbox with lowered flag", "Objects", ["mailbox_closed"], []), new emojis_Emoji("📫", "closed mailbox with raised flag", "Objects", ["mailbox"], []), new emojis_Emoji("📬", "open mailbox with raised flag", "Objects", ["mailbox_with_mail"], []), new emojis_Emoji("📭", "open mailbox with lowered flag", "Objects", ["mailbox_with_no_mail"], []), new emojis_Emoji("📮", "postbox", "Objects", ["postbox"], []), new emojis_Emoji("📯", "postal horn", "Objects", ["postal_horn"], []), new emojis_Emoji("📜", "scroll", "Objects", ["scroll"], ["document"]), new emojis_Emoji("📃", "page with curl", "Objects", ["page_with_curl"], []), new emojis_Emoji("📄", "page facing up", "Objects", ["page_facing_up"], ["document"]), new emojis_Emoji("📑", "bookmark tabs", "Objects", ["bookmark_tabs"], []), new emojis_Emoji("📊", "bar chart", "Objects", ["bar_chart"], ["stats", "metrics"]), new emojis_Emoji("📈", "chart increasing", "Objects", ["chart_with_upwards_trend"], ["graph", "metrics"]), new emojis_Emoji("📉", "chart decreasing", "Objects", ["chart_with_downwards_trend"], ["graph", "metrics"]), new emojis_Emoji("🗒", "spiral notepad", "Objects", ["spiral_notepad"], []), new emojis_Emoji("🗓", "spiral calendar", "Objects", ["spiral_calendar"], []), new emojis_Emoji("📆", "tear-off calendar", "Objects", ["calendar"], ["schedule"]), new emojis_Emoji("📅", "calendar", "Objects", ["date"], ["calendar", "schedule"]), new emojis_Emoji("📇", "card index", "Objects", ["card_index"], []), new emojis_Emoji("🗃", "card file box", "Objects", ["card_file_box"], []), new emojis_Emoji("🗳", "ballot box with ballot", "Objects", ["ballot_box"], []), new emojis_Emoji("🗄", "file cabinet", "Objects", ["file_cabinet"], []), new emojis_Emoji("📋", "clipboard", "Objects", ["clipboard"], []), new emojis_Emoji("📁", "file folder", "Objects", ["file_folder"], ["directory"]), new emojis_Emoji("📂", "open file folder", "Objects", ["open_file_folder"], []), new emojis_Emoji("🗂", "card index dividers", "Objects", ["card_index_dividers"], []), new emojis_Emoji("🗞", "rolled-up newspaper", "Objects", ["newspaper_roll"], ["press"]), new emojis_Emoji("📰", "newspaper", "Objects", ["newspaper"], ["press"]), new emojis_Emoji("📓", "notebook", "Objects", ["notebook"], []), new emojis_Emoji("📔", "notebook with decorative cover", "Objects", ["notebook_with_decorative_cover"], []), new emojis_Emoji("📒", "ledger", "Objects", ["ledger"], []), new emojis_Emoji("📕", "closed book", "Objects", ["closed_book"], []), new emojis_Emoji("📗", "green book", "Objects", ["green_book"], []), new emojis_Emoji("📘", "blue book", "Objects", ["blue_book"], []), new emojis_Emoji("📙", "orange book", "Objects", ["orange_book"], []), new emojis_Emoji("📚", "books", "Objects", ["books"], ["library"]), new emojis_Emoji("📖", "open book", "Objects", ["book", "open_book"], []), new emojis_Emoji("🔖", "bookmark", "Objects", ["bookmark"], []), new emojis_Emoji("🔗", "link", "Objects", ["link"], []), new emojis_Emoji("📎", "paperclip", "Objects", ["paperclip"], []), new emojis_Emoji("🖇", "linked paperclips", "Objects", ["paperclips"], []), new emojis_Emoji("📐", "triangular ruler", "Objects", ["triangular_ruler"], []), new emojis_Emoji("📏", "straight ruler", "Objects", ["straight_ruler"], []), new emojis_Emoji("📌", "pushpin", "Objects", ["pushpin"], ["location"]), new emojis_Emoji("📍", "round pushpin", "Objects", ["round_pushpin"], ["location"]), new emojis_Emoji("✂️", "scissors", "Objects", ["scissors"], ["cut"]), new emojis_Emoji("🖊", "pen", "Objects", ["pen"], []), new emojis_Emoji("🖋", "fountain pen", "Objects", ["fountain_pen"], []), new emojis_Emoji("✒️", "black nib", "Objects", ["black_nib"], []), new emojis_Emoji("🖌", "paintbrush", "Objects", ["paintbrush"], []), new emojis_Emoji("🖍", "crayon", "Objects", ["crayon"], []), new emojis_Emoji("📝", "memo", "Objects", ["memo", "pencil"], ["document", "note"]), new emojis_Emoji("✏️", "pencil", "Objects", ["pencil2"], []), new emojis_Emoji("🔍", "left-pointing magnifying glass", "Objects", ["mag"], ["search", "zoom"]), new emojis_Emoji("🔎", "right-pointing magnifying glass", "Objects", ["mag_right"], []), new emojis_Emoji("🔏", "locked with pen", "Objects", ["lock_with_ink_pen"], []), new emojis_Emoji("🔐", "locked with key", "Objects", ["closed_lock_with_key"], ["security"]), new emojis_Emoji("🔒", "locked", "Objects", ["lock"], ["security", "private"]), new emojis_Emoji("🔓", "unlocked", "Objects", ["unlock"], ["security"]), new emojis_Emoji("❤️", "red heart", "Symbols", ["heart"], ["love"]), new emojis_Emoji("💛", "yellow heart", "Symbols", ["yellow_heart"], []), new emojis_Emoji("💚", "green heart", "Symbols", ["green_heart"], []), new emojis_Emoji("💙", "blue heart", "Symbols", ["blue_heart"], []), new emojis_Emoji("💜", "purple heart", "Symbols", ["purple_heart"], []), new emojis_Emoji("🖤", "black heart", "Symbols", ["black_heart"], []), new emojis_Emoji("💔", "broken heart", "Symbols", ["broken_heart"], []), new emojis_Emoji("❣️", "heavy heart exclamation", "Symbols", ["heavy_heart_exclamation"], []), new emojis_Emoji("💕", "two hearts", "Symbols", ["two_hearts"], []), new emojis_Emoji("💞", "revolving hearts", "Symbols", ["revolving_hearts"], []), new emojis_Emoji("💓", "beating heart", "Symbols", ["heartbeat"], []), new emojis_Emoji("💗", "growing heart", "Symbols", ["heartpulse"], []), new emojis_Emoji("💖", "sparkling heart", "Symbols", ["sparkling_heart"], []), new emojis_Emoji("💘", "heart with arrow", "Symbols", ["cupid"], ["love", "heart"]), new emojis_Emoji("💝", "heart with ribbon", "Symbols", ["gift_heart"], ["chocolates"]), new emojis_Emoji("💟", "heart decoration", "Symbols", ["heart_decoration"], []), new emojis_Emoji("☮️", "peace symbol", "Symbols", ["peace_symbol"], []), new emojis_Emoji("✝️", "latin cross", "Symbols", ["latin_cross"], []), new emojis_Emoji("☪️", "star and crescent", "Symbols", ["star_and_crescent"], []), new emojis_Emoji("🕉", "om", "Symbols", ["om"], []), new emojis_Emoji("☸️", "wheel of dharma", "Symbols", ["wheel_of_dharma"], []), new emojis_Emoji("✡️", "star of David", "Symbols", ["star_of_david"], []), new emojis_Emoji("🔯", "dotted six-pointed star", "Symbols", ["six_pointed_star"], []), new emojis_Emoji("🕎", "menorah", "Symbols", ["menorah"], []), new emojis_Emoji("☯️", "yin yang", "Symbols", ["yin_yang"], []), new emojis_Emoji("☦️", "orthodox cross", "Symbols", ["orthodox_cross"], []), new emojis_Emoji("🛐", "place of worship", "Symbols", ["place_of_worship"], []), new emojis_Emoji("⛎", "Ophiuchus", "Symbols", ["ophiuchus"], []), new emojis_Emoji("♈️", "Aries", "Symbols", ["aries"], []), new emojis_Emoji("♉️", "Taurus", "Symbols", ["taurus"], []), new emojis_Emoji("♊️", "Gemini", "Symbols", ["gemini"], []), new emojis_Emoji("♋️", "Cancer", "Symbols", ["cancer"], []), new emojis_Emoji("♌️", "Leo", "Symbols", ["leo"], []), new emojis_Emoji("♍️", "Virgo", "Symbols", ["virgo"], []), new emojis_Emoji("♎️", "Libra", "Symbols", ["libra"], []), new emojis_Emoji("♏️", "Scorpius", "Symbols", ["scorpius"], []), new emojis_Emoji("♐️", "Sagittarius", "Symbols", ["sagittarius"], []), new emojis_Emoji("♑️", "Capricorn", "Symbols", ["capricorn"], []), new emojis_Emoji("♒️", "Aquarius", "Symbols", ["aquarius"], []), new emojis_Emoji("♓️", "Pisces", "Symbols", ["pisces"], []), new emojis_Emoji("🆔", "ID button", "Symbols", ["id"], []), new emojis_Emoji("⚛️", "atom symbol", "Symbols", ["atom_symbol"], []), new emojis_Emoji("🉑", "Japanese “acceptable” button", "Symbols", ["accept"], []), new emojis_Emoji("☢️", "radioactive", "Symbols", ["radioactive"], []), new emojis_Emoji("☣️", "biohazard", "Symbols", ["biohazard"], []), new emojis_Emoji("📴", "mobile phone off", "Symbols", ["mobile_phone_off"], ["mute", "off"]), new emojis_Emoji("📳", "vibration mode", "Symbols", ["vibration_mode"], []), new emojis_Emoji("🈶", "Japanese “not free of charge” button", "Symbols", ["u6709"], []), new emojis_Emoji("🈚️", "Japanese “free of charge” button", "Symbols", ["u7121"], []), new emojis_Emoji("🈸", "Japanese “application” button", "Symbols", ["u7533"], []), new emojis_Emoji("🈺", "Japanese “open for business” button", "Symbols", ["u55b6"], []), new emojis_Emoji("🈷️", "Japanese “monthly amount” button", "Symbols", ["u6708"], []), new emojis_Emoji("✴️", "eight-pointed star", "Symbols", ["eight_pointed_black_star"], []), new emojis_Emoji("🆚", "VS button", "Symbols", ["vs"], []), new emojis_Emoji("💮", "white flower", "Symbols", ["white_flower"], []), new emojis_Emoji("🉐", "Japanese “bargain” button", "Symbols", ["ideograph_advantage"], []), new emojis_Emoji("㊙️", "Japanese “secret” button", "Symbols", ["secret"], []), new emojis_Emoji("㊗️", "Japanese “congratulations” button", "Symbols", ["congratulations"], []), new emojis_Emoji("🈴", "Japanese “passing grade” button", "Symbols", ["u5408"], []), new emojis_Emoji("🈵", "Japanese “no vacancy” button", "Symbols", ["u6e80"], []), new emojis_Emoji("🈹", "Japanese “discount” button", "Symbols", ["u5272"], []), new emojis_Emoji("🈲", "Japanese “prohibited” button", "Symbols", ["u7981"], []), new emojis_Emoji("🅰️", "A button (blood type)", "Symbols", ["a"], []), new emojis_Emoji("🅱️", "B button (blood type)", "Symbols", ["b"], []), new emojis_Emoji("🆎", "AB button (blood type)", "Symbols", ["ab"], []), new emojis_Emoji("🆑", "CL button", "Symbols", ["cl"], []), new emojis_Emoji("🅾️", "O button (blood type)", "Symbols", ["o2"], []), new emojis_Emoji("🆘", "SOS button", "Symbols", ["sos"], ["help", "emergency"]), new emojis_Emoji("❌", "cross mark", "Symbols", ["x"], []), new emojis_Emoji("⭕️", "heavy large circle", "Symbols", ["o"], []), new emojis_Emoji("🛑", "stop sign", "Symbols", ["stop_sign"], []), new emojis_Emoji("⛔️", "no entry", "Symbols", ["no_entry"], ["limit"]), new emojis_Emoji("📛", "name badge", "Symbols", ["name_badge"], []), new emojis_Emoji("🚫", "prohibited", "Symbols", ["no_entry_sign"], ["block", "forbidden"]), new emojis_Emoji("💯", "hundred points", "Symbols", ["100"], ["score", "perfect"]), new emojis_Emoji("💢", "anger symbol", "Symbols", ["anger"], ["angry"]), new emojis_Emoji("♨️", "hot springs", "Symbols", ["hotsprings"], []), new emojis_Emoji("🚷", "no pedestrians", "Symbols", ["no_pedestrians"], []), new emojis_Emoji("🚯", "no littering", "Symbols", ["do_not_litter"], []), new emojis_Emoji("🚳", "no bicycles", "Symbols", ["no_bicycles"], []), new emojis_Emoji("🚱", "non-potable water", "Symbols", ["non-potable_water"], []), new emojis_Emoji("🔞", "no one under eighteen", "Symbols", ["underage"], []), new emojis_Emoji("📵", "no mobile phones", "Symbols", ["no_mobile_phones"], []), new emojis_Emoji("🚭", "no smoking", "Symbols", ["no_smoking"], []), new emojis_Emoji("❗️", "exclamation mark", "Symbols", ["exclamation", "heavy_exclamation_mark"], ["bang"]), new emojis_Emoji("❕", "white exclamation mark", "Symbols", ["grey_exclamation"], []), new emojis_Emoji("❓", "question mark", "Symbols", ["question"], ["confused"]), new emojis_Emoji("❔", "white question mark", "Symbols", ["grey_question"], []), new emojis_Emoji("‼️", "double exclamation mark", "Symbols", ["bangbang"], []), new emojis_Emoji("⁉️", "exclamation question mark", "Symbols", ["interrobang"], []), new emojis_Emoji("🔅", "dim button", "Symbols", ["low_brightness"], []), new emojis_Emoji("🔆", "bright button", "Symbols", ["high_brightness"], []), new emojis_Emoji("〽️", "part alternation mark", "Symbols", ["part_alternation_mark"], []), new emojis_Emoji("⚠️", "warning", "Symbols", ["warning"], ["wip"]), new emojis_Emoji("🚸", "children crossing", "Symbols", ["children_crossing"], []), new emojis_Emoji("🔱", "trident emblem", "Symbols", ["trident"], []), new emojis_Emoji("⚜️", "fleur-de-lis", "Symbols", ["fleur_de_lis"], []), new emojis_Emoji("🔰", "Japanese symbol for beginner", "Symbols", ["beginner"], []), new emojis_Emoji("♻️", "recycling symbol", "Symbols", ["recycle"], ["environment", "green"]), new emojis_Emoji("✅", "white heavy check mark", "Symbols", ["white_check_mark"], []), new emojis_Emoji("🈯️", "Japanese “reserved” button", "Symbols", ["u6307"], []), new emojis_Emoji("💹", "chart increasing with yen", "Symbols", ["chart"], []), new emojis_Emoji("❇️", "sparkle", "Symbols", ["sparkle"], []), new emojis_Emoji("✳️", "eight-spoked asterisk", "Symbols", ["eight_spoked_asterisk"], []), new emojis_Emoji("❎", "cross mark button", "Symbols", ["negative_squared_cross_mark"], []), new emojis_Emoji("🌐", "globe with meridians", "Symbols", ["globe_with_meridians"], ["world", "global", "international"]), new emojis_Emoji("💠", "diamond with a dot", "Symbols", ["diamond_shape_with_a_dot_inside"], []), new emojis_Emoji("Ⓜ️", "circled M", "Symbols", ["m"], []), new emojis_Emoji("🌀", "cyclone", "Symbols", ["cyclone"], ["swirl"]), new emojis_Emoji("💤", "zzz", "Symbols", ["zzz"], ["sleeping"]), new emojis_Emoji("🏧", "ATM sign", "Symbols", ["atm"], []), new emojis_Emoji("🚾", "water closet", "Symbols", ["wc"], ["toilet", "restroom"]), new emojis_Emoji("♿️", "wheelchair symbol", "Symbols", ["wheelchair"], ["accessibility"]), new emojis_Emoji("🅿️", "P button", "Symbols", ["parking"], []), new emojis_Emoji("🈳", "Japanese “vacancy” button", "Symbols", ["u7a7a"], []), new emojis_Emoji("🈂️", "Japanese “service charge” button", "Symbols", ["sa"], []), new emojis_Emoji("🛂", "passport control", "Symbols", ["passport_control"], []), new emojis_Emoji("🛃", "customs", "Symbols", ["customs"], []), new emojis_Emoji("🛄", "baggage claim", "Symbols", ["baggage_claim"], ["airport"]), new emojis_Emoji("🛅", "left luggage", "Symbols", ["left_luggage"], []), new emojis_Emoji("🚹", "men’s room", "Symbols", ["mens"], []), new emojis_Emoji("🚺", "women’s room", "Symbols", ["womens"], []), new emojis_Emoji("🚼", "baby symbol", "Symbols", ["baby_symbol"], []), new emojis_Emoji("🚻", "restroom", "Symbols", ["restroom"], ["toilet"]), new emojis_Emoji("🚮", "litter in bin sign", "Symbols", ["put_litter_in_its_place"], []), new emojis_Emoji("🎦", "cinema", "Symbols", ["cinema"], ["film", "movie"]), new emojis_Emoji("📶", "antenna bars", "Symbols", ["signal_strength"], ["wifi"]), new emojis_Emoji("🈁", "Japanese “here” button", "Symbols", ["koko"], []), new emojis_Emoji("🔣", "input symbols", "Symbols", ["symbols"], []), new emojis_Emoji("ℹ️", "information", "Symbols", ["information_source"], []), new emojis_Emoji("🔤", "input latin letters", "Symbols", ["abc"], ["alphabet"]), new emojis_Emoji("🔡", "input latin lowercase", "Symbols", ["abcd"], []), new emojis_Emoji("🔠", "input latin uppercase", "Symbols", ["capital_abcd"], ["letters"]), new emojis_Emoji("🆖", "NG button", "Symbols", ["ng"], []), new emojis_Emoji("🆗", "OK button", "Symbols", ["ok"], ["yes"]), new emojis_Emoji("🆙", "UP! button", "Symbols", ["up"], []), new emojis_Emoji("🆒", "COOL button", "Symbols", ["cool"], []), new emojis_Emoji("🆕", "NEW button", "Symbols", ["new"], ["fresh"]), new emojis_Emoji("🆓", "FREE button", "Symbols", ["free"], []), new emojis_Emoji("0️⃣", "keycap: 0", "Symbols", ["zero"], []), new emojis_Emoji("1️⃣", "keycap: 1", "Symbols", ["one"], []), new emojis_Emoji("2️⃣", "keycap: 2", "Symbols", ["two"], []), new emojis_Emoji("3️⃣", "keycap: 3", "Symbols", ["three"], []), new emojis_Emoji("4️⃣", "keycap: 4", "Symbols", ["four"], []), new emojis_Emoji("5️⃣", "keycap: 5", "Symbols", ["five"], []), new emojis_Emoji("6️⃣", "keycap: 6", "Symbols", ["six"], []), new emojis_Emoji("7️⃣", "keycap: 7", "Symbols", ["seven"], []), new emojis_Emoji("8️⃣", "keycap: 8", "Symbols", ["eight"], []), new emojis_Emoji("9️⃣", "keycap: 9", "Symbols", ["nine"], []), new emojis_Emoji("🔟", "keycap 10", "Symbols", ["keycap_ten"], []), new emojis_Emoji("🔢", "input numbers", "Symbols", ["1234"], ["numbers"]), new emojis_Emoji("#️⃣", "keycap: #", "Symbols", ["hash"], ["number"]), new emojis_Emoji("*️⃣", "keycap: *", "Symbols", ["asterisk"], []), new emojis_Emoji("▶️", "play button", "Symbols", ["arrow_forward"], []), new emojis_Emoji("⏸", "pause button", "Symbols", ["pause_button"], []), new emojis_Emoji("⏯", "play or pause button", "Symbols", ["play_or_pause_button"], []), new emojis_Emoji("⏹", "stop button", "Symbols", ["stop_button"], []), new emojis_Emoji("⏺", "record button", "Symbols", ["record_button"], []), new emojis_Emoji("⏭", "next track button", "Symbols", ["next_track_button"], []), new emojis_Emoji("⏮", "last track button", "Symbols", ["previous_track_button"], []), new emojis_Emoji("⏩", "fast-forward button", "Symbols", ["fast_forward"], []), new emojis_Emoji("⏪", "fast reverse button", "Symbols", ["rewind"], []), new emojis_Emoji("⏫", "fast up button", "Symbols", ["arrow_double_up"], []), new emojis_Emoji("⏬", "fast down button", "Symbols", ["arrow_double_down"], []), new emojis_Emoji("◀️", "reverse button", "Symbols", ["arrow_backward"], []), new emojis_Emoji("🔼", "up button", "Symbols", ["arrow_up_small"], []), new emojis_Emoji("🔽", "down button", "Symbols", ["arrow_down_small"], []), new emojis_Emoji("➡️", "right arrow", "Symbols", ["arrow_right"], []), new emojis_Emoji("⬅️", "left arrow", "Symbols", ["arrow_left"], []), new emojis_Emoji("⬆️", "up arrow", "Symbols", ["arrow_up"], []), new emojis_Emoji("⬇️", "down arrow", "Symbols", ["arrow_down"], []), new emojis_Emoji("↗️", "up-right arrow", "Symbols", ["arrow_upper_right"], []), new emojis_Emoji("↘️", "down-right arrow", "Symbols", ["arrow_lower_right"], []), new emojis_Emoji("↙️", "down-left arrow", "Symbols", ["arrow_lower_left"], []), new emojis_Emoji("↖️", "up-left arrow", "Symbols", ["arrow_upper_left"], []), new emojis_Emoji("↕️", "up-down arrow", "Symbols", ["arrow_up_down"], []), new emojis_Emoji("↔️", "left-right arrow", "Symbols", ["left_right_arrow"], []), new emojis_Emoji("↪️", "left arrow curving right", "Symbols", ["arrow_right_hook"], []), new emojis_Emoji("↩️", "right arrow curving left", "Symbols", ["leftwards_arrow_with_hook"], ["return"]), new emojis_Emoji("⤴️", "right arrow curving up", "Symbols", ["arrow_heading_up"], []), new emojis_Emoji("⤵️", "right arrow curving down", "Symbols", ["arrow_heading_down"], []), new emojis_Emoji("🔀", "shuffle tracks button", "Symbols", ["twisted_rightwards_arrows"], ["shuffle"]), new emojis_Emoji("🔁", "repeat button", "Symbols", ["repeat"], ["loop"]), new emojis_Emoji("🔂", "repeat single button", "Symbols", ["repeat_one"], []), new emojis_Emoji("🔄", "anticlockwise arrows button", "Symbols", ["arrows_counterclockwise"], ["sync"]), new emojis_Emoji("🔃", "clockwise vertical arrows", "Symbols", ["arrows_clockwise"], []), new emojis_Emoji("🎵", "musical note", "Symbols", ["musical_note"], []), new emojis_Emoji("🎶", "musical notes", "Symbols", ["notes"], ["music"]), new emojis_Emoji("➕", "heavy plus sign", "Symbols", ["heavy_plus_sign"], []), new emojis_Emoji("➖", "heavy minus sign", "Symbols", ["heavy_minus_sign"], []), new emojis_Emoji("➗", "heavy division sign", "Symbols", ["heavy_division_sign"], []), new emojis_Emoji("✖️", "heavy multiplication x", "Symbols", ["heavy_multiplication_x"], []), new emojis_Emoji("💲", "heavy dollar sign", "Symbols", ["heavy_dollar_sign"], []), new emojis_Emoji("💱", "currency exchange", "Symbols", ["currency_exchange"], []), new emojis_Emoji("™️", "trade mark", "Symbols", ["tm"], ["trademark"]), new emojis_Emoji("©️", "copyright", "Symbols", ["copyright"], []), new emojis_Emoji("®️", "registered", "Symbols", ["registered"], []), new emojis_Emoji("〰️", "wavy dash", "Symbols", ["wavy_dash"], []), new emojis_Emoji("➰", "curly loop", "Symbols", ["curly_loop"], []), new emojis_Emoji("➿", "double curly loop", "Symbols", ["loop"], []), new emojis_Emoji("🔚", "END arrow", "Symbols", ["end"], []), new emojis_Emoji("🔙", "BACK arrow", "Symbols", ["back"], []), new emojis_Emoji("🔛", "ON! arrow", "Symbols", ["on"], []), new emojis_Emoji("🔝", "TOP arrow", "Symbols", ["top"], []), new emojis_Emoji("🔜", "SOON arrow", "Symbols", ["soon"], []), new emojis_Emoji("✔️", "heavy check mark", "Symbols", ["heavy_check_mark"], []), new emojis_Emoji("☑️", "ballot box with check", "Symbols", ["ballot_box_with_check"], []), new emojis_Emoji("🔘", "radio button", "Symbols", ["radio_button"], []), new emojis_Emoji("⚪️", "white circle", "Symbols", ["white_circle"], []), new emojis_Emoji("⚫️", "black circle", "Symbols", ["black_circle"], []), new emojis_Emoji("🔴", "red circle", "Symbols", ["red_circle"], []), new emojis_Emoji("🔵", "blue circle", "Symbols", ["large_blue_circle"], []), new emojis_Emoji("🔺", "red triangle pointed up", "Symbols", ["small_red_triangle"], []), new emojis_Emoji("🔻", "red triangle pointed down", "Symbols", ["small_red_triangle_down"], []), new emojis_Emoji("🔸", "small orange diamond", "Symbols", ["small_orange_diamond"], []), new emojis_Emoji("🔹", "small blue diamond", "Symbols", ["small_blue_diamond"], []), new emojis_Emoji("🔶", "large orange diamond", "Symbols", ["large_orange_diamond"], []), new emojis_Emoji("🔷", "large blue diamond", "Symbols", ["large_blue_diamond"], []), new emojis_Emoji("🔳", "white square button", "Symbols", ["white_square_button"], []), new emojis_Emoji("🔲", "black square button", "Symbols", ["black_square_button"], []), new emojis_Emoji("▪️", "black small square", "Symbols", ["black_small_square"], []), new emojis_Emoji("▫️", "white small square", "Symbols", ["white_small_square"], []), new emojis_Emoji("◾️", "black medium-small square", "Symbols", ["black_medium_small_square"], []), new emojis_Emoji("◽️", "white medium-small square", "Symbols", ["white_medium_small_square"], []), new emojis_Emoji("◼️", "black medium square", "Symbols", ["black_medium_square"], []), new emojis_Emoji("◻️", "white medium square", "Symbols", ["white_medium_square"], []), new emojis_Emoji("⬛️", "black large square", "Symbols", ["black_large_square"], []), new emojis_Emoji("⬜️", "white large square", "Symbols", ["white_large_square"], []), new emojis_Emoji("🔈", "speaker low volume", "Symbols", ["speaker"], []), new emojis_Emoji("🔇", "muted speaker", "Symbols", ["mute"], ["sound", "volume"]), new emojis_Emoji("🔉", "speaker medium volume", "Symbols", ["sound"], ["volume"]), new emojis_Emoji("🔊", "speaker high volume", "Symbols", ["loud_sound"], ["volume"]), new emojis_Emoji("🔔", "bell", "Symbols", ["bell"], ["sound", "notification"]), new emojis_Emoji("🔕", "bell with slash", "Symbols", ["no_bell"], ["volume", "off"]), new emojis_Emoji("📣", "megaphone", "Symbols", ["mega"], []), new emojis_Emoji("📢", "loudspeaker", "Symbols", ["loudspeaker"], ["announcement"]), new emojis_Emoji("👁‍🗨", "eye in speech bubble", "Symbols", ["eye_speech_bubble"], []), new emojis_Emoji("💬", "speech balloon", "Symbols", ["speech_balloon"], ["comment"]), new emojis_Emoji("💭", "thought balloon", "Symbols", ["thought_balloon"], ["thinking"]), new emojis_Emoji("🗯", "right anger bubble", "Symbols", ["right_anger_bubble"], []), new emojis_Emoji("♠️", "spade suit", "Symbols", ["spades"], []), new emojis_Emoji("♣️", "club suit", "Symbols", ["clubs"], []), new emojis_Emoji("♥️", "heart suit", "Symbols", ["hearts"], []), new emojis_Emoji("♦️", "diamond suit", "Symbols", ["diamonds"], []), new emojis_Emoji("🃏", "joker", "Symbols", ["black_joker"], []), new emojis_Emoji("🎴", "flower playing cards", "Symbols", ["flower_playing_cards"], []), new emojis_Emoji("🀄️", "mahjong red dragon", "Symbols", ["mahjong"], []), new emojis_Emoji("🕐", "one o’clock", "Symbols", ["clock1"], []), new emojis_Emoji("🕑", "two o’clock", "Symbols", ["clock2"], []), new emojis_Emoji("🕒", "three o’clock", "Symbols", ["clock3"], []), new emojis_Emoji("🕓", "four o’clock", "Symbols", ["clock4"], []), new emojis_Emoji("🕔", "five o’clock", "Symbols", ["clock5"], []), new emojis_Emoji("🕕", "six o’clock", "Symbols", ["clock6"], []), new emojis_Emoji("🕖", "seven o’clock", "Symbols", ["clock7"], []), new emojis_Emoji("🕗", "eight o’clock", "Symbols", ["clock8"], []), new emojis_Emoji("🕘", "nine o’clock", "Symbols", ["clock9"], []), new emojis_Emoji("🕙", "ten o’clock", "Symbols", ["clock10"], []), new emojis_Emoji("🕚", "eleven o’clock", "Symbols", ["clock11"], []), new emojis_Emoji("🕛", "twelve o’clock", "Symbols", ["clock12"], []), new emojis_Emoji("🕜", "one-thirty", "Symbols", ["clock130"], []), new emojis_Emoji("🕝", "two-thirty", "Symbols", ["clock230"], []), new emojis_Emoji("🕞", "three-thirty", "Symbols", ["clock330"], []), new emojis_Emoji("🕟", "four-thirty", "Symbols", ["clock430"], []), new emojis_Emoji("🕠", "five-thirty", "Symbols", ["clock530"], []), new emojis_Emoji("🕡", "six-thirty", "Symbols", ["clock630"], []), new emojis_Emoji("🕢", "seven-thirty", "Symbols", ["clock730"], []), new emojis_Emoji("🕣", "eight-thirty", "Symbols", ["clock830"], []), new emojis_Emoji("🕤", "nine-thirty", "Symbols", ["clock930"], []), new emojis_Emoji("🕥", "ten-thirty", "Symbols", ["clock1030"], []), new emojis_Emoji("🕦", "eleven-thirty", "Symbols", ["clock1130"], []), new emojis_Emoji("🕧", "twelve-thirty", "Symbols", ["clock1230"], []), new emojis_Emoji("🏳️", "white flag", "Flags", ["white_flag"], []), new emojis_Emoji("🏴", "black flag", "Flags", ["black_flag"], []), new emojis_Emoji("🏁", "chequered flag", "Flags", ["checkered_flag"], ["milestone", "finish"]), new emojis_Emoji("🚩", "triangular flag", "Flags", ["triangular_flag_on_post"], []), new emojis_Emoji("🏳️‍🌈", "rainbow flag", "Flags", ["rainbow_flag"], ["pride"]), new emojis_Emoji("🇦🇫", "Afghanistan", "Flags", ["afghanistan"], []), new emojis_Emoji("🇦🇽", "Åland Islands", "Flags", ["aland_islands"], []), new emojis_Emoji("🇦🇱", "Albania", "Flags", ["albania"], []), new emojis_Emoji("🇩🇿", "Algeria", "Flags", ["algeria"], []), new emojis_Emoji("🇦🇸", "American Samoa", "Flags", ["american_samoa"], []), new emojis_Emoji("🇦🇩", "Andorra", "Flags", ["andorra"], []), new emojis_Emoji("🇦🇴", "Angola", "Flags", ["angola"], []), new emojis_Emoji("🇦🇮", "Anguilla", "Flags", ["anguilla"], []), new emojis_Emoji("🇦🇶", "Antarctica", "Flags", ["antarctica"], []), new emojis_Emoji("🇦🇬", "Antigua & Barbuda", "Flags", ["antigua_barbuda"], []), new emojis_Emoji("🇦🇷", "Argentina", "Flags", ["argentina"], []), new emojis_Emoji("🇦🇲", "Armenia", "Flags", ["armenia"], []), new emojis_Emoji("🇦🇼", "Aruba", "Flags", ["aruba"], []), new emojis_Emoji("🇦🇺", "Australia", "Flags", ["australia"], []), new emojis_Emoji("🇦🇹", "Austria", "Flags", ["austria"], []), new emojis_Emoji("🇦🇿", "Azerbaijan", "Flags", ["azerbaijan"], []), new emojis_Emoji("🇧🇸", "Bahamas", "Flags", ["bahamas"], []), new emojis_Emoji("🇧🇭", "Bahrain", "Flags", ["bahrain"], []), new emojis_Emoji("🇧🇩", "Bangladesh", "Flags", ["bangladesh"], []), new emojis_Emoji("🇧🇧", "Barbados", "Flags", ["barbados"], []), new emojis_Emoji("🇧🇾", "Belarus", "Flags", ["belarus"], []), new emojis_Emoji("🇧🇪", "Belgium", "Flags", ["belgium"], []), new emojis_Emoji("🇧🇿", "Belize", "Flags", ["belize"], []), new emojis_Emoji("🇧🇯", "Benin", "Flags", ["benin"], []), new emojis_Emoji("🇧🇲", "Bermuda", "Flags", ["bermuda"], []), new emojis_Emoji("🇧🇹", "Bhutan", "Flags", ["bhutan"], []), new emojis_Emoji("🇧🇴", "Bolivia", "Flags", ["bolivia"], []), new emojis_Emoji("🇧🇶", "Caribbean Netherlands", "Flags", ["caribbean_netherlands"], []), new emojis_Emoji("🇧🇦", "Bosnia & Herzegovina", "Flags", ["bosnia_herzegovina"], []), new emojis_Emoji("🇧🇼", "Botswana", "Flags", ["botswana"], []), new emojis_Emoji("🇧🇷", "Brazil", "Flags", ["brazil"], []), new emojis_Emoji("🇮🇴", "British Indian Ocean Territory", "Flags", ["british_indian_ocean_territory"], []), new emojis_Emoji("🇻🇬", "British Virgin Islands", "Flags", ["british_virgin_islands"], []), new emojis_Emoji("🇧🇳", "Brunei", "Flags", ["brunei"], []), new emojis_Emoji("🇧🇬", "Bulgaria", "Flags", ["bulgaria"], []), new emojis_Emoji("🇧🇫", "Burkina Faso", "Flags", ["burkina_faso"], []), new emojis_Emoji("🇧🇮", "Burundi", "Flags", ["burundi"], []), new emojis_Emoji("🇨🇻", "Cape Verde", "Flags", ["cape_verde"], []), new emojis_Emoji("🇰🇭", "Cambodia", "Flags", ["cambodia"], []), new emojis_Emoji("🇨🇲", "Cameroon", "Flags", ["cameroon"], []), new emojis_Emoji("🇨🇦", "Canada", "Flags", ["canada"], []), new emojis_Emoji("🇮🇨", "Canary Islands", "Flags", ["canary_islands"], []), new emojis_Emoji("🇰🇾", "Cayman Islands", "Flags", ["cayman_islands"], []), new emojis_Emoji("🇨🇫", "Central African Republic", "Flags", ["central_african_republic"], []), new emojis_Emoji("🇹🇩", "Chad", "Flags", ["chad"], []), new emojis_Emoji("🇨🇱", "Chile", "Flags", ["chile"], []), new emojis_Emoji("🇨🇳", "China", "Flags", ["cn"], ["china"]), new emojis_Emoji("🇨🇽", "Christmas Island", "Flags", ["christmas_island"], []), new emojis_Emoji("🇨🇨", "Cocos (Keeling) Islands", "Flags", ["cocos_islands"], ["keeling"]), new emojis_Emoji("🇨🇴", "Colombia", "Flags", ["colombia"], []), new emojis_Emoji("🇰🇲", "Comoros", "Flags", ["comoros"], []), new emojis_Emoji("🇨🇬", "Congo - Brazzaville", "Flags", ["congo_brazzaville"], []), new emojis_Emoji("🇨🇩", "Congo - Kinshasa", "Flags", ["congo_kinshasa"], []), new emojis_Emoji("🇨🇰", "Cook Islands", "Flags", ["cook_islands"], []), new emojis_Emoji("🇨🇷", "Costa Rica", "Flags", ["costa_rica"], []), new emojis_Emoji("🇨🇮", "Côte d’Ivoire", "Flags", ["cote_divoire"], ["ivory"]), new emojis_Emoji("🇭🇷", "Croatia", "Flags", ["croatia"], []), new emojis_Emoji("🇨🇺", "Cuba", "Flags", ["cuba"], []), new emojis_Emoji("🇨🇼", "Curaçao", "Flags", ["curacao"], []), new emojis_Emoji("🇨🇾", "Cyprus", "Flags", ["cyprus"], []), new emojis_Emoji("🇨🇿", "Czech Republic", "Flags", ["czech_republic"], []), new emojis_Emoji("🇩🇰", "Denmark", "Flags", ["denmark"], []), new emojis_Emoji("🇩🇯", "Djibouti", "Flags", ["djibouti"], []), new emojis_Emoji("🇩🇲", "Dominica", "Flags", ["dominica"], []), new emojis_Emoji("🇩🇴", "Dominican Republic", "Flags", ["dominican_republic"], []), new emojis_Emoji("🇪🇨", "Ecuador", "Flags", ["ecuador"], []), new emojis_Emoji("🇪🇬", "Egypt", "Flags", ["egypt"], []), new emojis_Emoji("🇸🇻", "El Salvador", "Flags", ["el_salvador"], []), new emojis_Emoji("🇬🇶", "Equatorial Guinea", "Flags", ["equatorial_guinea"], []), new emojis_Emoji("🇪🇷", "Eritrea", "Flags", ["eritrea"], []), new emojis_Emoji("🇪🇪", "Estonia", "Flags", ["estonia"], []), new emojis_Emoji("🇪🇹", "Ethiopia", "Flags", ["ethiopia"], []), new emojis_Emoji("🇪🇺", "European Union", "Flags", ["eu", "european_union"], []), new emojis_Emoji("🇫🇰", "Falkland Islands", "Flags", ["falkland_islands"], []), new emojis_Emoji("🇫🇴", "Faroe Islands", "Flags", ["faroe_islands"], []), new emojis_Emoji("🇫🇯", "Fiji", "Flags", ["fiji"], []), new emojis_Emoji("🇫🇮", "Finland", "Flags", ["finland"], []), new emojis_Emoji("🇫🇷", "France", "Flags", ["fr"], ["france", "french"]), new emojis_Emoji("🇬🇫", "French Guiana", "Flags", ["french_guiana"], []), new emojis_Emoji("🇵🇫", "French Polynesia", "Flags", ["french_polynesia"], []), new emojis_Emoji("🇹🇫", "French Southern Territories", "Flags", ["french_southern_territories"], []), new emojis_Emoji("🇬🇦", "Gabon", "Flags", ["gabon"], []), new emojis_Emoji("🇬🇲", "Gambia", "Flags", ["gambia"], []), new emojis_Emoji("🇬🇪", "Georgia", "Flags", ["georgia"], []), new emojis_Emoji("🇩🇪", "Germany", "Flags", ["de"], ["flag", "germany"]), new emojis_Emoji("🇬🇭", "Ghana", "Flags", ["ghana"], []), new emojis_Emoji("🇬🇮", "Gibraltar", "Flags", ["gibraltar"], []), new emojis_Emoji("🇬🇷", "Greece", "Flags", ["greece"], []), new emojis_Emoji("🇬🇱", "Greenland", "Flags", ["greenland"], []), new emojis_Emoji("🇬🇩", "Grenada", "Flags", ["grenada"], []), new emojis_Emoji("🇬🇵", "Guadeloupe", "Flags", ["guadeloupe"], []), new emojis_Emoji("🇬🇺", "Guam", "Flags", ["guam"], []), new emojis_Emoji("🇬🇹", "Guatemala", "Flags", ["guatemala"], []), new emojis_Emoji("🇬🇬", "Guernsey", "Flags", ["guernsey"], []), new emojis_Emoji("🇬🇳", "Guinea", "Flags", ["guinea"], []), new emojis_Emoji("🇬🇼", "Guinea-Bissau", "Flags", ["guinea_bissau"], []), new emojis_Emoji("🇬🇾", "Guyana", "Flags", ["guyana"], []), new emojis_Emoji("🇭🇹", "Haiti", "Flags", ["haiti"], []), new emojis_Emoji("🇭🇳", "Honduras", "Flags", ["honduras"], []), new emojis_Emoji("🇭🇰", "Hong Kong SAR China", "Flags", ["hong_kong"], []), new emojis_Emoji("🇭🇺", "Hungary", "Flags", ["hungary"], []), new emojis_Emoji("🇮🇸", "Iceland", "Flags", ["iceland"], []), new emojis_Emoji("🇮🇳", "India", "Flags", ["india"], []), new emojis_Emoji("🇮🇩", "Indonesia", "Flags", ["indonesia"], []), new emojis_Emoji("🇮🇷", "Iran", "Flags", ["iran"], []), new emojis_Emoji("🇮🇶", "Iraq", "Flags", ["iraq"], []), new emojis_Emoji("🇮🇪", "Ireland", "Flags", ["ireland"], []), new emojis_Emoji("🇮🇲", "Isle of Man", "Flags", ["isle_of_man"], []), new emojis_Emoji("🇮🇱", "Israel", "Flags", ["israel"], []), new emojis_Emoji("🇮🇹", "Italy", "Flags", ["it"], ["italy"]), new emojis_Emoji("🇯🇲", "Jamaica", "Flags", ["jamaica"], []), new emojis_Emoji("🇯🇵", "Japan", "Flags", ["jp"], ["japan"]), new emojis_Emoji("🎌", "crossed flags", "Flags", ["crossed_flags"], []), new emojis_Emoji("🇯🇪", "Jersey", "Flags", ["jersey"], []), new emojis_Emoji("🇯🇴", "Jordan", "Flags", ["jordan"], []), new emojis_Emoji("🇰🇿", "Kazakhstan", "Flags", ["kazakhstan"], []), new emojis_Emoji("🇰🇪", "Kenya", "Flags", ["kenya"], []), new emojis_Emoji("🇰🇮", "Kiribati", "Flags", ["kiribati"], []), new emojis_Emoji("🇽🇰", "Kosovo", "Flags", ["kosovo"], []), new emojis_Emoji("🇰🇼", "Kuwait", "Flags", ["kuwait"], []), new emojis_Emoji("🇰🇬", "Kyrgyzstan", "Flags", ["kyrgyzstan"], []), new emojis_Emoji("🇱🇦", "Laos", "Flags", ["laos"], []), new emojis_Emoji("🇱🇻", "Latvia", "Flags", ["latvia"], []), new emojis_Emoji("🇱🇧", "Lebanon", "Flags", ["lebanon"], []), new emojis_Emoji("🇱🇸", "Lesotho", "Flags", ["lesotho"], []), new emojis_Emoji("🇱🇷", "Liberia", "Flags", ["liberia"], []), new emojis_Emoji("🇱🇾", "Libya", "Flags", ["libya"], []), new emojis_Emoji("🇱🇮", "Liechtenstein", "Flags", ["liechtenstein"], []), new emojis_Emoji("🇱🇹", "Lithuania", "Flags", ["lithuania"], []), new emojis_Emoji("🇱🇺", "Luxembourg", "Flags", ["luxembourg"], []), new emojis_Emoji("🇲🇴", "Macau SAR China", "Flags", ["macau"], []), new emojis_Emoji("🇲🇰", "Macedonia", "Flags", ["macedonia"], []), new emojis_Emoji("🇲🇬", "Madagascar", "Flags", ["madagascar"], []), new emojis_Emoji("🇲🇼", "Malawi", "Flags", ["malawi"], []), new emojis_Emoji("🇲🇾", "Malaysia", "Flags", ["malaysia"], []), new emojis_Emoji("🇲🇻", "Maldives", "Flags", ["maldives"], []), new emojis_Emoji("🇲🇱", "Mali", "Flags", ["mali"], []), new emojis_Emoji("🇲🇹", "Malta", "Flags", ["malta"], []), new emojis_Emoji("🇲🇭", "Marshall Islands", "Flags", ["marshall_islands"], []), new emojis_Emoji("🇲🇶", "Martinique", "Flags", ["martinique"], []), new emojis_Emoji("🇲🇷", "Mauritania", "Flags", ["mauritania"], []), new emojis_Emoji("🇲🇺", "Mauritius", "Flags", ["mauritius"], []), new emojis_Emoji("🇾🇹", "Mayotte", "Flags", ["mayotte"], []), new emojis_Emoji("🇲🇽", "Mexico", "Flags", ["mexico"], []), new emojis_Emoji("🇫🇲", "Micronesia", "Flags", ["micronesia"], []), new emojis_Emoji("🇲🇩", "Moldova", "Flags", ["moldova"], []), new emojis_Emoji("🇲🇨", "Monaco", "Flags", ["monaco"], []), new emojis_Emoji("🇲🇳", "Mongolia", "Flags", ["mongolia"], []), new emojis_Emoji("🇲🇪", "Montenegro", "Flags", ["montenegro"], []), new emojis_Emoji("🇲🇸", "Montserrat", "Flags", ["montserrat"], []), new emojis_Emoji("🇲🇦", "Morocco", "Flags", ["morocco"], []), new emojis_Emoji("🇲🇿", "Mozambique", "Flags", ["mozambique"], []), new emojis_Emoji("🇲🇲", "Myanmar (Burma)", "Flags", ["myanmar"], ["burma"]), new emojis_Emoji("🇳🇦", "Namibia", "Flags", ["namibia"], []), new emojis_Emoji("🇳🇷", "Nauru", "Flags", ["nauru"], []), new emojis_Emoji("🇳🇵", "Nepal", "Flags", ["nepal"], []), new emojis_Emoji("🇳🇱", "Netherlands", "Flags", ["netherlands"], []), new emojis_Emoji("🇳🇨", "New Caledonia", "Flags", ["new_caledonia"], []), new emojis_Emoji("🇳🇿", "New Zealand", "Flags", ["new_zealand"], []), new emojis_Emoji("🇳🇮", "Nicaragua", "Flags", ["nicaragua"], []), new emojis_Emoji("🇳🇪", "Niger", "Flags", ["niger"], []), new emojis_Emoji("🇳🇬", "Nigeria", "Flags", ["nigeria"], []), new emojis_Emoji("🇳🇺", "Niue", "Flags", ["niue"], []), new emojis_Emoji("🇳🇫", "Norfolk Island", "Flags", ["norfolk_island"], []), new emojis_Emoji("🇲🇵", "Northern Mariana Islands", "Flags", ["northern_mariana_islands"], []), new emojis_Emoji("🇰🇵", "North Korea", "Flags", ["north_korea"], []), new emojis_Emoji("🇳🇴", "Norway", "Flags", ["norway"], []), new emojis_Emoji("🇴🇲", "Oman", "Flags", ["oman"], []), new emojis_Emoji("🇵🇰", "Pakistan", "Flags", ["pakistan"], []), new emojis_Emoji("🇵🇼", "Palau", "Flags", ["palau"], []), new emojis_Emoji("🇵🇸", "Palestinian Territories", "Flags", ["palestinian_territories"], []), new emojis_Emoji("🇵🇦", "Panama", "Flags", ["panama"], []), new emojis_Emoji("🇵🇬", "Papua New Guinea", "Flags", ["papua_new_guinea"], []), new emojis_Emoji("🇵🇾", "Paraguay", "Flags", ["paraguay"], []), new emojis_Emoji("🇵🇪", "Peru", "Flags", ["peru"], []), new emojis_Emoji("🇵🇭", "Philippines", "Flags", ["philippines"], []), new emojis_Emoji("🇵🇳", "Pitcairn Islands", "Flags", ["pitcairn_islands"], []), new emojis_Emoji("🇵🇱", "Poland", "Flags", ["poland"], []), new emojis_Emoji("🇵🇹", "Portugal", "Flags", ["portugal"], []), new emojis_Emoji("🇵🇷", "Puerto Rico", "Flags", ["puerto_rico"], []), new emojis_Emoji("🇶🇦", "Qatar", "Flags", ["qatar"], []), new emojis_Emoji("🇷🇪", "Réunion", "Flags", ["reunion"], []), new emojis_Emoji("🇷🇴", "Romania", "Flags", ["romania"], []), new emojis_Emoji("🇷🇺", "Russia", "Flags", ["ru"], ["russia"]), new emojis_Emoji("🇷🇼", "Rwanda", "Flags", ["rwanda"], []), new emojis_Emoji("🇧🇱", "St. Barthélemy", "Flags", ["st_barthelemy"], []), new emojis_Emoji("🇸🇭", "St. Helena", "Flags", ["st_helena"], []), new emojis_Emoji("🇰🇳", "St. Kitts & Nevis", "Flags", ["st_kitts_nevis"], []), new emojis_Emoji("🇱🇨", "St. Lucia", "Flags", ["st_lucia"], []), new emojis_Emoji("🇵🇲", "St. Pierre & Miquelon", "Flags", ["st_pierre_miquelon"], []), new emojis_Emoji("🇻🇨", "St. Vincent & Grenadines", "Flags", ["st_vincent_grenadines"], []), new emojis_Emoji("🇼🇸", "Samoa", "Flags", ["samoa"], []), new emojis_Emoji("🇸🇲", "San Marino", "Flags", ["san_marino"], []), new emojis_Emoji("🇸🇹", "São Tomé & Príncipe", "Flags", ["sao_tome_principe"], []), new emojis_Emoji("🇸🇦", "Saudi Arabia", "Flags", ["saudi_arabia"], []), new emojis_Emoji("🇸🇳", "Senegal", "Flags", ["senegal"], []), new emojis_Emoji("🇷🇸", "Serbia", "Flags", ["serbia"], []), new emojis_Emoji("🇸🇨", "Seychelles", "Flags", ["seychelles"], []), new emojis_Emoji("🇸🇱", "Sierra Leone", "Flags", ["sierra_leone"], []), new emojis_Emoji("🇸🇬", "Singapore", "Flags", ["singapore"], []), new emojis_Emoji("🇸🇽", "Sint Maarten", "Flags", ["sint_maarten"], []), new emojis_Emoji("🇸🇰", "Slovakia", "Flags", ["slovakia"], []), new emojis_Emoji("🇸🇮", "Slovenia", "Flags", ["slovenia"], []), new emojis_Emoji("🇸🇧", "Solomon Islands", "Flags", ["solomon_islands"], []), new emojis_Emoji("🇸🇴", "Somalia", "Flags", ["somalia"], []), new emojis_Emoji("🇿🇦", "South Africa", "Flags", ["south_africa"], []), new emojis_Emoji("🇬🇸", "South Georgia & South Sandwich Islands", "Flags", ["south_georgia_south_sandwich_islands"], []), new emojis_Emoji("🇰🇷", "South Korea", "Flags", ["kr"], ["korea"]), new emojis_Emoji("🇸🇸", "South Sudan", "Flags", ["south_sudan"], []), new emojis_Emoji("🇪🇸", "Spain", "Flags", ["es"], ["spain"]), new emojis_Emoji("🇱🇰", "Sri Lanka", "Flags", ["sri_lanka"], []), new emojis_Emoji("🇸🇩", "Sudan", "Flags", ["sudan"], []), new emojis_Emoji("🇸🇷", "Suriname", "Flags", ["suriname"], []), new emojis_Emoji("🇸🇿", "Swaziland", "Flags", ["swaziland"], []), new emojis_Emoji("🇸🇪", "Sweden", "Flags", ["sweden"], []), new emojis_Emoji("🇨🇭", "Switzerland", "Flags", ["switzerland"], []), new emojis_Emoji("🇸🇾", "Syria", "Flags", ["syria"], []), new emojis_Emoji("🇹🇼", "Taiwan", "Flags", ["taiwan"], []), new emojis_Emoji("🇹🇯", "Tajikistan", "Flags", ["tajikistan"], []), new emojis_Emoji("🇹🇿", "Tanzania", "Flags", ["tanzania"], []), new emojis_Emoji("🇹🇭", "Thailand", "Flags", ["thailand"], []), new emojis_Emoji("🇹🇱", "Timor-Leste", "Flags", ["timor_leste"], []), new emojis_Emoji("🇹🇬", "Togo", "Flags", ["togo"], []), new emojis_Emoji("🇹🇰", "Tokelau", "Flags", ["tokelau"], []), new emojis_Emoji("🇹🇴", "Tonga", "Flags", ["tonga"], []), new emojis_Emoji("🇹🇹", "Trinidad & Tobago", "Flags", ["trinidad_tobago"], []), new emojis_Emoji("🇹🇳", "Tunisia", "Flags", ["tunisia"], []), new emojis_Emoji("🇹🇷", "Turkey", "Flags", ["tr"], ["turkey"]), new emojis_Emoji("🇹🇲", "Turkmenistan", "Flags", ["turkmenistan"], []), new emojis_Emoji("🇹🇨", "Turks & Caicos Islands", "Flags", ["turks_caicos_islands"], []), new emojis_Emoji("🇹🇻", "Tuvalu", "Flags", ["tuvalu"], []), new emojis_Emoji("🇺🇬", "Uganda", "Flags", ["uganda"], []), new emojis_Emoji("🇺🇦", "Ukraine", "Flags", ["ukraine"], []), new emojis_Emoji("🇦🇪", "United Arab Emirates", "Flags", ["united_arab_emirates"], []), new emojis_Emoji("🇬🇧", "United Kingdom", "Flags", ["gb", "uk"], ["flag", "british"]), new emojis_Emoji("🇺🇸", "United States", "Flags", ["us"], ["flag", "united", "america"]), new emojis_Emoji("🇻🇮", "U.S. Virgin Islands", "Flags", ["us_virgin_islands"], []), new emojis_Emoji("🇺🇾", "Uruguay", "Flags", ["uruguay"], []), new emojis_Emoji("🇺🇿", "Uzbekistan", "Flags", ["uzbekistan"], []), new emojis_Emoji("🇻🇺", "Vanuatu", "Flags", ["vanuatu"], []), new emojis_Emoji("🇻🇦", "Vatican City", "Flags", ["vatican_city"], []), new emojis_Emoji("🇻🇪", "Venezuela", "Flags", ["venezuela"], []), new emojis_Emoji("🇻🇳", "Vietnam", "Flags", ["vietnam"], []), new emojis_Emoji("🇼🇫", "Wallis & Futuna", "Flags", ["wallis_futuna"], []), new emojis_Emoji("🇪🇭", "Western Sahara", "Flags", ["western_sahara"], []), new emojis_Emoji("🇾🇪", "Yemen", "Flags", ["yemen"], []), new emojis_Emoji("🇿🇲", "Zambia", "Flags", ["zambia"], []), new emojis_Emoji("🇿🇼", "Zimbabwe", "Flags", ["zimbabwe"], [])]);
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
    VEmojiPicker: VEmojiPicker
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
  CommentEditorvue_type_template_id_7753300c_render,
  CommentEditorvue_type_template_id_7753300c_staticRenderFns,
  false,
  CommentEditor_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentEditor = (CommentEditor_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/CommentLoading.vue?vue&type=template&id=4ba35724&
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03ff3126-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=template&id=934ee70a&
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

/***/ "2e9a":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("a891");
var gOPS = __webpack_require__("f7c1");
var anObject = __webpack_require__("a013");
var Reflect = __webpack_require__("3754").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


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

/***/ "343e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__("6891");
var isCallable = __webpack_require__("2b42");
var isDate = __webpack_require__("b57f");
var isSymbol = __webpack_require__("94b3");

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
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

/***/ "3cb6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("e6ef");
var validate = __webpack_require__("4678");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("1ce9")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "3cc6":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("9d01")('meta');
var isObject = __webpack_require__("88dd");
var has = __webpack_require__("03b3");
var setDesc = __webpack_require__("ddf7").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("b6f1")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "3cea":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("a95f");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "3ee1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__("9f60");

var implementation = __webpack_require__("c1fd");

module.exports = function getPolyfill() {
	requirePromise();
	return typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation;
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

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
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

/***/ "543a":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("3cea");
var has = bind.call(Function.call, Object.prototype.hasOwnProperty);

var $assign = Object.assign;

module.exports = function assign(target, source) {
	if ($assign) {
		return $assign(target, source);
	}

	for (var key in source) {
		if (has(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
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

/***/ "57c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


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

/***/ "5f3b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Set,
	Map,
	WeakSet,
	WeakMap,

	Promise,

	Symbol,
	Proxy,

	Atomics,
	SharedArrayBuffer,

	ArrayBuffer,
	DataView,
	Uint8Array,
	Float32Array,
	Float64Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8ClampedArray,
	Uint16Array,
	Uint32Array,
*/

var undefined; // eslint-disable-line no-shadow-restricted-names

var ThrowTypeError = Object.getOwnPropertyDescriptor
	? (function () { return Object.getOwnPropertyDescriptor(arguments, 'callee').get; }())
	: function () { throw new TypeError(); };

var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'$ %Array%': Array,
	'$ %ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'$ %ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'$ %ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'$ %ArrayPrototype%': Array.prototype,
	'$ %ArrayProto_entries%': Array.prototype.entries,
	'$ %ArrayProto_forEach%': Array.prototype.forEach,
	'$ %ArrayProto_keys%': Array.prototype.keys,
	'$ %ArrayProto_values%': Array.prototype.values,
	'$ %AsyncFromSyncIteratorPrototype%': undefined,
	'$ %AsyncFunction%': asyncFunction,
	'$ %AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'$ %AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'$ %AsyncGeneratorFunction%': asyncGenFunction,
	'$ %AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'$ %AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'$ %Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'$ %Boolean%': Boolean,
	'$ %BooleanPrototype%': Boolean.prototype,
	'$ %DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'$ %DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'$ %Date%': Date,
	'$ %DatePrototype%': Date.prototype,
	'$ %decodeURI%': decodeURI,
	'$ %decodeURIComponent%': decodeURIComponent,
	'$ %encodeURI%': encodeURI,
	'$ %encodeURIComponent%': encodeURIComponent,
	'$ %Error%': Error,
	'$ %ErrorPrototype%': Error.prototype,
	'$ %eval%': eval, // eslint-disable-line no-eval
	'$ %EvalError%': EvalError,
	'$ %EvalErrorPrototype%': EvalError.prototype,
	'$ %Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'$ %Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'$ %Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'$ %Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'$ %Function%': Function,
	'$ %FunctionPrototype%': Function.prototype,
	'$ %Generator%': generator ? getProto(generator()) : undefined,
	'$ %GeneratorFunction%': generatorFunction,
	'$ %GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'$ %Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'$ %Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'$ %Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'$ %Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'$ %Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'$ %Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'$ %isFinite%': isFinite,
	'$ %isNaN%': isNaN,
	'$ %IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'$ %JSON%': JSON,
	'$ %JSONParse%': JSON.parse,
	'$ %Map%': typeof Map === 'undefined' ? undefined : Map,
	'$ %MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'$ %MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'$ %Math%': Math,
	'$ %Number%': Number,
	'$ %NumberPrototype%': Number.prototype,
	'$ %Object%': Object,
	'$ %ObjectPrototype%': Object.prototype,
	'$ %ObjProto_toString%': Object.prototype.toString,
	'$ %ObjProto_valueOf%': Object.prototype.valueOf,
	'$ %parseFloat%': parseFloat,
	'$ %parseInt%': parseInt,
	'$ %Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'$ %PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'$ %PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'$ %Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'$ %Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'$ %Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'$ %Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'$ %RangeError%': RangeError,
	'$ %RangeErrorPrototype%': RangeError.prototype,
	'$ %ReferenceError%': ReferenceError,
	'$ %ReferenceErrorPrototype%': ReferenceError.prototype,
	'$ %Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'$ %RegExp%': RegExp,
	'$ %RegExpPrototype%': RegExp.prototype,
	'$ %Set%': typeof Set === 'undefined' ? undefined : Set,
	'$ %SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'$ %SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'$ %SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'$ %SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'$ %String%': String,
	'$ %StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'$ %StringPrototype%': String.prototype,
	'$ %Symbol%': hasSymbols ? Symbol : undefined,
	'$ %SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'$ %SyntaxError%': SyntaxError,
	'$ %SyntaxErrorPrototype%': SyntaxError.prototype,
	'$ %ThrowTypeError%': ThrowTypeError,
	'$ %TypedArray%': TypedArray,
	'$ %TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'$ %TypeError%': TypeError,
	'$ %TypeErrorPrototype%': TypeError.prototype,
	'$ %Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'$ %Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'$ %Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'$ %Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'$ %Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'$ %Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'$ %Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'$ %Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'$ %URIError%': URIError,
	'$ %URIErrorPrototype%': URIError.prototype,
	'$ %WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'$ %WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'$ %WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'$ %WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var key = '$ ' + name;
	if (!(key in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[key] === 'undefined' && !allowMissing) {
		throw new TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}
	return INTRINSICS[key];
};


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

/***/ "6891":
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
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

/***/ "69c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__("6891");

var isCallable = __webpack_require__("2b42");

// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
var ES5internalSlots = {
	'[[DefaultValue]]': function (O) {
		var actualHint;
		if (arguments.length > 1) {
			actualHint = arguments[1];
		} else {
			actualHint = toStr.call(O) === '[object Date]' ? String : Number;
		}

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// http://ecma-international.org/ecma-262/5.1/#sec-9.1
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	if (arguments.length > 1) {
		return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
	}
	return ES5internalSlots['[[DefaultValue]]'](input);
};


/***/ }),

/***/ "6d85":
/***/ (function(module, exports) {

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


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

/***/ "743c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("5f3b");

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__("fb81");

var predicates = {
  // https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
  'Property Descriptor': function isPropertyDescriptor(ES, Desc) {
    if (ES.Type(Desc) !== 'Object') {
      return false;
    }
    var allowed = {
      '[[Configurable]]': true,
      '[[Enumerable]]': true,
      '[[Get]]': true,
      '[[Set]]': true,
      '[[Value]]': true,
      '[[Writable]]': true
    };

    for (var key in Desc) { // eslint-disable-line
      if (has(Desc, key) && !allowed[key]) {
        return false;
      }
    }

    var isData = has(Desc, '[[Value]]');
    var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
    if (isData && IsAccessor) {
      throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
    }
    return true;
  }
};

module.exports = function assertRecord(ES, recordType, argumentName, value) {
  var predicate = predicates[recordType];
  if (typeof predicate !== 'function') {
    throw new $SyntaxError('unknown record type: ' + recordType);
  }
  if (!predicate(ES, value)) {
    throw new $TypeError(argumentName + ' must be a ' + recordType);
  }
  console.log(predicate(ES, value), value);
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

/***/ "75fa":
/***/ (function(module, exports) {

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


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

/***/ "7ffa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("3cea");

var ES2016 = __webpack_require__("9e5c");
var assign = __webpack_require__("543a");
var forEach = __webpack_require__("91e1");

var GetIntrinsic = __webpack_require__("5f3b");

var $TypeError = GetIntrinsic('%TypeError%');
var $isEnumerable = bind.call(Function.call, GetIntrinsic('%ObjectPrototype%').propertyIsEnumerable);
var $pushApply = bind.call(Function.apply, GetIntrinsic('%ArrayPrototype%').push);

var ES2017 = assign(assign({}, ES2016), {
	ToIndex: function ToIndex(value) {
		if (typeof value === 'undefined') {
			return 0;
		}
		var integerIndex = this.ToInteger(value);
		if (integerIndex < 0) {
			throw new RangeError('index must be >= 0');
		}
		var index = this.ToLength(integerIndex);
		if (!this.SameValueZero(integerIndex, index)) {
			throw new RangeError('index must be >= 0 and < 2 ** 53 - 1');
		}
		return index;
	},

	// https://www.ecma-international.org/ecma-262/8.0/#sec-enumerableownproperties
	EnumerableOwnProperties: function EnumerableOwnProperties(O, kind) {
		var keys = ES2016.EnumerableOwnNames(O);
		if (kind === 'key') {
			return keys;
		}
		if (kind === 'value' || kind === 'key+value') {
			var results = [];
			forEach(keys, function (key) {
				if ($isEnumerable(O, key)) {
					$pushApply(results, [
						kind === 'value' ? O[key] : [key, O[key]]
					]);
				}
			});
			return results;
		}
		throw new $TypeError('Assertion failed: "kind" is not "key", "value", or "key+value": ' + kind);
	}
});

delete ES2017.EnumerableOwnNames; // replaced with EnumerableOwnProperties

module.exports = ES2017;


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

/***/ "8fe9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("fb81");
var toPrimitive = __webpack_require__("11f4");
var keys = __webpack_require__("0993");

var GetIntrinsic = __webpack_require__("5f3b");

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $Array = GetIntrinsic('%Array%');
var $String = GetIntrinsic('%String%');
var $Object = GetIntrinsic('%Object%');
var $Number = GetIntrinsic('%Number%');
var $Symbol = GetIntrinsic('%Symbol%', true);
var $RegExp = GetIntrinsic('%RegExp%');

var hasSymbols = !!$Symbol;

var assertRecord = __webpack_require__("743c");
var $isNaN = __webpack_require__("6d85");
var $isFinite = __webpack_require__("75fa");
var MAX_SAFE_INTEGER = $Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__("543a");
var sign = __webpack_require__("af00");
var mod = __webpack_require__("ad12");
var isPrimitive = __webpack_require__("9cd1");
var parseInteger = parseInt;
var bind = __webpack_require__("3cea");
var arraySlice = bind.call(Function.call, $Array.prototype.slice);
var strSlice = bind.call(Function.call, $String.prototype.slice);
var isBinary = bind.call(Function.call, $RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, $RegExp.prototype.test, /^0o[0-7]+$/i);
var regexExec = bind.call(Function.call, $RegExp.prototype.exec);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, $RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, $RegExp.prototype.test, invalidHexLiteral);
var $charCodeAt = bind.call(Function.call, $String.prototype.charCodeAt);

var toStr = bind.call(Function.call, Object.prototype.toString);

var $NumberValueOf = bind.call(Function.call, GetIntrinsic('%NumberPrototype%').valueOf);
var $BooleanValueOf = bind.call(Function.call, GetIntrinsic('%BooleanPrototype%').valueOf);
var $StringValueOf = bind.call(Function.call, GetIntrinsic('%StringPrototype%').valueOf);
var $DateValueOf = bind.call(Function.call, GetIntrinsic('%DatePrototype%').valueOf);

var $floor = Math.floor;
var $abs = Math.abs;

var $ObjectCreate = Object.create;
var $gOPD = $Object.getOwnPropertyDescriptor;

var $isExtensible = $Object.isExtensible;

var $defineProperty = $Object.defineProperty;

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, $String.prototype.replace);
var trim = function (value) {
	return replace(value, trimRegex, '');
};

var ES5 = __webpack_require__("1685");

var hasRegExpMatcher = __webpack_require__("8fea");

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new $TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// https://ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, $Number);
		if (typeof value === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return $Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * $floor($abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = $floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a string');
		}
		return $String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return $Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, $String);
		return typeof key === 'symbol' ? key : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr(argument) !== '[object String]') {
			throw new $TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: $Array.isArray || function IsArray(argument) {
		return toStr(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: Object.preventExtensions
		? function IsExtensible(obj) {
			if (isPrimitive(obj)) {
				return false;
			}
			return $isExtensible(obj);
		}
		: function isExtensible(obj) { return true; }, // eslint-disable-line no-unused-vars

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = $abs(argument);
		return $floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[$Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return void 0;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new $TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new $TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && $Symbol.species ? C[$Symbol.species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new $TypeError('no constructor found');
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
	CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
		assertRecord(this, 'Property Descriptor', 'Desc', Desc);

		if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
			if (!has(Desc, '[[Value]]')) {
				Desc['[[Value]]'] = void 0;
			}
			if (!has(Desc, '[[Writable]]')) {
				Desc['[[Writable]]'] = false;
			}
		} else {
			if (!has(Desc, '[[Get]]')) {
				Desc['[[Get]]'] = void 0;
			}
			if (!has(Desc, '[[Set]]')) {
				Desc['[[Set]]'] = void 0;
			}
		}
		if (!has(Desc, '[[Enumerable]]')) {
			Desc['[[Enumerable]]'] = false;
		}
		if (!has(Desc, '[[Configurable]]')) {
			Desc['[[Configurable]]'] = false;
		}
		return Desc;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
	Set: function Set(O, P, V, Throw) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		if (this.Type(Throw) !== 'Boolean') {
			throw new $TypeError('Throw must be a Boolean');
		}
		if (Throw) {
			O[P] = V;
			return true;
		} else {
			try {
				O[P] = V;
			} catch (e) {
				return false;
			}
		}
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
	HasOwnProperty: function HasOwnProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		return has(O, P);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty
	HasProperty: function HasProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		return P in O;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
	IsConcatSpreadable: function IsConcatSpreadable(O) {
		if (this.Type(O) !== 'Object') {
			return false;
		}
		if (hasSymbols && typeof $Symbol.isConcatSpreadable === 'symbol') {
			var spreadable = this.Get(O, Symbol.isConcatSpreadable);
			if (typeof spreadable !== 'undefined') {
				return this.ToBoolean(spreadable);
			}
		}
		return this.IsArray(O);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-invoke
	Invoke: function Invoke(O, P) {
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		var argumentsList = arraySlice(arguments, 2);
		var func = this.GetV(O, P);
		return this.Call(func, O, argumentsList);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-getiterator
	GetIterator: function GetIterator(obj, method) {
		if (!hasSymbols) {
			throw new SyntaxError('ES.GetIterator depends on native iterator support.');
		}

		var actualMethod = method;
		if (arguments.length < 2) {
			actualMethod = this.GetMethod(obj, $Symbol.iterator);
		}
		var iterator = this.Call(actualMethod, obj);
		if (this.Type(iterator) !== 'Object') {
			throw new $TypeError('iterator must return an object');
		}

		return iterator;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext
	IteratorNext: function IteratorNext(iterator, value) {
		var result = this.Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
		if (this.Type(result) !== 'Object') {
			throw new $TypeError('iterator next must return an object');
		}
		return result;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete
	IteratorComplete: function IteratorComplete(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.ToBoolean(this.Get(iterResult, 'done'));
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue
	IteratorValue: function IteratorValue(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.Get(iterResult, 'value');
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep
	IteratorStep: function IteratorStep(iterator) {
		var result = this.IteratorNext(iterator);
		var done = this.IteratorComplete(result);
		return done === true ? false : result;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose
	IteratorClose: function IteratorClose(iterator, completion) {
		if (this.Type(iterator) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterator) is not Object');
		}
		if (!this.IsCallable(completion)) {
			throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
		}
		var completionThunk = completion;

		var iteratorReturn = this.GetMethod(iterator, 'return');

		if (typeof iteratorReturn === 'undefined') {
			return completionThunk();
		}

		var completionRecord;
		try {
			var innerResult = this.Call(iteratorReturn, iterator, []);
		} catch (e) {
			// if we hit here, then "e" is the innerResult completion that needs re-throwing

			// if the completion is of type "throw", this will throw.
			completionRecord = completionThunk();
			completionThunk = null; // ensure it's not called twice.

			// if not, then return the innerResult completion
			throw e;
		}
		completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
		completionThunk = null; // ensure it's not called twice.

		if (this.Type(innerResult) !== 'Object') {
			throw new $TypeError('iterator .return must return an object');
		}

		return completionRecord;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
	CreateIterResultObject: function CreateIterResultObject(value, done) {
		if (this.Type(done) !== 'Boolean') {
			throw new $TypeError('Assertion failed: Type(done) is not Boolean');
		}
		return {
			value: value,
			done: done
		};
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec
	RegExpExec: function RegExpExec(R, S) {
		if (this.Type(R) !== 'Object') {
			throw new $TypeError('R must be an Object');
		}
		if (this.Type(S) !== 'String') {
			throw new $TypeError('S must be a String');
		}
		var exec = this.Get(R, 'exec');
		if (this.IsCallable(exec)) {
			var result = this.Call(exec, R, [S]);
			if (result === null || this.Type(result) === 'Object') {
				return result;
			}
			throw new $TypeError('"exec" method must return `null` or an Object');
		}
		return regexExec(R, S);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
	ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
		if (!this.IsInteger(length) || length < 0) {
			throw new $TypeError('Assertion failed: length must be an integer >= 0');
		}
		var len = length === 0 ? 0 : length;
		var C;
		var isArray = this.IsArray(originalArray);
		if (isArray) {
			C = this.Get(originalArray, 'constructor');
			// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
			// if (this.IsConstructor(C)) {
			// 	if C is another realm's Array, C = undefined
			// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
			// }
			if (this.Type(C) === 'Object' && hasSymbols && $Symbol.species) {
				C = this.Get(C, $Symbol.species);
				if (C === null) {
					C = void 0;
				}
			}
		}
		if (typeof C === 'undefined') {
			return $Array(len);
		}
		if (!this.IsConstructor(C)) {
			throw new $TypeError('C must be a constructor');
		}
		return new C(len); // this.Construct(C, len);
	},

	CreateDataProperty: function CreateDataProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var oldDesc = $gOPD(O, P);
		var extensible = oldDesc || (typeof $isExtensible !== 'function' || $isExtensible(O));
		var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
		if (immutable || !extensible) {
			return false;
		}
		var newDesc = {
			configurable: true,
			enumerable: true,
			value: V,
			writable: true
		};
		$defineProperty(O, P, newDesc);
		return true;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
	CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var success = this.CreateDataProperty(O, P, V);
		if (!success) {
			throw new $TypeError('unable to create data property');
		}
		return success;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate
	ObjectCreate: function ObjectCreate(proto, internalSlotsList) {
		if (proto !== null && this.Type(proto) !== 'Object') {
			throw new $TypeError('Assertion failed: proto must be null or an object');
		}
		var slots = arguments.length < 2 ? [] : internalSlotsList;
		if (slots.length > 0) {
			throw new $SyntaxError('es-abstract does not yet support internal slots');
		}

		if (proto === null && !$ObjectCreate) {
			throw new $SyntaxError('native Object.create support is required to create null objects');
		}

		return $ObjectCreate(proto);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
	AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
		if (this.Type(S) !== 'String') {
			throw new $TypeError('S must be a String');
		}
		if (!this.IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
			throw new $TypeError('Assertion failed: length must be an integer >= 0 and <= 2**53');
		}
		if (this.Type(unicode) !== 'Boolean') {
			throw new $TypeError('Assertion failed: unicode must be a Boolean');
		}
		if (!unicode) {
			return index + 1;
		}
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty
	CreateMethodProperty: function CreateMethodProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		var newDesc = {
			configurable: true,
			enumerable: false,
			value: V,
			writable: true
		};
		return !!$defineProperty(O, P, newDesc);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow
	DefinePropertyOrThrow: function DefinePropertyOrThrow(O, P, desc) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		return !!$defineProperty(O, P, desc);
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow
	DeletePropertyOrThrow: function DeletePropertyOrThrow(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		var success = delete O[P];
		if (!success) {
			throw new TypeError('Attempt to delete property failed.');
		}
		return success;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-enumerableownnames
	EnumerableOwnNames: function EnumerableOwnNames(O) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}

		return keys(O);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object
	thisNumberValue: function thisNumberValue(value) {
		if (this.Type(value) === 'Number') {
			return value;
		}

		return $NumberValueOf(value);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object
	thisBooleanValue: function thisBooleanValue(value) {
		if (this.Type(value) === 'Boolean') {
			return value;
		}

		return $BooleanValueOf(value);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object
	thisStringValue: function thisStringValue(value) {
		if (this.Type(value) === 'String') {
			return value;
		}

		return $StringValueOf(value);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object
	thisTimeValue: function thisTimeValue(value) {
		return $DateValueOf(value);
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;


/***/ }),

/***/ "8fea":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("fb81");
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


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

/***/ "91e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array);
	}
};


/***/ }),

/***/ "94ac":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "94b3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__("216d")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),

/***/ "9604":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("b2f5");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("22f3") });


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

/***/ "9cd1":
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
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

/***/ "9e5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES2015 = __webpack_require__("8fe9");
var assign = __webpack_require__("543a");

var ES2016 = assign(assign({}, ES2015), {
	// https://github.com/tc39/ecma262/pull/60
	SameValueNonNumber: function SameValueNonNumber(x, y) {
		if (typeof x === 'number' || typeof x !== typeof y) {
			throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
		}
		return this.SameValue(x, y);
	}
});

module.exports = ES2016;


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

/***/ "9f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function requirePromise() {
	if (typeof Promise !== 'function') {
		throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
	}
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

/***/ "a95f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
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

/***/ "ad12":
/***/ (function(module, exports) {

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
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

/***/ "af00":
/***/ (function(module, exports) {

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


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

/***/ "b57f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


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

/***/ "ba0f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("3cea");
var keys = __webpack_require__("0993");

var ES2017 = __webpack_require__("7ffa");
var assign = __webpack_require__("543a");
var forEach = __webpack_require__("91e1");

var GetIntrinsic = __webpack_require__("5f3b");

var $String = GetIntrinsic('%String%');
var $Object = GetIntrinsic('%Object%');

var $SymbolProto = GetIntrinsic('%SymbolPrototype%', true);
var $SymbolValueOf = $SymbolProto ? bind.call(Function.call, $SymbolProto.valueOf) : null;
var $StringProto = GetIntrinsic('%StringPrototype%');
var $charAt = bind.call(Function.call, $StringProto.charAt);

var $PromiseResolveOrig = GetIntrinsic('%Promise_resolve%', true);
var $PromiseResolve = $PromiseResolveOrig ? bind.call(Function.call, $PromiseResolveOrig) : null;

var $isEnumerable = bind.call(Function.call, GetIntrinsic('%ObjectPrototype%').propertyIsEnumerable);
var $pushApply = bind.call(Function.apply, GetIntrinsic('%ArrayPrototype%').push);
var $gOPS = $SymbolValueOf ? $Object.getOwnPropertySymbols : null;

var OwnPropertyKeys = function OwnPropertyKeys(ES, source) {
	var ownKeys = keys(source);
	if ($gOPS) {
		$pushApply(ownKeys, $gOPS(source));
	}
	return ownKeys;
};

var ES2018 = assign(assign({}, ES2017), {
	EnumerableOwnPropertyNames: ES2017.EnumerableOwnProperties,

	// https://ecma-international.org/ecma-262/9.0/#sec-thissymbolvalue
	thisSymbolValue: function thisSymbolValue(value) {
		if (!$SymbolValueOf) {
			throw new SyntaxError('Symbols are not supported; thisSymbolValue requires that `value` be a Symbol or a Symbol object');
		}
		if (this.Type(value) === 'Symbol') {
			return value;
		}
		return $SymbolValueOf(value);
	},

	// https://www.ecma-international.org/ecma-262/9.0/#sec-isstringprefix
	IsStringPrefix: function IsStringPrefix(p, q) {
		if (this.Type(p) !== 'String') {
			throw new TypeError('Assertion failed: "p" must be a String');
		}

		if (this.Type(q) !== 'String') {
			throw new TypeError('Assertion failed: "q" must be a String');
		}

		if (p === q || p === '') {
			return true;
		}

		var pLength = p.length;
		var qLength = q.length;
		if (pLength >= qLength) {
			return false;
		}

		// assert: pLength < qLength

		for (var i = 0; i < pLength; i += 1) {
			if ($charAt(p, i) !== $charAt(q, i)) {
				return false;
			}
		}
		return true;
	},

	// https://www.ecma-international.org/ecma-262/9.0/#sec-tostring-applied-to-the-number-type
	NumberToString: function NumberToString(m) {
		if (this.Type(m) !== 'Number') {
			throw new TypeError('Assertion failed: "m" must be a String');
		}

		return $String(m);
	},

	// https://www.ecma-international.org/ecma-262/9.0/#sec-copydataproperties
	CopyDataProperties: function CopyDataProperties(target, source, excludedItems) {
		if (this.Type(target) !== 'Object') {
			throw new TypeError('Assertion failed: "target" must be an Object');
		}

		if (!this.IsArray(excludedItems)) {
			throw new TypeError('Assertion failed: "excludedItems" must be a List of Property Keys');
		}
		for (var i = 0; i < excludedItems.length; i += 1) {
			if (!this.IsPropertyKey(excludedItems[i])) {
				throw new TypeError('Assertion failed: "excludedItems" must be a List of Property Keys');
			}
		}

		if (typeof source === 'undefined' || source === null) {
			return target;
		}

		var ES = this;

		var fromObj = ES.ToObject(source);

		var sourceKeys = OwnPropertyKeys(ES, fromObj);
		forEach(sourceKeys, function (nextKey) {
			var excluded = false;

			forEach(excludedItems, function (e) {
				if (ES.SameValue(e, nextKey) === true) {
					excluded = true;
				}
			});

			var enumerable = $isEnumerable(fromObj, nextKey) || (
				// this is to handle string keys being non-enumerable in older engines
				typeof source === 'string'
				&& nextKey >= 0
				&& ES.IsInteger(ES.ToNumber(nextKey))
			);
			if (excluded === false && enumerable) {
				var propValue = ES.Get(fromObj, nextKey);
				ES.CreateDataProperty(target, nextKey, propValue);
			}
		});

		return target;
	},

	// https://ecma-international.org/ecma-262/9.0/#sec-promise-resolve
	PromiseResolve: function PromiseResolve(C, x) {
		if (!$PromiseResolve) {
			throw new SyntaxError('This environment does not support Promises.');
		}
		return $PromiseResolve(C, x);
	}
});

delete ES2018.EnumerableOwnProperties; // replaced with EnumerableOwnPropertyNames

delete ES2018.IsPropertyDescriptor; // not an actual abstract operation

module.exports = ES2018;


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

/***/ "c1fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__("9f60");

requirePromise();

var ES = __webpack_require__("ba0f");

var promiseResolve = function PromiseResolve(C, value) {
	return new C(function (resolve) {
		resolve(value);
	});
};

var OriginalPromise = Promise;

var createThenFinally = function CreateThenFinally(C, onFinally) {
	return function (value) {
		var result = onFinally();
		var promise = promiseResolve(C, result);
		var valueThunk = function () {
			return value;
		};
		return promise.then(valueThunk);
	};
};

var createCatchFinally = function CreateCatchFinally(C, onFinally) {
	return function (reason) {
		var result = onFinally();
		var promise = promiseResolve(C, result);
		var thrower = function () {
			throw reason;
		};
		return promise.then(thrower);
	};
};

var promiseFinally = function finally_(onFinally) {
	/* eslint no-invalid-this: 0 */

	var promise = this;

	if (ES.Type(promise) !== 'Object') {
		throw new TypeError('receiver is not an Object');
	}

	var C = ES.SpeciesConstructor(promise, OriginalPromise); // may throw

	var thenFinally = onFinally;
	var catchFinally = onFinally;
	if (ES.IsCallable(onFinally)) {
		thenFinally = createThenFinally(C, onFinally);
		catchFinally = createCatchFinally(C, onFinally);
	}

	return promise.then(thenFinally, catchFinally);
};

if (Object.getOwnPropertyDescriptor) {
	var descriptor = Object.getOwnPropertyDescriptor(promiseFinally, 'name');
	if (descriptor && descriptor.configurable) {
		Object.defineProperty(promiseFinally, 'name', { configurable: true, value: 'finally' });
	}
}

module.exports = promiseFinally;


/***/ }),

/***/ "c2b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__("57c2"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


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

/***/ "c892":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("0993");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


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

/***/ "e6ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("ddf7").f;
var create = __webpack_require__("a7b8");
var redefineAll = __webpack_require__("f216");
var ctx = __webpack_require__("01f5");
var anInstance = __webpack_require__("d74e");
var forOf = __webpack_require__("00d5");
var $iterDefine = __webpack_require__("7656");
var step = __webpack_require__("e650");
var setSpecies = __webpack_require__("c650");
var DESCRIPTORS = __webpack_require__("dad2");
var fastKey = __webpack_require__("3cc6").fastKey;
var validate = __webpack_require__("4678");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "eb94":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("3cea");
var define = __webpack_require__("c892");

var implementation = __webpack_require__("c1fd");
var getPolyfill = __webpack_require__("3ee1");
var shim = __webpack_require__("ed11");

var bound = bind.call(Function.call, getPolyfill());

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "ed11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__("9f60");

var getPolyfill = __webpack_require__("3ee1");
var define = __webpack_require__("c892");

module.exports = function shimPromiseFinally() {
	requirePromise();

	var polyfill = getPolyfill();
	define(Promise.prototype, { 'finally': polyfill }, {
		'finally': function testFinally() {
			return Promise.prototype['finally'] !== polyfill;
		}
	});
	return polyfill;
};


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

/***/ "f301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("b2f5");
var $includes = __webpack_require__("9f58")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("644a")('includes');


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

/***/ "f59b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("ddf7");
var createDesc = __webpack_require__("7dea");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
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

/***/ "f7c1":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


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

/***/ "fb66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


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


/***/ }),

/***/ "fb81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("3cea");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ })

/******/ });