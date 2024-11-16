var home =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Globals.ts":
/*!************************!*\
  !*** ./src/Globals.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Globals; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter = PIXI.utils.EventEmitter;

var Globals =
/*#__PURE__*/
function () {
  function Globals() {
    _classCallCheck(this, Globals);
  }

  _createClass(Globals, null, [{
    key: "setDeveloperMode",
    value: function setDeveloperMode(value) {
      Globals._developerMode = value;
      Globals.getEmitter().emit(Globals.CHANGE_DEVELOPER_MODE_EVENT);
    }
  }, {
    key: "getDeveloperMode",
    value: function getDeveloperMode() {
      return Globals._developerMode;
    }
  }, {
    key: "getEmitter",
    value: function getEmitter() {
      if (!Globals._emitter) {
        Globals._emitter = new EventEmitter();
      }

      return Globals._emitter;
    }
  }]);

  return Globals;
}();


Globals.CHANGE_DEVELOPER_MODE_EVENT = Symbol();
Globals._developerMode = false;

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _MainContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainer */ "./src/MainContainer.ts");
/* harmony import */ var _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/WindowEvents */ "./src/utils/WindowEvents.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rectangle = PIXI.Rectangle;


var Graphics = PIXI.Graphics;

var Main =
/*#__PURE__*/
function () {
  function Main(canvasId) {
    _classCallCheck(this, Main);

    this.initialize(canvasId);
  }

  _createClass(Main, [{
    key: "initialize",
    value: function initialize(canvasId) {
      var _this = this;

      this.createPixiApp(canvasId);
      this._windowSize = new Rectangle();
      this.initMainContainer();
      this.initOutOfBoundsCover();
      _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_2__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_2__["default"].RESIZE, function () {
        _this.windowResizeHandler();
      });
      this.refreshSize();
      this.printWelcomeMessage();
    }
  }, {
    key: "initMainContainer",
    value: function initMainContainer() {
      this._mainContainer = new _MainContainer__WEBPACK_IMPORTED_MODULE_1__["default"]();

      this._mainContainer.setSize(1500, 1000);

      _Globals__WEBPACK_IMPORTED_MODULE_0__["default"].pixiApp.stage.addChild(this._mainContainer);
    }
  }, {
    key: "initOutOfBoundsCover",
    value: function initOutOfBoundsCover() {
      this._outOfBoundsCover = new Graphics();
      _Globals__WEBPACK_IMPORTED_MODULE_0__["default"].pixiApp.stage.addChild(this._outOfBoundsCover);
    }
  }, {
    key: "createPixiApp",
    value: function createPixiApp(canvasId) {
      var appConfig = {
        antialias: true,
        backgroundColor: 0xffffff,
        view: document.getElementById(canvasId),
        // rounding resolution for escape troubles with invisible fonts on some Android devices
        resolution: (devicePixelRatio || 1) < 2 ? 1 : 2
      };
      _Globals__WEBPACK_IMPORTED_MODULE_0__["default"].pixiApp = new PIXI.Application(appConfig);
    }
  }, {
    key: "printWelcomeMessage",
    value: function printWelcomeMessage() {
      var welcomeString = "platformer" + " " + "0.1.0";

      if (true) {
        welcomeString += " (test)";
        welcomeString += "\n>>> " + ( true ? "LOCAL" : undefined) + " <<<";
      }

      welcomeString += "\nDeveloped by «" + "Pavel Narzyaev" + "»";
      console.log(welcomeString);
    }
  }, {
    key: "windowResizeHandler",
    value: function windowResizeHandler() {
      this.refreshSize();
    }
  }, {
    key: "refreshSize",
    value: function refreshSize() {
      this.refreshWindowSize();
      this.alignPixiApp();
      this.alignMainContainer();
      this.alignOutOfBoundsCover();
    }
  }, {
    key: "refreshWindowSize",
    value: function refreshWindowSize() {
      this._windowSize.width = window.innerWidth;
      this._windowSize.height = window.innerHeight;
    }
  }, {
    key: "alignPixiApp",
    value: function alignPixiApp() {
      _Globals__WEBPACK_IMPORTED_MODULE_0__["default"].pixiApp.renderer.view.style.width = this._windowSize.width + "px";
      _Globals__WEBPACK_IMPORTED_MODULE_0__["default"].pixiApp.renderer.view.style.height = this._windowSize.height + "px";
      _Globals__WEBPACK_IMPORTED_MODULE_0__["default"].pixiApp.renderer.resize(this._windowSize.width, this._windowSize.height);
    }
  }, {
    key: "alignMainContainer",
    value: function alignMainContainer() {
      var scaleByWidth = this._windowSize.width / this._mainContainer.w;
      var scaleByHeight = this._windowSize.height / this._mainContainer.h;
      var scale = Math.min(scaleByWidth, scaleByHeight);
      this._mainContainer.scale.x = this._mainContainer.scale.y = scale;
      this._mainContainer.x = Math.round((this._windowSize.width - this._mainContainer.w * scale) / 2);
      this._mainContainer.y = Math.round((this._windowSize.height - this._mainContainer.h * scale) / 2);
    }
  }, {
    key: "alignOutOfBoundsCover",
    value: function alignOutOfBoundsCover() {
      this._outOfBoundsCover.clear();

      this._outOfBoundsCover.beginFill(0x000000);

      if (this._mainContainer.h * this._mainContainer.scale.y < this._windowSize.height) {
        var coverHeight = this._mainContainer.y;

        this._outOfBoundsCover.drawRect(0, 0, this._windowSize.width, coverHeight);

        this._outOfBoundsCover.drawRect(0, this._windowSize.height - coverHeight, this._windowSize.width, coverHeight);
      } else if (this._mainContainer.w * this._mainContainer.scale.x < this._windowSize.width) {
        var coverWidth = this._mainContainer.x;

        this._outOfBoundsCover.drawRect(0, 0, coverWidth, this._windowSize.height);

        this._outOfBoundsCover.drawRect(this._windowSize.width - coverWidth, 0, coverWidth, this._windowSize.height);
      }
    }
  }]);

  return Main;
}();

/***/ }),

/***/ "./src/MainContainer.ts":
/*!******************************!*\
  !*** ./src/MainContainer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/View.ts");
/* harmony import */ var _level_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level/Player */ "./src/level/Player.ts");
/* harmony import */ var _level_Level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level/Level */ "./src/level/Level.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promises/PixiRequest */ "./src/promises/PixiRequest.ts");
/* harmony import */ var _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promises/PromisesGroup */ "./src/promises/PromisesGroup.ts");
/* harmony import */ var _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/LevelsManager */ "./src/model/LevelsManager.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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









var MainContainer =
/*#__PURE__*/
function (_View) {
  _inherits(MainContainer, _View);

  function MainContainer() {
    _classCallCheck(this, MainContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainContainer).call(this));
  }

  _createClass(MainContainer, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(MainContainer.prototype), "init", this).call(this);

      this.loading();
    }
  }, {
    key: "loading",
    value: function loading() {
      var _this = this;

      _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__["default"].pack([function () {
        return _this.loadLevel("level1.json");
      }, function () {
        return _this.loadLevel("level2.json");
      }, function () {
        return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](_level_Player__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT_SKIN_NAME).createPromise();
      }, function () {
        return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](_level_Player__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT_SKIN_NAME).createPromise();
      }])["finally"](function () {
        _this.completeLoadingHandler();
      });
    }
  }, {
    key: "loadLevel",
    value: function loadLevel(fileName) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var request, levelData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"]("levels/" + fileName);
                _context.next = 3;
                return request.createPromise();

              case 3:
                levelData = request.getResult();
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].addLevel(levelData);
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].addLevelData(levelData.id, levelData.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "completeLoadingHandler",
    value: function completeLoadingHandler() {
      this.initPlayer();
      this.initLevelContainer();
      this.launchTicker();
    }
  }, {
    key: "initPlayer",
    value: function initPlayer() {
      this._player = new _level_Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "initLevelContainer",
    value: function initLevelContainer() {
      var levelId = Math.ceil(Math.random() * 2);
      var levelInfo = _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].getLevel(levelId);

      if (levelInfo && levelInfo.data) {
        this._level = new _level_Level__WEBPACK_IMPORTED_MODULE_2__["default"](this._player, levelId);

        this._level.setSize(levelInfo.data.stage.width, levelInfo.data.stage.height);

        this.addChild(this._level);
      }
    }
  }, {
    key: "launchTicker",
    value: function launchTicker() {
      var _this2 = this;

      _Globals__WEBPACK_IMPORTED_MODULE_3__["default"].pixiApp.ticker.add(function () {
        if (_this2._level) {
          _this2._level.x = _this2.calculateLevelPosition(_this2.w, _this2._level.w, _this2._player.width, _this2._player.x);
          _this2._level.y = _this2.calculateLevelPosition(_this2.h, _this2._level.h, _this2._player.height, _this2._player.y);
        }
      });
    }
  }, {
    key: "calculateLevelPosition",
    value: function calculateLevelPosition(thisSize, levelSize, playerSize, playerPosition) {
      var minLevelPosition = thisSize - levelSize;
      var maxLevelPosition = 0;
      var calculatedLevelPosition = (thisSize - playerSize) / 2 - playerPosition;
      return Math.round(Math.min(maxLevelPosition, Math.max(minLevelPosition, calculatedLevelPosition)));
    }
  }]);

  return MainContainer;
}(_View__WEBPACK_IMPORTED_MODULE_0__["View"]);



/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return ViewWithResizeTest; });
/* harmony import */ var _utils_Random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Random */ "./src/utils/Random.ts");
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = PIXI.Container;
var Graphics = PIXI.Graphics;


var View =
/*#__PURE__*/
function (_Container) {
  _inherits(View, _Container);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).call(this));
  }

  return View;
}(Container);

var ResizableView =
/*#__PURE__*/
function (_View) {
  _inherits(ResizableView, _View);

  function ResizableView() {
    var _this;

    _classCallCheck(this, ResizableView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResizableView).call(this));
    _this._inited = false;
    return _this;
  }

  _createClass(ResizableView, [{
    key: "setW",
    value: function setW(value) {
      if (this.w !== value) {
        this.w = value;
        this.applySize();
      }
    }
  }, {
    key: "setH",
    value: function setH(value) {
      if (this.h !== value) {
        this.h = value;
        this.applySize();
      }
    }
  }, {
    key: "setSize",
    value: function setSize(w, h) {
      if (this.w !== w || this.h !== h) {
        this.w = w;
        this.h = h;
        this.applySize();
      }
    }
  }, {
    key: "applySize",
    value: function applySize() {
      if (!this._inited) {
        this._inited = true;
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {}
  }]);

  return ResizableView;
}(View);

var ViewWithTestBackground =
/*#__PURE__*/
function (_ResizableView) {
  _inherits(ViewWithTestBackground, _ResizableView);

  function ViewWithTestBackground() {
    _classCallCheck(this, ViewWithTestBackground);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewWithTestBackground).call(this));
  }

  _createClass(ViewWithTestBackground, [{
    key: "showTestBackground",
    value: function showTestBackground(color) {
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .5;

      if (!this._testBackground) {
        this._testBackground = new Graphics();
        this.addChildAt(this._testBackground, 0);
        this._testBackgroundColor = color ? color : _utils_Random__WEBPACK_IMPORTED_MODULE_0__["default"].genColor();
        this._testBackgroundAlpha = alpha;

        if (this.w && this.h) {
          this.applySize();
        }
      }
    }
  }, {
    key: "applySize",
    value: function applySize() {
      _get(_getPrototypeOf(ViewWithTestBackground.prototype), "applySize", this).call(this);

      if (this._testBackground) {
        this._testBackground.clear();

        this._testBackground.lineStyle(1, this._testBackgroundColor);

        this._testBackground.beginFill(this._testBackgroundColor, this._testBackgroundAlpha);

        this._testBackground.drawRect(0, 0, this.w, this.h);

        this._testBackground.endFill();
      }
    }
  }]);

  return ViewWithTestBackground;
}(ResizableView);

var ViewWithResizeTest =
/*#__PURE__*/
function (_ViewWithTestBackgrou) {
  _inherits(ViewWithResizeTest, _ViewWithTestBackgrou);

  function ViewWithResizeTest() {
    var _this2;

    _classCallCheck(this, ViewWithResizeTest);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ViewWithResizeTest).call(this));
    _this2.resizeTest = false;
    _this2._sizeWasChanged = false;
    return _this2;
  }

  _createClass(ViewWithResizeTest, [{
    key: "applySize",
    value: function applySize() {
      var _this3 = this;

      _get(_getPrototypeOf(ViewWithResizeTest.prototype), "applySize", this).call(this);

      if (this.resizeTest) {
        if (!this._sizeWasChanged) {
          this._sizeWasChanged = true;
          window.setTimeout(function () {
            _this3._sizeWasChanged = false;
          }, 0);
        } else {
          // * You should to use setSize instead setW and setH if you want to change both parameters
          // * You shouldn't call applySize method manually
          // * You shouldn't call setSize, setW or setH twice
          console.warn("[" + this.constructor.name + "] resize test was failed");
        }
      }
    }
  }]);

  return ViewWithResizeTest;
}(ViewWithTestBackground);



/***/ }),

/***/ "./src/consts/KeyboardCodes.ts":
/*!*************************************!*\
  !*** ./src/consts/KeyboardCodes.ts ***!
  \*************************************/
/*! exports provided: KEY_UP, KEY_LEFT, KEY_RIGHT, KEY_BACKQUOTE, KEY_J */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_UP", function() { return KEY_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEFT", function() { return KEY_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_RIGHT", function() { return KEY_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKQUOTE", function() { return KEY_BACKQUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_J", function() { return KEY_J; });
var KEY_UP = "ArrowUp";
var KEY_LEFT = "ArrowLeft";
var KEY_RIGHT = "ArrowRight";
var KEY_BACKQUOTE = "Backquote";
var KEY_J = "KeyJ";

/***/ }),

/***/ "./src/consts/PointerEvents.ts":
/*!*************************************!*\
  !*** ./src/consts/PointerEvents.ts ***!
  \*************************************/
/*! exports provided: POINTER_DOWN, POINTER_UP, POINTER_MOVE, POINTER_UP_OUTSIDE, POINTER_OVER, POINTER_OUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_DOWN", function() { return POINTER_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_UP", function() { return POINTER_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_MOVE", function() { return POINTER_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_UP_OUTSIDE", function() { return POINTER_UP_OUTSIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_OVER", function() { return POINTER_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTER_OUT", function() { return POINTER_OUT; });
var POINTER_DOWN = "pointerdown";
var POINTER_UP = "pointerup";
var POINTER_MOVE = "pointermove";
var POINTER_UP_OUTSIDE = "pointerupoutside";
var POINTER_OVER = "pointerover";
var POINTER_OUT = "pointerout";

/***/ }),

/***/ "./src/level/Block.ts":
/*!****************************!*\
  !*** ./src/level/Block.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Block; });
/* harmony import */ var _CollisionObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollisionObject */ "./src/level/CollisionObject.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Sprite = PIXI.Sprite;

