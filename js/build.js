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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

var _randomFromArray = __webpack_require__(39);

var _randomFromArray2 = _interopRequireDefault(_randomFromArray);

var _lucky = __webpack_require__(37);

var _lucky2 = _interopRequireDefault(_lucky);

var _map = __webpack_require__(8);

var _map2 = _interopRequireDefault(_map);

var _debounce = __webpack_require__(36);

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

var _webAudioPlayer = __webpack_require__(52);

var _webAudioPlayer2 = _interopRequireDefault(_webAudioPlayer);

var _webAudioAnalyser = __webpack_require__(51);

var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);

var _analyserFrequencyAverage = __webpack_require__(32);

var _analyserFrequencyAverage2 = _interopRequireDefault(_analyserFrequencyAverage);

var _Range = __webpack_require__(35);

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

var _CopyPass = __webpack_require__(38);

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
        value: function update() {
            this.uniforms.time.value += 0.016;
        }
    }]);

    return CustomPass;
}(_Pass3.default);

exports.default = CustomPass;

/***/ }),
/* 29 */
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

/***/ }),
/* 30 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var frequencyToIndex = __webpack_require__(33)

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(41)

module.exports = frequencyToIndex
function frequencyToIndex (frequency, sampleRate, frequencyBinCount) {
  var nyquist = sampleRate / 2
  var index = Math.round(frequency / nyquist * frequencyBinCount)
  return clamp(index, 0, frequencyBinCount)
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf = __webpack_require__(30);

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

var _FXAAPass = __webpack_require__(29);

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
                  var OrbitControls = __webpack_require__(31)(THREE);
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
/* 35 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isDom = __webpack_require__(44)
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

/* WEBPACK VAR INJECTION */(function(process) {var canPlaySrc = __webpack_require__(12)
var createAudioContext = __webpack_require__(11)
var xhrAudio = __webpack_require__(56)
var EventEmitter = __webpack_require__(5).EventEmitter
var rightNow = __webpack_require__(48)
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

/* WEBPACK VAR INJECTION */(function(process) {var EventEmitter = __webpack_require__(5).EventEmitter
var createAudio = __webpack_require__(49).audio
var assign = __webpack_require__(45)

var resume = __webpack_require__(13)
var createAudioContext = __webpack_require__(11)
var canPlaySrc = __webpack_require__(12)
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(43)
var isFunction = __webpack_require__(10)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTU1YjVkN2I4YzdhM2YzMDkxZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL2NvcmUvUGFzcy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9NaWRpQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZnVuY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9hdWRpby1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvY2FuLXBsYXktc3JjLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvcmVzdW1lLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbmZpZy9NUEtNaW5pLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JvdHRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0xlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9SaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1RvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1NvdW5kTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3Ntb290aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9Db21wb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vcGFzc2VzL0N1c3RvbVBhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3Bhc3Nlcy9GWEFBUGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL2x1Y2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9wYXNzZXMvQ29weVBhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9taW1lLXR5cGVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jbGFtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Zvci1lYWNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpZ2h0LW5vdy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cmltL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLWFuYWx5c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2J1ZmZlci1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9ldmVudC1hZGQtb25jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL21lZGlhLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3hoci1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYm1pZGkvd2VibWlkaS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9hZGRpdGl2ZS5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9iYXNpYy52cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbS5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ibG9vbTIuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYmxvb210ZXN0LmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2JveC1ibHVyLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2NvcHkuZnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvY3VzdG9tLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2RvZi5mcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9meGFhLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2dhdXNzaWFuLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL25vaXNlLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3JhZGlhbC1ibHVyLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NlcGlhLmZzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NzYW8uZnMiLCJ3ZWJwYWNrOi8vLy4vfi94aHItcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi94aHIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi94dGVuZC9pbW11dGFibGUuanMiXSwibmFtZXMiOlsiRXZlbnRzTWFuYWdlciIsImV2ZW50IiwiZGF0YSIsImxpc3RlbmVycyIsImV2ZW50c0xpc3QiLCJpIiwibGVuIiwibGVuZ3RoIiwiZm4iLCJwdXNoIiwibGlzdGVuZXIiLCJvZmYiLCJfIiwib24iLCJjb25zb2xlIiwid2FybiIsInRhcmdldEV2ZW50cyIsInRhcmdldCIsIkV2ZW50cyIsIktFWUJPQVJEIiwiS0VZRE9XTiIsIktFWVVQIiwiS0VZUFJFU1MiLCJTUEFDRUhPTEQiLCJTUEFDRVVQIiwiU1BBQ0VET1dOIiwiU09VTkRTIiwiQ0FOUExBWSIsIkVORCIsIkxPV0tJQ0siLCJNSURETEVLSUNLIiwiSElHSEtJQ0siLCJUUkVNT0xPIiwiU1RBUlQiLCJYUCIsIlVJIiwiSElEREVOIiwiQWJzdHJhY3RGYWNlIiwiZ2VvbWV0cnkiLCJjb2xvciIsIm5hbWUiLCJzaWRlIiwiVEhSRUUiLCJGcm9udFNpZGUiLCJwbGFuZUdlb21ldHJ5Iiwib25LZXlQcmVzcyIsIm9uU3BhY2VIb2xkIiwib25TdGFydCIsIm9uSGlkZGVuVUkiLCJ1bmlmb3JtcyIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsIlNoYWRlckxpYiIsInR5cGUiLCJ2YWx1ZSIsIkNvbG9yIiwiVmVjdG9yMyIsIndpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnREaXZpc2lvbnMiLCJWZWN0b3IyIiwib3JpZW50YXRpb25zIiwiZHVyYXRpb24iLCJmYWN0b3IiLCJlYXNlIiwiRXhwbyIsImVhc2VPdXQiLCJkZWJ1ZyIsInN0YXJ0ZWQiLCJpc1NwYWNlRG93biIsImluaXRHdWkiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwicmVxdWlyZSIsImZyYWdtZW50U2hhZGVyIiwibGlnaHRzIiwidHJhbnNwYXJlbnQiLCJmb2ciLCJtZXNoIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiaXNPcGVuIiwiZ3VpIiwiYWRkRm9sZGVyIiwib3BlbiIsInRpbWUiLCJ1cGRhdGVEaXZpc2lvbnMiLCJvcmllbnRhdGlvbk5hbWUiLCJzY2FsYXIiLCJvcmllbnRhdGlvbiIsIm11bHRpcGx5U2NhbGFyIiwieCIsInkiLCJ6Iiwic3BlZWQiLCJzcGVlZE1pbiIsInRsIiwiVGltZWxpbmVMaXRlIiwiYmxhY2tNb2RlIiwic2hvdyIsInRvIiwiaGlkZSIsImtleSIsIlR3ZWVuTWF4IiwiaW52ZXJ0IiwiVGltZWxpbmVNYXgiLCJ1UHJvZ3Jlc3MiLCJvbkNvbXBsZXRlIiwic2V0IiwiZnJvbVRvIiwiT2JqZWN0M0QiLCJQYXNzIiwiZW5hYmxlZCIsInJlc29sdXRpb24iLCJ0SW5wdXQiLCJUZXh0dXJlIiwiZGVmYXVsdCIsInNoYWRlciIsImZsYXRTaGFkaW5nIiwiZGVwdGhXcml0ZSIsImRlcHRoVGVzdCIsIm1hcCIsIm4iLCJzdGFydDEiLCJzdG9wMSIsInN0YXJ0MiIsInN0b3AyIiwiTWlkaUNvbnRyb2xsZXIiLCJjb25maWciLCJpbnN0YW5jZSIsInBhZHMiLCJrbm9icyIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJvbk1lc3NhZ2UiLCJlbmFibGUiLCJlcnIiLCJuYXZpZ2F0b3IiLCJyZXF1ZXN0TUlESUFjY2VzcyIsInN5c2V4IiwidGhlbiIsImFsZXJ0IiwiaW5wdXRzIiwiaW5wdXQiLCJwYXJzZUNvbmZpZyIsImFkZExpc3RlbmVyIiwiZSIsImtleXMiLCJPYmplY3QiLCJzdWJzY3JpcHRpb25zIiwiaiIsIm51bWJlciIsImNoYW5uZWwiLCJjYWxsYmFjayIsIm5vdGUiLCJ2ZWxvY2l0eSIsImNvbnRyb2xsZXIiLCJlcnJvciIsIkVycm9yIiwibG9nIiwiaWQiLCJmaW5kTnVtYmVySW5QYWRzIiwiZmluZE51bWJlckluS25vYnMiLCJyZWdpc3RlclBhZCIsInJlZ2lzdGVyS25vYiIsIkZhY2VzQ29udHJvbGxlciIsImNvbnRhaW5lciIsImZhY2VzIiwiZGl2aXNpb25zIiwiZ2VuZXJhdGVEaXZpc2lvbnMiLCJsYXN0WCIsImxhc3RZIiwiYWxsb3dJbnZlcnQiLCJzcGVlZENvbnRhaW5lciIsImZpcnN0U3BhY2VVcCIsImhpZ2hraWNrZWQiLCJsb3draWNrZWQiLCJkaXJlY3Rpb24iLCJjdXJyZW50QmxhY2tNb2RlIiwiY3VycmVudFNjYWxlTW9kZSIsIm9uTG93S2ljayIsIm9uTWlkZGxlS2ljayIsIm9uSGlnaEtpY2siLCJvblRyZW1vbG8iLCJvblVJSGlkZGVuIiwib25Tb3VuZEVuZCIsIm9uU3BhY2VVcCIsIm9uU3BhY2VEb3duIiwiYmxhY2tNb2RlVmVydGljYWwiLCJibGFja01vZGVIb3Jpem9udGFsIiwiYmxhY2tNb2RlVHVubmVsVG9wIiwiYmxhY2tNb2RlVHVubmVsQm90dG9tIiwiYmxhY2tNb2RlQm90dG9tIiwiYmxhY2tNb2RlRnVsbCIsImJsYWNrTW9kZXMiLCJzZXRCbGFja01vZGUiLCJjaGFuZ2VTY2FsZSIsInJlYWN0aW9ucyIsImNoYW5nZVNjYWxlWCIsImNoYW5nZVNjYWxlWSIsImNoYW5nZVNjYWxlQm90aCIsInNjYWxpbmdzIiwib25QYWREb3duIiwib25Lbm9iQ2hhbmdlIiwiZmFjZSIsIm1pbiIsIm1heCIsImJldHdlZW4iLCJwb3NzaWJsZURpdmlzaW9uWCIsImZpbmREaXZpc2lvbnMiLCJyZG1YSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXZpc2lvblgiLCJpbmRleE9mIiwicG9zc2libGVEaXZpc2lvblkiLCJyZG1ZSW5kZXgiLCJkaXZpc2lvblkiLCJzZXRTdHJpcGVzIiwiYWxsIiwiY3VycmVudCIsInJhbmdlIiwiZGl2aXNpb24iLCJpbmRleCIsImZpbHRlciIsInNvdW5kRW5kZWQiLCJyZG0iLCJlbWl0IiwicmVzZXQiLCJvbkVuZCIsIm9wdGlvbnMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZSIsInJvdGF0aW9uIiwidXBkYXRlIiwicHJvZ3Jlc3MiLCJlYXNlSW5PdXQiLCJNb3VzZU1hbmFnZXIiLCJjaGVja01vdXNlU3BlZWQiLCJtb3VzZVNwZWVkWCIsIm1vdXNlU3BlZWRZIiwibW91c2VMYXN0WCIsIm1vdXNlTGFzdFkiLCJtb3VzZURpcmVjdGlvblgiLCJtb3VzZURpcmVjdGlvblkiLCJtb3VzZVgiLCJtb3VzZVkiLCJzZXRJbnRlcnZhbCIsImdldFNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldERpcmVjdGlvbiIsInBhZ2VYIiwicGFnZVkiLCJLZXlib2FyZENvbnRyb2xsZXIiLCJvbktleVVwIiwib25LZXlEb3duIiwiQmFja2dyb3VuZCIsIkJvdHRvbSIsImhvcml6b250YWwiLCJob3Jpem9udGFsU2tldzEiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU2tldzEiLCJ2ZXJ0aWNhbFNrZXcyIiwidmlzaWJpbGl0eVRvZ2dsZXIiLCJ2aXNpYmlsaXR5SGlkZXIiLCJ2aXNpYmlsaXR5U2hvd2VyIiwiTGVmdCIsIlJpZ2h0IiwiQmFja1NpZGUiLCJUb3AiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJTb3VuZE1hbmFnZXIiLCJiYXNzIiwibWlkQmFzcyIsInZvaWNlIiwiZHJ1bSIsInBhdXNlIiwiYXNzZXRzIiwic291cmNlcyIsImludHJvIiwieHAiLCJzdGFydCIsImluaXRTb3VuZCIsImxvd0tpY2siLCJtaWRkbGVLaWNrIiwidHJlbW9sbyIsImhpZ2hLaWNrIiwicmFuZ2VzIiwic291bmRHdWkiLCJvbkNoYW5nZSIsInBsYXllciIsInBsYXkiLCJwbGF5ZXJzIiwiYXVkaW8iLCJhbmFseXNlciIsIm5vZGUiLCJBdWRpbyIsInZvbHVtZSIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiYXVkaWJsZSIsInN0ZXJlbyIsImxvYWRlZCIsInNyYyIsImZyZXFzIiwiZnJlcXVlbmNpZXMiLCJsZXZlbCIsInF1ZXVlIiwic21vb3RoIiwiY29lZmYiLCJpbml0IiwidW5kZWZpbmVkIiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9nbyIsIiRhY3Rpb24iLCIkYWN0aW9uTGFiZWwiLCIkYWN0aW9uRmlsbCIsIiR0dXRvIiwiJGNyZWRpdHMiLCIkY3JlZGl0SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHByb2dyZXNzRmlsbCIsIiRoZWxwIiwiJGJhY2tncm91bmQiLCJub3ciLCJEYXRlIiwibWF4VGltZSIsImhlbHBJc09wZW4iLCJpc0NvbXBsZXRlZCIsIm1pbkZpbGwiLCJtYXhGaWxsIiwiZmlsbCIsInJlc2V0dGVkIiwiaXNEb3duIiwicGF1c2VkIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJjc3MiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwib25FbmRYUCIsIm9uQ2xpY2tIZWxwIiwidGxIZWxwU2hvdyIsInRsSGVscEhpZGUiLCJkaXNwbGF5IiwidGltZVNjYWxlIiwicmV2ZXJzZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImlubmVySFRNTCIsImtpbGwiLCJyZXN0YXJ0Iiwic3RhZ2dlckZyb21UbyIsIkFycmF5IiwiZnJvbSIsImRpc3BsYXlDcmVkaXRzIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVOaWwiLCJhcyIsImEiLCJtZXJnZSIsImFyZ3MiLCJmaWx0ZXJlZCIsInJlZHVjZSIsImFjYyIsImN1ciIsImZvckVhY2giLCJDb21wb3NlciIsInJlbmRlcmVyIiwib3B0cyIsImRlZmF1bHRzIiwibWluRmlsdGVyIiwiTGluZWFyRmlsdGVyIiwibWFnRmlsdGVyIiwid3JhcFMiLCJDbGFtcFRvRWRnZVdyYXBwaW5nIiwid3JhcFQiLCJmb3JtYXQiLCJSR0JGb3JtYXQiLCJVbnNpZ25lZEJ5dGVUeXBlIiwic3RlbmNpbEJ1ZmZlciIsImZyb250IiwiV2ViR0xSZW5kZXJUYXJnZXQiLCJiYWNrIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsImRlZmF1bHRNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwicXVhZCIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJjb3B5UGFzcyIsInciLCJoIiwicHJvamVjdGlvbk1hdHJpeCIsIm1ha2VPcnRob2dyYXBoaWMiLCJuZWFyIiwiZmFyIiwic2V0U2l6ZSIsIm91dHB1dCIsIndyaXRlIiwicmVhZCIsInRlbXAiLCJwYXNzIiwidGV4dHVyZSIsInJlbmRlciIsInN3YXBCdWZmZXJzIiwiZGVzdCIsIkN1c3RvbVBhc3MiLCJGWEFBUGFzcyIsIkFwcCIsInVpSGlkZGVuIiwiYmFja2dyb3VuZENvbG9yIiwiZmFjZXNDb250cm9sbGVyIiwia2V5Ym9hcmRDb250cm9sbGVyIiwicmVzaXplIiwiYmluZExpc3RlbmVycyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0Q2xlYXJDb2xvciIsInNoYWRvd01hcCIsIlBDRlNvZnRTaGFkb3dNYXAiLCJXQUdORVIiLCJ2ZXJ0ZXhTaGFkZXJzUGF0aCIsImZyYWdtZW50U2hhZGVyc1BhdGgiLCJjb21wb3NlciIsImJsb29tV2lkdGgiLCJpc1RvdWNoIiwiYmxvb21IZWlnaHQiLCJibG9vbVBhc3MiLCJNdWx0aVBhc3NCbG9vbVBhc3MiLCJwYXJhbXMiLCJzdHJlbmd0aCIsImJsdXJBbW91bnQiLCJhcHBseVpvb21CbHVyIiwiem9vbUJsdXJTdHJlbmd0aCIsInpvb21CbHVyQ2VudGVyIiwicmdiUGFzcyIsIlJHQlNwbGl0UGFzcyIsImRlbHRhIiwibm9pc2VQYXNzIiwiTm9pc2VQYXNzIiwiYW1vdW50IiwidmlnbmV0dGVQYXNzIiwiVmlnbmV0dGVQYXNzIiwiY3VzdG9tUGFzcyIsInNwbGl0RGVsdGEiLCJub2lzZUFtb3VudCIsIm5vaXNlU3BlZWQiLCJ2aWduZXR0ZUFtb3VudCIsInZpZ25ldHRlRmFsbG9mIiwiYnJpZ2h0bmVzcyIsImNvbnRyYXN0IiwiZnhhYVBhc3MiLCJGb2ciLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwibG9va0F0IiwiYWRkQ29udHJvbHMiLCJhZGRMaWdodHMiLCJhZGRFbGVtZW50cyIsIk9yYml0Q29udHJvbHMiLCJkaXZpc2F0b3IiLCJQbGFuZUdlb21ldHJ5Iiwib3RoZXJHZW9tZXRyeSIsImxlZnRSaWdodEdlb21ldHJ5IiwidG9wQm90dG9tR2VvbWV0cnkiLCJiYWNrZ3JvdW5kR2VvbWV0cnkiLCJQSSIsInJlZ2lzdGVyIiwic2VucyIsImRlbGF5IiwidG9TY3JlZW4iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiUmFuZ2UiLCJtaW5MZXZlbCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiY29udGV4dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImx1Y2t5IiwiY2hhbmNlcyIsIkNvcHlQYXNzIiwicmFuZG9tRnJvbUFycmF5IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNILG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFD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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnREFBZ0Q7O0FBRWhEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0NBQStDOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2Qzs7QUFFN0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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QUNBLEM7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7OztBQy9CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQzdFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoUEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTU1YjVkN2I4YzdhM2YzMDkxZjkiLCIvKipcbiAqIEV2ZW50cyBNYW5hZ2VyXG4gKiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gKi9cblxuY2xhc3MgRXZlbnRzTWFuYWdlciB7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0IGV2ZW50XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudCBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc3RhdGljIGVtaXQgKCBldmVudCwgZGF0YSA9IG51bGwgKSB7XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgICAgICBpZighbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoIGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkgbGlzdGVuZXJzW2ldLmZuKCBkYXRhICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBvbiAoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRXZlbnRzTWFuYWdlciA6OiBPTiA6OicsIGV2ZW50KTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0KSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3QgPSB7fTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSkgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSA9IFtdOyAvLyBpbXByb3ZlICguXy4pXG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XS5wdXNoKHtmbjpmbn0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIG9uY2UoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICggZGF0YSApID0+e1xuXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgZm4oZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdGVuZXIuXyA9IGZuO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKCBldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG9mZiAoIGV2ZW50LCBmbiApIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICAgICAgaWYoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHNNYW5hZ2VyIDo6IE9mZiA6OiBDdXJyZW50bHkgbm8gbGlzdGVuZXJzIGZvciB0aGlzIGV2ZW50IDogJywgZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V2ZW50c01hbmFnZXIgOjogT2ZmIDo6IENhbGxiYWNrIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RXZlbnRzID0gW107XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICBpZih0YXJnZXQuZm4gIT09IGZuICYmIHRhcmdldC5mbi5fICE9PSBmbiApIHsgLy8gKC5fXy4pID8/XG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnRzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYoIHRhcmdldEV2ZW50cy5sZW5ndGggPsKgMCApXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdID0gdGFyZ2V0RXZlbnRzO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c01hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIi8qKlxuICogRSBWIEUgTiBUIFNcbiAqL1xuXG5jb25zdCBFdmVudHMgPSB7XG4gICAgS0VZQk9BUkQ6IHtcbiAgICAgICAgS0VZRE9XTjogXCJLRVlCT0FSRF9LRVlET1dOXCIsXG4gICAgICAgIEtFWVVQOiBcIktFWUJPQVJEX0tFWVVQXCIsXG4gICAgICAgIEtFWVBSRVNTOiBcIktFWUJPQVJEX0tFWVBSRVNTXCIsXG4gICAgICAgIFNQQUNFSE9MRDogXCJLRVlCT0FSRF9TUEFDRUhPTERcIixcbiAgICAgICAgU1BBQ0VVUDogXCJLRVlCT0FSRF9TUEFDRVVQXCIsXG4gICAgICAgIFNQQUNFRE9XTjogXCJLRVlCT0FSRF9TUEFDRURPV05cIixcbiAgICB9LFxuICAgIFNPVU5EUzoge1xuICAgICAgICBDQU5QTEFZOiBcIlNPVU5EU19DQU5QTEFZXCIsXG4gICAgICAgIEVORDogXCJTT1VORFNfRU5EXCIsXG4gICAgICAgIExPV0tJQ0s6IFwiU09VTkRTX0xPV0tJQ0tcIixcbiAgICAgICAgTUlERExFS0lDSzogXCJTT1VORFNfTUlERExFS0lDS1wiLFxuICAgICAgICBISUdIS0lDSzogXCJTT1VORFNfSElHSEtJQ0tcIixcbiAgICAgICAgVFJFTU9MTzogXCJTT1VORFNfVFJFTU9MT1wiLFxuICAgICAgICBTVEFSVDogXCJTT1VORFNfU1RBUlRcIixcbiAgICAgICAgRU5EOiBcIlNPVU5EU19FTkRcIixcbiAgICB9LFxuICAgIFhQOiB7XG4gICAgICAgIFNUQVJUOiBcIlhQX1NUQVJUXCIsXG4gICAgICAgIEVORDogXCJYUF9FTkRcIixcbiAgICB9LFxuICAgIFVJOiB7XG4gICAgICAgIEhJRERFTjogXCJVSV9ISURERU5cIixcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbHMvbWFwJztcblxuY2xhc3MgQWJzdHJhY3RGYWNlIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgPSAweDI0MjQyNSwgbmFtZSwgc2lkZSA9IFRIUkVFLkZyb250U2lkZSApIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnBsYW5lR2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vblNwYWNlSG9sZCA9IDo6dGhpcy5vblNwYWNlSG9sZDtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25IaWRkZW5VSSA9IDo6dGhpcy5vbkhpZGRlblVJO1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKFRIUkVFLlNoYWRlckxpYlsncGhvbmcnXS51bmlmb3Jtcyk7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10gPSB7IHR5cGU6J2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ2RpZmZ1c2UnXSA9IHsgdHlwZTogJ2MnLCB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEpIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VXaWR0aCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cud2lkdGggfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUhlaWdodCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VMZW5ndGgnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93Lmxlbmd0aCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnN0YXJ0RGl2aXNpb25zID0gbmV3IFRIUkVFLlZlY3RvcjIoOSwgMTMpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0gW107XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjM7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5lYXNlID0gRXhwby5lYXNlT3V0O1xuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCB0aGlzLmRlYnVnICkge1xuICAgICAgICAgICAgdGhpcy5pbml0R3VpKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wnKSxcbiAgICAgICAgICAgIC8vIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS5mcmFnLmdsc2wnKSxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCcpLFxuICAgICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgICBsaWdodHM6IGZhbHNlLFxuICAgICAgICAgICAgc2lkZTogc2lkZSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgZm9nOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsYW5lR2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLm1lc2guY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHRoaXMubWVzaC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5tZXNoKTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgLy8gRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB0aGlzLm9uU3BhY2VIb2xkKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlVJLkhJRERFTiwgdGhpcy5vbkhpZGRlblVJKTtcbiAgICB9XG5cbiAgICBpbml0R3VpICggaXNPcGVuICkge1xuICAgICAgICB0aGlzLmd1aSA9IHdpbmRvdy5ndWkuYWRkRm9sZGVyKHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3gnLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geCcpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd5JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHknKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneicsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB6Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsICd4JywgMCwgMTAwKS5uYW1lKCdTcGFjZSB4Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsICd5JywgMCwgMTAwKS5uYW1lKCdTcGFjZSB5Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsICd6JywgMCwgMTAwKS5uYW1lKCdTcGFjZSB6Jyk7XG4gICAgICAgIFxuICAgICAgICBpc09wZW4gJiYgdGhpcy5ndWkub3BlbigpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoIHRpbWUgKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgPSB0aW1lO1xuICAgIH1cblxuICAgIHNldFBsYWluQ29sb3IgKCBjb2xvciApIHtcbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoMCwgMCk7XG4gICAgfVxuXG4gICAgc2V0U3RyaXBlcyAoIG9yaWVudGF0aW9uTmFtZSwgc2NhbGFyID0gMSwgZHVyYXRpb24gPSAyICkge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb25zW29yaWVudGF0aW9uTmFtZV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIG9yaWVudGF0aW9uICkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBvcmllbnRhdGlvbi5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHNjYWxhcik7IC8vIHJvc2FjZVxuXG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS54ID0gY2xvbmUueDtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnkgPSBjbG9uZS55O1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueiA9IGNsb25lLno7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXZlcnNlU3RyaXBlcyAoKSB7XG4gICAgICAgIC8vIHRoaXMuZmFjdG9yID0gLXRoaXMuZmFjdG9yO1xuICAgIH1cblxuICAgIGNoYW5nZVNwZWVkICggc3BlZWQgPSB0aGlzLnNwZWVkTWluICkge1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgfVxuXG4gICAgaW52ZXJ0ICgpIHtcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLmJsYWNrTW9kZSApIHtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0bC5hZGQodGhpcy5zaG93KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10udmFsdWUgPT09IDEuMCA/IDAuIDogMS47XG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogdG8sIGVhc2U6IHRoaXMuZWFzZSwgfSwgMCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlVmlzaWJpbGl0eSAoKSB7XG4gICAgICAgIGlmICggdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlICkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBkYXRhICkge1xuICAgICAgICBzd2l0Y2ggKCBkYXRhLmtleSApIHtcbiAgICAgICAgICAgIC8vIGNhc2UgJ3AnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0UGxhaW5Db2xvcigweDAwMDAwMCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ2gnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RyaXBlcygnaG9yaXpvbnRhbCcsIDEpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICd2JzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0cmlwZXMoJ3ZlcnRpY2FsJywgMSk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ2knOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuaW52ZXJ0KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ3InOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucmV2ZXJzZVN0cmlwZXMoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlUb2dnbGVyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eUhpZGVyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eVNob3dlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAxLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDAsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCB4LCB5LCBpbnZlcnQgPSB0cnVlICkge1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgdGhpcy5kdXJhdGlvbiwgeyB4OiB4LCB5OiB5LCBlYXNlOiB0aGlzLmVhc2UgfSwgMCk7XG5cbiAgICAgICAgLy8gaWYgKCBpbnZlcnQgKSB7XG4gICAgICAgIC8vICAgICB0bC5hZGQodGhpcy5pbnZlcnQoKSwgMCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxuXG4gICAgc2V0QmxhY2tNb2RlICgpIHtcbiAgICAgICAgdGhpcy5ibGFja01vZGUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDEuMCwgZWFzZTogdGhpcy5lYXNlLCB9KTtcbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIHVQcm9ncmVzcyApIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSB1UHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgb25FbmQgKCkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddLnZhbHVlID0gMC4wO1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMjtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgfX0pO1xuICAgICAgICB0bC5zZXQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCB7IHg6IDEsIHk6IDEsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCBkdXJhdGlvbiwgeyB2YWx1ZTogMC4wLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLmZyb21Ubyh0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXSwgZHVyYXRpb24sIHsgdmFsdWU6IDEuOCB9LCB7IHZhbHVlOiAwLjAsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddLnZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10udmFsdWUgPSAwLjA7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIG9uSGlkZGVuVUkgKCkge1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdEZhY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJjbGFzcyBQYXNzIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIGZyYWdtZW50U2hhZGVyLCB2ZXJ0ZXhTaGFkZXIsIHVuaWZvcm1zID0ge30gKXtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudFNoYWRlcjtcblx0XHR0aGlzLnZlcnRleFNoYWRlciA9IHZlcnRleFNoYWRlcjtcblxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHJlc29sdXRpb246IHsgdHlwZTogJ3YyJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxLCAxICkgfSxcblx0XHRcdHRpbWU6IHsgdHlwZTogJ2YnLCB2YWx1ZTogMCB9LFxuXHRcdFx0dElucHV0OiB7IHR5cGU6ICd0JywgdmFsdWU6IG5ldyBUSFJFRS5UZXh0dXJlKCksIGRlZmF1bHQ6IHRydWUgfSxcblx0XHRcdC4uLnVuaWZvcm1zLFxuXHRcdH07XG5cblx0XHR0aGlzLnNoYWRlciA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoYC4uL3NoYWRlcnMvJHt0aGlzLnZlcnRleFNoYWRlcn1gKSxcblx0XHRcdGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKGAuLi9zaGFkZXJzLyR7dGhpcy5mcmFnbWVudFNoYWRlcn1gKSxcblx0XHRcdHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuXHRcdFx0ZmxhdFNoYWRpbmc6IHRydWUsXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcblx0XHRcdGRlcHRoVGVzdDogZmFsc2UsXG5cdFx0XHR0cmFuc3BhcmVudDogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vY29yZS9QYXNzLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgV2ViTWlkaSBmcm9tICd3ZWJtaWRpJztcblxuZnVuY3Rpb24gbWFwKG4sIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgICByZXR1cm4gKChuLXN0YXJ0MSkvKHN0b3AxLXN0YXJ0MSkpKihzdG9wMi1zdGFydDIpK3N0YXJ0Mjtcbn1cblxuY2xhc3MgTWlkaUNvbnRyb2xsZXIge1xuXG5cdHN0YXRpYyBzdGFydCAoIGNvbmZpZyApIHtcblx0XHRNaWRpQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBNaWRpQ29udHJvbGxlcihjb25maWcpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IgKCBjb25maWcgKSB7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cblx0XHR0aGlzLnBhZHMgPSB7fTtcblx0XHR0aGlzLmtub2JzID0ge307XG5cblx0XHR0aGlzLm9uU3VjY2VzcyA9IDo6dGhpcy5vblN1Y2Nlc3M7XG5cdFx0dGhpcy5vbkVycm9yID0gOjp0aGlzLm9uRXJyb3I7XG5cdFx0dGhpcy5vbk1lc3NhZ2UgPSA6OnRoaXMub25NZXNzYWdlO1xuXG5cdFx0V2ViTWlkaS5lbmFibGUoICggZXJyICkgPT4ge1xuXHRcdFx0aWYgKCBlcnIgKSB7XG5cdFx0XHRcdHRoaXMub25FcnJvcihlcnIpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9uU3VjY2VzcygpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVxdWVzdEFjY2VzcyAoKSB7XG4gICAgICAgIGlmICggbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzICkge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKHtcbiAgICAgICAgICAgICAgICBzeXNleDogZmFsc2VcbiAgICAgICAgICAgIH0pLnRoZW4odGhpcy5vblN1Y2Nlc3MsIHRoaXMub25FcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChgWW91IGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSBNSURJIEFQSS5gKTtcbiAgICAgICAgfVxuXHR9XG5cblx0b25TdWNjZXNzICgpIHtcblx0XHRpZiAoIFdlYk1pZGkuaW5wdXRzLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdHRoaXMuaW5wdXQgPSBXZWJNaWRpLmlucHV0c1swXTtcblxuXHRcdFx0dGhpcy5wYXJzZUNvbmZpZygpO1xuXG5cdFx0XHR0aGlzLmlucHV0LmFkZExpc3RlbmVyKCdub3Rlb24nLCAnYWxsJywgKCBlICkgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5wYWRzKTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGtleXNbaV07XG5cdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaXB0aW9ucyA9IHRoaXMucGFkc1trZXldO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwOyBqIDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IGorKyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgbnVtYmVyLCBjaGFubmVsLCBjYWxsYmFjayB9ID0gc3Vic2NyaXB0aW9uc1tqXTtcblxuXHRcdFx0XHRcdFx0aWYgKCBlLm5vdGUubnVtYmVyID09PSBudW1iZXIgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKHsgdmVsb2NpdHk6IGUudmVsb2NpdHkgfSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC5hZGRMaXN0ZW5lcigncGl0Y2hiZW5kJywgJ2FsbCcsICggZSApID0+IHtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmlucHV0LmFkZExpc3RlbmVyKCdjb250cm9sY2hhbmdlJywgJ2FsbCcsICggZSApID0+IHtcblx0XHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua25vYnMpO1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0ga2V5c1tpXTtcblx0XHRcdFx0XHRjb25zdCBzdWJzY3JpcHRpb25zID0gdGhpcy5rbm9ic1trZXldO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwOyBqIDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IGorKyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgbnVtYmVyLCBjaGFubmVsLCBjYWxsYmFjayB9ID0gc3Vic2NyaXB0aW9uc1tqXTtcblxuXHRcdFx0XHRcdFx0aWYgKCBlLmNvbnRyb2xsZXIubnVtYmVyID09PSBudW1iZXIgKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbWFwKGUudmFsdWUsIDAsIDEyNywgMCwgMSk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlQ29uZmlnICgpIHtcblx0XHQvLyB0aGlzLnBhZHMgPSB0aGlzLmNvbmZpZy5wYWRzO1xuXHRcdC8vIHRoaXMua25vYnMgPSB0aGlzLmNvbmZpZy5rbm9icztcblx0fVxuXG5cdG9uRXJyb3IgKCBlcnJvciApIHtcblx0XHRjb25zb2xlLmVycm9yKGBNaWRpQ29udHJvbGxlciA6OiBlcnJvciB3aGlsZSByZXF1ZXN0aW5nIE1JREkgYWNjZXNzLmApO1xuXHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XG5cdH1cblxuXHRvbk1lc3NhZ2UgKCBldmVudCApIHtcblx0XHRjb25zb2xlLmxvZyhgTWlkaUNvbnRyb2xsZXIgOjogb25NZXNzYWdlYCwgZXZlbnQpO1xuXHR9XG5cblx0c3RhdGljIG9uUGFkRG93biAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRjb25zdCB7IGluc3RhbmNlIH0gPSBNaWRpQ29udHJvbGxlcjtcblxuXHRcdGluc3RhbmNlLnJlZ2lzdGVyUGFkKGlkLCBjYWxsYmFjayk7XG5cdH1cblxuXHRzdGF0aWMgb25Lbm9iQ2hhbmdlICggaWQsIGNhbGxiYWNrICkge1xuXHRcdGNvbnN0IHsgaW5zdGFuY2UgfSA9IE1pZGlDb250cm9sbGVyO1xuXG5cdFx0aW5zdGFuY2UucmVnaXN0ZXJLbm9iKGlkLCBjYWxsYmFjayk7XG5cdH1cblxuXHRyZWdpc3RlclBhZCAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRpZiAoICF0aGlzLnBhZHNbaWRdICkge1xuXHRcdFx0dGhpcy5wYWRzW2lkXSA9IFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZmluZE51bWJlckluUGFkcyhpZCk7XG5cblx0XHRpZiAoIG51bWJlciApIHtcblx0XHRcdGlmICggdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHR0aGlzLnBhZHNbaWRdLnB1c2goeyBjYWxsYmFjaywgbnVtYmVyIH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaWRpQ29udHJvbGxlciA6OiBvblBhZERvd24gJHtpZH0gOjogY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgUGFkICR7aWR9IG5vdCByZWdpc3RlcmVkIGluIGNvbmZpZ2ApO1xuXHRcdH1cblx0fVxuXG5cdHJlZ2lzdGVyS25vYiAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRpZiAoICF0aGlzLmtub2JzW2lkXSApIHtcblx0XHRcdHRoaXMua25vYnNbaWRdID0gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5maW5kTnVtYmVySW5Lbm9icyhpZCk7XG5cblx0XHRpZiAoIG51bWJlciApIHtcblx0XHRcdGlmICggdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHR0aGlzLmtub2JzW2lkXS5wdXNoKHsgY2FsbGJhY2ssIG51bWJlciB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlkaUNvbnRyb2xsZXIgOjogb25Lbm9iQ2hhbmdlICR7aWR9IDo6IGNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uYCk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBNaWRpQ29udHJvbGxlcjogS25vYiAke2lkfSBub3QgcmVnaXN0ZXJlZCBpbiBjb25maWdgKTtcblx0XHR9XG5cdH1cblxuXHRmaW5kTnVtYmVySW5QYWRzICggaWQgKSB7XG5cdFx0Y29uc3QgeyBwYWRzIH0gPSB0aGlzLmNvbmZpZztcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHBhZHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRpZiAoIHBhZHNbaV0uaWQgPT09IGlkICkge1xuXHRcdFx0XHRyZXR1cm4gcGFkc1tpXS5udW1iZXI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZmluZE51bWJlckluS25vYnMgKCBpZCApIHtcblx0XHRjb25zdCB7IGtub2JzIH0gPSB0aGlzLmNvbmZpZztcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGtub2JzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0aWYgKCBrbm9ic1tpXS5pZCA9PT0gaWQgKSB7XG5cdFx0XHRcdHJldHVybiBrbm9ic1tpXS5udW1iZXI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNaWRpQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL01pZGlDb250cm9sbGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwIChuLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgcmV0dXJuICgobiAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKSAqIChzdG9wMiAtIHN0YXJ0MikgKyBzdGFydDI7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvbWFwLmpzIiwiLy8gc291cmNlZCBmcm9tOlxuLy8gaHR0cDovL3d3dy5sZWFuYmFja3BsYXllci5jb20vdGVzdC9oNW10Lmh0bWxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS1taW1lL2Jsb2IvbWFzdGVyL3R5cGVzLmpzb25cbnZhciBtaW1lVHlwZXMgPSByZXF1aXJlKCcuL21pbWUtdHlwZXMuanNvbicpXG5cbnZhciBtaW1lTG9va3VwID0ge31cbk9iamVjdC5rZXlzKG1pbWVUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciBleHRlbnNpb25zID0gbWltZVR5cGVzW2tleV1cbiAgZXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChleHQpIHtcbiAgICBtaW1lTG9va3VwW2V4dF0gPSBrZXlcbiAgfSlcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9va3VwIChleHQpIHtcbiAgaWYgKCFleHQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3BlY2lmeSBleHRlbnNpb24gc3RyaW5nJylcbiAgaWYgKGV4dC5pbmRleE9mKCcuJykgPT09IDApIHtcbiAgICBleHQgPSBleHQuc3Vic3RyaW5nKDEpXG4gIH1cbiAgcmV0dXJuIG1pbWVMb29rdXBbZXh0LnRvTG93ZXJDYXNlKCldXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWZ1bmN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUF1ZGlvQ29udGV4dFxuZnVuY3Rpb24gY3JlYXRlQXVkaW9Db250ZXh0ICgpIHtcbiAgdmFyIEF1ZGlvQ3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICByZXR1cm4gbmV3IEF1ZGlvQ3RvcigpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYXVkaW8tY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxvb2t1cCA9IHJlcXVpcmUoJ2Jyb3dzZXItbWVkaWEtbWltZS10eXBlJylcbnZhciBhdWRpb1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3JjUGxheWFibGVcbmZ1bmN0aW9uIGlzU3JjUGxheWFibGUgKHNyYykge1xuICBpZiAoIXNyYykgdGhyb3cgbmV3IFR5cGVFcnJvcignc3JjIGNhbm5vdCBiZSBlbXB0eScpXG4gIHZhciB0eXBlXG4gIGlmICh0eXBlb2Ygc3JjLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIDxzb3VyY2U+IGVsZW1lbnRcbiAgICB0eXBlID0gc3JjLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAnZm9vLm1wMycgc3RyaW5nXG4gICAgdmFyIGV4dCA9IGV4dGVuc2lvbihzcmMpXG4gICAgaWYgKGV4dCkgdHlwZSA9IGxvb2t1cChleHQpXG4gIH0gZWxzZSB7XG4gICAgLy8geyBzcmM6ICdmb28ubXAzJywgdHlwZTogJ2F1ZGlvL21wZWc7IGNvZGVjcy4uJ31cbiAgICB0eXBlID0gc3JjLnR5cGVcbiAgfVxuXG4gIC8vIFdlIGhhdmUgYW4gdW5rbm93biBmaWxlIGV4dGVuc2lvbiBvclxuICAvLyBhIDxzb3VyY2U+IHRhZyB3aXRob3V0IGFuIGV4cGxpY2l0IHR5cGUsXG4gIC8vIGp1c3QgbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdCFcbiAgaWYgKCF0eXBlKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIGhhbmRsZSBcIm5vXCIgZWRnZSBjYXNlIHdpdGggc3VwZXIgbGVnYWN5IGJyb3dzZXJzLi4uXG4gIC8vIGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vZm9ydW0vIyF0b3BpYy9nb29nbGUtd2ViLXRvb2xraXQtY29udHJpYnV0b3JzL2E4VXkwYlhxMUhvXG4gIGlmICghYXVkaW8pIGF1ZGlvID0gbmV3IHdpbmRvdy5BdWRpbygpXG4gIHZhciBjYW5wbGF5ID0gYXVkaW8uY2FuUGxheVR5cGUodHlwZSkucmVwbGFjZSgvbm8vLCAnJylcbiAgcmV0dXJuIEJvb2xlYW4oY2FucGxheSlcbn1cblxubW9kdWxlLmV4cG9ydHMuY3JlYXRlRXJyb3IgPSBjcmVhdGVFcnJvclxuZnVuY3Rpb24gY3JlYXRlRXJyb3IgKHNvdXJjZXMpIHtcbiAgLy8gQWxsIHNvdXJjZXMgYXJlIHVucGxheWFibGVcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYW55IG9mIHRoZSBmb2xsb3dpbmcgc291cmNlczpcXG4gICAgJyArXG4gICAgICBzb3VyY2VzLmpvaW4oJywgJykgKyAnXFxuJyArXG4gICAgICAnVHJ5IHVzaW5nIGFuIGFycmF5IG9mIE9HRywgTVAzIGFuZCBXQVYuJylcbiAgZXJyLnR5cGUgPSAnQVVESU9fRk9STUFUJ1xuICByZXR1cm4gZXJyXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoZXh0SWR4ICsgMSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGF1ZGlvQ29udGV4dCkge1xuICBpZiAoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJyAmJlxuICAgICAgdHlwZW9mIGF1ZGlvQ29udGV4dC5yZXN1bWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhdWRpb0NvbnRleHQucmVzdW1lKClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3Jlc3VtZS1jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWRkaXRpdmUuZnNcIjogNjAsXG5cdFwiLi9iYXNpYy52c1wiOiA2MSxcblx0XCIuL2Jsb29tLmZzXCI6IDYyLFxuXHRcIi4vYmxvb20yLmZzXCI6IDYzLFxuXHRcIi4vYmxvb210ZXN0LmZzXCI6IDY0LFxuXHRcIi4vYm94LWJsdXIuZnNcIjogNjUsXG5cdFwiLi9jb3B5LmZzXCI6IDY2LFxuXHRcIi4vY3VzdG9tLmZzXCI6IDY3LFxuXHRcIi4vZG9mLmZzXCI6IDY4LFxuXHRcIi4vZnhhYS5mc1wiOiA2OSxcblx0XCIuL2dhdXNzaWFuLmZzXCI6IDcwLFxuXHRcIi4vbm9pc2UuZnNcIjogNzEsXG5cdFwiLi9yYWRpYWwtYmx1ci5mc1wiOiA3Mixcblx0XCIuL3NlcGlhLmZzXCI6IDczLFxuXHRcIi4vc3Nhby5mc1wiOiA3NFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgcmFuZG9tRnJvbUFycmF5IGZyb20gJy4vdXRpbHMvcmFuZG9tRnJvbUFycmF5JztcbmltcG9ydCBsdWNreSBmcm9tICcuL3V0aWxzL2x1Y2t5JztcbmltcG9ydCBtYXAgZnJvbSAnLi91dGlscy9tYXAnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IE1pZGlDb250cm9sbGVyIGZyb20gJy4vdXRpbHMvTWlkaUNvbnRyb2xsZXInO1xuXG5jbGFzcyBGYWNlc0NvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgICB0aGlzLmZhY2VzID0ge307XG4gICAgICAgIHRoaXMuZGl2aXNpb25zID0ge1xuICAgICAgICAgICAgeDogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hbGxvd0ludmVydCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50aW1lID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMDtcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxLjA7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdFNwYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWdoa2lja2VkID0gMDtcbiAgICAgICAgdGhpcy5sb3draWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuY3VycmVudEJsYWNrTW9kZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFNjYWxlTW9kZSA9IDA7XG5cbiAgICAgICAgLy8gb24gZXZlbnRzXG4gICAgICAgIHRoaXMub25Mb3dLaWNrID0gOjp0aGlzLm9uTG93S2ljaztcbiAgICAgICAgdGhpcy5vbk1pZGRsZUtpY2sgPSA6OnRoaXMub25NaWRkbGVLaWNrO1xuICAgICAgICB0aGlzLm9uSGlnaEtpY2sgPSA6OnRoaXMub25IaWdoS2ljaztcbiAgICAgICAgdGhpcy5vblRyZW1vbG8gPSA6OnRoaXMub25UcmVtb2xvO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vblVJSGlkZGVuID0gOjp0aGlzLm9uVUlIaWRkZW47XG4gICAgICAgIHRoaXMub25Tb3VuZEVuZCA9IDo6dGhpcy5vblNvdW5kRW5kO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25TcGFjZURvd24gPSA6OnRoaXMub25TcGFjZURvd247XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuICAgICAgICB0aGlzLm9uU3BhY2VIb2xkID0gOjp0aGlzLm9uU3BhY2VIb2xkO1xuXG4gICAgICAgIC8vIGJsYWNrIG1vZGVzXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwgPSA6OnRoaXMuYmxhY2tNb2RlVmVydGljYWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlSG9yaXpvbnRhbCA9IDo6dGhpcy5ibGFja01vZGVIb3Jpem9udGFsO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcCA9IDo6dGhpcy5ibGFja01vZGVUdW5uZWxUb3A7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbEJvdHRvbTtcbiAgICAgICAgdGhpcy5ibGFja01vZGVCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlQm90dG9tO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwgPSA6OnRoaXMuYmxhY2tNb2RlRnVsbDtcblxuICAgICAgICB0aGlzLmJsYWNrTW9kZXMgPSBbXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVZlcnRpY2FsLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVIb3Jpem9udGFsLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIHJlYWN0aW9uc1xuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucyA9IDo6IHRoaXMudXBkYXRlRGl2aXNpb25zO1xuICAgICAgICB0aGlzLnNldEJsYWNrTW9kZSA9IDo6dGhpcy5zZXRCbGFja01vZGU7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGUgPSA6OnRoaXMuY2hhbmdlU2NhbGU7XG5cbiAgICAgICAgdGhpcy5yZWFjdGlvbnMgPSBbXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucyxcbiAgICAgICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGVYID0gOjp0aGlzLmNoYW5nZVNjYWxlWDtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVkgPSA6OnRoaXMuY2hhbmdlU2NhbGVZO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlQm90aCA9IDo6dGhpcy5jaGFuZ2VTY2FsZUJvdGg7XG5cbiAgICAgICAgLy8gc2NhbGVzXG4gICAgICAgIHRoaXMuc2NhbGluZ3MgPSBbXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWSxcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVYLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZUJvdGgsXG4gICAgICAgIF07XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5MT1dLSUNLLCB0aGlzLm9uTG93S2ljayk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5NSURETEVLSUNLLCB0aGlzLm9uTWlkZGxlS2ljayk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5ISUdIS0lDSywgdGhpcy5vbkhpZ2hLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLlRSRU1PTE8sIHRoaXMub25UcmVtb2xvKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkVORCwgdGhpcy5vblNvdW5kRW5kKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG5cbiAgICAgICAgLy8gdGhpcy51cGRhdGVEaXZpc2lvbnMgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZURpdmlzaW9ucywgNDAwKTtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VTY2FsZSA9IGRlYm91bmNlKHRoaXMuY2hhbmdlU2NhbGUsIDQwMCk7XG4gICAgICAgIC8vIHRoaXMuc2V0QmxhY2tNb2RlID0gZGVib3VuY2UodGhpcy5zZXRCbGFja01vZGUsIDQwMCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDMsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1pZGlDb250cm9sbGVyLm9uUGFkRG93big0LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gLXRoaXMuc3BlZWRDb250YWluZXI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1pZGlDb250cm9sbGVyLm9uUGFkRG93big1LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC10aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDYsICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0uaW52ZXJ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25Lbm9iQ2hhbmdlKDEsICggdmFsdWUgKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNwZWVkQ29udGFpbmVyIDwgMCA/IC0xIDogMTtcblxuICAgICAgICAgICAgdGhpcy5zcGVlZENvbnRhaW5lciA9IHZhbHVlICogMiAqIGRpcmVjdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25Lbm9iQ2hhbmdlKDIsICggdmFsdWUgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gdmFsdWUgKiAxMjtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZWdpc3RlciAoIGlkLCBmYWNlICkge1xuICAgICAgICB0aGlzLmZhY2VzW2lkXSA9IGZhY2U7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZChmYWNlKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURpdmlzaW9ucyAoIG1pbiwgbWF4LCBiZXR3ZWVuID0gNCApIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gWzBdO1xuXG4gICAgICAgIGZvciAoIGxldCBpID0gbWluOyBpIDw9IG1heDsgaSs9IGJldHdlZW4gKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIGxldCBpID0gbWF4OyBpID49IG1pbjsgaS09IGJldHdlZW4gKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdmlzaW9ucy5wdXNoKDApO1xuXG4gICAgICAgIHJldHVybiBkaXZpc2lvbnM7XG4gICAgfVxuXG4gICAgdXBkYXRlRGl2aXNpb25zICgpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVEaXZpc2lvblggPSB0aGlzLmZpbmREaXZpc2lvbnModGhpcy5kaXZpc2lvbnMueCwgdGhpcy5kaXZpc2lvbnMubGFzdFgsIDgpO1xuICAgICAgICBjb25zdCByZG1YSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZURpdmlzaW9uWC5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkaXZpc2lvblggPSBwb3NzaWJsZURpdmlzaW9uWFtyZG1YSW5kZXhdO1xuXG4gICAgICAgIHRoaXMuZGl2aXNpb25zLmxhc3RYID0gdGhpcy5kaXZpc2lvbnMueC5pbmRleE9mKGRpdmlzaW9uWCk7XG5cbiAgICAgICAgY29uc3QgcG9zc2libGVEaXZpc2lvblkgPSB0aGlzLmZpbmREaXZpc2lvbnModGhpcy5kaXZpc2lvbnMueSwgdGhpcy5kaXZpc2lvbnMubGFzdFksIDgpO1xuICAgICAgICBjb25zdCByZG1ZSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZURpdmlzaW9uWS5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkaXZpc2lvblkgPSBwb3NzaWJsZURpdmlzaW9uWVtyZG1ZSW5kZXhdO1xuXG4gICAgICAgIHRoaXMuZGl2aXNpb25zLmxhc3RZID0gdGhpcy5kaXZpc2lvbnMueS5pbmRleE9mKGRpdmlzaW9uWSk7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnVwZGF0ZURpdmlzaW9ucyhkaXZpc2lvblgsIGRpdmlzaW9uWSwgdGhpcy5hbGxvd0ludmVydCksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlc1trZXldLnNldFN0cmlwZXMoJ2hvcml6b250YWwnLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZERpdmlzaW9ucyAoIGFsbCwgY3VycmVudCwgcmFuZ2UgKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IGFsbC5tYXAoICggZGl2aXNpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIGluZGV4ID4gY3VycmVudCAtIHJhbmdlICYmIGluZGV4IDwgY3VycmVudCArIHJhbmdlICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXZpc2lvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5maWx0ZXIoICggaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdmlzaW9ucztcbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZGF0YSApIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgfHwgd2luZG93LnNvdW5kRW5kZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGtleSB9ID0gZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmICgga2V5ID09PSAnZCcgKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBrZXkgPT09ICdlJyApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ3gnICkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZENvbnRhaW5lciA9ICF0aGlzLnNwZWVkQ29udGFpbmVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb3dLaWNrICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZG0gPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgIGlmICggcmRtID4gMC42IHx8ICF0aGlzLmxvd2tpY2tlZCApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIHJkbSA+IDAuMiApIHtcbiAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb3draWNrZWQrKztcbiAgICB9XG5cbiAgICBvbkhpZ2hLaWNrICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMS4xO1xuXG4gICAgICAgIGlmICggdGhpcy5oaWdoa2lja2VkICUgMiA9PT0gMCApIHtcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yID0gLXRoaXMuZmFjdG9yO1xuICAgICAgICB9IFxuXG4gICAgICAgIHRoaXMuaGlnaGtpY2tlZCsrO1xuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDMsIDksIDIpLFxuICAgICAgICAgICAgeTogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucygxLCAxMywgMiksXG4gICAgICAgICAgICBsYXN0WDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAyLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCxcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB0aGlzLnNldEJsYWNrTW9kZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG5cbiAgICAgICAgLy8gY29uc3QgcmVhY3Rpb24gPSByYW5kb21Gcm9tQXJyYXkodGhpcy5yZWFjdGlvbnMpO1xuICAgICAgICAvLyByZWFjdGlvbigpO1xuICAgIH1cblxuICAgIG9uTWlkZGxlS2ljayAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNSURETEVLSUNLJyk7XG4gICAgfVxuXG4gICAgb25UcmVtb2xvICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1RyZW1vbG9vb28nKTtcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuRU5EKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMC4wO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMC4wO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5vbkVuZCgpLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QmxhY2tNb2RlICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QmxhY2tNb2RlKys7XG5cbiAgICAgICAgaWYgKCB0aGlzLmN1cnJlbnRCbGFja01vZGUgPiB0aGlzLmJsYWNrTW9kZXMubGVuZ3RoIC0gMSApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJsYWNrTW9kZSA9IDA7XG4gICAgICAgIH1cbiBcbiAgICAgICAgY29uc3QgYmxhY2tNb2RlID0gdGhpcy5ibGFja01vZGVzW3RoaXMuY3VycmVudEJsYWNrTW9kZV07XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBibGFja01vZGUoKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIGlmICggb3B0aW9uc1trZXldID09PSAwICkge1xuICAgICAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0uaGlkZSgpLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5zaG93KCksIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnNldEJsYWNrTW9kZSgpLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVmVydGljYWwgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAxLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUhvcml6b250YWwgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZVR1bm5lbFRvcCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsQm90dG9tICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgICAgYm90dG9tOiAxLFxuICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBibGFja01vZGVCb3R0b20gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUZ1bGwgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAxLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NhbGVNb2RlKytcblxuICAgICAgICBpZiAoIHRoaXMuY3VycmVudFNjYWxlTW9kZSA+IHRoaXMuc2NhbGluZ3MubGVuZ3RoIC0gMSApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjYWxlTW9kZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGluZ3NbdGhpcy5jdXJyZW50U2NhbGVNb2RlXTtcblxuICAgICAgICBzY2FsZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlWCAoKSB7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgoMC41LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKiAwLjEpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuY29udGFpbmVyLnNjYWxlLCAwLjMsIHsgeDogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZVkgKCkge1xuICAgICAgICBjb25zdCB0byA9IE1hdGgubWF4KDAuNSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICogMC4xKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmNvbnRhaW5lci5zY2FsZSwgMC4zLCB7IHk6IHRvLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGVCb3RoICgpIHtcbiAgICAgICAgY29uc3QgdG8gPSBNYXRoLm1heCgwLjUsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSAqIDAuMSk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiB0bywgeTogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvblVJSGlkZGVuICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sncmlnaHQnXS5zaG93KCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5yZXNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgeTogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICBsYXN0WDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20sXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50aW1lID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMC4wO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkICogMC4xICogdGhpcy5kaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJvdGF0aW9uLnogKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkQ29udGFpbmVyICogMC4wMDU7XG5cbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWydib3R0b20nXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICAgICAgdGhpcy5mYWNlc1sndG9wJ10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzU3BhY2VEb3duICYmIHRoaXMuZmlyc3RTcGFjZVVwICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmZhY3RvciA9IC10aGlzLmZhY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZUhvbGQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IHByb2dyZXNzIH0gPSBkYXRhO1xuXG4gICAgICAgIGNvbnN0IHVQcm9ncmVzcyA9IG1hcChwcm9ncmVzcywgMCwgMSwgMCwgMS44KTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0ub25TcGFjZUhvbGQodVByb2dyZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIC8vIHRoaXMuc3BlZWQgPSAxMi4wO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMsIDEsIHsgc3BlZWQ6IDEyLCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2VzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIi8qKlxuICogTW91c2UgTWFuYWdlclxuICovXG5cbmNsYXNzIE1vdXNlTWFuYWdlciB7XG5cblxuICAgIHN0YXRpYyBzdGFydCggY2hlY2tNb3VzZVNwZWVkID0gZmFsc2UgKSB7XG5cbiAgICAgICAgLy8gc3BlZWRcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRZID0gMDtcblxuICAgICAgICB3aW5kb3cubW91c2VMYXN0WCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RZID0gMDtcblxuICAgICAgICAvLyBkaXJlY3Rpb25cbiAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAwO1xuXG4gICAgICAgIC8vIHBvc2l0aW9uXG4gICAgICAgIHdpbmRvdy5tb3VzZVggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VZID0gMDtcblxuICAgICAgICBpZihjaGVja01vdXNlU3BlZWQpIHdpbmRvdy5zZXRJbnRlcnZhbCggTW91c2VNYW5hZ2VyLmdldFNwZWVkLCAzMCApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBNb3VzZU1hbmFnZXIubW92ZSApO1xuICAgIH1cblxuICAgIHN0YXRpYyBtb3ZlKGUpIHtcblxuICAgICAgICB3aW5kb3cubW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICB3aW5kb3cubW91c2VZID0gZS5jbGllbnRZO1xuXG4gICAgICAgIE1vdXNlTWFuYWdlci5nZXREaXJlY3Rpb24oZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERpcmVjdGlvbihlKSB7XG5cbiAgICAgICAgLy8geFxuICAgICAgICBpZiAod2luZG93Lm1vdXNlWCA8IGUucGFnZVgpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm1vdXNlWCA+IGUucGFnZVgpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gLTE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAwO1xuXG4gICAgICAgIC8vIHlcbiAgICAgICAgaWYgKHdpbmRvdy5tb3VzZVkgPCBlLnBhZ2VZKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDE7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5tb3VzZVkgPiBlLnBhZ2VZKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IC0xO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3BlZWQoKSB7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWCA9IHdpbmRvdy5tb3VzZVggLSB3aW5kb3cubW91c2VMYXN0WDtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRZID0gd2luZG93Lm1vdXNlWSAtIHdpbmRvdy5tb3VzZUxhc3RZO1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RYID0gd2luZG93Lm1vdXNlWDtcbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFkgPSB3aW5kb3cubW91c2VZO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW91c2VNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vTW91c2VNYW5hZ2VyLmpzIiwiY29uc3QgY29uZmlnID0ge1xuICAgIHBhZHM6IFtcbiAgICAgICAgeyBpZDogMSwgbnVtYmVyOiA0NCB9LFxuICAgICAgICB7IGlkOiAyLCBudW1iZXI6IDQ1IH0sXG4gICAgICAgIHsgaWQ6IDMsIG51bWJlcjogNDYgfSxcbiAgICAgICAgeyBpZDogNCwgbnVtYmVyOiA0NyB9LFxuICAgICAgICB7IGlkOiA1LCBudW1iZXI6IDQ4IH0sXG4gICAgICAgIHsgaWQ6IDYsIG51bWJlcjogNDkgfSxcbiAgICAgICAgeyBpZDogNywgbnVtYmVyOiA1MCB9LFxuICAgICAgICB7IGlkOiA4LCBudW1iZXI6IDUxIH0sXG4gICAgXSxcbiAgICBrbm9iczogW1xuICAgICAgICB7IGlkOiAxLCBudW1iZXI6IDEgfSxcbiAgICAgICAgeyBpZDogMiwgbnVtYmVyOiAyIH0sXG4gICAgICAgIHsgaWQ6IDMsIG51bWJlcjogMyB9LFxuICAgICAgICB7IGlkOiA0LCBudW1iZXI6IDQgfSxcbiAgICAgICAgeyBpZDogNSwgbnVtYmVyOiA1IH0sXG4gICAgICAgIHsgaWQ6IDYsIG51bWJlcjogNiB9LFxuICAgICAgICB7IGlkOiA3LCBudW1iZXI6IDcgfSxcbiAgICAgICAgeyBpZDogOCwgbnVtYmVyOiA4IH0sXG4gICAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vY29uZmlnL01QS01pbmkuanMiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4uL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBLZXlib2FyZENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gOjp0aGlzLm9uS2V5UHJlc3M7XG4gICAgICAgIHRoaXMub25LZXlEb3duID0gOjp0aGlzLm9uS2V5RG93bjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICBvbktleVVwICggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELktFWVVQLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvbktleURvd24gKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZRE9XTiwgeyBrZXkgfSk7XG5cbiAgICAgICAgaWYgKCBrZXkgPT09ICcgJyApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB7IGtleSB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JhY2tncm91bmQnKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQm90dG9tIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdib3R0b20nKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoLTMsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzInO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICczJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzEnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQm90dG9tLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIExlZnQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2xlZnQnKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAyMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnNCc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzEnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMyc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvTGVmdC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBSaWdodCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAncmlnaHQnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0yMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MjogbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnNic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzEnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMyc7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgVG9wIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICd0b3AnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMjAsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc4JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMyc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICcxJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1RvcC5qcyIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnd2ViLWF1ZGlvLXBsYXllcic7XG5pbXBvcnQgY3JlYXRlQW5hbHlzZXIgZnJvbSAnd2ViLWF1ZGlvLWFuYWx5c2VyJztcbmltcG9ydCBhdmVyYWdlIGZyb20gJ2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlJztcbmltcG9ydCBSYW5nZSBmcm9tICcuL1JhbmdlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbi8vIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG5cbmNsYXNzIFNvdW5kTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYmFzcyA9IDA7XG4gICAgICAgIHRoaXMubWlkQmFzcyA9IDA7XG4gICAgICAgIHRoaXMudm9pY2UgPSAwO1xuICAgICAgICB0aGlzLmRydW0gPSAwO1xuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hc3NldHMgPSAnYXNzZXRzL3NvdW5kcyc7XG4gICAgICAgIHRoaXMuc291cmNlcyA9IHtcbiAgICAgICAgICAgIGludHJvOiAnaW50cm8ubXAzJyxcbiAgICAgICAgICAgIHhwOiAneHAubXAzJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gOjp0aGlzLnN0YXJ0O1xuICAgICAgICB0aGlzLm9uU3BhY2VIb2xkID0gOjp0aGlzLm9uU3BhY2VIb2xkO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25TcGFjZURvd24gPSA6OnRoaXMub25TcGFjZURvd247XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdEd1aSgpO1xuXG4gICAgICAgIGNvbnN0IGxvd0tpY2sgPSBuZXcgUmFuZ2UoJ2xvd0tpY2snLCBbMTEwLCAxMzBdLCA2MDAsIEV2ZW50cy5TT1VORFMuTE9XS0lDSyk7XG4gICAgICAgIGNvbnN0IG1pZGRsZUtpY2sgPSBuZXcgUmFuZ2UoJ21pZGRsZUtpY2snLCBbMjcwLCAyOTBdLCA2MDAsIEV2ZW50cy5TT1VORFMuTUlERExFS0lDSywgMC4zKTtcbiAgICAgICAgY29uc3QgdHJlbW9sbyA9IG5ldyBSYW5nZSgndHJlbW9sbycsIFs0ODAsIDUyMF0sIDEwMCwgRXZlbnRzLlNPVU5EUy5UUkVNT0xPKTtcbiAgICAgICAgY29uc3QgaGlnaEtpY2sgPSBuZXcgUmFuZ2UoJ2hpZ2hLaWNrJywgWzE1MDAsIDM1MDBdLCA4MDAsIEV2ZW50cy5TT1VORFMuSElHSEtJQ0ssIDAuNSk7XG5cbiAgICAgICAgdGhpcy5yYW5nZXMgPSBbbG93S2ljaywgaGlnaEtpY2ssIHRyZW1vbG8sIG1pZGRsZUtpY2tdO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5TVEFSVCwgdGhpcy5zdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgdGhpcy5vblNwYWNlSG9sZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgaW5pdEd1aSAoKSB7XG4gICAgICAgIHRoaXMuc291bmRHdWkgPSB3aW5kb3cuZ3VpLmFkZEZvbGRlcignU291bmQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXVzZSA9IHRoaXMuc291bmRHdWkuYWRkKHRoaXMsICdwYXVzZScpO1xuICAgICAgICBwYXVzZS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZSkgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0U291bmQgKCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZXMpLm1hcCggKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhdWRpbzogbnVsbCxcbiAgICAgICAgICAgICAgICBhbmFseXNlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBub2RlOiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSA9IDA7XG4gICAgICAgICAgICBhdWRpby5jcm9zc09yaWdpbiA9ICdBbm9ueW1vdXMnO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQgPyBuZXcgQXVkaW9Db250ZXh0KCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuYWx5c2VyID0gY3JlYXRlQW5hbHlzZXIoYXVkaW8sIGF1ZGlvQ29udGV4dCwgeyBhdWRpYmxlOiB0cnVlLCBzdGVyZW86IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmFuYWx5c2VyID0gYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubm9kZSA9IGFuYWx5c2VyLmFuYWx5c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5DQU5QTEFZLCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5TT1VORFMuRU5ELCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gYCR7dGhpcy5hc3NldHN9LyR7dGhpcy5zb3VyY2VzW2tleV19YDtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYXVkaW8gPSBhdWRpbztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgaWYgKCBwbGF5ZXIubG9hZGVkICkge1xuICAgICAgICAgICAgcGxheWVyLmF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXJzWyd4cCddLmxvYWRlZCApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYW5hbHlzZXIsIG5vZGUgfSA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICAgICAgY29uc3QgZnJlcXMgPSBhbmFseXNlci5mcmVxdWVuY2llcygpO1xuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnJhbmdlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gYXZlcmFnZShub2RlLCBmcmVxcywgcmFuZ2UuZnJlcXNbMF0sIHJhbmdlLmZyZXFzWzFdKTtcblxuICAgICAgICAgICAgICAgIHJhbmdlLnVwZGF0ZShsZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgdm9sdW1lIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCB7IGF1ZGlvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG5cbiAgICAgICAgYXVkaW8udm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odm9sdW1lICogMC41LCAxKSk7XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiBpbnRybyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiB4cCB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgIHhwLnZvbHVtZSA9IDE7XG4gICAgICAgIHhwLnBsYXkoKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bC50byhpbnRybywgMC41LCB7IHZvbHVtZTogMCwgZWFzZTogRXhwby5lYXNlT3V0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBpbnRyby5wYXVzZSgpO1xuICAgICAgICB9fSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1NvdW5kTWFuYWdlci5qcyIsInZhciBxdWV1ZSA9IHt9O1xuXG4vKlxuKiogYWxsb3cgYW55IG51bWJlciB2YXJpYWJsZSB0byBiZSBzbW9vdGhlZFxuKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBhIHVuaXF1ZSBuYW1lIGZvciB5b3VyIHNtb290aGluZ1xuKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB0aGUgdmFsdWUgeW91IHdhbnQgdG8gYmUgc21vb3RoZWRcbiogQHBhcmFtIHtudW1iZXJ9IGNvZWZmIChvcHRpb25hbCkgLSB0aGUgc21vb3RoaW5nIGNvZWZmaWNpZW50LCB0aGUgc21hbGxlciwgdGhlIHNsb3dlci4gRGVmYXVsdDogMC4xXG4qIEBwYXJhbSB7Ym9vbGVhbn0gbG9nIChvcHRpb25hbCkgLSBlaXRoZXIgdGhlIHNtb290aGVkIHZhbHVlIGlzIGxvZyBpbiB0aGUgY29uc29sZS4gRGVmYXVsdDogZmFsc2VcbiogQHBhcmFtIHtudW1iZXJ9IGluaXQgKG9wdGlvbmFsKSAtIHRoZSBzdGFydGluZyB2YWx1ZSBvZiB0aGUgc21vb3RoaW5nLiBEZWZhdWx0OiAwXG4qIEByZXR1cm4ge251bWJlcn0gdGhlIHNtb290aGVkIHZhbHVlXG4qKi9cblxuZnVuY3Rpb24gc21vb3RoICggaWQsIHZhbHVlLCBjb2VmZiA9IDAuMSwgbG9nID0gZmFsc2UsIGluaXQgPSAwICkge1xuXHRpZiAoIHF1ZXVlW2lkXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdHF1ZXVlW2lkXSArPSAoIHZhbHVlIC0gcXVldWVbaWRdICkgKiBjb2VmZjtcblxuXHRcdGlmICggbG9nICkge1xuXHRcdFx0Y29uc29sZS5sb2coYCVjU21vb3RoICR7aWR9IDo6ICR7cXVldWVbaWRdfWAsICdjb2xvcjogYmx1ZTsnKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkID09PSAnJyApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU21vb3RoIDo6IGlkIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0XHR9XG5cblx0XHRxdWV1ZVtpZF0gPSBpbml0O1xuXHR9XG5cblx0cmV0dXJuIHF1ZXVlW2lkXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNtb290aDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3Ntb290aC5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBVSSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLWludHJvJyk7XG4gICAgICAgIHRoaXMuJGxvZ28gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fbG9nbycpO1xuICAgICAgICB0aGlzLiRhY3Rpb24gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYWN0aW9uJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbkxhYmVsID0gdGhpcy4kYWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25fX2xhYmVsJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbkZpbGwgPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25fX2ZpbGwnKTtcbiAgICAgICAgdGhpcy4kdHV0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0tdHV0bycpO1xuICAgICAgICB0aGlzLiRjcmVkaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS1jcmVkaXRzJyk7XG4gICAgICAgIHRoaXMuJGNyZWRpdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWRpdHNfX2l0ZW0nKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NGaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19wcm9ncmVzc19fZmlsbCcpO1xuICAgICAgICB0aGlzLiRoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19oZWxwJyk7XG4gICAgICAgIHRoaXMuJGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX2JhY2tncm91bmQnKTtcblxuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubWF4VGltZSA9IDMwMDA7XG4gICAgICAgIHRoaXMuaGVscElzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1pbkZpbGwgPSAwLjAxO1xuICAgICAgICB0aGlzLm1heEZpbGwgPSAxO1xuICAgICAgICB0aGlzLmZpbGwgPSB0aGlzLm1pbkZpbGw7XG5cbiAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSA1O1xuXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IDo6dGhpcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6IHRoaXMub25Db21wbGV0ZSB9KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uLCB7IHZvbHVtZTogMSwgZWFzZTogTGluZWFyLmVhc2VOb25lICB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRwcm9ncmVzc0ZpbGwsIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgxKWAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGFjdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kbG9nbywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IHByb2dyZXNzOiAxLCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjQpO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHR1dG8sIHRoaXMuZHVyYXRpb24gKiAwLjc1LCB7IGNzczogeyBzY2FsZTogMS41IH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjc1KTtcbiAgICAgICAgdGhpcy50bC5zZXQodGhpcywgeyBwcm9ncmVzczogMCB9KTtcbiAgICAgICAgLy8gdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBwcm9ncmVzczogMC40NCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjk4KTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uRW5kWFAgPSA6OnRoaXMub25FbmRYUDtcbiAgICAgICAgdGhpcy5vbkNsaWNrSGVscCA9IDo6dGhpcy5vbkNsaWNrSGVscDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB0aGlzLm9uS2V5RG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVVQLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQLCB0aGlzLm9uU3BhY2VVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLkVORCwgdGhpcy5vbkVuZFhQKTtcblxuICAgICAgICB0aGlzLnRsSGVscFNob3cgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscElzT3BlbiA9IHRydWU7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGhpcy50bEhlbHBTaG93LnRvKHRoaXMuJHR1dG8sIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0aGlzLnRsSGVscFNob3cudG8odGhpcy4kYmFja2dyb3VuZCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICB0aGlzLnRsSGVscEhpZGUgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscElzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9fSk7XG4gICAgICAgIHRoaXMudGxIZWxwSGlkZS50byh0aGlzLiR0dXRvLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0aGlzLnRsSGVscEhpZGUudG8odGhpcy4kYmFja2dyb3VuZCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICB0aGlzLiRoZWxwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrSGVscCk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgeyBwcm9ncmVzczogdGhpcy5wcm9ncmVzcywgdm9sdW1lOiB0aGlzLnZvbHVtZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXkgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy4kd3JhcHBlciwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMuJHdyYXBwZXIsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duICggZGF0YSApIHtcblxuICAgIH1cblxuICAgIG9uS2V5VXAgKCBkYXRhICkge1xuXG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgJiYgdGhpcy5pc0Rvd24gJiYgIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50bC50aW1lU2NhbGUoNCk7XG4gICAgICAgICAgICB0aGlzLnRsLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgJiYgIXRoaXMuaXNEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50bC50aW1lU2NhbGUoMSk7XG4gICAgICAgICAgICB0aGlzLnRsLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUgKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzQ29tcGxldGVkICkge1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMsIHsgcHJvZ3Jlc3M6IDAgfSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kY3JlZGl0SXRlbXMsIHsgY3NzOiB7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX0pO1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJGNyZWRpdHMsIHsgY3NzOiB7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19KTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRwcm9ncmVzc0ZpbGwsIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgwKWB9fSk7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRoZWxwLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuXG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuU1RBUlQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUNyZWRpdHMgKCkge1xuICAgICAgICB0aGlzLiRjcmVkaXRzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIHRoaXMuJGFjdGlvbkxhYmVsLmlubmVySFRNTCA9ICdIb2xkIHNwYWNlYmFyIHRvIHJlc3RhcnQnO1xuXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50bC5raWxsKCk7XG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6IHRoaXMub25Db21wbGV0ZSB9KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uLCB7IHZvbHVtZTogMSwgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRwcm9ncmVzc0ZpbGwsIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgxKWAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGNyZWRpdHMsIHRoaXMuZHVyYXRpb24sIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjUsIHsgcHJvZ3Jlc3M6IDEsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjUpO1xuXG4gICAgICAgIGlmICggdGhpcy5oZWxwSXNPcGVuICkge1xuICAgICAgICAgICAgdGhpcy50bEhlbHBIaWRlLnJlc3RhcnQoKTsgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMjtcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuc3RhZ2dlckZyb21UbyhBcnJheS5mcm9tKHRoaXMuJGNyZWRpdEl0ZW1zKSwgZHVyYXRpb24sIHsgY3NzOiB7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX0sIHsgY3NzOiB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIGR1cmF0aW9uICogMC4wNSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMuJGhlbHAsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMuJGFjdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnJlc2V0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMudm9sdW1lID0gMDtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMjtcbiAgICB9XG5cbiAgICBvbkVuZFhQICgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q3JlZGl0cygpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tIZWxwICggZXZlbnQgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICF0aGlzLmhlbHBJc09wZW4gKSB7XG4gICAgICAgICAgICB0aGlzLiRoZWxwLmlubmVySFRNTCA9ICdYJztcblxuICAgICAgICAgICAgdGhpcy50bEhlbHBTaG93LnJlc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGhlbHAuaW5uZXJIVE1MID0gJz8nO1xuXG4gICAgICAgICAgICB0aGlzLnRsSGVscEhpZGUucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdWkuanMiLCJpbXBvcnQgQ29weVBhc3MgZnJvbSAnLi9wYXNzZXMvQ29weVBhc3MnO1xuaW1wb3J0IFBhc3MgZnJvbSAnLi9jb3JlL1Bhc3MnO1xuXG5mdW5jdGlvbiByZW1vdmVOaWwgKCBhcyA9IFtdICkge1xuICAgIHJldHVybiBhcy5maWx0ZXIoYSA9PiBhICE9IG51bGwpO1xufVxuXG5mdW5jdGlvbiBtZXJnZSAoLi4uYXJncykge1xuICAgIGNvbnN0IGZpbHRlcmVkID0gcmVtb3ZlTmlsKGFyZ3MpO1xuICAgIFxuICAgIGlmICggZmlsdGVyZWQubGVuZ3RoIDwgMSApIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBcbiAgICBpZiAoIGZpbHRlcmVkLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoY3VyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIGFjY1trZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY3VyW2tleV0gPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgICAgIGFjY1trZXldID0gbWVyZ2UoYWNjW2tleV0sIGN1cltrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSBjdXJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn1cblxuY2xhc3MgQ29tcG9zZXIge1xuXG5cdGNvbnN0cnVjdG9yICggcmVuZGVyZXIsIG9wdHMgPSB7fSApIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxuXHRcdFx0bWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXG5cdFx0XHR3cmFwUzogVEhSRUUuQ2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0XHRcdHdyYXBUOiBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nLFxuXHRcdFx0Zm9ybWF0OiBUSFJFRS5SR0JGb3JtYXQsXG5cdFx0XHR0eXBlOiBUSFJFRS5VbnNpZ25lZEJ5dGVUeXBlLFxuXHRcdFx0c3RlbmNpbEJ1ZmZlcjogdHJ1ZVxuXHRcdH07XG5cblx0XHRjb25zdCBvcHRpb25zID0gbWVyZ2UoZGVmYXVsdHMsIG9wdHMpO1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG5cdFx0dGhpcy5mcm9udCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCgxLCAxLCBvcHRpb25zKTtcblx0XHR0aGlzLmJhY2sgPSB0aGlzLmZyb250LmNsb25lKCk7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAxLCAxLCAxLCAxLCAtMTAwMDAsIDEwMDAwKTtcblxuXHRcdHRoaXMuZGVmYXVsdE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XG5cdFx0dGhpcy5xdWFkID0gbmV3IFRIUkVFLk1lc2goXG5cdFx0XHRuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMSwgMSApLFxuXHRcdFx0dGhpcy5kZWZhdWx0TWF0ZXJpYWxcblx0XHQpO1xuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucXVhZCk7XG5cblx0XHR0aGlzLmNvcHlQYXNzID0gbmV3IENvcHlQYXNzKCk7XG5cblx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XG5cdH1cblxuXHRzZXRTaXplICggdywgaCApIHtcblx0XHR0aGlzLndpZHRoID0gdztcblx0XHR0aGlzLmhlaWdodCA9IGg7XG5cblx0XHR0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4Lm1ha2VPcnRob2dyYXBoaWMoIHcgLyAtIDIsIHcgLyAyLCBoIC8gMiwgaCAvIC0gMiwgdGhpcy5jYW1lcmEubmVhciwgdGhpcy5jYW1lcmEuZmFyICk7XG5cdFx0dGhpcy5xdWFkLnNjYWxlLnNldCggdywgaCwgMSApO1xuXG5cdFx0dGhpcy5mcm9udC5zZXRTaXplKCB3LCBoICk7XG5cdFx0dGhpcy5iYWNrLnNldFNpemUoIHcsIGggKTtcblx0fVxuXG5cdHN3YXBCdWZmZXJzICgpIHtcblx0XHR0aGlzLm91dHB1dCA9IHRoaXMud3JpdGU7XG5cdFx0dGhpcy5pbnB1dCA9IHRoaXMucmVhZDtcblxuXHRcdGNvbnN0IHRlbXAgPSB0aGlzLndyaXRlO1xuXHRcdHRoaXMud3JpdGUgPSB0aGlzLnJlYWQ7XG5cdFx0dGhpcy5yZWFkID0gdGVtcDtcblx0fVxuXG5cdHBhc3MgKCBwYXNzLCB0YXJnZXQgKSB7XG5cdFx0aWYgKCBwYXNzIGluc3RhbmNlb2YgUGFzcyAmJiBwYXNzLmVuYWJsZWQgKSB7XG5cdFx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSBwYXNzLnNoYWRlcjtcblx0XHRcdHRoaXMucXVhZC5tYXRlcmlhbC51bmlmb3Jtcy50SW5wdXQudmFsdWUgPSB0aGlzLnJlYWQudGV4dHVyZTtcblx0XHRcdHRoaXMucXVhZC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cblx0XHRcdGlmICggdGFyZ2V0ICkge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGFyZ2V0LCB0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLndyaXRlLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuc3dhcEJ1ZmZlcnMoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIgKCBzY2VuZSwgY2FtZXJhLCB0YXJnZXQgKcKge1xuXHRcdGNvbnN0IGRlc3QgPSB0YXJnZXQgPyB0YXJnZXQgOiB0aGlzLndyaXRlO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgZGVzdCwgdHJ1ZSk7XG5cdFx0dGhpcy5zd2FwQnVmZmVycygpO1xuXHR9XG5cblx0cmVzZXQgKCkge1xuXHRcdHRoaXMucmVhZCA9IHRoaXMuZnJvbnQ7XG5cdFx0dGhpcy53cml0ZSA9IHRoaXMuYmFjaztcblxuXHRcdHRoaXMub3V0cHV0ID0gdGhpcy53cml0ZTtcblx0XHR0aGlzLmlucHV0ID0gdGhpcy5yZWFkO1xuXHR9XG5cblx0dG9TY3JlZW4gKCBwYXNzLCB0YXJnZXQgKSB7XG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gcGFzcyA/IHBhc3Muc2hhZGVyIDogdGhpcy5jb3B5UGFzcy5zaGFkZXI7XG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsLnVuaWZvcm1zLnRJbnB1dC52YWx1ZSA9IHRoaXMucmVhZC50ZXh0dXJlO1xuXHRcdHRoaXMucXVhZC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKTtcblxuXHRcdGlmICggdGFyZ2V0ICkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRhcmdldCwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vQ29tcG9zZXIuanMiLCJpbXBvcnQgUGFzcyBmcm9tICcuLi9jb3JlL1Bhc3MnO1xuXG5jbGFzcyBDdXN0b21QYXNzIGV4dGVuZHMgUGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIG9wdGlvbnMgKSB7XG4gICAgICAgIHN1cGVyKCdDdXN0b21QYXNzJywgJ2N1c3RvbS5mcycsICdiYXNpYy52cycsIG9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudW5pZm9ybXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSArPSAwLjAxNjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUGFzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vcGFzc2VzL0N1c3RvbVBhc3MuanMiLCJpbXBvcnQgUGFzcyBmcm9tICcuLi9jb3JlL1Bhc3MnO1xuXG5jbGFzcyBGWEFBUGFzcyBleHRlbmRzIFBhc3Mge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcignRlhBQVBhc3MnLCAnZnhhYS5mcycsICdiYXNpYy52cycsIHt9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRlhBQVBhc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3Bhc3Nlcy9GWEFBUGFzcy5qcyIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZlxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JhZi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiggVEhSRUUgKSB7XG5cdC8qKlxuXHQgKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuXHQgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG5cdCAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG5cdCAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuXHQgKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG5cdCAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5cdGZ1bmN0aW9uIE9yYml0Q29udHJvbHMoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0XHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0XHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHRcdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5ab29tID0gMDtcblx0XHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0XHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0XHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0XHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0XHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHRcdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0XHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdFx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdFx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdFx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0XHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdFx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHRcdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0XHQvLyBNb3VzZSBidXR0b25zXG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHRcdC8vIGZvciByZXNldFxuXHRcdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdFx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHRcdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdFx0Ly9cblx0XHQvLyBwdWJsaWMgbWV0aG9kc1xuXHRcdC8vXG5cblx0XHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fTtcblxuXHRcdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0XHR9O1xuXG5cdFx0Ly9cblx0XHQvLyBpbnRlcm5hbHNcblx0XHQvL1xuXG5cdFx0dmFyIHNjb3BlID0gdGhpcztcblxuXHRcdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0XHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHRcdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHRcdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHRcdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0XHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHRcdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdFx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdFx0dmFyIHNjYWxlID0gMTtcblx0XHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdFx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR9XG5cblx0XHQvL1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHR9O1xuXG5cdE9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuXHRPcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9yYml0Q29udHJvbHM7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0XHRjZW50ZXI6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdG5vWm9vbToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1JvdGF0ZToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1Bhbjoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub0tleXM6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSApO1xuXG5cdHJldHVybiBPcmJpdENvbnRyb2xzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aHJlZS1vcmJpdC1jb250cm9scy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZXF1ZW5jeVRvSW5kZXggPSByZXF1aXJlKCdhdWRpby1mcmVxdWVuY3ktdG8taW5kZXgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDI1NSlcbm1vZHVsZS5leHBvcnRzLmZsb2F0RGF0YSA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDEpXG5cbmZ1bmN0aW9uIGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZSAoZGl2LCBhbmFseXNlciwgZnJlcXVlbmNpZXMsIG1pbkh6LCBtYXhIeikge1xuICB2YXIgc2FtcGxlUmF0ZSA9IGFuYWx5c2VyLmNvbnRleHQuc2FtcGxlUmF0ZVxuICB2YXIgYmluQ291bnQgPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudFxuICB2YXIgc3RhcnQgPSBmcmVxdWVuY3lUb0luZGV4KG1pbkh6LCBzYW1wbGVSYXRlLCBiaW5Db3VudClcbiAgdmFyIGVuZCA9IGZyZXF1ZW5jeVRvSW5kZXgobWF4SHosIHNhbXBsZVJhdGUsIGJpbkNvdW50KVxuICB2YXIgY291bnQgPSBlbmQgLSBzdGFydFxuICB2YXIgc3VtID0gMFxuICBmb3IgKDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcbiAgICBzdW0gKz0gZnJlcXVlbmNpZXNbc3RhcnRdIC8gZGl2XG4gIH1cbiAgcmV0dXJuIGNvdW50ID09PSAwID8gMCA6IChzdW0gLyBjb3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmFseXNlci1mcmVxdWVuY3ktYXZlcmFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZXF1ZW5jeVRvSW5kZXhcbmZ1bmN0aW9uIGZyZXF1ZW5jeVRvSW5kZXggKGZyZXF1ZW5jeSwgc2FtcGxlUmF0ZSwgZnJlcXVlbmN5QmluQ291bnQpIHtcbiAgdmFyIG55cXVpc3QgPSBzYW1wbGVSYXRlIC8gMlxuICB2YXIgaW5kZXggPSBNYXRoLnJvdW5kKGZyZXF1ZW5jeSAvIG55cXVpc3QgKiBmcmVxdWVuY3lCaW5Db3VudClcbiAgcmV0dXJuIGNsYW1wKGluZGV4LCAwLCBmcmVxdWVuY3lCaW5Db3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vZmFjZXMvQmFja2dyb3VuZCc7XG5pbXBvcnQgVG9wIGZyb20gJy4vZmFjZXMvVG9wJztcbmltcG9ydCBMZWZ0IGZyb20gJy4vZmFjZXMvTGVmdCc7XG5pbXBvcnQgUmlnaHQgZnJvbSAnLi9mYWNlcy9SaWdodCc7XG5pbXBvcnQgQm90dG9tIGZyb20gJy4vZmFjZXMvQm90dG9tJztcblxuaW1wb3J0IHNtb290aCBmcm9tICcuL3Ntb290aCc7XG5pbXBvcnQgRmFjZXNDb250cm9sbGVyIGZyb20gJy4vRmFjZXNDb250cm9sbGVyJztcbmltcG9ydCBNb3VzZU1hbmFnZXIgZnJvbSAnLi9Nb3VzZU1hbmFnZXInO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xuaW1wb3J0IE1QS01pbmkgZnJvbSAnLi9jb25maWcvTVBLTWluaSc7XG5pbXBvcnQgTWlkaUNvbnRyb2xsZXIgZnJvbSAnLi91dGlscy9NaWRpQ29udHJvbGxlcic7XG5pbXBvcnQgQ29tcG9zZXIgZnJvbSAnLi91dGlscy9wb3N0cHJvL0NvbXBvc2VyJztcbmltcG9ydCBDdXN0b21QYXNzIGZyb20gJy4vdXRpbHMvcG9zdHByby9wYXNzZXMvQ3VzdG9tUGFzcyc7XG5pbXBvcnQgRlhBQVBhc3MgZnJvbSAnLi91dGlscy9wb3N0cHJvL3Bhc3Nlcy9GWEFBUGFzcyc7XG5cbmNsYXNzIEFwcCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gMHgwMDAwMDA7XG5cdFx0XG4gICAgICAgIE1vdXNlTWFuYWdlci5zdGFydCgpO1xuICAgICAgICBNaWRpQ29udHJvbGxlci5zdGFydChNUEtNaW5pKTtcblxuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlciA9IG5ldyBGYWNlc0NvbnRyb2xsZXIoKTtcblxuICAgICAgICB0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcblx0XHRcdFxuXHRcdHRoaXMucmVzaXplID0gOjp0aGlzLnJlc2l6ZTtcblx0XHR0aGlzLnVwZGF0ZSA9IDo6dGhpcy51cGRhdGU7XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMucmVzZXQgPSA6OnRoaXMucmVzZXQ7XG5cdFx0XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5iaW5kTGlzdGVuZXJzKCk7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcywgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogZmFsc2UgfSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gZmFsc2U7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cdFx0XG5cdFx0V0FHTkVSLnZlcnRleFNoYWRlcnNQYXRoID0gJ2pzL3ZlcnRleC1zaGFkZXJzJztcblx0XHRXQUdORVIuZnJhZ21lbnRTaGFkZXJzUGF0aCA9ICdqcy9mcmFnbWVudC1zaGFkZXJzJztcblxuXHRcdHRoaXMuY29tcG9zZXIgPSBuZXcgQ29tcG9zZXIodGhpcy5yZW5kZXJlcik7XG5cdFx0dGhpcy5jb21wb3Nlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG5cdFx0Y29uc3QgYmxvb21XaWR0aCA9IHdpbmRvdy5pc1RvdWNoID8gMjU2IDogNTEyO1xuICAgICAgICBjb25zdCBibG9vbUhlaWdodCA9IHdpbmRvdy5pc1RvdWNoID8gMjU2IDogNTEyO1xuXG5cdFx0dGhpcy5ibG9vbVBhc3MgPSBuZXcgV0FHTkVSLk11bHRpUGFzc0Jsb29tUGFzcyhibG9vbVdpZHRoLCBibG9vbUhlaWdodCk7XG5cdFx0dGhpcy5ibG9vbVBhc3MucGFyYW1zLnN0cmVuZ3RoID0gNTAuMDtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLmJsdXJBbW91bnQgPSA1LjtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLmFwcGx5Wm9vbUJsdXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuem9vbUJsdXJTdHJlbmd0aCA9IDMuMDtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLnpvb21CbHVyQ2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjIoIDAuNSwgMC41ICk7XG5cbiAgICAgICAgdGhpcy5yZ2JQYXNzID0gbmV3IFdBR05FUi5SR0JTcGxpdFBhc3MoKTtcbiAgICAgICAgdGhpcy5yZ2JQYXNzLnBhcmFtcy5kZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKDIwLCAyMCk7XG5cbiAgICAgICAgdGhpcy5ub2lzZVBhc3MgPSBuZXcgV0FHTkVSLk5vaXNlUGFzcygpO1xuICAgICAgICB0aGlzLm5vaXNlUGFzcy5wYXJhbXMuYW1vdW50ID0gMC4yNTtcbiAgICAgICAgdGhpcy5ub2lzZVBhc3MucGFyYW1zLnNwZWVkID0gMC4yO1xuXG4gICAgICAgIHRoaXMudmlnbmV0dGVQYXNzID0gbmV3IFdBR05FUi5WaWduZXR0ZVBhc3MoKTtcbiAgICAgICAgdGhpcy52aWduZXR0ZVBhc3MucGFyYW1zLmFtb3VudCA9IDAuNztcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuZnhhYVBhc3MgPSBuZXcgV0FHTkVSLkZYQUFQYXNzKCk7XG5cbiAgICAgICAgdGhpcy5jdXN0b21QYXNzID0gbmV3IEN1c3RvbVBhc3Moe1xuICAgICAgICAgICAgc3RyZW5ndGg6IDUwLFxuICAgICAgICAgICAgYmx1ckFtb3VudDogNSxcbiAgICAgICAgICAgIGFwcGx5Wm9vbUJsdXI6IHRydWUsXG4gICAgICAgICAgICB6b29tQmx1clN0cmVuZ3RoOiB7IHZhbHVlOiAzIH0sXG4gICAgICAgICAgICB6b29tQmx1ckNlbnRlcjogbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAwLjUpLFxuXG4gICAgICAgICAgICBzcGxpdERlbHRhOiB7IHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigzMCwgMzApIH0sXG5cbiAgICAgICAgICAgIG5vaXNlQW1vdW50OiB7IHZhbHVlOiAwLjI1IH0sXG4gICAgICAgICAgICBub2lzZVNwZWVkOiB7IHZhbHVlOiAwLjIgfSxcblxuICAgICAgICAgICAgdmlnbmV0dGVBbW91bnQ6IHsgdmFsdWU6IDAuOCB9LFxuICAgICAgICAgICAgdmlnbmV0dGVGYWxsb2Y6IHsgdmFsdWU6IDAuMSB9LFxuXG4gICAgICAgICAgICBicmlnaHRuZXNzOiB7IHZhbHVlOiAwLjIgfSxcbiAgICAgICAgICAgIGNvbnRyYXN0OiB7IHZhbHVlOiAwLjkgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5meGFhUGFzcyA9IG5ldyBGWEFBUGFzcygpO1xuXG5cdFx0dGhpcy53aWR0aCA9IHdpbmRvdy53aWR0aCA9IDYwO1xuXHRcdHRoaXMuaGVpZ2h0ID0gd2luZG93LmhlaWdodCA9IDYwO1xuXHRcdHRoaXMubGVuZ3RoID0gd2luZG93Lmxlbmd0aCA9IDYwMDtcblxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwMDAwMCwgMC44LCB0aGlzLmxlbmd0aCAqIC45OCApO1xuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAwO1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcblxuXG4gICAgICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5hZGRMaWdodHMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgXHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0YmluZExpc3RlbmVycyAoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uVUlIaWRkZW4pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5FTkQsIHRoaXMucmVzZXQpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuU1RBUlQpO1xuXHR9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHdpbmRvdy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuc291bmRFbmRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25VSUhpZGRlbiAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cdGFkZENvbnRyb2xzICgpIHtcblx0XHRjb25zdCBPcmJpdENvbnRyb2xzID0gcmVxdWlyZSgndGhyZWUtb3JiaXQtY29udHJvbHMnKShUSFJFRSk7XG5cdFx0Ly8gdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0fVxuXG5cdGFkZExpZ2h0cyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyBsaWdodHMnKTtcblx0XHQvLyB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweEZGRkZGRik7XG5cdFx0Ly8gdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgXHRcdC8vIGNvbnN0IHBvaW50TGlnaHQzID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4ZmZmZmZmLCA3LjEsIDApO1xuICBcdFx0Ly8gcG9pbnRMaWdodDMucG9zaXRpb24ueCA9IDBcbiAgXHRcdC8vIHBvaW50TGlnaHQzLnBvc2l0aW9uLnkgPSA0O1xuICBcdFx0Ly8gcG9pbnRMaWdodDMucG9zaXRpb24ueiA9IDYwO1xuXG4gIFx0XHQvLyB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0Myk7XG5cdH1cblxuXHRhZGRFbGVtZW50cyAoKSB7XG5cdFx0dGhpcy5kaXZpc2F0b3IgPSAyO1xuXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLmxlbmd0aCwgdGhpcy53aWR0aCwgMSwgMSk7XG4gICAgICAgIHRoaXMub3RoZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMubGVuZ3RoLCAzMiwgMzIpO1xuXG5cdFx0dGhpcy5sZWZ0UmlnaHRHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMubGVuZ3RoLCB0aGlzLmhlaWdodCwgTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIHRoaXMuZGl2aXNhdG9yKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuZGl2aXNhdG9yKSApO1xuXHRcdHRoaXMudG9wQm90dG9tR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmxlbmd0aCwgTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5kaXZpc2F0b3IpICwgTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIHRoaXMuZGl2aXNhdG9yKSk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5kaXZpc2F0b3IgKiAyKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuZGl2aXNhdG9yICogMikgKTtcblxuXHRcdHRoaXMubGVmdCA9IG5ldyBMZWZ0KHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLmxlZnQucm90YXRpb24ueSA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5sZWZ0LnBvc2l0aW9uLnggPSAtdGhpcy53aWR0aCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2xlZnQnLCB0aGlzLmxlZnQpXG5cblx0XHR0aGlzLnJpZ2h0ID0gbmV3IFJpZ2h0KHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLnJpZ2h0LnJvdGF0aW9uLnkgPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMucmlnaHQucG9zaXRpb24ueCA9IHRoaXMud2lkdGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdyaWdodCcsIHRoaXMucmlnaHQpXG5cblx0XHR0aGlzLmJvdHRvbSA9IG5ldyBCb3R0b20odGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMuYm90dG9tLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgdGhpcy5ib3R0b20ucm90YXRpb24ueiA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5ib3R0b20ucG9zaXRpb24ueSA9IC10aGlzLmhlaWdodCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2JvdHRvbScsIHRoaXMuYm90dG9tKVxuXG5cdFx0dGhpcy50b3AgPSBuZXcgVG9wKHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLnRvcC5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjU7XG4gICAgICAgIHRoaXMudG9wLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMudG9wLnBvc2l0aW9uLnkgPSB0aGlzLmhlaWdodCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ3RvcCcsIHRoaXMudG9wKTtcblxuXHRcdC8vIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMuYmFja2dyb3VuZEdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0Ly8gdGhpcy5iYWNrZ3JvdW5kLnBvc2l0aW9uLnogPSAtdGhpcy5sZW5ndGggKiAwLjU7XG4gIC8vICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdiYWNrZ3JvdW5kJywgdGhpcy5iYWNrZ3JvdW5kKTtcblxuXHRcdHRoaXMuZmFjZXNDb250cm9sbGVyLmNvbnRhaW5lci5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5mYWNlc0NvbnRyb2xsZXIuY29udGFpbmVyKTtcblx0fVxuXG4gICAgcm90YXRlICgpIHtcbiAgICAgICAgY29uc3Qgc2VucyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgIH1cblxuXHR1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci51cGRhdGUoKTtcblxuICAgICAgICB0aGlzLmN1c3RvbVBhc3MudXBkYXRlKCk7XG5cblx0XHR0aGlzLmNvbXBvc2VyLnJlc2V0KCk7XG5cdFx0dGhpcy5jb21wb3Nlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgICAgICAvLyB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy5ibG9vbVBhc3MpO1xuICAgICAgICAvLyB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy5yZ2JQYXNzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMubm9pc2VQYXNzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMudmlnbmV0dGVQYXNzKTtcbiAgICAgICAgLy8gdGhpcy5jb21wb3Nlci50b1NjcmVlbih0aGlzLmZ4YWFQYXNzKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMuY3VzdG9tUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIudG9TY3JlZW4odGhpcy5meGFhUGFzcyk7XG5cblx0XHQvLyB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG5cblx0XHRyYWYodGhpcy51cGRhdGUpO1xuXHR9XG5cblx0cmVzaXplICgpIHtcblx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblx0fVxuXG59XG5cbm5ldyBBcHAoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL01haW4uanMiLCJpbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIFJhbmdlIHtcblxuICAgIGNvbnN0cnVjdG9yICggbmFtZSwgZnJlcXMsIGRlbHRhLCBldmVudCwgbWluTGV2ZWwgPSAwLjUgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZnJlcXMgPSBmcmVxcztcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLm1pbkxldmVsID0gbWluTGV2ZWw7XG5cbiAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCBsZXZlbCApIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lO1xuXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcblxuICAgICAgICBpZiAoIGRlbHRhID4gdGhpcy5kZWx0YSAmJiB0aGlzLmxldmVsID4gdGhpcy5taW5MZXZlbCApIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdCh0aGlzLmV2ZW50KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCB0aGlzLm5hbWUgPT09ICdoaWdoS2ljaycgKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxldmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1JhbmdlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICBsZXQgdGltZW91dFxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKSwgd2FpdClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvZGVib3VuY2UuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsdWNreSAoIGNoYW5jZXMgKSB7XG4gICAgcmV0dXJuICF+fihNYXRoLnJhbmRvbSgpICogY2hhbmNlcyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9sdWNreS5qcyIsImltcG9ydCBQYXNzIGZyb20gJy4uL2NvcmUvUGFzcyc7XG5cbmNsYXNzIENvcHlQYXNzIGV4dGVuZHMgUGFzcyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCdDb3B5UGFzcycsICdjb3B5LmZzJywgJ2Jhc2ljLnZzJyk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3B5UGFzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vcGFzc2VzL0NvcHlQYXNzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tRnJvbUFycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W35+KE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3JhbmRvbUZyb21BcnJheS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF1ZGlvL21pZGlcIjogW1xuXHRcdFwibWlkXCIsXG5cdFx0XCJtaWRpXCIsXG5cdFx0XCJrYXJcIixcblx0XHRcInJtaVwiXG5cdF0sXG5cdFwiYXVkaW8vbXA0XCI6IFtcblx0XHRcIm1wNGFcIixcblx0XHRcIm00YVwiXG5cdF0sXG5cdFwiYXVkaW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGdhXCIsXG5cdFx0XCJtcDJcIixcblx0XHRcIm1wMmFcIixcblx0XHRcIm1wM1wiLFxuXHRcdFwibTJhXCIsXG5cdFx0XCJtM2FcIlxuXHRdLFxuXHRcImF1ZGlvL29nZ1wiOiBbXG5cdFx0XCJvZ2FcIixcblx0XHRcIm9nZ1wiLFxuXHRcdFwic3B4XCJcblx0XSxcblx0XCJhdWRpby93ZWJtXCI6IFtcblx0XHRcIndlYmFcIlxuXHRdLFxuXHRcImF1ZGlvL3gtbWF0cm9za2FcIjogW1xuXHRcdFwibWthXCJcblx0XSxcblx0XCJhdWRpby94LW1wZWd1cmxcIjogW1xuXHRcdFwibTN1XCJcblx0XSxcblx0XCJhdWRpby93YXZcIjogW1xuXHRcdFwid2F2XCJcblx0XSxcblx0XCJ2aWRlby8zZ3BwXCI6IFtcblx0XHRcIjNncFwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcDJcIjogW1xuXHRcdFwiM2cyXCJcblx0XSxcblx0XCJ2aWRlby9tcDRcIjogW1xuXHRcdFwibXA0XCIsXG5cdFx0XCJtcDR2XCIsXG5cdFx0XCJtcGc0XCJcblx0XSxcblx0XCJ2aWRlby9tcGVnXCI6IFtcblx0XHRcIm1wZWdcIixcblx0XHRcIm1wZ1wiLFxuXHRcdFwibXBlXCIsXG5cdFx0XCJtMXZcIixcblx0XHRcIm0ydlwiXG5cdF0sXG5cdFwidmlkZW8vb2dnXCI6IFtcblx0XHRcIm9ndlwiXG5cdF0sXG5cdFwidmlkZW8vcXVpY2t0aW1lXCI6IFtcblx0XHRcInF0XCIsXG5cdFx0XCJtb3ZcIlxuXHRdLFxuXHRcInZpZGVvL3dlYm1cIjogW1xuXHRcdFwid2VibVwiXG5cdF0sXG5cdFwidmlkZW8veC1mNHZcIjogW1xuXHRcdFwiZjR2XCJcblx0XSxcblx0XCJ2aWRlby94LWZsaVwiOiBbXG5cdFx0XCJmbGlcIlxuXHRdLFxuXHRcInZpZGVvL3gtZmx2XCI6IFtcblx0XHRcImZsdlwiXG5cdF0sXG5cdFwidmlkZW8veC1tNHZcIjogW1xuXHRcdFwibTR2XCJcblx0XSxcblx0XCJ2aWRlby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rdlwiLFxuXHRcdFwibWszZFwiLFxuXHRcdFwibWtzXCJcblx0XVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvbWltZS10eXBlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYW1wXG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gbWluIDwgbWF4XG4gICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgIDogKHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFtcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpcy1mdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaFxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oaXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzXG4gICAgfVxuICAgIFxuICAgIGlmICh0b1N0cmluZy5jYWxsKGxpc3QpID09PSAnW29iamVjdCBBcnJheV0nKVxuICAgICAgICBmb3JFYWNoQXJyYXkobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG4gICAgZWxzZSBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKVxuICAgICAgICBmb3JFYWNoU3RyaW5nKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2VcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbn1cblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoU3RyaW5nKHN0cmluZywgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vIG5vIHN1Y2ggdGhpbmcgYXMgYSBzcGFyc2Ugc3RyaW5nLlxuICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHN0cmluZy5jaGFyQXQoaSksIGksIHN0cmluZylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hPYmplY3Qob2JqZWN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgaykpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqZWN0W2tdLCBrLCBvYmplY3QpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9yLWVhY2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsb2JhbC93aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gaXNOb2RlXG5cbmZ1bmN0aW9uIGlzTm9kZSAodmFsKSB7XG4gIHJldHVybiAoIXZhbCB8fCB0eXBlb2YgdmFsICE9PSAnb2JqZWN0JylcbiAgICA/IGZhbHNlXG4gICAgOiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5Ob2RlID09PSAnb2JqZWN0JylcbiAgICAgID8gKHZhbCBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlKVxuICAgICAgOiAodHlwZW9mIHZhbC5ub2RlVHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICh0eXBlb2YgdmFsLm5vZGVOYW1lID09PSAnc3RyaW5nJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kb20vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbiAgLCBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvckVhY2goXG4gICAgICB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgICAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgICAgICB9XG4gICAgICB9XG4gIClcblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPVxuICBnbG9iYWwucGVyZm9ybWFuY2UgJiZcbiAgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdyA/IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KClcbiAgfSA6IERhdGUubm93IHx8IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gK25ldyBEYXRlXG4gIH1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaWdodC1ub3cvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRG9tID0gcmVxdWlyZSgnaXMtZG9tJylcbnZhciBsb29rdXAgPSByZXF1aXJlKCdicm93c2VyLW1lZGlhLW1pbWUtdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzLnZpZGVvID0gc2ltcGxlTWVkaWFFbGVtZW50LmJpbmQobnVsbCwgJ3ZpZGVvJylcbm1vZHVsZS5leHBvcnRzLmF1ZGlvID0gc2ltcGxlTWVkaWFFbGVtZW50LmJpbmQobnVsbCwgJ2F1ZGlvJylcblxuZnVuY3Rpb24gc2ltcGxlTWVkaWFFbGVtZW50IChlbGVtZW50TmFtZSwgc291cmNlcywgb3B0KSB7XG4gIG9wdCA9IG9wdCB8fCB7fVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkge1xuICAgIHNvdXJjZXMgPSBbIHNvdXJjZXMgXVxuICB9XG5cbiAgdmFyIG1lZGlhID0gb3B0LmVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSlcblxuICBpZiAob3B0Lmxvb3ApIG1lZGlhLnNldEF0dHJpYnV0ZSgnbG9vcCcsICdsb29wJylcbiAgaWYgKG9wdC5tdXRlZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdtdXRlZCcsICdtdXRlZCcpXG4gIGlmIChvcHQuYXV0b3BsYXkpIG1lZGlhLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnYXV0b3BsYXknKVxuICBpZiAob3B0LmNvbnRyb2xzKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJylcbiAgaWYgKG9wdC5jcm9zc09yaWdpbikgbWVkaWEuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsIG9wdC5jcm9zc09yaWdpbilcbiAgaWYgKG9wdC5wcmVsb2FkKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCBvcHQucHJlbG9hZClcbiAgaWYgKG9wdC5wb3N0ZXIpIG1lZGlhLnNldEF0dHJpYnV0ZSgncG9zdGVyJywgb3B0LnBvc3RlcilcbiAgaWYgKHR5cGVvZiBvcHQudm9sdW1lICE9PSAndW5kZWZpbmVkJykgbWVkaWEuc2V0QXR0cmlidXRlKCd2b2x1bWUnLCBvcHQudm9sdW1lKVxuXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIG1lZGlhLmFwcGVuZENoaWxkKGNyZWF0ZVNvdXJjZUVsZW1lbnQoc291cmNlKSlcbiAgfSlcblxuICByZXR1cm4gbWVkaWFcbn1cblxuZnVuY3Rpb24gY3JlYXRlU291cmNlRWxlbWVudCAoZGF0YSkge1xuICBpZiAoaXNEb20oZGF0YSkpIHJldHVybiBkYXRhXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhID0geyBzcmM6IGRhdGEgfVxuICAgIGlmIChkYXRhLnNyYykge1xuICAgICAgdmFyIGV4dCA9IGV4dGVuc2lvbihkYXRhLnNyYylcbiAgICAgIGlmIChleHQpIGRhdGEudHlwZSA9IGxvb2t1cChleHQpXG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpXG4gIGlmIChkYXRhLnNyYykgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YS5zcmMpXG4gIGlmIChkYXRhLnR5cGUpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpXG4gIHJldHVybiBzb3VyY2Vcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uIChkYXRhKSB7XG4gIHZhciBleHRJZHggPSBkYXRhLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGV4dElkeCA8PSAwIHx8IGV4dElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoZXh0SWR4ICsgMSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaW1wbGUtbWVkaWEtZWxlbWVudC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RyaW0vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJBdWRpb0FuYWx5c2VyXG5cbmZ1bmN0aW9uIFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgV2ViQXVkaW9BbmFseXNlcikpIHJldHVybiBuZXcgV2ViQXVkaW9BbmFseXNlcihhdWRpbywgY3R4LCBvcHRzKVxuICBpZiAoIShjdHggaW5zdGFuY2VvZiBBdWRpb0NvbnRleHQpKSAob3B0cyA9IGN0eCksIChjdHggPSBudWxsKVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIHRoaXMuY3R4ID0gY3R4ID0gY3R4IHx8IG5ldyBBdWRpb0NvbnRleHRcblxuICBpZiAoIShhdWRpbyBpbnN0YW5jZW9mIEF1ZGlvTm9kZSkpIHtcbiAgICBhdWRpbyA9IChhdWRpbyBpbnN0YW5jZW9mIEF1ZGlvIHx8IGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudClcbiAgICAgID8gY3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgICAgIDogY3R4LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKGF1ZGlvKVxuICB9XG5cbiAgdGhpcy5hbmFseXNlciA9IGN0eC5jcmVhdGVBbmFseXNlcigpXG4gIHRoaXMuc3RlcmVvICAgPSAhIW9wdHMuc3RlcmVvXG4gIHRoaXMuYXVkaWJsZSAgPSBvcHRzLmF1ZGlibGUgIT09IGZhbHNlXG4gIHRoaXMud2F2ZWRhdGEgPSBudWxsXG4gIHRoaXMuZnJlcWRhdGEgPSBudWxsXG4gIHRoaXMuc3BsaXR0ZXIgPSBudWxsXG4gIHRoaXMubWVyZ2VyICAgPSBudWxsXG4gIHRoaXMuc291cmNlICAgPSBhdWRpb1xuXG4gIGlmICghdGhpcy5zdGVyZW8pIHtcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuc291cmNlXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmFuYWx5c2VyKVxuICAgIGlmICh0aGlzLmF1ZGlibGUpXG4gICAgICB0aGlzLmFuYWx5c2VyLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuYW5hbHlzZXIgPSBbdGhpcy5hbmFseXNlcl1cbiAgICB0aGlzLmFuYWx5c2VyLnB1c2goY3R4LmNyZWF0ZUFuYWx5c2VyKCkpXG5cbiAgICB0aGlzLnNwbGl0dGVyID0gY3R4LmNyZWF0ZUNoYW5uZWxTcGxpdHRlcigyKVxuICAgIHRoaXMubWVyZ2VyICAgPSBjdHguY3JlYXRlQ2hhbm5lbE1lcmdlcigyKVxuICAgIHRoaXMub3V0cHV0ICAgPSB0aGlzLm1lcmdlclxuXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLnNwbGl0dGVyKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMuc3BsaXR0ZXIuY29ubmVjdCh0aGlzLmFuYWx5c2VyW2ldLCBpLCAwKVxuICAgICAgdGhpcy5hbmFseXNlcltpXS5jb25uZWN0KHRoaXMubWVyZ2VyLCAwLCBpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1ZGlibGUpXG4gICAgICB0aGlzLm1lcmdlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfVxufVxuXG5XZWJBdWRpb0FuYWx5c2VyLnByb3RvdHlwZS53YXZlZm9ybSA9IGZ1bmN0aW9uKG91dHB1dCwgY2hhbm5lbCkge1xuICBpZiAoIW91dHB1dCkgb3V0cHV0ID0gdGhpcy53YXZlZGF0YSB8fCAoXG4gICAgdGhpcy53YXZlZGF0YSA9IG5ldyBVaW50OEFycmF5KCh0aGlzLmFuYWx5c2VyWzBdIHx8IHRoaXMuYW5hbHlzZXIpLmZyZXF1ZW5jeUJpbkNvdW50KVxuICApXG5cbiAgdmFyIGFuYWx5c2VyID0gdGhpcy5zdGVyZW9cbiAgICA/IHRoaXMuYW5hbHlzZXJbY2hhbm5lbCB8fCAwXVxuICAgIDogdGhpcy5hbmFseXNlclxuXG4gIGFuYWx5c2VyLmdldEJ5dGVUaW1lRG9tYWluRGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5XZWJBdWRpb0FuYWx5c2VyLnByb3RvdHlwZS5mcmVxdWVuY2llcyA9IGZ1bmN0aW9uKG91dHB1dCwgY2hhbm5lbCkge1xuICBpZiAoIW91dHB1dCkgb3V0cHV0ID0gdGhpcy5mcmVxZGF0YSB8fCAoXG4gICAgdGhpcy5mcmVxZGF0YSA9IG5ldyBVaW50OEFycmF5KCh0aGlzLmFuYWx5c2VyWzBdIHx8IHRoaXMuYW5hbHlzZXIpLmZyZXF1ZW5jeUJpbkNvdW50KVxuICApXG5cbiAgdmFyIGFuYWx5c2VyID0gdGhpcy5zdGVyZW9cbiAgICA/IHRoaXMuYW5hbHlzZXJbY2hhbm5lbCB8fCAwXVxuICAgIDogdGhpcy5hbmFseXNlclxuXG4gIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKG91dHB1dClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLWFuYWx5c2VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYnVmZmVyID0gcmVxdWlyZSgnLi9saWIvYnVmZmVyLXNvdXJjZScpXG52YXIgbWVkaWEgPSByZXF1aXJlKCcuL2xpYi9tZWRpYS1zb3VyY2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdlYkF1ZGlvUGxheWVyXG5mdW5jdGlvbiB3ZWJBdWRpb1BsYXllciAoc3JjLCBvcHQpIHtcbiAgaWYgKCFzcmMpIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3BlY2lmeSBhIHNyYyBwYXJhbWV0ZXInKVxuICBvcHQgPSBvcHQgfHwge31cbiAgaWYgKG9wdC5idWZmZXIpIHJldHVybiBidWZmZXIoc3JjLCBvcHQpXG4gIGVsc2UgcmV0dXJuIG1lZGlhKHNyYywgb3B0KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjYW5QbGF5U3JjID0gcmVxdWlyZSgnLi9jYW4tcGxheS1zcmMnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgeGhyQXVkaW8gPSByZXF1aXJlKCcuL3hoci1hdWRpbycpXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG52YXIgcmlnaHROb3cgPSByZXF1aXJlKCdyaWdodC1ub3cnKVxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJ1ZmZlclNvdXJjZVxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG5cbiAgLy8gYSBwYXNzLXRocm91Z2ggbm9kZSBzbyB1c2VyIGp1c3QgbmVlZHMgdG9cbiAgLy8gY29ubmVjdCgpIG9uY2VcbiAgdmFyIGJ1ZmZlck5vZGUsIGJ1ZmZlciwgZHVyYXRpb25cbiAgdmFyIG5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG4gIHZhciBhdWRpb1N0YXJ0VGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvUGF1c2VUaW1lID0gbnVsbFxuICB2YXIgYXVkaW9DdXJyZW50VGltZSA9IDBcbiAgdmFyIHBsYXlpbmcgPSBmYWxzZVxuICB2YXIgbG9vcCA9IG9wdC5sb29wXG5cbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gdHJ1ZVxuXG4gICAgaWYgKG9wdC5hdXRvUmVzdW1lICE9PSBmYWxzZSkgcmVzdW1lKGVtaXR0ZXIuY29udGV4dClcbiAgICBkaXNwb3NlQnVmZmVyKClcbiAgICBidWZmZXJOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gICAgYnVmZmVyTm9kZS5jb25uZWN0KGVtaXR0ZXIubm9kZSlcbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBlbmRlZFxuICAgIGlmIChidWZmZXIpIHtcbiAgICAgIC8vIE1pZ2h0IGJlIG51bGwgdW5kZWZpbmVkIGlmIHdlIGFyZSBzdGlsbCBsb2FkaW5nXG4gICAgICBidWZmZXJOb2RlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgIH1cbiAgICBpZiAobG9vcCkge1xuICAgICAgYnVmZmVyTm9kZS5sb29wID0gdHJ1ZVxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcFN0YXJ0ID09PSAnbnVtYmVyJykgYnVmZmVyTm9kZS5sb29wU3RhcnQgPSBvcHQubG9vcFN0YXJ0XG4gICAgICBpZiAodHlwZW9mIG9wdC5sb29wRW5kID09PSAnbnVtYmVyJykgYnVmZmVyTm9kZS5sb29wRW5kID0gb3B0Lmxvb3BFbmRcbiAgICB9XG5cbiAgICBpZiAoZHVyYXRpb24gJiYgYXVkaW9DdXJyZW50VGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAvLyBmb3Igd2hlbiBpdCBsb29wcy4uLlxuICAgICAgYXVkaW9DdXJyZW50VGltZSA9IGF1ZGlvQ3VycmVudFRpbWUgJSBkdXJhdGlvblxuICAgIH1cbiAgICB2YXIgbmV4dFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lXG5cbiAgICBidWZmZXJOb2RlLnN0YXJ0KDAsIG5leHRUaW1lKVxuICAgIGF1ZGlvU3RhcnRUaW1lID0gcmlnaHROb3coKVxuICB9XG5cbiAgZW1pdHRlci5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBsYXlpbmcpIHJldHVyblxuICAgIHBsYXlpbmcgPSBmYWxzZVxuICAgIC8vIERvbid0IGxldCB0aGUgXCJlbmRcIiBldmVudFxuICAgIC8vIGdldCB0cmlnZ2VyZWQgb24gbWFudWFsIHBhdXNlLlxuICAgIGJ1ZmZlck5vZGUub25lbmRlZCA9IG51bGxcbiAgICBidWZmZXJOb2RlLnN0b3AoMClcbiAgICBhdWRpb1BhdXNlVGltZSA9IHJpZ2h0Tm93KClcbiAgICBhdWRpb0N1cnJlbnRUaW1lICs9IChhdWRpb1BhdXNlVGltZSAtIGF1ZGlvU3RhcnRUaW1lKSAvIDEwMDBcbiAgfVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLnBhdXNlKClcbiAgICBlbmRlZCgpXG4gIH1cblxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlpbmc6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGxheWluZ1xuICAgICAgfVxuICAgIH0sXG4gICAgYnVmZmVyOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclxuICAgICAgfVxuICAgIH0sXG4gICAgdm9sdW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2Fpbi52YWx1ZVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBzZXQgaW5pdGlhbCB2b2x1bWVcbiAgaWYgKHR5cGVvZiBvcHQudm9sdW1lID09PSAnbnVtYmVyJykge1xuICAgIGVtaXR0ZXIudm9sdW1lID0gb3B0LnZvbHVtZVxuICB9XG5cbiAgLy8gZmlsdGVyIGRvd24gdG8gYSBsaXN0IG9mIHBsYXlhYmxlIHNvdXJjZXNcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgdmFyIHNvdXJjZSA9IHNvdXJjZXMuZmlsdGVyKGNhblBsYXlTcmMpWzBdXG4gICAgLy8gU3VwcG9ydCB0aGUgc2FtZSBzb3VyY2UgdHlwZXMgYXMgaW5cbiAgICAvLyBNZWRpYUVsZW1lbnQgbW9kZS4uLlxuICAgIGlmICh0eXBlb2Ygc291cmNlLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc291cmNlID0gc291cmNlLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2Uuc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgc291cmNlID0gc291cmNlLnNyY1xuICAgIH1cbiAgICAvLyBXZSBoYXZlIGF0IGxlYXN0IG9uZSBwbGF5YWJsZSBzb3VyY2UuXG4gICAgLy8gRm9yIG5vdyBqdXN0IHBsYXkgdGhlIGZpcnN0LFxuICAgIC8vIGlkZWFsbHkgdGhpcyBtb2R1bGUgY291bGQgYXR0ZW1wdCBlYWNoIG9uZS5cbiAgICBzdGFydExvYWQoc291cmNlKVxuICB9IGVsc2Uge1xuICAgIC8vIG5vIHNvdXJjZXMgY2FuIGJlIHBsYXllZC4uLlxuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIGNhblBsYXlTcmMuY3JlYXRlRXJyb3Ioc291cmNlcykpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoc3JjKSB7XG4gICAgeGhyQXVkaW8oYXVkaW9Db250ZXh0LCBzcmMsIGZ1bmN0aW9uIGF1ZGlvRGVjb2RlZCAoZXJyLCBkZWNvZGVkKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gZW1pdHRlci5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIGJ1ZmZlciA9IGRlY29kZWQgLy8gc3RvcmUgZm9yIGxhdGVyIHVzZVxuICAgICAgaWYgKGJ1ZmZlck5vZGUpIHtcbiAgICAgICAgLy8gaWYgcGxheSgpIHdhcyBjYWxsZWQgZWFybHlcbiAgICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIH1cbiAgICAgIGR1cmF0aW9uID0gYnVmZmVyLmR1cmF0aW9uXG4gICAgICBub2RlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9LCBmdW5jdGlvbiBhdWRpb1Byb2dyZXNzIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ3Byb2dyZXNzJywgYW1vdW50LCB0b3RhbClcbiAgICB9LCBmdW5jdGlvbiBhdWRpb0RlY29kaW5nICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZGVjb2RpbmcnKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBlbmRlZCAoKSB7XG4gICAgZW1pdHRlci5lbWl0KCdlbmQnKVxuICAgIHBsYXlpbmcgPSBmYWxzZVxuICAgIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwb3NlQnVmZmVyICgpIHtcbiAgICBpZiAoYnVmZmVyTm9kZSkgYnVmZmVyTm9kZS5kaXNjb25uZWN0KClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2J1ZmZlci1zb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gYWRkT25jZVxuZnVuY3Rpb24gYWRkT25jZSAoZWxlbWVudCwgZXZlbnQsIGZuKSB7XG4gIGZ1bmN0aW9uIHRtcCAoZXYpIHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRtcCwgZmFsc2UpXG4gICAgZm4oZXYsIGVsZW1lbnQpXG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9ldmVudC1hZGQtb25jZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIGNyZWF0ZUF1ZGlvID0gcmVxdWlyZSgnc2ltcGxlLW1lZGlhLWVsZW1lbnQnKS5hdWRpb1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG52YXIgcmVzdW1lID0gcmVxdWlyZSgnLi9yZXN1bWUtY29udGV4dCcpXG52YXIgY3JlYXRlQXVkaW9Db250ZXh0ID0gcmVxdWlyZSgnLi9hdWRpby1jb250ZXh0JylcbnZhciBjYW5QbGF5U3JjID0gcmVxdWlyZSgnLi9jYW4tcGxheS1zcmMnKVxudmFyIGFkZE9uY2UgPSByZXF1aXJlKCcuL2V2ZW50LWFkZC1vbmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVNZWRpYVNvdXJjZVxuZnVuY3Rpb24gY3JlYXRlTWVkaWFTb3VyY2UgKHNyYywgb3B0KSB7XG4gIG9wdCA9IGFzc2lnbih7fSwgb3B0KVxuICB2YXIgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8vIERlZmF1bHQgdG8gQXVkaW8gaW5zdGVhZCBvZiBIVE1MQXVkaW9FbGVtZW50XG4gIC8vIFRoZXJlIGlzIG5vdCBtdWNoIGRpZmZlcmVuY2UgZXhjZXB0IGluIHRoZSBmb2xsb3dpbmc6XG4gIC8vICAgIHggaW5zdGFuY2VvZiBBdWRpb1xuICAvLyAgICB4IGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBBbmQgaW4gbXkgZXhwZXJpZW5jZSBBdWRpbyBoYXMgYmV0dGVyIHN1cHBvcnQgb24gdmFyaW91c1xuICAvLyBwbGF0Zm9ybXMgbGlrZSBDb2Nvb25KUy5cbiAgLy8gUGxlYXNlIG9wZW4gYW4gaXNzdWUgaWYgdGhlcmUgaXMgYSBjb25jZXJuIHdpdGggdGhpcy5cbiAgaWYgKCFvcHQuZWxlbWVudCkgb3B0LmVsZW1lbnQgPSBuZXcgd2luZG93LkF1ZGlvKClcblxuICB2YXIgZGVzaXJlZFZvbHVtZSA9IG9wdC52b2x1bWVcbiAgZGVsZXRlIG9wdC52b2x1bWUgLy8gbWFrZSBzdXJlIDxhdWRpbz4gdGFnIHJlY2VpdmVzIGZ1bGwgdm9sdW1lXG4gIHZhciBhdWRpbyA9IGNyZWF0ZUF1ZGlvKHNyYywgb3B0KVxuICB2YXIgYXVkaW9Db250ZXh0ID0gb3B0LmNvbnRleHQgfHwgY3JlYXRlQXVkaW9Db250ZXh0KClcbiAgdmFyIG5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG4gIHZhciBtZWRpYU5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKVxuICBtZWRpYU5vZGUuY29ubmVjdChub2RlKVxuXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgfSlcbiAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBMQVlcIilcbiAgfSlcblxuICB2YXIgbG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICB2YXIgbG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gIHZhciBoYXNMb29wU3RhcnQgPSB0eXBlb2YgbG9vcFN0YXJ0ID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wU3RhcnQpXG4gIHZhciBoYXNMb29wRW5kID0gdHlwZW9mIGxvb3BFbmQgPT09ICdudW1iZXInICYmIGlzRmluaXRlKGxvb3BFbmQpXG4gIHZhciBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gIGlmIChoYXNMb29wU3RhcnQgfHwgaGFzTG9vcEVuZCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgICAgIC8vIGF1ZGlvIGhhc24ndCBiZWVuIGxvYWRlZCB5ZXQuLi5cbiAgICAgIGlmICh0eXBlb2YgYXVkaW8uZHVyYXRpb24gIT09ICdudW1iZXInKSByZXR1cm5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGF1ZGlvLmN1cnJlbnRUaW1lXG5cbiAgICAgIC8vIHdoZXJlIHRvIGVuZCB0aGUgYnVmZmVyXG4gICAgICB2YXIgZW5kVGltZSA9IGhhc0xvb3BFbmQgPyBNYXRoLm1pbihhdWRpby5kdXJhdGlvbiwgbG9vcEVuZCkgOiBhdWRpby5kdXJhdGlvblxuXG4gICAgICBpZiAoY3VycmVudFRpbWUgPiAobG9vcFN0YXJ0IHx8IDApKSB7XG4gICAgICAgIGlzTG9vcFJlYWR5ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBqdW1wIGFoZWFkIHRvIGxvb3Agc3RhcnQgcG9pbnRcbiAgICAgIGlmIChoYXNMb29wU3RhcnQgJiYgaXNMb29wUmVhZHkgJiYgY3VycmVudFRpbWUgPCBsb29wU3RhcnQpIHtcbiAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSBsb29wU3RhcnRcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UndmUgaGl0IHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICAgICAgaWYgKGN1cnJlbnRUaW1lID49IGVuZFRpbWUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gbG9vcCBlbmQgcG9pbnQsIGxldCBuYXRpdmUgbG9vcGluZyB0YWtlIG92ZXJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIGxvb3AgZW5kIHBvaW50LCBqdW1wIGJhY2sgdG8gc3RhcnQgcG9pbnQgb3IgemVyb1xuICAgICAgICBpZiAoaGFzTG9vcEVuZCkge1xuICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gaGFzTG9vcFN0YXJ0ID8gbG9vcFN0YXJ0IDogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcbiAgICB9KTtcbiAgfVxuXG4gIGVtaXR0ZXIuZWxlbWVudCA9IGF1ZGlvXG4gIGVtaXR0ZXIuY29udGV4dCA9IGF1ZGlvQ29udGV4dFxuICBlbWl0dGVyLm5vZGUgPSBub2RlXG4gIGVtaXR0ZXIucGF1c2UgPSBhdWRpby5wYXVzZS5iaW5kKGF1ZGlvKVxuICBlbWl0dGVyLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wdC5hdXRvUmVzdW1lICE9PSBmYWxzZSkgcmVzdW1lKGVtaXR0ZXIuY29udGV4dClcbiAgICByZXR1cm4gYXVkaW8ucGxheSgpXG4gIH1cblxuICAvLyBUaGlzIGV4aXN0cyBjdXJyZW50bHkgZm9yIHBhcml0eSB3aXRoIEJ1ZmZlciBzb3VyY2VcbiAgLy8gT3BlbiB0byBzdWdnZXN0aW9ucyBmb3Igd2hhdCB0aGlzIHNob3VsZCBkaXNwb3NlLi4uXG4gIGVtaXR0ZXIuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHt9XG5cbiAgZW1pdHRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3YXNQbGF5aW5nID0gZW1pdHRlci5wbGF5aW5nXG4gICAgYXVkaW8ucGF1c2UoKVxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMFxuICAgIGlzTG9vcFJlYWR5ID0gZmFsc2VcbiAgICBpZiAod2FzUGxheWluZykge1xuICAgICAgZW1pdHRlci5lbWl0KCdlbmQnKVxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGVtaXR0ZXIsIHtcbiAgICBkdXJhdGlvbjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhdWRpby5kdXJhdGlvblxuICAgICAgfVxuICAgIH0sXG4gICAgY3VycmVudFRpbWU6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uY3VycmVudFRpbWVcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlpbmc6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIWF1ZGlvLnBhdXNlZFxuICAgICAgfVxuICAgIH0sXG4gICAgdm9sdW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2Fpbi52YWx1ZVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBTZXQgaW5pdGlhbCB2b2x1bWVcbiAgaWYgKHR5cGVvZiBkZXNpcmVkVm9sdW1lID09PSAnbnVtYmVyJykge1xuICAgIGVtaXR0ZXIudm9sdW1lID0gZGVzaXJlZFZvbHVtZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNvdXJjZXMgYXJlIHVucGxheWFibGUsXG4gIC8vIGlmIHNvIHdlIGVtaXQgYW4gZXJyb3Igc2luY2UgdGhlIGJyb3dzZXJcbiAgLy8gbWlnaHQgbm90LlxuICB2YXIgc291cmNlcyA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFsgc3JjIF1cbiAgc291cmNlcyA9IHNvdXJjZXMuZmlsdGVyKEJvb2xlYW4pXG4gIHZhciBwbGF5YWJsZSA9IHNvdXJjZXMuc29tZShjYW5QbGF5U3JjKVxuICBpZiAocGxheWFibGUpIHtcbiAgICAvLyBBdCBsZWFzdCBvbmUgc291cmNlIGlzIHByb2JhYmx5L21heWJlIHBsYXlhYmxlXG4gICAgc3RhcnRMb2FkKClcbiAgfSBlbHNlIHtcbiAgICAvLyBlbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyB1c2VyIGNhbiBjYXRjaCBpdFxuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIGNhblBsYXlTcmMuY3JlYXRlRXJyb3Ioc291cmNlcykpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG5cbiAgZnVuY3Rpb24gc3RhcnRMb2FkICgpIHtcbiAgICAvLyBUaGUgZmlsZSBlcnJvcnMgKGxpa2UgZGVjb2RpbmcgLyA0MDRzKSBhcHBlYXIgb24gPHNvdXJjZT5cbiAgICB2YXIgc3JjRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhdWRpby5jaGlsZHJlbilcbiAgICB2YXIgcmVtYWluaW5nU3JjRXJyb3JzID0gc3JjRWxlbWVudHMubGVuZ3RoXG4gICAgdmFyIGhhc0Vycm9yZWQgPSBmYWxzZVxuICAgIHZhciBzb3VyY2VFcnJvciA9IGZ1bmN0aW9uIChlcnIsIGVsKSB7XG4gICAgICBpZiAoaGFzRXJyb3JlZCkgcmV0dXJuXG4gICAgICByZW1haW5pbmdTcmNFcnJvcnMtLVxuICAgICAgY29uc29sZS53YXJuKCdFcnJvciBsb2FkaW5nIHNvdXJjZTogJyArIGVsLmdldEF0dHJpYnV0ZSgnc3JjJykpXG4gICAgICBpZiAocmVtYWluaW5nU3JjRXJyb3JzIDw9IDApIHtcbiAgICAgICAgaGFzRXJyb3JlZCA9IHRydWVcbiAgICAgICAgc3JjRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNvdXJjZUVycm9yLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignQ291bGQgbm90IHBsYXkgYW55IG9mIHRoZSBzdXBwbGllZCBzb3VyY2VzJykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2xvYWQnKVxuICAgIH1cblxuICAgIGlmIChhdWRpby5yZWFkeVN0YXRlID49IGF1ZGlvLkhBVkVfRU5PVUdIX0RBVEEpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZG9uZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkT25jZShhdWRpbywgJ2NhbnBsYXknLCBkb25lKVxuICAgICAgYWRkT25jZShhdWRpbywgJ2Vycm9yJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdChuZXcgRXJyb3IoJ1Vua25vd24gZXJyb3Igd2hpbGUgbG9hZGluZyA8YXVkaW8+JykpXG4gICAgICB9KVxuICAgICAgc3JjRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgYWRkT25jZShlbCwgJ2Vycm9yJywgc291cmNlRXJyb3IpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9uIG1vc3QgYnJvd3NlcnMgdGhlIGxvYWRpbmcgYmVnaW5zXG4gICAgLy8gaW1tZWRpYXRlbHkuIEhvd2V2ZXIsIG9uIGlPUyA5LjIgU2FmYXJpLFxuICAgIC8vIHlvdSBuZWVkIHRvIGNhbGwgbG9hZCgpIGZvciBldmVudHNcbiAgICAvLyB0byBiZSB0cmlnZ2VyZWQuXG4gICAgYXVkaW8ubG9hZCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9tZWRpYS1zb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB4aHIgPSByZXF1aXJlKCd4aHInKVxudmFyIHhoclByb2dyZXNzID0gcmVxdWlyZSgneGhyLXByb2dyZXNzJylcblxubW9kdWxlLmV4cG9ydHMgPSB4aHJBdWRpb1xuZnVuY3Rpb24geGhyQXVkaW8gKGF1ZGlvQ29udGV4dCwgc3JjLCBjYiwgcHJvZ3Jlc3MsIGRlY29kaW5nKSB7XG4gIHZhciB4aHJPYmplY3QgPSB4aHIoe1xuICAgIHVyaTogc3JjLFxuICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ1xuICB9LCBmdW5jdGlvbiAoZXJyLCByZXNwLCBhcnJheUJ1Zikge1xuICAgIGlmICghL14yLy50ZXN0KHJlc3Auc3RhdHVzQ29kZSkpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignc3RhdHVzIGNvZGUgJyArIHJlc3Auc3RhdHVzQ29kZSArICcgcmVxdWVzdGluZyAnICsgc3JjKVxuICAgIH1cbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIGRlY29kZShhcnJheUJ1ZilcbiAgfSlcblxuICB4aHJQcm9ncmVzcyh4aHJPYmplY3QpXG4gICAgLm9uKCdkYXRhJywgZnVuY3Rpb24gKGFtb3VudCwgdG90YWwpIHtcbiAgICAgIHByb2dyZXNzKGFtb3VudCwgdG90YWwpXG4gICAgfSlcblxuICBmdW5jdGlvbiBkZWNvZGUgKGFycmF5QnVmKSB7XG4gICAgZGVjb2RpbmcoKVxuICAgIGF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWYsIGZ1bmN0aW9uIChkZWNvZGVkKSB7XG4gICAgICBjYihudWxsLCBkZWNvZGVkKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0Vycm9yIGRlY29kaW5nIGF1ZGlvIGRhdGEnKVxuICAgICAgZXJyLnR5cGUgPSAnREVDT0RFX0FVRElPX0RBVEEnXG4gICAgICBjYihlcnIpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3hoci1hdWRpby5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblxuV2ViTWlkaSB2Mi4wLjRcblxuV2ViTWlkaS5qcyBoZWxwcyB5b3UgdGFtZSB0aGUgV2ViIE1JREkgQVBJLiBTZW5kIGFuZCByZWNlaXZlIE1JREkgbWVzc2FnZXMgd2l0aCBlYXNlLiBDb250cm9sIGluc3RydW1lbnRzIHdpdGggdXNlci1mcmllbmRseSBmdW5jdGlvbnMgKHBsYXlOb3RlLCBzZW5kUGl0Y2hCZW5kLCBldGMuKS4gUmVhY3QgdG8gTUlESSBpbnB1dCB3aXRoIHNpbXBsZSBldmVudCBsaXN0ZW5lcnMgKG5vdGVvbiwgcGl0Y2hiZW5kLCBjb250cm9sY2hhbmdlLCBldGMuKS5cbmh0dHBzOi8vZ2l0aHViLmNvbS9jb3RlanAvd2VibWlkaVxuXG5cblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTUtMjAxOCwgSmVhbi1QaGlsaXBwZSBDw7R0w6lcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZFxuYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbmluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG5zdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbnBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUXG5OT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFU1xuT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG5DT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4hZnVuY3Rpb24oc2NvcGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIFdlYk1pZGkoKXtpZihXZWJNaWRpLnByb3RvdHlwZS5fc2luZ2xldG9uKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgYSBzaW5nbGV0b24sIGl0IGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQgZGlyZWN0bHkuXCIpO1dlYk1pZGkucHJvdG90eXBlLl9zaW5nbGV0b249dGhpcyx0aGlzLl9pbnB1dHM9W10sdGhpcy5fb3V0cHV0cz1bXSx0aGlzLl91c2VySGFuZGxlcnM9e30sdGhpcy5fc3RhdGVDaGFuZ2VRdWV1ZT1bXSx0aGlzLl9wcm9jZXNzaW5nU3RhdGVDaGFuZ2U9ITEsdGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cz1bXCJjb25uZWN0ZWRcIixcImRpc2Nvbm5lY3RlZFwiXSx0aGlzLl9ub3Rlcz1bXCJDXCIsXCJDI1wiLFwiRFwiLFwiRCNcIixcIkVcIixcIkZcIixcIkYjXCIsXCJHXCIsXCJHI1wiLFwiQVwiLFwiQSNcIixcIkJcIl0sdGhpcy5fc2VtaXRvbmVzPXtDOjAsRDoyLEU6NCxGOjUsRzo3LEE6OSxCOjExfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtNSURJX1NZU1RFTV9NRVNTQUdFUzp7dmFsdWU6e3N5c2V4OjI0MCx0aW1lY29kZToyNDEsc29uZ3Bvc2l0aW9uOjI0Mixzb25nc2VsZWN0OjI0Myx0dW5pbmdyZXF1ZXN0OjI0NixzeXNleGVuZDoyNDcsY2xvY2s6MjQ4LHN0YXJ0OjI1MCxcImNvbnRpbnVlXCI6MjUxLHN0b3A6MjUyLGFjdGl2ZXNlbnNpbmc6MjU0LHJlc2V0OjI1NSx1bmtub3duc3lzdGVtbWVzc2FnZTotMX0sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITF9LE1JRElfQ0hBTk5FTF9NRVNTQUdFUzp7dmFsdWU6e25vdGVvZmY6OCxub3Rlb246OSxrZXlhZnRlcnRvdWNoOjEwLGNvbnRyb2xjaGFuZ2U6MTEsY2hhbm5lbG1vZGU6MTEscHJvZ3JhbWNoYW5nZToxMixjaGFubmVsYWZ0ZXJ0b3VjaDoxMyxwaXRjaGJlbmQ6MTR9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSOnt2YWx1ZTp7cGl0Y2hiZW5kcmFuZ2U6WzAsMF0sY2hhbm5lbGZpbmV0dW5pbmc6WzAsMV0sY2hhbm5lbGNvYXJzZXR1bmluZzpbMCwyXSx0dW5pbmdwcm9ncmFtOlswLDNdLHR1bmluZ2Jhbms6WzAsNF0sbW9kdWxhdGlvbnJhbmdlOlswLDVdLGF6aW11dGhhbmdsZTpbNjEsMF0sZWxldmF0aW9uYW5nbGU6WzYxLDFdLGdhaW46WzYxLDJdLGRpc3RhbmNlcmF0aW86WzYxLDNdLG1heGltdW1kaXN0YW5jZTpbNjEsNF0sbWF4aW11bWRpc3RhbmNlZ2FpbjpbNjEsNV0scmVmZXJlbmNlZGlzdGFuY2VyYXRpbzpbNjEsNl0scGFuc3ByZWFkYW5nbGU6WzYxLDddLHJvbGxhbmdsZTpbNjEsOF19LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NPTlRST0xfQ0hBTkdFX01FU1NBR0VTOnt2YWx1ZTp7YmFua3NlbGVjdGNvYXJzZTowLG1vZHVsYXRpb253aGVlbGNvYXJzZToxLGJyZWF0aGNvbnRyb2xsZXJjb2Fyc2U6Mixmb290Y29udHJvbGxlcmNvYXJzZTo0LHBvcnRhbWVudG90aW1lY29hcnNlOjUsZGF0YWVudHJ5Y29hcnNlOjYsdm9sdW1lY29hcnNlOjcsYmFsYW5jZWNvYXJzZTo4LHBhbmNvYXJzZToxMCxleHByZXNzaW9uY29hcnNlOjExLGVmZmVjdGNvbnRyb2wxY29hcnNlOjEyLGVmZmVjdGNvbnRyb2wyY29hcnNlOjEzLGdlbmVyYWxwdXJwb3Nlc2xpZGVyMToxNixnZW5lcmFscHVycG9zZXNsaWRlcjI6MTcsZ2VuZXJhbHB1cnBvc2VzbGlkZXIzOjE4LGdlbmVyYWxwdXJwb3Nlc2xpZGVyNDoxOSxiYW5rc2VsZWN0ZmluZTozMixtb2R1bGF0aW9ud2hlZWxmaW5lOjMzLGJyZWF0aGNvbnRyb2xsZXJmaW5lOjM0LGZvb3Rjb250cm9sbGVyZmluZTozNixwb3J0YW1lbnRvdGltZWZpbmU6MzcsZGF0YWVudHJ5ZmluZTozOCx2b2x1bWVmaW5lOjM5LGJhbGFuY2VmaW5lOjQwLHBhbmZpbmU6NDIsZXhwcmVzc2lvbmZpbmU6NDMsZWZmZWN0Y29udHJvbDFmaW5lOjQ0LGVmZmVjdGNvbnRyb2wyZmluZTo0NSxob2xkcGVkYWw6NjQscG9ydGFtZW50bzo2NSxzdXN0ZW51dG9wZWRhbDo2Nixzb2Z0cGVkYWw6NjcsbGVnYXRvcGVkYWw6NjgsaG9sZDJwZWRhbDo2OSxzb3VuZHZhcmlhdGlvbjo3MCxyZXNvbmFuY2U6NzEsc291bmRyZWxlYXNldGltZTo3Mixzb3VuZGF0dGFja3RpbWU6NzMsYnJpZ2h0bmVzczo3NCxzb3VuZGNvbnRyb2w2Ojc1LHNvdW5kY29udHJvbDc6NzYsc291bmRjb250cm9sODo3Nyxzb3VuZGNvbnRyb2w5Ojc4LHNvdW5kY29udHJvbDEwOjc5LGdlbmVyYWxwdXJwb3NlYnV0dG9uMTo4MCxnZW5lcmFscHVycG9zZWJ1dHRvbjI6ODEsZ2VuZXJhbHB1cnBvc2VidXR0b24zOjgyLGdlbmVyYWxwdXJwb3NlYnV0dG9uNDo4MyxyZXZlcmJsZXZlbDo5MSx0cmVtb2xvbGV2ZWw6OTIsY2hvcnVzbGV2ZWw6OTMsY2VsZXN0ZWxldmVsOjk0LHBoYXNlcmxldmVsOjk1LGRhdGFidXR0b25pbmNyZW1lbnQ6OTYsZGF0YWJ1dHRvbmRlY3JlbWVudDo5Nyxub25yZWdpc3RlcmVkcGFyYW1ldGVyY29hcnNlOjk4LG5vbnJlZ2lzdGVyZWRwYXJhbWV0ZXJmaW5lOjk5LHJlZ2lzdGVyZWRwYXJhbWV0ZXJjb2Fyc2U6MTAwLHJlZ2lzdGVyZWRwYXJhbWV0ZXJmaW5lOjEwMX0sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITF9LE1JRElfQ0hBTk5FTF9NT0RFX01FU1NBR0VTOnt2YWx1ZTp7YWxsc291bmRvZmY6MTIwLHJlc2V0YWxsY29udHJvbGxlcnM6MTIxLGxvY2FsY29udHJvbDoxMjIsYWxsbm90ZXNvZmY6MTIzLG9tbmltb2Rlb2ZmOjEyNCxvbW5pbW9kZW9uOjEyNSxtb25vbW9kZW9uOjEyNixwb2x5bW9kZW9uOjEyN30sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITF9fSksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7c3VwcG9ydGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwicmVxdWVzdE1JRElBY2Nlc3NcImluIG5hdmlnYXRvcn19LGVuYWJsZWQ6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXRoaXNbXCJpbnRlcmZhY2VcIl19LmJpbmQodGhpcyl9LGlucHV0czp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5wdXRzfS5iaW5kKHRoaXMpfSxvdXRwdXRzOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vdXRwdXRzfS5iaW5kKHRoaXMpfSxzeXNleEVuYWJsZWQ6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuISghdGhpc1tcImludGVyZmFjZVwiXXx8IXRoaXNbXCJpbnRlcmZhY2VcIl0uc3lzZXhFbmFibGVkKX0uYmluZCh0aGlzKX0sdGltZTp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9fX0pfWZ1bmN0aW9uIElucHV0KG1pZGlJbnB1dCl7dmFyIHRoYXQ9dGhpczt0aGlzLl91c2VySGFuZGxlcnM9e2NoYW5uZWw6e30sc3lzdGVtOnt9fSx0aGlzLl9taWRpSW5wdXQ9bWlkaUlucHV0LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse2Nvbm5lY3Rpb246e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5jb25uZWN0aW9ufX0saWQ6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5pZH19LG1hbnVmYWN0dXJlcjp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaUlucHV0Lm1hbnVmYWN0dXJlcn19LG5hbWU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5uYW1lfX0sc3RhdGU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5zdGF0ZX19LHR5cGU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC50eXBlfX19KSx0aGlzLl9pbml0aWFsaXplVXNlckhhbmRsZXJzKCl9ZnVuY3Rpb24gT3V0cHV0KG1pZGlPdXRwdXQpe3ZhciB0aGF0PXRoaXM7dGhpcy5fbWlkaU91dHB1dD1taWRpT3V0cHV0LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse2Nvbm5lY3Rpb246e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlPdXRwdXQuY29ubmVjdGlvbn19LGlkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0LmlkfX0sbWFudWZhY3R1cmVyOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0Lm1hbnVmYWN0dXJlcn19LG5hbWU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlPdXRwdXQubmFtZX19LHN0YXRlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0LnN0YXRlfX0sdHlwZTp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC50eXBlfX19KX12YXIgd209bmV3IFdlYk1pZGk7V2ViTWlkaS5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKGNhbGxiYWNrLHN5c2V4KXtyZXR1cm4gdGhpcy5lbmFibGVkP3ZvaWQgMDp0aGlzLnN1cHBvcnRlZD92b2lkIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcyh7c3lzZXg6c3lzZXh9KS50aGVuKGZ1bmN0aW9uKG1pZGlBY2Nlc3Mpe2Z1bmN0aW9uIG9uUG9ydHNPcGVuKCl7dGhpcy5fdXBkYXRlSW5wdXRzQW5kT3V0cHV0cygpLHRoaXNbXCJpbnRlcmZhY2VcIl0ub25zdGF0ZWNoYW5nZT10aGlzLl9vbkludGVyZmFjZVN0YXRlQ2hhbmdlLmJpbmQodGhpcyksXCJmdW5jdGlvblwiPT10eXBlb2YgY2FsbGJhY2smJmNhbGxiYWNrLmNhbGwodGhpcyksZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe3RoaXMuX29uSW50ZXJmYWNlU3RhdGVDaGFuZ2UoZXZlbnQpfS5iaW5kKHRoaXMpKX12YXIgZXZlbnRzPVtdLHByb21pc2VzPVtdO3RoaXNbXCJpbnRlcmZhY2VcIl09bWlkaUFjY2Vzcyx0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpLHRoaXNbXCJpbnRlcmZhY2VcIl0ub25zdGF0ZWNoYW5nZT1mdW5jdGlvbihlKXtldmVudHMucHVzaChlKX07Zm9yKHZhciBpbnB1dHM9bWlkaUFjY2Vzcy5pbnB1dHMudmFsdWVzKCksaW5wdXQ9aW5wdXRzLm5leHQoKTtpbnB1dCYmIWlucHV0LmRvbmU7aW5wdXQ9aW5wdXRzLm5leHQoKSlwcm9taXNlcy5wdXNoKGlucHV0LnZhbHVlLm9wZW4oKSk7Zm9yKHZhciBvdXRwdXRzPW1pZGlBY2Nlc3Mub3V0cHV0cy52YWx1ZXMoKSxvdXRwdXQ9b3V0cHV0cy5uZXh0KCk7b3V0cHV0JiYhb3V0cHV0LmRvbmU7b3V0cHV0PW91dHB1dHMubmV4dCgpKXByb21pc2VzLnB1c2gob3V0cHV0LnZhbHVlLm9wZW4oKSk7UHJvbWlzZT9Qcm9taXNlLmFsbChwcm9taXNlcylbXCJjYXRjaFwiXShmdW5jdGlvbihlcnIpe30pLnRoZW4ob25Qb3J0c09wZW4uYmluZCh0aGlzKSk6c2V0VGltZW91dChvblBvcnRzT3Blbi5iaW5kKHRoaXMpLDIwMCl9LmJpbmQodGhpcyksZnVuY3Rpb24oZXJyKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBjYWxsYmFjayYmY2FsbGJhY2suY2FsbCh0aGlzLGVycil9LmJpbmQodGhpcykpOnZvaWQoXCJmdW5jdGlvblwiPT10eXBlb2YgY2FsbGJhY2smJmNhbGxiYWNrKG5ldyBFcnJvcihcIlRoZSBXZWIgTUlESSBBUEkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpKSl9LFdlYk1pZGkucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXtpZighdGhpcy5zdXBwb3J0ZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIFdlYiBNSURJIEFQSSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3Nlci5cIik7dGhpc1tcImludGVyZmFjZVwiXSYmKHRoaXNbXCJpbnRlcmZhY2VcIl0ub25zdGF0ZWNoYW5nZT12b2lkIDApLHRoaXNbXCJpbnRlcmZhY2VcIl09dm9pZCAwLHRoaXMuX2lucHV0cz1bXSx0aGlzLl9vdXRwdXRzPVtdLHRoaXMuX3Jlc2V0SW50ZXJmYWNlVXNlckhhbmRsZXJzKCl9LFdlYk1pZGkucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBtdXN0IGJlIGVuYWJsZWQgYmVmb3JlIGFkZGluZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZighKHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMuaW5kZXhPZih0eXBlKT49MCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtyZXR1cm4gdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpLHRoaXN9LFdlYk1pZGkucHJvdG90eXBlLmhhc0xpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBtdXN0IGJlIGVuYWJsZWQgYmVmb3JlIGNoZWNraW5nIGV2ZW50IGxpc3RlbmVycy5cIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgbGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbGlzdGVuZXInIHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO2lmKCEodGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cy5pbmRleE9mKHR5cGUpPj0wKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBldmVudCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO2Zvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLmxlbmd0aDtvKyspaWYodGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdW29dPT09bGlzdGVuZXIpcmV0dXJuITA7cmV0dXJuITF9LFdlYk1pZGkucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBtdXN0IGJlIGVuYWJsZWQgYmVmb3JlIHJlbW92aW5nIGV2ZW50IGxpc3RlbmVycy5cIik7aWYodm9pZCAwIT09bGlzdGVuZXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZih0aGlzLl9taWRpSW50ZXJmYWNlRXZlbnRzLmluZGV4T2YodHlwZSk+PTApaWYobGlzdGVuZXIpZm9yKHZhciBvPTA7bzx0aGlzLl91c2VySGFuZGxlcnNbdHlwZV0ubGVuZ3RoO28rKyl0aGlzLl91c2VySGFuZGxlcnNbdHlwZV1bb109PT1saXN0ZW5lciYmdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLnNwbGljZShvLDEpO2Vsc2UgdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdPVtdO2Vsc2V7aWYodm9pZCAwIT09dHlwZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBldmVudCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO3RoaXMuX3Jlc2V0SW50ZXJmYWNlVXNlckhhbmRsZXJzKCl9cmV0dXJuIHRoaXN9LFdlYk1pZGkucHJvdG90eXBlLnRvTUlESUNoYW5uZWxzPWZ1bmN0aW9uKGNoYW5uZWwpe3ZhciBjaGFubmVscztyZXR1cm4gY2hhbm5lbHM9XCJhbGxcIj09PWNoYW5uZWx8fHZvaWQgMD09PWNoYW5uZWw/W1wiYWxsXCJdOkFycmF5LmlzQXJyYXkoY2hhbm5lbCk/Y2hhbm5lbDpbY2hhbm5lbF0sY2hhbm5lbHMuaW5kZXhPZihcImFsbFwiKT4tMSYmKGNoYW5uZWxzPVsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNl0pLGNoYW5uZWxzLm1hcChmdW5jdGlvbihjaCl7cmV0dXJuIHBhcnNlSW50KGNoKX0pLmZpbHRlcihmdW5jdGlvbihjaCl7cmV0dXJuIGNoPj0xJiYxNj49Y2h9KX0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0SW5wdXRCeUlkPWZ1bmN0aW9uKGlkKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5pbnB1dHMubGVuZ3RoO2krKylpZih0aGlzLmlucHV0c1tpXS5pZD09PWlkKXJldHVybiB0aGlzLmlucHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0T3V0cHV0QnlJZD1mdW5jdGlvbihpZCl7aWYoIXRoaXMuZW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIG5vdCBlbmFibGVkLlwiKTtmb3IodmFyIGk9MDtpPHRoaXMub3V0cHV0cy5sZW5ndGg7aSsrKWlmKHRoaXMub3V0cHV0c1tpXS5pZD09PWlkKXJldHVybiB0aGlzLm91dHB1dHNbaV07cmV0dXJuITF9LFdlYk1pZGkucHJvdG90eXBlLmdldElucHV0QnlOYW1lPWZ1bmN0aW9uKG5hbWUpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBpcyBub3QgZW5hYmxlZC5cIik7Zm9yKHZhciBpPTA7aTx0aGlzLmlucHV0cy5sZW5ndGg7aSsrKWlmKH50aGlzLmlucHV0c1tpXS5uYW1lLmluZGV4T2YobmFtZSkpcmV0dXJuIHRoaXMuaW5wdXRzW2ldO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5nZXRPY3RhdmU9ZnVuY3Rpb24obnVtYmVyKXtyZXR1cm4gbnVtYmVyJiZudW1iZXI+PTAmJjEyNz49bnVtYmVyP01hdGguZmxvb3IocGFyc2VJbnQobnVtYmVyKS8xMi0xKS0xOnZvaWQgMH0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0T3V0cHV0QnlOYW1lPWZ1bmN0aW9uKG5hbWUpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBpcyBub3QgZW5hYmxlZC5cIik7Zm9yKHZhciBpPTA7aTx0aGlzLm91dHB1dHMubGVuZ3RoO2krKylpZih+dGhpcy5vdXRwdXRzW2ldLm5hbWUuaW5kZXhPZihuYW1lKSlyZXR1cm4gdGhpcy5vdXRwdXRzW2ldO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5ndWVzc05vdGVOdW1iZXI9ZnVuY3Rpb24oaW5wdXQpe3ZhciBvdXRwdXQ9ITE7aWYoaW5wdXQmJmlucHV0LnRvRml4ZWQmJmlucHV0Pj0wJiYxMjc+PWlucHV0P291dHB1dD1NYXRoLnJvdW5kKGlucHV0KTpwYXJzZUludChpbnB1dCk+PTAmJnBhcnNlSW50KGlucHV0KTw9MTI3P291dHB1dD1wYXJzZUludChpbnB1dCk6KFwic3RyaW5nXCI9PXR5cGVvZiBpbnB1dHx8aW5wdXQgaW5zdGFuY2VvZiBTdHJpbmcpJiYob3V0cHV0PXRoaXMubm90ZU5hbWVUb051bWJlcihpbnB1dCkpLG91dHB1dD09PSExKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbm90ZSBudW1iZXIgKFwiK2lucHV0K1wiKS5cIik7cmV0dXJuIG91dHB1dH0sV2ViTWlkaS5wcm90b3R5cGUubm90ZU5hbWVUb051bWJlcj1mdW5jdGlvbihuYW1lKXtcInN0cmluZ1wiIT10eXBlb2YgbmFtZSYmKG5hbWU9XCJcIik7dmFyIG1hdGNoZXM9bmFtZS5tYXRjaCgvKFtDREVGR0FCXSkoI3swLDJ9fGJ7MCwyfSkoLT9cXGQrKS9pKTtpZighbWF0Y2hlcyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgbm90ZSBuYW1lLlwiKTt2YXIgc2VtaXRvbmVzPXdtLl9zZW1pdG9uZXNbbWF0Y2hlc1sxXS50b1VwcGVyQ2FzZSgpXSxvY3RhdmU9cGFyc2VJbnQobWF0Y2hlc1szXSkscmVzdWx0PTEyKihvY3RhdmUrMikrc2VtaXRvbmVzO2lmKG1hdGNoZXNbMl0udG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiYlwiKT4tMT9yZXN1bHQtPW1hdGNoZXNbMl0ubGVuZ3RoOm1hdGNoZXNbMl0udG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiI1wiKT4tMSYmKHJlc3VsdCs9bWF0Y2hlc1syXS5sZW5ndGgpLDA+c2VtaXRvbmVzfHwtMj5vY3RhdmV8fG9jdGF2ZT44fHwwPnJlc3VsdHx8cmVzdWx0PjEyNyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgbm90ZSBuYW1lIG9yIG5vdGUgb3V0c2lkZSB2YWxpZCByYW5nZS5cIik7cmV0dXJuIHJlc3VsdH0sV2ViTWlkaS5wcm90b3R5cGUuX3VwZGF0ZUlucHV0c0FuZE91dHB1dHM9ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVJbnB1dHMoKSx0aGlzLl91cGRhdGVPdXRwdXRzKCl9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVJbnB1dHM9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMuX2lucHV0cy5sZW5ndGg7aSsrKXtmb3IodmFyIHJlbW92ZT0hMCx1cGRhdGVkPXRoaXNbXCJpbnRlcmZhY2VcIl0uaW5wdXRzLnZhbHVlcygpLGlucHV0PXVwZGF0ZWQubmV4dCgpO2lucHV0JiYhaW5wdXQuZG9uZTtpbnB1dD11cGRhdGVkLm5leHQoKSlpZih0aGlzLl9pbnB1dHNbaV0uX21pZGlJbnB1dD09PWlucHV0LnZhbHVlKXtyZW1vdmU9ITE7YnJlYWt9cmVtb3ZlJiZ0aGlzLl9pbnB1dHMuc3BsaWNlKGksMSl9dGhpc1tcImludGVyZmFjZVwiXSYmdGhpc1tcImludGVyZmFjZVwiXS5pbnB1dHMuZm9yRWFjaChmdW5jdGlvbihuSW5wdXQpe2Zvcih2YXIgYWRkPSEwLGo9MDtqPHRoaXMuX2lucHV0cy5sZW5ndGg7aisrKXRoaXMuX2lucHV0c1tqXS5fbWlkaUlucHV0PT09bklucHV0JiYoYWRkPSExKTthZGQmJnRoaXMuX2lucHV0cy5wdXNoKHRoaXMuX2NyZWF0ZUlucHV0KG5JbnB1dCkpfS5iaW5kKHRoaXMpKX0sV2ViTWlkaS5wcm90b3R5cGUuX3VwZGF0ZU91dHB1dHM9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMuX291dHB1dHMubGVuZ3RoO2krKyl7Zm9yKHZhciByZW1vdmU9ITAsdXBkYXRlZD10aGlzW1wiaW50ZXJmYWNlXCJdLm91dHB1dHMudmFsdWVzKCksb3V0cHV0PXVwZGF0ZWQubmV4dCgpO291dHB1dCYmIW91dHB1dC5kb25lO291dHB1dD11cGRhdGVkLm5leHQoKSlpZih0aGlzLl9vdXRwdXRzW2ldLl9taWRpT3V0cHV0PT09b3V0cHV0LnZhbHVlKXtyZW1vdmU9ITE7YnJlYWt9cmVtb3ZlJiZ0aGlzLl9vdXRwdXRzLnNwbGljZShpLDEpfXRoaXNbXCJpbnRlcmZhY2VcIl0mJnRoaXNbXCJpbnRlcmZhY2VcIl0ub3V0cHV0cy5mb3JFYWNoKGZ1bmN0aW9uKG5PdXRwdXQpe2Zvcih2YXIgYWRkPSEwLGo9MDtqPHRoaXMuX291dHB1dHMubGVuZ3RoO2orKyl0aGlzLl9vdXRwdXRzW2pdLl9taWRpT3V0cHV0PT09bk91dHB1dCYmKGFkZD0hMSk7YWRkJiZ0aGlzLl9vdXRwdXRzLnB1c2godGhpcy5fY3JlYXRlT3V0cHV0KG5PdXRwdXQpKX0uYmluZCh0aGlzKSl9LFdlYk1pZGkucHJvdG90eXBlLl9jcmVhdGVJbnB1dD1mdW5jdGlvbihtaWRpSW5wdXQpe3ZhciBpbnB1dD1uZXcgSW5wdXQobWlkaUlucHV0KTtyZXR1cm4gaW5wdXQuX21pZGlJbnB1dC5vbm1pZGltZXNzYWdlPWlucHV0Ll9vbk1pZGlNZXNzYWdlLmJpbmQoaW5wdXQpLGlucHV0fSxXZWJNaWRpLnByb3RvdHlwZS5fY3JlYXRlT3V0cHV0PWZ1bmN0aW9uKG1pZGlPdXRwdXQpe3ZhciBvdXRwdXQ9bmV3IE91dHB1dChtaWRpT3V0cHV0KTtyZXR1cm4gb3V0cHV0Ll9taWRpT3V0cHV0Lm9ubWlkaW1lc3NhZ2U9b3V0cHV0Ll9vbk1pZGlNZXNzYWdlLmJpbmQob3V0cHV0KSxvdXRwdXR9LFdlYk1pZGkucHJvdG90eXBlLl9vbkludGVyZmFjZVN0YXRlQ2hhbmdlPWZ1bmN0aW9uKGUpe3RoaXMuX3VwZGF0ZUlucHV0c0FuZE91dHB1dHMoKTt2YXIgZXZlbnQ9e3RpbWVzdGFtcDplLnRpbWVTdGFtcCx0eXBlOmUucG9ydC5zdGF0ZX07dGhpc1tcImludGVyZmFjZVwiXSYmXCJjb25uZWN0ZWRcIj09PWUucG9ydC5zdGF0ZT9cIm91dHB1dFwiPT09ZS5wb3J0LnR5cGU/ZXZlbnQucG9ydD10aGlzLmdldE91dHB1dEJ5SWQoZS5wb3J0LmlkKTpcImlucHV0XCI9PT1lLnBvcnQudHlwZSYmKGV2ZW50LnBvcnQ9dGhpcy5nZXRJbnB1dEJ5SWQoZS5wb3J0LmlkKSk6ZXZlbnQucG9ydD17Y29ubmVjdGlvbjpcImNsb3NlZFwiLGlkOmUucG9ydC5pZCxtYW51ZmFjdHVyZXI6ZS5wb3J0Lm1hbnVmYWN0dXJlcixuYW1lOmUucG9ydC5uYW1lLHN0YXRlOmUucG9ydC5zdGF0ZSx0eXBlOmUucG9ydC50eXBlfSx0aGlzLl91c2VySGFuZGxlcnNbZS5wb3J0LnN0YXRlXS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe2hhbmRsZXIoZXZlbnQpfSl9LFdlYk1pZGkucHJvdG90eXBlLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycz1mdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8dGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cy5sZW5ndGg7aSsrKXRoaXMuX3VzZXJIYW5kbGVyc1t0aGlzLl9taWRpSW50ZXJmYWNlRXZlbnRzW2ldXT1bXX0sSW5wdXQucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsY2hhbm5lbCxsaXN0ZW5lcil7dmFyIHRoYXQ9dGhpcztpZih2b2lkIDA9PT1jaGFubmVsJiYoY2hhbm5lbD1cImFsbFwiKSxBcnJheS5pc0FycmF5KGNoYW5uZWwpfHwoY2hhbm5lbD1bY2hhbm5lbF0pLGNoYW5uZWwuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtpZihcImFsbFwiIT09aXRlbSYmIShpdGVtPj0xJiYxNj49aXRlbSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgJ2NoYW5uZWwnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKX0pLFwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZih3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1t0eXBlXSl0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdfHwodGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXT1bXSksdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtlbHNle2lmKCF3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVNbdHlwZV0pdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtpZihjaGFubmVsLmluZGV4T2YoXCJhbGxcIik+LTEpe2NoYW5uZWw9W107Zm9yKHZhciBqPTE7MTY+PWo7aisrKWNoYW5uZWwucHVzaChqKX10aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXXx8KHRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdPVtdKSxjaGFubmVsLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoXXx8KHRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoXT1bXSksdGhhdC5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV1bY2hdLnB1c2gobGlzdGVuZXIpfSl9cmV0dXJuIHRoaXN9LElucHV0LnByb3RvdHlwZS5vbj1JbnB1dC5wcm90b3R5cGUuYWRkTGlzdGVuZXIsSW5wdXQucHJvdG90eXBlLmhhc0xpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsY2hhbm5lbCxsaXN0ZW5lcil7dmFyIHRoYXQ9dGhpcztpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYodm9pZCAwPT09Y2hhbm5lbCYmKGNoYW5uZWw9XCJhbGxcIiksY2hhbm5lbC5jb25zdHJ1Y3RvciE9PUFycmF5JiYoY2hhbm5lbD1bY2hhbm5lbF0pLHdtLk1JRElfU1lTVEVNX01FU1NBR0VTW3R5cGVdKXtmb3IodmFyIG89MDtvPHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV0ubGVuZ3RoO28rKylpZih0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdW29dPT09bGlzdGVuZXIpcmV0dXJuITB9ZWxzZSBpZih3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVNbdHlwZV0pe2lmKGNoYW5uZWwuaW5kZXhPZihcImFsbFwiKT4tMSl7Y2hhbm5lbD1bXTtmb3IodmFyIGo9MTsxNj49ajtqKyspY2hhbm5lbC5wdXNoKGopfXJldHVybiB0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXT9jaGFubmVsLmV2ZXJ5KGZ1bmN0aW9uKGNoTnVtKXt2YXIgbGlzdGVuZXJzPXRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoTnVtXTtyZXR1cm4gbGlzdGVuZXJzJiZsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik+LTF9KTohMX1yZXR1cm4hMX0sSW5wdXQucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsY2hhbm5lbCxsaXN0ZW5lcil7dmFyIHRoYXQ9dGhpcztpZih2b2lkIDAhPT1saXN0ZW5lciYmXCJmdW5jdGlvblwiIT10eXBlb2YgbGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbGlzdGVuZXInIHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO2lmKHZvaWQgMD09PWNoYW5uZWwmJihjaGFubmVsPVwiYWxsXCIpLGNoYW5uZWwuY29uc3RydWN0b3IhPT1BcnJheSYmKGNoYW5uZWw9W2NoYW5uZWxdKSx3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1t0eXBlXSlpZih2b2lkIDA9PT1saXN0ZW5lcil0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdPVtdO2Vsc2UgZm9yKHZhciBvPTA7bzx0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdLmxlbmd0aDtvKyspdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXVtvXT09PWxpc3RlbmVyJiZ0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdLnNwbGljZShvLDEpO2Vsc2UgaWYod20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXtpZihjaGFubmVsLmluZGV4T2YoXCJhbGxcIik+LTEpe2NoYW5uZWw9W107Zm9yKHZhciBqPTE7MTY+PWo7aisrKWNoYW5uZWwucHVzaChqKX1pZighdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV0pcmV0dXJuIHRoaXM7Y2hhbm5lbC5mb3JFYWNoKGZ1bmN0aW9uKGNoTnVtKXt2YXIgbGlzdGVuZXJzPXRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoTnVtXTtpZihsaXN0ZW5lcnMpaWYodm9pZCAwPT09bGlzdGVuZXIpdGhhdC5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV1bY2hOdW1dPVtdO2Vsc2UgZm9yKHZhciBsPTA7bDxsaXN0ZW5lcnMubGVuZ3RoO2wrKylsaXN0ZW5lcnNbbF09PT1saXN0ZW5lciYmbGlzdGVuZXJzLnNwbGljZShsLDEpfSl9ZWxzZXtpZih2b2lkIDAhPT10eXBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7dGhpcy5faW5pdGlhbGl6ZVVzZXJIYW5kbGVycygpfXJldHVybiB0aGlzfSxJbnB1dC5wcm90b3R5cGUuX2luaXRpYWxpemVVc2VySGFuZGxlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHByb3AxIGluIHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUyl3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMuaGFzT3duUHJvcGVydHkocHJvcDEpJiYodGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbcHJvcDFdPXt9KTtmb3IodmFyIHByb3AyIGluIHdtLk1JRElfU1lTVEVNX01FU1NBR0VTKXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmhhc093blByb3BlcnR5KHByb3AyKSYmKHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bcHJvcDJdPVtdKX0sSW5wdXQucHJvdG90eXBlLl9vbk1pZGlNZXNzYWdlPWZ1bmN0aW9uKGUpe2UuZGF0YVswXTwyNDA/dGhpcy5fcGFyc2VDaGFubmVsRXZlbnQoZSk6ZS5kYXRhWzBdPD0yNTUmJnRoaXMuX3BhcnNlU3lzdGVtRXZlbnQoZSl9LElucHV0LnByb3RvdHlwZS5fcGFyc2VDaGFubmVsRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIGRhdGExLGRhdGEyLGNvbW1hbmQ9ZS5kYXRhWzBdPj40LGNoYW5uZWw9KDE1JmUuZGF0YVswXSkrMTtlLmRhdGEubGVuZ3RoPjEmJihkYXRhMT1lLmRhdGFbMV0sZGF0YTI9ZS5kYXRhLmxlbmd0aD4yP2UuZGF0YVsyXTp2b2lkIDApO3ZhciBldmVudD17dGFyZ2V0OnRoaXMsZGF0YTplLmRhdGEsdGltZXN0YW1wOmUudGltZVN0YW1wLGNoYW5uZWw6Y2hhbm5lbH07Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb2ZmfHxjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLm5vdGVvbiYmMD09PWRhdGEyPyhldmVudC50eXBlPVwibm90ZW9mZlwiLGV2ZW50Lm5vdGU9e251bWJlcjpkYXRhMSxuYW1lOndtLl9ub3Rlc1tkYXRhMSUxMl0sb2N0YXZlOndtLmdldE9jdGF2ZShkYXRhMSl9LGV2ZW50LnZlbG9jaXR5PWRhdGEyLzEyNyxldmVudC5yYXdWZWxvY2l0eT1kYXRhMik6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb24/KGV2ZW50LnR5cGU9XCJub3Rlb25cIixldmVudC5ub3RlPXtudW1iZXI6ZGF0YTEsbmFtZTp3bS5fbm90ZXNbZGF0YTElMTJdLG9jdGF2ZTp3bS5nZXRPY3RhdmUoZGF0YTEpfSxldmVudC52ZWxvY2l0eT1kYXRhMi8xMjcsZXZlbnQucmF3VmVsb2NpdHk9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMua2V5YWZ0ZXJ0b3VjaD8oZXZlbnQudHlwZT1cImtleWFmdGVydG91Y2hcIixldmVudC5ub3RlPXtudW1iZXI6ZGF0YTEsbmFtZTp3bS5fbm90ZXNbZGF0YTElMTJdLG9jdGF2ZTp3bS5nZXRPY3RhdmUoZGF0YTEpfSxldmVudC52YWx1ZT1kYXRhMi8xMjcpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMuY29udHJvbGNoYW5nZSYmZGF0YTE+PTAmJjExOT49ZGF0YTE/KGV2ZW50LnR5cGU9XCJjb250cm9sY2hhbmdlXCIsZXZlbnQuY29udHJvbGxlcj17bnVtYmVyOmRhdGExLG5hbWU6dGhpcy5nZXRDY05hbWVCeU51bWJlcihkYXRhMSl9LGV2ZW50LnZhbHVlPWRhdGEyKTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNoYW5uZWxtb2RlJiZkYXRhMT49MTIwJiYxMjc+PWRhdGExPyhldmVudC50eXBlPVwiY2hhbm5lbG1vZGVcIixldmVudC5jb250cm9sbGVyPXtudW1iZXI6ZGF0YTEsbmFtZTp0aGlzLmdldENoYW5uZWxNb2RlQnlOdW1iZXIoZGF0YTEpfSxldmVudC52YWx1ZT1kYXRhMik6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5wcm9ncmFtY2hhbmdlPyhldmVudC50eXBlPVwicHJvZ3JhbWNoYW5nZVwiLGV2ZW50LnZhbHVlPWRhdGExKTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNoYW5uZWxhZnRlcnRvdWNoPyhldmVudC50eXBlPVwiY2hhbm5lbGFmdGVydG91Y2hcIixldmVudC52YWx1ZT1kYXRhMS8xMjcpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucGl0Y2hiZW5kPyhldmVudC50eXBlPVwicGl0Y2hiZW5kXCIsZXZlbnQudmFsdWU9KChkYXRhMjw8NykrZGF0YTEtODE5MikvODE5Mik6ZXZlbnQudHlwZT1cInVua25vd25jaGFubmVsbWVzc2FnZVwiLHRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW2V2ZW50LnR5cGVdJiZ0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFtldmVudC50eXBlXVtjaGFubmVsXSYmdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbZXZlbnQudHlwZV1bY2hhbm5lbF0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7Y2FsbGJhY2soZXZlbnQpfSl9LElucHV0LnByb3RvdHlwZS5nZXRDY05hbWVCeU51bWJlcj1mdW5jdGlvbihudW1iZXIpe2lmKG51bWJlcj1wYXJzZUludChudW1iZXIpLCEobnVtYmVyPj0wJiYxMTk+PW51bWJlcikpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbCBjaGFuZ2UgbnVtYmVyIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMTkuXCIpO2Zvcih2YXIgY2MgaW4gd20uTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFUylpZihudW1iZXI9PT13bS5NSURJX0NPTlRST0xfQ0hBTkdFX01FU1NBR0VTW2NjXSlyZXR1cm4gY2M7cmV0dXJuIHZvaWQgMH0sSW5wdXQucHJvdG90eXBlLmdldENoYW5uZWxNb2RlQnlOdW1iZXI9ZnVuY3Rpb24obnVtYmVyKXtpZihudW1iZXI9cGFyc2VJbnQobnVtYmVyKSwhKG51bWJlcj49MTIwJiZzdGF0dXM8PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbCBjaGFuZ2UgbnVtYmVyIG11c3QgYmUgYmV0d2VlbiAxMjAgYW5kIDEyNy5cIik7Zm9yKHZhciBjbSBpbiB3bS5NSURJX0NIQU5ORUxfTU9ERV9NRVNTQUdFUylpZihudW1iZXI9PT13bS5NSURJX0NIQU5ORUxfTU9ERV9NRVNTQUdFU1tjbV0pcmV0dXJuIGNtfSxJbnB1dC5wcm90b3R5cGUuX3BhcnNlU3lzdGVtRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIGNvbW1hbmQ9ZS5kYXRhWzBdLGV2ZW50PXt0YXJnZXQ6dGhpcyxkYXRhOmUuZGF0YSx0aW1lc3RhbXA6ZS50aW1lU3RhbXB9O2NvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zeXNleD9ldmVudC50eXBlPVwic3lzZXhcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMudGltZWNvZGU/ZXZlbnQudHlwZT1cInRpbWVjb2RlXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnNvbmdwb3NpdGlvbj9ldmVudC50eXBlPVwic29uZ3Bvc2l0aW9uXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnNvbmdzZWxlY3Q/KGV2ZW50LnR5cGU9XCJzb25nc2VsZWN0XCIsZXZlbnQuc29uZz1lLmRhdGFbMV0pOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy50dW5pbmdyZXF1ZXN0P2V2ZW50LnR5cGU9XCJ0dW5pbmdyZXF1ZXN0XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmNsb2NrP2V2ZW50LnR5cGU9XCJjbG9ja1wiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zdGFydD9ldmVudC50eXBlPVwic3RhcnRcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVNbXCJjb250aW51ZVwiXT9ldmVudC50eXBlPVwiY29udGludWVcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RvcD9ldmVudC50eXBlPVwic3RvcFwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5hY3RpdmVzZW5zaW5nP2V2ZW50LnR5cGU9XCJhY3RpdmVzZW5zaW5nXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnJlc2V0P2V2ZW50LnR5cGU9XCJyZXNldFwiOmV2ZW50LnR5cGU9XCJ1bmtub3duc3lzdGVtbWVzc2FnZVwiLHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bZXZlbnQudHlwZV0mJnRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bZXZlbnQudHlwZV0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7Y2FsbGJhY2soZXZlbnQpfSl9LE91dHB1dC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihzdGF0dXMsZGF0YSx0aW1lc3RhbXApe2lmKCEoc3RhdHVzPj0xMjgmJjI1NT49c3RhdHVzKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzdGF0dXMgYnl0ZSBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAxMjggKDB4ODApIGFuZCAyNTUgKDB4RkYpLlwiKTt2b2lkIDA9PT1kYXRhJiYoZGF0YT1bXSksQXJyYXkuaXNBcnJheShkYXRhKXx8KGRhdGE9W2RhdGFdKTt2YXIgbWVzc2FnZT1bXTtyZXR1cm4gZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe3ZhciBwYXJzZWQ9cGFyc2VJbnQoaXRlbSk7aWYoIShwYXJzZWQ+PTAmJjI1NT49cGFyc2VkKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkRhdGEgYnl0ZXMgbXVzdCBiZSBpbnRlZ2VycyBiZXR3ZWVuIDAgKDB4MDApIGFuZCAyNTUgKDB4RkYpLlwiKTttZXNzYWdlLnB1c2gocGFyc2VkKX0pLHRoaXMuX21pZGlPdXRwdXQuc2VuZChbc3RhdHVzXS5jb25jYXQobWVzc2FnZSkscGFyc2VGbG9hdCh0aW1lc3RhbXApfHwwKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRTeXNleD1mdW5jdGlvbihtYW51ZmFjdHVyZXIsZGF0YSxvcHRpb25zKXtpZighd20uc3lzZXhFbmFibGVkKXRocm93IG5ldyBFcnJvcihcIlN5c2V4IG1lc3NhZ2Ugc3VwcG9ydCBtdXN0IGZpcnN0IGJlIGFjdGl2YXRlZC5cIik7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sbWFudWZhY3R1cmVyPVtdLmNvbmNhdChtYW51ZmFjdHVyZXIpLGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtpZigwPml0ZW18fGl0ZW0+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGRhdGEgYnl0ZXMgb2YgYSBzeXNleCBtZXNzYWdlIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwICgweDAwKSBhbmQgMTI3ICgweDdGKS5cIil9KSxkYXRhPW1hbnVmYWN0dXJlci5jb25jYXQoZGF0YSx3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zeXNleGVuZCksdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnN5c2V4LGRhdGEsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFRpbWVjb2RlUXVhcnRlckZyYW1lPWZ1bmN0aW9uKHZhbHVlLG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy50aW1lY29kZSx2YWx1ZSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU29uZ1Bvc2l0aW9uPWZ1bmN0aW9uKHZhbHVlLG9wdGlvbnMpe3ZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCxvcHRpb25zPW9wdGlvbnN8fHt9O3ZhciBtc2I9dmFsdWU+PjcmMTI3LGxzYj0xMjcmdmFsdWU7cmV0dXJuIHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25ncG9zaXRpb24sW21zYixsc2JdLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRTb25nU2VsZWN0PWZ1bmN0aW9uKHZhbHVlLG9wdGlvbnMpe2lmKHZhbHVlPXBhcnNlSW50KHZhbHVlKSxvcHRpb25zPW9wdGlvbnN8fHt9LCEodmFsdWU+PTAmJjEyNz49dmFsdWUpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHNvbmcgbnVtYmVyIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc29uZ3NlbGVjdCxbdmFsdWVdLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRUdW5pbmdSZXF1ZXN0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy50dW5pbmdyZXF1ZXN0LHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ2xvY2s9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmNsb2NrLHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3RhcnQ9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnN0YXJ0LHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ29udGludWU9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTW1wiY29udGludWVcIl0sdm9pZCAwLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRTdG9wPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zdG9wLHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQWN0aXZlU2Vuc2luZz1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuYWN0aXZlc2Vuc2luZyxbXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kUmVzZXQ9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnJlc2V0LHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zdG9wTm90ZT1mdW5jdGlvbihub3RlLGNoYW5uZWwsb3B0aW9ucyl7aWYoXCJhbGxcIj09PW5vdGUpcmV0dXJuIHRoaXMuc2VuZENoYW5uZWxNb2RlKFwiYWxsbm90ZXNvZmZcIiwwLGNoYW5uZWwsb3B0aW9ucyk7dmFyIG5WZWxvY2l0eT02NDtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSxvcHRpb25zLnZlbG9jaXR5PXBhcnNlRmxvYXQob3B0aW9ucy52ZWxvY2l0eSksb3B0aW9ucy5yYXdWZWxvY2l0eT8haXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEyNyYmKG5WZWxvY2l0eT1vcHRpb25zLnZlbG9jaXR5KTohaXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEmJihuVmVsb2NpdHk9MTI3Km9wdGlvbnMudmVsb2NpdHkpLHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoaXMuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLm5vdGVvZmY8PDQpKyhjaC0xKSxbaXRlbSxNYXRoLnJvdW5kKG5WZWxvY2l0eSldLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0uYmluZCh0aGlzKSl9LmJpbmQodGhpcykpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUucGxheU5vdGU9ZnVuY3Rpb24obm90ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciBuVmVsb2NpdHk9NjQ7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxvcHRpb25zLnZlbG9jaXR5PXBhcnNlRmxvYXQob3B0aW9ucy52ZWxvY2l0eSksb3B0aW9ucy5yYXdWZWxvY2l0eT8haXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEyNyYmKG5WZWxvY2l0eT1vcHRpb25zLnZlbG9jaXR5KTohaXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEmJihuVmVsb2NpdHk9MTI3Km9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMudGltZT10aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSx0aGlzLl9jb252ZXJ0Tm90ZVRvQXJyYXkobm90ZSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXt3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb248PDQpKyhjaC0xKSxbaXRlbSxNYXRoLnJvdW5kKG5WZWxvY2l0eSldLG9wdGlvbnMudGltZSl9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKSxvcHRpb25zLmR1cmF0aW9uPXBhcnNlRmxvYXQob3B0aW9ucy5kdXJhdGlvbiksb3B0aW9ucy5kdXJhdGlvbil7b3B0aW9ucy5kdXJhdGlvbjw9MCYmKG9wdGlvbnMuZHVyYXRpb249MCk7dmFyIG5SZWxlYXNlPTY0O29wdGlvbnMucmVsZWFzZT1wYXJzZUZsb2F0KG9wdGlvbnMucmVsZWFzZSksb3B0aW9ucy5yYXdWZWxvY2l0eT8haXNOYU4ob3B0aW9ucy5yZWxlYXNlKSYmb3B0aW9ucy5yZWxlYXNlPj0wJiZvcHRpb25zLnJlbGVhc2U8PTEyNyYmKG5SZWxlYXNlPW9wdGlvbnMucmVsZWFzZSk6IWlzTmFOKG9wdGlvbnMucmVsZWFzZSkmJm9wdGlvbnMucmVsZWFzZT49MCYmb3B0aW9ucy5yZWxlYXNlPD0xJiYoblJlbGVhc2U9MTI3Km9wdGlvbnMucmVsZWFzZSksdGhpcy5fY29udmVydE5vdGVUb0FycmF5KG5vdGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7d20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9mZjw8NCkrKGNoLTEpLFtpdGVtLE1hdGgucm91bmQoblJlbGVhc2UpXSwob3B0aW9ucy50aW1lfHx3bS50aW1lKStvcHRpb25zLmR1cmF0aW9uKX0uYmluZCh0aGlzKSl9LmJpbmQodGhpcykpfXJldHVybiB0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRLZXlBZnRlcnRvdWNoPWZ1bmN0aW9uKG5vdGUsY2hhbm5lbCxwcmVzc3VyZSxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sMT5jaGFubmVsfHxjaGFubmVsPjE2KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNoYW5uZWwgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDE2LlwiKTtwcmVzc3VyZT1wYXJzZUZsb2F0KHByZXNzdXJlKSwoaXNOYU4ocHJlc3N1cmUpfHwwPnByZXNzdXJlfHxwcmVzc3VyZT4xKSYmKHByZXNzdXJlPS41KTt2YXIgblByZXNzdXJlPU1hdGgucm91bmQoMTI3KnByZXNzdXJlKTtyZXR1cm4gdGhpcy5fY29udmVydE5vdGVUb0FycmF5KG5vdGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7d20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMua2V5YWZ0ZXJ0b3VjaDw8NCkrKGNoLTEpLFtpdGVtLG5QcmVzc3VyZV0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRDb250cm9sQ2hhbmdlPWZ1bmN0aW9uKGNvbnRyb2xsZXIsdmFsdWUsY2hhbm5lbCxvcHRpb25zKXtpZihvcHRpb25zPW9wdGlvbnN8fHt9LFwic3RyaW5nXCI9PXR5cGVvZiBjb250cm9sbGVyKXtpZihjb250cm9sbGVyPXdtLk1JRElfQ09OVFJPTF9DSEFOR0VfTUVTU0FHRVNbY29udHJvbGxlcl0sIWNvbnRyb2xsZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgY29udHJvbGxlciBuYW1lLlwiKX1lbHNlIGlmKGNvbnRyb2xsZXI9cGFyc2VJbnQoY29udHJvbGxlciksIShjb250cm9sbGVyPj0wJiYxMTk+PWNvbnRyb2xsZXIpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQ29udHJvbGxlciBudW1iZXJzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMTkuXCIpO2lmKHZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNvbnRyb2xsZXIgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyNy5cIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoaXMuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNvbnRyb2xjaGFuZ2U8PDQpKyhjaC0xKSxbY29udHJvbGxlcix2YWx1ZV0sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLl9zZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7aWYocGFyYW1ldGVyWzBdPXBhcnNlSW50KHBhcmFtZXRlclswXSksIShwYXJhbWV0ZXJbMF0+PTAmJnBhcmFtZXRlclswXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjb250cm9sNjUgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtpZihwYXJhbWV0ZXJbMV09cGFyc2VJbnQocGFyYW1ldGVyWzFdKSwhKHBhcmFtZXRlclsxXT49MCYmcGFyYW1ldGVyWzFdPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2w2NCB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDEwMSxwYXJhbWV0ZXJbMF0sY2hhbm5lbCx7dGltZTp0aW1lfSksdGhhdC5zZW5kQ29udHJvbENoYW5nZSgxMDAscGFyYW1ldGVyWzFdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2VsZWN0Tm9uUmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsY2hhbm5lbCx0aW1lKXt2YXIgdGhhdD10aGlzO2lmKHBhcmFtZXRlclswXT1wYXJzZUludChwYXJhbWV0ZXJbMF0pLCEocGFyYW1ldGVyWzBdPj0wJiZwYXJhbWV0ZXJbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDYzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYocGFyYW1ldGVyWzFdPXBhcnNlSW50KHBhcmFtZXRlclsxXSksIShwYXJhbWV0ZXJbMV0+PTAmJnBhcmFtZXRlclsxXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjb250cm9sNjIgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSg5OSxwYXJhbWV0ZXJbMF0sY2hhbm5lbCx7dGltZTp0aW1lfSksdGhhdC5zZW5kQ29udHJvbENoYW5nZSg5OCxwYXJhbWV0ZXJbMV0sY2hhbm5lbCx7dGltZTp0aW1lfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLl9zZXRDdXJyZW50UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihkYXRhLGNoYW5uZWwsdGltZSl7dmFyIHRoYXQ9dGhpcztpZihkYXRhPVtdLmNvbmNhdChkYXRhKSxkYXRhWzBdPXBhcnNlSW50KGRhdGFbMF0pLCEoZGF0YVswXT49MCYmZGF0YVswXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBtc2IgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSg2LGRhdGFbMF0sY2hhbm5lbCx7dGltZTp0aW1lfSl9KSxkYXRhWzFdPXBhcnNlSW50KGRhdGFbMV0pLGRhdGFbMV0+PTAmJmRhdGFbMV08PTEyNyYmd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSgzOCxkYXRhWzFdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fZGVzZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKGNoYW5uZWwsdGltZSl7dmFyIHRoYXQ9dGhpcztyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSgxMDEsMTI3LGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAwLDEyNyxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsZGF0YSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhQXJyYXkuaXNBcnJheShwYXJhbWV0ZXIpKXtpZighd20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdKXRocm93IG5ldyBFcnJvcihcIlRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIGlzIG5vdCBhdmFpbGFibGUuXCIpO3BhcmFtZXRlcj13bS5NSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSW3BhcmFtZXRlcl19cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9zZXRDdXJyZW50UmVnaXN0ZXJlZFBhcmFtZXRlcihkYXRhLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXROb25SZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixkYXRhLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LCEocGFyYW1ldGVyWzBdPj0wJiZwYXJhbWV0ZXJbMF08PTEyNyYmcGFyYW1ldGVyWzFdPj0wJiZwYXJhbWV0ZXJbMV08PTEyNykpdGhyb3cgbmV3IEVycm9yKFwiUG9zaXRpb24gMCBhbmQgMSBvZiB0aGUgMi1wb3NpdGlvbiBwYXJhbWV0ZXIgYXJyYXkgbXVzdCBib3RoIGJlIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gZGF0YT1bXS5jb25jYXQoZGF0YSksd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5fc2VsZWN0Tm9uUmVnaXN0ZXJlZFBhcmFtZXRlcihwYXJhbWV0ZXIsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoYXQuX3NldEN1cnJlbnRSZWdpc3RlcmVkUGFyYW1ldGVyKGRhdGEsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoYXQuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihjaGFubmVsLG9wdGlvbnMudGltZSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLmluY3JlbWVudFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LCFBcnJheS5pc0FycmF5KHBhcmFtZXRlcikpe2lmKCF3bS5NSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSW3BhcmFtZXRlcl0pdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgaXMgbm90IGF2YWlsYWJsZS5cIik7cGFyYW1ldGVyPXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXX1yZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihwYXJhbWV0ZXIsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTYsMCxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pLHRoYXQuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihjaGFubmVsLG9wdGlvbnMudGltZSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLmRlY3JlbWVudFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucyl7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhQXJyYXkuaXNBcnJheShwYXJhbWV0ZXIpKXtpZighd20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHBhcmFtZXRlciBpcyBub3QgYXZhaWxhYmxlLlwiKTtwYXJhbWV0ZXI9d20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdfXJldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLl9zZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMudGltZSksdGhpcy5zZW5kQ29udHJvbENoYW5nZSg5NywwLGNoYW5uZWwse3RpbWU6b3B0aW9ucy50aW1lfSksdGhpcy5fZGVzZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKGNoYW5uZWwsb3B0aW9ucy50aW1lKX0uYmluZCh0aGlzKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRQaXRjaEJlbmRSYW5nZT1mdW5jdGlvbihzZW1pdG9uZXMsY2VudHMsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sc2VtaXRvbmVzPXBhcnNlSW50KHNlbWl0b25lcyl8fDAsIShzZW1pdG9uZXM+PTAmJjEyNz49c2VtaXRvbmVzKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzZW1pdG9uZXMgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtpZihjZW50cz1wYXJzZUludChjZW50cyl8fDAsIShjZW50cz49MCYmMTI3Pj1jZW50cykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY2VudHMgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZXRSZWdpc3RlcmVkUGFyYW1ldGVyKFwicGl0Y2hiZW5kcmFuZ2VcIixbc2VtaXRvbmVzLGNlbnRzXSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRNb2R1bGF0aW9uUmFuZ2U9ZnVuY3Rpb24oc2VtaXRvbmVzLGNlbnRzLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHNlbWl0b25lcz1wYXJzZUludChzZW1pdG9uZXMpfHwwLCEoc2VtaXRvbmVzPj0wJiYxMjc+PXNlbWl0b25lcykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc2VtaXRvbmVzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYoY2VudHM9cGFyc2VJbnQoY2VudHMpfHwwLCEoY2VudHM+PTAmJjEyNz49Y2VudHMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNlbnRzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcIm1vZHVsYXRpb25yYW5nZVwiLFtzZW1pdG9uZXMsY2VudHNdLGNoYW5uZWwse3RpbWU6b3B0aW9ucy50aW1lfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNldE1hc3RlclR1bmluZz1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUZsb2F0KHZhbHVlKXx8MCwtNjU+PXZhbHVlfHx2YWx1ZT49NjQpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGRlY2ltYWwgbnVtYmVyIGxhcmdlciB0aGFuIC02NSBhbmQgc21hbGxlciB0aGFuIDY0LlwiKTt2YXIgY29hcnNlPXBhcnNlSW50KHZhbHVlKSs2NCxmaW5lPXZhbHVlLXBhcnNlSW50KHZhbHVlKTtmaW5lPU1hdGgucm91bmQoKGZpbmUrMSkvMioxNjM4Myk7dmFyIG1zYj1maW5lPj43JjEyNyxsc2I9MTI3JmZpbmU7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcImNoYW5uZWxjb2Fyc2V0dW5pbmdcIixjb2Fyc2UsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KSx0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJjaGFubmVsZmluZXR1bmluZ1wiLFttc2IsbHNiXSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRUdW5pbmdQcm9ncmFtPWZ1bmN0aW9uKHZhbHVlLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHZhbHVlPXBhcnNlSW50KHZhbHVlKSwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBwcm9ncmFtIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcInR1bmluZ3Byb2dyYW1cIix2YWx1ZSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRUdW5pbmdCYW5rPWZ1bmN0aW9uKHZhbHVlLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBiYW5rIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcInR1bmluZ2JhbmtcIix2YWx1ZSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ2hhbm5lbE1vZGU9ZnVuY3Rpb24oY29tbWFuZCx2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sXCJzdHJpbmdcIj09dHlwZW9mIGNvbW1hbmQpe2lmKGNvbW1hbmQ9d20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVNbY29tbWFuZF0sIWNvbW1hbmQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgY2hhbm5lbCBtb2RlIG1lc3NhZ2UgbmFtZS5cIil9ZWxzZSBpZihjb21tYW5kPXBhcnNlSW50KGNvbW1hbmQpLCEoY29tbWFuZD49MTIwJiYxMjc+PWNvbW1hbmQpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQ2hhbm5lbCBtb2RlIG51bWVyaWNhbCBpZGVudGlmaWVycyBtdXN0IGJlIGJldHdlZW4gMTIwIGFuZCAxMjcuXCIpO2lmKHZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCwwPnZhbHVlfHx2YWx1ZT4xMjcpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJWYWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsbW9kZTw8NCkrKGNoLTEpLFtjb21tYW5kLHZhbHVlXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSl9LmJpbmQodGhpcykpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFByb2dyYW1DaGFuZ2U9ZnVuY3Rpb24ocHJvZ3JhbSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxwcm9ncmFtPXBhcnNlSW50KHByb2dyYW0pLFxuaXNOYU4ocHJvZ3JhbSl8fDA+cHJvZ3JhbXx8cHJvZ3JhbT4xMjcpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQcm9ncmFtIG51bWJlcnMgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyNy5cIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLnByb2dyYW1jaGFuZ2U8PDQpKyhjaC0xKSxbcHJvZ3JhbV0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ2hhbm5lbEFmdGVydG91Y2g9ZnVuY3Rpb24ocHJlc3N1cmUsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO29wdGlvbnM9b3B0aW9uc3x8e30scHJlc3N1cmU9cGFyc2VGbG9hdChwcmVzc3VyZSksKGlzTmFOKHByZXNzdXJlKXx8MD5wcmVzc3VyZXx8cHJlc3N1cmU+MSkmJihwcmVzc3VyZT0uNSk7dmFyIG5QcmVzc3VyZT1NYXRoLnJvdW5kKDEyNypwcmVzc3VyZSk7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNoYW5uZWxhZnRlcnRvdWNoPDw0KSsoY2gtMSksW25QcmVzc3VyZV0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kUGl0Y2hCZW5kPWZ1bmN0aW9uKGJlbmQsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sYmVuZD1wYXJzZUZsb2F0KGJlbmQpLGlzTmFOKGJlbmQpfHwtMT5iZW5kfHxiZW5kPjEpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQaXRjaCBiZW5kIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAtMSBhbmQgMS5cIik7dmFyIG5MZXZlbD1NYXRoLnJvdW5kKChiZW5kKzEpLzIqMTYzODMpLG1zYj1uTGV2ZWw+PjcmMTI3LGxzYj0xMjcmbkxldmVsO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5waXRjaGJlbmQ8PDQpKyhjaC0xKSxbbHNiLG1zYl0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fcGFyc2VUaW1lUGFyYW1ldGVyPWZ1bmN0aW9uKHRpbWUpe3ZhciBwYXJzZWQsdmFsdWU7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHRpbWUmJlwiK1wiPT09dGltZS5zdWJzdHJpbmcoMCwxKT8ocGFyc2VkPXBhcnNlRmxvYXQodGltZSkscGFyc2VkJiZwYXJzZWQ+MCYmKHZhbHVlPXdtLnRpbWUrcGFyc2VkKSk6KHBhcnNlZD1wYXJzZUZsb2F0KHRpbWUpLHBhcnNlZD53bS50aW1lJiYodmFsdWU9cGFyc2VkKSksdmFsdWV9LE91dHB1dC5wcm90b3R5cGUuX2NvbnZlcnROb3RlVG9BcnJheT1mdW5jdGlvbihub3RlKXt2YXIgbm90ZXM9W107cmV0dXJuIEFycmF5LmlzQXJyYXkobm90ZSl8fChub3RlPVtub3RlXSksbm90ZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe25vdGVzLnB1c2god20uZ3Vlc3NOb3RlTnVtYmVyKGl0ZW0pKX0pLG5vdGVzfSxPdXRwdXQucHJvdG90eXBlLl9vbk1pZGlNZXNzYWdlPWZ1bmN0aW9uKGUpe30sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZcIm9iamVjdFwiPT10eXBlb2YgZGVmaW5lLmFtZD9kZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gd219KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz13bTpzY29wZS5XZWJNaWRpfHwoc2NvcGUuV2ViTWlkaT13bSl9KHRoaXMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJtaWRpL3dlYm1pZGkubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBQSE9OR1xcblxcbnZhcnlpbmcgdmVjMyB2Vmlld1Bvc2l0aW9uO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuI2luY2x1ZGUgPGNvbW1vbj5cXG4jaW5jbHVkZSA8dXZfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX3ZlcnRleD5cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgICNpbmNsdWRlIDx1dl92ZXJ0ZXg+XFxuXFxuICAgIHZlYzMgdHJhbnNmb3JtZWQgPSB2ZWMzKCBwb3NpdGlvbiApO1xcbiAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCB0cmFuc2Zvcm1lZCwgMS4wICk7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxuXFxuICAgIHZWaWV3UG9zaXRpb24gPSAtIG12UG9zaXRpb24ueHl6O1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgI2luY2x1ZGUgPGZvZ192ZXJ0ZXg+XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG4jZGVmaW5lIE1fUEkgMy4xNFxcblxcbnVuaWZvcm0gdmVjMyBkaWZmdXNlO1xcbnVuaWZvcm0gdmVjMyBlbWlzc2l2ZTtcXG51bmlmb3JtIHZlYzMgc3BlY3VsYXI7XFxudW5pZm9ybSBmbG9hdCBzaGluaW5lc3M7XFxudW5pZm9ybSBmbG9hdCBvcGFjaXR5O1xcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxudW5pZm9ybSB2ZWMzIHVTdHJpcGVPcmllbnRhdGlvbjtcXG51bmlmb3JtIGZsb2F0IHVJbnZlcnQ7XFxudW5pZm9ybSB2ZWMzIHVTcXVhcmU7XFxudW5pZm9ybSBmbG9hdCB1V2lkdGg7XFxudW5pZm9ybSBmbG9hdCB1SGVpZ2h0O1xcbnVuaWZvcm0gZmxvYXQgdUxlbmd0aDtcXG51bmlmb3JtIGZsb2F0IHVQcm9ncmVzcztcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbiNpbmNsdWRlIDxjb21tb24+XFxuI2luY2x1ZGUgPHV2X3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX2ZyYWdtZW50PlxcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjNCBjb2xvciA9IHZlYzQoMC4pO1xcblxcbiAgICBmbG9hdCBhYnNYID0gZmxvb3IoLWNvcygodVRpbWUgKiAwLjEgKyBNX1BJICogdVNxdWFyZS54ICogKCAoIHZVdi54ICsgdVByb2dyZXNzICsgMC4xNSApICogMi4gLSAxLiApICogMC41KSkpICsgMS47XFxuICAgIGZsb2F0IGFic1kgPSBmbG9vcigtY29zKChNX1BJICogdVNxdWFyZS55ICogKCB2VXYueSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcblxcbiAgICBpZiAoIGFic1ggPiAwLiB8fCBhYnNZID4gMC4gKSB7XFxuICAgICAgIGNvbG9yID0gdmVjNCh2ZWMzKDEuMCAtIHVJbnZlcnQpLCBvcGFjaXR5KTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIGNvbG9yID0gdmVjNCh2ZWMzKDAuMCArIHVJbnZlcnQpLCBvcGFjaXR5KTtcXG4gICAgfVxcblxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG5cXG4gICAgI2luY2x1ZGUgPGZvZ19mcmFnbWVudD5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vc2hhZGVycy9wcm9ncmVzcy5mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSBzYW1wbGVyMkQgdEJsZW5kO1xcbnVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjNCBiYXNlID0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2KTtcXG4gICAgdmVjNCBibGVuZCA9IHRleHR1cmUyRCh0QmxlbmQsIHZVdik7XFxuXFxuICAgIHZlYzQgY29sb3IgPSAoMS4wIC0gKCgxLjAgLSBiYXNlKSAqICgxLjAgLSBibGVuZCkpKTtcXG4gICAgXFxuICAgIGdsX0ZyYWdDb2xvciA9IGNvbG9yICogb3BhY2l0eSArIGJhc2UgKiAoIDEuIC0gb3BhY2l0eSApOztcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2FkZGl0aXZlLmZzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0dlV2ID0gdXY7XFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYmFzaWMudnNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgdmVjNCBzdW0gPSB2ZWM0KDApO1xcbiAgIHZlYzIgdGV4Y29vcmQgPSB2VXY7XFxuICBcXG4gICBmb3IoIGludCBpPSAtNCA7aSA8IDQ7IGkrKylcXG4gICB7XFxuICAgICAgICBmb3IgKCBpbnQgaiA9IC0zOyBqIDwgMzsgaisrKVxcbiAgICAgICAge1xcbiAgICAgICAgICAgIHN1bSArPSB0ZXh0dXJlMkQodElucHV0LCB0ZXhjb29yZCArIHZlYzIoaiwgaSkqMC4wMDQpICogMC4yNTtcXG4gICAgICAgIH1cXG4gICB9XFxuICAgICAgIGlmICh0ZXh0dXJlMkQodElucHV0LCB0ZXhjb29yZCkuciA8IDAuMylcXG4gICAge1xcbiAgICAgICBnbF9GcmFnQ29sb3IgPSBzdW0qc3VtKjAuMDEyICsgdGV4dHVyZTJEKHRJbnB1dCwgdGV4Y29vcmQpO1xcbiAgICB9XFxuICAgIGVsc2VcXG4gICAge1xcbiAgICAgICAgaWYgKHRleHR1cmUyRCh0SW5wdXQsIHRleGNvb3JkKS5yIDwgMC41KVxcbiAgICAgICAge1xcbiAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHN1bSpzdW0qMC4wMDkgKyB0ZXh0dXJlMkQodElucHV0LCB0ZXhjb29yZCk7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlXFxuICAgICAgICB7XFxuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gc3VtKnN1bSowLjAwNzUgKyB0ZXh0dXJlMkQodElucHV0LCB0ZXhjb29yZCk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2Jsb29tLmZzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSBmbG9hdCBrZXJuZWw7XFxudW5pZm9ybSBmbG9hdCBzY2FsZTtcXG51bmlmb3JtIGZsb2F0IHRocmVzaDtcXG5cXG52b2lkIG1haW4oKVxcbntcXG4gICAgdmVjNCBzdW0gPSB2ZWM0KDApO1xcblxcbiAgICAvLyBtZXNzIG9mIGZvciBsb29wcyBkdWUgdG8gZ3B1IGNvbXBpbGVyL2hhcmR3YXJlIGxpbWl0YXRpb25zXFxuICAgIGludCBqPS0yO1xcbiAgICBmb3IoIGludCBpPS0yOyBpPD0yOyBpKyspIHN1bSs9dGV4dHVyZTJEKHRJbnB1dCx2VXYrdmVjMihpLGopKmtlcm5lbCk7XFxuICAgIGo9LTE7XFxuICAgIGZvciggaW50IGk9LTI7IGk8PTI7IGkrKykgc3VtKz10ZXh0dXJlMkQodElucHV0LHZVdit2ZWMyKGksaikqa2VybmVsKTtcXG4gICAgaj0wO1xcbiAgICBmb3IoIGludCBpPS0yOyBpPD0yOyBpKyspIHN1bSs9dGV4dHVyZTJEKHRJbnB1dCx2VXYrdmVjMihpLGopKmtlcm5lbCk7XFxuICAgIGo9MTtcXG4gICAgZm9yKCBpbnQgaT0tMjsgaTw9MjsgaSsrKSBzdW0rPXRleHR1cmUyRCh0SW5wdXQsdlV2K3ZlYzIoaSxqKSprZXJuZWwpO1xcbiAgICBqPTI7XFxuICAgIGZvciggaW50IGk9LTI7IGk8PTI7IGkrKykgc3VtKz10ZXh0dXJlMkQodElucHV0LHZVdit2ZWMyKGksaikqa2VybmVsKTtcXG4gICAgc3VtLz0yNS4wO1xcblxcbiAgICB2ZWM0IHM9dGV4dHVyZTJEKHRJbnB1dCwgdlV2KTtcXG4gICAgZ2xfRnJhZ0NvbG9yPXM7XFxuXFxuICAgIC8vIHVzZSB0aGUgYmx1cnJlZCBjb2xvdXIgaWYgaXQncyBicmlnaHQgZW5vdWdoXFxuICAgIC8vIGlmIChsZW5ndGgoc3VtKT50aHJlc2gpXFxuICAgIC8vIHtcXG4gICAgICAgIGdsX0ZyYWdDb2xvciArPXN1bSpzY2FsZTtcXG4gICAgLy8gfVxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvYmxvb20yLmZzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSB2ZWMyIGluY3JlbWVudDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgICAgdmVjNCBjb2xvciA9IHZlYzQoMC4wKTtcXG5cXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2IC0gaW5jcmVtZW50ICogNC4wKSkgKiAwLjA1MTtcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2IC0gaW5jcmVtZW50ICogMy4wKSkgKiAwLjA5MTg7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiAtIGluY3JlbWVudCAqIDIuMCkpICogMC4xMjI0NTtcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2IC0gaW5jcmVtZW50ICogMS4wKSkgKiAwLjE1MzE7XFxuICAgICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgKHZVdiArIGluY3JlbWVudCAqIDAuMCkpICogMC4xNjMzO1xcbiAgICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgKyBpbmNyZW1lbnQgKiAxLjApKSAqIDAuMTUzMTtcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2ICsgaW5jcmVtZW50ICogMi4wKSkgKiAwLjEyMjQ1O1xcbiAgICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgKyBpbmNyZW1lbnQgKiAzLjApKSAqIDAuMDkxODtcXG4gICAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCAodlV2ICsgaW5jcmVtZW50ICogNC4wKSkgKiAwLjA1MTtcXG5cXG4gICAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2Jsb29tdGVzdC5mc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gdmVjMiBkZWx0YTtcXG5cXG5jb25zdCBmbG9hdCBzYW1wbGVzID0gMzAuO1xcblxcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLGZsb2F0IHNlZWQpe3JldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXorc2VlZCxzY2FsZSkpKjQzNzU4LjU0NTMrc2VlZCk7fVxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgdmVjNCBjb2xvcj12ZWM0KDAuMCk7XFxuICAgIGZsb2F0IHRvdGFsPTAuMDtcXG4gICAgZmxvYXQgb2Zmc2V0PXJhbmRvbSh2ZWMzKDEyLjk4OTgsNzguMjMzLDE1MS43MTgyKSwwLjApO1xcbiAgICBmb3IoZmxvYXQgdD0tc2FtcGxlczt0PD1zYW1wbGVzO3QrKyl7XFxuICAgICAgICBmbG9hdCBwZXJjZW50PSh0K29mZnNldC0wLjUpL3NhbXBsZXM7XFxuICAgICAgICBmbG9hdCB3ZWlnaHQ9MS4wLWFicyhwZXJjZW50KTtcXG4gICAgICAgIHZlYzQgc2FtcGxlPXRleHR1cmUyRCh0SW5wdXQsdlV2K2RlbHRhKnBlcmNlbnQpO1xcbiAgICAgICAgc2FtcGxlLnJnYio9c2FtcGxlLmE7XFxuICAgICAgICBjb2xvcis9c2FtcGxlKndlaWdodDtcXG4gICAgICAgIHRvdGFsKz13ZWlnaHQ7XFxuICAgIH1cXG4gICAgXFxuICAgIGdsX0ZyYWdDb2xvcj1jb2xvci90b3RhbDtcXG4gICAgZ2xfRnJhZ0NvbG9yLnJnYi89Z2xfRnJhZ0NvbG9yLmErMC4wMDAwMTtcXG4gICAgXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9ib3gtYmx1ci5mc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcblxcbnZvaWQgbWFpbigpIHtcXG5cXHRnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodElucHV0LCB2VXYpO1xcblxcblxcdC8vIGdsX0ZyYWdDb2xvciA9IHZlYzQodmVjMyh2VXYueSksIDEuKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2NvcHkuZnNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxuXFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcblxcbnVuaWZvcm0gZmxvYXQgbm9pc2VBbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBub2lzZVNwZWVkO1xcbnVuaWZvcm0gZmxvYXQgdmlnbmV0dGVGYWxsb2Y7XFxudW5pZm9ybSBmbG9hdCB2aWduZXR0ZUFtb3VudDtcXG51bmlmb3JtIHZlYzIgc3BsaXREZWx0YTtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHpvb21CbHVyU3RyZW5ndGg7XFxudW5pZm9ybSBmbG9hdCBicmlnaHRuZXNzO1xcbnVuaWZvcm0gZmxvYXQgY29udHJhc3Q7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG5mbG9hdCByYW5kb20odmVjMiBuLCBmbG9hdCBvZmZzZXQgKXtcXG5cXHQvL3JldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXorc2VlZCxzY2FsZSkpKjQzNzU4LjU0NTMpO1xcblxcdHJldHVybiAuNSAtIGZyYWN0KHNpbihkb3Qobi54eSArIHZlYzIoIG9mZnNldCwgMC4gKSwgdmVjMigxMi45ODk4LCA3OC4yMzMpKSkqIDQzNzU4LjU0NTMpO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuXFxuICAgIC8vIHJnYiBzcGxpdFxcbiAgICB2ZWMyIGRpciA9IHZVdiAtIHZlYzIoIC41ICk7XFxuXFx0ZmxvYXQgZCA9IC43ICogbGVuZ3RoKCBkaXIgKTtcXG5cXHRub3JtYWxpemUoIGRpciApO1xcblxcdHZlYzIgdmFsdWUgPSBkICogZGlyICogc3BsaXREZWx0YTtcXG5cXHR2ZWM0IGMxID0gdGV4dHVyZTJEKCB0SW5wdXQsIHZVdiAtIHZhbHVlIC8gcmVzb2x1dGlvbi54ICk7XFxuXFx0dmVjNCBjMiA9IHRleHR1cmUyRCggdElucHV0LCB2VXYgKTtcXG5cXHR2ZWM0IGMzID0gdGV4dHVyZTJEKCB0SW5wdXQsIHZVdiArIHZhbHVlIC8gcmVzb2x1dGlvbi55ICk7XFxuXFx0Y29sb3IgPSB2ZWM0KCBjMS5yLCBjMi5nLCBjMy5iLCBjMS5hICsgYzIuYSArIGMzLmIgKTtcXG5cXG4gICAgLy9ub2lzZVxcbiAgICBjb2xvciArPSB2ZWM0KCB2ZWMzKCBub2lzZUFtb3VudCAqIHJhbmRvbSggdlV2LCAuMDAwMDEgKiBub2lzZVNwZWVkICogdGltZSApICksIDEuICk7XFxuXFxuICAgIHZlYzMgY29sb3JDb250cmFzdGVkID0gY29sb3IucmdiICogY29udHJhc3Q7XFxuICAgIHZlYzMgYnJpZ2h0ID0gY29sb3JDb250cmFzdGVkICsgdmVjMyhicmlnaHRuZXNzKTtcXG4gICAgY29sb3IucmdiID0gYnJpZ2h0O1xcbiAgICBcXG4gICAgLy92aWduZXR0ZVxcbiAgICBmbG9hdCBkaXN0ID0gZGlzdGFuY2UodlV2LCB2ZWMyKDAuNSwgMC41KSk7XFxuICAgIGNvbG9yLnJnYiAqPSBzbW9vdGhzdGVwKDAuOCwgdmlnbmV0dGVGYWxsb2YgKiAwLjc5OSwgZGlzdCAqICh2aWduZXR0ZUFtb3VudCArIHZpZ25ldHRlRmFsbG9mKSk7XFxuXFxuICAgIGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvY3VzdG9tLmZzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL2RvZi5mc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbiNkZWZpbmUgRlhBQV9SRURVQ0VfTUlOICAgKDEuMC8xMjguMClcXG4jZGVmaW5lIEZYQUFfUkVEVUNFX01VTCAgICgxLjAvOC4wKVxcbiNkZWZpbmUgRlhBQV9TUEFOX01BWCAgICAgOC4wXFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICB2ZWMyIHJlcyA9IDEuIC8gcmVzb2x1dGlvbjtcXG5cXG4gICAgdmVjMyByZ2JOVyA9IHRleHR1cmUyRCggdElucHV0LCAoIHZVdi54eSArIHZlYzIoIC0xLjAsIC0xLjAgKSAqIHJlcyApICkueHl6O1xcbiAgICB2ZWMzIHJnYk5FID0gdGV4dHVyZTJEKCB0SW5wdXQsICggdlV2Lnh5ICsgdmVjMiggMS4wLCAtMS4wICkgKiByZXMgKSApLnh5ejtcXG4gICAgdmVjMyByZ2JTVyA9IHRleHR1cmUyRCggdElucHV0LCAoIHZVdi54eSArIHZlYzIoIC0xLjAsIDEuMCApICogcmVzICkgKS54eXo7XFxuICAgIHZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQoIHRJbnB1dCwgKCB2VXYueHkgKyB2ZWMyKCAxLjAsIDEuMCApICogcmVzICkgKS54eXo7XFxuICAgIHZlYzQgcmdiYU0gID0gdGV4dHVyZTJEKCB0SW5wdXQsICB2VXYueHkgICogcmVzICk7XFxuICAgIHZlYzMgcmdiTSAgPSByZ2JhTS54eXo7XFxuICAgIHZlYzMgbHVtYSA9IHZlYzMoIDAuMjk5LCAwLjU4NywgMC4xMTQgKTtcXG5cXG4gICAgZmxvYXQgbHVtYU5XID0gZG90KCByZ2JOVywgbHVtYSApO1xcbiAgICBmbG9hdCBsdW1hTkUgPSBkb3QoIHJnYk5FLCBsdW1hICk7XFxuICAgIGZsb2F0IGx1bWFTVyA9IGRvdCggcmdiU1csIGx1bWEgKTtcXG4gICAgZmxvYXQgbHVtYVNFID0gZG90KCByZ2JTRSwgbHVtYSApO1xcbiAgICBmbG9hdCBsdW1hTSAgPSBkb3QoIHJnYk0sICBsdW1hICk7XFxuICAgIGZsb2F0IGx1bWFNaW4gPSBtaW4oIGx1bWFNLCBtaW4oIG1pbiggbHVtYU5XLCBsdW1hTkUgKSwgbWluKCBsdW1hU1csIGx1bWFTRSApICkgKTtcXG4gICAgZmxvYXQgbHVtYU1heCA9IG1heCggbHVtYU0sIG1heCggbWF4KCBsdW1hTlcsIGx1bWFORSkgLCBtYXgoIGx1bWFTVywgbHVtYVNFICkgKSApO1xcblxcbiAgICB2ZWMyIGRpcjtcXG4gICAgZGlyLnggPSAtKChsdW1hTlcgKyBsdW1hTkUpIC0gKGx1bWFTVyArIGx1bWFTRSkpO1xcbiAgICBkaXIueSA9ICAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XFxuXFxuICAgIGZsb2F0IGRpclJlZHVjZSA9IG1heCggKCBsdW1hTlcgKyBsdW1hTkUgKyBsdW1hU1cgKyBsdW1hU0UgKSAqICggMC4yNSAqIEZYQUFfUkVEVUNFX01VTCApLCBGWEFBX1JFRFVDRV9NSU4gKTtcXG5cXG4gICAgZmxvYXQgcmNwRGlyTWluID0gMS4wIC8gKCBtaW4oIGFicyggZGlyLnggKSwgYWJzKCBkaXIueSApICkgKyBkaXJSZWR1Y2UgKTtcXG4gICAgZGlyID0gbWluKCB2ZWMyKCBGWEFBX1NQQU5fTUFYLCAgRlhBQV9TUEFOX01BWCksXFxuICAgICAgICAgIG1heCggdmVjMigtRlhBQV9TUEFOX01BWCwgLUZYQUFfU1BBTl9NQVgpLFxcbiAgICAgICAgICAgICAgICBkaXIgKiByY3BEaXJNaW4pKSAqIHJlcztcXG4gICAgdmVjNCByZ2JBID0gKDEuMC8yLjApICogKFxcbiAgICB0ZXh0dXJlMkQodElucHV0LCAgdlV2Lnh5ICsgZGlyICogKDEuMC8zLjAgLSAwLjUpKSArXFxuICAgIHRleHR1cmUyRCh0SW5wdXQsICB2VXYueHkgKyBkaXIgKiAoMi4wLzMuMCAtIDAuNSkpKTtcXG4gICAgdmVjNCByZ2JCID0gcmdiQSAqICgxLjAvMi4wKSArICgxLjAvNC4wKSAqIChcXG4gICAgdGV4dHVyZTJEKHRJbnB1dCwgIHZVdi54eSArIGRpciAqICgwLjAvMy4wIC0gMC41KSkgK1xcbiAgICB0ZXh0dXJlMkQodElucHV0LCAgdlV2Lnh5ICsgZGlyICogKDMuMC8zLjAgLSAwLjUpKSk7XFxuICAgIGZsb2F0IGx1bWFCID0gZG90KHJnYkIsIHZlYzQobHVtYSwgMC4wKSk7XFxuXFxuICAgIGlmICggKCBsdW1hQiA8IGx1bWFNaW4gKSB8fCAoIGx1bWFCID4gbHVtYU1heCApICkge1xcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gcmdiQTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHJnYkI7XFxuICAgIH1cXG5cXG4gICAgLy9nbF9GcmFnQ29sb3IgPSB2ZWM0KCB0ZXh0dXJlMkQoIHRJbnB1dCx2VXYgKS54eXosIDEuICk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3Bvc3Rwcm8vc2hhZGVycy9meGFhLmZzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSB2ZWMyIGRpcmVjdGlvbjtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgY29sb3IgPSB2ZWM0KDAuMCk7XFxuICAgIHZlYzIgb2ZmMSA9IHZlYzIoMS4zODQ2MTUzODQ2KSAqIGRpcmVjdGlvbjtcXG4gICAgdmVjMiBvZmYyID0gdmVjMigzLjIzMDc2OTIzMDgpICogZGlyZWN0aW9uO1xcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCB2VXYpICogMC4yMjcwMjcwMjcwO1xcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCB2VXYgKyAob2ZmMSAvIHJlc29sdXRpb24pKSAqIDAuMzE2MjE2MjE2MjtcXG4gICAgY29sb3IgKz0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2IC0gKG9mZjEgLyByZXNvbHV0aW9uKSkgKiAwLjMxNjIxNjIxNjI7XFxuICAgIGNvbG9yICs9IHRleHR1cmUyRCh0SW5wdXQsIHZVdiArIChvZmYyIC8gcmVzb2x1dGlvbikpICogMC4wNzAyNzAyNzAzO1xcbiAgICBjb2xvciArPSB0ZXh0dXJlMkQodElucHV0LCB2VXYgLSAob2ZmMiAvIHJlc29sdXRpb24pKSAqIDAuMDcwMjcwMjcwMztcXG4gICAgXFxuICAgIGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9wb3N0cHJvL3NoYWRlcnMvZ2F1c3NpYW4uZnNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSBmbG9hdCBhbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzcGVlZDtcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG5mbG9hdCByYW5kb20odmVjMiBuLCBmbG9hdCBvZmZzZXQgKXtcXG5cXHQvL3JldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXorc2VlZCxzY2FsZSkpKjQzNzU4LjU0NTMpO1xcblxcdHJldHVybiAuNSAtIGZyYWN0KHNpbihkb3Qobi54eSArIHZlYzIoIG9mZnNldCwgMC4gKSwgdmVjMigxMi45ODk4LCA3OC4yMzMpKSkqIDQzNzU4LjU0NTMpO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuXFx0dmVjNCBjb2xvciA9IHRleHR1cmUyRCh0SW5wdXQsIHZVdik7XFxuXFxuXFx0Ly9jb2xvciArPSBhbW91bnQgKiAoIC41IC0gcmFuZG9tKCB2ZWMzKCAxLiApLCBsZW5ndGgoIGdsX0ZyYWdDb29yZCApICsgc3BlZWQgKiAuMDEgKiB0aW1lICkgKTtcXG5cXHRjb2xvciArPSB2ZWM0KCB2ZWMzKCBhbW91bnQgKiByYW5kb20oIHZVdiwgLjAwMDAxICogc3BlZWQgKiB0aW1lICkgKSwgMS4gKTtcXG5cXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL25vaXNlLmZzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLy8gdmFyeWluZyB2ZWMyIHZVdjtcXG4vLyB1bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxuXFxuLy8gY29uc3QgZmxvYXQgYmx1cl9zdGFydCA9IDEuMDtcXG5cXG4vLyB2ZWMyIG9mZnNldCA9IHZlYzIoMC4wMDEsIDAuMDAxKTtcXG5cXG4vLyBmbG9hdCBmYWN0b3IgPSAxLjtcXG4vLyBmbG9hdCBzdHJlbmd0aCA9IDEwLjtcXG5cXG4vLyBjb25zdCBpbnQgb2NjdXJlbmNlcyA9IDEwMDtcXG4vLyBmbG9hdCB6b29tID0gMS47XFxuXFxuLy8gdm9pZCBtYWluKClcXG4vLyB7XFxuLy8gICAgIGZsb2F0IHNjYWxlID0gYmx1cl9zdGFydCAqIHpvb207XFxuLy8gICAgIHZlYzQgYyA9IHZlYzQoMCk7XFxuICAgIFxcbi8vICAgICBmb3IoIGludCBpID0gMDsgaSA8IG9jY3VyZW5jZXM7ICsraSApIHtcXG4vLyAgICAgICBjICs9IHRleHR1cmUyRCh0SW5wdXQsICh2VXYgKiBzY2FsZSkgKyBvZmZzZXQpO1xcbi8vICAgICAgIHNjYWxlICs9IHN0cmVuZ3RoIC8gZmxvYXQob2NjdXJlbmNlcyk7XFxuLy8gICAgIH1cXG5cXG4vLyAgICAgZ2xfRnJhZ0NvbG9yID0gYyAqIGZhY3RvcjtcXG4vLyB9XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0SW5wdXQ7XFxudW5pZm9ybSB2ZWMyIGxpZ2h0UG9zaXRpb247XFxudW5pZm9ybSBmbG9hdCBleHBvc3VyZTtcXG51bmlmb3JtIGZsb2F0IGRlY2F5O1xcbnVuaWZvcm0gZmxvYXQgZGVuc2l0eTtcXG51bmlmb3JtIGZsb2F0IHdlaWdodDtcXG51bmlmb3JtIGludCBzYW1wbGVzO1xcbmNvbnN0IGludCBNQVhfU0FNUExFUyA9IDEwMDtcXG52b2lkIG1haW4oKXtcXG4gIFxcbiAgdmVjMiB0ZXhDb29yZCA9IHZVdjtcXG4gIC8vIENhbGN1bGF0ZSB2ZWN0b3IgZnJvbSBwaXhlbCB0byBsaWdodCBzb3VyY2UgaW4gc2NyZWVuIHNwYWNlXFxuICB2ZWMyIGRlbHRhVGV4dENvb3JkID0gdGV4Q29vcmQgLSB2ZWMyKDAuNSwgMC41KTtcXG4gIC8vIERpdmlkZSBieSBudW1iZXIgb2Ygc2FtcGxlcyBhbmQgc2NhbGUgYnkgY29udHJvbCBmYWN0b3JcXG4gIGRlbHRhVGV4dENvb3JkICo9IDEuMCAvIGZsb2F0KHNhbXBsZXMpICogZGVuc2l0eTtcXG4gIC8vIFN0b3JlIGluaXRpYWwgc2FtcGxlXFxuICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHRJbnB1dCwgdGV4Q29vcmQpO1xcbiAgLy8gc2V0IHVwIGlsbHVtaW5hdGlvbiBkZWNheSBmYWN0b3JcXG4gIGZsb2F0IGlsbHVtaW5hdGlvbkRlY2F5ID0gMS4wO1xcbiAgXFxuICAvLyBldmFsdWF0ZSB0aGUgc3VtbWF0aW9uIGZvciBzYW1wbGVzIG51bWJlciBvZiBpdGVyYXRpb25zIHVwIHRvIDEwMFxcbiAgZm9yKGludCBpPTA7IGkgPCBNQVhfU0FNUExFUzsgaSsrKXtcXG4gICAgLy8gd29yayBhcm91bmQgZm9yIGR5bmFtaWMgbnVtYmVyIG9mIGxvb3AgaXRlcmF0aW9uc1xcbiAgICBpZihpID09IHNhbXBsZXMpe1xcbiAgICAgIGJyZWFrO1xcbiAgICB9XFxuICAgIFxcbiAgICAvLyBzdGVwIHNhbXBsZSBsb2NhdGlvbiBhbG9uZyByYXlcXG4gICAgdGV4Q29vcmQgLT0gZGVsdGFUZXh0Q29vcmQ7XFxuICAgIC8vIHJldHJpZXZlIHNhbXBsZSBhdCBuZXcgbG9jYXRpb25cXG4gICAgdmVjNCBzYW1wbGUgPSB0ZXh0dXJlMkQodElucHV0LCB0ZXhDb29yZCk7XFxuICAgIC8vIGFwcGx5IHNhbXBsZSBhdHRlbnVhdGlvbiBzY2FsZS9kZWNheSBmYWN0b3JzXFxuICAgIHNhbXBsZSAqPSBpbGx1bWluYXRpb25EZWNheSAqIHdlaWdodDtcXG4gICAgLy8gYWNjdW11bGF0ZSBjb21iaW5lZCBjb2xvclxcbiAgICBjb2xvciArPSBzYW1wbGU7XFxuICAgIC8vIHVwZGF0ZSBleHBvbmVudGlhbCBkZWNheSBmYWN0b3JcXG4gICAgaWxsdW1pbmF0aW9uRGVjYXkgKj0gZGVjYXk7XFxuICBcXG4gIH1cXG4gIC8vIG91dHB1dCBmaW5hbCBjb2xvciB3aXRoIGEgZnVydGhlciBzY2FsZSBjb250cm9sIGZhY3RvclxcbiAgZ2xfRnJhZ0NvbG9yID0gY29sb3IgKiBleHBvc3VyZTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3JhZGlhbC1ibHVyLmZzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdElucHV0O1xcbnVuaWZvcm0gZmxvYXQgYW1vdW50O1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodElucHV0LCB2VXYpO1xcblxcdGZsb2F0IHIgPSBjb2xvci5yO1xcblxcdGZsb2F0IGcgPSBjb2xvci5nO1xcblxcdGZsb2F0IGIgPSBjb2xvci5iO1xcblxcdFxcblxcdGNvbG9yLnIgPSBtaW4oMS4wLCAociAqICgxLjAgLSAoMC42MDcgKiBhbW91bnQpKSkgKyAoZyAqICgwLjc2OSAqIGFtb3VudCkpICsgKGIgKiAoMC4xODkgKiBhbW91bnQpKSk7XFxuXFx0Y29sb3IuZyA9IG1pbigxLjAsIChyICogMC4zNDkgKiBhbW91bnQpICsgKGcgKiAoMS4wIC0gKDAuMzE0ICogYW1vdW50KSkpICsgKGIgKiAwLjE2OCAqIGFtb3VudCkpO1xcblxcdGNvbG9yLmIgPSBtaW4oMS4wLCAociAqIDAuMjcyICogYW1vdW50KSArIChnICogMC41MzQgKiBhbW91bnQpICsgKGIgKiAoMS4wIC0gKDAuODY5ICogYW1vdW50KSkpKTtcXG5cXHRcXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NlcGlhLmZzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBmbG9hdCBjYW1lcmFOZWFyO1xcbnVuaWZvcm0gZmxvYXQgY2FtZXJhRmFyO1xcblxcbiNpZmRlZiBVU0VfTE9HREVQVEhCVUZcXG4gICAgdW5pZm9ybSBmbG9hdCBsb2dEZXB0aEJ1ZkZDO1xcbiNlbmRpZlxcblxcbnVuaWZvcm0gZmxvYXQgcmFkaXVzOyAgICAgLy8gYW8gcmFkaXVzXFxudW5pZm9ybSBib29sIG9ubHlBTzsgICAgICAvLyB1c2Ugb25seSBhbWJpZW50IG9jY2x1c2lvbiBwYXNzP1xcblxcbnVuaWZvcm0gdmVjMiBzaXplOyAgICAgICAgLy8gdGV4dHVyZSB3aWR0aCwgaGVpZ2h0XFxudW5pZm9ybSBmbG9hdCBhb0NsYW1wOyAgICAvLyBkZXB0aCBjbGFtcCAtIHJlZHVjZXMgaGFsb2luZyBhdCBzY3JlZW4gZWRnZXNcXG5cXG51bmlmb3JtIGZsb2F0IGx1bUluZmx1ZW5jZTsgIC8vIGhvdyBtdWNoIGx1bWluYW5jZSBhZmZlY3RzIG9jY2x1c2lvblxcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHRJbnB1dDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGVwdGg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4vLyAjZGVmaW5lIFBJIDMuMTQxNTkyNjVcXG4jZGVmaW5lIERMIDIuMzk5OTYzMjI5NzI4NjUzICAvLyBQSSAqICggMy4wIC0gc3FydCggNS4wICkgKVxcbiNkZWZpbmUgRVVMRVIgMi43MTgyODE4Mjg0NTkwNDVcXG5cXG4gICAgICAgIC8vIHVzZXIgdmFyaWFibGVzXFxuXFxuY29uc3QgaW50IHNhbXBsZXMgPSA2NDsgICAgIC8vIGFvIHNhbXBsZSBjb3VudFxcblxcbmNvbnN0IGJvb2wgdXNlTm9pc2UgPSB0cnVlOyAgICAgIC8vIHVzZSBub2lzZSBpbnN0ZWFkIG9mIHBhdHRlcm4gZm9yIHNhbXBsZSBkaXRoZXJpbmdcXG5jb25zdCBmbG9hdCBub2lzZUFtb3VudCA9IDAuMDAwNDsgLy8gZGl0aGVyaW5nIGFtb3VudFxcblxcbmNvbnN0IGZsb2F0IGRpZmZBcmVhID0gMC40OyAgIC8vIHNlbGYtc2hhZG93aW5nIHJlZHVjdGlvblxcbmNvbnN0IGZsb2F0IGdEaXNwbGFjZSA9IDAuNDsgIC8vIGdhdXNzIGJlbGwgY2VudGVyXFxuXFxuXFxuLy8gUkdCQSBkZXB0aFxcblxcbnZlYzMgcGFja05vcm1hbFRvUkdCKCBjb25zdCBpbiB2ZWMzIG5vcm1hbCApIHtcXG4gICAgcmV0dXJuIG5vcm1hbGl6ZSggbm9ybWFsICkgKiAwLjUgKyAwLjU7XFxufVxcblxcbnZlYzMgdW5wYWNrUkdCVG9Ob3JtYWwoIGNvbnN0IGluIHZlYzMgcmdiICkge1xcbiAgICByZXR1cm4gMi4wICogcmdiLnh5eiAtIDEuMDtcXG59XFxuXFxuY29uc3QgZmxvYXQgUGFja1Vwc2NhbGUgPSAyNTYuIC8gMjU1LjsgLy8gZnJhY3Rpb24gLT4gMC4uMSAoaW5jbHVkaW5nIDEpXFxuY29uc3QgZmxvYXQgVW5wYWNrRG93bnNjYWxlID0gMjU1LiAvIDI1Ni47IC8vIDAuLjEgLT4gZnJhY3Rpb24gKGV4Y2x1ZGluZyAxKVxcblxcbmNvbnN0IHZlYzMgUGFja0ZhY3RvcnMgPSB2ZWMzKCAyNTYuICogMjU2LiAqIDI1Ni4sIDI1Ni4gKiAyNTYuLCAgMjU2LiApO1xcbmNvbnN0IHZlYzQgVW5wYWNrRmFjdG9ycyA9IFVucGFja0Rvd25zY2FsZSAvIHZlYzQoIFBhY2tGYWN0b3JzLCAxLiApO1xcblxcbmNvbnN0IGZsb2F0IFNoaWZ0UmlnaHQ4ID0gMS4gLyAyNTYuO1xcblxcbnZlYzQgcGFja0RlcHRoVG9SR0JBKCBjb25zdCBpbiBmbG9hdCB2ICkge1xcbiAgICB2ZWM0IHIgPSB2ZWM0KCBmcmFjdCggdiAqIFBhY2tGYWN0b3JzICksIHYgKTtcXG4gICAgci55encgLT0gci54eXogKiBTaGlmdFJpZ2h0ODsgLy8gdGlkeSBvdmVyZmxvd1xcbiAgICByZXR1cm4gciAqIFBhY2tVcHNjYWxlO1xcbn1cXG5cXG5mbG9hdCB1bnBhY2tSR0JBVG9EZXB0aCggY29uc3QgaW4gdmVjNCB2ICkge1xcbiAgICByZXR1cm4gZG90KCB2LCBVbnBhY2tGYWN0b3JzICk7XFxufVxcblxcbi8vIE5PVEU6IHZpZXdaL2V5ZVogaXMgPCAwIHdoZW4gaW4gZnJvbnQgb2YgdGhlIGNhbWVyYSBwZXIgT3BlbkdMIGNvbnZlbnRpb25zXFxuXFxuZmxvYXQgdmlld1pUb09ydGhvZ3JhcGhpY0RlcHRoKCBjb25zdCBpbiBmbG9hdCB2aWV3WiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcbiAgICByZXR1cm4gKCB2aWV3WiArIG5lYXIgKSAvICggbmVhciAtIGZhciApO1xcbn1cXG5mbG9hdCBvcnRob2dyYXBoaWNEZXB0aFRvVmlld1ooIGNvbnN0IGluIGZsb2F0IGxpbmVhckNsaXBaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxuICAgIHJldHVybiBsaW5lYXJDbGlwWiAqICggbmVhciAtIGZhciApIC0gbmVhcjtcXG59XFxuXFxuZmxvYXQgdmlld1pUb1BlcnNwZWN0aXZlRGVwdGgoIGNvbnN0IGluIGZsb2F0IHZpZXdaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxuICAgIHJldHVybiAoKCBuZWFyICsgdmlld1ogKSAqIGZhciApIC8gKCggZmFyIC0gbmVhciApICogdmlld1ogKTtcXG59XFxuZmxvYXQgcGVyc3BlY3RpdmVEZXB0aFRvVmlld1ooIGNvbnN0IGluIGZsb2F0IGludkNsaXBaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxuICAgIHJldHVybiAoIG5lYXIgKiBmYXIgKSAvICggKCBmYXIgLSBuZWFyICkgKiBpbnZDbGlwWiAtIGZhciApO1xcbn1cXG5cXG4vLyBnZW5lcmF0aW5nIG5vaXNlIC8gcGF0dGVybiB0ZXh0dXJlIGZvciBkaXRoZXJpbmdcXG5cXG52ZWMyIHJhbmQoIGNvbnN0IHZlYzIgY29vcmQgKSB7XFxuXFxuICAgIHZlYzIgbm9pc2U7XFxuXFxuICAgIGlmICggdXNlTm9pc2UgKSB7XFxuXFxuICAgICAgICBmbG9hdCBueCA9IGRvdCAoIGNvb3JkLCB2ZWMyKCAxMi45ODk4LCA3OC4yMzMgKSApO1xcbiAgICAgICAgZmxvYXQgbnkgPSBkb3QgKCBjb29yZCwgdmVjMiggMTIuOTg5OCwgNzguMjMzICkgKiAyLjAgKTtcXG5cXG4gICAgICAgIG5vaXNlID0gY2xhbXAoIGZyYWN0ICggNDM3NTguNTQ1MyAqIHNpbiggdmVjMiggbngsIG55ICkgKSApLCAwLjAsIDEuMCApO1xcblxcbiAgICB9IGVsc2Uge1xcblxcbiAgICAgICAgZmxvYXQgZmYgPSBmcmFjdCggMS4wIC0gY29vcmQucyAqICggc2l6ZS54IC8gMi4wICkgKTtcXG4gICAgICAgIGZsb2F0IGdnID0gZnJhY3QoIGNvb3JkLnQgKiAoIHNpemUueSAvIDIuMCApICk7XFxuXFxuICAgICAgICBub2lzZSA9IHZlYzIoIDAuMjUsIDAuNzUgKSAqIHZlYzIoIGZmICkgKyB2ZWMyKCAwLjc1LCAwLjI1ICkgKiBnZztcXG5cXG4gICAgfVxcblxcbiAgICByZXR1cm4gKCBub2lzZSAqIDIuMCAgLSAxLjAgKSAqIG5vaXNlQW1vdW50O1xcblxcbn1cXG5cXG5mbG9hdCByZWFkRGVwdGgoIGNvbnN0IGluIHZlYzIgY29vcmQgKSB7XFxuXFxuICAgIGZsb2F0IGNhbWVyYUZhclBsdXNOZWFyID0gY2FtZXJhRmFyICsgY2FtZXJhTmVhcjtcXG4gICAgZmxvYXQgY2FtZXJhRmFyTWludXNOZWFyID0gY2FtZXJhRmFyIC0gY2FtZXJhTmVhcjtcXG4gICAgZmxvYXQgY2FtZXJhQ29lZiA9IDIuMCAqIGNhbWVyYU5lYXI7XFxuXFxuICAgICNpZmRlZiBVU0VfTE9HREVQVEhCVUZcXG5cXG4gICAgICAgIGZsb2F0IGxvZ3ogPSB1bnBhY2tSR0JBVG9EZXB0aCggdGV4dHVyZTJEKCB0RGVwdGgsIGNvb3JkICkgKTtcXG4gICAgICAgIGZsb2F0IHcgPSBwb3coMi4wLCAobG9neiAvIGxvZ0RlcHRoQnVmRkMpKSAtIDEuMDtcXG4gICAgICAgIGZsb2F0IHogPSAobG9neiAvIHcpICsgMS4wO1xcblxcbiAgICAjZWxzZVxcblxcbiAgICAgICAgZmxvYXQgeiA9IHVucGFja1JHQkFUb0RlcHRoKCB0ZXh0dXJlMkQoIHREZXB0aCwgY29vcmQgKSApO1xcblxcbiAgICAjZW5kaWZcXG5cXG4gICAgcmV0dXJuIGNhbWVyYUNvZWYgLyAoIGNhbWVyYUZhclBsdXNOZWFyIC0geiAqIGNhbWVyYUZhck1pbnVzTmVhciApO1xcblxcblxcbn1cXG5cXG5mbG9hdCBjb21wYXJlRGVwdGhzKCBjb25zdCBpbiBmbG9hdCBkZXB0aDEsIGNvbnN0IGluIGZsb2F0IGRlcHRoMiwgaW5vdXQgaW50IGZhciApIHtcXG5cXG4gICAgZmxvYXQgZ2FyZWEgPSA4LjA7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdhdXNzIGJlbGwgd2lkdGhcXG4gICAgZmxvYXQgZGlmZiA9ICggZGVwdGgxIC0gZGVwdGgyICkgKiAxMDAuMDsgIC8vIGRlcHRoIGRpZmZlcmVuY2UgKDAtMTAwKVxcblxcbiAgICAgICAgICAgIC8vIHJlZHVjZSBsZWZ0IGJlbGwgd2lkdGggdG8gYXZvaWQgc2VsZi1zaGFkb3dpbmdcXG5cXG4gICAgaWYgKCBkaWZmIDwgZ0Rpc3BsYWNlICkge1xcblxcbiAgICAgICAgZ2FyZWEgPSBkaWZmQXJlYTtcXG5cXG4gICAgfSBlbHNlIHtcXG5cXG4gICAgICAgIGZhciA9IDE7XFxuXFxuICAgIH1cXG5cXG4gICAgZmxvYXQgZGQgPSBkaWZmIC0gZ0Rpc3BsYWNlO1xcbiAgICBmbG9hdCBnYXVzcyA9IHBvdyggRVVMRVIsIC0yLjAgKiAoIGRkICogZGQgKSAvICggZ2FyZWEgKiBnYXJlYSApICk7XFxuICAgIHJldHVybiBnYXVzcztcXG5cXG59XFxuXFxuZmxvYXQgY2FsY0FPKCBmbG9hdCBkZXB0aCwgZmxvYXQgZHcsIGZsb2F0IGRoICkge1xcblxcbiAgICB2ZWMyIHZ2ID0gdmVjMiggZHcsIGRoICk7XFxuXFxuICAgIHZlYzIgY29vcmQxID0gdlV2ICsgcmFkaXVzICogdnY7XFxuICAgIHZlYzIgY29vcmQyID0gdlV2IC0gcmFkaXVzICogdnY7XFxuXFxuICAgIGZsb2F0IHRlbXAxID0gMC4wO1xcbiAgICBmbG9hdCB0ZW1wMiA9IDAuMDtcXG5cXG4gICAgaW50IGZhciA9IDA7XFxuICAgIHRlbXAxID0gY29tcGFyZURlcHRocyggZGVwdGgsIHJlYWREZXB0aCggY29vcmQxICksIGZhciApO1xcblxcbiAgICAgICAgICAgIC8vIERFUFRIIEVYVFJBUE9MQVRJT05cXG5cXG4gICAgaWYgKCBmYXIgPiAwICkge1xcblxcbiAgICAgICAgdGVtcDIgPSBjb21wYXJlRGVwdGhzKCByZWFkRGVwdGgoIGNvb3JkMiApLCBkZXB0aCwgZmFyICk7XFxuICAgICAgICB0ZW1wMSArPSAoIDEuMCAtIHRlbXAxICkgKiB0ZW1wMjtcXG5cXG4gICAgfVxcblxcbiAgICByZXR1cm4gdGVtcDE7XFxuXFxufVxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgdmVjMiBub2lzZSA9IHJhbmQoIHZVdiApO1xcbiAgICBmbG9hdCBkZXB0aCA9IHJlYWREZXB0aCggdlV2ICk7XFxuXFxuICAgIGZsb2F0IHR0ID0gY2xhbXAoIGRlcHRoLCBhb0NsYW1wLCAxLjAgKTtcXG5cXG4gICAgZmxvYXQgdyA9ICggMS4wIC8gc2l6ZS54ICkgLyB0dCArICggbm9pc2UueCAqICggMS4wIC0gbm9pc2UueCApICk7XFxuICAgIGZsb2F0IGggPSAoIDEuMCAvIHNpemUueSApIC8gdHQgKyAoIG5vaXNlLnkgKiAoIDEuMCAtIG5vaXNlLnkgKSApO1xcblxcbiAgICBmbG9hdCBhbyA9IDAuMDtcXG5cXG4gICAgZmxvYXQgZHogPSAxLjAgLyBmbG9hdCggc2FtcGxlcyApO1xcbiAgICBmbG9hdCBsID0gMC4wO1xcbiAgICBmbG9hdCB6ID0gMS4wIC0gZHogLyAyLjA7XFxuXFxuICAgIGZvciAoIGludCBpID0gMDsgaSA8PSBzYW1wbGVzOyBpICsrICkge1xcblxcbiAgICAgICAgZmxvYXQgciA9IHNxcnQoIDEuMCAtIHogKTtcXG5cXG4gICAgICAgIGZsb2F0IHB3ID0gY29zKCBsICkgKiByO1xcbiAgICAgICAgZmxvYXQgcGggPSBzaW4oIGwgKSAqIHI7XFxuICAgICAgICBhbyArPSBjYWxjQU8oIGRlcHRoLCBwdyAqIHcsIHBoICogaCApO1xcbiAgICAgICAgeiA9IHogLSBkejtcXG4gICAgICAgIGwgPSBsICsgREw7XFxuXFxuICAgIH1cXG5cXG4gICAgYW8gLz0gZmxvYXQoIHNhbXBsZXMgKTtcXG4gICAgYW8gPSAxLjAgLSBhbztcXG5cXG4gICAgdmVjMyBjb2xvciA9IHRleHR1cmUyRCggdElucHV0LCB2VXYgKS5yZ2I7XFxuXFxuICAgIHZlYzMgbHVtY29lZmYgPSB2ZWMzKCAwLjI5OSwgMC41ODcsIDAuMTE0ICk7XFxuICAgIGZsb2F0IGx1bSA9IGRvdCggY29sb3IucmdiLCBsdW1jb2VmZiApO1xcbiAgICB2ZWMzIGx1bWluYW5jZSA9IHZlYzMoIGx1bSApO1xcblxcbiAgICB2ZWMzIGZpbmFsID0gdmVjMyggY29sb3IgKiBtaXgoIHZlYzMoIGFvICksIHZlYzMoIDEuMCApLCBsdW1pbmFuY2UgKiBsdW1JbmZsdWVuY2UgKSApOyAgLy8gbWl4KCBjb2xvciAqIGFvLCB3aGl0ZSwgbHVtaW5hbmNlIClcXG5cXG4gICAgaWYgKCBvbmx5QU8gKSB7XFxuXFxuICAgICAgICBmaW5hbCA9IHZlYzMoIG1peCggdmVjMyggYW8gKSwgdmVjMyggMS4wICksIGx1bWluYW5jZSAqIGx1bUluZmx1ZW5jZSApICk7ICAvLyBhbWJpZW50IG9jY2x1c2lvbiBvbmx5XFxuXFxuICAgIH1cXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRJbnB1dCwgdlV2KTtcXG5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcG9zdHByby9zaGFkZXJzL3NzYW8uZnNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9ncmVzc1xuXG5mdW5jdGlvbiBwcm9ncmVzcyh4aHIpIHtcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyXG4gIHZhciBmaW5pc2hlZCA9IGZhbHNlXG5cbiAgaWYgKHhoci5hdHRhY2hFdmVudCkge1xuICAgIHhoci5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZG9uZSlcbiAgICByZXR1cm4gZW1pdHRlclxuICB9XG5cbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lLCBmYWxzZSlcbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICBmdW5jdGlvbiBwcm9ncmVzcyhldmVudCkge1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgID8gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWxcbiAgICAgIDogMFxuXG4gICAgaWYgKCFmaW5pc2hlZCkgZW1pdHRlci5lbWl0KCdkYXRhJ1xuICAgICAgLCB2YWx1ZVxuICAgICAgLCBldmVudC50b3RhbCB8fCBudWxsXG4gICAgKVxuXG4gICAgZmluaXNoZWQgPSB2YWx1ZSA9PT0gMVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlICE9PSAnbG9hZCcgJiYgIS9eKHJlYWR5fGNvbXBsZXRlKSQvZy50ZXN0KFxuICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkucmVhZHlTdGF0ZVxuICAgICkpIHJldHVyblxuXG4gICAgaWYgKGZpbmlzaGVkKSByZXR1cm5cbiAgICBpZiAoeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHhoci5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzcywgZmFsc2UpXG4gICAgfSBlbHNlXG4gICAgaWYgKHhoci5kZXRhdGNoRXZlbnQpIHtcbiAgICAgIHhoci5kZXRhdGNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KCdkYXRhJywgMSwgZXZlbnQudG90YWwgfHwgbnVsbClcbiAgICBlbWl0dGVyLmVtaXQoJ2RvbmUnKVxuICAgIGZpbmlzaGVkID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGVtaXR0ZXJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94aHItcHJvZ3Jlc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoXCJpcy1mdW5jdGlvblwiKVxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoXCJwYXJzZS1oZWFkZXJzXCIpXG52YXIgeHRlbmQgPSByZXF1aXJlKFwieHRlbmRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVYSFJcbmNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCBub29wXG5jcmVhdGVYSFIuWERvbWFpblJlcXVlc3QgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCkpID8gY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0IDogd2luZG93LlhEb21haW5SZXF1ZXN0XG5cbmZvckVhY2hBcnJheShbXCJnZXRcIiwgXCJwdXRcIiwgXCJwb3N0XCIsIFwicGF0Y2hcIiwgXCJoZWFkXCIsIFwiZGVsZXRlXCJdLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBjcmVhdGVYSFJbbWV0aG9kID09PSBcImRlbGV0ZVwiID8gXCJkZWxcIiA6IG1ldGhvZF0gPSBmdW5jdGlvbih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRvcihhcnJheVtpXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKXtcbiAgICBmb3IodmFyIGkgaW4gb2JqKXtcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHBhcmFtcyA9IHVyaVxuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7dXJpOnVyaX1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHh0ZW5kKG9wdGlvbnMsIHt1cmk6IHVyaX0pXG4gICAgfVxuXG4gICAgcGFyYW1zLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICByZXR1cm4gcGFyYW1zXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlWEhSKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbGxiYWNrIGFyZ3VtZW50IG1pc3NpbmdcIilcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYk9uY2UoZXJyLCByZXNwb25zZSwgYm9keSl7XG4gICAgICAgIGlmKCFjYWxsZWQpe1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhlcnIsIHJlc3BvbnNlLCBib2R5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRGdW5jLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IGdldFhtbCh4aHIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UsIHJlc3BvbnNlLmJvZHkpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciBhYm9ydGVkXG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybFxuICAgIHZhciBtZXRob2QgPSB4aHIubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIlxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YVxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuICAgIHZhciBmYWlsdXJlUmVzcG9uc2UgPSB7XG4gICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHN0YXR1c0NvZGU6IDAsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgfVxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5qc29uICE9PSBmYWxzZSkge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbiA9PT0gdHJ1ZSA/IGJvZHkgOiBvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZS8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIilcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgdGltZW91dFwiKVxuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIlxuICAgICAgICAgICAgZXJyb3JGdW5jKGUpXG4gICAgICAgIH0sIG9wdGlvbnMudGltZW91dCApXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG5cbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICAvLyBNaWNyb3NvZnQgRWRnZSBicm93c2VyIHNlbmRzIFwidW5kZWZpbmVkXCIgd2hlbiBzZW5kIGlzIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBzcGVjIHNheXMgdG8gcGFzcyBudWxsIGFzIGJvZHkgdG8gaW5kaWNhdGUgbm8gYm9keVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmF1Z3R1ci94aHIvaXNzdWVzLzEwMC5cbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpXG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5mdW5jdGlvbiBnZXRYbWwoeGhyKSB7XG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuICAgIHZhciBmaXJlZm94QnVnVGFrZW5FZmZlY3QgPSB4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gXCJwYXJzZXJlcnJvclwiXG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiXCIgJiYgIWZpcmVmb3hCdWdUYWtlbkVmZmVjdCkge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==