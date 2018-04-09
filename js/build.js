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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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

var _map = __webpack_require__(7);

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
            vertexShader: __webpack_require__(53),
            // fragmentShader: require('../shaders/bottom.frag.glsl'),
            fragmentShader: __webpack_require__(54),
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

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webmidi = __webpack_require__(52);

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// sourced from:
// http://www.leanbackplayer.com/test/h5mt.html
// https://github.com/broofa/node-mime/blob/master/types.json
var mimeTypes = __webpack_require__(35)

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = createAudioContext
function createAudioContext () {
  var AudioCtor = window.AudioContext || window.webkitAudioContext
  return new AudioCtor()
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var lookup = __webpack_require__(8)
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
/* 12 */
/***/ (function(module, exports) {

module.exports = function (audioContext) {
  if (audioContext.state === 'suspended' &&
      typeof audioContext.resume === 'function') {
    audioContext.resume()
  }
}


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

var _randomFromArray = __webpack_require__(34);

var _randomFromArray2 = _interopRequireDefault(_randomFromArray);

var _lucky = __webpack_require__(33);

var _lucky2 = _interopRequireDefault(_lucky);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _debounce = __webpack_require__(32);

var _debounce2 = _interopRequireDefault(_debounce);

var _MidiController = __webpack_require__(6);

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

            var blackMode = (0, _randomFromArray2.default)(this.blackModes);
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
            var scale = (0, _randomFromArray2.default)(this.scalings);

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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webAudioPlayer = __webpack_require__(47);

var _webAudioPlayer2 = _interopRequireDefault(_webAudioPlayer);

var _webAudioAnalyser = __webpack_require__(46);

var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);

var _analyserFrequencyAverage = __webpack_require__(28);

var _analyserFrequencyAverage2 = _interopRequireDefault(_analyserFrequencyAverage);

var _Range = __webpack_require__(31);

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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(42)
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var frequencyToIndex = __webpack_require__(29)

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(36)

module.exports = frequencyToIndex
function frequencyToIndex (frequency, sampleRate, frequencyBinCount) {
  var nyquist = sampleRate / 2
  var index = Math.round(frequency / nyquist * frequencyBinCount)
  return clamp(index, 0, frequencyBinCount)
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf = __webpack_require__(26);

var _raf2 = _interopRequireDefault(_raf);

var _Background = __webpack_require__(17);

var _Background2 = _interopRequireDefault(_Background);

var _Top = __webpack_require__(21);

var _Top2 = _interopRequireDefault(_Top);

var _Left = __webpack_require__(19);

var _Left2 = _interopRequireDefault(_Left);

var _Right = __webpack_require__(20);

var _Right2 = _interopRequireDefault(_Right);

var _Bottom = __webpack_require__(18);

var _Bottom2 = _interopRequireDefault(_Bottom);

var _smooth = __webpack_require__(23);

var _smooth2 = _interopRequireDefault(_smooth);

var _FacesController = __webpack_require__(13);

var _FacesController2 = _interopRequireDefault(_FacesController);

var _MouseManager = __webpack_require__(14);

var _MouseManager2 = _interopRequireDefault(_MouseManager);

var _SoundManager = __webpack_require__(22);

var _SoundManager2 = _interopRequireDefault(_SoundManager);

var _KeyboardController = __webpack_require__(16);

var _KeyboardController2 = _interopRequireDefault(_KeyboardController);

var _EventsManager = __webpack_require__(0);

var _EventsManager2 = _interopRequireDefault(_EventsManager);

var _Events = __webpack_require__(1);

var _Events2 = _interopRequireDefault(_Events);

var _ui = __webpack_require__(24);

var _ui2 = _interopRequireDefault(_ui);

var _MPKMini = __webpack_require__(15);

var _MPKMini2 = _interopRequireDefault(_MPKMini);

var _MidiController = __webpack_require__(6);

var _MidiController2 = _interopRequireDefault(_MidiController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var glslify = __webpack_require__(25);

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
                  var OrbitControls = __webpack_require__(27)(THREE);
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(9)

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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(45)
  , forEach = __webpack_require__(37)
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isDom = __webpack_require__(39)
var lookup = __webpack_require__(8)

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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var buffer = __webpack_require__(48)
var media = __webpack_require__(50)

module.exports = webAudioPlayer
function webAudioPlayer (src, opt) {
  if (!src) throw new TypeError('must specify a src parameter')
  opt = opt || {}
  if (opt.buffer) return buffer(src, opt)
  else return media(src, opt)
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var canPlaySrc = __webpack_require__(11)
var createAudioContext = __webpack_require__(10)
var xhrAudio = __webpack_require__(51)
var EventEmitter = __webpack_require__(4).EventEmitter
var rightNow = __webpack_require__(43)
var resume = __webpack_require__(12)

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
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var EventEmitter = __webpack_require__(4).EventEmitter
var createAudio = __webpack_require__(44).audio
var assign = __webpack_require__(40)

var resume = __webpack_require__(12)
var createAudioContext = __webpack_require__(10)
var canPlaySrc = __webpack_require__(11)
var addOnce = __webpack_require__(49)

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(56)
var xhrProgress = __webpack_require__(55)

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
/* 52 */
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
/* 53 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 vUv;\nuniform float uTime;\n\n#ifndef FLAT_SHADED\n\n    varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n\n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n\n    #include <begin_vertex>\n    #include <project_vertex>\n\n    vViewPosition = - mvPosition.xyz;\n    vUv = uv;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <fog_vertex>\n\n}"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n#define M_PI 3.14\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float uTime;\nuniform vec3 uStripeOrientation;\nuniform float uInvert;\nuniform vec3 uSquare;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uLength;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <fog_pars_fragment>\n\nvoid main() {\n    vec4 diffuseColor = vec4( diffuse, opacity );\n    // ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n    // vec3 totalEmissiveRadiance = emissive;\n\n    vec4 color = diffuseColor;\n\n    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;\n    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;\n\n    if ( absX > 0. || absY > 0. ) {\n       color = vec4(vec3(1.0 - uInvert), diffuseColor.a);\n    } else {\n        color = vec4(vec3(0.0 + uInvert), diffuseColor.a);  \n    }\n\n    // color = vUv.x > 1. - uProgress  ? vec4(vec3(1.0 - uInvert), diffuseColor.a) : vec4(vec3(0.0 + uInvert), diffuseColor.a);\n    \n    gl_FragColor = color;\n\n    #include <fog_fragment>\n}"

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(38)
var isFunction = __webpack_require__(9)
var parseHeaders = __webpack_require__(41)
var xtend = __webpack_require__(57)

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
/* 57 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTI5NzNlOGJjODUzNzU1ZGRmZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvTWlkaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYXVkaW8tY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2Nhbi1wbGF5LXNyYy5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3Jlc3VtZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vRmFjZXNDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vTW91c2VNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vY29uZmlnL01QS01pbmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvQm90dG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvTGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1JpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvVG9wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvU291bmRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vc21vb3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdWkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nbHNsaWZ5L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aHJlZS1vcmJpdC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXVkaW8tZnJlcXVlbmN5LXRvLWluZGV4L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9sdWNreS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL3JhbmRvbUZyb21BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL21pbWUtdHlwZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NsYW1wL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZm9yLWVhY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9nbG9iYWwvd2luZG93LmpzIiwid2VicGFjazovLy8uL34vaXMtZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy8uL34vcmlnaHQtbm93L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaW1wbGUtbWVkaWEtZWxlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RyaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tYW5hbHlzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYnVmZmVyLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2V2ZW50LWFkZC1vbmNlLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvbWVkaWEtc291cmNlLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIveGhyLWF1ZGlvLmpzIiwid2VicGFjazovLy8uL34vd2VibWlkaS93ZWJtaWRpLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsIiwid2VicGFjazovLy8uL34veGhyLXByb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34veGhyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34veHRlbmQvaW1tdXRhYmxlLmpzIl0sIm5hbWVzIjpbIkV2ZW50c01hbmFnZXIiLCJldmVudCIsImRhdGEiLCJsaXN0ZW5lcnMiLCJldmVudHNMaXN0IiwiaSIsImxlbiIsImxlbmd0aCIsImZuIiwicHVzaCIsImxpc3RlbmVyIiwib2ZmIiwiXyIsIm9uIiwiY29uc29sZSIsIndhcm4iLCJ0YXJnZXRFdmVudHMiLCJ0YXJnZXQiLCJFdmVudHMiLCJLRVlCT0FSRCIsIktFWURPV04iLCJLRVlVUCIsIktFWVBSRVNTIiwiU1BBQ0VIT0xEIiwiU1BBQ0VVUCIsIlNQQUNFRE9XTiIsIlNPVU5EUyIsIkNBTlBMQVkiLCJFTkQiLCJMT1dLSUNLIiwiTUlERExFS0lDSyIsIkhJR0hLSUNLIiwiVFJFTU9MTyIsIlNUQVJUIiwiWFAiLCJVSSIsIkhJRERFTiIsIkFic3RyYWN0RmFjZSIsImdlb21ldHJ5IiwiY29sb3IiLCJuYW1lIiwic2lkZSIsIlRIUkVFIiwiRnJvbnRTaWRlIiwicGxhbmVHZW9tZXRyeSIsIm9uS2V5UHJlc3MiLCJvblNwYWNlSG9sZCIsIm9uU3RhcnQiLCJvbkhpZGRlblVJIiwidW5pZm9ybXMiLCJVbmlmb3Jtc1V0aWxzIiwiY2xvbmUiLCJTaGFkZXJMaWIiLCJ0eXBlIiwidmFsdWUiLCJDb2xvciIsIlZlY3RvcjMiLCJ3aW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsInN0YXJ0RGl2aXNpb25zIiwiVmVjdG9yMiIsIm9yaWVudGF0aW9ucyIsImR1cmF0aW9uIiwiZmFjdG9yIiwiZWFzZSIsIkV4cG8iLCJlYXNlT3V0IiwiZGVidWciLCJzdGFydGVkIiwiaXNTcGFjZURvd24iLCJpbml0R3VpIiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsInJlcXVpcmUiLCJmcmFnbWVudFNoYWRlciIsImxpZ2h0cyIsInRyYW5zcGFyZW50IiwiZm9nIiwibWVzaCIsIk1lc2giLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyIsImFkZCIsImlzT3BlbiIsImd1aSIsImFkZEZvbGRlciIsIm9wZW4iLCJ0aW1lIiwidXBkYXRlRGl2aXNpb25zIiwib3JpZW50YXRpb25OYW1lIiwic2NhbGFyIiwib3JpZW50YXRpb24iLCJtdWx0aXBseVNjYWxhciIsIngiLCJ5IiwieiIsInNwZWVkIiwic3BlZWRNaW4iLCJ0bCIsIlRpbWVsaW5lTGl0ZSIsImJsYWNrTW9kZSIsInNob3ciLCJ0byIsImhpZGUiLCJrZXkiLCJUd2Vlbk1heCIsImludmVydCIsIlRpbWVsaW5lTWF4IiwidVByb2dyZXNzIiwib25Db21wbGV0ZSIsInNldCIsImZyb21UbyIsIk9iamVjdDNEIiwibWFwIiwibiIsInN0YXJ0MSIsInN0b3AxIiwic3RhcnQyIiwic3RvcDIiLCJNaWRpQ29udHJvbGxlciIsImNvbmZpZyIsImluc3RhbmNlIiwicGFkcyIsImtub2JzIiwib25TdWNjZXNzIiwib25FcnJvciIsIm9uTWVzc2FnZSIsImVuYWJsZSIsImVyciIsIm5hdmlnYXRvciIsInJlcXVlc3RNSURJQWNjZXNzIiwic3lzZXgiLCJ0aGVuIiwiYWxlcnQiLCJpbnB1dHMiLCJpbnB1dCIsInBhcnNlQ29uZmlnIiwiYWRkTGlzdGVuZXIiLCJlIiwia2V5cyIsIk9iamVjdCIsInN1YnNjcmlwdGlvbnMiLCJqIiwibnVtYmVyIiwiY2hhbm5lbCIsImNhbGxiYWNrIiwibm90ZSIsInZlbG9jaXR5IiwiY29udHJvbGxlciIsImVycm9yIiwiRXJyb3IiLCJsb2ciLCJpZCIsImZpbmROdW1iZXJJblBhZHMiLCJmaW5kTnVtYmVySW5Lbm9icyIsInJlZ2lzdGVyUGFkIiwicmVnaXN0ZXJLbm9iIiwiRmFjZXNDb250cm9sbGVyIiwiY29udGFpbmVyIiwiZmFjZXMiLCJkaXZpc2lvbnMiLCJnZW5lcmF0ZURpdmlzaW9ucyIsImxhc3RYIiwibGFzdFkiLCJhbGxvd0ludmVydCIsInNwZWVkQ29udGFpbmVyIiwiZmlyc3RTcGFjZVVwIiwiaGlnaGtpY2tlZCIsImxvd2tpY2tlZCIsImRpcmVjdGlvbiIsIm9uTG93S2ljayIsIm9uTWlkZGxlS2ljayIsIm9uSGlnaEtpY2siLCJvblRyZW1vbG8iLCJvblVJSGlkZGVuIiwib25Tb3VuZEVuZCIsIm9uU3BhY2VVcCIsIm9uU3BhY2VEb3duIiwiYmxhY2tNb2RlVmVydGljYWwiLCJibGFja01vZGVIb3Jpem9udGFsIiwiYmxhY2tNb2RlVHVubmVsVG9wIiwiYmxhY2tNb2RlVHVubmVsQm90dG9tIiwiYmxhY2tNb2RlQm90dG9tIiwiYmxhY2tNb2RlRnVsbCIsImJsYWNrTW9kZXMiLCJzZXRCbGFja01vZGUiLCJjaGFuZ2VTY2FsZSIsInJlYWN0aW9ucyIsImNoYW5nZVNjYWxlWCIsImNoYW5nZVNjYWxlWSIsImNoYW5nZVNjYWxlQm90aCIsInNjYWxpbmdzIiwib25QYWREb3duIiwib25Lbm9iQ2hhbmdlIiwiZmFjZSIsIm1pbiIsIm1heCIsImJldHdlZW4iLCJwb3NzaWJsZURpdmlzaW9uWCIsImZpbmREaXZpc2lvbnMiLCJyZG1YSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXZpc2lvblgiLCJpbmRleE9mIiwicG9zc2libGVEaXZpc2lvblkiLCJyZG1ZSW5kZXgiLCJkaXZpc2lvblkiLCJzZXRTdHJpcGVzIiwiYWxsIiwiY3VycmVudCIsInJhbmdlIiwiZGl2aXNpb24iLCJpbmRleCIsImZpbHRlciIsInNvdW5kRW5kZWQiLCJyZG0iLCJlbWl0IiwicmVzZXQiLCJvbkVuZCIsIm9wdGlvbnMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZSIsInJvdGF0aW9uIiwidXBkYXRlIiwicHJvZ3Jlc3MiLCJlYXNlSW5PdXQiLCJNb3VzZU1hbmFnZXIiLCJjaGVja01vdXNlU3BlZWQiLCJtb3VzZVNwZWVkWCIsIm1vdXNlU3BlZWRZIiwibW91c2VMYXN0WCIsIm1vdXNlTGFzdFkiLCJtb3VzZURpcmVjdGlvblgiLCJtb3VzZURpcmVjdGlvblkiLCJtb3VzZVgiLCJtb3VzZVkiLCJzZXRJbnRlcnZhbCIsImdldFNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldERpcmVjdGlvbiIsInBhZ2VYIiwicGFnZVkiLCJLZXlib2FyZENvbnRyb2xsZXIiLCJvbktleVVwIiwib25LZXlEb3duIiwiQmFja2dyb3VuZCIsIkJvdHRvbSIsImhvcml6b250YWwiLCJob3Jpem9udGFsU2tldzEiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU2tldzEiLCJ2ZXJ0aWNhbFNrZXcyIiwidmlzaWJpbGl0eVRvZ2dsZXIiLCJ2aXNpYmlsaXR5SGlkZXIiLCJ2aXNpYmlsaXR5U2hvd2VyIiwiTGVmdCIsIlJpZ2h0IiwiQmFja1NpZGUiLCJUb3AiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJTb3VuZE1hbmFnZXIiLCJiYXNzIiwibWlkQmFzcyIsInZvaWNlIiwiZHJ1bSIsInBhdXNlIiwiYXNzZXRzIiwic291cmNlcyIsImludHJvIiwieHAiLCJzdGFydCIsImluaXRTb3VuZCIsImxvd0tpY2siLCJtaWRkbGVLaWNrIiwidHJlbW9sbyIsImhpZ2hLaWNrIiwicmFuZ2VzIiwic291bmRHdWkiLCJvbkNoYW5nZSIsInBsYXllciIsInBsYXkiLCJwbGF5ZXJzIiwiYXVkaW8iLCJhbmFseXNlciIsIm5vZGUiLCJBdWRpbyIsInZvbHVtZSIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiYXVkaWJsZSIsInN0ZXJlbyIsImxvYWRlZCIsInNyYyIsImZyZXFzIiwiZnJlcXVlbmNpZXMiLCJsZXZlbCIsInF1ZXVlIiwic21vb3RoIiwiY29lZmYiLCJpbml0IiwidW5kZWZpbmVkIiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9nbyIsIiRhY3Rpb24iLCIkYWN0aW9uTGFiZWwiLCIkYWN0aW9uRmlsbCIsIiR0dXRvIiwiJGNyZWRpdHMiLCIkY3JlZGl0SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHByb2dyZXNzRmlsbCIsIiRoZWxwIiwiJGJhY2tncm91bmQiLCJub3ciLCJEYXRlIiwibWF4VGltZSIsImhlbHBJc09wZW4iLCJpc0NvbXBsZXRlZCIsIm1pbkZpbGwiLCJtYXhGaWxsIiwiZmlsbCIsInJlc2V0dGVkIiwiaXNEb3duIiwicGF1c2VkIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJjc3MiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwib25FbmRYUCIsIm9uQ2xpY2tIZWxwIiwidGxIZWxwU2hvdyIsInRsSGVscEhpZGUiLCJkaXNwbGF5IiwidGltZVNjYWxlIiwicmV2ZXJzZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImlubmVySFRNTCIsImtpbGwiLCJyZXN0YXJ0Iiwic3RhZ2dlckZyb21UbyIsIkFycmF5IiwiZnJvbSIsImRpc3BsYXlDcmVkaXRzIiwicHJldmVudERlZmF1bHQiLCJnbHNsaWZ5IiwiQXBwIiwidWlIaWRkZW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWNlc0NvbnRyb2xsZXIiLCJrZXlib2FyZENvbnRyb2xsZXIiLCJyZXNpemUiLCJiaW5kTGlzdGVuZXJzIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFNpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzZXRDbGVhckNvbG9yIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsIlBDRlNvZnRTaGFkb3dNYXAiLCJXQUdORVIiLCJ2ZXJ0ZXhTaGFkZXJzUGF0aCIsImZyYWdtZW50U2hhZGVyc1BhdGgiLCJjb21wb3NlciIsIkNvbXBvc2VyIiwiYmxvb21XaWR0aCIsImlzVG91Y2giLCJibG9vbUhlaWdodCIsImJsb29tUGFzcyIsIk11bHRpUGFzc0Jsb29tUGFzcyIsInBhcmFtcyIsInN0cmVuZ3RoIiwiYmx1ckFtb3VudCIsImFwcGx5Wm9vbUJsdXIiLCJ6b29tQmx1clN0cmVuZ3RoIiwiem9vbUJsdXJDZW50ZXIiLCJyZ2JQYXNzIiwiUkdCU3BsaXRQYXNzIiwiZGVsdGEiLCJub2lzZVBhc3MiLCJOb2lzZVBhc3MiLCJhbW91bnQiLCJ2aWduZXR0ZVBhc3MiLCJWaWduZXR0ZVBhc3MiLCJmeGFhUGFzcyIsIkZYQUFQYXNzIiwic2NlbmUiLCJTY2VuZSIsIkZvZyIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwicG9zaXRpb24iLCJsb29rQXQiLCJhZGRDb250cm9scyIsImFkZExpZ2h0cyIsImFkZEVsZW1lbnRzIiwiT3JiaXRDb250cm9scyIsImRpdmlzYXRvciIsIlBsYW5lR2VvbWV0cnkiLCJvdGhlckdlb21ldHJ5IiwibGVmdFJpZ2h0R2VvbWV0cnkiLCJ0b3BCb3R0b21HZW9tZXRyeSIsImJhY2tncm91bmRHZW9tZXRyeSIsIlBJIiwicmVnaXN0ZXIiLCJzZW5zIiwiZGVsYXkiLCJyZW5kZXIiLCJwYXNzIiwidG9TY3JlZW4iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiUmFuZ2UiLCJtaW5MZXZlbCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiYXJncyIsImNvbnRleHQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJsdWNreSIsImNoYW5jZXMiLCJyYW5kb21Gcm9tQXJyYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7O0lB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Qy9OZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzdTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FB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QTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUErQzs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJ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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7OztBQy9CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQzdFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3TEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUMvQkE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLGFBQWEsbUJBQW1CLCtHQUErRyx3RkFBd0YscU1BQXFNLDZCQUE2QiwrQkFBK0Isc0JBQXNCLE9BQU8sc0xBQXNMLDJDQUEyQyx3QkFBd0IsT0FBTyx1SEFBdUgsMkNBQTJDLDRCQUE0QixPQUFPLG9VQUFvVSwyQ0FBMkMsK0JBQStCLE9BQU8sb3BDQUFvcEMsMkNBQTJDLDZCQUE2QixPQUFPLHNJQUFzSSw0Q0FBNEMsZ0NBQWdDLFdBQVcsNkJBQTZCLHVDQUF1QyxVQUFVLDZCQUE2QixrQ0FBa0MsWUFBWSxTQUFTLDZCQUE2QixvQkFBb0IsWUFBWSxVQUFVLDZCQUE2QixxQkFBcUIsWUFBWSxlQUFlLDZCQUE2Qiw2REFBNkQsWUFBWSxPQUFPLDZCQUE2QiwyQkFBMkIsRUFBRSwwQkFBMEIsY0FBYyxvQkFBb0IsVUFBVSxXQUFXLHlEQUF5RCxZQUFZLDZCQUE2QixtQ0FBbUMsS0FBSyw2QkFBNkIsMkJBQTJCLGVBQWUsNkJBQTZCLHFDQUFxQyxPQUFPLDZCQUE2Qiw2QkFBNkIsUUFBUSw2QkFBNkIsOEJBQThCLE9BQU8sNkJBQTZCLDhCQUE4QixpQ0FBaUMsNEJBQTRCLGNBQWMsMERBQTBELFlBQVksNkJBQTZCLG9DQUFvQyxLQUFLLDZCQUE2Qiw0QkFBNEIsZUFBZSw2QkFBNkIsc0NBQXNDLE9BQU8sNkJBQTZCLDhCQUE4QixRQUFRLDZCQUE2QiwrQkFBK0IsT0FBTyw2QkFBNkIsK0JBQStCLEVBQUUsbUJBQW1CLGtEQUFrRCw0RUFBNEUsWUFBWSw0QkFBNEIsdUJBQXVCLHVMQUF1TCxvQ0FBb0MsYUFBYSwwQkFBMEIsNEdBQTRHLGdCQUFnQiw4REFBOEQsbUJBQW1CLHNEQUFzRCxrRUFBa0UscUJBQXFCLHlEQUF5RCxzREFBc0Qsc0VBQXNFLDBCQUEwQixxREFBcUQsMEhBQTBILHNDQUFzQyx5RkFBeUYseUpBQXlKLHVEQUF1RCwyRkFBMkYsbUdBQW1HLG1IQUFtSCxvREFBb0QsdURBQXVELDZGQUE2RixtR0FBbUcsbUhBQW1ILFlBQVksa0NBQWtDLHVEQUF1RCxTQUFTLDBEQUEwRCw2RkFBNkYsc0hBQXNILHNFQUFzRSxrQ0FBa0MsaUZBQWlGLGlDQUFpQyxLQUFLLG1GQUFtRixtQ0FBbUMsWUFBWSxvREFBb0QsYUFBYSw2TUFBNk0sb0JBQW9CLHNCQUFzQixxQkFBcUIsRUFBRSw2Q0FBNkMsNERBQTRELFlBQVkscUJBQXFCLG9EQUFvRCxTQUFTLDhDQUE4Qyw0REFBNEQsWUFBWSxzQkFBc0Isc0RBQXNELFNBQVMsaURBQWlELDREQUE0RCxZQUFZLHFCQUFxQixnRUFBZ0UsU0FBUyw4Q0FBOEMsaUZBQWlGLGtEQUFrRCw0REFBNEQsWUFBWSxzQkFBc0Isa0VBQWtFLFNBQVMsbURBQW1ELGNBQWMsZ1NBQWdTLGNBQWMsbURBQW1ELGlDQUFpQyxzQ0FBc0MsSUFBSSxHQUFHLElBQUksWUFBWSx1REFBdUQsaUhBQWlILDBRQUEwUSxjQUFjLHNEQUFzRCwyQ0FBMkMsNENBQTRDLFlBQVksc0JBQXNCLEtBQUssaUZBQWlGLG1CQUFtQixrRUFBa0UsVUFBVSxNQUFNLGlDQUFpQyxxRUFBcUUsbUJBQW1CLHNCQUFzQixrREFBa0Qsa0RBQWtELGFBQWEsNkNBQTZDLFlBQVksdUJBQXVCLEtBQUssbUZBQW1GLHFCQUFxQixzRUFBc0UsVUFBVSxNQUFNLGtDQUFrQyx1RUFBdUUsbUJBQW1CLHVCQUF1QixxREFBcUQscURBQXFELGFBQWEsb0RBQW9ELCtCQUErQiw2RUFBNkUsc0RBQXNELGtDQUFrQyxrRkFBa0YsdURBQXVELCtCQUErQixXQUFXLHlDQUF5QywyTEFBMkwsdUhBQXVILDREQUE0RCxlQUFlLEVBQUUsMERBQTBELFlBQVksbUNBQW1DLHdEQUF3RCw2REFBNkQsY0FBYyxnSEFBZ0gsa0dBQWtHLGtHQUFrRyxzSkFBc0osS0FBSyxxR0FBcUcsOEJBQThCLFdBQVcsWUFBWSxNQUFNLG9CQUFvQixxR0FBcUcsb0lBQW9JLEVBQUUsWUFBWSw0R0FBNEcsY0FBYyxtR0FBbUcscUhBQXFILFlBQVkseUNBQXlDLDhEQUE4RCx3Q0FBd0MsOEJBQThCLFdBQVcsWUFBWSxNQUFNLG9CQUFvQixzRUFBc0Usc0RBQXNELGlEQUFpRCxLQUFLLFNBQVMsZ0VBQWdFLGNBQWMsc0hBQXNILDRLQUE0SyxpQkFBaUIseUNBQXlDLCtGQUErRix3Q0FBd0MsOEJBQThCLFdBQVcsWUFBWSxNQUFNLG9CQUFvQixpREFBaUQsZ0NBQWdDLHNEQUFzRCw2RUFBNkUsaUJBQWlCLG1CQUFtQixtREFBbUQsRUFBRSxLQUFLLG1GQUFtRiwrQkFBK0IsWUFBWSxvREFBb0QsK0hBQStILEVBQUUsOEhBQThILDRDQUE0QyxtRkFBbUYsZ0RBQWdELDhEQUE4RCwwRUFBMEUsV0FBVywrREFBK0QsbUlBQW1JLGlFQUFpRSw4SEFBOEgsaUVBQWlFLDRJQUE0SSxpRUFBaUUsNklBQTZJLGdEQUFnRCx1SUFBdUkscURBQXFELHNoQkFBc2hCLGdCQUFnQixFQUFFLG9EQUFvRCxrSUFBa0ksd0dBQXdHLGNBQWMseURBQXlELHNJQUFzSSxvR0FBb0csK0NBQStDLDZCQUE2QiwrQ0FBK0MsKzJCQUErMkIsZ0JBQWdCLEVBQUUsdURBQXVELDZIQUE2SCw0REFBNEQsZUFBZSx5Q0FBeUMsMEJBQTBCLGtIQUFrSCxxQkFBcUIsZ0ZBQWdGLGdFQUFnRSxzRkFBc0YsMEJBQTBCLGtFQUFrRSxnSUFBZ0ksNEpBQTRKLG1FQUFtRSwwQkFBMEIsK0ZBQStGLDJEQUEyRCw2Q0FBNkMsbUNBQW1DLDZHQUE2Ryx5REFBeUQsNENBQTRDLDRGQUE0Rix5R0FBeUcsc0RBQXNELDBCQUEwQixxR0FBcUcsOENBQThDLDBCQUEwQiw2RkFBNkYsOENBQThDLDBCQUEwQiw2RkFBNkYsaURBQWlELDBCQUEwQixtR0FBbUcsNkNBQTZDLDBCQUEwQiw0RkFBNEYsc0RBQXNELDBCQUEwQixpR0FBaUcsOENBQThDLDBCQUEwQiw2RkFBNkYsMERBQTBELDZFQUE2RSxpQkFBaUIsMEJBQTBCLGlVQUFpVSxnREFBZ0QsNEhBQTRILGFBQWEsa0JBQWtCLDBEQUEwRCxpQkFBaUIsc0JBQXNCLHFYQUFxWCxnREFBZ0QsaUdBQWlHLGFBQWEsNkVBQTZFLDBDQUEwQyxnQkFBZ0Isb1RBQW9ULGdEQUFnRCw2SEFBNkgsYUFBYSxhQUFhLFlBQVksNEVBQTRFLGNBQWMsc0JBQXNCLHFGQUFxRix1RkFBdUYsdUNBQXVDLDZEQUE2RCxnREFBZ0Qsc0hBQXNILEVBQUUsT0FBTywrRUFBK0Usc0JBQXNCLDhCQUE4QixzSEFBc0gsZ0pBQWdKLHdIQUF3SCx1REFBdUQsd0hBQXdILGtCQUFrQiw4RUFBOEUsY0FBYyxtSkFBbUosbUpBQW1KLHVEQUF1RCxpREFBaUQsVUFBVSxtREFBbUQsVUFBVSxFQUFFLE9BQU8saUZBQWlGLGNBQWMsbUpBQW1KLG1KQUFtSix1REFBdUQsZ0RBQWdELFVBQVUsa0RBQWtELFVBQVUsRUFBRSxPQUFPLDZFQUE2RSxjQUFjLDhJQUE4SSx1REFBdUQsMENBQTBDLFVBQVUsRUFBRSxzR0FBc0csMkNBQTJDLFVBQVUsRUFBRSxPQUFPLHNFQUFzRSxjQUFjLHVEQUF1RCx3Q0FBd0MsVUFBVSwwQ0FBMEMsVUFBVSxFQUFFLE9BQU8sa0ZBQWtGLGNBQWMsc0JBQXNCLDRCQUE0Qix5R0FBeUcsa0RBQWtELHVEQUF1RCx1TEFBdUwsT0FBTyxxRkFBcUYsY0FBYyxzQkFBc0IsaUxBQWlMLDRFQUE0RSwwTEFBMEwsT0FBTyxtRkFBbUYsY0FBYyxzQkFBc0IsNEJBQTRCLHlHQUF5RyxrREFBa0QsdURBQXVELHFHQUFxRyxrQkFBa0IsMERBQTBELE9BQU8sbUZBQW1GLHNCQUFzQiw0QkFBNEIsNkdBQTZHLGtEQUFrRCx1REFBdUQscUdBQXFHLGtCQUFrQiwwREFBMEQsa0JBQWtCLDhFQUE4RSxjQUFjLHNCQUFzQix3SUFBd0ksc0hBQXNILHVEQUF1RCx3RUFBd0Usa0JBQWtCLEVBQUUsT0FBTywrRUFBK0UsY0FBYyxzQkFBc0Isd0lBQXdJLHNIQUFzSCx1REFBdUQseUVBQXlFLGtCQUFrQixFQUFFLE9BQU8sa0VBQWtFLGNBQWMsc0JBQXNCLGtKQUFrSix5REFBeUQsa0NBQWtDLGlDQUFpQyx1REFBdUQsa0VBQWtFLGtCQUFrQixxRUFBcUUsa0JBQWtCLEVBQUUsT0FBTyxtRUFBbUUsY0FBYyxzQkFBc0IsbUhBQW1ILHVEQUF1RCwyREFBMkQsa0JBQWtCLEVBQUUsT0FBTyxnRUFBZ0UsY0FBYyxzQkFBc0IsbUhBQW1ILHVEQUF1RCx3REFBd0Qsa0JBQWtCLEVBQUUsT0FBTywwRUFBMEUsc0JBQXNCLDJCQUEyQixxSEFBcUgsd0pBQXdKLG1IQUFtSCx1REFBdUQsbUhBQW1ILGtCQUFrQixzRUFBc0UsY0FBYyxzQkFBc0I7QUFDeHUrQiwwR0FBMEcsdURBQXVELCtHQUErRyxPQUFPLDJFQUEyRSxjQUFjLG1CQUFtQix3RkFBd0YsdUNBQXVDLHVEQUF1RCxxSEFBcUgsT0FBTywrREFBK0QsY0FBYyxzQkFBc0IsdUhBQXVILHlFQUF5RSx1REFBdUQsMkdBQTJHLE9BQU8scURBQXFELGlCQUFpQix5TEFBeUwscURBQXFELGFBQWEsc0VBQXNFLHFDQUFxQyxRQUFRLDhDQUE4Qyx1RkFBNkUsVUFBVTtBQUFBLG9NQUFpRyxPOzs7Ozs7QUM5QjN4RCw4REFBOEQsbUJBQW1CLHNCQUFzQixvREFBb0QseVhBQXlYLDBXQUEwVyxlQUFlLGdHQUFnRyxDOzs7Ozs7QUNBNytCLDJFQUEyRSx3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLGtDQUFrQyx3QkFBd0IsdUJBQXVCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsbUxBQW1MLG1EQUFtRCw4R0FBOEcsK0NBQStDLGtDQUFrQywySEFBMkgsb0ZBQW9GLHVDQUF1QywyREFBMkQsT0FBTyxPQUFPLDREQUE0RCxTQUFTLG1JQUFtSSxpQ0FBaUMsa0NBQWtDLEM7Ozs7OztBQ0EzM0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMLGlDQUFpQyxTQUFTO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ2hQQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1Mjk3M2U4YmM4NTM3NTVkZGZlMCIsIi8qKlxuICogRXZlbnRzIE1hbmFnZXJcbiAqIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAqL1xuXG5jbGFzcyBFdmVudHNNYW5hZ2VyIHtcblxuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgZW1pdCAoIGV2ZW50LCBkYXRhID0gbnVsbCApIHtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdO1xuXG4gICAgICAgIGlmKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciggbGV0IGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSBsaXN0ZW5lcnNbaV0uZm4oIGRhdGEgKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBuYW1lXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc3RhdGljIG9uICggZXZlbnQsIGZuICkge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFdmVudHNNYW5hZ2VyIDo6IE9OIDo6JywgZXZlbnQpO1xuXG4gICAgICAgIGlmKCFFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3QpIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdCA9IHt9O1xuXG4gICAgICAgIGlmKCFFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdKSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdID0gW107IC8vIGltcHJvdmUgKC5fLilcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdLnB1c2goe2ZuOmZufSk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgb25jZSggZXZlbnQsIGZuICkge1xuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCBkYXRhICkgPT57XG5cbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBmbihkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0ZW5lci5fID0gZm47XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oIGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb2ZmICggZXZlbnQsIGZuICkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgICAgICBpZighbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V2ZW50c01hbmFnZXIgOjogT2ZmIDo6IEN1cnJlbnRseSBubyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQgOiAnLCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzTWFuYWdlciA6OiBPZmYgOjogQ2FsbGJhY2sgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRFdmVudHMgPSBbXTtcblxuICAgICAgICBmb3IoIGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgIGlmKHRhcmdldC5mbiAhPT0gZm4gJiYgdGFyZ2V0LmZuLl8gIT09IGZuICkgeyAvLyAoLl9fLikgPz9cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiggdGFyZ2V0RXZlbnRzLmxlbmd0aCA+wqAwIClcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0gPSB0YXJnZXRFdmVudHM7XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHNNYW5hZ2VyLmpzIiwiLyoqXG4gKiBFIFYgRSBOIFQgU1xuICovXG5cbmNvbnN0IEV2ZW50cyA9IHtcbiAgICBLRVlCT0FSRDoge1xuICAgICAgICBLRVlET1dOOiBcIktFWUJPQVJEX0tFWURPV05cIixcbiAgICAgICAgS0VZVVA6IFwiS0VZQk9BUkRfS0VZVVBcIixcbiAgICAgICAgS0VZUFJFU1M6IFwiS0VZQk9BUkRfS0VZUFJFU1NcIixcbiAgICAgICAgU1BBQ0VIT0xEOiBcIktFWUJPQVJEX1NQQUNFSE9MRFwiLFxuICAgICAgICBTUEFDRVVQOiBcIktFWUJPQVJEX1NQQUNFVVBcIixcbiAgICAgICAgU1BBQ0VET1dOOiBcIktFWUJPQVJEX1NQQUNFRE9XTlwiLFxuICAgIH0sXG4gICAgU09VTkRTOiB7XG4gICAgICAgIENBTlBMQVk6IFwiU09VTkRTX0NBTlBMQVlcIixcbiAgICAgICAgRU5EOiBcIlNPVU5EU19FTkRcIixcbiAgICAgICAgTE9XS0lDSzogXCJTT1VORFNfTE9XS0lDS1wiLFxuICAgICAgICBNSURETEVLSUNLOiBcIlNPVU5EU19NSURETEVLSUNLXCIsXG4gICAgICAgIEhJR0hLSUNLOiBcIlNPVU5EU19ISUdIS0lDS1wiLFxuICAgICAgICBUUkVNT0xPOiBcIlNPVU5EU19UUkVNT0xPXCIsXG4gICAgICAgIFNUQVJUOiBcIlNPVU5EU19TVEFSVFwiLFxuICAgICAgICBFTkQ6IFwiU09VTkRTX0VORFwiLFxuICAgIH0sXG4gICAgWFA6IHtcbiAgICAgICAgU1RBUlQ6IFwiWFBfU1RBUlRcIixcbiAgICAgICAgRU5EOiBcIlhQX0VORFwiLFxuICAgIH0sXG4gICAgVUk6IHtcbiAgICAgICAgSElEREVOOiBcIlVJX0hJRERFTlwiLFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4uL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlscy9tYXAnO1xuXG5jbGFzcyBBYnN0cmFjdEZhY2UgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciA9IDB4MjQyNDI1LCBuYW1lLCBzaWRlID0gVEhSRUUuRnJvbnRTaWRlICkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucGxhbmVHZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uU3BhY2VIb2xkID0gOjp0aGlzLm9uU3BhY2VIb2xkO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vbkhpZGRlblVJID0gOjp0aGlzLm9uSGlkZGVuVUk7XG5cbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoVEhSRUUuU2hhZGVyTGliWydwaG9uZyddLnVuaWZvcm1zKTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXSA9IHsgdHlwZTonZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snZGlmZnVzZSddID0geyB0eXBlOiAnYycsIHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddID0geyB0eXBlOiAndjMnLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUludmVydCddID0geyB0eXBlOiAnZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVNxdWFyZSddID0geyB0eXBlOiAndjMnLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSkgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVdpZHRoJ10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy53aWR0aCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1SGVpZ2h0J10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUxlbmd0aCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cubGVuZ3RoIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddID0geyB0eXBlOiAnZicsIHZhbHVlOiAwLjAgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMS4wO1xuXG4gICAgICAgIHRoaXMuc3RhcnREaXZpc2lvbnMgPSBuZXcgVEhSRUUuVmVjdG9yMig5LCAxMyk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMztcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLmVhc2UgPSBFeHBvLmVhc2VPdXQ7XG4gICAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcblxuICAgICAgICBpZiAoIHRoaXMuZGVidWcgKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRHdWkoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbCcpLFxuICAgICAgICAgICAgLy8gZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvYm90dG9tLmZyYWcuZ2xzbCcpLFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsJyksXG4gICAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICAgIGxpZ2h0czogZmFsc2UsXG4gICAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBmb2c6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxhbmVHZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIHRoaXMubWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLm1lc2gpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICAvLyBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHRoaXMub25TcGFjZUhvbGQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uSGlkZGVuVUkpO1xuICAgIH1cblxuICAgIGluaXRHdWkgKCBpc09wZW4gKSB7XG4gICAgICAgIHRoaXMuZ3VpID0gd2luZG93Lmd1aS5hZGRGb2xkZXIodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneCcsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB4Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3knLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geScpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd6JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHonKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3gnLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHgnKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3knLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHknKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3onLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHonKTtcbiAgICAgICAgXG4gICAgICAgIGlzT3BlbiAmJiB0aGlzLmd1aS5vcGVuKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggdGltZSApIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgc2V0UGxhaW5Db2xvciAoIGNvbG9yICkge1xuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygwLCAwKTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICggb3JpZW50YXRpb25OYW1lLCBzY2FsYXIgPSAxLCBkdXJhdGlvbiA9IDIgKSB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbnNbb3JpZW50YXRpb25OYW1lXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3JpZW50YXRpb24gKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IG9yaWVudGF0aW9uLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoc2NhbGFyKTsgLy8gcm9zYWNlXG5cbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnggPSBjbG9uZS54O1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueSA9IGNsb25lLnk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS56ID0gY2xvbmUuejtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldmVyc2VTdHJpcGVzICgpIHtcbiAgICAgICAgLy8gdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgfVxuXG4gICAgY2hhbmdlU3BlZWQgKCBzcGVlZCA9IHRoaXMuc3BlZWRNaW4gKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBpbnZlcnQgKCkge1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcblxuICAgICAgICBpZiAoIHRoaXMuYmxhY2tNb2RlICkge1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLnNob3coKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0byA9IHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9PT0gMS4wID8gMC4gOiAxLjtcbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiB0bywgZWFzZTogdGhpcy5lYXNlLCB9LCAwKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICB0b2dnbGVWaXNpYmlsaXR5ICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyAoIGRhdGEgKSB7XG4gICAgICAgIHN3aXRjaCAoIGRhdGEua2V5ICkge1xuICAgICAgICAgICAgLy8gY2FzZSAncCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRQbGFpbkNvbG9yKDB4MDAwMDAwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdHJpcGVzKCdob3Jpem9udGFsJywgMSk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ3YnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RyaXBlcygndmVydGljYWwnLCAxKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaSc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pbnZlcnQoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAncic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yZXZlcnNlU3RyaXBlcygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5SGlkZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5U2hvd2VyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDEsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMCwgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZURpdmlzaW9ucyAoIHgsIHksIGludmVydCA9IHRydWUgKSB7XG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCB0aGlzLmR1cmF0aW9uLCB7IHg6IHgsIHk6IHksIGVhc2U6IHRoaXMuZWFzZSB9LCAwKTtcblxuICAgICAgICAvLyBpZiAoIGludmVydCApIHtcbiAgICAgICAgLy8gICAgIHRsLmFkZCh0aGlzLmludmVydCgpLCAwKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICBzZXRCbGFja01vZGUgKCkge1xuICAgICAgICB0aGlzLmJsYWNrTW9kZSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMS4wLCBlYXNlOiB0aGlzLmVhc2UsIH0pO1xuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggdVByb2dyZXNzICkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXS52YWx1ZSA9IHVQcm9ncmVzcztcbiAgICB9XG5cbiAgICBvbkVuZCAoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgPSAwLjA7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAyO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB9fSk7XG4gICAgICAgIHRsLnNldCh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHsgeDogMSwgeTogMSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIGR1cmF0aW9uLCB7IHZhbHVlOiAwLjAsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwuZnJvbVRvKHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLCBkdXJhdGlvbiwgeyB2YWx1ZTogMS44IH0sIHsgdmFsdWU6IDAuMCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLnZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9IDAuMDtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgb25IaWRkZW5VSSAoKSB7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0RmFjZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0Fic3RyYWN0RmFjZS5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvfi9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFdlYk1pZGkgZnJvbSAnd2VibWlkaSc7XG5cbmZ1bmN0aW9uIG1hcChuLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgcmV0dXJuICgobi1zdGFydDEpLyhzdG9wMS1zdGFydDEpKSooc3RvcDItc3RhcnQyKStzdGFydDI7XG59XG5cbmNsYXNzIE1pZGlDb250cm9sbGVyIHtcblxuXHRzdGF0aWMgc3RhcnQgKCBjb25maWcgKSB7XG5cdFx0TWlkaUNvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgTWlkaUNvbnRyb2xsZXIoY29uZmlnKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yICggY29uZmlnICkge1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG5cdFx0dGhpcy5wYWRzID0ge307XG5cdFx0dGhpcy5rbm9icyA9IHt9O1xuXG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSA6OnRoaXMub25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IDo6dGhpcy5vbkVycm9yO1xuXHRcdHRoaXMub25NZXNzYWdlID0gOjp0aGlzLm9uTWVzc2FnZTtcblxuXHRcdFdlYk1pZGkuZW5hYmxlKCAoIGVyciApID0+IHtcblx0XHRcdGlmICggZXJyICkge1xuXHRcdFx0XHR0aGlzLm9uRXJyb3IoZXJyKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vblN1Y2Nlc3MoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlcXVlc3RBY2Nlc3MgKCkge1xuICAgICAgICBpZiAoIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2VzcyApIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcyh7XG4gICAgICAgICAgICAgICAgc3lzZXg6IGZhbHNlXG4gICAgICAgICAgICB9KS50aGVuKHRoaXMub25TdWNjZXNzLCB0aGlzLm9uRXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoYFlvdSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgTUlESSBBUEkuYCk7XG4gICAgICAgIH1cblx0fVxuXG5cdG9uU3VjY2VzcyAoKSB7XG5cdFx0aWYgKCBXZWJNaWRpLmlucHV0cy5sZW5ndGggPiAwICkge1xuXG5cdFx0XHR0aGlzLmlucHV0ID0gV2ViTWlkaS5pbnB1dHNbMF07XG5cblx0XHRcdHRoaXMucGFyc2VDb25maWcoKTtcblxuXHRcdFx0dGhpcy5pbnB1dC5hZGRMaXN0ZW5lcignbm90ZW9uJywgJ2FsbCcsICggZSApID0+IHtcblx0XHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucGFkcyk7XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBrZXlzW2ldO1xuXHRcdFx0XHRcdGNvbnN0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLnBhZHNba2V5XTtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBqID0gMDsgaiA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBqKysgKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IG51bWJlciwgY2hhbm5lbCwgY2FsbGJhY2sgfSA9IHN1YnNjcmlwdGlvbnNbal07XG5cblx0XHRcdFx0XHRcdGlmICggZS5ub3RlLm51bWJlciA9PT0gbnVtYmVyICkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayh7IHZlbG9jaXR5OiBlLnZlbG9jaXR5IH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuaW5wdXQuYWRkTGlzdGVuZXIoJ3BpdGNoYmVuZCcsICdhbGwnLCAoIGUgKSA9PiB7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC5hZGRMaXN0ZW5lcignY29udHJvbGNoYW5nZScsICdhbGwnLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtub2JzKTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGtleXNbaV07XG5cdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaXB0aW9ucyA9IHRoaXMua25vYnNba2V5XTtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBqID0gMDsgaiA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBqKysgKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IG51bWJlciwgY2hhbm5lbCwgY2FsbGJhY2sgfSA9IHN1YnNjcmlwdGlvbnNbal07XG5cblx0XHRcdFx0XHRcdGlmICggZS5jb250cm9sbGVyLm51bWJlciA9PT0gbnVtYmVyICkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IG1hcChlLnZhbHVlLCAwLCAxMjcsIDAsIDEpO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayh2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZUNvbmZpZyAoKSB7XG5cdFx0Ly8gdGhpcy5wYWRzID0gdGhpcy5jb25maWcucGFkcztcblx0XHQvLyB0aGlzLmtub2JzID0gdGhpcy5jb25maWcua25vYnM7XG5cdH1cblxuXHRvbkVycm9yICggZXJyb3IgKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgTWlkaUNvbnRyb2xsZXIgOjogZXJyb3Igd2hpbGUgcmVxdWVzdGluZyBNSURJIGFjY2Vzcy5gKTtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuXHR9XG5cblx0b25NZXNzYWdlICggZXZlbnQgKSB7XG5cdFx0Y29uc29sZS5sb2coYE1pZGlDb250cm9sbGVyIDo6IG9uTWVzc2FnZWAsIGV2ZW50KTtcblx0fVxuXG5cdHN0YXRpYyBvblBhZERvd24gKCBpZCwgY2FsbGJhY2sgKSB7XG5cdFx0Y29uc3QgeyBpbnN0YW5jZSB9ID0gTWlkaUNvbnRyb2xsZXI7XG5cblx0XHRpbnN0YW5jZS5yZWdpc3RlclBhZChpZCwgY2FsbGJhY2spO1xuXHR9XG5cblx0c3RhdGljIG9uS25vYkNoYW5nZSAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRjb25zdCB7IGluc3RhbmNlIH0gPSBNaWRpQ29udHJvbGxlcjtcblxuXHRcdGluc3RhbmNlLnJlZ2lzdGVyS25vYihpZCwgY2FsbGJhY2spO1xuXHR9XG5cblx0cmVnaXN0ZXJQYWQgKCBpZCwgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCAhdGhpcy5wYWRzW2lkXSApIHtcblx0XHRcdHRoaXMucGFkc1tpZF0gPSBbXTtcblx0XHR9XG5cblx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmZpbmROdW1iZXJJblBhZHMoaWQpO1xuXG5cdFx0aWYgKCBudW1iZXIgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0dGhpcy5wYWRzW2lkXS5wdXNoKHsgY2FsbGJhY2ssIG51bWJlciB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlkaUNvbnRyb2xsZXIgOjogb25QYWREb3duICR7aWR9IDo6IGNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uYCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYFBhZCAke2lkfSBub3QgcmVnaXN0ZXJlZCBpbiBjb25maWdgKTtcblx0XHR9XG5cdH1cblxuXHRyZWdpc3Rlcktub2IgKCBpZCwgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCAhdGhpcy5rbm9ic1tpZF0gKSB7XG5cdFx0XHR0aGlzLmtub2JzW2lkXSA9IFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZmluZE51bWJlckluS25vYnMoaWQpO1xuXG5cdFx0aWYgKCBudW1iZXIgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0dGhpcy5rbm9ic1tpZF0ucHVzaCh7IGNhbGxiYWNrLCBudW1iZXIgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1pZGlDb250cm9sbGVyIDo6IG9uS25vYkNoYW5nZSAke2lkfSA6OiBjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvbmApO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihgTWlkaUNvbnRyb2xsZXI6IEtub2IgJHtpZH0gbm90IHJlZ2lzdGVyZWQgaW4gY29uZmlnYCk7XG5cdFx0fVxuXHR9XG5cblx0ZmluZE51bWJlckluUGFkcyAoIGlkICkge1xuXHRcdGNvbnN0IHsgcGFkcyB9ID0gdGhpcy5jb25maWc7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYWRzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0aWYgKCBwYWRzW2ldLmlkID09PSBpZCApIHtcblx0XHRcdFx0cmV0dXJuIHBhZHNbaV0ubnVtYmVyO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZpbmROdW1iZXJJbktub2JzICggaWQgKSB7XG5cdFx0Y29uc3QgeyBrbm9icyB9ID0gdGhpcy5jb25maWc7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBrbm9icy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGlmICgga25vYnNbaV0uaWQgPT09IGlkICkge1xuXHRcdFx0XHRyZXR1cm4ga25vYnNbaV0ubnVtYmVyO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlkaUNvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9NaWRpQ29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCAobiwgc3RhcnQxLCBzdG9wMSwgc3RhcnQyLCBzdG9wMikge1xuICAgIHJldHVybiAoKG4gLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSkgKiAoc3RvcDIgLSBzdGFydDIpICsgc3RhcnQyO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL21hcC5qcyIsIi8vIHNvdXJjZWQgZnJvbTpcbi8vIGh0dHA6Ly93d3cubGVhbmJhY2twbGF5ZXIuY29tL3Rlc3QvaDVtdC5odG1sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtbWltZS9ibG9iL21hc3Rlci90eXBlcy5qc29uXG52YXIgbWltZVR5cGVzID0gcmVxdWlyZSgnLi9taW1lLXR5cGVzLmpzb24nKVxuXG52YXIgbWltZUxvb2t1cCA9IHt9XG5PYmplY3Qua2V5cyhtaW1lVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICB2YXIgZXh0ZW5zaW9ucyA9IG1pbWVUeXBlc1trZXldXG4gIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0KSB7XG4gICAgbWltZUxvb2t1cFtleHRdID0ga2V5XG4gIH0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvb2t1cCAoZXh0KSB7XG4gIGlmICghZXh0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgZXh0ZW5zaW9uIHN0cmluZycpXG4gIGlmIChleHQuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgZXh0ID0gZXh0LnN1YnN0cmluZygxKVxuICB9XG4gIHJldHVybiBtaW1lTG9va3VwW2V4dC50b0xvd2VyQ2FzZSgpXVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzdHJpbmcgPSB0b1N0cmluZy5jYWxsKGZuKVxuICByZXR1cm4gc3RyaW5nID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8XG4gICAgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBzdHJpbmcgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAvLyBJRTggYW5kIGJlbG93XG4gICAgIChmbiA9PT0gd2luZG93LnNldFRpbWVvdXQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuYWxlcnQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuY29uZmlybSB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5wcm9tcHQpKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1mdW5jdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUF1ZGlvQ29udGV4dFxuZnVuY3Rpb24gY3JlYXRlQXVkaW9Db250ZXh0ICgpIHtcbiAgdmFyIEF1ZGlvQ3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICByZXR1cm4gbmV3IEF1ZGlvQ3RvcigpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYXVkaW8tY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxvb2t1cCA9IHJlcXVpcmUoJ2Jyb3dzZXItbWVkaWEtbWltZS10eXBlJylcbnZhciBhdWRpb1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3JjUGxheWFibGVcbmZ1bmN0aW9uIGlzU3JjUGxheWFibGUgKHNyYykge1xuICBpZiAoIXNyYykgdGhyb3cgbmV3IFR5cGVFcnJvcignc3JjIGNhbm5vdCBiZSBlbXB0eScpXG4gIHZhciB0eXBlXG4gIGlmICh0eXBlb2Ygc3JjLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIDxzb3VyY2U+IGVsZW1lbnRcbiAgICB0eXBlID0gc3JjLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAnZm9vLm1wMycgc3RyaW5nXG4gICAgdmFyIGV4dCA9IGV4dGVuc2lvbihzcmMpXG4gICAgaWYgKGV4dCkgdHlwZSA9IGxvb2t1cChleHQpXG4gIH0gZWxzZSB7XG4gICAgLy8geyBzcmM6ICdmb28ubXAzJywgdHlwZTogJ2F1ZGlvL21wZWc7IGNvZGVjcy4uJ31cbiAgICB0eXBlID0gc3JjLnR5cGVcbiAgfVxuXG4gIC8vIFdlIGhhdmUgYW4gdW5rbm93biBmaWxlIGV4dGVuc2lvbiBvclxuICAvLyBhIDxzb3VyY2U+IHRhZyB3aXRob3V0IGFuIGV4cGxpY2l0IHR5cGUsXG4gIC8vIGp1c3QgbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdCFcbiAgaWYgKCF0eXBlKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIGhhbmRsZSBcIm5vXCIgZWRnZSBjYXNlIHdpdGggc3VwZXIgbGVnYWN5IGJyb3dzZXJzLi4uXG4gIC8vIGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vZm9ydW0vIyF0b3BpYy9nb29nbGUtd2ViLXRvb2xraXQtY29udHJpYnV0b3JzL2E4VXkwYlhxMUhvXG4gIGlmICghYXVkaW8pIGF1ZGlvID0gbmV3IHdpbmRvdy5BdWRpbygpXG4gIHZhciBjYW5wbGF5ID0gYXVkaW8uY2FuUGxheVR5cGUodHlwZSkucmVwbGFjZSgvbm8vLCAnJylcbiAgcmV0dXJuIEJvb2xlYW4oY2FucGxheSlcbn1cblxubW9kdWxlLmV4cG9ydHMuY3JlYXRlRXJyb3IgPSBjcmVhdGVFcnJvclxuZnVuY3Rpb24gY3JlYXRlRXJyb3IgKHNvdXJjZXMpIHtcbiAgLy8gQWxsIHNvdXJjZXMgYXJlIHVucGxheWFibGVcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYW55IG9mIHRoZSBmb2xsb3dpbmcgc291cmNlczpcXG4gICAgJyArXG4gICAgICBzb3VyY2VzLmpvaW4oJywgJykgKyAnXFxuJyArXG4gICAgICAnVHJ5IHVzaW5nIGFuIGFycmF5IG9mIE9HRywgTVAzIGFuZCBXQVYuJylcbiAgZXJyLnR5cGUgPSAnQVVESU9fRk9STUFUJ1xuICByZXR1cm4gZXJyXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoZXh0SWR4ICsgMSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGF1ZGlvQ29udGV4dCkge1xuICBpZiAoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJyAmJlxuICAgICAgdHlwZW9mIGF1ZGlvQ29udGV4dC5yZXN1bWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhdWRpb0NvbnRleHQucmVzdW1lKClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3Jlc3VtZS1jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCByYW5kb21Gcm9tQXJyYXkgZnJvbSAnLi91dGlscy9yYW5kb21Gcm9tQXJyYXknO1xuaW1wb3J0IGx1Y2t5IGZyb20gJy4vdXRpbHMvbHVja3knO1xuaW1wb3J0IG1hcCBmcm9tICcuL3V0aWxzL21hcCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgTWlkaUNvbnRyb2xsZXIgZnJvbSAnLi91dGlscy9NaWRpQ29udHJvbGxlcic7XG5cbmNsYXNzIEZhY2VzQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHRoaXMuZmFjZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmxvd2tpY2tlZCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcblxuICAgICAgICAvLyBvbiBldmVudHNcbiAgICAgICAgdGhpcy5vbkxvd0tpY2sgPSA6OnRoaXMub25Mb3dLaWNrO1xuICAgICAgICB0aGlzLm9uTWlkZGxlS2ljayA9IDo6dGhpcy5vbk1pZGRsZUtpY2s7XG4gICAgICAgIHRoaXMub25IaWdoS2ljayA9IDo6dGhpcy5vbkhpZ2hLaWNrO1xuICAgICAgICB0aGlzLm9uVHJlbW9sbyA9IDo6dGhpcy5vblRyZW1vbG87XG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG5cbiAgICAgICAgLy8gYmxhY2sgbW9kZXNcbiAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCA9IDo6dGhpcy5ibGFja01vZGVWZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVIb3Jpem9udGFsID0gOjp0aGlzLmJsYWNrTW9kZUhvcml6b250YWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSA9IDo6dGhpcy5ibGFja01vZGVCb3R0b207XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCA9IDo6dGhpcy5ibGFja01vZGVGdWxsO1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVhY3Rpb25zXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zID0gOjogdGhpcy51cGRhdGVEaXZpc2lvbnM7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlID0gOjp0aGlzLnNldEJsYWNrTW9kZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSA9IDo6dGhpcy5jaGFuZ2VTY2FsZTtcblxuICAgICAgICB0aGlzLnJlYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zLFxuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVggPSA6OnRoaXMuY2hhbmdlU2NhbGVYO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWSA9IDo6dGhpcy5jaGFuZ2VTY2FsZVk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGVCb3RoID0gOjp0aGlzLmNoYW5nZVNjYWxlQm90aDtcblxuICAgICAgICAvLyBzY2FsZXNcbiAgICAgICAgdGhpcy5zY2FsaW5ncyA9IFtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVZLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVgsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlQm90aCxcbiAgICAgICAgXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkxPV0tJQ0ssIHRoaXMub25Mb3dLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLk1JRERMRUtJQ0ssIHRoaXMub25NaWRkbGVLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkhJR0hLSUNLLCB0aGlzLm9uSGlnaEtpY2spO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuVFJFTU9MTywgdGhpcy5vblRyZW1vbG8pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcblxuICAgICAgICAvLyB0aGlzLnVwZGF0ZURpdmlzaW9ucyA9IGRlYm91bmNlKHRoaXMudXBkYXRlRGl2aXNpb25zLCA0MDApO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVNjYWxlID0gZGVib3VuY2UodGhpcy5jaGFuZ2VTY2FsZSwgNDAwKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCbGFja01vZGUgPSBkZWJvdW5jZSh0aGlzLnNldEJsYWNrTW9kZSwgNDAwKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuXG4gICAgICAgIE1pZGlDb250cm9sbGVyLm9uUGFkRG93bigxLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAtdGhpcy5zcGVlZENvbnRhaW5lcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oNiwgKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5pbnZlcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMSwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3BlZWRDb250YWluZXIgPCAwID8gLTEgOiAxO1xuXG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gdmFsdWUgKiAyICogZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMiwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB2YWx1ZSAqIDEyO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlZ2lzdGVyICggaWQsIGZhY2UgKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbaWRdID0gZmFjZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGZhY2UpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGl2aXNpb25zICggbWluLCBtYXgsIGJldHdlZW4gPSA0ICkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbnMgPSBbMF07XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpKz0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtYXg7IGkgPj0gbWluOyBpLT0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2aXNpb25zLnB1c2goMCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdmlzaW9ucztcbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWCA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy54LCB0aGlzLmRpdmlzaW9ucy5sYXN0WCwgMik7XG4gICAgICAgIGNvbnN0IHJkbVhJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25YLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWCA9IHBvc3NpYmxlRGl2aXNpb25YW3JkbVhJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFggPSB0aGlzLmRpdmlzaW9ucy54LmluZGV4T2YoZGl2aXNpb25YKTtcblxuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWSA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy55LCB0aGlzLmRpdmlzaW9ucy5sYXN0WSwgMik7XG4gICAgICAgIGNvbnN0IHJkbVlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25ZLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWSA9IHBvc3NpYmxlRGl2aXNpb25ZW3JkbVlJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFkgPSB0aGlzLmRpdmlzaW9ucy55LmluZGV4T2YoZGl2aXNpb25ZKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0udXBkYXRlRGl2aXNpb25zKGRpdmlzaW9uWCwgZGl2aXNpb25ZLCB0aGlzLmFsbG93SW52ZXJ0KSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0uc2V0U3RyaXBlcygnaG9yaXpvbnRhbCcsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kRGl2aXNpb25zICggYWxsLCBjdXJyZW50LCByYW5nZSApIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gYWxsLm1hcCggKCBkaXZpc2lvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICggaW5kZXggPiBjdXJyZW50IC0gcmFuZ2UgJiYgaW5kZXggPCBjdXJyZW50ICsgcmFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdmlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLmZpbHRlciggKCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGl2aXNpb25zO1xuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBkYXRhICkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCB8fCB3aW5kb3cuc291bmRFbmRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXkgPT09ICdkJyApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ2UnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAneCcgKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gIXRoaXMuc3BlZWRDb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvd0tpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJkbSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgaWYgKCByZG0gPiAwLjYgfHwgIXRoaXMubG93a2lja2VkICkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmICggcmRtID4gMC4yICkge1xuICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvd2tpY2tlZCsrO1xuICAgIH1cblxuICAgIG9uSGlnaEtpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAxLjE7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhpZ2hraWNrZWQgJSAyID09PSAwICkge1xuICAgICAgICAgICAgdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5oaWdoa2lja2VkKys7XG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMywgOSwgMiksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDEsIDEzLCAyKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcblxuICAgICAgICAvLyBjb25zdCByZWFjdGlvbiA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnJlYWN0aW9ucyk7XG4gICAgICAgIC8vIHJlYWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25NaWRkbGVLaWNrICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01JRERMRUtJQ0snKTtcbiAgICB9XG5cbiAgICBvblRyZW1vbG8gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnVHJlbW9sb29vbycpO1xuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5FTkQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLm9uRW5kKCksIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCbGFja01vZGUgKCkge1xuICAgICAgICBjb25zdCBibGFja01vZGUgPSByYW5kb21Gcm9tQXJyYXkodGhpcy5ibGFja01vZGVzKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGJsYWNrTW9kZSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCBvcHRpb25zW2tleV0gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5oaWRlKCksIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnNob3coKSwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0uc2V0QmxhY2tNb2RlKCksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBibGFja01vZGVWZXJ0aWNhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlSG9yaXpvbnRhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsVG9wICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMSxcbiAgICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBibGFja01vZGVUdW5uZWxCb3R0b20gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUJvdHRvbSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlRnVsbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGUgKCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnNjYWxpbmdzKTtcblxuICAgICAgICBzY2FsZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlWCAoKSB7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgoMC41LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKiAwLjEpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuY29udGFpbmVyLnNjYWxlLCAwLjMsIHsgeDogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZVkgKCkge1xuICAgICAgICBjb25zdCB0byA9IE1hdGgubWF4KDAuNSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICogMC4xKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmNvbnRhaW5lci5zY2FsZSwgMC4zLCB7IHk6IHRvLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGVCb3RoICgpIHtcbiAgICAgICAgY29uc3QgdG8gPSBNYXRoLm1heCgwLjUsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSAqIDAuMSk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiB0bywgeTogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvblVJSGlkZGVuICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sncmlnaHQnXS5zaG93KCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5yZXNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgeTogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICBsYXN0WDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20sXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50aW1lID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMC4wO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkICogMC4xICogdGhpcy5kaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJvdGF0aW9uLnogKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkQ29udGFpbmVyICogMC4wMDU7XG5cbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWydib3R0b20nXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICAgICAgdGhpcy5mYWNlc1sndG9wJ10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzU3BhY2VEb3duICYmIHRoaXMuZmlyc3RTcGFjZVVwICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmZhY3RvciA9IC10aGlzLmZhY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZUhvbGQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IHByb2dyZXNzIH0gPSBkYXRhO1xuXG4gICAgICAgIGNvbnN0IHVQcm9ncmVzcyA9IG1hcChwcm9ncmVzcywgMCwgMSwgMCwgMS44KTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0ub25TcGFjZUhvbGQodVByb2dyZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIC8vIHRoaXMuc3BlZWQgPSAxMi4wO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMsIDEsIHsgc3BlZWQ6IDEyLCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2VzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIi8qKlxuICogTW91c2UgTWFuYWdlclxuICovXG5cbmNsYXNzIE1vdXNlTWFuYWdlciB7XG5cblxuICAgIHN0YXRpYyBzdGFydCggY2hlY2tNb3VzZVNwZWVkID0gZmFsc2UgKSB7XG5cbiAgICAgICAgLy8gc3BlZWRcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRZID0gMDtcblxuICAgICAgICB3aW5kb3cubW91c2VMYXN0WCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RZID0gMDtcblxuICAgICAgICAvLyBkaXJlY3Rpb25cbiAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAwO1xuXG4gICAgICAgIC8vIHBvc2l0aW9uXG4gICAgICAgIHdpbmRvdy5tb3VzZVggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VZID0gMDtcblxuICAgICAgICBpZihjaGVja01vdXNlU3BlZWQpIHdpbmRvdy5zZXRJbnRlcnZhbCggTW91c2VNYW5hZ2VyLmdldFNwZWVkLCAzMCApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBNb3VzZU1hbmFnZXIubW92ZSApO1xuICAgIH1cblxuICAgIHN0YXRpYyBtb3ZlKGUpIHtcblxuICAgICAgICB3aW5kb3cubW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICB3aW5kb3cubW91c2VZID0gZS5jbGllbnRZO1xuXG4gICAgICAgIE1vdXNlTWFuYWdlci5nZXREaXJlY3Rpb24oZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERpcmVjdGlvbihlKSB7XG5cbiAgICAgICAgLy8geFxuICAgICAgICBpZiAod2luZG93Lm1vdXNlWCA8IGUucGFnZVgpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm1vdXNlWCA+IGUucGFnZVgpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gLTE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAwO1xuXG4gICAgICAgIC8vIHlcbiAgICAgICAgaWYgKHdpbmRvdy5tb3VzZVkgPCBlLnBhZ2VZKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDE7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5tb3VzZVkgPiBlLnBhZ2VZKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IC0xO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3BlZWQoKSB7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWCA9IHdpbmRvdy5tb3VzZVggLSB3aW5kb3cubW91c2VMYXN0WDtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRZID0gd2luZG93Lm1vdXNlWSAtIHdpbmRvdy5tb3VzZUxhc3RZO1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RYID0gd2luZG93Lm1vdXNlWDtcbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFkgPSB3aW5kb3cubW91c2VZO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW91c2VNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vTW91c2VNYW5hZ2VyLmpzIiwiY29uc3QgY29uZmlnID0ge1xuICAgIHBhZHM6IFtcbiAgICAgICAgeyBpZDogMSwgbnVtYmVyOiA0NCB9LFxuICAgICAgICB7IGlkOiAyLCBudW1iZXI6IDQ1IH0sXG4gICAgICAgIHsgaWQ6IDMsIG51bWJlcjogNDYgfSxcbiAgICAgICAgeyBpZDogNCwgbnVtYmVyOiA0NyB9LFxuICAgICAgICB7IGlkOiA1LCBudW1iZXI6IDQ4IH0sXG4gICAgICAgIHsgaWQ6IDYsIG51bWJlcjogNDkgfSxcbiAgICAgICAgeyBpZDogNywgbnVtYmVyOiA1MCB9LFxuICAgICAgICB7IGlkOiA4LCBudW1iZXI6IDUxIH0sXG4gICAgXSxcbiAgICBrbm9iczogW1xuICAgICAgICB7IGlkOiAxLCBudW1iZXI6IDEgfSxcbiAgICAgICAgeyBpZDogMiwgbnVtYmVyOiAyIH0sXG4gICAgICAgIHsgaWQ6IDMsIG51bWJlcjogMyB9LFxuICAgICAgICB7IGlkOiA0LCBudW1iZXI6IDQgfSxcbiAgICAgICAgeyBpZDogNSwgbnVtYmVyOiA1IH0sXG4gICAgICAgIHsgaWQ6IDYsIG51bWJlcjogNiB9LFxuICAgICAgICB7IGlkOiA3LCBudW1iZXI6IDcgfSxcbiAgICAgICAgeyBpZDogOCwgbnVtYmVyOiA4IH0sXG4gICAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vY29uZmlnL01QS01pbmkuanMiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4uL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBLZXlib2FyZENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gOjp0aGlzLm9uS2V5UHJlc3M7XG4gICAgICAgIHRoaXMub25LZXlEb3duID0gOjp0aGlzLm9uS2V5RG93bjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICBvbktleVVwICggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELktFWVVQLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvbktleURvd24gKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZRE9XTiwgeyBrZXkgfSk7XG5cbiAgICAgICAgaWYgKCBrZXkgPT09ICcgJyApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB7IGtleSB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JhY2tncm91bmQnKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQm90dG9tIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdib3R0b20nKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoLTMsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzInO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICczJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzEnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQm90dG9tLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIExlZnQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2xlZnQnKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAyMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnNCc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzEnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMyc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvTGVmdC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBSaWdodCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAncmlnaHQnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0yMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MjogbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnNic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzEnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMyc7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgVG9wIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICd0b3AnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMjAsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc4JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMyc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICcxJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1RvcC5qcyIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnd2ViLWF1ZGlvLXBsYXllcic7XG5pbXBvcnQgY3JlYXRlQW5hbHlzZXIgZnJvbSAnd2ViLWF1ZGlvLWFuYWx5c2VyJztcbmltcG9ydCBhdmVyYWdlIGZyb20gJ2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlJztcbmltcG9ydCBSYW5nZSBmcm9tICcuL1JhbmdlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbi8vIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG5cbmNsYXNzIFNvdW5kTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYmFzcyA9IDA7XG4gICAgICAgIHRoaXMubWlkQmFzcyA9IDA7XG4gICAgICAgIHRoaXMudm9pY2UgPSAwO1xuICAgICAgICB0aGlzLmRydW0gPSAwO1xuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hc3NldHMgPSAnYXNzZXRzL3NvdW5kcyc7XG4gICAgICAgIHRoaXMuc291cmNlcyA9IHtcbiAgICAgICAgICAgIGludHJvOiAnaW50cm8ubXAzJyxcbiAgICAgICAgICAgIHhwOiAneHAubXAzJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gOjp0aGlzLnN0YXJ0O1xuICAgICAgICB0aGlzLm9uU3BhY2VIb2xkID0gOjp0aGlzLm9uU3BhY2VIb2xkO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25TcGFjZURvd24gPSA6OnRoaXMub25TcGFjZURvd247XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdEd1aSgpO1xuXG4gICAgICAgIGNvbnN0IGxvd0tpY2sgPSBuZXcgUmFuZ2UoJ2xvd0tpY2snLCBbMTEwLCAxMzBdLCA2MDAsIEV2ZW50cy5TT1VORFMuTE9XS0lDSyk7XG4gICAgICAgIGNvbnN0IG1pZGRsZUtpY2sgPSBuZXcgUmFuZ2UoJ21pZGRsZUtpY2snLCBbMjcwLCAyOTBdLCA2MDAsIEV2ZW50cy5TT1VORFMuTUlERExFS0lDSywgMC4zKTtcbiAgICAgICAgY29uc3QgdHJlbW9sbyA9IG5ldyBSYW5nZSgndHJlbW9sbycsIFs0ODAsIDUyMF0sIDEwMCwgRXZlbnRzLlNPVU5EUy5UUkVNT0xPKTtcbiAgICAgICAgY29uc3QgaGlnaEtpY2sgPSBuZXcgUmFuZ2UoJ2hpZ2hLaWNrJywgWzE1MDAsIDM1MDBdLCA4MDAsIEV2ZW50cy5TT1VORFMuSElHSEtJQ0ssIDAuNSk7XG5cbiAgICAgICAgdGhpcy5yYW5nZXMgPSBbbG93S2ljaywgaGlnaEtpY2ssIHRyZW1vbG8sIG1pZGRsZUtpY2tdO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5TVEFSVCwgdGhpcy5zdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgdGhpcy5vblNwYWNlSG9sZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgaW5pdEd1aSAoKSB7XG4gICAgICAgIHRoaXMuc291bmRHdWkgPSB3aW5kb3cuZ3VpLmFkZEZvbGRlcignU291bmQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXVzZSA9IHRoaXMuc291bmRHdWkuYWRkKHRoaXMsICdwYXVzZScpO1xuICAgICAgICBwYXVzZS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZSkgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0U291bmQgKCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZXMpLm1hcCggKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhdWRpbzogbnVsbCxcbiAgICAgICAgICAgICAgICBhbmFseXNlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBub2RlOiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSA9IDA7XG4gICAgICAgICAgICBhdWRpby5jcm9zc09yaWdpbiA9ICdBbm9ueW1vdXMnO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQgPyBuZXcgQXVkaW9Db250ZXh0KCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuYWx5c2VyID0gY3JlYXRlQW5hbHlzZXIoYXVkaW8sIGF1ZGlvQ29udGV4dCwgeyBhdWRpYmxlOiB0cnVlLCBzdGVyZW86IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmFuYWx5c2VyID0gYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubm9kZSA9IGFuYWx5c2VyLmFuYWx5c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5DQU5QTEFZLCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5TT1VORFMuRU5ELCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gYCR7dGhpcy5hc3NldHN9LyR7dGhpcy5zb3VyY2VzW2tleV19YDtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYXVkaW8gPSBhdWRpbztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgaWYgKCBwbGF5ZXIubG9hZGVkICkge1xuICAgICAgICAgICAgcGxheWVyLmF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXJzWyd4cCddLmxvYWRlZCApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYW5hbHlzZXIsIG5vZGUgfSA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICAgICAgY29uc3QgZnJlcXMgPSBhbmFseXNlci5mcmVxdWVuY2llcygpO1xuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnJhbmdlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gYXZlcmFnZShub2RlLCBmcmVxcywgcmFuZ2UuZnJlcXNbMF0sIHJhbmdlLmZyZXFzWzFdKTtcblxuICAgICAgICAgICAgICAgIHJhbmdlLnVwZGF0ZShsZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgdm9sdW1lIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCB7IGF1ZGlvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG5cbiAgICAgICAgYXVkaW8udm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odm9sdW1lICogMC41LCAxKSk7XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiBpbnRybyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiB4cCB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgIHhwLnZvbHVtZSA9IDE7XG4gICAgICAgIHhwLnBsYXkoKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bC50byhpbnRybywgMC41LCB7IHZvbHVtZTogMCwgZWFzZTogRXhwby5lYXNlT3V0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBpbnRyby5wYXVzZSgpO1xuICAgICAgICB9fSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1NvdW5kTWFuYWdlci5qcyIsInZhciBxdWV1ZSA9IHt9O1xuXG4vKlxuKiogYWxsb3cgYW55IG51bWJlciB2YXJpYWJsZSB0byBiZSBzbW9vdGhlZFxuKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBhIHVuaXF1ZSBuYW1lIGZvciB5b3VyIHNtb290aGluZ1xuKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB0aGUgdmFsdWUgeW91IHdhbnQgdG8gYmUgc21vb3RoZWRcbiogQHBhcmFtIHtudW1iZXJ9IGNvZWZmIChvcHRpb25hbCkgLSB0aGUgc21vb3RoaW5nIGNvZWZmaWNpZW50LCB0aGUgc21hbGxlciwgdGhlIHNsb3dlci4gRGVmYXVsdDogMC4xXG4qIEBwYXJhbSB7Ym9vbGVhbn0gbG9nIChvcHRpb25hbCkgLSBlaXRoZXIgdGhlIHNtb290aGVkIHZhbHVlIGlzIGxvZyBpbiB0aGUgY29uc29sZS4gRGVmYXVsdDogZmFsc2VcbiogQHBhcmFtIHtudW1iZXJ9IGluaXQgKG9wdGlvbmFsKSAtIHRoZSBzdGFydGluZyB2YWx1ZSBvZiB0aGUgc21vb3RoaW5nLiBEZWZhdWx0OiAwXG4qIEByZXR1cm4ge251bWJlcn0gdGhlIHNtb290aGVkIHZhbHVlXG4qKi9cblxuZnVuY3Rpb24gc21vb3RoICggaWQsIHZhbHVlLCBjb2VmZiA9IDAuMSwgbG9nID0gZmFsc2UsIGluaXQgPSAwICkge1xuXHRpZiAoIHF1ZXVlW2lkXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdHF1ZXVlW2lkXSArPSAoIHZhbHVlIC0gcXVldWVbaWRdICkgKiBjb2VmZjtcblxuXHRcdGlmICggbG9nICkge1xuXHRcdFx0Y29uc29sZS5sb2coYCVjU21vb3RoICR7aWR9IDo6ICR7cXVldWVbaWRdfWAsICdjb2xvcjogYmx1ZTsnKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkID09PSAnJyApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU21vb3RoIDo6IGlkIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0XHR9XG5cblx0XHRxdWV1ZVtpZF0gPSBpbml0O1xuXHR9XG5cblx0cmV0dXJuIHF1ZXVlW2lkXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNtb290aDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3Ntb290aC5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBVSSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLWludHJvJyk7XG4gICAgICAgIHRoaXMuJGxvZ28gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fbG9nbycpO1xuICAgICAgICB0aGlzLiRhY3Rpb24gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYWN0aW9uJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbkxhYmVsID0gdGhpcy4kYWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25fX2xhYmVsJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbkZpbGwgPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25fX2ZpbGwnKTtcbiAgICAgICAgdGhpcy4kdHV0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0tdHV0bycpO1xuICAgICAgICB0aGlzLiRjcmVkaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS1jcmVkaXRzJyk7XG4gICAgICAgIHRoaXMuJGNyZWRpdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWRpdHNfX2l0ZW0nKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NGaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19wcm9ncmVzc19fZmlsbCcpO1xuICAgICAgICB0aGlzLiRoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19oZWxwJyk7XG4gICAgICAgIHRoaXMuJGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX2JhY2tncm91bmQnKTtcblxuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubWF4VGltZSA9IDMwMDA7XG4gICAgICAgIHRoaXMuaGVscElzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1pbkZpbGwgPSAwLjAxO1xuICAgICAgICB0aGlzLm1heEZpbGwgPSAxO1xuICAgICAgICB0aGlzLmZpbGwgPSB0aGlzLm1pbkZpbGw7XG5cbiAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSA1O1xuXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IDo6dGhpcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6IHRoaXMub25Db21wbGV0ZSB9KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uLCB7IHZvbHVtZTogMSwgZWFzZTogTGluZWFyLmVhc2VOb25lICB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRwcm9ncmVzc0ZpbGwsIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgxKWAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGFjdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kbG9nbywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IHByb2dyZXNzOiAxLCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjQpO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHR1dG8sIHRoaXMuZHVyYXRpb24gKiAwLjc1LCB7IGNzczogeyBzY2FsZTogMS41IH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjc1KTtcbiAgICAgICAgdGhpcy50bC5zZXQodGhpcywgeyBwcm9ncmVzczogMCB9KTtcbiAgICAgICAgLy8gdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBwcm9ncmVzczogMC40NCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjk4KTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uRW5kWFAgPSA6OnRoaXMub25FbmRYUDtcbiAgICAgICAgdGhpcy5vbkNsaWNrSGVscCA9IDo6dGhpcy5vbkNsaWNrSGVscDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB0aGlzLm9uS2V5RG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVVQLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQLCB0aGlzLm9uU3BhY2VVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLkVORCwgdGhpcy5vbkVuZFhQKTtcblxuICAgICAgICB0aGlzLnRsSGVscFNob3cgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscElzT3BlbiA9IHRydWU7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGhpcy50bEhlbHBTaG93LnRvKHRoaXMuJHR1dG8sIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0aGlzLnRsSGVscFNob3cudG8odGhpcy4kYmFja2dyb3VuZCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICB0aGlzLnRsSGVscEhpZGUgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscElzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9fSk7XG4gICAgICAgIHRoaXMudGxIZWxwSGlkZS50byh0aGlzLiR0dXRvLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0aGlzLnRsSGVscEhpZGUudG8odGhpcy4kYmFja2dyb3VuZCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICB0aGlzLiRoZWxwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrSGVscCk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgeyBwcm9ncmVzczogdGhpcy5wcm9ncmVzcywgdm9sdW1lOiB0aGlzLnZvbHVtZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXkgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy4kd3JhcHBlciwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMuJHdyYXBwZXIsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duICggZGF0YSApIHtcblxuICAgIH1cblxuICAgIG9uS2V5VXAgKCBkYXRhICkge1xuXG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgJiYgdGhpcy5pc0Rvd24gJiYgIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50bC50aW1lU2NhbGUoNCk7XG4gICAgICAgICAgICB0aGlzLnRsLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgJiYgIXRoaXMuaXNEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50bC50aW1lU2NhbGUoMSk7XG4gICAgICAgICAgICB0aGlzLnRsLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUgKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzQ29tcGxldGVkICkge1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMsIHsgcHJvZ3Jlc3M6IDAgfSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kY3JlZGl0SXRlbXMsIHsgY3NzOiB7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX0pO1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJGNyZWRpdHMsIHsgY3NzOiB7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19KTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRwcm9ncmVzc0ZpbGwsIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgwKWB9fSk7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRoZWxwLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuXG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuU1RBUlQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUNyZWRpdHMgKCkge1xuICAgICAgICB0aGlzLiRjcmVkaXRzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIHRoaXMuJGFjdGlvbkxhYmVsLmlubmVySFRNTCA9ICdIb2xkIHNwYWNlYmFyIHRvIHJlc3RhcnQnO1xuXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50bC5raWxsKCk7XG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6IHRoaXMub25Db21wbGV0ZSB9KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uLCB7IHZvbHVtZTogMSwgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRwcm9ncmVzc0ZpbGwsIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgxKWAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGNyZWRpdHMsIHRoaXMuZHVyYXRpb24sIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjUsIHsgcHJvZ3Jlc3M6IDEsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjUpO1xuXG4gICAgICAgIGlmICggdGhpcy5oZWxwSXNPcGVuICkge1xuICAgICAgICAgICAgdGhpcy50bEhlbHBIaWRlLnJlc3RhcnQoKTsgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMjtcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuc3RhZ2dlckZyb21UbyhBcnJheS5mcm9tKHRoaXMuJGNyZWRpdEl0ZW1zKSwgZHVyYXRpb24sIHsgY3NzOiB7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX0sIHsgY3NzOiB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIGR1cmF0aW9uICogMC4wNSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMuJGhlbHAsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMuJGFjdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnJlc2V0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMudm9sdW1lID0gMDtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMjtcbiAgICB9XG5cbiAgICBvbkVuZFhQICgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q3JlZGl0cygpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tIZWxwICggZXZlbnQgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICF0aGlzLmhlbHBJc09wZW4gKSB7XG4gICAgICAgICAgICB0aGlzLiRoZWxwLmlubmVySFRNTCA9ICdYJztcblxuICAgICAgICAgICAgdGhpcy50bEhlbHBTaG93LnJlc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGhlbHAuaW5uZXJIVE1MID0gJz8nO1xuXG4gICAgICAgICAgICB0aGlzLnRsSGVscEhpZGUucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdWkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZ3MpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnc3RyaW5nJykgc3RyaW5ncyA9IFtzdHJpbmdzXVxuICB2YXIgZXhwcnMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKVxuICB2YXIgcGFydHMgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoLTE7IGkrKykge1xuICAgIHBhcnRzLnB1c2goc3RyaW5nc1tpXSwgZXhwcnNbaV0gfHwgJycpXG4gIH1cbiAgcGFydHMucHVzaChzdHJpbmdzW2ldKVxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbHNsaWZ5L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZlxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JhZi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiggVEhSRUUgKSB7XG5cdC8qKlxuXHQgKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuXHQgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG5cdCAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG5cdCAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuXHQgKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG5cdCAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5cdGZ1bmN0aW9uIE9yYml0Q29udHJvbHMoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0XHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0XHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHRcdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5ab29tID0gMDtcblx0XHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0XHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0XHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0XHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0XHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHRcdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0XHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdFx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdFx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdFx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0XHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdFx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHRcdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0XHQvLyBNb3VzZSBidXR0b25zXG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHRcdC8vIGZvciByZXNldFxuXHRcdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdFx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHRcdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdFx0Ly9cblx0XHQvLyBwdWJsaWMgbWV0aG9kc1xuXHRcdC8vXG5cblx0XHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fTtcblxuXHRcdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0XHR9O1xuXG5cdFx0Ly9cblx0XHQvLyBpbnRlcm5hbHNcblx0XHQvL1xuXG5cdFx0dmFyIHNjb3BlID0gdGhpcztcblxuXHRcdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0XHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHRcdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHRcdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHRcdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0XHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHRcdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdFx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdFx0dmFyIHNjYWxlID0gMTtcblx0XHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdFx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR9XG5cblx0XHQvL1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHR9O1xuXG5cdE9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuXHRPcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9yYml0Q29udHJvbHM7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0XHRjZW50ZXI6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdG5vWm9vbToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1JvdGF0ZToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1Bhbjoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub0tleXM6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSApO1xuXG5cdHJldHVybiBPcmJpdENvbnRyb2xzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aHJlZS1vcmJpdC1jb250cm9scy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZXF1ZW5jeVRvSW5kZXggPSByZXF1aXJlKCdhdWRpby1mcmVxdWVuY3ktdG8taW5kZXgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDI1NSlcbm1vZHVsZS5leHBvcnRzLmZsb2F0RGF0YSA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDEpXG5cbmZ1bmN0aW9uIGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZSAoZGl2LCBhbmFseXNlciwgZnJlcXVlbmNpZXMsIG1pbkh6LCBtYXhIeikge1xuICB2YXIgc2FtcGxlUmF0ZSA9IGFuYWx5c2VyLmNvbnRleHQuc2FtcGxlUmF0ZVxuICB2YXIgYmluQ291bnQgPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudFxuICB2YXIgc3RhcnQgPSBmcmVxdWVuY3lUb0luZGV4KG1pbkh6LCBzYW1wbGVSYXRlLCBiaW5Db3VudClcbiAgdmFyIGVuZCA9IGZyZXF1ZW5jeVRvSW5kZXgobWF4SHosIHNhbXBsZVJhdGUsIGJpbkNvdW50KVxuICB2YXIgY291bnQgPSBlbmQgLSBzdGFydFxuICB2YXIgc3VtID0gMFxuICBmb3IgKDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcbiAgICBzdW0gKz0gZnJlcXVlbmNpZXNbc3RhcnRdIC8gZGl2XG4gIH1cbiAgcmV0dXJuIGNvdW50ID09PSAwID8gMCA6IChzdW0gLyBjb3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmFseXNlci1mcmVxdWVuY3ktYXZlcmFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZXF1ZW5jeVRvSW5kZXhcbmZ1bmN0aW9uIGZyZXF1ZW5jeVRvSW5kZXggKGZyZXF1ZW5jeSwgc2FtcGxlUmF0ZSwgZnJlcXVlbmN5QmluQ291bnQpIHtcbiAgdmFyIG55cXVpc3QgPSBzYW1wbGVSYXRlIC8gMlxuICB2YXIgaW5kZXggPSBNYXRoLnJvdW5kKGZyZXF1ZW5jeSAvIG55cXVpc3QgKiBmcmVxdWVuY3lCaW5Db3VudClcbiAgcmV0dXJuIGNsYW1wKGluZGV4LCAwLCBmcmVxdWVuY3lCaW5Db3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vZmFjZXMvQmFja2dyb3VuZCc7XG5pbXBvcnQgVG9wIGZyb20gJy4vZmFjZXMvVG9wJztcbmltcG9ydCBMZWZ0IGZyb20gJy4vZmFjZXMvTGVmdCc7XG5pbXBvcnQgUmlnaHQgZnJvbSAnLi9mYWNlcy9SaWdodCc7XG5pbXBvcnQgQm90dG9tIGZyb20gJy4vZmFjZXMvQm90dG9tJztcblxuaW1wb3J0IHNtb290aCBmcm9tICcuL3Ntb290aCc7XG5pbXBvcnQgRmFjZXNDb250cm9sbGVyIGZyb20gJy4vRmFjZXNDb250cm9sbGVyJztcbmltcG9ydCBNb3VzZU1hbmFnZXIgZnJvbSAnLi9Nb3VzZU1hbmFnZXInO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xuaW1wb3J0IE1QS01pbmkgZnJvbSAnLi9jb25maWcvTVBLTWluaSc7XG5pbXBvcnQgTWlkaUNvbnRyb2xsZXIgZnJvbSAnLi91dGlscy9NaWRpQ29udHJvbGxlcic7XG5cbmNvbnN0IGdsc2xpZnkgPSByZXF1aXJlKCdnbHNsaWZ5Jyk7XG5cbmNsYXNzIEFwcCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gMHgwMDAwMDA7XG5cdFx0XG4gICAgICAgIE1vdXNlTWFuYWdlci5zdGFydCgpO1xuICAgICAgICBNaWRpQ29udHJvbGxlci5zdGFydChNUEtNaW5pKTtcblxuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlciA9IG5ldyBGYWNlc0NvbnRyb2xsZXIoKTtcblxuICAgICAgICB0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcblx0XHRcdFxuXHRcdHRoaXMucmVzaXplID0gOjp0aGlzLnJlc2l6ZTtcblx0XHR0aGlzLnVwZGF0ZSA9IDo6dGhpcy51cGRhdGU7XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMucmVzZXQgPSA6OnRoaXMucmVzZXQ7XG5cdFx0XG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5iaW5kTGlzdGVuZXJzKCk7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcywgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogZmFsc2UgfSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gZmFsc2U7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cdFx0XG5cdFx0V0FHTkVSLnZlcnRleFNoYWRlcnNQYXRoID0gJ2pzL3ZlcnRleC1zaGFkZXJzJztcblx0XHRXQUdORVIuZnJhZ21lbnRTaGFkZXJzUGF0aCA9ICdqcy9mcmFnbWVudC1zaGFkZXJzJztcblxuXHRcdHRoaXMuY29tcG9zZXIgPSBuZXcgV0FHTkVSLkNvbXBvc2VyKHRoaXMucmVuZGVyZXIpO1xuXHRcdHRoaXMuY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuXHRcdGNvbnN0IGJsb29tV2lkdGggPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcbiAgICAgICAgY29uc3QgYmxvb21IZWlnaHQgPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcblxuXHRcdHRoaXMuYmxvb21QYXNzID0gbmV3IFdBR05FUi5NdWx0aVBhc3NCbG9vbVBhc3MoYmxvb21XaWR0aCwgYmxvb21IZWlnaHQpO1xuXHRcdHRoaXMuYmxvb21QYXNzLnBhcmFtcy5zdHJlbmd0aCA9IDUwLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5ibHVyQW1vdW50ID0gNS47XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5hcHBseVpvb21CbHVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLnpvb21CbHVyU3RyZW5ndGggPSAzLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy56b29tQmx1ckNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjUsIDAuNSApO1xuXG4gICAgICAgIHRoaXMucmdiUGFzcyA9IG5ldyBXQUdORVIuUkdCU3BsaXRQYXNzKCk7XG4gICAgICAgIHRoaXMucmdiUGFzcy5wYXJhbXMuZGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigyMCwgMjApO1xuXG4gICAgICAgIHRoaXMubm9pc2VQYXNzID0gbmV3IFdBR05FUi5Ob2lzZVBhc3MoKTtcbiAgICAgICAgdGhpcy5ub2lzZVBhc3MucGFyYW1zLmFtb3VudCA9IDAuMjU7XG4gICAgICAgIHRoaXMubm9pc2VQYXNzLnBhcmFtcy5zcGVlZCA9IDAuMjtcblxuICAgICAgICB0aGlzLnZpZ25ldHRlUGFzcyA9IG5ldyBXQUdORVIuVmlnbmV0dGVQYXNzKCk7XG4gICAgICAgIHRoaXMudmlnbmV0dGVQYXNzLnBhcmFtcy5hbW91bnQgPSAwLjc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZ4YWFQYXNzID0gbmV3IFdBR05FUi5GWEFBUGFzcygpO1xuXG5cdFx0dGhpcy53aWR0aCA9IHdpbmRvdy53aWR0aCA9IDYwO1xuXHRcdHRoaXMuaGVpZ2h0ID0gd2luZG93LmhlaWdodCA9IDYwO1xuXHRcdHRoaXMubGVuZ3RoID0gd2luZG93Lmxlbmd0aCA9IDYwMDtcblxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwMDAwMCwgMC44LCB0aGlzLmxlbmd0aCAqIC45OCApO1xuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAwO1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcblxuXG4gICAgICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5hZGRMaWdodHMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgXHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0YmluZExpc3RlbmVycyAoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uVUlIaWRkZW4pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5FTkQsIHRoaXMucmVzZXQpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuU1RBUlQpO1xuXHR9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHdpbmRvdy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuc291bmRFbmRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25VSUhpZGRlbiAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cdGFkZENvbnRyb2xzICgpIHtcblx0XHRjb25zdCBPcmJpdENvbnRyb2xzID0gcmVxdWlyZSgndGhyZWUtb3JiaXQtY29udHJvbHMnKShUSFJFRSk7XG5cdFx0Ly8gdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0fVxuXG5cdGFkZExpZ2h0cyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyBsaWdodHMnKTtcblx0XHQvLyB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweEZGRkZGRik7XG5cdFx0Ly8gdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgXHRcdC8vIGNvbnN0IHBvaW50TGlnaHQzID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4ZmZmZmZmLCA3LjEsIDApO1xuICBcdFx0Ly8gcG9pbnRMaWdodDMucG9zaXRpb24ueCA9IDBcbiAgXHRcdC8vIHBvaW50TGlnaHQzLnBvc2l0aW9uLnkgPSA0O1xuICBcdFx0Ly8gcG9pbnRMaWdodDMucG9zaXRpb24ueiA9IDYwO1xuXG4gIFx0XHQvLyB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0Myk7XG5cdH1cblxuXHRhZGRFbGVtZW50cyAoKSB7XG5cdFx0dGhpcy5kaXZpc2F0b3IgPSAyO1xuXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLmxlbmd0aCwgdGhpcy53aWR0aCwgMzIsIDMyKTtcbiAgICAgICAgdGhpcy5vdGhlckdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5sZW5ndGgsIDMyLCAzMik7XG5cblx0XHR0aGlzLmxlZnRSaWdodEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy5sZW5ndGgsIHRoaXMuaGVpZ2h0LCBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gdGhpcy5kaXZpc2F0b3IpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gdGhpcy5kaXZpc2F0b3IpICk7XG5cdFx0dGhpcy50b3BCb3R0b21HZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMubGVuZ3RoLCBNYXRoLmZsb29yKHRoaXMud2lkdGggLyB0aGlzLmRpdmlzYXRvcikgLCBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gdGhpcy5kaXZpc2F0b3IpKTtcblx0XHR0aGlzLmJhY2tncm91bmRHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBNYXRoLmZsb29yKHRoaXMud2lkdGggLyB0aGlzLmRpdmlzYXRvciAqIDIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gdGhpcy5kaXZpc2F0b3IgKiAyKSApO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbmV3IExlZnQodGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMubGVmdC5yb3RhdGlvbi55ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLmxlZnQucG9zaXRpb24ueCA9IC10aGlzLndpZHRoICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignbGVmdCcsIHRoaXMubGVmdClcblxuXHRcdHRoaXMucmlnaHQgPSBuZXcgUmlnaHQodGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMucmlnaHQucm90YXRpb24ueSA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5yaWdodC5wb3NpdGlvbi54ID0gdGhpcy53aWR0aCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ3JpZ2h0JywgdGhpcy5yaWdodClcblxuXHRcdHRoaXMuYm90dG9tID0gbmV3IEJvdHRvbSh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5ib3R0b20ucm90YXRpb24ueCA9IC1NYXRoLlBJICogMC41O1xuICAgICAgICB0aGlzLmJvdHRvbS5yb3RhdGlvbi56ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLmJvdHRvbS5wb3NpdGlvbi55ID0gLXRoaXMuaGVpZ2h0ICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignYm90dG9tJywgdGhpcy5ib3R0b20pXG5cblx0XHR0aGlzLnRvcCA9IG5ldyBUb3AodGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMudG9wLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgdGhpcy50b3Aucm90YXRpb24ueiA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy50b3AucG9zaXRpb24ueSA9IHRoaXMuaGVpZ2h0ICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcigndG9wJywgdGhpcy50b3ApO1xuICAgICAgICBjb25zb2xlLmxvZygpO1xuXG5cdFx0Ly8gdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQodGhpcy5iYWNrZ3JvdW5kR2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHQvLyB0aGlzLmJhY2tncm91bmQucG9zaXRpb24ueiA9IC10aGlzLmxlbmd0aCAqIDAuNTtcbiAgLy8gICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2JhY2tncm91bmQnLCB0aGlzLmJhY2tncm91bmQpO1xuXG5cdFx0dGhpcy5mYWNlc0NvbnRyb2xsZXIuY29udGFpbmVyLnBvc2l0aW9uLnogPSAtdGhpcy5sZW5ndGggKiAwLjU7XG5cblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmZhY2VzQ29udHJvbGxlci5jb250YWluZXIpO1xuXHR9XG5cbiAgICByb3RhdGUgKCkge1xuICAgICAgICBjb25zdCBzZW5zID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMTtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBNYXRoLnJhbmRvbSgpICogMyArIDE7XG4gICAgfVxuXG5cdHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5jb21wb3Nlci5yZXNldCgpO1xuXHRcdHRoaXMuY29tcG9zZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMuYmxvb21QYXNzKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMucmdiUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLm5vaXNlUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLnZpZ25ldHRlUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIudG9TY3JlZW4odGhpcy5meGFhUGFzcyk7XG5cblx0XHQvLyB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG5cblx0XHRyYWYodGhpcy51cGRhdGUpO1xuXHR9XG5cblx0cmVzaXplICgpIHtcblx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblx0fVxuXG59XG5cbm5ldyBBcHAoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL01haW4uanMiLCJpbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIFJhbmdlIHtcblxuICAgIGNvbnN0cnVjdG9yICggbmFtZSwgZnJlcXMsIGRlbHRhLCBldmVudCwgbWluTGV2ZWwgPSAwLjUgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZnJlcXMgPSBmcmVxcztcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLm1pbkxldmVsID0gbWluTGV2ZWw7XG5cbiAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCBsZXZlbCApIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lO1xuXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcblxuICAgICAgICBpZiAoIGRlbHRhID4gdGhpcy5kZWx0YSAmJiB0aGlzLmxldmVsID4gdGhpcy5taW5MZXZlbCApIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdCh0aGlzLmV2ZW50KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCB0aGlzLm5hbWUgPT09ICdoaWdoS2ljaycgKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxldmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1JhbmdlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICBsZXQgdGltZW91dFxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKSwgd2FpdClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvZGVib3VuY2UuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsdWNreSAoIGNoYW5jZXMgKSB7XG4gICAgcmV0dXJuICF+fihNYXRoLnJhbmRvbSgpICogY2hhbmNlcyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9sdWNreS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt+fihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdWRpby9taWRpXCI6IFtcblx0XHRcIm1pZFwiLFxuXHRcdFwibWlkaVwiLFxuXHRcdFwia2FyXCIsXG5cdFx0XCJybWlcIlxuXHRdLFxuXHRcImF1ZGlvL21wNFwiOiBbXG5cdFx0XCJtcDRhXCIsXG5cdFx0XCJtNGFcIlxuXHRdLFxuXHRcImF1ZGlvL21wZWdcIjogW1xuXHRcdFwibXBnYVwiLFxuXHRcdFwibXAyXCIsXG5cdFx0XCJtcDJhXCIsXG5cdFx0XCJtcDNcIixcblx0XHRcIm0yYVwiLFxuXHRcdFwibTNhXCJcblx0XSxcblx0XCJhdWRpby9vZ2dcIjogW1xuXHRcdFwib2dhXCIsXG5cdFx0XCJvZ2dcIixcblx0XHRcInNweFwiXG5cdF0sXG5cdFwiYXVkaW8vd2VibVwiOiBbXG5cdFx0XCJ3ZWJhXCJcblx0XSxcblx0XCJhdWRpby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rYVwiXG5cdF0sXG5cdFwiYXVkaW8veC1tcGVndXJsXCI6IFtcblx0XHRcIm0zdVwiXG5cdF0sXG5cdFwiYXVkaW8vd2F2XCI6IFtcblx0XHRcIndhdlwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcFwiOiBbXG5cdFx0XCIzZ3BcIlxuXHRdLFxuXHRcInZpZGVvLzNncHAyXCI6IFtcblx0XHRcIjNnMlwiXG5cdF0sXG5cdFwidmlkZW8vbXA0XCI6IFtcblx0XHRcIm1wNFwiLFxuXHRcdFwibXA0dlwiLFxuXHRcdFwibXBnNFwiXG5cdF0sXG5cdFwidmlkZW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGVnXCIsXG5cdFx0XCJtcGdcIixcblx0XHRcIm1wZVwiLFxuXHRcdFwibTF2XCIsXG5cdFx0XCJtMnZcIlxuXHRdLFxuXHRcInZpZGVvL29nZ1wiOiBbXG5cdFx0XCJvZ3ZcIlxuXHRdLFxuXHRcInZpZGVvL3F1aWNrdGltZVwiOiBbXG5cdFx0XCJxdFwiLFxuXHRcdFwibW92XCJcblx0XSxcblx0XCJ2aWRlby93ZWJtXCI6IFtcblx0XHRcIndlYm1cIlxuXHRdLFxuXHRcInZpZGVvL3gtZjR2XCI6IFtcblx0XHRcImY0dlwiXG5cdF0sXG5cdFwidmlkZW8veC1mbGlcIjogW1xuXHRcdFwiZmxpXCJcblx0XSxcblx0XCJ2aWRlby94LWZsdlwiOiBbXG5cdFx0XCJmbHZcIlxuXHRdLFxuXHRcInZpZGVvL3gtbTR2XCI6IFtcblx0XHRcIm00dlwiXG5cdF0sXG5cdFwidmlkZW8veC1tYXRyb3NrYVwiOiBbXG5cdFx0XCJta3ZcIixcblx0XHRcIm1rM2RcIixcblx0XHRcIm1rc1wiXG5cdF1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL21pbWUtdHlwZXMuanNvblxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFtcFxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA8IG1heFxuICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhbXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Zvci1lYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzTm9kZVxuXG5mdW5jdGlvbiBpc05vZGUgKHZhbCkge1xuICByZXR1cm4gKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpXG4gICAgPyBmYWxzZVxuICAgIDogKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ29iamVjdCcpXG4gICAgICA/ICh2YWwgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZSlcbiAgICAgIDogKHR5cGVvZiB2YWwubm9kZVR5cGUgPT09ICdudW1iZXInKSAmJlxuICAgICAgICAodHlwZW9mIHZhbC5ub2RlTmFtZSA9PT0gJ3N0cmluZycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZG9tL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG4gICwgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJylcbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3JFYWNoKFxuICAgICAgdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcbiAgICAsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICAgICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICAgICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICAgICAgfVxuICAgICAgfVxuICApXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID1cbiAgZ2xvYmFsLnBlcmZvcm1hbmNlICYmXG4gIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPyBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpXG4gIH0gOiBEYXRlLm5vdyB8fCBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuICtuZXcgRGF0ZVxuICB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmlnaHQtbm93L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RvbSA9IHJlcXVpcmUoJ2lzLWRvbScpXG52YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cy52aWRlbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICd2aWRlbycpXG5tb2R1bGUuZXhwb3J0cy5hdWRpbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICdhdWRpbycpXG5cbmZ1bmN0aW9uIHNpbXBsZU1lZGlhRWxlbWVudCAoZWxlbWVudE5hbWUsIHNvdXJjZXMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICBzb3VyY2VzID0gWyBzb3VyY2VzIF1cbiAgfVxuXG4gIHZhciBtZWRpYSA9IG9wdC5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpXG5cbiAgaWYgKG9wdC5sb29wKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2xvb3AnLCAnbG9vcCcpXG4gIGlmIChvcHQubXV0ZWQpIG1lZGlhLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnbXV0ZWQnKVxuICBpZiAob3B0LmF1dG9wbGF5KSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ2F1dG9wbGF5JylcbiAgaWYgKG9wdC5jb250cm9scykgbWVkaWEuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpXG4gIGlmIChvcHQuY3Jvc3NPcmlnaW4pIG1lZGlhLnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCBvcHQuY3Jvc3NPcmlnaW4pXG4gIGlmIChvcHQucHJlbG9hZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgb3B0LnByZWxvYWQpXG4gIGlmIChvcHQucG9zdGVyKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIG9wdC5wb3N0ZXIpXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcpIG1lZGlhLnNldEF0dHJpYnV0ZSgndm9sdW1lJywgb3B0LnZvbHVtZSlcblxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBtZWRpYS5hcHBlbmRDaGlsZChjcmVhdGVTb3VyY2VFbGVtZW50KHNvdXJjZSkpXG4gIH0pXG5cbiAgcmV0dXJuIG1lZGlhXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUVsZW1lbnQgKGRhdGEpIHtcbiAgaWYgKGlzRG9tKGRhdGEpKSByZXR1cm4gZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YSA9IHsgc3JjOiBkYXRhIH1cbiAgICBpZiAoZGF0YS5zcmMpIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb24oZGF0YS5zcmMpXG4gICAgICBpZiAoZXh0KSBkYXRhLnR5cGUgPSBsb29rdXAoZXh0KVxuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKVxuICBpZiAoZGF0YS5zcmMpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEuc3JjKVxuICBpZiAoZGF0YS50eXBlKSBzb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKVxuICByZXR1cm4gc291cmNlXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRhdGEuc3Vic3RyaW5nKGV4dElkeCArIDEpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cmltL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW9BbmFseXNlclxuXG5mdW5jdGlvbiBXZWJBdWRpb0FuYWx5c2VyKGF1ZGlvLCBjdHgsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFdlYkF1ZGlvQW5hbHlzZXIpKSByZXR1cm4gbmV3IFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cylcbiAgaWYgKCEoY3R4IGluc3RhbmNlb2YgQXVkaW9Db250ZXh0KSkgKG9wdHMgPSBjdHgpLCAoY3R4ID0gbnVsbClcblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICB0aGlzLmN0eCA9IGN0eCA9IGN0eCB8fCBuZXcgQXVkaW9Db250ZXh0XG5cbiAgaWYgKCEoYXVkaW8gaW5zdGFuY2VvZiBBdWRpb05vZGUpKSB7XG4gICAgYXVkaW8gPSAoYXVkaW8gaW5zdGFuY2VvZiBBdWRpbyB8fCBhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpXG4gICAgICA/IGN0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pXG4gICAgICA6IGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShhdWRpbylcbiAgfVxuXG4gIHRoaXMuYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKVxuICB0aGlzLnN0ZXJlbyAgID0gISFvcHRzLnN0ZXJlb1xuICB0aGlzLmF1ZGlibGUgID0gb3B0cy5hdWRpYmxlICE9PSBmYWxzZVxuICB0aGlzLndhdmVkYXRhID0gbnVsbFxuICB0aGlzLmZyZXFkYXRhID0gbnVsbFxuICB0aGlzLnNwbGl0dGVyID0gbnVsbFxuICB0aGlzLm1lcmdlciAgID0gbnVsbFxuICB0aGlzLnNvdXJjZSAgID0gYXVkaW9cblxuICBpZiAoIXRoaXMuc3RlcmVvKSB7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNvdXJjZVxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5hbmFseXNlcilcbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5hbmFseXNlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFuYWx5c2VyID0gW3RoaXMuYW5hbHlzZXJdXG4gICAgdGhpcy5hbmFseXNlci5wdXNoKGN0eC5jcmVhdGVBbmFseXNlcigpKVxuXG4gICAgdGhpcy5zcGxpdHRlciA9IGN0eC5jcmVhdGVDaGFubmVsU3BsaXR0ZXIoMilcbiAgICB0aGlzLm1lcmdlciAgID0gY3R4LmNyZWF0ZUNoYW5uZWxNZXJnZXIoMilcbiAgICB0aGlzLm91dHB1dCAgID0gdGhpcy5tZXJnZXJcblxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5zcGxpdHRlcilcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNwbGl0dGVyLmNvbm5lY3QodGhpcy5hbmFseXNlcltpXSwgaSwgMClcbiAgICAgIHRoaXMuYW5hbHlzZXJbaV0uY29ubmVjdCh0aGlzLm1lcmdlciwgMCwgaSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5tZXJnZXIuY29ubmVjdChjdHguZGVzdGluYXRpb24pXG4gIH1cbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUud2F2ZWZvcm0gPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMud2F2ZWRhdGEgfHwgKFxuICAgIHRoaXMud2F2ZWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEob3V0cHV0KVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUuZnJlcXVlbmNpZXMgPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMuZnJlcWRhdGEgfHwgKFxuICAgIHRoaXMuZnJlcWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJ1ZmZlciA9IHJlcXVpcmUoJy4vbGliL2J1ZmZlci1zb3VyY2UnKVxudmFyIG1lZGlhID0gcmVxdWlyZSgnLi9saWIvbWVkaWEtc291cmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWJBdWRpb1BsYXllclxuZnVuY3Rpb24gd2ViQXVkaW9QbGF5ZXIgKHNyYywgb3B0KSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgYSBzcmMgcGFyYW1ldGVyJylcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIGlmIChvcHQuYnVmZmVyKSByZXR1cm4gYnVmZmVyKHNyYywgb3B0KVxuICBlbHNlIHJldHVybiBtZWRpYShzcmMsIG9wdClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBjcmVhdGVBdWRpb0NvbnRleHQgPSByZXF1aXJlKCcuL2F1ZGlvLWNvbnRleHQnKVxudmFyIHhockF1ZGlvID0gcmVxdWlyZSgnLi94aHItYXVkaW8nKVxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIHJpZ2h0Tm93ID0gcmVxdWlyZSgncmlnaHQtbm93JylcbnZhciByZXN1bWUgPSByZXF1aXJlKCcuL3Jlc3VtZS1jb250ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXJTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlclNvdXJjZSAoc3JjLCBvcHQpIHtcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIHZhciBhdWRpb0NvbnRleHQgPSBvcHQuY29udGV4dCB8fCBjcmVhdGVBdWRpb0NvbnRleHQoKVxuXG4gIC8vIGEgcGFzcy10aHJvdWdoIG5vZGUgc28gdXNlciBqdXN0IG5lZWRzIHRvXG4gIC8vIGNvbm5lY3QoKSBvbmNlXG4gIHZhciBidWZmZXJOb2RlLCBidWZmZXIsIGR1cmF0aW9uXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgYXVkaW9TdGFydFRpbWUgPSBudWxsXG4gIHZhciBhdWRpb1BhdXNlVGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIHZhciBwbGF5aW5nID0gZmFsc2VcbiAgdmFyIGxvb3AgPSBvcHQubG9vcFxuXG4gIGVtaXR0ZXIucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGxheWluZykgcmV0dXJuXG4gICAgcGxheWluZyA9IHRydWVcblxuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyTm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICAgIGJ1ZmZlck5vZGUuY29ubmVjdChlbWl0dGVyLm5vZGUpXG4gICAgYnVmZmVyTm9kZS5vbmVuZGVkID0gZW5kZWRcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAvLyBNaWdodCBiZSBudWxsIHVuZGVmaW5lZCBpZiB3ZSBhcmUgc3RpbGwgbG9hZGluZ1xuICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICB9XG4gICAgaWYgKGxvb3ApIHtcbiAgICAgIGJ1ZmZlck5vZGUubG9vcCA9IHRydWVcbiAgICAgIGlmICh0eXBlb2Ygb3B0Lmxvb3BTdGFydCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcEVuZCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gICAgfVxuXG4gICAgaWYgKGR1cmF0aW9uICYmIGF1ZGlvQ3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xuICAgICAgLy8gZm9yIHdoZW4gaXQgbG9vcHMuLi5cbiAgICAgIGF1ZGlvQ3VycmVudFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lICUgZHVyYXRpb25cbiAgICB9XG4gICAgdmFyIG5leHRUaW1lID0gYXVkaW9DdXJyZW50VGltZVxuXG4gICAgYnVmZmVyTm9kZS5zdGFydCgwLCBuZXh0VGltZSlcbiAgICBhdWRpb1N0YXJ0VGltZSA9IHJpZ2h0Tm93KClcbiAgfVxuXG4gIGVtaXR0ZXIucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICAvLyBEb24ndCBsZXQgdGhlIFwiZW5kXCIgZXZlbnRcbiAgICAvLyBnZXQgdHJpZ2dlcmVkIG9uIG1hbnVhbCBwYXVzZS5cbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBudWxsXG4gICAgYnVmZmVyTm9kZS5zdG9wKDApXG4gICAgYXVkaW9QYXVzZVRpbWUgPSByaWdodE5vdygpXG4gICAgYXVkaW9DdXJyZW50VGltZSArPSAoYXVkaW9QYXVzZVRpbWUgLSBhdWRpb1N0YXJ0VGltZSkgLyAxMDAwXG4gIH1cblxuICBlbWl0dGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgZW1pdHRlci5wYXVzZSgpXG4gICAgZW5kZWQoKVxuICB9XG5cbiAgZW1pdHRlci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGRpc3Bvc2VCdWZmZXIoKVxuICAgIGJ1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGVtaXR0ZXIubm9kZSA9IG5vZGVcbiAgZW1pdHRlci5jb250ZXh0ID0gYXVkaW9Db250ZXh0XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZW1pdHRlciwge1xuICAgIGR1cmF0aW9uOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXlpbmdcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1ZmZlcjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gc2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IG9wdC52b2x1bWVcbiAgfVxuXG4gIC8vIGZpbHRlciBkb3duIHRvIGEgbGlzdCBvZiBwbGF5YWJsZSBzb3VyY2VzXG4gIHZhciBzb3VyY2VzID0gQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogWyBzcmMgXVxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgdmFyIHBsYXlhYmxlID0gc291cmNlcy5zb21lKGNhblBsYXlTcmMpXG4gIGlmIChwbGF5YWJsZSkge1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzLmZpbHRlcihjYW5QbGF5U3JjKVswXVxuICAgIC8vIFN1cHBvcnQgdGhlIHNhbWUgc291cmNlIHR5cGVzIGFzIGluXG4gICAgLy8gTWVkaWFFbGVtZW50IG1vZGUuLi5cbiAgICBpZiAodHlwZW9mIHNvdXJjZS5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlLnNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5zcmNcbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBhdCBsZWFzdCBvbmUgcGxheWFibGUgc291cmNlLlxuICAgIC8vIEZvciBub3cganVzdCBwbGF5IHRoZSBmaXJzdCxcbiAgICAvLyBpZGVhbGx5IHRoaXMgbW9kdWxlIGNvdWxkIGF0dGVtcHQgZWFjaCBvbmUuXG4gICAgc3RhcnRMb2FkKHNvdXJjZSlcbiAgfSBlbHNlIHtcbiAgICAvLyBubyBzb3VyY2VzIGNhbiBiZSBwbGF5ZWQuLi5cbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGVtaXR0ZXJcblxuICBmdW5jdGlvbiBzdGFydExvYWQgKHNyYykge1xuICAgIHhockF1ZGlvKGF1ZGlvQ29udGV4dCwgc3JjLCBmdW5jdGlvbiBhdWRpb0RlY29kZWQgKGVyciwgZGVjb2RlZCkge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICBidWZmZXIgPSBkZWNvZGVkIC8vIHN0b3JlIGZvciBsYXRlciB1c2VcbiAgICAgIGlmIChidWZmZXJOb2RlKSB7XG4gICAgICAgIC8vIGlmIHBsYXkoKSB3YXMgY2FsbGVkIGVhcmx5XG4gICAgICAgIGJ1ZmZlck5vZGUuYnVmZmVyID0gYnVmZmVyXG4gICAgICB9XG4gICAgICBkdXJhdGlvbiA9IGJ1ZmZlci5kdXJhdGlvblxuICAgICAgbm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIGVtaXR0ZXIuZW1pdCgnbG9hZCcpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9Qcm9ncmVzcyAoYW1vdW50LCB0b3RhbCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdwcm9ncmVzcycsIGFtb3VudCwgdG90YWwpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9EZWNvZGluZyAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2RlY29kaW5nJylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kZWQgKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICBhdWRpb0N1cnJlbnRUaW1lID0gMFxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcG9zZUJ1ZmZlciAoKSB7XG4gICAgaWYgKGJ1ZmZlck5vZGUpIGJ1ZmZlck5vZGUuZGlzY29ubmVjdCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGFkZE9uY2VcbmZ1bmN0aW9uIGFkZE9uY2UgKGVsZW1lbnQsIGV2ZW50LCBmbikge1xuICBmdW5jdGlvbiB0bXAgKGV2KSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxuICAgIGZuKGV2LCBlbGVtZW50KVxuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdG1wLCBmYWxzZSlcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciBjcmVhdGVBdWRpbyA9IHJlcXVpcmUoJ3NpbXBsZS1tZWRpYS1lbGVtZW50JykuYXVkaW9cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBhZGRPbmNlID0gcmVxdWlyZSgnLi9ldmVudC1hZGQtb25jZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTWVkaWFTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBhc3NpZ24oe30sIG9wdClcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvLyBEZWZhdWx0IHRvIEF1ZGlvIGluc3RlYWQgb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBUaGVyZSBpcyBub3QgbXVjaCBkaWZmZXJlbmNlIGV4Y2VwdCBpbiB0aGUgZm9sbG93aW5nOlxuICAvLyAgICB4IGluc3RhbmNlb2YgQXVkaW9cbiAgLy8gICAgeCBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnRcbiAgLy8gQW5kIGluIG15IGV4cGVyaWVuY2UgQXVkaW8gaGFzIGJldHRlciBzdXBwb3J0IG9uIHZhcmlvdXNcbiAgLy8gcGxhdGZvcm1zIGxpa2UgQ29jb29uSlMuXG4gIC8vIFBsZWFzZSBvcGVuIGFuIGlzc3VlIGlmIHRoZXJlIGlzIGEgY29uY2VybiB3aXRoIHRoaXMuXG4gIGlmICghb3B0LmVsZW1lbnQpIG9wdC5lbGVtZW50ID0gbmV3IHdpbmRvdy5BdWRpbygpXG5cbiAgdmFyIGRlc2lyZWRWb2x1bWUgPSBvcHQudm9sdW1lXG4gIGRlbGV0ZSBvcHQudm9sdW1lIC8vIG1ha2Ugc3VyZSA8YXVkaW8+IHRhZyByZWNlaXZlcyBmdWxsIHZvbHVtZVxuICB2YXIgYXVkaW8gPSBjcmVhdGVBdWRpbyhzcmMsIG9wdClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgbWVkaWFOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgbWVkaWFOb2RlLmNvbm5lY3Qobm9kZSlcblxuICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2VuZCcpXG4gIH0pXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJQTEFZXCIpXG4gIH0pXG5cbiAgdmFyIGxvb3BTdGFydCA9IG9wdC5sb29wU3RhcnRcbiAgdmFyIGxvb3BFbmQgPSBvcHQubG9vcEVuZFxuICB2YXIgaGFzTG9vcFN0YXJ0ID0gdHlwZW9mIGxvb3BTdGFydCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobG9vcFN0YXJ0KVxuICB2YXIgaGFzTG9vcEVuZCA9IHR5cGVvZiBsb29wRW5kID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wRW5kKVxuICB2YXIgaXNMb29wUmVhZHkgPSBmYWxzZVxuICBpZiAoaGFzTG9vcFN0YXJ0IHx8IGhhc0xvb3BFbmQpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgICAvLyBhdWRpbyBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0Li4uXG4gICAgICBpZiAodHlwZW9mIGF1ZGlvLmR1cmF0aW9uICE9PSAnbnVtYmVyJykgcmV0dXJuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBhdWRpby5jdXJyZW50VGltZVxuXG4gICAgICAvLyB3aGVyZSB0byBlbmQgdGhlIGJ1ZmZlclxuICAgICAgdmFyIGVuZFRpbWUgPSBoYXNMb29wRW5kID8gTWF0aC5taW4oYXVkaW8uZHVyYXRpb24sIGxvb3BFbmQpIDogYXVkaW8uZHVyYXRpb25cblxuICAgICAgaWYgKGN1cnJlbnRUaW1lID4gKGxvb3BTdGFydCB8fCAwKSkge1xuICAgICAgICBpc0xvb3BSZWFkeSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8ganVtcCBhaGVhZCB0byBsb29wIHN0YXJ0IHBvaW50XG4gICAgICBpZiAoaGFzTG9vcFN0YXJ0ICYmIGlzTG9vcFJlYWR5ICYmIGN1cnJlbnRUaW1lIDwgbG9vcFN0YXJ0KSB7XG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gbG9vcFN0YXJ0XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlJ3ZlIGhpdCB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGxvb3AgZW5kIHBvaW50LCBsZXQgbmF0aXZlIGxvb3BpbmcgdGFrZSBvdmVyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBsb29wIGVuZCBwb2ludCwganVtcCBiYWNrIHRvIHN0YXJ0IHBvaW50IG9yIHplcm9cbiAgICAgICAgaWYgKGhhc0xvb3BFbmQpIHtcbiAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGhhc0xvb3BTdGFydCA/IGxvb3BTdGFydCA6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXG4gICAgfSk7XG4gIH1cblxuICBlbWl0dGVyLmVsZW1lbnQgPSBhdWRpb1xuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLnBhdXNlID0gYXVkaW8ucGF1c2UuYmluZChhdWRpbylcbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgcmV0dXJuIGF1ZGlvLnBsYXkoKVxuICB9XG5cbiAgLy8gVGhpcyBleGlzdHMgY3VycmVudGx5IGZvciBwYXJpdHkgd2l0aCBCdWZmZXIgc291cmNlXG4gIC8vIE9wZW4gdG8gc3VnZ2VzdGlvbnMgZm9yIHdoYXQgdGhpcyBzaG91bGQgZGlzcG9zZS4uLlxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7fVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2FzUGxheWluZyA9IGVtaXR0ZXIucGxheWluZ1xuICAgIGF1ZGlvLnBhdXNlKClcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDBcbiAgICBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gICAgaWYgKHdhc1BsYXlpbmcpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICB9XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbnRUaW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGF1ZGlvLmN1cnJlbnRUaW1lXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICFhdWRpby5wYXVzZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gU2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2YgZGVzaXJlZFZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IGRlc2lyZWRWb2x1bWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFsbCBzb3VyY2VzIGFyZSB1bnBsYXlhYmxlLFxuICAvLyBpZiBzbyB3ZSBlbWl0IGFuIGVycm9yIHNpbmNlIHRoZSBicm93c2VyXG4gIC8vIG1pZ2h0IG5vdC5cbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgLy8gQXQgbGVhc3Qgb25lIHNvdXJjZSBpcyBwcm9iYWJseS9tYXliZSBwbGF5YWJsZVxuICAgIHN0YXJ0TG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gZW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gdXNlciBjYW4gY2F0Y2ggaXRcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoKSB7XG4gICAgLy8gVGhlIGZpbGUgZXJyb3JzIChsaWtlIGRlY29kaW5nIC8gNDA0cykgYXBwZWFyIG9uIDxzb3VyY2U+XG4gICAgdmFyIHNyY0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXVkaW8uY2hpbGRyZW4pXG4gICAgdmFyIHJlbWFpbmluZ1NyY0Vycm9ycyA9IHNyY0VsZW1lbnRzLmxlbmd0aFxuICAgIHZhciBoYXNFcnJvcmVkID0gZmFsc2VcbiAgICB2YXIgc291cmNlRXJyb3IgPSBmdW5jdGlvbiAoZXJyLCBlbCkge1xuICAgICAgaWYgKGhhc0Vycm9yZWQpIHJldHVyblxuICAgICAgcmVtYWluaW5nU3JjRXJyb3JzLS1cbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgbG9hZGluZyBzb3VyY2U6ICcgKyBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpKVxuICAgICAgaWYgKHJlbWFpbmluZ1NyY0Vycm9ycyA8PSAwKSB7XG4gICAgICAgIGhhc0Vycm9yZWQgPSB0cnVlXG4gICAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VyY2VFcnJvciwgZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwbGF5IGFueSBvZiB0aGUgc3VwcGxpZWQgc291cmNlcycpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9XG5cbiAgICBpZiAoYXVkaW8ucmVhZHlTdGF0ZSA+PSBhdWRpby5IQVZFX0VOT1VHSF9EQVRBKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGRvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdjYW5wbGF5JywgZG9uZSlcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdlcnJvcicsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBlbWl0dGVyLmVtaXQobmV3IEVycm9yKCdVbmtub3duIGVycm9yIHdoaWxlIGxvYWRpbmcgPGF1ZGlvPicpKVxuICAgICAgfSlcbiAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGFkZE9uY2UoZWwsICdlcnJvcicsIHNvdXJjZUVycm9yKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBPbiBtb3N0IGJyb3dzZXJzIHRoZSBsb2FkaW5nIGJlZ2luc1xuICAgIC8vIGltbWVkaWF0ZWx5LiBIb3dldmVyLCBvbiBpT1MgOS4yIFNhZmFyaSxcbiAgICAvLyB5b3UgbmVlZCB0byBjYWxsIGxvYWQoKSBmb3IgZXZlbnRzXG4gICAgLy8gdG8gYmUgdHJpZ2dlcmVkLlxuICAgIGF1ZGlvLmxvYWQoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvbWVkaWEtc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgeGhyID0gcmVxdWlyZSgneGhyJylcbnZhciB4aHJQcm9ncmVzcyA9IHJlcXVpcmUoJ3hoci1wcm9ncmVzcycpXG5cbm1vZHVsZS5leHBvcnRzID0geGhyQXVkaW9cbmZ1bmN0aW9uIHhockF1ZGlvIChhdWRpb0NvbnRleHQsIHNyYywgY2IsIHByb2dyZXNzLCBkZWNvZGluZykge1xuICB2YXIgeGhyT2JqZWN0ID0geGhyKHtcbiAgICB1cmk6IHNyYyxcbiAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcidcbiAgfSwgZnVuY3Rpb24gKGVyciwgcmVzcCwgYXJyYXlCdWYpIHtcbiAgICBpZiAoIS9eMi8udGVzdChyZXNwLnN0YXR1c0NvZGUpKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ3N0YXR1cyBjb2RlICcgKyByZXNwLnN0YXR1c0NvZGUgKyAnIHJlcXVlc3RpbmcgJyArIHNyYylcbiAgICB9XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBkZWNvZGUoYXJyYXlCdWYpXG4gIH0pXG5cbiAgeGhyUHJvZ3Jlc3MoeGhyT2JqZWN0KVxuICAgIC5vbignZGF0YScsIGZ1bmN0aW9uIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBwcm9ncmVzcyhhbW91bnQsIHRvdGFsKVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gZGVjb2RlIChhcnJheUJ1Zikge1xuICAgIGRlY29kaW5nKClcbiAgICBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmLCBmdW5jdGlvbiAoZGVjb2RlZCkge1xuICAgICAgY2IobnVsbCwgZGVjb2RlZClcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdFcnJvciBkZWNvZGluZyBhdWRpbyBkYXRhJylcbiAgICAgIGVyci50eXBlID0gJ0RFQ09ERV9BVURJT19EQVRBJ1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cbldlYk1pZGkgdjIuMC40XG5cbldlYk1pZGkuanMgaGVscHMgeW91IHRhbWUgdGhlIFdlYiBNSURJIEFQSS4gU2VuZCBhbmQgcmVjZWl2ZSBNSURJIG1lc3NhZ2VzIHdpdGggZWFzZS4gQ29udHJvbCBpbnN0cnVtZW50cyB3aXRoIHVzZXItZnJpZW5kbHkgZnVuY3Rpb25zIChwbGF5Tm90ZSwgc2VuZFBpdGNoQmVuZCwgZXRjLikuIFJlYWN0IHRvIE1JREkgaW5wdXQgd2l0aCBzaW1wbGUgZXZlbnQgbGlzdGVuZXJzIChub3Rlb24sIHBpdGNoYmVuZCwgY29udHJvbGNoYW5nZSwgZXRjLikuXG5odHRwczovL2dpdGh1Yi5jb20vY290ZWpwL3dlYm1pZGlcblxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1LTIwMTgsIEplYW4tUGhpbGlwcGUgQ8O0dMOpXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmRcbmFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sXG5pbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLFxuc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsXG5wb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVFxuTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVNcbk9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cblxuIWZ1bmN0aW9uKHNjb3BlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBXZWJNaWRpKCl7aWYoV2ViTWlkaS5wcm90b3R5cGUuX3NpbmdsZXRvbil0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIGEgc2luZ2xldG9uLCBpdCBjYW5ub3QgYmUgaW5zdGFudGlhdGVkIGRpcmVjdGx5LlwiKTtXZWJNaWRpLnByb3RvdHlwZS5fc2luZ2xldG9uPXRoaXMsdGhpcy5faW5wdXRzPVtdLHRoaXMuX291dHB1dHM9W10sdGhpcy5fdXNlckhhbmRsZXJzPXt9LHRoaXMuX3N0YXRlQ2hhbmdlUXVldWU9W10sdGhpcy5fcHJvY2Vzc2luZ1N0YXRlQ2hhbmdlPSExLHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHM9W1wiY29ubmVjdGVkXCIsXCJkaXNjb25uZWN0ZWRcIl0sdGhpcy5fbm90ZXM9W1wiQ1wiLFwiQyNcIixcIkRcIixcIkQjXCIsXCJFXCIsXCJGXCIsXCJGI1wiLFwiR1wiLFwiRyNcIixcIkFcIixcIkEjXCIsXCJCXCJdLHRoaXMuX3NlbWl0b25lcz17QzowLEQ6MixFOjQsRjo1LEc6NyxBOjksQjoxMX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7TUlESV9TWVNURU1fTUVTU0FHRVM6e3ZhbHVlOntzeXNleDoyNDAsdGltZWNvZGU6MjQxLHNvbmdwb3NpdGlvbjoyNDIsc29uZ3NlbGVjdDoyNDMsdHVuaW5ncmVxdWVzdDoyNDYsc3lzZXhlbmQ6MjQ3LGNsb2NrOjI0OCxzdGFydDoyNTAsXCJjb250aW51ZVwiOjI1MSxzdG9wOjI1MixhY3RpdmVzZW5zaW5nOjI1NCxyZXNldDoyNTUsdW5rbm93bnN5c3RlbW1lc3NhZ2U6LTF9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NIQU5ORUxfTUVTU0FHRVM6e3ZhbHVlOntub3Rlb2ZmOjgsbm90ZW9uOjksa2V5YWZ0ZXJ0b3VjaDoxMCxjb250cm9sY2hhbmdlOjExLGNoYW5uZWxtb2RlOjExLHByb2dyYW1jaGFuZ2U6MTIsY2hhbm5lbGFmdGVydG91Y2g6MTMscGl0Y2hiZW5kOjE0fSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMX0sTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUjp7dmFsdWU6e3BpdGNoYmVuZHJhbmdlOlswLDBdLGNoYW5uZWxmaW5ldHVuaW5nOlswLDFdLGNoYW5uZWxjb2Fyc2V0dW5pbmc6WzAsMl0sdHVuaW5ncHJvZ3JhbTpbMCwzXSx0dW5pbmdiYW5rOlswLDRdLG1vZHVsYXRpb25yYW5nZTpbMCw1XSxhemltdXRoYW5nbGU6WzYxLDBdLGVsZXZhdGlvbmFuZ2xlOls2MSwxXSxnYWluOls2MSwyXSxkaXN0YW5jZXJhdGlvOls2MSwzXSxtYXhpbXVtZGlzdGFuY2U6WzYxLDRdLG1heGltdW1kaXN0YW5jZWdhaW46WzYxLDVdLHJlZmVyZW5jZWRpc3RhbmNlcmF0aW86WzYxLDZdLHBhbnNwcmVhZGFuZ2xlOls2MSw3XSxyb2xsYW5nbGU6WzYxLDhdfSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMX0sTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFUzp7dmFsdWU6e2JhbmtzZWxlY3Rjb2Fyc2U6MCxtb2R1bGF0aW9ud2hlZWxjb2Fyc2U6MSxicmVhdGhjb250cm9sbGVyY29hcnNlOjIsZm9vdGNvbnRyb2xsZXJjb2Fyc2U6NCxwb3J0YW1lbnRvdGltZWNvYXJzZTo1LGRhdGFlbnRyeWNvYXJzZTo2LHZvbHVtZWNvYXJzZTo3LGJhbGFuY2Vjb2Fyc2U6OCxwYW5jb2Fyc2U6MTAsZXhwcmVzc2lvbmNvYXJzZToxMSxlZmZlY3Rjb250cm9sMWNvYXJzZToxMixlZmZlY3Rjb250cm9sMmNvYXJzZToxMyxnZW5lcmFscHVycG9zZXNsaWRlcjE6MTYsZ2VuZXJhbHB1cnBvc2VzbGlkZXIyOjE3LGdlbmVyYWxwdXJwb3Nlc2xpZGVyMzoxOCxnZW5lcmFscHVycG9zZXNsaWRlcjQ6MTksYmFua3NlbGVjdGZpbmU6MzIsbW9kdWxhdGlvbndoZWVsZmluZTozMyxicmVhdGhjb250cm9sbGVyZmluZTozNCxmb290Y29udHJvbGxlcmZpbmU6MzYscG9ydGFtZW50b3RpbWVmaW5lOjM3LGRhdGFlbnRyeWZpbmU6Mzgsdm9sdW1lZmluZTozOSxiYWxhbmNlZmluZTo0MCxwYW5maW5lOjQyLGV4cHJlc3Npb25maW5lOjQzLGVmZmVjdGNvbnRyb2wxZmluZTo0NCxlZmZlY3Rjb250cm9sMmZpbmU6NDUsaG9sZHBlZGFsOjY0LHBvcnRhbWVudG86NjUsc3VzdGVudXRvcGVkYWw6NjYsc29mdHBlZGFsOjY3LGxlZ2F0b3BlZGFsOjY4LGhvbGQycGVkYWw6Njksc291bmR2YXJpYXRpb246NzAscmVzb25hbmNlOjcxLHNvdW5kcmVsZWFzZXRpbWU6NzIsc291bmRhdHRhY2t0aW1lOjczLGJyaWdodG5lc3M6NzQsc291bmRjb250cm9sNjo3NSxzb3VuZGNvbnRyb2w3Ojc2LHNvdW5kY29udHJvbDg6Nzcsc291bmRjb250cm9sOTo3OCxzb3VuZGNvbnRyb2wxMDo3OSxnZW5lcmFscHVycG9zZWJ1dHRvbjE6ODAsZ2VuZXJhbHB1cnBvc2VidXR0b24yOjgxLGdlbmVyYWxwdXJwb3NlYnV0dG9uMzo4MixnZW5lcmFscHVycG9zZWJ1dHRvbjQ6ODMscmV2ZXJibGV2ZWw6OTEsdHJlbW9sb2xldmVsOjkyLGNob3J1c2xldmVsOjkzLGNlbGVzdGVsZXZlbDo5NCxwaGFzZXJsZXZlbDo5NSxkYXRhYnV0dG9uaW5jcmVtZW50Ojk2LGRhdGFidXR0b25kZWNyZW1lbnQ6OTcsbm9ucmVnaXN0ZXJlZHBhcmFtZXRlcmNvYXJzZTo5OCxub25yZWdpc3RlcmVkcGFyYW1ldGVyZmluZTo5OSxyZWdpc3RlcmVkcGFyYW1ldGVyY29hcnNlOjEwMCxyZWdpc3RlcmVkcGFyYW1ldGVyZmluZToxMDF9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NIQU5ORUxfTU9ERV9NRVNTQUdFUzp7dmFsdWU6e2FsbHNvdW5kb2ZmOjEyMCxyZXNldGFsbGNvbnRyb2xsZXJzOjEyMSxsb2NhbGNvbnRyb2w6MTIyLGFsbG5vdGVzb2ZmOjEyMyxvbW5pbW9kZW9mZjoxMjQsb21uaW1vZGVvbjoxMjUsbW9ub21vZGVvbjoxMjYscG9seW1vZGVvbjoxMjd9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3N1cHBvcnRlZDp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cInJlcXVlc3RNSURJQWNjZXNzXCJpbiBuYXZpZ2F0b3J9fSxlbmFibGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT10aGlzW1wiaW50ZXJmYWNlXCJdfS5iaW5kKHRoaXMpfSxpbnB1dHM6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lucHV0c30uYmluZCh0aGlzKX0sb3V0cHV0czp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb3V0cHV0c30uYmluZCh0aGlzKX0sc3lzZXhFbmFibGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiEoIXRoaXNbXCJpbnRlcmZhY2VcIl18fCF0aGlzW1wiaW50ZXJmYWNlXCJdLnN5c2V4RW5hYmxlZCl9LmJpbmQodGhpcyl9LHRpbWU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpfX19KX1mdW5jdGlvbiBJbnB1dChtaWRpSW5wdXQpe3ZhciB0aGF0PXRoaXM7dGhpcy5fdXNlckhhbmRsZXJzPXtjaGFubmVsOnt9LHN5c3RlbTp7fX0sdGhpcy5fbWlkaUlucHV0PW1pZGlJbnB1dCxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtjb25uZWN0aW9uOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuY29ubmVjdGlvbn19LGlkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuaWR9fSxtYW51ZmFjdHVyZXI6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5tYW51ZmFjdHVyZXJ9fSxuYW1lOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQubmFtZX19LHN0YXRlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQuc3RhdGV9fSx0eXBlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpSW5wdXQudHlwZX19fSksdGhpcy5faW5pdGlhbGl6ZVVzZXJIYW5kbGVycygpfWZ1bmN0aW9uIE91dHB1dChtaWRpT3V0cHV0KXt2YXIgdGhhdD10aGlzO3RoaXMuX21pZGlPdXRwdXQ9bWlkaU91dHB1dCxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtjb25uZWN0aW9uOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0LmNvbm5lY3Rpb259fSxpZDp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5pZH19LG1hbnVmYWN0dXJlcjp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5tYW51ZmFjdHVyZXJ9fSxuYW1lOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0Lm5hbWV9fSxzdGF0ZTp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC5zdGF0ZX19LHR5cGU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlPdXRwdXQudHlwZX19fSl9dmFyIHdtPW5ldyBXZWJNaWRpO1dlYk1pZGkucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbihjYWxsYmFjayxzeXNleCl7cmV0dXJuIHRoaXMuZW5hYmxlZD92b2lkIDA6dGhpcy5zdXBwb3J0ZWQ/dm9pZCBuYXZpZ2F0b3IucmVxdWVzdE1JRElBY2Nlc3Moe3N5c2V4OnN5c2V4fSkudGhlbihmdW5jdGlvbihtaWRpQWNjZXNzKXtmdW5jdGlvbiBvblBvcnRzT3Blbigpe3RoaXMuX3VwZGF0ZUlucHV0c0FuZE91dHB1dHMoKSx0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9dGhpcy5fb25JbnRlcmZhY2VTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGNhbGxiYWNrJiZjYWxsYmFjay5jYWxsKHRoaXMpLGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KXt0aGlzLl9vbkludGVyZmFjZVN0YXRlQ2hhbmdlKGV2ZW50KX0uYmluZCh0aGlzKSl9dmFyIGV2ZW50cz1bXSxwcm9taXNlcz1bXTt0aGlzW1wiaW50ZXJmYWNlXCJdPW1pZGlBY2Nlc3MsdGhpcy5fcmVzZXRJbnRlcmZhY2VVc2VySGFuZGxlcnMoKSx0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9ZnVuY3Rpb24oZSl7ZXZlbnRzLnB1c2goZSl9O2Zvcih2YXIgaW5wdXRzPW1pZGlBY2Nlc3MuaW5wdXRzLnZhbHVlcygpLGlucHV0PWlucHV0cy5uZXh0KCk7aW5wdXQmJiFpbnB1dC5kb25lO2lucHV0PWlucHV0cy5uZXh0KCkpcHJvbWlzZXMucHVzaChpbnB1dC52YWx1ZS5vcGVuKCkpO2Zvcih2YXIgb3V0cHV0cz1taWRpQWNjZXNzLm91dHB1dHMudmFsdWVzKCksb3V0cHV0PW91dHB1dHMubmV4dCgpO291dHB1dCYmIW91dHB1dC5kb25lO291dHB1dD1vdXRwdXRzLm5leHQoKSlwcm9taXNlcy5wdXNoKG91dHB1dC52YWx1ZS5vcGVuKCkpO1Byb21pc2U/UHJvbWlzZS5hbGwocHJvbWlzZXMpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyKXt9KS50aGVuKG9uUG9ydHNPcGVuLmJpbmQodGhpcykpOnNldFRpbWVvdXQob25Qb3J0c09wZW4uYmluZCh0aGlzKSwyMDApfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGVycil7XCJmdW5jdGlvblwiPT10eXBlb2YgY2FsbGJhY2smJmNhbGxiYWNrLmNhbGwodGhpcyxlcnIpfS5iaW5kKHRoaXMpKTp2b2lkKFwiZnVuY3Rpb25cIj09dHlwZW9mIGNhbGxiYWNrJiZjYWxsYmFjayhuZXcgRXJyb3IoXCJUaGUgV2ViIE1JREkgQVBJIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKSkpfSxXZWJNaWRpLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuc3VwcG9ydGVkKXRocm93IG5ldyBFcnJvcihcIlRoZSBXZWIgTUlESSBBUEkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpO3RoaXNbXCJpbnRlcmZhY2VcIl0mJih0aGlzW1wiaW50ZXJmYWNlXCJdLm9uc3RhdGVjaGFuZ2U9dm9pZCAwKSx0aGlzW1wiaW50ZXJmYWNlXCJdPXZvaWQgMCx0aGlzLl9pbnB1dHM9W10sdGhpcy5fb3V0cHV0cz1bXSx0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpfSxXZWJNaWRpLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzLlwiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYoISh0aGlzLl9taWRpSW50ZXJmYWNlRXZlbnRzLmluZGV4T2YodHlwZSk+PTApKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7cmV0dXJuIHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKSx0aGlzfSxXZWJNaWRpLnByb3RvdHlwZS5oYXNMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSBjaGVja2luZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZighKHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMuaW5kZXhPZih0eXBlKT49MCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtmb3IodmFyIG89MDtvPHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5sZW5ndGg7bysrKWlmKHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXVtvXT09PWxpc3RlbmVyKXJldHVybiEwO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgbXVzdCBiZSBlbmFibGVkIGJlZm9yZSByZW1vdmluZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKHZvaWQgMCE9PWxpc3RlbmVyJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYodGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cy5pbmRleE9mKHR5cGUpPj0wKWlmKGxpc3RlbmVyKWZvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLmxlbmd0aDtvKyspdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdW29dPT09bGlzdGVuZXImJnRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXS5zcGxpY2UobywxKTtlbHNlIHRoaXMuX3VzZXJIYW5kbGVyc1t0eXBlXT1bXTtlbHNle2lmKHZvaWQgMCE9PXR5cGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTt0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpfXJldHVybiB0aGlzfSxXZWJNaWRpLnByb3RvdHlwZS50b01JRElDaGFubmVscz1mdW5jdGlvbihjaGFubmVsKXt2YXIgY2hhbm5lbHM7cmV0dXJuIGNoYW5uZWxzPVwiYWxsXCI9PT1jaGFubmVsfHx2b2lkIDA9PT1jaGFubmVsP1tcImFsbFwiXTpBcnJheS5pc0FycmF5KGNoYW5uZWwpP2NoYW5uZWw6W2NoYW5uZWxdLGNoYW5uZWxzLmluZGV4T2YoXCJhbGxcIik+LTEmJihjaGFubmVscz1bMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTZdKSxjaGFubmVscy5tYXAoZnVuY3Rpb24oY2gpe3JldHVybiBwYXJzZUludChjaCl9KS5maWx0ZXIoZnVuY3Rpb24oY2gpe3JldHVybiBjaD49MSYmMTY+PWNofSl9LFdlYk1pZGkucHJvdG90eXBlLmdldElucHV0QnlJZD1mdW5jdGlvbihpZCl7aWYoIXRoaXMuZW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIG5vdCBlbmFibGVkLlwiKTtmb3IodmFyIGk9MDtpPHRoaXMuaW5wdXRzLmxlbmd0aDtpKyspaWYodGhpcy5pbnB1dHNbaV0uaWQ9PT1pZClyZXR1cm4gdGhpcy5pbnB1dHNbaV07cmV0dXJuITF9LFdlYk1pZGkucHJvdG90eXBlLmdldE91dHB1dEJ5SWQ9ZnVuY3Rpb24oaWQpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBpcyBub3QgZW5hYmxlZC5cIik7Zm9yKHZhciBpPTA7aTx0aGlzLm91dHB1dHMubGVuZ3RoO2krKylpZih0aGlzLm91dHB1dHNbaV0uaWQ9PT1pZClyZXR1cm4gdGhpcy5vdXRwdXRzW2ldO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5nZXRJbnB1dEJ5TmFtZT1mdW5jdGlvbihuYW1lKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5pbnB1dHMubGVuZ3RoO2krKylpZih+dGhpcy5pbnB1dHNbaV0ubmFtZS5pbmRleE9mKG5hbWUpKXJldHVybiB0aGlzLmlucHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0T2N0YXZlPWZ1bmN0aW9uKG51bWJlcil7cmV0dXJuIG51bWJlciYmbnVtYmVyPj0wJiYxMjc+PW51bWJlcj9NYXRoLmZsb29yKHBhcnNlSW50KG51bWJlcikvMTItMSktMTp2b2lkIDB9LFdlYk1pZGkucHJvdG90eXBlLmdldE91dHB1dEJ5TmFtZT1mdW5jdGlvbihuYW1lKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5vdXRwdXRzLmxlbmd0aDtpKyspaWYofnRoaXMub3V0cHV0c1tpXS5uYW1lLmluZGV4T2YobmFtZSkpcmV0dXJuIHRoaXMub3V0cHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ3Vlc3NOb3RlTnVtYmVyPWZ1bmN0aW9uKGlucHV0KXt2YXIgb3V0cHV0PSExO2lmKGlucHV0JiZpbnB1dC50b0ZpeGVkJiZpbnB1dD49MCYmMTI3Pj1pbnB1dD9vdXRwdXQ9TWF0aC5yb3VuZChpbnB1dCk6cGFyc2VJbnQoaW5wdXQpPj0wJiZwYXJzZUludChpbnB1dCk8PTEyNz9vdXRwdXQ9cGFyc2VJbnQoaW5wdXQpOihcInN0cmluZ1wiPT10eXBlb2YgaW5wdXR8fGlucHV0IGluc3RhbmNlb2YgU3RyaW5nKSYmKG91dHB1dD10aGlzLm5vdGVOYW1lVG9OdW1iZXIoaW5wdXQpKSxvdXRwdXQ9PT0hMSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG5vdGUgbnVtYmVyIChcIitpbnB1dCtcIikuXCIpO3JldHVybiBvdXRwdXR9LFdlYk1pZGkucHJvdG90eXBlLm5vdGVOYW1lVG9OdW1iZXI9ZnVuY3Rpb24obmFtZSl7XCJzdHJpbmdcIiE9dHlwZW9mIG5hbWUmJihuYW1lPVwiXCIpO3ZhciBtYXRjaGVzPW5hbWUubWF0Y2goLyhbQ0RFRkdBQl0pKCN7MCwyfXxiezAsMn0pKC0/XFxkKykvaSk7aWYoIW1hdGNoZXMpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG5vdGUgbmFtZS5cIik7dmFyIHNlbWl0b25lcz13bS5fc2VtaXRvbmVzW21hdGNoZXNbMV0udG9VcHBlckNhc2UoKV0sb2N0YXZlPXBhcnNlSW50KG1hdGNoZXNbM10pLHJlc3VsdD0xMioob2N0YXZlKzIpK3NlbWl0b25lcztpZihtYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImJcIik+LTE/cmVzdWx0LT1tYXRjaGVzWzJdLmxlbmd0aDptYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIiNcIik+LTEmJihyZXN1bHQrPW1hdGNoZXNbMl0ubGVuZ3RoKSwwPnNlbWl0b25lc3x8LTI+b2N0YXZlfHxvY3RhdmU+OHx8MD5yZXN1bHR8fHJlc3VsdD4xMjcpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG5vdGUgbmFtZSBvciBub3RlIG91dHNpZGUgdmFsaWQgcmFuZ2UuXCIpO3JldHVybiByZXN1bHR9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVJbnB1dHNBbmRPdXRwdXRzPWZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlSW5wdXRzKCksdGhpcy5fdXBkYXRlT3V0cHV0cygpfSxXZWJNaWRpLnByb3RvdHlwZS5fdXBkYXRlSW5wdXRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTx0aGlzLl9pbnB1dHMubGVuZ3RoO2krKyl7Zm9yKHZhciByZW1vdmU9ITAsdXBkYXRlZD10aGlzW1wiaW50ZXJmYWNlXCJdLmlucHV0cy52YWx1ZXMoKSxpbnB1dD11cGRhdGVkLm5leHQoKTtpbnB1dCYmIWlucHV0LmRvbmU7aW5wdXQ9dXBkYXRlZC5uZXh0KCkpaWYodGhpcy5faW5wdXRzW2ldLl9taWRpSW5wdXQ9PT1pbnB1dC52YWx1ZSl7cmVtb3ZlPSExO2JyZWFrfXJlbW92ZSYmdGhpcy5faW5wdXRzLnNwbGljZShpLDEpfXRoaXNbXCJpbnRlcmZhY2VcIl0mJnRoaXNbXCJpbnRlcmZhY2VcIl0uaW5wdXRzLmZvckVhY2goZnVuY3Rpb24obklucHV0KXtmb3IodmFyIGFkZD0hMCxqPTA7ajx0aGlzLl9pbnB1dHMubGVuZ3RoO2orKyl0aGlzLl9pbnB1dHNbal0uX21pZGlJbnB1dD09PW5JbnB1dCYmKGFkZD0hMSk7YWRkJiZ0aGlzLl9pbnB1dHMucHVzaCh0aGlzLl9jcmVhdGVJbnB1dChuSW5wdXQpKX0uYmluZCh0aGlzKSl9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVPdXRwdXRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTx0aGlzLl9vdXRwdXRzLmxlbmd0aDtpKyspe2Zvcih2YXIgcmVtb3ZlPSEwLHVwZGF0ZWQ9dGhpc1tcImludGVyZmFjZVwiXS5vdXRwdXRzLnZhbHVlcygpLG91dHB1dD11cGRhdGVkLm5leHQoKTtvdXRwdXQmJiFvdXRwdXQuZG9uZTtvdXRwdXQ9dXBkYXRlZC5uZXh0KCkpaWYodGhpcy5fb3V0cHV0c1tpXS5fbWlkaU91dHB1dD09PW91dHB1dC52YWx1ZSl7cmVtb3ZlPSExO2JyZWFrfXJlbW92ZSYmdGhpcy5fb3V0cHV0cy5zcGxpY2UoaSwxKX10aGlzW1wiaW50ZXJmYWNlXCJdJiZ0aGlzW1wiaW50ZXJmYWNlXCJdLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbihuT3V0cHV0KXtmb3IodmFyIGFkZD0hMCxqPTA7ajx0aGlzLl9vdXRwdXRzLmxlbmd0aDtqKyspdGhpcy5fb3V0cHV0c1tqXS5fbWlkaU91dHB1dD09PW5PdXRwdXQmJihhZGQ9ITEpO2FkZCYmdGhpcy5fb3V0cHV0cy5wdXNoKHRoaXMuX2NyZWF0ZU91dHB1dChuT3V0cHV0KSl9LmJpbmQodGhpcykpfSxXZWJNaWRpLnByb3RvdHlwZS5fY3JlYXRlSW5wdXQ9ZnVuY3Rpb24obWlkaUlucHV0KXt2YXIgaW5wdXQ9bmV3IElucHV0KG1pZGlJbnB1dCk7cmV0dXJuIGlucHV0Ll9taWRpSW5wdXQub25taWRpbWVzc2FnZT1pbnB1dC5fb25NaWRpTWVzc2FnZS5iaW5kKGlucHV0KSxpbnB1dH0sV2ViTWlkaS5wcm90b3R5cGUuX2NyZWF0ZU91dHB1dD1mdW5jdGlvbihtaWRpT3V0cHV0KXt2YXIgb3V0cHV0PW5ldyBPdXRwdXQobWlkaU91dHB1dCk7cmV0dXJuIG91dHB1dC5fbWlkaU91dHB1dC5vbm1pZGltZXNzYWdlPW91dHB1dC5fb25NaWRpTWVzc2FnZS5iaW5kKG91dHB1dCksb3V0cHV0fSxXZWJNaWRpLnByb3RvdHlwZS5fb25JbnRlcmZhY2VTdGF0ZUNoYW5nZT1mdW5jdGlvbihlKXt0aGlzLl91cGRhdGVJbnB1dHNBbmRPdXRwdXRzKCk7dmFyIGV2ZW50PXt0aW1lc3RhbXA6ZS50aW1lU3RhbXAsdHlwZTplLnBvcnQuc3RhdGV9O3RoaXNbXCJpbnRlcmZhY2VcIl0mJlwiY29ubmVjdGVkXCI9PT1lLnBvcnQuc3RhdGU/XCJvdXRwdXRcIj09PWUucG9ydC50eXBlP2V2ZW50LnBvcnQ9dGhpcy5nZXRPdXRwdXRCeUlkKGUucG9ydC5pZCk6XCJpbnB1dFwiPT09ZS5wb3J0LnR5cGUmJihldmVudC5wb3J0PXRoaXMuZ2V0SW5wdXRCeUlkKGUucG9ydC5pZCkpOmV2ZW50LnBvcnQ9e2Nvbm5lY3Rpb246XCJjbG9zZWRcIixpZDplLnBvcnQuaWQsbWFudWZhY3R1cmVyOmUucG9ydC5tYW51ZmFjdHVyZXIsbmFtZTplLnBvcnQubmFtZSxzdGF0ZTplLnBvcnQuc3RhdGUsdHlwZTplLnBvcnQudHlwZX0sdGhpcy5fdXNlckhhbmRsZXJzW2UucG9ydC5zdGF0ZV0uZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXtoYW5kbGVyKGV2ZW50KX0pfSxXZWJNaWRpLnByb3RvdHlwZS5fcmVzZXRJbnRlcmZhY2VVc2VySGFuZGxlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMubGVuZ3RoO2krKyl0aGlzLl91c2VySGFuZGxlcnNbdGhpcy5fbWlkaUludGVyZmFjZUV2ZW50c1tpXV09W119LElucHV0LnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYodm9pZCAwPT09Y2hhbm5lbCYmKGNoYW5uZWw9XCJhbGxcIiksQXJyYXkuaXNBcnJheShjaGFubmVsKXx8KGNoYW5uZWw9W2NoYW5uZWxdKSxjaGFubmVsLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7aWYoXCJhbGxcIiE9PWl0ZW0mJiEoaXRlbT49MSYmMTY+PWl0ZW0pKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlICdjaGFubmVsJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIil9KSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYod20uTUlESV9TWVNURU1fTUVTU0FHRVNbdHlwZV0pdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXXx8KHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV09W10pLHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV0ucHVzaChsaXN0ZW5lcik7ZWxzZXtpZighd20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7aWYoY2hhbm5lbC5pbmRleE9mKFwiYWxsXCIpPi0xKXtjaGFubmVsPVtdO2Zvcih2YXIgaj0xOzE2Pj1qO2orKyljaGFubmVsLnB1c2goail9dGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV18fCh0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXT1bXSksY2hhbm5lbC5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaF18fCh0aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaF09W10pLHRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoXS5wdXNoKGxpc3RlbmVyKX0pfXJldHVybiB0aGlzfSxJbnB1dC5wcm90b3R5cGUub249SW5wdXQucHJvdG90eXBlLmFkZExpc3RlbmVyLElucHV0LnByb3RvdHlwZS5oYXNMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgbGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbGlzdGVuZXInIHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO2lmKHZvaWQgMD09PWNoYW5uZWwmJihjaGFubmVsPVwiYWxsXCIpLGNoYW5uZWwuY29uc3RydWN0b3IhPT1BcnJheSYmKGNoYW5uZWw9W2NoYW5uZWxdKSx3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1t0eXBlXSl7Zm9yKHZhciBvPTA7bzx0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdLmxlbmd0aDtvKyspaWYodGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXVtvXT09PWxpc3RlbmVyKXJldHVybiEwfWVsc2UgaWYod20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXtpZihjaGFubmVsLmluZGV4T2YoXCJhbGxcIik+LTEpe2NoYW5uZWw9W107Zm9yKHZhciBqPTE7MTY+PWo7aisrKWNoYW5uZWwucHVzaChqKX1yZXR1cm4gdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV0/Y2hhbm5lbC5ldmVyeShmdW5jdGlvbihjaE51bSl7dmFyIGxpc3RlbmVycz10aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaE51bV07cmV0dXJuIGxpc3RlbmVycyYmbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpPi0xfSk6ITF9cmV0dXJuITF9LElucHV0LnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNoYW5uZWwsbGlzdGVuZXIpe3ZhciB0aGF0PXRoaXM7aWYodm9pZCAwIT09bGlzdGVuZXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZih2b2lkIDA9PT1jaGFubmVsJiYoY2hhbm5lbD1cImFsbFwiKSxjaGFubmVsLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjaGFubmVsPVtjaGFubmVsXSksd20uTUlESV9TWVNURU1fTUVTU0FHRVNbdHlwZV0paWYodm9pZCAwPT09bGlzdGVuZXIpdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXT1bXTtlbHNlIGZvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5sZW5ndGg7bysrKXRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV1bb109PT1saXN0ZW5lciYmdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5zcGxpY2UobywxKTtlbHNlIGlmKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFU1t0eXBlXSl7aWYoY2hhbm5lbC5pbmRleE9mKFwiYWxsXCIpPi0xKXtjaGFubmVsPVtdO2Zvcih2YXIgaj0xOzE2Pj1qO2orKyljaGFubmVsLnB1c2goail9aWYoIXRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdKXJldHVybiB0aGlzO2NoYW5uZWwuZm9yRWFjaChmdW5jdGlvbihjaE51bSl7dmFyIGxpc3RlbmVycz10aGF0Ll91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXVtjaE51bV07aWYobGlzdGVuZXJzKWlmKHZvaWQgMD09PWxpc3RlbmVyKXRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoTnVtXT1bXTtlbHNlIGZvcih2YXIgbD0wO2w8bGlzdGVuZXJzLmxlbmd0aDtsKyspbGlzdGVuZXJzW2xdPT09bGlzdGVuZXImJmxpc3RlbmVycy5zcGxpY2UobCwxKX0pfWVsc2V7aWYodm9pZCAwIT09dHlwZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBldmVudCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO3RoaXMuX2luaXRpYWxpemVVc2VySGFuZGxlcnMoKX1yZXR1cm4gdGhpc30sSW5wdXQucHJvdG90eXBlLl9pbml0aWFsaXplVXNlckhhbmRsZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciBwcm9wMSBpbiB3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMpd20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmhhc093blByb3BlcnR5KHByb3AxKSYmKHRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3Byb3AxXT17fSk7Zm9yKHZhciBwcm9wMiBpbiB3bS5NSURJX1NZU1RFTV9NRVNTQUdFUyl3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5oYXNPd25Qcm9wZXJ0eShwcm9wMikmJih0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3Byb3AyXT1bXSl9LElucHV0LnByb3RvdHlwZS5fb25NaWRpTWVzc2FnZT1mdW5jdGlvbihlKXtlLmRhdGFbMF08MjQwP3RoaXMuX3BhcnNlQ2hhbm5lbEV2ZW50KGUpOmUuZGF0YVswXTw9MjU1JiZ0aGlzLl9wYXJzZVN5c3RlbUV2ZW50KGUpfSxJbnB1dC5wcm90b3R5cGUuX3BhcnNlQ2hhbm5lbEV2ZW50PWZ1bmN0aW9uKGUpe3ZhciBkYXRhMSxkYXRhMixjb21tYW5kPWUuZGF0YVswXT4+NCxjaGFubmVsPSgxNSZlLmRhdGFbMF0pKzE7ZS5kYXRhLmxlbmd0aD4xJiYoZGF0YTE9ZS5kYXRhWzFdLGRhdGEyPWUuZGF0YS5sZW5ndGg+Mj9lLmRhdGFbMl06dm9pZCAwKTt2YXIgZXZlbnQ9e3RhcmdldDp0aGlzLGRhdGE6ZS5kYXRhLHRpbWVzdGFtcDplLnRpbWVTdGFtcCxjaGFubmVsOmNoYW5uZWx9O2NvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9mZnx8Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb24mJjA9PT1kYXRhMj8oZXZlbnQudHlwZT1cIm5vdGVvZmZcIixldmVudC5ub3RlPXtudW1iZXI6ZGF0YTEsbmFtZTp3bS5fbm90ZXNbZGF0YTElMTJdLG9jdGF2ZTp3bS5nZXRPY3RhdmUoZGF0YTEpfSxldmVudC52ZWxvY2l0eT1kYXRhMi8xMjcsZXZlbnQucmF3VmVsb2NpdHk9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9uPyhldmVudC50eXBlPVwibm90ZW9uXCIsZXZlbnQubm90ZT17bnVtYmVyOmRhdGExLG5hbWU6d20uX25vdGVzW2RhdGExJTEyXSxvY3RhdmU6d20uZ2V0T2N0YXZlKGRhdGExKX0sZXZlbnQudmVsb2NpdHk9ZGF0YTIvMTI3LGV2ZW50LnJhd1ZlbG9jaXR5PWRhdGEyKTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmtleWFmdGVydG91Y2g/KGV2ZW50LnR5cGU9XCJrZXlhZnRlcnRvdWNoXCIsZXZlbnQubm90ZT17bnVtYmVyOmRhdGExLG5hbWU6d20uX25vdGVzW2RhdGExJTEyXSxvY3RhdmU6d20uZ2V0T2N0YXZlKGRhdGExKX0sZXZlbnQudmFsdWU9ZGF0YTIvMTI3KTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNvbnRyb2xjaGFuZ2UmJmRhdGExPj0wJiYxMTk+PWRhdGExPyhldmVudC50eXBlPVwiY29udHJvbGNoYW5nZVwiLGV2ZW50LmNvbnRyb2xsZXI9e251bWJlcjpkYXRhMSxuYW1lOnRoaXMuZ2V0Q2NOYW1lQnlOdW1iZXIoZGF0YTEpfSxldmVudC52YWx1ZT1kYXRhMik6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsbW9kZSYmZGF0YTE+PTEyMCYmMTI3Pj1kYXRhMT8oZXZlbnQudHlwZT1cImNoYW5uZWxtb2RlXCIsZXZlbnQuY29udHJvbGxlcj17bnVtYmVyOmRhdGExLG5hbWU6dGhpcy5nZXRDaGFubmVsTW9kZUJ5TnVtYmVyKGRhdGExKX0sZXZlbnQudmFsdWU9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucHJvZ3JhbWNoYW5nZT8oZXZlbnQudHlwZT1cInByb2dyYW1jaGFuZ2VcIixldmVudC52YWx1ZT1kYXRhMSk6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsYWZ0ZXJ0b3VjaD8oZXZlbnQudHlwZT1cImNoYW5uZWxhZnRlcnRvdWNoXCIsZXZlbnQudmFsdWU9ZGF0YTEvMTI3KTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLnBpdGNoYmVuZD8oZXZlbnQudHlwZT1cInBpdGNoYmVuZFwiLGV2ZW50LnZhbHVlPSgoZGF0YTI8PDcpK2RhdGExLTgxOTIpLzgxOTIpOmV2ZW50LnR5cGU9XCJ1bmtub3duY2hhbm5lbG1lc3NhZ2VcIix0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFtldmVudC50eXBlXSYmdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbZXZlbnQudHlwZV1bY2hhbm5lbF0mJnRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW2V2ZW50LnR5cGVdW2NoYW5uZWxdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe2NhbGxiYWNrKGV2ZW50KX0pfSxJbnB1dC5wcm90b3R5cGUuZ2V0Q2NOYW1lQnlOdW1iZXI9ZnVuY3Rpb24obnVtYmVyKXtpZihudW1iZXI9cGFyc2VJbnQobnVtYmVyKSwhKG51bWJlcj49MCYmMTE5Pj1udW1iZXIpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2wgY2hhbmdlIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTE5LlwiKTtmb3IodmFyIGNjIGluIHdtLk1JRElfQ09OVFJPTF9DSEFOR0VfTUVTU0FHRVMpaWYobnVtYmVyPT09d20uTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFU1tjY10pcmV0dXJuIGNjO3JldHVybiB2b2lkIDB9LElucHV0LnByb3RvdHlwZS5nZXRDaGFubmVsTW9kZUJ5TnVtYmVyPWZ1bmN0aW9uKG51bWJlcil7aWYobnVtYmVyPXBhcnNlSW50KG51bWJlciksIShudW1iZXI+PTEyMCYmc3RhdHVzPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2wgY2hhbmdlIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMTIwIGFuZCAxMjcuXCIpO2Zvcih2YXIgY20gaW4gd20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVMpaWYobnVtYmVyPT09d20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVNbY21dKXJldHVybiBjbX0sSW5wdXQucHJvdG90eXBlLl9wYXJzZVN5c3RlbUV2ZW50PWZ1bmN0aW9uKGUpe3ZhciBjb21tYW5kPWUuZGF0YVswXSxldmVudD17dGFyZ2V0OnRoaXMsZGF0YTplLmRhdGEsdGltZXN0YW1wOmUudGltZVN0YW1wfTtjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3lzZXg/ZXZlbnQudHlwZT1cInN5c2V4XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnRpbWVjb2RlP2V2ZW50LnR5cGU9XCJ0aW1lY29kZVwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25ncG9zaXRpb24/ZXZlbnQudHlwZT1cInNvbmdwb3NpdGlvblwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25nc2VsZWN0PyhldmVudC50eXBlPVwic29uZ3NlbGVjdFwiLGV2ZW50LnNvbmc9ZS5kYXRhWzFdKTpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMudHVuaW5ncmVxdWVzdD9ldmVudC50eXBlPVwidHVuaW5ncmVxdWVzdFwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5jbG9jaz9ldmVudC50eXBlPVwiY2xvY2tcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RhcnQ/ZXZlbnQudHlwZT1cInN0YXJ0XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTW1wiY29udGludWVcIl0/ZXZlbnQudHlwZT1cImNvbnRpbnVlXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnN0b3A/ZXZlbnQudHlwZT1cInN0b3BcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuYWN0aXZlc2Vuc2luZz9ldmVudC50eXBlPVwiYWN0aXZlc2Vuc2luZ1wiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5yZXNldD9ldmVudC50eXBlPVwicmVzZXRcIjpldmVudC50eXBlPVwidW5rbm93bnN5c3RlbW1lc3NhZ2VcIix0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW2V2ZW50LnR5cGVdJiZ0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW2V2ZW50LnR5cGVdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe2NhbGxiYWNrKGV2ZW50KX0pfSxPdXRwdXQucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oc3RhdHVzLGRhdGEsdGltZXN0YW1wKXtpZighKHN0YXR1cz49MTI4JiYyNTU+PXN0YXR1cykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc3RhdHVzIGJ5dGUgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMTI4ICgweDgwKSBhbmQgMjU1ICgweEZGKS5cIik7dm9pZCAwPT09ZGF0YSYmKGRhdGE9W10pLEFycmF5LmlzQXJyYXkoZGF0YSl8fChkYXRhPVtkYXRhXSk7dmFyIG1lc3NhZ2U9W107cmV0dXJuIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXt2YXIgcGFyc2VkPXBhcnNlSW50KGl0ZW0pO2lmKCEocGFyc2VkPj0wJiYyNTU+PXBhcnNlZCkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJEYXRhIGJ5dGVzIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwICgweDAwKSBhbmQgMjU1ICgweEZGKS5cIik7bWVzc2FnZS5wdXNoKHBhcnNlZCl9KSx0aGlzLl9taWRpT3V0cHV0LnNlbmQoW3N0YXR1c10uY29uY2F0KG1lc3NhZ2UpLHBhcnNlRmxvYXQodGltZXN0YW1wKXx8MCksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3lzZXg9ZnVuY3Rpb24obWFudWZhY3R1cmVyLGRhdGEsb3B0aW9ucyl7aWYoIXdtLnN5c2V4RW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJTeXNleCBtZXNzYWdlIHN1cHBvcnQgbXVzdCBmaXJzdCBiZSBhY3RpdmF0ZWQuXCIpO3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LG1hbnVmYWN0dXJlcj1bXS5jb25jYXQobWFudWZhY3R1cmVyKSxkYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7aWYoMD5pdGVtfHxpdGVtPjEyNyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBkYXRhIGJ5dGVzIG9mIGEgc3lzZXggbWVzc2FnZSBtdXN0IGJlIGludGVnZXJzIGJldHdlZW4gMCAoMHgwMCkgYW5kIDEyNyAoMHg3RikuXCIpfSksZGF0YT1tYW51ZmFjdHVyZXIuY29uY2F0KGRhdGEsd20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3lzZXhlbmQpLHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zeXNleCxkYXRhLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRUaW1lY29kZVF1YXJ0ZXJGcmFtZT1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMudGltZWNvZGUsdmFsdWUsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFNvbmdQb3NpdGlvbj1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXt2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsb3B0aW9ucz1vcHRpb25zfHx7fTt2YXIgbXNiPXZhbHVlPj43JjEyNyxsc2I9MTI3JnZhbHVlO3JldHVybiB0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc29uZ3Bvc2l0aW9uLFttc2IsbHNiXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU29uZ1NlbGVjdD1mdW5jdGlvbih2YWx1ZSxvcHRpb25zKXtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSksb3B0aW9ucz1vcHRpb25zfHx7fSwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzb25nIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnNvbmdzZWxlY3QsW3ZhbHVlXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kVHVuaW5nUmVxdWVzdD1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMudHVuaW5ncmVxdWVzdCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENsb2NrPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5jbG9jayx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFN0YXJ0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zdGFydCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENvbnRpbnVlPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1tcImNvbnRpbnVlXCJdLHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3RvcD1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RvcCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZEFjdGl2ZVNlbnNpbmc9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmFjdGl2ZXNlbnNpbmcsW10sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFJlc2V0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5yZXNldCx2b2lkIDAsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc3RvcE5vdGU9ZnVuY3Rpb24obm90ZSxjaGFubmVsLG9wdGlvbnMpe2lmKFwiYWxsXCI9PT1ub3RlKXJldHVybiB0aGlzLnNlbmRDaGFubmVsTW9kZShcImFsbG5vdGVzb2ZmXCIsMCxjaGFubmVsLG9wdGlvbnMpO3ZhciBuVmVsb2NpdHk9NjQ7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sb3B0aW9ucy52ZWxvY2l0eT1wYXJzZUZsb2F0KG9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xMjcmJihuVmVsb2NpdHk9b3B0aW9ucy52ZWxvY2l0eSk6IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xJiYoblZlbG9jaXR5PTEyNypvcHRpb25zLnZlbG9jaXR5KSx0aGlzLl9jb252ZXJ0Tm90ZVRvQXJyYXkobm90ZSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXt3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb2ZmPDw0KSsoY2gtMSksW2l0ZW0sTWF0aC5yb3VuZChuVmVsb2NpdHkpXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSl9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnBsYXlOb3RlPWZ1bmN0aW9uKG5vdGUsY2hhbm5lbCxvcHRpb25zKXt2YXIgblZlbG9jaXR5PTY0O2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sb3B0aW9ucy52ZWxvY2l0eT1wYXJzZUZsb2F0KG9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xMjcmJihuVmVsb2NpdHk9b3B0aW9ucy52ZWxvY2l0eSk6IWlzTmFOKG9wdGlvbnMudmVsb2NpdHkpJiZvcHRpb25zLnZlbG9jaXR5Pj0wJiZvcHRpb25zLnZlbG9jaXR5PD0xJiYoblZlbG9jaXR5PTEyNypvcHRpb25zLnZlbG9jaXR5KSxvcHRpb25zLnRpbWU9dGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSksdGhpcy5fY29udmVydE5vdGVUb0FycmF5KG5vdGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7d20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9uPDw0KSsoY2gtMSksW2l0ZW0sTWF0aC5yb3VuZChuVmVsb2NpdHkpXSxvcHRpb25zLnRpbWUpfS5iaW5kKHRoaXMpKX0uYmluZCh0aGlzKSksb3B0aW9ucy5kdXJhdGlvbj1wYXJzZUZsb2F0KG9wdGlvbnMuZHVyYXRpb24pLG9wdGlvbnMuZHVyYXRpb24pe29wdGlvbnMuZHVyYXRpb248PTAmJihvcHRpb25zLmR1cmF0aW9uPTApO3ZhciBuUmVsZWFzZT02NDtvcHRpb25zLnJlbGVhc2U9cGFyc2VGbG9hdChvcHRpb25zLnJlbGVhc2UpLG9wdGlvbnMucmF3VmVsb2NpdHk/IWlzTmFOKG9wdGlvbnMucmVsZWFzZSkmJm9wdGlvbnMucmVsZWFzZT49MCYmb3B0aW9ucy5yZWxlYXNlPD0xMjcmJihuUmVsZWFzZT1vcHRpb25zLnJlbGVhc2UpOiFpc05hTihvcHRpb25zLnJlbGVhc2UpJiZvcHRpb25zLnJlbGVhc2U+PTAmJm9wdGlvbnMucmVsZWFzZTw9MSYmKG5SZWxlYXNlPTEyNypvcHRpb25zLnJlbGVhc2UpLHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoaXMuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLm5vdGVvZmY8PDQpKyhjaC0xKSxbaXRlbSxNYXRoLnJvdW5kKG5SZWxlYXNlKV0sKG9wdGlvbnMudGltZXx8d20udGltZSkrb3B0aW9ucy5kdXJhdGlvbil9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKX1yZXR1cm4gdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kS2V5QWZ0ZXJ0b3VjaD1mdW5jdGlvbihub3RlLGNoYW5uZWwscHJlc3N1cmUsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LDE+Y2hhbm5lbHx8Y2hhbm5lbD4xNil0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjaGFubmVsIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAxNi5cIik7cHJlc3N1cmU9cGFyc2VGbG9hdChwcmVzc3VyZSksKGlzTmFOKHByZXNzdXJlKXx8MD5wcmVzc3VyZXx8cHJlc3N1cmU+MSkmJihwcmVzc3VyZT0uNSk7dmFyIG5QcmVzc3VyZT1NYXRoLnJvdW5kKDEyNypwcmVzc3VyZSk7cmV0dXJuIHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmtleWFmdGVydG91Y2g8PDQpKyhjaC0xKSxbaXRlbSxuUHJlc3N1cmVdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ29udHJvbENoYW5nZT1mdW5jdGlvbihjb250cm9sbGVyLHZhbHVlLGNoYW5uZWwsb3B0aW9ucyl7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxcInN0cmluZ1wiPT10eXBlb2YgY29udHJvbGxlcil7aWYoY29udHJvbGxlcj13bS5NSURJX0NPTlRST0xfQ0hBTkdFX01FU1NBR0VTW2NvbnRyb2xsZXJdLCFjb250cm9sbGVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNvbnRyb2xsZXIgbmFtZS5cIil9ZWxzZSBpZihjb250cm9sbGVyPXBhcnNlSW50KGNvbnRyb2xsZXIpLCEoY29udHJvbGxlcj49MCYmMTE5Pj1jb250cm9sbGVyKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNvbnRyb2xsZXIgbnVtYmVycyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTE5LlwiKTtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJDb250cm9sbGVyIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jb250cm9sY2hhbmdlPDw0KSsoY2gtMSksW2NvbnRyb2xsZXIsdmFsdWVdLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0uYmluZCh0aGlzKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsY2hhbm5lbCx0aW1lKXt2YXIgdGhhdD10aGlzO2lmKHBhcmFtZXRlclswXT1wYXJzZUludChwYXJhbWV0ZXJbMF0pLCEocGFyYW1ldGVyWzBdPj0wJiZwYXJhbWV0ZXJbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDY1IHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYocGFyYW1ldGVyWzFdPXBhcnNlSW50KHBhcmFtZXRlclsxXSksIShwYXJhbWV0ZXJbMV0+PTAmJnBhcmFtZXRlclsxXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjb250cm9sNjQgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSgxMDEscGFyYW1ldGVyWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAwLHBhcmFtZXRlclsxXSxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX3NlbGVjdE5vblJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGNoYW5uZWwsdGltZSl7dmFyIHRoYXQ9dGhpcztpZihwYXJhbWV0ZXJbMF09cGFyc2VJbnQocGFyYW1ldGVyWzBdKSwhKHBhcmFtZXRlclswXT49MCYmcGFyYW1ldGVyWzBdPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2w2MyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO2lmKHBhcmFtZXRlclsxXT1wYXJzZUludChwYXJhbWV0ZXJbMV0pLCEocGFyYW1ldGVyWzFdPj0wJiZwYXJhbWV0ZXJbMV08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDYyIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTkscGFyYW1ldGVyWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTgscGFyYW1ldGVyWzFdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2V0Q3VycmVudFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24oZGF0YSxjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7aWYoZGF0YT1bXS5jb25jYXQoZGF0YSksZGF0YVswXT1wYXJzZUludChkYXRhWzBdKSwhKGRhdGFbMF0+PTAmJmRhdGFbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgbXNiIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoNixkYXRhWzBdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksZGF0YVsxXT1wYXJzZUludChkYXRhWzFdKSxkYXRhWzFdPj0wJiZkYXRhWzFdPD0xMjcmJndtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMzgsZGF0YVsxXSxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAxLDEyNyxjaGFubmVsLHt0aW1lOnRpbWV9KSx0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDEwMCwxMjcsY2hhbm5lbCx7dGltZTp0aW1lfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGRhdGEsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sIUFycmF5LmlzQXJyYXkocGFyYW1ldGVyKSl7aWYoIXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHBhcmFtZXRlciBpcyBub3QgYXZhaWxhYmxlLlwiKTtwYXJhbWV0ZXI9d20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdfXJldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0Ll9zZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMudGltZSksdGhhdC5fc2V0Q3VycmVudFJlZ2lzdGVyZWRQYXJhbWV0ZXIoZGF0YSxjaGFubmVsLG9wdGlvbnMudGltZSksdGhhdC5fZGVzZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKGNoYW5uZWwsb3B0aW9ucy50aW1lKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0Tm9uUmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsZGF0YSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhKHBhcmFtZXRlclswXT49MCYmcGFyYW1ldGVyWzBdPD0xMjcmJnBhcmFtZXRlclsxXT49MCYmcGFyYW1ldGVyWzFdPD0xMjcpKXRocm93IG5ldyBFcnJvcihcIlBvc2l0aW9uIDAgYW5kIDEgb2YgdGhlIDItcG9zaXRpb24gcGFyYW1ldGVyIGFycmF5IG11c3QgYm90aCBiZSBiZXR3ZWVuIDAgYW5kIDEyNy5cIik7cmV0dXJuIGRhdGE9W10uY29uY2F0KGRhdGEpLHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdE5vblJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9zZXRDdXJyZW50UmVnaXN0ZXJlZFBhcmFtZXRlcihkYXRhLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5pbmNyZW1lbnRSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhQXJyYXkuaXNBcnJheShwYXJhbWV0ZXIpKXtpZighd20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdKXRocm93IG5ldyBFcnJvcihcIlRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIGlzIG5vdCBhdmFpbGFibGUuXCIpO3BhcmFtZXRlcj13bS5NSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSW3BhcmFtZXRlcl19cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDk2LDAsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5kZWNyZW1lbnRSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMpe2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sIUFycmF5LmlzQXJyYXkocGFyYW1ldGVyKSl7aWYoIXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgaXMgbm90IGF2YWlsYWJsZS5cIik7cGFyYW1ldGVyPXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXX1yZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihwYXJhbWV0ZXIsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoaXMuc2VuZENvbnRyb2xDaGFuZ2UoOTcsMCxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pLHRoaXMuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihjaGFubmVsLG9wdGlvbnMudGltZSl9LmJpbmQodGhpcykpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0UGl0Y2hCZW5kUmFuZ2U9ZnVuY3Rpb24oc2VtaXRvbmVzLGNlbnRzLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHNlbWl0b25lcz1wYXJzZUludChzZW1pdG9uZXMpfHwwLCEoc2VtaXRvbmVzPj0wJiYxMjc+PXNlbWl0b25lcykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc2VtaXRvbmVzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYoY2VudHM9cGFyc2VJbnQoY2VudHMpfHwwLCEoY2VudHM+PTAmJjEyNz49Y2VudHMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNlbnRzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcInBpdGNoYmVuZHJhbmdlXCIsW3NlbWl0b25lcyxjZW50c10sY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0TW9kdWxhdGlvblJhbmdlPWZ1bmN0aW9uKHNlbWl0b25lcyxjZW50cyxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxzZW1pdG9uZXM9cGFyc2VJbnQoc2VtaXRvbmVzKXx8MCwhKHNlbWl0b25lcz49MCYmMTI3Pj1zZW1pdG9uZXMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHNlbWl0b25lcyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO2lmKGNlbnRzPXBhcnNlSW50KGNlbnRzKXx8MCwhKGNlbnRzPj0wJiYxMjc+PWNlbnRzKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjZW50cyB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJtb2R1bGF0aW9ucmFuZ2VcIixbc2VtaXRvbmVzLGNlbnRzXSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRNYXN0ZXJUdW5pbmc9ZnVuY3Rpb24odmFsdWUsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sdmFsdWU9cGFyc2VGbG9hdCh2YWx1ZSl8fDAsLTY1Pj12YWx1ZXx8dmFsdWU+PTY0KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBkZWNpbWFsIG51bWJlciBsYXJnZXIgdGhhbiAtNjUgYW5kIHNtYWxsZXIgdGhhbiA2NC5cIik7dmFyIGNvYXJzZT1wYXJzZUludCh2YWx1ZSkrNjQsZmluZT12YWx1ZS1wYXJzZUludCh2YWx1ZSk7ZmluZT1NYXRoLnJvdW5kKChmaW5lKzEpLzIqMTYzODMpO3ZhciBtc2I9ZmluZT4+NyYxMjcsbHNiPTEyNyZmaW5lO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJjaGFubmVsY29hcnNldHVuaW5nXCIsY29hcnNlLGNoYW5uZWwse3RpbWU6b3B0aW9ucy50aW1lfSksdGhhdC5zZXRSZWdpc3RlcmVkUGFyYW1ldGVyKFwiY2hhbm5lbGZpbmV0dW5pbmdcIixbbXNiLGxzYl0sY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0VHVuaW5nUHJvZ3JhbT1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUludCh2YWx1ZSksISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgcHJvZ3JhbSB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJ0dW5pbmdwcm9ncmFtXCIsdmFsdWUsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0VHVuaW5nQmFuaz1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsISh2YWx1ZT49MCYmMTI3Pj12YWx1ZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgYmFuayB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJ0dW5pbmdiYW5rXCIsdmFsdWUsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENoYW5uZWxNb2RlPWZ1bmN0aW9uKGNvbW1hbmQsdmFsdWUsY2hhbm5lbCxvcHRpb25zKXtpZihvcHRpb25zPW9wdGlvbnN8fHt9LFwic3RyaW5nXCI9PXR5cGVvZiBjb21tYW5kKXtpZihjb21tYW5kPXdtLk1JRElfQ0hBTk5FTF9NT0RFX01FU1NBR0VTW2NvbW1hbmRdLCFjb21tYW5kKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNoYW5uZWwgbW9kZSBtZXNzYWdlIG5hbWUuXCIpfWVsc2UgaWYoY29tbWFuZD1wYXJzZUludChjb21tYW5kKSwhKGNvbW1hbmQ+PTEyMCYmMTI3Pj1jb21tYW5kKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNoYW5uZWwgbW9kZSBudW1lcmljYWwgaWRlbnRpZmllcnMgbXVzdCBiZSBiZXR3ZWVuIDEyMCBhbmQgMTI3LlwiKTtpZih2YWx1ZT1wYXJzZUludCh2YWx1ZSl8fDAsMD52YWx1ZXx8dmFsdWU+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVmFsdWUgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMuY2hhbm5lbG1vZGU8PDQpKyhjaC0xKSxbY29tbWFuZCx2YWx1ZV0sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRQcm9ncmFtQ2hhbmdlPWZ1bmN0aW9uKHByb2dyYW0sY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30scHJvZ3JhbT1wYXJzZUludChwcm9ncmFtKSxcbmlzTmFOKHByb2dyYW0pfHwwPnByb2dyYW18fHByb2dyYW0+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiUHJvZ3JhbSBudW1iZXJzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5wcm9ncmFtY2hhbmdlPDw0KSsoY2gtMSksW3Byb2dyYW1dLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZENoYW5uZWxBZnRlcnRvdWNoPWZ1bmN0aW9uKHByZXNzdXJlLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztvcHRpb25zPW9wdGlvbnN8fHt9LHByZXNzdXJlPXBhcnNlRmxvYXQocHJlc3N1cmUpLChpc05hTihwcmVzc3VyZSl8fDA+cHJlc3N1cmV8fHByZXNzdXJlPjEpJiYocHJlc3N1cmU9LjUpO3ZhciBuUHJlc3N1cmU9TWF0aC5yb3VuZCgxMjcqcHJlc3N1cmUpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsYWZ0ZXJ0b3VjaDw8NCkrKGNoLTEpLFtuUHJlc3N1cmVdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFBpdGNoQmVuZD1mdW5jdGlvbihiZW5kLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LGJlbmQ9cGFyc2VGbG9hdChiZW5kKSxpc05hTihiZW5kKXx8LTE+YmVuZHx8YmVuZD4xKXRocm93IG5ldyBSYW5nZUVycm9yKFwiUGl0Y2ggYmVuZCB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gLTEgYW5kIDEuXCIpO3ZhciBuTGV2ZWw9TWF0aC5yb3VuZCgoYmVuZCsxKS8yKjE2MzgzKSxtc2I9bkxldmVsPj43JjEyNyxsc2I9MTI3Jm5MZXZlbDtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucGl0Y2hiZW5kPDw0KSsoY2gtMSksW2xzYixtc2JdLHRoYXQuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuX3BhcnNlVGltZVBhcmFtZXRlcj1mdW5jdGlvbih0aW1lKXt2YXIgcGFyc2VkLHZhbHVlO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0aW1lJiZcIitcIj09PXRpbWUuc3Vic3RyaW5nKDAsMSk/KHBhcnNlZD1wYXJzZUZsb2F0KHRpbWUpLHBhcnNlZCYmcGFyc2VkPjAmJih2YWx1ZT13bS50aW1lK3BhcnNlZCkpOihwYXJzZWQ9cGFyc2VGbG9hdCh0aW1lKSxwYXJzZWQ+d20udGltZSYmKHZhbHVlPXBhcnNlZCkpLHZhbHVlfSxPdXRwdXQucHJvdG90eXBlLl9jb252ZXJ0Tm90ZVRvQXJyYXk9ZnVuY3Rpb24obm90ZSl7dmFyIG5vdGVzPVtdO3JldHVybiBBcnJheS5pc0FycmF5KG5vdGUpfHwobm90ZT1bbm90ZV0pLG5vdGUuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtub3Rlcy5wdXNoKHdtLmd1ZXNzTm90ZU51bWJlcihpdGVtKSl9KSxub3Rlc30sT3V0cHV0LnByb3RvdHlwZS5fb25NaWRpTWVzc2FnZT1mdW5jdGlvbihlKXt9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmXCJvYmplY3RcIj09dHlwZW9mIGRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHdtfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9d206c2NvcGUuV2ViTWlkaXx8KHNjb3BlLldlYk1pZGk9d20pfSh0aGlzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VibWlkaS93ZWJtaWRpLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG5cXG52YXJ5aW5nIHZlYzMgdlZpZXdQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxuXFxuI2lmbmRlZiBGTEFUX1NIQURFRFxcblxcbiAgICB2YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXG5cXG4jZW5kaWZcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDx1dl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8dXYyX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxkaXNwbGFjZW1lbnRtYXBfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGVudm1hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y29sb3JfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8bW9ycGh0YXJnZXRfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHNraW5uaW5nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3BhcnNfdmVydGV4PlxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgI2luY2x1ZGUgPHV2X3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHV2Ml92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxjb2xvcl92ZXJ0ZXg+XFxuXFxuICAgICNpbmNsdWRlIDxiZWdpbm5vcm1hbF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxtb3JwaG5vcm1hbF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxza2luYmFzZV92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxza2lubm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGRlZmF1bHRub3JtYWxfdmVydGV4PlxcblxcbiAgICAjaW5jbHVkZSA8YmVnaW5fdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8cHJvamVjdF92ZXJ0ZXg+XFxuXFxuICAgIHZWaWV3UG9zaXRpb24gPSAtIG12UG9zaXRpb24ueHl6O1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgI2luY2x1ZGUgPHdvcmxkcG9zX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGVudm1hcF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxmb2dfdmVydGV4Plxcblxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIFBIT05HXFxuI2RlZmluZSBNX1BJIDMuMTRcXG5cXG51bmlmb3JtIHZlYzMgZGlmZnVzZTtcXG51bmlmb3JtIHZlYzMgZW1pc3NpdmU7XFxudW5pZm9ybSB2ZWMzIHNwZWN1bGFyO1xcbnVuaWZvcm0gZmxvYXQgc2hpbmluZXNzO1xcbnVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcXG5cXG51bmlmb3JtIGZsb2F0IHVUaW1lO1xcbnVuaWZvcm0gdmVjMyB1U3RyaXBlT3JpZW50YXRpb247XFxudW5pZm9ybSBmbG9hdCB1SW52ZXJ0O1xcbnVuaWZvcm0gdmVjMyB1U3F1YXJlO1xcbnVuaWZvcm0gZmxvYXQgdVdpZHRoO1xcbnVuaWZvcm0gZmxvYXQgdUhlaWdodDtcXG51bmlmb3JtIGZsb2F0IHVMZW5ndGg7XFxudW5pZm9ybSBmbG9hdCB1UHJvZ3Jlc3M7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDxwYWNraW5nPlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1dl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1djJfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8Zm9nX3BhcnNfZnJhZ21lbnQ+XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IGRpZmZ1c2VDb2xvciA9IHZlYzQoIGRpZmZ1c2UsIG9wYWNpdHkgKTtcXG4gICAgLy8gUmVmbGVjdGVkTGlnaHQgcmVmbGVjdGVkTGlnaHQgPSBSZWZsZWN0ZWRMaWdodCggdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICkgKTtcXG4gICAgLy8gdmVjMyB0b3RhbEVtaXNzaXZlUmFkaWFuY2UgPSBlbWlzc2l2ZTtcXG5cXG4gICAgdmVjNCBjb2xvciA9IGRpZmZ1c2VDb2xvcjtcXG5cXG4gICAgZmxvYXQgYWJzWCA9IGZsb29yKC1jb3MoKHVUaW1lICogMC4xICsgTV9QSSAqIHVTcXVhcmUueCAqICggKCB2VXYueCArIHVQcm9ncmVzcyArIDAuMTUgKSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcbiAgICBmbG9hdCBhYnNZID0gZmxvb3IoLWNvcygoTV9QSSAqIHVTcXVhcmUueSAqICggdlV2LnkgKiAyLiAtIDEuICkgKiAwLjUpKSkgKyAxLjtcXG5cXG4gICAgaWYgKCBhYnNYID4gMC4gfHwgYWJzWSA+IDAuICkge1xcbiAgICAgICBjb2xvciA9IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgY29sb3IgPSB2ZWM0KHZlYzMoMC4wICsgdUludmVydCksIGRpZmZ1c2VDb2xvci5hKTsgIFxcbiAgICB9XFxuXFxuICAgIC8vIGNvbG9yID0gdlV2LnggPiAxLiAtIHVQcm9ncmVzcyAgPyB2ZWM0KHZlYzMoMS4wIC0gdUludmVydCksIGRpZmZ1c2VDb2xvci5hKSA6IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICBcXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxuXFxuICAgICNpbmNsdWRlIDxmb2dfZnJhZ21lbnQ+XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZ3Jlc3NcblxuZnVuY3Rpb24gcHJvZ3Jlc3MoeGhyKSB7XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlclxuICB2YXIgZmluaXNoZWQgPSBmYWxzZVxuXG4gIGlmICh4aHIuYXR0YWNoRXZlbnQpIHtcbiAgICB4aHIuYXR0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgcmV0dXJuIGVtaXR0ZXJcbiAgfVxuXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzLCBmYWxzZSlcbiAgZnVuY3Rpb24gcHJvZ3Jlc3MoZXZlbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlXG4gICAgICA/IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsXG4gICAgICA6IDBcblxuICAgIGlmICghZmluaXNoZWQpIGVtaXR0ZXIuZW1pdCgnZGF0YSdcbiAgICAgICwgdmFsdWVcbiAgICAgICwgZXZlbnQudG90YWwgfHwgbnVsbFxuICAgIClcblxuICAgIGZpbmlzaGVkID0gdmFsdWUgPT09IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSAhPT0gJ2xvYWQnICYmICEvXihyZWFkeXxjb21wbGV0ZSkkL2cudGVzdChcbiAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnJlYWR5U3RhdGVcbiAgICApKSByZXR1cm5cblxuICAgIGlmIChmaW5pc2hlZCkgcmV0dXJuXG4gICAgaWYgKHhoci5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRvbmUsIGZhbHNlKVxuICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICAgIH0gZWxzZVxuICAgIGlmICh4aHIuZGV0YXRjaEV2ZW50KSB7XG4gICAgICB4aHIuZGV0YXRjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCBkb25lKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgnZGF0YScsIDEsIGV2ZW50LnRvdGFsIHx8IG51bGwpXG4gICAgZW1pdHRlci5lbWl0KCdkb25lJylcbiAgICBmaW5pc2hlZCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyLXByb2dyZXNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciB3aW5kb3cgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKFwiaXMtZnVuY3Rpb25cIilcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKFwicGFyc2UtaGVhZGVyc1wiKVxudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlWEhSXG5jcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcFxuY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0ID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiAobmV3IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCgpKSA/IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA6IHdpbmRvdy5YRG9tYWluUmVxdWVzdFxuXG5mb3JFYWNoQXJyYXkoW1wiZ2V0XCIsIFwicHV0XCIsIFwicG9zdFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgY3JlYXRlWEhSW21ldGhvZCA9PT0gXCJkZWxldGVcIiA/IFwiZGVsXCIgOiBtZXRob2RdID0gZnVuY3Rpb24odXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iail7XG4gICAgZm9yKHZhciBpIGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJhbXMgPSB1cmlcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyYW1zID0ge3VyaTp1cml9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB4dGVuZChvcHRpb25zLCB7dXJpOiB1cml9KVxuICAgIH1cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHBhcmFtc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVhIUihvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2JPbmNlKGVyciwgcmVzcG9uc2UsIGJvZHkpe1xuICAgICAgICBpZighY2FsbGVkKXtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2soZXJyLCByZXNwb25zZSwgYm9keSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkRnVuYywgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIC8vIENocm9tZSB3aXRoIHJlcXVlc3RUeXBlPWJsb2IgdGhyb3dzIGVycm9ycyBhcnJvdW5kIHdoZW4gZXZlbiB0ZXN0aW5nIGFjY2VzcyB0byByZXNwb25zZVRleHRcbiAgICAgICAgdmFyIGJvZHkgPSB1bmRlZmluZWRcblxuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlVGV4dCB8fCBnZXRYbWwoeGhyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGV2dCwgZmFpbHVyZVJlc3BvbnNlKVxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSAmIHByb2Nlc3MgdGhlIHJlc3BvbnNlIGluIGEgc3BlY2lhbCByZXNwb25zZSBvYmplY3RcbiAgICBmdW5jdGlvbiBsb2FkRnVuYygpIHtcbiAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICB2YXIgc3RhdHVzXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKG9wdGlvbnMudXNlWERSICYmIHhoci5zdGF0dXM9PT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vSUU4IENPUlMgR0VUIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZG9lc24ndCBoYXZlIGEgc3RhdHVzIGZpZWxkLCBidXQgYm9keSBpcyBmaW5lXG4gICAgICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICh4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBmYWlsdXJlUmVzcG9uc2VcbiAgICAgICAgdmFyIGVyciA9IG51bGxcblxuICAgICAgICBpZiAoc3RhdHVzICE9PSAwKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IGdldEJvZHkoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgICAgdXJsOiB1cmksXG4gICAgICAgICAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKXsgLy9yZW1lbWJlciB4aHIgY2FuIGluIGZhY3QgYmUgWERSIGZvciBDT1JTIGluIElFXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycyA9IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoXCJJbnRlcm5hbCBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGFcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luY1xuICAgIHZhciBpc0pzb24gPSBmYWxzZVxuICAgIHZhciB0aW1lb3V0VGltZXJcbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgdXJsOiB1cmksXG4gICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgIH1cblxuICAgIGlmIChcImpzb25cIiBpbiBvcHRpb25zICYmIG9wdGlvbnMuanNvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24gPT09IHRydWUgPyBib2R5IDogb3B0aW9ucy5qc29uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlYWR5c3RhdGVjaGFuZ2VcbiAgICB4aHIub25sb2FkID0gbG9hZEZ1bmNcbiAgICB4aHIub25lcnJvciA9IGVycm9yRnVuY1xuICAgIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb24uXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElFIG11c3QgZGllXG4gICAgfVxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHhoci5vbnRpbWVvdXQgPSBlcnJvckZ1bmNcbiAgICB4aHIub3BlbihtZXRob2QsIHVyaSwgIXN5bmMsIG9wdGlvbnMudXNlcm5hbWUsIG9wdGlvbnMucGFzc3dvcmQpXG4gICAgLy9oYXMgdG8gYmUgYWZ0ZXIgb3BlblxuICAgIGlmKCFzeW5jKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzXG4gICAgfVxuICAgIC8vIENhbm5vdCBzZXQgdGltZW91dCB3aXRoIHN5bmMgcmVxdWVzdFxuICAgIC8vIG5vdCBzZXR0aW5nIHRpbWVvdXQgb24gdGhlIHhociBvYmplY3QsIGJlY2F1c2Ugb2Ygb2xkIHdlYmtpdHMgZXRjLiBub3QgaGFuZGxpbmcgdGhhdCBjb3JyZWN0bHlcbiAgICAvLyBib3RoIG5wbSdzIHJlcXVlc3QgYW5kIGpxdWVyeSAxLnggdXNlIHRoaXMga2luZCBvZiB0aW1lb3V0LCBzbyB0aGlzIGlzIGJlaW5nIGNvbnNpc3RlbnRcbiAgICBpZiAoIXN5bmMgJiYgb3B0aW9ucy50aW1lb3V0ID4gMCApIHtcbiAgICAgICAgdGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICAgICAgYWJvcnRlZCA9IHRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgLy8gTWljcm9zb2Z0IEVkZ2UgYnJvd3NlciBzZW5kcyBcInVuZGVmaW5lZFwiIHdoZW4gc2VuZCBpcyBjYWxsZWQgd2l0aCB1bmRlZmluZWQgdmFsdWUuXG4gICAgLy8gWE1MSHR0cFJlcXVlc3Qgc3BlYyBzYXlzIHRvIHBhc3MgbnVsbCBhcyBib2R5IHRvIGluZGljYXRlIG5vIGJvZHlcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25hdWd0dXIveGhyL2lzc3Vlcy8xMDAuXG4gICAgeGhyLnNlbmQoYm9keSB8fCBudWxsKVxuXG4gICAgcmV0dXJuIHhoclxuXG5cbn1cblxuZnVuY3Rpb24gZ2V0WG1sKHhocikge1xuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cbiAgICB2YXIgZmlyZWZveEJ1Z1Rha2VuRWZmZWN0ID0geGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVhNTC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09IFwicGFyc2VyZXJyb3JcIlxuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcIlwiICYmICFmaXJlZm94QnVnVGFrZW5FZmZlY3QpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3hoci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=