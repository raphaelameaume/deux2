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

var _map = __webpack_require__(51);

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
            vertexShader: __webpack_require__(46),
            // fragmentShader: require('../shaders/bottom.frag.glsl'),
            fragmentShader: __webpack_require__(47),
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// sourced from:
// http://www.leanbackplayer.com/test/h5mt.html
// https://github.com/broofa/node-mime/blob/master/types.json
var mimeTypes = __webpack_require__(29)

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = createAudioContext
function createAudioContext () {
  var AudioCtor = window.AudioContext || window.webkitAudioContext
  return new AudioCtor()
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var lookup = __webpack_require__(7)
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
/* 11 */
/***/ (function(module, exports) {

module.exports = function (audioContext) {
  if (audioContext.state === 'suspended' &&
      typeof audioContext.resume === 'function') {
    audioContext.resume()
  }
}


/***/ }),
/* 12 */
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

var _randomFromArray = __webpack_require__(52);

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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webAudioPlayer = __webpack_require__(41);

var _webAudioPlayer2 = _interopRequireDefault(_webAudioPlayer);

var _webAudioAnalyser = __webpack_require__(40);

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

        this.assets = '/assets/sounds';
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(36)
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

var clamp = __webpack_require__(30)

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

var _Background = __webpack_require__(15);

var _Background2 = _interopRequireDefault(_Background);

var _Top = __webpack_require__(19);

var _Top2 = _interopRequireDefault(_Top);

var _Left = __webpack_require__(17);

var _Left2 = _interopRequireDefault(_Left);

var _Right = __webpack_require__(18);

var _Right2 = _interopRequireDefault(_Right);

var _Bottom = __webpack_require__(16);

var _Bottom2 = _interopRequireDefault(_Bottom);

var _smooth = __webpack_require__(21);

var _smooth2 = _interopRequireDefault(_smooth);

var _FacesController = __webpack_require__(12);

var _FacesController2 = _interopRequireDefault(_FacesController);

var _MouseManager = __webpack_require__(13);

var _MouseManager2 = _interopRequireDefault(_MouseManager);

var _SoundManager = __webpack_require__(20);

var _SoundManager2 = _interopRequireDefault(_SoundManager);

var _KeyboardController = __webpack_require__(14);

var _KeyboardController2 = _interopRequireDefault(_KeyboardController);

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _ui = __webpack_require__(22);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var glslify = __webpack_require__(6);

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
/* 30 */
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(8)

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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(39)
  , forEach = __webpack_require__(31)
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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isDom = __webpack_require__(33)
var lookup = __webpack_require__(7)

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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var buffer = __webpack_require__(42)
var media = __webpack_require__(44)

module.exports = webAudioPlayer
function webAudioPlayer (src, opt) {
  if (!src) throw new TypeError('must specify a src parameter')
  opt = opt || {}
  if (opt.buffer) return buffer(src, opt)
  else return media(src, opt)
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var canPlaySrc = __webpack_require__(10)
var createAudioContext = __webpack_require__(9)
var xhrAudio = __webpack_require__(45)
var EventEmitter = __webpack_require__(4).EventEmitter
var rightNow = __webpack_require__(37)
var resume = __webpack_require__(11)

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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var EventEmitter = __webpack_require__(4).EventEmitter
var createAudio = __webpack_require__(38).audio
var assign = __webpack_require__(34)

var resume = __webpack_require__(11)
var createAudioContext = __webpack_require__(9)
var canPlaySrc = __webpack_require__(10)
var addOnce = __webpack_require__(43)

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(49)
var xhrProgress = __webpack_require__(48)

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
/* 46 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec3 vPosition;\nvarying vec2 vUv;\nuniform float uTime;\n\n#ifndef FLAT_SHADED\n\n    varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n\n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n    vNormal = normalize( transformedNormal );\n\n#endif\n\n    #include <begin_vertex>\n    #include <displacementmap_vertex>\n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n\n    vViewPosition = - mvPosition.xyz;\n\n    // if ( uTime > 0.0 ) {\n    //     float displacement = noise(vec4(vec3(position), uTime * 1.));\n    //     vec3 pos = position;\n    //     pos.z = displacement * 2. + 2.;\n\n    //     gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n    // }\n\n    vUv = uv;\n    vPosition = position;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n\n}"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n#define M_PI 3.14\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float uTime;\nuniform vec3 uStripeOrientation;\nuniform float uInvert;\nuniform vec3 uSquare;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uLength;\nuniform float uProgress;\n\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n    #include <clipping_planes_fragment>\n\n    vec4 diffuseColor = vec4( diffuse, opacity );\n    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n    vec3 totalEmissiveRadiance = emissive;\n\n    #include <logdepthbuf_fragment>\n    #include <map_fragment>\n    #include <color_fragment>\n    #include <alphamap_fragment>\n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_flip>\n    #include <normal_fragment>\n    #include <emissivemap_fragment>\n\n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_template>\n\n    // modulation\n    #include <aomap_fragment>\n\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n    #include <envmap_fragment>\n\n    vec4 color = vec4(outgoingLight, diffuseColor.a );\n\n    // float posX = vPosition.x * uStripeOrientation.x + vPosition.y * uStripeOrientation.y;\n    // float posY = vPosition.x * uStripeOrientation.y + vPosition.y * uStripeOrientation.x;\n\n    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;\n    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;\n\n    if ( absX > 0.0 || absY > 0. ) {\n       color = vec4(vec3(1.0 - uInvert), diffuseColor.a);\n    } else {\n        color = vec4(vec3(0.0 + uInvert), diffuseColor.a);  \n    }\n\n    // color = vUv.x > 1. - uProgress  ? vec4(vec3(1.0 - uInvert), diffuseColor.a) : vec4(vec3(0.0 + uInvert), diffuseColor.a);\n    \n    gl_FragColor = color;\n\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n}"

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(32)
var isFunction = __webpack_require__(8)
var parseHeaders = __webpack_require__(35)
var xtend = __webpack_require__(50)

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
/* 50 */
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


/***/ }),
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = randomFromArray;
function randomFromArray(array) {
    return array[~~(Math.random() * array.length)];
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGRlNTAzYWRlYjE4OThmMzUyNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vZ2xzbGlmeS9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2F1ZGlvLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9yZXN1bWUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9taW1lLXR5cGVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jbGFtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Zvci1lYWNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpZ2h0LW5vdy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cmltL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLWFuYWx5c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2J1ZmZlci1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9ldmVudC1hZGQtb25jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL21lZGlhLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3hoci1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsIiwid2VicGFjazovLy8uL34veGhyLXByb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34veGhyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34veHRlbmQvaW1tdXRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcmFuZG9tRnJvbUFycmF5LmpzIl0sIm5hbWVzIjpbIkV2ZW50c01hbmFnZXIiLCJldmVudCIsImRhdGEiLCJsaXN0ZW5lcnMiLCJldmVudHNMaXN0IiwiY29uc29sZSIsIndhcm4iLCJpIiwibGVuIiwibGVuZ3RoIiwiZm4iLCJsb2ciLCJwdXNoIiwibGlzdGVuZXIiLCJvZmYiLCJfIiwib24iLCJ0YXJnZXRFdmVudHMiLCJ0YXJnZXQiLCJFdmVudHMiLCJLRVlCT0FSRCIsIktFWURPV04iLCJLRVlVUCIsIktFWVBSRVNTIiwiU1BBQ0VIT0xEIiwiU1BBQ0VVUCIsIlNQQUNFRE9XTiIsIlNPVU5EUyIsIkNBTlBMQVkiLCJFTkQiLCJMT1dLSUNLIiwiU1RBUlQiLCJYUCIsIlVJIiwiSElEREVOIiwiQWJzdHJhY3RGYWNlIiwiZ2VvbWV0cnkiLCJjb2xvciIsIm5hbWUiLCJzaWRlIiwiVEhSRUUiLCJGcm9udFNpZGUiLCJwbGFuZUdlb21ldHJ5Iiwib25LZXlQcmVzcyIsIm9uS2V5RG93biIsIm9uS2V5VXAiLCJvblNwYWNlSG9sZCIsIm9uU3BhY2VVcCIsIm9uU3BhY2VEb3duIiwib25TdGFydCIsIm9uSGlkZGVuVUkiLCJ1bmlmb3JtcyIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsIlNoYWRlckxpYiIsInR5cGUiLCJ2YWx1ZSIsIkNvbG9yIiwiVmVjdG9yMyIsIndpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnREaXZpc2lvbnMiLCJWZWN0b3IyIiwib3JpZW50YXRpb25zIiwic3BlZWQiLCJzcGVlZE1pbiIsInNwZWVkTWF4IiwiZHVyYXRpb24iLCJmYWN0b3IiLCJlYXNlIiwiRXhwbyIsImVhc2VPdXQiLCJkZWJ1ZyIsInN0YXJ0ZWQiLCJpc1NwYWNlRG93biIsImluaXRHdWkiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwicmVxdWlyZSIsImZyYWdtZW50U2hhZGVyIiwic2hhZGluZyIsIkZsYXRTaGFkaW5nIiwibGlnaHRzIiwid2lyZWZyYW1lIiwidHJhbnNwYXJlbnQiLCJmb2ciLCJtZXNoIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiaXNPcGVuIiwiZ3VpIiwiYWRkRm9sZGVyIiwib3BlbiIsInVwZGF0ZURpdmlzaW9ucyIsIm9yaWVudGF0aW9uTmFtZSIsInNjYWxhciIsIm9yaWVudGF0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJ4IiwieSIsInoiLCJibGFja01vZGUiLCJzaG93IiwidG8iLCJUd2Vlbk1heCIsImhpZGUiLCJrZXkiLCJvbkNvbXBsZXRlIiwicmV2ZXJzZVN0cmlwZXMiLCJpbnZlcnQiLCJNYXRoIiwicmFuZG9tIiwicHJvZ3Jlc3MiLCJjaGFuZ2VTcGVlZCIsInRsIiwiVGltZWxpbmVNYXgiLCJzZXQiLCJmcm9tVG8iLCJPYmplY3QzRCIsIkZhY2VzQ29udHJvbGxlciIsImNvbnRhaW5lciIsImZhY2VzIiwiZGl2aXNpb25zIiwiZ2VuZXJhdGVEaXZpc2lvbnMiLCJsYXN0WCIsImxhc3RZIiwib25Mb3dLaWNrIiwib25VSUhpZGRlbiIsIm9uU291bmRFbmQiLCJibGFja01vZGVWZXJ0aWNhbCIsImJsYWNrTW9kZUhvcml6b250YWwiLCJibGFja01vZGVUdW5uZWxUb3AiLCJibGFja01vZGVUdW5uZWxCb3R0b20iLCJibGFja01vZGVCb3R0b20iLCJibGFja01vZGVzIiwic2V0QmxhY2tNb2RlIiwicmVhY3Rpb25zIiwiaWQiLCJmYWNlIiwibWluIiwibWF4IiwicG9zc2libGVEaXZpc2lvblgiLCJmaW5kRGl2aXNpb25zIiwicmRtWEluZGV4IiwiZmxvb3IiLCJkaXZpc2lvblgiLCJpbmRleE9mIiwicG9zc2libGVEaXZpc2lvblkiLCJyZG1ZSW5kZXgiLCJkaXZpc2lvblkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwic2V0U3RyaXBlcyIsImFsbCIsImN1cnJlbnQiLCJyYW5nZSIsImRpdmlzaW9uIiwiaW5kZXgiLCJmaWx0ZXIiLCJ1aUhpZGRlbiIsInNvdW5kRW5kZWQiLCJyZWFjdGlvbiIsImVtaXQiLCJyZXNldCIsIm9uRW5kIiwicmRtIiwiTW91c2VNYW5hZ2VyIiwiY2hlY2tNb3VzZVNwZWVkIiwibW91c2VTcGVlZFgiLCJtb3VzZVNwZWVkWSIsIm1vdXNlTGFzdFgiLCJtb3VzZUxhc3RZIiwibW91c2VEaXJlY3Rpb25YIiwibW91c2VEaXJlY3Rpb25ZIiwibW91c2VYIiwibW91c2VZIiwic2V0SW50ZXJ2YWwiLCJnZXRTcGVlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0RGlyZWN0aW9uIiwicGFnZVgiLCJwYWdlWSIsIktleWJvYXJkQ29udHJvbGxlciIsIkJhY2tncm91bmQiLCJCb3R0b20iLCJob3Jpem9udGFsIiwiaG9yaXpvbnRhbFNrZXcxIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFNrZXcxIiwidmVydGljYWxTa2V3MiIsInZpc2liaWxpdHlUb2dnbGVyIiwidmlzaWJpbGl0eUhpZGVyIiwidmlzaWJpbGl0eVNob3dlciIsInRvZ2dsZVBvc2l0aW9uIiwiTGVmdCIsIlJpZ2h0IiwiQmFja1NpZGUiLCJwb3NpdGlvbiIsIlRvcCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIlNvdW5kTWFuYWdlciIsImJhc3MiLCJtaWRCYXNzIiwidm9pY2UiLCJkcnVtIiwicGF1c2UiLCJhc3NldHMiLCJzb3VyY2VzIiwiaW50cm8iLCJ4cCIsInN0YXJ0IiwiaW5pdFNvdW5kIiwibG93S2ljayIsInJhbmdlcyIsInNvdW5kR3VpIiwib25DaGFuZ2UiLCJwbGF5ZXIiLCJwbGF5IiwicGxheWVycyIsImF1ZGlvIiwiYW5hbHlzZXIiLCJub2RlIiwiQXVkaW8iLCJ2b2x1bWUiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImF1ZGlibGUiLCJzdGVyZW8iLCJsb2FkZWQiLCJzcmMiLCJmcmVxcyIsImZyZXF1ZW5jaWVzIiwibGV2ZWwiLCJ1cGRhdGUiLCJxdWV1ZSIsInNtb290aCIsImNvZWZmIiwiaW5pdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9nbyIsIiRhY3Rpb24iLCIkYWN0aW9uRmlsbCIsIiR0dXRvIiwiJGNyZWRpdHMiLCJub3ciLCJEYXRlIiwibWF4VGltZSIsImlzQ29tcGxldGVkIiwibWluRmlsbCIsIm1heEZpbGwiLCJmaWxsIiwibWF4U2NhbGUiLCJtaW5TY2FsZSIsInNjYWxlIiwib3BhY2l0eSIsInJlc2V0dGVkIiwiaXNEb3duIiwicGF1c2VkIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJvbkVuZFhQIiwiZGlzcGxheSIsInN0eWxlIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwiY3NzIiwidGltZVNjYWxlIiwicmV2ZXJzZSIsInRyYW5zZm9ybU9yaWdpbiIsImRpc3BsYXlUdXRvcmlhbCIsInBvaW50ZXJFdmVudHMiLCJkaXNwbGF5Q3JlZGl0cyIsImdsc2xpZnkiLCJBcHAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWNlc0NvbnRyb2xsZXIiLCJmYWNlc0NvbnRhaW5lciIsInVpIiwic291bmRNYW5hZ2VyIiwia2V5Ym9hcmRDb250cm9sbGVyIiwicmVzaXplIiwiYmluZExpc3RlbmVycyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0Q2xlYXJDb2xvciIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTb2Z0U2hhZG93TWFwIiwiV0FHTkVSIiwidmVydGV4U2hhZGVyc1BhdGgiLCJmcmFnbWVudFNoYWRlcnNQYXRoIiwiY29tcG9zZXIiLCJDb21wb3NlciIsImJsb29tV2lkdGgiLCJpc1RvdWNoIiwiYmxvb21IZWlnaHQiLCJibG9vbVBhc3MiLCJNdWx0aVBhc3NCbG9vbVBhc3MiLCJwYXJhbXMiLCJzdHJlbmd0aCIsImJsdXJBbW91bnQiLCJhcHBseVpvb21CbHVyIiwiem9vbUJsdXJTdHJlbmd0aCIsInpvb21CbHVyQ2VudGVyIiwicmdiUGFzcyIsIlJHQlNwbGl0UGFzcyIsImRlbHRhIiwibm9pc2VQYXNzIiwiTm9pc2VQYXNzIiwiYW1vdW50IiwidmlnbmV0dGVQYXNzIiwiVmlnbmV0dGVQYXNzIiwiZnhhYVBhc3MiLCJGWEFBUGFzcyIsInNjZW5lIiwiU2NlbmUiLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImxvb2tBdCIsImFkZENvbnRyb2xzIiwiYWRkTGlnaHRzIiwiYWRkRWxlbWVudHMiLCJPcmJpdENvbnRyb2xzIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJwb2ludExpZ2h0MyIsIlBvaW50TGlnaHQiLCJkaXZpc2F0b3IiLCJQbGFuZUdlb21ldHJ5Iiwib3RoZXJHZW9tZXRyeSIsImxlZnRSaWdodEdlb21ldHJ5IiwidG9wQm90dG9tR2VvbWV0cnkiLCJiYWNrZ3JvdW5kR2VvbWV0cnkiLCJsZWZ0Iiwicm90YXRpb24iLCJQSSIsInJlZ2lzdGVyIiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJzZW5zIiwiZGVsYXkiLCJyZW5kZXIiLCJwYXNzIiwidG9TY3JlZW4iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiUmFuZ2UiLCJ0aW1lIiwibiIsInN0YXJ0MSIsInN0b3AxIiwic3RhcnQyIiwic3RvcDIiLCJyYW5kb21Gcm9tQXJyYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7O0lBS01BLGE7Ozs7Ozs7OztBQUVGOzs7Ozs2QkFLY0MsSyxFQUFxQjtBQUFBLGdCQUFkQyxJQUFjLHVFQUFQLElBQU87OztBQUUvQixnQkFBTUMsWUFBWUgsY0FBY0ksVUFBZCxDQUF5QkgsS0FBekIsQ0FBbEI7O0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNB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RUE7O0FBRUEscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixrQkFBa0I7O0FBRWxCLGVBQWU7O0FBRWY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSCxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnREFBZ0Q7O0FBRWhEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0NBQStDOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2Qzs7QUFFN0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7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QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyREE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDUEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O0FDL0JBLDhEQUE4RCx5QkFBeUIsbUJBQW1CLHNCQUFzQixvREFBb0QsMlpBQTJaLGdZQUFnWSxxU0FBcVMsK0JBQStCLDBFQUEwRSxpQ0FBaUMsNENBQTRDLGlGQUFpRixVQUFVLGlCQUFpQiwyQkFBMkIsaUlBQWlJLEM7Ozs7OztBQ0FsckQsMkVBQTJFLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLDJCQUEyQixtQkFBbUIscXRCQUFxdEIsZ0dBQWdHLDJHQUEyRyw0Q0FBNEMsb25CQUFvbkIsNEZBQTRGLGdHQUFnRyw4RkFBOEYsMkhBQTJILG9GQUFvRix3Q0FBd0MsMkRBQTJELE9BQU8sT0FBTyw0REFBNEQsU0FBUyxtSUFBbUksaUNBQWlDLHVKQUF1SixDOzs7Ozs7QUNBLzdGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTCxpQ0FBaUMsU0FBUztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoUEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O2tCQ2xCd0JyTixHO0FBQVQsU0FBU0EsR0FBVCxDQUFjdU4sQ0FBZCxFQUFpQkMsTUFBakIsRUFBeUJDLEtBQXpCLEVBQWdDQyxNQUFoQyxFQUF3Q0MsS0FBeEMsRUFBK0M7QUFDMUQsV0FBUSxDQUFDSixJQUFJQyxNQUFMLEtBQWdCQyxRQUFRRCxNQUF4QixDQUFELElBQXFDRyxRQUFRRCxNQUE3QyxJQUF1REEsTUFBOUQ7QUFDSCxFOzs7Ozs7Ozs7Ozs7a0JDRnVCRSxlO0FBQVQsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDM0MsV0FBT0EsTUFBTSxDQUFDLEVBQUV2USxLQUFLQyxNQUFMLEtBQWdCc1EsTUFBTWhYLE1BQXhCLENBQVAsQ0FBUDtBQUNILEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZGU1MDNhZGViMTg5OGYzNTI2NiIsIi8qKlxuICogRXZlbnRzIE1hbmFnZXJcbiAqIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAqL1xuXG5jbGFzcyBFdmVudHNNYW5hZ2VyIHtcblxuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgZW1pdCAoIGV2ZW50LCBkYXRhID0gbnVsbCApIHtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdO1xuXG4gICAgICAgIGlmKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzTWFuYWdlciA6OiBFbWl0IDo6IEN1cnJlbnRseSBubyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQgOiAnLCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoIGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkgbGlzdGVuZXJzW2ldLmZuKCBkYXRhICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBvbiAoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnRXZlbnRzTWFuYWdlciA6OiBPTiA6OicsIGV2ZW50KTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0KSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3QgPSB7fTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSkgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSA9IFtdOyAvLyBpbXByb3ZlICguXy4pXG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XS5wdXNoKHtmbjpmbn0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIG9uY2UoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICggZGF0YSApID0+e1xuXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgZm4oZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdGVuZXIuXyA9IGZuO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKCBldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG9mZiAoIGV2ZW50LCBmbiApIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICAgICAgaWYoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHNNYW5hZ2VyIDo6IE9mZiA6OiBDdXJyZW50bHkgbm8gbGlzdGVuZXJzIGZvciB0aGlzIGV2ZW50IDogJywgZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V2ZW50c01hbmFnZXIgOjogT2ZmIDo6IENhbGxiYWNrIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RXZlbnRzID0gW107XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICBpZih0YXJnZXQuZm4gIT09IGZuICYmIHRhcmdldC5mbi5fICE9PSBmbiApIHsgLy8gKC5fXy4pID8/XG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnRzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYoIHRhcmdldEV2ZW50cy5sZW5ndGggPsKgMCApXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdID0gdGFyZ2V0RXZlbnRzO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c01hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIi8qKlxuICogRSBWIEUgTiBUIFNcbiAqL1xuXG5jb25zdCBFdmVudHMgPSB7XG4gICAgS0VZQk9BUkQ6IHtcbiAgICAgICAgS0VZRE9XTjogXCJLRVlCT0FSRF9LRVlET1dOXCIsXG4gICAgICAgIEtFWVVQOiBcIktFWUJPQVJEX0tFWVVQXCIsXG4gICAgICAgIEtFWVBSRVNTOiBcIktFWUJPQVJEX0tFWVBSRVNTXCIsXG4gICAgICAgIFNQQUNFSE9MRDogXCJLRVlCT0FSRF9TUEFDRUhPTERcIixcbiAgICAgICAgU1BBQ0VVUDogXCJLRVlCT0FSRF9TUEFDRVVQXCIsXG4gICAgICAgIFNQQUNFRE9XTjogXCJLRVlCT0FSRF9TUEFDRURPV05cIixcbiAgICB9LFxuICAgIFNPVU5EUzoge1xuICAgICAgICBDQU5QTEFZOiBcIlNPVU5EU19DQU5QTEFZXCIsXG4gICAgICAgIEVORDogXCJTT1VORFNfRU5EXCIsXG4gICAgICAgIExPV0tJQ0s6IFwiU09VTkRTX0xPV0tJQ0tcIixcbiAgICAgICAgU1RBUlQ6IFwiU09VTkRTX1NUQVJUXCIsXG4gICAgICAgIEVORDogXCJTT1VORFNfRU5EXCIsXG4gICAgfSxcbiAgICBYUDoge1xuICAgICAgICBTVEFSVDogXCJYUF9TVEFSVFwiLFxuICAgICAgICBFTkQ6IFwiWFBfRU5EXCIsXG4gICAgfSxcbiAgICBVSToge1xuICAgICAgICBISURERU46IFwiVUlfSElEREVOXCIsXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZXZlbnRzL0V2ZW50cy5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWxzL21hcCc7XG5cbmNsYXNzIEFic3RyYWN0RmFjZSBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yID0gMHgyNDI0MjUsIG5hbWUsIHNpZGUgPSBUSFJFRS5Gcm9udFNpZGUgKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wbGFuZUdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gOjp0aGlzLm9uS2V5UHJlc3M7XG4gICAgICAgIHRoaXMub25LZXlEb3duID0gOjp0aGlzLm9uS2V5RG93bjtcbiAgICAgICAgdGhpcy5vbktleVVwID0gOjp0aGlzLm9uS2V5VXA7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25IaWRkZW5VSSA9IDo6dGhpcy5vbkhpZGRlblVJO1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKFRIUkVFLlNoYWRlckxpYlsncGhvbmcnXS51bmlmb3Jtcyk7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10gPSB7IHR5cGU6J2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ2RpZmZ1c2UnXSA9IHsgdHlwZTogJ2MnLCB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEpIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VXaWR0aCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cud2lkdGggfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUhlaWdodCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VMZW5ndGgnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93Lmxlbmd0aCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDAuMDtcblxuICAgICAgICB0aGlzLnN0YXJ0RGl2aXNpb25zID0gbmV3IFRIUkVFLlZlY3RvcjIoNjUsIDEpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0gW107XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRNaW4gPSAxMi4wOyAvLyA3LjBcbiAgICAgICAgdGhpcy5zcGVlZE1heCA9IDEyLjA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjM7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5lYXNlID0gRXhwby5lYXNlT3V0O1xuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCB0aGlzLmRlYnVnICkge1xuICAgICAgICAgICAgdGhpcy5pbml0R3VpKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wnKSxcbiAgICAgICAgICAgIC8vIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS5mcmFnLmdsc2wnKSxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCcpLFxuICAgICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgICBzaGFkaW5nOiBUSFJFRS5GbGF0U2hhZGluZyxcbiAgICAgICAgICAgIGxpZ2h0czogdHJ1ZSxcbiAgICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsXG4gICAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBmb2c6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxhbmVHZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIHRoaXMubWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLm1lc2gpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB0aGlzLm9uS2V5RG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVVQLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHRoaXMub25TcGFjZUhvbGQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04sIHRoaXMub25TcGFjZURvd24pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQLCB0aGlzLm9uU3BhY2VVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLlNUQVJULCB0aGlzLm9uU3RhcnQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5VSS5ISURERU4sIHRoaXMub25IaWRkZW5VSSk7XG4gICAgfVxuXG4gICAgaW5pdEd1aSAoIGlzT3BlbiApIHtcbiAgICAgICAgdGhpcy5ndWkgPSB3aW5kb3cuZ3VpLmFkZEZvbGRlcih0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd4JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHgnKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneScsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB5Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3onLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geicpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneCcsIDAsIDEwMCkubmFtZSgnU3BhY2UgeCcpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneScsIDAsIDEwMCkubmFtZSgnU3BhY2UgeScpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneicsIDAsIDEwMCkubmFtZSgnU3BhY2UgeicpO1xuICAgICAgICBcbiAgICAgICAgaXNPcGVuICYmIHRoaXMuZ3VpLm9wZW4oKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddLnZhbHVlICs9IHRoaXMuZmFjdG9yICogdGhpcy5zcGVlZCAqIDAuMTtcbiAgICB9XG5cbiAgICBzZXRQbGFpbkNvbG9yICggY29sb3IgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKDAsIDApO1xuICAgICAgICAvLyB0aGlzLnVuaWZvcm1zWydkaWZmdXNlJ10udmFsdWUgPSBuZXcgVEhSRUUuQ29sb3IoMHhGRkZGRkYpO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCBvcmllbnRhdGlvbk5hbWUsIHNjYWxhciA9IDEsIGR1cmF0aW9uID0gMiApIHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uc1tvcmllbnRhdGlvbk5hbWVdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcmllbnRhdGlvbiApIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gb3JpZW50YXRpb24uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihzY2FsYXIpOyAvLyByb3NhY2VcblxuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueCA9IGNsb25lLng7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS55ID0gY2xvbmUueTtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnogPSBjbG9uZS56O1xuICAgICAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsIDAuNCwgeyB4OiBjbG9uZS54LCB5OiBjbG9uZS55LCB6OiBjbG9uZS56LCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldmVyc2VTdHJpcGVzICgpIHtcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgfVxuXG4gICAgY2hhbmdlU3BlZWQgKCBzcGVlZCA9IHRoaXMuc3BlZWRNaW4gKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBpbnZlcnQgKCkge1xuICAgICAgICBpZiAoIHRoaXMuYmxhY2tNb2RlICkge1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10udmFsdWUgPT09IDEuMCA/IDAuIDogMS47XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiB0bywgZWFzZTogdGhpcy5lYXNlLCB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVWaXNpYmlsaXR5ICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyAoIGRhdGEgKSB7XG4gICAgICAgIHN3aXRjaCAoIGRhdGEua2V5ICkge1xuICAgICAgICAgICAgLy8gY2FzZSAncCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRQbGFpbkNvbG9yKDB4MDAwMDAwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdHJpcGVzKCdob3Jpem9udGFsJywgMSk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ3YnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RyaXBlcygndmVydGljYWwnLCAxKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaSc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pbnZlcnQoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAncic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yZXZlcnNlU3RyaXBlcygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5SGlkZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5U2hvd2VyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMSwgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDAsIGVhc2U6IHRoaXMuZWFzZSwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSAwO1xuICAgICAgICB9fSk7XG4gICAgfVxuXG4gICAgb25LZXlVcCAoIGRhdGEgKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGRhdGEgKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggd2luZG93LnN0YXJ0ZWQgJiYgdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZVN0cmlwZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGl2aXNpb25zICggeCwgeSwgaW52ZXJ0ID0gdHJ1ZSApIHtcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCB0aGlzLmR1cmF0aW9uLCB7IHg6IHgsIHk6IHksIGVhc2U6IHRoaXMuZWFzZSB9KTtcblxuICAgICAgICBpZiAoIGludmVydCApIHtcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgPiAwLjUgJiYgdGhpcy5pbnZlcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJsYWNrTW9kZSAoKSB7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlID0gdHJ1ZTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDEuMCwgZWFzZTogdGhpcy5lYXNlLCB9KTtcbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSBtYXAocHJvZ3Jlc3MsIDAsIDEsIDAsIDAuOCk7XG4gICAgfVxuXG4gICAgb25FbmQgKCkge1xuICAgICAgICB0aGlzLmNoYW5nZVNwZWVkKDAuMCk7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgPSAwLjA7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAyO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB9fSk7XG4gICAgICAgIHRsLnNldCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHsgeDogMSwgeTogMSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIGR1cmF0aW9uLCB7IHZhbHVlOiAwLjAsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwuZnJvbVRvKHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLCBkdXJhdGlvbiwgeyB2YWx1ZTogMC44NSB9LCB7IHZhbHVlOiAtMC4xNSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLnZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9IDAuMDtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTcGVlZCgpO1xuICAgIH1cblxuICAgIG9uSGlkZGVuVUkgKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcblxuICAgICAgICAvLyB0aGlzLnVwZGF0ZURpdmlzaW9ucygzLCAxKTtcbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10sIDIsIHsgdmFsdWU6IDEsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RGYWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQWJzdHJhY3RGYWNlLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZ3MpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnc3RyaW5nJykgc3RyaW5ncyA9IFtzdHJpbmdzXVxuICB2YXIgZXhwcnMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKVxuICB2YXIgcGFydHMgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoLTE7IGkrKykge1xuICAgIHBhcnRzLnB1c2goc3RyaW5nc1tpXSwgZXhwcnNbaV0gfHwgJycpXG4gIH1cbiAgcGFydHMucHVzaChzdHJpbmdzW2ldKVxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbHNsaWZ5L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc291cmNlZCBmcm9tOlxuLy8gaHR0cDovL3d3dy5sZWFuYmFja3BsYXllci5jb20vdGVzdC9oNW10Lmh0bWxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS1taW1lL2Jsb2IvbWFzdGVyL3R5cGVzLmpzb25cbnZhciBtaW1lVHlwZXMgPSByZXF1aXJlKCcuL21pbWUtdHlwZXMuanNvbicpXG5cbnZhciBtaW1lTG9va3VwID0ge31cbk9iamVjdC5rZXlzKG1pbWVUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciBleHRlbnNpb25zID0gbWltZVR5cGVzW2tleV1cbiAgZXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChleHQpIHtcbiAgICBtaW1lTG9va3VwW2V4dF0gPSBrZXlcbiAgfSlcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9va3VwIChleHQpIHtcbiAgaWYgKCFleHQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3BlY2lmeSBleHRlbnNpb24gc3RyaW5nJylcbiAgaWYgKGV4dC5pbmRleE9mKCcuJykgPT09IDApIHtcbiAgICBleHQgPSBleHQuc3Vic3RyaW5nKDEpXG4gIH1cbiAgcmV0dXJuIG1pbWVMb29rdXBbZXh0LnRvTG93ZXJDYXNlKCldXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWZ1bmN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXVkaW9Db250ZXh0XG5mdW5jdGlvbiBjcmVhdGVBdWRpb0NvbnRleHQgKCkge1xuICB2YXIgQXVkaW9DdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gIHJldHVybiBuZXcgQXVkaW9DdG9yKClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9hdWRpby1jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsb29rdXAgPSByZXF1aXJlKCdicm93c2VyLW1lZGlhLW1pbWUtdHlwZScpXG52YXIgYXVkaW9cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NyY1BsYXlhYmxlXG5mdW5jdGlvbiBpc1NyY1BsYXlhYmxlIChzcmMpIHtcbiAgaWYgKCFzcmMpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NyYyBjYW5ub3QgYmUgZW1wdHknKVxuICB2YXIgdHlwZVxuICBpZiAodHlwZW9mIHNyYy5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyA8c291cmNlPiBlbGVtZW50XG4gICAgdHlwZSA9IHNyYy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gJ2Zvby5tcDMnIHN0cmluZ1xuICAgIHZhciBleHQgPSBleHRlbnNpb24oc3JjKVxuICAgIGlmIChleHQpIHR5cGUgPSBsb29rdXAoZXh0KVxuICB9IGVsc2Uge1xuICAgIC8vIHsgc3JjOiAnZm9vLm1wMycsIHR5cGU6ICdhdWRpby9tcGVnOyBjb2RlY3MuLid9XG4gICAgdHlwZSA9IHNyYy50eXBlXG4gIH1cblxuICAvLyBXZSBoYXZlIGFuIHVua25vd24gZmlsZSBleHRlbnNpb24gb3JcbiAgLy8gYSA8c291cmNlPiB0YWcgd2l0aG91dCBhbiBleHBsaWNpdCB0eXBlLFxuICAvLyBqdXN0IGxldCB0aGUgYnJvd3NlciBoYW5kbGUgaXQhXG4gIGlmICghdHlwZSkgcmV0dXJuIHRydWVcblxuICAvLyBoYW5kbGUgXCJub1wiIGVkZ2UgY2FzZSB3aXRoIHN1cGVyIGxlZ2FjeSBicm93c2Vycy4uLlxuICAvLyBodHRwczovL2dyb3Vwcy5nb29nbGUuY29tL2ZvcnVtLyMhdG9waWMvZ29vZ2xlLXdlYi10b29sa2l0LWNvbnRyaWJ1dG9ycy9hOFV5MGJYcTFIb1xuICBpZiAoIWF1ZGlvKSBhdWRpbyA9IG5ldyB3aW5kb3cuQXVkaW8oKVxuICB2YXIgY2FucGxheSA9IGF1ZGlvLmNhblBsYXlUeXBlKHR5cGUpLnJlcGxhY2UoL25vLywgJycpXG4gIHJldHVybiBCb29sZWFuKGNhbnBsYXkpXG59XG5cbm1vZHVsZS5leHBvcnRzLmNyZWF0ZUVycm9yID0gY3JlYXRlRXJyb3JcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yIChzb3VyY2VzKSB7XG4gIC8vIEFsbCBzb3VyY2VzIGFyZSB1bnBsYXlhYmxlXG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFueSBvZiB0aGUgZm9sbG93aW5nIHNvdXJjZXM6XFxuICAgICcgK1xuICAgICAgc291cmNlcy5qb2luKCcsICcpICsgJ1xcbicgK1xuICAgICAgJ1RyeSB1c2luZyBhbiBhcnJheSBvZiBPR0csIE1QMyBhbmQgV0FWLicpXG4gIGVyci50eXBlID0gJ0FVRElPX0ZPUk1BVCdcbiAgcmV0dXJuIGVyclxufVxuXG5mdW5jdGlvbiBleHRlbnNpb24gKGRhdGEpIHtcbiAgdmFyIGV4dElkeCA9IGRhdGEubGFzdEluZGV4T2YoJy4nKVxuICBpZiAoZXh0SWR4IDw9IDAgfHwgZXh0SWR4ID09PSBkYXRhLmxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIGRhdGEuc3Vic3RyaW5nKGV4dElkeCArIDEpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvY2FuLXBsYXktc3JjLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhdWRpb0NvbnRleHQpIHtcbiAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcgJiZcbiAgICAgIHR5cGVvZiBhdWRpb0NvbnRleHQucmVzdW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYXVkaW9Db250ZXh0LnJlc3VtZSgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9yZXN1bWUtY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgcmFuZG9tRnJvbUFycmF5IGZyb20gJy4vdXRpbHMvcmFuZG9tRnJvbUFycmF5JztcblxuY2xhc3MgRmFjZXNDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgICAgdGhpcy5mYWNlcyA9IHt9O1xuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMSwgMTI1KSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMSwgMjUpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBvbiBldmVudHNcbiAgICAgICAgdGhpcy5vbkxvd0tpY2sgPSA6OnRoaXMub25Mb3dLaWNrO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vblVJSGlkZGVuID0gOjp0aGlzLm9uVUlIaWRkZW47XG4gICAgICAgIHRoaXMub25Tb3VuZEVuZCA9IDo6dGhpcy5vblNvdW5kRW5kO1xuXG4gICAgICAgIC8vIGJsYWNrIG1vZGVzXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwgPSA6OnRoaXMuYmxhY2tNb2RlVmVydGljYWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlSG9yaXpvbnRhbCA9IDo6dGhpcy5ibGFja01vZGVIb3Jpem9udGFsO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcCA9IDo6dGhpcy5ibGFja01vZGVUdW5uZWxUb3A7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbEJvdHRvbTtcbiAgICAgICAgdGhpcy5ibGFja01vZGVCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlQm90dG9tO1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVCb3R0b20sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVhY3Rpb25zXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zID0gOjogdGhpcy51cGRhdGVEaXZpc2lvbnM7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlID0gOjp0aGlzLnNldEJsYWNrTW9kZTtcblxuICAgICAgICB0aGlzLnJlYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zLFxuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGVcbiAgICAgICAgXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkxPV0tJQ0ssIHRoaXMub25Mb3dLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkVORCwgdGhpcy5vblNvdW5kRW5kKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uVUlIaWRkZW4pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyICggaWQsIGZhY2UgKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbaWRdID0gZmFjZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGZhY2UpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGl2aXNpb25zICggbWluLCBtYXggKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IFswXTtcblxuICAgICAgICBmb3IgKCBsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrPTQgKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIGxldCBpID0gbWF4OyBpID49IG1pbjsgaS09IDQgKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdmlzaW9ucy5wdXNoKDApO1xuXG4gICAgICAgIHJldHVybiBkaXZpc2lvbnM7XG4gICAgfVxuXG4gICAgdXBkYXRlRGl2aXNpb25zICgpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVEaXZpc2lvblggPSB0aGlzLmZpbmREaXZpc2lvbnModGhpcy5kaXZpc2lvbnMueCwgdGhpcy5kaXZpc2lvbnMubGFzdFgsIDEyKTtcbiAgICAgICAgY29uc3QgcmRtWEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVEaXZpc2lvblgubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgZGl2aXNpb25YID0gcG9zc2libGVEaXZpc2lvblhbcmRtWEluZGV4XTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucy5sYXN0WCA9IHRoaXMuZGl2aXNpb25zLnguaW5kZXhPZihkaXZpc2lvblgpO1xuXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlRGl2aXNpb25ZID0gdGhpcy5maW5kRGl2aXNpb25zKHRoaXMuZGl2aXNpb25zLnksIHRoaXMuZGl2aXNpb25zLmxhc3RZLCA0KTtcbiAgICAgICAgY29uc3QgcmRtWUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVEaXZpc2lvblkubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgZGl2aXNpb25ZID0gcG9zc2libGVEaXZpc2lvbllbcmRtWUluZGV4XTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucy5sYXN0WSA9IHRoaXMuZGl2aXNpb25zLnkuaW5kZXhPZihkaXZpc2lvblkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS51cGRhdGVEaXZpc2lvbnMoZGl2aXNpb25YLCBkaXZpc2lvblkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlc1trZXldLnNldFN0cmlwZXMoJ2hvcml6b250YWwnLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZERpdmlzaW9ucyAoIGFsbCwgY3VycmVudCwgcmFuZ2UgKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IGFsbC5tYXAoICggZGl2aXNpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIGluZGV4ID4gY3VycmVudCAtIDQgJiYgaW5kZXggPCBjdXJyZW50ICsgNCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2aXNpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkuZmlsdGVyKCAoIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkaXZpc2lvbnM7XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyAoIGRhdGEgKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy51aUhpZGRlbiB8fCB3aW5kb3cuc291bmRFbmRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXkgPT09ICdkJyApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ2UnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ3gnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG93S2ljayAoKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy51aUhpZGRlbiApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlYWN0aW9uID0gcmFuZG9tRnJvbUFycmF5KHRoaXMucmVhY3Rpb25zKTtcbiAgICAgICAgcmVhY3Rpb24oKTtcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuRU5EKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9fSk7XG5cblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0ub25FbmQoKSwgMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJsYWNrTW9kZSAoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBibGFja01vZGUgPSByYW5kb21Gcm9tQXJyYXkodGhpcy5ibGFja01vZGVzKTtcbiAgICAgICAgYmxhY2tNb2RlKCk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVmVydGljYWwgKCkge1xuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10uaGlkZSgpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLmhpZGUoKTtcbiAgICAgICAgdGhpcy5mYWNlc1sndG9wJ10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydib3R0b20nXS5zaG93KCk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlSG9yaXpvbnRhbCAoKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS5zaG93KCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWyd0b3AnXS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLmhpZGUoKTtcbiAgICB9XG5cbiAgICBibGFja01vZGVUdW5uZWxUb3AgKCkge1xuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sndG9wJ10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydib3R0b20nXS5oaWRlKCk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsQm90dG9tICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sncmlnaHQnXS5zaG93KCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3RvcCddLmhpZGUoKTtcbiAgICAgICAgdGhpcy5mYWNlc1snYm90dG9tJ10uc2hvdygpO1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUJvdHRvbSAoKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10uaGlkZSgpO1xuICAgICAgICB0aGlzLmZhY2VzWyd0b3AnXS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLnNob3coKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZSAoKSB7XG4gICAgICAgIGNvbnN0IHJkbSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgLy8gY29uc3QgZmFjZSA9IHRoaXMuZmFjZXNbJ2JvdHRvbSddO1xuXG4gICAgICAgIC8vIGNvbnN0IHRvID0gZmFjZS51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLnkgKiAyO1xuXG4gICAgICAgIC8vIFR3ZWVuTWF4LnRvKGZhY2Uuc2NhbGUsIDAuMywgeyB5OiAyLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgICAgIC8vIFR3ZWVuTWF4LnRvKHRoaXMuZmFjZXNbJ2xlZnQnXS51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAwLjMsIHsgeTogdG8sIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5mYWNlc1sncmlnaHQnXS51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAwLjMsIHsgeTogdG8sIGVhc2U6IHRoaXMuZWFzZSB9KTtcblxuICAgICAgICAvLyBjb25zdCB0b1BvcyA9IHRoaXMuZmFjZXNbJ2xlZnQnXS5wb3NpdGlvbi54ICogMjtcbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5mYWNlc1snbGVmdCddLnBvc2l0aW9uLCAwLjMsIHsgeDogdG9Qb3MsIGVhc2U6IHRoaXMuZWFzZSB9KTtcblxuICAgICAgICAvLyBjb25zdCB0b1Bvc1JpZ2h0ID0gdGhpcy5mYWNlc1sncmlnaHQnXS5wb3NpdGlvbi54ICogMjtcbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5mYWNlc1sncmlnaHQnXS5wb3NpdGlvbiwgMC4zLCB7IHg6IHRvUG9zUmlnaHQsIGVhc2U6IHRoaXMuZWFzZSB9KTtcblxuICAgICAgICAvLyBjb25zdCBzY2FsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpIC8gMTAgKyAwLjU7XG5cbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiBzY2FsZSwgeTogc2NhbGUsIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcblxuICAgICAgICAvLyBpZiAoIHJkbSA8IDAuMzMgKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmZhY2VzWydsZWZ0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmICggcmRtIDwgMC42NiApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ3RvcCddLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmZhY2VzWydib3R0b20nXS51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5mYWNlc1sndG9wJ10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmZhY2VzWydsZWZ0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG9uVUlIaWRkZW4gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25VSUhpZGRlbicpO1xuXG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS5zaG93KCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10uc2hvdygpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0ucmVzZXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmRpdmlzaW9ucy5sYXN0WSA9IDA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNlc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9GYWNlc0NvbnRyb2xsZXIuanMiLCIvKipcbiAqIE1vdXNlIE1hbmFnZXJcbiAqL1xuXG5jbGFzcyBNb3VzZU1hbmFnZXIge1xuXG5cbiAgICBzdGF0aWMgc3RhcnQoIGNoZWNrTW91c2VTcGVlZCA9IGZhbHNlICkge1xuXG4gICAgICAgIC8vIHNwZWVkXG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWSA9IDA7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VMYXN0WSA9IDA7XG5cbiAgICAgICAgLy8gZGlyZWN0aW9uXG4gICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMDtcblxuICAgICAgICAvLyBwb3NpdGlvblxuICAgICAgICB3aW5kb3cubW91c2VYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlWSA9IDA7XG5cbiAgICAgICAgaWYoY2hlY2tNb3VzZVNwZWVkKSB3aW5kb3cuc2V0SW50ZXJ2YWwoIE1vdXNlTWFuYWdlci5nZXRTcGVlZCwgMzAgKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgTW91c2VNYW5hZ2VyLm1vdmUgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbW92ZShlKSB7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgd2luZG93Lm1vdXNlWSA9IGUuY2xpZW50WTtcblxuICAgICAgICBNb3VzZU1hbmFnZXIuZ2V0RGlyZWN0aW9uKGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREaXJlY3Rpb24oZSkge1xuXG4gICAgICAgIC8vIHhcbiAgICAgICAgaWYgKHdpbmRvdy5tb3VzZVggPCBlLnBhZ2VYKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDE7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5tb3VzZVggPiBlLnBhZ2VYKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IC0xO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMDtcblxuICAgICAgICAvLyB5XG4gICAgICAgIGlmICh3aW5kb3cubW91c2VZIDwgZS5wYWdlWSlcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAxO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubW91c2VZID4gZS5wYWdlWSlcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAtMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNwZWVkKCkge1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFggPSB3aW5kb3cubW91c2VYIC0gd2luZG93Lm1vdXNlTGFzdFg7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWSA9IHdpbmRvdy5tb3VzZVkgLSB3aW5kb3cubW91c2VMYXN0WTtcblxuICAgICAgICB3aW5kb3cubW91c2VMYXN0WCA9IHdpbmRvdy5tb3VzZVg7XG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RZID0gd2luZG93Lm1vdXNlWTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdXNlTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIEtleWJvYXJkQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgIG9uS2V5VXAgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHsga2V5IH0pO1xuXG4gICAgICAgIGlmICgga2V5ID09PSAnICcgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFVVApO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04pO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHsga2V5IH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnYmFja2dyb3VuZCcpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQmFja2dyb3VuZC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBCb3R0b20gZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JvdHRvbScpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygtMywgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMS4wO1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnMic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzMnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMSc7XG5cbiAgICAgICAgdGhpcy50b2dnbGVQb3NpdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uICgpIHtcblxuICAgICAgICAvLyB0aGlzLnNjYWxlLnkgPSAyO1xuXG4gICAgICAgIC8vIHRoaXMudG9nZ2xlUG9zaXRpb24gPSAhdGhpcy50b2dnbGVQb3NpdGlvbjtcblxuICAgICAgICAvLyBjb25zdCB0byA9IHRoaXMudG9nZ2xlUG9zaXRpb24gPyB0aGlzLnBvc2l0aW9uLnkgKiAwLjUgOiB0aGlzLnBvc2l0aW9uLnkgKiAyO1xuXG4gICAgICAgIC8vIFR3ZWVuTWF4LnRvKHRoaXMucG9zaXRpb24sIHRoaXMuZHVyYXRpb24sIHsgeTogdG8sIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgc3VwZXIub25TdGFydCgpO1xuXG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKHRoaXMuc3RhcnREaXZpc2lvbnMueCwgdGhpcy5zdGFydERpdmlzaW9ucy55LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICBzdXBlci5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQm90dG9tLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIExlZnQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2xlZnQnKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAyMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzQnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICcxJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzMnO1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24gKCkge1xuXG5cblxuICAgICAgICAvLyB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gIXRoaXMudG9nZ2xlUG9zaXRpb247XG5cbiAgICAgICAgLy8gY29uc3QgdG8gPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy5wb3NpdGlvbi54ICogMC41IDogdGhpcy5wb3NpdGlvbi54ICogMjtcbiAgICAgICAgLy8gY29uc3QgdG9TcXVhcmUgPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLnggKiAwLjUgOiB0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUueCAqIDI7XG5cbiAgICAgICAgLy8gVHdlZW5NYXgudG8odGhpcy5wb3NpdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyB4OiB0bywgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgICAgICAvLyBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHRoaXMuZHVyYXRpb24sIHsgeDogdG9TcXVhcmUsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0xlZnQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgUmlnaHQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ3JpZ2h0JywgVEhSRUUuQmFja1NpZGUpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMjAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzYnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICcxJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzMnO1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24gKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gIXRoaXMudG9nZ2xlUG9zaXRpb247XG5cbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy5wb3NpdGlvbi54ICogMC41IDogdGhpcy5wb3NpdGlvbi54ICogMjtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnBvc2l0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IHg6IHRvLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgVG9wIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICd0b3AnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMjAsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc4JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMyc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICcxJztcblxuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24gKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBvc2l0aW9uID0gIXRoaXMudG9nZ2xlUG9zaXRpb247XG5cbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnRvZ2dsZVBvc2l0aW9uID8gdGhpcy5wb3NpdGlvbi55ICogMC41IDogdGhpcy5wb3NpdGlvbi55ICogMjtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnBvc2l0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IHk6IHRvLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIHN1cGVyLm9uU3RhcnQoKTtcblxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnModGhpcy5zdGFydERpdmlzaW9ucy54LCB0aGlzLnN0YXJ0RGl2aXNpb25zLnksIGZhbHNlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1RvcC5qcyIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnd2ViLWF1ZGlvLXBsYXllcic7XG5pbXBvcnQgY3JlYXRlQW5hbHlzZXIgZnJvbSAnd2ViLWF1ZGlvLWFuYWx5c2VyJztcbmltcG9ydCBhdmVyYWdlIGZyb20gJ2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlJztcbmltcG9ydCBSYW5nZSBmcm9tICcuL1JhbmdlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbi8vIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG5cbmNsYXNzIFNvdW5kTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYmFzcyA9IDA7XG4gICAgICAgIHRoaXMubWlkQmFzcyA9IDA7XG4gICAgICAgIHRoaXMudm9pY2UgPSAwO1xuICAgICAgICB0aGlzLmRydW0gPSAwO1xuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hc3NldHMgPSAnL2Fzc2V0cy9zb3VuZHMnO1xuICAgICAgICB0aGlzLnNvdXJjZXMgPSB7XG4gICAgICAgICAgICBpbnRybzogJ2ludHJvLm1wMycsXG4gICAgICAgICAgICAvLyB4cDogJ2RlYnVnLm1wMycsXG4gICAgICAgICAgICB4cDogJ3hwLm1wMycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IDo6dGhpcy5zdGFydDtcbiAgICAgICAgdGhpcy5vblNwYWNlSG9sZCA9IDo6dGhpcy5vblNwYWNlSG9sZDtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uU3BhY2VEb3duID0gOjp0aGlzLm9uU3BhY2VEb3duO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcblxuICAgICAgICB0aGlzLmluaXRTb3VuZCgpO1xuICAgICAgICAvLyB0aGlzLmluaXRHdWkoKTtcblxuICAgICAgICBjb25zdCBsb3dLaWNrID0gbmV3IFJhbmdlKCdsb3dLaWNrJywgWzExMCwgMTMwXSwgNjAwLCBFdmVudHMuU09VTkRTLkxPV0tJQ0spO1xuXG4gICAgICAgIHRoaXMucmFuZ2VzID0gW2xvd0tpY2tdO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5TVEFSVCwgdGhpcy5zdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgdGhpcy5vblNwYWNlSG9sZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgaW5pdEd1aSAoKSB7XG4gICAgICAgIHRoaXMuc291bmRHdWkgPSB3aW5kb3cuZ3VpLmFkZEZvbGRlcignU291bmQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXVzZSA9IHRoaXMuc291bmRHdWkuYWRkKHRoaXMsICdwYXVzZScpO1xuICAgICAgICBwYXVzZS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZSkgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0U291bmQgKCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZXMpLm1hcCggKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhdWRpbzogbnVsbCxcbiAgICAgICAgICAgICAgICBhbmFseXNlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBub2RlOiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSA9IDA7XG4gICAgICAgICAgICBhdWRpby5jcm9zc09yaWdpbiA9ICdBbm9ueW1vdXMnO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQgPyBuZXcgQXVkaW9Db250ZXh0KCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuYWx5c2VyID0gY3JlYXRlQW5hbHlzZXIoYXVkaW8sIGF1ZGlvQ29udGV4dCwgeyBhdWRpYmxlOiB0cnVlLCBzdGVyZW86IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmFuYWx5c2VyID0gYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubm9kZSA9IGFuYWx5c2VyLmFuYWx5c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5DQU5QTEFZLCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5TT1VORFMuRU5ELCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gYCR7dGhpcy5hc3NldHN9LyR7dGhpcy5zb3VyY2VzW2tleV19YDtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYXVkaW8gPSBhdWRpbztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgaWYgKCBwbGF5ZXIubG9hZGVkICkge1xuICAgICAgICAgICAgcGxheWVyLmF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXJzWyd4cCddLmxvYWRlZCApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYW5hbHlzZXIsIG5vZGUgfSA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICAgICAgY29uc3QgZnJlcXMgPSBhbmFseXNlci5mcmVxdWVuY2llcygpO1xuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnJhbmdlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gYXZlcmFnZShub2RlLCBmcmVxcywgcmFuZ2UuZnJlcXNbMF0sIHJhbmdlLmZyZXFzWzFdKTtcblxuICAgICAgICAgICAgICAgIHJhbmdlLnVwZGF0ZShsZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICBhdWRpby52b2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihwcm9ncmVzcyAqIDAuNSwgMSkpO1xuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGF1ZGlvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG5cbiAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoIHRoaXMuaXNTcGFjZURvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgY29uc3QgeyBhdWRpbzogaW50cm8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcbiAgICAgICAgY29uc3QgeyBhdWRpbzogeHAgfSA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICB4cC52b2x1bWUgPSAxO1xuICAgICAgICB4cC5wbGF5KCk7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgdGwudG8oaW50cm8sIDAuNSwgeyB2b2x1bWU6IDAsIGVhc2U6IEV4cG8uZWFzZU91dCwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgaW50cm8ucGF1c2UoKTtcbiAgICAgICAgfX0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VuZE1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ2YXIgcXVldWUgPSB7fTtcblxuLypcbioqIGFsbG93IGFueSBudW1iZXIgdmFyaWFibGUgdG8gYmUgc21vb3RoZWRcbiogQHBhcmFtIHtzdHJpbmd9IGlkIC0gYSB1bmlxdWUgbmFtZSBmb3IgeW91ciBzbW9vdGhpbmdcbiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdGhlIHZhbHVlIHlvdSB3YW50IHRvIGJlIHNtb290aGVkXG4qIEBwYXJhbSB7bnVtYmVyfSBjb2VmZiAob3B0aW9uYWwpIC0gdGhlIHNtb290aGluZyBjb2VmZmljaWVudCwgdGhlIHNtYWxsZXIsIHRoZSBzbG93ZXIuIERlZmF1bHQ6IDAuMVxuKiBAcGFyYW0ge2Jvb2xlYW59IGxvZyAob3B0aW9uYWwpIC0gZWl0aGVyIHRoZSBzbW9vdGhlZCB2YWx1ZSBpcyBsb2cgaW4gdGhlIGNvbnNvbGUuIERlZmF1bHQ6IGZhbHNlXG4qIEBwYXJhbSB7bnVtYmVyfSBpbml0IChvcHRpb25hbCkgLSB0aGUgc3RhcnRpbmcgdmFsdWUgb2YgdGhlIHNtb290aGluZy4gRGVmYXVsdDogMFxuKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBzbW9vdGhlZCB2YWx1ZVxuKiovXG5cbmZ1bmN0aW9uIHNtb290aCAoIGlkLCB2YWx1ZSwgY29lZmYgPSAwLjEsIGxvZyA9IGZhbHNlLCBpbml0ID0gMCApIHtcblx0aWYgKCBxdWV1ZVtpZF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRxdWV1ZVtpZF0gKz0gKCB2YWx1ZSAtIHF1ZXVlW2lkXSApICogY29lZmY7XG5cblx0XHRpZiAoIGxvZyApIHtcblx0XHRcdGNvbnNvbGUubG9nKGAlY1Ntb290aCAke2lkfSA6OiAke3F1ZXVlW2lkXX1gLCAnY29sb3I6IGJsdWU7Jyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZCA9PT0gJycgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Ntb290aCA6OiBpZCBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdFx0fVxuXG5cdFx0cXVldWVbaWRdID0gaW5pdDtcblx0fVxuXG5cdHJldHVybiBxdWV1ZVtpZF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbW9vdGg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcblxuY2xhc3MgVUkge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLiR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS1pbnRybycpO1xuICAgICAgICB0aGlzLiRsb2dvID0gdGhpcy4kd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX2xvZ28nKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uID0gdGhpcy4kd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX2FjdGlvbicpO1xuICAgICAgICB0aGlzLiRhY3Rpb25GaWxsID0gdGhpcy4kd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uX19maWxsJyk7XG4gICAgICAgIHRoaXMuJHR1dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLXR1dG8nKTtcbiAgICAgICAgdGhpcy4kY3JlZGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0tY3JlZGl0cycpO1xuXG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhUaW1lID0gMzAwMDtcblxuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5taW5GaWxsID0gMC4wMTtcbiAgICAgICAgdGhpcy5tYXhGaWxsID0gMTtcbiAgICAgICAgdGhpcy5maWxsID0gdGhpcy5taW5GaWxsO1xuXG4gICAgICAgIHRoaXMubWF4U2NhbGUgPSAxLjU7XG4gICAgICAgIHRoaXMubWluU2NhbGUgPSAxO1xuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5taW5TY2FsZTtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMucmVzZXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSA6OnRoaXMub25Db21wbGV0ZTtcblxuICAgICAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIDEuNSwge1xuICAgICAgICAgICAgb3BhY2l0eTogLTEsXG4gICAgICAgICAgICBwcm9ncmVzczogMSxcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLm1heFNjYWxlLFxuICAgICAgICAgICAgZmlsbDogdGhpcy5tYXhGaWxsLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gOjp0aGlzLm9uS2V5RG93bjtcbiAgICAgICAgdGhpcy5vbktleVVwID0gOjp0aGlzLm9uS2V5VXA7XG4gICAgICAgIHRoaXMub25TcGFjZURvd24gPSA6OnRoaXMub25TcGFjZURvd247XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vbkVuZFhQID0gOjp0aGlzLm9uRW5kWFA7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZRE9XTiwgdGhpcy5vbktleURvd24pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlVUCwgdGhpcy5vbktleVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCwgdGhpcy5vblNwYWNlVXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04sIHRoaXMub25TcGFjZURvd24pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5FTkQsIHRoaXMub25FbmRYUCk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgeyBwcm9ncmVzczogdGhpcy5wcm9ncmVzcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLnJlc2V0dGVkICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGFjdGlvbkZpbGwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy4kYWN0aW9uRmlsbC5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBgc2tld1goLTIwZGVnKSBzY2FsZVgoJHt0aGlzLmZpbGx9KWA7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9nby5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLiRsb2dvLnN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGBzY2FsZSgke3RoaXMuc2NhbGV9KWA7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9nby5zdHlsZS5vcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFjdGlvbi5zdHlsZS5vcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzY2FsZSBjcmVkaXRzXG4gICAgICAgICAgICAgICAgdGhpcy4kY3JlZGl0cy5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLiRjcmVkaXRzLnN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGBzY2FsZSgke3RoaXMuc2NhbGV9KWA7XG4gICAgICAgICAgICAgICAgdGhpcy4kY3JlZGl0cy5zdHlsZS5vcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLiR3cmFwcGVyLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy4kd3JhcHBlciwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvbktleURvd24gKCBkYXRhICkge1xuXG4gICAgfVxuXG4gICAgb25LZXlVcCAoIGRhdGEgKSB7XG5cbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzRG93biAmJiAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSgzKTtcbiAgICAgICAgICAgIHRoaXMudGwucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc0Rvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSgxKTtcbiAgICAgICAgICAgIHRoaXMudGwucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZSAoKSB7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICggdGhpcy5yZXNldHRlZCApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuVUkuSElEREVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGFjdGlvbkZpbGwuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJzEwMCUnO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuU1RBUlQpO1xuXG4gICAgICAgIGlmICggIXRoaXMucmVzZXR0ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUdXRvcmlhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheVR1dG9yaWFsICgpIHtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSA0O1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5VSS5ISURERU4pO1xuICAgICAgICB9fSk7XG4gICAgICAgIHRsLmZyb21Ubyh0aGlzLiR0dXRvLCAwLjMsIHsgY3NzOiB7IHNjYWxlOiAwLjggfX0sIHsgY3NzOiB7IHNjYWxlOiB0aGlzLm1heFNjYWxlIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kdHV0bywgZHVyYXRpb24gKiAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0bC50byh0aGlzLiR0dXRvLCBkdXJhdGlvbiAqIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgZHVyYXRpb24gKiAwLjUpO1xuICAgIH1cblxuICAgIGRpc3BsYXlDcmVkaXRzICgpIHtcbiAgICAgICAgdGhpcy4kY3JlZGl0cy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMjtcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuZnJvbVRvKHRoaXMuJGNyZWRpdHMsIGR1cmF0aW9uLCB7IGNzczogeyBzY2FsZTogMC45IH19LCB7IGNzczogeyBzY2FsZTogMS4wIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kY3JlZGl0cywgZHVyYXRpb24sIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMucmVzZXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5tYXhTY2FsZSA9IDEuNTtcbiAgICAgICAgdGhpcy5taW5TY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLm1pblNjYWxlO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIDEuNSwge1xuICAgICAgICAgICAgb3BhY2l0eTogLTEsXG4gICAgICAgICAgICBwcm9ncmVzczogMSxcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLm1heFNjYWxlLFxuICAgICAgICAgICAgZmlsbDogdGhpcy5tYXhGaWxsLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRW5kWFAgKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlDcmVkaXRzKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdWkuanMiLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yYWYvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIFRIUkVFICkge1xuXHQvKipcblx0ICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cblx0ICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuXHQgKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuXHQgKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcblx0ICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuXHQgKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuXHRmdW5jdGlvbiBPcmJpdENvbnRyb2xzKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdFx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0XHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluWm9vbSA9IDA7XG5cdFx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdFx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdFx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdFx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdFx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0XHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdFx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHRcdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdFx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHRcdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHRcdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdFx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHRcdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0XHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdFx0Ly8gTW91c2UgYnV0dG9uc1xuXHRcdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0XHQvLyBmb3IgcmVzZXRcblx0XHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHRcdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0XHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHRcdC8vXG5cdFx0Ly8gcHVibGljIG1ldGhvZHNcblx0XHQvL1xuXG5cdFx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH07XG5cblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjYWxlID0gMTtcblx0XHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdFx0fTtcblxuXHRcdC8vXG5cdFx0Ly8gaW50ZXJuYWxzXG5cdFx0Ly9cblxuXHRcdHZhciBzY29wZSA9IHRoaXM7XG5cblx0XHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdFx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0XHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0XHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0XHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdFx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0XHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHRcdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHRcdHZhciBzY2FsZSA9IDE7XG5cdFx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHRcdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0fTtcblxuXHRPcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblx0T3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcmJpdENvbnRyb2xzO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBPcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdFx0Y2VudGVyOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRub1pvb206IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9Sb3RhdGU6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9QYW46IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9LZXlzOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0gKTtcblxuXHRyZXR1cm4gT3JiaXRDb250cm9scztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGhyZWUtb3JiaXQtY29udHJvbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVxdWVuY3lUb0luZGV4ID0gcmVxdWlyZSgnYXVkaW8tZnJlcXVlbmN5LXRvLWluZGV4JylcblxubW9kdWxlLmV4cG9ydHMgPSBhbmFseXNlckZyZXF1ZW5jeUF2ZXJhZ2UuYmluZChudWxsLCAyNTUpXG5tb2R1bGUuZXhwb3J0cy5mbG9hdERhdGEgPSBhbmFseXNlckZyZXF1ZW5jeUF2ZXJhZ2UuYmluZChudWxsLCAxKVxuXG5mdW5jdGlvbiBhbmFseXNlckZyZXF1ZW5jeUF2ZXJhZ2UgKGRpdiwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzLCBtaW5IeiwgbWF4SHopIHtcbiAgdmFyIHNhbXBsZVJhdGUgPSBhbmFseXNlci5jb250ZXh0LnNhbXBsZVJhdGVcbiAgdmFyIGJpbkNvdW50ID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnRcbiAgdmFyIHN0YXJ0ID0gZnJlcXVlbmN5VG9JbmRleChtaW5Ieiwgc2FtcGxlUmF0ZSwgYmluQ291bnQpXG4gIHZhciBlbmQgPSBmcmVxdWVuY3lUb0luZGV4KG1heEh6LCBzYW1wbGVSYXRlLCBiaW5Db3VudClcbiAgdmFyIGNvdW50ID0gZW5kIC0gc3RhcnRcbiAgdmFyIHN1bSA9IDBcbiAgZm9yICg7IHN0YXJ0IDwgZW5kOyBzdGFydCsrKSB7XG4gICAgc3VtICs9IGZyZXF1ZW5jaWVzW3N0YXJ0XSAvIGRpdlxuICB9XG4gIHJldHVybiBjb3VudCA9PT0gMCA/IDAgOiAoc3VtIC8gY291bnQpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFtcCA9IHJlcXVpcmUoJ2NsYW1wJylcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVxdWVuY3lUb0luZGV4XG5mdW5jdGlvbiBmcmVxdWVuY3lUb0luZGV4IChmcmVxdWVuY3ksIHNhbXBsZVJhdGUsIGZyZXF1ZW5jeUJpbkNvdW50KSB7XG4gIHZhciBueXF1aXN0ID0gc2FtcGxlUmF0ZSAvIDJcbiAgdmFyIGluZGV4ID0gTWF0aC5yb3VuZChmcmVxdWVuY3kgLyBueXF1aXN0ICogZnJlcXVlbmN5QmluQ291bnQpXG4gIHJldHVybiBjbGFtcChpbmRleCwgMCwgZnJlcXVlbmN5QmluQ291bnQpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVkaW8tZnJlcXVlbmN5LXRvLWluZGV4L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2ZhY2VzL0JhY2tncm91bmQnO1xuaW1wb3J0IFRvcCBmcm9tICcuL2ZhY2VzL1RvcCc7XG5pbXBvcnQgTGVmdCBmcm9tICcuL2ZhY2VzL0xlZnQnO1xuaW1wb3J0IFJpZ2h0IGZyb20gJy4vZmFjZXMvUmlnaHQnO1xuaW1wb3J0IEJvdHRvbSBmcm9tICcuL2ZhY2VzL0JvdHRvbSc7XG5cbmltcG9ydCBzbW9vdGggZnJvbSAnLi9zbW9vdGgnO1xuaW1wb3J0IEZhY2VzQ29udHJvbGxlciBmcm9tICcuL0ZhY2VzQ29udHJvbGxlcic7XG5pbXBvcnQgTW91c2VNYW5hZ2VyIGZyb20gJy4vTW91c2VNYW5hZ2VyJztcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcblxuY29uc3QgZ2xzbGlmeSA9IHJlcXVpcmUoJ2dsc2xpZnknKTtcblxuY2xhc3MgQXBwIHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHdpbmRvdy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuc291bmRFbmRlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAweDAwMDAwMDtcblx0XHRcblx0XHQvLyB0aGlzLmd1aSA9IHdpbmRvdy5ndWkgPSBuZXcgZGF0LkdVSSgpO1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlciA9IG5ldyBGYWNlc0NvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRhaW5lciA9IHRoaXMuZmFjZXNDb250cm9sbGVyLmNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSgpO1xuXG4gICAgICAgIE1vdXNlTWFuYWdlci5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMuc291bmRNYW5hZ2VyID0gbmV3IFNvdW5kTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcblx0XHRcdFxuXHRcdHRoaXMucmVzaXplID0gOjp0aGlzLnJlc2l6ZTtcblx0XHR0aGlzLnVwZGF0ZSA9IDo6dGhpcy51cGRhdGU7XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMucmVzZXQgPSA6OnRoaXMucmVzZXQ7XG5cdFx0XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5iaW5kTGlzdGVuZXJzKCk7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcywgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogZmFsc2UgfSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcDtcblx0XHRcblx0XHRXQUdORVIudmVydGV4U2hhZGVyc1BhdGggPSAnanMvdmVydGV4LXNoYWRlcnMnO1xuXHRcdFdBR05FUi5mcmFnbWVudFNoYWRlcnNQYXRoID0gJ2pzL2ZyYWdtZW50LXNoYWRlcnMnO1xuXG5cdFx0dGhpcy5jb21wb3NlciA9IG5ldyBXQUdORVIuQ29tcG9zZXIodGhpcy5yZW5kZXJlcik7XG5cdFx0dGhpcy5jb21wb3Nlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG5cdFx0Y29uc3QgYmxvb21XaWR0aCA9IHdpbmRvdy5pc1RvdWNoID8gMjU2IDogNTEyO1xuICAgICAgICBjb25zdCBibG9vbUhlaWdodCA9IHdpbmRvdy5pc1RvdWNoID8gMjU2IDogNTEyO1xuXG5cdFx0dGhpcy5ibG9vbVBhc3MgPSBuZXcgV0FHTkVSLk11bHRpUGFzc0Jsb29tUGFzcyhibG9vbVdpZHRoLCBibG9vbUhlaWdodCk7XG5cdFx0dGhpcy5ibG9vbVBhc3MucGFyYW1zLnN0cmVuZ3RoID0gNTAuMDtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLmJsdXJBbW91bnQgPSA1LjtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLmFwcGx5Wm9vbUJsdXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuem9vbUJsdXJTdHJlbmd0aCA9IDMuMDtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLnpvb21CbHVyQ2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjIoIDAuNSwgMC41ICk7XG5cbiAgICAgICAgdGhpcy5yZ2JQYXNzID0gbmV3IFdBR05FUi5SR0JTcGxpdFBhc3MoKTtcbiAgICAgICAgdGhpcy5yZ2JQYXNzLnBhcmFtcy5kZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKDIwLCAyMCk7XG5cbiAgICAgICAgdGhpcy5ub2lzZVBhc3MgPSBuZXcgV0FHTkVSLk5vaXNlUGFzcygpO1xuICAgICAgICB0aGlzLm5vaXNlUGFzcy5wYXJhbXMuYW1vdW50ID0gMC4yNTtcbiAgICAgICAgdGhpcy5ub2lzZVBhc3MucGFyYW1zLnNwZWVkID0gMC4yO1xuXG4gICAgICAgIHRoaXMudmlnbmV0dGVQYXNzID0gbmV3IFdBR05FUi5WaWduZXR0ZVBhc3MoKTtcbiAgICAgICAgdGhpcy52aWduZXR0ZVBhc3MucGFyYW1zLmFtb3VudCA9IDAuNztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZnhhYVBhc3MgPSBuZXcgV0FHTkVSLkZYQUFQYXNzKCk7XG5cblx0XHR0aGlzLndpZHRoID0gd2luZG93LndpZHRoID0gNjA7XG5cdFx0dGhpcy5oZWlnaHQgPSB3aW5kb3cuaGVpZ2h0ID0gNjA7XG5cdFx0dGhpcy5sZW5ndGggPSB3aW5kb3cubGVuZ3RoID0gMTAwO1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4MDAwMDAwLCAwLjgsIHRoaXMubGVuZ3RoICogLjk4ICk7XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAzMDAwKTtcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDA7XG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jYW1lcmEpO1xuXG5cbiAgICAgICAgdGhpcy5hZGRDb250cm9scygpO1xuICAgICAgICB0aGlzLmFkZExpZ2h0cygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICBcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRiaW5kTGlzdGVuZXJzICgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLlNUQVJULCB0aGlzLm9uU3RhcnQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5VSS5ISURERU4sIHRoaXMub25VSUhpZGRlbik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5FTkQsIHRoaXMub25Tb3VuZEVuZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLkVORCwgdGhpcy5yZXNldCk7XG5cdH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnVpSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIHdpbmRvdy5zdGFydGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblVJSGlkZGVuICgpIHtcbiAgICAgICAgd2luZG93LnVpSGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXHRhZGRDb250cm9scyAoKSB7XG5cdFx0Y29uc3QgT3JiaXRDb250cm9scyA9IHJlcXVpcmUoJ3RocmVlLW9yYml0LWNvbnRyb2xzJykoVEhSRUUpO1xuXHRcdC8vIHRoaXMuY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdH1cblxuXHRhZGRMaWdodHMgKCkge1xuXHRcdHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4RkZGRkZGKTtcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICBcdFx0Y29uc3QgcG9pbnRMaWdodDMgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhmZmZmZmYsIDcuMSwgMCk7XG4gIFx0XHRwb2ludExpZ2h0My5wb3NpdGlvbi54ID0gMFxuICBcdFx0cG9pbnRMaWdodDMucG9zaXRpb24ueSA9IDQ7XG4gIFx0XHRwb2ludExpZ2h0My5wb3NpdGlvbi56ID0gNjA7XG5cbiAgXHRcdHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQzKTtcblx0fVxuXG5cdGFkZEVsZW1lbnRzICgpIHtcblx0XHR0aGlzLmRpdmlzYXRvciA9IDI7XG5cbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoLCAzMiwgMzIpO1xuICAgICAgICB0aGlzLm90aGVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmxlbmd0aCwgMzIsIDMyKTtcblxuXHRcdHRoaXMubGVmdFJpZ2h0R2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLmxlbmd0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvciksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvcikgKTtcblx0XHR0aGlzLnRvcEJvdHRvbUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5sZW5ndGgsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yKSAsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvcikpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yICogMiksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvciAqIDIpICk7XG5cblx0XHR0aGlzLmxlZnQgPSBuZXcgTGVmdCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5sZWZ0LnJvdGF0aW9uLnkgPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMubGVmdC5wb3NpdGlvbi54ID0gLXRoaXMud2lkdGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdsZWZ0JywgdGhpcy5sZWZ0KVxuXG5cdFx0dGhpcy5yaWdodCA9IG5ldyBSaWdodCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5yaWdodC5yb3RhdGlvbi55ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnJpZ2h0LnBvc2l0aW9uLnggPSB0aGlzLndpZHRoICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcigncmlnaHQnLCB0aGlzLnJpZ2h0KVxuXG5cdFx0dGhpcy5ib3R0b20gPSBuZXcgQm90dG9tKHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLmJvdHRvbS5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjU7XG4gICAgICAgIHRoaXMuYm90dG9tLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMuYm90dG9tLnBvc2l0aW9uLnkgPSAtdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdib3R0b20nLCB0aGlzLmJvdHRvbSlcblxuXHRcdHRoaXMudG9wID0gbmV3IFRvcCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy50b3Aucm90YXRpb24ueCA9IC1NYXRoLlBJICogMC41O1xuICAgICAgICB0aGlzLnRvcC5yb3RhdGlvbi56ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnRvcC5wb3NpdGlvbi55ID0gdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCd0b3AnLCB0aGlzLnRvcCk7XG5cblx0XHQvLyB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzLmJhY2tncm91bmRHZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdC8vIHRoaXMuYmFja2dyb3VuZC5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuICAvLyAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZCk7XG5cblx0XHR0aGlzLmZhY2VzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtdGhpcy5sZW5ndGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250YWluZXIuc2NhbGUueCA9IHRoaXMuZmFjZXNDb250YWluZXIuc2NhbGUueSA9ICAwLjE7XG5cblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmZhY2VzQ29udGFpbmVyKTtcblx0fVxuXG4gICAgcm90YXRlICgpIHtcbiAgICAgICAgY29uc3Qgc2VucyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgIH1cblxuXHR1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLnVpLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci51cGRhdGUoKTtcblxuXHRcdHRoaXMubGVmdC51cGRhdGUoKTtcblx0XHR0aGlzLnJpZ2h0LnVwZGF0ZSgpO1xuXHRcdHRoaXMuYm90dG9tLnVwZGF0ZSgpO1xuXHRcdHRoaXMudG9wLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5jb21wb3Nlci5yZXNldCgpO1xuXHRcdHRoaXMuY29tcG9zZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMuYmxvb21QYXNzKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMucmdiUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLm5vaXNlUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLnZpZ25ldHRlUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIudG9TY3JlZW4odGhpcy5meGFhUGFzcyk7XG5cblx0XHQvLyB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG5cblx0XHRyYWYodGhpcy51cGRhdGUpO1xuXHR9XG5cblx0cmVzaXplICgpIHtcblx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblx0fVxuXG59XG5cbm5ldyBBcHAoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL01haW4uanMiLCJpbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIFJhbmdlIHtcblxuICAgIGNvbnN0cnVjdG9yICggbmFtZSwgZnJlcXMsIGRlbHRhLCBldmVudCApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5mcmVxcyA9IGZyZXFzO1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XG5cbiAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCBsZXZlbCApIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lO1xuXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcblxuICAgICAgICBpZiAoIGRlbHRhID4gdGhpcy5kZWx0YSAmJiB0aGlzLmxldmVsID4gMC41ICkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KHRoaXMuZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdWRpby9taWRpXCI6IFtcblx0XHRcIm1pZFwiLFxuXHRcdFwibWlkaVwiLFxuXHRcdFwia2FyXCIsXG5cdFx0XCJybWlcIlxuXHRdLFxuXHRcImF1ZGlvL21wNFwiOiBbXG5cdFx0XCJtcDRhXCIsXG5cdFx0XCJtNGFcIlxuXHRdLFxuXHRcImF1ZGlvL21wZWdcIjogW1xuXHRcdFwibXBnYVwiLFxuXHRcdFwibXAyXCIsXG5cdFx0XCJtcDJhXCIsXG5cdFx0XCJtcDNcIixcblx0XHRcIm0yYVwiLFxuXHRcdFwibTNhXCJcblx0XSxcblx0XCJhdWRpby9vZ2dcIjogW1xuXHRcdFwib2dhXCIsXG5cdFx0XCJvZ2dcIixcblx0XHRcInNweFwiXG5cdF0sXG5cdFwiYXVkaW8vd2VibVwiOiBbXG5cdFx0XCJ3ZWJhXCJcblx0XSxcblx0XCJhdWRpby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rYVwiXG5cdF0sXG5cdFwiYXVkaW8veC1tcGVndXJsXCI6IFtcblx0XHRcIm0zdVwiXG5cdF0sXG5cdFwiYXVkaW8vd2F2XCI6IFtcblx0XHRcIndhdlwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcFwiOiBbXG5cdFx0XCIzZ3BcIlxuXHRdLFxuXHRcInZpZGVvLzNncHAyXCI6IFtcblx0XHRcIjNnMlwiXG5cdF0sXG5cdFwidmlkZW8vbXA0XCI6IFtcblx0XHRcIm1wNFwiLFxuXHRcdFwibXA0dlwiLFxuXHRcdFwibXBnNFwiXG5cdF0sXG5cdFwidmlkZW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGVnXCIsXG5cdFx0XCJtcGdcIixcblx0XHRcIm1wZVwiLFxuXHRcdFwibTF2XCIsXG5cdFx0XCJtMnZcIlxuXHRdLFxuXHRcInZpZGVvL29nZ1wiOiBbXG5cdFx0XCJvZ3ZcIlxuXHRdLFxuXHRcInZpZGVvL3F1aWNrdGltZVwiOiBbXG5cdFx0XCJxdFwiLFxuXHRcdFwibW92XCJcblx0XSxcblx0XCJ2aWRlby93ZWJtXCI6IFtcblx0XHRcIndlYm1cIlxuXHRdLFxuXHRcInZpZGVvL3gtZjR2XCI6IFtcblx0XHRcImY0dlwiXG5cdF0sXG5cdFwidmlkZW8veC1mbGlcIjogW1xuXHRcdFwiZmxpXCJcblx0XSxcblx0XCJ2aWRlby94LWZsdlwiOiBbXG5cdFx0XCJmbHZcIlxuXHRdLFxuXHRcInZpZGVvL3gtbTR2XCI6IFtcblx0XHRcIm00dlwiXG5cdF0sXG5cdFwidmlkZW8veC1tYXRyb3NrYVwiOiBbXG5cdFx0XCJta3ZcIixcblx0XHRcIm1rM2RcIixcblx0XHRcIm1rc1wiXG5cdF1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL21pbWUtdHlwZXMuanNvblxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFtcFxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA8IG1heFxuICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhbXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Zvci1lYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzTm9kZVxuXG5mdW5jdGlvbiBpc05vZGUgKHZhbCkge1xuICByZXR1cm4gKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpXG4gICAgPyBmYWxzZVxuICAgIDogKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ29iamVjdCcpXG4gICAgICA/ICh2YWwgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZSlcbiAgICAgIDogKHR5cGVvZiB2YWwubm9kZVR5cGUgPT09ICdudW1iZXInKSAmJlxuICAgICAgICAodHlwZW9mIHZhbC5ub2RlTmFtZSA9PT0gJ3N0cmluZycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZG9tL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG4gICwgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJylcbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3JFYWNoKFxuICAgICAgdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcbiAgICAsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICAgICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICAgICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICAgICAgfVxuICAgICAgfVxuICApXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID1cbiAgZ2xvYmFsLnBlcmZvcm1hbmNlICYmXG4gIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPyBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpXG4gIH0gOiBEYXRlLm5vdyB8fCBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuICtuZXcgRGF0ZVxuICB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmlnaHQtbm93L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RvbSA9IHJlcXVpcmUoJ2lzLWRvbScpXG52YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cy52aWRlbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICd2aWRlbycpXG5tb2R1bGUuZXhwb3J0cy5hdWRpbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICdhdWRpbycpXG5cbmZ1bmN0aW9uIHNpbXBsZU1lZGlhRWxlbWVudCAoZWxlbWVudE5hbWUsIHNvdXJjZXMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICBzb3VyY2VzID0gWyBzb3VyY2VzIF1cbiAgfVxuXG4gIHZhciBtZWRpYSA9IG9wdC5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpXG5cbiAgaWYgKG9wdC5sb29wKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2xvb3AnLCAnbG9vcCcpXG4gIGlmIChvcHQubXV0ZWQpIG1lZGlhLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnbXV0ZWQnKVxuICBpZiAob3B0LmF1dG9wbGF5KSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ2F1dG9wbGF5JylcbiAgaWYgKG9wdC5jb250cm9scykgbWVkaWEuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpXG4gIGlmIChvcHQuY3Jvc3NPcmlnaW4pIG1lZGlhLnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCBvcHQuY3Jvc3NPcmlnaW4pXG4gIGlmIChvcHQucHJlbG9hZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgb3B0LnByZWxvYWQpXG4gIGlmIChvcHQucG9zdGVyKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIG9wdC5wb3N0ZXIpXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcpIG1lZGlhLnNldEF0dHJpYnV0ZSgndm9sdW1lJywgb3B0LnZvbHVtZSlcblxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBtZWRpYS5hcHBlbmRDaGlsZChjcmVhdGVTb3VyY2VFbGVtZW50KHNvdXJjZSkpXG4gIH0pXG5cbiAgcmV0dXJuIG1lZGlhXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUVsZW1lbnQgKGRhdGEpIHtcbiAgaWYgKGlzRG9tKGRhdGEpKSByZXR1cm4gZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YSA9IHsgc3JjOiBkYXRhIH1cbiAgICBpZiAoZGF0YS5zcmMpIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb24oZGF0YS5zcmMpXG4gICAgICBpZiAoZXh0KSBkYXRhLnR5cGUgPSBsb29rdXAoZXh0KVxuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKVxuICBpZiAoZGF0YS5zcmMpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEuc3JjKVxuICBpZiAoZGF0YS50eXBlKSBzb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKVxuICByZXR1cm4gc291cmNlXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRhdGEuc3Vic3RyaW5nKGV4dElkeCArIDEpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cmltL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW9BbmFseXNlclxuXG5mdW5jdGlvbiBXZWJBdWRpb0FuYWx5c2VyKGF1ZGlvLCBjdHgsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFdlYkF1ZGlvQW5hbHlzZXIpKSByZXR1cm4gbmV3IFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cylcbiAgaWYgKCEoY3R4IGluc3RhbmNlb2YgQXVkaW9Db250ZXh0KSkgKG9wdHMgPSBjdHgpLCAoY3R4ID0gbnVsbClcblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICB0aGlzLmN0eCA9IGN0eCA9IGN0eCB8fCBuZXcgQXVkaW9Db250ZXh0XG5cbiAgaWYgKCEoYXVkaW8gaW5zdGFuY2VvZiBBdWRpb05vZGUpKSB7XG4gICAgYXVkaW8gPSAoYXVkaW8gaW5zdGFuY2VvZiBBdWRpbyB8fCBhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpXG4gICAgICA/IGN0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pXG4gICAgICA6IGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShhdWRpbylcbiAgfVxuXG4gIHRoaXMuYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKVxuICB0aGlzLnN0ZXJlbyAgID0gISFvcHRzLnN0ZXJlb1xuICB0aGlzLmF1ZGlibGUgID0gb3B0cy5hdWRpYmxlICE9PSBmYWxzZVxuICB0aGlzLndhdmVkYXRhID0gbnVsbFxuICB0aGlzLmZyZXFkYXRhID0gbnVsbFxuICB0aGlzLnNwbGl0dGVyID0gbnVsbFxuICB0aGlzLm1lcmdlciAgID0gbnVsbFxuICB0aGlzLnNvdXJjZSAgID0gYXVkaW9cblxuICBpZiAoIXRoaXMuc3RlcmVvKSB7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNvdXJjZVxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5hbmFseXNlcilcbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5hbmFseXNlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFuYWx5c2VyID0gW3RoaXMuYW5hbHlzZXJdXG4gICAgdGhpcy5hbmFseXNlci5wdXNoKGN0eC5jcmVhdGVBbmFseXNlcigpKVxuXG4gICAgdGhpcy5zcGxpdHRlciA9IGN0eC5jcmVhdGVDaGFubmVsU3BsaXR0ZXIoMilcbiAgICB0aGlzLm1lcmdlciAgID0gY3R4LmNyZWF0ZUNoYW5uZWxNZXJnZXIoMilcbiAgICB0aGlzLm91dHB1dCAgID0gdGhpcy5tZXJnZXJcblxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5zcGxpdHRlcilcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNwbGl0dGVyLmNvbm5lY3QodGhpcy5hbmFseXNlcltpXSwgaSwgMClcbiAgICAgIHRoaXMuYW5hbHlzZXJbaV0uY29ubmVjdCh0aGlzLm1lcmdlciwgMCwgaSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5tZXJnZXIuY29ubmVjdChjdHguZGVzdGluYXRpb24pXG4gIH1cbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUud2F2ZWZvcm0gPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMud2F2ZWRhdGEgfHwgKFxuICAgIHRoaXMud2F2ZWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEob3V0cHV0KVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUuZnJlcXVlbmNpZXMgPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMuZnJlcWRhdGEgfHwgKFxuICAgIHRoaXMuZnJlcWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJ1ZmZlciA9IHJlcXVpcmUoJy4vbGliL2J1ZmZlci1zb3VyY2UnKVxudmFyIG1lZGlhID0gcmVxdWlyZSgnLi9saWIvbWVkaWEtc291cmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWJBdWRpb1BsYXllclxuZnVuY3Rpb24gd2ViQXVkaW9QbGF5ZXIgKHNyYywgb3B0KSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgYSBzcmMgcGFyYW1ldGVyJylcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIGlmIChvcHQuYnVmZmVyKSByZXR1cm4gYnVmZmVyKHNyYywgb3B0KVxuICBlbHNlIHJldHVybiBtZWRpYShzcmMsIG9wdClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBjcmVhdGVBdWRpb0NvbnRleHQgPSByZXF1aXJlKCcuL2F1ZGlvLWNvbnRleHQnKVxudmFyIHhockF1ZGlvID0gcmVxdWlyZSgnLi94aHItYXVkaW8nKVxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIHJpZ2h0Tm93ID0gcmVxdWlyZSgncmlnaHQtbm93JylcbnZhciByZXN1bWUgPSByZXF1aXJlKCcuL3Jlc3VtZS1jb250ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXJTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlclNvdXJjZSAoc3JjLCBvcHQpIHtcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIHZhciBhdWRpb0NvbnRleHQgPSBvcHQuY29udGV4dCB8fCBjcmVhdGVBdWRpb0NvbnRleHQoKVxuXG4gIC8vIGEgcGFzcy10aHJvdWdoIG5vZGUgc28gdXNlciBqdXN0IG5lZWRzIHRvXG4gIC8vIGNvbm5lY3QoKSBvbmNlXG4gIHZhciBidWZmZXJOb2RlLCBidWZmZXIsIGR1cmF0aW9uXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgYXVkaW9TdGFydFRpbWUgPSBudWxsXG4gIHZhciBhdWRpb1BhdXNlVGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIHZhciBwbGF5aW5nID0gZmFsc2VcbiAgdmFyIGxvb3AgPSBvcHQubG9vcFxuXG4gIGVtaXR0ZXIucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGxheWluZykgcmV0dXJuXG4gICAgcGxheWluZyA9IHRydWVcblxuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyTm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICAgIGJ1ZmZlck5vZGUuY29ubmVjdChlbWl0dGVyLm5vZGUpXG4gICAgYnVmZmVyTm9kZS5vbmVuZGVkID0gZW5kZWRcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAvLyBNaWdodCBiZSBudWxsIHVuZGVmaW5lZCBpZiB3ZSBhcmUgc3RpbGwgbG9hZGluZ1xuICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICB9XG4gICAgaWYgKGxvb3ApIHtcbiAgICAgIGJ1ZmZlck5vZGUubG9vcCA9IHRydWVcbiAgICAgIGlmICh0eXBlb2Ygb3B0Lmxvb3BTdGFydCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcEVuZCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gICAgfVxuXG4gICAgaWYgKGR1cmF0aW9uICYmIGF1ZGlvQ3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xuICAgICAgLy8gZm9yIHdoZW4gaXQgbG9vcHMuLi5cbiAgICAgIGF1ZGlvQ3VycmVudFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lICUgZHVyYXRpb25cbiAgICB9XG4gICAgdmFyIG5leHRUaW1lID0gYXVkaW9DdXJyZW50VGltZVxuXG4gICAgYnVmZmVyTm9kZS5zdGFydCgwLCBuZXh0VGltZSlcbiAgICBhdWRpb1N0YXJ0VGltZSA9IHJpZ2h0Tm93KClcbiAgfVxuXG4gIGVtaXR0ZXIucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICAvLyBEb24ndCBsZXQgdGhlIFwiZW5kXCIgZXZlbnRcbiAgICAvLyBnZXQgdHJpZ2dlcmVkIG9uIG1hbnVhbCBwYXVzZS5cbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBudWxsXG4gICAgYnVmZmVyTm9kZS5zdG9wKDApXG4gICAgYXVkaW9QYXVzZVRpbWUgPSByaWdodE5vdygpXG4gICAgYXVkaW9DdXJyZW50VGltZSArPSAoYXVkaW9QYXVzZVRpbWUgLSBhdWRpb1N0YXJ0VGltZSkgLyAxMDAwXG4gIH1cblxuICBlbWl0dGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgZW1pdHRlci5wYXVzZSgpXG4gICAgZW5kZWQoKVxuICB9XG5cbiAgZW1pdHRlci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGRpc3Bvc2VCdWZmZXIoKVxuICAgIGJ1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGVtaXR0ZXIubm9kZSA9IG5vZGVcbiAgZW1pdHRlci5jb250ZXh0ID0gYXVkaW9Db250ZXh0XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZW1pdHRlciwge1xuICAgIGR1cmF0aW9uOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXlpbmdcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1ZmZlcjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gc2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IG9wdC52b2x1bWVcbiAgfVxuXG4gIC8vIGZpbHRlciBkb3duIHRvIGEgbGlzdCBvZiBwbGF5YWJsZSBzb3VyY2VzXG4gIHZhciBzb3VyY2VzID0gQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogWyBzcmMgXVxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgdmFyIHBsYXlhYmxlID0gc291cmNlcy5zb21lKGNhblBsYXlTcmMpXG4gIGlmIChwbGF5YWJsZSkge1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzLmZpbHRlcihjYW5QbGF5U3JjKVswXVxuICAgIC8vIFN1cHBvcnQgdGhlIHNhbWUgc291cmNlIHR5cGVzIGFzIGluXG4gICAgLy8gTWVkaWFFbGVtZW50IG1vZGUuLi5cbiAgICBpZiAodHlwZW9mIHNvdXJjZS5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlLnNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5zcmNcbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBhdCBsZWFzdCBvbmUgcGxheWFibGUgc291cmNlLlxuICAgIC8vIEZvciBub3cganVzdCBwbGF5IHRoZSBmaXJzdCxcbiAgICAvLyBpZGVhbGx5IHRoaXMgbW9kdWxlIGNvdWxkIGF0dGVtcHQgZWFjaCBvbmUuXG4gICAgc3RhcnRMb2FkKHNvdXJjZSlcbiAgfSBlbHNlIHtcbiAgICAvLyBubyBzb3VyY2VzIGNhbiBiZSBwbGF5ZWQuLi5cbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGVtaXR0ZXJcblxuICBmdW5jdGlvbiBzdGFydExvYWQgKHNyYykge1xuICAgIHhockF1ZGlvKGF1ZGlvQ29udGV4dCwgc3JjLCBmdW5jdGlvbiBhdWRpb0RlY29kZWQgKGVyciwgZGVjb2RlZCkge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICBidWZmZXIgPSBkZWNvZGVkIC8vIHN0b3JlIGZvciBsYXRlciB1c2VcbiAgICAgIGlmIChidWZmZXJOb2RlKSB7XG4gICAgICAgIC8vIGlmIHBsYXkoKSB3YXMgY2FsbGVkIGVhcmx5XG4gICAgICAgIGJ1ZmZlck5vZGUuYnVmZmVyID0gYnVmZmVyXG4gICAgICB9XG4gICAgICBkdXJhdGlvbiA9IGJ1ZmZlci5kdXJhdGlvblxuICAgICAgbm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIGVtaXR0ZXIuZW1pdCgnbG9hZCcpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9Qcm9ncmVzcyAoYW1vdW50LCB0b3RhbCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdwcm9ncmVzcycsIGFtb3VudCwgdG90YWwpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9EZWNvZGluZyAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2RlY29kaW5nJylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kZWQgKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICBhdWRpb0N1cnJlbnRUaW1lID0gMFxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcG9zZUJ1ZmZlciAoKSB7XG4gICAgaWYgKGJ1ZmZlck5vZGUpIGJ1ZmZlck5vZGUuZGlzY29ubmVjdCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGFkZE9uY2VcbmZ1bmN0aW9uIGFkZE9uY2UgKGVsZW1lbnQsIGV2ZW50LCBmbikge1xuICBmdW5jdGlvbiB0bXAgKGV2KSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxuICAgIGZuKGV2LCBlbGVtZW50KVxuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdG1wLCBmYWxzZSlcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciBjcmVhdGVBdWRpbyA9IHJlcXVpcmUoJ3NpbXBsZS1tZWRpYS1lbGVtZW50JykuYXVkaW9cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBhZGRPbmNlID0gcmVxdWlyZSgnLi9ldmVudC1hZGQtb25jZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTWVkaWFTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBhc3NpZ24oe30sIG9wdClcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvLyBEZWZhdWx0IHRvIEF1ZGlvIGluc3RlYWQgb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBUaGVyZSBpcyBub3QgbXVjaCBkaWZmZXJlbmNlIGV4Y2VwdCBpbiB0aGUgZm9sbG93aW5nOlxuICAvLyAgICB4IGluc3RhbmNlb2YgQXVkaW9cbiAgLy8gICAgeCBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnRcbiAgLy8gQW5kIGluIG15IGV4cGVyaWVuY2UgQXVkaW8gaGFzIGJldHRlciBzdXBwb3J0IG9uIHZhcmlvdXNcbiAgLy8gcGxhdGZvcm1zIGxpa2UgQ29jb29uSlMuXG4gIC8vIFBsZWFzZSBvcGVuIGFuIGlzc3VlIGlmIHRoZXJlIGlzIGEgY29uY2VybiB3aXRoIHRoaXMuXG4gIGlmICghb3B0LmVsZW1lbnQpIG9wdC5lbGVtZW50ID0gbmV3IHdpbmRvdy5BdWRpbygpXG5cbiAgdmFyIGRlc2lyZWRWb2x1bWUgPSBvcHQudm9sdW1lXG4gIGRlbGV0ZSBvcHQudm9sdW1lIC8vIG1ha2Ugc3VyZSA8YXVkaW8+IHRhZyByZWNlaXZlcyBmdWxsIHZvbHVtZVxuICB2YXIgYXVkaW8gPSBjcmVhdGVBdWRpbyhzcmMsIG9wdClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgbWVkaWFOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgbWVkaWFOb2RlLmNvbm5lY3Qobm9kZSlcblxuICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2VuZCcpXG4gIH0pXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJQTEFZXCIpXG4gIH0pXG5cbiAgdmFyIGxvb3BTdGFydCA9IG9wdC5sb29wU3RhcnRcbiAgdmFyIGxvb3BFbmQgPSBvcHQubG9vcEVuZFxuICB2YXIgaGFzTG9vcFN0YXJ0ID0gdHlwZW9mIGxvb3BTdGFydCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobG9vcFN0YXJ0KVxuICB2YXIgaGFzTG9vcEVuZCA9IHR5cGVvZiBsb29wRW5kID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wRW5kKVxuICB2YXIgaXNMb29wUmVhZHkgPSBmYWxzZVxuICBpZiAoaGFzTG9vcFN0YXJ0IHx8IGhhc0xvb3BFbmQpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgICAvLyBhdWRpbyBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0Li4uXG4gICAgICBpZiAodHlwZW9mIGF1ZGlvLmR1cmF0aW9uICE9PSAnbnVtYmVyJykgcmV0dXJuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBhdWRpby5jdXJyZW50VGltZVxuXG4gICAgICAvLyB3aGVyZSB0byBlbmQgdGhlIGJ1ZmZlclxuICAgICAgdmFyIGVuZFRpbWUgPSBoYXNMb29wRW5kID8gTWF0aC5taW4oYXVkaW8uZHVyYXRpb24sIGxvb3BFbmQpIDogYXVkaW8uZHVyYXRpb25cblxuICAgICAgaWYgKGN1cnJlbnRUaW1lID4gKGxvb3BTdGFydCB8fCAwKSkge1xuICAgICAgICBpc0xvb3BSZWFkeSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8ganVtcCBhaGVhZCB0byBsb29wIHN0YXJ0IHBvaW50XG4gICAgICBpZiAoaGFzTG9vcFN0YXJ0ICYmIGlzTG9vcFJlYWR5ICYmIGN1cnJlbnRUaW1lIDwgbG9vcFN0YXJ0KSB7XG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gbG9vcFN0YXJ0XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlJ3ZlIGhpdCB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGxvb3AgZW5kIHBvaW50LCBsZXQgbmF0aXZlIGxvb3BpbmcgdGFrZSBvdmVyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBsb29wIGVuZCBwb2ludCwganVtcCBiYWNrIHRvIHN0YXJ0IHBvaW50IG9yIHplcm9cbiAgICAgICAgaWYgKGhhc0xvb3BFbmQpIHtcbiAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGhhc0xvb3BTdGFydCA/IGxvb3BTdGFydCA6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXG4gICAgfSk7XG4gIH1cblxuICBlbWl0dGVyLmVsZW1lbnQgPSBhdWRpb1xuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLnBhdXNlID0gYXVkaW8ucGF1c2UuYmluZChhdWRpbylcbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgcmV0dXJuIGF1ZGlvLnBsYXkoKVxuICB9XG5cbiAgLy8gVGhpcyBleGlzdHMgY3VycmVudGx5IGZvciBwYXJpdHkgd2l0aCBCdWZmZXIgc291cmNlXG4gIC8vIE9wZW4gdG8gc3VnZ2VzdGlvbnMgZm9yIHdoYXQgdGhpcyBzaG91bGQgZGlzcG9zZS4uLlxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7fVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2FzUGxheWluZyA9IGVtaXR0ZXIucGxheWluZ1xuICAgIGF1ZGlvLnBhdXNlKClcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDBcbiAgICBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gICAgaWYgKHdhc1BsYXlpbmcpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICB9XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbnRUaW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGF1ZGlvLmN1cnJlbnRUaW1lXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICFhdWRpby5wYXVzZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gU2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2YgZGVzaXJlZFZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IGRlc2lyZWRWb2x1bWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFsbCBzb3VyY2VzIGFyZSB1bnBsYXlhYmxlLFxuICAvLyBpZiBzbyB3ZSBlbWl0IGFuIGVycm9yIHNpbmNlIHRoZSBicm93c2VyXG4gIC8vIG1pZ2h0IG5vdC5cbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgLy8gQXQgbGVhc3Qgb25lIHNvdXJjZSBpcyBwcm9iYWJseS9tYXliZSBwbGF5YWJsZVxuICAgIHN0YXJ0TG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gZW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gdXNlciBjYW4gY2F0Y2ggaXRcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoKSB7XG4gICAgLy8gVGhlIGZpbGUgZXJyb3JzIChsaWtlIGRlY29kaW5nIC8gNDA0cykgYXBwZWFyIG9uIDxzb3VyY2U+XG4gICAgdmFyIHNyY0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXVkaW8uY2hpbGRyZW4pXG4gICAgdmFyIHJlbWFpbmluZ1NyY0Vycm9ycyA9IHNyY0VsZW1lbnRzLmxlbmd0aFxuICAgIHZhciBoYXNFcnJvcmVkID0gZmFsc2VcbiAgICB2YXIgc291cmNlRXJyb3IgPSBmdW5jdGlvbiAoZXJyLCBlbCkge1xuICAgICAgaWYgKGhhc0Vycm9yZWQpIHJldHVyblxuICAgICAgcmVtYWluaW5nU3JjRXJyb3JzLS1cbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgbG9hZGluZyBzb3VyY2U6ICcgKyBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpKVxuICAgICAgaWYgKHJlbWFpbmluZ1NyY0Vycm9ycyA8PSAwKSB7XG4gICAgICAgIGhhc0Vycm9yZWQgPSB0cnVlXG4gICAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VyY2VFcnJvciwgZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwbGF5IGFueSBvZiB0aGUgc3VwcGxpZWQgc291cmNlcycpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9XG5cbiAgICBpZiAoYXVkaW8ucmVhZHlTdGF0ZSA+PSBhdWRpby5IQVZFX0VOT1VHSF9EQVRBKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGRvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdjYW5wbGF5JywgZG9uZSlcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdlcnJvcicsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBlbWl0dGVyLmVtaXQobmV3IEVycm9yKCdVbmtub3duIGVycm9yIHdoaWxlIGxvYWRpbmcgPGF1ZGlvPicpKVxuICAgICAgfSlcbiAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGFkZE9uY2UoZWwsICdlcnJvcicsIHNvdXJjZUVycm9yKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBPbiBtb3N0IGJyb3dzZXJzIHRoZSBsb2FkaW5nIGJlZ2luc1xuICAgIC8vIGltbWVkaWF0ZWx5LiBIb3dldmVyLCBvbiBpT1MgOS4yIFNhZmFyaSxcbiAgICAvLyB5b3UgbmVlZCB0byBjYWxsIGxvYWQoKSBmb3IgZXZlbnRzXG4gICAgLy8gdG8gYmUgdHJpZ2dlcmVkLlxuICAgIGF1ZGlvLmxvYWQoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvbWVkaWEtc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgeGhyID0gcmVxdWlyZSgneGhyJylcbnZhciB4aHJQcm9ncmVzcyA9IHJlcXVpcmUoJ3hoci1wcm9ncmVzcycpXG5cbm1vZHVsZS5leHBvcnRzID0geGhyQXVkaW9cbmZ1bmN0aW9uIHhockF1ZGlvIChhdWRpb0NvbnRleHQsIHNyYywgY2IsIHByb2dyZXNzLCBkZWNvZGluZykge1xuICB2YXIgeGhyT2JqZWN0ID0geGhyKHtcbiAgICB1cmk6IHNyYyxcbiAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcidcbiAgfSwgZnVuY3Rpb24gKGVyciwgcmVzcCwgYXJyYXlCdWYpIHtcbiAgICBpZiAoIS9eMi8udGVzdChyZXNwLnN0YXR1c0NvZGUpKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ3N0YXR1cyBjb2RlICcgKyByZXNwLnN0YXR1c0NvZGUgKyAnIHJlcXVlc3RpbmcgJyArIHNyYylcbiAgICB9XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBkZWNvZGUoYXJyYXlCdWYpXG4gIH0pXG5cbiAgeGhyUHJvZ3Jlc3MoeGhyT2JqZWN0KVxuICAgIC5vbignZGF0YScsIGZ1bmN0aW9uIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBwcm9ncmVzcyhhbW91bnQsIHRvdGFsKVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gZGVjb2RlIChhcnJheUJ1Zikge1xuICAgIGRlY29kaW5nKClcbiAgICBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmLCBmdW5jdGlvbiAoZGVjb2RlZCkge1xuICAgICAgY2IobnVsbCwgZGVjb2RlZClcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdFcnJvciBkZWNvZGluZyBhdWRpbyBkYXRhJylcbiAgICAgIGVyci50eXBlID0gJ0RFQ09ERV9BVURJT19EQVRBJ1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIFBIT05HXFxuXFxudmFyeWluZyB2ZWMzIHZWaWV3UG9zaXRpb247XFxudmFyeWluZyB2ZWMzIHZQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxuXFxuI2lmbmRlZiBGTEFUX1NIQURFRFxcblxcbiAgICB2YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXG5cXG4jZW5kaWZcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDx1dl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8dXYyX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxkaXNwbGFjZW1lbnRtYXBfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGVudm1hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y29sb3JfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8bW9ycGh0YXJnZXRfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHNraW5uaW5nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxzaGFkb3dtYXBfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfcGFyc192ZXJ0ZXg+XFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICAjaW5jbHVkZSA8dXZfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8dXYyX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGNvbG9yX3ZlcnRleD5cXG5cXG4gICAgI2luY2x1ZGUgPGJlZ2lubm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPG1vcnBobm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNraW5iYXNlX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNraW5ub3JtYWxfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8ZGVmYXVsdG5vcm1hbF92ZXJ0ZXg+XFxuXFxuI2lmbmRlZiBGTEFUX1NIQURFRCAvLyBOb3JtYWwgY29tcHV0ZWQgd2l0aCBkZXJpdmF0aXZlcyB3aGVuIEZMQVRfU0hBREVEXFxuXFxuICAgIHZOb3JtYWwgPSBub3JtYWxpemUoIHRyYW5zZm9ybWVkTm9ybWFsICk7XFxuXFxuI2VuZGlmXFxuXFxuICAgICNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxkaXNwbGFjZW1lbnRtYXBfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8bW9ycGh0YXJnZXRfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8c2tpbm5pbmdfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8cHJvamVjdF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfdmVydGV4PlxcblxcbiAgICB2Vmlld1Bvc2l0aW9uID0gLSBtdlBvc2l0aW9uLnh5ejtcXG5cXG4gICAgLy8gaWYgKCB1VGltZSA+IDAuMCApIHtcXG4gICAgLy8gICAgIGZsb2F0IGRpc3BsYWNlbWVudCA9IG5vaXNlKHZlYzQodmVjMyhwb3NpdGlvbiksIHVUaW1lICogMS4pKTtcXG4gICAgLy8gICAgIHZlYzMgcG9zID0gcG9zaXRpb247XFxuICAgIC8vICAgICBwb3MueiA9IGRpc3BsYWNlbWVudCAqIDIuICsgMi47XFxuXFxuICAgIC8vICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvcywgMS4wKTtcXG4gICAgLy8gfVxcblxcbiAgICB2VXYgPSB1djtcXG4gICAgdlBvc2l0aW9uID0gcG9zaXRpb247XFxuXFxuICAgICNpbmNsdWRlIDx3b3JsZHBvc192ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxlbnZtYXBfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8c2hhZG93bWFwX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGZvZ192ZXJ0ZXg+XFxuXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG4jZGVmaW5lIE1fUEkgMy4xNFxcblxcbnVuaWZvcm0gdmVjMyBkaWZmdXNlO1xcbnVuaWZvcm0gdmVjMyBlbWlzc2l2ZTtcXG51bmlmb3JtIHZlYzMgc3BlY3VsYXI7XFxudW5pZm9ybSBmbG9hdCBzaGluaW5lc3M7XFxudW5pZm9ybSBmbG9hdCBvcGFjaXR5O1xcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxudW5pZm9ybSB2ZWMzIHVTdHJpcGVPcmllbnRhdGlvbjtcXG51bmlmb3JtIGZsb2F0IHVJbnZlcnQ7XFxudW5pZm9ybSB2ZWMzIHVTcXVhcmU7XFxudW5pZm9ybSBmbG9hdCB1V2lkdGg7XFxudW5pZm9ybSBmbG9hdCB1SGVpZ2h0O1xcbnVuaWZvcm0gZmxvYXQgdUxlbmd0aDtcXG51bmlmb3JtIGZsb2F0IHVQcm9ncmVzcztcXG5cXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuI2luY2x1ZGUgPGNvbW1vbj5cXG4jaW5jbHVkZSA8cGFja2luZz5cXG4jaW5jbHVkZSA8Y29sb3JfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8dXZfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8dXYyX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxhbHBoYW1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxhb21hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxsaWdodG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxlbWlzc2l2ZW1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxlbnZtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8Z3JhZGllbnRtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8Zm9nX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGJzZGZzPlxcbiNpbmNsdWRlIDxsaWdodHNfcGFycz5cXG4jaW5jbHVkZSA8bGlnaHRzX3Bob25nX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPHNoYWRvd21hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxidW1wbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPG5vcm1hbG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxzcGVjdWxhcm1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfcGFyc19mcmFnbWVudD5cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgICNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfZnJhZ21lbnQ+XFxuXFxuICAgIHZlYzQgZGlmZnVzZUNvbG9yID0gdmVjNCggZGlmZnVzZSwgb3BhY2l0eSApO1xcbiAgICBSZWZsZWN0ZWRMaWdodCByZWZsZWN0ZWRMaWdodCA9IFJlZmxlY3RlZExpZ2h0KCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSApO1xcbiAgICB2ZWMzIHRvdGFsRW1pc3NpdmVSYWRpYW5jZSA9IGVtaXNzaXZlO1xcblxcbiAgICAjaW5jbHVkZSA8bG9nZGVwdGhidWZfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxtYXBfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxjb2xvcl9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGFscGhhbWFwX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8YWxwaGF0ZXN0X2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8c3BlY3VsYXJtYXBfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxub3JtYWxfZmxpcD5cXG4gICAgI2luY2x1ZGUgPG5vcm1hbF9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGVtaXNzaXZlbWFwX2ZyYWdtZW50PlxcblxcbiAgICAvLyBhY2N1bXVsYXRpb25cXG4gICAgI2luY2x1ZGUgPGxpZ2h0c19waG9uZ19mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGxpZ2h0c190ZW1wbGF0ZT5cXG5cXG4gICAgLy8gbW9kdWxhdGlvblxcbiAgICAjaW5jbHVkZSA8YW9tYXBfZnJhZ21lbnQ+XFxuXFxuICAgIHZlYzMgb3V0Z29pbmdMaWdodCA9IHJlZmxlY3RlZExpZ2h0LmRpcmVjdERpZmZ1c2UgKyByZWZsZWN0ZWRMaWdodC5pbmRpcmVjdERpZmZ1c2UgKyByZWZsZWN0ZWRMaWdodC5kaXJlY3RTcGVjdWxhciArIHJlZmxlY3RlZExpZ2h0LmluZGlyZWN0U3BlY3VsYXIgKyB0b3RhbEVtaXNzaXZlUmFkaWFuY2U7XFxuXFxuICAgICNpbmNsdWRlIDxlbnZtYXBfZnJhZ21lbnQ+XFxuXFxuICAgIHZlYzQgY29sb3IgPSB2ZWM0KG91dGdvaW5nTGlnaHQsIGRpZmZ1c2VDb2xvci5hICk7XFxuXFxuICAgIC8vIGZsb2F0IHBvc1ggPSB2UG9zaXRpb24ueCAqIHVTdHJpcGVPcmllbnRhdGlvbi54ICsgdlBvc2l0aW9uLnkgKiB1U3RyaXBlT3JpZW50YXRpb24ueTtcXG4gICAgLy8gZmxvYXQgcG9zWSA9IHZQb3NpdGlvbi54ICogdVN0cmlwZU9yaWVudGF0aW9uLnkgKyB2UG9zaXRpb24ueSAqIHVTdHJpcGVPcmllbnRhdGlvbi54O1xcblxcbiAgICBmbG9hdCBhYnNYID0gZmxvb3IoLWNvcygodVRpbWUgKiAwLjEgKyBNX1BJICogdVNxdWFyZS54ICogKCAoIHZVdi54ICsgdVByb2dyZXNzICsgMC4xNSApICogMi4gLSAxLiApICogMC41KSkpICsgMS47XFxuICAgIGZsb2F0IGFic1kgPSBmbG9vcigtY29zKChNX1BJICogdVNxdWFyZS55ICogKCB2VXYueSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcblxcbiAgICBpZiAoIGFic1ggPiAwLjAgfHwgYWJzWSA+IDAuICkge1xcbiAgICAgICBjb2xvciA9IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgY29sb3IgPSB2ZWM0KHZlYzMoMC4wICsgdUludmVydCksIGRpZmZ1c2VDb2xvci5hKTsgIFxcbiAgICB9XFxuXFxuICAgIC8vIGNvbG9yID0gdlV2LnggPiAxLiAtIHVQcm9ncmVzcyAgPyB2ZWM0KHZlYzMoMS4wIC0gdUludmVydCksIGRpZmZ1c2VDb2xvci5hKSA6IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICBcXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxuXFxuICAgICNpbmNsdWRlIDx0b25lbWFwcGluZ19mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGVuY29kaW5nc19mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGZvZ19mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPHByZW11bHRpcGxpZWRfYWxwaGFfZnJhZ21lbnQ+XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZ3Jlc3NcblxuZnVuY3Rpb24gcHJvZ3Jlc3MoeGhyKSB7XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlclxuICB2YXIgZmluaXNoZWQgPSBmYWxzZVxuXG4gIGlmICh4aHIuYXR0YWNoRXZlbnQpIHtcbiAgICB4aHIuYXR0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgcmV0dXJuIGVtaXR0ZXJcbiAgfVxuXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzLCBmYWxzZSlcbiAgZnVuY3Rpb24gcHJvZ3Jlc3MoZXZlbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlXG4gICAgICA/IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsXG4gICAgICA6IDBcblxuICAgIGlmICghZmluaXNoZWQpIGVtaXR0ZXIuZW1pdCgnZGF0YSdcbiAgICAgICwgdmFsdWVcbiAgICAgICwgZXZlbnQudG90YWwgfHwgbnVsbFxuICAgIClcblxuICAgIGZpbmlzaGVkID0gdmFsdWUgPT09IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSAhPT0gJ2xvYWQnICYmICEvXihyZWFkeXxjb21wbGV0ZSkkL2cudGVzdChcbiAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnJlYWR5U3RhdGVcbiAgICApKSByZXR1cm5cblxuICAgIGlmIChmaW5pc2hlZCkgcmV0dXJuXG4gICAgaWYgKHhoci5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRvbmUsIGZhbHNlKVxuICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICAgIH0gZWxzZVxuICAgIGlmICh4aHIuZGV0YXRjaEV2ZW50KSB7XG4gICAgICB4aHIuZGV0YXRjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCBkb25lKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgnZGF0YScsIDEsIGV2ZW50LnRvdGFsIHx8IG51bGwpXG4gICAgZW1pdHRlci5lbWl0KCdkb25lJylcbiAgICBmaW5pc2hlZCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyLXByb2dyZXNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciB3aW5kb3cgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKFwiaXMtZnVuY3Rpb25cIilcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKFwicGFyc2UtaGVhZGVyc1wiKVxudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlWEhSXG5jcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcFxuY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0ID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiAobmV3IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCgpKSA/IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA6IHdpbmRvdy5YRG9tYWluUmVxdWVzdFxuXG5mb3JFYWNoQXJyYXkoW1wiZ2V0XCIsIFwicHV0XCIsIFwicG9zdFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgY3JlYXRlWEhSW21ldGhvZCA9PT0gXCJkZWxldGVcIiA/IFwiZGVsXCIgOiBtZXRob2RdID0gZnVuY3Rpb24odXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iail7XG4gICAgZm9yKHZhciBpIGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJhbXMgPSB1cmlcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyYW1zID0ge3VyaTp1cml9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB4dGVuZChvcHRpb25zLCB7dXJpOiB1cml9KVxuICAgIH1cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHBhcmFtc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVhIUihvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2JPbmNlKGVyciwgcmVzcG9uc2UsIGJvZHkpe1xuICAgICAgICBpZighY2FsbGVkKXtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2soZXJyLCByZXNwb25zZSwgYm9keSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkRnVuYywgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIC8vIENocm9tZSB3aXRoIHJlcXVlc3RUeXBlPWJsb2IgdGhyb3dzIGVycm9ycyBhcnJvdW5kIHdoZW4gZXZlbiB0ZXN0aW5nIGFjY2VzcyB0byByZXNwb25zZVRleHRcbiAgICAgICAgdmFyIGJvZHkgPSB1bmRlZmluZWRcblxuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlVGV4dCB8fCBnZXRYbWwoeGhyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGV2dCwgZmFpbHVyZVJlc3BvbnNlKVxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSAmIHByb2Nlc3MgdGhlIHJlc3BvbnNlIGluIGEgc3BlY2lhbCByZXNwb25zZSBvYmplY3RcbiAgICBmdW5jdGlvbiBsb2FkRnVuYygpIHtcbiAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICB2YXIgc3RhdHVzXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKG9wdGlvbnMudXNlWERSICYmIHhoci5zdGF0dXM9PT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vSUU4IENPUlMgR0VUIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZG9lc24ndCBoYXZlIGEgc3RhdHVzIGZpZWxkLCBidXQgYm9keSBpcyBmaW5lXG4gICAgICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICh4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBmYWlsdXJlUmVzcG9uc2VcbiAgICAgICAgdmFyIGVyciA9IG51bGxcblxuICAgICAgICBpZiAoc3RhdHVzICE9PSAwKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IGdldEJvZHkoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgICAgdXJsOiB1cmksXG4gICAgICAgICAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKXsgLy9yZW1lbWJlciB4aHIgY2FuIGluIGZhY3QgYmUgWERSIGZvciBDT1JTIGluIElFXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycyA9IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoXCJJbnRlcm5hbCBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGFcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luY1xuICAgIHZhciBpc0pzb24gPSBmYWxzZVxuICAgIHZhciB0aW1lb3V0VGltZXJcbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgdXJsOiB1cmksXG4gICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgIH1cblxuICAgIGlmIChcImpzb25cIiBpbiBvcHRpb25zICYmIG9wdGlvbnMuanNvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24gPT09IHRydWUgPyBib2R5IDogb3B0aW9ucy5qc29uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlYWR5c3RhdGVjaGFuZ2VcbiAgICB4aHIub25sb2FkID0gbG9hZEZ1bmNcbiAgICB4aHIub25lcnJvciA9IGVycm9yRnVuY1xuICAgIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb24uXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElFIG11c3QgZGllXG4gICAgfVxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHhoci5vbnRpbWVvdXQgPSBlcnJvckZ1bmNcbiAgICB4aHIub3BlbihtZXRob2QsIHVyaSwgIXN5bmMsIG9wdGlvbnMudXNlcm5hbWUsIG9wdGlvbnMucGFzc3dvcmQpXG4gICAgLy9oYXMgdG8gYmUgYWZ0ZXIgb3BlblxuICAgIGlmKCFzeW5jKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzXG4gICAgfVxuICAgIC8vIENhbm5vdCBzZXQgdGltZW91dCB3aXRoIHN5bmMgcmVxdWVzdFxuICAgIC8vIG5vdCBzZXR0aW5nIHRpbWVvdXQgb24gdGhlIHhociBvYmplY3QsIGJlY2F1c2Ugb2Ygb2xkIHdlYmtpdHMgZXRjLiBub3QgaGFuZGxpbmcgdGhhdCBjb3JyZWN0bHlcbiAgICAvLyBib3RoIG5wbSdzIHJlcXVlc3QgYW5kIGpxdWVyeSAxLnggdXNlIHRoaXMga2luZCBvZiB0aW1lb3V0LCBzbyB0aGlzIGlzIGJlaW5nIGNvbnNpc3RlbnRcbiAgICBpZiAoIXN5bmMgJiYgb3B0aW9ucy50aW1lb3V0ID4gMCApIHtcbiAgICAgICAgdGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICAgICAgYWJvcnRlZCA9IHRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgLy8gTWljcm9zb2Z0IEVkZ2UgYnJvd3NlciBzZW5kcyBcInVuZGVmaW5lZFwiIHdoZW4gc2VuZCBpcyBjYWxsZWQgd2l0aCB1bmRlZmluZWQgdmFsdWUuXG4gICAgLy8gWE1MSHR0cFJlcXVlc3Qgc3BlYyBzYXlzIHRvIHBhc3MgbnVsbCBhcyBib2R5IHRvIGluZGljYXRlIG5vIGJvZHlcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25hdWd0dXIveGhyL2lzc3Vlcy8xMDAuXG4gICAgeGhyLnNlbmQoYm9keSB8fCBudWxsKVxuXG4gICAgcmV0dXJuIHhoclxuXG5cbn1cblxuZnVuY3Rpb24gZ2V0WG1sKHhocikge1xuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cbiAgICB2YXIgZmlyZWZveEJ1Z1Rha2VuRWZmZWN0ID0geGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVhNTC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09IFwicGFyc2VyZXJyb3JcIlxuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcIlwiICYmICFmaXJlZm94QnVnVGFrZW5FZmZlY3QpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3hoci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCAobiwgc3RhcnQxLCBzdG9wMSwgc3RhcnQyLCBzdG9wMikge1xuICAgIHJldHVybiAoKG4gLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSkgKiAoc3RvcDIgLSBzdGFydDIpICsgc3RhcnQyO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL21hcC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt+fihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiXSwic291cmNlUm9vdCI6IiJ9