var Block =
/*#__PURE__*/
function (_CollisionObject) {
  _inherits(Block, _CollisionObject);

  function Block(_blockData, _blockTypeData) {
    var _this;

    _classCallCheck(this, Block);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Block).call(this));
    _this._blockData = _blockData;
    _this._blockTypeData = _blockTypeData;
    _this._hit = null;

    _this.initSprite();

    if (_this._blockTypeData.collision) {
      var collision = _this._blockTypeData.collision;

      _this.setLocalCollisionValues(collision.left, collision.right, collision.top, collision.bottom);
    }

    return _this;
  }

  _createClass(Block, [{
    key: "initSprite",
    value: function initSprite() {
      if (this._blockTypeData.image) {
        this._sprite = Sprite.from(this._blockTypeData.image);
        this.addChild(this._sprite);
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this._blockData;
    }
  }, {
    key: "getTypeData",
    value: function getTypeData() {
      return this._blockTypeData;
    }
  }, {
    key: "showBlockHit",
    value: function showBlockHit(value) {
      if (this._hit !== value) {
        this._hit = value;
        this.showCollisionRectangle(this._hit ? 0xff0000 : 0x0000ff);

        if (this._sprite) {
          this._sprite.alpha = .3;
        }
      }
    }
  }, {
    key: "hideBlockHit",
    value: function hideBlockHit() {
      this.hideCollisionRectangle();
      this._hit = null;

      if (this._sprite) {
        this._sprite.alpha = 1;
      }
    }
  }]);

  return Block;
}(_CollisionObject__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/level/CollisionObject.ts":
/*!**************************************!*\
  !*** ./src/level/CollisionObject.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollisionObject; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = PIXI.Container;
var Graphics = PIXI.Graphics;

var CollisionObject =
/*#__PURE__*/
function (_Container) {
  _inherits(CollisionObject, _Container);

  function CollisionObject() {
    var _this;

    _classCallCheck(this, CollisionObject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollisionObject).call(this));
    _this._id = CollisionObject._objectCreationCounter++;
    return _this;
  }

  _createClass(CollisionObject, [{
    key: "setLocalCollisionValues",
    value: function setLocalCollisionValues(left, right, top, bottom) {
      this._localLeft = left;
      this._localRight = right;
      this._localTop = top;
      this._localBottom = bottom;
    }
  }, {
    key: "showCollisionRectangle",
    value: function showCollisionRectangle() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x0000ff;

      if (!this._collisionRectangle) {
        this._collisionRectangle = new Graphics();
      }

      if (!this._collisionRectangle.parent) {
        this.addChild(this._collisionRectangle);
      }

      this._collisionRectangle.clear();

      this._collisionRectangle.beginFill(color, .5);

      this._collisionRectangle.drawRect(this._localLeft, this._localTop, this._localRight - this._localLeft, this._localBottom - this._localTop);
    }
  }, {
    key: "hideCollisionRectangle",
    value: function hideCollisionRectangle() {
      if (this._collisionRectangle && this._collisionRectangle.parent) {
        this._collisionRectangle.parent.removeChild(this._collisionRectangle);
      }
    }
  }, {
    key: "collisionLeft",
    value: function collisionLeft() {
      return this._collisionLeft;
    }
  }, {
    key: "collisionRight",
    value: function collisionRight() {
      return this._collisionRight;
    }
  }, {
    key: "collisionTop",
    value: function collisionTop() {
      return this._collisionTop;
    }
  }, {
    key: "collisionBottom",
    value: function collisionBottom() {
      return this._collisionBottom;
    }
  }, {
    key: "localCollisionLeft",
    value: function localCollisionLeft() {
      return this._localLeft;
    }
  }, {
    key: "localCollisionRight",
    value: function localCollisionRight() {
      return this._localRight;
    }
  }, {
    key: "localCollisionTop",
    value: function localCollisionTop() {
      return this._localTop;
    }
  }, {
    key: "localCollisionBottom",
    value: function localCollisionBottom() {
      return this._localBottom;
    }
  }, {
    key: "x",
    set: function set(x) {
      _set(_getPrototypeOf(CollisionObject.prototype), "x", x, this, true);

      this._collisionLeft = x + this._localLeft;
      this._collisionRight = x + this._localRight;
    },
    get: function get() {
      return _get(_getPrototypeOf(CollisionObject.prototype), "x", this);
    }
  }, {
    key: "y",
    set: function set(y) {
      _set(_getPrototypeOf(CollisionObject.prototype), "y", y, this, true);

      this._collisionTop = y + this._localTop;
      this._collisionBottom = y + this._localBottom;
    },
    get: function get() {
      return _get(_getPrototypeOf(CollisionObject.prototype), "y", this);
    }
  }]);

  return CollisionObject;
}(Container);


CollisionObject._objectCreationCounter = 0;

/***/ }),

/***/ "./src/level/CollisionObjectsSorter.ts":
/*!*********************************************!*\
  !*** ./src/level/CollisionObjectsSorter.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollisionObjectsSorter; });
/* harmony import */ var _HitTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HitTest */ "./src/level/HitTest.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CollisionObjectsSorter =
/*#__PURE__*/
function () {
  function CollisionObjectsSorter(_collisionsLayer) {
    _classCallCheck(this, CollisionObjectsSorter);

    this._collisionsLayer = _collisionsLayer;
  }

  _createClass(CollisionObjectsSorter, [{
    key: "sort",
    value: function sort() {
      this._collisionsLayer.children = this.mySort(this._collisionsLayer.children);
    }
  }, {
    key: "mySort",
    value: function mySort(children) {
      var oldArray = children.slice();
      var newArray = [];

      while (oldArray.length) {
        var index = this.findMinObjectIndex(oldArray, 0);
        newArray.push(oldArray[index]);
        oldArray.splice(index, 1);
      }

      return newArray;
    }
  }, {
    key: "findMinObjectIndex",
    value: function findMinObjectIndex(array, index) {
      for (var i = 0; i < array.length; i++) {
        if (i !== index && this.firstObjectIndexIsBigger(array[index], array[i])) {
          index = this.findMinObjectIndex(array, i);
          break;
        }
      }

      return index;
    }
  }, {
    key: "firstObjectIndexIsBigger",
    value: function firstObjectIndexIsBigger(a, b) {
      var hitH = _HitTest__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal(a, b);
      var hitV = _HitTest__WEBPACK_IMPORTED_MODULE_0__["default"].vertical(a, b);

      if (hitH === hitV) {
        return false;
      } else if (hitV) {
        return a.collisionLeft() >= b.collisionRight();
      } else {
        return a.collisionBottom() <= b.collisionTop();
      }
    }
  }]);

  return CollisionObjectsSorter;
}();



/***/ }),

/***/ "./src/level/HitTest.ts":
/*!******************************!*\
  !*** ./src/level/HitTest.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HitTest; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HitTest =
/*#__PURE__*/
function () {
  function HitTest() {
    _classCallCheck(this, HitTest);
  }

  _createClass(HitTest, null, [{
    key: "horizontal",
    value: function horizontal(obj1, obj2) {
      return !(obj1.collisionRight() <= obj2.collisionLeft() || obj1.collisionLeft() >= obj2.collisionRight());
    }
  }, {
    key: "vertical",
    value: function vertical(obj1, obj2) {
      return !(obj1.collisionBottom() <= obj2.collisionTop() || obj1.collisionTop() >= obj2.collisionBottom());
    }
  }]);

  return HitTest;
}();



/***/ }),

/***/ "./src/level/Level.ts":
/*!****************************!*\
  !*** ./src/level/Level.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/level/Player.ts");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View */ "./src/View.ts");
/* harmony import */ var _consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/PointerEvents */ "./src/consts/PointerEvents.ts");
/* harmony import */ var _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts/KeyboardCodes */ "./src/consts/KeyboardCodes.ts");
/* harmony import */ var _PlayerMover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerMover */ "./src/level/PlayerMover.ts");
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Block */ "./src/level/Block.ts");
/* harmony import */ var _CollisionObjectsSorter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CollisionObjectsSorter */ "./src/level/CollisionObjectsSorter.ts");
/* harmony import */ var _HitTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HitTest */ "./src/level/HitTest.ts");
/* harmony import */ var _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/WindowEvents */ "./src/utils/WindowEvents.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Globals */ "./src/Globals.ts");
/* harmony import */ var _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../promises/PixiRequest */ "./src/promises/PixiRequest.ts");
/* harmony import */ var _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../promises/PromisesGroup */ "./src/promises/PromisesGroup.ts");
/* harmony import */ var _model_LevelsManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/LevelsManager */ "./src/model/LevelsManager.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Point = PIXI.Point;











var Level =
/*#__PURE__*/
function (_View) {
  _inherits(Level, _View);

  function Level(_player, levelId) {
    var _this;

    _classCallCheck(this, Level);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Level).call(this));
    _this._player = _player;
    _this._pressedButtons = new Map();
    _this._jump = false;
    _this._blocksTypesData = new Map();
    _this._blocks = [];
    _this._keyDownCallback = null;
    _this._keyUpCallback = null;
    _this._levelData = _model_LevelsManager__WEBPACK_IMPORTED_MODULE_12__["default"].getLevel(levelId).data;
    return _this;
  }

  _createClass(Level, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Level.prototype), "init", this).call(this);

      this.initTypes();
      this.loading();
    }
  }, {
    key: "initTypes",
    value: function initTypes() {
      var _this2 = this;

      this._levelData.types.forEach(function (typeData) {
        _this2._blocksTypesData.set(typeData.id, typeData);
      });
    }
  }, {
    key: "loading",
    value: function loading() {
      var _this3 = this;

      var factories = [];

      this._levelData.types.forEach(function (typeData) {
        if (typeData.image) {
          factories.push(function () {
            return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_10__["default"](typeData.image).createPromise();
          });
        }
      });

      _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_11__["default"].pack(factories)["finally"](function () {
        _this3.onLoadingCompleted();
      });
    }
  }, {
    key: "onLoadingCompleted",
    value: function onLoadingCompleted() {
      this.initBlocks();
      this.initPlayer();
      this.addKeyListeners();
      this.initPlayerMover();
      this.initCollisionObjectsSorter();
      this.launchTicker();
    }
  }, {
    key: "initPlayer",
    value: function initPlayer() {
      this._player.x = 50;
      this._player.y = this.h - this._player.height - 200;
      this.addChild(this._player);
    }
  }, {
    key: "initBlocks",
    value: function initBlocks() {
      var _this4 = this;

      this._levelData.blocks.forEach(function (blockData) {
        _this4.initBlock(blockData);
      });
    }
  }, {
    key: "initBlock",
    value: function initBlock(blockData) {
      var blockTypeData = this._blocksTypesData.get(blockData.type);

      var block = new _Block__WEBPACK_IMPORTED_MODULE_5__["default"](blockData, blockTypeData);
      block.x = blockData.x - blockTypeData.collision.left;
      block.y = blockData.y - blockTypeData.collision.top;
      this.addChild(block);

      this._blocks.push(block);
    }
  }, {
    key: "addKeyListeners",
    value: function addKeyListeners() {
      var _this5 = this;

      this._keyDownCallback = _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_DOWN, function (e) {
        _this5.keyDownHandler(e);
      });
      this._keyUpCallback = _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_UP, function (e) {
        _this5.keyUpHandler(e);
      });
    }
  }, {
    key: "removeKeyListeners",
    value: function removeKeyListeners() {
      if (this._keyDownCallback) {
        _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].remove(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_DOWN, this._keyDownCallback);
      }

      if (this._keyUpCallback) {
        _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].remove(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_UP, this._keyUpCallback);
      }
    }
  }, {
    key: "initPlayerMover",
    value: function initPlayerMover() {
      this._playerMover = new _PlayerMover__WEBPACK_IMPORTED_MODULE_4__["default"](this._player, this._blocks);
    }
  }, {
    key: "initCollisionObjectsSorter",
    value: function initCollisionObjectsSorter() {
      this._collisionObjectsSorter = new _CollisionObjectsSorter__WEBPACK_IMPORTED_MODULE_6__["default"](this);
    }
  }, {
    key: "launchTicker",
    value: function launchTicker() {
      var _this6 = this;

      _Globals__WEBPACK_IMPORTED_MODULE_9__["default"].pixiApp.ticker.add(function () {
        _this6.refreshPlayerSpeedX();

        _this6.refreshPlayerSpeedY();

        _this6._playerMover.refresh();

        if (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode()) {
          _this6.refreshCollisionRectangles();
        } else {
          _this6._collisionObjectsSorter.sort();
        }
      });
    }
  }, {
    key: "refreshCollisionRectangles",
    value: function refreshCollisionRectangles() {
      for (var i = 0; i < this._blocks.length; i++) {
        var hit = false;

        for (var j = 0; j < this._blocks.length; j++) {
          if (i != j && _HitTest__WEBPACK_IMPORTED_MODULE_7__["default"].horizontal(this._blocks[i], this._blocks[j]) && _HitTest__WEBPACK_IMPORTED_MODULE_7__["default"].vertical(this._blocks[i], this._blocks[j])) {
            hit = true;
            break;
          }
        }

        this._blocks[i].showBlockHit(hit);
      }
    }
  }, {
    key: "refreshPlayerSpeedX",
    value: function refreshPlayerSpeedX() {
      var slowdown = !this._pressedButtons.get(_consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_LEFT"]) && !this._pressedButtons.get(_consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_RIGHT"]);

      if (!slowdown || Math.abs(this._player.getSpeedX()) > .1) {
        var direction;

        if (this._pressedButtons.get(_consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_LEFT"]) && this._pressedButtons.get(_consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_RIGHT"])) {
          direction = this._lastPressedDirectionButton == _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_LEFT"] ? -1 : 1;
        } else if (slowdown) {
          direction = this._player.getSpeedX() > 0 ? -1 : 1;
        } else {
          direction = this._pressedButtons.get(_consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_LEFT"]) ? -1 : 1;
        }

        var distance;

        if (slowdown) {
          distance = Math.abs(this._player.getSpeedX());
        } else {
          distance = _Player__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_MOVING_SPEED - this._player.getSpeedX() * direction;
        }

        this._player.setSpeedX(this._player.getSpeedX() + distance * direction * _Player__WEBPACK_IMPORTED_MODULE_0__["default"].MOVING_ACCELERATION_FACTOR);
      } else {
        this._player.setSpeedX(0);
      }
    }
  }, {
    key: "refreshPlayerSpeedY",
    value: function refreshPlayerSpeedY() {
      if (this._player.onTheFloor && this._jump) {
        this._jump = false;

        this._player.setSpeedY(_Player__WEBPACK_IMPORTED_MODULE_0__["default"].JUMP_SPEED);
      } else if (!this._player.onTheFloor && !this._pressedButtons.get(_consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_UP"]) && this._player.getSpeedY() < 0) {
        this._player.setSpeedY(this._player.getSpeedY() + Math.min(-this._player.getSpeedY(), _Player__WEBPACK_IMPORTED_MODULE_0__["default"].JUMP_SLOWDOWN));
      } else {
        this._player.setSpeedY(this._player.getSpeedY() + _Player__WEBPACK_IMPORTED_MODULE_0__["default"].GRAVITY);
      }
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(e) {
      switch (e.code) {
        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_LEFT"]:
        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_RIGHT"]:
          this._lastPressedDirectionButton = e.code;

          this._pressedButtons.set(e.code, true);

          break;

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_UP"]:
          if (!this._pressedButtons.get(e.code)) {
            this._jump = true;

            this._pressedButtons.set(e.code, true);
          }

          break;

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_BACKQUOTE"]:
          _Globals__WEBPACK_IMPORTED_MODULE_9__["default"].setDeveloperMode(!_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode());

          if (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode()) {
            this.enableDeveloperMode();
          } else {
            this.disableDeveloperMode();
          }

          console.log("Developer mode is " + (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode() ? "ON" : "OFF"));
          break;

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_J"]:
          this.printLevelJson();
          break;
      }
    }
  }, {
    key: "enableDeveloperMode",
    value: function enableDeveloperMode() {
      var _this7 = this;

      this._player.showCollisionRectangle(0x00ff00);

      this._blocks.forEach(function (block) {
        block.interactive = true;
        block.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_DOWN"], _this7.blockPointerDownHandler, _this7);
      });
    }
  }, {
    key: "blockPointerDownHandler",
    value: function blockPointerDownHandler(event) {
      var currentBlock = event.currentTarget;
      var pointerDownPoint = new Point(event.data.global.x, event.data.global.y);
      currentBlock.localDragPoint = currentBlock.toLocal(pointerDownPoint);
      currentBlock.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_MOVE"], this.blockPointerMoveHandler, this);
      currentBlock.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_UP"], this.blockPointerUpHandler, this);
      currentBlock.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_UP_OUTSIDE"], this.blockPointerUpHandler, this);
    }
  }, {
    key: "blockPointerMoveHandler",
    value: function blockPointerMoveHandler(event) {
      var currentBlock = event.currentTarget;
      var containerDragPoint = this.toLocal(new Point(event.data.global.x, event.data.global.y));
      currentBlock.x = Math.round(containerDragPoint.x - currentBlock.localDragPoint.x);
      currentBlock.y = Math.round(containerDragPoint.y - currentBlock.localDragPoint.y);
    }
  }, {
    key: "blockPointerUpHandler",
    value: function blockPointerUpHandler(event) {
      var currentBlock = event.currentTarget;
      currentBlock.removeAllListeners(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_MOVE"]);
      currentBlock.removeAllListeners(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_UP"]);
      currentBlock.removeAllListeners(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_UP_OUTSIDE"]);
    }
  }, {
    key: "disableDeveloperMode",
    value: function disableDeveloperMode() {
      this._player.hideCollisionRectangle();

      this._blocks.forEach(function (block) {
        block.interactive = false;
        block.hideBlockHit();
        block.removeAllListeners();
      });
    }
  }, {
    key: "printLevelJson",
    value: function printLevelJson() {
      var addedTypes = new Set();
      var typesData = [];
      var blocksData = [];

      this._blocks.forEach(function (block) {
        if (!addedTypes.has(block.getTypeData().id)) {
          typesData.push(block.getTypeData());
          addedTypes.add(block.getTypeData().id);
        }

        blocksData.push(Object.assign(Object.assign({}, block.getData()), {
          x: block.collisionLeft(),
          y: block.collisionTop()
        }));
      });

      var levelData = Object.assign(Object.assign({}, this._levelData), {
        types: typesData,
        blocks: blocksData
      });
      console.log(JSON.stringify(levelData));
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(e) {
      if (e.code == _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_UP"]) {
        this._jump = false;
      }

      switch (e.code) {
        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_UP"]:
        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_LEFT"]:
        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_RIGHT"]:
          this._pressedButtons.set(e.code, false);

      }
    }
  }]);

  return Level;
}(_View__WEBPACK_IMPORTED_MODULE_1__["View"]);



/***/ }),

/***/ "./src/level/Player.ts":
/*!*****************************!*\
  !*** ./src/level/Player.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _CollisionObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollisionObject */ "./src/level/CollisionObject.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Sprite = PIXI.Sprite;


var Player =
/*#__PURE__*/
function (_CollisionObject) {
  _inherits(Player, _CollisionObject);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this));
    _this.onTheFloor = false;
    _this._speedX = 0;
    _this._speedY = 0;

    _this.initSkin();

    _this.setLocalCollisionValues(10, 40, 10, 90);

    return _this;
  }

  _createClass(Player, [{
    key: "initSkin",
    value: function initSkin() {
      this._skinDirection = Player.RIGHT;
      this.refreshSkin();
    }
  }, {
    key: "setSpeedX",
    value: function setSpeedX(value) {
      this._speedX = value;
      this.refreshSkinDirection();
    }
  }, {
    key: "getSpeedX",
    value: function getSpeedX() {
      return this._speedX;
    }
  }, {
    key: "setSpeedY",
    value: function setSpeedY(value) {
      this._speedY = value;
    }
  }, {
    key: "getSpeedY",
    value: function getSpeedY() {
      return this._speedY;
    }
  }, {
    key: "refreshSkinDirection",
    value: function refreshSkinDirection() {
      if (this._skinDirection == Player.RIGHT && this._speedX < 0 || this._skinDirection == Player.LEFT && this._speedX > 0) {
        if (this._speedX > 0) {
          this._skinDirection = Player.RIGHT;
        } else {
          this._skinDirection = Player.LEFT;
        }

        this.refreshSkin();
      }
    }
  }, {
    key: "refreshSkin",
    value: function refreshSkin() {
      if (this._skin) {
        this._skin.parent.removeChild(this._skin);
      }

      switch (this._skinDirection) {
        case Player.RIGHT:
          this._skin = Sprite.from(Player.RIGHT_SKIN_NAME);
          break;

        case Player.LEFT:
          this._skin = Sprite.from(Player.LEFT_SKIN_NAME);
          break;
      }

      if (this._skin) {
        this.addChild(this._skin);
      }
    }
  }]);

  return Player;
}(_CollisionObject__WEBPACK_IMPORTED_MODULE_0__["default"]);


