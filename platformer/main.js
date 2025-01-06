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
      var _this2 = this;

      this._mainContainer = new _MainContainer__WEBPACK_IMPORTED_MODULE_1__["default"]();

      this._mainContainer.showViewBackground(0x2b2d30, 1);

      this._mainContainer.setChangeCameraCallback(function (levelWidth, levelHeight) {
        _this2.changeCameraCallback(levelWidth, levelHeight);
      });

      this.setDefaultMainContainerSize();
      _Globals__WEBPACK_IMPORTED_MODULE_0__["default"].pixiApp.stage.addChild(this._mainContainer);
    }
  }, {
    key: "changeCameraCallback",
    value: function changeCameraCallback(levelWidth, levelHeight) {
      this._fullLevel = !this._fullLevel;

      if (this._fullLevel) {
        this._mainContainer.setSize(levelWidth, levelHeight);
      } else {
        this.setDefaultMainContainerSize();
      }

      this.alignMainContainer();
      this.alignOutOfBoundsCover();
    }
  }, {
    key: "setDefaultMainContainerSize",
    value: function setDefaultMainContainerSize() {
      var mainContainerDefaultWidth = 1270;
      var mainContainerDefaultHeight = 720;

      this._mainContainer.setSize(mainContainerDefaultWidth, mainContainerDefaultHeight);
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
    key: "setChangeCameraCallback",
    value: function setChangeCameraCallback(changeCameraCallback) {
      this._changeCameraCallback = changeCameraCallback;
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(MainContainer.prototype), "init", this).call(this);

      this._level = new _level_Level__WEBPACK_IMPORTED_MODULE_2__["default"](this._player, function (levelId) {
        return _this2.setLevel(levelId);
      }, this._changeCameraCallback);

      this._level.showViewBackground(0xffffff, 1);

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
        return _this3.loadLevel("level10");
      }, function () {
        return _this3.loadLevel("level11");
      }, function () {
        return _this3.loadLevel("level12");
      }, function () {
        return _this3.loadLevel("bonus");
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
      this._level.initTypes();

      this.setStartLevelAndPlayerPosition();
      _Globals__WEBPACK_IMPORTED_MODULE_3__["default"].getEmitter().addListener(_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].CHANGE_DEVELOPER_MODE_EVENT, this.changeDeveloperModeEventHandler, this);

      this._level.launchTicker();

      this.launchTicker();
    }
  }, {
    key: "setStartLevelAndPlayerPosition",
    value: function setStartLevelAndPlayerPosition() {
      this.setLevel(1);
      this._player.x = 97;
      this._player.y = this._level.h - 270; // this.setLevel(2);
      // this._player.x = 762 - this._player.localCollisionLeft();
      // this._player.y = 1270 - this._player.localCollisionTop();
      // this.setLevel(7);
      // this._player.x = 627 - this._player.localCollisionLeft();
      // this._player.y = 1697 - this._player.localCollisionTop();
      // this.setLevel(7);
      // this._player.x = 1721 - this._player.localCollisionLeft();
      // this._player.y = 387 - this._player.localCollisionTop();
      // this.setLevel(10);
      // this._player.x = 988 - this._player.localCollisionLeft();
      // this._player.y = 405 - this._player.localCollisionTop();
      // this.setLevel(11);
      // this._player.x = 846 - this._player.localCollisionLeft();
      // this._player.y = 397 - this._player.localCollisionTop();
      // this.setLevel(1000);
      // this._player.x = 635 - this._player.localCollisionLeft();
      // this._player.y = 564 - this._player.localCollisionTop();
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
        this.stopDrag();
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
/*! exports provided: KEY_UP, KEY_LEFT, KEY_RIGHT, KEY_BACKQUOTE, KEY_J, KEY_DELETE, KEY_COMMA, KEY_PERIOD, KEY_N, KEY_C */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_C", function() { return KEY_C; });
var KEY_UP = "ArrowUp";
var KEY_LEFT = "ArrowLeft";
var KEY_RIGHT = "ArrowRight";
var KEY_BACKQUOTE = "Backquote";
var KEY_J = "KeyJ";
var KEY_DELETE = "Delete";
var KEY_COMMA = "Comma";
var KEY_PERIOD = "Period";
var KEY_N = "KeyN";
var KEY_C = "KeyC";

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

/***/ "./src/level/Collectible.ts":
/*!**********************************!*\
  !*** ./src/level/Collectible.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collectible; });
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


var Collectible =
/*#__PURE__*/
function (_CollisionObject) {
  _inherits(Collectible, _CollisionObject);

  function Collectible(collectibleTypeData, _onHitCallback) {
    var _this;

    _classCallCheck(this, Collectible);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collectible).call(this));
    _this._onHitCallback = _onHitCallback;

    _this.addChild(Sprite.from(collectibleTypeData.image));

    if (collectibleTypeData.collision) {
      var collision = collectibleTypeData.collision;

      _this.setLocalCollisionValues(collision.left, collision.right, collision.top, collision.bottom);
    }

    return _this;
  }

  _createClass(Collectible, [{
    key: "onHit",
    value: function onHit() {
      this._onHitCallback();
    }
  }]);

  return Collectible;
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
    _this._collisionRectangleContainer = new Container();

    _this.addChild(_this._collisionRectangleContainer);

    return _this;
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
        this._collisionRectangleContainer.addChild(this._collisionRectangle);
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
/* harmony import */ var _model_LevelsManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/LevelsManager */ "./src/model/LevelsManager.ts");
/* harmony import */ var _Collectible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Collectible */ "./src/level/Collectible.ts");
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

  function Level(_player, _setLevelCallback, _changeCameraCallback) {
    var _this;

    _classCallCheck(this, Level);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Level).call(this));
    _this._player = _player;
    _this._setLevelCallback = _setLevelCallback;
    _this._changeCameraCallback = _changeCameraCallback;
    _this._pressedButtons = new Map();
    _this._jump = false;
    _this._blockTypeByTypeId = new Map();
    _this._blocksTypes = [];
    _this._imageTypeByTypeId = new Map();
    _this._collectibleTypeByTypeId = new Map();
    _this._collectedIds = [];
    _this._blocks = [];
    _this._images = [];
    _this._collectibles = [];
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
    key: "initTypes",
    value: function initTypes() {
      var _this2 = this;

      _model_LevelsManager__WEBPACK_IMPORTED_MODULE_10__["default"].getLevelsMetadata().imagesTypes.forEach(function (imageData) {
        _this2._imageTypeByTypeId.set(imageData.id, imageData);
      });
      _model_LevelsManager__WEBPACK_IMPORTED_MODULE_10__["default"].getLevelsMetadata().blockTypes.forEach(function (blockTypeData) {
        _this2._blockTypeByTypeId.set(blockTypeData.id, blockTypeData);

        _this2._blocksTypes.push(blockTypeData);
      });
      _model_LevelsManager__WEBPACK_IMPORTED_MODULE_10__["default"].getLevelsMetadata().collectiblesTypes.forEach(function (collectibleData) {
        _this2._collectibleTypeByTypeId.set(collectibleData.id, collectibleData);
      });
    }
  }, {
    key: "setLevel",
    value: function setLevel(levelData) {
      var _this3 = this;

      this._levelData = levelData;

      if (!this._imagesLayer) {
        this._imagesLayer = new Sprite();
        this.addChild(this._imagesLayer);
      }

      if (!this._collectiblesLayer) {
        this._collectiblesLayer = new Sprite();
        this.addChild(this._collectiblesLayer);
      }

      if (!this._collisionsLayer) {
        this._collisionsLayer = new Sprite();
        this.addChild(this._collisionsLayer);
        this.initCollisionObjectsSorter();
      }

      this.removeAllImages();
      this.removeAllCollectibles();
      this.removeAllCollisionObjects();

      if (this._levelData.images) {
        this._levelData.images.forEach(function (imageData) {
          _this3.createImage(imageData);
        });
      }

      if (this._levelData.collectibles) {
        this._levelData.collectibles.forEach(function (collectibleData) {
          if (_this3._collectedIds.indexOf(collectibleData.id) == -1) {
            _this3.createCollectible(collectibleData);
          }
        });
      }

      if (this._levelData.blocks) {
        this._levelData.blocks.forEach(function (blockData) {
          _this3.createBlock(blockData);
        });
      }

      if (!this._player.parent) this._collisionsLayer.addChild(this._player);
      if (!this._playerMover) this._playerMover = new _PlayerMover__WEBPACK_IMPORTED_MODULE_4__["default"](this._setLevelCallback);

      this._playerMover.setLevelData(this._player, this._blocks, this._collectibles, this._levelData.stage, this._levelData.borders);
    }
  }, {
    key: "launchTicker",
    value: function launchTicker() {
      _Globals__WEBPACK_IMPORTED_MODULE_9__["default"].pixiApp.ticker.add(this.tick, this);
    }
  }, {
    key: "removeAllImages",
    value: function removeAllImages() {
      this._imagesLayer.removeChildren();

      this._images.length = 0;
    }
  }, {
    key: "removeAllCollectibles",
    value: function removeAllCollectibles() {
      this._collectiblesLayer.removeChildren();

      this._collectibles.length = 0;
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
    key: "createImage",
    value: function createImage(imageData) {
      var imageTypeData = this._imageTypeByTypeId.get(imageData.type);

      var image = Sprite.from(imageTypeData.image);
      image.x = imageData.x;
      image.y = imageData.y;

      this._imagesLayer.addChild(image);

      this._images.push(image);
    }
  }, {
    key: "createCollectible",
    value: function createCollectible(collectibleData) {
      var _this4 = this;

      var collectibleTypeData = this._collectibleTypeByTypeId.get(collectibleData.type);

      var collectible = new _Collectible__WEBPACK_IMPORTED_MODULE_11__["default"](collectibleTypeData, function () {
        if (collectibleData.type == "cup") {
          alert("YOU WIN!!!");

          _this4._player.setWinnerSkin();
        }

        _this4._collectedIds.push(collectibleData.id);

        collectible.parent.removeChild(collectible);

        _this4._collectibles.splice(_this4._collectibles.indexOf(collectible, 1));
      });
      collectible.x = collectibleData.x;
      collectible.y = collectibleData.y;

      this._collectiblesLayer.addChild(collectible);

      this._collectibles.push(collectible);
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
      var _this5 = this;

      _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_DOWN, function (e) {
        _this5.keyDownHandler(e);
      });
      _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].KEY_UP, function (e) {
        _this5.keyUpHandler(e);
      });
      _utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].add(_utils_WindowEvents__WEBPACK_IMPORTED_MODULE_8__["default"].FOCUS_OUT, function (e) {
        _this5.focusOutHandler();
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

      if (_Globals__WEBPACK_IMPORTED_MODULE_9__["default"].getDeveloperMode()) this.refreshCollisionRectangles();

      this._collisionObjectsSorter.sort();
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

        case _consts_KeyboardCodes__WEBPACK_IMPORTED_MODULE_3__["KEY_C"]:
          this._changeCameraCallback(this._levelData.stage.width, this._levelData.stage.height);

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
      var _this6 = this;

      this._player.showCollisions();

      this._blocks.forEach(function (block) {
        return _this6.makeBlockInteractive(block);
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
      var _this7 = this;

      this._player.hideCollisions();

      this._blocks.forEach(function (block) {
        _this7.makeBlockNotInteractive(block);

        block.hideBlockHit();
        block.hideSelection();
        _this7._selectedBlock = null;
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
  }, {
    key: "focusOutHandler",
    value: function focusOutHandler() {
      var _this8 = this;

      this._pressedButtons.forEach(function (value, key) {
        _this8._pressedButtons.set(key, false);
      });
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
    _this._skinContainer = new Sprite();

    _this.addChild(_this._skinContainer);

    _this._currentSkin = Sprite.from(Player.SKIN_NAME);

    _this._skinContainer.addChild(_this._currentSkin);

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
  }, {
    key: "setWinnerSkin",
    value: function setWinnerSkin() {
      this._currentSkin.parent.removeChild(this._currentSkin);

      this._currentSkin = Sprite.from(Player.WINNER_SKIN_NAME);

      this._skinContainer.addChild(this._currentSkin);
    }
  }, {
    key: "showCollisions",
    value: function showCollisions() {
      this.showCollisionRectangle(0x00ff00);
      this._skinContainer.alpha = .3;
    }
  }, {
    key: "hideCollisions",
    value: function hideCollisions() {
      this.hideCollisionRectangle();
      this._skinContainer.alpha = 1;
    }
  }]);

  return Player;
}(_CollisionObject__WEBPACK_IMPORTED_MODULE_0__["default"]);


Player.SKIN_NAME = "img/player/player.png";
Player.WINNER_SKIN_NAME = "img/player/winner.png";
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
    value: function setLevelData(player, blocks, collectibles, stage, borders) {
      this._player = player;
      this._playerCenterX = this._player.localCollisionCenterX() - this._player.localCollisionLeft();
      this._playerCenterY = this._player.localCollisionCenterY() + this._player.localCollisionTop();
      this._blocks = blocks;
      this._collectibles = collectibles;
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
        var blockLimitPosition = _this2.calculateLimitPosition(block, direction, speed);

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

      var processedTargetPosition = limitPosition != null ? limitPosition : targetPosition;
      var stageLimitPosition = this.calculateStageLimitPosition(direction, speed, this._stage);

      if (speed > 0) {
        if (currentPosition <= stageLimitPosition && processedTargetPosition > stageLimitPosition) {
          var border = this.getBorder(direction, speed);

          if (border > 0) {
            this.processBorder(border, direction, speed, processedTargetPosition);
            return;
          } else {
            limitPosition = limitPosition !== null ? Math.min(limitPosition, stageLimitPosition) : stageLimitPosition;
          }
        }
      } else {
        if (currentPosition >= stageLimitPosition && processedTargetPosition < stageLimitPosition) {
          var _border = this.getBorder(direction, speed);

          if (_border > 0) {
            this.processBorder(_border, direction, speed, processedTargetPosition);
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

      this._collectibles.forEach(function (collectible) {
        if (_this2.hitTest(direction, _this2._player, collectible)) {
          var collectibleLimitPosition = _this2.calculateLimitPosition(collectible, direction, speed);

          if (speed > 0) {
            if (currentPosition <= collectibleLimitPosition && targetPosition > collectibleLimitPosition && _this2.hitTest(direction, _this2._player, collectible)) {
              collectible.onHit();
            }
          } else {
            if (currentPosition >= collectibleLimitPosition && targetPosition < collectibleLimitPosition && _this2.hitTest(direction, _this2._player, collectible)) {
              collectible.onHit();
            }
          }
        }
      });
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
    key: "calculateLimitPosition",
    value: function calculateLimitPosition(collisionObject, direction, speed) {
      if (direction == PlayerMover.HORIZONTAL) {
        if (speed > 0) {
          return collisionObject.collisionLeft() - this._player.localCollisionRight();
        } else {
          return collisionObject.collisionRight() - this._player.localCollisionLeft();
        }
      } else {
        if (speed > 0) {
          return collisionObject.collisionTop() - this._player.localCollisionBottom();
        } else {
          return collisionObject.collisionBottom() - this._player.localCollisionTop();
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
WindowEvents.FOCUS_OUT = "blur";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWUvLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9NYWluQ29udGFpbmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvVmlldy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2NvbnN0cy9LZXlib2FyZENvZGVzLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvY29uc3RzL1BvaW50ZXJFdmVudHMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9CbG9jay50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0NvbGxlY3RpYmxlLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvQ29sbGlzaW9uT2JqZWN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvQ29sbGlzaW9uT2JqZWN0c1NvcnRlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0hpdFRlc3QudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9MZXZlbC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL1BsYXllci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL1BsYXllck1vdmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbW9kZWwvTGV2ZWxzTWFuYWdlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL0Fic3RyYWN0UmVxdWVzdC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL1BpeGlSZXF1ZXN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvcHJvbWlzZXMvUHJvbWlzZXNHcm91cC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3V0aWxzL1JhbmRvbS50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3V0aWxzL1dpbmRv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QUFDLENBQUMsT0FBTyxJQUFSLENBQUQsR0FBaUIsSUFBakI7QUFDQTtBQUNEOzs7Ozs7O0FBMUJzQixzQkFBZ0IsUUFBaEI7QUFDQSx3QkFBa0IsU0FBbEI7QUFDQSxzQkFBZ0IsT0FBaEI7QUFDQSx5QkFBbUIsTUFBbkIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsImltcG9ydCBBcHBsaWNhdGlvbiA9IFBJWEkuQXBwbGljYXRpb247XHJcbmltcG9ydCBFdmVudEVtaXR0ZXIgPSBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbHMge1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0RFVkVMT1BFUl9NT0RFX0VWRU5UOnN5bWJvbCA9IFN5bWJvbCgpO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHBpeGlBcHA6QXBwbGljYXRpb247XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2RldmVsb3Blck1vZGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgc3RhdGljIF9lbWl0dGVyOkV2ZW50RW1pdHRlcjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBzZXREZXZlbG9wZXJNb2RlKHZhbHVlOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0R2xvYmFscy5fZGV2ZWxvcGVyTW9kZSA9IHZhbHVlO1xyXG5cdFx0R2xvYmFscy5nZXRFbWl0dGVyKCkuZW1pdChHbG9iYWxzLkNIQU5HRV9ERVZFTE9QRVJfTU9ERV9FVkVOVCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldERldmVsb3Blck1vZGUoKTpib29sZWFuIHtcclxuXHRcdHJldHVybiBHbG9iYWxzLl9kZXZlbG9wZXJNb2RlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbWl0dGVyKCk6RXZlbnRFbWl0dGVyIHtcclxuXHRcdGlmICghR2xvYmFscy5fZW1pdHRlcikge1xyXG5cdFx0XHRHbG9iYWxzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEdsb2JhbHMuX2VtaXR0ZXI7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBSZWN0YW5nbGUgPSBQSVhJLlJlY3RhbmdsZTtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi9NYWluQ29udGFpbmVyXCI7XHJcbmltcG9ydCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XHJcbmltcG9ydCBXaW5kb3dFdmVudHMgZnJvbSBcIi4vdXRpbHMvV2luZG93RXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiB7XHJcblx0cHJpdmF0ZSBfd2luZG93U2l6ZTpSZWN0YW5nbGU7XHJcblx0cHJpdmF0ZSBfbWFpbkNvbnRhaW5lcjpNYWluQ29udGFpbmVyO1xyXG5cdHByaXZhdGUgX291dE9mQm91bmRzQ292ZXI6R3JhcGhpY3M7XHJcblx0cHJpdmF0ZSBfZnVsbExldmVsOmJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbnZhc0lkOnN0cmluZykge1xyXG5cdFx0dGhpcy5pbml0aWFsaXplKGNhbnZhc0lkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdGlhbGl6ZShjYW52YXNJZDpzdHJpbmcpOnZvaWQge1xyXG5cdFx0dGhpcy5jcmVhdGVQaXhpQXBwKGNhbnZhc0lkKTtcclxuXHRcdHRoaXMuX3dpbmRvd1NpemUgPSBuZXcgUmVjdGFuZ2xlKCk7XHJcblx0XHR0aGlzLmluaXRNYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmluaXRPdXRPZkJvdW5kc0NvdmVyKCk7XHJcblx0XHRXaW5kb3dFdmVudHMuYWRkKFdpbmRvd0V2ZW50cy5SRVNJWkUsICgpID0+IHsgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IH0pO1xyXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xyXG5cdFx0dGhpcy5wcmludFdlbGNvbWVNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRNYWluQ29udGFpbmVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyID0gbmV3IE1haW5Db250YWluZXIoKTtcclxuXHRcdHRoaXMuX21haW5Db250YWluZXIuc2hvd1ZpZXdCYWNrZ3JvdW5kKDB4MmIyZDMwLCAxKTtcclxuXHRcdHRoaXMuX21haW5Db250YWluZXIuc2V0Q2hhbmdlQ2FtZXJhQ2FsbGJhY2soKGxldmVsV2lkdGg6bnVtYmVyLCBsZXZlbEhlaWdodDpudW1iZXIpID0+IHtcclxuXHRcdFx0dGhpcy5jaGFuZ2VDYW1lcmFDYWxsYmFjayhsZXZlbFdpZHRoLCBsZXZlbEhlaWdodCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2V0RGVmYXVsdE1haW5Db250YWluZXJTaXplKCk7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5fbWFpbkNvbnRhaW5lcik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoYW5nZUNhbWVyYUNhbGxiYWNrKGxldmVsV2lkdGg6bnVtYmVyLCBsZXZlbEhlaWdodDpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5fZnVsbExldmVsID0gIXRoaXMuX2Z1bGxMZXZlbDtcclxuXHRcdGlmICh0aGlzLl9mdWxsTGV2ZWwpIHtcclxuXHRcdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zZXRTaXplKGxldmVsV2lkdGgsIGxldmVsSGVpZ2h0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2V0RGVmYXVsdE1haW5Db250YWluZXJTaXplKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFsaWduTWFpbkNvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5hbGlnbk91dE9mQm91bmRzQ292ZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0RGVmYXVsdE1haW5Db250YWluZXJTaXplKCk6dm9pZCB7XHJcblx0XHRjb25zdCBtYWluQ29udGFpbmVyRGVmYXVsdFdpZHRoID0gMTI3MDtcclxuXHRcdGNvbnN0IG1haW5Db250YWluZXJEZWZhdWx0SGVpZ2h0OiBudW1iZXIgPSA3MjA7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnNldFNpemUobWFpbkNvbnRhaW5lckRlZmF1bHRXaWR0aCwgbWFpbkNvbnRhaW5lckRlZmF1bHRIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0T3V0T2ZCb3VuZHNDb3ZlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3ZlciA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX291dE9mQm91bmRzQ292ZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVQaXhpQXBwKGNhbnZhc0lkOnN0cmluZyk6dm9pZCB7XHJcblx0XHRjb25zdCBhcHBDb25maWc6UElYSS5BcHBsaWNhdGlvbk9wdGlvbnMgPSB7XHJcblx0XHRcdGFudGlhbGlhczp0cnVlLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6MHhmZmZmZmYsXHJcblx0XHRcdHZpZXc6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG5cdFx0XHQvLyByb3VuZGluZyByZXNvbHV0aW9uIGZvciBlc2NhcGUgdHJvdWJsZXMgd2l0aCBpbnZpc2libGUgZm9udHMgb24gc29tZSBBbmRyb2lkIGRldmljZXNcclxuXHRcdFx0cmVzb2x1dGlvbjooKGRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyKSA/IDEgOiAyLFxyXG5cdFx0fTtcclxuXHRcdEdsb2JhbHMucGl4aUFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKGFwcENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50V2VsY29tZU1lc3NhZ2UoKTp2b2lkIHtcclxuXHRcdGxldCB3ZWxjb21lU3RyaW5nOnN0cmluZyA9IHByb2Nlc3MuZW52LlBST0pFQ1RfTkFNRSArIFwiIFwiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9WRVJTSU9OO1xyXG5cdFx0d2VsY29tZVN0cmluZyArPSBcIlxcbkRldmVsb3BlZCBieSDCq1wiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9BVVRIT1IgKyBcIsK7XCI7XHJcblx0XHRjb25zb2xlLmxvZyh3ZWxjb21lU3RyaW5nKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgd2luZG93UmVzaXplSGFuZGxlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoU2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoV2luZG93U2l6ZSgpO1xyXG5cdFx0dGhpcy5hbGlnblBpeGlBcHAoKTtcclxuXHRcdHRoaXMuYWxpZ25NYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmFsaWduT3V0T2ZCb3VuZHNDb3ZlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoV2luZG93U2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFsaWduUGl4aUFwcCgpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUud2lkdGggPSB0aGlzLl93aW5kb3dTaXplLndpZHRoICsgXCJweFwiO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuaGVpZ2h0ID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAucmVuZGVyZXIucmVzaXplKHRoaXMuX3dpbmRvd1NpemUud2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWxpZ25NYWluQ29udGFpbmVyKCk6dm9pZCB7XHJcblx0XHRjb25zdCBzY2FsZUJ5V2lkdGg6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS53aWR0aCAvIHRoaXMuX21haW5Db250YWluZXIudztcclxuXHRcdGNvbnN0IHNjYWxlQnlIZWlnaHQ6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLyB0aGlzLl9tYWluQ29udGFpbmVyLmg7XHJcblx0XHRjb25zdCBzY2FsZTpudW1iZXIgPSBNYXRoLm1pbihzY2FsZUJ5V2lkdGgsIHNjYWxlQnlIZWlnaHQpO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS54ID0gdGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS55ID0gc2NhbGU7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnggPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gdGhpcy5fbWFpbkNvbnRhaW5lci53ICogc2NhbGUpIC8gMik7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnkgPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLmhlaWdodCAtIHRoaXMuX21haW5Db250YWluZXIuaCAqIHNjYWxlKSAvIDIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhbGlnbk91dE9mQm91bmRzQ292ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuYmVnaW5GaWxsKDB4MDAwMDAwKTtcclxuXHRcdGlmICh0aGlzLl9tYWluQ29udGFpbmVyLmggKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnkgPCB0aGlzLl93aW5kb3dTaXplLmhlaWdodCkge1xyXG5cdFx0XHRjb25zdCBjb3ZlckhlaWdodDpudW1iZXIgPSB0aGlzLl9tYWluQ29udGFpbmVyLnk7XHJcblx0XHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuZHJhd1JlY3QoMCwgMCwgdGhpcy5fd2luZG93U2l6ZS53aWR0aCwgY292ZXJIZWlnaHQpO1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLSBjb3ZlckhlaWdodCxcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoLCBjb3ZlckhlaWdodCxcclxuXHRcdFx0KVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLl9tYWluQ29udGFpbmVyLncgKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnggPCB0aGlzLl93aW5kb3dTaXplLndpZHRoKSB7XHJcblx0XHRcdGNvbnN0IGNvdmVyV2lkdGg6bnVtYmVyID0gdGhpcy5fbWFpbkNvbnRhaW5lci54O1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KDAsIDAsIGNvdmVyV2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHRcdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3Zlci5kcmF3UmVjdChcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gY292ZXJXaWR0aCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGNvdmVyV2lkdGgsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtWaWV3fSBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbGV2ZWwvUGxheWVyXCI7XHJcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbC9MZXZlbFwiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCBQaXhpUmVxdWVzdCBmcm9tIFwiLi9wcm9taXNlcy9QaXhpUmVxdWVzdFwiO1xyXG5pbXBvcnQgUHJvbWlzZXNHcm91cCBmcm9tIFwiLi9wcm9taXNlcy9Qcm9taXNlc0dyb3VwXCI7XHJcbmltcG9ydCBMZXZlbHNNYW5hZ2VyIGZyb20gXCIuL21vZGVsL0xldmVsc01hbmFnZXJcIjtcclxuaW1wb3J0IHtJTGV2ZWx9IGZyb20gXCIuL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtQT0lOVEVSX0RPV04sIFBPSU5URVJfTU9WRSwgUE9JTlRFUl9VUCwgUE9JTlRFUl9VUF9PVVRTSURFfSBmcm9tIFwiLi9jb25zdHMvUG9pbnRlckV2ZW50c1wiO1xyXG5pbXBvcnQgSW50ZXJhY3Rpb25FdmVudCA9IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudDtcclxuaW1wb3J0IFBvaW50ID0gUElYSS5Qb2ludDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3IHtcclxuXHRwcml2YXRlIF9sZXZlbDpMZXZlbDtcclxuXHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5cdHByaXZhdGUgX3BvaW50ZXJEb3duUG9pbnQ6UG9pbnQ7XHJcblx0cHJpdmF0ZSBfcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uOlBvaW50O1xyXG5cdHByaXZhdGUgX2NoYW5nZUNhbWVyYUNhbGxiYWNrOihsZXZlbFdpZHRoOm51bWJlciwgbGV2ZWxIZWlnaHQ6bnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0Q2hhbmdlQ2FtZXJhQ2FsbGJhY2soY2hhbmdlQ2FtZXJhQ2FsbGJhY2s6KGxldmVsV2lkdGg6bnVtYmVyLCBsZXZlbEhlaWdodDpudW1iZXIpID0+IHZvaWQpIHtcclxuXHRcdHRoaXMuX2NoYW5nZUNhbWVyYUNhbGxiYWNrID0gY2hhbmdlQ2FtZXJhQ2FsbGJhY2s7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaW5pdCgpOnZvaWQge1xyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cclxuXHRcdHRoaXMuX2xldmVsID0gbmV3IExldmVsKFxyXG5cdFx0XHR0aGlzLl9wbGF5ZXIsXHJcblx0XHRcdChsZXZlbElkOm51bWJlcik6SUxldmVsID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZXRMZXZlbChsZXZlbElkKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGhpcy5fY2hhbmdlQ2FtZXJhQ2FsbGJhY2ssXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5fbGV2ZWwuc2hvd1ZpZXdCYWNrZ3JvdW5kKDB4ZmZmZmZmLCAxKTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fbGV2ZWwpO1xyXG5cclxuXHRcdHRoaXMubG9hZGluZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nKCk6dm9pZCB7XHJcblx0XHRQcm9taXNlc0dyb3VwLnBhY2soW1xyXG5cdFx0XHQoKSA9PiBQcm9taXNlc0dyb3VwLnF1ZXVlKFtcclxuXHRcdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbHNNZXRhZGF0YSgpLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDFcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWwyXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsM1wiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDRcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw1XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsNlwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDdcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw4XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsOVwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDEwXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsMTFcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWwxMlwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJib251c1wiKSxcclxuXHRcdF0pXHJcblx0XHRcdC5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBsZXRlTG9hZGluZ0hhbmRsZXIoKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGxvYWRMZXZlbHNNZXRhZGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUGl4aVJlcXVlc3QoXCJsZXZlbHMvbWV0YWRhdGEuanNvblwiKTtcclxuXHRcdGF3YWl0IHJlcXVlc3QuY3JlYXRlUHJvbWlzZSgpO1xyXG5cdFx0Y29uc3QgbGV2ZWxzTWV0YWRhdGEgPSByZXF1ZXN0LmdldFJlc3VsdCgpO1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5hZGRMZXZlbHNNZXRhZGF0YShsZXZlbHNNZXRhZGF0YSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZExldmVsKGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUGl4aVJlcXVlc3QoXCJsZXZlbHMvXCIgKyBmaWxlTmFtZSArIFwiLmpzb25cIik7XHJcblx0XHRhd2FpdCByZXF1ZXN0LmNyZWF0ZVByb21pc2UoKTtcclxuXHRcdGNvbnN0IGxldmVsRGF0YSA9IHJlcXVlc3QuZ2V0UmVzdWx0KCk7XHJcblx0XHRMZXZlbHNNYW5hZ2VyLmFkZExldmVsKGxldmVsRGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNvbXBsZXRlTG9hZGluZ0hhbmRsZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2xldmVsLmluaXRUeXBlcygpO1xyXG5cdFx0dGhpcy5zZXRTdGFydExldmVsQW5kUGxheWVyUG9zaXRpb24oKTtcclxuXHRcdEdsb2JhbHMuZ2V0RW1pdHRlcigpLmFkZExpc3RlbmVyKEdsb2JhbHMuQ0hBTkdFX0RFVkVMT1BFUl9NT0RFX0VWRU5ULCB0aGlzLmNoYW5nZURldmVsb3Blck1vZGVFdmVudEhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0dGhpcy5fbGV2ZWwubGF1bmNoVGlja2VyKCk7XHJcblx0XHR0aGlzLmxhdW5jaFRpY2tlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXRTdGFydExldmVsQW5kUGxheWVyUG9zaXRpb24oKTp2b2lkIHtcclxuXHRcdHRoaXMuc2V0TGV2ZWwoMSk7XHJcblx0XHR0aGlzLl9wbGF5ZXIueCA9IDk3O1xyXG5cdFx0dGhpcy5fcGxheWVyLnkgPSB0aGlzLl9sZXZlbC5oIC0gMjcwO1xyXG5cclxuXHRcdC8vIHRoaXMuc2V0TGV2ZWwoMik7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueCA9IDc2MiAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci55ID0gMTI3MCAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cclxuXHRcdC8vIHRoaXMuc2V0TGV2ZWwoNyk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueCA9IDYyNyAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci55ID0gMTY5NyAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cclxuXHRcdC8vIHRoaXMuc2V0TGV2ZWwoNyk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueCA9IDE3MjEgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueSA9IDM4NyAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cclxuXHRcdC8vIHRoaXMuc2V0TGV2ZWwoMTApO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnggPSA5ODggLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueSA9IDQwNSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cclxuXHRcdC8vIHRoaXMuc2V0TGV2ZWwoMTEpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnggPSA4NDYgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueSA9IDM5NyAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cclxuXHRcdC8vIHRoaXMuc2V0TGV2ZWwoMTAwMCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueCA9IDYzNSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci55ID0gNTY0IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uVG9wKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TGV2ZWwobGV2ZWxJZDpudW1iZXIpOklMZXZlbCB7XHJcblx0XHRjb25zdCBsZXZlbERhdGE6SUxldmVsID0gTGV2ZWxzTWFuYWdlci5nZXRMZXZlbChsZXZlbElkKTtcclxuXHRcdHRoaXMuX2xldmVsLnNldExldmVsKGxldmVsRGF0YSk7XHJcblx0XHR0aGlzLl9sZXZlbC5zZXRTaXplKGxldmVsRGF0YS5zdGFnZS53aWR0aCwgbGV2ZWxEYXRhLnN0YWdlLmhlaWdodCk7XHJcblx0XHRyZXR1cm4gbGV2ZWxEYXRhO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGFuZ2VEZXZlbG9wZXJNb2RlRXZlbnRIYW5kbGVyKCk6dm9pZCB7XHJcblx0XHRsZXQgYmFja2dyb3VuZCA9IHRoaXMuZ2V0Vmlld0JhY2tncm91bmRJZkV4aXN0cygpO1xyXG5cdFx0aWYgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKVxyXG5cdFx0e1xyXG5cdFx0XHRiYWNrZ3JvdW5kLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0YmFja2dyb3VuZC5hZGRMaXN0ZW5lcihQT0lOVEVSX0RPV04sIHRoaXMucG9pbnRlckRvd25IYW5kbGVyLCB0aGlzKTtcclxuXHRcdFx0YmFja2dyb3VuZC5hZGRMaXN0ZW5lcihQT0lOVEVSX01PVkUsIHRoaXMucG9pbnRlck1vdmVIYW5kbGVyLCB0aGlzKTtcclxuXHRcdFx0YmFja2dyb3VuZC5hZGRMaXN0ZW5lcihQT0lOVEVSX1VQLCB0aGlzLnBvaW50ZXJVcEhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLmFkZExpc3RlbmVyKFBPSU5URVJfVVBfT1VUU0lERSwgdGhpcy5wb2ludGVyVXBPdXRzaWRlLCB0aGlzKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0YmFja2dyb3VuZC5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG5cdFx0XHR0aGlzLnN0b3BEcmFnKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBvaW50ZXJEb3duSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdGNvbnN0IGxvY2FsUG9pbnQgPSBldmVudC5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcywgZXZlbnQuZGF0YS5nbG9iYWwpO1xyXG5cdFx0dGhpcy5fcG9pbnRlckRvd25Qb2ludCA9IG5ldyBQb2ludChsb2NhbFBvaW50LngsIGxvY2FsUG9pbnQueSk7XHJcblx0XHR0aGlzLl9wb2ludGVyRG93bkxldmVsUG9zaXRpb24gPSBuZXcgUG9pbnQodGhpcy5fbGV2ZWwueCwgdGhpcy5fbGV2ZWwueSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBvaW50ZXJNb3ZlSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9wb2ludGVyRG93blBvaW50ICYmIHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbikge1xyXG5cdFx0XHRjb25zdCBsb2NhbFBvaW50ID0gZXZlbnQuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMsIGV2ZW50LmRhdGEuZ2xvYmFsKTtcclxuXHRcdFx0dGhpcy5fbGV2ZWwueCA9IHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbi54ICsgKGxvY2FsUG9pbnQueCAtIHRoaXMuX3BvaW50ZXJEb3duUG9pbnQueCk7XHJcblx0XHRcdHRoaXMuX2xldmVsLnkgPSB0aGlzLl9wb2ludGVyRG93bkxldmVsUG9zaXRpb24ueSArIChsb2NhbFBvaW50LnkgLSB0aGlzLl9wb2ludGVyRG93blBvaW50LnkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb2ludGVyVXBIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0dGhpcy5zdG9wRHJhZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb2ludGVyVXBPdXRzaWRlKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0dGhpcy5zdG9wRHJhZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdG9wRHJhZygpOnZvaWQge1xyXG5cdFx0dGhpcy5fcG9pbnRlckRvd25Qb2ludCA9IG51bGw7XHJcblx0XHR0aGlzLl9wb2ludGVyRG93bkxldmVsUG9zaXRpb24gPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsYXVuY2hUaWNrZXIoKTp2b2lkIHtcclxuXHRcdEdsb2JhbHMucGl4aUFwcC50aWNrZXIuYWRkKCgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuX2xldmVsICYmICFHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSkge1xyXG5cdFx0XHRcdHRoaXMuX2xldmVsLnggPSB0aGlzLmNhbGN1bGF0ZUxldmVsUG9zaXRpb24odGhpcy53LCB0aGlzLl9sZXZlbC53LCB0aGlzLl9wbGF5ZXIud2lkdGgsIHRoaXMuX3BsYXllci54KTtcclxuXHRcdFx0XHR0aGlzLl9sZXZlbC55ID0gdGhpcy5jYWxjdWxhdGVMZXZlbFBvc2l0aW9uKHRoaXMuaCwgdGhpcy5fbGV2ZWwuaCwgdGhpcy5fcGxheWVyLmhlaWdodCwgdGhpcy5fcGxheWVyLnkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2FsY3VsYXRlTGV2ZWxQb3NpdGlvbih0aGlzU2l6ZTpudW1iZXIsIGxldmVsU2l6ZTpudW1iZXIsIHBsYXllclNpemU6bnVtYmVyLCBwbGF5ZXJQb3NpdGlvbjpudW1iZXIpOm51bWJlciB7XHJcblx0XHRjb25zdCBtaW5MZXZlbFBvc2l0aW9uOm51bWJlciA9IHRoaXNTaXplIC0gbGV2ZWxTaXplO1xyXG5cdFx0Y29uc3QgbWF4TGV2ZWxQb3NpdGlvbjpudW1iZXIgPSAwO1xyXG5cdFx0Y29uc3QgY2FsY3VsYXRlZExldmVsUG9zaXRpb246bnVtYmVyID0gKHRoaXNTaXplIC0gcGxheWVyU2l6ZSkgLyAyIC0gcGxheWVyUG9zaXRpb247XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1pbihtYXhMZXZlbFBvc2l0aW9uLCBNYXRoLm1heChtaW5MZXZlbFBvc2l0aW9uLCBjYWxjdWxhdGVkTGV2ZWxQb3NpdGlvbikpKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyID0gUElYSS5Db250YWluZXI7XHJcbmltcG9ydCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XHJcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4vdXRpbHMvUmFuZG9tXCI7XHJcblxyXG5jbGFzcyBWaWV3IGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBSZXNpemFibGVWaWV3IGV4dGVuZHMgVmlldyB7XHJcblx0cHVibGljIHc6bnVtYmVyO1xyXG5cdHB1YmxpYyBoOm51bWJlcjtcclxuXHRwcml2YXRlIF9pbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0Vyh2YWx1ZTpudW1iZXIpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMudyAhPT0gdmFsdWUpIHtcclxuXHRcdFx0dGhpcy53ID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0SCh2YWx1ZTpudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmggIT09IHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuaCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmFwcGx5U2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFNpemUodzpudW1iZXIsIGg6bnVtYmVyKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLncgIT09IHcgfHwgdGhpcy5oICE9PSBoKSB7XHJcblx0XHRcdHRoaXMudyA9IHc7XHJcblx0XHRcdHRoaXMuaCA9IGg7XHJcblx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYXBwbHlTaXplKCk6dm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuX2luaXRlZCkge1xyXG5cdFx0XHR0aGlzLl9pbml0ZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmluaXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBpbml0KCk6dm9pZCB7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBWaWV3V2l0aEJhY2tncm91bmQgZXh0ZW5kcyBSZXNpemFibGVWaWV3IHtcclxuXHRwcml2YXRlIF92aWV3QmFja2dyb3VuZDpHcmFwaGljcztcclxuXHRwcml2YXRlIF92aWV3QmFja2dyb3VuZENvbG9yOm51bWJlcjtcclxuXHRwcml2YXRlIF92aWV3QmFja2dyb3VuZEFscGhhOm51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNob3dWaWV3QmFja2dyb3VuZChjb2xvcj86bnVtYmVyLCBhbHBoYTpudW1iZXIgPSAuNSk6dm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuX3ZpZXdCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kID0gbmV3IEdyYXBoaWNzKCk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGRBdCh0aGlzLl92aWV3QmFja2dyb3VuZCwgMCk7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kQ29sb3IgPSAhTnVtYmVyLmlzTmFOKGNvbG9yKSA/IGNvbG9yIDogUmFuZG9tLmdlbkNvbG9yKCk7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kQWxwaGEgPSBhbHBoYTtcclxuXHRcdFx0aWYgKHRoaXMudyAmJiB0aGlzLmgpIHtcclxuXHRcdFx0XHR0aGlzLmFwcGx5U2l6ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYXBwbHlTaXplKCk6dm9pZCB7XHJcblx0XHRzdXBlci5hcHBseVNpemUoKTtcclxuXHRcdGlmICh0aGlzLl92aWV3QmFja2dyb3VuZCkge1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZC5jbGVhcigpO1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZC5iZWdpbkZpbGwodGhpcy5fdmlld0JhY2tncm91bmRDb2xvciwgdGhpcy5fdmlld0JhY2tncm91bmRBbHBoYSk7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLmRyYXdSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmQuZW5kRmlsbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFZpZXdCYWNrZ3JvdW5kSWZFeGlzdHMoKTpHcmFwaGljcyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdmlld0JhY2tncm91bmQ7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBWaWV3V2l0aFJlc2l6ZVRlc3QgZXh0ZW5kcyBWaWV3V2l0aEJhY2tncm91bmQge1xyXG5cdHB1YmxpYyByZXNpemVUZXN0OmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9zaXplV2FzQ2hhbmdlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhcHBseVNpemUoKTp2b2lkIHtcclxuXHRcdHN1cGVyLmFwcGx5U2l6ZSgpO1xyXG5cdFx0aWYgKHRoaXMucmVzaXplVGVzdCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuX3NpemVXYXNDaGFuZ2VkKSB7XHJcblx0XHRcdFx0dGhpcy5fc2l6ZVdhc0NoYW5nZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3NpemVXYXNDaGFuZ2VkID0gZmFsc2U7XHJcblx0XHRcdFx0fSwgMCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gKiBZb3Ugc2hvdWxkIHRvIHVzZSBzZXRTaXplIGluc3RlYWQgc2V0VyBhbmQgc2V0SCBpZiB5b3Ugd2FudCB0byBjaGFuZ2UgYm90aCBwYXJhbWV0ZXJzXHJcblx0XHRcdFx0Ly8gKiBZb3Ugc2hvdWxkbid0IGNhbGwgYXBwbHlTaXplIG1ldGhvZCBtYW51YWxseVxyXG5cdFx0XHRcdC8vICogWW91IHNob3VsZG4ndCBjYWxsIHNldFNpemUsIHNldFcgb3Igc2V0SCB0d2ljZVxyXG5cdFx0XHRcdGNvbnNvbGUud2FybihcIltcIiArIHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiXSByZXNpemUgdGVzdCB3YXMgZmFpbGVkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1ZpZXdXaXRoUmVzaXplVGVzdCBhcyBWaWV3fTsiLCJleHBvcnQgY29uc3QgS0VZX1VQID0gXCJBcnJvd1VwXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfTEVGVCA9IFwiQXJyb3dMZWZ0XCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfUklHSFQgPSBcIkFycm93UmlnaHRcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9CQUNLUVVPVEUgPSBcIkJhY2txdW90ZVwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0ogPSBcIktleUpcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9ERUxFVEUgPSBcIkRlbGV0ZVwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0NPTU1BID0gXCJDb21tYVwiO1xyXG5leHBvcnQgY29uc3QgS0VZX1BFUklPRCA9IFwiUGVyaW9kXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfTiA9IFwiS2V5TlwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0MgPSBcIktleUNcIjsiLCJleHBvcnQgY29uc3QgUE9JTlRFUl9ET1dOID0gXCJwb2ludGVyZG93blwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9VUCA9IFwicG9pbnRlcnVwXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX01PVkUgPSBcInBvaW50ZXJtb3ZlXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX1VQX09VVFNJREUgPSBcInBvaW50ZXJ1cG91dHNpZGVcIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfT1ZFUiA9IFwicG9pbnRlcm92ZXJcIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfT1VUID0gXCJwb2ludGVyb3V0XCI7IiwiaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuaW1wb3J0IHtJQmxvY2ssIElDb2xsaXNpb24sIElCbG9ja1R5cGV9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcclxuaW1wb3J0IFBvaW50ID0gUElYSS5Qb2ludDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrIGV4dGVuZHMgQ29sbGlzaW9uT2JqZWN0IHtcclxuXHRwdWJsaWMgbG9jYWxEcmFnUG9pbnQ6UG9pbnQ7XHJcblx0cHJpdmF0ZSBfc3ByaXRlOlNwcml0ZTtcclxuXHRwcml2YXRlIF9oaXQ6Ym9vbGVhbiA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfYmxvY2tEYXRhOklCbG9jayxcclxuXHRcdHByaXZhdGUgX2Jsb2NrVHlwZURhdGE6SUJsb2NrVHlwZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pbml0U3ByaXRlKCk7XHJcblx0XHRpZiAodGhpcy5fYmxvY2tUeXBlRGF0YS5jb2xsaXNpb24pIHtcclxuXHRcdFx0Y29uc3QgY29sbGlzaW9uOklDb2xsaXNpb24gPSB0aGlzLl9ibG9ja1R5cGVEYXRhLmNvbGxpc2lvbjtcclxuXHRcdFx0dGhpcy5zZXRMb2NhbENvbGxpc2lvblZhbHVlcyhjb2xsaXNpb24ubGVmdCwgY29sbGlzaW9uLnJpZ2h0LCBjb2xsaXNpb24udG9wLCBjb2xsaXNpb24uYm90dG9tKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFNwcml0ZSgpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2Jsb2NrVHlwZURhdGEuaW1hZ2UpIHtcclxuXHRcdFx0dGhpcy5fc3ByaXRlID0gU3ByaXRlLmZyb20odGhpcy5fYmxvY2tUeXBlRGF0YS5pbWFnZSk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXREYXRhKCk6SUJsb2NrIHtcclxuXHRcdHJldHVybiB0aGlzLl9ibG9ja0RhdGE7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0VHlwZURhdGEoKTpJQmxvY2tUeXBlIHtcclxuXHRcdHJldHVybiB0aGlzLl9ibG9ja1R5cGVEYXRhO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNob3dCbG9ja0hpdCh2YWx1ZTpib29sZWFuKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9oaXQgIT09IHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuX2hpdCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLnNob3dDb2xsaXNpb25SZWN0YW5nbGUodGhpcy5faGl0ID8gMHhmZjAwMDAgOiAweDAwMDBmZik7XHJcblx0XHRcdGlmICh0aGlzLl9zcHJpdGUpIHtcclxuXHRcdFx0XHR0aGlzLl9zcHJpdGUuYWxwaGEgPSAuMztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGhpZGVCbG9ja0hpdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5oaWRlQ29sbGlzaW9uUmVjdGFuZ2xlKCk7XHJcblx0XHR0aGlzLl9oaXQgPSBudWxsO1xyXG5cdFx0aWYgKHRoaXMuX3Nwcml0ZSkge1xyXG5cdFx0XHR0aGlzLl9zcHJpdGUuYWxwaGEgPSAxO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7SUNvbGxlY3RpYmxlVHlwZSwgSUNvbGxpc2lvbn0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xyXG5pbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlibGUgZXh0ZW5kcyBDb2xsaXNpb25PYmplY3Qge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0Y29sbGVjdGlibGVUeXBlRGF0YTpJQ29sbGVjdGlibGVUeXBlLFxyXG5cdFx0cHJpdmF0ZSBfb25IaXRDYWxsYmFjazooKSA9PiB2b2lkLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmFkZENoaWxkKFNwcml0ZS5mcm9tKGNvbGxlY3RpYmxlVHlwZURhdGEuaW1hZ2UpKTtcclxuXHRcdGlmIChjb2xsZWN0aWJsZVR5cGVEYXRhLmNvbGxpc2lvbikge1xyXG5cdFx0XHRjb25zdCBjb2xsaXNpb246SUNvbGxpc2lvbiA9IGNvbGxlY3RpYmxlVHlwZURhdGEuY29sbGlzaW9uO1xyXG5cdFx0XHR0aGlzLnNldExvY2FsQ29sbGlzaW9uVmFsdWVzKGNvbGxpc2lvbi5sZWZ0LCBjb2xsaXNpb24ucmlnaHQsIGNvbGxpc2lvbi50b3AsIGNvbGxpc2lvbi5ib3R0b20pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uSGl0KCk6dm9pZCB7XHJcblx0XHR0aGlzLl9vbkhpdENhbGxiYWNrKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBDb250YWluZXIgPSBQSVhJLkNvbnRhaW5lcjtcclxuaW1wb3J0IEdyYXBoaWNzID0gUElYSS5HcmFwaGljcztcclxuaW1wb3J0IFRleHQgPSBQSVhJLlRleHQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb25PYmplY3QgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cdHByaXZhdGUgX2xvY2FsTGVmdDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxSaWdodDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxUb3A6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsQm90dG9tOm51bWJlcjtcclxuXHRwcml2YXRlIF9sb2NhbENlbnRlclg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsQ2VudGVyWTpudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgX2NvbGxpc2lvbkxlZnQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvblJpZ2h0Om51bWJlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25Ub3A6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbkJvdHRvbTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uQ2VudGVyWDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uQ2VudGVyWTpudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgX2NvbGxpc2lvblJlY3RhbmdsZTpHcmFwaGljcztcclxuXHRwcml2YXRlIF9jb2xsaXNpb25SZWN0YW5nbGVDb250YWluZXI6Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cdHByaXZhdGUgX3NlbGVjdGlvbjpHcmFwaGljcztcclxuXHJcblx0cHJpdmF0ZSBfZGVidWdUZXh0OlRleHQ7XHJcblx0cHJpdmF0ZSBfZGVidWdUZXh0QmFja2dyb3VuZDpHcmFwaGljcztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGVDb250YWluZXIpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TG9jYWxDb2xsaXNpb25WYWx1ZXMoXHJcblx0XHRsZWZ0Om51bWJlcixcclxuXHRcdHJpZ2h0Om51bWJlcixcclxuXHRcdHRvcDpudW1iZXIsXHJcblx0XHRib3R0b206bnVtYmVyXHJcblx0KTp2b2lkIHtcclxuXHRcdHRoaXMuX2xvY2FsTGVmdCA9IGxlZnQ7XHJcblx0XHR0aGlzLl9sb2NhbFJpZ2h0ID0gcmlnaHQ7XHJcblx0XHR0aGlzLl9sb2NhbFRvcCA9IHRvcDtcclxuXHRcdHRoaXMuX2xvY2FsQm90dG9tID0gYm90dG9tO1xyXG5cdFx0dGhpcy5fbG9jYWxDZW50ZXJYID0gbGVmdCArIE1hdGguZmxvb3IoKHJpZ2h0IC0gbGVmdCkgLyAyKTtcclxuXHRcdHRoaXMuX2xvY2FsQ2VudGVyWSA9IHRvcCArIE1hdGguZmxvb3IoKGJvdHRvbSAtIHRvcCkgLyAyKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgeCh4Om51bWJlcikge1xyXG5cdFx0c3VwZXIueCA9IHg7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25MZWZ0ID0geCArIHRoaXMuX2xvY2FsTGVmdDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblJpZ2h0ID0geCArIHRoaXMuX2xvY2FsUmlnaHQ7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25DZW50ZXJYID0geCArIHRoaXMuX2xvY2FsQ2VudGVyWDtcclxuXHRcdGlmICghcHJvY2Vzcy5lbnYuUkVMRUFTRSlcclxuXHRcdFx0dGhpcy5yZWZyZXNoUG9zaXRpb25UZXh0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHN1cGVyLng7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHkoeTpudW1iZXIpIHtcclxuXHRcdHN1cGVyLnkgPSB5O1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uVG9wID0geSArIHRoaXMuX2xvY2FsVG9wO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uQm90dG9tID0geSArIHRoaXMuX2xvY2FsQm90dG9tO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uQ2VudGVyWSA9IHkgKyB0aGlzLl9sb2NhbENlbnRlclk7XHJcblx0XHRpZiAoIXByb2Nlc3MuZW52LlJFTEVBU0UpXHJcblx0XHRcdHRoaXMucmVmcmVzaFBvc2l0aW9uVGV4dCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB5KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBzdXBlci55O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldE9yZGVyKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKCF0aGlzLl9kZWJ1Z1RleHQpIHtcclxuXHRcdFx0dGhpcy5fZGVidWdUZXh0ID0gbmV3IFRleHQoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9kZWJ1Z1RleHQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnRleHQgPSB2YWx1ZS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnggPSBNYXRoLmZsb29yKCgodGhpcy5fbG9jYWxSaWdodCAtIHRoaXMuX2xvY2FsTGVmdCkgLSB0aGlzLl9kZWJ1Z1RleHQud2lkdGgpIC8gMik7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHQueSA9IHRoaXMuX2xvY2FsVG9wICsgTWF0aC5mbG9vcigoKHRoaXMuX2xvY2FsQm90dG9tIC0gdGhpcy5fbG9jYWxUb3ApIC0gdGhpcy5fZGVidWdUZXh0LmhlaWdodCkgLyAyKTtcclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVmcmVzaFBvc2l0aW9uVGV4dCgpOnZvaWQge1xyXG5cdFx0Ly8gdGhpcy5zaG93RGVidWdUZXh0KHRoaXMuX2NvbGxpc2lvbkxlZnQgKyBcInhcIiArIHRoaXMuX2NvbGxpc2lvblRvcCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dEZWJ1Z1RleHQodGV4dDpzdHJpbmcpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX2RlYnVnVGV4dCkge1xyXG5cdFx0XHRjb25zdCB0ZXh0U3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG5cdFx0XHRcdGZpbGw6IFwiI2ZmZmZmZlwiLFxyXG5cdFx0XHRcdGZvbnRTaXplOiAxNixcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLl9kZWJ1Z1RleHQgPSBuZXcgUElYSS5UZXh0KCcnLCB0ZXh0U3R5bGUpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2RlYnVnVGV4dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnRleHQgPSB0ZXh0O1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnggPSBNYXRoLmZsb29yKCh0aGlzLl9sb2NhbFJpZ2h0IC0gdGhpcy5fbG9jYWxMZWZ0IC0gdGhpcy5fZGVidWdUZXh0LndpZHRoKSAvIDIpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnkgPSB0aGlzLl9sb2NhbFRvcCAqIDIgKyBNYXRoLmZsb29yKCh0aGlzLl9sb2NhbEJvdHRvbSAtIHRoaXMuX2xvY2FsVG9wIC0gdGhpcy5fZGVidWdUZXh0LmhlaWdodCkgLyAyKTtcclxuXHJcblx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kLnggPSB0aGlzLl9kZWJ1Z1RleHQueDtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQueSA9IHRoaXMuX2RlYnVnVGV4dC55O1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5jbGVhcigpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5iZWdpbkZpbGwoMHgwMDAwMDApO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5kcmF3UmVjdCgwLCAwLCB0aGlzLl9kZWJ1Z1RleHQud2lkdGgsIHRoaXMuX2RlYnVnVGV4dC5oZWlnaHQpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC5lbmRGaWxsKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd0NvbGxpc2lvblJlY3RhbmdsZShjb2xvcjpudW1iZXIgPSAweDAwMDBmZik6dm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSkge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLnBhcmVudCkge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGVDb250YWluZXIuYWRkQ2hpbGQodGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5jbGVhcigpO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLmJlZ2luRmlsbChjb2xvciwgLjUpO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLmRyYXdSZWN0KFxyXG5cdFx0XHR0aGlzLl9sb2NhbExlZnQsXHJcblx0XHRcdHRoaXMuX2xvY2FsVG9wLFxyXG5cdFx0XHR0aGlzLl9sb2NhbFJpZ2h0IC0gdGhpcy5fbG9jYWxMZWZ0LFxyXG5cdFx0XHR0aGlzLl9sb2NhbEJvdHRvbSAtIHRoaXMuX2xvY2FsVG9wLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaG93U2VsZWN0aW9uKCk6dm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuX3NlbGVjdGlvbiB8fCAhdGhpcy5fc2VsZWN0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuX3NlbGVjdGlvbikge1xyXG5cdFx0XHRcdHRoaXMuX3NlbGVjdGlvbiA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0XHRcdHRoaXMuX3NlbGVjdGlvbi5iZWdpbkZpbGwoMHhmZmZmZmYpO1xyXG5cdFx0XHRcdGxldCBjZW50ZXJQb2ludFg6bnVtYmVyID0gdGhpcy5fbG9jYWxMZWZ0ICsgKHRoaXMuX2xvY2FsUmlnaHQgLSB0aGlzLl9sb2NhbExlZnQpIC8gMjtcclxuXHRcdFx0XHRsZXQgY2VudGVyUG9pbnRZOm51bWJlciA9IHRoaXMuX2xvY2FsVG9wICsgKHRoaXMuX2xvY2FsQm90dG9tIC0gdGhpcy5fbG9jYWxUb3ApIC8gMjtcclxuXHRcdFx0XHRjb25zdCBjZW50ZXJTcXVhcmVTaXplOm51bWJlciA9IDEwO1xyXG5cdFx0XHRcdHRoaXMuX3NlbGVjdGlvbi5kcmF3UmVjdChcclxuXHRcdFx0XHRcdGNlbnRlclBvaW50WCAtIGNlbnRlclNxdWFyZVNpemUgLyAyLFxyXG5cdFx0XHRcdFx0Y2VudGVyUG9pbnRZIC0gY2VudGVyU3F1YXJlU2l6ZSAvIDIsXHJcblx0XHRcdFx0XHRjZW50ZXJTcXVhcmVTaXplLFxyXG5cdFx0XHRcdFx0Y2VudGVyU3F1YXJlU2l6ZSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3NlbGVjdGlvbik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGlkZVNlbGVjdGlvbigpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdGlvbiAmJiB0aGlzLl9zZWxlY3Rpb24ucGFyZW50KVxyXG5cdFx0XHR0aGlzLl9zZWxlY3Rpb24ucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3NlbGVjdGlvbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGlkZUNvbGxpc2lvblJlY3RhbmdsZSgpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSAmJiB0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUucGFyZW50KSB7XHJcblx0XHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjb2xsaXNpb25MZWZ0KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25MZWZ0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvblJpZ2h0KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25SaWdodDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjb2xsaXNpb25Ub3AoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvblRvcDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjb2xsaXNpb25Cb3R0b20oKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvbkJvdHRvbTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2NhbENvbGxpc2lvbkxlZnQoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsTGVmdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2NhbENvbGxpc2lvblJpZ2h0KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbFJpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uVG9wKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbFRvcDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2NhbENvbGxpc2lvbkJvdHRvbSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxCb3R0b207XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25DZW50ZXJYKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbENlbnRlclg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25DZW50ZXJZKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbENlbnRlclk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uQ2VudGVyWCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uQ2VudGVyWDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjb2xsaXNpb25DZW50ZXJZKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25DZW50ZXJZO1xyXG5cdH1cclxufSIsImltcG9ydCBDb250YWluZXIgPSBQSVhJLkNvbnRhaW5lcjtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuaW1wb3J0IEhpdFRlc3QgZnJvbSBcIi4vSGl0VGVzdFwiO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdCA9IFBJWEkuRGlzcGxheU9iamVjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk9iamVjdHNTb3J0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfY29sbGlzaW9uc0xheWVyOkNvbnRhaW5lclxyXG5cdCkge31cclxuXHJcblx0cHVibGljIHNvcnQoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllci5jaGlsZHJlbi5zb3J0KChhOiBEaXNwbGF5T2JqZWN0LCBiOiBEaXNwbGF5T2JqZWN0KTogbnVtYmVyID0+IHtcclxuXHRcdFx0bGV0IGFDb2xsaXNpb246IENvbGxpc2lvbk9iamVjdCA9IGEgYXMgQ29sbGlzaW9uT2JqZWN0O1xyXG5cdFx0XHRsZXQgYkNvbGxpc2lvbjogQ29sbGlzaW9uT2JqZWN0ID0gYiBhcyBDb2xsaXNpb25PYmplY3Q7XHJcblxyXG5cdFx0XHRpZiAoYUNvbGxpc2lvbi5jb2xsaXNpb25DZW50ZXJYKCkgIT09IGJDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWCgpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGFDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWCgpIC0gYkNvbGxpc2lvbi5jb2xsaXNpb25DZW50ZXJYKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBiQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclkoKSAtIGFDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWSgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIuY2hpbGRyZW4gPSB0aGlzLm15U29ydCh0aGlzLl9jb2xsaXNpb25zTGF5ZXIuY2hpbGRyZW4gYXMgQ29sbGlzaW9uT2JqZWN0W10pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBteVNvcnQoY2hpbGRyZW46Q29sbGlzaW9uT2JqZWN0W10pOkNvbGxpc2lvbk9iamVjdFtdIHtcclxuXHRcdGNvbnN0IG9sZEFycmF5OkNvbGxpc2lvbk9iamVjdFtdID0gY2hpbGRyZW4uc2xpY2UoKTtcclxuXHRcdGNvbnN0IG5ld0FycmF5OkNvbGxpc2lvbk9iamVjdFtdID0gW107XHJcblx0XHR3aGlsZSAob2xkQXJyYXkubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGluZGV4Om51bWJlciA9IHRoaXMuZmluZE1pbk9iamVjdEluZGV4KG9sZEFycmF5LCAwKTtcclxuXHRcdFx0bmV3QXJyYXkucHVzaChvbGRBcnJheVtpbmRleF0pO1xyXG5cdFx0XHRvbGRBcnJheVtpbmRleF0uc2V0T3JkZXIobmV3QXJyYXkubGVuZ3RoKTtcclxuXHRcdFx0b2xkQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBuZXdBcnJheTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZmluZE1pbk9iamVjdEluZGV4KFxyXG5cdFx0YXJyYXk6Q29sbGlzaW9uT2JqZWN0W10sXHJcblx0XHRpbmRleDpudW1iZXIsXHJcblx0KTpudW1iZXIge1xyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgIT09IGluZGV4ICYmIHRoaXMuZmlyc3RPYmplY3RJbmRleElzQmlnZ2VyKGFycmF5W2luZGV4XSwgYXJyYXlbaV0pKSB7XHJcblx0XHRcdFx0aW5kZXggPSB0aGlzLmZpbmRNaW5PYmplY3RJbmRleChhcnJheSwgaSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBpbmRleDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZmlyc3RPYmplY3RJbmRleElzQmlnZ2VyKGE6Q29sbGlzaW9uT2JqZWN0LCBiOkNvbGxpc2lvbk9iamVjdCk6Ym9vbGVhbiB7XHJcblx0XHRjb25zdCBoaXRIOiBib29sZWFuID0gSGl0VGVzdC5ob3Jpem9udGFsKGEsIGIpO1xyXG5cdFx0Y29uc3QgaGl0VjogYm9vbGVhbiA9IEhpdFRlc3QudmVydGljYWwoYSwgYik7XHJcblx0XHRpZiAoaGl0SCA9PT0gaGl0Vikge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKGhpdFYpIHtcclxuXHRcdFx0cmV0dXJuIGEuY29sbGlzaW9uTGVmdCgpID49IGIuY29sbGlzaW9uUmlnaHQoKTtcclxuXHRcdH0gZWxzZSBpZiAoaGl0SCkge1xyXG5cdFx0XHRyZXR1cm4gYS5jb2xsaXNpb25Cb3R0b20oKSA8PSBiLmNvbGxpc2lvblRvcCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIChhLmNvbGxpc2lvbkxlZnQoKSA+PSBiLmNvbGxpc2lvblJpZ2h0KCkpICYmIChhLmNvbGxpc2lvbkJvdHRvbSgpIDw9IGIuY29sbGlzaW9uVG9wKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXRUZXN0IHtcclxuXHRwdWJsaWMgc3RhdGljIGhvcml6b250YWwob2JqMTpDb2xsaXNpb25PYmplY3QsIG9iajI6Q29sbGlzaW9uT2JqZWN0KTpib29sZWFuIHtcclxuXHRcdHJldHVybiAhKFxyXG5cdFx0XHRvYmoxLmNvbGxpc2lvblJpZ2h0KCkgPD0gb2JqMi5jb2xsaXNpb25MZWZ0KCkgfHxcclxuXHRcdFx0b2JqMS5jb2xsaXNpb25MZWZ0KCkgPj0gb2JqMi5jb2xsaXNpb25SaWdodCgpXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHZlcnRpY2FsKG9iajE6Q29sbGlzaW9uT2JqZWN0LCBvYmoyOkNvbGxpc2lvbk9iamVjdCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gIShcclxuXHRcdFx0b2JqMS5jb2xsaXNpb25Cb3R0b20oKSA8PSBvYmoyLmNvbGxpc2lvblRvcCgpIHx8XHJcblx0XHRcdG9iajEuY29sbGlzaW9uVG9wKCkgPj0gb2JqMi5jb2xsaXNpb25Cb3R0b20oKVxyXG5cdFx0KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQge1ZpZXd9IGZyb20gXCIuLi9WaWV3XCI7XHJcbmltcG9ydCB7UE9JTlRFUl9ET1dOLCBQT0lOVEVSX01PVkUsIFBPSU5URVJfVVAsIFBPSU5URVJfVVBfT1VUU0lERX0gZnJvbSBcIi4uL2NvbnN0cy9Qb2ludGVyRXZlbnRzXCI7XHJcbmltcG9ydCB7XHJcblx0S0VZX0JBQ0tRVU9URSxcclxuXHRLRVlfQyxcclxuXHRLRVlfQ09NTUEsXHJcblx0S0VZX0RFTEVURSxcclxuXHRLRVlfSixcclxuXHRLRVlfTEVGVCxcclxuXHRLRVlfTixcclxuXHRLRVlfUEVSSU9ELFxyXG5cdEtFWV9SSUdIVCxcclxuXHRLRVlfVVBcclxufSBmcm9tIFwiLi4vY29uc3RzL0tleWJvYXJkQ29kZXNcIjtcclxuaW1wb3J0IHtJQmxvY2ssIElMZXZlbCwgSUJsb2NrVHlwZSwgSUltYWdlVHlwZSwgSUltYWdlLCBJQ29sbGVjdGlibGUsIElDb2xsZWN0aWJsZVR5cGV9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBQbGF5ZXJNb3ZlciBmcm9tIFwiLi9QbGF5ZXJNb3ZlclwiO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdHNTb3J0ZXIgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0c1NvcnRlclwiO1xyXG5pbXBvcnQgSGl0VGVzdCBmcm9tIFwiLi9IaXRUZXN0XCI7XHJcbmltcG9ydCBXaW5kb3dFdmVudHMgZnJvbSBcIi4uL3V0aWxzL1dpbmRvd0V2ZW50c1wiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiLi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgTGV2ZWxzTWFuYWdlciBmcm9tIFwiLi4vbW9kZWwvTGV2ZWxzTWFuYWdlclwiO1xyXG5pbXBvcnQgSW50ZXJhY3Rpb25FdmVudCA9IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudDtcclxuaW1wb3J0IFBvaW50ID0gUElYSS5Qb2ludDtcclxuaW1wb3J0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xyXG5pbXBvcnQgQ29sbGVjdGlibGUgZnJvbSBcIi4vQ29sbGVjdGlibGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIGV4dGVuZHMgVmlldyB7XHJcblx0cHJpdmF0ZSBfcHJlc3NlZEJ1dHRvbnM6TWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcclxuXHRwcml2YXRlIF9sYXN0UHJlc3NlZERpcmVjdGlvbkJ1dHRvbjpzdHJpbmc7XHJcblx0cHJpdmF0ZSBfanVtcDpib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfYmxvY2tUeXBlQnlUeXBlSWQ6TWFwPHN0cmluZywgSUJsb2NrVHlwZT4gPSBuZXcgTWFwPHN0cmluZywgSUJsb2NrVHlwZT4oKTtcclxuXHRwcml2YXRlIF9ibG9ja3NUeXBlczpJQmxvY2tUeXBlW10gPSBbXTtcclxuXHRwcml2YXRlIF9pbWFnZVR5cGVCeVR5cGVJZDpNYXA8c3RyaW5nLCBJSW1hZ2VUeXBlPiA9IG5ldyBNYXA8c3RyaW5nLCBJSW1hZ2VUeXBlPigpO1xyXG5cdHByaXZhdGUgX2NvbGxlY3RpYmxlVHlwZUJ5VHlwZUlkOk1hcDxzdHJpbmcsIElDb2xsZWN0aWJsZVR5cGU+ID0gbmV3IE1hcDxzdHJpbmcsIElDb2xsZWN0aWJsZVR5cGU+KCk7XHJcblx0cHJpdmF0ZSBfY29sbGVjdGVkSWRzOnN0cmluZ1tdID0gW107XHJcblx0cHJpdmF0ZSBfcGxheWVyTW92ZXI6UGxheWVyTW92ZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uT2JqZWN0c1NvcnRlcjpDb2xsaXNpb25PYmplY3RzU29ydGVyO1xyXG5cdHByaXZhdGUgX2Jsb2NrczpCbG9ja1tdID0gW107XHJcblx0cHJpdmF0ZSBfaW1hZ2VzOlNwcml0ZVtdID0gW107XHJcblx0cHJpdmF0ZSBfY29sbGVjdGlibGVzOkNvbGxlY3RpYmxlW10gPSBbXTtcclxuXHRwcml2YXRlIF9sZXZlbERhdGE6SUxldmVsO1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkQmxvY2s6QmxvY2sgPSBudWxsO1xyXG5cdHByaXZhdGUgX2ltYWdlc0xheWVyOlNwcml0ZTtcclxuXHRwcml2YXRlIF9jb2xsZWN0aWJsZXNMYXllcjpTcHJpdGU7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uc0xheWVyOlNwcml0ZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyLFxyXG5cdFx0cHJpdmF0ZSBfc2V0TGV2ZWxDYWxsYmFjazoobGV2ZWw6bnVtYmVyKSA9PiBJTGV2ZWwsXHJcblx0XHRwcml2YXRlIF9jaGFuZ2VDYW1lcmFDYWxsYmFjazoobGV2ZWxXaWR0aDpudW1iZXIsIGxldmVsSGVpZ2h0Om51bWJlcikgPT4gdm9pZCxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaW5pdCgpOnZvaWQge1xyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cdFx0dGhpcy5hZGRLZXlMaXN0ZW5lcnMoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbml0VHlwZXMoKTp2b2lkIHtcclxuXHRcdExldmVsc01hbmFnZXIuZ2V0TGV2ZWxzTWV0YWRhdGEoKS5pbWFnZXNUeXBlcy5mb3JFYWNoKChpbWFnZURhdGE6SUltYWdlVHlwZSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9pbWFnZVR5cGVCeVR5cGVJZC5zZXQoaW1hZ2VEYXRhLmlkLCBpbWFnZURhdGEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0TGV2ZWxzTWFuYWdlci5nZXRMZXZlbHNNZXRhZGF0YSgpLmJsb2NrVHlwZXMuZm9yRWFjaCgoYmxvY2tUeXBlRGF0YTpJQmxvY2tUeXBlKSA9PiB7XHJcblx0XHRcdHRoaXMuX2Jsb2NrVHlwZUJ5VHlwZUlkLnNldChibG9ja1R5cGVEYXRhLmlkLCBibG9ja1R5cGVEYXRhKTtcclxuXHRcdFx0dGhpcy5fYmxvY2tzVHlwZXMucHVzaChibG9ja1R5cGVEYXRhKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdExldmVsc01hbmFnZXIuZ2V0TGV2ZWxzTWV0YWRhdGEoKS5jb2xsZWN0aWJsZXNUeXBlcy5mb3JFYWNoKChjb2xsZWN0aWJsZURhdGE6SUNvbGxlY3RpYmxlVHlwZSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9jb2xsZWN0aWJsZVR5cGVCeVR5cGVJZC5zZXQoY29sbGVjdGlibGVEYXRhLmlkLCBjb2xsZWN0aWJsZURhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TGV2ZWwobGV2ZWxEYXRhOklMZXZlbCk6dm9pZCB7XHJcblx0XHR0aGlzLl9sZXZlbERhdGEgPSBsZXZlbERhdGE7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9pbWFnZXNMYXllcikge1xyXG5cdFx0XHR0aGlzLl9pbWFnZXNMYXllciA9IG5ldyBTcHJpdGUoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9pbWFnZXNMYXllcik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9jb2xsZWN0aWJsZXNMYXllcikge1xyXG5cdFx0XHR0aGlzLl9jb2xsZWN0aWJsZXNMYXllciA9IG5ldyBTcHJpdGUoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9jb2xsZWN0aWJsZXNMYXllcik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9jb2xsaXNpb25zTGF5ZXIpIHtcclxuXHRcdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyID0gbmV3IFNwcml0ZSgpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2NvbGxpc2lvbnNMYXllcik7XHJcblxyXG5cdFx0XHR0aGlzLmluaXRDb2xsaXNpb25PYmplY3RzU29ydGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5yZW1vdmVBbGxJbWFnZXMoKTtcclxuXHRcdHRoaXMucmVtb3ZlQWxsQ29sbGVjdGlibGVzKCk7XHJcblx0XHR0aGlzLnJlbW92ZUFsbENvbGxpc2lvbk9iamVjdHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5fbGV2ZWxEYXRhLmltYWdlcykge1xyXG5cdFx0XHR0aGlzLl9sZXZlbERhdGEuaW1hZ2VzLmZvckVhY2goKGltYWdlRGF0YTpJSW1hZ2UpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUltYWdlKGltYWdlRGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX2xldmVsRGF0YS5jb2xsZWN0aWJsZXMpIHtcclxuXHRcdFx0dGhpcy5fbGV2ZWxEYXRhLmNvbGxlY3RpYmxlcy5mb3JFYWNoKChjb2xsZWN0aWJsZURhdGE6SUNvbGxlY3RpYmxlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2NvbGxlY3RlZElkcy5pbmRleE9mKGNvbGxlY3RpYmxlRGF0YS5pZCkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlQ29sbGVjdGlibGUoY29sbGVjdGlibGVEYXRhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fbGV2ZWxEYXRhLmJsb2Nrcykge1xyXG5cdFx0XHR0aGlzLl9sZXZlbERhdGEuYmxvY2tzLmZvckVhY2goKGJsb2NrRGF0YTpJQmxvY2spID0+IHtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJsb2NrKGJsb2NrRGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLl9wbGF5ZXIucGFyZW50KVxyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIuYWRkQ2hpbGQodGhpcy5fcGxheWVyKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuX3BsYXllck1vdmVyKVxyXG5cdFx0XHR0aGlzLl9wbGF5ZXJNb3ZlciA9IG5ldyBQbGF5ZXJNb3Zlcih0aGlzLl9zZXRMZXZlbENhbGxiYWNrKTtcclxuXHRcdHRoaXMuX3BsYXllck1vdmVyLnNldExldmVsRGF0YShcclxuXHRcdFx0dGhpcy5fcGxheWVyLFxyXG5cdFx0XHR0aGlzLl9ibG9ja3MsXHJcblx0XHRcdHRoaXMuX2NvbGxlY3RpYmxlcyxcclxuXHRcdFx0dGhpcy5fbGV2ZWxEYXRhLnN0YWdlLFxyXG5cdFx0XHR0aGlzLl9sZXZlbERhdGEuYm9yZGVycyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGF1bmNoVGlja2VyKCk6dm9pZCB7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAudGlja2VyLmFkZCh0aGlzLnRpY2ssIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW1vdmVBbGxJbWFnZXMoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2ltYWdlc0xheWVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcblx0XHR0aGlzLl9pbWFnZXMubGVuZ3RoID0gMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlQWxsQ29sbGVjdGlibGVzKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9jb2xsZWN0aWJsZXNMYXllci5yZW1vdmVDaGlsZHJlbigpO1xyXG5cdFx0dGhpcy5fY29sbGVjdGlibGVzLmxlbmd0aCA9IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbW92ZUFsbENvbGxpc2lvbk9iamVjdHMoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IGJsb2NrLnJlbW92ZUFsbExpc3RlbmVycygpKTtcclxuXHRcdHRoaXMuX3NlbGVjdGVkQmxvY2sgPSBudWxsO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcblx0XHR0aGlzLl9ibG9ja3MubGVuZ3RoID0gMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlSW1hZ2UoaW1hZ2VEYXRhOklJbWFnZSk6dm9pZCB7XHJcblx0XHRjb25zdCBpbWFnZVR5cGVEYXRhOklJbWFnZVR5cGUgPSB0aGlzLl9pbWFnZVR5cGVCeVR5cGVJZC5nZXQoaW1hZ2VEYXRhLnR5cGUpO1xyXG5cdFx0Y29uc3QgaW1hZ2U6U3ByaXRlID0gU3ByaXRlLmZyb20oaW1hZ2VUeXBlRGF0YS5pbWFnZSk7XHJcblx0XHRpbWFnZS54ID0gaW1hZ2VEYXRhLng7XHJcblx0XHRpbWFnZS55ID0gaW1hZ2VEYXRhLnk7XHJcblx0XHR0aGlzLl9pbWFnZXNMYXllci5hZGRDaGlsZChpbWFnZSk7XHJcblx0XHR0aGlzLl9pbWFnZXMucHVzaChpbWFnZSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUNvbGxlY3RpYmxlKGNvbGxlY3RpYmxlRGF0YTpJQ29sbGVjdGlibGUpOnZvaWQge1xyXG5cdFx0Y29uc3QgY29sbGVjdGlibGVUeXBlRGF0YTpJQ29sbGVjdGlibGVUeXBlID0gdGhpcy5fY29sbGVjdGlibGVUeXBlQnlUeXBlSWQuZ2V0KGNvbGxlY3RpYmxlRGF0YS50eXBlKTtcclxuXHRcdGNvbnN0IGNvbGxlY3RpYmxlOkNvbGxlY3RpYmxlID0gbmV3IENvbGxlY3RpYmxlKFxyXG5cdFx0XHRjb2xsZWN0aWJsZVR5cGVEYXRhLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvbGxlY3RpYmxlRGF0YS50eXBlID09IFwiY3VwXCIpIHtcclxuXHRcdFx0XHRcdGFsZXJ0KFwiWU9VIFdJTiEhIVwiKTtcclxuXHRcdFx0XHRcdHRoaXMuX3BsYXllci5zZXRXaW5uZXJTa2luKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLl9jb2xsZWN0ZWRJZHMucHVzaChjb2xsZWN0aWJsZURhdGEuaWQpO1xyXG5cdFx0XHRcdGNvbGxlY3RpYmxlLnBhcmVudC5yZW1vdmVDaGlsZChjb2xsZWN0aWJsZSk7XHJcblx0XHRcdFx0dGhpcy5fY29sbGVjdGlibGVzLnNwbGljZSh0aGlzLl9jb2xsZWN0aWJsZXMuaW5kZXhPZihjb2xsZWN0aWJsZSwgMSkpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0Y29sbGVjdGlibGUueCA9IGNvbGxlY3RpYmxlRGF0YS54O1xyXG5cdFx0Y29sbGVjdGlibGUueSA9IGNvbGxlY3RpYmxlRGF0YS55O1xyXG5cdFx0dGhpcy5fY29sbGVjdGlibGVzTGF5ZXIuYWRkQ2hpbGQoY29sbGVjdGlibGUpO1xyXG5cdFx0dGhpcy5fY29sbGVjdGlibGVzLnB1c2goY29sbGVjdGlibGUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVCbG9jayhibG9ja0RhdGE6SUJsb2NrKTpCbG9jayB7XHJcblx0XHRjb25zdCBibG9ja1R5cGVEYXRhOklCbG9ja1R5cGUgPSB0aGlzLl9ibG9ja1R5cGVCeVR5cGVJZC5nZXQoYmxvY2tEYXRhLnR5cGUpO1xyXG5cdFx0Y29uc3QgYmxvY2s6QmxvY2sgPSBuZXcgQmxvY2soYmxvY2tEYXRhLCBibG9ja1R5cGVEYXRhKTtcclxuXHRcdGJsb2NrLnggPSBibG9ja0RhdGEueCAtIGJsb2NrVHlwZURhdGEuY29sbGlzaW9uLmxlZnQ7XHJcblx0XHRibG9jay55ID0gYmxvY2tEYXRhLnkgLSBibG9ja1R5cGVEYXRhLmNvbGxpc2lvbi50b3A7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIuYWRkQ2hpbGQoYmxvY2spO1xyXG5cdFx0dGhpcy5fYmxvY2tzLnB1c2goYmxvY2spO1xyXG5cclxuXHRcdGlmIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSkge1xyXG5cdFx0XHR0aGlzLm1ha2VCbG9ja0ludGVyYWN0aXZlKGJsb2NrKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYmxvY2s7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFkZEtleUxpc3RlbmVycygpOnZvaWQge1xyXG5cdFx0V2luZG93RXZlbnRzLmFkZChcclxuXHRcdFx0V2luZG93RXZlbnRzLktFWV9ET1dOLFxyXG5cdFx0XHQoZTpLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5rZXlEb3duSGFuZGxlcihlKTtcclxuXHRcdFx0fSxcclxuXHRcdCk7XHJcblxyXG5cdFx0V2luZG93RXZlbnRzLmFkZChcclxuXHRcdFx0V2luZG93RXZlbnRzLktFWV9VUCxcclxuXHRcdFx0KGU6S2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMua2V5VXBIYW5kbGVyKGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0KTtcclxuXHJcblx0XHRXaW5kb3dFdmVudHMuYWRkKFxyXG5cdFx0XHRXaW5kb3dFdmVudHMuRk9DVVNfT1VULFxyXG5cdFx0XHQoZTphbnkpID0+IHtcclxuXHRcdFx0XHR0aGlzLmZvY3VzT3V0SGFuZGxlcigpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0Q29sbGlzaW9uT2JqZWN0c1NvcnRlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uT2JqZWN0c1NvcnRlciA9IG5ldyBDb2xsaXNpb25PYmplY3RzU29ydGVyKHRoaXMuX2NvbGxpc2lvbnNMYXllcik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHRpY2soKTp2b2lkIHtcclxuXHRcdHRoaXMucmVmcmVzaFBsYXllclNwZWVkWCgpO1xyXG5cdFx0dGhpcy5yZWZyZXNoUGxheWVyU3BlZWRZKCk7XHJcblx0XHR0aGlzLl9wbGF5ZXJNb3Zlci5yZWZyZXNoKCk7XHJcblx0XHRpZiAoR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpXHJcblx0XHRcdHRoaXMucmVmcmVzaENvbGxpc2lvblJlY3RhbmdsZXMoKTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbk9iamVjdHNTb3J0ZXIuc29ydCgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoQ29sbGlzaW9uUmVjdGFuZ2xlcygpOnZvaWQge1xyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBoaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGkgIT0gaiAmJlxyXG5cdFx0XHRcdFx0SGl0VGVzdC5ob3Jpem9udGFsKHRoaXMuX2Jsb2Nrc1tpXSwgdGhpcy5fYmxvY2tzW2pdKSAmJlxyXG5cdFx0XHRcdFx0SGl0VGVzdC52ZXJ0aWNhbCh0aGlzLl9ibG9ja3NbaV0sIHRoaXMuX2Jsb2Nrc1tqXSlcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGhpdCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fYmxvY2tzW2ldLnNob3dCbG9ja0hpdChoaXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoUGxheWVyU3BlZWRYKCk6dm9pZCB7XHJcblx0XHRjb25zdCBzbG93ZG93bjpib29sZWFuID0gIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfTEVGVCkgJiYgIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfUklHSFQpO1xyXG5cdFx0aWYgKCFzbG93ZG93biB8fCBNYXRoLmFicyh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkpID4gLjEpIHtcclxuXHRcdFx0bGV0IGRpcmVjdGlvbjogbnVtYmVyO1xyXG5cdFx0XHRpZiAodGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9MRUZUKSAmJiB0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX1JJR0hUKSkge1xyXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHRoaXMuX2xhc3RQcmVzc2VkRGlyZWN0aW9uQnV0dG9uID09IEtFWV9MRUZUID8gLTEgOiAxO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsb3dkb3duKSB7XHJcblx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy5fcGxheWVyLmdldFNwZWVkWCgpID4gMCA/IC0xIDogMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX0xFRlQpID8gLTEgOiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBkaXN0YW5jZTogbnVtYmVyO1xyXG5cdFx0XHRpZiAoc2xvd2Rvd24pIHtcclxuXHRcdFx0XHRkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGlzdGFuY2UgPSBQbGF5ZXIuTUFYX01PVklOR19TUEVFRCAtIHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSAqIGRpcmVjdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRYKHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSArIGRpc3RhbmNlICogZGlyZWN0aW9uICogUGxheWVyLk1PVklOR19BQ0NFTEVSQVRJT05fRkFDVE9SKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFgoMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlZnJlc2hQbGF5ZXJTcGVlZFkoKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9wbGF5ZXIub25UaGVGbG9vciAmJiB0aGlzLl9qdW1wKSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFkoUGxheWVyLkpVTVBfU1BFRUQpO1xyXG5cdFx0XHR0aGlzLl9qdW1wID0gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLl9wbGF5ZXIub25UaGVGbG9vciAmJiAhdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9VUCkgJiYgdGhpcy5fcGxheWVyLmdldFNwZWVkWSgpIDwgMCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWSh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCkgKyBQbGF5ZXIuR1JBVklUWSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGtleURvd25IYW5kbGVyKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XHJcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0XHRjYXNlIEtFWV9MRUZUOlxyXG5cdFx0XHRjYXNlIEtFWV9SSUdIVDpcclxuXHRcdFx0XHR0aGlzLl9sYXN0UHJlc3NlZERpcmVjdGlvbkJ1dHRvbiA9IGUuY29kZTtcclxuXHRcdFx0XHR0aGlzLl9wcmVzc2VkQnV0dG9ucy5zZXQoZS5jb2RlLCB0cnVlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX1VQOlxyXG5cdFx0XHRcdGlmICghdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KGUuY29kZSkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2p1bXAgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGUuY29kZSwgdHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfQkFDS1FVT1RFOlxyXG5cdFx0XHRcdGlmICghcHJvY2Vzcy5lbnYuUkVMRUFTRSkge1xyXG5cdFx0XHRcdFx0R2xvYmFscy5zZXREZXZlbG9wZXJNb2RlKCFHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSk7XHJcblx0XHRcdFx0XHRpZiAoR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5lbmFibGVEZXZlbG9wZXJNb2RlKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpc2FibGVEZXZlbG9wZXJNb2RlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkRldmVsb3BlciBtb2RlIGlzIFwiICsgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpID8gXCJPTlwiIDogXCJPRkZcIikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0o6XHJcblx0XHRcdFx0aWYgKCFwcm9jZXNzLmVudi5SRUxFQVNFKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByaW50TGV2ZWxKc29uKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfREVMRVRFOlxyXG5cdFx0XHRcdHRoaXMuZGVsZXRlU2VsZWN0ZWRCbG9ja0lmQ2FuKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9DT01NQTpcclxuXHRcdFx0Y2FzZSBLRVlfUEVSSU9EOlxyXG5cdFx0XHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdGxldCBzZWxlY3RlZEJsb2NrRGF0YTpJQmxvY2sgPSB0aGlzLl9zZWxlY3RlZEJsb2NrLmdldERhdGEoKTtcclxuXHRcdFx0XHRcdGxldCBzZWxlY3RlZEJsb2NrVHlwZURhdGE6SUJsb2NrVHlwZSA9IHRoaXMuX2Jsb2NrVHlwZUJ5VHlwZUlkLmdldChzZWxlY3RlZEJsb2NrRGF0YS50eXBlKTtcclxuXHRcdFx0XHRcdGxldCBpbmRleE9mU2VsZWN0ZWRCbG9ja1R5cGU6bnVtYmVyID0gdGhpcy5fYmxvY2tzVHlwZXMuaW5kZXhPZihzZWxlY3RlZEJsb2NrVHlwZURhdGEpO1xyXG5cdFx0XHRcdFx0bGV0IG5leHRUeXBlSW5kZXg6bnVtYmVyID0gZS5jb2RlID09IEtFWV9DT01NQSA/IGluZGV4T2ZTZWxlY3RlZEJsb2NrVHlwZSAtIDEgOiBpbmRleE9mU2VsZWN0ZWRCbG9ja1R5cGUgKyAxO1xyXG5cdFx0XHRcdFx0aWYgKG5leHRUeXBlSW5kZXggPCAwKVxyXG5cdFx0XHRcdFx0XHRuZXh0VHlwZUluZGV4ID0gdGhpcy5fYmxvY2tzVHlwZXMubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKG5leHRUeXBlSW5kZXggPj0gdGhpcy5fYmxvY2tzVHlwZXMubGVuZ3RoKVxyXG5cdFx0XHRcdFx0XHRuZXh0VHlwZUluZGV4ID0gMDtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3RlZEJsb2NrRGF0YS54ID0gdGhpcy5fc2VsZWN0ZWRCbG9jay5jb2xsaXNpb25MZWZ0KCk7XHJcblx0XHRcdFx0XHRzZWxlY3RlZEJsb2NrRGF0YS55ID0gdGhpcy5fc2VsZWN0ZWRCbG9jay5jb2xsaXNpb25Ub3AoKTtcclxuXHRcdFx0XHRcdHRoaXMuZGVsZXRlU2VsZWN0ZWRCbG9ja0lmQ2FuKCk7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRCbG9ja0RhdGEudHlwZSA9IHRoaXMuX2Jsb2Nrc1R5cGVzW25leHRUeXBlSW5kZXhdLmlkO1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RCbG9jayh0aGlzLmNyZWF0ZUJsb2NrKHNlbGVjdGVkQmxvY2tEYXRhKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfTjpcclxuXHRcdFx0XHRpZiAodGhpcy5fc2VsZWN0ZWRCbG9jayAhPSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld0Jsb2NrU2hpZnQ6bnVtYmVyID0gMjA7XHJcblx0XHRcdFx0XHRsZXQgbmV3QmxvY2tEYXRhOklCbG9jayA9IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogdGhpcy5fc2VsZWN0ZWRCbG9jay5nZXRUeXBlRGF0YSgpLmlkLFxyXG5cdFx0XHRcdFx0XHR4OiB0aGlzLl9zZWxlY3RlZEJsb2NrLmNvbGxpc2lvbkxlZnQoKSArIG5ld0Jsb2NrU2hpZnQsXHJcblx0XHRcdFx0XHRcdHk6IHRoaXMuX3NlbGVjdGVkQmxvY2suY29sbGlzaW9uVG9wKCkgLSBuZXdCbG9ja1NoaWZ0LFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0QmxvY2sodGhpcy5jcmVhdGVCbG9jayhuZXdCbG9ja0RhdGEpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9DOlxyXG5cdFx0XHRcdHRoaXMuX2NoYW5nZUNhbWVyYUNhbGxiYWNrKHRoaXMuX2xldmVsRGF0YS5zdGFnZS53aWR0aCwgdGhpcy5fbGV2ZWxEYXRhLnN0YWdlLmhlaWdodCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUuY29kZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNlbGVjdEJsb2NrKGJsb2NrOkJsb2NrKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrID09IGJsb2NrKSByZXR1cm47XHJcblx0XHRpZiAodGhpcy5fc2VsZWN0ZWRCbG9jayAhPSBudWxsKVxyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrLmhpZGVTZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMuX3NlbGVjdGVkQmxvY2sgPSBibG9jaztcclxuXHRcdHRoaXMuX3NlbGVjdGVkQmxvY2suc2hvd1NlbGVjdGlvbigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkZWxldGVTZWxlY3RlZEJsb2NrSWZDYW4oKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpIHtcclxuXHRcdFx0dGhpcy5fc2VsZWN0ZWRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuXHRcdFx0dGhpcy5fc2VsZWN0ZWRCbG9jay5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fc2VsZWN0ZWRCbG9jayk7XHJcblx0XHRcdGxldCBibG9ja0luZGV4ID0gdGhpcy5fYmxvY2tzLmluZGV4T2YodGhpcy5fc2VsZWN0ZWRCbG9jayk7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrcy5zcGxpY2UoYmxvY2tJbmRleCwgMSk7XHJcblx0XHRcdHRoaXMuX3NlbGVjdGVkQmxvY2sgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBlbmFibGVEZXZlbG9wZXJNb2RlKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wbGF5ZXIuc2hvd0NvbGxpc2lvbnMoKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHRoaXMubWFrZUJsb2NrSW50ZXJhY3RpdmUoYmxvY2spKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbWFrZUJsb2NrSW50ZXJhY3RpdmUoYmxvY2s6QmxvY2spOnZvaWQge1xyXG5cdFx0YmxvY2suaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cdFx0YmxvY2suYWRkTGlzdGVuZXIoUE9JTlRFUl9ET1dOLCB0aGlzLmJsb2NrUG9pbnRlckRvd25IYW5kbGVyLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbWFrZUJsb2NrTm90SW50ZXJhY3RpdmUoYmxvY2s6QmxvY2spOnZvaWQge1xyXG5cdFx0YmxvY2suaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuXHRcdGJsb2NrLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBibG9ja1BvaW50ZXJEb3duSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRCbG9jazpCbG9jayA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEJsb2NrKTtcclxuXHRcdGNvbnN0IHBvaW50ZXJEb3duUG9pbnQ6UG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuZGF0YS5nbG9iYWwueCwgZXZlbnQuZGF0YS5nbG9iYWwueSk7XHJcblx0XHRjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQgPSBjdXJyZW50QmxvY2sudG9Mb2NhbChwb2ludGVyRG93blBvaW50KTtcclxuXHRcdGN1cnJlbnRCbG9jay5hZGRMaXN0ZW5lcihQT0lOVEVSX01PVkUsIHRoaXMuYmxvY2tQb2ludGVyTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0Y3VycmVudEJsb2NrLmFkZExpc3RlbmVyKFBPSU5URVJfVVAsIHRoaXMuYmxvY2tQb2ludGVyVXBIYW5kbGVyLCB0aGlzKTtcclxuXHRcdGN1cnJlbnRCbG9jay5hZGRMaXN0ZW5lcihQT0lOVEVSX1VQX09VVFNJREUsIHRoaXMuYmxvY2tQb2ludGVyVXBIYW5kbGVyLCB0aGlzKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdEJsb2NrKGN1cnJlbnRCbG9jayk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlck1vdmVIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudEJsb2NrOkJsb2NrID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgQmxvY2spO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyRHJhZ1BvaW50OlBvaW50ID0gdGhpcy50b0xvY2FsKG5ldyBQb2ludChldmVudC5kYXRhLmdsb2JhbC54LCBldmVudC5kYXRhLmdsb2JhbC55KSk7XHJcblx0XHRjdXJyZW50QmxvY2sueCA9IE1hdGgucm91bmQoY29udGFpbmVyRHJhZ1BvaW50LnggLSBjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQueCk7XHJcblx0XHRjdXJyZW50QmxvY2sueSA9IE1hdGgucm91bmQoY29udGFpbmVyRHJhZ1BvaW50LnkgLSBjdXJyZW50QmxvY2subG9jYWxEcmFnUG9pbnQueSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlclVwSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRCbG9jazpCbG9jayA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEJsb2NrKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9NT1ZFKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9VUCk7XHJcblx0XHRjdXJyZW50QmxvY2sucmVtb3ZlQWxsTGlzdGVuZXJzKFBPSU5URVJfVVBfT1VUU0lERSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRpc2FibGVEZXZlbG9wZXJNb2RlKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wbGF5ZXIuaGlkZUNvbGxpc2lvbnMoKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKChibG9jazpCbG9jaykgPT4ge1xyXG5cdFx0XHR0aGlzLm1ha2VCbG9ja05vdEludGVyYWN0aXZlKGJsb2NrKTtcclxuXHRcdFx0YmxvY2suaGlkZUJsb2NrSGl0KCk7XHJcblx0XHRcdGJsb2NrLmhpZGVTZWxlY3Rpb24oKTtcclxuXHRcdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IG51bGw7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJpbnRMZXZlbEpzb24oKTp2b2lkIHtcclxuXHRcdGNvbnN0IGJsb2Nrc0RhdGE6SUJsb2NrW10gPSBbXTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllci5jaGlsZHJlbi5mb3JFYWNoKChjb2xsaXNpb25PYmplY3QpID0+IHtcclxuXHRcdFx0aWYgKGNvbGxpc2lvbk9iamVjdCBpbnN0YW5jZW9mIEJsb2NrKSB7XHJcblx0XHRcdFx0YmxvY2tzRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRcdC4uLmNvbGxpc2lvbk9iamVjdC5nZXREYXRhKCksXHJcblx0XHRcdFx0XHR4OiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uTGVmdCgpLFxyXG5cdFx0XHRcdFx0eTogY29sbGlzaW9uT2JqZWN0LmNvbGxpc2lvblRvcCgpLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IGxldmVsRGF0YTpJTGV2ZWwgPSB7XHJcblx0XHRcdC4uLnRoaXMuX2xldmVsRGF0YSxcclxuXHRcdFx0YmxvY2tzOmJsb2Nrc0RhdGEsXHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBsZXZlbEpzb24gPSBKU09OLnN0cmluZ2lmeShsZXZlbERhdGEsIG51bGwsIDIpO1xyXG5cdFx0Y29uc29sZS5sb2cobGV2ZWxKc29uKTtcclxuXHRcdHZvaWQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGV2ZWxKc29uKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUga2V5VXBIYW5kbGVyKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XHJcblx0XHRpZiAoZS5jb2RlID09IEtFWV9VUCkge1xyXG5cdFx0XHR0aGlzLl9qdW1wID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdFx0Y2FzZSBLRVlfVVA6XHJcblx0XHRcdGNhc2UgS0VZX0xFRlQ6XHJcblx0XHRcdGNhc2UgS0VZX1JJR0hUOlxyXG5cdFx0XHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLnNldChlLmNvZGUsIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZm9jdXNPdXRIYW5kbGVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wcmVzc2VkQnV0dG9ucy5mb3JFYWNoKCh2YWx1ZTpib29sZWFuLCBrZXk6c3RyaW5nKSA9PiB7XHJcblx0XHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLnNldChrZXksIGZhbHNlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbGxpc2lvbk9iamVjdCB7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTS0lOX05BTUU6c3RyaW5nID0gXCJpbWcvcGxheWVyL3BsYXllci5wbmdcIjtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdJTk5FUl9TS0lOX05BTUU6c3RyaW5nID0gXCJpbWcvcGxheWVyL3dpbm5lci5wbmdcIjtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSQVZJVFk6bnVtYmVyID0gMC41ODg2O1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSlVNUF9TUEVFRDpudW1iZXIgPSAtMTc7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBNQVhfTU9WSU5HX1NQRUVEOm51bWJlciA9IDg7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBNT1ZJTkdfQUNDRUxFUkFUSU9OX0ZBQ1RPUjpudW1iZXIgPSAuNDtcclxuXHJcblx0cHVibGljIG9uVGhlRmxvb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIF9zcGVlZFg6bnVtYmVyID0gMDtcclxuXHRwcml2YXRlIF9zcGVlZFk6bnVtYmVyID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfc2tpbkNvbnRhaW5lcjpTcHJpdGU7XHJcblx0cHJpdmF0ZSBfY3VycmVudFNraW46U3ByaXRlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9za2luQ29udGFpbmVyID0gbmV3IFNwcml0ZSgpO1xyXG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9za2luQ29udGFpbmVyKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRTa2luID0gU3ByaXRlLmZyb20oUGxheWVyLlNLSU5fTkFNRSk7XHJcblx0XHR0aGlzLl9za2luQ29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2N1cnJlbnRTa2luKTtcclxuXHRcdHRoaXMuc2V0TG9jYWxDb2xsaXNpb25WYWx1ZXMoMzAsIDE1NywgMTUsIDE0Mik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0U3BlZWRYKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHR0aGlzLl9zcGVlZFggPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRTcGVlZFgoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NwZWVkWDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRTcGVlZFkodmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuX3NwZWVkWSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFNwZWVkWSgpOm51bWJlciB7XHJcblx0XHRjb25zdCBtYXhTcGVlZFk6bnVtYmVyID0gMzA7XHJcblx0XHRyZXR1cm4gTWF0aC5taW4odGhpcy5fc3BlZWRZLCBtYXhTcGVlZFkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFdpbm5lclNraW4oKTp2b2lkIHtcclxuXHRcdHRoaXMuX2N1cnJlbnRTa2luLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9jdXJyZW50U2tpbik7XHJcblx0XHR0aGlzLl9jdXJyZW50U2tpbiA9IFNwcml0ZS5mcm9tKFBsYXllci5XSU5ORVJfU0tJTl9OQU1FKTtcclxuXHRcdHRoaXMuX3NraW5Db250YWluZXIuYWRkQ2hpbGQodGhpcy5fY3VycmVudFNraW4pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNob3dDb2xsaXNpb25zKCk6dm9pZCB7XHJcblx0XHR0aGlzLnNob3dDb2xsaXNpb25SZWN0YW5nbGUoMHgwMGZmMDApO1xyXG5cdFx0dGhpcy5fc2tpbkNvbnRhaW5lci5hbHBoYSA9IC4zO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhpZGVDb2xsaXNpb25zKCk6dm9pZCB7XHJcblx0XHR0aGlzLmhpZGVDb2xsaXNpb25SZWN0YW5nbGUoKTtcclxuXHRcdHRoaXMuX3NraW5Db250YWluZXIuYWxwaGEgPSAxO1xyXG5cdH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcbmltcG9ydCB7SUxldmVsLCBJTGV2ZWxCb3JkZXJzLCBJU3RhZ2V9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBDb2xsZWN0aWJsZSBmcm9tIFwiLi9Db2xsZWN0aWJsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTW92ZXIge1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhPUklaT05UQUw6c3ltYm9sID0gU3ltYm9sKCk7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVkVSVElDQUw6c3ltYm9sID0gU3ltYm9sKCk7XHJcblx0cHJpdmF0ZSBfcGxheWVyOlBsYXllcjtcclxuXHRwcml2YXRlIF9wbGF5ZXJDZW50ZXJYOm51bWJlcjtcclxuXHRwcml2YXRlIF9wbGF5ZXJDZW50ZXJZOm51bWJlcjtcclxuXHRwcml2YXRlIF9ibG9ja3M6QmxvY2tbXTtcclxuXHRwcml2YXRlIF9jb2xsZWN0aWJsZXM6Q29sbGVjdGlibGVbXTtcclxuXHRwcml2YXRlIF9zdGFnZTpJU3RhZ2U7XHJcblx0cHJpdmF0ZSBfYm9yZGVyczpJTGV2ZWxCb3JkZXJzO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3NldExldmVsQ2FsbGJhY2s6KGxldmVsOm51bWJlcikgPT4gSUxldmVsLFxyXG5cdCkge1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldExldmVsRGF0YShcclxuXHRcdHBsYXllcjpQbGF5ZXIsXHJcblx0XHRibG9ja3M6QmxvY2tbXSxcclxuXHRcdGNvbGxlY3RpYmxlczpDb2xsZWN0aWJsZVtdLFxyXG5cdFx0c3RhZ2U6SVN0YWdlLFxyXG5cdFx0Ym9yZGVyczpJTGV2ZWxCb3JkZXJzLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5fcGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5fcGxheWVyQ2VudGVyWCA9IHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkNlbnRlclgoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdHRoaXMuX3BsYXllckNlbnRlclkgPSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25DZW50ZXJZKCkgKyB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHRcdHRoaXMuX2Jsb2NrcyA9IGJsb2NrcztcclxuXHRcdHRoaXMuX2NvbGxlY3RpYmxlcyA9IGNvbGxlY3RpYmxlcztcclxuXHRcdHRoaXMuX3N0YWdlID0gc3RhZ2U7XHJcblx0XHR0aGlzLl9ib3JkZXJzID0gYm9yZGVycztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWZyZXNoKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fcGxheWVyLmdldFNwZWVkWCgpICE9PSAwKSB7XHJcblx0XHRcdHRoaXMubW92ZShcclxuXHRcdFx0XHRQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMLFxyXG5cdFx0XHRcdHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRYKDApXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCkgIT09IDApIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLm9uVGhlRmxvb3IgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5tb3ZlKFxyXG5cdFx0XHRcdFBsYXllck1vdmVyLlZFUlRJQ0FMLFxyXG5cdFx0XHRcdHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5fcGxheWVyLmdldFNwZWVkWSgpID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9wbGF5ZXIub25UaGVGbG9vciA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKDApO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1vdmUoXHJcblx0XHRkaXJlY3Rpb246c3ltYm9sLFxyXG5cdFx0c3BlZWQ6bnVtYmVyLFxyXG5cdFx0b25MaW1pdFBvc2l0aW9uOigpID0+IHZvaWQgPSBudWxsLFxyXG5cdCk6dm9pZCB7XHJcblx0XHRsZXQgbGltaXRQb3NpdGlvbjpudW1iZXIgPSBudWxsO1xyXG5cdFx0bGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oZGlyZWN0aW9uKTtcclxuXHRcdGxldCB0YXJnZXRQb3NpdGlvbjpudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuZ2V0UG9zaXRpb24oZGlyZWN0aW9uKSArIHNwZWVkKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKChibG9jazpCbG9jaykgPT4ge1xyXG5cdFx0XHRsZXQgYmxvY2tMaW1pdFBvc2l0aW9uOm51bWJlciA9IHRoaXMuY2FsY3VsYXRlTGltaXRQb3NpdGlvbihibG9jaywgZGlyZWN0aW9uLCBzcGVlZCk7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPD0gYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA+IGJsb2NrTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0dGhpcy5oaXRUZXN0KGRpcmVjdGlvbiwgdGhpcy5fcGxheWVyLCBibG9jaylcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5taW4obGltaXRQb3NpdGlvbiwgYmxvY2tMaW1pdFBvc2l0aW9uKSA6IGJsb2NrTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID49IGJsb2NrTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0dGFyZ2V0UG9zaXRpb24gPCBibG9ja0xpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdHRoaXMuaGl0VGVzdChkaXJlY3Rpb24sIHRoaXMuX3BsYXllciwgYmxvY2spXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRsaW1pdFBvc2l0aW9uID0gbGltaXRQb3NpdGlvbiAhPT0gbnVsbCA/IE1hdGgubWF4KGxpbWl0UG9zaXRpb24sIGJsb2NrTGltaXRQb3NpdGlvbikgOiBibG9ja0xpbWl0UG9zaXRpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgcHJvY2Vzc2VkVGFyZ2V0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9IG51bGwgPyBsaW1pdFBvc2l0aW9uIDogdGFyZ2V0UG9zaXRpb247XHJcblx0XHRsZXQgc3RhZ2VMaW1pdFBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVTdGFnZUxpbWl0UG9zaXRpb24oZGlyZWN0aW9uLCBzcGVlZCwgdGhpcy5fc3RhZ2UpO1xyXG5cdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uIDw9IHN0YWdlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdHByb2Nlc3NlZFRhcmdldFBvc2l0aW9uID4gc3RhZ2VMaW1pdFBvc2l0aW9uXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGxldCBib3JkZXIgPSB0aGlzLmdldEJvcmRlcihkaXJlY3Rpb24sIHNwZWVkKTtcclxuXHRcdFx0XHRpZiAoYm9yZGVyID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9jZXNzQm9yZGVyKGJvcmRlciwgZGlyZWN0aW9uLCBzcGVlZCwgcHJvY2Vzc2VkVGFyZ2V0UG9zaXRpb24pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsaW1pdFBvc2l0aW9uID0gbGltaXRQb3NpdGlvbiAhPT0gbnVsbCA/IE1hdGgubWluKGxpbWl0UG9zaXRpb24sIHN0YWdlTGltaXRQb3NpdGlvbikgOiBzdGFnZUxpbWl0UG9zaXRpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID49IHN0YWdlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdHByb2Nlc3NlZFRhcmdldFBvc2l0aW9uIDwgc3RhZ2VMaW1pdFBvc2l0aW9uXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGxldCBib3JkZXIgPSB0aGlzLmdldEJvcmRlcihkaXJlY3Rpb24sIHNwZWVkKTtcclxuXHRcdFx0XHRpZiAoYm9yZGVyID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9jZXNzQm9yZGVyKGJvcmRlciwgZGlyZWN0aW9uLCBzcGVlZCwgcHJvY2Vzc2VkVGFyZ2V0UG9zaXRpb24pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsaW1pdFBvc2l0aW9uID0gbGltaXRQb3NpdGlvbiAhPT0gbnVsbCA/IE1hdGgubWF4KGxpbWl0UG9zaXRpb24sIHN0YWdlTGltaXRQb3NpdGlvbikgOiBzdGFnZUxpbWl0UG9zaXRpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGxpbWl0UG9zaXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIGxpbWl0UG9zaXRpb24pO1xyXG5cdFx0XHRpZiAob25MaW1pdFBvc2l0aW9uICE9PSBudWxsKSB7XHJcblx0XHRcdFx0b25MaW1pdFBvc2l0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2V0UG9zaXRpb24oZGlyZWN0aW9uLCB0YXJnZXRQb3NpdGlvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fY29sbGVjdGlibGVzLmZvckVhY2goKGNvbGxlY3RpYmxlOkNvbGxlY3RpYmxlKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGNvbGxlY3RpYmxlKSkge1xyXG5cdFx0XHRcdGxldCBjb2xsZWN0aWJsZUxpbWl0UG9zaXRpb246bnVtYmVyID0gdGhpcy5jYWxjdWxhdGVMaW1pdFBvc2l0aW9uKGNvbGxlY3RpYmxlLCBkaXJlY3Rpb24sIHNwZWVkKTtcclxuXHRcdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA8PSBjb2xsZWN0aWJsZUxpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdFx0dGFyZ2V0UG9zaXRpb24gPiBjb2xsZWN0aWJsZUxpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdFx0dGhpcy5oaXRUZXN0KGRpcmVjdGlvbiwgdGhpcy5fcGxheWVyLCBjb2xsZWN0aWJsZSlcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aWJsZS5vbkhpdCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA+PSBjb2xsZWN0aWJsZUxpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdFx0dGFyZ2V0UG9zaXRpb24gPCBjb2xsZWN0aWJsZUxpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdFx0dGhpcy5oaXRUZXN0KGRpcmVjdGlvbiwgdGhpcy5fcGxheWVyLCBjb2xsZWN0aWJsZSlcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRjb2xsZWN0aWJsZS5vbkhpdCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByb2Nlc3NCb3JkZXIoYm9yZGVyOm51bWJlciwgZGlyZWN0aW9uOnN5bWJvbCwgc3BlZWQ6bnVtYmVyLCB0YXJnZXRQb3NpdGlvbjpudW1iZXIpOnZvaWQge1xyXG5cdFx0bGV0IG5ld1N0YWdlID0gdGhpcy5fc2V0TGV2ZWxDYWxsYmFjayhib3JkZXIpLnN0YWdlO1xyXG5cdFx0bGV0IHN0YWdlTGltaXRQb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlU3RhZ2VMaW1pdFBvc2l0aW9uKGRpcmVjdGlvbiwgc3BlZWQsIHRoaXMuX3N0YWdlKTtcclxuXHRcdGxldCBleGNlc3NEaXN0YW5jZSA9IE1hdGguYWJzKHRhcmdldFBvc2l0aW9uIC0gc3RhZ2VMaW1pdFBvc2l0aW9uKSAtIDE7XHJcblx0XHRsZXQgbmV4dFBsYXllclBvc2l0aW9uOm51bWJlciA9IHRoaXMuY2FsY3VsYXRlUGxheWVyUG9zaXRpb25Gb3JUaGVOZXh0TGV2ZWwoZGlyZWN0aW9uLCBzcGVlZCwgbmV3U3RhZ2UsIGV4Y2Vzc0Rpc3RhbmNlKTtcclxuXHRcdHRoaXMuc2V0UG9zaXRpb24oZGlyZWN0aW9uLCBuZXh0UGxheWVyUG9zaXRpb24pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxjdWxhdGVQbGF5ZXJQb3NpdGlvbkZvclRoZU5leHRMZXZlbChcclxuXHRcdGRpcmVjdGlvbjpzeW1ib2wsXHJcblx0XHRzcGVlZDpudW1iZXIsXHJcblx0XHRzdGFnZTpJU3RhZ2UsXHJcblx0XHRleGNlc3NEaXN0YW5jZTpudW1iZXIpOm51bWJlciB7XHJcblx0XHRsZXQgb3Bwb3NpdGVMaW1pdDpudW1iZXIgPSB0aGlzLmNhbGN1bGF0ZVN0YWdlTGltaXRQb3NpdGlvbihkaXJlY3Rpb24sIHNwZWVkICogLTEsIHN0YWdlKTtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9wcG9zaXRlTGltaXQgKyBleGNlc3NEaXN0YW5jZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCAtIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9wcG9zaXRlTGltaXQgKyBleGNlc3NEaXN0YW5jZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCAtIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEJvcmRlcihkaXJlY3Rpb246c3ltYm9sLCBzcGVlZDpudW1iZXIpOm51bWJlciB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0cmV0dXJuIChzcGVlZCA+IDApID8gdGhpcy5fYm9yZGVycy5yaWdodCA6IHRoaXMuX2JvcmRlcnMubGVmdDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoc3BlZWQgPiAwKSA/IHRoaXMuX2JvcmRlcnMuYm90dG9tIDogdGhpcy5fYm9yZGVycy50b3A7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldFBvc2l0aW9uKGRpcmVjdGlvbjpzeW1ib2wsIHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnggPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci55ID0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFBvc2l0aW9uKGRpcmVjdGlvbjpzeW1ib2wpOm51bWJlciB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BsYXllci54O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BsYXllci55O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxjdWxhdGVMaW1pdFBvc2l0aW9uKGNvbGxpc2lvbk9iamVjdDpDb2xsaXNpb25PYmplY3QsIGRpcmVjdGlvbjpzeW1ib2wsIHNwZWVkOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25MZWZ0KCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25SaWdodCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uUmlnaHQoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdHJldHVybiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uVG9wKCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Cb3R0b20oKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gY29sbGlzaW9uT2JqZWN0LmNvbGxpc2lvbkJvdHRvbSgpIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uVG9wKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2FsY3VsYXRlU3RhZ2VMaW1pdFBvc2l0aW9uKGRpcmVjdGlvbjpzeW1ib2wsIHNwZWVkOm51bWJlciwgc3RhZ2U6SVN0YWdlKTpudW1iZXIge1xyXG5cdFx0aWYgKGRpcmVjdGlvbiA9PSBQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMKSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gc3RhZ2Uud2lkdGggLSB0aGlzLl9wbGF5ZXJDZW50ZXJYO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAtdGhpcy5fcGxheWVyQ2VudGVyWDtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdHJldHVybiBzdGFnZS5oZWlnaHQgLSB0aGlzLl9wbGF5ZXJDZW50ZXJZO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAtdGhpcy5fcGxheWVyQ2VudGVyWTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoaXRUZXN0KGRpcmVjdGlvbjpzeW1ib2wsIG9iamVjdDE6Q29sbGlzaW9uT2JqZWN0LCBvYmplY3QyOkNvbGxpc2lvbk9iamVjdCk6Ym9vbGVhbiB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0cmV0dXJuIEhpdFRlc3QudmVydGljYWwob2JqZWN0MSwgb2JqZWN0Mik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gSGl0VGVzdC5ob3Jpem9udGFsKG9iamVjdDEsIG9iamVjdDIpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7SUxldmVsLCBJTGV2ZWxzTWV0YWRhdGF9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbHNNYW5hZ2VyIHtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbGV2ZWxCeUlkOk1hcDxudW1iZXIsIElMZXZlbD4gPSBuZXcgTWFwPG51bWJlciwgSUxldmVsPigpO1xyXG5cdHByaXZhdGUgc3RhdGljIF9sZXZlbHNNZXRhZGF0YTpJTGV2ZWxzTWV0YWRhdGE7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkTGV2ZWwobGV2ZWxEYXRhOklMZXZlbCk6dm9pZCB7XHJcblx0XHRMZXZlbHNNYW5hZ2VyLl9sZXZlbEJ5SWQuc2V0KGxldmVsRGF0YS5pZCwgbGV2ZWxEYXRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkTGV2ZWxzTWV0YWRhdGEobWV0YWRhdGE6SUxldmVsc01ldGFkYXRhKTp2b2lkIHtcclxuXHRcdExldmVsc01hbmFnZXIuX2xldmVsc01ldGFkYXRhID0gbWV0YWRhdGE7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldExldmVsKGxldmVsSWQ6bnVtYmVyKTpJTGV2ZWwge1xyXG5cdFx0cmV0dXJuIExldmVsc01hbmFnZXIuX2xldmVsQnlJZC5nZXQobGV2ZWxJZCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldExldmVsc01ldGFkYXRhKCk6SUxldmVsc01ldGFkYXRhIHtcclxuXHRcdHJldHVybiBMZXZlbHNNYW5hZ2VyLl9sZXZlbHNNZXRhZGF0YTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFJlcXVlc3Qge1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zdWNjZXNzUmVxdWVzdHNJZHM6U2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHM6TWFwPHN0cmluZywgQWJzdHJhY3RSZXF1ZXN0PiA9IG5ldyBNYXA8c3RyaW5nLCBBYnN0cmFjdFJlcXVlc3Q+KCk7XHJcblxyXG5cdHByb3RlY3RlZCBfcmVxdWVzdElkOnN0cmluZyA9IG51bGw7XHJcblx0cHJpdmF0ZSBfcmVxdWVzdFByb21pc2U6UHJvbWlzZTx2b2lkPjtcclxuXHJcblx0cHVibGljIGNyZWF0ZVByb21pc2UoZm9yY2VkUmVxdWVzdDpib29sZWFuID0gZmFsc2UpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0aWYgKHRoaXMuX3JlcXVlc3RJZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRpZiAoZm9yY2VkUmVxdWVzdCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVVuaXF1ZVJlcXVlc3RQcm9taXNlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKEFic3RyYWN0UmVxdWVzdC5fc3VjY2Vzc1JlcXVlc3RzSWRzLmhhcyh0aGlzLl9yZXF1ZXN0SWQpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFbXB0eVByb21pc2UoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc3QgdW5pcXVlUmVxdWVzdDpBYnN0cmFjdFJlcXVlc3QgPSBBYnN0cmFjdFJlcXVlc3QuX2V4ZWN1dGluZ1VuaXF1ZVJlcXVlc3RzLmdldCh0aGlzLl9yZXF1ZXN0SWQpO1xyXG5cdFx0XHRcdFx0aWYgKHVuaXF1ZVJlcXVlc3QpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlV2FpdFByb21pc2UodW5pcXVlUmVxdWVzdCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVVbmlxdWVSZXF1ZXN0UHJvbWlzZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWVzdFByb21pc2VGYWN0b3J5KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UmVxdWVzdFByb21pc2UoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiB0aGlzLl9yZXF1ZXN0UHJvbWlzZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlRW1wdHlQcm9taXNlKCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuXHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZVdhaXRQcm9taXNlKHVuaXF1ZVJlcXVlc3Q6QWJzdHJhY3RSZXF1ZXN0KTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHVuaXF1ZVJlcXVlc3QuZ2V0UmVxdWVzdFByb21pc2UoKVxyXG5cdFx0XHRcdC50aGVuKCgpID0+IHJlc29sdmUoKSlcclxuXHRcdFx0XHQuY2F0Y2goKCkgPT4gcmVqZWN0KCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZVVuaXF1ZVJlcXVlc3RQcm9taXNlKCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRBYnN0cmFjdFJlcXVlc3QuX2V4ZWN1dGluZ1VuaXF1ZVJlcXVlc3RzLnNldCh0aGlzLl9yZXF1ZXN0SWQsIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dGhpcy5fcmVxdWVzdFByb21pc2UgPSB0aGlzLnJlcXVlc3RQcm9taXNlRmFjdG9yeSgpO1xyXG5cdFx0XHR0aGlzLl9yZXF1ZXN0UHJvbWlzZVxyXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuZGVsZXRlKHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRBYnN0cmFjdFJlcXVlc3QuX3N1Y2Nlc3NSZXF1ZXN0c0lkcy5hZGQodGhpcy5fcmVxdWVzdElkKTtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0XHRBYnN0cmFjdFJlcXVlc3QuX2V4ZWN1dGluZ1VuaXF1ZVJlcXVlc3RzLmRlbGV0ZSh0aGlzLl9yZXF1ZXN0SWQpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZXF1ZXN0UHJvbWlzZUZhY3RvcnkoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufSIsImltcG9ydCBMb2FkZXIgPSBQSVhJLmxvYWRlcnMuTG9hZGVyO1xyXG5pbXBvcnQgTWluaVNpZ25hbEJpbmRpbmcgPSBQSVhJLk1pbmlTaWduYWxCaW5kaW5nO1xyXG5pbXBvcnQgTG9hZGVyT3B0aW9ucyA9IFBJWEkubG9hZGVycy5Mb2FkZXJPcHRpb25zO1xyXG5pbXBvcnQgUmVzb3VyY2UgPSBQSVhJLmxvYWRlcnMuUmVzb3VyY2U7XHJcbmltcG9ydCBBYnN0cmFjdFJlcXVlc3QgZnJvbSBcIi4vQWJzdHJhY3RSZXF1ZXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXhpUmVxdWVzdCBleHRlbmRzIEFic3RyYWN0UmVxdWVzdCB7XHJcblx0cHJpdmF0ZSBfcmVzdWx0OmFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF91cmw6c3RyaW5nLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX3JlcXVlc3RJZCA9IFwiUGl4aVJlcXVlc3Q6OlwiICsgdGhpcy5fdXJsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFJlc3VsdCgpOmFueSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHJlcXVlc3RQcm9taXNlRmFjdG9yeSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgbG9hZGVyOkxvYWRlciA9IG5ldyBMb2FkZXIoKTtcclxuXHJcblx0XHRcdGxldCBzdWNjZXNzOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0Y29uc3Qgb25Mb2FkU2lnbmFsOk1pbmlTaWduYWxCaW5kaW5nID0gbG9hZGVyLm9uTG9hZC5hZGQoKCkgPT4ge1xyXG5cdFx0XHRcdHN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGxldCBlcnJvcjpib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdGxldCBlcnJvck1lc3NhZ2U6c3RyaW5nO1xyXG5cdFx0XHRjb25zdCBvbkVycm9yU2lnbmFsOk1pbmlTaWduYWxCaW5kaW5nID0gbG9hZGVyLm9uRXJyb3IuYWRkKChkYXRhOmFueSkgPT4ge1xyXG5cdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRlcnJvck1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bGV0IG9uQ29tcGxldGVTaWduYWw6TWluaVNpZ25hbEJpbmRpbmc7XHJcblx0XHRcdG9uQ29tcGxldGVTaWduYWwgPSBsb2FkZXIub25Db21wbGV0ZS5hZGQoKCkgPT4ge1xyXG5cdFx0XHRcdG9uTG9hZFNpZ25hbC5kZXRhY2goKTtcclxuXHRcdFx0XHRvbkVycm9yU2lnbmFsLmRldGFjaCgpO1xyXG5cdFx0XHRcdG9uQ29tcGxldGVTaWduYWwuZGV0YWNoKCk7XHJcblx0XHRcdFx0aWYgKHN1Y2Nlc3MgJiYgIWVycm9yKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9yZXN1bHQgPSBsb2FkZXIucmVzb3VyY2VzW3RoaXMuX3VybF0/LmRhdGE7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHJlc291cmNlOlwiLCBlcnJvck1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGxvYWRlck9wdGlvbnM6TG9hZGVyT3B0aW9ucyA9IHt9O1xyXG5cdFx0XHRsb2FkZXJPcHRpb25zLmNyb3NzT3JpZ2luID0gZmFsc2U7XHJcblx0XHRcdGxvYWRlck9wdGlvbnMubG9hZFR5cGUgPSBSZXNvdXJjZS5MT0FEX1RZUEUuWEhSO1xyXG5cclxuXHRcdFx0bG9hZGVyLmFkZCh0aGlzLl91cmwsIHRoaXMuX3VybCwgbG9hZGVyT3B0aW9ucyk7XHJcblx0XHRcdGxvYWRlci5sb2FkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbWlzZXNHcm91cCB7XHJcblx0cHVibGljIHN0YXRpYyBwYWNrKGZhY3RvcmllczooKCkgPT4gUHJvbWlzZTx2b2lkPilbXSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuXHRcdFx0bGV0IGNvbXBsZXRlZENvdW50ZXI6bnVtYmVyID0gMDtcclxuXHRcdFx0ZmFjdG9yaWVzLmZvckVhY2goKGZhY3Rvcnk6KCkgPT4gUHJvbWlzZTx2b2lkPikgPT4ge1xyXG5cdFx0XHRcdGZhY3RvcnkoKVxyXG5cdFx0XHRcdFx0LmZpbmFsbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZWRDb3VudGVyKys7XHJcblx0XHRcdFx0XHRcdGlmIChjb21wbGV0ZWRDb3VudGVyID09IGZhY3Rvcmllcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBxdWV1ZShmYWN0b3JpZXM6KCgpID0+IFByb21pc2U8dm9pZD4pW10pOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0bGV0IGNvbXBsZXRlZENvdW50ZXI6bnVtYmVyID0gMDtcclxuXHRcdFx0Y3JlYXRlUHJvbWlzZSgpO1xyXG5cdFx0XHRmdW5jdGlvbiBjcmVhdGVQcm9taXNlKCk6dm9pZCB7XHJcblx0XHRcdFx0ZmFjdG9yaWVzW2NvbXBsZXRlZENvdW50ZXJdKClcclxuXHRcdFx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29tcGxldGVkQ291bnRlcisrO1xyXG5cdFx0XHRcdFx0XHRpZiAoY29tcGxldGVkQ291bnRlciA8IGZhY3Rvcmllcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGVQcm9taXNlKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tIHtcclxuXHRwdWJsaWMgc3RhdGljIGdlbkludGVnZXIobWluOm51bWJlciwgbWF4Om51bWJlcik6bnVtYmVyIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKFJhbmRvbS5nZW5OdW1iZXIobWluLCBtYXggKyAxKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdlbk51bWJlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuU3RyKGxlbmd0aDpudW1iZXIpOnN0cmluZyB7XHJcblx0XHRjb25zdCBjaGFyczpzdHJpbmdbXSA9IFtcclxuXHRcdFx0XCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCIsXHJcblx0XHRcdFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwibVwiLFxyXG5cdFx0XHRcIm5cIiwgXCJvXCIsIFwicFwiLCBcInFcIiwgXCJyXCIsIFwic1wiLCBcInRcIiwgXCJ1XCIsIFwidlwiLCBcIndcIiwgXCJ4XCIsIFwieVwiLCBcInpcIixcclxuXHRcdFx0XCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIiwgXCJNXCIsXHJcblx0XHRcdFwiTlwiLCBcIk9cIiwgXCJQXCIsIFwiUVwiLCBcIlJcIiwgXCJTXCIsIFwiVFwiLCBcIlVcIiwgXCJWXCIsIFwiV1wiLCBcIlhcIiwgXCJZXCIsIFwiWlwiLFxyXG5cdFx0XTtcclxuXHRcdGxldCByZXN1bHQ6c3RyaW5nID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlc3VsdCArPSBSYW5kb20uY2hvb3NlLmFwcGx5KFJhbmRvbSwgY2hhcnMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuQm9vbGVhbigpOmJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIFJhbmRvbS5jaG9vc2UodHJ1ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5Db2xvcigpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gUmFuZG9tLmdlbkludGVnZXIoMHgwMDAwMDAsIDB4ZmZmZmZmKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY2hvb3NlKC4uLmFyZ3M6YW55W10pOmFueSB7XHJcblx0XHRyZXR1cm4gYXJnc1tSYW5kb20uZ2VuSW50ZWdlcigwLCBhcmdzLmxlbmd0aCAtIDEpXTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93RXZlbnRzIHtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFU0laRTpzdHJpbmcgPSBcInJlc2l6ZVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS0VZX0RPV046c3RyaW5nID0gXCJrZXlkb3duXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBLRVlfVVA6c3RyaW5nID0gXCJrZXl1cFwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9DVVNfT1VUOnN0cmluZyA9IFwiYmx1clwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGFkZCh0eXBlOnN0cmluZywgY2FsbGJhY2s6KC4uLnBhcmFtczphbnlbXSkgPT4gdm9pZCk6KC4uLnBhcmFtczphbnlbXSkgPT4gdm9pZCB7XHJcblx0XHRjb25zdCB3OmFueSA9IHdpbmRvdztcclxuXHRcdGlmICh3LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdFx0dy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cdFx0fSBlbHNlIGlmICh3LmF0dGFjaEV2ZW50KSB7XHJcblx0XHRcdHcuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d1tcIm9uXCIgKyB0eXBlXSA9IGNhbGxiYWNrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNhbGxiYWNrO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyByZW1vdmUodHlwZTpzdHJpbmcsIGNhbGxiYWNrOiguLi5wYXJhbXM6YW55W10pID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IHc6YW55ID0gd2luZG93O1xyXG5cdFx0aWYgKHcucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHR3LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuXHRcdH0gZWxzZSBpZiAody5kZXRhY2hFdmVudCkge1xyXG5cdFx0XHR3LmRldGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGNhbGxiYWNrKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdbXCJvblwiICsgdHlwZV0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=