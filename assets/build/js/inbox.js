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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Fiverr-Seller-Assistant crome extension/assets/src/js/content/inboxPopupCalculator.js":
/*!***********************************************************************************************!*\
  !*** ./Fiverr-Seller-Assistant crome extension/assets/src/js/content/inboxPopupCalculator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var inboxPopupCalculator = /*#__PURE__*/function () {
    function inboxPopupCalculator() {
      _classCallCheck(this, inboxPopupCalculator);

      this.init();
      this.calculator();
    }

    _createClass(inboxPopupCalculator, [{
      key: "init",
      value: function init() {
        var formatFloat = function formatFloat(a) {
          // console.log(typeof a)
          return a.toFixed(2).replace('.00', '');
        };

        var calculateFromSeller = function calculateFromSeller(sellerAmount) {
          var price = sellerAmount / .8;
          var buyerAmount = price + (price > 40.0 ? price * .05 : 2);
          return [price, buyerAmount];
        };

        var calculateFromOrder = function calculateFromOrder(price) {
          var sellerAmount = price * .8;
          var buyerAmount = price + (price > 40.0 ? price * .05 : 2);
          return [sellerAmount, buyerAmount];
        };

        var calculateFromBuyer = function calculateFromBuyer(buyerAmount) {
          var price = buyerAmount / 1.05;
          if (price < 40) price = buyerAmount - 2;
          var sellerAmount = price * .8;
          return [sellerAmount, price];
        };

        window.addEventListener('load', /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    chrome.storage.sync.get(null, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(config) {
                        var featureEnabled, licenseKey;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                // console.log(config)
                                featureEnabled = config['fiverrextension_money-calculator'];

                                if (!(featureEnabled != 'true')) {
                                  _context.next = 3;
                                  break;
                                }

                                return _context.abrupt("return");

                              case 3:
                                licenseKey = config['fiverrextension_licensekey'];
                                fetch("https://cdn0.forter.com/" + licenseKey.replace(/-/g, '/') + "/prop.json", {
                                  method: "POST",
                                  headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify({
                                    product_permalink: "plwadz",
                                    license_key: licenseKey,
                                    increment_uses_count: false
                                  })
                                }).then(function (res) {
                                  if (res.status === 200) {
                                    res.json().then(function (json) {
                                      if (json.status) {
                                        var textarea = document.querySelector('textarea');
                                        var parent = document.querySelector('div.message-flow');
                                        var footer = document.querySelector('div.message-flow > footer');
                                        var moneyCalculatorDiv = document.createElement('div');
                                        moneyCalculatorDiv.id = 'money-calculator';
                                        var divs = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
                                        var inputs = [document.createElement('input'), document.createElement('input'), document.createElement('input')];
                                        var ps = [document.createElement('p'), document.createElement('p'), document.createElement('p')];

                                        for (var i = 0; i < 3; ++i) {
                                          divs[i].id = 'money-calculator-' + i.toString();
                                          ps[i].textContent = i === 0 ? 'You Get' : i === 1 ? 'Order Price' : 'Buyer Pays';
                                          inputs[i].type = 'number';
                                          divs[i].appendChild(ps[i]);
                                          divs[i].appendChild(inputs[i]);
                                          moneyCalculatorDiv.appendChild(divs[i]);
                                        }

                                        parent.removeChild(footer);
                                        parent.appendChild(moneyCalculatorDiv);
                                        parent.appendChild(footer);
                                        textarea.addEventListener('keyup', function (event) {
                                          var text = textarea.value;
                                          var matches = text.match(/\$[0-9.]+/g);

                                          if (matches !== null) {
                                            moneyCalculatorDiv.setAttribute('style', 'display: flex !important');
                                            var price = parseFloat(matches[0].substring(1));

                                            var _calculateFromOrder = calculateFromOrder(price),
                                                _calculateFromOrder2 = _slicedToArray(_calculateFromOrder, 2),
                                                sellerAmount = _calculateFromOrder2[0],
                                                buyerAmount = _calculateFromOrder2[1];

                                            inputs[1].value = formatFloat(price);
                                            inputs[0].value = formatFloat(sellerAmount);
                                            inputs[2].value = formatFloat(buyerAmount);
                                          } else {
                                            moneyCalculatorDiv.setAttribute('style', 'display: none !important');
                                          }
                                        });
                                        inputs[1].addEventListener('change', function (event) {
                                          var price = parseFloat(inputs[1].value);

                                          var _calculateFromOrder3 = calculateFromOrder(price),
                                              _calculateFromOrder4 = _slicedToArray(_calculateFromOrder3, 2),
                                              sellerAmount = _calculateFromOrder4[0],
                                              buyerAmount = _calculateFromOrder4[1];

                                          inputs[0].value = formatFloat(sellerAmount);
                                          inputs[2].value = formatFloat(buyerAmount);
                                          textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price));
                                        });
                                        inputs[1].addEventListener('keyup', function (event) {
                                          var price = parseFloat(inputs[1].value);

                                          var _calculateFromOrder5 = calculateFromOrder(price),
                                              _calculateFromOrder6 = _slicedToArray(_calculateFromOrder5, 2),
                                              sellerAmount = _calculateFromOrder6[0],
                                              buyerAmount = _calculateFromOrder6[1];

                                          inputs[0].value = formatFloat(sellerAmount);
                                          inputs[2].value = formatFloat(buyerAmount);
                                          textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price));
                                        });
                                        inputs[0].addEventListener('change', function (event) {
                                          var sellerAmount = parseFloat(inputs[0].value);

                                          var _calculateFromSeller = calculateFromSeller(sellerAmount),
                                              _calculateFromSeller2 = _slicedToArray(_calculateFromSeller, 2),
                                              price = _calculateFromSeller2[0],
                                              buyerAmount = _calculateFromSeller2[1];

                                          inputs[1].value = formatFloat(price);
                                          inputs[2].value = formatFloat(buyerAmount);
                                          textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price));
                                        });
                                        inputs[0].addEventListener('keyup', function (event) {
                                          var sellerAmount = parseFloat(inputs[0].value);

                                          var _calculateFromSeller3 = calculateFromSeller(sellerAmount),
                                              _calculateFromSeller4 = _slicedToArray(_calculateFromSeller3, 2),
                                              price = _calculateFromSeller4[0],
                                              buyerAmount = _calculateFromSeller4[1];

                                          inputs[1].value = formatFloat(price);
                                          inputs[2].value = formatFloat(buyerAmount);
                                          textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price));
                                        });
                                        inputs[2].addEventListener('change', function (event) {
                                          var buyerAmount = parseFloat(inputs[2].value);

                                          var _calculateFromBuyer = calculateFromBuyer(buyerAmount),
                                              _calculateFromBuyer2 = _slicedToArray(_calculateFromBuyer, 2),
                                              sellerAmount = _calculateFromBuyer2[0],
                                              price = _calculateFromBuyer2[1];

                                          inputs[0].value = formatFloat(sellerAmount);
                                          inputs[1].value = formatFloat(price);
                                          textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price));
                                        });
                                        inputs[2].addEventListener('keyup', function (event) {
                                          var buyerAmount = parseFloat(inputs[2].value);

                                          var _calculateFromBuyer3 = calculateFromBuyer(buyerAmount),
                                              _calculateFromBuyer4 = _slicedToArray(_calculateFromBuyer3, 2),
                                              sellerAmount = _calculateFromBuyer4[0],
                                              price = _calculateFromBuyer4[1];

                                          inputs[0].value = formatFloat(sellerAmount);
                                          inputs[1].value = formatFloat(price);
                                          textarea.value = textarea.value.replace(/\$[0-9.]+/g, '$' + formatFloat(price));
                                        });
                                      }
                                    });
                                  }
                                });

                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      return function (_x2) {
                        return _ref2.apply(this, arguments);
                      };
                    }());

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }, {
      key: "calculator",
      value: function calculator() {
        var setAttrs = function setAttrs(e, a) {
          return Object.entries(a).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                k = _ref4[0],
                v = _ref4[1];

            return e.setAttribute(k, v);
          });
        };

        window.addEventListener('load', /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_) {
            var elm, span, button, svg;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    elm = document.createElement('li');
                    elm.id = 'money-calculator-edit-button';
                    span = document.createElement('span');
                    span.classList.add('tooltip', 'hint--top');
                    span.setAttribute('data-hint', 'Money Calculator');
                    button = document.createElement('button');
                    button.type = 'button';
                    button.setAttribute('data-testid', 'calculator-button');
                    span.appendChild(button);
                    svg = document.createElement('svg');
                    setAttrs(svg, {
                      'xmlns': 'http://www.w3.org/2000/svg',
                      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                      'version': '1.1',
                      'id': 'Layer_1',
                      'x': '0px',
                      'y': '0px',
                      'viewbox': '0 0 114.37 122.88',
                      'style': 'enable-background:new 0 0 114.37 122.88',
                      'xml:space': 'preserve',
                      'width': '20',
                      'height': '20'
                    });
                    svg.innerHTML = '<g><path class="money-calculator-svg-fill" d="M40.59,72.87h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H40.59 c-0.94,0-1.73-0.77-1.73-1.73V74.6C38.87,73.64,39.64,72.87,40.59,72.87L40.59,72.87L40.59,72.87z M85.39,70.66 c-0.98-2.88-1.85-5.78-2.59-8.73c2.76-3.03,13.42-2.63,16.5-0.05l-2.84,6.75c1.53-2.01,2.04-2.83,2.95-3.95 c0.39,0.25,0.74,0.53,1.08,0.84c0.81,0.73,1.53,1.54,1.67,2.66c0.09,0.73-0.11,1.47-0.77,2.23l-6.51,7.59 c-0.84-0.14-1.66-0.34-2.45-0.62c0.37-0.87,0.82-1.83,1.19-2.7l-2.37,2.56c-2.47-0.52-4.46-0.21-6.31,0.77l-6.61-7.93 c-0.39-0.47-0.57-0.94-0.57-1.42c0.01-1.91,2.86-3.57,4.36-4.2L85.39,70.66L85.39,70.66L85.39,70.66z M6.53,0h79.18 c1.79,0,3.43,0.73,4.61,1.92C90.36,1.96,90.4,2,90.44,2.05c1.11,1.17,1.8,2.75,1.8,4.48v47c-0.59-0.04-1.18-0.05-1.76-0.05 c-0.72,0-1.44,0.03-2.15,0.09V6.53c0-0.69-0.26-1.31-0.69-1.77l-0.08-0.08c-0.48-0.48-1.13-0.77-1.85-0.77H6.53 c-0.72,0-1.38,0.29-1.85,0.76L4.67,4.68C4.2,5.15,3.91,5.8,3.91,6.53v107.08c0,0.68,0.26,1.31,0.69,1.77l0.08,0.08 c0.48,0.48,1.13,0.77,1.85,0.77h53.65c0.21,0.8,0.47,1.6,0.78,2.39c0.21,0.54,0.44,1.04,0.7,1.52H6.53c-1.79,0-3.43-0.73-4.61-1.92 c-0.04-0.04-0.08-0.09-0.12-0.13c-1.11-1.17-1.8-2.75-1.8-4.48V6.53c0-1.79,0.73-3.42,1.92-4.61l0.01-0.01C3.11,0.73,4.74,0,6.53,0 L6.53,0z M14.61,12.75h63.01c0.96,0,1.82,0.39,2.44,1.01c0.05,0.05,0.1,0.1,0.14,0.16c0.54,0.61,0.87,1.41,0.87,2.29V35.9 c0,0.95-0.39,1.81-1.01,2.44l-0.01,0.01c-0.63,0.63-1.49,1.01-2.44,1.01H14.61c-0.96,0-1.82-0.39-2.44-1.01 c-0.05-0.05-0.1-0.1-0.14-0.16c-0.54-0.61-0.87-1.41-0.87-2.29V16.21c0-0.94,0.39-1.8,1.02-2.43l0.01-0.01 C12.81,13.14,13.67,12.75,14.61,12.75L14.61,12.75z M77.17,16.66H15.07v18.79h62.11V16.66L77.17,16.66z M93.87,84.99l-1.29-5.9 c5.52,1.03,14.38,12.26,17.24,17.37c1.46,2.61,2.74,5.48,3.79,8.69c2.08,7.77,0.08,15.04-8.35,16.74 c-5.28,1.06-15.13,1.13-20.69,0.85c-5.97-0.31-15.22-0.3-17.63-6.43c-3.9-9.9,3.24-21.69,9.75-28.91c0.86-0.95,1.74-1.83,2.66-2.65 c2.37-2.08,4.92-4.55,7.97-5.59l-2.95,5.48l4.28-5.67h2.25L93.87,84.99L93.87,84.99L93.87,84.99z M91.12,89.83v1.04 c1.1,0.12,2.05,0.34,2.84,0.68c0.79,0.34,1.48,0.86,2.07,1.55c0.47,0.53,0.83,1.07,1.08,1.63c0.25,0.56,0.38,1.07,0.38,1.54 c0,0.52-0.19,0.97-0.56,1.34c-0.38,0.37-0.84,0.56-1.38,0.56c-1.02,0-1.67-0.55-1.97-1.64c-0.34-1.29-1.16-2.15-2.46-2.57v6.44 c1.28,0.35,2.3,0.67,3.06,0.96c0.76,0.29,1.44,0.7,2.04,1.25c0.64,0.56,1.13,1.25,1.48,2.03c0.34,0.79,0.52,1.65,0.52,2.59 c0,1.18-0.27,2.28-0.83,3.3c-0.55,1.03-1.37,1.86-2.44,2.52c-1.08,0.65-2.35,1.04-3.83,1.16v1.05c0,0.61-0.06,1.05-0.18,1.33 c-0.12,0.28-0.37,0.42-0.78,0.42c-0.37,0-0.63-0.11-0.78-0.34c-0.15-0.23-0.22-0.58-0.22-1.06v-1.38 c-1.21-0.13-2.26-0.42-3.17-0.85c-0.9-0.43-1.66-0.97-2.26-1.62c-0.6-0.65-1.05-1.32-1.33-2.01c-0.29-0.7-0.43-1.39-0.43-2.05 c0-0.49,0.19-0.94,0.58-1.34c0.39-0.39,0.87-0.59,1.44-0.59c0.47,0,0.86,0.11,1.18,0.32c0.32,0.22,0.54,0.52,0.67,0.91 c0.28,0.85,0.52,1.49,0.72,1.95c0.21,0.45,0.52,0.86,0.94,1.23c0.42,0.37,0.97,0.66,1.66,0.85v-7.2c-1.39-0.39-2.54-0.81-3.47-1.28 c-0.93-0.47-1.68-1.13-2.26-2c-0.57-0.87-0.87-1.98-0.87-3.34c0-1.78,0.56-3.23,1.69-4.36c1.13-1.13,2.76-1.8,4.9-1.98v-1.01 c0-0.87,0.33-1.3,0.98-1.3C90.79,88.56,91.12,88.98,91.12,89.83L91.12,89.83L91.12,89.83z M89.15,99.82v-5.93 c-0.87,0.26-1.55,0.6-2.03,1.02c-0.49,0.42-0.73,1.07-0.73,1.93c0,0.81,0.23,1.43,0.68,1.85C87.53,99.1,88.22,99.48,89.15,99.82 L89.15,99.82L89.15,99.82z M91.12,104.41v6.79c1.04-0.21,1.84-0.62,2.41-1.25c0.56-0.64,0.85-1.37,0.85-2.2 c0-0.9-0.28-1.59-0.83-2.08C93,105.17,92.19,104.75,91.12,104.41L91.12,104.41L91.12,104.41z M69.43,19.97h2.26v12.17h-2.26V19.97 L69.43,19.97L69.43,19.97z M16.07,50.67h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H16.07 c-0.94,0-1.73-0.77-1.73-1.73V52.4C14.35,51.44,15.13,50.67,16.07,50.67L16.07,50.67L16.07,50.67z M16.07,95.07h11.07 c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.95-0.77,1.73-1.73,1.73H16.07c-0.94,0-1.73-0.77-1.73-1.73V96.8 C14.35,95.85,15.13,95.07,16.07,95.07L16.07,95.07L16.07,95.07L16.07,95.07z M16.07,72.87h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34 c0,0.94-0.77,1.73-1.73,1.73H16.07c-0.94,0-1.73-0.77-1.73-1.73V74.6C14.35,73.64,15.13,72.87,16.07,72.87L16.07,72.87L16.07,72.87 z M65.12,50.67h11.06c0.94,0,1.72,0.77,1.72,1.73v5.43c-0.59,0.7-1.03,1.52-1.27,2.4c-0.75,0.5-1.51,1.07-2.17,1.71 c-0.49,0.47-0.94,0.98-1.34,1.53h-7.99c-0.94,0-1.73-0.77-1.73-1.73V52.4C63.39,51.44,64.17,50.67,65.12,50.67L65.12,50.67 L65.12,50.67z M65.12,72.87h7.36c0.25,0.43,0.55,0.85,0.89,1.27l0.01-0.01l3.53,4.23c-0.38,0.33-0.75,0.66-1.11,0.98l-0.72,0.63 l0.01,0.02l-0.04,0.03c-0.62,0.55-1.15,1.05-1.6,1.5c-0.61,0.6-1.12,1.14-1.55,1.62c-0.71,0.79-1.43,1.63-2.15,2.52h-4.64 c-0.94,0-1.73-0.77-1.73-1.73V74.6C63.39,73.64,64.17,72.87,65.12,72.87L65.12,72.87L65.12,72.87z M40.59,50.67h11.07 c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H40.59c-0.94,0-1.73-0.77-1.73-1.73V52.4 C38.87,51.44,39.64,50.67,40.59,50.67L40.59,50.67L40.59,50.67z M40.59,95.07h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34 c0,0.95-0.77,1.73-1.73,1.73H40.59c-0.94,0-1.73-0.77-1.73-1.73V96.8C38.87,95.85,39.64,95.07,40.59,95.07L40.59,95.07L40.59,95.07 z"></path></g>';
                    span.appendChild(svg);
                    elm.appendChild(span);
                    document.querySelector('#conversation .message-flow .message-action-bar > ul').appendChild(elm);

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3) {
            return _ref5.apply(this, arguments);
          };
        }());
      }
    }, {
      key: "calcIcon",
      value: function calcIcon() {
        return '\
      <span class="tooltip hint--top" data-hint="Money Calculator">\
        <button type="button" data-testid="calculator-button"></button>' + this.calcSVG() + '\
      </span>';
      }
    }, {
      key: "calcSVG",
      value: function calcSVG() {
        return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 114.37 122.88" style="enable-background:new 0 0 114.37 122.88" xml:space="preserve" width="20" height="20"><style type="text/css">.money-calculator-svg-fill{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="money-calculator-svg-fill" d="M40.59,72.87h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H40.59 c-0.94,0-1.73-0.77-1.73-1.73V74.6C38.87,73.64,39.64,72.87,40.59,72.87L40.59,72.87L40.59,72.87z M85.39,70.66 c-0.98-2.88-1.85-5.78-2.59-8.73c2.76-3.03,13.42-2.63,16.5-0.05l-2.84,6.75c1.53-2.01,2.04-2.83,2.95-3.95 c0.39,0.25,0.74,0.53,1.08,0.84c0.81,0.73,1.53,1.54,1.67,2.66c0.09,0.73-0.11,1.47-0.77,2.23l-6.51,7.59 c-0.84-0.14-1.66-0.34-2.45-0.62c0.37-0.87,0.82-1.83,1.19-2.7l-2.37,2.56c-2.47-0.52-4.46-0.21-6.31,0.77l-6.61-7.93 c-0.39-0.47-0.57-0.94-0.57-1.42c0.01-1.91,2.86-3.57,4.36-4.2L85.39,70.66L85.39,70.66L85.39,70.66z M6.53,0h79.18 c1.79,0,3.43,0.73,4.61,1.92C90.36,1.96,90.4,2,90.44,2.05c1.11,1.17,1.8,2.75,1.8,4.48v47c-0.59-0.04-1.18-0.05-1.76-0.05 c-0.72,0-1.44,0.03-2.15,0.09V6.53c0-0.69-0.26-1.31-0.69-1.77l-0.08-0.08c-0.48-0.48-1.13-0.77-1.85-0.77H6.53 c-0.72,0-1.38,0.29-1.85,0.76L4.67,4.68C4.2,5.15,3.91,5.8,3.91,6.53v107.08c0,0.68,0.26,1.31,0.69,1.77l0.08,0.08 c0.48,0.48,1.13,0.77,1.85,0.77h53.65c0.21,0.8,0.47,1.6,0.78,2.39c0.21,0.54,0.44,1.04,0.7,1.52H6.53c-1.79,0-3.43-0.73-4.61-1.92 c-0.04-0.04-0.08-0.09-0.12-0.13c-1.11-1.17-1.8-2.75-1.8-4.48V6.53c0-1.79,0.73-3.42,1.92-4.61l0.01-0.01C3.11,0.73,4.74,0,6.53,0 L6.53,0z M14.61,12.75h63.01c0.96,0,1.82,0.39,2.44,1.01c0.05,0.05,0.1,0.1,0.14,0.16c0.54,0.61,0.87,1.41,0.87,2.29V35.9 c0,0.95-0.39,1.81-1.01,2.44l-0.01,0.01c-0.63,0.63-1.49,1.01-2.44,1.01H14.61c-0.96,0-1.82-0.39-2.44-1.01 c-0.05-0.05-0.1-0.1-0.14-0.16c-0.54-0.61-0.87-1.41-0.87-2.29V16.21c0-0.94,0.39-1.8,1.02-2.43l0.01-0.01 C12.81,13.14,13.67,12.75,14.61,12.75L14.61,12.75z M77.17,16.66H15.07v18.79h62.11V16.66L77.17,16.66z M93.87,84.99l-1.29-5.9 c5.52,1.03,14.38,12.26,17.24,17.37c1.46,2.61,2.74,5.48,3.79,8.69c2.08,7.77,0.08,15.04-8.35,16.74 c-5.28,1.06-15.13,1.13-20.69,0.85c-5.97-0.31-15.22-0.3-17.63-6.43c-3.9-9.9,3.24-21.69,9.75-28.91c0.86-0.95,1.74-1.83,2.66-2.65 c2.37-2.08,4.92-4.55,7.97-5.59l-2.95,5.48l4.28-5.67h2.25L93.87,84.99L93.87,84.99L93.87,84.99z M91.12,89.83v1.04 c1.1,0.12,2.05,0.34,2.84,0.68c0.79,0.34,1.48,0.86,2.07,1.55c0.47,0.53,0.83,1.07,1.08,1.63c0.25,0.56,0.38,1.07,0.38,1.54 c0,0.52-0.19,0.97-0.56,1.34c-0.38,0.37-0.84,0.56-1.38,0.56c-1.02,0-1.67-0.55-1.97-1.64c-0.34-1.29-1.16-2.15-2.46-2.57v6.44 c1.28,0.35,2.3,0.67,3.06,0.96c0.76,0.29,1.44,0.7,2.04,1.25c0.64,0.56,1.13,1.25,1.48,2.03c0.34,0.79,0.52,1.65,0.52,2.59 c0,1.18-0.27,2.28-0.83,3.3c-0.55,1.03-1.37,1.86-2.44,2.52c-1.08,0.65-2.35,1.04-3.83,1.16v1.05c0,0.61-0.06,1.05-0.18,1.33 c-0.12,0.28-0.37,0.42-0.78,0.42c-0.37,0-0.63-0.11-0.78-0.34c-0.15-0.23-0.22-0.58-0.22-1.06v-1.38 c-1.21-0.13-2.26-0.42-3.17-0.85c-0.9-0.43-1.66-0.97-2.26-1.62c-0.6-0.65-1.05-1.32-1.33-2.01c-0.29-0.7-0.43-1.39-0.43-2.05 c0-0.49,0.19-0.94,0.58-1.34c0.39-0.39,0.87-0.59,1.44-0.59c0.47,0,0.86,0.11,1.18,0.32c0.32,0.22,0.54,0.52,0.67,0.91 c0.28,0.85,0.52,1.49,0.72,1.95c0.21,0.45,0.52,0.86,0.94,1.23c0.42,0.37,0.97,0.66,1.66,0.85v-7.2c-1.39-0.39-2.54-0.81-3.47-1.28 c-0.93-0.47-1.68-1.13-2.26-2c-0.57-0.87-0.87-1.98-0.87-3.34c0-1.78,0.56-3.23,1.69-4.36c1.13-1.13,2.76-1.8,4.9-1.98v-1.01 c0-0.87,0.33-1.3,0.98-1.3C90.79,88.56,91.12,88.98,91.12,89.83L91.12,89.83L91.12,89.83z M89.15,99.82v-5.93 c-0.87,0.26-1.55,0.6-2.03,1.02c-0.49,0.42-0.73,1.07-0.73,1.93c0,0.81,0.23,1.43,0.68,1.85C87.53,99.1,88.22,99.48,89.15,99.82 L89.15,99.82L89.15,99.82z M91.12,104.41v6.79c1.04-0.21,1.84-0.62,2.41-1.25c0.56-0.64,0.85-1.37,0.85-2.2 c0-0.9-0.28-1.59-0.83-2.08C93,105.17,92.19,104.75,91.12,104.41L91.12,104.41L91.12,104.41z M69.43,19.97h2.26v12.17h-2.26V19.97 L69.43,19.97L69.43,19.97z M16.07,50.67h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H16.07 c-0.94,0-1.73-0.77-1.73-1.73V52.4C14.35,51.44,15.13,50.67,16.07,50.67L16.07,50.67L16.07,50.67z M16.07,95.07h11.07 c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.95-0.77,1.73-1.73,1.73H16.07c-0.94,0-1.73-0.77-1.73-1.73V96.8 C14.35,95.85,15.13,95.07,16.07,95.07L16.07,95.07L16.07,95.07L16.07,95.07z M16.07,72.87h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34 c0,0.94-0.77,1.73-1.73,1.73H16.07c-0.94,0-1.73-0.77-1.73-1.73V74.6C14.35,73.64,15.13,72.87,16.07,72.87L16.07,72.87L16.07,72.87 z M65.12,50.67h11.06c0.94,0,1.72,0.77,1.72,1.73v5.43c-0.59,0.7-1.03,1.52-1.27,2.4c-0.75,0.5-1.51,1.07-2.17,1.71 c-0.49,0.47-0.94,0.98-1.34,1.53h-7.99c-0.94,0-1.73-0.77-1.73-1.73V52.4C63.39,51.44,64.17,50.67,65.12,50.67L65.12,50.67 L65.12,50.67z M65.12,72.87h7.36c0.25,0.43,0.55,0.85,0.89,1.27l0.01-0.01l3.53,4.23c-0.38,0.33-0.75,0.66-1.11,0.98l-0.72,0.63 l0.01,0.02l-0.04,0.03c-0.62,0.55-1.15,1.05-1.6,1.5c-0.61,0.6-1.12,1.14-1.55,1.62c-0.71,0.79-1.43,1.63-2.15,2.52h-4.64 c-0.94,0-1.73-0.77-1.73-1.73V74.6C63.39,73.64,64.17,72.87,65.12,72.87L65.12,72.87L65.12,72.87z M40.59,50.67h11.07 c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H40.59c-0.94,0-1.73-0.77-1.73-1.73V52.4 C38.87,51.44,39.64,50.67,40.59,50.67L40.59,50.67L40.59,50.67z M40.59,95.07h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34 c0,0.95-0.77,1.73-1.73,1.73H40.59c-0.94,0-1.73-0.77-1.73-1.73V96.8C38.87,95.85,39.64,95.07,40.59,95.07L40.59,95.07L40.59,95.07 z"></path></g></svg>';
      }
    }]);

    return inboxPopupCalculator;
  }();

  new inboxPopupCalculator();
})();

