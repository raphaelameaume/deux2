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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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

var _map = __webpack_require__(6);

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
            vertexShader: __webpack_require__(50),
            // fragmentShader: require('../shaders/bottom.frag.glsl'),
            fragmentShader: __webpack_require__(51),
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
exports.default = map;
function map(n, start1, stop1, start2, stop2) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// sourced from:
// http://www.leanbackplayer.com/test/h5mt.html
// https://github.com/broofa/node-mime/blob/master/types.json
var mimeTypes = __webpack_require__(33)

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

var _randomFromArray = __webpack_require__(32);

var _randomFromArray2 = _interopRequireDefault(_randomFromArray);

var _lucky = __webpack_require__(31);

var _lucky2 = _interopRequireDefault(_lucky);

var _map = __webpack_require__(6);

var _map2 = _interopRequireDefault(_map);

var _debounce = __webpack_require__(30);

var _debounce2 = _interopRequireDefault(_debounce);

var _MidiController = __webpack_require__(56);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _webAudioPlayer = __webpack_require__(45);

var _webAudioPlayer2 = _interopRequireDefault(_webAudioPlayer);

var _webAudioAnalyser = __webpack_require__(44);

var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);

var _analyserFrequencyAverage = __webpack_require__(26);

var _analyserFrequencyAverage2 = _interopRequireDefault(_analyserFrequencyAverage);

var _Range = __webpack_require__(29);

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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(40)
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var frequencyToIndex = __webpack_require__(27)

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(34)

