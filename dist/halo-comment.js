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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "0029":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "00ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__("5156")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__("0f7c");
var hasOwn = __webpack_require__("a0d3");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "00d8":
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

/***/ "00f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__("5402");
var utils = __webpack_require__("3336");
var formats = __webpack_require__("9cec");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "0185":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("e5fa");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "01c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PostClient = void 0;
const tslib_1 = __webpack_require__("54b6");
const url_1 = __webpack_require__("a8c2");
class PostClient {
    constructor(client) {
        this.client = client;
    }
    list(params, keyword, categoryId) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts',
        });
        return this.client.get(path, Object.assign({ keyword, categoryId }, params));
    }
    search(keyword, pageQuery) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/search',
        });
        return this.client.get(path, Object.assign({ keyword }, pageQuery));
    }
    get(postId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    getBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/slug',
        });
        return this.client.get(path, Object.assign({ slug }, params));
    }
    getPrevPostById(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/prev`,
        });
        return this.client.get(path, {});
    }
    getNextPostById(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/next`,
        });
        return this.client.get(path, {});
    }
    like(postId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `posts/${postId}/likes`,
            });
            yield this.client.get(path, {});
        });
    }
}
exports.PostClient = PostClient;
//# sourceMappingURL=PostClient.js.map

/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
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

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
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

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "044b":
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

/***/ "05cc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterceptor = exports.RequestInterceptor = void 0;
const tslib_1 = __webpack_require__("978d");
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__("bc3a"));
class RequestInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.request.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.request.eject(id);
    }
}
exports.RequestInterceptor = RequestInterceptor;
class ResponseInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.response.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.response.eject(id);
    }
}
exports.ResponseInterceptor = ResponseInterceptor;
//# sourceMappingURL=InterceptorManager.js.map

/***/ }),

/***/ "06d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentApiClient = void 0;
const clients_1 = __webpack_require__("8aa4");
class ContentApiClient {
    constructor(client) {
        this.client = client.buildHttpClient();
        this._archive = new clients_1.ArchiveClient(this.client);
        this._category = new clients_1.CategoryClient(this.client);
        this._journal = new clients_1.JournalClient(this.client);
        this._link = new clients_1.LinkClient(this.client);
        this._menu = new clients_1.MenuClient(this.client);
        this._option = new clients_1.OptionClient(this.client);
        this._photo = new clients_1.PhotoClient(this.client);
        this._post = new clients_1.PostClient(this.client);
        this._sheet = new clients_1.SheetClient(this.client);
        this._statistic = new clients_1.StatisticClient(this.client);
        this._tag = new clients_1.TagClient(this.client);
        this._theme = new clients_1.ThemeClient(this.client);
        this._user = new clients_1.UserClient(this.client);
        this._comment = new clients_1.CommentClient(this.client);
    }
    get archive() {
        return this._archive;
    }
    get category() {
        return this._category;
    }
    get journal() {
        return this._journal;
    }
    get link() {
        return this._link;
    }
    get menu() {
        return this._menu;
    }
    get option() {
        return this._option;
    }
    get photo() {
        return this._photo;
    }
    get post() {
        return this._post;
    }
    get sheet() {
        return this._sheet;
    }
    get statistic() {
        return this._statistic;
    }
    get tag() {
        return this._tag;
    }
    get theme() {
        return this._theme;
    }
    get user() {
        return this._user;
    }
    get comment() {
        return this._comment;
    }
}
exports.ContentApiClient = ContentApiClient;
//# sourceMappingURL=ContentApiClient.js.map

/***/ }),

/***/ "097d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var speciesConstructor = __webpack_require__("ebd6");
var promiseResolve = __webpack_require__("bcaa");

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

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");
var validator = __webpack_require__("848b");

var validators = validator.validators;
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
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0a0a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da3c");
var core = __webpack_require__("a7d3");
var LIBRARY = __webpack_require__("b457");
var wksExt = __webpack_require__("fda1");
var defineProperty = __webpack_require__("3adc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
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

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0df6":
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

/***/ "0f7c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("688e");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "0f89":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6f8a");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "103a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("da3c").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "12fd":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6f8a");
var document = __webpack_require__("da3c").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "12fd9":
/***/ (function(module, exports) {



/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1696":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
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

/***/ "1938":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("d13f");

$export($export.S, 'Array', { isArray: __webpack_require__("b5aa") });


/***/ }),

/***/ "1b55":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("7772")('wks');
var uid = __webpack_require__("7b00");
var Symbol = __webpack_require__("da3c").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "1b8f":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a812");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1d2b":
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

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
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

/***/ "207f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveClient = void 0;
const url_1 = __webpack_require__("a8c2");
class ArchiveClient {
    constructor(client) {
        this.client = client;
    }
    listYearArchives() {
        const path = (0, url_1.buildPath)({
            endpointName: 'archives/years',
        });
        return this.client.get(path, {});
    }
    listMonthArchives() {
        const path = (0, url_1.buildPath)({
            endpointName: 'archives/years',
        });
        return this.client.get(path, {});
    }
}
exports.ArchiveClient = ArchiveClient;
//# sourceMappingURL=ArchiveClient.js.map

/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

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

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2312":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8ce0");


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

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
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

/***/ "2418":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6a9b");
var toLength = __webpack_require__("a5ab");
var toAbsoluteIndex = __webpack_require__("1b8f");
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

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");
var enhanceError = __webpack_require__("387f");

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
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
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
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
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
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("f28c")))

/***/ }),

/***/ "245b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2695":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("43c8");
var toIObject = __webpack_require__("6a9b");
var arrayIndexOf = __webpack_require__("2418")(false);
var IE_PROTO = __webpack_require__("5d8f")('IE_PROTO');

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

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "2a4e":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a812");
var defined = __webpack_require__("e5fa");
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

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
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

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
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

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2cb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HaloRestAPIClient = void 0;
const http_1 = __webpack_require__("c95e");
const HaloRequestConfigBuilder_1 = __webpack_require__("2d6c");
const HaloResponseHandler_1 = __webpack_require__("9559");
const platform_1 = __webpack_require__("c1f2");
const buildDiscriminatedAuth = (auth) => {
    if ('username' in auth) {
        return Object.assign({ type: 'password' }, auth);
    }
    if ('apiToken' in auth) {
        return Object.assign({ type: 'apiToken' }, auth);
    }
    if ('adminToken' in auth) {
        return Object.assign({ type: 'adminToken' }, auth);
    }
    if ('oAuthToken' in auth) {
        return Object.assign({ type: 'oAuthToken' }, auth);
    }
    if ('type' in auth && auth['type'] == 'customizeAuth') {
        return auth;
    }
    return undefined;
};
class HaloRestAPIClient {
    constructor(options = {}) {
        var _a;
        this.baseUrl = platform_1.platformDeps.buildBaseUrl(options.baseUrl);
        const auth = buildDiscriminatedAuth((_a = options.auth) !== null && _a !== void 0 ? _a : {});
        const requestConfigBuilder = new HaloRequestConfigBuilder_1.HaloRequestConfigBuilder(Object.assign(Object.assign({}, options), { baseUrl: this.baseUrl, auth }));
        const responseHandler = new HaloResponseHandler_1.HaloResponseHandler();
        this.httpClient = new http_1.DefaultHttpClient({
            responseHandler,
            requestConfigBuilder,
        });
        this._interceptors = this.httpClient.interceptors;
    }
    static get version() {
        return platform_1.platformDeps.getVersion();
    }
    get interceptors() {
        return this._interceptors;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    buildHttpClient() {
        return this.httpClient;
    }
}
exports.HaloRestAPIClient = HaloRestAPIClient;
//# sourceMappingURL=HaloRestAPIClient.js.map

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HaloRequestConfigBuilder = void 0;
const tslib_1 = __webpack_require__("978d");
const form_data_1 = (0, tslib_1.__importDefault)(__webpack_require__("5a30"));
const qs_1 = (0, tslib_1.__importDefault)(__webpack_require__("7740"));
const js_base64_1 = __webpack_require__("e762");
const auth_1 = __webpack_require__("c250");
const platform_1 = __webpack_require__("c1f2");
const THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE = 4096;
class HaloRequestConfigBuilder {
    constructor({ baseUrl, auth, basicAuth, clientCertAuth, proxy, userAgent, }) {
        this.baseUrl = baseUrl;
        this.auth = auth;
        this.headers = this.buildHeaders({ basicAuth, userAgent });
        this.clientCertAuth = clientCertAuth;
        this.proxy = proxy;
        this.requestToken = null;
    }
    build(method, path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = Object.assign(Object.assign(Object.assign({ method, headers: this.headers, url: `${this.baseUrl}${path}` }, (options ? options : {})), platform_1.platformDeps.buildPlatformDependentConfig({
                clientCertAuth: this.clientCertAuth,
            })), { proxy: this.proxy });
            switch (method) {
                case 'get': {
                    const requestUrl = this.buildRequestUrl(path, params);
                    if (requestUrl.length > THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE) {
                        return Object.assign(Object.assign({}, requestConfig), { method: 'post', headers: Object.assign(Object.assign({}, this.headers), { 'X-HTTP-Method-Override': 'GET' }), data: yield this.buildData(params) });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                case 'post': {
                    if (params instanceof form_data_1.default) {
                        const formData = yield this.buildData(params);
                        return Object.assign(Object.assign({}, requestConfig), { headers: 
                            // NOTE: formData.getHeaders does not exist in a browser environment.
                            typeof formData.getHeaders === 'function' ? Object.assign(Object.assign({}, this.headers), formData.getHeaders()) : this.headers, data: formData });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'put': {
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'delete': {
                    if (params instanceof Array) {
                        return Object.assign(Object.assign({}, requestConfig), { headers: this.headers, data: params });
                    }
                    const requestUrl = this.buildRequestUrl(path, yield this.buildData(params));
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                default: {
                    throw new Error(`${method} method is not supported`);
                }
            }
        });
    }
    buildRequestUrl(path, params) {
        const requestUrl = `${this.baseUrl}${path}`;
        const query = qs_1.default.stringify(params, { indices: false });
        return query ? `${requestUrl}?${query}` : requestUrl;
    }
    buildData(params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth && this.auth.type === 'session') {
                const requestToken = yield this.getRequestToken();
                if (params instanceof form_data_1.default) {
                    params.append(auth_1.SESSION_TOKEN_KEY, requestToken);
                    return params;
                }
                return Object.assign({ [auth_1.SESSION_TOKEN_KEY]: requestToken }, params);
            }
            return params;
        });
    }
    buildHeaders(params) {
        const { basicAuth, userAgent } = params;
        const basicAuthHeaders = basicAuth
            ? {
                Authorization: `Basic ${js_base64_1.Base64.encode(`${basicAuth.username}:${basicAuth.password}`)}`,
            }
            : {};
        const platformDepsHeaders = platform_1.platformDeps.buildHeaders({ userAgent });
        const commonHeaders = Object.assign(Object.assign({}, platformDepsHeaders), basicAuthHeaders);
        if (!this.auth) {
            return {};
        }
        switch (this.auth.type) {
            case 'password': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: js_base64_1.Base64.encode(`${this.auth.username}:${this.auth.password}`) });
            }
            case 'adminToken': {
                const adminToken = this.auth.adminToken;
                return Object.assign(Object.assign({}, commonHeaders), { 'Admin-Authorization': adminToken });
            }
            case 'apiToken': {
                const apiToken = this.auth.apiToken;
                if (Array.isArray(apiToken)) {
                    return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken.join(',') });
                }
                return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken });
            }
            case 'oAuthToken': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: `Bearer ${this.auth.oAuthToken}` });
            }
            case 'customizeAuth': {
                return Object.assign(Object.assign({}, commonHeaders), { [this.auth.authHeader]: this.auth.getToken() });
            }
            default: {
                // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
                return Object.assign(Object.assign({}, commonHeaders), { 'X-Requested-With': 'XMLHttpRequest' });
            }
        }
    }
    getRequestToken() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.requestToken === null) {
                this.requestToken = yield platform_1.platformDeps.getRequestToken();
            }
            return this.requestToken;
        });
    }
}
exports.HaloRequestConfigBuilder = HaloRequestConfigBuilder;
//# sourceMappingURL=HaloRequestConfigBuilder.js.map

/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

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

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "2ea1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("6f8a");
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

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
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
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "31c2":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3336":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__("9cec");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "35d6":
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
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

/***/ "387f":
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
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "3a23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedPlatformError = void 0;
class UnsupportedPlatformError extends Error {
    constructor(platform) {
        const message = `This function is not supported in ${platform} environment`;
        super(message);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnsupportedPlatformError);
        }
        this.name = 'UnsupportedPlatformError';
        this.platform = platform;
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnsupportedPlatformError.prototype);
    }
}
exports.UnsupportedPlatformError = UnsupportedPlatformError;
//# sourceMappingURL=UnsupportedPlatformError.js.map

/***/ }),

/***/ "3adc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0f89");
var IE8_DOM_DEFINE = __webpack_require__("a47f");
var toPrimitive = __webpack_require__("2ea1");
var dP = Object.defineProperty;

exports.f = __webpack_require__("7d95") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
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
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "3cb6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentClient = void 0;
const url_1 = __webpack_require__("a8c2");
class CommentClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get top comments
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listTopComments(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/top_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get children comments
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param commentId the id of the top comment
     * @param params optional query params
     */
    listChildren(target, targetId, commentId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/${commentId}/children`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get comments as tree view
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listAsTreeView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/tree_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get comments as list view
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listAsView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/list_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Create a comment
     *
     * @param target posts, sheets, or journals
     * @param params the comment params
     */
    create(target, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments`,
        });
        return this.client.post(path, params);
    }
}
exports.CommentClient = CommentClient;
//# sourceMappingURL=CommentClient.js.map

/***/ }),

/***/ "3eb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("0f7c");
var GetIntrinsic = __webpack_require__("00ce");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "4318":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoClient = void 0;
const url_1 = __webpack_require__("a8c2");
class PhotoClient {
    constructor(client) {
        this.client = client;
    }
    latest(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/latest',
        });
        return this.client.get(path, { sort });
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos',
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.PhotoClient = PhotoClient;
//# sourceMappingURL=PhotoClient.js.map

/***/ }),

/***/ "436c":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("1b55")('iterator');
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

/***/ "43c8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
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

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
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

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
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

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("c26b");
var validate = __webpack_require__("b39a");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("e0b8")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "5156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__("1696");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

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

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");
var Cancel = __webpack_require__("7a77");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
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

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
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
    response.data = transformData.call(
      config,
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
        reason.response.data = transformData.call(
          config,
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

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5402":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");
var callBound = __webpack_require__("545e");
var inspect = __webpack_require__("69fb");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "545e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var callBind = __webpack_require__("3eb1");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "54b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "565d":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6a9b");
var gOPN = __webpack_require__("d876").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "57f7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("93c4");
__webpack_require__("6109");
module.exports = __webpack_require__("a7d3").Array.from;


/***/ }),

/***/ "5927":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("93c4");
__webpack_require__("b42c");
module.exports = __webpack_require__("fda1").f('iterator');


/***/ }),

