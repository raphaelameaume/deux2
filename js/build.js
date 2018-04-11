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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf = __webpack_require__(31);

var _raf2 = _interopRequireDefault(_raf);

var _Background = __webpack_require__(20);

var _Background2 = _interopRequireDefault(_Background);

var _Top = __webpack_require__(24);

var _Top2 = _interopRequireDefault(_Top);

var _Left = __webpack_require__(22);

var _Left2 = _interopRequireDefault(_Left);

var _Right = __webpack_require__(23);

var _Right2 = _interopRequireDefault(_Right);

var _Bottom = __webpack_require__(21);

var _Bottom2 = _interopRequireDefault(_Bottom);

var _smooth = __webpack_require__(26);

var _smooth2 = _interopRequireDefault(_smooth);

var _FacesController = __webpack_require__(16);

var _FacesController2 = _interopRequireDefault(_FacesController);

var _MouseManager = __webpack_require__(17);

var _MouseManager2 = _interopRequireDefault(_MouseManager);

var _SoundManager = __webpack_require__(25);

var _SoundManager2 = _interopRequireDefault(_SoundManager);

var _KeyboardController = __webpack_require__(19);

var _KeyboardController2 = _interopRequireDefault(_KeyboardController);

var _EventsManager = __webpack_require__(1);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _Events = __webpack_require__(2);

var _Events2 = _interopRequireDefault(_Events);

var _ui = __webpack_require__(27);

var _ui2 = _interopRequireDefault(_ui);

var _MPKMini = __webpack_require__(18);

var _MPKMini2 = _interopRequireDefault(_MPKMini);

var _MidiController = __webpack_require__(8);

var _MidiController2 = _interopRequireDefault(_MidiController);

var _Composer = __webpack_require__(28);

var _Composer2 = _interopRequireDefault(_Composer);

var _CustomPass = __webpack_require__(29);

var _CustomPass2 = _interopRequireDefault(_CustomPass);

var _FXAAPass = __webpack_require__(30);

var _FXAAPass2 = _interopRequireDefault(_FXAAPass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
      function App() {
            _classCallCheck(this, App);

            window.started = false;
            window.uiHidden = false;
            window.soundEnded = false;

            this.backgroundColor = 0x000000;

            _MouseManager2.default.start();
            _MidiController2.default.start(_MPKMini2.default);

            this.facesController = new _FacesController2.default();

            this.keyboardController = new _KeyboardController2.default();

            this.resize = this.resize.bind(this);
            this.update = this.update.bind(this);
            this.onStart = this.onStart.bind(this);
            this.onUIHidden = this.onUIHidden.bind(this);
            this.onSoundEnd = this.onSoundEnd.bind(this);
            this.reset = this.reset.bind(this);

            this.init();
            this.bindListeners();
      }

      _createClass(App, [{
            key: 'init',
            value: function init() {
                  var canvas = document.getElementById('canvas');

                  this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
                  this.renderer.setSize(window.innerWidth, window.innerHeight);
                  this.renderer.setClearColor(this.backgroundColor);
                  // this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
                  this.renderer.shadowMap.enabled = false;
                  this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

                  WAGNER.vertexShadersPath = 'js/vertex-shaders';
                  WAGNER.fragmentShadersPath = 'js/fragment-shaders';

                  this.composer = new _Composer2.default(this.renderer);
                  this.composer.setSize(window.innerWidth, window.innerHeight);

                  var bloomWidth = window.isTouch ? 256 : 512;
                  var bloomHeight = window.isTouch ? 256 : 512;

                  this.bloomPass = new WAGNER.MultiPassBloomPass(bloomWidth, bloomHeight);
                  this.bloomPass.params.strength = 50.0;
                  this.bloomPass.params.blurAmount = 5.;
                  this.bloomPass.params.applyZoomBlur = true;
                  this.bloomPass.params.zoomBlurStrength = 3.0;
                  this.bloomPass.params.zoomBlurCenter = new THREE.Vector2(0.5, 0.5);

                  this.rgbPass = new WAGNER.RGBSplitPass();
                  this.rgbPass.params.delta = new THREE.Vector2(20, 20);

                  this.noisePass = new WAGNER.NoisePass();
                  this.noisePass.params.amount = 0.25;
                  this.noisePass.params.speed = 0.2;

                  this.vignettePass = new WAGNER.VignettePass();
                  this.vignettePass.params.amount = 0.7;

                  // this.fxaaPass = new WAGNER.FXAAPass();

                  this.customPass = new _CustomPass2.default({
                        strength: 50,
                        blurAmount: 5,
                        applyZoomBlur: true,
                        zoomBlurStrength: { value: 3 },
                        zoomBlurCenter: new THREE.Vector2(0.5, 0.5),

                        splitDelta: { value: new THREE.Vector2(30, 30) },

                        noiseAmount: { value: 0.25 },
                        noiseSpeed: { value: 0.2 },

                        vignetteAmount: { value: 0.8 },
                        vignetteFallof: { value: 0.1 },

                        brightness: { value: 0.2 },
                        contrast: { value: 0.9 }
                  });

                  this.fxaaPass = new _FXAAPass2.default();

                  this.width = window.width = 60;
                  this.height = window.height = 60;
                  this.length = window.length = 600;

                  this.scene = new THREE.Scene();
                  this.scene.fog = new THREE.Fog(0x000000, 0.8, this.length * .98);

                  this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
                  this.camera.position.z = 0;
                  this.camera.lookAt(new THREE.Vector3());
                  this.scene.add(this.camera);

                  this.addControls();
                  this.addLights();
                  this.addElements();

                  this.update();
            }
      }, {
            key: 'bindListeners',
            value: function bindListeners() {
                  window.addEventListener('resize', this.resize);

                  _EventsManager2.default.on(_Events2.default.XP.START, this.onStart);
                  _EventsManager2.default.on(_Events2.default.UI.HIDDEN, this.onUIHidden);
                  _EventsManager2.default.on(_Events2.default.SOUNDS.END, this.onSoundEnd);
                  _EventsManager2.default.on(_Events2.default.XP.END, this.reset);

                  _EventsManager2.default.emit(_Events2.default.XP.START);
            }
      }, {
            key: 'reset',
            value: function reset() {
                  window.started = false;
                  window.uiHidden = false;
                  window.soundEnded = false;
            }
      }, {
            key: 'onStart',
            value: function onStart() {
                  window.started = true;
                  window.uiHidden = true;
            }
      }, {
            key: 'onUIHidden',
            value: function onUIHidden() {}
      }, {
            key: 'onSoundEnd',
            value: function onSoundEnd(data) {
                  var name = data.name;


                  if (name === 'xp') {
                        window.soundEnded = true;
                  }
            }
      }, {
            key: 'addControls',
            value: function addControls() {
                  var OrbitControls = __webpack_require__(32)(THREE);
                  // this.controls = new OrbitControls(this.camera);
            }
      }, {
            key: 'addLights',
            value: function addLights() {
                  console.log('no lights');
                  // this.light = new THREE.AmbientLight(0xFFFFFF);
                  // this.scene.add(this.light);

                  // const pointLight3 = new THREE.PointLight( 0xffffff, 7.1, 0);
                  // pointLight3.position.x = 0
                  // pointLight3.position.y = 4;
                  // pointLight3.position.z = 60;

                  // this.scene.add(pointLight3);
            }
      }, {
            key: 'addElements',
            value: function addElements() {
                  this.divisator = 2;

                  this.geometry = new THREE.PlaneGeometry(this.length, this.width, 1, 1);
                  this.otherGeometry = new THREE.PlaneGeometry(this.width, this.length, 32, 32);

                  this.leftRightGeometry = new THREE.PlaneGeometry(this.length, this.height, Math.floor(this.length / this.divisator), Math.floor(this.height / this.divisator));
                  this.topBottomGeometry = new THREE.PlaneGeometry(this.width, this.length, Math.floor(this.width / this.divisator), Math.floor(this.length / this.divisator));
                  this.backgroundGeometry = new THREE.PlaneGeometry(this.width, this.height, Math.floor(this.width / this.divisator * 2), Math.floor(this.height / this.divisator * 2));

                  this.left = new _Left2.default(this.geometry, 0x000000);
                  this.left.rotation.y = Math.PI * 0.5;
                  this.left.position.x = -this.width * 0.5;
                  this.facesController.register('left', this.left);

                  this.right = new _Right2.default(this.geometry, 0x000000);
                  this.right.rotation.y = Math.PI * 0.5;
                  this.right.position.x = this.width * 0.5;
                  this.facesController.register('right', this.right);

                  this.bottom = new _Bottom2.default(this.geometry, 0x000000);
                  this.bottom.rotation.x = -Math.PI * 0.5;
                  this.bottom.rotation.z = Math.PI * 0.5;
                  this.bottom.position.y = -this.height * 0.5;
                  this.facesController.register('bottom', this.bottom);

                  this.top = new _Top2.default(this.geometry, 0x000000);
                  this.top.rotation.x = -Math.PI * 0.5;
                  this.top.rotation.z = Math.PI * 0.5;
                  this.top.position.y = this.height * 0.5;
                  this.facesController.register('top', this.top);

                  // this.background = new Background(this.backgroundGeometry, 0x000000);
                  // this.background.position.z = -this.length * 0.5;
                  //       this.facesController.register('background', this.background);

                  this.facesController.container.position.z = -this.length * 0.5;

                  this.scene.add(this.facesController.container);
            }
      }, {
            key: 'rotate',
            value: function rotate() {
                  var sens = Math.random() > 0.5 ? -1 : 1;
                  var delay = Math.random() * 3 + 1;
            }
      }, {
            key: 'update',
            value: function update() {
                  this.facesController.update();

                  this.customPass.update();

                  this.composer.reset();
                  this.composer.render(this.scene, this.camera);
                  // this.composer.pass(this.bloomPass);
                  // this.composer.pass(this.rgbPass);
                  // this.composer.pass(this.noisePass);
                  // this.composer.pass(this.vignettePass);
                  // this.composer.toScreen(this.fxaaPass);
                  this.composer.pass(this.customPass);
                  this.composer.toScreen(this.fxaaPass);

                  // this.renderer.render(this.scene, this.camera);

                  (0, _raf2.default)(this.update);
            }
      }, {
            key: 'resize',
            value: function resize() {
                  this.camera.aspect = window.innerWidth / window.innerHeight;
                  this.camera.updateProjectionMatrix();

                  this.renderer.setSize(window.innerWidth, window.innerHeight);
            }
      }]);

      return App;
}();

new App();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Events Manager
 * based on https://github.com/scottcorgan/tiny-emitter/blob/master/index.js
 */

var EventsManager = function () {
    function EventsManager() {
        _classCallCheck(this, EventsManager);
    }

    _createClass(EventsManager, null, [{
        key: 'emit',


        /**
         * Emit event
         * @param  {String} event name
         * @param  {Object} data
         */
        value: function emit(event) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


            var listeners = EventsManager.eventsList[event];

            if (!listeners) {
                return;
            }

            for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].fn(data);
            }
        }

        /**
         * On 
         * @param  {String}   event name
         * @param  {Function} callback function
         */

    }, {
        key: 'on',
        value: function on(event, fn) {

            // console.log('EventsManager :: ON ::', event);

            if (!EventsManager.eventsList) EventsManager.eventsList = {};

            if (!EventsManager.eventsList[event]) EventsManager.eventsList[event] = []; // improve (._.)

            EventsManager.eventsList[event].push({ fn: fn });
        }
    }, {
        key: 'once',
        value: function once(event, fn) {

            var listener = function listener(data) {

                EventsManager.off(event, listener);
                fn(data);
            };

            listener._ = fn;
            EventsManager.on(event, listener);
        }
    }, {
        key: 'off',
        value: function off(event, fn) {

            var listeners = EventsManager.eventsList[event];

            if (!listeners) {
                console.warn('EventsManager :: Off :: Currently no listeners for this event : ', event);
                return;
            }

            if (!fn) {
                console.warn('EventsManager :: Off :: Callback is undefined');
                return;
            }

            var targetEvents = [];

            for (var i = 0, len = listeners.length; i < len; i++) {

                var target = listeners[i];

                if (target.fn !== fn && target.fn._ !== fn) {
                    // (.__.) ??
                    targetEvents.push(target);
                }
            }

            if (targetEvents.length > 0) EventsManager.eventsList[event] = targetEvents;else delete EventsManager.eventsList[event];
        }
    }]);

    return EventsManager;
}();

exports.default = EventsManager;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * E V E N T S
 */

var Events = {
    KEYBOARD: {
        KEYDOWN: "KEYBOARD_KEYDOWN",
        KEYUP: "KEYBOARD_KEYUP",
        KEYPRESS: "KEYBOARD_KEYPRESS",
        SPACEHOLD: "KEYBOARD_SPACEHOLD",
        SPACEUP: "KEYBOARD_SPACEUP",
        SPACEDOWN: "KEYBOARD_SPACEDOWN"
    },
    SOUNDS: _defineProperty({
        CANPLAY: "SOUNDS_CANPLAY",
        END: "SOUNDS_END",
        LOWKICK: "SOUNDS_LOWKICK",
        MIDDLEKICK: "SOUNDS_MIDDLEKICK",
        HIGHKICK: "SOUNDS_HIGHKICK",
        TREMOLO: "SOUNDS_TREMOLO",
        START: "SOUNDS_START"
    }, "END", "SOUNDS_END"),
    XP: {
        START: "XP_START",
        END: "XP_END"
    },
    UI: {
        HIDDEN: "UI_HIDDEN"
    }
};

exports.default = Events;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(2);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(1);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _map = __webpack_require__(9);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractFace = function (_THREE$Object3D) {
    _inherits(AbstractFace, _THREE$Object3D);

    function AbstractFace(geometry) {
        var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x242425;
        var name = arguments[2];
        var side = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : THREE.FrontSide;

        _classCallCheck(this, AbstractFace);

        var _this = _possibleConstructorReturn(this, (AbstractFace.__proto__ || Object.getPrototypeOf(AbstractFace)).call(this));

        _this.planeGeometry = geometry;
        _this.name = name;

        _this.onKeyPress = _this.onKeyPress.bind(_this);
        _this.onSpaceHold = _this.onSpaceHold.bind(_this);
        _this.onStart = _this.onStart.bind(_this);
        _this.onHiddenUI = _this.onHiddenUI.bind(_this);

        _this.uniforms = THREE.UniformsUtils.clone(THREE.ShaderLib['phong'].uniforms);
        _this.uniforms['uTime'] = { type: 'f', value: 0.0 };
        _this.uniforms['diffuse'] = { type: 'c', value: new THREE.Color(color) };
        _this.uniforms['uStripeOrientation'] = { type: 'v3', value: new THREE.Vector3(0, 0, 0) };
        _this.uniforms['uInvert'] = { type: 'f', value: 0.0 };
        _this.uniforms['uSquare'] = { type: 'v3', value: new THREE.Vector3(1, 1) };
        _this.uniforms['uWidth'] = { type: 'f', value: window.width };
        _this.uniforms['uHeight'] = { type: 'f', value: window.height };
        _this.uniforms['uLength'] = { type: 'f', value: window.length };
        _this.uniforms['uProgress'] = { type: 'f', value: 0.0 };
        _this.uniforms['opacity'].value = 1.0;

        _this.startDivisions = new THREE.Vector2(9, 13);

        _this.orientations = [];
        _this.duration = 0.3;
        _this.factor = 1;
        _this.ease = Expo.easeOut;
        _this.debug = false;
        _this.started = false;
        _this.isSpaceDown = false;

        if (_this.debug) {
            _this.initGui(false);
        }

        _this.material = new THREE.ShaderMaterial({
            vertexShader: __webpack_require__(58),
            // fragmentShader: require('../shaders/bottom.frag.glsl'),
            fragmentShader: __webpack_require__(59),
            uniforms: _this.uniforms,
            lights: false,
            side: side,
            transparent: true,
            fog: true
        });

        _this.mesh = new THREE.Mesh(_this.planeGeometry, _this.material);
        _this.mesh.castShadow = true;
        _this.mesh.receiveShadow = true;
        _this.add(_this.mesh);

        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYPRESS, _this.onKeyPress);
        // EventsManager.on(Events.KEYBOARD.SPACEHOLD, this.onSpaceHold);
        _EventsManager2.default.on(_Events2.default.XP.START, _this.onStart);
        _EventsManager2.default.on(_Events2.default.UI.HIDDEN, _this.onHiddenUI);
        return _this;
    }

    _createClass(AbstractFace, [{
        key: 'initGui',
        value: function initGui(isOpen) {
            this.gui = window.gui.addFolder(this.name);
            this.gui.add(this.uniforms['uStripeOrientation'].value, 'x', -1, 1).name('Orientation x');
            this.gui.add(this.uniforms['uStripeOrientation'].value, 'y', -1, 1).name('Orientation y');
            this.gui.add(this.uniforms['uStripeOrientation'].value, 'z', -1, 1).name('Orientation z');
            this.gui.add(this.uniforms['uSquare'].value, 'x', 0, 100).name('Space x');
            this.gui.add(this.uniforms['uSquare'].value, 'y', 0, 100).name('Space y');
            this.gui.add(this.uniforms['uSquare'].value, 'z', 0, 100).name('Space z');

            isOpen && this.gui.open();
        }
    }, {
        key: 'update',
        value: function update(time) {
            this.uniforms['uTime'].value = time;
        }
    }, {
        key: 'setPlainColor',
        value: function setPlainColor(color) {
            this.updateDivisions(0, 0);
        }
    }, {
        key: 'setStripes',
        value: function setStripes(orientationName) {
            var scalar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

            var orientation = this.orientations[orientationName];

            if (orientation) {
                var clone = orientation.clone().multiplyScalar(scalar); // rosace

                this.uniforms['uStripeOrientation'].value.x = clone.x;
                this.uniforms['uStripeOrientation'].value.y = clone.y;
                this.uniforms['uStripeOrientation'].value.z = clone.z;
            }
        }
    }, {
        key: 'reverseStripes',
        value: function reverseStripes() {
            // this.factor = -this.factor;
        }
    }, {
        key: 'changeSpeed',
        value: function changeSpeed() {
            var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.speedMin;

            this.speed = speed;
        }
    }, {
        key: 'invert',
        value: function invert() {
            var tl = new TimelineLite();

            if (this.blackMode) {
                this.blackMode = false;
                tl.add(this.show());
            }

            var to = this.uniforms['uInvert'].value === 1.0 ? 0. : 1.;
            tl.to(this.uniforms['uInvert'], this.duration, { value: to, ease: this.ease }, 0);

            return tl;
        }
    }, {
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            if (this.uniforms['opacity'].value) {
                this.hide();
            } else {
                this.show();
            }
        }
    }, {
        key: 'onKeyPress',
        value: function onKeyPress(data) {
            switch (data.key) {}
        }
    }, {
        key: 'show',
        value: function show() {
            return TweenMax.to(this.uniforms['opacity'], this.duration, { value: 1, ease: this.ease });
        }
    }, {
        key: 'hide',
        value: function hide() {
            return TweenMax.to(this.uniforms['opacity'], this.duration, { value: 0, ease: this.ease });
        }
    }, {
        key: 'updateDivisions',
        value: function updateDivisions(x, y) {
            var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var tl = new TimelineMax();

            tl.to(this.uniforms['uSquare'].value, this.duration, { x: x, y: y, ease: this.ease }, 0);

            // if ( invert ) {
            //     tl.add(this.invert(), 0);
            // }

            return tl;
        }
    }, {
        key: 'setBlackMode',
        value: function setBlackMode() {
            this.blackMode = true;

            return TweenMax.to(this.uniforms['uInvert'], this.duration, { value: 1.0, ease: this.ease });
        }
    }, {
        key: 'onSpaceHold',
        value: function onSpaceHold(uProgress) {
            this.uniforms['uProgress'].value = uProgress;
        }
    }, {
        key: 'onEnd',
        value: function onEnd() {
            this.uniforms['uTime'].value = 0.0;

            var duration = 2;

            var tl = new TimelineMax({ onComplete: function onComplete() {} });
            tl.set(this.uniforms['uSquare'].value, { x: 1, y: 1, ease: Expo.easeOut }, 0);
            tl.to(this.uniforms['uInvert'], duration, { value: 0.0, ease: Expo.easeOut }, 0);
            tl.fromTo(this.uniforms['uProgress'], duration, { value: 1.8 }, { value: 0.0, ease: Expo.easeOut }, 0);

            return tl;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.uniforms['uTime'].value = 0.0;
            this.uniforms['uProgress'].value = 0.0;
            this.uniforms['opacity'].value = 0.0;
            this.uniforms['uInvert'].value = 0.0;
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            this.show();
        }
    }, {
        key: 'onHiddenUI',
        value: function onHiddenUI() {}
    }]);

    return AbstractFace;
}(THREE.Object3D);

exports.default = AbstractFace;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pass = function Pass(name, fragmentShader, vertexShader) {
	var uniforms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	_classCallCheck(this, Pass);

	this.name = name;
	this.fragmentShader = fragmentShader;
	this.vertexShader = vertexShader;

	this.enabled = true;
	this.uniforms = _extends({
		resolution: { type: 'v2', value: new THREE.Vector2(1, 1) },
		time: { type: 'f', value: 0 },
		tInput: { type: 't', value: new THREE.Texture(), default: true }
	}, uniforms);

	this.shader = new THREE.ShaderMaterial({
		vertexShader: __webpack_require__(15)("./" + this.vertexShader),
		fragmentShader: __webpack_require__(15)("./" + this.fragmentShader),
		uniforms: this.uniforms,
		flatShading: true,
		depthWrite: false,
		depthTest: false,
		transparent: true
	});
};

exports.default = Pass;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 7 */
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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webmidi = __webpack_require__(57);

var _webmidi2 = _interopRequireDefault(_webmidi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function map(n, start1, stop1, start2, stop2) {
	return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

var MidiController = function () {
	_createClass(MidiController, null, [{
		key: 'start',
		value: function start(config) {
			MidiController.instance = new MidiController(config);
		}
	}]);

	function MidiController(config) {
		var _this = this;

		_classCallCheck(this, MidiController);

		this.config = config;

		this.pads = {};
		this.knobs = {};

		this.onSuccess = this.onSuccess.bind(this);
		this.onError = this.onError.bind(this);
		this.onMessage = this.onMessage.bind(this);

		_webmidi2.default.enable(function (err) {
			if (err) {
				_this.onError(err);
			}

			_this.onSuccess();
		});
	}

	_createClass(MidiController, [{
		key: 'requestAccess',
		value: function requestAccess() {
			if (navigator.requestMIDIAccess) {
				navigator.requestMIDIAccess({
					sysex: false
				}).then(this.onSuccess, this.onError);
			} else {
				alert('You browser doesn\'t support the MIDI API.');
			}
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess() {
			var _this2 = this;

			if (_webmidi2.default.inputs.length > 0) {

				this.input = _webmidi2.default.inputs[0];

				this.parseConfig();

				this.input.addListener('noteon', 'all', function (e) {
					var keys = Object.keys(_this2.pads);

					for (var i = 0; i < keys.length; i++) {
						var key = keys[i];
						var subscriptions = _this2.pads[key];

						for (var j = 0; j < subscriptions.length; j++) {
							var _subscriptions$j = subscriptions[j],
							    number = _subscriptions$j.number,
							    channel = _subscriptions$j.channel,
							    callback = _subscriptions$j.callback;


							if (e.note.number === number) {
								callback({ velocity: e.velocity });
							}
						}
					}
				});

				this.input.addListener('pitchbend', 'all', function (e) {});

				this.input.addListener('controlchange', 'all', function (e) {
					var keys = Object.keys(_this2.knobs);

					for (var i = 0; i < keys.length; i++) {
						var key = keys[i];
						var subscriptions = _this2.knobs[key];

						for (var j = 0; j < subscriptions.length; j++) {
							var _subscriptions$j2 = subscriptions[j],
							    number = _subscriptions$j2.number,
							    channel = _subscriptions$j2.channel,
							    callback = _subscriptions$j2.callback;


							if (e.controller.number === number) {
								var value = map(e.value, 0, 127, 0, 1);
								callback(value);
							}
						}
					}
				});
			}
		}
	}, {
		key: 'parseConfig',
		value: function parseConfig() {
			// this.pads = this.config.pads;
			// this.knobs = this.config.knobs;
		}
	}, {
		key: 'onError',
		value: function onError(error) {
			console.error('MidiController :: error while requesting MIDI access.');
			throw new Error(error);
		}
	}, {
		key: 'onMessage',
		value: function onMessage(event) {
			console.log('MidiController :: onMessage', event);
		}
	}, {
		key: 'registerPad',
		value: function registerPad(id, callback) {
			if (!this.pads[id]) {
				this.pads[id] = [];
			}

			var number = this.findNumberInPads(id);

			if (number) {
				if (typeof callback === 'function') {
					this.pads[id].push({ callback: callback, number: number });
				} else {
					throw new Error('MidiController :: onPadDown ' + id + ' :: callback is not a function');
				}
			} else {
				console.error('Pad ' + id + ' not registered in config');
			}
		}
	}, {
		key: 'registerKnob',
		value: function registerKnob(id, callback) {
			if (!this.knobs[id]) {
				this.knobs[id] = [];
			}

			var number = this.findNumberInKnobs(id);

			if (number) {
				if (typeof callback === 'function') {
					this.knobs[id].push({ callback: callback, number: number });
				} else {
					throw new Error('MidiController :: onKnobChange ' + id + ' :: callback is not a function');
				}
			} else {
				console.warn('MidiController: Knob ' + id + ' not registered in config');
			}
		}
	}, {
		key: 'findNumberInPads',
		value: function findNumberInPads(id) {
			var pads = this.config.pads;


			for (var i = 0; i < pads.length; i++) {
				if (pads[i].id === id) {
					return pads[i].number;
				}
			}

			return false;
		}
	}, {
		key: 'findNumberInKnobs',
		value: function findNumberInKnobs(id) {
			var knobs = this.config.knobs;


			for (var i = 0; i < knobs.length; i++) {
				if (knobs[i].id === id) {
					return knobs[i].number;
				}
			}

			return false;
		}
	}], [{
		key: 'onPadDown',
		value: function onPadDown(id, callback) {
			var instance = MidiController.instance;


			instance.registerPad(id, callback);
		}
	}, {
		key: 'onKnobChange',
		value: function onKnobChange(id, callback) {
			var instance = MidiController.instance;


			instance.registerKnob(id, callback);
		}
	}]);

	return MidiController;
}();

exports.default = MidiController;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = map;
function map(n, start1, stop1, start2, stop2) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// sourced from:
// http://www.leanbackplayer.com/test/h5mt.html
// https://github.com/broofa/node-mime/blob/master/types.json
var mimeTypes = __webpack_require__(40)

var mimeLookup = {}
Object.keys(mimeTypes).forEach(function (key) {
  var extensions = mimeTypes[key]
  extensions.forEach(function (ext) {
    mimeLookup[ext] = key
  })
})

module.exports = function lookup (ext) {
  if (!ext) throw new TypeError('must specify extension string')
  if (ext.indexOf('.') === 0) {
    ext = ext.substring(1)
  }
  return mimeLookup[ext.toLowerCase()]
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = createAudioContext
function createAudioContext () {
  var AudioCtor = window.AudioContext || window.webkitAudioContext
  return new AudioCtor()
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var lookup = __webpack_require__(10)
var audio

module.exports = isSrcPlayable
function isSrcPlayable (src) {
  if (!src) throw new TypeError('src cannot be empty')
  var type
  if (typeof src.getAttribute === 'function') {
    // <source> element
    type = src.getAttribute('type')
  } else if (typeof src === 'string') {
    // 'foo.mp3' string
    var ext = extension(src)
    if (ext) type = lookup(ext)
  } else {
    // { src: 'foo.mp3', type: 'audio/mpeg; codecs..'}
    type = src.type
  }

  // We have an unknown file extension or
  // a <source> tag without an explicit type,
  // just let the browser handle it!
  if (!type) return true

  // handle "no" edge case with super legacy browsers...
  // https://groups.google.com/forum/#!topic/google-web-toolkit-contributors/a8Uy0bXq1Ho
  if (!audio) audio = new window.Audio()
  var canplay = audio.canPlayType(type).replace(/no/, '')
  return Boolean(canplay)
}

module.exports.createError = createError
function createError (sources) {
  // All sources are unplayable
  var err = new Error('This browser does not support any of the following sources:\n    ' +
      sources.join(', ') + '\n' +
      'Try using an array of OGG, MP3 and WAV.')
  err.type = 'AUDIO_FORMAT'
  return err
}

function extension (data) {
  var extIdx = data.lastIndexOf('.')
  if (extIdx <= 0 || extIdx === data.length - 1) {
    return undefined
  }
  return data.substring(extIdx + 1)
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (audioContext) {
  if (audioContext.state === 'suspended' &&
      typeof audioContext.resume === 'function') {
    audioContext.resume()
  }
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./additive.fs": 60,
	"./basic.vs": 61,
	"./bloom.fs": 62,
	"./bloom2.fs": 63,
	"./bloomtest.fs": 64,
	"./box-blur.fs": 65,
	"./copy.fs": 66,
	"./custom.fs": 67,
	"./dof.fs": 68,
	"./fxaa.fs": 69,
	"./gaussian.fs": 70,
	"./noise.fs": 71,
	"./radial-blur.fs": 72,
	"./sepia.fs": 73,
	"./ssao.fs": 74
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(2);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(1);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _randomFromArray = __webpack_require__(39);

var _randomFromArray2 = _interopRequireDefault(_randomFromArray);

var _lucky = __webpack_require__(37);

var _lucky2 = _interopRequireDefault(_lucky);

var _map = __webpack_require__(9);

var _map2 = _interopRequireDefault(_map);

var _debounce = __webpack_require__(36);

var _debounce2 = _interopRequireDefault(_debounce);

var _MidiController = __webpack_require__(8);

var _MidiController2 = _interopRequireDefault(_MidiController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FacesController = function () {
    function FacesController() {
        var _this = this;

        _classCallCheck(this, FacesController);

        this.container = new THREE.Object3D();
        this.faces = {};
        this.divisions = {
            x: this.generateDivisions(5, 43),
            y: this.generateDivisions(5, 43),
            lastX: 0,
            lastY: 0
        };

        this.allowInvert = true;

        this.time = 0.0;
        this.speed = 0.0;
        this.speedContainer = 0;
        this.factor = 1.0;
        this.isSpaceDown = false;
        this.firstSpaceUp = false;
        this.highkicked = 0;
        this.lowkicked = 0;
        this.direction = 1;
        this.currentBlackMode = 0;
        this.currentScaleMode = 0;

        // on events
        this.onLowKick = this.onLowKick.bind(this);
        this.onMiddleKick = this.onMiddleKick.bind(this);
        this.onHighKick = this.onHighKick.bind(this);
        this.onTremolo = this.onTremolo.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onUIHidden = this.onUIHidden.bind(this);
        this.onSoundEnd = this.onSoundEnd.bind(this);
        this.onSpaceUp = this.onSpaceUp.bind(this);
        this.onSpaceDown = this.onSpaceDown.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onSpaceHold = this.onSpaceHold.bind(this);

        // black modes
        this.blackModeVertical = this.blackModeVertical.bind(this);
        this.blackModeHorizontal = this.blackModeHorizontal.bind(this);
        this.blackModeTunnelTop = this.blackModeTunnelTop.bind(this);
        this.blackModeTunnelBottom = this.blackModeTunnelBottom.bind(this);
        this.blackModeBottom = this.blackModeBottom.bind(this);
        this.blackModeFull = this.blackModeFull.bind(this);

        this.blackModes = [this.blackModeVertical, this.blackModeHorizontal, this.blackModeFull];

        // reactions
        this.updateDivisions = this.updateDivisions.bind(this);
        this.setBlackMode = this.setBlackMode.bind(this);
        this.changeScale = this.changeScale.bind(this);

        this.reactions = [this.updateDivisions, this.setBlackMode, this.changeScale];

        this.changeScaleX = this.changeScaleX.bind(this);
        this.changeScaleY = this.changeScaleY.bind(this);
        this.changeScaleBoth = this.changeScaleBoth.bind(this);

        // scales
        this.scalings = [this.changeScaleY, this.changeScaleX, this.changeScaleBoth];

        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYPRESS, this.onKeyPress);
        _EventsManager2.default.on(_Events2.default.SOUNDS.LOWKICK, this.onLowKick);
        _EventsManager2.default.on(_Events2.default.SOUNDS.MIDDLEKICK, this.onMiddleKick);
        _EventsManager2.default.on(_Events2.default.SOUNDS.HIGHKICK, this.onHighKick);
        _EventsManager2.default.on(_Events2.default.SOUNDS.TREMOLO, this.onTremolo);
        _EventsManager2.default.on(_Events2.default.SOUNDS.END, this.onSoundEnd);
        _EventsManager2.default.on(_Events2.default.XP.START, this.onStart);

        // this.updateDivisions = debounce(this.updateDivisions, 400);
        // this.changeScale = debounce(this.changeScale, 400);
        // this.setBlackMode = debounce(this.setBlackMode, 400);

        this.updateDivisions();

        _MidiController2.default.onPadDown(1, function () {
            _this.updateDivisions();
        });

        _MidiController2.default.onPadDown(2, function () {
            _this.changeScale();
        });

        _MidiController2.default.onPadDown(3, function () {
            _this.setBlackMode();
        });

        _MidiController2.default.onPadDown(4, function () {
            _this.speedContainer = -_this.speedContainer;
        });

        _MidiController2.default.onPadDown(5, function () {
            _this.direction = -_this.direction;
        });

        _MidiController2.default.onPadDown(6, function () {
            Object.keys(_this.faces).map(function (key) {
                _this.faces[key].invert();
            });
        });

        _MidiController2.default.onKnobChange(1, function (value) {
            var direction = _this.speedContainer < 0 ? -1 : 1;

            _this.speedContainer = value * 2 * direction;
        });

        _MidiController2.default.onKnobChange(2, function (value) {
            _this.speed = value * 12;
        });
    }

    _createClass(FacesController, [{
        key: 'register',
        value: function register(id, face) {
            this.faces[id] = face;
            this.container.add(face);
        }
    }, {
        key: 'generateDivisions',
        value: function generateDivisions(min, max) {
            var between = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

            var divisions = [0];

            for (var i = min; i <= max; i += between) {
                divisions.push(i);
            }

            for (var _i = max; _i >= min; _i -= between) {
                divisions.push(_i);
            }

            divisions.push(0);

            return divisions;
        }
    }, {
        key: 'updateDivisions',
        value: function updateDivisions() {
            var _this2 = this;

            var possibleDivisionX = this.findDivisions(this.divisions.x, this.divisions.lastX, 8);
            var rdmXIndex = Math.floor(Math.random() * possibleDivisionX.length);
            var divisionX = possibleDivisionX[rdmXIndex];

            this.divisions.lastX = this.divisions.x.indexOf(divisionX);

            var possibleDivisionY = this.findDivisions(this.divisions.y, this.divisions.lastY, 8);
            var rdmYIndex = Math.floor(Math.random() * possibleDivisionY.length);
            var divisionY = possibleDivisionY[rdmYIndex];

            this.divisions.lastY = this.divisions.y.indexOf(divisionY);

            var tl = new TimelineMax();

            Object.keys(this.faces).map(function (key) {
                tl.add(_this2.faces[key].updateDivisions(divisionX, divisionY, _this2.allowInvert), 0);
            });
        }
    }, {
        key: 'setStripes',
        value: function setStripes() {
            var _this3 = this;

            Object.keys(this.faces).map(function (key) {
                _this3.faces[key].setStripes('horizontal', 1);
            });
        }
    }, {
        key: 'findDivisions',
        value: function findDivisions(all, current, range) {
            var divisions = all.map(function (division, index) {
                if (index > current - range && index < current + range) {
                    return division;
                }

                return false;
            }).filter(function (index) {
                return index;
            });

            return divisions;
        }
    }, {
        key: 'onKeyPress',
        value: function onKeyPress(data) {
            if (!window.started || window.soundEnded) {
                return;
            }

            var key = data.key;


            if (key === 'd') {
                this.updateDivisions();
            }

            if (key === 'e') {
                this.setBlackMode();
            }

            if (key === 'u') {
                this.changeScale();
            }

            if (key === 'x') {
                this.speedContainer = !this.speedContainer;
            }
        }
    }, {
        key: 'onLowKick',
        value: function onLowKick() {
            if (!window.started) {
                return;
            }

            var rdm = Math.random();

            if (rdm > 0.6 || !this.lowkicked) {
                this.updateDivisions();
            } else if (rdm > 0.2) {
                this.changeScale();
            } else {
                this.updateDivisions();
                this.changeScale();
            }

            this.lowkicked++;
        }
    }, {
        key: 'onHighKick',
        value: function onHighKick() {
            if (!window.started) {
                return;
            }

            this.speedContainer = 1.1;

            if (this.highkicked % 2 === 0) {
                this.factor = -this.factor;
            }

            this.highkicked++;
            this.allowInvert = false;

            this.divisions = {
                x: this.generateDivisions(3, 9, 2),
                y: this.generateDivisions(1, 13, 2),
                lastX: 0,
                lastY: 2
            };

            this.blackModes = [this.blackModeFull];

            this.updateDivisions();
            this.setBlackMode();
            this.changeScale();

            // const reaction = randomFromArray(this.reactions);
            // reaction();
        }
    }, {
        key: 'onMiddleKick',
        value: function onMiddleKick() {
            // console.log('MIDDLEKICK');
        }
    }, {
        key: 'onTremolo',
        value: function onTremolo() {
            // console.log('Tremoloooo');
        }
    }, {
        key: 'onSoundEnd',
        value: function onSoundEnd(data) {
            var _this4 = this;

            var name = data.name;


            if (name === 'xp') {
                var tl = new TimelineMax({ onComplete: function onComplete() {
                        _EventsManager2.default.emit(_Events2.default.XP.END);
                        _this4.reset();
                    } });

                this.speed = 0.0;
                this.speedContainer = 0.0;
                this.time = 0.0;

                Object.keys(this.faces).map(function (key) {
                    tl.add(_this4.faces[key].onEnd(), 0);
                });
            }
        }
    }, {
        key: 'setBlackMode',
        value: function setBlackMode() {
            var _this5 = this;

            this.currentBlackMode++;

            if (this.currentBlackMode > this.blackModes.length - 1) {
                this.currentBlackMode = 0;
            }

            var blackMode = this.blackModes[this.currentBlackMode];
            var options = blackMode();

            var tl = new TimelineMax();

            Object.keys(this.faces).map(function (key) {
                if (options[key] === 0) {
                    tl.add(_this5.faces[key].hide(), 0);
                } else {
                    tl.add(_this5.faces[key].show(), 0);
                }

                tl.add(_this5.faces[key].setBlackMode(), 0);
            });
        }
    }, {
        key: 'blackModeVertical',
        value: function blackModeVertical() {
            return {
                top: 1,
                right: 0,
                bottom: 1,
                left: 0
            };
        }
    }, {
        key: 'blackModeHorizontal',
        value: function blackModeHorizontal() {
            return {
                top: 0,
                right: 1,
                bottom: 0,
                left: 1
            };
        }
    }, {
        key: 'blackModeTunnelTop',
        value: function blackModeTunnelTop() {
            return {
                top: 1,
                right: 1,
                bottom: 0,
                left: 1
            };
        }
    }, {
        key: 'blackModeTunnelBottom',
        value: function blackModeTunnelBottom() {
            return {
                top: 0,
                right: 1,
                bottom: 1,
                left: 1
            };
        }
    }, {
        key: 'blackModeBottom',
        value: function blackModeBottom() {
            return {
                top: 0,
                right: 0,
                bottom: 1,
                left: 0
            };
        }
    }, {
        key: 'blackModeFull',
        value: function blackModeFull() {
            return {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
        }
    }, {
        key: 'changeScale',
        value: function changeScale() {
            this.currentScaleMode++;

            if (this.currentScaleMode > this.scalings.length - 1) {
                this.currentScaleMode = 0;
            }

            var scale = this.scalings[this.currentScaleMode];

            scale();
        }
    }, {
        key: 'changeScaleX',
        value: function changeScaleX() {
            var to = Math.max(0.5, Math.floor(Math.random() * 25) * 0.1);

            TweenMax.to(this.container.scale, 0.3, { x: to, ease: Expo.easeOut });
        }
    }, {
        key: 'changeScaleY',
        value: function changeScaleY() {
            var to = Math.max(0.5, Math.floor(Math.random() * 25) * 0.1);

            TweenMax.to(this.container.scale, 0.3, { y: to, ease: Expo.easeOut });
        }
    }, {
        key: 'changeScaleBoth',
        value: function changeScaleBoth() {
            var to = Math.max(0.5, Math.floor(Math.random() * 25) * 0.1);

            TweenMax.to(this.container.scale, 0.3, { x: to, y: to, ease: Expo.easeOut });
        }
    }, {
        key: 'onUIHidden',
        value: function onUIHidden() {
            this.faces['left'].show();
            this.faces['right'].show();

            this.updateDivisions();
        }
    }, {
        key: 'reset',
        value: function reset() {
            var _this6 = this;

            Object.keys(this.faces).map(function (key) {
                _this6.faces[key].reset();
            });

            this.divisions = {
                x: this.generateDivisions(5, 43),
                y: this.generateDivisions(5, 43),
                lastX: 0,
                lastY: 0
            };

            this.blackModes = [this.blackModeVertical, this.blackModeHorizontal, this.blackModeBottom, this.blackModeTunnelTop, this.blackModeTunnelBottom, this.blackModeFull];

            this.time = 0.0;
            this.speed = 0.0;
            this.speedContainer = 0.0;
            this.factor = 1.0;
            this.isSpaceDown = false;
            this.firstSpaceUp = false;
            this.highkicked = 0;
            this.allowInvert = true;
        }
    }, {
        key: 'update',
        value: function update() {
            this.time += this.factor * this.speed * 0.1 * this.direction;
            this.container.rotation.z += this.factor * this.speedContainer * 0.005;

            this.faces['left'].update(this.time);
            this.faces['right'].update(this.time);
            this.faces['bottom'].update(this.time);
            this.faces['top'].update(this.time);
        }
    }, {
        key: 'onSpaceUp',
        value: function onSpaceUp() {
            if (window.started && this.isSpaceDown && this.firstSpaceUp) {
                this.isSpaceDown = false;

                this.factor = -this.factor;
            }

            if (window.started) {
                this.firstSpaceUp = true;
            }
        }
    }, {
        key: 'onSpaceDown',
        value: function onSpaceDown() {
            if (window.started && !this.isSpaceDown) {
                this.isSpaceDown = true;
            }
        }
    }, {
        key: 'onSpaceHold',
        value: function onSpaceHold(data) {
            var _this7 = this;

            var progress = data.progress;


            var uProgress = (0, _map2.default)(progress, 0, 1, 0, 1.8);

            Object.keys(this.faces).map(function (key) {
                _this7.faces[key].onSpaceHold(uProgress);
            });
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            // this.speed = 12.0;

            TweenMax.to(this, 1, { speed: 12, ease: Expo.easeInOut });
        }
    }]);

    return FacesController;
}();

exports.default = FacesController;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Mouse Manager
 */

var MouseManager = function () {
    function MouseManager() {
        _classCallCheck(this, MouseManager);
    }

    _createClass(MouseManager, null, [{
        key: 'start',
        value: function start() {
            var checkMouseSpeed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            // speed
            window.mouseSpeedX = 0;
            window.mouseSpeedY = 0;

            window.mouseLastX = 0;
            window.mouseLastY = 0;

            // direction
            window.mouseDirectionX = 0;
            window.mouseDirectionY = 0;

            // position
            window.mouseX = 0;
            window.mouseY = 0;

            if (checkMouseSpeed) window.setInterval(MouseManager.getSpeed, 30);

            window.addEventListener('mousemove', MouseManager.move);
        }
    }, {
        key: 'move',
        value: function move(e) {

            window.mouseX = e.clientX;
            window.mouseY = e.clientY;

            MouseManager.getDirection(e);
        }
    }, {
        key: 'getDirection',
        value: function getDirection(e) {

            // x
            if (window.mouseX < e.pageX) window.mouseDirectionX = 1;else if (window.mouseX > e.pageX) window.mouseDirectionX = -1;else window.mouseDirectionX = 0;

            // y
            if (window.mouseY < e.pageY) window.mouseDirectionY = 1;else if (window.mouseY > e.pageY) window.mouseDirectionY = -1;else window.mouseDirectionY = 0;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            window.mouseSpeedX = window.mouseX - window.mouseLastX;
            window.mouseSpeedY = window.mouseY - window.mouseLastY;

            window.mouseLastX = window.mouseX;
            window.mouseLastY = window.mouseY;
        }
    }]);

    return MouseManager;
}();

exports.default = MouseManager;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    pads: [{ id: 1, number: 44 }, { id: 2, number: 45 }, { id: 3, number: 46 }, { id: 4, number: 47 }, { id: 5, number: 48 }, { id: 6, number: 49 }, { id: 7, number: 50 }, { id: 8, number: 51 }],
    knobs: [{ id: 1, number: 1 }, { id: 2, number: 2 }, { id: 3, number: 3 }, { id: 4, number: 4 }, { id: 5, number: 5 }, { id: 6, number: 6 }, { id: 7, number: 7 }, { id: 8, number: 8 }]
};

exports.default = config;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(2);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(1);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyboardController = function () {
    function KeyboardController() {
        _classCallCheck(this, KeyboardController);

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('keypress', this.onKeyPress);
        window.addEventListener('keydown', this.onKeyDown);
    }

    _createClass(KeyboardController, [{
        key: 'onKeyUp',
        value: function onKeyUp(event) {
            var key = event.key;


            _EventsManager2.default.emit(_Events2.default.KEYBOARD.KEYUP, { key: key });

            if (key === ' ') {
                _EventsManager2.default.emit(_Events2.default.KEYBOARD.SPACEUP);
            }
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(event) {
            var key = event.key;


            _EventsManager2.default.emit(_Events2.default.KEYBOARD.KEYDOWN, { key: key });

            if (key === ' ') {
                _EventsManager2.default.emit(_Events2.default.KEYBOARD.SPACEDOWN);
            }
        }
    }, {
        key: 'onKeyPress',
        value: function onKeyPress(event) {
            var key = event.key;


            _EventsManager2.default.emit(_Events2.default.KEYBOARD.KEYPRESS, { key: key });
        }
    }]);

    return KeyboardController;
}();

exports.default = KeyboardController;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AbstractFace2 = __webpack_require__(3);

var _AbstractFace3 = _interopRequireDefault(_AbstractFace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_AbstractFace) {
    _inherits(Background, _AbstractFace);

    function Background(geometry, color) {
        _classCallCheck(this, Background);

        return _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, geometry, color, 'background'));
    }

    return Background;
}(_AbstractFace3.default);

exports.default = Background;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AbstractFace2 = __webpack_require__(3);

var _AbstractFace3 = _interopRequireDefault(_AbstractFace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bottom = function (_AbstractFace) {
    _inherits(Bottom, _AbstractFace);

    function Bottom(geometry, color) {
        _classCallCheck(this, Bottom);

        var _this = _possibleConstructorReturn(this, (Bottom.__proto__ || Object.getPrototypeOf(Bottom)).call(this, geometry, color, 'bottom'));

        _this.orientations = {
            horizontal: new THREE.Vector3(0, 1, 0),
            horizontalSkew1: new THREE.Vector3(-1, 0, 0),
            vertical: new THREE.Vector3(-3, 0, 0),
            verticalSkew1: new THREE.Vector3(1, 1, 0),
            verticalSkew2: new THREE.Vector3(-1, -1, 0)
        };

        _this.uniforms['opacity'].value = 1.0;

        _this.visibilityToggler = '2';
        _this.visibilityHider = '3';
        _this.visibilityShower = '1';
        return _this;
    }

    return Bottom;
}(_AbstractFace3.default);

exports.default = Bottom;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AbstractFace2 = __webpack_require__(3);

var _AbstractFace3 = _interopRequireDefault(_AbstractFace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Left = function (_AbstractFace) {
    _inherits(Left, _AbstractFace);

    function Left(geometry, color) {
        _classCallCheck(this, Left);

        var _this = _possibleConstructorReturn(this, (Left.__proto__ || Object.getPrototypeOf(Left)).call(this, geometry, color, 'left'));

        _this.orientations = {
            horizontal: new THREE.Vector3(1, 0, 0),
            horizontalSkew1: new THREE.Vector3(0, 20, 0),
            vertical: new THREE.Vector3(0, 1, 0),
            verticalSkew1: new THREE.Vector3(-1, 1, 0),
            verticalSkew2: new THREE.Vector3(-1, -1, 0)
        };

        _this.visibilityToggler = '4';
        _this.visibilityHider = '1';
        _this.visibilityShower = '3';
        return _this;
    }

    return Left;
}(_AbstractFace3.default);

exports.default = Left;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AbstractFace2 = __webpack_require__(3);

var _AbstractFace3 = _interopRequireDefault(_AbstractFace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Right = function (_AbstractFace) {
    _inherits(Right, _AbstractFace);

    function Right(geometry, color) {
        _classCallCheck(this, Right);

        var _this = _possibleConstructorReturn(this, (Right.__proto__ || Object.getPrototypeOf(Right)).call(this, geometry, color, 'right', THREE.BackSide));

        _this.orientations = {
            horizontal: new THREE.Vector3(-1, 0, 0),
            horizontalSkew1: new THREE.Vector3(0, -20, 0),
            vertical: new THREE.Vector3(0, -1, 0),
            verticalSkew1: new THREE.Vector3(1, -1, 0),
            verticalSkew2: new THREE.Vector3(1, -1, 0)
        };

        _this.visibilityToggler = '6';
        _this.visibilityHider = '1';
        _this.visibilityShower = '3';
        return _this;
    }

    return Right;
}(_AbstractFace3.default);

exports.default = Right;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AbstractFace2 = __webpack_require__(3);

var _AbstractFace3 = _interopRequireDefault(_AbstractFace2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top = function (_AbstractFace) {
    _inherits(Top, _AbstractFace);

    function Top(geometry, color) {
        _classCallCheck(this, Top);

        var _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, geometry, color, 'top', THREE.BackSide));

        _this.orientations = {
            horizontal: new THREE.Vector3(0, 1, 0),
            horizontalSkew1: new THREE.Vector3(20, 0, 0),
            vertical: new THREE.Vector3(1, 0, 0),
            verticalSkew1: new THREE.Vector3(1, 1, 0),
            verticalSkew2: new THREE.Vector3(-1, 1, 0)
        };

        _this.visibilityToggler = '8';
        _this.visibilityHider = '3';
        _this.visibilityShower = '1';
        return _this;
    }

    return Top;
}(_AbstractFace3.default);

exports.default = Top;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webAudioPlayer = __webpack_require__(52);

var _webAudioPlayer2 = _interopRequireDefault(_webAudioPlayer);

var _webAudioAnalyser = __webpack_require__(51);

var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);

var _analyserFrequencyAverage = __webpack_require__(33);

var _analyserFrequencyAverage2 = _interopRequireDefault(_analyserFrequencyAverage);

var _Range = __webpack_require__(35);

var _Range2 = _interopRequireDefault(_Range);

var _Events = __webpack_require__(2);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(1);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioContext = AudioContext ? new AudioContext() : null;

var SoundManager = function () {
    function SoundManager() {
        _classCallCheck(this, SoundManager);

        this.bass = 0;
        this.midBass = 0;
        this.voice = 0;
        this.drum = 0;
        this.pause = false;
        this.isSpaceDown = false;
        this.started = false;

        this.assets = 'assets/sounds';
        this.sources = {
            intro: 'intro.mp3',
            xp: 'xp.mp3'
        };

        this.start = this.start.bind(this);
        this.onSpaceHold = this.onSpaceHold.bind(this);
        this.onSpaceUp = this.onSpaceUp.bind(this);
        this.onSpaceDown = this.onSpaceDown.bind(this);
        this.onStart = this.onStart.bind(this);

        this.initSound();
        // this.initGui();

        var lowKick = new _Range2.default('lowKick', [110, 130], 600, _Events2.default.SOUNDS.LOWKICK);
        var middleKick = new _Range2.default('middleKick', [270, 290], 600, _Events2.default.SOUNDS.MIDDLEKICK, 0.3);
        var tremolo = new _Range2.default('tremolo', [480, 520], 100, _Events2.default.SOUNDS.TREMOLO);
        var highKick = new _Range2.default('highKick', [1500, 3500], 800, _Events2.default.SOUNDS.HIGHKICK, 0.5);

        this.ranges = [lowKick, highKick, tremolo, middleKick];

        _EventsManager2.default.on(_Events2.default.SOUNDS.START, this.start);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEHOLD, this.onSpaceHold);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEUP, this.onSpaceUp);
        _EventsManager2.default.on(_Events2.default.XP.START, this.onStart);
    }

    _createClass(SoundManager, [{
        key: 'initGui',
        value: function initGui() {
            var _this = this;

            this.soundGui = window.gui.addFolder('Sound');

            var pause = this.soundGui.add(this, 'pause');
            pause.onChange(function () {
                if (_this.pause) _this.player.pause();else _this.player.play();
            });
        }
    }, {
        key: 'initSound',
        value: function initSound() {
            var _this2 = this;

            this.players = {};

            Object.keys(this.sources).map(function (key) {
                _this2.players[key] = {
                    audio: null,
                    analyser: null,
                    node: null
                };

                var audio = new Audio();
                audio.volume = 0;
                audio.crossOrigin = 'Anonymous';
                audio.addEventListener('loadeddata', function () {
                    var audioContext = AudioContext ? new AudioContext() : null;
                    var analyser = (0, _webAudioAnalyser2.default)(audio, audioContext, { audible: true, stereo: false });

                    _this2.players[key].analyser = analyser;
                    _this2.players[key].node = analyser.analyser;
                    _this2.players[key].loaded = true;

                    _EventsManager2.default.emit(_Events2.default.SOUNDS.CANPLAY, { name: key });
                });
                audio.addEventListener('ended', function () {
                    _EventsManager2.default.emit(_Events2.default.SOUNDS.END, { name: key });
                });
                audio.src = _this2.assets + '/' + _this2.sources[key];

                _this2.players[key].audio = audio;
            });
        }
    }, {
        key: 'start',
        value: function start() {
            var player = this.players['xp'];

            if (player.loaded) {
                player.audio.play();
            }
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.players['xp'].loaded) {
                var _players$xp = this.players['xp'],
                    analyser = _players$xp.analyser,
                    node = _players$xp.node;


                var freqs = analyser.frequencies();

                for (var i = 0; i < this.ranges.length; i++) {
                    var range = this.ranges[i];
                    var level = (0, _analyserFrequencyAverage2.default)(node, freqs, range.freqs[0], range.freqs[1]);

                    range.update(level);
                }
            }
        }
    }, {
        key: 'onSpaceHold',
        value: function onSpaceHold(data) {
            var volume = data.volume;
            var audio = this.players['intro'].audio;


            audio.volume = Math.max(0, Math.min(volume * 0.5, 1));
        }
    }, {
        key: 'onSpaceDown',
        value: function onSpaceDown() {
            if (!this.isSpaceDown) {
                this.isSpaceDown = true;

                if (!window.started) {
                    var audio = this.players['intro'].audio;


                    audio.play();
                }
            }
        }
    }, {
        key: 'onSpaceUp',
        value: function onSpaceUp() {
            if (this.isSpaceDown) {
                this.isSpaceDown = false;
            }
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            var intro = this.players['intro'].audio;
            var xp = this.players['xp'].audio;


            xp.volume = 1;
            xp.play();

            var tl = new TimelineMax();
            tl.to(intro, 0.5, { volume: 0, ease: Expo.easeOut, onComplete: function onComplete() {
                    intro.pause();
                } });
        }
    }]);

    return SoundManager;
}();

exports.default = SoundManager;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var queue = {};

/*
** allow any number variable to be smoothed
* @param {string} id - a unique name for your smoothing
* @param {number} value - the value you want to be smoothed
* @param {number} coeff (optional) - the smoothing coefficient, the smaller, the slower. Default: 0.1
* @param {boolean} log (optional) - either the smoothed value is log in the console. Default: false
* @param {number} init (optional) - the starting value of the smoothing. Default: 0
* @return {number} the smoothed value
**/

function smooth(id, value) {
	var coeff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
	var log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	var init = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

	if (queue[id] !== undefined) {
		queue[id] += (value - queue[id]) * coeff;

		if (log) {
			console.log('%cSmooth ' + id + ' :: ' + queue[id], 'color: blue;');
		}
	} else {
		if (typeof id !== 'string' || id === '') {
			throw new Error('Smooth :: id should be a non-empty string');
		}

		queue[id] = init;
	}

	return queue[id];
};

exports.default = smooth;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(2);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(1);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
    function UI() {
        var _this = this;

        _classCallCheck(this, UI);

        this.$wrapper = document.querySelector('.ui__section--intro');
        this.$logo = this.$wrapper.querySelector('.intro__logo');
        this.$action = this.$wrapper.querySelector('.intro__action');
        this.$actionLabel = this.$action.querySelector('.action__label');
        this.$actionFill = this.$wrapper.querySelector('.action__fill');
        this.$tuto = document.querySelector('.ui__section--tuto');
        this.$credits = document.querySelector('.ui__section--credits');
        this.$creditItems = document.querySelectorAll('.credits__item');
        this.$progressFill = document.querySelector('.ui__progress__fill');
        this.$help = document.querySelector('.ui__help');
        this.$background = document.querySelector('.ui__background');

        this.now = Date.now();
        this.maxTime = 3000;
        this.helpIsOpen = false;

        this.isCompleted = false;

        this.minFill = 0.01;
        this.maxFill = 1;
        this.fill = this.minFill;

        this.volume = 0;
        this.progress = 0;
        this.resetted = false;
        this.isDown = false;

        this.duration = 5;

        this.onComplete = this.onComplete.bind(this);

        this.tl = new TimelineMax({ paused: true, onComplete: this.onComplete });
        this.tl.to(this, this.duration, { volume: 1, ease: Linear.easeNone }, 0);
        this.tl.to(this.$progressFill, this.duration, { css: { transform: 'scaleX(1)' }, ease: Linear.easeNone }, 0);
        this.tl.to(this.$action, this.duration, { css: { opacity: 0 }, ease: Linear.easeNone }, 0);
        this.tl.to(this.$logo, this.duration * 0.25, { opacity: 0, scale: 1.5, ease: Linear.easeNone }, 0);
        this.tl.to(this, this.duration * 0.25, { progress: 1, ease: Expo.easeInOut }, this.duration * 0.25);
        this.tl.to(this.$tuto, this.duration * 0.25, { css: { opacity: 1 }, ease: Linear.easeNone }, this.duration * 0.4);
        this.tl.to(this.$tuto, this.duration * 0.75, { css: { scale: 1.5 }, ease: Linear.easeNone }, this.duration * 0.25);
        this.tl.to(this.$tuto, this.duration * 0.25, { css: { opacity: 0 }, ease: Linear.easeNone }, this.duration * 0.75);
        this.tl.set(this, { progress: 0 });
        // this.tl.to(this, this.duration * 0.25, { progress: 0.44, ease: Expo.easeOut }, this.duration * 0.98);


        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onSpaceDown = this.onSpaceDown.bind(this);
        this.onSpaceUp = this.onSpaceUp.bind(this);
        this.onEndXP = this.onEndXP.bind(this);
        this.onClickHelp = this.onClickHelp.bind(this);

        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYDOWN, this.onKeyDown);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYUP, this.onKeyUp);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEUP, this.onSpaceUp);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        _EventsManager2.default.on(_Events2.default.XP.END, this.onEndXP);

        this.tlHelpShow = new TimelineMax({ paused: true, onComplete: function onComplete() {
                _this.helpIsOpen = true;
            } });
        this.tlHelpShow.to(this.$tuto, 0.5, { css: { opacity: 1, scale: 1 }, ease: Expo.easeOut }, 0);
        this.tlHelpShow.to(this.$background, 0.5, { css: { opacity: 1 }, ease: Expo.easeOut }, 0);

        this.tlHelpHide = new TimelineMax({ paused: true, onComplete: function onComplete() {
                _this.helpIsOpen = false;
            } });
        this.tlHelpHide.to(this.$tuto, 0.5, { css: { opacity: 0, scale: 0.9 }, ease: Expo.easeOut }, 0);
        this.tlHelpHide.to(this.$background, 0.5, { css: { opacity: 0 }, ease: Expo.easeOut }, 0);

        this.$help.addEventListener('click', this.onClickHelp);

        this.init();
    }

    _createClass(UI, [{
        key: 'init',
        value: function init() {
            this.display();
        }
    }, {
        key: 'update',
        value: function update() {
            if (!this.isCompleted) {
                _EventsManager2.default.emit(_Events2.default.KEYBOARD.SPACEHOLD, { progress: this.progress, volume: this.volume });
            }
        }
    }, {
        key: 'display',
        value: function display() {
            return TweenMax.to(this.$wrapper, 0.5, { css: { opacity: 1 }, ease: Expo.easeOut });
        }
    }, {
        key: 'hide',
        value: function hide() {
            return TweenMax.to(this.$wrapper, 0.5, { css: { opacity: 0 }, ease: Expo.easeOut });
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(data) {}
    }, {
        key: 'onKeyUp',
        value: function onKeyUp(data) {}
    }, {
        key: 'onSpaceUp',
        value: function onSpaceUp() {
            if (!window.started && this.isDown && !this.isCompleted) {
                this.isDown = false;
                this.tl.timeScale(4);
                this.tl.reverse();
            }
        }
    }, {
        key: 'onSpaceDown',
        value: function onSpaceDown() {
            if (!window.started && !this.isDown) {
                this.isDown = true;
                this.tl.timeScale(1);
                this.tl.play();
            }
        }
    }, {
        key: 'onComplete',
        value: function onComplete() {
            if (!this.isCompleted) {
                TweenMax.set(this, { progress: 0 }, this.duration);
                TweenMax.set(this.$creditItems, { css: { scale: 0.8, opacity: 0 } });
                TweenMax.set(this.$credits, { css: { scale: 1, opacity: 1 } });
                TweenMax.set(this.$progressFill, { css: { transform: 'scaleX(0)' } });
                TweenMax.to(this.$help, 0.5, { css: { opacity: 1 }, ease: Expo.easeOut });

                this.isCompleted = true;
                _EventsManager2.default.emit(_Events2.default.XP.START);
            }
        }
    }, {
        key: 'displayCredits',
        value: function displayCredits() {
            var _this2 = this;

            this.$credits.style.pointerEvents = 'auto';
            this.$actionLabel.innerHTML = 'Hold spacebar to restart';

            this.isDown = false;

            this.tl.kill();
            this.tl = new TimelineMax({ paused: true, onComplete: this.onComplete });
            this.tl.to(this, this.duration, { volume: 1, ease: Linear.easeNone }, 0);
            this.tl.to(this.$action, this.duration, { css: { opacity: 0 }, ease: Linear.easeNone }, 0);
            this.tl.to(this.$progressFill, this.duration, { css: { transform: 'scaleX(1)' }, ease: Linear.easeNone }, 0);
            this.tl.to(this.$credits, this.duration, { opacity: 0, scale: 1.5, ease: Linear.easeNone }, 0);
            this.tl.to(this, this.duration * 0.5, { progress: 1, ease: Expo.easeInOut }, this.duration * 0.5);

            if (this.helpIsOpen) {
                this.tlHelpHide.restart();
            }

            var duration = 2;
            var tl = new TimelineMax({ onComplete: function onComplete() {
                    _this2.reset();
                } });
            tl.staggerFromTo(Array.from(this.$creditItems), duration, { css: { scale: 0.8, opacity: 0 } }, { css: { scale: 1.0, opacity: 1 }, ease: Expo.easeOut }, duration * 0.05, 0);
            tl.to(this.$help, 0.5, { css: { opacity: 0 }, ease: Expo.easeOut }, 0);
            tl.to(this.$action, this.duration, { css: { opacity: 1 }, ease: Expo.easeOut });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.resetted = true;
            this.progress = 0;
            this.volume = 0;
            this.isDown = false;
            this.isCompleted = false;
            this.duration = 2;
        }
    }, {
        key: 'onEndXP',
        value: function onEndXP() {
            this.displayCredits();
        }
    }, {
        key: 'onClickHelp',
        value: function onClickHelp(event) {
            event.preventDefault();

            if (!window.started) {
                return;
            }

            if (!this.helpIsOpen) {
                this.$help.innerHTML = 'X';

                this.tlHelpShow.restart();
            } else {
                this.$help.innerHTML = '?';

                this.tlHelpHide.restart();
            }
        }
    }]);

    return UI;
}();

exports.default = UI;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _CopyPass = __webpack_require__(38);

var _CopyPass2 = _interopRequireDefault(_CopyPass);

var _Pass = __webpack_require__(4);

var _Pass2 = _interopRequireDefault(_Pass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function removeNil() {
	var as = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	return as.filter(function (a) {
		return a != null;
	});
}

function merge() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var filtered = removeNil(args);

	if (filtered.length < 1) {
		return {};
	}

	if (filtered.length === 1) {
		return args[0];
	}

	return filtered.reduce(function (acc, cur) {
		Object.keys(cur).forEach(function (key) {
			if (_typeof(acc[key]) === 'object' && _typeof(cur[key]) === 'object') {
				acc[key] = merge(acc[key], cur[key]);
			} else {
				acc[key] = cur[key];
			}
		});

		return acc;
	}, {});
}

var Composer = function () {
	function Composer(renderer) {
		var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Composer);

		var defaults = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			wrapS: THREE.ClampToEdgeWrapping,
			wrapT: THREE.ClampToEdgeWrapping,
			format: THREE.RGBFormat,
			type: THREE.UnsignedByteType,
			stencilBuffer: true
		};

		var options = merge(defaults, opts);

		this.renderer = renderer;

		this.front = new THREE.WebGLRenderTarget(1, 1, options);
		this.back = this.front.clone();

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(1, 1, 1, 1, -10000, 10000);

		this.defaultMaterial = new THREE.MeshBasicMaterial();
		this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), this.defaultMaterial);
		this.scene.add(this.quad);

		this.copyPass = new _CopyPass2.default();

		this.now = Date.now();
	}

	_createClass(Composer, [{
		key: 'setSize',
		value: function setSize(w, h) {
			this.width = w;
			this.height = h;

			this.camera.projectionMatrix.makeOrthographic(w / -2, w / 2, h / 2, h / -2, this.camera.near, this.camera.far);
			this.quad.scale.set(w, h, 1);

			this.front.setSize(w, h);
			this.back.setSize(w, h);
		}
	}, {
		key: 'swapBuffers',
		value: function swapBuffers() {
			this.output = this.write;
			this.input = this.read;

			var temp = this.write;
			this.write = this.read;
			this.read = temp;
		}
	}, {
		key: 'pass',
		value: function pass(_pass, target) {
			if (_pass instanceof _Pass2.default && _pass.enabled) {
				this.quad.material = _pass.shader;
				this.quad.material.uniforms.tInput.value = this.read.texture;
				this.quad.material.uniforms.resolution.value.set(this.width, this.height);

				if (target) {
					this.renderer.render(this.scene, this.camera, target, true);
				} else {
					this.renderer.render(this.scene, this.camera, this.write, false);
					this.swapBuffers();
				}
			}
		}
	}, {
		key: 'render',
		value: function render(scene, camera, target) {
			var dest = target ? target : this.write;

			this.renderer.render(scene, camera, dest, true);
			this.swapBuffers();
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.read = this.front;
			this.write = this.back;

			this.output = this.write;
			this.input = this.read;
		}
	}, {
		key: 'toScreen',
		value: function toScreen(pass, target) {
			this.quad.material = pass ? pass.shader : this.copyPass.shader;
			this.quad.material.uniforms.tInput.value = this.read.texture;
			this.quad.material.uniforms.resolution.value.set(this.width, this.height);

			if (target) {
				this.renderer.render(this.scene, this.camera, target, true);
			} else {
				this.renderer.render(this.scene, this.camera);
			}
		}
	}]);

	return Composer;
}();

exports.default = Composer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pass2 = __webpack_require__(4);

var _Pass3 = _interopRequireDefault(_Pass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomPass = function (_Pass) {
    _inherits(CustomPass, _Pass);

    function CustomPass(options) {
        _classCallCheck(this, CustomPass);

        var _this = _possibleConstructorReturn(this, (CustomPass.__proto__ || Object.getPrototypeOf(CustomPass)).call(this, 'CustomPass', 'custom.fs', 'basic.vs', options));

        console.log(_this.uniforms);
        return _this;
    }

    _createClass(CustomPass, [{
        key: 'update',
        value: function update() {
            this.uniforms.time.value += 0.016;
        }
    }]);

    return CustomPass;
}(_Pass3.default);

exports.default = CustomPass;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Pass2 = __webpack_require__(4);

var _Pass3 = _interopRequireDefault(_Pass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FXAAPass = function (_Pass) {
    _inherits(FXAAPass, _Pass);

    function FXAAPass() {
        _classCallCheck(this, FXAAPass);

        return _possibleConstructorReturn(this, (FXAAPass.__proto__ || Object.getPrototypeOf(FXAAPass)).call(this, 'FXAAPass', 'fxaa.fs', 'basic.vs', {}));
    }

    return FXAAPass;
}(_Pass3.default);

exports.default = FXAAPass;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(47)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function( THREE ) {
	/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author erich666 / http://erichaines.com
	 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe

	function OrbitControls( object, domElement ) {

		this.object = object;

		this.domElement = ( domElement !== undefined ) ? domElement : document;

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();

		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = - Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;

		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// Set to false to disable use of the keys
		this.enableKeys = true;

		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		//
		// public methods
		//

		this.getPolarAngle = function () {

			return spherical.phi;

		};

		this.getAzimuthalAngle = function () {

			return spherical.theta;

		};

		this.reset = function () {

			scope.target.copy( scope.target0 );
			scope.object.position.copy( scope.position0 );
			scope.object.zoom = scope.zoom0;

			scope.object.updateProjectionMatrix();
			scope.dispatchEvent( changeEvent );

			scope.update();

			state = STATE.NONE;

		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function() {

			var offset = new THREE.Vector3();

			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
			var quatInverse = quat.clone().inverse();

			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();

			return function update () {

				var position = scope.object.position;

				offset.copy( position ).sub( scope.target );

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion( quat );

				// angle from z-axis around y-axis
				spherical.setFromVector3( offset );

				if ( scope.autoRotate && state === STATE.NONE ) {

					rotateLeft( getAutoRotationAngle() );

				}

				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;

				// restrict theta to be between desired limits
				spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

				// restrict phi to be between desired limits
				spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

				spherical.makeSafe();


				spherical.radius *= scale;

				// restrict radius to be between desired limits
				spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

				// move target to panned location
				scope.target.add( panOffset );

				offset.setFromSpherical( spherical );

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion( quatInverse );

				position.copy( scope.target ).add( offset );

				scope.object.lookAt( scope.target );

				if ( scope.enableDamping === true ) {

					sphericalDelta.theta *= ( 1 - scope.dampingFactor );
					sphericalDelta.phi *= ( 1 - scope.dampingFactor );

				} else {

					sphericalDelta.set( 0, 0, 0 );

				}

				scale = 1;
				panOffset.set( 0, 0, 0 );

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if ( zoomChanged ||
					lastPosition.distanceToSquared( scope.object.position ) > EPS ||
					8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

					scope.dispatchEvent( changeEvent );

					lastPosition.copy( scope.object.position );
					lastQuaternion.copy( scope.object.quaternion );
					zoomChanged = false;

					return true;

				}

				return false;

			};

		}();

		this.dispose = function() {

			scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
			scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
			scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

			scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
			scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
			scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );

			window.removeEventListener( 'keydown', onKeyDown, false );

			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

		};

		//
		// internals
		//

		var scope = this;

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		var STATE = { NONE : - 1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };

		var state = STATE.NONE;

		var EPS = 0.000001;

		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();

		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		function getAutoRotationAngle() {

			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

		}

		function getZoomScale() {

			return Math.pow( 0.95, scope.zoomSpeed );

		}

		function rotateLeft( angle ) {

			sphericalDelta.theta -= angle;

		}

		function rotateUp( angle ) {

			sphericalDelta.phi -= angle;

		}

		var panLeft = function() {

			var v = new THREE.Vector3();

			return function panLeft( distance, objectMatrix ) {

				v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
				v.multiplyScalar( - distance );

				panOffset.add( v );

			};

		}();

		var panUp = function() {

			var v = new THREE.Vector3();

			return function panUp( distance, objectMatrix ) {

				v.setFromMatrixColumn( objectMatrix, 1 ); // get Y column of objectMatrix
				v.multiplyScalar( distance );

				panOffset.add( v );

			};

		}();

		// deltaX and deltaY are in pixels; right and down are positive
		var pan = function() {

			var offset = new THREE.Vector3();

			return function pan ( deltaX, deltaY ) {

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				if ( scope.object instanceof THREE.PerspectiveCamera ) {

					// perspective
					var position = scope.object.position;
					offset.copy( position ).sub( scope.target );
					var targetDistance = offset.length();

					// half of the fov is center to top of screen
					targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

					// we actually don't use screenWidth, since perspective camera is fixed to screen height
					panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
					panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

				} else if ( scope.object instanceof THREE.OrthographicCamera ) {

					// orthographic
					panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
					panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

				} else {

					// camera neither orthographic nor perspective
					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
					scope.enablePan = false;

				}

			};

		}();

		function dollyIn( dollyScale ) {

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				scale /= dollyScale;

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		function dollyOut( dollyScale ) {

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				scale *= dollyScale;

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate( event ) {

			//console.log( 'handleMouseDownRotate' );

			rotateStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownDolly( event ) {

			//console.log( 'handleMouseDownDolly' );

			dollyStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownPan( event ) {

			//console.log( 'handleMouseDownPan' );

			panStart.set( event.clientX, event.clientY );

		}

		function handleMouseMoveRotate( event ) {

			//console.log( 'handleMouseMoveRotate' );

			rotateEnd.set( event.clientX, event.clientY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			// rotating across whole screen goes 360 degrees around
			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleMouseMoveDolly( event ) {

			//console.log( 'handleMouseMoveDolly' );

			dollyEnd.set( event.clientX, event.clientY );

			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				dollyIn( getZoomScale() );

			} else if ( dollyDelta.y < 0 ) {

				dollyOut( getZoomScale() );

			}

			dollyStart.copy( dollyEnd );

			scope.update();

		}

		function handleMouseMovePan( event ) {

			//console.log( 'handleMouseMovePan' );

			panEnd.set( event.clientX, event.clientY );

			panDelta.subVectors( panEnd, panStart );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

			scope.update();

		}

		function handleMouseUp( event ) {

			//console.log( 'handleMouseUp' );

		}

		function handleMouseWheel( event ) {

			//console.log( 'handleMouseWheel' );

			if ( event.deltaY < 0 ) {

				dollyOut( getZoomScale() );

			} else if ( event.deltaY > 0 ) {

				dollyIn( getZoomScale() );

			}

			scope.update();

		}

		function handleKeyDown( event ) {

			//console.log( 'handleKeyDown' );

			switch ( event.keyCode ) {

				case scope.keys.UP:
					pan( 0, scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.BOTTOM:
					pan( 0, - scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.LEFT:
					pan( scope.keyPanSpeed, 0 );
					scope.update();
					break;

				case scope.keys.RIGHT:
					pan( - scope.keyPanSpeed, 0 );
					scope.update();
					break;

			}

		}

		function handleTouchStartRotate( event ) {

			//console.log( 'handleTouchStartRotate' );

			rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		}

		function handleTouchStartDolly( event ) {

			//console.log( 'handleTouchStartDolly' );

			var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
			var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

			var distance = Math.sqrt( dx * dx + dy * dy );

			dollyStart.set( 0, distance );

		}

		function handleTouchStartPan( event ) {

			//console.log( 'handleTouchStartPan' );

			panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		}

		function handleTouchMoveRotate( event ) {

			//console.log( 'handleTouchMoveRotate' );

			rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			// rotating across whole screen goes 360 degrees around
			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleTouchMoveDolly( event ) {

			//console.log( 'handleTouchMoveDolly' );

			var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
			var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

			var distance = Math.sqrt( dx * dx + dy * dy );

			dollyEnd.set( 0, distance );

			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				dollyOut( getZoomScale() );

			} else if ( dollyDelta.y < 0 ) {

				dollyIn( getZoomScale() );

			}

			dollyStart.copy( dollyEnd );

			scope.update();

		}

		function handleTouchMovePan( event ) {

			//console.log( 'handleTouchMovePan' );

			panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

			panDelta.subVectors( panEnd, panStart );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

			scope.update();

		}

		function handleTouchEnd( event ) {

			//console.log( 'handleTouchEnd' );

		}

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onMouseDown( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			if ( event.button === scope.mouseButtons.ORBIT ) {

				if ( scope.enableRotate === false ) return;

				handleMouseDownRotate( event );

				state = STATE.ROTATE;

			} else if ( event.button === scope.mouseButtons.ZOOM ) {

				if ( scope.enableZoom === false ) return;

				handleMouseDownDolly( event );

				state = STATE.DOLLY;

			} else if ( event.button === scope.mouseButtons.PAN ) {

				if ( scope.enablePan === false ) return;

				handleMouseDownPan( event );

				state = STATE.PAN;

			}

			if ( state !== STATE.NONE ) {

				document.addEventListener( 'mousemove', onMouseMove, false );
				document.addEventListener( 'mouseup', onMouseUp, false );

				scope.dispatchEvent( startEvent );

			}

		}

		function onMouseMove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			if ( state === STATE.ROTATE ) {

				if ( scope.enableRotate === false ) return;

				handleMouseMoveRotate( event );

			} else if ( state === STATE.DOLLY ) {

				if ( scope.enableZoom === false ) return;

				handleMouseMoveDolly( event );

			} else if ( state === STATE.PAN ) {

				if ( scope.enablePan === false ) return;

				handleMouseMovePan( event );

			}

		}

		function onMouseUp( event ) {

			if ( scope.enabled === false ) return;

			handleMouseUp( event );

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( endEvent );

			state = STATE.NONE;

		}

		function onMouseWheel( event ) {

			if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

			event.preventDefault();
			event.stopPropagation();

			handleMouseWheel( event );

			scope.dispatchEvent( startEvent ); // not sure why these are here...
			scope.dispatchEvent( endEvent );

		}

		function onKeyDown( event ) {

			if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

			handleKeyDown( event );

		}

		function onTouchStart( event ) {

			if ( scope.enabled === false ) return;

			switch ( event.touches.length ) {

				case 1:	// one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;

					handleTouchStartRotate( event );

					state = STATE.TOUCH_ROTATE;

					break;

				case 2:	// two-fingered touch: dolly

					if ( scope.enableZoom === false ) return;

					handleTouchStartDolly( event );

					state = STATE.TOUCH_DOLLY;

					break;

				case 3: // three-fingered touch: pan

					if ( scope.enablePan === false ) return;

					handleTouchStartPan( event );

					state = STATE.TOUCH_PAN;

					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) {

				scope.dispatchEvent( startEvent );

			}

		}

		function onTouchMove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();
			event.stopPropagation();

			switch ( event.touches.length ) {

				case 1: // one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;
					if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?...

					handleTouchMoveRotate( event );

					break;

				case 2: // two-fingered touch: dolly

					if ( scope.enableZoom === false ) return;
					if ( state !== STATE.TOUCH_DOLLY ) return; // is this needed?...

					handleTouchMoveDolly( event );

					break;

				case 3: // three-fingered touch: pan

					if ( scope.enablePan === false ) return;
					if ( state !== STATE.TOUCH_PAN ) return; // is this needed?...

					handleTouchMovePan( event );

					break;

				default:

					state = STATE.NONE;

			}

		}

		function onTouchEnd( event ) {

			if ( scope.enabled === false ) return;

			handleTouchEnd( event );

			scope.dispatchEvent( endEvent );

			state = STATE.NONE;

		}

		function onContextMenu( event ) {

			event.preventDefault();

		}

		//

		scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

		scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

		window.addEventListener( 'keydown', onKeyDown, false );

		// force an update at start

		this.update();

	};

	OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
	OrbitControls.prototype.constructor = OrbitControls;

	Object.defineProperties( OrbitControls.prototype, {

		center: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
				return this.target;

			}

		},

		// backward compatibility

		noZoom: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				return ! this.enableZoom;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				this.enableZoom = ! value;

			}

		},

		noRotate: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				return ! this.enableRotate;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				this.enableRotate = ! value;

			}

		},

		noPan: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				return ! this.enablePan;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				this.enablePan = ! value;

			}

		},

		noKeys: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				return ! this.enableKeys;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				this.enableKeys = ! value;

			}

		},

		staticMoving : {

			get: function () {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				return ! this.enableDamping;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				this.enableDamping = ! value;

			}

		},

		dynamicDampingFactor : {

			get: function () {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				return this.dampingFactor;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				this.dampingFactor = value;

			}

		}

	} );

	return OrbitControls;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var frequencyToIndex = __webpack_require__(34)

module.exports = analyserFrequencyAverage.bind(null, 255)
module.exports.floatData = analyserFrequencyAverage.bind(null, 1)

function analyserFrequencyAverage (div, analyser, frequencies, minHz, maxHz) {
  var sampleRate = analyser.context.sampleRate
  var binCount = analyser.frequencyBinCount
  var start = frequencyToIndex(minHz, sampleRate, binCount)
  var end = frequencyToIndex(maxHz, sampleRate, binCount)
  var count = end - start
  var sum = 0
  for (; start < end; start++) {
    sum += frequencies[start] / div
  }
  return count === 0 ? 0 : (sum / count)
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(41)

module.exports = frequencyToIndex
function frequencyToIndex (frequency, sampleRate, frequencyBinCount) {
  var nyquist = sampleRate / 2
  var index = Math.round(frequency / nyquist * frequencyBinCount)
  return clamp(index, 0, frequencyBinCount)
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventsManager = __webpack_require__(1);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Range = function () {
    function Range(name, freqs, delta, event) {
        var minLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;

        _classCallCheck(this, Range);

        this.name = name;
        this.freqs = freqs;
        this.delta = delta;
        this.event = event;
        this.level = 0;
        this.minLevel = minLevel;

        this.time = Date.now();
    }

    _createClass(Range, [{
        key: 'update',
        value: function update(level) {
            var delta = Date.now() - this.time;

            this.level = level;

            if (delta > this.delta && this.level > this.minLevel) {
                this.time = Date.now();

                _EventsManager2.default.emit(this.event);
            }

            if (this.name === 'highKick') {
                // console.log(this.level);
            }
        }
    }]);

    return Range;
}();

exports.default = Range;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  };
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lucky;
function lucky(chances) {
    return !~~(Math.random() * chances);
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Pass2 = __webpack_require__(4);

var _Pass3 = _interopRequireDefault(_Pass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyPass = function (_Pass) {
	_inherits(CopyPass, _Pass);

	function CopyPass() {
		_classCallCheck(this, CopyPass);

		return _possibleConstructorReturn(this, (CopyPass.__proto__ || Object.getPrototypeOf(CopyPass)).call(this, 'CopyPass', 'copy.fs', 'basic.vs'));
	}

	return CopyPass;
}(_Pass3.default);

exports.default = CopyPass;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = randomFromArray;
function randomFromArray(array) {
    return array[~~(Math.random() * array.length)];
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
	"audio/midi": [
		"mid",
		"midi",
		"kar",
		"rmi"
	],
	"audio/mp4": [
		"mp4a",
		"m4a"
	],
	"audio/mpeg": [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	],
	"audio/ogg": [
		"oga",
		"ogg",
		"spx"
	],
	"audio/webm": [
		"weba"
	],
	"audio/x-matroska": [
		"mka"
	],
	"audio/x-mpegurl": [
		"m3u"
	],
	"audio/wav": [
		"wav"
	],
	"video/3gpp": [
		"3gp"
	],
	"video/3gpp2": [
		"3g2"
	],
	"video/mp4": [
		"mp4",
		"mp4v",
		"mpg4"
	],
	"video/mpeg": [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	],
	"video/ogg": [
		"ogv"
	],
	"video/quicktime": [
		"qt",
		"mov"
	],
	"video/webm": [
		"webm"
	],
	"video/x-f4v": [
		"f4v"
	],
	"video/x-fli": [
		"fli"
	],
	"video/x-flv": [
		"flv"
	],
	"video/x-m4v": [
		"m4v"
	],
	"video/x-matroska": [
		"mkv",
		"mk3d",
		"mks"
	]
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(11)

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = isNode

function isNode (val) {
  return (!val || typeof val !== 'object')
    ? false
    : (typeof window === 'object' && typeof window.Node === 'object')
      ? (val instanceof window.Node)
      : (typeof val.nodeType === 'number') &&
        (typeof val.nodeName === 'string')
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(50)
  , forEach = __webpack_require__(42)
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports =
  global.performance &&
  global.performance.now ? function now() {
    return performance.now()
  } : Date.now || function now() {
    return +new Date
  }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isDom = __webpack_require__(44)
var lookup = __webpack_require__(10)

module.exports.video = simpleMediaElement.bind(null, 'video')
module.exports.audio = simpleMediaElement.bind(null, 'audio')

function simpleMediaElement (elementName, sources, opt) {
  opt = opt || {}

  if (!Array.isArray(sources)) {
    sources = [ sources ]
  }

  var media = opt.element || document.createElement(elementName)

  if (opt.loop) media.setAttribute('loop', 'loop')
  if (opt.muted) media.setAttribute('muted', 'muted')
  if (opt.autoplay) media.setAttribute('autoplay', 'autoplay')
  if (opt.controls) media.setAttribute('controls', 'controls')
  if (opt.crossOrigin) media.setAttribute('crossorigin', opt.crossOrigin)
  if (opt.preload) media.setAttribute('preload', opt.preload)
  if (opt.poster) media.setAttribute('poster', opt.poster)
  if (typeof opt.volume !== 'undefined') media.setAttribute('volume', opt.volume)

  sources = sources.filter(Boolean)
  sources.forEach(function (source) {
    media.appendChild(createSourceElement(source))
  })

  return media
}

function createSourceElement (data) {
  if (isDom(data)) return data
  if (typeof data === 'string') {
    data = { src: data }
    if (data.src) {
      var ext = extension(data.src)
      if (ext) data.type = lookup(ext)
    }
  }

  var source = document.createElement('source')
  if (data.src) source.setAttribute('src', data.src)
  if (data.type) source.setAttribute('type', data.type)
  return source
}

function extension (data) {
  var extIdx = data.lastIndexOf('.')
  if (extIdx <= 0 || extIdx === data.length - 1) {
    return null
  }
  return data.substring(extIdx + 1)
}


/***/ }),
/* 50 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var AudioContext = window.AudioContext || window.webkitAudioContext

module.exports = WebAudioAnalyser

function WebAudioAnalyser(audio, ctx, opts) {
  if (!(this instanceof WebAudioAnalyser)) return new WebAudioAnalyser(audio, ctx, opts)
  if (!(ctx instanceof AudioContext)) (opts = ctx), (ctx = null)

  opts = opts || {}
  this.ctx = ctx = ctx || new AudioContext

  if (!(audio instanceof AudioNode)) {
    audio = (audio instanceof Audio || audio instanceof HTMLAudioElement)
      ? ctx.createMediaElementSource(audio)
      : ctx.createMediaStreamSource(audio)
  }

  this.analyser = ctx.createAnalyser()
  this.stereo   = !!opts.stereo
  this.audible  = opts.audible !== false
  this.wavedata = null
  this.freqdata = null
  this.splitter = null
  this.merger   = null
  this.source   = audio

  if (!this.stereo) {
    this.output = this.source
    this.source.connect(this.analyser)
    if (this.audible)
      this.analyser.connect(ctx.destination)
  } else {
    this.analyser = [this.analyser]
    this.analyser.push(ctx.createAnalyser())

    this.splitter = ctx.createChannelSplitter(2)
    this.merger   = ctx.createChannelMerger(2)
    this.output   = this.merger

    this.source.connect(this.splitter)

    for (var i = 0; i < 2; i++) {
      this.splitter.connect(this.analyser[i], i, 0)
      this.analyser[i].connect(this.merger, 0, i)
    }

    if (this.audible)
      this.merger.connect(ctx.destination)
  }
}

WebAudioAnalyser.prototype.waveform = function(output, channel) {
  if (!output) output = this.wavedata || (
    this.wavedata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)
  )

  var analyser = this.stereo
    ? this.analyser[channel || 0]
    : this.analyser

  analyser.getByteTimeDomainData(output)

  return output
}

WebAudioAnalyser.prototype.frequencies = function(output, channel) {
  if (!output) output = this.freqdata || (
    this.freqdata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)
  )

  var analyser = this.stereo
    ? this.analyser[channel || 0]
    : this.analyser

  analyser.getByteFrequencyData(output)

  return output
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var buffer = __webpack_require__(53)
var media = __webpack_require__(55)

module.exports = webAudioPlayer
function webAudioPlayer (src, opt) {
  if (!src) throw new TypeError('must specify a src parameter')
  opt = opt || {}
  if (opt.buffer) return buffer(src, opt)
  else return media(src, opt)
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var canPlaySrc = __webpack_require__(13)
var createAudioContext = __webpack_require__(12)
var xhrAudio = __webpack_require__(56)
var EventEmitter = __webpack_require__(6).EventEmitter
var rightNow = __webpack_require__(48)
var resume = __webpack_require__(14)

module.exports = createBufferSource
function createBufferSource (src, opt) {
  opt = opt || {}
  var emitter = new EventEmitter()
  var audioContext = opt.context || createAudioContext()

  // a pass-through node so user just needs to
  // connect() once
  var bufferNode, buffer, duration
  var node = audioContext.createGain()
  var audioStartTime = null
  var audioPauseTime = null
  var audioCurrentTime = 0
  var playing = false
  var loop = opt.loop

  emitter.play = function () {
    if (playing) return
    playing = true

    if (opt.autoResume !== false) resume(emitter.context)
    disposeBuffer()
    bufferNode = audioContext.createBufferSource()
    bufferNode.connect(emitter.node)
    bufferNode.onended = ended
    if (buffer) {
      // Might be null undefined if we are still loading
      bufferNode.buffer = buffer
    }
    if (loop) {
      bufferNode.loop = true
      if (typeof opt.loopStart === 'number') bufferNode.loopStart = opt.loopStart
      if (typeof opt.loopEnd === 'number') bufferNode.loopEnd = opt.loopEnd
    }

    if (duration && audioCurrentTime > duration) {
      // for when it loops...
      audioCurrentTime = audioCurrentTime % duration
    }
    var nextTime = audioCurrentTime

    bufferNode.start(0, nextTime)
    audioStartTime = rightNow()
  }

  emitter.pause = function () {
    if (!playing) return
    playing = false
    // Don't let the "end" event
    // get triggered on manual pause.
    bufferNode.onended = null
    bufferNode.stop(0)
    audioPauseTime = rightNow()
    audioCurrentTime += (audioPauseTime - audioStartTime) / 1000
  }

  emitter.stop = function () {
    emitter.pause()
    ended()
  }

  emitter.dispose = function () {
    disposeBuffer()
    buffer = null
  }

  emitter.node = node
  emitter.context = audioContext

  Object.defineProperties(emitter, {
    duration: {
      enumerable: true, configurable: true,
      get: function () {
        return duration
      }
    },
    playing: {
      enumerable: true, configurable: true,
      get: function () {
        return playing
      }
    },
    buffer: {
      enumerable: true, configurable: true,
      get: function () {
        return buffer
      }
    },
    volume: {
      enumerable: true, configurable: true,
      get: function () {
        return node.gain.value
      },
      set: function (n) {
        node.gain.value = n
      }
    }
  })

  // set initial volume
  if (typeof opt.volume === 'number') {
    emitter.volume = opt.volume
  }

  // filter down to a list of playable sources
  var sources = Array.isArray(src) ? src : [ src ]
  sources = sources.filter(Boolean)
  var playable = sources.some(canPlaySrc)
  if (playable) {
    var source = sources.filter(canPlaySrc)[0]
    // Support the same source types as in
    // MediaElement mode...
    if (typeof source.getAttribute === 'function') {
      source = source.getAttribute('src')
    } else if (typeof source.src === 'string') {
      source = source.src
    }
    // We have at least one playable source.
    // For now just play the first,
    // ideally this module could attempt each one.
    startLoad(source)
  } else {
    // no sources can be played...
    process.nextTick(function () {
      emitter.emit('error', canPlaySrc.createError(sources))
    })
  }
  return emitter

  function startLoad (src) {
    xhrAudio(audioContext, src, function audioDecoded (err, decoded) {
      if (err) return emitter.emit('error', err)
      buffer = decoded // store for later use
      if (bufferNode) {
        // if play() was called early
        bufferNode.buffer = buffer
      }
      duration = buffer.duration
      node.buffer = buffer
      emitter.emit('load')
    }, function audioProgress (amount, total) {
      emitter.emit('progress', amount, total)
    }, function audioDecoding () {
      emitter.emit('decoding')
    })
  }

  function ended () {
    emitter.emit('end')
    playing = false
    audioCurrentTime = 0
  }

  function disposeBuffer () {
    if (bufferNode) bufferNode.disconnect()
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = addOnce
function addOnce (element, event, fn) {
  function tmp (ev) {
    element.removeEventListener(event, tmp, false)
    fn(ev, element)
  }
  element.addEventListener(event, tmp, false)
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var EventEmitter = __webpack_require__(6).EventEmitter
var createAudio = __webpack_require__(49).audio
var assign = __webpack_require__(45)

var resume = __webpack_require__(14)
var createAudioContext = __webpack_require__(12)
var canPlaySrc = __webpack_require__(13)
var addOnce = __webpack_require__(54)

module.exports = createMediaSource
function createMediaSource (src, opt) {
  opt = assign({}, opt)
  var emitter = new EventEmitter()

  // Default to Audio instead of HTMLAudioElement
  // There is not much difference except in the following:
  //    x instanceof Audio
  //    x instanceof HTMLAudioElement
  // And in my experience Audio has better support on various
  // platforms like CocoonJS.
  // Please open an issue if there is a concern with this.
  if (!opt.element) opt.element = new window.Audio()

  var desiredVolume = opt.volume
  delete opt.volume // make sure <audio> tag receives full volume
  var audio = createAudio(src, opt)
  var audioContext = opt.context || createAudioContext()
  var node = audioContext.createGain()
  var mediaNode = audioContext.createMediaElementSource(audio)
  mediaNode.connect(node)

  audio.addEventListener('ended', function () {
    emitter.emit('end')
  })
  audio.addEventListener('play', function () {
    console.log("PLAY")
  })

  var loopStart = opt.loopStart
  var loopEnd = opt.loopEnd
  var hasLoopStart = typeof loopStart === 'number' && isFinite(loopStart)
  var hasLoopEnd = typeof loopEnd === 'number' && isFinite(loopEnd)
  var isLoopReady = false
  if (hasLoopStart || hasLoopEnd) {
    window.requestAnimationFrame(function update () {
      // audio hasn't been loaded yet...
      if (typeof audio.duration !== 'number') return
      var currentTime = audio.currentTime

      // where to end the buffer
      var endTime = hasLoopEnd ? Math.min(audio.duration, loopEnd) : audio.duration

      if (currentTime > (loopStart || 0)) {
        isLoopReady = true
      }

      // jump ahead to loop start point
      if (hasLoopStart && isLoopReady && currentTime < loopStart) {
        audio.currentTime = loopStart
      }

      // if we've hit the end of the buffer
      if (currentTime >= endTime) {
        // if there is no loop end point, let native looping take over
        // if we have a loop end point, jump back to start point or zero
        if (hasLoopEnd) {
          audio.currentTime = hasLoopStart ? loopStart : 0
        }
      }
      window.requestAnimationFrame(update)
    });
  }

  emitter.element = audio
  emitter.context = audioContext
  emitter.node = node
  emitter.pause = audio.pause.bind(audio)
  emitter.play = function () {
    if (opt.autoResume !== false) resume(emitter.context)
    return audio.play()
  }

  // This exists currently for parity with Buffer source
  // Open to suggestions for what this should dispose...
  emitter.dispose = function () {}

  emitter.stop = function () {
    var wasPlaying = emitter.playing
    audio.pause()
    audio.currentTime = 0
    isLoopReady = false
    if (wasPlaying) {
      emitter.emit('end')
    }
  }

  Object.defineProperties(emitter, {
    duration: {
      enumerable: true, configurable: true,
      get: function () {
        return audio.duration
      }
    },
    currentTime: {
      enumerable: true, configurable: true,
      get: function () {
        return audio.currentTime
      }
    },
    playing: {
      enumerable: true, configurable: true,
      get: function () {
        return !audio.paused
      }
    },
    volume: {
      enumerable: true, configurable: true,
      get: function () {
        return node.gain.value
      },
      set: function (n) {
        node.gain.value = n
      }
    }
  })

  // Set initial volume
  if (typeof desiredVolume === 'number') {
    emitter.volume = desiredVolume
  }

  // Check if all sources are unplayable,
  // if so we emit an error since the browser
  // might not.
  var sources = Array.isArray(src) ? src : [ src ]
  sources = sources.filter(Boolean)
  var playable = sources.some(canPlaySrc)
  if (playable) {
    // At least one source is probably/maybe playable
    startLoad()
  } else {
    // emit error on next tick so user can catch it
    process.nextTick(function () {
      emitter.emit('error', canPlaySrc.createError(sources))
    })
  }

  return emitter

  function startLoad () {
    // The file errors (like decoding / 404s) appear on <source>
    var srcElements = Array.prototype.slice.call(audio.children)
    var remainingSrcErrors = srcElements.length
    var hasErrored = false
    var sourceError = function (err, el) {
      if (hasErrored) return
      remainingSrcErrors--
      console.warn('Error loading source: ' + el.getAttribute('src'))
      if (remainingSrcErrors <= 0) {
        hasErrored = true
        srcElements.forEach(function (el) {
          el.removeEventListener('error', sourceError, false)
        })
        emitter.emit('error', new Error('Could not play any of the supplied sources'))
      }
    }

    var done = function () {
      emitter.emit('load')
    }

    if (audio.readyState >= audio.HAVE_ENOUGH_DATA) {
      process.nextTick(done)
    } else {
      addOnce(audio, 'canplay', done)
      addOnce(audio, 'error', function (ev) {
        emitter.emit(new Error('Unknown error while loading <audio>'))
      })
      srcElements.forEach(function (el) {
        addOnce(el, 'error', sourceError)
      })
    }

    // On most browsers the loading begins
    // immediately. However, on iOS 9.2 Safari,
    // you need to call load() for events
    // to be triggered.
    audio.load()
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(76)
var xhrProgress = __webpack_require__(75)

module.exports = xhrAudio
function xhrAudio (audioContext, src, cb, progress, decoding) {
  var xhrObject = xhr({
    uri: src,
    responseType: 'arraybuffer'
  }, function (err, resp, arrayBuf) {
    if (!/^2/.test(resp.statusCode)) {
      err = new Error('status code ' + resp.statusCode + ' requesting ' + src)
    }
    if (err) return cb(err)
    decode(arrayBuf)
  })

  xhrProgress(xhrObject)
    .on('data', function (amount, total) {
      progress(amount, total)
    })

  function decode (arrayBuf) {
    decoding()
    audioContext.decodeAudioData(arrayBuf, function (decoded) {
      cb(null, decoded)
    }, function () {
      var err = new Error('Error decoding audio data')
      err.type = 'DECODE_AUDIO_DATA'
      cb(err)
    })
  }
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*

WebMidi v2.0.4

WebMidi.js helps you tame the Web MIDI API. Send and receive MIDI messages with ease. Control instruments with user-friendly functions (playNote, sendPitchBend, etc.). React to MIDI input with simple event listeners (noteon, pitchbend, controlchange, etc.).
https://github.com/cotejp/webmidi


The MIT License (MIT)

Copyright (c) 2015-2018, Jean-Philippe Côté

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

!function(scope){"use strict";function WebMidi(){if(WebMidi.prototype._singleton)throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");WebMidi.prototype._singleton=this,this._inputs=[],this._outputs=[],this._userHandlers={},this._stateChangeQueue=[],this._processingStateChange=!1,this._midiInterfaceEvents=["connected","disconnected"],this._notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],this._semitones={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Object.defineProperties(this,{MIDI_SYSTEM_MESSAGES:{value:{sysex:240,timecode:241,songposition:242,songselect:243,tuningrequest:246,sysexend:247,clock:248,start:250,"continue":251,stop:252,activesensing:254,reset:255,unknownsystemmessage:-1},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MESSAGES:{value:{noteoff:8,noteon:9,keyaftertouch:10,controlchange:11,channelmode:11,programchange:12,channelaftertouch:13,pitchbend:14},writable:!1,enumerable:!0,configurable:!1},MIDI_REGISTERED_PARAMETER:{value:{pitchbendrange:[0,0],channelfinetuning:[0,1],channelcoarsetuning:[0,2],tuningprogram:[0,3],tuningbank:[0,4],modulationrange:[0,5],azimuthangle:[61,0],elevationangle:[61,1],gain:[61,2],distanceratio:[61,3],maximumdistance:[61,4],maximumdistancegain:[61,5],referencedistanceratio:[61,6],panspreadangle:[61,7],rollangle:[61,8]},writable:!1,enumerable:!0,configurable:!1},MIDI_CONTROL_CHANGE_MESSAGES:{value:{bankselectcoarse:0,modulationwheelcoarse:1,breathcontrollercoarse:2,footcontrollercoarse:4,portamentotimecoarse:5,dataentrycoarse:6,volumecoarse:7,balancecoarse:8,pancoarse:10,expressioncoarse:11,effectcontrol1coarse:12,effectcontrol2coarse:13,generalpurposeslider1:16,generalpurposeslider2:17,generalpurposeslider3:18,generalpurposeslider4:19,bankselectfine:32,modulationwheelfine:33,breathcontrollerfine:34,footcontrollerfine:36,portamentotimefine:37,dataentryfine:38,volumefine:39,balancefine:40,panfine:42,expressionfine:43,effectcontrol1fine:44,effectcontrol2fine:45,holdpedal:64,portamento:65,sustenutopedal:66,softpedal:67,legatopedal:68,hold2pedal:69,soundvariation:70,resonance:71,soundreleasetime:72,soundattacktime:73,brightness:74,soundcontrol6:75,soundcontrol7:76,soundcontrol8:77,soundcontrol9:78,soundcontrol10:79,generalpurposebutton1:80,generalpurposebutton2:81,generalpurposebutton3:82,generalpurposebutton4:83,reverblevel:91,tremololevel:92,choruslevel:93,celestelevel:94,phaserlevel:95,databuttonincrement:96,databuttondecrement:97,nonregisteredparametercoarse:98,nonregisteredparameterfine:99,registeredparametercoarse:100,registeredparameterfine:101},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MODE_MESSAGES:{value:{allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127},writable:!1,enumerable:!0,configurable:!1}}),Object.defineProperties(this,{supported:{enumerable:!0,get:function(){return"requestMIDIAccess"in navigator}},enabled:{enumerable:!0,get:function(){return void 0!==this["interface"]}.bind(this)},inputs:{enumerable:!0,get:function(){return this._inputs}.bind(this)},outputs:{enumerable:!0,get:function(){return this._outputs}.bind(this)},sysexEnabled:{enumerable:!0,get:function(){return!(!this["interface"]||!this["interface"].sysexEnabled)}.bind(this)},time:{enumerable:!0,get:function(){return performance.now()}}})}function Input(midiInput){var that=this;this._userHandlers={channel:{},system:{}},this._midiInput=midiInput,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return that._midiInput.connection}},id:{enumerable:!0,get:function(){return that._midiInput.id}},manufacturer:{enumerable:!0,get:function(){return that._midiInput.manufacturer}},name:{enumerable:!0,get:function(){return that._midiInput.name}},state:{enumerable:!0,get:function(){return that._midiInput.state}},type:{enumerable:!0,get:function(){return that._midiInput.type}}}),this._initializeUserHandlers()}function Output(midiOutput){var that=this;this._midiOutput=midiOutput,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return that._midiOutput.connection}},id:{enumerable:!0,get:function(){return that._midiOutput.id}},manufacturer:{enumerable:!0,get:function(){return that._midiOutput.manufacturer}},name:{enumerable:!0,get:function(){return that._midiOutput.name}},state:{enumerable:!0,get:function(){return that._midiOutput.state}},type:{enumerable:!0,get:function(){return that._midiOutput.type}}})}var wm=new WebMidi;WebMidi.prototype.enable=function(callback,sysex){return this.enabled?void 0:this.supported?void navigator.requestMIDIAccess({sysex:sysex}).then(function(midiAccess){function onPortsOpen(){this._updateInputsAndOutputs(),this["interface"].onstatechange=this._onInterfaceStateChange.bind(this),"function"==typeof callback&&callback.call(this),events.forEach(function(event){this._onInterfaceStateChange(event)}.bind(this))}var events=[],promises=[];this["interface"]=midiAccess,this._resetInterfaceUserHandlers(),this["interface"].onstatechange=function(e){events.push(e)};for(var inputs=midiAccess.inputs.values(),input=inputs.next();input&&!input.done;input=inputs.next())promises.push(input.value.open());for(var outputs=midiAccess.outputs.values(),output=outputs.next();output&&!output.done;output=outputs.next())promises.push(output.value.open());Promise?Promise.all(promises)["catch"](function(err){}).then(onPortsOpen.bind(this)):setTimeout(onPortsOpen.bind(this),200)}.bind(this),function(err){"function"==typeof callback&&callback.call(this,err)}.bind(this)):void("function"==typeof callback&&callback(new Error("The Web MIDI API is not supported by your browser.")))},WebMidi.prototype.disable=function(){if(!this.supported)throw new Error("The Web MIDI API is not supported by your browser.");this["interface"]&&(this["interface"].onstatechange=void 0),this["interface"]=void 0,this._inputs=[],this._outputs=[],this._resetInterfaceUserHandlers()},WebMidi.prototype.addListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before adding event listeners.");if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(!(this._midiInterfaceEvents.indexOf(type)>=0))throw new TypeError("The specified event type is not supported.");return this._userHandlers[type].push(listener),this},WebMidi.prototype.hasListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before checking event listeners.");if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(!(this._midiInterfaceEvents.indexOf(type)>=0))throw new TypeError("The specified event type is not supported.");for(var o=0;o<this._userHandlers[type].length;o++)if(this._userHandlers[type][o]===listener)return!0;return!1},WebMidi.prototype.removeListener=function(type,listener){if(!this.enabled)throw new Error("WebMidi must be enabled before removing event listeners.");if(void 0!==listener&&"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(this._midiInterfaceEvents.indexOf(type)>=0)if(listener)for(var o=0;o<this._userHandlers[type].length;o++)this._userHandlers[type][o]===listener&&this._userHandlers[type].splice(o,1);else this._userHandlers[type]=[];else{if(void 0!==type)throw new TypeError("The specified event type is not supported.");this._resetInterfaceUserHandlers()}return this},WebMidi.prototype.toMIDIChannels=function(channel){var channels;return channels="all"===channel||void 0===channel?["all"]:Array.isArray(channel)?channel:[channel],channels.indexOf("all")>-1&&(channels=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),channels.map(function(ch){return parseInt(ch)}).filter(function(ch){return ch>=1&&16>=ch})},WebMidi.prototype.getInputById=function(id){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.inputs.length;i++)if(this.inputs[i].id===id)return this.inputs[i];return!1},WebMidi.prototype.getOutputById=function(id){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.outputs.length;i++)if(this.outputs[i].id===id)return this.outputs[i];return!1},WebMidi.prototype.getInputByName=function(name){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.inputs.length;i++)if(~this.inputs[i].name.indexOf(name))return this.inputs[i];return!1},WebMidi.prototype.getOctave=function(number){return number&&number>=0&&127>=number?Math.floor(parseInt(number)/12-1)-1:void 0},WebMidi.prototype.getOutputByName=function(name){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var i=0;i<this.outputs.length;i++)if(~this.outputs[i].name.indexOf(name))return this.outputs[i];return!1},WebMidi.prototype.guessNoteNumber=function(input){var output=!1;if(input&&input.toFixed&&input>=0&&127>=input?output=Math.round(input):parseInt(input)>=0&&parseInt(input)<=127?output=parseInt(input):("string"==typeof input||input instanceof String)&&(output=this.noteNameToNumber(input)),output===!1)throw new Error("Invalid note number ("+input+").");return output},WebMidi.prototype.noteNameToNumber=function(name){"string"!=typeof name&&(name="");var matches=name.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);if(!matches)throw new RangeError("Invalid note name.");var semitones=wm._semitones[matches[1].toUpperCase()],octave=parseInt(matches[3]),result=12*(octave+2)+semitones;if(matches[2].toLowerCase().indexOf("b")>-1?result-=matches[2].length:matches[2].toLowerCase().indexOf("#")>-1&&(result+=matches[2].length),0>semitones||-2>octave||octave>8||0>result||result>127)throw new RangeError("Invalid note name or note outside valid range.");return result},WebMidi.prototype._updateInputsAndOutputs=function(){this._updateInputs(),this._updateOutputs()},WebMidi.prototype._updateInputs=function(){for(var i=0;i<this._inputs.length;i++){for(var remove=!0,updated=this["interface"].inputs.values(),input=updated.next();input&&!input.done;input=updated.next())if(this._inputs[i]._midiInput===input.value){remove=!1;break}remove&&this._inputs.splice(i,1)}this["interface"]&&this["interface"].inputs.forEach(function(nInput){for(var add=!0,j=0;j<this._inputs.length;j++)this._inputs[j]._midiInput===nInput&&(add=!1);add&&this._inputs.push(this._createInput(nInput))}.bind(this))},WebMidi.prototype._updateOutputs=function(){for(var i=0;i<this._outputs.length;i++){for(var remove=!0,updated=this["interface"].outputs.values(),output=updated.next();output&&!output.done;output=updated.next())if(this._outputs[i]._midiOutput===output.value){remove=!1;break}remove&&this._outputs.splice(i,1)}this["interface"]&&this["interface"].outputs.forEach(function(nOutput){for(var add=!0,j=0;j<this._outputs.length;j++)this._outputs[j]._midiOutput===nOutput&&(add=!1);add&&this._outputs.push(this._createOutput(nOutput))}.bind(this))},WebMidi.prototype._createInput=function(midiInput){var input=new Input(midiInput);return input._midiInput.onmidimessage=input._onMidiMessage.bind(input),input},WebMidi.prototype._createOutput=function(midiOutput){var output=new Output(midiOutput);return output._midiOutput.onmidimessage=output._onMidiMessage.bind(output),output},WebMidi.prototype._onInterfaceStateChange=function(e){this._updateInputsAndOutputs();var event={timestamp:e.timeStamp,type:e.port.state};this["interface"]&&"connected"===e.port.state?"output"===e.port.type?event.port=this.getOutputById(e.port.id):"input"===e.port.type&&(event.port=this.getInputById(e.port.id)):event.port={connection:"closed",id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this._userHandlers[e.port.state].forEach(function(handler){handler(event)})},WebMidi.prototype._resetInterfaceUserHandlers=function(){for(var i=0;i<this._midiInterfaceEvents.length;i++)this._userHandlers[this._midiInterfaceEvents[i]]=[]},Input.prototype.addListener=function(type,channel,listener){var that=this;if(void 0===channel&&(channel="all"),Array.isArray(channel)||(channel=[channel]),channel.forEach(function(item){if("all"!==item&&!(item>=1&&16>=item))throw new RangeError("The 'channel' parameter is invalid.")}),"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(wm.MIDI_SYSTEM_MESSAGES[type])this._userHandlers.system[type]||(this._userHandlers.system[type]=[]),this._userHandlers.system[type].push(listener);else{if(!wm.MIDI_CHANNEL_MESSAGES[type])throw new TypeError("The specified event type is not supported.");if(channel.indexOf("all")>-1){channel=[];for(var j=1;16>=j;j++)channel.push(j)}this._userHandlers.channel[type]||(this._userHandlers.channel[type]=[]),channel.forEach(function(ch){that._userHandlers.channel[type][ch]||(that._userHandlers.channel[type][ch]=[]),that._userHandlers.channel[type][ch].push(listener)})}return this},Input.prototype.on=Input.prototype.addListener,Input.prototype.hasListener=function(type,channel,listener){var that=this;if("function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===channel&&(channel="all"),channel.constructor!==Array&&(channel=[channel]),wm.MIDI_SYSTEM_MESSAGES[type]){for(var o=0;o<this._userHandlers.system[type].length;o++)if(this._userHandlers.system[type][o]===listener)return!0}else if(wm.MIDI_CHANNEL_MESSAGES[type]){if(channel.indexOf("all")>-1){channel=[];for(var j=1;16>=j;j++)channel.push(j)}return this._userHandlers.channel[type]?channel.every(function(chNum){var listeners=that._userHandlers.channel[type][chNum];return listeners&&listeners.indexOf(listener)>-1}):!1}return!1},Input.prototype.removeListener=function(type,channel,listener){var that=this;if(void 0!==listener&&"function"!=typeof listener)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===channel&&(channel="all"),channel.constructor!==Array&&(channel=[channel]),wm.MIDI_SYSTEM_MESSAGES[type])if(void 0===listener)this._userHandlers.system[type]=[];else for(var o=0;o<this._userHandlers.system[type].length;o++)this._userHandlers.system[type][o]===listener&&this._userHandlers.system[type].splice(o,1);else if(wm.MIDI_CHANNEL_MESSAGES[type]){if(channel.indexOf("all")>-1){channel=[];for(var j=1;16>=j;j++)channel.push(j)}if(!this._userHandlers.channel[type])return this;channel.forEach(function(chNum){var listeners=that._userHandlers.channel[type][chNum];if(listeners)if(void 0===listener)that._userHandlers.channel[type][chNum]=[];else for(var l=0;l<listeners.length;l++)listeners[l]===listener&&listeners.splice(l,1)})}else{if(void 0!==type)throw new TypeError("The specified event type is not supported.");this._initializeUserHandlers()}return this},Input.prototype._initializeUserHandlers=function(){for(var prop1 in wm.MIDI_CHANNEL_MESSAGES)wm.MIDI_CHANNEL_MESSAGES.hasOwnProperty(prop1)&&(this._userHandlers.channel[prop1]={});for(var prop2 in wm.MIDI_SYSTEM_MESSAGES)wm.MIDI_SYSTEM_MESSAGES.hasOwnProperty(prop2)&&(this._userHandlers.system[prop2]=[])},Input.prototype._onMidiMessage=function(e){e.data[0]<240?this._parseChannelEvent(e):e.data[0]<=255&&this._parseSystemEvent(e)},Input.prototype._parseChannelEvent=function(e){var data1,data2,command=e.data[0]>>4,channel=(15&e.data[0])+1;e.data.length>1&&(data1=e.data[1],data2=e.data.length>2?e.data[2]:void 0);var event={target:this,data:e.data,timestamp:e.timeStamp,channel:channel};command===wm.MIDI_CHANNEL_MESSAGES.noteoff||command===wm.MIDI_CHANNEL_MESSAGES.noteon&&0===data2?(event.type="noteoff",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.velocity=data2/127,event.rawVelocity=data2):command===wm.MIDI_CHANNEL_MESSAGES.noteon?(event.type="noteon",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.velocity=data2/127,event.rawVelocity=data2):command===wm.MIDI_CHANNEL_MESSAGES.keyaftertouch?(event.type="keyaftertouch",event.note={number:data1,name:wm._notes[data1%12],octave:wm.getOctave(data1)},event.value=data2/127):command===wm.MIDI_CHANNEL_MESSAGES.controlchange&&data1>=0&&119>=data1?(event.type="controlchange",event.controller={number:data1,name:this.getCcNameByNumber(data1)},event.value=data2):command===wm.MIDI_CHANNEL_MESSAGES.channelmode&&data1>=120&&127>=data1?(event.type="channelmode",event.controller={number:data1,name:this.getChannelModeByNumber(data1)},event.value=data2):command===wm.MIDI_CHANNEL_MESSAGES.programchange?(event.type="programchange",event.value=data1):command===wm.MIDI_CHANNEL_MESSAGES.channelaftertouch?(event.type="channelaftertouch",event.value=data1/127):command===wm.MIDI_CHANNEL_MESSAGES.pitchbend?(event.type="pitchbend",event.value=((data2<<7)+data1-8192)/8192):event.type="unknownchannelmessage",this._userHandlers.channel[event.type]&&this._userHandlers.channel[event.type][channel]&&this._userHandlers.channel[event.type][channel].forEach(function(callback){callback(event)})},Input.prototype.getCcNameByNumber=function(number){if(number=parseInt(number),!(number>=0&&119>=number))throw new RangeError("The control change number must be between 0 and 119.");for(var cc in wm.MIDI_CONTROL_CHANGE_MESSAGES)if(number===wm.MIDI_CONTROL_CHANGE_MESSAGES[cc])return cc;return void 0},Input.prototype.getChannelModeByNumber=function(number){if(number=parseInt(number),!(number>=120&&status<=127))throw new RangeError("The control change number must be between 120 and 127.");for(var cm in wm.MIDI_CHANNEL_MODE_MESSAGES)if(number===wm.MIDI_CHANNEL_MODE_MESSAGES[cm])return cm},Input.prototype._parseSystemEvent=function(e){var command=e.data[0],event={target:this,data:e.data,timestamp:e.timeStamp};command===wm.MIDI_SYSTEM_MESSAGES.sysex?event.type="sysex":command===wm.MIDI_SYSTEM_MESSAGES.timecode?event.type="timecode":command===wm.MIDI_SYSTEM_MESSAGES.songposition?event.type="songposition":command===wm.MIDI_SYSTEM_MESSAGES.songselect?(event.type="songselect",event.song=e.data[1]):command===wm.MIDI_SYSTEM_MESSAGES.tuningrequest?event.type="tuningrequest":command===wm.MIDI_SYSTEM_MESSAGES.clock?event.type="clock":command===wm.MIDI_SYSTEM_MESSAGES.start?event.type="start":command===wm.MIDI_SYSTEM_MESSAGES["continue"]?event.type="continue":command===wm.MIDI_SYSTEM_MESSAGES.stop?event.type="stop":command===wm.MIDI_SYSTEM_MESSAGES.activesensing?event.type="activesensing":command===wm.MIDI_SYSTEM_MESSAGES.reset?event.type="reset":event.type="unknownsystemmessage",this._userHandlers.system[event.type]&&this._userHandlers.system[event.type].forEach(function(callback){callback(event)})},Output.prototype.send=function(status,data,timestamp){if(!(status>=128&&255>=status))throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");void 0===data&&(data=[]),Array.isArray(data)||(data=[data]);var message=[];return data.forEach(function(item,index){var parsed=parseInt(item);if(!(parsed>=0&&255>=parsed))throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF).");message.push(parsed)}),this._midiOutput.send([status].concat(message),parseFloat(timestamp)||0),this},Output.prototype.sendSysex=function(manufacturer,data,options){if(!wm.sysexEnabled)throw new Error("Sysex message support must first be activated.");return options=options||{},manufacturer=[].concat(manufacturer),data.forEach(function(item){if(0>item||item>127)throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F).")}),data=manufacturer.concat(data,wm.MIDI_SYSTEM_MESSAGES.sysexend),this.send(wm.MIDI_SYSTEM_MESSAGES.sysex,data,this._parseTimeParameter(options.time)),this},Output.prototype.sendTimecodeQuarterFrame=function(value,options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.timecode,value,this._parseTimeParameter(options.time)),this},Output.prototype.sendSongPosition=function(value,options){value=parseInt(value)||0,options=options||{};var msb=value>>7&127,lsb=127&value;return this.send(wm.MIDI_SYSTEM_MESSAGES.songposition,[msb,lsb],this._parseTimeParameter(options.time)),this},Output.prototype.sendSongSelect=function(value,options){if(value=parseInt(value),options=options||{},!(value>=0&&127>=value))throw new RangeError("The song number must be between 0 and 127.");return this.send(wm.MIDI_SYSTEM_MESSAGES.songselect,[value],this._parseTimeParameter(options.time)),this},Output.prototype.sendTuningRequest=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.tuningrequest,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendClock=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.clock,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendStart=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.start,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendContinue=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES["continue"],void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendStop=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.stop,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.sendActiveSensing=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.activesensing,[],this._parseTimeParameter(options.time)),this},Output.prototype.sendReset=function(options){return options=options||{},this.send(wm.MIDI_SYSTEM_MESSAGES.reset,void 0,this._parseTimeParameter(options.time)),this},Output.prototype.stopNote=function(note,channel,options){if("all"===note)return this.sendChannelMode("allnotesoff",0,channel,options);var nVelocity=64;return options=options||{},options.velocity=parseFloat(options.velocity),options.rawVelocity?!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=127&&(nVelocity=options.velocity):!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=1&&(nVelocity=127*options.velocity),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(ch-1),[item,Math.round(nVelocity)],this._parseTimeParameter(options.time))}.bind(this))}.bind(this)),this},Output.prototype.playNote=function(note,channel,options){var nVelocity=64;if(options=options||{},options.velocity=parseFloat(options.velocity),options.rawVelocity?!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=127&&(nVelocity=options.velocity):!isNaN(options.velocity)&&options.velocity>=0&&options.velocity<=1&&(nVelocity=127*options.velocity),options.time=this._parseTimeParameter(options.time),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteon<<4)+(ch-1),[item,Math.round(nVelocity)],options.time)}.bind(this))}.bind(this)),options.duration=parseFloat(options.duration),options.duration){options.duration<=0&&(options.duration=0);var nRelease=64;options.release=parseFloat(options.release),options.rawVelocity?!isNaN(options.release)&&options.release>=0&&options.release<=127&&(nRelease=options.release):!isNaN(options.release)&&options.release>=0&&options.release<=1&&(nRelease=127*options.release),this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff<<4)+(ch-1),[item,Math.round(nRelease)],(options.time||wm.time)+options.duration)}.bind(this))}.bind(this))}return this},Output.prototype.sendKeyAftertouch=function(note,channel,pressure,options){var that=this;if(options=options||{},1>channel||channel>16)throw new RangeError("The channel must be between 1 and 16.");pressure=parseFloat(pressure),(isNaN(pressure)||0>pressure||pressure>1)&&(pressure=.5);var nPressure=Math.round(127*pressure);return this._convertNoteToArray(note).forEach(function(item){wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.keyaftertouch<<4)+(ch-1),[item,nPressure],that._parseTimeParameter(options.time))})}),this},Output.prototype.sendControlChange=function(controller,value,channel,options){if(options=options||{},"string"==typeof controller){if(controller=wm.MIDI_CONTROL_CHANGE_MESSAGES[controller],!controller)throw new TypeError("Invalid controller name.")}else if(controller=parseInt(controller),!(controller>=0&&119>=controller))throw new RangeError("Controller numbers must be between 0 and 119.");if(value=parseInt(value)||0,!(value>=0&&127>=value))throw new RangeError("Controller value must be between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.controlchange<<4)+(ch-1),[controller,value],this._parseTimeParameter(options.time))}.bind(this)),this},Output.prototype._selectRegisteredParameter=function(parameter,channel,time){var that=this;if(parameter[0]=parseInt(parameter[0]),!(parameter[0]>=0&&parameter[0]<=127))throw new RangeError("The control65 value must be between 0 and 127");if(parameter[1]=parseInt(parameter[1]),!(parameter[1]>=0&&parameter[1]<=127))throw new RangeError("The control64 value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(101,parameter[0],channel,{time:time}),that.sendControlChange(100,parameter[1],channel,{time:time})}),this},Output.prototype._selectNonRegisteredParameter=function(parameter,channel,time){var that=this;if(parameter[0]=parseInt(parameter[0]),!(parameter[0]>=0&&parameter[0]<=127))throw new RangeError("The control63 value must be between 0 and 127");if(parameter[1]=parseInt(parameter[1]),!(parameter[1]>=0&&parameter[1]<=127))throw new RangeError("The control62 value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(99,parameter[0],channel,{time:time}),that.sendControlChange(98,parameter[1],channel,{time:time})}),this},Output.prototype._setCurrentRegisteredParameter=function(data,channel,time){var that=this;if(data=[].concat(data),data[0]=parseInt(data[0]),!(data[0]>=0&&data[0]<=127))throw new RangeError("The msb value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(6,data[0],channel,{time:time})}),data[1]=parseInt(data[1]),data[1]>=0&&data[1]<=127&&wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(38,data[1],channel,{time:time})}),this},Output.prototype._deselectRegisteredParameter=function(channel,time){var that=this;return wm.toMIDIChannels(channel).forEach(function(ch){that.sendControlChange(101,127,channel,{time:time}),that.sendControlChange(100,127,channel,{time:time})}),this},Output.prototype.setRegisteredParameter=function(parameter,data,channel,options){var that=this;if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new Error("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter]}return wm.toMIDIChannels(channel).forEach(function(ch){that._selectRegisteredParameter(parameter,channel,options.time),that._setCurrentRegisteredParameter(data,channel,options.time),that._deselectRegisteredParameter(channel,options.time)}),this},Output.prototype.setNonRegisteredParameter=function(parameter,data,channel,options){var that=this;if(options=options||{},!(parameter[0]>=0&&parameter[0]<=127&&parameter[1]>=0&&parameter[1]<=127))throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");return data=[].concat(data),wm.toMIDIChannels(channel).forEach(function(ch){that._selectNonRegisteredParameter(parameter,channel,options.time),that._setCurrentRegisteredParameter(data,channel,options.time),that._deselectRegisteredParameter(channel,options.time)}),this},Output.prototype.incrementRegisteredParameter=function(parameter,channel,options){var that=this;if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new Error("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter]}return wm.toMIDIChannels(channel).forEach(function(ch){that._selectRegisteredParameter(parameter,channel,options.time),that.sendControlChange(96,0,channel,{time:options.time}),that._deselectRegisteredParameter(channel,options.time)}),this},Output.prototype.decrementRegisteredParameter=function(parameter,channel,options){if(options=options||{},!Array.isArray(parameter)){if(!wm.MIDI_REGISTERED_PARAMETER[parameter])throw new TypeError("The specified parameter is not available.");parameter=wm.MIDI_REGISTERED_PARAMETER[parameter]}return wm.toMIDIChannels(channel).forEach(function(ch){this._selectRegisteredParameter(parameter,channel,options.time),this.sendControlChange(97,0,channel,{time:options.time}),this._deselectRegisteredParameter(channel,options.time)}.bind(this)),this},Output.prototype.setPitchBendRange=function(semitones,cents,channel,options){var that=this;if(options=options||{},semitones=parseInt(semitones)||0,!(semitones>=0&&127>=semitones))throw new RangeError("The semitones value must be between 0 and 127");if(cents=parseInt(cents)||0,!(cents>=0&&127>=cents))throw new RangeError("The cents value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("pitchbendrange",[semitones,cents],channel,{time:options.time})}),this},Output.prototype.setModulationRange=function(semitones,cents,channel,options){var that=this;if(options=options||{},semitones=parseInt(semitones)||0,!(semitones>=0&&127>=semitones))throw new RangeError("The semitones value must be between 0 and 127");if(cents=parseInt(cents)||0,!(cents>=0&&127>=cents))throw new RangeError("The cents value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("modulationrange",[semitones,cents],channel,{time:options.time})}),this},Output.prototype.setMasterTuning=function(value,channel,options){var that=this;if(options=options||{},value=parseFloat(value)||0,-65>=value||value>=64)throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");var coarse=parseInt(value)+64,fine=value-parseInt(value);fine=Math.round((fine+1)/2*16383);var msb=fine>>7&127,lsb=127&fine;return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("channelcoarsetuning",coarse,channel,{time:options.time}),that.setRegisteredParameter("channelfinetuning",[msb,lsb],channel,{time:options.time})}),this},Output.prototype.setTuningProgram=function(value,channel,options){var that=this;if(options=options||{},value=parseInt(value),!(value>=0&&127>=value))throw new RangeError("The program value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("tuningprogram",value,channel,{time:options.time})}),this},Output.prototype.setTuningBank=function(value,channel,options){var that=this;if(options=options||{},value=parseInt(value)||0,!(value>=0&&127>=value))throw new RangeError("The bank value must be between 0 and 127");return wm.toMIDIChannels(channel).forEach(function(ch){that.setRegisteredParameter("tuningbank",value,channel,{time:options.time})}),this},Output.prototype.sendChannelMode=function(command,value,channel,options){if(options=options||{},"string"==typeof command){if(command=wm.MIDI_CHANNEL_MODE_MESSAGES[command],!command)throw new TypeError("Invalid channel mode message name.")}else if(command=parseInt(command),!(command>=120&&127>=command))throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");if(value=parseInt(value)||0,0>value||value>127)throw new RangeError("Value must be an integer between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){this.send((wm.MIDI_CHANNEL_MESSAGES.channelmode<<4)+(ch-1),[command,value],this._parseTimeParameter(options.time))}.bind(this)),this},Output.prototype.sendProgramChange=function(program,channel,options){var that=this;if(options=options||{},program=parseInt(program),
isNaN(program)||0>program||program>127)throw new RangeError("Program numbers must be between 0 and 127.");return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.programchange<<4)+(ch-1),[program],that._parseTimeParameter(options.time))}),this},Output.prototype.sendChannelAftertouch=function(pressure,channel,options){var that=this;options=options||{},pressure=parseFloat(pressure),(isNaN(pressure)||0>pressure||pressure>1)&&(pressure=.5);var nPressure=Math.round(127*pressure);return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.channelaftertouch<<4)+(ch-1),[nPressure],that._parseTimeParameter(options.time))}),this},Output.prototype.sendPitchBend=function(bend,channel,options){var that=this;if(options=options||{},bend=parseFloat(bend),isNaN(bend)||-1>bend||bend>1)throw new RangeError("Pitch bend value must be between -1 and 1.");var nLevel=Math.round((bend+1)/2*16383),msb=nLevel>>7&127,lsb=127&nLevel;return wm.toMIDIChannels(channel).forEach(function(ch){that.send((wm.MIDI_CHANNEL_MESSAGES.pitchbend<<4)+(ch-1),[lsb,msb],that._parseTimeParameter(options.time))}),this},Output.prototype._parseTimeParameter=function(time){var parsed,value;return"string"==typeof time&&"+"===time.substring(0,1)?(parsed=parseFloat(time),parsed&&parsed>0&&(value=wm.time+parsed)):(parsed=parseFloat(time),parsed>wm.time&&(value=parsed)),value},Output.prototype._convertNoteToArray=function(note){var notes=[];return Array.isArray(note)||(note=[note]),note.forEach(function(item){notes.push(wm.guessNoteNumber(item))}),notes},Output.prototype._onMidiMessage=function(e){}, true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return wm}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=wm:scope.WebMidi||(scope.WebMidi=wm)}(this);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 vUv;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n\nvoid main() {\n\n    #include <uv_vertex>\n\n    vec3 transformed = vec3( position );\n    vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n    gl_Position = projectionMatrix * mvPosition;\n\n    vViewPosition = - mvPosition.xyz;\n    vUv = uv;\n\n    #include <fog_vertex>\n}"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n#define M_PI 3.14\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float uTime;\nuniform vec3 uStripeOrientation;\nuniform float uInvert;\nuniform vec3 uSquare;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uLength;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\n#include <common>\n#include <uv_pars_fragment>\n#include <fog_pars_fragment>\n\nvoid main() {\n    vec4 color = vec4(0.);\n\n    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;\n    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;\n\n    if ( absX > 0. || absY > 0. ) {\n       color = vec4(vec3(1.0 - uInvert), opacity);\n    } else {\n        color = vec4(vec3(0.0 + uInvert), opacity);\n    }\n\n    gl_FragColor = color;\n\n    #include <fog_fragment>\n}"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform sampler2D tBlend;\nuniform float opacity;\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 base = texture2D(tInput, vUv);\n    vec4 blend = texture2D(tBlend, vUv);\n\n    vec4 color = (1.0 - ((1.0 - base) * (1.0 - blend)));\n    \n    gl_FragColor = color * opacity + base * ( 1. - opacity );;\n}"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\n\nvoid main() {\n   vec4 sum = vec4(0);\n   vec2 texcoord = vUv;\n  \n   for( int i= -4 ;i < 4; i++)\n   {\n        for ( int j = -3; j < 3; j++)\n        {\n            sum += texture2D(tInput, texcoord + vec2(j, i)*0.004) * 0.25;\n        }\n   }\n       if (texture2D(tInput, texcoord).r < 0.3)\n    {\n       gl_FragColor = sum*sum*0.012 + texture2D(tInput, texcoord);\n    }\n    else\n    {\n        if (texture2D(tInput, texcoord).r < 0.5)\n        {\n            gl_FragColor = sum*sum*0.009 + texture2D(tInput, texcoord);\n        }\n        else\n        {\n            gl_FragColor = sum*sum*0.0075 + texture2D(tInput, texcoord);\n        }\n    }\n}"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform float kernel;\nuniform float scale;\nuniform float thresh;\n\nvoid main()\n{\n    vec4 sum = vec4(0);\n\n    // mess of for loops due to gpu compiler/hardware limitations\n    int j=-2;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=-1;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=0;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=1;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=2;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    sum/=25.0;\n\n    vec4 s=texture2D(tInput, vUv);\n    gl_FragColor=s;\n\n    // use the blurred colour if it's bright enough\n    // if (length(sum)>thresh)\n    // {\n        gl_FragColor +=sum*scale;\n    // }\n}"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 increment;\n\nvoid main() {\n      vec4 color = vec4(0.0);\n\n      color += texture2D(tInput, (vUv - increment * 4.0)) * 0.051;\n      color += texture2D(tInput, (vUv - increment * 3.0)) * 0.0918;\n      color += texture2D(tInput, (vUv - increment * 2.0)) * 0.12245;\n      color += texture2D(tInput, (vUv - increment * 1.0)) * 0.1531;\n      color += texture2D(tInput, (vUv + increment * 0.0)) * 0.1633;\n      color += texture2D(tInput, (vUv + increment * 1.0)) * 0.1531;\n      color += texture2D(tInput, (vUv + increment * 2.0)) * 0.12245;\n      color += texture2D(tInput, (vUv + increment * 3.0)) * 0.0918;\n      color += texture2D(tInput, (vUv + increment * 4.0)) * 0.051;\n\n      gl_FragColor = color;\n}"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 delta;\n\nconst float samples = 30.;\n\nfloat random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}\n\nvoid main() {\n\n    vec4 color=vec4(0.0);\n    float total=0.0;\n    float offset=random(vec3(12.9898,78.233,151.7182),0.0);\n    for(float t=-samples;t<=samples;t++){\n        float percent=(t+offset-0.5)/samples;\n        float weight=1.0-abs(percent);\n        vec4 sample=texture2D(tInput,vUv+delta*percent);\n        sample.rgb*=sample.a;\n        color+=sample*weight;\n        total+=weight;\n    }\n    \n    gl_FragColor=color/total;\n    gl_FragColor.rgb/=gl_FragColor.a+0.00001;\n    \n}"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\n\nvoid main() {\n\tgl_FragColor = texture2D(tInput, vUv);\n\n\t// gl_FragColor = vec4(vec3(vUv.y), 1.);\n}"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\n\nuniform float time;\n\nuniform float noiseAmount;\nuniform float noiseSpeed;\nuniform float vignetteFallof;\nuniform float vignetteAmount;\nuniform vec2 splitDelta;\nuniform vec2 resolution;\nuniform float zoomBlurStrength;\nuniform float brightness;\nuniform float contrast;\n\nvarying vec2 vUv;\n\nfloat random(vec2 n, float offset ){\n\t//return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453);\n\treturn .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);\n}\n\nvoid main() {\n    vec4 color = vec4(0.0);\n\n    // rgb split\n    vec2 dir = vUv - vec2( .5 );\n\tfloat d = .7 * length( dir );\n\tnormalize( dir );\n\tvec2 value = d * dir * splitDelta;\n\tvec4 c1 = texture2D( tInput, vUv - value / resolution.x );\n\tvec4 c2 = texture2D( tInput, vUv );\n\tvec4 c3 = texture2D( tInput, vUv + value / resolution.y );\n\tcolor = vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.b );\n\n    //noise\n    color += vec4( vec3( noiseAmount * random( vUv, .00001 * noiseSpeed * time ) ), 1. );\n\n    vec3 colorContrasted = color.rgb * contrast;\n    vec3 bright = colorContrasted + vec3(brightness);\n    color.rgb = bright;\n    \n    //vignette\n    float dist = distance(vUv, vec2(0.5, 0.5));\n    color.rgb *= smoothstep(0.8, vignetteFallof * 0.799, dist * (vignetteAmount + vignetteFallof));\n\n    gl_FragColor = color;\n}"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform vec2 resolution;\nvarying vec2 vUv;\n\n#define FXAA_REDUCE_MIN   (1.0/128.0)\n#define FXAA_REDUCE_MUL   (1.0/8.0)\n#define FXAA_SPAN_MAX     8.0\n\nvoid main() {\n\n    vec2 res = 1. / resolution;\n\n    vec3 rgbNW = texture2D( tInput, ( vUv.xy + vec2( -1.0, -1.0 ) * res ) ).xyz;\n    vec3 rgbNE = texture2D( tInput, ( vUv.xy + vec2( 1.0, -1.0 ) * res ) ).xyz;\n    vec3 rgbSW = texture2D( tInput, ( vUv.xy + vec2( -1.0, 1.0 ) * res ) ).xyz;\n    vec3 rgbSE = texture2D( tInput, ( vUv.xy + vec2( 1.0, 1.0 ) * res ) ).xyz;\n    vec4 rgbaM  = texture2D( tInput,  vUv.xy  * res );\n    vec3 rgbM  = rgbaM.xyz;\n    vec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n    float lumaNW = dot( rgbNW, luma );\n    float lumaNE = dot( rgbNE, luma );\n    float lumaSW = dot( rgbSW, luma );\n    float lumaSE = dot( rgbSE, luma );\n    float lumaM  = dot( rgbM,  luma );\n    float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );\n    float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );\n\n    float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );\n    dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),\n          max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                dir * rcpDirMin)) * res;\n    vec4 rgbA = (1.0/2.0) * (\n    texture2D(tInput,  vUv.xy + dir * (1.0/3.0 - 0.5)) +\n    texture2D(tInput,  vUv.xy + dir * (2.0/3.0 - 0.5)));\n    vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n    texture2D(tInput,  vUv.xy + dir * (0.0/3.0 - 0.5)) +\n    texture2D(tInput,  vUv.xy + dir * (3.0/3.0 - 0.5)));\n    float lumaB = dot(rgbB, vec4(luma, 0.0));\n\n    if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {\n        gl_FragColor = rgbA;\n    } else {\n        gl_FragColor = rgbB;\n    }\n\n    //gl_FragColor = vec4( texture2D( tInput,vUv ).xyz, 1. );\n}"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 direction;\nuniform vec2 resolution;\n\nvoid main() {\n    vec4 color = vec4(0.0);\n    vec2 off1 = vec2(1.3846153846) * direction;\n    vec2 off2 = vec2(3.2307692308) * direction;\n    color += texture2D(tInput, vUv) * 0.2270270270;\n    color += texture2D(tInput, vUv + (off1 / resolution)) * 0.3162162162;\n    color += texture2D(tInput, vUv - (off1 / resolution)) * 0.3162162162;\n    color += texture2D(tInput, vUv + (off2 / resolution)) * 0.0702702703;\n    color += texture2D(tInput, vUv - (off2 / resolution)) * 0.0702702703;\n    \n    gl_FragColor = color;\n}"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform float amount;\nuniform float speed;\nuniform float time;\nvarying vec2 vUv;\n\nfloat random(vec2 n, float offset ){\n\t//return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453);\n\treturn .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);\n}\n\nvoid main() {\n\n\tvec4 color = texture2D(tInput, vUv);\n\n\t//color += amount * ( .5 - random( vec3( 1. ), length( gl_FragCoord ) + speed * .01 * time ) );\n\tcolor += vec4( vec3( amount * random( vUv, .00001 * speed * time ) ), 1. );\n\n\tgl_FragColor = color;\n\n}"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "// varying vec2 vUv;\n// uniform sampler2D tInput;\n\n// const float blur_start = 1.0;\n\n// vec2 offset = vec2(0.001, 0.001);\n\n// float factor = 1.;\n// float strength = 10.;\n\n// const int occurences = 100;\n// float zoom = 1.;\n\n// void main()\n// {\n//     float scale = blur_start * zoom;\n//     vec4 c = vec4(0);\n    \n//     for( int i = 0; i < occurences; ++i ) {\n//       c += texture2D(tInput, (vUv * scale) + offset);\n//       scale += strength / float(occurences);\n//     }\n\n//     gl_FragColor = c * factor;\n// }\n\nvarying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 lightPosition;\nuniform float exposure;\nuniform float decay;\nuniform float density;\nuniform float weight;\nuniform int samples;\nconst int MAX_SAMPLES = 100;\nvoid main(){\n  \n  vec2 texCoord = vUv;\n  // Calculate vector from pixel to light source in screen space\n  vec2 deltaTextCoord = texCoord - vec2(0.5, 0.5);\n  // Divide by number of samples and scale by control factor\n  deltaTextCoord *= 1.0 / float(samples) * density;\n  // Store initial sample\n  vec4 color = texture2D(tInput, texCoord);\n  // set up illumination decay factor\n  float illuminationDecay = 1.0;\n  \n  // evaluate the summation for samples number of iterations up to 100\n  for(int i=0; i < MAX_SAMPLES; i++){\n    // work around for dynamic number of loop iterations\n    if(i == samples){\n      break;\n    }\n    \n    // step sample location along ray\n    texCoord -= deltaTextCoord;\n    // retrieve sample at new location\n    vec4 sample = texture2D(tInput, texCoord);\n    // apply sample attenuation scale/decay factors\n    sample *= illuminationDecay * weight;\n    // accumulate combined color\n    color += sample;\n    // update exponential decay factor\n    illuminationDecay *= decay;\n  \n  }\n  // output final color with a further scale control factor\n  gl_FragColor = color * exposure;\n}\n"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform float amount;\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 color = texture2D(tInput, vUv);\n\tfloat r = color.r;\n\tfloat g = color.g;\n\tfloat b = color.b;\n\t\n\tcolor.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));\n\tcolor.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));\n\tcolor.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));\n\t\n\tgl_FragColor = color;\n}"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "uniform float cameraNear;\nuniform float cameraFar;\n\n#ifdef USE_LOGDEPTHBUF\n    uniform float logDepthBufFC;\n#endif\n\nuniform float radius;     // ao radius\nuniform bool onlyAO;      // use only ambient occlusion pass?\n\nuniform vec2 size;        // texture width, height\nuniform float aoClamp;    // depth clamp - reduces haloing at screen edges\n\nuniform float lumInfluence;  // how much luminance affects occlusion\n\nuniform sampler2D tInput;\nuniform sampler2D tDepth;\n\nvarying vec2 vUv;\n\n// #define PI 3.14159265\n#define DL 2.399963229728653  // PI * ( 3.0 - sqrt( 5.0 ) )\n#define EULER 2.718281828459045\n\n        // user variables\n\nconst int samples = 64;     // ao sample count\n\nconst bool useNoise = true;      // use noise instead of pattern for sample dithering\nconst float noiseAmount = 0.0004; // dithering amount\n\nconst float diffArea = 0.4;   // self-shadowing reduction\nconst float gDisplace = 0.4;  // gauss bell center\n\n\n// RGBA depth\n\nvec3 packNormalToRGB( const in vec3 normal ) {\n    return normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n    return 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n    vec4 r = vec4( fract( v * PackFactors ), v );\n    r.yzw -= r.xyz * ShiftRight8; // tidy overflow\n    return r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n    return dot( v, UnpackFactors );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n    return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n    return linearClipZ * ( near - far ) - near;\n}\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n    return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n    return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n\n// generating noise / pattern texture for dithering\n\nvec2 rand( const vec2 coord ) {\n\n    vec2 noise;\n\n    if ( useNoise ) {\n\n        float nx = dot ( coord, vec2( 12.9898, 78.233 ) );\n        float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\n\n        noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n\n    } else {\n\n        float ff = fract( 1.0 - coord.s * ( size.x / 2.0 ) );\n        float gg = fract( coord.t * ( size.y / 2.0 ) );\n\n        noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n\n    }\n\n    return ( noise * 2.0  - 1.0 ) * noiseAmount;\n\n}\n\nfloat readDepth( const in vec2 coord ) {\n\n    float cameraFarPlusNear = cameraFar + cameraNear;\n    float cameraFarMinusNear = cameraFar - cameraNear;\n    float cameraCoef = 2.0 * cameraNear;\n\n    #ifdef USE_LOGDEPTHBUF\n\n        float logz = unpackRGBAToDepth( texture2D( tDepth, coord ) );\n        float w = pow(2.0, (logz / logDepthBufFC)) - 1.0;\n        float z = (logz / w) + 1.0;\n\n    #else\n\n        float z = unpackRGBAToDepth( texture2D( tDepth, coord ) );\n\n    #endif\n\n    return cameraCoef / ( cameraFarPlusNear - z * cameraFarMinusNear );\n\n\n}\n\nfloat compareDepths( const in float depth1, const in float depth2, inout int far ) {\n\n    float garea = 8.0;                         // gauss bell width\n    float diff = ( depth1 - depth2 ) * 100.0;  // depth difference (0-100)\n\n            // reduce left bell width to avoid self-shadowing\n\n    if ( diff < gDisplace ) {\n\n        garea = diffArea;\n\n    } else {\n\n        far = 1;\n\n    }\n\n    float dd = diff - gDisplace;\n    float gauss = pow( EULER, -2.0 * ( dd * dd ) / ( garea * garea ) );\n    return gauss;\n\n}\n\nfloat calcAO( float depth, float dw, float dh ) {\n\n    vec2 vv = vec2( dw, dh );\n\n    vec2 coord1 = vUv + radius * vv;\n    vec2 coord2 = vUv - radius * vv;\n\n    float temp1 = 0.0;\n    float temp2 = 0.0;\n\n    int far = 0;\n    temp1 = compareDepths( depth, readDepth( coord1 ), far );\n\n            // DEPTH EXTRAPOLATION\n\n    if ( far > 0 ) {\n\n        temp2 = compareDepths( readDepth( coord2 ), depth, far );\n        temp1 += ( 1.0 - temp1 ) * temp2;\n\n    }\n\n    return temp1;\n\n}\n\nvoid main() {\n\n    vec2 noise = rand( vUv );\n    float depth = readDepth( vUv );\n\n    float tt = clamp( depth, aoClamp, 1.0 );\n\n    float w = ( 1.0 / size.x ) / tt + ( noise.x * ( 1.0 - noise.x ) );\n    float h = ( 1.0 / size.y ) / tt + ( noise.y * ( 1.0 - noise.y ) );\n\n    float ao = 0.0;\n\n    float dz = 1.0 / float( samples );\n    float l = 0.0;\n    float z = 1.0 - dz / 2.0;\n\n    for ( int i = 0; i <= samples; i ++ ) {\n\n        float r = sqrt( 1.0 - z );\n\n        float pw = cos( l ) * r;\n        float ph = sin( l ) * r;\n        ao += calcAO( depth, pw * w, ph * h );\n        z = z - dz;\n        l = l + DL;\n\n    }\n\n    ao /= float( samples );\n    ao = 1.0 - ao;\n\n    vec3 color = texture2D( tInput, vUv ).rgb;\n\n    vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\n    float lum = dot( color.rgb, lumcoeff );\n    vec3 luminance = vec3( lum );\n\n    vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );  // mix( color * ao, white, luminance )\n\n    if ( onlyAO ) {\n\n        final = vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );  // ambient occlusion only\n\n    }\n\n    gl_FragColor = texture2D(tInput, vUv);\n\n}"

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(6).EventEmitter

module.exports = progress

function progress(xhr) {
  var emitter = new EventEmitter
  var finished = false

  if (xhr.attachEvent) {
    xhr.attachEvent('onreadystatechange', done)
    return emitter
  }

  xhr.addEventListener('load', done, false)
  xhr.addEventListener('progress', progress, false)
  function progress(event) {
    var value = event.lengthComputable
      ? event.loaded / event.total
      : 0

    if (!finished) emitter.emit('data'
      , value
      , event.total || null
    )

    finished = value === 1
  }

  function done(event) {
    if (event.type !== 'load' && !/^(ready|complete)$/g.test(
      (event.currentTarget || event.srcElement).readyState
    )) return

    if (finished) return
    if (xhr.removeEventListener) {
      xhr.removeEventListener('load', done, false)
      xhr.removeEventListener('progress', progress, false)
    } else
    if (xhr.detatchEvent) {
      xhr.detatchEvent('onreadystatechange', done)
    }

    emitter.emit('data', 1, event.total || null)
    emitter.emit('done')
    finished = true
  }

  return emitter
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(43)
var isFunction = __webpack_require__(11)
var parseHeaders = __webpack_require__(46)
var xtend = __webpack_require__(77)

module.exports = createXHR
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    if (xhr.responseType === "document") {
        return xhr.responseXML
    }
    var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
    if (xhr.responseType === "" && !firefoxBugTakenEffect) {
        return xhr.responseXML
    }

    return null
}

function noop() {}


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWExZTcxOWNlY2ZmNDA1MzYwOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZXZlbnRzL0V2ZW50c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvQWJzdHJhY3RGYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9jb3JlL1Bhc3MuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvTWlkaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYXVkaW8tY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2Nhbi1wbGF5LXNyYy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3Jlc3VtZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9GYWNlc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9Nb3VzZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9jb25maWcvTVBLTWluaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vQ29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3Bhc3Nlcy9DdXN0b21QYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9wYXNzZXMvRlhBQVBhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aHJlZS1vcmJpdC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXVkaW8tZnJlcXVlbmN5LXRvLWluZGV4L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL2x1Y2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9wYXNzZXMvQ29weVBhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9taW1lLXR5cGVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jbGFtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Zvci1lYWNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpZ2h0LW5vdy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cmltL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLWFuYWx5c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2J1ZmZlci1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9ldmVudC1hZGQtb25jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL21lZGlhLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3hoci1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYm1pZGkvd2VibWlkaS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9hZGRpdGl2ZS5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9iYXNpYy52cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbS5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbTIuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYmxvb210ZXN0LmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2JveC1ibHVyLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2NvcHkuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvY3VzdG9tLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2RvZi5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9meGFhLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2dhdXNzaWFuLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL25vaXNlLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3JhZGlhbC1ibHVyLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NlcGlhLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NzYW8uZnMiLCJ3ZWJwYWNrOi8vLy4vfi94aHItcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi94aHIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi94dGVuZC9pbW11dGFibGUuanMiXSwibmFtZXMiOlsiQXBwIiwid2luZG93Iiwic3RhcnRlZCIsInVpSGlkZGVuIiwic291bmRFbmRlZCIsImJhY2tncm91bmRDb2xvciIsInN0YXJ0IiwiZmFjZXNDb250cm9sbGVyIiwia2V5Ym9hcmRDb250cm9sbGVyIiwicmVzaXplIiwidXBkYXRlIiwib25TdGFydCIsIm9uVUlIaWRkZW4iLCJvblNvdW5kRW5kIiwicmVzZXQiLCJpbml0IiwiYmluZExpc3RlbmVycyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXJlciIsIlRIUkVFIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0U2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldENsZWFyQ29sb3IiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsIlBDRlNvZnRTaGFkb3dNYXAiLCJXQUdORVIiLCJ2ZXJ0ZXhTaGFkZXJzUGF0aCIsImZyYWdtZW50U2hhZGVyc1BhdGgiLCJjb21wb3NlciIsImJsb29tV2lkdGgiLCJpc1RvdWNoIiwiYmxvb21IZWlnaHQiLCJibG9vbVBhc3MiLCJNdWx0aVBhc3NCbG9vbVBhc3MiLCJwYXJhbXMiLCJzdHJlbmd0aCIsImJsdXJBbW91bnQiLCJhcHBseVpvb21CbHVyIiwiem9vbUJsdXJTdHJlbmd0aCIsInpvb21CbHVyQ2VudGVyIiwiVmVjdG9yMiIsInJnYlBhc3MiLCJSR0JTcGxpdFBhc3MiLCJkZWx0YSIsIm5vaXNlUGFzcyIsIk5vaXNlUGFzcyIsImFtb3VudCIsInNwZWVkIiwidmlnbmV0dGVQYXNzIiwiVmlnbmV0dGVQYXNzIiwiY3VzdG9tUGFzcyIsInZhbHVlIiwic3BsaXREZWx0YSIsIm5vaXNlQW1vdW50Iiwibm9pc2VTcGVlZCIsInZpZ25ldHRlQW1vdW50IiwidmlnbmV0dGVGYWxsb2YiLCJicmlnaHRuZXNzIiwiY29udHJhc3QiLCJmeGFhUGFzcyIsIndpZHRoIiwiaGVpZ2h0IiwibGVuZ3RoIiwic2NlbmUiLCJTY2VuZSIsImZvZyIsIkZvZyIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwibG9va0F0IiwiVmVjdG9yMyIsImFkZCIsImFkZENvbnRyb2xzIiwiYWRkTGlnaHRzIiwiYWRkRWxlbWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwib24iLCJYUCIsIlNUQVJUIiwiVUkiLCJISURERU4iLCJTT1VORFMiLCJFTkQiLCJlbWl0IiwiZGF0YSIsIm5hbWUiLCJPcmJpdENvbnRyb2xzIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJkaXZpc2F0b3IiLCJnZW9tZXRyeSIsIlBsYW5lR2VvbWV0cnkiLCJvdGhlckdlb21ldHJ5IiwibGVmdFJpZ2h0R2VvbWV0cnkiLCJNYXRoIiwiZmxvb3IiLCJ0b3BCb3R0b21HZW9tZXRyeSIsImJhY2tncm91bmRHZW9tZXRyeSIsImxlZnQiLCJyb3RhdGlvbiIsInkiLCJQSSIsIngiLCJyZWdpc3RlciIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwiY29udGFpbmVyIiwic2VucyIsInJhbmRvbSIsImRlbGF5IiwicmVuZGVyIiwicGFzcyIsInRvU2NyZWVuIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIkV2ZW50c01hbmFnZXIiLCJldmVudCIsImxpc3RlbmVycyIsImV2ZW50c0xpc3QiLCJpIiwibGVuIiwiZm4iLCJwdXNoIiwibGlzdGVuZXIiLCJvZmYiLCJfIiwid2FybiIsInRhcmdldEV2ZW50cyIsInRhcmdldCIsIkV2ZW50cyIsIktFWUJPQVJEIiwiS0VZRE9XTiIsIktFWVVQIiwiS0VZUFJFU1MiLCJTUEFDRUhPTEQiLCJTUEFDRVVQIiwiU1BBQ0VET1dOIiwiQ0FOUExBWSIsIkxPV0tJQ0siLCJNSURETEVLSUNLIiwiSElHSEtJQ0siLCJUUkVNT0xPIiwiQWJzdHJhY3RGYWNlIiwiY29sb3IiLCJzaWRlIiwiRnJvbnRTaWRlIiwicGxhbmVHZW9tZXRyeSIsIm9uS2V5UHJlc3MiLCJvblNwYWNlSG9sZCIsIm9uSGlkZGVuVUkiLCJ1bmlmb3JtcyIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsIlNoYWRlckxpYiIsIkNvbG9yIiwic3RhcnREaXZpc2lvbnMiLCJvcmllbnRhdGlvbnMiLCJkdXJhdGlvbiIsImZhY3RvciIsImVhc2UiLCJFeHBvIiwiZWFzZU91dCIsImRlYnVnIiwiaXNTcGFjZURvd24iLCJpbml0R3VpIiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwibGlnaHRzIiwidHJhbnNwYXJlbnQiLCJtZXNoIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiaXNPcGVuIiwiZ3VpIiwiYWRkRm9sZGVyIiwib3BlbiIsInRpbWUiLCJ1cGRhdGVEaXZpc2lvbnMiLCJvcmllbnRhdGlvbk5hbWUiLCJzY2FsYXIiLCJvcmllbnRhdGlvbiIsIm11bHRpcGx5U2NhbGFyIiwic3BlZWRNaW4iLCJ0bCIsIlRpbWVsaW5lTGl0ZSIsImJsYWNrTW9kZSIsInNob3ciLCJ0byIsImhpZGUiLCJrZXkiLCJUd2Vlbk1heCIsImludmVydCIsIlRpbWVsaW5lTWF4IiwidVByb2dyZXNzIiwib25Db21wbGV0ZSIsInNldCIsImZyb21UbyIsIk9iamVjdDNEIiwiUGFzcyIsInJlc29sdXRpb24iLCJ0SW5wdXQiLCJUZXh0dXJlIiwiZGVmYXVsdCIsInNoYWRlciIsImZsYXRTaGFkaW5nIiwiZGVwdGhXcml0ZSIsImRlcHRoVGVzdCIsIm1hcCIsIm4iLCJzdGFydDEiLCJzdG9wMSIsInN0YXJ0MiIsInN0b3AyIiwiTWlkaUNvbnRyb2xsZXIiLCJjb25maWciLCJpbnN0YW5jZSIsInBhZHMiLCJrbm9icyIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJvbk1lc3NhZ2UiLCJlbmFibGUiLCJlcnIiLCJuYXZpZ2F0b3IiLCJyZXF1ZXN0TUlESUFjY2VzcyIsInN5c2V4IiwidGhlbiIsImFsZXJ0IiwiaW5wdXRzIiwiaW5wdXQiLCJwYXJzZUNvbmZpZyIsImFkZExpc3RlbmVyIiwiZSIsImtleXMiLCJPYmplY3QiLCJzdWJzY3JpcHRpb25zIiwiaiIsIm51bWJlciIsImNoYW5uZWwiLCJjYWxsYmFjayIsIm5vdGUiLCJ2ZWxvY2l0eSIsImNvbnRyb2xsZXIiLCJlcnJvciIsIkVycm9yIiwiaWQiLCJmaW5kTnVtYmVySW5QYWRzIiwiZmluZE51bWJlckluS25vYnMiLCJyZWdpc3RlclBhZCIsInJlZ2lzdGVyS25vYiIsIkZhY2VzQ29udHJvbGxlciIsImZhY2VzIiwiZGl2aXNpb25zIiwiZ2VuZXJhdGVEaXZpc2lvbnMiLCJsYXN0WCIsImxhc3RZIiwiYWxsb3dJbnZlcnQiLCJzcGVlZENvbnRhaW5lciIsImZpcnN0U3BhY2VVcCIsImhpZ2hraWNrZWQiLCJsb3draWNrZWQiLCJkaXJlY3Rpb24iLCJjdXJyZW50QmxhY2tNb2RlIiwiY3VycmVudFNjYWxlTW9kZSIsIm9uTG93S2ljayIsIm9uTWlkZGxlS2ljayIsIm9uSGlnaEtpY2siLCJvblRyZW1vbG8iLCJvblNwYWNlVXAiLCJvblNwYWNlRG93biIsImJsYWNrTW9kZVZlcnRpY2FsIiwiYmxhY2tNb2RlSG9yaXpvbnRhbCIsImJsYWNrTW9kZVR1bm5lbFRvcCIsImJsYWNrTW9kZVR1bm5lbEJvdHRvbSIsImJsYWNrTW9kZUJvdHRvbSIsImJsYWNrTW9kZUZ1bGwiLCJibGFja01vZGVzIiwic2V0QmxhY2tNb2RlIiwiY2hhbmdlU2NhbGUiLCJyZWFjdGlvbnMiLCJjaGFuZ2VTY2FsZVgiLCJjaGFuZ2VTY2FsZVkiLCJjaGFuZ2VTY2FsZUJvdGgiLCJzY2FsaW5ncyIsIm9uUGFkRG93biIsIm9uS25vYkNoYW5nZSIsImZhY2UiLCJtaW4iLCJtYXgiLCJiZXR3ZWVuIiwicG9zc2libGVEaXZpc2lvblgiLCJmaW5kRGl2aXNpb25zIiwicmRtWEluZGV4IiwiZGl2aXNpb25YIiwiaW5kZXhPZiIsInBvc3NpYmxlRGl2aXNpb25ZIiwicmRtWUluZGV4IiwiZGl2aXNpb25ZIiwic2V0U3RyaXBlcyIsImFsbCIsImN1cnJlbnQiLCJyYW5nZSIsImRpdmlzaW9uIiwiaW5kZXgiLCJmaWx0ZXIiLCJyZG0iLCJvbkVuZCIsIm9wdGlvbnMiLCJzY2FsZSIsInByb2dyZXNzIiwiZWFzZUluT3V0IiwiTW91c2VNYW5hZ2VyIiwiY2hlY2tNb3VzZVNwZWVkIiwibW91c2VTcGVlZFgiLCJtb3VzZVNwZWVkWSIsIm1vdXNlTGFzdFgiLCJtb3VzZUxhc3RZIiwibW91c2VEaXJlY3Rpb25YIiwibW91c2VEaXJlY3Rpb25ZIiwibW91c2VYIiwibW91c2VZIiwic2V0SW50ZXJ2YWwiLCJnZXRTcGVlZCIsIm1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldERpcmVjdGlvbiIsInBhZ2VYIiwicGFnZVkiLCJLZXlib2FyZENvbnRyb2xsZXIiLCJvbktleVVwIiwib25LZXlEb3duIiwiQmFja2dyb3VuZCIsIkJvdHRvbSIsImhvcml6b250YWwiLCJob3Jpem9udGFsU2tldzEiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU2tldzEiLCJ2ZXJ0aWNhbFNrZXcyIiwidmlzaWJpbGl0eVRvZ2dsZXIiLCJ2aXNpYmlsaXR5SGlkZXIiLCJ2aXNpYmlsaXR5U2hvd2VyIiwiTGVmdCIsIlJpZ2h0IiwiQmFja1NpZGUiLCJUb3AiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJTb3VuZE1hbmFnZXIiLCJiYXNzIiwibWlkQmFzcyIsInZvaWNlIiwiZHJ1bSIsInBhdXNlIiwiYXNzZXRzIiwic291cmNlcyIsImludHJvIiwieHAiLCJpbml0U291bmQiLCJsb3dLaWNrIiwibWlkZGxlS2ljayIsInRyZW1vbG8iLCJoaWdoS2ljayIsInJhbmdlcyIsInNvdW5kR3VpIiwib25DaGFuZ2UiLCJwbGF5ZXIiLCJwbGF5IiwicGxheWVycyIsImF1ZGlvIiwiYW5hbHlzZXIiLCJub2RlIiwiQXVkaW8iLCJ2b2x1bWUiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImF1ZGlibGUiLCJzdGVyZW8iLCJsb2FkZWQiLCJzcmMiLCJmcmVxcyIsImZyZXF1ZW5jaWVzIiwibGV2ZWwiLCJxdWV1ZSIsInNtb290aCIsImNvZWZmIiwidW5kZWZpbmVkIiwiJHdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiJGxvZ28iLCIkYWN0aW9uIiwiJGFjdGlvbkxhYmVsIiwiJGFjdGlvbkZpbGwiLCIkdHV0byIsIiRjcmVkaXRzIiwiJGNyZWRpdEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIiRwcm9ncmVzc0ZpbGwiLCIkaGVscCIsIiRiYWNrZ3JvdW5kIiwibm93IiwiRGF0ZSIsIm1heFRpbWUiLCJoZWxwSXNPcGVuIiwiaXNDb21wbGV0ZWQiLCJtaW5GaWxsIiwibWF4RmlsbCIsImZpbGwiLCJyZXNldHRlZCIsImlzRG93biIsInBhdXNlZCIsIkxpbmVhciIsImVhc2VOb25lIiwiY3NzIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsIm9uRW5kWFAiLCJvbkNsaWNrSGVscCIsInRsSGVscFNob3ciLCJ0bEhlbHBIaWRlIiwiZGlzcGxheSIsInRpbWVTY2FsZSIsInJldmVyc2UiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJpbm5lckhUTUwiLCJraWxsIiwicmVzdGFydCIsInN0YWdnZXJGcm9tVG8iLCJBcnJheSIsImZyb20iLCJkaXNwbGF5Q3JlZGl0cyIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlTmlsIiwiYXMiLCJhIiwibWVyZ2UiLCJhcmdzIiwiZmlsdGVyZWQiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJmb3JFYWNoIiwiQ29tcG9zZXIiLCJvcHRzIiwiZGVmYXVsdHMiLCJtaW5GaWx0ZXIiLCJMaW5lYXJGaWx0ZXIiLCJtYWdGaWx0ZXIiLCJ3cmFwUyIsIkNsYW1wVG9FZGdlV3JhcHBpbmciLCJ3cmFwVCIsImZvcm1hdCIsIlJHQkZvcm1hdCIsIlVuc2lnbmVkQnl0ZVR5cGUiLCJzdGVuY2lsQnVmZmVyIiwiZnJvbnQiLCJXZWJHTFJlbmRlclRhcmdldCIsImJhY2siLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJkZWZhdWx0TWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsInF1YWQiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiY29weVBhc3MiLCJ3IiwiaCIsInByb2plY3Rpb25NYXRyaXgiLCJtYWtlT3J0aG9ncmFwaGljIiwibmVhciIsImZhciIsIm91dHB1dCIsIndyaXRlIiwicmVhZCIsInRlbXAiLCJ0ZXh0dXJlIiwic3dhcEJ1ZmZlcnMiLCJkZXN0IiwiQ3VzdG9tUGFzcyIsIkZYQUFQYXNzIiwiUmFuZ2UiLCJtaW5MZXZlbCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiY29udGV4dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImx1Y2t5IiwiY2hhbmNlcyIsIkNvcHlQYXNzIiwicmFuZG9tRnJvbUFycmF5IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFL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QTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVILHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7QUM5QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUMvQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyREE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDUEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDLFNBQVM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDaFBBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWExZTcxOWNlY2ZmNDA1MzYwOTAiLCJpbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2ZhY2VzL0JhY2tncm91bmQnO1xuaW1wb3J0IFRvcCBmcm9tICcuL2ZhY2VzL1RvcCc7XG5pbXBvcnQgTGVmdCBmcm9tICcuL2ZhY2VzL0xlZnQnO1xuaW1wb3J0IFJpZ2h0IGZyb20gJy4vZmFjZXMvUmlnaHQnO1xuaW1wb3J0IEJvdHRvbSBmcm9tICcuL2ZhY2VzL0JvdHRvbSc7XG5cbmltcG9ydCBzbW9vdGggZnJvbSAnLi9zbW9vdGgnO1xuaW1wb3J0IEZhY2VzQ29udHJvbGxlciBmcm9tICcuL0ZhY2VzQ29udHJvbGxlcic7XG5pbXBvcnQgTW91c2VNYW5hZ2VyIGZyb20gJy4vTW91c2VNYW5hZ2VyJztcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcbmltcG9ydCBNUEtNaW5pIGZyb20gJy4vY29uZmlnL01QS01pbmknO1xuaW1wb3J0IE1pZGlDb250cm9sbGVyIGZyb20gJy4vdXRpbHMvTWlkaUNvbnRyb2xsZXInO1xuaW1wb3J0IENvbXBvc2VyIGZyb20gJy4vdXRpbHMvcG9zdHByby9Db21wb3Nlcic7XG5pbXBvcnQgQ3VzdG9tUGFzcyBmcm9tICcuL3V0aWxzL3Bvc3Rwcm8vcGFzc2VzL0N1c3RvbVBhc3MnO1xuaW1wb3J0IEZYQUFQYXNzIGZyb20gJy4vdXRpbHMvcG9zdHByby9wYXNzZXMvRlhBQVBhc3MnO1xuXG5jbGFzcyBBcHAge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnVpSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gZmFsc2U7XG5cblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IDB4MDAwMDAwO1xuXHRcdFxuICAgICAgICBNb3VzZU1hbmFnZXIuc3RhcnQoKTtcbiAgICAgICAgTWlkaUNvbnRyb2xsZXIuc3RhcnQoTVBLTWluaSk7XG5cbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIgPSBuZXcgRmFjZXNDb250cm9sbGVyKCk7XG5cbiAgICAgICAgdGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRDb250cm9sbGVyKCk7XG5cdFx0XHRcblx0XHR0aGlzLnJlc2l6ZSA9IDo6dGhpcy5yZXNpemU7XG5cdFx0dGhpcy51cGRhdGUgPSA6OnRoaXMudXBkYXRlO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vblVJSGlkZGVuID0gOjp0aGlzLm9uVUlIaWRkZW47XG4gICAgICAgIHRoaXMub25Tb3VuZEVuZCA9IDo6dGhpcy5vblNvdW5kRW5kO1xuICAgICAgICB0aGlzLnJlc2V0ID0gOjp0aGlzLnJlc2V0O1xuXHRcdFxuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuYmluZExpc3RlbmVycygpO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXMsIGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IGZhbHNlIH0pO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdC8vIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IGZhbHNlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXHRcdFxuXHRcdFdBR05FUi52ZXJ0ZXhTaGFkZXJzUGF0aCA9ICdqcy92ZXJ0ZXgtc2hhZGVycyc7XG5cdFx0V0FHTkVSLmZyYWdtZW50U2hhZGVyc1BhdGggPSAnanMvZnJhZ21lbnQtc2hhZGVycyc7XG5cblx0XHR0aGlzLmNvbXBvc2VyID0gbmV3IENvbXBvc2VyKHRoaXMucmVuZGVyZXIpO1xuXHRcdHRoaXMuY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuXHRcdGNvbnN0IGJsb29tV2lkdGggPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcbiAgICAgICAgY29uc3QgYmxvb21IZWlnaHQgPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcblxuXHRcdHRoaXMuYmxvb21QYXNzID0gbmV3IFdBR05FUi5NdWx0aVBhc3NCbG9vbVBhc3MoYmxvb21XaWR0aCwgYmxvb21IZWlnaHQpO1xuXHRcdHRoaXMuYmxvb21QYXNzLnBhcmFtcy5zdHJlbmd0aCA9IDUwLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5ibHVyQW1vdW50ID0gNS47XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5hcHBseVpvb21CbHVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLnpvb21CbHVyU3RyZW5ndGggPSAzLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy56b29tQmx1ckNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjUsIDAuNSApO1xuXG4gICAgICAgIHRoaXMucmdiUGFzcyA9IG5ldyBXQUdORVIuUkdCU3BsaXRQYXNzKCk7XG4gICAgICAgIHRoaXMucmdiUGFzcy5wYXJhbXMuZGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigyMCwgMjApO1xuXG4gICAgICAgIHRoaXMubm9pc2VQYXNzID0gbmV3IFdBR05FUi5Ob2lzZVBhc3MoKTtcbiAgICAgICAgdGhpcy5ub2lzZVBhc3MucGFyYW1zLmFtb3VudCA9IDAuMjU7XG4gICAgICAgIHRoaXMubm9pc2VQYXNzLnBhcmFtcy5zcGVlZCA9IDAuMjtcblxuICAgICAgICB0aGlzLnZpZ25ldHRlUGFzcyA9IG5ldyBXQUdORVIuVmlnbmV0dGVQYXNzKCk7XG4gICAgICAgIHRoaXMudmlnbmV0dGVQYXNzLnBhcmFtcy5hbW91bnQgPSAwLjc7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLmZ4YWFQYXNzID0gbmV3IFdBR05FUi5GWEFBUGFzcygpO1xuXG4gICAgICAgIHRoaXMuY3VzdG9tUGFzcyA9IG5ldyBDdXN0b21QYXNzKHtcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA1MCxcbiAgICAgICAgICAgIGJsdXJBbW91bnQ6IDUsXG4gICAgICAgICAgICBhcHBseVpvb21CbHVyOiB0cnVlLFxuICAgICAgICAgICAgem9vbUJsdXJTdHJlbmd0aDogeyB2YWx1ZTogMyB9LFxuICAgICAgICAgICAgem9vbUJsdXJDZW50ZXI6IG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMC41KSxcblxuICAgICAgICAgICAgc3BsaXREZWx0YTogeyB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoMzAsIDMwKSB9LFxuXG4gICAgICAgICAgICBub2lzZUFtb3VudDogeyB2YWx1ZTogMC4yNSB9LFxuICAgICAgICAgICAgbm9pc2VTcGVlZDogeyB2YWx1ZTogMC4yIH0sXG5cbiAgICAgICAgICAgIHZpZ25ldHRlQW1vdW50OiB7IHZhbHVlOiAwLjggfSxcbiAgICAgICAgICAgIHZpZ25ldHRlRmFsbG9mOiB7IHZhbHVlOiAwLjEgfSxcblxuICAgICAgICAgICAgYnJpZ2h0bmVzczogeyB2YWx1ZTogMC4yIH0sXG4gICAgICAgICAgICBjb250cmFzdDogeyB2YWx1ZTogMC45IH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnhhYVBhc3MgPSBuZXcgRlhBQVBhc3MoKTtcblxuXHRcdHRoaXMud2lkdGggPSB3aW5kb3cud2lkdGggPSA2MDtcblx0XHR0aGlzLmhlaWdodCA9IHdpbmRvdy5oZWlnaHQgPSA2MDtcblx0XHR0aGlzLmxlbmd0aCA9IHdpbmRvdy5sZW5ndGggPSA2MDA7XG5cbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coMHgwMDAwMDAsIDAuOCwgdGhpcy5sZW5ndGggKiAuOTggKTtcblxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDApO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMDtcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XG5cblxuICAgICAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgIFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGJpbmRMaXN0ZW5lcnMgKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlVJLkhJRERFTiwgdGhpcy5vblVJSGlkZGVuKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkVORCwgdGhpcy5vblNvdW5kRW5kKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuRU5ELCB0aGlzLnJlc2V0KTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlhQLlNUQVJUKTtcblx0fVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVUlIaWRkZW4gKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXHRhZGRDb250cm9scyAoKSB7XG5cdFx0Y29uc3QgT3JiaXRDb250cm9scyA9IHJlcXVpcmUoJ3RocmVlLW9yYml0LWNvbnRyb2xzJykoVEhSRUUpO1xuXHRcdC8vIHRoaXMuY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdH1cblxuXHRhZGRMaWdodHMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gbGlnaHRzJyk7XG5cdFx0Ly8gdGhpcy5saWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhGRkZGRkYpO1xuXHRcdC8vIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gIFx0XHQvLyBjb25zdCBwb2ludExpZ2h0MyA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweGZmZmZmZiwgNy4xLCAwKTtcbiAgXHRcdC8vIHBvaW50TGlnaHQzLnBvc2l0aW9uLnggPSAwXG4gIFx0XHQvLyBwb2ludExpZ2h0My5wb3NpdGlvbi55ID0gNDtcbiAgXHRcdC8vIHBvaW50TGlnaHQzLnBvc2l0aW9uLnogPSA2MDtcblxuICBcdFx0Ly8gdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDMpO1xuXHR9XG5cblx0YWRkRWxlbWVudHMgKCkge1xuXHRcdHRoaXMuZGl2aXNhdG9yID0gMjtcblxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy5sZW5ndGgsIHRoaXMud2lkdGgsIDEsIDEpO1xuICAgICAgICB0aGlzLm90aGVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmxlbmd0aCwgMzIsIDMyKTtcblxuXHRcdHRoaXMubGVmdFJpZ2h0R2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLmxlbmd0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvciksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvcikgKTtcblx0XHR0aGlzLnRvcEJvdHRvbUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5sZW5ndGgsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yKSAsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvcikpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yICogMiksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvciAqIDIpICk7XG5cblx0XHR0aGlzLmxlZnQgPSBuZXcgTGVmdCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5sZWZ0LnJvdGF0aW9uLnkgPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMubGVmdC5wb3NpdGlvbi54ID0gLXRoaXMud2lkdGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdsZWZ0JywgdGhpcy5sZWZ0KVxuXG5cdFx0dGhpcy5yaWdodCA9IG5ldyBSaWdodCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5yaWdodC5yb3RhdGlvbi55ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnJpZ2h0LnBvc2l0aW9uLnggPSB0aGlzLndpZHRoICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcigncmlnaHQnLCB0aGlzLnJpZ2h0KVxuXG5cdFx0dGhpcy5ib3R0b20gPSBuZXcgQm90dG9tKHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLmJvdHRvbS5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjU7XG4gICAgICAgIHRoaXMuYm90dG9tLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMuYm90dG9tLnBvc2l0aW9uLnkgPSAtdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdib3R0b20nLCB0aGlzLmJvdHRvbSlcblxuXHRcdHRoaXMudG9wID0gbmV3IFRvcCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy50b3Aucm90YXRpb24ueCA9IC1NYXRoLlBJICogMC41O1xuICAgICAgICB0aGlzLnRvcC5yb3RhdGlvbi56ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnRvcC5wb3NpdGlvbi55ID0gdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCd0b3AnLCB0aGlzLnRvcCk7XG5cblx0XHQvLyB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzLmJhY2tncm91bmRHZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdC8vIHRoaXMuYmFja2dyb3VuZC5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuICAvLyAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZCk7XG5cblx0XHR0aGlzLmZhY2VzQ29udHJvbGxlci5jb250YWluZXIucG9zaXRpb24ueiA9IC10aGlzLmxlbmd0aCAqIDAuNTtcblxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMuZmFjZXNDb250cm9sbGVyLmNvbnRhaW5lcik7XG5cdH1cblxuICAgIHJvdGF0ZSAoKSB7XG4gICAgICAgIGNvbnN0IHNlbnMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxO1xuICAgICAgICBjb25zdCBkZWxheSA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICB9XG5cblx0dXBkYXRlICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIudXBkYXRlKCk7XG5cbiAgICAgICAgdGhpcy5jdXN0b21QYXNzLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5jb21wb3Nlci5yZXNldCgpO1xuXHRcdHRoaXMuY29tcG9zZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMuYmxvb21QYXNzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMucmdiUGFzcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLm5vaXNlUGFzcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLnZpZ25ldHRlUGFzcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9zZXIudG9TY3JlZW4odGhpcy5meGFhUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLmN1c3RvbVBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnRvU2NyZWVuKHRoaXMuZnhhYVBhc3MpO1xuXG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG5cdFx0cmFmKHRoaXMudXBkYXRlKTtcblx0fVxuXG5cdHJlc2l6ZSAoKSB7XG5cdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG5cdH1cblxufVxuXG5uZXcgQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwiLyoqXG4gKiBFdmVudHMgTWFuYWdlclxuICogYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9ibG9iL21hc3Rlci9pbmRleC5qc1xuICovXG5cbmNsYXNzIEV2ZW50c01hbmFnZXIge1xuXG4gICAgLyoqXG4gICAgICogRW1pdCBldmVudFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHN0YXRpYyBlbWl0ICggZXZlbnQsIGRhdGEgPSBudWxsICkge1xuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICAgICAgaWYoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIGxpc3RlbmVyc1tpXS5mbiggZGF0YSApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgb24gKCBldmVudCwgZm4gKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0V2ZW50c01hbmFnZXIgOjogT04gOjonLCBldmVudCk7XG5cbiAgICAgICAgaWYoIUV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdCkgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0ID0ge307XG5cbiAgICAgICAgaWYoIUV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0pIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0gPSBbXTsgLy8gaW1wcm92ZSAoLl8uKVxuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0ucHVzaCh7Zm46Zm59KTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBvbmNlKCBldmVudCwgZm4gKSB7XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoIGRhdGEgKSA9PntcblxuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGZuKGRhdGEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3RlbmVyLl8gPSBmbjtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbiggZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBvZmYgKCBldmVudCwgZm4gKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdO1xuXG4gICAgICAgIGlmKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzTWFuYWdlciA6OiBPZmYgOjogQ3VycmVudGx5IG5vIGxpc3RlbmVycyBmb3IgdGhpcyBldmVudCA6ICcsIGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFmbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHNNYW5hZ2VyIDo6IE9mZiA6OiBDYWxsYmFjayBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldEV2ZW50cyA9IFtdO1xuXG4gICAgICAgIGZvciggbGV0IGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGxpc3RlbmVyc1tpXTtcblxuICAgICAgICAgICAgaWYodGFyZ2V0LmZuICE9PSBmbiAmJiB0YXJnZXQuZm4uXyAhPT0gZm4gKSB7IC8vICguX18uKSA/P1xuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKCB0YXJnZXRFdmVudHMubGVuZ3RoID7CoDAgKVxuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSA9IHRhcmdldEV2ZW50cztcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGRlbGV0ZSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZXZlbnRzL0V2ZW50c01hbmFnZXIuanMiLCIvKipcbiAqIEUgViBFIE4gVCBTXG4gKi9cblxuY29uc3QgRXZlbnRzID0ge1xuICAgIEtFWUJPQVJEOiB7XG4gICAgICAgIEtFWURPV046IFwiS0VZQk9BUkRfS0VZRE9XTlwiLFxuICAgICAgICBLRVlVUDogXCJLRVlCT0FSRF9LRVlVUFwiLFxuICAgICAgICBLRVlQUkVTUzogXCJLRVlCT0FSRF9LRVlQUkVTU1wiLFxuICAgICAgICBTUEFDRUhPTEQ6IFwiS0VZQk9BUkRfU1BBQ0VIT0xEXCIsXG4gICAgICAgIFNQQUNFVVA6IFwiS0VZQk9BUkRfU1BBQ0VVUFwiLFxuICAgICAgICBTUEFDRURPV046IFwiS0VZQk9BUkRfU1BBQ0VET1dOXCIsXG4gICAgfSxcbiAgICBTT1VORFM6IHtcbiAgICAgICAgQ0FOUExBWTogXCJTT1VORFNfQ0FOUExBWVwiLFxuICAgICAgICBFTkQ6IFwiU09VTkRTX0VORFwiLFxuICAgICAgICBMT1dLSUNLOiBcIlNPVU5EU19MT1dLSUNLXCIsXG4gICAgICAgIE1JRERMRUtJQ0s6IFwiU09VTkRTX01JRERMRUtJQ0tcIixcbiAgICAgICAgSElHSEtJQ0s6IFwiU09VTkRTX0hJR0hLSUNLXCIsXG4gICAgICAgIFRSRU1PTE86IFwiU09VTkRTX1RSRU1PTE9cIixcbiAgICAgICAgU1RBUlQ6IFwiU09VTkRTX1NUQVJUXCIsXG4gICAgICAgIEVORDogXCJTT1VORFNfRU5EXCIsXG4gICAgfSxcbiAgICBYUDoge1xuICAgICAgICBTVEFSVDogXCJYUF9TVEFSVFwiLFxuICAgICAgICBFTkQ6IFwiWFBfRU5EXCIsXG4gICAgfSxcbiAgICBVSToge1xuICAgICAgICBISURERU46IFwiVUlfSElEREVOXCIsXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZXZlbnRzL0V2ZW50cy5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWxzL21hcCc7XG5cbmNsYXNzIEFic3RyYWN0RmFjZSBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yID0gMHgyNDI0MjUsIG5hbWUsIHNpZGUgPSBUSFJFRS5Gcm9udFNpZGUgKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wbGFuZUdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gOjp0aGlzLm9uS2V5UHJlc3M7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuICAgICAgICB0aGlzLm9uSGlkZGVuVUkgPSA6OnRoaXMub25IaWRkZW5VSTtcblxuICAgICAgICB0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZShUSFJFRS5TaGFkZXJMaWJbJ3Bob25nJ10udW5pZm9ybXMpO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddID0geyB0eXBlOidmJywgdmFsdWU6IDAuMCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWydkaWZmdXNlJ10gPSB7IHR5cGU6ICdjJywgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihjb2xvcikgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10gPSB7IHR5cGU6ICd2MycsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IDAuMCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10gPSB7IHR5cGU6ICd2MycsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1V2lkdGgnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93LndpZHRoIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VIZWlnaHQnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93LmhlaWdodCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1TGVuZ3RoJ10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy5sZW5ndGggfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IDAuMCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgPSAxLjA7XG5cbiAgICAgICAgdGhpcy5zdGFydERpdmlzaW9ucyA9IG5ldyBUSFJFRS5WZWN0b3IyKDksIDEzKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4zO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDE7XG4gICAgICAgIHRoaXMuZWFzZSA9IEV4cG8uZWFzZU91dDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuXG4gICAgICAgIGlmICggdGhpcy5kZWJ1ZyApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEd1aShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vc2hhZGVycy9ib3R0b20udmVydC5nbHNsJyksXG4gICAgICAgICAgICAvLyBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vc2hhZGVycy9ib3R0b20uZnJhZy5nbHNsJyksXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vc2hhZGVycy9wcm9ncmVzcy5mcmFnLmdsc2wnKSxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgICAgICAgbGlnaHRzOiBmYWxzZSxcbiAgICAgICAgICAgIHNpZGU6IHNpZGUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGZvZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbGFuZUdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5tZXNoLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc2gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMubWVzaCk7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIC8vIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgdGhpcy5vblNwYWNlSG9sZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLlNUQVJULCB0aGlzLm9uU3RhcnQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5VSS5ISURERU4sIHRoaXMub25IaWRkZW5VSSk7XG4gICAgfVxuXG4gICAgaW5pdEd1aSAoIGlzT3BlbiApIHtcbiAgICAgICAgdGhpcy5ndWkgPSB3aW5kb3cuZ3VpLmFkZEZvbGRlcih0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd4JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHgnKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneScsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB5Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3onLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geicpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneCcsIDAsIDEwMCkubmFtZSgnU3BhY2UgeCcpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneScsIDAsIDEwMCkubmFtZSgnU3BhY2UgeScpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneicsIDAsIDEwMCkubmFtZSgnU3BhY2UgeicpO1xuICAgICAgICBcbiAgICAgICAgaXNPcGVuICYmIHRoaXMuZ3VpLm9wZW4oKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCB0aW1lICkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddLnZhbHVlID0gdGltZTtcbiAgICB9XG5cbiAgICBzZXRQbGFpbkNvbG9yICggY29sb3IgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKDAsIDApO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCBvcmllbnRhdGlvbk5hbWUsIHNjYWxhciA9IDEsIGR1cmF0aW9uID0gMiApIHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uc1tvcmllbnRhdGlvbk5hbWVdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcmllbnRhdGlvbiApIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gb3JpZW50YXRpb24uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihzY2FsYXIpOyAvLyByb3NhY2VcblxuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueCA9IGNsb25lLng7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS55ID0gY2xvbmUueTtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnogPSBjbG9uZS56O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV2ZXJzZVN0cmlwZXMgKCkge1xuICAgICAgICAvLyB0aGlzLmZhY3RvciA9IC10aGlzLmZhY3RvcjtcbiAgICB9XG5cbiAgICBjaGFuZ2VTcGVlZCAoIHNwZWVkID0gdGhpcy5zcGVlZE1pbiApIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIH1cblxuICAgIGludmVydCAoKSB7XG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuXG4gICAgICAgIGlmICggdGhpcy5ibGFja01vZGUgKSB7XG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGwuYWRkKHRoaXMuc2hvdygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvID0gdGhpcy51bmlmb3Jtc1sndUludmVydCddLnZhbHVlID09PSAxLjAgPyAwLiA6IDEuO1xuICAgICAgICB0bC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IHRvLCBlYXNlOiB0aGlzLmVhc2UsIH0sIDApO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHRvZ2dsZVZpc2liaWxpdHkgKCkge1xuICAgICAgICBpZiAoIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSApIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZGF0YSApIHtcbiAgICAgICAgc3dpdGNoICggZGF0YS5rZXkgKSB7XG4gICAgICAgICAgICAvLyBjYXNlICdwJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFBsYWluQ29sb3IoMHgwMDAwMDApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdoJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0cmlwZXMoJ2hvcml6b250YWwnLCAxKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAndic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdHJpcGVzKCd2ZXJ0aWNhbCcsIDEpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdpJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmludmVydCgpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdyJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJldmVyc2VTdHJpcGVzKCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5VG9nZ2xlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlIaWRlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlTaG93ZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93ICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMSwgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAwLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGl2aXNpb25zICggeCwgeSwgaW52ZXJ0ID0gdHJ1ZSApIHtcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgICB0bC50byh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHRoaXMuZHVyYXRpb24sIHsgeDogeCwgeTogeSwgZWFzZTogdGhpcy5lYXNlIH0sIDApO1xuXG4gICAgICAgIC8vIGlmICggaW52ZXJ0ICkge1xuICAgICAgICAvLyAgICAgdGwuYWRkKHRoaXMuaW52ZXJ0KCksIDApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHNldEJsYWNrTW9kZSAoKSB7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAxLjAsIGVhc2U6IHRoaXMuZWFzZSwgfSk7XG4gICAgfVxuXG4gICAgb25TcGFjZUhvbGQgKCB1UHJvZ3Jlc3MgKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLnZhbHVlID0gdVByb2dyZXNzO1xuICAgIH1cblxuICAgIG9uRW5kICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDI7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuc2V0KHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgeyB4OiAxLCB5OiAxLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgZHVyYXRpb24sIHsgdmFsdWU6IDAuMCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC5mcm9tVG8odGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10sIGR1cmF0aW9uLCB7IHZhbHVlOiAxLjggfSwgeyB2YWx1ZTogMC4wLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUludmVydCddLnZhbHVlID0gMC4wO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBvbkhpZGRlblVJICgpIHtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RGYWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQWJzdHJhY3RGYWNlLmpzIiwiY2xhc3MgUGFzcyB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lLCBmcmFnbWVudFNoYWRlciwgdmVydGV4U2hhZGVyLCB1bmlmb3JtcyA9IHt9ICl7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnRTaGFkZXI7XG5cdFx0dGhpcy52ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXhTaGFkZXI7XG5cblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMudW5pZm9ybXMgPSB7XG5cdFx0XHRyZXNvbHV0aW9uOiB7IHR5cGU6ICd2MicsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMSwgMSApIH0sXG5cdFx0XHR0aW1lOiB7IHR5cGU6ICdmJywgdmFsdWU6IDAgfSxcblx0XHRcdHRJbnB1dDogeyB0eXBlOiAndCcsIHZhbHVlOiBuZXcgVEhSRUUuVGV4dHVyZSgpLCBkZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHQuLi51bmlmb3Jtcyxcblx0XHR9O1xuXG5cdFx0dGhpcy5zaGFkZXIgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKGAuLi9zaGFkZXJzLyR7dGhpcy52ZXJ0ZXhTaGFkZXJ9YCksXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogcmVxdWlyZShgLi4vc2hhZGVycy8ke3RoaXMuZnJhZ21lbnRTaGFkZXJ9YCksXG5cdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdGZsYXRTaGFkaW5nOiB0cnVlLFxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlLFxuXHRcdFx0dHJhbnNwYXJlbnQ6IHRydWVcblx0XHR9KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL2NvcmUvUGFzcy5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvfi9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFdlYk1pZGkgZnJvbSAnd2VibWlkaSc7XG5cbmZ1bmN0aW9uIG1hcChuLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgcmV0dXJuICgobi1zdGFydDEpLyhzdG9wMS1zdGFydDEpKSooc3RvcDItc3RhcnQyKStzdGFydDI7XG59XG5cbmNsYXNzIE1pZGlDb250cm9sbGVyIHtcblxuXHRzdGF0aWMgc3RhcnQgKCBjb25maWcgKSB7XG5cdFx0TWlkaUNvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgTWlkaUNvbnRyb2xsZXIoY29uZmlnKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yICggY29uZmlnICkge1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG5cdFx0dGhpcy5wYWRzID0ge307XG5cdFx0dGhpcy5rbm9icyA9IHt9O1xuXG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSA6OnRoaXMub25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IDo6dGhpcy5vbkVycm9yO1xuXHRcdHRoaXMub25NZXNzYWdlID0gOjp0aGlzLm9uTWVzc2FnZTtcblxuXHRcdFdlYk1pZGkuZW5hYmxlKCAoIGVyciApID0+IHtcblx0XHRcdGlmICggZXJyICkge1xuXHRcdFx0XHR0aGlzLm9uRXJyb3IoZXJyKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vblN1Y2Nlc3MoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlcXVlc3RBY2Nlc3MgKCkge1xuICAgICAgICBpZiAoIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcyApIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcyh7XG4gICAgICAgICAgICAgICAgc3lzZXg6IGZhbHNlXG4gICAgICAgICAgICB9KS50aGVuKHRoaXMub25TdWNjZXNzLCB0aGlzLm9uRXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoYFlvdSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgTUlESSBBUEkuYCk7XG4gICAgICAgIH1cblx0fVxuXG5cdG9uU3VjY2VzcyAoKSB7XG5cdFx0aWYgKCBXZWJNaWRpLmlucHV0cy5sZW5ndGggPiAwICkge1xuXG5cdFx0XHR0aGlzLmlucHV0ID0gV2ViTWlkaS5pbnB1dHNbMF07XG5cblx0XHRcdHRoaXMucGFyc2VDb25maWcoKTtcblxuXHRcdFx0dGhpcy5pbnB1dC5hZGRMaXN0ZW5lcignbm90ZW9uJywgJ2FsbCcsICggZSApID0+IHtcblx0XHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucGFkcyk7XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBrZXlzW2ldO1xuXHRcdFx0XHRcdGNvbnN0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLnBhZHNba2V5XTtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBqID0gMDsgaiA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBqKysgKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IG51bWJlciwgY2hhbm5lbCwgY2FsbGJhY2sgfSA9IHN1YnNjcmlwdGlvbnNbal07XG5cblx0XHRcdFx0XHRcdGlmICggZS5ub3RlLm51bWJlciA9PT0gbnVtYmVyICkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayh7IHZlbG9jaXR5OiBlLnZlbG9jaXR5IH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuaW5wdXQuYWRkTGlzdGVuZXIoJ3BpdGNoYmVuZCcsICdhbGwnLCAoIGUgKSA9PiB7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC5hZGRMaXN0ZW5lcignY29udHJvbGNoYW5nZScsICdhbGwnLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtub2JzKTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGtleXNbaV07XG5cdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaXB0aW9ucyA9IHRoaXMua25vYnNba2V5XTtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBqID0gMDsgaiA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBqKysgKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IG51bWJlciwgY2hhbm5lbCwgY2FsbGJhY2sgfSA9IHN1YnNjcmlwdGlvbnNbal07XG5cblx0XHRcdFx0XHRcdGlmICggZS5jb250cm9sbGVyLm51bWJlciA9PT0gbnVtYmVyICkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IG1hcChlLnZhbHVlLCAwLCAxMjcsIDAsIDEpO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayh2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZUNvbmZpZyAoKSB7XG5cdFx0Ly8gdGhpcy5wYWRzID0gdGhpcy5jb25maWcucGFkcztcblx0XHQvLyB0aGlzLmtub2JzID0gdGhpcy5jb25maWcua25vYnM7XG5cdH1cblxuXHRvbkVycm9yICggZXJyb3IgKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgTWlkaUNvbnRyb2xsZXIgOjogZXJyb3Igd2hpbGUgcmVxdWVzdGluZyBNSURJIGFjY2Vzcy5gKTtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuXHR9XG5cblx0b25NZXNzYWdlICggZXZlbnQgKSB7XG5cdFx0Y29uc29sZS5sb2coYE1pZGlDb250cm9sbGVyIDo6IG9uTWVzc2FnZWAsIGV2ZW50KTtcblx0fVxuXG5cdHN0YXRpYyBvblBhZERvd24gKCBpZCwgY2FsbGJhY2sgKSB7XG5cdFx0Y29uc3QgeyBpbnN0YW5jZSB9ID0gTWlkaUNvbnRyb2xsZXI7XG5cblx0XHRpbnN0YW5jZS5yZWdpc3RlclBhZChpZCwgY2FsbGJhY2spO1xuXHR9XG5cblx0c3RhdGljIG9uS25vYkNoYW5nZSAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRjb25zdCB7IGluc3RhbmNlIH0gPSBNaWRpQ29udHJvbGxlcjtcblxuXHRcdGluc3RhbmNlLnJlZ2lzdGVyS25vYihpZCwgY2FsbGJhY2spO1xuXHR9XG5cblx0cmVnaXN0ZXJQYWQgKCBpZCwgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCAhdGhpcy5wYWRzW2lkXSApIHtcblx0XHRcdHRoaXMucGFkc1tpZF0gPSBbXTtcblx0XHR9XG5cblx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmZpbmROdW1iZXJJblBhZHMoaWQpO1xuXG5cdFx0aWYgKCBudW1iZXIgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0dGhpcy5wYWRzW2lkXS5wdXNoKHsgY2FsbGJhY2ssIG51bWJlciB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlkaUNvbnRyb2xsZXIgOjogb25QYWREb3duICR7aWR9IDo6IGNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uYCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYFBhZCAke2lkfSBub3QgcmVnaXN0ZXJlZCBpbiBjb25maWdgKTtcblx0XHR9XG5cdH1cblxuXHRyZWdpc3Rlcktub2IgKCBpZCwgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCAhdGhpcy5rbm9ic1tpZF0gKSB7XG5cdFx0XHR0aGlzLmtub2JzW2lkXSA9IFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZmluZE51bWJlckluS25vYnMoaWQpO1xuXG5cdFx0aWYgKCBudW1iZXIgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0dGhpcy5rbm9ic1tpZF0ucHVzaCh7IGNhbGxiYWNrLCBudW1iZXIgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pZGlDb250cm9sbGVyIDo6IG9uS25vYkNoYW5nZSAke2lkfSA6OiBjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvbmApO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihgTWlkaUNvbnRyb2xsZXI6IEtub2IgJHtpZH0gbm90IHJlZ2lzdGVyZWQgaW4gY29uZmlnYCk7XG5cdFx0fVxuXHR9XG5cblx0ZmluZE51bWJlckluUGFkcyAoIGlkICkge1xuXHRcdGNvbnN0IHsgcGFkcyB9ID0gdGhpcy5jb25maWc7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYWRzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0aWYgKCBwYWRzW2ldLmlkID09PSBpZCApIHtcblx0XHRcdFx0cmV0dXJuIHBhZHNbaV0ubnVtYmVyO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZpbmROdW1iZXJJbktub2JzICggaWQgKSB7XG5cdFx0Y29uc3QgeyBrbm9icyB9ID0gdGhpcy5jb25maWc7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBrbm9icy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGlmICgga25vYnNbaV0uaWQgPT09IGlkICkge1xuXHRcdFx0XHRyZXR1cm4ga25vYnNbaV0ubnVtYmVyO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlkaUNvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9NaWRpQ29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCAobiwgc3RhcnQxLCBzdG9wMSwgc3RhcnQyLCBzdG9wMikge1xuICAgIHJldHVybiAoKG4gLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSkgKiAoc3RvcDIgLSBzdGFydDIpICsgc3RhcnQyO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL21hcC5qcyIsIi8vIHNvdXJjZWQgZnJvbTpcbi8vIGh0dHA6Ly93d3cubGVhbmJhY2twbGF5ZXIuY29tL3Rlc3QvaDVtdC5odG1sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtbWltZS9ibG9iL21hc3Rlci90eXBlcy5qc29uXG52YXIgbWltZVR5cGVzID0gcmVxdWlyZSgnLi9taW1lLXR5cGVzLmpzb24nKVxuXG52YXIgbWltZUxvb2t1cCA9IHt9XG5PYmplY3Qua2V5cyhtaW1lVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICB2YXIgZXh0ZW5zaW9ucyA9IG1pbWVUeXBlc1trZXldXG4gIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0KSB7XG4gICAgbWltZUxvb2t1cFtleHRdID0ga2V5XG4gIH0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvb2t1cCAoZXh0KSB7XG4gIGlmICghZXh0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgZXh0ZW5zaW9uIHN0cmluZycpXG4gIGlmIChleHQuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgZXh0ID0gZXh0LnN1YnN0cmluZygxKVxuICB9XG4gIHJldHVybiBtaW1lTG9va3VwW2V4dC50b0xvd2VyQ2FzZSgpXVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb25cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmbikge1xuICB2YXIgc3RyaW5nID0gdG9TdHJpbmcuY2FsbChmbilcbiAgcmV0dXJuIHN0cmluZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fFxuICAgICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgc3RyaW5nICE9PSAnW29iamVjdCBSZWdFeHBdJykgfHxcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgLy8gSUU4IGFuZCBiZWxvd1xuICAgICAoZm4gPT09IHdpbmRvdy5zZXRUaW1lb3V0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmFsZXJ0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmNvbmZpcm0gfHxcbiAgICAgIGZuID09PSB3aW5kb3cucHJvbXB0KSlcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXVkaW9Db250ZXh0XG5mdW5jdGlvbiBjcmVhdGVBdWRpb0NvbnRleHQgKCkge1xuICB2YXIgQXVkaW9DdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gIHJldHVybiBuZXcgQXVkaW9DdG9yKClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9hdWRpby1jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxudmFyIGF1ZGlvXG5cbm1vZHVsZS5leHBvcnRzID0gaXNTcmNQbGF5YWJsZVxuZnVuY3Rpb24gaXNTcmNQbGF5YWJsZSAoc3JjKSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzcmMgY2Fubm90IGJlIGVtcHR5JylcbiAgdmFyIHR5cGVcbiAgaWYgKHR5cGVvZiBzcmMuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gPHNvdXJjZT4gZWxlbWVudFxuICAgIHR5cGUgPSBzcmMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3JjID09PSAnc3RyaW5nJykge1xuICAgIC8vICdmb28ubXAzJyBzdHJpbmdcbiAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uKHNyYylcbiAgICBpZiAoZXh0KSB0eXBlID0gbG9va3VwKGV4dClcbiAgfSBlbHNlIHtcbiAgICAvLyB7IHNyYzogJ2Zvby5tcDMnLCB0eXBlOiAnYXVkaW8vbXBlZzsgY29kZWNzLi4nfVxuICAgIHR5cGUgPSBzcmMudHlwZVxuICB9XG5cbiAgLy8gV2UgaGF2ZSBhbiB1bmtub3duIGZpbGUgZXh0ZW5zaW9uIG9yXG4gIC8vIGEgPHNvdXJjZT4gdGFnIHdpdGhvdXQgYW4gZXhwbGljaXQgdHlwZSxcbiAgLy8ganVzdCBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0IVxuICBpZiAoIXR5cGUpIHJldHVybiB0cnVlXG5cbiAgLy8gaGFuZGxlIFwibm9cIiBlZGdlIGNhc2Ugd2l0aCBzdXBlciBsZWdhY3kgYnJvd3NlcnMuLi5cbiAgLy8gaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9mb3J1bS8jIXRvcGljL2dvb2dsZS13ZWItdG9vbGtpdC1jb250cmlidXRvcnMvYThVeTBiWHExSG9cbiAgaWYgKCFhdWRpbykgYXVkaW8gPSBuZXcgd2luZG93LkF1ZGlvKClcbiAgdmFyIGNhbnBsYXkgPSBhdWRpby5jYW5QbGF5VHlwZSh0eXBlKS5yZXBsYWNlKC9uby8sICcnKVxuICByZXR1cm4gQm9vbGVhbihjYW5wbGF5KVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVFcnJvciA9IGNyZWF0ZUVycm9yXG5mdW5jdGlvbiBjcmVhdGVFcnJvciAoc291cmNlcykge1xuICAvLyBBbGwgc291cmNlcyBhcmUgdW5wbGF5YWJsZVxuICB2YXIgZXJyID0gbmV3IEVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhbnkgb2YgdGhlIGZvbGxvd2luZyBzb3VyY2VzOlxcbiAgICAnICtcbiAgICAgIHNvdXJjZXMuam9pbignLCAnKSArICdcXG4nICtcbiAgICAgICdUcnkgdXNpbmcgYW4gYXJyYXkgb2YgT0dHLCBNUDMgYW5kIFdBVi4nKVxuICBlcnIudHlwZSA9ICdBVURJT19GT1JNQVQnXG4gIHJldHVybiBlcnJcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uIChkYXRhKSB7XG4gIHZhciBleHRJZHggPSBkYXRhLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGV4dElkeCA8PSAwIHx8IGV4dElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiBkYXRhLnN1YnN0cmluZyhleHRJZHggKyAxKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2Nhbi1wbGF5LXNyYy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXVkaW9Db250ZXh0KSB7XG4gIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnICYmXG4gICAgICB0eXBlb2YgYXVkaW9Db250ZXh0LnJlc3VtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGF1ZGlvQ29udGV4dC5yZXN1bWUoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvcmVzdW1lLWNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9hZGRpdGl2ZS5mc1wiOiA2MCxcblx0XCIuL2Jhc2ljLnZzXCI6IDYxLFxuXHRcIi4vYmxvb20uZnNcIjogNjIsXG5cdFwiLi9ibG9vbTIuZnNcIjogNjMsXG5cdFwiLi9ibG9vbXRlc3QuZnNcIjogNjQsXG5cdFwiLi9ib3gtYmx1ci5mc1wiOiA2NSxcblx0XCIuL2NvcHkuZnNcIjogNjYsXG5cdFwiLi9jdXN0b20uZnNcIjogNjcsXG5cdFwiLi9kb2YuZnNcIjogNjgsXG5cdFwiLi9meGFhLmZzXCI6IDY5LFxuXHRcIi4vZ2F1c3NpYW4uZnNcIjogNzAsXG5cdFwiLi9ub2lzZS5mc1wiOiA3MSxcblx0XCIuL3JhZGlhbC1ibHVyLmZzXCI6IDcyLFxuXHRcIi4vc2VwaWEuZnNcIjogNzMsXG5cdFwiLi9zc2FvLmZzXCI6IDc0XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycyBeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCByYW5kb21Gcm9tQXJyYXkgZnJvbSAnLi91dGlscy9yYW5kb21Gcm9tQXJyYXknO1xuaW1wb3J0IGx1Y2t5IGZyb20gJy4vdXRpbHMvbHVja3knO1xuaW1wb3J0IG1hcCBmcm9tICcuL3V0aWxzL21hcCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgTWlkaUNvbnRyb2xsZXIgZnJvbSAnLi91dGlscy9NaWRpQ29udHJvbGxlcic7XG5cbmNsYXNzIEZhY2VzQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHRoaXMuZmFjZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmxvd2tpY2tlZCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmxhY2tNb2RlID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NhbGVNb2RlID0gMDtcblxuICAgICAgICAvLyBvbiBldmVudHNcbiAgICAgICAgdGhpcy5vbkxvd0tpY2sgPSA6OnRoaXMub25Mb3dLaWNrO1xuICAgICAgICB0aGlzLm9uTWlkZGxlS2ljayA9IDo6dGhpcy5vbk1pZGRsZUtpY2s7XG4gICAgICAgIHRoaXMub25IaWdoS2ljayA9IDo6dGhpcy5vbkhpZ2hLaWNrO1xuICAgICAgICB0aGlzLm9uVHJlbW9sbyA9IDo6dGhpcy5vblRyZW1vbG87XG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG5cbiAgICAgICAgLy8gYmxhY2sgbW9kZXNcbiAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCA9IDo6dGhpcy5ibGFja01vZGVWZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVIb3Jpem9udGFsID0gOjp0aGlzLmJsYWNrTW9kZUhvcml6b250YWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSA9IDo6dGhpcy5ibGFja01vZGVCb3R0b207XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCA9IDo6dGhpcy5ibGFja01vZGVGdWxsO1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVhY3Rpb25zXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zID0gOjogdGhpcy51cGRhdGVEaXZpc2lvbnM7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlID0gOjp0aGlzLnNldEJsYWNrTW9kZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSA9IDo6dGhpcy5jaGFuZ2VTY2FsZTtcblxuICAgICAgICB0aGlzLnJlYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zLFxuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVggPSA6OnRoaXMuY2hhbmdlU2NhbGVYO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWSA9IDo6dGhpcy5jaGFuZ2VTY2FsZVk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGVCb3RoID0gOjp0aGlzLmNoYW5nZVNjYWxlQm90aDtcblxuICAgICAgICAvLyBzY2FsZXNcbiAgICAgICAgdGhpcy5zY2FsaW5ncyA9IFtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVZLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVgsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlQm90aCxcbiAgICAgICAgXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkxPV0tJQ0ssIHRoaXMub25Mb3dLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLk1JRERMRUtJQ0ssIHRoaXMub25NaWRkbGVLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkhJR0hLSUNLLCB0aGlzLm9uSGlnaEtpY2spO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuVFJFTU9MTywgdGhpcy5vblRyZW1vbG8pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcblxuICAgICAgICAvLyB0aGlzLnVwZGF0ZURpdmlzaW9ucyA9IGRlYm91bmNlKHRoaXMudXBkYXRlRGl2aXNpb25zLCA0MDApO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVNjYWxlID0gZGVib3VuY2UodGhpcy5jaGFuZ2VTY2FsZSwgNDAwKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCbGFja01vZGUgPSBkZWJvdW5jZSh0aGlzLnNldEJsYWNrTW9kZSwgNDAwKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuXG4gICAgICAgIE1pZGlDb250cm9sbGVyLm9uUGFkRG93bigxLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAtdGhpcy5zcGVlZENvbnRhaW5lcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oNiwgKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5pbnZlcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMSwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3BlZWRDb250YWluZXIgPCAwID8gLTEgOiAxO1xuXG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gdmFsdWUgKiAyICogZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMiwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB2YWx1ZSAqIDEyO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlZ2lzdGVyICggaWQsIGZhY2UgKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbaWRdID0gZmFjZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGZhY2UpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGl2aXNpb25zICggbWluLCBtYXgsIGJldHdlZW4gPSA0ICkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbnMgPSBbMF07XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpKz0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtYXg7IGkgPj0gbWluOyBpLT0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2aXNpb25zLnB1c2goMCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdmlzaW9ucztcbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWCA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy54LCB0aGlzLmRpdmlzaW9ucy5sYXN0WCwgOCk7XG4gICAgICAgIGNvbnN0IHJkbVhJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25YLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWCA9IHBvc3NpYmxlRGl2aXNpb25YW3JkbVhJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFggPSB0aGlzLmRpdmlzaW9ucy54LmluZGV4T2YoZGl2aXNpb25YKTtcblxuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWSA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy55LCB0aGlzLmRpdmlzaW9ucy5sYXN0WSwgOCk7XG4gICAgICAgIGNvbnN0IHJkbVlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25ZLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWSA9IHBvc3NpYmxlRGl2aXNpb25ZW3JkbVlJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFkgPSB0aGlzLmRpdmlzaW9ucy55LmluZGV4T2YoZGl2aXNpb25ZKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0udXBkYXRlRGl2aXNpb25zKGRpdmlzaW9uWCwgZGl2aXNpb25ZLCB0aGlzLmFsbG93SW52ZXJ0KSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0uc2V0U3RyaXBlcygnaG9yaXpvbnRhbCcsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kRGl2aXNpb25zICggYWxsLCBjdXJyZW50LCByYW5nZSApIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gYWxsLm1hcCggKCBkaXZpc2lvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICggaW5kZXggPiBjdXJyZW50IC0gcmFuZ2UgJiYgaW5kZXggPCBjdXJyZW50ICsgcmFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdmlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLmZpbHRlciggKCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGl2aXNpb25zO1xuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBkYXRhICkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCB8fCB3aW5kb3cuc291bmRFbmRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXkgPT09ICdkJyApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ2UnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAneCcgKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gIXRoaXMuc3BlZWRDb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvd0tpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJkbSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgaWYgKCByZG0gPiAwLjYgfHwgIXRoaXMubG93a2lja2VkICkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmICggcmRtID4gMC4yICkge1xuICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvd2tpY2tlZCsrO1xuICAgIH1cblxuICAgIG9uSGlnaEtpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAxLjE7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhpZ2hraWNrZWQgJSAyID09PSAwICkge1xuICAgICAgICAgICAgdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5oaWdoa2lja2VkKys7XG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMywgOSwgMiksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDEsIDEzLCAyKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcblxuICAgICAgICAvLyBjb25zdCByZWFjdGlvbiA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnJlYWN0aW9ucyk7XG4gICAgICAgIC8vIHJlYWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25NaWRkbGVLaWNrICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01JRERMRUtJQ0snKTtcbiAgICB9XG5cbiAgICBvblRyZW1vbG8gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnVHJlbW9sb29vbycpO1xuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5FTkQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLm9uRW5kKCksIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCbGFja01vZGUgKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCbGFja01vZGUrKztcblxuICAgICAgICBpZiAoIHRoaXMuY3VycmVudEJsYWNrTW9kZSA+IHRoaXMuYmxhY2tNb2Rlcy5sZW5ndGggLSAxICkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmxhY2tNb2RlID0gMDtcbiAgICAgICAgfVxuIFxuICAgICAgICBjb25zdCBibGFja01vZGUgPSB0aGlzLmJsYWNrTW9kZXNbdGhpcy5jdXJyZW50QmxhY2tNb2RlXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGJsYWNrTW9kZSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCBvcHRpb25zW2tleV0gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5oaWRlKCksIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnNob3coKSwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0uc2V0QmxhY2tNb2RlKCksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBibGFja01vZGVWZXJ0aWNhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlSG9yaXpvbnRhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsVG9wICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMSxcbiAgICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBibGFja01vZGVUdW5uZWxCb3R0b20gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUJvdHRvbSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlRnVsbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGUgKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2FsZU1vZGUrK1xuXG4gICAgICAgIGlmICggdGhpcy5jdXJyZW50U2NhbGVNb2RlID4gdGhpcy5zY2FsaW5ncy5sZW5ndGggLSAxICkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NhbGVNb2RlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsaW5nc1t0aGlzLmN1cnJlbnRTY2FsZU1vZGVdO1xuXG4gICAgICAgIHNjYWxlKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGVYICgpIHtcbiAgICAgICAgY29uc3QgdG8gPSBNYXRoLm1heCgwLjUsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSAqIDAuMSk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiB0bywgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlWSAoKSB7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgoMC41LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKiAwLjEpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuY29udGFpbmVyLnNjYWxlLCAwLjMsIHsgeTogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZUJvdGggKCkge1xuICAgICAgICBjb25zdCB0byA9IE1hdGgubWF4KDAuNSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICogMC4xKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmNvbnRhaW5lci5zY2FsZSwgMC4zLCB7IHg6IHRvLCB5OiB0bywgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIG9uVUlIaWRkZW4gKCkge1xuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLnNob3coKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlc1trZXldLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGl2aXNpb25zID0ge1xuICAgICAgICAgICAgeDogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlSG9yaXpvbnRhbCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlQm90dG9tLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxUb3AsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbEJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCxcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMS4wO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyc3RTcGFjZVVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlnaGtpY2tlZCA9IDA7XG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMudGltZSArPSB0aGlzLmZhY3RvciAqIHRoaXMuc3BlZWQgKiAwLjEgKiB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb250YWluZXIucm90YXRpb24ueiArPSB0aGlzLmZhY3RvciAqIHRoaXMuc3BlZWRDb250YWluZXIgKiAwLjAwNTtcblxuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWyd0b3AnXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICYmIHRoaXMuaXNTcGFjZURvd24gJiYgdGhpcy5maXJzdFNwYWNlVXAgKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuZmFjdG9yID0gLXRoaXMuZmFjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RTcGFjZVVwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICYmICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IGRhdGE7XG5cbiAgICAgICAgY29uc3QgdVByb2dyZXNzID0gbWFwKHByb2dyZXNzLCAwLCAxLCAwLCAxLjgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5vblNwYWNlSG9sZCh1UHJvZ3Jlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgLy8gdGhpcy5zcGVlZCA9IDEyLjA7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcywgMSwgeyBzcGVlZDogMTIsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXNDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vRmFjZXNDb250cm9sbGVyLmpzIiwiLyoqXG4gKiBNb3VzZSBNYW5hZ2VyXG4gKi9cblxuY2xhc3MgTW91c2VNYW5hZ2VyIHtcblxuXG4gICAgc3RhdGljIHN0YXJ0KCBjaGVja01vdXNlU3BlZWQgPSBmYWxzZSApIHtcblxuICAgICAgICAvLyBzcGVlZFxuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFkgPSAwO1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFkgPSAwO1xuXG4gICAgICAgIC8vIGRpcmVjdGlvblxuICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDA7XG5cbiAgICAgICAgLy8gcG9zaXRpb25cbiAgICAgICAgd2luZG93Lm1vdXNlWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZVkgPSAwO1xuXG4gICAgICAgIGlmKGNoZWNrTW91c2VTcGVlZCkgd2luZG93LnNldEludGVydmFsKCBNb3VzZU1hbmFnZXIuZ2V0U3BlZWQsIDMwICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIE1vdXNlTWFuYWdlci5tb3ZlICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1vdmUoZSkge1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgIHdpbmRvdy5tb3VzZVkgPSBlLmNsaWVudFk7XG5cbiAgICAgICAgTW91c2VNYW5hZ2VyLmdldERpcmVjdGlvbihlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGlyZWN0aW9uKGUpIHtcblxuICAgICAgICAvLyB4XG4gICAgICAgIGlmICh3aW5kb3cubW91c2VYIDwgZS5wYWdlWClcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAxO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubW91c2VYID4gZS5wYWdlWClcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAtMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDA7XG5cbiAgICAgICAgLy8geVxuICAgICAgICBpZiAod2luZG93Lm1vdXNlWSA8IGUucGFnZVkpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm1vdXNlWSA+IGUucGFnZVkpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gLTE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAwO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTcGVlZCgpIHtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRYID0gd2luZG93Lm1vdXNlWCAtIHdpbmRvdy5tb3VzZUxhc3RYO1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFkgPSB3aW5kb3cubW91c2VZIC0gd2luZG93Lm1vdXNlTGFzdFk7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFggPSB3aW5kb3cubW91c2VYO1xuICAgICAgICB3aW5kb3cubW91c2VMYXN0WSA9IHdpbmRvdy5tb3VzZVk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3VzZU1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9Nb3VzZU1hbmFnZXIuanMiLCJjb25zdCBjb25maWcgPSB7XG4gICAgcGFkczogW1xuICAgICAgICB7IGlkOiAxLCBudW1iZXI6IDQ0IH0sXG4gICAgICAgIHsgaWQ6IDIsIG51bWJlcjogNDUgfSxcbiAgICAgICAgeyBpZDogMywgbnVtYmVyOiA0NiB9LFxuICAgICAgICB7IGlkOiA0LCBudW1iZXI6IDQ3IH0sXG4gICAgICAgIHsgaWQ6IDUsIG51bWJlcjogNDggfSxcbiAgICAgICAgeyBpZDogNiwgbnVtYmVyOiA0OSB9LFxuICAgICAgICB7IGlkOiA3LCBudW1iZXI6IDUwIH0sXG4gICAgICAgIHsgaWQ6IDgsIG51bWJlcjogNTEgfSxcbiAgICBdLFxuICAgIGtub2JzOiBbXG4gICAgICAgIHsgaWQ6IDEsIG51bWJlcjogMSB9LFxuICAgICAgICB7IGlkOiAyLCBudW1iZXI6IDIgfSxcbiAgICAgICAgeyBpZDogMywgbnVtYmVyOiAzIH0sXG4gICAgICAgIHsgaWQ6IDQsIG51bWJlcjogNCB9LFxuICAgICAgICB7IGlkOiA1LCBudW1iZXI6IDUgfSxcbiAgICAgICAgeyBpZDogNiwgbnVtYmVyOiA2IH0sXG4gICAgICAgIHsgaWQ6IDcsIG51bWJlcjogNyB9LFxuICAgICAgICB7IGlkOiA4LCBudW1iZXI6IDggfSxcbiAgICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9jb25maWcvTVBLTWluaS5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIEtleWJvYXJkQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgIG9uS2V5VXAgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHsga2V5IH0pO1xuXG4gICAgICAgIGlmICgga2V5ID09PSAnICcgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFVVApO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04pO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHsga2V5IH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnYmFja2dyb3VuZCcpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQmFja2dyb3VuZC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBCb3R0b20gZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JvdHRvbScpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygtMywgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMS4wO1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnMic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzMnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMSc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3R0b207XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgTGVmdCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnbGVmdCcpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc0JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMSc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICczJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIFJpZ2h0IGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdyaWdodCcsIFRIUkVFLkJhY2tTaWRlKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTIwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc2JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMSc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICczJztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9SaWdodC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBUb3AgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ3RvcCcsIFRIUkVFLkJhY2tTaWRlKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygyMCwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAxLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzgnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICczJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzEnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvVG9wLmpzIiwiaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICd3ZWItYXVkaW8tcGxheWVyJztcbmltcG9ydCBjcmVhdGVBbmFseXNlciBmcm9tICd3ZWItYXVkaW8tYW5hbHlzZXInO1xuaW1wb3J0IGF2ZXJhZ2UgZnJvbSAnYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UnO1xuaW1wb3J0IFJhbmdlIGZyb20gJy4vUmFuZ2UnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcblxuY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuLy8gY29uc3QgYXVkaW9Db250ZXh0ID0gQXVkaW9Db250ZXh0ID8gbmV3IEF1ZGlvQ29udGV4dCgpIDogbnVsbDtcblxuY2xhc3MgU291bmRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5iYXNzID0gMDtcbiAgICAgICAgdGhpcy5taWRCYXNzID0gMDtcbiAgICAgICAgdGhpcy52b2ljZSA9IDA7XG4gICAgICAgIHRoaXMuZHJ1bSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmFzc2V0cyA9ICdhc3NldHMvc291bmRzJztcbiAgICAgICAgdGhpcy5zb3VyY2VzID0ge1xuICAgICAgICAgICAgaW50cm86ICdpbnRyby5tcDMnLFxuICAgICAgICAgICAgeHA6ICd4cC5tcDMnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSA6OnRoaXMuc3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG5cbiAgICAgICAgdGhpcy5pbml0U291bmQoKTtcbiAgICAgICAgLy8gdGhpcy5pbml0R3VpKCk7XG5cbiAgICAgICAgY29uc3QgbG93S2ljayA9IG5ldyBSYW5nZSgnbG93S2ljaycsIFsxMTAsIDEzMF0sIDYwMCwgRXZlbnRzLlNPVU5EUy5MT1dLSUNLKTtcbiAgICAgICAgY29uc3QgbWlkZGxlS2ljayA9IG5ldyBSYW5nZSgnbWlkZGxlS2ljaycsIFsyNzAsIDI5MF0sIDYwMCwgRXZlbnRzLlNPVU5EUy5NSURETEVLSUNLLCAwLjMpO1xuICAgICAgICBjb25zdCB0cmVtb2xvID0gbmV3IFJhbmdlKCd0cmVtb2xvJywgWzQ4MCwgNTIwXSwgMTAwLCBFdmVudHMuU09VTkRTLlRSRU1PTE8pO1xuICAgICAgICBjb25zdCBoaWdoS2ljayA9IG5ldyBSYW5nZSgnaGlnaEtpY2snLCBbMTUwMCwgMzUwMF0sIDgwMCwgRXZlbnRzLlNPVU5EUy5ISUdIS0lDSywgMC41KTtcblxuICAgICAgICB0aGlzLnJhbmdlcyA9IFtsb3dLaWNrLCBoaWdoS2ljaywgdHJlbW9sbywgbWlkZGxlS2lja107XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLlNUQVJULCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB0aGlzLm9uU3BhY2VIb2xkKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCwgdGhpcy5vblNwYWNlVXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICB9XG5cbiAgICBpbml0R3VpICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZEd1aSA9IHdpbmRvdy5ndWkuYWRkRm9sZGVyKCdTb3VuZCcpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhdXNlID0gdGhpcy5zb3VuZEd1aS5hZGQodGhpcywgJ3BhdXNlJyk7XG4gICAgICAgIHBhdXNlLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlKSB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRTb3VuZCAoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc291cmNlcykubWFwKCAoIGtleSApID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldID0ge1xuICAgICAgICAgICAgICAgIGF1ZGlvOiBudWxsLFxuICAgICAgICAgICAgICAgIGFuYWx5c2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIG5vZGU6IG51bGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gMDtcbiAgICAgICAgICAgIGF1ZGlvLmNyb3NzT3JpZ2luID0gJ0Fub255bW91cyc7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBjcmVhdGVBbmFseXNlcihhdWRpbywgYXVkaW9Db250ZXh0LCB7IGF1ZGlibGU6IHRydWUsIHN0ZXJlbzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5ub2RlID0gYW5hbHlzZXIuYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuU09VTkRTLkNBTlBMQVksIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5FTkQsIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBgJHt0aGlzLmFzc2V0c30vJHt0aGlzLnNvdXJjZXNba2V5XX1gO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5hdWRpbyA9IGF1ZGlvO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICBpZiAoIHBsYXllci5sb2FkZWQgKSB7XG4gICAgICAgICAgICBwbGF5ZXIuYXVkaW8ucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnBsYXllcnNbJ3hwJ10ubG9hZGVkICkge1xuICAgICAgICAgICAgY29uc3QgeyBhbmFseXNlciwgbm9kZSB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgICAgICBjb25zdCBmcmVxcyA9IGFuYWx5c2VyLmZyZXF1ZW5jaWVzKCk7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucmFuZ2VzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBhdmVyYWdlKG5vZGUsIGZyZXFzLCByYW5nZS5mcmVxc1swXSwgcmFuZ2UuZnJlcXNbMV0pO1xuXG4gICAgICAgICAgICAgICAgcmFuZ2UudXBkYXRlKGxldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyB2b2x1bWUgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICBhdWRpby52b2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih2b2x1bWUgKiAwLjUsIDEpKTtcbiAgICB9XG5cbiAgICBvblNwYWNlRG93biAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNTcGFjZURvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhdWRpbyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHsgYXVkaW86IGludHJvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG4gICAgICAgIGNvbnN0IHsgYXVkaW86IHhwIH0gPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgeHAudm9sdW1lID0gMTtcbiAgICAgICAgeHAucGxheSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIHRsLnRvKGludHJvLCAwLjUsIHsgdm9sdW1lOiAwLCBlYXNlOiBFeHBvLmVhc2VPdXQsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIGludHJvLnBhdXNlKCk7XG4gICAgICAgIH19KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291bmRNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvU291bmRNYW5hZ2VyLmpzIiwidmFyIHF1ZXVlID0ge307XG5cbi8qXG4qKiBhbGxvdyBhbnkgbnVtYmVyIHZhcmlhYmxlIHRvIGJlIHNtb290aGVkXG4qIEBwYXJhbSB7c3RyaW5nfSBpZCAtIGEgdW5pcXVlIG5hbWUgZm9yIHlvdXIgc21vb3RoaW5nXG4qIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBiZSBzbW9vdGhlZFxuKiBAcGFyYW0ge251bWJlcn0gY29lZmYgKG9wdGlvbmFsKSAtIHRoZSBzbW9vdGhpbmcgY29lZmZpY2llbnQsIHRoZSBzbWFsbGVyLCB0aGUgc2xvd2VyLiBEZWZhdWx0OiAwLjFcbiogQHBhcmFtIHtib29sZWFufSBsb2cgKG9wdGlvbmFsKSAtIGVpdGhlciB0aGUgc21vb3RoZWQgdmFsdWUgaXMgbG9nIGluIHRoZSBjb25zb2xlLiBEZWZhdWx0OiBmYWxzZVxuKiBAcGFyYW0ge251bWJlcn0gaW5pdCAob3B0aW9uYWwpIC0gdGhlIHN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBzbW9vdGhpbmcuIERlZmF1bHQ6IDBcbiogQHJldHVybiB7bnVtYmVyfSB0aGUgc21vb3RoZWQgdmFsdWVcbioqL1xuXG5mdW5jdGlvbiBzbW9vdGggKCBpZCwgdmFsdWUsIGNvZWZmID0gMC4xLCBsb2cgPSBmYWxzZSwgaW5pdCA9IDAgKSB7XG5cdGlmICggcXVldWVbaWRdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0cXVldWVbaWRdICs9ICggdmFsdWUgLSBxdWV1ZVtpZF0gKSAqIGNvZWZmO1xuXG5cdFx0aWYgKCBsb2cgKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgJWNTbW9vdGggJHtpZH0gOjogJHtxdWV1ZVtpZF19YCwgJ2NvbG9yOiBibHVlOycpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQgPT09ICcnICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbW9vdGggOjogaWQgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuXHRcdH1cblxuXHRcdHF1ZXVlW2lkXSA9IGluaXQ7XG5cdH1cblxuXHRyZXR1cm4gcXVldWVbaWRdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc21vb3RoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vc21vb3RoLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIFVJIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy4kd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0taW50cm8nKTtcbiAgICAgICAgdGhpcy4kbG9nbyA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmludHJvX19sb2dvJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbiA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmludHJvX19hY3Rpb24nKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uTGFiZWwgPSB0aGlzLiRhY3Rpb24ucXVlcnlTZWxlY3RvcignLmFjdGlvbl9fbGFiZWwnKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uRmlsbCA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmFjdGlvbl9fZmlsbCcpO1xuICAgICAgICB0aGlzLiR0dXRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS10dXRvJyk7XG4gICAgICAgIHRoaXMuJGNyZWRpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLWNyZWRpdHMnKTtcbiAgICAgICAgdGhpcy4kY3JlZGl0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlZGl0c19faXRlbScpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0ZpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3Byb2dyZXNzX19maWxsJyk7XG4gICAgICAgIHRoaXMuJGhlbHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX2hlbHAnKTtcbiAgICAgICAgdGhpcy4kYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fYmFja2dyb3VuZCcpO1xuXG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhUaW1lID0gMzAwMDtcbiAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubWluRmlsbCA9IDAuMDE7XG4gICAgICAgIHRoaXMubWF4RmlsbCA9IDE7XG4gICAgICAgIHRoaXMuZmlsbCA9IHRoaXMubWluRmlsbDtcblxuICAgICAgICB0aGlzLnZvbHVtZSA9IDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDU7XG5cbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gOjp0aGlzLm9uQ29tcGxldGU7XG5cbiAgICAgICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24sIHsgdm9sdW1lOiAxLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHByb2dyZXNzRmlsbCwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDEpYCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRsb2dvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMS41LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgcHJvZ3Jlc3M6IDEsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjI1KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiR0dXRvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuNzUsIHsgY3NzOiB7IHNjYWxlOiAxLjUgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjI1KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiR0dXRvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNzUpO1xuICAgICAgICB0aGlzLnRsLnNldCh0aGlzLCB7IHByb2dyZXNzOiAwIH0pO1xuICAgICAgICAvLyB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IHByb2dyZXNzOiAwLjQ0LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgdGhpcy5kdXJhdGlvbiAqIDAuOTgpO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IDo6dGhpcy5vbktleURvd247XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uU3BhY2VEb3duID0gOjp0aGlzLm9uU3BhY2VEb3duO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25FbmRYUCA9IDo6dGhpcy5vbkVuZFhQO1xuICAgICAgICB0aGlzLm9uQ2xpY2tIZWxwID0gOjp0aGlzLm9uQ2xpY2tIZWxwO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWURPV04sIHRoaXMub25LZXlEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuRU5ELCB0aGlzLm9uRW5kWFApO1xuXG4gICAgICAgIHRoaXMudGxIZWxwU2hvdyA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0aGlzLnRsSGVscFNob3cudG8odGhpcy4kdHV0bywgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRoaXMudGxIZWxwU2hvdy50byh0aGlzLiRiYWNrZ3JvdW5kLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHRoaXMudGxIZWxwSGlkZSA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGhpcy50bEhlbHBIaWRlLnRvKHRoaXMuJHR1dG8sIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRoaXMudGxIZWxwSGlkZS50byh0aGlzLiRiYWNrZ3JvdW5kLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHRoaXMuJGhlbHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tIZWxwKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB7IHByb2dyZXNzOiB0aGlzLnByb2dyZXNzLCB2b2x1bWU6IHRoaXMudm9sdW1lIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLiR3cmFwcGVyLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy4kd3JhcHBlciwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvbktleURvd24gKCBkYXRhICkge1xuXG4gICAgfVxuXG4gICAgb25LZXlVcCAoIGRhdGEgKSB7XG5cbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzRG93biAmJiAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSg0KTtcbiAgICAgICAgICAgIHRoaXMudGwucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc0Rvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSgxKTtcbiAgICAgICAgICAgIHRoaXMudGwucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZSAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcywgeyBwcm9ncmVzczogMCB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRjcmVkaXRJdGVtcywgeyBjc3M6IHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fSk7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kY3JlZGl0cywgeyBjc3M6IHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX0pO1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJHByb2dyZXNzRmlsbCwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDApYH19KTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGhlbHAsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5TVEFSVCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5Q3JlZGl0cyAoKSB7XG4gICAgICAgIHRoaXMuJGNyZWRpdHMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgdGhpcy4kYWN0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ0hvbGQgc3BhY2ViYXIgdG8gcmVzdGFydCc7XG5cbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRsLmtpbGwoKTtcbiAgICAgICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24sIHsgdm9sdW1lOiAxLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRhY3Rpb24sIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHByb2dyZXNzRmlsbCwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDEpYCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kY3JlZGl0cywgdGhpcy5kdXJhdGlvbiwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMS41LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiAqIDAuNSwgeyBwcm9ncmVzczogMSwgZWFzZTogRXhwby5lYXNlSW5PdXQgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNSk7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhlbHBJc09wZW4gKSB7XG4gICAgICAgICAgICB0aGlzLnRsSGVscEhpZGUucmVzdGFydCgpOyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAyO1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0bC5zdGFnZ2VyRnJvbVRvKEFycmF5LmZyb20odGhpcy4kY3JlZGl0SXRlbXMpLCBkdXJhdGlvbiwgeyBjc3M6IHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fSwgeyBjc3M6IHsgc2NhbGU6IDEuMCwgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgZHVyYXRpb24gKiAwLjA1LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kaGVscCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMucmVzZXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAyO1xuICAgIH1cblxuICAgIG9uRW5kWFAgKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlDcmVkaXRzKCk7XG4gICAgfVxuXG4gICAgb25DbGlja0hlbHAgKCBldmVudCApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMuaGVscElzT3BlbiApIHtcbiAgICAgICAgICAgIHRoaXMuJGhlbHAuaW5uZXJIVE1MID0gJ1gnO1xuXG4gICAgICAgICAgICB0aGlzLnRsSGVscFNob3cucmVzdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kaGVscC5pbm5lckhUTUwgPSAnPyc7XG5cbiAgICAgICAgICAgIHRoaXMudGxIZWxwSGlkZS5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91aS5qcyIsImltcG9ydCBDb3B5UGFzcyBmcm9tICcuL3Bhc3Nlcy9Db3B5UGFzcyc7XG5pbXBvcnQgUGFzcyBmcm9tICcuL2NvcmUvUGFzcyc7XG5cbmZ1bmN0aW9uIHJlbW92ZU5pbCAoIGFzID0gW10gKSB7XG4gICAgcmV0dXJuIGFzLmZpbHRlcihhID0+IGEgIT0gbnVsbCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlICguLi5hcmdzKSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSByZW1vdmVOaWwoYXJncyk7XG4gICAgXG4gICAgaWYgKCBmaWx0ZXJlZC5sZW5ndGggPCAxICkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIFxuICAgIGlmICggZmlsdGVyZWQubGVuZ3RoID09PSAxICkge1xuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWQucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhjdXIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgYWNjW2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBjdXJba2V5XSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgY3VyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IGN1cltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuXG5jbGFzcyBDb21wb3NlciB7XG5cblx0Y29uc3RydWN0b3IgKCByZW5kZXJlciwgb3B0cyA9IHt9ICkge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdFx0bWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXG5cdFx0XHRtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcblx0XHRcdHdyYXBTOiBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nLFxuXHRcdFx0d3JhcFQ6IFRIUkVFLkNsYW1wVG9FZGdlV3JhcHBpbmcsXG5cdFx0XHRmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCxcblx0XHRcdHR5cGU6IFRIUkVFLlVuc2lnbmVkQnl0ZVR5cGUsXG5cdFx0XHRzdGVuY2lsQnVmZmVyOiB0cnVlXG5cdFx0fTtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0cywgb3B0cyk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cblx0XHR0aGlzLmZyb250ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KDEsIDEsIG9wdGlvbnMpO1xuXHRcdHRoaXMuYmFjayA9IHRoaXMuZnJvbnQuY2xvbmUoKTtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIDEsIDEsIDEsIDEsIC0xMDAwMCwgMTAwMDApO1xuXG5cdFx0dGhpcy5kZWZhdWx0TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoKTtcblx0XHR0aGlzLnF1YWQgPSBuZXcgVEhSRUUuTWVzaChcblx0XHRcdG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAxLCAxICksXG5cdFx0XHR0aGlzLmRlZmF1bHRNYXRlcmlhbFxuXHRcdCk7XG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5xdWFkKTtcblxuXHRcdHRoaXMuY29weVBhc3MgPSBuZXcgQ29weVBhc3MoKTtcblxuXHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcblx0fVxuXG5cdHNldFNpemUgKCB3LCBoICkge1xuXHRcdHRoaXMud2lkdGggPSB3O1xuXHRcdHRoaXMuaGVpZ2h0ID0gaDtcblxuXHRcdHRoaXMuY2FtZXJhLnByb2plY3Rpb25NYXRyaXgubWFrZU9ydGhvZ3JhcGhpYyggdyAvIC0gMiwgdyAvIDIsIGggLyAyLCBoIC8gLSAyLCB0aGlzLmNhbWVyYS5uZWFyLCB0aGlzLmNhbWVyYS5mYXIgKTtcblx0XHR0aGlzLnF1YWQuc2NhbGUuc2V0KCB3LCBoLCAxICk7XG5cblx0XHR0aGlzLmZyb250LnNldFNpemUoIHcsIGggKTtcblx0XHR0aGlzLmJhY2suc2V0U2l6ZSggdywgaCApO1xuXHR9XG5cblx0c3dhcEJ1ZmZlcnMgKCkge1xuXHRcdHRoaXMub3V0cHV0ID0gdGhpcy53cml0ZTtcblx0XHR0aGlzLmlucHV0ID0gdGhpcy5yZWFkO1xuXG5cdFx0Y29uc3QgdGVtcCA9IHRoaXMud3JpdGU7XG5cdFx0dGhpcy53cml0ZSA9IHRoaXMucmVhZDtcblx0XHR0aGlzLnJlYWQgPSB0ZW1wO1xuXHR9XG5cblx0cGFzcyAoIHBhc3MsIHRhcmdldCApIHtcblx0XHRpZiAoIHBhc3MgaW5zdGFuY2VvZiBQYXNzICYmIHBhc3MuZW5hYmxlZCApIHtcblx0XHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHBhc3Muc2hhZGVyO1xuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsLnVuaWZvcm1zLnRJbnB1dC52YWx1ZSA9IHRoaXMucmVhZC50ZXh0dXJlO1xuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuXHRcdFx0aWYgKCB0YXJnZXQgKSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0YXJnZXQsIHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMud3JpdGUsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5zd2FwQnVmZmVycygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlciAoIHNjZW5lLCBjYW1lcmEsIHRhcmdldCApwqB7XG5cdFx0Y29uc3QgZGVzdCA9IHRhcmdldCA/IHRhcmdldCA6IHRoaXMud3JpdGU7XG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCBkZXN0LCB0cnVlKTtcblx0XHR0aGlzLnN3YXBCdWZmZXJzKCk7XG5cdH1cblxuXHRyZXNldCAoKSB7XG5cdFx0dGhpcy5yZWFkID0gdGhpcy5mcm9udDtcblx0XHR0aGlzLndyaXRlID0gdGhpcy5iYWNrO1xuXG5cdFx0dGhpcy5vdXRwdXQgPSB0aGlzLndyaXRlO1xuXHRcdHRoaXMuaW5wdXQgPSB0aGlzLnJlYWQ7XG5cdH1cblxuXHR0b1NjcmVlbiAoIHBhc3MsIHRhcmdldCApIHtcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSBwYXNzID8gcGFzcy5zaGFkZXIgOiB0aGlzLmNvcHlQYXNzLnNoYWRlcjtcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwudW5pZm9ybXMudElucHV0LnZhbHVlID0gdGhpcy5yZWFkLnRleHR1cmU7XG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xuXG5cdFx0aWYgKCB0YXJnZXQgKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGFyZ2V0LCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9Db21wb3Nlci5qcyIsImltcG9ydCBQYXNzIGZyb20gJy4uL2NvcmUvUGFzcyc7XG5cbmNsYXNzIEN1c3RvbVBhc3MgZXh0ZW5kcyBQYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yICggb3B0aW9ucyApIHtcbiAgICAgICAgc3VwZXIoJ0N1c3RvbVBhc3MnLCAnY3VzdG9tLmZzJywgJ2Jhc2ljLnZzJywgb3B0aW9ucyk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy51bmlmb3Jtcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlICs9IDAuMDE2O1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9wYXNzZXMvQ3VzdG9tUGFzcy5qcyIsImltcG9ydCBQYXNzIGZyb20gJy4uL2NvcmUvUGFzcyc7XG5cbmNsYXNzIEZYQUFQYXNzIGV4dGVuZHMgUGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCdGWEFBUGFzcycsICdmeGFhLmZzJywgJ2Jhc2ljLnZzJywge30pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGWEFBUGFzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vcGFzc2VzL0ZYQUFQYXNzLmpzIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBUSFJFRSApIHtcblx0LyoqXG5cdCAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG5cdCAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cblx0ICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cblx0ICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG5cdCAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cblx0ICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblx0ZnVuY3Rpb24gT3JiaXRDb250cm9scyggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHRcdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdFx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pblpvb20gPSAwO1xuXHRcdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHRcdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHRcdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHRcdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHRcdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdFx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHRcdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0XHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHRcdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0XHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0XHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHRcdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0XHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdFx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHRcdC8vIE1vdXNlIGJ1dHRvbnNcblx0XHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdFx0Ly8gZm9yIHJlc2V0XG5cdFx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0XHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdFx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0XHQvL1xuXHRcdC8vIHB1YmxpYyBtZXRob2RzXG5cdFx0Ly9cblxuXHRcdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9O1xuXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHRcdH07XG5cblx0XHQvL1xuXHRcdC8vIGludGVybmFsc1xuXHRcdC8vXG5cblx0XHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdFx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHRcdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdFx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdFx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdFx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHRcdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdFx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0XHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0XHR2YXIgc2NhbGUgPSAxO1xuXHRcdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0XHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdH1cblxuXHRcdC8vXG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdH07XG5cblx0T3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5cdE9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3JiaXRDb250cm9scztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyggT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRcdGNlbnRlcjoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdFx0bm9ab29tOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vUm90YXRlOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vUGFuOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vS2V5czoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9ICk7XG5cblx0cmV0dXJuIE9yYml0Q29udHJvbHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlcXVlbmN5VG9JbmRleCA9IHJlcXVpcmUoJ2F1ZGlvLWZyZXF1ZW5jeS10by1pbmRleCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlLmJpbmQobnVsbCwgMjU1KVxubW9kdWxlLmV4cG9ydHMuZmxvYXREYXRhID0gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlLmJpbmQobnVsbCwgMSlcblxuZnVuY3Rpb24gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlIChkaXYsIGFuYWx5c2VyLCBmcmVxdWVuY2llcywgbWluSHosIG1heEh6KSB7XG4gIHZhciBzYW1wbGVSYXRlID0gYW5hbHlzZXIuY29udGV4dC5zYW1wbGVSYXRlXG4gIHZhciBiaW5Db3VudCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50XG4gIHZhciBzdGFydCA9IGZyZXF1ZW5jeVRvSW5kZXgobWluSHosIHNhbXBsZVJhdGUsIGJpbkNvdW50KVxuICB2YXIgZW5kID0gZnJlcXVlbmN5VG9JbmRleChtYXhIeiwgc2FtcGxlUmF0ZSwgYmluQ291bnQpXG4gIHZhciBjb3VudCA9IGVuZCAtIHN0YXJ0XG4gIHZhciBzdW0gPSAwXG4gIGZvciAoOyBzdGFydCA8IGVuZDsgc3RhcnQrKykge1xuICAgIHN1bSArPSBmcmVxdWVuY2llc1tzdGFydF0gLyBkaXZcbiAgfVxuICByZXR1cm4gY291bnQgPT09IDAgPyAwIDogKHN1bSAvIGNvdW50KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhbXAgPSByZXF1aXJlKCdjbGFtcCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnJlcXVlbmN5VG9JbmRleFxuZnVuY3Rpb24gZnJlcXVlbmN5VG9JbmRleCAoZnJlcXVlbmN5LCBzYW1wbGVSYXRlLCBmcmVxdWVuY3lCaW5Db3VudCkge1xuICB2YXIgbnlxdWlzdCA9IHNhbXBsZVJhdGUgLyAyXG4gIHZhciBpbmRleCA9IE1hdGgucm91bmQoZnJlcXVlbmN5IC8gbnlxdWlzdCAqIGZyZXF1ZW5jeUJpbkNvdW50KVxuICByZXR1cm4gY2xhbXAoaW5kZXgsIDAsIGZyZXF1ZW5jeUJpbkNvdW50KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1ZGlvLWZyZXF1ZW5jeS10by1pbmRleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBSYW5nZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIG5hbWUsIGZyZXFzLCBkZWx0YSwgZXZlbnQsIG1pbkxldmVsID0gMC41ICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmZyZXFzID0gZnJlcXM7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmxldmVsID0gMDtcbiAgICAgICAgdGhpcy5taW5MZXZlbCA9IG1pbkxldmVsO1xuXG4gICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggbGV2ZWwgKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gRGF0ZS5ub3coKSAtIHRoaXMudGltZTtcblxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG5cbiAgICAgICAgaWYgKCBkZWx0YSA+IHRoaXMuZGVsdGEgJiYgdGhpcy5sZXZlbCA+IHRoaXMubWluTGV2ZWwgKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQodGhpcy5ldmVudCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICggdGhpcy5uYW1lID09PSAnaGlnaEtpY2snICkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9SYW5nZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVvdXRcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyksIHdhaXQpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL2RlYm91bmNlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbHVja3kgKCBjaGFuY2VzICkge1xuICAgIHJldHVybiAhfn4oTWF0aC5yYW5kb20oKSAqIGNoYW5jZXMpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvbHVja3kuanMiLCJpbXBvcnQgUGFzcyBmcm9tICcuLi9jb3JlL1Bhc3MnO1xuXG5jbGFzcyBDb3B5UGFzcyBleHRlbmRzIFBhc3Mge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcignQ29weVBhc3MnLCAnY29weS5mcycsICdiYXNpYy52cycpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29weVBhc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3Bhc3Nlcy9Db3B5UGFzcy5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt+fihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdWRpby9taWRpXCI6IFtcblx0XHRcIm1pZFwiLFxuXHRcdFwibWlkaVwiLFxuXHRcdFwia2FyXCIsXG5cdFx0XCJybWlcIlxuXHRdLFxuXHRcImF1ZGlvL21wNFwiOiBbXG5cdFx0XCJtcDRhXCIsXG5cdFx0XCJtNGFcIlxuXHRdLFxuXHRcImF1ZGlvL21wZWdcIjogW1xuXHRcdFwibXBnYVwiLFxuXHRcdFwibXAyXCIsXG5cdFx0XCJtcDJhXCIsXG5cdFx0XCJtcDNcIixcblx0XHRcIm0yYVwiLFxuXHRcdFwibTNhXCJcblx0XSxcblx0XCJhdWRpby9vZ2dcIjogW1xuXHRcdFwib2dhXCIsXG5cdFx0XCJvZ2dcIixcblx0XHRcInNweFwiXG5cdF0sXG5cdFwiYXVkaW8vd2VibVwiOiBbXG5cdFx0XCJ3ZWJhXCJcblx0XSxcblx0XCJhdWRpby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rYVwiXG5cdF0sXG5cdFwiYXVkaW8veC1tcGVndXJsXCI6IFtcblx0XHRcIm0zdVwiXG5cdF0sXG5cdFwiYXVkaW8vd2F2XCI6IFtcblx0XHRcIndhdlwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcFwiOiBbXG5cdFx0XCIzZ3BcIlxuXHRdLFxuXHRcInZpZGVvLzNncHAyXCI6IFtcblx0XHRcIjNnMlwiXG5cdF0sXG5cdFwidmlkZW8vbXA0XCI6IFtcblx0XHRcIm1wNFwiLFxuXHRcdFwibXA0dlwiLFxuXHRcdFwibXBnNFwiXG5cdF0sXG5cdFwidmlkZW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGVnXCIsXG5cdFx0XCJtcGdcIixcblx0XHRcIm1wZVwiLFxuXHRcdFwibTF2XCIsXG5cdFx0XCJtMnZcIlxuXHRdLFxuXHRcInZpZGVvL29nZ1wiOiBbXG5cdFx0XCJvZ3ZcIlxuXHRdLFxuXHRcInZpZGVvL3F1aWNrdGltZVwiOiBbXG5cdFx0XCJxdFwiLFxuXHRcdFwibW92XCJcblx0XSxcblx0XCJ2aWRlby93ZWJtXCI6IFtcblx0XHRcIndlYm1cIlxuXHRdLFxuXHRcInZpZGVvL3gtZjR2XCI6IFtcblx0XHRcImY0dlwiXG5cdF0sXG5cdFwidmlkZW8veC1mbGlcIjogW1xuXHRcdFwiZmxpXCJcblx0XSxcblx0XCJ2aWRlby94LWZsdlwiOiBbXG5cdFx0XCJmbHZcIlxuXHRdLFxuXHRcInZpZGVvL3gtbTR2XCI6IFtcblx0XHRcIm00dlwiXG5cdF0sXG5cdFwidmlkZW8veC1tYXRyb3NrYVwiOiBbXG5cdFx0XCJta3ZcIixcblx0XHRcIm1rM2RcIixcblx0XHRcIm1rc1wiXG5cdF1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL21pbWUtdHlwZXMuanNvblxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFtcFxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA8IG1heFxuICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhbXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Zvci1lYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzTm9kZVxuXG5mdW5jdGlvbiBpc05vZGUgKHZhbCkge1xuICByZXR1cm4gKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpXG4gICAgPyBmYWxzZVxuICAgIDogKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ29iamVjdCcpXG4gICAgICA/ICh2YWwgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZSlcbiAgICAgIDogKHR5cGVvZiB2YWwubm9kZVR5cGUgPT09ICdudW1iZXInKSAmJlxuICAgICAgICAodHlwZW9mIHZhbC5ub2RlTmFtZSA9PT0gJ3N0cmluZycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZG9tL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG4gICwgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJylcbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3JFYWNoKFxuICAgICAgdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcbiAgICAsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICAgICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICAgICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICAgICAgfVxuICAgICAgfVxuICApXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID1cbiAgZ2xvYmFsLnBlcmZvcm1hbmNlICYmXG4gIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPyBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpXG4gIH0gOiBEYXRlLm5vdyB8fCBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuICtuZXcgRGF0ZVxuICB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmlnaHQtbm93L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RvbSA9IHJlcXVpcmUoJ2lzLWRvbScpXG52YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cy52aWRlbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICd2aWRlbycpXG5tb2R1bGUuZXhwb3J0cy5hdWRpbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICdhdWRpbycpXG5cbmZ1bmN0aW9uIHNpbXBsZU1lZGlhRWxlbWVudCAoZWxlbWVudE5hbWUsIHNvdXJjZXMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICBzb3VyY2VzID0gWyBzb3VyY2VzIF1cbiAgfVxuXG4gIHZhciBtZWRpYSA9IG9wdC5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpXG5cbiAgaWYgKG9wdC5sb29wKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2xvb3AnLCAnbG9vcCcpXG4gIGlmIChvcHQubXV0ZWQpIG1lZGlhLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnbXV0ZWQnKVxuICBpZiAob3B0LmF1dG9wbGF5KSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ2F1dG9wbGF5JylcbiAgaWYgKG9wdC5jb250cm9scykgbWVkaWEuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpXG4gIGlmIChvcHQuY3Jvc3NPcmlnaW4pIG1lZGlhLnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCBvcHQuY3Jvc3NPcmlnaW4pXG4gIGlmIChvcHQucHJlbG9hZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgb3B0LnByZWxvYWQpXG4gIGlmIChvcHQucG9zdGVyKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIG9wdC5wb3N0ZXIpXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcpIG1lZGlhLnNldEF0dHJpYnV0ZSgndm9sdW1lJywgb3B0LnZvbHVtZSlcblxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBtZWRpYS5hcHBlbmRDaGlsZChjcmVhdGVTb3VyY2VFbGVtZW50KHNvdXJjZSkpXG4gIH0pXG5cbiAgcmV0dXJuIG1lZGlhXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUVsZW1lbnQgKGRhdGEpIHtcbiAgaWYgKGlzRG9tKGRhdGEpKSByZXR1cm4gZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YSA9IHsgc3JjOiBkYXRhIH1cbiAgICBpZiAoZGF0YS5zcmMpIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb24oZGF0YS5zcmMpXG4gICAgICBpZiAoZXh0KSBkYXRhLnR5cGUgPSBsb29rdXAoZXh0KVxuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKVxuICBpZiAoZGF0YS5zcmMpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEuc3JjKVxuICBpZiAoZGF0YS50eXBlKSBzb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKVxuICByZXR1cm4gc291cmNlXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRhdGEuc3Vic3RyaW5nKGV4dElkeCArIDEpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cmltL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW9BbmFseXNlclxuXG5mdW5jdGlvbiBXZWJBdWRpb0FuYWx5c2VyKGF1ZGlvLCBjdHgsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFdlYkF1ZGlvQW5hbHlzZXIpKSByZXR1cm4gbmV3IFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cylcbiAgaWYgKCEoY3R4IGluc3RhbmNlb2YgQXVkaW9Db250ZXh0KSkgKG9wdHMgPSBjdHgpLCAoY3R4ID0gbnVsbClcblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICB0aGlzLmN0eCA9IGN0eCA9IGN0eCB8fCBuZXcgQXVkaW9Db250ZXh0XG5cbiAgaWYgKCEoYXVkaW8gaW5zdGFuY2VvZiBBdWRpb05vZGUpKSB7XG4gICAgYXVkaW8gPSAoYXVkaW8gaW5zdGFuY2VvZiBBdWRpbyB8fCBhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpXG4gICAgICA/IGN0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pXG4gICAgICA6IGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShhdWRpbylcbiAgfVxuXG4gIHRoaXMuYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKVxuICB0aGlzLnN0ZXJlbyAgID0gISFvcHRzLnN0ZXJlb1xuICB0aGlzLmF1ZGlibGUgID0gb3B0cy5hdWRpYmxlICE9PSBmYWxzZVxuICB0aGlzLndhdmVkYXRhID0gbnVsbFxuICB0aGlzLmZyZXFkYXRhID0gbnVsbFxuICB0aGlzLnNwbGl0dGVyID0gbnVsbFxuICB0aGlzLm1lcmdlciAgID0gbnVsbFxuICB0aGlzLnNvdXJjZSAgID0gYXVkaW9cblxuICBpZiAoIXRoaXMuc3RlcmVvKSB7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNvdXJjZVxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5hbmFseXNlcilcbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5hbmFseXNlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFuYWx5c2VyID0gW3RoaXMuYW5hbHlzZXJdXG4gICAgdGhpcy5hbmFseXNlci5wdXNoKGN0eC5jcmVhdGVBbmFseXNlcigpKVxuXG4gICAgdGhpcy5zcGxpdHRlciA9IGN0eC5jcmVhdGVDaGFubmVsU3BsaXR0ZXIoMilcbiAgICB0aGlzLm1lcmdlciAgID0gY3R4LmNyZWF0ZUNoYW5uZWxNZXJnZXIoMilcbiAgICB0aGlzLm91dHB1dCAgID0gdGhpcy5tZXJnZXJcblxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5zcGxpdHRlcilcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNwbGl0dGVyLmNvbm5lY3QodGhpcy5hbmFseXNlcltpXSwgaSwgMClcbiAgICAgIHRoaXMuYW5hbHlzZXJbaV0uY29ubmVjdCh0aGlzLm1lcmdlciwgMCwgaSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5tZXJnZXIuY29ubmVjdChjdHguZGVzdGluYXRpb24pXG4gIH1cbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUud2F2ZWZvcm0gPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMud2F2ZWRhdGEgfHwgKFxuICAgIHRoaXMud2F2ZWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEob3V0cHV0KVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUuZnJlcXVlbmNpZXMgPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMuZnJlcWRhdGEgfHwgKFxuICAgIHRoaXMuZnJlcWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJ1ZmZlciA9IHJlcXVpcmUoJy4vbGliL2J1ZmZlci1zb3VyY2UnKVxudmFyIG1lZGlhID0gcmVxdWlyZSgnLi9saWIvbWVkaWEtc291cmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWJBdWRpb1BsYXllclxuZnVuY3Rpb24gd2ViQXVkaW9QbGF5ZXIgKHNyYywgb3B0KSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgYSBzcmMgcGFyYW1ldGVyJylcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIGlmIChvcHQuYnVmZmVyKSByZXR1cm4gYnVmZmVyKHNyYywgb3B0KVxuICBlbHNlIHJldHVybiBtZWRpYShzcmMsIG9wdClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBjcmVhdGVBdWRpb0NvbnRleHQgPSByZXF1aXJlKCcuL2F1ZGlvLWNvbnRleHQnKVxudmFyIHhockF1ZGlvID0gcmVxdWlyZSgnLi94aHItYXVkaW8nKVxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIHJpZ2h0Tm93ID0gcmVxdWlyZSgncmlnaHQtbm93JylcbnZhciByZXN1bWUgPSByZXF1aXJlKCcuL3Jlc3VtZS1jb250ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXJTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlclNvdXJjZSAoc3JjLCBvcHQpIHtcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIHZhciBhdWRpb0NvbnRleHQgPSBvcHQuY29udGV4dCB8fCBjcmVhdGVBdWRpb0NvbnRleHQoKVxuXG4gIC8vIGEgcGFzcy10aHJvdWdoIG5vZGUgc28gdXNlciBqdXN0IG5lZWRzIHRvXG4gIC8vIGNvbm5lY3QoKSBvbmNlXG4gIHZhciBidWZmZXJOb2RlLCBidWZmZXIsIGR1cmF0aW9uXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgYXVkaW9TdGFydFRpbWUgPSBudWxsXG4gIHZhciBhdWRpb1BhdXNlVGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIHZhciBwbGF5aW5nID0gZmFsc2VcbiAgdmFyIGxvb3AgPSBvcHQubG9vcFxuXG4gIGVtaXR0ZXIucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGxheWluZykgcmV0dXJuXG4gICAgcGxheWluZyA9IHRydWVcblxuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyTm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICAgIGJ1ZmZlck5vZGUuY29ubmVjdChlbWl0dGVyLm5vZGUpXG4gICAgYnVmZmVyTm9kZS5vbmVuZGVkID0gZW5kZWRcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAvLyBNaWdodCBiZSBudWxsIHVuZGVmaW5lZCBpZiB3ZSBhcmUgc3RpbGwgbG9hZGluZ1xuICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICB9XG4gICAgaWYgKGxvb3ApIHtcbiAgICAgIGJ1ZmZlck5vZGUubG9vcCA9IHRydWVcbiAgICAgIGlmICh0eXBlb2Ygb3B0Lmxvb3BTdGFydCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcEVuZCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gICAgfVxuXG4gICAgaWYgKGR1cmF0aW9uICYmIGF1ZGlvQ3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xuICAgICAgLy8gZm9yIHdoZW4gaXQgbG9vcHMuLi5cbiAgICAgIGF1ZGlvQ3VycmVudFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lICUgZHVyYXRpb25cbiAgICB9XG4gICAgdmFyIG5leHRUaW1lID0gYXVkaW9DdXJyZW50VGltZVxuXG4gICAgYnVmZmVyTm9kZS5zdGFydCgwLCBuZXh0VGltZSlcbiAgICBhdWRpb1N0YXJ0VGltZSA9IHJpZ2h0Tm93KClcbiAgfVxuXG4gIGVtaXR0ZXIucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICAvLyBEb24ndCBsZXQgdGhlIFwiZW5kXCIgZXZlbnRcbiAgICAvLyBnZXQgdHJpZ2dlcmVkIG9uIG1hbnVhbCBwYXVzZS5cbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBudWxsXG4gICAgYnVmZmVyTm9kZS5zdG9wKDApXG4gICAgYXVkaW9QYXVzZVRpbWUgPSByaWdodE5vdygpXG4gICAgYXVkaW9DdXJyZW50VGltZSArPSAoYXVkaW9QYXVzZVRpbWUgLSBhdWRpb1N0YXJ0VGltZSkgLyAxMDAwXG4gIH1cblxuICBlbWl0dGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgZW1pdHRlci5wYXVzZSgpXG4gICAgZW5kZWQoKVxuICB9XG5cbiAgZW1pdHRlci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGRpc3Bvc2VCdWZmZXIoKVxuICAgIGJ1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGVtaXR0ZXIubm9kZSA9IG5vZGVcbiAgZW1pdHRlci5jb250ZXh0ID0gYXVkaW9Db250ZXh0XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZW1pdHRlciwge1xuICAgIGR1cmF0aW9uOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXlpbmdcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1ZmZlcjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gc2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IG9wdC52b2x1bWVcbiAgfVxuXG4gIC8vIGZpbHRlciBkb3duIHRvIGEgbGlzdCBvZiBwbGF5YWJsZSBzb3VyY2VzXG4gIHZhciBzb3VyY2VzID0gQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogWyBzcmMgXVxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgdmFyIHBsYXlhYmxlID0gc291cmNlcy5zb21lKGNhblBsYXlTcmMpXG4gIGlmIChwbGF5YWJsZSkge1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzLmZpbHRlcihjYW5QbGF5U3JjKVswXVxuICAgIC8vIFN1cHBvcnQgdGhlIHNhbWUgc291cmNlIHR5cGVzIGFzIGluXG4gICAgLy8gTWVkaWFFbGVtZW50IG1vZGUuLi5cbiAgICBpZiAodHlwZW9mIHNvdXJjZS5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlLnNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5zcmNcbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBhdCBsZWFzdCBvbmUgcGxheWFibGUgc291cmNlLlxuICAgIC8vIEZvciBub3cganVzdCBwbGF5IHRoZSBmaXJzdCxcbiAgICAvLyBpZGVhbGx5IHRoaXMgbW9kdWxlIGNvdWxkIGF0dGVtcHQgZWFjaCBvbmUuXG4gICAgc3RhcnRMb2FkKHNvdXJjZSlcbiAgfSBlbHNlIHtcbiAgICAvLyBubyBzb3VyY2VzIGNhbiBiZSBwbGF5ZWQuLi5cbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGVtaXR0ZXJcblxuICBmdW5jdGlvbiBzdGFydExvYWQgKHNyYykge1xuICAgIHhockF1ZGlvKGF1ZGlvQ29udGV4dCwgc3JjLCBmdW5jdGlvbiBhdWRpb0RlY29kZWQgKGVyciwgZGVjb2RlZCkge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICBidWZmZXIgPSBkZWNvZGVkIC8vIHN0b3JlIGZvciBsYXRlciB1c2VcbiAgICAgIGlmIChidWZmZXJOb2RlKSB7XG4gICAgICAgIC8vIGlmIHBsYXkoKSB3YXMgY2FsbGVkIGVhcmx5XG4gICAgICAgIGJ1ZmZlck5vZGUuYnVmZmVyID0gYnVmZmVyXG4gICAgICB9XG4gICAgICBkdXJhdGlvbiA9IGJ1ZmZlci5kdXJhdGlvblxuICAgICAgbm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIGVtaXR0ZXIuZW1pdCgnbG9hZCcpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9Qcm9ncmVzcyAoYW1vdW50LCB0b3RhbCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdwcm9ncmVzcycsIGFtb3VudCwgdG90YWwpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9EZWNvZGluZyAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2RlY29kaW5nJylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kZWQgKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICBhdWRpb0N1cnJlbnRUaW1lID0gMFxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcG9zZUJ1ZmZlciAoKSB7XG4gICAgaWYgKGJ1ZmZlck5vZGUpIGJ1ZmZlck5vZGUuZGlzY29ubmVjdCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGFkZE9uY2VcbmZ1bmN0aW9uIGFkZE9uY2UgKGVsZW1lbnQsIGV2ZW50LCBmbikge1xuICBmdW5jdGlvbiB0bXAgKGV2KSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxuICAgIGZuKGV2LCBlbGVtZW50KVxuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdG1wLCBmYWxzZSlcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciBjcmVhdGVBdWRpbyA9IHJlcXVpcmUoJ3NpbXBsZS1tZWRpYS1lbGVtZW50JykuYXVkaW9cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBhZGRPbmNlID0gcmVxdWlyZSgnLi9ldmVudC1hZGQtb25jZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTWVkaWFTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBhc3NpZ24oe30sIG9wdClcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvLyBEZWZhdWx0IHRvIEF1ZGlvIGluc3RlYWQgb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBUaGVyZSBpcyBub3QgbXVjaCBkaWZmZXJlbmNlIGV4Y2VwdCBpbiB0aGUgZm9sbG93aW5nOlxuICAvLyAgICB4IGluc3RhbmNlb2YgQXVkaW9cbiAgLy8gICAgeCBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnRcbiAgLy8gQW5kIGluIG15IGV4cGVyaWVuY2UgQXVkaW8gaGFzIGJldHRlciBzdXBwb3J0IG9uIHZhcmlvdXNcbiAgLy8gcGxhdGZvcm1zIGxpa2UgQ29jb29uSlMuXG4gIC8vIFBsZWFzZSBvcGVuIGFuIGlzc3VlIGlmIHRoZXJlIGlzIGEgY29uY2VybiB3aXRoIHRoaXMuXG4gIGlmICghb3B0LmVsZW1lbnQpIG9wdC5lbGVtZW50ID0gbmV3IHdpbmRvdy5BdWRpbygpXG5cbiAgdmFyIGRlc2lyZWRWb2x1bWUgPSBvcHQudm9sdW1lXG4gIGRlbGV0ZSBvcHQudm9sdW1lIC8vIG1ha2Ugc3VyZSA8YXVkaW8+IHRhZyByZWNlaXZlcyBmdWxsIHZvbHVtZVxuICB2YXIgYXVkaW8gPSBjcmVhdGVBdWRpbyhzcmMsIG9wdClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgbWVkaWFOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgbWVkaWFOb2RlLmNvbm5lY3Qobm9kZSlcblxuICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2VuZCcpXG4gIH0pXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJQTEFZXCIpXG4gIH0pXG5cbiAgdmFyIGxvb3BTdGFydCA9IG9wdC5sb29wU3RhcnRcbiAgdmFyIGxvb3BFbmQgPSBvcHQubG9vcEVuZFxuICB2YXIgaGFzTG9vcFN0YXJ0ID0gdHlwZW9mIGxvb3BTdGFydCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobG9vcFN0YXJ0KVxuICB2YXIgaGFzTG9vcEVuZCA9IHR5cGVvZiBsb29wRW5kID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wRW5kKVxuICB2YXIgaXNMb29wUmVhZHkgPSBmYWxzZVxuICBpZiAoaGFzTG9vcFN0YXJ0IHx8IGhhc0xvb3BFbmQpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgICAvLyBhdWRpbyBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0Li4uXG4gICAgICBpZiAodHlwZW9mIGF1ZGlvLmR1cmF0aW9uICE9PSAnbnVtYmVyJykgcmV0dXJuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBhdWRpby5jdXJyZW50VGltZVxuXG4gICAgICAvLyB3aGVyZSB0byBlbmQgdGhlIGJ1ZmZlclxuICAgICAgdmFyIGVuZFRpbWUgPSBoYXNMb29wRW5kID8gTWF0aC5taW4oYXVkaW8uZHVyYXRpb24sIGxvb3BFbmQpIDogYXVkaW8uZHVyYXRpb25cblxuICAgICAgaWYgKGN1cnJlbnRUaW1lID4gKGxvb3BTdGFydCB8fCAwKSkge1xuICAgICAgICBpc0xvb3BSZWFkeSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8ganVtcCBhaGVhZCB0byBsb29wIHN0YXJ0IHBvaW50XG4gICAgICBpZiAoaGFzTG9vcFN0YXJ0ICYmIGlzTG9vcFJlYWR5ICYmIGN1cnJlbnRUaW1lIDwgbG9vcFN0YXJ0KSB7XG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gbG9vcFN0YXJ0XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlJ3ZlIGhpdCB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGxvb3AgZW5kIHBvaW50LCBsZXQgbmF0aXZlIGxvb3BpbmcgdGFrZSBvdmVyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBsb29wIGVuZCBwb2ludCwganVtcCBiYWNrIHRvIHN0YXJ0IHBvaW50IG9yIHplcm9cbiAgICAgICAgaWYgKGhhc0xvb3BFbmQpIHtcbiAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGhhc0xvb3BTdGFydCA/IGxvb3BTdGFydCA6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXG4gICAgfSk7XG4gIH1cblxuICBlbWl0dGVyLmVsZW1lbnQgPSBhdWRpb1xuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLnBhdXNlID0gYXVkaW8ucGF1c2UuYmluZChhdWRpbylcbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgcmV0dXJuIGF1ZGlvLnBsYXkoKVxuICB9XG5cbiAgLy8gVGhpcyBleGlzdHMgY3VycmVudGx5IGZvciBwYXJpdHkgd2l0aCBCdWZmZXIgc291cmNlXG4gIC8vIE9wZW4gdG8gc3VnZ2VzdGlvbnMgZm9yIHdoYXQgdGhpcyBzaG91bGQgZGlzcG9zZS4uLlxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7fVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2FzUGxheWluZyA9IGVtaXR0ZXIucGxheWluZ1xuICAgIGF1ZGlvLnBhdXNlKClcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDBcbiAgICBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gICAgaWYgKHdhc1BsYXlpbmcpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICB9XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbnRUaW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGF1ZGlvLmN1cnJlbnRUaW1lXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICFhdWRpby5wYXVzZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gU2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2YgZGVzaXJlZFZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IGRlc2lyZWRWb2x1bWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFsbCBzb3VyY2VzIGFyZSB1bnBsYXlhYmxlLFxuICAvLyBpZiBzbyB3ZSBlbWl0IGFuIGVycm9yIHNpbmNlIHRoZSBicm93c2VyXG4gIC8vIG1pZ2h0IG5vdC5cbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgLy8gQXQgbGVhc3Qgb25lIHNvdXJjZSBpcyBwcm9iYWJseS9tYXliZSBwbGF5YWJsZVxuICAgIHN0YXJ0TG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gZW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gdXNlciBjYW4gY2F0Y2ggaXRcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoKSB7XG4gICAgLy8gVGhlIGZpbGUgZXJyb3JzIChsaWtlIGRlY29kaW5nIC8gNDA0cykgYXBwZWFyIG9uIDxzb3VyY2U+XG4gICAgdmFyIHNyY0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXVkaW8uY2hpbGRyZW4pXG4gICAgdmFyIHJlbWFpbmluZ1NyY0Vycm9ycyA9IHNyY0VsZW1lbnRzLmxlbmd0aFxuICAgIHZhciBoYXNFcnJvcmVkID0gZmFsc2VcbiAgICB2YXIgc291cmNlRXJyb3IgPSBmdW5jdGlvbiAoZXJyLCBlbCkge1xuICAgICAgaWYgKGhhc0Vycm9yZWQpIHJldHVyblxuICAgICAgcmVtYWluaW5nU3JjRXJyb3JzLS1cbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgbG9hZGluZyBzb3VyY2U6ICcgKyBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpKVxuICAgICAgaWYgKHJlbWFpbmluZ1NyY0Vycm9ycyA8PSAwKSB7XG4gICAgICAgIGhhc0Vycm9yZWQgPSB0cnVlXG4gICAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VyY2VFcnJvciwgZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwbGF5IGFueSBvZiB0aGUgc3VwcGxpZWQgc291cmNlcycpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9XG5cbiAgICBpZiAoYXVkaW8ucmVhZHlTdGF0ZSA+PSBhdWRpby5IQVZFX0VOT1VHSF9EQVRBKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGRvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdjYW5wbGF5JywgZG9uZSlcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdlcnJvcicsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBlbWl0dGVyLmVtaXQobmV3IEVycm9yKCdVbmtub3duIGVycm9yIHdoaWxlIGxvYWRpbmcgPGF1ZGlvPicpKVxuICAgICAgfSlcbiAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGFkZE9uY2UoZWwsICdlcnJvcicsIHNvdXJjZUVycm9yKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBPbiBtb3N0IGJyb3dzZXJzIHRoZSBsb2FkaW5nIGJlZ2luc1xuICAgIC8vIGltbWVkaWF0ZWx5LiBIb3dldmVyLCBvbiBpT1MgOS4yIFNhZmFyaSxcbiAgICAvLyB5b3UgbmVlZCB0byBjYWxsIGxvYWQoKSBmb3IgZXZlbnRzXG4gICAgLy8gdG8gYmUgdHJpZ2dlcmVkLlxuICAgIGF1ZGlvLmxvYWQoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvbWVkaWEtc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgeGhyID0gcmVxdWlyZSgneGhyJylcbnZhciB4aHJQcm9ncmVzcyA9IHJlcXVpcmUoJ3hoci1wcm9ncmVzcycpXG5cbm1vZHVsZS5leHBvcnRzID0geGhyQXVkaW9cbmZ1bmN0aW9uIHhockF1ZGlvIChhdWRpb0NvbnRleHQsIHNyYywgY2IsIHByb2dyZXNzLCBkZWNvZGluZykge1xuICB2YXIgeGhyT2JqZWN0ID0geGhyKHtcbiAgICB1cmk6IHNyYyxcbiAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcidcbiAgfSwgZnVuY3Rpb24gKGVyciwgcmVzcCwgYXJyYXlCdWYpIHtcbiAgICBpZiAoIS9eMi8udGVzdChyZXNwLnN0YXR1c0NvZGUpKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ3N0YXR1cyBjb2RlICcgKyByZXNwLnN0YXR1c0NvZGUgKyAnIHJlcXVlc3RpbmcgJyArIHNyYylcbiAgICB9XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBkZWNvZGUoYXJyYXlCdWYpXG4gIH0pXG5cbiAgeGhyUHJvZ3Jlc3MoeGhyT2JqZWN0KVxuICAgIC5vbignZGF0YScsIGZ1bmN0aW9uIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBwcm9ncmVzcyhhbW91bnQsIHRvdGFsKVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gZGVjb2RlIChhcnJheUJ1Zikge1xuICAgIGRlY29kaW5nKClcbiAgICBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmLCBmdW5jdGlvbiAoZGVjb2RlZCkge1xuICAgICAgY2IobnVsbCwgZGVjb2RlZClcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdFcnJvciBkZWNvZGluZyBhdWRpbyBkYXRhJylcbiAgICAgIGVyci50eXBlID0gJ0RFQ09ERV9BVURJT19EQVRBJ1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cbldlYk1pZGkgdjIuMC40XG5cbldlYk1pZGkuanMgaGVscHMgeW91IHRhbWUgdGhlIFdlYiBNSURJIEFQSS4gU2VuZCBhbmQgcmVjZWl2ZSBNSURJIG1lc3NhZ2VzIHdpdGggZWFzZS4gQ29udHJvbCBpbnN0cnVtZW50cyB3aXRoIHVzZXItZnJpZW5kbHkgZnVuY3Rpb25zIChwbGF5Tm90ZSwgc2VuZFBpdGNoQmVuZCwgZXRjLikuIFJlYWN0IHRvIE1JREkgaW5wdXQgd2l0aCBzaW1wbGUgZXZlbnQgbGlzdGVuZXJzIChub3Rlb24sIHBpdGNoYmVuZCwgY29udHJvbGNoYW5nZSwgZXRjLikuXG5odHRwczovL2dpdGh1Yi5jb20vY290ZWpwL3dlYm1pZGlcblxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1LTIwMTgsIEplYW4tUGhpbGlwcGUgQ8O0dMOpXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmRcbmFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG5pbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLFxuc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG5wb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVFxuTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVNcbk9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cblxuIWZ1bmN0aW9uKHNjb3BlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBXZWJNaWRpKCl7aWYoV2ViTWlkaS5wcm90b3R5cGUuX3NpbmdsZXRvbil0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIGEgc2luZ2xldG9uLCBpdCBjYW5ub3QgYmUgaW5zdGFudGlhdGVkIGRpcmVjdGx5LlwiKTtXZWJNaWRpLnByb3RvdHlwZS5fc2luZ2xldG9uPXRoaXMsdGhpcy5faW5wdXRzPVtdLHRoaXMuX291dHB1dHM9W10sdGhpcy5fdXNlckhhbmRsZXJzPXt9LHRoaXMuX3N0YXRlQ2hhbmdlUXVldWU9W10sdGhpcy5fcHJvY2Vzc2luZ1N0YXRlQ2hhbmdlPSExLHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHM9W1wiY29ubmVjdGVkXCIsXCJkaXNjb25uZWN0ZWRcIl0sdGhpcy5fbm90ZXM9W1wiQ1wiLFwiQyNcIixcIkRcIixcIkQjXCIsXCJFXCIsXCJGXCIsXCJGI1wiLFwiR1wiLFwiRyNcIixcIkFcIixcIkEjXCIsXCJCXCJdLHRoaXMuX3NlbWl0b25lcz17QzowLEQ6MixFOjQsRjo1LEc6NyxBOjksQjoxMX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7TUlESV9TWVNURU1fTUVTU0FHRVM6e3ZhbHVlOntzeXNleDoyNDAsdGltZWNvZGU6MjQxLHNvbmdwb3NpdGlvbjoyNDIsc29uZ3NlbGVjdDoyNDMsdHVuaW5ncmVxdWVzdDoyNDYsc3lzZXhlbmQ6MjQ3LGNsb2NrOjI0OCxzdGFydDoyNTAsXCJjb250aW51ZVwiOjI1MSxzdG9wOjI1MixhY3RpdmVzZW5zaW5nOjI1NCxyZXNldDoyNTUsdW5rbm93bnN5c3RlbW1lc3NhZ2U6LTF9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NIQU5ORUxfTUVTU0FHRVM6e3ZhbHVlOntub3Rlb2ZmOjgsbm90ZW9uOjksa2V5YWZ0ZXJ0b3VjaDoxMCxjb250cm9sY2hhbmdlOjExLGNoYW5uZWxtb2RlOjExLHByb2dyYW1jaGFuZ2U6MTIsY2hhbm5lbGFmdGVydG91Y2g6MTMscGl0Y2hiZW5kOjE0fSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMX0sTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUjp7dmFsdWU6e3BpdGNoYmVuZHJhbmdlOlswLDBdLGNoYW5uZWxmaW5ldHVuaW5nOlswLDFdLGNoYW5uZWxjb2Fyc2V0dW5pbmc6WzAsMl0sdHVuaW5ncHJvZ3JhbTpbMCwzXSx0dW5pbmdiYW5rOlswLDRdLG1vZHVsYXRpb25yYW5nZTpbMCw1XSxhemltdXRoYW5nbGU6WzYxLDBdLGVsZXZhdGlvbmFuZ2xlOls2MSwxXSxnYWluOls2MSwyXSxkaXN0YW5jZXJhdGlvOls2MSwzXSxtYXhpbXVtZGlzdGFuY2U6WzYxLDRdLG1heGltdW1kaXN0YW5jZWdhaW46WzYxLDVdLHJlZmVyZW5jZWRpc3RhbmNlcmF0aW86WzYxLDZdLHBhbnNwcmVhZGFuZ2xlOls2MSw3XSxyb2xsYW5nbGU6WzYxLDhdfSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMX0sTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFUzp7dmFsdWU6e2JhbmtzZWxlY3Rjb2Fyc2U6MCxtb2R1bGF0aW9ud2hlZWxjb2Fyc2U6MSxicmVhdGhjb250cm9sbGVyY29hcnNlOjIsZm9vdGNvbnRyb2xsZXJjb2Fyc2U6NCxwb3J0YW1lbnRvdGltZWNvYXJzZTo1LGRhdGFlbnRyeWNvYXJzZTo2LHZvbHVtZWNvYXJzZTo3LGJhbGFuY2Vjb2Fyc2U6OCxwYW5jb2Fyc2U6MTAsZXhwcmVzc2lvbmNvYXJzZToxMSxlZmZlY3Rjb250cm9sMWNvYXJzZToxMixlZmZlY3Rjb250cm9sMmNvYXJzZToxMyxnZW5lcmFscHVycG9zZXNsaWRlcjE6MTYsZ2VuZXJhbHB1cnBvc2VzbGlkZXIyOjE3LGdlbmVyYWxwdXJwb3Nlc2xpZGVyMzoxOCxnZW5lcmFscHVycG9zZXNsaWRlcjQ6MTksYmFua3NlbGVjdGZpbmU6MzIsbW9kdWxhdGlvbndoZWVsZmluZTozMyxicmVhdGhjb250cm9sbGVyZmluZTozNCxmb290Y29udHJvbGxlcmZpbmU6MzYscG9ydGFtZW50b3RpbWVmaW5lOjM3LGRhdGFlbnRyeWZpbmU6Mzgsdm9sdW1lZmluZTozOSxiYWxhbmNlZmluZTo0MCxwYW5maW5lOjQyLGV4cHJlc3Npb25maW5lOjQzLGVmZmVjdGNvbnRyb2wxZmluZTo0NCxlZmZlY3Rjb250cm9sMmZpbmU6NDUsaG9sZHBlZGFsOjY0LHBvcnRhbWVudG86NjUsc3VzdGVudXRvcGVkYWw6NjYsc29mdHBlZGFsOjY3LGxlZ2F0b3BlZGFsOjY4LGhvbGQycGVkYWw6Njksc291bmR2YXJpYXRpb246NzAscmVzb25hbmNlOjcxLHNvdW5kcmVsZWFzZXRpbWU6NzIsc291bmRhdHRhY2t0aW1lOjczLGJyaWdodG5lc3M6NzQsc291bmRjb250cm9sNjo3NSxzb3VuZGNvbnRyb2w3Ojc2LHNvdW5kY29udHJvbDg6Nzcsc291bmRjb250cm9sOTo3OCxzb3VuZGNvbnRyb2wxMDo3OSxnZW5lcmFscHVycG9zZWJ1dHRvbjE6ODAsZ2VuZXJhbHB1cnBvc2VidXR0b24yOjgxLGdlbmVyYWxwdXJwb3NlYnV0dG9uMzo4MixnZW5lcmFscHVycG9zZWJ1dHRvbjQ6ODMscmV2ZXJibGV2ZWw6OTEsdHJlbW9sb2xldmVsOjkyLGNob3J1c2xldmVsOjkzLGNlbGVzdGVsZXZlbDo5NCxwaGFzZXJsZXZlbDo5NSxkYXRhYnV0dG9uaW5jcmVtZW50Ojk2LGRhdGFidXR0b25kZWNyZW1lbnQ6OTcsbm9ucmVnaXN0ZXJlZHBhcmFtZXRlcmNvYXJzZTo5OCxub25yZWdpc3RlcmVkcGFyYW1ldGVyZmluZTo5OSxyZWdpc3RlcmVkcGFyYW1ldGVyY29hcnNlOjEwMCxyZWdpc3RlcmVkcGFyYW1ldGVyZmluZToxMDF9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NIQU5ORUxfTU9ERV9NRVNTQUdFUzp7dmFsdWU6e2FsbHNvdW5kb2ZmOjEyMCxyZXNldGFsbGNvbnRyb2xsZXJzOjEyMSxsb2NhbGNvbnRyb2w6MTIyLGFsbG5vdGVzb2ZmOjEyMyxvbW5pbW9kZW9mZjoxMjQsb21uaW1vZGVvbjoxMjUsbW9ub21vZGVvbjoxMjYscG9seW1vZGVvbjoxMjd9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3N1cHBvcnRlZDp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cInJlcXVlc3RNSURJQWNjZXNzXCJpbiBuYXZpZ2F0b3J9fSxlbmFibGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT10aGlzW1wiaW50ZXJmYWNlXCJdfS5iaW5kKHRoaXMpfSxpbnB1dHM6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lucHV0c30uYmluZCh0aGlzKX0sb3V0cHV0czp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb3V0cHV0c30uYmluZCh0aGlzKX0sc3lzZXhFbmFibGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiEoIXRoaXNbXCJpbnRlcmZhY2VcIl18fCF0aGlzW1wiaW50ZXJmYWNlXCJdLnN5c2V4RW5hYmxlZCl9LmJpbmQodGhpcyl9LHRpbWU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpfX19KX1mdW5jdGlvbiBJbnB1dChtaWRpSW5wdXQpe3ZhciB0aGF0PXRoaXM7dGhpcy5fdXNlckhhbmRsZXJzPXtjaGFubmVsOnt9LHN5c3RlbTp7fX0sdGhpcy5fbWlkaUlucHV0PW1pZGlJbnB1dCxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtjb25uZWN0aW9uOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuY29ubmVjdGlvbn19LGlkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuaWR9fSxtYW51ZmFjdHVyZXI6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5tYW51ZmFjdHVyZXJ9fSxuYW1lOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQubmFtZX19LHN0YXRlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuc3RhdGV9fSx0eXBlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQudHlwZX19fSksdGhpcy5faW5pdGlhbGl6ZVVzZXJIYW5kbGVycygpfWZ1bmN0aW9uIE91dHB1dChtaWRpT3V0cHV0KXt2YXIgdGhhdD10aGlzO3RoaXMuX21pZGlPdXRwdXQ9bWlkaU91dHB1dCxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtjb25uZWN0aW9uOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0LmNvbm5lY3Rpb259fSxpZDp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5pZH19LG1hbnVmYWN0dXJlcjp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5tYW51ZmFjdHVyZXJ9fSxuYW1lOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0Lm5hbWV9fSxzdGF0ZTp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5zdGF0ZX19LHR5cGU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlPdXRwdXQudHlwZX19fSl9dmFyIHdtPW5ldyBXZWJNaWRpO1dlYk1pZGkucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbihjYWxsYmFjayxzeXNleCl7cmV0dXJuIHRoaXMuZW5hYmxlZD92b2lkIDA6dGhpcy5zdXBwb3J0ZWQ/dm9pZCBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3Moe3N5c2V4OnN5c2V4fSkudGhlbihmdW5jdGlvbihtaWRpQWNjZXNzKXtmdW5jdGlvbiBvblBvcnRzT3Blbigpe3RoaXMuX3VwZGF0ZUlucHV0c0FuZE91dHB1dHMoKSx0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9dGhpcy5fb25JbnRlcmZhY2VTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGNhbGxiYWNrJiZjYWxsYmFjay5jYWxsKHRoaXMpLGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KXt0aGlzLl9vbkludGVyZmFjZVN0YXRlQ2hhbmdlKGV2ZW50KX0uYmluZCh0aGlzKSl9dmFyIGV2ZW50cz1bXSxwcm9taXNlcz1bXTt0aGlzW1wiaW50ZXJmYWNlXCJdPW1pZGlBY2Nlc3MsdGhpcy5fcmVzZXRJbnRlcmZhY2VVc2VySGFuZGxlcnMoKSx0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9ZnVuY3Rpb24oZSl7ZXZlbnRzLnB1c2goZSl9O2Zvcih2YXIgaW5wdXRzPW1pZGlBY2Nlc3MuaW5wdXRzLnZhbHVlcygpLGlucHV0PWlucHV0cy5uZXh0KCk7aW5wdXQmJiFpbnB1dC5kb25lO2lucHV0PWlucHV0cy5uZXh0KCkpcHJvbWlzZXMucHVzaChpbnB1dC52YWx1ZS5vcGVuKCkpO2Zvcih2YXIgb3V0cHV0cz1taWRpQWNjZXNzLm91dHB1dHMudmFsdWVzKCksb3V0cHV0PW91dHB1dHMubmV4dCgpO291dHB1dCYmIW91dHB1dC5kb25lO291dHB1dD1vdXRwdXRzLm5leHQoKSlwcm9taXNlcy5wdXNoKG91dHB1dC52YWx1ZS5vcGVuKCkpO1Byb21pc2U/UHJvbWlzZS5hbGwocHJvbWlzZXMpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyKXt9KS50aGVuKG9uUG9ydHNPcGVuLmJpbmQodGhpcykpOnNldFRpbWVvdXQob25Qb3J0c09wZW4uYmluZCh0aGlzKSwyMDApfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGVycil7XCJmdW5jdGlvblwiPT10eXBlb2YgY2FsbGJhY2smJmNhbGxiYWNrLmNhbGwodGhpcyxlcnIpfS5iaW5kKHRoaXMpKTp2b2lkKFwiZnVuY3Rpb25cIj09dHlwZW9mIGNhbGxiYWNrJiZjYWxsYmFjayhuZXcgRXJyb3IoXCJUaGUgV2ViIE1JREkgQVBJIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKSkpfSxXZWJNaWRpLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuc3VwcG9ydGVkKXRocm93IG5ldyBFcnJvcihcIlRoZSBXZWIgTUlESSBBUEkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpO3RoaXNbXCJpbnRlcmZhY2VcIl0mJih0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9dm9pZCAwKSx0aGlzW1wiaW50ZXJmYWNlXCJdPXZvaWQgMCx0aGlzLl9pbnB1dHM9W10sdGhpcy5fb3V0cHV0cz1bXSx0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpfSxXZWJNaWRpLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzLlwiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYoISh0aGlzLl9taWRpSW50ZXJmYWNlRXZlbnRzLmluZGV4T2YodHlwZSk+PTApKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7cmV0dXJuIHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKSx0aGlzfSxXZWJNaWRpLnByb3RvdHlwZS5oYXNMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSBjaGVja2luZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZighKHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMuaW5kZXhPZih0eXBlKT49MCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtmb3IodmFyIG89MDtvPHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5sZW5ndGg7bysrKWlmKHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXVtvXT09PWxpc3RlbmVyKXJldHVybiEwO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSByZW1vdmluZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKHZvaWQgMCE9PWxpc3RlbmVyJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYodGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cy5pbmRleE9mKHR5cGUpPj0wKWlmKGxpc3RlbmVyKWZvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLmxlbmd0aDtvKyspdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdW29dPT09bGlzdGVuZXImJnRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5zcGxpY2UobywxKTtlbHNlIHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXT1bXTtlbHNle2lmKHZvaWQgMCE9PXR5cGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTt0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpfXJldHVybiB0aGlzfSxXZWJNaWRpLnByb3RvdHlwZS50b01JRElDaGFubmVscz1mdW5jdGlvbihjaGFubmVsKXt2YXIgY2hhbm5lbHM7cmV0dXJuIGNoYW5uZWxzPVwiYWxsXCI9PT1jaGFubmVsfHx2b2lkIDA9PT1jaGFubmVsP1tcImFsbFwiXTpBcnJheS5pc0FycmF5KGNoYW5uZWwpP2NoYW5uZWw6W2NoYW5uZWxdLGNoYW5uZWxzLmluZGV4T2YoXCJhbGxcIik+LTEmJihjaGFubmVscz1bMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTZdKSxjaGFubmVscy5tYXAoZnVuY3Rpb24oY2gpe3JldHVybiBwYXJzZUludChjaCl9KS5maWx0ZXIoZnVuY3Rpb24oY2gpe3JldHVybiBjaD49MSYmMTY+PWNofSl9LFdlYk1pZGkucHJvdG90eXBlLmdldElucHV0QnlJZD1mdW5jdGlvbihpZCl7aWYoIXRoaXMuZW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIG5vdCBlbmFibGVkLlwiKTtmb3IodmFyIGk9MDtpPHRoaXMuaW5wdXRzLmxlbmd0aDtpKyspaWYodGhpcy5pbnB1dHNbaV0uaWQ9PT1pZClyZXR1cm4gdGhpcy5pbnB1dHNbaV07cmV0dXJuITF9LFdlYk1pZGkucHJvdG90eXBlLmdldE91dHB1dEJ5SWQ9ZnVuY3Rpb24oaWQpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBpcyBub3QgZW5hYmxlZC5cIik7Zm9yKHZhciBpPTA7aTx0aGlzLm91dHB1dHMubGVuZ3RoO2krKylpZih0aGlzLm91dHB1dHNbaV0uaWQ9PT1pZClyZXR1cm4gdGhpcy5vdXRwdXRzW2ldO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5nZXRJbnB1dEJ5TmFtZT1mdW5jdGlvbihuYW1lKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5pbnB1dHMubGVuZ3RoO2krKylpZih+dGhpcy5pbnB1dHNbaV0ubmFtZS5pbmRleE9mKG5hbWUpKXJldHVybiB0aGlzLmlucHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0T2N0YXZlPWZ1bmN0aW9uKG51bWJlcil7cmV0dXJuIG51bWJlciYmbnVtYmVyPj0wJiYxMjc+PW51bWJlcj9NYXRoLmZsb29yKHBhcnNlSW50KG51bWJlcikvMTItMSktMTp2b2lkIDB9LFdlYk1pZGkucHJvdG90eXBlLmdldE91dHB1dEJ5TmFtZT1mdW5jdGlvbihuYW1lKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5vdXRwdXRzLmxlbmd0aDtpKyspaWYofnRoaXMub3V0cHV0c1tpXS5uYW1lLmluZGV4T2YobmFtZSkpcmV0dXJuIHRoaXMub3V0cHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ3Vlc3NOb3RlTnVtYmVyPWZ1bmN0aW9uKGlucHV0KXt2YXIgb3V0cHV0PSExO2lmKGlucHV0JiZpbnB1dC50b0ZpeGVkJiZpbnB1dD49MCYmMTI3Pj1pbnB1dD9vdXRwdXQ9TWF0aC5yb3VuZChpbnB1dCk6cGFyc2VJbnQoaW5wdXQpPj0wJiZwYXJzZUludChpbnB1dCk8PTEyNz9vdXRwdXQ9cGFyc2VJbnQoaW5wdXQpOihcInN0cmluZ1wiPT10eXBlb2YgaW5wdXR8fGlucHV0IGluc3RhbmNlb2YgU3RyaW5nKSYmKG91dHB1dD10aGlzLm5vdGVOYW1lVG9OdW1iZXIoaW5wdXQpKSxvdXRwdXQ9PT0hMSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgbnVtYmVyIChcIitpbnB1dCtcIikuXCIpO3JldHVybiBvdXRwdXR9LFdlYk1pZGkucHJvdG90eXBlLm5vdGVOYW1lVG9OdW1iZXI9ZnVuY3Rpb24obmFtZSl7XCJzdHJpbmdcIiE9dHlwZW9mIG5hbWUmJihuYW1lPVwiXCIpO3ZhciBtYXRjaGVzPW5hbWUubWF0Y2goLyhbQ0RFRkdBQl0pKCN7MCwyfXxiezAsMn0pKC0/XFxkKykvaSk7aWYoIW1hdGNoZXMpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG5vdGUgbmFtZS5cIik7dmFyIHNlbWl0b25lcz13bS5fc2VtaXRvbmVzW21hdGNoZXNbMV0udG9VcHBlckNhc2UoKV0sb2N0YXZlPXBhcnNlSW50KG1hdGNoZXNbM10pLHJlc3VsdD0xMioob2N0YXZlKzIpK3NlbWl0b25lcztpZihtYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImJcIik+LTE/cmVzdWx0LT1tYXRjaGVzWzJdLmxlbmd0aDptYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIiNcIik+LTEmJihyZXN1bHQrPW1hdGNoZXNbMl0ubGVuZ3RoKSwwPnNlbWl0b25lc3x8LTI+b2N0YXZlfHxvY3RhdmU+OHx8MD5yZXN1bHR8fHJlc3VsdD4xMjcpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG5vdGUgbmFtZSBvciBub3RlIG91dHNpZGUgdmFsaWQgcmFuZ2UuXCIpO3JldHVybiByZXN1bHR9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVJbnB1dHNBbmRPdXRwdXRzPWZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlSW5wdXRzKCksdGhpcy5fdXBkYXRlT3V0cHV0cygpfSxXZWJNaWRpLnByb3RvdHlwZS5fdXBkYXRlSW5wdXRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTx0aGlzLl9pbnB1dHMubGVuZ3RoO2krKyl7Zm9yKHZhciByZW1vdmU9ITAsdXBkYXRlZD10aGlzW1wiaW50ZXJmYWNlXCJdLmlucHV0cy52YWx1ZXMoKSxpbnB1dD11cGRhdGVkLm5leHQoKTtpbnB1dCYmIWlucHV0LmRvbmU7aW5wdXQ9dXBkYXRlZC5uZXh0KCkpaWYodGhpcy5faW5wdXRzW2ldLl9taWRpSW5wdXQ9PT1pbnB1dC52YWx1ZSl7cmVtb3ZlPSExO2JyZWFrfXJlbW92ZSYmdGhpcy5faW5wdXRzLnNwbGljZShpLDEpfXRoaXNbXCJpbnRlcmZhY2VcIl0mJnRoaXNbXCJpbnRlcmZhY2VcIl0uaW5wdXRzLmZvckVhY2goZnVuY3Rpb24obklucHV0KXtmb3IodmFyIGFkZD0hMCxqPTA7ajx0aGlzLl9pbnB1dHMubGVuZ3RoO2orKyl0aGlzLl9pbnB1dHNbal0uX21pZGlJbnB1dD09PW5JbnB1dCYmKGFkZD0hMSk7YWRkJiZ0aGlzLl9pbnB1dHMucHVzaCh0aGlzLl9jcmVhdGVJbnB1dChuSW5wdXQpKX0uYmluZCh0aGlzKSl9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVPdXRwdXRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTx0aGlzLl9vdXRwdXRzLmxlbmd0aDtpKyspe2Zvcih2YXIgcmVtb3ZlPSEwLHVwZGF0ZWQ9dGhpc1tcImludGVyZmFjZVwiXS5vdXRwdXRzLnZhbHVlcygpLG91dHB1dD11cGRhdGVkLm5leHQoKTtvdXRwdXQmJiFvdXRwdXQuZG9uZTtvdXRwdXQ9dXBkYXRlZC5uZXh0KCkpaWYodGhpcy5fb3V0cHV0c1tpXS5fbWlkaU91dHB1dD09PW91dHB1dC52YWx1ZSl7cmVtb3ZlPSExO2JyZWFrfXJlbW92ZSYmdGhpcy5fb3V0cHV0cy5zcGxpY2UoaSwxKX10aGlzW1wiaW50ZXJmYWNlXCJdJiZ0aGlzW1wiaW50ZXJmYWNlXCJdLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbihuT3V0cHV0KXtmb3IodmFyIGFkZD0hMCxqPTA7ajx0aGlzLl9vdXRwdXRzLmxlbmd0aDtqKyspdGhpcy5fb3V0cHV0c1tqXS5fbWlkaU91dHB1dD09PW5PdXRwdXQmJihhZGQ9ITEpO2FkZCYmdGhpcy5fb3V0cHV0cy5wdXNoKHRoaXMuX2NyZWF0ZU91dHB1dChuT3V0cHV0KSl9LmJpbmQodGhpcykpfSxXZWJNaWRpLnByb3RvdHlwZS5fY3JlYXRlSW5wdXQ9ZnVuY3Rpb24obWlkaUlucHV0KXt2YXIgaW5wdXQ9bmV3IElucHV0KG1pZGlJbnB1dCk7cmV0dXJuIGlucHV0Ll9taWRpSW5wdXQub25taWRpbWVzc2FnZT1pbnB1dC5fb25NaWRpTWVzc2FnZS5iaW5kKGlucHV0KSxpbnB1dH0sV2ViTWlkaS5wcm90b3R5cGUuX2NyZWF0ZU91dHB1dD1mdW5jdGlvbihtaWRpT3V0cHV0KXt2YXIgb3V0cHV0PW5ldyBPdXRwdXQobWlkaU91dHB1dCk7cmV0dXJuIG91dHB1dC5fbWlkaU91dHB1dC5vbm1pZGltZXNzYWdlPW91dHB1dC5fb25NaWRpTWVzc2FnZS5iaW5kKG91dHB1dCksb3V0cHV0fSxXZWJNaWRpLnByb3RvdHlwZS5fb25JbnRlcmZhY2VTdGF0ZUNoYW5nZT1mdW5jdGlvbihlKXt0aGlzLl91cGRhdGVJbnB1dHNBbmRPdXRwdXRzKCk7dmFyIGV2ZW50PXt0aW1lc3RhbXA6ZS50aW1lU3RhbXAsdHlwZTplLnBvcnQuc3RhdGV9O3RoaXNbXCJpbnRlcmZhY2VcIl0mJlwiY29ubmVjdGVkXCI9PT1lLnBvcnQuc3RhdGU/XCJvdXRwdXRcIj09PWUucG9ydC50eXBlP2V2ZW50LnBvcnQ9dGhpcy5nZXRPdXRwdXRCeUlkKGUucG9ydC5pZCk6XCJpbnB1dFwiPT09ZS5wb3J0LnR5cGUmJihldmVudC5wb3J0PXRoaXMuZ2V0SW5wdXRCeUlkKGUucG9ydC5pZCkpOmV2ZW50LnBvcnQ9e2Nvbm5lY3Rpb246XCJjbG9zZWRcIixpZDplLnBvcnQuaWQsbWFudWZhY3R1cmVyOmUucG9ydC5tYW51ZmFjdHVyZXIsbmFtZTplLnBvcnQubmFtZSxzdGF0ZTplLnBvcnQuc3RhdGUsdHlwZTplLnBvcnQudHlwZX0sdGhpcy5fdXNlckhhbmRsZXJzW2UucG9ydC5zdGF0ZV0uZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXtoYW5kbGVyKGV2ZW50KX0pfSxXZWJNaWRpLnByb3RvdHlwZS5fcmVzZXRJbnRlcmZhY2VVc2VySGFuZGxlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMubGVuZ3RoO2krKyl0aGlzLl91c2VySGFuZGxlcnNbdGhpcy5fbWlkaUludGVyZmFjZUV2ZW50c1tpXV09W119LElucHV0LnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYodm9pZCAwPT09Y2hhbm5lbCYmKGNoYW5uZWw9XCJhbGxcIiksQXJyYXkuaXNBcnJheShjaGFubmVsKXx8KGNoYW5uZWw9W2NoYW5uZWxdKSxjaGFubmVsLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7aWYoXCJhbGxcIiE9PWl0ZW0mJiEoaXRlbT49MSYmMTY+PWl0ZW0pKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlICdjaGFubmVsJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIil9KSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYod20uTUlESV9TWVNURU1fTUVTU0FHRVNbdHlwZV0pdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXXx8KHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV09W10pLHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV0ucHVzaChsaXN0ZW5lcik7ZWxzZXtpZighd20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7aWYoY2hhbm5lbC5pbmRleE9mKFwiYWxsXCIpPi0xKXtjaGFubmVsPVtdO2Zvcih2YXIgaj0xOzE2Pj1qO2orKyljaGFubmVsLnB1c2goail9dGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV18fCh0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXT1bXSksY2hhbm5lbC5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaF18fCh0aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaF09W10pLHRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoXS5wdXNoKGxpc3RlbmVyKX0pfXJldHVybiB0aGlzfSxJbnB1dC5wcm90b3R5cGUub249SW5wdXQucHJvdG90eXBlLmFkZExpc3RlbmVyLElucHV0LnByb3RvdHlwZS5oYXNMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgbGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbGlzdGVuZXInIHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO2lmKHZvaWQgMD09PWNoYW5uZWwmJihjaGFubmVsPVwiYWxsXCIpLGNoYW5uZWwuY29uc3RydWN0b3IhPT1BcnJheSYmKGNoYW5uZWw9W2NoYW5uZWxdKSx3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1t0eXBlXSl7Zm9yKHZhciBvPTA7bzx0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdLmxlbmd0aDtvKyspaWYodGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXVtvXT09PWxpc3RlbmVyKXJldHVybiEwfWVsc2UgaWYod20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXtpZihjaGFubmVsLmluZGV4T2YoXCJhbGxcIik+LTEpe2NoYW5uZWw9W107Zm9yKHZhciBqPTE7MTY+PWo7aisrKWNoYW5uZWwucHVzaChqKX1yZXR1cm4gdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV0/Y2hhbm5lbC5ldmVyeShmdW5jdGlvbihjaE51bSl7dmFyIGxpc3RlbmVycz10aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaE51bV07cmV0dXJuIGxpc3RlbmVycyYmbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpPi0xfSk6ITF9cmV0dXJuITF9LElucHV0LnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYodm9pZCAwIT09bGlzdGVuZXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZih2b2lkIDA9PT1jaGFubmVsJiYoY2hhbm5lbD1cImFsbFwiKSxjaGFubmVsLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjaGFubmVsPVtjaGFubmVsXSksd20uTUlESV9TWVNURU1fTUVTU0FHRVNbdHlwZV0paWYodm9pZCAwPT09bGlzdGVuZXIpdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXT1bXTtlbHNlIGZvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5sZW5ndGg7bysrKXRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV1bb109PT1saXN0ZW5lciYmdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5zcGxpY2UobywxKTtlbHNlIGlmKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFU1t0eXBlXSl7aWYoY2hhbm5lbC5pbmRleE9mKFwiYWxsXCIpPi0xKXtjaGFubmVsPVtdO2Zvcih2YXIgaj0xOzE2Pj1qO2orKyljaGFubmVsLnB1c2goail9aWYoIXRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdKXJldHVybiB0aGlzO2NoYW5uZWwuZm9yRWFjaChmdW5jdGlvbihjaE51bSl7dmFyIGxpc3RlbmVycz10aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaE51bV07aWYobGlzdGVuZXJzKWlmKHZvaWQgMD09PWxpc3RlbmVyKXRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoTnVtXT1bXTtlbHNlIGZvcih2YXIgbD0wO2w8bGlzdGVuZXJzLmxlbmd0aDtsKyspbGlzdGVuZXJzW2xdPT09bGlzdGVuZXImJmxpc3RlbmVycy5zcGxpY2UobCwxKX0pfWVsc2V7aWYodm9pZCAwIT09dHlwZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBldmVudCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO3RoaXMuX2luaXRpYWxpemVVc2VySGFuZGxlcnMoKX1yZXR1cm4gdGhpc30sSW5wdXQucHJvdG90eXBlLl9pbml0aWFsaXplVXNlckhhbmRsZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciBwcm9wMSBpbiB3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMpd20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmhhc093blByb3BlcnR5KHByb3AxKSYmKHRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3Byb3AxXT17fSk7Zm9yKHZhciBwcm9wMiBpbiB3bS5NSURJX1NZU1RFTV9NRVNTQUdFUyl3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5oYXNPd25Qcm9wZXJ0eShwcm9wMikmJih0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3Byb3AyXT1bXSl9LElucHV0LnByb3RvdHlwZS5fb25NaWRpTWVzc2FnZT1mdW5jdGlvbihlKXtlLmRhdGFbMF08MjQwP3RoaXMuX3BhcnNlQ2hhbm5lbEV2ZW50KGUpOmUuZGF0YVswXTw9MjU1JiZ0aGlzLl9wYXJzZVN5c3RlbUV2ZW50KGUpfSxJbnB1dC5wcm90b3R5cGUuX3BhcnNlQ2hhbm5lbEV2ZW50PWZ1bmN0aW9uKGUpe3ZhciBkYXRhMSxkYXRhMixjb21tYW5kPWUuZGF0YVswXT4+NCxjaGFubmVsPSgxNSZlLmRhdGFbMF0pKzE7ZS5kYXRhLmxlbmd0aD4xJiYoZGF0YTE9ZS5kYXRhWzFdLGRhdGEyPWUuZGF0YS5sZW5ndGg+Mj9lLmRhdGFbMl06dm9pZCAwKTt2YXIgZXZlbnQ9e3RhcmdldDp0aGlzLGRhdGE6ZS5kYXRhLHRpbWVzdGFtcDplLnRpbWVTdGFtcCxjaGFubmVsOmNoYW5uZWx9O2NvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9mZnx8Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb24mJjA9PT1kYXRhMj8oZXZlbnQudHlwZT1cIm5vdGVvZmZcIixldmVudC5ub3RlPXtudW1iZXI6ZGF0YTEsbmFtZTp3bS5fbm90ZXNbZGF0YTElMTJdLG9jdGF2ZTp3bS5nZXRPY3RhdmUoZGF0YTEpfSxldmVudC52ZWxvY2l0eT1kYXRhMi8xMjcsZXZlbnQucmF3VmVsb2NpdHk9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9uPyhldmVudC50eXBlPVwibm90ZW9uXCIsZXZlbnQubm90ZT17bnVtYmVyOmRhdGExLG5hbWU6d20uX25vdGVzW2RhdGExJTEyXSxvY3RhdmU6d20uZ2V0T2N0YXZlKGRhdGExKX0sZXZlbnQudmVsb2NpdHk9ZGF0YTIvMTI3LGV2ZW50LnJhd1ZlbG9jaXR5PWRhdGEyKTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmtleWFmdGVydG91Y2g/KGV2ZW50LnR5cGU9XCJrZXlhZnRlcnRvdWNoXCIsZXZlbnQubm90ZT17bnVtYmVyOmRhdGExLG5hbWU6d20uX25vdGVzW2RhdGExJTEyXSxvY3RhdmU6d20uZ2V0T2N0YXZlKGRhdGExKX0sZXZlbnQudmFsdWU9ZGF0YTIvMTI3KTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNvbnRyb2xjaGFuZ2UmJmRhdGExPj0wJiYxMTk+PWRhdGExPyhldmVudC50eXBlPVwiY29udHJvbGNoYW5nZVwiLGV2ZW50LmNvbnRyb2xsZXI9e251bWJlcjpkYXRhMSxuYW1lOnRoaXMuZ2V0Q2NOYW1lQnlOdW1iZXIoZGF0YTEpfSxldmVudC52YWx1ZT1kYXRhMik6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsbW9kZSYmZGF0YTE+PTEyMCYmMTI3Pj1kYXRhMT8oZXZlbnQudHlwZT1cImNoYW5uZWxtb2RlXCIsZXZlbnQuY29udHJvbGxlcj17bnVtYmVyOmRhdGExLG5hbWU6dGhpcy5nZXRDaGFubmVsTW9kZUJ5TnVtYmVyKGRhdGExKX0sZXZlbnQudmFsdWU9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucHJvZ3JhbWNoYW5nZT8oZXZlbnQudHlwZT1cInByb2dyYW1jaGFuZ2VcIixldmVudC52YWx1ZT1kYXRhMSk6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsYWZ0ZXJ0b3VjaD8oZXZlbnQudHlwZT1cImNoYW5uZWxhZnRlcnRvdWNoXCIsZXZlbnQudmFsdWU9ZGF0YTEvMTI3KTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLnBpdGNoYmVuZD8oZXZlbnQudHlwZT1cInBpdGNoYmVuZFwiLGV2ZW50LnZhbHVlPSgoZGF0YTI8PDcpK2RhdGExLTgxOTIpLzgxOTIpOmV2ZW50LnR5cGU9XCJ1bmtub3duY2hhbm5lbG1lc3NhZ2VcIix0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFtldmVudC50eXBlXSYmdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbZXZlbnQudHlwZV1bY2hhbm5lbF0mJnRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW2V2ZW50LnR5cGVdW2NoYW5uZWxdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe2NhbGxiYWNrKGV2ZW50KX0pfSxJbnB1dC5wcm90b3R5cGUuZ2V0Q2NOYW1lQnlOdW1iZXI9ZnVuY3Rpb24obnVtYmVyKXtpZihudW1iZXI9cGFyc2VJbnQobnVtYmVyKSwhKG51bWJlcj49MCYmMTE5Pj1udW1iZXIpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2wgY2hhbmdlIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTE5LlwiKTtmb3IodmFyIGNjIGluIHdtLk1JRElfQ09OVFJPTF9DSEFOR0VfTUVTU0FHRVMpaWYobnVtYmVyPT09d20uTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFU1tjY10pcmV0dXJuIGNjO3JldHVybiB2b2lkIDB9LElucHV0LnByb3RvdHlwZS5nZXRDaGFubmVsTW9kZUJ5TnVtYmVyPWZ1bmN0aW9uKG51bWJlcil7aWYobnVtYmVyPXBhcnNlSW50KG51bWJlciksIShudW1iZXI+PTEyMCYmc3RhdHVzPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2wgY2hhbmdlIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMTIwIGFuZCAxMjcuXCIpO2Zvcih2YXIgY20gaW4gd20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVMpaWYobnVtYmVyPT09d20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVNbY21dKXJldHVybiBjbX0sSW5wdXQucHJvdG90eXBlLl9wYXJzZVN5c3RlbUV2ZW50PWZ1bmN0aW9uKGUpe3ZhciBjb21tYW5kPWUuZGF0YVswXSxldmVudD17dGFyZ2V0OnRoaXMsZGF0YTplLmRhdGEsdGltZXN0YW1wOmUudGltZVN0YW1wfTtjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3lzZXg/ZXZlbnQudHlwZT1cInN5c2V4XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnRpbWVjb2RlP2V2ZW50LnR5cGU9XCJ0aW1lY29kZVwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25ncG9zaXRpb24/ZXZlbnQudHlwZT1cInNvbmdwb3NpdGlvblwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25nc2VsZWN0PyhldmVudC50eXBlPVwic29uZ3NlbGVjdFwiLGV2ZW50LnNvbmc9ZS5kYXRhWzFdKTpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMudHVuaW5ncmVxdWVzdD9ldmVudC50eXBlPVwidHVuaW5ncmVxdWVzdFwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5jbG9jaz9ldmVudC50eXBlPVwiY2xvY2tcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RhcnQ/ZXZlbnQudHlwZT1cInN0YXJ0XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTW1wiY29udGludWVcIl0/ZXZlbnQudHlwZT1cImNvbnRpbnVlXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnN0b3A/ZXZlbnQudHlwZT1cInN0b3BcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuYWN0aXZlc2Vuc2luZz9ldmVudC50eXBlPVwiYWN0aXZlc2Vuc2luZ1wiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5yZXNldD9ldmVudC50eXBlPVwicmVzZXRcIjpldmVudC50eXBlPVwidW5rbm93bnN5c3RlbW1lc3NhZ2VcIix0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW2V2ZW50LnR5cGVdJiZ0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW2V2ZW50LnR5cGVdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe2NhbGxiYWNrKGV2ZW50KX0pfSxPdXRwdXQucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oc3RhdHVzLGRhdGEsdGltZXN0YW1wKXtpZighKHN0YXR1cz49MTI4JiYyNTU+PXN0YXR1cykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc3RhdHVzIGJ5dGUgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMTI4ICgweDgwKSBhbmQgMjU1ICgweEZGKS5cIik7dm9pZCAwPT09ZGF0YSYmKGRhdGE9W10pLEFycmF5LmlzQXJyYXkoZGF0YSl8fChkYXRhPVtkYXRhXSk7dmFyIG1lc3NhZ2U9W107cmV0dXJuIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXt2YXIgcGFyc2VkPXBhcnNlSW50KGl0ZW0pO2lmKCEocGFyc2VkPj0wJiYyNTU+PXBhcnNlZCkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJEYXRhIGJ5dGVzIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwICgweDAwKSBhbmQgMjU1ICgweEZGKS5cIik7bWVzc2FnZS5wdXNoKHBhcnNlZCl9KSx0aGlzLl9taWRpT3V0cHV0LnNlbmQoW3N0YXR1c10uY29uY2F0KG1lc3NhZ2UpLHBhcnNlRmxvYXQodGltZXN0YW1wKXx8MCksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3lzZXg9ZnVuY3Rpb24obWFudWZhY3R1cmVyLGRhdGEsb3B0aW9ucyl7aWYoIXdtLnN5c2V4RW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJTeXNleCBtZXNzYWdlIHN1cHBvcnQgbXVzdCBmaXJzdCBiZSBhY3RpdmF0ZWQuXCIpO3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LG1hbnVmYWN0dXJlcj1bXS5jb25jYXQobWFudWZhY3R1cmVyKSxkYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7aWYoMD5pdGVtfHxpdGVtPjEyNyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBkYXRhIGJ5dGVzIG9mIGEgc3lzZXggbWVzc2FnZSBtdXN0IGJlIGludGVnZXJzIGJldHdlZW4gMCAoMHgwMCkgYW5kIDEyNyAoMHg3RikuXCIpfSksZGF0YT1tYW51ZmFjdHVyZXIuY29uY2F0KGRhdGEsd20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3lzZXhlbmQpLHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zeXNleCxkYXRhLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRUaW1lY29kZVF1YXJ0ZXJGcmFtZT1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMudGltZWNvZGUsdmFsdWUsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFNvbmdQb3NpdGlvbj1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXt2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsb3B0aW9ucz1vcHRpb25zfHx7fTt2YXIgbXNiPXZhbHVlPj43JjEyNyxsc2I9MTI3JnZhbHVlO3JldHVybiB0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc29uZ3Bvc2l0aW9uLFttc2IsbHNiXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU29uZ1NlbGVjdD1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSksb3B0aW9ucz1vcHRpb25zfHx7fSwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzb25nIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnNvbmdzZWxlY3QsW3ZhbHVlXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kVHVuaW5nUmVxdWVzdD1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMudHVuaW5ncmVxdWVzdCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENsb2NrPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5jbG9jayx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFN0YXJ0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zdGFydCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENvbnRpbnVlPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1tcImNvbnRpbnVlXCJdLHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3RvcD1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RvcCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZEFjdGl2ZVNlbnNpbmc9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmFjdGl2ZXNlbnNpbmcsW10sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFJlc2V0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5yZXNldCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc3RvcE5vdGU9ZnVuY3Rpb24obm90ZSxjaGFubmVsLG9wdGlvbnMpe2lmKFwiYWxsXCI9PT1ub3RlKXJldHVybiB0aGlzLnNlbmRDaGFubmVsTW9kZShcImFsbG5vdGVzb2ZmXCIsMCxjaGFubmVsLG9wdGlvbnMpO3ZhciBuVmVsb2NpdHk9NjQ7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sb3B0aW9ucy52ZWxvY2l0eT1wYXJzZUZsb2F0KG9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xMjcmJihuVmVsb2NpdHk9b3B0aW9ucy52ZWxvY2l0eSk6IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xJiYoblZlbG9jaXR5PTEyNypvcHRpb25zLnZlbG9jaXR5KSx0aGlzLl9jb252ZXJ0Tm90ZVRvQXJyYXkobm90ZSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXt3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb2ZmPDw0KSsoY2gtMSksW2l0ZW0sTWF0aC5yb3VuZChuVmVsb2NpdHkpXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSl9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnBsYXlOb3RlPWZ1bmN0aW9uKG5vdGUsY2hhbm5lbCxvcHRpb25zKXt2YXIgblZlbG9jaXR5PTY0O2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sb3B0aW9ucy52ZWxvY2l0eT1wYXJzZUZsb2F0KG9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xMjcmJihuVmVsb2NpdHk9b3B0aW9ucy52ZWxvY2l0eSk6IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xJiYoblZlbG9jaXR5PTEyNypvcHRpb25zLnZlbG9jaXR5KSxvcHRpb25zLnRpbWU9dGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSksdGhpcy5fY29udmVydE5vdGVUb0FycmF5KG5vdGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7d20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9uPDw0KSsoY2gtMSksW2l0ZW0sTWF0aC5yb3VuZChuVmVsb2NpdHkpXSxvcHRpb25zLnRpbWUpfS5iaW5kKHRoaXMpKX0uYmluZCh0aGlzKSksb3B0aW9ucy5kdXJhdGlvbj1wYXJzZUZsb2F0KG9wdGlvbnMuZHVyYXRpb24pLG9wdGlvbnMuZHVyYXRpb24pe29wdGlvbnMuZHVyYXRpb248PTAmJihvcHRpb25zLmR1cmF0aW9uPTApO3ZhciBuUmVsZWFzZT02NDtvcHRpb25zLnJlbGVhc2U9cGFyc2VGbG9hdChvcHRpb25zLnJlbGVhc2UpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMucmVsZWFzZSkmJm9wdGlvbnMucmVsZWFzZT49MCYmb3B0aW9ucy5yZWxlYXNlPD0xMjcmJihuUmVsZWFzZT1vcHRpb25zLnJlbGVhc2UpOiFpc05hTihvcHRpb25zLnJlbGVhc2UpJiZvcHRpb25zLnJlbGVhc2U+PTAmJm9wdGlvbnMucmVsZWFzZTw9MSYmKG5SZWxlYXNlPTEyNypvcHRpb25zLnJlbGVhc2UpLHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoaXMuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLm5vdGVvZmY8PDQpKyhjaC0xKSxbaXRlbSxNYXRoLnJvdW5kKG5SZWxlYXNlKV0sKG9wdGlvbnMudGltZXx8d20udGltZSkrb3B0aW9ucy5kdXJhdGlvbil9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKX1yZXR1cm4gdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kS2V5QWZ0ZXJ0b3VjaD1mdW5jdGlvbihub3RlLGNoYW5uZWwscHJlc3N1cmUsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LDE+Y2hhbm5lbHx8Y2hhbm5lbD4xNil0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjaGFubmVsIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAxNi5cIik7cHJlc3N1cmU9cGFyc2VGbG9hdChwcmVzc3VyZSksKGlzTmFOKHByZXNzdXJlKXx8MD5wcmVzc3VyZXx8cHJlc3N1cmU+MSkmJihwcmVzc3VyZT0uNSk7dmFyIG5QcmVzc3VyZT1NYXRoLnJvdW5kKDEyNypwcmVzc3VyZSk7cmV0dXJuIHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmtleWFmdGVydG91Y2g8PDQpKyhjaC0xKSxbaXRlbSxuUHJlc3N1cmVdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ29udHJvbENoYW5nZT1mdW5jdGlvbihjb250cm9sbGVyLHZhbHVlLGNoYW5uZWwsb3B0aW9ucyl7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxcInN0cmluZ1wiPT10eXBlb2YgY29udHJvbGxlcil7aWYoY29udHJvbGxlcj13bS5NSURJX0NPTlRST0xfQ0hBTkdFX01FU1NBR0VTW2NvbnRyb2xsZXJdLCFjb250cm9sbGVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNvbnRyb2xsZXIgbmFtZS5cIil9ZWxzZSBpZihjb250cm9sbGVyPXBhcnNlSW50KGNvbnRyb2xsZXIpLCEoY29udHJvbGxlcj49MCYmMTE5Pj1jb250cm9sbGVyKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNvbnRyb2xsZXIgbnVtYmVycyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTE5LlwiKTtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJDb250cm9sbGVyIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jb250cm9sY2hhbmdlPDw0KSsoY2gtMSksW2NvbnRyb2xsZXIsdmFsdWVdLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0uYmluZCh0aGlzKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsY2hhbm5lbCx0aW1lKXt2YXIgdGhhdD10aGlzO2lmKHBhcmFtZXRlclswXT1wYXJzZUludChwYXJhbWV0ZXJbMF0pLCEocGFyYW1ldGVyWzBdPj0wJiZwYXJhbWV0ZXJbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDY1IHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYocGFyYW1ldGVyWzFdPXBhcnNlSW50KHBhcmFtZXRlclsxXSksIShwYXJhbWV0ZXJbMV0+PTAmJnBhcmFtZXRlclsxXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjb250cm9sNjQgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSgxMDEscGFyYW1ldGVyWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAwLHBhcmFtZXRlclsxXSxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX3NlbGVjdE5vblJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGNoYW5uZWwsdGltZSl7dmFyIHRoYXQ9dGhpcztpZihwYXJhbWV0ZXJbMF09cGFyc2VJbnQocGFyYW1ldGVyWzBdKSwhKHBhcmFtZXRlclswXT49MCYmcGFyYW1ldGVyWzBdPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2w2MyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO2lmKHBhcmFtZXRlclsxXT1wYXJzZUludChwYXJhbWV0ZXJbMV0pLCEocGFyYW1ldGVyWzFdPj0wJiZwYXJhbWV0ZXJbMV08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDYyIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTkscGFyYW1ldGVyWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTgscGFyYW1ldGVyWzFdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2V0Q3VycmVudFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24oZGF0YSxjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7aWYoZGF0YT1bXS5jb25jYXQoZGF0YSksZGF0YVswXT1wYXJzZUludChkYXRhWzBdKSwhKGRhdGFbMF0+PTAmJmRhdGFbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgbXNiIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoNixkYXRhWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksZGF0YVsxXT1wYXJzZUludChkYXRhWzFdKSxkYXRhWzFdPj0wJiZkYXRhWzFdPD0xMjcmJndtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMzgsZGF0YVsxXSxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAxLDEyNyxjaGFubmVsLHt0aW1lOnRpbWV9KSx0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDEwMCwxMjcsY2hhbm5lbCx7dGltZTp0aW1lfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGRhdGEsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sIUFycmF5LmlzQXJyYXkocGFyYW1ldGVyKSl7aWYoIXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHBhcmFtZXRlciBpcyBub3QgYXZhaWxhYmxlLlwiKTtwYXJhbWV0ZXI9d20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdfXJldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0Ll9zZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMudGltZSksdGhhdC5fc2V0Q3VycmVudFJlZ2lzdGVyZWRQYXJhbWV0ZXIoZGF0YSxjaGFubmVsLG9wdGlvbnMudGltZSksdGhhdC5fZGVzZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKGNoYW5uZWwsb3B0aW9ucy50aW1lKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0Tm9uUmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsZGF0YSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhKHBhcmFtZXRlclswXT49MCYmcGFyYW1ldGVyWzBdPD0xMjcmJnBhcmFtZXRlclsxXT49MCYmcGFyYW1ldGVyWzFdPD0xMjcpKXRocm93IG5ldyBFcnJvcihcIlBvc2l0aW9uIDAgYW5kIDEgb2YgdGhlIDItcG9zaXRpb24gcGFyYW1ldGVyIGFycmF5IG11c3QgYm90aCBiZSBiZXR3ZWVuIDAgYW5kIDEyNy5cIik7cmV0dXJuIGRhdGE9W10uY29uY2F0KGRhdGEpLHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdE5vblJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9zZXRDdXJyZW50UmVnaXN0ZXJlZFBhcmFtZXRlcihkYXRhLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5pbmNyZW1lbnRSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhQXJyYXkuaXNBcnJheShwYXJhbWV0ZXIpKXtpZighd20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdKXRocm93IG5ldyBFcnJvcihcIlRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIGlzIG5vdCBhdmFpbGFibGUuXCIpO3BhcmFtZXRlcj13bS5NSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSW3BhcmFtZXRlcl19cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDk2LDAsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5kZWNyZW1lbnRSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMpe2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sIUFycmF5LmlzQXJyYXkocGFyYW1ldGVyKSl7aWYoIXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgaXMgbm90IGF2YWlsYWJsZS5cIik7cGFyYW1ldGVyPXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXX1yZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihwYXJhbWV0ZXIsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoaXMuc2VuZENvbnRyb2xDaGFuZ2UoOTcsMCxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pLHRoaXMuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihjaGFubmVsLG9wdGlvbnMudGltZSl9LmJpbmQodGhpcykpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0UGl0Y2hCZW5kUmFuZ2U9ZnVuY3Rpb24oc2VtaXRvbmVzLGNlbnRzLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHNlbWl0b25lcz1wYXJzZUludChzZW1pdG9uZXMpfHwwLCEoc2VtaXRvbmVzPj0wJiYxMjc+PXNlbWl0b25lcykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc2VtaXRvbmVzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYoY2VudHM9cGFyc2VJbnQoY2VudHMpfHwwLCEoY2VudHM+PTAmJjEyNz49Y2VudHMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNlbnRzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcInBpdGNoYmVuZHJhbmdlXCIsW3NlbWl0b25lcyxjZW50c10sY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0TW9kdWxhdGlvblJhbmdlPWZ1bmN0aW9uKHNlbWl0b25lcyxjZW50cyxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxzZW1pdG9uZXM9cGFyc2VJbnQoc2VtaXRvbmVzKXx8MCwhKHNlbWl0b25lcz49MCYmMTI3Pj1zZW1pdG9uZXMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHNlbWl0b25lcyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO2lmKGNlbnRzPXBhcnNlSW50KGNlbnRzKXx8MCwhKGNlbnRzPj0wJiYxMjc+PWNlbnRzKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjZW50cyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJtb2R1bGF0aW9ucmFuZ2VcIixbc2VtaXRvbmVzLGNlbnRzXSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRNYXN0ZXJUdW5pbmc9ZnVuY3Rpb24odmFsdWUsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sdmFsdWU9cGFyc2VGbG9hdCh2YWx1ZSl8fDAsLTY1Pj12YWx1ZXx8dmFsdWU+PTY0KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBkZWNpbWFsIG51bWJlciBsYXJnZXIgdGhhbiAtNjUgYW5kIHNtYWxsZXIgdGhhbiA2NC5cIik7dmFyIGNvYXJzZT1wYXJzZUludCh2YWx1ZSkrNjQsZmluZT12YWx1ZS1wYXJzZUludCh2YWx1ZSk7ZmluZT1NYXRoLnJvdW5kKChmaW5lKzEpLzIqMTYzODMpO3ZhciBtc2I9ZmluZT4+NyYxMjcsbHNiPTEyNyZmaW5lO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJjaGFubmVsY29hcnNldHVuaW5nXCIsY29hcnNlLGNoYW5uZWwse3RpbWU6b3B0aW9ucy50aW1lfSksdGhhdC5zZXRSZWdpc3RlcmVkUGFyYW1ldGVyKFwiY2hhbm5lbGZpbmV0dW5pbmdcIixbbXNiLGxzYl0sY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0VHVuaW5nUHJvZ3JhbT1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUludCh2YWx1ZSksISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgcHJvZ3JhbSB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJ0dW5pbmdwcm9ncmFtXCIsdmFsdWUsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0VHVuaW5nQmFuaz1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgYmFuayB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJ0dW5pbmdiYW5rXCIsdmFsdWUsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENoYW5uZWxNb2RlPWZ1bmN0aW9uKGNvbW1hbmQsdmFsdWUsY2hhbm5lbCxvcHRpb25zKXtpZihvcHRpb25zPW9wdGlvbnN8fHt9LFwic3RyaW5nXCI9PXR5cGVvZiBjb21tYW5kKXtpZihjb21tYW5kPXdtLk1JRElfQ0hBTk5FTF9NT0RFX01FU1NBR0VTW2NvbW1hbmRdLCFjb21tYW5kKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNoYW5uZWwgbW9kZSBtZXNzYWdlIG5hbWUuXCIpfWVsc2UgaWYoY29tbWFuZD1wYXJzZUludChjb21tYW5kKSwhKGNvbW1hbmQ+PTEyMCYmMTI3Pj1jb21tYW5kKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNoYW5uZWwgbW9kZSBudW1lcmljYWwgaWRlbnRpZmllcnMgbXVzdCBiZSBiZXR3ZWVuIDEyMCBhbmQgMTI3LlwiKTtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsMD52YWx1ZXx8dmFsdWU+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVmFsdWUgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMuY2hhbm5lbG1vZGU8PDQpKyhjaC0xKSxbY29tbWFuZCx2YWx1ZV0sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRQcm9ncmFtQ2hhbmdlPWZ1bmN0aW9uKHByb2dyYW0sY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30scHJvZ3JhbT1wYXJzZUludChwcm9ncmFtKSxcbmlzTmFOKHByb2dyYW0pfHwwPnByb2dyYW18fHByb2dyYW0+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiUHJvZ3JhbSBudW1iZXJzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5wcm9ncmFtY2hhbmdlPDw0KSsoY2gtMSksW3Byb2dyYW1dLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENoYW5uZWxBZnRlcnRvdWNoPWZ1bmN0aW9uKHByZXNzdXJlLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztvcHRpb25zPW9wdGlvbnN8fHt9LHByZXNzdXJlPXBhcnNlRmxvYXQocHJlc3N1cmUpLChpc05hTihwcmVzc3VyZSl8fDA+cHJlc3N1cmV8fHByZXNzdXJlPjEpJiYocHJlc3N1cmU9LjUpO3ZhciBuUHJlc3N1cmU9TWF0aC5yb3VuZCgxMjcqcHJlc3N1cmUpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsYWZ0ZXJ0b3VjaDw8NCkrKGNoLTEpLFtuUHJlc3N1cmVdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFBpdGNoQmVuZD1mdW5jdGlvbihiZW5kLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LGJlbmQ9cGFyc2VGbG9hdChiZW5kKSxpc05hTihiZW5kKXx8LTE+YmVuZHx8YmVuZD4xKXRocm93IG5ldyBSYW5nZUVycm9yKFwiUGl0Y2ggYmVuZCB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gLTEgYW5kIDEuXCIpO3ZhciBuTGV2ZWw9TWF0aC5yb3VuZCgoYmVuZCsxKS8yKjE2MzgzKSxtc2I9bkxldmVsPj43JjEyNyxsc2I9MTI3Jm5MZXZlbDtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucGl0Y2hiZW5kPDw0KSsoY2gtMSksW2xzYixtc2JdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX3BhcnNlVGltZVBhcmFtZXRlcj1mdW5jdGlvbih0aW1lKXt2YXIgcGFyc2VkLHZhbHVlO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0aW1lJiZcIitcIj09PXRpbWUuc3Vic3RyaW5nKDAsMSk/KHBhcnNlZD1wYXJzZUZsb2F0KHRpbWUpLHBhcnNlZCYmcGFyc2VkPjAmJih2YWx1ZT13bS50aW1lK3BhcnNlZCkpOihwYXJzZWQ9cGFyc2VGbG9hdCh0aW1lKSxwYXJzZWQ+d20udGltZSYmKHZhbHVlPXBhcnNlZCkpLHZhbHVlfSxPdXRwdXQucHJvdG90eXBlLl9jb252ZXJ0Tm90ZVRvQXJyYXk9ZnVuY3Rpb24obm90ZSl7dmFyIG5vdGVzPVtdO3JldHVybiBBcnJheS5pc0FycmF5KG5vdGUpfHwobm90ZT1bbm90ZV0pLG5vdGUuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtub3Rlcy5wdXNoKHdtLmd1ZXNzTm90ZU51bWJlcihpdGVtKSl9KSxub3Rlc30sT3V0cHV0LnByb3RvdHlwZS5fb25NaWRpTWVzc2FnZT1mdW5jdGlvbihlKXt9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmXCJvYmplY3RcIj09dHlwZW9mIGRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHdtfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9d206c2NvcGUuV2ViTWlkaXx8KHNjb3BlLldlYk1pZGk9d20pfSh0aGlzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VibWlkaS93ZWJtaWRpLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG5cXG52YXJ5aW5nIHZlYzMgdlZpZXdQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbiNpbmNsdWRlIDxjb21tb24+XFxuI2luY2x1ZGUgPHV2X3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxmb2dfcGFyc192ZXJ0ZXg+XFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICAjaW5jbHVkZSA8dXZfdmVydGV4PlxcblxcbiAgICB2ZWMzIHRyYW5zZm9ybWVkID0gdmVjMyggcG9zaXRpb24gKTtcXG4gICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNCggdHJhbnNmb3JtZWQsIDEuMCApO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcblxcbiAgICB2Vmlld1Bvc2l0aW9uID0gLSBtdlBvc2l0aW9uLnh5ejtcXG4gICAgdlV2ID0gdXY7XFxuXFxuICAgICNpbmNsdWRlIDxmb2dfdmVydGV4Plxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIFBIT05HXFxuI2RlZmluZSBNX1BJIDMuMTRcXG5cXG51bmlmb3JtIHZlYzMgZGlmZnVzZTtcXG51bmlmb3JtIHZlYzMgZW1pc3NpdmU7XFxudW5pZm9ybSB2ZWMzIHNwZWN1bGFyO1xcbnVuaWZvcm0gZmxvYXQgc2hpbmluZXNzO1xcbnVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcXG5cXG51bmlmb3JtIGZsb2F0IHVUaW1lO1xcbnVuaWZvcm0gdmVjMyB1U3RyaXBlT3JpZW50YXRpb247XFxudW5pZm9ybSBmbG9hdCB1SW52ZXJ0O1xcbnVuaWZvcm0gdmVjMyB1U3F1YXJlO1xcbnVuaWZvcm0gZmxvYXQgdVdpZHRoO1xcbnVuaWZvcm0gZmxvYXQgdUhlaWdodDtcXG51bmlmb3JtIGZsb2F0IHVMZW5ndGg7XFxudW5pZm9ybSBmbG9hdCB1UHJvZ3Jlc3M7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDx1dl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxmb2dfcGFyc19mcmFnbWVudD5cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgY29sb3IgPSB2ZWM0KDAuKTtcXG5cXG4gICAgZmxvYXQgYWJzWCA9IGZsb29yKC1jb3MoKHVUaW1lICogMC4xICsgTV9QSSAqIHVTcXVhcmUueCAqICggKCB2VXYueCArIHVQcm9ncmVzcyArIDAuMTUgKSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcbiAgICBmbG9hdCBhYnNZID0gZmxvb3IoLWNvcygoTV9QSSAqIHVTcXVhcmUueSAqICggdlV2LnkgKiAyLiAtIDEuICkgKiAwLjUpKSkgKyAxLjtcXG5cXG4gICAgaWYgKCBhYnNYID4gMC4gfHwgYWJzWSA+IDAuICkge1xcbiAgICAgICBjb2xvciA9IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgb3BhY2l0eSk7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICBjb2xvciA9IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgb3BhY2l0eSk7XFxuICAgIH1cXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxuXFxuICAgICNpbmNsdWRlIDxmb2dfZnJhZ21lbnQ+XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRCbGVuZDtcXG51bmlmb3JtIGZsb2F0IG9wYWNpdHk7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgYmFzZSA9IHRleHR1cmUyRCh0SW5wdXQsIHZVdik7XFxuICAgIHZlYzQgYmxlbmQgPSB0ZXh0dXJlMkQodEJsZW5kLCB2VXYpO1xcblxcbiAgICB2ZWM0IGNvbG9yID0gKDEuMCAtICgoMS4wIC0gYmFzZSkgKiAoMS4wIC0gYmxlbmQpKSk7XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvciAqIG9wYWNpdHkgKyBiYXNlICogKCAxLiAtIG9wYWNpdHkgKTs7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9hZGRpdGl2ZS5mc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZVdiA9IHV2O1xcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2Jhc2ljLnZzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgIHZlYzQgc3VtID0gdmVjNCgwKTtcXG4gICB2ZWMyIHRleGNvb3JkID0gdlV2O1xcbiAgXFxuICAgZm9yKCBpbnQgaT0gLTQgO2kgPCA0OyBpKyspXFxuICAge1xcbiAgICAgICAgZm9yICggaW50IGogPSAtMzsgaiA8IDM7IGorKylcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBzdW0gKz0gdGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQgKyB2ZWMyKGosIGkpKjAuMDA0KSAqIDAuMjU7XFxuICAgICAgICB9XFxuICAgfVxcbiAgICAgICBpZiAodGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQpLnIgPCAwLjMpXFxuICAgIHtcXG4gICAgICAgZ2xfRnJhZ0NvbG9yID0gc3VtKnN1bSowLjAxMiArIHRleHR1cmUyRCh0SW5wdXQsIHRleGNvb3JkKTtcXG4gICAgfVxcbiAgICBlbHNlXFxuICAgIHtcXG4gICAgICAgIGlmICh0ZXh0dXJlMkQodElucHV0LCB0ZXhjb29yZCkuciA8IDAuNSlcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSBzdW0qc3VtKjAuMDA5ICsgdGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZVxcbiAgICAgICAge1xcbiAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHN1bSpzdW0qMC4wMDc1ICsgdGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbS5mc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gZmxvYXQga2VybmVsO1xcbnVuaWZvcm0gZmxvYXQgc2NhbGU7XFxudW5pZm9ybSBmbG9hdCB0aHJlc2g7XFxuXFxudm9pZCBtYWluKClcXG57XFxuICAgIHZlYzQgc3VtID0gdmVjNCgwKTtcXG5cXG4gICAgLy8gbWVzcyBvZiBmb3IgbG9vcHMgZHVlIHRvIGdwdSBjb21waWxlci9oYXJkd2FyZSBsaW1pdGF0aW9uc1xcbiAgICBpbnQgaj0tMjtcXG4gICAgZm9yKCBpbnQgaT0tMjsgaTw9MjsgaSsrKSBzdW0rPXRleHR1cmUyRCh0SW5wdXQsdlV2K3ZlYzIoaSxqKSprZXJuZWwpO1xcbiAgICBqPS0xO1xcbiAgICBmb3IoIGludCBpPS0yOyBpPD0yOyBpKyspIHN1bSs9dGV4dHVyZTJEKHRJbnB1dCx2VXYrdmVjMihpLGopKmtlcm5lbCk7XFxuICAgIGo9MDtcXG4gICAgZm9yKCBpbnQgaT0tMjsgaTw9MjsgaSsrKSBzdW0rPXRleHR1cmUyRCh0SW5wdXQsdlV2K3ZlYzIoaSxqKSprZXJuZWwpO1xcbiAgICBqPTE7XFxuICAgIGZvciggaW50IGk9LTI7IGk8PTI7IGkrKykgc3VtKz10ZXh0dXJlMkQodElucHV0LHZVdit2ZWMyKGksaikqa2VybmVsKTtcXG4gICAgaj0yO1xcbiAgICBmb3IoIGludCBpPS0yOyBpPD0yOyBpKyspIHN1bSs9dGV4dHVyZTJEKHRJbnB1dCx2VXYrdmVjMihpLGopKmtlcm5lbCk7XFxuICAgIHN1bS89MjUuMDtcXG5cXG4gICAgdmVjNCBzPXRleHR1cmUyRCh0SW5wdXQsIHZVdik7XFxuICAgIGdsX0ZyYWdDb2xvcj1zO1xcblxcbiAgICAvLyB1c2UgdGhlIGJsdXJyZWQgY29sb3VyIGlmIGl0J3MgYnJpZ2h0IGVub3VnaFxcbiAgICAvLyBpZiAobGVuZ3RoKHN1bSk+dGhyZXNoKVxcbiAgICAvLyB7XFxuICAgICAgICBnbF9GcmFnQ29sb3IgKz1zdW0qc2NhbGU7XFxuICAgIC8vIH1cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2Jsb29tMi5mc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gdmVjMiBpbmNyZW1lbnQ7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICAgIHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuXFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiAtIGluY3JlbWVudCAqIDQuMCkpICogMC4wNTE7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiAtIGluY3JlbWVudCAqIDMuMCkpICogMC4wOTE4O1xcbiAgICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgLSBpbmNyZW1lbnQgKiAyLjApKSAqIDAuMTIyNDU7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiAtIGluY3JlbWVudCAqIDEuMCkpICogMC4xNTMxO1xcbiAgICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgKyBpbmNyZW1lbnQgKiAwLjApKSAqIDAuMTYzMztcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2ICsgaW5jcmVtZW50ICogMS4wKSkgKiAwLjE1MzE7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiArIGluY3JlbWVudCAqIDIuMCkpICogMC4xMjI0NTtcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2ICsgaW5jcmVtZW50ICogMy4wKSkgKiAwLjA5MTg7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiArIGluY3JlbWVudCAqIDQuMCkpICogMC4wNTE7XFxuXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbXRlc3QuZnNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG51bmlmb3JtIHZlYzIgZGVsdGE7XFxuXFxuY29uc3QgZmxvYXQgc2FtcGxlcyA9IDMwLjtcXG5cXG5mbG9hdCByYW5kb20odmVjMyBzY2FsZSxmbG9hdCBzZWVkKXtyZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6K3NlZWQsc2NhbGUpKSo0Mzc1OC41NDUzK3NlZWQpO31cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgIHZlYzQgY29sb3I9dmVjNCgwLjApO1xcbiAgICBmbG9hdCB0b3RhbD0wLjA7XFxuICAgIGZsb2F0IG9mZnNldD1yYW5kb20odmVjMygxMi45ODk4LDc4LjIzMywxNTEuNzE4MiksMC4wKTtcXG4gICAgZm9yKGZsb2F0IHQ9LXNhbXBsZXM7dDw9c2FtcGxlczt0Kyspe1xcbiAgICAgICAgZmxvYXQgcGVyY2VudD0odCtvZmZzZXQtMC41KS9zYW1wbGVzO1xcbiAgICAgICAgZmxvYXQgd2VpZ2h0PTEuMC1hYnMocGVyY2VudCk7XFxuICAgICAgICB2ZWM0IHNhbXBsZT10ZXh0dXJlMkQodElucHV0LHZVditkZWx0YSpwZXJjZW50KTtcXG4gICAgICAgIHNhbXBsZS5yZ2IqPXNhbXBsZS5hO1xcbiAgICAgICAgY29sb3IrPXNhbXBsZSp3ZWlnaHQ7XFxuICAgICAgICB0b3RhbCs9d2VpZ2h0O1xcbiAgICB9XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3I9Y29sb3IvdG90YWw7XFxuICAgIGdsX0ZyYWdDb2xvci5yZ2IvPWdsX0ZyYWdDb2xvci5hKzAuMDAwMDE7XFxuICAgIFxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYm94LWJsdXIuZnNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2KTtcXG5cXG5cXHQvLyBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZlYzModlV2LnkpLCAxLik7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9jb3B5LmZzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcblxcbnVuaWZvcm0gZmxvYXQgdGltZTtcXG5cXG51bmlmb3JtIGZsb2F0IG5vaXNlQW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgbm9pc2VTcGVlZDtcXG51bmlmb3JtIGZsb2F0IHZpZ25ldHRlRmFsbG9mO1xcbnVuaWZvcm0gZmxvYXQgdmlnbmV0dGVBbW91bnQ7XFxudW5pZm9ybSB2ZWMyIHNwbGl0RGVsdGE7XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCB6b29tQmx1clN0cmVuZ3RoO1xcbnVuaWZvcm0gZmxvYXQgYnJpZ2h0bmVzcztcXG51bmlmb3JtIGZsb2F0IGNvbnRyYXN0O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuZmxvYXQgcmFuZG9tKHZlYzIgbiwgZmxvYXQgb2Zmc2V0ICl7XFxuXFx0Ly9yZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6K3NlZWQsc2NhbGUpKSo0Mzc1OC41NDUzKTtcXG5cXHRyZXR1cm4gLjUgLSBmcmFjdChzaW4oZG90KG4ueHkgKyB2ZWMyKCBvZmZzZXQsIDAuICksIHZlYzIoMTIuOTg5OCwgNzguMjMzKSkpKiA0Mzc1OC41NDUzKTtcXG59XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IGNvbG9yID0gdmVjNCgwLjApO1xcblxcbiAgICAvLyByZ2Igc3BsaXRcXG4gICAgdmVjMiBkaXIgPSB2VXYgLSB2ZWMyKCAuNSApO1xcblxcdGZsb2F0IGQgPSAuNyAqIGxlbmd0aCggZGlyICk7XFxuXFx0bm9ybWFsaXplKCBkaXIgKTtcXG5cXHR2ZWMyIHZhbHVlID0gZCAqIGRpciAqIHNwbGl0RGVsdGE7XFxuXFx0dmVjNCBjMSA9IHRleHR1cmUyRCggdElucHV0LCB2VXYgLSB2YWx1ZSAvIHJlc29sdXRpb24ueCApO1xcblxcdHZlYzQgYzIgPSB0ZXh0dXJlMkQoIHRJbnB1dCwgdlV2ICk7XFxuXFx0dmVjNCBjMyA9IHRleHR1cmUyRCggdElucHV0LCB2VXYgKyB2YWx1ZSAvIHJlc29sdXRpb24ueSApO1xcblxcdGNvbG9yID0gdmVjNCggYzEuciwgYzIuZywgYzMuYiwgYzEuYSArIGMyLmEgKyBjMy5iICk7XFxuXFxuICAgIC8vbm9pc2VcXG4gICAgY29sb3IgKz0gdmVjNCggdmVjMyggbm9pc2VBbW91bnQgKiByYW5kb20oIHZVdiwgLjAwMDAxICogbm9pc2VTcGVlZCAqIHRpbWUgKSApLCAxLiApO1xcblxcbiAgICB2ZWMzIGNvbG9yQ29udHJhc3RlZCA9IGNvbG9yLnJnYiAqIGNvbnRyYXN0O1xcbiAgICB2ZWMzIGJyaWdodCA9IGNvbG9yQ29udHJhc3RlZCArIHZlYzMoYnJpZ2h0bmVzcyk7XFxuICAgIGNvbG9yLnJnYiA9IGJyaWdodDtcXG4gICAgXFxuICAgIC8vdmlnbmV0dGVcXG4gICAgZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHZVdiwgdmVjMigwLjUsIDAuNSkpO1xcbiAgICBjb2xvci5yZ2IgKj0gc21vb3Roc3RlcCgwLjgsIHZpZ25ldHRlRmFsbG9mICogMC43OTksIGRpc3QgKiAodmlnbmV0dGVBbW91bnQgKyB2aWduZXR0ZUZhbGxvZikpO1xcblxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2N1c3RvbS5mc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9kb2YuZnNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4jZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvMTI4LjApXFxuI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wLzguMClcXG4jZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgdmVjMiByZXMgPSAxLiAvIHJlc29sdXRpb247XFxuXFxuICAgIHZlYzMgcmdiTlcgPSB0ZXh0dXJlMkQoIHRJbnB1dCwgKCB2VXYueHkgKyB2ZWMyKCAtMS4wLCAtMS4wICkgKiByZXMgKSApLnh5ejtcXG4gICAgdmVjMyByZ2JORSA9IHRleHR1cmUyRCggdElucHV0LCAoIHZVdi54eSArIHZlYzIoIDEuMCwgLTEuMCApICogcmVzICkgKS54eXo7XFxuICAgIHZlYzMgcmdiU1cgPSB0ZXh0dXJlMkQoIHRJbnB1dCwgKCB2VXYueHkgKyB2ZWMyKCAtMS4wLCAxLjAgKSAqIHJlcyApICkueHl6O1xcbiAgICB2ZWMzIHJnYlNFID0gdGV4dHVyZTJEKCB0SW5wdXQsICggdlV2Lnh5ICsgdmVjMiggMS4wLCAxLjAgKSAqIHJlcyApICkueHl6O1xcbiAgICB2ZWM0IHJnYmFNICA9IHRleHR1cmUyRCggdElucHV0LCAgdlV2Lnh5ICAqIHJlcyApO1xcbiAgICB2ZWMzIHJnYk0gID0gcmdiYU0ueHl6O1xcbiAgICB2ZWMzIGx1bWEgPSB2ZWMzKCAwLjI5OSwgMC41ODcsIDAuMTE0ICk7XFxuXFxuICAgIGZsb2F0IGx1bWFOVyA9IGRvdCggcmdiTlcsIGx1bWEgKTtcXG4gICAgZmxvYXQgbHVtYU5FID0gZG90KCByZ2JORSwgbHVtYSApO1xcbiAgICBmbG9hdCBsdW1hU1cgPSBkb3QoIHJnYlNXLCBsdW1hICk7XFxuICAgIGZsb2F0IGx1bWFTRSA9IGRvdCggcmdiU0UsIGx1bWEgKTtcXG4gICAgZmxvYXQgbHVtYU0gID0gZG90KCByZ2JNLCAgbHVtYSApO1xcbiAgICBmbG9hdCBsdW1hTWluID0gbWluKCBsdW1hTSwgbWluKCBtaW4oIGx1bWFOVywgbHVtYU5FICksIG1pbiggbHVtYVNXLCBsdW1hU0UgKSApICk7XFxuICAgIGZsb2F0IGx1bWFNYXggPSBtYXgoIGx1bWFNLCBtYXgoIG1heCggbHVtYU5XLCBsdW1hTkUpICwgbWF4KCBsdW1hU1csIGx1bWFTRSApICkgKTtcXG5cXG4gICAgdmVjMiBkaXI7XFxuICAgIGRpci54ID0gLSgobHVtYU5XICsgbHVtYU5FKSAtIChsdW1hU1cgKyBsdW1hU0UpKTtcXG4gICAgZGlyLnkgPSAgKChsdW1hTlcgKyBsdW1hU1cpIC0gKGx1bWFORSArIGx1bWFTRSkpO1xcblxcbiAgICBmbG9hdCBkaXJSZWR1Y2UgPSBtYXgoICggbHVtYU5XICsgbHVtYU5FICsgbHVtYVNXICsgbHVtYVNFICkgKiAoIDAuMjUgKiBGWEFBX1JFRFVDRV9NVUwgKSwgRlhBQV9SRURVQ0VfTUlOICk7XFxuXFxuICAgIGZsb2F0IHJjcERpck1pbiA9IDEuMCAvICggbWluKCBhYnMoIGRpci54ICksIGFicyggZGlyLnkgKSApICsgZGlyUmVkdWNlICk7XFxuICAgIGRpciA9IG1pbiggdmVjMiggRlhBQV9TUEFOX01BWCwgIEZYQUFfU1BBTl9NQVgpLFxcbiAgICAgICAgICBtYXgoIHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSxcXG4gICAgICAgICAgICAgICAgZGlyICogcmNwRGlyTWluKSkgKiByZXM7XFxuICAgIHZlYzQgcmdiQSA9ICgxLjAvMi4wKSAqIChcXG4gICAgdGV4dHVyZTJEKHRJbnB1dCwgIHZVdi54eSArIGRpciAqICgxLjAvMy4wIC0gMC41KSkgK1xcbiAgICB0ZXh0dXJlMkQodElucHV0LCAgdlV2Lnh5ICsgZGlyICogKDIuMC8zLjAgLSAwLjUpKSk7XFxuICAgIHZlYzQgcmdiQiA9IHJnYkEgKiAoMS4wLzIuMCkgKyAoMS4wLzQuMCkgKiAoXFxuICAgIHRleHR1cmUyRCh0SW5wdXQsICB2VXYueHkgKyBkaXIgKiAoMC4wLzMuMCAtIDAuNSkpICtcXG4gICAgdGV4dHVyZTJEKHRJbnB1dCwgIHZVdi54eSArIGRpciAqICgzLjAvMy4wIC0gMC41KSkpO1xcbiAgICBmbG9hdCBsdW1hQiA9IGRvdChyZ2JCLCB2ZWM0KGx1bWEsIDAuMCkpO1xcblxcbiAgICBpZiAoICggbHVtYUIgPCBsdW1hTWluICkgfHwgKCBsdW1hQiA+IGx1bWFNYXggKSApIHtcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHJnYkE7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICBnbF9GcmFnQ29sb3IgPSByZ2JCO1xcbiAgICB9XFxuXFxuICAgIC8vZ2xfRnJhZ0NvbG9yID0gdmVjNCggdGV4dHVyZTJEKCB0SW5wdXQsdlV2ICkueHl6LCAxLiApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvZnhhYS5mc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gdmVjMiBkaXJlY3Rpb247XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IGNvbG9yID0gdmVjNCgwLjApO1xcbiAgICB2ZWMyIG9mZjEgPSB2ZWMyKDEuMzg0NjE1Mzg0NikgKiBkaXJlY3Rpb247XFxuICAgIHZlYzIgb2ZmMiA9IHZlYzIoMy4yMzA3NjkyMzA4KSAqIGRpcmVjdGlvbjtcXG4gICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2KSAqIDAuMjI3MDI3MDI3MDtcXG4gICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2ICsgKG9mZjEgLyByZXNvbHV0aW9uKSkgKiAwLjMxNjIxNjIxNjI7XFxuICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsIHZVdiAtIChvZmYxIC8gcmVzb2x1dGlvbikpICogMC4zMTYyMTYyMTYyO1xcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCB2VXYgKyAob2ZmMiAvIHJlc29sdXRpb24pKSAqIDAuMDcwMjcwMjcwMztcXG4gICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2IC0gKG9mZjIgLyByZXNvbHV0aW9uKSkgKiAwLjA3MDI3MDI3MDM7XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2dhdXNzaWFuLmZzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gZmxvYXQgYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3BlZWQ7XFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuZmxvYXQgcmFuZG9tKHZlYzIgbiwgZmxvYXQgb2Zmc2V0ICl7XFxuXFx0Ly9yZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6K3NlZWQsc2NhbGUpKSo0Mzc1OC41NDUzKTtcXG5cXHRyZXR1cm4gLjUgLSBmcmFjdChzaW4oZG90KG4ueHkgKyB2ZWMyKCBvZmZzZXQsIDAuICksIHZlYzIoMTIuOTg5OCwgNzguMjMzKSkpKiA0Mzc1OC41NDUzKTtcXG59XFxuXFxudm9pZCBtYWluKCkge1xcblxcblxcdHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodElucHV0LCB2VXYpO1xcblxcblxcdC8vY29sb3IgKz0gYW1vdW50ICogKCAuNSAtIHJhbmRvbSggdmVjMyggMS4gKSwgbGVuZ3RoKCBnbF9GcmFnQ29vcmQgKSArIHNwZWVkICogLjAxICogdGltZSApICk7XFxuXFx0Y29sb3IgKz0gdmVjNCggdmVjMyggYW1vdW50ICogcmFuZG9tKCB2VXYsIC4wMDAwMSAqIHNwZWVkICogdGltZSApICksIDEuICk7XFxuXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxuXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ub2lzZS5mc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8vIHZhcnlpbmcgdmVjMiB2VXY7XFxuLy8gdW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcblxcbi8vIGNvbnN0IGZsb2F0IGJsdXJfc3RhcnQgPSAxLjA7XFxuXFxuLy8gdmVjMiBvZmZzZXQgPSB2ZWMyKDAuMDAxLCAwLjAwMSk7XFxuXFxuLy8gZmxvYXQgZmFjdG9yID0gMS47XFxuLy8gZmxvYXQgc3RyZW5ndGggPSAxMC47XFxuXFxuLy8gY29uc3QgaW50IG9jY3VyZW5jZXMgPSAxMDA7XFxuLy8gZmxvYXQgem9vbSA9IDEuO1xcblxcbi8vIHZvaWQgbWFpbigpXFxuLy8ge1xcbi8vICAgICBmbG9hdCBzY2FsZSA9IGJsdXJfc3RhcnQgKiB6b29tO1xcbi8vICAgICB2ZWM0IGMgPSB2ZWM0KDApO1xcbiAgICBcXG4vLyAgICAgZm9yKCBpbnQgaSA9IDA7IGkgPCBvY2N1cmVuY2VzOyArK2kgKSB7XFxuLy8gICAgICAgYyArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2ICogc2NhbGUpICsgb2Zmc2V0KTtcXG4vLyAgICAgICBzY2FsZSArPSBzdHJlbmd0aCAvIGZsb2F0KG9jY3VyZW5jZXMpO1xcbi8vICAgICB9XFxuXFxuLy8gICAgIGdsX0ZyYWdDb2xvciA9IGMgKiBmYWN0b3I7XFxuLy8gfVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gdmVjMiBsaWdodFBvc2l0aW9uO1xcbnVuaWZvcm0gZmxvYXQgZXhwb3N1cmU7XFxudW5pZm9ybSBmbG9hdCBkZWNheTtcXG51bmlmb3JtIGZsb2F0IGRlbnNpdHk7XFxudW5pZm9ybSBmbG9hdCB3ZWlnaHQ7XFxudW5pZm9ybSBpbnQgc2FtcGxlcztcXG5jb25zdCBpbnQgTUFYX1NBTVBMRVMgPSAxMDA7XFxudm9pZCBtYWluKCl7XFxuICBcXG4gIHZlYzIgdGV4Q29vcmQgPSB2VXY7XFxuICAvLyBDYWxjdWxhdGUgdmVjdG9yIGZyb20gcGl4ZWwgdG8gbGlnaHQgc291cmNlIGluIHNjcmVlbiBzcGFjZVxcbiAgdmVjMiBkZWx0YVRleHRDb29yZCA9IHRleENvb3JkIC0gdmVjMigwLjUsIDAuNSk7XFxuICAvLyBEaXZpZGUgYnkgbnVtYmVyIG9mIHNhbXBsZXMgYW5kIHNjYWxlIGJ5IGNvbnRyb2wgZmFjdG9yXFxuICBkZWx0YVRleHRDb29yZCAqPSAxLjAgLyBmbG9hdChzYW1wbGVzKSAqIGRlbnNpdHk7XFxuICAvLyBTdG9yZSBpbml0aWFsIHNhbXBsZVxcbiAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh0SW5wdXQsIHRleENvb3JkKTtcXG4gIC8vIHNldCB1cCBpbGx1bWluYXRpb24gZGVjYXkgZmFjdG9yXFxuICBmbG9hdCBpbGx1bWluYXRpb25EZWNheSA9IDEuMDtcXG4gIFxcbiAgLy8gZXZhbHVhdGUgdGhlIHN1bW1hdGlvbiBmb3Igc2FtcGxlcyBudW1iZXIgb2YgaXRlcmF0aW9ucyB1cCB0byAxMDBcXG4gIGZvcihpbnQgaT0wOyBpIDwgTUFYX1NBTVBMRVM7IGkrKyl7XFxuICAgIC8vIHdvcmsgYXJvdW5kIGZvciBkeW5hbWljIG51bWJlciBvZiBsb29wIGl0ZXJhdGlvbnNcXG4gICAgaWYoaSA9PSBzYW1wbGVzKXtcXG4gICAgICBicmVhaztcXG4gICAgfVxcbiAgICBcXG4gICAgLy8gc3RlcCBzYW1wbGUgbG9jYXRpb24gYWxvbmcgcmF5XFxuICAgIHRleENvb3JkIC09IGRlbHRhVGV4dENvb3JkO1xcbiAgICAvLyByZXRyaWV2ZSBzYW1wbGUgYXQgbmV3IGxvY2F0aW9uXFxuICAgIHZlYzQgc2FtcGxlID0gdGV4dHVyZTJEKHRJbnB1dCwgdGV4Q29vcmQpO1xcbiAgICAvLyBhcHBseSBzYW1wbGUgYXR0ZW51YXRpb24gc2NhbGUvZGVjYXkgZmFjdG9yc1xcbiAgICBzYW1wbGUgKj0gaWxsdW1pbmF0aW9uRGVjYXkgKiB3ZWlnaHQ7XFxuICAgIC8vIGFjY3VtdWxhdGUgY29tYmluZWQgY29sb3JcXG4gICAgY29sb3IgKz0gc2FtcGxlO1xcbiAgICAvLyB1cGRhdGUgZXhwb25lbnRpYWwgZGVjYXkgZmFjdG9yXFxuICAgIGlsbHVtaW5hdGlvbkRlY2F5ICo9IGRlY2F5O1xcbiAgXFxuICB9XFxuICAvLyBvdXRwdXQgZmluYWwgY29sb3Igd2l0aCBhIGZ1cnRoZXIgc2NhbGUgY29udHJvbCBmYWN0b3JcXG4gIGdsX0ZyYWdDb2xvciA9IGNvbG9yICogZXhwb3N1cmU7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9yYWRpYWwtYmx1ci5mc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG51bmlmb3JtIGZsb2F0IGFtb3VudDtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG5cXHR2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2KTtcXG5cXHRmbG9hdCByID0gY29sb3IucjtcXG5cXHRmbG9hdCBnID0gY29sb3IuZztcXG5cXHRmbG9hdCBiID0gY29sb3IuYjtcXG5cXHRcXG5cXHRjb2xvci5yID0gbWluKDEuMCwgKHIgKiAoMS4wIC0gKDAuNjA3ICogYW1vdW50KSkpICsgKGcgKiAoMC43NjkgKiBhbW91bnQpKSArIChiICogKDAuMTg5ICogYW1vdW50KSkpO1xcblxcdGNvbG9yLmcgPSBtaW4oMS4wLCAociAqIDAuMzQ5ICogYW1vdW50KSArIChnICogKDEuMCAtICgwLjMxNCAqIGFtb3VudCkpKSArIChiICogMC4xNjggKiBhbW91bnQpKTtcXG5cXHRjb2xvci5iID0gbWluKDEuMCwgKHIgKiAwLjI3MiAqIGFtb3VudCkgKyAoZyAqIDAuNTM0ICogYW1vdW50KSArIChiICogKDEuMCAtICgwLjg2OSAqIGFtb3VudCkpKSk7XFxuXFx0XFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9zZXBpYS5mc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gZmxvYXQgY2FtZXJhTmVhcjtcXG51bmlmb3JtIGZsb2F0IGNhbWVyYUZhcjtcXG5cXG4jaWZkZWYgVVNFX0xPR0RFUFRIQlVGXFxuICAgIHVuaWZvcm0gZmxvYXQgbG9nRGVwdGhCdWZGQztcXG4jZW5kaWZcXG5cXG51bmlmb3JtIGZsb2F0IHJhZGl1czsgICAgIC8vIGFvIHJhZGl1c1xcbnVuaWZvcm0gYm9vbCBvbmx5QU87ICAgICAgLy8gdXNlIG9ubHkgYW1iaWVudCBvY2NsdXNpb24gcGFzcz9cXG5cXG51bmlmb3JtIHZlYzIgc2l6ZTsgICAgICAgIC8vIHRleHR1cmUgd2lkdGgsIGhlaWdodFxcbnVuaWZvcm0gZmxvYXQgYW9DbGFtcDsgICAgLy8gZGVwdGggY2xhbXAgLSByZWR1Y2VzIGhhbG9pbmcgYXQgc2NyZWVuIGVkZ2VzXFxuXFxudW5pZm9ybSBmbG9hdCBsdW1JbmZsdWVuY2U7ICAvLyBob3cgbXVjaCBsdW1pbmFuY2UgYWZmZWN0cyBvY2NsdXNpb25cXG5cXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSBzYW1wbGVyMkQgdERlcHRoO1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuLy8gI2RlZmluZSBQSSAzLjE0MTU5MjY1XFxuI2RlZmluZSBETCAyLjM5OTk2MzIyOTcyODY1MyAgLy8gUEkgKiAoIDMuMCAtIHNxcnQoIDUuMCApIClcXG4jZGVmaW5lIEVVTEVSIDIuNzE4MjgxODI4NDU5MDQ1XFxuXFxuICAgICAgICAvLyB1c2VyIHZhcmlhYmxlc1xcblxcbmNvbnN0IGludCBzYW1wbGVzID0gNjQ7ICAgICAvLyBhbyBzYW1wbGUgY291bnRcXG5cXG5jb25zdCBib29sIHVzZU5vaXNlID0gdHJ1ZTsgICAgICAvLyB1c2Ugbm9pc2UgaW5zdGVhZCBvZiBwYXR0ZXJuIGZvciBzYW1wbGUgZGl0aGVyaW5nXFxuY29uc3QgZmxvYXQgbm9pc2VBbW91bnQgPSAwLjAwMDQ7IC8vIGRpdGhlcmluZyBhbW91bnRcXG5cXG5jb25zdCBmbG9hdCBkaWZmQXJlYSA9IDAuNDsgICAvLyBzZWxmLXNoYWRvd2luZyByZWR1Y3Rpb25cXG5jb25zdCBmbG9hdCBnRGlzcGxhY2UgPSAwLjQ7ICAvLyBnYXVzcyBiZWxsIGNlbnRlclxcblxcblxcbi8vIFJHQkEgZGVwdGhcXG5cXG52ZWMzIHBhY2tOb3JtYWxUb1JHQiggY29uc3QgaW4gdmVjMyBub3JtYWwgKSB7XFxuICAgIHJldHVybiBub3JtYWxpemUoIG5vcm1hbCApICogMC41ICsgMC41O1xcbn1cXG5cXG52ZWMzIHVucGFja1JHQlRvTm9ybWFsKCBjb25zdCBpbiB2ZWMzIHJnYiApIHtcXG4gICAgcmV0dXJuIDIuMCAqIHJnYi54eXogLSAxLjA7XFxufVxcblxcbmNvbnN0IGZsb2F0IFBhY2tVcHNjYWxlID0gMjU2LiAvIDI1NS47IC8vIGZyYWN0aW9uIC0+IDAuLjEgKGluY2x1ZGluZyAxKVxcbmNvbnN0IGZsb2F0IFVucGFja0Rvd25zY2FsZSA9IDI1NS4gLyAyNTYuOyAvLyAwLi4xIC0+IGZyYWN0aW9uIChleGNsdWRpbmcgMSlcXG5cXG5jb25zdCB2ZWMzIFBhY2tGYWN0b3JzID0gdmVjMyggMjU2LiAqIDI1Ni4gKiAyNTYuLCAyNTYuICogMjU2LiwgIDI1Ni4gKTtcXG5jb25zdCB2ZWM0IFVucGFja0ZhY3RvcnMgPSBVbnBhY2tEb3duc2NhbGUgLyB2ZWM0KCBQYWNrRmFjdG9ycywgMS4gKTtcXG5cXG5jb25zdCBmbG9hdCBTaGlmdFJpZ2h0OCA9IDEuIC8gMjU2LjtcXG5cXG52ZWM0IHBhY2tEZXB0aFRvUkdCQSggY29uc3QgaW4gZmxvYXQgdiApIHtcXG4gICAgdmVjNCByID0gdmVjNCggZnJhY3QoIHYgKiBQYWNrRmFjdG9ycyApLCB2ICk7XFxuICAgIHIueXp3IC09IHIueHl6ICogU2hpZnRSaWdodDg7IC8vIHRpZHkgb3ZlcmZsb3dcXG4gICAgcmV0dXJuIHIgKiBQYWNrVXBzY2FsZTtcXG59XFxuXFxuZmxvYXQgdW5wYWNrUkdCQVRvRGVwdGgoIGNvbnN0IGluIHZlYzQgdiApIHtcXG4gICAgcmV0dXJuIGRvdCggdiwgVW5wYWNrRmFjdG9ycyApO1xcbn1cXG5cXG4vLyBOT1RFOiB2aWV3Wi9leWVaIGlzIDwgMCB3aGVuIGluIGZyb250IG9mIHRoZSBjYW1lcmEgcGVyIE9wZW5HTCBjb252ZW50aW9uc1xcblxcbmZsb2F0IHZpZXdaVG9PcnRob2dyYXBoaWNEZXB0aCggY29uc3QgaW4gZmxvYXQgdmlld1osIGNvbnN0IGluIGZsb2F0IG5lYXIsIGNvbnN0IGluIGZsb2F0IGZhciApIHtcXG4gICAgcmV0dXJuICggdmlld1ogKyBuZWFyICkgLyAoIG5lYXIgLSBmYXIgKTtcXG59XFxuZmxvYXQgb3J0aG9ncmFwaGljRGVwdGhUb1ZpZXdaKCBjb25zdCBpbiBmbG9hdCBsaW5lYXJDbGlwWiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcbiAgICByZXR1cm4gbGluZWFyQ2xpcFogKiAoIG5lYXIgLSBmYXIgKSAtIG5lYXI7XFxufVxcblxcbmZsb2F0IHZpZXdaVG9QZXJzcGVjdGl2ZURlcHRoKCBjb25zdCBpbiBmbG9hdCB2aWV3WiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcbiAgICByZXR1cm4gKCggbmVhciArIHZpZXdaICkgKiBmYXIgKSAvICgoIGZhciAtIG5lYXIgKSAqIHZpZXdaICk7XFxufVxcbmZsb2F0IHBlcnNwZWN0aXZlRGVwdGhUb1ZpZXdaKCBjb25zdCBpbiBmbG9hdCBpbnZDbGlwWiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcbiAgICByZXR1cm4gKCBuZWFyICogZmFyICkgLyAoICggZmFyIC0gbmVhciApICogaW52Q2xpcFogLSBmYXIgKTtcXG59XFxuXFxuLy8gZ2VuZXJhdGluZyBub2lzZSAvIHBhdHRlcm4gdGV4dHVyZSBmb3IgZGl0aGVyaW5nXFxuXFxudmVjMiByYW5kKCBjb25zdCB2ZWMyIGNvb3JkICkge1xcblxcbiAgICB2ZWMyIG5vaXNlO1xcblxcbiAgICBpZiAoIHVzZU5vaXNlICkge1xcblxcbiAgICAgICAgZmxvYXQgbnggPSBkb3QgKCBjb29yZCwgdmVjMiggMTIuOTg5OCwgNzguMjMzICkgKTtcXG4gICAgICAgIGZsb2F0IG55ID0gZG90ICggY29vcmQsIHZlYzIoIDEyLjk4OTgsIDc4LjIzMyApICogMi4wICk7XFxuXFxuICAgICAgICBub2lzZSA9IGNsYW1wKCBmcmFjdCAoIDQzNzU4LjU0NTMgKiBzaW4oIHZlYzIoIG54LCBueSApICkgKSwgMC4wLCAxLjAgKTtcXG5cXG4gICAgfSBlbHNlIHtcXG5cXG4gICAgICAgIGZsb2F0IGZmID0gZnJhY3QoIDEuMCAtIGNvb3JkLnMgKiAoIHNpemUueCAvIDIuMCApICk7XFxuICAgICAgICBmbG9hdCBnZyA9IGZyYWN0KCBjb29yZC50ICogKCBzaXplLnkgLyAyLjAgKSApO1xcblxcbiAgICAgICAgbm9pc2UgPSB2ZWMyKCAwLjI1LCAwLjc1ICkgKiB2ZWMyKCBmZiApICsgdmVjMiggMC43NSwgMC4yNSApICogZ2c7XFxuXFxuICAgIH1cXG5cXG4gICAgcmV0dXJuICggbm9pc2UgKiAyLjAgIC0gMS4wICkgKiBub2lzZUFtb3VudDtcXG5cXG59XFxuXFxuZmxvYXQgcmVhZERlcHRoKCBjb25zdCBpbiB2ZWMyIGNvb3JkICkge1xcblxcbiAgICBmbG9hdCBjYW1lcmFGYXJQbHVzTmVhciA9IGNhbWVyYUZhciArIGNhbWVyYU5lYXI7XFxuICAgIGZsb2F0IGNhbWVyYUZhck1pbnVzTmVhciA9IGNhbWVyYUZhciAtIGNhbWVyYU5lYXI7XFxuICAgIGZsb2F0IGNhbWVyYUNvZWYgPSAyLjAgKiBjYW1lcmFOZWFyO1xcblxcbiAgICAjaWZkZWYgVVNFX0xPR0RFUFRIQlVGXFxuXFxuICAgICAgICBmbG9hdCBsb2d6ID0gdW5wYWNrUkdCQVRvRGVwdGgoIHRleHR1cmUyRCggdERlcHRoLCBjb29yZCApICk7XFxuICAgICAgICBmbG9hdCB3ID0gcG93KDIuMCwgKGxvZ3ogLyBsb2dEZXB0aEJ1ZkZDKSkgLSAxLjA7XFxuICAgICAgICBmbG9hdCB6ID0gKGxvZ3ogLyB3KSArIDEuMDtcXG5cXG4gICAgI2Vsc2VcXG5cXG4gICAgICAgIGZsb2F0IHogPSB1bnBhY2tSR0JBVG9EZXB0aCggdGV4dHVyZTJEKCB0RGVwdGgsIGNvb3JkICkgKTtcXG5cXG4gICAgI2VuZGlmXFxuXFxuICAgIHJldHVybiBjYW1lcmFDb2VmIC8gKCBjYW1lcmFGYXJQbHVzTmVhciAtIHogKiBjYW1lcmFGYXJNaW51c05lYXIgKTtcXG5cXG5cXG59XFxuXFxuZmxvYXQgY29tcGFyZURlcHRocyggY29uc3QgaW4gZmxvYXQgZGVwdGgxLCBjb25zdCBpbiBmbG9hdCBkZXB0aDIsIGlub3V0IGludCBmYXIgKSB7XFxuXFxuICAgIGZsb2F0IGdhcmVhID0gOC4wOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnYXVzcyBiZWxsIHdpZHRoXFxuICAgIGZsb2F0IGRpZmYgPSAoIGRlcHRoMSAtIGRlcHRoMiApICogMTAwLjA7ICAvLyBkZXB0aCBkaWZmZXJlbmNlICgwLTEwMClcXG5cXG4gICAgICAgICAgICAvLyByZWR1Y2UgbGVmdCBiZWxsIHdpZHRoIHRvIGF2b2lkIHNlbGYtc2hhZG93aW5nXFxuXFxuICAgIGlmICggZGlmZiA8IGdEaXNwbGFjZSApIHtcXG5cXG4gICAgICAgIGdhcmVhID0gZGlmZkFyZWE7XFxuXFxuICAgIH0gZWxzZSB7XFxuXFxuICAgICAgICBmYXIgPSAxO1xcblxcbiAgICB9XFxuXFxuICAgIGZsb2F0IGRkID0gZGlmZiAtIGdEaXNwbGFjZTtcXG4gICAgZmxvYXQgZ2F1c3MgPSBwb3coIEVVTEVSLCAtMi4wICogKCBkZCAqIGRkICkgLyAoIGdhcmVhICogZ2FyZWEgKSApO1xcbiAgICByZXR1cm4gZ2F1c3M7XFxuXFxufVxcblxcbmZsb2F0IGNhbGNBTyggZmxvYXQgZGVwdGgsIGZsb2F0IGR3LCBmbG9hdCBkaCApIHtcXG5cXG4gICAgdmVjMiB2diA9IHZlYzIoIGR3LCBkaCApO1xcblxcbiAgICB2ZWMyIGNvb3JkMSA9IHZVdiArIHJhZGl1cyAqIHZ2O1xcbiAgICB2ZWMyIGNvb3JkMiA9IHZVdiAtIHJhZGl1cyAqIHZ2O1xcblxcbiAgICBmbG9hdCB0ZW1wMSA9IDAuMDtcXG4gICAgZmxvYXQgdGVtcDIgPSAwLjA7XFxuXFxuICAgIGludCBmYXIgPSAwO1xcbiAgICB0ZW1wMSA9IGNvbXBhcmVEZXB0aHMoIGRlcHRoLCByZWFkRGVwdGgoIGNvb3JkMSApLCBmYXIgKTtcXG5cXG4gICAgICAgICAgICAvLyBERVBUSCBFWFRSQVBPTEFUSU9OXFxuXFxuICAgIGlmICggZmFyID4gMCApIHtcXG5cXG4gICAgICAgIHRlbXAyID0gY29tcGFyZURlcHRocyggcmVhZERlcHRoKCBjb29yZDIgKSwgZGVwdGgsIGZhciApO1xcbiAgICAgICAgdGVtcDEgKz0gKCAxLjAgLSB0ZW1wMSApICogdGVtcDI7XFxuXFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHRlbXAxO1xcblxcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgIHZlYzIgbm9pc2UgPSByYW5kKCB2VXYgKTtcXG4gICAgZmxvYXQgZGVwdGggPSByZWFkRGVwdGgoIHZVdiApO1xcblxcbiAgICBmbG9hdCB0dCA9IGNsYW1wKCBkZXB0aCwgYW9DbGFtcCwgMS4wICk7XFxuXFxuICAgIGZsb2F0IHcgPSAoIDEuMCAvIHNpemUueCApIC8gdHQgKyAoIG5vaXNlLnggKiAoIDEuMCAtIG5vaXNlLnggKSApO1xcbiAgICBmbG9hdCBoID0gKCAxLjAgLyBzaXplLnkgKSAvIHR0ICsgKCBub2lzZS55ICogKCAxLjAgLSBub2lzZS55ICkgKTtcXG5cXG4gICAgZmxvYXQgYW8gPSAwLjA7XFxuXFxuICAgIGZsb2F0IGR6ID0gMS4wIC8gZmxvYXQoIHNhbXBsZXMgKTtcXG4gICAgZmxvYXQgbCA9IDAuMDtcXG4gICAgZmxvYXQgeiA9IDEuMCAtIGR6IC8gMi4wO1xcblxcbiAgICBmb3IgKCBpbnQgaSA9IDA7IGkgPD0gc2FtcGxlczsgaSArKyApIHtcXG5cXG4gICAgICAgIGZsb2F0IHIgPSBzcXJ0KCAxLjAgLSB6ICk7XFxuXFxuICAgICAgICBmbG9hdCBwdyA9IGNvcyggbCApICogcjtcXG4gICAgICAgIGZsb2F0IHBoID0gc2luKCBsICkgKiByO1xcbiAgICAgICAgYW8gKz0gY2FsY0FPKCBkZXB0aCwgcHcgKiB3LCBwaCAqIGggKTtcXG4gICAgICAgIHogPSB6IC0gZHo7XFxuICAgICAgICBsID0gbCArIERMO1xcblxcbiAgICB9XFxuXFxuICAgIGFvIC89IGZsb2F0KCBzYW1wbGVzICk7XFxuICAgIGFvID0gMS4wIC0gYW87XFxuXFxuICAgIHZlYzMgY29sb3IgPSB0ZXh0dXJlMkQoIHRJbnB1dCwgdlV2ICkucmdiO1xcblxcbiAgICB2ZWMzIGx1bWNvZWZmID0gdmVjMyggMC4yOTksIDAuNTg3LCAwLjExNCApO1xcbiAgICBmbG9hdCBsdW0gPSBkb3QoIGNvbG9yLnJnYiwgbHVtY29lZmYgKTtcXG4gICAgdmVjMyBsdW1pbmFuY2UgPSB2ZWMzKCBsdW0gKTtcXG5cXG4gICAgdmVjMyBmaW5hbCA9IHZlYzMoIGNvbG9yICogbWl4KCB2ZWMzKCBhbyApLCB2ZWMzKCAxLjAgKSwgbHVtaW5hbmNlICogbHVtSW5mbHVlbmNlICkgKTsgIC8vIG1peCggY29sb3IgKiBhbywgd2hpdGUsIGx1bWluYW5jZSApXFxuXFxuICAgIGlmICggb25seUFPICkge1xcblxcbiAgICAgICAgZmluYWwgPSB2ZWMzKCBtaXgoIHZlYzMoIGFvICksIHZlYzMoIDEuMCApLCBsdW1pbmFuY2UgKiBsdW1JbmZsdWVuY2UgKSApOyAgLy8gYW1iaWVudCBvY2NsdXNpb24gb25seVxcblxcbiAgICB9XFxuXFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0SW5wdXQsIHZVdik7XFxuXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9zc2FvLmZzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZ3Jlc3NcblxuZnVuY3Rpb24gcHJvZ3Jlc3MoeGhyKSB7XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlclxuICB2YXIgZmluaXNoZWQgPSBmYWxzZVxuXG4gIGlmICh4aHIuYXR0YWNoRXZlbnQpIHtcbiAgICB4aHIuYXR0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgcmV0dXJuIGVtaXR0ZXJcbiAgfVxuXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzLCBmYWxzZSlcbiAgZnVuY3Rpb24gcHJvZ3Jlc3MoZXZlbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlXG4gICAgICA/IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsXG4gICAgICA6IDBcblxuICAgIGlmICghZmluaXNoZWQpIGVtaXR0ZXIuZW1pdCgnZGF0YSdcbiAgICAgICwgdmFsdWVcbiAgICAgICwgZXZlbnQudG90YWwgfHwgbnVsbFxuICAgIClcblxuICAgIGZpbmlzaGVkID0gdmFsdWUgPT09IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSAhPT0gJ2xvYWQnICYmICEvXihyZWFkeXxjb21wbGV0ZSkkL2cudGVzdChcbiAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnJlYWR5U3RhdGVcbiAgICApKSByZXR1cm5cblxuICAgIGlmIChmaW5pc2hlZCkgcmV0dXJuXG4gICAgaWYgKHhoci5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRvbmUsIGZhbHNlKVxuICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICAgIH0gZWxzZVxuICAgIGlmICh4aHIuZGV0YXRjaEV2ZW50KSB7XG4gICAgICB4aHIuZGV0YXRjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCBkb25lKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgnZGF0YScsIDEsIGV2ZW50LnRvdGFsIHx8IG51bGwpXG4gICAgZW1pdHRlci5lbWl0KCdkb25lJylcbiAgICBmaW5pc2hlZCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyLXByb2dyZXNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciB3aW5kb3cgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKFwiaXMtZnVuY3Rpb25cIilcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKFwicGFyc2UtaGVhZGVyc1wiKVxudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlWEhSXG5jcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcFxuY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0ID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiAobmV3IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCgpKSA/IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA6IHdpbmRvdy5YRG9tYWluUmVxdWVzdFxuXG5mb3JFYWNoQXJyYXkoW1wiZ2V0XCIsIFwicHV0XCIsIFwicG9zdFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgY3JlYXRlWEhSW21ldGhvZCA9PT0gXCJkZWxldGVcIiA/IFwiZGVsXCIgOiBtZXRob2RdID0gZnVuY3Rpb24odXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iail7XG4gICAgZm9yKHZhciBpIGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJhbXMgPSB1cmlcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyYW1zID0ge3VyaTp1cml9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB4dGVuZChvcHRpb25zLCB7dXJpOiB1cml9KVxuICAgIH1cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHBhcmFtc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVhIUihvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2JPbmNlKGVyciwgcmVzcG9uc2UsIGJvZHkpe1xuICAgICAgICBpZighY2FsbGVkKXtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2soZXJyLCByZXNwb25zZSwgYm9keSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkRnVuYywgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIC8vIENocm9tZSB3aXRoIHJlcXVlc3RUeXBlPWJsb2IgdGhyb3dzIGVycm9ycyBhcnJvdW5kIHdoZW4gZXZlbiB0ZXN0aW5nIGFjY2VzcyB0byByZXNwb25zZVRleHRcbiAgICAgICAgdmFyIGJvZHkgPSB1bmRlZmluZWRcblxuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlVGV4dCB8fCBnZXRYbWwoeGhyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGV2dCwgZmFpbHVyZVJlc3BvbnNlKVxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSAmIHByb2Nlc3MgdGhlIHJlc3BvbnNlIGluIGEgc3BlY2lhbCByZXNwb25zZSBvYmplY3RcbiAgICBmdW5jdGlvbiBsb2FkRnVuYygpIHtcbiAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICB2YXIgc3RhdHVzXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKG9wdGlvbnMudXNlWERSICYmIHhoci5zdGF0dXM9PT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vSUU4IENPUlMgR0VUIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZG9lc24ndCBoYXZlIGEgc3RhdHVzIGZpZWxkLCBidXQgYm9keSBpcyBmaW5lXG4gICAgICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICh4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBmYWlsdXJlUmVzcG9uc2VcbiAgICAgICAgdmFyIGVyciA9IG51bGxcblxuICAgICAgICBpZiAoc3RhdHVzICE9PSAwKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IGdldEJvZHkoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgICAgdXJsOiB1cmksXG4gICAgICAgICAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKXsgLy9yZW1lbWJlciB4aHIgY2FuIGluIGZhY3QgYmUgWERSIGZvciBDT1JTIGluIElFXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycyA9IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoXCJJbnRlcm5hbCBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGFcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luY1xuICAgIHZhciBpc0pzb24gPSBmYWxzZVxuICAgIHZhciB0aW1lb3V0VGltZXJcbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgdXJsOiB1cmksXG4gICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgIH1cblxuICAgIGlmIChcImpzb25cIiBpbiBvcHRpb25zICYmIG9wdGlvbnMuanNvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24gPT09IHRydWUgPyBib2R5IDogb3B0aW9ucy5qc29uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlYWR5c3RhdGVjaGFuZ2VcbiAgICB4aHIub25sb2FkID0gbG9hZEZ1bmNcbiAgICB4aHIub25lcnJvciA9IGVycm9yRnVuY1xuICAgIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb24uXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElFIG11c3QgZGllXG4gICAgfVxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHhoci5vbnRpbWVvdXQgPSBlcnJvckZ1bmNcbiAgICB4aHIub3BlbihtZXRob2QsIHVyaSwgIXN5bmMsIG9wdGlvbnMudXNlcm5hbWUsIG9wdGlvbnMucGFzc3dvcmQpXG4gICAgLy9oYXMgdG8gYmUgYWZ0ZXIgb3BlblxuICAgIGlmKCFzeW5jKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzXG4gICAgfVxuICAgIC8vIENhbm5vdCBzZXQgdGltZW91dCB3aXRoIHN5bmMgcmVxdWVzdFxuICAgIC8vIG5vdCBzZXR0aW5nIHRpbWVvdXQgb24gdGhlIHhociBvYmplY3QsIGJlY2F1c2Ugb2Ygb2xkIHdlYmtpdHMgZXRjLiBub3QgaGFuZGxpbmcgdGhhdCBjb3JyZWN0bHlcbiAgICAvLyBib3RoIG5wbSdzIHJlcXVlc3QgYW5kIGpxdWVyeSAxLnggdXNlIHRoaXMga2luZCBvZiB0aW1lb3V0LCBzbyB0aGlzIGlzIGJlaW5nIGNvbnNpc3RlbnRcbiAgICBpZiAoIXN5bmMgJiYgb3B0aW9ucy50aW1lb3V0ID4gMCApIHtcbiAgICAgICAgdGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICAgICAgYWJvcnRlZCA9IHRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgLy8gTWljcm9zb2Z0IEVkZ2UgYnJvd3NlciBzZW5kcyBcInVuZGVmaW5lZFwiIHdoZW4gc2VuZCBpcyBjYWxsZWQgd2l0aCB1bmRlZmluZWQgdmFsdWUuXG4gICAgLy8gWE1MSHR0cFJlcXVlc3Qgc3BlYyBzYXlzIHRvIHBhc3MgbnVsbCBhcyBib2R5IHRvIGluZGljYXRlIG5vIGJvZHlcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25hdWd0dXIveGhyL2lzc3Vlcy8xMDAuXG4gICAgeGhyLnNlbmQoYm9keSB8fCBudWxsKVxuXG4gICAgcmV0dXJuIHhoclxuXG5cbn1cblxuZnVuY3Rpb24gZ2V0WG1sKHhocikge1xuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cbiAgICB2YXIgZmlyZWZveEJ1Z1Rha2VuRWZmZWN0ID0geGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVhNTC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09IFwicGFyc2VyZXJyb3JcIlxuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcIlwiICYmICFmaXJlZm94QnVnVGFrZW5FZmZlY3QpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3hoci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=