module.exports = frequencyToIndex
function frequencyToIndex (frequency, sampleRate, frequencyBinCount) {
  var nyquist = sampleRate / 2
  var index = Math.round(frequency / nyquist * frequencyBinCount)
  return clamp(index, 0, frequencyBinCount)
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf = __webpack_require__(24);

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

var _MPKMini = __webpack_require__(55);

var _MPKMini2 = _interopRequireDefault(_MPKMini);

var _MidiController = __webpack_require__(56);

var _MidiController2 = _interopRequireDefault(_MidiController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var glslify = __webpack_require__(23);

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
                  var OrbitControls = __webpack_require__(25)(THREE);
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(43)
  , forEach = __webpack_require__(35)
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isDom = __webpack_require__(37)
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
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var buffer = __webpack_require__(46)
var media = __webpack_require__(48)

module.exports = webAudioPlayer
function webAudioPlayer (src, opt) {
  if (!src) throw new TypeError('must specify a src parameter')
  opt = opt || {}
  if (opt.buffer) return buffer(src, opt)
  else return media(src, opt)
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var canPlaySrc = __webpack_require__(10)
var createAudioContext = __webpack_require__(9)
var xhrAudio = __webpack_require__(49)
var EventEmitter = __webpack_require__(4).EventEmitter
var rightNow = __webpack_require__(41)
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
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var EventEmitter = __webpack_require__(4).EventEmitter
var createAudio = __webpack_require__(42).audio
var assign = __webpack_require__(38)

var resume = __webpack_require__(11)
var createAudioContext = __webpack_require__(9)
var canPlaySrc = __webpack_require__(10)
var addOnce = __webpack_require__(47)

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(53)
var xhrProgress = __webpack_require__(52)

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
/* 50 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 vUv;\nuniform float uTime;\n\n#ifndef FLAT_SHADED\n\n    varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n\n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n\n    #include <begin_vertex>\n    #include <project_vertex>\n\n    vViewPosition = - mvPosition.xyz;\n    vUv = uv;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <fog_vertex>\n\n}"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n#define M_PI 3.14\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float uTime;\nuniform vec3 uStripeOrientation;\nuniform float uInvert;\nuniform vec3 uSquare;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uLength;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <fog_pars_fragment>\n\nvoid main() {\n    vec4 diffuseColor = vec4( diffuse, opacity );\n    // ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n    // vec3 totalEmissiveRadiance = emissive;\n\n    vec4 color = diffuseColor;\n\n    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;\n    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;\n\n    if ( absX > 0. || absY > 0. ) {\n       color = vec4(vec3(1.0 - uInvert), diffuseColor.a);\n    } else {\n        color = vec4(vec3(0.0 + uInvert), diffuseColor.a);  \n    }\n\n    // color = vUv.x > 1. - uProgress  ? vec4(vec3(1.0 - uInvert), diffuseColor.a) : vec4(vec3(0.0 + uInvert), diffuseColor.a);\n    \n    gl_FragColor = color;\n\n    #include <fog_fragment>\n}"

/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(36)
var isFunction = __webpack_require__(8)
var parseHeaders = __webpack_require__(39)
var xtend = __webpack_require__(54)

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
/* 54 */
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
/* 55 */
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
/* 56 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTA3NTEyYzExODc1NTAxMjQzNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvbWFwLmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2F1ZGlvLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9yZXN1bWUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsc2xpZnkvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL2x1Y2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcmFuZG9tRnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvbWltZS10eXBlcy5qc29uIiwid2VicGFjazovLy8uL34vY2xhbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3ItZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwid2VicGFjazovLy8uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaWdodC1ub3cvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpbXBsZS1tZWRpYS1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9tZWRpYS1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9+L3hoci1wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3hoci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbmZpZy9NUEtNaW5pLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvTWlkaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJtaWRpL3dlYm1pZGkubWluLmpzIl0sIm5hbWVzIjpbIkV2ZW50c01hbmFnZXIiLCJldmVudCIsImRhdGEiLCJsaXN0ZW5lcnMiLCJldmVudHNMaXN0IiwiaSIsImxlbiIsImxlbmd0aCIsImZuIiwicHVzaCIsImxpc3RlbmVyIiwib2ZmIiwiXyIsIm9uIiwiY29uc29sZSIsIndhcm4iLCJ0YXJnZXRFdmVudHMiLCJ0YXJnZXQiLCJFdmVudHMiLCJLRVlCT0FSRCIsIktFWURPV04iLCJLRVlVUCIsIktFWVBSRVNTIiwiU1BBQ0VIT0xEIiwiU1BBQ0VVUCIsIlNQQUNFRE9XTiIsIlNPVU5EUyIsIkNBTlBMQVkiLCJFTkQiLCJMT1dLSUNLIiwiTUlERExFS0lDSyIsIkhJR0hLSUNLIiwiVFJFTU9MTyIsIlNUQVJUIiwiWFAiLCJVSSIsIkhJRERFTiIsIkFic3RyYWN0RmFjZSIsImdlb21ldHJ5IiwiY29sb3IiLCJuYW1lIiwic2lkZSIsIlRIUkVFIiwiRnJvbnRTaWRlIiwicGxhbmVHZW9tZXRyeSIsIm9uS2V5UHJlc3MiLCJvblNwYWNlSG9sZCIsIm9uU3RhcnQiLCJvbkhpZGRlblVJIiwidW5pZm9ybXMiLCJVbmlmb3Jtc1V0aWxzIiwiY2xvbmUiLCJTaGFkZXJMaWIiLCJ0eXBlIiwidmFsdWUiLCJDb2xvciIsIlZlY3RvcjMiLCJ3aW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsInN0YXJ0RGl2aXNpb25zIiwiVmVjdG9yMiIsIm9yaWVudGF0aW9ucyIsImR1cmF0aW9uIiwiZmFjdG9yIiwiZWFzZSIsIkV4cG8iLCJlYXNlT3V0IiwiZGVidWciLCJzdGFydGVkIiwiaXNTcGFjZURvd24iLCJpbml0R3VpIiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsInJlcXVpcmUiLCJmcmFnbWVudFNoYWRlciIsImxpZ2h0cyIsInRyYW5zcGFyZW50IiwiZm9nIiwibWVzaCIsIk1lc2giLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyIsImFkZCIsImlzT3BlbiIsImd1aSIsImFkZEZvbGRlciIsIm9wZW4iLCJ0aW1lIiwidXBkYXRlRGl2aXNpb25zIiwib3JpZW50YXRpb25OYW1lIiwic2NhbGFyIiwib3JpZW50YXRpb24iLCJtdWx0aXBseVNjYWxhciIsIngiLCJ5IiwieiIsInNwZWVkIiwic3BlZWRNaW4iLCJ0bCIsIlRpbWVsaW5lTGl0ZSIsImJsYWNrTW9kZSIsInNob3ciLCJ0byIsImhpZGUiLCJrZXkiLCJUd2Vlbk1heCIsImludmVydCIsIlRpbWVsaW5lTWF4IiwidVByb2dyZXNzIiwib25Db21wbGV0ZSIsInNldCIsImZyb21UbyIsIk9iamVjdDNEIiwibWFwIiwibiIsInN0YXJ0MSIsInN0b3AxIiwic3RhcnQyIiwic3RvcDIiLCJGYWNlc0NvbnRyb2xsZXIiLCJjb250YWluZXIiLCJmYWNlcyIsImRpdmlzaW9ucyIsImdlbmVyYXRlRGl2aXNpb25zIiwibGFzdFgiLCJsYXN0WSIsImFsbG93SW52ZXJ0Iiwic3BlZWRDb250YWluZXIiLCJmaXJzdFNwYWNlVXAiLCJoaWdoa2lja2VkIiwibG93a2lja2VkIiwiZGlyZWN0aW9uIiwib25Mb3dLaWNrIiwib25NaWRkbGVLaWNrIiwib25IaWdoS2ljayIsIm9uVHJlbW9sbyIsIm9uVUlIaWRkZW4iLCJvblNvdW5kRW5kIiwib25TcGFjZVVwIiwib25TcGFjZURvd24iLCJibGFja01vZGVWZXJ0aWNhbCIsImJsYWNrTW9kZUhvcml6b250YWwiLCJibGFja01vZGVUdW5uZWxUb3AiLCJibGFja01vZGVUdW5uZWxCb3R0b20iLCJibGFja01vZGVCb3R0b20iLCJibGFja01vZGVGdWxsIiwiYmxhY2tNb2RlcyIsInNldEJsYWNrTW9kZSIsImNoYW5nZVNjYWxlIiwicmVhY3Rpb25zIiwiY2hhbmdlU2NhbGVYIiwiY2hhbmdlU2NhbGVZIiwiY2hhbmdlU2NhbGVCb3RoIiwic2NhbGluZ3MiLCJvblBhZERvd24iLCJPYmplY3QiLCJrZXlzIiwib25Lbm9iQ2hhbmdlIiwiaWQiLCJmYWNlIiwibWluIiwibWF4IiwiYmV0d2VlbiIsInBvc3NpYmxlRGl2aXNpb25YIiwiZmluZERpdmlzaW9ucyIsInJkbVhJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRpdmlzaW9uWCIsImluZGV4T2YiLCJwb3NzaWJsZURpdmlzaW9uWSIsInJkbVlJbmRleCIsImRpdmlzaW9uWSIsInNldFN0cmlwZXMiLCJhbGwiLCJjdXJyZW50IiwicmFuZ2UiLCJkaXZpc2lvbiIsImluZGV4IiwiZmlsdGVyIiwic291bmRFbmRlZCIsInJkbSIsImVtaXQiLCJyZXNldCIsIm9uRW5kIiwib3B0aW9ucyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInNjYWxlIiwicm90YXRpb24iLCJ1cGRhdGUiLCJwcm9ncmVzcyIsImVhc2VJbk91dCIsIk1vdXNlTWFuYWdlciIsImNoZWNrTW91c2VTcGVlZCIsIm1vdXNlU3BlZWRYIiwibW91c2VTcGVlZFkiLCJtb3VzZUxhc3RYIiwibW91c2VMYXN0WSIsIm1vdXNlRGlyZWN0aW9uWCIsIm1vdXNlRGlyZWN0aW9uWSIsIm1vdXNlWCIsIm1vdXNlWSIsInNldEludGVydmFsIiwiZ2V0U3BlZWQiLCJhZGRFdmVudExpc3RlbmVyIiwibW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldERpcmVjdGlvbiIsInBhZ2VYIiwicGFnZVkiLCJLZXlib2FyZENvbnRyb2xsZXIiLCJvbktleVVwIiwib25LZXlEb3duIiwiQmFja2dyb3VuZCIsIkJvdHRvbSIsImhvcml6b250YWwiLCJob3Jpem9udGFsU2tldzEiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU2tldzEiLCJ2ZXJ0aWNhbFNrZXcyIiwidmlzaWJpbGl0eVRvZ2dsZXIiLCJ2aXNpYmlsaXR5SGlkZXIiLCJ2aXNpYmlsaXR5U2hvd2VyIiwiTGVmdCIsIlJpZ2h0IiwiQmFja1NpZGUiLCJUb3AiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJTb3VuZE1hbmFnZXIiLCJiYXNzIiwibWlkQmFzcyIsInZvaWNlIiwiZHJ1bSIsInBhdXNlIiwiYXNzZXRzIiwic291cmNlcyIsImludHJvIiwieHAiLCJzdGFydCIsImluaXRTb3VuZCIsImxvd0tpY2siLCJtaWRkbGVLaWNrIiwidHJlbW9sbyIsImhpZ2hLaWNrIiwicmFuZ2VzIiwic291bmRHdWkiLCJvbkNoYW5nZSIsInBsYXllciIsInBsYXkiLCJwbGF5ZXJzIiwiYXVkaW8iLCJhbmFseXNlciIsIm5vZGUiLCJBdWRpbyIsInZvbHVtZSIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiYXVkaWJsZSIsInN0ZXJlbyIsImxvYWRlZCIsInNyYyIsImZyZXFzIiwiZnJlcXVlbmNpZXMiLCJsZXZlbCIsInF1ZXVlIiwic21vb3RoIiwiY29lZmYiLCJsb2ciLCJpbml0IiwidW5kZWZpbmVkIiwiRXJyb3IiLCIkd3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRsb2dvIiwiJGFjdGlvbiIsIiRhY3Rpb25MYWJlbCIsIiRhY3Rpb25GaWxsIiwiJHR1dG8iLCIkY3JlZGl0cyIsIiRjcmVkaXRJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkcHJvZ3Jlc3NGaWxsIiwiJGhlbHAiLCIkYmFja2dyb3VuZCIsIm5vdyIsIkRhdGUiLCJtYXhUaW1lIiwiaGVscElzT3BlbiIsImlzQ29tcGxldGVkIiwibWluRmlsbCIsIm1heEZpbGwiLCJmaWxsIiwicmVzZXR0ZWQiLCJpc0Rvd24iLCJwYXVzZWQiLCJMaW5lYXIiLCJlYXNlTm9uZSIsImNzcyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJvbkVuZFhQIiwib25DbGlja0hlbHAiLCJ0bEhlbHBTaG93IiwidGxIZWxwSGlkZSIsImRpc3BsYXkiLCJ0aW1lU2NhbGUiLCJyZXZlcnNlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiaW5uZXJIVE1MIiwia2lsbCIsInJlc3RhcnQiLCJzdGFnZ2VyRnJvbVRvIiwiQXJyYXkiLCJmcm9tIiwiZGlzcGxheUNyZWRpdHMiLCJwcmV2ZW50RGVmYXVsdCIsImdsc2xpZnkiLCJBcHAiLCJ1aUhpZGRlbiIsImJhY2tncm91bmRDb2xvciIsImZhY2VzQ29udHJvbGxlciIsImtleWJvYXJkQ29udHJvbGxlciIsInJlc2l6ZSIsImJpbmRMaXN0ZW5lcnMiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0U2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldENsZWFyQ29sb3IiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwiUENGU29mdFNoYWRvd01hcCIsIldBR05FUiIsInZlcnRleFNoYWRlcnNQYXRoIiwiZnJhZ21lbnRTaGFkZXJzUGF0aCIsImNvbXBvc2VyIiwiQ29tcG9zZXIiLCJibG9vbVdpZHRoIiwiaXNUb3VjaCIsImJsb29tSGVpZ2h0IiwiYmxvb21QYXNzIiwiTXVsdGlQYXNzQmxvb21QYXNzIiwicGFyYW1zIiwic3RyZW5ndGgiLCJibHVyQW1vdW50IiwiYXBwbHlab29tQmx1ciIsInpvb21CbHVyU3RyZW5ndGgiLCJ6b29tQmx1ckNlbnRlciIsInJnYlBhc3MiLCJSR0JTcGxpdFBhc3MiLCJkZWx0YSIsIm5vaXNlUGFzcyIsIk5vaXNlUGFzcyIsImFtb3VudCIsInZpZ25ldHRlUGFzcyIsIlZpZ25ldHRlUGFzcyIsImZ4YWFQYXNzIiwiRlhBQVBhc3MiLCJzY2VuZSIsIlNjZW5lIiwiRm9nIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsImxvb2tBdCIsImFkZENvbnRyb2xzIiwiYWRkTGlnaHRzIiwiYWRkRWxlbWVudHMiLCJPcmJpdENvbnRyb2xzIiwiZGl2aXNhdG9yIiwiUGxhbmVHZW9tZXRyeSIsIm90aGVyR2VvbWV0cnkiLCJsZWZ0UmlnaHRHZW9tZXRyeSIsInRvcEJvdHRvbUdlb21ldHJ5IiwiYmFja2dyb3VuZEdlb21ldHJ5IiwiUEkiLCJyZWdpc3RlciIsInNlbnMiLCJkZWxheSIsInJlbmRlciIsInBhc3MiLCJ0b1NjcmVlbiIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJSYW5nZSIsIm1pbkxldmVsIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJhcmdzIiwiY29udGV4dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImx1Y2t5IiwiY2hhbmNlcyIsInJhbmRvbUZyb21BcnJheSIsImFycmF5IiwiY29uZmlnIiwicGFkcyIsIm51bWJlciIsImtub2JzIiwiTWlkaUNvbnRyb2xsZXIiLCJpbnN0YW5jZSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJvbk1lc3NhZ2UiLCJlbmFibGUiLCJlcnIiLCJuYXZpZ2F0b3IiLCJyZXF1ZXN0TUlESUFjY2VzcyIsInN5c2V4IiwidGhlbiIsImFsZXJ0IiwiaW5wdXRzIiwiaW5wdXQiLCJwYXJzZUNvbmZpZyIsImFkZExpc3RlbmVyIiwic3Vic2NyaXB0aW9ucyIsImoiLCJjaGFubmVsIiwiY2FsbGJhY2siLCJub3RlIiwidmVsb2NpdHkiLCJjb250cm9sbGVyIiwiZXJyb3IiLCJmaW5kTnVtYmVySW5QYWRzIiwiZmluZE51bWJlckluS25vYnMiLCJyZWdpc3RlclBhZCIsInJlZ2lzdGVyS25vYiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7O0lB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Qy9OZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzdTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FB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RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNkNBQTZDO0FBQzdDOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsNkNBQTZDO0FBQzdDOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUgscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUErQzs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7Ozs7Ozs7QUMzL0JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGFBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7O0FB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RUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQzdFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3TEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUMvQkEsOERB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LHFEQUFxRCxpQkFBaUIseUxBQXlMLHFEQUFxRCxhQUFhLHNFQUFzRSxxQ0FBcUMsUUFBUSw4Q0FBOEMsdUZBQTZFLFVBQVU7QUFBQSxvTUFBaUcsTyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEwNzUxMmMxMTg3NTUwMTI0MzRkIiwiLyoqXG4gKiBFdmVudHMgTWFuYWdlclxuICogYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9ibG9iL21hc3Rlci9pbmRleC5qc1xuICovXG5cbmNsYXNzIEV2ZW50c01hbmFnZXIge1xuXG4gICAgLyoqXG4gICAgICogRW1pdCBldmVudFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHN0YXRpYyBlbWl0ICggZXZlbnQsIGRhdGEgPSBudWxsICkge1xuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICAgICAgaWYoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIGxpc3RlbmVyc1tpXS5mbiggZGF0YSApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgb24gKCBldmVudCwgZm4gKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0V2ZW50c01hbmFnZXIgOjogT04gOjonLCBldmVudCk7XG5cbiAgICAgICAgaWYoIUV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdCkgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0ID0ge307XG5cbiAgICAgICAgaWYoIUV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0pIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0gPSBbXTsgLy8gaW1wcm92ZSAoLl8uKVxuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF0ucHVzaCh7Zm46Zm59KTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBvbmNlKCBldmVudCwgZm4gKSB7XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoIGRhdGEgKSA9PntcblxuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGZuKGRhdGEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3RlbmVyLl8gPSBmbjtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbiggZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBvZmYgKCBldmVudCwgZm4gKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdO1xuXG4gICAgICAgIGlmKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzTWFuYWdlciA6OiBPZmYgOjogQ3VycmVudGx5IG5vIGxpc3RlbmVycyBmb3IgdGhpcyBldmVudCA6ICcsIGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFmbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHNNYW5hZ2VyIDo6IE9mZiA6OiBDYWxsYmFjayBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldEV2ZW50cyA9IFtdO1xuXG4gICAgICAgIGZvciggbGV0IGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGxpc3RlbmVyc1tpXTtcblxuICAgICAgICAgICAgaWYodGFyZ2V0LmZuICE9PSBmbiAmJiB0YXJnZXQuZm4uXyAhPT0gZm4gKSB7IC8vICguX18uKSA/P1xuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKCB0YXJnZXRFdmVudHMubGVuZ3RoID7CoDAgKVxuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSA9IHRhcmdldEV2ZW50cztcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGRlbGV0ZSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZXZlbnRzL0V2ZW50c01hbmFnZXIuanMiLCIvKipcbiAqIEUgViBFIE4gVCBTXG4gKi9cblxuY29uc3QgRXZlbnRzID0ge1xuICAgIEtFWUJPQVJEOiB7XG4gICAgICAgIEtFWURPV046IFwiS0VZQk9BUkRfS0VZRE9XTlwiLFxuICAgICAgICBLRVlVUDogXCJLRVlCT0FSRF9LRVlVUFwiLFxuICAgICAgICBLRVlQUkVTUzogXCJLRVlCT0FSRF9LRVlQUkVTU1wiLFxuICAgICAgICBTUEFDRUhPTEQ6IFwiS0VZQk9BUkRfU1BBQ0VIT0xEXCIsXG4gICAgICAgIFNQQUNFVVA6IFwiS0VZQk9BUkRfU1BBQ0VVUFwiLFxuICAgICAgICBTUEFDRURPV046IFwiS0VZQk9BUkRfU1BBQ0VET1dOXCIsXG4gICAgfSxcbiAgICBTT1VORFM6IHtcbiAgICAgICAgQ0FOUExBWTogXCJTT1VORFNfQ0FOUExBWVwiLFxuICAgICAgICBFTkQ6IFwiU09VTkRTX0VORFwiLFxuICAgICAgICBMT1dLSUNLOiBcIlNPVU5EU19MT1dLSUNLXCIsXG4gICAgICAgIE1JRERMRUtJQ0s6IFwiU09VTkRTX01JRERMRUtJQ0tcIixcbiAgICAgICAgSElHSEtJQ0s6IFwiU09VTkRTX0hJR0hLSUNLXCIsXG4gICAgICAgIFRSRU1PTE86IFwiU09VTkRTX1RSRU1PTE9cIixcbiAgICAgICAgU1RBUlQ6IFwiU09VTkRTX1NUQVJUXCIsXG4gICAgICAgIEVORDogXCJTT1VORFNfRU5EXCIsXG4gICAgfSxcbiAgICBYUDoge1xuICAgICAgICBTVEFSVDogXCJYUF9TVEFSVFwiLFxuICAgICAgICBFTkQ6IFwiWFBfRU5EXCIsXG4gICAgfSxcbiAgICBVSToge1xuICAgICAgICBISURERU46IFwiVUlfSElEREVOXCIsXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZXZlbnRzL0V2ZW50cy5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgbWFwIGZyb20gJy4uL3V0aWxzL21hcCc7XG5cbmNsYXNzIEFic3RyYWN0RmFjZSBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yID0gMHgyNDI0MjUsIG5hbWUsIHNpZGUgPSBUSFJFRS5Gcm9udFNpZGUgKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wbGFuZUdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gOjp0aGlzLm9uS2V5UHJlc3M7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuICAgICAgICB0aGlzLm9uSGlkZGVuVUkgPSA6OnRoaXMub25IaWRkZW5VSTtcblxuICAgICAgICB0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZShUSFJFRS5TaGFkZXJMaWJbJ3Bob25nJ10udW5pZm9ybXMpO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddID0geyB0eXBlOidmJywgdmFsdWU6IDAuMCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWydkaWZmdXNlJ10gPSB7IHR5cGU6ICdjJywgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihjb2xvcikgfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10gPSB7IHR5cGU6ICd2MycsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IDAuMCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10gPSB7IHR5cGU6ICd2MycsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1V2lkdGgnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93LndpZHRoIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VIZWlnaHQnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93LmhlaWdodCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1TGVuZ3RoJ10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IHdpbmRvdy5sZW5ndGggfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10gPSB7IHR5cGU6ICdmJywgdmFsdWU6IDAuMCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgPSAxLjA7XG5cbiAgICAgICAgdGhpcy5zdGFydERpdmlzaW9ucyA9IG5ldyBUSFJFRS5WZWN0b3IyKDksIDEzKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4zO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDE7XG4gICAgICAgIHRoaXMuZWFzZSA9IEV4cG8uZWFzZU91dDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuXG4gICAgICAgIGlmICggdGhpcy5kZWJ1ZyApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEd1aShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vc2hhZGVycy9ib3R0b20udmVydC5nbHNsJyksXG4gICAgICAgICAgICAvLyBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vc2hhZGVycy9ib3R0b20uZnJhZy5nbHNsJyksXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vc2hhZGVycy9wcm9ncmVzcy5mcmFnLmdsc2wnKSxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgICAgICAgbGlnaHRzOiBmYWxzZSxcbiAgICAgICAgICAgIHNpZGU6IHNpZGUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGZvZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbGFuZUdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5tZXNoLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc2gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMubWVzaCk7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIC8vIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgdGhpcy5vblNwYWNlSG9sZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLlNUQVJULCB0aGlzLm9uU3RhcnQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5VSS5ISURERU4sIHRoaXMub25IaWRkZW5VSSk7XG4gICAgfVxuXG4gICAgaW5pdEd1aSAoIGlzT3BlbiApIHtcbiAgICAgICAgdGhpcy5ndWkgPSB3aW5kb3cuZ3VpLmFkZEZvbGRlcih0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd4JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHgnKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneScsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB5Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3onLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geicpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneCcsIDAsIDEwMCkubmFtZSgnU3BhY2UgeCcpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneScsIDAsIDEwMCkubmFtZSgnU3BhY2UgeScpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCAneicsIDAsIDEwMCkubmFtZSgnU3BhY2UgeicpO1xuICAgICAgICBcbiAgICAgICAgaXNPcGVuICYmIHRoaXMuZ3VpLm9wZW4oKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCB0aW1lICkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddLnZhbHVlID0gdGltZTtcbiAgICB9XG5cbiAgICBzZXRQbGFpbkNvbG9yICggY29sb3IgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKDAsIDApO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCBvcmllbnRhdGlvbk5hbWUsIHNjYWxhciA9IDEsIGR1cmF0aW9uID0gMiApIHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uc1tvcmllbnRhdGlvbk5hbWVdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBvcmllbnRhdGlvbiApIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gb3JpZW50YXRpb24uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihzY2FsYXIpOyAvLyByb3NhY2VcblxuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueCA9IGNsb25lLng7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS55ID0gY2xvbmUueTtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnogPSBjbG9uZS56O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV2ZXJzZVN0cmlwZXMgKCkge1xuICAgICAgICAvLyB0aGlzLmZhY3RvciA9IC10aGlzLmZhY3RvcjtcbiAgICB9XG5cbiAgICBjaGFuZ2VTcGVlZCAoIHNwZWVkID0gdGhpcy5zcGVlZE1pbiApIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIH1cblxuICAgIGludmVydCAoKSB7XG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuXG4gICAgICAgIGlmICggdGhpcy5ibGFja01vZGUgKSB7XG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGwuYWRkKHRoaXMuc2hvdygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvID0gdGhpcy51bmlmb3Jtc1sndUludmVydCddLnZhbHVlID09PSAxLjAgPyAwLiA6IDEuO1xuICAgICAgICB0bC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IHRvLCBlYXNlOiB0aGlzLmVhc2UsIH0sIDApO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHRvZ2dsZVZpc2liaWxpdHkgKCkge1xuICAgICAgICBpZiAoIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSApIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZGF0YSApIHtcbiAgICAgICAgc3dpdGNoICggZGF0YS5rZXkgKSB7XG4gICAgICAgICAgICAvLyBjYXNlICdwJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFBsYWluQ29sb3IoMHgwMDAwMDApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdoJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0cmlwZXMoJ2hvcml6b250YWwnLCAxKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAndic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdHJpcGVzKCd2ZXJ0aWNhbCcsIDEpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdpJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmludmVydCgpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICdyJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJldmVyc2VTdHJpcGVzKCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5VG9nZ2xlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlIaWRlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlTaG93ZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93ICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMSwgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAwLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGl2aXNpb25zICggeCwgeSwgaW52ZXJ0ID0gdHJ1ZSApIHtcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgICB0bC50byh0aGlzLnVuaWZvcm1zWyd1U3F1YXJlJ10udmFsdWUsIHRoaXMuZHVyYXRpb24sIHsgeDogeCwgeTogeSwgZWFzZTogdGhpcy5lYXNlIH0sIDApO1xuXG4gICAgICAgIC8vIGlmICggaW52ZXJ0ICkge1xuICAgICAgICAvLyAgICAgdGwuYWRkKHRoaXMuaW52ZXJ0KCksIDApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHNldEJsYWNrTW9kZSAoKSB7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAxLjAsIGVhc2U6IHRoaXMuZWFzZSwgfSk7XG4gICAgfVxuXG4gICAgb25TcGFjZUhvbGQgKCB1UHJvZ3Jlc3MgKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLnZhbHVlID0gdVByb2dyZXNzO1xuICAgIH1cblxuICAgIG9uRW5kICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDI7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuc2V0KHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgeyB4OiAxLCB5OiAxLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgZHVyYXRpb24sIHsgdmFsdWU6IDAuMCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC5mcm9tVG8odGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10sIGR1cmF0aW9uLCB7IHZhbHVlOiAxLjggfSwgeyB2YWx1ZTogMC4wLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUludmVydCddLnZhbHVlID0gMC4wO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBvbkhpZGRlblVJICgpIHtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RGYWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQWJzdHJhY3RGYWNlLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAgKG4sIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgICByZXR1cm4gKChuIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpICogKHN0b3AyIC0gc3RhcnQyKSArIHN0YXJ0Mjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9tYXAuanMiLCIvLyBzb3VyY2VkIGZyb206XG4vLyBodHRwOi8vd3d3LmxlYW5iYWNrcGxheWVyLmNvbS90ZXN0L2g1bXQuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLW1pbWUvYmxvYi9tYXN0ZXIvdHlwZXMuanNvblxudmFyIG1pbWVUeXBlcyA9IHJlcXVpcmUoJy4vbWltZS10eXBlcy5qc29uJylcblxudmFyIG1pbWVMb29rdXAgPSB7fVxuT2JqZWN0LmtleXMobWltZVR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIGV4dGVuc2lvbnMgPSBtaW1lVHlwZXNba2V5XVxuICBleHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4dCkge1xuICAgIG1pbWVMb29rdXBbZXh0XSA9IGtleVxuICB9KVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb29rdXAgKGV4dCkge1xuICBpZiAoIWV4dCkgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzcGVjaWZ5IGV4dGVuc2lvbiBzdHJpbmcnKVxuICBpZiAoZXh0LmluZGV4T2YoJy4nKSA9PT0gMCkge1xuICAgIGV4dCA9IGV4dC5zdWJzdHJpbmcoMSlcbiAgfVxuICByZXR1cm4gbWltZUxvb2t1cFtleHQudG9Mb3dlckNhc2UoKV1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb25cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmbikge1xuICB2YXIgc3RyaW5nID0gdG9TdHJpbmcuY2FsbChmbilcbiAgcmV0dXJuIHN0cmluZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fFxuICAgICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgc3RyaW5nICE9PSAnW29iamVjdCBSZWdFeHBdJykgfHxcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgLy8gSUU4IGFuZCBiZWxvd1xuICAgICAoZm4gPT09IHdpbmRvdy5zZXRUaW1lb3V0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmFsZXJ0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmNvbmZpcm0gfHxcbiAgICAgIGZuID09PSB3aW5kb3cucHJvbXB0KSlcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBdWRpb0NvbnRleHRcbmZ1bmN0aW9uIGNyZWF0ZUF1ZGlvQ29udGV4dCAoKSB7XG4gIHZhciBBdWRpb0N0b3IgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgcmV0dXJuIG5ldyBBdWRpb0N0b3IoKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2F1ZGlvLWNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxvb2t1cCA9IHJlcXVpcmUoJ2Jyb3dzZXItbWVkaWEtbWltZS10eXBlJylcbnZhciBhdWRpb1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3JjUGxheWFibGVcbmZ1bmN0aW9uIGlzU3JjUGxheWFibGUgKHNyYykge1xuICBpZiAoIXNyYykgdGhyb3cgbmV3IFR5cGVFcnJvcignc3JjIGNhbm5vdCBiZSBlbXB0eScpXG4gIHZhciB0eXBlXG4gIGlmICh0eXBlb2Ygc3JjLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIDxzb3VyY2U+IGVsZW1lbnRcbiAgICB0eXBlID0gc3JjLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAnZm9vLm1wMycgc3RyaW5nXG4gICAgdmFyIGV4dCA9IGV4dGVuc2lvbihzcmMpXG4gICAgaWYgKGV4dCkgdHlwZSA9IGxvb2t1cChleHQpXG4gIH0gZWxzZSB7XG4gICAgLy8geyBzcmM6ICdmb28ubXAzJywgdHlwZTogJ2F1ZGlvL21wZWc7IGNvZGVjcy4uJ31cbiAgICB0eXBlID0gc3JjLnR5cGVcbiAgfVxuXG4gIC8vIFdlIGhhdmUgYW4gdW5rbm93biBmaWxlIGV4dGVuc2lvbiBvclxuICAvLyBhIDxzb3VyY2U+IHRhZyB3aXRob3V0IGFuIGV4cGxpY2l0IHR5cGUsXG4gIC8vIGp1c3QgbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdCFcbiAgaWYgKCF0eXBlKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIGhhbmRsZSBcIm5vXCIgZWRnZSBjYXNlIHdpdGggc3VwZXIgbGVnYWN5IGJyb3dzZXJzLi4uXG4gIC8vIGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vZm9ydW0vIyF0b3BpYy9nb29nbGUtd2ViLXRvb2xraXQtY29udHJpYnV0b3JzL2E4VXkwYlhxMUhvXG4gIGlmICghYXVkaW8pIGF1ZGlvID0gbmV3IHdpbmRvdy5BdWRpbygpXG4gIHZhciBjYW5wbGF5ID0gYXVkaW8uY2FuUGxheVR5cGUodHlwZSkucmVwbGFjZSgvbm8vLCAnJylcbiAgcmV0dXJuIEJvb2xlYW4oY2FucGxheSlcbn1cblxubW9kdWxlLmV4cG9ydHMuY3JlYXRlRXJyb3IgPSBjcmVhdGVFcnJvclxuZnVuY3Rpb24gY3JlYXRlRXJyb3IgKHNvdXJjZXMpIHtcbiAgLy8gQWxsIHNvdXJjZXMgYXJlIHVucGxheWFibGVcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYW55IG9mIHRoZSBmb2xsb3dpbmcgc291cmNlczpcXG4gICAgJyArXG4gICAgICBzb3VyY2VzLmpvaW4oJywgJykgKyAnXFxuJyArXG4gICAgICAnVHJ5IHVzaW5nIGFuIGFycmF5IG9mIE9HRywgTVAzIGFuZCBXQVYuJylcbiAgZXJyLnR5cGUgPSAnQVVESU9fRk9STUFUJ1xuICByZXR1cm4gZXJyXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoZXh0SWR4ICsgMSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGF1ZGlvQ29udGV4dCkge1xuICBpZiAoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJyAmJlxuICAgICAgdHlwZW9mIGF1ZGlvQ29udGV4dC5yZXN1bWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhdWRpb0NvbnRleHQucmVzdW1lKClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3Jlc3VtZS1jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCByYW5kb21Gcm9tQXJyYXkgZnJvbSAnLi91dGlscy9yYW5kb21Gcm9tQXJyYXknO1xuaW1wb3J0IGx1Y2t5IGZyb20gJy4vdXRpbHMvbHVja3knO1xuaW1wb3J0IG1hcCBmcm9tICcuL3V0aWxzL21hcCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgTWlkaUNvbnRyb2xsZXIgZnJvbSAnLi91dGlscy9NaWRpQ29udHJvbGxlcic7XG5cbmNsYXNzIEZhY2VzQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHRoaXMuZmFjZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmxvd2tpY2tlZCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcblxuICAgICAgICAvLyBvbiBldmVudHNcbiAgICAgICAgdGhpcy5vbkxvd0tpY2sgPSA6OnRoaXMub25Mb3dLaWNrO1xuICAgICAgICB0aGlzLm9uTWlkZGxlS2ljayA9IDo6dGhpcy5vbk1pZGRsZUtpY2s7XG4gICAgICAgIHRoaXMub25IaWdoS2ljayA9IDo6dGhpcy5vbkhpZ2hLaWNrO1xuICAgICAgICB0aGlzLm9uVHJlbW9sbyA9IDo6dGhpcy5vblRyZW1vbG87XG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG5cbiAgICAgICAgLy8gYmxhY2sgbW9kZXNcbiAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCA9IDo6dGhpcy5ibGFja01vZGVWZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVIb3Jpem9udGFsID0gOjp0aGlzLmJsYWNrTW9kZUhvcml6b250YWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSA9IDo6dGhpcy5ibGFja01vZGVCb3R0b207XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCA9IDo6dGhpcy5ibGFja01vZGVGdWxsO1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVhY3Rpb25zXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zID0gOjogdGhpcy51cGRhdGVEaXZpc2lvbnM7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlID0gOjp0aGlzLnNldEJsYWNrTW9kZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSA9IDo6dGhpcy5jaGFuZ2VTY2FsZTtcblxuICAgICAgICB0aGlzLnJlYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zLFxuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVggPSA6OnRoaXMuY2hhbmdlU2NhbGVYO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWSA9IDo6dGhpcy5jaGFuZ2VTY2FsZVk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGVCb3RoID0gOjp0aGlzLmNoYW5nZVNjYWxlQm90aDtcblxuICAgICAgICAvLyBzY2FsZXNcbiAgICAgICAgdGhpcy5zY2FsaW5ncyA9IFtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVZLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVgsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlQm90aCxcbiAgICAgICAgXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkxPV0tJQ0ssIHRoaXMub25Mb3dLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLk1JRERMRUtJQ0ssIHRoaXMub25NaWRkbGVLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkhJR0hLSUNLLCB0aGlzLm9uSGlnaEtpY2spO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuVFJFTU9MTywgdGhpcy5vblRyZW1vbG8pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcblxuICAgICAgICAvLyB0aGlzLnVwZGF0ZURpdmlzaW9ucyA9IGRlYm91bmNlKHRoaXMudXBkYXRlRGl2aXNpb25zLCA0MDApO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVNjYWxlID0gZGVib3VuY2UodGhpcy5jaGFuZ2VTY2FsZSwgNDAwKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCbGFja01vZGUgPSBkZWJvdW5jZSh0aGlzLnNldEJsYWNrTW9kZSwgNDAwKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuXG4gICAgICAgIE1pZGlDb250cm9sbGVyLm9uUGFkRG93bigxLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oMywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAtdGhpcy5zcGVlZENvbnRhaW5lcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTWlkaUNvbnRyb2xsZXIub25QYWREb3duKDUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vblBhZERvd24oNiwgKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5pbnZlcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMSwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3BlZWRDb250YWluZXIgPCAwID8gLTEgOiAxO1xuXG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gdmFsdWUgKiAyICogZGlyZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBNaWRpQ29udHJvbGxlci5vbktub2JDaGFuZ2UoMiwgKCB2YWx1ZSApID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB2YWx1ZSAqIDEyO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlZ2lzdGVyICggaWQsIGZhY2UgKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbaWRdID0gZmFjZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGZhY2UpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGl2aXNpb25zICggbWluLCBtYXgsIGJldHdlZW4gPSA0ICkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbnMgPSBbMF07XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpKz0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtYXg7IGkgPj0gbWluOyBpLT0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2aXNpb25zLnB1c2goMCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdmlzaW9ucztcbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWCA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy54LCB0aGlzLmRpdmlzaW9ucy5sYXN0WCwgMik7XG4gICAgICAgIGNvbnN0IHJkbVhJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25YLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWCA9IHBvc3NpYmxlRGl2aXNpb25YW3JkbVhJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFggPSB0aGlzLmRpdmlzaW9ucy54LmluZGV4T2YoZGl2aXNpb25YKTtcblxuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWSA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy55LCB0aGlzLmRpdmlzaW9ucy5sYXN0WSwgMik7XG4gICAgICAgIGNvbnN0IHJkbVlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25ZLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWSA9IHBvc3NpYmxlRGl2aXNpb25ZW3JkbVlJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFkgPSB0aGlzLmRpdmlzaW9ucy55LmluZGV4T2YoZGl2aXNpb25ZKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0udXBkYXRlRGl2aXNpb25zKGRpdmlzaW9uWCwgZGl2aXNpb25ZLCB0aGlzLmFsbG93SW52ZXJ0KSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0uc2V0U3RyaXBlcygnaG9yaXpvbnRhbCcsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kRGl2aXNpb25zICggYWxsLCBjdXJyZW50LCByYW5nZSApIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gYWxsLm1hcCggKCBkaXZpc2lvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICggaW5kZXggPiBjdXJyZW50IC0gcmFuZ2UgJiYgaW5kZXggPCBjdXJyZW50ICsgcmFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdmlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLmZpbHRlciggKCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGl2aXNpb25zO1xuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBkYXRhICkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCB8fCB3aW5kb3cuc291bmRFbmRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXkgPT09ICdkJyApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ2UnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAneCcgKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gIXRoaXMuc3BlZWRDb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvd0tpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJkbSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgaWYgKCByZG0gPiAwLjYgfHwgIXRoaXMubG93a2lja2VkICkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmICggcmRtID4gMC4yICkge1xuICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvd2tpY2tlZCsrO1xuICAgIH1cblxuICAgIG9uSGlnaEtpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAxLjE7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhpZ2hraWNrZWQgJSAyID09PSAwICkge1xuICAgICAgICAgICAgdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5oaWdoa2lja2VkKys7XG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMywgOSwgMiksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDEsIDEzLCAyKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcblxuICAgICAgICAvLyBjb25zdCByZWFjdGlvbiA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnJlYWN0aW9ucyk7XG4gICAgICAgIC8vIHJlYWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25NaWRkbGVLaWNrICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01JRERMRUtJQ0snKTtcbiAgICB9XG5cbiAgICBvblRyZW1vbG8gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnVHJlbW9sb29vbycpO1xuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5FTkQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLm9uRW5kKCksIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCbGFja01vZGUgKCkge1xuICAgICAgICBjb25zdCBibGFja01vZGUgPSByYW5kb21Gcm9tQXJyYXkodGhpcy5ibGFja01vZGVzKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGJsYWNrTW9kZSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCBvcHRpb25zW2tleV0gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5oaWRlKCksIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnNob3coKSwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0uc2V0QmxhY2tNb2RlKCksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBibGFja01vZGVWZXJ0aWNhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlSG9yaXpvbnRhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsVG9wICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMSxcbiAgICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBibGFja01vZGVUdW5uZWxCb3R0b20gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUJvdHRvbSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlRnVsbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGUgKCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnNjYWxpbmdzKTtcblxuICAgICAgICBzY2FsZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlWCAoKSB7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgoMC41LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKiAwLjEpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuY29udGFpbmVyLnNjYWxlLCAwLjMsIHsgeDogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZVkgKCkge1xuICAgICAgICBjb25zdCB0byA9IE1hdGgubWF4KDAuNSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICogMC4xKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmNvbnRhaW5lci5zY2FsZSwgMC4zLCB7IHk6IHRvLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGVCb3RoICgpIHtcbiAgICAgICAgY29uc3QgdG8gPSBNYXRoLm1heCgwLjUsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSAqIDAuMSk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiB0bywgeTogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvblVJSGlkZGVuICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sncmlnaHQnXS5zaG93KCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5yZXNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgeTogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICBsYXN0WDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20sXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50aW1lID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMC4wO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkICogMC4xICogdGhpcy5kaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJvdGF0aW9uLnogKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkQ29udGFpbmVyICogMC4wMDU7XG5cbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWydyaWdodCddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWydib3R0b20nXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICAgICAgdGhpcy5mYWNlc1sndG9wJ10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzU3BhY2VEb3duICYmIHRoaXMuZmlyc3RTcGFjZVVwICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmZhY3RvciA9IC10aGlzLmZhY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZUhvbGQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IHByb2dyZXNzIH0gPSBkYXRhO1xuXG4gICAgICAgIGNvbnN0IHVQcm9ncmVzcyA9IG1hcChwcm9ncmVzcywgMCwgMSwgMCwgMS44KTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0ub25TcGFjZUhvbGQodVByb2dyZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIC8vIHRoaXMuc3BlZWQgPSAxMi4wO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMsIDEsIHsgc3BlZWQ6IDEyLCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2VzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIi8qKlxuICogTW91c2UgTWFuYWdlclxuICovXG5cbmNsYXNzIE1vdXNlTWFuYWdlciB7XG5cblxuICAgIHN0YXRpYyBzdGFydCggY2hlY2tNb3VzZVNwZWVkID0gZmFsc2UgKSB7XG5cbiAgICAgICAgLy8gc3BlZWRcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRZID0gMDtcblxuICAgICAgICB3aW5kb3cubW91c2VMYXN0WCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RZID0gMDtcblxuICAgICAgICAvLyBkaXJlY3Rpb25cbiAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAwO1xuXG4gICAgICAgIC8vIHBvc2l0aW9uXG4gICAgICAgIHdpbmRvdy5tb3VzZVggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VZID0gMDtcblxuICAgICAgICBpZihjaGVja01vdXNlU3BlZWQpIHdpbmRvdy5zZXRJbnRlcnZhbCggTW91c2VNYW5hZ2VyLmdldFNwZWVkLCAzMCApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBNb3VzZU1hbmFnZXIubW92ZSApO1xuICAgIH1cblxuICAgIHN0YXRpYyBtb3ZlKGUpIHtcblxuICAgICAgICB3aW5kb3cubW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICB3aW5kb3cubW91c2VZID0gZS5jbGllbnRZO1xuXG4gICAgICAgIE1vdXNlTWFuYWdlci5nZXREaXJlY3Rpb24oZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERpcmVjdGlvbihlKSB7XG5cbiAgICAgICAgLy8geFxuICAgICAgICBpZiAod2luZG93Lm1vdXNlWCA8IGUucGFnZVgpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm1vdXNlWCA+IGUucGFnZVgpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gLTE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAwO1xuXG4gICAgICAgIC8vIHlcbiAgICAgICAgaWYgKHdpbmRvdy5tb3VzZVkgPCBlLnBhZ2VZKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDE7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5tb3VzZVkgPiBlLnBhZ2VZKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IC0xO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3BlZWQoKSB7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWCA9IHdpbmRvdy5tb3VzZVggLSB3aW5kb3cubW91c2VMYXN0WDtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRZID0gd2luZG93Lm1vdXNlWSAtIHdpbmRvdy5tb3VzZUxhc3RZO1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RYID0gd2luZG93Lm1vdXNlWDtcbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFkgPSB3aW5kb3cubW91c2VZO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW91c2VNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vTW91c2VNYW5hZ2VyLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcblxuY2xhc3MgS2V5Ym9hcmRDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5vbktleVVwID0gOjp0aGlzLm9uS2V5VXA7XG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uS2V5RG93biA9IDo6dGhpcy5vbktleURvd247XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gICAgfVxuXG4gICAgb25LZXlVcCAoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5LRVlVUCwgeyBrZXkgfSk7XG5cbiAgICAgICAgaWYgKCBrZXkgPT09ICcgJyApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgb25LZXlEb3duICggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELktFWURPV04sIHsga2V5IH0pO1xuXG4gICAgICAgIGlmICgga2V5ID09PSAnICcgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTik7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyAoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgeyBrZXkgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdiYWNrZ3JvdW5kJyk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9CYWNrZ3JvdW5kLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIEJvdHRvbSBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnYm90dG9tJyk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKC0zLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MjogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIC0xLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgPSAxLjA7XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICcyJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMyc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICcxJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvdHRvbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JvdHRvbS5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBMZWZ0IGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdsZWZ0Jyk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMjAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MjogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIC0xLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzQnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICcxJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzMnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0xlZnQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgUmlnaHQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ3JpZ2h0JywgVEhSRUUuQmFja1NpZGUpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMjAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzYnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICcxJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzMnO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWdodDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1JpZ2h0LmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIFRvcCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAndG9wJywgVEhSRUUuQmFja1NpZGUpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDIwLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MjogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnOCc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzMnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMSc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3A7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Ub3AuanMiLCJpbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gJ3dlYi1hdWRpby1wbGF5ZXInO1xuaW1wb3J0IGNyZWF0ZUFuYWx5c2VyIGZyb20gJ3dlYi1hdWRpby1hbmFseXNlcic7XG5pbXBvcnQgYXZlcmFnZSBmcm9tICdhbmFseXNlci1mcmVxdWVuY3ktYXZlcmFnZSc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAnLi9SYW5nZSc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4vLyBjb25zdCBhdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQgPyBuZXcgQXVkaW9Db250ZXh0KCkgOiBudWxsO1xuXG5jbGFzcyBTb3VuZE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmJhc3MgPSAwO1xuICAgICAgICB0aGlzLm1pZEJhc3MgPSAwO1xuICAgICAgICB0aGlzLnZvaWNlID0gMDtcbiAgICAgICAgdGhpcy5kcnVtID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYXNzZXRzID0gJ2Fzc2V0cy9zb3VuZHMnO1xuICAgICAgICB0aGlzLnNvdXJjZXMgPSB7XG4gICAgICAgICAgICBpbnRybzogJ2ludHJvLm1wMycsXG4gICAgICAgICAgICB4cDogJ3hwLm1wMycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IDo6dGhpcy5zdGFydDtcbiAgICAgICAgdGhpcy5vblNwYWNlSG9sZCA9IDo6dGhpcy5vblNwYWNlSG9sZDtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uU3BhY2VEb3duID0gOjp0aGlzLm9uU3BhY2VEb3duO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcblxuICAgICAgICB0aGlzLmluaXRTb3VuZCgpO1xuICAgICAgICAvLyB0aGlzLmluaXRHdWkoKTtcblxuICAgICAgICBjb25zdCBsb3dLaWNrID0gbmV3IFJhbmdlKCdsb3dLaWNrJywgWzExMCwgMTMwXSwgNjAwLCBFdmVudHMuU09VTkRTLkxPV0tJQ0spO1xuICAgICAgICBjb25zdCBtaWRkbGVLaWNrID0gbmV3IFJhbmdlKCdtaWRkbGVLaWNrJywgWzI3MCwgMjkwXSwgNjAwLCBFdmVudHMuU09VTkRTLk1JRERMRUtJQ0ssIDAuMyk7XG4gICAgICAgIGNvbnN0IHRyZW1vbG8gPSBuZXcgUmFuZ2UoJ3RyZW1vbG8nLCBbNDgwLCA1MjBdLCAxMDAsIEV2ZW50cy5TT1VORFMuVFJFTU9MTyk7XG4gICAgICAgIGNvbnN0IGhpZ2hLaWNrID0gbmV3IFJhbmdlKCdoaWdoS2ljaycsIFsxNTAwLCAzNTAwXSwgODAwLCBFdmVudHMuU09VTkRTLkhJR0hLSUNLLCAwLjUpO1xuXG4gICAgICAgIHRoaXMucmFuZ2VzID0gW2xvd0tpY2ssIGhpZ2hLaWNrLCB0cmVtb2xvLCBtaWRkbGVLaWNrXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuU1RBUlQsIHRoaXMuc3RhcnQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHRoaXMub25TcGFjZUhvbGQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04sIHRoaXMub25TcGFjZURvd24pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQLCB0aGlzLm9uU3BhY2VVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLlNUQVJULCB0aGlzLm9uU3RhcnQpO1xuICAgIH1cblxuICAgIGluaXRHdWkgKCkge1xuICAgICAgICB0aGlzLnNvdW5kR3VpID0gd2luZG93Lmd1aS5hZGRGb2xkZXIoJ1NvdW5kJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGF1c2UgPSB0aGlzLnNvdW5kR3VpLmFkZCh0aGlzLCAncGF1c2UnKTtcbiAgICAgICAgcGF1c2Uub25DaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2UpIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICBlbHNlIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFNvdW5kICgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zb3VyY2VzKS5tYXAoICgga2V5ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgYXVkaW86IG51bGwsXG4gICAgICAgICAgICAgICAgYW5hbHlzZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgbm9kZTogbnVsbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgICAgICBhdWRpby52b2x1bWUgPSAwO1xuICAgICAgICAgICAgYXVkaW8uY3Jvc3NPcmlnaW4gPSAnQW5vbnltb3VzJztcbiAgICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gQXVkaW9Db250ZXh0ID8gbmV3IEF1ZGlvQ29udGV4dCgpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmFseXNlciA9IGNyZWF0ZUFuYWx5c2VyKGF1ZGlvLCBhdWRpb0NvbnRleHQsIHsgYXVkaWJsZTogdHJ1ZSwgc3RlcmVvOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5hbmFseXNlciA9IGFuYWx5c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLm5vZGUgPSBhbmFseXNlci5hbmFseXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5TT1VORFMuQ0FOUExBWSwgeyBuYW1lOiBrZXkgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuU09VTkRTLkVORCwgeyBuYW1lOiBrZXkgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IGAke3RoaXMuYXNzZXRzfS8ke3RoaXMuc291cmNlc1trZXldfWA7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmF1ZGlvID0gYXVkaW87XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgIGlmICggcGxheWVyLmxvYWRlZCApIHtcbiAgICAgICAgICAgIHBsYXllci5hdWRpby5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICBpZiAoIHRoaXMucGxheWVyc1sneHAnXS5sb2FkZWQgKSB7XG4gICAgICAgICAgICBjb25zdCB7IGFuYWx5c2VyLCBub2RlIH0gPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgICAgIGNvbnN0IGZyZXFzID0gYW5hbHlzZXIuZnJlcXVlbmNpZXMoKTtcblxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5yYW5nZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbCA9IGF2ZXJhZ2Uobm9kZSwgZnJlcXMsIHJhbmdlLmZyZXFzWzBdLCByYW5nZS5mcmVxc1sxXSk7XG5cbiAgICAgICAgICAgICAgICByYW5nZS51cGRhdGUobGV2ZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZUhvbGQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IHZvbHVtZSB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgeyBhdWRpbyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuXG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHZvbHVtZSAqIDAuNSwgMSkpO1xuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGF1ZGlvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG5cbiAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoIHRoaXMuaXNTcGFjZURvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgY29uc3QgeyBhdWRpbzogaW50cm8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcbiAgICAgICAgY29uc3QgeyBhdWRpbzogeHAgfSA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICB4cC52b2x1bWUgPSAxO1xuICAgICAgICB4cC5wbGF5KCk7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgdGwudG8oaW50cm8sIDAuNSwgeyB2b2x1bWU6IDAsIGVhc2U6IEV4cG8uZWFzZU91dCwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgaW50cm8ucGF1c2UoKTtcbiAgICAgICAgfX0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VuZE1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ2YXIgcXVldWUgPSB7fTtcblxuLypcbioqIGFsbG93IGFueSBudW1iZXIgdmFyaWFibGUgdG8gYmUgc21vb3RoZWRcbiogQHBhcmFtIHtzdHJpbmd9IGlkIC0gYSB1bmlxdWUgbmFtZSBmb3IgeW91ciBzbW9vdGhpbmdcbiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdGhlIHZhbHVlIHlvdSB3YW50IHRvIGJlIHNtb290aGVkXG4qIEBwYXJhbSB7bnVtYmVyfSBjb2VmZiAob3B0aW9uYWwpIC0gdGhlIHNtb290aGluZyBjb2VmZmljaWVudCwgdGhlIHNtYWxsZXIsIHRoZSBzbG93ZXIuIERlZmF1bHQ6IDAuMVxuKiBAcGFyYW0ge2Jvb2xlYW59IGxvZyAob3B0aW9uYWwpIC0gZWl0aGVyIHRoZSBzbW9vdGhlZCB2YWx1ZSBpcyBsb2cgaW4gdGhlIGNvbnNvbGUuIERlZmF1bHQ6IGZhbHNlXG4qIEBwYXJhbSB7bnVtYmVyfSBpbml0IChvcHRpb25hbCkgLSB0aGUgc3RhcnRpbmcgdmFsdWUgb2YgdGhlIHNtb290aGluZy4gRGVmYXVsdDogMFxuKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBzbW9vdGhlZCB2YWx1ZVxuKiovXG5cbmZ1bmN0aW9uIHNtb290aCAoIGlkLCB2YWx1ZSwgY29lZmYgPSAwLjEsIGxvZyA9IGZhbHNlLCBpbml0ID0gMCApIHtcblx0aWYgKCBxdWV1ZVtpZF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRxdWV1ZVtpZF0gKz0gKCB2YWx1ZSAtIHF1ZXVlW2lkXSApICogY29lZmY7XG5cblx0XHRpZiAoIGxvZyApIHtcblx0XHRcdGNvbnNvbGUubG9nKGAlY1Ntb290aCAke2lkfSA6OiAke3F1ZXVlW2lkXX1gLCAnY29sb3I6IGJsdWU7Jyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICggdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZCA9PT0gJycgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Ntb290aCA6OiBpZCBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdFx0fVxuXG5cdFx0cXVldWVbaWRdID0gaW5pdDtcblx0fVxuXG5cdHJldHVybiBxdWV1ZVtpZF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbW9vdGg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcblxuY2xhc3MgVUkge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLiR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS1pbnRybycpO1xuICAgICAgICB0aGlzLiRsb2dvID0gdGhpcy4kd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX2xvZ28nKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uID0gdGhpcy4kd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX2FjdGlvbicpO1xuICAgICAgICB0aGlzLiRhY3Rpb25MYWJlbCA9IHRoaXMuJGFjdGlvbi5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uX19sYWJlbCcpO1xuICAgICAgICB0aGlzLiRhY3Rpb25GaWxsID0gdGhpcy4kd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uX19maWxsJyk7XG4gICAgICAgIHRoaXMuJHR1dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLXR1dG8nKTtcbiAgICAgICAgdGhpcy4kY3JlZGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0tY3JlZGl0cycpO1xuICAgICAgICB0aGlzLiRjcmVkaXRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVkaXRzX19pdGVtJyk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzRmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fcHJvZ3Jlc3NfX2ZpbGwnKTtcbiAgICAgICAgdGhpcy4kaGVscCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9faGVscCcpO1xuICAgICAgICB0aGlzLiRiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19iYWNrZ3JvdW5kJyk7XG5cbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm1heFRpbWUgPSAzMDAwO1xuICAgICAgICB0aGlzLmhlbHBJc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5taW5GaWxsID0gMC4wMTtcbiAgICAgICAgdGhpcy5tYXhGaWxsID0gMTtcbiAgICAgICAgdGhpcy5maWxsID0gdGhpcy5taW5GaWxsO1xuXG4gICAgICAgIHRoaXMudm9sdW1lID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMucmVzZXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gNTtcblxuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSA6OnRoaXMub25Db21wbGV0ZTtcblxuICAgICAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlLCBvbkNvbXBsZXRlOiB0aGlzLm9uQ29tcGxldGUgfSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiwgeyB2b2x1bWU6IDEsIGVhc2U6IExpbmVhci5lYXNlTm9uZSAgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kcHJvZ3Jlc3NGaWxsLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyB0cmFuc2Zvcm06IGBzY2FsZVgoMSlgIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRhY3Rpb24sIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGxvZ28sIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAxLjUsIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBwcm9ncmVzczogMSwgZWFzZTogRXhwby5lYXNlSW5PdXQgfSwgdGhpcy5kdXJhdGlvbiAqIDAuMjUpO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHR1dG8sIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCB0aGlzLmR1cmF0aW9uICogMC40KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiR0dXRvLCB0aGlzLmR1cmF0aW9uICogMC43NSwgeyBjc3M6IHsgc2NhbGU6IDEuNSB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgdGhpcy5kdXJhdGlvbiAqIDAuMjUpO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHR1dG8sIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCB0aGlzLmR1cmF0aW9uICogMC43NSk7XG4gICAgICAgIHRoaXMudGwuc2V0KHRoaXMsIHsgcHJvZ3Jlc3M6IDAgfSk7XG4gICAgICAgIC8vIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgcHJvZ3Jlc3M6IDAuNDQsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCB0aGlzLmR1cmF0aW9uICogMC45OCk7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gOjp0aGlzLm9uS2V5RG93bjtcbiAgICAgICAgdGhpcy5vbktleVVwID0gOjp0aGlzLm9uS2V5VXA7XG4gICAgICAgIHRoaXMub25TcGFjZURvd24gPSA6OnRoaXMub25TcGFjZURvd247XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vbkVuZFhQID0gOjp0aGlzLm9uRW5kWFA7XG4gICAgICAgIHRoaXMub25DbGlja0hlbHAgPSA6OnRoaXMub25DbGlja0hlbHA7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZRE9XTiwgdGhpcy5vbktleURvd24pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlVUCwgdGhpcy5vbktleVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCwgdGhpcy5vblNwYWNlVXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04sIHRoaXMub25TcGFjZURvd24pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5FTkQsIHRoaXMub25FbmRYUCk7XG5cbiAgICAgICAgdGhpcy50bEhlbHBTaG93ID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlLCBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhlbHBJc09wZW4gPSB0cnVlO1xuICAgICAgICB9fSk7XG4gICAgICAgIHRoaXMudGxIZWxwU2hvdy50byh0aGlzLiR0dXRvLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGhpcy50bEhlbHBTaG93LnRvKHRoaXMuJGJhY2tncm91bmQsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG5cbiAgICAgICAgdGhpcy50bEhlbHBIaWRlID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlLCBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhlbHBJc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0aGlzLnRsSGVscEhpZGUudG8odGhpcy4kdHV0bywgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGhpcy50bEhlbHBIaWRlLnRvKHRoaXMuJGJhY2tncm91bmQsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG5cbiAgICAgICAgdGhpcy4kaGVscC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0hlbHApO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQgKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzQ29tcGxldGVkICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHsgcHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3MsIHZvbHVtZTogdGhpcy52b2x1bWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5ICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMuJHdyYXBwZXIsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLiR3cmFwcGVyLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGRhdGEgKSB7XG5cbiAgICB9XG5cbiAgICBvbktleVVwICggZGF0YSApIHtcblxuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICYmIHRoaXMuaXNEb3duICYmICF0aGlzLmlzQ29tcGxldGVkICkge1xuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGwudGltZVNjYWxlKDQpO1xuICAgICAgICAgICAgdGhpcy50bC5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlRG93biAoKSB7XG4gICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICYmICF0aGlzLmlzRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGwudGltZVNjYWxlKDEpO1xuICAgICAgICAgICAgdGhpcy50bC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlICgpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLCB7IHByb2dyZXNzOiAwIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJGNyZWRpdEl0ZW1zLCB7IGNzczogeyBzY2FsZTogMC44LCBvcGFjaXR5OiAwIH19KTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRjcmVkaXRzLCB7IGNzczogeyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fSk7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kcHJvZ3Jlc3NGaWxsLCB7IGNzczogeyB0cmFuc2Zvcm06IGBzY2FsZVgoMClgfX0pO1xuICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcy4kaGVscCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcblxuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlhQLlNUQVJUKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlDcmVkaXRzICgpIHtcbiAgICAgICAgdGhpcy4kY3JlZGl0cy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLiRhY3Rpb25MYWJlbC5pbm5lckhUTUwgPSAnSG9sZCBzcGFjZWJhciB0byByZXN0YXJ0JztcblxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudGwua2lsbCgpO1xuICAgICAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlLCBvbkNvbXBsZXRlOiB0aGlzLm9uQ29tcGxldGUgfSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiwgeyB2b2x1bWU6IDEsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGFjdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kcHJvZ3Jlc3NGaWxsLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyB0cmFuc2Zvcm06IGBzY2FsZVgoMSlgIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRjcmVkaXRzLCB0aGlzLmR1cmF0aW9uLCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAxLjUsIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uICogMC41LCB7IHByb2dyZXNzOiAxLCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9LCB0aGlzLmR1cmF0aW9uICogMC41KTtcblxuICAgICAgICBpZiAoIHRoaXMuaGVscElzT3BlbiApIHtcbiAgICAgICAgICAgIHRoaXMudGxIZWxwSGlkZS5yZXN0YXJ0KCk7ICAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDI7XG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9fSk7XG4gICAgICAgIHRsLnN0YWdnZXJGcm9tVG8oQXJyYXkuZnJvbSh0aGlzLiRjcmVkaXRJdGVtcyksIGR1cmF0aW9uLCB7IGNzczogeyBzY2FsZTogMC44LCBvcGFjaXR5OiAwIH19LCB7IGNzczogeyBzY2FsZTogMS4wLCBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCBkdXJhdGlvbiAqIDAuMDUsIDApO1xuICAgICAgICB0bC50byh0aGlzLiRoZWxwLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC50byh0aGlzLiRhY3Rpb24sIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgdGhpcy5yZXNldHRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnZvbHVtZSA9IDA7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDI7XG4gICAgfVxuXG4gICAgb25FbmRYUCAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUNyZWRpdHMoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSGVscCAoIGV2ZW50ICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhdGhpcy5oZWxwSXNPcGVuICkge1xuICAgICAgICAgICAgdGhpcy4kaGVscC5pbm5lckhUTUwgPSAnWCc7XG5cbiAgICAgICAgICAgIHRoaXMudGxIZWxwU2hvdy5yZXN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRoZWxwLmlubmVySFRNTCA9ICc/JztcblxuICAgICAgICAgICAgdGhpcy50bEhlbHBIaWRlLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3VpLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmdzKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5ncyA9PT0gJ3N0cmluZycpIHN0cmluZ3MgPSBbc3RyaW5nc11cbiAgdmFyIGV4cHJzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSlcbiAgdmFyIHBhcnRzID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aC0xOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHN0cmluZ3NbaV0sIGV4cHJzW2ldIHx8ICcnKVxuICB9XG4gIHBhcnRzLnB1c2goc3RyaW5nc1tpXSlcbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xzbGlmeS9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yYWYvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIFRIUkVFICkge1xuXHQvKipcblx0ICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cblx0ICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuXHQgKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuXHQgKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcblx0ICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuXHQgKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuXHRmdW5jdGlvbiBPcmJpdENvbnRyb2xzKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdFx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0XHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluWm9vbSA9IDA7XG5cdFx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdFx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdFx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdFx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdFx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0XHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdFx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHRcdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdFx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHRcdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHRcdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdFx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHRcdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0XHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdFx0Ly8gTW91c2UgYnV0dG9uc1xuXHRcdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0XHQvLyBmb3IgcmVzZXRcblx0XHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHRcdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0XHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHRcdC8vXG5cdFx0Ly8gcHVibGljIG1ldGhvZHNcblx0XHQvL1xuXG5cdFx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH07XG5cblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjYWxlID0gMTtcblx0XHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdFx0fTtcblxuXHRcdC8vXG5cdFx0Ly8gaW50ZXJuYWxzXG5cdFx0Ly9cblxuXHRcdHZhciBzY29wZSA9IHRoaXM7XG5cblx0XHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdFx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0XHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0XHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0XHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdFx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0XHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHRcdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHRcdHZhciBzY2FsZSA9IDE7XG5cdFx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0XHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHRcdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0fTtcblxuXHRPcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblx0T3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcmJpdENvbnRyb2xzO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBPcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdFx0Y2VudGVyOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRub1pvb206IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9Sb3RhdGU6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9QYW46IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0bm9LZXlzOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0gKTtcblxuXHRyZXR1cm4gT3JiaXRDb250cm9scztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGhyZWUtb3JiaXQtY29udHJvbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVxdWVuY3lUb0luZGV4ID0gcmVxdWlyZSgnYXVkaW8tZnJlcXVlbmN5LXRvLWluZGV4JylcblxubW9kdWxlLmV4cG9ydHMgPSBhbmFseXNlckZyZXF1ZW5jeUF2ZXJhZ2UuYmluZChudWxsLCAyNTUpXG5tb2R1bGUuZXhwb3J0cy5mbG9hdERhdGEgPSBhbmFseXNlckZyZXF1ZW5jeUF2ZXJhZ2UuYmluZChudWxsLCAxKVxuXG5mdW5jdGlvbiBhbmFseXNlckZyZXF1ZW5jeUF2ZXJhZ2UgKGRpdiwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzLCBtaW5IeiwgbWF4SHopIHtcbiAgdmFyIHNhbXBsZVJhdGUgPSBhbmFseXNlci5jb250ZXh0LnNhbXBsZVJhdGVcbiAgdmFyIGJpbkNvdW50ID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnRcbiAgdmFyIHN0YXJ0ID0gZnJlcXVlbmN5VG9JbmRleChtaW5Ieiwgc2FtcGxlUmF0ZSwgYmluQ291bnQpXG4gIHZhciBlbmQgPSBmcmVxdWVuY3lUb0luZGV4KG1heEh6LCBzYW1wbGVSYXRlLCBiaW5Db3VudClcbiAgdmFyIGNvdW50ID0gZW5kIC0gc3RhcnRcbiAgdmFyIHN1bSA9IDBcbiAgZm9yICg7IHN0YXJ0IDwgZW5kOyBzdGFydCsrKSB7XG4gICAgc3VtICs9IGZyZXF1ZW5jaWVzW3N0YXJ0XSAvIGRpdlxuICB9XG4gIHJldHVybiBjb3VudCA9PT0gMCA/IDAgOiAoc3VtIC8gY291bnQpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFtcCA9IHJlcXVpcmUoJ2NsYW1wJylcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVxdWVuY3lUb0luZGV4XG5mdW5jdGlvbiBmcmVxdWVuY3lUb0luZGV4IChmcmVxdWVuY3ksIHNhbXBsZVJhdGUsIGZyZXF1ZW5jeUJpbkNvdW50KSB7XG4gIHZhciBueXF1aXN0ID0gc2FtcGxlUmF0ZSAvIDJcbiAgdmFyIGluZGV4ID0gTWF0aC5yb3VuZChmcmVxdWVuY3kgLyBueXF1aXN0ICogZnJlcXVlbmN5QmluQ291bnQpXG4gIHJldHVybiBjbGFtcChpbmRleCwgMCwgZnJlcXVlbmN5QmluQ291bnQpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVkaW8tZnJlcXVlbmN5LXRvLWluZGV4L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2ZhY2VzL0JhY2tncm91bmQnO1xuaW1wb3J0IFRvcCBmcm9tICcuL2ZhY2VzL1RvcCc7XG5pbXBvcnQgTGVmdCBmcm9tICcuL2ZhY2VzL0xlZnQnO1xuaW1wb3J0IFJpZ2h0IGZyb20gJy4vZmFjZXMvUmlnaHQnO1xuaW1wb3J0IEJvdHRvbSBmcm9tICcuL2ZhY2VzL0JvdHRvbSc7XG5cbmltcG9ydCBzbW9vdGggZnJvbSAnLi9zbW9vdGgnO1xuaW1wb3J0IEZhY2VzQ29udHJvbGxlciBmcm9tICcuL0ZhY2VzQ29udHJvbGxlcic7XG5pbXBvcnQgTW91c2VNYW5hZ2VyIGZyb20gJy4vTW91c2VNYW5hZ2VyJztcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBVSSBmcm9tICcuL3VpJztcbmltcG9ydCBNUEtNaW5pIGZyb20gJy4vY29uZmlnL01QS01pbmknO1xuaW1wb3J0IE1pZGlDb250cm9sbGVyIGZyb20gJy4vdXRpbHMvTWlkaUNvbnRyb2xsZXInO1xuXG5jb25zdCBnbHNsaWZ5ID0gcmVxdWlyZSgnZ2xzbGlmeScpO1xuXG5jbGFzcyBBcHAge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnVpSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gZmFsc2U7XG5cblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IDB4MDAwMDAwO1xuXHRcdFxuICAgICAgICBNb3VzZU1hbmFnZXIuc3RhcnQoKTtcbiAgICAgICAgTWlkaUNvbnRyb2xsZXIuc3RhcnQoTVBLTWluaSk7XG5cbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIgPSBuZXcgRmFjZXNDb250cm9sbGVyKCk7XG5cbiAgICAgICAgdGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRDb250cm9sbGVyKCk7XG5cdFx0XHRcblx0XHR0aGlzLnJlc2l6ZSA9IDo6dGhpcy5yZXNpemU7XG5cdFx0dGhpcy51cGRhdGUgPSA6OnRoaXMudXBkYXRlO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vblVJSGlkZGVuID0gOjp0aGlzLm9uVUlIaWRkZW47XG4gICAgICAgIHRoaXMub25Tb3VuZEVuZCA9IDo6dGhpcy5vblNvdW5kRW5kO1xuICAgICAgICB0aGlzLnJlc2V0ID0gOjp0aGlzLnJlc2V0O1xuXHRcdFxuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuYmluZExpc3RlbmVycygpO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXMsIGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IGZhbHNlIH0pO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdC8vIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IGZhbHNlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXHRcdFxuXHRcdFdBR05FUi52ZXJ0ZXhTaGFkZXJzUGF0aCA9ICdqcy92ZXJ0ZXgtc2hhZGVycyc7XG5cdFx0V0FHTkVSLmZyYWdtZW50U2hhZGVyc1BhdGggPSAnanMvZnJhZ21lbnQtc2hhZGVycyc7XG5cblx0XHR0aGlzLmNvbXBvc2VyID0gbmV3IFdBR05FUi5Db21wb3Nlcih0aGlzLnJlbmRlcmVyKTtcblx0XHR0aGlzLmNvbXBvc2VyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cblx0XHRjb25zdCBibG9vbVdpZHRoID0gd2luZG93LmlzVG91Y2ggPyAyNTYgOiA1MTI7XG4gICAgICAgIGNvbnN0IGJsb29tSGVpZ2h0ID0gd2luZG93LmlzVG91Y2ggPyAyNTYgOiA1MTI7XG5cblx0XHR0aGlzLmJsb29tUGFzcyA9IG5ldyBXQUdORVIuTXVsdGlQYXNzQmxvb21QYXNzKGJsb29tV2lkdGgsIGJsb29tSGVpZ2h0KTtcblx0XHR0aGlzLmJsb29tUGFzcy5wYXJhbXMuc3RyZW5ndGggPSA1MC4wO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuYmx1ckFtb3VudCA9IDUuO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuYXBwbHlab29tQmx1ciA9IHRydWU7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy56b29tQmx1clN0cmVuZ3RoID0gMy4wO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuem9vbUJsdXJDZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMiggMC41LCAwLjUgKTtcblxuICAgICAgICB0aGlzLnJnYlBhc3MgPSBuZXcgV0FHTkVSLlJHQlNwbGl0UGFzcygpO1xuICAgICAgICB0aGlzLnJnYlBhc3MucGFyYW1zLmRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoMjAsIDIwKTtcblxuICAgICAgICB0aGlzLm5vaXNlUGFzcyA9IG5ldyBXQUdORVIuTm9pc2VQYXNzKCk7XG4gICAgICAgIHRoaXMubm9pc2VQYXNzLnBhcmFtcy5hbW91bnQgPSAwLjI1O1xuICAgICAgICB0aGlzLm5vaXNlUGFzcy5wYXJhbXMuc3BlZWQgPSAwLjI7XG5cbiAgICAgICAgdGhpcy52aWduZXR0ZVBhc3MgPSBuZXcgV0FHTkVSLlZpZ25ldHRlUGFzcygpO1xuICAgICAgICB0aGlzLnZpZ25ldHRlUGFzcy5wYXJhbXMuYW1vdW50ID0gMC43O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5meGFhUGFzcyA9IG5ldyBXQUdORVIuRlhBQVBhc3MoKTtcblxuXHRcdHRoaXMud2lkdGggPSB3aW5kb3cud2lkdGggPSA2MDtcblx0XHR0aGlzLmhlaWdodCA9IHdpbmRvdy5oZWlnaHQgPSA2MDtcblx0XHR0aGlzLmxlbmd0aCA9IHdpbmRvdy5sZW5ndGggPSA2MDA7XG5cbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coMHgwMDAwMDAsIDAuOCwgdGhpcy5sZW5ndGggKiAuOTggKTtcblxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDApO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMDtcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XG5cblxuICAgICAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgIFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGJpbmRMaXN0ZW5lcnMgKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlVJLkhJRERFTiwgdGhpcy5vblVJSGlkZGVuKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkVORCwgdGhpcy5vblNvdW5kRW5kKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuRU5ELCB0aGlzLnJlc2V0KTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlhQLlNUQVJUKTtcblx0fVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVUlIaWRkZW4gKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXHRhZGRDb250cm9scyAoKSB7XG5cdFx0Y29uc3QgT3JiaXRDb250cm9scyA9IHJlcXVpcmUoJ3RocmVlLW9yYml0LWNvbnRyb2xzJykoVEhSRUUpO1xuXHRcdC8vIHRoaXMuY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdH1cblxuXHRhZGRMaWdodHMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gbGlnaHRzJyk7XG5cdFx0Ly8gdGhpcy5saWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhGRkZGRkYpO1xuXHRcdC8vIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gIFx0XHQvLyBjb25zdCBwb2ludExpZ2h0MyA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweGZmZmZmZiwgNy4xLCAwKTtcbiAgXHRcdC8vIHBvaW50TGlnaHQzLnBvc2l0aW9uLnggPSAwXG4gIFx0XHQvLyBwb2ludExpZ2h0My5wb3NpdGlvbi55ID0gNDtcbiAgXHRcdC8vIHBvaW50TGlnaHQzLnBvc2l0aW9uLnogPSA2MDtcblxuICBcdFx0Ly8gdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDMpO1xuXHR9XG5cblx0YWRkRWxlbWVudHMgKCkge1xuXHRcdHRoaXMuZGl2aXNhdG9yID0gMjtcblxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy5sZW5ndGgsIHRoaXMud2lkdGgsIDMyLCAzMik7XG4gICAgICAgIHRoaXMub3RoZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMubGVuZ3RoLCAzMiwgMzIpO1xuXG5cdFx0dGhpcy5sZWZ0UmlnaHRHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMubGVuZ3RoLCB0aGlzLmhlaWdodCwgTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIHRoaXMuZGl2aXNhdG9yKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuZGl2aXNhdG9yKSApO1xuXHRcdHRoaXMudG9wQm90dG9tR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmxlbmd0aCwgTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5kaXZpc2F0b3IpICwgTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIHRoaXMuZGl2aXNhdG9yKSk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5kaXZpc2F0b3IgKiAyKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuZGl2aXNhdG9yICogMikgKTtcblxuXHRcdHRoaXMubGVmdCA9IG5ldyBMZWZ0KHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLmxlZnQucm90YXRpb24ueSA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5sZWZ0LnBvc2l0aW9uLnggPSAtdGhpcy53aWR0aCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2xlZnQnLCB0aGlzLmxlZnQpXG5cblx0XHR0aGlzLnJpZ2h0ID0gbmV3IFJpZ2h0KHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLnJpZ2h0LnJvdGF0aW9uLnkgPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMucmlnaHQucG9zaXRpb24ueCA9IHRoaXMud2lkdGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdyaWdodCcsIHRoaXMucmlnaHQpXG5cblx0XHR0aGlzLmJvdHRvbSA9IG5ldyBCb3R0b20odGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMuYm90dG9tLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgdGhpcy5ib3R0b20ucm90YXRpb24ueiA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5ib3R0b20ucG9zaXRpb24ueSA9IC10aGlzLmhlaWdodCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2JvdHRvbScsIHRoaXMuYm90dG9tKVxuXG5cdFx0dGhpcy50b3AgPSBuZXcgVG9wKHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLnRvcC5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjU7XG4gICAgICAgIHRoaXMudG9wLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMudG9wLnBvc2l0aW9uLnkgPSB0aGlzLmhlaWdodCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ3RvcCcsIHRoaXMudG9wKTtcbiAgICAgICAgY29uc29sZS5sb2coKTtcblxuXHRcdC8vIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMuYmFja2dyb3VuZEdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0Ly8gdGhpcy5iYWNrZ3JvdW5kLnBvc2l0aW9uLnogPSAtdGhpcy5sZW5ndGggKiAwLjU7XG4gIC8vICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdiYWNrZ3JvdW5kJywgdGhpcy5iYWNrZ3JvdW5kKTtcblxuXHRcdHRoaXMuZmFjZXNDb250cm9sbGVyLmNvbnRhaW5lci5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5mYWNlc0NvbnRyb2xsZXIuY29udGFpbmVyKTtcblx0fVxuXG4gICAgcm90YXRlICgpIHtcbiAgICAgICAgY29uc3Qgc2VucyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgIH1cblxuXHR1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci51cGRhdGUoKTtcblxuXHRcdHRoaXMuY29tcG9zZXIucmVzZXQoKTtcblx0XHR0aGlzLmNvbXBvc2VyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLmJsb29tUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLnJnYlBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy5ub2lzZVBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy52aWduZXR0ZVBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnRvU2NyZWVuKHRoaXMuZnhhYVBhc3MpO1xuXG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG5cdFx0cmFmKHRoaXMudXBkYXRlKTtcblx0fVxuXG5cdHJlc2l6ZSAoKSB7XG5cdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG5cdH1cblxufVxuXG5uZXcgQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwiaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBSYW5nZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIG5hbWUsIGZyZXFzLCBkZWx0YSwgZXZlbnQsIG1pbkxldmVsID0gMC41ICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmZyZXFzID0gZnJlcXM7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmxldmVsID0gMDtcbiAgICAgICAgdGhpcy5taW5MZXZlbCA9IG1pbkxldmVsO1xuXG4gICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggbGV2ZWwgKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gRGF0ZS5ub3coKSAtIHRoaXMudGltZTtcblxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG5cbiAgICAgICAgaWYgKCBkZWx0YSA+IHRoaXMuZGVsdGEgJiYgdGhpcy5sZXZlbCA+IHRoaXMubWluTGV2ZWwgKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQodGhpcy5ldmVudCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICggdGhpcy5uYW1lID09PSAnaGlnaEtpY2snICkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9SYW5nZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVvdXRcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyksIHdhaXQpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL2RlYm91bmNlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbHVja3kgKCBjaGFuY2VzICkge1xuICAgIHJldHVybiAhfn4oTWF0aC5yYW5kb20oKSAqIGNoYW5jZXMpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvbHVja3kuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb21Gcm9tQXJyYXkoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbfn4oTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvcmFuZG9tRnJvbUFycmF5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXVkaW8vbWlkaVwiOiBbXG5cdFx0XCJtaWRcIixcblx0XHRcIm1pZGlcIixcblx0XHRcImthclwiLFxuXHRcdFwicm1pXCJcblx0XSxcblx0XCJhdWRpby9tcDRcIjogW1xuXHRcdFwibXA0YVwiLFxuXHRcdFwibTRhXCJcblx0XSxcblx0XCJhdWRpby9tcGVnXCI6IFtcblx0XHRcIm1wZ2FcIixcblx0XHRcIm1wMlwiLFxuXHRcdFwibXAyYVwiLFxuXHRcdFwibXAzXCIsXG5cdFx0XCJtMmFcIixcblx0XHRcIm0zYVwiXG5cdF0sXG5cdFwiYXVkaW8vb2dnXCI6IFtcblx0XHRcIm9nYVwiLFxuXHRcdFwib2dnXCIsXG5cdFx0XCJzcHhcIlxuXHRdLFxuXHRcImF1ZGlvL3dlYm1cIjogW1xuXHRcdFwid2ViYVwiXG5cdF0sXG5cdFwiYXVkaW8veC1tYXRyb3NrYVwiOiBbXG5cdFx0XCJta2FcIlxuXHRdLFxuXHRcImF1ZGlvL3gtbXBlZ3VybFwiOiBbXG5cdFx0XCJtM3VcIlxuXHRdLFxuXHRcImF1ZGlvL3dhdlwiOiBbXG5cdFx0XCJ3YXZcIlxuXHRdLFxuXHRcInZpZGVvLzNncHBcIjogW1xuXHRcdFwiM2dwXCJcblx0XSxcblx0XCJ2aWRlby8zZ3BwMlwiOiBbXG5cdFx0XCIzZzJcIlxuXHRdLFxuXHRcInZpZGVvL21wNFwiOiBbXG5cdFx0XCJtcDRcIixcblx0XHRcIm1wNHZcIixcblx0XHRcIm1wZzRcIlxuXHRdLFxuXHRcInZpZGVvL21wZWdcIjogW1xuXHRcdFwibXBlZ1wiLFxuXHRcdFwibXBnXCIsXG5cdFx0XCJtcGVcIixcblx0XHRcIm0xdlwiLFxuXHRcdFwibTJ2XCJcblx0XSxcblx0XCJ2aWRlby9vZ2dcIjogW1xuXHRcdFwib2d2XCJcblx0XSxcblx0XCJ2aWRlby9xdWlja3RpbWVcIjogW1xuXHRcdFwicXRcIixcblx0XHRcIm1vdlwiXG5cdF0sXG5cdFwidmlkZW8vd2VibVwiOiBbXG5cdFx0XCJ3ZWJtXCJcblx0XSxcblx0XCJ2aWRlby94LWY0dlwiOiBbXG5cdFx0XCJmNHZcIlxuXHRdLFxuXHRcInZpZGVvL3gtZmxpXCI6IFtcblx0XHRcImZsaVwiXG5cdF0sXG5cdFwidmlkZW8veC1mbHZcIjogW1xuXHRcdFwiZmx2XCJcblx0XSxcblx0XCJ2aWRlby94LW00dlwiOiBbXG5cdFx0XCJtNHZcIlxuXHRdLFxuXHRcInZpZGVvL3gtbWF0cm9za2FcIjogW1xuXHRcdFwibWt2XCIsXG5cdFx0XCJtazNkXCIsXG5cdFx0XCJta3NcIlxuXHRdXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9taW1lLXR5cGVzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gY2xhbXBcblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gPCBtYXhcbiAgICA/ICh2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWUpXG4gICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYW1wL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzLWZ1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcblxuZnVuY3Rpb24gZm9yRWFjaChsaXN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXNGdW5jdGlvbihpdGVyYXRvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgY29udGV4dCA9IHRoaXNcbiAgICB9XG4gICAgXG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobGlzdCkgPT09ICdbb2JqZWN0IEFycmF5XScpXG4gICAgICAgIGZvckVhY2hBcnJheShsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpXG4gICAgICAgIGZvckVhY2hTdHJpbmcobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG4gICAgZWxzZVxuICAgICAgICBmb3JFYWNoT2JqZWN0KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCBpKSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVtpXSwgaSwgYXJyYXkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTdHJpbmcoc3RyaW5nLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHJpbmcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgLy8gbm8gc3VjaCB0aGluZyBhcyBhIHNwYXJzZSBzdHJpbmcuXG4gICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgc3RyaW5nLmNoYXJBdChpKSwgaSwgc3RyaW5nKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaE9iamVjdChvYmplY3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgayBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrKSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmplY3Rba10sIGssIG9iamVjdClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mb3ItZWFjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xvYmFsL3dpbmRvdy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBpc05vZGVcblxuZnVuY3Rpb24gaXNOb2RlICh2YWwpIHtcbiAgcmV0dXJuICghdmFsIHx8IHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKVxuICAgID8gZmFsc2VcbiAgICA6ICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93Lk5vZGUgPT09ICdvYmplY3QnKVxuICAgICAgPyAodmFsIGluc3RhbmNlb2Ygd2luZG93Lk5vZGUpXG4gICAgICA6ICh0eXBlb2YgdmFsLm5vZGVUeXBlID09PSAnbnVtYmVyJykgJiZcbiAgICAgICAgKHR5cGVvZiB2YWwubm9kZU5hbWUgPT09ICdzdHJpbmcnKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWRvbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKVxuICAsIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpXG4gICwgaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICBpZiAoIWhlYWRlcnMpXG4gICAgcmV0dXJuIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgZm9yRWFjaChcbiAgICAgIHRyaW0oaGVhZGVycykuc3BsaXQoJ1xcbicpXG4gICAgLCBmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHJvdy5pbmRleE9mKCc6JylcbiAgICAgICAgICAsIGtleSA9IHRyaW0ocm93LnNsaWNlKDAsIGluZGV4KSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICwgdmFsdWUgPSB0cmltKHJvdy5zbGljZShpbmRleCArIDEpKVxuXG4gICAgICAgIGlmICh0eXBlb2YocmVzdWx0W2tleV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdFtrZXldKSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBbIHJlc3VsdFtrZXldLCB2YWx1ZSBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9XG4gIGdsb2JhbC5wZXJmb3JtYW5jZSAmJlxuICBnbG9iYWwucGVyZm9ybWFuY2Uubm93ID8gZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKVxuICB9IDogRGF0ZS5ub3cgfHwgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiArbmV3IERhdGVcbiAgfVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpZ2h0LW5vdy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNEb20gPSByZXF1aXJlKCdpcy1kb20nKVxudmFyIGxvb2t1cCA9IHJlcXVpcmUoJ2Jyb3dzZXItbWVkaWEtbWltZS10eXBlJylcblxubW9kdWxlLmV4cG9ydHMudmlkZW8gPSBzaW1wbGVNZWRpYUVsZW1lbnQuYmluZChudWxsLCAndmlkZW8nKVxubW9kdWxlLmV4cG9ydHMuYXVkaW8gPSBzaW1wbGVNZWRpYUVsZW1lbnQuYmluZChudWxsLCAnYXVkaW8nKVxuXG5mdW5jdGlvbiBzaW1wbGVNZWRpYUVsZW1lbnQgKGVsZW1lbnROYW1lLCBzb3VyY2VzLCBvcHQpIHtcbiAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZXMpKSB7XG4gICAgc291cmNlcyA9IFsgc291cmNlcyBdXG4gIH1cblxuICB2YXIgbWVkaWEgPSBvcHQuZWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKVxuXG4gIGlmIChvcHQubG9vcCkgbWVkaWEuc2V0QXR0cmlidXRlKCdsb29wJywgJ2xvb3AnKVxuICBpZiAob3B0Lm11dGVkKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJ211dGVkJylcbiAgaWYgKG9wdC5hdXRvcGxheSkgbWVkaWEuc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICdhdXRvcGxheScpXG4gIGlmIChvcHQuY29udHJvbHMpIG1lZGlhLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnY29udHJvbHMnKVxuICBpZiAob3B0LmNyb3NzT3JpZ2luKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgb3B0LmNyb3NzT3JpZ2luKVxuICBpZiAob3B0LnByZWxvYWQpIG1lZGlhLnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsIG9wdC5wcmVsb2FkKVxuICBpZiAob3B0LnBvc3RlcikgbWVkaWEuc2V0QXR0cmlidXRlKCdwb3N0ZXInLCBvcHQucG9zdGVyKVxuICBpZiAodHlwZW9mIG9wdC52b2x1bWUgIT09ICd1bmRlZmluZWQnKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3ZvbHVtZScsIG9wdC52b2x1bWUpXG5cbiAgc291cmNlcyA9IHNvdXJjZXMuZmlsdGVyKEJvb2xlYW4pXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgbWVkaWEuYXBwZW5kQ2hpbGQoY3JlYXRlU291cmNlRWxlbWVudChzb3VyY2UpKVxuICB9KVxuXG4gIHJldHVybiBtZWRpYVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VFbGVtZW50IChkYXRhKSB7XG4gIGlmIChpc0RvbShkYXRhKSkgcmV0dXJuIGRhdGFcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSB7IHNyYzogZGF0YSB9XG4gICAgaWYgKGRhdGEuc3JjKSB7XG4gICAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uKGRhdGEuc3JjKVxuICAgICAgaWYgKGV4dCkgZGF0YS50eXBlID0gbG9va3VwKGV4dClcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJylcbiAgaWYgKGRhdGEuc3JjKSBzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBkYXRhLnNyYylcbiAgaWYgKGRhdGEudHlwZSkgc291cmNlLnNldEF0dHJpYnV0ZSgndHlwZScsIGRhdGEudHlwZSlcbiAgcmV0dXJuIHNvdXJjZVxufVxuXG5mdW5jdGlvbiBleHRlbnNpb24gKGRhdGEpIHtcbiAgdmFyIGV4dElkeCA9IGRhdGEubGFzdEluZGV4T2YoJy4nKVxuICBpZiAoZXh0SWR4IDw9IDAgfHwgZXh0SWR4ID09PSBkYXRhLmxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBkYXRhLnN1YnN0cmluZyhleHRJZHggKyAxKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NpbXBsZS1tZWRpYS1lbGVtZW50L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHRyaW07XG5cbmZ1bmN0aW9uIHRyaW0oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmV4cG9ydHMubGVmdCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJyk7XG59O1xuXG5leHBvcnRzLnJpZ2h0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHJpbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYkF1ZGlvQW5hbHlzZXJcblxuZnVuY3Rpb24gV2ViQXVkaW9BbmFseXNlcihhdWRpbywgY3R4LCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBXZWJBdWRpb0FuYWx5c2VyKSkgcmV0dXJuIG5ldyBXZWJBdWRpb0FuYWx5c2VyKGF1ZGlvLCBjdHgsIG9wdHMpXG4gIGlmICghKGN0eCBpbnN0YW5jZW9mIEF1ZGlvQ29udGV4dCkpIChvcHRzID0gY3R4KSwgKGN0eCA9IG51bGwpXG5cbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgdGhpcy5jdHggPSBjdHggPSBjdHggfHwgbmV3IEF1ZGlvQ29udGV4dFxuXG4gIGlmICghKGF1ZGlvIGluc3RhbmNlb2YgQXVkaW9Ob2RlKSkge1xuICAgIGF1ZGlvID0gKGF1ZGlvIGluc3RhbmNlb2YgQXVkaW8gfHwgYXVkaW8gaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50KVxuICAgICAgPyBjdHguY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKVxuICAgICAgOiBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UoYXVkaW8pXG4gIH1cblxuICB0aGlzLmFuYWx5c2VyID0gY3R4LmNyZWF0ZUFuYWx5c2VyKClcbiAgdGhpcy5zdGVyZW8gICA9ICEhb3B0cy5zdGVyZW9cbiAgdGhpcy5hdWRpYmxlICA9IG9wdHMuYXVkaWJsZSAhPT0gZmFsc2VcbiAgdGhpcy53YXZlZGF0YSA9IG51bGxcbiAgdGhpcy5mcmVxZGF0YSA9IG51bGxcbiAgdGhpcy5zcGxpdHRlciA9IG51bGxcbiAgdGhpcy5tZXJnZXIgICA9IG51bGxcbiAgdGhpcy5zb3VyY2UgICA9IGF1ZGlvXG5cbiAgaWYgKCF0aGlzLnN0ZXJlbykge1xuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5zb3VyY2VcbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuYW5hbHlzZXIpXG4gICAgaWYgKHRoaXMuYXVkaWJsZSlcbiAgICAgIHRoaXMuYW5hbHlzZXIuY29ubmVjdChjdHguZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hbmFseXNlciA9IFt0aGlzLmFuYWx5c2VyXVxuICAgIHRoaXMuYW5hbHlzZXIucHVzaChjdHguY3JlYXRlQW5hbHlzZXIoKSlcblxuICAgIHRoaXMuc3BsaXR0ZXIgPSBjdHguY3JlYXRlQ2hhbm5lbFNwbGl0dGVyKDIpXG4gICAgdGhpcy5tZXJnZXIgICA9IGN0eC5jcmVhdGVDaGFubmVsTWVyZ2VyKDIpXG4gICAgdGhpcy5vdXRwdXQgICA9IHRoaXMubWVyZ2VyXG5cbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMuc3BsaXR0ZXIpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgdGhpcy5zcGxpdHRlci5jb25uZWN0KHRoaXMuYW5hbHlzZXJbaV0sIGksIDApXG4gICAgICB0aGlzLmFuYWx5c2VyW2ldLmNvbm5lY3QodGhpcy5tZXJnZXIsIDAsIGkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXVkaWJsZSlcbiAgICAgIHRoaXMubWVyZ2VyLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKVxuICB9XG59XG5cbldlYkF1ZGlvQW5hbHlzZXIucHJvdG90eXBlLndhdmVmb3JtID0gZnVuY3Rpb24ob3V0cHV0LCBjaGFubmVsKSB7XG4gIGlmICghb3V0cHV0KSBvdXRwdXQgPSB0aGlzLndhdmVkYXRhIHx8IChcbiAgICB0aGlzLndhdmVkYXRhID0gbmV3IFVpbnQ4QXJyYXkoKHRoaXMuYW5hbHlzZXJbMF0gfHwgdGhpcy5hbmFseXNlcikuZnJlcXVlbmN5QmluQ291bnQpXG4gIClcblxuICB2YXIgYW5hbHlzZXIgPSB0aGlzLnN0ZXJlb1xuICAgID8gdGhpcy5hbmFseXNlcltjaGFubmVsIHx8IDBdXG4gICAgOiB0aGlzLmFuYWx5c2VyXG5cbiAgYW5hbHlzZXIuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKG91dHB1dClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cbldlYkF1ZGlvQW5hbHlzZXIucHJvdG90eXBlLmZyZXF1ZW5jaWVzID0gZnVuY3Rpb24ob3V0cHV0LCBjaGFubmVsKSB7XG4gIGlmICghb3V0cHV0KSBvdXRwdXQgPSB0aGlzLmZyZXFkYXRhIHx8IChcbiAgICB0aGlzLmZyZXFkYXRhID0gbmV3IFVpbnQ4QXJyYXkoKHRoaXMuYW5hbHlzZXJbMF0gfHwgdGhpcy5hbmFseXNlcikuZnJlcXVlbmN5QmluQ291bnQpXG4gIClcblxuICB2YXIgYW5hbHlzZXIgPSB0aGlzLnN0ZXJlb1xuICAgID8gdGhpcy5hbmFseXNlcltjaGFubmVsIHx8IDBdXG4gICAgOiB0aGlzLmFuYWx5c2VyXG5cbiAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEob3V0cHV0KVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tYW5hbHlzZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBidWZmZXIgPSByZXF1aXJlKCcuL2xpYi9idWZmZXItc291cmNlJylcbnZhciBtZWRpYSA9IHJlcXVpcmUoJy4vbGliL21lZGlhLXNvdXJjZScpXG5cbm1vZHVsZS5leHBvcnRzID0gd2ViQXVkaW9QbGF5ZXJcbmZ1bmN0aW9uIHdlYkF1ZGlvUGxheWVyIChzcmMsIG9wdCkge1xuICBpZiAoIXNyYykgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzcGVjaWZ5IGEgc3JjIHBhcmFtZXRlcicpXG4gIG9wdCA9IG9wdCB8fCB7fVxuICBpZiAob3B0LmJ1ZmZlcikgcmV0dXJuIGJ1ZmZlcihzcmMsIG9wdClcbiAgZWxzZSByZXR1cm4gbWVkaWEoc3JjLCBvcHQpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNhblBsYXlTcmMgPSByZXF1aXJlKCcuL2Nhbi1wbGF5LXNyYycpXG52YXIgY3JlYXRlQXVkaW9Db250ZXh0ID0gcmVxdWlyZSgnLi9hdWRpby1jb250ZXh0JylcbnZhciB4aHJBdWRpbyA9IHJlcXVpcmUoJy4veGhyLWF1ZGlvJylcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciByaWdodE5vdyA9IHJlcXVpcmUoJ3JpZ2h0LW5vdycpXG52YXIgcmVzdW1lID0gcmVxdWlyZSgnLi9yZXN1bWUtY29udGV4dCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQnVmZmVyU291cmNlXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJTb3VyY2UgKHNyYywgb3B0KSB7XG4gIG9wdCA9IG9wdCB8fCB7fVxuICB2YXIgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICB2YXIgYXVkaW9Db250ZXh0ID0gb3B0LmNvbnRleHQgfHwgY3JlYXRlQXVkaW9Db250ZXh0KClcblxuICAvLyBhIHBhc3MtdGhyb3VnaCBub2RlIHNvIHVzZXIganVzdCBuZWVkcyB0b1xuICAvLyBjb25uZWN0KCkgb25jZVxuICB2YXIgYnVmZmVyTm9kZSwgYnVmZmVyLCBkdXJhdGlvblxuICB2YXIgbm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcbiAgdmFyIGF1ZGlvU3RhcnRUaW1lID0gbnVsbFxuICB2YXIgYXVkaW9QYXVzZVRpbWUgPSBudWxsXG4gIHZhciBhdWRpb0N1cnJlbnRUaW1lID0gMFxuICB2YXIgcGxheWluZyA9IGZhbHNlXG4gIHZhciBsb29wID0gb3B0Lmxvb3BcblxuICBlbWl0dGVyLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBsYXlpbmcpIHJldHVyblxuICAgIHBsYXlpbmcgPSB0cnVlXG5cbiAgICBpZiAob3B0LmF1dG9SZXN1bWUgIT09IGZhbHNlKSByZXN1bWUoZW1pdHRlci5jb250ZXh0KVxuICAgIGRpc3Bvc2VCdWZmZXIoKVxuICAgIGJ1ZmZlck5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKClcbiAgICBidWZmZXJOb2RlLmNvbm5lY3QoZW1pdHRlci5ub2RlKVxuICAgIGJ1ZmZlck5vZGUub25lbmRlZCA9IGVuZGVkXG4gICAgaWYgKGJ1ZmZlcikge1xuICAgICAgLy8gTWlnaHQgYmUgbnVsbCB1bmRlZmluZWQgaWYgd2UgYXJlIHN0aWxsIGxvYWRpbmdcbiAgICAgIGJ1ZmZlck5vZGUuYnVmZmVyID0gYnVmZmVyXG4gICAgfVxuICAgIGlmIChsb29wKSB7XG4gICAgICBidWZmZXJOb2RlLmxvb3AgPSB0cnVlXG4gICAgICBpZiAodHlwZW9mIG9wdC5sb29wU3RhcnQgPT09ICdudW1iZXInKSBidWZmZXJOb2RlLmxvb3BTdGFydCA9IG9wdC5sb29wU3RhcnRcbiAgICAgIGlmICh0eXBlb2Ygb3B0Lmxvb3BFbmQgPT09ICdudW1iZXInKSBidWZmZXJOb2RlLmxvb3BFbmQgPSBvcHQubG9vcEVuZFxuICAgIH1cblxuICAgIGlmIChkdXJhdGlvbiAmJiBhdWRpb0N1cnJlbnRUaW1lID4gZHVyYXRpb24pIHtcbiAgICAgIC8vIGZvciB3aGVuIGl0IGxvb3BzLi4uXG4gICAgICBhdWRpb0N1cnJlbnRUaW1lID0gYXVkaW9DdXJyZW50VGltZSAlIGR1cmF0aW9uXG4gICAgfVxuICAgIHZhciBuZXh0VGltZSA9IGF1ZGlvQ3VycmVudFRpbWVcblxuICAgIGJ1ZmZlck5vZGUuc3RhcnQoMCwgbmV4dFRpbWUpXG4gICAgYXVkaW9TdGFydFRpbWUgPSByaWdodE5vdygpXG4gIH1cblxuICBlbWl0dGVyLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGxheWluZykgcmV0dXJuXG4gICAgcGxheWluZyA9IGZhbHNlXG4gICAgLy8gRG9uJ3QgbGV0IHRoZSBcImVuZFwiIGV2ZW50XG4gICAgLy8gZ2V0IHRyaWdnZXJlZCBvbiBtYW51YWwgcGF1c2UuXG4gICAgYnVmZmVyTm9kZS5vbmVuZGVkID0gbnVsbFxuICAgIGJ1ZmZlck5vZGUuc3RvcCgwKVxuICAgIGF1ZGlvUGF1c2VUaW1lID0gcmlnaHROb3coKVxuICAgIGF1ZGlvQ3VycmVudFRpbWUgKz0gKGF1ZGlvUGF1c2VUaW1lIC0gYXVkaW9TdGFydFRpbWUpIC8gMTAwMFxuICB9XG5cbiAgZW1pdHRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGVtaXR0ZXIucGF1c2UoKVxuICAgIGVuZGVkKClcbiAgfVxuXG4gIGVtaXR0ZXIuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwb3NlQnVmZmVyKClcbiAgICBidWZmZXIgPSBudWxsXG4gIH1cblxuICBlbWl0dGVyLm5vZGUgPSBub2RlXG4gIGVtaXR0ZXIuY29udGV4dCA9IGF1ZGlvQ29udGV4dFxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGVtaXR0ZXIsIHtcbiAgICBkdXJhdGlvbjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkdXJhdGlvblxuICAgICAgfVxuICAgIH0sXG4gICAgcGxheWluZzoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbGF5aW5nXG4gICAgICB9XG4gICAgfSxcbiAgICBidWZmZXI6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYnVmZmVyXG4gICAgICB9XG4gICAgfSxcbiAgICB2b2x1bWU6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9kZS5nYWluLnZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobikge1xuICAgICAgICBub2RlLmdhaW4udmFsdWUgPSBuXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC8vIHNldCBpbml0aWFsIHZvbHVtZVxuICBpZiAodHlwZW9mIG9wdC52b2x1bWUgPT09ICdudW1iZXInKSB7XG4gICAgZW1pdHRlci52b2x1bWUgPSBvcHQudm9sdW1lXG4gIH1cblxuICAvLyBmaWx0ZXIgZG93biB0byBhIGxpc3Qgb2YgcGxheWFibGUgc291cmNlc1xuICB2YXIgc291cmNlcyA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFsgc3JjIF1cbiAgc291cmNlcyA9IHNvdXJjZXMuZmlsdGVyKEJvb2xlYW4pXG4gIHZhciBwbGF5YWJsZSA9IHNvdXJjZXMuc29tZShjYW5QbGF5U3JjKVxuICBpZiAocGxheWFibGUpIHtcbiAgICB2YXIgc291cmNlID0gc291cmNlcy5maWx0ZXIoY2FuUGxheVNyYylbMF1cbiAgICAvLyBTdXBwb3J0IHRoZSBzYW1lIHNvdXJjZSB0eXBlcyBhcyBpblxuICAgIC8vIE1lZGlhRWxlbWVudCBtb2RlLi4uXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNvdXJjZS5zcmMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzb3VyY2UgPSBzb3VyY2Uuc3JjXG4gICAgfVxuICAgIC8vIFdlIGhhdmUgYXQgbGVhc3Qgb25lIHBsYXlhYmxlIHNvdXJjZS5cbiAgICAvLyBGb3Igbm93IGp1c3QgcGxheSB0aGUgZmlyc3QsXG4gICAgLy8gaWRlYWxseSB0aGlzIG1vZHVsZSBjb3VsZCBhdHRlbXB0IGVhY2ggb25lLlxuICAgIHN0YXJ0TG9hZChzb3VyY2UpXG4gIH0gZWxzZSB7XG4gICAgLy8gbm8gc291cmNlcyBjYW4gYmUgcGxheWVkLi4uXG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2Vycm9yJywgY2FuUGxheVNyYy5jcmVhdGVFcnJvcihzb3VyY2VzKSlcbiAgICB9KVxuICB9XG4gIHJldHVybiBlbWl0dGVyXG5cbiAgZnVuY3Rpb24gc3RhcnRMb2FkIChzcmMpIHtcbiAgICB4aHJBdWRpbyhhdWRpb0NvbnRleHQsIHNyYywgZnVuY3Rpb24gYXVkaW9EZWNvZGVkIChlcnIsIGRlY29kZWQpIHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBlbWl0dGVyLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgYnVmZmVyID0gZGVjb2RlZCAvLyBzdG9yZSBmb3IgbGF0ZXIgdXNlXG4gICAgICBpZiAoYnVmZmVyTm9kZSkge1xuICAgICAgICAvLyBpZiBwbGF5KCkgd2FzIGNhbGxlZCBlYXJseVxuICAgICAgICBidWZmZXJOb2RlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgICAgfVxuICAgICAgZHVyYXRpb24gPSBidWZmZXIuZHVyYXRpb25cbiAgICAgIG5vZGUuYnVmZmVyID0gYnVmZmVyXG4gICAgICBlbWl0dGVyLmVtaXQoJ2xvYWQnKVxuICAgIH0sIGZ1bmN0aW9uIGF1ZGlvUHJvZ3Jlc3MgKGFtb3VudCwgdG90YWwpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgncHJvZ3Jlc3MnLCBhbW91bnQsIHRvdGFsKVxuICAgIH0sIGZ1bmN0aW9uIGF1ZGlvRGVjb2RpbmcgKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdkZWNvZGluZycpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZGVkICgpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2VuZCcpXG4gICAgcGxheWluZyA9IGZhbHNlXG4gICAgYXVkaW9DdXJyZW50VGltZSA9IDBcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3Bvc2VCdWZmZXIgKCkge1xuICAgIGlmIChidWZmZXJOb2RlKSBidWZmZXJOb2RlLmRpc2Nvbm5lY3QoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYnVmZmVyLXNvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBhZGRPbmNlXG5mdW5jdGlvbiBhZGRPbmNlIChlbGVtZW50LCBldmVudCwgZm4pIHtcbiAgZnVuY3Rpb24gdG1wIChldikge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgdG1wLCBmYWxzZSlcbiAgICBmbihldiwgZWxlbWVudClcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRtcCwgZmFsc2UpXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2V2ZW50LWFkZC1vbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG52YXIgY3JlYXRlQXVkaW8gPSByZXF1aXJlKCdzaW1wbGUtbWVkaWEtZWxlbWVudCcpLmF1ZGlvXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpXG5cbnZhciByZXN1bWUgPSByZXF1aXJlKCcuL3Jlc3VtZS1jb250ZXh0JylcbnZhciBjcmVhdGVBdWRpb0NvbnRleHQgPSByZXF1aXJlKCcuL2F1ZGlvLWNvbnRleHQnKVxudmFyIGNhblBsYXlTcmMgPSByZXF1aXJlKCcuL2Nhbi1wbGF5LXNyYycpXG52YXIgYWRkT25jZSA9IHJlcXVpcmUoJy4vZXZlbnQtYWRkLW9uY2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU1lZGlhU291cmNlXG5mdW5jdGlvbiBjcmVhdGVNZWRpYVNvdXJjZSAoc3JjLCBvcHQpIHtcbiAgb3B0ID0gYXNzaWduKHt9LCBvcHQpXG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgLy8gRGVmYXVsdCB0byBBdWRpbyBpbnN0ZWFkIG9mIEhUTUxBdWRpb0VsZW1lbnRcbiAgLy8gVGhlcmUgaXMgbm90IG11Y2ggZGlmZmVyZW5jZSBleGNlcHQgaW4gdGhlIGZvbGxvd2luZzpcbiAgLy8gICAgeCBpbnN0YW5jZW9mIEF1ZGlvXG4gIC8vICAgIHggaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50XG4gIC8vIEFuZCBpbiBteSBleHBlcmllbmNlIEF1ZGlvIGhhcyBiZXR0ZXIgc3VwcG9ydCBvbiB2YXJpb3VzXG4gIC8vIHBsYXRmb3JtcyBsaWtlIENvY29vbkpTLlxuICAvLyBQbGVhc2Ugb3BlbiBhbiBpc3N1ZSBpZiB0aGVyZSBpcyBhIGNvbmNlcm4gd2l0aCB0aGlzLlxuICBpZiAoIW9wdC5lbGVtZW50KSBvcHQuZWxlbWVudCA9IG5ldyB3aW5kb3cuQXVkaW8oKVxuXG4gIHZhciBkZXNpcmVkVm9sdW1lID0gb3B0LnZvbHVtZVxuICBkZWxldGUgb3B0LnZvbHVtZSAvLyBtYWtlIHN1cmUgPGF1ZGlvPiB0YWcgcmVjZWl2ZXMgZnVsbCB2b2x1bWVcbiAgdmFyIGF1ZGlvID0gY3JlYXRlQXVkaW8oc3JjLCBvcHQpXG4gIHZhciBhdWRpb0NvbnRleHQgPSBvcHQuY29udGV4dCB8fCBjcmVhdGVBdWRpb0NvbnRleHQoKVxuICB2YXIgbm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcbiAgdmFyIG1lZGlhTm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pXG4gIG1lZGlhTm9kZS5jb25uZWN0KG5vZGUpXG5cbiAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZW1pdHRlci5lbWl0KCdlbmQnKVxuICB9KVxuICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUExBWVwiKVxuICB9KVxuXG4gIHZhciBsb29wU3RhcnQgPSBvcHQubG9vcFN0YXJ0XG4gIHZhciBsb29wRW5kID0gb3B0Lmxvb3BFbmRcbiAgdmFyIGhhc0xvb3BTdGFydCA9IHR5cGVvZiBsb29wU3RhcnQgPT09ICdudW1iZXInICYmIGlzRmluaXRlKGxvb3BTdGFydClcbiAgdmFyIGhhc0xvb3BFbmQgPSB0eXBlb2YgbG9vcEVuZCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobG9vcEVuZClcbiAgdmFyIGlzTG9vcFJlYWR5ID0gZmFsc2VcbiAgaWYgKGhhc0xvb3BTdGFydCB8fCBoYXNMb29wRW5kKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAgICAgLy8gYXVkaW8gaGFzbid0IGJlZW4gbG9hZGVkIHlldC4uLlxuICAgICAgaWYgKHR5cGVvZiBhdWRpby5kdXJhdGlvbiAhPT0gJ251bWJlcicpIHJldHVyblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gYXVkaW8uY3VycmVudFRpbWVcblxuICAgICAgLy8gd2hlcmUgdG8gZW5kIHRoZSBidWZmZXJcbiAgICAgIHZhciBlbmRUaW1lID0gaGFzTG9vcEVuZCA/IE1hdGgubWluKGF1ZGlvLmR1cmF0aW9uLCBsb29wRW5kKSA6IGF1ZGlvLmR1cmF0aW9uXG5cbiAgICAgIGlmIChjdXJyZW50VGltZSA+IChsb29wU3RhcnQgfHwgMCkpIHtcbiAgICAgICAgaXNMb29wUmVhZHkgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGp1bXAgYWhlYWQgdG8gbG9vcCBzdGFydCBwb2ludFxuICAgICAgaWYgKGhhc0xvb3BTdGFydCAmJiBpc0xvb3BSZWFkeSAmJiBjdXJyZW50VGltZSA8IGxvb3BTdGFydCkge1xuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGxvb3BTdGFydFxuICAgICAgfVxuXG4gICAgICAvLyBpZiB3ZSd2ZSBoaXQgdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gICAgICBpZiAoY3VycmVudFRpbWUgPj0gZW5kVGltZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBsb29wIGVuZCBwb2ludCwgbGV0IG5hdGl2ZSBsb29waW5nIHRha2Ugb3ZlclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbG9vcCBlbmQgcG9pbnQsIGp1bXAgYmFjayB0byBzdGFydCBwb2ludCBvciB6ZXJvXG4gICAgICAgIGlmIChoYXNMb29wRW5kKSB7XG4gICAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSBoYXNMb29wU3RhcnQgPyBsb29wU3RhcnQgOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxuICAgIH0pO1xuICB9XG5cbiAgZW1pdHRlci5lbGVtZW50ID0gYXVkaW9cbiAgZW1pdHRlci5jb250ZXh0ID0gYXVkaW9Db250ZXh0XG4gIGVtaXR0ZXIubm9kZSA9IG5vZGVcbiAgZW1pdHRlci5wYXVzZSA9IGF1ZGlvLnBhdXNlLmJpbmQoYXVkaW8pXG4gIGVtaXR0ZXIucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3B0LmF1dG9SZXN1bWUgIT09IGZhbHNlKSByZXN1bWUoZW1pdHRlci5jb250ZXh0KVxuICAgIHJldHVybiBhdWRpby5wbGF5KClcbiAgfVxuXG4gIC8vIFRoaXMgZXhpc3RzIGN1cnJlbnRseSBmb3IgcGFyaXR5IHdpdGggQnVmZmVyIHNvdXJjZVxuICAvLyBPcGVuIHRvIHN1Z2dlc3Rpb25zIGZvciB3aGF0IHRoaXMgc2hvdWxkIGRpc3Bvc2UuLi5cbiAgZW1pdHRlci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge31cblxuICBlbWl0dGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdhc1BsYXlpbmcgPSBlbWl0dGVyLnBsYXlpbmdcbiAgICBhdWRpby5wYXVzZSgpXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwXG4gICAgaXNMb29wUmVhZHkgPSBmYWxzZVxuICAgIGlmICh3YXNQbGF5aW5nKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2VuZCcpXG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZW1pdHRlciwge1xuICAgIGR1cmF0aW9uOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGF1ZGlvLmR1cmF0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICBjdXJyZW50VGltZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhdWRpby5jdXJyZW50VGltZVxuICAgICAgfVxuICAgIH0sXG4gICAgcGxheWluZzoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhYXVkaW8ucGF1c2VkXG4gICAgICB9XG4gICAgfSxcbiAgICB2b2x1bWU6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9kZS5nYWluLnZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobikge1xuICAgICAgICBub2RlLmdhaW4udmFsdWUgPSBuXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC8vIFNldCBpbml0aWFsIHZvbHVtZVxuICBpZiAodHlwZW9mIGRlc2lyZWRWb2x1bWUgPT09ICdudW1iZXInKSB7XG4gICAgZW1pdHRlci52b2x1bWUgPSBkZXNpcmVkVm9sdW1lXG4gIH1cblxuICAvLyBDaGVjayBpZiBhbGwgc291cmNlcyBhcmUgdW5wbGF5YWJsZSxcbiAgLy8gaWYgc28gd2UgZW1pdCBhbiBlcnJvciBzaW5jZSB0aGUgYnJvd3NlclxuICAvLyBtaWdodCBub3QuXG4gIHZhciBzb3VyY2VzID0gQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogWyBzcmMgXVxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgdmFyIHBsYXlhYmxlID0gc291cmNlcy5zb21lKGNhblBsYXlTcmMpXG4gIGlmIChwbGF5YWJsZSkge1xuICAgIC8vIEF0IGxlYXN0IG9uZSBzb3VyY2UgaXMgcHJvYmFibHkvbWF5YmUgcGxheWFibGVcbiAgICBzdGFydExvYWQoKVxuICB9IGVsc2Uge1xuICAgIC8vIGVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIHVzZXIgY2FuIGNhdGNoIGl0XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2Vycm9yJywgY2FuUGxheVNyYy5jcmVhdGVFcnJvcihzb3VyY2VzKSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVtaXR0ZXJcblxuICBmdW5jdGlvbiBzdGFydExvYWQgKCkge1xuICAgIC8vIFRoZSBmaWxlIGVycm9ycyAobGlrZSBkZWNvZGluZyAvIDQwNHMpIGFwcGVhciBvbiA8c291cmNlPlxuICAgIHZhciBzcmNFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGF1ZGlvLmNoaWxkcmVuKVxuICAgIHZhciByZW1haW5pbmdTcmNFcnJvcnMgPSBzcmNFbGVtZW50cy5sZW5ndGhcbiAgICB2YXIgaGFzRXJyb3JlZCA9IGZhbHNlXG4gICAgdmFyIHNvdXJjZUVycm9yID0gZnVuY3Rpb24gKGVyciwgZWwpIHtcbiAgICAgIGlmIChoYXNFcnJvcmVkKSByZXR1cm5cbiAgICAgIHJlbWFpbmluZ1NyY0Vycm9ycy0tXG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGxvYWRpbmcgc291cmNlOiAnICsgZWwuZ2V0QXR0cmlidXRlKCdzcmMnKSlcbiAgICAgIGlmIChyZW1haW5pbmdTcmNFcnJvcnMgPD0gMCkge1xuICAgICAgICBoYXNFcnJvcmVkID0gdHJ1ZVxuICAgICAgICBzcmNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc291cmNlRXJyb3IsIGZhbHNlKVxuICAgICAgICB9KVxuICAgICAgICBlbWl0dGVyLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdDb3VsZCBub3QgcGxheSBhbnkgb2YgdGhlIHN1cHBsaWVkIHNvdXJjZXMnKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnbG9hZCcpXG4gICAgfVxuXG4gICAgaWYgKGF1ZGlvLnJlYWR5U3RhdGUgPj0gYXVkaW8uSEFWRV9FTk9VR0hfREFUQSkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhkb25lKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRPbmNlKGF1ZGlvLCAnY2FucGxheScsIGRvbmUpXG4gICAgICBhZGRPbmNlKGF1ZGlvLCAnZXJyb3InLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KG5ldyBFcnJvcignVW5rbm93biBlcnJvciB3aGlsZSBsb2FkaW5nIDxhdWRpbz4nKSlcbiAgICAgIH0pXG4gICAgICBzcmNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBhZGRPbmNlKGVsLCAnZXJyb3InLCBzb3VyY2VFcnJvcilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gT24gbW9zdCBicm93c2VycyB0aGUgbG9hZGluZyBiZWdpbnNcbiAgICAvLyBpbW1lZGlhdGVseS4gSG93ZXZlciwgb24gaU9TIDkuMiBTYWZhcmksXG4gICAgLy8geW91IG5lZWQgdG8gY2FsbCBsb2FkKCkgZm9yIGV2ZW50c1xuICAgIC8vIHRvIGJlIHRyaWdnZXJlZC5cbiAgICBhdWRpby5sb2FkKClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL21lZGlhLXNvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHhociA9IHJlcXVpcmUoJ3hocicpXG52YXIgeGhyUHJvZ3Jlc3MgPSByZXF1aXJlKCd4aHItcHJvZ3Jlc3MnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHhockF1ZGlvXG5mdW5jdGlvbiB4aHJBdWRpbyAoYXVkaW9Db250ZXh0LCBzcmMsIGNiLCBwcm9ncmVzcywgZGVjb2RpbmcpIHtcbiAgdmFyIHhock9iamVjdCA9IHhocih7XG4gICAgdXJpOiBzcmMsXG4gICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInXG4gIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3AsIGFycmF5QnVmKSB7XG4gICAgaWYgKCEvXjIvLnRlc3QocmVzcC5zdGF0dXNDb2RlKSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdzdGF0dXMgY29kZSAnICsgcmVzcC5zdGF0dXNDb2RlICsgJyByZXF1ZXN0aW5nICcgKyBzcmMpXG4gICAgfVxuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgZGVjb2RlKGFycmF5QnVmKVxuICB9KVxuXG4gIHhoclByb2dyZXNzKHhock9iamVjdClcbiAgICAub24oJ2RhdGEnLCBmdW5jdGlvbiAoYW1vdW50LCB0b3RhbCkge1xuICAgICAgcHJvZ3Jlc3MoYW1vdW50LCB0b3RhbClcbiAgICB9KVxuXG4gIGZ1bmN0aW9uIGRlY29kZSAoYXJyYXlCdWYpIHtcbiAgICBkZWNvZGluZygpXG4gICAgYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZiwgZnVuY3Rpb24gKGRlY29kZWQpIHtcbiAgICAgIGNiKG51bGwsIGRlY29kZWQpXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignRXJyb3IgZGVjb2RpbmcgYXVkaW8gZGF0YScpXG4gICAgICBlcnIudHlwZSA9ICdERUNPREVfQVVESU9fREFUQSdcbiAgICAgIGNiKGVycilcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIveGhyLWF1ZGlvLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBQSE9OR1xcblxcbnZhcnlpbmcgdmVjMyB2Vmlld1Bvc2l0aW9uO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudW5pZm9ybSBmbG9hdCB1VGltZTtcXG5cXG4jaWZuZGVmIEZMQVRfU0hBREVEXFxuXFxuICAgIHZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcblxcbiNlbmRpZlxcblxcbiNpbmNsdWRlIDxjb21tb24+XFxuI2luY2x1ZGUgPHV2X3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDx1djJfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGRpc3BsYWNlbWVudG1hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8ZW52bWFwX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Zm9nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxtb3JwaHRhcmdldF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8c2tpbm5pbmdfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfcGFyc192ZXJ0ZXg+XFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICAjaW5jbHVkZSA8dXZfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8dXYyX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGNvbG9yX3ZlcnRleD5cXG5cXG4gICAgI2luY2x1ZGUgPGJlZ2lubm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPG1vcnBobm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNraW5iYXNlX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNraW5ub3JtYWxfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8ZGVmYXVsdG5vcm1hbF92ZXJ0ZXg+XFxuXFxuICAgICNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxwcm9qZWN0X3ZlcnRleD5cXG5cXG4gICAgdlZpZXdQb3NpdGlvbiA9IC0gbXZQb3NpdGlvbi54eXo7XFxuICAgIHZVdiA9IHV2O1xcblxcbiAgICAjaW5jbHVkZSA8d29ybGRwb3NfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8ZW52bWFwX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGZvZ192ZXJ0ZXg+XFxuXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG4jZGVmaW5lIE1fUEkgMy4xNFxcblxcbnVuaWZvcm0gdmVjMyBkaWZmdXNlO1xcbnVuaWZvcm0gdmVjMyBlbWlzc2l2ZTtcXG51bmlmb3JtIHZlYzMgc3BlY3VsYXI7XFxudW5pZm9ybSBmbG9hdCBzaGluaW5lc3M7XFxudW5pZm9ybSBmbG9hdCBvcGFjaXR5O1xcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxudW5pZm9ybSB2ZWMzIHVTdHJpcGVPcmllbnRhdGlvbjtcXG51bmlmb3JtIGZsb2F0IHVJbnZlcnQ7XFxudW5pZm9ybSB2ZWMzIHVTcXVhcmU7XFxudW5pZm9ybSBmbG9hdCB1V2lkdGg7XFxudW5pZm9ybSBmbG9hdCB1SGVpZ2h0O1xcbnVuaWZvcm0gZmxvYXQgdUxlbmd0aDtcXG51bmlmb3JtIGZsb2F0IHVQcm9ncmVzcztcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbiNpbmNsdWRlIDxjb21tb24+XFxuI2luY2x1ZGUgPHBhY2tpbmc+XFxuI2luY2x1ZGUgPGNvbG9yX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPHV2X3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPHV2Ml9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxmb2dfcGFyc19mcmFnbWVudD5cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgZGlmZnVzZUNvbG9yID0gdmVjNCggZGlmZnVzZSwgb3BhY2l0eSApO1xcbiAgICAvLyBSZWZsZWN0ZWRMaWdodCByZWZsZWN0ZWRMaWdodCA9IFJlZmxlY3RlZExpZ2h0KCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSApO1xcbiAgICAvLyB2ZWMzIHRvdGFsRW1pc3NpdmVSYWRpYW5jZSA9IGVtaXNzaXZlO1xcblxcbiAgICB2ZWM0IGNvbG9yID0gZGlmZnVzZUNvbG9yO1xcblxcbiAgICBmbG9hdCBhYnNYID0gZmxvb3IoLWNvcygodVRpbWUgKiAwLjEgKyBNX1BJICogdVNxdWFyZS54ICogKCAoIHZVdi54ICsgdVByb2dyZXNzICsgMC4xNSApICogMi4gLSAxLiApICogMC41KSkpICsgMS47XFxuICAgIGZsb2F0IGFic1kgPSBmbG9vcigtY29zKChNX1BJICogdVNxdWFyZS55ICogKCB2VXYueSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcblxcbiAgICBpZiAoIGFic1ggPiAwLiB8fCBhYnNZID4gMC4gKSB7XFxuICAgICAgIGNvbG9yID0gdmVjNCh2ZWMzKDEuMCAtIHVJbnZlcnQpLCBkaWZmdXNlQ29sb3IuYSk7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICBjb2xvciA9IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpOyAgXFxuICAgIH1cXG5cXG4gICAgLy8gY29sb3IgPSB2VXYueCA+IDEuIC0gdVByb2dyZXNzICA/IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpIDogdmVjNCh2ZWMzKDAuMCArIHVJbnZlcnQpLCBkaWZmdXNlQ29sb3IuYSk7XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG5cXG4gICAgI2luY2x1ZGUgPGZvZ19mcmFnbWVudD5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vc2hhZGVycy9wcm9ncmVzcy5mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9ncmVzc1xuXG5mdW5jdGlvbiBwcm9ncmVzcyh4aHIpIHtcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyXG4gIHZhciBmaW5pc2hlZCA9IGZhbHNlXG5cbiAgaWYgKHhoci5hdHRhY2hFdmVudCkge1xuICAgIHhoci5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZG9uZSlcbiAgICByZXR1cm4gZW1pdHRlclxuICB9XG5cbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lLCBmYWxzZSlcbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICBmdW5jdGlvbiBwcm9ncmVzcyhldmVudCkge1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgID8gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWxcbiAgICAgIDogMFxuXG4gICAgaWYgKCFmaW5pc2hlZCkgZW1pdHRlci5lbWl0KCdkYXRhJ1xuICAgICAgLCB2YWx1ZVxuICAgICAgLCBldmVudC50b3RhbCB8fCBudWxsXG4gICAgKVxuXG4gICAgZmluaXNoZWQgPSB2YWx1ZSA9PT0gMVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlICE9PSAnbG9hZCcgJiYgIS9eKHJlYWR5fGNvbXBsZXRlKSQvZy50ZXN0KFxuICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkucmVhZHlTdGF0ZVxuICAgICkpIHJldHVyblxuXG4gICAgaWYgKGZpbmlzaGVkKSByZXR1cm5cbiAgICBpZiAoeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHhoci5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzcywgZmFsc2UpXG4gICAgfSBlbHNlXG4gICAgaWYgKHhoci5kZXRhdGNoRXZlbnQpIHtcbiAgICAgIHhoci5kZXRhdGNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KCdkYXRhJywgMSwgZXZlbnQudG90YWwgfHwgbnVsbClcbiAgICBlbWl0dGVyLmVtaXQoJ2RvbmUnKVxuICAgIGZpbmlzaGVkID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGVtaXR0ZXJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94aHItcHJvZ3Jlc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoXCJpcy1mdW5jdGlvblwiKVxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoXCJwYXJzZS1oZWFkZXJzXCIpXG52YXIgeHRlbmQgPSByZXF1aXJlKFwieHRlbmRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVYSFJcbmNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCBub29wXG5jcmVhdGVYSFIuWERvbWFpblJlcXVlc3QgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCkpID8gY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0IDogd2luZG93LlhEb21haW5SZXF1ZXN0XG5cbmZvckVhY2hBcnJheShbXCJnZXRcIiwgXCJwdXRcIiwgXCJwb3N0XCIsIFwicGF0Y2hcIiwgXCJoZWFkXCIsIFwiZGVsZXRlXCJdLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBjcmVhdGVYSFJbbWV0aG9kID09PSBcImRlbGV0ZVwiID8gXCJkZWxcIiA6IG1ldGhvZF0gPSBmdW5jdGlvbih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRvcihhcnJheVtpXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKXtcbiAgICBmb3IodmFyIGkgaW4gb2JqKXtcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHBhcmFtcyA9IHVyaVxuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7dXJpOnVyaX1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHh0ZW5kKG9wdGlvbnMsIHt1cmk6IHVyaX0pXG4gICAgfVxuXG4gICAgcGFyYW1zLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICByZXR1cm4gcGFyYW1zXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlWEhSKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbGxiYWNrIGFyZ3VtZW50IG1pc3NpbmdcIilcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYk9uY2UoZXJyLCByZXNwb25zZSwgYm9keSl7XG4gICAgICAgIGlmKCFjYWxsZWQpe1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhlcnIsIHJlc3BvbnNlLCBib2R5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRGdW5jLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IGdldFhtbCh4aHIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UsIHJlc3BvbnNlLmJvZHkpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciBhYm9ydGVkXG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybFxuICAgIHZhciBtZXRob2QgPSB4aHIubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIlxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YVxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuICAgIHZhciBmYWlsdXJlUmVzcG9uc2UgPSB7XG4gICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHN0YXR1c0NvZGU6IDAsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgfVxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5qc29uICE9PSBmYWxzZSkge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbiA9PT0gdHJ1ZSA/IGJvZHkgOiBvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZS8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIilcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgdGltZW91dFwiKVxuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIlxuICAgICAgICAgICAgZXJyb3JGdW5jKGUpXG4gICAgICAgIH0sIG9wdGlvbnMudGltZW91dCApXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG5cbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICAvLyBNaWNyb3NvZnQgRWRnZSBicm93c2VyIHNlbmRzIFwidW5kZWZpbmVkXCIgd2hlbiBzZW5kIGlzIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBzcGVjIHNheXMgdG8gcGFzcyBudWxsIGFzIGJvZHkgdG8gaW5kaWNhdGUgbm8gYm9keVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmF1Z3R1ci94aHIvaXNzdWVzLzEwMC5cbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpXG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5mdW5jdGlvbiBnZXRYbWwoeGhyKSB7XG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuICAgIHZhciBmaXJlZm94QnVnVGFrZW5FZmZlY3QgPSB4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gXCJwYXJzZXJlcnJvclwiXG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiXCIgJiYgIWZpcmVmb3hCdWdUYWtlbkVmZmVjdCkge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgY29uZmlnID0ge1xuICAgIHBhZHM6IFtcbiAgICAgICAgeyBpZDogMSwgbnVtYmVyOiA0NCB9LFxuICAgICAgICB7IGlkOiAyLCBudW1iZXI6IDQ1IH0sXG4gICAgICAgIHsgaWQ6IDMsIG51bWJlcjogNDYgfSxcbiAgICAgICAgeyBpZDogNCwgbnVtYmVyOiA0NyB9LFxuICAgICAgICB7IGlkOiA1LCBudW1iZXI6IDQ4IH0sXG4gICAgICAgIHsgaWQ6IDYsIG51bWJlcjogNDkgfSxcbiAgICAgICAgeyBpZDogNywgbnVtYmVyOiA1MCB9LFxuICAgICAgICB7IGlkOiA4LCBudW1iZXI6IDUxIH0sXG4gICAgXSxcbiAgICBrbm9iczogW1xuICAgICAgICB7IGlkOiAxLCBudW1iZXI6IDEgfSxcbiAgICAgICAgeyBpZDogMiwgbnVtYmVyOiAyIH0sXG4gICAgICAgIHsgaWQ6IDMsIG51bWJlcjogMyB9LFxuICAgICAgICB7IGlkOiA0LCBudW1iZXI6IDQgfSxcbiAgICAgICAgeyBpZDogNSwgbnVtYmVyOiA1IH0sXG4gICAgICAgIHsgaWQ6IDYsIG51bWJlcjogNiB9LFxuICAgICAgICB7IGlkOiA3LCBudW1iZXI6IDcgfSxcbiAgICAgICAgeyBpZDogOCwgbnVtYmVyOiA4IH0sXG4gICAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vY29uZmlnL01QS01pbmkuanMiLCJpbXBvcnQgV2ViTWlkaSBmcm9tICd3ZWJtaWRpJztcblxuZnVuY3Rpb24gbWFwKG4sIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgICByZXR1cm4gKChuLXN0YXJ0MSkvKHN0b3AxLXN0YXJ0MSkpKihzdG9wMi1zdGFydDIpK3N0YXJ0Mjtcbn1cblxuY2xhc3MgTWlkaUNvbnRyb2xsZXIge1xuXG5cdHN0YXRpYyBzdGFydCAoIGNvbmZpZyApIHtcblx0XHRNaWRpQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBNaWRpQ29udHJvbGxlcihjb25maWcpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IgKCBjb25maWcgKSB7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cblx0XHR0aGlzLnBhZHMgPSB7fTtcblx0XHR0aGlzLmtub2JzID0ge307XG5cblx0XHR0aGlzLm9uU3VjY2VzcyA9IDo6dGhpcy5vblN1Y2Nlc3M7XG5cdFx0dGhpcy5vbkVycm9yID0gOjp0aGlzLm9uRXJyb3I7XG5cdFx0dGhpcy5vbk1lc3NhZ2UgPSA6OnRoaXMub25NZXNzYWdlO1xuXG5cdFx0V2ViTWlkaS5lbmFibGUoICggZXJyICkgPT4ge1xuXHRcdFx0aWYgKCBlcnIgKSB7XG5cdFx0XHRcdHRoaXMub25FcnJvcihlcnIpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9uU3VjY2VzcygpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVxdWVzdEFjY2VzcyAoKSB7XG4gICAgICAgIGlmICggbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzICkge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKHtcbiAgICAgICAgICAgICAgICBzeXNleDogZmFsc2VcbiAgICAgICAgICAgIH0pLnRoZW4odGhpcy5vblN1Y2Nlc3MsIHRoaXMub25FcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChgWW91IGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSBNSURJIEFQSS5gKTtcbiAgICAgICAgfVxuXHR9XG5cblx0b25TdWNjZXNzICgpIHtcblx0XHRpZiAoIFdlYk1pZGkuaW5wdXRzLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdHRoaXMuaW5wdXQgPSBXZWJNaWRpLmlucHV0c1swXTtcblxuXHRcdFx0dGhpcy5wYXJzZUNvbmZpZygpO1xuXG5cdFx0XHR0aGlzLmlucHV0LmFkZExpc3RlbmVyKCdub3Rlb24nLCAnYWxsJywgKCBlICkgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5wYWRzKTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGtleXNbaV07XG5cdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaXB0aW9ucyA9IHRoaXMucGFkc1trZXldO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwOyBqIDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IGorKyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgbnVtYmVyLCBjaGFubmVsLCBjYWxsYmFjayB9ID0gc3Vic2NyaXB0aW9uc1tqXTtcblxuXHRcdFx0XHRcdFx0aWYgKCBlLm5vdGUubnVtYmVyID09PSBudW1iZXIgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKHsgdmVsb2NpdHk6IGUudmVsb2NpdHkgfSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC5hZGRMaXN0ZW5lcigncGl0Y2hiZW5kJywgJ2FsbCcsICggZSApID0+IHtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmlucHV0LmFkZExpc3RlbmVyKCdjb250cm9sY2hhbmdlJywgJ2FsbCcsICggZSApID0+IHtcblx0XHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua25vYnMpO1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0ga2V5c1tpXTtcblx0XHRcdFx0XHRjb25zdCBzdWJzY3JpcHRpb25zID0gdGhpcy5rbm9ic1trZXldO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwOyBqIDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IGorKyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgbnVtYmVyLCBjaGFubmVsLCBjYWxsYmFjayB9ID0gc3Vic2NyaXB0aW9uc1tqXTtcblxuXHRcdFx0XHRcdFx0aWYgKCBlLmNvbnRyb2xsZXIubnVtYmVyID09PSBudW1iZXIgKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbWFwKGUudmFsdWUsIDAsIDEyNywgMCwgMSk7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlQ29uZmlnICgpIHtcblx0XHQvLyB0aGlzLnBhZHMgPSB0aGlzLmNvbmZpZy5wYWRzO1xuXHRcdC8vIHRoaXMua25vYnMgPSB0aGlzLmNvbmZpZy5rbm9icztcblx0fVxuXG5cdG9uRXJyb3IgKCBlcnJvciApIHtcblx0XHRjb25zb2xlLmVycm9yKGBNaWRpQ29udHJvbGxlciA6OiBlcnJvciB3aGlsZSByZXF1ZXN0aW5nIE1JREkgYWNjZXNzLmApO1xuXHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XG5cdH1cblxuXHRvbk1lc3NhZ2UgKCBldmVudCApIHtcblx0XHRjb25zb2xlLmxvZyhgTWlkaUNvbnRyb2xsZXIgOjogb25NZXNzYWdlYCwgZXZlbnQpO1xuXHR9XG5cblx0c3RhdGljIG9uUGFkRG93biAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRjb25zdCB7IGluc3RhbmNlIH0gPSBNaWRpQ29udHJvbGxlcjtcblxuXHRcdGluc3RhbmNlLnJlZ2lzdGVyUGFkKGlkLCBjYWxsYmFjayk7XG5cdH1cblxuXHRzdGF0aWMgb25Lbm9iQ2hhbmdlICggaWQsIGNhbGxiYWNrICkge1xuXHRcdGNvbnN0IHsgaW5zdGFuY2UgfSA9IE1pZGlDb250cm9sbGVyO1xuXG5cdFx0aW5zdGFuY2UucmVnaXN0ZXJLbm9iKGlkLCBjYWxsYmFjayk7XG5cdH1cblxuXHRyZWdpc3RlclBhZCAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRpZiAoICF0aGlzLnBhZHNbaWRdICkge1xuXHRcdFx0dGhpcy5wYWRzW2lkXSA9IFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZmluZE51bWJlckluUGFkcyhpZCk7XG5cblx0XHRpZiAoIG51bWJlciApIHtcblx0XHRcdGlmICggdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHR0aGlzLnBhZHNbaWRdLnB1c2goeyBjYWxsYmFjaywgbnVtYmVyIH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNaWRpQ29udHJvbGxlciA6OiBvblBhZERvd24gJHtpZH0gOjogY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgUGFkICR7aWR9IG5vdCByZWdpc3RlcmVkIGluIGNvbmZpZ2ApO1xuXHRcdH1cblx0fVxuXG5cdHJlZ2lzdGVyS25vYiAoIGlkLCBjYWxsYmFjayApIHtcblx0XHRpZiAoICF0aGlzLmtub2JzW2lkXSApIHtcblx0XHRcdHRoaXMua25vYnNbaWRdID0gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5maW5kTnVtYmVySW5Lbm9icyhpZCk7XG5cblx0XHRpZiAoIG51bWJlciApIHtcblx0XHRcdGlmICggdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHR0aGlzLmtub2JzW2lkXS5wdXNoKHsgY2FsbGJhY2ssIG51bWJlciB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTWlkaUNvbnRyb2xsZXIgOjogb25Lbm9iQ2hhbmdlICR7aWR9IDo6IGNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uYCk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBNaWRpQ29udHJvbGxlcjogS25vYiAke2lkfSBub3QgcmVnaXN0ZXJlZCBpbiBjb25maWdgKTtcblx0XHR9XG5cdH1cblxuXHRmaW5kTnVtYmVySW5QYWRzICggaWQgKSB7XG5cdFx0Y29uc3QgeyBwYWRzIH0gPSB0aGlzLmNvbmZpZztcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHBhZHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRpZiAoIHBhZHNbaV0uaWQgPT09IGlkICkge1xuXHRcdFx0XHRyZXR1cm4gcGFkc1tpXS5udW1iZXI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZmluZE51bWJlckluS25vYnMgKCBpZCApIHtcblx0XHRjb25zdCB7IGtub2JzIH0gPSB0aGlzLmNvbmZpZztcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGtub2JzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0aWYgKCBrbm9ic1tpXS5pZCA9PT0gaWQgKSB7XG5cdFx0XHRcdHJldHVybiBrbm9ic1tpXS5udW1iZXI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNaWRpQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL01pZGlDb250cm9sbGVyLmpzIiwiLypcblxuV2ViTWlkaSB2Mi4wLjRcblxuV2ViTWlkaS5qcyBoZWxwcyB5b3UgdGFtZSB0aGUgV2ViIE1JREkgQVBJLiBTZW5kIGFuZCByZWNlaXZlIE1JREkgbWVzc2FnZXMgd2l0aCBlYXNlLiBDb250cm9sIGluc3RydW1lbnRzIHdpdGggdXNlci1mcmllbmRseSBmdW5jdGlvbnMgKHBsYXlOb3RlLCBzZW5kUGl0Y2hCZW5kLCBldGMuKS4gUmVhY3QgdG8gTUlESSBpbnB1dCB3aXRoIHNpbXBsZSBldmVudCBsaXN0ZW5lcnMgKG5vdGVvbiwgcGl0Y2hiZW5kLCBjb250cm9sY2hhbmdlLCBldGMuKS5cbmh0dHBzOi8vZ2l0aHViLmNvbS9jb3RlanAvd2VibWlkaVxuXG5cblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTUtMjAxOCwgSmVhbi1QaGlsaXBwZSBDw7R0w6lcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZFxuYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcbmluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG5zdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWxcbnBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUXG5OT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFU1xuT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG5DT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4hZnVuY3Rpb24oc2NvcGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIFdlYk1pZGkoKXtpZihXZWJNaWRpLnByb3RvdHlwZS5fc2luZ2xldG9uKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgYSBzaW5nbGV0b24sIGl0IGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQgZGlyZWN0bHkuXCIpO1dlYk1pZGkucHJvdG90eXBlLl9zaW5nbGV0b249dGhpcyx0aGlzLl9pbnB1dHM9W10sdGhpcy5fb3V0cHV0cz1bXSx0aGlzLl91c2VySGFuZGxlcnM9e30sdGhpcy5fc3RhdGVDaGFuZ2VRdWV1ZT1bXSx0aGlzLl9wcm9jZXNzaW5nU3RhdGVDaGFuZ2U9ITEsdGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cz1bXCJjb25uZWN0ZWRcIixcImRpc2Nvbm5lY3RlZFwiXSx0aGlzLl9ub3Rlcz1bXCJDXCIsXCJDI1wiLFwiRFwiLFwiRCNcIixcIkVcIixcIkZcIixcIkYjXCIsXCJHXCIsXCJHI1wiLFwiQVwiLFwiQSNcIixcIkJcIl0sdGhpcy5fc2VtaXRvbmVzPXtDOjAsRDoyLEU6NCxGOjUsRzo3LEE6OSxCOjExfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtNSURJX1NZU1RFTV9NRVNTQUdFUzp7dmFsdWU6e3N5c2V4OjI0MCx0aW1lY29kZToyNDEsc29uZ3Bvc2l0aW9uOjI0Mixzb25nc2VsZWN0OjI0Myx0dW5pbmdyZXF1ZXN0OjI0NixzeXNleGVuZDoyNDcsY2xvY2s6MjQ4LHN0YXJ0OjI1MCxcImNvbnRpbnVlXCI6MjUxLHN0b3A6MjUyLGFjdGl2ZXNlbnNpbmc6MjU0LHJlc2V0OjI1NSx1bmtub3duc3lzdGVtbWVzc2FnZTotMX0sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITF9LE1JRElfQ0hBTk5FTF9NRVNTQUdFUzp7dmFsdWU6e25vdGVvZmY6OCxub3Rlb246OSxrZXlhZnRlcnRvdWNoOjEwLGNvbnRyb2xjaGFuZ2U6MTEsY2hhbm5lbG1vZGU6MTEscHJvZ3JhbWNoYW5nZToxMixjaGFubmVsYWZ0ZXJ0b3VjaDoxMyxwaXRjaGJlbmQ6MTR9LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSOnt2YWx1ZTp7cGl0Y2hiZW5kcmFuZ2U6WzAsMF0sY2hhbm5lbGZpbmV0dW5pbmc6WzAsMV0sY2hhbm5lbGNvYXJzZXR1bmluZzpbMCwyXSx0dW5pbmdwcm9ncmFtOlswLDNdLHR1bmluZ2Jhbms6WzAsNF0sbW9kdWxhdGlvbnJhbmdlOlswLDVdLGF6aW11dGhhbmdsZTpbNjEsMF0sZWxldmF0aW9uYW5nbGU6WzYxLDFdLGdhaW46WzYxLDJdLGRpc3RhbmNlcmF0aW86WzYxLDNdLG1heGltdW1kaXN0YW5jZTpbNjEsNF0sbWF4aW11bWRpc3RhbmNlZ2FpbjpbNjEsNV0scmVmZXJlbmNlZGlzdGFuY2VyYXRpbzpbNjEsNl0scGFuc3ByZWFkYW5nbGU6WzYxLDddLHJvbGxhbmdsZTpbNjEsOF19LHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiExfSxNSURJX0NPTlRST0xfQ0hBTkdFX01FU1NBR0VTOnt2YWx1ZTp7YmFua3NlbGVjdGNvYXJzZTowLG1vZHVsYXRpb253aGVlbGNvYXJzZToxLGJyZWF0aGNvbnRyb2xsZXJjb2Fyc2U6Mixmb290Y29udHJvbGxlcmNvYXJzZTo0LHBvcnRhbWVudG90aW1lY29hcnNlOjUsZGF0YWVudHJ5Y29hcnNlOjYsdm9sdW1lY29hcnNlOjcsYmFsYW5jZWNvYXJzZTo4LHBhbmNvYXJzZToxMCxleHByZXNzaW9uY29hcnNlOjExLGVmZmVjdGNvbnRyb2wxY29hcnNlOjEyLGVmZmVjdGNvbnRyb2wyY29hcnNlOjEzLGdlbmVyYWxwdXJwb3Nlc2xpZGVyMToxNixnZW5lcmFscHVycG9zZXNsaWRlcjI6MTcsZ2VuZXJhbHB1cnBvc2VzbGlkZXIzOjE4LGdlbmVyYWxwdXJwb3Nlc2xpZGVyNDoxOSxiYW5rc2VsZWN0ZmluZTozMixtb2R1bGF0aW9ud2hlZWxmaW5lOjMzLGJyZWF0aGNvbnRyb2xsZXJmaW5lOjM0LGZvb3Rjb250cm9sbGVyZmluZTozNixwb3J0YW1lbnRvdGltZWZpbmU6MzcsZGF0YWVudHJ5ZmluZTozOCx2b2x1bWVmaW5lOjM5LGJhbGFuY2VmaW5lOjQwLHBhbmZpbmU6NDIsZXhwcmVzc2lvbmZpbmU6NDMsZWZmZWN0Y29udHJvbDFmaW5lOjQ0LGVmZmVjdGNvbnRyb2wyZmluZTo0NSxob2xkcGVkYWw6NjQscG9ydGFtZW50bzo2NSxzdXN0ZW51dG9wZWRhbDo2Nixzb2Z0cGVkYWw6NjcsbGVnYXRvcGVkYWw6NjgsaG9sZDJwZWRhbDo2OSxzb3VuZHZhcmlhdGlvbjo3MCxyZXNvbmFuY2U6NzEsc291bmRyZWxlYXNldGltZTo3Mixzb3VuZGF0dGFja3RpbWU6NzMsYnJpZ2h0bmVzczo3NCxzb3VuZGNvbnRyb2w2Ojc1LHNvdW5kY29udHJvbDc6NzYsc291bmRjb250cm9sODo3Nyxzb3VuZGNvbnRyb2w5Ojc4LHNvdW5kY29udHJvbDEwOjc5LGdlbmVyYWxwdXJwb3NlYnV0dG9uMTo4MCxnZW5lcmFscHVycG9zZWJ1dHRvbjI6ODEsZ2VuZXJhbHB1cnBvc2VidXR0b24zOjgyLGdlbmVyYWxwdXJwb3NlYnV0dG9uNDo4MyxyZXZlcmJsZXZlbDo5MSx0cmVtb2xvbGV2ZWw6OTIsY2hvcnVzbGV2ZWw6OTMsY2VsZXN0ZWxldmVsOjk0LHBoYXNlcmxldmVsOjk1LGRhdGFidXR0b25pbmNyZW1lbnQ6OTYsZGF0YWJ1dHRvbmRlY3JlbWVudDo5Nyxub25yZWdpc3RlcmVkcGFyYW1ldGVyY29hcnNlOjk4LG5vbnJlZ2lzdGVyZWRwYXJhbWV0ZXJmaW5lOjk5LHJlZ2lzdGVyZWRwYXJhbWV0ZXJjb2Fyc2U6MTAwLHJlZ2lzdGVyZWRwYXJhbWV0ZXJmaW5lOjEwMX0sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITF9LE1JRElfQ0hBTk5FTF9NT0RFX01FU1NBR0VTOnt2YWx1ZTp7YWxsc291bmRvZmY6MTIwLHJlc2V0YWxsY29udHJvbGxlcnM6MTIxLGxvY2FsY29udHJvbDoxMjIsYWxsbm90ZXNvZmY6MTIzLG9tbmltb2Rlb2ZmOjEyNCxvbW5pbW9kZW9uOjEyNSxtb25vbW9kZW9uOjEyNixwb2x5bW9kZW9uOjEyN30sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITF9fSksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7c3VwcG9ydGVkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwicmVxdWVzdE1JRElBY2Nlc3NcImluIG5hdmlnYXRvcn19LGVuYWJsZWQ6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXRoaXNbXCJpbnRlcmZhY2VcIl19LmJpbmQodGhpcyl9LGlucHV0czp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5wdXRzfS5iaW5kKHRoaXMpfSxvdXRwdXRzOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vdXRwdXRzfS5iaW5kKHRoaXMpfSxzeXNleEVuYWJsZWQ6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuISghdGhpc1tcImludGVyZmFjZVwiXXx8IXRoaXNbXCJpbnRlcmZhY2VcIl0uc3lzZXhFbmFibGVkKX0uYmluZCh0aGlzKX0sdGltZTp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9fX0pfWZ1bmN0aW9uIElucHV0KG1pZGlJbnB1dCl7dmFyIHRoYXQ9dGhpczt0aGlzLl91c2VySGFuZGxlcnM9e2NoYW5uZWw6e30sc3lzdGVtOnt9fSx0aGlzLl9taWRpSW5wdXQ9bWlkaUlucHV0LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse2Nvbm5lY3Rpb246e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5jb25uZWN0aW9ufX0saWQ6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5pZH19LG1hbnVmYWN0dXJlcjp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaUlucHV0Lm1hbnVmYWN0dXJlcn19LG5hbWU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5uYW1lfX0sc3RhdGU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC5zdGF0ZX19LHR5cGU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlJbnB1dC50eXBlfX19KSx0aGlzLl9pbml0aWFsaXplVXNlckhhbmRsZXJzKCl9ZnVuY3Rpb24gT3V0cHV0KG1pZGlPdXRwdXQpe3ZhciB0aGF0PXRoaXM7dGhpcy5fbWlkaU91dHB1dD1taWRpT3V0cHV0LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse2Nvbm5lY3Rpb246e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlPdXRwdXQuY29ubmVjdGlvbn19LGlkOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0LmlkfX0sbWFudWZhY3R1cmVyOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0Lm1hbnVmYWN0dXJlcn19LG5hbWU6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoYXQuX21pZGlPdXRwdXQubmFtZX19LHN0YXRlOntlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGF0Ll9taWRpT3V0cHV0LnN0YXRlfX0sdHlwZTp7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhhdC5fbWlkaU91dHB1dC50eXBlfX19KX12YXIgd209bmV3IFdlYk1pZGk7V2ViTWlkaS5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKGNhbGxiYWNrLHN5c2V4KXtyZXR1cm4gdGhpcy5lbmFibGVkP3ZvaWQgMDp0aGlzLnN1cHBvcnRlZD92b2lkIG5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcyh7c3lzZXg6c3lzZXh9KS50aGVuKGZ1bmN0aW9uKG1pZGlBY2Nlc3Mpe2Z1bmN0aW9uIG9uUG9ydHNPcGVuKCl7dGhpcy5fdXBkYXRlSW5wdXRzQW5kT3V0cHV0cygpLHRoaXNbXCJpbnRlcmZhY2VcIl0ub25zdGF0ZWNoYW5nZT10aGlzLl9vbkludGVyZmFjZVN0YXRlQ2hhbmdlLmJpbmQodGhpcyksXCJmdW5jdGlvblwiPT10eXBlb2YgY2FsbGJhY2smJmNhbGxiYWNrLmNhbGwodGhpcyksZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe3RoaXMuX29uSW50ZXJmYWNlU3RhdGVDaGFuZ2UoZXZlbnQpfS5iaW5kKHRoaXMpKX12YXIgZXZlbnRzPVtdLHByb21pc2VzPVtdO3RoaXNbXCJpbnRlcmZhY2VcIl09bWlkaUFjY2Vzcyx0aGlzLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycygpLHRoaXNbXCJpbnRlcmZhY2VcIl0ub25zdGF0ZWNoYW5nZT1mdW5jdGlvbihlKXtldmVudHMucHVzaChlKX07Zm9yKHZhciBpbnB1dHM9bWlkaUFjY2Vzcy5pbnB1dHMudmFsdWVzKCksaW5wdXQ9aW5wdXRzLm5leHQoKTtpbnB1dCYmIWlucHV0LmRvbmU7aW5wdXQ9aW5wdXRzLm5leHQoKSlwcm9taXNlcy5wdXNoKGlucHV0LnZhbHVlLm9wZW4oKSk7Zm9yKHZhciBvdXRwdXRzPW1pZGlBY2Nlc3Mub3V0cHV0cy52YWx1ZXMoKSxvdXRwdXQ9b3V0cHV0cy5uZXh0KCk7b3V0cHV0JiYhb3V0cHV0LmRvbmU7b3V0cHV0PW91dHB1dHMubmV4dCgpKXByb21pc2VzLnB1c2gob3V0cHV0LnZhbHVlLm9wZW4oKSk7UHJvbWlzZT9Qcm9taXNlLmFsbChwcm9taXNlcylbXCJjYXRjaFwiXShmdW5jdGlvbihlcnIpe30pLnRoZW4ob25Qb3J0c09wZW4uYmluZCh0aGlzKSk6c2V0VGltZW91dChvblBvcnRzT3Blbi5iaW5kKHRoaXMpLDIwMCl9LmJpbmQodGhpcyksZnVuY3Rpb24oZXJyKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBjYWxsYmFjayYmY2FsbGJhY2suY2FsbCh0aGlzLGVycil9LmJpbmQodGhpcykpOnZvaWQoXCJmdW5jdGlvblwiPT10eXBlb2YgY2FsbGJhY2smJmNhbGxiYWNrKG5ldyBFcnJvcihcIlRoZSBXZWIgTUlESSBBUEkgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpKSl9LFdlYk1pZGkucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXtpZighdGhpcy5zdXBwb3J0ZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIFdlYiBNSURJIEFQSSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3Nlci5cIik7dGhpc1tcImludGVyZmFjZVwiXSYmKHRoaXNbXCJpbnRlcmZhY2VcIl0ub25zdGF0ZWNoYW5nZT12b2lkIDApLHRoaXNbXCJpbnRlcmZhY2VcIl09dm9pZCAwLHRoaXMuX2lucHV0cz1bXSx0aGlzLl9vdXRwdXRzPVtdLHRoaXMuX3Jlc2V0SW50ZXJmYWNlVXNlckhhbmRsZXJzKCl9LFdlYk1pZGkucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBtdXN0IGJlIGVuYWJsZWQgYmVmb3JlIGFkZGluZyBldmVudCBsaXN0ZW5lcnMuXCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZighKHRoaXMuX21pZGlJbnRlcmZhY2VFdmVudHMuaW5kZXhPZih0eXBlKT49MCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtyZXR1cm4gdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpLHRoaXN9LFdlYk1pZGkucHJvdG90eXBlLmhhc0xpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBtdXN0IGJlIGVuYWJsZWQgYmVmb3JlIGNoZWNraW5nIGV2ZW50IGxpc3RlbmVycy5cIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgbGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbGlzdGVuZXInIHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO2lmKCEodGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cy5pbmRleE9mKHR5cGUpPj0wKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBldmVudCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO2Zvcih2YXIgbz0wO288dGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLmxlbmd0aDtvKyspaWYodGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdW29dPT09bGlzdGVuZXIpcmV0dXJuITA7cmV0dXJuITF9LFdlYk1pZGkucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBtdXN0IGJlIGVuYWJsZWQgYmVmb3JlIHJlbW92aW5nIGV2ZW50IGxpc3RlbmVycy5cIik7aWYodm9pZCAwIT09bGlzdGVuZXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZih0aGlzLl9taWRpSW50ZXJmYWNlRXZlbnRzLmluZGV4T2YodHlwZSk+PTApaWYobGlzdGVuZXIpZm9yKHZhciBvPTA7bzx0aGlzLl91c2VySGFuZGxlcnNbdHlwZV0ubGVuZ3RoO28rKyl0aGlzLl91c2VySGFuZGxlcnNbdHlwZV1bb109PT1saXN0ZW5lciYmdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdLnNwbGljZShvLDEpO2Vsc2UgdGhpcy5fdXNlckhhbmRsZXJzW3R5cGVdPVtdO2Vsc2V7aWYodm9pZCAwIT09dHlwZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHNwZWNpZmllZCBldmVudCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO3RoaXMuX3Jlc2V0SW50ZXJmYWNlVXNlckhhbmRsZXJzKCl9cmV0dXJuIHRoaXN9LFdlYk1pZGkucHJvdG90eXBlLnRvTUlESUNoYW5uZWxzPWZ1bmN0aW9uKGNoYW5uZWwpe3ZhciBjaGFubmVscztyZXR1cm4gY2hhbm5lbHM9XCJhbGxcIj09PWNoYW5uZWx8fHZvaWQgMD09PWNoYW5uZWw/W1wiYWxsXCJdOkFycmF5LmlzQXJyYXkoY2hhbm5lbCk/Y2hhbm5lbDpbY2hhbm5lbF0sY2hhbm5lbHMuaW5kZXhPZihcImFsbFwiKT4tMSYmKGNoYW5uZWxzPVsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNl0pLGNoYW5uZWxzLm1hcChmdW5jdGlvbihjaCl7cmV0dXJuIHBhcnNlSW50KGNoKX0pLmZpbHRlcihmdW5jdGlvbihjaCl7cmV0dXJuIGNoPj0xJiYxNj49Y2h9KX0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0SW5wdXRCeUlkPWZ1bmN0aW9uKGlkKXtpZighdGhpcy5lbmFibGVkKXRocm93IG5ldyBFcnJvcihcIldlYk1pZGkgaXMgbm90IGVuYWJsZWQuXCIpO2Zvcih2YXIgaT0wO2k8dGhpcy5pbnB1dHMubGVuZ3RoO2krKylpZih0aGlzLmlucHV0c1tpXS5pZD09PWlkKXJldHVybiB0aGlzLmlucHV0c1tpXTtyZXR1cm4hMX0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0T3V0cHV0QnlJZD1mdW5jdGlvbihpZCl7aWYoIXRoaXMuZW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJXZWJNaWRpIGlzIG5vdCBlbmFibGVkLlwiKTtmb3IodmFyIGk9MDtpPHRoaXMub3V0cHV0cy5sZW5ndGg7aSsrKWlmKHRoaXMub3V0cHV0c1tpXS5pZD09PWlkKXJldHVybiB0aGlzLm91dHB1dHNbaV07cmV0dXJuITF9LFdlYk1pZGkucHJvdG90eXBlLmdldElucHV0QnlOYW1lPWZ1bmN0aW9uKG5hbWUpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBpcyBub3QgZW5hYmxlZC5cIik7Zm9yKHZhciBpPTA7aTx0aGlzLmlucHV0cy5sZW5ndGg7aSsrKWlmKH50aGlzLmlucHV0c1tpXS5uYW1lLmluZGV4T2YobmFtZSkpcmV0dXJuIHRoaXMuaW5wdXRzW2ldO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5nZXRPY3RhdmU9ZnVuY3Rpb24obnVtYmVyKXtyZXR1cm4gbnVtYmVyJiZudW1iZXI+PTAmJjEyNz49bnVtYmVyP01hdGguZmxvb3IocGFyc2VJbnQobnVtYmVyKS8xMi0xKS0xOnZvaWQgMH0sV2ViTWlkaS5wcm90b3R5cGUuZ2V0T3V0cHV0QnlOYW1lPWZ1bmN0aW9uKG5hbWUpe2lmKCF0aGlzLmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiV2ViTWlkaSBpcyBub3QgZW5hYmxlZC5cIik7Zm9yKHZhciBpPTA7aTx0aGlzLm91dHB1dHMubGVuZ3RoO2krKylpZih+dGhpcy5vdXRwdXRzW2ldLm5hbWUuaW5kZXhPZihuYW1lKSlyZXR1cm4gdGhpcy5vdXRwdXRzW2ldO3JldHVybiExfSxXZWJNaWRpLnByb3RvdHlwZS5ndWVzc05vdGVOdW1iZXI9ZnVuY3Rpb24oaW5wdXQpe3ZhciBvdXRwdXQ9ITE7aWYoaW5wdXQmJmlucHV0LnRvRml4ZWQmJmlucHV0Pj0wJiYxMjc+PWlucHV0P291dHB1dD1NYXRoLnJvdW5kKGlucHV0KTpwYXJzZUludChpbnB1dCk+PTAmJnBhcnNlSW50KGlucHV0KTw9MTI3P291dHB1dD1wYXJzZUludChpbnB1dCk6KFwic3RyaW5nXCI9PXR5cGVvZiBpbnB1dHx8aW5wdXQgaW5zdGFuY2VvZiBTdHJpbmcpJiYob3V0cHV0PXRoaXMubm90ZU5hbWVUb051bWJlcihpbnB1dCkpLG91dHB1dD09PSExKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbm90ZSBudW1iZXIgKFwiK2lucHV0K1wiKS5cIik7cmV0dXJuIG91dHB1dH0sV2ViTWlkaS5wcm90b3R5cGUubm90ZU5hbWVUb051bWJlcj1mdW5jdGlvbihuYW1lKXtcInN0cmluZ1wiIT10eXBlb2YgbmFtZSYmKG5hbWU9XCJcIik7dmFyIG1hdGNoZXM9bmFtZS5tYXRjaCgvKFtDREVGR0FCXSkoI3swLDJ9fGJ7MCwyfSkoLT9cXGQrKS9pKTtpZighbWF0Y2hlcyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgbm90ZSBuYW1lLlwiKTt2YXIgc2VtaXRvbmVzPXdtLl9zZW1pdG9uZXNbbWF0Y2hlc1sxXS50b1VwcGVyQ2FzZSgpXSxvY3RhdmU9cGFyc2VJbnQobWF0Y2hlc1szXSkscmVzdWx0PTEyKihvY3RhdmUrMikrc2VtaXRvbmVzO2lmKG1hdGNoZXNbMl0udG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiYlwiKT4tMT9yZXN1bHQtPW1hdGNoZXNbMl0ubGVuZ3RoOm1hdGNoZXNbMl0udG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiI1wiKT4tMSYmKHJlc3VsdCs9bWF0Y2hlc1syXS5sZW5ndGgpLDA+c2VtaXRvbmVzfHwtMj5vY3RhdmV8fG9jdGF2ZT44fHwwPnJlc3VsdHx8cmVzdWx0PjEyNyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgbm90ZSBuYW1lIG9yIG5vdGUgb3V0c2lkZSB2YWxpZCByYW5nZS5cIik7cmV0dXJuIHJlc3VsdH0sV2ViTWlkaS5wcm90b3R5cGUuX3VwZGF0ZUlucHV0c0FuZE91dHB1dHM9ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVJbnB1dHMoKSx0aGlzLl91cGRhdGVPdXRwdXRzKCl9LFdlYk1pZGkucHJvdG90eXBlLl91cGRhdGVJbnB1dHM9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMuX2lucHV0cy5sZW5ndGg7aSsrKXtmb3IodmFyIHJlbW92ZT0hMCx1cGRhdGVkPXRoaXNbXCJpbnRlcmZhY2VcIl0uaW5wdXRzLnZhbHVlcygpLGlucHV0PXVwZGF0ZWQubmV4dCgpO2lucHV0JiYhaW5wdXQuZG9uZTtpbnB1dD11cGRhdGVkLm5leHQoKSlpZih0aGlzLl9pbnB1dHNbaV0uX21pZGlJbnB1dD09PWlucHV0LnZhbHVlKXtyZW1vdmU9ITE7YnJlYWt9cmVtb3ZlJiZ0aGlzLl9pbnB1dHMuc3BsaWNlKGksMSl9dGhpc1tcImludGVyZmFjZVwiXSYmdGhpc1tcImludGVyZmFjZVwiXS5pbnB1dHMuZm9yRWFjaChmdW5jdGlvbihuSW5wdXQpe2Zvcih2YXIgYWRkPSEwLGo9MDtqPHRoaXMuX2lucHV0cy5sZW5ndGg7aisrKXRoaXMuX2lucHV0c1tqXS5fbWlkaUlucHV0PT09bklucHV0JiYoYWRkPSExKTthZGQmJnRoaXMuX2lucHV0cy5wdXNoKHRoaXMuX2NyZWF0ZUlucHV0KG5JbnB1dCkpfS5iaW5kKHRoaXMpKX0sV2ViTWlkaS5wcm90b3R5cGUuX3VwZGF0ZU91dHB1dHM9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMuX291dHB1dHMubGVuZ3RoO2krKyl7Zm9yKHZhciByZW1vdmU9ITAsdXBkYXRlZD10aGlzW1wiaW50ZXJmYWNlXCJdLm91dHB1dHMudmFsdWVzKCksb3V0cHV0PXVwZGF0ZWQubmV4dCgpO291dHB1dCYmIW91dHB1dC5kb25lO291dHB1dD11cGRhdGVkLm5leHQoKSlpZih0aGlzLl9vdXRwdXRzW2ldLl9taWRpT3V0cHV0PT09b3V0cHV0LnZhbHVlKXtyZW1vdmU9ITE7YnJlYWt9cmVtb3ZlJiZ0aGlzLl9vdXRwdXRzLnNwbGljZShpLDEpfXRoaXNbXCJpbnRlcmZhY2VcIl0mJnRoaXNbXCJpbnRlcmZhY2VcIl0ub3V0cHV0cy5mb3JFYWNoKGZ1bmN0aW9uKG5PdXRwdXQpe2Zvcih2YXIgYWRkPSEwLGo9MDtqPHRoaXMuX291dHB1dHMubGVuZ3RoO2orKyl0aGlzLl9vdXRwdXRzW2pdLl9taWRpT3V0cHV0PT09bk91dHB1dCYmKGFkZD0hMSk7YWRkJiZ0aGlzLl9vdXRwdXRzLnB1c2godGhpcy5fY3JlYXRlT3V0cHV0KG5PdXRwdXQpKX0uYmluZCh0aGlzKSl9LFdlYk1pZGkucHJvdG90eXBlLl9jcmVhdGVJbnB1dD1mdW5jdGlvbihtaWRpSW5wdXQpe3ZhciBpbnB1dD1uZXcgSW5wdXQobWlkaUlucHV0KTtyZXR1cm4gaW5wdXQuX21pZGlJbnB1dC5vbm1pZGltZXNzYWdlPWlucHV0Ll9vbk1pZGlNZXNzYWdlLmJpbmQoaW5wdXQpLGlucHV0fSxXZWJNaWRpLnByb3RvdHlwZS5fY3JlYXRlT3V0cHV0PWZ1bmN0aW9uKG1pZGlPdXRwdXQpe3ZhciBvdXRwdXQ9bmV3IE91dHB1dChtaWRpT3V0cHV0KTtyZXR1cm4gb3V0cHV0Ll9taWRpT3V0cHV0Lm9ubWlkaW1lc3NhZ2U9b3V0cHV0Ll9vbk1pZGlNZXNzYWdlLmJpbmQob3V0cHV0KSxvdXRwdXR9LFdlYk1pZGkucHJvdG90eXBlLl9vbkludGVyZmFjZVN0YXRlQ2hhbmdlPWZ1bmN0aW9uKGUpe3RoaXMuX3VwZGF0ZUlucHV0c0FuZE91dHB1dHMoKTt2YXIgZXZlbnQ9e3RpbWVzdGFtcDplLnRpbWVTdGFtcCx0eXBlOmUucG9ydC5zdGF0ZX07dGhpc1tcImludGVyZmFjZVwiXSYmXCJjb25uZWN0ZWRcIj09PWUucG9ydC5zdGF0ZT9cIm91dHB1dFwiPT09ZS5wb3J0LnR5cGU/ZXZlbnQucG9ydD10aGlzLmdldE91dHB1dEJ5SWQoZS5wb3J0LmlkKTpcImlucHV0XCI9PT1lLnBvcnQudHlwZSYmKGV2ZW50LnBvcnQ9dGhpcy5nZXRJbnB1dEJ5SWQoZS5wb3J0LmlkKSk6ZXZlbnQucG9ydD17Y29ubmVjdGlvbjpcImNsb3NlZFwiLGlkOmUucG9ydC5pZCxtYW51ZmFjdHVyZXI6ZS5wb3J0Lm1hbnVmYWN0dXJlcixuYW1lOmUucG9ydC5uYW1lLHN0YXRlOmUucG9ydC5zdGF0ZSx0eXBlOmUucG9ydC50eXBlfSx0aGlzLl91c2VySGFuZGxlcnNbZS5wb3J0LnN0YXRlXS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe2hhbmRsZXIoZXZlbnQpfSl9LFdlYk1pZGkucHJvdG90eXBlLl9yZXNldEludGVyZmFjZVVzZXJIYW5kbGVycz1mdW5jdGlvbigpe2Zvcih2YXIgaT0wO2k8dGhpcy5fbWlkaUludGVyZmFjZUV2ZW50cy5sZW5ndGg7aSsrKXRoaXMuX3VzZXJIYW5kbGVyc1t0aGlzLl9taWRpSW50ZXJmYWNlRXZlbnRzW2ldXT1bXX0sSW5wdXQucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsY2hhbm5lbCxsaXN0ZW5lcil7dmFyIHRoYXQ9dGhpcztpZih2b2lkIDA9PT1jaGFubmVsJiYoY2hhbm5lbD1cImFsbFwiKSxBcnJheS5pc0FycmF5KGNoYW5uZWwpfHwoY2hhbm5lbD1bY2hhbm5lbF0pLGNoYW5uZWwuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtpZihcImFsbFwiIT09aXRlbSYmIShpdGVtPj0xJiYxNj49aXRlbSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgJ2NoYW5uZWwnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKX0pLFwiZnVuY3Rpb25cIiE9dHlwZW9mIGxpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2xpc3RlbmVyJyBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtpZih3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1t0eXBlXSl0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdfHwodGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXT1bXSksdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtlbHNle2lmKCF3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVNbdHlwZV0pdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtpZihjaGFubmVsLmluZGV4T2YoXCJhbGxcIik+LTEpe2NoYW5uZWw9W107Zm9yKHZhciBqPTE7MTY+PWo7aisrKWNoYW5uZWwucHVzaChqKX10aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXXx8KHRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdPVtdKSxjaGFubmVsLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoXXx8KHRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoXT1bXSksdGhhdC5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV1bY2hdLnB1c2gobGlzdGVuZXIpfSl9cmV0dXJuIHRoaXN9LElucHV0LnByb3RvdHlwZS5vbj1JbnB1dC5wcm90b3R5cGUuYWRkTGlzdGVuZXIsSW5wdXQucHJvdG90eXBlLmhhc0xpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsY2hhbm5lbCxsaXN0ZW5lcil7dmFyIHRoYXQ9dGhpcztpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBsaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdsaXN0ZW5lcicgcGFyYW1ldGVyIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7aWYodm9pZCAwPT09Y2hhbm5lbCYmKGNoYW5uZWw9XCJhbGxcIiksY2hhbm5lbC5jb25zdHJ1Y3RvciE9PUFycmF5JiYoY2hhbm5lbD1bY2hhbm5lbF0pLHdtLk1JRElfU1lTVEVNX01FU1NBR0VTW3R5cGVdKXtmb3IodmFyIG89MDtvPHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bdHlwZV0ubGVuZ3RoO28rKylpZih0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdW29dPT09bGlzdGVuZXIpcmV0dXJuITB9ZWxzZSBpZih3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVNbdHlwZV0pe2lmKGNoYW5uZWwuaW5kZXhPZihcImFsbFwiKT4tMSl7Y2hhbm5lbD1bXTtmb3IodmFyIGo9MTsxNj49ajtqKyspY2hhbm5lbC5wdXNoKGopfXJldHVybiB0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFt0eXBlXT9jaGFubmVsLmV2ZXJ5KGZ1bmN0aW9uKGNoTnVtKXt2YXIgbGlzdGVuZXJzPXRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoTnVtXTtyZXR1cm4gbGlzdGVuZXJzJiZsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik+LTF9KTohMX1yZXR1cm4hMX0sSW5wdXQucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsY2hhbm5lbCxsaXN0ZW5lcil7dmFyIHRoYXQ9dGhpcztpZih2b2lkIDAhPT1saXN0ZW5lciYmXCJmdW5jdGlvblwiIT10eXBlb2YgbGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbGlzdGVuZXInIHBhcmFtZXRlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO2lmKHZvaWQgMD09PWNoYW5uZWwmJihjaGFubmVsPVwiYWxsXCIpLGNoYW5uZWwuY29uc3RydWN0b3IhPT1BcnJheSYmKGNoYW5uZWw9W2NoYW5uZWxdKSx3bS5NSURJX1NZU1RFTV9NRVNTQUdFU1t0eXBlXSlpZih2b2lkIDA9PT1saXN0ZW5lcil0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdPVtdO2Vsc2UgZm9yKHZhciBvPTA7bzx0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdLmxlbmd0aDtvKyspdGhpcy5fdXNlckhhbmRsZXJzLnN5c3RlbVt0eXBlXVtvXT09PWxpc3RlbmVyJiZ0aGlzLl91c2VySGFuZGxlcnMuc3lzdGVtW3R5cGVdLnNwbGljZShvLDEpO2Vsc2UgaWYod20uTUlESV9DSEFOTkVMX01FU1NBR0VTW3R5cGVdKXtpZihjaGFubmVsLmluZGV4T2YoXCJhbGxcIik+LTEpe2NoYW5uZWw9W107Zm9yKHZhciBqPTE7MTY+PWo7aisrKWNoYW5uZWwucHVzaChqKX1pZighdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV0pcmV0dXJuIHRoaXM7Y2hhbm5lbC5mb3JFYWNoKGZ1bmN0aW9uKGNoTnVtKXt2YXIgbGlzdGVuZXJzPXRoYXQuX3VzZXJIYW5kbGVycy5jaGFubmVsW3R5cGVdW2NoTnVtXTtpZihsaXN0ZW5lcnMpaWYodm9pZCAwPT09bGlzdGVuZXIpdGhhdC5fdXNlckhhbmRsZXJzLmNoYW5uZWxbdHlwZV1bY2hOdW1dPVtdO2Vsc2UgZm9yKHZhciBsPTA7bDxsaXN0ZW5lcnMubGVuZ3RoO2wrKylsaXN0ZW5lcnNbbF09PT1saXN0ZW5lciYmbGlzdGVuZXJzLnNwbGljZShsLDEpfSl9ZWxzZXtpZih2b2lkIDAhPT10eXBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIik7dGhpcy5faW5pdGlhbGl6ZVVzZXJIYW5kbGVycygpfXJldHVybiB0aGlzfSxJbnB1dC5wcm90b3R5cGUuX2luaXRpYWxpemVVc2VySGFuZGxlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHByb3AxIGluIHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUyl3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMuaGFzT3duUHJvcGVydHkocHJvcDEpJiYodGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbcHJvcDFdPXt9KTtmb3IodmFyIHByb3AyIGluIHdtLk1JRElfU1lTVEVNX01FU1NBR0VTKXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmhhc093blByb3BlcnR5KHByb3AyKSYmKHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bcHJvcDJdPVtdKX0sSW5wdXQucHJvdG90eXBlLl9vbk1pZGlNZXNzYWdlPWZ1bmN0aW9uKGUpe2UuZGF0YVswXTwyNDA/dGhpcy5fcGFyc2VDaGFubmVsRXZlbnQoZSk6ZS5kYXRhWzBdPD0yNTUmJnRoaXMuX3BhcnNlU3lzdGVtRXZlbnQoZSl9LElucHV0LnByb3RvdHlwZS5fcGFyc2VDaGFubmVsRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIGRhdGExLGRhdGEyLGNvbW1hbmQ9ZS5kYXRhWzBdPj40LGNoYW5uZWw9KDE1JmUuZGF0YVswXSkrMTtlLmRhdGEubGVuZ3RoPjEmJihkYXRhMT1lLmRhdGFbMV0sZGF0YTI9ZS5kYXRhLmxlbmd0aD4yP2UuZGF0YVsyXTp2b2lkIDApO3ZhciBldmVudD17dGFyZ2V0OnRoaXMsZGF0YTplLmRhdGEsdGltZXN0YW1wOmUudGltZVN0YW1wLGNoYW5uZWw6Y2hhbm5lbH07Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb2ZmfHxjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLm5vdGVvbiYmMD09PWRhdGEyPyhldmVudC50eXBlPVwibm90ZW9mZlwiLGV2ZW50Lm5vdGU9e251bWJlcjpkYXRhMSxuYW1lOndtLl9ub3Rlc1tkYXRhMSUxMl0sb2N0YXZlOndtLmdldE9jdGF2ZShkYXRhMSl9LGV2ZW50LnZlbG9jaXR5PWRhdGEyLzEyNyxldmVudC5yYXdWZWxvY2l0eT1kYXRhMik6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb24/KGV2ZW50LnR5cGU9XCJub3Rlb25cIixldmVudC5ub3RlPXtudW1iZXI6ZGF0YTEsbmFtZTp3bS5fbm90ZXNbZGF0YTElMTJdLG9jdGF2ZTp3bS5nZXRPY3RhdmUoZGF0YTEpfSxldmVudC52ZWxvY2l0eT1kYXRhMi8xMjcsZXZlbnQucmF3VmVsb2NpdHk9ZGF0YTIpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMua2V5YWZ0ZXJ0b3VjaD8oZXZlbnQudHlwZT1cImtleWFmdGVydG91Y2hcIixldmVudC5ub3RlPXtudW1iZXI6ZGF0YTEsbmFtZTp3bS5fbm90ZXNbZGF0YTElMTJdLG9jdGF2ZTp3bS5nZXRPY3RhdmUoZGF0YTEpfSxldmVudC52YWx1ZT1kYXRhMi8xMjcpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMuY29udHJvbGNoYW5nZSYmZGF0YTE+PTAmJjExOT49ZGF0YTE/KGV2ZW50LnR5cGU9XCJjb250cm9sY2hhbmdlXCIsZXZlbnQuY29udHJvbGxlcj17bnVtYmVyOmRhdGExLG5hbWU6dGhpcy5nZXRDY05hbWVCeU51bWJlcihkYXRhMSl9LGV2ZW50LnZhbHVlPWRhdGEyKTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNoYW5uZWxtb2RlJiZkYXRhMT49MTIwJiYxMjc+PWRhdGExPyhldmVudC50eXBlPVwiY2hhbm5lbG1vZGVcIixldmVudC5jb250cm9sbGVyPXtudW1iZXI6ZGF0YTEsbmFtZTp0aGlzLmdldENoYW5uZWxNb2RlQnlOdW1iZXIoZGF0YTEpfSxldmVudC52YWx1ZT1kYXRhMik6Y29tbWFuZD09PXdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5wcm9ncmFtY2hhbmdlPyhldmVudC50eXBlPVwicHJvZ3JhbWNoYW5nZVwiLGV2ZW50LnZhbHVlPWRhdGExKTpjb21tYW5kPT09d20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNoYW5uZWxhZnRlcnRvdWNoPyhldmVudC50eXBlPVwiY2hhbm5lbGFmdGVydG91Y2hcIixldmVudC52YWx1ZT1kYXRhMS8xMjcpOmNvbW1hbmQ9PT13bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMucGl0Y2hiZW5kPyhldmVudC50eXBlPVwicGl0Y2hiZW5kXCIsZXZlbnQudmFsdWU9KChkYXRhMjw8NykrZGF0YTEtODE5MikvODE5Mik6ZXZlbnQudHlwZT1cInVua25vd25jaGFubmVsbWVzc2FnZVwiLHRoaXMuX3VzZXJIYW5kbGVycy5jaGFubmVsW2V2ZW50LnR5cGVdJiZ0aGlzLl91c2VySGFuZGxlcnMuY2hhbm5lbFtldmVudC50eXBlXVtjaGFubmVsXSYmdGhpcy5fdXNlckhhbmRsZXJzLmNoYW5uZWxbZXZlbnQudHlwZV1bY2hhbm5lbF0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7Y2FsbGJhY2soZXZlbnQpfSl9LElucHV0LnByb3RvdHlwZS5nZXRDY05hbWVCeU51bWJlcj1mdW5jdGlvbihudW1iZXIpe2lmKG51bWJlcj1wYXJzZUludChudW1iZXIpLCEobnVtYmVyPj0wJiYxMTk+PW51bWJlcikpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbCBjaGFuZ2UgbnVtYmVyIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMTkuXCIpO2Zvcih2YXIgY2MgaW4gd20uTUlESV9DT05UUk9MX0NIQU5HRV9NRVNTQUdFUylpZihudW1iZXI9PT13bS5NSURJX0NPTlRST0xfQ0hBTkdFX01FU1NBR0VTW2NjXSlyZXR1cm4gY2M7cmV0dXJuIHZvaWQgMH0sSW5wdXQucHJvdG90eXBlLmdldENoYW5uZWxNb2RlQnlOdW1iZXI9ZnVuY3Rpb24obnVtYmVyKXtpZihudW1iZXI9cGFyc2VJbnQobnVtYmVyKSwhKG51bWJlcj49MTIwJiZzdGF0dXM8PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbCBjaGFuZ2UgbnVtYmVyIG11c3QgYmUgYmV0d2VlbiAxMjAgYW5kIDEyNy5cIik7Zm9yKHZhciBjbSBpbiB3bS5NSURJX0NIQU5ORUxfTU9ERV9NRVNTQUdFUylpZihudW1iZXI9PT13bS5NSURJX0NIQU5ORUxfTU9ERV9NRVNTQUdFU1tjbV0pcmV0dXJuIGNtfSxJbnB1dC5wcm90b3R5cGUuX3BhcnNlU3lzdGVtRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIGNvbW1hbmQ9ZS5kYXRhWzBdLGV2ZW50PXt0YXJnZXQ6dGhpcyxkYXRhOmUuZGF0YSx0aW1lc3RhbXA6ZS50aW1lU3RhbXB9O2NvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zeXNleD9ldmVudC50eXBlPVwic3lzZXhcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMudGltZWNvZGU/ZXZlbnQudHlwZT1cInRpbWVjb2RlXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnNvbmdwb3NpdGlvbj9ldmVudC50eXBlPVwic29uZ3Bvc2l0aW9uXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnNvbmdzZWxlY3Q/KGV2ZW50LnR5cGU9XCJzb25nc2VsZWN0XCIsZXZlbnQuc29uZz1lLmRhdGFbMV0pOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy50dW5pbmdyZXF1ZXN0P2V2ZW50LnR5cGU9XCJ0dW5pbmdyZXF1ZXN0XCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmNsb2NrP2V2ZW50LnR5cGU9XCJjbG9ja1wiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zdGFydD9ldmVudC50eXBlPVwic3RhcnRcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVNbXCJjb250aW51ZVwiXT9ldmVudC50eXBlPVwiY29udGludWVcIjpjb21tYW5kPT09d20uTUlESV9TWVNURU1fTUVTU0FHRVMuc3RvcD9ldmVudC50eXBlPVwic3RvcFwiOmNvbW1hbmQ9PT13bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5hY3RpdmVzZW5zaW5nP2V2ZW50LnR5cGU9XCJhY3RpdmVzZW5zaW5nXCI6Y29tbWFuZD09PXdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnJlc2V0P2V2ZW50LnR5cGU9XCJyZXNldFwiOmV2ZW50LnR5cGU9XCJ1bmtub3duc3lzdGVtbWVzc2FnZVwiLHRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bZXZlbnQudHlwZV0mJnRoaXMuX3VzZXJIYW5kbGVycy5zeXN0ZW1bZXZlbnQudHlwZV0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7Y2FsbGJhY2soZXZlbnQpfSl9LE91dHB1dC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihzdGF0dXMsZGF0YSx0aW1lc3RhbXApe2lmKCEoc3RhdHVzPj0xMjgmJjI1NT49c3RhdHVzKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzdGF0dXMgYnl0ZSBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAxMjggKDB4ODApIGFuZCAyNTUgKDB4RkYpLlwiKTt2b2lkIDA9PT1kYXRhJiYoZGF0YT1bXSksQXJyYXkuaXNBcnJheShkYXRhKXx8KGRhdGE9W2RhdGFdKTt2YXIgbWVzc2FnZT1bXTtyZXR1cm4gZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe3ZhciBwYXJzZWQ9cGFyc2VJbnQoaXRlbSk7aWYoIShwYXJzZWQ+PTAmJjI1NT49cGFyc2VkKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkRhdGEgYnl0ZXMgbXVzdCBiZSBpbnRlZ2VycyBiZXR3ZWVuIDAgKDB4MDApIGFuZCAyNTUgKDB4RkYpLlwiKTttZXNzYWdlLnB1c2gocGFyc2VkKX0pLHRoaXMuX21pZGlPdXRwdXQuc2VuZChbc3RhdHVzXS5jb25jYXQobWVzc2FnZSkscGFyc2VGbG9hdCh0aW1lc3RhbXApfHwwKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRTeXNleD1mdW5jdGlvbihtYW51ZmFjdHVyZXIsZGF0YSxvcHRpb25zKXtpZighd20uc3lzZXhFbmFibGVkKXRocm93IG5ldyBFcnJvcihcIlN5c2V4IG1lc3NhZ2Ugc3VwcG9ydCBtdXN0IGZpcnN0IGJlIGFjdGl2YXRlZC5cIik7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sbWFudWZhY3R1cmVyPVtdLmNvbmNhdChtYW51ZmFjdHVyZXIpLGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtpZigwPml0ZW18fGl0ZW0+MTI3KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGRhdGEgYnl0ZXMgb2YgYSBzeXNleCBtZXNzYWdlIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwICgweDAwKSBhbmQgMTI3ICgweDdGKS5cIil9KSxkYXRhPW1hbnVmYWN0dXJlci5jb25jYXQoZGF0YSx3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zeXNleGVuZCksdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnN5c2V4LGRhdGEsdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFRpbWVjb2RlUXVhcnRlckZyYW1lPWZ1bmN0aW9uKHZhbHVlLG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy50aW1lY29kZSx2YWx1ZSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU29uZ1Bvc2l0aW9uPWZ1bmN0aW9uKHZhbHVlLG9wdGlvbnMpe3ZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCxvcHRpb25zPW9wdGlvbnN8fHt9O3ZhciBtc2I9dmFsdWU+PjcmMTI3LGxzYj0xMjcmdmFsdWU7cmV0dXJuIHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zb25ncG9zaXRpb24sW21zYixsc2JdLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRTb25nU2VsZWN0PWZ1bmN0aW9uKHZhbHVlLG9wdGlvbnMpe2lmKHZhbHVlPXBhcnNlSW50KHZhbHVlKSxvcHRpb25zPW9wdGlvbnN8fHt9LCEodmFsdWU+PTAmJjEyNz49dmFsdWUpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHNvbmcgbnVtYmVyIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuc29uZ3NlbGVjdCxbdmFsdWVdLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRUdW5pbmdSZXF1ZXN0PWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy50dW5pbmdyZXF1ZXN0LHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ2xvY2s9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLmNsb2NrLHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kU3RhcnQ9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnN0YXJ0LHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ29udGludWU9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTW1wiY29udGludWVcIl0sdm9pZCAwLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRTdG9wPWZ1bmN0aW9uKG9wdGlvbnMpe3JldHVybiBvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuc2VuZCh3bS5NSURJX1NZU1RFTV9NRVNTQUdFUy5zdG9wLHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQWN0aXZlU2Vuc2luZz1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSx0aGlzLnNlbmQod20uTUlESV9TWVNURU1fTUVTU0FHRVMuYWN0aXZlc2Vuc2luZyxbXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kUmVzZXQ9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5zZW5kKHdtLk1JRElfU1lTVEVNX01FU1NBR0VTLnJlc2V0LHZvaWQgMCx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zdG9wTm90ZT1mdW5jdGlvbihub3RlLGNoYW5uZWwsb3B0aW9ucyl7aWYoXCJhbGxcIj09PW5vdGUpcmV0dXJuIHRoaXMuc2VuZENoYW5uZWxNb2RlKFwiYWxsbm90ZXNvZmZcIiwwLGNoYW5uZWwsb3B0aW9ucyk7dmFyIG5WZWxvY2l0eT02NDtyZXR1cm4gb3B0aW9ucz1vcHRpb25zfHx7fSxvcHRpb25zLnZlbG9jaXR5PXBhcnNlRmxvYXQob3B0aW9ucy52ZWxvY2l0eSksb3B0aW9ucy5yYXdWZWxvY2l0eT8haXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEyNyYmKG5WZWxvY2l0eT1vcHRpb25zLnZlbG9jaXR5KTohaXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEmJihuVmVsb2NpdHk9MTI3Km9wdGlvbnMudmVsb2NpdHkpLHRoaXMuX2NvbnZlcnROb3RlVG9BcnJheShub3RlKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe3dtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoaXMuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLm5vdGVvZmY8PDQpKyhjaC0xKSxbaXRlbSxNYXRoLnJvdW5kKG5WZWxvY2l0eSldLHRoaXMuX3BhcnNlVGltZVBhcmFtZXRlcihvcHRpb25zLnRpbWUpKX0uYmluZCh0aGlzKSl9LmJpbmQodGhpcykpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUucGxheU5vdGU9ZnVuY3Rpb24obm90ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciBuVmVsb2NpdHk9NjQ7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxvcHRpb25zLnZlbG9jaXR5PXBhcnNlRmxvYXQob3B0aW9ucy52ZWxvY2l0eSksb3B0aW9ucy5yYXdWZWxvY2l0eT8haXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEyNyYmKG5WZWxvY2l0eT1vcHRpb25zLnZlbG9jaXR5KTohaXNOYU4ob3B0aW9ucy52ZWxvY2l0eSkmJm9wdGlvbnMudmVsb2NpdHk+PTAmJm9wdGlvbnMudmVsb2NpdHk8PTEmJihuVmVsb2NpdHk9MTI3Km9wdGlvbnMudmVsb2NpdHkpLG9wdGlvbnMudGltZT10aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSx0aGlzLl9jb252ZXJ0Tm90ZVRvQXJyYXkobm90ZSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXt3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5ub3Rlb248PDQpKyhjaC0xKSxbaXRlbSxNYXRoLnJvdW5kKG5WZWxvY2l0eSldLG9wdGlvbnMudGltZSl9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKSxvcHRpb25zLmR1cmF0aW9uPXBhcnNlRmxvYXQob3B0aW9ucy5kdXJhdGlvbiksb3B0aW9ucy5kdXJhdGlvbil7b3B0aW9ucy5kdXJhdGlvbjw9MCYmKG9wdGlvbnMuZHVyYXRpb249MCk7dmFyIG5SZWxlYXNlPTY0O29wdGlvbnMucmVsZWFzZT1wYXJzZUZsb2F0KG9wdGlvbnMucmVsZWFzZSksb3B0aW9ucy5yYXdWZWxvY2l0eT8haXNOYU4ob3B0aW9ucy5yZWxlYXNlKSYmb3B0aW9ucy5yZWxlYXNlPj0wJiZvcHRpb25zLnJlbGVhc2U8PTEyNyYmKG5SZWxlYXNlPW9wdGlvbnMucmVsZWFzZSk6IWlzTmFOKG9wdGlvbnMucmVsZWFzZSkmJm9wdGlvbnMucmVsZWFzZT49MCYmb3B0aW9ucy5yZWxlYXNlPD0xJiYoblJlbGVhc2U9MTI3Km9wdGlvbnMucmVsZWFzZSksdGhpcy5fY29udmVydE5vdGVUb0FycmF5KG5vdGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7d20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhpcy5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMubm90ZW9mZjw8NCkrKGNoLTEpLFtpdGVtLE1hdGgucm91bmQoblJlbGVhc2UpXSwob3B0aW9ucy50aW1lfHx3bS50aW1lKStvcHRpb25zLmR1cmF0aW9uKX0uYmluZCh0aGlzKSl9LmJpbmQodGhpcykpfXJldHVybiB0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRLZXlBZnRlcnRvdWNoPWZ1bmN0aW9uKG5vdGUsY2hhbm5lbCxwcmVzc3VyZSxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sMT5jaGFubmVsfHxjaGFubmVsPjE2KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNoYW5uZWwgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDE2LlwiKTtwcmVzc3VyZT1wYXJzZUZsb2F0KHByZXNzdXJlKSwoaXNOYU4ocHJlc3N1cmUpfHwwPnByZXNzdXJlfHxwcmVzc3VyZT4xKSYmKHByZXNzdXJlPS41KTt2YXIgblByZXNzdXJlPU1hdGgucm91bmQoMTI3KnByZXNzdXJlKTtyZXR1cm4gdGhpcy5fY29udmVydE5vdGVUb0FycmF5KG5vdGUpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7d20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kKCh3bS5NSURJX0NIQU5ORUxfTUVTU0FHRVMua2V5YWZ0ZXJ0b3VjaDw8NCkrKGNoLTEpLFtpdGVtLG5QcmVzc3VyZV0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNlbmRDb250cm9sQ2hhbmdlPWZ1bmN0aW9uKGNvbnRyb2xsZXIsdmFsdWUsY2hhbm5lbCxvcHRpb25zKXtpZihvcHRpb25zPW9wdGlvbnN8fHt9LFwic3RyaW5nXCI9PXR5cGVvZiBjb250cm9sbGVyKXtpZihjb250cm9sbGVyPXdtLk1JRElfQ09OVFJPTF9DSEFOR0VfTUVTU0FHRVNbY29udHJvbGxlcl0sIWNvbnRyb2xsZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgY29udHJvbGxlciBuYW1lLlwiKX1lbHNlIGlmKGNvbnRyb2xsZXI9cGFyc2VJbnQoY29udHJvbGxlciksIShjb250cm9sbGVyPj0wJiYxMTk+PWNvbnRyb2xsZXIpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQ29udHJvbGxlciBudW1iZXJzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMTkuXCIpO2lmKHZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkNvbnRyb2xsZXIgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyNy5cIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoaXMuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNvbnRyb2xjaGFuZ2U8PDQpKyhjaC0xKSxbY29udHJvbGxlcix2YWx1ZV0sdGhpcy5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfS5iaW5kKHRoaXMpKSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLl9zZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixjaGFubmVsLHRpbWUpe3ZhciB0aGF0PXRoaXM7aWYocGFyYW1ldGVyWzBdPXBhcnNlSW50KHBhcmFtZXRlclswXSksIShwYXJhbWV0ZXJbMF0+PTAmJnBhcmFtZXRlclswXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjb250cm9sNjUgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtpZihwYXJhbWV0ZXJbMV09cGFyc2VJbnQocGFyYW1ldGVyWzFdKSwhKHBhcmFtZXRlclsxXT49MCYmcGFyYW1ldGVyWzFdPD0xMjcpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNvbnRyb2w2NCB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3XCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmRDb250cm9sQ2hhbmdlKDEwMSxwYXJhbWV0ZXJbMF0sY2hhbm5lbCx7dGltZTp0aW1lfSksdGhhdC5zZW5kQ29udHJvbENoYW5nZSgxMDAscGFyYW1ldGVyWzFdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fc2VsZWN0Tm9uUmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsY2hhbm5lbCx0aW1lKXt2YXIgdGhhdD10aGlzO2lmKHBhcmFtZXRlclswXT1wYXJzZUludChwYXJhbWV0ZXJbMF0pLCEocGFyYW1ldGVyWzBdPj0wJiZwYXJhbWV0ZXJbMF08PTEyNykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY29udHJvbDYzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYocGFyYW1ldGVyWzFdPXBhcnNlSW50KHBhcmFtZXRlclsxXSksIShwYXJhbWV0ZXJbMV0+PTAmJnBhcmFtZXRlclsxXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBjb250cm9sNjIgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSg5OSxwYXJhbWV0ZXJbMF0sY2hhbm5lbCx7dGltZTp0aW1lfSksdGhhdC5zZW5kQ29udHJvbENoYW5nZSg5OCxwYXJhbWV0ZXJbMV0sY2hhbm5lbCx7dGltZTp0aW1lfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLl9zZXRDdXJyZW50UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihkYXRhLGNoYW5uZWwsdGltZSl7dmFyIHRoYXQ9dGhpcztpZihkYXRhPVtdLmNvbmNhdChkYXRhKSxkYXRhWzBdPXBhcnNlSW50KGRhdGFbMF0pLCEoZGF0YVswXT49MCYmZGF0YVswXTw9MTI3KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBtc2IgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSg2LGRhdGFbMF0sY2hhbm5lbCx7dGltZTp0aW1lfSl9KSxkYXRhWzFdPXBhcnNlSW50KGRhdGFbMV0pLGRhdGFbMV0+PTAmJmRhdGFbMV08PTEyNyYmd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSgzOCxkYXRhWzFdLGNoYW5uZWwse3RpbWU6dGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fZGVzZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKGNoYW5uZWwsdGltZSl7dmFyIHRoYXQ9dGhpcztyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZW5kQ29udHJvbENoYW5nZSgxMDEsMTI3LGNoYW5uZWwse3RpbWU6dGltZX0pLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoMTAwLDEyNyxjaGFubmVsLHt0aW1lOnRpbWV9KX0pLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcj1mdW5jdGlvbihwYXJhbWV0ZXIsZGF0YSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhQXJyYXkuaXNBcnJheShwYXJhbWV0ZXIpKXtpZighd20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdKXRocm93IG5ldyBFcnJvcihcIlRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIGlzIG5vdCBhdmFpbGFibGUuXCIpO3BhcmFtZXRlcj13bS5NSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSW3BhcmFtZXRlcl19cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuX3NlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9zZXRDdXJyZW50UmVnaXN0ZXJlZFBhcmFtZXRlcihkYXRhLGNoYW5uZWwsb3B0aW9ucy50aW1lKSx0aGF0Ll9kZXNlbGVjdFJlZ2lzdGVyZWRQYXJhbWV0ZXIoY2hhbm5lbCxvcHRpb25zLnRpbWUpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXROb25SZWdpc3RlcmVkUGFyYW1ldGVyPWZ1bmN0aW9uKHBhcmFtZXRlcixkYXRhLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LCEocGFyYW1ldGVyWzBdPj0wJiZwYXJhbWV0ZXJbMF08PTEyNyYmcGFyYW1ldGVyWzFdPj0wJiZwYXJhbWV0ZXJbMV08PTEyNykpdGhyb3cgbmV3IEVycm9yKFwiUG9zaXRpb24gMCBhbmQgMSBvZiB0aGUgMi1wb3NpdGlvbiBwYXJhbWV0ZXIgYXJyYXkgbXVzdCBib3RoIGJlIGJldHdlZW4gMCBhbmQgMTI3LlwiKTtyZXR1cm4gZGF0YT1bXS5jb25jYXQoZGF0YSksd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5fc2VsZWN0Tm9uUmVnaXN0ZXJlZFBhcmFtZXRlcihwYXJhbWV0ZXIsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoYXQuX3NldEN1cnJlbnRSZWdpc3RlcmVkUGFyYW1ldGVyKGRhdGEsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoYXQuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihjaGFubmVsLG9wdGlvbnMudGltZSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLmluY3JlbWVudFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LCFBcnJheS5pc0FycmF5KHBhcmFtZXRlcikpe2lmKCF3bS5NSURJX1JFR0lTVEVSRURfUEFSQU1FVEVSW3BhcmFtZXRlcl0pdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgaXMgbm90IGF2YWlsYWJsZS5cIik7cGFyYW1ldGVyPXdtLk1JRElfUkVHSVNURVJFRF9QQVJBTUVURVJbcGFyYW1ldGVyXX1yZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5fc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihwYXJhbWV0ZXIsY2hhbm5lbCxvcHRpb25zLnRpbWUpLHRoYXQuc2VuZENvbnRyb2xDaGFuZ2UoOTYsMCxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pLHRoYXQuX2Rlc2VsZWN0UmVnaXN0ZXJlZFBhcmFtZXRlcihjaGFubmVsLG9wdGlvbnMudGltZSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLmRlY3JlbWVudFJlZ2lzdGVyZWRQYXJhbWV0ZXI9ZnVuY3Rpb24ocGFyYW1ldGVyLGNoYW5uZWwsb3B0aW9ucyl7aWYob3B0aW9ucz1vcHRpb25zfHx7fSwhQXJyYXkuaXNBcnJheShwYXJhbWV0ZXIpKXtpZighd20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHBhcmFtZXRlciBpcyBub3QgYXZhaWxhYmxlLlwiKTtwYXJhbWV0ZXI9d20uTUlESV9SRUdJU1RFUkVEX1BBUkFNRVRFUltwYXJhbWV0ZXJdfXJldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLl9zZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKHBhcmFtZXRlcixjaGFubmVsLG9wdGlvbnMudGltZSksdGhpcy5zZW5kQ29udHJvbENoYW5nZSg5NywwLGNoYW5uZWwse3RpbWU6b3B0aW9ucy50aW1lfSksdGhpcy5fZGVzZWxlY3RSZWdpc3RlcmVkUGFyYW1ldGVyKGNoYW5uZWwsb3B0aW9ucy50aW1lKX0uYmluZCh0aGlzKSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRQaXRjaEJlbmRSYW5nZT1mdW5jdGlvbihzZW1pdG9uZXMsY2VudHMsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sc2VtaXRvbmVzPXBhcnNlSW50KHNlbWl0b25lcyl8fDAsIShzZW1pdG9uZXM+PTAmJjEyNz49c2VtaXRvbmVzKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzZW1pdG9uZXMgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtpZihjZW50cz1wYXJzZUludChjZW50cyl8fDAsIShjZW50cz49MCYmMTI3Pj1jZW50cykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgY2VudHMgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyN1wiKTtyZXR1cm4gd20udG9NSURJQ2hhbm5lbHMoY2hhbm5lbCkuZm9yRWFjaChmdW5jdGlvbihjaCl7dGhhdC5zZXRSZWdpc3RlcmVkUGFyYW1ldGVyKFwicGl0Y2hiZW5kcmFuZ2VcIixbc2VtaXRvbmVzLGNlbnRzXSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRNb2R1bGF0aW9uUmFuZ2U9ZnVuY3Rpb24oc2VtaXRvbmVzLGNlbnRzLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHNlbWl0b25lcz1wYXJzZUludChzZW1pdG9uZXMpfHwwLCEoc2VtaXRvbmVzPj0wJiYxMjc+PXNlbWl0b25lcykpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgc2VtaXRvbmVzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7aWYoY2VudHM9cGFyc2VJbnQoY2VudHMpfHwwLCEoY2VudHM+PTAmJjEyNz49Y2VudHMpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGNlbnRzIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcIm1vZHVsYXRpb25yYW5nZVwiLFtzZW1pdG9uZXMsY2VudHNdLGNoYW5uZWwse3RpbWU6b3B0aW9ucy50aW1lfSl9KSx0aGlzfSxPdXRwdXQucHJvdG90eXBlLnNldE1hc3RlclR1bmluZz1mdW5jdGlvbih2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSx2YWx1ZT1wYXJzZUZsb2F0KHZhbHVlKXx8MCwtNjU+PXZhbHVlfHx2YWx1ZT49NjQpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGRlY2ltYWwgbnVtYmVyIGxhcmdlciB0aGFuIC02NSBhbmQgc21hbGxlciB0aGFuIDY0LlwiKTt2YXIgY29hcnNlPXBhcnNlSW50KHZhbHVlKSs2NCxmaW5lPXZhbHVlLXBhcnNlSW50KHZhbHVlKTtmaW5lPU1hdGgucm91bmQoKGZpbmUrMSkvMioxNjM4Myk7dmFyIG1zYj1maW5lPj43JjEyNyxsc2I9MTI3JmZpbmU7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcImNoYW5uZWxjb2Fyc2V0dW5pbmdcIixjb2Fyc2UsY2hhbm5lbCx7dGltZTpvcHRpb25zLnRpbWV9KSx0aGF0LnNldFJlZ2lzdGVyZWRQYXJhbWV0ZXIoXCJjaGFubmVsZmluZXR1bmluZ1wiLFttc2IsbHNiXSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRUdW5pbmdQcm9ncmFtPWZ1bmN0aW9uKHZhbHVlLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHZhbHVlPXBhcnNlSW50KHZhbHVlKSwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBwcm9ncmFtIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcInR1bmluZ3Byb2dyYW1cIix2YWx1ZSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZXRUdW5pbmdCYW5rPWZ1bmN0aW9uKHZhbHVlLGNoYW5uZWwsb3B0aW9ucyl7dmFyIHRoYXQ9dGhpcztpZihvcHRpb25zPW9wdGlvbnN8fHt9LHZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCwhKHZhbHVlPj0wJiYxMjc+PXZhbHVlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBiYW5rIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2V0UmVnaXN0ZXJlZFBhcmFtZXRlcihcInR1bmluZ2JhbmtcIix2YWx1ZSxjaGFubmVsLHt0aW1lOm9wdGlvbnMudGltZX0pfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ2hhbm5lbE1vZGU9ZnVuY3Rpb24oY29tbWFuZCx2YWx1ZSxjaGFubmVsLG9wdGlvbnMpe2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sXCJzdHJpbmdcIj09dHlwZW9mIGNvbW1hbmQpe2lmKGNvbW1hbmQ9d20uTUlESV9DSEFOTkVMX01PREVfTUVTU0FHRVNbY29tbWFuZF0sIWNvbW1hbmQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgY2hhbm5lbCBtb2RlIG1lc3NhZ2UgbmFtZS5cIil9ZWxzZSBpZihjb21tYW5kPXBhcnNlSW50KGNvbW1hbmQpLCEoY29tbWFuZD49MTIwJiYxMjc+PWNvbW1hbmQpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQ2hhbm5lbCBtb2RlIG51bWVyaWNhbCBpZGVudGlmaWVycyBtdXN0IGJlIGJldHdlZW4gMTIwIGFuZCAxMjcuXCIpO2lmKHZhbHVlPXBhcnNlSW50KHZhbHVlKXx8MCwwPnZhbHVlfHx2YWx1ZT4xMjcpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJWYWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCAxMjcuXCIpO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGlzLnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5jaGFubmVsbW9kZTw8NCkrKGNoLTEpLFtjb21tYW5kLHZhbHVlXSx0aGlzLl9wYXJzZVRpbWVQYXJhbWV0ZXIob3B0aW9ucy50aW1lKSl9LmJpbmQodGhpcykpLHRoaXN9LE91dHB1dC5wcm90b3R5cGUuc2VuZFByb2dyYW1DaGFuZ2U9ZnVuY3Rpb24ocHJvZ3JhbSxjaGFubmVsLG9wdGlvbnMpe3ZhciB0aGF0PXRoaXM7aWYob3B0aW9ucz1vcHRpb25zfHx7fSxwcm9ncmFtPXBhcnNlSW50KHByb2dyYW0pLFxuaXNOYU4ocHJvZ3JhbSl8fDA+cHJvZ3JhbXx8cHJvZ3JhbT4xMjcpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQcm9ncmFtIG51bWJlcnMgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEyNy5cIik7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLnByb2dyYW1jaGFuZ2U8PDQpKyhjaC0xKSxbcHJvZ3JhbV0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kQ2hhbm5lbEFmdGVydG91Y2g9ZnVuY3Rpb24ocHJlc3N1cmUsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO29wdGlvbnM9b3B0aW9uc3x8e30scHJlc3N1cmU9cGFyc2VGbG9hdChwcmVzc3VyZSksKGlzTmFOKHByZXNzdXJlKXx8MD5wcmVzc3VyZXx8cHJlc3N1cmU+MSkmJihwcmVzc3VyZT0uNSk7dmFyIG5QcmVzc3VyZT1NYXRoLnJvdW5kKDEyNypwcmVzc3VyZSk7cmV0dXJuIHdtLnRvTUlESUNoYW5uZWxzKGNoYW5uZWwpLmZvckVhY2goZnVuY3Rpb24oY2gpe3RoYXQuc2VuZCgod20uTUlESV9DSEFOTkVMX01FU1NBR0VTLmNoYW5uZWxhZnRlcnRvdWNoPDw0KSsoY2gtMSksW25QcmVzc3VyZV0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5zZW5kUGl0Y2hCZW5kPWZ1bmN0aW9uKGJlbmQsY2hhbm5lbCxvcHRpb25zKXt2YXIgdGhhdD10aGlzO2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sYmVuZD1wYXJzZUZsb2F0KGJlbmQpLGlzTmFOKGJlbmQpfHwtMT5iZW5kfHxiZW5kPjEpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJQaXRjaCBiZW5kIHZhbHVlIG11c3QgYmUgYmV0d2VlbiAtMSBhbmQgMS5cIik7dmFyIG5MZXZlbD1NYXRoLnJvdW5kKChiZW5kKzEpLzIqMTYzODMpLG1zYj1uTGV2ZWw+PjcmMTI3LGxzYj0xMjcmbkxldmVsO3JldHVybiB3bS50b01JRElDaGFubmVscyhjaGFubmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGNoKXt0aGF0LnNlbmQoKHdtLk1JRElfQ0hBTk5FTF9NRVNTQUdFUy5waXRjaGJlbmQ8PDQpKyhjaC0xKSxbbHNiLG1zYl0sdGhhdC5fcGFyc2VUaW1lUGFyYW1ldGVyKG9wdGlvbnMudGltZSkpfSksdGhpc30sT3V0cHV0LnByb3RvdHlwZS5fcGFyc2VUaW1lUGFyYW1ldGVyPWZ1bmN0aW9uKHRpbWUpe3ZhciBwYXJzZWQsdmFsdWU7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHRpbWUmJlwiK1wiPT09dGltZS5zdWJzdHJpbmcoMCwxKT8ocGFyc2VkPXBhcnNlRmxvYXQodGltZSkscGFyc2VkJiZwYXJzZWQ+MCYmKHZhbHVlPXdtLnRpbWUrcGFyc2VkKSk6KHBhcnNlZD1wYXJzZUZsb2F0KHRpbWUpLHBhcnNlZD53bS50aW1lJiYodmFsdWU9cGFyc2VkKSksdmFsdWV9LE91dHB1dC5wcm90b3R5cGUuX2NvbnZlcnROb3RlVG9BcnJheT1mdW5jdGlvbihub3RlKXt2YXIgbm90ZXM9W107cmV0dXJuIEFycmF5LmlzQXJyYXkobm90ZSl8fChub3RlPVtub3RlXSksbm90ZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe25vdGVzLnB1c2god20uZ3Vlc3NOb3RlTnVtYmVyKGl0ZW0pKX0pLG5vdGVzfSxPdXRwdXQucHJvdG90eXBlLl9vbk1pZGlNZXNzYWdlPWZ1bmN0aW9uKGUpe30sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZcIm9iamVjdFwiPT10eXBlb2YgZGVmaW5lLmFtZD9kZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gd219KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz13bTpzY29wZS5XZWJNaWRpfHwoc2NvcGUuV2ViTWlkaT13bSl9KHRoaXMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJtaWRpL3dlYm1pZGkubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9