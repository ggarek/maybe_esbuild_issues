(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory2) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory2(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory2(createExporter(root, createExporter(module.exports)));
        } else {
          factory2(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __createBinding2 = function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __exportStar2 = function(m, exports2) {
          for (var p in m)
            if (p !== "default" && !exports2.hasOwnProperty(p))
              exports2[p] = m[p];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
          }
          result["default"] = mod;
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
          }
          return privateMap.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
          }
          privateMap.set(receiver, value);
          return value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/@firebase/util/dist/index.cjs.js
  var require_index_cjs = __commonJS({
    "node_modules/@firebase/util/dist/index.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib2 = require_tslib();
      var CONSTANTS = {
        NODE_CLIENT: false,
        NODE_ADMIN: false,
        SDK_VERSION: "${JSCORE_VERSION}"
      };
      var assert = function(assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      var assertionError = function(message) {
        return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
      };
      var stringToByteArray = function(str) {
        var out = [];
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      var byteArrayToString = function(bytes) {
        var out = [];
        var pos = 0, c = 0;
        while (pos < bytes.length) {
          var c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
          } else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }
        return out.join("");
      };
      var base64 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: typeof atob === "function",
        encodeByteArray: function(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error("encodeByteArray takes an array as a parameter");
          }
          this.init_();
          var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          var output = [];
          for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            var outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            var outByte4 = byte3 & 63;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join("");
        },
        encodeString: function(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray(input), webSafe);
        },
        decodeString: function(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        decodeStringToByteArray: function(input, webSafe) {
          this.init_();
          var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          var output = [];
          for (var i = 0; i < input.length; ) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw Error();
            }
            var outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
              var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
              output.push(outByte2);
              if (byte4 !== 64) {
                var outByte3 = byte3 << 6 & 192 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        init_: function() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      var base64Encode = function(str) {
        var utf8Bytes = stringToByteArray(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      var base64Decode = function(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      };
      function deepCopy(value) {
        return deepExtend(void 0, value);
      }
      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }
        switch (source.constructor) {
          case Date:
            var dateValue = source;
            return new Date(dateValue.getTime());
          case Object:
            if (target === void 0) {
              target = {};
            }
            break;
          case Array:
            target = [];
            break;
          default:
            return source;
        }
        for (var prop in source) {
          if (!source.hasOwnProperty(prop)) {
            continue;
          }
          target[prop] = deepExtend(target[prop], source[prop]);
        }
        return target;
      }
      var Deferred = function() {
        function Deferred2() {
          var _this = this;
          this.reject = function() {
          };
          this.resolve = function() {
          };
          this.promise = new Promise(function(resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
          });
        }
        Deferred2.prototype.wrapCallback = function(callback) {
          var _this = this;
          return function(error, value) {
            if (error) {
              _this.reject(error);
            } else {
              _this.resolve(value);
            }
            if (typeof callback === "function") {
              _this.promise.catch(function() {
              });
              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        };
        return Deferred2;
      }();
      function getUA() {
        if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
          return navigator["userAgent"];
        } else {
          return "";
        }
      }
      function isMobileCordova() {
        return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      function isNode() {
        try {
          return Object.prototype.toString.call(global.process) === "[object process]";
        } catch (e) {
          return false;
        }
      }
      function isBrowser() {
        return typeof self === "object" && self.self === self;
      }
      function isBrowserExtension2() {
        var runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
        return typeof runtime === "object" && runtime.id !== void 0;
      }
      function isReactNative() {
        return typeof navigator === "object" && navigator["product"] === "ReactNative";
      }
      function isElectron() {
        return getUA().indexOf("Electron/") >= 0;
      }
      function isIE() {
        var ua = getUA();
        return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
      }
      function isUWP() {
        return getUA().indexOf("MSAppHost/") >= 0;
      }
      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      function isSafari() {
        return !isNode() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
      }
      function isIndexedDBAvailable2() {
        return "indexedDB" in self && indexedDB != null;
      }
      function validateIndexedDBOpenable2() {
        return new Promise(function(resolve, reject) {
          try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = "validate-browser-context-for-indexeddb-analytics-module";
            var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function() {
              request_1.result.close();
              if (!preExist_1) {
                window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
              }
              resolve(true);
            };
            request_1.onupgradeneeded = function() {
              preExist_1 = false;
            };
            request_1.onerror = function() {
              var _a3;
              reject(((_a3 = request_1.error) === null || _a3 === void 0 ? void 0 : _a3.message) || "");
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      function areCookiesEnabled2() {
        if (!navigator || !navigator.cookieEnabled) {
          return false;
        }
        return true;
      }
      var ERROR_NAME = "FirebaseError";
      var FirebaseError3 = function(_super) {
        tslib2.__extends(FirebaseError4, _super);
        function FirebaseError4(code, message) {
          var _this = _super.call(this, message) || this;
          _this.code = code;
          _this.name = ERROR_NAME;
          Object.setPrototypeOf(_this, FirebaseError4.prototype);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory3.prototype.create);
          }
          return _this;
        }
        return FirebaseError4;
      }(Error);
      var ErrorFactory3 = function() {
        function ErrorFactory4(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        ErrorFactory4.prototype.create = function(code) {
          var data = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
          }
          var customData = data[0] || {};
          var fullCode = this.service + "/" + code;
          var template = this.errors[code];
          var message = template ? replaceTemplate(template, customData) : "Error";
          var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
          var error = new FirebaseError3(fullCode, fullMessage);
          for (var _a3 = 0, _b = Object.keys(customData); _a3 < _b.length; _a3++) {
            var key = _b[_a3];
            if (key.slice(-1) !== "_") {
              if (key in error) {
                console.warn('Overwriting FirebaseError base field "' + key + '" can cause unexpected behavior.');
              }
              error[key] = customData[key];
            }
          }
          return error;
        };
        return ErrorFactory4;
      }();
      function replaceTemplate(template, data) {
        return template.replace(PATTERN, function(_, key) {
          var value = data[key];
          return value != null ? String(value) : "<" + key + "?>";
        });
      }
      var PATTERN = /\{\$([^}]+)}/g;
      function jsonEval(str) {
        return JSON.parse(str);
      }
      function stringify(data) {
        return JSON.stringify(data);
      }
      var decode = function(token) {
        var header = {}, claims = {}, data = {}, signature = "";
        try {
          var parts = token.split(".");
          header = jsonEval(base64Decode(parts[0]) || "");
          claims = jsonEval(base64Decode(parts[1]) || "");
          signature = parts[2];
          data = claims["d"] || {};
          delete claims["d"];
        } catch (e) {
        }
        return {
          header,
          claims,
          data,
          signature
        };
      };
      var isValidTimestamp = function(token) {
        var claims = decode(token).claims;
        var now = Math.floor(new Date().getTime() / 1e3);
        var validSince = 0, validUntil = 0;
        if (typeof claims === "object") {
          if (claims.hasOwnProperty("nbf")) {
            validSince = claims["nbf"];
          } else if (claims.hasOwnProperty("iat")) {
            validSince = claims["iat"];
          }
          if (claims.hasOwnProperty("exp")) {
            validUntil = claims["exp"];
          } else {
            validUntil = validSince + 86400;
          }
        }
        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      var issuedAtTime = function(token) {
        var claims = decode(token).claims;
        if (typeof claims === "object" && claims.hasOwnProperty("iat")) {
          return claims["iat"];
        }
        return null;
      };
      var isValidFormat = function(token) {
        var decoded = decode(token), claims = decoded.claims;
        return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
      };
      var isAdmin = function(token) {
        var claims = decode(token).claims;
        return typeof claims === "object" && claims["admin"] === true;
      };
      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return void 0;
        }
      }
      function isEmpty(obj) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }
        return true;
      }
      function map(obj, fn, contextObj) {
        var res = {};
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }
        return res;
      }
      function querystring(querystringParams) {
        var params = [];
        var _loop_1 = function(key2, value2) {
          if (Array.isArray(value2)) {
            value2.forEach(function(arrayVal) {
              params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(arrayVal));
            });
          } else {
            params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(value2));
          }
        };
        for (var _i = 0, _a3 = Object.entries(querystringParams); _i < _a3.length; _i++) {
          var _b = _a3[_i], key = _b[0], value = _b[1];
          _loop_1(key, value);
        }
        return params.length ? "&" + params.join("&") : "";
      }
      function querystringDecode(querystring2) {
        var obj = {};
        var tokens = querystring2.replace(/^\?/, "").split("&");
        tokens.forEach(function(token) {
          if (token) {
            var key = token.split("=");
            obj[key[0]] = key[1];
          }
        });
        return obj;
      }
      var Sha1 = function() {
        function Sha12() {
          this.chain_ = [];
          this.buf_ = [];
          this.W_ = [];
          this.pad_ = [];
          this.inbuf_ = 0;
          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;
          for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }
          this.reset();
        }
        Sha12.prototype.reset = function() {
          this.chain_[0] = 1732584193;
          this.chain_[1] = 4023233417;
          this.chain_[2] = 2562383102;
          this.chain_[3] = 271733878;
          this.chain_[4] = 3285377520;
          this.inbuf_ = 0;
          this.total_ = 0;
        };
        Sha12.prototype.compress_ = function(buf, offset) {
          if (!offset) {
            offset = 0;
          }
          var W = this.W_;
          if (typeof buf === "string") {
            for (var i = 0; i < 16; i++) {
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (var i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          }
          for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 4294967295;
          }
          var a = this.chain_[0];
          var b = this.chain_[1];
          var c = this.chain_[2];
          var d = this.chain_[3];
          var e = this.chain_[4];
          var f, k;
          for (var i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 1518500249;
              } else {
                f = b ^ c ^ d;
                k = 1859775393;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
              } else {
                f = b ^ c ^ d;
                k = 3395469782;
              }
            }
            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295;
          this.chain_[1] = this.chain_[1] + b & 4294967295;
          this.chain_[2] = this.chain_[2] + c & 4294967295;
          this.chain_[3] = this.chain_[3] + d & 4294967295;
          this.chain_[4] = this.chain_[4] + e & 4294967295;
        };
        Sha12.prototype.update = function(bytes, length) {
          if (bytes == null) {
            return;
          }
          if (length === void 0) {
            length = bytes.length;
          }
          var lengthMinusBlock = length - this.blockSize;
          var n = 0;
          var buf = this.buf_;
          var inbuf = this.inbuf_;
          while (n < length) {
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }
            if (typeof bytes === "string") {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
        };
        Sha12.prototype.digest = function() {
          var digest = [];
          var totalBits = this.total_ * 8;
          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          }
          for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256;
          }
          this.compress_(this.buf_);
          var n = 0;
          for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }
          return digest;
        };
        return Sha12;
      }();
      function createSubscribe(executor, onNoObservers) {
        var proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      var ObserverProxy = function() {
        function ObserverProxy2(executor, onNoObservers) {
          var _this = this;
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          this.task.then(function() {
            executor(_this);
          }).catch(function(e) {
            _this.error(e);
          });
        }
        ObserverProxy2.prototype.next = function(value) {
          this.forEachObserver(function(observer) {
            observer.next(value);
          });
        };
        ObserverProxy2.prototype.error = function(error) {
          this.forEachObserver(function(observer) {
            observer.error(error);
          });
          this.close(error);
        };
        ObserverProxy2.prototype.complete = function() {
          this.forEachObserver(function(observer) {
            observer.complete();
          });
          this.close();
        };
        ObserverProxy2.prototype.subscribe = function(nextOrObserver, error, complete) {
          var _this = this;
          var observer;
          if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
            throw new Error("Missing Observer.");
          }
          if (implementsAnyMethods(nextOrObserver, [
            "next",
            "error",
            "complete"
          ])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error,
              complete
            };
          }
          if (observer.next === void 0) {
            observer.next = noop;
          }
          if (observer.error === void 0) {
            observer.error = noop;
          }
          if (observer.complete === void 0) {
            observer.complete = noop;
          }
          var unsub = this.unsubscribeOne.bind(this, this.observers.length);
          if (this.finalized) {
            this.task.then(function() {
              try {
                if (_this.finalError) {
                  observer.error(_this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {
              }
              return;
            });
          }
          this.observers.push(observer);
          return unsub;
        };
        ObserverProxy2.prototype.unsubscribeOne = function(i) {
          if (this.observers === void 0 || this.observers[i] === void 0) {
            return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== void 0) {
            this.onNoObservers(this);
          }
        };
        ObserverProxy2.prototype.forEachObserver = function(fn) {
          if (this.finalized) {
            return;
          }
          for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        };
        ObserverProxy2.prototype.sendOne = function(i, fn) {
          var _this = this;
          this.task.then(function() {
            if (_this.observers !== void 0 && _this.observers[i] !== void 0) {
              try {
                fn(_this.observers[i]);
              } catch (e) {
                if (typeof console !== "undefined" && console.error) {
                  console.error(e);
                }
              }
            }
          });
        };
        ObserverProxy2.prototype.close = function(err) {
          var _this = this;
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          if (err !== void 0) {
            this.finalError = err;
          }
          this.task.then(function() {
            _this.observers = void 0;
            _this.onNoObservers = void 0;
          });
        };
        return ObserverProxy2;
      }();
      function async(fn, onError) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          Promise.resolve(true).then(function() {
            fn.apply(void 0, args);
          }).catch(function(error) {
            if (onError) {
              onError(error);
            }
          });
        };
      }
      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== "object" || obj === null) {
          return false;
        }
        for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
          var method = methods_1[_i];
          if (method in obj && typeof obj[method] === "function") {
            return true;
          }
        }
        return false;
      }
      function noop() {
      }
      var validateArgCount = function(fnName, minCount, maxCount, argCount) {
        var argError;
        if (argCount < minCount) {
          argError = "at least " + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? "none" : "no more than " + maxCount;
        }
        if (argError) {
          var error = fnName + " failed: Was called with " + argCount + (argCount === 1 ? " argument." : " arguments.") + " Expects " + argError + ".";
          throw new Error(error);
        }
      };
      function errorPrefix(fnName, argumentNumber, optional) {
        var argName = "";
        switch (argumentNumber) {
          case 1:
            argName = optional ? "first" : "First";
            break;
          case 2:
            argName = optional ? "second" : "Second";
            break;
          case 3:
            argName = optional ? "third" : "Third";
            break;
          case 4:
            argName = optional ? "fourth" : "Fourth";
            break;
          default:
            throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
        }
        var error = fnName + " failed: ";
        error += argName + " argument ";
        return error;
      }
      function validateNamespace(fnName, argumentNumber, namespace, optional) {
        if (optional && !namespace) {
          return;
        }
        if (typeof namespace !== "string") {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid firebase namespace.");
        }
      }
      function validateCallback(fnName, argumentNumber, callback, optional) {
        if (optional && !callback) {
          return;
        }
        if (typeof callback !== "function") {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid function.");
        }
      }
      function validateContextObject(fnName, argumentNumber, context, optional) {
        if (optional && !context) {
          return;
        }
        if (typeof context !== "object" || context === null) {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + "must be a valid context object.");
        }
      }
      var stringToByteArray$1 = function(str) {
        var out = [];
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c >= 55296 && c <= 56319) {
            var high = c - 55296;
            i++;
            assert(i < str.length, "Surrogate pair missing trail surrogate.");
            var low = str.charCodeAt(i) - 56320;
            c = 65536 + (high << 10) + low;
          }
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      var stringLength = function(str) {
        var p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 55296 && c <= 56319) {
            p += 4;
            i++;
          } else {
            p += 3;
          }
        }
        return p;
      };
      var DEFAULT_INTERVAL_MILLIS = 1e3;
      var DEFAULT_BACKOFF_FACTOR = 2;
      var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
      var RANDOM_FACTOR = 0.5;
      function calculateBackoffMillis2(backoffCount, intervalMillis, backoffFactor) {
        if (intervalMillis === void 0) {
          intervalMillis = DEFAULT_INTERVAL_MILLIS;
        }
        if (backoffFactor === void 0) {
          backoffFactor = DEFAULT_BACKOFF_FACTOR;
        }
        var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
        var randomWait = Math.round(RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
      }
      exports.CONSTANTS = CONSTANTS;
      exports.Deferred = Deferred;
      exports.ErrorFactory = ErrorFactory3;
      exports.FirebaseError = FirebaseError3;
      exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
      exports.RANDOM_FACTOR = RANDOM_FACTOR;
      exports.Sha1 = Sha1;
      exports.areCookiesEnabled = areCookiesEnabled2;
      exports.assert = assert;
      exports.assertionError = assertionError;
      exports.async = async;
      exports.base64 = base64;
      exports.base64Decode = base64Decode;
      exports.base64Encode = base64Encode;
      exports.calculateBackoffMillis = calculateBackoffMillis2;
      exports.contains = contains;
      exports.createSubscribe = createSubscribe;
      exports.decode = decode;
      exports.deepCopy = deepCopy;
      exports.deepExtend = deepExtend;
      exports.errorPrefix = errorPrefix;
      exports.getUA = getUA;
      exports.isAdmin = isAdmin;
      exports.isBrowser = isBrowser;
      exports.isBrowserExtension = isBrowserExtension2;
      exports.isElectron = isElectron;
      exports.isEmpty = isEmpty;
      exports.isIE = isIE;
      exports.isIndexedDBAvailable = isIndexedDBAvailable2;
      exports.isMobileCordova = isMobileCordova;
      exports.isNode = isNode;
      exports.isNodeSdk = isNodeSdk;
      exports.isReactNative = isReactNative;
      exports.isSafari = isSafari;
      exports.isUWP = isUWP;
      exports.isValidFormat = isValidFormat;
      exports.isValidTimestamp = isValidTimestamp;
      exports.issuedAtTime = issuedAtTime;
      exports.jsonEval = jsonEval;
      exports.map = map;
      exports.querystring = querystring;
      exports.querystringDecode = querystringDecode;
      exports.safeGet = safeGet;
      exports.stringLength = stringLength;
      exports.stringToByteArray = stringToByteArray$1;
      exports.stringify = stringify;
      exports.validateArgCount = validateArgCount;
      exports.validateCallback = validateCallback;
      exports.validateContextObject = validateContextObject;
      exports.validateIndexedDBOpenable = validateIndexedDBOpenable2;
      exports.validateNamespace = validateNamespace;
    }
  });

  // node_modules/@firebase/component/dist/index.cjs.js
  var require_index_cjs2 = __commonJS({
    "node_modules/@firebase/component/dist/index.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib2 = require_tslib();
      var util = require_index_cjs();
      var Component3 = function() {
        function Component4(name4, instanceFactory, type) {
          this.name = name4;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          this.serviceProps = {};
          this.instantiationMode = "LAZY";
        }
        Component4.prototype.setInstantiationMode = function(mode) {
          this.instantiationMode = mode;
          return this;
        };
        Component4.prototype.setMultipleInstances = function(multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
        };
        Component4.prototype.setServiceProps = function(props) {
          this.serviceProps = props;
          return this;
        };
        return Component4;
      }();
      var DEFAULT_ENTRY_NAME = "[DEFAULT]";
      var Provider = function() {
        function Provider2(name4, container) {
          this.name = name4;
          this.container = container;
          this.component = null;
          this.instances = /* @__PURE__ */ new Map();
          this.instancesDeferred = /* @__PURE__ */ new Map();
        }
        Provider2.prototype.get = function(identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          }
          var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            try {
              var instance = this.getOrInitializeService(normalizedIdentifier);
              if (instance) {
                deferred.resolve(instance);
              }
            } catch (e) {
            }
          }
          return this.instancesDeferred.get(normalizedIdentifier).promise;
        };
        Provider2.prototype.getImmediate = function(options) {
          var _a3 = tslib2.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a3.identifier, optional = _a3.optional;
          var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
              if (optional) {
                return null;
              }
              throw Error("Service " + this.name + " is not available");
            }
            return instance;
          } catch (e) {
            if (optional) {
              return null;
            } else {
              throw e;
            }
          }
        };
        Provider2.prototype.getComponent = function() {
          return this.component;
        };
        Provider2.prototype.setComponent = function(component) {
          var e_1, _a3;
          if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
          }
          if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
          }
          this.component = component;
          if (isComponentEager(component)) {
            try {
              this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            } catch (e) {
            }
          }
          try {
            for (var _b = tslib2.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var _d = tslib2.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
              var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
              try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                instanceDeferred.resolve(instance);
              } catch (e) {
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a3 = _b.return))
                _a3.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        };
        Provider2.prototype.clearInstance = function(identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          }
          this.instancesDeferred.delete(identifier);
          this.instances.delete(identifier);
        };
        Provider2.prototype.delete = function() {
          return tslib2.__awaiter(this, void 0, void 0, function() {
            var services;
            return tslib2.__generator(this, function(_a3) {
              switch (_a3.label) {
                case 0:
                  services = Array.from(this.instances.values());
                  return [4, Promise.all(tslib2.__spread(services.filter(function(service) {
                    return "INTERNAL" in service;
                  }).map(function(service) {
                    return service.INTERNAL.delete();
                  }), services.filter(function(service) {
                    return "_delete" in service;
                  }).map(function(service) {
                    return service._delete();
                  })))];
                case 1:
                  _a3.sent();
                  return [2];
              }
            });
          });
        };
        Provider2.prototype.isComponentSet = function() {
          return this.component != null;
        };
        Provider2.prototype.getOrInitializeService = function(identifier) {
          var instance = this.instances.get(identifier);
          if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
          }
          return instance || null;
        };
        Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
          if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
          } else {
            return identifier;
          }
        };
        return Provider2;
      }();
      function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
      }
      function isComponentEager(component) {
        return component.instantiationMode === "EAGER";
      }
      var ComponentContainer = function() {
        function ComponentContainer2(name4) {
          this.name = name4;
          this.providers = /* @__PURE__ */ new Map();
        }
        ComponentContainer2.prototype.addComponent = function(component) {
          var provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
          }
          provider.setComponent(component);
        };
        ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
          var provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            this.providers.delete(component.name);
          }
          this.addComponent(component);
        };
        ComponentContainer2.prototype.getProvider = function(name4) {
          if (this.providers.has(name4)) {
            return this.providers.get(name4);
          }
          var provider = new Provider(name4, this);
          this.providers.set(name4, provider);
          return provider;
        };
        ComponentContainer2.prototype.getProviders = function() {
          return Array.from(this.providers.values());
        };
        return ComponentContainer2;
      }();
      exports.Component = Component3;
      exports.ComponentContainer = ComponentContainer;
      exports.Provider = Provider;
    }
  });

  // node_modules/@firebase/logger/dist/index.cjs.js
  var require_index_cjs3 = __commonJS({
    "node_modules/@firebase/logger/dist/index.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function __spreadArrays2() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }
      var _a3;
      var instances = [];
      (function(LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
      })(exports.LogLevel || (exports.LogLevel = {}));
      var levelStringToEnum = {
        "debug": exports.LogLevel.DEBUG,
        "verbose": exports.LogLevel.VERBOSE,
        "info": exports.LogLevel.INFO,
        "warn": exports.LogLevel.WARN,
        "error": exports.LogLevel.ERROR,
        "silent": exports.LogLevel.SILENT
      };
      var defaultLogLevel = exports.LogLevel.INFO;
      var ConsoleMethod = (_a3 = {}, _a3[exports.LogLevel.DEBUG] = "log", _a3[exports.LogLevel.VERBOSE] = "log", _a3[exports.LogLevel.INFO] = "info", _a3[exports.LogLevel.WARN] = "warn", _a3[exports.LogLevel.ERROR] = "error", _a3);
      var defaultLogHandler = function(instance, logType) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        if (logType < instance.logLevel) {
          return;
        }
        var now = new Date().toISOString();
        var method = ConsoleMethod[logType];
        if (method) {
          console[method].apply(console, __spreadArrays2(["[" + now + "]  " + instance.name + ":"], args));
        } else {
          throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
        }
      };
      var Logger2 = function() {
        function Logger3(name4) {
          this.name = name4;
          this._logLevel = defaultLogLevel;
          this._logHandler = defaultLogHandler;
          this._userLogHandler = null;
          instances.push(this);
        }
        Object.defineProperty(Logger3.prototype, "logLevel", {
          get: function() {
            return this._logLevel;
          },
          set: function(val) {
            if (!(val in exports.LogLevel)) {
              throw new TypeError('Invalid value "' + val + '" assigned to `logLevel`');
            }
            this._logLevel = val;
          },
          enumerable: false,
          configurable: true
        });
        Logger3.prototype.setLogLevel = function(val) {
          this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
        };
        Object.defineProperty(Logger3.prototype, "logHandler", {
          get: function() {
            return this._logHandler;
          },
          set: function(val) {
            if (typeof val !== "function") {
              throw new TypeError("Value assigned to `logHandler` must be a function");
            }
            this._logHandler = val;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Logger3.prototype, "userLogHandler", {
          get: function() {
            return this._userLogHandler;
          },
          set: function(val) {
            this._userLogHandler = val;
          },
          enumerable: false,
          configurable: true
        });
        Logger3.prototype.debug = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays2([this, exports.LogLevel.DEBUG], args));
          this._logHandler.apply(this, __spreadArrays2([this, exports.LogLevel.DEBUG], args));
        };
        Logger3.prototype.log = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays2([this, exports.LogLevel.VERBOSE], args));
          this._logHandler.apply(this, __spreadArrays2([this, exports.LogLevel.VERBOSE], args));
        };
        Logger3.prototype.info = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays2([this, exports.LogLevel.INFO], args));
          this._logHandler.apply(this, __spreadArrays2([this, exports.LogLevel.INFO], args));
        };
        Logger3.prototype.warn = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays2([this, exports.LogLevel.WARN], args));
          this._logHandler.apply(this, __spreadArrays2([this, exports.LogLevel.WARN], args));
        };
        Logger3.prototype.error = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays2([this, exports.LogLevel.ERROR], args));
          this._logHandler.apply(this, __spreadArrays2([this, exports.LogLevel.ERROR], args));
        };
        return Logger3;
      }();
      function setLogLevel(level) {
        instances.forEach(function(inst) {
          inst.setLogLevel(level);
        });
      }
      function setUserLogHandler(logCallback, options) {
        var _loop_1 = function(instance2) {
          var customLogLevel = null;
          if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
          }
          if (logCallback === null) {
            instance2.userLogHandler = null;
          } else {
            instance2.userLogHandler = function(instance3, level) {
              var args = [];
              for (var _i2 = 2; _i2 < arguments.length; _i2++) {
                args[_i2 - 2] = arguments[_i2];
              }
              var message = args.map(function(arg) {
                if (arg == null) {
                  return null;
                } else if (typeof arg === "string") {
                  return arg;
                } else if (typeof arg === "number" || typeof arg === "boolean") {
                  return arg.toString();
                } else if (arg instanceof Error) {
                  return arg.message;
                } else {
                  try {
                    return JSON.stringify(arg);
                  } catch (ignored) {
                    return null;
                  }
                }
              }).filter(function(arg) {
                return arg;
              }).join(" ");
              if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance3.logLevel)) {
                logCallback({
                  level: exports.LogLevel[level].toLowerCase(),
                  message,
                  args,
                  type: instance3.name
                });
              }
            };
          }
        };
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
          var instance = instances_1[_i];
          _loop_1(instance);
        }
      }
      exports.Logger = Logger2;
      exports.setLogLevel = setLogLevel;
      exports.setUserLogHandler = setUserLogHandler;
    }
  });

  // node_modules/@firebase/app/dist/index.cjs.js
  var require_index_cjs4 = __commonJS({
    "node_modules/@firebase/app/dist/index.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib2 = require_tslib();
      var util = require_index_cjs();
      var component = require_index_cjs2();
      var logger$1 = require_index_cjs3();
      var _a3;
      var ERRORS2 = (_a3 = {}, _a3["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", _a3["bad-app-name"] = "Illegal App name: '{$appName}", _a3["duplicate-app"] = "Firebase App named '{$appName}' already exists", _a3["app-deleted"] = "Firebase App named '{$appName}' already deleted", _a3["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a3["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", _a3);
      var ERROR_FACTORY3 = new util.ErrorFactory("app", "Firebase", ERRORS2);
      var name$1 = "@firebase/app";
      var version3 = "0.6.11";
      var name$2 = "@firebase/analytics";
      var name$3 = "@firebase/auth";
      var name$4 = "@firebase/database";
      var name$5 = "@firebase/functions";
      var name$6 = "@firebase/installations";
      var name$7 = "@firebase/messaging";
      var name$8 = "@firebase/performance";
      var name$9 = "@firebase/remote-config";
      var name$a = "@firebase/storage";
      var name$b = "@firebase/firestore";
      var name$c = "firebase-wrapper";
      var _a$1;
      var DEFAULT_ENTRY_NAME = "[DEFAULT]";
      var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$1] = "fire-core", _a$1[name$2] = "fire-analytics", _a$1[name$3] = "fire-auth", _a$1[name$4] = "fire-rtdb", _a$1[name$5] = "fire-fn", _a$1[name$6] = "fire-iid", _a$1[name$7] = "fire-fcm", _a$1[name$8] = "fire-perf", _a$1[name$9] = "fire-rc", _a$1[name$a] = "fire-gcs", _a$1[name$b] = "fire-fst", _a$1["fire-js"] = "fire-js", _a$1[name$c] = "fire-js-all", _a$1);
      var logger2 = new logger$1.Logger("@firebase/app");
      var FirebaseAppImpl = function() {
        function FirebaseAppImpl2(options, config, firebase_) {
          var e_1, _a4;
          var _this = this;
          this.firebase_ = firebase_;
          this.isDeleted_ = false;
          this.name_ = config.name;
          this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
          this.options_ = util.deepCopy(options);
          this.container = new component.ComponentContainer(config.name);
          this._addComponent(new component.Component("app", function() {
            return _this;
          }, "PUBLIC"));
          try {
            for (var _b = tslib2.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var component$1 = _c.value;
              this._addComponent(component$1);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a4 = _b.return))
                _a4.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }
        Object.defineProperty(FirebaseAppImpl2.prototype, "automaticDataCollectionEnabled", {
          get: function() {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
          },
          set: function(val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl2.prototype, "name", {
          get: function() {
            this.checkDestroyed_();
            return this.name_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl2.prototype, "options", {
          get: function() {
            this.checkDestroyed_();
            return this.options_;
          },
          enumerable: false,
          configurable: true
        });
        FirebaseAppImpl2.prototype.delete = function() {
          var _this = this;
          return new Promise(function(resolve) {
            _this.checkDestroyed_();
            resolve();
          }).then(function() {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function(provider) {
              return provider.delete();
            }));
          }).then(function() {
            _this.isDeleted_ = true;
          });
        };
        FirebaseAppImpl2.prototype._getService = function(name4, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }
          this.checkDestroyed_();
          return this.container.getProvider(name4).getImmediate({
            identifier: instanceIdentifier
          });
        };
        FirebaseAppImpl2.prototype._removeServiceInstance = function(name4, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }
          this.container.getProvider(name4).clearInstance(instanceIdentifier);
        };
        FirebaseAppImpl2.prototype._addComponent = function(component2) {
          try {
            this.container.addComponent(component2);
          } catch (e) {
            logger2.debug("Component " + component2.name + " failed to register with FirebaseApp " + this.name, e);
          }
        };
        FirebaseAppImpl2.prototype._addOrOverwriteComponent = function(component2) {
          this.container.addOrOverwriteComponent(component2);
        };
        FirebaseAppImpl2.prototype.checkDestroyed_ = function() {
          if (this.isDeleted_) {
            throw ERROR_FACTORY3.create("app-deleted", { appName: this.name_ });
          }
        };
        return FirebaseAppImpl2;
      }();
      FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");
      var version$1 = "7.20.0";
      function createFirebaseNamespaceCore(firebaseAppImpl) {
        var apps = {};
        var components = /* @__PURE__ */ new Map();
        var namespace = {
          __esModule: true,
          initializeApp: initializeApp2,
          app,
          registerVersion,
          setLogLevel: logger$1.setLogLevel,
          onLog,
          apps: null,
          SDK_VERSION: version$1,
          INTERNAL: {
            registerComponent,
            removeApp,
            components,
            useAsService
          }
        };
        namespace["default"] = namespace;
        Object.defineProperty(namespace, "apps", {
          get: getApps
        });
        function removeApp(name4) {
          delete apps[name4];
        }
        function app(name4) {
          name4 = name4 || DEFAULT_ENTRY_NAME;
          if (!util.contains(apps, name4)) {
            throw ERROR_FACTORY3.create("no-app", { appName: name4 });
          }
          return apps[name4];
        }
        app["App"] = firebaseAppImpl;
        function initializeApp2(options, rawConfig) {
          if (rawConfig === void 0) {
            rawConfig = {};
          }
          if (typeof rawConfig !== "object" || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
          }
          var config = rawConfig;
          if (config.name === void 0) {
            config.name = DEFAULT_ENTRY_NAME;
          }
          var name4 = config.name;
          if (typeof name4 !== "string" || !name4) {
            throw ERROR_FACTORY3.create("bad-app-name", {
              appName: String(name4)
            });
          }
          if (util.contains(apps, name4)) {
            throw ERROR_FACTORY3.create("duplicate-app", { appName: name4 });
          }
          var app2 = new firebaseAppImpl(options, config, namespace);
          apps[name4] = app2;
          return app2;
        }
        function getApps() {
          return Object.keys(apps).map(function(name4) {
            return apps[name4];
          });
        }
        function registerComponent(component2) {
          var e_1, _a4;
          var componentName = component2.name;
          if (components.has(componentName)) {
            logger2.debug("There were multiple attempts to register component " + componentName + ".");
            return component2.type === "PUBLIC" ? namespace[componentName] : null;
          }
          components.set(componentName, component2);
          if (component2.type === "PUBLIC") {
            var serviceNamespace = function(appArg) {
              if (appArg === void 0) {
                appArg = app();
              }
              if (typeof appArg[componentName] !== "function") {
                throw ERROR_FACTORY3.create("invalid-app-argument", {
                  appName: componentName
                });
              }
              return appArg[componentName]();
            };
            if (component2.serviceProps !== void 0) {
              util.deepExtend(serviceNamespace, component2.serviceProps);
            }
            namespace[componentName] = serviceNamespace;
            firebaseAppImpl.prototype[componentName] = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var serviceFxn = this._getService.bind(this, componentName);
              return serviceFxn.apply(this, component2.multipleInstances ? args : []);
            };
          }
          try {
            for (var _b = tslib2.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var appName = _c.value;
              apps[appName]._addComponent(component2);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a4 = _b.return))
                _a4.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return component2.type === "PUBLIC" ? namespace[componentName] : null;
        }
        function registerVersion(libraryKeyOrName, version4, variant) {
          var _a4;
          var library = (_a4 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a4 !== void 0 ? _a4 : libraryKeyOrName;
          if (variant) {
            library += "-" + variant;
          }
          var libraryMismatch = library.match(/\s|\//);
          var versionMismatch = version4.match(/\s|\//);
          if (libraryMismatch || versionMismatch) {
            var warning = [
              'Unable to register library "' + library + '" with version "' + version4 + '":'
            ];
            if (libraryMismatch) {
              warning.push('library name "' + library + '" contains illegal characters (whitespace or "/")');
            }
            if (libraryMismatch && versionMismatch) {
              warning.push("and");
            }
            if (versionMismatch) {
              warning.push('version name "' + version4 + '" contains illegal characters (whitespace or "/")');
            }
            logger2.warn(warning.join(" "));
            return;
          }
          registerComponent(new component.Component(library + "-version", function() {
            return { library, version: version4 };
          }, "VERSION"));
        }
        function onLog(logCallback, options) {
          if (logCallback !== null && typeof logCallback !== "function") {
            throw ERROR_FACTORY3.create("invalid-log-argument", {
              appName: name
            });
          }
          logger$1.setUserLogHandler(logCallback, options);
        }
        function useAsService(app2, name4) {
          if (name4 === "serverAuth") {
            return null;
          }
          var useService = name4;
          return useService;
        }
        return namespace;
      }
      function createFirebaseNamespace() {
        var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
        namespace.INTERNAL = tslib2.__assign(tslib2.__assign({}, namespace.INTERNAL), {
          createFirebaseNamespace,
          extendNamespace,
          createSubscribe: util.createSubscribe,
          ErrorFactory: util.ErrorFactory,
          deepExtend: util.deepExtend
        });
        function extendNamespace(props) {
          util.deepExtend(namespace, props);
        }
        return namespace;
      }
      var firebase4 = createFirebaseNamespace();
      var PlatformLoggerService = function() {
        function PlatformLoggerService2(container) {
          this.container = container;
        }
        PlatformLoggerService2.prototype.getPlatformInfoString = function() {
          var providers = this.container.getProviders();
          return providers.map(function(provider) {
            if (isVersionServiceProvider(provider)) {
              var service = provider.getImmediate();
              return service.library + "/" + service.version;
            } else {
              return null;
            }
          }).filter(function(logString) {
            return logString;
          }).join(" ");
        };
        return PlatformLoggerService2;
      }();
      function isVersionServiceProvider(provider) {
        var component2 = provider.getComponent();
        return (component2 === null || component2 === void 0 ? void 0 : component2.type) === "VERSION";
      }
      function registerCoreComponents(firebase5, variant) {
        firebase5.INTERNAL.registerComponent(new component.Component("platform-logger", function(container) {
          return new PlatformLoggerService(container);
        }, "PRIVATE"));
        firebase5.registerVersion(name$1, version3, variant);
        firebase5.registerVersion("fire-js", "");
      }
      if (util.isBrowser() && self.firebase !== void 0) {
        logger2.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
        sdkVersion = self.firebase.SDK_VERSION;
        if (sdkVersion && sdkVersion.indexOf("LITE") >= 0) {
          logger2.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
        }
      }
      var sdkVersion;
      var initializeApp = firebase4.initializeApp;
      firebase4.initializeApp = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (util.isNode()) {
          logger2.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/rollup-plugin-node-resolve
      `);
        }
        return initializeApp.apply(void 0, args);
      };
      var firebase$1 = firebase4;
      registerCoreComponents(firebase$1);
      exports.default = firebase$1;
      exports.firebase = firebase$1;
    }
  });

  // node_modules/firebase/app/dist/index.cjs.js
  var require_index_cjs5 = __commonJS({
    "node_modules/firebase/app/dist/index.cjs.js"(exports, module) {
      "use strict";
      var firebase4 = require_index_cjs4();
      function _interopDefaultLegacy(e) {
        return e && typeof e === "object" && "default" in e ? e : { "default": e };
      }
      var firebase__default = /* @__PURE__ */ _interopDefaultLegacy(firebase4);
      var name4 = "firebase";
      var version3 = "7.24.0";
      firebase__default["default"].registerVersion(name4, version3, "app");
      module.exports = firebase__default["default"];
    }
  });

  // node_modules/idb/build/idb.js
  var require_idb = __commonJS({
    "node_modules/idb/build/idb.js"(exports, module) {
      (function(global2, factory2) {
        typeof exports === "object" && typeof module !== "undefined" ? factory2(exports) : typeof define === "function" && define.amd ? define(["exports"], factory2) : (global2 = global2 || self, factory2(global2.idb = {}));
      })(exports, function(exports2) {
        "use strict";
        function toArray(arr) {
          return Array.prototype.slice.call(arr);
        }
        function promisifyRequest(request) {
          return new Promise(function(resolve, reject) {
            request.onsuccess = function() {
              resolve(request.result);
            };
            request.onerror = function() {
              reject(request.error);
            };
          });
        }
        function promisifyRequestCall(obj, method, args) {
          var request;
          var p = new Promise(function(resolve, reject) {
            request = obj[method].apply(obj, args);
            promisifyRequest(request).then(resolve, reject);
          });
          p.request = request;
          return p;
        }
        function promisifyCursorRequestCall(obj, method, args) {
          var p = promisifyRequestCall(obj, method, args);
          return p.then(function(value) {
            if (!value)
              return;
            return new Cursor(value, p.request);
          });
        }
        function proxyProperties(ProxyClass, targetProp, properties) {
          properties.forEach(function(prop) {
            Object.defineProperty(ProxyClass.prototype, prop, {
              get: function() {
                return this[targetProp][prop];
              },
              set: function(val) {
                this[targetProp][prop] = val;
              }
            });
          });
        }
        function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function(prop) {
            if (!(prop in Constructor.prototype))
              return;
            ProxyClass.prototype[prop] = function() {
              return promisifyRequestCall(this[targetProp], prop, arguments);
            };
          });
        }
        function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function(prop) {
            if (!(prop in Constructor.prototype))
              return;
            ProxyClass.prototype[prop] = function() {
              return this[targetProp][prop].apply(this[targetProp], arguments);
            };
          });
        }
        function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function(prop) {
            if (!(prop in Constructor.prototype))
              return;
            ProxyClass.prototype[prop] = function() {
              return promisifyCursorRequestCall(this[targetProp], prop, arguments);
            };
          });
        }
        function Index(index) {
          this._index = index;
        }
        proxyProperties(Index, "_index", [
          "name",
          "keyPath",
          "multiEntry",
          "unique"
        ]);
        proxyRequestMethods(Index, "_index", IDBIndex, [
          "get",
          "getKey",
          "getAll",
          "getAllKeys",
          "count"
        ]);
        proxyCursorRequestMethods(Index, "_index", IDBIndex, [
          "openCursor",
          "openKeyCursor"
        ]);
        function Cursor(cursor, request) {
          this._cursor = cursor;
          this._request = request;
        }
        proxyProperties(Cursor, "_cursor", [
          "direction",
          "key",
          "primaryKey",
          "value"
        ]);
        proxyRequestMethods(Cursor, "_cursor", IDBCursor, [
          "update",
          "delete"
        ]);
        ["advance", "continue", "continuePrimaryKey"].forEach(function(methodName) {
          if (!(methodName in IDBCursor.prototype))
            return;
          Cursor.prototype[methodName] = function() {
            var cursor = this;
            var args = arguments;
            return Promise.resolve().then(function() {
              cursor._cursor[methodName].apply(cursor._cursor, args);
              return promisifyRequest(cursor._request).then(function(value) {
                if (!value)
                  return;
                return new Cursor(value, cursor._request);
              });
            });
          };
        });
        function ObjectStore(store) {
          this._store = store;
        }
        ObjectStore.prototype.createIndex = function() {
          return new Index(this._store.createIndex.apply(this._store, arguments));
        };
        ObjectStore.prototype.index = function() {
          return new Index(this._store.index.apply(this._store, arguments));
        };
        proxyProperties(ObjectStore, "_store", [
          "name",
          "keyPath",
          "indexNames",
          "autoIncrement"
        ]);
        proxyRequestMethods(ObjectStore, "_store", IDBObjectStore, [
          "put",
          "add",
          "delete",
          "clear",
          "get",
          "getAll",
          "getKey",
          "getAllKeys",
          "count"
        ]);
        proxyCursorRequestMethods(ObjectStore, "_store", IDBObjectStore, [
          "openCursor",
          "openKeyCursor"
        ]);
        proxyMethods(ObjectStore, "_store", IDBObjectStore, [
          "deleteIndex"
        ]);
        function Transaction(idbTransaction) {
          this._tx = idbTransaction;
          this.complete = new Promise(function(resolve, reject) {
            idbTransaction.oncomplete = function() {
              resolve();
            };
            idbTransaction.onerror = function() {
              reject(idbTransaction.error);
            };
            idbTransaction.onabort = function() {
              reject(idbTransaction.error);
            };
          });
        }
        Transaction.prototype.objectStore = function() {
          return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
        };
        proxyProperties(Transaction, "_tx", [
          "objectStoreNames",
          "mode"
        ]);
        proxyMethods(Transaction, "_tx", IDBTransaction, [
          "abort"
        ]);
        function UpgradeDB(db, oldVersion, transaction) {
          this._db = db;
          this.oldVersion = oldVersion;
          this.transaction = new Transaction(transaction);
        }
        UpgradeDB.prototype.createObjectStore = function() {
          return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
        };
        proxyProperties(UpgradeDB, "_db", [
          "name",
          "version",
          "objectStoreNames"
        ]);
        proxyMethods(UpgradeDB, "_db", IDBDatabase, [
          "deleteObjectStore",
          "close"
        ]);
        function DB(db) {
          this._db = db;
        }
        DB.prototype.transaction = function() {
          return new Transaction(this._db.transaction.apply(this._db, arguments));
        };
        proxyProperties(DB, "_db", [
          "name",
          "version",
          "objectStoreNames"
        ]);
        proxyMethods(DB, "_db", IDBDatabase, [
          "close"
        ]);
        ["openCursor", "openKeyCursor"].forEach(function(funcName) {
          [ObjectStore, Index].forEach(function(Constructor) {
            if (!(funcName in Constructor.prototype))
              return;
            Constructor.prototype[funcName.replace("open", "iterate")] = function() {
              var args = toArray(arguments);
              var callback = args[args.length - 1];
              var nativeObject = this._store || this._index;
              var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
              request.onsuccess = function() {
                callback(request.result);
              };
            };
          });
        });
        [Index, ObjectStore].forEach(function(Constructor) {
          if (Constructor.prototype.getAll)
            return;
          Constructor.prototype.getAll = function(query, count) {
            var instance = this;
            var items = [];
            return new Promise(function(resolve) {
              instance.iterateCursor(query, function(cursor) {
                if (!cursor) {
                  resolve(items);
                  return;
                }
                items.push(cursor.value);
                if (count !== void 0 && items.length == count) {
                  resolve(items);
                  return;
                }
                cursor.continue();
              });
            });
          };
        });
        function openDb2(name4, version3, upgradeCallback) {
          var p = promisifyRequestCall(indexedDB, "open", [name4, version3]);
          var request = p.request;
          if (request) {
            request.onupgradeneeded = function(event) {
              if (upgradeCallback) {
                upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
              }
            };
          }
          return p.then(function(db) {
            return new DB(db);
          });
        }
        function deleteDb(name4) {
          return promisifyRequestCall(indexedDB, "deleteDatabase", [name4]);
        }
        exports2.openDb = openDb2;
        exports2.deleteDb = deleteDb;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // app.js
  var firebase3 = __toESM(require_index_cjs5());

  // node_modules/@firebase/auth/dist/auth.js
  (function() {
    var firebase4 = require_index_cjs4().default;
    var k, aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    };
    function ba(a) {
      a = [typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global, a];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
          return c;
      }
      return globalThis;
    }
    var ca = ba(this);
    function da(a, b) {
      if (b) {
        var c = ca;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in c || (c[e] = {});
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && b != null && aa(c, a, { configurable: true, writable: true, value: b });
      }
    }
    function ea(a) {
      var b = 0;
      return function() {
        return b < a.length ? { done: false, value: a[b++] } : { done: true };
      };
    }
    function fa(a) {
      var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: ea(a) };
    }
    da("Promise", function(a) {
      function b(g) {
        this.b = 0;
        this.c = void 0;
        this.a = [];
        var h = this.f();
        try {
          g(h.resolve, h.reject);
        } catch (m) {
          h.reject(m);
        }
      }
      function c() {
        this.a = null;
      }
      function d(g) {
        return g instanceof b ? g : new b(function(h) {
          h(g);
        });
      }
      if (a)
        return a;
      c.prototype.b = function(g) {
        if (this.a == null) {
          this.a = [];
          var h = this;
          this.c(function() {
            h.g();
          });
        }
        this.a.push(g);
      };
      var e = ca.setTimeout;
      c.prototype.c = function(g) {
        e(g, 0);
      };
      c.prototype.g = function() {
        for (; this.a && this.a.length; ) {
          var g = this.a;
          this.a = [];
          for (var h = 0; h < g.length; ++h) {
            var m = g[h];
            g[h] = null;
            try {
              m();
            } catch (p) {
              this.f(p);
            }
          }
        }
        this.a = null;
      };
      c.prototype.f = function(g) {
        this.c(function() {
          throw g;
        });
      };
      b.prototype.f = function() {
        function g(p) {
          return function(v) {
            m || (m = true, p.call(h, v));
          };
        }
        var h = this, m = false;
        return { resolve: g(this.v), reject: g(this.g) };
      };
      b.prototype.v = function(g) {
        if (g === this)
          this.g(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b)
          this.o(g);
        else {
          a:
            switch (typeof g) {
              case "object":
                var h = g != null;
                break a;
              case "function":
                h = true;
                break a;
              default:
                h = false;
            }
          h ? this.m(g) : this.h(g);
        }
      };
      b.prototype.m = function(g) {
        var h = void 0;
        try {
          h = g.then;
        } catch (m) {
          this.g(m);
          return;
        }
        typeof h == "function" ? this.u(h, g) : this.h(g);
      };
      b.prototype.g = function(g) {
        this.i(2, g);
      };
      b.prototype.h = function(g) {
        this.i(1, g);
      };
      b.prototype.i = function(g, h) {
        if (this.b != 0)
          throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
        this.b = g;
        this.c = h;
        this.l();
      };
      b.prototype.l = function() {
        if (this.a != null) {
          for (var g = 0; g < this.a.length; ++g)
            f.b(this.a[g]);
          this.a = null;
        }
      };
      var f = new c();
      b.prototype.o = function(g) {
        var h = this.f();
        g.Pa(h.resolve, h.reject);
      };
      b.prototype.u = function(g, h) {
        var m = this.f();
        try {
          g.call(h, m.resolve, m.reject);
        } catch (p) {
          m.reject(p);
        }
      };
      b.prototype.then = function(g, h) {
        function m(A, Q) {
          return typeof A == "function" ? function(xa) {
            try {
              p(A(xa));
            } catch (yd) {
              v(yd);
            }
          } : Q;
        }
        var p, v, B = new b(function(A, Q) {
          p = A;
          v = Q;
        });
        this.Pa(m(g, p), m(h, v));
        return B;
      };
      b.prototype.catch = function(g) {
        return this.then(void 0, g);
      };
      b.prototype.Pa = function(g, h) {
        function m() {
          switch (p.b) {
            case 1:
              g(p.c);
              break;
            case 2:
              h(p.c);
              break;
            default:
              throw Error("Unexpected state: " + p.b);
          }
        }
        var p = this;
        this.a == null ? f.b(m) : this.a.push(m);
      };
      b.resolve = d;
      b.reject = function(g) {
        return new b(function(h, m) {
          m(g);
        });
      };
      b.race = function(g) {
        return new b(function(h, m) {
          for (var p = fa(g), v = p.next(); !v.done; v = p.next())
            d(v.value).Pa(h, m);
        });
      };
      b.all = function(g) {
        var h = fa(g), m = h.next();
        return m.done ? d([]) : new b(function(p, v) {
          function B(xa) {
            return function(yd) {
              A[xa] = yd;
              Q--;
              Q == 0 && p(A);
            };
          }
          var A = [], Q = 0;
          do
            A.push(void 0), Q++, d(m.value).Pa(B(A.length - 1), v), m = h.next();
          while (!m.done);
        });
      };
      return b;
    });
    var ha = ha || {}, l = this || self, ia = /^[\w+/_-]+[=]{0,2}$/, ja = null;
    function ka() {
    }
    function la(a) {
      var b = typeof a;
      if (b == "object")
        if (a) {
          if (a instanceof Array)
            return "array";
          if (a instanceof Object)
            return b;
          var c = Object.prototype.toString.call(a);
          if (c == "[object Window]")
            return "object";
          if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice"))
            return "array";
          if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))
            return "function";
        } else
          return "null";
      else if (b == "function" && typeof a.call == "undefined")
        return "object";
      return b;
    }
    function ma(a) {
      var b = la(a);
      return b == "array" || b == "object" && typeof a.length == "number";
    }
    function na(a) {
      return la(a) == "function";
    }
    function n(a) {
      var b = typeof a;
      return b == "object" && a != null || b == "function";
    }
    function oa(a) {
      return Object.prototype.hasOwnProperty.call(a, pa) && a[pa] || (a[pa] = ++qa);
    }
    var pa = "closure_uid_" + (1e9 * Math.random() >>> 0), qa = 0;
    function ra(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }
    function sa(a, b, c) {
      if (!a)
        throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function() {
        return a.apply(b, arguments);
      };
    }
    function q(a, b, c) {
      Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? q = ra : q = sa;
      return q.apply(null, arguments);
    }
    function ta(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    }
    var ua = Date.now || function() {
      return +new Date();
    };
    function r(a, b) {
      function c() {
      }
      c.prototype = b.prototype;
      a.$a = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    }
    ;
    function t(a, b, c) {
      this.code = va + a;
      this.message = b || wa[a] || "";
      this.a = c || null;
    }
    r(t, Error);
    t.prototype.w = function() {
      var a = { code: this.code, message: this.message };
      this.a && (a.serverResponse = this.a);
      return a;
    };
    t.prototype.toJSON = function() {
      return this.w();
    };
    function ya(a) {
      var b = a && a.code;
      return b ? new t(b.substring(va.length), a.message, a.serverResponse) : null;
    }
    var va = "auth/", wa = {
      "admin-restricted-operation": "This operation is restricted to administrators only.",
      "argument-error": "",
      "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
      "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
      "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
      "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
      "cordova-not-ready": "Cordova framework is not ready.",
      "cors-unsupported": "This browser is not supported.",
      "credential-already-in-use": "This credential is already associated with a different user account.",
      "custom-token-mismatch": "The custom token corresponds to a different audience.",
      "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
      "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
      "email-change-needs-verification": "Multi-factor users must always have a verified email.",
      "email-already-in-use": "The email address is already in use by another account.",
      "expired-action-code": "The action code has expired. ",
      "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
      "internal-error": "An internal error has occurred.",
      "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
      "invalid-app-id": "The mobile app identifier is not registed for the current project.",
      "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
      "invalid-auth-event": "An internal error has occurred.",
      "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
      "invalid-continue-uri": "The continue URL provided in the request is invalid.",
      "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
      "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
      "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
      "invalid-email": "The email address is badly formatted.",
      "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
      "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
      "invalid-credential": "The supplied auth credential is malformed or has expired.",
      "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
      "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
      "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
      "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
      "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
      "wrong-password": "The password is invalid or the user does not have a password.",
      "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
      "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
      "invalid-provider-id": "The specified provider ID is invalid.",
      "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
      "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
      "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
      "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
      "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
      "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
      "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
      "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
      "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
      "missing-continue-uri": "A continue URL must be provided in the request.",
      "missing-iframe-start": "An internal error has occurred.",
      "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
      "missing-multi-factor-info": "No second factor identifier is provided.",
      "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
      "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
      "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
      "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
      "app-deleted": "This instance of FirebaseApp has been deleted.",
      "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
      "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
      "no-auth-event": "An internal error has occurred.",
      "no-such-provider": "User was not linked to an account with the given provider.",
      "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
      "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
      "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
      "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
      "provider-already-linked": "User can only be linked to one identity for the given provider.",
      "quota-exceeded": "The project's quota for this operation has been exceeded.",
      "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
      "redirect-operation-pending": "A redirect sign-in operation is already pending.",
      "rejected-credential": "The request contains malformed or mismatching credentials.",
      "second-factor-already-in-use": "The second factor is already enrolled on this account.",
      "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
      "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
      timeout: "The operation has timed out.",
      "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
      "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
      "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
      "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
      "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
      "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
      "unverified-email": "The operation requires a verified email.",
      "user-cancelled": "The user did not grant your application the permissions it requested.",
      "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
      "user-disabled": "The user account has been disabled by an administrator.",
      "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
      "user-signed-out": "",
      "weak-password": "The password must be 6 characters long or more.",
      "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
    };
    var za = { kd: { Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "b" }, rd: { Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", Ya: "https://securetoken.googleapis.com/v1/token", Va: "https://identitytoolkit.googleapis.com/v2/", id: "p" }, td: {
      Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
      Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
      Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
      id: "s"
    }, ud: { Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token", Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/", id: "t" } };
    function Aa(a) {
      for (var b in za)
        if (za[b].id === a)
          return a = za[b], { firebaseEndpoint: a.Sa, secureTokenEndpoint: a.Ya, identityPlatformEndpoint: a.Va };
      return null;
    }
    var Ba;
    Ba = Aa("__EID__") ? "__EID__" : void 0;
    function Ca(a) {
      if (!a)
        return false;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return false;
      }
    }
    ;
    function u(a) {
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, u);
      else {
        var b = Error().stack;
        b && (this.stack = b);
      }
      a && (this.message = String(a));
    }
    r(u, Error);
    u.prototype.name = "CustomError";
    function Da(a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
      u.call(this, c + a[d]);
    }
    r(Da, u);
    Da.prototype.name = "AssertionError";
    function Ea(a, b) {
      throw new Da("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    ;
    function Fa(a, b) {
      this.c = a;
      this.f = b;
      this.b = 0;
      this.a = null;
    }
    Fa.prototype.get = function() {
      if (0 < this.b) {
        this.b--;
        var a = this.a;
        this.a = a.next;
        a.next = null;
      } else
        a = this.c();
      return a;
    };
    function Ga(a, b) {
      a.f(b);
      100 > a.b && (a.b++, b.next = a.a, a.a = b);
    }
    ;
    function Ha() {
      this.b = this.a = null;
    }
    var Ja = new Fa(function() {
      return new Ia();
    }, function(a) {
      a.reset();
    });
    Ha.prototype.add = function(a, b) {
      var c = Ja.get();
      c.set(a, b);
      this.b ? this.b.next = c : this.a = c;
      this.b = c;
    };
    function Ka() {
      var a = La, b = null;
      a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
      return b;
    }
    function Ia() {
      this.next = this.b = this.a = null;
    }
    Ia.prototype.set = function(a, b) {
      this.a = a;
      this.b = b;
      this.next = null;
    };
    Ia.prototype.reset = function() {
      this.next = this.b = this.a = null;
    };
    var Ma = Array.prototype.indexOf ? function(a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function(a, b) {
      if (typeof a === "string")
        return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b)
          return c;
      return -1;
    }, w = Array.prototype.forEach ? function(a, b, c) {
      Array.prototype.forEach.call(a, b, c);
    } : function(a, b, c) {
      for (var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a);
    };
    function Na(a, b) {
      for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
        d in c && b.call(void 0, c[d], d, a);
    }
    var Oa = Array.prototype.filter ? function(a, b) {
      return Array.prototype.filter.call(a, b, void 0);
    } : function(a, b) {
      for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
        if (g in f) {
          var h = f[g];
          b.call(void 0, h, g, a) && (d[e++] = h);
        }
      return d;
    }, Pa = Array.prototype.map ? function(a, b) {
      return Array.prototype.map.call(a, b, void 0);
    } : function(a, b) {
      for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++)
        f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    }, Qa = Array.prototype.some ? function(a, b) {
      return Array.prototype.some.call(a, b, void 0);
    } : function(a, b) {
      for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a))
          return true;
      return false;
    };
    function Ra(a) {
      a: {
        var b = Sa;
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
          }
        b = -1;
      }
      return 0 > b ? null : typeof a === "string" ? a.charAt(b) : a[b];
    }
    function Ta(a, b) {
      return 0 <= Ma(a, b);
    }
    function Ua(a, b) {
      b = Ma(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c;
    }
    function Va(a, b) {
      var c = 0;
      Na(a, function(d, e) {
        b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++;
      });
    }
    function Wa(a) {
      return Array.prototype.concat.apply([], arguments);
    }
    function Xa(a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
          c[d] = a[d];
        return c;
      }
      return [];
    }
    ;
    var Ya = String.prototype.trim ? function(a) {
      return a.trim();
    } : function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    }, Za = /&/g, $a = /</g, ab = />/g, bb = /"/g, cb = /'/g, db = /\x00/g, eb = /[\x00&<>"']/;
    function x(a, b) {
      return a.indexOf(b) != -1;
    }
    function fb(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    ;
    var gb;
    a: {
      var hb = l.navigator;
      if (hb) {
        var ib = hb.userAgent;
        if (ib) {
          gb = ib;
          break a;
        }
      }
      gb = "";
    }
    function y(a) {
      return x(gb, a);
    }
    ;
    function jb(a, b) {
      for (var c in a)
        b.call(void 0, a[c], c, a);
    }
    function kb(a) {
      for (var b in a)
        return false;
      return true;
    }
    function lb(a) {
      var b = {}, c;
      for (c in a)
        b[c] = a[c];
      return b;
    }
    var mb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function z(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
          a[c] = d[c];
        for (var f = 0; f < mb.length; f++)
          c = mb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }
    ;
    function nb(a, b) {
      a: {
        try {
          var c = a && a.ownerDocument, d = c && (c.defaultView || c.parentWindow);
          d = d || l;
          if (d.Element && d.Location) {
            var e = d;
            break a;
          }
        } catch (g) {
        }
        e = null;
      }
      if (e && typeof e[b] != "undefined" && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
        if (n(a))
          try {
            var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
          } catch (g) {
            f = "<object could not be stringified>";
          }
        else
          f = a === void 0 ? "undefined" : a === null ? "null" : typeof a;
        Ea("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f);
      }
    }
    ;
    function ob(a, b) {
      this.a = a === pb && b || "";
      this.b = qb;
    }
    ob.prototype.sa = true;
    ob.prototype.ra = function() {
      return this.a;
    };
    ob.prototype.toString = function() {
      return "Const{" + this.a + "}";
    };
    function rb(a) {
      if (a instanceof ob && a.constructor === ob && a.b === qb)
        return a.a;
      Ea("expected object of type Const, got '" + a + "'");
      return "type_error:Const";
    }
    var qb = {}, pb = {}, sb = new ob(pb, "");
    function tb(a, b) {
      this.a = a === ub && b || "";
      this.b = vb;
    }
    tb.prototype.sa = true;
    tb.prototype.ra = function() {
      return this.a.toString();
    };
    tb.prototype.toString = function() {
      return "TrustedResourceUrl{" + this.a + "}";
    };
    function wb(a) {
      if (a instanceof tb && a.constructor === tb && a.b === vb)
        return a.a;
      Ea("expected object of type TrustedResourceUrl, got '" + a + "' of type " + la(a));
      return "type_error:TrustedResourceUrl";
    }
    function xb(a, b) {
      var c = rb(a);
      if (!yb.test(c))
        throw Error("Invalid TrustedResourceUrl format: " + c);
      a = c.replace(zb, function(d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
        d = b[e];
        return d instanceof ob ? rb(d) : encodeURIComponent(String(d));
      });
      return new tb(ub, a);
    }
    var zb = /%{(\w+)}/g, yb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, vb = {}, ub = {};
    function Ab(a, b) {
      this.a = a === Bb && b || "";
      this.b = Cb;
    }
    Ab.prototype.sa = true;
    Ab.prototype.ra = function() {
      return this.a.toString();
    };
    Ab.prototype.toString = function() {
      return "SafeUrl{" + this.a + "}";
    };
    function Db(a) {
      if (a instanceof Ab && a.constructor === Ab && a.b === Cb)
        return a.a;
      Ea("expected object of type SafeUrl, got '" + a + "' of type " + la(a));
      return "type_error:SafeUrl";
    }
    var Eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Fb(a) {
      if (a instanceof Ab)
        return a;
      a = typeof a == "object" && a.sa ? a.ra() : String(a);
      Eb.test(a) || (a = "about:invalid#zClosurez");
      return new Ab(Bb, a);
    }
    var Cb = {}, Bb = {};
    function Gb() {
      this.a = "";
      this.b = Hb;
    }
    Gb.prototype.sa = true;
    Gb.prototype.ra = function() {
      return this.a.toString();
    };
    Gb.prototype.toString = function() {
      return "SafeHtml{" + this.a + "}";
    };
    function Ib(a) {
      if (a instanceof Gb && a.constructor === Gb && a.b === Hb)
        return a.a;
      Ea("expected object of type SafeHtml, got '" + a + "' of type " + la(a));
      return "type_error:SafeHtml";
    }
    var Hb = {};
    function Jb(a) {
      var b = new Gb();
      b.a = a;
      return b;
    }
    Jb("<!DOCTYPE html>");
    var Kb = Jb("");
    Jb("<br>");
    function Lb(a) {
      var b = new tb(ub, rb(sb));
      nb(a, "HTMLIFrameElement");
      a.src = wb(b).toString();
    }
    function Mb(a, b) {
      nb(a, "HTMLScriptElement");
      a.src = wb(b);
      if (ja === null)
        b: {
          b = l.document;
          if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ia.test(b)) {
            ja = b;
            break b;
          }
          ja = "";
        }
      b = ja;
      b && a.setAttribute("nonce", b);
    }
    ;
    function Nb(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
        d += c.shift() + e.shift();
      return d + c.join("%s");
    }
    function Ob(a) {
      eb.test(a) && (a.indexOf("&") != -1 && (a = a.replace(Za, "&amp;")), a.indexOf("<") != -1 && (a = a.replace($a, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(ab, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(bb, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(cb, "&#39;")), a.indexOf("\0") != -1 && (a = a.replace(db, "&#0;")));
      return a;
    }
    ;
    function Pb(a) {
      Pb[" "](a);
      return a;
    }
    Pb[" "] = ka;
    function Qb(a, b) {
      var c = Rb;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    }
    ;
    var Sb = y("Opera"), Tb = y("Trident") || y("MSIE"), Ub = y("Edge"), Vb = Ub || Tb, Wb = y("Gecko") && !(x(gb.toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"), Xb = x(gb.toLowerCase(), "webkit") && !y("Edge");
    function Yb() {
      var a = l.document;
      return a ? a.documentMode : void 0;
    }
    var Zb;
    a: {
      var $b = "", ac = function() {
        var a = gb;
        if (Wb)
          return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ub)
          return /Edge\/([\d\.]+)/.exec(a);
        if (Tb)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Xb)
          return /WebKit\/(\S+)/.exec(a);
        if (Sb)
          return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();
      ac && ($b = ac ? ac[1] : "");
      if (Tb) {
        var bc = Yb();
        if (bc != null && bc > parseFloat($b)) {
          Zb = String(bc);
          break a;
        }
      }
      Zb = $b;
    }
    var Rb = {};
    function cc(a) {
      return Qb(a, function() {
        for (var b = 0, c = Ya(String(Zb)).split("."), d = Ya(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; b == 0 && f < e; f++) {
          var g = c[f] || "", h = d[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (g[0].length == 0 && h[0].length == 0)
              break;
            b = fb(g[1].length == 0 ? 0 : parseInt(g[1], 10), h[1].length == 0 ? 0 : parseInt(h[1], 10)) || fb(g[2].length == 0, h[2].length == 0) || fb(g[2], h[2]);
            g = g[3];
            h = h[3];
          } while (b == 0);
        }
        return 0 <= b;
      });
    }
    var dc;
    dc = l.document && Tb ? Yb() : void 0;
    try {
      new self.OffscreenCanvas(0, 0).getContext("2d");
    } catch (a) {
    }
    var ec = !Tb || 9 <= Number(dc);
    function fc(a) {
      var b = document;
      return typeof a === "string" ? b.getElementById(a) : a;
    }
    function gc(a, b) {
      jb(b, function(c, d) {
        c && typeof c == "object" && c.sa && (c = c.ra());
        d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : hc.hasOwnProperty(d) ? a.setAttribute(hc[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c;
      });
    }
    var hc = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };
    function ic(a, b, c) {
      var d = arguments, e = document, f = String(d[0]), g = d[1];
      if (!ec && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', Ob(g.name), '"');
        if (g.type) {
          f.push(' type="', Ob(g.type), '"');
          var h = {};
          z(h, g);
          delete h.type;
          g = h;
        }
        f.push(">");
        f = f.join("");
      }
      f = jc(e, f);
      g && (typeof g === "string" ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : gc(f, g));
      2 < d.length && kc(e, f, d);
      return f;
    }
    function kc(a, b, c) {
      function d(g) {
        g && b.appendChild(typeof g === "string" ? a.createTextNode(g) : g);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ma(f) || n(f) && 0 < f.nodeType ? d(f) : w(lc(f) ? Xa(f) : f, d);
      }
    }
    function jc(a, b) {
      b = String(b);
      a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
      return a.createElement(b);
    }
    function lc(a) {
      if (a && typeof a.length == "number") {
        if (n(a))
          return typeof a.item == "function" || typeof a.item == "string";
        if (na(a))
          return typeof a.item == "function";
      }
      return false;
    }
    ;
    function mc(a) {
      l.setTimeout(function() {
        throw a;
      }, 0);
    }
    var nc;
    function oc() {
      var a = l.MessageChannel;
      typeof a === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !y("Presto") && (a = function() {
        var e = jc(document, "IFRAME");
        e.style.display = "none";
        Lb(e);
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.write(Ib(Kb));
        e.close();
        var g = "callImmediate" + Math.random(), h = f.location.protocol == "file:" ? "*" : f.location.protocol + "//" + f.location.host;
        e = q(function(m) {
          if ((h == "*" || m.origin == h) && m.data == g)
            this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, false);
        this.port1 = {};
        this.port2 = { postMessage: function() {
          f.postMessage(g, h);
        } };
      });
      if (typeof a !== "undefined" && !y("Trident") && !y("MSIE")) {
        var b = new a(), c = {}, d = c;
        b.port1.onmessage = function() {
          if (c.next !== void 0) {
            c = c.next;
            var e = c.Fb;
            c.Fb = null;
            e();
          }
        };
        return function(e) {
          d.next = { Fb: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function(e) {
        l.setTimeout(e, 0);
      };
    }
    ;
    function pc(a, b) {
      qc || rc();
      sc || (qc(), sc = true);
      La.add(a, b);
    }
    var qc;
    function rc() {
      if (l.Promise && l.Promise.resolve) {
        var a = l.Promise.resolve(void 0);
        qc = function() {
          a.then(tc);
        };
      } else
        qc = function() {
          var b = tc;
          !na(l.setImmediate) || l.Window && l.Window.prototype && !y("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (nc || (nc = oc()), nc(b)) : l.setImmediate(b);
        };
    }
    var sc = false, La = new Ha();
    function tc() {
      for (var a; a = Ka(); ) {
        try {
          a.a.call(a.b);
        } catch (b) {
          mc(b);
        }
        Ga(Ja, a);
      }
      sc = false;
    }
    ;
    function C(a, b) {
      this.a = uc;
      this.i = void 0;
      this.f = this.b = this.c = null;
      this.g = this.h = false;
      if (a != ka)
        try {
          var c = this;
          a.call(b, function(d) {
            vc(c, wc, d);
          }, function(d) {
            if (!(d instanceof xc))
              try {
                if (d instanceof Error)
                  throw d;
                throw Error("Promise rejected.");
              } catch (e) {
              }
            vc(c, yc, d);
          });
        } catch (d) {
          vc(this, yc, d);
        }
    }
    var uc = 0, wc = 2, yc = 3;
    function zc() {
      this.next = this.f = this.b = this.g = this.a = null;
      this.c = false;
    }
    zc.prototype.reset = function() {
      this.f = this.b = this.g = this.a = null;
      this.c = false;
    };
    var Ac = new Fa(function() {
      return new zc();
    }, function(a) {
      a.reset();
    });
    function Bc(a, b, c) {
      var d = Ac.get();
      d.g = a;
      d.b = b;
      d.f = c;
      return d;
    }
    function D(a) {
      if (a instanceof C)
        return a;
      var b = new C(ka);
      vc(b, wc, a);
      return b;
    }
    function E(a) {
      return new C(function(b, c) {
        c(a);
      });
    }
    function Cc(a, b, c) {
      Dc(a, b, c, null) || pc(ta(b, a));
    }
    function Ec(a) {
      return new C(function(b, c) {
        var d = a.length, e = [];
        if (d)
          for (var f = function(p, v) {
            d--;
            e[p] = v;
            d == 0 && b(e);
          }, g = function(p) {
            c(p);
          }, h = 0, m; h < a.length; h++)
            m = a[h], Cc(m, ta(f, h), g);
        else
          b(e);
      });
    }
    function Fc(a) {
      return new C(function(b) {
        var c = a.length, d = [];
        if (c)
          for (var e = function(h, m, p) {
            c--;
            d[h] = m ? { Ob: true, value: p } : { Ob: false, reason: p };
            c == 0 && b(d);
          }, f = 0, g; f < a.length; f++)
            g = a[f], Cc(g, ta(e, f, true), ta(e, f, false));
        else
          b(d);
      });
    }
    C.prototype.then = function(a, b, c) {
      return Gc(this, na(a) ? a : null, na(b) ? b : null, c);
    };
    C.prototype.$goog_Thenable = true;
    k = C.prototype;
    k.na = function(a, b) {
      a = Bc(a, a, b);
      a.c = true;
      Hc(this, a);
      return this;
    };
    k.s = function(a, b) {
      return Gc(this, null, a, b);
    };
    k.cancel = function(a) {
      if (this.a == uc) {
        var b = new xc(a);
        pc(function() {
          Ic(this, b);
        }, this);
      }
    };
    function Ic(a, b) {
      if (a.a == uc)
        if (a.c) {
          var c = a.c;
          if (c.b) {
            for (var d = 0, e = null, f = null, g = c.b; g && (g.c || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next)
              e || (f = g);
            e && (c.a == uc && d == 1 ? Ic(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Jc(c), Kc(c, e, yc, b)));
          }
          a.c = null;
        } else
          vc(a, yc, b);
    }
    function Hc(a, b) {
      a.b || a.a != wc && a.a != yc || Lc(a);
      a.f ? a.f.next = b : a.b = b;
      a.f = b;
    }
    function Gc(a, b, c, d) {
      var e = Bc(null, null, null);
      e.a = new C(function(f, g) {
        e.g = b ? function(h) {
          try {
            var m = b.call(d, h);
            f(m);
          } catch (p) {
            g(p);
          }
        } : f;
        e.b = c ? function(h) {
          try {
            var m = c.call(d, h);
            m === void 0 && h instanceof xc ? g(h) : f(m);
          } catch (p) {
            g(p);
          }
        } : g;
      });
      e.a.c = a;
      Hc(a, e);
      return e.a;
    }
    k.Zc = function(a) {
      this.a = uc;
      vc(this, wc, a);
    };
    k.$c = function(a) {
      this.a = uc;
      vc(this, yc, a);
    };
    function vc(a, b, c) {
      a.a == uc && (a === c && (b = yc, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Dc(c, a.Zc, a.$c, a) || (a.i = c, a.a = b, a.c = null, Lc(a), b != yc || c instanceof xc || Mc(a, c)));
    }
    function Dc(a, b, c, d) {
      if (a instanceof C)
        return Hc(a, Bc(b || ka, c || null, d)), true;
      if (Ca(a))
        return a.then(b, c, d), true;
      if (n(a))
        try {
          var e = a.then;
          if (na(e))
            return Nc(a, e, b, c, d), true;
        } catch (f) {
          return c.call(d, f), true;
        }
      return false;
    }
    function Nc(a, b, c, d, e) {
      function f(m) {
        h || (h = true, d.call(e, m));
      }
      function g(m) {
        h || (h = true, c.call(e, m));
      }
      var h = false;
      try {
        b.call(a, g, f);
      } catch (m) {
        f(m);
      }
    }
    function Lc(a) {
      a.h || (a.h = true, pc(a.fc, a));
    }
    function Jc(a) {
      var b = null;
      a.b && (b = a.b, a.b = b.next, b.next = null);
      a.b || (a.f = null);
      return b;
    }
    k.fc = function() {
      for (var a; a = Jc(this); )
        Kc(this, a, this.a, this.i);
      this.h = false;
    };
    function Kc(a, b, c, d) {
      if (c == yc && b.b && !b.c)
        for (; a && a.g; a = a.c)
          a.g = false;
      if (b.a)
        b.a.c = null, Oc(b, c, d);
      else
        try {
          b.c ? b.g.call(b.f) : Oc(b, c, d);
        } catch (e) {
          Pc.call(null, e);
        }
      Ga(Ac, b);
    }
    function Oc(a, b, c) {
      b == wc ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
    }
    function Mc(a, b) {
      a.g = true;
      pc(function() {
        a.g && Pc.call(null, b);
      });
    }
    var Pc = mc;
    function xc(a) {
      u.call(this, a);
    }
    r(xc, u);
    xc.prototype.name = "cancel";
    function Qc() {
      Rc != 0 && (Sc[oa(this)] = this);
      this.xa = this.xa;
      this.oa = this.oa;
    }
    var Rc = 0, Sc = {};
    Qc.prototype.xa = false;
    function Tc(a) {
      if (!a.xa && (a.xa = true, a.Da(), Rc != 0)) {
        var b = oa(a);
        if (Rc != 0 && a.oa && 0 < a.oa.length)
          throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Sc[b];
      }
    }
    Qc.prototype.Da = function() {
      if (this.oa)
        for (; this.oa.length; )
          this.oa.shift()();
    };
    var Uc = Object.freeze || function(a) {
      return a;
    };
    var Vc = !Tb || 9 <= Number(dc), Wc = Tb && !cc("9"), Xc = function() {
      if (!l.addEventListener || !Object.defineProperty)
        return false;
      var a = false, b = Object.defineProperty({}, "passive", { get: function() {
        a = true;
      } });
      try {
        l.addEventListener("test", ka, b), l.removeEventListener("test", ka, b);
      } catch (c) {
      }
      return a;
    }();
    function F(a, b) {
      this.type = a;
      this.b = this.target = b;
      this.defaultPrevented = false;
    }
    F.prototype.preventDefault = function() {
      this.defaultPrevented = true;
    };
    function Yc(a, b) {
      F.call(this, a ? a.type : "");
      this.relatedTarget = this.b = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
      this.pointerId = 0;
      this.pointerType = "";
      this.a = null;
      if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.b = b;
        if (b = a.relatedTarget) {
          if (Wb) {
            a: {
              try {
                Pb(b.nodeName);
                var e = true;
                break a;
              } catch (f) {
              }
              e = false;
            }
            e || (b = null);
          }
        } else
          c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Zc[a.pointerType] || "";
        this.a = a;
        a.defaultPrevented && this.preventDefault();
      }
    }
    r(Yc, F);
    var Zc = Uc({ 2: "touch", 3: "pen", 4: "mouse" });
    Yc.prototype.preventDefault = function() {
      Yc.$a.preventDefault.call(this);
      var a = this.a;
      if (a.preventDefault)
        a.preventDefault();
      else if (a.returnValue = false, Wc)
        try {
          if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
        } catch (b) {
        }
    };
    Yc.prototype.g = function() {
      return this.a;
    };
    var $c = "closure_listenable_" + (1e6 * Math.random() | 0), ad = 0;
    function bd(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Ua = e;
      this.key = ++ad;
      this.va = this.Oa = false;
    }
    function cd(a) {
      a.va = true;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Ua = null;
    }
    ;
    function dd(a) {
      this.src = a;
      this.a = {};
      this.b = 0;
    }
    dd.prototype.add = function(a, b, c, d, e) {
      var f = a.toString();
      a = this.a[f];
      a || (a = this.a[f] = [], this.b++);
      var g = ed(a, b, d, e);
      -1 < g ? (b = a[g], c || (b.Oa = false)) : (b = new bd(b, this.src, f, !!d, e), b.Oa = c, a.push(b));
      return b;
    };
    function fd(a, b) {
      var c = b.type;
      c in a.a && Ua(a.a[c], b) && (cd(b), a.a[c].length == 0 && (delete a.a[c], a.b--));
    }
    function ed(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.va && f.listener == b && f.capture == !!c && f.Ua == d)
          return e;
      }
      return -1;
    }
    ;
    var gd = "closure_lm_" + (1e6 * Math.random() | 0), hd = {}, id = 0;
    function jd(a, b, c, d, e) {
      if (d && d.once)
        kd(a, b, c, d, e);
      else if (Array.isArray(b))
        for (var f = 0; f < b.length; f++)
          jd(a, b[f], c, d, e);
      else
        c = ld(c), a && a[$c] ? md(a, b, c, n(d) ? !!d.capture : !!d, e) : nd(a, b, c, false, d, e);
    }
    function nd(a, b, c, d, e, f) {
      if (!b)
        throw Error("Invalid event type");
      var g = n(e) ? !!e.capture : !!e, h = od(a);
      h || (a[gd] = h = new dd(a));
      c = h.add(b, c, d, g, f);
      if (!c.proxy) {
        d = pd();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
          Xc || (e = g), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
          a.attachEvent(qd(b.toString()), d);
        else if (a.addListener && a.removeListener)
          a.addListener(d);
        else
          throw Error("addEventListener and attachEvent are unavailable.");
        id++;
      }
    }
    function pd() {
      var a = rd, b = Vc ? function(c) {
        return a.call(b.src, b.listener, c);
      } : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c)
          return c;
      };
      return b;
    }
    function kd(a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++)
          kd(a, b[f], c, d, e);
      else
        c = ld(c), a && a[$c] ? sd(a, b, c, n(d) ? !!d.capture : !!d, e) : nd(a, b, c, true, d, e);
    }
    function G(a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++)
          G(a, b[f], c, d, e);
      else
        (d = n(d) ? !!d.capture : !!d, c = ld(c), a && a[$c]) ? (a = a.v, b = String(b).toString(), b in a.a && (f = a.a[b], c = ed(f, c, d, e), -1 < c && (cd(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.a[b], a.b--)))) : a && (a = od(a)) && (b = a.a[b.toString()], a = -1, b && (a = ed(b, c, d, e)), (c = -1 < a ? b[a] : null) && td(c));
    }
    function td(a) {
      if (typeof a !== "number" && a && !a.va) {
        var b = a.src;
        if (b && b[$c])
          fd(b.v, a);
        else {
          var c = a.type, d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(qd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          id--;
          (c = od(b)) ? (fd(c, a), c.b == 0 && (c.src = null, b[gd] = null)) : cd(a);
        }
      }
    }
    function qd(a) {
      return a in hd ? hd[a] : hd[a] = "on" + a;
    }
    function ud(a, b, c, d) {
      var e = true;
      if (a = od(a)) {
        if (b = a.a[b.toString()])
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.va && (f = vd(f, d), e = e && f !== false);
          }
      }
      return e;
    }
    function vd(a, b) {
      var c = a.listener, d = a.Ua || a.src;
      a.Oa && td(a);
      return c.call(d, b);
    }
    function rd(a, b) {
      if (a.va)
        return true;
      if (!Vc) {
        if (!b)
          a: {
            b = ["window", "event"];
            for (var c = l, d = 0; d < b.length; d++)
              if (c = c[b[d]], c == null) {
                b = null;
                break a;
              }
            b = c;
          }
        d = b;
        b = new Yc(d, this);
        c = true;
        if (!(0 > d.keyCode || d.returnValue != void 0)) {
          a: {
            var e = false;
            if (d.keyCode == 0)
              try {
                d.keyCode = -1;
                break a;
              } catch (g) {
                e = true;
              }
            if (e || d.returnValue == void 0)
              d.returnValue = true;
          }
          d = [];
          for (e = b.b; e; e = e.parentNode)
            d.push(e);
          a = a.type;
          for (e = d.length - 1; 0 <= e; e--) {
            b.b = d[e];
            var f = ud(d[e], a, true, b);
            c = c && f;
          }
          for (e = 0; e < d.length; e++)
            b.b = d[e], f = ud(d[e], a, false, b), c = c && f;
        }
        return c;
      }
      return vd(a, new Yc(b, this));
    }
    function od(a) {
      a = a[gd];
      return a instanceof dd ? a : null;
    }
    var wd = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
    function ld(a) {
      if (na(a))
        return a;
      a[wd] || (a[wd] = function(b) {
        return a.handleEvent(b);
      });
      return a[wd];
    }
    ;
    function H() {
      Qc.call(this);
      this.v = new dd(this);
      this.$b = this;
      this.fb = null;
    }
    r(H, Qc);
    H.prototype[$c] = true;
    H.prototype.addEventListener = function(a, b, c, d) {
      jd(this, a, b, c, d);
    };
    H.prototype.removeEventListener = function(a, b, c, d) {
      G(this, a, b, c, d);
    };
    H.prototype.dispatchEvent = function(a) {
      var b, c = this.fb;
      if (c)
        for (b = []; c; c = c.fb)
          b.push(c);
      c = this.$b;
      var d = a.type || a;
      if (typeof a === "string")
        a = new F(a, c);
      else if (a instanceof F)
        a.target = a.target || c;
      else {
        var e = a;
        a = new F(d, c);
        z(a, e);
      }
      e = true;
      if (b)
        for (var f = b.length - 1; 0 <= f; f--) {
          var g = a.b = b[f];
          e = xd(g, d, true, a) && e;
        }
      g = a.b = c;
      e = xd(g, d, true, a) && e;
      e = xd(g, d, false, a) && e;
      if (b)
        for (f = 0; f < b.length; f++)
          g = a.b = b[f], e = xd(g, d, false, a) && e;
      return e;
    };
    H.prototype.Da = function() {
      H.$a.Da.call(this);
      if (this.v) {
        var a = this.v, b = 0, c;
        for (c in a.a) {
          for (var d = a.a[c], e = 0; e < d.length; e++)
            ++b, cd(d[e]);
          delete a.a[c];
          a.b--;
        }
      }
      this.fb = null;
    };
    function md(a, b, c, d, e) {
      a.v.add(String(b), c, false, d, e);
    }
    function sd(a, b, c, d, e) {
      a.v.add(String(b), c, true, d, e);
    }
    function xd(a, b, c, d) {
      b = a.v.a[String(b)];
      if (!b)
        return true;
      b = b.concat();
      for (var e = true, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.va && g.capture == c) {
          var h = g.listener, m = g.Ua || g.src;
          g.Oa && fd(a.v, g);
          e = h.call(m, d) !== false && e;
        }
      }
      return e && !d.defaultPrevented;
    }
    ;
    function zd(a, b, c) {
      if (na(a))
        c && (a = q(a, c));
      else if (a && typeof a.handleEvent == "function")
        a = q(a.handleEvent, a);
      else
        throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
    }
    function Ad(a) {
      var b = null;
      return new C(function(c, d) {
        b = zd(function() {
          c(void 0);
        }, a);
        b == -1 && d(Error("Failed to schedule timer."));
      }).s(function(c) {
        l.clearTimeout(b);
        throw c;
      });
    }
    ;
    function Bd(a) {
      if (a.V && typeof a.V == "function")
        return a.V();
      if (typeof a === "string")
        return a.split("");
      if (ma(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
          b.push(a[d]);
        return b;
      }
      b = [];
      c = 0;
      for (d in a)
        b[c++] = a[d];
      return b;
    }
    function Cd(a) {
      if (a.Y && typeof a.Y == "function")
        return a.Y();
      if (!a.V || typeof a.V != "function") {
        if (ma(a) || typeof a === "string") {
          var b = [];
          a = a.length;
          for (var c = 0; c < a; c++)
            b.push(c);
          return b;
        }
        b = [];
        c = 0;
        for (var d in a)
          b[c++] = d;
        return b;
      }
    }
    function Dd(a, b) {
      if (a.forEach && typeof a.forEach == "function")
        a.forEach(b, void 0);
      else if (ma(a) || typeof a === "string")
        w(a, b, void 0);
      else
        for (var c = Cd(a), d = Bd(a), e = d.length, f = 0; f < e; f++)
          b.call(void 0, d[f], c && c[f], a);
    }
    ;
    function Ed(a, b) {
      this.b = {};
      this.a = [];
      this.c = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2)
          throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
          this.set(arguments[d], arguments[d + 1]);
      } else if (a)
        if (a instanceof Ed)
          for (c = a.Y(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
        else
          for (d in a)
            this.set(d, a[d]);
    }
    k = Ed.prototype;
    k.V = function() {
      Fd(this);
      for (var a = [], b = 0; b < this.a.length; b++)
        a.push(this.b[this.a[b]]);
      return a;
    };
    k.Y = function() {
      Fd(this);
      return this.a.concat();
    };
    k.clear = function() {
      this.b = {};
      this.c = this.a.length = 0;
    };
    function Fd(a) {
      if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length; ) {
          var d = a.a[b];
          Gd(a.b, d) && (a.a[c++] = d);
          b++;
        }
        a.a.length = c;
      }
      if (a.c != a.a.length) {
        var e = {};
        for (c = b = 0; b < a.a.length; )
          d = a.a[b], Gd(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        a.a.length = c;
      }
    }
    k.get = function(a, b) {
      return Gd(this.b, a) ? this.b[a] : b;
    };
    k.set = function(a, b) {
      Gd(this.b, a) || (this.c++, this.a.push(a));
      this.b[a] = b;
    };
    k.forEach = function(a, b) {
      for (var c = this.Y(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this);
      }
    };
    function Gd(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    ;
    var Hd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function Id(a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="), e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else
            f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    }
    ;
    function Jd(a, b) {
      this.a = this.l = this.f = "";
      this.g = null;
      this.h = this.c = "";
      this.i = false;
      var c;
      a instanceof Jd ? (this.i = b !== void 0 ? b : a.i, Kd(this, a.f), this.l = a.l, this.a = a.a, Ld(this, a.g), this.c = a.c, Md(this, Nd(a.b)), this.h = a.h) : a && (c = String(a).match(Hd)) ? (this.i = !!b, Kd(this, c[1] || "", true), this.l = Od(c[2] || ""), this.a = Od(c[3] || "", true), Ld(this, c[4]), this.c = Od(c[5] || "", true), Md(this, c[6] || "", true), this.h = Od(c[7] || "")) : (this.i = !!b, this.b = new Pd(null, this.i));
    }
    Jd.prototype.toString = function() {
      var a = [], b = this.f;
      b && a.push(Qd(b, Rd, true), ":");
      var c = this.a;
      if (c || b == "file")
        a.push("//"), (b = this.l) && a.push(Qd(b, Rd, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.g, c != null && a.push(":", String(c));
      if (c = this.c)
        this.a && c.charAt(0) != "/" && a.push("/"), a.push(Qd(c, c.charAt(0) == "/" ? Sd : Td, true));
      (c = this.b.toString()) && a.push("?", c);
      (c = this.h) && a.push("#", Qd(c, Ud));
      return a.join("");
    };
    Jd.prototype.resolve = function(a) {
      var b = new Jd(this), c = !!a.f;
      c ? Kd(b, a.f) : c = !!a.l;
      c ? b.l = a.l : c = !!a.a;
      c ? b.a = a.a : c = a.g != null;
      var d = a.c;
      if (c)
        Ld(b, a.g);
      else if (c = !!a.c) {
        if (d.charAt(0) != "/")
          if (this.a && !this.c)
            d = "/" + d;
          else {
            var e = b.c.lastIndexOf("/");
            e != -1 && (d = b.c.substr(0, e + 1) + d);
          }
        e = d;
        if (e == ".." || e == ".")
          d = "";
        else if (x(e, "./") || x(e, "/.")) {
          d = e.lastIndexOf("/", 0) == 0;
          e = e.split("/");
          for (var f = [], g = 0; g < e.length; ) {
            var h = e[g++];
            h == "." ? d && g == e.length && f.push("") : h == ".." ? ((1 < f.length || f.length == 1 && f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = true);
          }
          d = f.join("/");
        } else
          d = e;
      }
      c ? b.c = d : c = a.b.toString() !== "";
      c ? Md(b, Nd(a.b)) : c = !!a.h;
      c && (b.h = a.h);
      return b;
    };
    function Kd(a, b, c) {
      a.f = c ? Od(b, true) : b;
      a.f && (a.f = a.f.replace(/:$/, ""));
    }
    function Ld(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
          throw Error("Bad port number " + b);
        a.g = b;
      } else
        a.g = null;
    }
    function Md(a, b, c) {
      b instanceof Pd ? (a.b = b, Vd(a.b, a.i)) : (c || (b = Qd(b, Wd)), a.b = new Pd(b, a.i));
    }
    function I(a, b, c) {
      a.b.set(b, c);
    }
    function Xd(a, b) {
      return a.b.get(b);
    }
    function J(a) {
      return a instanceof Jd ? new Jd(a) : new Jd(a, void 0);
    }
    function Yd(a, b, c, d) {
      var e = new Jd(null, void 0);
      a && Kd(e, a);
      b && (e.a = b);
      c && Ld(e, c);
      d && (e.c = d);
      return e;
    }
    function Od(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }
    function Qd(a, b, c) {
      return typeof a === "string" ? (a = encodeURI(a).replace(b, Zd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }
    function Zd(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }
    var Rd = /[#\/\?@]/g, Td = /[#\?:]/g, Sd = /[#\?]/g, Wd = /[#\?@]/g, Ud = /#/g;
    function Pd(a, b) {
      this.b = this.a = null;
      this.c = a || null;
      this.f = !!b;
    }
    function $d(a) {
      a.a || (a.a = new Ed(), a.b = 0, a.c && Id(a.c, function(b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    }
    function ae(a) {
      var b = Cd(a);
      if (typeof b == "undefined")
        throw Error("Keys are undefined");
      var c = new Pd(null, void 0);
      a = Bd(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d], f = a[d];
        Array.isArray(f) ? be(c, e, f) : c.add(e, f);
      }
      return c;
    }
    k = Pd.prototype;
    k.add = function(a, b) {
      $d(this);
      this.c = null;
      a = ce(this, a);
      var c = this.a.get(a);
      c || this.a.set(a, c = []);
      c.push(b);
      this.b += 1;
      return this;
    };
    function de(a, b) {
      $d(a);
      b = ce(a, b);
      Gd(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, Gd(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Fd(a)));
    }
    k.clear = function() {
      this.a = this.c = null;
      this.b = 0;
    };
    function ee(a, b) {
      $d(a);
      b = ce(a, b);
      return Gd(a.a.b, b);
    }
    k.forEach = function(a, b) {
      $d(this);
      this.a.forEach(function(c, d) {
        w(c, function(e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };
    k.Y = function() {
      $d(this);
      for (var a = this.a.V(), b = this.a.Y(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
          c.push(b[d]);
      return c;
    };
    k.V = function(a) {
      $d(this);
      var b = [];
      if (typeof a === "string")
        ee(this, a) && (b = Wa(b, this.a.get(ce(this, a))));
      else {
        a = this.a.V();
        for (var c = 0; c < a.length; c++)
          b = Wa(b, a[c]);
      }
      return b;
    };
    k.set = function(a, b) {
      $d(this);
      this.c = null;
      a = ce(this, a);
      ee(this, a) && (this.b -= this.a.get(a).length);
      this.a.set(a, [b]);
      this.b += 1;
      return this;
    };
    k.get = function(a, b) {
      if (!a)
        return b;
      a = this.V(a);
      return 0 < a.length ? String(a[0]) : b;
    };
    function be(a, b, c) {
      de(a, b);
      0 < c.length && (a.c = null, a.a.set(ce(a, b), Xa(c)), a.b += c.length);
    }
    k.toString = function() {
      if (this.c)
        return this.c;
      if (!this.a)
        return "";
      for (var a = [], b = this.a.Y(), c = 0; c < b.length; c++) {
        var d = b[c], e = encodeURIComponent(String(d));
        d = this.V(d);
        for (var f = 0; f < d.length; f++) {
          var g = e;
          d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
          a.push(g);
        }
      }
      return this.c = a.join("&");
    };
    function Nd(a) {
      var b = new Pd();
      b.c = a.c;
      a.a && (b.a = new Ed(a.a), b.b = a.b);
      return b;
    }
    function ce(a, b) {
      b = String(b);
      a.f && (b = b.toLowerCase());
      return b;
    }
    function Vd(a, b) {
      b && !a.f && ($d(a), a.c = null, a.a.forEach(function(c, d) {
        var e = d.toLowerCase();
        d != e && (de(this, d), be(this, e, c));
      }, a));
      a.f = b;
    }
    ;
    function fe(a) {
      var b = [];
      ge(new he(), a, b);
      return b.join("");
    }
    function he() {
    }
    function ge(a, b, c) {
      if (b == null)
        c.push("null");
      else {
        if (typeof b == "object") {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++)
              c.push(e), ge(a, d[f], c), e = ",";
            c.push("]");
            return;
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean)
            b = b.valueOf();
          else {
            c.push("{");
            e = "";
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], typeof f != "function" && (c.push(e), ie(d, c), c.push(":"), ge(a, f, c), e = ","));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            ie(b, c);
            break;
          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
          case "boolean":
            c.push(String(b));
            break;
          case "function":
            c.push("null");
            break;
          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    }
    var je = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\u000b" }, ke = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    function ie(a, b) {
      b.push('"', a.replace(ke, function(c) {
        var d = je[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), je[c] = d);
        return d;
      }), '"');
    }
    ;
    function le() {
      var a = K();
      return Tb && !!dc && dc == 11 || /Edge\/\d+/.test(a);
    }
    function me() {
      return l.window && l.window.location.href || self && self.location && self.location.href || "";
    }
    function ne(a, b) {
      b = b || l.window;
      var c = "about:blank";
      a && (c = Db(Fb(a)));
      b.location.href = c;
    }
    function oe(a, b) {
      var c = [], d;
      for (d in a)
        d in b ? typeof a[d] != typeof b[d] ? c.push(d) : typeof a[d] == "object" && a[d] != null && b[d] != null ? 0 < oe(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
      for (d in b)
        d in a || c.push(d);
      return c;
    }
    function pe() {
      var a = K();
      a = qe(a) != re ? null : (a = a.match(/\sChrome\/(\d+)/i)) && a.length == 2 ? parseInt(a[1], 10) : null;
      return a && 30 > a ? false : !Tb || !dc || 9 < dc;
    }
    function se(a) {
      a = (a || K()).toLowerCase();
      return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? true : false;
    }
    function te(a) {
      a = a || l.window;
      try {
        a.close();
      } catch (b) {
      }
    }
    function ue(a, b, c) {
      var d = Math.floor(1e9 * Math.random()).toString();
      b = b || 500;
      c = c || 600;
      var e = (window.screen.availHeight - c) / 2, f = (window.screen.availWidth - b) / 2;
      b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: true, resizable: true, statusbar: true, toolbar: false };
      c = K().toLowerCase();
      d && (b.target = d, x(c, "crios/") && (b.target = "_blank"));
      qe(K()) == ve && (a = a || "http://localhost", b.scrollbars = true);
      c = a || "";
      (a = b) || (a = {});
      d = window;
      b = c instanceof Ab ? c : Fb(typeof c.href != "undefined" ? c.href : String(c));
      c = a.target || c.target;
      e = [];
      for (g in a)
        switch (g) {
          case "width":
          case "height":
          case "top":
          case "left":
            e.push(g + "=" + a[g]);
            break;
          case "target":
          case "noopener":
          case "noreferrer":
            break;
          default:
            e.push(g + "=" + (a[g] ? 1 : 0));
        }
      var g = e.join(",");
      if ((y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && d.navigator && d.navigator.standalone && c && c != "_self")
        g = jc(document, "A"), nb(g, "HTMLAnchorElement"), b instanceof Ab || b instanceof Ab || (b = typeof b == "object" && b.sa ? b.ra() : String(b), Eb.test(b) || (b = "about:invalid#zClosurez"), b = new Ab(Bb, b)), g.href = Db(b), g.setAttribute("target", c), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", true, true, d, 1), g.dispatchEvent(a), g = {};
      else if (a.noreferrer) {
        if (g = d.open("", c, g), a = Db(b), g && (Vb && x(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, a = Jb('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ob(a) + '">'), d = g.document))
          d.write(Ib(a)), d.close();
      } else
        (g = d.open(Db(b), c, g)) && a.noopener && (g.opener = null);
      if (g)
        try {
          g.focus();
        } catch (h) {
        }
      return g;
    }
    function we(a) {
      return new C(function(b) {
        function c() {
          Ad(2e3).then(function() {
            if (!a || a.closed)
              b();
            else
              return c();
          });
        }
        return c();
      });
    }
    var xe = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, ye = /^[^@]+@[^@]+$/;
    function ze() {
      var a = null;
      return new C(function(b) {
        l.document.readyState == "complete" ? b() : (a = function() {
          b();
        }, kd(window, "load", a));
      }).s(function(b) {
        G(window, "load", a);
        throw b;
      });
    }
    function Ae() {
      return Be(void 0) ? ze().then(function() {
        return new C(function(a, b) {
          var c = l.document, d = setTimeout(function() {
            b(Error("Cordova framework is not ready."));
          }, 1e3);
          c.addEventListener("deviceready", function() {
            clearTimeout(d);
            a();
          }, false);
        });
      }) : E(Error("Cordova must run in an Android or iOS file scheme."));
    }
    function Be(a) {
      a = a || K();
      return !(Ce() !== "file:" && Ce() !== "ionic:" || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
    }
    function De() {
      var a = l.window;
      try {
        return !(!a || a == a.top);
      } catch (b) {
        return false;
      }
    }
    function Ee() {
      return typeof l.WorkerGlobalScope !== "undefined" && typeof l.importScripts === "function";
    }
    function Fe() {
      return firebase4.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase4.INTERNAL.hasOwnProperty("node") ? "Node" : Ee() ? "Worker" : "Browser";
    }
    function Ge() {
      var a = Fe();
      return a === "ReactNative" || a === "Node";
    }
    function He() {
      for (var a = 50, b = []; 0 < a; )
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      return b.join("");
    }
    var ve = "Firefox", re = "Chrome";
    function qe(a) {
      var b = a.toLowerCase();
      if (x(b, "opera/") || x(b, "opr/") || x(b, "opios/"))
        return "Opera";
      if (x(b, "iemobile"))
        return "IEMobile";
      if (x(b, "msie") || x(b, "trident/"))
        return "IE";
      if (x(b, "edge/"))
        return "Edge";
      if (x(b, "firefox/"))
        return ve;
      if (x(b, "silk/"))
        return "Silk";
      if (x(b, "blackberry"))
        return "Blackberry";
      if (x(b, "webos"))
        return "Webos";
      if (!x(b, "safari/") || x(b, "chrome/") || x(b, "crios/") || x(b, "android"))
        if (!x(b, "chrome/") && !x(b, "crios/") || x(b, "edge/")) {
          if (x(b, "android"))
            return "Android";
          if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && a.length == 2)
            return a[1];
        } else
          return re;
      else
        return "Safari";
      return "Other";
    }
    var Ie = { ld: "FirebaseCore-web", nd: "FirebaseUI-web" };
    function Je(a, b) {
      b = b || [];
      var c = [], d = {}, e;
      for (e in Ie)
        d[Ie[e]] = true;
      for (e = 0; e < b.length; e++)
        typeof d[b[e]] !== "undefined" && (delete d[b[e]], c.push(b[e]));
      c.sort();
      b = c;
      b.length || (b = ["FirebaseCore-web"]);
      c = Fe();
      c === "Browser" ? (d = K(), c = qe(d)) : c === "Worker" && (d = K(), c = qe(d) + "-" + c);
      return c + "/JsCore/" + a + "/" + b.join(",");
    }
    function K() {
      return l.navigator && l.navigator.userAgent || "";
    }
    function L(a, b) {
      a = a.split(".");
      b = b || l;
      for (var c = 0; c < a.length && typeof b == "object" && b != null; c++)
        b = b[a[c]];
      c != a.length && (b = void 0);
      return b;
    }
    function Ke() {
      try {
        var a = l.localStorage, b = Le();
        if (a)
          return a.setItem(b, "1"), a.removeItem(b), le() ? !!l.indexedDB : true;
      } catch (c) {
        return Ee() && !!l.indexedDB;
      }
      return false;
    }
    function Me() {
      return (Ne() || Ce() === "chrome-extension:" || Be()) && !Ge() && Ke() && !Ee();
    }
    function Ne() {
      return Ce() === "http:" || Ce() === "https:";
    }
    function Ce() {
      return l.location && l.location.protocol || null;
    }
    function Oe(a) {
      a = a || K();
      return se(a) || qe(a) == ve ? false : true;
    }
    function Pe(a) {
      return typeof a === "undefined" ? null : fe(a);
    }
    function Qe(a) {
      var b = {}, c;
      for (c in a)
        a.hasOwnProperty(c) && a[c] !== null && a[c] !== void 0 && (b[c] = a[c]);
      return b;
    }
    function Re(a) {
      if (a !== null)
        return JSON.parse(a);
    }
    function Le(a) {
      return a ? a : Math.floor(1e9 * Math.random()).toString();
    }
    function Se(a) {
      a = a || K();
      return qe(a) == "Safari" || a.toLowerCase().match(/iphone|ipad|ipod/) ? false : true;
    }
    function Te() {
      var a = l.___jsl;
      if (a && a.H) {
        for (var b in a.H)
          if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP)
            for (var c = 0; c < a.CP.length; c++)
              a.CP[c] = null;
      }
    }
    function Ue(a, b) {
      if (a > b)
        throw Error("Short delay should be less than long delay!");
      this.a = a;
      this.c = b;
      a = K();
      b = Fe();
      this.b = se(a) || b === "ReactNative";
    }
    Ue.prototype.get = function() {
      var a = l.navigator;
      return (a && typeof a.onLine === "boolean" && (Ne() || Ce() === "chrome-extension:" || typeof a.connection !== "undefined") ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5e3, this.a);
    };
    function Ve() {
      var a = l.document;
      return a && typeof a.visibilityState !== "undefined" ? a.visibilityState == "visible" : true;
    }
    function We() {
      var a = l.document, b = null;
      return Ve() || !a ? D() : new C(function(c) {
        b = function() {
          Ve() && (a.removeEventListener("visibilitychange", b, false), c());
        };
        a.addEventListener("visibilitychange", b, false);
      }).s(function(c) {
        a.removeEventListener("visibilitychange", b, false);
        throw c;
      });
    }
    function Xe(a) {
      typeof console !== "undefined" && typeof console.warn === "function" && console.warn(a);
    }
    function Ye(a) {
      try {
        var b = new Date(parseInt(a, 10));
        if (!isNaN(b.getTime()) && !/[^0-9]/.test(a))
          return b.toUTCString();
      } catch (c) {
      }
      return null;
    }
    function Ze() {
      return !(!L("fireauth.oauthhelper", l) && !L("fireauth.iframe", l));
    }
    function $e() {
      var a = l.navigator;
      return a && a.serviceWorker && a.serviceWorker.controller || null;
    }
    function af() {
      var a = l.navigator;
      return a && a.serviceWorker ? D().then(function() {
        return a.serviceWorker.ready;
      }).then(function(b) {
        return b.active || null;
      }).s(function() {
        return null;
      }) : D(null);
    }
    ;
    var bf = {};
    function cf(a) {
      bf[a] || (bf[a] = true, Xe(a));
    }
    ;
    var df;
    try {
      var ef = {};
      Object.defineProperty(ef, "abcd", { configurable: true, enumerable: true, value: 1 });
      Object.defineProperty(ef, "abcd", { configurable: true, enumerable: true, value: 2 });
      df = ef.abcd == 2;
    } catch (a) {
      df = false;
    }
    function M(a, b, c) {
      df ? Object.defineProperty(a, b, { configurable: true, enumerable: true, value: c }) : a[b] = c;
    }
    function N(a, b) {
      if (b)
        for (var c in b)
          b.hasOwnProperty(c) && M(a, c, b[c]);
    }
    function ff(a) {
      var b = {};
      N(b, a);
      return b;
    }
    function gf(a) {
      var b = {}, c;
      for (c in a)
        a.hasOwnProperty(c) && (b[c] = a[c]);
      return b;
    }
    function hf(a, b) {
      if (!b || !b.length)
        return true;
      if (!a)
        return false;
      for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];
        if (d === void 0 || d === null || d === "")
          return false;
      }
      return true;
    }
    function jf(a) {
      var b = a;
      if (typeof a == "object" && a != null) {
        b = "length" in a ? [] : {};
        for (var c in a)
          M(b, c, jf(a[c]));
      }
      return b;
    }
    ;
    function kf(a) {
      var b = a && (a[lf] ? "phone" : null);
      if (b && a && a[mf]) {
        M(this, "uid", a[mf]);
        M(this, "displayName", a[nf] || null);
        var c = null;
        a[of] && (c = new Date(a[of]).toUTCString());
        M(this, "enrollmentTime", c);
        M(this, "factorId", b);
      } else
        throw new t("internal-error", "Internal assert: invalid MultiFactorInfo object");
    }
    kf.prototype.w = function() {
      return { uid: this.uid, displayName: this.displayName, factorId: this.factorId, enrollmentTime: this.enrollmentTime };
    };
    function pf(a) {
      try {
        var b = new qf(a);
      } catch (c) {
        b = null;
      }
      return b;
    }
    var nf = "displayName", of = "enrolledAt", mf = "mfaEnrollmentId", lf = "phoneInfo";
    function qf(a) {
      kf.call(this, a);
      M(this, "phoneNumber", a[lf]);
    }
    r(qf, kf);
    qf.prototype.w = function() {
      var a = qf.$a.w.call(this);
      a.phoneNumber = this.phoneNumber;
      return a;
    };
    function rf(a) {
      var b = {}, c = a[sf], d = a[tf], e = a[uf];
      a = pf(a[vf]);
      if (!e || e != wf && e != xf && !c || e == xf && !d || e == yf && !a)
        throw Error("Invalid checkActionCode response!");
      e == xf ? (b[zf] = c || null, b[Af] = c || null, b[Bf] = d) : (b[zf] = d || null, b[Af] = d || null, b[Bf] = c || null);
      b[Cf] = a || null;
      M(this, Df, e);
      M(this, Ef, jf(b));
    }
    var yf = "REVERT_SECOND_FACTOR_ADDITION", wf = "EMAIL_SIGNIN", xf = "VERIFY_AND_CHANGE_EMAIL", sf = "email", vf = "mfaInfo", tf = "newEmail", uf = "requestType", Bf = "email", zf = "fromEmail", Cf = "multiFactorInfo", Af = "previousEmail", Ef = "data", Df = "operation";
    function Ff(a) {
      a = J(a);
      var b = Xd(a, Gf) || null, c = Xd(a, Hf) || null, d = Xd(a, If) || null;
      d = d ? Jf[d] || null : null;
      if (!b || !c || !d)
        throw new t("argument-error", Gf + ", " + Hf + "and " + If + " are required in a valid action code URL.");
      N(this, { apiKey: b, operation: d, code: c, continueUrl: Xd(a, Kf) || null, languageCode: Xd(a, Lf) || null, tenantId: Xd(a, Mf) || null });
    }
    var Gf = "apiKey", Hf = "oobCode", Kf = "continueUrl", Lf = "languageCode", If = "mode", Mf = "tenantId", Jf = { recoverEmail: "RECOVER_EMAIL", resetPassword: "PASSWORD_RESET", revertSecondFactorAddition: yf, signIn: wf, verifyAndChangeEmail: xf, verifyEmail: "VERIFY_EMAIL" };
    function Nf(a) {
      try {
        return new Ff(a);
      } catch (b) {
        return null;
      }
    }
    ;
    function Of(a) {
      var b = a[Pf];
      if (typeof b === "undefined")
        throw new t("missing-continue-uri");
      if (typeof b !== "string" || typeof b === "string" && !b.length)
        throw new t("invalid-continue-uri");
      this.h = b;
      this.b = this.a = null;
      this.g = false;
      var c = a[Qf];
      if (c && typeof c === "object") {
        b = c[Rf];
        var d = c[Sf];
        c = c[Tf];
        if (typeof b === "string" && b.length) {
          this.a = b;
          if (typeof d !== "undefined" && typeof d !== "boolean")
            throw new t("argument-error", Sf + " property must be a boolean when specified.");
          this.g = !!d;
          if (typeof c !== "undefined" && (typeof c !== "string" || typeof c === "string" && !c.length))
            throw new t("argument-error", Tf + " property must be a non empty string when specified.");
          this.b = c || null;
        } else {
          if (typeof b !== "undefined")
            throw new t("argument-error", Rf + " property must be a non empty string when specified.");
          if (typeof d !== "undefined" || typeof c !== "undefined")
            throw new t("missing-android-pkg-name");
        }
      } else if (typeof c !== "undefined")
        throw new t("argument-error", Qf + " property must be a non null object when specified.");
      this.f = null;
      if ((b = a[Uf]) && typeof b === "object")
        if (b = b[Vf], typeof b === "string" && b.length)
          this.f = b;
        else {
          if (typeof b !== "undefined")
            throw new t("argument-error", Vf + " property must be a non empty string when specified.");
        }
      else if (typeof b !== "undefined")
        throw new t("argument-error", Uf + " property must be a non null object when specified.");
      b = a[Wf];
      if (typeof b !== "undefined" && typeof b !== "boolean")
        throw new t("argument-error", Wf + " property must be a boolean when specified.");
      this.c = !!b;
      a = a[Xf];
      if (typeof a !== "undefined" && (typeof a !== "string" || typeof a === "string" && !a.length))
        throw new t("argument-error", Xf + " property must be a non empty string when specified.");
      this.i = a || null;
    }
    var Qf = "android", Xf = "dynamicLinkDomain", Wf = "handleCodeInApp", Uf = "iOS", Pf = "url", Sf = "installApp", Tf = "minimumVersion", Rf = "packageName", Vf = "bundleId";
    function Yf(a) {
      var b = {};
      b.continueUrl = a.h;
      b.canHandleCodeInApp = a.c;
      if (b.androidPackageName = a.a)
        b.androidMinimumVersion = a.b, b.androidInstallApp = a.g;
      b.iOSBundleId = a.f;
      b.dynamicLinkDomain = a.i;
      for (var c in b)
        b[c] === null && delete b[c];
      return b;
    }
    ;
    function Zf(a) {
      return Pa(a, function(b) {
        b = b.toString(16);
        return 1 < b.length ? b : "0" + b;
      }).join("");
    }
    ;
    var $f = null;
    function ag(a) {
      var b = "";
      bg(a, function(c) {
        b += String.fromCharCode(c);
      });
      return b;
    }
    function bg(a, b) {
      function c(m) {
        for (; d < a.length; ) {
          var p = a.charAt(d++), v = $f[p];
          if (v != null)
            return v;
          if (!/^[\s\xa0]*$/.test(p))
            throw Error("Unknown base64 encoding at char: " + p);
        }
        return m;
      }
      cg();
      for (var d = 0; ; ) {
        var e = c(-1), f = c(0), g = c(64), h = c(64);
        if (h === 64 && e === -1)
          break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h));
      }
    }
    function cg() {
      if (!$f) {
        $f = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
          for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
            var f = d[e];
            $f[f] === void 0 && ($f[f] = e);
          }
      }
    }
    ;
    function dg(a) {
      var b = eg(a);
      if (!(b && b.sub && b.iss && b.aud && b.exp))
        throw Error("Invalid JWT");
      this.g = a;
      this.c = b.exp;
      this.h = b.sub;
      ua();
      this.a = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
      this.f = b.firebase && b.firebase.tenant || null;
      this.b = !!b.is_anonymous || this.a == "anonymous";
    }
    dg.prototype.S = function() {
      return this.f;
    };
    dg.prototype.i = function() {
      return this.b;
    };
    dg.prototype.toString = function() {
      return this.g;
    };
    function fg(a) {
      try {
        return new dg(a);
      } catch (b) {
        return null;
      }
    }
    function eg(a) {
      if (!a)
        return null;
      a = a.split(".");
      if (a.length != 3)
        return null;
      a = a[1];
      for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++)
        a += ".";
      try {
        return JSON.parse(ag(a));
      } catch (d) {
      }
      return null;
    }
    ;
    var gg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "), hg = ["client_id", "response_type", "scope", "redirect_uri", "state"], ig = { md: { Ja: "locale", ua: 700, ta: 600, fa: "facebook.com", Wa: hg }, od: { Ja: null, ua: 500, ta: 750, fa: "github.com", Wa: hg }, pd: { Ja: "hl", ua: 515, ta: 680, fa: "google.com", Wa: hg }, vd: { Ja: "lang", ua: 485, ta: 705, fa: "twitter.com", Wa: gg }, jd: { Ja: "locale", ua: 640, ta: 600, fa: "apple.com", Wa: [] } };
    function jg(a) {
      for (var b in ig)
        if (ig[b].fa == a)
          return ig[b];
      return null;
    }
    ;
    function kg(a) {
      var b = {};
      b["facebook.com"] = lg;
      b["google.com"] = mg;
      b["github.com"] = ng;
      b["twitter.com"] = og;
      var c = a && a[pg];
      try {
        if (c)
          return b[c] ? new b[c](a) : new qg(a);
        if (typeof a[rg] !== "undefined")
          return new sg(a);
      } catch (d) {
      }
      return null;
    }
    var rg = "idToken", pg = "providerId";
    function sg(a) {
      var b = a[pg];
      if (!b && a[rg]) {
        var c = fg(a[rg]);
        c && c.a && (b = c.a);
      }
      if (!b)
        throw Error("Invalid additional user info!");
      if (b == "anonymous" || b == "custom")
        b = null;
      c = false;
      typeof a.isNewUser !== "undefined" ? c = !!a.isNewUser : a.kind === "identitytoolkit#SignupNewUserResponse" && (c = true);
      M(this, "providerId", b);
      M(this, "isNewUser", c);
    }
    function qg(a) {
      sg.call(this, a);
      a = Re(a.rawUserInfo || "{}");
      M(this, "profile", jf(a || {}));
    }
    r(qg, sg);
    function lg(a) {
      qg.call(this, a);
      if (this.providerId != "facebook.com")
        throw Error("Invalid provider ID!");
    }
    r(lg, qg);
    function ng(a) {
      qg.call(this, a);
      if (this.providerId != "github.com")
        throw Error("Invalid provider ID!");
      M(this, "username", this.profile && this.profile.login || null);
    }
    r(ng, qg);
    function mg(a) {
      qg.call(this, a);
      if (this.providerId != "google.com")
        throw Error("Invalid provider ID!");
    }
    r(mg, qg);
    function og(a) {
      qg.call(this, a);
      if (this.providerId != "twitter.com")
        throw Error("Invalid provider ID!");
      M(this, "username", a.screenName || null);
    }
    r(og, qg);
    function tg(a) {
      var b = J(a), c = Xd(b, "link"), d = Xd(J(c), "link");
      b = Xd(b, "deep_link_id");
      return Xd(J(b), "link") || b || d || c || a;
    }
    ;
    function ug(a, b) {
      if (!a && !b)
        throw new t("internal-error", "Internal assert: no raw session string available");
      if (a && b)
        throw new t("internal-error", "Internal assert: unable to determine the session type");
      this.a = a || null;
      this.b = b || null;
      this.type = this.a ? vg : wg;
    }
    var vg = "enroll", wg = "signin";
    ug.prototype.Ha = function() {
      return this.a ? D(this.a) : D(this.b);
    };
    ug.prototype.w = function() {
      return this.type == vg ? { multiFactorSession: { idToken: this.a } } : { multiFactorSession: { pendingCredential: this.b } };
    };
    function xg() {
    }
    xg.prototype.ja = function() {
    };
    xg.prototype.b = function() {
    };
    xg.prototype.c = function() {
    };
    xg.prototype.w = function() {
    };
    function yg(a, b) {
      return a.then(function(c) {
        if (c[zg]) {
          var d = fg(c[zg]);
          if (!d || b != d.h)
            throw new t("user-mismatch");
          return c;
        }
        throw new t("user-mismatch");
      }).s(function(c) {
        throw c && c.code && c.code == va + "user-not-found" ? new t("user-mismatch") : c;
      });
    }
    function Ag(a, b) {
      if (b)
        this.a = b;
      else
        throw new t("internal-error", "failed to construct a credential");
      M(this, "providerId", a);
      M(this, "signInMethod", a);
    }
    Ag.prototype.ja = function(a) {
      return Bg(a, Cg(this));
    };
    Ag.prototype.b = function(a, b) {
      var c = Cg(this);
      c.idToken = b;
      return Dg(a, c);
    };
    Ag.prototype.c = function(a, b) {
      return yg(Eg(a, Cg(this)), b);
    };
    function Cg(a) {
      return { pendingToken: a.a, requestUri: "http://localhost" };
    }
    Ag.prototype.w = function() {
      return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a };
    };
    function Fg(a) {
      if (a && a.providerId && a.signInMethod && a.providerId.indexOf("saml.") == 0 && a.pendingToken)
        try {
          return new Ag(a.providerId, a.pendingToken);
        } catch (b) {
        }
      return null;
    }
    function Gg(a, b, c) {
      this.a = null;
      if (b.idToken || b.accessToken)
        b.idToken && M(this, "idToken", b.idToken), b.accessToken && M(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && M(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);
      else if (b.oauthToken && b.oauthTokenSecret)
        M(this, "accessToken", b.oauthToken), M(this, "secret", b.oauthTokenSecret);
      else
        throw new t("internal-error", "failed to construct a credential");
      M(this, "providerId", a);
      M(this, "signInMethod", c);
    }
    Gg.prototype.ja = function(a) {
      return Bg(a, Hg(this));
    };
    Gg.prototype.b = function(a, b) {
      var c = Hg(this);
      c.idToken = b;
      return Dg(a, c);
    };
    Gg.prototype.c = function(a, b) {
      var c = Hg(this);
      return yg(Eg(a, c), b);
    };
    function Hg(a) {
      var b = {};
      a.idToken && (b.id_token = a.idToken);
      a.accessToken && (b.access_token = a.accessToken);
      a.secret && (b.oauth_token_secret = a.secret);
      b.providerId = a.providerId;
      a.nonce && !a.a && (b.nonce = a.nonce);
      b = { postBody: ae(b).toString(), requestUri: "http://localhost" };
      a.a && (delete b.postBody, b.pendingToken = a.a);
      return b;
    }
    Gg.prototype.w = function() {
      var a = { providerId: this.providerId, signInMethod: this.signInMethod };
      this.idToken && (a.oauthIdToken = this.idToken);
      this.accessToken && (a.oauthAccessToken = this.accessToken);
      this.secret && (a.oauthTokenSecret = this.secret);
      this.nonce && (a.nonce = this.nonce);
      this.a && (a.pendingToken = this.a);
      return a;
    };
    function Ig(a) {
      if (a && a.providerId && a.signInMethod) {
        var b = { idToken: a.oauthIdToken, accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken, oauthTokenSecret: a.oauthTokenSecret, oauthToken: a.oauthTokenSecret && a.oauthAccessToken, nonce: a.nonce, pendingToken: a.pendingToken };
        try {
          return new Gg(a.providerId, b, a.signInMethod);
        } catch (c) {
        }
      }
      return null;
    }
    function Jg(a, b) {
      this.Pc = b || [];
      N(this, { providerId: a, isOAuthProvider: true });
      this.Hb = {};
      this.ob = (jg(a) || {}).Ja || null;
      this.nb = null;
    }
    Jg.prototype.Ka = function(a) {
      this.Hb = lb(a);
      return this;
    };
    function Kg(a) {
      if (typeof a !== "string" || a.indexOf("saml.") != 0)
        throw new t("argument-error", 'SAML provider IDs must be prefixed with "saml."');
      Jg.call(this, a, []);
    }
    r(Kg, Jg);
    function Lg(a) {
      Jg.call(this, a, hg);
      this.a = [];
    }
    r(Lg, Jg);
    Lg.prototype.Ca = function(a) {
      Ta(this.a, a) || this.a.push(a);
      return this;
    };
    Lg.prototype.Pb = function() {
      return Xa(this.a);
    };
    Lg.prototype.credential = function(a, b) {
      var c;
      n(a) ? c = { idToken: a.idToken || null, accessToken: a.accessToken || null, nonce: a.rawNonce || null } : c = { idToken: a || null, accessToken: b || null };
      if (!c.idToken && !c.accessToken)
        throw new t("argument-error", "credential failed: must provide the ID token and/or the access token.");
      return new Gg(this.providerId, c, this.providerId);
    };
    function Mg() {
      Lg.call(this, "facebook.com");
    }
    r(Mg, Lg);
    M(Mg, "PROVIDER_ID", "facebook.com");
    M(Mg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");
    function Ng(a) {
      if (!a)
        throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
      var b = a;
      n(a) && (b = a.accessToken);
      return new Mg().credential({ accessToken: b });
    }
    function Og() {
      Lg.call(this, "github.com");
    }
    r(Og, Lg);
    M(Og, "PROVIDER_ID", "github.com");
    M(Og, "GITHUB_SIGN_IN_METHOD", "github.com");
    function Pg(a) {
      if (!a)
        throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
      var b = a;
      n(a) && (b = a.accessToken);
      return new Og().credential({ accessToken: b });
    }
    function Qg() {
      Lg.call(this, "google.com");
      this.Ca("profile");
    }
    r(Qg, Lg);
    M(Qg, "PROVIDER_ID", "google.com");
    M(Qg, "GOOGLE_SIGN_IN_METHOD", "google.com");
    function Rg(a, b) {
      var c = a;
      n(a) && (c = a.idToken, b = a.accessToken);
      return new Qg().credential({ idToken: c, accessToken: b });
    }
    function Sg() {
      Jg.call(this, "twitter.com", gg);
    }
    r(Sg, Jg);
    M(Sg, "PROVIDER_ID", "twitter.com");
    M(Sg, "TWITTER_SIGN_IN_METHOD", "twitter.com");
    function Tg(a, b) {
      var c = a;
      n(c) || (c = { oauthToken: a, oauthTokenSecret: b });
      if (!c.oauthToken || !c.oauthTokenSecret)
        throw new t("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
      return new Gg("twitter.com", c, "twitter.com");
    }
    function Ug(a, b, c) {
      this.a = a;
      this.f = b;
      M(this, "providerId", "password");
      M(this, "signInMethod", c === Vg.EMAIL_LINK_SIGN_IN_METHOD ? Vg.EMAIL_LINK_SIGN_IN_METHOD : Vg.EMAIL_PASSWORD_SIGN_IN_METHOD);
    }
    Ug.prototype.ja = function(a) {
      return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? O(a, Wg, { email: this.a, oobCode: this.f }) : O(a, Xg, { email: this.a, password: this.f });
    };
    Ug.prototype.b = function(a, b) {
      return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? O(a, Yg, { idToken: b, email: this.a, oobCode: this.f }) : O(a, Zg, { idToken: b, email: this.a, password: this.f });
    };
    Ug.prototype.c = function(a, b) {
      return yg(this.ja(a), b);
    };
    Ug.prototype.w = function() {
      return { email: this.a, password: this.f, signInMethod: this.signInMethod };
    };
    function $g(a) {
      return a && a.email && a.password ? new Ug(a.email, a.password, a.signInMethod) : null;
    }
    function Vg() {
      N(this, { providerId: "password", isOAuthProvider: false });
    }
    function ah(a, b) {
      b = bh(b);
      if (!b)
        throw new t("argument-error", "Invalid email link!");
      return new Ug(a, b.code, Vg.EMAIL_LINK_SIGN_IN_METHOD);
    }
    function bh(a) {
      a = tg(a);
      return (a = Nf(a)) && a.operation === wf ? a : null;
    }
    N(Vg, { PROVIDER_ID: "password" });
    N(Vg, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" });
    N(Vg, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" });
    function ch(a) {
      if (!(a.cb && a.bb || a.La && a.ea))
        throw new t("internal-error");
      this.a = a;
      M(this, "providerId", "phone");
      this.fa = "phone";
      M(this, "signInMethod", "phone");
    }
    ch.prototype.ja = function(a) {
      return a.eb(dh(this));
    };
    ch.prototype.b = function(a, b) {
      var c = dh(this);
      c.idToken = b;
      return O(a, eh, c);
    };
    ch.prototype.c = function(a, b) {
      var c = dh(this);
      c.operation = "REAUTH";
      a = O(a, fh, c);
      return yg(a, b);
    };
    ch.prototype.w = function() {
      var a = { providerId: "phone" };
      this.a.cb && (a.verificationId = this.a.cb);
      this.a.bb && (a.verificationCode = this.a.bb);
      this.a.La && (a.temporaryProof = this.a.La);
      this.a.ea && (a.phoneNumber = this.a.ea);
      return a;
    };
    function gh(a) {
      if (a && a.providerId === "phone" && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
        var b = {};
        w(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(c) {
          a[c] && (b[c] = a[c]);
        });
        return new ch(b);
      }
      return null;
    }
    function dh(a) {
      return a.a.La && a.a.ea ? { temporaryProof: a.a.La, phoneNumber: a.a.ea } : { sessionInfo: a.a.cb, code: a.a.bb };
    }
    function hh(a) {
      try {
        this.a = a || firebase4.auth();
      } catch (b) {
        throw new t("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
      }
      N(this, { providerId: "phone", isOAuthProvider: false });
    }
    hh.prototype.eb = function(a, b) {
      var c = this.a.a;
      return D(b.verify()).then(function(d) {
        if (typeof d !== "string")
          throw new t("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
        switch (b.type) {
          case "recaptcha":
            var e = n(a) ? a.session : null, f = n(a) ? a.phoneNumber : a, g;
            e && e.type == vg ? g = e.Ha().then(function(h) {
              return ih(c, { idToken: h, phoneEnrollmentInfo: { phoneNumber: f, recaptchaToken: d } });
            }) : e && e.type == wg ? g = e.Ha().then(function(h) {
              return jh(c, { mfaPendingCredential: h, mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid, phoneSignInInfo: { recaptchaToken: d } });
            }) : g = kh(c, { phoneNumber: f, recaptchaToken: d });
            return g.then(function(h) {
              typeof b.reset === "function" && b.reset();
              return h;
            }, function(h) {
              typeof b.reset === "function" && b.reset();
              throw h;
            });
          default:
            throw new t("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
        }
      });
    };
    function lh(a, b) {
      if (!a)
        throw new t("missing-verification-id");
      if (!b)
        throw new t("missing-verification-code");
      return new ch({ cb: a, bb: b });
    }
    N(hh, { PROVIDER_ID: "phone" });
    N(hh, { PHONE_SIGN_IN_METHOD: "phone" });
    function mh(a) {
      if (a.temporaryProof && a.phoneNumber)
        return new ch({ La: a.temporaryProof, ea: a.phoneNumber });
      var b = a && a.providerId;
      if (!b || b === "password")
        return null;
      var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret, e = a && a.nonce, f = a && a.oauthIdToken, g = a && a.pendingToken;
      try {
        switch (b) {
          case "google.com":
            return Rg(f, c);
          case "facebook.com":
            return Ng(c);
          case "github.com":
            return Pg(c);
          case "twitter.com":
            return Tg(c, d);
          default:
            return c || d || f || g ? g ? b.indexOf("saml.") == 0 ? new Ag(b, g) : new Gg(b, {
              pendingToken: g,
              idToken: a.oauthIdToken,
              accessToken: a.oauthAccessToken
            }, b) : new Lg(b).credential({ idToken: f, accessToken: c, rawNonce: e }) : null;
        }
      } catch (h) {
        return null;
      }
    }
    function nh(a) {
      if (!a.isOAuthProvider)
        throw new t("invalid-oauth-provider");
    }
    ;
    function oh(a, b, c, d, e, f, g) {
      this.c = a;
      this.b = b || null;
      this.g = c || null;
      this.f = d || null;
      this.i = f || null;
      this.h = g || null;
      this.a = e || null;
      if (this.g || this.a) {
        if (this.g && this.a)
          throw new t("invalid-auth-event");
        if (this.g && !this.f)
          throw new t("invalid-auth-event");
      } else
        throw new t("invalid-auth-event");
    }
    oh.prototype.getUid = function() {
      var a = [];
      a.push(this.c);
      this.b && a.push(this.b);
      this.f && a.push(this.f);
      this.h && a.push(this.h);
      return a.join("-");
    };
    oh.prototype.S = function() {
      return this.h;
    };
    oh.prototype.w = function() {
      return { type: this.c, eventId: this.b, urlResponse: this.g, sessionId: this.f, postBody: this.i, tenantId: this.h, error: this.a && this.a.w() };
    };
    function ph(a) {
      a = a || {};
      return a.type ? new oh(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && ya(a.error), a.postBody, a.tenantId) : null;
    }
    ;
    function qh() {
      this.b = null;
      this.a = [];
    }
    var rh = null;
    function sh(a) {
      var b = rh;
      b.a.push(a);
      b.b || (b.b = function(c) {
        for (var d = 0; d < b.a.length; d++)
          b.a[d](c);
      }, a = L("universalLinks.subscribe", l), typeof a === "function" && a(null, b.b));
    }
    ;
    function th(a) {
      var b = "unauthorized-domain", c = void 0, d = J(a);
      a = d.a;
      d = d.f;
      d == "chrome-extension" ? c = Nb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : d == "http" || d == "https" ? c = Nb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
      t.call(this, b, c);
    }
    r(th, t);
    function uh(a, b, c) {
      t.call(this, a, c);
      a = b || {};
      a.Ib && M(this, "email", a.Ib);
      a.ea && M(this, "phoneNumber", a.ea);
      a.credential && M(this, "credential", a.credential);
      a.Yb && M(this, "tenantId", a.Yb);
    }
    r(uh, t);
    uh.prototype.w = function() {
      var a = { code: this.code, message: this.message };
      this.email && (a.email = this.email);
      this.phoneNumber && (a.phoneNumber = this.phoneNumber);
      this.tenantId && (a.tenantId = this.tenantId);
      var b = this.credential && this.credential.w();
      b && z(a, b);
      return a;
    };
    uh.prototype.toJSON = function() {
      return this.w();
    };
    function vh(a) {
      if (a.code) {
        var b = a.code || "";
        b.indexOf(va) == 0 && (b = b.substring(va.length));
        var c = { credential: mh(a), Yb: a.tenantId };
        if (a.email)
          c.Ib = a.email;
        else if (a.phoneNumber)
          c.ea = a.phoneNumber;
        else if (!c.credential)
          return new t(b, a.message || void 0);
        return new uh(b, c, a.message);
      }
      return null;
    }
    ;
    function wh() {
    }
    wh.prototype.c = null;
    function xh(a) {
      return a.c || (a.c = a.b());
    }
    ;
    var yh;
    function zh() {
    }
    r(zh, wh);
    zh.prototype.a = function() {
      var a = Ah(this);
      return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };
    zh.prototype.b = function() {
      var a = {};
      Ah(this) && (a[0] = true, a[1] = true);
      return a;
    };
    function Ah(a) {
      if (!a.f && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), a.f = d;
          } catch (e) {
          }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.f;
    }
    yh = new zh();
    function Bh() {
    }
    r(Bh, wh);
    Bh.prototype.a = function() {
      var a = new XMLHttpRequest();
      if ("withCredentials" in a)
        return a;
      if (typeof XDomainRequest != "undefined")
        return new Ch();
      throw Error("Unsupported browser");
    };
    Bh.prototype.b = function() {
      return {};
    };
    function Ch() {
      this.a = new XDomainRequest();
      this.readyState = 0;
      this.onreadystatechange = null;
      this.responseType = this.responseText = this.response = "";
      this.status = -1;
      this.statusText = "";
      this.a.onload = q(this.pc, this);
      this.a.onerror = q(this.Rb, this);
      this.a.onprogress = q(this.qc, this);
      this.a.ontimeout = q(this.uc, this);
    }
    k = Ch.prototype;
    k.open = function(a, b, c) {
      if (c != null && !c)
        throw Error("Only async requests are supported.");
      this.a.open(a, b);
    };
    k.send = function(a) {
      if (a)
        if (typeof a == "string")
          this.a.send(a);
        else
          throw Error("Only string data is supported");
      else
        this.a.send();
    };
    k.abort = function() {
      this.a.abort();
    };
    k.setRequestHeader = function() {
    };
    k.getResponseHeader = function(a) {
      return a.toLowerCase() == "content-type" ? this.a.contentType : "";
    };
    k.pc = function() {
      this.status = 200;
      this.response = this.responseText = this.a.responseText;
      Dh(this, 4);
    };
    k.Rb = function() {
      this.status = 500;
      this.response = this.responseText = "";
      Dh(this, 4);
    };
    k.uc = function() {
      this.Rb();
    };
    k.qc = function() {
      this.status = 200;
      Dh(this, 1);
    };
    function Dh(a, b) {
      a.readyState = b;
      if (a.onreadystatechange)
        a.onreadystatechange();
    }
    k.getAllResponseHeaders = function() {
      return "content-type: " + this.a.contentType;
    };
    function Eh(a, b, c) {
      this.reset(a, b, c, void 0, void 0);
    }
    Eh.prototype.a = null;
    var Fh = 0;
    Eh.prototype.reset = function(a, b, c, d, e) {
      typeof e == "number" || Fh++;
      d || ua();
      delete this.a;
    };
    function Gh(a) {
      this.f = a;
      this.b = this.c = this.a = null;
    }
    function Hh(a, b) {
      this.name = a;
      this.value = b;
    }
    Hh.prototype.toString = function() {
      return this.name;
    };
    var Ih = new Hh("SEVERE", 1e3), Jh = new Hh("WARNING", 900), Kh = new Hh("CONFIG", 700), Lh = new Hh("FINE", 500);
    function Mh(a) {
      if (a.c)
        return a.c;
      if (a.a)
        return Mh(a.a);
      Ea("Root logger has no level set.");
      return null;
    }
    Gh.prototype.log = function(a, b, c) {
      if (a.value >= Mh(this).value)
        for (na(b) && (b = b()), a = new Eh(a, String(b), this.f), c && (a.a = c), c = this; c; )
          c = c.a;
    };
    var Nh = {}, Oh = null;
    function Ph(a) {
      Oh || (Oh = new Gh(""), Nh[""] = Oh, Oh.c = Kh);
      var b;
      if (!(b = Nh[a])) {
        b = new Gh(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1);
        c = Ph(a.substr(0, c));
        c.b || (c.b = {});
        c.b[d] = b;
        b.a = c;
        Nh[a] = b;
      }
      return b;
    }
    ;
    function Qh(a, b) {
      a && a.log(Lh, b, void 0);
    }
    ;
    function Rh(a) {
      this.f = a;
    }
    r(Rh, wh);
    Rh.prototype.a = function() {
      return new Sh(this.f);
    };
    Rh.prototype.b = function(a) {
      return function() {
        return a;
      };
    }({});
    function Sh(a) {
      H.call(this);
      this.o = a;
      this.readyState = Th;
      this.status = 0;
      this.responseType = this.responseText = this.response = this.statusText = "";
      this.onreadystatechange = null;
      this.i = new Headers();
      this.b = null;
      this.m = "GET";
      this.g = "";
      this.a = false;
      this.h = Ph("goog.net.FetchXmlHttp");
      this.l = this.c = this.f = null;
    }
    r(Sh, H);
    var Th = 0;
    k = Sh.prototype;
    k.open = function(a, b) {
      if (this.readyState != Th)
        throw this.abort(), Error("Error reopening a connection");
      this.m = a;
      this.g = b;
      this.readyState = 1;
      Uh(this);
    };
    k.send = function(a) {
      if (this.readyState != 1)
        throw this.abort(), Error("need to call open() first. ");
      this.a = true;
      var b = { headers: this.i, method: this.m, credentials: void 0, cache: void 0 };
      a && (b.body = a);
      this.o.fetch(new Request(this.g, b)).then(this.tc.bind(this), this.Ta.bind(this));
    };
    k.abort = function() {
      this.response = this.responseText = "";
      this.i = new Headers();
      this.status = 0;
      this.c && this.c.cancel("Request was aborted.");
      1 <= this.readyState && this.a && this.readyState != 4 && (this.a = false, Vh(this, false));
      this.readyState = Th;
    };
    k.tc = function(a) {
      this.a && (this.f = a, this.b || (this.b = a.headers, this.readyState = 2, Uh(this)), this.a && (this.readyState = 3, Uh(this), this.a && (this.responseType === "arraybuffer" ? a.arrayBuffer().then(this.rc.bind(this), this.Ta.bind(this)) : typeof l.ReadableStream !== "undefined" && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.l = new TextDecoder(), Wh(this)) : a.text().then(this.sc.bind(this), this.Ta.bind(this)))));
    };
    function Wh(a) {
      a.c.read().then(a.oc.bind(a)).catch(a.Ta.bind(a));
    }
    k.oc = function(a) {
      if (this.a) {
        var b = this.l.decode(a.value ? a.value : new Uint8Array(0), { stream: !a.done });
        b && (this.response = this.responseText += b);
        a.done ? Vh(this, true) : Uh(this);
        this.readyState == 3 && Wh(this);
      }
    };
    k.sc = function(a) {
      this.a && (this.response = this.responseText = a, Vh(this, true));
    };
    k.rc = function(a) {
      this.a && (this.response = a, Vh(this, true));
    };
    k.Ta = function(a) {
      var b = this.h;
      b && b.log(Jh, "Failed to fetch url " + this.g, a instanceof Error ? a : Error(a));
      this.a && Vh(this, true);
    };
    function Vh(a, b) {
      b && a.f && (a.status = a.f.status, a.statusText = a.f.statusText);
      a.readyState = 4;
      a.f = null;
      a.c = null;
      a.l = null;
      Uh(a);
    }
    k.setRequestHeader = function(a, b) {
      this.i.append(a, b);
    };
    k.getResponseHeader = function(a) {
      return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.h) && a.log(Jh, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "");
    };
    k.getAllResponseHeaders = function() {
      if (!this.b) {
        var a = this.h;
        a && a.log(Jh, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0);
        return "";
      }
      a = [];
      for (var b = this.b.entries(), c = b.next(); !c.done; )
        c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
      return a.join("\r\n");
    };
    function Uh(a) {
      a.onreadystatechange && a.onreadystatechange.call(a);
    }
    ;
    function Xh(a) {
      H.call(this);
      this.headers = new Ed();
      this.O = a || null;
      this.c = false;
      this.A = this.a = null;
      this.h = this.P = this.l = "";
      this.f = this.N = this.i = this.G = false;
      this.g = 0;
      this.o = null;
      this.m = Yh;
      this.u = this.R = false;
    }
    r(Xh, H);
    var Yh = "";
    Xh.prototype.b = Ph("goog.net.XhrIo");
    var Zh = /^https?$/i, $h = ["POST", "PUT"];
    function ai(a, b, c, d, e) {
      if (a.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b);
      c = c ? c.toUpperCase() : "GET";
      a.l = b;
      a.h = "";
      a.P = c;
      a.G = false;
      a.c = true;
      a.a = a.O ? a.O.a() : yh.a();
      a.A = a.O ? xh(a.O) : xh(yh);
      a.a.onreadystatechange = q(a.Ub, a);
      try {
        Qh(a.b, bi(a, "Opening Xhr")), a.N = true, a.a.open(c, String(b), true), a.N = false;
      } catch (g) {
        Qh(a.b, bi(a, "Error opening Xhr: " + g.message));
        ci(a, g);
        return;
      }
      b = d || "";
      var f = new Ed(a.headers);
      e && Dd(e, function(g, h) {
        f.set(h, g);
      });
      e = Ra(f.Y());
      d = l.FormData && b instanceof l.FormData;
      !Ta($h, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      f.forEach(function(g, h) {
        this.a.setRequestHeader(h, g);
      }, a);
      a.m && (a.a.responseType = a.m);
      "withCredentials" in a.a && a.a.withCredentials !== a.R && (a.a.withCredentials = a.R);
      try {
        di(a), 0 < a.g && (a.u = ei(a.a), Qh(a.b, bi(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.u)), a.u ? (a.a.timeout = a.g, a.a.ontimeout = q(a.Ma, a)) : a.o = zd(a.Ma, a.g, a)), Qh(a.b, bi(a, "Sending request")), a.i = true, a.a.send(b), a.i = false;
      } catch (g) {
        Qh(a.b, bi(a, "Send error: " + g.message)), ci(a, g);
      }
    }
    function ei(a) {
      return Tb && cc(9) && typeof a.timeout === "number" && a.ontimeout !== void 0;
    }
    function Sa(a) {
      return a.toLowerCase() == "content-type";
    }
    k = Xh.prototype;
    k.Ma = function() {
      typeof ha != "undefined" && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Qh(this.b, bi(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
    };
    function ci(a, b) {
      a.c = false;
      a.a && (a.f = true, a.a.abort(), a.f = false);
      a.h = b;
      fi(a);
      gi(a);
    }
    function fi(a) {
      a.G || (a.G = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    }
    k.abort = function() {
      this.a && this.c && (Qh(this.b, bi(this, "Aborting")), this.c = false, this.f = true, this.a.abort(), this.f = false, this.dispatchEvent("complete"), this.dispatchEvent("abort"), gi(this));
    };
    k.Da = function() {
      this.a && (this.c && (this.c = false, this.f = true, this.a.abort(), this.f = false), gi(this, true));
      Xh.$a.Da.call(this);
    };
    k.Ub = function() {
      this.xa || (this.N || this.i || this.f ? hi(this) : this.Ic());
    };
    k.Ic = function() {
      hi(this);
    };
    function hi(a) {
      if (a.c && typeof ha != "undefined") {
        if (a.A[1] && ii(a) == 4 && ji(a) == 2)
          Qh(a.b, bi(a, "Local request error detected and ignored"));
        else if (a.i && ii(a) == 4)
          zd(a.Ub, 0, a);
        else if (a.dispatchEvent("readystatechange"), ii(a) == 4) {
          Qh(a.b, bi(a, "Request complete"));
          a.c = false;
          try {
            var b = ji(a);
            a:
              switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var c = true;
                  break a;
                default:
                  c = false;
              }
            var d;
            if (!(d = c)) {
              var e;
              if (e = b === 0) {
                var f = String(a.l).match(Hd)[1] || null;
                if (!f && l.self && l.self.location) {
                  var g = l.self.location.protocol;
                  f = g.substr(0, g.length - 1);
                }
                e = !Zh.test(f ? f.toLowerCase() : "");
              }
              d = e;
            }
            if (d)
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
              try {
                var h = 2 < ii(a) ? a.a.statusText : "";
              } catch (m) {
                Qh(a.b, "Can not get status: " + m.message), h = "";
              }
              a.h = h + " [" + ji(a) + "]";
              fi(a);
            }
          } finally {
            gi(a);
          }
        }
      }
    }
    function gi(a, b) {
      if (a.a) {
        di(a);
        var c = a.a, d = a.A[0] ? ka : null;
        a.a = null;
        a.A = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.b) && a.log(Ih, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
        }
      }
    }
    function di(a) {
      a.a && a.u && (a.a.ontimeout = null);
      a.o && (l.clearTimeout(a.o), a.o = null);
    }
    function ii(a) {
      return a.a ? a.a.readyState : 0;
    }
    function ji(a) {
      try {
        return 2 < ii(a) ? a.a.status : -1;
      } catch (b) {
        return -1;
      }
    }
    function ki(a) {
      try {
        return a.a ? a.a.responseText : "";
      } catch (b) {
        return Qh(a.b, "Can not get responseText: " + b.message), "";
      }
    }
    k.getResponse = function() {
      try {
        if (!this.a)
          return null;
        if ("response" in this.a)
          return this.a.response;
        switch (this.m) {
          case Yh:
          case "text":
            return this.a.responseText;
          case "arraybuffer":
            if ("mozResponseArrayBuffer" in this.a)
              return this.a.mozResponseArrayBuffer;
        }
        var a = this.b;
        a && a.log(Ih, "Response type " + this.m + " is not supported on this browser", void 0);
        return null;
      } catch (b) {
        return Qh(this.b, "Can not get response: " + b.message), null;
      }
    };
    function bi(a, b) {
      return b + " [" + a.P + " " + a.l + " " + ji(a) + "]";
    }
    ;
    function li(a) {
      var b = mi;
      this.g = [];
      this.u = b;
      this.o = a || null;
      this.f = this.a = false;
      this.c = void 0;
      this.m = this.A = this.i = false;
      this.h = 0;
      this.b = null;
      this.l = 0;
    }
    li.prototype.cancel = function(a) {
      if (this.a)
        this.c instanceof li && this.c.cancel();
      else {
        if (this.b) {
          var b = this.b;
          delete this.b;
          a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel());
        }
        this.u ? this.u.call(this.o, this) : this.m = true;
        this.a || (a = new ni(this), oi(this), pi(this, false, a));
      }
    };
    li.prototype.v = function(a, b) {
      this.i = false;
      pi(this, a, b);
    };
    function pi(a, b, c) {
      a.a = true;
      a.c = c;
      a.f = !b;
      qi(a);
    }
    function oi(a) {
      if (a.a) {
        if (!a.m)
          throw new ri(a);
        a.m = false;
      }
    }
    function si(a, b) {
      ti(a, null, b, void 0);
    }
    function ti(a, b, c, d) {
      a.g.push([b, c, d]);
      a.a && qi(a);
    }
    li.prototype.then = function(a, b, c) {
      var d, e, f = new C(function(g, h) {
        d = g;
        e = h;
      });
      ti(this, d, function(g) {
        g instanceof ni ? f.cancel() : e(g);
      });
      return f.then(a, b, c);
    };
    li.prototype.$goog_Thenable = true;
    function ui(a) {
      return Qa(a.g, function(b) {
        return na(b[1]);
      });
    }
    function qi(a) {
      if (a.h && a.a && ui(a)) {
        var b = a.h, c = vi[b];
        c && (l.clearTimeout(c.a), delete vi[b]);
        a.h = 0;
      }
      a.b && (a.b.l--, delete a.b);
      b = a.c;
      for (var d = c = false; a.g.length && !a.i; ) {
        var e = a.g.shift(), f = e[0], g = e[1];
        e = e[2];
        if (f = a.f ? g : f)
          try {
            var h = f.call(e || a.o, b);
            h !== void 0 && (a.f = a.f && (h == b || h instanceof Error), a.c = b = h);
            if (Ca(b) || typeof l.Promise === "function" && b instanceof l.Promise)
              d = true, a.i = true;
          } catch (m) {
            b = m, a.f = true, ui(a) || (c = true);
          }
      }
      a.c = b;
      d && (h = q(a.v, a, true), d = q(a.v, a, false), b instanceof li ? (ti(b, h, d), b.A = true) : b.then(h, d));
      c && (b = new wi(b), vi[b.a] = b, a.h = b.a);
    }
    function ri() {
      u.call(this);
    }
    r(ri, u);
    ri.prototype.message = "Deferred has already fired";
    ri.prototype.name = "AlreadyCalledError";
    function ni() {
      u.call(this);
    }
    r(ni, u);
    ni.prototype.message = "Deferred was canceled";
    ni.prototype.name = "CanceledError";
    function wi(a) {
      this.a = l.setTimeout(q(this.c, this), 0);
      this.b = a;
    }
    wi.prototype.c = function() {
      delete vi[this.a];
      throw this.b;
    };
    var vi = {};
    function xi(a) {
      var b = {}, c = b.document || document, d = wb(a).toString(), e = jc(document, "SCRIPT"), f = { Vb: e, Ma: void 0 }, g = new li(f), h = null, m = b.timeout != null ? b.timeout : 5e3;
      0 < m && (h = window.setTimeout(function() {
        yi(e, true);
        var p = new zi(Ai, "Timeout reached for loading script " + d);
        oi(g);
        pi(g, false, p);
      }, m), f.Ma = h);
      e.onload = e.onreadystatechange = function() {
        e.readyState && e.readyState != "loaded" && e.readyState != "complete" || (yi(e, b.wd || false, h), oi(g), pi(g, true, null));
      };
      e.onerror = function() {
        yi(e, true, h);
        var p = new zi(Bi, "Error while loading script " + d);
        oi(g);
        pi(g, false, p);
      };
      f = b.attributes || {};
      z(f, { type: "text/javascript", charset: "UTF-8" });
      gc(e, f);
      Mb(e, a);
      Ci(c).appendChild(e);
      return g;
    }
    function Ci(a) {
      var b;
      return (b = (a || document).getElementsByTagName("HEAD")) && b.length != 0 ? b[0] : a.documentElement;
    }
    function mi() {
      if (this && this.Vb) {
        var a = this.Vb;
        a && a.tagName == "SCRIPT" && yi(a, true, this.Ma);
      }
    }
    function yi(a, b, c) {
      c != null && l.clearTimeout(c);
      a.onload = ka;
      a.onerror = ka;
      a.onreadystatechange = ka;
      b && window.setTimeout(function() {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
    }
    var Bi = 0, Ai = 1;
    function zi(a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      u.call(this, c);
      this.code = a;
    }
    r(zi, u);
    function Di(a) {
      this.f = a;
    }
    r(Di, wh);
    Di.prototype.a = function() {
      return new this.f();
    };
    Di.prototype.b = function() {
      return {};
    };
    function Ei(a, b, c) {
      this.c = a;
      a = b || {};
      this.l = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
      this.v = a.secureTokenTimeout || Fi;
      this.g = lb(a.secureTokenHeaders || Gi);
      this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
      this.i = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
      this.m = a.firebaseTimeout || Hi;
      this.a = lb(a.firebaseHeaders || Ii);
      c && (this.a["X-Client-Version"] = c, this.g["X-Client-Version"] = c);
      c = Fe() == "Node";
      c = l.XMLHttpRequest || c && firebase4.INTERNAL.node && firebase4.INTERNAL.node.XMLHttpRequest;
      if (!c && !Ee())
        throw new t("internal-error", "The XMLHttpRequest compatibility library was not found.");
      this.f = void 0;
      Ee() ? this.f = new Rh(self) : Ge() ? this.f = new Di(c) : this.f = new Bh();
      this.b = null;
    }
    var Ji, zg = "idToken", Fi = new Ue(3e4, 6e4), Gi = { "Content-Type": "application/x-www-form-urlencoded" }, Hi = new Ue(3e4, 6e4), Ii = { "Content-Type": "application/json" };
    function Ki(a, b) {
      b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"];
    }
    function Li(a, b) {
      b && (a.l = Mi("https://securetoken.googleapis.com/v1/token", b), a.h = Mi("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b), a.i = Mi("https://identitytoolkit.googleapis.com/v2/", b));
    }
    function Mi(a, b) {
      a = J(a);
      b = J(b.url);
      a.c = a.a + a.c;
      Kd(a, b.f);
      a.a = b.a;
      Ld(a, b.g);
      return a.toString();
    }
    function Ni(a, b) {
      b ? (a.a["X-Client-Version"] = b, a.g["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"]);
    }
    Ei.prototype.S = function() {
      return this.b;
    };
    function Oi(a, b, c, d, e, f, g) {
      pe() || Ee() ? a = q(a.u, a) : (Ji || (Ji = new C(function(h, m) {
        Pi(h, m);
      })), a = q(a.o, a));
      a(b, c, d, e, f, g);
    }
    Ei.prototype.u = function(a, b, c, d, e, f) {
      if (Ee() && (typeof l.fetch === "undefined" || typeof l.Headers === "undefined" || typeof l.Request === "undefined"))
        throw new t("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
      var g = new Xh(this.f);
      if (f) {
        g.g = Math.max(0, f);
        var h = setTimeout(function() {
          g.dispatchEvent("timeout");
        }, f);
      }
      md(g, "complete", function() {
        h && clearTimeout(h);
        var m = null;
        try {
          m = JSON.parse(ki(this)) || null;
        } catch (p) {
          m = null;
        }
        b && b(m);
      });
      sd(g, "ready", function() {
        h && clearTimeout(h);
        Tc(this);
      });
      sd(g, "timeout", function() {
        h && clearTimeout(h);
        Tc(this);
        b && b(null);
      });
      ai(g, a, c, d, e);
    };
    var Qi = new ob(pb, "https://apis.google.com/js/client.js?onload=%{onload}"), Ri = "__fcb" + Math.floor(1e6 * Math.random()).toString();
    function Pi(a, b) {
      if (((window.gapi || {}).client || {}).request)
        a();
      else {
        l[Ri] = function() {
          ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
        };
        var c = xb(Qi, { onload: Ri });
        si(xi(c), function() {
          b(Error("CORS_UNSUPPORTED"));
        });
      }
    }
    Ei.prototype.o = function(a, b, c, d, e) {
      var f = this;
      Ji.then(function() {
        window.gapi.client.setApiKey(f.c);
        var g = window.gapi.auth.getToken();
        window.gapi.auth.setToken(null);
        window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function(h) {
          window.gapi.auth.setToken(g);
          b && b(h);
        } });
      }).s(function(g) {
        b && b({ error: { message: g && g.message || "CORS_UNSUPPORTED" } });
      });
    };
    function Si(a, b) {
      return new C(function(c, d) {
        b.grant_type == "refresh_token" && b.refresh_token || b.grant_type == "authorization_code" && b.code ? Oi(a, a.l + "?key=" + encodeURIComponent(a.c), function(e) {
          e ? e.error ? d(Ti(e)) : e.access_token && e.refresh_token ? c(e) : d(new t("internal-error")) : d(new t("network-request-failed"));
        }, "POST", ae(b).toString(), a.g, a.v.get()) : d(new t("internal-error"));
      });
    }
    function Ui(a, b, c, d, e, f, g) {
      var h = J(b + c);
      I(h, "key", a.c);
      g && I(h, "cb", ua().toString());
      var m = d == "GET";
      if (m)
        for (var p in e)
          e.hasOwnProperty(p) && I(h, p, e[p]);
      return new C(function(v, B) {
        Oi(a, h.toString(), function(A) {
          A ? A.error ? B(Ti(A, f || {})) : v(A) : B(new t("network-request-failed"));
        }, d, m ? void 0 : fe(Qe(e)), a.a, a.m.get());
      });
    }
    function Vi(a) {
      a = a.email;
      if (typeof a !== "string" || !ye.test(a))
        throw new t("invalid-email");
    }
    function Wi(a) {
      "email" in a && Vi(a);
    }
    function Xi(a, b) {
      return O(a, Yi, { identifier: b, continueUri: Ne() ? me() : "http://localhost" }).then(function(c) {
        return c.signinMethods || [];
      });
    }
    function Zi(a) {
      return O(a, $i, {}).then(function(b) {
        return b.authorizedDomains || [];
      });
    }
    function P(a) {
      if (!a[zg]) {
        if (a.mfaPendingCredential)
          throw new t("multi-factor-auth-required", null, lb(a));
        throw new t("internal-error");
      }
    }
    function aj(a) {
      if (a.phoneNumber || a.temporaryProof) {
        if (!a.phoneNumber || !a.temporaryProof)
          throw new t("internal-error");
      } else {
        if (!a.sessionInfo)
          throw new t("missing-verification-id");
        if (!a.code)
          throw new t("missing-verification-code");
      }
    }
    Ei.prototype.yb = function() {
      return O(this, bj, {});
    };
    Ei.prototype.Ab = function(a, b) {
      return O(this, cj, { idToken: a, email: b });
    };
    Ei.prototype.Bb = function(a, b) {
      return O(this, Zg, { idToken: a, password: b });
    };
    var dj = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
    k = Ei.prototype;
    k.Cb = function(a, b) {
      var c = { idToken: a }, d = [];
      jb(dj, function(e, f) {
        var g = b[f];
        g === null ? d.push(e) : f in b && (c[f] = g);
      });
      d.length && (c.deleteAttribute = d);
      return O(this, cj, c);
    };
    k.ub = function(a, b) {
      a = { requestType: "PASSWORD_RESET", email: a };
      z(a, b);
      return O(this, ej, a);
    };
    k.vb = function(a, b) {
      a = { requestType: "EMAIL_SIGNIN", email: a };
      z(a, b);
      return O(this, fj, a);
    };
    k.tb = function(a, b) {
      a = { requestType: "VERIFY_EMAIL", idToken: a };
      z(a, b);
      return O(this, gj, a);
    };
    k.Db = function(a, b, c) {
      a = { requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: a, newEmail: b };
      z(a, c);
      return O(this, hj, a);
    };
    function kh(a, b) {
      return O(a, ij, b);
    }
    k.eb = function(a) {
      return O(this, jj, a);
    };
    function ih(a, b) {
      return O(a, kj, b).then(function(c) {
        return c.phoneSessionInfo.sessionInfo;
      });
    }
    function lj(a) {
      if (!a.phoneVerificationInfo)
        throw new t("internal-error");
      if (!a.phoneVerificationInfo.sessionInfo)
        throw new t("missing-verification-id");
      if (!a.phoneVerificationInfo.code)
        throw new t("missing-verification-code");
    }
    function jh(a, b) {
      return O(a, mj, b).then(function(c) {
        return c.phoneResponseInfo.sessionInfo;
      });
    }
    function nj(a, b, c) {
      return O(a, oj, { idToken: b, deleteProvider: c });
    }
    function pj(a) {
      if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken)
        throw new t("internal-error");
    }
    function qj(a, b) {
      b.oauthIdToken && b.providerId && b.providerId.indexOf("oidc.") == 0 && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Pd(a.postBody), ee(a, "nonce") && (b.nonce = a.get("nonce"))));
      return b;
    }
    function rj(a) {
      var b = null;
      a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = vh(a)) : a.errorMessage == "FEDERATED_USER_ID_ALREADY_LINKED" ? (a.code = "credential-already-in-use", b = vh(a)) : a.errorMessage == "EMAIL_EXISTS" ? (a.code = "email-already-in-use", b = vh(a)) : a.errorMessage && (b = sj(a.errorMessage));
      if (b)
        throw b;
      P(a);
    }
    function Bg(a, b) {
      b.returnIdpCredential = true;
      return O(a, tj, b);
    }
    function Dg(a, b) {
      b.returnIdpCredential = true;
      return O(a, uj, b);
    }
    function Eg(a, b) {
      b.returnIdpCredential = true;
      b.autoCreate = false;
      return O(a, vj, b);
    }
    function wj(a) {
      if (!a.oobCode)
        throw new t("invalid-action-code");
    }
    k.mb = function(a, b) {
      return O(this, xj, { oobCode: a, newPassword: b });
    };
    k.Qa = function(a) {
      return O(this, yj, { oobCode: a });
    };
    k.ib = function(a) {
      return O(this, zj, { oobCode: a });
    };
    var zj = { endpoint: "setAccountInfo", B: wj, Z: "email", C: true }, yj = { endpoint: "resetPassword", B: wj, F: function(a) {
      var b = a.requestType;
      if (!b || !a.email && b != "EMAIL_SIGNIN" && b != "VERIFY_AND_CHANGE_EMAIL")
        throw new t("internal-error");
    }, C: true }, Aj = { endpoint: "signupNewUser", B: function(a) {
      Vi(a);
      if (!a.password)
        throw new t("weak-password");
    }, F: P, U: true, C: true }, Yi = { endpoint: "createAuthUri", C: true }, Bj = { endpoint: "deleteAccount", M: ["idToken"] }, oj = { endpoint: "setAccountInfo", M: ["idToken", "deleteProvider"], B: function(a) {
      if (la(a.deleteProvider) != "array")
        throw new t("internal-error");
    } }, Wg = { endpoint: "emailLinkSignin", M: ["email", "oobCode"], B: Vi, F: P, U: true, C: true }, Yg = { endpoint: "emailLinkSignin", M: ["idToken", "email", "oobCode"], B: Vi, F: P, U: true }, Cj = { endpoint: "accounts/mfaEnrollment:finalize", M: ["idToken", "phoneVerificationInfo"], B: lj, F: P, C: true, Na: true }, Dj = { endpoint: "accounts/mfaSignIn:finalize", M: ["mfaPendingCredential", "phoneVerificationInfo"], B: lj, F: P, C: true, Na: true }, Ej = { endpoint: "getAccountInfo" }, fj = {
      endpoint: "getOobConfirmationCode",
      M: ["requestType"],
      B: function(a) {
        if (a.requestType != "EMAIL_SIGNIN")
          throw new t("internal-error");
        Vi(a);
      },
      Z: "email",
      C: true
    }, gj = { endpoint: "getOobConfirmationCode", M: ["idToken", "requestType"], B: function(a) {
      if (a.requestType != "VERIFY_EMAIL")
        throw new t("internal-error");
    }, Z: "email", C: true }, hj = { endpoint: "getOobConfirmationCode", M: ["idToken", "newEmail", "requestType"], B: function(a) {
      if (a.requestType != "VERIFY_AND_CHANGE_EMAIL")
        throw new t("internal-error");
    }, Z: "email", C: true }, ej = { endpoint: "getOobConfirmationCode", M: ["requestType"], B: function(a) {
      if (a.requestType != "PASSWORD_RESET")
        throw new t("internal-error");
      Vi(a);
    }, Z: "email", C: true }, $i = { kb: true, endpoint: "getProjectConfig", Tb: "GET" }, Fj = { kb: true, endpoint: "getRecaptchaParam", Tb: "GET", F: function(a) {
      if (!a.recaptchaSiteKey)
        throw new t("internal-error");
    } }, xj = { endpoint: "resetPassword", B: wj, Z: "email", C: true }, ij = { endpoint: "sendVerificationCode", M: ["phoneNumber", "recaptchaToken"], Z: "sessionInfo", C: true }, cj = { endpoint: "setAccountInfo", M: ["idToken"], B: Wi, U: true }, Zg = { endpoint: "setAccountInfo", M: ["idToken"], B: function(a) {
      Wi(a);
      if (!a.password)
        throw new t("weak-password");
    }, F: P, U: true }, bj = { endpoint: "signupNewUser", F: P, U: true, C: true }, kj = { endpoint: "accounts/mfaEnrollment:start", M: ["idToken", "phoneEnrollmentInfo"], B: function(a) {
      if (!a.phoneEnrollmentInfo)
        throw new t("internal-error");
      if (!a.phoneEnrollmentInfo.phoneNumber)
        throw new t("missing-phone-number");
      if (!a.phoneEnrollmentInfo.recaptchaToken)
        throw new t("missing-app-credential");
    }, F: function(a) {
      if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
        throw new t("internal-error");
    }, C: true, Na: true }, mj = {
      endpoint: "accounts/mfaSignIn:start",
      M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
      B: function(a) {
        if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
          throw new t("missing-app-credential");
      },
      F: function(a) {
        if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
          throw new t("internal-error");
      },
      C: true,
      Na: true
    }, tj = { endpoint: "verifyAssertion", B: pj, Xa: qj, F: rj, U: true, C: true }, vj = { endpoint: "verifyAssertion", B: pj, Xa: qj, F: function(a) {
      if (a.errorMessage && a.errorMessage == "USER_NOT_FOUND")
        throw new t("user-not-found");
      if (a.errorMessage)
        throw sj(a.errorMessage);
      P(a);
    }, U: true, C: true }, uj = { endpoint: "verifyAssertion", B: function(a) {
      pj(a);
      if (!a.idToken)
        throw new t("internal-error");
    }, Xa: qj, F: rj, U: true }, Gj = { endpoint: "verifyCustomToken", B: function(a) {
      if (!a.token)
        throw new t("invalid-custom-token");
    }, F: P, U: true, C: true }, Xg = { endpoint: "verifyPassword", B: function(a) {
      Vi(a);
      if (!a.password)
        throw new t("wrong-password");
    }, F: P, U: true, C: true }, jj = { endpoint: "verifyPhoneNumber", B: aj, F: P, C: true }, eh = {
      endpoint: "verifyPhoneNumber",
      B: function(a) {
        if (!a.idToken)
          throw new t("internal-error");
        aj(a);
      },
      F: function(a) {
        if (a.temporaryProof)
          throw a.code = "credential-already-in-use", vh(a);
        P(a);
      }
    }, fh = { Gb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", B: aj, F: P, C: true }, Hj = { endpoint: "accounts/mfaEnrollment:withdraw", M: ["idToken", "mfaEnrollmentId"], F: function(a) {
      if (!!a[zg] ^ !!a.refreshToken)
        throw new t("internal-error");
    }, C: true, Na: true };
    function O(a, b, c) {
      if (!hf(c, b.M))
        return E(new t("internal-error"));
      var d = !!b.Na, e = b.Tb || "POST", f;
      return D(c).then(b.B).then(function() {
        b.U && (c.returnSecureToken = true);
        b.C && a.b && typeof c.tenantId === "undefined" && (c.tenantId = a.b);
        return d ? Ui(a, a.i, b.endpoint, e, c, b.Gb, b.kb || false) : Ui(a, a.h, b.endpoint, e, c, b.Gb, b.kb || false);
      }).then(function(g) {
        f = g;
        return b.Xa ? b.Xa(c, f) : f;
      }).then(b.F).then(function() {
        if (!b.Z)
          return f;
        if (!(b.Z in f))
          throw new t("internal-error");
        return f[b.Z];
      });
    }
    function sj(a) {
      return Ti({ error: { errors: [{ message: a }], code: 400, message: a } });
    }
    function Ti(a, b) {
      var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
      var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };
      if (c = d[c] ? new t(d[c]) : null)
        return c;
      c = a.error && a.error.message || "";
      d = {
        INVALID_CUSTOM_TOKEN: "invalid-custom-token",
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_EMAIL: "invalid-email",
        INVALID_PASSWORD: "wrong-password",
        USER_DISABLED: "user-disabled",
        MISSING_PASSWORD: "internal-error",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
        INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
        INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
        INVALID_SENDER: "invalid-sender",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        INVALID_PROVIDER_ID: "invalid-provider-id",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        CORS_UNSUPPORTED: "cors-unsupported",
        DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
        INVALID_APP_ID: "invalid-app-id",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        WEAK_PASSWORD: "weak-password",
        OPERATION_NOT_ALLOWED: "operation-not-allowed",
        USER_CANCELLED: "user-cancelled",
        CAPTCHA_CHECK_FAILED: "captcha-check-failed",
        INVALID_APP_CREDENTIAL: "invalid-app-credential",
        INVALID_CODE: "invalid-verification-code",
        INVALID_PHONE_NUMBER: "invalid-phone-number",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_APP_CREDENTIAL: "missing-app-credential",
        MISSING_CODE: "missing-verification-code",
        MISSING_PHONE_NUMBER: "missing-phone-number",
        MISSING_SESSION_INFO: "missing-verification-id",
        QUOTA_EXCEEDED: "quota-exceeded",
        SESSION_EXPIRED: "code-expired",
        REJECTED_CREDENTIAL: "rejected-credential",
        INVALID_CONTINUE_URI: "invalid-continue-uri",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        INVALID_CERT_HASH: "invalid-cert-hash",
        UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
        INVALID_TENANT_ID: "invalid-tenant-id",
        TENANT_ID_MISMATCH: "tenant-id-mismatch",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
        UNVERIFIED_EMAIL: "unverified-email"
      };
      z(d, b || {});
      b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;
      for (var e in d)
        if (c.indexOf(e) === 0)
          return new t(d[e], b);
      !b && a && (b = Pe(a));
      return new t("internal-error", b);
    }
    ;
    function Ij(a) {
      this.b = a;
      this.a = null;
      this.qb = Jj(this);
    }
    function Jj(a) {
      return Kj().then(function() {
        return new C(function(b, c) {
          L("gapi.iframes.getContext")().open({ where: document.body, url: a.b, messageHandlersFilter: L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: true }, function(d) {
            function e() {
              clearTimeout(f);
              b();
            }
            a.a = d;
            a.a.restyle({ setHideOnLeave: false });
            var f = setTimeout(function() {
              c(Error("Network Error"));
            }, Lj.get());
            d.ping(e).then(e, function() {
              c(Error("Network Error"));
            });
          });
        });
      });
    }
    function Mj(a, b) {
      return a.qb.then(function() {
        return new C(function(c) {
          a.a.send(b.type, b, c, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
        });
      });
    }
    function Nj(a, b) {
      a.qb.then(function() {
        a.a.register("authEvent", b, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    }
    var Oj = new ob(pb, "https://apis.google.com/js/api.js?onload=%{onload}"), Pj = new Ue(3e4, 6e4), Lj = new Ue(5e3, 15e3), Qj = null;
    function Kj() {
      return Qj ? Qj : Qj = new C(function(a, b) {
        function c() {
          Te();
          L("gapi.load")("gapi.iframes", { callback: a, ontimeout: function() {
            Te();
            b(Error("Network Error"));
          }, timeout: Pj.get() });
        }
        if (L("gapi.iframes.Iframe"))
          a();
        else if (L("gapi.load"))
          c();
        else {
          var d = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
          l[d] = function() {
            L("gapi.load") ? c() : b(Error("Network Error"));
          };
          d = xb(Oj, { onload: d });
          D(xi(d)).s(function() {
            b(Error("Network Error"));
          });
        }
      }).s(function(a) {
        Qj = null;
        throw a;
      });
    }
    ;
    function Rj(a, b, c, d) {
      this.l = a;
      this.h = b;
      this.i = c;
      this.g = d;
      this.f = null;
      this.g ? (a = J(this.g.url), a = Yd(a.f, a.a, a.g, "/emulator/auth/iframe")) : a = Yd("https", this.l, null, "/__/auth/iframe");
      this.a = a;
      I(this.a, "apiKey", this.h);
      I(this.a, "appName", this.i);
      this.b = null;
      this.c = [];
    }
    Rj.prototype.toString = function() {
      this.f ? I(this.a, "v", this.f) : de(this.a.b, "v");
      this.b ? I(this.a, "eid", this.b) : de(this.a.b, "eid");
      this.c.length ? I(this.a, "fw", this.c.join(",")) : de(this.a.b, "fw");
      return this.a.toString();
    };
    function Sj(a, b, c, d, e, f) {
      this.u = a;
      this.o = b;
      this.c = c;
      this.v = d;
      this.m = f;
      this.i = this.g = this.l = null;
      this.a = e;
      this.h = this.f = null;
    }
    Sj.prototype.xb = function(a) {
      this.h = a;
      return this;
    };
    Sj.prototype.toString = function() {
      if (this.m) {
        var a = J(this.m.url);
        a = Yd(a.f, a.a, a.g, "/emulator/auth/handler");
      } else
        a = Yd("https", this.u, null, "/__/auth/handler");
      I(a, "apiKey", this.o);
      I(a, "appName", this.c);
      I(a, "authType", this.v);
      if (this.a.isOAuthProvider) {
        var b = this.a;
        try {
          var c = firebase4.app(this.c).auth().ka();
        } catch (h) {
          c = null;
        }
        b.nb = c;
        I(a, "providerId", this.a.providerId);
        c = this.a;
        b = Qe(c.Hb);
        for (var d in b)
          b[d] = b[d].toString();
        d = c.Pc;
        b = lb(b);
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          f in b && delete b[f];
        }
        c.ob && c.nb && !b[c.ob] && (b[c.ob] = c.nb);
        kb(b) || I(a, "customParameters", Pe(b));
      }
      typeof this.a.Pb === "function" && (c = this.a.Pb(), c.length && I(a, "scopes", c.join(",")));
      this.l ? I(a, "redirectUrl", this.l) : de(a.b, "redirectUrl");
      this.g ? I(a, "eventId", this.g) : de(a.b, "eventId");
      this.i ? I(a, "v", this.i) : de(a.b, "v");
      if (this.b)
        for (var g in this.b)
          this.b.hasOwnProperty(g) && !Xd(a, g) && I(a, g, this.b[g]);
      this.h ? I(a, "tid", this.h) : de(a.b, "tid");
      this.f ? I(a, "eid", this.f) : de(a.b, "eid");
      g = Tj(this.c);
      g.length && I(a, "fw", g.join(","));
      return a.toString();
    };
    function Tj(a) {
      try {
        return firebase4.app(a).auth().Ga();
      } catch (b) {
        return [];
      }
    }
    function Uj(a, b, c, d, e, f) {
      this.o = a;
      this.g = b;
      this.b = c;
      this.f = f;
      this.c = d || null;
      this.i = e || null;
      this.l = this.u = this.A = null;
      this.h = [];
      this.v = this.a = null;
    }
    function Vj(a) {
      var b = me();
      return Zi(a).then(function(c) {
        a: {
          var d = J(b), e = d.f;
          d = d.a;
          for (var f = 0; f < c.length; f++) {
            var g = c[f];
            var h = d;
            var m = e;
            g.indexOf("chrome-extension://") == 0 ? h = J(g).a == h && m == "chrome-extension" : m != "http" && m != "https" ? h = false : xe.test(g) ? h = h == g : (g = g.split(".").join("\\."), h = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(h));
            if (h) {
              c = true;
              break a;
            }
          }
          c = false;
        }
        if (!c)
          throw new th(me());
      });
    }
    function Wj(a) {
      if (a.v)
        return a.v;
      a.v = ze().then(function() {
        if (!a.u) {
          var b = a.c, c = a.i, d = Tj(a.b), e = new Rj(a.o, a.g, a.b, a.f);
          e.f = b;
          e.b = c;
          e.c = Xa(d || []);
          a.u = e.toString();
        }
        a.m = new Ij(a.u);
        Xj(a);
      });
      return a.v;
    }
    k = Uj.prototype;
    k.Nb = function(a, b, c) {
      var d = new t("popup-closed-by-user"), e = new t("web-storage-unsupported"), f = this, g = false;
      return this.la().then(function() {
        Yj(f).then(function(h) {
          h || (a && te(a), b(e), g = true);
        });
      }).s(function() {
      }).then(function() {
        if (!g)
          return we(a);
      }).then(function() {
        if (!g)
          return Ad(c).then(function() {
            b(d);
          });
      });
    };
    k.Wb = function() {
      var a = K();
      return !Oe(a) && !Se(a);
    };
    k.Sb = function() {
      return false;
    };
    k.Lb = function(a, b, c, d, e, f, g, h) {
      if (!a)
        return E(new t("popup-blocked"));
      if (g && !Oe())
        return this.la().s(function(p) {
          te(a);
          e(p);
        }), d(), D();
      this.a || (this.a = Vj(Zj(this)));
      var m = this;
      return this.a.then(function() {
        var p = m.la().s(function(v) {
          te(a);
          e(v);
          throw v;
        });
        d();
        return p;
      }).then(function() {
        nh(c);
        if (!g) {
          var p = ak(m.o, m.g, m.b, b, c, null, f, m.c, void 0, m.i, h, m.f);
          ne(p, a);
        }
      }).s(function(p) {
        p.code == "auth/network-request-failed" && (m.a = null);
        throw p;
      });
    };
    function Zj(a) {
      a.l || (a.A = a.c ? Je(a.c, Tj(a.b)) : null, a.l = new Ei(a.g, Aa(a.i), a.A), a.f && Li(a.l, a.f));
      return a.l;
    }
    k.Mb = function(a, b, c, d) {
      this.a || (this.a = Vj(Zj(this)));
      var e = this;
      return this.a.then(function() {
        nh(b);
        var f = ak(e.o, e.g, e.b, a, b, me(), c, e.c, void 0, e.i, d, e.f);
        ne(f);
      }).s(function(f) {
        f.code == "auth/network-request-failed" && (e.a = null);
        throw f;
      });
    };
    k.la = function() {
      var a = this;
      return Wj(this).then(function() {
        return a.m.qb;
      }).s(function() {
        a.a = null;
        throw new t("network-request-failed");
      });
    };
    k.Zb = function() {
      return true;
    };
    function ak(a, b, c, d, e, f, g, h, m, p, v, B) {
      a = new Sj(a, b, c, d, e, B);
      a.l = f;
      a.g = g;
      a.i = h;
      a.b = lb(m || null);
      a.f = p;
      return a.xb(v).toString();
    }
    function Xj(a) {
      if (!a.m)
        throw Error("IfcHandler must be initialized!");
      Nj(a.m, function(b) {
        var c = {};
        if (b && b.authEvent) {
          var d = false;
          b = ph(b.authEvent);
          for (c = 0; c < a.h.length; c++)
            d = a.h[c](b) || d;
          c = {};
          c.status = d ? "ACK" : "ERROR";
          return D(c);
        }
        c.status = "ERROR";
        return D(c);
      });
    }
    function Yj(a) {
      var b = { type: "webStorageSupport" };
      return Wj(a).then(function() {
        return Mj(a.m, b);
      }).then(function(c) {
        if (c && c.length && typeof c[0].webStorageSupport !== "undefined")
          return c[0].webStorageSupport;
        throw Error();
      });
    }
    k.Ea = function(a) {
      this.h.push(a);
    };
    k.Ra = function(a) {
      Va(this.h, function(b) {
        return b == a;
      });
    };
    function bk(a) {
      this.a = a || firebase4.INTERNAL.reactNative && firebase4.INTERNAL.reactNative.AsyncStorage;
      if (!this.a)
        throw new t("internal-error", "The React Native compatibility library was not found.");
      this.type = "asyncStorage";
    }
    k = bk.prototype;
    k.get = function(a) {
      return D(this.a.getItem(a)).then(function(b) {
        return b && Re(b);
      });
    };
    k.set = function(a, b) {
      return D(this.a.setItem(a, Pe(b)));
    };
    k.T = function(a) {
      return D(this.a.removeItem(a));
    };
    k.ca = function() {
    };
    k.ia = function() {
    };
    function ck(a) {
      this.b = a;
      this.a = {};
      this.f = q(this.c, this);
    }
    var dk = [];
    function ek() {
      var a = Ee() ? self : null;
      w(dk, function(c) {
        c.b == a && (b = c);
      });
      if (!b) {
        var b = new ck(a);
        dk.push(b);
      }
      return b;
    }
    ck.prototype.c = function(a) {
      var b = a.data.eventType, c = a.data.eventId, d = this.a[b];
      if (d && 0 < d.length) {
        a.ports[0].postMessage({ status: "ack", eventId: c, eventType: b, response: null });
        var e = [];
        w(d, function(f) {
          e.push(D().then(function() {
            return f(a.origin, a.data.data);
          }));
        });
        Fc(e).then(function(f) {
          var g = [];
          w(f, function(h) {
            g.push({ fulfilled: h.Ob, value: h.value, reason: h.reason ? h.reason.message : void 0 });
          });
          w(g, function(h) {
            for (var m in h)
              typeof h[m] === "undefined" && delete h[m];
          });
          a.ports[0].postMessage({
            status: "done",
            eventId: c,
            eventType: b,
            response: g
          });
        });
      }
    };
    function fk(a, b, c) {
      kb(a.a) && a.b.addEventListener("message", a.f);
      typeof a.a[b] === "undefined" && (a.a[b] = []);
      a.a[b].push(c);
    }
    ;
    function gk(a) {
      this.a = a;
    }
    gk.prototype.postMessage = function(a, b) {
      this.a.postMessage(a, b);
    };
    function hk(a) {
      this.c = a;
      this.b = false;
      this.a = [];
    }
    function ik(a, b, c, d) {
      var e, f = c || {}, g, h, m, p = null;
      if (a.b)
        return E(Error("connection_unavailable"));
      var v = d ? 800 : 50, B = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
      return new C(function(A, Q) {
        B ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), B.port1.start(), h = setTimeout(function() {
          Q(Error("unsupported_event"));
        }, v), g = function(xa) {
          xa.data.eventId === e && (xa.data.status === "ack" ? (clearTimeout(h), m = setTimeout(function() {
            Q(Error("timeout"));
          }, 3e3)) : xa.data.status === "done" ? (clearTimeout(m), typeof xa.data.response !== "undefined" ? A(xa.data.response) : Q(Error("unknown_error"))) : (clearTimeout(h), clearTimeout(m), Q(Error("invalid_response"))));
        }, p = { messageChannel: B, onMessage: g }, a.a.push(p), B.port1.addEventListener("message", g), a.c.postMessage({ eventType: b, eventId: e, data: f }, [B.port2])) : Q(Error("connection_unavailable"));
      }).then(function(A) {
        jk(a, p);
        return A;
      }).s(function(A) {
        jk(a, p);
        throw A;
      });
    }
    function jk(a, b) {
      if (b) {
        var c = b.messageChannel, d = b.onMessage;
        c && (c.port1.removeEventListener("message", d), c.port1.close());
        Va(a.a, function(e) {
          return e == b;
        });
      }
    }
    hk.prototype.close = function() {
      for (; 0 < this.a.length; )
        jk(this, this.a[0]);
      this.b = true;
    };
    function kk() {
      if (!lk())
        throw new t("web-storage-unsupported");
      this.c = {};
      this.a = [];
      this.b = 0;
      this.m = l.indexedDB;
      this.type = "indexedDB";
      this.g = this.l = this.f = this.i = null;
      this.o = false;
      this.h = null;
      var a = this;
      Ee() && self ? (this.l = ek(), fk(this.l, "keyChanged", function(b, c) {
        return mk(a).then(function(d) {
          0 < d.length && w(a.a, function(e) {
            e(d);
          });
          return { keyProcessed: Ta(d, c.key) };
        });
      }), fk(this.l, "ping", function() {
        return D(["keyChanged"]);
      })) : af().then(function(b) {
        if (a.h = b)
          a.g = new hk(new gk(b)), ik(a.g, "ping", null, true).then(function(c) {
            c[0].fulfilled && Ta(c[0].value, "keyChanged") && (a.o = true);
          }).s(function() {
          });
      });
    }
    var nk;
    function ok(a) {
      return new C(function(b, c) {
        var d = a.m.deleteDatabase("firebaseLocalStorageDb");
        d.onsuccess = function() {
          b();
        };
        d.onerror = function(e) {
          c(Error(e.target.error));
        };
      });
    }
    function pk(a) {
      return new C(function(b, c) {
        var d = a.m.open("firebaseLocalStorageDb", 1);
        d.onerror = function(e) {
          try {
            e.preventDefault();
          } catch (f) {
          }
          c(Error(e.target.error));
        };
        d.onupgradeneeded = function(e) {
          e = e.target.result;
          try {
            e.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" });
          } catch (f) {
            c(f);
          }
        };
        d.onsuccess = function(e) {
          e = e.target.result;
          e.objectStoreNames.contains("firebaseLocalStorage") ? b(e) : ok(a).then(function() {
            return pk(a);
          }).then(function(f) {
            b(f);
          }).s(function(f) {
            c(f);
          });
        };
      });
    }
    function qk(a) {
      a.v || (a.v = pk(a));
      return a.v;
    }
    function lk() {
      try {
        return !!l.indexedDB;
      } catch (a) {
        return false;
      }
    }
    function rk(a) {
      return a.objectStore("firebaseLocalStorage");
    }
    function sk(a, b) {
      return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly");
    }
    function tk(a) {
      return new C(function(b, c) {
        a.onsuccess = function(d) {
          d && d.target ? b(d.target.result) : b();
        };
        a.onerror = function(d) {
          c(d.target.error);
        };
      });
    }
    k = kk.prototype;
    k.set = function(a, b) {
      var c = false, d, e = this;
      return qk(this).then(function(f) {
        d = f;
        f = rk(sk(d, true));
        return tk(f.get(a));
      }).then(function(f) {
        var g = rk(sk(d, true));
        if (f)
          return f.value = b, tk(g.put(f));
        e.b++;
        c = true;
        f = {};
        f.fbase_key = a;
        f.value = b;
        return tk(g.add(f));
      }).then(function() {
        e.c[a] = b;
        return uk(e, a);
      }).na(function() {
        c && e.b--;
      });
    };
    function uk(a, b) {
      return a.g && a.h && $e() === a.h ? ik(a.g, "keyChanged", { key: b }, a.o).then(function() {
      }).s(function() {
      }) : D();
    }
    k.get = function(a) {
      return qk(this).then(function(b) {
        return tk(rk(sk(b, false)).get(a));
      }).then(function(b) {
        return b && b.value;
      });
    };
    k.T = function(a) {
      var b = false, c = this;
      return qk(this).then(function(d) {
        b = true;
        c.b++;
        return tk(rk(sk(d, true))["delete"](a));
      }).then(function() {
        delete c.c[a];
        return uk(c, a);
      }).na(function() {
        b && c.b--;
      });
    };
    function mk(a) {
      return qk(a).then(function(b) {
        var c = rk(sk(b, false));
        return c.getAll ? tk(c.getAll()) : new C(function(d, e) {
          var f = [], g = c.openCursor();
          g.onsuccess = function(h) {
            (h = h.target.result) ? (f.push(h.value), h["continue"]()) : d(f);
          };
          g.onerror = function(h) {
            e(h.target.error);
          };
        });
      }).then(function(b) {
        var c = {}, d = [];
        if (a.b == 0) {
          for (d = 0; d < b.length; d++)
            c[b[d].fbase_key] = b[d].value;
          d = oe(a.c, c);
          a.c = c;
        }
        return d;
      });
    }
    k.ca = function(a) {
      this.a.length == 0 && vk(this);
      this.a.push(a);
    };
    k.ia = function(a) {
      Va(this.a, function(b) {
        return b == a;
      });
      this.a.length == 0 && wk(this);
    };
    function vk(a) {
      function b() {
        a.f = setTimeout(function() {
          a.i = mk(a).then(function(c) {
            0 < c.length && w(a.a, function(d) {
              d(c);
            });
          }).then(function() {
            b();
          }).s(function(c) {
            c.message != "STOP_EVENT" && b();
          });
        }, 800);
      }
      wk(a);
      b();
    }
    function wk(a) {
      a.i && a.i.cancel("STOP_EVENT");
      a.f && (clearTimeout(a.f), a.f = null);
    }
    ;
    function xk(a) {
      var b = this, c = null;
      this.a = [];
      this.type = "indexedDB";
      this.c = a;
      this.b = D().then(function() {
        if (lk()) {
          var d = Le(), e = "__sak" + d;
          nk || (nk = new kk());
          c = nk;
          return c.set(e, d).then(function() {
            return c.get(e);
          }).then(function(f) {
            if (f !== d)
              throw Error("indexedDB not supported!");
            return c.T(e);
          }).then(function() {
            return c;
          }).s(function() {
            return b.c;
          });
        }
        return b.c;
      }).then(function(d) {
        b.type = d.type;
        d.ca(function(e) {
          w(b.a, function(f) {
            f(e);
          });
        });
        return d;
      });
    }
    k = xk.prototype;
    k.get = function(a) {
      return this.b.then(function(b) {
        return b.get(a);
      });
    };
    k.set = function(a, b) {
      return this.b.then(function(c) {
        return c.set(a, b);
      });
    };
    k.T = function(a) {
      return this.b.then(function(b) {
        return b.T(a);
      });
    };
    k.ca = function(a) {
      this.a.push(a);
    };
    k.ia = function(a) {
      Va(this.a, function(b) {
        return b == a;
      });
    };
    function yk() {
      this.a = {};
      this.type = "inMemory";
    }
    k = yk.prototype;
    k.get = function(a) {
      return D(this.a[a]);
    };
    k.set = function(a, b) {
      this.a[a] = b;
      return D();
    };
    k.T = function(a) {
      delete this.a[a];
      return D();
    };
    k.ca = function() {
    };
    k.ia = function() {
    };
    function zk() {
      if (!Ak()) {
        if (Fe() == "Node")
          throw new t("internal-error", "The LocalStorage compatibility library was not found.");
        throw new t("web-storage-unsupported");
      }
      this.a = Bk() || firebase4.INTERNAL.node.localStorage;
      this.type = "localStorage";
    }
    function Bk() {
      try {
        var a = l.localStorage, b = Le();
        a && (a.setItem(b, "1"), a.removeItem(b));
        return a;
      } catch (c) {
        return null;
      }
    }
    function Ak() {
      var a = Fe() == "Node";
      a = Bk() || a && firebase4.INTERNAL.node && firebase4.INTERNAL.node.localStorage;
      if (!a)
        return false;
      try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
      } catch (b) {
        return false;
      }
    }
    k = zk.prototype;
    k.get = function(a) {
      var b = this;
      return D().then(function() {
        var c = b.a.getItem(a);
        return Re(c);
      });
    };
    k.set = function(a, b) {
      var c = this;
      return D().then(function() {
        var d = Pe(b);
        d === null ? c.T(a) : c.a.setItem(a, d);
      });
    };
    k.T = function(a) {
      var b = this;
      return D().then(function() {
        b.a.removeItem(a);
      });
    };
    k.ca = function(a) {
      l.window && jd(l.window, "storage", a);
    };
    k.ia = function(a) {
      l.window && G(l.window, "storage", a);
    };
    function Ck() {
      this.type = "nullStorage";
    }
    k = Ck.prototype;
    k.get = function() {
      return D(null);
    };
    k.set = function() {
      return D();
    };
    k.T = function() {
      return D();
    };
    k.ca = function() {
    };
    k.ia = function() {
    };
    function Dk() {
      if (!Ek()) {
        if (Fe() == "Node")
          throw new t("internal-error", "The SessionStorage compatibility library was not found.");
        throw new t("web-storage-unsupported");
      }
      this.a = Fk() || firebase4.INTERNAL.node.sessionStorage;
      this.type = "sessionStorage";
    }
    function Fk() {
      try {
        var a = l.sessionStorage, b = Le();
        a && (a.setItem(b, "1"), a.removeItem(b));
        return a;
      } catch (c) {
        return null;
      }
    }
    function Ek() {
      var a = Fe() == "Node";
      a = Fk() || a && firebase4.INTERNAL.node && firebase4.INTERNAL.node.sessionStorage;
      if (!a)
        return false;
      try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
      } catch (b) {
        return false;
      }
    }
    k = Dk.prototype;
    k.get = function(a) {
      var b = this;
      return D().then(function() {
        var c = b.a.getItem(a);
        return Re(c);
      });
    };
    k.set = function(a, b) {
      var c = this;
      return D().then(function() {
        var d = Pe(b);
        d === null ? c.T(a) : c.a.setItem(a, d);
      });
    };
    k.T = function(a) {
      var b = this;
      return D().then(function() {
        b.a.removeItem(a);
      });
    };
    k.ca = function() {
    };
    k.ia = function() {
    };
    function Gk() {
      var a = {};
      a.Browser = Hk;
      a.Node = Ik;
      a.ReactNative = Jk;
      a.Worker = Kk;
      this.a = a[Fe()];
    }
    var Lk, Hk = { D: zk, ab: Dk }, Ik = { D: zk, ab: Dk }, Jk = { D: bk, ab: Ck }, Kk = { D: zk, ab: Ck };
    var Mk = { qd: "local", NONE: "none", sd: "session" };
    function Nk(a) {
      var b = new t("invalid-persistence-type"), c = new t("unsupported-persistence-type");
      a: {
        for (d in Mk)
          if (Mk[d] == a) {
            var d = true;
            break a;
          }
        d = false;
      }
      if (!d || typeof a !== "string")
        throw b;
      switch (Fe()) {
        case "ReactNative":
          if (a === "session")
            throw c;
          break;
        case "Node":
          if (a !== "none")
            throw c;
          break;
        case "Worker":
          if (a === "session" || !lk() && a !== "none")
            throw c;
          break;
        default:
          if (!Ke() && a !== "none")
            throw c;
      }
    }
    function Ok() {
      var a = !Se(K()) && De() ? true : false, b = Oe(), c = Ke();
      this.v = a;
      this.h = b;
      this.l = c;
      this.a = {};
      Lk || (Lk = new Gk());
      a = Lk;
      try {
        this.g = !le() && Ze() || !l.indexedDB ? new a.a.D() : new xk(Ee() ? new yk() : new a.a.D());
      } catch (d) {
        this.g = new yk(), this.h = true;
      }
      try {
        this.i = new a.a.ab();
      } catch (d) {
        this.i = new yk();
      }
      this.m = new yk();
      this.f = q(this.Xb, this);
      this.b = {};
    }
    var Pk;
    function Qk() {
      Pk || (Pk = new Ok());
      return Pk;
    }
    function Rk(a, b) {
      switch (b) {
        case "session":
          return a.i;
        case "none":
          return a.m;
        default:
          return a.g;
      }
    }
    function Sk(a, b) {
      return "firebase:" + a.name + (b ? ":" + b : "");
    }
    function Tk(a, b, c) {
      var d = Sk(b, c), e = Rk(a, b.D);
      return a.get(b, c).then(function(f) {
        var g = null;
        try {
          g = Re(l.localStorage.getItem(d));
        } catch (h) {
        }
        if (g && !f)
          return l.localStorage.removeItem(d), a.set(b, g, c);
        g && f && e.type != "localStorage" && l.localStorage.removeItem(d);
      });
    }
    k = Ok.prototype;
    k.get = function(a, b) {
      return Rk(this, a.D).get(Sk(a, b));
    };
    function Uk(a, b, c) {
      c = Sk(b, c);
      b.D == "local" && (a.b[c] = null);
      return Rk(a, b.D).T(c);
    }
    k.set = function(a, b, c) {
      var d = Sk(a, c), e = this, f = Rk(this, a.D);
      return f.set(d, b).then(function() {
        return f.get(d);
      }).then(function(g) {
        a.D == "local" && (e.b[d] = g);
      });
    };
    k.addListener = function(a, b, c) {
      a = Sk(a, b);
      this.l && (this.b[a] = l.localStorage.getItem(a));
      kb(this.a) && (Rk(this, "local").ca(this.f), this.h || (le() || !Ze()) && l.indexedDB || !this.l || Vk(this));
      this.a[a] || (this.a[a] = []);
      this.a[a].push(c);
    };
    k.removeListener = function(a, b, c) {
      a = Sk(a, b);
      this.a[a] && (Va(this.a[a], function(d) {
        return d == c;
      }), this.a[a].length == 0 && delete this.a[a]);
      kb(this.a) && (Rk(this, "local").ia(this.f), Wk(this));
    };
    function Vk(a) {
      Wk(a);
      a.c = setInterval(function() {
        for (var b in a.a) {
          var c = l.localStorage.getItem(b), d = a.b[b];
          c != d && (a.b[b] = c, c = new Yc({ type: "storage", key: b, target: window, oldValue: d, newValue: c, a: true }), a.Xb(c));
        }
      }, 1e3);
    }
    function Wk(a) {
      a.c && (clearInterval(a.c), a.c = null);
    }
    k.Xb = function(a) {
      if (a && a.g) {
        var b = a.a.key;
        if (b == null)
          for (var c in this.a) {
            var d = this.b[c];
            typeof d === "undefined" && (d = null);
            var e = l.localStorage.getItem(c);
            e !== d && (this.b[c] = e, this.lb(c));
          }
        else if (b.indexOf("firebase:") == 0 && this.a[b]) {
          typeof a.a.a !== "undefined" ? Rk(this, "local").ia(this.f) : Wk(this);
          if (this.v) {
            if (c = l.localStorage.getItem(b), d = a.a.newValue, d !== c)
              d !== null ? l.localStorage.setItem(b, d) : l.localStorage.removeItem(b);
            else if (this.b[b] === d && typeof a.a.a === "undefined")
              return;
          }
          var f = this;
          c = function() {
            if (typeof a.a.a !== "undefined" || f.b[b] !== l.localStorage.getItem(b))
              f.b[b] = l.localStorage.getItem(b), f.lb(b);
          };
          Tb && dc && dc == 10 && l.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
        }
      } else
        w(a, q(this.lb, this));
    };
    k.lb = function(a) {
      this.a[a] && w(this.a[a], function(b) {
        b();
      });
    };
    function Xk(a) {
      this.a = a;
      this.b = Qk();
    }
    var Yk = { name: "authEvent", D: "local" };
    function Zk(a) {
      return a.b.get(Yk, a.a).then(function(b) {
        return ph(b);
      });
    }
    ;
    function $k() {
      this.a = Qk();
    }
    ;
    function al() {
      this.b = -1;
    }
    ;
    function bl(a, b) {
      this.b = cl;
      this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
      this.g = this.c = 0;
      this.a = [];
      this.i = a;
      this.h = b;
      this.l = l.Int32Array ? new Int32Array(64) : Array(64);
      dl === void 0 && (l.Int32Array ? dl = new Int32Array(el) : dl = el);
      this.reset();
    }
    var dl;
    r(bl, al);
    for (var cl = 64, fl = cl - 1, gl = [], hl = 0; hl < fl; hl++)
      gl[hl] = 0;
    var il = Wa(128, gl);
    bl.prototype.reset = function() {
      this.g = this.c = 0;
      this.a = l.Int32Array ? new Int32Array(this.h) : Xa(this.h);
    };
    function jl(a) {
      for (var b = a.f, c = a.l, d = 0, e = 0; e < b.length; )
        c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
      for (b = 16; 64 > b; b++) {
        e = c[b - 15] | 0;
        d = c[b - 2] | 0;
        var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0, g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
        c[b] = f + g | 0;
      }
      d = a.a[0] | 0;
      e = a.a[1] | 0;
      var h = a.a[2] | 0, m = a.a[3] | 0, p = a.a[4] | 0, v = a.a[5] | 0, B = a.a[6] | 0;
      f = a.a[7] | 0;
      for (b = 0; 64 > b; b++) {
        var A = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
        g = p & v ^ ~p & B;
        f = f + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) | 0;
        g = g + (dl[b] | 0) | 0;
        g = f + (g + (c[b] | 0) | 0) | 0;
        f = B;
        B = v;
        v = p;
        p = m + g | 0;
        m = h;
        h = e;
        e = d;
        d = g + A | 0;
      }
      a.a[0] = a.a[0] + d | 0;
      a.a[1] = a.a[1] + e | 0;
      a.a[2] = a.a[2] + h | 0;
      a.a[3] = a.a[3] + m | 0;
      a.a[4] = a.a[4] + p | 0;
      a.a[5] = a.a[5] + v | 0;
      a.a[6] = a.a[6] + B | 0;
      a.a[7] = a.a[7] + f | 0;
    }
    function kl(a, b, c) {
      c === void 0 && (c = b.length);
      var d = 0, e = a.c;
      if (typeof b === "string")
        for (; d < c; )
          a.f[e++] = b.charCodeAt(d++), e == a.b && (jl(a), e = 0);
      else if (ma(b))
        for (; d < c; ) {
          var f = b[d++];
          if (!(typeof f == "number" && 0 <= f && 255 >= f && f == (f | 0)))
            throw Error("message must be a byte array");
          a.f[e++] = f;
          e == a.b && (jl(a), e = 0);
        }
      else
        throw Error("message must be string or array");
      a.c = e;
      a.g += c;
    }
    var el = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    function ll() {
      bl.call(this, 8, ml);
    }
    r(ll, bl);
    var ml = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    function nl(a, b, c, d, e, f) {
      this.m = a;
      this.i = b;
      this.l = c;
      this.v = d || null;
      this.u = e || null;
      this.o = f;
      this.h = b + ":" + c;
      this.A = new $k();
      this.g = new Xk(this.h);
      this.f = null;
      this.b = [];
      this.a = this.c = null;
    }
    function ol(a) {
      return new t("invalid-cordova-configuration", a);
    }
    k = nl.prototype;
    k.la = function() {
      return this.Ia ? this.Ia : this.Ia = Ae().then(function() {
        if (typeof L("universalLinks.subscribe", l) !== "function")
          throw ol("cordova-universal-links-plugin-fix is not installed");
        if (typeof L("BuildInfo.packageName", l) === "undefined")
          throw ol("cordova-plugin-buildinfo is not installed");
        if (typeof L("cordova.plugins.browsertab.openUrl", l) !== "function")
          throw ol("cordova-plugin-browsertab is not installed");
        if (typeof L("cordova.InAppBrowser.open", l) !== "function")
          throw ol("cordova-plugin-inappbrowser is not installed");
      }, function() {
        throw new t("cordova-not-ready");
      });
    };
    function pl() {
      for (var a = 20, b = []; 0 < a; )
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      return b.join("");
    }
    function ql(a) {
      var b = new ll();
      kl(b, a);
      a = [];
      var c = 8 * b.g;
      56 > b.c ? kl(b, il, 56 - b.c) : kl(b, il, b.b - (b.c - 56));
      for (var d = 63; 56 <= d; d--)
        b.f[d] = c & 255, c /= 256;
      jl(b);
      for (d = c = 0; d < b.i; d++)
        for (var e = 24; 0 <= e; e -= 8)
          a[c++] = b.a[d] >> e & 255;
      return Zf(a);
    }
    k.Nb = function(a, b) {
      b(new t("operation-not-supported-in-this-environment"));
      return D();
    };
    k.Lb = function() {
      return E(new t("operation-not-supported-in-this-environment"));
    };
    k.Zb = function() {
      return false;
    };
    k.Wb = function() {
      return true;
    };
    k.Sb = function() {
      return true;
    };
    k.Mb = function(a, b, c, d) {
      if (this.c)
        return E(new t("redirect-operation-pending"));
      var e = this, f = l.document, g = null, h = null, m = null, p = null;
      return this.c = D().then(function() {
        nh(b);
        return rl(e);
      }).then(function() {
        return sl(e, a, b, c, d);
      }).then(function() {
        return new C(function(v, B) {
          h = function() {
            var A = L("cordova.plugins.browsertab.close", l);
            v();
            typeof A === "function" && A();
            e.a && typeof e.a.close === "function" && (e.a.close(), e.a = null);
            return false;
          };
          e.Ea(h);
          m = function() {
            g || (g = Ad(2e3).then(function() {
              B(new t("redirect-cancelled-by-user"));
            }));
          };
          p = function() {
            Ve() && m();
          };
          f.addEventListener("resume", m, false);
          K().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p, false);
        }).s(function(v) {
          return tl(e).then(function() {
            throw v;
          });
        });
      }).na(function() {
        m && f.removeEventListener("resume", m, false);
        p && f.removeEventListener("visibilitychange", p, false);
        g && g.cancel();
        h && e.Ra(h);
        e.c = null;
      });
    };
    function sl(a, b, c, d, e) {
      var f = pl(), g = new oh(b, d, null, f, new t("no-auth-event"), null, e), h = L("BuildInfo.packageName", l);
      if (typeof h !== "string")
        throw new t("invalid-cordova-configuration");
      var m = L("BuildInfo.displayName", l), p = {};
      if (K().toLowerCase().match(/iphone|ipad|ipod/))
        p.ibi = h;
      else if (K().toLowerCase().match(/android/))
        p.apn = h;
      else
        return E(new t("operation-not-supported-in-this-environment"));
      m && (p.appDisplayName = m);
      f = ql(f);
      p.sessionId = f;
      var v = ak(a.m, a.i, a.l, b, c, null, d, a.v, p, a.u, e, a.o);
      return a.la().then(function() {
        var B = a.h;
        return a.A.a.set(Yk, g.w(), B);
      }).then(function() {
        var B = L("cordova.plugins.browsertab.isAvailable", l);
        if (typeof B !== "function")
          throw new t("invalid-cordova-configuration");
        var A = null;
        B(function(Q) {
          if (Q) {
            A = L("cordova.plugins.browsertab.openUrl", l);
            if (typeof A !== "function")
              throw new t("invalid-cordova-configuration");
            A(v);
          } else {
            A = L("cordova.InAppBrowser.open", l);
            if (typeof A !== "function")
              throw new t("invalid-cordova-configuration");
            Q = K();
            a.a = A(v, Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
          }
        });
      });
    }
    function ul(a, b) {
      for (var c = 0; c < a.b.length; c++)
        try {
          a.b[c](b);
        } catch (d) {
        }
    }
    function rl(a) {
      a.f || (a.f = a.la().then(function() {
        return new C(function(b) {
          function c(d) {
            b(d);
            a.Ra(c);
            return false;
          }
          a.Ea(c);
          vl(a);
        });
      }));
      return a.f;
    }
    function tl(a) {
      var b = null;
      return Zk(a.g).then(function(c) {
        b = c;
        c = a.g;
        return Uk(c.b, Yk, c.a);
      }).then(function() {
        return b;
      });
    }
    function vl(a) {
      function b(g) {
        d = true;
        e && e.cancel();
        tl(a).then(function(h) {
          var m = c;
          if (h && g && g.url) {
            var p = null;
            m = tg(g.url);
            m.indexOf("/__/auth/callback") != -1 && (p = J(m), p = Re(Xd(p, "firebaseError") || null), p = (p = typeof p === "object" ? ya(p) : null) ? new oh(h.c, h.b, null, null, p, null, h.S()) : new oh(h.c, h.b, m, h.f, null, null, h.S()));
            m = p || c;
          }
          ul(a, m);
        });
      }
      var c = new oh("unknown", null, null, null, new t("no-auth-event")), d = false, e = Ad(500).then(function() {
        return tl(a).then(function() {
          d || ul(a, c);
        });
      }), f = l.handleOpenURL;
      l.handleOpenURL = function(g) {
        g.toLowerCase().indexOf(L("BuildInfo.packageName", l).toLowerCase() + "://") == 0 && b({ url: g });
        if (typeof f === "function")
          try {
            f(g);
          } catch (h) {
            console.error(h);
          }
      };
      rh || (rh = new qh());
      sh(b);
    }
    k.Ea = function(a) {
      this.b.push(a);
      rl(this).s(function(b) {
        b.code === "auth/invalid-cordova-configuration" && (b = new oh("unknown", null, null, null, new t("no-auth-event")), a(b));
      });
    };
    k.Ra = function(a) {
      Va(this.b, function(b) {
        return b == a;
      });
    };
    function wl(a) {
      this.a = a;
      this.b = Qk();
    }
    var xl = { name: "pendingRedirect", D: "session" };
    function yl(a) {
      return a.b.set(xl, "pending", a.a);
    }
    function zl(a) {
      return Uk(a.b, xl, a.a);
    }
    function Al(a) {
      return a.b.get(xl, a.a).then(function(b) {
        return b == "pending";
      });
    }
    ;
    function Bl(a, b, c, d) {
      this.i = {};
      this.u = 0;
      this.O = a;
      this.m = b;
      this.v = c;
      this.G = d;
      this.h = [];
      this.f = false;
      this.l = q(this.o, this);
      this.b = new Cl();
      this.A = new Dl();
      this.g = new wl(El(this.m, this.v));
      this.c = {};
      this.c.unknown = this.b;
      this.c.signInViaRedirect = this.b;
      this.c.linkViaRedirect = this.b;
      this.c.reauthViaRedirect = this.b;
      this.c.signInViaPopup = this.A;
      this.c.linkViaPopup = this.A;
      this.c.reauthViaPopup = this.A;
      this.a = Fl(this.O, this.m, this.v, Ba, this.G);
    }
    function Fl(a, b, c, d, e) {
      var f = firebase4.SDK_VERSION || null;
      return Be() ? new nl(a, b, c, f, d, e) : new Uj(a, b, c, f, d, e);
    }
    Bl.prototype.reset = function() {
      this.f = false;
      this.a.Ra(this.l);
      this.a = Fl(this.O, this.m, this.v, null, this.G);
      this.i = {};
    };
    function Gl(a) {
      a.f || (a.f = true, a.a.Ea(a.l));
      var b = a.a;
      return a.a.la().s(function(c) {
        a.a == b && a.reset();
        throw c;
      });
    }
    function Hl(a) {
      a.a.Wb() && Gl(a).s(function(b) {
        var c = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
        Il(b) && a.o(c);
      });
      a.a.Sb() || Jl(a.b);
    }
    function Kl(a, b) {
      Ta(a.h, b) || a.h.push(b);
      a.f || Al(a.g).then(function(c) {
        c ? zl(a.g).then(function() {
          Gl(a).s(function(d) {
            var e = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
            Il(d) && a.o(e);
          });
        }) : Hl(a);
      }).s(function() {
        Hl(a);
      });
    }
    function Ll(a, b) {
      Va(a.h, function(c) {
        return c == b;
      });
    }
    Bl.prototype.o = function(a) {
      if (!a)
        throw new t("invalid-auth-event");
      6e5 <= ua() - this.u && (this.i = {}, this.u = 0);
      if (a && a.getUid() && this.i.hasOwnProperty(a.getUid()))
        return false;
      for (var b = false, c = 0; c < this.h.length; c++) {
        var d = this.h[c];
        if (d.Eb(a.c, a.b)) {
          if (b = this.c[a.c])
            b.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = true, this.u = ua());
          b = true;
          break;
        }
      }
      Jl(this.b);
      return b;
    };
    var Ml = new Ue(2e3, 1e4), Nl = new Ue(3e4, 6e4);
    Bl.prototype.qa = function() {
      return this.b.qa();
    };
    function Ol(a, b, c, d, e, f, g) {
      return a.a.Lb(b, c, d, function() {
        a.f || (a.f = true, a.a.Ea(a.l));
      }, function() {
        a.reset();
      }, e, f, g);
    }
    function Il(a) {
      return a && a.code == "auth/cordova-not-ready" ? true : false;
    }
    function Pl(a, b, c, d, e) {
      var f;
      return yl(a.g).then(function() {
        return a.a.Mb(b, c, d, e).s(function(g) {
          if (Il(g))
            throw new t("operation-not-supported-in-this-environment");
          f = g;
          return zl(a.g).then(function() {
            throw f;
          });
        }).then(function() {
          return a.a.Zb() ? new C(function() {
          }) : zl(a.g).then(function() {
            return a.qa();
          }).then(function() {
          }).s(function() {
          });
        });
      });
    }
    function Ql(a, b, c, d, e) {
      return a.a.Nb(d, function(f) {
        b.ma(c, null, f, e);
      }, Ml.get());
    }
    var Rl = {};
    function El(a, b, c) {
      a = a + ":" + b;
      c && (a = a + ":" + c.url);
      return a;
    }
    function Sl(a, b, c, d) {
      var e = El(b, c, d);
      Rl[e] || (Rl[e] = new Bl(a, b, c, d));
      return Rl[e];
    }
    function Cl() {
      this.b = null;
      this.f = [];
      this.c = [];
      this.a = null;
      this.i = this.g = false;
    }
    Cl.prototype.reset = function() {
      this.b = null;
      this.a && (this.a.cancel(), this.a = null);
    };
    Cl.prototype.h = function(a, b) {
      if (a) {
        this.reset();
        this.g = true;
        var c = a.c, d = a.b, e = a.a && a.a.code == "auth/web-storage-unsupported", f = a.a && a.a.code == "auth/operation-not-supported-in-this-environment";
        this.i = !(!e && !f);
        c != "unknown" || e || f ? a.a ? (Tl(this, true, null, a.a), D()) : b.Fa(c, d) ? Ul(this, a, b) : E(new t("invalid-auth-event")) : (Tl(this, false, null, null), D());
      } else
        E(new t("invalid-auth-event"));
    };
    function Jl(a) {
      a.g || (a.g = true, Tl(a, false, null, null));
    }
    function Vl(a) {
      a.g && !a.i && Tl(a, false, null, null);
    }
    function Ul(a, b, c) {
      c = c.Fa(b.c, b.b);
      var d = b.g, e = b.f, f = b.i, g = b.S(), h = !!b.c.match(/Redirect$/);
      c(d, e, g, f).then(function(m) {
        Tl(a, h, m, null);
      }).s(function(m) {
        Tl(a, h, null, m);
      });
    }
    function Wl(a, b) {
      a.b = function() {
        return E(b);
      };
      if (a.c.length)
        for (var c = 0; c < a.c.length; c++)
          a.c[c](b);
    }
    function Xl(a, b) {
      a.b = function() {
        return D(b);
      };
      if (a.f.length)
        for (var c = 0; c < a.f.length; c++)
          a.f[c](b);
    }
    function Tl(a, b, c, d) {
      b ? d ? Wl(a, d) : Xl(a, c) : Xl(a, { user: null });
      a.f = [];
      a.c = [];
    }
    Cl.prototype.qa = function() {
      var a = this;
      return new C(function(b, c) {
        a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), Yl(a));
      });
    };
    function Yl(a) {
      var b = new t("timeout");
      a.a && a.a.cancel();
      a.a = Ad(Nl.get()).then(function() {
        a.b || (a.g = true, Tl(a, true, null, b));
      });
    }
    function Dl() {
    }
    Dl.prototype.h = function(a, b) {
      if (a) {
        var c = a.c, d = a.b;
        a.a ? (b.ma(a.c, null, a.a, a.b), D()) : b.Fa(c, d) ? Zl(a, b) : E(new t("invalid-auth-event"));
      } else
        E(new t("invalid-auth-event"));
    };
    function Zl(a, b) {
      var c = a.b, d = a.c;
      b.Fa(d, c)(a.g, a.f, a.S(), a.i).then(function(e) {
        b.ma(d, e, null, c);
      }).s(function(e) {
        b.ma(d, null, e, c);
      });
    }
    ;
    function $l() {
      this.hb = false;
      Object.defineProperty(this, "appVerificationDisabled", { get: function() {
        return this.hb;
      }, set: function(a) {
        this.hb = a;
      }, enumerable: false });
    }
    ;
    function am(a, b) {
      this.a = b;
      M(this, "verificationId", a);
    }
    am.prototype.confirm = function(a) {
      a = lh(this.verificationId, a);
      return this.a(a);
    };
    function bm(a, b, c, d) {
      return new hh(a).eb(b, c).then(function(e) {
        return new am(e, d);
      });
    }
    ;
    function cm(a) {
      var b = eg(a);
      if (!(b && b.exp && b.auth_time && b.iat))
        throw new t("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
      N(this, { token: a, expirationTime: Ye(1e3 * b.exp), authTime: Ye(1e3 * b.auth_time), issuedAtTime: Ye(1e3 * b.iat), signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null, signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null, claims: b });
    }
    ;
    function dm(a, b, c) {
      var d = b && b[em];
      if (!d)
        throw new t("argument-error", "Internal assert: Invalid MultiFactorResolver");
      this.a = a;
      this.f = lb(b);
      this.g = c;
      this.c = new ug(null, d);
      this.b = [];
      var e = this;
      w(b[fm] || [], function(f) {
        (f = pf(f)) && e.b.push(f);
      });
      M(this, "auth", this.a);
      M(this, "session", this.c);
      M(this, "hints", this.b);
    }
    var fm = "mfaInfo", em = "mfaPendingCredential";
    dm.prototype.Qc = function(a) {
      var b = this;
      return a.rb(this.a.a, this.c).then(function(c) {
        var d = lb(b.f);
        delete d[fm];
        delete d[em];
        z(d, c);
        return b.g(d);
      });
    };
    function gm(a, b, c, d) {
      t.call(this, "multi-factor-auth-required", d, b);
      this.b = new dm(a, b, c);
      M(this, "resolver", this.b);
    }
    r(gm, t);
    function hm(a, b, c) {
      if (a && n(a.serverResponse) && a.code === "auth/multi-factor-auth-required")
        try {
          return new gm(b, a.serverResponse, c, a.message);
        } catch (d) {
        }
      return null;
    }
    ;
    function im() {
    }
    im.prototype.rb = function(a, b, c) {
      return b.type == vg ? jm(this, a, b, c) : km(this, a, b);
    };
    function jm(a, b, c, d) {
      return c.Ha().then(function(e) {
        e = { idToken: e };
        typeof d !== "undefined" && (e.displayName = d);
        z(e, { phoneVerificationInfo: dh(a.a) });
        return O(b, Cj, e);
      });
    }
    function km(a, b, c) {
      return c.Ha().then(function(d) {
        d = { mfaPendingCredential: d };
        z(d, { phoneVerificationInfo: dh(a.a) });
        return O(b, Dj, d);
      });
    }
    function lm(a) {
      M(this, "factorId", a.fa);
      this.a = a;
    }
    r(lm, im);
    function mm(a) {
      lm.call(this, a);
      if (this.a.fa != hh.PROVIDER_ID)
        throw new t("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
    }
    r(mm, lm);
    function nm(a, b) {
      F.call(this, a);
      for (var c in b)
        this[c] = b[c];
    }
    r(nm, F);
    function om(a, b) {
      this.a = a;
      this.b = [];
      this.c = q(this.xc, this);
      jd(this.a, "userReloaded", this.c);
      var c = [];
      b && b.multiFactor && b.multiFactor.enrolledFactors && w(b.multiFactor.enrolledFactors, function(d) {
        var e = null, f = {};
        if (d) {
          d.uid && (f[mf] = d.uid);
          d.displayName && (f[nf] = d.displayName);
          d.enrollmentTime && (f[of] = new Date(d.enrollmentTime).toISOString());
          d.phoneNumber && (f[lf] = d.phoneNumber);
          try {
            e = new qf(f);
          } catch (g) {
          }
          d = e;
        } else
          d = null;
        d && c.push(d);
      });
      pm(this, c);
    }
    function qm(a) {
      var b = [];
      w(a.mfaInfo || [], function(c) {
        (c = pf(c)) && b.push(c);
      });
      return b;
    }
    k = om.prototype;
    k.xc = function(a) {
      pm(this, qm(a.gd));
    };
    function pm(a, b) {
      a.b = b;
      M(a, "enrolledFactors", b);
    }
    k.Qb = function() {
      return this.a.I().then(function(a) {
        return new ug(a, null);
      });
    };
    k.ec = function(a, b) {
      var c = this, d = this.a.a;
      return this.Qb().then(function(e) {
        return a.rb(d, e, b);
      }).then(function(e) {
        rm(c.a, e);
        return c.a.reload();
      });
    };
    k.ad = function(a) {
      var b = this, c = typeof a === "string" ? a : a.uid, d = this.a.a;
      return this.a.I().then(function(e) {
        return O(d, Hj, { idToken: e, mfaEnrollmentId: c });
      }).then(function(e) {
        var f = Oa(b.b, function(g) {
          return g.uid != c;
        });
        pm(b, f);
        rm(b.a, e);
        return b.a.reload().s(function(g) {
          if (g.code != "auth/user-token-expired")
            throw g;
        });
      });
    };
    k.w = function() {
      return { multiFactor: { enrolledFactors: Pa(this.b, function(a) {
        return a.w();
      }) } };
    };
    function sm(a, b, c) {
      this.h = a;
      this.i = b;
      this.g = c;
      this.c = 3e4;
      this.f = 96e4;
      this.b = null;
      this.a = this.c;
      if (this.f < this.c)
        throw Error("Proactive refresh lower bound greater than upper bound!");
    }
    sm.prototype.start = function() {
      this.a = this.c;
      tm(this, true);
    };
    function um(a, b) {
      if (b)
        return a.a = a.c, a.g();
      b = a.a;
      a.a *= 2;
      a.a > a.f && (a.a = a.f);
      return b;
    }
    function tm(a, b) {
      a.stop();
      a.b = Ad(um(a, b)).then(function() {
        return We();
      }).then(function() {
        return a.h();
      }).then(function() {
        tm(a, true);
      }).s(function(c) {
        a.i(c) && tm(a, false);
      });
    }
    sm.prototype.stop = function() {
      this.b && (this.b.cancel(), this.b = null);
    };
    function vm(a) {
      this.c = a;
      this.b = this.a = null;
    }
    vm.prototype.w = function() {
      return { apiKey: this.c.c, refreshToken: this.a, accessToken: this.b && this.b.toString(), expirationTime: wm(this) };
    };
    function wm(a) {
      return a.b && 1e3 * a.b.c || 0;
    }
    function xm(a, b) {
      var c = b.refreshToken;
      a.b = fg(b[zg] || "");
      a.a = c;
    }
    function ym(a, b) {
      a.b = b.b;
      a.a = b.a;
    }
    function zm(a, b) {
      return Si(a.c, b).then(function(c) {
        a.b = fg(c.access_token);
        a.a = c.refresh_token;
        return { accessToken: a.b.toString(), refreshToken: a.a };
      }).s(function(c) {
        c.code == "auth/user-token-expired" && (a.a = null);
        throw c;
      });
    }
    vm.prototype.getToken = function(a) {
      a = !!a;
      return this.b && !this.a ? E(new t("user-token-expired")) : a || !this.b || ua() > wm(this) - 3e4 ? this.a ? zm(this, { grant_type: "refresh_token", refresh_token: this.a }) : D(null) : D({ accessToken: this.b.toString(), refreshToken: this.a });
    };
    function Am(a, b) {
      this.a = a || null;
      this.b = b || null;
      N(this, { lastSignInTime: Ye(b || null), creationTime: Ye(a || null) });
    }
    function Bm(a) {
      return new Am(a.a, a.b);
    }
    Am.prototype.w = function() {
      return { lastLoginAt: this.b, createdAt: this.a };
    };
    function Cm(a, b, c, d, e, f) {
      N(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, phoneNumber: f || null, providerId: b });
    }
    function Dm(a, b, c) {
      this.G = [];
      this.l = a.apiKey;
      this.m = a.appName;
      this.o = a.authDomain || null;
      var d = firebase4.SDK_VERSION ? Je(firebase4.SDK_VERSION) : null;
      this.a = new Ei(this.l, Aa(Ba), d);
      a.emulatorConfig && Li(this.a, a.emulatorConfig);
      this.b = new vm(this.a);
      Em(this, b[zg]);
      xm(this.b, b);
      M(this, "refreshToken", this.b.a);
      Fm(this, c || {});
      H.call(this);
      this.P = false;
      this.o && Me() && (this.i = Sl(this.o, this.l, this.m));
      this.R = [];
      this.f = null;
      this.u = Gm(this);
      this.$ = q(this.gb, this);
      var e = this;
      this.pa = null;
      this.Ba = function(f) {
        e.wa(f.h);
      };
      this.ba = null;
      this.za = function(f) {
        Li(e.a, f.c);
      };
      this.W = null;
      this.X = [];
      this.Aa = function(f) {
        Hm(e, f.f);
      };
      this.aa = null;
      this.N = new om(this, c);
      M(this, "multiFactor", this.N);
    }
    r(Dm, H);
    Dm.prototype.wa = function(a) {
      this.pa = a;
      Ki(this.a, a);
    };
    Dm.prototype.ka = function() {
      return this.pa;
    };
    function Im(a, b) {
      a.ba && G(a.ba, "languageCodeChanged", a.Ba);
      (a.ba = b) && jd(b, "languageCodeChanged", a.Ba);
    }
    function Jm(a, b) {
      a.W && G(a.W, "emulatorConfigChanged", a.za);
      (a.W = b) && jd(b, "emulatorConfigChanged", a.za);
    }
    function Hm(a, b) {
      a.X = b;
      Ni(a.a, firebase4.SDK_VERSION ? Je(firebase4.SDK_VERSION, a.X) : null);
    }
    Dm.prototype.Ga = function() {
      return Xa(this.X);
    };
    function Km(a, b) {
      a.aa && G(a.aa, "frameworkChanged", a.Aa);
      (a.aa = b) && jd(b, "frameworkChanged", a.Aa);
    }
    Dm.prototype.gb = function() {
      this.u.b && (this.u.stop(), this.u.start());
    };
    function Lm(a) {
      try {
        return firebase4.app(a.m).auth();
      } catch (b) {
        throw new t("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!");
      }
    }
    function Gm(a) {
      return new sm(function() {
        return a.I(true);
      }, function(b) {
        return b && b.code == "auth/network-request-failed" ? true : false;
      }, function() {
        var b = wm(a.b) - ua() - 3e5;
        return 0 < b ? b : 0;
      });
    }
    function Mm(a) {
      a.A || a.u.b || (a.u.start(), G(a, "tokenChanged", a.$), jd(a, "tokenChanged", a.$));
    }
    function Nm(a) {
      G(a, "tokenChanged", a.$);
      a.u.stop();
    }
    function Em(a, b) {
      a.ya = b;
      M(a, "_lat", b);
    }
    function Om(a, b) {
      Va(a.R, function(c) {
        return c == b;
      });
    }
    function Pm(a) {
      for (var b = [], c = 0; c < a.R.length; c++)
        b.push(a.R[c](a));
      return Fc(b).then(function() {
        return a;
      });
    }
    function Qm(a) {
      a.i && !a.P && (a.P = true, Kl(a.i, a));
    }
    function Fm(a, b) {
      N(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || false, phoneNumber: b.phoneNumber || null, isAnonymous: b.isAnonymous || false, tenantId: b.tenantId || null, metadata: new Am(b.createdAt, b.lastLoginAt), providerData: [] });
      a.a.b = a.tenantId;
    }
    M(Dm.prototype, "providerId", "firebase");
    function Rm() {
    }
    function Sm(a) {
      return D().then(function() {
        if (a.A)
          throw new t("app-deleted");
      });
    }
    function Tm(a) {
      return Pa(a.providerData, function(b) {
        return b.providerId;
      });
    }
    function Um(a, b) {
      b && (Vm(a, b.providerId), a.providerData.push(b));
    }
    function Vm(a, b) {
      Va(a.providerData, function(c) {
        return c.providerId == b;
      });
    }
    function Wm(a, b, c) {
      (b != "uid" || c) && a.hasOwnProperty(b) && M(a, b, c);
    }
    function Xm(a, b) {
      a != b && (N(a, { uid: b.uid, displayName: b.displayName, photoURL: b.photoURL, email: b.email, emailVerified: b.emailVerified, phoneNumber: b.phoneNumber, isAnonymous: b.isAnonymous, tenantId: b.tenantId, providerData: [] }), b.metadata ? M(a, "metadata", Bm(b.metadata)) : M(a, "metadata", new Am()), w(b.providerData, function(c) {
        Um(a, c);
      }), ym(a.b, b.b), M(a, "refreshToken", a.b.a), pm(a.N, b.N.b));
    }
    k = Dm.prototype;
    k.reload = function() {
      var a = this;
      return R(this, Sm(this).then(function() {
        return Ym(a).then(function() {
          return Pm(a);
        }).then(Rm);
      }));
    };
    function Ym(a) {
      return a.I().then(function(b) {
        var c = a.isAnonymous;
        return Zm(a, b).then(function() {
          c || Wm(a, "isAnonymous", false);
          return b;
        });
      });
    }
    k.nc = function(a) {
      return this.I(a).then(function(b) {
        return new cm(b);
      });
    };
    k.I = function(a) {
      var b = this;
      return R(this, Sm(this).then(function() {
        return b.b.getToken(a);
      }).then(function(c) {
        if (!c)
          throw new t("internal-error");
        c.accessToken != b.ya && (Em(b, c.accessToken), b.dispatchEvent(new nm("tokenChanged")));
        Wm(b, "refreshToken", c.refreshToken);
        return c.accessToken;
      }));
    };
    function rm(a, b) {
      b[zg] && a.ya != b[zg] && (xm(a.b, b), a.dispatchEvent(new nm("tokenChanged")), Em(a, b[zg]), Wm(a, "refreshToken", a.b.a));
    }
    function Zm(a, b) {
      return O(a.a, Ej, { idToken: b }).then(q(a.Jc, a));
    }
    k.Jc = function(a) {
      a = a.users;
      if (!a || !a.length)
        throw new t("internal-error");
      a = a[0];
      Fm(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, phoneNumber: a.phoneNumber, lastLoginAt: a.lastLoginAt, createdAt: a.createdAt, tenantId: a.tenantId });
      for (var b = $m(a), c = 0; c < b.length; c++)
        Um(this, b[c]);
      Wm(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
      this.dispatchEvent(new nm("userReloaded", { gd: a }));
    };
    function $m(a) {
      return (a = a.providerUserInfo) && a.length ? Pa(a, function(b) {
        return new Cm(b.rawId, b.providerId, b.email, b.displayName, b.photoUrl, b.phoneNumber);
      }) : [];
    }
    k.Kc = function(a) {
      cf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
      return this.sb(a);
    };
    k.sb = function(a) {
      var b = this, c = null;
      return R(this, a.c(this.a, this.uid).then(function(d) {
        rm(b, d);
        c = an(b, d, "reauthenticate");
        b.f = null;
        return b.reload();
      }).then(function() {
        return c;
      }), true);
    };
    function bn(a, b) {
      return Ym(a).then(function() {
        if (Ta(Tm(a), b))
          return Pm(a).then(function() {
            throw new t("provider-already-linked");
          });
      });
    }
    k.Bc = function(a) {
      cf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
      return this.pb(a);
    };
    k.pb = function(a) {
      var b = this, c = null;
      return R(this, bn(this, a.providerId).then(function() {
        return b.I();
      }).then(function(d) {
        return a.b(b.a, d);
      }).then(function(d) {
        c = an(b, d, "link");
        return cn(b, d);
      }).then(function() {
        return c;
      }));
    };
    k.Cc = function(a, b) {
      var c = this;
      return R(this, bn(this, "phone").then(function() {
        return bm(Lm(c), a, b, q(c.pb, c));
      }));
    };
    k.Lc = function(a, b) {
      var c = this;
      return R(this, D().then(function() {
        return bm(Lm(c), a, b, q(c.sb, c));
      }), true);
    };
    function an(a, b, c) {
      var d = mh(b);
      b = kg(b);
      return ff({ user: a, credential: d, additionalUserInfo: b, operationType: c });
    }
    function cn(a, b) {
      rm(a, b);
      return a.reload().then(function() {
        return a;
      });
    }
    k.Ab = function(a) {
      var b = this;
      return R(this, this.I().then(function(c) {
        return b.a.Ab(c, a);
      }).then(function(c) {
        rm(b, c);
        return b.reload();
      }));
    };
    k.dd = function(a) {
      var b = this;
      return R(this, this.I().then(function(c) {
        return a.b(b.a, c);
      }).then(function(c) {
        rm(b, c);
        return b.reload();
      }));
    };
    k.Bb = function(a) {
      var b = this;
      return R(this, this.I().then(function(c) {
        return b.a.Bb(c, a);
      }).then(function(c) {
        rm(b, c);
        return b.reload();
      }));
    };
    k.Cb = function(a) {
      if (a.displayName === void 0 && a.photoURL === void 0)
        return Sm(this);
      var b = this;
      return R(this, this.I().then(function(c) {
        return b.a.Cb(c, { displayName: a.displayName, photoUrl: a.photoURL });
      }).then(function(c) {
        rm(b, c);
        Wm(b, "displayName", c.displayName || null);
        Wm(b, "photoURL", c.photoUrl || null);
        w(b.providerData, function(d) {
          d.providerId === "password" && (M(d, "displayName", b.displayName), M(d, "photoURL", b.photoURL));
        });
        return Pm(b);
      }).then(Rm));
    };
    k.bd = function(a) {
      var b = this;
      return R(this, Ym(this).then(function(c) {
        return Ta(Tm(b), a) ? nj(b.a, c, [a]).then(function(d) {
          var e = {};
          w(d.providerUserInfo || [], function(f) {
            e[f.providerId] = true;
          });
          w(Tm(b), function(f) {
            e[f] || Vm(b, f);
          });
          e[hh.PROVIDER_ID] || M(b, "phoneNumber", null);
          return Pm(b);
        }) : Pm(b).then(function() {
          throw new t("no-such-provider");
        });
      }));
    };
    k.delete = function() {
      var a = this;
      return R(this, this.I().then(function(b) {
        return O(a.a, Bj, { idToken: b });
      }).then(function() {
        a.dispatchEvent(new nm("userDeleted"));
      })).then(function() {
        for (var b = 0; b < a.G.length; b++)
          a.G[b].cancel("app-deleted");
        Im(a, null);
        Jm(a, null);
        Km(a, null);
        a.G = [];
        a.A = true;
        Nm(a);
        M(a, "refreshToken", null);
        a.i && Ll(a.i, a);
      });
    };
    k.Eb = function(a, b) {
      return a == "linkViaPopup" && (this.h || null) == b && this.g || a == "reauthViaPopup" && (this.h || null) == b && this.g || a == "linkViaRedirect" && (this.ga || null) == b || a == "reauthViaRedirect" && (this.ga || null) == b ? true : false;
    };
    k.ma = function(a, b, c, d) {
      a != "linkViaPopup" && a != "reauthViaPopup" || d != (this.h || null) || (c && this.O ? this.O(c) : b && !c && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
    };
    k.Fa = function(a, b) {
      return a == "linkViaPopup" && b == (this.h || null) ? q(this.Jb, this) : a == "reauthViaPopup" && b == (this.h || null) ? q(this.Kb, this) : a == "linkViaRedirect" && (this.ga || null) == b ? q(this.Jb, this) : a == "reauthViaRedirect" && (this.ga || null) == b ? q(this.Kb, this) : null;
    };
    k.Dc = function(a) {
      var b = this;
      return dn(this, "linkViaPopup", a, function() {
        return bn(b, a.providerId).then(function() {
          return Pm(b);
        });
      }, false);
    };
    k.Mc = function(a) {
      return dn(this, "reauthViaPopup", a, function() {
        return D();
      }, true);
    };
    function dn(a, b, c, d, e) {
      if (!Me())
        return E(new t("operation-not-supported-in-this-environment"));
      if (a.f && !e)
        return E(a.f);
      var f = jg(c.providerId), g = Le(a.uid + ":::"), h = null;
      (!Oe() || De()) && a.o && c.isOAuthProvider && (h = ak(a.o, a.l, a.m, b, c, null, g, firebase4.SDK_VERSION || null, null, null, a.tenantId));
      var m = ue(h, f && f.ua, f && f.ta);
      d = d().then(function() {
        en(a);
        if (!e)
          return a.I().then(function() {
          });
      }).then(function() {
        return Ol(a.i, m, b, c, g, !!h, a.tenantId);
      }).then(function() {
        return new C(function(p, v) {
          a.ma(b, null, new t("cancelled-popup-request"), a.h || null);
          a.g = p;
          a.O = v;
          a.h = g;
          a.c = Ql(a.i, a, b, m, g);
        });
      }).then(function(p) {
        m && te(m);
        return p ? ff(p) : null;
      }).s(function(p) {
        m && te(m);
        throw p;
      });
      return R(a, d, e);
    }
    k.Ec = function(a) {
      var b = this;
      return fn(this, "linkViaRedirect", a, function() {
        return bn(b, a.providerId);
      }, false);
    };
    k.Nc = function(a) {
      return fn(this, "reauthViaRedirect", a, function() {
        return D();
      }, true);
    };
    function fn(a, b, c, d, e) {
      if (!Me())
        return E(new t("operation-not-supported-in-this-environment"));
      if (a.f && !e)
        return E(a.f);
      var f = null, g = Le(a.uid + ":::");
      d = d().then(function() {
        en(a);
        if (!e)
          return a.I().then(function() {
          });
      }).then(function() {
        a.ga = g;
        return Pm(a);
      }).then(function(h) {
        a.ha && (h = a.ha, h = h.b.set(gn, a.w(), h.a));
        return h;
      }).then(function() {
        return Pl(a.i, b, c, g, a.tenantId);
      }).s(function(h) {
        f = h;
        if (a.ha)
          return hn(a.ha);
        throw f;
      }).then(function() {
        if (f)
          throw f;
      });
      return R(a, d, e);
    }
    function en(a) {
      if (!a.i || !a.P) {
        if (a.i && !a.P)
          throw new t("internal-error");
        throw new t("auth-domain-config-required");
      }
    }
    k.Jb = function(a, b, c, d) {
      var e = this;
      this.c && (this.c.cancel(), this.c = null);
      var f = null;
      c = this.I().then(function(g) {
        return Dg(e.a, { requestUri: a, postBody: d, sessionId: b, idToken: g });
      }).then(function(g) {
        f = an(e, g, "link");
        return cn(e, g);
      }).then(function() {
        return f;
      });
      return R(this, c);
    };
    k.Kb = function(a, b, c, d) {
      var e = this;
      this.c && (this.c.cancel(), this.c = null);
      var f = null, g = D().then(function() {
        return yg(Eg(e.a, { requestUri: a, sessionId: b, postBody: d, tenantId: c }), e.uid);
      }).then(function(h) {
        f = an(e, h, "reauthenticate");
        rm(e, h);
        e.f = null;
        return e.reload();
      }).then(function() {
        return f;
      });
      return R(this, g, true);
    };
    k.tb = function(a) {
      var b = this, c = null;
      return R(this, this.I().then(function(d) {
        c = d;
        return typeof a === "undefined" || kb(a) ? {} : Yf(new Of(a));
      }).then(function(d) {
        return b.a.tb(c, d);
      }).then(function(d) {
        if (b.email != d)
          return b.reload();
      }).then(function() {
      }));
    };
    k.Db = function(a, b) {
      var c = this, d = null;
      return R(this, this.I().then(function(e) {
        d = e;
        return typeof b === "undefined" || kb(b) ? {} : Yf(new Of(b));
      }).then(function(e) {
        return c.a.Db(d, a, e);
      }).then(function(e) {
        if (c.email != e)
          return c.reload();
      }).then(function() {
      }));
    };
    function R(a, b, c) {
      var d = jn(a, b, c);
      a.G.push(d);
      d.na(function() {
        Ua(a.G, d);
      });
      return d.s(function(e) {
        var f = null;
        e && e.code === "auth/multi-factor-auth-required" && (f = hm(e.w(), Lm(a), q(a.ic, a)));
        throw f || e;
      });
    }
    k.ic = function(a) {
      var b = null, c = this;
      a = yg(D(a), c.uid).then(function(d) {
        b = an(c, d, "reauthenticate");
        rm(c, d);
        c.f = null;
        return c.reload();
      }).then(function() {
        return b;
      });
      return R(this, a, true);
    };
    function jn(a, b, c) {
      return a.f && !c ? (b.cancel(), E(a.f)) : b.s(function(d) {
        !d || d.code != "auth/user-disabled" && d.code != "auth/user-token-expired" || (a.f || a.dispatchEvent(new nm("userInvalidated")), a.f = d);
        throw d;
      });
    }
    k.toJSON = function() {
      return this.w();
    };
    k.w = function() {
      var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, tenantId: this.tenantId, providerData: [], apiKey: this.l, appName: this.m, authDomain: this.o, stsTokenManager: this.b.w(), redirectEventId: this.ga || null };
      this.metadata && z(a, this.metadata.w());
      w(this.providerData, function(b) {
        a.providerData.push(gf(b));
      });
      z(a, this.N.w());
      return a;
    };
    function kn(a) {
      if (!a.apiKey)
        return null;
      var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName, emulatorConfig: a.emulatorConfig }, c = {};
      if (a.stsTokenManager && a.stsTokenManager.accessToken)
        c[zg] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null;
      else
        return null;
      var d = new Dm(b, c, a);
      a.providerData && w(a.providerData, function(e) {
        e && Um(d, ff(e));
      });
      a.redirectEventId && (d.ga = a.redirectEventId);
      return d;
    }
    function ln(a, b, c, d) {
      var e = new Dm(a, b);
      c && (e.ha = c);
      d && Hm(e, d);
      return e.reload().then(function() {
        return e;
      });
    }
    function mn(a, b, c, d) {
      var e = a.b, f = {};
      f[zg] = e.b && e.b.toString();
      f.refreshToken = e.a;
      b = new Dm(b || { apiKey: a.l, authDomain: a.o, appName: a.m }, f);
      c && (b.ha = c);
      d && Hm(b, d);
      Xm(b, a);
      return b;
    }
    ;
    function nn(a) {
      this.a = a;
      this.b = Qk();
    }
    var gn = { name: "redirectUser", D: "session" };
    function hn(a) {
      return Uk(a.b, gn, a.a);
    }
    function on(a, b) {
      return a.b.get(gn, a.a).then(function(c) {
        c && b && (c.authDomain = b);
        return kn(c || {});
      });
    }
    ;
    function pn(a) {
      this.a = a;
      this.b = Qk();
      this.c = null;
      this.f = qn(this);
      this.b.addListener(rn("local"), this.a, q(this.g, this));
    }
    pn.prototype.g = function() {
      var a = this, b = rn("local");
      sn(this, function() {
        return D().then(function() {
          return a.c && a.c.D != "local" ? a.b.get(b, a.a) : null;
        }).then(function(c) {
          if (c)
            return tn(a, "local").then(function() {
              a.c = b;
            });
        });
      });
    };
    function tn(a, b) {
      var c = [], d;
      for (d in Mk)
        Mk[d] !== b && c.push(Uk(a.b, rn(Mk[d]), a.a));
      c.push(Uk(a.b, un, a.a));
      return Ec(c);
    }
    function qn(a) {
      var b = rn("local"), c = rn("session"), d = rn("none");
      return Tk(a.b, b, a.a).then(function() {
        return a.b.get(c, a.a);
      }).then(function(e) {
        return e ? c : a.b.get(d, a.a).then(function(f) {
          return f ? d : a.b.get(b, a.a).then(function(g) {
            return g ? b : a.b.get(un, a.a).then(function(h) {
              return h ? rn(h) : b;
            });
          });
        });
      }).then(function(e) {
        a.c = e;
        return tn(a, e.D);
      }).s(function() {
        a.c || (a.c = b);
      });
    }
    var un = { name: "persistence", D: "session" };
    function rn(a) {
      return { name: "authUser", D: a };
    }
    pn.prototype.wb = function(a) {
      var b = null, c = this;
      Nk(a);
      return sn(this, function() {
        return a != c.c.D ? c.b.get(c.c, c.a).then(function(d) {
          b = d;
          return tn(c, a);
        }).then(function() {
          c.c = rn(a);
          if (b)
            return c.b.set(c.c, b, c.a);
        }) : D();
      });
    };
    function vn(a) {
      return sn(a, function() {
        return a.b.set(un, a.c.D, a.a);
      });
    }
    function wn(a, b) {
      return sn(a, function() {
        return a.b.set(a.c, b.w(), a.a);
      });
    }
    function xn(a) {
      return sn(a, function() {
        return Uk(a.b, a.c, a.a);
      });
    }
    function yn(a, b, c) {
      return sn(a, function() {
        return a.b.get(a.c, a.a).then(function(d) {
          d && b && (d.authDomain = b);
          d && c && (d.emulatorConfig = c);
          return kn(d || {});
        });
      });
    }
    function sn(a, b) {
      a.f = a.f.then(b, b);
      return a.f;
    }
    ;
    function zn(a) {
      this.m = false;
      M(this, "settings", new $l());
      M(this, "app", a);
      if (S(this).options && S(this).options.apiKey)
        a = firebase4.SDK_VERSION ? Je(firebase4.SDK_VERSION) : null, this.a = new Ei(S(this).options && S(this).options.apiKey, Aa(Ba), a);
      else
        throw new t("invalid-api-key");
      this.R = [];
      this.u = [];
      this.P = [];
      this.ac = firebase4.INTERNAL.createSubscribe(q(this.yc, this));
      this.X = void 0;
      this.bc = firebase4.INTERNAL.createSubscribe(q(this.zc, this));
      An(this, null);
      this.l = new pn(S(this).options.apiKey + ":" + S(this).name);
      this.G = new nn(S(this).options.apiKey + ":" + S(this).name);
      this.$ = T(this, Bn(this));
      this.i = T(this, Cn(this));
      this.ba = false;
      this.pa = q(this.Yc, this);
      this.Ba = q(this.da, this);
      this.ya = q(this.kc, this);
      this.za = q(this.vc, this);
      this.Aa = q(this.wc, this);
      this.b = null;
      Dn(this);
      this.INTERNAL = {};
      this.INTERNAL["delete"] = q(this.delete, this);
      this.INTERNAL.logFramework = q(this.Fc, this);
      this.A = 0;
      H.call(this);
      En(this);
      this.N = [];
      this.f = null;
    }
    r(zn, H);
    function Fn(a) {
      F.call(this, "languageCodeChanged");
      this.h = a;
    }
    r(Fn, F);
    function Gn(a) {
      F.call(this, "emulatorConfigChanged");
      this.c = a;
    }
    r(Gn, F);
    function Hn(a) {
      F.call(this, "frameworkChanged");
      this.f = a;
    }
    r(Hn, F);
    k = zn.prototype;
    k.wb = function(a) {
      a = this.l.wb(a);
      return T(this, a);
    };
    k.wa = function(a) {
      this.aa === a || this.m || (this.aa = a, Ki(this.a, this.aa), this.dispatchEvent(new Fn(this.ka())));
    };
    k.ka = function() {
      return this.aa;
    };
    k.ed = function() {
      var a = l.navigator;
      this.wa(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
    };
    k.fd = function(a) {
      if (!this.f) {
        if (!/^https?:\/\//.test(a))
          throw new t("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
        In();
        this.f = { url: a };
        this.settings.hb = true;
        Li(this.a, this.f);
        this.dispatchEvent(new Gn(this.f));
      }
    };
    function In() {
      Xe("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
      l.document && ze().then(function() {
        var a = l.document.createElement("div");
        a.innerText = "Running in emulator mode. Do not use with production credentials.";
        a.style.position = "fixed";
        a.style.width = "100%";
        a.style.backgroundColor = "#ffffff";
        a.style.border = ".1em solid #000000";
        a.style.color = "#ff0000";
        a.style.bottom = "0px";
        a.style.left = "0px";
        a.style.margin = "0px";
        a.style.zIndex = 1e4;
        a.style.textAlign = "center";
        a.classList.add("firebase-emulator-warning");
        l.document.body.appendChild(a);
      });
    }
    k.Fc = function(a) {
      this.N.push(a);
      Ni(this.a, firebase4.SDK_VERSION ? Je(firebase4.SDK_VERSION, this.N) : null);
      this.dispatchEvent(new Hn(this.N));
    };
    k.Ga = function() {
      return Xa(this.N);
    };
    k.xb = function(a) {
      this.W === a || this.m || (this.W = a, this.a.b = this.W);
    };
    k.S = function() {
      return this.W;
    };
    function En(a) {
      Object.defineProperty(a, "lc", { get: function() {
        return this.ka();
      }, set: function(b) {
        this.wa(b);
      }, enumerable: false });
      a.aa = null;
      Object.defineProperty(a, "ti", { get: function() {
        return this.S();
      }, set: function(b) {
        this.xb(b);
      }, enumerable: false });
      a.W = null;
    }
    k.toJSON = function() {
      return { apiKey: S(this).options.apiKey, authDomain: S(this).options.authDomain, appName: S(this).name, currentUser: U(this) && U(this).w() };
    };
    function Jn(a) {
      return a.gb || E(new t("auth-domain-config-required"));
    }
    function Dn(a) {
      var b = S(a).options.authDomain, c = S(a).options.apiKey;
      b && Me() && (a.gb = a.$.then(function() {
        if (!a.m) {
          a.b = Sl(b, c, S(a).name, a.f);
          Kl(a.b, a);
          U(a) && Qm(U(a));
          if (a.o) {
            Qm(a.o);
            var d = a.o;
            d.wa(a.ka());
            Im(d, a);
            d = a.o;
            Hm(d, a.N);
            Km(d, a);
            d = a.o;
            Li(d.a, a.f);
            Jm(d, a);
            a.o = null;
          }
          return a.b;
        }
      }));
    }
    k.Eb = function(a, b) {
      switch (a) {
        case "unknown":
        case "signInViaRedirect":
          return true;
        case "signInViaPopup":
          return this.h == b && !!this.g;
        default:
          return false;
      }
    };
    k.ma = function(a, b, c, d) {
      a == "signInViaPopup" && this.h == d && (c && this.O ? this.O(c) : b && !c && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
    };
    k.Fa = function(a, b) {
      return a == "signInViaRedirect" || a == "signInViaPopup" && this.h == b && this.g ? q(this.hc, this) : null;
    };
    k.hc = function(a, b, c, d) {
      var e = this, f = { requestUri: a, postBody: d, sessionId: b, tenantId: c };
      this.c && (this.c.cancel(), this.c = null);
      return e.$.then(function() {
        return Kn(e, Bg(e.a, f));
      });
    };
    k.Wc = function(a) {
      if (!Me())
        return E(new t("operation-not-supported-in-this-environment"));
      var b = this, c = jg(a.providerId), d = Le(), e = null;
      (!Oe() || De()) && S(this).options.authDomain && a.isOAuthProvider && (e = ak(S(this).options.authDomain, S(this).options.apiKey, S(this).name, "signInViaPopup", a, null, d, firebase4.SDK_VERSION || null, null, null, this.S(), this.f));
      var f = ue(e, c && c.ua, c && c.ta);
      c = Jn(this).then(function(g) {
        return Ol(g, f, "signInViaPopup", a, d, !!e, b.S());
      }).then(function() {
        return new C(function(g, h) {
          b.ma("signInViaPopup", null, new t("cancelled-popup-request"), b.h);
          b.g = g;
          b.O = h;
          b.h = d;
          b.c = Ql(b.b, b, "signInViaPopup", f, d);
        });
      }).then(function(g) {
        f && te(f);
        return g ? ff(g) : null;
      }).s(function(g) {
        f && te(f);
        throw g;
      });
      return T(this, c);
    };
    k.Xc = function(a) {
      if (!Me())
        return E(new t("operation-not-supported-in-this-environment"));
      var b = this, c = Jn(this).then(function() {
        return vn(b.l);
      }).then(function() {
        return Pl(b.b, "signInViaRedirect", a, void 0, b.S());
      });
      return T(this, c);
    };
    function Ln(a) {
      if (!Me())
        return E(new t("operation-not-supported-in-this-environment"));
      var b = Jn(a).then(function() {
        return a.b.qa();
      }).then(function(c) {
        return c ? ff(c) : null;
      });
      return T(a, b);
    }
    k.qa = function() {
      var a = this;
      return Ln(this).then(function(b) {
        a.b && Vl(a.b.b);
        return b;
      }).s(function(b) {
        a.b && Vl(a.b.b);
        throw b;
      });
    };
    k.cd = function(a) {
      if (!a)
        return E(new t("null-user"));
      if (this.W != a.tenantId)
        return E(new t("tenant-id-mismatch"));
      var b = this, c = {};
      c.apiKey = S(this).options.apiKey;
      c.authDomain = S(this).options.authDomain;
      c.appName = S(this).name;
      var d = mn(a, c, b.G, b.Ga());
      return T(this, this.i.then(function() {
        if (S(b).options.apiKey != a.l)
          return d.reload();
      }).then(function() {
        if (U(b) && a.uid == U(b).uid)
          return Xm(U(b), a), b.da(a);
        An(b, d);
        Qm(d);
        return b.da(d);
      }).then(function() {
        Mn(b);
      }));
    };
    function Nn(a, b) {
      var c = {};
      c.apiKey = S(a).options.apiKey;
      c.authDomain = S(a).options.authDomain;
      c.appName = S(a).name;
      a.f && (c.emulatorConfig = a.f);
      return a.$.then(function() {
        return ln(c, b, a.G, a.Ga());
      }).then(function(d) {
        if (U(a) && d.uid == U(a).uid)
          return Xm(U(a), d), a.da(d);
        An(a, d);
        Qm(d);
        return a.da(d);
      }).then(function() {
        Mn(a);
      });
    }
    function An(a, b) {
      U(a) && (Om(U(a), a.Ba), G(U(a), "tokenChanged", a.ya), G(U(a), "userDeleted", a.za), G(U(a), "userInvalidated", a.Aa), Nm(U(a)));
      b && (b.R.push(a.Ba), jd(b, "tokenChanged", a.ya), jd(b, "userDeleted", a.za), jd(b, "userInvalidated", a.Aa), 0 < a.A && Mm(b));
      M(a, "currentUser", b);
      b && (b.wa(a.ka()), Im(b, a), Hm(b, a.N), Km(b, a), Li(b.a, a.f), Jm(b, a));
    }
    k.zb = function() {
      var a = this, b = this.i.then(function() {
        a.b && Vl(a.b.b);
        if (!U(a))
          return D();
        An(a, null);
        return xn(a.l).then(function() {
          Mn(a);
        });
      });
      return T(this, b);
    };
    function On(a) {
      var b = on(a.G, S(a).options.authDomain).then(function(c) {
        if (a.o = c)
          c.ha = a.G;
        return hn(a.G);
      });
      return T(a, b);
    }
    function Bn(a) {
      var b = S(a).options.authDomain, c = On(a).then(function() {
        return yn(a.l, b, a.f);
      }).then(function(d) {
        return d ? (d.ha = a.G, a.o && (a.o.ga || null) == (d.ga || null) ? d : d.reload().then(function() {
          return wn(a.l, d).then(function() {
            return d;
          });
        }).s(function(e) {
          return e.code == "auth/network-request-failed" ? d : xn(a.l);
        })) : null;
      }).then(function(d) {
        An(a, d || null);
      });
      return T(a, c);
    }
    function Cn(a) {
      return a.$.then(function() {
        return Ln(a);
      }).s(function() {
      }).then(function() {
        if (!a.m)
          return a.pa();
      }).s(function() {
      }).then(function() {
        if (!a.m) {
          a.ba = true;
          var b = a.l;
          b.b.addListener(rn("local"), b.a, a.pa);
        }
      });
    }
    k.Yc = function() {
      var a = this;
      return yn(this.l, S(this).options.authDomain).then(function(b) {
        if (!a.m) {
          var c;
          if (c = U(a) && b) {
            c = U(a).uid;
            var d = b.uid;
            c = c === void 0 || c === null || c === "" || d === void 0 || d === null || d === "" ? false : c == d;
          }
          if (c)
            return Xm(U(a), b), U(a).I();
          if (U(a) || b)
            An(a, b), b && (Qm(b), b.ha = a.G), a.b && Kl(a.b, a), Mn(a);
        }
      });
    };
    k.da = function(a) {
      return wn(this.l, a);
    };
    k.kc = function() {
      Mn(this);
      this.da(U(this));
    };
    k.vc = function() {
      this.zb();
    };
    k.wc = function() {
      this.zb();
    };
    function Kn(a, b) {
      var c = null, d = null;
      return T(a, b.then(function(e) {
        c = mh(e);
        d = kg(e);
        return Nn(a, e);
      }, function(e) {
        var f = null;
        e && e.code === "auth/multi-factor-auth-required" && (f = hm(e.w(), a, q(a.jc, a)));
        throw f || e;
      }).then(function() {
        return ff({ user: U(a), credential: c, additionalUserInfo: d, operationType: "signIn" });
      }));
    }
    k.jc = function(a) {
      var b = this;
      return this.i.then(function() {
        return Kn(b, D(a));
      });
    };
    k.yc = function(a) {
      var b = this;
      this.addAuthTokenListener(function() {
        a.next(U(b));
      });
    };
    k.zc = function(a) {
      var b = this;
      Pn(this, function() {
        a.next(U(b));
      });
    };
    k.Hc = function(a, b, c) {
      var d = this;
      this.ba && Promise.resolve().then(function() {
        typeof a === "function" ? a(U(d)) : typeof a.next === "function" && a.next(U(d));
      });
      return this.ac(a, b, c);
    };
    k.Gc = function(a, b, c) {
      var d = this;
      this.ba && Promise.resolve().then(function() {
        d.X = d.getUid();
        typeof a === "function" ? a(U(d)) : typeof a.next === "function" && a.next(U(d));
      });
      return this.bc(a, b, c);
    };
    k.mc = function(a) {
      var b = this, c = this.i.then(function() {
        return U(b) ? U(b).I(a).then(function(d) {
          return { accessToken: d };
        }) : null;
      });
      return T(this, c);
    };
    k.Sc = function(a) {
      var b = this;
      return this.i.then(function() {
        return Kn(b, O(b.a, Gj, { token: a }));
      }).then(function(c) {
        var d = c.user;
        Wm(d, "isAnonymous", false);
        b.da(d);
        return c;
      });
    };
    k.Tc = function(a, b) {
      var c = this;
      return this.i.then(function() {
        return Kn(c, O(c.a, Xg, { email: a, password: b }));
      });
    };
    k.dc = function(a, b) {
      var c = this;
      return this.i.then(function() {
        return Kn(c, O(c.a, Aj, { email: a, password: b }));
      });
    };
    k.Za = function(a) {
      var b = this;
      return this.i.then(function() {
        return Kn(b, a.ja(b.a));
      });
    };
    k.Rc = function(a) {
      cf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
      return this.Za(a);
    };
    k.yb = function() {
      var a = this;
      return this.i.then(function() {
        var b = U(a);
        if (b && b.isAnonymous) {
          var c = ff({ providerId: null, isNewUser: false });
          return ff({ user: b, credential: null, additionalUserInfo: c, operationType: "signIn" });
        }
        return Kn(a, a.a.yb()).then(function(d) {
          var e = d.user;
          Wm(e, "isAnonymous", true);
          a.da(e);
          return d;
        });
      });
    };
    function S(a) {
      return a.app;
    }
    function U(a) {
      return a.currentUser;
    }
    k.getUid = function() {
      return U(this) && U(this).uid || null;
    };
    function Qn(a) {
      return U(a) && U(a)._lat || null;
    }
    function Mn(a) {
      if (a.ba) {
        for (var b = 0; b < a.u.length; b++)
          if (a.u[b])
            a.u[b](Qn(a));
        if (a.X !== a.getUid() && a.P.length) {
          for (a.X = a.getUid(), b = 0; b < a.P.length; b++)
            if (a.P[b])
              a.P[b](Qn(a));
        }
      }
    }
    k.cc = function(a) {
      this.addAuthTokenListener(a);
      this.A++;
      0 < this.A && U(this) && Mm(U(this));
    };
    k.Oc = function(a) {
      var b = this;
      w(this.u, function(c) {
        c == a && b.A--;
      });
      0 > this.A && (this.A = 0);
      this.A == 0 && U(this) && Nm(U(this));
      this.removeAuthTokenListener(a);
    };
    k.addAuthTokenListener = function(a) {
      var b = this;
      this.u.push(a);
      T(this, this.i.then(function() {
        b.m || Ta(b.u, a) && a(Qn(b));
      }));
    };
    k.removeAuthTokenListener = function(a) {
      Va(this.u, function(b) {
        return b == a;
      });
    };
    function Pn(a, b) {
      a.P.push(b);
      T(a, a.i.then(function() {
        !a.m && Ta(a.P, b) && a.X !== a.getUid() && (a.X = a.getUid(), b(Qn(a)));
      }));
    }
    k.delete = function() {
      this.m = true;
      for (var a = 0; a < this.R.length; a++)
        this.R[a].cancel("app-deleted");
      this.R = [];
      this.l && (a = this.l, a.b.removeListener(rn("local"), a.a, this.pa));
      this.b && (Ll(this.b, this), Vl(this.b.b));
      return Promise.resolve();
    };
    function T(a, b) {
      a.R.push(b);
      b.na(function() {
        Ua(a.R, b);
      });
      return b;
    }
    k.gc = function(a) {
      return T(this, Xi(this.a, a));
    };
    k.Ac = function(a) {
      return !!bh(a);
    };
    k.vb = function(a, b) {
      var c = this;
      return T(this, D().then(function() {
        var d = new Of(b);
        if (!d.c)
          throw new t("argument-error", Wf + " must be true when sending sign in link to email");
        return Yf(d);
      }).then(function(d) {
        return c.a.vb(a, d);
      }).then(function() {
      }));
    };
    k.hd = function(a) {
      return this.Qa(a).then(function(b) {
        return b.data.email;
      });
    };
    k.mb = function(a, b) {
      return T(this, this.a.mb(a, b).then(function() {
      }));
    };
    k.Qa = function(a) {
      return T(this, this.a.Qa(a).then(function(b) {
        return new rf(b);
      }));
    };
    k.ib = function(a) {
      return T(this, this.a.ib(a).then(function() {
      }));
    };
    k.ub = function(a, b) {
      var c = this;
      return T(this, D().then(function() {
        return typeof b === "undefined" || kb(b) ? {} : Yf(new Of(b));
      }).then(function(d) {
        return c.a.ub(a, d);
      }).then(function() {
      }));
    };
    k.Vc = function(a, b) {
      return T(this, bm(this, a, b, q(this.Za, this)));
    };
    k.Uc = function(a, b) {
      var c = this;
      return T(this, D().then(function() {
        var d = b || me(), e = ah(a, d);
        d = bh(d);
        if (!d)
          throw new t("argument-error", "Invalid email link!");
        if (d.tenantId !== c.S())
          throw new t("tenant-id-mismatch");
        return c.Za(e);
      }));
    };
    function Rn() {
    }
    Rn.prototype.render = function() {
    };
    Rn.prototype.reset = function() {
    };
    Rn.prototype.getResponse = function() {
    };
    Rn.prototype.execute = function() {
    };
    function Sn() {
      this.a = {};
      this.b = 1e12;
    }
    var Tn = null;
    Sn.prototype.render = function(a, b) {
      this.a[this.b.toString()] = new Un(a, b);
      return this.b++;
    };
    Sn.prototype.reset = function(a) {
      var b = Vn(this, a);
      a = Wn(a);
      b && a && (b.delete(), delete this.a[a]);
    };
    Sn.prototype.getResponse = function(a) {
      return (a = Vn(this, a)) ? a.getResponse() : null;
    };
    Sn.prototype.execute = function(a) {
      (a = Vn(this, a)) && a.execute();
    };
    function Vn(a, b) {
      return (b = Wn(b)) ? a.a[b] || null : null;
    }
    function Wn(a) {
      return (a = typeof a === "undefined" ? 1e12 : a) ? a.toString() : null;
    }
    function Un(a, b) {
      this.g = false;
      this.c = b;
      this.a = this.b = null;
      this.h = this.c.size !== "invisible";
      this.f = fc(a);
      var c = this;
      this.i = function() {
        c.execute();
      };
      this.h ? this.execute() : jd(this.f, "click", this.i);
    }
    Un.prototype.getResponse = function() {
      Xn(this);
      return this.b;
    };
    Un.prototype.execute = function() {
      Xn(this);
      var a = this;
      this.a || (this.a = setTimeout(function() {
        a.b = He();
        var b = a.c.callback, c = a.c["expired-callback"];
        if (b)
          try {
            b(a.b);
          } catch (d) {
          }
        a.a = setTimeout(function() {
          a.a = null;
          a.b = null;
          if (c)
            try {
              c();
            } catch (d) {
            }
          a.h && a.execute();
        }, 6e4);
      }, 500));
    };
    Un.prototype.delete = function() {
      Xn(this);
      this.g = true;
      clearTimeout(this.a);
      this.a = null;
      G(this.f, "click", this.i);
    };
    function Xn(a) {
      if (a.g)
        throw Error("reCAPTCHA mock was already deleted!");
    }
    ;
    function Yn() {
    }
    M(Yn, "FACTOR_ID", "phone");
    function Zn() {
    }
    Zn.prototype.g = function() {
      Tn || (Tn = new Sn());
      return D(Tn);
    };
    Zn.prototype.c = function() {
    };
    var $n = null;
    function ao() {
      this.b = l.grecaptcha ? Infinity : 0;
      this.f = null;
      this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString();
    }
    var bo = new ob(pb, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"), co = new Ue(3e4, 6e4);
    ao.prototype.g = function(a) {
      var b = this;
      return new C(function(c, d) {
        var e = setTimeout(function() {
          d(new t("network-request-failed"));
        }, co.get());
        if (!l.grecaptcha || a !== b.f && !b.b) {
          l[b.a] = function() {
            if (l.grecaptcha) {
              b.f = a;
              var g = l.grecaptcha.render;
              l.grecaptcha.render = function(h, m) {
                h = g(h, m);
                b.b++;
                return h;
              };
              clearTimeout(e);
              c(l.grecaptcha);
            } else
              clearTimeout(e), d(new t("internal-error"));
            delete l[b.a];
          };
          var f = xb(bo, { onload: b.a, hl: a || "" });
          D(xi(f)).s(function() {
            clearTimeout(e);
            d(new t("internal-error", "Unable to load external reCAPTCHA dependencies!"));
          });
        } else
          clearTimeout(e), c(l.grecaptcha);
      });
    };
    ao.prototype.c = function() {
      this.b--;
    };
    var eo = null;
    function fo(a, b, c, d, e, f, g) {
      M(this, "type", "recaptcha");
      this.c = this.f = null;
      this.A = false;
      this.m = b;
      this.g = null;
      g ? ($n || ($n = new Zn()), g = $n) : (eo || (eo = new ao()), g = eo);
      this.v = g;
      this.a = c || { theme: "light", type: "image" };
      this.h = [];
      if (this.a[go])
        throw new t("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
      this.i = this.a[ho] === "invisible";
      if (!l.document)
        throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
      if (!fc(b) || !this.i && fc(b).hasChildNodes())
        throw new t("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
      this.o = new Ei(a, f || null, e || null);
      this.u = d || function() {
        return null;
      };
      var h = this;
      this.l = [];
      var m = this.a[io];
      this.a[io] = function(v) {
        jo(h, v);
        if (typeof m === "function")
          m(v);
        else if (typeof m === "string") {
          var B = L(m, l);
          typeof B === "function" && B(v);
        }
      };
      var p = this.a[ko];
      this.a[ko] = function() {
        jo(h, null);
        if (typeof p === "function")
          p();
        else if (typeof p === "string") {
          var v = L(p, l);
          typeof v === "function" && v();
        }
      };
    }
    var io = "callback", ko = "expired-callback", go = "sitekey", ho = "size";
    function jo(a, b) {
      for (var c = 0; c < a.l.length; c++)
        try {
          a.l[c](b);
        } catch (d) {
        }
    }
    function lo(a, b) {
      Va(a.l, function(c) {
        return c == b;
      });
    }
    function mo(a, b) {
      a.h.push(b);
      b.na(function() {
        Ua(a.h, b);
      });
      return b;
    }
    k = fo.prototype;
    k.Ia = function() {
      var a = this;
      return this.f ? this.f : this.f = mo(this, D().then(function() {
        if (Ne() && !Ee())
          return ze();
        throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
      }).then(function() {
        return a.v.g(a.u());
      }).then(function(b) {
        a.g = b;
        return O(a.o, Fj, {});
      }).then(function(b) {
        a.a[go] = b.recaptchaSiteKey;
      }).s(function(b) {
        a.f = null;
        throw b;
      }));
    };
    k.render = function() {
      no(this);
      var a = this;
      return mo(this, this.Ia().then(function() {
        if (a.c === null) {
          var b = a.m;
          if (!a.i) {
            var c = fc(b);
            b = ic("DIV");
            c.appendChild(b);
          }
          a.c = a.g.render(b, a.a);
        }
        return a.c;
      }));
    };
    k.verify = function() {
      no(this);
      var a = this;
      return mo(this, this.render().then(function(b) {
        return new C(function(c) {
          var d = a.g.getResponse(b);
          if (d)
            c(d);
          else {
            var e = function(f) {
              f && (lo(a, e), c(f));
            };
            a.l.push(e);
            a.i && a.g.execute(a.c);
          }
        });
      }));
    };
    k.reset = function() {
      no(this);
      this.c !== null && this.g.reset(this.c);
    };
    function no(a) {
      if (a.A)
        throw new t("internal-error", "RecaptchaVerifier instance has been destroyed.");
    }
    k.clear = function() {
      no(this);
      this.A = true;
      this.v.c();
      for (var a = 0; a < this.h.length; a++)
        this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
      if (!this.i) {
        a = fc(this.m);
        for (var b; b = a.firstChild; )
          a.removeChild(b);
      }
    };
    function oo(a, b, c) {
      var d = false;
      try {
        this.b = c || firebase4.app();
      } catch (g) {
        throw new t("argument-error", "No firebase.app.App instance is currently initialized.");
      }
      if (this.b.options && this.b.options.apiKey)
        c = this.b.options.apiKey;
      else
        throw new t("invalid-api-key");
      var e = this, f = null;
      try {
        f = this.b.auth().Ga();
      } catch (g) {
      }
      try {
        d = this.b.auth().settings.appVerificationDisabledForTesting;
      } catch (g) {
      }
      f = firebase4.SDK_VERSION ? Je(firebase4.SDK_VERSION, f) : null;
      fo.call(this, c, a, b, function() {
        try {
          var g = e.b.auth().ka();
        } catch (h) {
          g = null;
        }
        return g;
      }, f, Aa(Ba), d);
    }
    r(oo, fo);
    function po(a, b, c, d) {
      a: {
        c = Array.prototype.slice.call(c);
        var e = 0;
        for (var f = false, g = 0; g < b.length; g++)
          if (b[g].optional)
            f = true;
          else {
            if (f)
              throw new t("internal-error", "Argument validator encountered a required argument after an optional argument.");
            e++;
          }
        f = b.length;
        if (c.length < e || f < c.length)
          d = "Expected " + (e == f ? e == 1 ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";
        else {
          for (e = 0; e < c.length; e++)
            if (f = b[e].optional && c[e] === void 0, !b[e].K(c[e]) && !f) {
              b = b[e];
              if (0 > e || e >= qo.length)
                throw new t("internal-error", "Argument validator received an unsupported number of arguments.");
              c = qo[e];
              d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.J + ".";
              break a;
            }
          d = null;
        }
      }
      if (d)
        throw new t("argument-error", a + " failed: " + d);
    }
    var qo = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
    function V(a, b) {
      return { name: a || "", J: "a valid string", optional: !!b, K: function(c) {
        return typeof c === "string";
      } };
    }
    function ro(a, b) {
      return { name: a || "", J: "a boolean", optional: !!b, K: function(c) {
        return typeof c === "boolean";
      } };
    }
    function W(a, b) {
      return { name: a || "", J: "a valid object", optional: !!b, K: n };
    }
    function so(a, b) {
      return { name: a || "", J: "a function", optional: !!b, K: function(c) {
        return typeof c === "function";
      } };
    }
    function to(a, b) {
      return { name: a || "", J: "null", optional: !!b, K: function(c) {
        return c === null;
      } };
    }
    function uo() {
      return { name: "", J: "an HTML element", optional: false, K: function(a) {
        return !!(a && a instanceof Element);
      } };
    }
    function vo() {
      return { name: "auth", J: "an instance of Firebase Auth", optional: true, K: function(a) {
        return !!(a && a instanceof zn);
      } };
    }
    function wo() {
      return { name: "app", J: "an instance of Firebase App", optional: true, K: function(a) {
        return !!(a && a instanceof firebase4.app.App);
      } };
    }
    function xo(a) {
      return { name: a ? a + "Credential" : "credential", J: a ? "a valid " + a + " credential" : "a valid credential", optional: false, K: function(b) {
        if (!b)
          return false;
        var c = !a || b.providerId === a;
        return !(!b.ja || !c);
      } };
    }
    function yo() {
      return { name: "multiFactorAssertion", J: "a valid multiFactorAssertion", optional: false, K: function(a) {
        return a ? !!a.rb : false;
      } };
    }
    function zo() {
      return { name: "authProvider", J: "a valid Auth provider", optional: false, K: function(a) {
        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
      } };
    }
    function Ao(a, b) {
      return n(a) && typeof a.type === "string" && a.type === b && typeof a.Ha === "function";
    }
    function Bo(a) {
      return n(a) && typeof a.uid === "string";
    }
    function Co() {
      return { name: "applicationVerifier", J: "an implementation of firebase.auth.ApplicationVerifier", optional: false, K: function(a) {
        return !(!a || typeof a.type !== "string" || typeof a.verify !== "function");
      } };
    }
    function X(a, b, c, d) {
      return { name: c || "", J: a.J + " or " + b.J, optional: !!d, K: function(e) {
        return a.K(e) || b.K(e);
      } };
    }
    ;
    function Y(a, b) {
      for (var c in b) {
        var d = b[c].name;
        a[d] = Do(d, a[c], b[c].j);
      }
    }
    function Eo(a, b) {
      for (var c in b) {
        var d = b[c].name;
        d !== c && Object.defineProperty(a, d, { get: ta(function(e) {
          return this[e];
        }, c), set: ta(function(e, f, g, h) {
          po(e, [g], [h], true);
          this[f] = h;
        }, d, c, b[c].jb), enumerable: true });
      }
    }
    function Z(a, b, c, d) {
      a[b] = Do(b, c, d);
    }
    function Do(a, b, c) {
      function d() {
        var g = Array.prototype.slice.call(arguments);
        po(e, c, g);
        return b.apply(this, g);
      }
      if (!c)
        return b;
      var e = Fo(a), f;
      for (f in b)
        d[f] = b[f];
      for (f in b.prototype)
        d.prototype[f] = b.prototype[f];
      return d;
    }
    function Fo(a) {
      a = a.split(".");
      return a[a.length - 1];
    }
    ;
    Y(zn.prototype, {
      ib: { name: "applyActionCode", j: [V("code")] },
      Qa: { name: "checkActionCode", j: [V("code")] },
      mb: { name: "confirmPasswordReset", j: [V("code"), V("newPassword")] },
      dc: { name: "createUserWithEmailAndPassword", j: [V("email"), V("password")] },
      gc: { name: "fetchSignInMethodsForEmail", j: [V("email")] },
      qa: { name: "getRedirectResult", j: [] },
      Ac: { name: "isSignInWithEmailLink", j: [V("emailLink")] },
      Gc: { name: "onAuthStateChanged", j: [X(W(), so(), "nextOrObserver"), so("opt_error", true), so("opt_completed", true)] },
      Hc: {
        name: "onIdTokenChanged",
        j: [X(W(), so(), "nextOrObserver"), so("opt_error", true), so("opt_completed", true)]
      },
      ub: { name: "sendPasswordResetEmail", j: [V("email"), X(W("opt_actionCodeSettings", true), to(null, true), "opt_actionCodeSettings", true)] },
      vb: { name: "sendSignInLinkToEmail", j: [V("email"), W("actionCodeSettings")] },
      wb: { name: "setPersistence", j: [V("persistence")] },
      Rc: { name: "signInAndRetrieveDataWithCredential", j: [xo()] },
      yb: { name: "signInAnonymously", j: [] },
      Za: { name: "signInWithCredential", j: [xo()] },
      Sc: { name: "signInWithCustomToken", j: [V("token")] },
      Tc: { name: "signInWithEmailAndPassword", j: [V("email"), V("password")] },
      Uc: { name: "signInWithEmailLink", j: [V("email"), V("emailLink", true)] },
      Vc: { name: "signInWithPhoneNumber", j: [V("phoneNumber"), Co()] },
      Wc: { name: "signInWithPopup", j: [zo()] },
      Xc: { name: "signInWithRedirect", j: [zo()] },
      cd: { name: "updateCurrentUser", j: [X(function(a) {
        return { name: "user", J: "an instance of Firebase User", optional: !!a, K: function(b) {
          return !!(b && b instanceof Dm);
        } };
      }(), to(), "user")] },
      zb: { name: "signOut", j: [] },
      toJSON: { name: "toJSON", j: [V(null, true)] },
      ed: { name: "useDeviceLanguage", j: [] },
      fd: { name: "useEmulator", j: [V("url")] },
      hd: { name: "verifyPasswordResetCode", j: [V("code")] }
    });
    Eo(zn.prototype, { lc: { name: "languageCode", jb: X(V(), to(), "languageCode") }, ti: { name: "tenantId", jb: X(V(), to(), "tenantId") } });
    zn.Persistence = Mk;
    zn.Persistence.LOCAL = "local";
    zn.Persistence.SESSION = "session";
    zn.Persistence.NONE = "none";
    Y(Dm.prototype, {
      "delete": { name: "delete", j: [] },
      nc: { name: "getIdTokenResult", j: [ro("opt_forceRefresh", true)] },
      I: { name: "getIdToken", j: [ro("opt_forceRefresh", true)] },
      Bc: { name: "linkAndRetrieveDataWithCredential", j: [xo()] },
      pb: { name: "linkWithCredential", j: [xo()] },
      Cc: { name: "linkWithPhoneNumber", j: [V("phoneNumber"), Co()] },
      Dc: { name: "linkWithPopup", j: [zo()] },
      Ec: { name: "linkWithRedirect", j: [zo()] },
      Kc: { name: "reauthenticateAndRetrieveDataWithCredential", j: [xo()] },
      sb: { name: "reauthenticateWithCredential", j: [xo()] },
      Lc: {
        name: "reauthenticateWithPhoneNumber",
        j: [V("phoneNumber"), Co()]
      },
      Mc: { name: "reauthenticateWithPopup", j: [zo()] },
      Nc: { name: "reauthenticateWithRedirect", j: [zo()] },
      reload: { name: "reload", j: [] },
      tb: { name: "sendEmailVerification", j: [X(W("opt_actionCodeSettings", true), to(null, true), "opt_actionCodeSettings", true)] },
      toJSON: { name: "toJSON", j: [V(null, true)] },
      bd: { name: "unlink", j: [V("provider")] },
      Ab: { name: "updateEmail", j: [V("email")] },
      Bb: { name: "updatePassword", j: [V("password")] },
      dd: { name: "updatePhoneNumber", j: [xo("phone")] },
      Cb: { name: "updateProfile", j: [W("profile")] },
      Db: { name: "verifyBeforeUpdateEmail", j: [V("email"), X(W("opt_actionCodeSettings", true), to(null, true), "opt_actionCodeSettings", true)] }
    });
    Y(Sn.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
    Y(Rn.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
    Y(C.prototype, { na: { name: "finally" }, s: { name: "catch" }, then: { name: "then" } });
    Eo($l.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", jb: ro("appVerificationDisabledForTesting") } });
    Y(am.prototype, { confirm: { name: "confirm", j: [V("verificationCode")] } });
    Z(xg, "fromJSON", function(a) {
      a = typeof a === "string" ? JSON.parse(a) : a;
      for (var b, c = [Ig, $g, gh, Fg], d = 0; d < c.length; d++)
        if (b = c[d](a))
          return b;
      return null;
    }, [X(V(), W(), "json")]);
    Z(Vg, "credential", function(a, b) {
      return new Ug(a, b);
    }, [V("email"), V("password")]);
    Y(Ug.prototype, { w: { name: "toJSON", j: [V(null, true)] } });
    Y(Mg.prototype, { Ca: { name: "addScope", j: [V("scope")] }, Ka: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(Mg, "credential", Ng, [X(V(), W(), "token")]);
    Z(Vg, "credentialWithLink", ah, [V("email"), V("emailLink")]);
    Y(Og.prototype, { Ca: { name: "addScope", j: [V("scope")] }, Ka: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(Og, "credential", Pg, [X(V(), W(), "token")]);
    Y(Qg.prototype, { Ca: { name: "addScope", j: [V("scope")] }, Ka: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(Qg, "credential", Rg, [X(V(), X(W(), to()), "idToken"), X(V(), to(), "accessToken", true)]);
    Y(Sg.prototype, { Ka: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(Sg, "credential", Tg, [X(V(), W(), "token"), V("secret", true)]);
    Y(Lg.prototype, { Ca: { name: "addScope", j: [V("scope")] }, credential: { name: "credential", j: [X(V(), X(W(), to()), "optionsOrIdToken"), X(V(), to(), "accessToken", true)] }, Ka: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Y(Gg.prototype, { w: { name: "toJSON", j: [V(null, true)] } });
    Y(Ag.prototype, { w: { name: "toJSON", j: [V(null, true)] } });
    Z(hh, "credential", lh, [V("verificationId"), V("verificationCode")]);
    Y(hh.prototype, { eb: { name: "verifyPhoneNumber", j: [X(V(), function(a, b) {
      return { name: a || "phoneInfoOptions", J: "valid phone info options", optional: !!b, K: function(c) {
        return c ? c.session && c.phoneNumber ? Ao(c.session, vg) && typeof c.phoneNumber === "string" : c.session && c.multiFactorHint ? Ao(c.session, wg) && Bo(c.multiFactorHint) : c.session && c.multiFactorUid ? Ao(c.session, wg) && typeof c.multiFactorUid === "string" : c.phoneNumber ? typeof c.phoneNumber === "string" : false : false;
      } };
    }(), "phoneInfoOptions"), Co()] } });
    Y(ch.prototype, { w: { name: "toJSON", j: [V(null, true)] } });
    Y(t.prototype, { toJSON: { name: "toJSON", j: [V(null, true)] } });
    Y(uh.prototype, { toJSON: { name: "toJSON", j: [V(null, true)] } });
    Y(th.prototype, { toJSON: { name: "toJSON", j: [V(null, true)] } });
    Y(gm.prototype, { toJSON: { name: "toJSON", j: [V(null, true)] } });
    Y(dm.prototype, { Qc: { name: "resolveSignIn", j: [yo()] } });
    Y(om.prototype, { Qb: { name: "getSession", j: [] }, ec: { name: "enroll", j: [yo(), V("displayName", true)] }, ad: { name: "unenroll", j: [X({ name: "multiFactorInfo", J: "a valid multiFactorInfo", optional: false, K: Bo }, V(), "multiFactorInfoIdentifier")] } });
    Y(oo.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } });
    Z(Ff, "parseLink", Nf, [V("link")]);
    Z(Yn, "assertion", function(a) {
      return new mm(a);
    }, [xo("phone")]);
    (function() {
      if (typeof firebase4 !== "undefined" && firebase4.INTERNAL && firebase4.INTERNAL.registerComponent) {
        var a = { ActionCodeInfo: { Operation: { EMAIL_SIGNIN: wf, PASSWORD_RESET: "PASSWORD_RESET", RECOVER_EMAIL: "RECOVER_EMAIL", REVERT_SECOND_FACTOR_ADDITION: yf, VERIFY_AND_CHANGE_EMAIL: xf, VERIFY_EMAIL: "VERIFY_EMAIL" } }, Auth: zn, AuthCredential: xg, Error: t };
        Z(a, "EmailAuthProvider", Vg, []);
        Z(a, "FacebookAuthProvider", Mg, []);
        Z(a, "GithubAuthProvider", Og, []);
        Z(a, "GoogleAuthProvider", Qg, []);
        Z(a, "TwitterAuthProvider", Sg, []);
        Z(a, "OAuthProvider", Lg, [V("providerId")]);
        Z(a, "SAMLAuthProvider", Kg, [V("providerId")]);
        Z(a, "PhoneAuthProvider", hh, [vo()]);
        Z(a, "RecaptchaVerifier", oo, [X(V(), uo(), "recaptchaContainer"), W("recaptchaParameters", true), wo()]);
        Z(a, "ActionCodeURL", Ff, []);
        Z(a, "PhoneMultiFactorGenerator", Yn, []);
        firebase4.INTERNAL.registerComponent({ name: "auth", instanceFactory: function(b) {
          b = b.getProvider("app").getImmediate();
          return new zn(b);
        }, multipleInstances: false, serviceProps: a, instantiationMode: "LAZY", type: "PUBLIC" });
        firebase4.INTERNAL.registerComponent({
          name: "auth-internal",
          instanceFactory: function(b) {
            b = b.getProvider("auth").getImmediate();
            return { getUid: q(b.getUid, b), getToken: q(b.mc, b), addAuthTokenListener: q(b.cc, b), removeAuthTokenListener: q(b.Oc, b) };
          },
          multipleInstances: false,
          instantiationMode: "LAZY",
          type: "PRIVATE"
        });
        firebase4.registerVersion("@firebase/auth", "0.15.0");
        firebase4.INTERNAL.extendNamespace({ User: Dm });
      } else
        throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
  }).apply(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

  // node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/@firebase/analytics/dist/index.esm.js
  var import_app2 = __toESM(require_index_cjs4());

  // node_modules/@firebase/installations/dist/index.esm.js
  var import_app = __toESM(require_index_cjs4());
  var import_component = __toESM(require_index_cjs2());
  var import_util = __toESM(require_index_cjs());
  var import_idb = __toESM(require_idb());
  var name2 = "@firebase/installations";
  var version = "0.4.17";
  var PENDING_TIMEOUT_MS = 1e4;
  var PACKAGE_VERSION = "w:" + version;
  var INTERNAL_AUTH_VERSION = "FIS_v2";
  var INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
  var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
  var SERVICE = "installations";
  var SERVICE_NAME = "Installations";
  var _a;
  var ERROR_DESCRIPTION_MAP = (_a = {}, _a["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', _a["not-registered"] = "Firebase Installation is not registered.", _a["installation-not-found"] = "Firebase Installation not found.", _a["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a["app-offline"] = "Could not process request. Application offline.", _a["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", _a);
  var ERROR_FACTORY = new import_util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
  function isServerError(error) {
    return error instanceof import_util.FirebaseError && error.code.includes("request-failed");
  }
  function getInstallationsEndpoint(_a3) {
    var projectId = _a3.projectId;
    return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
  }
  function extractAuthTokenInfoFromResponse(response) {
    return {
      token: response.token,
      requestStatus: 2,
      expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
      creationTime: Date.now()
    };
  }
  function getErrorFromResponse(requestName, response) {
    return __awaiter(this, void 0, void 0, function() {
      var responseJson, errorData;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, response.json()];
          case 1:
            responseJson = _a3.sent();
            errorData = responseJson.error;
            return [2, ERROR_FACTORY.create("request-failed", {
              requestName,
              serverCode: errorData.code,
              serverMessage: errorData.message,
              serverStatus: errorData.status
            })];
        }
      });
    });
  }
  function getHeaders(_a3) {
    var apiKey = _a3.apiKey;
    return new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-goog-api-key": apiKey
    });
  }
  function getHeadersWithAuth(appConfig, _a3) {
    var refreshToken = _a3.refreshToken;
    var headers = getHeaders(appConfig);
    headers.append("Authorization", getAuthorizationHeader(refreshToken));
    return headers;
  }
  function retryIfServerError(fn) {
    return __awaiter(this, void 0, void 0, function() {
      var result;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, fn()];
          case 1:
            result = _a3.sent();
            if (result.status >= 500 && result.status < 600) {
              return [2, fn()];
            }
            return [2, result];
        }
      });
    });
  }
  function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    return Number(responseExpiresIn.replace("s", "000"));
  }
  function getAuthorizationHeader(refreshToken) {
    return INTERNAL_AUTH_VERSION + " " + refreshToken;
  }
  function createInstallationRequest(appConfig, _a3) {
    var fid = _a3.fid;
    return __awaiter(this, void 0, void 0, function() {
      var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            endpoint = getInstallationsEndpoint(appConfig);
            headers = getHeaders(appConfig);
            body = {
              fid,
              authVersion: INTERNAL_AUTH_VERSION,
              appId: appConfig.appId,
              sdkVersion: PACKAGE_VERSION
            };
            request = {
              method: "POST",
              headers,
              body: JSON.stringify(body)
            };
            return [4, retryIfServerError(function() {
              return fetch(endpoint, request);
            })];
          case 1:
            response = _b.sent();
            if (!response.ok)
              return [3, 3];
            return [4, response.json()];
          case 2:
            responseValue = _b.sent();
            registeredInstallationEntry = {
              fid: responseValue.fid || fid,
              registrationStatus: 2,
              refreshToken: responseValue.refreshToken,
              authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
            };
            return [2, registeredInstallationEntry];
          case 3:
            return [4, getErrorFromResponse("Create Installation", response)];
          case 4:
            throw _b.sent();
        }
      });
    });
  }
  function sleep(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
  }
  function bufferToBase64UrlSafe(array) {
    var b64 = btoa(String.fromCharCode.apply(String, __spread(array)));
    return b64.replace(/\+/g, "-").replace(/\//g, "_");
  }
  var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
  var INVALID_FID = "";
  function generateFid() {
    try {
      var fidByteArray = new Uint8Array(17);
      var crypto_1 = self.crypto || self.msCrypto;
      crypto_1.getRandomValues(fidByteArray);
      fidByteArray[0] = 112 + fidByteArray[0] % 16;
      var fid = encode(fidByteArray);
      return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    } catch (_a3) {
      return INVALID_FID;
    }
  }
  function encode(fidByteArray) {
    var b64String = bufferToBase64UrlSafe(fidByteArray);
    return b64String.substr(0, 22);
  }
  function getKey(appConfig) {
    return appConfig.appName + "!" + appConfig.appId;
  }
  var fidChangeCallbacks = /* @__PURE__ */ new Map();
  function fidChanged(appConfig, fid) {
    var key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
  }
  function addCallback(appConfig, callback) {
    getBroadcastChannel();
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
      callbackSet = /* @__PURE__ */ new Set();
      fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
  }
  function removeCallback(appConfig, callback) {
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
      return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
      fidChangeCallbacks.delete(key);
    }
    closeBroadcastChannel();
  }
  function callFidChangeCallbacks(key, fid) {
    var e_1, _a3;
    var callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
      return;
    }
    try {
      for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
        var callback = callbacks_1_1.value;
        callback(fid);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (callbacks_1_1 && !callbacks_1_1.done && (_a3 = callbacks_1.return))
          _a3.call(callbacks_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  function broadcastFidChange(key, fid) {
    var channel = getBroadcastChannel();
    if (channel) {
      channel.postMessage({ key, fid });
    }
    closeBroadcastChannel();
  }
  var broadcastChannel = null;
  function getBroadcastChannel() {
    if (!broadcastChannel && "BroadcastChannel" in self) {
      broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
      broadcastChannel.onmessage = function(e) {
        callFidChangeCallbacks(e.data.key, e.data.fid);
      };
    }
    return broadcastChannel;
  }
  function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
      broadcastChannel.close();
      broadcastChannel = null;
    }
  }
  var DATABASE_NAME = "firebase-installations-database";
  var DATABASE_VERSION = 1;
  var OBJECT_STORE_NAME = "firebase-installations-store";
  var dbPromise = null;
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = (0, import_idb.openDb)(DATABASE_NAME, DATABASE_VERSION, function(upgradeDB) {
        switch (upgradeDB.oldVersion) {
          case 0:
            upgradeDB.createObjectStore(OBJECT_STORE_NAME);
        }
      });
    }
    return dbPromise;
  }
  function set(appConfig, value) {
    return __awaiter(this, void 0, void 0, function() {
      var key, db, tx, objectStore, oldValue;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            key = getKey(appConfig);
            return [4, getDbPromise()];
          case 1:
            db = _a3.sent();
            tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
            objectStore = tx.objectStore(OBJECT_STORE_NAME);
            return [4, objectStore.get(key)];
          case 2:
            oldValue = _a3.sent();
            return [4, objectStore.put(value, key)];
          case 3:
            _a3.sent();
            return [4, tx.complete];
          case 4:
            _a3.sent();
            if (!oldValue || oldValue.fid !== value.fid) {
              fidChanged(appConfig, value.fid);
            }
            return [2, value];
        }
      });
    });
  }
  function remove(appConfig) {
    return __awaiter(this, void 0, void 0, function() {
      var key, db, tx;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            key = getKey(appConfig);
            return [4, getDbPromise()];
          case 1:
            db = _a3.sent();
            tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
            return [4, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
          case 2:
            _a3.sent();
            return [4, tx.complete];
          case 3:
            _a3.sent();
            return [2];
        }
      });
    });
  }
  function update(appConfig, updateFn) {
    return __awaiter(this, void 0, void 0, function() {
      var key, db, tx, store, oldValue, newValue;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            key = getKey(appConfig);
            return [4, getDbPromise()];
          case 1:
            db = _a3.sent();
            tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
            store = tx.objectStore(OBJECT_STORE_NAME);
            return [4, store.get(key)];
          case 2:
            oldValue = _a3.sent();
            newValue = updateFn(oldValue);
            if (!(newValue === void 0))
              return [3, 4];
            return [4, store.delete(key)];
          case 3:
            _a3.sent();
            return [3, 6];
          case 4:
            return [4, store.put(newValue, key)];
          case 5:
            _a3.sent();
            _a3.label = 6;
          case 6:
            return [4, tx.complete];
          case 7:
            _a3.sent();
            if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
              fidChanged(appConfig, newValue.fid);
            }
            return [2, newValue];
        }
      });
    });
  }
  function getInstallationEntry(appConfig) {
    return __awaiter(this, void 0, void 0, function() {
      var registrationPromise, installationEntry;
      var _a3;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            return [4, update(appConfig, function(oldEntry) {
              var installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
              var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry2);
              registrationPromise = entryWithPromise.registrationPromise;
              return entryWithPromise.installationEntry;
            })];
          case 1:
            installationEntry = _b.sent();
            if (!(installationEntry.fid === INVALID_FID))
              return [3, 3];
            _a3 = {};
            return [4, registrationPromise];
          case 2:
            return [2, (_a3.installationEntry = _b.sent(), _a3)];
          case 3:
            return [2, {
              installationEntry,
              registrationPromise
            }];
        }
      });
    });
  }
  function updateOrCreateInstallationEntry(oldEntry) {
    var entry = oldEntry || {
      fid: generateFid(),
      registrationStatus: 0
    };
    return clearTimedOutRequest(entry);
  }
  function triggerRegistrationIfNecessary(appConfig, installationEntry) {
    if (installationEntry.registrationStatus === 0) {
      if (!navigator.onLine) {
        var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"));
        return {
          installationEntry,
          registrationPromise: registrationPromiseWithError
        };
      }
      var inProgressEntry = {
        fid: installationEntry.fid,
        registrationStatus: 1,
        registrationTime: Date.now()
      };
      var registrationPromise = registerInstallation(appConfig, inProgressEntry);
      return { installationEntry: inProgressEntry, registrationPromise };
    } else if (installationEntry.registrationStatus === 1) {
      return {
        installationEntry,
        registrationPromise: waitUntilFidRegistration(appConfig)
      };
    } else {
      return { installationEntry };
    }
  }
  function registerInstallation(appConfig, installationEntry) {
    return __awaiter(this, void 0, void 0, function() {
      var registeredInstallationEntry, e_1;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            _a3.trys.push([0, 2, , 7]);
            return [4, createInstallationRequest(appConfig, installationEntry)];
          case 1:
            registeredInstallationEntry = _a3.sent();
            return [2, set(appConfig, registeredInstallationEntry)];
          case 2:
            e_1 = _a3.sent();
            if (!(isServerError(e_1) && e_1.serverCode === 409))
              return [3, 4];
            return [4, remove(appConfig)];
          case 3:
            _a3.sent();
            return [3, 6];
          case 4:
            return [4, set(appConfig, {
              fid: installationEntry.fid,
              registrationStatus: 0
            })];
          case 5:
            _a3.sent();
            _a3.label = 6;
          case 6:
            throw e_1;
          case 7:
            return [2];
        }
      });
    });
  }
  function waitUntilFidRegistration(appConfig) {
    return __awaiter(this, void 0, void 0, function() {
      var entry, _a3, installationEntry, registrationPromise;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            return [4, updateInstallationRequest(appConfig)];
          case 1:
            entry = _b.sent();
            _b.label = 2;
          case 2:
            if (!(entry.registrationStatus === 1))
              return [3, 5];
            return [4, sleep(100)];
          case 3:
            _b.sent();
            return [4, updateInstallationRequest(appConfig)];
          case 4:
            entry = _b.sent();
            return [3, 2];
          case 5:
            if (!(entry.registrationStatus === 0))
              return [3, 7];
            return [4, getInstallationEntry(appConfig)];
          case 6:
            _a3 = _b.sent(), installationEntry = _a3.installationEntry, registrationPromise = _a3.registrationPromise;
            if (registrationPromise) {
              return [2, registrationPromise];
            } else {
              return [2, installationEntry];
            }
          case 7:
            return [2, entry];
        }
      });
    });
  }
  function updateInstallationRequest(appConfig) {
    return update(appConfig, function(oldEntry) {
      if (!oldEntry) {
        throw ERROR_FACTORY.create("installation-not-found");
      }
      return clearTimedOutRequest(oldEntry);
    });
  }
  function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
      return {
        fid: entry.fid,
        registrationStatus: 0
      };
    }
    return entry;
  }
  function hasInstallationRequestTimedOut(installationEntry) {
    return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
  }
  function generateAuthTokenRequest(_a3, installationEntry) {
    var appConfig = _a3.appConfig, platformLoggerProvider = _a3.platformLoggerProvider;
    return __awaiter(this, void 0, void 0, function() {
      var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
            headers = getHeadersWithAuth(appConfig, installationEntry);
            platformLogger = platformLoggerProvider.getImmediate({
              optional: true
            });
            if (platformLogger) {
              headers.append("x-firebase-client", platformLogger.getPlatformInfoString());
            }
            body = {
              installation: {
                sdkVersion: PACKAGE_VERSION
              }
            };
            request = {
              method: "POST",
              headers,
              body: JSON.stringify(body)
            };
            return [4, retryIfServerError(function() {
              return fetch(endpoint, request);
            })];
          case 1:
            response = _b.sent();
            if (!response.ok)
              return [3, 3];
            return [4, response.json()];
          case 2:
            responseValue = _b.sent();
            completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
            return [2, completedAuthToken];
          case 3:
            return [4, getErrorFromResponse("Generate Auth Token", response)];
          case 4:
            throw _b.sent();
        }
      });
    });
  }
  function getGenerateAuthTokenEndpoint(appConfig, _a3) {
    var fid = _a3.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
  }
  function refreshAuthToken(dependencies, forceRefresh) {
    if (forceRefresh === void 0) {
      forceRefresh = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var tokenPromise, entry, authToken, _a3;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            return [4, update(dependencies.appConfig, function(oldEntry) {
              if (!isEntryRegistered(oldEntry)) {
                throw ERROR_FACTORY.create("not-registered");
              }
              var oldAuthToken = oldEntry.authToken;
              if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                return oldEntry;
              } else if (oldAuthToken.requestStatus === 1) {
                tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                return oldEntry;
              } else {
                if (!navigator.onLine) {
                  throw ERROR_FACTORY.create("app-offline");
                }
                var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
                return inProgressEntry;
              }
            })];
          case 1:
            entry = _b.sent();
            if (!tokenPromise)
              return [3, 3];
            return [4, tokenPromise];
          case 2:
            _a3 = _b.sent();
            return [3, 4];
          case 3:
            _a3 = entry.authToken;
            _b.label = 4;
          case 4:
            authToken = _a3;
            return [2, authToken];
        }
      });
    });
  }
  function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
    return __awaiter(this, void 0, void 0, function() {
      var entry, authToken;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, updateAuthTokenRequest(dependencies.appConfig)];
          case 1:
            entry = _a3.sent();
            _a3.label = 2;
          case 2:
            if (!(entry.authToken.requestStatus === 1))
              return [3, 5];
            return [4, sleep(100)];
          case 3:
            _a3.sent();
            return [4, updateAuthTokenRequest(dependencies.appConfig)];
          case 4:
            entry = _a3.sent();
            return [3, 2];
          case 5:
            authToken = entry.authToken;
            if (authToken.requestStatus === 0) {
              return [2, refreshAuthToken(dependencies, forceRefresh)];
            } else {
              return [2, authToken];
            }
        }
      });
    });
  }
  function updateAuthTokenRequest(appConfig) {
    return update(appConfig, function(oldEntry) {
      if (!isEntryRegistered(oldEntry)) {
        throw ERROR_FACTORY.create("not-registered");
      }
      var oldAuthToken = oldEntry.authToken;
      if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
        return __assign(__assign({}, oldEntry), { authToken: { requestStatus: 0 } });
      }
      return oldEntry;
    });
  }
  function fetchAuthTokenFromServer(dependencies, installationEntry) {
    return __awaiter(this, void 0, void 0, function() {
      var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            _a3.trys.push([0, 3, , 8]);
            return [4, generateAuthTokenRequest(dependencies, installationEntry)];
          case 1:
            authToken = _a3.sent();
            updatedInstallationEntry = __assign(__assign({}, installationEntry), { authToken });
            return [4, set(dependencies.appConfig, updatedInstallationEntry)];
          case 2:
            _a3.sent();
            return [2, authToken];
          case 3:
            e_1 = _a3.sent();
            if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404)))
              return [3, 5];
            return [4, remove(dependencies.appConfig)];
          case 4:
            _a3.sent();
            return [3, 7];
          case 5:
            updatedInstallationEntry = __assign(__assign({}, installationEntry), { authToken: { requestStatus: 0 } });
            return [4, set(dependencies.appConfig, updatedInstallationEntry)];
          case 6:
            _a3.sent();
            _a3.label = 7;
          case 7:
            throw e_1;
          case 8:
            return [2];
        }
      });
    });
  }
  function isEntryRegistered(installationEntry) {
    return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
  }
  function isAuthTokenValid(authToken) {
    return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
  }
  function isAuthTokenExpired(authToken) {
    var now = Date.now();
    return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
  }
  function makeAuthTokenRequestInProgressEntry(oldEntry) {
    var inProgressAuthToken = {
      requestStatus: 1,
      requestTime: Date.now()
    };
    return __assign(__assign({}, oldEntry), { authToken: inProgressAuthToken });
  }
  function hasAuthTokenRequestTimedOut(authToken) {
    return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
  }
  function getId(dependencies) {
    return __awaiter(this, void 0, void 0, function() {
      var _a3, installationEntry, registrationPromise;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            return [4, getInstallationEntry(dependencies.appConfig)];
          case 1:
            _a3 = _b.sent(), installationEntry = _a3.installationEntry, registrationPromise = _a3.registrationPromise;
            if (registrationPromise) {
              registrationPromise.catch(console.error);
            } else {
              refreshAuthToken(dependencies).catch(console.error);
            }
            return [2, installationEntry.fid];
        }
      });
    });
  }
  function getToken(dependencies, forceRefresh) {
    if (forceRefresh === void 0) {
      forceRefresh = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var authToken;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, completeInstallationRegistration(dependencies.appConfig)];
          case 1:
            _a3.sent();
            return [4, refreshAuthToken(dependencies, forceRefresh)];
          case 2:
            authToken = _a3.sent();
            return [2, authToken.token];
        }
      });
    });
  }
  function completeInstallationRegistration(appConfig) {
    return __awaiter(this, void 0, void 0, function() {
      var registrationPromise;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, getInstallationEntry(appConfig)];
          case 1:
            registrationPromise = _a3.sent().registrationPromise;
            if (!registrationPromise)
              return [3, 3];
            return [4, registrationPromise];
          case 2:
            _a3.sent();
            _a3.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }
  function deleteInstallationRequest(appConfig, installationEntry) {
    return __awaiter(this, void 0, void 0, function() {
      var endpoint, headers, request, response;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            endpoint = getDeleteEndpoint(appConfig, installationEntry);
            headers = getHeadersWithAuth(appConfig, installationEntry);
            request = {
              method: "DELETE",
              headers
            };
            return [4, retryIfServerError(function() {
              return fetch(endpoint, request);
            })];
          case 1:
            response = _a3.sent();
            if (!!response.ok)
              return [3, 3];
            return [4, getErrorFromResponse("Delete Installation", response)];
          case 2:
            throw _a3.sent();
          case 3:
            return [2];
        }
      });
    });
  }
  function getDeleteEndpoint(appConfig, _a3) {
    var fid = _a3.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid;
  }
  function deleteInstallation(dependencies) {
    return __awaiter(this, void 0, void 0, function() {
      var appConfig, entry;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            appConfig = dependencies.appConfig;
            return [4, update(appConfig, function(oldEntry) {
              if (oldEntry && oldEntry.registrationStatus === 0) {
                return void 0;
              }
              return oldEntry;
            })];
          case 1:
            entry = _a3.sent();
            if (!entry)
              return [3, 6];
            if (!(entry.registrationStatus === 1))
              return [3, 2];
            throw ERROR_FACTORY.create("delete-pending-registration");
          case 2:
            if (!(entry.registrationStatus === 2))
              return [3, 6];
            if (!!navigator.onLine)
              return [3, 3];
            throw ERROR_FACTORY.create("app-offline");
          case 3:
            return [4, deleteInstallationRequest(appConfig, entry)];
          case 4:
            _a3.sent();
            return [4, remove(appConfig)];
          case 5:
            _a3.sent();
            _a3.label = 6;
          case 6:
            return [2];
        }
      });
    });
  }
  function onIdChange(_a3, callback) {
    var appConfig = _a3.appConfig;
    addCallback(appConfig, callback);
    return function() {
      removeCallback(appConfig, callback);
    };
  }
  function extractAppConfig(app) {
    var e_1, _a3;
    if (!app || !app.options) {
      throw getMissingValueError("App Configuration");
    }
    if (!app.name) {
      throw getMissingValueError("App Name");
    }
    var configKeys = [
      "projectId",
      "apiKey",
      "appId"
    ];
    try {
      for (var configKeys_1 = __values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
        var keyName = configKeys_1_1.value;
        if (!app.options[keyName]) {
          throw getMissingValueError(keyName);
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (configKeys_1_1 && !configKeys_1_1.done && (_a3 = configKeys_1.return))
          _a3.call(configKeys_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return {
      appName: app.name,
      projectId: app.options.projectId,
      apiKey: app.options.apiKey,
      appId: app.options.appId
    };
  }
  function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values", {
      valueName
    });
  }
  function registerInstallations(instance) {
    var installationsName = "installations";
    instance.INTERNAL.registerComponent(new import_component.Component(installationsName, function(container) {
      var app = container.getProvider("app").getImmediate();
      var appConfig = extractAppConfig(app);
      var platformLoggerProvider = container.getProvider("platform-logger");
      var dependencies = {
        appConfig,
        platformLoggerProvider
      };
      var installations = {
        app,
        getId: function() {
          return getId(dependencies);
        },
        getToken: function(forceRefresh) {
          return getToken(dependencies, forceRefresh);
        },
        delete: function() {
          return deleteInstallation(dependencies);
        },
        onIdChange: function(callback) {
          return onIdChange(dependencies, callback);
        }
      };
      return installations;
    }, "PUBLIC"));
    instance.registerVersion(name2, version);
  }
  registerInstallations(import_app.default);

  // node_modules/@firebase/analytics/dist/index.esm.js
  var import_logger = __toESM(require_index_cjs3());
  var import_util2 = __toESM(require_index_cjs());
  var import_component2 = __toESM(require_index_cjs2());
  var GA_FID_KEY = "firebase_id";
  var ORIGIN_KEY = "origin";
  var FETCH_TIMEOUT_MILLIS = 60 * 1e3;
  var DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
  var GTAG_URL = "https://www.googletagmanager.com/gtag/js";
  var GtagCommand;
  (function(GtagCommand2) {
    GtagCommand2["EVENT"] = "event";
    GtagCommand2["SET"] = "set";
    GtagCommand2["CONFIG"] = "config";
  })(GtagCommand || (GtagCommand = {}));
  var EventName;
  (function(EventName2) {
    EventName2["ADD_SHIPPING_INFO"] = "add_shipping_info";
    EventName2["ADD_PAYMENT_INFO"] = "add_payment_info";
    EventName2["ADD_TO_CART"] = "add_to_cart";
    EventName2["ADD_TO_WISHLIST"] = "add_to_wishlist";
    EventName2["BEGIN_CHECKOUT"] = "begin_checkout";
    EventName2["CHECKOUT_PROGRESS"] = "checkout_progress";
    EventName2["EXCEPTION"] = "exception";
    EventName2["GENERATE_LEAD"] = "generate_lead";
    EventName2["LOGIN"] = "login";
    EventName2["PAGE_VIEW"] = "page_view";
    EventName2["PURCHASE"] = "purchase";
    EventName2["REFUND"] = "refund";
    EventName2["REMOVE_FROM_CART"] = "remove_from_cart";
    EventName2["SCREEN_VIEW"] = "screen_view";
    EventName2["SEARCH"] = "search";
    EventName2["SELECT_CONTENT"] = "select_content";
    EventName2["SELECT_ITEM"] = "select_item";
    EventName2["SELECT_PROMOTION"] = "select_promotion";
    EventName2["SET_CHECKOUT_OPTION"] = "set_checkout_option";
    EventName2["SHARE"] = "share";
    EventName2["SIGN_UP"] = "sign_up";
    EventName2["TIMING_COMPLETE"] = "timing_complete";
    EventName2["VIEW_CART"] = "view_cart";
    EventName2["VIEW_ITEM"] = "view_item";
    EventName2["VIEW_ITEM_LIST"] = "view_item_list";
    EventName2["VIEW_PROMOTION"] = "view_promotion";
    EventName2["VIEW_SEARCH_RESULTS"] = "view_search_results";
  })(EventName || (EventName = {}));
  function logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
    return __awaiter(this, void 0, void 0, function() {
      var measurementId, params;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            if (!(options && options.global))
              return [3, 1];
            gtagFunction(GtagCommand.EVENT, eventName, eventParams);
            return [2];
          case 1:
            return [4, initializationPromise];
          case 2:
            measurementId = _a3.sent();
            params = __assign(__assign({}, eventParams), { "send_to": measurementId });
            gtagFunction(GtagCommand.EVENT, eventName, params);
            _a3.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }
  function setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
    return __awaiter(this, void 0, void 0, function() {
      var measurementId;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            if (!(options && options.global))
              return [3, 1];
            gtagFunction(GtagCommand.SET, { "screen_name": screenName });
            return [2, Promise.resolve()];
          case 1:
            return [4, initializationPromise];
          case 2:
            measurementId = _a3.sent();
            gtagFunction(GtagCommand.CONFIG, measurementId, {
              update: true,
              "screen_name": screenName
            });
            _a3.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }
  function setUserId(gtagFunction, initializationPromise, id, options) {
    return __awaiter(this, void 0, void 0, function() {
      var measurementId;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            if (!(options && options.global))
              return [3, 1];
            gtagFunction(GtagCommand.SET, { "user_id": id });
            return [2, Promise.resolve()];
          case 1:
            return [4, initializationPromise];
          case 2:
            measurementId = _a3.sent();
            gtagFunction(GtagCommand.CONFIG, measurementId, {
              update: true,
              "user_id": id
            });
            _a3.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }
  function setUserProperties(gtagFunction, initializationPromise, properties, options) {
    return __awaiter(this, void 0, void 0, function() {
      var flatProperties, _i, _a3, key, measurementId;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (!(options && options.global))
              return [3, 1];
            flatProperties = {};
            for (_i = 0, _a3 = Object.keys(properties); _i < _a3.length; _i++) {
              key = _a3[_i];
              flatProperties["user_properties." + key] = properties[key];
            }
            gtagFunction(GtagCommand.SET, flatProperties);
            return [2, Promise.resolve()];
          case 1:
            return [4, initializationPromise];
          case 2:
            measurementId = _b.sent();
            gtagFunction(GtagCommand.CONFIG, measurementId, {
              update: true,
              "user_properties": properties
            });
            _b.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }
  function setAnalyticsCollectionEnabled(initializationPromise, enabled) {
    return __awaiter(this, void 0, void 0, function() {
      var measurementId;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            return [4, initializationPromise];
          case 1:
            measurementId = _a3.sent();
            window["ga-disable-" + measurementId] = !enabled;
            return [2];
        }
      });
    });
  }
  var logger = new import_logger.Logger("@firebase/analytics");
  function insertScriptTag(dataLayerName2) {
    var script = document.createElement("script");
    script.src = GTAG_URL + "?l=" + dataLayerName2;
    script.async = true;
    document.head.appendChild(script);
  }
  function getOrCreateDataLayer(dataLayerName2) {
    var dataLayer = [];
    if (Array.isArray(window[dataLayerName2])) {
      dataLayer = window[dataLayerName2];
    } else {
      window[dataLayerName2] = dataLayer;
    }
    return dataLayer;
  }
  function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
    return __awaiter(this, void 0, void 0, function() {
      var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            correspondingAppId = measurementIdToAppId2[measurementId];
            _a3.label = 1;
          case 1:
            _a3.trys.push([1, 7, , 8]);
            if (!correspondingAppId)
              return [3, 3];
            return [4, initializationPromisesMap2[correspondingAppId]];
          case 2:
            _a3.sent();
            return [3, 6];
          case 3:
            return [4, Promise.all(dynamicConfigPromisesList2)];
          case 4:
            dynamicConfigResults = _a3.sent();
            foundConfig = dynamicConfigResults.find(function(config) {
              return config.measurementId === measurementId;
            });
            if (!foundConfig)
              return [3, 6];
            return [4, initializationPromisesMap2[foundConfig.appId]];
          case 5:
            _a3.sent();
            _a3.label = 6;
          case 6:
            return [3, 8];
          case 7:
            e_1 = _a3.sent();
            logger.error(e_1);
            return [3, 8];
          case 8:
            gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
            return [2];
        }
      });
    });
  }
  function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
    return __awaiter(this, void 0, void 0, function() {
      var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i, gaSendToList_1, sendToId, state_1, e_2;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            _a3.trys.push([0, 4, , 5]);
            initializationPromisesToWaitFor = [];
            if (!(gtagParams && gtagParams["send_to"]))
              return [3, 2];
            gaSendToList = gtagParams["send_to"];
            if (!Array.isArray(gaSendToList)) {
              gaSendToList = [gaSendToList];
            }
            return [4, Promise.all(dynamicConfigPromisesList2)];
          case 1:
            dynamicConfigResults = _a3.sent();
            _loop_1 = function(sendToId2) {
              var foundConfig = dynamicConfigResults.find(function(config) {
                return config.measurementId === sendToId2;
              });
              var initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
              if (initializationPromise) {
                initializationPromisesToWaitFor.push(initializationPromise);
              } else {
                initializationPromisesToWaitFor = [];
                return "break";
              }
            };
            for (_i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
              sendToId = gaSendToList_1[_i];
              state_1 = _loop_1(sendToId);
              if (state_1 === "break")
                break;
            }
            _a3.label = 2;
          case 2:
            if (initializationPromisesToWaitFor.length === 0) {
              initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
            }
            return [4, Promise.all(initializationPromisesToWaitFor)];
          case 3:
            _a3.sent();
            gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
            return [3, 5];
          case 4:
            e_2 = _a3.sent();
            logger.error(e_2);
            return [3, 5];
          case 5:
            return [2];
        }
      });
    });
  }
  function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
    function gtagWrapper(command, idOrNameOrParams, gtagParams) {
      return __awaiter(this, void 0, void 0, function() {
        var e_3;
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              _a3.trys.push([0, 6, , 7]);
              if (!(command === GtagCommand.EVENT))
                return [3, 2];
              return [4, gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, idOrNameOrParams, gtagParams)];
            case 1:
              _a3.sent();
              return [3, 5];
            case 2:
              if (!(command === GtagCommand.CONFIG))
                return [3, 4];
              return [4, gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, idOrNameOrParams, gtagParams)];
            case 3:
              _a3.sent();
              return [3, 5];
            case 4:
              gtagCore(GtagCommand.SET, idOrNameOrParams);
              _a3.label = 5;
            case 5:
              return [3, 7];
            case 6:
              e_3 = _a3.sent();
              logger.error(e_3);
              return [3, 7];
            case 7:
              return [2];
          }
        });
      });
    }
    return gtagWrapper;
  }
  function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
    var gtagCore = function() {
      var _args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
      window[dataLayerName2].push(arguments);
    };
    if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
      gtagCore = window[gtagFunctionName];
    }
    window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
    return {
      gtagCore,
      wrappedGtag: window[gtagFunctionName]
    };
  }
  function findGtagScriptOnPage() {
    var scriptTags = window.document.getElementsByTagName("script");
    for (var _i = 0, _a3 = Object.values(scriptTags); _i < _a3.length; _i++) {
      var tag = _a3[_i];
      if (tag.src && tag.src.includes(GTAG_URL)) {
        return tag;
      }
    }
    return null;
  }
  var _a2;
  var ERRORS = (_a2 = {}, _a2["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.", _a2["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", _a2["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}", _a2["invalid-analytics-context"] = "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", _a2["indexeddb-unavailable"] = "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", _a2["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.", _a2["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}", _a2["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.', _a2["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.', _a2);
  var ERROR_FACTORY2 = new import_util2.ErrorFactory("analytics", "Analytics", ERRORS);
  var LONG_RETRY_FACTOR = 30;
  var BASE_INTERVAL_MILLIS = 1e3;
  var RetryData = function() {
    function RetryData2(throttleMetadata, intervalMillis) {
      if (throttleMetadata === void 0) {
        throttleMetadata = {};
      }
      if (intervalMillis === void 0) {
        intervalMillis = BASE_INTERVAL_MILLIS;
      }
      this.throttleMetadata = throttleMetadata;
      this.intervalMillis = intervalMillis;
    }
    RetryData2.prototype.getThrottleMetadata = function(appId) {
      return this.throttleMetadata[appId];
    };
    RetryData2.prototype.setThrottleMetadata = function(appId, metadata) {
      this.throttleMetadata[appId] = metadata;
    };
    RetryData2.prototype.deleteThrottleMetadata = function(appId) {
      delete this.throttleMetadata[appId];
    };
    return RetryData2;
  }();
  var defaultRetryData = new RetryData();
  function getHeaders2(apiKey) {
    return new Headers({
      Accept: "application/json",
      "x-goog-api-key": apiKey
    });
  }
  function fetchDynamicConfig(appFields) {
    var _a3;
    return __awaiter(this, void 0, void 0, function() {
      var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse, _ignored_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            appId = appFields.appId, apiKey = appFields.apiKey;
            request = {
              method: "GET",
              headers: getHeaders2(apiKey)
            };
            appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
            return [4, fetch(appUrl, request)];
          case 1:
            response = _b.sent();
            if (!(response.status !== 200 && response.status !== 304))
              return [3, 6];
            errorMessage = "";
            _b.label = 2;
          case 2:
            _b.trys.push([2, 4, , 5]);
            return [4, response.json()];
          case 3:
            jsonResponse = _b.sent();
            if ((_a3 = jsonResponse.error) === null || _a3 === void 0 ? void 0 : _a3.message) {
              errorMessage = jsonResponse.error.message;
            }
            return [3, 5];
          case 4:
            _ignored_1 = _b.sent();
            return [3, 5];
          case 5:
            throw ERROR_FACTORY2.create("config-fetch-failed", {
              httpStatus: response.status,
              responseMessage: errorMessage
            });
          case 6:
            return [2, response.json()];
        }
      });
    });
  }
  function fetchDynamicConfigWithRetry(app, retryData, timeoutMillis) {
    if (retryData === void 0) {
      retryData = defaultRetryData;
    }
    return __awaiter(this, void 0, void 0, function() {
      var _a3, appId, apiKey, measurementId, throttleMetadata, signal;
      var _this = this;
      return __generator(this, function(_b) {
        _a3 = app.options, appId = _a3.appId, apiKey = _a3.apiKey, measurementId = _a3.measurementId;
        if (!appId) {
          throw ERROR_FACTORY2.create("no-app-id");
        }
        if (!apiKey) {
          if (measurementId) {
            return [2, {
              measurementId,
              appId
            }];
          }
          throw ERROR_FACTORY2.create("no-api-key");
        }
        throttleMetadata = retryData.getThrottleMetadata(appId) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        };
        signal = new AnalyticsAbortSignal();
        setTimeout(function() {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a4) {
              signal.abort();
              return [2];
            });
          });
        }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
        return [2, attemptFetchDynamicConfigWithRetry({ appId, apiKey, measurementId }, throttleMetadata, signal, retryData)];
      });
    });
  }
  function attemptFetchDynamicConfigWithRetry(appFields, _a3, signal, retryData) {
    var throttleEndTimeMillis = _a3.throttleEndTimeMillis, backoffCount = _a3.backoffCount;
    if (retryData === void 0) {
      retryData = defaultRetryData;
    }
    return __awaiter(this, void 0, void 0, function() {
      var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            appId = appFields.appId, measurementId = appFields.measurementId;
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3, , 4]);
            return [4, setAbortableTimeout(signal, throttleEndTimeMillis)];
          case 2:
            _b.sent();
            return [3, 4];
          case 3:
            e_1 = _b.sent();
            if (measurementId) {
              logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (' provided in the "measurementId" field in the local Firebase config. [' + e_1.message + "]"));
              return [2, { appId, measurementId }];
            }
            throw e_1;
          case 4:
            _b.trys.push([4, 6, , 7]);
            return [4, fetchDynamicConfig(appFields)];
          case 5:
            response = _b.sent();
            retryData.deleteThrottleMetadata(appId);
            return [2, response];
          case 6:
            e_2 = _b.sent();
            if (!isRetriableError(e_2)) {
              retryData.deleteThrottleMetadata(appId);
              if (measurementId) {
                logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (' provided in the "measurementId" field in the local Firebase config. [' + e_2.message + "]"));
                return [2, { appId, measurementId }];
              } else {
                throw e_2;
              }
            }
            backoffMillis = Number(e_2.httpStatus) === 503 ? (0, import_util2.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0, import_util2.calculateBackoffMillis)(backoffCount, retryData.intervalMillis);
            throttleMetadata = {
              throttleEndTimeMillis: Date.now() + backoffMillis,
              backoffCount: backoffCount + 1
            };
            retryData.setThrottleMetadata(appId, throttleMetadata);
            logger.debug("Calling attemptFetch again in " + backoffMillis + " millis");
            return [2, attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];
          case 7:
            return [2];
        }
      });
    });
  }
  function setAbortableTimeout(signal, throttleEndTimeMillis) {
    return new Promise(function(resolve, reject) {
      var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
      var timeout = setTimeout(resolve, backoffMillis);
      signal.addEventListener(function() {
        clearTimeout(timeout);
        reject(ERROR_FACTORY2.create("fetch-throttle", {
          throttleEndTimeMillis
        }));
      });
    });
  }
  function isRetriableError(e) {
    if (!(e instanceof import_util2.FirebaseError)) {
      return false;
    }
    var httpStatus = Number(e["httpStatus"]);
    return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
  }
  var AnalyticsAbortSignal = function() {
    function AnalyticsAbortSignal2() {
      this.listeners = [];
    }
    AnalyticsAbortSignal2.prototype.addEventListener = function(listener) {
      this.listeners.push(listener);
    };
    AnalyticsAbortSignal2.prototype.abort = function() {
      this.listeners.forEach(function(listener) {
        return listener();
      });
    };
    return AnalyticsAbortSignal2;
  }();
  function validateIndexedDB() {
    return __awaiter(this, void 0, void 0, function() {
      var e_1;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            if (!!(0, import_util2.isIndexedDBAvailable)())
              return [3, 1];
            logger.warn(ERROR_FACTORY2.create("indexeddb-unavailable", {
              errorInfo: "IndexedDB is not available in this environment."
            }).message);
            return [2, false];
          case 1:
            _a3.trys.push([1, 3, , 4]);
            return [4, (0, import_util2.validateIndexedDBOpenable)()];
          case 2:
            _a3.sent();
            return [3, 4];
          case 3:
            e_1 = _a3.sent();
            logger.warn(ERROR_FACTORY2.create("indexeddb-unavailable", {
              errorInfo: e_1
            }).message);
            return [2, false];
          case 4:
            return [2, true];
        }
      });
    });
  }
  function initializeIds(app, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore) {
    return __awaiter(this, void 0, void 0, function() {
      var dynamicConfigPromise, fidPromise, _a3, dynamicConfig, fid, configProperties;
      var _b;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
            dynamicConfigPromise.then(function(config) {
              measurementIdToAppId2[config.measurementId] = config.appId;
              if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
                logger.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" + (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") + " To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.");
              }
            }).catch(function(e) {
              return logger.error(e);
            });
            dynamicConfigPromisesList2.push(dynamicConfigPromise);
            fidPromise = validateIndexedDB().then(function(envIsValid) {
              if (envIsValid) {
                return installations.getId();
              } else {
                return void 0;
              }
            });
            return [4, Promise.all([
              dynamicConfigPromise,
              fidPromise
            ])];
          case 1:
            _a3 = _c.sent(), dynamicConfig = _a3[0], fid = _a3[1];
            gtagCore("js", new Date());
            configProperties = (_b = {}, _b[ORIGIN_KEY] = "firebase", _b.update = true, _b);
            if (fid != null) {
              configProperties[GA_FID_KEY] = fid;
            }
            gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, configProperties);
            return [2, dynamicConfig.measurementId];
        }
      });
    });
  }
  var initializationPromisesMap = {};
  var dynamicConfigPromisesList = [];
  var measurementIdToAppId = {};
  var dataLayerName = "dataLayer";
  var gtagName = "gtag";
  var gtagCoreFunction;
  var wrappedGtagFunction;
  var globalInitDone = false;
  function settings(options) {
    if (globalInitDone) {
      throw ERROR_FACTORY2.create("already-initialized");
    }
    if (options.dataLayerName) {
      dataLayerName = options.dataLayerName;
    }
    if (options.gtagName) {
      gtagName = options.gtagName;
    }
  }
  function warnOnBrowserContextMismatch() {
    var mismatchedEnvMessages = [];
    if ((0, import_util2.isBrowserExtension)()) {
      mismatchedEnvMessages.push("This is a browser extension environment.");
    }
    if (!(0, import_util2.areCookiesEnabled)()) {
      mismatchedEnvMessages.push("Cookies are not available.");
    }
    if (mismatchedEnvMessages.length > 0) {
      var details = mismatchedEnvMessages.map(function(message, index) {
        return "(" + (index + 1) + ") " + message;
      }).join(" ");
      var err = ERROR_FACTORY2.create("invalid-analytics-context", {
        errorInfo: details
      });
      logger.warn(err.message);
    }
  }
  function factory(app, installations) {
    warnOnBrowserContextMismatch();
    var appId = app.options.appId;
    if (!appId) {
      throw ERROR_FACTORY2.create("no-app-id");
    }
    if (!app.options.apiKey) {
      if (app.options.measurementId) {
        logger.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest' + (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) + ' provided in the "measurementId" field in the local Firebase config.');
      } else {
        throw ERROR_FACTORY2.create("no-api-key");
      }
    }
    if (initializationPromisesMap[appId] != null) {
      throw ERROR_FACTORY2.create("already-exists", {
        id: appId
      });
    }
    if (!globalInitDone) {
      if (!findGtagScriptOnPage()) {
        insertScriptTag(dataLayerName);
      }
      getOrCreateDataLayer(dataLayerName);
      var _a3 = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName), wrappedGtag = _a3.wrappedGtag, gtagCore = _a3.gtagCore;
      wrappedGtagFunction = wrappedGtag;
      gtagCoreFunction = gtagCore;
      globalInitDone = true;
    }
    initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction);
    var analyticsInstance = {
      app,
      logEvent: function(eventName, eventParams, options) {
        logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options).catch(function(e) {
          return logger.error(e);
        });
      },
      setCurrentScreen: function(screenName, options) {
        setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options).catch(function(e) {
          return logger.error(e);
        });
      },
      setUserId: function(id, options) {
        setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id, options).catch(function(e) {
          return logger.error(e);
        });
      },
      setUserProperties: function(properties, options) {
        setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options).catch(function(e) {
          return logger.error(e);
        });
      },
      setAnalyticsCollectionEnabled: function(enabled) {
        setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled).catch(function(e) {
          return logger.error(e);
        });
      },
      INTERNAL: {
        delete: function() {
          delete initializationPromisesMap[appId];
          return Promise.resolve();
        }
      }
    };
    return analyticsInstance;
  }
  var name3 = "@firebase/analytics";
  var version2 = "0.6.0";
  var ANALYTICS_TYPE = "analytics";
  function registerAnalytics(instance) {
    instance.INTERNAL.registerComponent(new import_component2.Component(ANALYTICS_TYPE, function(container) {
      var app = container.getProvider("app").getImmediate();
      var installations = container.getProvider("installations").getImmediate();
      return factory(app, installations);
    }, "PUBLIC").setServiceProps({
      settings,
      EventName,
      isSupported
    }));
    instance.INTERNAL.registerComponent(new import_component2.Component("analytics-internal", internalFactory, "PRIVATE"));
    instance.registerVersion(name3, version2);
    function internalFactory(container) {
      try {
        var analytics2 = container.getProvider(ANALYTICS_TYPE).getImmediate();
        return {
          logEvent: analytics2.logEvent
        };
      } catch (e) {
        throw ERROR_FACTORY2.create("interop-component-reg-failed", {
          reason: e
        });
      }
    }
  }
  registerAnalytics(import_app2.default);
  function isSupported() {
    return __awaiter(this, void 0, void 0, function() {
      var isDBOpenable, error_1;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            if ((0, import_util2.isBrowserExtension)()) {
              return [2, false];
            }
            if (!(0, import_util2.areCookiesEnabled)()) {
              return [2, false];
            }
            if (!(0, import_util2.isIndexedDBAvailable)()) {
              return [2, false];
            }
            _a3.label = 1;
          case 1:
            _a3.trys.push([1, 3, , 4]);
            return [4, (0, import_util2.validateIndexedDBOpenable)()];
          case 2:
            isDBOpenable = _a3.sent();
            return [2, isDBOpenable];
          case 3:
            error_1 = _a3.sent();
            return [2, false];
          case 4:
            return [2];
        }
      });
    });
  }

  // app.js
  console.log("xx", firebase3.analytics);
})();
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */