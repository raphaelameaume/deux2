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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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

var _map = __webpack_require__(8);

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
            vertexShader: __webpack_require__(57),
            // fragmentShader: require('../shaders/bottom.frag.glsl'),
            fragmentShader: __webpack_require__(58),
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
/* 3 */
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
		vertexShader: __webpack_require__(14)("./" + this.vertexShader),
		fragmentShader: __webpack_require__(14)("./" + this.fragmentShader),
		uniforms: this.uniforms,
		flatShading: true,
		depthWrite: false,
		depthTest: false,
		transparent: true
	});
};

exports.default = Pass;

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webmidi = __webpack_require__(56);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// sourced from:
// http://www.leanbackplayer.com/test/h5mt.html
// https://github.com/broofa/node-mime/blob/master/types.json
var mimeTypes = __webpack_require__(39)

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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

module.exports = createAudioContext
function createAudioContext () {
  var AudioCtor = window.AudioContext || window.webkitAudioContext
  return new AudioCtor()
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var lookup = __webpack_require__(9)
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
/* 13 */
/***/ (function(module, exports) {

module.exports = function (audioContext) {
  if (audioContext.state === 'suspended' &&
      typeof audioContext.resume === 'function') {
    audioContext.resume()
  }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./additive.fs": 59,
	"./basic.vs": 60,
	"./bloom.fs": 61,
	"./bloom2.fs": 62,
	"./bloomtest.fs": 63,
	"./box-blur.fs": 64,
	"./copy.fs": 65,
	"./custom.fs": 66,
	"./dof.fs": 67,
	"./fxaa.fs": 76,
	"./gaussian.fs": 68,
	"./noise.fs": 69,
	"./radial-blur.fs": 70,
	"./sepia.fs": 71,
	"./ssao.fs": 72
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
webpackContext.id = 14;

/***/ }),
/* 15 */
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

var _randomFromArray = __webpack_require__(38);

var _randomFromArray2 = _interopRequireDefault(_randomFromArray);

var _lucky = __webpack_require__(36);

var _lucky2 = _interopRequireDefault(_lucky);

var _map = __webpack_require__(8);

var _map2 = _interopRequireDefault(_map);

var _debounce = __webpack_require__(35);

var _debounce2 = _interopRequireDefault(_debounce);

var _MidiController = __webpack_require__(7);

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

            var possibleDivisionX = this.findDivisions(this.divisions.x, this.divisions.lastX, 2);
            var rdmXIndex = Math.floor(Math.random() * possibleDivisionX.length);
            var divisionX = possibleDivisionX[rdmXIndex];

            this.divisions.lastX = this.divisions.x.indexOf(divisionX);

            var possibleDivisionY = this.findDivisions(this.divisions.y, this.divisions.lastY, 2);
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webAudioPlayer = __webpack_require__(51);

var _webAudioPlayer2 = _interopRequireDefault(_webAudioPlayer);

var _webAudioAnalyser = __webpack_require__(50);

var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);

var _analyserFrequencyAverage = __webpack_require__(31);

var _analyserFrequencyAverage2 = _interopRequireDefault(_analyserFrequencyAverage);

var _Range = __webpack_require__(34);

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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _CopyPass = __webpack_require__(37);

var _CopyPass2 = _interopRequireDefault(_CopyPass);

var _Pass = __webpack_require__(3);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pass2 = __webpack_require__(3);

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
        value: function update() {}
    }]);

    return CustomPass;
}(_Pass3.default);

exports.default = CustomPass;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(46)
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var frequencyToIndex = __webpack_require__(32)

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(40)

