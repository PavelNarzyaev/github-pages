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
      this._mainContainer = new _MainContainer__WEBPACK_IMPORTED_MODULE_1__["default"](); // this._mainContainer.setSize(2032, 2032);

      this._mainContainer.setSize(1270, 720);

      this._mainContainer.showViewBackground(0x2b2d30, 1);

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
/* harmony import */ var _consts_PointerEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consts/PointerEvents */ "./src/consts/PointerEvents.ts");
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









var Point = PIXI.Point;

var MainContainer =
/*#__PURE__*/
function (_View) {
  _inherits(MainContainer, _View);

  function MainContainer() {
    var _this;

    _classCallCheck(this, MainContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainContainer).call(this));
    _this._player = new _level_Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    return _this;
  }

  _createClass(MainContainer, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(MainContainer.prototype), "init", this).call(this);

      this._level = new _level_Level__WEBPACK_IMPORTED_MODULE_2__["default"](this._player, function (levelId) {
        return _this2.setLevel(levelId);
      });

      this._level.showViewBackground(0x000000, 1);

      this.addChild(this._level);
      this.loading();
    }
  }, {
    key: "loading",
    value: function loading() {
      var _this3 = this;

      _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__["default"].pack([function () {
        return _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__["default"].queue([function () {
          return _this3.loadLevelsMetadata();
        }, function () {
          return _this3._level.loading();
        }]);
      }, function () {
        return _this3.loadLevel("level1");
      }, function () {
        return _this3.loadLevel("level2");
      }, function () {
        return _this3.loadLevel("level3");
      }, function () {
        return _this3.loadLevel("level4");
      }, function () {
        return _this3.loadLevel("level5");
      }, function () {
        return _this3.loadLevel("level6");
      }, function () {
        return _this3.loadLevel("level7");
      }, function () {
        return _this3.loadLevel("level8");
      }, function () {
        return _this3.loadLevel("level9");
      }, function () {
        return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](_level_Player__WEBPACK_IMPORTED_MODULE_1__["default"].SKIN_NAME).createPromise();
      }])["finally"](function () {
        _this3.completeLoadingHandler();
      });
    }
  }, {
    key: "loadLevelsMetadata",
    value: function loadLevelsMetadata() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var request, levelsMetadata;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"]("levels/metadata.json");
                _context.next = 3;
                return request.createPromise();

              case 3:
                levelsMetadata = request.getResult();
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].addLevelsMetadata(levelsMetadata);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "loadLevel",
    value: function loadLevel(fileName) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var request, levelData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                request = new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"]("levels/" + fileName + ".json");
                _context2.next = 3;
                return request.createPromise();

              case 3:
                levelData = request.getResult();
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].addLevel(levelData);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "completeLoadingHandler",
    value: function completeLoadingHandler() {
      this.setStartLevelAndPlayerPosition();
      _Globals__WEBPACK_IMPORTED_MODULE_3__["default"].getEmitter().addListener(_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].CHANGE_DEVELOPER_MODE_EVENT, this.changeDeveloperModeEventHandler, this);

      this._level.launchTicker();

      this.launchTicker();
    }
  }, {
    key: "setStartLevelAndPlayerPosition",
    value: function setStartLevelAndPlayerPosition() {
      // this.setLevel(9);
      // this._player.x = 100 - this._player.localCollisionLeft();
      // this._player.y = 614 - this._player.localCollisionTop();
      this.setLevel(1);
      this._player.x = 97;
      this._player.y = this._level.h - 270;
    }
  }, {
    key: "setLevel",
    value: function setLevel(levelId) {
      var levelData = _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].getLevel(levelId);

      this._level.setLevel(levelData);

      this._level.setSize(levelData.stage.width, levelData.stage.height);

      return levelData;
    }
  }, {
    key: "changeDeveloperModeEventHandler",
    value: function changeDeveloperModeEventHandler() {
      var background = this.getViewBackgroundIfExists();

      if (_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].getDeveloperMode()) {
        background.interactive = true;
        background.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_7__["POINTER_DOWN"], this.pointerDownHandler, this);
        background.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_7__["POINTER_MOVE"], this.pointerMoveHandler, this);
        background.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_7__["POINTER_UP"], this.pointerUpHandler, this);
        background.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_7__["POINTER_UP_OUTSIDE"], this.pointerUpOutside, this);
      } else {
        background.interactive = false;
        background.removeAllListeners();
      }
    }
  }, {
    key: "pointerDownHandler",
    value: function pointerDownHandler(event) {
      var localPoint = event.data.getLocalPosition(this, event.data.global);
      this._pointerDownPoint = new Point(localPoint.x, localPoint.y);
      this._pointerDownLevelPosition = new Point(this._level.x, this._level.y);
    }
  }, {
    key: "pointerMoveHandler",
    value: function pointerMoveHandler(event) {
      if (this._pointerDownPoint && this._pointerDownLevelPosition) {
        var localPoint = event.data.getLocalPosition(this, event.data.global);
        this._level.x = this._pointerDownLevelPosition.x + (localPoint.x - this._pointerDownPoint.x);
        this._level.y = this._pointerDownLevelPosition.y + (localPoint.y - this._pointerDownPoint.y);
      }
    }
  }, {
    key: "pointerUpHandler",
    value: function pointerUpHandler(event) {
      this.stopDrag();
    }
  }, {
    key: "pointerUpOutside",
    value: function pointerUpOutside(event) {
      this.stopDrag();
    }
  }, {
    key: "stopDrag",
    value: function stopDrag() {
      this._pointerDownPoint = null;
      this._pointerDownLevelPosition = null;
    }
  }, {
    key: "launchTicker",
    value: function launchTicker() {
      var _this4 = this;

      _Globals__WEBPACK_IMPORTED_MODULE_3__["default"].pixiApp.ticker.add(function () {
        if (_this4._level && !_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].getDeveloperMode()) {
          _this4._level.x = _this4.calculateLevelPosition(_this4.w, _this4._level.w, _this4._player.width, _this4._player.x);
          _this4._level.y = _this4.calculateLevelPosition(_this4.h, _this4._level.h, _this4._player.height, _this4._player.y);
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

var ViewWithBackground =
/*#__PURE__*/
function (_ResizableView) {
  _inherits(ViewWithBackground, _ResizableView);

  function ViewWithBackground() {
    _classCallCheck(this, ViewWithBackground);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewWithBackground).call(this));
  }

  _createClass(ViewWithBackground, [{
    key: "showViewBackground",
    value: function showViewBackground(color) {
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .5;

      if (!this._viewBackground) {
        this._viewBackground = new Graphics();
        this.addChildAt(this._viewBackground, 0);
        this._viewBackgroundColor = !Number.isNaN(color) ? color : _utils_Random__WEBPACK_IMPORTED_MODULE_0__["default"].genColor();
        this._viewBackgroundAlpha = alpha;

        if (this.w && this.h) {
          this.applySize();
        }
      }
    }
  }, {
    key: "applySize",
    value: function applySize() {
      _get(_getPrototypeOf(ViewWithBackground.prototype), "applySize", this).call(this);

      if (this._viewBackground) {
        this._viewBackground.clear();

        this._viewBackground.beginFill(this._viewBackgroundColor, this._viewBackgroundAlpha);

        this._viewBackground.drawRect(0, 0, this.w, this.h);

        this._viewBackground.endFill();
      }
    }
  }, {
    key: "getViewBackgroundIfExists",
    value: function getViewBackgroundIfExists() {
      return this._viewBackground;
    }
  }]);

  return ViewWithBackground;
}(ResizableView);

var ViewWithResizeTest =
/*#__PURE__*/
function (_ViewWithBackground) {
  _inherits(ViewWithResizeTest, _ViewWithBackground);

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
}(ViewWithBackground);



/***/ }),

/***/ "./src/consts/KeyboardCodes.ts":
/*!*************************************!*\
  !*** ./src/consts/KeyboardCodes.ts ***!
  \*************************************/
/*! exports provided: KEY_UP, KEY_LEFT, KEY_RIGHT, KEY_BACKQUOTE, KEY_J, KEY_DELETE, KEY_COMMA, KEY_PERIOD, KEY_N */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_UP", function() { return KEY_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEFT", function() { return KEY_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_RIGHT", function() { return KEY_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKQUOTE", function() { return KEY_BACKQUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_J", function() { return KEY_J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return KEY_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_COMMA", function() { return KEY_COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_PERIOD", function() { return KEY_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_N", function() { return KEY_N; });
var KEY_UP = "ArrowUp";
var KEY_LEFT = "ArrowLeft";
var KEY_RIGHT = "ArrowRight";
var KEY_BACKQUOTE = "Backquote";
var KEY_J = "KeyJ";
var KEY_DELETE = "Delete";
var KEY_COMMA = "Comma";
var KEY_PERIOD = "Period";
var KEY_N = "KeyN";

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
    _classCallCheck(this, CollisionObject);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollisionObject).call(this));
  }

  _createClass(CollisionObject, [{
    key: "setLocalCollisionValues",
    value: function setLocalCollisionValues(left, right, top, bottom) {
      this._localLeft = left;
      this._localRight = right;
      this._localTop = top;
      this._localBottom = bottom;
      this._localCenterX = left + Math.floor((right - left) / 2);
      this._localCenterY = top + Math.floor((bottom - top) / 2);
    }
  }, {
    key: "setOrder",
    value: function setOrder(value) {
      /*
      if (!this._debugText) {
          this._debugText = new Text();
          this.addChild(this._debugText);
      }
      this._debugText.text = value.toString();
      this._debugText.x = Math.floor(((this._localRight - this._localLeft) - this._debugText.width) / 2);
      this._debugText.y = this._localTop + Math.floor(((this._localBottom - this._localTop) - this._debugText.height) / 2);
      */
    }
  }, {
    key: "refreshPositionText",
    value: function refreshPositionText() {// this.showDebugText(this._collisionLeft + "x" + this._collisionTop);
    }
  }, {
    key: "showDebugText",
    value: function showDebugText(text) {
      if (!this._debugTextBackground) {
        this._debugTextBackground = new Graphics();
        this.addChild(this._debugTextBackground);
      }

      if (!this._debugText) {
        var textStyle = new PIXI.TextStyle({
          fill: "#ffffff",
          fontSize: 16
        });
        this._debugText = new PIXI.Text('', textStyle);
        this.addChild(this._debugText);
      }

      this._debugText.text = text;
      this._debugText.x = Math.floor((this._localRight - this._localLeft - this._debugText.width) / 2);
      this._debugText.y = this._localTop * 2 + Math.floor((this._localBottom - this._localTop - this._debugText.height) / 2);
      this._debugTextBackground.x = this._debugText.x;
      this._debugTextBackground.y = this._debugText.y;

      this._debugTextBackground.clear();

      this._debugTextBackground.beginFill(0x000000);

      this._debugTextBackground.drawRect(0, 0, this._debugText.width, this._debugText.height);

      this._debugTextBackground.endFill();
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
    key: "showSelection",
    value: function showSelection() {
      if (!this._selection || !this._selection.parent) {
        if (!this._selection) {
          this._selection = new Graphics();

          this._selection.beginFill(0xffffff);

          var centerPointX = this._localLeft + (this._localRight - this._localLeft) / 2;
          var centerPointY = this._localTop + (this._localBottom - this._localTop) / 2;
          var centerSquareSize = 10;

          this._selection.drawRect(centerPointX - centerSquareSize / 2, centerPointY - centerSquareSize / 2, centerSquareSize, centerSquareSize);
        }

        this.addChild(this._selection);
      }
    }
  }, {
    key: "hideSelection",
    value: function hideSelection() {
      if (this._selection && this._selection.parent) this._selection.parent.removeChild(this._selection);
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
    key: "localCollisionCenterX",
    value: function localCollisionCenterX() {
      return this._localCenterX;
    }
  }, {
    key: "localCollisionCenterY",
    value: function localCollisionCenterY() {
      return this._localCenterY;
    }
  }, {
    key: "collisionCenterX",
    value: function collisionCenterX() {
      return this._collisionCenterX;
    }
  }, {
    key: "collisionCenterY",
    value: function collisionCenterY() {
      return this._collisionCenterY;
    }
  }, {
    key: "x",
    set: function set(x) {
      _set(_getPrototypeOf(CollisionObject.prototype), "x", x, this, true);

      this._collisionLeft = x + this._localLeft;
      this._collisionRight = x + this._localRight;
      this._collisionCenterX = x + this._localCenterX;
      if (true) this.refreshPositionText();
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
      this._collisionCenterY = y + this._localCenterY;
      if (true) this.refreshPositionText();
    },
    get: function get() {
      return _get(_getPrototypeOf(CollisionObject.prototype), "y", this);
    }
  }]);

  return CollisionObject;
}(Container);



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
      this._collisionsLayer.children.sort(function (a, b) {
        var aCollision = a;
        var bCollision = b;

        if (aCollision.collisionCenterX() !== bCollision.collisionCenterX()) {
          return aCollision.collisionCenterX() - bCollision.collisionCenterX();
        }

        return bCollision.collisionCenterY() - aCollision.collisionCenterY();
      });

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
        oldArray[index].setOrder(newArray.length);
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
      } else if (hitH) {
        return a.collisionBottom() <= b.collisionTop();
      } else {
        return a.collisionLeft() >= b.collisionRight() && a.collisionBottom() <= b.collisionTop();
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
var Sprite = PIXI.Sprite;

var Level =
/*#__PURE__*/
function (_View) {
  _inherits(Level, _View);

  function Level(_player, _setLevelCallback) {
    var _this;

    _classCallCheck(this, Level);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Level).call(this));
    _this._player = _player;
    _this._setLevelCallback = _setLevelCallback;
    _this._pressedButtons = new Map();
    _this._jump = false;
    _this._blockTypeByTypeId = new Map();
    _this._blocksTypes = [];
    _this._blocks = [];
    _this._selectedBlock = null;
    return _this;
  }

  _createClass(Level, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Level.prototype), "init", this).call(this);

      this.addKeyListeners();
    }
  }, {
    key: "loading",
    value: function loading() {
      var _this2 = this;

      _model_LevelsManager__WEBPACK_IMPORTED_MODULE_12__["default"].getLevelsMetadata().types.forEach(function (typeData) {
        _this2._blockTypeByTypeId.set(typeData.id, typeData);

        _this2._blocksTypes.push(typeData);
      });
      var factories = [];

      this._blocksTypes.forEach(function (typeData) {
        if (typeData.image) {
          factories.push(function () {
            return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_10__["default"](typeData.image).createPromise();
          });
        }
      });

      return _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_11__["default"].pack(factories);
    }
  }, {
    key: "setLevel",
    value: function setLevel(levelData) {
      var _this3 = this;

      this._levelData = levelData;

      if (!this._collisionsLayer) {
        this._collisionsLayer = new Sprite();
        this.addChild(this._collisionsLayer);
        this.initCollisionObjectsSorter();
      }

      this.removeAllCollisionObjects();

      this._levelData.blocks.forEach(function (blockData) {
        _this3.createBlock(blockData);
      });

      if (!this._player.parent) this._collisionsLayer.addChild(this._player);
      if (!this._playerMover) this._playerMover = new _PlayerMover__WEBPACK_IMPORTED_MODULE_4__["default"](this._setLevelCallback);

      this._playerMover.setLevelData(this._player, this._blocks, this._levelData.stage, this._levelData.borders);
    }
  }, {
    key: "launchTicker",
    value: function launchTicker() {
      _Globals__WEBPACK_IMPORTED_MODULE_9__["default"].pixiApp.ticker.add(this.tick, this);
    }
  }, {
    key: "removeAllCollisionObjects",
    value: function removeAllCollisionObjects() {
      this._blocks.forEach(function (block) {
        return block.removeAllListeners();
      });

      this._selectedBlock = null;

      this._collisionsLayer.removeChildren();

      this._blocks.length = 0;
    }
  }, {
    key: "createBlock",
    value: function createBlock(blockData) {
      var blockTypeData = this._blockTypeByTypeId.get(blockData.type);

      var block = new _Block__WEBPACK_IMPORTED_MODULE_5__["default"](blockData, blockTypeData);
      block.x = blockData.x - blockTypeData.collision.left;
      block.y = blockData.y - blockTypeData.collision.top;

      this._collisionsLayer.addChild(block);

      this._blocks.push(block);

      if (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode()) {
        this.makeBlockInteractive(block);
      }

      return block;
    }
  }, {
    key: "addKeyListeners",
    value: function addKeyListeners() {
      var _this4 = this;

      _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_DOWN, function (e) {
        _this4.keyDownHandler(e);
      });
      _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_UP, function (e) {
        _this4.keyUpHandler(e);
      });
    }
  }, {
    key: "initCollisionObjectsSorter",
    value: function initCollisionObjectsSorter() {
      this._collisionObjectsSorter = new _CollisionObjectsSorter__WEBPACK_IMPORTED_MODULE_6__["default"](this._collisionsLayer);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.refreshPlayerSpeedX();
      this.refreshPlayerSpeedY();

      this._playerMover.refresh();

      if (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode()) {
        this.refreshCollisionRectangles();
      } else {
        this._collisionObjectsSorter.sort();
      }
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
        this._player.setSpeedY(_Player__WEBPACK_IMPORTED_MODULE_0__["default"].JUMP_SPEED);

        this._jump = false;
      } else if (!this._player.onTheFloor && !this._pressedButtons.get(_consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_UP"]) && this._player.getSpeedY() < 0) {
        this._player.setSpeedY(0);
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
          if (true) {
            _Globals__WEBPACK_IMPORTED_MODULE_9__["default"].setDeveloperMode(!_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode());

            if (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode()) {
              this.enableDeveloperMode();
            } else {
              this.disableDeveloperMode();
            }

            console.log("Developer mode is " + (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode() ? "ON" : "OFF"));
          }

          break;

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_J"]:
          if (true) {
            this.printLevelJson();
          }

          break;

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_DELETE"]:
          this.deleteSelectedBlockIfCan();
          break;

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_COMMA"]:
        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_PERIOD"]:
          if (this._selectedBlock != null) {
            var selectedBlockData = this._selectedBlock.getData();

            var selectedBlockTypeData = this._blockTypeByTypeId.get(selectedBlockData.type);

            var indexOfSelectedBlockType = this._blocksTypes.indexOf(selectedBlockTypeData);

            var nextTypeIndex = e.code == _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_COMMA"] ? indexOfSelectedBlockType - 1 : indexOfSelectedBlockType + 1;
            if (nextTypeIndex < 0) nextTypeIndex = this._blocksTypes.length - 1;else if (nextTypeIndex >= this._blocksTypes.length) nextTypeIndex = 0;
            selectedBlockData.x = this._selectedBlock.collisionLeft();
            selectedBlockData.y = this._selectedBlock.collisionTop();
            this.deleteSelectedBlockIfCan();
            selectedBlockData.type = this._blocksTypes[nextTypeIndex].id;
            this.selectBlock(this.createBlock(selectedBlockData));
          }

          break;

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_N"]:
          if (this._selectedBlock != null) {
            var newBlockShift = 20;
            var newBlockData = {
              type: this._selectedBlock.getTypeData().id,
              x: this._selectedBlock.collisionLeft() + newBlockShift,
              y: this._selectedBlock.collisionTop() - newBlockShift
            };
            this.selectBlock(this.createBlock(newBlockData));
          }

          break;

        default:
          console.log(e.code);
      }
    }
  }, {
    key: "selectBlock",
    value: function selectBlock(block) {
      if (this._selectedBlock == block) return;
      if (this._selectedBlock != null) this._selectedBlock.hideSelection();
      this._selectedBlock = block;

      this._selectedBlock.showSelection();
    }
  }, {
    key: "deleteSelectedBlockIfCan",
    value: function deleteSelectedBlockIfCan() {
      if (this._selectedBlock != null) {
        this._selectedBlock.removeAllListeners();

        this._selectedBlock.parent.removeChild(this._selectedBlock);

        var blockIndex = this._blocks.indexOf(this._selectedBlock);

        this._blocks.splice(blockIndex, 1);

        this._selectedBlock = null;
      }
    }
  }, {
    key: "enableDeveloperMode",
    value: function enableDeveloperMode() {
      var _this5 = this;

      this._player.showCollisionRectangle(0x00ff00);

      this._blocks.forEach(function (block) {
        return _this5.makeBlockInteractive(block);
      });
    }
  }, {
    key: "makeBlockInteractive",
    value: function makeBlockInteractive(block) {
      block.interactive = true;
      block.addListener(_consts_PointerEvents__WEBPACK_IMPORTED_MODULE_2__["POINTER_DOWN"], this.blockPointerDownHandler, this);
    }
  }, {
    key: "makeBlockNotInteractive",
    value: function makeBlockNotInteractive(block) {
      block.interactive = false;
      block.removeAllListeners();
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
      this.selectBlock(currentBlock);
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
      var _this6 = this;

      this._player.hideCollisionRectangle();

      this._blocks.forEach(function (block) {
        _this6.makeBlockNotInteractive(block);

        block.hideBlockHit();
        block.hideSelection();
        _this6._selectedBlock = null;
      });
    }
  }, {
    key: "printLevelJson",
    value: function printLevelJson() {
      var blocksData = [];

      this._collisionsLayer.children.forEach(function (collisionObject) {
        if (collisionObject instanceof _Block__WEBPACK_IMPORTED_MODULE_5__["default"]) {
          blocksData.push(Object.assign(Object.assign({}, collisionObject.getData()), {
            x: collisionObject.collisionLeft(),
            y: collisionObject.collisionTop()
          }));
        }
      });

      var levelData = Object.assign(Object.assign({}, this._levelData), {
        blocks: blocksData
      });
      var levelJson = JSON.stringify(levelData, null, 2);
      console.log(levelJson);
      void navigator.clipboard.writeText(levelJson);
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

    _this.addChild(Sprite.from(Player.SKIN_NAME));

    _this.setLocalCollisionValues(30, 157, 15, 142);

    return _this;
  }

  _createClass(Player, [{
    key: "setSpeedX",
    value: function setSpeedX(value) {
      this._speedX = value;
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
      var maxSpeedY = 30;
      return Math.min(this._speedY, maxSpeedY);
    }
  }]);

  return Player;
}(_CollisionObject__WEBPACK_IMPORTED_MODULE_0__["default"]);