Player.LEFT_SKIN_NAME = "img/player_left.png";
Player.RIGHT_SKIN_NAME = "img/player_right.png";
Player.GRAVITY = 0.6;
Player.JUMP_SPEED = -16;
Player.JUMP_SLOWDOWN = 2.5;
Player.MAX_MOVING_SPEED = 8;
Player.MOVING_ACCELERATION_FACTOR = .4;
Player.LEFT = Symbol();
Player.RIGHT = Symbol();

/***/ }),

/***/ "./src/level/PlayerMover.ts":
/*!**********************************!*\
  !*** ./src/level/PlayerMover.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerMover; });
/* harmony import */ var _HitTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HitTest */ "./src/level/HitTest.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PlayerMover =
/*#__PURE__*/
function () {
  function PlayerMover(_player, _blocks) {
    _classCallCheck(this, PlayerMover);

    this._player = _player;
    this._blocks = _blocks;
  }

  _createClass(PlayerMover, [{
    key: "refresh",
    value: function refresh() {
      var _this = this;

      if (this._player.getSpeedX() !== 0) {
        this.move(PlayerMover.HORIZONTAL, this._player.getSpeedX(), function () {
          _this._player.setSpeedX(0);
        });
      }

      if (this._player.getSpeedY() !== 0) {
        this._player.onTheFloor = false;
        this.move(PlayerMover.VERTICAL, this._player.getSpeedY(), function () {
          if (_this._player.getSpeedY() > 0) {
            _this._player.onTheFloor = true;
          }

          _this._player.setSpeedY(0);
        });
      }
    }
  }, {
    key: "move",
    value: function move(direction, speed) {
      var _this2 = this;

      var onLimitPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var limitPosition = null;
      var targetPosition = this.getPosition(direction) + speed;

      this._blocks.forEach(function (block) {
        var blockLimitPosition = _this2.calculateBlockLimitPosition(block, direction, speed);

        if (speed > 0) {
          if (_this2.getPosition(direction) <= blockLimitPosition && targetPosition > blockLimitPosition && _this2.hitTest(direction, _this2._player, block)) {
            limitPosition = limitPosition !== null ? Math.min(limitPosition, blockLimitPosition) : blockLimitPosition;
          }
        } else {
          if (_this2.getPosition(direction) >= blockLimitPosition && targetPosition < blockLimitPosition && _this2.hitTest(direction, _this2._player, block)) {
            limitPosition = limitPosition !== null ? Math.max(limitPosition, blockLimitPosition) : blockLimitPosition;
          }
        }
      });

      if (limitPosition !== null) {
        this.setPosition(direction, limitPosition);

        if (onLimitPosition !== null) {
          onLimitPosition();
        }
      } else {
        this.setPosition(direction, targetPosition);
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(direction, value) {
      if (direction == PlayerMover.HORIZONTAL) {
        this._player.x = value;
      } else {
        this._player.y = value;
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(direction) {
      if (direction == PlayerMover.HORIZONTAL) {
        return this._player.x;
      } else {
        return this._player.y;
      }
    }
  }, {
    key: "calculateBlockLimitPosition",
    value: function calculateBlockLimitPosition(block, direction, speed) {
      if (direction == PlayerMover.HORIZONTAL) {
        if (speed > 0) {
          return block.collisionLeft() - this._player.localCollisionRight();
        } else {
          return block.collisionRight() - this._player.localCollisionLeft();
        }
      } else {
        if (speed > 0) {
          return block.collisionTop() - this._player.localCollisionBottom();
        } else {
          return block.collisionBottom() - this._player.localCollisionTop();
        }
      }
    }
  }, {
    key: "hitTest",
    value: function hitTest(direction, object1, object2) {
      if (direction == PlayerMover.HORIZONTAL) {
        return _HitTest__WEBPACK_IMPORTED_MODULE_0__["default"].vertical(object1, object2);
      } else {
        return _HitTest__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal(object1, object2);
      }
    }
  }]);

  return PlayerMover;
}();


PlayerMover.HORIZONTAL = Symbol();
PlayerMover.VERTICAL = Symbol();

/***/ }),

/***/ "./src/model/LevelsManager.ts":
/*!************************************!*\
  !*** ./src/model/LevelsManager.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelsManager; });
/* harmony import */ var _utils_Random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Random */ "./src/utils/Random.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LevelsManager =
/*#__PURE__*/
function () {
  function LevelsManager() {
    _classCallCheck(this, LevelsManager);
  }

  _createClass(LevelsManager, null, [{
    key: "addLevel",
    value: function addLevel(levelInfo) {
      LevelsManager._levelsIds.push(levelInfo.id);

      LevelsManager._levelById.set(levelInfo.id, levelInfo);
    }
  }, {
    key: "addLevelData",
    value: function addLevelData(levelId, data) {
      var levelInfo = LevelsManager._levelById.get(levelId);

      if (levelInfo) {
        levelInfo.data = data;
      }
    }
  }, {
    key: "getLevel",
    value: function getLevel(levelId) {
      return LevelsManager._levelById.get(levelId);
    }
  }, {
    key: "levelsNum",
    value: function levelsNum() {
      return LevelsManager._levelsIds.length;
    }
  }, {
    key: "getRandomLevelId",
    value: function getRandomLevelId() {
      return _utils_Random__WEBPACK_IMPORTED_MODULE_0__["default"].choose.apply(null, LevelsManager._levelsIds);
    }
  }]);

  return LevelsManager;
}();


LevelsManager._levelById = new Map();
LevelsManager._levelsIds = [];

/***/ }),

/***/ "./src/promises/AbstractRequest.ts":
/*!*****************************************!*\
  !*** ./src/promises/AbstractRequest.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractRequest; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractRequest =
/*#__PURE__*/
function () {
  function AbstractRequest() {
    _classCallCheck(this, AbstractRequest);

    this._requestId = null;
  }

  _createClass(AbstractRequest, [{
    key: "createPromise",
    value: function createPromise() {
      var forcedRequest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this._requestId !== null) {
        if (forcedRequest) {
          return this.createUniqueRequestPromise();
        } else {
          if (AbstractRequest._successRequestsIds.has(this._requestId)) {
            return this.createEmptyPromise();
          } else {
            var uniqueRequest = AbstractRequest._executingUniqueRequests.get(this._requestId);

            if (uniqueRequest) {
              return this.createWaitPromise(uniqueRequest);
            } else {
              return this.createUniqueRequestPromise();
            }
          }
        }
      } else {
        return this.requestPromiseFactory();
      }
    }
  }, {
    key: "getRequestPromise",
    value: function getRequestPromise() {
      return this._requestPromise;
    }
  }, {
    key: "createEmptyPromise",
    value: function createEmptyPromise() {
      return new Promise(function (resolve) {
        resolve();
      });
    }
  }, {
    key: "createWaitPromise",
    value: function createWaitPromise(uniqueRequest) {
      return new Promise(function (resolve, reject) {
        uniqueRequest.getRequestPromise().then(function () {
          return resolve();
        })["catch"](function () {
          return reject();
        });
      });
    }
  }, {
    key: "createUniqueRequestPromise",
    value: function createUniqueRequestPromise() {
      var _this = this;

      AbstractRequest._executingUniqueRequests.set(this._requestId, this);

      return new Promise(function (resolve, reject) {
        _this._requestPromise = _this.requestPromiseFactory();

        _this._requestPromise.then(function () {
          AbstractRequest._executingUniqueRequests["delete"](_this._requestId);

          AbstractRequest._successRequestsIds.add(_this._requestId);

          resolve();
        })["catch"](function () {
          AbstractRequest._executingUniqueRequests["delete"](_this._requestId);

          reject();
        });
      });
    }
  }, {
    key: "requestPromiseFactory",
    value: function requestPromiseFactory() {
      return null;
    }
  }]);

  return AbstractRequest;
}();


AbstractRequest._successRequestsIds = new Set();
AbstractRequest._executingUniqueRequests = new Map();

/***/ }),

/***/ "./src/promises/PixiRequest.ts":
/*!*************************************!*\
  !*** ./src/promises/PixiRequest.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixiRequest; });
/* harmony import */ var _AbstractRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractRequest */ "./src/promises/AbstractRequest.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Loader = PIXI.loaders.Loader;
var Resource = PIXI.loaders.Resource;


var PixiRequest =
/*#__PURE__*/
function (_AbstractRequest) {
  _inherits(PixiRequest, _AbstractRequest);

  function PixiRequest(_url) {
    var _this;

    _classCallCheck(this, PixiRequest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PixiRequest).call(this));
    _this._url = _url;
    _this._requestId = "PixiRequest::" + _this._url;
    return _this;
  }

  _createClass(PixiRequest, [{
    key: "getResult",
    value: function getResult() {
      return this._result;
    }
  }, {
    key: "requestPromiseFactory",
    value: function requestPromiseFactory() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var loader = new Loader();
        var success = false;
        var onLoadSignal = loader.onLoad.add(function () {
          success = true;
        });
        var error = false;
        var errorMessage;
        var onErrorSignal = loader.onError.add(function (data) {
          error = true;
          errorMessage = data.message;
        });
        var onCompleteSignal;
        onCompleteSignal = loader.onComplete.add(function () {
          var _a;

          onLoadSignal.detach();
          onErrorSignal.detach();
          onCompleteSignal.detach();

          if (success && !error) {
            _this2._result = (_a = loader.resources[_this2._url]) === null || _a === void 0 ? void 0 : _a.data; // Сохраняем результат

            resolve();
          } else {
            console.error("Error loading resource:", errorMessage);
            reject(errorMessage);
          }
        });
        var loaderOptions = {};
        loaderOptions.crossOrigin = false;
        loaderOptions.loadType = Resource.LOAD_TYPE.XHR;
        loader.add(_this2._url, _this2._url, loaderOptions);
        loader.load();
      });
    }
  }]);

  return PixiRequest;
}(_AbstractRequest__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/promises/PromisesGroup.ts":
/*!***************************************!*\
  !*** ./src/promises/PromisesGroup.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PromisesGroup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PromisesGroup =
/*#__PURE__*/
function () {
  function PromisesGroup() {
    _classCallCheck(this, PromisesGroup);
  }

  _createClass(PromisesGroup, null, [{
    key: "pack",
    value: function pack(factories) {
      return new Promise(function (resolve) {
        var completedCounter = 0;
        factories.forEach(function (factory) {
          factory()["finally"](function () {
            completedCounter++;

            if (completedCounter == factories.length) {
              resolve();
            }
          });
        });
      });
    }
  }, {
    key: "queue",
    value: function queue(factories) {
      return new Promise(function (resolve, reject) {
        var completedCounter = 0;
        createPromise();

        function createPromise() {
          factories[completedCounter]().then(function () {
            completedCounter++;

            if (completedCounter < factories.length) {
              createPromise();
            } else {
              resolve();
            }
          })["catch"](function () {
            reject();
          });
        }
      });
    }
  }]);

  return PromisesGroup;
}();



/***/ }),

