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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
                console.warn('EventsManager :: Emit :: Currently no listeners for this event : ', event);
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

            console.log('EventsManager :: ON ::', event);

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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _map = __webpack_require__(29);

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
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.onKeyUp = _this.onKeyUp.bind(_this);
        _this.onSpaceHold = _this.onSpaceHold.bind(_this);
        _this.onSpaceUp = _this.onSpaceUp.bind(_this);
        _this.onSpaceDown = _this.onSpaceDown.bind(_this);
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
        _this.uniforms['opacity'].value = 0.0;

        _this.startDivisions = new THREE.Vector2(65, 1);

        _this.orientations = [];
        _this.speed = 0.0;
        _this.speedMin = 12.0; // 7.0
        _this.speedMax = 12.0;
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
            vertexShader: __webpack_require__(48),
            // fragmentShader: require('../shaders/bottom.frag.glsl'),
            fragmentShader: __webpack_require__(49),
            uniforms: _this.uniforms,
            shading: THREE.FlatShading,
            lights: true,
            wireframe: false,
            side: side,
            transparent: true,
            fog: true
        });

        _this.mesh = new THREE.Mesh(_this.planeGeometry, _this.material);
        _this.mesh.castShadow = true;
        _this.mesh.receiveShadow = true;
        _this.add(_this.mesh);

        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYPRESS, _this.onKeyPress);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYDOWN, _this.onKeyDown);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYUP, _this.onKeyUp);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEHOLD, _this.onSpaceHold);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEDOWN, _this.onSpaceDown);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEUP, _this.onSpaceUp);
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
        value: function update() {
            this.uniforms['uTime'].value += this.factor * this.speed * 0.1;
        }
    }, {
        key: 'setPlainColor',
        value: function setPlainColor(color) {
            this.updateDivisions(0, 0);
            // this.uniforms['diffuse'].value = new THREE.Color(0xFFFFFF);
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
                // TweenMax.to(this.uniforms['uStripeOrientation'].value, 0.4, { x: clone.x, y: clone.y, z: clone.z, ease: Expo.easeInOut });
            }
        }
    }, {
        key: 'reverseStripes',
        value: function reverseStripes() {
            this.factor = -this.factor;
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
            if (this.blackMode) {
                this.blackMode = false;
                this.show();
            }

            var to = this.uniforms['uInvert'].value === 1.0 ? 0. : 1.;

            TweenMax.to(this.uniforms['uInvert'], this.duration, { value: to, ease: this.ease });
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
            TweenMax.to(this.uniforms['opacity'], this.duration, { value: 1, ease: this.ease });
        }
    }, {
        key: 'hide',
        value: function hide() {
            var _this2 = this;

            TweenMax.to(this.uniforms['opacity'], this.duration, { value: 0, ease: this.ease, onComplete: function onComplete() {
                    _this2.uniforms['uProgress'].value = 0;
                } });
        }
    }, {
        key: 'onKeyUp',
        value: function onKeyUp(data) {}
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(data) {}
    }, {
        key: 'onSpaceUp',
        value: function onSpaceUp() {
            if (window.started && this.isSpaceDown) {
                this.isSpaceDown = false;
                this.reverseStripes();
            }
        }
    }, {
        key: 'onSpaceDown',
        value: function onSpaceDown() {
            if (window.started && !this.isSpaceDown) {
                this.isSpaceDown = true;
            } else if (window.started && this.isSpaceDown) {
                this.isSpaceDown = false;
            }
        }
    }, {
        key: 'updateDivisions',
        value: function updateDivisions(x, y) {
            var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            TweenMax.to(this.uniforms['uSquare'].value, this.duration, { x: x, y: y, ease: this.ease });

            if (invert) {
                Math.random() > 0.5 && this.invert();
            }
        }
    }, {
        key: 'setBlackMode',
        value: function setBlackMode() {
            this.blackMode = true;

            TweenMax.to(this.uniforms['uInvert'], this.duration, { value: 1.0, ease: this.ease });
        }
    }, {
        key: 'onSpaceHold',
        value: function onSpaceHold(data) {
            var progress = data.progress;


            this.uniforms['uProgress'].value = (0, _map2.default)(progress, 0, 1, 0, 0.8);
        }
    }, {
        key: 'onEnd',
        value: function onEnd() {
            this.changeSpeed(0.0);
            this.uniforms['uTime'].value = 0.0;

            var duration = 2;

            var tl = new TimelineMax({ onComplete: function onComplete() {} });
            tl.set(this.uniforms['uSquare'].value, { x: 1, y: 1, ease: Expo.easeOut }, 0);
            tl.to(this.uniforms['uInvert'], duration, { value: 0.0, ease: Expo.easeOut }, 0);
            tl.fromTo(this.uniforms['uProgress'], duration, { value: 0.85 }, { value: -0.15, ease: Expo.easeOut }, 0);

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
            this.changeSpeed();
        }
    }, {
        key: 'onHiddenUI',
        value: function onHiddenUI() {
            this.show();

            // this.updateDivisions(3, 1);
            // TweenMax.to(this.uniforms['uProgress'], 2, { value: 1, ease: this.ease });
        }
    }]);

    return AbstractFace;
}(THREE.Object3D);

exports.default = AbstractFace;

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// sourced from:
// http://www.leanbackplayer.com/test/h5mt.html
// https://github.com/broofa/node-mime/blob/master/types.json
var mimeTypes = __webpack_require__(31)

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = createAudioContext
function createAudioContext () {
  var AudioCtor = window.AudioContext || window.webkitAudioContext
  return new AudioCtor()
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var lookup = __webpack_require__(6)
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
/* 10 */
/***/ (function(module, exports) {

module.exports = function (audioContext) {
  if (audioContext.state === 'suspended' &&
      typeof audioContext.resume === 'function') {
    audioContext.resume()
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _randomFromArray = __webpack_require__(30);

var _randomFromArray2 = _interopRequireDefault(_randomFromArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FacesController = function () {
    function FacesController() {
        _classCallCheck(this, FacesController);

        this.container = new THREE.Object3D();
        this.faces = {};
        this.divisions = {
            x: this.generateDivisions(1, 125),
            y: this.generateDivisions(1, 25),
            lastX: 0,
            lastY: 0
        };

        // on events
        this.onLowKick = this.onLowKick.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onUIHidden = this.onUIHidden.bind(this);
        this.onSoundEnd = this.onSoundEnd.bind(this);

        // black modes
        this.blackModeVertical = this.blackModeVertical.bind(this);
        this.blackModeHorizontal = this.blackModeHorizontal.bind(this);
        this.blackModeTunnelTop = this.blackModeTunnelTop.bind(this);
        this.blackModeTunnelBottom = this.blackModeTunnelBottom.bind(this);
        this.blackModeBottom = this.blackModeBottom.bind(this);

        this.blackModes = [this.blackModeVertical, this.blackModeHorizontal, this.blackModeTunnelTop, this.blackModeTunnelBottom, this.blackModeBottom];

        // reactions
        this.updateDivisions = this.updateDivisions.bind(this);
        this.setBlackMode = this.setBlackMode.bind(this);

        this.reactions = [this.updateDivisions, this.setBlackMode];

        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYPRESS, this.onKeyPress);
        _EventsManager2.default.on(_Events2.default.SOUNDS.LOWKICK, this.onLowKick);
        _EventsManager2.default.on(_Events2.default.SOUNDS.END, this.onSoundEnd);
        _EventsManager2.default.on(_Events2.default.UI.HIDDEN, this.onUIHidden);
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
            var divisions = [0];

            for (var i = min; i <= max; i += 4) {
                divisions.push(i);
            }

            for (var _i = max; _i >= min; _i -= 4) {
                divisions.push(_i);
            }

            divisions.push(0);

            return divisions;
        }
    }, {
        key: 'updateDivisions',
        value: function updateDivisions() {
            var _this = this;

            var possibleDivisionX = this.findDivisions(this.divisions.x, this.divisions.lastX, 12);
            var rdmXIndex = Math.floor(Math.random() * possibleDivisionX.length);
            var divisionX = possibleDivisionX[rdmXIndex];

            this.divisions.lastX = this.divisions.x.indexOf(divisionX);

            var possibleDivisionY = this.findDivisions(this.divisions.y, this.divisions.lastY, 4);
            var rdmYIndex = Math.floor(Math.random() * possibleDivisionY.length);
            var divisionY = possibleDivisionY[rdmYIndex];

            this.divisions.lastY = this.divisions.y.indexOf(divisionY);

            Object.keys(this.faces).map(function (key) {
                _this.faces[key].updateDivisions(divisionX, divisionY);
            });
        }
    }, {
        key: 'setStripes',
        value: function setStripes() {
            var _this2 = this;

            Object.keys(this.faces).map(function (key) {
                _this2.faces[key].setStripes('horizontal', 1);
            });
        }
    }, {
        key: 'findDivisions',
        value: function findDivisions(all, current, range) {
            var divisions = all.map(function (division, index) {
                if (index > current - 4 && index < current + 4) {
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
            if (!window.uiHidden || window.soundEnded) {
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
                this.updateDivisions();
            }

            if (key === 'x') {
                this.setBlackMode();
            }
        }
    }, {
        key: 'onLowKick',
        value: function onLowKick() {
            if (!window.uiHidden) {
                return;
            }

            var reaction = (0, _randomFromArray2.default)(this.reactions);
            reaction();
        }
    }, {
        key: 'onSoundEnd',
        value: function onSoundEnd(data) {
            var _this3 = this;

            var name = data.name;


            if (name === 'xp') {
                var tl = new TimelineMax({ onComplete: function onComplete() {
                        _EventsManager2.default.emit(_Events2.default.XP.END);
                        _this3.reset();
                    } });

                Object.keys(this.faces).map(function (key) {
                    tl.add(_this3.faces[key].onEnd(), 0);
                });
            }
        }
    }, {
        key: 'setBlackMode',
        value: function setBlackMode() {
            var _this4 = this;

            Object.keys(this.faces).map(function (key) {
                _this4.faces[key].setBlackMode();
            });

            var blackMode = (0, _randomFromArray2.default)(this.blackModes);
            blackMode();
        }
    }, {
        key: 'blackModeVertical',
        value: function blackModeVertical() {
            this.faces['left'].hide();
            this.faces['right'].hide();
            this.faces['top'].show();
            this.faces['bottom'].show();
        }
    }, {
        key: 'blackModeHorizontal',
        value: function blackModeHorizontal() {
            this.faces['left'].show();
            this.faces['right'].show();
            this.faces['top'].hide();
            this.faces['bottom'].hide();
        }
    }, {
        key: 'blackModeTunnelTop',
        value: function blackModeTunnelTop() {
            this.faces['left'].show();
            this.faces['right'].show();
            this.faces['top'].show();
            this.faces['bottom'].hide();
        }
    }, {
        key: 'blackModeTunnelBottom',
        value: function blackModeTunnelBottom() {
            this.faces['left'].show();
            this.faces['right'].show();
            this.faces['top'].hide();
            this.faces['bottom'].show();
        }
    }, {
        key: 'blackModeBottom',
        value: function blackModeBottom() {
            this.faces['left'].hide();
            this.faces['right'].hide();
            this.faces['top'].hide();
            this.faces['bottom'].show();
        }
    }, {
        key: 'changeScale',
        value: function changeScale() {
            var rdm = Math.random();

            // const face = this.faces['bottom'];

            // const to = face.uniforms['uSquare'].value.y * 2;

            // TweenMax.to(face.scale, 0.3, { y: 2, ease: this.ease });
            // TweenMax.to(this.faces['left'].uniforms['uSquare'].value, 0.3, { y: to, ease: this.ease });
            // TweenMax.to(this.faces['right'].uniforms['uSquare'].value, 0.3, { y: to, ease: this.ease });

            // const toPos = this.faces['left'].position.x * 2;
            // TweenMax.to(this.faces['left'].position, 0.3, { x: toPos, ease: this.ease });

            // const toPosRight = this.faces['right'].position.x * 2;
            // TweenMax.to(this.faces['right'].position, 0.3, { x: toPosRight, ease: this.ease });

            // const scale = Math.floor(Math.random() * 5) / 10 + 0.5;

            // TweenMax.to(this.container.scale, 0.3, { x: scale, y: scale, ease: Expo.easeOut });

            // if ( rdm < 0.33 ) {
            //     this.faces['left'].updatePosition();
            //     this.faces['right'].updatePosition();
            // } else if ( rdm < 0.66 ) {
            //     this.faces['top'].updatePosition();
            //     this.faces['bottom'].updatePosition();
            // } else {
            //     this.faces['top'].updatePosition();
            //     this.faces['bottom'].updatePosition();
            //     this.faces['left'].updatePosition();
            //     this.faces['right'].updatePosition();
            // }
        }
    }, {
        key: 'onUIHidden',
        value: function onUIHidden() {
            console.log('onUIHidden');

            this.faces['left'].show();
            this.faces['right'].show();

            this.updateDivisions();
        }
    }, {
        key: 'reset',
        value: function reset() {
            var _this5 = this;

            Object.keys(this.faces).map(function (key) {
                _this5.faces[key].reset();
            });

            this.divisions.lastX = 0;
            this.divisions.lastY = 0;
        }
    }]);

    return FacesController;
}();

exports.default = FacesController;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(0);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AbstractFace2 = __webpack_require__(2);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractFace2 = __webpack_require__(2);

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

        _this.togglePosition = false;
        return _this;
    }

    _createClass(Bottom, [{
        key: 'updatePosition',
        value: function updatePosition() {

            // this.scale.y = 2;

            // this.togglePosition = !this.togglePosition;

            // const to = this.togglePosition ? this.position.y * 0.5 : this.position.y * 2;

            // TweenMax.to(this.position, this.duration, { y: to, ease: this.ease });
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            _get(Bottom.prototype.__proto__ || Object.getPrototypeOf(Bottom.prototype), 'onStart', this).call(this);

            this.setBlackMode();
            this.updateDivisions(this.startDivisions.x, this.startDivisions.y, false);
        }
    }, {
        key: 'reset',
        value: function reset() {
            _get(Bottom.prototype.__proto__ || Object.getPrototypeOf(Bottom.prototype), 'reset', this).call(this);

            this.uniforms['opacity'].value = 1.0;
        }
    }]);

    return Bottom;
}(_AbstractFace3.default);

exports.default = Bottom;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractFace2 = __webpack_require__(2);

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

        // this.uniforms['uInvert'].value = 1.0;

        _this.visibilityToggler = '4';
        _this.visibilityHider = '1';
        _this.visibilityShower = '3';
        _this.togglePosition = false;
        return _this;
    }

    _createClass(Left, [{
        key: 'updatePosition',
        value: function updatePosition() {

            // this.togglePosition = !this.togglePosition;

            // const to = this.togglePosition ? this.position.x * 0.5 : this.position.x * 2;
            // const toSquare = this.togglePosition ? this.uniforms['uSquare'].value.x * 0.5 : this.uniforms['uSquare'].value.x * 2;

            // TweenMax.to(this.position, this.duration, { x: to, ease: this.ease });
            // TweenMax.to(this.uniforms['uSquare'].value, this.duration, { x: toSquare, ease: this.ease });
        }
    }]);

    return Left;
}(_AbstractFace3.default);

exports.default = Left;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractFace2 = __webpack_require__(2);

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
        _this.togglePosition = false;
        return _this;
    }

    _createClass(Right, [{
        key: 'updatePosition',
        value: function updatePosition() {
            this.togglePosition = !this.togglePosition;

            var to = this.togglePosition ? this.position.x * 0.5 : this.position.x * 2;

            TweenMax.to(this.position, this.duration, { x: to, ease: this.ease });
        }
    }]);

    return Right;
}(_AbstractFace3.default);

exports.default = Right;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractFace2 = __webpack_require__(2);

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

        _this.togglePosition = false;
        return _this;
    }

    _createClass(Top, [{
        key: 'updatePosition',
        value: function updatePosition() {
            this.togglePosition = !this.togglePosition;

            var to = this.togglePosition ? this.position.y * 0.5 : this.position.y * 2;

            TweenMax.to(this.position, this.duration, { y: to, ease: this.ease });
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            _get(Top.prototype.__proto__ || Object.getPrototypeOf(Top.prototype), 'onStart', this).call(this);

            this.show();
            this.setBlackMode();
            this.updateDivisions(this.startDivisions.x, this.startDivisions.y, false);
        }
    }]);

    return Top;
}(_AbstractFace3.default);

exports.default = Top;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webAudioPlayer = __webpack_require__(43);

var _webAudioPlayer2 = _interopRequireDefault(_webAudioPlayer);

var _webAudioAnalyser = __webpack_require__(42);

var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);

var _analyserFrequencyAverage = __webpack_require__(25);

var _analyserFrequencyAverage2 = _interopRequireDefault(_analyserFrequencyAverage);

var _Range = __webpack_require__(28);

var _Range2 = _interopRequireDefault(_Range);

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(0);

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
            // xp: 'debug.mp3',
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

        this.ranges = [lowKick];

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
            var progress = data.progress;
            var audio = this.players['intro'].audio;


            audio.volume = Math.max(0, Math.min(progress * 0.5, 1));
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
    function UI() {
        _classCallCheck(this, UI);

        this.$wrapper = document.querySelector('.ui__section--intro');
        this.$logo = this.$wrapper.querySelector('.intro__logo');
        this.$action = this.$wrapper.querySelector('.intro__action');
        this.$actionFill = this.$wrapper.querySelector('.action__fill');
        this.$tuto = document.querySelector('.ui__section--tuto');
        this.$credits = document.querySelector('.ui__section--credits');

        this.now = Date.now();
        this.maxTime = 3000;

        this.isCompleted = false;

        this.minFill = 0.01;
        this.maxFill = 1;
        this.fill = this.minFill;

        this.maxScale = 1.5;
        this.minScale = 1;
        this.scale = this.minScale;
        this.opacity = 1;
        this.progress = 0;
        this.resetted = false;
        this.isDown = false;

        this.onComplete = this.onComplete.bind(this);

        this.tl = new TimelineMax({ paused: true });
        this.tl.to(this, 1.5, {
            opacity: -1,
            progress: 1,
            scale: this.maxScale,
            fill: this.maxFill,
            ease: Linear.easeNone,
            onComplete: this.onComplete
        });

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onSpaceDown = this.onSpaceDown.bind(this);
        this.onSpaceUp = this.onSpaceUp.bind(this);
        this.onEndXP = this.onEndXP.bind(this);

        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYDOWN, this.onKeyDown);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.KEYUP, this.onKeyUp);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEUP, this.onSpaceUp);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        _EventsManager2.default.on(_Events2.default.XP.END, this.onEndXP);

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
                _EventsManager2.default.emit(_Events2.default.KEYBOARD.SPACEHOLD, { progress: this.progress });
            }

            if (!this.isCompleted) {
                if (!this.resetted) {
                    this.$actionFill.style.transform = this.$actionFill.style.WebkitTransform = 'skewX(-20deg) scaleX(' + this.fill + ')';
                    this.$logo.style.transform = this.$logo.style.WebkitTransform = 'scale(' + this.scale + ')';
                    this.$logo.style.opacity = this.opacity;
                    this.$action.style.opacity = this.opacity;
                } else {
                    // scale credits
                    this.$credits.style.transform = this.$credits.style.WebkitTransform = 'scale(' + this.scale + ')';
                    this.$credits.style.opacity = this.opacity;
                }
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
                this.tl.timeScale(3);
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
            this.isCompleted = true;

            if (this.resetted) {
                _EventsManager2.default.emit(_Events2.default.UI.HIDDEN);
            }

            this.$actionFill.style.transformOrigin = '100%';

            _EventsManager2.default.emit(_Events2.default.XP.START);

            if (!this.resetted) {
                this.displayTutorial();
            }
        }
    }, {
        key: 'displayTutorial',
        value: function displayTutorial() {
            var duration = 4;

            var tl = new TimelineMax({ onComplete: function onComplete() {
                    _EventsManager2.default.emit(_Events2.default.UI.HIDDEN);
                } });
            tl.fromTo(this.$tuto, 0.3, { css: { scale: 0.8 } }, { css: { scale: this.maxScale }, ease: Linear.easeNone }, 0);
            tl.to(this.$tuto, duration * 0.5, { css: { opacity: 1 }, ease: Linear.easeNone }, 0);
            tl.to(this.$tuto, duration * 0.5, { css: { opacity: 0 }, ease: Linear.easeNone }, duration * 0.5);
        }
    }, {
        key: 'displayCredits',
        value: function displayCredits() {
            var _this = this;

            this.$credits.style.pointerEvents = 'auto';

            var duration = 2;
            var tl = new TimelineMax({ onComplete: function onComplete() {
                    _this.reset();
                } });
            tl.fromTo(this.$credits, duration, { css: { scale: 0.9 } }, { css: { scale: 1.0 }, ease: Expo.easeOut }, 0);
            tl.to(this.$credits, duration, { css: { opacity: 1 }, ease: Expo.easeOut }, 0);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.progress = 0;
            this.resetted = true;
            this.isCompleted = false;

            this.maxScale = 1.5;
            this.minScale = 1;
            this.scale = this.minScale;
            this.opacity = 1;
            this.progress = 0;
            this.isDown = false;

            this.tl = new TimelineMax({ paused: true });
            this.tl.to(this, 1.5, {
                opacity: -1,
                progress: 1,
                scale: this.maxScale,
                fill: this.maxFill,
                ease: Linear.easeNone,
                onComplete: this.onComplete
            });
        }
    }, {
        key: 'onEndXP',
        value: function onEndXP() {
            this.displayCredits();
        }
    }]);

    return UI;
}();