Player.SKIN_NAME = "img/player.png";
Player.GRAVITY = 0.5886;
Player.JUMP_SPEED = -17;
Player.MAX_MOVING_SPEED = 8;
Player.MOVING_ACCELERATION_FACTOR = .4;

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
  function PlayerMover(_setLevelCallback) {
    _classCallCheck(this, PlayerMover);

    this._setLevelCallback = _setLevelCallback;
  }

  _createClass(PlayerMover, [{
    key: "setLevelData",
    value: function setLevelData(player, blocks, stage, borders) {
      this._player = player;
      this._playerCenterX = this._player.localCollisionCenterX() - this._player.localCollisionLeft();
      this._playerCenterY = this._player.localCollisionCenterY() + this._player.localCollisionTop();
      this._blocks = blocks;
      this._stage = stage;
      this._borders = borders;
    }
  }, {
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
      var currentPosition = this.getPosition(direction);
      var targetPosition = Math.floor(this.getPosition(direction) + speed);

      this._blocks.forEach(function (block) {
        var blockLimitPosition = _this2.calculateBlockLimitPosition(block, direction, speed);

        if (speed > 0) {
          if (currentPosition <= blockLimitPosition && targetPosition > blockLimitPosition && _this2.hitTest(direction, _this2._player, block)) {
            limitPosition = limitPosition !== null ? Math.min(limitPosition, blockLimitPosition) : blockLimitPosition;
          }
        } else {
          if (currentPosition >= blockLimitPosition && targetPosition < blockLimitPosition && _this2.hitTest(direction, _this2._player, block)) {
            limitPosition = limitPosition !== null ? Math.max(limitPosition, blockLimitPosition) : blockLimitPosition;
          }
        }
      });

      var stageLimitPosition = this.calculateStageLimitPosition(direction, speed, this._stage);

      if (speed > 0) {
        if (currentPosition <= stageLimitPosition && targetPosition > stageLimitPosition) {
          var border = this.getBorder(direction, speed);

          if (border > 0) {
            this.processBorder(border, direction, speed, targetPosition);
            return;
          } else {
            limitPosition = limitPosition !== null ? Math.min(limitPosition, stageLimitPosition) : stageLimitPosition;
          }
        }
      } else {
        if (currentPosition >= stageLimitPosition && targetPosition < stageLimitPosition) {
          var _border = this.getBorder(direction, speed);

          if (_border > 0) {
            this.processBorder(_border, direction, speed, targetPosition);
            return;
          } else {
            limitPosition = limitPosition !== null ? Math.max(limitPosition, stageLimitPosition) : stageLimitPosition;
          }
        }
      }

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
    key: "processBorder",
    value: function processBorder(border, direction, speed, targetPosition) {
      var newStage = this._setLevelCallback(border).stage;

      var stageLimitPosition = this.calculateStageLimitPosition(direction, speed, this._stage);
      var excessDistance = Math.abs(targetPosition - stageLimitPosition) - 1;
      var nextPlayerPosition = this.calculatePlayerPositionForTheNextLevel(direction, speed, newStage, excessDistance);
      this.setPosition(direction, nextPlayerPosition);
    }
  }, {
    key: "calculatePlayerPositionForTheNextLevel",
    value: function calculatePlayerPositionForTheNextLevel(direction, speed, stage, excessDistance) {
      var oppositeLimit = this.calculateStageLimitPosition(direction, speed * -1, stage);

      if (direction == PlayerMover.HORIZONTAL) {
        if (speed > 0) {
          return oppositeLimit + excessDistance;
        } else {
          return oppositeLimit - excessDistance;
        }
      } else {
        if (speed > 0) {
          return oppositeLimit + excessDistance;
        } else {
          return oppositeLimit - excessDistance;
        }
      }
    }
  }, {
    key: "getBorder",
    value: function getBorder(direction, speed) {
      if (direction == PlayerMover.HORIZONTAL) {
        return speed > 0 ? this._borders.right : this._borders.left;
      } else {
        return speed > 0 ? this._borders.bottom : this._borders.top;
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(direction, value) {
      if (direction == PlayerMover.HORIZONTAL) {
        this._player.x = Math.floor(value);
      } else {
        this._player.y = Math.floor(value);
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
    key: "calculateStageLimitPosition",
    value: function calculateStageLimitPosition(direction, speed, stage) {
      if (direction == PlayerMover.HORIZONTAL) {
        if (speed > 0) {
          return stage.width - this._playerCenterX;
        } else {
          return -this._playerCenterX;
        }
      } else {
        if (speed > 0) {
          return stage.height - this._playerCenterY;
        } else {
          return -this._playerCenterY;
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
    value: function addLevel(levelData) {
      LevelsManager._levelById.set(levelData.id, levelData);
    }
  }, {
    key: "addLevelsMetadata",
    value: function addLevelsMetadata(metadata) {
      LevelsManager._levelsMetadata = metadata;
    }
  }, {
    key: "getLevel",
    value: function getLevel(levelId) {
      return LevelsManager._levelById.get(levelId);
    }
  }, {
    key: "getLevelsMetadata",
    value: function getLevelsMetadata() {
      return LevelsManager._levelsMetadata;
    }
  }]);

  return LevelsManager;
}();


LevelsManager._levelById = new Map();

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
            _this2._result = (_a = loader.resources[_this2._url]) === null || _a === void 0 ? void 0 : _a.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWUvLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9NYWluQ29udGFpbmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvVmlldy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2NvbnN0cy9LZXlib2FyZENvZGVzLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvY29uc3RzL1BvaW50ZXJFdmVudHMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9CbG9jay50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0NvbGxpc2lvbk9iamVjdC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0NvbGxpc2lvbk9iamVjdHNTb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9IaXRUZXN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9QbGF5ZXJNb3Zlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL21vZGVsL0xldmVsc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9wcm9taXNlcy9BYnN0cmFjdFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9wcm9taXNlcy9QaXhpUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL1Byb21pc2VzR3JvdXAudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy91dGlscy9SYW5kb20udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy91dGlscy9XaW5kb3dFdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtR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Q2xDbUIsWTs7Ozs7Ozs7O3dCQUtGLEksRUFBYSxRLEVBQWtDO0FBQ2hFLFVBQU0sQ0FBQyxHQUFPLE1BQWQ7O0FBQ0EsVUFBSSxDQUFDLENBQUMsZ0JBQU4sRUFBd0I7QUFDdkIsU0FBQyxDQUFDLGdCQUFGLENBQW1CLElBQW5CLEVBQXlCLFFBQXpCLEVBQW1DO0FBQUUsaUJBQU8sRUFBRTtBQUFYLFNBQW5DO0FBQ0EsT0FGRCxNQUVPLElBQUksQ0FBQyxDQUFDLFdBQU4sRUFBbUI7QUFDekIsU0FBQyxDQUFDLFdBQUYsQ0FBYyxPQUFPLElBQXJCLEVBQTJCLFFBQTNCO0FBQ0EsT0FGTSxNQUVBO0FBQ04sU0FBQyxDQUFDLE9BQU8sSUFBUixDQUFELEdBQWlCLFFBQWpCO0FBQ0E7O0FBQ0QsYUFBTyxRQUFQO0FBQ0E7OzsyQkFFb0IsSSxFQUFhLFEsRUFBa0M7QUFDbkUsVUFBTSxDQUFDLEdBQU8sTUFBZDs7QUFDQSxVQUFJLENBQUMsQ0FBQyxtQkFBTixFQUEyQjtBQUMxQixTQUFDLENBQUMsbUJBQUYsQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsRUFBc0MsS0FBdEM7QUFDQSxPQUZELE1BRU8sSUFBSSxDQUFDLENBQUMsV0FBTixFQUFtQjtBQUN6QixTQUFDLENBQUMsV0FBRixDQUFjLE9BQU8sSUFBckIsRUFBMkIsUUFBM0I7QUFDQSxPQUZNLE1BRUE7QUFDTixTQUFDLENBQUMsT0FBTyxJQUFSLENBQUQsR0FBaUIsSUFBakI7QUFDQTtBQUNEOzs7Ozs7O0FBekJzQixzQkFBZ0IsUUFBaEI7QUFDQSx3QkFBa0IsU0FBbEI7QUFDQSxzQkFBZ0IsT0FBaEIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsImltcG9ydCBBcHBsaWNhdGlvbiA9IFBJWEkuQXBwbGljYXRpb247XHJcbmltcG9ydCBFdmVudEVtaXR0ZXIgPSBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbHMge1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0RFVkVMT1BFUl9NT0RFX0VWRU5UOnN5bWJvbCA9IFN5bWJvbCgpO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHBpeGlBcHA6QXBwbGljYXRpb247XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2RldmVsb3Blck1vZGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgc3RhdGljIF9lbWl0dGVyOkV2ZW50RW1pdHRlcjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBzZXREZXZlbG9wZXJNb2RlKHZhbHVlOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0R2xvYmFscy5fZGV2ZWxvcGVyTW9kZSA9IHZhbHVlO1xyXG5cdFx0R2xvYmFscy5nZXRFbWl0dGVyKCkuZW1pdChHbG9iYWxzLkNIQU5HRV9ERVZFTE9QRVJfTU9ERV9FVkVOVCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldERldmVsb3Blck1vZGUoKTpib29sZWFuIHtcclxuXHRcdHJldHVybiBHbG9iYWxzLl9kZXZlbG9wZXJNb2RlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbWl0dGVyKCk6RXZlbnRFbWl0dGVyIHtcclxuXHRcdGlmICghR2xvYmFscy5fZW1pdHRlcikge1xyXG5cdFx0XHRHbG9iYWxzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEdsb2JhbHMuX2VtaXR0ZXI7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBSZWN0YW5nbGUgPSBQSVhJLlJlY3RhbmdsZTtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi9NYWluQ29udGFpbmVyXCI7XHJcbmltcG9ydCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XHJcbmltcG9ydCBXaW5kb3dFdmVudHMgZnJvbSBcIi4vdXRpbHMvV2luZG93RXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiB7XHJcblx0cHJpdmF0ZSBfd2luZG93U2l6ZTpSZWN0YW5nbGU7XHJcblx0cHJpdmF0ZSBfbWFpbkNvbnRhaW5lcjpNYWluQ29udGFpbmVyO1xyXG5cdHByaXZhdGUgX291dE9mQm91bmRzQ292ZXI6R3JhcGhpY3M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbnZhc0lkOnN0cmluZykge1xyXG5cdFx0dGhpcy5pbml0aWFsaXplKGNhbnZhc0lkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdGlhbGl6ZShjYW52YXNJZDpzdHJpbmcpOnZvaWQge1xyXG5cdFx0dGhpcy5jcmVhdGVQaXhpQXBwKGNhbnZhc0lkKTtcclxuXHRcdHRoaXMuX3dpbmRvd1NpemUgPSBuZXcgUmVjdGFuZ2xlKCk7XHJcblx0XHR0aGlzLmluaXRNYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmluaXRPdXRPZkJvdW5kc0NvdmVyKCk7XHJcblx0XHRXaW5kb3dFdmVudHMuYWRkKFdpbmRvd0V2ZW50cy5SRVNJWkUsICgpID0+IHsgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IH0pO1xyXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xyXG5cdFx0dGhpcy5wcmludFdlbGNvbWVNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRNYWluQ29udGFpbmVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyID0gbmV3IE1haW5Db250YWluZXIoKTtcclxuXHRcdC8vIHRoaXMuX21haW5Db250YWluZXIuc2V0U2l6ZSgyMDMyLCAyMDMyKTtcclxuXHRcdHRoaXMuX21haW5Db250YWluZXIuc2V0U2l6ZSgxMjcwLCA3MjApO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zaG93Vmlld0JhY2tncm91bmQoMHgyYjJkMzAsIDEpO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX21haW5Db250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0T3V0T2ZCb3VuZHNDb3ZlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3ZlciA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX291dE9mQm91bmRzQ292ZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVQaXhpQXBwKGNhbnZhc0lkOnN0cmluZyk6dm9pZCB7XHJcblx0XHRjb25zdCBhcHBDb25maWc6UElYSS5BcHBsaWNhdGlvbk9wdGlvbnMgPSB7XHJcblx0XHRcdGFudGlhbGlhczp0cnVlLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6MHhmZmZmZmYsXHJcblx0XHRcdHZpZXc6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG5cdFx0XHQvLyByb3VuZGluZyByZXNvbHV0aW9uIGZvciBlc2NhcGUgdHJvdWJsZXMgd2l0aCBpbnZpc2libGUgZm9udHMgb24gc29tZSBBbmRyb2lkIGRldmljZXNcclxuXHRcdFx0cmVzb2x1dGlvbjooKGRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyKSA/IDEgOiAyLFxyXG5cdFx0fTtcclxuXHRcdEdsb2JhbHMucGl4aUFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKGFwcENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50V2VsY29tZU1lc3NhZ2UoKTp2b2lkIHtcclxuXHRcdGxldCB3ZWxjb21lU3RyaW5nOnN0cmluZyA9IHByb2Nlc3MuZW52LlBST0pFQ1RfTkFNRSArIFwiIFwiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9WRVJTSU9OO1xyXG5cdFx0d2VsY29tZVN0cmluZyArPSBcIlxcbkRldmVsb3BlZCBieSDCq1wiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9BVVRIT1IgKyBcIsK7XCI7XHJcblx0XHRjb25zb2xlLmxvZyh3ZWxjb21lU3RyaW5nKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgd2luZG93UmVzaXplSGFuZGxlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoU2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoV2luZG93U2l6ZSgpO1xyXG5cdFx0dGhpcy5hbGlnblBpeGlBcHAoKTtcclxuXHRcdHRoaXMuYWxpZ25NYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmFsaWduT3V0T2ZCb3VuZHNDb3ZlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoV2luZG93U2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFsaWduUGl4aUFwcCgpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUud2lkdGggPSB0aGlzLl93aW5kb3dTaXplLndpZHRoICsgXCJweFwiO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuaGVpZ2h0ID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAucmVuZGVyZXIucmVzaXplKHRoaXMuX3dpbmRvd1NpemUud2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWxpZ25NYWluQ29udGFpbmVyKCk6dm9pZCB7XHJcblx0XHRjb25zdCBzY2FsZUJ5V2lkdGg6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS53aWR0aCAvIHRoaXMuX21haW5Db250YWluZXIudztcclxuXHRcdGNvbnN0IHNjYWxlQnlIZWlnaHQ6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLyB0aGlzLl9tYWluQ29udGFpbmVyLmg7XHJcblx0XHRjb25zdCBzY2FsZTpudW1iZXIgPSBNYXRoLm1pbihzY2FsZUJ5V2lkdGgsIHNjYWxlQnlIZWlnaHQpO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS54ID0gdGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS55ID0gc2NhbGU7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnggPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gdGhpcy5fbWFpbkNvbnRhaW5lci53ICogc2NhbGUpIC8gMik7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnkgPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLmhlaWdodCAtIHRoaXMuX21haW5Db250YWluZXIuaCAqIHNjYWxlKSAvIDIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhbGlnbk91dE9mQm91bmRzQ292ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuYmVnaW5GaWxsKDB4MDAwMDAwKTtcclxuXHRcdGlmICh0aGlzLl9tYWluQ29udGFpbmVyLmggKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnkgPCB0aGlzLl93aW5kb3dTaXplLmhlaWdodCkge1xyXG5cdFx0XHRjb25zdCBjb3ZlckhlaWdodDpudW1iZXIgPSB0aGlzLl9tYWluQ29udGFpbmVyLnk7XHJcblx0XHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuZHJhd1JlY3QoMCwgMCwgdGhpcy5fd2luZG93U2l6ZS53aWR0aCwgY292ZXJIZWlnaHQpO1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLSBjb3ZlckhlaWdodCxcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoLCBjb3ZlckhlaWdodCxcclxuXHRcdFx0KVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLl9tYWluQ29udGFpbmVyLncgKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnggPCB0aGlzLl93aW5kb3dTaXplLndpZHRoKSB7XHJcblx0XHRcdGNvbnN0IGNvdmVyV2lkdGg6bnVtYmVyID0gdGhpcy5fbWFpbkNvbnRhaW5lci54O1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KDAsIDAsIGNvdmVyV2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHRcdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3Zlci5kcmF3UmVjdChcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gY292ZXJXaWR0aCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGNvdmVyV2lkdGgsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtWaWV3fSBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbGV2ZWwvUGxheWVyXCI7XHJcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbC9MZXZlbFwiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCBQaXhpUmVxdWVzdCBmcm9tIFwiLi9wcm9taXNlcy9QaXhpUmVxdWVzdFwiO1xyXG5pbXBvcnQgUHJvbWlzZXNHcm91cCBmcm9tIFwiLi9wcm9taXNlcy9Qcm9taXNlc0dyb3VwXCI7XHJcbmltcG9ydCBMZXZlbHNNYW5hZ2VyIGZyb20gXCIuL21vZGVsL0xldmVsc01hbmFnZXJcIjtcclxuaW1wb3J0IHtJTGV2ZWx9IGZyb20gXCIuL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtQT0lOVEVSX0RPV04sIFBPSU5URVJfTU9WRSwgUE9JTlRFUl9VUCwgUE9JTlRFUl9VUF9PVVRTSURFfSBmcm9tIFwiLi9jb25zdHMvUG9pbnRlckV2ZW50c1wiO1xyXG5pbXBvcnQgSW50ZXJhY3Rpb25FdmVudCA9IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudDtcclxuaW1wb3J0IFBvaW50ID0gUElYSS5Qb2ludDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3IHtcclxuXHRwcml2YXRlIF9sZXZlbDpMZXZlbDtcclxuXHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5cdHByaXZhdGUgX3BvaW50ZXJEb3duUG9pbnQ6UG9pbnQ7XHJcblx0cHJpdmF0ZSBfcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uOlBvaW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaW5pdCgpOnZvaWQge1xyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cclxuXHRcdHRoaXMuX2xldmVsID0gbmV3IExldmVsKHRoaXMuX3BsYXllciwgKGxldmVsSWQ6bnVtYmVyKTpJTGV2ZWwgPT4geyByZXR1cm4gdGhpcy5zZXRMZXZlbChsZXZlbElkKTsgfSk7XHJcblx0XHR0aGlzLl9sZXZlbC5zaG93Vmlld0JhY2tncm91bmQoMHgwMDAwMDAsIDEpO1xyXG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9sZXZlbCk7XHJcblxyXG5cdFx0dGhpcy5sb2FkaW5nKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRpbmcoKTp2b2lkIHtcclxuXHRcdFByb21pc2VzR3JvdXAucGFjayhbXHJcblx0XHRcdCgpID0+IFByb21pc2VzR3JvdXAucXVldWUoW1xyXG5cdFx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsc01ldGFkYXRhKCksXHJcblx0XHRcdFx0KCkgPT4gdGhpcy5fbGV2ZWwubG9hZGluZygpLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDFcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWwyXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsM1wiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDRcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw1XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsNlwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDdcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw4XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsOVwiKSxcclxuXHRcdFx0KCkgPT4gbmV3IFBpeGlSZXF1ZXN0KFBsYXllci5TS0lOX05BTUUpLmNyZWF0ZVByb21pc2UoKSxcclxuXHRcdF0pXHJcblx0XHRcdC5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBsZXRlTG9hZGluZ0hhbmRsZXIoKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGxvYWRMZXZlbHNNZXRhZGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUGl4aVJlcXVlc3QoXCJsZXZlbHMvbWV0YWRhdGEuanNvblwiKTtcclxuXHRcdGF3YWl0IHJlcXVlc3QuY3JlYXRlUHJvbWlzZSgpO1xyXG5cdFx0Y29uc3QgbGV2ZWxzTWV0YWRhdGEgPSByZXF1ZXN0LmdldFJlc3VsdCgpO1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5hZGRMZXZlbHNNZXRhZGF0YShsZXZlbHNNZXRhZGF0YSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZExldmVsKGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUGl4aVJlcXVlc3QoXCJsZXZlbHMvXCIgKyBmaWxlTmFtZSArIFwiLmpzb25cIik7XHJcblx0XHRhd2FpdCByZXF1ZXN0LmNyZWF0ZVByb21pc2UoKTtcclxuXHRcdGNvbnN0IGxldmVsRGF0YSA9IHJlcXVlc3QuZ2V0UmVzdWx0KCk7XHJcblx0XHRMZXZlbHNNYW5hZ2VyLmFkZExldmVsKGxldmVsRGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNvbXBsZXRlTG9hZGluZ0hhbmRsZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuc2V0U3RhcnRMZXZlbEFuZFBsYXllclBvc2l0aW9uKCk7XHJcblx0XHRHbG9iYWxzLmdldEVtaXR0ZXIoKS5hZGRMaXN0ZW5lcihHbG9iYWxzLkNIQU5HRV9ERVZFTE9QRVJfTU9ERV9FVkVOVCwgdGhpcy5jaGFuZ2VEZXZlbG9wZXJNb2RlRXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuXHRcdHRoaXMuX2xldmVsLmxhdW5jaFRpY2tlcigpO1xyXG5cdFx0dGhpcy5sYXVuY2hUaWNrZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0U3RhcnRMZXZlbEFuZFBsYXllclBvc2l0aW9uKCk6dm9pZCB7XHJcblx0XHQvLyB0aGlzLnNldExldmVsKDkpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnggPSAxMDAgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueSA9IDYxNCAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cclxuXHRcdHRoaXMuc2V0TGV2ZWwoMSk7XHJcblx0XHR0aGlzLl9wbGF5ZXIueCA9IDk3O1xyXG5cdFx0dGhpcy5fcGxheWVyLnkgPSB0aGlzLl9sZXZlbC5oIC0gMjcwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldExldmVsKGxldmVsSWQ6bnVtYmVyKTpJTGV2ZWwge1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhOklMZXZlbCA9IExldmVsc01hbmFnZXIuZ2V0TGV2ZWwobGV2ZWxJZCk7XHJcblx0XHR0aGlzLl9sZXZlbC5zZXRMZXZlbChsZXZlbERhdGEpO1xyXG5cdFx0dGhpcy5fbGV2ZWwuc2V0U2l6ZShsZXZlbERhdGEuc3RhZ2Uud2lkdGgsIGxldmVsRGF0YS5zdGFnZS5oZWlnaHQpO1xyXG5cdFx0cmV0dXJuIGxldmVsRGF0YTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hhbmdlRGV2ZWxvcGVyTW9kZUV2ZW50SGFuZGxlcigpOnZvaWQge1xyXG5cdFx0bGV0IGJhY2tncm91bmQgPSB0aGlzLmdldFZpZXdCYWNrZ3JvdW5kSWZFeGlzdHMoKTtcclxuXHRcdGlmIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSlcclxuXHRcdHtcclxuXHRcdFx0YmFja2dyb3VuZC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGJhY2tncm91bmQuYWRkTGlzdGVuZXIoUE9JTlRFUl9ET1dOLCB0aGlzLnBvaW50ZXJEb3duSGFuZGxlciwgdGhpcyk7XHJcblx0XHRcdGJhY2tncm91bmQuYWRkTGlzdGVuZXIoUE9JTlRFUl9NT1ZFLCB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblx0XHRcdGJhY2tncm91bmQuYWRkTGlzdGVuZXIoUE9JTlRFUl9VUCwgdGhpcy5wb2ludGVyVXBIYW5kbGVyLCB0aGlzKTtcclxuXHRcdFx0YmFja2dyb3VuZC5hZGRMaXN0ZW5lcihQT0lOVEVSX1VQX09VVFNJREUsIHRoaXMucG9pbnRlclVwT3V0c2lkZSwgdGhpcyk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGJhY2tncm91bmQuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0YmFja2dyb3VuZC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcG9pbnRlckRvd25IYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IGV2ZW50LmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLCBldmVudC5kYXRhLmdsb2JhbCk7XHJcblx0XHR0aGlzLl9wb2ludGVyRG93blBvaW50ID0gbmV3IFBvaW50KGxvY2FsUG9pbnQueCwgbG9jYWxQb2ludC55KTtcclxuXHRcdHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLl9sZXZlbC54LCB0aGlzLl9sZXZlbC55KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcG9pbnRlck1vdmVIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3BvaW50ZXJEb3duUG9pbnQgJiYgdGhpcy5fcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uKSB7XHJcblx0XHRcdGNvbnN0IGxvY2FsUG9pbnQgPSBldmVudC5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcywgZXZlbnQuZGF0YS5nbG9iYWwpO1xyXG5cdFx0XHR0aGlzLl9sZXZlbC54ID0gdGhpcy5fcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uLnggKyAobG9jYWxQb2ludC54IC0gdGhpcy5fcG9pbnRlckRvd25Qb2ludC54KTtcclxuXHRcdFx0dGhpcy5fbGV2ZWwueSA9IHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbi55ICsgKGxvY2FsUG9pbnQueSAtIHRoaXMuX3BvaW50ZXJEb3duUG9pbnQueSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBvaW50ZXJVcEhhbmRsZXIoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHR0aGlzLnN0b3BEcmFnKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBvaW50ZXJVcE91dHNpZGUoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHR0aGlzLnN0b3BEcmFnKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0b3BEcmFnKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wb2ludGVyRG93blBvaW50ID0gbnVsbDtcclxuXHRcdHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbiA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxhdW5jaFRpY2tlcigpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnRpY2tlci5hZGQoKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5fbGV2ZWwgJiYgIUdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKSB7XHJcblx0XHRcdFx0dGhpcy5fbGV2ZWwueCA9IHRoaXMuY2FsY3VsYXRlTGV2ZWxQb3NpdGlvbih0aGlzLncsIHRoaXMuX2xldmVsLncsIHRoaXMuX3BsYXllci53aWR0aCwgdGhpcy5fcGxheWVyLngpO1xyXG5cdFx0XHRcdHRoaXMuX2xldmVsLnkgPSB0aGlzLmNhbGN1bGF0ZUxldmVsUG9zaXRpb24odGhpcy5oLCB0aGlzLl9sZXZlbC5oLCB0aGlzLl9wbGF5ZXIuaGVpZ2h0LCB0aGlzLl9wbGF5ZXIueSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxjdWxhdGVMZXZlbFBvc2l0aW9uKHRoaXNTaXplOm51bWJlciwgbGV2ZWxTaXplOm51bWJlciwgcGxheWVyU2l6ZTpudW1iZXIsIHBsYXllclBvc2l0aW9uOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGNvbnN0IG1pbkxldmVsUG9zaXRpb246bnVtYmVyID0gdGhpc1NpemUgLSBsZXZlbFNpemU7XHJcblx0XHRjb25zdCBtYXhMZXZlbFBvc2l0aW9uOm51bWJlciA9IDA7XHJcblx0XHRjb25zdCBjYWxjdWxhdGVkTGV2ZWxQb3NpdGlvbjpudW1iZXIgPSAodGhpc1NpemUgLSBwbGF5ZXJTaXplKSAvIDIgLSBwbGF5ZXJQb3NpdGlvbjtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWluKG1heExldmVsUG9zaXRpb24sIE1hdGgubWF4KG1pbkxldmVsUG9zaXRpb24sIGNhbGN1bGF0ZWRMZXZlbFBvc2l0aW9uKSkpO1xyXG5cdH1cclxufSIsImltcG9ydCBDb250YWluZXIgPSBQSVhJLkNvbnRhaW5lcjtcclxuaW1wb3J0IEdyYXBoaWNzID0gUElYSS5HcmFwaGljcztcclxuaW1wb3J0IFJhbmRvbSBmcm9tIFwiLi91dGlscy9SYW5kb21cIjtcclxuXHJcbmNsYXNzIFZpZXcgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFJlc2l6YWJsZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHRwdWJsaWMgdzpudW1iZXI7XHJcblx0cHVibGljIGg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2luaXRlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRXKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHRpZiAodGhpcy53ICE9PSB2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLncgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5hcHBseVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRIKHZhbHVlOm51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMuaCAhPT0gdmFsdWUpIHtcclxuXHRcdFx0dGhpcy5oID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0U2l6ZSh3Om51bWJlciwgaDpudW1iZXIpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMudyAhPT0gdyB8fCB0aGlzLmggIT09IGgpIHtcclxuXHRcdFx0dGhpcy53ID0gdztcclxuXHRcdFx0dGhpcy5oID0gaDtcclxuXHRcdFx0dGhpcy5hcHBseVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhcHBseVNpemUoKTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5faW5pdGVkKSB7XHJcblx0XHRcdHRoaXMuX2luaXRlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluaXQoKTp2b2lkIHtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFZpZXdXaXRoQmFja2dyb3VuZCBleHRlbmRzIFJlc2l6YWJsZVZpZXcge1xyXG5cdHByaXZhdGUgX3ZpZXdCYWNrZ3JvdW5kOkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgX3ZpZXdCYWNrZ3JvdW5kQ29sb3I6bnVtYmVyO1xyXG5cdHByaXZhdGUgX3ZpZXdCYWNrZ3JvdW5kQWxwaGE6bnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd1ZpZXdCYWNrZ3JvdW5kKGNvbG9yPzpudW1iZXIsIGFscGhhOm51bWJlciA9IC41KTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5fdmlld0JhY2tncm91bmQpIHtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmQgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZEF0KHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLCAwKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmRDb2xvciA9ICFOdW1iZXIuaXNOYU4oY29sb3IpID8gY29sb3IgOiBSYW5kb20uZ2VuQ29sb3IoKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmRBbHBoYSA9IGFscGhhO1xyXG5cdFx0XHRpZiAodGhpcy53ICYmIHRoaXMuaCkge1xyXG5cdFx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhcHBseVNpemUoKTp2b2lkIHtcclxuXHRcdHN1cGVyLmFwcGx5U2l6ZSgpO1xyXG5cdFx0aWYgKHRoaXMuX3ZpZXdCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLmNsZWFyKCk7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLmJlZ2luRmlsbCh0aGlzLl92aWV3QmFja2dyb3VuZENvbG9yLCB0aGlzLl92aWV3QmFja2dyb3VuZEFscGhhKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmQuZHJhd1JlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZC5lbmRGaWxsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Vmlld0JhY2tncm91bmRJZkV4aXN0cygpOkdyYXBoaWNzIHtcclxuXHRcdHJldHVybiB0aGlzLl92aWV3QmFja2dyb3VuZDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFZpZXdXaXRoUmVzaXplVGVzdCBleHRlbmRzIFZpZXdXaXRoQmFja2dyb3VuZCB7XHJcblx0cHVibGljIHJlc2l6ZVRlc3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX3NpemVXYXNDaGFuZ2VkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFwcGx5U2l6ZSgpOnZvaWQge1xyXG5cdFx0c3VwZXIuYXBwbHlTaXplKCk7XHJcblx0XHRpZiAodGhpcy5yZXNpemVUZXN0KSB7XHJcblx0XHRcdGlmICghdGhpcy5fc2l6ZVdhc0NoYW5nZWQpIHtcclxuXHRcdFx0XHR0aGlzLl9zaXplV2FzQ2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fc2l6ZVdhc0NoYW5nZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCAwKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyAqIFlvdSBzaG91bGQgdG8gdXNlIHNldFNpemUgaW5zdGVhZCBzZXRXIGFuZCBzZXRIIGlmIHlvdSB3YW50IHRvIGNoYW5nZSBib3RoIHBhcmFtZXRlcnNcclxuXHRcdFx0XHQvLyAqIFlvdSBzaG91bGRuJ3QgY2FsbCBhcHBseVNpemUgbWV0aG9kIG1hbnVhbGx5XHJcblx0XHRcdFx0Ly8gKiBZb3Ugc2hvdWxkbid0IGNhbGwgc2V0U2l6ZSwgc2V0VyBvciBzZXRIIHR3aWNlXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW1wiICsgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCJdIHJlc2l6ZSB0ZXN0IHdhcyBmYWlsZWRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7Vmlld1dpdGhSZXNpemVUZXN0IGFzIFZpZXd9OyIsImV4cG9ydCBjb25zdCBLRVlfVVAgPSBcIkFycm93VXBcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9MRUZUID0gXCJBcnJvd0xlZnRcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9SSUdIVCA9IFwiQXJyb3dSaWdodFwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0JBQ0tRVU9URSA9IFwiQmFja3F1b3RlXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfSiA9IFwiS2V5SlwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0RFTEVURSA9IFwiRGVsZXRlXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfQ09NTUEgPSBcIkNvbW1hXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfUEVSSU9EID0gXCJQZXJpb2RcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9OID0gXCJLZXlOXCI7IiwiZXhwb3J0IGNvbnN0IFBPSU5URVJfRE9XTiA9IFwicG9pbnRlcmRvd25cIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfVVAgPSBcInBvaW50ZXJ1cFwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9NT1ZFID0gXCJwb2ludGVybW92ZVwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9VUF9PVVRTSURFID0gXCJwb2ludGVydXBvdXRzaWRlXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX09WRVIgPSBcInBvaW50ZXJvdmVyXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX09VVCA9IFwicG9pbnRlcm91dFwiOyIsImltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcbmltcG9ydCB7SUJsb2NrLCBJQ29sbGlzaW9uLCBJVHlwZX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xyXG5pbXBvcnQgUG9pbnQgPSBQSVhJLlBvaW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBDb2xsaXNpb25PYmplY3Qge1xyXG5cdHB1YmxpYyBsb2NhbERyYWdQb2ludDpQb2ludDtcclxuXHRwcml2YXRlIF9zcHJpdGU6U3ByaXRlO1xyXG5cdHByaXZhdGUgX2hpdDpib29sZWFuID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9ibG9ja0RhdGE6SUJsb2NrLFxyXG5cdFx0cHJpdmF0ZSBfYmxvY2tUeXBlRGF0YTpJVHlwZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pbml0U3ByaXRlKCk7XHJcblx0XHRpZiAodGhpcy5fYmxvY2tUeXBlRGF0YS5jb2xsaXNpb24pIHtcclxuXHRcdFx0Y29uc3QgY29sbGlzaW9uOklDb2xsaXNpb24gPSB0aGlzLl9ibG9ja1R5cGVEYXRhLmNvbGxpc2lvbjtcclxuXHRcdFx0dGhpcy5zZXRMb2NhbENvbGxpc2lvblZhbHVlcyhjb2xsaXNpb24ubGVmdCwgY29sbGlzaW9uLnJpZ2h0LCBjb2xsaXNpb24udG9wLCBjb2xsaXNpb24uYm90dG9tKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFNwcml0ZSgpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2Jsb2NrVHlwZURhdGEuaW1hZ2UpIHtcclxuXHRcdFx0dGhpcy5fc3ByaXRlID0gU3ByaXRlLmZyb20odGhpcy5fYmxvY2tUeXBlRGF0YS5pbWFnZSk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXREYXRhKCk6SUJsb2NrIHtcclxuXHRcdHJldHVybiB0aGlzLl9ibG9ja0RhdGE7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0VHlwZURhdGEoKTpJVHlwZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tUeXBlRGF0YTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaG93QmxvY2tIaXQodmFsdWU6Ym9vbGVhbik6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5faGl0ICE9PSB2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLl9oaXQgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5zaG93Q29sbGlzaW9uUmVjdGFuZ2xlKHRoaXMuX2hpdCA/IDB4ZmYwMDAwIDogMHgwMDAwZmYpO1xyXG5cdFx0XHRpZiAodGhpcy5fc3ByaXRlKSB7XHJcblx0XHRcdFx0dGhpcy5fc3ByaXRlLmFscGhhID0gLjM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoaWRlQmxvY2tIaXQoKTp2b2lkIHtcclxuXHRcdHRoaXMuaGlkZUNvbGxpc2lvblJlY3RhbmdsZSgpO1xyXG5cdFx0dGhpcy5faGl0ID0gbnVsbDtcclxuXHRcdGlmICh0aGlzLl9zcHJpdGUpIHtcclxuXHRcdFx0dGhpcy5fc3ByaXRlLmFscGhhID0gMTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyID0gUElYSS5Db250YWluZXI7XHJcbmltcG9ydCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XHJcbmltcG9ydCBUZXh0ID0gUElYSS5UZXh0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uT2JqZWN0IGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIF9sb2NhbExlZnQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsUmlnaHQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsVG9wOm51bWJlcjtcclxuXHRwcml2YXRlIF9sb2NhbEJvdHRvbTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxDZW50ZXJYOm51bWJlcjtcclxuXHRwcml2YXRlIF9sb2NhbENlbnRlclk6bnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIF9jb2xsaXNpb25MZWZ0Om51bWJlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25SaWdodDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uVG9wOm51bWJlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25Cb3R0b206bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbkNlbnRlclg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbkNlbnRlclk6bnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIF9jb2xsaXNpb25SZWN0YW5nbGU6R3JhcGhpY3M7XHJcblx0cHJpdmF0ZSBfc2VsZWN0aW9uOkdyYXBoaWNzO1xyXG5cclxuXHRwcml2YXRlIF9kZWJ1Z1RleHQ6VGV4dDtcclxuXHRwcml2YXRlIF9kZWJ1Z1RleHRCYWNrZ3JvdW5kOkdyYXBoaWNzO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TG9jYWxDb2xsaXNpb25WYWx1ZXMoXHJcblx0XHRsZWZ0Om51bWJlcixcclxuXHRcdHJpZ2h0Om51bWJlcixcclxuXHRcdHRvcDpudW1iZXIsXHJcblx0XHRib3R0b206bnVtYmVyXHJcblx0KTp2b2lkIHtcclxuXHRcdHRoaXMuX2xvY2FsTGVmdCA9IGxlZnQ7XHJcblx0XHR0aGlzLl9sb2NhbFJpZ2h0ID0gcmlnaHQ7XHJcblx0XHR0aGlzLl9sb2NhbFRvcCA9IHRvcDtcclxuXHRcdHRoaXMuX2xvY2FsQm90dG9tID0gYm90dG9tO1xyXG5cdFx0dGhpcy5fbG9jYWxDZW50ZXJYID0gbGVmdCArIE1hdGguZmxvb3IoKHJpZ2h0IC0gbGVmdCkgLyAyKTtcclxuXHRcdHRoaXMuX2xvY2FsQ2VudGVyWSA9IHRvcCArIE1hdGguZmxvb3IoKGJvdHRvbSAtIHRvcCkgLyAyKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgeCh4Om51bWJlcikge1xyXG5cdFx0c3VwZXIueCA9IHg7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25MZWZ0ID0geCArIHRoaXMuX2xvY2FsTGVmdDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblJpZ2h0ID0geCArIHRoaXMuX2xvY2FsUmlnaHQ7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25DZW50ZXJYID0geCArIHRoaXMuX2xvY2FsQ2VudGVyWDtcclxuXHRcdGlmICghcHJvY2Vzcy5lbnYuUkVMRUFTRSlcclxuXHRcdFx0dGhpcy5yZWZyZXNoUG9zaXRpb25UZXh0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHN1cGVyLng7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHkoeTpudW1iZXIpIHtcclxuXHRcdHN1cGVyLnkgPSB5O1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uVG9wID0geSArIHRoaXMuX2xvY2FsVG9wO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uQm90dG9tID0geSArIHRoaXMuX2xvY2FsQm90dG9tO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uQ2VudGVyWSA9IHkgKyB0aGlzLl9sb2NhbENlbnRlclk7XHJcblx0XHRpZiAoIXByb2Nlc3MuZW52LlJFTEVBU0UpXHJcblx0XHRcdHRoaXMucmVmcmVzaFBvc2l0aW9uVGV4dCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB5KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBzdXBlci55O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldE9yZGVyKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKCF0aGlzLl9kZWJ1Z1RleHQpIHtcclxuXHRcdFx0dGhpcy5fZGVidWdUZXh0ID0gbmV3IFRleHQoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9kZWJ1Z1RleHQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnRleHQgPSB2YWx1ZS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnggPSBNYXRoLmZsb29yKCgodGhpcy5fbG9jYWxSaWdodCAtIHRoaXMuX2xvY2FsTGVmdCkgLSB0aGlzLl9kZWJ1Z1RleHQud2lkdGgpIC8gMik7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHQueSA9IHRoaXMuX2xvY2FsVG9wICsgTWF0aC5mbG9vcigoKHRoaXMuX2xvY2FsQm90dG9tIC0gdGhpcy5fbG9jYWxUb3ApIC0gdGhpcy5fZGVidWdUZXh0LmhlaWdodCkgLyAyKTtcclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVmcmVzaFBvc2l0aW9uVGV4dCgpOnZvaWQge1xyXG5cdFx0Ly8gdGhpcy5zaG93RGVidWdUZXh0KHRoaXMuX2NvbGxpc2lvbkxlZnQgKyBcInhcIiArIHRoaXMuX2NvbGxpc2lvblRvcCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dEZWJ1Z1RleHQodGV4dDpzdHJpbmcpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX2RlYnVnVGV4dCkge1xyXG5cdFx0XHRjb25zdCB0ZXh0U3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG5cdFx0XHRcdGZpbGw6IFwiI2ZmZmZmZlwiLFxyXG5cdFx0XHRcdGZvbnRTaXplOiAxNixcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLl9kZWJ1Z1RleHQgPSBuZXcgUElYSS5UZXh0KCcnLCB0ZXh0U3R5bGUpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2RlYnVnVGV4dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnRleHQgPSB0ZXh0O1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnggPSBNYXRoLmZsb29yKCh0aGlzLl9sb2NhbFJpZ2h0IC0gdGhpcy5fbG9jYWxMZWZ0IC0gdGhpcy5fZGVidWdUZXh0LndpZHRoKSAvIDIpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnkgPSB0aGlzLl9sb2NhbFRvcCAqIDIgKyBNYXRoLmZsb29yKCh0aGlzLl9sb2NhbEJvdHRvbSAtIHRoaXMuX2xvY2FsVG9wIC0gdGhpcy5fZGVidWdUZXh0LmhlaWdodCkgLyAyKTtcclxuXHJcblx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kLnggPSB0aGlzLl9kZWJ1Z1RleHQueDtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQueSA9IHRoaXMuX2RlYnVnVGV4dC55O1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5jbGVhcigpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5iZWdpbkZpbGwoMHgwMDAwMDApO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5kcmF3UmVjdCgwLCAwLCB0aGlzLl9kZWJ1Z1RleHQud2lkdGgsIHRoaXMuX2RlYnVnVGV4dC5oZWlnaHQpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5lbmRGaWxsKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd0NvbGxpc2lvblJlY3RhbmdsZShjb2xvcjpudW1iZXIgPSAweDAwMDBmZik6dm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSkge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLnBhcmVudCkge1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUuY2xlYXIoKTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5iZWdpbkZpbGwoY29sb3IsIC41KTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5kcmF3UmVjdChcclxuXHRcdFx0dGhpcy5fbG9jYWxMZWZ0LFxyXG5cdFx0XHR0aGlzLl9sb2NhbFRvcCxcclxuXHRcdFx0dGhpcy5fbG9jYWxSaWdodCAtIHRoaXMuX2xvY2FsTGVmdCxcclxuXHRcdFx0dGhpcy5fbG9jYWxCb3R0b20gLSB0aGlzLl9sb2NhbFRvcCxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd1NlbGVjdGlvbigpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl9zZWxlY3Rpb24gfHwgIXRoaXMuX3NlbGVjdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0aWYgKCF0aGlzLl9zZWxlY3Rpb24pIHtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rpb24gPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rpb24uYmVnaW5GaWxsKDB4ZmZmZmZmKTtcclxuXHRcdFx0XHRsZXQgY2VudGVyUG9pbnRYOm51bWJlciA9IHRoaXMuX2xvY2FsTGVmdCArICh0aGlzLl9sb2NhbFJpZ2h0IC0gdGhpcy5fbG9jYWxMZWZ0KSAvIDI7XHJcblx0XHRcdFx0bGV0IGNlbnRlclBvaW50WTpudW1iZXIgPSB0aGlzLl9sb2NhbFRvcCArICh0aGlzLl9sb2NhbEJvdHRvbSAtIHRoaXMuX2xvY2FsVG9wKSAvIDI7XHJcblx0XHRcdFx0Y29uc3QgY2VudGVyU3F1YXJlU2l6ZTpudW1iZXIgPSAxMDtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rpb24uZHJhd1JlY3QoXHJcblx0XHRcdFx0XHRjZW50ZXJQb2ludFggLSBjZW50ZXJTcXVhcmVTaXplIC8gMixcclxuXHRcdFx0XHRcdGNlbnRlclBvaW50WSAtIGNlbnRlclNxdWFyZVNpemUgLyAyLFxyXG5cdFx0XHRcdFx0Y2VudGVyU3F1YXJlU2l6ZSxcclxuXHRcdFx0XHRcdGNlbnRlclNxdWFyZVNpemUsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zZWxlY3Rpb24pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGhpZGVTZWxlY3Rpb24oKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9zZWxlY3Rpb24gJiYgdGhpcy5fc2VsZWN0aW9uLnBhcmVudClcclxuXHRcdFx0dGhpcy5fc2VsZWN0aW9uLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9zZWxlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhpZGVDb2xsaXNpb25SZWN0YW5nbGUoKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUgJiYgdGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLnBhcmVudCkge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uTGVmdCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uTGVmdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjb2xsaXNpb25SaWdodCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uUmlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uVG9wKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25Ub3A7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uQm90dG9tKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25Cb3R0b207XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25MZWZ0KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbExlZnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25SaWdodCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxSaWdodDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2NhbENvbGxpc2lvblRvcCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxUb3A7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25Cb3R0b20oKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsQm90dG9tO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uQ2VudGVyWCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxDZW50ZXJYO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uQ2VudGVyWSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxDZW50ZXJZO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvbkNlbnRlclgoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvbkNlbnRlclg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uQ2VudGVyWSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uQ2VudGVyWTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyID0gUElYSS5Db250YWluZXI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBQSVhJLkRpc3BsYXlPYmplY3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb25PYmplY3RzU29ydGVyIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2NvbGxpc2lvbnNMYXllcjpDb250YWluZXJcclxuXHQpIHt9XHJcblxyXG5cdHB1YmxpYyBzb3J0KCk6dm9pZCB7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIuY2hpbGRyZW4uc29ydCgoYTogRGlzcGxheU9iamVjdCwgYjogRGlzcGxheU9iamVjdCk6IG51bWJlciA9PiB7XHJcblx0XHRcdGxldCBhQ29sbGlzaW9uOiBDb2xsaXNpb25PYmplY3QgPSBhIGFzIENvbGxpc2lvbk9iamVjdDtcclxuXHRcdFx0bGV0IGJDb2xsaXNpb246IENvbGxpc2lvbk9iamVjdCA9IGIgYXMgQ29sbGlzaW9uT2JqZWN0O1xyXG5cclxuXHRcdFx0aWYgKGFDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWCgpICE9PSBiQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclgoKSkge1xyXG5cdFx0XHRcdHJldHVybiBhQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclgoKSAtIGJDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYkNvbGxpc2lvbi5jb2xsaXNpb25DZW50ZXJZKCkgLSBhQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclkoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuID0gdGhpcy5teVNvcnQodGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuIGFzIENvbGxpc2lvbk9iamVjdFtdKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbXlTb3J0KGNoaWxkcmVuOkNvbGxpc2lvbk9iamVjdFtdKTpDb2xsaXNpb25PYmplY3RbXSB7XHJcblx0XHRjb25zdCBvbGRBcnJheTpDb2xsaXNpb25PYmplY3RbXSA9IGNoaWxkcmVuLnNsaWNlKCk7XHJcblx0XHRjb25zdCBuZXdBcnJheTpDb2xsaXNpb25PYmplY3RbXSA9IFtdO1xyXG5cdFx0d2hpbGUgKG9sZEFycmF5Lmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBpbmRleDpudW1iZXIgPSB0aGlzLmZpbmRNaW5PYmplY3RJbmRleChvbGRBcnJheSwgMCk7XHJcblx0XHRcdG5ld0FycmF5LnB1c2gob2xkQXJyYXlbaW5kZXhdKTtcclxuXHRcdFx0b2xkQXJyYXlbaW5kZXhdLnNldE9yZGVyKG5ld0FycmF5Lmxlbmd0aCk7XHJcblx0XHRcdG9sZEFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXJyYXk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZpbmRNaW5PYmplY3RJbmRleChcclxuXHRcdGFycmF5OkNvbGxpc2lvbk9iamVjdFtdLFxyXG5cdFx0aW5kZXg6bnVtYmVyLFxyXG5cdCk6bnVtYmVyIHtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpICE9PSBpbmRleCAmJiB0aGlzLmZpcnN0T2JqZWN0SW5kZXhJc0JpZ2dlcihhcnJheVtpbmRleF0sIGFycmF5W2ldKSkge1xyXG5cdFx0XHRcdGluZGV4ID0gdGhpcy5maW5kTWluT2JqZWN0SW5kZXgoYXJyYXksIGkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW5kZXg7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZpcnN0T2JqZWN0SW5kZXhJc0JpZ2dlcihhOkNvbGxpc2lvbk9iamVjdCwgYjpDb2xsaXNpb25PYmplY3QpOmJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgaGl0SDogYm9vbGVhbiA9IEhpdFRlc3QuaG9yaXpvbnRhbChhLCBiKTtcclxuXHRcdGNvbnN0IGhpdFY6IGJvb2xlYW4gPSBIaXRUZXN0LnZlcnRpY2FsKGEsIGIpO1xyXG5cdFx0aWYgKGhpdEggPT09IGhpdFYpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmIChoaXRWKSB7XHJcblx0XHRcdHJldHVybiBhLmNvbGxpc2lvbkxlZnQoKSA+PSBiLmNvbGxpc2lvblJpZ2h0KCk7XHJcblx0XHR9IGVsc2UgaWYgKGhpdEgpIHtcclxuXHRcdFx0cmV0dXJuIGEuY29sbGlzaW9uQm90dG9tKCkgPD0gYi5jb2xsaXNpb25Ub3AoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoYS5jb2xsaXNpb25MZWZ0KCkgPj0gYi5jb2xsaXNpb25SaWdodCgpKSAmJiAoYS5jb2xsaXNpb25Cb3R0b20oKSA8PSBiLmNvbGxpc2lvblRvcCgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGl0VGVzdCB7XHJcblx0cHVibGljIHN0YXRpYyBob3Jpem9udGFsKG9iajE6Q29sbGlzaW9uT2JqZWN0LCBvYmoyOkNvbGxpc2lvbk9iamVjdCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gIShcclxuXHRcdFx0b2JqMS5jb2xsaXNpb25SaWdodCgpIDw9IG9iajIuY29sbGlzaW9uTGVmdCgpIHx8XHJcblx0XHRcdG9iajEuY29sbGlzaW9uTGVmdCgpID49IG9iajIuY29sbGlzaW9uUmlnaHQoKVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyB2ZXJ0aWNhbChvYmoxOkNvbGxpc2lvbk9iamVjdCwgb2JqMjpDb2xsaXNpb25PYmplY3QpOmJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICEoXHJcblx0XHRcdG9iajEuY29sbGlzaW9uQm90dG9tKCkgPD0gb2JqMi5jb2xsaXNpb25Ub3AoKSB8fFxyXG5cdFx0XHRvYmoxLmNvbGxpc2lvblRvcCgpID49IG9iajIuY29sbGlzaW9uQm90dG9tKClcclxuXHRcdCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwiLi4vVmlld1wiO1xyXG5pbXBvcnQge1BPSU5URVJfRE9XTiwgUE9JTlRFUl9NT1ZFLCBQT0lOVEVSX1VQLCBQT0lOVEVSX1VQX09VVFNJREV9IGZyb20gXCIuLi9jb25zdHMvUG9pbnRlckV2ZW50c1wiO1xyXG5pbXBvcnQge1xyXG5cdEtFWV9CQUNLUVVPVEUsXHJcblx0S0VZX0NPTU1BLFxyXG5cdEtFWV9ERUxFVEUsXHJcblx0S0VZX0osXHJcblx0S0VZX0xFRlQsXHJcblx0S0VZX04sXHJcblx0S0VZX1BFUklPRCxcclxuXHRLRVlfUklHSFQsXHJcblx0S0VZX1VQXHJcbn0gZnJvbSBcIi4uL2NvbnN0cy9LZXlib2FyZENvZGVzXCI7XHJcbmltcG9ydCB7SUJsb2NrLCBJTGV2ZWwsIElUeXBlfSBmcm9tIFwiLi4vSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgUGxheWVyTW92ZXIgZnJvbSBcIi4vUGxheWVyTW92ZXJcIjtcclxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3RzU29ydGVyIGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdHNTb3J0ZXJcIjtcclxuaW1wb3J0IEhpdFRlc3QgZnJvbSBcIi4vSGl0VGVzdFwiO1xyXG5pbXBvcnQgV2luZG93RXZlbnRzIGZyb20gXCIuLi91dGlscy9XaW5kb3dFdmVudHNcIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIi4uL0dsb2JhbHNcIjtcclxuaW1wb3J0IFBpeGlSZXF1ZXN0IGZyb20gXCIuLi9wcm9taXNlcy9QaXhpUmVxdWVzdFwiO1xyXG5pbXBvcnQgUHJvbWlzZXNHcm91cCBmcm9tIFwiLi4vcHJvbWlzZXMvUHJvbWlzZXNHcm91cFwiO1xyXG5pbXBvcnQgTGV2ZWxzTWFuYWdlciBmcm9tIFwiLi4vbW9kZWwvTGV2ZWxzTWFuYWdlclwiO1xyXG5pbXBvcnQgSW50ZXJhY3Rpb25FdmVudCA9IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudDtcclxuaW1wb3J0IFBvaW50ID0gUElYSS5Qb2ludDtcclxuaW1wb3J0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBWaWV3IHtcclxuXHRwcml2YXRlIF9wcmVzc2VkQnV0dG9uczpNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xyXG5cdHByaXZhdGUgX2xhc3RQcmVzc2VkRGlyZWN0aW9uQnV0dG9uOnN0cmluZztcclxuXHRwcml2YXRlIF9qdW1wOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9ibG9ja1R5cGVCeVR5cGVJZDpNYXA8c3RyaW5nLCBJVHlwZT4gPSBuZXcgTWFwPHN0cmluZywgSVR5cGU+KCk7XHJcblx0cHJpdmF0ZSBfYmxvY2tzVHlwZXM6SVR5cGVbXSA9IFtdO1xyXG5cdHByaXZhdGUgX3BsYXllck1vdmVyOlBsYXllck1vdmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbk9iamVjdHNTb3J0ZXI6Q29sbGlzaW9uT2JqZWN0c1NvcnRlcjtcclxuXHRwcml2YXRlIF9ibG9ja3M6QmxvY2tbXSA9IFtdO1xyXG5cdHByaXZhdGUgX2xldmVsRGF0YTpJTGV2ZWw7XHJcblx0cHJpdmF0ZSBfc2VsZWN0ZWRCbG9jazpCbG9jayA9IG51bGw7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uc0xheWVyOlNwcml0ZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyLFxyXG5cdFx0cHJpdmF0ZSBfc2V0TGV2ZWxDYWxsYmFjazoobGV2ZWw6bnVtYmVyKSA9PiBJTGV2ZWwsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluaXQoKTp2b2lkIHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHRcdHRoaXMuYWRkS2V5TGlzdGVuZXJzKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9hZGluZygpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5nZXRMZXZlbHNNZXRhZGF0YSgpLnR5cGVzLmZvckVhY2goKHR5cGVEYXRhOklUeXBlKSA9PiB7XHJcblx0XHRcdHRoaXMuX2Jsb2NrVHlwZUJ5VHlwZUlkLnNldCh0eXBlRGF0YS5pZCwgdHlwZURhdGEpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NUeXBlcy5wdXNoKHR5cGVEYXRhKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IGZhY3RvcmllczooKCkgPT4gUHJvbWlzZTxhbnk+KVtdID0gW107XHJcblx0XHR0aGlzLl9ibG9ja3NUeXBlcy5mb3JFYWNoKCh0eXBlRGF0YTpJVHlwZSkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZURhdGEuaW1hZ2UpIHtcclxuXHRcdFx0XHRmYWN0b3JpZXMucHVzaCgoKSA9PiBuZXcgUGl4aVJlcXVlc3QodHlwZURhdGEuaW1hZ2UpLmNyZWF0ZVByb21pc2UoKSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gUHJvbWlzZXNHcm91cC5wYWNrKGZhY3Rvcmllcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TGV2ZWwobGV2ZWxEYXRhOklMZXZlbCk6dm9pZCB7XHJcblx0XHR0aGlzLl9sZXZlbERhdGEgPSBsZXZlbERhdGE7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9jb2xsaXNpb25zTGF5ZXIpIHtcclxuXHRcdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyID0gbmV3IFNwcml0ZSgpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2NvbGxpc2lvbnNMYXllcik7XHJcblxyXG5cdFx0XHR0aGlzLmluaXRDb2xsaXNpb25PYmplY3RzU29ydGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5yZW1vdmVBbGxDb2xsaXNpb25PYmplY3RzKCk7XHJcblxyXG5cdFx0dGhpcy5fbGV2ZWxEYXRhLmJsb2Nrcy5mb3JFYWNoKChibG9ja0RhdGE6SUJsb2NrKSA9PiB7XHJcblx0XHRcdHRoaXMuY3JlYXRlQmxvY2soYmxvY2tEYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0aWYgKCF0aGlzLl9wbGF5ZXIucGFyZW50KVxyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIuYWRkQ2hpbGQodGhpcy5fcGxheWVyKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuX3BsYXllck1vdmVyKVxyXG5cdFx0XHR0aGlzLl9wbGF5ZXJNb3ZlciA9IG5ldyBQbGF5ZXJNb3Zlcih0aGlzLl9zZXRMZXZlbENhbGxiYWNrKTtcclxuXHRcdHRoaXMuX3BsYXllck1vdmVyLnNldExldmVsRGF0YShcclxuXHRcdFx0dGhpcy5fcGxheWVyLFxyXG5cdFx0XHR0aGlzLl9ibG9ja3MsXHJcblx0XHRcdHRoaXMuX2xldmVsRGF0YS5zdGFnZSxcclxuXHRcdFx0dGhpcy5fbGV2ZWxEYXRhLmJvcmRlcnMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxhdW5jaFRpY2tlcigpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnRpY2tlci5hZGQodGhpcy50aWNrLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlQWxsQ29sbGlzaW9uT2JqZWN0cygpOnZvaWQge1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goYmxvY2sgPT4gYmxvY2sucmVtb3ZlQWxsTGlzdGVuZXJzKCkpO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IG51bGw7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5sZW5ndGggPSAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVCbG9jayhibG9ja0RhdGE6SUJsb2NrKTpCbG9jayB7XHJcblx0XHRjb25zdCBibG9ja1R5cGVEYXRhOklUeXBlID0gdGhpcy5fYmxvY2tUeXBlQnlUeXBlSWQuZ2V0KGJsb2NrRGF0YS50eXBlKTtcclxuXHRcdGNvbnN0IGJsb2NrOkJsb2NrID0gbmV3IEJsb2NrKGJsb2NrRGF0YSwgYmxvY2tUeXBlRGF0YSk7XHJcblx0XHRibG9jay54ID0gYmxvY2tEYXRhLnggLSBibG9ja1R5cGVEYXRhLmNvbGxpc2lvbi5sZWZ0O1xyXG5cdFx0YmxvY2sueSA9IGJsb2NrRGF0YS55IC0gYmxvY2tUeXBlRGF0YS5jb2xsaXNpb24udG9wO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmFkZENoaWxkKGJsb2NrKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5wdXNoKGJsb2NrKTtcclxuXHJcblx0XHRpZiAoR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpIHtcclxuXHRcdFx0dGhpcy5tYWtlQmxvY2tJbnRlcmFjdGl2ZShibG9jayk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGJsb2NrO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhZGRLZXlMaXN0ZW5lcnMoKTp2b2lkIHtcclxuXHRcdFdpbmRvd0V2ZW50cy5hZGQoXHJcblx0XHRcdFdpbmRvd0V2ZW50cy5LRVlfRE9XTixcclxuXHRcdFx0KGU6S2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMua2V5RG93bkhhbmRsZXIoZSk7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cclxuXHRcdFdpbmRvd0V2ZW50cy5hZGQoXHJcblx0XHRcdFdpbmRvd0V2ZW50cy5LRVlfVVAsXHJcblx0XHRcdChlOktleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLmtleVVwSGFuZGxlcihlKTtcclxuXHRcdFx0fSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRDb2xsaXNpb25PYmplY3RzU29ydGVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25PYmplY3RzU29ydGVyID0gbmV3IENvbGxpc2lvbk9iamVjdHNTb3J0ZXIodGhpcy5fY29sbGlzaW9uc0xheWVyKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdGljaygpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoUGxheWVyU3BlZWRYKCk7XHJcblx0XHR0aGlzLnJlZnJlc2hQbGF5ZXJTcGVlZFkoKTtcclxuXHRcdHRoaXMuX3BsYXllck1vdmVyLnJlZnJlc2goKTtcclxuXHRcdGlmIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSkge1xyXG5cdFx0XHR0aGlzLnJlZnJlc2hDb2xsaXNpb25SZWN0YW5nbGVzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25PYmplY3RzU29ydGVyLnNvcnQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaENvbGxpc2lvblJlY3RhbmdsZXMoKTp2b2lkIHtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgaGl0OiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRpICE9IGogJiZcclxuXHRcdFx0XHRcdEhpdFRlc3QuaG9yaXpvbnRhbCh0aGlzLl9ibG9ja3NbaV0sIHRoaXMuX2Jsb2Nrc1tqXSkgJiZcclxuXHRcdFx0XHRcdEhpdFRlc3QudmVydGljYWwodGhpcy5fYmxvY2tzW2ldLCB0aGlzLl9ibG9ja3Nbal0pXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRoaXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tpXS5zaG93QmxvY2tIaXQoaGl0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaFBsYXllclNwZWVkWCgpOnZvaWQge1xyXG5cdFx0Y29uc3Qgc2xvd2Rvd246Ym9vbGVhbiA9ICF0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX0xFRlQpICYmICF0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX1JJR0hUKTtcclxuXHRcdGlmICghc2xvd2Rvd24gfHwgTWF0aC5hYnModGhpcy5fcGxheWVyLmdldFNwZWVkWCgpKSA+IC4xKSB7XHJcblx0XHRcdGxldCBkaXJlY3Rpb246IG51bWJlcjtcclxuXHRcdFx0aWYgKHRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfTEVGVCkgJiYgdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9SSUdIVCkpIHtcclxuXHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLl9sYXN0UHJlc3NlZERpcmVjdGlvbkJ1dHRvbiA9PSBLRVlfTEVGVCA/IC0xIDogMTtcclxuXHRcdFx0fSBlbHNlIGlmIChzbG93ZG93bikge1xyXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSA+IDAgPyAtMSA6IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9MRUZUKSA/IC0xIDogMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgZGlzdGFuY2U6IG51bWJlcjtcclxuXHRcdFx0aWYgKHNsb3dkb3duKSB7XHJcblx0XHRcdFx0ZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRpc3RhbmNlID0gUGxheWVyLk1BWF9NT1ZJTkdfU1BFRUQgLSB0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkgKiBkaXJlY3Rpb247XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWCh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkgKyBkaXN0YW5jZSAqIGRpcmVjdGlvbiAqIFBsYXllci5NT1ZJTkdfQUNDRUxFUkFUSU9OX0ZBQ1RPUik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRYKDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoUGxheWVyU3BlZWRZKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fcGxheWVyLm9uVGhlRmxvb3IgJiYgdGhpcy5fanVtcCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKFBsYXllci5KVU1QX1NQRUVEKTtcclxuXHRcdFx0dGhpcy5fanVtcCA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5fcGxheWVyLm9uVGhlRmxvb3IgJiYgIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfVVApICYmIHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSA8IDApIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWSgwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFkodGhpcy5fcGxheWVyLmdldFNwZWVkWSgpICsgUGxheWVyLkdSQVZJVFkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBrZXlEb3duSGFuZGxlcihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xyXG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdFx0Y2FzZSBLRVlfTEVGVDpcclxuXHRcdFx0Y2FzZSBLRVlfUklHSFQ6XHJcblx0XHRcdFx0dGhpcy5fbGFzdFByZXNzZWREaXJlY3Rpb25CdXR0b24gPSBlLmNvZGU7XHJcblx0XHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGUuY29kZSwgdHJ1ZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9VUDpcclxuXHRcdFx0XHRpZiAoIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChlLmNvZGUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9qdW1wID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLnNldChlLmNvZGUsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0JBQ0tRVU9URTpcclxuXHRcdFx0XHRpZiAoIXByb2Nlc3MuZW52LlJFTEVBU0UpIHtcclxuXHRcdFx0XHRcdEdsb2JhbHMuc2V0RGV2ZWxvcGVyTW9kZSghR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpO1xyXG5cdFx0XHRcdFx0aWYgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZW5hYmxlRGV2ZWxvcGVyTW9kZSgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXNhYmxlRGV2ZWxvcGVyTW9kZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJEZXZlbG9wZXIgbW9kZSBpcyBcIiArIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSA/IFwiT05cIiA6IFwiT0ZGXCIpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9KOlxyXG5cdFx0XHRcdGlmICghcHJvY2Vzcy5lbnYuUkVMRUFTRSkge1xyXG5cdFx0XHRcdFx0dGhpcy5wcmludExldmVsSnNvbigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0RFTEVURTpcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVNlbGVjdGVkQmxvY2tJZkNhbigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfQ09NTUE6XHJcblx0XHRcdGNhc2UgS0VZX1BFUklPRDpcclxuXHRcdFx0XHRpZiAodGhpcy5fc2VsZWN0ZWRCbG9jayAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRCbG9ja0RhdGE6SUJsb2NrID0gdGhpcy5fc2VsZWN0ZWRCbG9jay5nZXREYXRhKCk7XHJcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRCbG9ja1R5cGVEYXRhOklUeXBlID0gdGhpcy5fYmxvY2tUeXBlQnlUeXBlSWQuZ2V0KHNlbGVjdGVkQmxvY2tEYXRhLnR5cGUpO1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4T2ZTZWxlY3RlZEJsb2NrVHlwZTpudW1iZXIgPSB0aGlzLl9ibG9ja3NUeXBlcy5pbmRleE9mKHNlbGVjdGVkQmxvY2tUeXBlRGF0YSk7XHJcblx0XHRcdFx0XHRsZXQgbmV4dFR5cGVJbmRleDpudW1iZXIgPSBlLmNvZGUgPT0gS0VZX0NPTU1BID8gaW5kZXhPZlNlbGVjdGVkQmxvY2tUeXBlIC0gMSA6IGluZGV4T2ZTZWxlY3RlZEJsb2NrVHlwZSArIDE7XHJcblx0XHRcdFx0XHRpZiAobmV4dFR5cGVJbmRleCA8IDApXHJcblx0XHRcdFx0XHRcdG5leHRUeXBlSW5kZXggPSB0aGlzLl9ibG9ja3NUeXBlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAobmV4dFR5cGVJbmRleCA+PSB0aGlzLl9ibG9ja3NUeXBlcy5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdG5leHRUeXBlSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdGVkQmxvY2tEYXRhLnggPSB0aGlzLl9zZWxlY3RlZEJsb2NrLmNvbGxpc2lvbkxlZnQoKTtcclxuXHRcdFx0XHRcdHNlbGVjdGVkQmxvY2tEYXRhLnkgPSB0aGlzLl9zZWxlY3RlZEJsb2NrLmNvbGxpc2lvblRvcCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5kZWxldGVTZWxlY3RlZEJsb2NrSWZDYW4oKTtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3RlZEJsb2NrRGF0YS50eXBlID0gdGhpcy5fYmxvY2tzVHlwZXNbbmV4dFR5cGVJbmRleF0uaWQ7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEJsb2NrKHRoaXMuY3JlYXRlQmxvY2soc2VsZWN0ZWRCbG9ja0RhdGEpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9OOlxyXG5cdFx0XHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3QmxvY2tTaGlmdDpudW1iZXIgPSAyMDtcclxuXHRcdFx0XHRcdGxldCBuZXdCbG9ja0RhdGE6SUJsb2NrID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLl9zZWxlY3RlZEJsb2NrLmdldFR5cGVEYXRhKCkuaWQsXHJcblx0XHRcdFx0XHRcdHg6IHRoaXMuX3NlbGVjdGVkQmxvY2suY29sbGlzaW9uTGVmdCgpICsgbmV3QmxvY2tTaGlmdCxcclxuXHRcdFx0XHRcdFx0eTogdGhpcy5fc2VsZWN0ZWRCbG9jay5jb2xsaXNpb25Ub3AoKSAtIG5ld0Jsb2NrU2hpZnQsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RCbG9jayh0aGlzLmNyZWF0ZUJsb2NrKG5ld0Jsb2NrRGF0YSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZS5jb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2VsZWN0QmxvY2soYmxvY2s6QmxvY2spOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdGVkQmxvY2sgPT0gYmxvY2spIHJldHVybjtcclxuXHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpXHJcblx0XHRcdHRoaXMuX3NlbGVjdGVkQmxvY2suaGlkZVNlbGVjdGlvbigpO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IGJsb2NrO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jay5zaG93U2VsZWN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRlbGV0ZVNlbGVjdGVkQmxvY2tJZkNhbigpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdGVkQmxvY2sgIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9zZWxlY3RlZEJsb2NrKTtcclxuXHRcdFx0bGV0IGJsb2NrSW5kZXggPSB0aGlzLl9ibG9ja3MuaW5kZXhPZih0aGlzLl9zZWxlY3RlZEJsb2NrKTtcclxuXHRcdFx0dGhpcy5fYmxvY2tzLnNwbGljZShibG9ja0luZGV4LCAxKTtcclxuXHRcdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGVuYWJsZURldmVsb3Blck1vZGUoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BsYXllci5zaG93Q29sbGlzaW9uUmVjdGFuZ2xlKDB4MDBmZjAwKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHRoaXMubWFrZUJsb2NrSW50ZXJhY3RpdmUoYmxvY2spKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbWFrZUJsb2NrSW50ZXJhY3RpdmUoYmxvY2s6QmxvY2spOnZvaWQge1xyXG5cdFx0YmxvY2suaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cdFx0YmxvY2suYWRkTGlzdGVuZXIoUE9JTlRFUl9ET1dOLCB0aGlzLmJsb2NrUG9pbnRlckRvd25IYW5kbGVyLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbWFrZUJsb2NrTm90SW50ZXJhY3RpdmUoYmxvY2s6QmxvY2spOnZvaWQge1xyXG5cdFx0YmxvY2suaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuXHRcdGJsb2NrLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBibG9ja1BvaW50ZXJEb3duSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRCbG9jazpCbG9jayA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEJsb2NrKTtcclxuXHRcdGNvbnN0IHBvaW50ZXJEb3duUG9pbnQ6UG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuZGF0YS5nbG9iYWwueCwgZXZlbnQuZGF0YS5nbG9iYWwueSk7XHJcblx0XHRjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQgPSBjdXJyZW50QmxvY2sudG9Mb2NhbChwb2ludGVyRG93blBvaW50KTtcclxuXHRcdGN1cnJlbnRCbG9jay5hZGRMaXN0ZW5lcihQT0lOVEVSX01PVkUsIHRoaXMuYmxvY2tQb2ludGVyTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0Y3VycmVudEJsb2NrLmFkZExpc3RlbmVyKFBPSU5URVJfVVAsIHRoaXMuYmxvY2tQb2ludGVyVXBIYW5kbGVyLCB0aGlzKTtcclxuXHRcdGN1cnJlbnRCbG9jay5hZGRMaXN0ZW5lcihQT0lOVEVSX1VQX09VVFNJREUsIHRoaXMuYmxvY2tQb2ludGVyVXBIYW5kbGVyLCB0aGlzKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdEJsb2NrKGN1cnJlbnRCbG9jayk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlck1vdmVIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudEJsb2NrOkJsb2NrID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgQmxvY2spO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyRHJhZ1BvaW50OlBvaW50ID0gdGhpcy50b0xvY2FsKG5ldyBQb2ludChldmVudC5kYXRhLmdsb2JhbC54LCBldmVudC5kYXRhLmdsb2JhbC55KSk7XHJcblx0XHRjdXJyZW50QmxvY2sueCA9IE1hdGgucm91bmQoY29udGFpbmVyRHJhZ1BvaW50LnggLSBjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQueCk7XHJcblx0XHRjdXJyZW50QmxvY2sueSA9IE1hdGgucm91bmQoY29udGFpbmVyRHJhZ1BvaW50LnkgLSBjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQueSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlclVwSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRCbG9jazpCbG9jayA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEJsb2NrKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9NT1ZFKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9VUCk7XHJcblx0XHRjdXJyZW50QmxvY2sucmVtb3ZlQWxsTGlzdGVuZXJzKFBPSU5URVJfVVBfT1VUU0lERSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRpc2FibGVEZXZlbG9wZXJNb2RlKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wbGF5ZXIuaGlkZUNvbGxpc2lvblJlY3RhbmdsZSgpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goKGJsb2NrOkJsb2NrKSA9PiB7XHJcblx0XHRcdHRoaXMubWFrZUJsb2NrTm90SW50ZXJhY3RpdmUoYmxvY2spO1xyXG5cdFx0XHRibG9jay5oaWRlQmxvY2tIaXQoKTtcclxuXHRcdFx0YmxvY2suaGlkZVNlbGVjdGlvbigpO1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrID0gbnVsbDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcmludExldmVsSnNvbigpOnZvaWQge1xyXG5cdFx0Y29uc3QgYmxvY2tzRGF0YTpJQmxvY2tbXSA9IFtdO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuLmZvckVhY2goKGNvbGxpc2lvbk9iamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAoY29sbGlzaW9uT2JqZWN0IGluc3RhbmNlb2YgQmxvY2spIHtcclxuXHRcdFx0XHRibG9ja3NEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Li4uY29sbGlzaW9uT2JqZWN0LmdldERhdGEoKSxcclxuXHRcdFx0XHRcdHg6IGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25MZWZ0KCksXHJcblx0XHRcdFx0XHR5OiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uVG9wKCksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhOklMZXZlbCA9IHtcclxuXHRcdFx0Li4udGhpcy5fbGV2ZWxEYXRhLFxyXG5cdFx0XHRibG9ja3M6YmxvY2tzRGF0YSxcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IGxldmVsSnNvbiA9IEpTT04uc3RyaW5naWZ5KGxldmVsRGF0YSwgbnVsbCwgMik7XHJcblx0XHRjb25zb2xlLmxvZyhsZXZlbEpzb24pO1xyXG5cdFx0dm9pZCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsZXZlbEpzb24pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBrZXlVcEhhbmRsZXIoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcclxuXHRcdGlmIChlLmNvZGUgPT0gS0VZX1VQKSB7XHJcblx0XHRcdHRoaXMuX2p1bXAgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0XHRjYXNlIEtFWV9VUDpcclxuXHRcdFx0Y2FzZSBLRVlfTEVGVDpcclxuXHRcdFx0Y2FzZSBLRVlfUklHSFQ6XHJcblx0XHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGUuY29kZSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbGxpc2lvbk9iamVjdCB7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTS0lOX05BTUU6c3RyaW5nID0gXCJpbWcvcGxheWVyLnBuZ1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JBVklUWTpudW1iZXIgPSAwLjU4ODY7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBKVU1QX1NQRUVEOm51bWJlciA9IC0xNztcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1BWF9NT1ZJTkdfU1BFRUQ6bnVtYmVyID0gODtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1PVklOR19BQ0NFTEVSQVRJT05fRkFDVE9SOm51bWJlciA9IC40O1xyXG5cclxuXHRwdWJsaWMgb25UaGVGbG9vcjpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX3NwZWVkWDpudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX3NwZWVkWTpudW1iZXIgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZENoaWxkKFNwcml0ZS5mcm9tKFBsYXllci5TS0lOX05BTUUpKTtcclxuXHRcdHRoaXMuc2V0TG9jYWxDb2xsaXNpb25WYWx1ZXMoMzAsIDE1NywgMTUsIDE0Mik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0U3BlZWRYKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHR0aGlzLl9zcGVlZFggPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRTcGVlZFgoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NwZWVkWDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRTcGVlZFkodmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuX3NwZWVkWSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFNwZWVkWSgpOm51bWJlciB7XHJcblx0XHRjb25zdCBtYXhTcGVlZFk6bnVtYmVyID0gMzA7XHJcblx0XHRyZXR1cm4gTWF0aC5taW4odGhpcy5fc3BlZWRZLCBtYXhTcGVlZFkpO1xyXG5cdH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcbmltcG9ydCB7SUxldmVsLCBJTGV2ZWxCb3JkZXJzLCBJU3RhZ2V9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNb3ZlciB7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSE9SSVpPTlRBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBWRVJUSUNBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyO1xyXG5cdHByaXZhdGUgX3BsYXllckNlbnRlclg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX3BsYXllckNlbnRlclk6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2Jsb2NrczpCbG9ja1tdO1xyXG5cdHByaXZhdGUgX3N0YWdlOklTdGFnZTtcclxuXHRwcml2YXRlIF9ib3JkZXJzOklMZXZlbEJvcmRlcnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfc2V0TGV2ZWxDYWxsYmFjazoobGV2ZWw6bnVtYmVyKSA9PiBJTGV2ZWwsXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TGV2ZWxEYXRhKFxyXG5cdFx0cGxheWVyOlBsYXllcixcclxuXHRcdGJsb2NrczpCbG9ja1tdLFxyXG5cdFx0c3RhZ2U6SVN0YWdlLFxyXG5cdFx0Ym9yZGVyczpJTGV2ZWxCb3JkZXJzLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5fcGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5fcGxheWVyQ2VudGVyWCA9IHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkNlbnRlclgoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdHRoaXMuX3BsYXllckNlbnRlclkgPSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25DZW50ZXJZKCkgKyB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHRcdHRoaXMuX2Jsb2NrcyA9IGJsb2NrcztcclxuXHRcdHRoaXMuX3N0YWdlID0gc3RhZ2U7XHJcblx0XHR0aGlzLl9ib3JkZXJzID0gYm9yZGVycztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWZyZXNoKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fcGxheWVyLmdldFNwZWVkWCgpICE9PSAwKSB7XHJcblx0XHRcdHRoaXMubW92ZShcclxuXHRcdFx0XHRQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMLFxyXG5cdFx0XHRcdHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRYKDApXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCkgIT09IDApIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLm9uVGhlRmxvb3IgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5tb3ZlKFxyXG5cdFx0XHRcdFBsYXllck1vdmVyLlZFUlRJQ0FMLFxyXG5cdFx0XHRcdHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5fcGxheWVyLmdldFNwZWVkWSgpID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9wbGF5ZXIub25UaGVGbG9vciA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKDApO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1vdmUoXHJcblx0XHRkaXJlY3Rpb246c3ltYm9sLFxyXG5cdFx0c3BlZWQ6bnVtYmVyLFxyXG5cdFx0b25MaW1pdFBvc2l0aW9uOigpID0+IHZvaWQgPSBudWxsLFxyXG5cdCk6dm9pZCB7XHJcblx0XHRsZXQgbGltaXRQb3NpdGlvbjpudW1iZXIgPSBudWxsO1xyXG5cdFx0bGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oZGlyZWN0aW9uKTtcclxuXHRcdGxldCB0YXJnZXRQb3NpdGlvbjpudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuZ2V0UG9zaXRpb24oZGlyZWN0aW9uKSArIHNwZWVkKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKChibG9jazpCbG9jaykgPT4ge1xyXG5cdFx0XHRsZXQgYmxvY2tMaW1pdFBvc2l0aW9uOm51bWJlciA9IHRoaXMuY2FsY3VsYXRlQmxvY2tMaW1pdFBvc2l0aW9uKGJsb2NrLCBkaXJlY3Rpb24sIHNwZWVkKTtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA8PSBibG9ja0xpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdHRhcmdldFBvc2l0aW9uID4gYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGJsb2NrKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0bGltaXRQb3NpdGlvbiA9IGxpbWl0UG9zaXRpb24gIT09IG51bGwgPyBNYXRoLm1pbihsaW1pdFBvc2l0aW9uLCBibG9ja0xpbWl0UG9zaXRpb24pIDogYmxvY2tMaW1pdFBvc2l0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPj0gYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA8IGJsb2NrTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0dGhpcy5oaXRUZXN0KGRpcmVjdGlvbiwgdGhpcy5fcGxheWVyLCBibG9jaylcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5tYXgobGltaXRQb3NpdGlvbiwgYmxvY2tMaW1pdFBvc2l0aW9uKSA6IGJsb2NrTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBzdGFnZUxpbWl0UG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVN0YWdlTGltaXRQb3NpdGlvbihkaXJlY3Rpb24sIHNwZWVkLCB0aGlzLl9zdGFnZSk7XHJcblx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPD0gc3RhZ2VMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0dGFyZ2V0UG9zaXRpb24gPiBzdGFnZUxpbWl0UG9zaXRpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0bGV0IGJvcmRlciA9IHRoaXMuZ2V0Qm9yZGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChib3JkZXIgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByb2Nlc3NCb3JkZXIoYm9yZGVyLCBkaXJlY3Rpb24sIHNwZWVkLCB0YXJnZXRQb3NpdGlvbik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5taW4obGltaXRQb3NpdGlvbiwgc3RhZ2VMaW1pdFBvc2l0aW9uKSA6IHN0YWdlTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPj0gc3RhZ2VMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0dGFyZ2V0UG9zaXRpb24gPCBzdGFnZUxpbWl0UG9zaXRpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0bGV0IGJvcmRlciA9IHRoaXMuZ2V0Qm9yZGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChib3JkZXIgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByb2Nlc3NCb3JkZXIoYm9yZGVyLCBkaXJlY3Rpb24sIHNwZWVkLCB0YXJnZXRQb3NpdGlvbik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5tYXgobGltaXRQb3NpdGlvbiwgc3RhZ2VMaW1pdFBvc2l0aW9uKSA6IHN0YWdlTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGltaXRQb3NpdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnNldFBvc2l0aW9uKGRpcmVjdGlvbiwgbGltaXRQb3NpdGlvbik7XHJcblx0XHRcdGlmIChvbkxpbWl0UG9zaXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRvbkxpbWl0UG9zaXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIHRhcmdldFBvc2l0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJvY2Vzc0JvcmRlcihib3JkZXI6bnVtYmVyLCBkaXJlY3Rpb246c3ltYm9sLCBzcGVlZDpudW1iZXIsIHRhcmdldFBvc2l0aW9uOm51bWJlcik6dm9pZCB7XHJcblx0XHRsZXQgbmV3U3RhZ2UgPSB0aGlzLl9zZXRMZXZlbENhbGxiYWNrKGJvcmRlcikuc3RhZ2U7XHJcblx0XHRsZXQgc3RhZ2VMaW1pdFBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVTdGFnZUxpbWl0UG9zaXRpb24oZGlyZWN0aW9uLCBzcGVlZCwgdGhpcy5fc3RhZ2UpO1xyXG5cdFx0bGV0IGV4Y2Vzc0Rpc3RhbmNlID0gTWF0aC5hYnModGFyZ2V0UG9zaXRpb24gLSBzdGFnZUxpbWl0UG9zaXRpb24pIC0gMTtcclxuXHRcdGxldCBuZXh0UGxheWVyUG9zaXRpb246bnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQbGF5ZXJQb3NpdGlvbkZvclRoZU5leHRMZXZlbChkaXJlY3Rpb24sIHNwZWVkLCBuZXdTdGFnZSwgZXhjZXNzRGlzdGFuY2UpO1xyXG5cdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIG5leHRQbGF5ZXJQb3NpdGlvbik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZVBsYXllclBvc2l0aW9uRm9yVGhlTmV4dExldmVsKFxyXG5cdFx0ZGlyZWN0aW9uOnN5bWJvbCxcclxuXHRcdHNwZWVkOm51bWJlcixcclxuXHRcdHN0YWdlOklTdGFnZSxcclxuXHRcdGV4Y2Vzc0Rpc3RhbmNlOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGxldCBvcHBvc2l0ZUxpbWl0Om51bWJlciA9IHRoaXMuY2FsY3VsYXRlU3RhZ2VMaW1pdFBvc2l0aW9uKGRpcmVjdGlvbiwgc3BlZWQgKiAtMSwgc3RhZ2UpO1xyXG5cdFx0aWYgKGRpcmVjdGlvbiA9PSBQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMKSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCArIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvcHBvc2l0ZUxpbWl0IC0gZXhjZXNzRGlzdGFuY2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCArIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvcHBvc2l0ZUxpbWl0IC0gZXhjZXNzRGlzdGFuY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Qm9yZGVyKGRpcmVjdGlvbjpzeW1ib2wsIHNwZWVkOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gKHNwZWVkID4gMCkgPyB0aGlzLl9ib3JkZXJzLnJpZ2h0IDogdGhpcy5fYm9yZGVycy5sZWZ0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIChzcGVlZCA+IDApID8gdGhpcy5fYm9yZGVycy5ib3R0b20gOiB0aGlzLl9ib3JkZXJzLnRvcDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCwgdmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIueCA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnkgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCk6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLng7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLnk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZUJsb2NrTGltaXRQb3NpdGlvbihibG9jazpDb2xsaXNpb25PYmplY3QsIGRpcmVjdGlvbjpzeW1ib2wsIHNwZWVkOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIGJsb2NrLmNvbGxpc2lvbkxlZnQoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblJpZ2h0KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGJsb2NrLmNvbGxpc2lvblJpZ2h0KCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gYmxvY2suY29sbGlzaW9uVG9wKCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Cb3R0b20oKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gYmxvY2suY29sbGlzaW9uQm90dG9tKCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxjdWxhdGVTdGFnZUxpbWl0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCwgc3BlZWQ6bnVtYmVyLCBzdGFnZTpJU3RhZ2UpOm51bWJlciB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdHJldHVybiBzdGFnZS53aWR0aCAtIHRoaXMuX3BsYXllckNlbnRlclg7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIC10aGlzLl9wbGF5ZXJDZW50ZXJYO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YWdlLmhlaWdodCAtIHRoaXMuX3BsYXllckNlbnRlclk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIC10aGlzLl9wbGF5ZXJDZW50ZXJZO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhpdFRlc3QoZGlyZWN0aW9uOnN5bWJvbCwgb2JqZWN0MTpDb2xsaXNpb25PYmplY3QsIG9iamVjdDI6Q29sbGlzaW9uT2JqZWN0KTpib29sZWFuIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gSGl0VGVzdC52ZXJ0aWNhbChvYmplY3QxLCBvYmplY3QyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBIaXRUZXN0Lmhvcml6b250YWwob2JqZWN0MSwgb2JqZWN0Mik7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtJTGV2ZWwsIElMZXZlbHNNZXRhZGF0YX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsc01hbmFnZXIge1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9sZXZlbEJ5SWQ6TWFwPG51bWJlciwgSUxldmVsPiA9IG5ldyBNYXA8bnVtYmVyLCBJTGV2ZWw+KCk7XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2xldmVsc01ldGFkYXRhOklMZXZlbHNNZXRhZGF0YTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBhZGRMZXZlbChsZXZlbERhdGE6SUxldmVsKTp2b2lkIHtcclxuXHRcdExldmVsc01hbmFnZXIuX2xldmVsQnlJZC5zZXQobGV2ZWxEYXRhLmlkLCBsZXZlbERhdGEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhZGRMZXZlbHNNZXRhZGF0YShtZXRhZGF0YTpJTGV2ZWxzTWV0YWRhdGEpOnZvaWQge1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5fbGV2ZWxzTWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0TGV2ZWwobGV2ZWxJZDpudW1iZXIpOklMZXZlbCB7XHJcblx0XHRyZXR1cm4gTGV2ZWxzTWFuYWdlci5fbGV2ZWxCeUlkLmdldChsZXZlbElkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0TGV2ZWxzTWV0YWRhdGEoKTpJTGV2ZWxzTWV0YWRhdGEge1xyXG5cdFx0cmV0dXJuIExldmVsc01hbmFnZXIuX2xldmVsc01ldGFkYXRhO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0UmVxdWVzdCB7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3N1Y2Nlc3NSZXF1ZXN0c0lkczpTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0czpNYXA8c3RyaW5nLCBBYnN0cmFjdFJlcXVlc3Q+ID0gbmV3IE1hcDxzdHJpbmcsIEFic3RyYWN0UmVxdWVzdD4oKTtcclxuXHJcblx0cHJvdGVjdGVkIF9yZXF1ZXN0SWQ6c3RyaW5nID0gbnVsbDtcclxuXHRwcml2YXRlIF9yZXF1ZXN0UHJvbWlzZTpQcm9taXNlPHZvaWQ+O1xyXG5cclxuXHRwdWJsaWMgY3JlYXRlUHJvbWlzZShmb3JjZWRSZXF1ZXN0OmJvb2xlYW4gPSBmYWxzZSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRpZiAodGhpcy5fcmVxdWVzdElkICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChmb3JjZWRSZXF1ZXN0KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlVW5pcXVlUmVxdWVzdFByb21pc2UoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoQWJzdHJhY3RSZXF1ZXN0Ll9zdWNjZXNzUmVxdWVzdHNJZHMuaGFzKHRoaXMuX3JlcXVlc3RJZCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVtcHR5UHJvbWlzZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zdCB1bmlxdWVSZXF1ZXN0OkFic3RyYWN0UmVxdWVzdCA9IEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuZ2V0KHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRpZiAodW5pcXVlUmVxdWVzdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVXYWl0UHJvbWlzZSh1bmlxdWVSZXF1ZXN0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVVuaXF1ZVJlcXVlc3RQcm9taXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0UHJvbWlzZUZhY3RvcnkoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRSZXF1ZXN0UHJvbWlzZSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3RQcm9taXNlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVFbXB0eVByb21pc2UoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRyZXNvbHZlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlV2FpdFByb21pc2UodW5pcXVlUmVxdWVzdDpBYnN0cmFjdFJlcXVlc3QpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dW5pcXVlUmVxdWVzdC5nZXRSZXF1ZXN0UHJvbWlzZSgpXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxyXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiByZWplY3QoKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlVW5pcXVlUmVxdWVzdFByb21pc2UoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuc2V0KHRoaXMuX3JlcXVlc3RJZCwgdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXF1ZXN0UHJvbWlzZSA9IHRoaXMucmVxdWVzdFByb21pc2VGYWN0b3J5KCk7XHJcblx0XHRcdHRoaXMuX3JlcXVlc3RQcm9taXNlXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0QWJzdHJhY3RSZXF1ZXN0Ll9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0cy5kZWxldGUodGhpcy5fcmVxdWVzdElkKTtcclxuXHRcdFx0XHRcdEFic3RyYWN0UmVxdWVzdC5fc3VjY2Vzc1JlcXVlc3RzSWRzLmFkZCh0aGlzLl9yZXF1ZXN0SWQpO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuZGVsZXRlKHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRyZWplY3QoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHJlcXVlc3RQcm9taXNlRmFjdG9yeSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59IiwiaW1wb3J0IExvYWRlciA9IFBJWEkubG9hZGVycy5Mb2FkZXI7XHJcbmltcG9ydCBNaW5pU2lnbmFsQmluZGluZyA9IFBJWEkuTWluaVNpZ25hbEJpbmRpbmc7XHJcbmltcG9ydCBMb2FkZXJPcHRpb25zID0gUElYSS5sb2FkZXJzLkxvYWRlck9wdGlvbnM7XHJcbmltcG9ydCBSZXNvdXJjZSA9IFBJWEkubG9hZGVycy5SZXNvdXJjZTtcclxuaW1wb3J0IEFic3RyYWN0UmVxdWVzdCBmcm9tIFwiLi9BYnN0cmFjdFJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpeGlSZXF1ZXN0IGV4dGVuZHMgQWJzdHJhY3RSZXF1ZXN0IHtcclxuXHRwcml2YXRlIF9yZXN1bHQ6YW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3VybDpzdHJpbmcsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fcmVxdWVzdElkID0gXCJQaXhpUmVxdWVzdDo6XCIgKyB0aGlzLl91cmw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UmVzdWx0KCk6YW55IHtcclxuXHRcdHJldHVybiB0aGlzLl9yZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVxdWVzdFByb21pc2VGYWN0b3J5KCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBsb2FkZXI6TG9hZGVyID0gbmV3IExvYWRlcigpO1xyXG5cclxuXHRcdFx0bGV0IHN1Y2Nlc3M6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRjb25zdCBvbkxvYWRTaWduYWw6TWluaVNpZ25hbEJpbmRpbmcgPSBsb2FkZXIub25Mb2FkLmFkZCgoKSA9PiB7XHJcblx0XHRcdFx0c3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bGV0IGVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0bGV0IGVycm9yTWVzc2FnZTpzdHJpbmc7XHJcblx0XHRcdGNvbnN0IG9uRXJyb3JTaWduYWw6TWluaVNpZ25hbEJpbmRpbmcgPSBsb2FkZXIub25FcnJvci5hZGQoKGRhdGE6YW55KSA9PiB7XHJcblx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdGVycm9yTWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsZXQgb25Db21wbGV0ZVNpZ25hbDpNaW5pU2lnbmFsQmluZGluZztcclxuXHRcdFx0b25Db21wbGV0ZVNpZ25hbCA9IGxvYWRlci5vbkNvbXBsZXRlLmFkZCgoKSA9PiB7XHJcblx0XHRcdFx0b25Mb2FkU2lnbmFsLmRldGFjaCgpO1xyXG5cdFx0XHRcdG9uRXJyb3JTaWduYWwuZGV0YWNoKCk7XHJcblx0XHRcdFx0b25Db21wbGV0ZVNpZ25hbC5kZXRhY2goKTtcclxuXHRcdFx0XHRpZiAoc3VjY2VzcyAmJiAhZXJyb3IpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc3VsdCA9IGxvYWRlci5yZXNvdXJjZXNbdGhpcy5fdXJsXT8uZGF0YTtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgcmVzb3VyY2U6XCIsIGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRyZWplY3QoZXJyb3JNZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9hZGVyT3B0aW9uczpMb2FkZXJPcHRpb25zID0ge307XHJcblx0XHRcdGxvYWRlck9wdGlvbnMuY3Jvc3NPcmlnaW4gPSBmYWxzZTtcclxuXHRcdFx0bG9hZGVyT3B0aW9ucy5sb2FkVHlwZSA9IFJlc291cmNlLkxPQURfVFlQRS5YSFI7XHJcblxyXG5cdFx0XHRsb2FkZXIuYWRkKHRoaXMuX3VybCwgdGhpcy5fdXJsLCBsb2FkZXJPcHRpb25zKTtcclxuXHRcdFx0bG9hZGVyLmxvYWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9taXNlc0dyb3VwIHtcclxuXHRwdWJsaWMgc3RhdGljIHBhY2soZmFjdG9yaWVzOigoKSA9PiBQcm9taXNlPHZvaWQ+KVtdKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRsZXQgY29tcGxldGVkQ291bnRlcjpudW1iZXIgPSAwO1xyXG5cdFx0XHRmYWN0b3JpZXMuZm9yRWFjaCgoZmFjdG9yeTooKSA9PiBQcm9taXNlPHZvaWQ+KSA9PiB7XHJcblx0XHRcdFx0ZmFjdG9yeSgpXHJcblx0XHRcdFx0XHQuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlZENvdW50ZXIrKztcclxuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRlZENvdW50ZXIgPT0gZmFjdG9yaWVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHF1ZXVlKGZhY3RvcmllczooKCkgPT4gUHJvbWlzZTx2b2lkPilbXSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgY29tcGxldGVkQ291bnRlcjpudW1iZXIgPSAwO1xyXG5cdFx0XHRjcmVhdGVQcm9taXNlKCk7XHJcblx0XHRcdGZ1bmN0aW9uIGNyZWF0ZVByb21pc2UoKTp2b2lkIHtcclxuXHRcdFx0XHRmYWN0b3JpZXNbY29tcGxldGVkQ291bnRlcl0oKVxyXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZWRDb3VudGVyKys7XHJcblx0XHRcdFx0XHRcdGlmIChjb21wbGV0ZWRDb3VudGVyIDwgZmFjdG9yaWVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVByb21pc2UoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZWplY3QoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb20ge1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoUmFuZG9tLmdlbk51bWJlcihtaW4sIG1heCArIDEpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuTnVtYmVyKG1pbjpudW1iZXIsIG1heDpudW1iZXIpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5TdHIobGVuZ3RoOm51bWJlcik6c3RyaW5nIHtcclxuXHRcdGNvbnN0IGNoYXJzOnN0cmluZ1tdID0gW1xyXG5cdFx0XHRcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIixcclxuXHRcdFx0XCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJtXCIsXHJcblx0XHRcdFwiblwiLCBcIm9cIiwgXCJwXCIsIFwicVwiLCBcInJcIiwgXCJzXCIsIFwidFwiLCBcInVcIiwgXCJ2XCIsIFwid1wiLCBcInhcIiwgXCJ5XCIsIFwielwiLFxyXG5cdFx0XHRcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIiwgXCJLXCIsIFwiTFwiLCBcIk1cIixcclxuXHRcdFx0XCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsIFwiUlwiLCBcIlNcIiwgXCJUXCIsIFwiVVwiLCBcIlZcIiwgXCJXXCIsIFwiWFwiLCBcIllcIiwgXCJaXCIsXHJcblx0XHRdO1xyXG5cdFx0bGV0IHJlc3VsdDpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzdWx0ICs9IFJhbmRvbS5jaG9vc2UuYXBwbHkoUmFuZG9tLCBjaGFycyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5Cb29sZWFuKCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gUmFuZG9tLmNob29zZSh0cnVlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdlbkNvbG9yKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBSYW5kb20uZ2VuSW50ZWdlcigweDAwMDAwMCwgMHhmZmZmZmYpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBjaG9vc2UoLi4uYXJnczphbnlbXSk6YW55IHtcclxuXHRcdHJldHVybiBhcmdzW1JhbmRvbS5nZW5JbnRlZ2VyKDAsIGFyZ3MubGVuZ3RoIC0gMSldO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dFdmVudHMge1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTSVpFOnN0cmluZyA9IFwicmVzaXplXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBLRVlfRE9XTjpzdHJpbmcgPSBcImtleWRvd25cIjtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtFWV9VUDpzdHJpbmcgPSBcImtleXVwXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkKHR5cGU6c3RyaW5nLCBjYWxsYmFjazooLi4ucGFyYW1zOmFueVtdKSA9PiB2b2lkKTooLi4ucGFyYW1zOmFueVtdKSA9PiB2b2lkIHtcclxuXHRcdGNvbnN0IHc6YW55ID0gd2luZG93O1xyXG5cdFx0aWYgKHcuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHR3LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblx0XHR9IGVsc2UgaWYgKHcuYXR0YWNoRXZlbnQpIHtcclxuXHRcdFx0dy5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBjYWxsYmFjayk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3W1wib25cIiArIHR5cGVdID0gY2FsbGJhY2s7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FsbGJhY2s7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZSh0eXBlOnN0cmluZywgY2FsbGJhY2s6KC4uLnBhcmFtczphbnlbXSkgPT4gdm9pZCkge1xyXG5cdFx0Y29uc3QgdzphbnkgPSB3aW5kb3c7XHJcblx0XHRpZiAody5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcblx0XHRcdHcucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmICh3LmRldGFjaEV2ZW50KSB7XHJcblx0XHRcdHcuZGV0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d1tcIm9uXCIgKyB0eXBlXSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==