module.exports = frequencyToIndex
function frequencyToIndex (frequency, sampleRate, frequencyBinCount) {
  var nyquist = sampleRate / 2
  var index = Math.round(frequency / nyquist * frequencyBinCount)
  return clamp(index, 0, frequencyBinCount)
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf = __webpack_require__(29);

var _raf2 = _interopRequireDefault(_raf);

var _Background = __webpack_require__(19);

var _Background2 = _interopRequireDefault(_Background);

var _Top = __webpack_require__(23);

var _Top2 = _interopRequireDefault(_Top);

var _Left = __webpack_require__(21);

var _Left2 = _interopRequireDefault(_Left);

var _Right = __webpack_require__(22);

var _Right2 = _interopRequireDefault(_Right);

var _Bottom = __webpack_require__(20);

var _Bottom2 = _interopRequireDefault(_Bottom);

var _smooth = __webpack_require__(25);

var _smooth2 = _interopRequireDefault(_smooth);

var _FacesController = __webpack_require__(15);

var _FacesController2 = _interopRequireDefault(_FacesController);

var _MouseManager = __webpack_require__(16);

var _MouseManager2 = _interopRequireDefault(_MouseManager);

var _SoundManager = __webpack_require__(24);

var _SoundManager2 = _interopRequireDefault(_SoundManager);

var _KeyboardController = __webpack_require__(18);

var _KeyboardController2 = _interopRequireDefault(_KeyboardController);

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _ui = __webpack_require__(26);

var _ui2 = _interopRequireDefault(_ui);

var _MPKMini = __webpack_require__(17);

var _MPKMini2 = _interopRequireDefault(_MPKMini);

var _MidiController = __webpack_require__(7);

var _MidiController2 = _interopRequireDefault(_MidiController);

var _Composer = __webpack_require__(27);

var _Composer2 = _interopRequireDefault(_Composer);

var _CustomPass = __webpack_require__(28);

var _CustomPass2 = _interopRequireDefault(_CustomPass);

var _FXAAPass = __webpack_require__(77);

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

                        splitDelta: { value: new THREE.Vector2(20, 20) },

                        noiseAmount: { value: 0.25 },
                        noiseSpeed: { value: 0.2 },

                        vignetteAmount: { value: 0.7 },
                        vignetteFallof: { value: 0.1 }
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
                  var OrbitControls = __webpack_require__(30)(THREE);
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
                  console.log();

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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Pass2 = __webpack_require__(3);

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
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(10)

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
/* 42 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(49)
  , forEach = __webpack_require__(41)
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
/* 46 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports =
  global.performance &&
  global.performance.now ? function now() {
    return performance.now()
  } : Date.now || function now() {
    return +new Date
  }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isDom = __webpack_require__(43)
var lookup = __webpack_require__(9)

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
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var buffer = __webpack_require__(52)
var media = __webpack_require__(54)

module.exports = webAudioPlayer
function webAudioPlayer (src, opt) {
  if (!src) throw new TypeError('must specify a src parameter')
  opt = opt || {}
  if (opt.buffer) return buffer(src, opt)
  else return media(src, opt)
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var canPlaySrc = __webpack_require__(12)
var createAudioContext = __webpack_require__(11)
var xhrAudio = __webpack_require__(55)
var EventEmitter = __webpack_require__(5).EventEmitter
var rightNow = __webpack_require__(47)
var resume = __webpack_require__(13)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var EventEmitter = __webpack_require__(5).EventEmitter
var createAudio = __webpack_require__(48).audio
var assign = __webpack_require__(44)

var resume = __webpack_require__(13)
var createAudioContext = __webpack_require__(11)
var canPlaySrc = __webpack_require__(12)
var addOnce = __webpack_require__(53)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(74)
var xhrProgress = __webpack_require__(73)

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
/* 56 */
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
/* 57 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 vUv;\nuniform float uTime;\n\n#ifndef FLAT_SHADED\n\n    varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n\n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n\n    #include <begin_vertex>\n    #include <project_vertex>\n\n    vViewPosition = - mvPosition.xyz;\n    vUv = uv;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <fog_vertex>\n\n}"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n#define M_PI 3.14\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float uTime;\nuniform vec3 uStripeOrientation;\nuniform float uInvert;\nuniform vec3 uSquare;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uLength;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <fog_pars_fragment>\n\nvoid main() {\n    vec4 diffuseColor = vec4( diffuse, opacity );\n    // ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n    // vec3 totalEmissiveRadiance = emissive;\n\n    vec4 color = diffuseColor;\n\n    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;\n    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;\n\n    if ( absX > 0. || absY > 0. ) {\n       color = vec4(vec3(1.0 - uInvert), diffuseColor.a);\n    } else {\n        color = vec4(vec3(0.0 + uInvert), diffuseColor.a);  \n    }\n\n    // color = vUv.x > 1. - uProgress  ? vec4(vec3(1.0 - uInvert), diffuseColor.a) : vec4(vec3(0.0 + uInvert), diffuseColor.a);\n    \n    gl_FragColor = color;\n\n    #include <fog_fragment>\n}"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform sampler2D tBlend;\nuniform float opacity;\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 base = texture2D(tInput, vUv);\n    vec4 blend = texture2D(tBlend, vUv);\n\n    vec4 color = (1.0 - ((1.0 - base) * (1.0 - blend)));\n    \n    gl_FragColor = color * opacity + base * ( 1. - opacity );;\n}"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\n\nvoid main() {\n   vec4 sum = vec4(0);\n   vec2 texcoord = vUv;\n  \n   for( int i= -4 ;i < 4; i++)\n   {\n        for ( int j = -3; j < 3; j++)\n        {\n            sum += texture2D(tInput, texcoord + vec2(j, i)*0.004) * 0.25;\n        }\n   }\n       if (texture2D(tInput, texcoord).r < 0.3)\n    {\n       gl_FragColor = sum*sum*0.012 + texture2D(tInput, texcoord);\n    }\n    else\n    {\n        if (texture2D(tInput, texcoord).r < 0.5)\n        {\n            gl_FragColor = sum*sum*0.009 + texture2D(tInput, texcoord);\n        }\n        else\n        {\n            gl_FragColor = sum*sum*0.0075 + texture2D(tInput, texcoord);\n        }\n    }\n}"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform float kernel;\nuniform float scale;\nuniform float thresh;\n\nvoid main()\n{\n    vec4 sum = vec4(0);\n\n    // mess of for loops due to gpu compiler/hardware limitations\n    int j=-2;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=-1;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=0;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=1;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    j=2;\n    for( int i=-2; i<=2; i++) sum+=texture2D(tInput,vUv+vec2(i,j)*kernel);\n    sum/=25.0;\n\n    vec4 s=texture2D(tInput, vUv);\n    gl_FragColor=s;\n\n    // use the blurred colour if it's bright enough\n    // if (length(sum)>thresh)\n    // {\n        gl_FragColor +=sum*scale;\n    // }\n}"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 increment;\n\nvoid main() {\n      vec4 color = vec4(0.0);\n\n      color += texture2D(tInput, (vUv - increment * 4.0)) * 0.051;\n      color += texture2D(tInput, (vUv - increment * 3.0)) * 0.0918;\n      color += texture2D(tInput, (vUv - increment * 2.0)) * 0.12245;\n      color += texture2D(tInput, (vUv - increment * 1.0)) * 0.1531;\n      color += texture2D(tInput, (vUv + increment * 0.0)) * 0.1633;\n      color += texture2D(tInput, (vUv + increment * 1.0)) * 0.1531;\n      color += texture2D(tInput, (vUv + increment * 2.0)) * 0.12245;\n      color += texture2D(tInput, (vUv + increment * 3.0)) * 0.0918;\n      color += texture2D(tInput, (vUv + increment * 4.0)) * 0.051;\n\n      gl_FragColor = color;\n}"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 delta;\n\nconst float samples = 30.;\n\nfloat random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}\n\nvoid main() {\n\n    vec4 color=vec4(0.0);\n    float total=0.0;\n    float offset=random(vec3(12.9898,78.233,151.7182),0.0);\n    for(float t=-samples;t<=samples;t++){\n        float percent=(t+offset-0.5)/samples;\n        float weight=1.0-abs(percent);\n        vec4 sample=texture2D(tInput,vUv+delta*percent);\n        sample.rgb*=sample.a;\n        color+=sample*weight;\n        total+=weight;\n    }\n    \n    gl_FragColor=color/total;\n    gl_FragColor.rgb/=gl_FragColor.a+0.00001;\n    \n}"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\n\nvoid main() {\n\tgl_FragColor = texture2D(tInput, vUv);\n\n\t// gl_FragColor = vec4(vec3(vUv.y), 1.);\n}"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\n\nuniform float time;\n\nuniform float noiseAmount;\nuniform float noiseSpeed;\nuniform float vignetteFallof;\nuniform float vignetteAmount;\nuniform vec2 splitDelta;\nuniform vec2 resolution;\nuniform float zoomBlurStrength;\n\nvarying vec2 vUv;\n\nfloat random(vec2 n, float offset ){\n\t//return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453);\n\treturn .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);\n}\n\nfloat randomBlur(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}\n\nvoid main() {\n\n\t// zoom blur\n\tvec2 center = vec2(0.5, 0.5);\n\tvec4 color = vec4(0.0);\n\tfloat total = 0.0;\n\tvec2 toCenter = center-vUv*resolution;\n\tfloat offset = randomBlur(vec3(12.9898,78.233,151.7182),0.0);\n\tfor(float t = 0.0; t <= 40.0; t++){\n\t\tfloat percent = (t+offset)/40.0;\n\t\tfloat weight = 4.0*(percent-percent*percent);\n\t\tvec4 sample = texture2D(tInput, vUv + toCenter * percent * zoomBlurStrength / resolution);\n\t\tsample.rgb*=sample.a;\n\t\tcolor+=sample*weight;\n\t\ttotal+=weight;\n\t}\n\n\tvec4 zoomBlur = color / total;\n\tzoomBlur.rgb /= zoomBlur.a + 0.00001;\n\n\t// color = zoomBlur;\n\n    // rgb split\n    vec2 dir = vUv - vec2( .5 );\n\tfloat d = .7 * length( dir );\n\tnormalize( dir );\n\tvec2 value = d * dir * splitDelta;\n\tvec4 c1 = texture2D( tInput, vUv - value / resolution.x );\n\tvec4 c2 = texture2D( tInput, vUv );\n\tvec4 c3 = texture2D( tInput, vUv + value / resolution.y );\n\tcolor = vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.b );\n\n\n\n    //vignette\n    float dist = distance(vUv, vec2(0.5, 0.5));\n    color.rgb *= smoothstep(0.8, vignetteFallof * 0.799, dist * (vignetteAmount + vignetteFallof));\n\n    //noise\n    color += vec4( vec3( noiseAmount * random( vUv, .00001 * noiseSpeed * time ) ), 1. );\n\n    gl_FragColor = color;\n}"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 direction;\nuniform vec2 resolution;\n\nvoid main() {\n    vec4 color = vec4(0.0);\n    vec2 off1 = vec2(1.3846153846) * direction;\n    vec2 off2 = vec2(3.2307692308) * direction;\n    color += texture2D(tInput, vUv) * 0.2270270270;\n    color += texture2D(tInput, vUv + (off1 / resolution)) * 0.3162162162;\n    color += texture2D(tInput, vUv - (off1 / resolution)) * 0.3162162162;\n    color += texture2D(tInput, vUv + (off2 / resolution)) * 0.0702702703;\n    color += texture2D(tInput, vUv - (off2 / resolution)) * 0.0702702703;\n    \n    gl_FragColor = color;\n}"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform float amount;\nuniform float speed;\nuniform float time;\nvarying vec2 vUv;\n\nfloat random(vec2 n, float offset ){\n\t//return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453);\n\treturn .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);\n}\n\nvoid main() {\n\n\tvec4 color = texture2D(tInput, vUv);\n\n\t//color += amount * ( .5 - random( vec3( 1. ), length( gl_FragCoord ) + speed * .01 * time ) );\n\tcolor += vec4( vec3( amount * random( vUv, .00001 * speed * time ) ), 1. );\n\n\tgl_FragColor = color;\n\n}"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "// varying vec2 vUv;\n// uniform sampler2D tInput;\n\n// const float blur_start = 1.0;\n\n// vec2 offset = vec2(0.001, 0.001);\n\n// float factor = 1.;\n// float strength = 10.;\n\n// const int occurences = 100;\n// float zoom = 1.;\n\n// void main()\n// {\n//     float scale = blur_start * zoom;\n//     vec4 c = vec4(0);\n    \n//     for( int i = 0; i < occurences; ++i ) {\n//       c += texture2D(tInput, (vUv * scale) + offset);\n//       scale += strength / float(occurences);\n//     }\n\n//     gl_FragColor = c * factor;\n// }\n\nvarying vec2 vUv;\nuniform sampler2D tInput;\nuniform vec2 lightPosition;\nuniform float exposure;\nuniform float decay;\nuniform float density;\nuniform float weight;\nuniform int samples;\nconst int MAX_SAMPLES = 100;\nvoid main(){\n  \n  vec2 texCoord = vUv;\n  // Calculate vector from pixel to light source in screen space\n  vec2 deltaTextCoord = texCoord - vec2(0.5, 0.5);\n  // Divide by number of samples and scale by control factor\n  deltaTextCoord *= 1.0 / float(samples) * density;\n  // Store initial sample\n  vec4 color = texture2D(tInput, texCoord);\n  // set up illumination decay factor\n  float illuminationDecay = 1.0;\n  \n  // evaluate the summation for samples number of iterations up to 100\n  for(int i=0; i < MAX_SAMPLES; i++){\n    // work around for dynamic number of loop iterations\n    if(i == samples){\n      break;\n    }\n    \n    // step sample location along ray\n    texCoord -= deltaTextCoord;\n    // retrieve sample at new location\n    vec4 sample = texture2D(tInput, texCoord);\n    // apply sample attenuation scale/decay factors\n    sample *= illuminationDecay * weight;\n    // accumulate combined color\n    color += sample;\n    // update exponential decay factor\n    illuminationDecay *= decay;\n  \n  }\n  // output final color with a further scale control factor\n  gl_FragColor = color * exposure;\n}\n"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform float amount;\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 color = texture2D(tInput, vUv);\n\tfloat r = color.r;\n\tfloat g = color.g;\n\tfloat b = color.b;\n\t\n\tcolor.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));\n\tcolor.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));\n\tcolor.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));\n\t\n\tgl_FragColor = color;\n}"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "uniform float cameraNear;\nuniform float cameraFar;\n\n#ifdef USE_LOGDEPTHBUF\n    uniform float logDepthBufFC;\n#endif\n\nuniform float radius;     // ao radius\nuniform bool onlyAO;      // use only ambient occlusion pass?\n\nuniform vec2 size;        // texture width, height\nuniform float aoClamp;    // depth clamp - reduces haloing at screen edges\n\nuniform float lumInfluence;  // how much luminance affects occlusion\n\nuniform sampler2D tInput;\nuniform sampler2D tDepth;\n\nvarying vec2 vUv;\n\n// #define PI 3.14159265\n#define DL 2.399963229728653  // PI * ( 3.0 - sqrt( 5.0 ) )\n#define EULER 2.718281828459045\n\n        // user variables\n\nconst int samples = 64;     // ao sample count\n\nconst bool useNoise = true;      // use noise instead of pattern for sample dithering\nconst float noiseAmount = 0.0004; // dithering amount\n\nconst float diffArea = 0.4;   // self-shadowing reduction\nconst float gDisplace = 0.4;  // gauss bell center\n\n\n// RGBA depth\n\nvec3 packNormalToRGB( const in vec3 normal ) {\n    return normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n    return 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n    vec4 r = vec4( fract( v * PackFactors ), v );\n    r.yzw -= r.xyz * ShiftRight8; // tidy overflow\n    return r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n    return dot( v, UnpackFactors );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n    return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n    return linearClipZ * ( near - far ) - near;\n}\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n    return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n    return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n\n// generating noise / pattern texture for dithering\n\nvec2 rand( const vec2 coord ) {\n\n    vec2 noise;\n\n    if ( useNoise ) {\n\n        float nx = dot ( coord, vec2( 12.9898, 78.233 ) );\n        float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\n\n        noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n\n    } else {\n\n        float ff = fract( 1.0 - coord.s * ( size.x / 2.0 ) );\n        float gg = fract( coord.t * ( size.y / 2.0 ) );\n\n        noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n\n    }\n\n    return ( noise * 2.0  - 1.0 ) * noiseAmount;\n\n}\n\nfloat readDepth( const in vec2 coord ) {\n\n    float cameraFarPlusNear = cameraFar + cameraNear;\n    float cameraFarMinusNear = cameraFar - cameraNear;\n    float cameraCoef = 2.0 * cameraNear;\n\n    #ifdef USE_LOGDEPTHBUF\n\n        float logz = unpackRGBAToDepth( texture2D( tDepth, coord ) );\n        float w = pow(2.0, (logz / logDepthBufFC)) - 1.0;\n        float z = (logz / w) + 1.0;\n\n    #else\n\n        float z = unpackRGBAToDepth( texture2D( tDepth, coord ) );\n\n    #endif\n\n    return cameraCoef / ( cameraFarPlusNear - z * cameraFarMinusNear );\n\n\n}\n\nfloat compareDepths( const in float depth1, const in float depth2, inout int far ) {\n\n    float garea = 8.0;                         // gauss bell width\n    float diff = ( depth1 - depth2 ) * 100.0;  // depth difference (0-100)\n\n            // reduce left bell width to avoid self-shadowing\n\n    if ( diff < gDisplace ) {\n\n        garea = diffArea;\n\n    } else {\n\n        far = 1;\n\n    }\n\n    float dd = diff - gDisplace;\n    float gauss = pow( EULER, -2.0 * ( dd * dd ) / ( garea * garea ) );\n    return gauss;\n\n}\n\nfloat calcAO( float depth, float dw, float dh ) {\n\n    vec2 vv = vec2( dw, dh );\n\n    vec2 coord1 = vUv + radius * vv;\n    vec2 coord2 = vUv - radius * vv;\n\n    float temp1 = 0.0;\n    float temp2 = 0.0;\n\n    int far = 0;\n    temp1 = compareDepths( depth, readDepth( coord1 ), far );\n\n            // DEPTH EXTRAPOLATION\n\n    if ( far > 0 ) {\n\n        temp2 = compareDepths( readDepth( coord2 ), depth, far );\n        temp1 += ( 1.0 - temp1 ) * temp2;\n\n    }\n\n    return temp1;\n\n}\n\nvoid main() {\n\n    vec2 noise = rand( vUv );\n    float depth = readDepth( vUv );\n\n    float tt = clamp( depth, aoClamp, 1.0 );\n\n    float w = ( 1.0 / size.x ) / tt + ( noise.x * ( 1.0 - noise.x ) );\n    float h = ( 1.0 / size.y ) / tt + ( noise.y * ( 1.0 - noise.y ) );\n\n    float ao = 0.0;\n\n    float dz = 1.0 / float( samples );\n    float l = 0.0;\n    float z = 1.0 - dz / 2.0;\n\n    for ( int i = 0; i <= samples; i ++ ) {\n\n        float r = sqrt( 1.0 - z );\n\n        float pw = cos( l ) * r;\n        float ph = sin( l ) * r;\n        ao += calcAO( depth, pw * w, ph * h );\n        z = z - dz;\n        l = l + DL;\n\n    }\n\n    ao /= float( samples );\n    ao = 1.0 - ao;\n\n    vec3 color = texture2D( tInput, vUv ).rgb;\n\n    vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\n    float lum = dot( color.rgb, lumcoeff );\n    vec3 luminance = vec3( lum );\n\n    vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );  // mix( color * ao, white, luminance )\n\n    if ( onlyAO ) {\n\n        final = vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );  // ambient occlusion only\n\n    }\n\n    gl_FragColor = texture2D(tInput, vUv);\n\n}"

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(5).EventEmitter

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(42)
var isFunction = __webpack_require__(10)
var parseHeaders = __webpack_require__(45)
var xtend = __webpack_require__(75)

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
/* 75 */
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
/* 76 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tInput;\nuniform vec2 resolution;\nvarying vec2 vUv;\n\n#define FXAA_REDUCE_MIN   (1.0/128.0)\n#define FXAA_REDUCE_MUL   (1.0/8.0)\n#define FXAA_SPAN_MAX     8.0\n\nvoid main() {\n\n    vec2 res = 1. / resolution;\n\n    vec3 rgbNW = texture2D( tInput, ( vUv.xy + vec2( -1.0, -1.0 ) * res ) ).xyz;\n    vec3 rgbNE = texture2D( tInput, ( vUv.xy + vec2( 1.0, -1.0 ) * res ) ).xyz;\n    vec3 rgbSW = texture2D( tInput, ( vUv.xy + vec2( -1.0, 1.0 ) * res ) ).xyz;\n    vec3 rgbSE = texture2D( tInput, ( vUv.xy + vec2( 1.0, 1.0 ) * res ) ).xyz;\n    vec4 rgbaM  = texture2D( tInput,  vUv.xy  * res );\n    vec3 rgbM  = rgbaM.xyz;\n    vec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n    float lumaNW = dot( rgbNW, luma );\n    float lumaNE = dot( rgbNE, luma );\n    float lumaSW = dot( rgbSW, luma );\n    float lumaSE = dot( rgbSE, luma );\n    float lumaM  = dot( rgbM,  luma );\n    float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );\n    float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );\n\n    float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );\n    dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),\n          max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                dir * rcpDirMin)) * res;\n    vec4 rgbA = (1.0/2.0) * (\n    texture2D(tInput,  vUv.xy + dir * (1.0/3.0 - 0.5)) +\n    texture2D(tInput,  vUv.xy + dir * (2.0/3.0 - 0.5)));\n    vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n    texture2D(tInput,  vUv.xy + dir * (0.0/3.0 - 0.5)) +\n    texture2D(tInput,  vUv.xy + dir * (3.0/3.0 - 0.5)));\n    float lumaB = dot(rgbB, vec4(luma, 0.0));\n\n    if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {\n        gl_FragColor = rgbA;\n    } else {\n        gl_FragColor = rgbB;\n    }\n\n    //gl_FragColor = vec4( texture2D( tInput,vUv ).xyz, 1. );\n}"

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Pass2 = __webpack_require__(3);

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjBmNmM0YmRiNTZjZjFhOTVjNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL2NvcmUvUGFzcy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9NaWRpQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZnVuY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9hdWRpby1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvY2FuLXBsYXktc3JjLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvcmVzdW1lLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbmZpZy9NUEtNaW5pLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JvdHRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0xlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9SaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1RvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1NvdW5kTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3Ntb290aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9Db21wb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vcGFzc2VzL0N1c3RvbVBhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aHJlZS1vcmJpdC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXVkaW8tZnJlcXVlbmN5LXRvLWluZGV4L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9sdWNreS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vcGFzc2VzL0NvcHlQYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcmFuZG9tRnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvbWltZS10eXBlcy5qc29uIiwid2VicGFjazovLy8uL34vY2xhbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3ItZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwid2VicGFjazovLy8uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaWdodC1ub3cvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpbXBsZS1tZWRpYS1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9tZWRpYS1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJtaWRpL3dlYm1pZGkubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vc2hhZGVycy9ib3R0b20udmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vc2hhZGVycy9wcm9ncmVzcy5mcmFnLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYWRkaXRpdmUuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYmFzaWMudnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYmxvb20uZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYmxvb20yLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2Jsb29tdGVzdC5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ib3gtYmx1ci5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9jb3B5LmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2N1c3RvbS5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9kb2YuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvZ2F1c3NpYW4uZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvbm9pc2UuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvcmFkaWFsLWJsdXIuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvc2VwaWEuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvc3Nhby5mcyIsIndlYnBhY2s6Ly8vLi9+L3hoci1wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3hoci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9meGFhLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9wYXNzZXMvRlhBQVBhc3MuanMiXSwibmFtZXMiOlsiRXZlbnRzTWFuYWdlciIsImV2ZW50IiwiZGF0YSIsImxpc3RlbmVycyIsImV2ZW50c0xpc3QiLCJpIiwibGVuIiwibGVuZ3RoIiwiZm4iLCJwdXNoIiwibGlzdGVuZXIiLCJvZmYiLCJfIiwib24iLCJjb25zb2xlIiwid2FybiIsInRhcmdldEV2ZW50cyIsInRhcmdldCIsIkV2ZW50cyIsIktFWUJPQVJEIiwiS0VZRE9XTiIsIktFWVVQIiwiS0VZUFJFU1MiLCJTUEFDRUhPTEQiLCJTUEFDRVVQIiwiU1BBQ0VET1dOIiwiU09VTkRTIiwiQ0FOUExBWSIsIkVORCIsIkxPV0tJQ0siLCJNSURETEVLSUNLIiwiSElHSEtJQ0siLCJUUkVNT0xPIiwiU1RBUlQiLCJYUCIsIlVJIiwiSElEREVOIiwiQWJzdHJhY3RGYWNlIiwiZ2VvbWV0cnkiLCJjb2xvciIsIm5hbWUiLCJzaWRlIiwiVEhSRUUiLCJGcm9udFNpZGUiLCJwbGFuZUdlb21ldHJ5Iiwib25LZXlQcmVzcyIsIm9uU3BhY2VIb2xkIiwib25TdGFydCIsIm9uSGlkZGVuVUkiLCJ1bmlmb3JtcyIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsIlNoYWRlckxpYiIsInR5cGUiLCJ2YWx1ZSIsIkNvbG9yIiwiVmVjdG9yMyIsIndpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnREaXZpc2lvbnMiLCJWZWN0b3IyIiwib3JpZW50YXRpb25zIiwiZHVyYXRpb24iLCJmYWN0b3IiLCJlYXNlIiwiRXhwbyIsImVhc2VPdXQiLCJkZWJ1ZyIsInN0YXJ0ZWQiLCJpc1NwYWNlRG93biIsImluaXRHdWkiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwicmVxdWlyZSIsImZyYWdtZW50U2hhZGVyIiwibGlnaHRzIiwidHJhbnNwYXJlbnQiLCJmb2ciLCJtZXNoIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiaXNPcGVuIiwiZ3VpIiwiYWRkRm9sZGVyIiwib3BlbiIsInRpbWUiLCJ1cGRhdGVEaXZpc2lvbnMiLCJvcmllbnRhdGlvbk5hbWUiLCJzY2FsYXIiLCJvcmllbnRhdGlvbiIsIm11bHRpcGx5U2NhbGFyIiwieCIsInkiLCJ6Iiwic3BlZWQiLCJzcGVlZE1pbiIsInRsIiwiVGltZWxpbmVMaXRlIiwiYmxhY2tNb2RlIiwic2hvdyIsInRvIiwiaGlkZSIsImtleSIsIlR3ZWVuTWF4IiwiaW52ZXJ0IiwiVGltZWxpbmVNYXgiLCJ1UHJvZ3Jlc3MiLCJvbkNvbXBsZXRlIiwic2V0IiwiZnJvbVRvIiwiT2JqZWN0M0QiLCJQYXNzIiwiZW5hYmxlZCIsInJlc29sdXRpb24iLCJ0SW5wdXQiLCJUZXh0dXJlIiwiZGVmYXVsdCIsInNoYWRlciIsImZsYXRTaGFkaW5nIiwiZGVwdGhXcml0ZSIsImRlcHRoVGVzdCIsIm1hcCIsIm4iLCJzdGFydDEiLCJzdG9wMSIsInN0YXJ0MiIsInN0b3AyIiwiTWlkaUNvbnRyb2xsZXIiLCJjb25maWciLCJpbnN0YW5jZSIsInBhZHMiLCJrbm9icyIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJvbk1lc3NhZ2UiLCJlbmFibGUiLCJlcnIiLCJuYXZpZ2F0b3IiLCJyZXF1ZXN0TUlESUFjY2VzcyIsInN5c2V4IiwidGhlbiIsImFsZXJ0IiwiaW5wdXRzIiwiaW5wdXQiLCJwYXJzZUNvbmZpZyIsImFkZExpc3RlbmVyIiwiZSIsImtleXMiLCJPYmplY3QiLCJzdWJzY3JpcHRpb25zIiwiaiIsIm51bWJlciIsImNoYW5uZWwiLCJjYWxsYmFjayIsIm5vdGUiLCJ2ZWxvY2l0eSIsImNvbnRyb2xsZXIiLCJlcnJvciIsIkVycm9yIiwibG9nIiwiaWQiLCJmaW5kTnVtYmVySW5QYWRzIiwiZmluZE51bWJlckluS25vYnMiLCJyZWdpc3RlclBhZCIsInJlZ2lzdGVyS25vYiIsIkZhY2VzQ29udHJvbGxlciIsImNvbnRhaW5lciIsImZhY2VzIiwiZGl2aXNpb25zIiwiZ2VuZXJhdGVEaXZpc2lvbnMiLCJsYXN0WCIsImxhc3RZIiwiYWxsb3dJbnZlcnQiLCJzcGVlZENvbnRhaW5lciIsImZpcnN0U3BhY2VVcCIsImhpZ2hraWNrZWQiLCJsb3draWNrZWQiLCJkaXJlY3Rpb24iLCJjdXJyZW50QmxhY2tNb2RlIiwiY3VycmVudFNjYWxlTW9kZSIsIm9uTG93S2ljayIsIm9uTWlkZGxlS2ljayIsIm9uSGlnaEtpY2siLCJvblRyZW1vbG8iLCJvblVJSGlkZGVuIiwib25Tb3VuZEVuZCIsIm9uU3BhY2VVcCIsIm9uU3BhY2VEb3duIiwiYmxhY2tNb2RlVmVydGljYWwiLCJibGFja01vZGVIb3Jpem9udGFsIiwiYmxhY2tNb2RlVHVubmVsVG9wIiwiYmxhY2tNb2RlVHVubmVsQm90dG9tIiwiYmxhY2tNb2RlQm90dG9tIiwiYmxhY2tNb2RlRnVsbCIsImJsYWNrTW9kZXMiLCJzZXRCbGFja01vZGUiLCJjaGFuZ2VTY2FsZSIsInJlYWN0aW9ucyIsImNoYW5nZVNjYWxlWCIsImNoYW5nZVNjYWxlWSIsImNoYW5nZVNjYWxlQm90aCIsInNjYWxpbmdzIiwib25QYWREb3duIiwib25Lbm9iQ2hhbmdlIiwiZmFjZSIsIm1pbiIsIm1heCIsImJldHdlZW4iLCJwb3NzaWJsZURpdmlzaW9uWCIsImZpbmREaXZpc2lvbnMiLCJyZG1YSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXZpc2lvblgiLCJpbmRleE9mIiwicG9zc2libGVEaXZpc2lvblkiLCJyZG1ZSW5kZXgiLCJkaXZpc2lvblkiLCJzZXRTdHJpcGVzIiwiYWxsIiwiY3VycmVudCIsInJhbmdlIiwiZGl2aXNpb24iLCJpbmRleCIsImZpbHRlciIsInNvdW5kRW5kZWQiLCJyZG0iLCJlbWl0IiwicmVzZXQiLCJvbkVuZCIsIm9wdGlvbnMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZSIsInJvdGF0aW9uIiwidXBkYXRlIiwicHJvZ3Jlc3MiLCJlYXNlSW5PdXQiLCJNb3VzZU1hbmFnZXIiLCJjaGVja01vdXNlU3BlZWQiLCJtb3VzZVNwZWVkWCIsIm1vdXNlU3BlZWRZIiwibW91c2VMYXN0WCIsIm1vdXNlTGFzdFkiLCJtb3VzZURpcmVjdGlvblgiLCJtb3VzZURpcmVjdGlvblkiLCJtb3VzZVgiLCJtb3VzZVkiLCJzZXRJbnRlcnZhbCIsImdldFNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldERpcmVjdGlvbiIsInBhZ2VYIiwicGFnZVkiLCJLZXlib2FyZENvbnRyb2xsZXIiLCJvbktleVVwIiwib25LZXlEb3duIiwiQmFja2dyb3VuZCIsIkJvdHRvbSIsImhvcml6b250YWwiLCJob3Jpem9udGFsU2tldzEiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU2tldzEiLCJ2ZXJ0aWNhbFNrZXcyIiwidmlzaWJpbGl0eVRvZ2dsZXIiLCJ2aXNpYmlsaXR5SGlkZXIiLCJ2aXNpYmlsaXR5U2hvd2VyIiwiTGVmdCIsIlJpZ2h0IiwiQmFja1NpZGUiLCJUb3AiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJTb3VuZE1hbmFnZXIiLCJiYXNzIiwibWlkQmFzcyIsInZvaWNlIiwiZHJ1bSIsInBhdXNlIiwiYXNzZXRzIiwic291cmNlcyIsImludHJvIiwieHAiLCJzdGFydCIsImluaXRTb3VuZCIsImxvd0tpY2siLCJtaWRkbGVLaWNrIiwidHJlbW9sbyIsImhpZ2hLaWNrIiwicmFuZ2VzIiwic291bmRHdWkiLCJvbkNoYW5nZSIsInBsYXllciIsInBsYXkiLCJwbGF5ZXJzIiwiYXVkaW8iLCJhbmFseXNlciIsIm5vZGUiLCJBdWRpbyIsInZvbHVtZSIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiYXVkaWJsZSIsInN0ZXJlbyIsImxvYWRlZCIsInNyYyIsImZyZXFzIiwiZnJlcXVlbmNpZXMiLCJsZXZlbCIsInF1ZXVlIiwic21vb3RoIiwiY29lZmYiLCJpbml0IiwidW5kZWZpbmVkIiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9nbyIsIiRhY3Rpb24iLCIkYWN0aW9uTGFiZWwiLCIkYWN0aW9uRmlsbCIsIiR0dXRvIiwiJGNyZWRpdHMiLCIkY3JlZGl0SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHByb2dyZXNzRmlsbCIsIiRoZWxwIiwiJGJhY2tncm91bmQiLCJub3ciLCJEYXRlIiwibWF4VGltZSIsImhlbHBJc09wZW4iLCJpc0NvbXBsZXRlZCIsIm1pbkZpbGwiLCJtYXhGaWxsIiwiZmlsbCIsInJlc2V0dGVkIiwiaXNEb3duIiwicGF1c2VkIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJjc3MiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwib25FbmRYUCIsIm9uQ2xpY2tIZWxwIiwidGxIZWxwU2hvdyIsInRsSGVscEhpZGUiLCJkaXNwbGF5IiwidGltZVNjYWxlIiwicmV2ZXJzZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImlubmVySFRNTCIsImtpbGwiLCJyZXN0YXJ0Iiwic3RhZ2dlckZyb21UbyIsIkFycmF5IiwiZnJvbSIsImRpc3BsYXlDcmVkaXRzIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVOaWwiLCJhcyIsImEiLCJtZXJnZSIsImFyZ3MiLCJmaWx0ZXJlZCIsInJlZHVjZSIsImFjYyIsImN1ciIsImZvckVhY2giLCJDb21wb3NlciIsInJlbmRlcmVyIiwib3B0cyIsImRlZmF1bHRzIiwibWluRmlsdGVyIiwiTGluZWFyRmlsdGVyIiwibWFnRmlsdGVyIiwid3JhcFMiLCJDbGFtcFRvRWRnZVdyYXBwaW5nIiwid3JhcFQiLCJmb3JtYXQiLCJSR0JGb3JtYXQiLCJVbnNpZ25lZEJ5dGVUeXBlIiwic3RlbmNpbEJ1ZmZlciIsImZyb250IiwiV2ViR0xSZW5kZXJUYXJnZXQiLCJiYWNrIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsImRlZmF1bHRNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwicXVhZCIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJjb3B5UGFzcyIsInciLCJoIiwicHJvamVjdGlvbk1hdHJpeCIsIm1ha2VPcnRob2dyYXBoaWMiLCJuZWFyIiwiZmFyIiwic2V0U2l6ZSIsIm91dHB1dCIsIndyaXRlIiwicmVhZCIsInRlbXAiLCJwYXNzIiwidGV4dHVyZSIsInJlbmRlciIsInN3YXBCdWZmZXJzIiwiZGVzdCIsIkN1c3RvbVBhc3MiLCJBcHAiLCJ1aUhpZGRlbiIsImJhY2tncm91bmRDb2xvciIsImZhY2VzQ29udHJvbGxlciIsImtleWJvYXJkQ29udHJvbGxlciIsInJlc2l6ZSIsImJpbmRMaXN0ZW5lcnMiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldENsZWFyQ29sb3IiLCJzaGFkb3dNYXAiLCJQQ0ZTb2Z0U2hhZG93TWFwIiwiV0FHTkVSIiwidmVydGV4U2hhZGVyc1BhdGgiLCJmcmFnbWVudFNoYWRlcnNQYXRoIiwiY29tcG9zZXIiLCJibG9vbVdpZHRoIiwiaXNUb3VjaCIsImJsb29tSGVpZ2h0IiwiYmxvb21QYXNzIiwiTXVsdGlQYXNzQmxvb21QYXNzIiwicGFyYW1zIiwic3RyZW5ndGgiLCJibHVyQW1vdW50IiwiYXBwbHlab29tQmx1ciIsInpvb21CbHVyU3RyZW5ndGgiLCJ6b29tQmx1ckNlbnRlciIsInJnYlBhc3MiLCJSR0JTcGxpdFBhc3MiLCJkZWx0YSIsIm5vaXNlUGFzcyIsIk5vaXNlUGFzcyIsImFtb3VudCIsInZpZ25ldHRlUGFzcyIsIlZpZ25ldHRlUGFzcyIsImN1c3RvbVBhc3MiLCJzcGxpdERlbHRhIiwibm9pc2VBbW91bnQiLCJub2lzZVNwZWVkIiwidmlnbmV0dGVBbW91bnQiLCJ2aWduZXR0ZUZhbGxvZiIsImZ4YWFQYXNzIiwiRm9nIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsImxvb2tBdCIsImFkZENvbnRyb2xzIiwiYWRkTGlnaHRzIiwiYWRkRWxlbWVudHMiLCJPcmJpdENvbnRyb2xzIiwiZGl2aXNhdG9yIiwiUGxhbmVHZW9tZXRyeSIsIm90aGVyR2VvbWV0cnkiLCJsZWZ0UmlnaHRHZW9tZXRyeSIsInRvcEJvdHRvbUdlb21ldHJ5IiwiYmFja2dyb3VuZEdlb21ldHJ5IiwiUEkiLCJyZWdpc3RlciIsInNlbnMiLCJkZWxheSIsInRvU2NyZWVuIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIlJhbmdlIiwibWluTGV2ZWwiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwidGltZW91dCIsImNvbnRleHQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJsdWNreSIsImNoYW5jZXMiLCJDb3B5UGFzcyIsInJhbmRvbUZyb21BcnJheSIsImFycmF5IiwiRlhBQVBhc3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7OztJQUtNQSxhOzs7Ozs7Ozs7QUFFRjs7Ozs7NkJBS2NDLEssRUFBcUI7QUFBQSxnQkFBZEMsSUFBYyx1RUFBUCxJQUFPOzs7QUFFL0IsZ0JBQU1DLFlBQVlILGNBQWNJLFVBQWQsQ0FBeUJILEtBQXpCLENBQWxCOztBQUVBLGdCQUFHLENBQUNFLFNBQUosRUFBZTtBQUNYO0FBQ0g7O0FBRUQsaUJBQUssSUFBSUUsSUFBSSxDQUFSLEVBQVdDLE1BQU1ILFVBQVVJLE1BQWhDLEVBQXdDRixJQUFJQyxHQUE1QyxFQUFpREQsR0FBakQ7QUFBdURGLDBCQUFVRSxDQUFWLEVBQWFHLEVBQWIsQ0FBaUJOLElBQWpCO0FBQXZEO0FBRUg7O0FBRUQ7Ozs7Ozs7OzJCQUtZRCxLLEVBQU9PLEUsRUFBSzs7QUFFcEI7O0FBRUEsZ0JBQUcsQ0FBQ1IsY0FBY0ksVUFBbEIsRUFBOEJKLGNBQWNJLFVBQWQsR0FBMkIsRUFBM0I7O0FBRTlCLGdCQUFHLENBQUNKLGNBQWNJLFVBQWQsQ0FBeUJILEtBQXpCLENBQUosRUFBcUNELGNBQWNJLFVBQWQsQ0FBeUJILEtBQXpCLElBQWtDLEVBQWxDLENBTmpCLENBTXVEOztBQUUzRUQsMEJBQWNJLFVBQWQsQ0FBeUJILEtBQXpCLEVBQWdDUSxJQUFoQyxDQUFxQyxFQUFDRCxJQUFHQSxFQUFKLEVBQXJDO0FBRUg7Ozs2QkFFWVAsSyxFQUFPTyxFLEVBQUs7O0FBRXJCLGdCQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBRVIsSUFBRixFQUFXOztBQUV4QkYsOEJBQWNXLEdBQWQsQ0FBa0JWLEtBQWxCLEVBQXlCUyxRQUF6QjtBQUNBRixtQkFBR04sSUFBSDtBQUNILGFBSkQ7O0FBTUFRLHFCQUFTRSxDQUFULEdBQWFKLEVBQWI7QUFDQVIsMEJBQWNhLEVBQWQsQ0FBa0JaLEtBQWxCLEVBQXlCUyxRQUF6QjtBQUNIOzs7NEJBR1lULEssRUFBT08sRSxFQUFLOztBQUVyQixnQkFBTUwsWUFBWUgsY0FBY0ksVUFBZCxDQUF5QkgsS0FBekIsQ0FBbEI7O0FBRUEsZ0JBQUcsQ0FBQ0UsU0FBSixFQUFlO0FBQ1hXLHdCQUFRQyxJQUFSLENBQWEsa0VBQWIsRUFBaUZkLEtBQWpGO0FBQ0E7QUFDSDs7QUFFRCxnQkFBRyxDQUFDTyxFQUFKLEVBQVE7QUFDSk0sd0JBQVFDLElBQVIsQ0FBYSwrQ0FBYjtBQUNBO0FBQ0g7O0FBRUQsZ0JBQU1DLGVBQWUsRUFBckI7O0FBRUEsaUJBQUssSUFBSVgsSUFBSSxDQUFSLEVBQVdDLE1BQU1ILFVBQVVJLE1BQWhDLEVBQXdDRixJQUFJQyxHQUE1QyxFQUFpREQsR0FBakQsRUFBdUQ7O0FBRW5ELG9CQUFNWSxTQUFTZCxVQUFVRSxDQUFWLENBQWY7O0FBRUEsb0JBQUdZLE9BQU9ULEVBQVAsS0FBY0EsRUFBZCxJQUFvQlMsT0FBT1QsRUFBUCxDQUFVSSxDQUFWLEtBQWdCSixFQUF2QyxFQUE0QztBQUFFO0FBQzFDUSxpQ0FBYVAsSUFBYixDQUFrQlEsTUFBbEI7QUFDSDtBQUNKOztBQUdELGdCQUFJRCxhQUFhVCxNQUFiLEdBQXNCLENBQTFCLEVBQ0lQLGNBQWNJLFVBQWQsQ0FBeUJILEtBQXpCLElBQWtDZSxZQUFsQyxDQURKLEtBR0ksT0FBT2hCLGNBQWNJLFVBQWQsQ0FBeUJILEtBQXpCLENBQVA7QUFFUDs7Ozs7O2tCQUdVRCxhOzs7Ozs7Ozs7Ozs7Ozs7QUN4RmY7Ozs7QUFJQSxJQUFNa0IsU0FBUztBQUNYQyxjQUFVO0FBQ05DLGlCQUFTLGtCQURIO0FBRU5DLGVBQU8sZ0JBRkQ7QUFHTkMsa0JBQVUsbUJBSEo7QUFJTkMsbUJBQVcsb0JBSkw7QUFLTkMsaUJBQVMsa0JBTEg7QUFNTkMsbUJBQVc7QUFOTCxLQURDO0FBU1hDO0FBQ0lDLGlCQUFTLGdCQURiO0FBRUlDLGFBQUssWUFGVDtBQUdJQyxpQkFBUyxnQkFIYjtBQUlJQyxvQkFBWSxtQkFKaEI7QUFLSUMsa0JBQVUsaUJBTGQ7QUFNSUMsaUJBQVMsZ0JBTmI7QUFPSUMsZUFBTztBQVBYLGNBUVMsWUFSVCxDQVRXO0FBbUJYQyxRQUFJO0FBQ0FELGVBQU8sVUFEUDtBQUVBTCxhQUFLO0FBRkwsS0FuQk87QUF1QlhPLFFBQUk7QUFDQUMsZ0JBQVE7QUFEUjtBQXZCTyxDQUFmOztrQkE0QmVsQixNOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ2Y7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTW1CLFk7OztBQUVGLDBCQUFjQyxRQUFkLEVBQXlFO0FBQUEsWUFBakRDLEtBQWlELHVFQUF6QyxRQUF5QztBQUFBLFlBQS9CQyxJQUErQjtBQUFBLFlBQXpCQyxJQUF5Qix1RUFBbEJDLE1BQU1DLFNBQVk7O0FBQUE7O0FBQUE7O0FBR3JFLGNBQUtDLGFBQUwsR0FBcUJOLFFBQXJCO0FBQ0EsY0FBS0UsSUFBTCxHQUFZQSxJQUFaOztBQUVBLGNBQUtLLFVBQUwsR0FBb0IsTUFBS0EsVUFBekI7QUFDQSxjQUFLQyxXQUFMLEdBQXFCLE1BQUtBLFdBQTFCO0FBQ0EsY0FBS0MsT0FBTCxHQUFpQixNQUFLQSxPQUF0QjtBQUNBLGNBQUtDLFVBQUwsR0FBb0IsTUFBS0EsVUFBekI7O0FBRUEsY0FBS0MsUUFBTCxHQUFnQlAsTUFBTVEsYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJULE1BQU1VLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUJILFFBQW5ELENBQWhCO0FBQ0EsY0FBS0EsUUFBTCxDQUFjLE9BQWQsSUFBeUIsRUFBRUksTUFBSyxHQUFQLEVBQVlDLE9BQU8sR0FBbkIsRUFBekI7QUFDQSxjQUFLTCxRQUFMLENBQWMsU0FBZCxJQUEyQixFQUFFSSxNQUFNLEdBQVIsRUFBYUMsT0FBTyxJQUFJWixNQUFNYSxLQUFWLENBQWdCaEIsS0FBaEIsQ0FBcEIsRUFBM0I7QUFDQSxjQUFLVSxRQUFMLENBQWMsb0JBQWQsSUFBc0MsRUFBRUksTUFBTSxJQUFSLEVBQWNDLE9BQU8sSUFBSVosTUFBTWMsT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFyQixFQUF0QztBQUNBLGNBQUtQLFFBQUwsQ0FBYyxTQUFkLElBQTJCLEVBQUVJLE1BQU0sR0FBUixFQUFhQyxPQUFPLEdBQXBCLEVBQTNCO0FBQ0EsY0FBS0wsUUFBTCxDQUFjLFNBQWQsSUFBMkIsRUFBRUksTUFBTSxJQUFSLEVBQWNDLE9BQU8sSUFBSVosTUFBTWMsT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFyQixFQUEzQjtBQUNBLGNBQUtQLFFBQUwsQ0FBYyxRQUFkLElBQTBCLEVBQUVJLE1BQU0sR0FBUixFQUFhQyxPQUFPRyxPQUFPQyxLQUEzQixFQUExQjtBQUNBLGNBQUtULFFBQUwsQ0FBYyxTQUFkLElBQTJCLEVBQUVJLE1BQU0sR0FBUixFQUFhQyxPQUFPRyxPQUFPRSxNQUEzQixFQUEzQjtBQUNBLGNBQUtWLFFBQUwsQ0FBYyxTQUFkLElBQTJCLEVBQUVJLE1BQU0sR0FBUixFQUFhQyxPQUFPRyxPQUFPbEQsTUFBM0IsRUFBM0I7QUFDQSxjQUFLMEMsUUFBTCxDQUFjLFdBQWQsSUFBNkIsRUFBRUksTUFBTSxHQUFSLEVBQWFDLE9BQU8sR0FBcEIsRUFBN0I7QUFDQSxjQUFLTCxRQUFMLENBQWMsU0FBZCxFQUF5QkssS0FBekIsR0FBaUMsR0FBakM7O0FBRUEsY0FBS00sY0FBTCxHQUFzQixJQUFJbEIsTUFBTW1CLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsRUFBckIsQ0FBdEI7O0FBRUEsY0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxjQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLGNBQUtDLElBQUwsR0FBWUMsS0FBS0MsT0FBakI7QUFDQSxjQUFLQyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsY0FBS0MsV0FBTCxHQUFtQixLQUFuQjs7QUFFQSxZQUFLLE1BQUtGLEtBQVYsRUFBa0I7QUFDZCxrQkFBS0csT0FBTCxDQUFhLEtBQWI7QUFDSDs7QUFFRCxjQUFLQyxRQUFMLEdBQWdCLElBQUk5QixNQUFNK0IsY0FBVixDQUF5QjtBQUNyQ0MsMEJBQWMsbUJBQUFDLENBQVEsRUFBUixDQUR1QjtBQUVyQztBQUNBQyw0QkFBZ0IsbUJBQUFELENBQVEsRUFBUixDQUhxQjtBQUlyQzFCLHNCQUFVLE1BQUtBLFFBSnNCO0FBS3JDNEIsb0JBQVEsS0FMNkI7QUFNckNwQyxrQkFBTUEsSUFOK0I7QUFPckNxQyx5QkFBYSxJQVB3QjtBQVFyQ0MsaUJBQUs7QUFSZ0MsU0FBekIsQ0FBaEI7O0FBV0EsY0FBS0MsSUFBTCxHQUFZLElBQUl0QyxNQUFNdUMsSUFBVixDQUFlLE1BQUtyQyxhQUFwQixFQUFtQyxNQUFLNEIsUUFBeEMsQ0FBWjtBQUNBLGNBQUtRLElBQUwsQ0FBVUUsVUFBVixHQUF1QixJQUF2QjtBQUNBLGNBQUtGLElBQUwsQ0FBVUcsYUFBVixHQUEwQixJQUExQjtBQUNBLGNBQUtDLEdBQUwsQ0FBUyxNQUFLSixJQUFkOztBQUVBLGdDQUFjbkUsRUFBZCxDQUFpQixpQkFBT00sUUFBUCxDQUFnQkcsUUFBakMsRUFBMkMsTUFBS3VCLFVBQWhEO0FBQ0E7QUFDQSxnQ0FBY2hDLEVBQWQsQ0FBaUIsaUJBQU9xQixFQUFQLENBQVVELEtBQTNCLEVBQWtDLE1BQUtjLE9BQXZDO0FBQ0EsZ0NBQWNsQyxFQUFkLENBQWlCLGlCQUFPc0IsRUFBUCxDQUFVQyxNQUEzQixFQUFtQyxNQUFLWSxVQUF4QztBQXhEcUU7QUF5RHhFOzs7O2dDQUVTcUMsTSxFQUFTO0FBQ2YsaUJBQUtDLEdBQUwsR0FBVzdCLE9BQU82QixHQUFQLENBQVdDLFNBQVgsQ0FBcUIsS0FBSy9DLElBQTFCLENBQVg7QUFDQSxpQkFBSzhDLEdBQUwsQ0FBU0YsR0FBVCxDQUFhLEtBQUtuQyxRQUFMLENBQWMsb0JBQWQsRUFBb0NLLEtBQWpELEVBQXdELEdBQXhELEVBQTZELENBQUMsQ0FBOUQsRUFBaUUsQ0FBakUsRUFBb0VkLElBQXBFLENBQXlFLGVBQXpFO0FBQ0EsaUJBQUs4QyxHQUFMLENBQVNGLEdBQVQsQ0FBYSxLQUFLbkMsUUFBTCxDQUFjLG9CQUFkLEVBQW9DSyxLQUFqRCxFQUF3RCxHQUF4RCxFQUE2RCxDQUFDLENBQTlELEVBQWlFLENBQWpFLEVBQW9FZCxJQUFwRSxDQUF5RSxlQUF6RTtBQUNBLGlCQUFLOEMsR0FBTCxDQUFTRixHQUFULENBQWEsS0FBS25DLFFBQUwsQ0FBYyxvQkFBZCxFQUFvQ0ssS0FBakQsRUFBd0QsR0FBeEQsRUFBNkQsQ0FBQyxDQUE5RCxFQUFpRSxDQUFqRSxFQUFvRWQsSUFBcEUsQ0FBeUUsZUFBekU7QUFDQSxpQkFBSzhDLEdBQUwsQ0FBU0YsR0FBVCxDQUFhLEtBQUtuQyxRQUFMLENBQWMsU0FBZCxFQUF5QkssS0FBdEMsRUFBNkMsR0FBN0MsRUFBa0QsQ0FBbEQsRUFBcUQsR0FBckQsRUFBMERkLElBQTFELENBQStELFNBQS9EO0FBQ0EsaUJBQUs4QyxHQUFMLENBQVNGLEdBQVQsQ0FBYSxLQUFLbkMsUUFBTCxDQUFjLFNBQWQsRUFBeUJLLEtBQXRDLEVBQTZDLEdBQTdDLEVBQWtELENBQWxELEVBQXFELEdBQXJELEVBQTBEZCxJQUExRCxDQUErRCxTQUEvRDtBQUNBLGlCQUFLOEMsR0FBTCxDQUFTRixHQUFULENBQWEsS0FBS25DLFFBQUwsQ0FBYyxTQUFkLEVBQXlCSyxLQUF0QyxFQUE2QyxHQUE3QyxFQUFrRCxDQUFsRCxFQUFxRCxHQUFyRCxFQUEwRGQsSUFBMUQsQ0FBK0QsU0FBL0Q7O0FBRUE2QyxzQkFBVSxLQUFLQyxHQUFMLENBQVNFLElBQVQsRUFBVjtBQUNIOzs7K0JBRVFDLEksRUFBTztBQUNaLGlCQUFLeEMsUUFBTCxDQUFjLE9BQWQsRUFBdUJLLEtBQXZCLEdBQStCbUMsSUFBL0I7QUFDSDs7O3NDQUVlbEQsSyxFQUFRO0FBQ3BCLGlCQUFLbUQsZUFBTCxDQUFxQixDQUFyQixFQUF3QixDQUF4QjtBQUNIOzs7bUNBRVlDLGUsRUFBNEM7QUFBQSxnQkFBM0JDLE1BQTJCLHVFQUFsQixDQUFrQjtBQUFBLGdCQUFmN0IsUUFBZSx1RUFBSixDQUFJOztBQUNyRCxnQkFBTThCLGNBQWMsS0FBSy9CLFlBQUwsQ0FBa0I2QixlQUFsQixDQUFwQjs7QUFFQSxnQkFBS0UsV0FBTCxFQUFtQjtBQUNmLG9CQUFNMUMsUUFBUTBDLFlBQVkxQyxLQUFaLEdBQW9CMkMsY0FBcEIsQ0FBbUNGLE1BQW5DLENBQWQsQ0FEZSxDQUMyQzs7QUFFMUQscUJBQUszQyxRQUFMLENBQWMsb0JBQWQsRUFBb0NLLEtBQXBDLENBQTBDeUMsQ0FBMUMsR0FBOEM1QyxNQUFNNEMsQ0FBcEQ7QUFDQSxxQkFBSzlDLFFBQUwsQ0FBYyxvQkFBZCxFQUFvQ0ssS0FBcEMsQ0FBMEMwQyxDQUExQyxHQUE4QzdDLE1BQU02QyxDQUFwRDtBQUNBLHFCQUFLL0MsUUFBTCxDQUFjLG9CQUFkLEVBQW9DSyxLQUFwQyxDQUEwQzJDLENBQTFDLEdBQThDOUMsTUFBTThDLENBQXBEO0FBQ0g7QUFDSjs7O3lDQUVpQjtBQUNkO0FBQ0g7OztzQ0FFcUM7QUFBQSxnQkFBeEJDLEtBQXdCLHVFQUFoQixLQUFLQyxRQUFXOztBQUNsQyxpQkFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7OztpQ0FFUztBQUNOLGdCQUFNRSxLQUFLLElBQUlDLFlBQUosRUFBWDs7QUFFQSxnQkFBSyxLQUFLQyxTQUFWLEVBQXNCO0FBQ2xCLHFCQUFLQSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0FGLG1CQUFHaEIsR0FBSCxDQUFPLEtBQUttQixJQUFMLEVBQVA7QUFDSDs7QUFFRCxnQkFBTUMsS0FBSyxLQUFLdkQsUUFBTCxDQUFjLFNBQWQsRUFBeUJLLEtBQXpCLEtBQW1DLEdBQW5DLEdBQXlDLEVBQXpDLEdBQThDLEVBQXpEO0FBQ0E4QyxlQUFHSSxFQUFILENBQU0sS0FBS3ZELFFBQUwsQ0FBYyxTQUFkLENBQU4sRUFBZ0MsS0FBS2MsUUFBckMsRUFBK0MsRUFBRVQsT0FBT2tELEVBQVQsRUFBYXZDLE1BQU0sS0FBS0EsSUFBeEIsRUFBL0MsRUFBZ0YsQ0FBaEY7O0FBRUEsbUJBQU9tQyxFQUFQO0FBQ0g7OzsyQ0FFbUI7QUFDaEIsZ0JBQUssS0FBS25ELFFBQUwsQ0FBYyxTQUFkLEVBQXlCSyxLQUE5QixFQUFzQztBQUNsQyxxQkFBS21ELElBQUw7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBS0YsSUFBTDtBQUNIO0FBQ0o7OzttQ0FFWXJHLEksRUFBTztBQUNoQixvQkFBU0EsS0FBS3dHLEdBQWQ7QUFpQ0g7OzsrQkFFTztBQUNKLG1CQUFPQyxTQUFTSCxFQUFULENBQVksS0FBS3ZELFFBQUwsQ0FBYyxTQUFkLENBQVosRUFBc0MsS0FBS2MsUUFBM0MsRUFBcUQsRUFBRVQsT0FBTyxDQUFULEVBQVlXLE1BQU0sS0FBS0EsSUFBdkIsRUFBckQsQ0FBUDtBQUNIOzs7K0JBRU87QUFDSixtQkFBTzBDLFNBQVNILEVBQVQsQ0FBWSxLQUFLdkQsUUFBTCxDQUFjLFNBQWQsQ0FBWixFQUFzQyxLQUFLYyxRQUEzQyxFQUFxRCxFQUFFVCxPQUFPLENBQVQsRUFBWVcsTUFBTSxLQUFLQSxJQUF2QixFQUFyRCxDQUFQO0FBQ0g7Ozt3Q0FFaUI4QixDLEVBQUdDLEMsRUFBbUI7QUFBQSxnQkFBaEJZLE1BQWdCLHVFQUFQLElBQU87O0FBQ3BDLGdCQUFNUixLQUFLLElBQUlTLFdBQUosRUFBWDs7QUFFQVQsZUFBR0ksRUFBSCxDQUFNLEtBQUt2RCxRQUFMLENBQWMsU0FBZCxFQUF5QkssS0FBL0IsRUFBc0MsS0FBS1MsUUFBM0MsRUFBcUQsRUFBRWdDLEdBQUdBLENBQUwsRUFBUUMsR0FBR0EsQ0FBWCxFQUFjL0IsTUFBTSxLQUFLQSxJQUF6QixFQUFyRCxFQUFzRixDQUF0Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQU9tQyxFQUFQO0FBQ0g7Ozt1Q0FFZTtBQUNaLGlCQUFLRSxTQUFMLEdBQWlCLElBQWpCOztBQUVBLG1CQUFPSyxTQUFTSCxFQUFULENBQVksS0FBS3ZELFFBQUwsQ0FBYyxTQUFkLENBQVosRUFBc0MsS0FBS2MsUUFBM0MsRUFBcUQsRUFBRVQsT0FBTyxHQUFULEVBQWNXLE1BQU0sS0FBS0EsSUFBekIsRUFBckQsQ0FBUDtBQUNIOzs7b0NBRWE2QyxTLEVBQVk7QUFDdEIsaUJBQUs3RCxRQUFMLENBQWMsV0FBZCxFQUEyQkssS0FBM0IsR0FBbUN3RCxTQUFuQztBQUNIOzs7Z0NBRVE7QUFDTCxpQkFBSzdELFFBQUwsQ0FBYyxPQUFkLEVBQXVCSyxLQUF2QixHQUErQixHQUEvQjs7QUFFQSxnQkFBTVMsV0FBVyxDQUFqQjs7QUFFQSxnQkFBTXFDLEtBQUssSUFBSVMsV0FBSixDQUFnQixFQUFFRSxZQUFZLHNCQUFNLENBQzlDLENBRDBCLEVBQWhCLENBQVg7QUFFQVgsZUFBR1ksR0FBSCxDQUFPLEtBQUsvRCxRQUFMLENBQWMsU0FBZCxFQUF5QkssS0FBaEMsRUFBdUMsRUFBRXlDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVgsRUFBYy9CLE1BQU1DLEtBQUtDLE9BQXpCLEVBQXZDLEVBQTJFLENBQTNFO0FBQ0FpQyxlQUFHSSxFQUFILENBQU0sS0FBS3ZELFFBQUwsQ0FBYyxTQUFkLENBQU4sRUFBZ0NjLFFBQWhDLEVBQTBDLEVBQUVULE9BQU8sR0FBVCxFQUFjVyxNQUFNQyxLQUFLQyxPQUF6QixFQUExQyxFQUE4RSxDQUE5RTtBQUNBaUMsZUFBR2EsTUFBSCxDQUFVLEtBQUtoRSxRQUFMLENBQWMsV0FBZCxDQUFWLEVBQXNDYyxRQUF0QyxFQUFnRCxFQUFFVCxPQUFPLEdBQVQsRUFBaEQsRUFBZ0UsRUFBRUEsT0FBTyxHQUFULEVBQWNXLE1BQU1DLEtBQUtDLE9BQXpCLEVBQWhFLEVBQW9HLENBQXBHOztBQUVBLG1CQUFPaUMsRUFBUDtBQUNIOzs7Z0NBRVE7QUFDTCxpQkFBS25ELFFBQUwsQ0FBYyxPQUFkLEVBQXVCSyxLQUF2QixHQUErQixHQUEvQjtBQUNBLGlCQUFLTCxRQUFMLENBQWMsV0FBZCxFQUEyQkssS0FBM0IsR0FBbUMsR0FBbkM7QUFDQSxpQkFBS0wsUUFBTCxDQUFjLFNBQWQsRUFBeUJLLEtBQXpCLEdBQWlDLEdBQWpDO0FBQ0EsaUJBQUtMLFFBQUwsQ0FBYyxTQUFkLEVBQXlCSyxLQUF6QixHQUFpQyxHQUFqQztBQUNIOzs7a0NBRVU7QUFDUCxpQkFBS2lELElBQUw7QUFDSDs7O3FDQUVhLENBQ2I7Ozs7RUF2TnNCN0QsTUFBTXdFLFE7O2tCQTJObEI3RSxZOzs7Ozs7Ozs7Ozs7Ozs7OztJQy9OVDhFLEksR0FFTCxjQUFjM0UsSUFBZCxFQUFvQm9DLGNBQXBCLEVBQW9DRixZQUFwQyxFQUFpRTtBQUFBLEtBQWZ6QixRQUFlLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hFLE1BQUtULElBQUwsR0FBWUEsSUFBWjtBQUNBLE1BQUtvQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLE1BQUtGLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLE1BQUswQyxPQUFMLEdBQWUsSUFBZjtBQUNBLE1BQUtuRSxRQUFMO0FBQ0NvRSxjQUFZLEVBQUVoRSxNQUFNLElBQVIsRUFBY0MsT0FBTyxJQUFJWixNQUFNbUIsT0FBVixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFyQixFQURiO0FBRUM0QixRQUFNLEVBQUVwQyxNQUFNLEdBQVIsRUFBYUMsT0FBTyxDQUFwQixFQUZQO0FBR0NnRSxVQUFRLEVBQUVqRSxNQUFNLEdBQVIsRUFBYUMsT0FBTyxJQUFJWixNQUFNNkUsT0FBVixFQUFwQixFQUF5Q0MsU0FBUyxJQUFsRDtBQUhULElBSUl2RSxRQUpKOztBQU9BLE1BQUt3RSxNQUFMLEdBQWMsSUFBSS9FLE1BQU0rQixjQUFWLENBQXlCO0FBQ3RDQyxnQkFBYyw0QkFBQUMsR0FBc0IsS0FBS0QsWUFBM0IsQ0FEd0I7QUFFdENFLGtCQUFnQiw0QkFBQUQsR0FBc0IsS0FBS0MsY0FBM0IsQ0FGc0I7QUFHdEMzQixZQUFVLEtBQUtBLFFBSHVCO0FBSXRDeUUsZUFBYSxJQUp5QjtBQUt0Q0MsY0FBWSxLQUwwQjtBQU10Q0MsYUFBVyxLQU4yQjtBQU90QzlDLGVBQWE7QUFQeUIsRUFBekIsQ0FBZDtBQVNBLEM7O2tCQUlhcUMsSTs7Ozs7O0FDNUJmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FB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QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdEQUFnRDs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwrQ0FBK0M7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFF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Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckRBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0VBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFD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O0FBQUE7O0FBQUEsbUhBQ0wsVUFESyxFQUNPLFNBRFAsRUFDa0IsVUFEbEIsRUFDOEIsRUFEOUI7QUFFZDs7Ozs7a0JBSVVBLFEiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMGY2YzRiZGI1NmNmMWE5NWM1ZiIsIi8qKlxuICogRXZlbnRzIE1hbmFnZXJcbiAqIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAqL1xuXG5jbGFzcyBFdmVudHNNYW5hZ2VyIHtcblxuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgZW1pdCAoIGV2ZW50LCBkYXRhID0gbnVsbCApIHtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdO1xuXG4gICAgICAgIGlmKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciggbGV0IGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSBsaXN0ZW5lcnNbaV0uZm4oIGRhdGEgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBuYW1lXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc3RhdGljIG9uICggZXZlbnQsIGZuICkge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFdmVudHNNYW5hZ2VyIDo6IE9OIDo6JywgZXZlbnQpO1xuXG4gICAgICAgIGlmKCFFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3QpIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdCA9IHt9O1xuXG4gICAgICAgIGlmKCFFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdKSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdID0gW107IC8vIGltcHJvdmUgKC5fLilcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdLnB1c2goe2ZuOmZufSk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgb25jZSggZXZlbnQsIGZuICkge1xuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCBkYXRhICkgPT57XG5cbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBmbihkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0ZW5lci5fID0gZm47XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oIGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb2ZmICggZXZlbnQsIGZuICkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgICAgICBpZighbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V2ZW50c01hbmFnZXIgOjogT2ZmIDo6IEN1cnJlbnRseSBubyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQgOiAnLCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzTWFuYWdlciA6OiBPZmYgOjogQ2FsbGJhY2sgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRFdmVudHMgPSBbXTtcblxuICAgICAgICBmb3IoIGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgIGlmKHRhcmdldC5mbiAhPT0gZm4gJiYgdGFyZ2V0LmZuLl8gIT09IGZuICkgeyAvLyAoLl9fLikgPz9cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiggdGFyZ2V0RXZlbnRzLmxlbmd0aCA+wqAwIClcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0gPSB0YXJnZXRFdmVudHM7XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHNNYW5hZ2VyLmpzIiwiLyoqXG4gKiBFIFYgRSBOIFQgU1xuICovXG5cbmNvbnN0IEV2ZW50cyA9IHtcbiAgICBLRVlCT0FSRDoge1xuICAgICAgICBLRVlET1dOOiBcIktFWUJPQVJEX0tFWURPV05cIixcbiAgICAgICAgS0VZVVA6IFwiS0VZQk9BUkRfS0VZVVBcIixcbiAgICAgICAgS0VZUFJFU1M6IFwiS0VZQk9BUkRfS0VZUFJFU1NcIixcbiAgICAgICAgU1BBQ0VIT0xEOiBcIktFWUJPQVJEX1NQQUNFSE9MRFwiLFxuICAgICAgICBTUEFDRVVQOiBcIktFWUJPQVJEX1NQQUNFVVBcIixcbiAgICAgICAgU1BBQ0VET1dOOiBcIktFWUJPQVJEX1NQQUNFRE9XTlwiLFxuICAgIH0sXG4gICAgU09VTkRTOiB7XG4gICAgICAgIENBTlBMQVk6IFwiU09VTkRTX0NBTlBMQVlcIixcbiAgICAgICAgRU5EOiBcIlNPVU5EU19FTkRcIixcbiAgICAgICAgTE9XS0lDSzogXCJTT1VORFNfTE9XS0lDS1wiLFxuICAgICAgICBNSURETEVLSUNLOiBcIlNPVU5EU19NSURETEVLSUNLXCIsXG4gICAgICAgIEhJR0hLSUNLOiBcIlNPVU5EU19ISUdIS0lDS1wiLFxuICAgICAgICBUUkVNT0xPOiBcIlNPVU5EU19UUkVNT0xPXCIsXG4gICAgICAgIFNUQVJUOiBcIlNPVU5EU19TVEFSVFwiLFxuICAgICAgICBFTkQ6IFwiU09VTkRTX0VORFwiLFxuICAgIH0sXG4gICAgWFA6IHtcbiAgICAgICAgU1RBUlQ6IFwiWFBfU1RBUlRcIixcbiAgICAgICAgRU5EOiBcIlhQX0VORFwiLFxuICAgIH0sXG4gICAgVUk6IHtcbiAgICAgICAgSElEREVOOiBcIlVJX0hJRERFTlwiLFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4uL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlscy9tYXAnO1xuXG5jbGFzcyBBYnN0cmFjdEZhY2UgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciA9IDB4MjQyNDI1LCBuYW1lLCBzaWRlID0gVEhSRUUuRnJvbnRTaWRlICkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucGxhbmVHZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uU3BhY2VIb2xkID0gOjp0aGlzLm9uU3BhY2VIb2xkO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vbkhpZGRlblVJID0gOjp0aGlzLm9uSGlkZGVuVUk7XG5cbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoVEhSRUUuU2hhZGVyTGliWydwaG9uZyddLnVuaWZvcm1zKTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXSA9IHsgdHlwZTonZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snZGlmZnVzZSddID0geyB0eXBlOiAnYycsIHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddID0geyB0eXBlOiAndjMnLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUludmVydCddID0geyB0eXBlOiAnZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVNxdWFyZSddID0geyB0eXBlOiAndjMnLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSkgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVdpZHRoJ10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy53aWR0aCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1SGVpZ2h0J10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUxlbmd0aCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cubGVuZ3RoIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddID0geyB0eXBlOiAnZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMS4wO1xuXG4gICAgICAgIHRoaXMuc3RhcnREaXZpc2lvbnMgPSBuZXcgVEhSRUUuVmVjdG9yMig5LCAxMyk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMztcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLmVhc2UgPSBFeHBvLmVhc2VPdXQ7XG4gICAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcblxuICAgICAgICBpZiAoIHRoaXMuZGVidWcgKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRHdWkoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbCcpLFxuICAgICAgICAgICAgLy8gZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvYm90dG9tLmZyYWcuZ2xzbCcpLFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsJyksXG4gICAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICAgIGxpZ2h0czogZmFsc2UsXG4gICAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBmb2c6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxhbmVHZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIHRoaXMubWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLm1lc2gpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICAvLyBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHRoaXMub25TcGFjZUhvbGQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uSGlkZGVuVUkpO1xuICAgIH1cblxuICAgIGluaXRHdWkgKCBpc09wZW4gKSB7XG4gICAgICAgIHRoaXMuZ3VpID0gd2luZG93Lmd1aS5hZGRGb2xkZXIodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneCcsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB4Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3knLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geScpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd6JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHonKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3gnLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHgnKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3knLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHknKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3onLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHonKTtcbiAgICAgICAgXG4gICAgICAgIGlzT3BlbiAmJiB0aGlzLmd1aS5vcGVuKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggdGltZSApIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgc2V0UGxhaW5Db2xvciAoIGNvbG9yICkge1xuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygwLCAwKTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICggb3JpZW50YXRpb25OYW1lLCBzY2FsYXIgPSAxLCBkdXJhdGlvbiA9IDIgKSB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbnNbb3JpZW50YXRpb25OYW1lXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3JpZW50YXRpb24gKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IG9yaWVudGF0aW9uLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoc2NhbGFyKTsgLy8gcm9zYWNlXG5cbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnggPSBjbG9uZS54O1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueSA9IGNsb25lLnk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS56ID0gY2xvbmUuejtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldmVyc2VTdHJpcGVzICgpIHtcbiAgICAgICAgLy8gdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgfVxuXG4gICAgY2hhbmdlU3BlZWQgKCBzcGVlZCA9IHRoaXMuc3BlZWRNaW4gKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBpbnZlcnQgKCkge1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcblxuICAgICAgICBpZiAoIHRoaXMuYmxhY2tNb2RlICkge1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLnNob3coKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0byA9IHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9PT0gMS4wID8gMC4gOiAxLjtcbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiB0bywgZWFzZTogdGhpcy5lYXNlLCB9LCAwKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICB0b2dnbGVWaXNpYmlsaXR5ICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyAoIGRhdGEgKSB7XG4gICAgICAgIHN3aXRjaCAoIGRhdGEua2V5ICkge1xuICAgICAgICAgICAgLy8gY2FzZSAncCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRQbGFpbkNvbG9yKDB4MDAwMDAwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdHJpcGVzKCdob3Jpem9udGFsJywgMSk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ3YnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RyaXBlcygndmVydGljYWwnLCAxKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaSc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pbnZlcnQoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAncic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yZXZlcnNlU3RyaXBlcygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5SGlkZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5U2hvd2VyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDEsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMCwgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZURpdmlzaW9ucyAoIHgsIHksIGludmVydCA9IHRydWUgKSB7XG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCB0aGlzLmR1cmF0aW9uLCB7IHg6IHgsIHk6IHksIGVhc2U6IHRoaXMuZWFzZSB9LCAwKTtcblxuICAgICAgICAvLyBpZiAoIGludmVydCApIHtcbiAgICAgICAgLy8gICAgIHRsLmFkZCh0aGlzLmludmVydCgpLCAwKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICBzZXRCbGFja01vZGUgKCkge1xuICAgICAgICB0aGlzLmJsYWNrTW9kZSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMS4wLCBlYXNlOiB0aGlzLmVhc2UsIH0pO1xuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggdVByb2dyZXNzICkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXS52YWx1ZSA9IHVQcm9ncmVzcztcbiAgICB9XG5cbiAgICBvbkVuZCAoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgPSAwLjA7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAyO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB9fSk7XG4gICAgICAgIHRsLnNldCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHsgeDogMSwgeTogMSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIGR1cmF0aW9uLCB7IHZhbHVlOiAwLjAsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwuZnJvbVRvKHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLCBkdXJhdGlvbiwgeyB2YWx1ZTogMS44IH0sIHsgdmFsdWU6IDAuMCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLnZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9IDAuMDtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgb25IaWRkZW5VSSAoKSB7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0RmFjZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0Fic3RyYWN0RmFjZS5qcyIsImNsYXNzIFBhc3Mge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSwgZnJhZ21lbnRTaGFkZXIsIHZlcnRleFNoYWRlciwgdW5pZm9ybXMgPSB7fSApe1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5mcmFnbWVudFNoYWRlciA9IGZyYWdtZW50U2hhZGVyO1xuXHRcdHRoaXMudmVydGV4U2hhZGVyID0gdmVydGV4U2hhZGVyO1xuXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnVuaWZvcm1zID0ge1xuXHRcdFx0cmVzb2x1dGlvbjogeyB0eXBlOiAndjInLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDEsIDEgKSB9LFxuXHRcdFx0dGltZTogeyB0eXBlOiAnZicsIHZhbHVlOiAwIH0sXG5cdFx0XHR0SW5wdXQ6IHsgdHlwZTogJ3QnLCB2YWx1ZTogbmV3IFRIUkVFLlRleHR1cmUoKSwgZGVmYXVsdDogdHJ1ZSB9LFxuXHRcdFx0Li4udW5pZm9ybXMsXG5cdFx0fTtcblxuXHRcdHRoaXMuc2hhZGVyID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcblx0XHRcdHZlcnRleFNoYWRlcjogcmVxdWlyZShgLi4vc2hhZGVycy8ke3RoaXMudmVydGV4U2hhZGVyfWApLFxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoYC4uL3NoYWRlcnMvJHt0aGlzLmZyYWdtZW50U2hhZGVyfWApLFxuXHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG5cdFx0XHRmbGF0U2hhZGluZzogdHJ1ZSxcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZSxcblx0XHRcdHRyYW5zcGFyZW50OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9jb3JlL1Bhc3MuanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBXZWJNaWRpIGZyb20gJ3dlYm1pZGknO1xuXG5mdW5jdGlvbiBtYXAobiwgc3RhcnQxLCBzdG9wMSwgc3RhcnQyLCBzdG9wMikge1xuICAgIHJldHVybiAoKG4tc3RhcnQxKS8oc3RvcDEtc3RhcnQxKSkqKHN0b3AyLXN0YXJ0Mikrc3RhcnQyO1xufVxuXG5jbGFzcyBNaWRpQ29udHJvbGxlciB7XG5cblx0c3RhdGljIHN0YXJ0ICggY29uZmlnICkge1xuXHRcdE1pZGlDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IE1pZGlDb250cm9sbGVyKGNvbmZpZyk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciAoIGNvbmZpZyApIHtcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuXHRcdHRoaXMucGFkcyA9IHt9O1xuXHRcdHRoaXMua25vYnMgPSB7fTtcblxuXHRcdHRoaXMub25TdWNjZXNzID0gOjp0aGlzLm9uU3VjY2Vzcztcblx0XHR0aGlzLm9uRXJyb3IgPSA6OnRoaXMub25FcnJvcjtcblx0XHR0aGlzLm9uTWVzc2FnZSA9IDo6dGhpcy5vbk1lc3NhZ2U7XG5cblx0XHRXZWJNaWRpLmVuYWJsZSggKCBlcnIgKSA9PiB7XG5cdFx0XHRpZiAoIGVyciApIHtcblx0XHRcdFx0dGhpcy5vbkVycm9yKGVycik7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub25TdWNjZXNzKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXF1ZXN0QWNjZXNzICgpIHtcbiAgICAgICAgaWYgKCBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3MgKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3Moe1xuICAgICAgICAgICAgICAgIHN5c2V4OiBmYWxzZVxuICAgICAgICAgICAgfSkudGhlbih0aGlzLm9uU3VjY2VzcywgdGhpcy5vbkVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KGBZb3UgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdGhlIE1JREkgQVBJLmApO1xuICAgICAgICB9XG5cdH1cblxuXHRvblN1Y2Nlc3MgKCkge1xuXHRcdGlmICggV2ViTWlkaS5pbnB1dHMubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0dGhpcy5pbnB1dCA9IFdlYk1pZGkuaW5wdXRzWzBdO1xuXG5cdFx0XHR0aGlzLnBhcnNlQ29uZmlnKCk7XG5cblx0XHRcdHRoaXMuaW5wdXQuYWRkTGlzdGVuZXIoJ25vdGVvbicsICdhbGwnLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnBhZHMpO1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0ga2V5c1tpXTtcblx0XHRcdFx0XHRjb25zdCBzdWJzY3JpcHRpb25zID0gdGhpcy5wYWRzW2tleV07XG5cblx0XHRcdFx0XHRmb3IgKCBsZXQgaiA9IDA7IGogPCBzdWJzY3JpcHRpb25zLmxlbmd0aDsgaisrICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgeyBudW1iZXIsIGNoYW5uZWwsIGNhbGxiYWNrIH0gPSBzdWJzY3JpcHRpb25zW2pdO1xuXG5cdFx0XHRcdFx0XHRpZiAoIGUubm90ZS5udW1iZXIgPT09IG51bWJlciApIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soeyB2ZWxvY2l0eTogZS52ZWxvY2l0eSB9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmlucHV0LmFkZExpc3RlbmVyKCdwaXRjaGJlbmQnLCAnYWxsJywgKCBlICkgPT4ge1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuaW5wdXQuYWRkTGlzdGVuZXIoJ2NvbnRyb2xjaGFuZ2UnLCAnYWxsJywgKCBlICkgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5rbm9icyk7XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBrZXlzW2ldO1xuXHRcdFx0XHRcdGNvbnN0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLmtub2JzW2tleV07XG5cblx0XHRcdFx0XHRmb3IgKCBsZXQgaiA9IDA7IGogPCBzdWJzY3JpcHRpb25zLmxlbmd0aDsgaisrICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgeyBudW1iZXIsIGNoYW5uZWwsIGNhbGxiYWNrIH0gPSBzdWJzY3JpcHRpb25zW2pdO1xuXG5cdFx0XHRcdFx0XHRpZiAoIGUuY29udHJvbGxlci5udW1iZXIgPT09IG51bWJlciApIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBtYXAoZS52YWx1ZSwgMCwgMTI3LCAwLCAxKTtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sodmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VDb25maWcgKCkge1xuXHRcdC8vIHRoaXMucGFkcyA9IHRoaXMuY29uZmlnLnBhZHM7XG5cdFx0Ly8gdGhpcy5rbm9icyA9IHRoaXMuY29uZmlnLmtub2JzO1xuXHR9XG5cblx0b25FcnJvciAoIGVycm9yICkge1xuXHRcdGNvbnNvbGUuZXJyb3IoYE1pZGlDb250cm9sbGVyIDo6IGVycm9yIHdoaWxlIHJlcXVlc3RpbmcgTUlESSBhY2Nlc3MuYCk7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGVycm9yKTtcblx0fVxuXG5cdG9uTWVzc2FnZSAoIGV2ZW50ICkge1xuXHRcdGNvbnNvbGUubG9nKGBNaWRpQ29udHJvbGxlciA6OiBvbk1lc3NhZ2VgLCBldmVudCk7XG5cdH1cblxuXHRzdGF0aWMgb25QYWREb3duICggaWQsIGNhbGxiYWNrICkge1xuXHRcdGNvbnN0IHsgaW5zdGFuY2UgfSA9IE1pZGlDb250cm9sbGVyO1xuXG5cdFx0aW5zdGFuY2UucmVnaXN0ZXJQYWQoaWQsIGNhbGxiYWNrKTtcblx0fVxuXG5cdHN0YXRpYyBvbktub2JDaGFuZ2UgKCBpZCwgY2FsbGJhY2sgKSB7XG5cdFx0Y29uc3QgeyBpbnN0YW5jZSB9ID0gTWlkaUNvbnRyb2xsZXI7XG5cblx0XHRpbnN0YW5jZS5yZWdpc3Rlcktub2IoaWQsIGNhbGxiYWNrKTtcblx0fVxuXG5cdHJlZ2lzdGVyUGFkICggaWQsIGNhbGxiYWNrICkge1xuXHRcdGlmICggIXRoaXMucGFkc1tpZF0gKSB7XG5cdFx0XHR0aGlzLnBhZHNbaWRdID0gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5maW5kTnVtYmVySW5QYWRzKGlkKTtcblxuXHRcdGlmICggbnVtYmVyICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdHRoaXMucGFkc1tpZF0ucHVzaCh7IGNhbGxiYWNrLCBudW1iZXIgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pZGlDb250cm9sbGVyIDo6IG9uUGFkRG93biAke2lkfSA6OiBjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvbmApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBQYWQgJHtpZH0gbm90IHJlZ2lzdGVyZWQgaW4gY29uZmlnYCk7XG5cdFx0fVxuXHR9XG5cblx0cmVnaXN0ZXJLbm9iICggaWQsIGNhbGxiYWNrICkge1xuXHRcdGlmICggIXRoaXMua25vYnNbaWRdICkge1xuXHRcdFx0dGhpcy5rbm9ic1tpZF0gPSBbXTtcblx0XHR9XG5cblx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmZpbmROdW1iZXJJbktub2JzKGlkKTtcblxuXHRcdGlmICggbnVtYmVyICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdHRoaXMua25vYnNbaWRdLnB1c2goeyBjYWxsYmFjaywgbnVtYmVyIH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaWRpQ29udHJvbGxlciA6OiBvbktub2JDaGFuZ2UgJHtpZH0gOjogY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25gKTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oYE1pZGlDb250cm9sbGVyOiBLbm9iICR7aWR9IG5vdCByZWdpc3RlcmVkIGluIGNvbmZpZ2ApO1xuXHRcdH1cblx0fVxuXG5cdGZpbmROdW1iZXJJblBhZHMgKCBpZCApIHtcblx0XHRjb25zdCB7IHBhZHMgfSA9IHRoaXMuY29uZmlnO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcGFkcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGlmICggcGFkc1tpXS5pZCA9PT0gaWQgKSB7XG5cdFx0XHRcdHJldHVybiBwYWRzW2ldLm51bWJlcjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmaW5kTnVtYmVySW5Lbm9icyAoIGlkICkge1xuXHRcdGNvbnN0IHsga25vYnMgfSA9IHRoaXMuY29uZmlnO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwga25vYnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRpZiAoIGtub2JzW2ldLmlkID09PSBpZCApIHtcblx0XHRcdFx0cmV0dXJuIGtub2JzW2ldLm51bWJlcjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pZGlDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvTWlkaUNvbnRyb2xsZXIuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAgKG4sIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgICByZXR1cm4gKChuIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpICogKHN0b3AyIC0gc3RhcnQyKSArIHN0YXJ0Mjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9tYXAuanMiLCIvLyBzb3VyY2VkIGZyb206XG4vLyBodHRwOi8vd3d3LmxlYW5iYWNrcGxheWVyLmNvbS90ZXN0L2g1bXQuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLW1pbWUvYmxvYi9tYXN0ZXIvdHlwZXMuanNvblxudmFyIG1pbWVUeXBlcyA9IHJlcXVpcmUoJy4vbWltZS10eXBlcy5qc29uJylcblxudmFyIG1pbWVMb29rdXAgPSB7fVxuT2JqZWN0LmtleXMobWltZVR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIGV4dGVuc2lvbnMgPSBtaW1lVHlwZXNba2V5XVxuICBleHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4dCkge1xuICAgIG1pbWVMb29rdXBbZXh0XSA9IGtleVxuICB9KVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb29rdXAgKGV4dCkge1xuICBpZiAoIWV4dCkgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzcGVjaWZ5IGV4dGVuc2lvbiBzdHJpbmcnKVxuICBpZiAoZXh0LmluZGV4T2YoJy4nKSA9PT0gMCkge1xuICAgIGV4dCA9IGV4dC5zdWJzdHJpbmcoMSlcbiAgfVxuICByZXR1cm4gbWltZUxvb2t1cFtleHQudG9Mb3dlckNhc2UoKV1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb25cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmbikge1xuICB2YXIgc3RyaW5nID0gdG9TdHJpbmcuY2FsbChmbilcbiAgcmV0dXJuIHN0cmluZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fFxuICAgICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgc3RyaW5nICE9PSAnW29iamVjdCBSZWdFeHBdJykgfHxcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgLy8gSUU4IGFuZCBiZWxvd1xuICAgICAoZm4gPT09IHdpbmRvdy5zZXRUaW1lb3V0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmFsZXJ0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmNvbmZpcm0gfHxcbiAgICAgIGZuID09PSB3aW5kb3cucHJvbXB0KSlcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXVkaW9Db250ZXh0XG5mdW5jdGlvbiBjcmVhdGVBdWRpb0NvbnRleHQgKCkge1xuICB2YXIgQXVkaW9DdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gIHJldHVybiBuZXcgQXVkaW9DdG9yKClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9hdWRpby1jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxudmFyIGF1ZGlvXG5cbm1vZHVsZS5leHBvcnRzID0gaXNTcmNQbGF5YWJsZVxuZnVuY3Rpb24gaXNTcmNQbGF5YWJsZSAoc3JjKSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzcmMgY2Fubm90IGJlIGVtcHR5JylcbiAgdmFyIHR5cGVcbiAgaWYgKHR5cGVvZiBzcmMuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gPHNvdXJjZT4gZWxlbWVudFxuICAgIHR5cGUgPSBzcmMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3JjID09PSAnc3RyaW5nJykge1xuICAgIC8vICdmb28ubXAzJyBzdHJpbmdcbiAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uKHNyYylcbiAgICBpZiAoZXh0KSB0eXBlID0gbG9va3VwKGV4dClcbiAgfSBlbHNlIHtcbiAgICAvLyB7IHNyYzogJ2Zvby5tcDMnLCB0eXBlOiAnYXVkaW8vbXBlZzsgY29kZWNzLi4nfVxuICAgIHR5cGUgPSBzcmMudHlwZVxuICB9XG5cbiAgLy8gV2UgaGF2ZSBhbiB1bmtub3duIGZpbGUgZXh0ZW5zaW9uIG9yXG4gIC8vIGEgPHNvdXJjZT4gdGFnIHdpdGhvdXQgYW4gZXhwbGljaXQgdHlwZSxcbiAgLy8ganVzdCBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0IVxuICBpZiAoIXR5cGUpIHJldHVybiB0cnVlXG5cbiAgLy8gaGFuZGxlIFwibm9cIiBlZGdlIGNhc2Ugd2l0aCBzdXBlciBsZWdhY3kgYnJvd3NlcnMuLi5cbiAgLy8gaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9mb3J1bS8jIXRvcGljL2dvb2dsZS13ZWItdG9vbGtpdC1jb250cmlidXRvcnMvYThVeTBiWHExSG9cbiAgaWYgKCFhdWRpbykgYXVkaW8gPSBuZXcgd2luZG93LkF1ZGlvKClcbiAgdmFyIGNhbnBsYXkgPSBhdWRpby5jYW5QbGF5VHlwZSh0eXBlKS5yZXBsYWNlKC9uby8sICcnKVxuICByZXR1cm4gQm9vbGVhbihjYW5wbGF5KVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVFcnJvciA9IGNyZWF0ZUVycm9yXG5mdW5jdGlvbiBjcmVhdGVFcnJvciAoc291cmNlcykge1xuICAvLyBBbGwgc291cmNlcyBhcmUgdW5wbGF5YWJsZVxuICB2YXIgZXJyID0gbmV3IEVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhbnkgb2YgdGhlIGZvbGxvd2luZyBzb3VyY2VzOlxcbiAgICAnICtcbiAgICAgIHNvdXJjZXMuam9pbignLCAnKSArICdcXG4nICtcbiAgICAgICdUcnkgdXNpbmcgYW4gYXJyYXkgb2YgT0dHLCBNUDMgYW5kIFdBVi4nKVxuICBlcnIudHlwZSA9ICdBVURJT19GT1JNQVQnXG4gIHJldHVybiBlcnJcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uIChkYXRhKSB7XG4gIHZhciBleHRJZHggPSBkYXRhLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGV4dElkeCA8PSAwIHx8IGV4dElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiBkYXRhLnN1YnN0cmluZyhleHRJZHggKyAxKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2Nhbi1wbGF5LXNyYy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXVkaW9Db250ZXh0KSB7XG4gIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnICYmXG4gICAgICB0eXBlb2YgYXVkaW9Db250ZXh0LnJlc3VtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGF1ZGlvQ29udGV4dC5yZXN1bWUoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvcmVzdW1lLWNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9hZGRpdGl2ZS5mc1wiOiA1OSxcblx0XCIuL2Jhc2ljLnZzXCI6IDYwLFxuXHRcIi4vYmxvb20uZnNcIjogNjEsXG5cdFwiLi9ibG9vbTIuZnNcIjogNjIsXG5cdFwiLi9ibG9vbXRlc3QuZnNcIjogNjMsXG5cdFwiLi9ib3gtYmx1ci5mc1wiOiA2NCxcblx0XCIuL2NvcHkuZnNcIjogNjUsXG5cdFwiLi9jdXN0b20uZnNcIjogNjYsXG5cdFwiLi9kb2YuZnNcIjogNjcsXG5cdFwiLi9meGFhLmZzXCI6IDc2LFxuXHRcIi4vZ2F1c3NpYW4uZnNcIjogNjgsXG5cdFwiLi9ub2lzZS5mc1wiOiA2OSxcblx0XCIuL3JhZGlhbC1ibHVyLmZzXCI6IDcwLFxuXHRcIi4vc2VwaWEuZnNcIjogNzEsXG5cdFwiLi9zc2FvLmZzXCI6IDcyXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycyBeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCByYW5kb21Gcm9tQXJyYXkgZnJvbSAnLi91dGlscy9yYW5kb21Gcm9tQXJyYXknO1xuaW1wb3J0IGx1Y2t5IGZyb20gJy4vdXRpbHMvbHVja3knO1xuaW1wb3J0IG1hcCBmcm9tICcuL3V0aWxzL21hcCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgTWlkaUNvbnRyb2xsZXIgZnJvbSAnLi91dGlscy9NaWRpQ29udHJvbGxlcic7XG5cbmNsYXNzIEZhY2VzQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHRoaXMuZmFjZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmxvd2tpY2tlZCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmxhY2tNb2RlID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NhbGVNb2RlID0gMDtcblxuICAgICAgICAvLyBvbiBldmVudHNcbiAgICAgICAgdGhpcy5vbkxvd0tpY2sgPSA6OnRoaXMub25Mb3dLaWNrO1xuICAgICAgICB0aGlzLm9uTWlkZGxlS2ljayA9IDo6dGhpcy5vbk1pZGRsZUtpY2s7XG4gICAgICAgIHRoaXMub25IaWdoS2ljayA9IDo6dGhpcy5vbkhpZ2hLaWNrO1xuICAgICAgICB0aGlzLm9uVHJlbW9sbyA9IDo6dGhpcy5vblRyZW1vbG87XG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG5cbiAgICAgICAgLy8gYmxhY2sgbW9kZXNcbiAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCA9IDo6dGhpcy5ibGFja01vZGVWZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVIb3Jpem9udGFsID0gOjp0aGlzLmJsYWNrTW9kZUhvcml6b250YWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSA9IDo6dGhpcy5ibGFja01vZGVCb3R0b207XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCA9IDo6dGhpcy5ibGFja01vZGVGdWxsO1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVhY3Rpb25zXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zID0gOjogdGhpcy51cGRhdGVEaXZpc2lvbnM7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlID0gOjp0aGlzLnNldEJsYWNrTW9kZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSA9IDo6dGhpcy5jaGFuZ2VTY2FsZTtcblxuICAgICAgICB0aGlzLnJlYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zLFxuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVggPSA6OnRoaXMuY2hhbmdlU2NhbGVYO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWSA9IDo6dGhpcy5jaGFuZ2VTY2FsZVk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGVCb3RoID0gOjp0aGlzLmNoYW5nZVNjYWxlQm90aDtcblxuICAgICAgICAvLyBzY2FsZXNcbiAgICAgICAgdGhpcy5zY2FsaW5ncyA9IFtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVZLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVgsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlQm90aCxcbiAgICAgICAgXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkxPV0tJQ0ssIHRoaXMub25Mb3dLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLk1JRERMRUtJQ0ssIHRoaXMub25NaWRkbGVLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkhJR0hLSUNLLCB0aGlzLm9uSGlnaEtpY2spO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuVFJFTU9MTywgdGhpcy5vblRyZW1vbG8pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcblxuICAgICAgICAvLyB0aGlzLnVwZGF0ZURpdmlzaW9ucyA9IGRlYm91bmNlKHRoaXMudXBkYXRlRGl2aXNpb25zLCA0MDApO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVNjYWxlID0gZGVib3VuY2UodGhpcy5jaGFuZ2VTY2FsZSwgNDAwKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCbGFja01vZGUgPSBkZWJvdW5jZSh0aGlzLnNldEJsYWNrTW9kZSwgNDAwKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuXG4gICAgICAgIE1pZGlDb250cm9sbGVyLm9uUGFkRG93bigxLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAtdGhpcy5zcGVlZENvbnRhaW5lcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oNiwgKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5pbnZlcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMSwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3BlZWRDb250YWluZXIgPCAwID8gLTEgOiAxO1xuXG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gdmFsdWUgKiAyICogZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMiwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB2YWx1ZSAqIDEyO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlZ2lzdGVyICggaWQsIGZhY2UgKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbaWRdID0gZmFjZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGZhY2UpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGl2aXNpb25zICggbWluLCBtYXgsIGJldHdlZW4gPSA0ICkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbnMgPSBbMF07XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpKz0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtYXg7IGkgPj0gbWluOyBpLT0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2aXNpb25zLnB1c2goMCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdmlzaW9ucztcbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWCA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy54LCB0aGlzLmRpdmlzaW9ucy5sYXN0WCwgMik7XG4gICAgICAgIGNvbnN0IHJkbVhJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25YLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWCA9IHBvc3NpYmxlRGl2aXNpb25YW3JkbVhJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFggPSB0aGlzLmRpdmlzaW9ucy54LmluZGV4T2YoZGl2aXNpb25YKTtcblxuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWSA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy55LCB0aGlzLmRpdmlzaW9ucy5sYXN0WSwgMik7XG4gICAgICAgIGNvbnN0IHJkbVlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25ZLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWSA9IHBvc3NpYmxlRGl2aXNpb25ZW3JkbVlJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFkgPSB0aGlzLmRpdmlzaW9ucy55LmluZGV4T2YoZGl2aXNpb25ZKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0udXBkYXRlRGl2aXNpb25zKGRpdmlzaW9uWCwgZGl2aXNpb25ZLCB0aGlzLmFsbG93SW52ZXJ0KSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0uc2V0U3RyaXBlcygnaG9yaXpvbnRhbCcsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kRGl2aXNpb25zICggYWxsLCBjdXJyZW50LCByYW5nZSApIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gYWxsLm1hcCggKCBkaXZpc2lvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICggaW5kZXggPiBjdXJyZW50IC0gcmFuZ2UgJiYgaW5kZXggPCBjdXJyZW50ICsgcmFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdmlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLmZpbHRlciggKCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGl2aXNpb25zO1xuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBkYXRhICkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCB8fCB3aW5kb3cuc291bmRFbmRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXkgPT09ICdkJyApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ2UnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAneCcgKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gIXRoaXMuc3BlZWRDb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvd0tpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJkbSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgaWYgKCByZG0gPiAwLjYgfHwgIXRoaXMubG93a2lja2VkICkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmICggcmRtID4gMC4yICkge1xuICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvd2tpY2tlZCsrO1xuICAgIH1cblxuICAgIG9uSGlnaEtpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAxLjE7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhpZ2hraWNrZWQgJSAyID09PSAwICkge1xuICAgICAgICAgICAgdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5oaWdoa2lja2VkKys7XG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMywgOSwgMiksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDEsIDEzLCAyKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcblxuICAgICAgICAvLyBjb25zdCByZWFjdGlvbiA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnJlYWN0aW9ucyk7XG4gICAgICAgIC8vIHJlYWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25NaWRkbGVLaWNrICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01JRERMRUtJQ0snKTtcbiAgICB9XG5cbiAgICBvblRyZW1vbG8gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnVHJlbW9sb29vbycpO1xuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5FTkQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLm9uRW5kKCksIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCbGFja01vZGUgKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCbGFja01vZGUrKztcblxuICAgICAgICBpZiAoIHRoaXMuY3VycmVudEJsYWNrTW9kZSA+IHRoaXMuYmxhY2tNb2Rlcy5sZW5ndGggLSAxICkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmxhY2tNb2RlID0gMDtcbiAgICAgICAgfVxuIFxuICAgICAgICBjb25zdCBibGFja01vZGUgPSB0aGlzLmJsYWNrTW9kZXNbdGhpcy5jdXJyZW50QmxhY2tNb2RlXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGJsYWNrTW9kZSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCBvcHRpb25zW2tleV0gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5oaWRlKCksIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnNob3coKSwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0uc2V0QmxhY2tNb2RlKCksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBibGFja01vZGVWZXJ0aWNhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlSG9yaXpvbnRhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsVG9wICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMSxcbiAgICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBibGFja01vZGVUdW5uZWxCb3R0b20gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUJvdHRvbSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlRnVsbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGUgKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2FsZU1vZGUrK1xuXG4gICAgICAgIGlmICggdGhpcy5jdXJyZW50U2NhbGVNb2RlID4gdGhpcy5zY2FsaW5ncy5sZW5ndGggLSAxICkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NhbGVNb2RlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsaW5nc1t0aGlzLmN1cnJlbnRTY2FsZU1vZGVdO1xuXG4gICAgICAgIHNjYWxlKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGVYICgpIHtcbiAgICAgICAgY29uc3QgdG8gPSBNYXRoLm1heCgwLjUsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSAqIDAuMSk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiB0bywgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlWSAoKSB7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgoMC41LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKiAwLjEpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuY29udGFpbmVyLnNjYWxlLCAwLjMsIHsgeTogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZUJvdGggKCkge1xuICAgICAgICBjb25zdCB0byA9IE1hdGgubWF4KDAuNSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICogMC4xKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmNvbnRhaW5lci5zY2FsZSwgMC4zLCB7IHg6IHRvLCB5OiB0bywgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIG9uVUlIaWRkZW4gKCkge1xuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10uc2hvdygpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLnNob3coKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlc1trZXldLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGl2aXNpb25zID0ge1xuICAgICAgICAgICAgeDogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlSG9yaXpvbnRhbCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlQm90dG9tLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxUb3AsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbEJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCxcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMS4wO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyc3RTcGFjZVVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlnaGtpY2tlZCA9IDA7XG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMudGltZSArPSB0aGlzLmZhY3RvciAqIHRoaXMuc3BlZWQgKiAwLjEgKiB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb250YWluZXIucm90YXRpb24ueiArPSB0aGlzLmZhY3RvciAqIHRoaXMuc3BlZWRDb250YWluZXIgKiAwLjAwNTtcblxuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWyd0b3AnXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICYmIHRoaXMuaXNTcGFjZURvd24gJiYgdGhpcy5maXJzdFNwYWNlVXAgKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuZmFjdG9yID0gLXRoaXMuZmFjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RTcGFjZVVwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICYmICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IGRhdGE7XG5cbiAgICAgICAgY29uc3QgdVByb2dyZXNzID0gbWFwKHByb2dyZXNzLCAwLCAxLCAwLCAxLjgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5vblNwYWNlSG9sZCh1UHJvZ3Jlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgLy8gdGhpcy5zcGVlZCA9IDEyLjA7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcywgMSwgeyBzcGVlZDogMTIsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXNDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vRmFjZXNDb250cm9sbGVyLmpzIiwiLyoqXG4gKiBNb3VzZSBNYW5hZ2VyXG4gKi9cblxuY2xhc3MgTW91c2VNYW5hZ2VyIHtcblxuXG4gICAgc3RhdGljIHN0YXJ0KCBjaGVja01vdXNlU3BlZWQgPSBmYWxzZSApIHtcblxuICAgICAgICAvLyBzcGVlZFxuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFkgPSAwO1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFkgPSAwO1xuXG4gICAgICAgIC8vIGRpcmVjdGlvblxuICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDA7XG5cbiAgICAgICAgLy8gcG9zaXRpb25cbiAgICAgICAgd2luZG93Lm1vdXNlWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZVkgPSAwO1xuXG4gICAgICAgIGlmKGNoZWNrTW91c2VTcGVlZCkgd2luZG93LnNldEludGVydmFsKCBNb3VzZU1hbmFnZXIuZ2V0U3BlZWQsIDMwICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIE1vdXNlTWFuYWdlci5tb3ZlICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1vdmUoZSkge1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgIHdpbmRvdy5tb3VzZVkgPSBlLmNsaWVudFk7XG5cbiAgICAgICAgTW91c2VNYW5hZ2VyLmdldERpcmVjdGlvbihlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGlyZWN0aW9uKGUpIHtcblxuICAgICAgICAvLyB4XG4gICAgICAgIGlmICh3aW5kb3cubW91c2VYIDwgZS5wYWdlWClcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAxO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubW91c2VYID4gZS5wYWdlWClcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAtMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDA7XG5cbiAgICAgICAgLy8geVxuICAgICAgICBpZiAod2luZG93Lm1vdXNlWSA8IGUucGFnZVkpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm1vdXNlWSA+IGUucGFnZVkpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gLTE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAwO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTcGVlZCgpIHtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRYID0gd2luZG93Lm1vdXNlWCAtIHdpbmRvdy5tb3VzZUxhc3RYO1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFkgPSB3aW5kb3cubW91c2VZIC0gd2luZG93Lm1vdXNlTGFzdFk7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFggPSB3aW5kb3cubW91c2VYO1xuICAgICAgICB3aW5kb3cubW91c2VMYXN0WSA9IHdpbmRvdy5tb3VzZVk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3VzZU1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9Nb3VzZU1hbmFnZXIuanMiLCJjb25zdCBjb25maWcgPSB7XG4gICAgcGFkczogW1xuICAgICAgICB7IGlkOiAxLCBudW1iZXI6IDQ0IH0sXG4gICAgICAgIHsgaWQ6IDIsIG51bWJlcjogNDUgfSxcbiAgICAgICAgeyBpZDogMywgbnVtYmVyOiA0NiB9LFxuICAgICAgICB7IGlkOiA0LCBudW1iZXI6IDQ3IH0sXG4gICAgICAgIHsgaWQ6IDUsIG51bWJlcjogNDggfSxcbiAgICAgICAgeyBpZDogNiwgbnVtYmVyOiA0OSB9LFxuICAgICAgICB7IGlkOiA3LCBudW1iZXI6IDUwIH0sXG4gICAgICAgIHsgaWQ6IDgsIG51bWJlcjogNTEgfSxcbiAgICBdLFxuICAgIGtub2JzOiBbXG4gICAgICAgIHsgaWQ6IDEsIG51bWJlcjogMSB9LFxuICAgICAgICB7IGlkOiAyLCBudW1iZXI6IDIgfSxcbiAgICAgICAgeyBpZDogMywgbnVtYmVyOiAzIH0sXG4gICAgICAgIHsgaWQ6IDQsIG51bWJlcjogNCB9LFxuICAgICAgICB7IGlkOiA1LCBudW1iZXI6IDUgfSxcbiAgICAgICAgeyBpZDogNiwgbnVtYmVyOiA2IH0sXG4gICAgICAgIHsgaWQ6IDcsIG51bWJlcjogNyB9LFxuICAgICAgICB7IGlkOiA4LCBudW1iZXI6IDggfSxcbiAgICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9jb25maWcvTVBLTWluaS5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIEtleWJvYXJkQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgIG9uS2V5VXAgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHsga2V5IH0pO1xuXG4gICAgICAgIGlmICgga2V5ID09PSAnICcgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFVVApO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04pO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHsga2V5IH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnYmFja2dyb3VuZCcpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQmFja2dyb3VuZC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBCb3R0b20gZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JvdHRvbScpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygtMywgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMS4wO1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnMic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzMnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMSc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3R0b207XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgTGVmdCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnbGVmdCcpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc0JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMSc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICczJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIFJpZ2h0IGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdyaWdodCcsIFRIUkVFLkJhY2tTaWRlKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTIwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc2JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMSc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICczJztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9SaWdodC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBUb3AgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ3RvcCcsIFRIUkVFLkJhY2tTaWRlKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygyMCwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAxLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzgnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICczJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzEnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvVG9wLmpzIiwiaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICd3ZWItYXVkaW8tcGxheWVyJztcbmltcG9ydCBjcmVhdGVBbmFseXNlciBmcm9tICd3ZWItYXVkaW8tYW5hbHlzZXInO1xuaW1wb3J0IGF2ZXJhZ2UgZnJvbSAnYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UnO1xuaW1wb3J0IFJhbmdlIGZyb20gJy4vUmFuZ2UnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcblxuY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuLy8gY29uc3QgYXVkaW9Db250ZXh0ID0gQXVkaW9Db250ZXh0ID8gbmV3IEF1ZGlvQ29udGV4dCgpIDogbnVsbDtcblxuY2xhc3MgU291bmRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5iYXNzID0gMDtcbiAgICAgICAgdGhpcy5taWRCYXNzID0gMDtcbiAgICAgICAgdGhpcy52b2ljZSA9IDA7XG4gICAgICAgIHRoaXMuZHJ1bSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmFzc2V0cyA9ICdhc3NldHMvc291bmRzJztcbiAgICAgICAgdGhpcy5zb3VyY2VzID0ge1xuICAgICAgICAgICAgaW50cm86ICdpbnRyby5tcDMnLFxuICAgICAgICAgICAgeHA6ICd4cC5tcDMnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSA6OnRoaXMuc3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG5cbiAgICAgICAgdGhpcy5pbml0U291bmQoKTtcbiAgICAgICAgLy8gdGhpcy5pbml0R3VpKCk7XG5cbiAgICAgICAgY29uc3QgbG93S2ljayA9IG5ldyBSYW5nZSgnbG93S2ljaycsIFsxMTAsIDEzMF0sIDYwMCwgRXZlbnRzLlNPVU5EUy5MT1dLSUNLKTtcbiAgICAgICAgY29uc3QgbWlkZGxlS2ljayA9IG5ldyBSYW5nZSgnbWlkZGxlS2ljaycsIFsyNzAsIDI5MF0sIDYwMCwgRXZlbnRzLlNPVU5EUy5NSURETEVLSUNLLCAwLjMpO1xuICAgICAgICBjb25zdCB0cmVtb2xvID0gbmV3IFJhbmdlKCd0cmVtb2xvJywgWzQ4MCwgNTIwXSwgMTAwLCBFdmVudHMuU09VTkRTLlRSRU1PTE8pO1xuICAgICAgICBjb25zdCBoaWdoS2ljayA9IG5ldyBSYW5nZSgnaGlnaEtpY2snLCBbMTUwMCwgMzUwMF0sIDgwMCwgRXZlbnRzLlNPVU5EUy5ISUdIS0lDSywgMC41KTtcblxuICAgICAgICB0aGlzLnJhbmdlcyA9IFtsb3dLaWNrLCBoaWdoS2ljaywgdHJlbW9sbywgbWlkZGxlS2lja107XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLlNUQVJULCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB0aGlzLm9uU3BhY2VIb2xkKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCwgdGhpcy5vblNwYWNlVXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICB9XG5cbiAgICBpbml0R3VpICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZEd1aSA9IHdpbmRvdy5ndWkuYWRkRm9sZGVyKCdTb3VuZCcpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhdXNlID0gdGhpcy5zb3VuZEd1aS5hZGQodGhpcywgJ3BhdXNlJyk7XG4gICAgICAgIHBhdXNlLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlKSB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRTb3VuZCAoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc291cmNlcykubWFwKCAoIGtleSApID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldID0ge1xuICAgICAgICAgICAgICAgIGF1ZGlvOiBudWxsLFxuICAgICAgICAgICAgICAgIGFuYWx5c2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIG5vZGU6IG51bGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gMDtcbiAgICAgICAgICAgIGF1ZGlvLmNyb3NzT3JpZ2luID0gJ0Fub255bW91cyc7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBjcmVhdGVBbmFseXNlcihhdWRpbywgYXVkaW9Db250ZXh0LCB7IGF1ZGlibGU6IHRydWUsIHN0ZXJlbzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5ub2RlID0gYW5hbHlzZXIuYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuU09VTkRTLkNBTlBMQVksIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5FTkQsIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBgJHt0aGlzLmFzc2V0c30vJHt0aGlzLnNvdXJjZXNba2V5XX1gO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5hdWRpbyA9IGF1ZGlvO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICBpZiAoIHBsYXllci5sb2FkZWQgKSB7XG4gICAgICAgICAgICBwbGF5ZXIuYXVkaW8ucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnBsYXllcnNbJ3hwJ10ubG9hZGVkICkge1xuICAgICAgICAgICAgY29uc3QgeyBhbmFseXNlciwgbm9kZSB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgICAgICBjb25zdCBmcmVxcyA9IGFuYWx5c2VyLmZyZXF1ZW5jaWVzKCk7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucmFuZ2VzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBhdmVyYWdlKG5vZGUsIGZyZXFzLCByYW5nZS5mcmVxc1swXSwgcmFuZ2UuZnJlcXNbMV0pO1xuXG4gICAgICAgICAgICAgICAgcmFuZ2UudXBkYXRlKGxldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyB2b2x1bWUgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICBhdWRpby52b2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih2b2x1bWUgKiAwLjUsIDEpKTtcbiAgICB9XG5cbiAgICBvblNwYWNlRG93biAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNTcGFjZURvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhdWRpbyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHsgYXVkaW86IGludHJvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG4gICAgICAgIGNvbnN0IHsgYXVkaW86IHhwIH0gPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgeHAudm9sdW1lID0gMTtcbiAgICAgICAgeHAucGxheSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIHRsLnRvKGludHJvLCAwLjUsIHsgdm9sdW1lOiAwLCBlYXNlOiBFeHBvLmVhc2VPdXQsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIGludHJvLnBhdXNlKCk7XG4gICAgICAgIH19KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291bmRNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvU291bmRNYW5hZ2VyLmpzIiwidmFyIHF1ZXVlID0ge307XG5cbi8qXG4qKiBhbGxvdyBhbnkgbnVtYmVyIHZhcmlhYmxlIHRvIGJlIHNtb290aGVkXG4qIEBwYXJhbSB7c3RyaW5nfSBpZCAtIGEgdW5pcXVlIG5hbWUgZm9yIHlvdXIgc21vb3RoaW5nXG4qIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBiZSBzbW9vdGhlZFxuKiBAcGFyYW0ge251bWJlcn0gY29lZmYgKG9wdGlvbmFsKSAtIHRoZSBzbW9vdGhpbmcgY29lZmZpY2llbnQsIHRoZSBzbWFsbGVyLCB0aGUgc2xvd2VyLiBEZWZhdWx0OiAwLjFcbiogQHBhcmFtIHtib29sZWFufSBsb2cgKG9wdGlvbmFsKSAtIGVpdGhlciB0aGUgc21vb3RoZWQgdmFsdWUgaXMgbG9nIGluIHRoZSBjb25zb2xlLiBEZWZhdWx0OiBmYWxzZVxuKiBAcGFyYW0ge251bWJlcn0gaW5pdCAob3B0aW9uYWwpIC0gdGhlIHN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBzbW9vdGhpbmcuIERlZmF1bHQ6IDBcbiogQHJldHVybiB7bnVtYmVyfSB0aGUgc21vb3RoZWQgdmFsdWVcbioqL1xuXG5mdW5jdGlvbiBzbW9vdGggKCBpZCwgdmFsdWUsIGNvZWZmID0gMC4xLCBsb2cgPSBmYWxzZSwgaW5pdCA9IDAgKSB7XG5cdGlmICggcXVldWVbaWRdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0cXVldWVbaWRdICs9ICggdmFsdWUgLSBxdWV1ZVtpZF0gKSAqIGNvZWZmO1xuXG5cdFx0aWYgKCBsb2cgKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgJWNTbW9vdGggJHtpZH0gOjogJHtxdWV1ZVtpZF19YCwgJ2NvbG9yOiBibHVlOycpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQgPT09ICcnICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbW9vdGggOjogaWQgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuXHRcdH1cblxuXHRcdHF1ZXVlW2lkXSA9IGluaXQ7XG5cdH1cblxuXHRyZXR1cm4gcXVldWVbaWRdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc21vb3RoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vc21vb3RoLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIFVJIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy4kd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0taW50cm8nKTtcbiAgICAgICAgdGhpcy4kbG9nbyA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmludHJvX19sb2dvJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbiA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmludHJvX19hY3Rpb24nKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uTGFiZWwgPSB0aGlzLiRhY3Rpb24ucXVlcnlTZWxlY3RvcignLmFjdGlvbl9fbGFiZWwnKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uRmlsbCA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmFjdGlvbl9fZmlsbCcpO1xuICAgICAgICB0aGlzLiR0dXRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS10dXRvJyk7XG4gICAgICAgIHRoaXMuJGNyZWRpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLWNyZWRpdHMnKTtcbiAgICAgICAgdGhpcy4kY3JlZGl0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlZGl0c19faXRlbScpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0ZpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3Byb2dyZXNzX19maWxsJyk7XG4gICAgICAgIHRoaXMuJGhlbHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX2hlbHAnKTtcbiAgICAgICAgdGhpcy4kYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fYmFja2dyb3VuZCcpO1xuXG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhUaW1lID0gMzAwMDtcbiAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubWluRmlsbCA9IDAuMDE7XG4gICAgICAgIHRoaXMubWF4RmlsbCA9IDE7XG4gICAgICAgIHRoaXMuZmlsbCA9IHRoaXMubWluRmlsbDtcblxuICAgICAgICB0aGlzLnZvbHVtZSA9IDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDU7XG5cbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gOjp0aGlzLm9uQ29tcGxldGU7XG5cbiAgICAgICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24sIHsgdm9sdW1lOiAxLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHByb2dyZXNzRmlsbCwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDEpYCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRsb2dvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMS41LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgcHJvZ3Jlc3M6IDEsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjI1KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiR0dXRvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuNzUsIHsgY3NzOiB7IHNjYWxlOiAxLjUgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjI1KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiR0dXRvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNzUpO1xuICAgICAgICB0aGlzLnRsLnNldCh0aGlzLCB7IHByb2dyZXNzOiAwIH0pO1xuICAgICAgICAvLyB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IHByb2dyZXNzOiAwLjQ0LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgdGhpcy5kdXJhdGlvbiAqIDAuOTgpO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IDo6dGhpcy5vbktleURvd247XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uU3BhY2VEb3duID0gOjp0aGlzLm9uU3BhY2VEb3duO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25FbmRYUCA9IDo6dGhpcy5vbkVuZFhQO1xuICAgICAgICB0aGlzLm9uQ2xpY2tIZWxwID0gOjp0aGlzLm9uQ2xpY2tIZWxwO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWURPV04sIHRoaXMub25LZXlEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuRU5ELCB0aGlzLm9uRW5kWFApO1xuXG4gICAgICAgIHRoaXMudGxIZWxwU2hvdyA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0aGlzLnRsSGVscFNob3cudG8odGhpcy4kdHV0bywgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRoaXMudGxIZWxwU2hvdy50byh0aGlzLiRiYWNrZ3JvdW5kLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHRoaXMudGxIZWxwSGlkZSA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGhpcy50bEhlbHBIaWRlLnRvKHRoaXMuJHR1dG8sIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRoaXMudGxIZWxwSGlkZS50byh0aGlzLiRiYWNrZ3JvdW5kLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHRoaXMuJGhlbHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tIZWxwKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB7IHByb2dyZXNzOiB0aGlzLnByb2dyZXNzLCB2b2x1bWU6IHRoaXMudm9sdW1lIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLiR3cmFwcGVyLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy4kd3JhcHBlciwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvbktleURvd24gKCBkYXRhICkge1xuXG4gICAgfVxuXG4gICAgb25LZXlVcCAoIGRhdGEgKSB7XG5cbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzRG93biAmJiAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSg0KTtcbiAgICAgICAgICAgIHRoaXMudGwucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc0Rvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSgxKTtcbiAgICAgICAgICAgIHRoaXMudGwucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZSAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcywgeyBwcm9ncmVzczogMCB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRjcmVkaXRJdGVtcywgeyBjc3M6IHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fSk7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kY3JlZGl0cywgeyBjc3M6IHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX0pO1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJHByb2dyZXNzRmlsbCwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDApYH19KTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGhlbHAsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5TVEFSVCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5Q3JlZGl0cyAoKSB7XG4gICAgICAgIHRoaXMuJGNyZWRpdHMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgdGhpcy4kYWN0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ0hvbGQgc3BhY2ViYXIgdG8gcmVzdGFydCc7XG5cbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRsLmtpbGwoKTtcbiAgICAgICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24sIHsgdm9sdW1lOiAxLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRhY3Rpb24sIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHByb2dyZXNzRmlsbCwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDEpYCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kY3JlZGl0cywgdGhpcy5kdXJhdGlvbiwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMS41LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiAqIDAuNSwgeyBwcm9ncmVzczogMSwgZWFzZTogRXhwby5lYXNlSW5PdXQgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNSk7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhlbHBJc09wZW4gKSB7XG4gICAgICAgICAgICB0aGlzLnRsSGVscEhpZGUucmVzdGFydCgpOyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAyO1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0bC5zdGFnZ2VyRnJvbVRvKEFycmF5LmZyb20odGhpcy4kY3JlZGl0SXRlbXMpLCBkdXJhdGlvbiwgeyBjc3M6IHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fSwgeyBjc3M6IHsgc2NhbGU6IDEuMCwgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgZHVyYXRpb24gKiAwLjA1LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kaGVscCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMucmVzZXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAyO1xuICAgIH1cblxuICAgIG9uRW5kWFAgKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlDcmVkaXRzKCk7XG4gICAgfVxuXG4gICAgb25DbGlja0hlbHAgKCBldmVudCApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMuaGVscElzT3BlbiApIHtcbiAgICAgICAgICAgIHRoaXMuJGhlbHAuaW5uZXJIVE1MID0gJ1gnO1xuXG4gICAgICAgICAgICB0aGlzLnRsSGVscFNob3cucmVzdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kaGVscC5pbm5lckhUTUwgPSAnPyc7XG5cbiAgICAgICAgICAgIHRoaXMudGxIZWxwSGlkZS5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91aS5qcyIsImltcG9ydCBDb3B5UGFzcyBmcm9tICcuL3Bhc3Nlcy9Db3B5UGFzcyc7XG5pbXBvcnQgUGFzcyBmcm9tICcuL2NvcmUvUGFzcyc7XG5cbmZ1bmN0aW9uIHJlbW92ZU5pbCAoIGFzID0gW10gKSB7XG4gICAgcmV0dXJuIGFzLmZpbHRlcihhID0+IGEgIT0gbnVsbCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlICguLi5hcmdzKSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSByZW1vdmVOaWwoYXJncyk7XG4gICAgXG4gICAgaWYgKCBmaWx0ZXJlZC5sZW5ndGggPCAxICkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIFxuICAgIGlmICggZmlsdGVyZWQubGVuZ3RoID09PSAxICkge1xuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWQucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhjdXIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgYWNjW2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBjdXJba2V5XSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgY3VyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IGN1cltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuXG5jbGFzcyBDb21wb3NlciB7XG5cblx0Y29uc3RydWN0b3IgKCByZW5kZXJlciwgb3B0cyA9IHt9ICkge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdFx0bWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXG5cdFx0XHRtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcblx0XHRcdHdyYXBTOiBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nLFxuXHRcdFx0d3JhcFQ6IFRIUkVFLkNsYW1wVG9FZGdlV3JhcHBpbmcsXG5cdFx0XHRmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCxcblx0XHRcdHR5cGU6IFRIUkVFLlVuc2lnbmVkQnl0ZVR5cGUsXG5cdFx0XHRzdGVuY2lsQnVmZmVyOiB0cnVlXG5cdFx0fTtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0cywgb3B0cyk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cblx0XHR0aGlzLmZyb250ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KDEsIDEsIG9wdGlvbnMpO1xuXHRcdHRoaXMuYmFjayA9IHRoaXMuZnJvbnQuY2xvbmUoKTtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIDEsIDEsIDEsIDEsIC0xMDAwMCwgMTAwMDApO1xuXG5cdFx0dGhpcy5kZWZhdWx0TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoKTtcblx0XHR0aGlzLnF1YWQgPSBuZXcgVEhSRUUuTWVzaChcblx0XHRcdG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAxLCAxICksXG5cdFx0XHR0aGlzLmRlZmF1bHRNYXRlcmlhbFxuXHRcdCk7XG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5xdWFkKTtcblxuXHRcdHRoaXMuY29weVBhc3MgPSBuZXcgQ29weVBhc3MoKTtcblxuXHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcblx0fVxuXG5cdHNldFNpemUgKCB3LCBoICkge1xuXHRcdHRoaXMud2lkdGggPSB3O1xuXHRcdHRoaXMuaGVpZ2h0ID0gaDtcblxuXHRcdHRoaXMuY2FtZXJhLnByb2plY3Rpb25NYXRyaXgubWFrZU9ydGhvZ3JhcGhpYyggdyAvIC0gMiwgdyAvIDIsIGggLyAyLCBoIC8gLSAyLCB0aGlzLmNhbWVyYS5uZWFyLCB0aGlzLmNhbWVyYS5mYXIgKTtcblx0XHR0aGlzLnF1YWQuc2NhbGUuc2V0KCB3LCBoLCAxICk7XG5cblx0XHR0aGlzLmZyb250LnNldFNpemUoIHcsIGggKTtcblx0XHR0aGlzLmJhY2suc2V0U2l6ZSggdywgaCApO1xuXHR9XG5cblx0c3dhcEJ1ZmZlcnMgKCkge1xuXHRcdHRoaXMub3V0cHV0ID0gdGhpcy53cml0ZTtcblx0XHR0aGlzLmlucHV0ID0gdGhpcy5yZWFkO1xuXG5cdFx0Y29uc3QgdGVtcCA9IHRoaXMud3JpdGU7XG5cdFx0dGhpcy53cml0ZSA9IHRoaXMucmVhZDtcblx0XHR0aGlzLnJlYWQgPSB0ZW1wO1xuXHR9XG5cblx0cGFzcyAoIHBhc3MsIHRhcmdldCApIHtcblx0XHRpZiAoIHBhc3MgaW5zdGFuY2VvZiBQYXNzICYmIHBhc3MuZW5hYmxlZCApIHtcblx0XHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHBhc3Muc2hhZGVyO1xuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsLnVuaWZvcm1zLnRJbnB1dC52YWx1ZSA9IHRoaXMucmVhZC50ZXh0dXJlO1xuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuXHRcdFx0aWYgKCB0YXJnZXQgKSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0YXJnZXQsIHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMud3JpdGUsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5zd2FwQnVmZmVycygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlciAoIHNjZW5lLCBjYW1lcmEsIHRhcmdldCApwqB7XG5cdFx0Y29uc3QgZGVzdCA9IHRhcmdldCA/IHRhcmdldCA6IHRoaXMud3JpdGU7XG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCBkZXN0LCB0cnVlKTtcblx0XHR0aGlzLnN3YXBCdWZmZXJzKCk7XG5cdH1cblxuXHRyZXNldCAoKSB7XG5cdFx0dGhpcy5yZWFkID0gdGhpcy5mcm9udDtcblx0XHR0aGlzLndyaXRlID0gdGhpcy5iYWNrO1xuXG5cdFx0dGhpcy5vdXRwdXQgPSB0aGlzLndyaXRlO1xuXHRcdHRoaXMuaW5wdXQgPSB0aGlzLnJlYWQ7XG5cdH1cblxuXHR0b1NjcmVlbiAoIHBhc3MsIHRhcmdldCApIHtcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSBwYXNzID8gcGFzcy5zaGFkZXIgOiB0aGlzLmNvcHlQYXNzLnNoYWRlcjtcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwudW5pZm9ybXMudElucHV0LnZhbHVlID0gdGhpcy5yZWFkLnRleHR1cmU7XG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCApO1xuXG5cdFx0aWYgKCB0YXJnZXQgKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGFyZ2V0LCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9Db21wb3Nlci5qcyIsImltcG9ydCBQYXNzIGZyb20gJy4uL2NvcmUvUGFzcyc7XG5cbmNsYXNzIEN1c3RvbVBhc3MgZXh0ZW5kcyBQYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yICggb3B0aW9ucyApIHtcbiAgICAgICAgc3VwZXIoJ0N1c3RvbVBhc3MnLCAnY3VzdG9tLmZzJywgJ2Jhc2ljLnZzJywgb3B0aW9ucyk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy51bmlmb3Jtcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9wYXNzZXMvQ3VzdG9tUGFzcy5qcyIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZlxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JhZi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiggVEhSRUUgKSB7XG5cdC8qKlxuXHQgKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuXHQgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG5cdCAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG5cdCAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuXHQgKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG5cdCAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5cdGZ1bmN0aW9uIE9yYml0Q29udHJvbHMoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0XHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0XHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHRcdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5ab29tID0gMDtcblx0XHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0XHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0XHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0XHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0XHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHRcdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0XHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdFx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdFx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdFx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0XHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdFx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHRcdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0XHQvLyBNb3VzZSBidXR0b25zXG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHRcdC8vIGZvciByZXNldFxuXHRcdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdFx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHRcdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdFx0Ly9cblx0XHQvLyBwdWJsaWMgbWV0aG9kc1xuXHRcdC8vXG5cblx0XHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fTtcblxuXHRcdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0XHR9O1xuXG5cdFx0Ly9cblx0XHQvLyBpbnRlcm5hbHNcblx0XHQvL1xuXG5cdFx0dmFyIHNjb3BlID0gdGhpcztcblxuXHRcdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0XHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHRcdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHRcdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHRcdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0XHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHRcdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdFx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdFx0dmFyIHNjYWxlID0gMTtcblx0XHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdFx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR9XG5cblx0XHQvL1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHR9O1xuXG5cdE9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuXHRPcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9yYml0Q29udHJvbHM7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0XHRjZW50ZXI6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdG5vWm9vbToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1JvdGF0ZToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1Bhbjoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub0tleXM6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSApO1xuXG5cdHJldHVybiBPcmJpdENvbnRyb2xzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aHJlZS1vcmJpdC1jb250cm9scy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZXF1ZW5jeVRvSW5kZXggPSByZXF1aXJlKCdhdWRpby1mcmVxdWVuY3ktdG8taW5kZXgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDI1NSlcbm1vZHVsZS5leHBvcnRzLmZsb2F0RGF0YSA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDEpXG5cbmZ1bmN0aW9uIGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZSAoZGl2LCBhbmFseXNlciwgZnJlcXVlbmNpZXMsIG1pbkh6LCBtYXhIeikge1xuICB2YXIgc2FtcGxlUmF0ZSA9IGFuYWx5c2VyLmNvbnRleHQuc2FtcGxlUmF0ZVxuICB2YXIgYmluQ291bnQgPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudFxuICB2YXIgc3RhcnQgPSBmcmVxdWVuY3lUb0luZGV4KG1pbkh6LCBzYW1wbGVSYXRlLCBiaW5Db3VudClcbiAgdmFyIGVuZCA9IGZyZXF1ZW5jeVRvSW5kZXgobWF4SHosIHNhbXBsZVJhdGUsIGJpbkNvdW50KVxuICB2YXIgY291bnQgPSBlbmQgLSBzdGFydFxuICB2YXIgc3VtID0gMFxuICBmb3IgKDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcbiAgICBzdW0gKz0gZnJlcXVlbmNpZXNbc3RhcnRdIC8gZGl2XG4gIH1cbiAgcmV0dXJuIGNvdW50ID09PSAwID8gMCA6IChzdW0gLyBjb3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmFseXNlci1mcmVxdWVuY3ktYXZlcmFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZXF1ZW5jeVRvSW5kZXhcbmZ1bmN0aW9uIGZyZXF1ZW5jeVRvSW5kZXggKGZyZXF1ZW5jeSwgc2FtcGxlUmF0ZSwgZnJlcXVlbmN5QmluQ291bnQpIHtcbiAgdmFyIG55cXVpc3QgPSBzYW1wbGVSYXRlIC8gMlxuICB2YXIgaW5kZXggPSBNYXRoLnJvdW5kKGZyZXF1ZW5jeSAvIG55cXVpc3QgKiBmcmVxdWVuY3lCaW5Db3VudClcbiAgcmV0dXJuIGNsYW1wKGluZGV4LCAwLCBmcmVxdWVuY3lCaW5Db3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vZmFjZXMvQmFja2dyb3VuZCc7XG5pbXBvcnQgVG9wIGZyb20gJy4vZmFjZXMvVG9wJztcbmltcG9ydCBMZWZ0IGZyb20gJy4vZmFjZXMvTGVmdCc7XG5pbXBvcnQgUmlnaHQgZnJvbSAnLi9mYWNlcy9SaWdodCc7XG5pbXBvcnQgQm90dG9tIGZyb20gJy4vZmFjZXMvQm90dG9tJztcblxuaW1wb3J0IHNtb290aCBmcm9tICcuL3Ntb290aCc7XG5pbXBvcnQgRmFjZXNDb250cm9sbGVyIGZyb20gJy4vRmFjZXNDb250cm9sbGVyJztcbmltcG9ydCBNb3VzZU1hbmFnZXIgZnJvbSAnLi9Nb3VzZU1hbmFnZXInO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xuaW1wb3J0IE1QS01pbmkgZnJvbSAnLi9jb25maWcvTVBLTWluaSc7XG5pbXBvcnQgTWlkaUNvbnRyb2xsZXIgZnJvbSAnLi91dGlscy9NaWRpQ29udHJvbGxlcic7XG5pbXBvcnQgQ29tcG9zZXIgZnJvbSAnLi91dGlscy9wb3N0cHJvL0NvbXBvc2VyJztcbmltcG9ydCBDdXN0b21QYXNzIGZyb20gJy4vdXRpbHMvcG9zdHByby9wYXNzZXMvQ3VzdG9tUGFzcyc7XG5pbXBvcnQgRlhBQVBhc3MgZnJvbSAnLi91dGlscy9wb3N0cHJvL3Bhc3Nlcy9GWEFBUGFzcyc7XG5cbmNsYXNzIEFwcCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gMHgwMDAwMDA7XG5cdFx0XG4gICAgICAgIE1vdXNlTWFuYWdlci5zdGFydCgpO1xuICAgICAgICBNaWRpQ29udHJvbGxlci5zdGFydChNUEtNaW5pKTtcblxuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlciA9IG5ldyBGYWNlc0NvbnRyb2xsZXIoKTtcblxuICAgICAgICB0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcblx0XHRcdFxuXHRcdHRoaXMucmVzaXplID0gOjp0aGlzLnJlc2l6ZTtcblx0XHR0aGlzLnVwZGF0ZSA9IDo6dGhpcy51cGRhdGU7XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMucmVzZXQgPSA6OnRoaXMucmVzZXQ7XG5cdFx0XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5iaW5kTGlzdGVuZXJzKCk7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcywgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogZmFsc2UgfSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gZmFsc2U7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cdFx0XG5cdFx0V0FHTkVSLnZlcnRleFNoYWRlcnNQYXRoID0gJ2pzL3ZlcnRleC1zaGFkZXJzJztcblx0XHRXQUdORVIuZnJhZ21lbnRTaGFkZXJzUGF0aCA9ICdqcy9mcmFnbWVudC1zaGFkZXJzJztcblxuXHRcdHRoaXMuY29tcG9zZXIgPSBuZXcgQ29tcG9zZXIodGhpcy5yZW5kZXJlcik7XG5cdFx0dGhpcy5jb21wb3Nlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG5cdFx0Y29uc3QgYmxvb21XaWR0aCA9IHdpbmRvdy5pc1RvdWNoID8gMjU2IDogNTEyO1xuICAgICAgICBjb25zdCBibG9vbUhlaWdodCA9IHdpbmRvdy5pc1RvdWNoID8gMjU2IDogNTEyO1xuXG5cdFx0dGhpcy5ibG9vbVBhc3MgPSBuZXcgV0FHTkVSLk11bHRpUGFzc0Jsb29tUGFzcyhibG9vbVdpZHRoLCBibG9vbUhlaWdodCk7XG5cdFx0dGhpcy5ibG9vbVBhc3MucGFyYW1zLnN0cmVuZ3RoID0gNTAuMDtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLmJsdXJBbW91bnQgPSA1LjtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLmFwcGx5Wm9vbUJsdXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuem9vbUJsdXJTdHJlbmd0aCA9IDMuMDtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLnpvb21CbHVyQ2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjIoIDAuNSwgMC41ICk7XG5cbiAgICAgICAgdGhpcy5yZ2JQYXNzID0gbmV3IFdBR05FUi5SR0JTcGxpdFBhc3MoKTtcbiAgICAgICAgdGhpcy5yZ2JQYXNzLnBhcmFtcy5kZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKDIwLCAyMCk7XG5cbiAgICAgICAgdGhpcy5ub2lzZVBhc3MgPSBuZXcgV0FHTkVSLk5vaXNlUGFzcygpO1xuICAgICAgICB0aGlzLm5vaXNlUGFzcy5wYXJhbXMuYW1vdW50ID0gMC4yNTtcbiAgICAgICAgdGhpcy5ub2lzZVBhc3MucGFyYW1zLnNwZWVkID0gMC4yO1xuXG4gICAgICAgIHRoaXMudmlnbmV0dGVQYXNzID0gbmV3IFdBR05FUi5WaWduZXR0ZVBhc3MoKTtcbiAgICAgICAgdGhpcy52aWduZXR0ZVBhc3MucGFyYW1zLmFtb3VudCA9IDAuNztcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuZnhhYVBhc3MgPSBuZXcgV0FHTkVSLkZYQUFQYXNzKCk7XG5cbiAgICAgICAgdGhpcy5jdXN0b21QYXNzID0gbmV3IEN1c3RvbVBhc3Moe1xuICAgICAgICAgICAgc3RyZW5ndGg6IDUwLFxuICAgICAgICAgICAgYmx1ckFtb3VudDogNSxcbiAgICAgICAgICAgIGFwcGx5Wm9vbUJsdXI6IHRydWUsXG4gICAgICAgICAgICB6b29tQmx1clN0cmVuZ3RoOiB7IHZhbHVlOiAzIH0sXG4gICAgICAgICAgICB6b29tQmx1ckNlbnRlcjogbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAwLjUpLFxuXG4gICAgICAgICAgICBzcGxpdERlbHRhOiB7IHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigyMCwgMjApIH0sXG5cbiAgICAgICAgICAgIG5vaXNlQW1vdW50OiB7IHZhbHVlOiAwLjI1IH0sXG4gICAgICAgICAgICBub2lzZVNwZWVkOiB7IHZhbHVlOiAwLjIgfSxcblxuICAgICAgICAgICAgdmlnbmV0dGVBbW91bnQ6IHsgdmFsdWU6IDAuNyB9LFxuICAgICAgICAgICAgdmlnbmV0dGVGYWxsb2Y6IHsgdmFsdWU6IDAuMSB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZ4YWFQYXNzID0gbmV3IEZYQUFQYXNzKCk7XG5cblx0XHR0aGlzLndpZHRoID0gd2luZG93LndpZHRoID0gNjA7XG5cdFx0dGhpcy5oZWlnaHQgPSB3aW5kb3cuaGVpZ2h0ID0gNjA7XG5cdFx0dGhpcy5sZW5ndGggPSB3aW5kb3cubGVuZ3RoID0gNjAwO1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4MDAwMDAwLCAwLjgsIHRoaXMubGVuZ3RoICogLjk4ICk7XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxMDAwKTtcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDA7XG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jYW1lcmEpO1xuXG5cbiAgICAgICAgdGhpcy5hZGRDb250cm9scygpO1xuICAgICAgICB0aGlzLmFkZExpZ2h0cygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICBcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRiaW5kTGlzdGVuZXJzICgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLlNUQVJULCB0aGlzLm9uU3RhcnQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5VSS5ISURERU4sIHRoaXMub25VSUhpZGRlbik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5FTkQsIHRoaXMub25Tb3VuZEVuZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLkVORCwgdGhpcy5yZXNldCk7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5TVEFSVCk7XG5cdH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnVpSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIHdpbmRvdy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LnVpSGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblVJSGlkZGVuICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25Tb3VuZEVuZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZGF0YTtcblxuICAgICAgICBpZiAoIG5hbWUgPT09ICd4cCcgKSB7XG4gICAgICAgICAgICB3aW5kb3cuc291bmRFbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblx0YWRkQ29udHJvbHMgKCkge1xuXHRcdGNvbnN0IE9yYml0Q29udHJvbHMgPSByZXF1aXJlKCd0aHJlZS1vcmJpdC1jb250cm9scycpKFRIUkVFKTtcblx0XHQvLyB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHR9XG5cblx0YWRkTGlnaHRzICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIGxpZ2h0cycpO1xuXHRcdC8vIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4RkZGRkZGKTtcblx0XHQvLyB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICBcdFx0Ly8gY29uc3QgcG9pbnRMaWdodDMgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhmZmZmZmYsIDcuMSwgMCk7XG4gIFx0XHQvLyBwb2ludExpZ2h0My5wb3NpdGlvbi54ID0gMFxuICBcdFx0Ly8gcG9pbnRMaWdodDMucG9zaXRpb24ueSA9IDQ7XG4gIFx0XHQvLyBwb2ludExpZ2h0My5wb3NpdGlvbi56ID0gNjA7XG5cbiAgXHRcdC8vIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQzKTtcblx0fVxuXG5cdGFkZEVsZW1lbnRzICgpIHtcblx0XHR0aGlzLmRpdmlzYXRvciA9IDI7XG5cbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoLCAzMiwgMzIpO1xuICAgICAgICB0aGlzLm90aGVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmxlbmd0aCwgMzIsIDMyKTtcblxuXHRcdHRoaXMubGVmdFJpZ2h0R2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLmxlbmd0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvciksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvcikgKTtcblx0XHR0aGlzLnRvcEJvdHRvbUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5sZW5ndGgsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yKSAsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvcikpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yICogMiksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvciAqIDIpICk7XG5cblx0XHR0aGlzLmxlZnQgPSBuZXcgTGVmdCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5sZWZ0LnJvdGF0aW9uLnkgPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMubGVmdC5wb3NpdGlvbi54ID0gLXRoaXMud2lkdGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdsZWZ0JywgdGhpcy5sZWZ0KVxuXG5cdFx0dGhpcy5yaWdodCA9IG5ldyBSaWdodCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5yaWdodC5yb3RhdGlvbi55ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnJpZ2h0LnBvc2l0aW9uLnggPSB0aGlzLndpZHRoICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcigncmlnaHQnLCB0aGlzLnJpZ2h0KVxuXG5cdFx0dGhpcy5ib3R0b20gPSBuZXcgQm90dG9tKHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLmJvdHRvbS5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjU7XG4gICAgICAgIHRoaXMuYm90dG9tLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMuYm90dG9tLnBvc2l0aW9uLnkgPSAtdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdib3R0b20nLCB0aGlzLmJvdHRvbSlcblxuXHRcdHRoaXMudG9wID0gbmV3IFRvcCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy50b3Aucm90YXRpb24ueCA9IC1NYXRoLlBJICogMC41O1xuICAgICAgICB0aGlzLnRvcC5yb3RhdGlvbi56ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnRvcC5wb3NpdGlvbi55ID0gdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCd0b3AnLCB0aGlzLnRvcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCk7XG5cblx0XHQvLyB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzLmJhY2tncm91bmRHZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdC8vIHRoaXMuYmFja2dyb3VuZC5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuICAvLyAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZCk7XG5cblx0XHR0aGlzLmZhY2VzQ29udHJvbGxlci5jb250YWluZXIucG9zaXRpb24ueiA9IC10aGlzLmxlbmd0aCAqIDAuNTtcblxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMuZmFjZXNDb250cm9sbGVyLmNvbnRhaW5lcik7XG5cdH1cblxuICAgIHJvdGF0ZSAoKSB7XG4gICAgICAgIGNvbnN0IHNlbnMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxO1xuICAgICAgICBjb25zdCBkZWxheSA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICB9XG5cblx0dXBkYXRlICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIudXBkYXRlKCk7XG5cbiAgICAgICAgdGhpcy5jdXN0b21QYXNzLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5jb21wb3Nlci5yZXNldCgpO1xuXHRcdHRoaXMuY29tcG9zZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMuYmxvb21QYXNzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMucmdiUGFzcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLm5vaXNlUGFzcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLnZpZ25ldHRlUGFzcyk7XG4gICAgICAgIC8vIHRoaXMuY29tcG9zZXIudG9TY3JlZW4odGhpcy5meGFhUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLmN1c3RvbVBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnRvU2NyZWVuKHRoaXMuZnhhYVBhc3MpO1xuXG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG5cdFx0cmFmKHRoaXMudXBkYXRlKTtcblx0fVxuXG5cdHJlc2l6ZSAoKSB7XG5cdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG5cdH1cblxufVxuXG5uZXcgQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwiaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBSYW5nZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIG5hbWUsIGZyZXFzLCBkZWx0YSwgZXZlbnQsIG1pbkxldmVsID0gMC41ICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmZyZXFzID0gZnJlcXM7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmxldmVsID0gMDtcbiAgICAgICAgdGhpcy5taW5MZXZlbCA9IG1pbkxldmVsO1xuXG4gICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggbGV2ZWwgKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gRGF0ZS5ub3coKSAtIHRoaXMudGltZTtcblxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG5cbiAgICAgICAgaWYgKCBkZWx0YSA+IHRoaXMuZGVsdGEgJiYgdGhpcy5sZXZlbCA+IHRoaXMubWluTGV2ZWwgKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQodGhpcy5ldmVudCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICggdGhpcy5uYW1lID09PSAnaGlnaEtpY2snICkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9SYW5nZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVvdXRcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyksIHdhaXQpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL2RlYm91bmNlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbHVja3kgKCBjaGFuY2VzICkge1xuICAgIHJldHVybiAhfn4oTWF0aC5yYW5kb20oKSAqIGNoYW5jZXMpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvbHVja3kuanMiLCJpbXBvcnQgUGFzcyBmcm9tICcuLi9jb3JlL1Bhc3MnO1xuXG5jbGFzcyBDb3B5UGFzcyBleHRlbmRzIFBhc3Mge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcignQ29weVBhc3MnLCAnY29weS5mcycsICdiYXNpYy52cycpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29weVBhc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3Bhc3Nlcy9Db3B5UGFzcy5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt+fihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdWRpby9taWRpXCI6IFtcblx0XHRcIm1pZFwiLFxuXHRcdFwibWlkaVwiLFxuXHRcdFwia2FyXCIsXG5cdFx0XCJybWlcIlxuXHRdLFxuXHRcImF1ZGlvL21wNFwiOiBbXG5cdFx0XCJtcDRhXCIsXG5cdFx0XCJtNGFcIlxuXHRdLFxuXHRcImF1ZGlvL21wZWdcIjogW1xuXHRcdFwibXBnYVwiLFxuXHRcdFwibXAyXCIsXG5cdFx0XCJtcDJhXCIsXG5cdFx0XCJtcDNcIixcblx0XHRcIm0yYVwiLFxuXHRcdFwibTNhXCJcblx0XSxcblx0XCJhdWRpby9vZ2dcIjogW1xuXHRcdFwib2dhXCIsXG5cdFx0XCJvZ2dcIixcblx0XHRcInNweFwiXG5cdF0sXG5cdFwiYXVkaW8vd2VibVwiOiBbXG5cdFx0XCJ3ZWJhXCJcblx0XSxcblx0XCJhdWRpby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rYVwiXG5cdF0sXG5cdFwiYXVkaW8veC1tcGVndXJsXCI6IFtcblx0XHRcIm0zdVwiXG5cdF0sXG5cdFwiYXVkaW8vd2F2XCI6IFtcblx0XHRcIndhdlwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcFwiOiBbXG5cdFx0XCIzZ3BcIlxuXHRdLFxuXHRcInZpZGVvLzNncHAyXCI6IFtcblx0XHRcIjNnMlwiXG5cdF0sXG5cdFwidmlkZW8vbXA0XCI6IFtcblx0XHRcIm1wNFwiLFxuXHRcdFwibXA0dlwiLFxuXHRcdFwibXBnNFwiXG5cdF0sXG5cdFwidmlkZW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGVnXCIsXG5cdFx0XCJtcGdcIixcblx0XHRcIm1wZVwiLFxuXHRcdFwibTF2XCIsXG5cdFx0XCJtMnZcIlxuXHRdLFxuXHRcInZpZGVvL29nZ1wiOiBbXG5cdFx0XCJvZ3ZcIlxuXHRdLFxuXHRcInZpZGVvL3F1aWNrdGltZVwiOiBbXG5cdFx0XCJxdFwiLFxuXHRcdFwibW92XCJcblx0XSxcblx0XCJ2aWRlby93ZWJtXCI6IFtcblx0XHRcIndlYm1cIlxuXHRdLFxuXHRcInZpZGVvL3gtZjR2XCI6IFtcblx0XHRcImY0dlwiXG5cdF0sXG5cdFwidmlkZW8veC1mbGlcIjogW1xuXHRcdFwiZmxpXCJcblx0XSxcblx0XCJ2aWRlby94LWZsdlwiOiBbXG5cdFx0XCJmbHZcIlxuXHRdLFxuXHRcInZpZGVvL3gtbTR2XCI6IFtcblx0XHRcIm00dlwiXG5cdF0sXG5cdFwidmlkZW8veC1tYXRyb3NrYVwiOiBbXG5cdFx0XCJta3ZcIixcblx0XHRcIm1rM2RcIixcblx0XHRcIm1rc1wiXG5cdF1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL21pbWUtdHlwZXMuanNvblxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFtcFxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA8IG1heFxuICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhbXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Zvci1lYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzTm9kZVxuXG5mdW5jdGlvbiBpc05vZGUgKHZhbCkge1xuICByZXR1cm4gKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpXG4gICAgPyBmYWxzZVxuICAgIDogKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ29iamVjdCcpXG4gICAgICA/ICh2YWwgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZSlcbiAgICAgIDogKHR5cGVvZiB2YWwubm9kZVR5cGUgPT09ICdudW1iZXInKSAmJlxuICAgICAgICAodHlwZW9mIHZhbC5ub2RlTmFtZSA9PT0gJ3N0cmluZycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZG9tL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG4gICwgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJylcbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3JFYWNoKFxuICAgICAgdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcbiAgICAsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICAgICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICAgICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICAgICAgfVxuICAgICAgfVxuICApXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID1cbiAgZ2xvYmFsLnBlcmZvcm1hbmNlICYmXG4gIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPyBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpXG4gIH0gOiBEYXRlLm5vdyB8fCBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuICtuZXcgRGF0ZVxuICB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmlnaHQtbm93L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RvbSA9IHJlcXVpcmUoJ2lzLWRvbScpXG52YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cy52aWRlbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICd2aWRlbycpXG5tb2R1bGUuZXhwb3J0cy5hdWRpbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICdhdWRpbycpXG5cbmZ1bmN0aW9uIHNpbXBsZU1lZGlhRWxlbWVudCAoZWxlbWVudE5hbWUsIHNvdXJjZXMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICBzb3VyY2VzID0gWyBzb3VyY2VzIF1cbiAgfVxuXG4gIHZhciBtZWRpYSA9IG9wdC5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpXG5cbiAgaWYgKG9wdC5sb29wKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2xvb3AnLCAnbG9vcCcpXG4gIGlmIChvcHQubXV0ZWQpIG1lZGlhLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnbXV0ZWQnKVxuICBpZiAob3B0LmF1dG9wbGF5KSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ2F1dG9wbGF5JylcbiAgaWYgKG9wdC5jb250cm9scykgbWVkaWEuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpXG4gIGlmIChvcHQuY3Jvc3NPcmlnaW4pIG1lZGlhLnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCBvcHQuY3Jvc3NPcmlnaW4pXG4gIGlmIChvcHQucHJlbG9hZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgb3B0LnByZWxvYWQpXG4gIGlmIChvcHQucG9zdGVyKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIG9wdC5wb3N0ZXIpXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcpIG1lZGlhLnNldEF0dHJpYnV0ZSgndm9sdW1lJywgb3B0LnZvbHVtZSlcblxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBtZWRpYS5hcHBlbmRDaGlsZChjcmVhdGVTb3VyY2VFbGVtZW50KHNvdXJjZSkpXG4gIH0pXG5cbiAgcmV0dXJuIG1lZGlhXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUVsZW1lbnQgKGRhdGEpIHtcbiAgaWYgKGlzRG9tKGRhdGEpKSByZXR1cm4gZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YSA9IHsgc3JjOiBkYXRhIH1cbiAgICBpZiAoZGF0YS5zcmMpIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb24oZGF0YS5zcmMpXG4gICAgICBpZiAoZXh0KSBkYXRhLnR5cGUgPSBsb29rdXAoZXh0KVxuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKVxuICBpZiAoZGF0YS5zcmMpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEuc3JjKVxuICBpZiAoZGF0YS50eXBlKSBzb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKVxuICByZXR1cm4gc291cmNlXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRhdGEuc3Vic3RyaW5nKGV4dElkeCArIDEpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cmltL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW9BbmFseXNlclxuXG5mdW5jdGlvbiBXZWJBdWRpb0FuYWx5c2VyKGF1ZGlvLCBjdHgsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFdlYkF1ZGlvQW5hbHlzZXIpKSByZXR1cm4gbmV3IFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cylcbiAgaWYgKCEoY3R4IGluc3RhbmNlb2YgQXVkaW9Db250ZXh0KSkgKG9wdHMgPSBjdHgpLCAoY3R4ID0gbnVsbClcblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICB0aGlzLmN0eCA9IGN0eCA9IGN0eCB8fCBuZXcgQXVkaW9Db250ZXh0XG5cbiAgaWYgKCEoYXVkaW8gaW5zdGFuY2VvZiBBdWRpb05vZGUpKSB7XG4gICAgYXVkaW8gPSAoYXVkaW8gaW5zdGFuY2VvZiBBdWRpbyB8fCBhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpXG4gICAgICA/IGN0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pXG4gICAgICA6IGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShhdWRpbylcbiAgfVxuXG4gIHRoaXMuYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKVxuICB0aGlzLnN0ZXJlbyAgID0gISFvcHRzLnN0ZXJlb1xuICB0aGlzLmF1ZGlibGUgID0gb3B0cy5hdWRpYmxlICE9PSBmYWxzZVxuICB0aGlzLndhdmVkYXRhID0gbnVsbFxuICB0aGlzLmZyZXFkYXRhID0gbnVsbFxuICB0aGlzLnNwbGl0dGVyID0gbnVsbFxuICB0aGlzLm1lcmdlciAgID0gbnVsbFxuICB0aGlzLnNvdXJjZSAgID0gYXVkaW9cblxuICBpZiAoIXRoaXMuc3RlcmVvKSB7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNvdXJjZVxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5hbmFseXNlcilcbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5hbmFseXNlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFuYWx5c2VyID0gW3RoaXMuYW5hbHlzZXJdXG4gICAgdGhpcy5hbmFseXNlci5wdXNoKGN0eC5jcmVhdGVBbmFseXNlcigpKVxuXG4gICAgdGhpcy5zcGxpdHRlciA9IGN0eC5jcmVhdGVDaGFubmVsU3BsaXR0ZXIoMilcbiAgICB0aGlzLm1lcmdlciAgID0gY3R4LmNyZWF0ZUNoYW5uZWxNZXJnZXIoMilcbiAgICB0aGlzLm91dHB1dCAgID0gdGhpcy5tZXJnZXJcblxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5zcGxpdHRlcilcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNwbGl0dGVyLmNvbm5lY3QodGhpcy5hbmFseXNlcltpXSwgaSwgMClcbiAgICAgIHRoaXMuYW5hbHlzZXJbaV0uY29ubmVjdCh0aGlzLm1lcmdlciwgMCwgaSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5tZXJnZXIuY29ubmVjdChjdHguZGVzdGluYXRpb24pXG4gIH1cbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUud2F2ZWZvcm0gPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMud2F2ZWRhdGEgfHwgKFxuICAgIHRoaXMud2F2ZWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEob3V0cHV0KVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUuZnJlcXVlbmNpZXMgPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMuZnJlcWRhdGEgfHwgKFxuICAgIHRoaXMuZnJlcWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJ1ZmZlciA9IHJlcXVpcmUoJy4vbGliL2J1ZmZlci1zb3VyY2UnKVxudmFyIG1lZGlhID0gcmVxdWlyZSgnLi9saWIvbWVkaWEtc291cmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWJBdWRpb1BsYXllclxuZnVuY3Rpb24gd2ViQXVkaW9QbGF5ZXIgKHNyYywgb3B0KSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgYSBzcmMgcGFyYW1ldGVyJylcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIGlmIChvcHQuYnVmZmVyKSByZXR1cm4gYnVmZmVyKHNyYywgb3B0KVxuICBlbHNlIHJldHVybiBtZWRpYShzcmMsIG9wdClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBjcmVhdGVBdWRpb0NvbnRleHQgPSByZXF1aXJlKCcuL2F1ZGlvLWNvbnRleHQnKVxudmFyIHhockF1ZGlvID0gcmVxdWlyZSgnLi94aHItYXVkaW8nKVxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIHJpZ2h0Tm93ID0gcmVxdWlyZSgncmlnaHQtbm93JylcbnZhciByZXN1bWUgPSByZXF1aXJlKCcuL3Jlc3VtZS1jb250ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXJTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlclNvdXJjZSAoc3JjLCBvcHQpIHtcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIHZhciBhdWRpb0NvbnRleHQgPSBvcHQuY29udGV4dCB8fCBjcmVhdGVBdWRpb0NvbnRleHQoKVxuXG4gIC8vIGEgcGFzcy10aHJvdWdoIG5vZGUgc28gdXNlciBqdXN0IG5lZWRzIHRvXG4gIC8vIGNvbm5lY3QoKSBvbmNlXG4gIHZhciBidWZmZXJOb2RlLCBidWZmZXIsIGR1cmF0aW9uXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgYXVkaW9TdGFydFRpbWUgPSBudWxsXG4gIHZhciBhdWRpb1BhdXNlVGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIHZhciBwbGF5aW5nID0gZmFsc2VcbiAgdmFyIGxvb3AgPSBvcHQubG9vcFxuXG4gIGVtaXR0ZXIucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGxheWluZykgcmV0dXJuXG4gICAgcGxheWluZyA9IHRydWVcblxuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyTm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICAgIGJ1ZmZlck5vZGUuY29ubmVjdChlbWl0dGVyLm5vZGUpXG4gICAgYnVmZmVyTm9kZS5vbmVuZGVkID0gZW5kZWRcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAvLyBNaWdodCBiZSBudWxsIHVuZGVmaW5lZCBpZiB3ZSBhcmUgc3RpbGwgbG9hZGluZ1xuICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICB9XG4gICAgaWYgKGxvb3ApIHtcbiAgICAgIGJ1ZmZlck5vZGUubG9vcCA9IHRydWVcbiAgICAgIGlmICh0eXBlb2Ygb3B0Lmxvb3BTdGFydCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcEVuZCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gICAgfVxuXG4gICAgaWYgKGR1cmF0aW9uICYmIGF1ZGlvQ3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xuICAgICAgLy8gZm9yIHdoZW4gaXQgbG9vcHMuLi5cbiAgICAgIGF1ZGlvQ3VycmVudFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lICUgZHVyYXRpb25cbiAgICB9XG4gICAgdmFyIG5leHRUaW1lID0gYXVkaW9DdXJyZW50VGltZVxuXG4gICAgYnVmZmVyTm9kZS5zdGFydCgwLCBuZXh0VGltZSlcbiAgICBhdWRpb1N0YXJ0VGltZSA9IHJpZ2h0Tm93KClcbiAgfVxuXG4gIGVtaXR0ZXIucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICAvLyBEb24ndCBsZXQgdGhlIFwiZW5kXCIgZXZlbnRcbiAgICAvLyBnZXQgdHJpZ2dlcmVkIG9uIG1hbnVhbCBwYXVzZS5cbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBudWxsXG4gICAgYnVmZmVyTm9kZS5zdG9wKDApXG4gICAgYXVkaW9QYXVzZVRpbWUgPSByaWdodE5vdygpXG4gICAgYXVkaW9DdXJyZW50VGltZSArPSAoYXVkaW9QYXVzZVRpbWUgLSBhdWRpb1N0YXJ0VGltZSkgLyAxMDAwXG4gIH1cblxuICBlbWl0dGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgZW1pdHRlci5wYXVzZSgpXG4gICAgZW5kZWQoKVxuICB9XG5cbiAgZW1pdHRlci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGRpc3Bvc2VCdWZmZXIoKVxuICAgIGJ1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGVtaXR0ZXIubm9kZSA9IG5vZGVcbiAgZW1pdHRlci5jb250ZXh0ID0gYXVkaW9Db250ZXh0XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZW1pdHRlciwge1xuICAgIGR1cmF0aW9uOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXlpbmdcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1ZmZlcjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gc2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IG9wdC52b2x1bWVcbiAgfVxuXG4gIC8vIGZpbHRlciBkb3duIHRvIGEgbGlzdCBvZiBwbGF5YWJsZSBzb3VyY2VzXG4gIHZhciBzb3VyY2VzID0gQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogWyBzcmMgXVxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgdmFyIHBsYXlhYmxlID0gc291cmNlcy5zb21lKGNhblBsYXlTcmMpXG4gIGlmIChwbGF5YWJsZSkge1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzLmZpbHRlcihjYW5QbGF5U3JjKVswXVxuICAgIC8vIFN1cHBvcnQgdGhlIHNhbWUgc291cmNlIHR5cGVzIGFzIGluXG4gICAgLy8gTWVkaWFFbGVtZW50IG1vZGUuLi5cbiAgICBpZiAodHlwZW9mIHNvdXJjZS5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlLnNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5zcmNcbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBhdCBsZWFzdCBvbmUgcGxheWFibGUgc291cmNlLlxuICAgIC8vIEZvciBub3cganVzdCBwbGF5IHRoZSBmaXJzdCxcbiAgICAvLyBpZGVhbGx5IHRoaXMgbW9kdWxlIGNvdWxkIGF0dGVtcHQgZWFjaCBvbmUuXG4gICAgc3RhcnRMb2FkKHNvdXJjZSlcbiAgfSBlbHNlIHtcbiAgICAvLyBubyBzb3VyY2VzIGNhbiBiZSBwbGF5ZWQuLi5cbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGVtaXR0ZXJcblxuICBmdW5jdGlvbiBzdGFydExvYWQgKHNyYykge1xuICAgIHhockF1ZGlvKGF1ZGlvQ29udGV4dCwgc3JjLCBmdW5jdGlvbiBhdWRpb0RlY29kZWQgKGVyciwgZGVjb2RlZCkge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICBidWZmZXIgPSBkZWNvZGVkIC8vIHN0b3JlIGZvciBsYXRlciB1c2VcbiAgICAgIGlmIChidWZmZXJOb2RlKSB7XG4gICAgICAgIC8vIGlmIHBsYXkoKSB3YXMgY2FsbGVkIGVhcmx5XG4gICAgICAgIGJ1ZmZlck5vZGUuYnVmZmVyID0gYnVmZmVyXG4gICAgICB9XG4gICAgICBkdXJhdGlvbiA9IGJ1ZmZlci5kdXJhdGlvblxuICAgICAgbm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIGVtaXR0ZXIuZW1pdCgnbG9hZCcpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9Qcm9ncmVzcyAoYW1vdW50LCB0b3RhbCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdwcm9ncmVzcycsIGFtb3VudCwgdG90YWwpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9EZWNvZGluZyAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2RlY29kaW5nJylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kZWQgKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICBhdWRpb0N1cnJlbnRUaW1lID0gMFxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcG9zZUJ1ZmZlciAoKSB7XG4gICAgaWYgKGJ1ZmZlck5vZGUpIGJ1ZmZlck5vZGUuZGlzY29ubmVjdCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGFkZE9uY2VcbmZ1bmN0aW9uIGFkZE9uY2UgKGVsZW1lbnQsIGV2ZW50LCBmbikge1xuICBmdW5jdGlvbiB0bXAgKGV2KSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxuICAgIGZuKGV2LCBlbGVtZW50KVxuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdG1wLCBmYWxzZSlcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciBjcmVhdGVBdWRpbyA9IHJlcXVpcmUoJ3NpbXBsZS1tZWRpYS1lbGVtZW50JykuYXVkaW9cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBhZGRPbmNlID0gcmVxdWlyZSgnLi9ldmVudC1hZGQtb25jZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTWVkaWFTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBhc3NpZ24oe30sIG9wdClcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvLyBEZWZhdWx0IHRvIEF1ZGlvIGluc3RlYWQgb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBUaGVyZSBpcyBub3QgbXVjaCBkaWZmZXJlbmNlIGV4Y2VwdCBpbiB0aGUgZm9sbG93aW5nOlxuICAvLyAgICB4IGluc3RhbmNlb2YgQXVkaW9cbiAgLy8gICAgeCBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnRcbiAgLy8gQW5kIGluIG15IGV4cGVyaWVuY2UgQXVkaW8gaGFzIGJldHRlciBzdXBwb3J0IG9uIHZhcmlvdXNcbiAgLy8gcGxhdGZvcm1zIGxpa2UgQ29jb29uSlMuXG4gIC8vIFBsZWFzZSBvcGVuIGFuIGlzc3VlIGlmIHRoZXJlIGlzIGEgY29uY2VybiB3aXRoIHRoaXMuXG4gIGlmICghb3B0LmVsZW1lbnQpIG9wdC5lbGVtZW50ID0gbmV3IHdpbmRvdy5BdWRpbygpXG5cbiAgdmFyIGRlc2lyZWRWb2x1bWUgPSBvcHQudm9sdW1lXG4gIGRlbGV0ZSBvcHQudm9sdW1lIC8vIG1ha2Ugc3VyZSA8YXVkaW8+IHRhZyByZWNlaXZlcyBmdWxsIHZvbHVtZVxuICB2YXIgYXVkaW8gPSBjcmVhdGVBdWRpbyhzcmMsIG9wdClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgbWVkaWFOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgbWVkaWFOb2RlLmNvbm5lY3Qobm9kZSlcblxuICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2VuZCcpXG4gIH0pXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJQTEFZXCIpXG4gIH0pXG5cbiAgdmFyIGxvb3BTdGFydCA9IG9wdC5sb29wU3RhcnRcbiAgdmFyIGxvb3BFbmQgPSBvcHQubG9vcEVuZFxuICB2YXIgaGFzTG9vcFN0YXJ0ID0gdHlwZW9mIGxvb3BTdGFydCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobG9vcFN0YXJ0KVxuICB2YXIgaGFzTG9vcEVuZCA9IHR5cGVvZiBsb29wRW5kID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wRW5kKVxuICB2YXIgaXNMb29wUmVhZHkgPSBmYWxzZVxuICBpZiAoaGFzTG9vcFN0YXJ0IHx8IGhhc0xvb3BFbmQpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgICAvLyBhdWRpbyBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0Li4uXG4gICAgICBpZiAodHlwZW9mIGF1ZGlvLmR1cmF0aW9uICE9PSAnbnVtYmVyJykgcmV0dXJuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBhdWRpby5jdXJyZW50VGltZVxuXG4gICAgICAvLyB3aGVyZSB0byBlbmQgdGhlIGJ1ZmZlclxuICAgICAgdmFyIGVuZFRpbWUgPSBoYXNMb29wRW5kID8gTWF0aC5taW4oYXVkaW8uZHVyYXRpb24sIGxvb3BFbmQpIDogYXVkaW8uZHVyYXRpb25cblxuICAgICAgaWYgKGN1cnJlbnRUaW1lID4gKGxvb3BTdGFydCB8fCAwKSkge1xuICAgICAgICBpc0xvb3BSZWFkeSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8ganVtcCBhaGVhZCB0byBsb29wIHN0YXJ0IHBvaW50XG4gICAgICBpZiAoaGFzTG9vcFN0YXJ0ICYmIGlzTG9vcFJlYWR5ICYmIGN1cnJlbnRUaW1lIDwgbG9vcFN0YXJ0KSB7XG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gbG9vcFN0YXJ0XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlJ3ZlIGhpdCB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGxvb3AgZW5kIHBvaW50LCBsZXQgbmF0aXZlIGxvb3BpbmcgdGFrZSBvdmVyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBsb29wIGVuZCBwb2ludCwganVtcCBiYWNrIHRvIHN0YXJ0IHBvaW50IG9yIHplcm9cbiAgICAgICAgaWYgKGhhc0xvb3BFbmQpIHtcbiAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGhhc0xvb3BTdGFydCA/IGxvb3BTdGFydCA6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXG4gICAgfSk7XG4gIH1cblxuICBlbWl0dGVyLmVsZW1lbnQgPSBhdWRpb1xuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLnBhdXNlID0gYXVkaW8ucGF1c2UuYmluZChhdWRpbylcbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgcmV0dXJuIGF1ZGlvLnBsYXkoKVxuICB9XG5cbiAgLy8gVGhpcyBleGlzdHMgY3VycmVudGx5IGZvciBwYXJpdHkgd2l0aCBCdWZmZXIgc291cmNlXG4gIC8vIE9wZW4gdG8gc3VnZ2VzdGlvbnMgZm9yIHdoYXQgdGhpcyBzaG91bGQgZGlzcG9zZS4uLlxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7fVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2FzUGxheWluZyA9IGVtaXR0ZXIucGxheWluZ1xuICAgIGF1ZGlvLnBhdXNlKClcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDBcbiAgICBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gICAgaWYgKHdhc1BsYXlpbmcpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICB9XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbnRUaW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGF1ZGlvLmN1cnJlbnRUaW1lXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICFhdWRpby5wYXVzZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gU2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2YgZGVzaXJlZFZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IGRlc2lyZWRWb2x1bWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFsbCBzb3VyY2VzIGFyZSB1bnBsYXlhYmxlLFxuICAvLyBpZiBzbyB3ZSBlbWl0IGFuIGVycm9yIHNpbmNlIHRoZSBicm93c2VyXG4gIC8vIG1pZ2h0IG5vdC5cbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgLy8gQXQgbGVhc3Qgb25lIHNvdXJjZSBpcyBwcm9iYWJseS9tYXliZSBwbGF5YWJsZVxuICAgIHN0YXJ0TG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gZW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gdXNlciBjYW4gY2F0Y2ggaXRcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoKSB7XG4gICAgLy8gVGhlIGZpbGUgZXJyb3JzIChsaWtlIGRlY29kaW5nIC8gNDA0cykgYXBwZWFyIG9uIDxzb3VyY2U+XG4gICAgdmFyIHNyY0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXVkaW8uY2hpbGRyZW4pXG4gICAgdmFyIHJlbWFpbmluZ1NyY0Vycm9ycyA9IHNyY0VsZW1lbnRzLmxlbmd0aFxuICAgIHZhciBoYXNFcnJvcmVkID0gZmFsc2VcbiAgICB2YXIgc291cmNlRXJyb3IgPSBmdW5jdGlvbiAoZXJyLCBlbCkge1xuICAgICAgaWYgKGhhc0Vycm9yZWQpIHJldHVyblxuICAgICAgcmVtYWluaW5nU3JjRXJyb3JzLS1cbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgbG9hZGluZyBzb3VyY2U6ICcgKyBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpKVxuICAgICAgaWYgKHJlbWFpbmluZ1NyY0Vycm9ycyA8PSAwKSB7XG4gICAgICAgIGhhc0Vycm9yZWQgPSB0cnVlXG4gICAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VyY2VFcnJvciwgZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwbGF5IGFueSBvZiB0aGUgc3VwcGxpZWQgc291cmNlcycpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9XG5cbiAgICBpZiAoYXVkaW8ucmVhZHlTdGF0ZSA+PSBhdWRpby5IQVZFX0VOT1VHSF9EQVRBKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGRvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdjYW5wbGF5JywgZG9uZSlcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdlcnJvcicsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBlbWl0dGVyLmVtaXQobmV3IEVycm9yKCdVbmtub3duIGVycm9yIHdoaWxlIGxvYWRpbmcgPGF1ZGlvPicpKVxuICAgICAgfSlcbiAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGFkZE9uY2UoZWwsICdlcnJvcicsIHNvdXJjZUVycm9yKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBPbiBtb3N0IGJyb3dzZXJzIHRoZSBsb2FkaW5nIGJlZ2luc1xuICAgIC8vIGltbWVkaWF0ZWx5LiBIb3dldmVyLCBvbiBpT1MgOS4yIFNhZmFyaSxcbiAgICAvLyB5b3UgbmVlZCB0byBjYWxsIGxvYWQoKSBmb3IgZXZlbnRzXG4gICAgLy8gdG8gYmUgdHJpZ2dlcmVkLlxuICAgIGF1ZGlvLmxvYWQoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvbWVkaWEtc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgeGhyID0gcmVxdWlyZSgneGhyJylcbnZhciB4aHJQcm9ncmVzcyA9IHJlcXVpcmUoJ3hoci1wcm9ncmVzcycpXG5cbm1vZHVsZS5leHBvcnRzID0geGhyQXVkaW9cbmZ1bmN0aW9uIHhockF1ZGlvIChhdWRpb0NvbnRleHQsIHNyYywgY2IsIHByb2dyZXNzLCBkZWNvZGluZykge1xuICB2YXIgeGhyT2JqZWN0ID0geGhyKHtcbiAgICB1cmk6IHNyYyxcbiAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcidcbiAgfSwgZnVuY3Rpb24gKGVyciwgcmVzcCwgYXJyYXlCdWYpIHtcbiAgICBpZiAoIS9eMi8udGVzdChyZXNwLnN0YXR1c0NvZGUpKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ3N0YXR1cyBjb2RlICcgKyByZXNwLnN0YXR1c0NvZGUgKyAnIHJlcXVlc3RpbmcgJyArIHNyYylcbiAgICB9XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBkZWNvZGUoYXJyYXlCdWYpXG4gIH0pXG5cbiAgeGhyUHJvZ3Jlc3MoeGhyT2JqZWN0KVxuICAgIC5vbignZGF0YScsIGZ1bmN0aW9uIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBwcm9ncmVzcyhhbW91bnQsIHRvdGFsKVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gZGVjb2RlIChhcnJheUJ1Zikge1xuICAgIGRlY29kaW5nKClcbiAgICBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmLCBmdW5jdGlvbiAoZGVjb2RlZCkge1xuICAgICAgY2IobnVsbCwgZGVjb2RlZClcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdFcnJvciBkZWNvZGluZyBhdWRpbyBkYXRhJylcbiAgICAgIGVyci50eXBlID0gJ0RFQ09ERV9BVURJT19EQVRBJ1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cbldlYk1pZGkgdjIuMC40XG5cbldlYk1pZGkuanMgaGVscHMgeW91IHRhbWUgdGhlIFdlYiBNSURJIEFQSS4gU2VuZCBhbmQgcmVjZWl2ZSBNSURJIG1lc3NhZ2VzIHdpdGggZWFzZS4gQ29udHJvbCBpbnN0cnVtZW50cyB3aXRoIHVzZXItZnJpZW5kbHkgZnVuY3Rpb25zIChwbGF5Tm90ZSwgc2VuZFBpdGNoQmVuZCwgZXRjLikuIFJlYWN0IHRvIE1JREkgaW5wdXQgd2l0aCBzaW1wbGUgZXZlbnQgbGlzdGVuZXJzIChub3Rlb24sIHBpdGNoYmVuZCwgY29udHJvbGNoYW5nZSwgZXRjLikuXG5odHRwczovL2dpdGh1Yi5jb20vY290ZWpwL3dlYm1pZGlcblxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1LTIwMTgsIEplYW4tUGhpbGlwcGUgQ8O0dMOpXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmRcbmFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG5pbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLFxuc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG5wb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVFxuTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVNcbk9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cblxuIWZ1bmN0aW9uKHNjb3BlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBXZWJNaWRpKCl7aWYoV2ViTWlkaS5wcm90b3R5cGUuX3NpbmdsZXRvbil0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIGEgc2luZ2xldG9uLCBpdCBjYW5ub3QgYmUgaW5zdGFudGlhdGVkIGRpcmVjdGx5LlwiKTtXZWJNaWRpLnByb3RvdHlwZS5fc2luZ2xldG9uPXRoaXMsdGhpcy5faW5wdXRzPVtdLHRoaXMuX291dHB1dHM9W10sdGhpcy5fdXNlckhhbmRsZXJzPXt9LHRoaXMuX3N0YXRlQ2hhbmdlUXVldWU9W10sdGhpcy5fcHJvY2Vzc2luZ1N0YXRlQ2hhbmdlPSExLHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHM9W1wiY29ubmVjdGVkXCIsXCJkaXNjb25uZWN0ZWRcIl0sdGhpcy5fbm90ZXM9W1wiQ1wiLFwiQyNcIixcIkRcIixcIkQjXCIsXCJFXCIsXCJGXCIsXCJGI1wiLFwiR1wiLFwiRyNcIixcIkFcIixcIkEjXCIsXCJCXCJdLHRoaXMuX3NlbWl0b25lcz17QzowLEQ6MixFOjQsRjo1LEc6NyxBOjksQjoxMX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7TUlESV9TWVNURU1fTUVTU0FHRVM6e3ZhbHVlOntzeXNleDoyNDAsdGltZWNvZGU6MjQxLHNvbmdwb3NpdGlvbjoyNDIsc29uZ3NlbGVjdDoyNDMsdHVuaW5ncmVxdWVzdDoyNDYsc3lzZXhlbmQ6MjQ3LGNsb2NrOjI0OCxzdGFydDoyNTAsXCJjb250aW51ZVwiOjI1MSxzdG9wOjI1MixhY3RpdmVzZW5zaW5nOjI1NCxyZXNldDoyNTUsdW5rbm93bnN5c3RlbW1lc3NhZ2U6LTF9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NIQU5ORUxfTUVTU0FHRVM6e3ZhbHVlOntub3Rlb2ZmOjgsbm90ZW9uOjksa2V5YWZ0ZXJ0b3VjaDoxMCxjb250cm9sY2hhbmdlOjExLGNoYW5uZWxtb2RlOjExLHByb2dyYW1jaGFuZ2U6MTIsY2hhbm5lbGFmdGVydG91Y2g6MTMscGl0Y2hiZW5kOjE0fSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMX0sTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUjp7dmFsdWU6e3BpdGNoYmVuZHJhbmdlOlswLDBdLGNoYW5uZWxmaW5ldHVuaW5nOlswLDFdLGNoYW5uZWxjb2Fyc2V0dW5pbmc6WzAsMl0sdHVuaW5ncHJvZ3JhbTpbMCwzXSx0dW5pbmdiYW5rOlswLDRdLG1vZHVsYXRpb25yYW5nZTpbMCw1XSxhemltdXRoYW5nbGU6WzYxLDBdLGVsZXZhdGlvbmFuZ2xlOls2MSwxXSxnYWluOls2MSwyXSxkaXN0YW5jZXJhdGlvOls2MSwzXSxtYXhpbXVtZGlzdGFuY2U6WzYxLDRdLG1heGltdW1kaXN0YW5jZWdhaW46WzYxLDVdLHJlZmVyZW5jZWRpc3RhbmNlcmF0aW86WzYxLDZdLHBhbnNwcmVhZGFuZ2xlOls2MSw3XSxyb2xsYW5nbGU6WzYxLDhdfSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMX0sTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFUzp7dmFsdWU6e2JhbmtzZWxlY3Rjb2Fyc2U6MCxtb2R1bGF0aW9ud2hlZWxjb2Fyc2U6MSxicmVhdGhjb250cm9sbGVyY29hcnNlOjIsZm9vdGNvbnRyb2xsZXJjb2Fyc2U6NCxwb3J0YW1lbnRvdGltZWNvYXJzZTo1LGRhdGFlbnRyeWNvYXJzZTo2LHZvbHVtZWNvYXJzZTo3LGJhbGFuY2Vjb2Fyc2U6OCxwYW5jb2Fyc2U6MTAsZXhwcmVzc2lvbmNvYXJzZToxMSxlZmZlY3Rjb250cm9sMWNvYXJzZToxMixlZmZlY3Rjb250cm9sMmNvYXJzZToxMyxnZW5lcmFscHVycG9zZXNsaWRlcjE6MTYsZ2VuZXJhbHB1cnBvc2VzbGlkZXIyOjE3LGdlbmVyYWxwdXJwb3Nlc2xpZGVyMzoxOCxnZW5lcmFscHVycG9zZXNsaWRlcjQ6MTksYmFua3NlbGVjdGZpbmU6MzIsbW9kdWxhdGlvbndoZWVsZmluZTozMyxicmVhdGhjb250cm9sbGVyZmluZTozNCxmb290Y29udHJvbGxlcmZpbmU6MzYscG9ydGFtZW50b3RpbWVmaW5lOjM3LGRhdGFlbnRyeWZpbmU6Mzgsdm9sdW1lZmluZTozOSxiYWxhbmNlZmluZTo0MCxwYW5maW5lOjQyLGV4cHJlc3Npb25maW5lOjQzLGVmZmVjdGNvbnRyb2wxZmluZTo0NCxlZmZlY3Rjb250cm9sMmZpbmU6NDUsaG9sZHBlZGFsOjY0LHBvcnRhbWVudG86NjUsc3VzdGVudXRvcGVkYWw6NjYsc29mdHBlZGFsOjY3LGxlZ2F0b3BlZGFsOjY4LGhvbGQycGVkYWw6Njksc291bmR2YXJpYXRpb246NzAscmVzb25hbmNlOjcxLHNvdW5kcmVsZWFzZXRpbWU6NzIsc291bmRhdHRhY2t0aW1lOjczLGJyaWdodG5lc3M6NzQsc291bmRjb250cm9sNjo3NSxzb3VuZGNvbnRyb2w3Ojc2LHNvdW5kY29udHJvbDg6Nzcsc291bmRjb250cm9sOTo3OCxzb3VuZGNvbnRyb2wxMDo3OSxnZW5lcmFscHVycG9zZWJ1dHRvbjE6ODAsZ2VuZXJhbHB1cnBvc2VidXR0b24yOjgxLGdlbmVyYWxwdXJwb3NlYnV0dG9uMzo4MixnZW5lcmFscHVycG9zZWJ1dHRvbjQ6ODMscmV2ZXJibGV2ZWw6OTEsdHJlbW9sb2xldmVsOjkyLGNob3J1c2xldmVsOjkzLGNlbGVzdGVsZXZlbDo5NCxwaGFzZXJsZXZlbDo5NSxkYXRhYnV0dG9uaW5jcmVtZW50Ojk2LGRhdGFidXR0b25kZWNyZW1lbnQ6OTcsbm9ucmVnaXN0ZXJlZHBhcmFtZXRlcmNvYXJzZTo5OCxub25yZWdpc3RlcmVkcGFyYW1ldGVyZmluZTo5OSxyZWdpc3RlcmVkcGFyYW1ldGVyY29hcnNlOjEwMCxyZWdpc3RlcmVkcGFyYW1ldGVyZmluZToxMDF9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NIQU5ORUxfTU9ERV9NRVNTQUdFUzp7dmFsdWU6e2FsbHNvdW5kb2ZmOjEyMCxyZXNldGFsbGNvbnRyb2xsZXJzOjEyMSxsb2NhbGNvbnRyb2w6MTIyLGFsbG5vdGVzb2ZmOjEyMyxvbW5pbW9kZW9mZjoxMjQsb21uaW1vZGVvbjoxMjUsbW9ub21vZGVvbjoxMjYscG9seW1vZGVvbjoxMjd9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3N1cHBvcnRlZDp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cInJlcXVlc3RNSURJQWNjZXNzXCJpbiBuYXZpZ2F0b3J9fSxlbmFibGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT10aGlzW1wiaW50ZXJmYWNlXCJdfS5iaW5kKHRoaXMpfSxpbnB1dHM6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lucHV0c30uYmluZCh0aGlzKX0sb3V0cHV0czp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb3V0cHV0c30uYmluZCh0aGlzKX0sc3lzZXhFbmFibGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiEoIXRoaXNbXCJpbnRlcmZhY2VcIl18fCF0aGlzW1wiaW50ZXJmYWNlXCJdLnN5c2V4RW5hYmxlZCl9LmJpbmQodGhpcyl9LHRpbWU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpfX19KX1mdW5jdGlvbiBJbnB1dChtaWRpSW5wdXQpe3ZhciB0aGF0PXRoaXM7dGhpcy5fdXNlckhhbmRsZXJzPXtjaGFubmVsOnt9LHN5c3RlbTp7fX0sdGhpcy5fbWlkaUlucHV0PW1pZGlJbnB1dCxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtjb25uZWN0aW9uOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuY29ubmVjdGlvbn19LGlkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuaWR9fSxtYW51ZmFjdHVyZXI6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5tYW51ZmFjdHVyZXJ9fSxuYW1lOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQubmFtZX19LHN0YXRlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuc3RhdGV9fSx0eXBlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQudHlwZX19fSksdGhpcy5faW5pdGlhbGl6ZVVzZXJIYW5kbGVycygpfWZ1bmN0aW9uIE91dHB1dChtaWRpT3V0cHV0KXt2YXIgdGhhdD10aGlzO3RoaXMuX21pZGlPdXRwdXQ9bWlkaU91dHB1dCxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtjb25uZWN0aW9uOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0LmNvbm5lY3Rpb259fSxpZDp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5pZH19LG1hbnVmYWN0dXJlcjp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5tYW51ZmFjdHVyZXJ9fSxuYW1lOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0Lm5hbWV9fSxzdGF0ZTp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5zdGF0ZX19LHR5cGU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlPdXRwdXQudHlwZX19fSl9dmFyIHdtPW5ldyBXZWJNaWRpO1dlYk1pZGkucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbihjYWxsYmFjayxzeXNleCl7cmV0dXJuIHRoaXMuZW5hYmxlZD92b2lkIDA6dGhpcy5zdXBwb3J0ZWQ/dm9pZCBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3Moe3N5c2V4OnN5c2V4fSkudGhlbihmdW5jdGlvbihtaWRpQWNjZXNzKXtmdW5jdGlvbiBvblBvcnRzT3Blbigpe3RoaXMuX3VwZGF0ZUlucHV0c0FuZE91dHB1dHMoKSx0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9dGhpcy5fb25JbnRlcmZhY2VTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGNhbGxiYWNrJiZjYWxsYmFjay5jYWxsKHRoaXMpLGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KXt0aGlzLl9vbkludGVyZmFjZVN0YXRlQ2hhbmdlKGV2ZW50KX0uYmluZCh0aGlzKSl9dmFyIGV2ZW50cz1bXSxwcm9taXNlcz1bXTt0aGlzW1wiaW50ZXJmYWNlXCJdPW1pZGlBY2Nlc3MsdGhpcy5fcmVzZXRJbnRlcmZhY2VVc2VySGFuZGxlcnMoKSx0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9ZnVuY3Rpb24oZSl7ZXZlbnRzLnB1c2goZSl9O2Zvcih2YXIgaW5wdXRzPW1pZGlBY2Nlc3MuaW5wdXRzLnZhbHVlcygpLGlucHV0PWlucHV0cy5uZXh0KCk7aW5wdXQmJiFpbnB1dC5kb25lO2lucHV0PWlucHV0cy5uZXh0KCkpcHJvbWlzZXMucHVzaChpbnB1dC52YWx1ZS5vcGVuKCkpO2Zvcih2YXIgb3V0cHV0cz1taWRpQWNjZXNzLm91dHB1dHMudmFsdWVzKCksb3V0cHV0PW91dHB1dHMubmV4dCgpO291dHB1dCYmIW91dHB1dC5kb25lO291dHB1dD1vdXRwdXRzLm5leHQoKSlwcm9taXNlcy5wdXNoKG91dHB1dC52YWx1ZS5vcGVuKCkpO1Byb21pc2U/UHJvbWlzZS5hbGwocHJvbWlzZXMpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyKXt9KS50aGVuKG9uUG9ydHNPcGVuLmJpbmQodGhpcykpOnNldFRpbWVvdXQob25Qb3J0c09wZW4uYmluZCh0aGlzKSwyMDApfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGVycil7XCJmdW5jdGlvblwiPT10eXBlb2YgY2FsbGJhY2smJmNhbGxiYWNrLmNhbGwodGhpcyxlcnIpfS5iaW5kKHRoaXMpKTp2b2lkKFwiZnVuY3Rpb25cIj09dHlwZW9mIGNhbGxiYWNrJiZjYWxsYmFjayhuZXcgRXJyb3IoXCJUaGUgV2ViIE1JREkgQVBJIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKSkpfSxXZWJNaWRpLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuc3VwcG9ydGVkKXRocm93IG5ldyBFcnJvcihcIlRoZSBXZWIgTUlESSBBUEkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpO3RoaXNbXCJpbnRlcmZhY2VcIl0mJih0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9dm9pZCAwKSx0aGlzW1wiaW50ZXJmYWNlXCJdPXZvaWQgMCx0aGlzLl9pbnB1dHM9W10sdGhpcy5fb3V0cHV0cz1bXSx0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpfSxXZWJNaWRpLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzLlwiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYoISh0aGlzLl9taWRpSW50ZXJmYWNlRXZlbnRzLmluZGV4T2YodHlwZSk+PTApKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7cmV0dXJuIHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKSx0aGlzfSxXZWJNaWRpLnByb3RvdHlwZS5oYXNMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSBjaGVja2luZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZighKHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMuaW5kZXhPZih0eXBlKT49MCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtmb3IodmFyIG89MDtvPHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5sZW5ndGg7bysrKWlmKHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXVtvXT09PWxpc3RlbmVyKXJldHVybiEwO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSByZW1vdmluZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKHZvaWQgMCE9PWxpc3RlbmVyJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYodGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cy5pbmRleE9mKHR5cGUpPj0wKWlmKGxpc3RlbmVyKWZvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLmxlbmd0aDtvKyspdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdW29dPT09bGlzdGVuZXImJnRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5zcGxpY2UobywxKTtlbHNlIHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXT1bXTtlbHNle2lmKHZvaWQgMCE9PXR5cGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTt0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpfXJldHVybiB0aGlzfSxXZWJNaWRpLnByb3RvdHlwZS50b01JRElDaGFubmVscz1mdW5jdGlvbihjaGFubmVsKXt2YXIgY2hhbm5lbHM7cmV0dXJuIGNoYW5uZWxzPVwiYWxsXCI9PT1jaGFubmVsfHx2b2lkIDA9PT1jaGFubmVsP1tcImFsbFwiXTpBcnJheS5pc0FycmF5KGNoYW5uZWwpP2NoYW5uZWw6W2NoYW5uZWxdLGNoYW5uZWxzLmluZGV4T2YoXCJhbGxcIik+LTEmJihjaGFubmVscz1bMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTZdKSxjaGFubmVscy5tYXAoZnVuY3Rpb24oY2gpe3JldHVybiBwYXJzZUludChjaCl9KS5maWx0ZXIoZnVuY3Rpb24oY2gpe3JldHVybiBjaD49MSYmMTY+PWNofSl9LFdlYk1pZGkucHJvdG90eXBlLmdldElucHV0QnlJZD1mdW5jdGlvbihpZCl7aWYoIXRoaXMuZW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIG5vdCBlbmFibGVkLlwiKTtmb3IodmFyIGk9MDtpPHRoaXMuaW5wdXRzLmxlbmd0aDtpKyspaWYodGhpcy5pbnB1dHNbaV0uaWQ9PT1pZClyZXR1cm4gdGhpcy5pbnB1dHNbaV07cmV0dXJuITF9LFdlYk1pZGkucHJvdG90eXBlLmdldE91dHB1dEJ5SWQ9ZnVuY3Rpb24oaWQpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBpcyBub3QgZW5hYmxlZC5cIik7Zm9yKHZhciBpPTA7aTx0aGlzLm91dHB1dHMubGVuZ3RoO2krKylpZih0aGlzLm91dHB1dHNbaV0uaWQ9PT1pZClyZXR1cm4gdGhpcy5vdXRwdXRzW2ldO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5nZXRJbnB1dEJ5TmFtZT1mdW5jdGlvbihuYW1lKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5pbnB1dHMubGVuZ3RoO2krKylpZih+dGhpcy5pbnB1dHNbaV0ubmFtZS5pbmRleE9mKG5hbWUpKXJldHVybiB0aGlzLmlucHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0T2N0YXZlPWZ1bmN0aW9uKG51bWJlcil7cmV0dXJuIG51bWJlciYmbnVtYmVyPj0wJiYxMjc+PW51bWJlcj9NYXRoLmZsb29yKHBhcnNlSW50KG51bWJlcikvMTItMSktMTp2b2lkIDB9LFdlYk1pZGkucHJvdG90eXBlLmdldE91dHB1dEJ5TmFtZT1mdW5jdGlvbihuYW1lKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5vdXRwdXRzLmxlbmd0aDtpKyspaWYofnRoaXMub3V0cHV0c1tpXS5uYW1lLmluZGV4T2YobmFtZSkpcmV0dXJuIHRoaXMub3V0cHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ3Vlc3NOb3RlTnVtYmVyPWZ1bmN0aW9uKGlucHV0KXt2YXIgb3V0cHV0PSExO2lmKGlucHV0JiZpbnB1dC50b0ZpeGVkJiZpbnB1dD49MCYmMTI3Pj1pbnB1dD9vdXRwdXQ9TWF0aC5yb3VuZChpbnB1dCk6cGFyc2VJbnQoaW5wdXQpPj0wJiZwYXJzZUludChpbnB1dCk8PTEyNz9vdXRwdXQ9cGFyc2VJbnQoaW5wdXQpOihcInN0cmluZ1wiPT10eXBlb2YgaW5wdXR8fGlucHV0IGluc3RhbmNlb2YgU3RyaW5nKSYmKG91dHB1dD10aGlzLm5vdGVOYW1lVG9OdW1iZXIoaW5wdXQpKSxvdXRwdXQ9PT0hMSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgbnVtYmVyIChcIitpbnB1dCtcIikuXCIpO3JldHVybiBvdXRwdXR9LFdlYk1pZGkucHJvdG90eXBlLm5vdGVOYW1lVG9OdW1iZXI9ZnVuY3Rpb24obmFtZSl7XCJzdHJpbmdcIiE9dHlwZW9mIG5hbWUmJihuYW1lPVwiXCIpO3ZhciBtYXRjaGVzPW5hbWUubWF0Y2goLyhbQ0RFRkdBQl0pKCN7MCwyfXxiezAsMn0pKC0/XFxkKykvaSk7aWYoIW1hdGNoZXMpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG5vdGUgbmFtZS5cIik7dmFyIHNlbWl0b25lcz13bS5fc2VtaXRvbmVzW21hdGNoZXNbMV0udG9VcHBlckNhc2UoKV0sb2N0YXZlPXBhcnNlSW50KG1hdGNoZXNbM10pLHJlc3VsdD0xMioob2N0YXZlKzIpK3NlbWl0b25lcztpZihtYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImJcIik+LTE/cmVzdWx0LT1tYXRjaGVzWzJdLmxlbmd0aDptYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIiNcIik+LTEmJihyZXN1bHQrPW1hdGNoZXNbMl0ubGVuZ3RoKSwwPnNlbWl0b25lc3x8LTI+b2N0YXZlfHxvY3RhdmU+OHx8MD5yZXN1bHR8fHJlc3VsdD4xMjcpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG5vdGUgbmFtZSBvciBub3RlIG91dHNpZGUgdmFsaWQgcmFuZ2UuXCIpO3JldHVybiByZXN1bHR9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVJbnB1dHNBbmRPdXRwdXRzPWZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlSW5wdXRzKCksdGhpcy5fdXBkYXRlT3V0cHV0cygpfSxXZWJNaWRpLnByb3RvdHlwZS5fdXBkYXRlSW5wdXRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTx0aGlzLl9pbnB1dHMubGVuZ3RoO2krKyl7Zm9yKHZhciByZW1vdmU9ITAsdXBkYXRlZD10aGlzW1wiaW50ZXJmYWNlXCJdLmlucHV0cy52YWx1ZXMoKSxpbnB1dD11cGRhdGVkLm5leHQoKTtpbnB1dCYmIWlucHV0LmRvbmU7aW5wdXQ9dXBkYXRlZC5uZXh0KCkpaWYodGhpcy5faW5wdXRzW2ldLl9taWRpSW5wdXQ9PT1pbnB1dC52YWx1ZSl7cmVtb3ZlPSExO2JyZWFrfXJlbW92ZSYmdGhpcy5faW5wdXRzLnNwbGljZShpLDEpfXRoaXNbXCJpbnRlcmZhY2VcIl0mJnRoaXNbXCJpbnRlcmZhY2VcIl0uaW5wdXRzLmZvckVhY2goZnVuY3Rpb24obklucHV0KXtmb3IodmFyIGFkZD0hMCxqPTA7ajx0aGlzLl9pbnB1dHMubGVuZ3RoO2orKyl0aGlzLl9pbnB1dHNbal0uX21pZGlJbnB1dD09PW5JbnB1dCYmKGFkZD0hMSk7YWRkJiZ0aGlzLl9pbnB1dHMucHVzaCh0aGlzLl9jcmVhdGVJbnB1dChuSW5wdXQpKX0uYmluZCh0aGlzKSl9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVPdXRwdXRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTx0aGlzLl9vdXRwdXRzLmxlbmd0aDtpKyspe2Zvcih2YXIgcmVtb3ZlPSEwLHVwZGF0ZWQ9dGhpc1tcImludGVyZmFjZVwiXS5vdXRwdXRzLnZhbHVlcygpLG91dHB1dD11cGRhdGVkLm5leHQoKTtvdXRwdXQmJiFvdXRwdXQuZG9uZTtvdXRwdXQ9dXBkYXRlZC5uZXh0KCkpaWYodGhpcy5fb3V0cHV0c1tpXS5fbWlkaU91dHB1dD09PW91dHB1dC52YWx1ZSl7cmVtb3ZlPSExO2JyZWFrfXJlbW92ZSYmdGhpcy5fb3V0cHV0cy5zcGxpY2UoaSwxKX10aGlzW1wiaW50ZXJmYWNlXCJdJiZ0aGlzW1wiaW50ZXJmYWNlXCJdLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbihuT3V0cHV0KXtmb3IodmFyIGFkZD0hMCxqPTA7ajx0aGlzLl9vdXRwdXRzLmxlbmd0aDtqKyspdGhpcy5fb3V0cHV0c1tqXS5fbWlkaU91dHB1dD09PW5PdXRwdXQmJihhZGQ9ITEpO2FkZCYmdGhpcy5fb3V0cHV0cy5wdXNoKHRoaXMuX2NyZWF0ZU91dHB1dChuT3V0cHV0KSl9LmJpbmQodGhpcykpfSxXZWJNaWRpLnByb3RvdHlwZS5fY3JlYXRlSW5wdXQ9ZnVuY3Rpb24obWlkaUlucHV0KXt2YXIgaW5wdXQ9bmV3IElucHV0KG1pZGlJbnB1dCk7cmV0dXJuIGlucHV0Ll9taWRpSW5wdXQub25taWRpbWVzc2FnZT1pbnB1dC5fb25NaWRpTWVzc2FnZS5iaW5kKGlucHV0KSxpbnB1dH0sV2ViTWlkaS5wcm90b3R5cGUuX2NyZWF0ZU91dHB1dD1mdW5jdGlvbihtaWRpT3V0cHV0KXt2YXIgb3V0cHV0PW5ldyBPdXRwdXQobWlkaU91dHB1dCk7cmV0dXJuIG91dHB1dC5fbWlkaU91dHB1dC5vbm1pZGltZXNzYWdlPW91dHB1dC5fb25NaWRpTWVzc2FnZS5iaW5kKG91dHB1dCksb3V0cHV0fSxXZWJNaWRpLnByb3RvdHlwZS5fb25JbnRlcmZhY2VTdGF0ZUNoYW5nZT1mdW5jdGlvbihlKXt0aGlzLl91cGRhdGVJbnB1dHNBbmRPdXRwdXRzKCk7dmFyIGV2ZW50PXt0aW1lc3RhbXA6ZS50aW1lU3RhbXAsdHlwZTplLnBvcnQuc3RhdGV9O3RoaXNbXCJpbnRlcmZhY2VcIl0mJlwiY29ubmVjdGVkXCI9PT1lLnBvcnQuc3RhdGU/XCJvdXRwdXRcIj09PWUucG9ydC50eXBlP2V2ZW50LnBvcnQ9dGhpcy5nZXRPdXRwdXRCeUlkKGUucG9ydC5pZCk6XCJpbnB1dFwiPT09ZS5wb3J0LnR5cGUmJihldmVudC5wb3J0PXRoaXMuZ2V0SW5wdXRCeUlkKGUucG9ydC5pZCkpOmV2ZW50LnBvcnQ9e2Nvbm5lY3Rpb246XCJjbG9zZWRcIixpZDplLnBvcnQuaWQsbWFudWZhY3R1cmVyOmUucG9ydC5tYW51ZmFjdHVyZXIsbmFtZTplLnBvcnQubmFtZSxzdGF0ZTplLnBvcnQuc3RhdGUsdHlwZTplLnBvcnQudHlwZX0sdGhpcy5fdXNlckhhbmRsZXJzW2UucG9ydC5zdGF0ZV0uZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXtoYW5kbGVyKGV2ZW50KX0pfSxXZWJNaWRpLnByb3RvdHlwZS5fcmVzZXRJbnRlcmZhY2VVc2VySGFuZGxlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMubGVuZ3RoO2krKyl0aGlzLl91c2VySGFuZGxlcnNbdGhpcy5fbWlkaUludGVyZmFjZUV2ZW50c1tpXV09W119LElucHV0LnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYodm9pZCAwPT09Y2hhbm5lbCYmKGNoYW5uZWw9XCJhbGxcIiksQXJyYXkuaXNBcnJheShjaGFubmVsKXx8KGNoYW5uZWw9W2NoYW5uZWxdKSxjaGFubmVsLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7aWYoXCJhbGxcIiE9PWl0ZW0mJiEoaXRlbT49MSYmMTY+PWl0ZW0pKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlICdjaGFubmVsJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIil9KSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYod20uTUlESV9TWVNURU1fTUVTU0FHRVNbdHlwZV0pdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXXx8KHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV09W10pLHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV0ucHVzaChsaXN0ZW5lcik7ZWxzZXtpZighd20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7aWYoY2hhbm5lbC5pbmRleE9mKFwiYWxsXCIpPi0xKXtjaGFubmVsPVtdO2Zvcih2YXIgaj0xOzE2Pj1qO2orKyljaGFubmVsLnB1c2goail9dGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV18fCh0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXT1bXSksY2hhbm5lbC5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaF18fCh0aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaF09W10pLHRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoXS5wdXNoKGxpc3RlbmVyKX0pfXJldHVybiB0aGlzfSxJbnB1dC5wcm90b3R5cGUub249SW5wdXQucHJvdG90eXBlLmFkZExpc3RlbmVyLElucHV0LnByb3RvdHlwZS5oYXNMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgbGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbGlzdGVuZXInIHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO2lmKHZvaWQgMD09PWNoYW5uZWwmJihjaGFubmVsPVwiYWxsXCIpLGNoYW5uZWwuY29uc3RydWN0b3IhPT1BcnJheSYmKGNoYW5uZWw9W2NoYW5uZWxdKSx3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1t0eXBlXSl7Zm9yKHZhciBvPTA7bzx0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdLmxlbmd0aDtvKyspaWYodGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXVtvXT09PWxpc3RlbmVyKXJldHVybiEwfWVsc2UgaWYod20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXtpZihjaGFubmVsLmluZGV4T2YoXCJhbGxcIik+LTEpe2NoYW5uZWw9W107Zm9yKHZhciBqPTE7MTY+PWo7aisrKWNoYW5uZWwucHVzaChqKX1yZXR1cm4gdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV0/Y2hhbm5lbC5ldmVyeShmdW5jdGlvbihjaE51bSl7dmFyIGxpc3RlbmVycz10aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaE51bV07cmV0dXJuIGxpc3RlbmVycyYmbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpPi0xfSk6ITF9cmV0dXJuITF9LElucHV0LnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYodm9pZCAwIT09bGlzdGVuZXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZih2b2lkIDA9PT1jaGFubmVsJiYoY2hhbm5lbD1cImFsbFwiKSxjaGFubmVsLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjaGFubmVsPVtjaGFubmVsXSksd20uTUlESV9TWVNURU1fTUVTU0FHRVNbdHlwZV0paWYodm9pZCAwPT09bGlzdGVuZXIpdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXT1bXTtlbHNlIGZvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5sZW5ndGg7bysrKXRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV1bb109PT1saXN0ZW5lciYmdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5zcGxpY2UobywxKTtlbHNlIGlmKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFU1t0eXBlXSl7aWYoY2hhbm5lbC5pbmRleE9mKFwiYWxsXCIpPi0xKXtjaGFubmVsPVtdO2Zvcih2YXIgaj0xOzE2Pj1qO2orKyljaGFubmVsLnB1c2goail9aWYoIXRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdKXJldHVybiB0aGlzO2NoYW5uZWwuZm9yRWFjaChmdW5jdGlvbihjaE51bSl7dmFyIGxpc3RlbmVycz10aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaE51bV07aWYobGlzdGVuZXJzKWlmKHZvaWQgMD09PWxpc3RlbmVyKXRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoTnVtXT1bXTtlbHNlIGZvcih2YXIgbD0wO2w8bGlzdGVuZXJzLmxlbmd0aDtsKyspbGlzdGVuZXJzW2xdPT09bGlzdGVuZXImJmxpc3RlbmVycy5zcGxpY2UobCwxKX0pfWVsc2V7aWYodm9pZCAwIT09dHlwZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBldmVudCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO3RoaXMuX2luaXRpYWxpemVVc2VySGFuZGxlcnMoKX1yZXR1cm4gdGhpc30sSW5wdXQucHJvdG90eXBlLl9pbml0aWFsaXplVXNlckhhbmRsZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciBwcm9wMSBpbiB3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMpd20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmhhc093blByb3BlcnR5KHByb3AxKSYmKHRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3Byb3AxXT17fSk7Zm9yKHZhciBwcm9wMiBpbiB3bS5NSURJX1NZU1RFTV9NRVNTQUdFUyl3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5oYXNPd25Qcm9wZXJ0eShwcm9wMikmJih0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3Byb3AyXT1bXSl9LElucHV0LnByb3RvdHlwZS5fb25NaWRpTWVzc2FnZT1mdW5jdGlvbihlKXtlLmRhdGFbMF08MjQwP3RoaXMuX3BhcnNlQ2hhbm5lbEV2ZW50KGUpOmUuZGF0YVswXTw9MjU1JiZ0aGlzLl9wYXJzZVN5c3RlbUV2ZW50KGUpfSxJbnB1dC5wcm90b3R5cGUuX3BhcnNlQ2hhbm5lbEV2ZW50PWZ1bmN0aW9uKGUpe3ZhciBkYXRhMSxkYXRhMixjb21tYW5kPWUuZGF0YVswXT4+NCxjaGFubmVsPSgxNSZlLmRhdGFbMF0pKzE7ZS5kYXRhLmxlbmd0aD4xJiYoZGF0YTE9ZS5kYXRhWzFdLGRhdGEyPWUuZGF0YS5sZW5ndGg+Mj9lLmRhdGFbMl06dm9pZCAwKTt2YXIgZXZlbnQ9e3RhcmdldDp0aGlzLGRhdGE6ZS5kYXRhLHRpbWVzdGFtcDplLnRpbWVTdGFtcCxjaGFubmVsOmNoYW5uZWx9O2NvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9mZnx8Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb24mJjA9PT1kYXRhMj8oZXZlbnQudHlwZT1cIm5vdGVvZmZcIixldmVudC5ub3RlPXtudW1iZXI6ZGF0YTEsbmFtZTp3bS5fbm90ZXNbZGF0YTElMTJdLG9jdGF2ZTp3bS5nZXRPY3RhdmUoZGF0YTEpfSxldmVudC52ZWxvY2l0eT1kYXRhMi8xMjcsZXZlbnQucmF3VmVsb2NpdHk9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9uPyhldmVudC50eXBlPVwibm90ZW9uXCIsZXZlbnQubm90ZT17bnVtYmVyOmRhdGExLG5hbWU6d20uX25vdGVzW2RhdGExJTEyXSxvY3RhdmU6d20uZ2V0T2N0YXZlKGRhdGExKX0sZXZlbnQudmVsb2NpdHk9ZGF0YTIvMTI3LGV2ZW50LnJhd1ZlbG9jaXR5PWRhdGEyKTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmtleWFmdGVydG91Y2g/KGV2ZW50LnR5cGU9XCJrZXlhZnRlcnRvdWNoXCIsZXZlbnQubm90ZT17bnVtYmVyOmRhdGExLG5hbWU6d20uX25vdGVzW2RhdGExJTEyXSxvY3RhdmU6d20uZ2V0T2N0YXZlKGRhdGExKX0sZXZlbnQudmFsdWU9ZGF0YTIvMTI3KTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNvbnRyb2xjaGFuZ2UmJmRhdGExPj0wJiYxMTk+PWRhdGExPyhldmVudC50eXBlPVwiY29udHJvbGNoYW5nZVwiLGV2ZW50LmNvbnRyb2xsZXI9e251bWJlcjpkYXRhMSxuYW1lOnRoaXMuZ2V0Q2NOYW1lQnlOdW1iZXIoZGF0YTEpfSxldmVudC52YWx1ZT1kYXRhMik6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsbW9kZSYmZGF0YTE+PTEyMCYmMTI3Pj1kYXRhMT8oZXZlbnQudHlwZT1cImNoYW5uZWxtb2RlXCIsZXZlbnQuY29udHJvbGxlcj17bnVtYmVyOmRhdGExLG5hbWU6dGhpcy5nZXRDaGFubmVsTW9kZUJ5TnVtYmVyKGRhdGExKX0sZXZlbnQudmFsdWU9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucHJvZ3JhbWNoYW5nZT8oZXZlbnQudHlwZT1cInByb2dyYW1jaGFuZ2VcIixldmVudC52YWx1ZT1kYXRhMSk6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsYWZ0ZXJ0b3VjaD8oZXZlbnQudHlwZT1cImNoYW5uZWxhZnRlcnRvdWNoXCIsZXZlbnQudmFsdWU9ZGF0YTEvMTI3KTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLnBpdGNoYmVuZD8oZXZlbnQudHlwZT1cInBpdGNoYmVuZFwiLGV2ZW50LnZhbHVlPSgoZGF0YTI8PDcpK2RhdGExLTgxOTIpLzgxOTIpOmV2ZW50LnR5cGU9XCJ1bmtub3duY2hhbm5lbG1lc3NhZ2VcIix0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFtldmVudC50eXBlXSYmdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbZXZlbnQudHlwZV1bY2hhbm5lbF0mJnRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW2V2ZW50LnR5cGVdW2NoYW5uZWxdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe2NhbGxiYWNrKGV2ZW50KX0pfSxJbnB1dC5wcm90b3R5cGUuZ2V0Q2NOYW1lQnlOdW1iZXI9ZnVuY3Rpb24obnVtYmVyKXtpZihudW1iZXI9cGFyc2VJbnQobnVtYmVyKSwhKG51bWJlcj49MCYmMTE5Pj1udW1iZXIpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2wgY2hhbmdlIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTE5LlwiKTtmb3IodmFyIGNjIGluIHdtLk1JRElfQ09OVFJPTF9DSEFOR0VfTUVTU0FHRVMpaWYobnVtYmVyPT09d20uTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFU1tjY10pcmV0dXJuIGNjO3JldHVybiB2b2lkIDB9LElucHV0LnByb3RvdHlwZS5nZXRDaGFubmVsTW9kZUJ5TnVtYmVyPWZ1bmN0aW9uKG51bWJlcil7aWYobnVtYmVyPXBhcnNlSW50KG51bWJlciksIShudW1iZXI+PTEyMCYmc3RhdHVzPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2wgY2hhbmdlIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMTIwIGFuZCAxMjcuXCIpO2Zvcih2YXIgY20gaW4gd20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVMpaWYobnVtYmVyPT09d20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVNbY21dKXJldHVybiBjbX0sSW5wdXQucHJvdG90eXBlLl9wYXJzZVN5c3RlbUV2ZW50PWZ1bmN0aW9uKGUpe3ZhciBjb21tYW5kPWUuZGF0YVswXSxldmVudD17dGFyZ2V0OnRoaXMsZGF0YTplLmRhdGEsdGltZXN0YW1wOmUudGltZVN0YW1wfTtjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3lzZXg/ZXZlbnQudHlwZT1cInN5c2V4XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnRpbWVjb2RlP2V2ZW50LnR5cGU9XCJ0aW1lY29kZVwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25ncG9zaXRpb24/ZXZlbnQudHlwZT1cInNvbmdwb3NpdGlvblwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25nc2VsZWN0PyhldmVudC50eXBlPVwic29uZ3NlbGVjdFwiLGV2ZW50LnNvbmc9ZS5kYXRhWzFdKTpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMudHVuaW5ncmVxdWVzdD9ldmVudC50eXBlPVwidHVuaW5ncmVxdWVzdFwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5jbG9jaz9ldmVudC50eXBlPVwiY2xvY2tcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RhcnQ/ZXZlbnQudHlwZT1cInN0YXJ0XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTW1wiY29udGludWVcIl0/ZXZlbnQudHlwZT1cImNvbnRpbnVlXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnN0b3A/ZXZlbnQudHlwZT1cInN0b3BcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuYWN0aXZlc2Vuc2luZz9ldmVudC50eXBlPVwiYWN0aXZlc2Vuc2luZ1wiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5yZXNldD9ldmVudC50eXBlPVwicmVzZXRcIjpldmVudC50eXBlPVwidW5rbm93bnN5c3RlbW1lc3NhZ2VcIix0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW2V2ZW50LnR5cGVdJiZ0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW2V2ZW50LnR5cGVdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe2NhbGxiYWNrKGV2ZW50KX0pfSxPdXRwdXQucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oc3RhdHVzLGRhdGEsdGltZXN0YW1wKXtpZighKHN0YXR1cz49MTI4JiYyNTU+PXN0YXR1cykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc3RhdHVzIGJ5dGUgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMTI4ICgweDgwKSBhbmQgMjU1ICgweEZGKS5cIik7dm9pZCAwPT09ZGF0YSYmKGRhdGE9W10pLEFycmF5LmlzQXJyYXkoZGF0YSl8fChkYXRhPVtkYXRhXSk7dmFyIG1lc3NhZ2U9W107cmV0dXJuIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXt2YXIgcGFyc2VkPXBhcnNlSW50KGl0ZW0pO2lmKCEocGFyc2VkPj0wJiYyNTU+PXBhcnNlZCkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJEYXRhIGJ5dGVzIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwICgweDAwKSBhbmQgMjU1ICgweEZGKS5cIik7bWVzc2FnZS5wdXNoKHBhcnNlZCl9KSx0aGlzLl9taWRpT3V0cHV0LnNlbmQoW3N0YXR1c10uY29uY2F0KG1lc3NhZ2UpLHBhcnNlRmxvYXQodGltZXN0YW1wKXx8MCksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3lzZXg9ZnVuY3Rpb24obWFudWZhY3R1cmVyLGRhdGEsb3B0aW9ucyl7aWYoIXdtLnN5c2V4RW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJTeXNleCBtZXNzYWdlIHN1cHBvcnQgbXVzdCBmaXJzdCBiZSBhY3RpdmF0ZWQuXCIpO3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LG1hbnVmYWN0dXJlcj1bXS5jb25jYXQobWFudWZhY3R1cmVyKSxkYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7aWYoMD5pdGVtfHxpdGVtPjEyNyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBkYXRhIGJ5dGVzIG9mIGEgc3lzZXggbWVzc2FnZSBtdXN0IGJlIGludGVnZXJzIGJldHdlZW4gMCAoMHgwMCkgYW5kIDEyNyAoMHg3RikuXCIpfSksZGF0YT1tYW51ZmFjdHVyZXIuY29uY2F0KGRhdGEsd20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3lzZXhlbmQpLHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zeXNleCxkYXRhLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRUaW1lY29kZVF1YXJ0ZXJGcmFtZT1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMudGltZWNvZGUsdmFsdWUsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFNvbmdQb3NpdGlvbj1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXt2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsb3B0aW9ucz1vcHRpb25zfHx7fTt2YXIgbXNiPXZhbHVlPj43JjEyNyxsc2I9MTI3JnZhbHVlO3JldHVybiB0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc29uZ3Bvc2l0aW9uLFttc2IsbHNiXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU29uZ1NlbGVjdD1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSksb3B0aW9ucz1vcHRpb25zfHx7fSwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzb25nIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnNvbmdzZWxlY3QsW3ZhbHVlXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kVHVuaW5nUmVxdWVzdD1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMudHVuaW5ncmVxdWVzdCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENsb2NrPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5jbG9jayx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFN0YXJ0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zdGFydCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENvbnRpbnVlPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1tcImNvbnRpbnVlXCJdLHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3RvcD1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RvcCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZEFjdGl2ZVNlbnNpbmc9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmFjdGl2ZXNlbnNpbmcsW10sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFJlc2V0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5yZXNldCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc3RvcE5vdGU9ZnVuY3Rpb24obm90ZSxjaGFubmVsLG9wdGlvbnMpe2lmKFwiYWxsXCI9PT1ub3RlKXJldHVybiB0aGlzLnNlbmRDaGFubmVsTW9kZShcImFsbG5vdGVzb2ZmXCIsMCxjaGFubmVsLG9wdGlvbnMpO3ZhciBuVmVsb2NpdHk9NjQ7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sb3B0aW9ucy52ZWxvY2l0eT1wYXJzZUZsb2F0KG9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xMjcmJihuVmVsb2NpdHk9b3B0aW9ucy52ZWxvY2l0eSk6IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xJiYoblZlbG9jaXR5PTEyNypvcHRpb25zLnZlbG9jaXR5KSx0aGlzLl9jb252ZXJ0Tm90ZVRvQXJyYXkobm90ZSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXt3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb2ZmPDw0KSsoY2gtMSksW2l0ZW0sTWF0aC5yb3VuZChuVmVsb2NpdHkpXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSl9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnBsYXlOb3RlPWZ1bmN0aW9uKG5vdGUsY2hhbm5lbCxvcHRpb25zKXt2YXIgblZlbG9jaXR5PTY0O2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sb3B0aW9ucy52ZWxvY2l0eT1wYXJzZUZsb2F0KG9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xMjcmJihuVmVsb2NpdHk9b3B0aW9ucy52ZWxvY2l0eSk6IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xJiYoblZlbG9jaXR5PTEyNypvcHRpb25zLnZlbG9jaXR5KSxvcHRpb25zLnRpbWU9dGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSksdGhpcy5fY29udmVydE5vdGVUb0FycmF5KG5vdGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7d20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9uPDw0KSsoY2gtMSksW2l0ZW0sTWF0aC5yb3VuZChuVmVsb2NpdHkpXSxvcHRpb25zLnRpbWUpfS5iaW5kKHRoaXMpKX0uYmluZCh0aGlzKSksb3B0aW9ucy5kdXJhdGlvbj1wYXJzZUZsb2F0KG9wdGlvbnMuZHVyYXRpb24pLG9wdGlvbnMuZHVyYXRpb24pe29wdGlvbnMuZHVyYXRpb248PTAmJihvcHRpb25zLmR1cmF0aW9uPTApO3ZhciBuUmVsZWFzZT02NDtvcHRpb25zLnJlbGVhc2U9cGFyc2VGbG9hdChvcHRpb25zLnJlbGVhc2UpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMucmVsZWFzZSkmJm9wdGlvbnMucmVsZWFzZT49MCYmb3B0aW9ucy5yZWxlYXNlPD0xMjcmJihuUmVsZWFzZT1vcHRpb25zLnJlbGVhc2UpOiFpc05hTihvcHRpb25zLnJlbGVhc2UpJiZvcHRpb25zLnJlbGVhc2U+PTAmJm9wdGlvbnMucmVsZWFzZTw9MSYmKG5SZWxlYXNlPTEyNypvcHRpb25zLnJlbGVhc2UpLHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoaXMuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLm5vdGVvZmY8PDQpKyhjaC0xKSxbaXRlbSxNYXRoLnJvdW5kKG5SZWxlYXNlKV0sKG9wdGlvbnMudGltZXx8d20udGltZSkrb3B0aW9ucy5kdXJhdGlvbil9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKX1yZXR1cm4gdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kS2V5QWZ0ZXJ0b3VjaD1mdW5jdGlvbihub3RlLGNoYW5uZWwscHJlc3N1cmUsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LDE+Y2hhbm5lbHx8Y2hhbm5lbD4xNil0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjaGFubmVsIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAxNi5cIik7cHJlc3N1cmU9cGFyc2VGbG9hdChwcmVzc3VyZSksKGlzTmFOKHByZXNzdXJlKXx8MD5wcmVzc3VyZXx8cHJlc3N1cmU+MSkmJihwcmVzc3VyZT0uNSk7dmFyIG5QcmVzc3VyZT1NYXRoLnJvdW5kKDEyNypwcmVzc3VyZSk7cmV0dXJuIHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmtleWFmdGVydG91Y2g8PDQpKyhjaC0xKSxbaXRlbSxuUHJlc3N1cmVdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ29udHJvbENoYW5nZT1mdW5jdGlvbihjb250cm9sbGVyLHZhbHVlLGNoYW5uZWwsb3B0aW9ucyl7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxcInN0cmluZ1wiPT10eXBlb2YgY29udHJvbGxlcil7aWYoY29udHJvbGxlcj13bS5NSURJX0NPTlRST0xfQ0hBTkdFX01FU1NBR0VTW2NvbnRyb2xsZXJdLCFjb250cm9sbGVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNvbnRyb2xsZXIgbmFtZS5cIil9ZWxzZSBpZihjb250cm9sbGVyPXBhcnNlSW50KGNvbnRyb2xsZXIpLCEoY29udHJvbGxlcj49MCYmMTE5Pj1jb250cm9sbGVyKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNvbnRyb2xsZXIgbnVtYmVycyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTE5LlwiKTtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJDb250cm9sbGVyIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jb250cm9sY2hhbmdlPDw0KSsoY2gtMSksW2NvbnRyb2xsZXIsdmFsdWVdLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0uYmluZCh0aGlzKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsY2hhbm5lbCx0aW1lKXt2YXIgdGhhdD10aGlzO2lmKHBhcmFtZXRlclswXT1wYXJzZUludChwYXJhbWV0ZXJbMF0pLCEocGFyYW1ldGVyWzBdPj0wJiZwYXJhbWV0ZXJbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDY1IHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYocGFyYW1ldGVyWzFdPXBhcnNlSW50KHBhcmFtZXRlclsxXSksIShwYXJhbWV0ZXJbMV0+PTAmJnBhcmFtZXRlclsxXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjb250cm9sNjQgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSgxMDEscGFyYW1ldGVyWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAwLHBhcmFtZXRlclsxXSxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX3NlbGVjdE5vblJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGNoYW5uZWwsdGltZSl7dmFyIHRoYXQ9dGhpcztpZihwYXJhbWV0ZXJbMF09cGFyc2VJbnQocGFyYW1ldGVyWzBdKSwhKHBhcmFtZXRlclswXT49MCYmcGFyYW1ldGVyWzBdPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2w2MyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO2lmKHBhcmFtZXRlclsxXT1wYXJzZUludChwYXJhbWV0ZXJbMV0pLCEocGFyYW1ldGVyWzFdPj0wJiZwYXJhbWV0ZXJbMV08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDYyIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTkscGFyYW1ldGVyWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTgscGFyYW1ldGVyWzFdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2V0Q3VycmVudFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24oZGF0YSxjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7aWYoZGF0YT1bXS5jb25jYXQoZGF0YSksZGF0YVswXT1wYXJzZUludChkYXRhWzBdKSwhKGRhdGFbMF0+PTAmJmRhdGFbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgbXNiIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoNixkYXRhWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksZGF0YVsxXT1wYXJzZUludChkYXRhWzFdKSxkYXRhWzFdPj0wJiZkYXRhWzFdPD0xMjcmJndtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMzgsZGF0YVsxXSxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAxLDEyNyxjaGFubmVsLHt0aW1lOnRpbWV9KSx0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDEwMCwxMjcsY2hhbm5lbCx7dGltZTp0aW1lfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGRhdGEsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sIUFycmF5LmlzQXJyYXkocGFyYW1ldGVyKSl7aWYoIXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHBhcmFtZXRlciBpcyBub3QgYXZhaWxhYmxlLlwiKTtwYXJhbWV0ZXI9d20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdfXJldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0Ll9zZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMudGltZSksdGhhdC5fc2V0Q3VycmVudFJlZ2lzdGVyZWRQYXJhbWV0ZXIoZGF0YSxjaGFubmVsLG9wdGlvbnMudGltZSksdGhhdC5fZGVzZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKGNoYW5uZWwsb3B0aW9ucy50aW1lKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0Tm9uUmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsZGF0YSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhKHBhcmFtZXRlclswXT49MCYmcGFyYW1ldGVyWzBdPD0xMjcmJnBhcmFtZXRlclsxXT49MCYmcGFyYW1ldGVyWzFdPD0xMjcpKXRocm93IG5ldyBFcnJvcihcIlBvc2l0aW9uIDAgYW5kIDEgb2YgdGhlIDItcG9zaXRpb24gcGFyYW1ldGVyIGFycmF5IG11c3QgYm90aCBiZSBiZXR3ZWVuIDAgYW5kIDEyNy5cIik7cmV0dXJuIGRhdGE9W10uY29uY2F0KGRhdGEpLHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdE5vblJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9zZXRDdXJyZW50UmVnaXN0ZXJlZFBhcmFtZXRlcihkYXRhLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5pbmNyZW1lbnRSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhQXJyYXkuaXNBcnJheShwYXJhbWV0ZXIpKXtpZighd20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdKXRocm93IG5ldyBFcnJvcihcIlRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIGlzIG5vdCBhdmFpbGFibGUuXCIpO3BhcmFtZXRlcj13bS5NSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSW3BhcmFtZXRlcl19cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDk2LDAsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5kZWNyZW1lbnRSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMpe2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sIUFycmF5LmlzQXJyYXkocGFyYW1ldGVyKSl7aWYoIXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgaXMgbm90IGF2YWlsYWJsZS5cIik7cGFyYW1ldGVyPXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXX1yZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihwYXJhbWV0ZXIsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoaXMuc2VuZENvbnRyb2xDaGFuZ2UoOTcsMCxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pLHRoaXMuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihjaGFubmVsLG9wdGlvbnMudGltZSl9LmJpbmQodGhpcykpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0UGl0Y2hCZW5kUmFuZ2U9ZnVuY3Rpb24oc2VtaXRvbmVzLGNlbnRzLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHNlbWl0b25lcz1wYXJzZUludChzZW1pdG9uZXMpfHwwLCEoc2VtaXRvbmVzPj0wJiYxMjc+PXNlbWl0b25lcykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc2VtaXRvbmVzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYoY2VudHM9cGFyc2VJbnQoY2VudHMpfHwwLCEoY2VudHM+PTAmJjEyNz49Y2VudHMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNlbnRzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcInBpdGNoYmVuZHJhbmdlXCIsW3NlbWl0b25lcyxjZW50c10sY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0TW9kdWxhdGlvblJhbmdlPWZ1bmN0aW9uKHNlbWl0b25lcyxjZW50cyxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxzZW1pdG9uZXM9cGFyc2VJbnQoc2VtaXRvbmVzKXx8MCwhKHNlbWl0b25lcz49MCYmMTI3Pj1zZW1pdG9uZXMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHNlbWl0b25lcyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO2lmKGNlbnRzPXBhcnNlSW50KGNlbnRzKXx8MCwhKGNlbnRzPj0wJiYxMjc+PWNlbnRzKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjZW50cyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJtb2R1bGF0aW9ucmFuZ2VcIixbc2VtaXRvbmVzLGNlbnRzXSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRNYXN0ZXJUdW5pbmc9ZnVuY3Rpb24odmFsdWUsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sdmFsdWU9cGFyc2VGbG9hdCh2YWx1ZSl8fDAsLTY1Pj12YWx1ZXx8dmFsdWU+PTY0KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBkZWNpbWFsIG51bWJlciBsYXJnZXIgdGhhbiAtNjUgYW5kIHNtYWxsZXIgdGhhbiA2NC5cIik7dmFyIGNvYXJzZT1wYXJzZUludCh2YWx1ZSkrNjQsZmluZT12YWx1ZS1wYXJzZUludCh2YWx1ZSk7ZmluZT1NYXRoLnJvdW5kKChmaW5lKzEpLzIqMTYzODMpO3ZhciBtc2I9ZmluZT4+NyYxMjcsbHNiPTEyNyZmaW5lO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJjaGFubmVsY29hcnNldHVuaW5nXCIsY29hcnNlLGNoYW5uZWwse3RpbWU6b3B0aW9ucy50aW1lfSksdGhhdC5zZXRSZWdpc3RlcmVkUGFyYW1ldGVyKFwiY2hhbm5lbGZpbmV0dW5pbmdcIixbbXNiLGxzYl0sY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0VHVuaW5nUHJvZ3JhbT1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUludCh2YWx1ZSksISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgcHJvZ3JhbSB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJ0dW5pbmdwcm9ncmFtXCIsdmFsdWUsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0VHVuaW5nQmFuaz1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgYmFuayB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJ0dW5pbmdiYW5rXCIsdmFsdWUsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENoYW5uZWxNb2RlPWZ1bmN0aW9uKGNvbW1hbmQsdmFsdWUsY2hhbm5lbCxvcHRpb25zKXtpZihvcHRpb25zPW9wdGlvbnN8fHt9LFwic3RyaW5nXCI9PXR5cGVvZiBjb21tYW5kKXtpZihjb21tYW5kPXdtLk1JRElfQ0hBTk5FTF9NT0RFX01FU1NBR0VTW2NvbW1hbmRdLCFjb21tYW5kKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNoYW5uZWwgbW9kZSBtZXNzYWdlIG5hbWUuXCIpfWVsc2UgaWYoY29tbWFuZD1wYXJzZUludChjb21tYW5kKSwhKGNvbW1hbmQ+PTEyMCYmMTI3Pj1jb21tYW5kKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNoYW5uZWwgbW9kZSBudW1lcmljYWwgaWRlbnRpZmllcnMgbXVzdCBiZSBiZXR3ZWVuIDEyMCBhbmQgMTI3LlwiKTtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsMD52YWx1ZXx8dmFsdWU+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVmFsdWUgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMuY2hhbm5lbG1vZGU8PDQpKyhjaC0xKSxbY29tbWFuZCx2YWx1ZV0sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRQcm9ncmFtQ2hhbmdlPWZ1bmN0aW9uKHByb2dyYW0sY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30scHJvZ3JhbT1wYXJzZUludChwcm9ncmFtKSxcbmlzTmFOKHByb2dyYW0pfHwwPnByb2dyYW18fHByb2dyYW0+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiUHJvZ3JhbSBudW1iZXJzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5wcm9ncmFtY2hhbmdlPDw0KSsoY2gtMSksW3Byb2dyYW1dLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENoYW5uZWxBZnRlcnRvdWNoPWZ1bmN0aW9uKHByZXNzdXJlLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztvcHRpb25zPW9wdGlvbnN8fHt9LHByZXNzdXJlPXBhcnNlRmxvYXQocHJlc3N1cmUpLChpc05hTihwcmVzc3VyZSl8fDA+cHJlc3N1cmV8fHByZXNzdXJlPjEpJiYocHJlc3N1cmU9LjUpO3ZhciBuUHJlc3N1cmU9TWF0aC5yb3VuZCgxMjcqcHJlc3N1cmUpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsYWZ0ZXJ0b3VjaDw8NCkrKGNoLTEpLFtuUHJlc3N1cmVdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFBpdGNoQmVuZD1mdW5jdGlvbihiZW5kLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LGJlbmQ9cGFyc2VGbG9hdChiZW5kKSxpc05hTihiZW5kKXx8LTE+YmVuZHx8YmVuZD4xKXRocm93IG5ldyBSYW5nZUVycm9yKFwiUGl0Y2ggYmVuZCB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gLTEgYW5kIDEuXCIpO3ZhciBuTGV2ZWw9TWF0aC5yb3VuZCgoYmVuZCsxKS8yKjE2MzgzKSxtc2I9bkxldmVsPj43JjEyNyxsc2I9MTI3Jm5MZXZlbDtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucGl0Y2hiZW5kPDw0KSsoY2gtMSksW2xzYixtc2JdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX3BhcnNlVGltZVBhcmFtZXRlcj1mdW5jdGlvbih0aW1lKXt2YXIgcGFyc2VkLHZhbHVlO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0aW1lJiZcIitcIj09PXRpbWUuc3Vic3RyaW5nKDAsMSk/KHBhcnNlZD1wYXJzZUZsb2F0KHRpbWUpLHBhcnNlZCYmcGFyc2VkPjAmJih2YWx1ZT13bS50aW1lK3BhcnNlZCkpOihwYXJzZWQ9cGFyc2VGbG9hdCh0aW1lKSxwYXJzZWQ+d20udGltZSYmKHZhbHVlPXBhcnNlZCkpLHZhbHVlfSxPdXRwdXQucHJvdG90eXBlLl9jb252ZXJ0Tm90ZVRvQXJyYXk9ZnVuY3Rpb24obm90ZSl7dmFyIG5vdGVzPVtdO3JldHVybiBBcnJheS5pc0FycmF5KG5vdGUpfHwobm90ZT1bbm90ZV0pLG5vdGUuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtub3Rlcy5wdXNoKHdtLmd1ZXNzTm90ZU51bWJlcihpdGVtKSl9KSxub3Rlc30sT3V0cHV0LnByb3RvdHlwZS5fb25NaWRpTWVzc2FnZT1mdW5jdGlvbihlKXt9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmXCJvYmplY3RcIj09dHlwZW9mIGRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHdtfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9d206c2NvcGUuV2ViTWlkaXx8KHNjb3BlLldlYk1pZGk9d20pfSh0aGlzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VibWlkaS93ZWJtaWRpLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG5cXG52YXJ5aW5nIHZlYzMgdlZpZXdQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxuXFxuI2lmbmRlZiBGTEFUX1NIQURFRFxcblxcbiAgICB2YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXG5cXG4jZW5kaWZcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDx1dl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8dXYyX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxkaXNwbGFjZW1lbnRtYXBfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGVudm1hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y29sb3JfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8bW9ycGh0YXJnZXRfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHNraW5uaW5nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3BhcnNfdmVydGV4PlxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgI2luY2x1ZGUgPHV2X3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHV2Ml92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxjb2xvcl92ZXJ0ZXg+XFxuXFxuICAgICNpbmNsdWRlIDxiZWdpbm5vcm1hbF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxtb3JwaG5vcm1hbF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxza2luYmFzZV92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxza2lubm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGRlZmF1bHRub3JtYWxfdmVydGV4PlxcblxcbiAgICAjaW5jbHVkZSA8YmVnaW5fdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8cHJvamVjdF92ZXJ0ZXg+XFxuXFxuICAgIHZWaWV3UG9zaXRpb24gPSAtIG12UG9zaXRpb24ueHl6O1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgI2luY2x1ZGUgPHdvcmxkcG9zX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGVudm1hcF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxmb2dfdmVydGV4Plxcblxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIFBIT05HXFxuI2RlZmluZSBNX1BJIDMuMTRcXG5cXG51bmlmb3JtIHZlYzMgZGlmZnVzZTtcXG51bmlmb3JtIHZlYzMgZW1pc3NpdmU7XFxudW5pZm9ybSB2ZWMzIHNwZWN1bGFyO1xcbnVuaWZvcm0gZmxvYXQgc2hpbmluZXNzO1xcbnVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcXG5cXG51bmlmb3JtIGZsb2F0IHVUaW1lO1xcbnVuaWZvcm0gdmVjMyB1U3RyaXBlT3JpZW50YXRpb247XFxudW5pZm9ybSBmbG9hdCB1SW52ZXJ0O1xcbnVuaWZvcm0gdmVjMyB1U3F1YXJlO1xcbnVuaWZvcm0gZmxvYXQgdVdpZHRoO1xcbnVuaWZvcm0gZmxvYXQgdUhlaWdodDtcXG51bmlmb3JtIGZsb2F0IHVMZW5ndGg7XFxudW5pZm9ybSBmbG9hdCB1UHJvZ3Jlc3M7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDxwYWNraW5nPlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1dl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1djJfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8Zm9nX3BhcnNfZnJhZ21lbnQ+XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IGRpZmZ1c2VDb2xvciA9IHZlYzQoIGRpZmZ1c2UsIG9wYWNpdHkgKTtcXG4gICAgLy8gUmVmbGVjdGVkTGlnaHQgcmVmbGVjdGVkTGlnaHQgPSBSZWZsZWN0ZWRMaWdodCggdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICkgKTtcXG4gICAgLy8gdmVjMyB0b3RhbEVtaXNzaXZlUmFkaWFuY2UgPSBlbWlzc2l2ZTtcXG5cXG4gICAgdmVjNCBjb2xvciA9IGRpZmZ1c2VDb2xvcjtcXG5cXG4gICAgZmxvYXQgYWJzWCA9IGZsb29yKC1jb3MoKHVUaW1lICogMC4xICsgTV9QSSAqIHVTcXVhcmUueCAqICggKCB2VXYueCArIHVQcm9ncmVzcyArIDAuMTUgKSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcbiAgICBmbG9hdCBhYnNZID0gZmxvb3IoLWNvcygoTV9QSSAqIHVTcXVhcmUueSAqICggdlV2LnkgKiAyLiAtIDEuICkgKiAwLjUpKSkgKyAxLjtcXG5cXG4gICAgaWYgKCBhYnNYID4gMC4gfHwgYWJzWSA+IDAuICkge1xcbiAgICAgICBjb2xvciA9IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgY29sb3IgPSB2ZWM0KHZlYzMoMC4wICsgdUludmVydCksIGRpZmZ1c2VDb2xvci5hKTsgIFxcbiAgICB9XFxuXFxuICAgIC8vIGNvbG9yID0gdlV2LnggPiAxLiAtIHVQcm9ncmVzcyAgPyB2ZWM0KHZlYzMoMS4wIC0gdUludmVydCksIGRpZmZ1c2VDb2xvci5hKSA6IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICBcXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxuXFxuICAgICNpbmNsdWRlIDxmb2dfZnJhZ21lbnQ+XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRCbGVuZDtcXG51bmlmb3JtIGZsb2F0IG9wYWNpdHk7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgYmFzZSA9IHRleHR1cmUyRCh0SW5wdXQsIHZVdik7XFxuICAgIHZlYzQgYmxlbmQgPSB0ZXh0dXJlMkQodEJsZW5kLCB2VXYpO1xcblxcbiAgICB2ZWM0IGNvbG9yID0gKDEuMCAtICgoMS4wIC0gYmFzZSkgKiAoMS4wIC0gYmxlbmQpKSk7XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvciAqIG9wYWNpdHkgKyBiYXNlICogKCAxLiAtIG9wYWNpdHkgKTs7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9hZGRpdGl2ZS5mc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZVdiA9IHV2O1xcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2Jhc2ljLnZzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgIHZlYzQgc3VtID0gdmVjNCgwKTtcXG4gICB2ZWMyIHRleGNvb3JkID0gdlV2O1xcbiAgXFxuICAgZm9yKCBpbnQgaT0gLTQgO2kgPCA0OyBpKyspXFxuICAge1xcbiAgICAgICAgZm9yICggaW50IGogPSAtMzsgaiA8IDM7IGorKylcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBzdW0gKz0gdGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQgKyB2ZWMyKGosIGkpKjAuMDA0KSAqIDAuMjU7XFxuICAgICAgICB9XFxuICAgfVxcbiAgICAgICBpZiAodGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQpLnIgPCAwLjMpXFxuICAgIHtcXG4gICAgICAgZ2xfRnJhZ0NvbG9yID0gc3VtKnN1bSowLjAxMiArIHRleHR1cmUyRCh0SW5wdXQsIHRleGNvb3JkKTtcXG4gICAgfVxcbiAgICBlbHNlXFxuICAgIHtcXG4gICAgICAgIGlmICh0ZXh0dXJlMkQodElucHV0LCB0ZXhjb29yZCkuciA8IDAuNSlcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSBzdW0qc3VtKjAuMDA5ICsgdGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZVxcbiAgICAgICAge1xcbiAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHN1bSpzdW0qMC4wMDc1ICsgdGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbS5mc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gZmxvYXQga2VybmVsO1xcbnVuaWZvcm0gZmxvYXQgc2NhbGU7XFxudW5pZm9ybSBmbG9hdCB0aHJlc2g7XFxuXFxudm9pZCBtYWluKClcXG57XFxuICAgIHZlYzQgc3VtID0gdmVjNCgwKTtcXG5cXG4gICAgLy8gbWVzcyBvZiBmb3IgbG9vcHMgZHVlIHRvIGdwdSBjb21waWxlci9oYXJkd2FyZSBsaW1pdGF0aW9uc1xcbiAgICBpbnQgaj0tMjtcXG4gICAgZm9yKCBpbnQgaT0tMjsgaTw9MjsgaSsrKSBzdW0rPXRleHR1cmUyRCh0SW5wdXQsdlV2K3ZlYzIoaSxqKSprZXJuZWwpO1xcbiAgICBqPS0xO1xcbiAgICBmb3IoIGludCBpPS0yOyBpPD0yOyBpKyspIHN1bSs9dGV4dHVyZTJEKHRJbnB1dCx2VXYrdmVjMihpLGopKmtlcm5lbCk7XFxuICAgIGo9MDtcXG4gICAgZm9yKCBpbnQgaT0tMjsgaTw9MjsgaSsrKSBzdW0rPXRleHR1cmUyRCh0SW5wdXQsdlV2K3ZlYzIoaSxqKSprZXJuZWwpO1xcbiAgICBqPTE7XFxuICAgIGZvciggaW50IGk9LTI7IGk8PTI7IGkrKykgc3VtKz10ZXh0dXJlMkQodElucHV0LHZVdit2ZWMyKGksaikqa2VybmVsKTtcXG4gICAgaj0yO1xcbiAgICBmb3IoIGludCBpPS0yOyBpPD0yOyBpKyspIHN1bSs9dGV4dHVyZTJEKHRJbnB1dCx2VXYrdmVjMihpLGopKmtlcm5lbCk7XFxuICAgIHN1bS89MjUuMDtcXG5cXG4gICAgdmVjNCBzPXRleHR1cmUyRCh0SW5wdXQsIHZVdik7XFxuICAgIGdsX0ZyYWdDb2xvcj1zO1xcblxcbiAgICAvLyB1c2UgdGhlIGJsdXJyZWQgY29sb3VyIGlmIGl0J3MgYnJpZ2h0IGVub3VnaFxcbiAgICAvLyBpZiAobGVuZ3RoKHN1bSk+dGhyZXNoKVxcbiAgICAvLyB7XFxuICAgICAgICBnbF9GcmFnQ29sb3IgKz1zdW0qc2NhbGU7XFxuICAgIC8vIH1cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2Jsb29tMi5mc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gdmVjMiBpbmNyZW1lbnQ7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICAgIHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuXFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiAtIGluY3JlbWVudCAqIDQuMCkpICogMC4wNTE7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiAtIGluY3JlbWVudCAqIDMuMCkpICogMC4wOTE4O1xcbiAgICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgLSBpbmNyZW1lbnQgKiAyLjApKSAqIDAuMTIyNDU7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiAtIGluY3JlbWVudCAqIDEuMCkpICogMC4xNTMxO1xcbiAgICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgKyBpbmNyZW1lbnQgKiAwLjApKSAqIDAuMTYzMztcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2ICsgaW5jcmVtZW50ICogMS4wKSkgKiAwLjE1MzE7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiArIGluY3JlbWVudCAqIDIuMCkpICogMC4xMjI0NTtcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2ICsgaW5jcmVtZW50ICogMy4wKSkgKiAwLjA5MTg7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiArIGluY3JlbWVudCAqIDQuMCkpICogMC4wNTE7XFxuXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbXRlc3QuZnNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG51bmlmb3JtIHZlYzIgZGVsdGE7XFxuXFxuY29uc3QgZmxvYXQgc2FtcGxlcyA9IDMwLjtcXG5cXG5mbG9hdCByYW5kb20odmVjMyBzY2FsZSxmbG9hdCBzZWVkKXtyZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6K3NlZWQsc2NhbGUpKSo0Mzc1OC41NDUzK3NlZWQpO31cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgIHZlYzQgY29sb3I9dmVjNCgwLjApO1xcbiAgICBmbG9hdCB0b3RhbD0wLjA7XFxuICAgIGZsb2F0IG9mZnNldD1yYW5kb20odmVjMygxMi45ODk4LDc4LjIzMywxNTEuNzE4MiksMC4wKTtcXG4gICAgZm9yKGZsb2F0IHQ9LXNhbXBsZXM7dDw9c2FtcGxlczt0Kyspe1xcbiAgICAgICAgZmxvYXQgcGVyY2VudD0odCtvZmZzZXQtMC41KS9zYW1wbGVzO1xcbiAgICAgICAgZmxvYXQgd2VpZ2h0PTEuMC1hYnMocGVyY2VudCk7XFxuICAgICAgICB2ZWM0IHNhbXBsZT10ZXh0dXJlMkQodElucHV0LHZVditkZWx0YSpwZXJjZW50KTtcXG4gICAgICAgIHNhbXBsZS5yZ2IqPXNhbXBsZS5hO1xcbiAgICAgICAgY29sb3IrPXNhbXBsZSp3ZWlnaHQ7XFxuICAgICAgICB0b3RhbCs9d2VpZ2h0O1xcbiAgICB9XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3I9Y29sb3IvdG90YWw7XFxuICAgIGdsX0ZyYWdDb2xvci5yZ2IvPWdsX0ZyYWdDb2xvci5hKzAuMDAwMDE7XFxuICAgIFxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYm94LWJsdXIuZnNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2KTtcXG5cXG5cXHQvLyBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZlYzModlV2LnkpLCAxLik7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9jb3B5LmZzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcblxcbnVuaWZvcm0gZmxvYXQgdGltZTtcXG5cXG51bmlmb3JtIGZsb2F0IG5vaXNlQW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgbm9pc2VTcGVlZDtcXG51bmlmb3JtIGZsb2F0IHZpZ25ldHRlRmFsbG9mO1xcbnVuaWZvcm0gZmxvYXQgdmlnbmV0dGVBbW91bnQ7XFxudW5pZm9ybSB2ZWMyIHNwbGl0RGVsdGE7XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCB6b29tQmx1clN0cmVuZ3RoO1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuZmxvYXQgcmFuZG9tKHZlYzIgbiwgZmxvYXQgb2Zmc2V0ICl7XFxuXFx0Ly9yZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6K3NlZWQsc2NhbGUpKSo0Mzc1OC41NDUzKTtcXG5cXHRyZXR1cm4gLjUgLSBmcmFjdChzaW4oZG90KG4ueHkgKyB2ZWMyKCBvZmZzZXQsIDAuICksIHZlYzIoMTIuOTg5OCwgNzguMjMzKSkpKiA0Mzc1OC41NDUzKTtcXG59XFxuXFxuZmxvYXQgcmFuZG9tQmx1cih2ZWMzIHNjYWxlLGZsb2F0IHNlZWQpe3JldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXorc2VlZCxzY2FsZSkpKjQzNzU4LjU0NTMrc2VlZCk7fVxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG5cXHQvLyB6b29tIGJsdXJcXG5cXHR2ZWMyIGNlbnRlciA9IHZlYzIoMC41LCAwLjUpO1xcblxcdHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuXFx0ZmxvYXQgdG90YWwgPSAwLjA7XFxuXFx0dmVjMiB0b0NlbnRlciA9IGNlbnRlci12VXYqcmVzb2x1dGlvbjtcXG5cXHRmbG9hdCBvZmZzZXQgPSByYW5kb21CbHVyKHZlYzMoMTIuOTg5OCw3OC4yMzMsMTUxLjcxODIpLDAuMCk7XFxuXFx0Zm9yKGZsb2F0IHQgPSAwLjA7IHQgPD0gNDAuMDsgdCsrKXtcXG5cXHRcXHRmbG9hdCBwZXJjZW50ID0gKHQrb2Zmc2V0KS80MC4wO1xcblxcdFxcdGZsb2F0IHdlaWdodCA9IDQuMCoocGVyY2VudC1wZXJjZW50KnBlcmNlbnQpO1xcblxcdFxcdHZlYzQgc2FtcGxlID0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2ICsgdG9DZW50ZXIgKiBwZXJjZW50ICogem9vbUJsdXJTdHJlbmd0aCAvIHJlc29sdXRpb24pO1xcblxcdFxcdHNhbXBsZS5yZ2IqPXNhbXBsZS5hO1xcblxcdFxcdGNvbG9yKz1zYW1wbGUqd2VpZ2h0O1xcblxcdFxcdHRvdGFsKz13ZWlnaHQ7XFxuXFx0fVxcblxcblxcdHZlYzQgem9vbUJsdXIgPSBjb2xvciAvIHRvdGFsO1xcblxcdHpvb21CbHVyLnJnYiAvPSB6b29tQmx1ci5hICsgMC4wMDAwMTtcXG5cXG5cXHQvLyBjb2xvciA9IHpvb21CbHVyO1xcblxcbiAgICAvLyByZ2Igc3BsaXRcXG4gICAgdmVjMiBkaXIgPSB2VXYgLSB2ZWMyKCAuNSApO1xcblxcdGZsb2F0IGQgPSAuNyAqIGxlbmd0aCggZGlyICk7XFxuXFx0bm9ybWFsaXplKCBkaXIgKTtcXG5cXHR2ZWMyIHZhbHVlID0gZCAqIGRpciAqIHNwbGl0RGVsdGE7XFxuXFx0dmVjNCBjMSA9IHRleHR1cmUyRCggdElucHV0LCB2VXYgLSB2YWx1ZSAvIHJlc29sdXRpb24ueCApO1xcblxcdHZlYzQgYzIgPSB0ZXh0dXJlMkQoIHRJbnB1dCwgdlV2ICk7XFxuXFx0dmVjNCBjMyA9IHRleHR1cmUyRCggdElucHV0LCB2VXYgKyB2YWx1ZSAvIHJlc29sdXRpb24ueSApO1xcblxcdGNvbG9yID0gdmVjNCggYzEuciwgYzIuZywgYzMuYiwgYzEuYSArIGMyLmEgKyBjMy5iICk7XFxuXFxuXFxuXFxuICAgIC8vdmlnbmV0dGVcXG4gICAgZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHZVdiwgdmVjMigwLjUsIDAuNSkpO1xcbiAgICBjb2xvci5yZ2IgKj0gc21vb3Roc3RlcCgwLjgsIHZpZ25ldHRlRmFsbG9mICogMC43OTksIGRpc3QgKiAodmlnbmV0dGVBbW91bnQgKyB2aWduZXR0ZUZhbGxvZikpO1xcblxcbiAgICAvL25vaXNlXFxuICAgIGNvbG9yICs9IHZlYzQoIHZlYzMoIG5vaXNlQW1vdW50ICogcmFuZG9tKCB2VXYsIC4wMDAwMSAqIG5vaXNlU3BlZWQgKiB0aW1lICkgKSwgMS4gKTtcXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9jdXN0b20uZnNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvZG9mLmZzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSB2ZWMyIGRpcmVjdGlvbjtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuICAgIHZlYzIgb2ZmMSA9IHZlYzIoMS4zODQ2MTUzODQ2KSAqIGRpcmVjdGlvbjtcXG4gICAgdmVjMiBvZmYyID0gdmVjMigzLjIzMDc2OTIzMDgpICogZGlyZWN0aW9uO1xcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCB2VXYpICogMC4yMjcwMjcwMjcwO1xcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCB2VXYgKyAob2ZmMSAvIHJlc29sdXRpb24pKSAqIDAuMzE2MjE2MjE2MjtcXG4gICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2IC0gKG9mZjEgLyByZXNvbHV0aW9uKSkgKiAwLjMxNjIxNjIxNjI7XFxuICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsIHZVdiArIChvZmYyIC8gcmVzb2x1dGlvbikpICogMC4wNzAyNzAyNzAzO1xcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCB2VXYgLSAob2ZmMiAvIHJlc29sdXRpb24pKSAqIDAuMDcwMjcwMjcwMztcXG4gICAgXFxuICAgIGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvZ2F1c3NpYW4uZnNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSBmbG9hdCBhbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzcGVlZDtcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG5mbG9hdCByYW5kb20odmVjMiBuLCBmbG9hdCBvZmZzZXQgKXtcXG5cXHQvL3JldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXorc2VlZCxzY2FsZSkpKjQzNzU4LjU0NTMpO1xcblxcdHJldHVybiAuNSAtIGZyYWN0KHNpbihkb3Qobi54eSArIHZlYzIoIG9mZnNldCwgMC4gKSwgdmVjMigxMi45ODk4LCA3OC4yMzMpKSkqIDQzNzU4LjU0NTMpO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuXFx0dmVjNCBjb2xvciA9IHRleHR1cmUyRCh0SW5wdXQsIHZVdik7XFxuXFxuXFx0Ly9jb2xvciArPSBhbW91bnQgKiAoIC41IC0gcmFuZG9tKCB2ZWMzKCAxLiApLCBsZW5ndGgoIGdsX0ZyYWdDb29yZCApICsgc3BlZWQgKiAuMDEgKiB0aW1lICkgKTtcXG5cXHRjb2xvciArPSB2ZWM0KCB2ZWMzKCBhbW91bnQgKiByYW5kb20oIHZVdiwgLjAwMDAxICogc3BlZWQgKiB0aW1lICkgKSwgMS4gKTtcXG5cXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL25vaXNlLmZzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLy8gdmFyeWluZyB2ZWMyIHZVdjtcXG4vLyB1bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxuXFxuLy8gY29uc3QgZmxvYXQgYmx1cl9zdGFydCA9IDEuMDtcXG5cXG4vLyB2ZWMyIG9mZnNldCA9IHZlYzIoMC4wMDEsIDAuMDAxKTtcXG5cXG4vLyBmbG9hdCBmYWN0b3IgPSAxLjtcXG4vLyBmbG9hdCBzdHJlbmd0aCA9IDEwLjtcXG5cXG4vLyBjb25zdCBpbnQgb2NjdXJlbmNlcyA9IDEwMDtcXG4vLyBmbG9hdCB6b29tID0gMS47XFxuXFxuLy8gdm9pZCBtYWluKClcXG4vLyB7XFxuLy8gICAgIGZsb2F0IHNjYWxlID0gYmx1cl9zdGFydCAqIHpvb207XFxuLy8gICAgIHZlYzQgYyA9IHZlYzQoMCk7XFxuICAgIFxcbi8vICAgICBmb3IoIGludCBpID0gMDsgaSA8IG9jY3VyZW5jZXM7ICsraSApIHtcXG4vLyAgICAgICBjICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgKiBzY2FsZSkgKyBvZmZzZXQpO1xcbi8vICAgICAgIHNjYWxlICs9IHN0cmVuZ3RoIC8gZmxvYXQob2NjdXJlbmNlcyk7XFxuLy8gICAgIH1cXG5cXG4vLyAgICAgZ2xfRnJhZ0NvbG9yID0gYyAqIGZhY3RvcjtcXG4vLyB9XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSB2ZWMyIGxpZ2h0UG9zaXRpb247XFxudW5pZm9ybSBmbG9hdCBleHBvc3VyZTtcXG51bmlmb3JtIGZsb2F0IGRlY2F5O1xcbnVuaWZvcm0gZmxvYXQgZGVuc2l0eTtcXG51bmlmb3JtIGZsb2F0IHdlaWdodDtcXG51bmlmb3JtIGludCBzYW1wbGVzO1xcbmNvbnN0IGludCBNQVhfU0FNUExFUyA9IDEwMDtcXG52b2lkIG1haW4oKXtcXG4gIFxcbiAgdmVjMiB0ZXhDb29yZCA9IHZVdjtcXG4gIC8vIENhbGN1bGF0ZSB2ZWN0b3IgZnJvbSBwaXhlbCB0byBsaWdodCBzb3VyY2UgaW4gc2NyZWVuIHNwYWNlXFxuICB2ZWMyIGRlbHRhVGV4dENvb3JkID0gdGV4Q29vcmQgLSB2ZWMyKDAuNSwgMC41KTtcXG4gIC8vIERpdmlkZSBieSBudW1iZXIgb2Ygc2FtcGxlcyBhbmQgc2NhbGUgYnkgY29udHJvbCBmYWN0b3JcXG4gIGRlbHRhVGV4dENvb3JkICo9IDEuMCAvIGZsb2F0KHNhbXBsZXMpICogZGVuc2l0eTtcXG4gIC8vIFN0b3JlIGluaXRpYWwgc2FtcGxlXFxuICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHRJbnB1dCwgdGV4Q29vcmQpO1xcbiAgLy8gc2V0IHVwIGlsbHVtaW5hdGlvbiBkZWNheSBmYWN0b3JcXG4gIGZsb2F0IGlsbHVtaW5hdGlvbkRlY2F5ID0gMS4wO1xcbiAgXFxuICAvLyBldmFsdWF0ZSB0aGUgc3VtbWF0aW9uIGZvciBzYW1wbGVzIG51bWJlciBvZiBpdGVyYXRpb25zIHVwIHRvIDEwMFxcbiAgZm9yKGludCBpPTA7IGkgPCBNQVhfU0FNUExFUzsgaSsrKXtcXG4gICAgLy8gd29yayBhcm91bmQgZm9yIGR5bmFtaWMgbnVtYmVyIG9mIGxvb3AgaXRlcmF0aW9uc1xcbiAgICBpZihpID09IHNhbXBsZXMpe1xcbiAgICAgIGJyZWFrO1xcbiAgICB9XFxuICAgIFxcbiAgICAvLyBzdGVwIHNhbXBsZSBsb2NhdGlvbiBhbG9uZyByYXlcXG4gICAgdGV4Q29vcmQgLT0gZGVsdGFUZXh0Q29vcmQ7XFxuICAgIC8vIHJldHJpZXZlIHNhbXBsZSBhdCBuZXcgbG9jYXRpb25cXG4gICAgdmVjNCBzYW1wbGUgPSB0ZXh0dXJlMkQodElucHV0LCB0ZXhDb29yZCk7XFxuICAgIC8vIGFwcGx5IHNhbXBsZSBhdHRlbnVhdGlvbiBzY2FsZS9kZWNheSBmYWN0b3JzXFxuICAgIHNhbXBsZSAqPSBpbGx1bWluYXRpb25EZWNheSAqIHdlaWdodDtcXG4gICAgLy8gYWNjdW11bGF0ZSBjb21iaW5lZCBjb2xvclxcbiAgICBjb2xvciArPSBzYW1wbGU7XFxuICAgIC8vIHVwZGF0ZSBleHBvbmVudGlhbCBkZWNheSBmYWN0b3JcXG4gICAgaWxsdW1pbmF0aW9uRGVjYXkgKj0gZGVjYXk7XFxuICBcXG4gIH1cXG4gIC8vIG91dHB1dCBmaW5hbCBjb2xvciB3aXRoIGEgZnVydGhlciBzY2FsZSBjb250cm9sIGZhY3RvclxcbiAgZ2xfRnJhZ0NvbG9yID0gY29sb3IgKiBleHBvc3VyZTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3JhZGlhbC1ibHVyLmZzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gZmxvYXQgYW1vdW50O1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodElucHV0LCB2VXYpO1xcblxcdGZsb2F0IHIgPSBjb2xvci5yO1xcblxcdGZsb2F0IGcgPSBjb2xvci5nO1xcblxcdGZsb2F0IGIgPSBjb2xvci5iO1xcblxcdFxcblxcdGNvbG9yLnIgPSBtaW4oMS4wLCAociAqICgxLjAgLSAoMC42MDcgKiBhbW91bnQpKSkgKyAoZyAqICgwLjc2OSAqIGFtb3VudCkpICsgKGIgKiAoMC4xODkgKiBhbW91bnQpKSk7XFxuXFx0Y29sb3IuZyA9IG1pbigxLjAsIChyICogMC4zNDkgKiBhbW91bnQpICsgKGcgKiAoMS4wIC0gKDAuMzE0ICogYW1vdW50KSkpICsgKGIgKiAwLjE2OCAqIGFtb3VudCkpO1xcblxcdGNvbG9yLmIgPSBtaW4oMS4wLCAociAqIDAuMjcyICogYW1vdW50KSArIChnICogMC41MzQgKiBhbW91bnQpICsgKGIgKiAoMS4wIC0gKDAuODY5ICogYW1vdW50KSkpKTtcXG5cXHRcXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NlcGlhLmZzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBmbG9hdCBjYW1lcmFOZWFyO1xcbnVuaWZvcm0gZmxvYXQgY2FtZXJhRmFyO1xcblxcbiNpZmRlZiBVU0VfTE9HREVQVEhCVUZcXG4gICAgdW5pZm9ybSBmbG9hdCBsb2dEZXB0aEJ1ZkZDO1xcbiNlbmRpZlxcblxcbnVuaWZvcm0gZmxvYXQgcmFkaXVzOyAgICAgLy8gYW8gcmFkaXVzXFxudW5pZm9ybSBib29sIG9ubHlBTzsgICAgICAvLyB1c2Ugb25seSBhbWJpZW50IG9jY2x1c2lvbiBwYXNzP1xcblxcbnVuaWZvcm0gdmVjMiBzaXplOyAgICAgICAgLy8gdGV4dHVyZSB3aWR0aCwgaGVpZ2h0XFxudW5pZm9ybSBmbG9hdCBhb0NsYW1wOyAgICAvLyBkZXB0aCBjbGFtcCAtIHJlZHVjZXMgaGFsb2luZyBhdCBzY3JlZW4gZWRnZXNcXG5cXG51bmlmb3JtIGZsb2F0IGx1bUluZmx1ZW5jZTsgIC8vIGhvdyBtdWNoIGx1bWluYW5jZSBhZmZlY3RzIG9jY2x1c2lvblxcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGVwdGg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4vLyAjZGVmaW5lIFBJIDMuMTQxNTkyNjVcXG4jZGVmaW5lIERMIDIuMzk5OTYzMjI5NzI4NjUzICAvLyBQSSAqICggMy4wIC0gc3FydCggNS4wICkgKVxcbiNkZWZpbmUgRVVMRVIgMi43MTgyODE4Mjg0NTkwNDVcXG5cXG4gICAgICAgIC8vIHVzZXIgdmFyaWFibGVzXFxuXFxuY29uc3QgaW50IHNhbXBsZXMgPSA2NDsgICAgIC8vIGFvIHNhbXBsZSBjb3VudFxcblxcbmNvbnN0IGJvb2wgdXNlTm9pc2UgPSB0cnVlOyAgICAgIC8vIHVzZSBub2lzZSBpbnN0ZWFkIG9mIHBhdHRlcm4gZm9yIHNhbXBsZSBkaXRoZXJpbmdcXG5jb25zdCBmbG9hdCBub2lzZUFtb3VudCA9IDAuMDAwNDsgLy8gZGl0aGVyaW5nIGFtb3VudFxcblxcbmNvbnN0IGZsb2F0IGRpZmZBcmVhID0gMC40OyAgIC8vIHNlbGYtc2hhZG93aW5nIHJlZHVjdGlvblxcbmNvbnN0IGZsb2F0IGdEaXNwbGFjZSA9IDAuNDsgIC8vIGdhdXNzIGJlbGwgY2VudGVyXFxuXFxuXFxuLy8gUkdCQSBkZXB0aFxcblxcbnZlYzMgcGFja05vcm1hbFRvUkdCKCBjb25zdCBpbiB2ZWMzIG5vcm1hbCApIHtcXG4gICAgcmV0dXJuIG5vcm1hbGl6ZSggbm9ybWFsICkgKiAwLjUgKyAwLjU7XFxufVxcblxcbnZlYzMgdW5wYWNrUkdCVG9Ob3JtYWwoIGNvbnN0IGluIHZlYzMgcmdiICkge1xcbiAgICByZXR1cm4gMi4wICogcmdiLnh5eiAtIDEuMDtcXG59XFxuXFxuY29uc3QgZmxvYXQgUGFja1Vwc2NhbGUgPSAyNTYuIC8gMjU1LjsgLy8gZnJhY3Rpb24gLT4gMC4uMSAoaW5jbHVkaW5nIDEpXFxuY29uc3QgZmxvYXQgVW5wYWNrRG93bnNjYWxlID0gMjU1LiAvIDI1Ni47IC8vIDAuLjEgLT4gZnJhY3Rpb24gKGV4Y2x1ZGluZyAxKVxcblxcbmNvbnN0IHZlYzMgUGFja0ZhY3RvcnMgPSB2ZWMzKCAyNTYuICogMjU2LiAqIDI1Ni4sIDI1Ni4gKiAyNTYuLCAgMjU2LiApO1xcbmNvbnN0IHZlYzQgVW5wYWNrRmFjdG9ycyA9IFVucGFja0Rvd25zY2FsZSAvIHZlYzQoIFBhY2tGYWN0b3JzLCAxLiApO1xcblxcbmNvbnN0IGZsb2F0IFNoaWZ0UmlnaHQ4ID0gMS4gLyAyNTYuO1xcblxcbnZlYzQgcGFja0RlcHRoVG9SR0JBKCBjb25zdCBpbiBmbG9hdCB2ICkge1xcbiAgICB2ZWM0IHIgPSB2ZWM0KCBmcmFjdCggdiAqIFBhY2tGYWN0b3JzICksIHYgKTtcXG4gICAgci55encgLT0gci54eXogKiBTaGlmdFJpZ2h0ODsgLy8gdGlkeSBvdmVyZmxvd1xcbiAgICByZXR1cm4gciAqIFBhY2tVcHNjYWxlO1xcbn1cXG5cXG5mbG9hdCB1bnBhY2tSR0JBVG9EZXB0aCggY29uc3QgaW4gdmVjNCB2ICkge1xcbiAgICByZXR1cm4gZG90KCB2LCBVbnBhY2tGYWN0b3JzICk7XFxufVxcblxcbi8vIE5PVEU6IHZpZXdaL2V5ZVogaXMgPCAwIHdoZW4gaW4gZnJvbnQgb2YgdGhlIGNhbWVyYSBwZXIgT3BlbkdMIGNvbnZlbnRpb25zXFxuXFxuZmxvYXQgdmlld1pUb09ydGhvZ3JhcGhpY0RlcHRoKCBjb25zdCBpbiBmbG9hdCB2aWV3WiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcbiAgICByZXR1cm4gKCB2aWV3WiArIG5lYXIgKSAvICggbmVhciAtIGZhciApO1xcbn1cXG5mbG9hdCBvcnRob2dyYXBoaWNEZXB0aFRvVmlld1ooIGNvbnN0IGluIGZsb2F0IGxpbmVhckNsaXBaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxuICAgIHJldHVybiBsaW5lYXJDbGlwWiAqICggbmVhciAtIGZhciApIC0gbmVhcjtcXG59XFxuXFxuZmxvYXQgdmlld1pUb1BlcnNwZWN0aXZlRGVwdGgoIGNvbnN0IGluIGZsb2F0IHZpZXdaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxuICAgIHJldHVybiAoKCBuZWFyICsgdmlld1ogKSAqIGZhciApIC8gKCggZmFyIC0gbmVhciApICogdmlld1ogKTtcXG59XFxuZmxvYXQgcGVyc3BlY3RpdmVEZXB0aFRvVmlld1ooIGNvbnN0IGluIGZsb2F0IGludkNsaXBaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxuICAgIHJldHVybiAoIG5lYXIgKiBmYXIgKSAvICggKCBmYXIgLSBuZWFyICkgKiBpbnZDbGlwWiAtIGZhciApO1xcbn1cXG5cXG4vLyBnZW5lcmF0aW5nIG5vaXNlIC8gcGF0dGVybiB0ZXh0dXJlIGZvciBkaXRoZXJpbmdcXG5cXG52ZWMyIHJhbmQoIGNvbnN0IHZlYzIgY29vcmQgKSB7XFxuXFxuICAgIHZlYzIgbm9pc2U7XFxuXFxuICAgIGlmICggdXNlTm9pc2UgKSB7XFxuXFxuICAgICAgICBmbG9hdCBueCA9IGRvdCAoIGNvb3JkLCB2ZWMyKCAxMi45ODk4LCA3OC4yMzMgKSApO1xcbiAgICAgICAgZmxvYXQgbnkgPSBkb3QgKCBjb29yZCwgdmVjMiggMTIuOTg5OCwgNzguMjMzICkgKiAyLjAgKTtcXG5cXG4gICAgICAgIG5vaXNlID0gY2xhbXAoIGZyYWN0ICggNDM3NTguNTQ1MyAqIHNpbiggdmVjMiggbngsIG55ICkgKSApLCAwLjAsIDEuMCApO1xcblxcbiAgICB9IGVsc2Uge1xcblxcbiAgICAgICAgZmxvYXQgZmYgPSBmcmFjdCggMS4wIC0gY29vcmQucyAqICggc2l6ZS54IC8gMi4wICkgKTtcXG4gICAgICAgIGZsb2F0IGdnID0gZnJhY3QoIGNvb3JkLnQgKiAoIHNpemUueSAvIDIuMCApICk7XFxuXFxuICAgICAgICBub2lzZSA9IHZlYzIoIDAuMjUsIDAuNzUgKSAqIHZlYzIoIGZmICkgKyB2ZWMyKCAwLjc1LCAwLjI1ICkgKiBnZztcXG5cXG4gICAgfVxcblxcbiAgICByZXR1cm4gKCBub2lzZSAqIDIuMCAgLSAxLjAgKSAqIG5vaXNlQW1vdW50O1xcblxcbn1cXG5cXG5mbG9hdCByZWFkRGVwdGgoIGNvbnN0IGluIHZlYzIgY29vcmQgKSB7XFxuXFxuICAgIGZsb2F0IGNhbWVyYUZhclBsdXNOZWFyID0gY2FtZXJhRmFyICsgY2FtZXJhTmVhcjtcXG4gICAgZmxvYXQgY2FtZXJhRmFyTWludXNOZWFyID0gY2FtZXJhRmFyIC0gY2FtZXJhTmVhcjtcXG4gICAgZmxvYXQgY2FtZXJhQ29lZiA9IDIuMCAqIGNhbWVyYU5lYXI7XFxuXFxuICAgICNpZmRlZiBVU0VfTE9HREVQVEhCVUZcXG5cXG4gICAgICAgIGZsb2F0IGxvZ3ogPSB1bnBhY2tSR0JBVG9EZXB0aCggdGV4dHVyZTJEKCB0RGVwdGgsIGNvb3JkICkgKTtcXG4gICAgICAgIGZsb2F0IHcgPSBwb3coMi4wLCAobG9neiAvIGxvZ0RlcHRoQnVmRkMpKSAtIDEuMDtcXG4gICAgICAgIGZsb2F0IHogPSAobG9neiAvIHcpICsgMS4wO1xcblxcbiAgICAjZWxzZVxcblxcbiAgICAgICAgZmxvYXQgeiA9IHVucGFja1JHQkFUb0RlcHRoKCB0ZXh0dXJlMkQoIHREZXB0aCwgY29vcmQgKSApO1xcblxcbiAgICAjZW5kaWZcXG5cXG4gICAgcmV0dXJuIGNhbWVyYUNvZWYgLyAoIGNhbWVyYUZhclBsdXNOZWFyIC0geiAqIGNhbWVyYUZhck1pbnVzTmVhciApO1xcblxcblxcbn1cXG5cXG5mbG9hdCBjb21wYXJlRGVwdGhzKCBjb25zdCBpbiBmbG9hdCBkZXB0aDEsIGNvbnN0IGluIGZsb2F0IGRlcHRoMiwgaW5vdXQgaW50IGZhciApIHtcXG5cXG4gICAgZmxvYXQgZ2FyZWEgPSA4LjA7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdhdXNzIGJlbGwgd2lkdGhcXG4gICAgZmxvYXQgZGlmZiA9ICggZGVwdGgxIC0gZGVwdGgyICkgKiAxMDAuMDsgIC8vIGRlcHRoIGRpZmZlcmVuY2UgKDAtMTAwKVxcblxcbiAgICAgICAgICAgIC8vIHJlZHVjZSBsZWZ0IGJlbGwgd2lkdGggdG8gYXZvaWQgc2VsZi1zaGFkb3dpbmdcXG5cXG4gICAgaWYgKCBkaWZmIDwgZ0Rpc3BsYWNlICkge1xcblxcbiAgICAgICAgZ2FyZWEgPSBkaWZmQXJlYTtcXG5cXG4gICAgfSBlbHNlIHtcXG5cXG4gICAgICAgIGZhciA9IDE7XFxuXFxuICAgIH1cXG5cXG4gICAgZmxvYXQgZGQgPSBkaWZmIC0gZ0Rpc3BsYWNlO1xcbiAgICBmbG9hdCBnYXVzcyA9IHBvdyggRVVMRVIsIC0yLjAgKiAoIGRkICogZGQgKSAvICggZ2FyZWEgKiBnYXJlYSApICk7XFxuICAgIHJldHVybiBnYXVzcztcXG5cXG59XFxuXFxuZmxvYXQgY2FsY0FPKCBmbG9hdCBkZXB0aCwgZmxvYXQgZHcsIGZsb2F0IGRoICkge1xcblxcbiAgICB2ZWMyIHZ2ID0gdmVjMiggZHcsIGRoICk7XFxuXFxuICAgIHZlYzIgY29vcmQxID0gdlV2ICsgcmFkaXVzICogdnY7XFxuICAgIHZlYzIgY29vcmQyID0gdlV2IC0gcmFkaXVzICogdnY7XFxuXFxuICAgIGZsb2F0IHRlbXAxID0gMC4wO1xcbiAgICBmbG9hdCB0ZW1wMiA9IDAuMDtcXG5cXG4gICAgaW50IGZhciA9IDA7XFxuICAgIHRlbXAxID0gY29tcGFyZURlcHRocyggZGVwdGgsIHJlYWREZXB0aCggY29vcmQxICksIGZhciApO1xcblxcbiAgICAgICAgICAgIC8vIERFUFRIIEVYVFJBUE9MQVRJT05cXG5cXG4gICAgaWYgKCBmYXIgPiAwICkge1xcblxcbiAgICAgICAgdGVtcDIgPSBjb21wYXJlRGVwdGhzKCByZWFkRGVwdGgoIGNvb3JkMiApLCBkZXB0aCwgZmFyICk7XFxuICAgICAgICB0ZW1wMSArPSAoIDEuMCAtIHRlbXAxICkgKiB0ZW1wMjtcXG5cXG4gICAgfVxcblxcbiAgICByZXR1cm4gdGVtcDE7XFxuXFxufVxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgdmVjMiBub2lzZSA9IHJhbmQoIHZVdiApO1xcbiAgICBmbG9hdCBkZXB0aCA9IHJlYWREZXB0aCggdlV2ICk7XFxuXFxuICAgIGZsb2F0IHR0ID0gY2xhbXAoIGRlcHRoLCBhb0NsYW1wLCAxLjAgKTtcXG5cXG4gICAgZmxvYXQgdyA9ICggMS4wIC8gc2l6ZS54ICkgLyB0dCArICggbm9pc2UueCAqICggMS4wIC0gbm9pc2UueCApICk7XFxuICAgIGZsb2F0IGggPSAoIDEuMCAvIHNpemUueSApIC8gdHQgKyAoIG5vaXNlLnkgKiAoIDEuMCAtIG5vaXNlLnkgKSApO1xcblxcbiAgICBmbG9hdCBhbyA9IDAuMDtcXG5cXG4gICAgZmxvYXQgZHogPSAxLjAgLyBmbG9hdCggc2FtcGxlcyApO1xcbiAgICBmbG9hdCBsID0gMC4wO1xcbiAgICBmbG9hdCB6ID0gMS4wIC0gZHogLyAyLjA7XFxuXFxuICAgIGZvciAoIGludCBpID0gMDsgaSA8PSBzYW1wbGVzOyBpICsrICkge1xcblxcbiAgICAgICAgZmxvYXQgciA9IHNxcnQoIDEuMCAtIHogKTtcXG5cXG4gICAgICAgIGZsb2F0IHB3ID0gY29zKCBsICkgKiByO1xcbiAgICAgICAgZmxvYXQgcGggPSBzaW4oIGwgKSAqIHI7XFxuICAgICAgICBhbyArPSBjYWxjQU8oIGRlcHRoLCBwdyAqIHcsIHBoICogaCApO1xcbiAgICAgICAgeiA9IHogLSBkejtcXG4gICAgICAgIGwgPSBsICsgREw7XFxuXFxuICAgIH1cXG5cXG4gICAgYW8gLz0gZmxvYXQoIHNhbXBsZXMgKTtcXG4gICAgYW8gPSAxLjAgLSBhbztcXG5cXG4gICAgdmVjMyBjb2xvciA9IHRleHR1cmUyRCggdElucHV0LCB2VXYgKS5yZ2I7XFxuXFxuICAgIHZlYzMgbHVtY29lZmYgPSB2ZWMzKCAwLjI5OSwgMC41ODcsIDAuMTE0ICk7XFxuICAgIGZsb2F0IGx1bSA9IGRvdCggY29sb3IucmdiLCBsdW1jb2VmZiApO1xcbiAgICB2ZWMzIGx1bWluYW5jZSA9IHZlYzMoIGx1bSApO1xcblxcbiAgICB2ZWMzIGZpbmFsID0gdmVjMyggY29sb3IgKiBtaXgoIHZlYzMoIGFvICksIHZlYzMoIDEuMCApLCBsdW1pbmFuY2UgKiBsdW1JbmZsdWVuY2UgKSApOyAgLy8gbWl4KCBjb2xvciAqIGFvLCB3aGl0ZSwgbHVtaW5hbmNlIClcXG5cXG4gICAgaWYgKCBvbmx5QU8gKSB7XFxuXFxuICAgICAgICBmaW5hbCA9IHZlYzMoIG1peCggdmVjMyggYW8gKSwgdmVjMyggMS4wICksIGx1bWluYW5jZSAqIGx1bUluZmx1ZW5jZSApICk7ICAvLyBhbWJpZW50IG9jY2x1c2lvbiBvbmx5XFxuXFxuICAgIH1cXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2KTtcXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NzYW8uZnNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9ncmVzc1xuXG5mdW5jdGlvbiBwcm9ncmVzcyh4aHIpIHtcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyXG4gIHZhciBmaW5pc2hlZCA9IGZhbHNlXG5cbiAgaWYgKHhoci5hdHRhY2hFdmVudCkge1xuICAgIHhoci5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZG9uZSlcbiAgICByZXR1cm4gZW1pdHRlclxuICB9XG5cbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lLCBmYWxzZSlcbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICBmdW5jdGlvbiBwcm9ncmVzcyhldmVudCkge1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgID8gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWxcbiAgICAgIDogMFxuXG4gICAgaWYgKCFmaW5pc2hlZCkgZW1pdHRlci5lbWl0KCdkYXRhJ1xuICAgICAgLCB2YWx1ZVxuICAgICAgLCBldmVudC50b3RhbCB8fCBudWxsXG4gICAgKVxuXG4gICAgZmluaXNoZWQgPSB2YWx1ZSA9PT0gMVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlICE9PSAnbG9hZCcgJiYgIS9eKHJlYWR5fGNvbXBsZXRlKSQvZy50ZXN0KFxuICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkucmVhZHlTdGF0ZVxuICAgICkpIHJldHVyblxuXG4gICAgaWYgKGZpbmlzaGVkKSByZXR1cm5cbiAgICBpZiAoeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHhoci5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzcywgZmFsc2UpXG4gICAgfSBlbHNlXG4gICAgaWYgKHhoci5kZXRhdGNoRXZlbnQpIHtcbiAgICAgIHhoci5kZXRhdGNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KCdkYXRhJywgMSwgZXZlbnQudG90YWwgfHwgbnVsbClcbiAgICBlbWl0dGVyLmVtaXQoJ2RvbmUnKVxuICAgIGZpbmlzaGVkID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGVtaXR0ZXJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94aHItcHJvZ3Jlc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoXCJpcy1mdW5jdGlvblwiKVxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoXCJwYXJzZS1oZWFkZXJzXCIpXG52YXIgeHRlbmQgPSByZXF1aXJlKFwieHRlbmRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVYSFJcbmNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCBub29wXG5jcmVhdGVYSFIuWERvbWFpblJlcXVlc3QgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCkpID8gY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0IDogd2luZG93LlhEb21haW5SZXF1ZXN0XG5cbmZvckVhY2hBcnJheShbXCJnZXRcIiwgXCJwdXRcIiwgXCJwb3N0XCIsIFwicGF0Y2hcIiwgXCJoZWFkXCIsIFwiZGVsZXRlXCJdLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBjcmVhdGVYSFJbbWV0aG9kID09PSBcImRlbGV0ZVwiID8gXCJkZWxcIiA6IG1ldGhvZF0gPSBmdW5jdGlvbih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRvcihhcnJheVtpXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKXtcbiAgICBmb3IodmFyIGkgaW4gb2JqKXtcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHBhcmFtcyA9IHVyaVxuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7dXJpOnVyaX1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHh0ZW5kKG9wdGlvbnMsIHt1cmk6IHVyaX0pXG4gICAgfVxuXG4gICAgcGFyYW1zLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICByZXR1cm4gcGFyYW1zXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlWEhSKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbGxiYWNrIGFyZ3VtZW50IG1pc3NpbmdcIilcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYk9uY2UoZXJyLCByZXNwb25zZSwgYm9keSl7XG4gICAgICAgIGlmKCFjYWxsZWQpe1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhlcnIsIHJlc3BvbnNlLCBib2R5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRGdW5jLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IGdldFhtbCh4aHIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UsIHJlc3BvbnNlLmJvZHkpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciBhYm9ydGVkXG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybFxuICAgIHZhciBtZXRob2QgPSB4aHIubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIlxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YVxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuICAgIHZhciBmYWlsdXJlUmVzcG9uc2UgPSB7XG4gICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHN0YXR1c0NvZGU6IDAsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgfVxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5qc29uICE9PSBmYWxzZSkge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbiA9PT0gdHJ1ZSA/IGJvZHkgOiBvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZS8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIilcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgdGltZW91dFwiKVxuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIlxuICAgICAgICAgICAgZXJyb3JGdW5jKGUpXG4gICAgICAgIH0sIG9wdGlvbnMudGltZW91dCApXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG5cbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICAvLyBNaWNyb3NvZnQgRWRnZSBicm93c2VyIHNlbmRzIFwidW5kZWZpbmVkXCIgd2hlbiBzZW5kIGlzIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBzcGVjIHNheXMgdG8gcGFzcyBudWxsIGFzIGJvZHkgdG8gaW5kaWNhdGUgbm8gYm9keVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmF1Z3R1ci94aHIvaXNzdWVzLzEwMC5cbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpXG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5mdW5jdGlvbiBnZXRYbWwoeGhyKSB7XG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuICAgIHZhciBmaXJlZm94QnVnVGFrZW5FZmZlY3QgPSB4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gXCJwYXJzZXJlcnJvclwiXG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiXCIgJiYgIWZpcmVmb3hCdWdUYWtlbkVmZmVjdCkge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbiNkZWZpbmUgRlhBQV9SRURVQ0VfTUlOICAgKDEuMC8xMjguMClcXG4jZGVmaW5lIEZYQUFfUkVEVUNFX01VTCAgICgxLjAvOC4wKVxcbiNkZWZpbmUgRlhBQV9TUEFOX01BWCAgICAgOC4wXFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICB2ZWMyIHJlcyA9IDEuIC8gcmVzb2x1dGlvbjtcXG5cXG4gICAgdmVjMyByZ2JOVyA9IHRleHR1cmUyRCggdElucHV0LCAoIHZVdi54eSArIHZlYzIoIC0xLjAsIC0xLjAgKSAqIHJlcyApICkueHl6O1xcbiAgICB2ZWMzIHJnYk5FID0gdGV4dHVyZTJEKCB0SW5wdXQsICggdlV2Lnh5ICsgdmVjMiggMS4wLCAtMS4wICkgKiByZXMgKSApLnh5ejtcXG4gICAgdmVjMyByZ2JTVyA9IHRleHR1cmUyRCggdElucHV0LCAoIHZVdi54eSArIHZlYzIoIC0xLjAsIDEuMCApICogcmVzICkgKS54eXo7XFxuICAgIHZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQoIHRJbnB1dCwgKCB2VXYueHkgKyB2ZWMyKCAxLjAsIDEuMCApICogcmVzICkgKS54eXo7XFxuICAgIHZlYzQgcmdiYU0gID0gdGV4dHVyZTJEKCB0SW5wdXQsICB2VXYueHkgICogcmVzICk7XFxuICAgIHZlYzMgcmdiTSAgPSByZ2JhTS54eXo7XFxuICAgIHZlYzMgbHVtYSA9IHZlYzMoIDAuMjk5LCAwLjU4NywgMC4xMTQgKTtcXG5cXG4gICAgZmxvYXQgbHVtYU5XID0gZG90KCByZ2JOVywgbHVtYSApO1xcbiAgICBmbG9hdCBsdW1hTkUgPSBkb3QoIHJnYk5FLCBsdW1hICk7XFxuICAgIGZsb2F0IGx1bWFTVyA9IGRvdCggcmdiU1csIGx1bWEgKTtcXG4gICAgZmxvYXQgbHVtYVNFID0gZG90KCByZ2JTRSwgbHVtYSApO1xcbiAgICBmbG9hdCBsdW1hTSAgPSBkb3QoIHJnYk0sICBsdW1hICk7XFxuICAgIGZsb2F0IGx1bWFNaW4gPSBtaW4oIGx1bWFNLCBtaW4oIG1pbiggbHVtYU5XLCBsdW1hTkUgKSwgbWluKCBsdW1hU1csIGx1bWFTRSApICkgKTtcXG4gICAgZmxvYXQgbHVtYU1heCA9IG1heCggbHVtYU0sIG1heCggbWF4KCBsdW1hTlcsIGx1bWFORSkgLCBtYXgoIGx1bWFTVywgbHVtYVNFICkgKSApO1xcblxcbiAgICB2ZWMyIGRpcjtcXG4gICAgZGlyLnggPSAtKChsdW1hTlcgKyBsdW1hTkUpIC0gKGx1bWFTVyArIGx1bWFTRSkpO1xcbiAgICBkaXIueSA9ICAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XFxuXFxuICAgIGZsb2F0IGRpclJlZHVjZSA9IG1heCggKCBsdW1hTlcgKyBsdW1hTkUgKyBsdW1hU1cgKyBsdW1hU0UgKSAqICggMC4yNSAqIEZYQUFfUkVEVUNFX01VTCApLCBGWEFBX1JFRFVDRV9NSU4gKTtcXG5cXG4gICAgZmxvYXQgcmNwRGlyTWluID0gMS4wIC8gKCBtaW4oIGFicyggZGlyLnggKSwgYWJzKCBkaXIueSApICkgKyBkaXJSZWR1Y2UgKTtcXG4gICAgZGlyID0gbWluKCB2ZWMyKCBGWEFBX1NQQU5fTUFYLCAgRlhBQV9TUEFOX01BWCksXFxuICAgICAgICAgIG1heCggdmVjMigtRlhBQV9TUEFOX01BWCwgLUZYQUFfU1BBTl9NQVgpLFxcbiAgICAgICAgICAgICAgICBkaXIgKiByY3BEaXJNaW4pKSAqIHJlcztcXG4gICAgdmVjNCByZ2JBID0gKDEuMC8yLjApICogKFxcbiAgICB0ZXh0dXJlMkQodElucHV0LCAgdlV2Lnh5ICsgZGlyICogKDEuMC8zLjAgLSAwLjUpKSArXFxuICAgIHRleHR1cmUyRCh0SW5wdXQsICB2VXYueHkgKyBkaXIgKiAoMi4wLzMuMCAtIDAuNSkpKTtcXG4gICAgdmVjNCByZ2JCID0gcmdiQSAqICgxLjAvMi4wKSArICgxLjAvNC4wKSAqIChcXG4gICAgdGV4dHVyZTJEKHRJbnB1dCwgIHZVdi54eSArIGRpciAqICgwLjAvMy4wIC0gMC41KSkgK1xcbiAgICB0ZXh0dXJlMkQodElucHV0LCAgdlV2Lnh5ICsgZGlyICogKDMuMC8zLjAgLSAwLjUpKSk7XFxuICAgIGZsb2F0IGx1bWFCID0gZG90KHJnYkIsIHZlYzQobHVtYSwgMC4wKSk7XFxuXFxuICAgIGlmICggKCBsdW1hQiA8IGx1bWFNaW4gKSB8fCAoIGx1bWFCID4gbHVtYU1heCApICkge1xcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gcmdiQTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHJnYkI7XFxuICAgIH1cXG5cXG4gICAgLy9nbF9GcmFnQ29sb3IgPSB2ZWM0KCB0ZXh0dXJlMkQoIHRJbnB1dCx2VXYgKS54eXosIDEuICk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9meGFhLmZzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUGFzcyBmcm9tICcuLi9jb3JlL1Bhc3MnO1xuXG5jbGFzcyBGWEFBUGFzcyBleHRlbmRzIFBhc3Mge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcignRlhBQVBhc3MnLCAnZnhhYS5mcycsICdiYXNpYy52cycsIHt9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRlhBQVBhc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3Bhc3Nlcy9GWEFBUGFzcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=