/***/ "5a30":
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("f6fd")
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

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
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

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Comment.vue?vue&type=template&id=5da321d0&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"halo-comment"},[_c('section',{staticClass:"header",on:{"click":function($event){return _vm.handleOpenEditor()}}},[_c('comment-placeholder',{attrs:{"comment":_vm.editingComment,"options":_vm.options}})],1),_c('section',{staticClass:"\n      comment-alert"},[_vm._l((_vm.infoes),function(info,index){return _c('div',{key:index,staticClass:"alert info"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(info))])])}),_vm._l((_vm.successes),function(success,index){return _c('div',{key:index,staticClass:"alert success"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(success))])])}),_vm._l((_vm.warnings),function(warning,index){return _c('div',{key:index,staticClass:"alert warning"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(warning))])])})],2),_c('section',{staticClass:"loading"},[_c('comment-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.comments.loading),expression:"comments.loading"}]})],1),_c('section',{staticClass:"body"},[_c('comment-body',{directives:[{name:"show",rawName:"v-show",value:(!_vm.comments.loading),expression:"!comments.loading"}],attrs:{"comments":_vm.comments.data,"options":_vm.options,"target":_vm.target,"targetId":_vm.id},on:{"reply":_vm.handleReply}})],1),_c('section',{staticClass:"pagination"},[_c('pagination',{attrs:{"page":_vm.comments.params.page,"size":_vm.comments.params.size,"total":_vm.comments.total},on:{"change":_vm.handlePaginationChange}})],1),_c('section',{staticClass:"footer-editor"},[(_vm.editor.visible)?_c('comment-editor',{attrs:{"options":_vm.options,"replyingComment":_vm.replyingComment,"target":_vm.target,"targetId":_vm.id},on:{"close":_vm.handleEditorClose,"created":_vm.handleCommentCreated,"exit":_vm.handleEditorExit,"failed":_vm.handleFailedToCreateComment,"input":_vm.handleEditorInput}}):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=template&id=5da321d0&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("097d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentPlaceholder.vue?vue&type=template&id=7643904c&
var CommentPlaceholdervue_type_template_id_7643904c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-placeholder"},[_c('div',{staticClass:"comment-item"},[_c('img',{staticClass:"comment-item-author-avatar",attrs:{"alt":_vm.comment.author,"src":_vm.avatar}}),_c('div',{staticClass:"comment-item-main"},[_c('div',{staticClass:"comment-item-header"},[_c('span',{staticClass:"header-author"},[_vm._v("\n          "+_vm._s(_vm.comment.author || '...')+"\n        ")])]),_c('div',{staticClass:"comment-item-content"},[(this.comment.content)?_c('p',{domProps:{"innerHTML":_vm._s(_vm.renderedContent)}}):_c('p',[_vm._v(_vm._s(_vm.options.comment_content_placeholder || '撰写评论...'))])])])])])}
var CommentPlaceholdervue_type_template_id_7643904c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentPlaceholder.vue?vue&type=template&id=7643904c&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js


function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj;
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

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
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
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
  return regexp.test(str);
}
function isEmail(email) {
  var regexp = /^[A-Za-z1-9]+([-_.][A-Za-z1-9]+)*@([A-Za-z1-9]+[-.])+[A-Za-z]{2,8}$/;
  return regexp.test(email);
}
function isEmpty(content) {
  return content === null || content === undefined || content === '';
}
function isObject(value) {
  return value && typeof_typeof(value) === 'object' && value.constructor === Object;
}
// EXTERNAL MODULE: ./node_modules/marked/lib/marked.umd.js
var marked_umd = __webpack_require__("7c5c");

// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__("6821f");
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentPlaceholder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CommentPlaceholdervue_type_script_lang_js_ = ({
  props: {
    comment: {
      type: Object,
      required: false,
      default: function _default() {}
    },
    options: {
      required: false,
      default: []
    }
  },
  computed: {
    renderedContent: function renderedContent() {
      return this.comment.content ? marked_umd["marked"].parse(this.comment.content) : '';
    },
    avatar: function avatar() {
      var gravatarDefault = this.options.comment_gravatar_default;
      var gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';

      if (!this.comment.email || !isEmail(this.comment.email)) {
        return "".concat(gravatarSource, "?s=256&d=").concat(gravatarDefault);
      }

      var gravatarMd5 = md5_default()(this.comment.email);
      return "".concat(gravatarSource).concat(gravatarMd5, "?s=256&d=") + gravatarDefault;
    }
  },
  created: function created() {
    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author');
    this.comment.authorUrl = localStorage.getItem('comment-authorUrl');
    this.comment.email = localStorage.getItem('comment-email');
  }
});
// CONCATENATED MODULE: ./src/components/CommentPlaceholder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentPlaceholdervue_type_script_lang_js_ = (CommentPlaceholdervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentPlaceholder.vue





/* normalize component */

var component = normalizeComponent(
  components_CommentPlaceholdervue_type_script_lang_js_,
  CommentPlaceholdervue_type_template_id_7643904c_render,
  CommentPlaceholdervue_type_template_id_7643904c_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentPlaceholder = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentBody.vue?vue&type=template&id=0f05a1ca&scoped=true&
var CommentBodyvue_type_template_id_0f05a1ca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"comment-fade"}},[_c('div',{staticClass:"comment-items"},[_vm._l((_vm.comments),function(comment,index){return [_c('comment-node',{key:index,attrs:{"comment":comment,"targetId":_vm.targetId,"target":_vm.target,"options":_vm.options},on:{"reply":_vm.handleReply}})]})],2)])}
var CommentBodyvue_type_template_id_0f05a1ca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentBody.vue?vue&type=template&id=0f05a1ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentBody.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
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
      default: function _default() {
        return [];
      }
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
  methods: {
    handleReply: function handleReply(comment, repliedSuccess) {
      this.$emit('reply', comment, repliedSuccess);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CommentBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentBodyvue_type_script_lang_js_ = (CommentBodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentBody.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("6f48")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CommentBody_component = normalizeComponent(
  components_CommentBodyvue_type_script_lang_js_,
  CommentBodyvue_type_template_id_0f05a1ca_scoped_true_render,
  CommentBodyvue_type_template_id_0f05a1ca_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "0f05a1ca",
  null
  ,true
)

/* harmony default export */ var CommentBody = (CommentBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentNode.vue?vue&type=template&id=9fb27200&
var CommentNodevue_type_template_id_9fb27200_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-item",attrs:{"id":_vm.comment.id}},[(_vm.options.comment_gravatar_default)?_c('img',{staticClass:"comment-item-author-avatar",attrs:{"alt":_vm.comment.author,"src":_vm.avatar}}):_vm._e(),_c('div',{staticClass:"comment-item-main"},[_c('div',{staticClass:"comment-item-header"},[_c('span',{staticClass:"header-author"},[(_vm.urlValid)?_c('a',{attrs:{"href":_vm.comment.authorUrl,"target":"_blank"},domProps:{"textContent":_vm._s(_vm.comment.author)}}):_c('a',{attrs:{"href":"javascript:void(0)"},domProps:{"textContent":_vm._s(_vm.comment.author)}})]),(_vm.comment.isAdmin)?_c('span',{staticClass:"header-admin"},[_vm._v("博主")]):_vm._e(),_c('span',{staticClass:"header-time"},[_vm._v(_vm._s(_vm.createTimeAgo))]),_c('a',{attrs:{"href":'#' + _vm.comment.id}},[_c('span',{staticClass:"header-id",attrs:{"id":_vm.comment.id}},[_vm._v(" #"+_vm._s(_vm.comment.id)+" ")])])]),_c('div',{staticClass:"comment-item-content"},[(_vm.hasParent)?_c('a',{attrs:{"href":'#' + _vm.comment.parentId}},[_c('span',{staticClass:"content-at-id"},[_vm._v(" #"+_vm._s(_vm.comment.parentId)+" ")])]):_vm._e(),_c('p',{domProps:{"innerHTML":_vm._s(_vm.compileContent)}})]),_c('div',{staticClass:"comment-item-controls"},[_c('ul',[(_vm.comment.hasChildren)?_c('li',[_c('button',{staticClass:"item-control-more",class:{ active: _vm.hasChildrenBody },on:{"click":_vm.handleMoreClick}},[_vm._v("\n            更多\n          ")])]):_vm._e(),_c('li',[_c('button',{staticClass:"item-control-reply",on:{"click":_vm.handleReplyClick}},[_vm._v("回复")])])])])]),(_vm.hasChildrenBody)?_c('div',{staticClass:"comment-item-children"},[_c('section',{staticClass:"loading"},[_c('comment-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.commentLoading),expression:"commentLoading"}]})],1),_c('comment-body',{directives:[{name:"show",rawName:"v-show",value:(!_vm.commentLoading),expression:"!commentLoading"}],attrs:{"comments":_vm.children,"options":_vm.options,"target":_vm.target,"targetId":_vm.targetId},on:{"reply":_vm.handleChildReply}})],1):_vm._e()])}
var CommentNodevue_type_template_id_9fb27200_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentNode.vue?vue&type=template&id=9fb27200&

// EXTERNAL MODULE: ./node_modules/@halo-dev/content-api/lib/index.js
var lib = __webpack_require__("c256");

// CONCATENATED MODULE: ./src/plugins/api-client.js

var haloRestApiClient = new lib["HaloRestAPIClient"]({
  baseUrl:  true ? '' : undefined
});
var apiClient = new lib["ContentApiClient"](haloRestApiClient);
/* harmony default export */ var api_client = (apiClient);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentNode.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      default: function _default() {}
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
  data: function data() {
    return {
      children: [],
      commentLoading: false
    };
  },
  computed: {
    avatar: function avatar() {
      var gravatarDefault = this.options.comment_gravatar_default;
      var gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';

      if (this.comment.avatar) {
        return this.comment.avatar;
      }

      return "".concat(gravatarSource).concat(this.comment.gravatarMd5, "?s=256&d=").concat(gravatarDefault);
    },
    createTimeAgo: function createTimeAgo() {
      return timeAgo(this.comment.createTime);
    },
    compileContent: function compileContent() {
      return marked_umd["marked"].parse(this.comment.content);
    },
    urlValid: function urlValid() {
      return isUrl(this.comment.authorUrl);
    },
    hasChildrenBody: function hasChildrenBody() {
      return this.comment.hasChildren && this.children !== null && this.children.length > 0;
    },
    hasParent: function hasParent() {
      return this.comment.parentId !== null && this.comment.parentId > 0;
    }
  },
  methods: {
    handleMoreClick: function handleMoreClick() {
      var _this = this;

      if (this.hasChildrenBody) {
        this.children = [];
        return;
      } // Get children


      this.children = [];
      this.commentLoading = true;
      api_client.comment.listChildren(this.target, this.targetId, this.comment.id).then(function (response) {
        _this.children = response.data;
      }).finally(function () {
        _this.commentLoading = false;
      });
    },
    handleReplyClick: function handleReplyClick() {
      this.$emit('reply', this.comment, this.repliedSuccess);
    },
    handleChildReply: function handleChildReply(comment, repliedSuccess) {
      this.$emit('reply', comment, repliedSuccess);
    },
    repliedSuccess: function repliedSuccess() {// DO NOTHING...
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
  CommentNodevue_type_template_id_9fb27200_render,
  CommentNodevue_type_template_id_9fb27200_staticRenderFns,
  false,
  CommentNode_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentNode = (CommentNode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=template&id=2c3e45f1&
var CommentEditorvue_type_template_id_2c3e45f1_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal-fade"}},[_c('div',{staticClass:"comment-modal",attrs:{"autofocus":""},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.close.apply(null, arguments)},"~keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close.apply(null, arguments)}}},[_c('div',{staticClass:"comment-modal-container"},[_c('div',{staticClass:"comment-poster-editor-emoji"},[_c('VEmojiPicker',{directives:[{name:"show",rawName:"v-show",value:(_vm.emojiPicker.visible),expression:"emojiPicker.visible"}],attrs:{"pack":_vm.emojiPicker.pack,"labelSearch":"搜索表情"},on:{"select":_vm.handleSelectEmoji}})],1),_c('div',{staticClass:"comment-poster-container active"},[_c('ul',{staticClass:"comment-poster-controls"},[_c('li',{staticClass:"poster-item-close"},[_c('span',{staticClass:"editor-btn-close",on:{"click":_vm.exit}},[_vm._v("×")])])]),_c('div',{staticClass:"comment-poster-main"},[_c('div',{staticClass:"comment-poster-main-body"},[(_vm.options.comment_gravatar_default)?_c('img',{staticClass:"comment-poster-body-avatar",attrs:{"alt":_vm.comment.author,"src":_vm.avatar}}):_vm._e(),_c('div',{staticClass:"comment-poster-body-content"},[_c('ul',{staticClass:"comment-poster-body-header"},[_c('li',{staticClass:"header-item-nickname"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.author),expression:"comment.author"}],ref:"authorInput",attrs:{"placeholder":"昵称 *","type":"text"},domProps:{"value":(_vm.comment.author)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "author", $event.target.value)},_vm.handleAuthorInput]}}),_c('span')]),_c('li',{staticClass:"header-item-email"},[_c('CommentInput',{attrs:{"placeholder":'邮箱 *',"suffixFlag":'@',"suggestionList":[
                      { id: 1, suffix: '@qq.com' },
                      { id: 2, suffix: '@163.com' },
                      { id: 3, suffix: '@foxmail.com' },
                      { id: 4, suffix: '@gmail.com' }
                    ],"type":'email'},model:{value:(_vm.comment.email),callback:function ($$v) {_vm.$set(_vm.comment, "email", $$v)},expression:"comment.email"}})],1),_c('li',{staticClass:"header-item-website"},[_c('CommentInput',{attrs:{"placeholder":'网站',"prefixFlag":':/',"suggestionList":[
                      { id: 1, prefix: 'http://' },
                      { id: 2, prefix: 'https://' }
                    ]},model:{value:(_vm.comment.authorUrl),callback:function ($$v) {_vm.$set(_vm.comment, "authorUrl", $$v)},expression:"comment.authorUrl"}})],1)]),(_vm.replyingComment)?_c('span',{staticClass:"comment-poster-body-reply"},[_vm._v("\n                回复：@"+_vm._s(_vm.replyingComment.author)+" "),_c('small',[_vm._v("#"+_vm._s(_vm.replyingComment.id))])]):_vm._e(),_c('div',{staticClass:"comment-poster-body-editor"},[_c('div',{staticClass:"comment-poster-editor-wrapper"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.content),expression:"comment.content"}],ref:"contentInput",style:(_vm.replyingComment == null ? 'height: 146px;' : 'height: 128px;'),attrs:{"placeholder":"撰写评论...（1000 个字符内）"},domProps:{"value":(_vm.comment.content)},on:{"focus":function () { return (this$1.emojiPicker.visible = false); },"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "content", $event.target.value)},_vm.handleContentInput]}})]),_c('ul',{staticClass:"comment-poster-editor-controls"},[_c('li',{staticClass:"editor-item-reply mobile-show"},[_c('button',{staticClass:"editor-btn-reply",attrs:{"disabled":!_vm.commentValid,"type":"button"},on:{"click":_vm.handleSubmitClick}},[_vm._v("\n                      评论\n                    ")])]),_c('li',{staticClass:"editor-item-emoji"},[_c('button',{staticClass:"editor-btn-emoji",attrs:{"type":"button"},on:{"click":function($event){_vm.emojiPicker.visible = !_vm.emojiPicker.visible}}},[_vm._v("\n                      表情\n                    ")])])])])])])])])])])])}
var CommentEditorvue_type_template_id_2c3e45f1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=template&id=2c3e45f1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=template&id=1a4101ac&
var VEmojiPickervue_type_template_id_1a4101ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"EmojiPicker"}},[(_vm.showCategory)?_c('Categories',{on:{"select":function($event){return _vm.onChangeCategory($event)}}}):_vm._e(),(_vm.showSearch)?_c('InputSearch',{attrs:{"placeholder":_vm.labelSearch},model:{value:(_vm.filterEmoji),callback:function ($$v) {_vm.filterEmoji=$$v},expression:"filterEmoji"}}):_vm._e(),_c('EmojiList',{attrs:{"data":_vm.emojis,"category":_vm.category,"filter":_vm.filterEmoji,"emojisByRow":_vm.emojisByRow,"continuousList":_vm.continuousList},on:{"select":function($event){return _vm.onSelectEmoji($event)}}})],1)}
var VEmojiPickervue_type_template_id_1a4101ac_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=template&id=1a4101ac&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__("4f7f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Categories.vue?vue&type=template&id=16c5d040&
var Categoriesvue_type_template_id_16c5d040_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(category,index){return _c('div',{key:index,class:['category', { active: index === _vm.active }],on:{"click":function($event){return _vm.onSelect(index)}}},[_c('VSvg',{attrs:{"name":category.icon}})],1)}),0)}
var Categoriesvue_type_template_id_16c5d040_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/Categories.vue?vue&type=template&id=16c5d040&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VSvg.vue?vue&type=template&id=6704c7e5&
var VSvgvue_type_template_id_6704c7e5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{style:(_vm.styleSVG),attrs:{"id":"VSvg"},domProps:{"innerHTML":_vm._s(_vm.icon)}})}
var VSvgvue_type_template_id_6704c7e5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/VSvg.vue?vue&type=template&id=6704c7e5&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VSvg.vue?vue&type=script&lang=js&




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    icon: function icon() {
      return categories[this.name];
    },
    styleSVG: function styleSVG() {
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
  VSvgvue_type_template_id_6704c7e5_render,
  VSvgvue_type_template_id_6704c7e5_staticRenderFns,
  false,
  VSvg_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var VSvg = (VSvg_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Categories.vue?vue&type=script&lang=js&
//
//
//
//
//
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
  data: function data() {
    return {
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
    };
  },
  methods: {
    onSelect: function onSelect(index) {
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
  Categoriesvue_type_template_id_16c5d040_render,
  Categoriesvue_type_template_id_16c5d040_staticRenderFns,
  false,
  Categories_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Categories = (Categories_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/EmojiList.vue?vue&type=template&id=14c5c42e&
var EmojiListvue_type_template_id_14c5c42e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[(_vm.continuousList)?_vm._l((_vm.dataFilteredByCategory),function(category,category_name){return _c('div',{key:category_name,staticClass:"category-line"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(category.length),expression:"category.length"}],ref:category_name,refInFor:true,staticClass:"category-title"},[_vm._v("\n          "+_vm._s(category_name)+"\n        ")]),(category.length)?_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((category),function(emoji,index_e){return _c('Emoji',{key:(category_name + "-" + index_e),attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1):_vm._e()])}):_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((_vm.dataFiltered),function(emoji,index){return _c('Emoji',{key:index,attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)],2)])}
var EmojiListvue_type_template_id_14c5c42e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/EmojiList.vue?vue&type=template&id=14c5c42e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Emoji.vue?vue&type=template&id=72832d4d&
var Emojivue_type_template_id_72832d4d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"emoji",domProps:{"innerHTML":_vm._s(_vm.data)}})}
var Emojivue_type_template_id_72832d4d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/Emoji.vue?vue&type=template&id=72832d4d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Emoji.vue?vue&type=script&lang=js&
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
  Emojivue_type_template_id_72832d4d_render,
  Emojivue_type_template_id_72832d4d_staticRenderFns,
  false,
  Emoji_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var EmojiPicker_Emoji = (Emoji_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/EmojiList.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Emoji: EmojiPicker_Emoji
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
      this.$emit('select', emoji);
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
      this.$refs['container-emoji'].scrollTop = 0;
    },
    category: function category(new_category) {
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
  EmojiListvue_type_template_id_14c5c42e_render,
  EmojiListvue_type_template_id_14c5c42e_staticRenderFns,
  false,
  EmojiList_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var EmojiList = (EmojiList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/InputSearch.vue?vue&type=template&id=43fa4d86&
var InputSearchvue_type_template_id_43fa4d86_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.onKeyUp($event)}}})])])}
var InputSearchvue_type_template_id_43fa4d86_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmojiPicker/InputSearch.vue?vue&type=template&id=43fa4d86&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/InputSearch.vue?vue&type=script&lang=js&
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
    onKeyUp: function onKeyUp(event) {
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
  InputSearchvue_type_template_id_43fa4d86_render,
  InputSearchvue_type_template_id_43fa4d86_staticRenderFns,
  false,
  InputSearch_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var InputSearch = (InputSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
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
      category: 'Peoples',
      filterEmoji: ''
    };
  },
  created: function created() {
    this.mapperData(this.pack);
  },
  methods: {
    onChangeCategory: function onChangeCategory(category) {
      this.category = category.name;
      this.$emit('changeCategory', this.category);
    },
    onSelectEmoji: function onSelectEmoji(emoji) {
      this.updateFrequenty(emoji);
      this.$emit('select', emoji);
    },
    updateFrequenty: function updateFrequenty(emoji) {
      this.mapEmojis['Frequenty'] = _toConsumableArray(new Set([].concat(_toConsumableArray(this.mapEmojis['Frequenty']), [emoji])));
    },
    mapperData: function mapperData(dataEmojis) {
      var _this = this;

      this.$set(this.mapEmojis, 'Frequenty', []);
      dataEmojis.forEach(function (emoji) {
        var _category = emoji['category'];

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
// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_VEmojiPickervue_type_script_lang_js_ = (VEmojiPickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue



function VEmojiPicker_injectStyles (context) {
  
  
}

/* normalize component */

var VEmojiPicker_component = normalizeComponent(
  EmojiPicker_VEmojiPickervue_type_script_lang_js_,
  VEmojiPickervue_type_template_id_1a4101ac_render,
  VEmojiPickervue_type_template_id_1a4101ac_staticRenderFns,
  false,
  VEmojiPicker_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var VEmojiPicker = (VEmojiPicker_component.exports);
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./src/components/EmojiPicker/data/emojis.js


/* eslint-disable prettier/prettier */

/* based on https://github.com/joaoeudes7/V-Emoji-Picker */
var emojis_Emoji = function Emoji(emoji, description, category, aliases, tags) {
  _classCallCheck(this, Emoji);

  this.emoji = emoji;
  this.description = description;
  this.category = category;
  this.aliases = aliases;
  this.tags = tags;
};

/* harmony default export */ var emojis = ([new emojis_Emoji('😀', 'grinning face', 'Peoples', ['grinning'], ['smile', 'happy']), new emojis_Emoji('😃', 'smiling face with open mouth', 'Peoples', ['smiley'], ['happy', 'joy', 'haha']), new emojis_Emoji('😄', 'smiling face with open mouth & smiling eyes', 'Peoples', ['smile'], ['happy', 'joy', 'laugh', 'pleased']), new emojis_Emoji('😁', 'grinning face with smiling eyes', 'Peoples', ['grin'], []), new emojis_Emoji('😆', 'smiling face with open mouth & closed eyes', 'Peoples', ['laughing', 'satisfied'], ['happy', 'haha']), new emojis_Emoji('😅', 'smiling face with open mouth & cold sweat', 'Peoples', ['sweat_smile'], ['hot']), new emojis_Emoji('😂', 'face with tears of joy', 'Peoples', ['joy'], ['tears']), new emojis_Emoji('🤣', 'rolling on the floor laughing', 'Peoples', ['rofl'], ['lol', 'laughing']), new emojis_Emoji('😌', 'smiling face', 'Peoples', ['relaxed'], ['blush', 'pleased']), new emojis_Emoji('😊', 'smiling face with smiling eyes', 'Peoples', ['blush'], ['proud']), new emojis_Emoji('😇', 'smiling face with halo', 'Peoples', ['innocent'], ['angel']), new emojis_Emoji('🙂', 'slightly smiling face', 'Peoples', ['slightly_smiling_face'], []), new emojis_Emoji('🙃', 'upside-down face', 'Peoples', ['upside_down_face'], []), new emojis_Emoji('😉', 'winking face', 'Peoples', ['wink'], ['flirt']), new emojis_Emoji('😌', 'relieved face', 'Peoples', ['relieved'], ['whew']), new emojis_Emoji('😍', 'smiling face with heart-eyes', 'Peoples', ['heart_eyes'], ['love', 'crush']), new emojis_Emoji('😘', 'face blowing a kiss', 'Peoples', ['kissing_heart'], ['flirt']), new emojis_Emoji('😗', 'kissing face', 'Peoples', ['kissing'], []), new emojis_Emoji('😙', 'kissing face with smiling eyes', 'Peoples', ['kissing_smiling_eyes'], []), new emojis_Emoji('😚', 'kissing face with closed eyes', 'Peoples', ['kissing_closed_eyes'], []), new emojis_Emoji('😋', 'face savouring delicious food', 'Peoples', ['yum'], ['tongue', 'lick']), new emojis_Emoji('😜', 'face with stuck-out tongue & winking eye', 'Peoples', ['stuck_out_tongue_winking_eye'], ['prank', 'silly']), new emojis_Emoji('😝', 'face with stuck-out tongue & closed eyes', 'Peoples', ['stuck_out_tongue_closed_eyes'], ['prank']), new emojis_Emoji('😛', 'face with stuck-out tongue', 'Peoples', ['stuck_out_tongue'], []), new emojis_Emoji('🤑', 'money-mouth face', 'Peoples', ['money_mouth_face'], ['rich']), new emojis_Emoji('🤗', 'hugging face', 'Peoples', ['hugs'], []), new emojis_Emoji('🤓', 'nerd face', 'Peoples', ['nerd_face'], ['geek', 'glasses']), new emojis_Emoji('😎', 'smiling face with sunglasses', 'Peoples', ['sunglasses'], ['cool']), new emojis_Emoji('🤡', 'clown face', 'Peoples', ['clown_face'], []), new emojis_Emoji('🤠', 'cowboy hat face', 'Peoples', ['cowboy_hat_face'], []), new emojis_Emoji('😏', 'smirking face', 'Peoples', ['smirk'], ['smug']), new emojis_Emoji('😒', 'unamused face', 'Peoples', ['unamused'], ['meh']), new emojis_Emoji('😞', 'disappointed face', 'Peoples', ['disappointed'], ['sad']), new emojis_Emoji('😔', 'pensive face', 'Peoples', ['pensive'], []), new emojis_Emoji('😟', 'worried face', 'Peoples', ['worried'], ['nervous']), new emojis_Emoji('😕', 'confused face', 'Peoples', ['confused'], []), new emojis_Emoji('🙁', 'slightly frowning face', 'Peoples', ['slightly_frowning_face'], []), new emojis_Emoji('☹️', 'frowning face', 'Peoples', ['frowning_face'], []), new emojis_Emoji('😣', 'persevering face', 'Peoples', ['persevere'], ['struggling']), new emojis_Emoji('😖', 'confounded face', 'Peoples', ['confounded'], []), new emojis_Emoji('😫', 'tired face', 'Peoples', ['tired_face'], ['upset', 'whine']), new emojis_Emoji('😩', 'weary face', 'Peoples', ['weary'], ['tired']), new emojis_Emoji('😤', 'face with steam from nose', 'Peoples', ['triumph'], ['smug']), new emojis_Emoji('😠', 'angry face', 'Peoples', ['angry'], ['mad', 'annoyed']), new emojis_Emoji('😡', 'pouting face', 'Peoples', ['rage', 'pout'], ['angry']), new emojis_Emoji('😶', 'face without mouth', 'Peoples', ['no_mouth'], ['mute', 'silence']), new emojis_Emoji('😐', 'neutral face', 'Peoples', ['neutral_face'], ['meh']), new emojis_Emoji('😑', 'expressionless face', 'Peoples', ['expressionless'], []), new emojis_Emoji('😯', 'hushed face', 'Peoples', ['hushed'], ['silence', 'speechless']), new emojis_Emoji('😦', 'frowning face with open mouth', 'Peoples', ['frowning'], []), new emojis_Emoji('😧', 'anguished face', 'Peoples', ['anguished'], ['stunned']), new emojis_Emoji('😮', 'face with open mouth', 'Peoples', ['open_mouth'], ['surprise', 'impressed', 'wow']), new emojis_Emoji('😲', 'astonished face', 'Peoples', ['astonished'], ['amazed', 'gasp']), new emojis_Emoji('😵', 'dizzy face', 'Peoples', ['dizzy_face'], []), new emojis_Emoji('😳', 'flushed face', 'Peoples', ['flushed'], []), new emojis_Emoji('😱', 'face screaming in fear', 'Peoples', ['scream'], ['horror', 'shocked']), new emojis_Emoji('😨', 'fearful face', 'Peoples', ['fearful'], ['scared', 'shocked', 'oops']), new emojis_Emoji('😰', 'face with open mouth & cold sweat', 'Peoples', ['cold_sweat'], ['nervous']), new emojis_Emoji('😢', 'crying face', 'Peoples', ['cry'], ['sad', 'tear']), new emojis_Emoji('😥', 'disappointed but relieved face', 'Peoples', ['disappointed_relieved'], ['phew', 'sweat', 'nervous']), new emojis_Emoji('🤤', 'drooling face', 'Peoples', ['drooling_face'], []), new emojis_Emoji('😭', 'loudly crying face', 'Peoples', ['sob'], ['sad', 'cry', 'bawling']), new emojis_Emoji('😓', 'face with cold sweat', 'Peoples', ['sweat'], []), new emojis_Emoji('😪', 'sleepy face', 'Peoples', ['sleepy'], ['tired']), new emojis_Emoji('😴', 'sleeping face', 'Peoples', ['sleeping'], ['zzz']), new emojis_Emoji('🙄', 'face with rolling eyes', 'Peoples', ['roll_eyes'], []), new emojis_Emoji('🤔', 'thinking face', 'Peoples', ['thinking'], []), new emojis_Emoji('🤥', 'lying face', 'Peoples', ['lying_face'], ['liar']), new emojis_Emoji('😬', 'grimacing face', 'Peoples', ['grimacing'], []), new emojis_Emoji('🤐', 'zipper-mouth face', 'Peoples', ['zipper_mouth_face'], ['silence', 'hush']), new emojis_Emoji('🤢', 'nauseated face', 'Peoples', ['nauseated_face'], ['sick', 'barf', 'disgusted']), new emojis_Emoji('🤧', 'sneezing face', 'Peoples', ['sneezing_face'], ['achoo', 'sick']), new emojis_Emoji('😷', 'face with medical mask', 'Peoples', ['mask'], ['sick', 'ill']), new emojis_Emoji('🤒', 'face with thermometer', 'Peoples', ['face_with_thermometer'], ['sick']), new emojis_Emoji('🤕', 'face with head-bandage', 'Peoples', ['face_with_head_bandage'], ['hurt']), new emojis_Emoji('😈', 'smiling face with horns', 'Peoples', ['smiling_imp'], ['devil', 'evil', 'horns']), new emojis_Emoji('👿', 'angry face with horns', 'Peoples', ['imp'], ['angry', 'devil', 'evil', 'horns']), new emojis_Emoji('👹', 'ogre', 'Peoples', ['japanese_ogre'], ['monster']), new emojis_Emoji('👺', 'goblin', 'Peoples', ['japanese_goblin'], []), new emojis_Emoji('💩', 'pile of poo', 'Peoples', ['hankey', 'poop', 'shit'], ['crap']), new emojis_Emoji('👻', 'ghost', 'Peoples', ['ghost'], ['halloween']), new emojis_Emoji('💀', 'skull', 'Peoples', ['skull'], ['dead', 'danger', 'poison']), new emojis_Emoji('☠️', 'skull and crossbones', 'Peoples', ['skull_and_crossbones'], ['danger', 'pirate']), new emojis_Emoji('👽', 'alien', 'Peoples', ['alien'], ['ufo']), new emojis_Emoji('👾', 'alien monster', 'Peoples', ['space_invader'], ['game', 'retro']), new emojis_Emoji('🤖', 'robot face', 'Peoples', ['robot'], []), new emojis_Emoji('🎃', 'jack-o-lantern', 'Peoples', ['jack_o_lantern'], ['halloween']), new emojis_Emoji('😺', 'smiling cat face with open mouth', 'Peoples', ['smiley_cat'], []), new emojis_Emoji('😸', 'grinning cat face with smiling eyes', 'Peoples', ['smile_cat'], []), new emojis_Emoji('😹', 'cat face with tears of joy', 'Peoples', ['joy_cat'], []), new emojis_Emoji('😻', 'smiling cat face with heart-eyes', 'Peoples', ['heart_eyes_cat'], []), new emojis_Emoji('😼', 'cat face with wry smile', 'Peoples', ['smirk_cat'], []), new emojis_Emoji('😽', 'kissing cat face with closed eyes', 'Peoples', ['kissing_cat'], []), new emojis_Emoji('🙀', 'weary cat face', 'Peoples', ['scream_cat'], ['horror']), new emojis_Emoji('😿', 'crying cat face', 'Peoples', ['crying_cat_face'], ['sad', 'tear']), new emojis_Emoji('😾', 'pouting cat face', 'Peoples', ['pouting_cat'], []), new emojis_Emoji('👐', 'open hands', 'Peoples', ['open_hands'], []), new emojis_Emoji('🙌', 'raising hands', 'Peoples', ['raised_hands'], ['hooray']), new emojis_Emoji('👏', 'clapping hands', 'Peoples', ['clap'], ['praise', 'applause']), new emojis_Emoji('🙏', 'folded hands', 'Peoples', ['pray'], ['please', 'hope', 'wish']), new emojis_Emoji('🤝', 'handshake', 'Peoples', ['handshake'], ['deal']), new emojis_Emoji('👍', 'thumbs up', 'Peoples', ['+1', 'thumbsup'], ['approve', 'ok']), new emojis_Emoji('👎', 'thumbs down', 'Peoples', ['-1', 'thumbsdown'], ['disapprove', 'bury']), new emojis_Emoji('👊', 'oncoming fist', 'Peoples', ['fist_oncoming', 'facepunch', 'punch'], ['attack']), new emojis_Emoji('✊', 'raised fist', 'Peoples', ['fist_raised', 'fist'], ['power']), new emojis_Emoji('🤛', 'left-facing fist', 'Peoples', ['fist_left'], []), new emojis_Emoji('🤜', 'right-facing fist', 'Peoples', ['fist_right'], []), new emojis_Emoji('🤞', 'crossed fingers', 'Peoples', ['crossed_fingers'], ['luck', 'hopeful']), new emojis_Emoji('✌️', 'victory hand', 'Peoples', ['v'], ['victory', 'peace']), new emojis_Emoji('🤘', 'sign of the horns', 'Peoples', ['metal'], []), new emojis_Emoji('👌', 'OK hand', 'Peoples', ['ok_hand'], []), new emojis_Emoji('👈', 'backhand index pointing left', 'Peoples', ['point_left'], []), new emojis_Emoji('👉', 'backhand index pointing right', 'Peoples', ['point_right'], []), new emojis_Emoji('👆', 'backhand index pointing up', 'Peoples', ['point_up_2'], []), new emojis_Emoji('👇', 'backhand index pointing down', 'Peoples', ['point_down'], []), new emojis_Emoji('☝️', 'index pointing up', 'Peoples', ['point_up'], []), new emojis_Emoji('✋', 'raised hand', 'Peoples', ['hand', 'raised_hand'], ['highfive', 'stop']), new emojis_Emoji('🤚', 'raised back of hand', 'Peoples', ['raised_back_of_hand'], []), new emojis_Emoji('🖐', 'raised hand with fingers splayed', 'Peoples', ['raised_hand_with_fingers_splayed'], []), new emojis_Emoji('🖖', 'vulcan salute', 'Peoples', ['vulcan_salute'], ['prosper', 'spock']), new emojis_Emoji('👋', 'waving hand', 'Peoples', ['wave'], ['goodbye']), new emojis_Emoji('🤙', 'call me hand', 'Peoples', ['call_me_hand'], []), new emojis_Emoji('💪', 'flexed biceps', 'Peoples', ['muscle'], ['flex', 'bicep', 'strong', 'workout']), new emojis_Emoji('🖕', 'middle finger', 'Peoples', ['middle_finger', 'fu'], []), new emojis_Emoji('✍️', 'writing hand', 'Peoples', ['writing_hand'], []), new emojis_Emoji('🤳', 'selfie', 'Peoples', ['selfie'], []), new emojis_Emoji('💅', 'nail polish', 'Peoples', ['nail_care'], ['beauty', 'manicure']), new emojis_Emoji('💍', 'ring', 'Peoples', ['ring'], ['wedding', 'marriage', 'engaged']), new emojis_Emoji('💄', 'lipstick', 'Peoples', ['lipstick'], ['makeup']), new emojis_Emoji('💋', 'kiss mark', 'Peoples', ['kiss'], ['lipstick']), new emojis_Emoji('👄', 'mouth', 'Peoples', ['lips'], ['kiss']), new emojis_Emoji('👅', 'tongue', 'Peoples', ['tongue'], ['taste']), new emojis_Emoji('👂', 'ear', 'Peoples', ['ear'], ['hear', 'sound', 'listen']), new emojis_Emoji('👃', 'nose', 'Peoples', ['nose'], ['smell']), new emojis_Emoji('👣', 'footprints', 'Peoples', ['footprints'], ['feet', 'tracks']), new emojis_Emoji('👁', 'eye', 'Peoples', ['eye'], []), new emojis_Emoji('👀', 'eyes', 'Peoples', ['eyes'], ['look', 'see', 'watch']), new emojis_Emoji('🗣', 'speaking head', 'Peoples', ['speaking_head'], []), new emojis_Emoji('👤', 'bust in silhouette', 'Peoples', ['bust_in_silhouette'], ['user']), new emojis_Emoji('👥', 'busts in silhouette', 'Peoples', ['busts_in_silhouette'], ['users', 'group', 'team']), new emojis_Emoji('👶', 'baby', 'Peoples', ['baby'], ['child', 'newborn']), new emojis_Emoji('👦', 'boy', 'Peoples', ['boy'], ['child']), new emojis_Emoji('👧', 'girl', 'Peoples', ['girl'], ['child']), new emojis_Emoji('👨', 'man', 'Peoples', ['man'], ['mustache', 'father', 'dad']), new emojis_Emoji('👩', 'woman', 'Peoples', ['woman'], ['girls']), new emojis_Emoji('👱‍♀', 'blond-haired woman', 'Peoples', ['blonde_woman'], []), new emojis_Emoji('👱', 'blond-haired person', 'Peoples', ['blonde_man', 'person_with_blond_hair'], ['boy']), new emojis_Emoji('👴', 'old man', 'Peoples', ['older_man'], []), new emojis_Emoji('👵', 'old woman', 'Peoples', ['older_woman'], []), new emojis_Emoji('👲', 'man with Chinese cap', 'Peoples', ['man_with_gua_pi_mao'], []), new emojis_Emoji('👳‍♀', 'woman wearing turban', 'Peoples', ['woman_with_turban'], []), new emojis_Emoji('👳', 'person wearing turban', 'Peoples', ['man_with_turban'], []), new emojis_Emoji('👮‍♀', 'woman police officer', 'Peoples', ['policewoman'], []), new emojis_Emoji('👮', 'police officer', 'Peoples', ['policeman', 'cop'], ['police', 'law']), new emojis_Emoji('👷‍♀', 'woman construction worker', 'Peoples', ['construction_worker_woman'], []), new emojis_Emoji('👷', 'construction worker', 'Peoples', ['construction_worker_man', 'construction_worker'], ['helmet']), new emojis_Emoji('💂‍♀', 'woman guard', 'Peoples', ['guardswoman'], []), new emojis_Emoji('💂', 'guard', 'Peoples', ['guardsman'], []), new emojis_Emoji('👩‍⚕', 'woman health worker', 'Peoples', ['woman_health_worker'], ['doctor', 'nurse']), new emojis_Emoji('👨‍⚕', 'man health worker', 'Peoples', ['man_health_worker'], ['doctor', 'nurse']), new emojis_Emoji('👩‍🌾', 'woman farmer', 'Peoples', ['woman_farmer'], []), new emojis_Emoji('👨‍🌾', 'man farmer', 'Peoples', ['man_farmer'], []), new emojis_Emoji('👩‍🍳', 'woman cook', 'Peoples', ['woman_cook'], ['chef']), new emojis_Emoji('👨‍🍳', 'man cook', 'Peoples', ['man_cook'], ['chef']), new emojis_Emoji('👩‍🎓', 'woman student', 'Peoples', ['woman_student'], ['graduation']), new emojis_Emoji('👨‍🎓', 'man student', 'Peoples', ['man_student'], ['graduation']), new emojis_Emoji('👩‍🎤', 'woman singer', 'Peoples', ['woman_singer'], ['rockstar']), new emojis_Emoji('👨‍🎤', 'man singer', 'Peoples', ['man_singer'], ['rockstar']), new emojis_Emoji('👩‍🏫', 'woman teacher', 'Peoples', ['woman_teacher'], ['school', 'professor']), new emojis_Emoji('👨‍🏫', 'man teacher', 'Peoples', ['man_teacher'], ['school', 'professor']), new emojis_Emoji('👩‍🏭', 'woman factory worker', 'Peoples', ['woman_factory_worker'], []), new emojis_Emoji('👨‍🏭', 'man factory worker', 'Peoples', ['man_factory_worker'], []), new emojis_Emoji('👩‍💻', 'woman technologist', 'Peoples', ['woman_technologist'], ['coder']), new emojis_Emoji('👨‍💻', 'man technologist', 'Peoples', ['man_technologist'], ['coder']), new emojis_Emoji('👩‍💼', 'woman office worker', 'Peoples', ['woman_office_worker'], ['business']), new emojis_Emoji('👨‍💼', 'man office worker', 'Peoples', ['man_office_worker'], ['business']), new emojis_Emoji('👩‍🔧', 'woman mechanic', 'Peoples', ['woman_mechanic'], []), new emojis_Emoji('👨‍🔧', 'man mechanic', 'Peoples', ['man_mechanic'], []), new emojis_Emoji('👩‍🔬', 'woman scientist', 'Peoples', ['woman_scientist'], ['research']), new emojis_Emoji('👨‍🔬', 'man scientist', 'Peoples', ['man_scientist'], ['research']), new emojis_Emoji('👩‍🎨', 'woman artist', 'Peoples', ['woman_artist'], ['painter']), new emojis_Emoji('👨‍🎨', 'man artist', 'Peoples', ['man_artist'], ['painter']), new emojis_Emoji('👩‍🚒', 'woman firefighter', 'Peoples', ['woman_firefighter'], []), new emojis_Emoji('👨‍🚒', 'man firefighter', 'Peoples', ['man_firefighter'], []), new emojis_Emoji('👩‍🚀', 'woman astronaut', 'Peoples', ['woman_astronaut'], ['space']), new emojis_Emoji('👨‍🚀', 'man astronaut', 'Peoples', ['man_astronaut'], ['space']), new emojis_Emoji('🤶', 'Mrs. Claus', 'Peoples', ['mrs_claus'], ['santa']), new emojis_Emoji('🎅', 'Santa Claus', 'Peoples', ['santa'], ['christmas']), new emojis_Emoji('👸', 'princess', 'Peoples', ['princess'], ['blonde', 'crown', 'royal']), new emojis_Emoji('🤴', 'prince', 'Peoples', ['prince'], ['crown', 'royal']), new emojis_Emoji('👰', 'bride with veil', 'Peoples', ['bride_with_veil'], ['marriage', 'wedding']), new emojis_Emoji('🤵', 'man in tuxedo', 'Peoples', ['man_in_tuxedo'], ['groom', 'marriage', 'wedding']), new emojis_Emoji('👼', 'baby angel', 'Peoples', ['angel'], []), new emojis_Emoji('🤰', 'pregnant woman', 'Peoples', ['pregnant_woman'], []), new emojis_Emoji('🙇‍♀', 'woman bowing', 'Peoples', ['bowing_woman'], ['respect', 'thanks']), new emojis_Emoji('🙇', 'person bowing', 'Peoples', ['bowing_man', 'bow'], ['respect', 'thanks']), new emojis_Emoji('💁', 'person tipping hand', 'Peoples', ['tipping_hand_woman', 'information_desk_person', 'sassy_woman'], []), new emojis_Emoji('💁‍♂', 'man tipping hand', 'Peoples', ['tipping_hand_man', 'sassy_man'], ['information']), new emojis_Emoji('🙅', 'person gesturing NO', 'Peoples', ['no_good_woman', 'no_good', 'ng_woman'], ['stop', 'halt']), new emojis_Emoji('🙅‍♂', 'man gesturing NO', 'Peoples', ['no_good_man', 'ng_man'], ['stop', 'halt']), new emojis_Emoji('🙆', 'person gesturing OK', 'Peoples', ['ok_woman'], []), new emojis_Emoji('🙆‍♂', 'man gesturing OK', 'Peoples', ['ok_man'], []), new emojis_Emoji('🙋', 'person raising hand', 'Peoples', ['raising_hand_woman', 'raising_hand'], []), new emojis_Emoji('🙋‍♂', 'man raising hand', 'Peoples', ['raising_hand_man'], []), new emojis_Emoji('🤦‍♀', 'woman facepalming', 'Peoples', ['woman_facepalming'], []), new emojis_Emoji('🤦‍♂', 'man facepalming', 'Peoples', ['man_facepalming'], []), new emojis_Emoji('🤷‍♀', 'woman shrugging', 'Peoples', ['woman_shrugging'], []), new emojis_Emoji('🤷‍♂', 'man shrugging', 'Peoples', ['man_shrugging'], []), new emojis_Emoji('🙎', 'person pouting', 'Peoples', ['pouting_woman', 'person_with_pouting_face'], []), new emojis_Emoji('🙎‍♂', 'man pouting', 'Peoples', ['pouting_man'], []), new emojis_Emoji('🙍', 'person frowning', 'Peoples', ['frowning_woman', 'person_frowning'], ['sad']), new emojis_Emoji('🙍‍♂', 'man frowning', 'Peoples', ['frowning_man'], []), new emojis_Emoji('💇', 'person getting haircut', 'Peoples', ['haircut_woman', 'haircut'], ['beauty']), new emojis_Emoji('💇‍♂', 'man getting haircut', 'Peoples', ['haircut_man'], []), new emojis_Emoji('💆', 'person getting massage', 'Peoples', ['massage_woman', 'massage'], ['spa']), new emojis_Emoji('💆‍♂', 'man getting massage', 'Peoples', ['massage_man'], ['spa']), new emojis_Emoji('🕴', 'man in business suit levitating', 'Peoples', ['business_suit_levitating'], []), new emojis_Emoji('💃', 'woman dancing', 'Peoples', ['dancer'], ['dress']), new emojis_Emoji('🕺', 'man dancing', 'Peoples', ['man_dancing'], ['dancer']), new emojis_Emoji('👯', 'people with bunny ears partying', 'Peoples', ['dancing_women', 'dancers'], ['bunny']), new emojis_Emoji('👯‍♂', 'men with bunny ears partying', 'Peoples', ['dancing_men'], ['bunny']), new emojis_Emoji('🚶‍♀', 'woman walking', 'Peoples', ['walking_woman'], []), new emojis_Emoji('🚶', 'person walking', 'Peoples', ['walking_man', 'walking'], []), new emojis_Emoji('🏃‍♀', 'woman running', 'Peoples', ['running_woman'], ['exercise', 'workout', 'marathon']), new emojis_Emoji('🏃', 'person running', 'Peoples', ['running_man', 'runner', 'running'], ['exercise', 'workout', 'marathon']), new emojis_Emoji('👫', 'man and woman holding hands', 'Peoples', ['couple'], ['date']), new emojis_Emoji('👭', 'two women holding hands', 'Peoples', ['two_women_holding_hands'], ['couple', 'date']), new emojis_Emoji('👬', 'two men holding hands', 'Peoples', ['two_men_holding_hands'], ['couple', 'date']), new emojis_Emoji('💑', 'couple with heart', 'Peoples', ['couple_with_heart_woman_man', 'couple_with_heart'], []), new emojis_Emoji('👩‍❤️‍👩', 'couple with heart: woman, woman', 'Peoples', ['couple_with_heart_woman_woman'], []), new emojis_Emoji('👨‍❤️‍👨', 'couple with heart: man, man', 'Peoples', ['couple_with_heart_man_man'], []), new emojis_Emoji('💏', 'kiss', 'Peoples', ['couplekiss_man_woman'], []), new emojis_Emoji('👩‍❤️‍💋‍👩', 'kiss: woman, woman', 'Peoples', ['couplekiss_woman_woman'], []), new emojis_Emoji('👨‍❤️‍💋‍👨', 'kiss: man, man', 'Peoples', ['couplekiss_man_man'], []), new emojis_Emoji('👪', 'family', 'Peoples', ['family_man_woman_boy', 'family'], ['home', 'parents', 'child']), new emojis_Emoji('👨‍👩‍👧', 'family: man, woman, girl', 'Peoples', ['family_man_woman_girl'], []), new emojis_Emoji('👨‍👩‍👧‍👦', 'family: man, woman, girl, boy', 'Peoples', ['family_man_woman_girl_boy'], []), new emojis_Emoji('👨‍👩‍👦‍👦', 'family: man, woman, boy, boy', 'Peoples', ['family_man_woman_boy_boy'], []), new emojis_Emoji('👨‍👩‍👧‍👧', 'family: man, woman, girl, girl', 'Peoples', ['family_man_woman_girl_girl'], []), new emojis_Emoji('👩‍👩‍👦', 'family: woman, woman, boy', 'Peoples', ['family_woman_woman_boy'], []), new emojis_Emoji('👩‍👩‍👧', 'family: woman, woman, girl', 'Peoples', ['family_woman_woman_girl'], []), new emojis_Emoji('👩‍👩‍👧‍👦', 'family: woman, woman, girl, boy', 'Peoples', ['family_woman_woman_girl_boy'], []), new emojis_Emoji('👩‍👩‍👦‍👦', 'family: woman, woman, boy, boy', 'Peoples', ['family_woman_woman_boy_boy'], []), new emojis_Emoji('👩‍👩‍👧‍👧', 'family: woman, woman, girl, girl', 'Peoples', ['family_woman_woman_girl_girl'], []), new emojis_Emoji('👨‍👨‍👦', 'family: man, man, boy', 'Peoples', ['family_man_man_boy'], []), new emojis_Emoji('👨‍👨‍👧', 'family: man, man, girl', 'Peoples', ['family_man_man_girl'], []), new emojis_Emoji('👨‍👨‍👧‍👦', 'family: man, man, girl, boy', 'Peoples', ['family_man_man_girl_boy'], []), new emojis_Emoji('👨‍👨‍👦‍👦', 'family: man, man, boy, boy', 'Peoples', ['family_man_man_boy_boy'], []), new emojis_Emoji('👨‍👨‍👧‍👧', 'family: man, man, girl, girl', 'Peoples', ['family_man_man_girl_girl'], []), new emojis_Emoji('👩‍👦', 'family: woman, boy', 'Peoples', ['family_woman_boy'], []), new emojis_Emoji('👩‍👧', 'family: woman, girl', 'Peoples', ['family_woman_girl'], []), new emojis_Emoji('👩‍👧‍👦', 'family: woman, girl, boy', 'Peoples', ['family_woman_girl_boy'], []), new emojis_Emoji('👩‍👦‍👦', 'family: woman, boy, boy', 'Peoples', ['family_woman_boy_boy'], []), new emojis_Emoji('👩‍👧‍👧', 'family: woman, girl, girl', 'Peoples', ['family_woman_girl_girl'], []), new emojis_Emoji('👨‍👦', 'family: man, boy', 'Peoples', ['family_man_boy'], []), new emojis_Emoji('👨‍👧', 'family: man, girl', 'Peoples', ['family_man_girl'], []), new emojis_Emoji('👨‍👧‍👦', 'family: man, girl, boy', 'Peoples', ['family_man_girl_boy'], []), new emojis_Emoji('👨‍👦‍👦', 'family: man, boy, boy', 'Peoples', ['family_man_boy_boy'], []), new emojis_Emoji('👨‍👧‍👧', 'family: man, girl, girl', 'Peoples', ['family_man_girl_girl'], []), new emojis_Emoji('👚', 'woman’s clothes', 'Peoples', ['womans_clothes'], []), new emojis_Emoji('👕', 't-shirt', 'Peoples', ['shirt', 'tshirt'], []), new emojis_Emoji('👖', 'jeans', 'Peoples', ['jeans'], ['pants']), new emojis_Emoji('👔', 'necktie', 'Peoples', ['necktie'], ['shirt', 'formal']), new emojis_Emoji('👗', 'dress', 'Peoples', ['dress'], []), new emojis_Emoji('👙', 'bikini', 'Peoples', ['bikini'], ['beach']), new emojis_Emoji('👘', 'kimono', 'Peoples', ['kimono'], []), new emojis_Emoji('👠', 'high-heeled shoe', 'Peoples', ['high_heel'], ['shoe']), new emojis_Emoji('👡', 'woman’s sandal', 'Peoples', ['sandal'], ['shoe']), new emojis_Emoji('👢', 'woman’s boot', 'Peoples', ['boot'], []), new emojis_Emoji('👞', 'man’s shoe', 'Peoples', ['mans_shoe', 'shoe'], []), new emojis_Emoji('👟', 'running shoe', 'Peoples', ['athletic_shoe'], ['sneaker', 'sport', 'running']), new emojis_Emoji('👒', 'woman’s hat', 'Peoples', ['womans_hat'], []), new emojis_Emoji('🎩', 'top hat', 'Peoples', ['tophat'], ['hat', 'classy']), new emojis_Emoji('🎓', 'graduation cap', 'Peoples', ['mortar_board'], ['education', 'college', 'university', 'graduation']), new emojis_Emoji('👑', 'crown', 'Peoples', ['crown'], ['king', 'queen', 'royal']), new emojis_Emoji('⛑', 'rescue worker’s helmet', 'Peoples', ['rescue_worker_helmet'], []), new emojis_Emoji('🎒', 'school backpack', 'Peoples', ['school_satchel'], []), new emojis_Emoji('👝', 'clutch bag', 'Peoples', ['pouch'], ['bag']), new emojis_Emoji('👛', 'purse', 'Peoples', ['purse'], []), new emojis_Emoji('👜', 'handbag', 'Peoples', ['handbag'], ['bag']), new emojis_Emoji('💼', 'briefcase', 'Peoples', ['briefcase'], ['business']), new emojis_Emoji('👓', 'glasses', 'Peoples', ['eyeglasses'], ['glasses']), new emojis_Emoji('🕶', 'sunglasses', 'Peoples', ['dark_sunglasses'], []), new emojis_Emoji('🌂', 'closed umbrella', 'Peoples', ['closed_umbrella'], ['weather', 'rain']), new emojis_Emoji('☂️', 'umbrella', 'Peoples', ['open_umbrella'], []), new emojis_Emoji('🐶', 'dog face', 'Nature', ['dog'], ['pet']), new emojis_Emoji('🐱', 'cat face', 'Nature', ['cat'], ['pet']), new emojis_Emoji('🐭', 'mouse face', 'Nature', ['mouse'], []), new emojis_Emoji('🐹', 'hamster face', 'Nature', ['hamster'], ['pet']), new emojis_Emoji('🐰', 'rabbit face', 'Nature', ['rabbit'], ['bunny']), new emojis_Emoji('🦊', 'fox face', 'Nature', ['fox_face'], []), new emojis_Emoji('🐻', 'bear face', 'Nature', ['bear'], []), new emojis_Emoji('🐼', 'panda face', 'Nature', ['panda_face'], []), new emojis_Emoji('🐨', 'koala', 'Nature', ['koala'], []), new emojis_Emoji('🐯', 'tiger face', 'Nature', ['tiger'], []), new emojis_Emoji('🦁', 'lion face', 'Nature', ['lion'], []), new emojis_Emoji('🐮', 'cow face', 'Nature', ['cow'], []), new emojis_Emoji('🐷', 'pig face', 'Nature', ['pig'], []), new emojis_Emoji('🐽', 'pig nose', 'Nature', ['pig_nose'], []), new emojis_Emoji('🐸', 'frog face', 'Nature', ['frog'], []), new emojis_Emoji('🐵', 'monkey face', 'Nature', ['monkey_face'], []), new emojis_Emoji('🙈', 'see-no-evil monkey', 'Nature', ['see_no_evil'], ['monkey', 'blind', 'ignore']), new emojis_Emoji('🙉', 'hear-no-evil monkey', 'Nature', ['hear_no_evil'], ['monkey', 'deaf']), new emojis_Emoji('🙊', 'speak-no-evil monkey', 'Nature', ['speak_no_evil'], ['monkey', 'mute', 'hush']), new emojis_Emoji('🐒', 'monkey', 'Nature', ['monkey'], []), new emojis_Emoji('🐔', 'chicken', 'Nature', ['chicken'], []), new emojis_Emoji('🐧', 'penguin', 'Nature', ['penguin'], []), new emojis_Emoji('🐦', 'bird', 'Nature', ['bird'], []), new emojis_Emoji('🐤', 'baby chick', 'Nature', ['baby_chick'], []), new emojis_Emoji('🐣', 'hatching chick', 'Nature', ['hatching_chick'], []), new emojis_Emoji('🐥', 'front-facing baby chick', 'Nature', ['hatched_chick'], []), new emojis_Emoji('🦆', 'duck', 'Nature', ['duck'], []), new emojis_Emoji('🦅', 'eagle', 'Nature', ['eagle'], []), new emojis_Emoji('🦉', 'owl', 'Nature', ['owl'], []), new emojis_Emoji('🦇', 'bat', 'Nature', ['bat'], []), new emojis_Emoji('🐺', 'wolf face', 'Nature', ['wolf'], []), new emojis_Emoji('🐗', 'boar', 'Nature', ['boar'], []), new emojis_Emoji('🐴', 'horse face', 'Nature', ['horse'], []), new emojis_Emoji('🦄', 'unicorn face', 'Nature', ['unicorn'], []), new emojis_Emoji('🐝', 'honeybee', 'Nature', ['bee', 'honeybee'], []), new emojis_Emoji('🐛', 'bug', 'Nature', ['bug'], []), new emojis_Emoji('🦋', 'butterfly', 'Nature', ['butterfly'], []), new emojis_Emoji('🐌', 'snail', 'Nature', ['snail'], ['slow']), new emojis_Emoji('🐚', 'spiral shell', 'Nature', ['shell'], ['sea', 'beach']), new emojis_Emoji('🐞', 'lady beetle', 'Nature', ['beetle'], ['bug']), new emojis_Emoji('🐜', 'ant', 'Nature', ['ant'], []), new emojis_Emoji('🕷', 'spider', 'Nature', ['spider'], []), new emojis_Emoji('🕸', 'spider web', 'Nature', ['spider_web'], []), new emojis_Emoji('🐢', 'turtle', 'Nature', ['turtle'], ['slow']), new emojis_Emoji('🐍', 'snake', 'Nature', ['snake'], []), new emojis_Emoji('🦎', 'lizard', 'Nature', ['lizard'], []), new emojis_Emoji('🦂', 'scorpion', 'Nature', ['scorpion'], []), new emojis_Emoji('🦀', 'crab', 'Nature', ['crab'], []), new emojis_Emoji('🦑', 'squid', 'Nature', ['squid'], []), new emojis_Emoji('🐙', 'octopus', 'Nature', ['octopus'], []), new emojis_Emoji('🦐', 'shrimp', 'Nature', ['shrimp'], []), new emojis_Emoji('🐠', 'tropical fish', 'Nature', ['tropical_fish'], []), new emojis_Emoji('🐟', 'fish', 'Nature', ['fish'], []), new emojis_Emoji('🐡', 'blowfish', 'Nature', ['blowfish'], []), new emojis_Emoji('🐬', 'dolphin', 'Nature', ['dolphin', 'flipper'], []), new emojis_Emoji('🦈', 'shark', 'Nature', ['shark'], []), new emojis_Emoji('🐳', 'spouting whale', 'Nature', ['whale'], ['sea']), new emojis_Emoji('🐋', 'whale', 'Nature', ['whale2'], []), new emojis_Emoji('🐊', 'crocodile', 'Nature', ['crocodile'], []), new emojis_Emoji('🐆', 'leopard', 'Nature', ['leopard'], []), new emojis_Emoji('🐅', 'tiger', 'Nature', ['tiger2'], []), new emojis_Emoji('🐃', 'water buffalo', 'Nature', ['water_buffalo'], []), new emojis_Emoji('🐂', 'ox', 'Nature', ['ox'], []), new emojis_Emoji('🐄', 'cow', 'Nature', ['cow2'], []), new emojis_Emoji('🦌', 'deer', 'Nature', ['deer'], []), new emojis_Emoji('🐪', 'camel', 'Nature', ['dromedary_camel'], ['desert']), new emojis_Emoji('🐫', 'two-hump camel', 'Nature', ['camel'], []), new emojis_Emoji('🐘', 'elephant', 'Nature', ['elephant'], []), new emojis_Emoji('🦏', 'rhinoceros', 'Nature', ['rhinoceros'], []), new emojis_Emoji('🦍', 'gorilla', 'Nature', ['gorilla'], []), new emojis_Emoji('🐎', 'horse', 'Nature', ['racehorse'], ['speed']), new emojis_Emoji('🐖', 'pig', 'Nature', ['pig2'], []), new emojis_Emoji('🐐', 'goat', 'Nature', ['goat'], []), new emojis_Emoji('🐏', 'ram', 'Nature', ['ram'], []), new emojis_Emoji('🐑', 'sheep', 'Nature', ['sheep'], []), new emojis_Emoji('🐕', 'dog', 'Nature', ['dog2'], []), new emojis_Emoji('🐩', 'poodle', 'Nature', ['poodle'], ['dog']), new emojis_Emoji('🐈', 'cat', 'Nature', ['cat2'], []), new emojis_Emoji('🐓', 'rooster', 'Nature', ['rooster'], []), new emojis_Emoji('🦃', 'turkey', 'Nature', ['turkey'], ['thanksgiving']), new emojis_Emoji('🕊', 'dove', 'Nature', ['dove'], ['peace']), new emojis_Emoji('🐇', 'rabbit', 'Nature', ['rabbit2'], []), new emojis_Emoji('🐁', 'mouse', 'Nature', ['mouse2'], []), new emojis_Emoji('🐀', 'rat', 'Nature', ['rat'], []), new emojis_Emoji('🐿', 'chipmunk', 'Nature', ['chipmunk'], []), new emojis_Emoji('🐾', 'paw prints', 'Nature', ['feet', 'paw_prints'], []), new emojis_Emoji('🐉', 'dragon', 'Nature', ['dragon'], []), new emojis_Emoji('🐲', 'dragon face', 'Nature', ['dragon_face'], []), new emojis_Emoji('🌵', 'cactus', 'Nature', ['cactus'], []), new emojis_Emoji('🎄', 'Christmas tree', 'Nature', ['christmas_tree'], []), new emojis_Emoji('🌲', 'evergreen tree', 'Nature', ['evergreen_tree'], ['wood']), new emojis_Emoji('🌳', 'deciduous tree', 'Nature', ['deciduous_tree'], ['wood']), new emojis_Emoji('🌴', 'palm tree', 'Nature', ['palm_tree'], []), new emojis_Emoji('🌱', 'seedling', 'Nature', ['seedling'], ['plant']), new emojis_Emoji('🌿', 'herb', 'Nature', ['herb'], []), new emojis_Emoji('☘️', 'shamrock', 'Nature', ['shamrock'], []), new emojis_Emoji('🍀', 'four leaf clover', 'Nature', ['four_leaf_clover'], ['luck']), new emojis_Emoji('🎍', 'pine decoration', 'Nature', ['bamboo'], []), new emojis_Emoji('🎋', 'tanabata tree', 'Nature', ['tanabata_tree'], []), new emojis_Emoji('🍃', 'leaf fluttering in wind', 'Nature', ['leaves'], ['leaf']), new emojis_Emoji('🍂', 'fallen leaf', 'Nature', ['fallen_leaf'], ['autumn']), new emojis_Emoji('🍁', 'maple leaf', 'Nature', ['maple_leaf'], ['canada']), new emojis_Emoji('🍄', 'mushroom', 'Nature', ['mushroom'], []), new emojis_Emoji('🌾', 'sheaf of rice', 'Nature', ['ear_of_rice'], []), new emojis_Emoji('💐', 'bouquet', 'Nature', ['bouquet'], ['flowers']), new emojis_Emoji('🌷', 'tulip', 'Nature', ['tulip'], ['flower']), new emojis_Emoji('🌹', 'rose', 'Nature', ['rose'], ['flower']), new emojis_Emoji('🥀', 'wilted flower', 'Nature', ['wilted_flower'], []), new emojis_Emoji('🌻', 'sunflower', 'Nature', ['sunflower'], []), new emojis_Emoji('🌼', 'blossom', 'Nature', ['blossom'], []), new emojis_Emoji('🌸', 'cherry blossom', 'Nature', ['cherry_blossom'], ['flower', 'spring']), new emojis_Emoji('🌺', 'hibiscus', 'Nature', ['hibiscus'], []), new emojis_Emoji('🌎', 'globe showing Americas', 'Nature', ['earth_americas'], ['globe', 'world', 'international']), new emojis_Emoji('🌍', 'globe showing Europe-Africa', 'Nature', ['earth_africa'], ['globe', 'world', 'international']), new emojis_Emoji('🌏', 'globe showing Asia-Australia', 'Nature', ['earth_asia'], ['globe', 'world', 'international']), new emojis_Emoji('🌕', 'full moon', 'Nature', ['full_moon'], []), new emojis_Emoji('🌖', 'waning gibbous moon', 'Nature', ['waning_gibbous_moon'], []), new emojis_Emoji('🌗', 'last quarter moon', 'Nature', ['last_quarter_moon'], []), new emojis_Emoji('🌘', 'waning crescent moon', 'Nature', ['waning_crescent_moon'], []), new emojis_Emoji('🌑', 'new moon', 'Nature', ['new_moon'], []), new emojis_Emoji('🌒', 'waxing crescent moon', 'Nature', ['waxing_crescent_moon'], []), new emojis_Emoji('🌓', 'first quarter moon', 'Nature', ['first_quarter_moon'], []), new emojis_Emoji('🌔', 'waxing gibbous moon', 'Nature', ['moon', 'waxing_gibbous_moon'], []), new emojis_Emoji('🌚', 'new moon face', 'Nature', ['new_moon_with_face'], []), new emojis_Emoji('🌝', 'full moon with face', 'Nature', ['full_moon_with_face'], []), new emojis_Emoji('🌞', 'sun with face', 'Nature', ['sun_with_face'], ['summer']), new emojis_Emoji('🌛', 'first quarter moon with face', 'Nature', ['first_quarter_moon_with_face'], []), new emojis_Emoji('🌜', 'last quarter moon with face', 'Nature', ['last_quarter_moon_with_face'], []), new emojis_Emoji('🌙', 'crescent moon', 'Nature', ['crescent_moon'], ['night']), new emojis_Emoji('💫', 'dizzy', 'Nature', ['dizzy'], ['star']), new emojis_Emoji('⭐️', 'white medium star', 'Nature', ['star'], []), new emojis_Emoji('🌟', 'glowing star', 'Nature', ['star2'], []), new emojis_Emoji('✨', 'sparkles', 'Nature', ['sparkles'], ['shiny']), new emojis_Emoji('⚡️', 'high voltage', 'Nature', ['zap'], ['lightning', 'thunder']), new emojis_Emoji('🔥', 'fire', 'Nature', ['fire'], ['burn']), new emojis_Emoji('💥', 'collision', 'Nature', ['boom', 'collision'], ['explode']), new emojis_Emoji('☄', 'comet', 'Nature', ['comet'], []), new emojis_Emoji('☀️', 'sun', 'Nature', ['sunny'], ['weather']), new emojis_Emoji('🌤', 'sun behind small cloud', 'Nature', ['sun_behind_small_cloud'], []), new emojis_Emoji('⛅️', 'sun behind cloud', 'Nature', ['partly_sunny'], ['weather', 'cloud']), new emojis_Emoji('🌥', 'sun behind large cloud', 'Nature', ['sun_behind_large_cloud'], []), new emojis_Emoji('🌦', 'sun behind rain cloud', 'Nature', ['sun_behind_rain_cloud'], []), new emojis_Emoji('🌈', 'rainbow', 'Nature', ['rainbow'], []), new emojis_Emoji('☁️', 'cloud', 'Nature', ['cloud'], []), new emojis_Emoji('🌧', 'cloud with rain', 'Nature', ['cloud_with_rain'], []), new emojis_Emoji('⛈', 'cloud with lightning and rain', 'Nature', ['cloud_with_lightning_and_rain'], []), new emojis_Emoji('🌩', 'cloud with lightning', 'Nature', ['cloud_with_lightning'], []), new emojis_Emoji('🌨', 'cloud with snow', 'Nature', ['cloud_with_snow'], []), new emojis_Emoji('☃️', 'snowman', 'Nature', ['snowman_with_snow'], ['winter', 'christmas']), new emojis_Emoji('⛄️', 'snowman without snow', 'Nature', ['snowman'], ['winter']), new emojis_Emoji('❄️', 'snowflake', 'Nature', ['snowflake'], ['winter', 'cold', 'weather']), new emojis_Emoji('🌬', 'wind face', 'Nature', ['wind_face'], []), new emojis_Emoji('💨', 'dashing away', 'Nature', ['dash'], ['wind', 'blow', 'fast']), new emojis_Emoji('🌪', 'tornado', 'Nature', ['tornado'], []), new emojis_Emoji('🌫', 'fog', 'Nature', ['fog'], []), new emojis_Emoji('🌊', 'water wave', 'Nature', ['ocean'], ['sea']), new emojis_Emoji('💧', 'droplet', 'Nature', ['droplet'], ['water']), new emojis_Emoji('💦', 'sweat droplets', 'Nature', ['sweat_drops'], ['water', 'workout']), new emojis_Emoji('☔️', 'umbrella with rain drops', 'Nature', ['umbrella'], ['rain', 'weather']), new emojis_Emoji('🍏', 'green apple', 'Foods', ['green_apple'], ['fruit']), new emojis_Emoji('🍎', 'red apple', 'Foods', ['apple'], []), new emojis_Emoji('🍐', 'pear', 'Foods', ['pear'], []), new emojis_Emoji('🍊', 'tangerine', 'Foods', ['tangerine', 'orange', 'mandarin'], []), new emojis_Emoji('🍋', 'lemon', 'Foods', ['lemon'], []), new emojis_Emoji('🍌', 'banana', 'Foods', ['banana'], ['fruit']), new emojis_Emoji('🍉', 'watermelon', 'Foods', ['watermelon'], []), new emojis_Emoji('🍇', 'grapes', 'Foods', ['grapes'], []), new emojis_Emoji('🍓', 'strawberry', 'Foods', ['strawberry'], ['fruit']), new emojis_Emoji('🍈', 'melon', 'Foods', ['melon'], []), new emojis_Emoji('🍒', 'cherries', 'Foods', ['cherries'], ['fruit']), new emojis_Emoji('🍑', 'peach', 'Foods', ['peach'], []), new emojis_Emoji('🍍', 'pineapple', 'Foods', ['pineapple'], []), new emojis_Emoji('🥝', 'kiwi fruit', 'Foods', ['kiwi_fruit'], []), new emojis_Emoji('🥑', 'avocado', 'Foods', ['avocado'], []), new emojis_Emoji('🍅', 'tomato', 'Foods', ['tomato'], []), new emojis_Emoji('🍆', 'eggplant', 'Foods', ['eggplant'], ['aubergine']), new emojis_Emoji('🥒', 'cucumber', 'Foods', ['cucumber'], []), new emojis_Emoji('🥕', 'carrot', 'Foods', ['carrot'], []), new emojis_Emoji('🌽', 'ear of corn', 'Foods', ['corn'], []), new emojis_Emoji('🌶', 'hot pepper', 'Foods', ['hot_pepper'], ['spicy']), new emojis_Emoji('🥔', 'potato', 'Foods', ['potato'], []), new emojis_Emoji('🍠', 'roasted sweet potato', 'Foods', ['sweet_potato'], []), new emojis_Emoji('🌰', 'chestnut', 'Foods', ['chestnut'], []), new emojis_Emoji('🥜', 'peanuts', 'Foods', ['peanuts'], []), new emojis_Emoji('🍯', 'honey pot', 'Foods', ['honey_pot'], []), new emojis_Emoji('🥐', 'croissant', 'Foods', ['croissant'], []), new emojis_Emoji('🍞', 'bread', 'Foods', ['bread'], ['toast']), new emojis_Emoji('🥖', 'baguette bread', 'Foods', ['baguette_bread'], []), new emojis_Emoji('🧀', 'cheese wedge', 'Foods', ['cheese'], []), new emojis_Emoji('🥚', 'egg', 'Foods', ['egg'], []), new emojis_Emoji('🍳', 'cooking', 'Foods', ['fried_egg'], ['breakfast']), new emojis_Emoji('🥓', 'bacon', 'Foods', ['bacon'], []), new emojis_Emoji('🥞', 'pancakes', 'Foods', ['pancakes'], []), new emojis_Emoji('🍤', 'fried shrimp', 'Foods', ['fried_shrimp'], ['tempura']), new emojis_Emoji('🍗', 'poultry leg', 'Foods', ['poultry_leg'], ['meat', 'chicken']), new emojis_Emoji('🍖', 'meat on bone', 'Foods', ['meat_on_bone'], []), new emojis_Emoji('🍕', 'pizza', 'Foods', ['pizza'], []), new emojis_Emoji('🌭', 'hot dog', 'Foods', ['hotdog'], []), new emojis_Emoji('🍔', 'hamburger', 'Foods', ['hamburger'], ['burger']), new emojis_Emoji('🍟', 'french fries', 'Foods', ['fries'], []), new emojis_Emoji('🥙', 'stuffed flatbread', 'Foods', ['stuffed_flatbread'], []), new emojis_Emoji('🌮', 'taco', 'Foods', ['taco'], []), new emojis_Emoji('🌯', 'burrito', 'Foods', ['burrito'], []), new emojis_Emoji('🥗', 'green salad', 'Foods', ['green_salad'], []), new emojis_Emoji('🥘', 'shallow pan of food', 'Foods', ['shallow_pan_of_food'], ['paella', 'curry']), new emojis_Emoji('🍝', 'spaghetti', 'Foods', ['spaghetti'], ['pasta']), new emojis_Emoji('🍜', 'steaming bowl', 'Foods', ['ramen'], ['noodle']), new emojis_Emoji('🍲', 'pot of food', 'Foods', ['stew'], []), new emojis_Emoji('🍥', 'fish cake with swirl', 'Foods', ['fish_cake'], []), new emojis_Emoji('🍣', 'sushi', 'Foods', ['sushi'], []), new emojis_Emoji('🍱', 'bento box', 'Foods', ['bento'], []), new emojis_Emoji('🍛', 'curry rice', 'Foods', ['curry'], []), new emojis_Emoji('🍚', 'cooked rice', 'Foods', ['rice'], []), new emojis_Emoji('🍙', 'rice ball', 'Foods', ['rice_ball'], []), new emojis_Emoji('🍘', 'rice cracker', 'Foods', ['rice_cracker'], []), new emojis_Emoji('🍢', 'oden', 'Foods', ['oden'], []), new emojis_Emoji('🍡', 'dango', 'Foods', ['dango'], []), new emojis_Emoji('🍧', 'shaved ice', 'Foods', ['shaved_ice'], []), new emojis_Emoji('🍨', 'ice cream', 'Foods', ['ice_cream'], []), new emojis_Emoji('🍦', 'soft ice cream', 'Foods', ['icecream'], []), new emojis_Emoji('🍰', 'shortcake', 'Foods', ['cake'], ['dessert']), new emojis_Emoji('🎂', 'birthday cake', 'Foods', ['birthday'], ['party']), new emojis_Emoji('🍮', 'custard', 'Foods', ['custard'], []), new emojis_Emoji('🍭', 'lollipop', 'Foods', ['lollipop'], []), new emojis_Emoji('🍬', 'candy', 'Foods', ['candy'], ['sweet']), new emojis_Emoji('🍫', 'chocolate bar', 'Foods', ['chocolate_bar'], []), new emojis_Emoji('🍿', 'popcorn', 'Foods', ['popcorn'], []), new emojis_Emoji('🍩', 'doughnut', 'Foods', ['doughnut'], []), new emojis_Emoji('🍪', 'cookie', 'Foods', ['cookie'], []), new emojis_Emoji('🥛', 'glass of milk', 'Foods', ['milk_glass'], []), new emojis_Emoji('🍼', 'baby bottle', 'Foods', ['baby_bottle'], ['milk']), new emojis_Emoji('☕️', 'hot beverage', 'Foods', ['coffee'], ['cafe', 'espresso']), new emojis_Emoji('🍵', 'teacup without handle', 'Foods', ['tea'], ['green', 'breakfast']), new emojis_Emoji('🍶', 'sake', 'Foods', ['sake'], []), new emojis_Emoji('🍺', 'beer mug', 'Foods', ['beer'], ['drink']), new emojis_Emoji('🍻', 'clinking beer mugs', 'Foods', ['beers'], ['drinks']), new emojis_Emoji('🥂', 'clinking glasses', 'Foods', ['clinking_glasses'], ['cheers', 'toast']), new emojis_Emoji('🍷', 'wine glass', 'Foods', ['wine_glass'], []), new emojis_Emoji('🥃', 'tumbler glass', 'Foods', ['tumbler_glass'], ['whisky']), new emojis_Emoji('🍸', 'cocktail glass', 'Foods', ['cocktail'], ['drink']), new emojis_Emoji('🍹', 'tropical drink', 'Foods', ['tropical_drink'], ['summer', 'vacation']), new emojis_Emoji('🍾', 'bottle with popping cork', 'Foods', ['champagne'], ['bottle', 'bubbly', 'celebration']), new emojis_Emoji('🥄', 'spoon', 'Foods', ['spoon'], []), new emojis_Emoji('🍴', 'fork and knife', 'Foods', ['fork_and_knife'], ['cutlery']), new emojis_Emoji('🍽', 'fork and knife with plate', 'Foods', ['plate_with_cutlery'], ['dining', 'dinner']), new emojis_Emoji('⚽️', 'soccer ball', 'Activity', ['soccer'], ['sports']), new emojis_Emoji('🏀', 'basketball', 'Activity', ['basketball'], ['sports']), new emojis_Emoji('🏈', 'american football', 'Activity', ['football'], ['sports']), new emojis_Emoji('⚾️', 'baseball', 'Activity', ['baseball'], ['sports']), new emojis_Emoji('🎾', 'tennis', 'Activity', ['tennis'], ['sports']), new emojis_Emoji('🏐', 'volleyball', 'Activity', ['volleyball'], []), new emojis_Emoji('🏉', 'rugby football', 'Activity', ['rugby_football'], []), new emojis_Emoji('🎱', 'pool 8 ball', 'Activity', ['8ball'], ['pool', 'billiards']), new emojis_Emoji('🏓', 'ping pong', 'Activity', ['ping_pong'], []), new emojis_Emoji('🏸', 'badminton', 'Activity', ['badminton'], []), new emojis_Emoji('🥅', 'goal net', 'Activity', ['goal_net'], []), new emojis_Emoji('🏒', 'ice hockey', 'Activity', ['ice_hockey'], []), new emojis_Emoji('🏑', 'field hockey', 'Activity', ['field_hockey'], []), new emojis_Emoji('🏏', 'cricket', 'Activity', ['cricket'], []), new emojis_Emoji('⛳️', 'flag in hole', 'Activity', ['golf'], []), new emojis_Emoji('🏹', 'bow and arrow', 'Activity', ['bow_and_arrow'], ['archery']), new emojis_Emoji('🎣', 'fishing pole', 'Activity', ['fishing_pole_and_fish'], []), new emojis_Emoji('🥊', 'boxing glove', 'Activity', ['boxing_glove'], []), new emojis_Emoji('🥋', 'martial arts uniform', 'Activity', ['martial_arts_uniform'], []), new emojis_Emoji('⛸', 'ice skate', 'Activity', ['ice_skate'], ['skating']), new emojis_Emoji('🎿', 'skis', 'Activity', ['ski'], []), new emojis_Emoji('⛷', 'skier', 'Activity', ['skier'], []), new emojis_Emoji('🏂', 'snowboarder', 'Activity', ['snowboarder'], []), new emojis_Emoji('🏋️‍♀️', 'woman lifting weights', 'Activity', ['weight_lifting_woman'], ['gym', 'workout']), new emojis_Emoji('🏋', 'person lifting weights', 'Activity', ['weight_lifting_man'], ['gym', 'workout']), new emojis_Emoji('🤺', 'person fencing', 'Activity', ['person_fencing'], []), new emojis_Emoji('🤼‍♀', 'women wrestling', 'Activity', ['women_wrestling'], []), new emojis_Emoji('🤼‍♂', 'men wrestling', 'Activity', ['men_wrestling'], []), new emojis_Emoji('🤸‍♀', 'woman cartwheeling', 'Activity', ['woman_cartwheeling'], []), new emojis_Emoji('🤸‍♂', 'man cartwheeling', 'Activity', ['man_cartwheeling'], []), new emojis_Emoji('⛹️‍♀️', 'woman bouncing ball', 'Activity', ['basketball_woman'], []), new emojis_Emoji('⛹', 'person bouncing ball', 'Activity', ['basketball_man'], []), new emojis_Emoji('🤾‍♀', 'woman playing handball', 'Activity', ['woman_playing_handball'], []), new emojis_Emoji('🤾‍♂', 'man playing handball', 'Activity', ['man_playing_handball'], []), new emojis_Emoji('🏌️‍♀️', 'woman golfing', 'Activity', ['golfing_woman'], []), new emojis_Emoji('🏌', 'person golfing', 'Activity', ['golfing_man'], []), new emojis_Emoji('🏄‍♀', 'woman surfing', 'Activity', ['surfing_woman'], []), new emojis_Emoji('🏄', 'person surfing', 'Activity', ['surfing_man', 'surfer'], []), new emojis_Emoji('🏊‍♀', 'woman swimming', 'Activity', ['swimming_woman'], []), new emojis_Emoji('🏊', 'person swimming', 'Activity', ['swimming_man', 'swimmer'], []), new emojis_Emoji('🤽‍♀', 'woman playing water polo', 'Activity', ['woman_playing_water_polo'], []), new emojis_Emoji('🤽‍♂', 'man playing water polo', 'Activity', ['man_playing_water_polo'], []), new emojis_Emoji('🚣‍♀', 'woman rowing boat', 'Activity', ['rowing_woman'], []), new emojis_Emoji('🚣', 'person rowing boat', 'Activity', ['rowing_man', 'rowboat'], []), new emojis_Emoji('🏇', 'horse racing', 'Activity', ['horse_racing'], []), new emojis_Emoji('🚴‍♀', 'woman biking', 'Activity', ['biking_woman'], []), new emojis_Emoji('🚴', 'person biking', 'Activity', ['biking_man', 'bicyclist'], []), new emojis_Emoji('🚵‍♀', 'woman mountain biking', 'Activity', ['mountain_biking_woman'], []), new emojis_Emoji('🚵', 'person mountain biking', 'Activity', ['mountain_biking_man', 'mountain_bicyclist'], []), new emojis_Emoji('🎽', 'running shirt', 'Activity', ['running_shirt_with_sash'], ['marathon']), new emojis_Emoji('🏅', 'sports medal', 'Activity', ['medal_sports'], ['gold', 'winner']), new emojis_Emoji('🎖', 'military medal', 'Activity', ['medal_military'], []), new emojis_Emoji('🥇', '1st place medal', 'Activity', ['1st_place_medal'], ['gold']), new emojis_Emoji('🥈', '2nd place medal', 'Activity', ['2nd_place_medal'], ['silver']), new emojis_Emoji('🥉', '3rd place medal', 'Activity', ['3rd_place_medal'], ['bronze']), new emojis_Emoji('🏆', 'trophy', 'Activity', ['trophy'], ['award', 'contest', 'winner']), new emojis_Emoji('🏵', 'rosette', 'Activity', ['rosette'], []), new emojis_Emoji('🎗', 'reminder ribbon', 'Activity', ['reminder_ribbon'], []), new emojis_Emoji('🎫', 'ticket', 'Activity', ['ticket'], []), new emojis_Emoji('🎟', 'admission tickets', 'Activity', ['tickets'], []), new emojis_Emoji('🎪', 'circus tent', 'Activity', ['circus_tent'], []), new emojis_Emoji('🤹‍♀', 'woman juggling', 'Activity', ['woman_juggling'], []), new emojis_Emoji('🤹‍♂', 'man juggling', 'Activity', ['man_juggling'], []), new emojis_Emoji('🎭', 'performing arts', 'Activity', ['performing_arts'], ['theater', 'drama']), new emojis_Emoji('🎨', 'artist palette', 'Activity', ['art'], ['design', 'paint']), new emojis_Emoji('🎬', 'clapper board', 'Activity', ['clapper'], ['film']), new emojis_Emoji('🎤', 'microphone', 'Activity', ['microphone'], ['sing']), new emojis_Emoji('🎧', 'headphone', 'Activity', ['headphones'], ['music', 'earphones']), new emojis_Emoji('🎼', 'musical score', 'Activity', ['musical_score'], []), new emojis_Emoji('🎹', 'musical keyboard', 'Activity', ['musical_keyboard'], ['piano']), new emojis_Emoji('🥁', 'drum', 'Activity', ['drum'], []), new emojis_Emoji('🎷', 'saxophone', 'Activity', ['saxophone'], []), new emojis_Emoji('🎺', 'trumpet', 'Activity', ['trumpet'], []), new emojis_Emoji('🎸', 'guitar', 'Activity', ['guitar'], ['rock']), new emojis_Emoji('🎻', 'violin', 'Activity', ['violin'], []), new emojis_Emoji('🎲', 'game die', 'Activity', ['game_die'], ['dice', 'gambling']), new emojis_Emoji('🎯', 'direct hit', 'Activity', ['dart'], ['target']), new emojis_Emoji('🎳', 'bowling', 'Activity', ['bowling'], []), new emojis_Emoji('🎮', 'video game', 'Activity', ['video_game'], ['play', 'controller', 'console']), new emojis_Emoji('🎰', 'slot machine', 'Activity', ['slot_machine'], []), new emojis_Emoji('🚗', 'automobile', 'Places', ['car', 'red_car'], []), new emojis_Emoji('🚕', 'taxi', 'Places', ['taxi'], []), new emojis_Emoji('🚙', 'sport utility vehicle', 'Places', ['blue_car'], []), new emojis_Emoji('🚌', 'bus', 'Places', ['bus'], []), new emojis_Emoji('🚎', 'trolleybus', 'Places', ['trolleybus'], []), new emojis_Emoji('🏎', 'racing car', 'Places', ['racing_car'], []), new emojis_Emoji('🚓', 'police car', 'Places', ['police_car'], []), new emojis_Emoji('🚑', 'ambulance', 'Places', ['ambulance'], []), new emojis_Emoji('🚒', 'fire engine', 'Places', ['fire_engine'], []), new emojis_Emoji('🚐', 'minibus', 'Places', ['minibus'], []), new emojis_Emoji('🚚', 'delivery truck', 'Places', ['truck'], []), new emojis_Emoji('🚛', 'articulated lorry', 'Places', ['articulated_lorry'], []), new emojis_Emoji('🚜', 'tractor', 'Places', ['tractor'], []), new emojis_Emoji('🛴', 'kick scooter', 'Places', ['kick_scooter'], []), new emojis_Emoji('🚲', 'bicycle', 'Places', ['bike'], ['bicycle']), new emojis_Emoji('🛵', 'motor scooter', 'Places', ['motor_scooter'], []), new emojis_Emoji('🏍', 'motorcycle', 'Places', ['motorcycle'], []), new emojis_Emoji('🚨', 'police car light', 'Places', ['rotating_light'], ['911', 'emergency']), new emojis_Emoji('🚔', 'oncoming police car', 'Places', ['oncoming_police_car'], []), new emojis_Emoji('🚍', 'oncoming bus', 'Places', ['oncoming_bus'], []), new emojis_Emoji('🚘', 'oncoming automobile', 'Places', ['oncoming_automobile'], []), new emojis_Emoji('🚖', 'oncoming taxi', 'Places', ['oncoming_taxi'], []), new emojis_Emoji('🚡', 'aerial tramway', 'Places', ['aerial_tramway'], []), new emojis_Emoji('🚠', 'mountain cableway', 'Places', ['mountain_cableway'], []), new emojis_Emoji('🚟', 'suspension railway', 'Places', ['suspension_railway'], []), new emojis_Emoji('🚃', 'railway car', 'Places', ['railway_car'], []), new emojis_Emoji('🚋', 'tram car', 'Places', ['train'], []), new emojis_Emoji('🚞', 'mountain railway', 'Places', ['mountain_railway'], []), new emojis_Emoji('🚝', 'monorail', 'Places', ['monorail'], []), new emojis_Emoji('🚄', 'high-speed train', 'Places', ['bullettrain_side'], ['train']), new emojis_Emoji('🚅', 'high-speed train with bullet nose', 'Places', ['bullettrain_front'], ['train']), new emojis_Emoji('🚈', 'light rail', 'Places', ['light_rail'], []), new emojis_Emoji('🚂', 'locomotive', 'Places', ['steam_locomotive'], ['train']), new emojis_Emoji('🚆', 'train', 'Places', ['train2'], []), new emojis_Emoji('🚇', 'metro', 'Places', ['metro'], []), new emojis_Emoji('🚊', 'tram', 'Places', ['tram'], []), new emojis_Emoji('🚉', 'station', 'Places', ['station'], []), new emojis_Emoji('🚁', 'helicopter', 'Places', ['helicopter'], []), new emojis_Emoji('🛩', 'small airplane', 'Places', ['small_airplane'], ['flight']), new emojis_Emoji('✈️', 'airplane', 'Places', ['airplane'], ['flight']), new emojis_Emoji('🛫', 'airplane departure', 'Places', ['flight_departure'], []), new emojis_Emoji('🛬', 'airplane arrival', 'Places', ['flight_arrival'], []), new emojis_Emoji('🚀', 'rocket', 'Places', ['rocket'], ['ship', 'launch']), new emojis_Emoji('🛰', 'satellite', 'Places', ['artificial_satellite'], ['orbit', 'space']), new emojis_Emoji('💺', 'seat', 'Places', ['seat'], []), new emojis_Emoji('🛶', 'canoe', 'Places', ['canoe'], []), new emojis_Emoji('⛵️', 'sailboat', 'Places', ['boat', 'sailboat'], []), new emojis_Emoji('🛥', 'motor boat', 'Places', ['motor_boat'], []), new emojis_Emoji('🚤', 'speedboat', 'Places', ['speedboat'], ['ship']), new emojis_Emoji('🛳', 'passenger ship', 'Places', ['passenger_ship'], ['cruise']), new emojis_Emoji('⛴', 'ferry', 'Places', ['ferry'], []), new emojis_Emoji('🚢', 'ship', 'Places', ['ship'], []), new emojis_Emoji('⚓️', 'anchor', 'Places', ['anchor'], ['ship']), new emojis_Emoji('🚧', 'construction', 'Places', ['construction'], ['wip']), new emojis_Emoji('⛽️', 'fuel pump', 'Places', ['fuelpump'], []), new emojis_Emoji('🚏', 'bus stop', 'Places', ['busstop'], []), new emojis_Emoji('🚦', 'vertical traffic light', 'Places', ['vertical_traffic_light'], ['semaphore']), new emojis_Emoji('🚥', 'horizontal traffic light', 'Places', ['traffic_light'], []), new emojis_Emoji('🗺', 'world map', 'Places', ['world_map'], ['travel']), new emojis_Emoji('🗿', 'moai', 'Places', ['moyai'], ['stone']), new emojis_Emoji('🗽', 'Statue of Liberty', 'Places', ['statue_of_liberty'], []), new emojis_Emoji('⛲️', 'fountain', 'Places', ['fountain'], []), new emojis_Emoji('🗼', 'Tokyo tower', 'Places', ['tokyo_tower'], []), new emojis_Emoji('🏰', 'castle', 'Places', ['european_castle'], []), new emojis_Emoji('🏯', 'Japanese castle', 'Places', ['japanese_castle'], []), new emojis_Emoji('🏟', 'stadium', 'Places', ['stadium'], []), new emojis_Emoji('🎡', 'ferris wheel', 'Places', ['ferris_wheel'], []), new emojis_Emoji('🎢', 'roller coaster', 'Places', ['roller_coaster'], []), new emojis_Emoji('🎠', 'carousel horse', 'Places', ['carousel_horse'], []), new emojis_Emoji('⛱', 'umbrella on ground', 'Places', ['parasol_on_ground'], ['beach_umbrella']), new emojis_Emoji('🏖', 'beach with umbrella', 'Places', ['beach_umbrella'], []), new emojis_Emoji('🏝', 'desert island', 'Places', ['desert_island'], []), new emojis_Emoji('⛰', 'mountain', 'Places', ['mountain'], []), new emojis_Emoji('🏔', 'snow-capped mountain', 'Places', ['mountain_snow'], []), new emojis_Emoji('🗻', 'mount fuji', 'Places', ['mount_fuji'], []), new emojis_Emoji('🌋', 'volcano', 'Places', ['volcano'], []), new emojis_Emoji('🏜', 'desert', 'Places', ['desert'], []), new emojis_Emoji('🏕', 'camping', 'Places', ['camping'], []), new emojis_Emoji('⛺️', 'tent', 'Places', ['tent'], ['camping']), new emojis_Emoji('🛤', 'railway track', 'Places', ['railway_track'], []), new emojis_Emoji('🛣', 'motorway', 'Places', ['motorway'], []), new emojis_Emoji('🏗', 'building construction', 'Places', ['building_construction'], []), new emojis_Emoji('🏭', 'factory', 'Places', ['factory'], []), new emojis_Emoji('🏠', 'house', 'Places', ['house'], []), new emojis_Emoji('🏡', 'house with garden', 'Places', ['house_with_garden'], []), new emojis_Emoji('🏘', 'house', 'Places', ['houses'], []), new emojis_Emoji('🏚', 'derelict house', 'Places', ['derelict_house'], []), new emojis_Emoji('🏢', 'office building', 'Places', ['office'], []), new emojis_Emoji('🏬', 'department store', 'Places', ['department_store'], []), new emojis_Emoji('🏣', 'Japanese post office', 'Places', ['post_office'], []), new emojis_Emoji('🏤', 'post office', 'Places', ['european_post_office'], []), new emojis_Emoji('🏥', 'hospital', 'Places', ['hospital'], []), new emojis_Emoji('🏦', 'bank', 'Places', ['bank'], []), new emojis_Emoji('🏨', 'hotel', 'Places', ['hotel'], []), new emojis_Emoji('🏪', 'convenience store', 'Places', ['convenience_store'], []), new emojis_Emoji('🏫', 'school', 'Places', ['school'], []), new emojis_Emoji('🏩', 'love hotel', 'Places', ['love_hotel'], []), new emojis_Emoji('💒', 'wedding', 'Places', ['wedding'], ['marriage']), new emojis_Emoji('🏛', 'classical building', 'Places', ['classical_building'], []), new emojis_Emoji('⛪️', 'church', 'Places', ['church'], []), new emojis_Emoji('🕌', 'mosque', 'Places', ['mosque'], []), new emojis_Emoji('🕍', 'synagogue', 'Places', ['synagogue'], []), new emojis_Emoji('🕋', 'kaaba', 'Places', ['kaaba'], []), new emojis_Emoji('⛩', 'shinto shrine', 'Places', ['shinto_shrine'], []), new emojis_Emoji('🗾', 'map of Japan', 'Places', ['japan'], []), new emojis_Emoji('🎑', 'moon viewing ceremony', 'Places', ['rice_scene'], []), new emojis_Emoji('🏞', 'national park', 'Places', ['national_park'], []), new emojis_Emoji('🌅', 'sunrise', 'Places', ['sunrise'], []), new emojis_Emoji('🌄', 'sunrise over mountains', 'Places', ['sunrise_over_mountains'], []), new emojis_Emoji('🌠', 'shooting star', 'Places', ['stars'], []), new emojis_Emoji('🎇', 'sparkler', 'Places', ['sparkler'], []), new emojis_Emoji('🎆', 'fireworks', 'Places', ['fireworks'], ['festival', 'celebration']), new emojis_Emoji('🌇', 'sunset', 'Places', ['city_sunrise'], []), new emojis_Emoji('🌆', 'cityscape at dusk', 'Places', ['city_sunset'], []), new emojis_Emoji('🏙', 'cityscape', 'Places', ['cityscape'], ['skyline']), new emojis_Emoji('🌃', 'night with stars', 'Places', ['night_with_stars'], []), new emojis_Emoji('🌌', 'milky way', 'Places', ['milky_way'], []), new emojis_Emoji('🌉', 'bridge at night', 'Places', ['bridge_at_night'], []), new emojis_Emoji('🌁', 'foggy', 'Places', ['foggy'], ['karl']), new emojis_Emoji('⌚️', 'watch', 'Objects', ['watch'], ['time']), new emojis_Emoji('📱', 'mobile phone', 'Objects', ['iphone'], ['smartphone', 'mobile']), new emojis_Emoji('📲', 'mobile phone with arrow', 'Objects', ['calling'], ['call', 'incoming']), new emojis_Emoji('💻', 'laptop computer', 'Objects', ['computer'], ['desktop', 'screen']), new emojis_Emoji('⌨️', 'keyboard', 'Objects', ['keyboard'], []), new emojis_Emoji('🖥', 'desktop computer', 'Objects', ['desktop_computer'], []), new emojis_Emoji('🖨', 'printer', 'Objects', ['printer'], []), new emojis_Emoji('🖱', 'computer mouse', 'Objects', ['computer_mouse'], []), new emojis_Emoji('🖲', 'trackball', 'Objects', ['trackball'], []), new emojis_Emoji('🕹', 'joystick', 'Objects', ['joystick'], []), new emojis_Emoji('🗜', 'clamp', 'Objects', ['clamp'], []), new emojis_Emoji('💽', 'computer disk', 'Objects', ['minidisc'], []), new emojis_Emoji('💾', 'floppy disk', 'Objects', ['floppy_disk'], ['save']), new emojis_Emoji('💿', 'optical disk', 'Objects', ['cd'], []), new emojis_Emoji('📀', 'dvd', 'Objects', ['dvd'], []), new emojis_Emoji('📼', 'videocassette', 'Objects', ['vhs'], []), new emojis_Emoji('📷', 'camera', 'Objects', ['camera'], ['photo']), new emojis_Emoji('📸', 'camera with flash', 'Objects', ['camera_flash'], ['photo']), new emojis_Emoji('📹', 'video camera', 'Objects', ['video_camera'], []), new emojis_Emoji('🎥', 'movie camera', 'Objects', ['movie_camera'], ['film', 'video']), new emojis_Emoji('📽', 'film projector', 'Objects', ['film_projector'], []), new emojis_Emoji('🎞', 'film frames', 'Objects', ['film_strip'], []), new emojis_Emoji('📞', 'telephone receiver', 'Objects', ['telephone_receiver'], ['phone', 'call']), new emojis_Emoji('☎️', 'telephone', 'Objects', ['phone', 'telephone'], []), new emojis_Emoji('📟', 'pager', 'Objects', ['pager'], []), new emojis_Emoji('📠', 'fax machine', 'Objects', ['fax'], []), new emojis_Emoji('📺', 'television', 'Objects', ['tv'], []), new emojis_Emoji('📻', 'radio', 'Objects', ['radio'], ['podcast']), new emojis_Emoji('🎙', 'studio microphone', 'Objects', ['studio_microphone'], ['podcast']), new emojis_Emoji('🎚', 'level slider', 'Objects', ['level_slider'], []), new emojis_Emoji('🎛', 'control knobs', 'Objects', ['control_knobs'], []), new emojis_Emoji('⏱', 'stopwatch', 'Objects', ['stopwatch'], []), new emojis_Emoji('⏲', 'timer clock', 'Objects', ['timer_clock'], []), new emojis_Emoji('⏰', 'alarm clock', 'Objects', ['alarm_clock'], ['morning']), new emojis_Emoji('🕰', 'mantelpiece clock', 'Objects', ['mantelpiece_clock'], []), new emojis_Emoji('⌛️', 'hourglass', 'Objects', ['hourglass'], ['time']), new emojis_Emoji('⏳', 'hourglass with flowing sand', 'Objects', ['hourglass_flowing_sand'], ['time']), new emojis_Emoji('📡', 'satellite antenna', 'Objects', ['satellite'], ['signal']), new emojis_Emoji('🔋', 'battery', 'Objects', ['battery'], ['power']), new emojis_Emoji('🔌', 'electric plug', 'Objects', ['electric_plug'], []), new emojis_Emoji('💡', 'light bulb', 'Objects', ['bulb'], ['idea', 'light']), new emojis_Emoji('🔦', 'flashlight', 'Objects', ['flashlight'], []), new emojis_Emoji('🕯', 'candle', 'Objects', ['candle'], []), new emojis_Emoji('🗑', 'wastebasket', 'Objects', ['wastebasket'], ['trash']), new emojis_Emoji('🛢', 'oil drum', 'Objects', ['oil_drum'], []), new emojis_Emoji('💸', 'money with wings', 'Objects', ['money_with_wings'], ['dollar']), new emojis_Emoji('💵', 'dollar banknote', 'Objects', ['dollar'], ['money']), new emojis_Emoji('💴', 'yen banknote', 'Objects', ['yen'], []), new emojis_Emoji('💶', 'euro banknote', 'Objects', ['euro'], []), new emojis_Emoji('💷', 'pound banknote', 'Objects', ['pound'], []), new emojis_Emoji('💰', 'money bag', 'Objects', ['moneybag'], ['dollar', 'cream']), new emojis_Emoji('💳', 'credit card', 'Objects', ['credit_card'], ['subscription']), new emojis_Emoji('💎', 'gem stone', 'Objects', ['gem'], ['diamond']), new emojis_Emoji('⚖️', 'balance scale', 'Objects', ['balance_scale'], []), new emojis_Emoji('🔧', 'wrench', 'Objects', ['wrench'], ['tool']), new emojis_Emoji('🔨', 'hammer', 'Objects', ['hammer'], ['tool']), new emojis_Emoji('⚒', 'hammer and pick', 'Objects', ['hammer_and_pick'], []), new emojis_Emoji('🛠', 'hammer and wrench', 'Objects', ['hammer_and_wrench'], []), new emojis_Emoji('⛏', 'pick', 'Objects', ['pick'], []), new emojis_Emoji('🔩', 'nut and bolt', 'Objects', ['nut_and_bolt'], []), new emojis_Emoji('⚙️', 'gear', 'Objects', ['gear'], []), new emojis_Emoji('⛓', 'chains', 'Objects', ['chains'], []), new emojis_Emoji('🔫', 'pistol', 'Objects', ['gun'], ['shoot', 'weapon']), new emojis_Emoji('💣', 'bomb', 'Objects', ['bomb'], ['boom']), new emojis_Emoji('🔪', 'kitchen knife', 'Objects', ['hocho', 'knife'], ['cut', 'chop']), new emojis_Emoji('🗡', 'dagger', 'Objects', ['dagger'], []), new emojis_Emoji('⚔️', 'crossed swords', 'Objects', ['crossed_swords'], []), new emojis_Emoji('🛡', 'shield', 'Objects', ['shield'], []), new emojis_Emoji('🚬', 'cigarette', 'Objects', ['smoking'], ['cigarette']), new emojis_Emoji('⚰️', 'coffin', 'Objects', ['coffin'], ['funeral']), new emojis_Emoji('⚱️', 'funeral urn', 'Objects', ['funeral_urn'], []), new emojis_Emoji('🏺', 'amphora', 'Objects', ['amphora'], []), new emojis_Emoji('🔮', 'crystal ball', 'Objects', ['crystal_ball'], ['fortune']), new emojis_Emoji('📿', 'prayer beads', 'Objects', ['prayer_beads'], []), new emojis_Emoji('💈', 'barber pole', 'Objects', ['barber'], []), new emojis_Emoji('⚗️', 'alembic', 'Objects', ['alembic'], []), new emojis_Emoji('🔭', 'telescope', 'Objects', ['telescope'], []), new emojis_Emoji('🔬', 'microscope', 'Objects', ['microscope'], ['science', 'laboratory', 'investigate']), new emojis_Emoji('🕳', 'hole', 'Objects', ['hole'], []), new emojis_Emoji('💊', 'pill', 'Objects', ['pill'], ['health', 'medicine']), new emojis_Emoji('💉', 'syringe', 'Objects', ['syringe'], ['health', 'hospital', 'needle']), new emojis_Emoji('🌡', 'thermometer', 'Objects', ['thermometer'], []), new emojis_Emoji('🚽', 'toilet', 'Objects', ['toilet'], ['wc']), new emojis_Emoji('🚰', 'potable water', 'Objects', ['potable_water'], []), new emojis_Emoji('🚿', 'shower', 'Objects', ['shower'], ['bath']), new emojis_Emoji('🛁', 'bathtub', 'Objects', ['bathtub'], []), new emojis_Emoji('🛀', 'person taking bath', 'Objects', ['bath'], ['shower']), new emojis_Emoji('🛎', 'bellhop bell', 'Objects', ['bellhop_bell'], []), new emojis_Emoji('🔑', 'key', 'Objects', ['key'], ['lock', 'password']), new emojis_Emoji('🗝', 'old key', 'Objects', ['old_key'], []), new emojis_Emoji('🚪', 'door', 'Objects', ['door'], []), new emojis_Emoji('🛋', 'couch and lamp', 'Objects', ['couch_and_lamp'], []), new emojis_Emoji('🛏', 'bed', 'Objects', ['bed'], []), new emojis_Emoji('🛌', 'person in bed', 'Objects', ['sleeping_bed'], []), new emojis_Emoji('🖼', 'framed picture', 'Objects', ['framed_picture'], []), new emojis_Emoji('🛍', 'shopping bags', 'Objects', ['shopping'], ['bags']), new emojis_Emoji('🛒', 'shopping cart', 'Objects', ['shopping_cart'], []), new emojis_Emoji('🎁', 'wrapped gift', 'Objects', ['gift'], ['present', 'birthday', 'christmas']), new emojis_Emoji('🎈', 'balloon', 'Objects', ['balloon'], ['party', 'birthday']), new emojis_Emoji('🎏', 'carp streamer', 'Objects', ['flags'], []), new emojis_Emoji('🎀', 'ribbon', 'Objects', ['ribbon'], []), new emojis_Emoji('🎊', 'confetti ball', 'Objects', ['confetti_ball'], []), new emojis_Emoji('🎉', 'party popper', 'Objects', ['tada'], ['hooray', 'party']), new emojis_Emoji('🎎', 'Japanese dolls', 'Objects', ['dolls'], []), new emojis_Emoji('🏮', 'red paper lantern', 'Objects', ['izakaya_lantern', 'lantern'], []), new emojis_Emoji('🎐', 'wind chime', 'Objects', ['wind_chime'], []), new emojis_Emoji('✉️', 'envelope', 'Objects', ['email', 'envelope'], ['letter']), new emojis_Emoji('📩', 'envelope with arrow', 'Objects', ['envelope_with_arrow'], []), new emojis_Emoji('📨', 'incoming envelope', 'Objects', ['incoming_envelope'], []), new emojis_Emoji('📧', 'e-mail', 'Objects', ['e-mail'], []), new emojis_Emoji('💌', 'love letter', 'Objects', ['love_letter'], ['email', 'envelope']), new emojis_Emoji('📥', 'inbox tray', 'Objects', ['inbox_tray'], []), new emojis_Emoji('📤', 'outbox tray', 'Objects', ['outbox_tray'], []), new emojis_Emoji('📦', 'package', 'Objects', ['package'], ['shipping']), new emojis_Emoji('🏷', 'label', 'Objects', ['label'], ['tag']), new emojis_Emoji('📪', 'closed mailbox with lowered flag', 'Objects', ['mailbox_closed'], []), new emojis_Emoji('📫', 'closed mailbox with raised flag', 'Objects', ['mailbox'], []), new emojis_Emoji('📬', 'open mailbox with raised flag', 'Objects', ['mailbox_with_mail'], []), new emojis_Emoji('📭', 'open mailbox with lowered flag', 'Objects', ['mailbox_with_no_mail'], []), new emojis_Emoji('📮', 'postbox', 'Objects', ['postbox'], []), new emojis_Emoji('📯', 'postal horn', 'Objects', ['postal_horn'], []), new emojis_Emoji('📜', 'scroll', 'Objects', ['scroll'], ['document']), new emojis_Emoji('📃', 'page with curl', 'Objects', ['page_with_curl'], []), new emojis_Emoji('📄', 'page facing up', 'Objects', ['page_facing_up'], ['document']), new emojis_Emoji('📑', 'bookmark tabs', 'Objects', ['bookmark_tabs'], []), new emojis_Emoji('📊', 'bar chart', 'Objects', ['bar_chart'], ['stats', 'metrics']), new emojis_Emoji('📈', 'chart increasing', 'Objects', ['chart_with_upwards_trend'], ['graph', 'metrics']), new emojis_Emoji('📉', 'chart decreasing', 'Objects', ['chart_with_downwards_trend'], ['graph', 'metrics']), new emojis_Emoji('🗒', 'spiral notepad', 'Objects', ['spiral_notepad'], []), new emojis_Emoji('🗓', 'spiral calendar', 'Objects', ['spiral_calendar'], []), new emojis_Emoji('📆', 'tear-off calendar', 'Objects', ['calendar'], ['schedule']), new emojis_Emoji('📅', 'calendar', 'Objects', ['date'], ['calendar', 'schedule']), new emojis_Emoji('📇', 'card index', 'Objects', ['card_index'], []), new emojis_Emoji('🗃', 'card file box', 'Objects', ['card_file_box'], []), new emojis_Emoji('🗳', 'ballot box with ballot', 'Objects', ['ballot_box'], []), new emojis_Emoji('🗄', 'file cabinet', 'Objects', ['file_cabinet'], []), new emojis_Emoji('📋', 'clipboard', 'Objects', ['clipboard'], []), new emojis_Emoji('📁', 'file folder', 'Objects', ['file_folder'], ['directory']), new emojis_Emoji('📂', 'open file folder', 'Objects', ['open_file_folder'], []), new emojis_Emoji('🗂', 'card index dividers', 'Objects', ['card_index_dividers'], []), new emojis_Emoji('🗞', 'rolled-up newspaper', 'Objects', ['newspaper_roll'], ['press']), new emojis_Emoji('📰', 'newspaper', 'Objects', ['newspaper'], ['press']), new emojis_Emoji('📓', 'notebook', 'Objects', ['notebook'], []), new emojis_Emoji('📔', 'notebook with decorative cover', 'Objects', ['notebook_with_decorative_cover'], []), new emojis_Emoji('📒', 'ledger', 'Objects', ['ledger'], []), new emojis_Emoji('📕', 'closed book', 'Objects', ['closed_book'], []), new emojis_Emoji('📗', 'green book', 'Objects', ['green_book'], []), new emojis_Emoji('📘', 'blue book', 'Objects', ['blue_book'], []), new emojis_Emoji('📙', 'orange book', 'Objects', ['orange_book'], []), new emojis_Emoji('📚', 'books', 'Objects', ['books'], ['library']), new emojis_Emoji('📖', 'open book', 'Objects', ['book', 'open_book'], []), new emojis_Emoji('🔖', 'bookmark', 'Objects', ['bookmark'], []), new emojis_Emoji('🔗', 'link', 'Objects', ['link'], []), new emojis_Emoji('📎', 'paperclip', 'Objects', ['paperclip'], []), new emojis_Emoji('🖇', 'linked paperclips', 'Objects', ['paperclips'], []), new emojis_Emoji('📐', 'triangular ruler', 'Objects', ['triangular_ruler'], []), new emojis_Emoji('📏', 'straight ruler', 'Objects', ['straight_ruler'], []), new emojis_Emoji('📌', 'pushpin', 'Objects', ['pushpin'], ['location']), new emojis_Emoji('📍', 'round pushpin', 'Objects', ['round_pushpin'], ['location']), new emojis_Emoji('✂️', 'scissors', 'Objects', ['scissors'], ['cut']), new emojis_Emoji('🖊', 'pen', 'Objects', ['pen'], []), new emojis_Emoji('🖋', 'fountain pen', 'Objects', ['fountain_pen'], []), new emojis_Emoji('✒️', 'black nib', 'Objects', ['black_nib'], []), new emojis_Emoji('🖌', 'paintbrush', 'Objects', ['paintbrush'], []), new emojis_Emoji('🖍', 'crayon', 'Objects', ['crayon'], []), new emojis_Emoji('📝', 'memo', 'Objects', ['memo', 'pencil'], ['document', 'note']), new emojis_Emoji('✏️', 'pencil', 'Objects', ['pencil2'], []), new emojis_Emoji('🔍', 'left-pointing magnifying glass', 'Objects', ['mag'], ['search', 'zoom']), new emojis_Emoji('🔎', 'right-pointing magnifying glass', 'Objects', ['mag_right'], []), new emojis_Emoji('🔏', 'locked with pen', 'Objects', ['lock_with_ink_pen'], []), new emojis_Emoji('🔐', 'locked with key', 'Objects', ['closed_lock_with_key'], ['security']), new emojis_Emoji('🔒', 'locked', 'Objects', ['lock'], ['security', 'private']), new emojis_Emoji('🔓', 'unlocked', 'Objects', ['unlock'], ['security']), new emojis_Emoji('❤️', 'red heart', 'Symbols', ['heart'], ['love']), new emojis_Emoji('💛', 'yellow heart', 'Symbols', ['yellow_heart'], []), new emojis_Emoji('💚', 'green heart', 'Symbols', ['green_heart'], []), new emojis_Emoji('💙', 'blue heart', 'Symbols', ['blue_heart'], []), new emojis_Emoji('💜', 'purple heart', 'Symbols', ['purple_heart'], []), new emojis_Emoji('🖤', 'black heart', 'Symbols', ['black_heart'], []), new emojis_Emoji('💔', 'broken heart', 'Symbols', ['broken_heart'], []), new emojis_Emoji('❣️', 'heavy heart exclamation', 'Symbols', ['heavy_heart_exclamation'], []), new emojis_Emoji('💕', 'two hearts', 'Symbols', ['two_hearts'], []), new emojis_Emoji('💞', 'revolving hearts', 'Symbols', ['revolving_hearts'], []), new emojis_Emoji('💓', 'beating heart', 'Symbols', ['heartbeat'], []), new emojis_Emoji('💗', 'growing heart', 'Symbols', ['heartpulse'], []), new emojis_Emoji('💖', 'sparkling heart', 'Symbols', ['sparkling_heart'], []), new emojis_Emoji('💘', 'heart with arrow', 'Symbols', ['cupid'], ['love', 'heart']), new emojis_Emoji('💝', 'heart with ribbon', 'Symbols', ['gift_heart'], ['chocolates']), new emojis_Emoji('💟', 'heart decoration', 'Symbols', ['heart_decoration'], []), new emojis_Emoji('☮️', 'peace symbol', 'Symbols', ['peace_symbol'], []), new emojis_Emoji('✝️', 'latin cross', 'Symbols', ['latin_cross'], []), new emojis_Emoji('☪️', 'star and crescent', 'Symbols', ['star_and_crescent'], []), new emojis_Emoji('🕉', 'om', 'Symbols', ['om'], []), new emojis_Emoji('☸️', 'wheel of dharma', 'Symbols', ['wheel_of_dharma'], []), new emojis_Emoji('✡️', 'star of David', 'Symbols', ['star_of_david'], []), new emojis_Emoji('🔯', 'dotted six-pointed star', 'Symbols', ['six_pointed_star'], []), new emojis_Emoji('🕎', 'menorah', 'Symbols', ['menorah'], []), new emojis_Emoji('☯️', 'yin yang', 'Symbols', ['yin_yang'], []), new emojis_Emoji('☦️', 'orthodox cross', 'Symbols', ['orthodox_cross'], []), new emojis_Emoji('🛐', 'place of worship', 'Symbols', ['place_of_worship'], []), new emojis_Emoji('⛎', 'Ophiuchus', 'Symbols', ['ophiuchus'], []), new emojis_Emoji('♈️', 'Aries', 'Symbols', ['aries'], []), new emojis_Emoji('♉️', 'Taurus', 'Symbols', ['taurus'], []), new emojis_Emoji('♊️', 'Gemini', 'Symbols', ['gemini'], []), new emojis_Emoji('♋️', 'Cancer', 'Symbols', ['cancer'], []), new emojis_Emoji('♌️', 'Leo', 'Symbols', ['leo'], []), new emojis_Emoji('♍️', 'Virgo', 'Symbols', ['virgo'], []), new emojis_Emoji('♎️', 'Libra', 'Symbols', ['libra'], []), new emojis_Emoji('♏️', 'Scorpius', 'Symbols', ['scorpius'], []), new emojis_Emoji('♐️', 'Sagittarius', 'Symbols', ['sagittarius'], []), new emojis_Emoji('♑️', 'Capricorn', 'Symbols', ['capricorn'], []), new emojis_Emoji('♒️', 'Aquarius', 'Symbols', ['aquarius'], []), new emojis_Emoji('♓️', 'Pisces', 'Symbols', ['pisces'], []), new emojis_Emoji('🆔', 'ID button', 'Symbols', ['id'], []), new emojis_Emoji('⚛️', 'atom symbol', 'Symbols', ['atom_symbol'], []), new emojis_Emoji('🉑', 'Japanese “acceptable” button', 'Symbols', ['accept'], []), new emojis_Emoji('☢️', 'radioactive', 'Symbols', ['radioactive'], []), new emojis_Emoji('☣️', 'biohazard', 'Symbols', ['biohazard'], []), new emojis_Emoji('📴', 'mobile phone off', 'Symbols', ['mobile_phone_off'], ['mute', 'off']), new emojis_Emoji('📳', 'vibration mode', 'Symbols', ['vibration_mode'], []), new emojis_Emoji('🈶', 'Japanese “not free of charge” button', 'Symbols', ['u6709'], []), new emojis_Emoji('🈚️', 'Japanese “free of charge” button', 'Symbols', ['u7121'], []), new emojis_Emoji('🈸', 'Japanese “application” button', 'Symbols', ['u7533'], []), new emojis_Emoji('🈺', 'Japanese “open for business” button', 'Symbols', ['u55b6'], []), new emojis_Emoji('🈷️', 'Japanese “monthly amount” button', 'Symbols', ['u6708'], []), new emojis_Emoji('✴️', 'eight-pointed star', 'Symbols', ['eight_pointed_black_star'], []), new emojis_Emoji('🆚', 'VS button', 'Symbols', ['vs'], []), new emojis_Emoji('💮', 'white flower', 'Symbols', ['white_flower'], []), new emojis_Emoji('🉐', 'Japanese “bargain” button', 'Symbols', ['ideograph_advantage'], []), new emojis_Emoji('㊙️', 'Japanese “secret” button', 'Symbols', ['secret'], []), new emojis_Emoji('㊗️', 'Japanese “congratulations” button', 'Symbols', ['congratulations'], []), new emojis_Emoji('🈴', 'Japanese “passing grade” button', 'Symbols', ['u5408'], []), new emojis_Emoji('🈵', 'Japanese “no vacancy” button', 'Symbols', ['u6e80'], []), new emojis_Emoji('🈹', 'Japanese “discount” button', 'Symbols', ['u5272'], []), new emojis_Emoji('🈲', 'Japanese “prohibited” button', 'Symbols', ['u7981'], []), new emojis_Emoji('🅰️', 'A button (blood type)', 'Symbols', ['a'], []), new emojis_Emoji('🅱️', 'B button (blood type)', 'Symbols', ['b'], []), new emojis_Emoji('🆎', 'AB button (blood type)', 'Symbols', ['ab'], []), new emojis_Emoji('🆑', 'CL button', 'Symbols', ['cl'], []), new emojis_Emoji('🅾️', 'O button (blood type)', 'Symbols', ['o2'], []), new emojis_Emoji('🆘', 'SOS button', 'Symbols', ['sos'], ['help', 'emergency']), new emojis_Emoji('❌', 'cross mark', 'Symbols', ['x'], []), new emojis_Emoji('⭕️', 'heavy large circle', 'Symbols', ['o'], []), new emojis_Emoji('🛑', 'stop sign', 'Symbols', ['stop_sign'], []), new emojis_Emoji('⛔️', 'no entry', 'Symbols', ['no_entry'], ['limit']), new emojis_Emoji('📛', 'name badge', 'Symbols', ['name_badge'], []), new emojis_Emoji('🚫', 'prohibited', 'Symbols', ['no_entry_sign'], ['block', 'forbidden']), new emojis_Emoji('💯', 'hundred points', 'Symbols', ['100'], ['score', 'perfect']), new emojis_Emoji('💢', 'anger symbol', 'Symbols', ['anger'], ['angry']), new emojis_Emoji('♨️', 'hot springs', 'Symbols', ['hotsprings'], []), new emojis_Emoji('🚷', 'no pedestrians', 'Symbols', ['no_pedestrians'], []), new emojis_Emoji('🚯', 'no littering', 'Symbols', ['do_not_litter'], []), new emojis_Emoji('🚳', 'no bicycles', 'Symbols', ['no_bicycles'], []), new emojis_Emoji('🚱', 'non-potable water', 'Symbols', ['non-potable_water'], []), new emojis_Emoji('🔞', 'no one under eighteen', 'Symbols', ['underage'], []), new emojis_Emoji('📵', 'no mobile phones', 'Symbols', ['no_mobile_phones'], []), new emojis_Emoji('🚭', 'no smoking', 'Symbols', ['no_smoking'], []), new emojis_Emoji('❗️', 'exclamation mark', 'Symbols', ['exclamation', 'heavy_exclamation_mark'], ['bang']), new emojis_Emoji('❕', 'white exclamation mark', 'Symbols', ['grey_exclamation'], []), new emojis_Emoji('❓', 'question mark', 'Symbols', ['question'], ['confused']), new emojis_Emoji('❔', 'white question mark', 'Symbols', ['grey_question'], []), new emojis_Emoji('‼️', 'double exclamation mark', 'Symbols', ['bangbang'], []), new emojis_Emoji('⁉️', 'exclamation question mark', 'Symbols', ['interrobang'], []), new emojis_Emoji('🔅', 'dim button', 'Symbols', ['low_brightness'], []), new emojis_Emoji('🔆', 'bright button', 'Symbols', ['high_brightness'], []), new emojis_Emoji('〽️', 'part alternation mark', 'Symbols', ['part_alternation_mark'], []), new emojis_Emoji('⚠️', 'warning', 'Symbols', ['warning'], ['wip']), new emojis_Emoji('🚸', 'children crossing', 'Symbols', ['children_crossing'], []), new emojis_Emoji('🔱', 'trident emblem', 'Symbols', ['trident'], []), new emojis_Emoji('⚜️', 'fleur-de-lis', 'Symbols', ['fleur_de_lis'], []), new emojis_Emoji('🔰', 'Japanese symbol for beginner', 'Symbols', ['beginner'], []), new emojis_Emoji('♻️', 'recycling symbol', 'Symbols', ['recycle'], ['environment', 'green']), new emojis_Emoji('✅', 'white heavy check mark', 'Symbols', ['white_check_mark'], []), new emojis_Emoji('🈯️', 'Japanese “reserved” button', 'Symbols', ['u6307'], []), new emojis_Emoji('💹', 'chart increasing with yen', 'Symbols', ['chart'], []), new emojis_Emoji('❇️', 'sparkle', 'Symbols', ['sparkle'], []), new emojis_Emoji('✳️', 'eight-spoked asterisk', 'Symbols', ['eight_spoked_asterisk'], []), new emojis_Emoji('❎', 'cross mark button', 'Symbols', ['negative_squared_cross_mark'], []), new emojis_Emoji('🌐', 'globe with meridians', 'Symbols', ['globe_with_meridians'], ['world', 'global', 'international']), new emojis_Emoji('💠', 'diamond with a dot', 'Symbols', ['diamond_shape_with_a_dot_inside'], []), new emojis_Emoji('Ⓜ️', 'circled M', 'Symbols', ['m'], []), new emojis_Emoji('🌀', 'cyclone', 'Symbols', ['cyclone'], ['swirl']), new emojis_Emoji('💤', 'zzz', 'Symbols', ['zzz'], ['sleeping']), new emojis_Emoji('🏧', 'ATM sign', 'Symbols', ['atm'], []), new emojis_Emoji('🚾', 'water closet', 'Symbols', ['wc'], ['toilet', 'restroom']), new emojis_Emoji('♿️', 'wheelchair symbol', 'Symbols', ['wheelchair'], ['accessibility']), new emojis_Emoji('🅿️', 'P button', 'Symbols', ['parking'], []), new emojis_Emoji('🈳', 'Japanese “vacancy” button', 'Symbols', ['u7a7a'], []), new emojis_Emoji('🈂️', 'Japanese “service charge” button', 'Symbols', ['sa'], []), new emojis_Emoji('🛂', 'passport control', 'Symbols', ['passport_control'], []), new emojis_Emoji('🛃', 'customs', 'Symbols', ['customs'], []), new emojis_Emoji('🛄', 'baggage claim', 'Symbols', ['baggage_claim'], ['airport']), new emojis_Emoji('🛅', 'left luggage', 'Symbols', ['left_luggage'], []), new emojis_Emoji('🚹', 'men’s room', 'Symbols', ['mens'], []), new emojis_Emoji('🚺', 'women’s room', 'Symbols', ['womens'], []), new emojis_Emoji('🚼', 'baby symbol', 'Symbols', ['baby_symbol'], []), new emojis_Emoji('🚻', 'restroom', 'Symbols', ['restroom'], ['toilet']), new emojis_Emoji('🚮', 'litter in bin sign', 'Symbols', ['put_litter_in_its_place'], []), new emojis_Emoji('🎦', 'cinema', 'Symbols', ['cinema'], ['film', 'movie']), new emojis_Emoji('📶', 'antenna bars', 'Symbols', ['signal_strength'], ['wifi']), new emojis_Emoji('🈁', 'Japanese “here” button', 'Symbols', ['koko'], []), new emojis_Emoji('🔣', 'input symbols', 'Symbols', ['symbols'], []), new emojis_Emoji('ℹ️', 'information', 'Symbols', ['information_source'], []), new emojis_Emoji('🔤', 'input latin letters', 'Symbols', ['abc'], ['alphabet']), new emojis_Emoji('🔡', 'input latin lowercase', 'Symbols', ['abcd'], []), new emojis_Emoji('🔠', 'input latin uppercase', 'Symbols', ['capital_abcd'], ['letters']), new emojis_Emoji('🆖', 'NG button', 'Symbols', ['ng'], []), new emojis_Emoji('🆗', 'OK button', 'Symbols', ['ok'], ['yes']), new emojis_Emoji('🆙', 'UP! button', 'Symbols', ['up'], []), new emojis_Emoji('🆒', 'COOL button', 'Symbols', ['cool'], []), new emojis_Emoji('🆕', 'NEW button', 'Symbols', ['new'], ['fresh']), new emojis_Emoji('🆓', 'FREE button', 'Symbols', ['free'], []), new emojis_Emoji('0️⃣', 'keycap: 0', 'Symbols', ['zero'], []), new emojis_Emoji('1️⃣', 'keycap: 1', 'Symbols', ['one'], []), new emojis_Emoji('2️⃣', 'keycap: 2', 'Symbols', ['two'], []), new emojis_Emoji('3️⃣', 'keycap: 3', 'Symbols', ['three'], []), new emojis_Emoji('4️⃣', 'keycap: 4', 'Symbols', ['four'], []), new emojis_Emoji('5️⃣', 'keycap: 5', 'Symbols', ['five'], []), new emojis_Emoji('6️⃣', 'keycap: 6', 'Symbols', ['six'], []), new emojis_Emoji('7️⃣', 'keycap: 7', 'Symbols', ['seven'], []), new emojis_Emoji('8️⃣', 'keycap: 8', 'Symbols', ['eight'], []), new emojis_Emoji('9️⃣', 'keycap: 9', 'Symbols', ['nine'], []), new emojis_Emoji('🔟', 'keycap 10', 'Symbols', ['keycap_ten'], []), new emojis_Emoji('🔢', 'input numbers', 'Symbols', ['1234'], ['numbers']), new emojis_Emoji('#️⃣', 'keycap: #', 'Symbols', ['hash'], ['number']), new emojis_Emoji('*️⃣', 'keycap: *', 'Symbols', ['asterisk'], []), new emojis_Emoji('▶️', 'play button', 'Symbols', ['arrow_forward'], []), new emojis_Emoji('⏸', 'pause button', 'Symbols', ['pause_button'], []), new emojis_Emoji('⏯', 'play or pause button', 'Symbols', ['play_or_pause_button'], []), new emojis_Emoji('⏹', 'stop button', 'Symbols', ['stop_button'], []), new emojis_Emoji('⏺', 'record button', 'Symbols', ['record_button'], []), new emojis_Emoji('⏭', 'next track button', 'Symbols', ['next_track_button'], []), new emojis_Emoji('⏮', 'last track button', 'Symbols', ['previous_track_button'], []), new emojis_Emoji('⏩', 'fast-forward button', 'Symbols', ['fast_forward'], []), new emojis_Emoji('⏪', 'fast reverse button', 'Symbols', ['rewind'], []), new emojis_Emoji('⏫', 'fast up button', 'Symbols', ['arrow_double_up'], []), new emojis_Emoji('⏬', 'fast down button', 'Symbols', ['arrow_double_down'], []), new emojis_Emoji('◀️', 'reverse button', 'Symbols', ['arrow_backward'], []), new emojis_Emoji('🔼', 'up button', 'Symbols', ['arrow_up_small'], []), new emojis_Emoji('🔽', 'down button', 'Symbols', ['arrow_down_small'], []), new emojis_Emoji('➡️', 'right arrow', 'Symbols', ['arrow_right'], []), new emojis_Emoji('⬅️', 'left arrow', 'Symbols', ['arrow_left'], []), new emojis_Emoji('⬆️', 'up arrow', 'Symbols', ['arrow_up'], []), new emojis_Emoji('⬇️', 'down arrow', 'Symbols', ['arrow_down'], []), new emojis_Emoji('↗️', 'up-right arrow', 'Symbols', ['arrow_upper_right'], []), new emojis_Emoji('↘️', 'down-right arrow', 'Symbols', ['arrow_lower_right'], []), new emojis_Emoji('↙️', 'down-left arrow', 'Symbols', ['arrow_lower_left'], []), new emojis_Emoji('↖️', 'up-left arrow', 'Symbols', ['arrow_upper_left'], []), new emojis_Emoji('↕️', 'up-down arrow', 'Symbols', ['arrow_up_down'], []), new emojis_Emoji('↔️', 'left-right arrow', 'Symbols', ['left_right_arrow'], []), new emojis_Emoji('↪️', 'left arrow curving right', 'Symbols', ['arrow_right_hook'], []), new emojis_Emoji('↩️', 'right arrow curving left', 'Symbols', ['leftwards_arrow_with_hook'], ['return']), new emojis_Emoji('⤴️', 'right arrow curving up', 'Symbols', ['arrow_heading_up'], []), new emojis_Emoji('⤵️', 'right arrow curving down', 'Symbols', ['arrow_heading_down'], []), new emojis_Emoji('🔀', 'shuffle tracks button', 'Symbols', ['twisted_rightwards_arrows'], ['shuffle']), new emojis_Emoji('🔁', 'repeat button', 'Symbols', ['repeat'], ['loop']), new emojis_Emoji('🔂', 'repeat single button', 'Symbols', ['repeat_one'], []), new emojis_Emoji('🔄', 'anticlockwise arrows button', 'Symbols', ['arrows_counterclockwise'], ['sync']), new emojis_Emoji('🔃', 'clockwise vertical arrows', 'Symbols', ['arrows_clockwise'], []), new emojis_Emoji('🎵', 'musical note', 'Symbols', ['musical_note'], []), new emojis_Emoji('🎶', 'musical notes', 'Symbols', ['notes'], ['music']), new emojis_Emoji('➕', 'heavy plus sign', 'Symbols', ['heavy_plus_sign'], []), new emojis_Emoji('➖', 'heavy minus sign', 'Symbols', ['heavy_minus_sign'], []), new emojis_Emoji('➗', 'heavy division sign', 'Symbols', ['heavy_division_sign'], []), new emojis_Emoji('✖️', 'heavy multiplication x', 'Symbols', ['heavy_multiplication_x'], []), new emojis_Emoji('💲', 'heavy dollar sign', 'Symbols', ['heavy_dollar_sign'], []), new emojis_Emoji('💱', 'currency exchange', 'Symbols', ['currency_exchange'], []), new emojis_Emoji('™️', 'trade mark', 'Symbols', ['tm'], ['trademark']), new emojis_Emoji('©️', 'copyright', 'Symbols', ['copyright'], []), new emojis_Emoji('®️', 'registered', 'Symbols', ['registered'], []), new emojis_Emoji('〰️', 'wavy dash', 'Symbols', ['wavy_dash'], []), new emojis_Emoji('➰', 'curly loop', 'Symbols', ['curly_loop'], []), new emojis_Emoji('➿', 'double curly loop', 'Symbols', ['loop'], []), new emojis_Emoji('🔚', 'END arrow', 'Symbols', ['end'], []), new emojis_Emoji('🔙', 'BACK arrow', 'Symbols', ['back'], []), new emojis_Emoji('🔛', 'ON! arrow', 'Symbols', ['on'], []), new emojis_Emoji('🔝', 'TOP arrow', 'Symbols', ['top'], []), new emojis_Emoji('🔜', 'SOON arrow', 'Symbols', ['soon'], []), new emojis_Emoji('✔️', 'heavy check mark', 'Symbols', ['heavy_check_mark'], []), new emojis_Emoji('☑️', 'ballot box with check', 'Symbols', ['ballot_box_with_check'], []), new emojis_Emoji('🔘', 'radio button', 'Symbols', ['radio_button'], []), new emojis_Emoji('⚪️', 'white circle', 'Symbols', ['white_circle'], []), new emojis_Emoji('⚫️', 'black circle', 'Symbols', ['black_circle'], []), new emojis_Emoji('🔴', 'red circle', 'Symbols', ['red_circle'], []), new emojis_Emoji('🔵', 'blue circle', 'Symbols', ['large_blue_circle'], []), new emojis_Emoji('🔺', 'red triangle pointed up', 'Symbols', ['small_red_triangle'], []), new emojis_Emoji('🔻', 'red triangle pointed down', 'Symbols', ['small_red_triangle_down'], []), new emojis_Emoji('🔸', 'small orange diamond', 'Symbols', ['small_orange_diamond'], []), new emojis_Emoji('🔹', 'small blue diamond', 'Symbols', ['small_blue_diamond'], []), new emojis_Emoji('🔶', 'large orange diamond', 'Symbols', ['large_orange_diamond'], []), new emojis_Emoji('🔷', 'large blue diamond', 'Symbols', ['large_blue_diamond'], []), new emojis_Emoji('🔳', 'white square button', 'Symbols', ['white_square_button'], []), new emojis_Emoji('🔲', 'black square button', 'Symbols', ['black_square_button'], []), new emojis_Emoji('▪️', 'black small square', 'Symbols', ['black_small_square'], []), new emojis_Emoji('▫️', 'white small square', 'Symbols', ['white_small_square'], []), new emojis_Emoji('◾️', 'black medium-small square', 'Symbols', ['black_medium_small_square'], []), new emojis_Emoji('◽️', 'white medium-small square', 'Symbols', ['white_medium_small_square'], []), new emojis_Emoji('◼️', 'black medium square', 'Symbols', ['black_medium_square'], []), new emojis_Emoji('◻️', 'white medium square', 'Symbols', ['white_medium_square'], []), new emojis_Emoji('⬛️', 'black large square', 'Symbols', ['black_large_square'], []), new emojis_Emoji('⬜️', 'white large square', 'Symbols', ['white_large_square'], []), new emojis_Emoji('🔈', 'speaker low volume', 'Symbols', ['speaker'], []), new emojis_Emoji('🔇', 'muted speaker', 'Symbols', ['mute'], ['sound', 'volume']), new emojis_Emoji('🔉', 'speaker medium volume', 'Symbols', ['sound'], ['volume']), new emojis_Emoji('🔊', 'speaker high volume', 'Symbols', ['loud_sound'], ['volume']), new emojis_Emoji('🔔', 'bell', 'Symbols', ['bell'], ['sound', 'notification']), new emojis_Emoji('🔕', 'bell with slash', 'Symbols', ['no_bell'], ['volume', 'off']), new emojis_Emoji('📣', 'megaphone', 'Symbols', ['mega'], []), new emojis_Emoji('📢', 'loudspeaker', 'Symbols', ['loudspeaker'], ['announcement']), new emojis_Emoji('👁‍🗨', 'eye in speech bubble', 'Symbols', ['eye_speech_bubble'], []), new emojis_Emoji('💬', 'speech balloon', 'Symbols', ['speech_balloon'], ['comment']), new emojis_Emoji('💭', 'thought balloon', 'Symbols', ['thought_balloon'], ['thinking']), new emojis_Emoji('🗯', 'right anger bubble', 'Symbols', ['right_anger_bubble'], []), new emojis_Emoji('♠️', 'spade suit', 'Symbols', ['spades'], []), new emojis_Emoji('♣️', 'club suit', 'Symbols', ['clubs'], []), new emojis_Emoji('♥️', 'heart suit', 'Symbols', ['hearts'], []), new emojis_Emoji('♦️', 'diamond suit', 'Symbols', ['diamonds'], []), new emojis_Emoji('🃏', 'joker', 'Symbols', ['black_joker'], []), new emojis_Emoji('🎴', 'flower playing cards', 'Symbols', ['flower_playing_cards'], []), new emojis_Emoji('🀄️', 'mahjong red dragon', 'Symbols', ['mahjong'], []), new emojis_Emoji('🕐', 'one o’clock', 'Symbols', ['clock1'], []), new emojis_Emoji('🕑', 'two o’clock', 'Symbols', ['clock2'], []), new emojis_Emoji('🕒', 'three o’clock', 'Symbols', ['clock3'], []), new emojis_Emoji('🕓', 'four o’clock', 'Symbols', ['clock4'], []), new emojis_Emoji('🕔', 'five o’clock', 'Symbols', ['clock5'], []), new emojis_Emoji('🕕', 'six o’clock', 'Symbols', ['clock6'], []), new emojis_Emoji('🕖', 'seven o’clock', 'Symbols', ['clock7'], []), new emojis_Emoji('🕗', 'eight o’clock', 'Symbols', ['clock8'], []), new emojis_Emoji('🕘', 'nine o’clock', 'Symbols', ['clock9'], []), new emojis_Emoji('🕙', 'ten o’clock', 'Symbols', ['clock10'], []), new emojis_Emoji('🕚', 'eleven o’clock', 'Symbols', ['clock11'], []), new emojis_Emoji('🕛', 'twelve o’clock', 'Symbols', ['clock12'], []), new emojis_Emoji('🕜', 'one-thirty', 'Symbols', ['clock130'], []), new emojis_Emoji('🕝', 'two-thirty', 'Symbols', ['clock230'], []), new emojis_Emoji('🕞', 'three-thirty', 'Symbols', ['clock330'], []), new emojis_Emoji('🕟', 'four-thirty', 'Symbols', ['clock430'], []), new emojis_Emoji('🕠', 'five-thirty', 'Symbols', ['clock530'], []), new emojis_Emoji('🕡', 'six-thirty', 'Symbols', ['clock630'], []), new emojis_Emoji('🕢', 'seven-thirty', 'Symbols', ['clock730'], []), new emojis_Emoji('🕣', 'eight-thirty', 'Symbols', ['clock830'], []), new emojis_Emoji('🕤', 'nine-thirty', 'Symbols', ['clock930'], []), new emojis_Emoji('🕥', 'ten-thirty', 'Symbols', ['clock1030'], []), new emojis_Emoji('🕦', 'eleven-thirty', 'Symbols', ['clock1130'], []), new emojis_Emoji('🕧', 'twelve-thirty', 'Symbols', ['clock1230'], []), new emojis_Emoji('🏳️', 'white flag', 'Flags', ['white_flag'], []), new emojis_Emoji('🏴', 'black flag', 'Flags', ['black_flag'], []), new emojis_Emoji('🏁', 'chequered flag', 'Flags', ['checkered_flag'], ['milestone', 'finish']), new emojis_Emoji('🚩', 'triangular flag', 'Flags', ['triangular_flag_on_post'], []), new emojis_Emoji('🏳️‍🌈', 'rainbow flag', 'Flags', ['rainbow_flag'], ['pride']), new emojis_Emoji('🇦🇫', 'Afghanistan', 'Flags', ['afghanistan'], []), new emojis_Emoji('🇦🇽', 'Åland Islands', 'Flags', ['aland_islands'], []), new emojis_Emoji('🇦🇱', 'Albania', 'Flags', ['albania'], []), new emojis_Emoji('🇩🇿', 'Algeria', 'Flags', ['algeria'], []), new emojis_Emoji('🇦🇸', 'American Samoa', 'Flags', ['american_samoa'], []), new emojis_Emoji('🇦🇩', 'Andorra', 'Flags', ['andorra'], []), new emojis_Emoji('🇦🇴', 'Angola', 'Flags', ['angola'], []), new emojis_Emoji('🇦🇮', 'Anguilla', 'Flags', ['anguilla'], []), new emojis_Emoji('🇦🇶', 'Antarctica', 'Flags', ['antarctica'], []), new emojis_Emoji('🇦🇬', 'Antigua & Barbuda', 'Flags', ['antigua_barbuda'], []), new emojis_Emoji('🇦🇷', 'Argentina', 'Flags', ['argentina'], []), new emojis_Emoji('🇦🇲', 'Armenia', 'Flags', ['armenia'], []), new emojis_Emoji('🇦🇼', 'Aruba', 'Flags', ['aruba'], []), new emojis_Emoji('🇦🇺', 'Australia', 'Flags', ['australia'], []), new emojis_Emoji('🇦🇹', 'Austria', 'Flags', ['austria'], []), new emojis_Emoji('🇦🇿', 'Azerbaijan', 'Flags', ['azerbaijan'], []), new emojis_Emoji('🇧🇸', 'Bahamas', 'Flags', ['bahamas'], []), new emojis_Emoji('🇧🇭', 'Bahrain', 'Flags', ['bahrain'], []), new emojis_Emoji('🇧🇩', 'Bangladesh', 'Flags', ['bangladesh'], []), new emojis_Emoji('🇧🇧', 'Barbados', 'Flags', ['barbados'], []), new emojis_Emoji('🇧🇾', 'Belarus', 'Flags', ['belarus'], []), new emojis_Emoji('🇧🇪', 'Belgium', 'Flags', ['belgium'], []), new emojis_Emoji('🇧🇿', 'Belize', 'Flags', ['belize'], []), new emojis_Emoji('🇧🇯', 'Benin', 'Flags', ['benin'], []), new emojis_Emoji('🇧🇲', 'Bermuda', 'Flags', ['bermuda'], []), new emojis_Emoji('🇧🇹', 'Bhutan', 'Flags', ['bhutan'], []), new emojis_Emoji('🇧🇴', 'Bolivia', 'Flags', ['bolivia'], []), new emojis_Emoji('🇧🇶', 'Caribbean Netherlands', 'Flags', ['caribbean_netherlands'], []), new emojis_Emoji('🇧🇦', 'Bosnia & Herzegovina', 'Flags', ['bosnia_herzegovina'], []), new emojis_Emoji('🇧🇼', 'Botswana', 'Flags', ['botswana'], []), new emojis_Emoji('🇧🇷', 'Brazil', 'Flags', ['brazil'], []), new emojis_Emoji('🇮🇴', 'British Indian Ocean Territory', 'Flags', ['british_indian_ocean_territory'], []), new emojis_Emoji('🇻🇬', 'British Virgin Islands', 'Flags', ['british_virgin_islands'], []), new emojis_Emoji('🇧🇳', 'Brunei', 'Flags', ['brunei'], []), new emojis_Emoji('🇧🇬', 'Bulgaria', 'Flags', ['bulgaria'], []), new emojis_Emoji('🇧🇫', 'Burkina Faso', 'Flags', ['burkina_faso'], []), new emojis_Emoji('🇧🇮', 'Burundi', 'Flags', ['burundi'], []), new emojis_Emoji('🇨🇻', 'Cape Verde', 'Flags', ['cape_verde'], []), new emojis_Emoji('🇰🇭', 'Cambodia', 'Flags', ['cambodia'], []), new emojis_Emoji('🇨🇲', 'Cameroon', 'Flags', ['cameroon'], []), new emojis_Emoji('🇨🇦', 'Canada', 'Flags', ['canada'], []), new emojis_Emoji('🇮🇨', 'Canary Islands', 'Flags', ['canary_islands'], []), new emojis_Emoji('🇰🇾', 'Cayman Islands', 'Flags', ['cayman_islands'], []), new emojis_Emoji('🇨🇫', 'Central African Republic', 'Flags', ['central_african_republic'], []), new emojis_Emoji('🇹🇩', 'Chad', 'Flags', ['chad'], []), new emojis_Emoji('🇨🇱', 'Chile', 'Flags', ['chile'], []), new emojis_Emoji('🇨🇳', 'China', 'Flags', ['cn'], ['china']), new emojis_Emoji('🇨🇽', 'Christmas Island', 'Flags', ['christmas_island'], []), new emojis_Emoji('🇨🇨', 'Cocos (Keeling) Islands', 'Flags', ['cocos_islands'], ['keeling']), new emojis_Emoji('🇨🇴', 'Colombia', 'Flags', ['colombia'], []), new emojis_Emoji('🇰🇲', 'Comoros', 'Flags', ['comoros'], []), new emojis_Emoji('🇨🇬', 'Congo - Brazzaville', 'Flags', ['congo_brazzaville'], []), new emojis_Emoji('🇨🇩', 'Congo - Kinshasa', 'Flags', ['congo_kinshasa'], []), new emojis_Emoji('🇨🇰', 'Cook Islands', 'Flags', ['cook_islands'], []), new emojis_Emoji('🇨🇷', 'Costa Rica', 'Flags', ['costa_rica'], []), new emojis_Emoji('🇨🇮', 'Côte d’Ivoire', 'Flags', ['cote_divoire'], ['ivory']), new emojis_Emoji('🇭🇷', 'Croatia', 'Flags', ['croatia'], []), new emojis_Emoji('🇨🇺', 'Cuba', 'Flags', ['cuba'], []), new emojis_Emoji('🇨🇼', 'Curaçao', 'Flags', ['curacao'], []), new emojis_Emoji('🇨🇾', 'Cyprus', 'Flags', ['cyprus'], []), new emojis_Emoji('🇨🇿', 'Czech Republic', 'Flags', ['czech_republic'], []), new emojis_Emoji('🇩🇰', 'Denmark', 'Flags', ['denmark'], []), new emojis_Emoji('🇩🇯', 'Djibouti', 'Flags', ['djibouti'], []), new emojis_Emoji('🇩🇲', 'Dominica', 'Flags', ['dominica'], []), new emojis_Emoji('🇩🇴', 'Dominican Republic', 'Flags', ['dominican_republic'], []), new emojis_Emoji('🇪🇨', 'Ecuador', 'Flags', ['ecuador'], []), new emojis_Emoji('🇪🇬', 'Egypt', 'Flags', ['egypt'], []), new emojis_Emoji('🇸🇻', 'El Salvador', 'Flags', ['el_salvador'], []), new emojis_Emoji('🇬🇶', 'Equatorial Guinea', 'Flags', ['equatorial_guinea'], []), new emojis_Emoji('🇪🇷', 'Eritrea', 'Flags', ['eritrea'], []), new emojis_Emoji('🇪🇪', 'Estonia', 'Flags', ['estonia'], []), new emojis_Emoji('🇪🇹', 'Ethiopia', 'Flags', ['ethiopia'], []), new emojis_Emoji('🇪🇺', 'European Union', 'Flags', ['eu', 'european_union'], []), new emojis_Emoji('🇫🇰', 'Falkland Islands', 'Flags', ['falkland_islands'], []), new emojis_Emoji('🇫🇴', 'Faroe Islands', 'Flags', ['faroe_islands'], []), new emojis_Emoji('🇫🇯', 'Fiji', 'Flags', ['fiji'], []), new emojis_Emoji('🇫🇮', 'Finland', 'Flags', ['finland'], []), new emojis_Emoji('🇫🇷', 'France', 'Flags', ['fr'], ['france', 'french']), new emojis_Emoji('🇬🇫', 'French Guiana', 'Flags', ['french_guiana'], []), new emojis_Emoji('🇵🇫', 'French Polynesia', 'Flags', ['french_polynesia'], []), new emojis_Emoji('🇹🇫', 'French Southern Territories', 'Flags', ['french_southern_territories'], []), new emojis_Emoji('🇬🇦', 'Gabon', 'Flags', ['gabon'], []), new emojis_Emoji('🇬🇲', 'Gambia', 'Flags', ['gambia'], []), new emojis_Emoji('🇬🇪', 'Georgia', 'Flags', ['georgia'], []), new emojis_Emoji('🇩🇪', 'Germany', 'Flags', ['de'], ['flag', 'germany']), new emojis_Emoji('🇬🇭', 'Ghana', 'Flags', ['ghana'], []), new emojis_Emoji('🇬🇮', 'Gibraltar', 'Flags', ['gibraltar'], []), new emojis_Emoji('🇬🇷', 'Greece', 'Flags', ['greece'], []), new emojis_Emoji('🇬🇱', 'Greenland', 'Flags', ['greenland'], []), new emojis_Emoji('🇬🇩', 'Grenada', 'Flags', ['grenada'], []), new emojis_Emoji('🇬🇵', 'Guadeloupe', 'Flags', ['guadeloupe'], []), new emojis_Emoji('🇬🇺', 'Guam', 'Flags', ['guam'], []), new emojis_Emoji('🇬🇹', 'Guatemala', 'Flags', ['guatemala'], []), new emojis_Emoji('🇬🇬', 'Guernsey', 'Flags', ['guernsey'], []), new emojis_Emoji('🇬🇳', 'Guinea', 'Flags', ['guinea'], []), new emojis_Emoji('🇬🇼', 'Guinea-Bissau', 'Flags', ['guinea_bissau'], []), new emojis_Emoji('🇬🇾', 'Guyana', 'Flags', ['guyana'], []), new emojis_Emoji('🇭🇹', 'Haiti', 'Flags', ['haiti'], []), new emojis_Emoji('🇭🇳', 'Honduras', 'Flags', ['honduras'], []), new emojis_Emoji('🇭🇰', 'Hong Kong SAR China', 'Flags', ['hong_kong'], []), new emojis_Emoji('🇭🇺', 'Hungary', 'Flags', ['hungary'], []), new emojis_Emoji('🇮🇸', 'Iceland', 'Flags', ['iceland'], []), new emojis_Emoji('🇮🇳', 'India', 'Flags', ['india'], []), new emojis_Emoji('🇮🇩', 'Indonesia', 'Flags', ['indonesia'], []), new emojis_Emoji('🇮🇷', 'Iran', 'Flags', ['iran'], []), new emojis_Emoji('🇮🇶', 'Iraq', 'Flags', ['iraq'], []), new emojis_Emoji('🇮🇪', 'Ireland', 'Flags', ['ireland'], []), new emojis_Emoji('🇮🇲', 'Isle of Man', 'Flags', ['isle_of_man'], []), new emojis_Emoji('🇮🇱', 'Israel', 'Flags', ['israel'], []), new emojis_Emoji('🇮🇹', 'Italy', 'Flags', ['it'], ['italy']), new emojis_Emoji('🇯🇲', 'Jamaica', 'Flags', ['jamaica'], []), new emojis_Emoji('🇯🇵', 'Japan', 'Flags', ['jp'], ['japan']), new emojis_Emoji('🎌', 'crossed flags', 'Flags', ['crossed_flags'], []), new emojis_Emoji('🇯🇪', 'Jersey', 'Flags', ['jersey'], []), new emojis_Emoji('🇯🇴', 'Jordan', 'Flags', ['jordan'], []), new emojis_Emoji('🇰🇿', 'Kazakhstan', 'Flags', ['kazakhstan'], []), new emojis_Emoji('🇰🇪', 'Kenya', 'Flags', ['kenya'], []), new emojis_Emoji('🇰🇮', 'Kiribati', 'Flags', ['kiribati'], []), new emojis_Emoji('🇽🇰', 'Kosovo', 'Flags', ['kosovo'], []), new emojis_Emoji('🇰🇼', 'Kuwait', 'Flags', ['kuwait'], []), new emojis_Emoji('🇰🇬', 'Kyrgyzstan', 'Flags', ['kyrgyzstan'], []), new emojis_Emoji('🇱🇦', 'Laos', 'Flags', ['laos'], []), new emojis_Emoji('🇱🇻', 'Latvia', 'Flags', ['latvia'], []), new emojis_Emoji('🇱🇧', 'Lebanon', 'Flags', ['lebanon'], []), new emojis_Emoji('🇱🇸', 'Lesotho', 'Flags', ['lesotho'], []), new emojis_Emoji('🇱🇷', 'Liberia', 'Flags', ['liberia'], []), new emojis_Emoji('🇱🇾', 'Libya', 'Flags', ['libya'], []), new emojis_Emoji('🇱🇮', 'Liechtenstein', 'Flags', ['liechtenstein'], []), new emojis_Emoji('🇱🇹', 'Lithuania', 'Flags', ['lithuania'], []), new emojis_Emoji('🇱🇺', 'Luxembourg', 'Flags', ['luxembourg'], []), new emojis_Emoji('🇲🇴', 'Macau SAR China', 'Flags', ['macau'], []), new emojis_Emoji('🇲🇰', 'Macedonia', 'Flags', ['macedonia'], []), new emojis_Emoji('🇲🇬', 'Madagascar', 'Flags', ['madagascar'], []), new emojis_Emoji('🇲🇼', 'Malawi', 'Flags', ['malawi'], []), new emojis_Emoji('🇲🇾', 'Malaysia', 'Flags', ['malaysia'], []), new emojis_Emoji('🇲🇻', 'Maldives', 'Flags', ['maldives'], []), new emojis_Emoji('🇲🇱', 'Mali', 'Flags', ['mali'], []), new emojis_Emoji('🇲🇹', 'Malta', 'Flags', ['malta'], []), new emojis_Emoji('🇲🇭', 'Marshall Islands', 'Flags', ['marshall_islands'], []), new emojis_Emoji('🇲🇶', 'Martinique', 'Flags', ['martinique'], []), new emojis_Emoji('🇲🇷', 'Mauritania', 'Flags', ['mauritania'], []), new emojis_Emoji('🇲🇺', 'Mauritius', 'Flags', ['mauritius'], []), new emojis_Emoji('🇾🇹', 'Mayotte', 'Flags', ['mayotte'], []), new emojis_Emoji('🇲🇽', 'Mexico', 'Flags', ['mexico'], []), new emojis_Emoji('🇫🇲', 'Micronesia', 'Flags', ['micronesia'], []), new emojis_Emoji('🇲🇩', 'Moldova', 'Flags', ['moldova'], []), new emojis_Emoji('🇲🇨', 'Monaco', 'Flags', ['monaco'], []), new emojis_Emoji('🇲🇳', 'Mongolia', 'Flags', ['mongolia'], []), new emojis_Emoji('🇲🇪', 'Montenegro', 'Flags', ['montenegro'], []), new emojis_Emoji('🇲🇸', 'Montserrat', 'Flags', ['montserrat'], []), new emojis_Emoji('🇲🇦', 'Morocco', 'Flags', ['morocco'], []), new emojis_Emoji('🇲🇿', 'Mozambique', 'Flags', ['mozambique'], []), new emojis_Emoji('🇲🇲', 'Myanmar (Burma)', 'Flags', ['myanmar'], ['burma']), new emojis_Emoji('🇳🇦', 'Namibia', 'Flags', ['namibia'], []), new emojis_Emoji('🇳🇷', 'Nauru', 'Flags', ['nauru'], []), new emojis_Emoji('🇳🇵', 'Nepal', 'Flags', ['nepal'], []), new emojis_Emoji('🇳🇱', 'Netherlands', 'Flags', ['netherlands'], []), new emojis_Emoji('🇳🇨', 'New Caledonia', 'Flags', ['new_caledonia'], []), new emojis_Emoji('🇳🇿', 'New Zealand', 'Flags', ['new_zealand'], []), new emojis_Emoji('🇳🇮', 'Nicaragua', 'Flags', ['nicaragua'], []), new emojis_Emoji('🇳🇪', 'Niger', 'Flags', ['niger'], []), new emojis_Emoji('🇳🇬', 'Nigeria', 'Flags', ['nigeria'], []), new emojis_Emoji('🇳🇺', 'Niue', 'Flags', ['niue'], []), new emojis_Emoji('🇳🇫', 'Norfolk Island', 'Flags', ['norfolk_island'], []), new emojis_Emoji('🇲🇵', 'Northern Mariana Islands', 'Flags', ['northern_mariana_islands'], []), new emojis_Emoji('🇰🇵', 'North Korea', 'Flags', ['north_korea'], []), new emojis_Emoji('🇳🇴', 'Norway', 'Flags', ['norway'], []), new emojis_Emoji('🇴🇲', 'Oman', 'Flags', ['oman'], []), new emojis_Emoji('🇵🇰', 'Pakistan', 'Flags', ['pakistan'], []), new emojis_Emoji('🇵🇼', 'Palau', 'Flags', ['palau'], []), new emojis_Emoji('🇵🇸', 'Palestinian Territories', 'Flags', ['palestinian_territories'], []), new emojis_Emoji('🇵🇦', 'Panama', 'Flags', ['panama'], []), new emojis_Emoji('🇵🇬', 'Papua New Guinea', 'Flags', ['papua_new_guinea'], []), new emojis_Emoji('🇵🇾', 'Paraguay', 'Flags', ['paraguay'], []), new emojis_Emoji('🇵🇪', 'Peru', 'Flags', ['peru'], []), new emojis_Emoji('🇵🇭', 'Philippines', 'Flags', ['philippines'], []), new emojis_Emoji('🇵🇳', 'Pitcairn Islands', 'Flags', ['pitcairn_islands'], []), new emojis_Emoji('🇵🇱', 'Poland', 'Flags', ['poland'], []), new emojis_Emoji('🇵🇹', 'Portugal', 'Flags', ['portugal'], []), new emojis_Emoji('🇵🇷', 'Puerto Rico', 'Flags', ['puerto_rico'], []), new emojis_Emoji('🇶🇦', 'Qatar', 'Flags', ['qatar'], []), new emojis_Emoji('🇷🇪', 'Réunion', 'Flags', ['reunion'], []), new emojis_Emoji('🇷🇴', 'Romania', 'Flags', ['romania'], []), new emojis_Emoji('🇷🇺', 'Russia', 'Flags', ['ru'], ['russia']), new emojis_Emoji('🇷🇼', 'Rwanda', 'Flags', ['rwanda'], []), new emojis_Emoji('🇧🇱', 'St. Barthélemy', 'Flags', ['st_barthelemy'], []), new emojis_Emoji('🇸🇭', 'St. Helena', 'Flags', ['st_helena'], []), new emojis_Emoji('🇰🇳', 'St. Kitts & Nevis', 'Flags', ['st_kitts_nevis'], []), new emojis_Emoji('🇱🇨', 'St. Lucia', 'Flags', ['st_lucia'], []), new emojis_Emoji('🇵🇲', 'St. Pierre & Miquelon', 'Flags', ['st_pierre_miquelon'], []), new emojis_Emoji('🇻🇨', 'St. Vincent & Grenadines', 'Flags', ['st_vincent_grenadines'], []), new emojis_Emoji('🇼🇸', 'Samoa', 'Flags', ['samoa'], []), new emojis_Emoji('🇸🇲', 'San Marino', 'Flags', ['san_marino'], []), new emojis_Emoji('🇸🇹', 'São Tomé & Príncipe', 'Flags', ['sao_tome_principe'], []), new emojis_Emoji('🇸🇦', 'Saudi Arabia', 'Flags', ['saudi_arabia'], []), new emojis_Emoji('🇸🇳', 'Senegal', 'Flags', ['senegal'], []), new emojis_Emoji('🇷🇸', 'Serbia', 'Flags', ['serbia'], []), new emojis_Emoji('🇸🇨', 'Seychelles', 'Flags', ['seychelles'], []), new emojis_Emoji('🇸🇱', 'Sierra Leone', 'Flags', ['sierra_leone'], []), new emojis_Emoji('🇸🇬', 'Singapore', 'Flags', ['singapore'], []), new emojis_Emoji('🇸🇽', 'Sint Maarten', 'Flags', ['sint_maarten'], []), new emojis_Emoji('🇸🇰', 'Slovakia', 'Flags', ['slovakia'], []), new emojis_Emoji('🇸🇮', 'Slovenia', 'Flags', ['slovenia'], []), new emojis_Emoji('🇸🇧', 'Solomon Islands', 'Flags', ['solomon_islands'], []), new emojis_Emoji('🇸🇴', 'Somalia', 'Flags', ['somalia'], []), new emojis_Emoji('🇿🇦', 'South Africa', 'Flags', ['south_africa'], []), new emojis_Emoji('🇬🇸', 'South Georgia & South Sandwich Islands', 'Flags', ['south_georgia_south_sandwich_islands'], []), new emojis_Emoji('🇰🇷', 'South Korea', 'Flags', ['kr'], ['korea']), new emojis_Emoji('🇸🇸', 'South Sudan', 'Flags', ['south_sudan'], []), new emojis_Emoji('🇪🇸', 'Spain', 'Flags', ['es'], ['spain']), new emojis_Emoji('🇱🇰', 'Sri Lanka', 'Flags', ['sri_lanka'], []), new emojis_Emoji('🇸🇩', 'Sudan', 'Flags', ['sudan'], []), new emojis_Emoji('🇸🇷', 'Suriname', 'Flags', ['suriname'], []), new emojis_Emoji('🇸🇿', 'Swaziland', 'Flags', ['swaziland'], []), new emojis_Emoji('🇸🇪', 'Sweden', 'Flags', ['sweden'], []), new emojis_Emoji('🇨🇭', 'Switzerland', 'Flags', ['switzerland'], []), new emojis_Emoji('🇸🇾', 'Syria', 'Flags', ['syria'], []), new emojis_Emoji('🇹🇼', 'Taiwan', 'Flags', ['taiwan'], []), new emojis_Emoji('🇹🇯', 'Tajikistan', 'Flags', ['tajikistan'], []), new emojis_Emoji('🇹🇿', 'Tanzania', 'Flags', ['tanzania'], []), new emojis_Emoji('🇹🇭', 'Thailand', 'Flags', ['thailand'], []), new emojis_Emoji('🇹🇱', 'Timor-Leste', 'Flags', ['timor_leste'], []), new emojis_Emoji('🇹🇬', 'Togo', 'Flags', ['togo'], []), new emojis_Emoji('🇹🇰', 'Tokelau', 'Flags', ['tokelau'], []), new emojis_Emoji('🇹🇴', 'Tonga', 'Flags', ['tonga'], []), new emojis_Emoji('🇹🇹', 'Trinidad & Tobago', 'Flags', ['trinidad_tobago'], []), new emojis_Emoji('🇹🇳', 'Tunisia', 'Flags', ['tunisia'], []), new emojis_Emoji('🇹🇷', 'Turkey', 'Flags', ['tr'], ['turkey']), new emojis_Emoji('🇹🇲', 'Turkmenistan', 'Flags', ['turkmenistan'], []), new emojis_Emoji('🇹🇨', 'Turks & Caicos Islands', 'Flags', ['turks_caicos_islands'], []), new emojis_Emoji('🇹🇻', 'Tuvalu', 'Flags', ['tuvalu'], []), new emojis_Emoji('🇺🇬', 'Uganda', 'Flags', ['uganda'], []), new emojis_Emoji('🇺🇦', 'Ukraine', 'Flags', ['ukraine'], []), new emojis_Emoji('🇦🇪', 'United Arab Emirates', 'Flags', ['united_arab_emirates'], []), new emojis_Emoji('🇬🇧', 'United Kingdom', 'Flags', ['gb', 'uk'], ['flag', 'british']), new emojis_Emoji('🇺🇸', 'United States', 'Flags', ['us'], ['flag', 'united', 'america']), new emojis_Emoji('🇻🇮', 'U.S. Virgin Islands', 'Flags', ['us_virgin_islands'], []), new emojis_Emoji('🇺🇾', 'Uruguay', 'Flags', ['uruguay'], []), new emojis_Emoji('🇺🇿', 'Uzbekistan', 'Flags', ['uzbekistan'], []), new emojis_Emoji('🇻🇺', 'Vanuatu', 'Flags', ['vanuatu'], []), new emojis_Emoji('🇻🇦', 'Vatican City', 'Flags', ['vatican_city'], []), new emojis_Emoji('🇻🇪', 'Venezuela', 'Flags', ['venezuela'], []), new emojis_Emoji('🇻🇳', 'Vietnam', 'Flags', ['vietnam'], []), new emojis_Emoji('🇼🇫', 'Wallis & Futuna', 'Flags', ['wallis_futuna'], []), new emojis_Emoji('🇪🇭', 'Western Sahara', 'Flags', ['western_sahara'], []), new emojis_Emoji('🇾🇪', 'Yemen', 'Flags', ['yemen'], []), new emojis_Emoji('🇿🇲', 'Zambia', 'Flags', ['zambia'], []), new emojis_Emoji('🇿🇼', 'Zimbabwe', 'Flags', ['zimbabwe'], [])]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentInput.vue?vue&type=template&id=3ec4c912&
var CommentInputvue_type_template_id_3ec4c912_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-input"},[_c('input',{attrs:{"placeholder":_vm.placeholder,"type":_vm.type},domProps:{"value":_vm.value},on:{"input":_vm.inputHandle}}),_c('section',{staticClass:"comment-input-suggestion"},_vm._l((_vm.suggestionListHandle),function(suggestion){return _c('div',{key:suggestion.id,staticClass:"comment-input-suggestion-item",on:{"click":function($event){return _vm.useSuggestion(suggestion)}}},[_vm._v("\n      "+_vm._s(_vm.suggestionHandle(suggestion))+"\n    ")])}),0),_c('span')])}
var CommentInputvue_type_template_id_3ec4c912_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentInput.vue?vue&type=template&id=3ec4c912&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentInput.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentInputvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String,
      default: function _default() {
        return 'text';
      }
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    // suggestionList
    // format: [{ id: 'id', prefix: 'prefix', suffix: 'suffix'},...]
    suggestionList: {
      type: Array
    },
    suffixFlag: {
      type: String
    },
    prefixFlag: {
      type: String
    }
  },
  computed: {
    suggestionListHandle: function suggestionListHandle() {
      var newSuggestionList = this.suggestionList;
      if (this.value == null) return; // exclude prefix

      if (this.value.indexOf(this.prefixFlag) !== -1) {
        newSuggestionList.length = 0;
      } // exclude suffix


      if (this.value.indexOf(this.suffixFlag) !== -1) {
        var currentSuffix = this.value.substr(this.value.indexOf(this.suffixFlag)); // Exclude not present && 已包含

        newSuggestionList = this.suggestionList.filter(function (val) {
          return val.suffix.indexOf(currentSuffix) > -1 && currentSuffix !== val.suffix;
        });
      }

      return newSuggestionList;
    }
  },
  methods: {
    suggestionHandle: function suggestionHandle(suggestion) {
      var temp = '';

      if (suggestion.prefix) {
        temp += suggestion.prefix;
      }

      temp += this.value.split(this.suffixFlag)[0];

      if (suggestion.suffix) {
        temp += suggestion.suffix;
      }

      return temp;
    },
    useSuggestion: function useSuggestion(suggestion) {
      var customEvent = {
        target: {
          value: this.suggestionHandle(suggestion)
        }
      };
      this.inputHandle(customEvent);
    },
    inputHandle: function inputHandle(event) {
      this.$emit('input', event.target.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CommentInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentInputvue_type_script_lang_js_ = (CommentInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentInput.vue





/* normalize component */

var CommentInput_component = normalizeComponent(
  components_CommentInputvue_type_script_lang_js_,
  CommentInputvue_type_template_id_3ec4c912_render,
  CommentInputvue_type_template_id_3ec4c912_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentInput = (CommentInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VEmojiPicker: VEmojiPicker,
    CommentInput: CommentInput
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
  data: function data() {
    return {
      emojiPicker: {
        visible: false,
        pack: emojis
      },
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: ''
      }
    };
  },
  computed: {
    avatar: function avatar() {
      var gravatarDefault = this.options.comment_gravatar_default;
      var gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';

      if (!this.comment.email || !isEmail(this.comment.email)) {
        return "".concat(gravatarSource, "?s=256&d=").concat(gravatarDefault);
      }

      var gravatarMd5 = md5_default()(this.comment.email);
      return "".concat(gravatarSource).concat(gravatarMd5, "?s=256&d=").concat(gravatarDefault);
    },
    commentValid: function commentValid() {
      return !isEmpty(this.comment.author) && !isEmpty(this.comment.email) && !isEmpty(this.comment.content);
    }
  },
  created: function created() {
    var _this = this;

    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author');
    this.comment.authorUrl = localStorage.getItem('comment-author-url');
    this.comment.email = localStorage.getItem('comment-email');

    if (!this.comment.author) {
      this.$nextTick(function () {
        _this.$refs.authorInput.focus();
      });
      return;
    }

    if (!this.comment.content) {
      this.$nextTick(function () {
        _this.$refs.contentInput.focus();
      });
    }
  },
  methods: {
    /**
     * Select emoji.
     *
     * @param emoji emoji
     */
    handleSelectEmoji: function handleSelectEmoji(emoji) {
      var _this2 = this;

      this.comment.content += emoji.emoji;
      this.emojiPicker.visible = false;
      this.$nextTick(function () {
        _this2.$refs.contentInput.focus();
      });
    },
    close: function close() {
      this.$emit('close', false);
    },
    exit: function exit() {
      if (this.comment.content && !window.confirm('评论还未发布，是否放弃？')) {
        return;
      }

      this.$emit('exit', false);
    },
    handleAuthorInput: function handleAuthorInput() {
      this.input();
    },
    handleContentInput: function handleContentInput() {
      this.input();
    },
    input: function input() {
      this.$emit('input', this.comment);
    },
    handleSubmitClick: function handleSubmitClick() {
      var _this3 = this;

      // Store comment author, email, authorUrl
      if (this.comment.author) {
        localStorage.setItem('comment-author', this.comment.author);
      }

      if (this.comment.email) {
        localStorage.setItem('comment-email', this.comment.email);
      }

      if (this.comment.authorUrl) {
        localStorage.setItem('comment-author-url', this.comment.authorUrl);
      } // Submit the comment


      this.comment.postId = this.targetId;

      if (this.replyingComment) {
        // Set parent id if available
        this.comment.parentId = this.replyingComment.id;
      }

      api_client.comment.create(this.target, this.comment).then(function (response) {
        // clear comment
        _this3.comment.content = null; // Emit a created event

        _this3.$emit('created', response.data);

        _this3.$emit('close', false);
      }).catch(function (error) {
        _this3.$emit('failed', error);
      });
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
  CommentEditorvue_type_template_id_2c3e45f1_render,
  CommentEditorvue_type_template_id_2c3e45f1_staticRenderFns,
  false,
  CommentEditor_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentEditor = (CommentEditor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentLoading.vue?vue&type=template&id=1b6e5b50&
var CommentLoadingvue_type_template_id_1b6e5b50_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"loading-fade","mode":"in-out"}},[_c('div',{staticClass:"comment-loader-container"},[_c('div',{staticClass:"comment-loader"},[_c('span'),_c('span'),_c('span'),_c('span')])])])}
var CommentLoadingvue_type_template_id_1b6e5b50_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentLoading.vue?vue&type=template&id=1b6e5b50&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentLoading.vue?vue&type=script&lang=js&
//
//
//
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
  CommentLoadingvue_type_template_id_1b6e5b50_render,
  CommentLoadingvue_type_template_id_1b6e5b50_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentLoading = (CommentLoading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3ef1c7bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=template&id=ca7e2226&
var Paginationvue_type_template_id_ca7e2226_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-pagination"},[_c('ul',{staticClass:"pagination"},[_c('li',{staticClass:"page-item",class:{ disabled: !_vm.hasPrev }},[_c('button',{staticClass:"prev-button",attrs:{"tabindex":"-1"},on:{"click":_vm.handlePrevClick}},[_vm._v("上一页")])]),(_vm.firstPage != null)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.firstPage }},[_c('button',{class:{ active: _vm.page === _vm.firstPage },on:{"click":function($event){return _vm.handlePageItemClick(_vm.firstPage)}}},[_vm._v("\n        "+_vm._s(_vm.firstPage + 1)+"\n      ")])]):_vm._e(),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMorePrev),expression:"hasMorePrev"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),_vm._l((_vm.middlePages),function(middlePage){return _c('li',{key:middlePage,staticClass:"page-item",class:{ active: middlePage === _vm.page }},[_c('button',{class:{ active: middlePage === _vm.page },on:{"click":function($event){return _vm.handlePageItemClick(middlePage)}}},[_vm._v("\n        "+_vm._s(middlePage + 1)+"\n      ")])])}),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMoreNext),expression:"hasMoreNext"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),(_vm.lastPage)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.lastPage }},[_c('button',{class:{ active: _vm.page === _vm.lastPage },on:{"click":function($event){return _vm.handlePageItemClick(_vm.lastPage)}}},[_vm._v("\n        "+_vm._s(_vm.lastPage + 1)+"\n      ")])]):_vm._e(),_c('li',{staticClass:"page-item",class:{ disabled: !_vm.hasNext }},[_c('button',{staticClass:"next-button",on:{"click":_vm.handleNextClick}},[_vm._v("下一页")])])],2)])}
var Paginationvue_type_template_id_ca7e2226_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=template&id=ca7e2226&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      middleSize: 3
    };
  },
  computed: {
    pages: function pages() {
      return Math.ceil(this.total / this.size);
    },
    hasNext: function hasNext() {
      return this.page < this.pages - 1;
    },
    hasPrev: function hasPrev() {
      return this.page > 0;
    },
    firstPage: function firstPage() {
      if (this.pages === 0) {
        return null;
      }

      return 0;
    },
    hasMorePrev: function hasMorePrev() {
      if (this.firstPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page >= 2 + this.middleSize / 2;
    },
    hasMoreNext: function hasMoreNext() {
      if (this.lastPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page < this.lastPage - 1 - this.middleSize / 2;
    },
    middlePages: function middlePages() {
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
    lastPage: function lastPage() {
      if (this.pages === 0 || this.pages === 1) {
        return 0;
      }

      return this.pages - 1;
    }
  },
  methods: {
    handleNextClick: function handleNextClick() {
      if (this.hasNext) {
        this.$emit('change', this.page + 1);
      }
    },
    handlePrevClick: function handlePrevClick() {
      if (this.hasPrev) {
        this.$emit('change', this.page - 1);
      }
    },
    handlePageItemClick: function handlePageItemClick(page) {
      this.$emit('change', page);
    },
    range: function range(left, right) {
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
  Paginationvue_type_template_id_ca7e2226_render,
  Paginationvue_type_template_id_ca7e2226_staticRenderFns,
  false,
  Pagination_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Pagination = (Pagination_component.exports);
// CONCATENATED MODULE: ./src/components/index.js

// Register components







var _components = {
  CommentPlaceholder: CommentPlaceholder,
  CommentBody: CommentBody,
  CommentNode: CommentNode,
  CommentEditor: CommentEditor,
  CommentLoading: CommentLoading,
  Pagination: Pagination
};
var components = {};
Object.keys(_components).forEach(function (key) {
  components[key] = external_Vue_default.a.component(key, _components[key]);
});
/* harmony default export */ var src_components = (components);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Comment.vue?vue&type=script&lang=js&shadow


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      comments: {
        data: [],
        loading: false,
        total: 0,
        params: {
          page: 0,
          size: 10
        }
      },
      options: [],
      editor: {
        visible: false
      },
      editingComment: {},
      infoes: [],
      warnings: [],
      successes: [],
      repliedSuccess: null,
      replyingComment: null
    };
  },
  computed: {
    target: function target() {
      // pluralize it
      return "".concat(this.type, "s");
    }
  },
  created: function created() {
    this.handleListComments();
    this.handleListOptions();
  },
  methods: {
    /**
     * List top comments.
     */
    handleListComments: function handleListComments() {
      var _this = this;

      this.comments.data = [];
      this.comments.loading = true;
      api_client.comment.listTopComments(this.target, this.id, this.comments.params).then(function (response) {
        _this.comments.data = response.data.content;
        _this.comments.total = response.data.total;
      }).finally(function () {
        _this.comments.loading = false;
      });
    },

    /**
     * List comment options.
     */
    handleListOptions: function handleListOptions() {
      var _this2 = this;

      api_client.option.comment().then(function (response) {
        _this2.options = response.data;
      });
    },

    /**
     * Open comment editor.
     */
    handleOpenEditor: function handleOpenEditor() {
      this.editor.visible = true;
      this.replyingComment = null;
      this.repliedSuccess = null;
    },
    handlePaginationChange: function handlePaginationChange(page) {
      this.comments.params.page = page;
      this.handleListComments();
    },
    handleEditorClose: function handleEditorClose() {
      this.editor.visible = false;
    },
    handleEditorExit: function handleEditorExit() {
      this.handleEditorClose();
      this.editingComment.content = null;
    },
    handleEditorInput: function handleEditorInput(comment) {
      this.editingComment = comment;
    },
    handleCommentCreated: function handleCommentCreated(createdComment) {
      this.clearAlertClose();

      if (createdComment.status === 'PUBLISHED') {
        this.handleListComments();

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
    handleFailedToCreateComment: function handleFailedToCreateComment(response) {
      var _this3 = this;

      this.clearAlertClose();
      this.repliedSuccess = null;

      if (response.status === 400) {
        this.warnings.push(response.data.message);

        if (response.data) {
          var errorDetail = response.data.data;

          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach(function (key) {
              _this3.warnings.push(errorDetail[key]);
            });
          }
        }
      }
    },
    handleReply: function handleReply(comment, repliedSuccess) {
      this.replyingComment = comment;
      this.repliedSuccess = repliedSuccess;
      this.editor.visible = true;
    },
    clearAlertClose: function clearAlertClose() {
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
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('halo-comment', vue_wc_wrapper(external_Vue_default.a, Commentshadow))

/***/ }),

/***/ "5b15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClient = void 0;
const url_1 = __webpack_require__("a8c2");
class UserClient {
    constructor(client) {
        this.client = client;
    }
    getProfile() {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/profile',
        });
        return this.client.get(path, {});
    }
}
exports.UserClient = UserClient;
//# sourceMappingURL=UserClient.js.map

/***/ }),

/***/ "5b29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TagClient = void 0;
const url_1 = __webpack_require__("a8c2");
class TagClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'tags',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listPostsBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `tags/${slug}/posts`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.TagClient = TagClient;
//# sourceMappingURL=TagClient.js.map

/***/ }),

/***/ "5b7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeClient = void 0;
const url_1 = __webpack_require__("a8c2");
class ThemeClient {
    constructor(client) {
        this.client = client;
    }
    getProperty() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation',
        });
        return this.client.get(path, {});
    }
    listSettings() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/settings',
        });
        return this.client.get(path, {});
    }
}
exports.ThemeClient = ThemeClient;
//# sourceMappingURL=ThemeClient.js.map

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
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

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
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

