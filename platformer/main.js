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
      _get(_getPrototypeOf(MainContainer.prototype), "init", this).call(this);

      this.loading();
    }
  }, {
    key: "loading",
    value: function loading() {
      var _this2 = this;

      _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__["default"].pack([function () {
        return _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__["default"].queue([function () {
          return _this2.loadLevelsMetadata();
        }, function () {
          return _this2.loadAllImages();
        }]);
      }, function () {
        return _this2.loadLevel("level1");
      }, function () {
        return _this2.loadLevel("level2");
      }, function () {
        return _this2.loadLevel("level3");
      }, function () {
        return _this2.loadLevel("level4");
      }, function () {
        return _this2.loadLevel("level5");
      }, function () {
        return _this2.loadLevel("level6");
      }, function () {
        return _this2.loadLevel("level7");
      }, function () {
        return _this2.loadLevel("level8");
      }, function () {
        return _this2.loadLevel("level9");
      }, function () {
        return _this2.loadLevel("level10");
      }, function () {
        return _this2.loadLevel("level11");
      }, function () {
        return _this2.loadLevel("level12");
      }, function () {
        return _this2.loadLevel("bonus");
      }])["finally"](function () {
        _this2.completeLoadingHandler();
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
    key: "loadAllImages",
    value: function loadAllImages() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var factories;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                factories = [];
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].getLevelsMetadata().imagesTypes.forEach(function (imageTypeData) {
                  if (imageTypeData.image) {
                    factories.push(function () {
                      return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](imageTypeData.image).createPromise();
                    });
                  }
                });
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].getLevelsMetadata().collectiblesTypes.forEach(function (collectibleTypeData) {
                  if (collectibleTypeData.image) {
                    factories.push(function () {
                      return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](collectibleTypeData.image).createPromise();
                    });
                  }
                });
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].getLevelsMetadata().blockTypes.forEach(function (typeTypeData) {
                  if (typeTypeData.image) {
                    factories.push(function () {
                      return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](typeTypeData.image).createPromise();
                    });
                  }
                });
                return _context2.abrupt("return", _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__["default"].pack(factories));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "loadLevel",
    value: function loadLevel(fileName) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var request, levelData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                request = new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"]("levels/" + fileName + ".json");
                _context3.next = 3;
                return request.createPromise();

              case 3:
                levelData = request.getResult();
                _model_LevelsManager__WEBPACK_IMPORTED_MODULE_6__["default"].addLevel(levelData);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }, {
    key: "completeLoadingHandler",
    value: function completeLoadingHandler() {
      var _this3 = this;

      this._level = new _level_Level__WEBPACK_IMPORTED_MODULE_2__["default"](this._player, function (levelId) {
        return _this3.setLevel(levelId);
      }, this._changeCameraCallback);

      this._level.showViewBackground(0xffffff, 1);

      this.addChild(this._level);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWUvLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9NYWluQ29udGFpbmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvVmlldy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2NvbnN0cy9LZXlib2FyZENvZGVzLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvY29uc3RzL1BvaW50ZXJFdmVudHMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9CbG9jay50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0NvbGxlY3RpYmxlLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvQ29sbGlzaW9uT2JqZWN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvQ29sbGlzaW9uT2JqZWN0c1NvcnRlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0hpdFRlc3QudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9MZXZlbC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL1BsYXllci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL1BsYXllck1vdmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbW9kZWwvTGV2ZWxzTWFuYWdlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL0Fic3RyYWN0UmVxdWVzdC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL1BpeGlSZXF1ZXN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvcHJvbWlzZXMvUHJvbWlzZXNHcm91cC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3V0aWxzL1JhbmRvbS50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3V0aWxzL1dpbmRv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QUFDQSx5QkFBbUIsTUFBbkIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsImltcG9ydCBBcHBsaWNhdGlvbiA9IFBJWEkuQXBwbGljYXRpb247XHJcbmltcG9ydCBFdmVudEVtaXR0ZXIgPSBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbHMge1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0RFVkVMT1BFUl9NT0RFX0VWRU5UOnN5bWJvbCA9IFN5bWJvbCgpO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHBpeGlBcHA6QXBwbGljYXRpb247XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2RldmVsb3Blck1vZGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgc3RhdGljIF9lbWl0dGVyOkV2ZW50RW1pdHRlcjtcclxuXHJcblx0cHVibGljIHN0YXRpYyBzZXREZXZlbG9wZXJNb2RlKHZhbHVlOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0R2xvYmFscy5fZGV2ZWxvcGVyTW9kZSA9IHZhbHVlO1xyXG5cdFx0R2xvYmFscy5nZXRFbWl0dGVyKCkuZW1pdChHbG9iYWxzLkNIQU5HRV9ERVZFTE9QRVJfTU9ERV9FVkVOVCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldERldmVsb3Blck1vZGUoKTpib29sZWFuIHtcclxuXHRcdHJldHVybiBHbG9iYWxzLl9kZXZlbG9wZXJNb2RlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbWl0dGVyKCk6RXZlbnRFbWl0dGVyIHtcclxuXHRcdGlmICghR2xvYmFscy5fZW1pdHRlcikge1xyXG5cdFx0XHRHbG9iYWxzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEdsb2JhbHMuX2VtaXR0ZXI7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBSZWN0YW5nbGUgPSBQSVhJLlJlY3RhbmdsZTtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi9NYWluQ29udGFpbmVyXCI7XHJcbmltcG9ydCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XHJcbmltcG9ydCBXaW5kb3dFdmVudHMgZnJvbSBcIi4vdXRpbHMvV2luZG93RXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiB7XHJcblx0cHJpdmF0ZSBfd2luZG93U2l6ZTpSZWN0YW5nbGU7XHJcblx0cHJpdmF0ZSBfbWFpbkNvbnRhaW5lcjpNYWluQ29udGFpbmVyO1xyXG5cdHByaXZhdGUgX291dE9mQm91bmRzQ292ZXI6R3JhcGhpY3M7XHJcblx0cHJpdmF0ZSBfZnVsbExldmVsOmJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbnZhc0lkOnN0cmluZykge1xyXG5cdFx0dGhpcy5pbml0aWFsaXplKGNhbnZhc0lkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdGlhbGl6ZShjYW52YXNJZDpzdHJpbmcpOnZvaWQge1xyXG5cdFx0dGhpcy5jcmVhdGVQaXhpQXBwKGNhbnZhc0lkKTtcclxuXHRcdHRoaXMuX3dpbmRvd1NpemUgPSBuZXcgUmVjdGFuZ2xlKCk7XHJcblx0XHR0aGlzLmluaXRNYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmluaXRPdXRPZkJvdW5kc0NvdmVyKCk7XHJcblx0XHRXaW5kb3dFdmVudHMuYWRkKFdpbmRvd0V2ZW50cy5SRVNJWkUsICgpID0+IHsgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IH0pO1xyXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xyXG5cdFx0dGhpcy5wcmludFdlbGNvbWVNZXNzYWdlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRNYWluQ29udGFpbmVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyID0gbmV3IE1haW5Db250YWluZXIoKTtcclxuXHRcdHRoaXMuX21haW5Db250YWluZXIuc2hvd1ZpZXdCYWNrZ3JvdW5kKDB4MmIyZDMwLCAxKTtcclxuXHRcdHRoaXMuX21haW5Db250YWluZXIuc2V0Q2hhbmdlQ2FtZXJhQ2FsbGJhY2soKGxldmVsV2lkdGg6bnVtYmVyLCBsZXZlbEhlaWdodDpudW1iZXIpID0+IHtcclxuXHRcdFx0dGhpcy5jaGFuZ2VDYW1lcmFDYWxsYmFjayhsZXZlbFdpZHRoLCBsZXZlbEhlaWdodCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2V0RGVmYXVsdE1haW5Db250YWluZXJTaXplKCk7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5fbWFpbkNvbnRhaW5lcik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoYW5nZUNhbWVyYUNhbGxiYWNrKGxldmVsV2lkdGg6bnVtYmVyLCBsZXZlbEhlaWdodDpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5fZnVsbExldmVsID0gIXRoaXMuX2Z1bGxMZXZlbDtcclxuXHRcdGlmICh0aGlzLl9mdWxsTGV2ZWwpIHtcclxuXHRcdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zZXRTaXplKGxldmVsV2lkdGgsIGxldmVsSGVpZ2h0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2V0RGVmYXVsdE1haW5Db250YWluZXJTaXplKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFsaWduTWFpbkNvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5hbGlnbk91dE9mQm91bmRzQ292ZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0RGVmYXVsdE1haW5Db250YWluZXJTaXplKCk6dm9pZCB7XHJcblx0XHRjb25zdCBtYWluQ29udGFpbmVyRGVmYXVsdFdpZHRoID0gMTI3MDtcclxuXHRcdGNvbnN0IG1haW5Db250YWluZXJEZWZhdWx0SGVpZ2h0OiBudW1iZXIgPSA3MjA7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnNldFNpemUobWFpbkNvbnRhaW5lckRlZmF1bHRXaWR0aCwgbWFpbkNvbnRhaW5lckRlZmF1bHRIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0T3V0T2ZCb3VuZHNDb3ZlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3ZlciA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX291dE9mQm91bmRzQ292ZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVQaXhpQXBwKGNhbnZhc0lkOnN0cmluZyk6dm9pZCB7XHJcblx0XHRjb25zdCBhcHBDb25maWc6UElYSS5BcHBsaWNhdGlvbk9wdGlvbnMgPSB7XHJcblx0XHRcdGFudGlhbGlhczp0cnVlLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6MHhmZmZmZmYsXHJcblx0XHRcdHZpZXc6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG5cdFx0XHQvLyByb3VuZGluZyByZXNvbHV0aW9uIGZvciBlc2NhcGUgdHJvdWJsZXMgd2l0aCBpbnZpc2libGUgZm9udHMgb24gc29tZSBBbmRyb2lkIGRldmljZXNcclxuXHRcdFx0cmVzb2x1dGlvbjooKGRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyKSA/IDEgOiAyLFxyXG5cdFx0fTtcclxuXHRcdEdsb2JhbHMucGl4aUFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKGFwcENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByaW50V2VsY29tZU1lc3NhZ2UoKTp2b2lkIHtcclxuXHRcdGxldCB3ZWxjb21lU3RyaW5nOnN0cmluZyA9IHByb2Nlc3MuZW52LlBST0pFQ1RfTkFNRSArIFwiIFwiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9WRVJTSU9OO1xyXG5cdFx0d2VsY29tZVN0cmluZyArPSBcIlxcbkRldmVsb3BlZCBieSDCq1wiICsgcHJvY2Vzcy5lbnYuUFJPSkVDVF9BVVRIT1IgKyBcIsK7XCI7XHJcblx0XHRjb25zb2xlLmxvZyh3ZWxjb21lU3RyaW5nKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgd2luZG93UmVzaXplSGFuZGxlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoU2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoV2luZG93U2l6ZSgpO1xyXG5cdFx0dGhpcy5hbGlnblBpeGlBcHAoKTtcclxuXHRcdHRoaXMuYWxpZ25NYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLmFsaWduT3V0T2ZCb3VuZHNDb3ZlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoV2luZG93U2l6ZSgpOnZvaWQge1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFsaWduUGl4aUFwcCgpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUud2lkdGggPSB0aGlzLl93aW5kb3dTaXplLndpZHRoICsgXCJweFwiO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuaGVpZ2h0ID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAucmVuZGVyZXIucmVzaXplKHRoaXMuX3dpbmRvd1NpemUud2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWxpZ25NYWluQ29udGFpbmVyKCk6dm9pZCB7XHJcblx0XHRjb25zdCBzY2FsZUJ5V2lkdGg6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS53aWR0aCAvIHRoaXMuX21haW5Db250YWluZXIudztcclxuXHRcdGNvbnN0IHNjYWxlQnlIZWlnaHQ6bnVtYmVyID0gdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLyB0aGlzLl9tYWluQ29udGFpbmVyLmg7XHJcblx0XHRjb25zdCBzY2FsZTpudW1iZXIgPSBNYXRoLm1pbihzY2FsZUJ5V2lkdGgsIHNjYWxlQnlIZWlnaHQpO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS54ID0gdGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS55ID0gc2NhbGU7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnggPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gdGhpcy5fbWFpbkNvbnRhaW5lci53ICogc2NhbGUpIC8gMik7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnkgPSBNYXRoLnJvdW5kKCh0aGlzLl93aW5kb3dTaXplLmhlaWdodCAtIHRoaXMuX21haW5Db250YWluZXIuaCAqIHNjYWxlKSAvIDIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhbGlnbk91dE9mQm91bmRzQ292ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuYmVnaW5GaWxsKDB4MDAwMDAwKTtcclxuXHRcdGlmICh0aGlzLl9tYWluQ29udGFpbmVyLmggKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnkgPCB0aGlzLl93aW5kb3dTaXplLmhlaWdodCkge1xyXG5cdFx0XHRjb25zdCBjb3ZlckhlaWdodDpudW1iZXIgPSB0aGlzLl9tYWluQ29udGFpbmVyLnk7XHJcblx0XHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuZHJhd1JlY3QoMCwgMCwgdGhpcy5fd2luZG93U2l6ZS53aWR0aCwgY292ZXJIZWlnaHQpO1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLSBjb3ZlckhlaWdodCxcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoLCBjb3ZlckhlaWdodCxcclxuXHRcdFx0KVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLl9tYWluQ29udGFpbmVyLncgKiB0aGlzLl9tYWluQ29udGFpbmVyLnNjYWxlLnggPCB0aGlzLl93aW5kb3dTaXplLndpZHRoKSB7XHJcblx0XHRcdGNvbnN0IGNvdmVyV2lkdGg6bnVtYmVyID0gdGhpcy5fbWFpbkNvbnRhaW5lci54O1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KDAsIDAsIGNvdmVyV2lkdGgsIHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0KTtcclxuXHRcdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3Zlci5kcmF3UmVjdChcclxuXHRcdFx0XHR0aGlzLl93aW5kb3dTaXplLndpZHRoIC0gY292ZXJXaWR0aCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGNvdmVyV2lkdGgsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS5oZWlnaHQsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtWaWV3fSBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbGV2ZWwvUGxheWVyXCI7XHJcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbC9MZXZlbFwiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCBQaXhpUmVxdWVzdCBmcm9tIFwiLi9wcm9taXNlcy9QaXhpUmVxdWVzdFwiO1xyXG5pbXBvcnQgUHJvbWlzZXNHcm91cCBmcm9tIFwiLi9wcm9taXNlcy9Qcm9taXNlc0dyb3VwXCI7XHJcbmltcG9ydCBMZXZlbHNNYW5hZ2VyIGZyb20gXCIuL21vZGVsL0xldmVsc01hbmFnZXJcIjtcclxuaW1wb3J0IHtJQmxvY2tUeXBlLCBJQ29sbGVjdGlibGVUeXBlLCBJSW1hZ2VUeXBlLCBJTGV2ZWx9IGZyb20gXCIuL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtQT0lOVEVSX0RPV04sIFBPSU5URVJfTU9WRSwgUE9JTlRFUl9VUCwgUE9JTlRFUl9VUF9PVVRTSURFfSBmcm9tIFwiLi9jb25zdHMvUG9pbnRlckV2ZW50c1wiO1xyXG5pbXBvcnQgSW50ZXJhY3Rpb25FdmVudCA9IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudDtcclxuaW1wb3J0IFBvaW50ID0gUElYSS5Qb2ludDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3IHtcclxuXHRwcml2YXRlIF9sZXZlbDpMZXZlbDtcclxuXHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5cdHByaXZhdGUgX3BvaW50ZXJEb3duUG9pbnQ6UG9pbnQ7XHJcblx0cHJpdmF0ZSBfcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uOlBvaW50O1xyXG5cdHByaXZhdGUgX2NoYW5nZUNhbWVyYUNhbGxiYWNrOihsZXZlbFdpZHRoOm51bWJlciwgbGV2ZWxIZWlnaHQ6bnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0Q2hhbmdlQ2FtZXJhQ2FsbGJhY2soY2hhbmdlQ2FtZXJhQ2FsbGJhY2s6KGxldmVsV2lkdGg6bnVtYmVyLCBsZXZlbEhlaWdodDpudW1iZXIpID0+IHZvaWQpIHtcclxuXHRcdHRoaXMuX2NoYW5nZUNhbWVyYUNhbGxiYWNrID0gY2hhbmdlQ2FtZXJhQ2FsbGJhY2s7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaW5pdCgpOnZvaWQge1xyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cdFx0dGhpcy5sb2FkaW5nKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRpbmcoKTp2b2lkIHtcclxuXHRcdFByb21pc2VzR3JvdXAucGFjayhbXHJcblx0XHRcdCgpID0+IFByb21pc2VzR3JvdXAucXVldWUoW1xyXG5cdFx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsc01ldGFkYXRhKCksXHJcblx0XHRcdFx0KCkgPT4gdGhpcy5sb2FkQWxsSW1hZ2VzKCksXHJcblx0XHRcdF0pLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsMVwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDJcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWwzXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsNFwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDVcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw2XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsN1wiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDhcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw5XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsMTBcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWwxMVwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDEyXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImJvbnVzXCIpLFxyXG5cdFx0XSlcclxuXHRcdFx0LmZpbmFsbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29tcGxldGVMb2FkaW5nSGFuZGxlcigpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZExldmVsc01ldGFkYXRhKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0Y29uc3QgcmVxdWVzdCA9IG5ldyBQaXhpUmVxdWVzdChcImxldmVscy9tZXRhZGF0YS5qc29uXCIpO1xyXG5cdFx0YXdhaXQgcmVxdWVzdC5jcmVhdGVQcm9taXNlKCk7XHJcblx0XHRjb25zdCBsZXZlbHNNZXRhZGF0YSA9IHJlcXVlc3QuZ2V0UmVzdWx0KCk7XHJcblx0XHRMZXZlbHNNYW5hZ2VyLmFkZExldmVsc01ldGFkYXRhKGxldmVsc01ldGFkYXRhKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBsb2FkQWxsSW1hZ2VzKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0Y29uc3QgZmFjdG9yaWVzOigoKSA9PiBQcm9taXNlPGFueT4pW10gPSBbXTtcclxuXHRcdExldmVsc01hbmFnZXIuZ2V0TGV2ZWxzTWV0YWRhdGEoKS5pbWFnZXNUeXBlcy5mb3JFYWNoKChpbWFnZVR5cGVEYXRhOklJbWFnZVR5cGUpID0+IHtcclxuXHRcdFx0aWYgKGltYWdlVHlwZURhdGEuaW1hZ2UpIHtcclxuXHRcdFx0XHRmYWN0b3JpZXMucHVzaCgoKSA9PiBuZXcgUGl4aVJlcXVlc3QoaW1hZ2VUeXBlRGF0YS5pbWFnZSkuY3JlYXRlUHJvbWlzZSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRMZXZlbHNNYW5hZ2VyLmdldExldmVsc01ldGFkYXRhKCkuY29sbGVjdGlibGVzVHlwZXMuZm9yRWFjaCgoY29sbGVjdGlibGVUeXBlRGF0YTpJQ29sbGVjdGlibGVUeXBlKSA9PiB7XHJcblx0XHRcdGlmIChjb2xsZWN0aWJsZVR5cGVEYXRhLmltYWdlKSB7XHJcblx0XHRcdFx0ZmFjdG9yaWVzLnB1c2goKCkgPT4gbmV3IFBpeGlSZXF1ZXN0KGNvbGxlY3RpYmxlVHlwZURhdGEuaW1hZ2UpLmNyZWF0ZVByb21pc2UoKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5nZXRMZXZlbHNNZXRhZGF0YSgpLmJsb2NrVHlwZXMuZm9yRWFjaCgodHlwZVR5cGVEYXRhOklCbG9ja1R5cGUpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVUeXBlRGF0YS5pbWFnZSkge1xyXG5cdFx0XHRcdGZhY3Rvcmllcy5wdXNoKCgpID0+IG5ldyBQaXhpUmVxdWVzdCh0eXBlVHlwZURhdGEuaW1hZ2UpLmNyZWF0ZVByb21pc2UoKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIFByb21pc2VzR3JvdXAucGFjayhmYWN0b3JpZXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBsb2FkTGV2ZWwoZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0Y29uc3QgcmVxdWVzdCA9IG5ldyBQaXhpUmVxdWVzdChcImxldmVscy9cIiArIGZpbGVOYW1lICsgXCIuanNvblwiKTtcclxuXHRcdGF3YWl0IHJlcXVlc3QuY3JlYXRlUHJvbWlzZSgpO1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhID0gcmVxdWVzdC5nZXRSZXN1bHQoKTtcclxuXHRcdExldmVsc01hbmFnZXIuYWRkTGV2ZWwobGV2ZWxEYXRhKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY29tcGxldGVMb2FkaW5nSGFuZGxlcigpOnZvaWQge1xyXG5cdFx0dGhpcy5fbGV2ZWwgPSBuZXcgTGV2ZWwoXHJcblx0XHRcdHRoaXMuX3BsYXllcixcclxuXHRcdFx0KGxldmVsSWQ6bnVtYmVyKTpJTGV2ZWwgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNldExldmVsKGxldmVsSWQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzLl9jaGFuZ2VDYW1lcmFDYWxsYmFjayxcclxuXHRcdCk7XHJcblx0XHR0aGlzLl9sZXZlbC5zaG93Vmlld0JhY2tncm91bmQoMHhmZmZmZmYsIDEpO1xyXG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9sZXZlbCk7XHJcblxyXG5cdFx0dGhpcy5fbGV2ZWwuaW5pdFR5cGVzKCk7XHJcblx0XHR0aGlzLnNldFN0YXJ0TGV2ZWxBbmRQbGF5ZXJQb3NpdGlvbigpO1xyXG5cdFx0R2xvYmFscy5nZXRFbWl0dGVyKCkuYWRkTGlzdGVuZXIoR2xvYmFscy5DSEFOR0VfREVWRUxPUEVSX01PREVfRVZFTlQsIHRoaXMuY2hhbmdlRGV2ZWxvcGVyTW9kZUV2ZW50SGFuZGxlciwgdGhpcyk7XHJcblx0XHR0aGlzLl9sZXZlbC5sYXVuY2hUaWNrZXIoKTtcclxuXHRcdHRoaXMubGF1bmNoVGlja2VyKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldFN0YXJ0TGV2ZWxBbmRQbGF5ZXJQb3NpdGlvbigpOnZvaWQge1xyXG5cdFx0dGhpcy5zZXRMZXZlbCgxKTtcclxuXHRcdHRoaXMuX3BsYXllci54ID0gOTc7XHJcblx0XHR0aGlzLl9wbGF5ZXIueSA9IHRoaXMuX2xldmVsLmggLSAyNzA7XHJcblxyXG5cdFx0Ly8gdGhpcy5zZXRMZXZlbCgyKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci54ID0gNzYyIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnkgPSAxMjcwIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uVG9wKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zZXRMZXZlbCg3KTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci54ID0gNjI3IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnkgPSAxNjk3IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uVG9wKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zZXRMZXZlbCg3KTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci54ID0gMTcyMSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci55ID0gMzg3IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uVG9wKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zZXRMZXZlbCgxMCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueCA9IDk4OCAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci55ID0gNDA1IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uVG9wKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zZXRMZXZlbCgxMSk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueCA9IDg0NiAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkxlZnQoKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci55ID0gMzk3IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uVG9wKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zZXRMZXZlbCgxMDAwKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci54ID0gNjM1IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnkgPSA1NjQgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRMZXZlbChsZXZlbElkOm51bWJlcik6SUxldmVsIHtcclxuXHRcdGNvbnN0IGxldmVsRGF0YTpJTGV2ZWwgPSBMZXZlbHNNYW5hZ2VyLmdldExldmVsKGxldmVsSWQpO1xyXG5cdFx0dGhpcy5fbGV2ZWwuc2V0TGV2ZWwobGV2ZWxEYXRhKTtcclxuXHRcdHRoaXMuX2xldmVsLnNldFNpemUobGV2ZWxEYXRhLnN0YWdlLndpZHRoLCBsZXZlbERhdGEuc3RhZ2UuaGVpZ2h0KTtcclxuXHRcdHJldHVybiBsZXZlbERhdGE7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoYW5nZURldmVsb3Blck1vZGVFdmVudEhhbmRsZXIoKTp2b2lkIHtcclxuXHRcdGxldCBiYWNrZ3JvdW5kID0gdGhpcy5nZXRWaWV3QmFja2dyb3VuZElmRXhpc3RzKCk7XHJcblx0XHRpZiAoR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpXHJcblx0XHR7XHJcblx0XHRcdGJhY2tncm91bmQuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLmFkZExpc3RlbmVyKFBPSU5URVJfRE9XTiwgdGhpcy5wb2ludGVyRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLmFkZExpc3RlbmVyKFBPSU5URVJfTU9WRSwgdGhpcy5wb2ludGVyTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLmFkZExpc3RlbmVyKFBPSU5URVJfVVAsIHRoaXMucG9pbnRlclVwSGFuZGxlciwgdGhpcyk7XHJcblx0XHRcdGJhY2tncm91bmQuYWRkTGlzdGVuZXIoUE9JTlRFUl9VUF9PVVRTSURFLCB0aGlzLnBvaW50ZXJVcE91dHNpZGUsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRiYWNrZ3JvdW5kLmludGVyYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdGJhY2tncm91bmQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcblx0XHRcdHRoaXMuc3RvcERyYWcoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcG9pbnRlckRvd25IYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IGV2ZW50LmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLCBldmVudC5kYXRhLmdsb2JhbCk7XHJcblx0XHR0aGlzLl9wb2ludGVyRG93blBvaW50ID0gbmV3IFBvaW50KGxvY2FsUG9pbnQueCwgbG9jYWxQb2ludC55KTtcclxuXHRcdHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbiA9IG5ldyBQb2ludCh0aGlzLl9sZXZlbC54LCB0aGlzLl9sZXZlbC55KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcG9pbnRlck1vdmVIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3BvaW50ZXJEb3duUG9pbnQgJiYgdGhpcy5fcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uKSB7XHJcblx0XHRcdGNvbnN0IGxvY2FsUG9pbnQgPSBldmVudC5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcywgZXZlbnQuZGF0YS5nbG9iYWwpO1xyXG5cdFx0XHR0aGlzLl9sZXZlbC54ID0gdGhpcy5fcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uLnggKyAobG9jYWxQb2ludC54IC0gdGhpcy5fcG9pbnRlckRvd25Qb2ludC54KTtcclxuXHRcdFx0dGhpcy5fbGV2ZWwueSA9IHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbi55ICsgKGxvY2FsUG9pbnQueSAtIHRoaXMuX3BvaW50ZXJEb3duUG9pbnQueSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBvaW50ZXJVcEhhbmRsZXIoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHR0aGlzLnN0b3BEcmFnKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBvaW50ZXJVcE91dHNpZGUoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHR0aGlzLnN0b3BEcmFnKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0b3BEcmFnKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9wb2ludGVyRG93blBvaW50ID0gbnVsbDtcclxuXHRcdHRoaXMuX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbiA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxhdW5jaFRpY2tlcigpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnRpY2tlci5hZGQoKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5fbGV2ZWwgJiYgIUdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKSB7XHJcblx0XHRcdFx0dGhpcy5fbGV2ZWwueCA9IHRoaXMuY2FsY3VsYXRlTGV2ZWxQb3NpdGlvbih0aGlzLncsIHRoaXMuX2xldmVsLncsIHRoaXMuX3BsYXllci53aWR0aCwgdGhpcy5fcGxheWVyLngpO1xyXG5cdFx0XHRcdHRoaXMuX2xldmVsLnkgPSB0aGlzLmNhbGN1bGF0ZUxldmVsUG9zaXRpb24odGhpcy5oLCB0aGlzLl9sZXZlbC5oLCB0aGlzLl9wbGF5ZXIuaGVpZ2h0LCB0aGlzLl9wbGF5ZXIueSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxjdWxhdGVMZXZlbFBvc2l0aW9uKHRoaXNTaXplOm51bWJlciwgbGV2ZWxTaXplOm51bWJlciwgcGxheWVyU2l6ZTpudW1iZXIsIHBsYXllclBvc2l0aW9uOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGNvbnN0IG1pbkxldmVsUG9zaXRpb246bnVtYmVyID0gdGhpc1NpemUgLSBsZXZlbFNpemU7XHJcblx0XHRjb25zdCBtYXhMZXZlbFBvc2l0aW9uOm51bWJlciA9IDA7XHJcblx0XHRjb25zdCBjYWxjdWxhdGVkTGV2ZWxQb3NpdGlvbjpudW1iZXIgPSAodGhpc1NpemUgLSBwbGF5ZXJTaXplKSAvIDIgLSBwbGF5ZXJQb3NpdGlvbjtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWluKG1heExldmVsUG9zaXRpb24sIE1hdGgubWF4KG1pbkxldmVsUG9zaXRpb24sIGNhbGN1bGF0ZWRMZXZlbFBvc2l0aW9uKSkpO1xyXG5cdH1cclxufSIsImltcG9ydCBDb250YWluZXIgPSBQSVhJLkNvbnRhaW5lcjtcclxuaW1wb3J0IEdyYXBoaWNzID0gUElYSS5HcmFwaGljcztcclxuaW1wb3J0IFJhbmRvbSBmcm9tIFwiLi91dGlscy9SYW5kb21cIjtcclxuXHJcbmNsYXNzIFZpZXcgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFJlc2l6YWJsZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHRwdWJsaWMgdzpudW1iZXI7XHJcblx0cHVibGljIGg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2luaXRlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRXKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHRpZiAodGhpcy53ICE9PSB2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLncgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5hcHBseVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRIKHZhbHVlOm51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMuaCAhPT0gdmFsdWUpIHtcclxuXHRcdFx0dGhpcy5oID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0U2l6ZSh3Om51bWJlciwgaDpudW1iZXIpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMudyAhPT0gdyB8fCB0aGlzLmggIT09IGgpIHtcclxuXHRcdFx0dGhpcy53ID0gdztcclxuXHRcdFx0dGhpcy5oID0gaDtcclxuXHRcdFx0dGhpcy5hcHBseVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhcHBseVNpemUoKTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5faW5pdGVkKSB7XHJcblx0XHRcdHRoaXMuX2luaXRlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluaXQoKTp2b2lkIHtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFZpZXdXaXRoQmFja2dyb3VuZCBleHRlbmRzIFJlc2l6YWJsZVZpZXcge1xyXG5cdHByaXZhdGUgX3ZpZXdCYWNrZ3JvdW5kOkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgX3ZpZXdCYWNrZ3JvdW5kQ29sb3I6bnVtYmVyO1xyXG5cdHByaXZhdGUgX3ZpZXdCYWNrZ3JvdW5kQWxwaGE6bnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd1ZpZXdCYWNrZ3JvdW5kKGNvbG9yPzpudW1iZXIsIGFscGhhOm51bWJlciA9IC41KTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5fdmlld0JhY2tncm91bmQpIHtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmQgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZEF0KHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLCAwKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmRDb2xvciA9ICFOdW1iZXIuaXNOYU4oY29sb3IpID8gY29sb3IgOiBSYW5kb20uZ2VuQ29sb3IoKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmRBbHBoYSA9IGFscGhhO1xyXG5cdFx0XHRpZiAodGhpcy53ICYmIHRoaXMuaCkge1xyXG5cdFx0XHRcdHRoaXMuYXBwbHlTaXplKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhcHBseVNpemUoKTp2b2lkIHtcclxuXHRcdHN1cGVyLmFwcGx5U2l6ZSgpO1xyXG5cdFx0aWYgKHRoaXMuX3ZpZXdCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLmNsZWFyKCk7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLmJlZ2luRmlsbCh0aGlzLl92aWV3QmFja2dyb3VuZENvbG9yLCB0aGlzLl92aWV3QmFja2dyb3VuZEFscGhhKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmQuZHJhd1JlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZC5lbmRGaWxsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Vmlld0JhY2tncm91bmRJZkV4aXN0cygpOkdyYXBoaWNzIHtcclxuXHRcdHJldHVybiB0aGlzLl92aWV3QmFja2dyb3VuZDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFZpZXdXaXRoUmVzaXplVGVzdCBleHRlbmRzIFZpZXdXaXRoQmFja2dyb3VuZCB7XHJcblx0cHVibGljIHJlc2l6ZVRlc3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX3NpemVXYXNDaGFuZ2VkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFwcGx5U2l6ZSgpOnZvaWQge1xyXG5cdFx0c3VwZXIuYXBwbHlTaXplKCk7XHJcblx0XHRpZiAodGhpcy5yZXNpemVUZXN0KSB7XHJcblx0XHRcdGlmICghdGhpcy5fc2l6ZVdhc0NoYW5nZWQpIHtcclxuXHRcdFx0XHR0aGlzLl9zaXplV2FzQ2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fc2l6ZVdhc0NoYW5nZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCAwKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyAqIFlvdSBzaG91bGQgdG8gdXNlIHNldFNpemUgaW5zdGVhZCBzZXRXIGFuZCBzZXRIIGlmIHlvdSB3YW50IHRvIGNoYW5nZSBib3RoIHBhcmFtZXRlcnNcclxuXHRcdFx0XHQvLyAqIFlvdSBzaG91bGRuJ3QgY2FsbCBhcHBseVNpemUgbWV0aG9kIG1hbnVhbGx5XHJcblx0XHRcdFx0Ly8gKiBZb3Ugc2hvdWxkbid0IGNhbGwgc2V0U2l6ZSwgc2V0VyBvciBzZXRIIHR3aWNlXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiW1wiICsgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCJdIHJlc2l6ZSB0ZXN0IHdhcyBmYWlsZWRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7Vmlld1dpdGhSZXNpemVUZXN0IGFzIFZpZXd9OyIsImV4cG9ydCBjb25zdCBLRVlfVVAgPSBcIkFycm93VXBcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9MRUZUID0gXCJBcnJvd0xlZnRcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9SSUdIVCA9IFwiQXJyb3dSaWdodFwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0JBQ0tRVU9URSA9IFwiQmFja3F1b3RlXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfSiA9IFwiS2V5SlwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0RFTEVURSA9IFwiRGVsZXRlXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfQ09NTUEgPSBcIkNvbW1hXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfUEVSSU9EID0gXCJQZXJpb2RcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9OID0gXCJLZXlOXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfQyA9IFwiS2V5Q1wiOyIsImV4cG9ydCBjb25zdCBQT0lOVEVSX0RPV04gPSBcInBvaW50ZXJkb3duXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX1VQID0gXCJwb2ludGVydXBcIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfTU9WRSA9IFwicG9pbnRlcm1vdmVcIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfVVBfT1VUU0lERSA9IFwicG9pbnRlcnVwb3V0c2lkZVwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9PVkVSID0gXCJwb2ludGVyb3ZlclwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9PVVQgPSBcInBvaW50ZXJvdXRcIjsiLCJpbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5pbXBvcnQge0lCbG9jaywgSUNvbGxpc2lvbiwgSUJsb2NrVHlwZX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xyXG5pbXBvcnQgUG9pbnQgPSBQSVhJLlBvaW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBDb2xsaXNpb25PYmplY3Qge1xyXG5cdHB1YmxpYyBsb2NhbERyYWdQb2ludDpQb2ludDtcclxuXHRwcml2YXRlIF9zcHJpdGU6U3ByaXRlO1xyXG5cdHByaXZhdGUgX2hpdDpib29sZWFuID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9ibG9ja0RhdGE6SUJsb2NrLFxyXG5cdFx0cHJpdmF0ZSBfYmxvY2tUeXBlRGF0YTpJQmxvY2tUeXBlLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmluaXRTcHJpdGUoKTtcclxuXHRcdGlmICh0aGlzLl9ibG9ja1R5cGVEYXRhLmNvbGxpc2lvbikge1xyXG5cdFx0XHRjb25zdCBjb2xsaXNpb246SUNvbGxpc2lvbiA9IHRoaXMuX2Jsb2NrVHlwZURhdGEuY29sbGlzaW9uO1xyXG5cdFx0XHR0aGlzLnNldExvY2FsQ29sbGlzaW9uVmFsdWVzKGNvbGxpc2lvbi5sZWZ0LCBjb2xsaXNpb24ucmlnaHQsIGNvbGxpc2lvbi50b3AsIGNvbGxpc2lvbi5ib3R0b20pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0U3ByaXRlKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fYmxvY2tUeXBlRGF0YS5pbWFnZSkge1xyXG5cdFx0XHR0aGlzLl9zcHJpdGUgPSBTcHJpdGUuZnJvbSh0aGlzLl9ibG9ja1R5cGVEYXRhLmltYWdlKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldERhdGEoKTpJQmxvY2sge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2NrRGF0YTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRUeXBlRGF0YSgpOklCbG9ja1R5cGUge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2NrVHlwZURhdGE7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd0Jsb2NrSGl0KHZhbHVlOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2hpdCAhPT0gdmFsdWUpIHtcclxuXHRcdFx0dGhpcy5faGl0ID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuc2hvd0NvbGxpc2lvblJlY3RhbmdsZSh0aGlzLl9oaXQgPyAweGZmMDAwMCA6IDB4MDAwMGZmKTtcclxuXHRcdFx0aWYgKHRoaXMuX3Nwcml0ZSkge1xyXG5cdFx0XHRcdHRoaXMuX3Nwcml0ZS5hbHBoYSA9IC4zO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGlkZUJsb2NrSGl0KCk6dm9pZCB7XHJcblx0XHR0aGlzLmhpZGVDb2xsaXNpb25SZWN0YW5nbGUoKTtcclxuXHRcdHRoaXMuX2hpdCA9IG51bGw7XHJcblx0XHRpZiAodGhpcy5fc3ByaXRlKSB7XHJcblx0XHRcdHRoaXMuX3Nwcml0ZS5hbHBoYSA9IDE7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtJQ29sbGVjdGlibGVUeXBlLCBJQ29sbGlzaW9ufSBmcm9tIFwiLi4vSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgU3ByaXRlID0gUElYSS5TcHJpdGU7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aWJsZSBleHRlbmRzIENvbGxpc2lvbk9iamVjdCB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRjb2xsZWN0aWJsZVR5cGVEYXRhOklDb2xsZWN0aWJsZVR5cGUsXHJcblx0XHRwcml2YXRlIF9vbkhpdENhbGxiYWNrOigpID0+IHZvaWQsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuYWRkQ2hpbGQoU3ByaXRlLmZyb20oY29sbGVjdGlibGVUeXBlRGF0YS5pbWFnZSkpO1xyXG5cdFx0aWYgKGNvbGxlY3RpYmxlVHlwZURhdGEuY29sbGlzaW9uKSB7XHJcblx0XHRcdGNvbnN0IGNvbGxpc2lvbjpJQ29sbGlzaW9uID0gY29sbGVjdGlibGVUeXBlRGF0YS5jb2xsaXNpb247XHJcblx0XHRcdHRoaXMuc2V0TG9jYWxDb2xsaXNpb25WYWx1ZXMoY29sbGlzaW9uLmxlZnQsIGNvbGxpc2lvbi5yaWdodCwgY29sbGlzaW9uLnRvcCwgY29sbGlzaW9uLmJvdHRvbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25IaXQoKTp2b2lkIHtcclxuXHRcdHRoaXMuX29uSGl0Q2FsbGJhY2soKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IENvbnRhaW5lciA9IFBJWEkuQ29udGFpbmVyO1xyXG5pbXBvcnQgR3JhcGhpY3MgPSBQSVhJLkdyYXBoaWNzO1xyXG5pbXBvcnQgVGV4dCA9IFBJWEkuVGV4dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk9iamVjdCBleHRlbmRzIENvbnRhaW5lciB7XHJcblx0cHJpdmF0ZSBfbG9jYWxMZWZ0Om51bWJlcjtcclxuXHRwcml2YXRlIF9sb2NhbFJpZ2h0Om51bWJlcjtcclxuXHRwcml2YXRlIF9sb2NhbFRvcDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxCb3R0b206bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsQ2VudGVyWDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxDZW50ZXJZOm51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uTGVmdDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uUmlnaHQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvblRvcDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uQm90dG9tOm51bWJlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25DZW50ZXJYOm51bWJlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25DZW50ZXJZOm51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uUmVjdGFuZ2xlOkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvblJlY3RhbmdsZUNvbnRhaW5lcjpDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcblx0cHJpdmF0ZSBfc2VsZWN0aW9uOkdyYXBoaWNzO1xyXG5cclxuXHRwcml2YXRlIF9kZWJ1Z1RleHQ6VGV4dDtcclxuXHRwcml2YXRlIF9kZWJ1Z1RleHRCYWNrZ3JvdW5kOkdyYXBoaWNzO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZUNvbnRhaW5lcilcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRMb2NhbENvbGxpc2lvblZhbHVlcyhcclxuXHRcdGxlZnQ6bnVtYmVyLFxyXG5cdFx0cmlnaHQ6bnVtYmVyLFxyXG5cdFx0dG9wOm51bWJlcixcclxuXHRcdGJvdHRvbTpudW1iZXJcclxuXHQpOnZvaWQge1xyXG5cdFx0dGhpcy5fbG9jYWxMZWZ0ID0gbGVmdDtcclxuXHRcdHRoaXMuX2xvY2FsUmlnaHQgPSByaWdodDtcclxuXHRcdHRoaXMuX2xvY2FsVG9wID0gdG9wO1xyXG5cdFx0dGhpcy5fbG9jYWxCb3R0b20gPSBib3R0b207XHJcblx0XHR0aGlzLl9sb2NhbENlbnRlclggPSBsZWZ0ICsgTWF0aC5mbG9vcigocmlnaHQgLSBsZWZ0KSAvIDIpO1xyXG5cdFx0dGhpcy5fbG9jYWxDZW50ZXJZID0gdG9wICsgTWF0aC5mbG9vcigoYm90dG9tIC0gdG9wKSAvIDIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB4KHg6bnVtYmVyKSB7XHJcblx0XHRzdXBlci54ID0geDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbkxlZnQgPSB4ICsgdGhpcy5fbG9jYWxMZWZ0O1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uUmlnaHQgPSB4ICsgdGhpcy5fbG9jYWxSaWdodDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbkNlbnRlclggPSB4ICsgdGhpcy5fbG9jYWxDZW50ZXJYO1xyXG5cdFx0aWYgKCFwcm9jZXNzLmVudi5SRUxFQVNFKVxyXG5cdFx0XHR0aGlzLnJlZnJlc2hQb3NpdGlvblRleHQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gc3VwZXIueDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgeSh5Om51bWJlcikge1xyXG5cdFx0c3VwZXIueSA9IHk7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25Ub3AgPSB5ICsgdGhpcy5fbG9jYWxUb3A7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25Cb3R0b20gPSB5ICsgdGhpcy5fbG9jYWxCb3R0b207XHJcblx0XHR0aGlzLl9jb2xsaXNpb25DZW50ZXJZID0geSArIHRoaXMuX2xvY2FsQ2VudGVyWTtcclxuXHRcdGlmICghcHJvY2Vzcy5lbnYuUkVMRUFTRSlcclxuXHRcdFx0dGhpcy5yZWZyZXNoUG9zaXRpb25UZXh0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHkoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHN1cGVyLnk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0T3JkZXIodmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdC8qXHJcblx0XHRpZiAoIXRoaXMuX2RlYnVnVGV4dCkge1xyXG5cdFx0XHR0aGlzLl9kZWJ1Z1RleHQgPSBuZXcgVGV4dCgpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2RlYnVnVGV4dCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHQudGV4dCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHQueCA9IE1hdGguZmxvb3IoKCh0aGlzLl9sb2NhbFJpZ2h0IC0gdGhpcy5fbG9jYWxMZWZ0KSAtIHRoaXMuX2RlYnVnVGV4dC53aWR0aCkgLyAyKTtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dC55ID0gdGhpcy5fbG9jYWxUb3AgKyBNYXRoLmZsb29yKCgodGhpcy5fbG9jYWxCb3R0b20gLSB0aGlzLl9sb2NhbFRvcCkgLSB0aGlzLl9kZWJ1Z1RleHQuaGVpZ2h0KSAvIDIpO1xyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWZyZXNoUG9zaXRpb25UZXh0KCk6dm9pZCB7XHJcblx0XHQvLyB0aGlzLnNob3dEZWJ1Z1RleHQodGhpcy5fY29sbGlzaW9uTGVmdCArIFwieFwiICsgdGhpcy5fY29sbGlzaW9uVG9wKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd0RlYnVnVGV4dCh0ZXh0OnN0cmluZyk6dm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQpIHtcclxuXHRcdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZCA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5fZGVidWdUZXh0KSB7XHJcblx0XHRcdGNvbnN0IHRleHRTdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcblx0XHRcdFx0ZmlsbDogXCIjZmZmZmZmXCIsXHJcblx0XHRcdFx0Zm9udFNpemU6IDE2LFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuX2RlYnVnVGV4dCA9IG5ldyBQSVhJLlRleHQoJycsIHRleHRTdHlsZSk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fZGVidWdUZXh0KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9kZWJ1Z1RleHQudGV4dCA9IHRleHQ7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHQueCA9IE1hdGguZmxvb3IoKHRoaXMuX2xvY2FsUmlnaHQgLSB0aGlzLl9sb2NhbExlZnQgLSB0aGlzLl9kZWJ1Z1RleHQud2lkdGgpIC8gMik7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHQueSA9IHRoaXMuX2xvY2FsVG9wICogMiArIE1hdGguZmxvb3IoKHRoaXMuX2xvY2FsQm90dG9tIC0gdGhpcy5fbG9jYWxUb3AgLSB0aGlzLl9kZWJ1Z1RleHQuaGVpZ2h0KSAvIDIpO1xyXG5cclxuXHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQueCA9IHRoaXMuX2RlYnVnVGV4dC54O1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC55ID0gdGhpcy5fZGVidWdUZXh0Lnk7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kLmNsZWFyKCk7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kLmJlZ2luRmlsbCgweDAwMDAwMCk7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kLmRyYXdSZWN0KDAsIDAsIHRoaXMuX2RlYnVnVGV4dC53aWR0aCwgdGhpcy5fZGVidWdUZXh0LmhlaWdodCk7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kLmVuZEZpbGwoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaG93Q29sbGlzaW9uUmVjdGFuZ2xlKGNvbG9yOm51bWJlciA9IDB4MDAwMGZmKTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlKSB7XHJcblx0XHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUucGFyZW50KSB7XHJcblx0XHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZUNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLmNsZWFyKCk7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUuYmVnaW5GaWxsKGNvbG9yLCAuNSk7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUuZHJhd1JlY3QoXHJcblx0XHRcdHRoaXMuX2xvY2FsTGVmdCxcclxuXHRcdFx0dGhpcy5fbG9jYWxUb3AsXHJcblx0XHRcdHRoaXMuX2xvY2FsUmlnaHQgLSB0aGlzLl9sb2NhbExlZnQsXHJcblx0XHRcdHRoaXMuX2xvY2FsQm90dG9tIC0gdGhpcy5fbG9jYWxUb3AsXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNob3dTZWxlY3Rpb24oKTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5fc2VsZWN0aW9uIHx8ICF0aGlzLl9zZWxlY3Rpb24ucGFyZW50KSB7XHJcblx0XHRcdGlmICghdGhpcy5fc2VsZWN0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy5fc2VsZWN0aW9uID0gbmV3IEdyYXBoaWNzKCk7XHJcblx0XHRcdFx0dGhpcy5fc2VsZWN0aW9uLmJlZ2luRmlsbCgweGZmZmZmZik7XHJcblx0XHRcdFx0bGV0IGNlbnRlclBvaW50WDpudW1iZXIgPSB0aGlzLl9sb2NhbExlZnQgKyAodGhpcy5fbG9jYWxSaWdodCAtIHRoaXMuX2xvY2FsTGVmdCkgLyAyO1xyXG5cdFx0XHRcdGxldCBjZW50ZXJQb2ludFk6bnVtYmVyID0gdGhpcy5fbG9jYWxUb3AgKyAodGhpcy5fbG9jYWxCb3R0b20gLSB0aGlzLl9sb2NhbFRvcCkgLyAyO1xyXG5cdFx0XHRcdGNvbnN0IGNlbnRlclNxdWFyZVNpemU6bnVtYmVyID0gMTA7XHJcblx0XHRcdFx0dGhpcy5fc2VsZWN0aW9uLmRyYXdSZWN0KFxyXG5cdFx0XHRcdFx0Y2VudGVyUG9pbnRYIC0gY2VudGVyU3F1YXJlU2l6ZSAvIDIsXHJcblx0XHRcdFx0XHRjZW50ZXJQb2ludFkgLSBjZW50ZXJTcXVhcmVTaXplIC8gMixcclxuXHRcdFx0XHRcdGNlbnRlclNxdWFyZVNpemUsXHJcblx0XHRcdFx0XHRjZW50ZXJTcXVhcmVTaXplLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2VsZWN0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoaWRlU2VsZWN0aW9uKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fc2VsZWN0aW9uICYmIHRoaXMuX3NlbGVjdGlvbi5wYXJlbnQpXHJcblx0XHRcdHRoaXMuX3NlbGVjdGlvbi5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fc2VsZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoaWRlQ29sbGlzaW9uUmVjdGFuZ2xlKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlICYmIHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5wYXJlbnQpIHtcclxuXHRcdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvbkxlZnQoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvbkxlZnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uUmlnaHQoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvblJpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvblRvcCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uVG9wO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvbkJvdHRvbSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uQm90dG9tO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uTGVmdCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxMZWZ0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uUmlnaHQoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsUmlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25Ub3AoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsVG9wO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uQm90dG9tKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbEJvdHRvbTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2NhbENvbGxpc2lvbkNlbnRlclgoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsQ2VudGVyWDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2NhbENvbGxpc2lvbkNlbnRlclkoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsQ2VudGVyWTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjb2xsaXNpb25DZW50ZXJYKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25DZW50ZXJYO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvbkNlbnRlclkoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvbkNlbnRlclk7XHJcblx0fVxyXG59IiwiaW1wb3J0IENvbnRhaW5lciA9IFBJWEkuQ29udGFpbmVyO1xyXG5pbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5pbXBvcnQgSGl0VGVzdCBmcm9tIFwiLi9IaXRUZXN0XCI7XHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0ID0gUElYSS5EaXNwbGF5T2JqZWN0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uT2JqZWN0c1NvcnRlciB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9jb2xsaXNpb25zTGF5ZXI6Q29udGFpbmVyXHJcblx0KSB7fVxyXG5cclxuXHRwdWJsaWMgc29ydCgpOnZvaWQge1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuLnNvcnQoKGE6IERpc3BsYXlPYmplY3QsIGI6IERpc3BsYXlPYmplY3QpOiBudW1iZXIgPT4ge1xyXG5cdFx0XHRsZXQgYUNvbGxpc2lvbjogQ29sbGlzaW9uT2JqZWN0ID0gYSBhcyBDb2xsaXNpb25PYmplY3Q7XHJcblx0XHRcdGxldCBiQ29sbGlzaW9uOiBDb2xsaXNpb25PYmplY3QgPSBiIGFzIENvbGxpc2lvbk9iamVjdDtcclxuXHJcblx0XHRcdGlmIChhQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclgoKSAhPT0gYkNvbGxpc2lvbi5jb2xsaXNpb25DZW50ZXJYKCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gYUNvbGxpc2lvbi5jb2xsaXNpb25DZW50ZXJYKCkgLSBiQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclgoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGJDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWSgpIC0gYUNvbGxpc2lvbi5jb2xsaXNpb25DZW50ZXJZKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllci5jaGlsZHJlbiA9IHRoaXMubXlTb3J0KHRoaXMuX2NvbGxpc2lvbnNMYXllci5jaGlsZHJlbiBhcyBDb2xsaXNpb25PYmplY3RbXSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG15U29ydChjaGlsZHJlbjpDb2xsaXNpb25PYmplY3RbXSk6Q29sbGlzaW9uT2JqZWN0W10ge1xyXG5cdFx0Y29uc3Qgb2xkQXJyYXk6Q29sbGlzaW9uT2JqZWN0W10gPSBjaGlsZHJlbi5zbGljZSgpO1xyXG5cdFx0Y29uc3QgbmV3QXJyYXk6Q29sbGlzaW9uT2JqZWN0W10gPSBbXTtcclxuXHRcdHdoaWxlIChvbGRBcnJheS5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgaW5kZXg6bnVtYmVyID0gdGhpcy5maW5kTWluT2JqZWN0SW5kZXgob2xkQXJyYXksIDApO1xyXG5cdFx0XHRuZXdBcnJheS5wdXNoKG9sZEFycmF5W2luZGV4XSk7XHJcblx0XHRcdG9sZEFycmF5W2luZGV4XS5zZXRPcmRlcihuZXdBcnJheS5sZW5ndGgpO1xyXG5cdFx0XHRvbGRBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ld0FycmF5O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBmaW5kTWluT2JqZWN0SW5kZXgoXHJcblx0XHRhcnJheTpDb2xsaXNpb25PYmplY3RbXSxcclxuXHRcdGluZGV4Om51bWJlcixcclxuXHQpOm51bWJlciB7XHJcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaSAhPT0gaW5kZXggJiYgdGhpcy5maXJzdE9iamVjdEluZGV4SXNCaWdnZXIoYXJyYXlbaW5kZXhdLCBhcnJheVtpXSkpIHtcclxuXHRcdFx0XHRpbmRleCA9IHRoaXMuZmluZE1pbk9iamVjdEluZGV4KGFycmF5LCBpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGluZGV4O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBmaXJzdE9iamVjdEluZGV4SXNCaWdnZXIoYTpDb2xsaXNpb25PYmplY3QsIGI6Q29sbGlzaW9uT2JqZWN0KTpib29sZWFuIHtcclxuXHRcdGNvbnN0IGhpdEg6IGJvb2xlYW4gPSBIaXRUZXN0Lmhvcml6b250YWwoYSwgYik7XHJcblx0XHRjb25zdCBoaXRWOiBib29sZWFuID0gSGl0VGVzdC52ZXJ0aWNhbChhLCBiKTtcclxuXHRcdGlmIChoaXRIID09PSBoaXRWKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0gZWxzZSBpZiAoaGl0Vikge1xyXG5cdFx0XHRyZXR1cm4gYS5jb2xsaXNpb25MZWZ0KCkgPj0gYi5jb2xsaXNpb25SaWdodCgpO1xyXG5cdFx0fSBlbHNlIGlmIChoaXRIKSB7XHJcblx0XHRcdHJldHVybiBhLmNvbGxpc2lvbkJvdHRvbSgpIDw9IGIuY29sbGlzaW9uVG9wKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKGEuY29sbGlzaW9uTGVmdCgpID49IGIuY29sbGlzaW9uUmlnaHQoKSkgJiYgKGEuY29sbGlzaW9uQm90dG9tKCkgPD0gYi5jb2xsaXNpb25Ub3AoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpdFRlc3Qge1xyXG5cdHB1YmxpYyBzdGF0aWMgaG9yaXpvbnRhbChvYmoxOkNvbGxpc2lvbk9iamVjdCwgb2JqMjpDb2xsaXNpb25PYmplY3QpOmJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICEoXHJcblx0XHRcdG9iajEuY29sbGlzaW9uUmlnaHQoKSA8PSBvYmoyLmNvbGxpc2lvbkxlZnQoKSB8fFxyXG5cdFx0XHRvYmoxLmNvbGxpc2lvbkxlZnQoKSA+PSBvYmoyLmNvbGxpc2lvblJpZ2h0KClcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdmVydGljYWwob2JqMTpDb2xsaXNpb25PYmplY3QsIG9iajI6Q29sbGlzaW9uT2JqZWN0KTpib29sZWFuIHtcclxuXHRcdHJldHVybiAhKFxyXG5cdFx0XHRvYmoxLmNvbGxpc2lvbkJvdHRvbSgpIDw9IG9iajIuY29sbGlzaW9uVG9wKCkgfHxcclxuXHRcdFx0b2JqMS5jb2xsaXNpb25Ub3AoKSA+PSBvYmoyLmNvbGxpc2lvbkJvdHRvbSgpXHJcblx0XHQpO1xyXG5cdH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcIi4uL1ZpZXdcIjtcclxuaW1wb3J0IHtQT0lOVEVSX0RPV04sIFBPSU5URVJfTU9WRSwgUE9JTlRFUl9VUCwgUE9JTlRFUl9VUF9PVVRTSURFfSBmcm9tIFwiLi4vY29uc3RzL1BvaW50ZXJFdmVudHNcIjtcclxuaW1wb3J0IHtcclxuXHRLRVlfQkFDS1FVT1RFLFxyXG5cdEtFWV9DLFxyXG5cdEtFWV9DT01NQSxcclxuXHRLRVlfREVMRVRFLFxyXG5cdEtFWV9KLFxyXG5cdEtFWV9MRUZULFxyXG5cdEtFWV9OLFxyXG5cdEtFWV9QRVJJT0QsXHJcblx0S0VZX1JJR0hULFxyXG5cdEtFWV9VUFxyXG59IGZyb20gXCIuLi9jb25zdHMvS2V5Ym9hcmRDb2Rlc1wiO1xyXG5pbXBvcnQge0lCbG9jaywgSUxldmVsLCBJQmxvY2tUeXBlLCBJSW1hZ2VUeXBlLCBJSW1hZ2UsIElDb2xsZWN0aWJsZSwgSUNvbGxlY3RpYmxlVHlwZX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IFBsYXllck1vdmVyIGZyb20gXCIuL1BsYXllck1vdmVyXCI7XHJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgQ29sbGlzaW9uT2JqZWN0c1NvcnRlciBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RzU29ydGVyXCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuaW1wb3J0IFdpbmRvd0V2ZW50cyBmcm9tIFwiLi4vdXRpbHMvV2luZG93RXZlbnRzXCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCIuLi9HbG9iYWxzXCI7XHJcbmltcG9ydCBMZXZlbHNNYW5hZ2VyIGZyb20gXCIuLi9tb2RlbC9MZXZlbHNNYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnRlcmFjdGlvbkV2ZW50ID0gUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50O1xyXG5pbXBvcnQgUG9pbnQgPSBQSVhJLlBvaW50O1xyXG5pbXBvcnQgU3ByaXRlID0gUElYSS5TcHJpdGU7XHJcbmltcG9ydCBDb2xsZWN0aWJsZSBmcm9tIFwiLi9Db2xsZWN0aWJsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBWaWV3IHtcclxuXHRwcml2YXRlIF9wcmVzc2VkQnV0dG9uczpNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xyXG5cdHByaXZhdGUgX2xhc3RQcmVzc2VkRGlyZWN0aW9uQnV0dG9uOnN0cmluZztcclxuXHRwcml2YXRlIF9qdW1wOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9ibG9ja1R5cGVCeVR5cGVJZDpNYXA8c3RyaW5nLCBJQmxvY2tUeXBlPiA9IG5ldyBNYXA8c3RyaW5nLCBJQmxvY2tUeXBlPigpO1xyXG5cdHByaXZhdGUgX2Jsb2Nrc1R5cGVzOklCbG9ja1R5cGVbXSA9IFtdO1xyXG5cdHByaXZhdGUgX2ltYWdlVHlwZUJ5VHlwZUlkOk1hcDxzdHJpbmcsIElJbWFnZVR5cGU+ID0gbmV3IE1hcDxzdHJpbmcsIElJbWFnZVR5cGU+KCk7XHJcblx0cHJpdmF0ZSBfY29sbGVjdGlibGVUeXBlQnlUeXBlSWQ6TWFwPHN0cmluZywgSUNvbGxlY3RpYmxlVHlwZT4gPSBuZXcgTWFwPHN0cmluZywgSUNvbGxlY3RpYmxlVHlwZT4oKTtcclxuXHRwcml2YXRlIF9jb2xsZWN0ZWRJZHM6c3RyaW5nW10gPSBbXTtcclxuXHRwcml2YXRlIF9wbGF5ZXJNb3ZlcjpQbGF5ZXJNb3ZlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25PYmplY3RzU29ydGVyOkNvbGxpc2lvbk9iamVjdHNTb3J0ZXI7XHJcblx0cHJpdmF0ZSBfYmxvY2tzOkJsb2NrW10gPSBbXTtcclxuXHRwcml2YXRlIF9pbWFnZXM6U3ByaXRlW10gPSBbXTtcclxuXHRwcml2YXRlIF9jb2xsZWN0aWJsZXM6Q29sbGVjdGlibGVbXSA9IFtdO1xyXG5cdHByaXZhdGUgX2xldmVsRGF0YTpJTGV2ZWw7XHJcblx0cHJpdmF0ZSBfc2VsZWN0ZWRCbG9jazpCbG9jayA9IG51bGw7XHJcblx0cHJpdmF0ZSBfaW1hZ2VzTGF5ZXI6U3ByaXRlO1xyXG5cdHByaXZhdGUgX2NvbGxlY3RpYmxlc0xheWVyOlNwcml0ZTtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25zTGF5ZXI6U3ByaXRlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3BsYXllcjpQbGF5ZXIsXHJcblx0XHRwcml2YXRlIF9zZXRMZXZlbENhbGxiYWNrOihsZXZlbDpudW1iZXIpID0+IElMZXZlbCxcclxuXHRcdHByaXZhdGUgX2NoYW5nZUNhbWVyYUNhbGxiYWNrOihsZXZlbFdpZHRoOm51bWJlciwgbGV2ZWxIZWlnaHQ6bnVtYmVyKSA9PiB2b2lkLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBpbml0KCk6dm9pZCB7XHJcblx0XHRzdXBlci5pbml0KCk7XHJcblx0XHR0aGlzLmFkZEtleUxpc3RlbmVycygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXRUeXBlcygpOnZvaWQge1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5nZXRMZXZlbHNNZXRhZGF0YSgpLmltYWdlc1R5cGVzLmZvckVhY2goKGltYWdlRGF0YTpJSW1hZ2VUeXBlKSA9PiB7XHJcblx0XHRcdHRoaXMuX2ltYWdlVHlwZUJ5VHlwZUlkLnNldChpbWFnZURhdGEuaWQsIGltYWdlRGF0YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRMZXZlbHNNYW5hZ2VyLmdldExldmVsc01ldGFkYXRhKCkuYmxvY2tUeXBlcy5mb3JFYWNoKChibG9ja1R5cGVEYXRhOklCbG9ja1R5cGUpID0+IHtcclxuXHRcdFx0dGhpcy5fYmxvY2tUeXBlQnlUeXBlSWQuc2V0KGJsb2NrVHlwZURhdGEuaWQsIGJsb2NrVHlwZURhdGEpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NUeXBlcy5wdXNoKGJsb2NrVHlwZURhdGEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0TGV2ZWxzTWFuYWdlci5nZXRMZXZlbHNNZXRhZGF0YSgpLmNvbGxlY3RpYmxlc1R5cGVzLmZvckVhY2goKGNvbGxlY3RpYmxlRGF0YTpJQ29sbGVjdGlibGVUeXBlKSA9PiB7XHJcblx0XHRcdHRoaXMuX2NvbGxlY3RpYmxlVHlwZUJ5VHlwZUlkLnNldChjb2xsZWN0aWJsZURhdGEuaWQsIGNvbGxlY3RpYmxlRGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRMZXZlbChsZXZlbERhdGE6SUxldmVsKTp2b2lkIHtcclxuXHRcdHRoaXMuX2xldmVsRGF0YSA9IGxldmVsRGF0YTtcclxuXHJcblx0XHRpZiAoIXRoaXMuX2ltYWdlc0xheWVyKSB7XHJcblx0XHRcdHRoaXMuX2ltYWdlc0xheWVyID0gbmV3IFNwcml0ZSgpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2ltYWdlc0xheWVyKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX2NvbGxlY3RpYmxlc0xheWVyKSB7XHJcblx0XHRcdHRoaXMuX2NvbGxlY3RpYmxlc0xheWVyID0gbmV3IFNwcml0ZSgpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2NvbGxlY3RpYmxlc0xheWVyKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX2NvbGxpc2lvbnNMYXllcikge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIgPSBuZXcgU3ByaXRlKCk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY29sbGlzaW9uc0xheWVyKTtcclxuXHJcblx0XHRcdHRoaXMuaW5pdENvbGxpc2lvbk9iamVjdHNTb3J0ZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlbW92ZUFsbEltYWdlcygpO1xyXG5cdFx0dGhpcy5yZW1vdmVBbGxDb2xsZWN0aWJsZXMoKTtcclxuXHRcdHRoaXMucmVtb3ZlQWxsQ29sbGlzaW9uT2JqZWN0cygpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9sZXZlbERhdGEuaW1hZ2VzKSB7XHJcblx0XHRcdHRoaXMuX2xldmVsRGF0YS5pbWFnZXMuZm9yRWFjaCgoaW1hZ2VEYXRhOklJbWFnZSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlSW1hZ2UoaW1hZ2VEYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fbGV2ZWxEYXRhLmNvbGxlY3RpYmxlcykge1xyXG5cdFx0XHR0aGlzLl9sZXZlbERhdGEuY29sbGVjdGlibGVzLmZvckVhY2goKGNvbGxlY3RpYmxlRGF0YTpJQ29sbGVjdGlibGUpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5fY29sbGVjdGVkSWRzLmluZGV4T2YoY29sbGVjdGlibGVEYXRhLmlkKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVDb2xsZWN0aWJsZShjb2xsZWN0aWJsZURhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9sZXZlbERhdGEuYmxvY2tzKSB7XHJcblx0XHRcdHRoaXMuX2xldmVsRGF0YS5ibG9ja3MuZm9yRWFjaCgoYmxvY2tEYXRhOklCbG9jaykgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQmxvY2soYmxvY2tEYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuX3BsYXllci5wYXJlbnQpXHJcblx0XHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllci5hZGRDaGlsZCh0aGlzLl9wbGF5ZXIpO1xyXG5cclxuXHRcdGlmICghdGhpcy5fcGxheWVyTW92ZXIpXHJcblx0XHRcdHRoaXMuX3BsYXllck1vdmVyID0gbmV3IFBsYXllck1vdmVyKHRoaXMuX3NldExldmVsQ2FsbGJhY2spO1xyXG5cdFx0dGhpcy5fcGxheWVyTW92ZXIuc2V0TGV2ZWxEYXRhKFxyXG5cdFx0XHR0aGlzLl9wbGF5ZXIsXHJcblx0XHRcdHRoaXMuX2Jsb2NrcyxcclxuXHRcdFx0dGhpcy5fY29sbGVjdGlibGVzLFxyXG5cdFx0XHR0aGlzLl9sZXZlbERhdGEuc3RhZ2UsXHJcblx0XHRcdHRoaXMuX2xldmVsRGF0YS5ib3JkZXJzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsYXVuY2hUaWNrZXIoKTp2b2lkIHtcclxuXHRcdEdsb2JhbHMucGl4aUFwcC50aWNrZXIuYWRkKHRoaXMudGljaywgdGhpcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbW92ZUFsbEltYWdlcygpOnZvaWQge1xyXG5cdFx0dGhpcy5faW1hZ2VzTGF5ZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMuX2ltYWdlcy5sZW5ndGggPSAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW1vdmVBbGxDb2xsZWN0aWJsZXMoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2NvbGxlY3RpYmxlc0xheWVyLnJlbW92ZUNoaWxkcmVuKCk7XHJcblx0XHR0aGlzLl9jb2xsZWN0aWJsZXMubGVuZ3RoID0gMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlQWxsQ29sbGlzaW9uT2JqZWN0cygpOnZvaWQge1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goYmxvY2sgPT4gYmxvY2sucmVtb3ZlQWxsTGlzdGVuZXJzKCkpO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IG51bGw7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5sZW5ndGggPSAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVJbWFnZShpbWFnZURhdGE6SUltYWdlKTp2b2lkIHtcclxuXHRcdGNvbnN0IGltYWdlVHlwZURhdGE6SUltYWdlVHlwZSA9IHRoaXMuX2ltYWdlVHlwZUJ5VHlwZUlkLmdldChpbWFnZURhdGEudHlwZSk7XHJcblx0XHRjb25zdCBpbWFnZTpTcHJpdGUgPSBTcHJpdGUuZnJvbShpbWFnZVR5cGVEYXRhLmltYWdlKTtcclxuXHRcdGltYWdlLnggPSBpbWFnZURhdGEueDtcclxuXHRcdGltYWdlLnkgPSBpbWFnZURhdGEueTtcclxuXHRcdHRoaXMuX2ltYWdlc0xheWVyLmFkZENoaWxkKGltYWdlKTtcclxuXHRcdHRoaXMuX2ltYWdlcy5wdXNoKGltYWdlKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlQ29sbGVjdGlibGUoY29sbGVjdGlibGVEYXRhOklDb2xsZWN0aWJsZSk6dm9pZCB7XHJcblx0XHRjb25zdCBjb2xsZWN0aWJsZVR5cGVEYXRhOklDb2xsZWN0aWJsZVR5cGUgPSB0aGlzLl9jb2xsZWN0aWJsZVR5cGVCeVR5cGVJZC5nZXQoY29sbGVjdGlibGVEYXRhLnR5cGUpO1xyXG5cdFx0Y29uc3QgY29sbGVjdGlibGU6Q29sbGVjdGlibGUgPSBuZXcgQ29sbGVjdGlibGUoXHJcblx0XHRcdGNvbGxlY3RpYmxlVHlwZURhdGEsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRpZiAoY29sbGVjdGlibGVEYXRhLnR5cGUgPT0gXCJjdXBcIikge1xyXG5cdFx0XHRcdFx0YWxlcnQoXCJZT1UgV0lOISEhXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5fcGxheWVyLnNldFdpbm5lclNraW4oKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuX2NvbGxlY3RlZElkcy5wdXNoKGNvbGxlY3RpYmxlRGF0YS5pZCk7XHJcblx0XHRcdFx0Y29sbGVjdGlibGUucGFyZW50LnJlbW92ZUNoaWxkKGNvbGxlY3RpYmxlKTtcclxuXHRcdFx0XHR0aGlzLl9jb2xsZWN0aWJsZXMuc3BsaWNlKHRoaXMuX2NvbGxlY3RpYmxlcy5pbmRleE9mKGNvbGxlY3RpYmxlLCAxKSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRjb2xsZWN0aWJsZS54ID0gY29sbGVjdGlibGVEYXRhLng7XHJcblx0XHRjb2xsZWN0aWJsZS55ID0gY29sbGVjdGlibGVEYXRhLnk7XHJcblx0XHR0aGlzLl9jb2xsZWN0aWJsZXNMYXllci5hZGRDaGlsZChjb2xsZWN0aWJsZSk7XHJcblx0XHR0aGlzLl9jb2xsZWN0aWJsZXMucHVzaChjb2xsZWN0aWJsZSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUJsb2NrKGJsb2NrRGF0YTpJQmxvY2spOkJsb2NrIHtcclxuXHRcdGNvbnN0IGJsb2NrVHlwZURhdGE6SUJsb2NrVHlwZSA9IHRoaXMuX2Jsb2NrVHlwZUJ5VHlwZUlkLmdldChibG9ja0RhdGEudHlwZSk7XHJcblx0XHRjb25zdCBibG9jazpCbG9jayA9IG5ldyBCbG9jayhibG9ja0RhdGEsIGJsb2NrVHlwZURhdGEpO1xyXG5cdFx0YmxvY2sueCA9IGJsb2NrRGF0YS54IC0gYmxvY2tUeXBlRGF0YS5jb2xsaXNpb24ubGVmdDtcclxuXHRcdGJsb2NrLnkgPSBibG9ja0RhdGEueSAtIGJsb2NrVHlwZURhdGEuY29sbGlzaW9uLnRvcDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllci5hZGRDaGlsZChibG9jayk7XHJcblx0XHR0aGlzLl9ibG9ja3MucHVzaChibG9jayk7XHJcblxyXG5cdFx0aWYgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKSB7XHJcblx0XHRcdHRoaXMubWFrZUJsb2NrSW50ZXJhY3RpdmUoYmxvY2spO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBibG9jaztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWRkS2V5TGlzdGVuZXJzKCk6dm9pZCB7XHJcblx0XHRXaW5kb3dFdmVudHMuYWRkKFxyXG5cdFx0XHRXaW5kb3dFdmVudHMuS0VZX0RPV04sXHJcblx0XHRcdChlOktleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLmtleURvd25IYW5kbGVyKGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0KTtcclxuXHJcblx0XHRXaW5kb3dFdmVudHMuYWRkKFxyXG5cdFx0XHRXaW5kb3dFdmVudHMuS0VZX1VQLFxyXG5cdFx0XHQoZTpLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5rZXlVcEhhbmRsZXIoZSk7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cclxuXHRcdFdpbmRvd0V2ZW50cy5hZGQoXHJcblx0XHRcdFdpbmRvd0V2ZW50cy5GT0NVU19PVVQsXHJcblx0XHRcdChlOmFueSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNPdXRIYW5kbGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRDb2xsaXNpb25PYmplY3RzU29ydGVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25PYmplY3RzU29ydGVyID0gbmV3IENvbGxpc2lvbk9iamVjdHNTb3J0ZXIodGhpcy5fY29sbGlzaW9uc0xheWVyKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdGljaygpOnZvaWQge1xyXG5cdFx0dGhpcy5yZWZyZXNoUGxheWVyU3BlZWRYKCk7XHJcblx0XHR0aGlzLnJlZnJlc2hQbGF5ZXJTcGVlZFkoKTtcclxuXHRcdHRoaXMuX3BsYXllck1vdmVyLnJlZnJlc2goKTtcclxuXHRcdGlmIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSlcclxuXHRcdFx0dGhpcy5yZWZyZXNoQ29sbGlzaW9uUmVjdGFuZ2xlcygpO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uT2JqZWN0c1NvcnRlci5zb3J0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlZnJlc2hDb2xsaXNpb25SZWN0YW5nbGVzKCk6dm9pZCB7XHJcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGhpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0aSAhPSBqICYmXHJcblx0XHRcdFx0XHRIaXRUZXN0Lmhvcml6b250YWwodGhpcy5fYmxvY2tzW2ldLCB0aGlzLl9ibG9ja3Nbal0pICYmXHJcblx0XHRcdFx0XHRIaXRUZXN0LnZlcnRpY2FsKHRoaXMuX2Jsb2Nrc1tpXSwgdGhpcy5fYmxvY2tzW2pdKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0aGl0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9ibG9ja3NbaV0uc2hvd0Jsb2NrSGl0KGhpdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlZnJlc2hQbGF5ZXJTcGVlZFgoKTp2b2lkIHtcclxuXHRcdGNvbnN0IHNsb3dkb3duOmJvb2xlYW4gPSAhdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9MRUZUKSAmJiAhdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9SSUdIVCk7XHJcblx0XHRpZiAoIXNsb3dkb3duIHx8IE1hdGguYWJzKHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSkgPiAuMSkge1xyXG5cdFx0XHRsZXQgZGlyZWN0aW9uOiBudW1iZXI7XHJcblx0XHRcdGlmICh0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX0xFRlQpICYmIHRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfUklHSFQpKSB7XHJcblx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy5fbGFzdFByZXNzZWREaXJlY3Rpb25CdXR0b24gPT0gS0VZX0xFRlQgPyAtMSA6IDE7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2xvd2Rvd24pIHtcclxuXHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkgPiAwID8gLTEgOiAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfTEVGVCkgPyAtMSA6IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGRpc3RhbmNlOiBudW1iZXI7XHJcblx0XHRcdGlmIChzbG93ZG93bikge1xyXG5cdFx0XHRcdGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5fcGxheWVyLmdldFNwZWVkWCgpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkaXN0YW5jZSA9IFBsYXllci5NQVhfTU9WSU5HX1NQRUVEIC0gdGhpcy5fcGxheWVyLmdldFNwZWVkWCgpICogZGlyZWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFgodGhpcy5fcGxheWVyLmdldFNwZWVkWCgpICsgZGlzdGFuY2UgKiBkaXJlY3Rpb24gKiBQbGF5ZXIuTU9WSU5HX0FDQ0VMRVJBVElPTl9GQUNUT1IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWCgwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaFBsYXllclNwZWVkWSgpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3BsYXllci5vblRoZUZsb29yICYmIHRoaXMuX2p1bXApIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWShQbGF5ZXIuSlVNUF9TUEVFRCk7XHJcblx0XHRcdHRoaXMuX2p1bXAgPSBmYWxzZTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuX3BsYXllci5vblRoZUZsb29yICYmICF0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX1VQKSAmJiB0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCkgPCAwKSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFkoMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSArIFBsYXllci5HUkFWSVRZKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUga2V5RG93bkhhbmRsZXIoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcclxuXHRcdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRcdGNhc2UgS0VZX0xFRlQ6XHJcblx0XHRcdGNhc2UgS0VZX1JJR0hUOlxyXG5cdFx0XHRcdHRoaXMuX2xhc3RQcmVzc2VkRGlyZWN0aW9uQnV0dG9uID0gZS5jb2RlO1xyXG5cdFx0XHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLnNldChlLmNvZGUsIHRydWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfVVA6XHJcblx0XHRcdFx0aWYgKCF0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoZS5jb2RlKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fanVtcCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLl9wcmVzc2VkQnV0dG9ucy5zZXQoZS5jb2RlLCB0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9CQUNLUVVPVEU6XHJcblx0XHRcdFx0aWYgKCFwcm9jZXNzLmVudi5SRUxFQVNFKSB7XHJcblx0XHRcdFx0XHRHbG9iYWxzLnNldERldmVsb3Blck1vZGUoIUdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKTtcclxuXHRcdFx0XHRcdGlmIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmVuYWJsZURldmVsb3Blck1vZGUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlzYWJsZURldmVsb3Blck1vZGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRGV2ZWxvcGVyIG1vZGUgaXMgXCIgKyAoR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkgPyBcIk9OXCIgOiBcIk9GRlwiKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfSjpcclxuXHRcdFx0XHRpZiAoIXByb2Nlc3MuZW52LlJFTEVBU0UpIHtcclxuXHRcdFx0XHRcdHRoaXMucHJpbnRMZXZlbEpzb24oKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9ERUxFVEU6XHJcblx0XHRcdFx0dGhpcy5kZWxldGVTZWxlY3RlZEJsb2NrSWZDYW4oKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0NPTU1BOlxyXG5cdFx0XHRjYXNlIEtFWV9QRVJJT0Q6XHJcblx0XHRcdFx0aWYgKHRoaXMuX3NlbGVjdGVkQmxvY2sgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkQmxvY2tEYXRhOklCbG9jayA9IHRoaXMuX3NlbGVjdGVkQmxvY2suZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkQmxvY2tUeXBlRGF0YTpJQmxvY2tUeXBlID0gdGhpcy5fYmxvY2tUeXBlQnlUeXBlSWQuZ2V0KHNlbGVjdGVkQmxvY2tEYXRhLnR5cGUpO1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4T2ZTZWxlY3RlZEJsb2NrVHlwZTpudW1iZXIgPSB0aGlzLl9ibG9ja3NUeXBlcy5pbmRleE9mKHNlbGVjdGVkQmxvY2tUeXBlRGF0YSk7XHJcblx0XHRcdFx0XHRsZXQgbmV4dFR5cGVJbmRleDpudW1iZXIgPSBlLmNvZGUgPT0gS0VZX0NPTU1BID8gaW5kZXhPZlNlbGVjdGVkQmxvY2tUeXBlIC0gMSA6IGluZGV4T2ZTZWxlY3RlZEJsb2NrVHlwZSArIDE7XHJcblx0XHRcdFx0XHRpZiAobmV4dFR5cGVJbmRleCA8IDApXHJcblx0XHRcdFx0XHRcdG5leHRUeXBlSW5kZXggPSB0aGlzLl9ibG9ja3NUeXBlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAobmV4dFR5cGVJbmRleCA+PSB0aGlzLl9ibG9ja3NUeXBlcy5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdG5leHRUeXBlSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdGVkQmxvY2tEYXRhLnggPSB0aGlzLl9zZWxlY3RlZEJsb2NrLmNvbGxpc2lvbkxlZnQoKTtcclxuXHRcdFx0XHRcdHNlbGVjdGVkQmxvY2tEYXRhLnkgPSB0aGlzLl9zZWxlY3RlZEJsb2NrLmNvbGxpc2lvblRvcCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5kZWxldGVTZWxlY3RlZEJsb2NrSWZDYW4oKTtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3RlZEJsb2NrRGF0YS50eXBlID0gdGhpcy5fYmxvY2tzVHlwZXNbbmV4dFR5cGVJbmRleF0uaWQ7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEJsb2NrKHRoaXMuY3JlYXRlQmxvY2soc2VsZWN0ZWRCbG9ja0RhdGEpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9OOlxyXG5cdFx0XHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3QmxvY2tTaGlmdDpudW1iZXIgPSAyMDtcclxuXHRcdFx0XHRcdGxldCBuZXdCbG9ja0RhdGE6SUJsb2NrID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLl9zZWxlY3RlZEJsb2NrLmdldFR5cGVEYXRhKCkuaWQsXHJcblx0XHRcdFx0XHRcdHg6IHRoaXMuX3NlbGVjdGVkQmxvY2suY29sbGlzaW9uTGVmdCgpICsgbmV3QmxvY2tTaGlmdCxcclxuXHRcdFx0XHRcdFx0eTogdGhpcy5fc2VsZWN0ZWRCbG9jay5jb2xsaXNpb25Ub3AoKSAtIG5ld0Jsb2NrU2hpZnQsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RCbG9jayh0aGlzLmNyZWF0ZUJsb2NrKG5ld0Jsb2NrRGF0YSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0M6XHJcblx0XHRcdFx0dGhpcy5fY2hhbmdlQ2FtZXJhQ2FsbGJhY2sodGhpcy5fbGV2ZWxEYXRhLnN0YWdlLndpZHRoLCB0aGlzLl9sZXZlbERhdGEuc3RhZ2UuaGVpZ2h0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZS5jb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2VsZWN0QmxvY2soYmxvY2s6QmxvY2spOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdGVkQmxvY2sgPT0gYmxvY2spIHJldHVybjtcclxuXHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpXHJcblx0XHRcdHRoaXMuX3NlbGVjdGVkQmxvY2suaGlkZVNlbGVjdGlvbigpO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IGJsb2NrO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jay5zaG93U2VsZWN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRlbGV0ZVNlbGVjdGVkQmxvY2tJZkNhbigpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdGVkQmxvY2sgIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9zZWxlY3RlZEJsb2NrKTtcclxuXHRcdFx0bGV0IGJsb2NrSW5kZXggPSB0aGlzLl9ibG9ja3MuaW5kZXhPZih0aGlzLl9zZWxlY3RlZEJsb2NrKTtcclxuXHRcdFx0dGhpcy5fYmxvY2tzLnNwbGljZShibG9ja0luZGV4LCAxKTtcclxuXHRcdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGVuYWJsZURldmVsb3Blck1vZGUoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BsYXllci5zaG93Q29sbGlzaW9ucygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goYmxvY2sgPT4gdGhpcy5tYWtlQmxvY2tJbnRlcmFjdGl2ZShibG9jaykpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtYWtlQmxvY2tJbnRlcmFjdGl2ZShibG9jazpCbG9jayk6dm9pZCB7XHJcblx0XHRibG9jay5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcblx0XHRibG9jay5hZGRMaXN0ZW5lcihQT0lOVEVSX0RPV04sIHRoaXMuYmxvY2tQb2ludGVyRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtYWtlQmxvY2tOb3RJbnRlcmFjdGl2ZShibG9jazpCbG9jayk6dm9pZCB7XHJcblx0XHRibG9jay5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0YmxvY2sucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlckRvd25IYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudEJsb2NrOkJsb2NrID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgQmxvY2spO1xyXG5cdFx0Y29uc3QgcG9pbnRlckRvd25Qb2ludDpQb2ludCA9IG5ldyBQb2ludChldmVudC5kYXRhLmdsb2JhbC54LCBldmVudC5kYXRhLmdsb2JhbC55KTtcclxuXHRcdGN1cnJlbnRCbG9jay5sb2NhbERyYWdQb2ludCA9IGN1cnJlbnRCbG9jay50b0xvY2FsKHBvaW50ZXJEb3duUG9pbnQpO1xyXG5cdFx0Y3VycmVudEJsb2NrLmFkZExpc3RlbmVyKFBPSU5URVJfTU9WRSwgdGhpcy5ibG9ja1BvaW50ZXJNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblx0XHRjdXJyZW50QmxvY2suYWRkTGlzdGVuZXIoUE9JTlRFUl9VUCwgdGhpcy5ibG9ja1BvaW50ZXJVcEhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0Y3VycmVudEJsb2NrLmFkZExpc3RlbmVyKFBPSU5URVJfVVBfT1VUU0lERSwgdGhpcy5ibG9ja1BvaW50ZXJVcEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0QmxvY2soY3VycmVudEJsb2NrKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYmxvY2tQb2ludGVyTW92ZUhhbmRsZXIoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHRjb25zdCBjdXJyZW50QmxvY2s6QmxvY2sgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBCbG9jayk7XHJcblx0XHRjb25zdCBjb250YWluZXJEcmFnUG9pbnQ6UG9pbnQgPSB0aGlzLnRvTG9jYWwobmV3IFBvaW50KGV2ZW50LmRhdGEuZ2xvYmFsLngsIGV2ZW50LmRhdGEuZ2xvYmFsLnkpKTtcclxuXHRcdGN1cnJlbnRCbG9jay54ID0gTWF0aC5yb3VuZChjb250YWluZXJEcmFnUG9pbnQueCAtIGN1cnJlbnRCbG9jay5sb2NhbERyYWdQb2ludC54KTtcclxuXHRcdGN1cnJlbnRCbG9jay55ID0gTWF0aC5yb3VuZChjb250YWluZXJEcmFnUG9pbnQueSAtIGN1cnJlbnRCbG9jay5sb2NhbERyYWdQb2ludC55KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYmxvY2tQb2ludGVyVXBIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudEJsb2NrOkJsb2NrID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgQmxvY2spO1xyXG5cdFx0Y3VycmVudEJsb2NrLnJlbW92ZUFsbExpc3RlbmVycyhQT0lOVEVSX01PVkUpO1xyXG5cdFx0Y3VycmVudEJsb2NrLnJlbW92ZUFsbExpc3RlbmVycyhQT0lOVEVSX1VQKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9VUF9PVVRTSURFKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZGlzYWJsZURldmVsb3Blck1vZGUoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BsYXllci5oaWRlQ29sbGlzaW9ucygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goKGJsb2NrOkJsb2NrKSA9PiB7XHJcblx0XHRcdHRoaXMubWFrZUJsb2NrTm90SW50ZXJhY3RpdmUoYmxvY2spO1xyXG5cdFx0XHRibG9jay5oaWRlQmxvY2tIaXQoKTtcclxuXHRcdFx0YmxvY2suaGlkZVNlbGVjdGlvbigpO1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrID0gbnVsbDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcmludExldmVsSnNvbigpOnZvaWQge1xyXG5cdFx0Y29uc3QgYmxvY2tzRGF0YTpJQmxvY2tbXSA9IFtdO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuLmZvckVhY2goKGNvbGxpc2lvbk9iamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAoY29sbGlzaW9uT2JqZWN0IGluc3RhbmNlb2YgQmxvY2spIHtcclxuXHRcdFx0XHRibG9ja3NEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Li4uY29sbGlzaW9uT2JqZWN0LmdldERhdGEoKSxcclxuXHRcdFx0XHRcdHg6IGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25MZWZ0KCksXHJcblx0XHRcdFx0XHR5OiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uVG9wKCksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhOklMZXZlbCA9IHtcclxuXHRcdFx0Li4udGhpcy5fbGV2ZWxEYXRhLFxyXG5cdFx0XHRibG9ja3M6YmxvY2tzRGF0YSxcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IGxldmVsSnNvbiA9IEpTT04uc3RyaW5naWZ5KGxldmVsRGF0YSwgbnVsbCwgMik7XHJcblx0XHRjb25zb2xlLmxvZyhsZXZlbEpzb24pO1xyXG5cdFx0dm9pZCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsZXZlbEpzb24pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBrZXlVcEhhbmRsZXIoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcclxuXHRcdGlmIChlLmNvZGUgPT0gS0VZX1VQKSB7XHJcblx0XHRcdHRoaXMuX2p1bXAgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0XHRjYXNlIEtFWV9VUDpcclxuXHRcdFx0Y2FzZSBLRVlfTEVGVDpcclxuXHRcdFx0Y2FzZSBLRVlfUklHSFQ6XHJcblx0XHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGUuY29kZSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBmb2N1c091dEhhbmRsZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLmZvckVhY2goKHZhbHVlOmJvb2xlYW4sIGtleTpzdHJpbmcpID0+IHtcclxuXHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGtleSwgZmFsc2UpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xyXG5pbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29sbGlzaW9uT2JqZWN0IHtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNLSU5fTkFNRTpzdHJpbmcgPSBcImltZy9wbGF5ZXIvcGxheWVyLnBuZ1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0lOTkVSX1NLSU5fTkFNRTpzdHJpbmcgPSBcImltZy9wbGF5ZXIvd2lubmVyLnBuZ1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JBVklUWTpudW1iZXIgPSAwLjU4ODY7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBKVU1QX1NQRUVEOm51bWJlciA9IC0xNztcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1BWF9NT1ZJTkdfU1BFRUQ6bnVtYmVyID0gODtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1PVklOR19BQ0NFTEVSQVRJT05fRkFDVE9SOm51bWJlciA9IC40O1xyXG5cclxuXHRwdWJsaWMgb25UaGVGbG9vcjpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX3NwZWVkWDpudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX3NwZWVkWTpudW1iZXIgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9za2luQ29udGFpbmVyOlNwcml0ZTtcclxuXHRwcml2YXRlIF9jdXJyZW50U2tpbjpTcHJpdGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX3NraW5Db250YWluZXIgPSBuZXcgU3ByaXRlKCk7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3NraW5Db250YWluZXIpO1xyXG5cdFx0dGhpcy5fY3VycmVudFNraW4gPSBTcHJpdGUuZnJvbShQbGF5ZXIuU0tJTl9OQU1FKTtcclxuXHRcdHRoaXMuX3NraW5Db250YWluZXIuYWRkQ2hpbGQodGhpcy5fY3VycmVudFNraW4pO1xyXG5cdFx0dGhpcy5zZXRMb2NhbENvbGxpc2lvblZhbHVlcygzMCwgMTU3LCAxNSwgMTQyKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRTcGVlZFgodmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuX3NwZWVkWCA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFNwZWVkWCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3BlZWRYO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFNwZWVkWSh2YWx1ZTpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5fc3BlZWRZID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0U3BlZWRZKCk6bnVtYmVyIHtcclxuXHRcdGNvbnN0IG1heFNwZWVkWTpudW1iZXIgPSAzMDtcclxuXHRcdHJldHVybiBNYXRoLm1pbih0aGlzLl9zcGVlZFksIG1heFNwZWVkWSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0V2lubmVyU2tpbigpOnZvaWQge1xyXG5cdFx0dGhpcy5fY3VycmVudFNraW4ucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX2N1cnJlbnRTa2luKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRTa2luID0gU3ByaXRlLmZyb20oUGxheWVyLldJTk5FUl9TS0lOX05BTUUpO1xyXG5cdFx0dGhpcy5fc2tpbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9jdXJyZW50U2tpbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd0NvbGxpc2lvbnMoKTp2b2lkIHtcclxuXHRcdHRoaXMuc2hvd0NvbGxpc2lvblJlY3RhbmdsZSgweDAwZmYwMCk7XHJcblx0XHR0aGlzLl9za2luQ29udGFpbmVyLmFscGhhID0gLjM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGlkZUNvbGxpc2lvbnMoKTp2b2lkIHtcclxuXHRcdHRoaXMuaGlkZUNvbGxpc2lvblJlY3RhbmdsZSgpO1xyXG5cdFx0dGhpcy5fc2tpbkNvbnRhaW5lci5hbHBoYSA9IDE7XHJcblx0fVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IEhpdFRlc3QgZnJvbSBcIi4vSGl0VGVzdFwiO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuaW1wb3J0IHtJTGV2ZWwsIElMZXZlbEJvcmRlcnMsIElTdGFnZX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IENvbGxlY3RpYmxlIGZyb20gXCIuL0NvbGxlY3RpYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNb3ZlciB7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSE9SSVpPTlRBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBWRVJUSUNBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyO1xyXG5cdHByaXZhdGUgX3BsYXllckNlbnRlclg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX3BsYXllckNlbnRlclk6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2Jsb2NrczpCbG9ja1tdO1xyXG5cdHByaXZhdGUgX2NvbGxlY3RpYmxlczpDb2xsZWN0aWJsZVtdO1xyXG5cdHByaXZhdGUgX3N0YWdlOklTdGFnZTtcclxuXHRwcml2YXRlIF9ib3JkZXJzOklMZXZlbEJvcmRlcnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfc2V0TGV2ZWxDYWxsYmFjazoobGV2ZWw6bnVtYmVyKSA9PiBJTGV2ZWwsXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TGV2ZWxEYXRhKFxyXG5cdFx0cGxheWVyOlBsYXllcixcclxuXHRcdGJsb2NrczpCbG9ja1tdLFxyXG5cdFx0Y29sbGVjdGlibGVzOkNvbGxlY3RpYmxlW10sXHJcblx0XHRzdGFnZTpJU3RhZ2UsXHJcblx0XHRib3JkZXJzOklMZXZlbEJvcmRlcnMsXHJcblx0KSB7XHJcblx0XHR0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLl9wbGF5ZXJDZW50ZXJYID0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uQ2VudGVyWCgpIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0dGhpcy5fcGxheWVyQ2VudGVyWSA9IHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkNlbnRlclkoKSArIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cdFx0dGhpcy5fYmxvY2tzID0gYmxvY2tzO1xyXG5cdFx0dGhpcy5fY29sbGVjdGlibGVzID0gY29sbGVjdGlibGVzO1xyXG5cdFx0dGhpcy5fc3RhZ2UgPSBzdGFnZTtcclxuXHRcdHRoaXMuX2JvcmRlcnMgPSBib3JkZXJzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlZnJlc2goKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkgIT09IDApIHtcclxuXHRcdFx0dGhpcy5tb3ZlKFxyXG5cdFx0XHRcdFBsYXllck1vdmVyLkhPUklaT05UQUwsXHJcblx0XHRcdFx0dGhpcy5fcGxheWVyLmdldFNwZWVkWCgpLFxyXG5cdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFgoMClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSAhPT0gMCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIub25UaGVGbG9vciA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm1vdmUoXHJcblx0XHRcdFx0UGxheWVyTW92ZXIuVkVSVElDQUwsXHJcblx0XHRcdFx0dGhpcy5fcGxheWVyLmdldFNwZWVkWSgpLFxyXG5cdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCkgPiAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3BsYXllci5vblRoZUZsb29yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFkoMCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZShcclxuXHRcdGRpcmVjdGlvbjpzeW1ib2wsXHJcblx0XHRzcGVlZDpudW1iZXIsXHJcblx0XHRvbkxpbWl0UG9zaXRpb246KCkgPT4gdm9pZCA9IG51bGwsXHJcblx0KTp2b2lkIHtcclxuXHRcdGxldCBsaW1pdFBvc2l0aW9uOm51bWJlciA9IG51bGw7XHJcblx0XHRsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihkaXJlY3Rpb24pO1xyXG5cdFx0bGV0IHRhcmdldFBvc2l0aW9uOm51bWJlciA9IE1hdGguZmxvb3IodGhpcy5nZXRQb3NpdGlvbihkaXJlY3Rpb24pICsgc3BlZWQpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goKGJsb2NrOkJsb2NrKSA9PiB7XHJcblx0XHRcdGxldCBibG9ja0xpbWl0UG9zaXRpb246bnVtYmVyID0gdGhpcy5jYWxjdWxhdGVMaW1pdFBvc2l0aW9uKGJsb2NrLCBkaXJlY3Rpb24sIHNwZWVkKTtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA8PSBibG9ja0xpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdHRhcmdldFBvc2l0aW9uID4gYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGJsb2NrKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0bGltaXRQb3NpdGlvbiA9IGxpbWl0UG9zaXRpb24gIT09IG51bGwgPyBNYXRoLm1pbihsaW1pdFBvc2l0aW9uLCBibG9ja0xpbWl0UG9zaXRpb24pIDogYmxvY2tMaW1pdFBvc2l0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPj0gYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA8IGJsb2NrTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0dGhpcy5oaXRUZXN0KGRpcmVjdGlvbiwgdGhpcy5fcGxheWVyLCBibG9jaylcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5tYXgobGltaXRQb3NpdGlvbiwgYmxvY2tMaW1pdFBvc2l0aW9uKSA6IGJsb2NrTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBwcm9jZXNzZWRUYXJnZXRQb3NpdGlvbiA9IGxpbWl0UG9zaXRpb24gIT0gbnVsbCA/IGxpbWl0UG9zaXRpb24gOiB0YXJnZXRQb3NpdGlvbjtcclxuXHRcdGxldCBzdGFnZUxpbWl0UG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVN0YWdlTGltaXRQb3NpdGlvbihkaXJlY3Rpb24sIHNwZWVkLCB0aGlzLl9zdGFnZSk7XHJcblx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPD0gc3RhZ2VMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0cHJvY2Vzc2VkVGFyZ2V0UG9zaXRpb24gPiBzdGFnZUxpbWl0UG9zaXRpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0bGV0IGJvcmRlciA9IHRoaXMuZ2V0Qm9yZGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChib3JkZXIgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByb2Nlc3NCb3JkZXIoYm9yZGVyLCBkaXJlY3Rpb24sIHNwZWVkLCBwcm9jZXNzZWRUYXJnZXRQb3NpdGlvbik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5taW4obGltaXRQb3NpdGlvbiwgc3RhZ2VMaW1pdFBvc2l0aW9uKSA6IHN0YWdlTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPj0gc3RhZ2VMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0cHJvY2Vzc2VkVGFyZ2V0UG9zaXRpb24gPCBzdGFnZUxpbWl0UG9zaXRpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0bGV0IGJvcmRlciA9IHRoaXMuZ2V0Qm9yZGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChib3JkZXIgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByb2Nlc3NCb3JkZXIoYm9yZGVyLCBkaXJlY3Rpb24sIHNwZWVkLCBwcm9jZXNzZWRUYXJnZXRQb3NpdGlvbik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5tYXgobGltaXRQb3NpdGlvbiwgc3RhZ2VMaW1pdFBvc2l0aW9uKSA6IHN0YWdlTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGltaXRQb3NpdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnNldFBvc2l0aW9uKGRpcmVjdGlvbiwgbGltaXRQb3NpdGlvbik7XHJcblx0XHRcdGlmIChvbkxpbWl0UG9zaXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRvbkxpbWl0UG9zaXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIHRhcmdldFBvc2l0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9jb2xsZWN0aWJsZXMuZm9yRWFjaCgoY29sbGVjdGlibGU6Q29sbGVjdGlibGUpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuaGl0VGVzdChkaXJlY3Rpb24sIHRoaXMuX3BsYXllciwgY29sbGVjdGlibGUpKSB7XHJcblx0XHRcdFx0bGV0IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbjpudW1iZXIgPSB0aGlzLmNhbGN1bGF0ZUxpbWl0UG9zaXRpb24oY29sbGVjdGlibGUsIGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uIDw9IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA+IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGNvbGxlY3RpYmxlKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3RpYmxlLm9uSGl0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID49IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA8IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGNvbGxlY3RpYmxlKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3RpYmxlLm9uSGl0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJvY2Vzc0JvcmRlcihib3JkZXI6bnVtYmVyLCBkaXJlY3Rpb246c3ltYm9sLCBzcGVlZDpudW1iZXIsIHRhcmdldFBvc2l0aW9uOm51bWJlcik6dm9pZCB7XHJcblx0XHRsZXQgbmV3U3RhZ2UgPSB0aGlzLl9zZXRMZXZlbENhbGxiYWNrKGJvcmRlcikuc3RhZ2U7XHJcblx0XHRsZXQgc3RhZ2VMaW1pdFBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVTdGFnZUxpbWl0UG9zaXRpb24oZGlyZWN0aW9uLCBzcGVlZCwgdGhpcy5fc3RhZ2UpO1xyXG5cdFx0bGV0IGV4Y2Vzc0Rpc3RhbmNlID0gTWF0aC5hYnModGFyZ2V0UG9zaXRpb24gLSBzdGFnZUxpbWl0UG9zaXRpb24pIC0gMTtcclxuXHRcdGxldCBuZXh0UGxheWVyUG9zaXRpb246bnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQbGF5ZXJQb3NpdGlvbkZvclRoZU5leHRMZXZlbChkaXJlY3Rpb24sIHNwZWVkLCBuZXdTdGFnZSwgZXhjZXNzRGlzdGFuY2UpO1xyXG5cdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIG5leHRQbGF5ZXJQb3NpdGlvbik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZVBsYXllclBvc2l0aW9uRm9yVGhlTmV4dExldmVsKFxyXG5cdFx0ZGlyZWN0aW9uOnN5bWJvbCxcclxuXHRcdHNwZWVkOm51bWJlcixcclxuXHRcdHN0YWdlOklTdGFnZSxcclxuXHRcdGV4Y2Vzc0Rpc3RhbmNlOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGxldCBvcHBvc2l0ZUxpbWl0Om51bWJlciA9IHRoaXMuY2FsY3VsYXRlU3RhZ2VMaW1pdFBvc2l0aW9uKGRpcmVjdGlvbiwgc3BlZWQgKiAtMSwgc3RhZ2UpO1xyXG5cdFx0aWYgKGRpcmVjdGlvbiA9PSBQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMKSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCArIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvcHBvc2l0ZUxpbWl0IC0gZXhjZXNzRGlzdGFuY2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCArIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvcHBvc2l0ZUxpbWl0IC0gZXhjZXNzRGlzdGFuY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Qm9yZGVyKGRpcmVjdGlvbjpzeW1ib2wsIHNwZWVkOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gKHNwZWVkID4gMCkgPyB0aGlzLl9ib3JkZXJzLnJpZ2h0IDogdGhpcy5fYm9yZGVycy5sZWZ0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIChzcGVlZCA+IDApID8gdGhpcy5fYm9yZGVycy5ib3R0b20gOiB0aGlzLl9ib3JkZXJzLnRvcDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCwgdmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIueCA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnkgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCk6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLng7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLnk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZUxpbWl0UG9zaXRpb24oY29sbGlzaW9uT2JqZWN0OkNvbGxpc2lvbk9iamVjdCwgZGlyZWN0aW9uOnN5bWJvbCwgc3BlZWQ6bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0aWYgKGRpcmVjdGlvbiA9PSBQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMKSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gY29sbGlzaW9uT2JqZWN0LmNvbGxpc2lvbkxlZnQoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblJpZ2h0KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25SaWdodCgpIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25Ub3AoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkJvdHRvbSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uQm90dG9tKCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxjdWxhdGVTdGFnZUxpbWl0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCwgc3BlZWQ6bnVtYmVyLCBzdGFnZTpJU3RhZ2UpOm51bWJlciB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdHJldHVybiBzdGFnZS53aWR0aCAtIHRoaXMuX3BsYXllckNlbnRlclg7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIC10aGlzLl9wbGF5ZXJDZW50ZXJYO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YWdlLmhlaWdodCAtIHRoaXMuX3BsYXllckNlbnRlclk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIC10aGlzLl9wbGF5ZXJDZW50ZXJZO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhpdFRlc3QoZGlyZWN0aW9uOnN5bWJvbCwgb2JqZWN0MTpDb2xsaXNpb25PYmplY3QsIG9iamVjdDI6Q29sbGlzaW9uT2JqZWN0KTpib29sZWFuIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gSGl0VGVzdC52ZXJ0aWNhbChvYmplY3QxLCBvYmplY3QyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBIaXRUZXN0Lmhvcml6b250YWwob2JqZWN0MSwgb2JqZWN0Mik7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtJTGV2ZWwsIElMZXZlbHNNZXRhZGF0YX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsc01hbmFnZXIge1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9sZXZlbEJ5SWQ6TWFwPG51bWJlciwgSUxldmVsPiA9IG5ldyBNYXA8bnVtYmVyLCBJTGV2ZWw+KCk7XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2xldmVsc01ldGFkYXRhOklMZXZlbHNNZXRhZGF0YTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBhZGRMZXZlbChsZXZlbERhdGE6SUxldmVsKTp2b2lkIHtcclxuXHRcdExldmVsc01hbmFnZXIuX2xldmVsQnlJZC5zZXQobGV2ZWxEYXRhLmlkLCBsZXZlbERhdGEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhZGRMZXZlbHNNZXRhZGF0YShtZXRhZGF0YTpJTGV2ZWxzTWV0YWRhdGEpOnZvaWQge1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5fbGV2ZWxzTWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0TGV2ZWwobGV2ZWxJZDpudW1iZXIpOklMZXZlbCB7XHJcblx0XHRyZXR1cm4gTGV2ZWxzTWFuYWdlci5fbGV2ZWxCeUlkLmdldChsZXZlbElkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0TGV2ZWxzTWV0YWRhdGEoKTpJTGV2ZWxzTWV0YWRhdGEge1xyXG5cdFx0cmV0dXJuIExldmVsc01hbmFnZXIuX2xldmVsc01ldGFkYXRhO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0UmVxdWVzdCB7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3N1Y2Nlc3NSZXF1ZXN0c0lkczpTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0czpNYXA8c3RyaW5nLCBBYnN0cmFjdFJlcXVlc3Q+ID0gbmV3IE1hcDxzdHJpbmcsIEFic3RyYWN0UmVxdWVzdD4oKTtcclxuXHJcblx0cHJvdGVjdGVkIF9yZXF1ZXN0SWQ6c3RyaW5nID0gbnVsbDtcclxuXHRwcml2YXRlIF9yZXF1ZXN0UHJvbWlzZTpQcm9taXNlPHZvaWQ+O1xyXG5cclxuXHRwdWJsaWMgY3JlYXRlUHJvbWlzZShmb3JjZWRSZXF1ZXN0OmJvb2xlYW4gPSBmYWxzZSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRpZiAodGhpcy5fcmVxdWVzdElkICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChmb3JjZWRSZXF1ZXN0KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlVW5pcXVlUmVxdWVzdFByb21pc2UoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoQWJzdHJhY3RSZXF1ZXN0Ll9zdWNjZXNzUmVxdWVzdHNJZHMuaGFzKHRoaXMuX3JlcXVlc3RJZCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVtcHR5UHJvbWlzZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zdCB1bmlxdWVSZXF1ZXN0OkFic3RyYWN0UmVxdWVzdCA9IEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuZ2V0KHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRpZiAodW5pcXVlUmVxdWVzdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVXYWl0UHJvbWlzZSh1bmlxdWVSZXF1ZXN0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVVuaXF1ZVJlcXVlc3RQcm9taXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0UHJvbWlzZUZhY3RvcnkoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRSZXF1ZXN0UHJvbWlzZSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3RQcm9taXNlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVFbXB0eVByb21pc2UoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRyZXNvbHZlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlV2FpdFByb21pc2UodW5pcXVlUmVxdWVzdDpBYnN0cmFjdFJlcXVlc3QpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dW5pcXVlUmVxdWVzdC5nZXRSZXF1ZXN0UHJvbWlzZSgpXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxyXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiByZWplY3QoKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlVW5pcXVlUmVxdWVzdFByb21pc2UoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuc2V0KHRoaXMuX3JlcXVlc3RJZCwgdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXF1ZXN0UHJvbWlzZSA9IHRoaXMucmVxdWVzdFByb21pc2VGYWN0b3J5KCk7XHJcblx0XHRcdHRoaXMuX3JlcXVlc3RQcm9taXNlXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0QWJzdHJhY3RSZXF1ZXN0Ll9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0cy5kZWxldGUodGhpcy5fcmVxdWVzdElkKTtcclxuXHRcdFx0XHRcdEFic3RyYWN0UmVxdWVzdC5fc3VjY2Vzc1JlcXVlc3RzSWRzLmFkZCh0aGlzLl9yZXF1ZXN0SWQpO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuZGVsZXRlKHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRyZWplY3QoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHJlcXVlc3RQcm9taXNlRmFjdG9yeSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59IiwiaW1wb3J0IExvYWRlciA9IFBJWEkubG9hZGVycy5Mb2FkZXI7XHJcbmltcG9ydCBNaW5pU2lnbmFsQmluZGluZyA9IFBJWEkuTWluaVNpZ25hbEJpbmRpbmc7XHJcbmltcG9ydCBMb2FkZXJPcHRpb25zID0gUElYSS5sb2FkZXJzLkxvYWRlck9wdGlvbnM7XHJcbmltcG9ydCBSZXNvdXJjZSA9IFBJWEkubG9hZGVycy5SZXNvdXJjZTtcclxuaW1wb3J0IEFic3RyYWN0UmVxdWVzdCBmcm9tIFwiLi9BYnN0cmFjdFJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpeGlSZXF1ZXN0IGV4dGVuZHMgQWJzdHJhY3RSZXF1ZXN0IHtcclxuXHRwcml2YXRlIF9yZXN1bHQ6YW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3VybDpzdHJpbmcsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fcmVxdWVzdElkID0gXCJQaXhpUmVxdWVzdDo6XCIgKyB0aGlzLl91cmw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UmVzdWx0KCk6YW55IHtcclxuXHRcdHJldHVybiB0aGlzLl9yZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVxdWVzdFByb21pc2VGYWN0b3J5KCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBsb2FkZXI6TG9hZGVyID0gbmV3IExvYWRlcigpO1xyXG5cclxuXHRcdFx0bGV0IHN1Y2Nlc3M6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRjb25zdCBvbkxvYWRTaWduYWw6TWluaVNpZ25hbEJpbmRpbmcgPSBsb2FkZXIub25Mb2FkLmFkZCgoKSA9PiB7XHJcblx0XHRcdFx0c3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bGV0IGVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0bGV0IGVycm9yTWVzc2FnZTpzdHJpbmc7XHJcblx0XHRcdGNvbnN0IG9uRXJyb3JTaWduYWw6TWluaVNpZ25hbEJpbmRpbmcgPSBsb2FkZXIub25FcnJvci5hZGQoKGRhdGE6YW55KSA9PiB7XHJcblx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdGVycm9yTWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsZXQgb25Db21wbGV0ZVNpZ25hbDpNaW5pU2lnbmFsQmluZGluZztcclxuXHRcdFx0b25Db21wbGV0ZVNpZ25hbCA9IGxvYWRlci5vbkNvbXBsZXRlLmFkZCgoKSA9PiB7XHJcblx0XHRcdFx0b25Mb2FkU2lnbmFsLmRldGFjaCgpO1xyXG5cdFx0XHRcdG9uRXJyb3JTaWduYWwuZGV0YWNoKCk7XHJcblx0XHRcdFx0b25Db21wbGV0ZVNpZ25hbC5kZXRhY2goKTtcclxuXHRcdFx0XHRpZiAoc3VjY2VzcyAmJiAhZXJyb3IpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc3VsdCA9IGxvYWRlci5yZXNvdXJjZXNbdGhpcy5fdXJsXT8uZGF0YTtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgcmVzb3VyY2U6XCIsIGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRyZWplY3QoZXJyb3JNZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9hZGVyT3B0aW9uczpMb2FkZXJPcHRpb25zID0ge307XHJcblx0XHRcdGxvYWRlck9wdGlvbnMuY3Jvc3NPcmlnaW4gPSBmYWxzZTtcclxuXHRcdFx0bG9hZGVyT3B0aW9ucy5sb2FkVHlwZSA9IFJlc291cmNlLkxPQURfVFlQRS5YSFI7XHJcblxyXG5cdFx0XHRsb2FkZXIuYWRkKHRoaXMuX3VybCwgdGhpcy5fdXJsLCBsb2FkZXJPcHRpb25zKTtcclxuXHRcdFx0bG9hZGVyLmxvYWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9taXNlc0dyb3VwIHtcclxuXHRwdWJsaWMgc3RhdGljIHBhY2soZmFjdG9yaWVzOigoKSA9PiBQcm9taXNlPHZvaWQ+KVtdKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRsZXQgY29tcGxldGVkQ291bnRlcjpudW1iZXIgPSAwO1xyXG5cdFx0XHRmYWN0b3JpZXMuZm9yRWFjaCgoZmFjdG9yeTooKSA9PiBQcm9taXNlPHZvaWQ+KSA9PiB7XHJcblx0XHRcdFx0ZmFjdG9yeSgpXHJcblx0XHRcdFx0XHQuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlZENvdW50ZXIrKztcclxuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRlZENvdW50ZXIgPT0gZmFjdG9yaWVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHF1ZXVlKGZhY3RvcmllczooKCkgPT4gUHJvbWlzZTx2b2lkPilbXSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgY29tcGxldGVkQ291bnRlcjpudW1iZXIgPSAwO1xyXG5cdFx0XHRjcmVhdGVQcm9taXNlKCk7XHJcblx0XHRcdGZ1bmN0aW9uIGNyZWF0ZVByb21pc2UoKTp2b2lkIHtcclxuXHRcdFx0XHRmYWN0b3JpZXNbY29tcGxldGVkQ291bnRlcl0oKVxyXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZWRDb3VudGVyKys7XHJcblx0XHRcdFx0XHRcdGlmIChjb21wbGV0ZWRDb3VudGVyIDwgZmFjdG9yaWVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVByb21pc2UoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZWplY3QoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb20ge1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoUmFuZG9tLmdlbk51bWJlcihtaW4sIG1heCArIDEpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuTnVtYmVyKG1pbjpudW1iZXIsIG1heDpudW1iZXIpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5TdHIobGVuZ3RoOm51bWJlcik6c3RyaW5nIHtcclxuXHRcdGNvbnN0IGNoYXJzOnN0cmluZ1tdID0gW1xyXG5cdFx0XHRcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIixcclxuXHRcdFx0XCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJtXCIsXHJcblx0XHRcdFwiblwiLCBcIm9cIiwgXCJwXCIsIFwicVwiLCBcInJcIiwgXCJzXCIsIFwidFwiLCBcInVcIiwgXCJ2XCIsIFwid1wiLCBcInhcIiwgXCJ5XCIsIFwielwiLFxyXG5cdFx0XHRcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIiwgXCJLXCIsIFwiTFwiLCBcIk1cIixcclxuXHRcdFx0XCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsIFwiUlwiLCBcIlNcIiwgXCJUXCIsIFwiVVwiLCBcIlZcIiwgXCJXXCIsIFwiWFwiLCBcIllcIiwgXCJaXCIsXHJcblx0XHRdO1xyXG5cdFx0bGV0IHJlc3VsdDpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzdWx0ICs9IFJhbmRvbS5jaG9vc2UuYXBwbHkoUmFuZG9tLCBjaGFycyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5Cb29sZWFuKCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gUmFuZG9tLmNob29zZSh0cnVlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdlbkNvbG9yKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBSYW5kb20uZ2VuSW50ZWdlcigweDAwMDAwMCwgMHhmZmZmZmYpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBjaG9vc2UoLi4uYXJnczphbnlbXSk6YW55IHtcclxuXHRcdHJldHVybiBhcmdzW1JhbmRvbS5nZW5JbnRlZ2VyKDAsIGFyZ3MubGVuZ3RoIC0gMSldO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dFdmVudHMge1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTSVpFOnN0cmluZyA9IFwicmVzaXplXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBLRVlfRE9XTjpzdHJpbmcgPSBcImtleWRvd25cIjtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtFWV9VUDpzdHJpbmcgPSBcImtleXVwXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBGT0NVU19PVVQ6c3RyaW5nID0gXCJibHVyXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkKHR5cGU6c3RyaW5nLCBjYWxsYmFjazooLi4ucGFyYW1zOmFueVtdKSA9PiB2b2lkKTooLi4ucGFyYW1zOmFueVtdKSA9PiB2b2lkIHtcclxuXHRcdGNvbnN0IHc6YW55ID0gd2luZG93O1xyXG5cdFx0aWYgKHcuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHR3LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblx0XHR9IGVsc2UgaWYgKHcuYXR0YWNoRXZlbnQpIHtcclxuXHRcdFx0dy5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBjYWxsYmFjayk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3W1wib25cIiArIHR5cGVdID0gY2FsbGJhY2s7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FsbGJhY2s7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZSh0eXBlOnN0cmluZywgY2FsbGJhY2s6KC4uLnBhcmFtczphbnlbXSkgPT4gdm9pZCkge1xyXG5cdFx0Y29uc3QgdzphbnkgPSB3aW5kb3c7XHJcblx0XHRpZiAody5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcblx0XHRcdHcucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmICh3LmRldGFjaEV2ZW50KSB7XHJcblx0XHRcdHcuZGV0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d1tcIm9uXCIgKyB0eXBlXSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==