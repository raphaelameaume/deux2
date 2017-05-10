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

            if (invert && Math.random() > 0.9) {
                tl.add(this.invert(), 0);
            }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FacesController = function () {
    function FacesController() {
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
        this.speedContainer = 0.0;
        this.factor = 1.0;
        this.isSpaceDown = false;
        this.firstSpaceUp = false;
        this.highkicked = 0;
        this.lowkicked = 0;

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

        this.blackModes = [this.blackModeVertical, this.blackModeHorizontal, this.blackModeBottom, this.blackModeTunnelTop, this.blackModeTunnelBottom, this.blackModeFull];

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
        _EventsManager2.default.on(_Events2.default.UI.HIDDEN, this.onUIHidden);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEDOWN, this.onSpaceDown);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEUP, this.onSpaceUp);
        _EventsManager2.default.on(_Events2.default.KEYBOARD.SPACEHOLD, this.onSpaceHold);
        _EventsManager2.default.on(_Events2.default.XP.START, this.onStart);

        // this.updateDivisions = debounce(this.updateDivisions, 400);
        // this.changeScale = debounce(this.changeScale, 400);
        // this.setBlackMode = debounce(this.setBlackMode, 400);

        this.updateDivisions();
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
            var _this = this;

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
                tl.add(_this.faces[key].updateDivisions(divisionX, divisionY, _this.allowInvert), 0);
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
            var _this3 = this;

            var name = data.name;


            if (name === 'xp') {
                var tl = new TimelineMax({ onComplete: function onComplete() {
                        _EventsManager2.default.emit(_Events2.default.XP.END);
                        _this3.reset();
                    } });

                this.speed = 0.0;
                this.speedContainer = 0.0;
                this.time = 0.0;

                Object.keys(this.faces).map(function (key) {
                    tl.add(_this3.faces[key].onEnd(), 0);
                });
            }
        }
    }, {
        key: 'setBlackMode',
        value: function setBlackMode() {
            var _this4 = this;

            var blackMode = (0, _randomFromArray2.default)(this.blackModes);
            var options = blackMode();

            var tl = new TimelineMax();

            Object.keys(this.faces).map(function (key) {
                if (options[key] === 0) {
                    tl.add(_this4.faces[key].hide(), 0);
                } else {
                    tl.add(_this4.faces[key].show(), 0);
                }

                tl.add(_this4.faces[key].setBlackMode(), 0);
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
            var _this5 = this;

            Object.keys(this.faces).map(function (key) {
                _this5.faces[key].reset();
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
            this.time += this.factor * this.speed * 0.1;
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
            var _this6 = this;

            var progress = data.progress;


            var uProgress = (0, _map2.default)(progress, 0, 1, 0, 1.8);

            Object.keys(this.faces).map(function (key) {
                _this6.faces[key].onSpaceHold(uProgress);
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
                  this.length = window.length = 600;

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
                  this.ui.update();
                  this.soundManager.update();
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

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\nvarying vec2 vUv;\nuniform float uTime;\n\n#ifndef FLAT_SHADED\n\n    varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n\n    #include <beginnormal_vertex>\n    #include <morphnormal_vertex>\n    #include <skinbase_vertex>\n    #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n    vNormal = normalize( transformedNormal );\n\n#endif\n\n    #include <begin_vertex>\n    #include <displacementmap_vertex>\n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n    #include <project_vertex>\n    #include <logdepthbuf_vertex>\n    #include <clipping_planes_vertex>\n\n    vViewPosition = - mvPosition.xyz;\n    vUv = uv;\n\n    #include <worldpos_vertex>\n    #include <envmap_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n\n}"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n#define M_PI 3.14\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float uTime;\nuniform vec3 uStripeOrientation;\nuniform float uInvert;\nuniform vec3 uSquare;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uLength;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n    #include <clipping_planes_fragment>\n\n    vec4 diffuseColor = vec4( diffuse, opacity );\n    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n    vec3 totalEmissiveRadiance = emissive;\n\n    #include <logdepthbuf_fragment>\n    #include <map_fragment>\n    #include <color_fragment>\n    #include <alphamap_fragment>\n    #include <alphatest_fragment>\n    #include <specularmap_fragment>\n    #include <normal_flip>\n    #include <normal_fragment>\n    #include <emissivemap_fragment>\n\n    // accumulation\n    #include <lights_phong_fragment>\n    #include <lights_template>\n\n    // modulation\n    #include <aomap_fragment>\n\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n    #include <envmap_fragment>\n\n    vec4 color = vec4(outgoingLight, diffuseColor.a );\n\n    float absX = floor(-cos((uTime * 0.1 + M_PI * uSquare.x * ( ( vUv.x + uProgress + 0.15 ) * 2. - 1. ) * 0.5))) + 1.;\n    float absY = floor(-cos((M_PI * uSquare.y * ( vUv.y * 2. - 1. ) * 0.5))) + 1.;\n\n    if ( absX > 0. || absY > 0. ) {\n       color = vec4(vec3(1.0 - uInvert), diffuseColor.a);\n    } else {\n        color = vec4(vec3(0.0 + uInvert), diffuseColor.a);  \n    }\n\n    // color = vUv.x > 1. - uProgress  ? vec4(vec3(1.0 - uInvert), diffuseColor.a) : vec4(vec3(0.0 + uInvert), diffuseColor.a);\n    \n    gl_FragColor = color;\n\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n}"

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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWRkNmZlOTRkMzJkMDY1MDE0MjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvbWFwLmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2F1ZGlvLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9yZXN1bWUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsc2xpZnkvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL2x1Y2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcmFuZG9tRnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvbWltZS10eXBlcy5qc29uIiwid2VicGFjazovLy8uL34vY2xhbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3ItZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwid2VicGFjazovLy8uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaWdodC1ub3cvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpbXBsZS1tZWRpYS1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9tZWRpYS1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9+L3hoci1wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3hoci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6WyJFdmVudHNNYW5hZ2VyIiwiZXZlbnQiLCJkYXRhIiwibGlzdGVuZXJzIiwiZXZlbnRzTGlzdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJmbiIsInB1c2giLCJsaXN0ZW5lciIsIm9mZiIsIl8iLCJvbiIsImNvbnNvbGUiLCJ3YXJuIiwidGFyZ2V0RXZlbnRzIiwidGFyZ2V0IiwiRXZlbnRzIiwiS0VZQk9BUkQiLCJLRVlET1dOIiwiS0VZVVAiLCJLRVlQUkVTUyIsIlNQQUNFSE9MRCIsIlNQQUNFVVAiLCJTUEFDRURPV04iLCJTT1VORFMiLCJDQU5QTEFZIiwiRU5EIiwiTE9XS0lDSyIsIk1JRERMRUtJQ0siLCJISUdIS0lDSyIsIlRSRU1PTE8iLCJTVEFSVCIsIlhQIiwiVUkiLCJISURERU4iLCJBYnN0cmFjdEZhY2UiLCJnZW9tZXRyeSIsImNvbG9yIiwibmFtZSIsInNpZGUiLCJUSFJFRSIsIkZyb250U2lkZSIsInBsYW5lR2VvbWV0cnkiLCJvbktleVByZXNzIiwib25TcGFjZUhvbGQiLCJvblN0YXJ0Iiwib25IaWRkZW5VSSIsInVuaWZvcm1zIiwiVW5pZm9ybXNVdGlscyIsImNsb25lIiwiU2hhZGVyTGliIiwidHlwZSIsInZhbHVlIiwiQ29sb3IiLCJWZWN0b3IzIiwid2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJzdGFydERpdmlzaW9ucyIsIlZlY3RvcjIiLCJvcmllbnRhdGlvbnMiLCJkdXJhdGlvbiIsImZhY3RvciIsImVhc2UiLCJFeHBvIiwiZWFzZU91dCIsImRlYnVnIiwic3RhcnRlZCIsImlzU3BhY2VEb3duIiwiaW5pdEd1aSIsIm1hdGVyaWFsIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJyZXF1aXJlIiwiZnJhZ21lbnRTaGFkZXIiLCJzaGFkaW5nIiwiRmxhdFNoYWRpbmciLCJsaWdodHMiLCJ3aXJlZnJhbWUiLCJ0cmFuc3BhcmVudCIsImZvZyIsIm1lc2giLCJNZXNoIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJhZGQiLCJpc09wZW4iLCJndWkiLCJhZGRGb2xkZXIiLCJvcGVuIiwidGltZSIsInVwZGF0ZURpdmlzaW9ucyIsIm9yaWVudGF0aW9uTmFtZSIsInNjYWxhciIsIm9yaWVudGF0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJ4IiwieSIsInoiLCJzcGVlZCIsInNwZWVkTWluIiwidGwiLCJUaW1lbGluZUxpdGUiLCJibGFja01vZGUiLCJzaG93IiwidG8iLCJoaWRlIiwia2V5IiwiVHdlZW5NYXgiLCJpbnZlcnQiLCJUaW1lbGluZU1heCIsIk1hdGgiLCJyYW5kb20iLCJ1UHJvZ3Jlc3MiLCJvbkNvbXBsZXRlIiwic2V0IiwiZnJvbVRvIiwiT2JqZWN0M0QiLCJtYXAiLCJuIiwic3RhcnQxIiwic3RvcDEiLCJzdGFydDIiLCJzdG9wMiIsIkZhY2VzQ29udHJvbGxlciIsImNvbnRhaW5lciIsImZhY2VzIiwiZGl2aXNpb25zIiwiZ2VuZXJhdGVEaXZpc2lvbnMiLCJsYXN0WCIsImxhc3RZIiwiYWxsb3dJbnZlcnQiLCJzcGVlZENvbnRhaW5lciIsImZpcnN0U3BhY2VVcCIsImhpZ2hraWNrZWQiLCJsb3draWNrZWQiLCJvbkxvd0tpY2siLCJvbk1pZGRsZUtpY2siLCJvbkhpZ2hLaWNrIiwib25UcmVtb2xvIiwib25VSUhpZGRlbiIsIm9uU291bmRFbmQiLCJvblNwYWNlVXAiLCJvblNwYWNlRG93biIsImJsYWNrTW9kZVZlcnRpY2FsIiwiYmxhY2tNb2RlSG9yaXpvbnRhbCIsImJsYWNrTW9kZVR1bm5lbFRvcCIsImJsYWNrTW9kZVR1bm5lbEJvdHRvbSIsImJsYWNrTW9kZUJvdHRvbSIsImJsYWNrTW9kZUZ1bGwiLCJibGFja01vZGVzIiwic2V0QmxhY2tNb2RlIiwiY2hhbmdlU2NhbGUiLCJyZWFjdGlvbnMiLCJjaGFuZ2VTY2FsZVgiLCJjaGFuZ2VTY2FsZVkiLCJjaGFuZ2VTY2FsZUJvdGgiLCJzY2FsaW5ncyIsImlkIiwiZmFjZSIsIm1pbiIsIm1heCIsImJldHdlZW4iLCJwb3NzaWJsZURpdmlzaW9uWCIsImZpbmREaXZpc2lvbnMiLCJyZG1YSW5kZXgiLCJmbG9vciIsImRpdmlzaW9uWCIsImluZGV4T2YiLCJwb3NzaWJsZURpdmlzaW9uWSIsInJkbVlJbmRleCIsImRpdmlzaW9uWSIsIk9iamVjdCIsImtleXMiLCJzZXRTdHJpcGVzIiwiYWxsIiwiY3VycmVudCIsInJhbmdlIiwiZGl2aXNpb24iLCJpbmRleCIsImZpbHRlciIsInNvdW5kRW5kZWQiLCJyZG0iLCJlbWl0IiwicmVzZXQiLCJvbkVuZCIsIm9wdGlvbnMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZSIsInJvdGF0aW9uIiwidXBkYXRlIiwicHJvZ3Jlc3MiLCJlYXNlSW5PdXQiLCJNb3VzZU1hbmFnZXIiLCJjaGVja01vdXNlU3BlZWQiLCJtb3VzZVNwZWVkWCIsIm1vdXNlU3BlZWRZIiwibW91c2VMYXN0WCIsIm1vdXNlTGFzdFkiLCJtb3VzZURpcmVjdGlvblgiLCJtb3VzZURpcmVjdGlvblkiLCJtb3VzZVgiLCJtb3VzZVkiLCJzZXRJbnRlcnZhbCIsImdldFNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXREaXJlY3Rpb24iLCJwYWdlWCIsInBhZ2VZIiwiS2V5Ym9hcmRDb250cm9sbGVyIiwib25LZXlVcCIsIm9uS2V5RG93biIsIkJhY2tncm91bmQiLCJCb3R0b20iLCJob3Jpem9udGFsIiwiaG9yaXpvbnRhbFNrZXcxIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFNrZXcxIiwidmVydGljYWxTa2V3MiIsInZpc2liaWxpdHlUb2dnbGVyIiwidmlzaWJpbGl0eUhpZGVyIiwidmlzaWJpbGl0eVNob3dlciIsIkxlZnQiLCJSaWdodCIsIkJhY2tTaWRlIiwiVG9wIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiU291bmRNYW5hZ2VyIiwiYmFzcyIsIm1pZEJhc3MiLCJ2b2ljZSIsImRydW0iLCJwYXVzZSIsImFzc2V0cyIsInNvdXJjZXMiLCJpbnRybyIsInhwIiwic3RhcnQiLCJpbml0U291bmQiLCJsb3dLaWNrIiwibWlkZGxlS2ljayIsInRyZW1vbG8iLCJoaWdoS2ljayIsInJhbmdlcyIsInNvdW5kR3VpIiwib25DaGFuZ2UiLCJwbGF5ZXIiLCJwbGF5IiwicGxheWVycyIsImF1ZGlvIiwiYW5hbHlzZXIiLCJub2RlIiwiQXVkaW8iLCJ2b2x1bWUiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImF1ZGlibGUiLCJzdGVyZW8iLCJsb2FkZWQiLCJzcmMiLCJmcmVxcyIsImZyZXF1ZW5jaWVzIiwibGV2ZWwiLCJxdWV1ZSIsInNtb290aCIsImNvZWZmIiwibG9nIiwiaW5pdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9nbyIsIiRhY3Rpb24iLCIkYWN0aW9uTGFiZWwiLCIkYWN0aW9uRmlsbCIsIiR0dXRvIiwiJGNyZWRpdHMiLCIkY3JlZGl0SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHByb2dyZXNzRmlsbCIsIiRoZWxwIiwiJGJhY2tncm91bmQiLCJub3ciLCJEYXRlIiwibWF4VGltZSIsImhlbHBJc09wZW4iLCJpc0NvbXBsZXRlZCIsIm1pbkZpbGwiLCJtYXhGaWxsIiwiZmlsbCIsInJlc2V0dGVkIiwiaXNEb3duIiwicGF1c2VkIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJjc3MiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwib25FbmRYUCIsIm9uQ2xpY2tIZWxwIiwidGxIZWxwU2hvdyIsInRsSGVscEhpZGUiLCJkaXNwbGF5IiwidGltZVNjYWxlIiwicmV2ZXJzZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImlubmVySFRNTCIsImtpbGwiLCJyZXN0YXJ0Iiwic3RhZ2dlckZyb21UbyIsIkFycmF5IiwiZnJvbSIsImRpc3BsYXlDcmVkaXRzIiwicHJldmVudERlZmF1bHQiLCJnbHNsaWZ5IiwiQXBwIiwidWlIaWRkZW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWNlc0NvbnRyb2xsZXIiLCJmYWNlc0NvbnRhaW5lciIsInVpIiwic291bmRNYW5hZ2VyIiwia2V5Ym9hcmRDb250cm9sbGVyIiwicmVzaXplIiwiYmluZExpc3RlbmVycyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0Q2xlYXJDb2xvciIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTb2Z0U2hhZG93TWFwIiwiV0FHTkVSIiwidmVydGV4U2hhZGVyc1BhdGgiLCJmcmFnbWVudFNoYWRlcnNQYXRoIiwiY29tcG9zZXIiLCJDb21wb3NlciIsImJsb29tV2lkdGgiLCJpc1RvdWNoIiwiYmxvb21IZWlnaHQiLCJibG9vbVBhc3MiLCJNdWx0aVBhc3NCbG9vbVBhc3MiLCJwYXJhbXMiLCJzdHJlbmd0aCIsImJsdXJBbW91bnQiLCJhcHBseVpvb21CbHVyIiwiem9vbUJsdXJTdHJlbmd0aCIsInpvb21CbHVyQ2VudGVyIiwicmdiUGFzcyIsIlJHQlNwbGl0UGFzcyIsImRlbHRhIiwibm9pc2VQYXNzIiwiTm9pc2VQYXNzIiwiYW1vdW50IiwidmlnbmV0dGVQYXNzIiwiVmlnbmV0dGVQYXNzIiwiZnhhYVBhc3MiLCJGWEFBUGFzcyIsInNjZW5lIiwiU2NlbmUiLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwibG9va0F0IiwiYWRkQ29udHJvbHMiLCJhZGRMaWdodHMiLCJhZGRFbGVtZW50cyIsIk9yYml0Q29udHJvbHMiLCJsaWdodCIsIkFtYmllbnRMaWdodCIsInBvaW50TGlnaHQzIiwiUG9pbnRMaWdodCIsImRpdmlzYXRvciIsIlBsYW5lR2VvbWV0cnkiLCJvdGhlckdlb21ldHJ5IiwibGVmdFJpZ2h0R2VvbWV0cnkiLCJ0b3BCb3R0b21HZW9tZXRyeSIsImJhY2tncm91bmRHZW9tZXRyeSIsIlBJIiwicmVnaXN0ZXIiLCJzZW5zIiwiZGVsYXkiLCJyZW5kZXIiLCJwYXNzIiwidG9TY3JlZW4iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiUmFuZ2UiLCJtaW5MZXZlbCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiYXJncyIsImNvbnRleHQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJsdWNreSIsImNoYW5jZXMiLCJyYW5kb21Gcm9tQXJyYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7O0lBS01BLGE7Ozs7Ozs7OztBQUVGOzs7Ozs2QkFLY0MsSyxFQUFxQjtBQUFBLGdCQUFkQyxJQUFjLHVFQUFQLElBQU87OztBQUUvQixnQkFBTUMsWUFBWUgsY0FBY0ksVUFBZCxDQUF5QkgsS0FBekIsQ0FBbEI7O0FBRUEsZ0JBQUcsQ0FBQ0UsU0FBSixFQUFlO0FBQ1g7QUFDSDs7QUFFRCxpQkFBSyxJQUFJRSxJQUFJLENBQVIsRUFBV0MsTUFBTUgsVUFBVUksTUFBaEMsRUFBd0NGLElBQUlDLEdBQTVDLEVBQWlERCxHQUFqRDtBQUF1REYsMEJBQVVFLENBQVYsRUFBYUcsRUFBYixDQUFpQk4sSUFBakI7QUFBdkQ7QUFFSDs7QUFFRDs7Ozs7Ozs7MkJBS1lELEssRUFBT08sRSxFQUFLOztBQUVwQjs7QUFFQSxnQkFBRyxDQUFDUixjQUFjSSxVQUFsQixFQUE4QkosY0FBY0ksVUFBZCxHQUEyQixFQUEzQjs7QUFFOUIsZ0JBQUcsQ0FBQ0os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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzdTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVILHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7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O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQzdFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3TEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUMvQkEsOERBQThELG1CQUFtQixzQkFBc0Isb0RBQW9ELDJaQUEyWixnWUFBZ1kscVNBQXFTLGVBQWUsaUlBQWlJLEM7Ozs7OztBQ0EzMkMsMkVBQTJFLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHFCQUFxQixxdEJBQXF0QixnR0FBZ0csMkdBQTJHLDRDQUE0QyxvbkJBQW9uQiw0RkFBNEYsMkhBQTJILG9GQUFvRix1Q0FBdUMsMkRBQTJELE9BQU8sT0FBTyw0REFBNEQsU0FBUyxtSUFBbUksaUNBQWlDLHVKQUF1SixDOzs7Ozs7QUNBdnVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTCxpQ0FBaUMsU0FBUztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoUEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWRkNmZlOTRkMzJkMDY1MDE0MjkiLCIvKipcbiAqIEV2ZW50cyBNYW5hZ2VyXG4gKiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gKi9cblxuY2xhc3MgRXZlbnRzTWFuYWdlciB7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0IGV2ZW50XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudCBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc3RhdGljIGVtaXQgKCBldmVudCwgZGF0YSA9IG51bGwgKSB7XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgICAgICBpZighbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoIGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkgbGlzdGVuZXJzW2ldLmZuKCBkYXRhICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBvbiAoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRXZlbnRzTWFuYWdlciA6OiBPTiA6OicsIGV2ZW50KTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0KSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3QgPSB7fTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSkgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSA9IFtdOyAvLyBpbXByb3ZlICguXy4pXG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XS5wdXNoKHtmbjpmbn0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIG9uY2UoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICggZGF0YSApID0+e1xuXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgZm4oZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdGVuZXIuXyA9IGZuO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKCBldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG9mZiAoIGV2ZW50LCBmbiApIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICAgICAgaWYoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHNNYW5hZ2VyIDo6IE9mZiA6OiBDdXJyZW50bHkgbm8gbGlzdGVuZXJzIGZvciB0aGlzIGV2ZW50IDogJywgZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V2ZW50c01hbmFnZXIgOjogT2ZmIDo6IENhbGxiYWNrIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RXZlbnRzID0gW107XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICBpZih0YXJnZXQuZm4gIT09IGZuICYmIHRhcmdldC5mbi5fICE9PSBmbiApIHsgLy8gKC5fXy4pID8/XG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnRzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYoIHRhcmdldEV2ZW50cy5sZW5ndGggPsKgMCApXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdID0gdGFyZ2V0RXZlbnRzO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c01hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIi8qKlxuICogRSBWIEUgTiBUIFNcbiAqL1xuXG5jb25zdCBFdmVudHMgPSB7XG4gICAgS0VZQk9BUkQ6IHtcbiAgICAgICAgS0VZRE9XTjogXCJLRVlCT0FSRF9LRVlET1dOXCIsXG4gICAgICAgIEtFWVVQOiBcIktFWUJPQVJEX0tFWVVQXCIsXG4gICAgICAgIEtFWVBSRVNTOiBcIktFWUJPQVJEX0tFWVBSRVNTXCIsXG4gICAgICAgIFNQQUNFSE9MRDogXCJLRVlCT0FSRF9TUEFDRUhPTERcIixcbiAgICAgICAgU1BBQ0VVUDogXCJLRVlCT0FSRF9TUEFDRVVQXCIsXG4gICAgICAgIFNQQUNFRE9XTjogXCJLRVlCT0FSRF9TUEFDRURPV05cIixcbiAgICB9LFxuICAgIFNPVU5EUzoge1xuICAgICAgICBDQU5QTEFZOiBcIlNPVU5EU19DQU5QTEFZXCIsXG4gICAgICAgIEVORDogXCJTT1VORFNfRU5EXCIsXG4gICAgICAgIExPV0tJQ0s6IFwiU09VTkRTX0xPV0tJQ0tcIixcbiAgICAgICAgTUlERExFS0lDSzogXCJTT1VORFNfTUlERExFS0lDS1wiLFxuICAgICAgICBISUdIS0lDSzogXCJTT1VORFNfSElHSEtJQ0tcIixcbiAgICAgICAgVFJFTU9MTzogXCJTT1VORFNfVFJFTU9MT1wiLFxuICAgICAgICBTVEFSVDogXCJTT1VORFNfU1RBUlRcIixcbiAgICAgICAgRU5EOiBcIlNPVU5EU19FTkRcIixcbiAgICB9LFxuICAgIFhQOiB7XG4gICAgICAgIFNUQVJUOiBcIlhQX1NUQVJUXCIsXG4gICAgICAgIEVORDogXCJYUF9FTkRcIixcbiAgICB9LFxuICAgIFVJOiB7XG4gICAgICAgIEhJRERFTjogXCJVSV9ISURERU5cIixcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbHMvbWFwJztcblxuY2xhc3MgQWJzdHJhY3RGYWNlIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgPSAweDI0MjQyNSwgbmFtZSwgc2lkZSA9IFRIUkVFLkZyb250U2lkZSApIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnBsYW5lR2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vblNwYWNlSG9sZCA9IDo6dGhpcy5vblNwYWNlSG9sZDtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25IaWRkZW5VSSA9IDo6dGhpcy5vbkhpZGRlblVJO1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKFRIUkVFLlNoYWRlckxpYlsncGhvbmcnXS51bmlmb3Jtcyk7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10gPSB7IHR5cGU6J2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ2RpZmZ1c2UnXSA9IHsgdHlwZTogJ2MnLCB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEpIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VXaWR0aCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cud2lkdGggfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUhlaWdodCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VMZW5ndGgnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93Lmxlbmd0aCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnN0YXJ0RGl2aXNpb25zID0gbmV3IFRIUkVFLlZlY3RvcjIoOSwgMTMpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0gW107XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjM7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5lYXNlID0gRXhwby5lYXNlT3V0O1xuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCB0aGlzLmRlYnVnICkge1xuICAgICAgICAgICAgdGhpcy5pbml0R3VpKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wnKSxcbiAgICAgICAgICAgIC8vIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS5mcmFnLmdsc2wnKSxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCcpLFxuICAgICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgICBzaGFkaW5nOiBUSFJFRS5GbGF0U2hhZGluZyxcbiAgICAgICAgICAgIGxpZ2h0czogdHJ1ZSxcbiAgICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsXG4gICAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBmb2c6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxhbmVHZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIHRoaXMubWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLm1lc2gpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICAvLyBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHRoaXMub25TcGFjZUhvbGQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uSGlkZGVuVUkpO1xuICAgIH1cblxuICAgIGluaXRHdWkgKCBpc09wZW4gKSB7XG4gICAgICAgIHRoaXMuZ3VpID0gd2luZG93Lmd1aS5hZGRGb2xkZXIodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneCcsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB4Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3knLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geScpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd6JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHonKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3gnLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHgnKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3knLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHknKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3onLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHonKTtcbiAgICAgICAgXG4gICAgICAgIGlzT3BlbiAmJiB0aGlzLmd1aS5vcGVuKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggdGltZSApIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgc2V0UGxhaW5Db2xvciAoIGNvbG9yICkge1xuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygwLCAwKTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICggb3JpZW50YXRpb25OYW1lLCBzY2FsYXIgPSAxLCBkdXJhdGlvbiA9IDIgKSB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbnNbb3JpZW50YXRpb25OYW1lXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3JpZW50YXRpb24gKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IG9yaWVudGF0aW9uLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoc2NhbGFyKTsgLy8gcm9zYWNlXG5cbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnggPSBjbG9uZS54O1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueSA9IGNsb25lLnk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS56ID0gY2xvbmUuejtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldmVyc2VTdHJpcGVzICgpIHtcbiAgICAgICAgLy8gdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgfVxuXG4gICAgY2hhbmdlU3BlZWQgKCBzcGVlZCA9IHRoaXMuc3BlZWRNaW4gKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBpbnZlcnQgKCkge1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcblxuICAgICAgICBpZiAoIHRoaXMuYmxhY2tNb2RlICkge1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLnNob3coKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0byA9IHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXS52YWx1ZSA9PT0gMS4wID8gMC4gOiAxLjtcbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiB0bywgZWFzZTogdGhpcy5lYXNlLCB9LCAwKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG5cbiAgICB0b2dnbGVWaXNpYmlsaXR5ICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10udmFsdWUgKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyAoIGRhdGEgKSB7XG4gICAgICAgIHN3aXRjaCAoIGRhdGEua2V5ICkge1xuICAgICAgICAgICAgLy8gY2FzZSAncCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRQbGFpbkNvbG9yKDB4MDAwMDAwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdHJpcGVzKCdob3Jpem9udGFsJywgMSk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ3YnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RyaXBlcygndmVydGljYWwnLCAxKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnaSc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pbnZlcnQoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAncic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yZXZlcnNlU3RyaXBlcygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5SGlkZXI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgdGhpcy52aXNpYmlsaXR5U2hvd2VyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDEsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogMCwgZWFzZTogdGhpcy5lYXNlIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZURpdmlzaW9ucyAoIHgsIHksIGludmVydCA9IHRydWUgKSB7XG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCB0aGlzLmR1cmF0aW9uLCB7IHg6IHgsIHk6IHksIGVhc2U6IHRoaXMuZWFzZSB9LCAwKTtcblxuICAgICAgICBpZiAoIGludmVydCAmJiBNYXRoLnJhbmRvbSgpID4gMC45KSB7XG4gICAgICAgICAgICB0bC5hZGQodGhpcy5pbnZlcnQoKSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxuXG4gICAgc2V0QmxhY2tNb2RlICgpIHtcbiAgICAgICAgdGhpcy5ibGFja01vZGUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDEuMCwgZWFzZTogdGhpcy5lYXNlLCB9KTtcbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIHVQcm9ncmVzcyApIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSB1UHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgb25FbmQgKCkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddLnZhbHVlID0gMC4wO1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMjtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgfX0pO1xuICAgICAgICB0bC5zZXQodGhpcy51bmlmb3Jtc1sndVNxdWFyZSddLnZhbHVlLCB7IHg6IDEsIHk6IDEsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCBkdXJhdGlvbiwgeyB2YWx1ZTogMC4wLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLmZyb21Ubyh0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXSwgZHVyYXRpb24sIHsgdmFsdWU6IDEuOCB9LCB7IHZhbHVlOiAwLjAsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1VGltZSddLnZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10udmFsdWUgPSAwLjA7XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIG9uSGlkZGVuVUkgKCkge1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdEZhY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCAobiwgc3RhcnQxLCBzdG9wMSwgc3RhcnQyLCBzdG9wMikge1xuICAgIHJldHVybiAoKG4gLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSkgKiAoc3RvcDIgLSBzdGFydDIpICsgc3RhcnQyO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL21hcC5qcyIsIi8vIHNvdXJjZWQgZnJvbTpcbi8vIGh0dHA6Ly93d3cubGVhbmJhY2twbGF5ZXIuY29tL3Rlc3QvaDVtdC5odG1sXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtbWltZS9ibG9iL21hc3Rlci90eXBlcy5qc29uXG52YXIgbWltZVR5cGVzID0gcmVxdWlyZSgnLi9taW1lLXR5cGVzLmpzb24nKVxuXG52YXIgbWltZUxvb2t1cCA9IHt9XG5PYmplY3Qua2V5cyhtaW1lVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICB2YXIgZXh0ZW5zaW9ucyA9IG1pbWVUeXBlc1trZXldXG4gIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0KSB7XG4gICAgbWltZUxvb2t1cFtleHRdID0ga2V5XG4gIH0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvb2t1cCAoZXh0KSB7XG4gIGlmICghZXh0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgZXh0ZW5zaW9uIHN0cmluZycpXG4gIGlmIChleHQuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgZXh0ID0gZXh0LnN1YnN0cmluZygxKVxuICB9XG4gIHJldHVybiBtaW1lTG9va3VwW2V4dC50b0xvd2VyQ2FzZSgpXVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzdHJpbmcgPSB0b1N0cmluZy5jYWxsKGZuKVxuICByZXR1cm4gc3RyaW5nID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8XG4gICAgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBzdHJpbmcgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAvLyBJRTggYW5kIGJlbG93XG4gICAgIChmbiA9PT0gd2luZG93LnNldFRpbWVvdXQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuYWxlcnQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuY29uZmlybSB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5wcm9tcHQpKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1mdW5jdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUF1ZGlvQ29udGV4dFxuZnVuY3Rpb24gY3JlYXRlQXVkaW9Db250ZXh0ICgpIHtcbiAgdmFyIEF1ZGlvQ3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICByZXR1cm4gbmV3IEF1ZGlvQ3RvcigpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvYXVkaW8tY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxudmFyIGF1ZGlvXG5cbm1vZHVsZS5leHBvcnRzID0gaXNTcmNQbGF5YWJsZVxuZnVuY3Rpb24gaXNTcmNQbGF5YWJsZSAoc3JjKSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzcmMgY2Fubm90IGJlIGVtcHR5JylcbiAgdmFyIHR5cGVcbiAgaWYgKHR5cGVvZiBzcmMuZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gPHNvdXJjZT4gZWxlbWVudFxuICAgIHR5cGUgPSBzcmMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3JjID09PSAnc3RyaW5nJykge1xuICAgIC8vICdmb28ubXAzJyBzdHJpbmdcbiAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uKHNyYylcbiAgICBpZiAoZXh0KSB0eXBlID0gbG9va3VwKGV4dClcbiAgfSBlbHNlIHtcbiAgICAvLyB7IHNyYzogJ2Zvby5tcDMnLCB0eXBlOiAnYXVkaW8vbXBlZzsgY29kZWNzLi4nfVxuICAgIHR5cGUgPSBzcmMudHlwZVxuICB9XG5cbiAgLy8gV2UgaGF2ZSBhbiB1bmtub3duIGZpbGUgZXh0ZW5zaW9uIG9yXG4gIC8vIGEgPHNvdXJjZT4gdGFnIHdpdGhvdXQgYW4gZXhwbGljaXQgdHlwZSxcbiAgLy8ganVzdCBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0IVxuICBpZiAoIXR5cGUpIHJldHVybiB0cnVlXG5cbiAgLy8gaGFuZGxlIFwibm9cIiBlZGdlIGNhc2Ugd2l0aCBzdXBlciBsZWdhY3kgYnJvd3NlcnMuLi5cbiAgLy8gaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9mb3J1bS8jIXRvcGljL2dvb2dsZS13ZWItdG9vbGtpdC1jb250cmlidXRvcnMvYThVeTBiWHExSG9cbiAgaWYgKCFhdWRpbykgYXVkaW8gPSBuZXcgd2luZG93LkF1ZGlvKClcbiAgdmFyIGNhbnBsYXkgPSBhdWRpby5jYW5QbGF5VHlwZSh0eXBlKS5yZXBsYWNlKC9uby8sICcnKVxuICByZXR1cm4gQm9vbGVhbihjYW5wbGF5KVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVFcnJvciA9IGNyZWF0ZUVycm9yXG5mdW5jdGlvbiBjcmVhdGVFcnJvciAoc291cmNlcykge1xuICAvLyBBbGwgc291cmNlcyBhcmUgdW5wbGF5YWJsZVxuICB2YXIgZXJyID0gbmV3IEVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhbnkgb2YgdGhlIGZvbGxvd2luZyBzb3VyY2VzOlxcbiAgICAnICtcbiAgICAgIHNvdXJjZXMuam9pbignLCAnKSArICdcXG4nICtcbiAgICAgICdUcnkgdXNpbmcgYW4gYXJyYXkgb2YgT0dHLCBNUDMgYW5kIFdBVi4nKVxuICBlcnIudHlwZSA9ICdBVURJT19GT1JNQVQnXG4gIHJldHVybiBlcnJcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uIChkYXRhKSB7XG4gIHZhciBleHRJZHggPSBkYXRhLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGV4dElkeCA8PSAwIHx8IGV4dElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiBkYXRhLnN1YnN0cmluZyhleHRJZHggKyAxKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2Nhbi1wbGF5LXNyYy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXVkaW9Db250ZXh0KSB7XG4gIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnICYmXG4gICAgICB0eXBlb2YgYXVkaW9Db250ZXh0LnJlc3VtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGF1ZGlvQ29udGV4dC5yZXN1bWUoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvcmVzdW1lLWNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuaW1wb3J0IHJhbmRvbUZyb21BcnJheSBmcm9tICcuL3V0aWxzL3JhbmRvbUZyb21BcnJheSc7XG5pbXBvcnQgbHVja3kgZnJvbSAnLi91dGlscy9sdWNreSc7XG5pbXBvcnQgbWFwIGZyb20gJy4vdXRpbHMvbWFwJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJztcblxuY2xhc3MgRmFjZXNDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgICAgdGhpcy5mYWNlcyA9IHt9O1xuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgeTogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICBsYXN0WDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudGltZSA9IDAuMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgdGhpcy5zcGVlZENvbnRhaW5lciA9IDAuMDtcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxLjA7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdFNwYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWdoa2lja2VkID0gMDtcbiAgICAgICAgdGhpcy5sb3draWNrZWQgPSAwO1xuXG4gICAgICAgIC8vIG9uIGV2ZW50c1xuICAgICAgICB0aGlzLm9uTG93S2ljayA9IDo6dGhpcy5vbkxvd0tpY2s7XG4gICAgICAgIHRoaXMub25NaWRkbGVLaWNrID0gOjp0aGlzLm9uTWlkZGxlS2ljaztcbiAgICAgICAgdGhpcy5vbkhpZ2hLaWNrID0gOjp0aGlzLm9uSGlnaEtpY2s7XG4gICAgICAgIHRoaXMub25UcmVtb2xvID0gOjp0aGlzLm9uVHJlbW9sbztcbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gOjp0aGlzLm9uS2V5UHJlc3M7XG4gICAgICAgIHRoaXMub25VSUhpZGRlbiA9IDo6dGhpcy5vblVJSGlkZGVuO1xuICAgICAgICB0aGlzLm9uU291bmRFbmQgPSA6OnRoaXMub25Tb3VuZEVuZDtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uU3BhY2VEb3duID0gOjp0aGlzLm9uU3BhY2VEb3duO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vblNwYWNlSG9sZCA9IDo6dGhpcy5vblNwYWNlSG9sZDtcblxuICAgICAgICAvLyBibGFjayBtb2Rlc1xuICAgICAgICB0aGlzLmJsYWNrTW9kZVZlcnRpY2FsID0gOjp0aGlzLmJsYWNrTW9kZVZlcnRpY2FsO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwgPSA6OnRoaXMuYmxhY2tNb2RlSG9yaXpvbnRhbDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxUb3AgPSA6OnRoaXMuYmxhY2tNb2RlVHVubmVsVG9wO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbEJvdHRvbSA9IDo6dGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b207XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlQm90dG9tID0gOjp0aGlzLmJsYWNrTW9kZUJvdHRvbTtcbiAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsID0gOjp0aGlzLmJsYWNrTW9kZUZ1bGw7XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlSG9yaXpvbnRhbCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlQm90dG9tLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxUb3AsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbEJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCxcbiAgICAgICAgXTtcblxuICAgICAgICAvLyByZWFjdGlvbnNcbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMgPSA6OiB0aGlzLnVwZGF0ZURpdmlzaW9ucztcbiAgICAgICAgdGhpcy5zZXRCbGFja01vZGUgPSA6OnRoaXMuc2V0QmxhY2tNb2RlO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlID0gOjp0aGlzLmNoYW5nZVNjYWxlO1xuXG4gICAgICAgIHRoaXMucmVhY3Rpb25zID0gW1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMsXG4gICAgICAgICAgICB0aGlzLnNldEJsYWNrTW9kZSxcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWCA9IDo6dGhpcy5jaGFuZ2VTY2FsZVg7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGVZID0gOjp0aGlzLmNoYW5nZVNjYWxlWTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZUJvdGggPSA6OnRoaXMuY2hhbmdlU2NhbGVCb3RoO1xuXG4gICAgICAgIC8vIHNjYWxlc1xuICAgICAgICB0aGlzLnNjYWxpbmdzID0gW1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVksXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWCxcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVCb3RoLFxuICAgICAgICBdO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuTE9XS0lDSywgdGhpcy5vbkxvd0tpY2spO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuTUlERExFS0lDSywgdGhpcy5vbk1pZGRsZUtpY2spO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuSElHSEtJQ0ssIHRoaXMub25IaWdoS2ljayk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5UUkVNT0xPLCB0aGlzLm9uVHJlbW9sbyk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5FTkQsIHRoaXMub25Tb3VuZEVuZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlVJLkhJRERFTiwgdGhpcy5vblVJSGlkZGVuKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCwgdGhpcy5vblNwYWNlVXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHRoaXMub25TcGFjZUhvbGQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcblxuICAgICAgICAvLyB0aGlzLnVwZGF0ZURpdmlzaW9ucyA9IGRlYm91bmNlKHRoaXMudXBkYXRlRGl2aXNpb25zLCA0MDApO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVNjYWxlID0gZGVib3VuY2UodGhpcy5jaGFuZ2VTY2FsZSwgNDAwKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCbGFja01vZGUgPSBkZWJvdW5jZSh0aGlzLnNldEJsYWNrTW9kZSwgNDAwKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyICggaWQsIGZhY2UgKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbaWRdID0gZmFjZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkKGZhY2UpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGl2aXNpb25zICggbWluLCBtYXgsIGJldHdlZW4gPSA0ICkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbnMgPSBbMF07XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpKz0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSBtYXg7IGkgPj0gbWluOyBpLT0gYmV0d2VlbiApIHtcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2aXNpb25zLnB1c2goMCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdmlzaW9ucztcbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWCA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy54LCB0aGlzLmRpdmlzaW9ucy5sYXN0WCwgMik7XG4gICAgICAgIGNvbnN0IHJkbVhJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25YLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWCA9IHBvc3NpYmxlRGl2aXNpb25YW3JkbVhJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFggPSB0aGlzLmRpdmlzaW9ucy54LmluZGV4T2YoZGl2aXNpb25YKTtcblxuICAgICAgICBjb25zdCBwb3NzaWJsZURpdmlzaW9uWSA9IHRoaXMuZmluZERpdmlzaW9ucyh0aGlzLmRpdmlzaW9ucy55LCB0aGlzLmRpdmlzaW9ucy5sYXN0WSwgMik7XG4gICAgICAgIGNvbnN0IHJkbVlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlRGl2aXNpb25ZLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uWSA9IHBvc3NpYmxlRGl2aXNpb25ZW3JkbVlJbmRleF07XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMubGFzdFkgPSB0aGlzLmRpdmlzaW9ucy55LmluZGV4T2YoZGl2aXNpb25ZKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0udXBkYXRlRGl2aXNpb25zKGRpdmlzaW9uWCwgZGl2aXNpb25ZLCB0aGlzLmFsbG93SW52ZXJ0KSwgMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0cmlwZXMgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0uc2V0U3RyaXBlcygnaG9yaXpvbnRhbCcsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaW5kRGl2aXNpb25zICggYWxsLCBjdXJyZW50LCByYW5nZSApIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gYWxsLm1hcCggKCBkaXZpc2lvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICggaW5kZXggPiBjdXJyZW50IC0gcmFuZ2UgJiYgaW5kZXggPCBjdXJyZW50ICsgcmFuZ2UgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdmlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLmZpbHRlciggKCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGl2aXNpb25zO1xuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBkYXRhICkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCB8fCB3aW5kb3cuc291bmRFbmRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXkgPT09ICdkJyApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ2UnICkge1xuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgga2V5ID09PSAneCcgKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gIXRoaXMuc3BlZWRDb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvd0tpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJkbSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgaWYgKCByZG0gPiAwLjYgfHwgIXRoaXMubG93a2lja2VkICkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmICggcmRtID4gMC4yICkge1xuICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvd2tpY2tlZCsrO1xuICAgIH1cblxuICAgIG9uSGlnaEtpY2sgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAxLjE7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhpZ2hraWNrZWQgJSAyID09PSAwICkge1xuICAgICAgICAgICAgdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5oaWdoa2lja2VkKys7XG4gICAgICAgIHRoaXMuYWxsb3dJbnZlcnQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoMywgOSwgMiksXG4gICAgICAgICAgICB5OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDEsIDEzLCAyKSxcbiAgICAgICAgICAgIGxhc3RYOiAwLFxuICAgICAgICAgICAgbGFzdFk6IDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGFja01vZGVzID0gW1xuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoKTtcblxuICAgICAgICAvLyBjb25zdCByZWFjdGlvbiA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnJlYWN0aW9ucyk7XG4gICAgICAgIC8vIHJlYWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25NaWRkbGVLaWNrICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01JRERMRUtJQ0snKTtcbiAgICB9XG5cbiAgICBvblRyZW1vbG8gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnVHJlbW9sb29vbycpO1xuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5FTkQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLm9uRW5kKCksIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCbGFja01vZGUgKCkge1xuICAgICAgICBjb25zdCBibGFja01vZGUgPSByYW5kb21Gcm9tQXJyYXkodGhpcy5ibGFja01vZGVzKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGJsYWNrTW9kZSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCBvcHRpb25zW2tleV0gPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5oaWRlKCksIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnNob3coKSwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0uc2V0QmxhY2tNb2RlKCksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBibGFja01vZGVWZXJ0aWNhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlSG9yaXpvbnRhbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsVG9wICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMSxcbiAgICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBibGFja01vZGVUdW5uZWxCb3R0b20gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUJvdHRvbSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlRnVsbCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGUgKCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHJhbmRvbUZyb21BcnJheSh0aGlzLnNjYWxpbmdzKTtcblxuICAgICAgICBzY2FsZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlWCAoKSB7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgoMC41LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKiAwLjEpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuY29udGFpbmVyLnNjYWxlLCAwLjMsIHsgeDogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZVkgKCkge1xuICAgICAgICBjb25zdCB0byA9IE1hdGgubWF4KDAuNSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICogMC4xKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmNvbnRhaW5lci5zY2FsZSwgMC4zLCB7IHk6IHRvLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGVCb3RoICgpIHtcbiAgICAgICAgY29uc3QgdG8gPSBNYXRoLm1heCgwLjUsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSAqIDAuMSk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB4OiB0bywgeTogdG8sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvblVJSGlkZGVuICgpIHtcbiAgICAgICAgdGhpcy5mYWNlc1snbGVmdCddLnNob3coKTtcbiAgICAgICAgdGhpcy5mYWNlc1sncmlnaHQnXS5zaG93KCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5yZXNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpdmlzaW9ucyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgeTogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucyg1LCA0MyksXG4gICAgICAgICAgICBsYXN0WDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20sXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50aW1lID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4wO1xuICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMC4wO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDEuMDtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0U3BhY2VVcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hraWNrZWQgPSAwO1xuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gdGhpcy5mYWN0b3IgKiB0aGlzLnNwZWVkICogMC4xO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yb3RhdGlvbi56ICs9IHRoaXMuZmFjdG9yICogdGhpcy5zcGVlZENvbnRhaW5lciAqIDAuMDA1O1xuXG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICAgICAgdGhpcy5mYWNlc1sncmlnaHQnXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICAgICAgdGhpcy5mYWNlc1snYm90dG9tJ10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3RvcCddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggd2luZG93LnN0YXJ0ZWQgJiYgdGhpcy5pc1NwYWNlRG93biAmJiB0aGlzLmZpcnN0U3BhY2VVcCApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICkge1xuICAgICAgICAgICAgdGhpcy5maXJzdFNwYWNlVXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvblNwYWNlRG93biAoKSB7XG4gICAgICAgIGlmICggd2luZG93LnN0YXJ0ZWQgJiYgIXRoaXMuaXNTcGFjZURvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gZGF0YTtcblxuICAgICAgICBjb25zdCB1UHJvZ3Jlc3MgPSBtYXAocHJvZ3Jlc3MsIDAsIDEsIDAsIDEuOCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlc1trZXldLm9uU3BhY2VIb2xkKHVQcm9ncmVzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICAvLyB0aGlzLnNwZWVkID0gMTIuMDtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLCAxLCB7IHNwZWVkOiAxMiwgZWFzZTogRXhwby5lYXNlSW5PdXQgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNlc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9GYWNlc0NvbnRyb2xsZXIuanMiLCIvKipcbiAqIE1vdXNlIE1hbmFnZXJcbiAqL1xuXG5jbGFzcyBNb3VzZU1hbmFnZXIge1xuXG5cbiAgICBzdGF0aWMgc3RhcnQoIGNoZWNrTW91c2VTcGVlZCA9IGZhbHNlICkge1xuXG4gICAgICAgIC8vIHNwZWVkXG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWSA9IDA7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VMYXN0WSA9IDA7XG5cbiAgICAgICAgLy8gZGlyZWN0aW9uXG4gICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMDtcblxuICAgICAgICAvLyBwb3NpdGlvblxuICAgICAgICB3aW5kb3cubW91c2VYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlWSA9IDA7XG5cbiAgICAgICAgaWYoY2hlY2tNb3VzZVNwZWVkKSB3aW5kb3cuc2V0SW50ZXJ2YWwoIE1vdXNlTWFuYWdlci5nZXRTcGVlZCwgMzAgKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgTW91c2VNYW5hZ2VyLm1vdmUgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbW92ZShlKSB7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgd2luZG93Lm1vdXNlWSA9IGUuY2xpZW50WTtcblxuICAgICAgICBNb3VzZU1hbmFnZXIuZ2V0RGlyZWN0aW9uKGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREaXJlY3Rpb24oZSkge1xuXG4gICAgICAgIC8vIHhcbiAgICAgICAgaWYgKHdpbmRvdy5tb3VzZVggPCBlLnBhZ2VYKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDE7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5tb3VzZVggPiBlLnBhZ2VYKVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IC0xO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMDtcblxuICAgICAgICAvLyB5XG4gICAgICAgIGlmICh3aW5kb3cubW91c2VZIDwgZS5wYWdlWSlcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAxO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubW91c2VZID4gZS5wYWdlWSlcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAtMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNwZWVkKCkge1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFggPSB3aW5kb3cubW91c2VYIC0gd2luZG93Lm1vdXNlTGFzdFg7XG4gICAgICAgIHdpbmRvdy5tb3VzZVNwZWVkWSA9IHdpbmRvdy5tb3VzZVkgLSB3aW5kb3cubW91c2VMYXN0WTtcblxuICAgICAgICB3aW5kb3cubW91c2VMYXN0WCA9IHdpbmRvdy5tb3VzZVg7XG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RZID0gd2luZG93Lm1vdXNlWTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdXNlTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIEtleWJvYXJkQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgIG9uS2V5VXAgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHsga2V5IH0pO1xuXG4gICAgICAgIGlmICgga2V5ID09PSAnICcgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFVVApO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5RG93biAoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRURPV04pO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZUFJFU1MsIHsga2V5IH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnYmFja2dyb3VuZCcpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQmFja2dyb3VuZC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBCb3R0b20gZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JvdHRvbScpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygtMywgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlID0gMS4wO1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnMic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzMnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMSc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3R0b207XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgTGVmdCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAnbGVmdCcpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc0JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMSc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICczJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIFJpZ2h0IGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdyaWdodCcsIFRIUkVFLkJhY2tTaWRlKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTIwLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc2JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMSc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICczJztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9mYWNlcy9SaWdodC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBUb3AgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ3RvcCcsIFRIUkVFLkJhY2tTaWRlKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygyMCwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2tldzI6IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAxLCAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzgnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICczJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzEnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvVG9wLmpzIiwiaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICd3ZWItYXVkaW8tcGxheWVyJztcbmltcG9ydCBjcmVhdGVBbmFseXNlciBmcm9tICd3ZWItYXVkaW8tYW5hbHlzZXInO1xuaW1wb3J0IGF2ZXJhZ2UgZnJvbSAnYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UnO1xuaW1wb3J0IFJhbmdlIGZyb20gJy4vUmFuZ2UnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcblxuY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuLy8gY29uc3QgYXVkaW9Db250ZXh0ID0gQXVkaW9Db250ZXh0ID8gbmV3IEF1ZGlvQ29udGV4dCgpIDogbnVsbDtcblxuY2xhc3MgU291bmRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5iYXNzID0gMDtcbiAgICAgICAgdGhpcy5taWRCYXNzID0gMDtcbiAgICAgICAgdGhpcy52b2ljZSA9IDA7XG4gICAgICAgIHRoaXMuZHJ1bSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmFzc2V0cyA9ICdhc3NldHMvc291bmRzJztcbiAgICAgICAgdGhpcy5zb3VyY2VzID0ge1xuICAgICAgICAgICAgaW50cm86ICdpbnRyby5tcDMnLFxuICAgICAgICAgICAgeHA6ICd4cC5tcDMnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSA6OnRoaXMuc3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG5cbiAgICAgICAgdGhpcy5pbml0U291bmQoKTtcbiAgICAgICAgLy8gdGhpcy5pbml0R3VpKCk7XG5cbiAgICAgICAgY29uc3QgbG93S2ljayA9IG5ldyBSYW5nZSgnbG93S2ljaycsIFsxMTAsIDEzMF0sIDYwMCwgRXZlbnRzLlNPVU5EUy5MT1dLSUNLKTtcbiAgICAgICAgY29uc3QgbWlkZGxlS2ljayA9IG5ldyBSYW5nZSgnbWlkZGxlS2ljaycsIFsyNzAsIDI5MF0sIDYwMCwgRXZlbnRzLlNPVU5EUy5NSURETEVLSUNLLCAwLjMpO1xuICAgICAgICBjb25zdCB0cmVtb2xvID0gbmV3IFJhbmdlKCd0cmVtb2xvJywgWzQ4MCwgNTIwXSwgMTAwLCBFdmVudHMuU09VTkRTLlRSRU1PTE8pO1xuICAgICAgICBjb25zdCBoaWdoS2ljayA9IG5ldyBSYW5nZSgnaGlnaEtpY2snLCBbMTUwMCwgMzUwMF0sIDgwMCwgRXZlbnRzLlNPVU5EUy5ISUdIS0lDSywgMC41KTtcblxuICAgICAgICB0aGlzLnJhbmdlcyA9IFtsb3dLaWNrLCBoaWdoS2ljaywgdHJlbW9sbywgbWlkZGxlS2lja107XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLlNUQVJULCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB0aGlzLm9uU3BhY2VIb2xkKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VVUCwgdGhpcy5vblNwYWNlVXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICB9XG5cbiAgICBpbml0R3VpICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZEd1aSA9IHdpbmRvdy5ndWkuYWRkRm9sZGVyKCdTb3VuZCcpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhdXNlID0gdGhpcy5zb3VuZEd1aS5hZGQodGhpcywgJ3BhdXNlJyk7XG4gICAgICAgIHBhdXNlLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlKSB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRTb3VuZCAoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc291cmNlcykubWFwKCAoIGtleSApID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldID0ge1xuICAgICAgICAgICAgICAgIGF1ZGlvOiBudWxsLFxuICAgICAgICAgICAgICAgIGFuYWx5c2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIG5vZGU6IG51bGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gMDtcbiAgICAgICAgICAgIGF1ZGlvLmNyb3NzT3JpZ2luID0gJ0Fub255bW91cyc7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBjcmVhdGVBbmFseXNlcihhdWRpbywgYXVkaW9Db250ZXh0LCB7IGF1ZGlibGU6IHRydWUsIHN0ZXJlbzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYW5hbHlzZXIgPSBhbmFseXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5ub2RlID0gYW5hbHlzZXIuYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuU09VTkRTLkNBTlBMQVksIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5FTkQsIHsgbmFtZToga2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBgJHt0aGlzLmFzc2V0c30vJHt0aGlzLnNvdXJjZXNba2V5XX1gO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XS5hdWRpbyA9IGF1ZGlvO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICBpZiAoIHBsYXllci5sb2FkZWQgKSB7XG4gICAgICAgICAgICBwbGF5ZXIuYXVkaW8ucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnBsYXllcnNbJ3hwJ10ubG9hZGVkICkge1xuICAgICAgICAgICAgY29uc3QgeyBhbmFseXNlciwgbm9kZSB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgICAgICBjb25zdCBmcmVxcyA9IGFuYWx5c2VyLmZyZXF1ZW5jaWVzKCk7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucmFuZ2VzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBhdmVyYWdlKG5vZGUsIGZyZXFzLCByYW5nZS5mcmVxc1swXSwgcmFuZ2UuZnJlcXNbMV0pO1xuXG4gICAgICAgICAgICAgICAgcmFuZ2UudXBkYXRlKGxldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VIb2xkICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyB2b2x1bWUgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICBhdWRpby52b2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih2b2x1bWUgKiAwLjUsIDEpKTtcbiAgICB9XG5cbiAgICBvblNwYWNlRG93biAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNTcGFjZURvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhdWRpbyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHsgYXVkaW86IGludHJvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG4gICAgICAgIGNvbnN0IHsgYXVkaW86IHhwIH0gPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgeHAudm9sdW1lID0gMTtcbiAgICAgICAgeHAucGxheSgpO1xuXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIHRsLnRvKGludHJvLCAwLjUsIHsgdm9sdW1lOiAwLCBlYXNlOiBFeHBvLmVhc2VPdXQsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIGludHJvLnBhdXNlKCk7XG4gICAgICAgIH19KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291bmRNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvU291bmRNYW5hZ2VyLmpzIiwidmFyIHF1ZXVlID0ge307XG5cbi8qXG4qKiBhbGxvdyBhbnkgbnVtYmVyIHZhcmlhYmxlIHRvIGJlIHNtb290aGVkXG4qIEBwYXJhbSB7c3RyaW5nfSBpZCAtIGEgdW5pcXVlIG5hbWUgZm9yIHlvdXIgc21vb3RoaW5nXG4qIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBiZSBzbW9vdGhlZFxuKiBAcGFyYW0ge251bWJlcn0gY29lZmYgKG9wdGlvbmFsKSAtIHRoZSBzbW9vdGhpbmcgY29lZmZpY2llbnQsIHRoZSBzbWFsbGVyLCB0aGUgc2xvd2VyLiBEZWZhdWx0OiAwLjFcbiogQHBhcmFtIHtib29sZWFufSBsb2cgKG9wdGlvbmFsKSAtIGVpdGhlciB0aGUgc21vb3RoZWQgdmFsdWUgaXMgbG9nIGluIHRoZSBjb25zb2xlLiBEZWZhdWx0OiBmYWxzZVxuKiBAcGFyYW0ge251bWJlcn0gaW5pdCAob3B0aW9uYWwpIC0gdGhlIHN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBzbW9vdGhpbmcuIERlZmF1bHQ6IDBcbiogQHJldHVybiB7bnVtYmVyfSB0aGUgc21vb3RoZWQgdmFsdWVcbioqL1xuXG5mdW5jdGlvbiBzbW9vdGggKCBpZCwgdmFsdWUsIGNvZWZmID0gMC4xLCBsb2cgPSBmYWxzZSwgaW5pdCA9IDAgKSB7XG5cdGlmICggcXVldWVbaWRdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0cXVldWVbaWRdICs9ICggdmFsdWUgLSBxdWV1ZVtpZF0gKSAqIGNvZWZmO1xuXG5cdFx0aWYgKCBsb2cgKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgJWNTbW9vdGggJHtpZH0gOjogJHtxdWV1ZVtpZF19YCwgJ2NvbG9yOiBibHVlOycpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgaWQgPT09ICcnICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbW9vdGggOjogaWQgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuXHRcdH1cblxuXHRcdHF1ZXVlW2lkXSA9IGluaXQ7XG5cdH1cblxuXHRyZXR1cm4gcXVldWVbaWRdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc21vb3RoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vc21vb3RoLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIFVJIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy4kd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0taW50cm8nKTtcbiAgICAgICAgdGhpcy4kbG9nbyA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmludHJvX19sb2dvJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbiA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmludHJvX19hY3Rpb24nKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uTGFiZWwgPSB0aGlzLiRhY3Rpb24ucXVlcnlTZWxlY3RvcignLmFjdGlvbl9fbGFiZWwnKTtcbiAgICAgICAgdGhpcy4kYWN0aW9uRmlsbCA9IHRoaXMuJHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmFjdGlvbl9fZmlsbCcpO1xuICAgICAgICB0aGlzLiR0dXRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS10dXRvJyk7XG4gICAgICAgIHRoaXMuJGNyZWRpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLWNyZWRpdHMnKTtcbiAgICAgICAgdGhpcy4kY3JlZGl0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlZGl0c19faXRlbScpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0ZpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3Byb2dyZXNzX19maWxsJyk7XG4gICAgICAgIHRoaXMuJGhlbHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX2hlbHAnKTtcbiAgICAgICAgdGhpcy4kYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fYmFja2dyb3VuZCcpO1xuXG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhUaW1lID0gMzAwMDtcbiAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubWluRmlsbCA9IDAuMDE7XG4gICAgICAgIHRoaXMubWF4RmlsbCA9IDE7XG4gICAgICAgIHRoaXMuZmlsbCA9IHRoaXMubWluRmlsbDtcblxuICAgICAgICB0aGlzLnZvbHVtZSA9IDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDU7XG5cbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gOjp0aGlzLm9uQ29tcGxldGU7XG5cbiAgICAgICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24sIHsgdm9sdW1lOiAxLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHByb2dyZXNzRmlsbCwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDEpYCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRsb2dvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMS41LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgcHJvZ3Jlc3M6IDEsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjI1KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiR0dXRvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuNzUsIHsgY3NzOiB7IHNjYWxlOiAxLjUgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjI1KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiR0dXRvLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNzUpO1xuICAgICAgICB0aGlzLnRsLnNldCh0aGlzLCB7IHByb2dyZXNzOiAwIH0pO1xuICAgICAgICAvLyB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IHByb2dyZXNzOiAwLjQ0LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgdGhpcy5kdXJhdGlvbiAqIDAuOTgpO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IDo6dGhpcy5vbktleURvd247XG4gICAgICAgIHRoaXMub25LZXlVcCA9IDo6dGhpcy5vbktleVVwO1xuICAgICAgICB0aGlzLm9uU3BhY2VEb3duID0gOjp0aGlzLm9uU3BhY2VEb3duO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25FbmRYUCA9IDo6dGhpcy5vbkVuZFhQO1xuICAgICAgICB0aGlzLm9uQ2xpY2tIZWxwID0gOjp0aGlzLm9uQ2xpY2tIZWxwO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWURPV04sIHRoaXMub25LZXlEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuS0VZVVAsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOLCB0aGlzLm9uU3BhY2VEb3duKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuRU5ELCB0aGlzLm9uRW5kWFApO1xuXG4gICAgICAgIHRoaXMudGxIZWxwU2hvdyA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0aGlzLnRsSGVscFNob3cudG8odGhpcy4kdHV0bywgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRoaXMudGxIZWxwU2hvdy50byh0aGlzLiRiYWNrZ3JvdW5kLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHRoaXMudGxIZWxwSGlkZSA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWxwSXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGhpcy50bEhlbHBIaWRlLnRvKHRoaXMuJHR1dG8sIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRoaXMudGxIZWxwSGlkZS50byh0aGlzLiRiYWNrZ3JvdW5kLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuXG4gICAgICAgIHRoaXMuJGhlbHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tIZWxwKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB7IHByb2dyZXNzOiB0aGlzLnByb2dyZXNzLCB2b2x1bWU6IHRoaXMudm9sdW1lIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLiR3cmFwcGVyLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIGhpZGUgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy4kd3JhcHBlciwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBvbktleURvd24gKCBkYXRhICkge1xuXG4gICAgfVxuXG4gICAgb25LZXlVcCAoIGRhdGEgKSB7XG5cbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiB0aGlzLmlzRG93biAmJiAhdGhpcy5pc0NvbXBsZXRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSg0KTtcbiAgICAgICAgICAgIHRoaXMudGwucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCAmJiAhdGhpcy5pc0Rvd24gKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRsLnRpbWVTY2FsZSgxKTtcbiAgICAgICAgICAgIHRoaXMudGwucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZSAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcywgeyBwcm9ncmVzczogMCB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRjcmVkaXRJdGVtcywgeyBjc3M6IHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fSk7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kY3JlZGl0cywgeyBjc3M6IHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX0pO1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJHByb2dyZXNzRmlsbCwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDApYH19KTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGhlbHAsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5YUC5TVEFSVCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5Q3JlZGl0cyAoKSB7XG4gICAgICAgIHRoaXMuJGNyZWRpdHMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgdGhpcy4kYWN0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ0hvbGQgc3BhY2ViYXIgdG8gcmVzdGFydCc7XG5cbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRsLmtpbGwoKTtcbiAgICAgICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogdGhpcy5vbkNvbXBsZXRlIH0pO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24sIHsgdm9sdW1lOiAxLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRhY3Rpb24sIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHByb2dyZXNzRmlsbCwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgdHJhbnNmb3JtOiBgc2NhbGVYKDEpYCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kY3JlZGl0cywgdGhpcy5kdXJhdGlvbiwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMS41LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcywgdGhpcy5kdXJhdGlvbiAqIDAuNSwgeyBwcm9ncmVzczogMSwgZWFzZTogRXhwby5lYXNlSW5PdXQgfSwgdGhpcy5kdXJhdGlvbiAqIDAuNSk7XG5cbiAgICAgICAgaWYgKCB0aGlzLmhlbHBJc09wZW4gKSB7XG4gICAgICAgICAgICB0aGlzLnRsSGVscEhpZGUucmVzdGFydCgpOyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAyO1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0bC5zdGFnZ2VyRnJvbVRvKEFycmF5LmZyb20odGhpcy4kY3JlZGl0SXRlbXMpLCBkdXJhdGlvbiwgeyBjc3M6IHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fSwgeyBjc3M6IHsgc2NhbGU6IDEuMCwgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgZHVyYXRpb24gKiAwLjA1LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kaGVscCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcbiAgICAgICAgdGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMucmVzZXR0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAyO1xuICAgIH1cblxuICAgIG9uRW5kWFAgKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlDcmVkaXRzKCk7XG4gICAgfVxuXG4gICAgb25DbGlja0hlbHAgKCBldmVudCApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoICF3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMuaGVscElzT3BlbiApIHtcbiAgICAgICAgICAgIHRoaXMuJGhlbHAuaW5uZXJIVE1MID0gJ1gnO1xuXG4gICAgICAgICAgICB0aGlzLnRsSGVscFNob3cucmVzdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kaGVscC5pbm5lckhUTUwgPSAnPyc7XG5cbiAgICAgICAgICAgIHRoaXMudGxIZWxwSGlkZS5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5ncykge1xuICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSBzdHJpbmdzID0gW3N0cmluZ3NdXG4gIHZhciBleHBycyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpXG4gIHZhciBwYXJ0cyA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgcGFydHMucHVzaChzdHJpbmdzW2ldLCBleHByc1tpXSB8fCAnJylcbiAgfVxuICBwYXJ0cy5wdXNoKHN0cmluZ3NbaV0pXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsc2xpZnkvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBUSFJFRSApIHtcblx0LyoqXG5cdCAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG5cdCAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cblx0ICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cblx0ICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG5cdCAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cblx0ICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblx0ZnVuY3Rpb24gT3JiaXRDb250cm9scyggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHRcdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdFx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pblpvb20gPSAwO1xuXHRcdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHRcdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHRcdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHRcdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHRcdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdFx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHRcdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0XHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHRcdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0XHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0XHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHRcdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0XHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdFx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHRcdC8vIE1vdXNlIGJ1dHRvbnNcblx0XHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdFx0Ly8gZm9yIHJlc2V0XG5cdFx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0XHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdFx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0XHQvL1xuXHRcdC8vIHB1YmxpYyBtZXRob2RzXG5cdFx0Ly9cblxuXHRcdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9O1xuXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHRcdH07XG5cblx0XHQvL1xuXHRcdC8vIGludGVybmFsc1xuXHRcdC8vXG5cblx0XHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdFx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHRcdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdFx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdFx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdFx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHRcdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdFx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0XHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0XHR2YXIgc2NhbGUgPSAxO1xuXHRcdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdFx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0XHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdH1cblxuXHRcdC8vXG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdH07XG5cblx0T3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5cdE9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3JiaXRDb250cm9scztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyggT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRcdGNlbnRlcjoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdFx0bm9ab29tOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vUm90YXRlOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vUGFuOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdG5vS2V5czoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9ICk7XG5cblx0cmV0dXJuIE9yYml0Q29udHJvbHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlcXVlbmN5VG9JbmRleCA9IHJlcXVpcmUoJ2F1ZGlvLWZyZXF1ZW5jeS10by1pbmRleCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlLmJpbmQobnVsbCwgMjU1KVxubW9kdWxlLmV4cG9ydHMuZmxvYXREYXRhID0gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlLmJpbmQobnVsbCwgMSlcblxuZnVuY3Rpb24gYW5hbHlzZXJGcmVxdWVuY3lBdmVyYWdlIChkaXYsIGFuYWx5c2VyLCBmcmVxdWVuY2llcywgbWluSHosIG1heEh6KSB7XG4gIHZhciBzYW1wbGVSYXRlID0gYW5hbHlzZXIuY29udGV4dC5zYW1wbGVSYXRlXG4gIHZhciBiaW5Db3VudCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50XG4gIHZhciBzdGFydCA9IGZyZXF1ZW5jeVRvSW5kZXgobWluSHosIHNhbXBsZVJhdGUsIGJpbkNvdW50KVxuICB2YXIgZW5kID0gZnJlcXVlbmN5VG9JbmRleChtYXhIeiwgc2FtcGxlUmF0ZSwgYmluQ291bnQpXG4gIHZhciBjb3VudCA9IGVuZCAtIHN0YXJ0XG4gIHZhciBzdW0gPSAwXG4gIGZvciAoOyBzdGFydCA8IGVuZDsgc3RhcnQrKykge1xuICAgIHN1bSArPSBmcmVxdWVuY2llc1tzdGFydF0gLyBkaXZcbiAgfVxuICByZXR1cm4gY291bnQgPT09IDAgPyAwIDogKHN1bSAvIGNvdW50KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhbXAgPSByZXF1aXJlKCdjbGFtcCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnJlcXVlbmN5VG9JbmRleFxuZnVuY3Rpb24gZnJlcXVlbmN5VG9JbmRleCAoZnJlcXVlbmN5LCBzYW1wbGVSYXRlLCBmcmVxdWVuY3lCaW5Db3VudCkge1xuICB2YXIgbnlxdWlzdCA9IHNhbXBsZVJhdGUgLyAyXG4gIHZhciBpbmRleCA9IE1hdGgucm91bmQoZnJlcXVlbmN5IC8gbnlxdWlzdCAqIGZyZXF1ZW5jeUJpbkNvdW50KVxuICByZXR1cm4gY2xhbXAoaW5kZXgsIDAsIGZyZXF1ZW5jeUJpbkNvdW50KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1ZGlvLWZyZXF1ZW5jeS10by1pbmRleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJhZiBmcm9tICdyYWYnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9mYWNlcy9CYWNrZ3JvdW5kJztcbmltcG9ydCBUb3AgZnJvbSAnLi9mYWNlcy9Ub3AnO1xuaW1wb3J0IExlZnQgZnJvbSAnLi9mYWNlcy9MZWZ0JztcbmltcG9ydCBSaWdodCBmcm9tICcuL2ZhY2VzL1JpZ2h0JztcbmltcG9ydCBCb3R0b20gZnJvbSAnLi9mYWNlcy9Cb3R0b20nO1xuXG5pbXBvcnQgc21vb3RoIGZyb20gJy4vc21vb3RoJztcbmltcG9ydCBGYWNlc0NvbnRyb2xsZXIgZnJvbSAnLi9GYWNlc0NvbnRyb2xsZXInO1xuaW1wb3J0IE1vdXNlTWFuYWdlciBmcm9tICcuL01vdXNlTWFuYWdlcic7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcnMvU291bmRNYW5hZ2VyJztcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXInO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5cbmNvbnN0IGdsc2xpZnkgPSByZXF1aXJlKCdnbHNsaWZ5Jyk7XG5cbmNsYXNzIEFwcCB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gMHgwMDAwMDA7XG5cdFx0XG5cdFx0Ly8gdGhpcy5ndWkgPSB3aW5kb3cuZ3VpID0gbmV3IGRhdC5HVUkoKTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIgPSBuZXcgRmFjZXNDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuZmFjZXNDb250YWluZXIgPSB0aGlzLmZhY2VzQ29udHJvbGxlci5jb250YWluZXI7XG4gICAgICAgIHRoaXMudWkgPSBuZXcgVUkoKTtcblxuICAgICAgICBNb3VzZU1hbmFnZXIuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlciA9IG5ldyBTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRDb250cm9sbGVyKCk7XG5cdFx0XHRcblx0XHR0aGlzLnJlc2l6ZSA9IDo6dGhpcy5yZXNpemU7XG5cdFx0dGhpcy51cGRhdGUgPSA6OnRoaXMudXBkYXRlO1xuICAgICAgICB0aGlzLm9uU3RhcnQgPSA6OnRoaXMub25TdGFydDtcbiAgICAgICAgdGhpcy5vblVJSGlkZGVuID0gOjp0aGlzLm9uVUlIaWRkZW47XG4gICAgICAgIHRoaXMub25Tb3VuZEVuZCA9IDo6dGhpcy5vblNvdW5kRW5kO1xuICAgICAgICB0aGlzLnJlc2V0ID0gOjp0aGlzLnJlc2V0O1xuXHRcdFxuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuYmluZExpc3RlbmVycygpO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXMsIGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IGZhbHNlIH0pO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdC8vIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNvZnRTaGFkb3dNYXA7XG5cdFx0XG5cdFx0V0FHTkVSLnZlcnRleFNoYWRlcnNQYXRoID0gJ2pzL3ZlcnRleC1zaGFkZXJzJztcblx0XHRXQUdORVIuZnJhZ21lbnRTaGFkZXJzUGF0aCA9ICdqcy9mcmFnbWVudC1zaGFkZXJzJztcblxuXHRcdHRoaXMuY29tcG9zZXIgPSBuZXcgV0FHTkVSLkNvbXBvc2VyKHRoaXMucmVuZGVyZXIpO1xuXHRcdHRoaXMuY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuXHRcdGNvbnN0IGJsb29tV2lkdGggPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcbiAgICAgICAgY29uc3QgYmxvb21IZWlnaHQgPSB3aW5kb3cuaXNUb3VjaCA/IDI1NiA6IDUxMjtcblxuXHRcdHRoaXMuYmxvb21QYXNzID0gbmV3IFdBR05FUi5NdWx0aVBhc3NCbG9vbVBhc3MoYmxvb21XaWR0aCwgYmxvb21IZWlnaHQpO1xuXHRcdHRoaXMuYmxvb21QYXNzLnBhcmFtcy5zdHJlbmd0aCA9IDUwLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5ibHVyQW1vdW50ID0gNS47XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy5hcHBseVpvb21CbHVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ibG9vbVBhc3MucGFyYW1zLnpvb21CbHVyU3RyZW5ndGggPSAzLjA7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy56b29tQmx1ckNlbnRlciA9IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjUsIDAuNSApO1xuXG4gICAgICAgIHRoaXMucmdiUGFzcyA9IG5ldyBXQUdORVIuUkdCU3BsaXRQYXNzKCk7XG4gICAgICAgIHRoaXMucmdiUGFzcy5wYXJhbXMuZGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigyMCwgMjApO1xuXG4gICAgICAgIHRoaXMubm9pc2VQYXNzID0gbmV3IFdBR05FUi5Ob2lzZVBhc3MoKTtcbiAgICAgICAgdGhpcy5ub2lzZVBhc3MucGFyYW1zLmFtb3VudCA9IDAuMjU7XG4gICAgICAgIHRoaXMubm9pc2VQYXNzLnBhcmFtcy5zcGVlZCA9IDAuMjtcblxuICAgICAgICB0aGlzLnZpZ25ldHRlUGFzcyA9IG5ldyBXQUdORVIuVmlnbmV0dGVQYXNzKCk7XG4gICAgICAgIHRoaXMudmlnbmV0dGVQYXNzLnBhcmFtcy5hbW91bnQgPSAwLjc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZ4YWFQYXNzID0gbmV3IFdBR05FUi5GWEFBUGFzcygpO1xuXG5cdFx0dGhpcy53aWR0aCA9IHdpbmRvdy53aWR0aCA9IDYwO1xuXHRcdHRoaXMuaGVpZ2h0ID0gd2luZG93LmhlaWdodCA9IDYwO1xuXHRcdHRoaXMubGVuZ3RoID0gd2luZG93Lmxlbmd0aCA9IDYwMDtcblxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwMDAwMCwgMC44LCB0aGlzLmxlbmd0aCAqIC45OCApO1xuXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMzAwMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAwO1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcblxuXG4gICAgICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5hZGRMaWdodHMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgXHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0YmluZExpc3RlbmVycyAoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uVUlIaWRkZW4pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5FTkQsIHRoaXMucmVzZXQpO1xuXHR9XG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHdpbmRvdy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuc291bmRFbmRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHdpbmRvdy51aUhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25VSUhpZGRlbiAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uU291bmRFbmQgKCBkYXRhICkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKCBuYW1lID09PSAneHAnICkge1xuICAgICAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cdGFkZENvbnRyb2xzICgpIHtcblx0XHRjb25zdCBPcmJpdENvbnRyb2xzID0gcmVxdWlyZSgndGhyZWUtb3JiaXQtY29udHJvbHMnKShUSFJFRSk7XG5cdFx0Ly8gdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0fVxuXG5cdGFkZExpZ2h0cyAoKSB7XG5cdFx0dGhpcy5saWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhGRkZGRkYpO1xuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gIFx0XHRjb25zdCBwb2ludExpZ2h0MyA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweGZmZmZmZiwgNy4xLCAwKTtcbiAgXHRcdHBvaW50TGlnaHQzLnBvc2l0aW9uLnggPSAwXG4gIFx0XHRwb2ludExpZ2h0My5wb3NpdGlvbi55ID0gNDtcbiAgXHRcdHBvaW50TGlnaHQzLnBvc2l0aW9uLnogPSA2MDtcblxuICBcdFx0dGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDMpO1xuXHR9XG5cblx0YWRkRWxlbWVudHMgKCkge1xuXHRcdHRoaXMuZGl2aXNhdG9yID0gMjtcblxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy5sZW5ndGgsIHRoaXMud2lkdGgsIDMyLCAzMik7XG4gICAgICAgIHRoaXMub3RoZXJHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMubGVuZ3RoLCAzMiwgMzIpO1xuXG5cdFx0dGhpcy5sZWZ0UmlnaHRHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMubGVuZ3RoLCB0aGlzLmhlaWdodCwgTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIHRoaXMuZGl2aXNhdG9yKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuZGl2aXNhdG9yKSApO1xuXHRcdHRoaXMudG9wQm90dG9tR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmxlbmd0aCwgTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5kaXZpc2F0b3IpICwgTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIHRoaXMuZGl2aXNhdG9yKSk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5kaXZpc2F0b3IgKiAyKSwgTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuZGl2aXNhdG9yICogMikgKTtcblxuXHRcdHRoaXMubGVmdCA9IG5ldyBMZWZ0KHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLmxlZnQucm90YXRpb24ueSA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5sZWZ0LnBvc2l0aW9uLnggPSAtdGhpcy53aWR0aCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2xlZnQnLCB0aGlzLmxlZnQpXG5cblx0XHR0aGlzLnJpZ2h0ID0gbmV3IFJpZ2h0KHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLnJpZ2h0LnJvdGF0aW9uLnkgPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMucmlnaHQucG9zaXRpb24ueCA9IHRoaXMud2lkdGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdyaWdodCcsIHRoaXMucmlnaHQpXG5cblx0XHR0aGlzLmJvdHRvbSA9IG5ldyBCb3R0b20odGhpcy5nZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdHRoaXMuYm90dG9tLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgdGhpcy5ib3R0b20ucm90YXRpb24ueiA9IE1hdGguUEkgKiAwLjU7XG5cdFx0dGhpcy5ib3R0b20ucG9zaXRpb24ueSA9IC10aGlzLmhlaWdodCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ2JvdHRvbScsIHRoaXMuYm90dG9tKVxuXG5cdFx0dGhpcy50b3AgPSBuZXcgVG9wKHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLnRvcC5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjU7XG4gICAgICAgIHRoaXMudG9wLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMudG9wLnBvc2l0aW9uLnkgPSB0aGlzLmhlaWdodCAqIDAuNTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIucmVnaXN0ZXIoJ3RvcCcsIHRoaXMudG9wKTtcblxuXHRcdC8vIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMuYmFja2dyb3VuZEdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0Ly8gdGhpcy5iYWNrZ3JvdW5kLnBvc2l0aW9uLnogPSAtdGhpcy5sZW5ndGggKiAwLjU7XG4gIC8vICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdiYWNrZ3JvdW5kJywgdGhpcy5iYWNrZ3JvdW5kKTtcblxuXHRcdHRoaXMuZmFjZXNDb250cm9sbGVyLmNvbnRhaW5lci5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5mYWNlc0NvbnRyb2xsZXIuY29udGFpbmVyKTtcblx0fVxuXG4gICAgcm90YXRlICgpIHtcbiAgICAgICAgY29uc3Qgc2VucyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgIH1cblxuXHR1cGRhdGUgKCkge1xuICAgICAgICB0aGlzLnVpLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5mYWNlc0NvbnRyb2xsZXIudXBkYXRlKCk7XG5cblx0XHR0aGlzLmNvbXBvc2VyLnJlc2V0KCk7XG5cdFx0dGhpcy5jb21wb3Nlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy5ibG9vbVBhc3MpO1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnBhc3ModGhpcy5yZ2JQYXNzKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMubm9pc2VQYXNzKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMudmlnbmV0dGVQYXNzKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci50b1NjcmVlbih0aGlzLmZ4YWFQYXNzKTtcblxuXHRcdC8vIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblxuXHRcdHJhZih0aGlzLnVwZGF0ZSk7XG5cdH1cblxuXHRyZXNpemUgKCkge1xuXHRcdHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuXHR9XG5cbn1cblxubmV3IEFwcCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vTWFpbi5qcyIsImltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcblxuY2xhc3MgUmFuZ2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBuYW1lLCBmcmVxcywgZGVsdGEsIGV2ZW50LCBtaW5MZXZlbCA9IDAuNSApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5mcmVxcyA9IGZyZXFzO1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgICAgIHRoaXMubWluTGV2ZWwgPSBtaW5MZXZlbDtcblxuICAgICAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoIGxldmVsICkge1xuICAgICAgICBjb25zdCBkZWx0YSA9IERhdGUubm93KCkgLSB0aGlzLnRpbWU7XG5cbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuXG4gICAgICAgIGlmICggZGVsdGEgPiB0aGlzLmRlbHRhICYmIHRoaXMubGV2ZWwgPiB0aGlzLm1pbkxldmVsICkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KHRoaXMuZXZlbnQpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIHRoaXMubmFtZSA9PT0gJ2hpZ2hLaWNrJyApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGV2ZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIGxldCB0aW1lb3V0XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpLCB3YWl0KVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9kZWJvdW5jZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGx1Y2t5ICggY2hhbmNlcyApIHtcbiAgICByZXR1cm4gIX5+KE1hdGgucmFuZG9tKCkgKiBjaGFuY2VzKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL2x1Y2t5LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tRnJvbUFycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W35+KE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3V0aWxzL3JhbmRvbUZyb21BcnJheS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF1ZGlvL21pZGlcIjogW1xuXHRcdFwibWlkXCIsXG5cdFx0XCJtaWRpXCIsXG5cdFx0XCJrYXJcIixcblx0XHRcInJtaVwiXG5cdF0sXG5cdFwiYXVkaW8vbXA0XCI6IFtcblx0XHRcIm1wNGFcIixcblx0XHRcIm00YVwiXG5cdF0sXG5cdFwiYXVkaW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGdhXCIsXG5cdFx0XCJtcDJcIixcblx0XHRcIm1wMmFcIixcblx0XHRcIm1wM1wiLFxuXHRcdFwibTJhXCIsXG5cdFx0XCJtM2FcIlxuXHRdLFxuXHRcImF1ZGlvL29nZ1wiOiBbXG5cdFx0XCJvZ2FcIixcblx0XHRcIm9nZ1wiLFxuXHRcdFwic3B4XCJcblx0XSxcblx0XCJhdWRpby93ZWJtXCI6IFtcblx0XHRcIndlYmFcIlxuXHRdLFxuXHRcImF1ZGlvL3gtbWF0cm9za2FcIjogW1xuXHRcdFwibWthXCJcblx0XSxcblx0XCJhdWRpby94LW1wZWd1cmxcIjogW1xuXHRcdFwibTN1XCJcblx0XSxcblx0XCJhdWRpby93YXZcIjogW1xuXHRcdFwid2F2XCJcblx0XSxcblx0XCJ2aWRlby8zZ3BwXCI6IFtcblx0XHRcIjNncFwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcDJcIjogW1xuXHRcdFwiM2cyXCJcblx0XSxcblx0XCJ2aWRlby9tcDRcIjogW1xuXHRcdFwibXA0XCIsXG5cdFx0XCJtcDR2XCIsXG5cdFx0XCJtcGc0XCJcblx0XSxcblx0XCJ2aWRlby9tcGVnXCI6IFtcblx0XHRcIm1wZWdcIixcblx0XHRcIm1wZ1wiLFxuXHRcdFwibXBlXCIsXG5cdFx0XCJtMXZcIixcblx0XHRcIm0ydlwiXG5cdF0sXG5cdFwidmlkZW8vb2dnXCI6IFtcblx0XHRcIm9ndlwiXG5cdF0sXG5cdFwidmlkZW8vcXVpY2t0aW1lXCI6IFtcblx0XHRcInF0XCIsXG5cdFx0XCJtb3ZcIlxuXHRdLFxuXHRcInZpZGVvL3dlYm1cIjogW1xuXHRcdFwid2VibVwiXG5cdF0sXG5cdFwidmlkZW8veC1mNHZcIjogW1xuXHRcdFwiZjR2XCJcblx0XSxcblx0XCJ2aWRlby94LWZsaVwiOiBbXG5cdFx0XCJmbGlcIlxuXHRdLFxuXHRcInZpZGVvL3gtZmx2XCI6IFtcblx0XHRcImZsdlwiXG5cdF0sXG5cdFwidmlkZW8veC1tNHZcIjogW1xuXHRcdFwibTR2XCJcblx0XSxcblx0XCJ2aWRlby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rdlwiLFxuXHRcdFwibWszZFwiLFxuXHRcdFwibWtzXCJcblx0XVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvbWltZS10eXBlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYW1wXG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gbWluIDwgbWF4XG4gICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgIDogKHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFtcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpcy1mdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaFxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oaXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzXG4gICAgfVxuICAgIFxuICAgIGlmICh0b1N0cmluZy5jYWxsKGxpc3QpID09PSAnW29iamVjdCBBcnJheV0nKVxuICAgICAgICBmb3JFYWNoQXJyYXkobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG4gICAgZWxzZSBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKVxuICAgICAgICBmb3JFYWNoU3RyaW5nKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2VcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbn1cblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoU3RyaW5nKHN0cmluZywgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vIG5vIHN1Y2ggdGhpbmcgYXMgYSBzcGFyc2Ugc3RyaW5nLlxuICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHN0cmluZy5jaGFyQXQoaSksIGksIHN0cmluZylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hPYmplY3Qob2JqZWN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgaykpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqZWN0W2tdLCBrLCBvYmplY3QpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9yLWVhY2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsb2JhbC93aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gaXNOb2RlXG5cbmZ1bmN0aW9uIGlzTm9kZSAodmFsKSB7XG4gIHJldHVybiAoIXZhbCB8fCB0eXBlb2YgdmFsICE9PSAnb2JqZWN0JylcbiAgICA/IGZhbHNlXG4gICAgOiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5Ob2RlID09PSAnb2JqZWN0JylcbiAgICAgID8gKHZhbCBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlKVxuICAgICAgOiAodHlwZW9mIHZhbC5ub2RlVHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICh0eXBlb2YgdmFsLm5vZGVOYW1lID09PSAnc3RyaW5nJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kb20vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbiAgLCBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvckVhY2goXG4gICAgICB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgICAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgICAgICB9XG4gICAgICB9XG4gIClcblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPVxuICBnbG9iYWwucGVyZm9ybWFuY2UgJiZcbiAgZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdyA/IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KClcbiAgfSA6IERhdGUubm93IHx8IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gK25ldyBEYXRlXG4gIH1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaWdodC1ub3cvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRG9tID0gcmVxdWlyZSgnaXMtZG9tJylcbnZhciBsb29rdXAgPSByZXF1aXJlKCdicm93c2VyLW1lZGlhLW1pbWUtdHlwZScpXG5cbm1vZHVsZS5leHBvcnRzLnZpZGVvID0gc2ltcGxlTWVkaWFFbGVtZW50LmJpbmQobnVsbCwgJ3ZpZGVvJylcbm1vZHVsZS5leHBvcnRzLmF1ZGlvID0gc2ltcGxlTWVkaWFFbGVtZW50LmJpbmQobnVsbCwgJ2F1ZGlvJylcblxuZnVuY3Rpb24gc2ltcGxlTWVkaWFFbGVtZW50IChlbGVtZW50TmFtZSwgc291cmNlcywgb3B0KSB7XG4gIG9wdCA9IG9wdCB8fCB7fVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkge1xuICAgIHNvdXJjZXMgPSBbIHNvdXJjZXMgXVxuICB9XG5cbiAgdmFyIG1lZGlhID0gb3B0LmVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSlcblxuICBpZiAob3B0Lmxvb3ApIG1lZGlhLnNldEF0dHJpYnV0ZSgnbG9vcCcsICdsb29wJylcbiAgaWYgKG9wdC5tdXRlZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdtdXRlZCcsICdtdXRlZCcpXG4gIGlmIChvcHQuYXV0b3BsYXkpIG1lZGlhLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnYXV0b3BsYXknKVxuICBpZiAob3B0LmNvbnRyb2xzKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJylcbiAgaWYgKG9wdC5jcm9zc09yaWdpbikgbWVkaWEuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsIG9wdC5jcm9zc09yaWdpbilcbiAgaWYgKG9wdC5wcmVsb2FkKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCBvcHQucHJlbG9hZClcbiAgaWYgKG9wdC5wb3N0ZXIpIG1lZGlhLnNldEF0dHJpYnV0ZSgncG9zdGVyJywgb3B0LnBvc3RlcilcbiAgaWYgKHR5cGVvZiBvcHQudm9sdW1lICE9PSAndW5kZWZpbmVkJykgbWVkaWEuc2V0QXR0cmlidXRlKCd2b2x1bWUnLCBvcHQudm9sdW1lKVxuXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIG1lZGlhLmFwcGVuZENoaWxkKGNyZWF0ZVNvdXJjZUVsZW1lbnQoc291cmNlKSlcbiAgfSlcblxuICByZXR1cm4gbWVkaWFcbn1cblxuZnVuY3Rpb24gY3JlYXRlU291cmNlRWxlbWVudCAoZGF0YSkge1xuICBpZiAoaXNEb20oZGF0YSkpIHJldHVybiBkYXRhXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhID0geyBzcmM6IGRhdGEgfVxuICAgIGlmIChkYXRhLnNyYykge1xuICAgICAgdmFyIGV4dCA9IGV4dGVuc2lvbihkYXRhLnNyYylcbiAgICAgIGlmIChleHQpIGRhdGEudHlwZSA9IGxvb2t1cChleHQpXG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpXG4gIGlmIChkYXRhLnNyYykgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YS5zcmMpXG4gIGlmIChkYXRhLnR5cGUpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpXG4gIHJldHVybiBzb3VyY2Vcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uIChkYXRhKSB7XG4gIHZhciBleHRJZHggPSBkYXRhLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGV4dElkeCA8PSAwIHx8IGV4dElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoZXh0SWR4ICsgMSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaW1wbGUtbWVkaWEtZWxlbWVudC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RyaW0vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJBdWRpb0FuYWx5c2VyXG5cbmZ1bmN0aW9uIFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgV2ViQXVkaW9BbmFseXNlcikpIHJldHVybiBuZXcgV2ViQXVkaW9BbmFseXNlcihhdWRpbywgY3R4LCBvcHRzKVxuICBpZiAoIShjdHggaW5zdGFuY2VvZiBBdWRpb0NvbnRleHQpKSAob3B0cyA9IGN0eCksIChjdHggPSBudWxsKVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIHRoaXMuY3R4ID0gY3R4ID0gY3R4IHx8IG5ldyBBdWRpb0NvbnRleHRcblxuICBpZiAoIShhdWRpbyBpbnN0YW5jZW9mIEF1ZGlvTm9kZSkpIHtcbiAgICBhdWRpbyA9IChhdWRpbyBpbnN0YW5jZW9mIEF1ZGlvIHx8IGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudClcbiAgICAgID8gY3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgICAgIDogY3R4LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKGF1ZGlvKVxuICB9XG5cbiAgdGhpcy5hbmFseXNlciA9IGN0eC5jcmVhdGVBbmFseXNlcigpXG4gIHRoaXMuc3RlcmVvICAgPSAhIW9wdHMuc3RlcmVvXG4gIHRoaXMuYXVkaWJsZSAgPSBvcHRzLmF1ZGlibGUgIT09IGZhbHNlXG4gIHRoaXMud2F2ZWRhdGEgPSBudWxsXG4gIHRoaXMuZnJlcWRhdGEgPSBudWxsXG4gIHRoaXMuc3BsaXR0ZXIgPSBudWxsXG4gIHRoaXMubWVyZ2VyICAgPSBudWxsXG4gIHRoaXMuc291cmNlICAgPSBhdWRpb1xuXG4gIGlmICghdGhpcy5zdGVyZW8pIHtcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuc291cmNlXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmFuYWx5c2VyKVxuICAgIGlmICh0aGlzLmF1ZGlibGUpXG4gICAgICB0aGlzLmFuYWx5c2VyLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuYW5hbHlzZXIgPSBbdGhpcy5hbmFseXNlcl1cbiAgICB0aGlzLmFuYWx5c2VyLnB1c2goY3R4LmNyZWF0ZUFuYWx5c2VyKCkpXG5cbiAgICB0aGlzLnNwbGl0dGVyID0gY3R4LmNyZWF0ZUNoYW5uZWxTcGxpdHRlcigyKVxuICAgIHRoaXMubWVyZ2VyICAgPSBjdHguY3JlYXRlQ2hhbm5lbE1lcmdlcigyKVxuICAgIHRoaXMub3V0cHV0ICAgPSB0aGlzLm1lcmdlclxuXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLnNwbGl0dGVyKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMuc3BsaXR0ZXIuY29ubmVjdCh0aGlzLmFuYWx5c2VyW2ldLCBpLCAwKVxuICAgICAgdGhpcy5hbmFseXNlcltpXS5jb25uZWN0KHRoaXMubWVyZ2VyLCAwLCBpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1ZGlibGUpXG4gICAgICB0aGlzLm1lcmdlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfVxufVxuXG5XZWJBdWRpb0FuYWx5c2VyLnByb3RvdHlwZS53YXZlZm9ybSA9IGZ1bmN0aW9uKG91dHB1dCwgY2hhbm5lbCkge1xuICBpZiAoIW91dHB1dCkgb3V0cHV0ID0gdGhpcy53YXZlZGF0YSB8fCAoXG4gICAgdGhpcy53YXZlZGF0YSA9IG5ldyBVaW50OEFycmF5KCh0aGlzLmFuYWx5c2VyWzBdIHx8IHRoaXMuYW5hbHlzZXIpLmZyZXF1ZW5jeUJpbkNvdW50KVxuICApXG5cbiAgdmFyIGFuYWx5c2VyID0gdGhpcy5zdGVyZW9cbiAgICA/IHRoaXMuYW5hbHlzZXJbY2hhbm5lbCB8fCAwXVxuICAgIDogdGhpcy5hbmFseXNlclxuXG4gIGFuYWx5c2VyLmdldEJ5dGVUaW1lRG9tYWluRGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5XZWJBdWRpb0FuYWx5c2VyLnByb3RvdHlwZS5mcmVxdWVuY2llcyA9IGZ1bmN0aW9uKG91dHB1dCwgY2hhbm5lbCkge1xuICBpZiAoIW91dHB1dCkgb3V0cHV0ID0gdGhpcy5mcmVxZGF0YSB8fCAoXG4gICAgdGhpcy5mcmVxZGF0YSA9IG5ldyBVaW50OEFycmF5KCh0aGlzLmFuYWx5c2VyWzBdIHx8IHRoaXMuYW5hbHlzZXIpLmZyZXF1ZW5jeUJpbkNvdW50KVxuICApXG5cbiAgdmFyIGFuYWx5c2VyID0gdGhpcy5zdGVyZW9cbiAgICA/IHRoaXMuYW5hbHlzZXJbY2hhbm5lbCB8fCAwXVxuICAgIDogdGhpcy5hbmFseXNlclxuXG4gIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKG91dHB1dClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLWFuYWx5c2VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYnVmZmVyID0gcmVxdWlyZSgnLi9saWIvYnVmZmVyLXNvdXJjZScpXG52YXIgbWVkaWEgPSByZXF1aXJlKCcuL2xpYi9tZWRpYS1zb3VyY2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdlYkF1ZGlvUGxheWVyXG5mdW5jdGlvbiB3ZWJBdWRpb1BsYXllciAoc3JjLCBvcHQpIHtcbiAgaWYgKCFzcmMpIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3BlY2lmeSBhIHNyYyBwYXJhbWV0ZXInKVxuICBvcHQgPSBvcHQgfHwge31cbiAgaWYgKG9wdC5idWZmZXIpIHJldHVybiBidWZmZXIoc3JjLCBvcHQpXG4gIGVsc2UgcmV0dXJuIG1lZGlhKHNyYywgb3B0KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjYW5QbGF5U3JjID0gcmVxdWlyZSgnLi9jYW4tcGxheS1zcmMnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgeGhyQXVkaW8gPSByZXF1aXJlKCcuL3hoci1hdWRpbycpXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG52YXIgcmlnaHROb3cgPSByZXF1aXJlKCdyaWdodC1ub3cnKVxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJ1ZmZlclNvdXJjZVxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG5cbiAgLy8gYSBwYXNzLXRocm91Z2ggbm9kZSBzbyB1c2VyIGp1c3QgbmVlZHMgdG9cbiAgLy8gY29ubmVjdCgpIG9uY2VcbiAgdmFyIGJ1ZmZlck5vZGUsIGJ1ZmZlciwgZHVyYXRpb25cbiAgdmFyIG5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG4gIHZhciBhdWRpb1N0YXJ0VGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvUGF1c2VUaW1lID0gbnVsbFxuICB2YXIgYXVkaW9DdXJyZW50VGltZSA9IDBcbiAgdmFyIHBsYXlpbmcgPSBmYWxzZVxuICB2YXIgbG9vcCA9IG9wdC5sb29wXG5cbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gdHJ1ZVxuXG4gICAgaWYgKG9wdC5hdXRvUmVzdW1lICE9PSBmYWxzZSkgcmVzdW1lKGVtaXR0ZXIuY29udGV4dClcbiAgICBkaXNwb3NlQnVmZmVyKClcbiAgICBidWZmZXJOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gICAgYnVmZmVyTm9kZS5jb25uZWN0KGVtaXR0ZXIubm9kZSlcbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBlbmRlZFxuICAgIGlmIChidWZmZXIpIHtcbiAgICAgIC8vIE1pZ2h0IGJlIG51bGwgdW5kZWZpbmVkIGlmIHdlIGFyZSBzdGlsbCBsb2FkaW5nXG4gICAgICBidWZmZXJOb2RlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgIH1cbiAgICBpZiAobG9vcCkge1xuICAgICAgYnVmZmVyTm9kZS5sb29wID0gdHJ1ZVxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcFN0YXJ0ID09PSAnbnVtYmVyJykgYnVmZmVyTm9kZS5sb29wU3RhcnQgPSBvcHQubG9vcFN0YXJ0XG4gICAgICBpZiAodHlwZW9mIG9wdC5sb29wRW5kID09PSAnbnVtYmVyJykgYnVmZmVyTm9kZS5sb29wRW5kID0gb3B0Lmxvb3BFbmRcbiAgICB9XG5cbiAgICBpZiAoZHVyYXRpb24gJiYgYXVkaW9DdXJyZW50VGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAvLyBmb3Igd2hlbiBpdCBsb29wcy4uLlxuICAgICAgYXVkaW9DdXJyZW50VGltZSA9IGF1ZGlvQ3VycmVudFRpbWUgJSBkdXJhdGlvblxuICAgIH1cbiAgICB2YXIgbmV4dFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lXG5cbiAgICBidWZmZXJOb2RlLnN0YXJ0KDAsIG5leHRUaW1lKVxuICAgIGF1ZGlvU3RhcnRUaW1lID0gcmlnaHROb3coKVxuICB9XG5cbiAgZW1pdHRlci5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBsYXlpbmcpIHJldHVyblxuICAgIHBsYXlpbmcgPSBmYWxzZVxuICAgIC8vIERvbid0IGxldCB0aGUgXCJlbmRcIiBldmVudFxuICAgIC8vIGdldCB0cmlnZ2VyZWQgb24gbWFudWFsIHBhdXNlLlxuICAgIGJ1ZmZlck5vZGUub25lbmRlZCA9IG51bGxcbiAgICBidWZmZXJOb2RlLnN0b3AoMClcbiAgICBhdWRpb1BhdXNlVGltZSA9IHJpZ2h0Tm93KClcbiAgICBhdWRpb0N1cnJlbnRUaW1lICs9IChhdWRpb1BhdXNlVGltZSAtIGF1ZGlvU3RhcnRUaW1lKSAvIDEwMDBcbiAgfVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLnBhdXNlKClcbiAgICBlbmRlZCgpXG4gIH1cblxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlpbmc6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGxheWluZ1xuICAgICAgfVxuICAgIH0sXG4gICAgYnVmZmVyOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclxuICAgICAgfVxuICAgIH0sXG4gICAgdm9sdW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2Fpbi52YWx1ZVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBzZXQgaW5pdGlhbCB2b2x1bWVcbiAgaWYgKHR5cGVvZiBvcHQudm9sdW1lID09PSAnbnVtYmVyJykge1xuICAgIGVtaXR0ZXIudm9sdW1lID0gb3B0LnZvbHVtZVxuICB9XG5cbiAgLy8gZmlsdGVyIGRvd24gdG8gYSBsaXN0IG9mIHBsYXlhYmxlIHNvdXJjZXNcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgdmFyIHNvdXJjZSA9IHNvdXJjZXMuZmlsdGVyKGNhblBsYXlTcmMpWzBdXG4gICAgLy8gU3VwcG9ydCB0aGUgc2FtZSBzb3VyY2UgdHlwZXMgYXMgaW5cbiAgICAvLyBNZWRpYUVsZW1lbnQgbW9kZS4uLlxuICAgIGlmICh0eXBlb2Ygc291cmNlLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc291cmNlID0gc291cmNlLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2Uuc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgc291cmNlID0gc291cmNlLnNyY1xuICAgIH1cbiAgICAvLyBXZSBoYXZlIGF0IGxlYXN0IG9uZSBwbGF5YWJsZSBzb3VyY2UuXG4gICAgLy8gRm9yIG5vdyBqdXN0IHBsYXkgdGhlIGZpcnN0LFxuICAgIC8vIGlkZWFsbHkgdGhpcyBtb2R1bGUgY291bGQgYXR0ZW1wdCBlYWNoIG9uZS5cbiAgICBzdGFydExvYWQoc291cmNlKVxuICB9IGVsc2Uge1xuICAgIC8vIG5vIHNvdXJjZXMgY2FuIGJlIHBsYXllZC4uLlxuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIGNhblBsYXlTcmMuY3JlYXRlRXJyb3Ioc291cmNlcykpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoc3JjKSB7XG4gICAgeGhyQXVkaW8oYXVkaW9Db250ZXh0LCBzcmMsIGZ1bmN0aW9uIGF1ZGlvRGVjb2RlZCAoZXJyLCBkZWNvZGVkKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gZW1pdHRlci5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIGJ1ZmZlciA9IGRlY29kZWQgLy8gc3RvcmUgZm9yIGxhdGVyIHVzZVxuICAgICAgaWYgKGJ1ZmZlck5vZGUpIHtcbiAgICAgICAgLy8gaWYgcGxheSgpIHdhcyBjYWxsZWQgZWFybHlcbiAgICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIH1cbiAgICAgIGR1cmF0aW9uID0gYnVmZmVyLmR1cmF0aW9uXG4gICAgICBub2RlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9LCBmdW5jdGlvbiBhdWRpb1Byb2dyZXNzIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ3Byb2dyZXNzJywgYW1vdW50LCB0b3RhbClcbiAgICB9LCBmdW5jdGlvbiBhdWRpb0RlY29kaW5nICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZGVjb2RpbmcnKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBlbmRlZCAoKSB7XG4gICAgZW1pdHRlci5lbWl0KCdlbmQnKVxuICAgIHBsYXlpbmcgPSBmYWxzZVxuICAgIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwb3NlQnVmZmVyICgpIHtcbiAgICBpZiAoYnVmZmVyTm9kZSkgYnVmZmVyTm9kZS5kaXNjb25uZWN0KClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2J1ZmZlci1zb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gYWRkT25jZVxuZnVuY3Rpb24gYWRkT25jZSAoZWxlbWVudCwgZXZlbnQsIGZuKSB7XG4gIGZ1bmN0aW9uIHRtcCAoZXYpIHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRtcCwgZmFsc2UpXG4gICAgZm4oZXYsIGVsZW1lbnQpXG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9ldmVudC1hZGQtb25jZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIGNyZWF0ZUF1ZGlvID0gcmVxdWlyZSgnc2ltcGxlLW1lZGlhLWVsZW1lbnQnKS5hdWRpb1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG52YXIgcmVzdW1lID0gcmVxdWlyZSgnLi9yZXN1bWUtY29udGV4dCcpXG52YXIgY3JlYXRlQXVkaW9Db250ZXh0ID0gcmVxdWlyZSgnLi9hdWRpby1jb250ZXh0JylcbnZhciBjYW5QbGF5U3JjID0gcmVxdWlyZSgnLi9jYW4tcGxheS1zcmMnKVxudmFyIGFkZE9uY2UgPSByZXF1aXJlKCcuL2V2ZW50LWFkZC1vbmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVNZWRpYVNvdXJjZVxuZnVuY3Rpb24gY3JlYXRlTWVkaWFTb3VyY2UgKHNyYywgb3B0KSB7XG4gIG9wdCA9IGFzc2lnbih7fSwgb3B0KVxuICB2YXIgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8vIERlZmF1bHQgdG8gQXVkaW8gaW5zdGVhZCBvZiBIVE1MQXVkaW9FbGVtZW50XG4gIC8vIFRoZXJlIGlzIG5vdCBtdWNoIGRpZmZlcmVuY2UgZXhjZXB0IGluIHRoZSBmb2xsb3dpbmc6XG4gIC8vICAgIHggaW5zdGFuY2VvZiBBdWRpb1xuICAvLyAgICB4IGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBBbmQgaW4gbXkgZXhwZXJpZW5jZSBBdWRpbyBoYXMgYmV0dGVyIHN1cHBvcnQgb24gdmFyaW91c1xuICAvLyBwbGF0Zm9ybXMgbGlrZSBDb2Nvb25KUy5cbiAgLy8gUGxlYXNlIG9wZW4gYW4gaXNzdWUgaWYgdGhlcmUgaXMgYSBjb25jZXJuIHdpdGggdGhpcy5cbiAgaWYgKCFvcHQuZWxlbWVudCkgb3B0LmVsZW1lbnQgPSBuZXcgd2luZG93LkF1ZGlvKClcblxuICB2YXIgZGVzaXJlZFZvbHVtZSA9IG9wdC52b2x1bWVcbiAgZGVsZXRlIG9wdC52b2x1bWUgLy8gbWFrZSBzdXJlIDxhdWRpbz4gdGFnIHJlY2VpdmVzIGZ1bGwgdm9sdW1lXG4gIHZhciBhdWRpbyA9IGNyZWF0ZUF1ZGlvKHNyYywgb3B0KVxuICB2YXIgYXVkaW9Db250ZXh0ID0gb3B0LmNvbnRleHQgfHwgY3JlYXRlQXVkaW9Db250ZXh0KClcbiAgdmFyIG5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG4gIHZhciBtZWRpYU5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKVxuICBtZWRpYU5vZGUuY29ubmVjdChub2RlKVxuXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgfSlcbiAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBMQVlcIilcbiAgfSlcblxuICB2YXIgbG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICB2YXIgbG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gIHZhciBoYXNMb29wU3RhcnQgPSB0eXBlb2YgbG9vcFN0YXJ0ID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wU3RhcnQpXG4gIHZhciBoYXNMb29wRW5kID0gdHlwZW9mIGxvb3BFbmQgPT09ICdudW1iZXInICYmIGlzRmluaXRlKGxvb3BFbmQpXG4gIHZhciBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gIGlmIChoYXNMb29wU3RhcnQgfHwgaGFzTG9vcEVuZCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgICAgIC8vIGF1ZGlvIGhhc24ndCBiZWVuIGxvYWRlZCB5ZXQuLi5cbiAgICAgIGlmICh0eXBlb2YgYXVkaW8uZHVyYXRpb24gIT09ICdudW1iZXInKSByZXR1cm5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGF1ZGlvLmN1cnJlbnRUaW1lXG5cbiAgICAgIC8vIHdoZXJlIHRvIGVuZCB0aGUgYnVmZmVyXG4gICAgICB2YXIgZW5kVGltZSA9IGhhc0xvb3BFbmQgPyBNYXRoLm1pbihhdWRpby5kdXJhdGlvbiwgbG9vcEVuZCkgOiBhdWRpby5kdXJhdGlvblxuXG4gICAgICBpZiAoY3VycmVudFRpbWUgPiAobG9vcFN0YXJ0IHx8IDApKSB7XG4gICAgICAgIGlzTG9vcFJlYWR5ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBqdW1wIGFoZWFkIHRvIGxvb3Agc3RhcnQgcG9pbnRcbiAgICAgIGlmIChoYXNMb29wU3RhcnQgJiYgaXNMb29wUmVhZHkgJiYgY3VycmVudFRpbWUgPCBsb29wU3RhcnQpIHtcbiAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSBsb29wU3RhcnRcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UndmUgaGl0IHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICAgICAgaWYgKGN1cnJlbnRUaW1lID49IGVuZFRpbWUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gbG9vcCBlbmQgcG9pbnQsIGxldCBuYXRpdmUgbG9vcGluZyB0YWtlIG92ZXJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIGxvb3AgZW5kIHBvaW50LCBqdW1wIGJhY2sgdG8gc3RhcnQgcG9pbnQgb3IgemVyb1xuICAgICAgICBpZiAoaGFzTG9vcEVuZCkge1xuICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gaGFzTG9vcFN0YXJ0ID8gbG9vcFN0YXJ0IDogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcbiAgICB9KTtcbiAgfVxuXG4gIGVtaXR0ZXIuZWxlbWVudCA9IGF1ZGlvXG4gIGVtaXR0ZXIuY29udGV4dCA9IGF1ZGlvQ29udGV4dFxuICBlbWl0dGVyLm5vZGUgPSBub2RlXG4gIGVtaXR0ZXIucGF1c2UgPSBhdWRpby5wYXVzZS5iaW5kKGF1ZGlvKVxuICBlbWl0dGVyLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wdC5hdXRvUmVzdW1lICE9PSBmYWxzZSkgcmVzdW1lKGVtaXR0ZXIuY29udGV4dClcbiAgICByZXR1cm4gYXVkaW8ucGxheSgpXG4gIH1cblxuICAvLyBUaGlzIGV4aXN0cyBjdXJyZW50bHkgZm9yIHBhcml0eSB3aXRoIEJ1ZmZlciBzb3VyY2VcbiAgLy8gT3BlbiB0byBzdWdnZXN0aW9ucyBmb3Igd2hhdCB0aGlzIHNob3VsZCBkaXNwb3NlLi4uXG4gIGVtaXR0ZXIuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHt9XG5cbiAgZW1pdHRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3YXNQbGF5aW5nID0gZW1pdHRlci5wbGF5aW5nXG4gICAgYXVkaW8ucGF1c2UoKVxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMFxuICAgIGlzTG9vcFJlYWR5ID0gZmFsc2VcbiAgICBpZiAod2FzUGxheWluZykge1xuICAgICAgZW1pdHRlci5lbWl0KCdlbmQnKVxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGVtaXR0ZXIsIHtcbiAgICBkdXJhdGlvbjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhdWRpby5kdXJhdGlvblxuICAgICAgfVxuICAgIH0sXG4gICAgY3VycmVudFRpbWU6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uY3VycmVudFRpbWVcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlpbmc6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gIWF1ZGlvLnBhdXNlZFxuICAgICAgfVxuICAgIH0sXG4gICAgdm9sdW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2Fpbi52YWx1ZVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgbm9kZS5nYWluLnZhbHVlID0gblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBTZXQgaW5pdGlhbCB2b2x1bWVcbiAgaWYgKHR5cGVvZiBkZXNpcmVkVm9sdW1lID09PSAnbnVtYmVyJykge1xuICAgIGVtaXR0ZXIudm9sdW1lID0gZGVzaXJlZFZvbHVtZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNvdXJjZXMgYXJlIHVucGxheWFibGUsXG4gIC8vIGlmIHNvIHdlIGVtaXQgYW4gZXJyb3Igc2luY2UgdGhlIGJyb3dzZXJcbiAgLy8gbWlnaHQgbm90LlxuICB2YXIgc291cmNlcyA9IEFycmF5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFsgc3JjIF1cbiAgc291cmNlcyA9IHNvdXJjZXMuZmlsdGVyKEJvb2xlYW4pXG4gIHZhciBwbGF5YWJsZSA9IHNvdXJjZXMuc29tZShjYW5QbGF5U3JjKVxuICBpZiAocGxheWFibGUpIHtcbiAgICAvLyBBdCBsZWFzdCBvbmUgc291cmNlIGlzIHByb2JhYmx5L21heWJlIHBsYXlhYmxlXG4gICAgc3RhcnRMb2FkKClcbiAgfSBlbHNlIHtcbiAgICAvLyBlbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyB1c2VyIGNhbiBjYXRjaCBpdFxuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIGNhblBsYXlTcmMuY3JlYXRlRXJyb3Ioc291cmNlcykpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG5cbiAgZnVuY3Rpb24gc3RhcnRMb2FkICgpIHtcbiAgICAvLyBUaGUgZmlsZSBlcnJvcnMgKGxpa2UgZGVjb2RpbmcgLyA0MDRzKSBhcHBlYXIgb24gPHNvdXJjZT5cbiAgICB2YXIgc3JjRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhdWRpby5jaGlsZHJlbilcbiAgICB2YXIgcmVtYWluaW5nU3JjRXJyb3JzID0gc3JjRWxlbWVudHMubGVuZ3RoXG4gICAgdmFyIGhhc0Vycm9yZWQgPSBmYWxzZVxuICAgIHZhciBzb3VyY2VFcnJvciA9IGZ1bmN0aW9uIChlcnIsIGVsKSB7XG4gICAgICBpZiAoaGFzRXJyb3JlZCkgcmV0dXJuXG4gICAgICByZW1haW5pbmdTcmNFcnJvcnMtLVxuICAgICAgY29uc29sZS53YXJuKCdFcnJvciBsb2FkaW5nIHNvdXJjZTogJyArIGVsLmdldEF0dHJpYnV0ZSgnc3JjJykpXG4gICAgICBpZiAocmVtYWluaW5nU3JjRXJyb3JzIDw9IDApIHtcbiAgICAgICAgaGFzRXJyb3JlZCA9IHRydWVcbiAgICAgICAgc3JjRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNvdXJjZUVycm9yLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgZW1pdHRlci5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignQ291bGQgbm90IHBsYXkgYW55IG9mIHRoZSBzdXBwbGllZCBzb3VyY2VzJykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2xvYWQnKVxuICAgIH1cblxuICAgIGlmIChhdWRpby5yZWFkeVN0YXRlID49IGF1ZGlvLkhBVkVfRU5PVUdIX0RBVEEpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZG9uZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkT25jZShhdWRpbywgJ2NhbnBsYXknLCBkb25lKVxuICAgICAgYWRkT25jZShhdWRpbywgJ2Vycm9yJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdChuZXcgRXJyb3IoJ1Vua25vd24gZXJyb3Igd2hpbGUgbG9hZGluZyA8YXVkaW8+JykpXG4gICAgICB9KVxuICAgICAgc3JjRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgYWRkT25jZShlbCwgJ2Vycm9yJywgc291cmNlRXJyb3IpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9uIG1vc3QgYnJvd3NlcnMgdGhlIGxvYWRpbmcgYmVnaW5zXG4gICAgLy8gaW1tZWRpYXRlbHkuIEhvd2V2ZXIsIG9uIGlPUyA5LjIgU2FmYXJpLFxuICAgIC8vIHlvdSBuZWVkIHRvIGNhbGwgbG9hZCgpIGZvciBldmVudHNcbiAgICAvLyB0byBiZSB0cmlnZ2VyZWQuXG4gICAgYXVkaW8ubG9hZCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9tZWRpYS1zb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB4aHIgPSByZXF1aXJlKCd4aHInKVxudmFyIHhoclByb2dyZXNzID0gcmVxdWlyZSgneGhyLXByb2dyZXNzJylcblxubW9kdWxlLmV4cG9ydHMgPSB4aHJBdWRpb1xuZnVuY3Rpb24geGhyQXVkaW8gKGF1ZGlvQ29udGV4dCwgc3JjLCBjYiwgcHJvZ3Jlc3MsIGRlY29kaW5nKSB7XG4gIHZhciB4aHJPYmplY3QgPSB4aHIoe1xuICAgIHVyaTogc3JjLFxuICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ1xuICB9LCBmdW5jdGlvbiAoZXJyLCByZXNwLCBhcnJheUJ1Zikge1xuICAgIGlmICghL14yLy50ZXN0KHJlc3Auc3RhdHVzQ29kZSkpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignc3RhdHVzIGNvZGUgJyArIHJlc3Auc3RhdHVzQ29kZSArICcgcmVxdWVzdGluZyAnICsgc3JjKVxuICAgIH1cbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIGRlY29kZShhcnJheUJ1ZilcbiAgfSlcblxuICB4aHJQcm9ncmVzcyh4aHJPYmplY3QpXG4gICAgLm9uKCdkYXRhJywgZnVuY3Rpb24gKGFtb3VudCwgdG90YWwpIHtcbiAgICAgIHByb2dyZXNzKGFtb3VudCwgdG90YWwpXG4gICAgfSlcblxuICBmdW5jdGlvbiBkZWNvZGUgKGFycmF5QnVmKSB7XG4gICAgZGVjb2RpbmcoKVxuICAgIGF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWYsIGZ1bmN0aW9uIChkZWNvZGVkKSB7XG4gICAgICBjYihudWxsLCBkZWNvZGVkKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0Vycm9yIGRlY29kaW5nIGF1ZGlvIGRhdGEnKVxuICAgICAgZXJyLnR5cGUgPSAnREVDT0RFX0FVRElPX0RBVEEnXG4gICAgICBjYihlcnIpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3hoci1hdWRpby5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG5cXG52YXJ5aW5nIHZlYzMgdlZpZXdQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxuXFxuI2lmbmRlZiBGTEFUX1NIQURFRFxcblxcbiAgICB2YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXG5cXG4jZW5kaWZcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDx1dl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8dXYyX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxkaXNwbGFjZW1lbnRtYXBfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGVudm1hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y29sb3JfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8bW9ycGh0YXJnZXRfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHNraW5uaW5nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxzaGFkb3dtYXBfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfcGFyc192ZXJ0ZXg+XFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICAjaW5jbHVkZSA8dXZfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8dXYyX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGNvbG9yX3ZlcnRleD5cXG5cXG4gICAgI2luY2x1ZGUgPGJlZ2lubm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPG1vcnBobm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNraW5iYXNlX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNraW5ub3JtYWxfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8ZGVmYXVsdG5vcm1hbF92ZXJ0ZXg+XFxuXFxuI2lmbmRlZiBGTEFUX1NIQURFRCAvLyBOb3JtYWwgY29tcHV0ZWQgd2l0aCBkZXJpdmF0aXZlcyB3aGVuIEZMQVRfU0hBREVEXFxuXFxuICAgIHZOb3JtYWwgPSBub3JtYWxpemUoIHRyYW5zZm9ybWVkTm9ybWFsICk7XFxuXFxuI2VuZGlmXFxuXFxuICAgICNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxkaXNwbGFjZW1lbnRtYXBfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8bW9ycGh0YXJnZXRfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8c2tpbm5pbmdfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8cHJvamVjdF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfdmVydGV4PlxcblxcbiAgICB2Vmlld1Bvc2l0aW9uID0gLSBtdlBvc2l0aW9uLnh5ejtcXG4gICAgdlV2ID0gdXY7XFxuXFxuICAgICNpbmNsdWRlIDx3b3JsZHBvc192ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxlbnZtYXBfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8c2hhZG93bWFwX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGZvZ192ZXJ0ZXg+XFxuXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvYm90dG9tLnZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgUEhPTkdcXG4jZGVmaW5lIE1fUEkgMy4xNFxcblxcbnVuaWZvcm0gdmVjMyBkaWZmdXNlO1xcbnVuaWZvcm0gdmVjMyBlbWlzc2l2ZTtcXG51bmlmb3JtIHZlYzMgc3BlY3VsYXI7XFxudW5pZm9ybSBmbG9hdCBzaGluaW5lc3M7XFxudW5pZm9ybSBmbG9hdCBvcGFjaXR5O1xcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxudW5pZm9ybSB2ZWMzIHVTdHJpcGVPcmllbnRhdGlvbjtcXG51bmlmb3JtIGZsb2F0IHVJbnZlcnQ7XFxudW5pZm9ybSB2ZWMzIHVTcXVhcmU7XFxudW5pZm9ybSBmbG9hdCB1V2lkdGg7XFxudW5pZm9ybSBmbG9hdCB1SGVpZ2h0O1xcbnVuaWZvcm0gZmxvYXQgdUxlbmd0aDtcXG51bmlmb3JtIGZsb2F0IHVQcm9ncmVzcztcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbiNpbmNsdWRlIDxjb21tb24+XFxuI2luY2x1ZGUgPHBhY2tpbmc+XFxuI2luY2x1ZGUgPGNvbG9yX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPHV2X3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPHV2Ml9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8YWxwaGFtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8YW9tYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bGlnaHRtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8ZW1pc3NpdmVtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8ZW52bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGdyYWRpZW50bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxic2Rmcz5cXG4jaW5jbHVkZSA8bGlnaHRzX3BhcnM+XFxuI2luY2x1ZGUgPGxpZ2h0c19waG9uZ19wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxzaGFkb3dtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8YnVtcG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxub3JtYWxtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8c3BlY3VsYXJtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bG9nZGVwdGhidWZfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3BhcnNfZnJhZ21lbnQ+XFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgICAjaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX2ZyYWdtZW50PlxcblxcbiAgICB2ZWM0IGRpZmZ1c2VDb2xvciA9IHZlYzQoIGRpZmZ1c2UsIG9wYWNpdHkgKTtcXG4gICAgUmVmbGVjdGVkTGlnaHQgcmVmbGVjdGVkTGlnaHQgPSBSZWZsZWN0ZWRMaWdodCggdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICkgKTtcXG4gICAgdmVjMyB0b3RhbEVtaXNzaXZlUmFkaWFuY2UgPSBlbWlzc2l2ZTtcXG5cXG4gICAgI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8bWFwX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8Y29sb3JfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxhbHBoYW1hcF9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGFscGhhdGVzdF9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPHNwZWN1bGFybWFwX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8bm9ybWFsX2ZsaXA+XFxuICAgICNpbmNsdWRlIDxub3JtYWxfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxlbWlzc2l2ZW1hcF9mcmFnbWVudD5cXG5cXG4gICAgLy8gYWNjdW11bGF0aW9uXFxuICAgICNpbmNsdWRlIDxsaWdodHNfcGhvbmdfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxsaWdodHNfdGVtcGxhdGU+XFxuXFxuICAgIC8vIG1vZHVsYXRpb25cXG4gICAgI2luY2x1ZGUgPGFvbWFwX2ZyYWdtZW50PlxcblxcbiAgICB2ZWMzIG91dGdvaW5nTGlnaHQgPSByZWZsZWN0ZWRMaWdodC5kaXJlY3REaWZmdXNlICsgcmVmbGVjdGVkTGlnaHQuaW5kaXJlY3REaWZmdXNlICsgcmVmbGVjdGVkTGlnaHQuZGlyZWN0U3BlY3VsYXIgKyByZWZsZWN0ZWRMaWdodC5pbmRpcmVjdFNwZWN1bGFyICsgdG90YWxFbWlzc2l2ZVJhZGlhbmNlO1xcblxcbiAgICAjaW5jbHVkZSA8ZW52bWFwX2ZyYWdtZW50PlxcblxcbiAgICB2ZWM0IGNvbG9yID0gdmVjNChvdXRnb2luZ0xpZ2h0LCBkaWZmdXNlQ29sb3IuYSApO1xcblxcbiAgICBmbG9hdCBhYnNYID0gZmxvb3IoLWNvcygodVRpbWUgKiAwLjEgKyBNX1BJICogdVNxdWFyZS54ICogKCAoIHZVdi54ICsgdVByb2dyZXNzICsgMC4xNSApICogMi4gLSAxLiApICogMC41KSkpICsgMS47XFxuICAgIGZsb2F0IGFic1kgPSBmbG9vcigtY29zKChNX1BJICogdVNxdWFyZS55ICogKCB2VXYueSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcblxcbiAgICBpZiAoIGFic1ggPiAwLiB8fCBhYnNZID4gMC4gKSB7XFxuICAgICAgIGNvbG9yID0gdmVjNCh2ZWMzKDEuMCAtIHVJbnZlcnQpLCBkaWZmdXNlQ29sb3IuYSk7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICBjb2xvciA9IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpOyAgXFxuICAgIH1cXG5cXG4gICAgLy8gY29sb3IgPSB2VXYueCA+IDEuIC0gdVByb2dyZXNzICA/IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpIDogdmVjNCh2ZWMzKDAuMCArIHVJbnZlcnQpLCBkaWZmdXNlQ29sb3IuYSk7XFxuICAgIFxcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG5cXG4gICAgI2luY2x1ZGUgPHRvbmVtYXBwaW5nX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8Zm9nX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8cHJlbXVsdGlwbGllZF9hbHBoYV9mcmFnbWVudD5cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jdXN0b20vc2hhZGVycy9wcm9ncmVzcy5mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9ncmVzc1xuXG5mdW5jdGlvbiBwcm9ncmVzcyh4aHIpIHtcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyXG4gIHZhciBmaW5pc2hlZCA9IGZhbHNlXG5cbiAgaWYgKHhoci5hdHRhY2hFdmVudCkge1xuICAgIHhoci5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZG9uZSlcbiAgICByZXR1cm4gZW1pdHRlclxuICB9XG5cbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lLCBmYWxzZSlcbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICBmdW5jdGlvbiBwcm9ncmVzcyhldmVudCkge1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgID8gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWxcbiAgICAgIDogMFxuXG4gICAgaWYgKCFmaW5pc2hlZCkgZW1pdHRlci5lbWl0KCdkYXRhJ1xuICAgICAgLCB2YWx1ZVxuICAgICAgLCBldmVudC50b3RhbCB8fCBudWxsXG4gICAgKVxuXG4gICAgZmluaXNoZWQgPSB2YWx1ZSA9PT0gMVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlICE9PSAnbG9hZCcgJiYgIS9eKHJlYWR5fGNvbXBsZXRlKSQvZy50ZXN0KFxuICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkucmVhZHlTdGF0ZVxuICAgICkpIHJldHVyblxuXG4gICAgaWYgKGZpbmlzaGVkKSByZXR1cm5cbiAgICBpZiAoeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHhoci5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzcywgZmFsc2UpXG4gICAgfSBlbHNlXG4gICAgaWYgKHhoci5kZXRhdGNoRXZlbnQpIHtcbiAgICAgIHhoci5kZXRhdGNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KCdkYXRhJywgMSwgZXZlbnQudG90YWwgfHwgbnVsbClcbiAgICBlbWl0dGVyLmVtaXQoJ2RvbmUnKVxuICAgIGZpbmlzaGVkID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGVtaXR0ZXJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94aHItcHJvZ3Jlc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoXCJpcy1mdW5jdGlvblwiKVxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoXCJwYXJzZS1oZWFkZXJzXCIpXG52YXIgeHRlbmQgPSByZXF1aXJlKFwieHRlbmRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVYSFJcbmNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCBub29wXG5jcmVhdGVYSFIuWERvbWFpblJlcXVlc3QgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCkpID8gY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0IDogd2luZG93LlhEb21haW5SZXF1ZXN0XG5cbmZvckVhY2hBcnJheShbXCJnZXRcIiwgXCJwdXRcIiwgXCJwb3N0XCIsIFwicGF0Y2hcIiwgXCJoZWFkXCIsIFwiZGVsZXRlXCJdLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBjcmVhdGVYSFJbbWV0aG9kID09PSBcImRlbGV0ZVwiID8gXCJkZWxcIiA6IG1ldGhvZF0gPSBmdW5jdGlvbih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRvcihhcnJheVtpXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKXtcbiAgICBmb3IodmFyIGkgaW4gb2JqKXtcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHBhcmFtcyA9IHVyaVxuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zXG4gICAgICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7dXJpOnVyaX1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHh0ZW5kKG9wdGlvbnMsIHt1cmk6IHVyaX0pXG4gICAgfVxuXG4gICAgcGFyYW1zLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICByZXR1cm4gcGFyYW1zXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlWEhSKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbGxiYWNrIGFyZ3VtZW50IG1pc3NpbmdcIilcbiAgICB9XG5cbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYk9uY2UoZXJyLCByZXNwb25zZSwgYm9keSl7XG4gICAgICAgIGlmKCFjYWxsZWQpe1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhlcnIsIHJlc3BvbnNlLCBib2R5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRGdW5jLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IGdldFhtbCh4aHIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UsIHJlc3BvbnNlLmJvZHkpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciBhYm9ydGVkXG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybFxuICAgIHZhciBtZXRob2QgPSB4aHIubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIlxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YVxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuICAgIHZhciBmYWlsdXJlUmVzcG9uc2UgPSB7XG4gICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHN0YXR1c0NvZGU6IDAsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgfVxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5qc29uICE9PSBmYWxzZSkge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbiA9PT0gdHJ1ZSA/IGJvZHkgOiBvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZS8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIilcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgdGltZW91dFwiKVxuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIlxuICAgICAgICAgICAgZXJyb3JGdW5jKGUpXG4gICAgICAgIH0sIG9wdGlvbnMudGltZW91dCApXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG5cbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICAvLyBNaWNyb3NvZnQgRWRnZSBicm93c2VyIHNlbmRzIFwidW5kZWZpbmVkXCIgd2hlbiBzZW5kIGlzIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBzcGVjIHNheXMgdG8gcGFzcyBudWxsIGFzIGJvZHkgdG8gaW5kaWNhdGUgbm8gYm9keVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmF1Z3R1ci94aHIvaXNzdWVzLzEwMC5cbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpXG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5mdW5jdGlvbiBnZXRYbWwoeGhyKSB7XG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuICAgIHZhciBmaXJlZm94QnVnVGFrZW5FZmZlY3QgPSB4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gXCJwYXJzZXJlcnJvclwiXG4gICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiXCIgJiYgIWZpcmVmb3hCdWdUYWtlbkVmZmVjdCkge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==