/***/ "5cce":
/***/ (function(module, exports) {

module.exports = {
  "version": "0.24.0"
};

/***/ }),

/***/ "5ce7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("7108");
var descriptor = __webpack_require__("f845");
var setToStringTag = __webpack_require__("c0d8");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("8ce0")(IteratorPrototype, __webpack_require__("1b55")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5927");

/***/ }),

/***/ "5d8f":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("7772")('keys');
var uid = __webpack_require__("7b00");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5f02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
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

/***/ "5fcd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("3336");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "6109":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("bc25");
var $export = __webpack_require__("d13f");
var toObject = __webpack_require__("0185");
var call = __webpack_require__("9c93");
var isArrayIter = __webpack_require__("c227");
var toLength = __webpack_require__("a5ab");
var createProperty = __webpack_require__("b3ec");
var getIterFn = __webpack_require__("f159");

$export($export.S + $export.F * !__webpack_require__("436c")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "6110":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".halo-comment *{font-family:-apple-system,BlinkMacSystemFont,System Latin,System Emoji,System SC,sans-serif;outline:none;font-size:13px;line-height:1.5;padding:0;margin:0}.halo-comment ::-webkit-scrollbar{width:6px;height:6px;background-color:#eee}.halo-comment ::-webkit-scrollbar-thumb{background-color:#1890ff}.halo-comment ::-webkit-scrollbar-track{background-color:#eee}.halo-comment :after,.halo-comment :before{-webkit-box-sizing:border-box;box-sizing:border-box}.halo-comment .alert{border-radius:4px;padding:8px 16px;background-color:#f44336;color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.halo-comment .alert.success{background-color:#4caf50}.halo-comment .alert.info{background-color:#2196f3}.halo-comment .alert.warning{background-color:#ff9800}.halo-comment .alert .closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:16px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.halo-comment .alert .closebtn:hover{color:#000}.halo-comment .comment-item-author-avatar{float:left;width:56px;height:56px;border-radius:56px;line-height:56px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;margin-right:12px;border:1px solid #f5f5f5;cursor:pointer;-webkit-transition:all .8s;transition:all .8s}.halo-comment .comment-item-author-avatar:hover{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.halo-comment .comment-placeholder{cursor:text;margin-bottom:10px;border:2px dashed #ededed;border-radius:8px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.halo-comment .comment-placeholder:hover{border:2px dashed #3b83ee}.halo-comment .comment-placeholder .comment-item{padding-top:15px;position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.halo-comment .comment-placeholder .comment-item .comment-item-author-avatar{margin-left:12px}.halo-comment .comment-placeholder .comment-item .comment-item-main{overflow:hidden;padding-bottom:.5rem;color:#555}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-header .header-author{position:relative;margin-right:10px;cursor:pointer;display:inline-block;font-size:16px;font-weight:700;color:#2c2e31;text-decoration:none}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-content{word-wrap:break-word;word-break:break-all;text-align:justify;position:relative;margin-bottom:6px;padding-top:6px}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-content p{line-height:2;font-size:16px;color:#667c99}.halo-comment .comment-placeholder .comment-item .comment-item-main .comment-item-content p img{width:100%}.halo-comment .comment-items{padding:0 12px}.halo-comment .comment-items .comment-item{padding-top:15px;position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;border-bottom:1px solid #e8ecf3}.halo-comment .comment-items .comment-item .comment-item-main{overflow:hidden;padding-bottom:.5rem;color:#555}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author{position:relative;margin-right:10px;cursor:pointer;display:inline-block}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author a{font-size:15px;font-weight:700;color:#111;text-decoration:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author:before{content:\"\";position:absolute;bottom:0;left:0;right:0;height:2px;background-color:#565656;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-author:hover:before{-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-admin{padding:0 2px;margin-right:5px;border:1px solid #cedced;border-radius:2px}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-time{position:relative;font-size:13px;color:#667c99;display:inline-block}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-header .header-id{float:right;font-size:13px;color:#667c99}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content{word-wrap:break-word;word-break:break-all;text-align:justify;position:relative;margin-bottom:6px;padding-top:6px}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content a{text-decoration:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content .content-at-id{font-size:13px;color:#1890ff;font-weight:500}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-content p{overflow:auto;line-height:2;font-size:14px;color:#111}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls{float:right;position:relative}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls ul{list-style-type:none;padding:0;margin:0}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls ul li{margin-right:0;margin-left:-5px;display:inline-block;vertical-align:top}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls ul li .item-control-more,.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls ul li .item-control-reply{display:inline-block;margin-bottom:0;text-align:center;vertical-align:middle;cursor:pointer;white-space:nowrap;padding:6px 12px;color:#667c99;border:none;background:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls ul li .item-control-more.active,.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls ul li .item-control-more:hover,.halo-comment .comment-items .comment-item .comment-item-main .comment-item-controls ul li .item-control-reply:hover{color:#0084fe}.halo-comment .comment-items .comment-item .comment-item-children{margin-left:4rem;padding-left:0;padding-right:0}.halo-comment .comment-items .comment-item .comment-item-children .comment-items{padding:0}.halo-comment .comment-modal{position:fixed;bottom:0;left:0;right:0;width:100%;height:100%;z-index:2147483647;background-color:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.halo-comment .comment-modal .comment-modal-container{width:768px;position:relative}.halo-comment .comment-modal .comment-modal-container .comment-poster-editor-emoji{-webkit-box-shadow:0 2px 6px rgba(0,0,0,.35);box-shadow:0 2px 6px rgba(0,0,0,.35);position:absolute;bottom:58px;left:19%;z-index:1;width:248px}.halo-comment .comment-modal .comment-modal-container #EmojiPicker{width:100%}.halo-comment .comment-modal .comment-modal-container .comment-poster-container{border-radius:4px 4px 0 0;background:hsla(0,0%,100%,.95);-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;pointer-events:auto;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.35);box-shadow:0 2px 6px rgba(0,0,0,.35);height:248px;bottom:-248px;display:none}.halo-comment .comment-modal .comment-modal-container .comment-poster-container.active{height:265px;bottom:0;display:block}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls{position:absolute;right:10px;top:10px;z-index:1;list-style:none;padding:0;margin:0}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls li{display:inline-block}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls .editor-btn-close{margin-left:15px;color:#c39b9b;font-weight:700;float:right;font-size:22px;line-height:16px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-controls .editor-btn-close:hover{color:#000}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main{padding:20px 20px 0}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-avatar{float:left;width:64px;height:64px;border-radius:64px;line-height:64px;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:center;border:1px solid #f5f5f5;cursor:pointer;-webkit-transition:all .8s;transition:all .8s}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-avatar:hover{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content{margin-left:85px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header{list-style:none;padding:1px 0;margin:0 0 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:200px;max-height:21px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:.5s ease;transition:.5s ease}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li .comment-input{position:relative;z-index:1;cursor:pointer}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li .comment-input .comment-input-suggestion{-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.4);box-shadow:1px 1px 5px rgba(0,0,0,.4);border-radius:0 0 .4rem .4rem;background-color:#fff;opacity:0;-webkit-transition:.4s;transition:.4s}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li .comment-input .comment-input-suggestion .comment-input-suggestion-item{padding:.2rem}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li .comment-input .comment-input-suggestion .comment-input-suggestion-item:hover{background-color:rgba(0,0,0,.05)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li .comment-input .comment-input-suggestion .comment-input-suggestion-item:not(:last-of-type){border-bottom:1px solid rgba(0,0,0,.4)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input{color:#667c99;font-size:14px;font-family:inherit;background-color:transparent;border:1px solid transparent;border-bottom-color:rgba(61,239,255,.2);width:100%}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-webkit-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-moz-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input:-ms-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::-ms-input-placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input::placeholder{color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input:focus~.comment-input-suggestion{opacity:1}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li input:focus~span{-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:scaleX(1);transform:scaleX(1)}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-header li span{position:absolute;bottom:0;left:0;right:0;height:1px;background-color:#555;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-reply{max-height:18px;border-left:2px solid #667c99;padding:0 5px;color:#667c99}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-reply small{color:#0084fe}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-wrapper{position:relative}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-wrapper textarea{display:block;width:100%;background:none;border:0;border-radius:0;padding:0 0 10px;resize:none;color:#111;font-size:14px;line-height:1.7}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls{margin:0 -20px 0 -105px;padding:10px 20px;border-top:1px solid #e8ecf3;list-style-type:none;overflow-x:auto;white-space:nowrap}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls li{display:inline-block;margin-right:10px}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply{font-size:inherit;font-family:inherit;color:#fff;padding:.5em 1em;outline:none;border:none;background-color:#1890ff;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply:hover{background-color:#0084fe;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-reply .editor-btn-reply:disabled{background-color:#d8d8d8;color:#fff;cursor:not-allowed}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-emoji,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-preview,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-emoji,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-preview{font-size:inherit;font-family:inherit;color:#667c99;padding:.5em 1em;outline:none;border:none;background-color:#e8ecf3;border-radius:4px;cursor:pointer;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-emoji:hover,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-emoji .editor-btn-preview:hover,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-emoji:hover,.halo-comment .comment-modal .comment-modal-container .comment-poster-container .comment-poster-main .comment-poster-main-body .comment-poster-body-content .comment-poster-body-editor .comment-poster-editor-controls .editor-item-preview .editor-btn-preview:hover{background-color:#d7dfea;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}@media screen and (max-width:768px){.halo-comment .comment-modal .comment-modal-container{width:100%}}.halo-comment .comment-loader-container{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0}.halo-comment .comment-loader-container .comment-loader{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:2em}.halo-comment .comment-loader-container .comment-loader span{width:.3em;height:1em;background-color:#3b83ee}.halo-comment .comment-loader-container .comment-loader span:first-of-type{-webkit-animation:grow 1s ease-in-out -.45s infinite;animation:grow 1s ease-in-out -.45s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(2){-webkit-animation:grow 1s ease-in-out -.3s infinite;animation:grow 1s ease-in-out -.3s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(3){-webkit-animation:grow 1s ease-in-out -.15s infinite;animation:grow 1s ease-in-out -.15s infinite}.halo-comment .comment-loader-container .comment-loader span:nth-of-type(4){-webkit-animation:grow 1s ease-in-out infinite;animation:grow 1s ease-in-out infinite}@-webkit-keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}@keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}.halo-comment .loading-fade-enter-active,.halo-comment .loading-fade-leave-active{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.halo-comment .loading-fade-enter,.halo-comment .loading-fade-leave-to{opacity:0}.halo-comment .comment-pagination{margin-top:20px;text-align:center}.halo-comment .comment-pagination .pagination{display:inline-block;padding:0;margin:0}.halo-comment .comment-pagination .pagination li{display:inline;margin-right:8px}.halo-comment .comment-pagination .pagination button{z-index:1;position:relative;font-size:inherit;font-family:inherit;padding:.5em 1em;outline:none;border:1px solid #d9d9d9;border-radius:4px;cursor:pointer;-webkit-transition:all .8s;transition:all .8s;font-weight:400;color:rgba(0,0,0,.65);background-color:#fff}.halo-comment .comment-pagination .pagination .active,.halo-comment .comment-pagination .pagination button:hover{color:#1890ff;border-color:#1890ff}.halo-comment #EmojiPicker{font-family:Noto,Twemoji,NotomojiColor,Notomoji,Symbola,sans-serif;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;border-radius:4px;border:1px solid #e4e4e4;overflow:hidden;width:325px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.halo-comment #EmojiPicker,.halo-comment #EmojiPicker #Categories{-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f0f0f0}.halo-comment #EmojiPicker #Categories{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #e4e4e4;color:#fff}.halo-comment #EmojiPicker .category{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-top:5px;padding-bottom:5px;text-align:center;cursor:pointer}.halo-comment #EmojiPicker .category.active{border-bottom:3px solid #009688;-webkit-filter:saturate(3);filter:saturate(3);padding-bottom:2px}.halo-comment #EmojiPicker .category>img{width:22px;height:22px}.halo-comment #EmojiPicker .category:hover{-webkit-filter:saturate(3);filter:saturate(3)}.halo-comment #EmojiPicker #InputSearch{display:block;width:100%;max-width:100%}.halo-comment #EmojiPicker .container-search{display:block;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:5px 0;padding:0 5%}.halo-comment #EmojiPicker .container-search input{width:100%;font-size:14px;padding:8px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;background:#f6f6f6;color:#4a4a4a;border:1px solid #e2e2e2}.halo-comment #EmojiPicker #Emojis{display:block;width:100%;max-width:100%}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar{border-radius:4px;width:4px;background:hsla(0,0%,48.6%,.3568627450980392)}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar-track{border-radius:4px}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar-thumb{border-radius:4px;background:rgba(0,0,0,.2196078431372549)}.halo-comment #EmojiPicker #Emojis ::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.3843137254901961)}.halo-comment #EmojiPicker .container-emoji{overflow-x:hidden;overflow-y:scroll;height:350px}.halo-comment #EmojiPicker .category-title{text-transform:uppercase;font-size:.8em;padding:5px 0 0 16px;color:#848484}.halo-comment #EmojiPicker .category-title:not(:first-of-type){padding:10px 0 0 16px}.halo-comment #EmojiPicker .grid-emojis{display:grid;margin:5px 0;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.halo-comment #EmojiPicker .emoji{display:inline-block;text-align:center;font-size:25px;padding:5px;max-height:30px;cursor:pointer}.halo-comment #EmojiPicker #VSvg{display:inline-block;vertical-align:middle}.modal-fade-enter,.modal-fade-leave-active{opacity:0}.modal-fade-enter-active,.modal-fade-leave-active{-webkit-transition:opacity .2s ease;transition:opacity .2s ease}", ""]);

