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
                factories.push(function () {
                  return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](_level_Player__WEBPACK_IMPORTED_MODULE_1__["default"].SKIN_NAME).createPromise();
                });
                factories.push(function () {
                  return new _promises_PixiRequest__WEBPACK_IMPORTED_MODULE_4__["default"](_level_Player__WEBPACK_IMPORTED_MODULE_1__["default"].WINNER_SKIN_NAME).createPromise();
                });
                return _context2.abrupt("return", _promises_PromisesGroup__WEBPACK_IMPORTED_MODULE_5__["default"].pack(factories));

              case 7:
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
            var selectedBlockData = Object.assign({}, this._selectedBlock.getData());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWUvLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9NYWluQ29udGFpbmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvVmlldy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2NvbnN0cy9LZXlib2FyZENvZGVzLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvY29uc3RzL1BvaW50ZXJFdmVudHMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9CbG9jay50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0NvbGxlY3RpYmxlLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvQ29sbGlzaW9uT2JqZWN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbGV2ZWwvQ29sbGlzaW9uT2JqZWN0c1NvcnRlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL0hpdFRlc3QudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9sZXZlbC9MZXZlbC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL1BsYXllci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2xldmVsL1BsYXllck1vdmVyLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvbW9kZWwvTGV2ZWxzTWFuYWdlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL0Fic3RyYWN0UmVxdWVzdC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3Byb21pc2VzL1BpeGlSZXF1ZXN0LnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvcHJvbWlzZXMvUHJvbWlzZXNHcm91cC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3V0aWxzL1JhbmRvbS50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3V0aWxzL1dpbmRv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LElBQUksQ0FBQyxDQUFDLFdBQU4sRUFBbUI7QUFDekIsU0FBQyxDQUFDLFdBQUYsQ0FBYyxPQUFPLElBQXJCLEVBQTJCLFFBQTNCO0FBQ0EsT0FGTSxNQUVBO0FBQ04sU0FBQyxDQUFDLE9BQU8sSUFBUixDQUFELEdBQWlCLElBQWpCO0FBQ0E7QUFDRDs7Ozs7OztBQTFCc0Isc0JBQWdCLFFBQWhCO0FBQ0Esd0JBQWtCLFNBQWxCO0FBQ0Esc0JBQWdCLE9BQWhCO0FBQ0EseUJBQW1CLE1BQW5CLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL01haW4udHNcIik7XG4iLCJpbXBvcnQgQXBwbGljYXRpb24gPSBQSVhJLkFwcGxpY2F0aW9uO1xyXG5pbXBvcnQgRXZlbnRFbWl0dGVyID0gUElYSS51dGlscy5FdmVudEVtaXR0ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxzIHtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9ERVZFTE9QRVJfTU9ERV9FVkVOVDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBwaXhpQXBwOkFwcGxpY2F0aW9uO1xyXG5cdHByaXZhdGUgc3RhdGljIF9kZXZlbG9wZXJNb2RlOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIHN0YXRpYyBfZW1pdHRlcjpFdmVudEVtaXR0ZXI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc2V0RGV2ZWxvcGVyTW9kZSh2YWx1ZTpib29sZWFuKTp2b2lkIHtcclxuXHRcdEdsb2JhbHMuX2RldmVsb3Blck1vZGUgPSB2YWx1ZTtcclxuXHRcdEdsb2JhbHMuZ2V0RW1pdHRlcigpLmVtaXQoR2xvYmFscy5DSEFOR0VfREVWRUxPUEVSX01PREVfRVZFTlQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXREZXZlbG9wZXJNb2RlKCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gR2xvYmFscy5fZGV2ZWxvcGVyTW9kZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RW1pdHRlcigpOkV2ZW50RW1pdHRlciB7XHJcblx0XHRpZiAoIUdsb2JhbHMuX2VtaXR0ZXIpIHtcclxuXHRcdFx0R2xvYmFscy5fZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBHbG9iYWxzLl9lbWl0dGVyO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUmVjdGFuZ2xlID0gUElYSS5SZWN0YW5nbGU7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4vTWFpbkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgR3JhcGhpY3MgPSBQSVhJLkdyYXBoaWNzO1xyXG5pbXBvcnQgV2luZG93RXZlbnRzIGZyb20gXCIuL3V0aWxzL1dpbmRvd0V2ZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4ge1xyXG5cdHByaXZhdGUgX3dpbmRvd1NpemU6UmVjdGFuZ2xlO1xyXG5cdHByaXZhdGUgX21haW5Db250YWluZXI6TWFpbkNvbnRhaW5lcjtcclxuXHRwcml2YXRlIF9vdXRPZkJvdW5kc0NvdmVyOkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgX2Z1bGxMZXZlbDpib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW52YXNJZDpzdHJpbmcpIHtcclxuXHRcdHRoaXMuaW5pdGlhbGl6ZShjYW52YXNJZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRpYWxpemUoY2FudmFzSWQ6c3RyaW5nKTp2b2lkIHtcclxuXHRcdHRoaXMuY3JlYXRlUGl4aUFwcChjYW52YXNJZCk7XHJcblx0XHR0aGlzLl93aW5kb3dTaXplID0gbmV3IFJlY3RhbmdsZSgpO1xyXG5cdFx0dGhpcy5pbml0TWFpbkNvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5pbml0T3V0T2ZCb3VuZHNDb3ZlcigpO1xyXG5cdFx0V2luZG93RXZlbnRzLmFkZChXaW5kb3dFdmVudHMuUkVTSVpFLCAoKSA9PiB7IHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyB9KTtcclxuXHRcdHRoaXMucmVmcmVzaFNpemUoKTtcclxuXHRcdHRoaXMucHJpbnRXZWxjb21lTWVzc2FnZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0TWFpbkNvbnRhaW5lcigpOnZvaWQge1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lciA9IG5ldyBNYWluQ29udGFpbmVyKCk7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnNob3dWaWV3QmFja2dyb3VuZCgweDJiMmQzMCwgMSk7XHJcblx0XHR0aGlzLl9tYWluQ29udGFpbmVyLnNldENoYW5nZUNhbWVyYUNhbGxiYWNrKChsZXZlbFdpZHRoOm51bWJlciwgbGV2ZWxIZWlnaHQ6bnVtYmVyKSA9PiB7XHJcblx0XHRcdHRoaXMuY2hhbmdlQ2FtZXJhQ2FsbGJhY2sobGV2ZWxXaWR0aCwgbGV2ZWxIZWlnaHQpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNldERlZmF1bHRNYWluQ29udGFpbmVyU2l6ZSgpO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX21haW5Db250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGFuZ2VDYW1lcmFDYWxsYmFjayhsZXZlbFdpZHRoOm51bWJlciwgbGV2ZWxIZWlnaHQ6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuX2Z1bGxMZXZlbCA9ICF0aGlzLl9mdWxsTGV2ZWw7XHJcblx0XHRpZiAodGhpcy5fZnVsbExldmVsKSB7XHJcblx0XHRcdHRoaXMuX21haW5Db250YWluZXIuc2V0U2l6ZShsZXZlbFdpZHRoLCBsZXZlbEhlaWdodCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNldERlZmF1bHRNYWluQ29udGFpbmVyU2l6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hbGlnbk1haW5Db250YWluZXIoKTtcclxuXHRcdHRoaXMuYWxpZ25PdXRPZkJvdW5kc0NvdmVyKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldERlZmF1bHRNYWluQ29udGFpbmVyU2l6ZSgpOnZvaWQge1xyXG5cdFx0Y29uc3QgbWFpbkNvbnRhaW5lckRlZmF1bHRXaWR0aCA9IDEyNzA7XHJcblx0XHRjb25zdCBtYWluQ29udGFpbmVyRGVmYXVsdEhlaWdodDogbnVtYmVyID0gNzIwO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci5zZXRTaXplKG1haW5Db250YWluZXJEZWZhdWx0V2lkdGgsIG1haW5Db250YWluZXJEZWZhdWx0SGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdE91dE9mQm91bmRzQ292ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIgPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdEdsb2JhbHMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLl9vdXRPZkJvdW5kc0NvdmVyKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlUGl4aUFwcChjYW52YXNJZDpzdHJpbmcpOnZvaWQge1xyXG5cdFx0Y29uc3QgYXBwQ29uZmlnOlBJWEkuQXBwbGljYXRpb25PcHRpb25zID0ge1xyXG5cdFx0XHRhbnRpYWxpYXM6dHJ1ZSxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOjB4ZmZmZmZmLFxyXG5cdFx0XHR2aWV3OmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcclxuXHRcdFx0Ly8gcm91bmRpbmcgcmVzb2x1dGlvbiBmb3IgZXNjYXBlIHRyb3VibGVzIHdpdGggaW52aXNpYmxlIGZvbnRzIG9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzXHJcblx0XHRcdHJlc29sdXRpb246KChkZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDwgMikgPyAxIDogMixcclxuXHRcdH07XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbihhcHBDb25maWcpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcmludFdlbGNvbWVNZXNzYWdlKCk6dm9pZCB7XHJcblx0XHRsZXQgd2VsY29tZVN0cmluZzpzdHJpbmcgPSBwcm9jZXNzLmVudi5QUk9KRUNUX05BTUUgKyBcIiBcIiArIHByb2Nlc3MuZW52LlBST0pFQ1RfVkVSU0lPTjtcclxuXHRcdHdlbGNvbWVTdHJpbmcgKz0gXCJcXG5EZXZlbG9wZWQgYnkgwqtcIiArIHByb2Nlc3MuZW52LlBST0pFQ1RfQVVUSE9SICsgXCLCu1wiO1xyXG5cdFx0Y29uc29sZS5sb2cod2VsY29tZVN0cmluZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMucmVmcmVzaFNpemUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaFNpemUoKTp2b2lkIHtcclxuXHRcdHRoaXMucmVmcmVzaFdpbmRvd1NpemUoKTtcclxuXHRcdHRoaXMuYWxpZ25QaXhpQXBwKCk7XHJcblx0XHR0aGlzLmFsaWduTWFpbkNvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5hbGlnbk91dE9mQm91bmRzQ292ZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaFdpbmRvd1NpemUoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3dpbmRvd1NpemUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhbGlnblBpeGlBcHAoKTp2b2lkIHtcclxuXHRcdEdsb2JhbHMucGl4aUFwcC5yZW5kZXJlci52aWV3LnN0eWxlLndpZHRoID0gdGhpcy5fd2luZG93U2l6ZS53aWR0aCArIFwicHhcIjtcclxuXHRcdEdsb2JhbHMucGl4aUFwcC5yZW5kZXJlci52aWV3LnN0eWxlLmhlaWdodCA9IHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0ICsgXCJweFwiO1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnJlbmRlcmVyLnJlc2l6ZSh0aGlzLl93aW5kb3dTaXplLndpZHRoLCB0aGlzLl93aW5kb3dTaXplLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFsaWduTWFpbkNvbnRhaW5lcigpOnZvaWQge1xyXG5cdFx0Y29uc3Qgc2NhbGVCeVdpZHRoOm51bWJlciA9IHRoaXMuX3dpbmRvd1NpemUud2lkdGggLyB0aGlzLl9tYWluQ29udGFpbmVyLnc7XHJcblx0XHRjb25zdCBzY2FsZUJ5SGVpZ2h0Om51bWJlciA9IHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0IC8gdGhpcy5fbWFpbkNvbnRhaW5lci5oO1xyXG5cdFx0Y29uc3Qgc2NhbGU6bnVtYmVyID0gTWF0aC5taW4oc2NhbGVCeVdpZHRoLCBzY2FsZUJ5SGVpZ2h0KTtcclxuXHRcdHRoaXMuX21haW5Db250YWluZXIuc2NhbGUueCA9IHRoaXMuX21haW5Db250YWluZXIuc2NhbGUueSA9IHNjYWxlO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci54ID0gTWF0aC5yb3VuZCgodGhpcy5fd2luZG93U2l6ZS53aWR0aCAtIHRoaXMuX21haW5Db250YWluZXIudyAqIHNjYWxlKSAvIDIpO1xyXG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lci55ID0gTWF0aC5yb3VuZCgodGhpcy5fd2luZG93U2l6ZS5oZWlnaHQgLSB0aGlzLl9tYWluQ29udGFpbmVyLmggKiBzY2FsZSkgLyAyKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWxpZ25PdXRPZkJvdW5kc0NvdmVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmNsZWFyKCk7XHJcblx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmJlZ2luRmlsbCgweDAwMDAwMCk7XHJcblx0XHRpZiAodGhpcy5fbWFpbkNvbnRhaW5lci5oICogdGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS55IDwgdGhpcy5fd2luZG93U2l6ZS5oZWlnaHQpIHtcclxuXHRcdFx0Y29uc3QgY292ZXJIZWlnaHQ6bnVtYmVyID0gdGhpcy5fbWFpbkNvbnRhaW5lci55O1xyXG5cdFx0XHR0aGlzLl9vdXRPZkJvdW5kc0NvdmVyLmRyYXdSZWN0KDAsIDAsIHRoaXMuX3dpbmRvd1NpemUud2lkdGgsIGNvdmVySGVpZ2h0KTtcclxuXHRcdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3Zlci5kcmF3UmVjdChcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0IC0gY292ZXJIZWlnaHQsXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS53aWR0aCwgY292ZXJIZWlnaHQsXHJcblx0XHRcdClcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5fbWFpbkNvbnRhaW5lci53ICogdGhpcy5fbWFpbkNvbnRhaW5lci5zY2FsZS54IDwgdGhpcy5fd2luZG93U2l6ZS53aWR0aCkge1xyXG5cdFx0XHRjb25zdCBjb3ZlcldpZHRoOm51bWJlciA9IHRoaXMuX21haW5Db250YWluZXIueDtcclxuXHRcdFx0dGhpcy5fb3V0T2ZCb3VuZHNDb3Zlci5kcmF3UmVjdCgwLCAwLCBjb3ZlcldpZHRoLCB0aGlzLl93aW5kb3dTaXplLmhlaWdodCk7XHJcblx0XHRcdHRoaXMuX291dE9mQm91bmRzQ292ZXIuZHJhd1JlY3QoXHJcblx0XHRcdFx0dGhpcy5fd2luZG93U2l6ZS53aWR0aCAtIGNvdmVyV2lkdGgsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHRjb3ZlcldpZHRoLFxyXG5cdFx0XHRcdHRoaXMuX3dpbmRvd1NpemUuaGVpZ2h0LFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7Vmlld30gZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2xldmVsL1BsYXllclwiO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWwvTGV2ZWxcIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgUGl4aVJlcXVlc3QgZnJvbSBcIi4vcHJvbWlzZXMvUGl4aVJlcXVlc3RcIjtcclxuaW1wb3J0IFByb21pc2VzR3JvdXAgZnJvbSBcIi4vcHJvbWlzZXMvUHJvbWlzZXNHcm91cFwiO1xyXG5pbXBvcnQgTGV2ZWxzTWFuYWdlciBmcm9tIFwiLi9tb2RlbC9MZXZlbHNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7SUJsb2NrVHlwZSwgSUNvbGxlY3RpYmxlVHlwZSwgSUltYWdlVHlwZSwgSUxldmVsfSBmcm9tIFwiLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7UE9JTlRFUl9ET1dOLCBQT0lOVEVSX01PVkUsIFBPSU5URVJfVVAsIFBPSU5URVJfVVBfT1VUU0lERX0gZnJvbSBcIi4vY29uc3RzL1BvaW50ZXJFdmVudHNcIjtcclxuaW1wb3J0IEludGVyYWN0aW9uRXZlbnQgPSBQSVhJLmludGVyYWN0aW9uLkludGVyYWN0aW9uRXZlbnQ7XHJcbmltcG9ydCBQb2ludCA9IFBJWEkuUG9pbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlldyB7XHJcblx0cHJpdmF0ZSBfbGV2ZWw6TGV2ZWw7XHJcblx0cHJpdmF0ZSBfcGxheWVyOlBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxuXHRwcml2YXRlIF9wb2ludGVyRG93blBvaW50OlBvaW50O1xyXG5cdHByaXZhdGUgX3BvaW50ZXJEb3duTGV2ZWxQb3NpdGlvbjpQb2ludDtcclxuXHRwcml2YXRlIF9jaGFuZ2VDYW1lcmFDYWxsYmFjazoobGV2ZWxXaWR0aDpudW1iZXIsIGxldmVsSGVpZ2h0Om51bWJlcikgPT4gdm9pZDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldENoYW5nZUNhbWVyYUNhbGxiYWNrKGNoYW5nZUNhbWVyYUNhbGxiYWNrOihsZXZlbFdpZHRoOm51bWJlciwgbGV2ZWxIZWlnaHQ6bnVtYmVyKSA9PiB2b2lkKSB7XHJcblx0XHR0aGlzLl9jaGFuZ2VDYW1lcmFDYWxsYmFjayA9IGNoYW5nZUNhbWVyYUNhbGxiYWNrO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluaXQoKTp2b2lkIHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHRcdHRoaXMubG9hZGluZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nKCk6dm9pZCB7XHJcblx0XHRQcm9taXNlc0dyb3VwLnBhY2soW1xyXG5cdFx0XHQoKSA9PiBQcm9taXNlc0dyb3VwLnF1ZXVlKFtcclxuXHRcdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbHNNZXRhZGF0YSgpLFxyXG5cdFx0XHRcdCgpID0+IHRoaXMubG9hZEFsbEltYWdlcygpLFxyXG5cdFx0XHRdKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDFcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWwyXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsM1wiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDRcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw1XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsNlwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDdcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWw4XCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsOVwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJsZXZlbDEwXCIpLFxyXG5cdFx0XHQoKSA9PiB0aGlzLmxvYWRMZXZlbChcImxldmVsMTFcIiksXHJcblx0XHRcdCgpID0+IHRoaXMubG9hZExldmVsKFwibGV2ZWwxMlwiKSxcclxuXHRcdFx0KCkgPT4gdGhpcy5sb2FkTGV2ZWwoXCJib251c1wiKSxcclxuXHRcdF0pXHJcblx0XHRcdC5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBsZXRlTG9hZGluZ0hhbmRsZXIoKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGxvYWRMZXZlbHNNZXRhZGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUGl4aVJlcXVlc3QoXCJsZXZlbHMvbWV0YWRhdGEuanNvblwiKTtcclxuXHRcdGF3YWl0IHJlcXVlc3QuY3JlYXRlUHJvbWlzZSgpO1xyXG5cdFx0Y29uc3QgbGV2ZWxzTWV0YWRhdGEgPSByZXF1ZXN0LmdldFJlc3VsdCgpO1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5hZGRMZXZlbHNNZXRhZGF0YShsZXZlbHNNZXRhZGF0YSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZEFsbEltYWdlcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IGZhY3RvcmllczooKCkgPT4gUHJvbWlzZTxhbnk+KVtdID0gW107XHJcblx0XHRMZXZlbHNNYW5hZ2VyLmdldExldmVsc01ldGFkYXRhKCkuaW1hZ2VzVHlwZXMuZm9yRWFjaCgoaW1hZ2VUeXBlRGF0YTpJSW1hZ2VUeXBlKSA9PiB7XHJcblx0XHRcdGlmIChpbWFnZVR5cGVEYXRhLmltYWdlKSB7XHJcblx0XHRcdFx0ZmFjdG9yaWVzLnB1c2goKCkgPT4gbmV3IFBpeGlSZXF1ZXN0KGltYWdlVHlwZURhdGEuaW1hZ2UpLmNyZWF0ZVByb21pc2UoKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5nZXRMZXZlbHNNZXRhZGF0YSgpLmNvbGxlY3RpYmxlc1R5cGVzLmZvckVhY2goKGNvbGxlY3RpYmxlVHlwZURhdGE6SUNvbGxlY3RpYmxlVHlwZSkgPT4ge1xyXG5cdFx0XHRpZiAoY29sbGVjdGlibGVUeXBlRGF0YS5pbWFnZSkge1xyXG5cdFx0XHRcdGZhY3Rvcmllcy5wdXNoKCgpID0+IG5ldyBQaXhpUmVxdWVzdChjb2xsZWN0aWJsZVR5cGVEYXRhLmltYWdlKS5jcmVhdGVQcm9taXNlKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdExldmVsc01hbmFnZXIuZ2V0TGV2ZWxzTWV0YWRhdGEoKS5ibG9ja1R5cGVzLmZvckVhY2goKHR5cGVUeXBlRGF0YTpJQmxvY2tUeXBlKSA9PiB7XHJcblx0XHRcdGlmICh0eXBlVHlwZURhdGEuaW1hZ2UpIHtcclxuXHRcdFx0XHRmYWN0b3JpZXMucHVzaCgoKSA9PiBuZXcgUGl4aVJlcXVlc3QodHlwZVR5cGVEYXRhLmltYWdlKS5jcmVhdGVQcm9taXNlKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRmYWN0b3JpZXMucHVzaCgoKSA9PiBuZXcgUGl4aVJlcXVlc3QoUGxheWVyLlNLSU5fTkFNRSkuY3JlYXRlUHJvbWlzZSgpKTtcclxuXHRcdGZhY3Rvcmllcy5wdXNoKCgpID0+IG5ldyBQaXhpUmVxdWVzdChQbGF5ZXIuV0lOTkVSX1NLSU5fTkFNRSkuY3JlYXRlUHJvbWlzZSgpKTtcclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZXNHcm91cC5wYWNrKGZhY3Rvcmllcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGxvYWRMZXZlbChmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRjb25zdCByZXF1ZXN0ID0gbmV3IFBpeGlSZXF1ZXN0KFwibGV2ZWxzL1wiICsgZmlsZU5hbWUgKyBcIi5qc29uXCIpO1xyXG5cdFx0YXdhaXQgcmVxdWVzdC5jcmVhdGVQcm9taXNlKCk7XHJcblx0XHRjb25zdCBsZXZlbERhdGEgPSByZXF1ZXN0LmdldFJlc3VsdCgpO1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5hZGRMZXZlbChsZXZlbERhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjb21wbGV0ZUxvYWRpbmdIYW5kbGVyKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9sZXZlbCA9IG5ldyBMZXZlbChcclxuXHRcdFx0dGhpcy5fcGxheWVyLFxyXG5cdFx0XHQobGV2ZWxJZDpudW1iZXIpOklMZXZlbCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0TGV2ZWwobGV2ZWxJZCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRoaXMuX2NoYW5nZUNhbWVyYUNhbGxiYWNrLFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuX2xldmVsLnNob3dWaWV3QmFja2dyb3VuZCgweGZmZmZmZiwgMSk7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2xldmVsKTtcclxuXHJcblx0XHR0aGlzLl9sZXZlbC5pbml0VHlwZXMoKTtcclxuXHRcdHRoaXMuc2V0U3RhcnRMZXZlbEFuZFBsYXllclBvc2l0aW9uKCk7XHJcblx0XHRHbG9iYWxzLmdldEVtaXR0ZXIoKS5hZGRMaXN0ZW5lcihHbG9iYWxzLkNIQU5HRV9ERVZFTE9QRVJfTU9ERV9FVkVOVCwgdGhpcy5jaGFuZ2VEZXZlbG9wZXJNb2RlRXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuXHRcdHRoaXMuX2xldmVsLmxhdW5jaFRpY2tlcigpO1xyXG5cdFx0dGhpcy5sYXVuY2hUaWNrZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0U3RhcnRMZXZlbEFuZFBsYXllclBvc2l0aW9uKCk6dm9pZCB7XHJcblx0XHR0aGlzLnNldExldmVsKDEpO1xyXG5cdFx0dGhpcy5fcGxheWVyLnggPSA5NztcclxuXHRcdHRoaXMuX3BsYXllci55ID0gdGhpcy5fbGV2ZWwuaCAtIDI3MDtcclxuXHJcblx0XHQvLyB0aGlzLnNldExldmVsKDIpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnggPSA3NjIgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueSA9IDEyNzAgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHJcblx0XHQvLyB0aGlzLnNldExldmVsKDcpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnggPSA2MjcgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueSA9IDE2OTcgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHJcblx0XHQvLyB0aGlzLnNldExldmVsKDcpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnggPSAxNzIxIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnkgPSAzODcgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHJcblx0XHQvLyB0aGlzLnNldExldmVsKDEwKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci54ID0gOTg4IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnkgPSA0MDUgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHJcblx0XHQvLyB0aGlzLnNldExldmVsKDExKTtcclxuXHRcdC8vIHRoaXMuX3BsYXllci54ID0gODQ2IC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnkgPSAzOTcgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHJcblx0XHQvLyB0aGlzLnNldExldmVsKDEwMDApO1xyXG5cdFx0Ly8gdGhpcy5fcGxheWVyLnggPSA2MzUgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25MZWZ0KCk7XHJcblx0XHQvLyB0aGlzLl9wbGF5ZXIueSA9IDU2NCAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldExldmVsKGxldmVsSWQ6bnVtYmVyKTpJTGV2ZWwge1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhOklMZXZlbCA9IExldmVsc01hbmFnZXIuZ2V0TGV2ZWwobGV2ZWxJZCk7XHJcblx0XHR0aGlzLl9sZXZlbC5zZXRMZXZlbChsZXZlbERhdGEpO1xyXG5cdFx0dGhpcy5fbGV2ZWwuc2V0U2l6ZShsZXZlbERhdGEuc3RhZ2Uud2lkdGgsIGxldmVsRGF0YS5zdGFnZS5oZWlnaHQpO1xyXG5cdFx0cmV0dXJuIGxldmVsRGF0YTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hhbmdlRGV2ZWxvcGVyTW9kZUV2ZW50SGFuZGxlcigpOnZvaWQge1xyXG5cdFx0bGV0IGJhY2tncm91bmQgPSB0aGlzLmdldFZpZXdCYWNrZ3JvdW5kSWZFeGlzdHMoKTtcclxuXHRcdGlmIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSlcclxuXHRcdHtcclxuXHRcdFx0YmFja2dyb3VuZC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGJhY2tncm91bmQuYWRkTGlzdGVuZXIoUE9JTlRFUl9ET1dOLCB0aGlzLnBvaW50ZXJEb3duSGFuZGxlciwgdGhpcyk7XHJcblx0XHRcdGJhY2tncm91bmQuYWRkTGlzdGVuZXIoUE9JTlRFUl9NT1ZFLCB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblx0XHRcdGJhY2tncm91bmQuYWRkTGlzdGVuZXIoUE9JTlRFUl9VUCwgdGhpcy5wb2ludGVyVXBIYW5kbGVyLCB0aGlzKTtcclxuXHRcdFx0YmFja2dyb3VuZC5hZGRMaXN0ZW5lcihQT0lOVEVSX1VQX09VVFNJREUsIHRoaXMucG9pbnRlclVwT3V0c2lkZSwgdGhpcyk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGJhY2tncm91bmQuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0YmFja2dyb3VuZC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuXHRcdFx0dGhpcy5zdG9wRHJhZygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb2ludGVyRG93bkhhbmRsZXIoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHRjb25zdCBsb2NhbFBvaW50ID0gZXZlbnQuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMsIGV2ZW50LmRhdGEuZ2xvYmFsKTtcclxuXHRcdHRoaXMuX3BvaW50ZXJEb3duUG9pbnQgPSBuZXcgUG9pbnQobG9jYWxQb2ludC54LCBsb2NhbFBvaW50LnkpO1xyXG5cdFx0dGhpcy5fcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uID0gbmV3IFBvaW50KHRoaXMuX2xldmVsLngsIHRoaXMuX2xldmVsLnkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwb2ludGVyTW92ZUhhbmRsZXIoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fcG9pbnRlckRvd25Qb2ludCAmJiB0aGlzLl9wb2ludGVyRG93bkxldmVsUG9zaXRpb24pIHtcclxuXHRcdFx0Y29uc3QgbG9jYWxQb2ludCA9IGV2ZW50LmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLCBldmVudC5kYXRhLmdsb2JhbCk7XHJcblx0XHRcdHRoaXMuX2xldmVsLnggPSB0aGlzLl9wb2ludGVyRG93bkxldmVsUG9zaXRpb24ueCArIChsb2NhbFBvaW50LnggLSB0aGlzLl9wb2ludGVyRG93blBvaW50LngpO1xyXG5cdFx0XHR0aGlzLl9sZXZlbC55ID0gdGhpcy5fcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uLnkgKyAobG9jYWxQb2ludC55IC0gdGhpcy5fcG9pbnRlckRvd25Qb2ludC55KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcG9pbnRlclVwSGFuZGxlcihldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdHRoaXMuc3RvcERyYWcoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcG9pbnRlclVwT3V0c2lkZShldmVudDpJbnRlcmFjdGlvbkV2ZW50KTp2b2lkIHtcclxuXHRcdHRoaXMuc3RvcERyYWcoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RvcERyYWcoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BvaW50ZXJEb3duUG9pbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5fcG9pbnRlckRvd25MZXZlbFBvc2l0aW9uID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbGF1bmNoVGlja2VyKCk6dm9pZCB7XHJcblx0XHRHbG9iYWxzLnBpeGlBcHAudGlja2VyLmFkZCgoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLl9sZXZlbCAmJiAhR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpIHtcclxuXHRcdFx0XHR0aGlzLl9sZXZlbC54ID0gdGhpcy5jYWxjdWxhdGVMZXZlbFBvc2l0aW9uKHRoaXMudywgdGhpcy5fbGV2ZWwudywgdGhpcy5fcGxheWVyLndpZHRoLCB0aGlzLl9wbGF5ZXIueCk7XHJcblx0XHRcdFx0dGhpcy5fbGV2ZWwueSA9IHRoaXMuY2FsY3VsYXRlTGV2ZWxQb3NpdGlvbih0aGlzLmgsIHRoaXMuX2xldmVsLmgsIHRoaXMuX3BsYXllci5oZWlnaHQsIHRoaXMuX3BsYXllci55KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZUxldmVsUG9zaXRpb24odGhpc1NpemU6bnVtYmVyLCBsZXZlbFNpemU6bnVtYmVyLCBwbGF5ZXJTaXplOm51bWJlciwgcGxheWVyUG9zaXRpb246bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0Y29uc3QgbWluTGV2ZWxQb3NpdGlvbjpudW1iZXIgPSB0aGlzU2l6ZSAtIGxldmVsU2l6ZTtcclxuXHRcdGNvbnN0IG1heExldmVsUG9zaXRpb246bnVtYmVyID0gMDtcclxuXHRcdGNvbnN0IGNhbGN1bGF0ZWRMZXZlbFBvc2l0aW9uOm51bWJlciA9ICh0aGlzU2l6ZSAtIHBsYXllclNpemUpIC8gMiAtIHBsYXllclBvc2l0aW9uO1xyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoTWF0aC5taW4obWF4TGV2ZWxQb3NpdGlvbiwgTWF0aC5tYXgobWluTGV2ZWxQb3NpdGlvbiwgY2FsY3VsYXRlZExldmVsUG9zaXRpb24pKSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IENvbnRhaW5lciA9IFBJWEkuQ29udGFpbmVyO1xyXG5pbXBvcnQgR3JhcGhpY3MgPSBQSVhJLkdyYXBoaWNzO1xyXG5pbXBvcnQgUmFuZG9tIGZyb20gXCIuL3V0aWxzL1JhbmRvbVwiO1xyXG5cclxuY2xhc3MgVmlldyBleHRlbmRzIENvbnRhaW5lciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgUmVzaXphYmxlVmlldyBleHRlbmRzIFZpZXcge1xyXG5cdHB1YmxpYyB3Om51bWJlcjtcclxuXHRwdWJsaWMgaDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfaW5pdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFcodmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLncgIT09IHZhbHVlKSB7XHJcblx0XHRcdHRoaXMudyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmFwcGx5U2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEgodmFsdWU6bnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5oICE9PSB2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLmggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5hcHBseVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRTaXplKHc6bnVtYmVyLCBoOm51bWJlcik6dm9pZCB7XHJcblx0XHRpZiAodGhpcy53ICE9PSB3IHx8IHRoaXMuaCAhPT0gaCkge1xyXG5cdFx0XHR0aGlzLncgPSB3O1xyXG5cdFx0XHR0aGlzLmggPSBoO1xyXG5cdFx0XHR0aGlzLmFwcGx5U2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFwcGx5U2l6ZSgpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl9pbml0ZWQpIHtcclxuXHRcdFx0dGhpcy5faW5pdGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaW5pdCgpOnZvaWQge1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVmlld1dpdGhCYWNrZ3JvdW5kIGV4dGVuZHMgUmVzaXphYmxlVmlldyB7XHJcblx0cHJpdmF0ZSBfdmlld0JhY2tncm91bmQ6R3JhcGhpY3M7XHJcblx0cHJpdmF0ZSBfdmlld0JhY2tncm91bmRDb2xvcjpudW1iZXI7XHJcblx0cHJpdmF0ZSBfdmlld0JhY2tncm91bmRBbHBoYTpudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaG93Vmlld0JhY2tncm91bmQoY29sb3I/Om51bWJlciwgYWxwaGE6bnVtYmVyID0gLjUpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl92aWV3QmFja2dyb3VuZCkge1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZCA9IG5ldyBHcmFwaGljcygpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkQXQodGhpcy5fdmlld0JhY2tncm91bmQsIDApO1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZENvbG9yID0gIU51bWJlci5pc05hTihjb2xvcikgPyBjb2xvciA6IFJhbmRvbS5nZW5Db2xvcigpO1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZEFscGhhID0gYWxwaGE7XHJcblx0XHRcdGlmICh0aGlzLncgJiYgdGhpcy5oKSB7XHJcblx0XHRcdFx0dGhpcy5hcHBseVNpemUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGFwcGx5U2l6ZSgpOnZvaWQge1xyXG5cdFx0c3VwZXIuYXBwbHlTaXplKCk7XHJcblx0XHRpZiAodGhpcy5fdmlld0JhY2tncm91bmQpIHtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmQuY2xlYXIoKTtcclxuXHRcdFx0dGhpcy5fdmlld0JhY2tncm91bmQuYmVnaW5GaWxsKHRoaXMuX3ZpZXdCYWNrZ3JvdW5kQ29sb3IsIHRoaXMuX3ZpZXdCYWNrZ3JvdW5kQWxwaGEpO1xyXG5cdFx0XHR0aGlzLl92aWV3QmFja2dyb3VuZC5kcmF3UmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XHJcblx0XHRcdHRoaXMuX3ZpZXdCYWNrZ3JvdW5kLmVuZEZpbGwoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRWaWV3QmFja2dyb3VuZElmRXhpc3RzKCk6R3JhcGhpY3Mge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXdCYWNrZ3JvdW5kO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVmlld1dpdGhSZXNpemVUZXN0IGV4dGVuZHMgVmlld1dpdGhCYWNrZ3JvdW5kIHtcclxuXHRwdWJsaWMgcmVzaXplVGVzdDpib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBfc2l6ZVdhc0NoYW5nZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYXBwbHlTaXplKCk6dm9pZCB7XHJcblx0XHRzdXBlci5hcHBseVNpemUoKTtcclxuXHRcdGlmICh0aGlzLnJlc2l6ZVRlc3QpIHtcclxuXHRcdFx0aWYgKCF0aGlzLl9zaXplV2FzQ2hhbmdlZCkge1xyXG5cdFx0XHRcdHRoaXMuX3NpemVXYXNDaGFuZ2VkID0gdHJ1ZTtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9zaXplV2FzQ2hhbmdlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vICogWW91IHNob3VsZCB0byB1c2Ugc2V0U2l6ZSBpbnN0ZWFkIHNldFcgYW5kIHNldEggaWYgeW91IHdhbnQgdG8gY2hhbmdlIGJvdGggcGFyYW1ldGVyc1xyXG5cdFx0XHRcdC8vICogWW91IHNob3VsZG4ndCBjYWxsIGFwcGx5U2l6ZSBtZXRob2QgbWFudWFsbHlcclxuXHRcdFx0XHQvLyAqIFlvdSBzaG91bGRuJ3QgY2FsbCBzZXRTaXplLCBzZXRXIG9yIHNldEggdHdpY2VcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbXCIgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIl0gcmVzaXplIHRlc3Qgd2FzIGZhaWxlZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtWaWV3V2l0aFJlc2l6ZVRlc3QgYXMgVmlld307IiwiZXhwb3J0IGNvbnN0IEtFWV9VUCA9IFwiQXJyb3dVcFwiO1xyXG5leHBvcnQgY29uc3QgS0VZX0xFRlQgPSBcIkFycm93TGVmdFwiO1xyXG5leHBvcnQgY29uc3QgS0VZX1JJR0hUID0gXCJBcnJvd1JpZ2h0XCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfQkFDS1FVT1RFID0gXCJCYWNrcXVvdGVcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9KID0gXCJLZXlKXCI7XHJcbmV4cG9ydCBjb25zdCBLRVlfREVMRVRFID0gXCJEZWxldGVcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9DT01NQSA9IFwiQ29tbWFcIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9QRVJJT0QgPSBcIlBlcmlvZFwiO1xyXG5leHBvcnQgY29uc3QgS0VZX04gPSBcIktleU5cIjtcclxuZXhwb3J0IGNvbnN0IEtFWV9DID0gXCJLZXlDXCI7IiwiZXhwb3J0IGNvbnN0IFBPSU5URVJfRE9XTiA9IFwicG9pbnRlcmRvd25cIjtcclxuZXhwb3J0IGNvbnN0IFBPSU5URVJfVVAgPSBcInBvaW50ZXJ1cFwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9NT1ZFID0gXCJwb2ludGVybW92ZVwiO1xyXG5leHBvcnQgY29uc3QgUE9JTlRFUl9VUF9PVVRTSURFID0gXCJwb2ludGVydXBvdXRzaWRlXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX09WRVIgPSBcInBvaW50ZXJvdmVyXCI7XHJcbmV4cG9ydCBjb25zdCBQT0lOVEVSX09VVCA9IFwicG9pbnRlcm91dFwiOyIsImltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcbmltcG9ydCB7SUJsb2NrLCBJQ29sbGlzaW9uLCBJQmxvY2tUeXBlfSBmcm9tIFwiLi4vSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgU3ByaXRlID0gUElYSS5TcHJpdGU7XHJcbmltcG9ydCBQb2ludCA9IFBJWEkuUG9pbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayBleHRlbmRzIENvbGxpc2lvbk9iamVjdCB7XHJcblx0cHVibGljIGxvY2FsRHJhZ1BvaW50OlBvaW50O1xyXG5cdHByaXZhdGUgX3Nwcml0ZTpTcHJpdGU7XHJcblx0cHJpdmF0ZSBfaGl0OmJvb2xlYW4gPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2Jsb2NrRGF0YTpJQmxvY2ssXHJcblx0XHRwcml2YXRlIF9ibG9ja1R5cGVEYXRhOklCbG9ja1R5cGUsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaW5pdFNwcml0ZSgpO1xyXG5cdFx0aWYgKHRoaXMuX2Jsb2NrVHlwZURhdGEuY29sbGlzaW9uKSB7XHJcblx0XHRcdGNvbnN0IGNvbGxpc2lvbjpJQ29sbGlzaW9uID0gdGhpcy5fYmxvY2tUeXBlRGF0YS5jb2xsaXNpb247XHJcblx0XHRcdHRoaXMuc2V0TG9jYWxDb2xsaXNpb25WYWx1ZXMoY29sbGlzaW9uLmxlZnQsIGNvbGxpc2lvbi5yaWdodCwgY29sbGlzaW9uLnRvcCwgY29sbGlzaW9uLmJvdHRvbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRTcHJpdGUoKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9ibG9ja1R5cGVEYXRhLmltYWdlKSB7XHJcblx0XHRcdHRoaXMuX3Nwcml0ZSA9IFNwcml0ZS5mcm9tKHRoaXMuX2Jsb2NrVHlwZURhdGEuaW1hZ2UpO1xyXG5cdFx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0RGF0YSgpOklCbG9jayB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tEYXRhO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFR5cGVEYXRhKCk6SUJsb2NrVHlwZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tUeXBlRGF0YTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaG93QmxvY2tIaXQodmFsdWU6Ym9vbGVhbik6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5faGl0ICE9PSB2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLl9oaXQgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5zaG93Q29sbGlzaW9uUmVjdGFuZ2xlKHRoaXMuX2hpdCA/IDB4ZmYwMDAwIDogMHgwMDAwZmYpO1xyXG5cdFx0XHRpZiAodGhpcy5fc3ByaXRlKSB7XHJcblx0XHRcdFx0dGhpcy5fc3ByaXRlLmFscGhhID0gLjM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoaWRlQmxvY2tIaXQoKTp2b2lkIHtcclxuXHRcdHRoaXMuaGlkZUNvbGxpc2lvblJlY3RhbmdsZSgpO1xyXG5cdFx0dGhpcy5faGl0ID0gbnVsbDtcclxuXHRcdGlmICh0aGlzLl9zcHJpdGUpIHtcclxuXHRcdFx0dGhpcy5fc3ByaXRlLmFscGhhID0gMTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQge0lDb2xsZWN0aWJsZVR5cGUsIElDb2xsaXNpb259IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3RpYmxlIGV4dGVuZHMgQ29sbGlzaW9uT2JqZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdGNvbGxlY3RpYmxlVHlwZURhdGE6SUNvbGxlY3RpYmxlVHlwZSxcclxuXHRcdHByaXZhdGUgX29uSGl0Q2FsbGJhY2s6KCkgPT4gdm9pZCxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5hZGRDaGlsZChTcHJpdGUuZnJvbShjb2xsZWN0aWJsZVR5cGVEYXRhLmltYWdlKSk7XHJcblx0XHRpZiAoY29sbGVjdGlibGVUeXBlRGF0YS5jb2xsaXNpb24pIHtcclxuXHRcdFx0Y29uc3QgY29sbGlzaW9uOklDb2xsaXNpb24gPSBjb2xsZWN0aWJsZVR5cGVEYXRhLmNvbGxpc2lvbjtcclxuXHRcdFx0dGhpcy5zZXRMb2NhbENvbGxpc2lvblZhbHVlcyhjb2xsaXNpb24ubGVmdCwgY29sbGlzaW9uLnJpZ2h0LCBjb2xsaXNpb24udG9wLCBjb2xsaXNpb24uYm90dG9tKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkhpdCgpOnZvaWQge1xyXG5cdFx0dGhpcy5fb25IaXRDYWxsYmFjaygpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgQ29udGFpbmVyID0gUElYSS5Db250YWluZXI7XHJcbmltcG9ydCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XHJcbmltcG9ydCBUZXh0ID0gUElYSS5UZXh0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uT2JqZWN0IGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIF9sb2NhbExlZnQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsUmlnaHQ6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2xvY2FsVG9wOm51bWJlcjtcclxuXHRwcml2YXRlIF9sb2NhbEJvdHRvbTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbG9jYWxDZW50ZXJYOm51bWJlcjtcclxuXHRwcml2YXRlIF9sb2NhbENlbnRlclk6bnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIF9jb2xsaXNpb25MZWZ0Om51bWJlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25SaWdodDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uVG9wOm51bWJlcjtcclxuXHRwcml2YXRlIF9jb2xsaXNpb25Cb3R0b206bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbkNlbnRlclg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbkNlbnRlclk6bnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIF9jb2xsaXNpb25SZWN0YW5nbGU6R3JhcGhpY3M7XHJcblx0cHJpdmF0ZSBfY29sbGlzaW9uUmVjdGFuZ2xlQ29udGFpbmVyOkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuXHRwcml2YXRlIF9zZWxlY3Rpb246R3JhcGhpY3M7XHJcblxyXG5cdHByaXZhdGUgX2RlYnVnVGV4dDpUZXh0O1xyXG5cdHByaXZhdGUgX2RlYnVnVGV4dEJhY2tncm91bmQ6R3JhcGhpY3M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlQ29udGFpbmVyKVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldExvY2FsQ29sbGlzaW9uVmFsdWVzKFxyXG5cdFx0bGVmdDpudW1iZXIsXHJcblx0XHRyaWdodDpudW1iZXIsXHJcblx0XHR0b3A6bnVtYmVyLFxyXG5cdFx0Ym90dG9tOm51bWJlclxyXG5cdCk6dm9pZCB7XHJcblx0XHR0aGlzLl9sb2NhbExlZnQgPSBsZWZ0O1xyXG5cdFx0dGhpcy5fbG9jYWxSaWdodCA9IHJpZ2h0O1xyXG5cdFx0dGhpcy5fbG9jYWxUb3AgPSB0b3A7XHJcblx0XHR0aGlzLl9sb2NhbEJvdHRvbSA9IGJvdHRvbTtcclxuXHRcdHRoaXMuX2xvY2FsQ2VudGVyWCA9IGxlZnQgKyBNYXRoLmZsb29yKChyaWdodCAtIGxlZnQpIC8gMik7XHJcblx0XHR0aGlzLl9sb2NhbENlbnRlclkgPSB0b3AgKyBNYXRoLmZsb29yKChib3R0b20gLSB0b3ApIC8gMik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHgoeDpudW1iZXIpIHtcclxuXHRcdHN1cGVyLnggPSB4O1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uTGVmdCA9IHggKyB0aGlzLl9sb2NhbExlZnQ7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25SaWdodCA9IHggKyB0aGlzLl9sb2NhbFJpZ2h0O1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uQ2VudGVyWCA9IHggKyB0aGlzLl9sb2NhbENlbnRlclg7XHJcblx0XHRpZiAoIXByb2Nlc3MuZW52LlJFTEVBU0UpXHJcblx0XHRcdHRoaXMucmVmcmVzaFBvc2l0aW9uVGV4dCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB4KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBzdXBlci54O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB5KHk6bnVtYmVyKSB7XHJcblx0XHRzdXBlci55ID0geTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblRvcCA9IHkgKyB0aGlzLl9sb2NhbFRvcDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbkJvdHRvbSA9IHkgKyB0aGlzLl9sb2NhbEJvdHRvbTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbkNlbnRlclkgPSB5ICsgdGhpcy5fbG9jYWxDZW50ZXJZO1xyXG5cdFx0aWYgKCFwcm9jZXNzLmVudi5SRUxFQVNFKVxyXG5cdFx0XHR0aGlzLnJlZnJlc2hQb3NpdGlvblRleHQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gc3VwZXIueTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRPcmRlcih2YWx1ZTpudW1iZXIpOnZvaWQge1xyXG5cdFx0LypcclxuXHRcdGlmICghdGhpcy5fZGVidWdUZXh0KSB7XHJcblx0XHRcdHRoaXMuX2RlYnVnVGV4dCA9IG5ldyBUZXh0KCk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fZGVidWdUZXh0KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX2RlYnVnVGV4dC50ZXh0ID0gdmFsdWUudG9TdHJpbmcoKTtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dC54ID0gTWF0aC5mbG9vcigoKHRoaXMuX2xvY2FsUmlnaHQgLSB0aGlzLl9sb2NhbExlZnQpIC0gdGhpcy5fZGVidWdUZXh0LndpZHRoKSAvIDIpO1xyXG5cdFx0dGhpcy5fZGVidWdUZXh0LnkgPSB0aGlzLl9sb2NhbFRvcCArIE1hdGguZmxvb3IoKCh0aGlzLl9sb2NhbEJvdHRvbSAtIHRoaXMuX2xvY2FsVG9wKSAtIHRoaXMuX2RlYnVnVGV4dC5oZWlnaHQpIC8gMik7XHJcblx0XHQqL1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlZnJlc2hQb3NpdGlvblRleHQoKTp2b2lkIHtcclxuXHRcdC8vIHRoaXMuc2hvd0RlYnVnVGV4dCh0aGlzLl9jb2xsaXNpb25MZWZ0ICsgXCJ4XCIgKyB0aGlzLl9jb2xsaXNpb25Ub3ApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93RGVidWdUZXh0KHRleHQ6c3RyaW5nKTp2b2lkIHtcclxuXHRcdGlmICghdGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZCkge1xyXG5cdFx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kID0gbmV3IEdyYXBoaWNzKCk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9kZWJ1Z1RleHQpIHtcclxuXHRcdFx0Y29uc3QgdGV4dFN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHtcclxuXHRcdFx0XHRmaWxsOiBcIiNmZmZmZmZcIixcclxuXHRcdFx0XHRmb250U2l6ZTogMTYsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5fZGVidWdUZXh0ID0gbmV3IFBJWEkuVGV4dCgnJywgdGV4dFN0eWxlKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9kZWJ1Z1RleHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2RlYnVnVGV4dC50ZXh0ID0gdGV4dDtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dC54ID0gTWF0aC5mbG9vcigodGhpcy5fbG9jYWxSaWdodCAtIHRoaXMuX2xvY2FsTGVmdCAtIHRoaXMuX2RlYnVnVGV4dC53aWR0aCkgLyAyKTtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dC55ID0gdGhpcy5fbG9jYWxUb3AgKiAyICsgTWF0aC5mbG9vcigodGhpcy5fbG9jYWxCb3R0b20gLSB0aGlzLl9sb2NhbFRvcCAtIHRoaXMuX2RlYnVnVGV4dC5oZWlnaHQpIC8gMik7XHJcblxyXG5cdFx0dGhpcy5fZGVidWdUZXh0QmFja2dyb3VuZC54ID0gdGhpcy5fZGVidWdUZXh0Lng7XHJcblx0XHR0aGlzLl9kZWJ1Z1RleHRCYWNrZ3JvdW5kLnkgPSB0aGlzLl9kZWJ1Z1RleHQueTtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQuY2xlYXIoKTtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQuYmVnaW5GaWxsKDB4MDAwMDAwKTtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQuZHJhd1JlY3QoMCwgMCwgdGhpcy5fZGVidWdUZXh0LndpZHRoLCB0aGlzLl9kZWJ1Z1RleHQuaGVpZ2h0KTtcclxuXHRcdHRoaXMuX2RlYnVnVGV4dEJhY2tncm91bmQuZW5kRmlsbCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNob3dDb2xsaXNpb25SZWN0YW5nbGUoY29sb3I6bnVtYmVyID0gMHgwMDAwZmYpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUpIHtcclxuXHRcdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlID0gbmV3IEdyYXBoaWNzKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5wYXJlbnQpIHtcclxuXHRcdFx0dGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlQ29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUuY2xlYXIoKTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5iZWdpbkZpbGwoY29sb3IsIC41KTtcclxuXHRcdHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZS5kcmF3UmVjdChcclxuXHRcdFx0dGhpcy5fbG9jYWxMZWZ0LFxyXG5cdFx0XHR0aGlzLl9sb2NhbFRvcCxcclxuXHRcdFx0dGhpcy5fbG9jYWxSaWdodCAtIHRoaXMuX2xvY2FsTGVmdCxcclxuXHRcdFx0dGhpcy5fbG9jYWxCb3R0b20gLSB0aGlzLl9sb2NhbFRvcCxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd1NlbGVjdGlvbigpOnZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLl9zZWxlY3Rpb24gfHwgIXRoaXMuX3NlbGVjdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0aWYgKCF0aGlzLl9zZWxlY3Rpb24pIHtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rpb24gPSBuZXcgR3JhcGhpY3MoKTtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rpb24uYmVnaW5GaWxsKDB4ZmZmZmZmKTtcclxuXHRcdFx0XHRsZXQgY2VudGVyUG9pbnRYOm51bWJlciA9IHRoaXMuX2xvY2FsTGVmdCArICh0aGlzLl9sb2NhbFJpZ2h0IC0gdGhpcy5fbG9jYWxMZWZ0KSAvIDI7XHJcblx0XHRcdFx0bGV0IGNlbnRlclBvaW50WTpudW1iZXIgPSB0aGlzLl9sb2NhbFRvcCArICh0aGlzLl9sb2NhbEJvdHRvbSAtIHRoaXMuX2xvY2FsVG9wKSAvIDI7XHJcblx0XHRcdFx0Y29uc3QgY2VudGVyU3F1YXJlU2l6ZTpudW1iZXIgPSAxMDtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rpb24uZHJhd1JlY3QoXHJcblx0XHRcdFx0XHRjZW50ZXJQb2ludFggLSBjZW50ZXJTcXVhcmVTaXplIC8gMixcclxuXHRcdFx0XHRcdGNlbnRlclBvaW50WSAtIGNlbnRlclNxdWFyZVNpemUgLyAyLFxyXG5cdFx0XHRcdFx0Y2VudGVyU3F1YXJlU2l6ZSxcclxuXHRcdFx0XHRcdGNlbnRlclNxdWFyZVNpemUsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zZWxlY3Rpb24pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGhpZGVTZWxlY3Rpb24oKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9zZWxlY3Rpb24gJiYgdGhpcy5fc2VsZWN0aW9uLnBhcmVudClcclxuXHRcdFx0dGhpcy5fc2VsZWN0aW9uLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9zZWxlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhpZGVDb2xsaXNpb25SZWN0YW5nbGUoKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUgJiYgdGhpcy5fY29sbGlzaW9uUmVjdGFuZ2xlLnBhcmVudCkge1xyXG5cdFx0XHR0aGlzLl9jb2xsaXNpb25SZWN0YW5nbGUucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX2NvbGxpc2lvblJlY3RhbmdsZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uTGVmdCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uTGVmdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjb2xsaXNpb25SaWdodCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uUmlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uVG9wKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25Ub3A7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uQm90dG9tKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xsaXNpb25Cb3R0b207XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25MZWZ0KCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sb2NhbExlZnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25SaWdodCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxSaWdodDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2NhbENvbGxpc2lvblRvcCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxUb3A7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9jYWxDb2xsaXNpb25Cb3R0b20oKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xvY2FsQm90dG9tO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uQ2VudGVyWCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxDZW50ZXJYO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvY2FsQ29sbGlzaW9uQ2VudGVyWSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9jYWxDZW50ZXJZO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNvbGxpc2lvbkNlbnRlclgoKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxpc2lvbkNlbnRlclg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29sbGlzaW9uQ2VudGVyWSgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sbGlzaW9uQ2VudGVyWTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyID0gUElYSS5Db250YWluZXI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3QgZnJvbSBcIi4vQ29sbGlzaW9uT2JqZWN0XCI7XHJcbmltcG9ydCBIaXRUZXN0IGZyb20gXCIuL0hpdFRlc3RcIjtcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBQSVhJLkRpc3BsYXlPYmplY3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb25PYmplY3RzU29ydGVyIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2NvbGxpc2lvbnNMYXllcjpDb250YWluZXJcclxuXHQpIHt9XHJcblxyXG5cdHB1YmxpYyBzb3J0KCk6dm9pZCB7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25zTGF5ZXIuY2hpbGRyZW4uc29ydCgoYTogRGlzcGxheU9iamVjdCwgYjogRGlzcGxheU9iamVjdCk6IG51bWJlciA9PiB7XHJcblx0XHRcdGxldCBhQ29sbGlzaW9uOiBDb2xsaXNpb25PYmplY3QgPSBhIGFzIENvbGxpc2lvbk9iamVjdDtcclxuXHRcdFx0bGV0IGJDb2xsaXNpb246IENvbGxpc2lvbk9iamVjdCA9IGIgYXMgQ29sbGlzaW9uT2JqZWN0O1xyXG5cclxuXHRcdFx0aWYgKGFDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWCgpICE9PSBiQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclgoKSkge1xyXG5cdFx0XHRcdHJldHVybiBhQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclgoKSAtIGJDb2xsaXNpb24uY29sbGlzaW9uQ2VudGVyWCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYkNvbGxpc2lvbi5jb2xsaXNpb25DZW50ZXJZKCkgLSBhQ29sbGlzaW9uLmNvbGxpc2lvbkNlbnRlclkoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuID0gdGhpcy5teVNvcnQodGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuIGFzIENvbGxpc2lvbk9iamVjdFtdKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbXlTb3J0KGNoaWxkcmVuOkNvbGxpc2lvbk9iamVjdFtdKTpDb2xsaXNpb25PYmplY3RbXSB7XHJcblx0XHRjb25zdCBvbGRBcnJheTpDb2xsaXNpb25PYmplY3RbXSA9IGNoaWxkcmVuLnNsaWNlKCk7XHJcblx0XHRjb25zdCBuZXdBcnJheTpDb2xsaXNpb25PYmplY3RbXSA9IFtdO1xyXG5cdFx0d2hpbGUgKG9sZEFycmF5Lmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBpbmRleDpudW1iZXIgPSB0aGlzLmZpbmRNaW5PYmplY3RJbmRleChvbGRBcnJheSwgMCk7XHJcblx0XHRcdG5ld0FycmF5LnB1c2gob2xkQXJyYXlbaW5kZXhdKTtcclxuXHRcdFx0b2xkQXJyYXlbaW5kZXhdLnNldE9yZGVyKG5ld0FycmF5Lmxlbmd0aCk7XHJcblx0XHRcdG9sZEFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXJyYXk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZpbmRNaW5PYmplY3RJbmRleChcclxuXHRcdGFycmF5OkNvbGxpc2lvbk9iamVjdFtdLFxyXG5cdFx0aW5kZXg6bnVtYmVyLFxyXG5cdCk6bnVtYmVyIHtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpICE9PSBpbmRleCAmJiB0aGlzLmZpcnN0T2JqZWN0SW5kZXhJc0JpZ2dlcihhcnJheVtpbmRleF0sIGFycmF5W2ldKSkge1xyXG5cdFx0XHRcdGluZGV4ID0gdGhpcy5maW5kTWluT2JqZWN0SW5kZXgoYXJyYXksIGkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW5kZXg7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZpcnN0T2JqZWN0SW5kZXhJc0JpZ2dlcihhOkNvbGxpc2lvbk9iamVjdCwgYjpDb2xsaXNpb25PYmplY3QpOmJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgaGl0SDogYm9vbGVhbiA9IEhpdFRlc3QuaG9yaXpvbnRhbChhLCBiKTtcclxuXHRcdGNvbnN0IGhpdFY6IGJvb2xlYW4gPSBIaXRUZXN0LnZlcnRpY2FsKGEsIGIpO1xyXG5cdFx0aWYgKGhpdEggPT09IGhpdFYpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmIChoaXRWKSB7XHJcblx0XHRcdHJldHVybiBhLmNvbGxpc2lvbkxlZnQoKSA+PSBiLmNvbGxpc2lvblJpZ2h0KCk7XHJcblx0XHR9IGVsc2UgaWYgKGhpdEgpIHtcclxuXHRcdFx0cmV0dXJuIGEuY29sbGlzaW9uQm90dG9tKCkgPD0gYi5jb2xsaXNpb25Ub3AoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoYS5jb2xsaXNpb25MZWZ0KCkgPj0gYi5jb2xsaXNpb25SaWdodCgpKSAmJiAoYS5jb2xsaXNpb25Cb3R0b20oKSA8PSBiLmNvbGxpc2lvblRvcCgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGl0VGVzdCB7XHJcblx0cHVibGljIHN0YXRpYyBob3Jpem9udGFsKG9iajE6Q29sbGlzaW9uT2JqZWN0LCBvYmoyOkNvbGxpc2lvbk9iamVjdCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gIShcclxuXHRcdFx0b2JqMS5jb2xsaXNpb25SaWdodCgpIDw9IG9iajIuY29sbGlzaW9uTGVmdCgpIHx8XHJcblx0XHRcdG9iajEuY29sbGlzaW9uTGVmdCgpID49IG9iajIuY29sbGlzaW9uUmlnaHQoKVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyB2ZXJ0aWNhbChvYmoxOkNvbGxpc2lvbk9iamVjdCwgb2JqMjpDb2xsaXNpb25PYmplY3QpOmJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICEoXHJcblx0XHRcdG9iajEuY29sbGlzaW9uQm90dG9tKCkgPD0gb2JqMi5jb2xsaXNpb25Ub3AoKSB8fFxyXG5cdFx0XHRvYmoxLmNvbGxpc2lvblRvcCgpID49IG9iajIuY29sbGlzaW9uQm90dG9tKClcclxuXHRcdCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwiLi4vVmlld1wiO1xyXG5pbXBvcnQge1BPSU5URVJfRE9XTiwgUE9JTlRFUl9NT1ZFLCBQT0lOVEVSX1VQLCBQT0lOVEVSX1VQX09VVFNJREV9IGZyb20gXCIuLi9jb25zdHMvUG9pbnRlckV2ZW50c1wiO1xyXG5pbXBvcnQge1xyXG5cdEtFWV9CQUNLUVVPVEUsXHJcblx0S0VZX0MsXHJcblx0S0VZX0NPTU1BLFxyXG5cdEtFWV9ERUxFVEUsXHJcblx0S0VZX0osXHJcblx0S0VZX0xFRlQsXHJcblx0S0VZX04sXHJcblx0S0VZX1BFUklPRCxcclxuXHRLRVlfUklHSFQsXHJcblx0S0VZX1VQXHJcbn0gZnJvbSBcIi4uL2NvbnN0cy9LZXlib2FyZENvZGVzXCI7XHJcbmltcG9ydCB7SUJsb2NrLCBJTGV2ZWwsIElCbG9ja1R5cGUsIElJbWFnZVR5cGUsIElJbWFnZSwgSUNvbGxlY3RpYmxlLCBJQ29sbGVjdGlibGVUeXBlfSBmcm9tIFwiLi4vSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgUGxheWVyTW92ZXIgZnJvbSBcIi4vUGxheWVyTW92ZXJcIjtcclxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCBDb2xsaXNpb25PYmplY3RzU29ydGVyIGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdHNTb3J0ZXJcIjtcclxuaW1wb3J0IEhpdFRlc3QgZnJvbSBcIi4vSGl0VGVzdFwiO1xyXG5pbXBvcnQgV2luZG93RXZlbnRzIGZyb20gXCIuLi91dGlscy9XaW5kb3dFdmVudHNcIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIi4uL0dsb2JhbHNcIjtcclxuaW1wb3J0IExldmVsc01hbmFnZXIgZnJvbSBcIi4uL21vZGVsL0xldmVsc01hbmFnZXJcIjtcclxuaW1wb3J0IEludGVyYWN0aW9uRXZlbnQgPSBQSVhJLmludGVyYWN0aW9uLkludGVyYWN0aW9uRXZlbnQ7XHJcbmltcG9ydCBQb2ludCA9IFBJWEkuUG9pbnQ7XHJcbmltcG9ydCBTcHJpdGUgPSBQSVhJLlNwcml0ZTtcclxuaW1wb3J0IENvbGxlY3RpYmxlIGZyb20gXCIuL0NvbGxlY3RpYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCBleHRlbmRzIFZpZXcge1xyXG5cdHByaXZhdGUgX3ByZXNzZWRCdXR0b25zOk1hcDxzdHJpbmcsIGJvb2xlYW4+ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XHJcblx0cHJpdmF0ZSBfbGFzdFByZXNzZWREaXJlY3Rpb25CdXR0b246c3RyaW5nO1xyXG5cdHByaXZhdGUgX2p1bXA6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2Jsb2NrVHlwZUJ5VHlwZUlkOk1hcDxzdHJpbmcsIElCbG9ja1R5cGU+ID0gbmV3IE1hcDxzdHJpbmcsIElCbG9ja1R5cGU+KCk7XHJcblx0cHJpdmF0ZSBfYmxvY2tzVHlwZXM6SUJsb2NrVHlwZVtdID0gW107XHJcblx0cHJpdmF0ZSBfaW1hZ2VUeXBlQnlUeXBlSWQ6TWFwPHN0cmluZywgSUltYWdlVHlwZT4gPSBuZXcgTWFwPHN0cmluZywgSUltYWdlVHlwZT4oKTtcclxuXHRwcml2YXRlIF9jb2xsZWN0aWJsZVR5cGVCeVR5cGVJZDpNYXA8c3RyaW5nLCBJQ29sbGVjdGlibGVUeXBlPiA9IG5ldyBNYXA8c3RyaW5nLCBJQ29sbGVjdGlibGVUeXBlPigpO1xyXG5cdHByaXZhdGUgX2NvbGxlY3RlZElkczpzdHJpbmdbXSA9IFtdO1xyXG5cdHByaXZhdGUgX3BsYXllck1vdmVyOlBsYXllck1vdmVyO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbk9iamVjdHNTb3J0ZXI6Q29sbGlzaW9uT2JqZWN0c1NvcnRlcjtcclxuXHRwcml2YXRlIF9ibG9ja3M6QmxvY2tbXSA9IFtdO1xyXG5cdHByaXZhdGUgX2ltYWdlczpTcHJpdGVbXSA9IFtdO1xyXG5cdHByaXZhdGUgX2NvbGxlY3RpYmxlczpDb2xsZWN0aWJsZVtdID0gW107XHJcblx0cHJpdmF0ZSBfbGV2ZWxEYXRhOklMZXZlbDtcclxuXHRwcml2YXRlIF9zZWxlY3RlZEJsb2NrOkJsb2NrID0gbnVsbDtcclxuXHRwcml2YXRlIF9pbWFnZXNMYXllcjpTcHJpdGU7XHJcblx0cHJpdmF0ZSBfY29sbGVjdGlibGVzTGF5ZXI6U3ByaXRlO1xyXG5cdHByaXZhdGUgX2NvbGxpc2lvbnNMYXllcjpTcHJpdGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfcGxheWVyOlBsYXllcixcclxuXHRcdHByaXZhdGUgX3NldExldmVsQ2FsbGJhY2s6KGxldmVsOm51bWJlcikgPT4gSUxldmVsLFxyXG5cdFx0cHJpdmF0ZSBfY2hhbmdlQ2FtZXJhQ2FsbGJhY2s6KGxldmVsV2lkdGg6bnVtYmVyLCBsZXZlbEhlaWdodDpudW1iZXIpID0+IHZvaWQsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGluaXQoKTp2b2lkIHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHRcdHRoaXMuYWRkS2V5TGlzdGVuZXJzKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5pdFR5cGVzKCk6dm9pZCB7XHJcblx0XHRMZXZlbHNNYW5hZ2VyLmdldExldmVsc01ldGFkYXRhKCkuaW1hZ2VzVHlwZXMuZm9yRWFjaCgoaW1hZ2VEYXRhOklJbWFnZVR5cGUpID0+IHtcclxuXHRcdFx0dGhpcy5faW1hZ2VUeXBlQnlUeXBlSWQuc2V0KGltYWdlRGF0YS5pZCwgaW1hZ2VEYXRhKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdExldmVsc01hbmFnZXIuZ2V0TGV2ZWxzTWV0YWRhdGEoKS5ibG9ja1R5cGVzLmZvckVhY2goKGJsb2NrVHlwZURhdGE6SUJsb2NrVHlwZSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9ibG9ja1R5cGVCeVR5cGVJZC5zZXQoYmxvY2tUeXBlRGF0YS5pZCwgYmxvY2tUeXBlRGF0YSk7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1R5cGVzLnB1c2goYmxvY2tUeXBlRGF0YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRMZXZlbHNNYW5hZ2VyLmdldExldmVsc01ldGFkYXRhKCkuY29sbGVjdGlibGVzVHlwZXMuZm9yRWFjaCgoY29sbGVjdGlibGVEYXRhOklDb2xsZWN0aWJsZVR5cGUpID0+IHtcclxuXHRcdFx0dGhpcy5fY29sbGVjdGlibGVUeXBlQnlUeXBlSWQuc2V0KGNvbGxlY3RpYmxlRGF0YS5pZCwgY29sbGVjdGlibGVEYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldExldmVsKGxldmVsRGF0YTpJTGV2ZWwpOnZvaWQge1xyXG5cdFx0dGhpcy5fbGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xyXG5cclxuXHRcdGlmICghdGhpcy5faW1hZ2VzTGF5ZXIpIHtcclxuXHRcdFx0dGhpcy5faW1hZ2VzTGF5ZXIgPSBuZXcgU3ByaXRlKCk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5faW1hZ2VzTGF5ZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5fY29sbGVjdGlibGVzTGF5ZXIpIHtcclxuXHRcdFx0dGhpcy5fY29sbGVjdGlibGVzTGF5ZXIgPSBuZXcgU3ByaXRlKCk7XHJcblx0XHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY29sbGVjdGlibGVzTGF5ZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5fY29sbGlzaW9uc0xheWVyKSB7XHJcblx0XHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllciA9IG5ldyBTcHJpdGUoKTtcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9jb2xsaXNpb25zTGF5ZXIpO1xyXG5cclxuXHRcdFx0dGhpcy5pbml0Q29sbGlzaW9uT2JqZWN0c1NvcnRlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVtb3ZlQWxsSW1hZ2VzKCk7XHJcblx0XHR0aGlzLnJlbW92ZUFsbENvbGxlY3RpYmxlcygpO1xyXG5cdFx0dGhpcy5yZW1vdmVBbGxDb2xsaXNpb25PYmplY3RzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2xldmVsRGF0YS5pbWFnZXMpIHtcclxuXHRcdFx0dGhpcy5fbGV2ZWxEYXRhLmltYWdlcy5mb3JFYWNoKChpbWFnZURhdGE6SUltYWdlKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVJbWFnZShpbWFnZURhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9sZXZlbERhdGEuY29sbGVjdGlibGVzKSB7XHJcblx0XHRcdHRoaXMuX2xldmVsRGF0YS5jb2xsZWN0aWJsZXMuZm9yRWFjaCgoY29sbGVjdGlibGVEYXRhOklDb2xsZWN0aWJsZSkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9jb2xsZWN0ZWRJZHMuaW5kZXhPZihjb2xsZWN0aWJsZURhdGEuaWQpID09IC0xKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNyZWF0ZUNvbGxlY3RpYmxlKGNvbGxlY3RpYmxlRGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX2xldmVsRGF0YS5ibG9ja3MpIHtcclxuXHRcdFx0dGhpcy5fbGV2ZWxEYXRhLmJsb2Nrcy5mb3JFYWNoKChibG9ja0RhdGE6SUJsb2NrKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCbG9jayhibG9ja0RhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5fcGxheWVyLnBhcmVudClcclxuXHRcdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmFkZENoaWxkKHRoaXMuX3BsYXllcik7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9wbGF5ZXJNb3ZlcilcclxuXHRcdFx0dGhpcy5fcGxheWVyTW92ZXIgPSBuZXcgUGxheWVyTW92ZXIodGhpcy5fc2V0TGV2ZWxDYWxsYmFjayk7XHJcblx0XHR0aGlzLl9wbGF5ZXJNb3Zlci5zZXRMZXZlbERhdGEoXHJcblx0XHRcdHRoaXMuX3BsYXllcixcclxuXHRcdFx0dGhpcy5fYmxvY2tzLFxyXG5cdFx0XHR0aGlzLl9jb2xsZWN0aWJsZXMsXHJcblx0XHRcdHRoaXMuX2xldmVsRGF0YS5zdGFnZSxcclxuXHRcdFx0dGhpcy5fbGV2ZWxEYXRhLmJvcmRlcnMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxhdW5jaFRpY2tlcigpOnZvaWQge1xyXG5cdFx0R2xvYmFscy5waXhpQXBwLnRpY2tlci5hZGQodGhpcy50aWNrLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlQWxsSW1hZ2VzKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9pbWFnZXNMYXllci5yZW1vdmVDaGlsZHJlbigpO1xyXG5cdFx0dGhpcy5faW1hZ2VzLmxlbmd0aCA9IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbW92ZUFsbENvbGxlY3RpYmxlcygpOnZvaWQge1xyXG5cdFx0dGhpcy5fY29sbGVjdGlibGVzTGF5ZXIucmVtb3ZlQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMuX2NvbGxlY3RpYmxlcy5sZW5ndGggPSAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW1vdmVBbGxDb2xsaXNpb25PYmplY3RzKCk6dm9pZCB7XHJcblx0XHR0aGlzLl9ibG9ja3MuZm9yRWFjaChibG9jayA9PiBibG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoKSk7XHJcblx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrID0gbnVsbDtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbnNMYXllci5yZW1vdmVDaGlsZHJlbigpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmxlbmd0aCA9IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUltYWdlKGltYWdlRGF0YTpJSW1hZ2UpOnZvaWQge1xyXG5cdFx0Y29uc3QgaW1hZ2VUeXBlRGF0YTpJSW1hZ2VUeXBlID0gdGhpcy5faW1hZ2VUeXBlQnlUeXBlSWQuZ2V0KGltYWdlRGF0YS50eXBlKTtcclxuXHRcdGNvbnN0IGltYWdlOlNwcml0ZSA9IFNwcml0ZS5mcm9tKGltYWdlVHlwZURhdGEuaW1hZ2UpO1xyXG5cdFx0aW1hZ2UueCA9IGltYWdlRGF0YS54O1xyXG5cdFx0aW1hZ2UueSA9IGltYWdlRGF0YS55O1xyXG5cdFx0dGhpcy5faW1hZ2VzTGF5ZXIuYWRkQ2hpbGQoaW1hZ2UpO1xyXG5cdFx0dGhpcy5faW1hZ2VzLnB1c2goaW1hZ2UpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVDb2xsZWN0aWJsZShjb2xsZWN0aWJsZURhdGE6SUNvbGxlY3RpYmxlKTp2b2lkIHtcclxuXHRcdGNvbnN0IGNvbGxlY3RpYmxlVHlwZURhdGE6SUNvbGxlY3RpYmxlVHlwZSA9IHRoaXMuX2NvbGxlY3RpYmxlVHlwZUJ5VHlwZUlkLmdldChjb2xsZWN0aWJsZURhdGEudHlwZSk7XHJcblx0XHRjb25zdCBjb2xsZWN0aWJsZTpDb2xsZWN0aWJsZSA9IG5ldyBDb2xsZWN0aWJsZShcclxuXHRcdFx0Y29sbGVjdGlibGVUeXBlRGF0YSxcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb2xsZWN0aWJsZURhdGEudHlwZSA9PSBcImN1cFwiKSB7XHJcblx0XHRcdFx0XHRhbGVydChcIllPVSBXSU4hISFcIik7XHJcblx0XHRcdFx0XHR0aGlzLl9wbGF5ZXIuc2V0V2lubmVyU2tpbigpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5fY29sbGVjdGVkSWRzLnB1c2goY29sbGVjdGlibGVEYXRhLmlkKTtcclxuXHRcdFx0XHRjb2xsZWN0aWJsZS5wYXJlbnQucmVtb3ZlQ2hpbGQoY29sbGVjdGlibGUpO1xyXG5cdFx0XHRcdHRoaXMuX2NvbGxlY3RpYmxlcy5zcGxpY2UodGhpcy5fY29sbGVjdGlibGVzLmluZGV4T2YoY29sbGVjdGlibGUsIDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdGNvbGxlY3RpYmxlLnggPSBjb2xsZWN0aWJsZURhdGEueDtcclxuXHRcdGNvbGxlY3RpYmxlLnkgPSBjb2xsZWN0aWJsZURhdGEueTtcclxuXHRcdHRoaXMuX2NvbGxlY3RpYmxlc0xheWVyLmFkZENoaWxkKGNvbGxlY3RpYmxlKTtcclxuXHRcdHRoaXMuX2NvbGxlY3RpYmxlcy5wdXNoKGNvbGxlY3RpYmxlKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlQmxvY2soYmxvY2tEYXRhOklCbG9jayk6QmxvY2sge1xyXG5cdFx0Y29uc3QgYmxvY2tUeXBlRGF0YTpJQmxvY2tUeXBlID0gdGhpcy5fYmxvY2tUeXBlQnlUeXBlSWQuZ2V0KGJsb2NrRGF0YS50eXBlKTtcclxuXHRcdGNvbnN0IGJsb2NrOkJsb2NrID0gbmV3IEJsb2NrKGJsb2NrRGF0YSwgYmxvY2tUeXBlRGF0YSk7XHJcblx0XHRibG9jay54ID0gYmxvY2tEYXRhLnggLSBibG9ja1R5cGVEYXRhLmNvbGxpc2lvbi5sZWZ0O1xyXG5cdFx0YmxvY2sueSA9IGJsb2NrRGF0YS55IC0gYmxvY2tUeXBlRGF0YS5jb2xsaXNpb24udG9wO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmFkZENoaWxkKGJsb2NrKTtcclxuXHRcdHRoaXMuX2Jsb2Nrcy5wdXNoKGJsb2NrKTtcclxuXHJcblx0XHRpZiAoR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpIHtcclxuXHRcdFx0dGhpcy5tYWtlQmxvY2tJbnRlcmFjdGl2ZShibG9jayk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGJsb2NrO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhZGRLZXlMaXN0ZW5lcnMoKTp2b2lkIHtcclxuXHRcdFdpbmRvd0V2ZW50cy5hZGQoXHJcblx0XHRcdFdpbmRvd0V2ZW50cy5LRVlfRE9XTixcclxuXHRcdFx0KGU6S2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMua2V5RG93bkhhbmRsZXIoZSk7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cclxuXHRcdFdpbmRvd0V2ZW50cy5hZGQoXHJcblx0XHRcdFdpbmRvd0V2ZW50cy5LRVlfVVAsXHJcblx0XHRcdChlOktleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLmtleVVwSGFuZGxlcihlKTtcclxuXHRcdFx0fSxcclxuXHRcdCk7XHJcblxyXG5cdFx0V2luZG93RXZlbnRzLmFkZChcclxuXHRcdFx0V2luZG93RXZlbnRzLkZPQ1VTX09VVCxcclxuXHRcdFx0KGU6YW55KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5mb2N1c091dEhhbmRsZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdENvbGxpc2lvbk9iamVjdHNTb3J0ZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2NvbGxpc2lvbk9iamVjdHNTb3J0ZXIgPSBuZXcgQ29sbGlzaW9uT2JqZWN0c1NvcnRlcih0aGlzLl9jb2xsaXNpb25zTGF5ZXIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB0aWNrKCk6dm9pZCB7XHJcblx0XHR0aGlzLnJlZnJlc2hQbGF5ZXJTcGVlZFgoKTtcclxuXHRcdHRoaXMucmVmcmVzaFBsYXllclNwZWVkWSgpO1xyXG5cdFx0dGhpcy5fcGxheWVyTW92ZXIucmVmcmVzaCgpO1xyXG5cdFx0aWYgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKVxyXG5cdFx0XHR0aGlzLnJlZnJlc2hDb2xsaXNpb25SZWN0YW5nbGVzKCk7XHJcblx0XHR0aGlzLl9jb2xsaXNpb25PYmplY3RzU29ydGVyLnNvcnQoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaENvbGxpc2lvblJlY3RhbmdsZXMoKTp2b2lkIHtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgaGl0OiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRpICE9IGogJiZcclxuXHRcdFx0XHRcdEhpdFRlc3QuaG9yaXpvbnRhbCh0aGlzLl9ibG9ja3NbaV0sIHRoaXMuX2Jsb2Nrc1tqXSkgJiZcclxuXHRcdFx0XHRcdEhpdFRlc3QudmVydGljYWwodGhpcy5fYmxvY2tzW2ldLCB0aGlzLl9ibG9ja3Nbal0pXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRoaXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tpXS5zaG93QmxvY2tIaXQoaGl0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVmcmVzaFBsYXllclNwZWVkWCgpOnZvaWQge1xyXG5cdFx0Y29uc3Qgc2xvd2Rvd246Ym9vbGVhbiA9ICF0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX0xFRlQpICYmICF0aGlzLl9wcmVzc2VkQnV0dG9ucy5nZXQoS0VZX1JJR0hUKTtcclxuXHRcdGlmICghc2xvd2Rvd24gfHwgTWF0aC5hYnModGhpcy5fcGxheWVyLmdldFNwZWVkWCgpKSA+IC4xKSB7XHJcblx0XHRcdGxldCBkaXJlY3Rpb246IG51bWJlcjtcclxuXHRcdFx0aWYgKHRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfTEVGVCkgJiYgdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9SSUdIVCkpIHtcclxuXHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLl9sYXN0UHJlc3NlZERpcmVjdGlvbkJ1dHRvbiA9PSBLRVlfTEVGVCA/IC0xIDogMTtcclxuXHRcdFx0fSBlbHNlIGlmIChzbG93ZG93bikge1xyXG5cdFx0XHRcdGRpcmVjdGlvbiA9IHRoaXMuX3BsYXllci5nZXRTcGVlZFgoKSA+IDAgPyAtMSA6IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy5fcHJlc3NlZEJ1dHRvbnMuZ2V0KEtFWV9MRUZUKSA/IC0xIDogMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgZGlzdGFuY2U6IG51bWJlcjtcclxuXHRcdFx0aWYgKHNsb3dkb3duKSB7XHJcblx0XHRcdFx0ZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRpc3RhbmNlID0gUGxheWVyLk1BWF9NT1ZJTkdfU1BFRUQgLSB0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkgKiBkaXJlY3Rpb247XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWCh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkgKyBkaXN0YW5jZSAqIGRpcmVjdGlvbiAqIFBsYXllci5NT1ZJTkdfQUNDRUxFUkFUSU9OX0ZBQ1RPUik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRYKDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWZyZXNoUGxheWVyU3BlZWRZKCk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5fcGxheWVyLm9uVGhlRmxvb3IgJiYgdGhpcy5fanVtcCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIuc2V0U3BlZWRZKFBsYXllci5KVU1QX1NQRUVEKTtcclxuXHRcdFx0dGhpcy5fanVtcCA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5fcGxheWVyLm9uVGhlRmxvb3IgJiYgIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChLRVlfVVApICYmIHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSA8IDApIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnNldFNwZWVkWSgwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFkodGhpcy5fcGxheWVyLmdldFNwZWVkWSgpICsgUGxheWVyLkdSQVZJVFkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBrZXlEb3duSGFuZGxlcihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xyXG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdFx0Y2FzZSBLRVlfTEVGVDpcclxuXHRcdFx0Y2FzZSBLRVlfUklHSFQ6XHJcblx0XHRcdFx0dGhpcy5fbGFzdFByZXNzZWREaXJlY3Rpb25CdXR0b24gPSBlLmNvZGU7XHJcblx0XHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGUuY29kZSwgdHJ1ZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9VUDpcclxuXHRcdFx0XHRpZiAoIXRoaXMuX3ByZXNzZWRCdXR0b25zLmdldChlLmNvZGUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9qdW1wID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLnNldChlLmNvZGUsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0JBQ0tRVU9URTpcclxuXHRcdFx0XHRpZiAoIXByb2Nlc3MuZW52LlJFTEVBU0UpIHtcclxuXHRcdFx0XHRcdEdsb2JhbHMuc2V0RGV2ZWxvcGVyTW9kZSghR2xvYmFscy5nZXREZXZlbG9wZXJNb2RlKCkpO1xyXG5cdFx0XHRcdFx0aWYgKEdsb2JhbHMuZ2V0RGV2ZWxvcGVyTW9kZSgpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZW5hYmxlRGV2ZWxvcGVyTW9kZSgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXNhYmxlRGV2ZWxvcGVyTW9kZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJEZXZlbG9wZXIgbW9kZSBpcyBcIiArIChHbG9iYWxzLmdldERldmVsb3Blck1vZGUoKSA/IFwiT05cIiA6IFwiT0ZGXCIpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9KOlxyXG5cdFx0XHRcdGlmICghcHJvY2Vzcy5lbnYuUkVMRUFTRSkge1xyXG5cdFx0XHRcdFx0dGhpcy5wcmludExldmVsSnNvbigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0RFTEVURTpcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVNlbGVjdGVkQmxvY2tJZkNhbigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBLRVlfQ09NTUE6XHJcblx0XHRcdGNhc2UgS0VZX1BFUklPRDpcclxuXHRcdFx0XHRpZiAodGhpcy5fc2VsZWN0ZWRCbG9jayAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRCbG9ja0RhdGE6SUJsb2NrID0geyAuLi50aGlzLl9zZWxlY3RlZEJsb2NrLmdldERhdGEoKSB9O1xyXG5cdFx0XHRcdFx0bGV0IHNlbGVjdGVkQmxvY2tUeXBlRGF0YTpJQmxvY2tUeXBlID0gdGhpcy5fYmxvY2tUeXBlQnlUeXBlSWQuZ2V0KHNlbGVjdGVkQmxvY2tEYXRhLnR5cGUpO1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4T2ZTZWxlY3RlZEJsb2NrVHlwZTpudW1iZXIgPSB0aGlzLl9ibG9ja3NUeXBlcy5pbmRleE9mKHNlbGVjdGVkQmxvY2tUeXBlRGF0YSk7XHJcblx0XHRcdFx0XHRsZXQgbmV4dFR5cGVJbmRleDpudW1iZXIgPSBlLmNvZGUgPT0gS0VZX0NPTU1BID8gaW5kZXhPZlNlbGVjdGVkQmxvY2tUeXBlIC0gMSA6IGluZGV4T2ZTZWxlY3RlZEJsb2NrVHlwZSArIDE7XHJcblx0XHRcdFx0XHRpZiAobmV4dFR5cGVJbmRleCA8IDApXHJcblx0XHRcdFx0XHRcdG5leHRUeXBlSW5kZXggPSB0aGlzLl9ibG9ja3NUeXBlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAobmV4dFR5cGVJbmRleCA+PSB0aGlzLl9ibG9ja3NUeXBlcy5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdG5leHRUeXBlSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdGVkQmxvY2tEYXRhLnggPSB0aGlzLl9zZWxlY3RlZEJsb2NrLmNvbGxpc2lvbkxlZnQoKTtcclxuXHRcdFx0XHRcdHNlbGVjdGVkQmxvY2tEYXRhLnkgPSB0aGlzLl9zZWxlY3RlZEJsb2NrLmNvbGxpc2lvblRvcCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5kZWxldGVTZWxlY3RlZEJsb2NrSWZDYW4oKTtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3RlZEJsb2NrRGF0YS50eXBlID0gdGhpcy5fYmxvY2tzVHlwZXNbbmV4dFR5cGVJbmRleF0uaWQ7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEJsb2NrKHRoaXMuY3JlYXRlQmxvY2soc2VsZWN0ZWRCbG9ja0RhdGEpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEtFWV9OOlxyXG5cdFx0XHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3QmxvY2tTaGlmdDpudW1iZXIgPSAyMDtcclxuXHRcdFx0XHRcdGxldCBuZXdCbG9ja0RhdGE6SUJsb2NrID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLl9zZWxlY3RlZEJsb2NrLmdldFR5cGVEYXRhKCkuaWQsXHJcblx0XHRcdFx0XHRcdHg6IHRoaXMuX3NlbGVjdGVkQmxvY2suY29sbGlzaW9uTGVmdCgpICsgbmV3QmxvY2tTaGlmdCxcclxuXHRcdFx0XHRcdFx0eTogdGhpcy5fc2VsZWN0ZWRCbG9jay5jb2xsaXNpb25Ub3AoKSAtIG5ld0Jsb2NrU2hpZnQsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RCbG9jayh0aGlzLmNyZWF0ZUJsb2NrKG5ld0Jsb2NrRGF0YSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgS0VZX0M6XHJcblx0XHRcdFx0dGhpcy5fY2hhbmdlQ2FtZXJhQ2FsbGJhY2sodGhpcy5fbGV2ZWxEYXRhLnN0YWdlLndpZHRoLCB0aGlzLl9sZXZlbERhdGEuc3RhZ2UuaGVpZ2h0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZS5jb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2VsZWN0QmxvY2soYmxvY2s6QmxvY2spOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdGVkQmxvY2sgPT0gYmxvY2spIHJldHVybjtcclxuXHRcdGlmICh0aGlzLl9zZWxlY3RlZEJsb2NrICE9IG51bGwpXHJcblx0XHRcdHRoaXMuX3NlbGVjdGVkQmxvY2suaGlkZVNlbGVjdGlvbigpO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IGJsb2NrO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRCbG9jay5zaG93U2VsZWN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRlbGV0ZVNlbGVjdGVkQmxvY2tJZkNhbigpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX3NlbGVjdGVkQmxvY2sgIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9zZWxlY3RlZEJsb2NrKTtcclxuXHRcdFx0bGV0IGJsb2NrSW5kZXggPSB0aGlzLl9ibG9ja3MuaW5kZXhPZih0aGlzLl9zZWxlY3RlZEJsb2NrKTtcclxuXHRcdFx0dGhpcy5fYmxvY2tzLnNwbGljZShibG9ja0luZGV4LCAxKTtcclxuXHRcdFx0dGhpcy5fc2VsZWN0ZWRCbG9jayA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGVuYWJsZURldmVsb3Blck1vZGUoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BsYXllci5zaG93Q29sbGlzaW9ucygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goYmxvY2sgPT4gdGhpcy5tYWtlQmxvY2tJbnRlcmFjdGl2ZShibG9jaykpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtYWtlQmxvY2tJbnRlcmFjdGl2ZShibG9jazpCbG9jayk6dm9pZCB7XHJcblx0XHRibG9jay5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcblx0XHRibG9jay5hZGRMaXN0ZW5lcihQT0lOVEVSX0RPV04sIHRoaXMuYmxvY2tQb2ludGVyRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtYWtlQmxvY2tOb3RJbnRlcmFjdGl2ZShibG9jazpCbG9jayk6dm9pZCB7XHJcblx0XHRibG9jay5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0YmxvY2sucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGJsb2NrUG9pbnRlckRvd25IYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudEJsb2NrOkJsb2NrID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgQmxvY2spO1xyXG5cdFx0Y29uc3QgcG9pbnRlckRvd25Qb2ludDpQb2ludCA9IG5ldyBQb2ludChldmVudC5kYXRhLmdsb2JhbC54LCBldmVudC5kYXRhLmdsb2JhbC55KTtcclxuXHRcdGN1cnJlbnRCbG9jay5sb2NhbERyYWdQb2ludCA9IGN1cnJlbnRCbG9jay50b0xvY2FsKHBvaW50ZXJEb3duUG9pbnQpO1xyXG5cdFx0Y3VycmVudEJsb2NrLmFkZExpc3RlbmVyKFBPSU5URVJfTU9WRSwgdGhpcy5ibG9ja1BvaW50ZXJNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblx0XHRjdXJyZW50QmxvY2suYWRkTGlzdGVuZXIoUE9JTlRFUl9VUCwgdGhpcy5ibG9ja1BvaW50ZXJVcEhhbmRsZXIsIHRoaXMpO1xyXG5cdFx0Y3VycmVudEJsb2NrLmFkZExpc3RlbmVyKFBPSU5URVJfVVBfT1VUU0lERSwgdGhpcy5ibG9ja1BvaW50ZXJVcEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0QmxvY2soY3VycmVudEJsb2NrKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYmxvY2tQb2ludGVyTW92ZUhhbmRsZXIoZXZlbnQ6SW50ZXJhY3Rpb25FdmVudCk6dm9pZCB7XHJcblx0XHRjb25zdCBjdXJyZW50QmxvY2s6QmxvY2sgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBCbG9jayk7XHJcblx0XHRjb25zdCBjb250YWluZXJEcmFnUG9pbnQ6UG9pbnQgPSB0aGlzLnRvTG9jYWwobmV3IFBvaW50KGV2ZW50LmRhdGEuZ2xvYmFsLngsIGV2ZW50LmRhdGEuZ2xvYmFsLnkpKTtcclxuXHRcdGN1cnJlbnRCbG9jay54ID0gTWF0aC5yb3VuZChjb250YWluZXJEcmFnUG9pbnQueCAtIGN1cnJlbnRCbG9jay5sb2NhbERyYWdQb2ludC54KTtcclxuXHRcdGN1cnJlbnRCbG9jay55ID0gTWF0aC5yb3VuZChjb250YWluZXJEcmFnUG9pbnQueSAtIGN1cnJlbnRCbG9jay5sb2NhbERyYWdQb2ludC55KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYmxvY2tQb2ludGVyVXBIYW5kbGVyKGV2ZW50OkludGVyYWN0aW9uRXZlbnQpOnZvaWQge1xyXG5cdFx0Y29uc3QgY3VycmVudEJsb2NrOkJsb2NrID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgQmxvY2spO1xyXG5cdFx0Y3VycmVudEJsb2NrLnJlbW92ZUFsbExpc3RlbmVycyhQT0lOVEVSX01PVkUpO1xyXG5cdFx0Y3VycmVudEJsb2NrLnJlbW92ZUFsbExpc3RlbmVycyhQT0lOVEVSX1VQKTtcclxuXHRcdGN1cnJlbnRCbG9jay5yZW1vdmVBbGxMaXN0ZW5lcnMoUE9JTlRFUl9VUF9PVVRTSURFKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZGlzYWJsZURldmVsb3Blck1vZGUoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3BsYXllci5oaWRlQ29sbGlzaW9ucygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goKGJsb2NrOkJsb2NrKSA9PiB7XHJcblx0XHRcdHRoaXMubWFrZUJsb2NrTm90SW50ZXJhY3RpdmUoYmxvY2spO1xyXG5cdFx0XHRibG9jay5oaWRlQmxvY2tIaXQoKTtcclxuXHRcdFx0YmxvY2suaGlkZVNlbGVjdGlvbigpO1xyXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEJsb2NrID0gbnVsbDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcmludExldmVsSnNvbigpOnZvaWQge1xyXG5cdFx0Y29uc3QgYmxvY2tzRGF0YTpJQmxvY2tbXSA9IFtdO1xyXG5cdFx0dGhpcy5fY29sbGlzaW9uc0xheWVyLmNoaWxkcmVuLmZvckVhY2goKGNvbGxpc2lvbk9iamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAoY29sbGlzaW9uT2JqZWN0IGluc3RhbmNlb2YgQmxvY2spIHtcclxuXHRcdFx0XHRibG9ja3NEYXRhLnB1c2goe1xyXG5cdFx0XHRcdFx0Li4uY29sbGlzaW9uT2JqZWN0LmdldERhdGEoKSxcclxuXHRcdFx0XHRcdHg6IGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25MZWZ0KCksXHJcblx0XHRcdFx0XHR5OiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uVG9wKCksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbGV2ZWxEYXRhOklMZXZlbCA9IHtcclxuXHRcdFx0Li4udGhpcy5fbGV2ZWxEYXRhLFxyXG5cdFx0XHRibG9ja3M6YmxvY2tzRGF0YSxcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IGxldmVsSnNvbiA9IEpTT04uc3RyaW5naWZ5KGxldmVsRGF0YSwgbnVsbCwgMik7XHJcblx0XHRjb25zb2xlLmxvZyhsZXZlbEpzb24pO1xyXG5cdFx0dm9pZCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsZXZlbEpzb24pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBrZXlVcEhhbmRsZXIoZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcclxuXHRcdGlmIChlLmNvZGUgPT0gS0VZX1VQKSB7XHJcblx0XHRcdHRoaXMuX2p1bXAgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0XHRjYXNlIEtFWV9VUDpcclxuXHRcdFx0Y2FzZSBLRVlfTEVGVDpcclxuXHRcdFx0Y2FzZSBLRVlfUklHSFQ6XHJcblx0XHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGUuY29kZSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBmb2N1c091dEhhbmRsZXIoKTp2b2lkIHtcclxuXHRcdHRoaXMuX3ByZXNzZWRCdXR0b25zLmZvckVhY2goKHZhbHVlOmJvb2xlYW4sIGtleTpzdHJpbmcpID0+IHtcclxuXHRcdFx0dGhpcy5fcHJlc3NlZEJ1dHRvbnMuc2V0KGtleSwgZmFsc2UpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IFNwcml0ZSA9IFBJWEkuU3ByaXRlO1xyXG5pbXBvcnQgQ29sbGlzaW9uT2JqZWN0IGZyb20gXCIuL0NvbGxpc2lvbk9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29sbGlzaW9uT2JqZWN0IHtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNLSU5fTkFNRTpzdHJpbmcgPSBcImltZy9wbGF5ZXIvcGxheWVyLnBuZ1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0lOTkVSX1NLSU5fTkFNRTpzdHJpbmcgPSBcImltZy9wbGF5ZXIvd2lubmVyLnBuZ1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JBVklUWTpudW1iZXIgPSAwLjU4ODY7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBKVU1QX1NQRUVEOm51bWJlciA9IC0xNztcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1BWF9NT1ZJTkdfU1BFRUQ6bnVtYmVyID0gODtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1PVklOR19BQ0NFTEVSQVRJT05fRkFDVE9SOm51bWJlciA9IC40O1xyXG5cclxuXHRwdWJsaWMgb25UaGVGbG9vcjpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX3NwZWVkWDpudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgX3NwZWVkWTpudW1iZXIgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9za2luQ29udGFpbmVyOlNwcml0ZTtcclxuXHRwcml2YXRlIF9jdXJyZW50U2tpbjpTcHJpdGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX3NraW5Db250YWluZXIgPSBuZXcgU3ByaXRlKCk7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3NraW5Db250YWluZXIpO1xyXG5cdFx0dGhpcy5fY3VycmVudFNraW4gPSBTcHJpdGUuZnJvbShQbGF5ZXIuU0tJTl9OQU1FKTtcclxuXHRcdHRoaXMuX3NraW5Db250YWluZXIuYWRkQ2hpbGQodGhpcy5fY3VycmVudFNraW4pO1xyXG5cdFx0dGhpcy5zZXRMb2NhbENvbGxpc2lvblZhbHVlcygzMCwgMTU3LCAxNSwgMTQyKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRTcGVlZFgodmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuX3NwZWVkWCA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFNwZWVkWCgpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3BlZWRYO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFNwZWVkWSh2YWx1ZTpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5fc3BlZWRZID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0U3BlZWRZKCk6bnVtYmVyIHtcclxuXHRcdGNvbnN0IG1heFNwZWVkWTpudW1iZXIgPSAzMDtcclxuXHRcdHJldHVybiBNYXRoLm1pbih0aGlzLl9zcGVlZFksIG1heFNwZWVkWSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0V2lubmVyU2tpbigpOnZvaWQge1xyXG5cdFx0dGhpcy5fY3VycmVudFNraW4ucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX2N1cnJlbnRTa2luKTtcclxuXHRcdHRoaXMuX2N1cnJlbnRTa2luID0gU3ByaXRlLmZyb20oUGxheWVyLldJTk5FUl9TS0lOX05BTUUpO1xyXG5cdFx0dGhpcy5fc2tpbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9jdXJyZW50U2tpbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2hvd0NvbGxpc2lvbnMoKTp2b2lkIHtcclxuXHRcdHRoaXMuc2hvd0NvbGxpc2lvblJlY3RhbmdsZSgweDAwZmYwMCk7XHJcblx0XHR0aGlzLl9za2luQ29udGFpbmVyLmFscGhhID0gLjM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGlkZUNvbGxpc2lvbnMoKTp2b2lkIHtcclxuXHRcdHRoaXMuaGlkZUNvbGxpc2lvblJlY3RhbmdsZSgpO1xyXG5cdFx0dGhpcy5fc2tpbkNvbnRhaW5lci5hbHBoYSA9IDE7XHJcblx0fVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IEhpdFRlc3QgZnJvbSBcIi4vSGl0VGVzdFwiO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcclxuaW1wb3J0IENvbGxpc2lvbk9iamVjdCBmcm9tIFwiLi9Db2xsaXNpb25PYmplY3RcIjtcclxuaW1wb3J0IHtJTGV2ZWwsIElMZXZlbEJvcmRlcnMsIElTdGFnZX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IENvbGxlY3RpYmxlIGZyb20gXCIuL0NvbGxlY3RpYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNb3ZlciB7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSE9SSVpPTlRBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBWRVJUSUNBTDpzeW1ib2wgPSBTeW1ib2woKTtcclxuXHRwcml2YXRlIF9wbGF5ZXI6UGxheWVyO1xyXG5cdHByaXZhdGUgX3BsYXllckNlbnRlclg6bnVtYmVyO1xyXG5cdHByaXZhdGUgX3BsYXllckNlbnRlclk6bnVtYmVyO1xyXG5cdHByaXZhdGUgX2Jsb2NrczpCbG9ja1tdO1xyXG5cdHByaXZhdGUgX2NvbGxlY3RpYmxlczpDb2xsZWN0aWJsZVtdO1xyXG5cdHByaXZhdGUgX3N0YWdlOklTdGFnZTtcclxuXHRwcml2YXRlIF9ib3JkZXJzOklMZXZlbEJvcmRlcnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfc2V0TGV2ZWxDYWxsYmFjazoobGV2ZWw6bnVtYmVyKSA9PiBJTGV2ZWwsXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0TGV2ZWxEYXRhKFxyXG5cdFx0cGxheWVyOlBsYXllcixcclxuXHRcdGJsb2NrczpCbG9ja1tdLFxyXG5cdFx0Y29sbGVjdGlibGVzOkNvbGxlY3RpYmxlW10sXHJcblx0XHRzdGFnZTpJU3RhZ2UsXHJcblx0XHRib3JkZXJzOklMZXZlbEJvcmRlcnMsXHJcblx0KSB7XHJcblx0XHR0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLl9wbGF5ZXJDZW50ZXJYID0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uQ2VudGVyWCgpIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0dGhpcy5fcGxheWVyQ2VudGVyWSA9IHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkNlbnRlclkoKSArIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblRvcCgpO1xyXG5cdFx0dGhpcy5fYmxvY2tzID0gYmxvY2tzO1xyXG5cdFx0dGhpcy5fY29sbGVjdGlibGVzID0gY29sbGVjdGlibGVzO1xyXG5cdFx0dGhpcy5fc3RhZ2UgPSBzdGFnZTtcclxuXHRcdHRoaXMuX2JvcmRlcnMgPSBib3JkZXJzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlZnJlc2goKTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRYKCkgIT09IDApIHtcclxuXHRcdFx0dGhpcy5tb3ZlKFxyXG5cdFx0XHRcdFBsYXllck1vdmVyLkhPUklaT05UQUwsXHJcblx0XHRcdFx0dGhpcy5fcGxheWVyLmdldFNwZWVkWCgpLFxyXG5cdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFgoMClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX3BsYXllci5nZXRTcGVlZFkoKSAhPT0gMCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIub25UaGVGbG9vciA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm1vdmUoXHJcblx0XHRcdFx0UGxheWVyTW92ZXIuVkVSVElDQUwsXHJcblx0XHRcdFx0dGhpcy5fcGxheWVyLmdldFNwZWVkWSgpLFxyXG5cdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9wbGF5ZXIuZ2V0U3BlZWRZKCkgPiAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3BsYXllci5vblRoZUZsb29yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuX3BsYXllci5zZXRTcGVlZFkoMCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZShcclxuXHRcdGRpcmVjdGlvbjpzeW1ib2wsXHJcblx0XHRzcGVlZDpudW1iZXIsXHJcblx0XHRvbkxpbWl0UG9zaXRpb246KCkgPT4gdm9pZCA9IG51bGwsXHJcblx0KTp2b2lkIHtcclxuXHRcdGxldCBsaW1pdFBvc2l0aW9uOm51bWJlciA9IG51bGw7XHJcblx0XHRsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihkaXJlY3Rpb24pO1xyXG5cdFx0bGV0IHRhcmdldFBvc2l0aW9uOm51bWJlciA9IE1hdGguZmxvb3IodGhpcy5nZXRQb3NpdGlvbihkaXJlY3Rpb24pICsgc3BlZWQpO1xyXG5cdFx0dGhpcy5fYmxvY2tzLmZvckVhY2goKGJsb2NrOkJsb2NrKSA9PiB7XHJcblx0XHRcdGxldCBibG9ja0xpbWl0UG9zaXRpb246bnVtYmVyID0gdGhpcy5jYWxjdWxhdGVMaW1pdFBvc2l0aW9uKGJsb2NrLCBkaXJlY3Rpb24sIHNwZWVkKTtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA8PSBibG9ja0xpbWl0UG9zaXRpb24gJiZcclxuXHRcdFx0XHRcdHRhcmdldFBvc2l0aW9uID4gYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGJsb2NrKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0bGltaXRQb3NpdGlvbiA9IGxpbWl0UG9zaXRpb24gIT09IG51bGwgPyBNYXRoLm1pbihsaW1pdFBvc2l0aW9uLCBibG9ja0xpbWl0UG9zaXRpb24pIDogYmxvY2tMaW1pdFBvc2l0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPj0gYmxvY2tMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA8IGJsb2NrTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0dGhpcy5oaXRUZXN0KGRpcmVjdGlvbiwgdGhpcy5fcGxheWVyLCBibG9jaylcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5tYXgobGltaXRQb3NpdGlvbiwgYmxvY2tMaW1pdFBvc2l0aW9uKSA6IGJsb2NrTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBwcm9jZXNzZWRUYXJnZXRQb3NpdGlvbiA9IGxpbWl0UG9zaXRpb24gIT0gbnVsbCA/IGxpbWl0UG9zaXRpb24gOiB0YXJnZXRQb3NpdGlvbjtcclxuXHRcdGxldCBzdGFnZUxpbWl0UG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVN0YWdlTGltaXRQb3NpdGlvbihkaXJlY3Rpb24sIHNwZWVkLCB0aGlzLl9zdGFnZSk7XHJcblx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPD0gc3RhZ2VMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0cHJvY2Vzc2VkVGFyZ2V0UG9zaXRpb24gPiBzdGFnZUxpbWl0UG9zaXRpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0bGV0IGJvcmRlciA9IHRoaXMuZ2V0Qm9yZGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChib3JkZXIgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByb2Nlc3NCb3JkZXIoYm9yZGVyLCBkaXJlY3Rpb24sIHNwZWVkLCBwcm9jZXNzZWRUYXJnZXRQb3NpdGlvbik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5taW4obGltaXRQb3NpdGlvbiwgc3RhZ2VMaW1pdFBvc2l0aW9uKSA6IHN0YWdlTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPj0gc3RhZ2VMaW1pdFBvc2l0aW9uICYmXHJcblx0XHRcdFx0cHJvY2Vzc2VkVGFyZ2V0UG9zaXRpb24gPCBzdGFnZUxpbWl0UG9zaXRpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0bGV0IGJvcmRlciA9IHRoaXMuZ2V0Qm9yZGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChib3JkZXIgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByb2Nlc3NCb3JkZXIoYm9yZGVyLCBkaXJlY3Rpb24sIHNwZWVkLCBwcm9jZXNzZWRUYXJnZXRQb3NpdGlvbik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbWl0UG9zaXRpb24gPSBsaW1pdFBvc2l0aW9uICE9PSBudWxsID8gTWF0aC5tYXgobGltaXRQb3NpdGlvbiwgc3RhZ2VMaW1pdFBvc2l0aW9uKSA6IHN0YWdlTGltaXRQb3NpdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGltaXRQb3NpdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLnNldFBvc2l0aW9uKGRpcmVjdGlvbiwgbGltaXRQb3NpdGlvbik7XHJcblx0XHRcdGlmIChvbkxpbWl0UG9zaXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0XHRvbkxpbWl0UG9zaXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIHRhcmdldFBvc2l0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9jb2xsZWN0aWJsZXMuZm9yRWFjaCgoY29sbGVjdGlibGU6Q29sbGVjdGlibGUpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuaGl0VGVzdChkaXJlY3Rpb24sIHRoaXMuX3BsYXllciwgY29sbGVjdGlibGUpKSB7XHJcblx0XHRcdFx0bGV0IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbjpudW1iZXIgPSB0aGlzLmNhbGN1bGF0ZUxpbWl0UG9zaXRpb24oY29sbGVjdGlibGUsIGRpcmVjdGlvbiwgc3BlZWQpO1xyXG5cdFx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uIDw9IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA+IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGNvbGxlY3RpYmxlKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3RpYmxlLm9uSGl0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID49IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0YXJnZXRQb3NpdGlvbiA8IGNvbGxlY3RpYmxlTGltaXRQb3NpdGlvbiAmJlxyXG5cdFx0XHRcdFx0XHR0aGlzLmhpdFRlc3QoZGlyZWN0aW9uLCB0aGlzLl9wbGF5ZXIsIGNvbGxlY3RpYmxlKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbGxlY3RpYmxlLm9uSGl0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJvY2Vzc0JvcmRlcihib3JkZXI6bnVtYmVyLCBkaXJlY3Rpb246c3ltYm9sLCBzcGVlZDpudW1iZXIsIHRhcmdldFBvc2l0aW9uOm51bWJlcik6dm9pZCB7XHJcblx0XHRsZXQgbmV3U3RhZ2UgPSB0aGlzLl9zZXRMZXZlbENhbGxiYWNrKGJvcmRlcikuc3RhZ2U7XHJcblx0XHRsZXQgc3RhZ2VMaW1pdFBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVTdGFnZUxpbWl0UG9zaXRpb24oZGlyZWN0aW9uLCBzcGVlZCwgdGhpcy5fc3RhZ2UpO1xyXG5cdFx0bGV0IGV4Y2Vzc0Rpc3RhbmNlID0gTWF0aC5hYnModGFyZ2V0UG9zaXRpb24gLSBzdGFnZUxpbWl0UG9zaXRpb24pIC0gMTtcclxuXHRcdGxldCBuZXh0UGxheWVyUG9zaXRpb246bnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQbGF5ZXJQb3NpdGlvbkZvclRoZU5leHRMZXZlbChkaXJlY3Rpb24sIHNwZWVkLCBuZXdTdGFnZSwgZXhjZXNzRGlzdGFuY2UpO1xyXG5cdFx0dGhpcy5zZXRQb3NpdGlvbihkaXJlY3Rpb24sIG5leHRQbGF5ZXJQb3NpdGlvbik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZVBsYXllclBvc2l0aW9uRm9yVGhlTmV4dExldmVsKFxyXG5cdFx0ZGlyZWN0aW9uOnN5bWJvbCxcclxuXHRcdHNwZWVkOm51bWJlcixcclxuXHRcdHN0YWdlOklTdGFnZSxcclxuXHRcdGV4Y2Vzc0Rpc3RhbmNlOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGxldCBvcHBvc2l0ZUxpbWl0Om51bWJlciA9IHRoaXMuY2FsY3VsYXRlU3RhZ2VMaW1pdFBvc2l0aW9uKGRpcmVjdGlvbiwgc3BlZWQgKiAtMSwgc3RhZ2UpO1xyXG5cdFx0aWYgKGRpcmVjdGlvbiA9PSBQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMKSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCArIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvcHBvc2l0ZUxpbWl0IC0gZXhjZXNzRGlzdGFuY2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gb3Bwb3NpdGVMaW1pdCArIGV4Y2Vzc0Rpc3RhbmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvcHBvc2l0ZUxpbWl0IC0gZXhjZXNzRGlzdGFuY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Qm9yZGVyKGRpcmVjdGlvbjpzeW1ib2wsIHNwZWVkOm51bWJlcik6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gKHNwZWVkID4gMCkgPyB0aGlzLl9ib3JkZXJzLnJpZ2h0IDogdGhpcy5fYm9yZGVycy5sZWZ0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIChzcGVlZCA+IDApID8gdGhpcy5fYm9yZGVycy5ib3R0b20gOiB0aGlzLl9ib3JkZXJzLnRvcDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCwgdmFsdWU6bnVtYmVyKTp2b2lkIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHR0aGlzLl9wbGF5ZXIueCA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGxheWVyLnkgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCk6bnVtYmVyIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLng7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGxheWVyLnk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGN1bGF0ZUxpbWl0UG9zaXRpb24oY29sbGlzaW9uT2JqZWN0OkNvbGxpc2lvbk9iamVjdCwgZGlyZWN0aW9uOnN5bWJvbCwgc3BlZWQ6bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0aWYgKGRpcmVjdGlvbiA9PSBQbGF5ZXJNb3Zlci5IT1JJWk9OVEFMKSB7XHJcblx0XHRcdGlmIChzcGVlZCA+IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gY29sbGlzaW9uT2JqZWN0LmNvbGxpc2lvbkxlZnQoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvblJpZ2h0KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25SaWdodCgpIC0gdGhpcy5fcGxheWVyLmxvY2FsQ29sbGlzaW9uTGVmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbGxpc2lvbk9iamVjdC5jb2xsaXNpb25Ub3AoKSAtIHRoaXMuX3BsYXllci5sb2NhbENvbGxpc2lvbkJvdHRvbSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBjb2xsaXNpb25PYmplY3QuY29sbGlzaW9uQm90dG9tKCkgLSB0aGlzLl9wbGF5ZXIubG9jYWxDb2xsaXNpb25Ub3AoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxjdWxhdGVTdGFnZUxpbWl0UG9zaXRpb24oZGlyZWN0aW9uOnN5bWJvbCwgc3BlZWQ6bnVtYmVyLCBzdGFnZTpJU3RhZ2UpOm51bWJlciB7XHJcblx0XHRpZiAoZGlyZWN0aW9uID09IFBsYXllck1vdmVyLkhPUklaT05UQUwpIHtcclxuXHRcdFx0aWYgKHNwZWVkID4gMCkge1xyXG5cdFx0XHRcdHJldHVybiBzdGFnZS53aWR0aCAtIHRoaXMuX3BsYXllckNlbnRlclg7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIC10aGlzLl9wbGF5ZXJDZW50ZXJYO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc3BlZWQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YWdlLmhlaWdodCAtIHRoaXMuX3BsYXllckNlbnRlclk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIC10aGlzLl9wbGF5ZXJDZW50ZXJZO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhpdFRlc3QoZGlyZWN0aW9uOnN5bWJvbCwgb2JqZWN0MTpDb2xsaXNpb25PYmplY3QsIG9iamVjdDI6Q29sbGlzaW9uT2JqZWN0KTpib29sZWFuIHtcclxuXHRcdGlmIChkaXJlY3Rpb24gPT0gUGxheWVyTW92ZXIuSE9SSVpPTlRBTCkge1xyXG5cdFx0XHRyZXR1cm4gSGl0VGVzdC52ZXJ0aWNhbChvYmplY3QxLCBvYmplY3QyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBIaXRUZXN0Lmhvcml6b250YWwob2JqZWN0MSwgb2JqZWN0Mik7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtJTGV2ZWwsIElMZXZlbHNNZXRhZGF0YX0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsc01hbmFnZXIge1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9sZXZlbEJ5SWQ6TWFwPG51bWJlciwgSUxldmVsPiA9IG5ldyBNYXA8bnVtYmVyLCBJTGV2ZWw+KCk7XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2xldmVsc01ldGFkYXRhOklMZXZlbHNNZXRhZGF0YTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBhZGRMZXZlbChsZXZlbERhdGE6SUxldmVsKTp2b2lkIHtcclxuXHRcdExldmVsc01hbmFnZXIuX2xldmVsQnlJZC5zZXQobGV2ZWxEYXRhLmlkLCBsZXZlbERhdGEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBhZGRMZXZlbHNNZXRhZGF0YShtZXRhZGF0YTpJTGV2ZWxzTWV0YWRhdGEpOnZvaWQge1xyXG5cdFx0TGV2ZWxzTWFuYWdlci5fbGV2ZWxzTWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0TGV2ZWwobGV2ZWxJZDpudW1iZXIpOklMZXZlbCB7XHJcblx0XHRyZXR1cm4gTGV2ZWxzTWFuYWdlci5fbGV2ZWxCeUlkLmdldChsZXZlbElkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0TGV2ZWxzTWV0YWRhdGEoKTpJTGV2ZWxzTWV0YWRhdGEge1xyXG5cdFx0cmV0dXJuIExldmVsc01hbmFnZXIuX2xldmVsc01ldGFkYXRhO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0UmVxdWVzdCB7XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3N1Y2Nlc3NSZXF1ZXN0c0lkczpTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0czpNYXA8c3RyaW5nLCBBYnN0cmFjdFJlcXVlc3Q+ID0gbmV3IE1hcDxzdHJpbmcsIEFic3RyYWN0UmVxdWVzdD4oKTtcclxuXHJcblx0cHJvdGVjdGVkIF9yZXF1ZXN0SWQ6c3RyaW5nID0gbnVsbDtcclxuXHRwcml2YXRlIF9yZXF1ZXN0UHJvbWlzZTpQcm9taXNlPHZvaWQ+O1xyXG5cclxuXHRwdWJsaWMgY3JlYXRlUHJvbWlzZShmb3JjZWRSZXF1ZXN0OmJvb2xlYW4gPSBmYWxzZSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRpZiAodGhpcy5fcmVxdWVzdElkICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChmb3JjZWRSZXF1ZXN0KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlVW5pcXVlUmVxdWVzdFByb21pc2UoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoQWJzdHJhY3RSZXF1ZXN0Ll9zdWNjZXNzUmVxdWVzdHNJZHMuaGFzKHRoaXMuX3JlcXVlc3RJZCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVtcHR5UHJvbWlzZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zdCB1bmlxdWVSZXF1ZXN0OkFic3RyYWN0UmVxdWVzdCA9IEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuZ2V0KHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRpZiAodW5pcXVlUmVxdWVzdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVXYWl0UHJvbWlzZSh1bmlxdWVSZXF1ZXN0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVVuaXF1ZVJlcXVlc3RQcm9taXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0UHJvbWlzZUZhY3RvcnkoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRSZXF1ZXN0UHJvbWlzZSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3RQcm9taXNlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVFbXB0eVByb21pc2UoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRyZXNvbHZlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlV2FpdFByb21pc2UodW5pcXVlUmVxdWVzdDpBYnN0cmFjdFJlcXVlc3QpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dW5pcXVlUmVxdWVzdC5nZXRSZXF1ZXN0UHJvbWlzZSgpXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxyXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiByZWplY3QoKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlVW5pcXVlUmVxdWVzdFByb21pc2UoKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuc2V0KHRoaXMuX3JlcXVlc3RJZCwgdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXF1ZXN0UHJvbWlzZSA9IHRoaXMucmVxdWVzdFByb21pc2VGYWN0b3J5KCk7XHJcblx0XHRcdHRoaXMuX3JlcXVlc3RQcm9taXNlXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0QWJzdHJhY3RSZXF1ZXN0Ll9leGVjdXRpbmdVbmlxdWVSZXF1ZXN0cy5kZWxldGUodGhpcy5fcmVxdWVzdElkKTtcclxuXHRcdFx0XHRcdEFic3RyYWN0UmVxdWVzdC5fc3VjY2Vzc1JlcXVlc3RzSWRzLmFkZCh0aGlzLl9yZXF1ZXN0SWQpO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdEFic3RyYWN0UmVxdWVzdC5fZXhlY3V0aW5nVW5pcXVlUmVxdWVzdHMuZGVsZXRlKHRoaXMuX3JlcXVlc3RJZCk7XHJcblx0XHRcdFx0XHRyZWplY3QoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHJlcXVlc3RQcm9taXNlRmFjdG9yeSgpOlByb21pc2U8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59IiwiaW1wb3J0IExvYWRlciA9IFBJWEkubG9hZGVycy5Mb2FkZXI7XHJcbmltcG9ydCBNaW5pU2lnbmFsQmluZGluZyA9IFBJWEkuTWluaVNpZ25hbEJpbmRpbmc7XHJcbmltcG9ydCBMb2FkZXJPcHRpb25zID0gUElYSS5sb2FkZXJzLkxvYWRlck9wdGlvbnM7XHJcbmltcG9ydCBSZXNvdXJjZSA9IFBJWEkubG9hZGVycy5SZXNvdXJjZTtcclxuaW1wb3J0IEFic3RyYWN0UmVxdWVzdCBmcm9tIFwiLi9BYnN0cmFjdFJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpeGlSZXF1ZXN0IGV4dGVuZHMgQWJzdHJhY3RSZXF1ZXN0IHtcclxuXHRwcml2YXRlIF9yZXN1bHQ6YW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX3VybDpzdHJpbmcsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fcmVxdWVzdElkID0gXCJQaXhpUmVxdWVzdDo6XCIgKyB0aGlzLl91cmw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UmVzdWx0KCk6YW55IHtcclxuXHRcdHJldHVybiB0aGlzLl9yZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVxdWVzdFByb21pc2VGYWN0b3J5KCk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBsb2FkZXI6TG9hZGVyID0gbmV3IExvYWRlcigpO1xyXG5cclxuXHRcdFx0bGV0IHN1Y2Nlc3M6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRjb25zdCBvbkxvYWRTaWduYWw6TWluaVNpZ25hbEJpbmRpbmcgPSBsb2FkZXIub25Mb2FkLmFkZCgoKSA9PiB7XHJcblx0XHRcdFx0c3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bGV0IGVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0bGV0IGVycm9yTWVzc2FnZTpzdHJpbmc7XHJcblx0XHRcdGNvbnN0IG9uRXJyb3JTaWduYWw6TWluaVNpZ25hbEJpbmRpbmcgPSBsb2FkZXIub25FcnJvci5hZGQoKGRhdGE6YW55KSA9PiB7XHJcblx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdGVycm9yTWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsZXQgb25Db21wbGV0ZVNpZ25hbDpNaW5pU2lnbmFsQmluZGluZztcclxuXHRcdFx0b25Db21wbGV0ZVNpZ25hbCA9IGxvYWRlci5vbkNvbXBsZXRlLmFkZCgoKSA9PiB7XHJcblx0XHRcdFx0b25Mb2FkU2lnbmFsLmRldGFjaCgpO1xyXG5cdFx0XHRcdG9uRXJyb3JTaWduYWwuZGV0YWNoKCk7XHJcblx0XHRcdFx0b25Db21wbGV0ZVNpZ25hbC5kZXRhY2goKTtcclxuXHRcdFx0XHRpZiAoc3VjY2VzcyAmJiAhZXJyb3IpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc3VsdCA9IGxvYWRlci5yZXNvdXJjZXNbdGhpcy5fdXJsXT8uZGF0YTtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgcmVzb3VyY2U6XCIsIGVycm9yTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRyZWplY3QoZXJyb3JNZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9hZGVyT3B0aW9uczpMb2FkZXJPcHRpb25zID0ge307XHJcblx0XHRcdGxvYWRlck9wdGlvbnMuY3Jvc3NPcmlnaW4gPSBmYWxzZTtcclxuXHRcdFx0bG9hZGVyT3B0aW9ucy5sb2FkVHlwZSA9IFJlc291cmNlLkxPQURfVFlQRS5YSFI7XHJcblxyXG5cdFx0XHRsb2FkZXIuYWRkKHRoaXMuX3VybCwgdGhpcy5fdXJsLCBsb2FkZXJPcHRpb25zKTtcclxuXHRcdFx0bG9hZGVyLmxvYWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9taXNlc0dyb3VwIHtcclxuXHRwdWJsaWMgc3RhdGljIHBhY2soZmFjdG9yaWVzOigoKSA9PiBQcm9taXNlPHZvaWQ+KVtdKTpQcm9taXNlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRsZXQgY29tcGxldGVkQ291bnRlcjpudW1iZXIgPSAwO1xyXG5cdFx0XHRmYWN0b3JpZXMuZm9yRWFjaCgoZmFjdG9yeTooKSA9PiBQcm9taXNlPHZvaWQ+KSA9PiB7XHJcblx0XHRcdFx0ZmFjdG9yeSgpXHJcblx0XHRcdFx0XHQuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlZENvdW50ZXIrKztcclxuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRlZENvdW50ZXIgPT0gZmFjdG9yaWVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHF1ZXVlKGZhY3RvcmllczooKCkgPT4gUHJvbWlzZTx2b2lkPilbXSk6UHJvbWlzZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgY29tcGxldGVkQ291bnRlcjpudW1iZXIgPSAwO1xyXG5cdFx0XHRjcmVhdGVQcm9taXNlKCk7XHJcblx0XHRcdGZ1bmN0aW9uIGNyZWF0ZVByb21pc2UoKTp2b2lkIHtcclxuXHRcdFx0XHRmYWN0b3JpZXNbY29tcGxldGVkQ291bnRlcl0oKVxyXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZWRDb3VudGVyKys7XHJcblx0XHRcdFx0XHRcdGlmIChjb21wbGV0ZWRDb3VudGVyIDwgZmFjdG9yaWVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVByb21pc2UoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZWplY3QoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb20ge1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuSW50ZWdlcihtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoUmFuZG9tLmdlbk51bWJlcihtaW4sIG1heCArIDEpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuTnVtYmVyKG1pbjpudW1iZXIsIG1heDpudW1iZXIpOm51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5TdHIobGVuZ3RoOm51bWJlcik6c3RyaW5nIHtcclxuXHRcdGNvbnN0IGNoYXJzOnN0cmluZ1tdID0gW1xyXG5cdFx0XHRcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIixcclxuXHRcdFx0XCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJtXCIsXHJcblx0XHRcdFwiblwiLCBcIm9cIiwgXCJwXCIsIFwicVwiLCBcInJcIiwgXCJzXCIsIFwidFwiLCBcInVcIiwgXCJ2XCIsIFwid1wiLCBcInhcIiwgXCJ5XCIsIFwielwiLFxyXG5cdFx0XHRcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIiwgXCJLXCIsIFwiTFwiLCBcIk1cIixcclxuXHRcdFx0XCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsIFwiUlwiLCBcIlNcIiwgXCJUXCIsIFwiVVwiLCBcIlZcIiwgXCJXXCIsIFwiWFwiLCBcIllcIiwgXCJaXCIsXHJcblx0XHRdO1xyXG5cdFx0bGV0IHJlc3VsdDpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzdWx0ICs9IFJhbmRvbS5jaG9vc2UuYXBwbHkoUmFuZG9tLCBjaGFycyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5Cb29sZWFuKCk6Ym9vbGVhbiB7XHJcblx0XHRyZXR1cm4gUmFuZG9tLmNob29zZSh0cnVlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdlbkNvbG9yKCk6bnVtYmVyIHtcclxuXHRcdHJldHVybiBSYW5kb20uZ2VuSW50ZWdlcigweDAwMDAwMCwgMHhmZmZmZmYpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBjaG9vc2UoLi4uYXJnczphbnlbXSk6YW55IHtcclxuXHRcdHJldHVybiBhcmdzW1JhbmRvbS5nZW5JbnRlZ2VyKDAsIGFyZ3MubGVuZ3RoIC0gMSldO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dFdmVudHMge1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTSVpFOnN0cmluZyA9IFwicmVzaXplXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBLRVlfRE9XTjpzdHJpbmcgPSBcImtleWRvd25cIjtcclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtFWV9VUDpzdHJpbmcgPSBcImtleXVwXCI7XHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBGT0NVU19PVVQ6c3RyaW5nID0gXCJibHVyXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkKHR5cGU6c3RyaW5nLCBjYWxsYmFjazooLi4ucGFyYW1zOmFueVtdKSA9PiB2b2lkKTooLi4ucGFyYW1zOmFueVtdKSA9PiB2b2lkIHtcclxuXHRcdGNvbnN0IHc6YW55ID0gd2luZG93O1xyXG5cdFx0aWYgKHcuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHR3LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblx0XHR9IGVsc2UgaWYgKHcuYXR0YWNoRXZlbnQpIHtcclxuXHRcdFx0dy5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBjYWxsYmFjayk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3W1wib25cIiArIHR5cGVdID0gY2FsbGJhY2s7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FsbGJhY2s7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZSh0eXBlOnN0cmluZywgY2FsbGJhY2s6KC4uLnBhcmFtczphbnlbXSkgPT4gdm9pZCkge1xyXG5cdFx0Y29uc3QgdzphbnkgPSB3aW5kb3c7XHJcblx0XHRpZiAody5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcblx0XHRcdHcucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmICh3LmRldGFjaEV2ZW50KSB7XHJcblx0XHRcdHcuZGV0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d1tcIm9uXCIgKyB0eXBlXSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==