/***/ "./src/utils/Random.ts":
/*!*****************************!*\
  !*** ./src/utils/Random.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Random; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Random =
/*#__PURE__*/
function () {
  function Random() {
    _classCallCheck(this, Random);
  }

  _createClass(Random, null, [{
    key: "genInteger",
    value: function genInteger(min, max) {
      return Math.floor(Random.genNumber(min, max + 1));
    }
  }, {
    key: "genNumber",
    value: function genNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
  }, {
    key: "genStr",
    value: function genStr(length) {
      var chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var result = "";

      for (var i = 0; i < length; i++) {
        result += Random.choose.apply(Random, chars);
      }

      return result;
    }
  }, {
    key: "genBoolean",
    value: function genBoolean() {
      return Random.choose(true, false);
    }
  }, {
    key: "genColor",
    value: function genColor() {
      return Random.genInteger(0x000000, 0xffffff);
    }
  }, {
    key: "choose",
    value: function choose() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args[Random.genInteger(0, args.length - 1)];
    }
  }]);

  return Random;
}();



/***/ }),

/***/ "./src/utils/WindowEvents.ts":
/*!***********************************!*\
  !*** ./src/utils/WindowEvents.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowEvents; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WindowEvents =
/*#__PURE__*/
function () {
  function WindowEvents() {
    _classCallCheck(this, WindowEvents);
  }

  _createClass(WindowEvents, null, [{
    key: "add",
    value: function add(type, callback) {
      var w = window;

      if (w.addEventListener) {
        w.addEventListener(type, callback, {
          passive: false
        });
      } else if (w.attachEvent) {
        w.attachEvent("on" + type, callback);
      } else {
        w["on" + type] = callback;
      }

      return callback;
    }
  }, {
    key: "remove",
    value: function remove(type, callback) {
      var w = window;

      if (w.removeEventListener) {
        w.removeEventListener(type, callback, false);
      } else if (w.detachEvent) {
        w.detachEvent("on" + type, callback);
      } else {
        w["on" + type] = null;
      }
    }
  }]);

  return WindowEvents;
}();