exports.default = UI;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(strings) {
  if (typeof strings === 'string') strings = [strings]
  var exprs = [].slice.call(arguments,1)
  var parts = []
  for (var i = 0; i < strings.length-1; i++) {
    parts.push(strings[i], exprs[i] || '')
  }
  parts.push(strings[i])
  return parts.join('')
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(38)
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var frequencyToIndex = __webpack_require__(26)

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(32)

module.exports = frequencyToIndex
function frequencyToIndex (frequency, sampleRate, frequencyBinCount) {
  var nyquist = sampleRate / 2
  var index = Math.round(frequency / nyquist * frequencyBinCount)
  return clamp(index, 0, frequencyBinCount)
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf = __webpack_require__(23);

var _raf2 = _interopRequireDefault(_raf);

var _Background = __webpack_require__(14);

var _Background2 = _interopRequireDefault(_Background);

var _Top = __webpack_require__(18);

var _Top2 = _interopRequireDefault(_Top);

var _Left = __webpack_require__(16);

var _Left2 = _interopRequireDefault(_Left);

var _Right = __webpack_require__(17);

var _Right2 = _interopRequireDefault(_Right);

var _Bottom = __webpack_require__(15);

var _Bottom2 = _interopRequireDefault(_Bottom);

var _smooth = __webpack_require__(20);

var _smooth2 = _interopRequireDefault(_smooth);

var _FacesController = __webpack_require__(11);

var _FacesController2 = _interopRequireDefault(_FacesController);

var _MouseManager = __webpack_require__(12);

var _MouseManager2 = _interopRequireDefault(_MouseManager);

var _SoundManager = __webpack_require__(19);

var _SoundManager2 = _interopRequireDefault(_SoundManager);

var _KeyboardController = __webpack_require__(13);

var _KeyboardController2 = _interopRequireDefault(_KeyboardController);

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _ui = __webpack_require__(21);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var glslify = __webpack_require__(22);

var App = function () {
      function App() {
            _classCallCheck(this, App);

            window.started = false;
            window.uiHidden = false;
            window.soundEnded = false;

            this.backgroundColor = 0x000000;

            // this.gui = window.gui = new dat.GUI();
            this.facesController = new _FacesController2.default();
            this.facesContainer = this.facesController.container;
            this.ui = new _ui2.default();

            _MouseManager2.default.start();

            this.soundManager = new _SoundManager2.default();
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
                  this.renderer.shadowMap.enabled = true;
                  this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

                  WAGNER.vertexShadersPath = 'js/vertex-shaders';
                  WAGNER.fragmentShadersPath = 'js/fragment-shaders';

                  this.composer = new WAGNER.Composer(this.renderer);
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

                  this.fxaaPass = new WAGNER.FXAAPass();

                  this.width = window.width = 60;
                  this.height = window.height = 60;
                  this.length = window.length = 100;

                  this.scene = new THREE.Scene();
                  this.scene.fog = new THREE.Fog(0x000000, 0.8, this.length * .98);

                  this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3000);
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
            }
      }, {
            key: 'onUIHidden',
            value: function onUIHidden() {
                  window.uiHidden = true;
            }
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
                  var OrbitControls = __webpack_require__(24)(THREE);
                  // this.controls = new OrbitControls(this.camera);
            }
      }, {
            key: 'addLights',
            value: function addLights() {
                  this.light = new THREE.AmbientLight(0xFFFFFF);
                  this.scene.add(this.light);

                  var pointLight3 = new THREE.PointLight(0xffffff, 7.1, 0);
                  pointLight3.position.x = 0;
                  pointLight3.position.y = 4;
                  pointLight3.position.z = 60;

                  this.scene.add(pointLight3);
            }
      }, {
            key: 'addElements',
            value: function addElements() {
                  this.divisator = 2;

                  this.geometry = new THREE.PlaneGeometry(this.length, this.width, 32, 32);
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

                  this.facesContainer.position.z = -this.length * 0.5;
                  this.facesContainer.scale.x = this.facesContainer.scale.y = 0.1;

                  this.scene.add(this.facesContainer);
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
                  this.ui.update();
                  this.soundManager.update();

                  this.left.update();
                  this.right.update();
                  this.bottom.update();
                  this.top.update();

                  this.composer.reset();
                  this.composer.render(this.scene, this.camera);
                  this.composer.pass(this.bloomPass);
                  this.composer.pass(this.rgbPass);
                  this.composer.pass(this.noisePass);
                  this.composer.pass(this.vignettePass);
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Range = function () {
    function Range(name, freqs, delta, event) {
        _classCallCheck(this, Range);

        this.name = name;
        this.freqs = freqs;
        this.delta = delta;
        this.event = event;
        this.level = 0;

        this.time = Date.now();
    }

    _createClass(Range, [{
        key: 'update',
        value: function update(level) {
            var delta = Date.now() - this.time;

            this.level = level;

            if (delta > this.delta && this.level > 0.5) {
                this.time = Date.now();

                _EventsManager2.default.emit(this.event);
            }
        }
    }]);

    return Range;
}();

exports.default = Range;

/***/ }),
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(7)

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
/* 34 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(41)
  , forEach = __webpack_require__(33)
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
/* 38 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports =
  global.performance &&
  global.performance.now ? function now() {
    return performance.now()
  } : Date.now || function now() {
    return +new Date
  }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isDom = __webpack_require__(35)
var lookup = __webpack_require__(6)

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
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var buffer = __webpack_require__(44)
var media = __webpack_require__(46)

module.exports = webAudioPlayer
function webAudioPlayer (src, opt) {
  if (!src) throw new TypeError('must specify a src parameter')
  opt = opt || {}
  if (opt.buffer) return buffer(src, opt)
  else return media(src, opt)
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var canPlaySrc = __webpack_require__(9)
var createAudioContext = __webpack_require__(8)
var xhrAudio = __webpack_require__(47)
var EventEmitter = __webpack_require__(4).EventEmitter
var rightNow = __webpack_require__(39)
var resume = __webpack_require__(10)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var EventEmitter = __webpack_require__(4).EventEmitter
var createAudio = __webpack_require__(40).audio
var assign = __webpack_require__(36)

var resume = __webpack_require__(10)
var createAudioContext = __webpack_require__(8)
var canPlaySrc = __webpack_require__(9)
var addOnce = __webpack_require__(45)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(51)
var xhrProgress = __webpack_require__(50)

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
/* 48 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec3 vPosition;\nvarying vec2 vUv;\nuniform float uTime;\n\n#ifndef FLAT_SHADED\n\n    varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n\n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n    vNormal = normalize( transformedNormal );\n\n#endif\n\n    #include <begin_vertex>\n    #include <displacementmap_vertex>\n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n\n    vViewPosition = - mvPosition.xyz;\n\n    // if ( uTime > 0.0 ) {\n    //     float displacement = noise(vec4(vec3(position), uTime * 1.));\n    //     vec3 pos = position;\n    //     pos.z = displacement * 2. + 2.;\n\n    //     gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n    // }\n\n    vUv = uv;\n    vPosition = position;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n\n}"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n#define M_PI 3.14\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float uTime;\nuniform vec3 uStripeOrientation;\nuniform float uInvert;\nuniform vec3 uSquare;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uLength;\nuniform float uProgress;\n\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n    #include <clipping_planes_fragment>\n\n    vec4 diffuseColor = vec4( diffuse, opacity );\n    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n    vec3 totalEmissiveRadiance = emissive;\n\n    #include <logdepthbuf_fragment>\n    #include <map_fragment>\n    #include <color_fragment>\n    #include <alphamap_fragment>\n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_flip>\n    #include <normal_fragment>\n    #include <emissivemap_fragment>\n\n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_template>\n\n    // modulation\n    #include <aomap_fragment>\n\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n    #include <envmap_fragment>\n\n    vec4 color = vec4(outgoingLight, diffuseColor.a );\n\n    // float posX = vPosition.x * uStripeOrientation.x + vPosition.y * uStripeOrientation.y;\n    // float posY = vPosition.x * uStripeOrientation.y + vPosition.y * uStripeOrientation.x;\n\n    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;\n    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;\n\n    if ( absX > 0.0 || absY > 0. ) {\n       color = vec4(vec3(1.0 - uInvert), diffuseColor.a);\n    } else {\n        color = vec4(vec3(0.0 + uInvert), diffuseColor.a);  \n    }\n\n    // color = vUv.x > 1. - uProgress  ? vec4(vec3(1.0 - uInvert), diffuseColor.a) : vec4(vec3(0.0 + uInvert), diffuseColor.a);\n    \n    gl_FragColor = color;\n\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n}"

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(4).EventEmitter

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(34)
var isFunction = __webpack_require__(7)
var parseHeaders = __webpack_require__(37)
var xtend = __webpack_require__(52)

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
/* 52 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjVmYWU2ZmIxMmU4ZGUzNjg1ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2F1ZGlvLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9yZXN1bWUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsc2xpZnkvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9taW1lLXR5cGVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jbGFtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Zvci1lYWNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpZ2h0LW5vdy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cmltL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLWFuYWx5c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2J1ZmZlci1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9ldmVudC1hZGQtb25jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL21lZGlhLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3hoci1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsIiwid2VicGFjazovLy8uL34veGhyLXByb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34veGhyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34veHRlbmQvaW1tdXRhYmxlLmpzIl0sIm5hbWVzIjpbIkV2ZW50c01hbmFnZXIiLCJldmVudCIsImRhdGEiLCJsaXN0ZW5lcnMiLCJldmVudHNMaXN0IiwiY29uc29sZSIsIndhcm4iLCJpIiwibGVuIiwibGVuZ3RoIiwiZm4iLCJsb2ciLCJwdXNoIiwibGlzdGVuZXIiLCJvZmYiLCJfIiwib24iLCJ0YXJnZXRFdmVudHMiLCJ0YXJnZXQiLCJFdmVudHMiLCJLRVlCT0FSRCIsIktFWURPV04iLCJLRVlVUCIsIktFWVBSRVNTIiwiU1BBQ0VIT0xEIiwiU1BBQ0VVUCIsIlNQQUNFRE9XTiIsIlNPVU5EUyIsIkNBTlBMQVkiLCJFTkQiLCJMT1dLSUNLIiwiU1RBUlQiLCJYUCIsIlVJIiwiSElEREVOIiwiQWJzdHJhY3RGYWNlIiwiZ2VvbWV0cnkiLCJjb2xvciIsIm5hbWUiLCJzaWRlIiwiVEhSRUUiLCJGcm9udFNpZGUiLCJwbGFuZUdlb21ldHJ5Iiwib25LZXlQcmVzcyIsIm9uS2V5RG93biIsIm9uS2V5VXAiLCJvblNwYWNlSG9sZCIsIm9uU3BhY2VVcCIsIm9uU3BhY2VEb3duIiwib25TdGFydCIsIm9uSGlkZGVuVUkiLCJ1bmlmb3JtcyIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsIlNoYWRlckxpYiIsInR5cGUiLCJ2YWx1ZSIsIkNvbG9yIiwiVmVjdG9yMyIsIndpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnREaXZpc2lvbnMiLCJWZWN0b3IyIiwib3JpZW50YXRpb25zIiwic3BlZWQiLCJzcGVlZE1pbiIsInNwZWVkTWF4IiwiZHVyYXRpb24iLCJmYWN0b3IiLCJlYXNlIiwiRXhwbyIsImVhc2VPdXQiLCJkZWJ1ZyIsInN0YXJ0ZWQiLCJpc1NwYWNlRG93biIsImluaXRHdWkiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwicmVxdWlyZSIsImZyYWdtZW50U2hhZGVyIiwic2hhZGluZyIsIkZsYXRTaGFkaW5nIiwibGlnaHRzIiwid2lyZWZyYW1lIiwidHJhbnNwYXJlbnQiLCJmb2ciLCJtZXNoIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiaXNPcGVuIiwiZ3VpIiwiYWRkRm9sZGVyIiwib3BlbiIsInVwZGF0ZURpdmlzaW9ucyIsIm9yaWVudGF0aW9uTmFtZSIsInNjYWxhciIsIm9yaWVudGF0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJ4IiwieSIsInoiLCJibGFja01vZGUiLCJzaG93IiwidG8iLCJUd2Vlbk1heCIsImhpZGUiLCJrZXkiLCJvbkNvbXBsZXRlIiwicmV2ZXJzZVN0cmlwZXMiLCJpbnZlcnQiLCJNYXRoIiwicmFuZG9tIiwicHJvZ3Jlc3MiLCJjaGFuZ2VTcGVlZCIsInRsIiwiVGltZWxpbmVNYXgiLCJzZXQiLCJmcm9tVG8iLCJPYmplY3QzRCIsIkZhY2VzQ29udHJvbGxlciIsImNvbnRhaW5lciIsImZhY2VzIiwiZGl2aXNpb25zIiwiZ2VuZXJhdGVEaXZpc2lvbnMiLCJsYXN0WCIsImxhc3RZIiwib25Mb3dLaWNrIiwib25VSUhpZGRlbiIsIm9uU291bmRFbmQiLCJibGFja01vZGVWZXJ0aWNhbCIsImJsYWNrTW9kZUhvcml6b250YWwiLCJibGFja01vZGVUdW5uZWxUb3AiLCJibGFja01vZGVUdW5uZWxCb3R0b20iLCJibGFja01vZGVCb3R0b20iLCJibGFja01vZGVzIiwic2V0QmxhY2tNb2RlIiwicmVhY3Rpb25zIiwiaWQiLCJmYWNlIiwibWluIiwibWF4IiwicG9zc2libGVEaXZpc2lvblgiLCJmaW5kRGl2aXNpb25zIiwicmRtWEluZGV4IiwiZmxvb3IiLCJkaXZpc2lvblgiLCJpbmRleE9mIiwicG9zc2libGVEaXZpc2lvblkiLCJyZG1ZSW5kZXgiLCJkaXZpc2lvblkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwic2V0U3RyaXBlcyIsImFsbCIsImN1cnJlbnQiLCJyYW5nZSIsImRpdmlzaW9uIiwiaW5kZXgiLCJmaWx0ZXIiLCJ1aUhpZGRlbiIsInNvdW5kRW5kZWQiLCJyZWFjdGlvbiIsImVtaXQiLCJyZXNldCIsIm9uRW5kIiwicmRtIiwiTW91c2VNYW5hZ2VyIiwiY2hlY2tNb3VzZVNwZWVkIiwibW91c2VTcGVlZFgiLCJtb3VzZVNwZWVkWSIsIm1vdXNlTGFzdFgiLCJtb3VzZUxhc3RZIiwibW91c2VEaXJlY3Rpb25YIiwibW91c2VEaXJlY3Rpb25ZIiwibW91c2VYIiwibW91c2VZIiwic2V0SW50ZXJ2YWwiLCJnZXRTcGVlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0RGlyZWN0aW9uIiwicGFnZVgiLCJwYWdlWSIsIktleWJvYXJkQ29udHJvbGxlciIsIkJhY2tncm91bmQiLCJCb3R0b20iLCJob3Jpem9udGFsIiwiaG9yaXpvbnRhbFNrZXcxIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFNrZXcxIiwidmVydGljYWxTa2V3MiIsInZpc2liaWxpdHlUb2dnbGVyIiwidmlzaWJpbGl0eUhpZGVyIiwidmlzaWJpbGl0eVNob3dlciIsInRvZ2dsZVBvc2l0aW9uIiwiTGVmdCIsIlJpZ2h0IiwiQmFja1NpZGUiLCJwb3NpdGlvbiIsIlRvcCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIlNvdW5kTWFuYWdlciIsImJhc3MiLCJtaWRCYXNzIiwidm9pY2UiLCJkcnVtIiwicGF1c2UiLCJhc3NldHMiLCJzb3VyY2VzIiwiaW50cm8iLCJ4cCIsInN0YXJ0IiwiaW5pdFNvdW5kIiwibG93S2ljayIsInJhbmdlcyIsInNvdW5kR3VpIiwib25DaGFuZ2UiLCJwbGF5ZXIiLCJwbGF5IiwicGxheWVycyIsImF1ZGlvIiwiYW5hbHlzZXIiLCJub2RlIiwiQXVkaW8iLCJ2b2x1bWUiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImF1ZGlibGUiLCJzdGVyZW8iLCJsb2FkZWQiLCJzcmMiLCJmcmVxcyIsImZyZXF1ZW5jaWVzIiwibGV2ZWwiLCJ1cGRhdGUiLCJxdWV1ZSIsInNtb290aCIsImNvZWZmIiwiaW5pdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9nbyIsIiRhY3Rpb24iLCIkYWN0aW9uRmlsbCIsIiR0dXRvIiwiJGNyZWRpdHMiLCJub3ciLCJEYXRlIiwibWF4VGltZSIsImlzQ29tcGxldGVkIiwibWluRmlsbCIsIm1heEZpbGwiLCJmaWxsIiwibWF4U2NhbGUiLCJtaW5TY2FsZSIsInNjYWxlIiwib3BhY2l0eSIsInJlc2V0dGVkIiwiaXNEb3duIiwicGF1c2VkIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJvbkVuZFhQIiwiZGlzcGxheSIsInN0eWxlIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwiY3NzIiwidGltZVNjYWxlIiwicmV2ZXJzZSIsInRyYW5zZm9ybU9yaWdpbiIsImRpc3BsYXlUdXRvcmlhbCIsInBvaW50ZXJFdmVudHMiLCJkaXNwbGF5Q3JlZGl0cyIsImdsc2xpZnkiLCJBcHAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWNlc0NvbnRyb2xsZXIiLCJmYWNlc0NvbnRhaW5lciIsInVpIiwic291bmRNYW5hZ2VyIiwia2V5Ym9hcmRDb250cm9sbGVyIiwicmVzaXplIiwiYmluZExpc3RlbmVycyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0Q2xlYXJDb2xvciIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTb2Z0U2hhZG93TWFwIiwiV0FHTkVSIiwidmVydGV4U2hhZGVyc1BhdGgiLCJmcmFnbWVudFNoYWRlcnNQYXRoIiwiY29tcG9zZXIiLCJDb21wb3NlciIsImJsb29tV2lkdGgiLCJpc1RvdWNoIiwiYmxvb21IZWlnaHQiLCJibG9vbVBhc3MiLCJNdWx0aVBhc3NCbG9vbVBhc3MiLCJwYXJhbXMiLCJzdHJlbmd0aCIsImJsdXJBbW91bnQiLCJhcHBseVpvb21CbHVyIiwiem9vbUJsdXJTdHJlbmd0aCIsInpvb21CbHVyQ2VudGVyIiwicmdiUGFzcyIsIlJHQlNwbGl0UGFzcyIsImRlbHRhIiwibm9pc2VQYXNzIiwiTm9pc2VQYXNzIiwiYW1vdW50IiwidmlnbmV0dGVQYXNzIiwiVmlnbmV0dGVQYXNzIiwiZnhhYVBhc3MiLCJGWEFBUGFzcyIsInNjZW5lIiwiU2NlbmUiLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImxvb2tBdCIsImFkZENvbnRyb2xzIiwiYWRkTGlnaHRzIiwiYWRkRWxlbWVudHMiLCJPcmJpdENvbnRyb2xzIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJwb2ludExpZ2h0MyIsIlBvaW50TGlnaHQiLCJkaXZpc2F0b3IiLCJQbGFuZUdlb21ldHJ5Iiwib3RoZXJHZW9tZXRyeSIsImxlZnRSaWdodEdlb21ldHJ5IiwidG9wQm90dG9tR2VvbWV0cnkiLCJiYWNrZ3JvdW5kR2VvbWV0cnkiLCJsZWZ0Iiwicm90YXRpb24iLCJQSSIsInJlZ2lzdGVyIiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJzZW5zIiwiZGVsYXkiLCJyZW5kZXIiLCJwYXNzIiwidG9TY3JlZW4iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiUmFuZ2UiLCJ0aW1lIiwibiIsInN0YXJ0MSIsInN0b3AxIiwic3RhcnQyIiwic3RvcDIiLCJyYW5kb21Gcm9tQXJyYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7O0lBS01BLGE7Ozs7Ozs7OztBQUVGOzs7Ozs2QkFLY0MsSyxFQUFxQjtBQUFBLGdCQUFkQyxJQUFjLHVFQUFQLElBQU87OztBQUUvQixnQkFBTUMsWUFBWUgsY0FBY0ksVUFBZCxDQUF5QkgsS0FBekIsQ0FBbEI7O0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFD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QTs7QUFFQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLGtCQUFrQjs7QUFFbEIsZUFBZTs7QUFFZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVILHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdEQUFnRDs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwrQ0FBK0M7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjtBQUNBOzs7Ozs7O0FDMy9CQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNNlAsVUFBVSxtQkFBVixJQUFOOztJQUVNQyxHO0FBRUwscUJBQWU7QUFBQTs7QUFDUnBPLG1CQUFPZSxPQUFQLEdBQWlCLEtBQWpCO0FBQ0FmLG1CQUFPeUcsUUFBUCxHQUFrQixLQUFsQjtBQUNBekcsbUJBQU8wRyxVQUFQLEdBQW9CLEtBQXBCOztBQUVOLGlCQUFLMkgsZUFBTCxHQUF1QixRQUF2Qjs7QUFFQTtBQUNNLGlCQUFLQyxlQUFMLEdBQXVCLCtCQUF2QjtBQUNBLGlCQUFLQyxjQUFMLEdBQXNCLEtBQUtELGVBQUwsQ0FBcUJySyxTQUEzQztBQUNBLGlCQUFLdUssRUFBTCxHQUFVLGtCQUFWOztBQUVBLG1DQUFhdkUsS0FBYjs7QUFFQSxpQkFBS3dFLFlBQUwsR0FBb0IsNEJBQXBCO0FBQ0EsaUJBQUtDLGtCQUFMLEdBQTBCLGtDQUExQjs7QUFFTixpQkFBS0MsTUFBTCxHQUFnQixLQUFLQSxNQUFyQixNQUFnQixJQUFoQjtBQUNBLGlCQUFLbkQsTUFBTCxHQUFnQixLQUFLQSxNQUFyQixNQUFnQixJQUFoQjtBQUNNLGlCQUFLbE0sT0FBTCxHQUFpQixLQUFLQSxPQUF0QixNQUFpQixJQUFqQjtBQUNBLGlCQUFLa0YsVUFBTCxHQUFvQixLQUFLQSxVQUF6QixNQUFvQixJQUFwQjtBQUNBLGlCQUFLQyxVQUFMLEdBQW9CLEtBQUtBLFVBQXpCLE1BQW9CLElBQXBCO0FBQ0EsaUJBQUtvQyxLQUFMLEdBQWUsS0FBS0EsS0FBcEIsTUFBZSxJQUFmOztBQUVOLGlCQUFLK0UsSUFBTDtBQUNBLGlCQUFLZ0QsYUFBTDtBQUNBOzs7O21DQUVPO0FBQ1Asc0JBQU1DLFNBQVM3QyxTQUFTOEMsY0FBVCxDQUF3QixRQUF4QixDQUFmOztBQUVBLHVCQUFLQyxRQUFMLEdBQWdCLElBQUlsUSxNQUFNbVEsYUFBVixDQUF3QixFQUFFSCxRQUFRQSxNQUFWLEVBQWtCSSxXQUFXLElBQTdCLEVBQW1DQyxPQUFPLEtBQTFDLEVBQXhCLENBQWhCO0FBQ0EsdUJBQUtILFFBQUwsQ0FBY0ksT0FBZCxDQUFzQm5QLE9BQU9vUCxVQUE3QixFQUF5Q3BQLE9BQU9xUCxXQUFoRDtBQUNBLHVCQUFLTixRQUFMLENBQWNPLGFBQWQsQ0FBNEIsS0FBS2pCLGVBQWpDO0FBQ0E7QUFDQSx1QkFBS1UsUUFBTCxDQUFjUSxTQUFkLENBQXdCQyxPQUF4QixHQUFrQyxJQUFsQztBQUNBLHVCQUFLVCxRQUFMLENBQWNRLFNBQWQsQ0FBd0IzUCxJQUF4QixHQUErQmYsTUFBTTRRLGdCQUFyQzs7QUFFQUMseUJBQU9DLGlCQUFQLEdBQTJCLG1CQUEzQjtBQUNBRCx5QkFBT0UsbUJBQVAsR0FBNkIscUJBQTdCOztBQUVBLHVCQUFLQyxRQUFMLEdBQWdCLElBQUlILE9BQU9JLFFBQVgsQ0FBb0IsS0FBS2YsUUFBekIsQ0FBaEI7QUFDQSx1QkFBS2MsUUFBTCxDQUFjVixPQUFkLENBQXNCblAsT0FBT29QLFVBQTdCLEVBQXlDcFAsT0FBT3FQLFdBQWhEOztBQUVBLHNCQUFNVSxhQUFhL1AsT0FBT2dRLE9BQVAsR0FBaUIsR0FBakIsR0FBdUIsR0FBMUM7QUFDTSxzQkFBTUMsY0FBY2pRLE9BQU9nUSxPQUFQLEdBQWlCLEdBQWpCLEdBQXVCLEdBQTNDOztBQUVOLHVCQUFLRSxTQUFMLEdBQWlCLElBQUlSLE9BQU9TLGtCQUFYLENBQThCSixVQUE5QixFQUEwQ0UsV0FBMUMsQ0FBakI7QUFDQSx1QkFBS0MsU0FBTCxDQUFlRSxNQUFmLENBQXNCQyxRQUF0QixHQUFpQyxJQUFqQztBQUNNLHVCQUFLSCxTQUFMLENBQWVFLE1BQWYsQ0FBc0JFLFVBQXRCLEdBQW1DLEVBQW5DO0FBQ0EsdUJBQUtKLFNBQUwsQ0FBZUUsTUFBZixDQUFzQkcsYUFBdEIsR0FBc0MsSUFBdEM7QUFDQSx1QkFBS0wsU0FBTCxDQUFlRSxNQUFmLENBQXNCSSxnQkFBdEIsR0FBeUMsR0FBekM7QUFDQSx1QkFBS04sU0FBTCxDQUFlRSxNQUFmLENBQXNCSyxjQUF0QixHQUF1QyxJQUFJNVIsTUFBTXVCLE9BQVYsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsQ0FBdkM7O0FBRUEsdUJBQUtzUSxPQUFMLEdBQWUsSUFBSWhCLE9BQU9pQixZQUFYLEVBQWY7QUFDQSx1QkFBS0QsT0FBTCxDQUFhTixNQUFiLENBQW9CUSxLQUFwQixHQUE0QixJQUFJL1IsTUFBTXVCLE9BQVYsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBdEIsQ0FBNUI7O0FBRUEsdUJBQUt5USxTQUFMLEdBQWlCLElBQUluQixPQUFPb0IsU0FBWCxFQUFqQjtBQUNBLHVCQUFLRCxTQUFMLENBQWVULE1BQWYsQ0FBc0JXLE1BQXRCLEdBQStCLElBQS9CO0FBQ0EsdUJBQUtGLFNBQUwsQ0FBZVQsTUFBZixDQUFzQjlQLEtBQXRCLEdBQThCLEdBQTlCOztBQUVBLHVCQUFLMFEsWUFBTCxHQUFvQixJQUFJdEIsT0FBT3VCLFlBQVgsRUFBcEI7QUFDQSx1QkFBS0QsWUFBTCxDQUFrQlosTUFBbEIsQ0FBeUJXLE1BQXpCLEdBQWtDLEdBQWxDOztBQUVBLHVCQUFLRyxRQUFMLEdBQWdCLElBQUl4QixPQUFPeUIsUUFBWCxFQUFoQjs7QUFFTix1QkFBS2xSLEtBQUwsR0FBYUQsT0FBT0MsS0FBUCxHQUFlLEVBQTVCO0FBQ0EsdUJBQUtDLE1BQUwsR0FBY0YsT0FBT0UsTUFBUCxHQUFnQixFQUE5QjtBQUNBLHVCQUFLcEQsTUFBTCxHQUFja0QsT0FBT2xELE1BQVAsR0FBZ0IsR0FBOUI7O0FBRU0sdUJBQUtzVSxLQUFMLEdBQWEsSUFBSXZTLE1BQU13UyxLQUFWLEVBQWI7QUFDQSx1QkFBS0QsS0FBTCxDQUFXeFAsR0FBWCxHQUFpQixJQUFJL0MsTUFBTXlTLEdBQVYsQ0FBYyxRQUFkLEVBQXdCLEdBQXhCLEVBQTZCLEtBQUt4VSxNQUFMLEdBQWMsR0FBM0MsQ0FBakI7O0FBRUEsdUJBQUt5VSxNQUFMLEdBQWMsSUFBSTFTLE1BQU0yUyxpQkFBVixDQUE0QixFQUE1QixFQUFnQ3hSLE9BQU9vUCxVQUFQLEdBQW9CcFAsT0FBT3FQLFdBQTNELEVBQXdFLENBQXhFLEVBQTJFLElBQTNFLENBQWQ7QUFDQSx1QkFBS2tDLE1BQUwsQ0FBWXBJLFFBQVosQ0FBcUJ0RyxDQUFyQixHQUF5QixDQUF6QjtBQUNBLHVCQUFLME8sTUFBTCxDQUFZRSxNQUFaLENBQW1CLElBQUk1UyxNQUFNa0IsT0FBVixFQUFuQjtBQUNBLHVCQUFLcVIsS0FBTCxDQUFXblAsR0FBWCxDQUFlLEtBQUtzUCxNQUFwQjs7QUFHQSx1QkFBS0csV0FBTDtBQUNBLHVCQUFLQyxTQUFMO0FBQ0EsdUJBQUtDLFdBQUw7O0FBRUEsdUJBQUtwRyxNQUFMO0FBQ047Ozs0Q0FFZ0I7QUFDaEJ4TCx5QkFBTzRILGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUsrRyxNQUF2Qzs7QUFFTSwwQ0FBY3RSLEVBQWQsQ0FBaUIsaUJBQU9nQixFQUFQLENBQVVELEtBQTNCLEVBQWtDLEtBQUtrQixPQUF2QztBQUNBLDBDQUFjakMsRUFBZCxDQUFpQixpQkFBT2lCLEVBQVAsQ0FBVUMsTUFBM0IsRUFBbUMsS0FBS2lHLFVBQXhDO0FBQ0EsMENBQWNuSCxFQUFkLENBQWlCLGlCQUFPVyxNQUFQLENBQWNFLEdBQS9CLEVBQW9DLEtBQUt1RyxVQUF6QztBQUNBLDBDQUFjcEgsRUFBZCxDQUFpQixpQkFBT2dCLEVBQVAsQ0FBVUgsR0FBM0IsRUFBZ0MsS0FBSzJJLEtBQXJDO0FBQ047OztvQ0FFVztBQUNMN0cseUJBQU9lLE9BQVAsR0FBaUIsS0FBakI7QUFDQWYseUJBQU95RyxRQUFQLEdBQWtCLEtBQWxCO0FBQ0F6Ryx5QkFBTzBHLFVBQVAsR0FBb0IsS0FBcEI7QUFDSDs7O3NDQUVVO0FBQ1AxRyx5QkFBT2UsT0FBUCxHQUFpQixJQUFqQjtBQUNIOzs7eUNBRWE7QUFDVmYseUJBQU95RyxRQUFQLEdBQWtCLElBQWxCO0FBQ0g7Ozt1Q0FFWWxLLEksRUFBTztBQUFBLHNCQUNSb0MsSUFEUSxHQUNDcEMsSUFERCxDQUNSb0MsSUFEUTs7O0FBR2hCLHNCQUFLQSxTQUFTLElBQWQsRUFBcUI7QUFDakJxQiwrQkFBTzBHLFVBQVAsR0FBb0IsSUFBcEI7QUFDSDtBQUNKOzs7MENBRVc7QUFDZCxzQkFBTW1MLGdCQUFnQixtQkFBQXhRLENBQUEsRUFBQUEsRUFBZ0N4QyxLQUFoQyxDQUF0QjtBQUNBO0FBQ0E7Ozt3Q0FFWTtBQUNaLHVCQUFLaVQsS0FBTCxHQUFhLElBQUlqVCxNQUFNa1QsWUFBVixDQUF1QixRQUF2QixDQUFiO0FBQ0EsdUJBQUtYLEtBQUwsQ0FBV25QLEdBQVgsQ0FBZSxLQUFLNlAsS0FBcEI7O0FBRUUsc0JBQU1FLGNBQWMsSUFBSW5ULE1BQU1vVCxVQUFWLENBQXNCLFFBQXRCLEVBQWdDLEdBQWhDLEVBQXFDLENBQXJDLENBQXBCO0FBQ0FELDhCQUFZN0ksUUFBWixDQUFxQnhHLENBQXJCLEdBQXlCLENBQXpCO0FBQ0FxUCw4QkFBWTdJLFFBQVosQ0FBcUJ2RyxDQUFyQixHQUF5QixDQUF6QjtBQUNBb1AsOEJBQVk3SSxRQUFaLENBQXFCdEcsQ0FBckIsR0FBeUIsRUFBekI7O0FBRUEsdUJBQUt1TyxLQUFMLENBQVduUCxHQUFYLENBQWUrUCxXQUFmO0FBQ0Y7OzswQ0FFYztBQUNkLHVCQUFLRSxTQUFMLEdBQWlCLENBQWpCOztBQUVNLHVCQUFLelQsUUFBTCxHQUFnQixJQUFJSSxNQUFNc1QsYUFBVixDQUF3QixLQUFLclYsTUFBN0IsRUFBcUMsS0FBS21ELEtBQTFDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELENBQWhCO0FBQ0EsdUJBQUttUyxhQUFMLEdBQXFCLElBQUl2VCxNQUFNc1QsYUFBVixDQUF3QixLQUFLbFMsS0FBN0IsRUFBb0MsS0FBS25ELE1BQXpDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELENBQXJCOztBQUVOLHVCQUFLdVYsaUJBQUwsR0FBeUIsSUFBSXhULE1BQU1zVCxhQUFWLENBQXdCLEtBQUtyVixNQUE3QixFQUFxQyxLQUFLb0QsTUFBMUMsRUFBa0RxRCxLQUFLa0MsS0FBTCxDQUFXLEtBQUszSSxNQUFMLEdBQWMsS0FBS29WLFNBQTlCLENBQWxELEVBQTRGM08sS0FBS2tDLEtBQUwsQ0FBVyxLQUFLdkYsTUFBTCxHQUFjLEtBQUtnUyxTQUE5QixDQUE1RixDQUF6QjtBQUNBLHVCQUFLSSxpQkFBTCxHQUF5QixJQUFJelQsTUFBTXNULGFBQVYsQ0FBd0IsS0FBS2xTLEtBQTdCLEVBQW9DLEtBQUtuRCxNQUF6QyxFQUFpRHlHLEtBQUtrQyxLQUFMLENBQVcsS0FBS3hGLEtBQUwsR0FBYSxLQUFLaVMsU0FBN0IsQ0FBakQsRUFBMkYzTyxLQUFLa0MsS0FBTCxDQUFXLEtBQUszSSxNQUFMLEdBQWMsS0FBS29WLFNBQTlCLENBQTNGLENBQXpCO0FBQ0EsdUJBQUtLLGtCQUFMLEdBQTBCLElBQUkxVCxNQUFNc1QsYUFBVixDQUF3QixLQUFLbFMsS0FBN0IsRUFBb0MsS0FBS0MsTUFBekMsRUFBaURxRCxLQUFLa0MsS0FBTCxDQUFXLEtBQUt4RixLQUFMLEdBQWEsS0FBS2lTLFNBQWxCLEdBQThCLENBQXpDLENBQWpELEVBQThGM08sS0FBS2tDLEtBQUwsQ0FBVyxLQUFLdkYsTUFBTCxHQUFjLEtBQUtnUyxTQUFuQixHQUErQixDQUExQyxDQUE5RixDQUExQjs7QUFFQSx1QkFBS00sSUFBTCxHQUFZLG1CQUFTLEtBQUsvVCxRQUFkLEVBQXdCLFFBQXhCLENBQVo7QUFDQSx1QkFBSytULElBQUwsQ0FBVUMsUUFBVixDQUFtQjdQLENBQW5CLEdBQXVCVyxLQUFLbVAsRUFBTCxHQUFVLEdBQWpDO0FBQ0EsdUJBQUtGLElBQUwsQ0FBVXJKLFFBQVYsQ0FBbUJ4RyxDQUFuQixHQUF1QixDQUFDLEtBQUsxQyxLQUFOLEdBQWMsR0FBckM7QUFDTSx1QkFBS3FPLGVBQUwsQ0FBcUJxRSxRQUFyQixDQUE4QixNQUE5QixFQUFzQyxLQUFLSCxJQUEzQzs7QUFFTix1QkFBS0ksS0FBTCxHQUFhLG9CQUFVLEtBQUtuVSxRQUFmLEVBQXlCLFFBQXpCLENBQWI7QUFDQSx1QkFBS21VLEtBQUwsQ0FBV0gsUUFBWCxDQUFvQjdQLENBQXBCLEdBQXdCVyxLQUFLbVAsRUFBTCxHQUFVLEdBQWxDO0FBQ0EsdUJBQUtFLEtBQUwsQ0FBV3pKLFFBQVgsQ0FBb0J4RyxDQUFwQixHQUF3QixLQUFLMUMsS0FBTCxHQUFhLEdBQXJDO0FBQ00sdUJBQUtxTyxlQUFMLENBQXFCcUUsUUFBckIsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBS0MsS0FBNUM7O0FBRU4sdUJBQUtDLE1BQUwsR0FBYyxxQkFBVyxLQUFLcFUsUUFBaEIsRUFBMEIsUUFBMUIsQ0FBZDtBQUNBLHVCQUFLb1UsTUFBTCxDQUFZSixRQUFaLENBQXFCOVAsQ0FBckIsR0FBeUIsQ0FBQ1ksS0FBS21QLEVBQU4sR0FBVyxHQUFwQztBQUNNLHVCQUFLRyxNQUFMLENBQVlKLFFBQVosQ0FBcUI1UCxDQUFyQixHQUF5QlUsS0FBS21QLEVBQUwsR0FBVSxHQUFuQztBQUNOLHVCQUFLRyxNQUFMLENBQVkxSixRQUFaLENBQXFCdkcsQ0FBckIsR0FBeUIsQ0FBQyxLQUFLMUMsTUFBTixHQUFlLEdBQXhDO0FBQ00sdUJBQUtvTyxlQUFMLENBQXFCcUUsUUFBckIsQ0FBOEIsUUFBOUIsRUFBd0MsS0FBS0UsTUFBN0M7O0FBRU4sdUJBQUtDLEdBQUwsR0FBVyxrQkFBUSxLQUFLclUsUUFBYixFQUF1QixRQUF2QixDQUFYO0FBQ0EsdUJBQUtxVSxHQUFMLENBQVNMLFFBQVQsQ0FBa0I5UCxDQUFsQixHQUFzQixDQUFDWSxLQUFLbVAsRUFBTixHQUFXLEdBQWpDO0FBQ00sdUJBQUtJLEdBQUwsQ0FBU0wsUUFBVCxDQUFrQjVQLENBQWxCLEdBQXNCVSxLQUFLbVAsRUFBTCxHQUFVLEdBQWhDO0FBQ04sdUJBQUtJLEdBQUwsQ0FBUzNKLFFBQVQsQ0FBa0J2RyxDQUFsQixHQUFzQixLQUFLMUMsTUFBTCxHQUFjLEdBQXBDO0FBQ00sdUJBQUtvTyxlQUFMLENBQXFCcUUsUUFBckIsQ0FBOEIsS0FBOUIsRUFBcUMsS0FBS0csR0FBMUM7O0FBRU47QUFDQTtBQUNBOztBQUVBLHVCQUFLdkUsY0FBTCxDQUFvQnBGLFFBQXBCLENBQTZCdEcsQ0FBN0IsR0FBaUMsQ0FBQyxLQUFLL0YsTUFBTixHQUFlLEdBQWhEO0FBQ00sdUJBQUt5UixjQUFMLENBQW9CdkIsS0FBcEIsQ0FBMEJySyxDQUExQixHQUE4QixLQUFLNEwsY0FBTCxDQUFvQnZCLEtBQXBCLENBQTBCcEssQ0FBMUIsR0FBK0IsR0FBN0Q7O0FBRU4sdUJBQUt3TyxLQUFMLENBQVduUCxHQUFYLENBQWUsS0FBS3NNLGNBQXBCO0FBQ0E7OztxQ0FFWTtBQUNOLHNCQUFNd0UsT0FBT3hQLEtBQUtDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBQyxDQUF2QixHQUEyQixDQUF4QztBQUNBLHNCQUFNd1AsUUFBUXpQLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBbEM7QUFDSDs7O3FDQUVNO0FBQ0gsdUJBQUtnTCxFQUFMLENBQVFoRCxNQUFSO0FBQ0EsdUJBQUtpRCxZQUFMLENBQWtCakQsTUFBbEI7O0FBRU4sdUJBQUtnSCxJQUFMLENBQVVoSCxNQUFWO0FBQ0EsdUJBQUtvSCxLQUFMLENBQVdwSCxNQUFYO0FBQ0EsdUJBQUtxSCxNQUFMLENBQVlySCxNQUFaO0FBQ0EsdUJBQUtzSCxHQUFMLENBQVN0SCxNQUFUOztBQUVBLHVCQUFLcUUsUUFBTCxDQUFjaEosS0FBZDtBQUNBLHVCQUFLZ0osUUFBTCxDQUFjb0QsTUFBZCxDQUFxQixLQUFLN0IsS0FBMUIsRUFBaUMsS0FBS0csTUFBdEM7QUFDTSx1QkFBSzFCLFFBQUwsQ0FBY3FELElBQWQsQ0FBbUIsS0FBS2hELFNBQXhCO0FBQ0EsdUJBQUtMLFFBQUwsQ0FBY3FELElBQWQsQ0FBbUIsS0FBS3hDLE9BQXhCO0FBQ0EsdUJBQUtiLFFBQUwsQ0FBY3FELElBQWQsQ0FBbUIsS0FBS3JDLFNBQXhCO0FBQ0EsdUJBQUtoQixRQUFMLENBQWNxRCxJQUFkLENBQW1CLEtBQUtsQyxZQUF4QjtBQUNBLHVCQUFLbkIsUUFBTCxDQUFjc0QsUUFBZCxDQUF1QixLQUFLakMsUUFBNUI7O0FBRU47O0FBRUEscUNBQUksS0FBSzFGLE1BQVQ7QUFDQTs7O3FDQUVTO0FBQ1QsdUJBQUsrRixNQUFMLENBQVk2QixNQUFaLEdBQXFCcFQsT0FBT29QLFVBQVAsR0FBb0JwUCxPQUFPcVAsV0FBaEQ7QUFDQSx1QkFBS2tDLE1BQUwsQ0FBWThCLHNCQUFaOztBQUVBLHVCQUFLdEUsUUFBTCxDQUFjSSxPQUFkLENBQXVCblAsT0FBT29QLFVBQTlCLEVBQTBDcFAsT0FBT3FQLFdBQWpEO0FBQ0E7Ozs7OztBQUlGLElBQUlqQixHQUFKLEc7Ozs7Ozs7Ozs7Ozs7OztBQ3hPQTs7Ozs7Ozs7SUFFTWtGLEs7QUFFRixtQkFBYzNVLElBQWQsRUFBb0IwTSxLQUFwQixFQUEyQnVGLEtBQTNCLEVBQWtDdFUsS0FBbEMsRUFBMEM7QUFBQTs7QUFDdEMsYUFBS3FDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUswTSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLdUYsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsYUFBS3RVLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtpUCxLQUFMLEdBQWEsQ0FBYjs7QUFFQSxhQUFLZ0ksSUFBTCxHQUFZL0csS0FBS0QsR0FBTCxFQUFaO0FBQ0g7Ozs7K0JBRVFoQixLLEVBQVE7QUFDYixnQkFBTXFGLFFBQVFwRSxLQUFLRCxHQUFMLEtBQWEsS0FBS2dILElBQWhDOztBQUVBLGlCQUFLaEksS0FBTCxHQUFhQSxLQUFiOztBQUVBLGdCQUFLcUYsUUFBUSxLQUFLQSxLQUFiLElBQXNCLEtBQUtyRixLQUFMLEdBQWEsR0FBeEMsRUFBOEM7QUFDMUMscUJBQUtnSSxJQUFMLEdBQVkvRyxLQUFLRCxHQUFMLEVBQVo7O0FBRUEsd0NBQWMzRixJQUFkLENBQW1CLEtBQUt0SyxLQUF4QjtBQUNIO0FBQ0o7Ozs7OztrQkFJVWdYLEs7Ozs7Ozs7Ozs7OztrQkM1QlNyTixHO0FBQVQsU0FBU0EsR0FBVCxDQUFjdU4sQ0FBZCxFQUFpQkMsTUFBakIsRUFBeUJDLEtBQXpCLEVBQWdDQyxNQUFoQyxFQUF3Q0MsS0FBeEMsRUFBK0M7QUFDMUQsV0FBUSxDQUFDSixJQUFJQyxNQUFMLEtBQWdCQyxRQUFRRCxNQUF4QixDQUFELElBQXFDRyxRQUFRRCxNQUE3QyxJQUF1REEsTUFBOUQ7QUFDSCxFOzs7Ozs7Ozs7Ozs7a0JDRnVCRSxlO0FBQVQsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDM0MsV0FBT0EsTUFBTSxDQUFDLEVBQUV2USxLQUFLQyxNQUFMLEtBQWdCc1EsTUFBTWhYLE1BQXhCLENBQVAsQ0FBUDtBQUNILEM7Ozs7OztBQ0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2pGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3Q0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOzs7Ozs7OztBQ1pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7O0FDL0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckRBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0VBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQy9CQSw4REFBOEQseUJBQXlCLG1CQUFtQixzQkFBc0Isb0RBQW9ELDJaQUEyWixnWUFBZ1kscVNBQXFTLCtCQUErQiwwRUFBMEUsaUNBQWlDLDRDQUE0QyxpRkFBaUYsVUFBVSxpQkFBaUIsMkJBQTJCLGlJQUFpSSxDOzs7Ozs7QUNBbHJELDJFQUEyRSx3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLGtDQUFrQyx3QkFBd0IsdUJBQXVCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLDBCQUEwQiwyQkFBMkIsbUJBQW1CLHF0QkFBcXRCLGdHQUFnRywyR0FBMkcsNENBQTRDLG9uQkFBb25CLDRGQUE0RixnR0FBZ0csOEZBQThGLDJIQUEySCxvRkFBb0Ysd0NBQXdDLDJEQUEyRCxPQUFPLE9BQU8sNERBQTRELFNBQVMsbUlBQW1JLGlDQUFpQyx1SkFBdUosQzs7Ozs7O0FDQS83Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDLFNBQVM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDaFBBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI1ZmFlNmZiMTJlOGRlMzY4NWU4IiwiLyoqXG4gKiBFdmVudHMgTWFuYWdlclxuICogYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9ibG9iL21hc3Rlci9pbmRleC5qc1xuICovXG5cbmNsYXNzIEV2ZW50c01hbmFnZXIge1xuXG4gICAgLyoqXG4gICAgICogRW1pdCBldmVudFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHN0YXRpYyBlbWl0ICggZXZlbnQsIGRhdGEgPSBudWxsICkge1xuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICAgICAgaWYoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHNNYW5hZ2VyIDo6IEVtaXQgOjogQ3VycmVudGx5IG5vIGxpc3RlbmVycyBmb3IgdGhpcyBldmVudCA6ICcsIGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciggbGV0IGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSBsaXN0ZW5lcnNbaV0uZm4oIGRhdGEgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBuYW1lXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc3RhdGljIG9uICggZXZlbnQsIGZuICkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdFdmVudHNNYW5hZ2VyIDo6IE9OIDo6JywgZXZlbnQpO1xuXG4gICAgICAgIGlmKCFFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3QpIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdCA9IHt9O1xuXG4gICAgICAgIGlmKCFFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdKSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdID0gW107IC8vIGltcHJvdmUgKC5fLilcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdLnB1c2goe2ZuOmZufSk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgb25jZSggZXZlbnQsIGZuICkge1xuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCBkYXRhICkgPT57XG5cbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBmbihkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0ZW5lci5fID0gZm47XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oIGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb2ZmICggZXZlbnQsIGZuICkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgICAgICBpZighbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V2ZW50c01hbmFnZXIgOjogT2ZmIDo6IEN1cnJlbnRseSBubyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQgOiAnLCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzTWFuYWdlciA6OiBPZmYgOjogQ2FsbGJhY2sgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRFdmVudHMgPSBbXTtcblxuICAgICAgICBmb3IoIGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgIGlmKHRhcmdldC5mbiAhPT0gZm4gJiYgdGFyZ2V0LmZuLl8gIT09IGZuICkgeyAvLyAoLl9fLikgPz9cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiggdGFyZ2V0RXZlbnRzLmxlbmd0aCA+wqAwIClcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0gPSB0YXJnZXRFdmVudHM7XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHNNYW5hZ2VyLmpzIiwiLyoqXG4gKiBFIFYgRSBOIFQgU1xuICovXG5cbmNvbnN0IEV2ZW50cyA9IHtcbiAgICBLRVlCT0FSRDoge1xuICAgICAgICBLRVlET1dOOiBcIktFWUJPQVJEX0tFWURPV05cIixcbiAgICAgICAgS0VZVVA6IFwiS0VZQk9BUkRfS0VZVVBcIixcbiAgICAgICAgS0VZUFJFU1M6IFwiS0VZQk9BUkRfS0VZUFJFU1NcIixcbiAgICAgICAgU1BBQ0VIT0xEOiBcIktFWUJPQVJEX1NQQUNFSE9MRFwiLFxuICAgICAgICBTUEFDRVVQOiBcIktFWUJPQVJEX1NQQUNFVVBcIixcbiAgICAgICAgU1BBQ0VET1dOOiBcIktFWUJPQVJEX1NQQUNFRE9XTlwiLFxuICAgIH0sXG4gICAgU09VTkRTOiB7XG4gICAgICAgIENBTlBMQVk6IFwiU09VTkRTX0NBTlBMQVlcIixcbiAgICAgICAgRU5EOiBcIlNPVU5EU19FTkRcIixcbiAgICAgICAgTE9XS0lDSzogXCJTT1VORFNfTE9XS0lDS1wiLFxuICAgICAgICBTVEFSVDogXCJTT1VORFNfU1RBUlRcIixcbiAgICAgICAgRU5EOiBcIlNPVU5EU19FTkRcIixcbiAgICB9LFxuICAgIFhQOiB7XG4gICAgICAgIFNUQVJUOiBcIlhQX1NUQVJUXCIsXG4gICAgICAgIEVORDogXCJYUF9FTkRcIixcbiAgICB9LFxuICAgIFVJOiB7XG4gICAgICAgIEhJRERFTjogXCJVSV9ISURERU5cIixcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbHMvbWFwJztcblxuY2xhc3MgQWJzdHJhY3RGYWNlIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgPSAweDI0MjQyNSwgbmFtZSwgc2lkZSA9IFRIUkVFLkZyb250U2lkZSApIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnBsYW5lR2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlSG9sZCA9IDo6dGhpcy5vblNwYWNlSG9sZDtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uU3BhY2VEb3duID0gOjp0aGlzLm9uU3BhY2VEb3duO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vbkhpZGRlblVJID0gOjp0aGlzLm9uSGlkZGVuVUk7XG5cbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoVEhSRUUuU2hhZGVyTGliWydwaG9uZyddLnVuaWZvcm1zKTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXSA9IHsgdHlwZTonZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snZGlmZnVzZSddID0geyB0eXBlOiAnYycsIHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddID0geyB0eXBlOiAndjMnLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUludmVydCddID0geyB0eXBlOiAnZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVNxdWFyZSddID0geyB0eXBlOiAndjMnLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSkgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVdpZHRoJ10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy53aWR0aCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1SGVpZ2h0J10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUxlbmd0aCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cubGVuZ3RoIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddID0geyB0eXBlOiAnZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMC4wO1xuXG4gICAgICAgIHRoaXMuc3RhcnREaXZpc2lvbnMgPSBuZXcgVEhSRUUuVmVjdG9yMig2NSwgMSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgdGhpcy5zcGVlZE1pbiA9IDEyLjA7IC8vIDcuMFxuICAgICAgICB0aGlzLnNwZWVkTWF4ID0gMTIuMDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMztcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLmVhc2UgPSBFeHBvLmVhc2VPdXQ7XG4gICAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcblxuICAgICAgICBpZiAoIHRoaXMuZGVidWcgKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRHdWkoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbCcpLFxuICAgICAgICAgICAgLy8gZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvYm90dG9tLmZyYWcuZ2xzbCcpLFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsJyksXG4gICAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICAgIHNoYWRpbmc6IFRIUkVFLkZsYXRTaGFkaW5nLFxuICAgICAgICAgICAgbGlnaHRzOiB0cnVlLFxuICAgICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZSxcbiAgICAgICAgICAgIHNpZGU6IHNpZGUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGZvZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbGFuZUdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5tZXNoLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc2gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMubWVzaCk7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWURPV04sIHRoaXMub25LZXlEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgdGhpcy5vblNwYWNlSG9sZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlVJLkhJRERFTiwgdGhpcy5vbkhpZGRlblVJKTtcbiAgICB9XG5cbiAgICBpbml0R3VpICggaXNPcGVuICkge1xuICAgICAgICB0aGlzLmd1aSA9IHdpbmRvdy5ndWkuYWRkRm9sZGVyKHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3gnLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geCcpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd5JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHknKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneicsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB6Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsICd4JywgMCwgMTAwKS5uYW1lKCdTcGFjZSB4Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsICd5JywgMCwgMTAwKS5uYW1lKCdTcGFjZSB5Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsICd6JywgMCwgMTAwKS5uYW1lKCdTcGFjZSB6Jyk7XG4gICAgICAgIFxuICAgICAgICBpc09wZW4gJiYgdGhpcy5ndWkub3BlbigpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkICogMC4xO1xuICAgIH1cblxuICAgIHNldFBsYWluQ29sb3IgKCBjb2xvciApIHtcbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoMCwgMCk7XG4gICAgICAgIC8vIHRoaXMudW5pZm9ybXNbJ2RpZmZ1c2UnXS52YWx1ZSA9IG5ldyBUSFJFRS5Db2xvcigweEZGRkZGRik7XG4gICAgfVxuXG4gICAgc2V0U3RyaXBlcyAoIG9yaWVudGF0aW9uTmFtZSwgc2NhbGFyID0gMSwgZHVyYXRpb24gPSAyICkge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb25zW29yaWVudGF0aW9uTmFtZV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9yaWVudGF0aW9uICkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBvcmllbnRhdGlvbi5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHNjYWxhcik7IC8vIHJvc2FjZVxuXG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS54ID0gY2xvbmUueDtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnkgPSBjbG9uZS55O1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueiA9IGNsb25lLno7XG4gICAgICAgICAgICAvLyBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgMC40LCB7IHg6IGNsb25lLngsIHk6IGNsb25lLnksIHo6IGNsb25lLnosIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV2ZXJzZVN0cmlwZXMgKCkge1xuICAgICAgICB0aGlzLmZhY3RvciA9IC10aGlzLmZhY3RvcjtcbiAgICB9XG5cbiAgICBjaGFuZ2VTcGVlZCAoIHNwZWVkID0gdGhpcy5zcGVlZE1pbiApIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIH1cblxuICAgIGludmVydCAoKSB7XG4gICAgICAgIGlmICggdGhpcy5ibGFja01vZGUgKSB7XG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0byA9IHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9PT0gMS4wID8gMC4gOiAxLjtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IHRvLCBlYXNlOiB0aGlzLmVhc2UsIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVZpc2liaWxpdHkgKCkge1xuICAgICAgICBpZiAoIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSApIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZGF0YSApIHtcbiAgICAgICAgc3dpdGNoICggZGF0YS5rZXkgKSB7XG4gICAgICAgICAgICAvLyBjYXNlICdwJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFBsYWluQ29sb3IoMHgwMDAwMDApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdoJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0cmlwZXMoJ2hvcml6b250YWwnLCAxKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAndic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdHJpcGVzKCd2ZXJ0aWNhbCcsIDEpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdpJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmludmVydCgpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdyJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJldmVyc2VTdHJpcGVzKCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5VG9nZ2xlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlIaWRlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlTaG93ZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93ICgpIHtcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAxLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMCwgZWFzZTogdGhpcy5lYXNlLCBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXS52YWx1ZSA9IDA7XG4gICAgICAgIH19KTtcbiAgICB9XG5cbiAgICBvbktleVVwICggZGF0YSApIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25LZXlEb3duICggZGF0YSApIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnNlU3RyaXBlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICYmICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIHdpbmRvdy5zdGFydGVkICYmIHRoaXMuaXNTcGFjZURvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCB4LCB5LCBpbnZlcnQgPSB0cnVlICkge1xuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHRoaXMuZHVyYXRpb24sIHsgeDogeCwgeTogeSwgZWFzZTogdGhpcy5lYXNlIH0pO1xuXG4gICAgICAgIGlmICggaW52ZXJ0ICkge1xuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA+IDAuNSAmJiB0aGlzLmludmVydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QmxhY2tNb2RlICgpIHtcbiAgICAgICAgdGhpcy5ibGFja01vZGUgPSB0cnVlO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMS4wLCBlYXNlOiB0aGlzLmVhc2UsIH0pO1xuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gZGF0YTtcblxuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXS52YWx1ZSA9IG1hcChwcm9ncmVzcywgMCwgMSwgMCwgMC44KTtcbiAgICB9XG5cbiAgICBvbkVuZCAoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlU3BlZWQoMC4wKTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDI7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuc2V0KHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgeyB4OiAxLCB5OiAxLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgZHVyYXRpb24sIHsgdmFsdWU6IDAuMCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC5mcm9tVG8odGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10sIGR1cmF0aW9uLCB7IHZhbHVlOiAwLjg1IH0sIHsgdmFsdWU6IC0wLjE1LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUludmVydCddLnZhbHVlID0gMC4wO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNoYW5nZVNwZWVkKCk7XG4gICAgfVxuXG4gICAgb25IaWRkZW5VSSAoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuXG4gICAgICAgIC8vIHRoaXMudXBkYXRlRGl2aXNpb25zKDMsIDEpO1xuICAgICAgICAvLyBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXSwgMiwgeyB2YWx1ZTogMSwgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdEZhY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNvdXJjZWQgZnJvbTpcbi8vIGh0dHA6Ly93d3cubGVhbmJhY2twbGF5ZXIuY29tL3Rlc3QvaDVtdC5odG1sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtbWltZS9ibG9iL21hc3Rlci90eXBlcy5qc29uXG52YXIgbWltZVR5cGVzID0gcmVxdWlyZSgnLi9taW1lLXR5cGVzLmpzb24nKVxuXG52YXIgbWltZUxvb2t1cCA9IHt9XG5PYmplY3Qua2V5cyhtaW1lVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICB2YXIgZXh0ZW5zaW9ucyA9IG1pbWVUeXBlc1trZXldXG4gIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0KSB7XG4gICAgbWltZUxvb2t1cFtleHRdID0ga2V5XG4gIH0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvb2t1cCAoZXh0KSB7XG4gIGlmICghZXh0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgZXh0ZW5zaW9uIHN0cmluZycpXG4gIGlmIChleHQuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgZXh0ID0gZXh0LnN1YnN0cmluZygxKVxuICB9XG4gIHJldHVybiBtaW1lTG9va3VwW2V4dC50b0xvd2VyQ2FzZSgpXVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzdHJpbmcgPSB0b1N0cmluZy5jYWxsKGZuKVxuICByZXR1cm4gc3RyaW5nID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8XG4gICAgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBzdHJpbmcgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAvLyBJRTggYW5kIGJlbG93XG4gICAgIChmbiA9PT0gd2luZG93LnNldFRpbWVvdXQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuYWxlcnQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuY29uZmlybSB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5wcm9tcHQpKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1mdW5jdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUF1ZGlvQ29udGV4dFxuZnVuY3Rpb24gY3JlYXRlQXVkaW9Db250ZXh0ICgpIHtcbiAgdmFyIEF1ZGlvQ3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICByZXR1cm4gbmV3IEF1ZGlvQ3RvcigpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYXVkaW8tY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxudmFyIGF1ZGlvXG5cbm1vZHVsZS5leHBvcnRzID0gaXNTcmNQbGF5YWJsZVxuZnVuY3Rpb24gaXNTcmNQbGF5YWJsZSAoc3JjKSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzcmMgY2Fubm90IGJlIGVtcHR5JylcbiAgdmFyIHR5cGVcbiAgaWYgKHR5cGVvZiBzcmMuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gPHNvdXJjZT4gZWxlbWVudFxuICAgIHR5cGUgPSBzcmMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3JjID09PSAnc3RyaW5nJykge1xuICAgIC8vICdmb28ubXAzJyBzdHJpbmdcbiAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uKHNyYylcbiAgICBpZiAoZXh0KSB0eXBlID0gbG9va3VwKGV4dClcbiAgfSBlbHNlIHtcbiAgICAvLyB7IHNyYzogJ2Zvby5tcDMnLCB0eXBlOiAnYXVkaW8vbXBlZzsgY29kZWNzLi4nfVxuICAgIHR5cGUgPSBzcmMudHlwZVxuICB9XG5cbiAgLy8gV2UgaGF2ZSBhbiB1bmtub3duIGZpbGUgZXh0ZW5zaW9uIG9yXG4gIC8vIGEgPHNvdXJjZT4gdGFnIHdpdGhvdXQgYW4gZXhwbGljaXQgdHlwZSxcbiAgLy8ganVzdCBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0IVxuICBpZiAoIXR5cGUpIHJldHVybiB0cnVlXG5cbiAgLy8gaGFuZGxlIFwibm9cIiBlZGdlIGNhc2Ugd2l0aCBzdXBlciBsZWdhY3kgYnJvd3NlcnMuLi5cbiAgLy8gaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9mb3J1bS8jIXRvcGljL2dvb2dsZS13ZWItdG9vbGtpdC1jb250cmlidXRvcnMvYThVeTBiWHExSG9cbiAgaWYgKCFhdWRpbykgYXVkaW8gPSBuZXcgd2luZG93LkF1ZGlvKClcbiAgdmFyIGNhbnBsYXkgPSBhdWRpby5jYW5QbGF5VHlwZSh0eXBlKS5yZXBsYWNlKC9uby8sICcnKVxuICByZXR1cm4gQm9vbGVhbihjYW5wbGF5KVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVFcnJvciA9IGNyZWF0ZUVycm9yXG5mdW5jdGlvbiBjcmVhdGVFcnJvciAoc291cmNlcykge1xuICAvLyBBbGwgc291cmNlcyBhcmUgdW5wbGF5YWJsZVxuICB2YXIgZXJyID0gbmV3IEVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhbnkgb2YgdGhlIGZvbGxvd2luZyBzb3VyY2VzOlxcbiAgICAnICtcbiAgICAgIHNvdXJjZXMuam9pbignLCAnKSArICdcXG4nICtcbiAgICAgICdUcnkgdXNpbmcgYW4gYXJyYXkgb2YgT0dHLCBNUDMgYW5kIFdBVi4nKVxuICBlcnIudHlwZSA9ICdBVURJT19GT1JNQVQnXG4gIHJldHVybiBlcnJcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uIChkYXRhKSB7XG4gIHZhciBleHRJZHggPSBkYXRhLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGV4dElkeCA8PSAwIHx8IGV4dElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiBkYXRhLnN1YnN0cmluZyhleHRJZHggKyAxKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2Nhbi1wbGF5LXNyYy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhdWRpb0NvbnRleHQpIHtcbiAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcgJiZcbiAgICAgIHR5cGVvZiBhdWRpb0NvbnRleHQucmVzdW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYXVkaW9Db250ZXh0LnJlc3VtZSgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9yZXN1bWUtY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgcmFuZG9tRnJvbUFycmF5IGZyb20gJy4vdXRpbHMvcmFuZG9tRnJvbUFycmF5JztcblxuY2xhc3MgRmFjZXNDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgICAgdGhpcy5mYWNlcyA9IHt9O1xuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMSwgMTI1KSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMSwgMjUpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBvbiBldmVudHNcbiAgICAgICAgdGhpcy5vbkxvd0tpY2sgPSA6OnRoaXMub25Mb3dLaWNrO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vblVJSGlkZGVuID0gOjp0aGlzLm9uVUlIaWRkZW47XG4gICAgICAgIHRoaXMub25Tb3VuZEVuZCA9IDo6dGhpcy5vblNvdW5kRW5kO1xuXG4gICAgICAgIC8vIGJsYWNrIG1vZGVzXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwgPSA6OnRoaXMuYmxhY2tNb2RlVmVydGljYWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlSG9yaXpvbnRhbCA9IDo6dGhpcy5ibGFja01vZGVIb3Jpem9udGFsO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcCA9IDo6dGhpcy5ibGFja01vZGVUdW5uZWxUb3A7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbEJvdHRvbTtcbiAgICAgICAgdGhpcy5ibGFja01vZGVCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlQm90dG9tO1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVCb3R0b20sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVhY3Rpb25zXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zID0gOjogdGhpcy51cGRhdGVEaXZpc2lvbnM7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlID0gOjp0aGlzLnNldEJsYWNrTW9kZTtcblxuICAgICAgICB0aGlzLnJlYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zLFxuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGVcbiAgICAgICAgXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkxPV0tJQ0ssIHRoaXMub25Mb3dLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkVORCwgdGhpcy5vblNvdW5kRW5kKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uVUlIaWRkZW4pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyICggaWQsIGZhY2UgKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbaWRdID0gZmFjZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGZhY2UpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGl2aXNpb25zICggbWluLCBtYXggKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IFswXTtcblxuICAgICAgICBmb3IgKCBsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrPTQgKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIGxldCBpID0gbWF4OyBpID49IG1pbjsgaS09IDQgKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdmlzaW9ucy5wdXNoKDApO1xuXG4gICAgICAgIHJldHVybiBkaXZpc2lvbnM7XG4gICAgfVxuXG4gICAgdXBkYXRlRGl2aXNpb25zICgpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVEaXZpc2lvblggPSB0aGlzLmZpbmREaXZpc2lvbnModGhpcy5kaXZpc2lvbnMueCwgdGhpcy5kaXZpc2lvbnMubGFzdFgsIDEyKTtcbiAgICAgICAgY29uc3QgcmRtWEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVEaXZpc2lvblgubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgZGl2aXNpb25YID0gcG9zc2libGVEaXZpc2lvblhbcmRtWEluZGV4XTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucy5sYXN0WCA9IHRoaXMuZGl2aXNpb25zLnguaW5kZXhPZihkaXZpc2lvblgpO1xuXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlRGl2aXNpb25ZID0gdGhpcy5maW5kRGl2aXNpb25zKHRoaXMuZGl2aXNpb25zLnksIHRoaXMuZGl2aXNpb25zLmxhc3RZLCA0KTtcbiAgICAgICAgY29uc3QgcmRtWUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVEaXZpc2lvblkubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgZGl2aXNpb25ZID0gcG9zc2libGVEaXZpc2lvbllbcmRtWUluZGV4XTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucy5sYXN0WSA9IHRoaXMuZGl2aXNpb25zLnkuaW5kZXhPZihkaXZpc2lvblkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS51cGRhdGVEaXZpc2lvbnMoZGl2aXNpb25YLCBkaXZpc2lvblkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlc1trZXldLnNldFN0cmlwZXMoJ2hvcml6b250YWwnLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZERpdmlzaW9ucyAoIGFsbCwgY3VycmVudCwgcmFuZ2UgKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IGFsbC5tYXAoICggZGl2aXNpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIGluZGV4ID4gY3VycmVudCAtIDQgJiYgaW5kZXggPCBjdXJyZW50ICsgNCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2aXNpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkuZmlsdGVyKCAoIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkaXZpc2lvbnM7XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyAoIGRhdGEgKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy51aUhpZGRlbiB8fCB3aW5kb3cuc291bmRFbmRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXkgPT09ICdkJyApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ2UnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ3gnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG93S2ljayAoKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy51aUhpZGRlbiApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlYWN0aW9uID0gcmFuZG9tRnJvbUFycmF5KHRoaXMucmVhY3Rpb25zKTtcbiAgICAgICAgcmVhY3Rpb24oKTtcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuRU5EKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9fSk7XG5cblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0ub25FbmQoKSwgMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJsYWNrTW9kZSAoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBibGFja01vZGUgPSByYW5kb21Gcm9tQXJyYXkodGhpcy5ibGFja01vZGVzKTtcbiAgICAgICAgYmxhY2tNb2RlKCk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVmVydGljYWwgKCkge1xuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10uaGlkZSgpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLmhpZGUoKTtcbiAgICAgICAgdGhpcy5mYWNlc1sndG9wJ10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydib3R0b20nXS5zaG93KCk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlSG9yaXpvbnRhbCAoKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS5zaG93KCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWyd0b3AnXS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLmhpZGUoKTtcbiAgICB9XG5cbiAgICBibGFja01vZGVUdW5uZWxUb3AgKCkge1xuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sndG9wJ10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydib3R0b20nXS5oaWRlKCk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsQm90dG9tICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sncmlnaHQnXS5zaG93KCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3RvcCddLmhpZGUoKTtcbiAgICAgICAgdGhpcy5mYWNlc1snYm90dG9tJ10uc2hvdygpO1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUJvdHRvbSAoKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10uaGlkZSgpO1xuICAgICAgICB0aGlzLmZhY2VzWyd0b3AnXS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLnNob3coKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZSAoKSB7XG4gICAgICAgIGNvbnN0IHJkbSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgLy8gY29uc3QgZmFjZSA9IHRoaXMuZmFjZXNbJ2JvdHRvbSddO1xuXG4gICAgICAgIC8vIGNvbnN0IHRvID0gZmFjZS51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLnkgKiAyO1xuXG4gICAgICAgIC8vIFR3ZWVuTWF4LnRvKGZhY2Uuc2NhbGUsIDAuMywgeyB5OiAyLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgICAgIC8vIFR3ZWVuTWF4LnRvKHRoaXMuZmFjZXNbJ2xlZnQnXS51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAwLjMsIHsgeTogdG8sIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5mYWNlc1sncmlnaHQnXS51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAwLjMsIHsgeTogdG8sIGVhc2U6IHRoaXMuZWFzZSB9KTtcblxuICAgICAgICAvLyBjb25zdCB0b1BvcyA9IHRoaXMuZmFjZXNbJ2xlZnQnXS5wb3NpdGlvbi54ICogMjtcbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5mYWNlc1snbGVmdCddLnBvc2l0aW9uLCAwLjMsIHsgeDogdG9Qb3MsIGVhc2U6IHRoaXMuZWFzZSB9KTtcblxuICAgICAgICAvLyBjb25zdCB0b1Bvc1JpZ2h0ID0gdGhpcy5mYWNlc1sncmlnaHQnXS5wb3NpdGlvbi54ICogMjtcbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5mYWNlc1sncmlnaHQnXS5wb3NpdGlvbiwgMC4zLCB7IHg6IHRvUG9zUmlnaHQsIGVhc2U6IHRoaXMuZWFzZSB9KTtcblxuICAgICAgICAvLyBjb25zdCBzY2FsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpIC8gMTAgKyAwLjU7XG5cbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiBzY2FsZSwgeTogc2NhbGUsIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcblxuICAgICAgICAvLyBpZiAoIHJkbSA8IDAuMzMgKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmZhY2VzWydsZWZ0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmICggcmRtIDwgMC42NiApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ3RvcCddLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmZhY2VzWydib3R0b20nXS51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5mYWNlc1sndG9wJ10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmZhY2VzWydsZWZ0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG9uVUlIaWRkZW4gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25VSUhpZGRlbicpO1xuXG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS5zaG93KCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10uc2hvdygpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0ucmVzZXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmRpdmlzaW9ucy5sYXN0WSA9IDA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNlc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9GYWNlc0NvbnRyb2xsZXIuanMiLCIvKipcbiAqIE1vdXNlIE1hbmFnZXJcbiAqL1xuXG5jbGFzcyBNb3VzZU1hbmFnZXIge1xuXG5cbiAgICBzdGF0aWMgc3RhcnQoIGNoZWNrTW91c2VTcGVlZCA9IGZhbHNlICkge1xuXG4gICAgICAgIC8vIHNwZWVkXG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWSA9IDA7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VMYXN0WSA9IDA7XG5cbiAgICAgICAgLy8gZGlyZWN0aW9uXG4gICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMDtcblxuICAgICAgICAvLyBwb3NpdGlvblxuICAgICAgICB3aW5kb3cubW91c2VYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlWSA9IDA7XG5cbiAgICAgICAgaWYoY2hlY2tNb3VzZVNwZWVkKSB3aW5kb3cuc2V0SW50ZXJ2YWwoIE1vdXNlTWFuYWdlci5nZXRTcGVlZCwgMzAgKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgTW91c2VNYW5hZ2VyLm1vdmUgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbW92ZShlKSB7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgd2luZG93Lm1vdXNlWSA9IGUuY2xpZW50WTtcblxuICAgICAgICBNb3VzZU1hbmFnZXIuZ2V0RGlyZWN0aW9uKGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREaXJlY3Rpb24oZSkge1xuXG4gICAgICAgIC8vIHhcbiAgICAgICAgaWYgKHdpbmRvdy5tb3VzZVggPCBlLnBhZ2VYKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDE7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5tb3VzZVggPiBlLnBhZ2VYKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IC0xO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMDtcblxuICAgICAgICAvLyB5XG4gICAgICAgIGlmICh3aW5kb3cubW91c2VZIDwgZS5wYWdlWSlcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAxO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubW91c2VZID4gZS5wYWdlWSlcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAtMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNwZWVkKCkge1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFggPSB3aW5kb3cubW91c2VYIC0gd2luZG93Lm1vdXNlTGFzdFg7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWSA9IHdpbmRvdy5tb3VzZVkgLSB3aW5kb3cubW91c2VMYXN0WTtcblxuICAgICAgICB3aW5kb3cubW91c2VMYXN0WCA9IHdpbmRvdy5tb3VzZVg7XG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RZID0gd2luZG93Lm1vdXNlWTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdXNlTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIEtleWJvYXJkQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgIG9uS2V5VXAgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHsga2V5IH0pO1xuXG4gICAgICAgIGlmICgga2V5ID09PSAnICcgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFVVApO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04pO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHsga2V5IH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnYmFja2dyb3VuZCcpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQmFja2dyb3VuZC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBCb3R0b20gZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JvdHRvbScpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygtMywgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMS4wO1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnMic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzMnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMSc7XG5cbiAgICAgICAgdGhpcy50b2dnbGVQb3NpdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uICgpIHtcblxuICAgICAgICAvLyB0aGlzLnNjYWxlLnkgPSAyO1xuXG4gICAgICAgIC8vIHRoaXMudG9nZ2xlUG9zaXRpb24gPSAhdGhpcy50b2dnbGVQb3NpdGlvbjtcblxuICAgICAgICAvLyBjb25zdCB0byA9IHRoaXMudG9nZ2xlUG9zaXRpb24gPyB0aGlzLnBvc2l0aW9uLnkgKiAwLjUgOiB0aGlzLnBvc2l0aW9uLnkgKiAyO1xuXG4gICAgICAgIC8vIFR3ZWVuTWF4LnRvKHRoaXMucG9zaXRpb24sIHRoaXMuZHVyYXRpb24sIHsgeTogdG8sIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgc3VwZXIub25TdGFydCgpO1xuXG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKHRoaXMuc3RhcnREaXZpc2lvbnMueCwgdGhpcy5zdGFydERpdmlzaW9ucy55LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICBzdXBlci5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQm90dG9tLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIExlZnQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2xlZnQnKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAyMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzQnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICcxJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzMnO1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24gKCkge1xuXG5cblxuICAgICAgICAvLyB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gIXRoaXMudG9nZ2xlUG9zaXRpb247XG5cbiAgICAgICAgLy8gY29uc3QgdG8gPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy5wb3NpdGlvbi54ICogMC41IDogdGhpcy5wb3NpdGlvbi54ICogMjtcbiAgICAgICAgLy8gY29uc3QgdG9TcXVhcmUgPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLnggKiAwLjUgOiB0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUueCAqIDI7XG5cbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5wb3NpdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyB4OiB0bywgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgICAgICAvLyBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHRoaXMuZHVyYXRpb24sIHsgeDogdG9TcXVhcmUsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0xlZnQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgUmlnaHQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ3JpZ2h0JywgVEhSRUUuQmFja1NpZGUpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMjAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzYnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICcxJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzMnO1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24gKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gIXRoaXMudG9nZ2xlUG9zaXRpb247XG5cbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy5wb3NpdGlvbi54ICogMC41IDogdGhpcy5wb3NpdGlvbi54ICogMjtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnBvc2l0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IHg6IHRvLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgVG9wIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICd0b3AnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMjAsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc4JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMyc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICcxJztcblxuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24gKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gIXRoaXMudG9nZ2xlUG9zaXRpb247XG5cbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy5wb3NpdGlvbi55ICogMC41IDogdGhpcy5wb3NpdGlvbi55ICogMjtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnBvc2l0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IHk6IHRvLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIHN1cGVyLm9uU3RhcnQoKTtcblxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnModGhpcy5zdGFydERpdmlzaW9ucy54LCB0aGlzLnN0YXJ0RGl2aXNpb25zLnksIGZhbHNlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1RvcC5qcyIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnd2ViLWF1ZGlvLXBsYXllcic7XG5pbXBvcnQgY3JlYXRlQW5hbHlzZXIgZnJvbSAnd2ViLWF1ZGlvLWFuYWx5c2VyJztcbmltcG9ydCBhdmVyYWdlIGZyb20gJ2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlJztcbmltcG9ydCBSYW5nZSBmcm9tICcuL1JhbmdlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbi8vIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG5cbmNsYXNzIFNvdW5kTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYmFzcyA9IDA7XG4gICAgICAgIHRoaXMubWlkQmFzcyA9IDA7XG4gICAgICAgIHRoaXMudm9pY2UgPSAwO1xuICAgICAgICB0aGlzLmRydW0gPSAwO1xuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hc3NldHMgPSAnYXNzZXRzL3NvdW5kcyc7XG4gICAgICAgIHRoaXMuc291cmNlcyA9IHtcbiAgICAgICAgICAgIGludHJvOiAnaW50cm8ubXAzJyxcbiAgICAgICAgICAgIC8vIHhwOiAnZGVidWcubXAzJyxcbiAgICAgICAgICAgIHhwOiAneHAubXAzJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gOjp0aGlzLnN0YXJ0O1xuICAgICAgICB0aGlzLm9uU3BhY2VIb2xkID0gOjp0aGlzLm9uU3BhY2VIb2xkO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25TcGFjZURvd24gPSA6OnRoaXMub25TcGFjZURvd247XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdEd1aSgpO1xuXG4gICAgICAgIGNvbnN0IGxvd0tpY2sgPSBuZXcgUmFuZ2UoJ2xvd0tpY2snLCBbMTEwLCAxMzBdLCA2MDAsIEV2ZW50cy5TT1VORFMuTE9XS0lDSyk7XG5cbiAgICAgICAgdGhpcy5yYW5nZXMgPSBbbG93S2lja107XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLlNUQVJULCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB0aGlzLm9uU3BhY2VIb2xkKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCwgdGhpcy5vblNwYWNlVXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICB9XG5cbiAgICBpbml0R3VpICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZEd1aSA9IHdpbmRvdy5ndWkuYWRkRm9sZGVyKCdTb3VuZCcpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhdXNlID0gdGhpcy5zb3VuZEd1aS5hZGQodGhpcywgJ3BhdXNlJyk7XG4gICAgICAgIHBhdXNlLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlKSB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRTb3VuZCAoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc291cmNlcykubWFwKCAoIGtleSApID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldID0ge1xuICAgICAgICAgICAgICAgIGF1ZGlvOiBudWxsLFxuICAgICAgICAgICAgICAgIGFuYWx5c2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIG5vZGU6IG51bGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gMDtcbiAgICAgICAgICAgIGF1ZGlvLmNyb3NzT3JpZ2luID0gJ0Fub255bW91cyc7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBjcmVhdGVBbmFseXNlcihhdWRpbywgYXVkaW9Db250ZXh0LCB7IGF1ZGlibGU6IHRydWUsIHN0ZXJlbzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5ub2RlID0gYW5hbHlzZXIuYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuU09VTkRTLkNBTlBMQVksIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5FTkQsIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBgJHt0aGlzLmFzc2V0c30vJHt0aGlzLnNvdXJjZXNba2V5XX1gO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5hdWRpbyA9IGF1ZGlvO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICBpZiAoIHBsYXllci5sb2FkZWQgKSB7XG4gICAgICAgICAgICBwbGF5ZXIuYXVkaW8ucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnBsYXllcnNbJ3hwJ10ubG9hZGVkICkge1xuICAgICAgICAgICAgY29uc3QgeyBhbmFseXNlciwgbm9kZSB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgICAgICBjb25zdCBmcmVxcyA9IGFuYWx5c2VyLmZyZXF1ZW5jaWVzKCk7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucmFuZ2VzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBhdmVyYWdlKG5vZGUsIGZyZXFzLCByYW5nZS5mcmVxc1swXSwgcmFuZ2UuZnJlcXNbMV0pO1xuXG4gICAgICAgICAgICAgICAgcmFuZ2UudXBkYXRlKGxldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgeyBhdWRpbyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHByb2dyZXNzICogMC41LCAxKSk7XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiBpbnRybyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiB4cCB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgIHhwLnZvbHVtZSA9IDE7XG4gICAgICAgIHhwLnBsYXkoKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bC50byhpbnRybywgMC41LCB7IHZvbHVtZTogMCwgZWFzZTogRXhwby5lYXNlT3V0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBpbnRyby5wYXVzZSgpO1xuICAgICAgICB9fSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1NvdW5kTWFuYWdlci5qcyIsInZhciBxdWV1ZSA9IHt9O1xuXG4vKlxuKiogYWxsb3cgYW55IG51bWJlciB2YXJpYWJsZSB0byBiZSBzbW9vdGhlZFxuKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBhIHVuaXF1ZSBuYW1lIGZvciB5b3VyIHNtb290aGluZ1xuKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB0aGUgdmFsdWUgeW91IHdhbnQgdG8gYmUgc21vb3RoZWRcbiogQHBhcmFtIHtudW1iZXJ9IGNvZWZmIChvcHRpb25hbCkgLSB0aGUgc21vb3RoaW5nIGNvZWZmaWNpZW50LCB0aGUgc21hbGxlciwgdGhlIHNsb3dlci4gRGVmYXVsdDogMC4xXG4qIEBwYXJhbSB7Ym9vbGVhbn0gbG9nIChvcHRpb25hbCkgLSBlaXRoZXIgdGhlIHNtb290aGVkIHZhbHVlIGlzIGxvZyBpbiB0aGUgY29uc29sZS4gRGVmYXVsdDogZmFsc2VcbiogQHBhcmFtIHtudW1iZXJ9IGluaXQgKG9wdGlvbmFsKSAtIHRoZSBzdGFydGluZyB2YWx1ZSBvZiB0aGUgc21vb3RoaW5nLiBEZWZhdWx0OiAwXG4qIEByZXR1cm4ge251bWJlcn0gdGhlIHNtb290aGVkIHZhbHVlXG4qKi9cblxuZnVuY3Rpb24gc21vb3RoICggaWQsIHZhbHVlLCBjb2VmZiA9IDAuMSwgbG9nID0gZmFsc2UsIGluaXQgPSAwICkge1xuXHRpZiAoIHF1ZXVlW2lkXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdHF1ZXVlW2lkXSArPSAoIHZhbHVlIC0gcXVldWVbaWRdICkgKiBjb2VmZjtcblxuXHRcdGlmICggbG9nICkge1xuXHRcdFx0Y29uc29sZS5sb2coYCVjU21vb3RoICR7aWR9IDo6ICR7cXVldWVbaWRdfWAsICdjb2xvcjogYmx1ZTsnKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkID09PSAnJyApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU21vb3RoIDo6IGlkIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0XHR9XG5cblx0XHRxdWV1ZVtpZF0gPSBpbml0O1xuXHR9XG5cblx0cmV0dXJuIHF1ZXVlW2lkXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNtb290aDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3Ntb290aC5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBVSSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLWludHJvJyk7XG4gICAgICAgIHRoaXMuJGxvZ28gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fbG9nbycpO1xuICAgICAgICB0aGlzLiRhY3Rpb24gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYWN0aW9uJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbkZpbGwgPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25fX2ZpbGwnKTtcbiAgICAgICAgdGhpcy4kdHV0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0tdHV0bycpO1xuICAgICAgICB0aGlzLiRjcmVkaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS1jcmVkaXRzJyk7XG5cbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm1heFRpbWUgPSAzMDAwO1xuXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1pbkZpbGwgPSAwLjAxO1xuICAgICAgICB0aGlzLm1heEZpbGwgPSAxO1xuICAgICAgICB0aGlzLmZpbGwgPSB0aGlzLm1pbkZpbGw7XG5cbiAgICAgICAgdGhpcy5tYXhTY2FsZSA9IDEuNTtcbiAgICAgICAgdGhpcy5taW5TY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLm1pblNjYWxlO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IDo6dGhpcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgMS41LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAtMSxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxLFxuICAgICAgICAgICAgc2NhbGU6IHRoaXMubWF4U2NhbGUsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLm1heEZpbGwsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmUsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiB0aGlzLm9uQ29tcGxldGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uRW5kWFAgPSA6OnRoaXMub25FbmRYUDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB0aGlzLm9uS2V5RG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVVQLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQLCB0aGlzLm9uU3BhY2VVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLkVORCwgdGhpcy5vbkVuZFhQKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB7IHByb2dyZXNzOiB0aGlzLnByb2dyZXNzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMucmVzZXR0ZWQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYWN0aW9uRmlsbC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLiRhY3Rpb25GaWxsLnN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGBza2V3WCgtMjBkZWcpIHNjYWxlWCgke3RoaXMuZmlsbH0pYDtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2dvLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuJGxvZ28uc3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYHNjYWxlKCR7dGhpcy5zY2FsZX0pYDtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2dvLnN0eWxlLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYWN0aW9uLnN0eWxlLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNjYWxlIGNyZWRpdHNcbiAgICAgICAgICAgICAgICB0aGlzLiRjcmVkaXRzLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuJGNyZWRpdHMuc3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYHNjYWxlKCR7dGhpcy5zY2FsZX0pYDtcbiAgICAgICAgICAgICAgICB0aGlzLiRjcmVkaXRzLnN0eWxlLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5ICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMuJHdyYXBwZXIsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLiR3cmFwcGVyLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGRhdGEgKSB7XG5cbiAgICB9XG5cbiAgICBvbktleVVwICggZGF0YSApIHtcblxuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICYmIHRoaXMuaXNEb3duICYmICF0aGlzLmlzQ29tcGxldGVkICkge1xuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGwudGltZVNjYWxlKDMpO1xuICAgICAgICAgICAgdGhpcy50bC5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlRG93biAoKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICYmICF0aGlzLmlzRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGwudGltZVNjYWxlKDEpO1xuICAgICAgICAgICAgdGhpcy50bC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlICgpIHtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCB0aGlzLnJlc2V0dGVkICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5VSS5ISURERU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYWN0aW9uRmlsbC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMTAwJSc7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5TVEFSVCk7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5yZXNldHRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVR1dG9yaWFsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5VHV0b3JpYWwgKCkge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDQ7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlVJLkhJRERFTik7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuZnJvbVRvKHRoaXMuJHR1dG8sIDAuMywgeyBjc3M6IHsgc2NhbGU6IDAuOCB9fSwgeyBjc3M6IHsgc2NhbGU6IHRoaXMubWF4U2NhbGUgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0bC50byh0aGlzLiR0dXRvLCBkdXJhdGlvbiAqIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMuJHR1dG8sIGR1cmF0aW9uICogMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCBkdXJhdGlvbiAqIDAuNSk7XG4gICAgfVxuXG4gICAgZGlzcGxheUNyZWRpdHMgKCkge1xuICAgICAgICB0aGlzLiRjcmVkaXRzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAyO1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0bC5mcm9tVG8odGhpcy4kY3JlZGl0cywgZHVyYXRpb24sIHsgY3NzOiB7IHNjYWxlOiAwLjkgfX0sIHsgY3NzOiB7IHNjYWxlOiAxLjAgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC50byh0aGlzLiRjcmVkaXRzLCBkdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldHRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1heFNjYWxlID0gMS41O1xuICAgICAgICB0aGlzLm1pblNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMubWluU2NhbGU7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgMS41LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAtMSxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxLFxuICAgICAgICAgICAgc2NhbGU6IHRoaXMubWF4U2NhbGUsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLm1heEZpbGwsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmUsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiB0aGlzLm9uQ29tcGxldGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FbmRYUCAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUNyZWRpdHMoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5ncykge1xuICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSBzdHJpbmdzID0gW3N0cmluZ3NdXG4gIHZhciBleHBycyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpXG4gIHZhciBwYXJ0cyA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgcGFydHMucHVzaChzdHJpbmdzW2ldLCBleHByc1tpXSB8fCAnJylcbiAgfVxuICBwYXJ0cy5wdXNoKHN0cmluZ3NbaV0pXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsc2xpZnkvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBUSFJFRSApIHtcblx0LyoqXG5cdCAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG5cdCAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cblx0ICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cblx0ICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG5cdCAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cblx0ICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblx0ZnVuY3Rpb24gT3JiaXRDb250cm9scyggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHRcdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdFx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pblpvb20gPSAwO1xuXHRcdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHRcdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHRcdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHRcdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHRcdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdFx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHRcdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0XHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHRcdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0XHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0XHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHRcdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0XHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdFx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHRcdC8vIE1vdXNlIGJ1dHRvbnNcblx0XHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdFx0Ly8gZm9yIHJlc2V0XG5cdFx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0XHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdFx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0XHQvL1xuXHRcdC8vIHB1YmxpYyBtZXRob2RzXG5cdFx0Ly9cblxuXHRcdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9O1xuXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHRcdH07XG5cblx0XHQvL1xuXHRcdC8vIGludGVybmFsc1xuXHRcdC8vXG5cblx0XHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdFx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHRcdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdFx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdFx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdFx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHRcdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdFx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0XHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0XHR2YXIgc2NhbGUgPSAxO1xuXHRcdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0XHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdH1cblxuXHRcdC8vXG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdH07XG5cblx0T3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5cdE9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3JiaXRDb250cm9scztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyggT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRcdGNlbnRlcjoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdFx0bm9ab29tOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vUm90YXRlOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vUGFuOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vS2V5czoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9ICk7XG5cblx0cmV0dXJuIE9yYml0Q29udHJvbHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlcXVlbmN5VG9JbmRleCA9IHJlcXVpcmUoJ2F1ZGlvLWZyZXF1ZW5jeS10by1pbmRleCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlLmJpbmQobnVsbCwgMjU1KVxubW9kdWxlLmV4cG9ydHMuZmxvYXREYXRhID0gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlLmJpbmQobnVsbCwgMSlcblxuZnVuY3Rpb24gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlIChkaXYsIGFuYWx5c2VyLCBmcmVxdWVuY2llcywgbWluSHosIG1heEh6KSB7XG4gIHZhciBzYW1wbGVSYXRlID0gYW5hbHlzZXIuY29udGV4dC5zYW1wbGVSYXRlXG4gIHZhciBiaW5Db3VudCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50XG4gIHZhciBzdGFydCA9IGZyZXF1ZW5jeVRvSW5kZXgobWluSHosIHNhbXBsZVJhdGUsIGJpbkNvdW50KVxuICB2YXIgZW5kID0gZnJlcXVlbmN5VG9JbmRleChtYXhIeiwgc2FtcGxlUmF0ZSwgYmluQ291bnQpXG4gIHZhciBjb3VudCA9IGVuZCAtIHN0YXJ0XG4gIHZhciBzdW0gPSAwXG4gIGZvciAoOyBzdGFydCA8IGVuZDsgc3RhcnQrKykge1xuICAgIHN1bSArPSBmcmVxdWVuY2llc1tzdGFydF0gLyBkaXZcbiAgfVxuICByZXR1cm4gY291bnQgPT09IDAgPyAwIDogKHN1bSAvIGNvdW50KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhbXAgPSByZXF1aXJlKCdjbGFtcCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnJlcXVlbmN5VG9JbmRleFxuZnVuY3Rpb24gZnJlcXVlbmN5VG9JbmRleCAoZnJlcXVlbmN5LCBzYW1wbGVSYXRlLCBmcmVxdWVuY3lCaW5Db3VudCkge1xuICB2YXIgbnlxdWlzdCA9IHNhbXBsZVJhdGUgLyAyXG4gIHZhciBpbmRleCA9IE1hdGgucm91bmQoZnJlcXVlbmN5IC8gbnlxdWlzdCAqIGZyZXF1ZW5jeUJpbkNvdW50KVxuICByZXR1cm4gY2xhbXAoaW5kZXgsIDAsIGZyZXF1ZW5jeUJpbkNvdW50KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1ZGlvLWZyZXF1ZW5jeS10by1pbmRleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJhZiBmcm9tICdyYWYnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9mYWNlcy9CYWNrZ3JvdW5kJztcbmltcG9ydCBUb3AgZnJvbSAnLi9mYWNlcy9Ub3AnO1xuaW1wb3J0IExlZnQgZnJvbSAnLi9mYWNlcy9MZWZ0JztcbmltcG9ydCBSaWdodCBmcm9tICcuL2ZhY2VzL1JpZ2h0JztcbmltcG9ydCBCb3R0b20gZnJvbSAnLi9mYWNlcy9Cb3R0b20nO1xuXG5pbXBvcnQgc21vb3RoIGZyb20gJy4vc21vb3RoJztcbmltcG9ydCBGYWNlc0NvbnRyb2xsZXIgZnJvbSAnLi9GYWNlc0NvbnRyb2xsZXInO1xuaW1wb3J0IE1vdXNlTWFuYWdlciBmcm9tICcuL01vdXNlTWFuYWdlcic7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcnMvU291bmRNYW5hZ2VyJztcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXInO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5cbmNvbnN0IGdsc2xpZnkgPSByZXF1aXJlKCdnbHNsaWZ5Jyk7XG5cbmNsYXNzIEFwcCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gMHgwMDAwMDA7XG5cdFx0XG5cdFx0Ly8gdGhpcy5ndWkgPSB3aW5kb3cuZ3VpID0gbmV3IGRhdC5HVUkoKTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIgPSBuZXcgRmFjZXNDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuZmFjZXNDb250YWluZXIgPSB0aGlzLmZhY2VzQ29udHJvbGxlci5jb250YWluZXI7XG4gICAgICAgIHRoaXMudWkgPSBuZXcgVUkoKTtcblxuICAgICAgICBNb3VzZU1hbmFnZXIuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlciA9IG5ldyBTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRDb250cm9sbGVyKCk7XG5cdFx0XHRcblx0XHR0aGlzLnJlc2l6ZSA9IDo6dGhpcy5yZXNpemU7XG5cdFx0dGhpcy51cGRhdGUgPSA6OnRoaXMudXBkYXRlO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vblVJSGlkZGVuID0gOjp0aGlzLm9uVUlIaWRkZW47XG4gICAgICAgIHRoaXMub25Tb3VuZEVuZCA9IDo6dGhpcy5vblNvdW5kRW5kO1xuICAgICAgICB0aGlzLnJlc2V0ID0gOjp0aGlzLnJlc2V0O1xuXHRcdFxuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuYmluZExpc3RlbmVycygpO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXMsIGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IGZhbHNlIH0pO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdC8vIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cdFx0XG5cdFx0V0FHTkVSLnZlcnRleFNoYWRlcnNQYXRoID0gJ2pzL3ZlcnRleC1zaGFkZXJzJztcblx0XHRXQUdORVIuZnJhZ21lbnRTaGFkZXJzUGF0aCA9ICdqcy9mcmFnbWVudC1zaGFkZXJzJztcblxuXHRcdHRoaXMuY29tcG9zZXIgPSBuZXcgV0FHTkVSLkNvbXBvc2VyKHRoaXMucmVuZGVyZXIpO1xuXHRcdHRoaXMuY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuXHRcdGNvbnN0IGJsb29tV2lkdGggPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcbiAgICAgICAgY29uc3QgYmxvb21IZWlnaHQgPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcblxuXHRcdHRoaXMuYmxvb21QYXNzID0gbmV3IFdBR05FUi5NdWx0aVBhc3NCbG9vbVBhc3MoYmxvb21XaWR0aCwgYmxvb21IZWlnaHQpO1xuXHRcdHRoaXMuYmxvb21QYXNzLnBhcmFtcy5zdHJlbmd0aCA9IDUwLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5ibHVyQW1vdW50ID0gNS47XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5hcHBseVpvb21CbHVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLnpvb21CbHVyU3RyZW5ndGggPSAzLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy56b29tQmx1ckNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjUsIDAuNSApO1xuXG4gICAgICAgIHRoaXMucmdiUGFzcyA9IG5ldyBXQUdORVIuUkdCU3BsaXRQYXNzKCk7XG4gICAgICAgIHRoaXMucmdiUGFzcy5wYXJhbXMuZGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigyMCwgMjApO1xuXG4gICAgICAgIHRoaXMubm9pc2VQYXNzID0gbmV3IFdBR05FUi5Ob2lzZVBhc3MoKTtcbiAgICAgICAgdGhpcy5ub2lzZVBhc3MucGFyYW1zLmFtb3VudCA9IDAuMjU7XG4gICAgICAgIHRoaXMubm9pc2VQYXNzLnBhcmFtcy5zcGVlZCA9IDAuMjtcblxuICAgICAgICB0aGlzLnZpZ25ldHRlUGFzcyA9IG5ldyBXQUdORVIuVmlnbmV0dGVQYXNzKCk7XG4gICAgICAgIHRoaXMudmlnbmV0dGVQYXNzLnBhcmFtcy5hbW91bnQgPSAwLjc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZ4YWFQYXNzID0gbmV3IFdBR05FUi5GWEFBUGFzcygpO1xuXG5cdFx0dGhpcy53aWR0aCA9IHdpbmRvdy53aWR0aCA9IDYwO1xuXHRcdHRoaXMuaGVpZ2h0ID0gd2luZG93LmhlaWdodCA9IDYwO1xuXHRcdHRoaXMubGVuZ3RoID0gd2luZG93Lmxlbmd0aCA9IDEwMDtcblxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwMDAwMCwgMC44LCB0aGlzLmxlbmd0aCAqIC45OCApO1xuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMzAwMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAwO1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcblxuXG4gICAgICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5hZGRMaWdodHMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgXHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0YmluZExpc3RlbmVycyAoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uVUlIaWRkZW4pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5FTkQsIHRoaXMucmVzZXQpO1xuXHR9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHdpbmRvdy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuc291bmRFbmRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25VSUhpZGRlbiAoKSB7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Tb3VuZEVuZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZGF0YTtcblxuICAgICAgICBpZiAoIG5hbWUgPT09ICd4cCcgKSB7XG4gICAgICAgICAgICB3aW5kb3cuc291bmRFbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblx0YWRkQ29udHJvbHMgKCkge1xuXHRcdGNvbnN0IE9yYml0Q29udHJvbHMgPSByZXF1aXJlKCd0aHJlZS1vcmJpdC1jb250cm9scycpKFRIUkVFKTtcblx0XHQvLyB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHR9XG5cblx0YWRkTGlnaHRzICgpIHtcblx0XHR0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweEZGRkZGRik7XG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgXHRcdGNvbnN0IHBvaW50TGlnaHQzID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4ZmZmZmZmLCA3LjEsIDApO1xuICBcdFx0cG9pbnRMaWdodDMucG9zaXRpb24ueCA9IDBcbiAgXHRcdHBvaW50TGlnaHQzLnBvc2l0aW9uLnkgPSA0O1xuICBcdFx0cG9pbnRMaWdodDMucG9zaXRpb24ueiA9IDYwO1xuXG4gIFx0XHR0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0Myk7XG5cdH1cblxuXHRhZGRFbGVtZW50cyAoKSB7XG5cdFx0dGhpcy5kaXZpc2F0b3IgPSAyO1xuXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLmxlbmd0aCwgdGhpcy53aWR0aCwgMzIsIDMyKTtcbiAgICAgICAgdGhpcy5vdGhlckdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5sZW5ndGgsIDMyLCAzMik7XG5cblx0XHR0aGlzLmxlZnRSaWdodEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy5sZW5ndGgsIHRoaXMuaGVpZ2h0LCBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gdGhpcy5kaXZpc2F0b3IpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gdGhpcy5kaXZpc2F0b3IpICk7XG5cdFx0dGhpcy50b3BCb3R0b21HZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMubGVuZ3RoLCBNYXRoLmZsb29yKHRoaXMud2lkdGggLyB0aGlzLmRpdmlzYXRvcikgLCBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gdGhpcy5kaXZpc2F0b3IpKTtcblx0XHR0aGlzLmJhY2tncm91bmRHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBNYXRoLmZsb29yKHRoaXMud2lkdGggLyB0aGlzLmRpdmlzYXRvciAqIDIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gdGhpcy5kaXZpc2F0b3IgKiAyKSApO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbmV3IExlZnQodGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMubGVmdC5yb3RhdGlvbi55ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLmxlZnQucG9zaXRpb24ueCA9IC10aGlzLndpZHRoICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignbGVmdCcsIHRoaXMubGVmdClcblxuXHRcdHRoaXMucmlnaHQgPSBuZXcgUmlnaHQodGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMucmlnaHQucm90YXRpb24ueSA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5yaWdodC5wb3NpdGlvbi54ID0gdGhpcy53aWR0aCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ3JpZ2h0JywgdGhpcy5yaWdodClcblxuXHRcdHRoaXMuYm90dG9tID0gbmV3IEJvdHRvbSh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5ib3R0b20ucm90YXRpb24ueCA9IC1NYXRoLlBJICogMC41O1xuICAgICAgICB0aGlzLmJvdHRvbS5yb3RhdGlvbi56ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLmJvdHRvbS5wb3NpdGlvbi55ID0gLXRoaXMuaGVpZ2h0ICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignYm90dG9tJywgdGhpcy5ib3R0b20pXG5cblx0XHR0aGlzLnRvcCA9IG5ldyBUb3AodGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMudG9wLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgdGhpcy50b3Aucm90YXRpb24ueiA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy50b3AucG9zaXRpb24ueSA9IHRoaXMuaGVpZ2h0ICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcigndG9wJywgdGhpcy50b3ApO1xuXG5cdFx0Ly8gdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQodGhpcy5iYWNrZ3JvdW5kR2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHQvLyB0aGlzLmJhY2tncm91bmQucG9zaXRpb24ueiA9IC10aGlzLmxlbmd0aCAqIDAuNTtcbiAgLy8gICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2JhY2tncm91bmQnLCB0aGlzLmJhY2tncm91bmQpO1xuXG5cdFx0dGhpcy5mYWNlc0NvbnRhaW5lci5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udGFpbmVyLnNjYWxlLnggPSB0aGlzLmZhY2VzQ29udGFpbmVyLnNjYWxlLnkgPSAgMC4xO1xuXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5mYWNlc0NvbnRhaW5lcik7XG5cdH1cblxuICAgIHJvdGF0ZSAoKSB7XG4gICAgICAgIGNvbnN0IHNlbnMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxO1xuICAgICAgICBjb25zdCBkZWxheSA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICB9XG5cblx0dXBkYXRlICgpIHtcbiAgICAgICAgdGhpcy51aS51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIudXBkYXRlKCk7XG5cblx0XHR0aGlzLmxlZnQudXBkYXRlKCk7XG5cdFx0dGhpcy5yaWdodC51cGRhdGUoKTtcblx0XHR0aGlzLmJvdHRvbS51cGRhdGUoKTtcblx0XHR0aGlzLnRvcC51cGRhdGUoKTtcblxuXHRcdHRoaXMuY29tcG9zZXIucmVzZXQoKTtcblx0XHR0aGlzLmNvbXBvc2VyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLmJsb29tUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLnJnYlBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy5ub2lzZVBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy52aWduZXR0ZVBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnRvU2NyZWVuKHRoaXMuZnhhYVBhc3MpO1xuXG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG5cdFx0cmFmKHRoaXMudXBkYXRlKTtcblx0fVxuXG5cdHJlc2l6ZSAoKSB7XG5cdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG5cdH1cblxufVxuXG5uZXcgQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwiaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBSYW5nZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIG5hbWUsIGZyZXFzLCBkZWx0YSwgZXZlbnQgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZnJlcXMgPSBmcmVxcztcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuXG4gICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggbGV2ZWwgKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gRGF0ZS5ub3coKSAtIHRoaXMudGltZTtcblxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG5cbiAgICAgICAgaWYgKCBkZWx0YSA+IHRoaXMuZGVsdGEgJiYgdGhpcy5sZXZlbCA+IDAuNSApIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdCh0aGlzLmV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1JhbmdlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwIChuLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgcmV0dXJuICgobiAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKSAqIChzdG9wMiAtIHN0YXJ0MikgKyBzdGFydDI7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvbWFwLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tRnJvbUFycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W35+KE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3JhbmRvbUZyb21BcnJheS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF1ZGlvL21pZGlcIjogW1xuXHRcdFwibWlkXCIsXG5cdFx0XCJtaWRpXCIsXG5cdFx0XCJrYXJcIixcblx0XHRcInJtaVwiXG5cdF0sXG5cdFwiYXVkaW8vbXA0XCI6IFtcblx0XHRcIm1wNGFcIixcblx0XHRcIm00YVwiXG5cdF0sXG5cdFwiYXVkaW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGdhXCIsXG5cdFx0XCJtcDJcIixcblx0XHRcIm1wMmFcIixcblx0XHRcIm1wM1wiLFxuXHRcdFwibTJhXCIsXG5cdFx0XCJtM2FcIlxuXHRdLFxuXHRcImF1ZGlvL29nZ1wiOiBbXG5cdFx0XCJvZ2FcIixcblx0XHRcIm9nZ1wiLFxuXHRcdFwic3B4XCJcblx0XSxcblx0XCJhdWRpby93ZWJtXCI6IFtcblx0XHRcIndlYmFcIlxuXHRdLFxuXHRcImF1ZGlvL3gtbWF0cm9za2FcIjogW1xuXHRcdFwibWthXCJcblx0XSxcblx0XCJhdWRpby94LW1wZWd1cmxcIjogW1xuXHRcdFwibTN1XCJcblx0XSxcblx0XCJhdWRpby93YXZcIjogW1xuXHRcdFwid2F2XCJcblx0XSxcblx0XCJ2aWRlby8zZ3BwXCI6IFtcblx0XHRcIjNncFwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcDJcIjogW1xuXHRcdFwiM2cyXCJcblx0XSxcblx0XCJ2aWRlby9tcDRcIjogW1xuXHRcdFwibXA0XCIsXG5cdFx0XCJtcDR2XCIsXG5cdFx0XCJtcGc0XCJcblx0XSxcblx0XCJ2aWRlby9tcGVnXCI6IFtcblx0XHRcIm1wZWdcIixcblx0XHRcIm1wZ1wiLFxuXHRcdFwibXBlXCIsXG5cdFx0XCJtMXZcIixcblx0XHRcIm0ydlwiXG5cdF0sXG5cdFwidmlkZW8vb2dnXCI6IFtcblx0XHRcIm9ndlwiXG5cdF0sXG5cdFwidmlkZW8vcXVpY2t0aW1lXCI6IFtcblx0XHRcInF0XCIsXG5cdFx0XCJtb3ZcIlxuXHRdLFxuXHRcInZpZGVvL3dlYm1cIjogW1xuXHRcdFwid2VibVwiXG5cdF0sXG5cdFwidmlkZW8veC1mNHZcIjogW1xuXHRcdFwiZjR2XCJcblx0XSxcblx0XCJ2aWRlby94LWZsaVwiOiBbXG5cdFx0XCJmbGlcIlxuXHRdLFxuXHRcInZpZGVvL3gtZmx2XCI6IFtcblx0XHRcImZsdlwiXG5cdF0sXG5cdFwidmlkZW8veC1tNHZcIjogW1xuXHRcdFwibTR2XCJcblx0XSxcblx0XCJ2aWRlby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rdlwiLFxuXHRcdFwibWszZFwiLFxuXHRcdFwibWtzXCJcblx0XVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvbWltZS10eXBlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYW1wXG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gbWluIDwgbWF4XG4gICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgIDogKHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFtcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpcy1mdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaFxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oaXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzXG4gICAgfVxuICAgIFxuICAgIGlmICh0b1N0cmluZy5jYWxsKGxpc3QpID09PSAnW29iamVjdCBBcnJheV0nKVxuICAgICAgICBmb3JFYWNoQXJyYXkobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG4gICAgZWxzZSBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKVxuICAgICAgICBmb3JFYWNoU3RyaW5nKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2VcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbn1cblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoU3RyaW5nKHN0cmluZywgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vIG5vIHN1Y2ggdGhpbmcgYXMgYSBzcGFyc2Ugc3RyaW5nLlxuICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHN0cmluZy5jaGFyQXQoaSksIGksIHN0cmluZylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hPYmplY3Qob2JqZWN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgaykpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqZWN0W2tdLCBrLCBvYmplY3QpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9yLWVhY2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsb2JhbC93aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gaXNOb2RlXG5cbmZ1bmN0aW9uIGlzTm9kZSAodmFsKSB7XG4gIHJldHVybiAoIXZhbCB8fCB0eXBlb2YgdmFsICE9PSAnb2JqZWN0JylcbiAgICA/IGZhbHNlXG4gICAgOiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5Ob2RlID09PSAnb2JqZWN0JylcbiAgICAgID8gKHZhbCBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlKVxuICAgICAgOiAodHlwZW9mIHZhbC5ub2RlVHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICh0eXBlb2YgdmFsLm5vZGVOYW1lID09PSAnc3RyaW5nJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kb20vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbiAgLCBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvckVhY2goXG4gICAgICB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgICAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgICAgICB9XG4gICAgICB9XG4gIClcblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPVxuICBnbG9iYWwucGVyZm9ybWFuY2UgJiZcbiAgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdyA/IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KClcbiAgfSA6IERhdGUubm93IHx8IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gK25ldyBEYXRlXG4gIH1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaWdodC1ub3cvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRG9tID0gcmVxdWlyZSgnaXMtZG9tJylcbnZhciBsb29rdXAgPSByZXF1aXJlKCdicm93c2VyLW1lZGlhLW1pbWUtdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzLnZpZGVvID0gc2ltcGxlTWVkaWFFbGVtZW50LmJpbmQobnVsbCwgJ3ZpZGVvJylcbm1vZHVsZS5leHBvcnRzLmF1ZGlvID0gc2ltcGxlTWVkaWFFbGVtZW50LmJpbmQobnVsbCwgJ2F1ZGlvJylcblxuZnVuY3Rpb24gc2ltcGxlTWVkaWFFbGVtZW50IChlbGVtZW50TmFtZSwgc291cmNlcywgb3B0KSB7XG4gIG9wdCA9IG9wdCB8fCB7fVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkge1xuICAgIHNvdXJjZXMgPSBbIHNvdXJjZXMgXVxuICB9XG5cbiAgdmFyIG1lZGlhID0gb3B0LmVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSlcblxuICBpZiAob3B0Lmxvb3ApIG1lZGlhLnNldEF0dHJpYnV0ZSgnbG9vcCcsICdsb29wJylcbiAgaWYgKG9wdC5tdXRlZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdtdXRlZCcsICdtdXRlZCcpXG4gIGlmIChvcHQuYXV0b3BsYXkpIG1lZGlhLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnYXV0b3BsYXknKVxuICBpZiAob3B0LmNvbnRyb2xzKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJylcbiAgaWYgKG9wdC5jcm9zc09yaWdpbikgbWVkaWEuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsIG9wdC5jcm9zc09yaWdpbilcbiAgaWYgKG9wdC5wcmVsb2FkKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCBvcHQucHJlbG9hZClcbiAgaWYgKG9wdC5wb3N0ZXIpIG1lZGlhLnNldEF0dHJpYnV0ZSgncG9zdGVyJywgb3B0LnBvc3RlcilcbiAgaWYgKHR5cGVvZiBvcHQudm9sdW1lICE9PSAndW5kZWZpbmVkJykgbWVkaWEuc2V0QXR0cmlidXRlKCd2b2x1bWUnLCBvcHQudm9sdW1lKVxuXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIG1lZGlhLmFwcGVuZENoaWxkKGNyZWF0ZVNvdXJjZUVsZW1lbnQoc291cmNlKSlcbiAgfSlcblxuICByZXR1cm4gbWVkaWFcbn1cblxuZnVuY3Rpb24gY3JlYXRlU291cmNlRWxlbWVudCAoZGF0YSkge1xuICBpZiAoaXNEb20oZGF0YSkpIHJldHVybiBkYXRhXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhID0geyBzcmM6IGRhdGEgfVxuICAgIGlmIChkYXRhLnNyYykge1xuICAgICAgdmFyIGV4dCA9IGV4dGVuc2lvbihkYXRhLnNyYylcbiAgICAgIGlmIChleHQpIGRhdGEudHlwZSA9IGxvb2t1cChleHQpXG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpXG4gIGlmIChkYXRhLnNyYykgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YS5zcmMpXG4gIGlmIChkYXRhLnR5cGUpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpXG4gIHJldHVybiBzb3VyY2Vcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uIChkYXRhKSB7XG4gIHZhciBleHRJZHggPSBkYXRhLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGV4dElkeCA8PSAwIHx8IGV4dElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoZXh0SWR4ICsgMSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaW1wbGUtbWVkaWEtZWxlbWVudC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RyaW0vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJBdWRpb0FuYWx5c2VyXG5cbmZ1bmN0aW9uIFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgV2ViQXVkaW9BbmFseXNlcikpIHJldHVybiBuZXcgV2ViQXVkaW9BbmFseXNlcihhdWRpbywgY3R4LCBvcHRzKVxuICBpZiAoIShjdHggaW5zdGFuY2VvZiBBdWRpb0NvbnRleHQpKSAob3B0cyA9IGN0eCksIChjdHggPSBudWxsKVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIHRoaXMuY3R4ID0gY3R4ID0gY3R4IHx8IG5ldyBBdWRpb0NvbnRleHRcblxuICBpZiAoIShhdWRpbyBpbnN0YW5jZW9mIEF1ZGlvTm9kZSkpIHtcbiAgICBhdWRpbyA9IChhdWRpbyBpbnN0YW5jZW9mIEF1ZGlvIHx8IGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudClcbiAgICAgID8gY3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgICAgIDogY3R4LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKGF1ZGlvKVxuICB9XG5cbiAgdGhpcy5hbmFseXNlciA9IGN0eC5jcmVhdGVBbmFseXNlcigpXG4gIHRoaXMuc3RlcmVvICAgPSAhIW9wdHMuc3RlcmVvXG4gIHRoaXMuYXVkaWJsZSAgPSBvcHRzLmF1ZGlibGUgIT09IGZhbHNlXG4gIHRoaXMud2F2ZWRhdGEgPSBudWxsXG4gIHRoaXMuZnJlcWRhdGEgPSBudWxsXG4gIHRoaXMuc3BsaXR0ZXIgPSBudWxsXG4gIHRoaXMubWVyZ2VyICAgPSBudWxsXG4gIHRoaXMuc291cmNlICAgPSBhdWRpb1xuXG4gIGlmICghdGhpcy5zdGVyZW8pIHtcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuc291cmNlXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmFuYWx5c2VyKVxuICAgIGlmICh0aGlzLmF1ZGlibGUpXG4gICAgICB0aGlzLmFuYWx5c2VyLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuYW5hbHlzZXIgPSBbdGhpcy5hbmFseXNlcl1cbiAgICB0aGlzLmFuYWx5c2VyLnB1c2goY3R4LmNyZWF0ZUFuYWx5c2VyKCkpXG5cbiAgICB0aGlzLnNwbGl0dGVyID0gY3R4LmNyZWF0ZUNoYW5uZWxTcGxpdHRlcigyKVxuICAgIHRoaXMubWVyZ2VyICAgPSBjdHguY3JlYXRlQ2hhbm5lbE1lcmdlcigyKVxuICAgIHRoaXMub3V0cHV0ICAgPSB0aGlzLm1lcmdlclxuXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLnNwbGl0dGVyKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMuc3BsaXR0ZXIuY29ubmVjdCh0aGlzLmFuYWx5c2VyW2ldLCBpLCAwKVxuICAgICAgdGhpcy5hbmFseXNlcltpXS5jb25uZWN0KHRoaXMubWVyZ2VyLCAwLCBpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1ZGlibGUpXG4gICAgICB0aGlzLm1lcmdlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfVxufVxuXG5XZWJBdWRpb0FuYWx5c2VyLnByb3RvdHlwZS53YXZlZm9ybSA9IGZ1bmN0aW9uKG91dHB1dCwgY2hhbm5lbCkge1xuICBpZiAoIW91dHB1dCkgb3V0cHV0ID0gdGhpcy53YXZlZGF0YSB8fCAoXG4gICAgdGhpcy53YXZlZGF0YSA9IG5ldyBVaW50OEFycmF5KCh0aGlzLmFuYWx5c2VyWzBdIHx8IHRoaXMuYW5hbHlzZXIpLmZyZXF1ZW5jeUJpbkNvdW50KVxuICApXG5cbiAgdmFyIGFuYWx5c2VyID0gdGhpcy5zdGVyZW9cbiAgICA/IHRoaXMuYW5hbHlzZXJbY2hhbm5lbCB8fCAwXVxuICAgIDogdGhpcy5hbmFseXNlclxuXG4gIGFuYWx5c2VyLmdldEJ5dGVUaW1lRG9tYWluRGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5XZWJBdWRpb0FuYWx5c2VyLnByb3RvdHlwZS5mcmVxdWVuY2llcyA9IGZ1bmN0aW9uKG91dHB1dCwgY2hhbm5lbCkge1xuICBpZiAoIW91dHB1dCkgb3V0cHV0ID0gdGhpcy5mcmVxZGF0YSB8fCAoXG4gICAgdGhpcy5mcmVxZGF0YSA9IG5ldyBVaW50OEFycmF5KCh0aGlzLmFuYWx5c2VyWzBdIHx8IHRoaXMuYW5hbHlzZXIpLmZyZXF1ZW5jeUJpbkNvdW50KVxuICApXG5cbiAgdmFyIGFuYWx5c2VyID0gdGhpcy5zdGVyZW9cbiAgICA/IHRoaXMuYW5hbHlzZXJbY2hhbm5lbCB8fCAwXVxuICAgIDogdGhpcy5hbmFseXNlclxuXG4gIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKG91dHB1dClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLWFuYWx5c2VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYnVmZmVyID0gcmVxdWlyZSgnLi9saWIvYnVmZmVyLXNvdXJjZScpXG52YXIgbWVkaWEgPSByZXF1aXJlKCcuL2xpYi9tZWRpYS1zb3VyY2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdlYkF1ZGlvUGxheWVyXG5mdW5jdGlvbiB3ZWJBdWRpb1BsYXllciAoc3JjLCBvcHQpIHtcbiAgaWYgKCFzcmMpIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3BlY2lmeSBhIHNyYyBwYXJhbWV0ZXInKVxuICBvcHQgPSBvcHQgfHwge31cbiAgaWYgKG9wdC5idWZmZXIpIHJldHVybiBidWZmZXIoc3JjLCBvcHQpXG4gIGVsc2UgcmV0dXJuIG1lZGlhKHNyYywgb3B0KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjYW5QbGF5U3JjID0gcmVxdWlyZSgnLi9jYW4tcGxheS1zcmMnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgeGhyQXVkaW8gPSByZXF1aXJlKCcuL3hoci1hdWRpbycpXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG52YXIgcmlnaHROb3cgPSByZXF1aXJlKCdyaWdodC1ub3cnKVxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJ1ZmZlclNvdXJjZVxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG5cbiAgLy8gYSBwYXNzLXRocm91Z2ggbm9kZSBzbyB1c2VyIGp1c3QgbmVlZHMgdG9cbiAgLy8gY29ubmVjdCgpIG9uY2VcbiAgdmFyIGJ1ZmZlck5vZGUsIGJ1ZmZlciwgZHVyYXRpb25cbiAgdmFyIG5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG4gIHZhciBhdWRpb1N0YXJ0VGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvUGF1c2VUaW1lID0gbnVsbFxuICB2YXIgYXVkaW9DdXJyZW50VGltZSA9IDBcbiAgdmFyIHBsYXlpbmcgPSBmYWxzZVxuICB2YXIgbG9vcCA9IG9wdC5sb29wXG5cbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gdHJ1ZVxuXG4gICAgaWYgKG9wdC5hdXRvUmVzdW1lICE9PSBmYWxzZSkgcmVzdW1lKGVtaXR0ZXIuY29udGV4dClcbiAgICBkaXNwb3NlQnVmZmVyKClcbiAgICBidWZmZXJOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gICAgYnVmZmVyTm9kZS5jb25uZWN0KGVtaXR0ZXIubm9kZSlcbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBlbmRlZFxuICAgIGlmIChidWZmZXIpIHtcbiAgICAgIC8vIE1pZ2h0IGJlIG51bGwgdW5kZWZpbmVkIGlmIHdlIGFyZSBzdGlsbCBsb2FkaW5nXG4gICAgICBidWZmZXJOb2RlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgIH1cbiAgICBpZiAobG9vcCkge1xuICAgICAgYnVmZmVyTm9kZS5sb29wID0gdHJ1ZVxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcFN0YXJ0ID09PSAnbnVtYmVyJykgYnVmZmVyTm9kZS5sb29wU3RhcnQgPSBvcHQubG9vcFN0YXJ0XG4gICAgICBpZiAodHlwZW9mIG9wdC5sb29wRW5kID09PSAnbnVtYmVyJykgYnVmZmVyTm9kZS5sb29wRW5kID0gb3B0Lmxvb3BFbmRcbiAgICB9XG5cbiAgICBpZiAoZHVyYXRpb24gJiYgYXVkaW9DdXJyZW50VGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAvLyBmb3Igd2hlbiBpdCBsb29wcy4uLlxuICAgICAgYXVkaW9DdXJyZW50VGltZSA9IGF1ZGlvQ3VycmVudFRpbWUgJSBkdXJhdGlvblxuICAgIH1cbiAgICB2YXIgbmV4dFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lXG5cbiAgICBidWZmZXJOb2RlLnN0YXJ0KDAsIG5leHRUaW1lKVxuICAgIGF1ZGlvU3RhcnRUaW1lID0gcmlnaHROb3coKVxuICB9XG5cbiAgZW1pdHRlci5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBsYXlpbmcpIHJldHVyblxuICAgIHBsYXlpbmcgPSBmYWxzZVxuICAgIC8vIERvbid0IGxldCB0aGUgXCJlbmRcIiBldmVudFxuICAgIC8vIGdldCB0cmlnZ2VyZWQgb24gbWFudWFsIHBhdXNlLlxuICAgIGJ1ZmZlck5vZGUub25lbmRlZCA9IG51bGxcbiAgICBidWZmZXJOb2RlLnN0b3AoMClcbiAgICBhdWRpb1BhdXNlVGltZSA9IHJpZ2h0Tm93KClcbiAgICBhdWRpb0N1cnJlbnRUaW1lICs9IChhdWRpb1BhdXNlVGltZSAtIGF1ZGlvU3RhcnRUaW1lKSAvIDEwMDBcbiAgfVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLnBhdXNlKClcbiAgICBlbmRlZCgpXG4gIH1cblxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlpbmc6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGxheWluZ1xuICAgICAgfVxuICAgIH0sXG4gICAgYnVmZmVyOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclxuICAgICAgfVxuICAgIH0sXG4gICAgdm9sdW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2Fpbi52YWx1ZVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBzZXQgaW5pdGlhbCB2b2x1bWVcbiAgaWYgKHR5cGVvZiBvcHQudm9sdW1lID09PSAnbnVtYmVyJykge1xuICAgIGVtaXR0ZXIudm9sdW1lID0gb3B0LnZvbHVtZVxuICB9XG5cbiAgLy8gZmlsdGVyIGRvd24gdG8gYSBsaXN0IG9mIHBsYXlhYmxlIHNvdXJjZXNcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgdmFyIHNvdXJjZSA9IHNvdXJjZXMuZmlsdGVyKGNhblBsYXlTcmMpWzBdXG4gICAgLy8gU3VwcG9ydCB0aGUgc2FtZSBzb3VyY2UgdHlwZXMgYXMgaW5cbiAgICAvLyBNZWRpYUVsZW1lbnQgbW9kZS4uLlxuICAgIGlmICh0eXBlb2Ygc291cmNlLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc291cmNlID0gc291cmNlLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2Uuc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgc291cmNlID0gc291cmNlLnNyY1xuICAgIH1cbiAgICAvLyBXZSBoYXZlIGF0IGxlYXN0IG9uZSBwbGF5YWJsZSBzb3VyY2UuXG4gICAgLy8gRm9yIG5vdyBqdXN0IHBsYXkgdGhlIGZpcnN0LFxuICAgIC8vIGlkZWFsbHkgdGhpcyBtb2R1bGUgY291bGQgYXR0ZW1wdCBlYWNoIG9uZS5cbiAgICBzdGFydExvYWQoc291cmNlKVxuICB9IGVsc2Uge1xuICAgIC8vIG5vIHNvdXJjZXMgY2FuIGJlIHBsYXllZC4uLlxuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIGNhblBsYXlTcmMuY3JlYXRlRXJyb3Ioc291cmNlcykpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoc3JjKSB7XG4gICAgeGhyQXVkaW8oYXVkaW9Db250ZXh0LCBzcmMsIGZ1bmN0aW9uIGF1ZGlvRGVjb2RlZCAoZXJyLCBkZWNvZGVkKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gZW1pdHRlci5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIGJ1ZmZlciA9IGRlY29kZWQgLy8gc3RvcmUgZm9yIGxhdGVyIHVzZVxuICAgICAgaWYgKGJ1ZmZlck5vZGUpIHtcbiAgICAgICAgLy8gaWYgcGxheSgpIHdhcyBjYWxsZWQgZWFybHlcbiAgICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIH1cbiAgICAgIGR1cmF0aW9uID0gYnVmZmVyLmR1cmF0aW9uXG4gICAgICBub2RlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9LCBmdW5jdGlvbiBhdWRpb1Byb2dyZXNzIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ3Byb2dyZXNzJywgYW1vdW50LCB0b3RhbClcbiAgICB9LCBmdW5jdGlvbiBhdWRpb0RlY29kaW5nICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZGVjb2RpbmcnKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBlbmRlZCAoKSB7XG4gICAgZW1pdHRlci5lbWl0KCdlbmQnKVxuICAgIHBsYXlpbmcgPSBmYWxzZVxuICAgIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwb3NlQnVmZmVyICgpIHtcbiAgICBpZiAoYnVmZmVyTm9kZSkgYnVmZmVyTm9kZS5kaXNjb25uZWN0KClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2J1ZmZlci1zb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gYWRkT25jZVxuZnVuY3Rpb24gYWRkT25jZSAoZWxlbWVudCwgZXZlbnQsIGZuKSB7XG4gIGZ1bmN0aW9uIHRtcCAoZXYpIHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRtcCwgZmFsc2UpXG4gICAgZm4oZXYsIGVsZW1lbnQpXG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9ldmVudC1hZGQtb25jZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIGNyZWF0ZUF1ZGlvID0gcmVxdWlyZSgnc2ltcGxlLW1lZGlhLWVsZW1lbnQnKS5hdWRpb1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG52YXIgcmVzdW1lID0gcmVxdWlyZSgnLi9yZXN1bWUtY29udGV4dCcpXG52YXIgY3JlYXRlQXVkaW9Db250ZXh0ID0gcmVxdWlyZSgnLi9hdWRpby1jb250ZXh0JylcbnZhciBjYW5QbGF5U3JjID0gcmVxdWlyZSgnLi9jYW4tcGxheS1zcmMnKVxudmFyIGFkZE9uY2UgPSByZXF1aXJlKCcuL2V2ZW50LWFkZC1vbmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVNZWRpYVNvdXJjZVxuZnVuY3Rpb24gY3JlYXRlTWVkaWFTb3VyY2UgKHNyYywgb3B0KSB7XG4gIG9wdCA9IGFzc2lnbih7fSwgb3B0KVxuICB2YXIgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8vIERlZmF1bHQgdG8gQXVkaW8gaW5zdGVhZCBvZiBIVE1MQXVkaW9FbGVtZW50XG4gIC8vIFRoZXJlIGlzIG5vdCBtdWNoIGRpZmZlcmVuY2UgZXhjZXB0IGluIHRoZSBmb2xsb3dpbmc6XG4gIC8vICAgIHggaW5zdGFuY2VvZiBBdWRpb1xuICAvLyAgICB4IGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBBbmQgaW4gbXkgZXhwZXJpZW5jZSBBdWRpbyBoYXMgYmV0dGVyIHN1cHBvcnQgb24gdmFyaW91c1xuICAvLyBwbGF0Zm9ybXMgbGlrZSBDb2Nvb25KUy5cbiAgLy8gUGxlYXNlIG9wZW4gYW4gaXNzdWUgaWYgdGhlcmUgaXMgYSBjb25jZXJuIHdpdGggdGhpcy5cbiAgaWYgKCFvcHQuZWxlbWVudCkgb3B0LmVsZW1lbnQgPSBuZXcgd2luZG93LkF1ZGlvKClcblxuICB2YXIgZGVzaXJlZFZvbHVtZSA9IG9wdC52b2x1bWVcbiAgZGVsZXRlIG9wdC52b2x1bWUgLy8gbWFrZSBzdXJlIDxhdWRpbz4gdGFnIHJlY2VpdmVzIGZ1bGwgdm9sdW1lXG4gIHZhciBhdWRpbyA9IGNyZWF0ZUF1ZGlvKHNyYywgb3B0KVxuICB2YXIgYXVkaW9Db250ZXh0ID0gb3B0LmNvbnRleHQgfHwgY3JlYXRlQXVkaW9Db250ZXh0KClcbiAgdmFyIG5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG4gIHZhciBtZWRpYU5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKVxuICBtZWRpYU5vZGUuY29ubmVjdChub2RlKVxuXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgfSlcbiAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBMQVlcIilcbiAgfSlcblxuICB2YXIgbG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICB2YXIgbG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gIHZhciBoYXNMb29wU3RhcnQgPSB0eXBlb2YgbG9vcFN0YXJ0ID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wU3RhcnQpXG4gIHZhciBoYXNMb29wRW5kID0gdHlwZW9mIGxvb3BFbmQgPT09ICdudW1iZXInICYmIGlzRmluaXRlKGxvb3BFbmQpXG4gIHZhciBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gIGlmIChoYXNMb29wU3RhcnQgfHwgaGFzTG9vcEVuZCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgICAgIC8vIGF1ZGlvIGhhc24ndCBiZWVuIGxvYWRlZCB5ZXQuLi5cbiAgICAgIGlmICh0eXBlb2YgYXVkaW8uZHVyYXRpb24gIT09ICdudW1iZXInKSByZXR1cm5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGF1ZGlvLmN1cnJlbnRUaW1lXG5cbiAgICAgIC8vIHdoZXJlIHRvIGVuZCB0aGUgYnVmZmVyXG4gICAgICB2YXIgZW5kVGltZSA9IGhhc0xvb3BFbmQgPyBNYXRoLm1pbihhdWRpby5kdXJhdGlvbiwgbG9vcEVuZCkgOiBhdWRpby5kdXJhdGlvblxuXG4gICAgICBpZiAoY3VycmVudFRpbWUgPiAobG9vcFN0YXJ0IHx8IDApKSB7XG4gICAgICAgIGlzTG9vcFJlYWR5ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBqdW1wIGFoZWFkIHRvIGxvb3Agc3RhcnQgcG9pbnRcbiAgICAgIGlmIChoYXNMb29wU3RhcnQgJiYgaXNMb29wUmVhZHkgJiYgY3VycmVudFRpbWUgPCBsb29wU3RhcnQpIHtcbiAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSBsb29wU3RhcnRcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UndmUgaGl0IHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICAgICAgaWYgKGN1cnJlbnRUaW1lID49IGVuZFRpbWUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gbG9vcCBlbmQgcG9pbnQsIGxldCBuYXRpdmUgbG9vcGluZyB0YWtlIG92ZXJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIGxvb3AgZW5kIHBvaW50LCBqdW1wIGJhY2sgdG8gc3RhcnQgcG9pbnQgb3IgemVyb1xuICAgICAgICBpZiAoaGFzTG9vcEVuZCkge1xuICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gaGFzTG9vcFN0YXJ0ID8gbG9vcFN0YXJ0IDogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcbiAgICB9KTtcbiAgfVxuXG4gIGVtaXR0ZXIuZWxlbWVudCA9IGF1ZGlvXG4gIGVtaXR0ZXIuY29udGV4dCA9IGF1ZGlvQ29udGV4dFxuICBlbWl0dGVyLm5vZGUgPSBub2RlXG4gIGVtaXR0ZXIucGF1c2UgPSBhdWRpby5wYXVzZS5iaW5kKGF1ZGlvKVxuICBlbWl0dGVyLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wdC5hdXRvUmVzdW1lICE9PSBmYWxzZSkgcmVzdW1lKGVtaXR0ZXIuY29udGV4dClcbiAgICByZXR1cm4gYXVkaW8ucGxheSgpXG4gIH1cblxuICAvLyBUaGlzIGV4aXN0cyBjdXJyZW50bHkgZm9yIHBhcml0eSB3aXRoIEJ1ZmZlciBzb3VyY2VcbiAgLy8gT3BlbiB0byBzdWdnZXN0aW9ucyBmb3Igd2hhdCB0aGlzIHNob3VsZCBkaXNwb3NlLi4uXG4gIGVtaXR0ZXIuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHt9XG5cbiAgZW1pdHRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3YXNQbGF5aW5nID0gZW1pdHRlci5wbGF5aW5nXG4gICAgYXVkaW8ucGF1c2UoKVxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMFxuICAgIGlzTG9vcFJlYWR5ID0gZmFsc2VcbiAgICBpZiAod2FzUGxheWluZykge1xuICAgICAgZW1pdHRlci5lbWl0KCdlbmQnKVxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGVtaXR0ZXIsIHtcbiAgICBkdXJhdGlvbjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhdWRpby5kdXJhdGlvblxuICAgICAgfVxuICAgIH0sXG4gICAgY3VycmVudFRpbWU6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uY3VycmVudFRpbWVcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlpbmc6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIWF1ZGlvLnBhdXNlZFxuICAgICAgfVxuICAgIH0sXG4gICAgdm9sdW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2Fpbi52YWx1ZVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBTZXQgaW5pdGlhbCB2b2x1bWVcbiAgaWYgKHR5cGVvZiBkZXNpcmVkVm9sdW1lID09PSAnbnVtYmVyJykge1xuICAgIGVtaXR0ZXIudm9sdW1lID0gZGVzaXJlZFZvbHVtZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNvdXJjZXMgYXJlIHVucGxheWFibGUsXG4gIC8vIGlmIHNvIHdlIGVtaXQgYW4gZXJyb3Igc2luY2UgdGhlIGJyb3dzZXJcbiAgLy8gbWlnaHQgbm90LlxuICB2YXIgc291cmNlcyA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFsgc3JjIF1cbiAgc291cmNlcyA9IHNvdXJjZXMuZmlsdGVyKEJvb2xlYW4pXG4gIHZhciBwbGF5YWJsZSA9IHNvdXJjZXMuc29tZShjYW5QbGF5U3JjKVxuICBpZiAocGxheWFibGUpIHtcbiAgICAvLyBBdCBsZWFzdCBvbmUgc291cmNlIGlzIHByb2JhYmx5L21heWJlIHBsYXlhYmxlXG4gICAgc3RhcnRMb2FkKClcbiAgfSBlbHNlIHtcbiAgICAvLyBlbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyB1c2VyIGNhbiBjYXRjaCBpdFxuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIGNhblBsYXlTcmMuY3JlYXRlRXJyb3Ioc291cmNlcykpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG5cbiAgZnVuY3Rpb24gc3RhcnRMb2FkICgpIHtcbiAgICAvLyBUaGUgZmlsZSBlcnJvcnMgKGxpa2UgZGVjb2RpbmcgLyA0MDRzKSBhcHBlYXIgb24gPHNvdXJjZT5cbiAgICB2YXIgc3JjRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhdWRpby5jaGlsZHJlbilcbiAgICB2YXIgcmVtYWluaW5nU3JjRXJyb3JzID0gc3JjRWxlbWVudHMubGVuZ3RoXG4gICAgdmFyIGhhc0Vycm9yZWQgPSBmYWxzZVxuICAgIHZhciBzb3VyY2VFcnJvciA9IGZ1bmN0aW9uIChlcnIsIGVsKSB7XG4gICAgICBpZiAoaGFzRXJyb3JlZCkgcmV0dXJuXG4gICAgICByZW1haW5pbmdTcmNFcnJvcnMtLVxuICAgICAgY29uc29sZS53YXJuKCdFcnJvciBsb2FkaW5nIHNvdXJjZTogJyArIGVsLmdldEF0dHJpYnV0ZSgnc3JjJykpXG4gICAgICBpZiAocmVtYWluaW5nU3JjRXJyb3JzIDw9IDApIHtcbiAgICAgICAgaGFzRXJyb3JlZCA9IHRydWVcbiAgICAgICAgc3JjRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNvdXJjZUVycm9yLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignQ291bGQgbm90IHBsYXkgYW55IG9mIHRoZSBzdXBwbGllZCBzb3VyY2VzJykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2xvYWQnKVxuICAgIH1cblxuICAgIGlmIChhdWRpby5yZWFkeVN0YXRlID49IGF1ZGlvLkhBVkVfRU5PVUdIX0RBVEEpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZG9uZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkT25jZShhdWRpbywgJ2NhbnBsYXknLCBkb25lKVxuICAgICAgYWRkT25jZShhdWRpbywgJ2Vycm9yJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdChuZXcgRXJyb3IoJ1Vua25vd24gZXJyb3Igd2hpbGUgbG9hZGluZyA8YXVkaW8+JykpXG4gICAgICB9KVxuICAgICAgc3JjRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgYWRkT25jZShlbCwgJ2Vycm9yJywgc291cmNlRXJyb3IpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9uIG1vc3QgYnJvd3NlcnMgdGhlIGxvYWRpbmcgYmVnaW5zXG4gICAgLy8gaW1tZWRpYXRlbHkuIEhvd2V2ZXIsIG9uIGlPUyA5LjIgU2FmYXJpLFxuICAgIC8vIHlvdSBuZWVkIHRvIGNhbGwgbG9hZCgpIGZvciBldmVudHNcbiAgICAvLyB0byBiZSB0cmlnZ2VyZWQuXG4gICAgYXVkaW8ubG9hZCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9tZWRpYS1zb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB4aHIgPSByZXF1aXJlKCd4aHInKVxudmFyIHhoclByb2dyZXNzID0gcmVxdWlyZSgneGhyLXByb2dyZXNzJylcblxubW9kdWxlLmV4cG9ydHMgPSB4aHJBdWRpb1xuZnVuY3Rpb24geGhyQXVkaW8gKGF1ZGlvQ29udGV4dCwgc3JjLCBjYiwgcHJvZ3Jlc3MsIGRlY29kaW5nKSB7XG4gIHZhciB4aHJPYmplY3QgPSB4aHIoe1xuICAgIHVyaTogc3JjLFxuICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ1xuICB9LCBmdW5jdGlvbiAoZXJyLCByZXNwLCBhcnJheUJ1Zikge1xuICAgIGlmICghL14yLy50ZXN0KHJlc3Auc3RhdHVzQ29kZSkpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignc3RhdHVzIGNvZGUgJyArIHJlc3Auc3RhdHVzQ29kZSArICcgcmVxdWVzdGluZyAnICsgc3JjKVxuICAgIH1cbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIGRlY29kZShhcnJheUJ1ZilcbiAgfSlcblxuICB4aHJQcm9ncmVzcyh4aHJPYmplY3QpXG4gICAgLm9uKCdkYXRhJywgZnVuY3Rpb24gKGFtb3VudCwgdG90YWwpIHtcbiAgICAgIHByb2dyZXNzKGFtb3VudCwgdG90YWwpXG4gICAgfSlcblxuICBmdW5jdGlvbiBkZWNvZGUgKGFycmF5QnVmKSB7XG4gICAgZGVjb2RpbmcoKVxuICAgIGF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWYsIGZ1bmN0aW9uIChkZWNvZGVkKSB7XG4gICAgICBjYihudWxsLCBkZWNvZGVkKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0Vycm9yIGRlY29kaW5nIGF1ZGlvIGRhdGEnKVxuICAgICAgZXJyLnR5cGUgPSAnREVDT0RFX0FVRElPX0RBVEEnXG4gICAgICBjYihlcnIpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3hoci1hdWRpby5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG5cXG52YXJ5aW5nIHZlYzMgdlZpZXdQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBmbG9hdCB1VGltZTtcXG5cXG4jaWZuZGVmIEZMQVRfU0hBREVEXFxuXFxuICAgIHZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcblxcbiNlbmRpZlxcblxcbiNpbmNsdWRlIDxjb21tb24+XFxuI2luY2x1ZGUgPHV2X3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDx1djJfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGRpc3BsYWNlbWVudG1hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8ZW52bWFwX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Zm9nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxtb3JwaHRhcmdldF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8c2tpbm5pbmdfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHNoYWRvd21hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8bG9nZGVwdGhidWZfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc19wYXJzX3ZlcnRleD5cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgICNpbmNsdWRlIDx1dl92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDx1djJfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8Y29sb3JfdmVydGV4PlxcblxcbiAgICAjaW5jbHVkZSA8YmVnaW5ub3JtYWxfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8bW9ycGhub3JtYWxfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8c2tpbmJhc2VfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8c2tpbm5vcm1hbF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxkZWZhdWx0bm9ybWFsX3ZlcnRleD5cXG5cXG4jaWZuZGVmIEZMQVRfU0hBREVEIC8vIE5vcm1hbCBjb21wdXRlZCB3aXRoIGRlcml2YXRpdmVzIHdoZW4gRkxBVF9TSEFERURcXG5cXG4gICAgdk5vcm1hbCA9IG5vcm1hbGl6ZSggdHJhbnNmb3JtZWROb3JtYWwgKTtcXG5cXG4jZW5kaWZcXG5cXG4gICAgI2luY2x1ZGUgPGJlZ2luX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGRpc3BsYWNlbWVudG1hcF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxtb3JwaHRhcmdldF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxza2lubmluZ192ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxwcm9qZWN0X3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc192ZXJ0ZXg+XFxuXFxuICAgIHZWaWV3UG9zaXRpb24gPSAtIG12UG9zaXRpb24ueHl6O1xcblxcbiAgICAvLyBpZiAoIHVUaW1lID4gMC4wICkge1xcbiAgICAvLyAgICAgZmxvYXQgZGlzcGxhY2VtZW50ID0gbm9pc2UodmVjNCh2ZWMzKHBvc2l0aW9uKSwgdVRpbWUgKiAxLikpO1xcbiAgICAvLyAgICAgdmVjMyBwb3MgPSBwb3NpdGlvbjtcXG4gICAgLy8gICAgIHBvcy56ID0gZGlzcGxhY2VtZW50ICogMi4gKyAyLjtcXG5cXG4gICAgLy8gICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zLCAxLjApO1xcbiAgICAvLyB9XFxuXFxuICAgIHZVdiA9IHV2O1xcbiAgICB2UG9zaXRpb24gPSBwb3NpdGlvbjtcXG5cXG4gICAgI2luY2x1ZGUgPHdvcmxkcG9zX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGVudm1hcF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxzaGFkb3dtYXBfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8Zm9nX3ZlcnRleD5cXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vc2hhZGVycy9ib3R0b20udmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBQSE9OR1xcbiNkZWZpbmUgTV9QSSAzLjE0XFxuXFxudW5pZm9ybSB2ZWMzIGRpZmZ1c2U7XFxudW5pZm9ybSB2ZWMzIGVtaXNzaXZlO1xcbnVuaWZvcm0gdmVjMyBzcGVjdWxhcjtcXG51bmlmb3JtIGZsb2F0IHNoaW5pbmVzcztcXG51bmlmb3JtIGZsb2F0IG9wYWNpdHk7XFxuXFxudW5pZm9ybSBmbG9hdCB1VGltZTtcXG51bmlmb3JtIHZlYzMgdVN0cmlwZU9yaWVudGF0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdUludmVydDtcXG51bmlmb3JtIHZlYzMgdVNxdWFyZTtcXG51bmlmb3JtIGZsb2F0IHVXaWR0aDtcXG51bmlmb3JtIGZsb2F0IHVIZWlnaHQ7XFxudW5pZm9ybSBmbG9hdCB1TGVuZ3RoO1xcbnVuaWZvcm0gZmxvYXQgdVByb2dyZXNzO1xcblxcbnZhcnlpbmcgdmVjMyB2UG9zaXRpb247XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDxwYWNraW5nPlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1dl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1djJfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGFscGhhbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGFvbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGxpZ2h0bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGVtaXNzaXZlbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGVudm1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxncmFkaWVudG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxmb2dfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8YnNkZnM+XFxuI2luY2x1ZGUgPGxpZ2h0c19wYXJzPlxcbiNpbmNsdWRlIDxsaWdodHNfcGhvbmdfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8c2hhZG93bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGJ1bXBtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bm9ybWFsbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPHNwZWN1bGFybWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc19wYXJzX2ZyYWdtZW50PlxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc19mcmFnbWVudD5cXG5cXG4gICAgdmVjNCBkaWZmdXNlQ29sb3IgPSB2ZWM0KCBkaWZmdXNlLCBvcGFjaXR5ICk7XFxuICAgIFJlZmxlY3RlZExpZ2h0IHJlZmxlY3RlZExpZ2h0ID0gUmVmbGVjdGVkTGlnaHQoIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICksIHZlYzMoIDAuMCApICk7XFxuICAgIHZlYzMgdG90YWxFbWlzc2l2ZVJhZGlhbmNlID0gZW1pc3NpdmU7XFxuXFxuICAgICNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPG1hcF9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGNvbG9yX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8YWxwaGFtYXBfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxhbHBoYXRlc3RfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxzcGVjdWxhcm1hcF9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPG5vcm1hbF9mbGlwPlxcbiAgICAjaW5jbHVkZSA8bm9ybWFsX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8ZW1pc3NpdmVtYXBfZnJhZ21lbnQ+XFxuXFxuICAgIC8vIGFjY3VtdWxhdGlvblxcbiAgICAjaW5jbHVkZSA8bGlnaHRzX3Bob25nX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8bGlnaHRzX3RlbXBsYXRlPlxcblxcbiAgICAvLyBtb2R1bGF0aW9uXFxuICAgICNpbmNsdWRlIDxhb21hcF9mcmFnbWVudD5cXG5cXG4gICAgdmVjMyBvdXRnb2luZ0xpZ2h0ID0gcmVmbGVjdGVkTGlnaHQuZGlyZWN0RGlmZnVzZSArIHJlZmxlY3RlZExpZ2h0LmluZGlyZWN0RGlmZnVzZSArIHJlZmxlY3RlZExpZ2h0LmRpcmVjdFNwZWN1bGFyICsgcmVmbGVjdGVkTGlnaHQuaW5kaXJlY3RTcGVjdWxhciArIHRvdGFsRW1pc3NpdmVSYWRpYW5jZTtcXG5cXG4gICAgI2luY2x1ZGUgPGVudm1hcF9mcmFnbWVudD5cXG5cXG4gICAgdmVjNCBjb2xvciA9IHZlYzQob3V0Z29pbmdMaWdodCwgZGlmZnVzZUNvbG9yLmEgKTtcXG5cXG4gICAgLy8gZmxvYXQgcG9zWCA9IHZQb3NpdGlvbi54ICogdVN0cmlwZU9yaWVudGF0aW9uLnggKyB2UG9zaXRpb24ueSAqIHVTdHJpcGVPcmllbnRhdGlvbi55O1xcbiAgICAvLyBmbG9hdCBwb3NZID0gdlBvc2l0aW9uLnggKiB1U3RyaXBlT3JpZW50YXRpb24ueSArIHZQb3NpdGlvbi55ICogdVN0cmlwZU9yaWVudGF0aW9uLng7XFxuXFxuICAgIGZsb2F0IGFic1ggPSBmbG9vcigtY29zKCh1VGltZSAqIDAuMSArIE1fUEkgKiB1U3F1YXJlLnggKiAoICggdlV2LnggKyB1UHJvZ3Jlc3MgKyAwLjE1ICkgKiAyLiAtIDEuICkgKiAwLjUpKSkgKyAxLjtcXG4gICAgZmxvYXQgYWJzWSA9IGZsb29yKC1jb3MoKE1fUEkgKiB1U3F1YXJlLnkgKiAoIHZVdi55ICogMi4gLSAxLiApICogMC41KSkpICsgMS47XFxuXFxuICAgIGlmICggYWJzWCA+IDAuMCB8fCBhYnNZID4gMC4gKSB7XFxuICAgICAgIGNvbG9yID0gdmVjNCh2ZWMzKDEuMCAtIHVJbnZlcnQpLCBkaWZmdXNlQ29sb3IuYSk7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICBjb2xvciA9IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpOyAgXFxuICAgIH1cXG5cXG4gICAgLy8gY29sb3IgPSB2VXYueCA+IDEuIC0gdVByb2dyZXNzICA/IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpIDogdmVjNCh2ZWMzKDAuMCArIHVJbnZlcnQpLCBkaWZmdXNlQ29sb3IuYSk7XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG5cXG4gICAgI2luY2x1ZGUgPHRvbmVtYXBwaW5nX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8Zm9nX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8cHJlbXVsdGlwbGllZF9hbHBoYV9mcmFnbWVudD5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vc2hhZGVycy9wcm9ncmVzcy5mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9ncmVzc1xuXG5mdW5jdGlvbiBwcm9ncmVzcyh4aHIpIHtcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyXG4gIHZhciBmaW5pc2hlZCA9IGZhbHNlXG5cbiAgaWYgKHhoci5hdHRhY2hFdmVudCkge1xuICAgIHhoci5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZG9uZSlcbiAgICByZXR1cm4gZW1pdHRlclxuICB9XG5cbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lLCBmYWxzZSlcbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICBmdW5jdGlvbiBwcm9ncmVzcyhldmVudCkge1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgID8gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWxcbiAgICAgIDogMFxuXG4gICAgaWYgKCFmaW5pc2hlZCkgZW1pdHRlci5lbWl0KCdkYXRhJ1xuICAgICAgLCB2YWx1ZVxuICAgICAgLCBldmVudC50b3RhbCB8fCBudWxsXG4gICAgKVxuXG4gICAgZmluaXNoZWQgPSB2YWx1ZSA9PT0gMVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlICE9PSAnbG9hZCcgJiYgIS9eKHJlYWR5fGNvbXBsZXRlKSQvZy50ZXN0KFxuICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkucmVhZHlTdGF0ZVxuICAgICkpIHJldHVyblxuXG4gICAgaWYgKGZpbmlzaGVkKSByZXR1cm5cbiAgICBpZiAoeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHhoci5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzcywgZmFsc2UpXG4gICAgfSBlbHNlXG4gICAgaWYgKHhoci5kZXRhdGNoRXZlbnQpIHtcbiAgICAgIHhoci5kZXRhdGNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KCdkYXRhJywgMSwgZXZlbnQudG90YWwgfHwgbnVsbClcbiAgICBlbWl0dGVyLmVtaXQoJ2RvbmUnKVxuICAgIGZpbmlzaGVkID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGVtaXR0ZXJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94aHItcHJvZ3Jlc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoXCJpcy1mdW5jdGlvblwiKVxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoXCJwYXJzZS1oZWFkZXJzXCIpXG52YXIgeHRlbmQgPSByZXF1aXJlKFwieHRlbmRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVYSFJcbmNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCBub29wXG5jcmVhdGVYSFIuWERvbWFpblJlcXVlc3QgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCkpID8gY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0IDogd2luZG93LlhEb21haW5SZXF1ZXN0XG5cbmZvckVhY2hBcnJheShbXCJnZXRcIiwgXCJwdXRcIiwgXCJwb3N0XCIsIFwicGF0Y2hcIiwgXCJoZWFkXCIsIFwiZGVsZXRlXCJdLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBjcmVhdGVYSFJbbWV0aG9kID09PSBcImRlbGV0ZVwiID8gXCJkZWxcIiA6IG1ldGhvZF0gPSBmdW5jdGlvbih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRvcihhcnJheVtpXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKXtcbiAgICBmb3IodmFyIGkgaW4gb2JqKXtcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHBhcmFtcyA9IHVyaVxuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7dXJpOnVyaX1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHh0ZW5kKG9wdGlvbnMsIHt1cmk6IHVyaX0pXG4gICAgfVxuXG4gICAgcGFyYW1zLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICByZXR1cm4gcGFyYW1zXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlWEhSKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbGxiYWNrIGFyZ3VtZW50IG1pc3NpbmdcIilcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYk9uY2UoZXJyLCByZXNwb25zZSwgYm9keSl7XG4gICAgICAgIGlmKCFjYWxsZWQpe1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhlcnIsIHJlc3BvbnNlLCBib2R5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRGdW5jLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IGdldFhtbCh4aHIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UsIHJlc3BvbnNlLmJvZHkpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciBhYm9ydGVkXG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybFxuICAgIHZhciBtZXRob2QgPSB4aHIubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIlxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YVxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuICAgIHZhciBmYWlsdXJlUmVzcG9uc2UgPSB7XG4gICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHN0YXR1c0NvZGU6IDAsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgfVxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5qc29uICE9PSBmYWxzZSkge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbiA9PT0gdHJ1ZSA/IGJvZHkgOiBvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZS8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIilcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgdGltZW91dFwiKVxuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIlxuICAgICAgICAgICAgZXJyb3JGdW5jKGUpXG4gICAgICAgIH0sIG9wdGlvbnMudGltZW91dCApXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG5cbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICAvLyBNaWNyb3NvZnQgRWRnZSBicm93c2VyIHNlbmRzIFwidW5kZWZpbmVkXCIgd2hlbiBzZW5kIGlzIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBzcGVjIHNheXMgdG8gcGFzcyBudWxsIGFzIGJvZHkgdG8gaW5kaWNhdGUgbm8gYm9keVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmF1Z3R1ci94aHIvaXNzdWVzLzEwMC5cbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpXG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5mdW5jdGlvbiBnZXRYbWwoeGhyKSB7XG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuICAgIHZhciBmaXJlZm94QnVnVGFrZW5FZmZlY3QgPSB4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gXCJwYXJzZXJlcnJvclwiXG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiXCIgJiYgIWZpcmVmb3hCdWdUYWtlbkVmZmVjdCkge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==