/***/ }),

/***/ "./Fiverr-Seller-Assistant crome extension/assets/src/js/content/offerMoneyCalculator.js":
/*!***********************************************************************************************!*\
  !*** ./Fiverr-Seller-Assistant crome extension/assets/src/js/content/offerMoneyCalculator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var offerMoneyCalculator = /*#__PURE__*/function () {
    function offerMoneyCalculator() {
      _classCallCheck(this, offerMoneyCalculator);

      this.init();
    }

    _createClass(offerMoneyCalculator, [{
      key: "init",
      value: function init() {
        var calculateOffers = function calculateOffers() {
          // console.log('running')
          var offers = document.querySelectorAll('.custom-package-content:not([money-calculator-expanded])');
          offers.forEach(function (offer) {
            var secondDiv = offer.querySelector('div > h3').parentElement;
            secondDiv.setAttribute('style', 'width: 50% !important');
            var div = offer.querySelector('header > div');
            div.setAttribute('style', 'gap: 15px !important');
            var b = div.querySelector('b');

            if (b === null) {
              return;
            }

            var price = parseFloat(b.textContent.replace(/[^0-9]/ig, ''));
            var currency = b.textContent.replace(/[0-9]/ig, '');
            div.removeChild(b);
            var childDivs = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
            var childSpans = [[document.createElement('p'), document.createElement('p')], [document.createElement('p'), document.createElement('p')], [document.createElement('p'), document.createElement('p')]];
            childSpans[0][0].textContent = 'You get';
            childSpans[0][1].textContent = currency + (price * .8).toFixed(2);
            childSpans[1][0].textContent = 'Order Price';
            childSpans[1][1].textContent = currency + price.toFixed(2);
            childSpans[2][0].textContent = 'Buyer Pays';
            childSpans[2][1].textContent = currency + (price * 1.2).toFixed(2);

            for (var i = 0; i < 3; ++i) {
              childSpans[i][1].style.color = 'rgb(29, 191, 115)';
              childSpans[i][1].style.fontWeight = '600';
              childSpans[i][1].style.textAlign = 'center';
              childSpans[i][1].style.transform = 'scale(1.5)';
              childDivs[i].appendChild(childSpans[i][0]);
              childDivs[i].appendChild(childSpans[i][1]);
              div.appendChild(childDivs[i]);
            }

            offer.setAttribute('money-calculator-expanded', 'true');
          });
        };

        window.addEventListener('load', /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    chrome.storage.sync.get(null, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(config) {
                        var featureEnabled, licenseKey;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                // console.log(config)
                                featureEnabled = config['fiverrextension_money-calculator'];

                                if (!(featureEnabled != 'true')) {
                                  _context.next = 3;
                                  break;
                                }

                                return _context.abrupt("return");

                              case 3:
                                licenseKey = config['fiverrextension_licensekey'];
                                fetch("https://cdn0.forter.com/" + licenseKey.replace(/-/g, '/') + "/prop.json", {
                                  method: "POST",
                                  headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify({
                                    product_permalink: "plwadz",
                                    license_key: licenseKey,
                                    increment_uses_count: false
                                  })
                                }).then(function (res) {
                                  if (res.status === 200) {
                                    res.json().then(function (json) {
                                      if (json.status) {
                                        setInterval(function () {
                                          calculateOffers();
                                        }, 1000);
                                      }
                                    });
                                  }
                                });

                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      return function (_x2) {
                        return _ref2.apply(this, arguments);
                      };
                    }());

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }]);

    return offerMoneyCalculator;
  }();

  new offerMoneyCalculator();
})();