WindowEvents.RESIZE = "resize";
WindowEvents.KEY_DOWN = "keydown";
WindowEvents.KEY_UP = "keyup";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWUvLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9NYWluQ29udGFpbmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvVmlldy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2NvbnN0cy9LZXlib2FyZENvZGVzLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvY29uc3RzL1BvaW50ZXJFdmVudHMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9CbG9jay50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0NvbGxpc2lvbk9iamVjdC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0NvbGxpc2lvbk9iamVjdHNTb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9IaXRUZXN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9QbGF5ZXJNb3Zlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL21vZGVsL0xldmVsc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9wcm9taXNlcy9BYnN0cmFjdFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9wcm9taXNlcy9QaXhpUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL1Byb21pc2VzR3JvdXAudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy91dGlscy9SYW5kb20udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy91dGlscy9XaW5kb3dFdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtR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Q0FBbUIsSUFBbkIsRUFBeUIsUUFBekIsRUFBbUM7QUFBRSxpQkFBTyxFQUFFO0FBQVgsU0FBbkM7QUFDQSxPQUZELE1BRU8sSUFBSSxDQUFDLENBQUMsV0FBTixFQUFtQjtBQUN6QixTQUFDLENBQUMsV0FBRixDQUFjLE9BQU8sSUFBckIsRUFBMkIsUUFBM0I7QUFDQSxPQUZNLE1BRUE7QUFDTixTQUFDLENBQUMsT0FBTyxJQUFSLENBQUQsR0FBaUIsUUFBakI7QUFDQTs7QUFDRCxhQUFPLFFBQVA7QUFDQTs7OzJCQUVvQixJLEVBQWEsUSxFQUFrQztBQUNuRSxVQUFNLENBQUMsR0FBTyxNQUFkOztBQUNBLFVBQUksQ0FBQyxDQUFDLG1CQUFOLEVBQTJCO0FBQzFCLFNBQUMsQ0FBQyxtQkFBRixDQUFzQixJQUF0QixFQUE0QixRQUE1QixFQUFzQyxLQUF0QztBQUNBLE9BRkQsTUFFTyxJQUFJLENBQUMsQ0FBQyxXQUFOLEVBQW1CO0FBQ3pCLFNBQUMsQ0FBQyxXQUFGLENBQWMsT0FBTyxJQUFyQixFQUEyQixRQUEzQjtBQUNBLE9BRk0sTUFFQTtBQUNOLFNBQUMsQ0FBQyxPQUFPLElBQVIsQ0FBRCxHQUFpQixJQUFqQjtBQUNBO0FBQ0Q7Ozs7Ozs7QUF6QnNCLHNCQUFnQixRQUFoQjtBQUNBLHdCQUFrQixTQUFsQjtBQUNBLHNCQUFnQixPQUFoQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9NYWluLnRzXCIpO1xuIiwiaW1wb3J0IEFwcGxpY2F0aW9uID0gUElYSS5BcHBsaWNhdGlvbjtcclxuaW1wb3J0IEV2ZW50RW1pdHRlciA9IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFscyB7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDSEFOR0VfREVWRUxPUEVSX01PREVfRVZFTlQ6c3ltYm9sID0gU3ltYm9sKCk7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcGl4aUFwcDpBcHBsaWNhdGlvbjtcclxuXHRwcml2YXRlIHN0YXRpYyBfZGV2ZWxvcGVyTW9kZTpib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2VtaXR0ZXI6RXZlbnRFbWl0dGVyO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHNldERldmVsb3Blck1vZGUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XHJcblx0XHRHbG9iYWxzLl9kZXZlbG9wZXJNb2RlID0gdmFsdWU7XHJcblx0XHRHbG9iYWxzLmdldEVtaXR0ZXIoKS5lbWl0KEdsb2JhbHMuQ0hBTkdFX0RFVkVMT1BFUl9NT0RFX0VWRU5UKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RGV2ZWxvcGVyTW9kZSgpOmJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIEdsb2JhbHMuX2RldmVsb3Blck1vZGU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldEVtaXR0ZXIoKTpFdmVudEVtaXR0ZXIge1xyXG5cdFx0aWYgKCFHbG9iYWxzLl9lbWl0dGVyKSB7XHJcblx0XHRcdEdsb2JhbHMuX2VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gR2xvYmFscy5fZW1pdHRlcjtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFJlY3RhbmdsZSA9IFBJWEkuUmVjdGFuZ2xlO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuL01haW5Db250YWluZXJcIjtcclxuaW1wb3J0IEdyYXBoaWNzID0gUElYSS5HcmFwaGljcztcclxuaW1wb3J0IFdpbmRvd0V2ZW50cyBmcm9tIFwiLi91dGlscy9XaW5kb3dFdmVudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluIHtcclxuXHRwcml2YXRlIF93aW5kb3dTaXplOlJlY3RhbmdsZTtcclxuXHRwcml2YXRlIF9tYWluQ29udGFpbmVyOk1haW5Db250YWluZXI7XHJcblx0cHJpdmF0ZSBfb3V0T2ZCb3VuZHNDb3ZlcjpHcmFwaGljcztcclxuXHJcblx0Y29uc3RydWN0b3IoY2FudmFzSWQ6c3RyaW5nKSB7XHJcblx0XHR0aGlzLmluaXRpYWxpemUoY2FudmFzSWQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0aWFsaXplKGNhbnZhc0lkOnN0cmluZyk6dm9pZCB7XHJcblx0XHR0aGlzLmNyZWF0ZVBpeGlBcHAoY2FudmFzSWQpO1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZSA9IG5ldyBSZWN0YW5nbGUoKTtcclxuXHRcdHRoaXMuaW5pdE1haW5Db250YWluZXIoKTtcclxuXHRcdHRoaXMuaW5pdE91dE9mQm91bmRzQ292ZXIoKTtcclxuXHRcdFdpbmRvd0V2ZW50cy5hZGQoV2luZG93RXZlbnRzLlJFU0laRSwgKCkgPT4geyB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgfSk7XHJcblx0XHR0aGlzLnJlZnJlc2hTaXplKCk7XHJcblx0XHR0aGlzLnByaW50V2VsY29tZU1lc3NhZ2UoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdE1haW5Db250YWluZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX21haW5Db250YWluZXIgPSBuZXcgTWFpbkNvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zZXRTaXplKDE1MDAsIDEwMDApO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX21haW5Db250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0T3V0T2ZCb3VuZHNDb3ZlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3ZlciA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX291dE9mQm91bmRzQ292ZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVQaXhpQXBwKGNhbnZhc0lkOnN0cmluZyk6dm9pZCB7XHJcblx0XHRjb25zdCBhcHBDb25maWc6UElYSS5BcHBsaWNhdGlvbk9wdGlvbnMgPSB7XHJcblx0XHRcdGFudGlhbGlhczp0cnVlLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6MHhmZmZmZmYsXHJcblx0XHRcdHZpZXc6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG5cdFx0XHQvLyByb3VuZGluZyByZXNvbHV0aW9uIGZvciBlc2NhcGUgdHJvdWJsZXMgd2l0aCBpbnZpc2libGUgZm9udHMgb24gc29tZSBBbmRyb2lkIGRldmljZXNcclxuXHRcdFx0cmVzb2x1dGlvbjooKGRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyKSA/IDEgOiAyLFxyXG5cdFx0fTtcclxuXHRcdEdsb2JhbHMucGl4aUFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKGFwcENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50V2VsY29tZU1lc3NhZ2UoKTp2b2lkIHtcclxuXHRcdGxldCB3ZWxjb21lU3RyaW5nOnN0cmluZyA9IHByb2Nlc3MuZW52LlBST0pFQ1RfTkFNRSArIFwiIFwiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9WRVJTSU9OO1xyXG5cdFx0aWYgKCFwcm9jZXNzLmVudi5SRUxFQVNFKSB7XHJcblx0XHRcdHdlbGNvbWVTdHJpbmcgKz0gXCIgKHRlc3QpXCI7XHJcblx0XHRcdHdlbGNvbWVTdHJpbmcgKz0gXCJcXG4+Pj4gXCIgKyAocHJvY2Vzcy5lbnYuTE9DQUwgPyBcIkxPQ0FMXCIgOiBcIlNFUlZFUlwiKSArIFwiIDw8PFwiO1xyXG5cdFx0fVxyXG5cdFx0d2VsY29tZVN0cmluZyArPSBcIlxcbkRldmVsb3BlZCBieSDCq1wiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9BVVRIT1IgKyBcIsK7XCI7XHJcblx0XHRjb25zb2xlLmxvZyh3ZWxjb21lU3RyaW5nKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgd2luZG93UmVzaXplSGFuZGxlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoU2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoV2luZG93U2l6ZSgpO1xyXG5cdFx0dGhpcy5hbGlnblBpeGlBcHAoKTtcclxuXHRcdHRoaXMuYWxpZ25NYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmFsaWduT3V0T2ZCb3VuZHNDb3ZlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoV2luZG93U2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFsaWduUGl4aUFwcCgpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUud2lkdGggPSB0aGlzLl93aW5kb3dTaXplLndpZHRoICsgXCJweFwiO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuaGVpZ2h0ID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAucmVuZGVyZXIucmVzaXplKHRoaXMuX3dpbmRvd1NpemUud2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWxpZ25NYWluQ29udGFpbmVyKCk6dm9pZCB7XHJcblx0XHRjb25zdCBzY2FsZUJ5V2lkdGg6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS53aWR0aCAvIHRoaXMuX21haW5Db250YWluZXIudztcclxuXHRcdGNvbnN0IHNjYWxlQnlIZWlnaHQ6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLyB0aGlzLl9tYWluQ29udGFpbmVyLmg7XHJcblx0XHRjb25zdCBzY2FsZTpudW1iZXIgPSBNYXRoLm1pbihzY2FsZUJ5V2lkdGgsIHNjYWxlQnlIZWlnaHQpO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS54ID0gdGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS55ID0gc2NhbGU7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnggPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gdGhpcy5fbWFpbkNvbnRhaW5lci53ICogc2NhbGUpIC8gMik7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnkgPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLmhlaWdodCAtIHRoaXMuX21haW5Db250YWluZXIuaCAqIHNjYWxlKSAvIDIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhbGlnbk91dE9mQm91bmRzQ292ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuYmVnaW5GaWxsKDB4MDAwMDAwKTtcclxuXHRcdGlmICh0aGlzLl9tYWluQ29udGFpbmVyLmggKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnkgPCB0aGlzLl93aW5kb3dTaXplLmhlaWdodCkge1xyXG5cdFx0XHRjb25zdCBjb3ZlckhlaWdodDpudW1iZXIgPSB0aGlzLl9tYWluQ29udGFpbmVyLnk7XHJcblx0XHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuZHJhd1JlY3QoMCwgMCwgdGhpcy5fd2luZG93U2l6ZS53aWR0aCwgY292ZXJIZWlnaHQpO1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLSBjb3ZlckhlaWdodCxcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoLCBjb3ZlckhlaWdodCxcclxuXHRcdFx0KVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLl9tYWluQ29udGFpbmVyLncgKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnggPCB0aGlzLl93aW5kb3dTaXplLndpZHRoKSB7XHJcblx0XHRcdGNvbnN0IGNvdmVyV2lkdGg6bnVtYmVyID0gdGhpcy5fbWFpbkNvbnRhaW5lci54O1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KDAsIDAsIGNvdmVyV2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHRcdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3Zlci5kcmF3UmVjdChcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gY292ZXJXaWR0aCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGNvdmVyV2lkdGgsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtWaWV3fSBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbGV2ZWwvUGxheWVyXCI7XHJcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbC9MZXZlbFwiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCBQaXhpUmVxdWVzdCBmcm9tIFwiLi9wcm9taXNlcy9QaXhpUmVxdWVzdFwiO1xyXG5pbXBvcnQgUHJvbWlzZXNHcm91cCBmcm9tIFwiLi9wcm9taXNlcy9Qcm9taXNlc0dyb3VwXCI7XHJcbmltcG9ydCBMZXZlbHNNYW5hZ2VyIGZyb20gXCIuL21vZGVsL0xldmVsc01hbmFnZXJcIjtcclxuaW1wb3J0IHtJTGV2ZWxJbmZvfSBmcm9tIFwiLi9JbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlldyB7XHJcblx0cHJpdmF0ZSBfbGV2ZWw6TGV2ZWw7XHJcblx0cHJpdmF0ZSBfcGxheWVyOlBsYXllcjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluaXQoKTp2b2lkIHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHRcdHRoaXMubG9hZGluZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nKCk6dm9pZCB7XHJcblx0XHRQcm9taXNlc0dyb3VwLnBhY2soW1xyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsMS5qc29uXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsMi5qc29uXCIpLFxyXG5cdFx0XHQoKSA9PiBuZXcgUGl4aVJlcXVlc3QoUGxheWVyLkxFRlRfU0tJTl9OQU1FKS5jcmVhdGVQcm9taXNlKCksXHJcblx0XHRcdCgpID0+IG5ldyBQaXhpUmVxdWVzdChQbGF5ZXIuUklHSFRfU0tJTl9OQU1FKS5jcmVhdGVQcm9taXNlKCksXHJcblx0XHRdKVxyXG5cdFx0XHQuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jb21wbGV0ZUxvYWRpbmdIYW5kbGVyKCk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBsb2FkTGV2ZWwoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0Y29uc3QgcmVxdWVzdCA9IG5ldyBQaXhpUmVxdWVzdChcImxldmVscy9cIiArIGZpbGVOYW1lKTtcclxuXHRcdGF3YWl0IHJlcXVlc3QuY3JlYXRlUHJvbWlzZSgpO1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhID0gcmVxdWVzdC5nZXRSZXN1bHQoKTtcclxuXHRcdExldmVsc01hbmFnZXIuYWRkTGV2ZWwobGV2ZWxEYXRhKTtcclxuXHRcdExldmVsc01hbmFnZXIuYWRkTGV2ZWxEYXRhKGxldmVsRGF0YS5pZCwgbGV2ZWxEYXRhLmRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjb21wbGV0ZUxvYWRpbmdIYW5kbGVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLmluaXRQbGF5ZXIoKTtcclxuXHRcdHRoaXMuaW5pdExldmVsQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmxhdW5jaFRpY2tlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0UGxheWVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRMZXZlbENvbnRhaW5lcigpOnZvaWQge1xyXG5cdFx0Y29uc3QgbGV2ZWxJZDpudW1iZXIgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG5cdFx0Y29uc3QgbGV2ZWxJbmZvOklMZXZlbEluZm8gPSBMZXZlbHNNYW5hZ2VyLmdldExldmVsKGxldmVsSWQpO1xyXG5cdFx0aWYgKGxldmVsSW5mbyAmJiBsZXZlbEluZm8uZGF0YSkge1xyXG5cdFx0XHR0aGlzLl9sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLl9wbGF5ZXIsIGxldmVsSWQpO1xyXG5cdFx0XHR0aGlzLl9sZXZlbC5zZXRTaXplKGxldmVsSW5mby5kYXRhLnN0YWdlLndpZHRoLCBsZXZlbEluZm8uZGF0YS5zdGFnZS5oZWlnaHQpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2xldmVsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbGF1bmNoVGlja2VyKCk6dm9pZCB7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAudGlja2VyLmFkZCgoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLl9sZXZlbCkge1xyXG5cdFx0XHRcdHRoaXMuX2xldmVsLnggPSB0aGlzLmNhbGN1bGF0ZUxldmVsUG9zaXRpb24odGhpcy53LCB0aGlzLl9sZXZlbC53LCB0aGlzLl9wbGF5ZXIud2lkdGgsIHRoaXMuX3BsYXllci54KTtcclxuXHRcdFx0XHR0aGlzLl9sZXZlbC55ID0gdGhpcy5jYWxjdWxhdGVMZXZlbFBvc2l0aW9uKHRoaXMuaCwgdGhpcy5fbGV2ZWwuaCwgdGhpcy5fcGxheWVyLmhlaWdodCwgdGhpcy5fcGxheWVyLnkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2FsY3VsYXRlTGV2ZWxQb3NpdGlvbih0aGlzU2l6ZTpudW1iZXIsIGxldmVsU2l6ZTpudW1iZXIsIHBsYXllclNpemU6bnVtYmVyLCBwbGF5ZXJQb3NpdGlvbjpudW1iZXIpOm51bWJlciB7XHJcblx0XHRjb25zdCBtaW5MZXZlbFBvc2l0aW9uOm51bWJlciA9IHRoaXNTaXplIC0gbGV2ZWxTaXplO1xyXG5cdFx0Y29uc3QgbWF4TGV2ZWxQb3NpdGlvbjpudW1iZXIgPSAwO1xyXG5cdFx0Y29uc3QgY2FsY3VsYXRlZExldmVsUG9zaXRpb246bnVtYmVyID0gKHRoaXNTaXplIC0gcGxheWVyU2l6ZSkgLyAyIC0gcGxheWVyUG9zaXRpb247XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1pbihtYXhMZXZlbFBvc2l0aW9uLCBNYXRoLm1heChtaW5MZXZlbFBvc2l0aW9uLCBjYWxjdWxhdGVkTGV2ZWxQb3NpdGlvbikpKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyID0gUElYSS5Db250YWluZXI7XHJcbmltcG9ydCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XHJcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4vdXRpbHMvUmFuZG9tXCI7XHJcblxyXG5jbGFzcyBWaWV3IGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBSZXNpemFibGVWaWV3IGV4dGVuZHMgVmlldyB7XHJcblx0cHVibGljIHc6bnVtYmVyO1xyXG5cdHB1YmxpYyBoOm51bWJlcjtcclxuXHRwcml2YXRlIF9pbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0Vyh2YWx1ZTpudW1iZXIpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMudyAhPT0gdmFsdWUpIHtcclxuXHRcdFx0dGhpcy53ID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0SCh2YWx1ZTpudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmggIT09IHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuaCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmFwcGx5U2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFNpemUodzpudW1iZXIsIGg6bnVtYmVyKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLncgIT09IHcgfHwgdGhpcy5oICE9PSBoKSB7XHJcblx0XHRcdHRoaXMudyA9IHc7XHJcblx0XHRcdHRoaXMuaCA9IGg7XHJcblx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYXBwbHlTaXplKCk6dm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuX2luaXRlZCkge1xyXG5cdFx0XHR0aGlzLl9pbml0ZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmluaXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBpbml0KCk6dm9pZCB7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBWaWV3V2l0aFRlc3RCYWNrZ3JvdW5kIGV4dGVuZHMgUmVzaXphYmxlVmlldyB7XHJcblx0cHJpdmF0ZSBfdGVzdEJhY2tncm91bmQ6R3JhcGhpY3M7XHJcblx0cHJpdmF0ZSBfdGVzdEJhY2tncm91bmRDb2xvcjpudW1iZXI7XHJcblx0cHJpdmF0ZSBfdGVzdEJhY2tncm91bmRBbHBoYTpudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaG93VGVzdEJhY2tncm91bmQoY29sb3I/Om51bWJlciwgYWxwaGE6bnVtYmVyID0gLjUpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl90ZXN0QmFja2dyb3VuZCkge1xyXG5cdFx0XHR0aGlzLl90ZXN0QmFja2dyb3VuZCA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkQXQodGhpcy5fdGVzdEJhY2tncm91bmQsIDApO1xyXG5cdFx0XHR0aGlzLl90ZXN0QmFja2dyb3VuZENvbG9yID0gY29sb3IgPyBjb2xvciA6IFJhbmRvbS5nZW5Db2xvcigpO1xyXG5cdFx0XHR0aGlzLl90ZXN0QmFja2dyb3VuZEFscGhhID0gYWxwaGE7XHJcblx0XHRcdGlmICh0aGlzLncgJiYgdGhpcy5oKSB7XHJcblx0XHRcdFx0dGhpcy5hcHBseVNpemUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFwcGx5U2l6ZSgpOnZvaWQge1xyXG5cdFx0c3VwZXIuYXBwbHlTaXplKCk7XHJcblx0XHRpZiAodGhpcy5fdGVzdEJhY2tncm91bmQpIHtcclxuXHRcdFx0dGhpcy5fdGVzdEJhY2tncm91bmQuY2xlYXIoKTtcclxuXHRcdFx0dGhpcy5fdGVzdEJhY2tncm91bmQubGluZVN0eWxlKDEsIHRoaXMuX3Rlc3RCYWNrZ3JvdW5kQ29sb3IpO1xyXG5cdFx0XHR0aGlzLl90ZXN0QmFja2dyb3VuZC5iZWdpbkZpbGwodGhpcy5fdGVzdEJhY2tncm91bmRDb2xvciwgdGhpcy5fdGVzdEJhY2tncm91bmRBbHBoYSk7XHJcblx0XHRcdHRoaXMuX3Rlc3RCYWNrZ3JvdW5kLmRyYXdSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcclxuXHRcdFx0dGhpcy5fdGVzdEJhY2tncm91bmQuZW5kRmlsbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVmlld1dpdGhSZXNpemVUZXN0IGV4dGVuZHMgVmlld1dpdGhUZXN0QmFja2dyb3VuZCB7XHJcblx0cHVibGljIHJlc2l6ZVRlc3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX3NpemVXYXNDaGFuZ2VkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFwcGx5U2l6ZSgpOnZvaWQge1xyXG5cdFx0c3VwZXIuYXBwbHlTaXplKCk7XHJcblx0XHRpZiAodGhpcy5yZXNpemVUZXN0KSB7XHJcblx0XHRcdGlmICghdGhpcy5fc2l6ZVdhc0NoYW5nZWQpIHtcclxuXHRcdFx0XHR0aGlzLl9zaXplV2FzQ2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fc2l6ZVdhc0NoYW5nZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCAwKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyAqIFlvdSBzaG91bGQgdG8gdXNlIHNldFNpemUgaW5zdGVhZCBzZXRXIGFuZCBzZXRIIGlmIHlvdSB3YW50IHRvIGNoYW5nZSBib3RoIHBhcmFtZXRlcnNcclxuXHRcdFx0XHQvLyAqIFlvdSBzaG91bGRuJ3QgY2FsbCBhcHBseVNpemUgbWV0aG9kIG1hbnVhbGx5XHJcblx0XHRcdFx0Ly8gKiBZb3Ugc2hvdWxkbid0IGNhbGwgc2V0U2l6ZSwgc2V0VyBvciBzZXRIIHR3aWNlXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW1wiICsgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCJdIHJlc2l6ZSB0ZXN0IHdhcyBmYWlsZWRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7Vmlld1dpdGhSZXNpemVUZXN0IGFzIFZpZXd9OyIsImV4cG9ydCBjb25zdCBLRVlfVVAgPSBcIkFycm93VXBcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9MRUZUID0gXCJBcnJvd0xlZnRcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9SSUdIVCA9IFwiQXJyb3dSaWdodFwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0JBQ0tRVU9URSA9IFwiQmFja3F1b3RlXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfSiA9IFwiS2V5SlwiOyIsImV4cG9ydCBjb25zdCBQT0lOVEVSX0RPV04gPSBcInBvaW50ZXJkb3duXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX1VQID0gXCJwb2ludGVydXBcIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfTU9WRSA9IFwicG9pbnRlcm1vdmVcIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfVVBfT1VUU0lERSA9IFwicG9pbnRlcnVwb3V0c2lkZVwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9PVkVSID0gXCJwb2ludGVyb3ZlclwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9PVVQgPSBcInBvaW50ZXJvdXRcIjsiLCJpbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5pbXBvcnQge0lCbG9jaywgSUNvbGxpc2lvbiwgSVR5cGV9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcclxuaW1wb3J0IFBvaW50ID0gUElYSS5Qb2ludDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrIGV4dGVuZHMgQ29sbGlzaW9uT2JqZWN0IHtcclxuXHRwdWJsaWMgbG9jYWxEcmFnUG9pbnQ6UG9pbnQ7XHJcblx0cHJpdmF0ZSBfc3ByaXRlOlNwcml0ZTtcclxuXHRwcml2YXRlIF9oaXQ6Ym9vbGVhbiA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfYmxvY2tEYXRhOklCbG9jayxcclxuXHRcdHByaXZhdGUgX2Jsb2NrVHlwZURhdGE6SVR5cGUsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaW5pdFNwcml0ZSgpO1xyXG5cdFx0aWYgKHRoaXMuX2Jsb2NrVHlwZURhdGEuY29sbGlzaW9uKSB7XHJcblx0XHRcdGNvbnN0IGNvbGxpc2lvbjpJQ29sbGlzaW9uID0gdGhpcy5fYmxvY2tUeXBlRGF0YS5jb2xsaXNpb247XHJcblx0XHRcdHRoaXMuc2V0TG9jYWxDb2xsaXNpb25WYWx1ZXMoY29sbGlzaW9uLmxlZnQsIGNvbGxpc2lvbi5yaWdodCwgY29sbGlzaW9uLnRvcCwgY29sbGlzaW9uLmJvdHRvbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRTcHJpdGUoKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9ibG9ja1R5cGVEYXRhLmltYWdlKSB7XHJcblx0XHRcdHRoaXMuX3Nwcml0ZSA9IFNwcml0ZS5mcm9tKHRoaXMuX2Jsb2NrVHlwZURhdGEuaW1hZ2UpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0RGF0YSgpOklCbG9jayB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tEYXRhO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFR5cGVEYXRhKCk6SVR5cGUge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2NrVHlwZURhdGE7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd0Jsb2NrSGl0KHZhbHVlOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2hpdCAhPT0gdmFsdWUpIHtcclxuXHRcdFx0dGhpcy5faGl0ID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuc2hvd0NvbGxpc2lvblJlY3RhbmdsZSh0aGlzLl9oaXQgPyAweGZmMDAwMCA6IDB4MDAwMGZmKTtcclxuXHRcdFx0aWYgKHRoaXMuX3Nwcml0ZSkge1xyXG5cdFx0XHRcdHRoaXMuX3Nwcml0ZS5hbHBoYSA9IC4zO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGlkZUJsb2NrSGl0KCk6dm9pZCB7XHJcblx0XHR0aGlzLmhpZGVDb2xsaXNpb25SZWN0YW5nbGUoKTtcclxuXHRcdHRoaXMuX2hpdCA9IG51bGw7XHJcblx0XHRpZiAodGhpcy5fc3ByaXRlKSB7XHJcblx0XHRcdHRoaXMuX3Nwcml0ZS5hbHBoYSA9IDE7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IENvbnRhaW5lciA9IFBJWEkuQ29udGFpbmVyO1xyXG5pbXBvcnQgR3JhcGhpY3MgPSBQSVhJLkdyYXBoaWNzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uT2JqZWN0IGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIHN0YXRpYyBfb2JqZWN0Q3JlYXRpb25Db3VudGVyOm51bWJlciA9IDA7XHJcblxyXG5cdHByaXZhdGUgX2xvY2FsTGVmdDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxSaWdodDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxUb3A6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsQm90dG9tOm51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uTGVmdDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uUmlnaHQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvblRvcDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uQm90dG9tOm51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uUmVjdGFuZ2xlOkdyYXBoaWNzO1xyXG5cclxuXHRwcml2YXRlIF9pZDpudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX2lkID0gQ29sbGlzaW9uT2JqZWN0Ll9vYmplY3RDcmVhdGlvbkNvdW50ZXIrKztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRMb2NhbENvbGxpc2lvblZhbHVlcyhcclxuXHRcdGxlZnQ6bnVtYmVyLFxyXG5cdFx0cmlnaHQ6bnVtYmVyLFxyXG5cdFx0dG9wOm51bWJlcixcclxuXHRcdGJvdHRvbTpudW1iZXJcclxuXHQpOnZvaWQge1xyXG5cdFx0dGhpcy5fbG9jYWxMZWZ0ID0gbGVmdDtcclxuXHRcdHRoaXMuX2xvY2FsUmlnaHQgPSByaWdodDtcclxuXHRcdHRoaXMuX2xvY2FsVG9wID0gdG9wO1xyXG5cdFx0dGhpcy5fbG9jYWxCb3R0b20gPSBib3R0b207XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHgoeDpudW1iZXIpIHtcclxuXHRcdHN1cGVyLnggPSB4O1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uTGVmdCA9IHggKyB0aGlzLl9sb2NhbExlZnQ7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25SaWdodCA9IHggKyB0aGlzLl9sb2NhbFJpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB4KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBzdXBlci54O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB5KHk6bnVtYmVyKSB7XHJcblx0XHRzdXBlci55ID0geTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblRvcCA9IHkgKyB0aGlzLl9sb2NhbFRvcDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbkJvdHRvbSA9IHkgKyB0aGlzLl9sb2NhbEJvdHRvbTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gc3VwZXIueTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaG93Q29sbGlzaW9uUmVjdGFuZ2xlKGNvbG9yOm51bWJlciA9IDB4MDAwMGZmKTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlKSB7XHJcblx0XHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUucGFyZW50KSB7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5jbGVhcigpO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLmJlZ2luRmlsbChjb2xvciwgLjUpO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLmRyYXdSZWN0KFxyXG5cdFx0XHR0aGlzLl9sb2NhbExlZnQsXHJcblx0XHRcdHRoaXMuX2xvY2FsVG9wLFxyXG5cdFx0XHR0aGlzLl9sb2NhbFJpZ2h0IC0gdGhpcy5fbG9jYWxMZWZ0LFxyXG5cdFx0XHR0aGlzLl9sb2NhbEJvdHRvbSAtIHRoaXMuX2xvY2FsVG9wLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoaWRlQ29sbGlzaW9uUmVjdGFuZ2xlKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlICYmIHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5wYXJlbnQpIHtcclxuXHRcdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvbkxlZnQoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvbkxlZnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uUmlnaHQoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvblJpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvblRvcCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uVG9wO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvbkJvdHRvbSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uQm90dG9tO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uTGVmdCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxMZWZ0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uUmlnaHQoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsUmlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25Ub3AoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsVG9wO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uQm90dG9tKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbEJvdHRvbTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyID0gUElYSS5Db250YWluZXI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk9iamVjdHNTb3J0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfY29sbGlzaW9uc0xheWVyOkNvbnRhaW5lclxyXG5cdCkge31cclxuXHJcblx0cHVibGljIHNvcnQoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllci5jaGlsZHJlbiA9IHRoaXMubXlTb3J0KHRoaXMuX2NvbGxpc2lvbnNMYXllci5jaGlsZHJlbiBhcyBDb2xsaXNpb25PYmplY3RbXSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG15U29ydChjaGlsZHJlbjpDb2xsaXNpb25PYmplY3RbXSk6Q29sbGlzaW9uT2JqZWN0W10ge1xyXG5cdFx0Y29uc3Qgb2xkQXJyYXk6Q29sbGlzaW9uT2JqZWN0W10gPSBjaGlsZHJlbi5zbGljZSgpO1xyXG5cdFx0Y29uc3QgbmV3QXJyYXk6Q29sbGlzaW9uT2JqZWN0W10gPSBbXTtcclxuXHRcdHdoaWxlIChvbGRBcnJheS5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgaW5kZXg6bnVtYmVyID0gdGhpcy5maW5kTWluT2JqZWN0SW5kZXgob2xkQXJyYXksIDApO1xyXG5cdFx0XHRuZXdBcnJheS5wdXNoKG9sZEFycmF5W2luZGV4XSk7XHJcblx0XHRcdG9sZEFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXJyYXk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZpbmRNaW5PYmplY3RJbmRleChcclxuXHRcdGFycmF5OkNvbGxpc2lvbk9iamVjdFtdLFxyXG5cdFx0aW5kZXg6bnVtYmVyLFxyXG5cdCk6bnVtYmVyIHtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpICE9PSBpbmRleCAmJiB0aGlzLmZpcnN0T2JqZWN0SW5kZXhJc0JpZ2dlcihhcnJheVtpbmRleF0sIGFycmF5W2ldKSkge1xyXG5cdFx0XHRcdGluZGV4ID0gdGhpcy5maW5kTWluT2JqZWN0SW5kZXgoYXJyYXksIGkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW5kZXg7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZpcnN0T2JqZWN0SW5kZXhJc0JpZ2dlcihhOkNvbGxpc2lvbk9iamVjdCwgYjpDb2xsaXNpb25PYmplY3QpOmJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgaGl0SDogYm9vbGVhbiA9IEhpdFRlc3QuaG9yaXpvbnRhbChhLCBiKTtcclxuXHRcdGNvbnN0IGhpdFY6IGJvb2xlYW4gPSBIaXRUZXN0LnZlcnRpY2FsKGEsIGIpO1xyXG5cdFx0aWYgKGhpdEggPT09IGhpdFYpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmIChoaXRWKSB7XHJcblx0XHRcdHJldHVybiBhLmNvbGxpc2lvbkxlZnQoKSA+PSBiLmNvbGxpc2lvblJpZ2h0KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gYS5jb2xsaXNpb25Cb3R0b20oKSA8PSBiLmNvbGxpc2lvblRvcCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXRUZXN0IHtcclxuXHRwdWJsaWMgc3RhdGljIGhvcml6b250YWwob2JqMTpDb2xsaXNpb25PYmplY3QsIG9iajI6Q29sbGlzaW9uT2JqZWN0KTpib29sZWFuIHtcclxuXHRcdHJldHVybiAhKFxyXG5cdFx0XHRvYmoxLmNvbGxpc2lvblJpZ2h0KCkgPD0gb2JqMi5jb2xsaXNpb25MZWZ0KCkgfHxcclxuXHRcdFx0b2JqMS5jb2xsaXNpb25MZWZ0KCkgPj0gb2JqMi5jb2xsaXNpb25SaWdodCgpXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHZlcnRpY2FsKG9iajE6Q29sbGlzaW9uT2JqZWN0LCBvYmoyOkNvbGxpc2lvbk9iamVjdCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gIShcclxuXHRcdFx0b2JqMS5jb2xsaXNpb25Cb3R0b20oKSA8PSBvYmoyLmNvbGxpc2lvblRvcCgpIHx8XHJcblx0XHRcdG9iajEuY29sbGlzaW9uVG9wKCkgPj0gb2JqMi5jb2xsaXNpb25Cb3R0b20oKVxyXG5cdFx0KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQge1ZpZXd9IGZyb20gXCIuLi9WaWV3XCI7XHJcbmltcG9ydCB7UE9JTlRFUl9ET1dOLCBQT0lOVEVSX01PVkUsIFBPSU5URVJfVVAsIFBPSU5URVJfVVBfT1VUU0lERX0gZnJvbSBcIi4uL2NvbnN0cy9Qb2ludGVyRXZlbnRzXCI7XHJcbmltcG9ydCBJbnRlcmFjdGlvbkV2ZW50ID0gUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50O1xyXG5pbXBvcnQgUG9pbnQgPSBQSVhJLlBvaW50O1xyXG5pbXBvcnQge0tFWV9CQUNLUVVPVEUsIEtFWV9KLCBLRVlfTEVGVCwgS0VZX1JJR0hULCBLRVlfVVB9IGZyb20gXCIuLi9jb25zdHMvS2V5Ym9hcmRDb2Rlc1wiO1xyXG5pbXBvcnQge0lCbG9jaywgSUxldmVsLCBJVHlwZX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IFBsYXllck1vdmVyIGZyb20gXCIuL1BsYXllck1vdmVyXCI7XHJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgQ29sbGlzaW9uT2JqZWN0c1NvcnRlciBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RzU29ydGVyXCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuaW1wb3J0IFdpbmRvd0V2ZW50cyBmcm9tIFwiLi4vdXRpbHMvV2luZG93RXZlbnRzXCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCIuLi9HbG9iYWxzXCI7XHJcbmltcG9ydCBQaXhpUmVxdWVzdCBmcm9tIFwiLi4vcHJvbWlzZXMvUGl4aVJlcXVlc3RcIjtcclxuaW1wb3J0IFByb21pc2VzR3JvdXAgZnJvbSBcIi4uL3Byb21pc2VzL1Byb21pc2VzR3JvdXBcIjtcclxuaW1wb3J0IExldmVsc01hbmFnZXIgZnJvbSBcIi4uL21vZGVsL0xldmVsc01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIGV4dGVuZHMgVmlldyB7XHJcblx0cHJpdmF0ZSBfcHJlc3NlZEJ1dHRvbnM6TWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcclxuXHRwcml2YXRlIF9sYXN0UHJlc3NlZERpcmVjdGlvbkJ1dHRvbjpzdHJpbmc7XHJcblx0cHJpdmF0ZSBfanVtcDpib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfYmxvY2tzVHlwZXNEYXRhOk1hcDxzdHJpbmcsIElUeXBlPiA9IG5ldyBNYXA8c3RyaW5nLCBJVHlwZT4oKTtcclxuXHRwcml2YXRlIF9wbGF5ZXJNb3ZlcjpQbGF5ZXJNb3ZlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25PYmplY3RzU29ydGVyOkNvbGxpc2lvbk9iamVjdHNTb3J0ZXI7XHJcblx0cHJpdmF0ZSBfYmxvY2tzOkJsb2NrW10gPSBbXTtcclxuXHRwcml2YXRlIF9sZXZlbERhdGE6SUxldmVsO1xyXG5cdHByaXZhdGUgX2tleURvd25DYWxsYmFjazooLi4ucGFyYW1zOmFueVtdKSA9PiB2b2lkID0gbnVsbDtcclxuXHRwcml2YXRlIF9rZXlVcENhbGxiYWNrOiguLi5wYXJhbXM6YW55W10pID0+IHZvaWQgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3BsYXllcjpQbGF5ZXIsXHJcblx0XHRsZXZlbElkOm51bWJlcixcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9sZXZlbERhdGEgPSBMZXZlbHNNYW5hZ2VyLmdldExldmVsKGxldmVsSWQpLmRhdGE7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaW5pdCgpOnZvaWQge1xyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cdFx0dGhpcy5pbml0VHlwZXMoKTtcclxuXHRcdHRoaXMubG9hZGluZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0VHlwZXMoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2xldmVsRGF0YS50eXBlcy5mb3JFYWNoKCh0eXBlRGF0YTpJVHlwZSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NUeXBlc0RhdGEuc2V0KHR5cGVEYXRhLmlkLCB0eXBlRGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZGluZygpOnZvaWQge1xyXG5cdFx0Y29uc3QgZmFjdG9yaWVzOigoKSA9PiBQcm9taXNlPGFueT4pW10gPSBbXTtcclxuXHRcdHRoaXMuX2xldmVsRGF0YS50eXBlcy5mb3JFYWNoKCh0eXBlRGF0YTpJVHlwZSkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZURhdGEuaW1hZ2UpIHtcclxuXHRcdFx0XHRmYWN0b3JpZXMucHVzaCgoKSA9PiBuZXcgUGl4aVJlcXVlc3QodHlwZURhdGEuaW1hZ2UpLmNyZWF0ZVByb21pc2UoKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0UHJvbWlzZXNHcm91cC5wYWNrKGZhY3RvcmllcylcclxuXHRcdFx0LmZpbmFsbHkoKCkgPT4geyB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlZCgpOyB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2FkaW5nQ29tcGxldGVkKCk6dm9pZCB7XHJcblx0XHR0aGlzLmluaXRCbG9ja3MoKTtcclxuXHRcdHRoaXMuaW5pdFBsYXllcigpO1xyXG5cdFx0dGhpcy5hZGRLZXlMaXN0ZW5lcnMoKTtcclxuXHRcdHRoaXMuaW5pdFBsYXllck1vdmVyKCk7XHJcblx0XHR0aGlzLmluaXRDb2xsaXNpb25PYmplY3RzU29ydGVyKCk7XHJcblx0XHR0aGlzLmxhdW5jaFRpY2tlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0UGxheWVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wbGF5ZXIueCA9IDUwO1xyXG5cdFx0dGhpcy5fcGxheWVyLnkgPSB0aGlzLmggLSB0aGlzLl9wbGF5ZXIuaGVpZ2h0IC0gMjAwO1xyXG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9wbGF5ZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0QmxvY2tzKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9sZXZlbERhdGEuYmxvY2tzLmZvckVhY2goKGJsb2NrRGF0YTpJQmxvY2spID0+IHtcclxuXHRcdFx0dGhpcy5pbml0QmxvY2soYmxvY2tEYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0QmxvY2soYmxvY2tEYXRhOklCbG9jayk6dm9pZCB7XHJcblx0XHRjb25zdCBibG9ja1R5cGVEYXRhOklUeXBlID0gdGhpcy5fYmxvY2tzVHlwZXNEYXRhLmdldChibG9ja0RhdGEudHlwZSk7XHJcblx0XHRjb25zdCBibG9jazpCbG9jayA9IG5ldyBCbG9jayhibG9ja0RhdGEsIGJsb2NrVHlwZURhdGEpO1xyXG5cdFx0YmxvY2sueCA9IGJsb2NrRGF0YS54IC0gYmxvY2tUeXBlRGF0YS5jb2xsaXNpb24ubGVmdDtcclxuXHRcdGJsb2NrLnkgPSBibG9ja0RhdGEueSAtIGJsb2NrVHlwZURhdGEuY29sbGlzaW9uLnRvcDtcclxuXHRcdHRoaXMuYWRkQ2hpbGQoYmxvY2spO1xyXG5cdFx0dGhpcy5fYmxvY2tzLnB1c2goYmxvY2spO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhZGRLZXlMaXN0ZW5lcnMoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2tleURvd25DYWxsYmFjayA9IFdpbmRvd0V2ZW50cy5hZGQoXHJcblx0XHRcdFdpbmRvd0V2ZW50cy5LRVlfRE9XTixcclxuXHRcdFx0KGU6S2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMua2V5RG93bkhhbmRsZXIoZSk7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuX2tleVVwQ2FsbGJhY2sgPSBXaW5kb3dFdmVudHMuYWRkKFxyXG5cdFx0XHRXaW5kb3dFdmVudHMuS0VZX1VQLFxyXG5cdFx0XHQoZTpLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5rZXlVcEhhbmRsZXIoZSk7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW1vdmVLZXlMaXN0ZW5lcnMoKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9rZXlEb3duQ2FsbGJhY2spIHtcclxuXHRcdFx0V2luZG93RXZlbnRzLnJlbW92ZShXaW5kb3dFdmVudHMuS0VZX0RPV04sIHRoaXMuX2tleURvd25DYWxsYmFjayk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fa2V5VXBDYWxsYmFjaykge1xyXG5cdFx0XHRXaW5kb3dFdmVudHMucmVtb3ZlKFdpbmRvd0V2ZW50cy5LRVlfVVAsIHRoaXMuX2tleVVwQ2FsbGJhY2spO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0UGxheWVyTW92ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BsYXllck1vdmVyID0gbmV3IFBsYXllck1vdmVyKHRoaXMuX3BsYXllciwgdGhpcy5fYmxvY2tzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdENvbGxpc2lvbk9iamVjdHNTb3J0ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbk9iamVjdHNTb3J0ZXIgPSBuZXcgQ29sbGlzaW9uT2JqZWN0c1NvcnRlcih0aGlzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbGF1bmNoVGlja2VyKCk6dm9pZCB7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAudGlja2VyLmFkZCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucmVmcmVzaFBsYXllclNwZWVkWCgpO1xyXG5cdFx0XHR0aGlzLnJlZnJlc2hQbGF5ZXJTcGVlZFkoKTtcclxuXHRcdFx0dGhpcy5fcGxheWVyTW92ZXIucmVmcmVzaCgpO1xyXG5cdFx0XHRpZiAoR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpIHtcclxuXHRcdFx0XHR0aGlzLnJlZnJlc2hDb2xsaXNpb25SZWN0YW5nbGVzKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fY29sbGlzaW9uT2JqZWN0c1NvcnRlci5zb3J0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoQ29sbGlzaW9uUmVjdGFuZ2xlcygpOnZvaWQge1xyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBoaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGkgIT0gaiAmJlxyXG5cdFx0XHRcdFx0SGl0VGVzdC5ob3Jpem9udGFsKHRoaXMuX2Jsb2Nrc1tpXSwgdGhpcy5fYmxvY2tzW2pdKSAmJlxyXG5cdFx0XHRcdFx0SGl0VGVzdC52ZXJ0aWNhbCh0aGlzLl9ibG9ja3NbaV0sIHRoaXMuX2Jsb2Nrc1tqXSlcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGhpdCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fYmxvY2tzW2ldLnNob3dCbG9ja0hpdChoaXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoUGxheWVyU3BlZWRYKCk6dm9pZCB7XHJcblx0XHRjb25zdCBzbG93ZG93bjpib29sZWFuID0gIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfTEVGVCkgJiYgIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfUklHSFQpO1xyXG5cdFx0aWYgKCFzbG93ZG93biB8fCBNYXRoLmFicyh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkpID4gLjEpIHtcclxuXHRcdFx0bGV0IGRpcmVjdGlvbjogbnVtYmVyO1xyXG5cdFx0XHRpZiAodGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9MRUZUKSAmJiB0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX1JJR0hUKSkge1xyXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHRoaXMuX2xhc3RQcmVzc2VkRGlyZWN0aW9uQnV0dG9uID09IEtFWV9MRUZUID8gLTEgOiAxO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsb3dkb3duKSB7XHJcblx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy5fcGxheWVyLmdldFNwZWVkWCgpID4gMCA/IC0xIDogMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX0xFRlQpID8gLTEgOiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBkaXN0YW5jZTogbnVtYmVyO1xyXG5cdFx0XHRpZiAoc2xvd2Rvd24pIHtcclxuXHRcdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGlzdGFuY2UgPSBQbGF5ZXIuTUFYX01PVklOR19TUEVFRCAtIHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSAqIGRpcmVjdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRYKHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSArIGRpc3RhbmNlICogZGlyZWN0aW9uICogUGxheWVyLk1PVklOR19BQ0NFTEVSQVRJT05fRkFDVE9SKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFgoMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlZnJlc2hQbGF5ZXJTcGVlZFkoKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9wbGF5ZXIub25UaGVGbG9vciAmJiB0aGlzLl9qdW1wKSB7XHJcblx0XHRcdHRoaXMuX2p1bXAgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWShQbGF5ZXIuSlVNUF9TUEVFRCk7XHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLl9wbGF5ZXIub25UaGVGbG9vciAmJiAhdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9VUCkgJiYgdGhpcy5fcGxheWVyLmdldFNwZWVkWSgpIDwgMCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSArIE1hdGgubWluKC10aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCksIFBsYXllci5KVU1QX1NMT1dET1dOKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSArIFBsYXllci5HUkFWSVRZKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUga2V5RG93bkhhbmRsZXIoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcclxuXHRcdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRcdGNhc2UgS0VZX0xFRlQ6XHJcblx0XHRcdGNhc2UgS0VZX1JJR0hUOlxyXG5cdFx0XHRcdHRoaXMuX2xhc3RQcmVzc2VkRGlyZWN0aW9uQnV0dG9uID0gZS5jb2RlO1xyXG5cdFx0XHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLnNldChlLmNvZGUsIHRydWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfVVA6XHJcblx0XHRcdFx0aWYgKCF0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoZS5jb2RlKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fanVtcCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLl9wcmVzc2VkQnV0dG9ucy5zZXQoZS5jb2RlLCB0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9CQUNLUVVPVEU6XHJcblx0XHRcdFx0R2xvYmFscy5zZXREZXZlbG9wZXJNb2RlKCFHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSk7XHJcblx0XHRcdFx0aWYgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVuYWJsZURldmVsb3Blck1vZGUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlRGV2ZWxvcGVyTW9kZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkRldmVsb3BlciBtb2RlIGlzIFwiICsgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpID8gXCJPTlwiIDogXCJPRkZcIikpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfSjpcclxuXHRcdFx0XHR0aGlzLnByaW50TGV2ZWxKc29uKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGVuYWJsZURldmVsb3Blck1vZGUoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BsYXllci5zaG93Q29sbGlzaW9uUmVjdGFuZ2xlKDB4MDBmZjAwKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKChibG9jazpCbG9jaykgPT4ge1xyXG5cdFx0XHRibG9jay5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGJsb2NrLmFkZExpc3RlbmVyKFBPSU5URVJfRE9XTiwgdGhpcy5ibG9ja1BvaW50ZXJEb3duSGFuZGxlciwgdGhpcyk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYmxvY2tQb2ludGVyRG93bkhhbmRsZXIoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHRjb25zdCBjdXJyZW50QmxvY2s6QmxvY2sgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBCbG9jayk7XHJcblx0XHRjb25zdCBwb2ludGVyRG93blBvaW50OlBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmRhdGEuZ2xvYmFsLngsIGV2ZW50LmRhdGEuZ2xvYmFsLnkpO1xyXG5cdFx0Y3VycmVudEJsb2NrLmxvY2FsRHJhZ1BvaW50ID0gY3VycmVudEJsb2NrLnRvTG9jYWwocG9pbnRlckRvd25Qb2ludCk7XHJcblx0XHRjdXJyZW50QmxvY2suYWRkTGlzdGVuZXIoUE9JTlRFUl9NT1ZFLCB0aGlzLmJsb2NrUG9pbnRlck1vdmVIYW5kbGVyLCB0aGlzKTtcclxuXHRcdGN1cnJlbnRCbG9jay5hZGRMaXN0ZW5lcihQT0lOVEVSX1VQLCB0aGlzLmJsb2NrUG9pbnRlclVwSGFuZGxlciwgdGhpcyk7XHJcblx0XHRjdXJyZW50QmxvY2suYWRkTGlzdGVuZXIoUE9JTlRFUl9VUF9PVVRTSURFLCB0aGlzLmJsb2NrUG9pbnRlclVwSGFuZGxlciwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlck1vdmVIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudEJsb2NrOkJsb2NrID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgQmxvY2spO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyRHJhZ1BvaW50OlBvaW50ID0gdGhpcy50b0xvY2FsKG5ldyBQb2ludChldmVudC5kYXRhLmdsb2JhbC54LCBldmVudC5kYXRhLmdsb2JhbC55KSk7XHJcblx0XHRjdXJyZW50QmxvY2sueCA9IE1hdGgucm91bmQoY29udGFpbmVyRHJhZ1BvaW50LnggLSBjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQueCk7XHJcblx0XHRjdXJyZW50QmxvY2sueSA9IE1hdGgucm91bmQoY29udGFpbmVyRHJhZ1BvaW50LnkgLSBjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQueSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlclVwSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRCbG9jazpCbG9jayA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEJsb2NrKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9NT1ZFKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9VUCk7XHJcblx0XHRjdXJyZW50QmxvY2sucmVtb3ZlQWxsTGlzdGVuZXJzKFBPSU5URVJfVVBfT1VUU0lERSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRpc2FibGVEZXZlbG9wZXJNb2RlKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wbGF5ZXIuaGlkZUNvbGxpc2lvblJlY3RhbmdsZSgpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goKGJsb2NrOkJsb2NrKSA9PiB7XHJcblx0XHRcdGJsb2NrLmludGVyYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdGJsb2NrLmhpZGVCbG9ja0hpdCgpO1xyXG5cdFx0XHRibG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcmludExldmVsSnNvbigpOnZvaWQge1xyXG5cdFx0Y29uc3QgYWRkZWRUeXBlczpTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cdFx0Y29uc3QgdHlwZXNEYXRhOklUeXBlW10gPSBbXTtcclxuXHRcdGNvbnN0IGJsb2Nrc0RhdGE6SUJsb2NrW10gPSBbXTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKChibG9jazpCbG9jaykgPT4ge1xyXG5cdFx0XHRpZiAoIWFkZGVkVHlwZXMuaGFzKGJsb2NrLmdldFR5cGVEYXRhKCkuaWQpKSB7XHJcblx0XHRcdFx0dHlwZXNEYXRhLnB1c2goYmxvY2suZ2V0VHlwZURhdGEoKSk7XHJcblx0XHRcdFx0YWRkZWRUeXBlcy5hZGQoYmxvY2suZ2V0VHlwZURhdGEoKS5pZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YmxvY2tzRGF0YS5wdXNoKHtcclxuXHRcdFx0XHQuLi5ibG9jay5nZXREYXRhKCksXHJcblx0XHRcdFx0eDogYmxvY2suY29sbGlzaW9uTGVmdCgpLFxyXG5cdFx0XHRcdHk6IGJsb2NrLmNvbGxpc2lvblRvcCgpLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhOklMZXZlbCA9IHtcclxuXHRcdFx0Li4udGhpcy5fbGV2ZWxEYXRhLFxyXG5cdFx0XHR0eXBlczp0eXBlc0RhdGEsXHJcblx0XHRcdGJsb2NrczpibG9ja3NEYXRhLFxyXG5cdFx0fTtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxldmVsRGF0YSkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBrZXlVcEhhbmRsZXIoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcclxuXHRcdGlmIChlLmNvZGUgPT0gS0VZX1VQKSB7XHJcblx0XHRcdHRoaXMuX2p1bXAgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0XHRjYXNlIEtFWV9VUDpcclxuXHRcdFx0Y2FzZSBLRVlfTEVGVDpcclxuXHRcdFx0Y2FzZSBLRVlfUklHSFQ6XHJcblx0XHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGUuY29kZSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbGxpc2lvbk9iamVjdCB7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBMRUZUX1NLSU5fTkFNRTpzdHJpbmcgPSBcImltZy9wbGF5ZXJfbGVmdC5wbmdcIjtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJJR0hUX1NLSU5fTkFNRTpzdHJpbmcgPSBcImltZy9wbGF5ZXJfcmlnaHQucG5nXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBHUkFWSVRZOm51bWJlciA9IDAuNjtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEpVTVBfU1BFRUQ6bnVtYmVyID0gLTE2O1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSlVNUF9TTE9XRE9XTjpudW1iZXIgPSAyLjU7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBNQVhfTU9WSU5HX1NQRUVEOm51bWJlciA9IDg7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBNT1ZJTkdfQUNDRUxFUkFUSU9OX0ZBQ1RPUjpudW1iZXIgPSAuNDtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExFRlQ6c3ltYm9sID0gU3ltYm9sKCk7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSSUdIVDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHJcblx0cHVibGljIG9uVGhlRmxvb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIF9zcGVlZFg6bnVtYmVyID0gMDtcclxuXHRwcml2YXRlIF9zcGVlZFk6bnVtYmVyID0gMDtcclxuXHRwcml2YXRlIF9za2luOlNwcml0ZTtcclxuXHRwcml2YXRlIF9za2luRGlyZWN0aW9uOnN5bWJvbDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pbml0U2tpbigpO1xyXG5cdFx0dGhpcy5zZXRMb2NhbENvbGxpc2lvblZhbHVlcygxMCwgNDAsIDEwLCA5MCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRTa2luKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9za2luRGlyZWN0aW9uID0gUGxheWVyLlJJR0hUO1xyXG5cdFx0dGhpcy5yZWZyZXNoU2tpbigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFNwZWVkWCh2YWx1ZTpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5fc3BlZWRYID0gdmFsdWU7XHJcblx0XHR0aGlzLnJlZnJlc2hTa2luRGlyZWN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0U3BlZWRYKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9zcGVlZFg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0U3BlZWRZKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHR0aGlzLl9zcGVlZFkgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRTcGVlZFkoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NwZWVkWTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaFNraW5EaXJlY3Rpb24oKTp2b2lkIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5fc2tpbkRpcmVjdGlvbiA9PSBQbGF5ZXIuUklHSFQgJiYgdGhpcy5fc3BlZWRYIDwgMCB8fFxyXG5cdFx0XHR0aGlzLl9za2luRGlyZWN0aW9uID09IFBsYXllci5MRUZUICYmIHRoaXMuX3NwZWVkWCA+IDBcclxuXHRcdCkge1xyXG5cdFx0XHRpZiAodGhpcy5fc3BlZWRYID4gMCkge1xyXG5cdFx0XHRcdHRoaXMuX3NraW5EaXJlY3Rpb24gPSBQbGF5ZXIuUklHSFQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fc2tpbkRpcmVjdGlvbiA9IFBsYXllci5MRUZUO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucmVmcmVzaFNraW4oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaFNraW4oKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9za2luKSB7XHJcblx0XHRcdHRoaXMuX3NraW4ucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3NraW4pO1xyXG5cdFx0fVxyXG5cdFx0c3dpdGNoICh0aGlzLl9za2luRGlyZWN0aW9uKSB7XHJcblx0XHRcdGNhc2UgUGxheWVyLlJJR0hUOlxyXG5cdFx0XHRcdHRoaXMuX3NraW4gPSBTcHJpdGUuZnJvbShQbGF5ZXIuUklHSFRfU0tJTl9OQU1FKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgUGxheWVyLkxFRlQ6XHJcblx0XHRcdFx0dGhpcy5fc2tpbiA9IFNwcml0ZS5mcm9tKFBsYXllci5MRUZUX1NLSU5fTkFNRSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fc2tpbikge1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3NraW4pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNb3ZlciB7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSE9SSVpPTlRBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBWRVJUSUNBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyLFxyXG5cdFx0cHJpdmF0ZSBfYmxvY2tzOkJsb2NrW10sXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVmcmVzaCgpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSAhPT0gMCkge1xyXG5cdFx0XHR0aGlzLm1vdmUoXHJcblx0XHRcdFx0UGxheWVyTW92ZXIuSE9SSVpPTlRBTCxcclxuXHRcdFx0XHR0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCksXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWCgwKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fcGxheWVyLmdldFNwZWVkWSgpICE9PSAwKSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci5vblRoZUZsb29yID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubW92ZShcclxuXHRcdFx0XHRQbGF5ZXJNb3Zlci5WRVJUSUNBTCxcclxuXHRcdFx0XHR0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCksXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSA+IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fcGxheWVyLm9uVGhlRmxvb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWSgwKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlKFxyXG5cdFx0ZGlyZWN0aW9uOnN5bWJvbCxcclxuXHRcdHNwZWVkOm51bWJlcixcclxuXHRcdG9uTGltaXRQb3NpdGlvbjooKSA9PiB2b2lkID0gbnVsbFxyXG5cdCk6dm9pZCB7XHJcblx0XHRsZXQgbGltaXRQb3NpdGlvbjpudW1iZXIgPSBudWxsO1xyXG5cdFx0bGV0IHRhcmdldFBvc2l0aW9uOm51bWJlciA9IHRoaXMuZ2V0UG9zaXRpb24oZGlyZWN0aW9uKSArIHNwZWVkO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goKGJsb2NrOkJsb2NrKSA9PiB7XHJcblx0XHRcdGxldCBibG9ja0xpbWl0UG9zaXRpb246bnVtYmVyID0gdGhpcy5jYWxjdWxhdGVCbG9ja0xpbWl0UG9zaXRpb24oYmxvY2ssIGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRQb3NpdGlvbihkaXJlY3Rpb24pIDw9IGJsb2NrTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0dGFyZ2V0UG9zaXRpb24gPiBibG9ja0xpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdHRoaXMuaGl0VGVzdChkaXJlY3Rpb24sIHRoaXMuX3BsYXllciwgYmxvY2spXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRsaW1pdFBvc2l0aW9uID0gbGltaXRQb3NpdGlvbiAhPT0gbnVsbCA/IE1hdGgubWluKGxpbWl0UG9zaXRpb24sIGJsb2NrTGltaXRQb3NpdGlvbikgOiBibG9ja0xpbWl0UG9zaXRpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHRoaXMuZ2V0UG9zaXRpb24oZGlyZWN0aW9uKSA+PSBibG9ja0xpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdHRhcmdldFBvc2l0aW9uIDwgYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGJsb2NrKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0bGltaXRQb3NpdGlvbiA9IGxpbWl0UG9zaXRpb24gIT09IG51bGwgPyBNYXRoLm1heChsaW1pdFBvc2l0aW9uLCBibG9ja0xpbWl0UG9zaXRpb24pIDogYmxvY2tMaW1pdFBvc2l0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRpZiAobGltaXRQb3NpdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnNldFBvc2l0aW9uKGRpcmVjdGlvbiwgbGltaXRQb3NpdGlvbik7XHJcblx0XHRcdGlmIChvbkxpbWl0UG9zaXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRvbkxpbWl0UG9zaXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIHRhcmdldFBvc2l0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCwgdmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIueCA9IHZhbHVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnkgPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCk6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLng7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLnk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZUJsb2NrTGltaXRQb3NpdGlvbihibG9jazpDb2xsaXNpb25PYmplY3QsIGRpcmVjdGlvbjpzeW1ib2wsIHNwZWVkOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIGJsb2NrLmNvbGxpc2lvbkxlZnQoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblJpZ2h0KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGJsb2NrLmNvbGxpc2lvblJpZ2h0KCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gYmxvY2suY29sbGlzaW9uVG9wKCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Cb3R0b20oKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gYmxvY2suY29sbGlzaW9uQm90dG9tKCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoaXRUZXN0KGRpcmVjdGlvbjpzeW1ib2wsIG9iamVjdDE6Q29sbGlzaW9uT2JqZWN0LCBvYmplY3QyOkNvbGxpc2lvbk9iamVjdCk6Ym9vbGVhbiB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0cmV0dXJuIEhpdFRlc3QudmVydGljYWwob2JqZWN0MSwgb2JqZWN0Mik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gSGl0VGVzdC5ob3Jpem9udGFsKG9iamVjdDEsIG9iamVjdDIpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7SUxldmVsLCBJTGV2ZWxJbmZvfSBmcm9tIFwiLi4vSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgUmFuZG9tIGZyb20gXCIuLi91dGlscy9SYW5kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsc01hbmFnZXIge1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9sZXZlbEJ5SWQ6TWFwPG51bWJlciwgSUxldmVsSW5mbz4gPSBuZXcgTWFwPG51bWJlciwgSUxldmVsSW5mbz4oKTtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbGV2ZWxzSWRzOm51bWJlcltdID0gW107XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkTGV2ZWwobGV2ZWxJbmZvOklMZXZlbEluZm8pOnZvaWQge1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5fbGV2ZWxzSWRzLnB1c2gobGV2ZWxJbmZvLmlkKTtcclxuXHRcdExldmVsc01hbmFnZXIuX2xldmVsQnlJZC5zZXQobGV2ZWxJbmZvLmlkLCBsZXZlbEluZm8pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhZGRMZXZlbERhdGEobGV2ZWxJZDpudW1iZXIsIGRhdGE6SUxldmVsKTp2b2lkIHtcclxuXHRcdGNvbnN0IGxldmVsSW5mbzpJTGV2ZWxJbmZvID0gTGV2ZWxzTWFuYWdlci5fbGV2ZWxCeUlkLmdldChsZXZlbElkKTtcclxuXHRcdGlmIChsZXZlbEluZm8pIHtcclxuXHRcdFx0bGV2ZWxJbmZvLmRhdGEgPSBkYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRMZXZlbChsZXZlbElkOm51bWJlcik6SUxldmVsSW5mbyB7XHJcblx0XHRyZXR1cm4gTGV2ZWxzTWFuYWdlci5fbGV2ZWxCeUlkLmdldChsZXZlbElkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgbGV2ZWxzTnVtKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBMZXZlbHNNYW5hZ2VyLl9sZXZlbHNJZHMubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRSYW5kb21MZXZlbElkKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBSYW5kb20uY2hvb3NlLmFwcGx5KG51bGwsIExldmVsc01hbmFnZXIuX2xldmVsc0lkcyk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RSZXF1ZXN0IHtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc3VjY2Vzc1JlcXVlc3RzSWRzOlNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2V4ZWN1dGluZ1VuaXF1ZVJlcXVlc3RzOk1hcDxzdHJpbmcsIEFic3RyYWN0UmVxdWVzdD4gPSBuZXcgTWFwPHN0cmluZywgQWJzdHJhY3RSZXF1ZXN0PigpO1xyXG5cclxuXHRwcm90ZWN0ZWQgX3JlcXVlc3RJZDpzdHJpbmcgPSBudWxsO1xyXG5cdHByaXZhdGUgX3JlcXVlc3RQcm9taXNlOlByb21pc2U8dm9pZD47XHJcblxyXG5cdHB1YmxpYyBjcmVhdGVQcm9taXNlKGZvcmNlZFJlcXVlc3Q6Ym9vbGVhbiA9IGZhbHNlKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGlmICh0aGlzLl9yZXF1ZXN0SWQgIT09IG51bGwpIHtcclxuXHRcdFx0aWYgKGZvcmNlZFJlcXVlc3QpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVVbmlxdWVSZXF1ZXN0UHJvbWlzZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChBYnN0cmFjdFJlcXVlc3QuX3N1Y2Nlc3NSZXF1ZXN0c0lkcy5oYXModGhpcy5fcmVxdWVzdElkKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRW1wdHlQcm9taXNlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnN0IHVuaXF1ZVJlcXVlc3Q6QWJzdHJhY3RSZXF1ZXN0ID0gQWJzdHJhY3RSZXF1ZXN0Ll9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0cy5nZXQodGhpcy5fcmVxdWVzdElkKTtcclxuXHRcdFx0XHRcdGlmICh1bmlxdWVSZXF1ZXN0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVdhaXRQcm9taXNlKHVuaXF1ZVJlcXVlc3QpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlVW5pcXVlUmVxdWVzdFByb21pc2UoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnJlcXVlc3RQcm9taXNlRmFjdG9yeSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFJlcXVlc3RQcm9taXNlKCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVxdWVzdFByb21pc2U7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUVtcHR5UHJvbWlzZSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcblx0XHRcdHJlc29sdmUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVXYWl0UHJvbWlzZSh1bmlxdWVSZXF1ZXN0OkFic3RyYWN0UmVxdWVzdCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR1bmlxdWVSZXF1ZXN0LmdldFJlcXVlc3RQcm9taXNlKClcclxuXHRcdFx0XHQudGhlbigoKSA9PiByZXNvbHZlKCkpXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IHJlamVjdCgpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVVbmlxdWVSZXF1ZXN0UHJvbWlzZSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0QWJzdHJhY3RSZXF1ZXN0Ll9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0cy5zZXQodGhpcy5fcmVxdWVzdElkLCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRoaXMuX3JlcXVlc3RQcm9taXNlID0gdGhpcy5yZXF1ZXN0UHJvbWlzZUZhY3RvcnkoKTtcclxuXHRcdFx0dGhpcy5fcmVxdWVzdFByb21pc2VcclxuXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHRBYnN0cmFjdFJlcXVlc3QuX2V4ZWN1dGluZ1VuaXF1ZVJlcXVlc3RzLmRlbGV0ZSh0aGlzLl9yZXF1ZXN0SWQpO1xyXG5cdFx0XHRcdFx0QWJzdHJhY3RSZXF1ZXN0Ll9zdWNjZXNzUmVxdWVzdHNJZHMuYWRkKHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdFx0QWJzdHJhY3RSZXF1ZXN0Ll9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0cy5kZWxldGUodGhpcy5fcmVxdWVzdElkKTtcclxuXHRcdFx0XHRcdHJlamVjdCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVxdWVzdFByb21pc2VGYWN0b3J5KCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn0iLCJpbXBvcnQgTG9hZGVyID0gUElYSS5sb2FkZXJzLkxvYWRlcjtcclxuaW1wb3J0IE1pbmlTaWduYWxCaW5kaW5nID0gUElYSS5NaW5pU2lnbmFsQmluZGluZztcclxuaW1wb3J0IExvYWRlck9wdGlvbnMgPSBQSVhJLmxvYWRlcnMuTG9hZGVyT3B0aW9ucztcclxuaW1wb3J0IFJlc291cmNlID0gUElYSS5sb2FkZXJzLlJlc291cmNlO1xyXG5pbXBvcnQgQWJzdHJhY3RSZXF1ZXN0IGZyb20gXCIuL0Fic3RyYWN0UmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGl4aVJlcXVlc3QgZXh0ZW5kcyBBYnN0cmFjdFJlcXVlc3Qge1xyXG5cdHByaXZhdGUgX3Jlc3VsdDphbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfdXJsOnN0cmluZyxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9yZXF1ZXN0SWQgPSBcIlBpeGlSZXF1ZXN0OjpcIiArIHRoaXMuX3VybDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRSZXN1bHQoKTphbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Jlc3VsdDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZXF1ZXN0UHJvbWlzZUZhY3RvcnkoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IGxvYWRlcjpMb2FkZXIgPSBuZXcgTG9hZGVyKCk7XHJcblxyXG5cdFx0XHRsZXQgc3VjY2Vzczpib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdGNvbnN0IG9uTG9hZFNpZ25hbDpNaW5pU2lnbmFsQmluZGluZyA9IGxvYWRlci5vbkxvYWQuYWRkKCgpID0+IHtcclxuXHRcdFx0XHRzdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsZXQgZXJyb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRsZXQgZXJyb3JNZXNzYWdlOnN0cmluZztcclxuXHRcdFx0Y29uc3Qgb25FcnJvclNpZ25hbDpNaW5pU2lnbmFsQmluZGluZyA9IGxvYWRlci5vbkVycm9yLmFkZCgoZGF0YTphbnkpID0+IHtcclxuXHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0ZXJyb3JNZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGxldCBvbkNvbXBsZXRlU2lnbmFsOk1pbmlTaWduYWxCaW5kaW5nO1xyXG5cdFx0XHRvbkNvbXBsZXRlU2lnbmFsID0gbG9hZGVyLm9uQ29tcGxldGUuYWRkKCgpID0+IHtcclxuXHRcdFx0XHRvbkxvYWRTaWduYWwuZGV0YWNoKCk7XHJcblx0XHRcdFx0b25FcnJvclNpZ25hbC5kZXRhY2goKTtcclxuXHRcdFx0XHRvbkNvbXBsZXRlU2lnbmFsLmRldGFjaCgpO1xyXG5cdFx0XHRcdGlmIChzdWNjZXNzICYmICFlcnJvcikge1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVzdWx0ID0gbG9hZGVyLnJlc291cmNlc1t0aGlzLl91cmxdPy5kYXRhOyAvLyDQodC+0YXRgNCw0L3Rj9C10Lwg0YDQtdC30YPQu9GM0YLQsNGCXHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHJlc291cmNlOlwiLCBlcnJvck1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGxvYWRlck9wdGlvbnM6TG9hZGVyT3B0aW9ucyA9IHt9O1xyXG5cdFx0XHRsb2FkZXJPcHRpb25zLmNyb3NzT3JpZ2luID0gZmFsc2U7XHJcblx0XHRcdGxvYWRlck9wdGlvbnMubG9hZFR5cGUgPSBSZXNvdXJjZS5MT0FEX1RZUEUuWEhSO1xyXG5cclxuXHRcdFx0bG9hZGVyLmFkZCh0aGlzLl91cmwsIHRoaXMuX3VybCwgbG9hZGVyT3B0aW9ucyk7XHJcblx0XHRcdGxvYWRlci5sb2FkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbWlzZXNHcm91cCB7XHJcblx0cHVibGljIHN0YXRpYyBwYWNrKGZhY3RvcmllczooKCkgPT4gUHJvbWlzZTx2b2lkPilbXSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuXHRcdFx0bGV0IGNvbXBsZXRlZENvdW50ZXI6bnVtYmVyID0gMDtcclxuXHRcdFx0ZmFjdG9yaWVzLmZvckVhY2goKGZhY3Rvcnk6KCkgPT4gUHJvbWlzZTx2b2lkPikgPT4ge1xyXG5cdFx0XHRcdGZhY3RvcnkoKVxyXG5cdFx0XHRcdFx0LmZpbmFsbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZWRDb3VudGVyKys7XHJcblx0XHRcdFx0XHRcdGlmIChjb21wbGV0ZWRDb3VudGVyID09IGZhY3Rvcmllcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBxdWV1ZShmYWN0b3JpZXM6KCgpID0+IFByb21pc2U8dm9pZD4pW10pOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0bGV0IGNvbXBsZXRlZENvdW50ZXI6bnVtYmVyID0gMDtcclxuXHRcdFx0Y3JlYXRlUHJvbWlzZSgpO1xyXG5cdFx0XHRmdW5jdGlvbiBjcmVhdGVQcm9taXNlKCk6dm9pZCB7XHJcblx0XHRcdFx0ZmFjdG9yaWVzW2NvbXBsZXRlZENvdW50ZXJdKClcclxuXHRcdFx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29tcGxldGVkQ291bnRlcisrO1xyXG5cdFx0XHRcdFx0XHRpZiAoY29tcGxldGVkQ291bnRlciA8IGZhY3Rvcmllcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGVQcm9taXNlKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tIHtcclxuXHRwdWJsaWMgc3RhdGljIGdlbkludGVnZXIobWluOm51bWJlciwgbWF4Om51bWJlcik6bnVtYmVyIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKFJhbmRvbS5nZW5OdW1iZXIobWluLCBtYXggKyAxKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdlbk51bWJlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuU3RyKGxlbmd0aDpudW1iZXIpOnN0cmluZyB7XHJcblx0XHRjb25zdCBjaGFyczpzdHJpbmdbXSA9IFtcclxuXHRcdFx0XCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCIsXHJcblx0XHRcdFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwibVwiLFxyXG5cdFx0XHRcIm5cIiwgXCJvXCIsIFwicFwiLCBcInFcIiwgXCJyXCIsIFwic1wiLCBcInRcIiwgXCJ1XCIsIFwidlwiLCBcIndcIiwgXCJ4XCIsIFwieVwiLCBcInpcIixcclxuXHRcdFx0XCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIiwgXCJNXCIsXHJcblx0XHRcdFwiTlwiLCBcIk9cIiwgXCJQXCIsIFwiUVwiLCBcIlJcIiwgXCJTXCIsIFwiVFwiLCBcIlVcIiwgXCJWXCIsIFwiV1wiLCBcIlhcIiwgXCJZXCIsIFwiWlwiLFxyXG5cdFx0XTtcclxuXHRcdGxldCByZXN1bHQ6c3RyaW5nID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlc3VsdCArPSBSYW5kb20uY2hvb3NlLmFwcGx5KFJhbmRvbSwgY2hhcnMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuQm9vbGVhbigpOmJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIFJhbmRvbS5jaG9vc2UodHJ1ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5Db2xvcigpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gUmFuZG9tLmdlbkludGVnZXIoMHgwMDAwMDAsIDB4ZmZmZmZmKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY2hvb3NlKC4uLmFyZ3M6YW55W10pOmFueSB7XHJcblx0XHRyZXR1cm4gYXJnc1tSYW5kb20uZ2VuSW50ZWdlcigwLCBhcmdzLmxlbmd0aCAtIDEpXTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93RXZlbnRzIHtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFU0laRTpzdHJpbmcgPSBcInJlc2l6ZVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS0VZX0RPV046c3RyaW5nID0gXCJrZXlkb3duXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBLRVlfVVA6c3RyaW5nID0gXCJrZXl1cFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFkZCh0eXBlOnN0cmluZywgY2FsbGJhY2s6KC4uLnBhcmFtczphbnlbXSkgPT4gdm9pZCk6KC4uLnBhcmFtczphbnlbXSkgPT4gdm9pZCB7XHJcblx0XHRjb25zdCB3OmFueSA9IHdpbmRvdztcclxuXHRcdGlmICh3LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdFx0dy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cdFx0fSBlbHNlIGlmICh3LmF0dGFjaEV2ZW50KSB7XHJcblx0XHRcdHcuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d1tcIm9uXCIgKyB0eXBlXSA9IGNhbGxiYWNrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNhbGxiYWNrO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyByZW1vdmUodHlwZTpzdHJpbmcsIGNhbGxiYWNrOiguLi5wYXJhbXM6YW55W10pID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IHc6YW55ID0gd2luZG93O1xyXG5cdFx0aWYgKHcucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHR3LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuXHRcdH0gZWxzZSBpZiAody5kZXRhY2hFdmVudCkge1xyXG5cdFx0XHR3LmRldGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGNhbGxiYWNrKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdbXCJvblwiICsgdHlwZV0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=