// exports


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "6246":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9941");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "626e":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d74e");
var createDesc = __webpack_require__("f845");
var toIObject = __webpack_require__("6a9b");
var toPrimitive = __webpack_require__("2ea1");
var has = __webpack_require__("43c8");
var IE8_DOM_DEFINE = __webpack_require__("a47f");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("7d95") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "6277":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("7b00")('meta');
var isObject = __webpack_require__("6f8a");
var has = __webpack_require__("43c8");
var setDesc = __webpack_require__("3adc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("d782")(function () {
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

/***/ "6399":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".modal-fade-enter,.modal-fade-leave-active{opacity:0}.modal-fade-enter-active,.modal-fade-leave-active{-webkit-transition:opacity .5s ease;transition:opacity .5s ease}", ""]);

// exports


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
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

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b258");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "6821f":
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__("00d8"),
      utf8 = __webpack_require__("9a63").utf8,
      isBuffer = __webpack_require__("044b"),
      bin = __webpack_require__("9a63").bin,

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
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
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

/***/ "688e":
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

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69b5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".comment-fade-enter-active[data-v-0f05a1ca],.comment-fade-leave-active[data-v-0f05a1ca]{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.comment-fade-enter[data-v-0f05a1ca],.comment-fade-leave-to[data-v-0f05a1ca]{opacity:0}", ""]);