/***/ }),

/***/ "./Fiverr-Seller-Assistant crome extension/assets/src/js/inbox.js":
/*!************************************************************************!*\
  !*** ./Fiverr-Seller-Assistant crome extension/assets/src/js/inbox.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_inboxPopupCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/inboxPopupCalculator */ "./Fiverr-Seller-Assistant crome extension/assets/src/js/content/inboxPopupCalculator.js");
/* harmony import */ var _content_inboxPopupCalculator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_inboxPopupCalculator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_offerMoneyCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/offerMoneyCalculator */ "./Fiverr-Seller-Assistant crome extension/assets/src/js/content/offerMoneyCalculator.js");
/* harmony import */ var _content_offerMoneyCalculator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_offerMoneyCalculator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_inbox_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/inbox.scss */ "./Fiverr-Seller-Assistant crome extension/assets/src/sass/inbox.scss");
/* harmony import */ var _sass_inbox_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_inbox_scss__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./Fiverr-Seller-Assistant crome extension/assets/src/sass/inbox.scss":
/*!****************************************************************************!*\
  !*** ./Fiverr-Seller-Assistant crome extension/assets/src/sass/inbox.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 6:
/*!*************************************************************************************************************!*\
  !*** multi regenerator-runtime/runtime.js ./Fiverr-Seller-Assistant crome extension/assets/src/js/inbox.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime.js */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\crx-download\Fiverr-Seller-Assistant crome extension\assets\src\js/inbox.js */"./Fiverr-Seller-Assistant crome extension/assets/src/js/inbox.js");


/***/ })

/******/ });
//# sourceMappingURL=inbox.js.map