// exports


/***/ }),

/***/ "69fb":
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(0).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag !== 'undefined' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
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

/***/ "6a9b":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("8bab");
var defined = __webpack_require__("e5fa");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "6e1f":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6f48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_0f05a1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a989");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_0f05a1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_0f05a1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_0f05a1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_0f05a1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_id_0f05a1ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6f8a":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "7018":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalClient = void 0;
const tslib_1 = __webpack_require__("54b6");
const url_1 = __webpack_require__("a8c2");
class JournalClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals',
        });
        return this.client.get(path, {});
    }
    get(journalId) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/${journalId}`,
        });
        return this.client.get(path, {});
    }
    like(journalId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `journals/${journalId}/likes`,
            });
            yield this.client.post(path, {});
        });
    }
}
exports.JournalClient = JournalClient;
//# sourceMappingURL=JournalClient.js.map

/***/ }),

/***/ "7108":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("0f89");
var dPs = __webpack_require__("f568");
var enumBugKeys = __webpack_require__("0029");
var IE_PROTO = __webpack_require__("5d8f")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("12fd")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("103a").appendChild(iframe);
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

/***/ "7203":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
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

/***/ "74d4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuClient = void 0;
const url_1 = __webpack_require__("a8c2");
class MenuClient {
    constructor(client) {
        this.client = client;
    }
    list(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus',
        });
        return this.client.get(path, { sort });
    }
    listAsTreeView(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/tree_view',
        });
        return this.client.get(path, { sort });
    }
}
exports.MenuClient = MenuClient;
//# sourceMappingURL=MenuClient.js.map

/***/ }),

/***/ "755b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = exports.FormData = exports.DefaultHttpClient = exports.HaloRequestConfigBuilder = exports.HaloResponseHandler = exports.HaloRestAPIClient = void 0;
const tslib_1 = __webpack_require__("978d");
const platform_1 = __webpack_require__("c1f2");
const browserDeps = (0, tslib_1.__importStar)(__webpack_require__("e222"));
const form_data_1 = (0, tslib_1.__importDefault)(__webpack_require__("5a30"));
exports.FormData = form_data_1.default;
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__("bc3a"));
exports.Axios = axios_1.default;
(0, platform_1.injectPlatformDeps)(browserDeps);
var HaloRestAPIClient_1 = __webpack_require__("2cb4");
Object.defineProperty(exports, "HaloRestAPIClient", { enumerable: true, get: function () { return HaloRestAPIClient_1.HaloRestAPIClient; } });
var HaloResponseHandler_1 = __webpack_require__("9559");
Object.defineProperty(exports, "HaloResponseHandler", { enumerable: true, get: function () { return HaloResponseHandler_1.HaloResponseHandler; } });
var HaloRequestConfigBuilder_1 = __webpack_require__("2d6c");
Object.defineProperty(exports, "HaloRequestConfigBuilder", { enumerable: true, get: function () { return HaloRequestConfigBuilder_1.HaloRequestConfigBuilder; } });
var http_1 = __webpack_require__("c95e");
Object.defineProperty(exports, "DefaultHttpClient", { enumerable: true, get: function () { return http_1.DefaultHttpClient; } });
//# sourceMappingURL=index.browser.js.map

/***/ }),

/***/ "7633":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("2695");
var enumBugKeys = __webpack_require__("0029");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("00f6");
var parse = __webpack_require__("5fcd");
var formats = __webpack_require__("9cec");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("57f7");

/***/ }),

/***/ "7772":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a7d3");
var global = __webpack_require__("da3c");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b457") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7a77":
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

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "7b00":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "7c5c":
/***/ (function(module, exports, __webpack_require__) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

(function (global, factory) {
   true ? factory(exports) :
  undefined;
})(this, (function (exports) { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);

    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function getDefaults() {
    return {
      baseUrl: null,
      breaks: false,
      extensions: null,
      gfm: true,
      headerIds: true,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false
    };
  }
  exports.defaults = getDefaults();
  function changeDefaults(newDefaults) {
    exports.defaults = newDefaults;
  }

  /**
   * Helpers
   */
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }
  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }
  var caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }
  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
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
  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }
  var noopTest = {
    exec: function noopTest() {}
  };
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
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe

    if (!cells[0].trim()) {
      cells.shift();
    }

    if (!cells[cells.length - 1].trim()) {
      cells.pop();
    }

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.

  function rtrim(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
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
  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  } // copied from https://stackoverflow.com/a/5450113/806777

  function repeatString(pattern, count) {
    if (count < 1) {
      return '';
    }

    var result = '';

    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }

      count >>= 1;
      pattern += pattern;
    }

    return result + pattern;
  }

  function outputLink(cap, link, raw, lexer) {
    var href = link.href;
    var title = link.title ? escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');

    if (cap[0].charAt(0) !== '!') {
      lexer.state.inLink = true;
      var token = {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text,
        tokens: lexer.inlineTokens(text, [])
      };
      lexer.state.inLink = false;
      return token;
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: escape(text)
      };
    }
  }

  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

    if (matchIndentToCode === null) {
      return text;
    }

    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);

      if (matchIndentInNode === null) {
        return node;
      }

      var indentInNode = matchIndentInNode[0];

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */


  var Tokenizer = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || exports.defaults;
    }

    var _proto = Tokenizer.prototype;

    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap && cap[0].length > 0) {
        return {
          type: 'space',
          raw: cap[0]
        };
      }
    };

    _proto.code = function code(src) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(text, '\n') : text
        };
      }
    };

    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    };

    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        var text = cap[2].trim(); // remove trailing #s

        if (/#$/.test(text)) {
          var trimmed = rtrim(text, '#');

          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }

        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    };

    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          tokens: this.lexer.blockTokens(text, []),
          text: text
        };
      }
    };

    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: '',
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        };
        bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;

        if (this.options.pedantic) {
          bull = isordered ? bull : '[*+-]';
        } // Get next list item


        var itemRegex = new RegExp("^( {0,3}" + bull + ")((?: [^\\n]*)?(?:\\n|$))"); // Check if current bullet point can start a new List Item

        while (src) {
          endEarly = false;

          if (!(cap = itemRegex.exec(src))) {
            break;
          }

          if (this.rules.block.hr.test(src)) {
            // End list if bullet was actually HR (possibly move into itemRegex?)
            break;
          }

          raw = cap[0];
          src = src.substring(raw.length);
          line = cap[2].split('\n', 1)[0];
          nextLine = src.split('\n', 1)[0];

          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/); // Find first non-space char

            indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent

            itemContents = line.slice(indent);
            indent += cap[1].length;
          }

          blankLine = false;

          if (!line && /^ *$/.test(nextLine)) {
            // Items begin with at most one blank line
            raw += nextLine + '\n';
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }

          if (!endEarly) {
            var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])"); // Check if following lines should be included in List Item

            while (src) {
              rawLine = src.split('\n', 1)[0];
              line = rawLine; // Re-align to follow commonmark nesting rules

              if (this.options.pedantic) {
                line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
              } // End list item if found start of new bullet


              if (nextBulletRegex.test(line)) {
                break;
              }

              if (line.search(/[^ ]/) >= indent || !line.trim()) {
                // Dedent if possible
                itemContents += '\n' + line.slice(indent);
              } else if (!blankLine) {
                // Until blank line, item doesn't need indentation
                itemContents += '\n' + line;
              } else {
                // Otherwise, improper indentation ends this item
                break;
              }

              if (!blankLine && !line.trim()) {
                // Check if current line is blank
                blankLine = true;
              }

              raw += rawLine + '\n';
              src = src.substring(rawLine.length + 1);
            }
          }

          if (!list.loose) {
            // If the previous item ended with a blank line, the list is loose
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          } // Check for task list items


          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);

            if (istask) {
              ischecked = istask[0] !== '[ ] ';
              itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
            }
          }

          list.items.push({
            type: 'list_item',
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents
          });
          list.raw += raw;
        } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic


        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first

        for (i = 0; i < l; i++) {
          this.lexer.state.top = false;
          list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
          var spacers = list.items[i].tokens.filter(function (t) {
            return t.type === 'space';
          });
          var hasMultipleLineBreaks = spacers.every(function (t) {
            var chars = t.raw.split('');
            var lineBreaks = 0;

            for (var _iterator = _createForOfIteratorHelperLoose(chars), _step; !(_step = _iterator()).done;) {
              var _char = _step.value;

              if (_char === '\n') {
                lineBreaks += 1;
              }

              if (lineBreaks > 1) {
                return true;
              }
            }

            return false;
          });

          if (!list.loose && spacers.length && hasMultipleLineBreaks) {
            // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
            list.loose = true;
            list.items[i].loose = true;
          }
        }

        return list;
      }
    };

    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        var token = {
          type: 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        };

        if (this.options.sanitize) {
          token.type = 'paragraph';
          token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
          token.tokens = [];
          this.lexer.inline(token.text, token.tokens);
        }

        return token;
      }
    };

    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          type: 'def',
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    };

    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1]).map(function (c) {
            return {
              text: c
            };
          }),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          rows: cap[3] ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i, j, k, row;

          for (i = 0; i < l; i++) {
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

          l = item.rows.length;

          for (i = 0; i < l; i++) {
            item.rows[i] = splitCells(item.rows[i], item.header.length).map(function (c) {
              return {
                text: c
              };
            });
          } // parse child tokens inside headers and cells
          // header child tokens


          l = item.header.length;

          for (j = 0; j < l; j++) {
            item.header[j].tokens = [];
            this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
          } // cell child tokens


          l = item.rows.length;

          for (j = 0; j < l; j++) {
            row = item.rows[j];

            for (k = 0; k < row.length; k++) {
              row[k].tokens = [];
              this.lexer.inlineTokens(row[k].text, row[k].tokens);
            }
          }

          return item;
        }
      }
    };

    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        var token = {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.text = function text(src) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        var token = {
          type: 'text',
          raw: cap[0],
          text: cap[0],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    };

    _proto.escape = function escape$1(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: escape(cap[1])
        };
      }
    };

    _proto.tag = function tag(src) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }

        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var trimmedUrl = cap[2].trim();

        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          } // ending angle bracket cannot be escaped


          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim();

        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }

        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0], this.lexer);
      }
    };

    _proto.reflink = function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        return outputLink(cap, link, cap[0], this.lexer);
      }
    };

    _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }

      var match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
      var nextChar = match[1] || match[2] || '';

      if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
        var lLength = match[0].length - 1;
        var rDelim,
            rLength,
            delimTotal = lLength,
            midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__

          rLength = rDelim.length;

          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }

          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters
          // Remove extra characters. *a*** -> *a*

          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

          if (Math.min(lLength, rLength) % 2) {
            var _text = src.slice(1, lLength + match.index + rLength);

            return {
              type: 'em',
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text: _text,
              tokens: this.lexer.inlineTokens(_text, [])
            };
          } // Create 'strong' if smallest delimiter has even char count. **a***


          var text = src.slice(2, lLength + match.index + rLength - 1);
          return {
            type: 'strong',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }
      }
    };

    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }

        text = escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    };

    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2], [])
        };
      }
    };

    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.url = function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.inlineText = function inlineText(src, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        } else {
          text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    };

    return Tokenizer;
  }();

  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: noopTest,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);
  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

  });
  block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block.pedantic = merge({}, block.normal, {
    html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    // fences not supported
    paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
      //        () Skip orphan delim inside strong    (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
      rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  }; // list of punctuation marks from CommonMark spec
  // without * and _ to handle the different emphasis markers * and _

  inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

  inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  inline.escapedEmSt = /\\\*|\\_/g;
  inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
  inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
  inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
  inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);
  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  });
  inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace('{2,}', '*').getRegex(),
    text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });

  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */


  function mangle(text) {
    var out = '',
        i,
        ch;
    var l = text.length;

    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  }
  /**
   * Block Lexer
   */


  var Lexer = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || exports.defaults;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      var rules = {
        block: block.normal,
        inline: inline.normal
      };

      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;

        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }

      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */


    /**
     * Static Lex Method
     */
    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    ;

    Lexer.lexInline = function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    ;

    var _proto = Lexer.prototype;

    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens);
      var next;

      while (next = this.inlineQueue.shift()) {
        this.inlineTokens(next.src, next.tokens);
      }

      return this.tokens;
    }
    /**
     * Lexing
     */
    ;

    _proto.blockTokens = function blockTokens(src, tokens) {
      var _this = this;

      if (tokens === void 0) {
        tokens = [];
      }

      if (this.options.pedantic) {
        src = src.replace(/^ +$/gm, '');
      }

      var token, lastToken, cutSrc, lastParagraphClipped;

      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this
          }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }

          return false;
        })) {
          continue;
        } // newline


        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.raw.length === 1 && tokens.length > 0) {
            // if there's a single \n as a spacer, it's terminating the last line,
            // so move it there so that we don't get unecessary paragraph tags
            tokens[tokens.length - 1].raw += '\n';
          } else {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph
        // prevent paragraph consuming extensions by clipping 'src' to extension start


        cutSrc = src;

        if (this.options.extensions && this.options.extensions.startBlock) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;

            _this.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);

              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });

            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }

        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];

          if (lastParagraphClipped && lastToken.type === 'paragraph') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        } // text


        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      this.state.top = true;
      return tokens;
    };

    _proto.inline = function inline(src, tokens) {
      this.inlineQueue.push({
        src: src,
        tokens: tokens
      });
    }
    /**
     * Lexing/Compiling
     */
    ;

    _proto.inlineTokens = function inlineTokens(src, tokens) {
      var _this2 = this;

      if (tokens === void 0) {
        tokens = [];
      }

      var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar; // Mask out reflinks

      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);

        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      } // Mask out other blocks


      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      } // Mask out escaped em & strong delimiters


      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      }

      while (src) {
        if (!keepPrevChar) {
          prevChar = '';
        }

        keepPrevChar = false; // extensions

        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this2
          }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }

          return false;
        })) {
          continue;
        } // escape


        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // em & strong


        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text
        // prevent inlineText consuming extensions by clipping 'src' to extension start


        cutSrc = src;

        if (this.options.extensions && this.options.extensions.startInline) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;

            _this2.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);

              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });

            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }

        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src = src.substring(token.raw.length);

          if (token.raw.slice(-1) !== '_') {
            // Track prevChar before string of ____ started
            prevChar = token.raw.slice(-1);
          }

          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block,
          inline: inline
        };
      }
    }]);

    return Lexer;
  }();

  /**
   * Renderer
   */

  var Renderer = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || exports.defaults;
    }

    var _proto = Renderer.prototype;

    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      _code = _code.replace(/\n$/, '') + '\n';

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
      }

      return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
    };

    _proto.blockquote = function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    _proto.html = function html(_html) {
      return _html;
    };

    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    _proto.listitem = function listitem(text) {
      return '<li>' + text + '</li>\n';
    };

    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };

    _proto.paragraph = function paragraph(text) {
      return '<p>' + text + '</p>\n';
    };

    _proto.table = function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };

    _proto.tablerow = function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer
    ;

    _proto.strong = function strong(text) {
      return '<strong>' + text + '</strong>';
    };

    _proto.em = function em(text) {
      return '<em>' + text + '</em>';
    };

    _proto.codespan = function codespan(text) {
      return '<code>' + text + '</code>';
    };

    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    _proto.del = function del(text) {
      return '<del>' + text + '</del>';
    };

    _proto.link = function link(href, title, text) {
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

    _proto.image = function image(href, title, text) {
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

    _proto.text = function text(_text) {
      return _text;
    };

    return Renderer;
  }();

  /**
   * TextRenderer
   * returns only the textual part of the token
   */
  var TextRenderer = /*#__PURE__*/function () {
    function TextRenderer() {}

    var _proto = TextRenderer.prototype;

    // no need for block level renderers
    _proto.strong = function strong(text) {
      return text;
    };

    _proto.em = function em(text) {
      return text;
    };

    _proto.codespan = function codespan(text) {
      return text;
    };

    _proto.del = function del(text) {
      return text;
    };

    _proto.html = function html(text) {
      return text;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    _proto.link = function link(href, title, text) {
      return '' + text;
    };

    _proto.image = function image(href, title, text) {
      return '' + text;
    };

    _proto.br = function br() {
      return '';
    };

    return TextRenderer;
  }();

  /**
   * Slugger generates header id
   */
  var Slugger = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }

    var _proto = Slugger.prototype;

    _proto.serialize = function serialize(value) {
      return value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }
    /**
     * Finds the next safe (unique) slug to use
     */
    ;

    _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;

      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];

        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }

      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }

      return slug;
    }
    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */
    ;

    _proto.slug = function slug(value, options) {
      if (options === void 0) {
        options = {};
      }

      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    };

    return Slugger;
  }();

  /**
   * Parsing & Compiling
   */

  var Parser = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || exports.defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer();
      this.slugger = new Slugger();
    }
    /**
     * Static Parse Method
     */


    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    ;

    Parser.parseInline = function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    ;

    var _proto = Parser.prototype;

    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }

      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox,
          ret;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i]; // Run any renderer extensions

        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);

          if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.rows.length;

              for (j = 0; j < l2; j++) {
                row = token.rows[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */
    ;

    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token,
          ret;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i]; // Run any renderer extensions

        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);

          if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }

        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    };

    return Parser;
  }();

  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    if (callback) {
      var highlight = opt.highlight;
      var tokens;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      var done = function done(err) {
        var out;

        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }

            out = Parser.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    try {
      var _tokens = Lexer.lex(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }

      return Parser.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */

  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = exports.defaults;
  /**
   * Use Extension
   */

  marked.use = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var opts = merge.apply(void 0, [{}].concat(args));
    var extensions = marked.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    var hasExtensions;
    args.forEach(function (pack) {
      // ==-- Parse "addon" extensions --== //
      if (pack.extensions) {
        hasExtensions = true;
        pack.extensions.forEach(function (ext) {
          if (!ext.name) {
            throw new Error('extension name required');
          }

          if (ext.renderer) {
            // Renderer extensions
            var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

            if (prevRenderer) {
              // Replace extension with func to run new extension but fall back if false
              extensions.renderers[ext.name] = function () {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                var ret = ext.renderer.apply(this, args);

                if (ret === false) {
                  ret = prevRenderer.apply(this, args);
                }

                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }

          if (ext.tokenizer) {
            // Tokenizer Extensions
            if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
              throw new Error("extension level must be 'block' or 'inline'");
            }

            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }

            if (ext.start) {
              // Function to check for start of token
              if (ext.level === 'block') {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === 'inline') {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }

          if (ext.childTokens) {
            // Child tokens to be visited by walkTokens
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
      } // ==-- Parse "overwrite" extensions --== //


      if (pack.renderer) {
        (function () {
          var renderer = marked.defaults.renderer || new Renderer();

          var _loop = function _loop(prop) {
            var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

            renderer[prop] = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              var ret = pack.renderer[prop].apply(renderer, args);

              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }

              return ret;
            };
          };

          for (var prop in pack.renderer) {
            _loop(prop);
          }

          opts.renderer = renderer;
        })();
      }

      if (pack.tokenizer) {
        (function () {
          var tokenizer = marked.defaults.tokenizer || new Tokenizer();

          var _loop2 = function _loop2(prop) {
            var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

            tokenizer[prop] = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }

              var ret = pack.tokenizer[prop].apply(tokenizer, args);

              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }

              return ret;
            };
          };

          for (var prop in pack.tokenizer) {
            _loop2(prop);
          }

          opts.tokenizer = tokenizer;
        })();
      } // ==-- Parse WalkTokens extensions --== //


      if (pack.walkTokens) {
        var _walkTokens = marked.defaults.walkTokens;

        opts.walkTokens = function (token) {
          pack.walkTokens.call(this, token);

          if (_walkTokens) {
            _walkTokens.call(this, token);
          }
        };
      }

      if (hasExtensions) {
        opts.extensions = extensions;
      }

      marked.setOptions(opts);
    });
  };
  /**
   * Run callback for every token
   */


  marked.walkTokens = function (tokens, callback) {
    var _loop3 = function _loop3() {
      var token = _step.value;
      callback.call(marked, token);

      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              marked.walkTokens(cell.tokens, callback);
            }

            for (var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;

              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                marked.walkTokens(_cell.tokens, callback);
              }
            }

            break;
          }

        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }

        default:
          {
            if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
              // Walk any extensions
              marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
                marked.walkTokens(token[childTokens], callback);
              });
            } else if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    };

    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      _loop3();
    }
  };
  /**
   * Parse Inline
   */


  marked.parseInline = function (src, opt) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked.parseInline(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    try {
      var tokens = Lexer.lexInline(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }

      return Parser.parseInline(tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  };
  /**
   * Expose
   */


  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.Tokenizer = Tokenizer;
  marked.Slugger = Slugger;
  marked.parse = marked;
  var options = marked.options;
  var setOptions = marked.setOptions;
  var use = marked.use;
  var walkTokens = marked.walkTokens;
  var parseInline = marked.parseInline;
  var parse = marked;
  var parser = Parser.parse;
  var lexer = Lexer.lex;

  exports.Lexer = Lexer;
  exports.Parser = Parser;
  exports.Renderer = Renderer;
  exports.Slugger = Slugger;
  exports.TextRenderer = TextRenderer;
  exports.Tokenizer = Tokenizer;
  exports.getDefaults = getDefaults;
  exports.lexer = lexer;
  exports.marked = marked;
  exports.options = options;
  exports.parse = parse;
  exports.parseInline = parseInline;
  exports.parser = parser;
  exports.setOptions = setOptions;
  exports.use = use;
  exports.walkTokens = walkTokens;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "7d8a":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6e1f");
var TAG = __webpack_require__("1b55")('toStringTag');
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

/***/ "7d95":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("d782")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "81b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionClient = void 0;
const url_1 = __webpack_require__("a8c2");
class OptionClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/list_view',
        });
        return this.client.get(path, {});
    }
    listAsMapView(key) {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/map_view',
        });
        return this.client.get(path, { key });
    }
    getByKey(key) {
        const path = (0, url_1.buildPath)({
            endpointName: `options/keys/${key}`,
        });
        return this.client.get(path, { key });
    }
    comment() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/comment',
        });
        return this.client.get(path, {});
    }
}
exports.OptionClient = OptionClient;
//# sourceMappingURL=OptionClient.js.map

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "848b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VERSION = __webpack_require__("5cce").version;

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ec5b");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "89ca":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("b42c");
__webpack_require__("93c4");
module.exports = __webpack_require__("d38f");


/***/ }),

/***/ "8aa4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentClient = exports.UserClient = exports.ThemeClient = exports.TagClient = exports.StatisticClient = exports.SheetClient = exports.PostClient = exports.PhotoClient = exports.OptionClient = exports.MenuClient = exports.LinkClient = exports.JournalClient = exports.CategoryClient = exports.ArchiveClient = void 0;
var ArchiveClient_1 = __webpack_require__("207f");
Object.defineProperty(exports, "ArchiveClient", { enumerable: true, get: function () { return ArchiveClient_1.ArchiveClient; } });
var CategoryClient_1 = __webpack_require__("f482");
Object.defineProperty(exports, "CategoryClient", { enumerable: true, get: function () { return CategoryClient_1.CategoryClient; } });
var JournalClient_1 = __webpack_require__("7018");
Object.defineProperty(exports, "JournalClient", { enumerable: true, get: function () { return JournalClient_1.JournalClient; } });
var LinkClient_1 = __webpack_require__("94f1");
Object.defineProperty(exports, "LinkClient", { enumerable: true, get: function () { return LinkClient_1.LinkClient; } });
var MenuClient_1 = __webpack_require__("74d4");
Object.defineProperty(exports, "MenuClient", { enumerable: true, get: function () { return MenuClient_1.MenuClient; } });
var OptionClient_1 = __webpack_require__("81b1");
Object.defineProperty(exports, "OptionClient", { enumerable: true, get: function () { return OptionClient_1.OptionClient; } });
var PhotoClient_1 = __webpack_require__("4318");
Object.defineProperty(exports, "PhotoClient", { enumerable: true, get: function () { return PhotoClient_1.PhotoClient; } });
var PostClient_1 = __webpack_require__("01c3");
Object.defineProperty(exports, "PostClient", { enumerable: true, get: function () { return PostClient_1.PostClient; } });
var SheetClient_1 = __webpack_require__("e998");
Object.defineProperty(exports, "SheetClient", { enumerable: true, get: function () { return SheetClient_1.SheetClient; } });
var StatisticClient_1 = __webpack_require__("b492");
Object.defineProperty(exports, "StatisticClient", { enumerable: true, get: function () { return StatisticClient_1.StatisticClient; } });
var TagClient_1 = __webpack_require__("5b29");
Object.defineProperty(exports, "TagClient", { enumerable: true, get: function () { return TagClient_1.TagClient; } });
var ThemeClient_1 = __webpack_require__("5b7d");
Object.defineProperty(exports, "ThemeClient", { enumerable: true, get: function () { return ThemeClient_1.ThemeClient; } });
var UserClient_1 = __webpack_require__("5b15");
Object.defineProperty(exports, "UserClient", { enumerable: true, get: function () { return UserClient_1.UserClient; } });
var CommentClient_1 = __webpack_require__("3cb6");
Object.defineProperty(exports, "CommentClient", { enumerable: true, get: function () { return CommentClient_1.CommentClient; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
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

/***/ "8bab":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6e1f");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "8ce0":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("3adc");
var createDesc = __webpack_require__("f845");
module.exports = __webpack_require__("7d95") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

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

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

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
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
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

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

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

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "93c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("2a4e")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("e4a9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "94f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkClient = void 0;
const url_1 = __webpack_require__("a8c2");
class LinkClient {
    constructor(client) {
        this.client = client;
    }
    list(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links',
        });
        return this.client.get(path, { sort });
    }
    listTeams(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links/team_view',
        });
        return this.client.get(path, { sort });
    }
}
exports.LinkClient = LinkClient;
//# sourceMappingURL=LinkClient.js.map

/***/ }),

/***/ "9559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HaloResponseHandler = void 0;
const tslib_1 = __webpack_require__("978d");
const HaloRestAPIError_1 = __webpack_require__("dfc6");
class HaloResponseHandler {
    handle(response) {
        return response.then((res) => this.handleSuccessResponse(res), (error) => this.handleErrorResponse(error));
    }
    handleSuccessResponse(response) {
        return response.data;
    }
    handleErrorResponse(error) {
        if (!error.response) {
            // FIXME: find a better way to handle this error
            if (/MAC address verify failure/.test(error.toString())) {
                throw new Error('invalid clientCertAuth setting');
            }
            throw error;
        }
        const errorResponse = error.response;
        const { data } = errorResponse, rest = (0, tslib_1.__rest)(errorResponse, ["data"]);
        if (typeof data === 'string') {
            throw new Error(`${rest.status}: ${rest.statusText}`);
        }
        throw new HaloRestAPIError_1.HaloRestAPIError(Object.assign({ data }, rest));
    }
}
exports.HaloResponseHandler = HaloResponseHandler;
//# sourceMappingURL=HaloResponseHandler.js.map

/***/ }),

/***/ "978d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9941":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6399");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("c349cdbe", content, shadowRoot)
};

/***/ }),

/***/ "9a63":
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

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
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

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c93":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("0f89");
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

/***/ "9cec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a0d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("0f7c");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "a40b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosClient = void 0;
const tslib_1 = __webpack_require__("978d");
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__("bc3a"));
const InterceptorManager_1 = __webpack_require__("05cc");
class AxiosClient {
    constructor({ responseHandler, requestConfigBuilder, }) {
        this.responseHandler = responseHandler;
        this.requestConfigBuilder = requestConfigBuilder;
        this.interceptors = {
            request: new InterceptorManager_1.RequestInterceptor(),
            response: new InterceptorManager_1.ResponseInterceptor(),
        };
    }
    get(path, params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params);
            return this.sendRequest(requestConfig);
        });
    }
    getData(path, params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params, {
                responseType: 'arraybuffer',
            });
            return this.sendRequest(requestConfig);
        });
    }
    post(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    postData(path, formData) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, formData);
            return this.sendRequest(requestConfig);
        });
    }
    put(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('put', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    delete(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('delete', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    sendRequest(requestConfig) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.responseHandler.handle(
            // eslint-disable-next-line new-cap
            (0, axios_1.default)(Object.assign(Object.assign({}, requestConfig), { 
                // NOTE: For defining the max size of the http request content, `maxBodyLength` will be used after version 0.20.0.
                // `maxContentLength` will be still needed for defining the max size of the http response content.
                // ref: https://github.com/axios/axios/pull/2781/files
                // maxBodyLength: Infinity,
                maxContentLength: Infinity })));
        });
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map

/***/ }),

/***/ "a47f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("7d95") && !__webpack_require__("d782")(function () {
  return Object.defineProperty(__webpack_require__("12fd")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
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

/***/ "a5ab":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("a812");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

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

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d604");

/***/ }),

/***/ "a7d3":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a812":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "a85a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cbd1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a8c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPath = void 0;
const buildPath = (params) => {
    const { endpointName, scope } = params;
    const scopePath = scope !== undefined ? `${scope}` : 'content';
    return `/api/${scopePath}/${endpointName}`;
};
exports.buildPath = buildPath;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "a989":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("69b5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("ad63d90a", content, shadowRoot)
};

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
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

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b22a":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "b258":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d256");
__webpack_require__("12fd9");
__webpack_require__("d127");
__webpack_require__("d24f");
module.exports = __webpack_require__("a7d3").Symbol;


/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "b3e7":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "b3ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("3adc");
var createDesc = __webpack_require__("f845");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "b42c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fa54");
var global = __webpack_require__("da3c");
var hide = __webpack_require__("8ce0");
var Iterators = __webpack_require__("b22a");
var TO_STRING_TAG = __webpack_require__("1b55")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "b457":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b492":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticClient = void 0;
const url_1 = __webpack_require__("a8c2");
class StatisticClient {
    constructor(client) {
        this.client = client;
    }
    statistics() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics',
        });
        return this.client.get(path, {});
    }
    statisticsWithUser() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics/user',
        });
        return this.client.get(path, {});
    }
}
exports.StatisticClient = StatisticClient;
//# sourceMappingURL=StatisticClient.js.map

/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var cookies = __webpack_require__("7aac");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");
var defaults = __webpack_require__("2444");
var Cancel = __webpack_require__("7a77");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
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
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

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
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
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
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b5aa":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6e1f");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "bc25":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("f2fe");
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

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c0d8":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("3adc").f;
var has = __webpack_require__("43c8");
var TAG = __webpack_require__("1b55")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "c1f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.injectPlatformDeps = exports.platformDeps = void 0;
exports.platformDeps = {
    readFileFromPath: () => {
        throw new Error('not implemented');
    },
    getRequestToken: () => {
        throw new Error('not implemented');
    },
    getDefaultAuth: () => {
        throw new Error('not implemented');
    },
    buildPlatformDependentConfig: () => {
        throw new Error('not implemented');
    },
    buildHeaders: () => {
        throw new Error('not implemented');
    },
    buildFormDataValue: () => {
        throw new Error('not implemented');
    },
    buildBaseUrl: () => {
        throw new Error('not implemented');
    },
    getVersion: () => {
        throw new Error('not implemented');
    },
};
const injectPlatformDeps = (deps) => {
    exports.platformDeps.readFileFromPath = deps.readFileFromPath;
    exports.platformDeps.getRequestToken = deps.getRequestToken;
    exports.platformDeps.getDefaultAuth = deps.getDefaultAuth;
    exports.platformDeps.buildPlatformDependentConfig = deps.buildPlatformDependentConfig;
    exports.platformDeps.buildHeaders = deps.buildHeaders;
    exports.platformDeps.buildFormDataValue = deps.buildFormDataValue;
    exports.platformDeps.buildBaseUrl = deps.buildBaseUrl;
    exports.platformDeps.getVersion = deps.getVersion;
};
exports.injectPlatformDeps = injectPlatformDeps;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "c227":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("b22a");
var ITERATOR = __webpack_require__("1b55")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "c250":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_TOKEN_KEY = void 0;
exports.SESSION_TOKEN_KEY = '__REQUEST_TOKEN__';
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "c256":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentApiClient = void 0;
const tslib_1 = __webpack_require__("54b6");
var ContentApiClient_1 = __webpack_require__("06d0");
Object.defineProperty(exports, "ContentApiClient", { enumerable: true, get: function () { return ContentApiClient_1.ContentApiClient; } });
(0, tslib_1.__exportStar)(__webpack_require__("755b"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("7203"), exports);
(0, tslib_1.__exportStar)(__webpack_require__("8aa4"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "c26b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("86cc").f;
var create = __webpack_require__("2aeb");
var redefineAll = __webpack_require__("dcbc");
var ctx = __webpack_require__("9b43");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var $iterDefine = __webpack_require__("01f9");
var step = __webpack_require__("d53b");
var setSpecies = __webpack_require__("7a56");
var DESCRIPTORS = __webpack_require__("9e1e");
var fastKey = __webpack_require__("67ab").fastKey;
var validate = __webpack_require__("b39a");
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

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
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

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var defaults = __webpack_require__("2444");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
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
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
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
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
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
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
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
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
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

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
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
  isPlainObject: isPlainObject,
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
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


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

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("89ca");

/***/ }),

/***/ "c95e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultHttpClient = void 0;
var AxiosClient_1 = __webpack_require__("a40b");
Object.defineProperty(exports, "DefaultHttpClient", { enumerable: true, get: function () { return AxiosClient_1.AxiosClient; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
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

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cbd1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6110");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("12684ee1", content, shadowRoot)
};

/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

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

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

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

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");
axios.VERSION = __webpack_require__("5cce").version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("5f02");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d127":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0a0a")('asyncIterator');


/***/ }),

/***/ "d13f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da3c");
var core = __webpack_require__("a7d3");
var ctx = __webpack_require__("bc25");
var hide = __webpack_require__("8ce0");
var has = __webpack_require__("43c8");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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

/***/ "d24f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0a0a")('observable');


/***/ }),

/***/ "d256":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("da3c");
var has = __webpack_require__("43c8");
var DESCRIPTORS = __webpack_require__("7d95");
var $export = __webpack_require__("d13f");
var redefine = __webpack_require__("2312");
var META = __webpack_require__("6277").KEY;
var $fails = __webpack_require__("d782");
var shared = __webpack_require__("7772");
var setToStringTag = __webpack_require__("c0d8");
var uid = __webpack_require__("7b00");
var wks = __webpack_require__("1b55");
var wksExt = __webpack_require__("fda1");
var wksDefine = __webpack_require__("0a0a");
var enumKeys = __webpack_require__("d2d6");
var isArray = __webpack_require__("b5aa");
var anObject = __webpack_require__("0f89");
var isObject = __webpack_require__("6f8a");
var toObject = __webpack_require__("0185");
var toIObject = __webpack_require__("6a9b");
var toPrimitive = __webpack_require__("2ea1");
var createDesc = __webpack_require__("f845");
var _create = __webpack_require__("7108");
var gOPNExt = __webpack_require__("565d");
var $GOPD = __webpack_require__("626e");
var $GOPS = __webpack_require__("31c2");
var $DP = __webpack_require__("3adc");
var $keys = __webpack_require__("7633");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("d876").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("d74e").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b457")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("8ce0")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "d2d6":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("7633");
var gOPS = __webpack_require__("31c2");
var pIE = __webpack_require__("d74e");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "d38f":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("7d8a");
var ITERATOR = __webpack_require__("1b55")('iterator');
var Iterators = __webpack_require__("b22a");
module.exports = __webpack_require__("a7d3").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d604":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1938");
module.exports = __webpack_require__("a7d3").Array.isArray;


/***/ }),

/***/ "d74e":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d782":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "d876":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("2695");
var hiddenKeys = __webpack_require__("0029").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d925":
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

/***/ "da3c":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "dfc6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HaloRestAPIError = void 0;
class HaloRestAPIError extends Error {
    constructor(error) {
        const { data } = HaloRestAPIError.buildErrorResponseDate(error);
        super(data.message);
        this.name = 'HaloRestAPIError';
        this.data = data;
        this.status = data.status;
        this.headers = error.headers;
        this.message = `[${this.status}] ${this.message}`;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HaloRestAPIError);
        }
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HaloRestAPIError.prototype);
    }
    static buildErrorResponseDate(error) {
        // improvable
        return { data: error.data };
    }
}
exports.HaloRestAPIError = HaloRestAPIError;
//# sourceMappingURL=HaloRestAPIError.js.map

/***/ }),

/***/ "e0b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var redefineAll = __webpack_require__("dcbc");
var meta = __webpack_require__("67ab");
var forOf = __webpack_require__("4a59");
var anInstance = __webpack_require__("f605");
var isObject = __webpack_require__("d3f4");
var fails = __webpack_require__("79e5");
var $iterDetect = __webpack_require__("5cc5");
var setToStringTag = __webpack_require__("7f20");
var inheritIfRequired = __webpack_require__("5dbc");

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

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e222":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = exports.buildBaseUrl = exports.buildFormDataValue = exports.buildHeaders = exports.buildPlatformDependentConfig = exports.getDefaultAuth = exports.getRequestToken = exports.readFileFromPath = void 0;
const tslib_1 = __webpack_require__("978d");
const UnsupportedPlatformError_1 = __webpack_require__("3a23");
const readFileFromPath = () => {
    throw new UnsupportedPlatformError_1.UnsupportedPlatformError('Browser');
};
exports.readFileFromPath = readFileFromPath;
const getRequestToken = () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    if (typeof halo === 'object' && halo !== null && typeof halo.getRequestToken === 'function') {
        return halo.getRequestToken();
    }
    throw new Error('session authentication must specify a request token');
});
exports.getRequestToken = getRequestToken;
const getDefaultAuth = () => {
    return {
        type: 'session',
    };
};
exports.getDefaultAuth = getDefaultAuth;
const buildPlatformDependentConfig = () => {
    return {};
};
exports.buildPlatformDependentConfig = buildPlatformDependentConfig;
const buildHeaders = () => {
    return {};
};
exports.buildHeaders = buildHeaders;
const buildFormDataValue = (data) => {
    return new Blob([data]);
};
exports.buildFormDataValue = buildFormDataValue;
const buildBaseUrl = (baseUrl) => {
    if (typeof baseUrl === 'undefined') {
        throw new Error('in browser environment, baseUrl is required');
    }
    return baseUrl;
};
exports.buildBaseUrl = buildBaseUrl;
const getVersion = () => {
    return PACKAGE_VERSION;
};
exports.getVersion = getVersion;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "e341":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("d13f");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("7d95"), 'Object', { defineProperty: __webpack_require__("3adc").f });


/***/ }),

/***/ "e4a9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b457");
var $export = __webpack_require__("d13f");
var redefine = __webpack_require__("2312");
var hide = __webpack_require__("8ce0");
var Iterators = __webpack_require__("b22a");
var $iterCreate = __webpack_require__("5ce7");
var setToStringTag = __webpack_require__("c0d8");
var getPrototypeOf = __webpack_require__("ff0c");
var ITERATOR = __webpack_require__("1b55")('iterator');
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

/***/ "e5fa":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "e683":
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

/***/ "e762":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atob", function() { return _atob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atobPolyfill", function() { return atobPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoa", function() { return _btoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoaPolyfill", function() { return btoaPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBase64", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utob", function() { return utob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeURI", function() { return encodeURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeURL", function() { return encodeURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btou", function() { return btou; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUint8Array", function() { return fromUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8Array", function() { return toUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendString", function() { return extendString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendUint8Array", function() { return extendUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendBuiltins", function() { return extendBuiltins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return gBase64; });
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.7.2';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it, fn = (x) => x) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src) => src
    .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found');
        u32 = (c0 << 16) | (c1 << 8) | c2;
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa ? (bin) => btoa(bin)
    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
        : btoaPolyfill;
const _fromUint8Array = _hasBuffer
    ? (u8a) => Buffer.from(u8a).toString('base64')
    : (u8a) => {
        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
        const maxargs = 0x1000;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c) => {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                + _fromCC(0x80 | (cc & 0x3f)))
                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                    + _fromCC(0x80 | (cc & 0x3f)));
    }
    else {
        var cc = 0x10000
            + (c.charCodeAt(0) - 0xD800) * 0x400
            + (c.charCodeAt(1) - 0xDC00);
        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
            + _fromCC(0x80 | (cc & 0x3f)));
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (u) => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer
    ? (s) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
        ? (s) => _fromUint8Array(_TE.encode(s))
        : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => urlsafe
    ? _mkUriSafe(_encode(src))
    : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc) => {
    switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                | ((0x3f & cccc.charCodeAt(1)) << 12)
                | ((0x3f & cccc.charCodeAt(2)) << 6)
                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800)
                + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                | ((0x3f & cccc.charCodeAt(1)) << 6)
                | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                | (0x3f & cccc.charCodeAt(1)));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (b) => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, bin = '', r1, r2;
    for (let i = 0; i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob ? (asc) => atob(_tidyB64(asc))
    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
        : atobPolyfill;
//
const _toUint8Array = _hasBuffer
    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a) => _U8Afrom(_atob(a), c => c.charCodeAt(0));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = (a) => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer
    ? (a) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
        ? (a) => _TD.decode(_toUint8Array(a))
        : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = (src) => {
    if (typeof src !== 'string')
        return false;
    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v) => {
    return {
        value: v, enumerable: false, writable: true, configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function () { return decode(this); });
    _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
    _add('toBase64URI', function () { return encode(this, true); });
    _add('toBase64URL', function () { return encode(this, true); });
    _add('toUint8Array', function () { return toUint8Array(this); });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
    _add('toBase64URI', function () { return fromUint8Array(this, true); });
    _add('toBase64URL', function () { return fromUint8Array(this, true); });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins,
};
// makecjs:CUT //




















// and finally,



/***/ }),

/***/ "e998":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetClient = void 0;
const url_1 = __webpack_require__("a8c2");
class SheetClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    get(sheetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/${sheetId}`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    getBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/slug',
        });
        return this.client.get(path, Object.assign({ slug }, params));
    }
}
exports.SheetClient = SheetClient;
//# sourceMappingURL=SheetClient.js.map

/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ec5b":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e341");
var $Object = __webpack_require__("a7d3").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "f159":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("7d8a");
var ITERATOR = __webpack_require__("1b55")('iterator');
var Iterators = __webpack_require__("b22a");
module.exports = __webpack_require__("a7d3").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f28c":
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

/***/ "f2fe":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "f482":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryClient = void 0;
const url_1 = __webpack_require__("a8c2");
class CategoryClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'categories',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listPostBySlug(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `categories/${params.slug}/posts`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.CategoryClient = CategoryClient;
//# sourceMappingURL=CategoryClient.js.map

/***/ }),

/***/ "f568":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("3adc");
var anObject = __webpack_require__("0f89");
var getKeys = __webpack_require__("7633");

module.exports = __webpack_require__("7d95") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
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

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f845":
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

/***/ "fa54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("b3e7");
var step = __webpack_require__("245b");
var Iterators = __webpack_require__("b22a");
var toIObject = __webpack_require__("6a9b");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("e4a9")(Array, 'Array', function (iterated, kind) {
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

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fda1":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("1b55");


/***/ }),

/***/ "ff0c":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("43c8");
var toObject = __webpack_require__("0185");
var IE_PROTO = __webpack_require__("5d8f")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ })

/******/ });