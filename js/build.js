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
            console.log('Invert');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGI1MzBiOGY5ZTgxYmI1NWYxZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2V2ZW50cy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9BYnN0cmFjdEZhY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvbWFwLmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2F1ZGlvLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9yZXN1bWUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL0ZhY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL01vdXNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9MZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9mYWNlcy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zbW9vdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91aS5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsc2xpZnkvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RocmVlLW9yYml0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW5hbHlzZXItZnJlcXVlbmN5LWF2ZXJhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vbWFuYWdlcnMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tL3V0aWxzL2x1Y2t5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20vdXRpbHMvcmFuZG9tRnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL34vYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUvbWltZS10eXBlcy5qc29uIiwid2VicGFjazovLy8uL34vY2xhbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3ItZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwid2VicGFjazovLy8uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaWdodC1ub3cvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NpbXBsZS1tZWRpYS1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdHJpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYi1hdWRpby1wbGF5ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzIiwid2VicGFjazovLy8uL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9tZWRpYS1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9+L3hoci1wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3hoci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6WyJFdmVudHNNYW5hZ2VyIiwiZXZlbnQiLCJkYXRhIiwibGlzdGVuZXJzIiwiZXZlbnRzTGlzdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJmbiIsInB1c2giLCJsaXN0ZW5lciIsIm9mZiIsIl8iLCJvbiIsImNvbnNvbGUiLCJ3YXJuIiwidGFyZ2V0RXZlbnRzIiwidGFyZ2V0IiwiRXZlbnRzIiwiS0VZQk9BUkQiLCJLRVlET1dOIiwiS0VZVVAiLCJLRVlQUkVTUyIsIlNQQUNFSE9MRCIsIlNQQUNFVVAiLCJTUEFDRURPV04iLCJTT1VORFMiLCJDQU5QTEFZIiwiRU5EIiwiTE9XS0lDSyIsIk1JRERMRUtJQ0siLCJISUdIS0lDSyIsIlRSRU1PTE8iLCJTVEFSVCIsIlhQIiwiVUkiLCJISURERU4iLCJBYnN0cmFjdEZhY2UiLCJnZW9tZXRyeSIsImNvbG9yIiwibmFtZSIsInNpZGUiLCJUSFJFRSIsIkZyb250U2lkZSIsInBsYW5lR2VvbWV0cnkiLCJvbktleVByZXNzIiwib25TcGFjZUhvbGQiLCJvblN0YXJ0Iiwib25IaWRkZW5VSSIsInVuaWZvcm1zIiwiVW5pZm9ybXNVdGlscyIsImNsb25lIiwiU2hhZGVyTGliIiwidHlwZSIsInZhbHVlIiwiQ29sb3IiLCJWZWN0b3IzIiwid2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJzdGFydERpdmlzaW9ucyIsIlZlY3RvcjIiLCJvcmllbnRhdGlvbnMiLCJkdXJhdGlvbiIsImZhY3RvciIsImVhc2UiLCJFeHBvIiwiZWFzZU91dCIsImRlYnVnIiwic3RhcnRlZCIsImlzU3BhY2VEb3duIiwiaW5pdEd1aSIsIm1hdGVyaWFsIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJyZXF1aXJlIiwiZnJhZ21lbnRTaGFkZXIiLCJzaGFkaW5nIiwiRmxhdFNoYWRpbmciLCJsaWdodHMiLCJ3aXJlZnJhbWUiLCJ0cmFuc3BhcmVudCIsImZvZyIsIm1lc2giLCJNZXNoIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJhZGQiLCJpc09wZW4iLCJndWkiLCJhZGRGb2xkZXIiLCJvcGVuIiwidGltZSIsInVwZGF0ZURpdmlzaW9ucyIsIm9yaWVudGF0aW9uTmFtZSIsInNjYWxhciIsIm9yaWVudGF0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJ4IiwieSIsInoiLCJzcGVlZCIsInNwZWVkTWluIiwibG9nIiwidGwiLCJUaW1lbGluZUxpdGUiLCJibGFja01vZGUiLCJzaG93IiwidG8iLCJoaWRlIiwia2V5IiwiVHdlZW5NYXgiLCJpbnZlcnQiLCJUaW1lbGluZU1heCIsIk1hdGgiLCJyYW5kb20iLCJ1UHJvZ3Jlc3MiLCJvbkNvbXBsZXRlIiwic2V0IiwiZnJvbVRvIiwiT2JqZWN0M0QiLCJtYXAiLCJuIiwic3RhcnQxIiwic3RvcDEiLCJzdGFydDIiLCJzdG9wMiIsIkZhY2VzQ29udHJvbGxlciIsImNvbnRhaW5lciIsImZhY2VzIiwiZGl2aXNpb25zIiwiZ2VuZXJhdGVEaXZpc2lvbnMiLCJsYXN0WCIsImxhc3RZIiwiYWxsb3dJbnZlcnQiLCJzcGVlZENvbnRhaW5lciIsImZpcnN0U3BhY2VVcCIsImhpZ2hraWNrZWQiLCJsb3draWNrZWQiLCJvbkxvd0tpY2siLCJvbk1pZGRsZUtpY2siLCJvbkhpZ2hLaWNrIiwib25UcmVtb2xvIiwib25VSUhpZGRlbiIsIm9uU291bmRFbmQiLCJvblNwYWNlVXAiLCJvblNwYWNlRG93biIsImJsYWNrTW9kZVZlcnRpY2FsIiwiYmxhY2tNb2RlSG9yaXpvbnRhbCIsImJsYWNrTW9kZVR1bm5lbFRvcCIsImJsYWNrTW9kZVR1bm5lbEJvdHRvbSIsImJsYWNrTW9kZUJvdHRvbSIsImJsYWNrTW9kZUZ1bGwiLCJibGFja01vZGVzIiwic2V0QmxhY2tNb2RlIiwiY2hhbmdlU2NhbGUiLCJyZWFjdGlvbnMiLCJjaGFuZ2VTY2FsZVgiLCJjaGFuZ2VTY2FsZVkiLCJjaGFuZ2VTY2FsZUJvdGgiLCJzY2FsaW5ncyIsImlkIiwiZmFjZSIsIm1pbiIsIm1heCIsImJldHdlZW4iLCJwb3NzaWJsZURpdmlzaW9uWCIsImZpbmREaXZpc2lvbnMiLCJyZG1YSW5kZXgiLCJmbG9vciIsImRpdmlzaW9uWCIsImluZGV4T2YiLCJwb3NzaWJsZURpdmlzaW9uWSIsInJkbVlJbmRleCIsImRpdmlzaW9uWSIsIk9iamVjdCIsImtleXMiLCJzZXRTdHJpcGVzIiwiYWxsIiwiY3VycmVudCIsInJhbmdlIiwiZGl2aXNpb24iLCJpbmRleCIsImZpbHRlciIsInNvdW5kRW5kZWQiLCJyZG0iLCJlbWl0IiwicmVzZXQiLCJvbkVuZCIsIm9wdGlvbnMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZSIsInJvdGF0aW9uIiwidXBkYXRlIiwicHJvZ3Jlc3MiLCJlYXNlSW5PdXQiLCJNb3VzZU1hbmFnZXIiLCJjaGVja01vdXNlU3BlZWQiLCJtb3VzZVNwZWVkWCIsIm1vdXNlU3BlZWRZIiwibW91c2VMYXN0WCIsIm1vdXNlTGFzdFkiLCJtb3VzZURpcmVjdGlvblgiLCJtb3VzZURpcmVjdGlvblkiLCJtb3VzZVgiLCJtb3VzZVkiLCJzZXRJbnRlcnZhbCIsImdldFNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXREaXJlY3Rpb24iLCJwYWdlWCIsInBhZ2VZIiwiS2V5Ym9hcmRDb250cm9sbGVyIiwib25LZXlVcCIsIm9uS2V5RG93biIsIkJhY2tncm91bmQiLCJCb3R0b20iLCJob3Jpem9udGFsIiwiaG9yaXpvbnRhbFNrZXcxIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFNrZXcxIiwidmVydGljYWxTa2V3MiIsInZpc2liaWxpdHlUb2dnbGVyIiwidmlzaWJpbGl0eUhpZGVyIiwidmlzaWJpbGl0eVNob3dlciIsIkxlZnQiLCJSaWdodCIsIkJhY2tTaWRlIiwiVG9wIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiU291bmRNYW5hZ2VyIiwiYmFzcyIsIm1pZEJhc3MiLCJ2b2ljZSIsImRydW0iLCJwYXVzZSIsImFzc2V0cyIsInNvdXJjZXMiLCJpbnRybyIsInhwIiwic3RhcnQiLCJpbml0U291bmQiLCJsb3dLaWNrIiwibWlkZGxlS2ljayIsInRyZW1vbG8iLCJoaWdoS2ljayIsInJhbmdlcyIsInNvdW5kR3VpIiwib25DaGFuZ2UiLCJwbGF5ZXIiLCJwbGF5IiwicGxheWVycyIsImF1ZGlvIiwiYW5hbHlzZXIiLCJub2RlIiwiQXVkaW8iLCJ2b2x1bWUiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImF1ZGlibGUiLCJzdGVyZW8iLCJsb2FkZWQiLCJzcmMiLCJmcmVxcyIsImZyZXF1ZW5jaWVzIiwibGV2ZWwiLCJxdWV1ZSIsInNtb290aCIsImNvZWZmIiwiaW5pdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9nbyIsIiRhY3Rpb24iLCIkYWN0aW9uTGFiZWwiLCIkYWN0aW9uRmlsbCIsIiR0dXRvIiwiJGNyZWRpdHMiLCIkY3JlZGl0SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHByb2dyZXNzRmlsbCIsIiRoZWxwIiwiJGJhY2tncm91bmQiLCJub3ciLCJEYXRlIiwibWF4VGltZSIsImhlbHBJc09wZW4iLCJpc0NvbXBsZXRlZCIsIm1pbkZpbGwiLCJtYXhGaWxsIiwiZmlsbCIsInJlc2V0dGVkIiwiaXNEb3duIiwicGF1c2VkIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJjc3MiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwib25FbmRYUCIsIm9uQ2xpY2tIZWxwIiwidGxIZWxwU2hvdyIsInRsSGVscEhpZGUiLCJkaXNwbGF5IiwidGltZVNjYWxlIiwicmV2ZXJzZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImlubmVySFRNTCIsImtpbGwiLCJyZXN0YXJ0Iiwic3RhZ2dlckZyb21UbyIsIkFycmF5IiwiZnJvbSIsImRpc3BsYXlDcmVkaXRzIiwicHJldmVudERlZmF1bHQiLCJnbHNsaWZ5IiwiQXBwIiwidWlIaWRkZW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWNlc0NvbnRyb2xsZXIiLCJmYWNlc0NvbnRhaW5lciIsInVpIiwic291bmRNYW5hZ2VyIiwia2V5Ym9hcmRDb250cm9sbGVyIiwicmVzaXplIiwiYmluZExpc3RlbmVycyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0Q2xlYXJDb2xvciIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTb2Z0U2hhZG93TWFwIiwiV0FHTkVSIiwidmVydGV4U2hhZGVyc1BhdGgiLCJmcmFnbWVudFNoYWRlcnNQYXRoIiwiY29tcG9zZXIiLCJDb21wb3NlciIsImJsb29tV2lkdGgiLCJpc1RvdWNoIiwiYmxvb21IZWlnaHQiLCJibG9vbVBhc3MiLCJNdWx0aVBhc3NCbG9vbVBhc3MiLCJwYXJhbXMiLCJzdHJlbmd0aCIsImJsdXJBbW91bnQiLCJhcHBseVpvb21CbHVyIiwiem9vbUJsdXJTdHJlbmd0aCIsInpvb21CbHVyQ2VudGVyIiwicmdiUGFzcyIsIlJHQlNwbGl0UGFzcyIsImRlbHRhIiwibm9pc2VQYXNzIiwiTm9pc2VQYXNzIiwiYW1vdW50IiwidmlnbmV0dGVQYXNzIiwiVmlnbmV0dGVQYXNzIiwiZnhhYVBhc3MiLCJGWEFBUGFzcyIsInNjZW5lIiwiU2NlbmUiLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwibG9va0F0IiwiYWRkQ29udHJvbHMiLCJhZGRMaWdodHMiLCJhZGRFbGVtZW50cyIsIk9yYml0Q29udHJvbHMiLCJsaWdodCIsIkFtYmllbnRMaWdodCIsInBvaW50TGlnaHQzIiwiUG9pbnRMaWdodCIsImRpdmlzYXRvciIsIlBsYW5lR2VvbWV0cnkiLCJvdGhlckdlb21ldHJ5IiwibGVmdFJpZ2h0R2VvbWV0cnkiLCJ0b3BCb3R0b21HZW9tZXRyeSIsImJhY2tncm91bmRHZW9tZXRyeSIsIlBJIiwicmVnaXN0ZXIiLCJzZW5zIiwiZGVsYXkiLCJyZW5kZXIiLCJwYXNzIiwidG9TY3JlZW4iLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiUmFuZ2UiLCJtaW5MZXZlbCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiYXJncyIsImNvbnRleHQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJsdWNreSIsImNoYW5jZXMiLCJyYW5kb21Gcm9tQXJyYXkiLCJhcnJheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7O0lBS01BLGE7Ozs7Ozs7OztBQUVGOzs7Ozs2QkFLY0MsSyxFQUFxQjtBQUFBLGdCQUFkQyxJQUFjLHVFQUFQLElBQU87OztBQUUvQixnQkFBTUMsWUFBWUgsY0FBY0ksVUFBZCxDQUF5QkgsS0FBekIsQ0FBbEI7O0FBRUEsZ0JBQUcsQ0FBQ0UsU0FBSixFQUFlO0FBQ1g7QUFDSDs7QUFFRCxpQkFBSyxJQUFJRSxJQUFJLENBQVIsRUFBV0MsTUFBTUgsVUFBVUksTUFBaEMsRUFBd0NGLElBQUlDLEdBQTVDLEVBQWlERCxHQUFqRDtBQUF1REYsMEJBQVVFLENBQVYsRUFBYUcsRUFBYixDQUFpQk4sSUFBakI7QUFBdkQ7QUFFSDs7QUFFRDs7Ozs7Ozs7MkJBS1lELEssRUFBT08sRSxFQUFLOztBQUVwQjs7QUFFQSxnQkFBRyxDQUFDUixjQUFjSSxVQUFsQixFQUE4QkosY0FBY0ksVUFBZCxHQUEyQixFQUEzQjs7QUFFOUIsZ0JBQUcsQ0FBQ0os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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSCxxQ0FBcUM7QUFDckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnREFBZ0Q7O0FBRWhEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0NBQStDOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2Qzs7QUFFN0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTs7Ozs7OztBQzMvQkE7O0FBRUE7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RztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQzdFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3TEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUMvQkEsOERBQThELG1CQUFtQixzQkFBc0Isb0RBQW9ELDJaQUEyWixnWUFBZ1kscVNBQXFTLGVBQWUsaUlBQWlJLEM7Ozs7OztBQ0EzMkMsMkVBQTJFLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHFCQUFxQixxdEJBQXF0QixnR0FBZ0csMkdBQTJHLDRDQUE0QyxvbkJBQW9uQiw0RkFBNEYsMkhBQTJILG9GQUFvRix1Q0FBdUMsMkRBQTJELE9BQU8sT0FBTyw0REFBNEQsU0FBUyxtSUFBbUksaUNBQWlDLHVKQUF1SixDOzs7Ozs7QUNBdnVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTCxpQ0FBaUMsU0FBUztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoUEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGI1MzBiOGY5ZTgxYmI1NWYxZmQiLCIvKipcbiAqIEV2ZW50cyBNYW5hZ2VyXG4gKiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gKi9cblxuY2xhc3MgRXZlbnRzTWFuYWdlciB7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0IGV2ZW50XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudCBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc3RhdGljIGVtaXQgKCBldmVudCwgZGF0YSA9IG51bGwgKSB7XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XTtcblxuICAgICAgICBpZighbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoIGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkgbGlzdGVuZXJzW2ldLmZuKCBkYXRhICk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBvbiAoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRXZlbnRzTWFuYWdlciA6OiBPTiA6OicsIGV2ZW50KTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0KSBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3QgPSB7fTtcblxuICAgICAgICBpZighRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSkgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XSA9IFtdOyAvLyBpbXByb3ZlICguXy4pXG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5ldmVudHNMaXN0W2V2ZW50XS5wdXNoKHtmbjpmbn0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIG9uY2UoIGV2ZW50LCBmbiApIHtcblxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICggZGF0YSApID0+e1xuXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgZm4oZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdGVuZXIuXyA9IGZuO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKCBldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG9mZiAoIGV2ZW50LCBmbiApIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICAgICAgaWYoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHNNYW5hZ2VyIDo6IE9mZiA6OiBDdXJyZW50bHkgbm8gbGlzdGVuZXJzIGZvciB0aGlzIGV2ZW50IDogJywgZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V2ZW50c01hbmFnZXIgOjogT2ZmIDo6IENhbGxiYWNrIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RXZlbnRzID0gW107XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICBpZih0YXJnZXQuZm4gIT09IGZuICYmIHRhcmdldC5mbi5fICE9PSBmbiApIHsgLy8gKC5fXy4pID8/XG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnRzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYoIHRhcmdldEV2ZW50cy5sZW5ndGggPsKgMCApXG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmV2ZW50c0xpc3RbZXZlbnRdID0gdGFyZ2V0RXZlbnRzO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50c01hbmFnZXIuZXZlbnRzTGlzdFtldmVudF07XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c01hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzTWFuYWdlci5qcyIsIi8qKlxuICogRSBWIEUgTiBUIFNcbiAqL1xuXG5jb25zdCBFdmVudHMgPSB7XG4gICAgS0VZQk9BUkQ6IHtcbiAgICAgICAgS0VZRE9XTjogXCJLRVlCT0FSRF9LRVlET1dOXCIsXG4gICAgICAgIEtFWVVQOiBcIktFWUJPQVJEX0tFWVVQXCIsXG4gICAgICAgIEtFWVBSRVNTOiBcIktFWUJPQVJEX0tFWVBSRVNTXCIsXG4gICAgICAgIFNQQUNFSE9MRDogXCJLRVlCT0FSRF9TUEFDRUhPTERcIixcbiAgICAgICAgU1BBQ0VVUDogXCJLRVlCT0FSRF9TUEFDRVVQXCIsXG4gICAgICAgIFNQQUNFRE9XTjogXCJLRVlCT0FSRF9TUEFDRURPV05cIixcbiAgICB9LFxuICAgIFNPVU5EUzoge1xuICAgICAgICBDQU5QTEFZOiBcIlNPVU5EU19DQU5QTEFZXCIsXG4gICAgICAgIEVORDogXCJTT1VORFNfRU5EXCIsXG4gICAgICAgIExPV0tJQ0s6IFwiU09VTkRTX0xPV0tJQ0tcIixcbiAgICAgICAgTUlERExFS0lDSzogXCJTT1VORFNfTUlERExFS0lDS1wiLFxuICAgICAgICBISUdIS0lDSzogXCJTT1VORFNfSElHSEtJQ0tcIixcbiAgICAgICAgVFJFTU9MTzogXCJTT1VORFNfVFJFTU9MT1wiLFxuICAgICAgICBTVEFSVDogXCJTT1VORFNfU1RBUlRcIixcbiAgICAgICAgRU5EOiBcIlNPVU5EU19FTkRcIixcbiAgICB9LFxuICAgIFhQOiB7XG4gICAgICAgIFNUQVJUOiBcIlhQX1NUQVJUXCIsXG4gICAgICAgIEVORDogXCJYUF9FTkRcIixcbiAgICB9LFxuICAgIFVJOiB7XG4gICAgICAgIEhJRERFTjogXCJVSV9ISURERU5cIixcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9ldmVudHMvRXZlbnRzLmpzIiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4uL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCBtYXAgZnJvbSAnLi4vdXRpbHMvbWFwJztcblxuY2xhc3MgQWJzdHJhY3RGYWNlIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgPSAweDI0MjQyNSwgbmFtZSwgc2lkZSA9IFRIUkVFLkZyb250U2lkZSApIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnBsYW5lR2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSA6OnRoaXMub25LZXlQcmVzcztcbiAgICAgICAgdGhpcy5vblNwYWNlSG9sZCA9IDo6dGhpcy5vblNwYWNlSG9sZDtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25IaWRkZW5VSSA9IDo6dGhpcy5vbkhpZGRlblVJO1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKFRIUkVFLlNoYWRlckxpYlsncGhvbmcnXS51bmlmb3Jtcyk7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VUaW1lJ10gPSB7IHR5cGU6J2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ2RpZmZ1c2UnXSA9IHsgdHlwZTogJ2MnLCB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXSA9IHsgdHlwZTogJ3YzJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEpIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VXaWR0aCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cud2lkdGggfTtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUhlaWdodCddID0geyB0eXBlOiAnZicsIHZhbHVlOiB3aW5kb3cuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VMZW5ndGgnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogd2luZG93Lmxlbmd0aCB9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zWyd1UHJvZ3Jlc3MnXSA9IHsgdHlwZTogJ2YnLCB2YWx1ZTogMC4wIH07XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnN0YXJ0RGl2aXNpb25zID0gbmV3IFRIUkVFLlZlY3RvcjIoOSwgMTMpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25zID0gW107XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjM7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5lYXNlID0gRXhwby5lYXNlT3V0O1xuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCB0aGlzLmRlYnVnICkge1xuICAgICAgICAgICAgdGhpcy5pbml0R3VpKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2wnKSxcbiAgICAgICAgICAgIC8vIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL2JvdHRvbS5mcmFnLmdsc2wnKSxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi9zaGFkZXJzL3Byb2dyZXNzLmZyYWcuZ2xzbCcpLFxuICAgICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgICBzaGFkaW5nOiBUSFJFRS5GbGF0U2hhZGluZyxcbiAgICAgICAgICAgIGxpZ2h0czogdHJ1ZSxcbiAgICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsXG4gICAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBmb2c6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxhbmVHZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIHRoaXMubWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLm1lc2gpO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICAvLyBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRUhPTEQsIHRoaXMub25TcGFjZUhvbGQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5YUC5TVEFSVCwgdGhpcy5vblN0YXJ0KTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuVUkuSElEREVOLCB0aGlzLm9uSGlkZGVuVUkpO1xuICAgIH1cblxuICAgIGluaXRHdWkgKCBpc09wZW4gKSB7XG4gICAgICAgIHRoaXMuZ3VpID0gd2luZG93Lmd1aS5hZGRGb2xkZXIodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLCAneCcsIC0xLCAxKS5uYW1lKCdPcmllbnRhdGlvbiB4Jyk7XG4gICAgICAgIHRoaXMuZ3VpLmFkZCh0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZSwgJ3knLCAtMSwgMSkubmFtZSgnT3JpZW50YXRpb24geScpO1xuICAgICAgICB0aGlzLmd1aS5hZGQodGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUsICd6JywgLTEsIDEpLm5hbWUoJ09yaWVudGF0aW9uIHonKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3gnLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHgnKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3knLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHknKTtcbiAgICAgICAgdGhpcy5ndWkuYWRkKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgJ3onLCAwLCAxMDApLm5hbWUoJ1NwYWNlIHonKTtcbiAgICAgICAgXG4gICAgICAgIGlzT3BlbiAmJiB0aGlzLmd1aS5vcGVuKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlICggdGltZSApIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgc2V0UGxhaW5Db2xvciAoIGNvbG9yICkge1xuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygwLCAwKTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICggb3JpZW50YXRpb25OYW1lLCBzY2FsYXIgPSAxLCBkdXJhdGlvbiA9IDIgKSB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbnNbb3JpZW50YXRpb25OYW1lXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggb3JpZW50YXRpb24gKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IG9yaWVudGF0aW9uLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoc2NhbGFyKTsgLy8gcm9zYWNlXG5cbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbJ3VTdHJpcGVPcmllbnRhdGlvbiddLnZhbHVlLnggPSBjbG9uZS54O1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtc1sndVN0cmlwZU9yaWVudGF0aW9uJ10udmFsdWUueSA9IGNsb25lLnk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zWyd1U3RyaXBlT3JpZW50YXRpb24nXS52YWx1ZS56ID0gY2xvbmUuejtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldmVyc2VTdHJpcGVzICgpIHtcbiAgICAgICAgLy8gdGhpcy5mYWN0b3IgPSAtdGhpcy5mYWN0b3I7XG4gICAgfVxuXG4gICAgY2hhbmdlU3BlZWQgKCBzcGVlZCA9IHRoaXMuc3BlZWRNaW4gKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBpbnZlcnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSW52ZXJ0Jyk7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLmJsYWNrTW9kZSApIHtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0bC5hZGQodGhpcy5zaG93KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnVuaWZvcm1zWyd1SW52ZXJ0J10udmFsdWUgPT09IDEuMCA/IDAuIDogMS47XG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgdGhpcy5kdXJhdGlvbiwgeyB2YWx1ZTogdG8sIGVhc2U6IHRoaXMuZWFzZSwgfSwgMCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlVmlzaWJpbGl0eSAoKSB7XG4gICAgICAgIGlmICggdGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLnZhbHVlICkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5UHJlc3MgKCBkYXRhICkge1xuICAgICAgICBzd2l0Y2ggKCBkYXRhLmtleSApIHtcbiAgICAgICAgICAgIC8vIGNhc2UgJ3AnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0UGxhaW5Db2xvcigweDAwMDAwMCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ2gnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RyaXBlcygnaG9yaXpvbnRhbCcsIDEpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlICd2JzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0cmlwZXMoJ3ZlcnRpY2FsJywgMSk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ2knOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuaW52ZXJ0KCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgJ3InOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucmV2ZXJzZVN0cmlwZXMoKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSB0aGlzLnZpc2liaWxpdHlUb2dnbGVyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eUhpZGVyOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBjYXNlIHRoaXMudmlzaWJpbGl0eVNob3dlcjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1snb3BhY2l0eSddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAxLCBlYXNlOiB0aGlzLmVhc2UgfSk7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIHJldHVybiBUd2Vlbk1heC50byh0aGlzLnVuaWZvcm1zWydvcGFjaXR5J10sIHRoaXMuZHVyYXRpb24sIHsgdmFsdWU6IDAsIGVhc2U6IHRoaXMuZWFzZSB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVEaXZpc2lvbnMgKCB4LCB5LCBpbnZlcnQgPSB0cnVlICkge1xuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgdGhpcy5kdXJhdGlvbiwgeyB4OiB4LCB5OiB5LCBlYXNlOiB0aGlzLmVhc2UgfSwgMCk7XG5cbiAgICAgICAgaWYgKCBpbnZlcnQgJiYgTWF0aC5yYW5kb20oKSA+IDAuOSkge1xuICAgICAgICAgICAgdGwuYWRkKHRoaXMuaW52ZXJ0KCksIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHNldEJsYWNrTW9kZSAoKSB7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy51bmlmb3Jtc1sndUludmVydCddLCB0aGlzLmR1cmF0aW9uLCB7IHZhbHVlOiAxLjAsIGVhc2U6IHRoaXMuZWFzZSwgfSk7XG4gICAgfVxuXG4gICAgb25TcGFjZUhvbGQgKCB1UHJvZ3Jlc3MgKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ3VQcm9ncmVzcyddLnZhbHVlID0gdVByb2dyZXNzO1xuICAgIH1cblxuICAgIG9uRW5kICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDI7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuc2V0KHRoaXMudW5pZm9ybXNbJ3VTcXVhcmUnXS52YWx1ZSwgeyB4OiAxLCB5OiAxLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMudW5pZm9ybXNbJ3VJbnZlcnQnXSwgZHVyYXRpb24sIHsgdmFsdWU6IDAuMCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0bC5mcm9tVG8odGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10sIGR1cmF0aW9uLCB7IHZhbHVlOiAxLjggfSwgeyB2YWx1ZTogMC4wLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cblxuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVRpbWUnXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndVByb2dyZXNzJ10udmFsdWUgPSAwLjA7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDAuMDtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1sndUludmVydCddLnZhbHVlID0gMC4wO1xuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBvbkhpZGRlblVJICgpIHtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RGYWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQWJzdHJhY3RGYWNlLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAgKG4sIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgICByZXR1cm4gKChuIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpICogKHN0b3AyIC0gc3RhcnQyKSArIHN0YXJ0Mjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9tYXAuanMiLCIvLyBzb3VyY2VkIGZyb206XG4vLyBodHRwOi8vd3d3LmxlYW5iYWNrcGxheWVyLmNvbS90ZXN0L2g1bXQuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLW1pbWUvYmxvYi9tYXN0ZXIvdHlwZXMuanNvblxudmFyIG1pbWVUeXBlcyA9IHJlcXVpcmUoJy4vbWltZS10eXBlcy5qc29uJylcblxudmFyIG1pbWVMb29rdXAgPSB7fVxuT2JqZWN0LmtleXMobWltZVR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIGV4dGVuc2lvbnMgPSBtaW1lVHlwZXNba2V5XVxuICBleHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4dCkge1xuICAgIG1pbWVMb29rdXBbZXh0XSA9IGtleVxuICB9KVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb29rdXAgKGV4dCkge1xuICBpZiAoIWV4dCkgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzcGVjaWZ5IGV4dGVuc2lvbiBzdHJpbmcnKVxuICBpZiAoZXh0LmluZGV4T2YoJy4nKSA9PT0gMCkge1xuICAgIGV4dCA9IGV4dC5zdWJzdHJpbmcoMSlcbiAgfVxuICByZXR1cm4gbWltZUxvb2t1cFtleHQudG9Mb3dlckNhc2UoKV1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyLW1lZGlhLW1pbWUtdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb25cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmbikge1xuICB2YXIgc3RyaW5nID0gdG9TdHJpbmcuY2FsbChmbilcbiAgcmV0dXJuIHN0cmluZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fFxuICAgICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgc3RyaW5nICE9PSAnW29iamVjdCBSZWdFeHBdJykgfHxcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgLy8gSUU4IGFuZCBiZWxvd1xuICAgICAoZm4gPT09IHdpbmRvdy5zZXRUaW1lb3V0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmFsZXJ0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmNvbmZpcm0gfHxcbiAgICAgIGZuID09PSB3aW5kb3cucHJvbXB0KSlcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBdWRpb0NvbnRleHRcbmZ1bmN0aW9uIGNyZWF0ZUF1ZGlvQ29udGV4dCAoKSB7XG4gIHZhciBBdWRpb0N0b3IgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgcmV0dXJuIG5ldyBBdWRpb0N0b3IoKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL2F1ZGlvLWNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxvb2t1cCA9IHJlcXVpcmUoJ2Jyb3dzZXItbWVkaWEtbWltZS10eXBlJylcbnZhciBhdWRpb1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3JjUGxheWFibGVcbmZ1bmN0aW9uIGlzU3JjUGxheWFibGUgKHNyYykge1xuICBpZiAoIXNyYykgdGhyb3cgbmV3IFR5cGVFcnJvcignc3JjIGNhbm5vdCBiZSBlbXB0eScpXG4gIHZhciB0eXBlXG4gIGlmICh0eXBlb2Ygc3JjLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIDxzb3VyY2U+IGVsZW1lbnRcbiAgICB0eXBlID0gc3JjLmdldEF0dHJpYnV0ZSgndHlwZScpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAnZm9vLm1wMycgc3RyaW5nXG4gICAgdmFyIGV4dCA9IGV4dGVuc2lvbihzcmMpXG4gICAgaWYgKGV4dCkgdHlwZSA9IGxvb2t1cChleHQpXG4gIH0gZWxzZSB7XG4gICAgLy8geyBzcmM6ICdmb28ubXAzJywgdHlwZTogJ2F1ZGlvL21wZWc7IGNvZGVjcy4uJ31cbiAgICB0eXBlID0gc3JjLnR5cGVcbiAgfVxuXG4gIC8vIFdlIGhhdmUgYW4gdW5rbm93biBmaWxlIGV4dGVuc2lvbiBvclxuICAvLyBhIDxzb3VyY2U+IHRhZyB3aXRob3V0IGFuIGV4cGxpY2l0IHR5cGUsXG4gIC8vIGp1c3QgbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdCFcbiAgaWYgKCF0eXBlKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIGhhbmRsZSBcIm5vXCIgZWRnZSBjYXNlIHdpdGggc3VwZXIgbGVnYWN5IGJyb3dzZXJzLi4uXG4gIC8vIGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vZm9ydW0vIyF0b3BpYy9nb29nbGUtd2ViLXRvb2xraXQtY29udHJpYnV0b3JzL2E4VXkwYlhxMUhvXG4gIGlmICghYXVkaW8pIGF1ZGlvID0gbmV3IHdpbmRvdy5BdWRpbygpXG4gIHZhciBjYW5wbGF5ID0gYXVkaW8uY2FuUGxheVR5cGUodHlwZSkucmVwbGFjZSgvbm8vLCAnJylcbiAgcmV0dXJuIEJvb2xlYW4oY2FucGxheSlcbn1cblxubW9kdWxlLmV4cG9ydHMuY3JlYXRlRXJyb3IgPSBjcmVhdGVFcnJvclxuZnVuY3Rpb24gY3JlYXRlRXJyb3IgKHNvdXJjZXMpIHtcbiAgLy8gQWxsIHNvdXJjZXMgYXJlIHVucGxheWFibGVcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYW55IG9mIHRoZSBmb2xsb3dpbmcgc291cmNlczpcXG4gICAgJyArXG4gICAgICBzb3VyY2VzLmpvaW4oJywgJykgKyAnXFxuJyArXG4gICAgICAnVHJ5IHVzaW5nIGFuIGFycmF5IG9mIE9HRywgTVAzIGFuZCBXQVYuJylcbiAgZXJyLnR5cGUgPSAnQVVESU9fRk9STUFUJ1xuICByZXR1cm4gZXJyXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoZXh0SWR4ICsgMSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9jYW4tcGxheS1zcmMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGF1ZGlvQ29udGV4dCkge1xuICBpZiAoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJyAmJlxuICAgICAgdHlwZW9mIGF1ZGlvQ29udGV4dC5yZXN1bWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhdWRpb0NvbnRleHQucmVzdW1lKClcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1wbGF5ZXIvbGliL3Jlc3VtZS1jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuL2V2ZW50cy9FdmVudHNNYW5hZ2VyJztcbmltcG9ydCByYW5kb21Gcm9tQXJyYXkgZnJvbSAnLi91dGlscy9yYW5kb21Gcm9tQXJyYXknO1xuaW1wb3J0IGx1Y2t5IGZyb20gJy4vdXRpbHMvbHVja3knO1xuaW1wb3J0IG1hcCBmcm9tICcuL3V0aWxzL21hcCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSc7XG5cbmNsYXNzIEZhY2VzQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICAgIHRoaXMuZmFjZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpbWUgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgIHRoaXMuc3BlZWRDb250YWluZXIgPSAwLjA7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMS4wO1xuICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyc3RTcGFjZVVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlnaGtpY2tlZCA9IDA7XG4gICAgICAgIHRoaXMubG93a2lja2VkID0gMDtcblxuICAgICAgICAvLyBvbiBldmVudHNcbiAgICAgICAgdGhpcy5vbkxvd0tpY2sgPSA6OnRoaXMub25Mb3dLaWNrO1xuICAgICAgICB0aGlzLm9uTWlkZGxlS2ljayA9IDo6dGhpcy5vbk1pZGRsZUtpY2s7XG4gICAgICAgIHRoaXMub25IaWdoS2ljayA9IDo6dGhpcy5vbkhpZ2hLaWNrO1xuICAgICAgICB0aGlzLm9uVHJlbW9sbyA9IDo6dGhpcy5vblRyZW1vbG87XG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IDo6dGhpcy5vbktleVByZXNzO1xuICAgICAgICB0aGlzLm9uVUlIaWRkZW4gPSA6OnRoaXMub25VSUhpZGRlbjtcbiAgICAgICAgdGhpcy5vblNvdW5kRW5kID0gOjp0aGlzLm9uU291bmRFbmQ7XG4gICAgICAgIHRoaXMub25TcGFjZVVwID0gOjp0aGlzLm9uU3BhY2VVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25TcGFjZUhvbGQgPSA6OnRoaXMub25TcGFjZUhvbGQ7XG5cbiAgICAgICAgLy8gYmxhY2sgbW9kZXNcbiAgICAgICAgdGhpcy5ibGFja01vZGVWZXJ0aWNhbCA9IDo6dGhpcy5ibGFja01vZGVWZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVIb3Jpem9udGFsID0gOjp0aGlzLmJsYWNrTW9kZUhvcml6b250YWw7XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wID0gOjp0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcDtcbiAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20gPSA6OnRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tO1xuICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSA9IDo6dGhpcy5ibGFja01vZGVCb3R0b207XG4gICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCA9IDo6dGhpcy5ibGFja01vZGVGdWxsO1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVmVydGljYWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUhvcml6b250YWwsXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUJvdHRvbSxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsVG9wLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVUdW5uZWxCb3R0b20sXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZUZ1bGwsXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVhY3Rpb25zXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zID0gOjogdGhpcy51cGRhdGVEaXZpc2lvbnM7XG4gICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlID0gOjp0aGlzLnNldEJsYWNrTW9kZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSA9IDo6dGhpcy5jaGFuZ2VTY2FsZTtcblxuICAgICAgICB0aGlzLnJlYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zLFxuICAgICAgICAgICAgdGhpcy5zZXRCbGFja01vZGUsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVggPSA6OnRoaXMuY2hhbmdlU2NhbGVYO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlWSA9IDo6dGhpcy5jaGFuZ2VTY2FsZVk7XG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGVCb3RoID0gOjp0aGlzLmNoYW5nZVNjYWxlQm90aDtcblxuICAgICAgICAvLyBzY2FsZXNcbiAgICAgICAgdGhpcy5zY2FsaW5ncyA9IFtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGVZLFxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVgsXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlQm90aCxcbiAgICAgICAgXTtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlQUkVTUywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkxPV0tJQ0ssIHRoaXMub25Mb3dLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLk1JRERMRUtJQ0ssIHRoaXMub25NaWRkbGVLaWNrKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkhJR0hLSUNLLCB0aGlzLm9uSGlnaEtpY2spO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuVFJFTU9MTywgdGhpcy5vblRyZW1vbG8pO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5TT1VORFMuRU5ELCB0aGlzLm9uU291bmRFbmQpO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5VSS5ISURERU4sIHRoaXMub25VSUhpZGRlbik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuS0VZQk9BUkQuU1BBQ0VIT0xELCB0aGlzLm9uU3BhY2VIb2xkKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG5cbiAgICAgICAgLy8gdGhpcy51cGRhdGVEaXZpc2lvbnMgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZURpdmlzaW9ucywgNDAwKTtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VTY2FsZSA9IGRlYm91bmNlKHRoaXMuY2hhbmdlU2NhbGUsIDQwMCk7XG4gICAgICAgIC8vIHRoaXMuc2V0QmxhY2tNb2RlID0gZGVib3VuY2UodGhpcy5zZXRCbGFja01vZGUsIDQwMCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEaXZpc2lvbnMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlciAoIGlkLCBmYWNlICkge1xuICAgICAgICB0aGlzLmZhY2VzW2lkXSA9IGZhY2U7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZChmYWNlKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURpdmlzaW9ucyAoIG1pbiwgbWF4LCBiZXR3ZWVuID0gNCApIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gWzBdO1xuXG4gICAgICAgIGZvciAoIGxldCBpID0gbWluOyBpIDw9IG1heDsgaSs9IGJldHdlZW4gKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIGxldCBpID0gbWF4OyBpID49IG1pbjsgaS09IGJldHdlZW4gKSB7XG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdmlzaW9ucy5wdXNoKDApO1xuXG4gICAgICAgIHJldHVybiBkaXZpc2lvbnM7XG4gICAgfVxuXG4gICAgdXBkYXRlRGl2aXNpb25zICgpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVEaXZpc2lvblggPSB0aGlzLmZpbmREaXZpc2lvbnModGhpcy5kaXZpc2lvbnMueCwgdGhpcy5kaXZpc2lvbnMubGFzdFgsIDIpO1xuICAgICAgICBjb25zdCByZG1YSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZURpdmlzaW9uWC5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkaXZpc2lvblggPSBwb3NzaWJsZURpdmlzaW9uWFtyZG1YSW5kZXhdO1xuXG4gICAgICAgIHRoaXMuZGl2aXNpb25zLmxhc3RYID0gdGhpcy5kaXZpc2lvbnMueC5pbmRleE9mKGRpdmlzaW9uWCk7XG5cbiAgICAgICAgY29uc3QgcG9zc2libGVEaXZpc2lvblkgPSB0aGlzLmZpbmREaXZpc2lvbnModGhpcy5kaXZpc2lvbnMueSwgdGhpcy5kaXZpc2lvbnMubGFzdFksIDIpO1xuICAgICAgICBjb25zdCByZG1ZSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZURpdmlzaW9uWS5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkaXZpc2lvblkgPSBwb3NzaWJsZURpdmlzaW9uWVtyZG1ZSW5kZXhdO1xuXG4gICAgICAgIHRoaXMuZGl2aXNpb25zLmxhc3RZID0gdGhpcy5kaXZpc2lvbnMueS5pbmRleE9mKGRpdmlzaW9uWSk7XG5cbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnVwZGF0ZURpdmlzaW9ucyhkaXZpc2lvblgsIGRpdmlzaW9uWSwgdGhpcy5hbGxvd0ludmVydCksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTdHJpcGVzICgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5mYWNlcykubWFwKCBrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlc1trZXldLnNldFN0cmlwZXMoJ2hvcml6b250YWwnLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZERpdmlzaW9ucyAoIGFsbCwgY3VycmVudCwgcmFuZ2UgKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IGFsbC5tYXAoICggZGl2aXNpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIGluZGV4ID4gY3VycmVudCAtIHJhbmdlICYmIGluZGV4IDwgY3VycmVudCArIHJhbmdlICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXZpc2lvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5maWx0ZXIoICggaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdmlzaW9ucztcbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZGF0YSApIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgfHwgd2luZG93LnNvdW5kRW5kZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGtleSB9ID0gZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmICgga2V5ID09PSAnZCcgKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBrZXkgPT09ICdlJyApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmxhY2tNb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGtleSA9PT0gJ3gnICkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZENvbnRhaW5lciA9ICF0aGlzLnNwZWVkQ29udGFpbmVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb3dLaWNrICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZG0gPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgIGlmICggcmRtID4gMC42IHx8ICF0aGlzLmxvd2tpY2tlZCApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIHJkbSA+IDAuMiApIHtcbiAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb3draWNrZWQrKztcbiAgICB9XG5cbiAgICBvbkhpZ2hLaWNrICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMS4xO1xuXG4gICAgICAgIGlmICggdGhpcy5oaWdoa2lja2VkICUgMiA9PT0gMCApIHtcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yID0gLXRoaXMuZmFjdG9yO1xuICAgICAgICB9IFxuXG4gICAgICAgIHRoaXMuaGlnaGtpY2tlZCsrO1xuICAgICAgICB0aGlzLmFsbG93SW52ZXJ0ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDMsIDksIDIpLFxuICAgICAgICAgICAgeTogdGhpcy5nZW5lcmF0ZURpdmlzaW9ucygxLCAxMywgMiksXG4gICAgICAgICAgICBsYXN0WDogMCxcbiAgICAgICAgICAgIGxhc3RZOiAyLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmxhY2tNb2RlcyA9IFtcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlRnVsbCxcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURpdmlzaW9ucygpO1xuICAgICAgICB0aGlzLnNldEJsYWNrTW9kZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKCk7XG5cbiAgICAgICAgLy8gY29uc3QgcmVhY3Rpb24gPSByYW5kb21Gcm9tQXJyYXkodGhpcy5yZWFjdGlvbnMpO1xuICAgICAgICAvLyByZWFjdGlvbigpO1xuICAgIH1cblxuICAgIG9uTWlkZGxlS2ljayAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNSURETEVLSUNLJyk7XG4gICAgfVxuXG4gICAgb25UcmVtb2xvICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1RyZW1vbG9vb28nKTtcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuRU5EKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLnNwZWVkQ29udGFpbmVyID0gMC4wO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMC4wO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5vbkVuZCgpLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QmxhY2tNb2RlICgpIHtcbiAgICAgICAgY29uc3QgYmxhY2tNb2RlID0gcmFuZG9tRnJvbUFycmF5KHRoaXMuYmxhY2tNb2Rlcyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBibGFja01vZGUoKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIGlmICggb3B0aW9uc1trZXldID09PSAwICkge1xuICAgICAgICAgICAgICAgIHRsLmFkZCh0aGlzLmZhY2VzW2tleV0uaGlkZSgpLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGwuYWRkKHRoaXMuZmFjZXNba2V5XS5zaG93KCksIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0bC5hZGQodGhpcy5mYWNlc1trZXldLnNldEJsYWNrTW9kZSgpLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVmVydGljYWwgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAxLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUhvcml6b250YWwgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZVR1bm5lbFRvcCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IDEsXG4gICAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmxhY2tNb2RlVHVubmVsQm90dG9tICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgICAgYm90dG9tOiAxLFxuICAgICAgICAgICAgbGVmdDogMSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBibGFja01vZGVCb3R0b20gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJsYWNrTW9kZUZ1bGwgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAxLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlICgpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSByYW5kb21Gcm9tQXJyYXkodGhpcy5zY2FsaW5ncyk7XG5cbiAgICAgICAgc2NhbGUoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2FsZVggKCkge1xuICAgICAgICBjb25zdCB0byA9IE1hdGgubWF4KDAuNSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpICogMC4xKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLmNvbnRhaW5lci5zY2FsZSwgMC4zLCB7IHg6IHRvLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlU2NhbGVZICgpIHtcbiAgICAgICAgY29uc3QgdG8gPSBNYXRoLm1heCgwLjUsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1KSAqIDAuMSk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5jb250YWluZXIuc2NhbGUsIDAuMywgeyB5OiB0bywgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVNjYWxlQm90aCAoKSB7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgoMC41LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkgKiAwLjEpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuY29udGFpbmVyLnNjYWxlLCAwLjMsIHsgeDogdG8sIHk6IHRvLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgb25VSUhpZGRlbiAoKSB7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2xlZnQnXS5zaG93KCk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10uc2hvdygpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGl2aXNpb25zKCk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZhY2VzKS5tYXAoIGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzW2tleV0ucmVzZXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmdlbmVyYXRlRGl2aXNpb25zKDUsIDQzKSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2VuZXJhdGVEaXZpc2lvbnMoNSwgNDMpLFxuICAgICAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmJsYWNrTW9kZXMgPSBbXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVZlcnRpY2FsLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVIb3Jpem9udGFsLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVCb3R0b20sXG4gICAgICAgICAgICB0aGlzLmJsYWNrTW9kZVR1bm5lbFRvcCxcbiAgICAgICAgICAgIHRoaXMuYmxhY2tNb2RlVHVubmVsQm90dG9tLFxuICAgICAgICAgICAgdGhpcy5ibGFja01vZGVGdWxsLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudGltZSA9IDAuMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDtcbiAgICAgICAgdGhpcy5zcGVlZENvbnRhaW5lciA9IDAuMDtcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxLjA7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJzdFNwYWNlVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWdoa2lja2VkID0gMDtcbiAgICAgICAgdGhpcy5hbGxvd0ludmVydCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgdGhpcy50aW1lICs9IHRoaXMuZmFjdG9yICogdGhpcy5zcGVlZCAqIDAuMTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucm90YXRpb24ueiArPSB0aGlzLmZhY3RvciAqIHRoaXMuc3BlZWRDb250YWluZXIgKiAwLjAwNTtcblxuICAgICAgICB0aGlzLmZhY2VzWydsZWZ0J10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ3JpZ2h0J10udXBkYXRlKHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMuZmFjZXNbJ2JvdHRvbSddLnVwZGF0ZSh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLmZhY2VzWyd0b3AnXS51cGRhdGUodGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBvblNwYWNlVXAgKCkge1xuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICYmIHRoaXMuaXNTcGFjZURvd24gJiYgdGhpcy5maXJzdFNwYWNlVXAgKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BhY2VEb3duID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuZmFjdG9yID0gLXRoaXMuZmFjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB3aW5kb3cuc3RhcnRlZCApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RTcGFjZVVwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoIHdpbmRvdy5zdGFydGVkICYmICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IGRhdGE7XG5cbiAgICAgICAgY29uc3QgdVByb2dyZXNzID0gbWFwKHByb2dyZXNzLCAwLCAxLCAwLCAxLjgpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmFjZXMpLm1hcCgga2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNba2V5XS5vblNwYWNlSG9sZCh1UHJvZ3Jlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgLy8gdGhpcy5zcGVlZCA9IDEyLjA7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcywgMSwgeyBzcGVlZDogMTIsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXNDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vRmFjZXNDb250cm9sbGVyLmpzIiwiLyoqXG4gKiBNb3VzZSBNYW5hZ2VyXG4gKi9cblxuY2xhc3MgTW91c2VNYW5hZ2VyIHtcblxuXG4gICAgc3RhdGljIHN0YXJ0KCBjaGVja01vdXNlU3BlZWQgPSBmYWxzZSApIHtcblxuICAgICAgICAvLyBzcGVlZFxuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFggPSAwO1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFkgPSAwO1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZUxhc3RYID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFkgPSAwO1xuXG4gICAgICAgIC8vIGRpcmVjdGlvblxuICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25YID0gMDtcbiAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWSA9IDA7XG5cbiAgICAgICAgLy8gcG9zaXRpb25cbiAgICAgICAgd2luZG93Lm1vdXNlWCA9IDA7XG4gICAgICAgIHdpbmRvdy5tb3VzZVkgPSAwO1xuXG4gICAgICAgIGlmKGNoZWNrTW91c2VTcGVlZCkgd2luZG93LnNldEludGVydmFsKCBNb3VzZU1hbmFnZXIuZ2V0U3BlZWQsIDMwICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIE1vdXNlTWFuYWdlci5tb3ZlICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1vdmUoZSkge1xuXG4gICAgICAgIHdpbmRvdy5tb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgIHdpbmRvdy5tb3VzZVkgPSBlLmNsaWVudFk7XG5cbiAgICAgICAgTW91c2VNYW5hZ2VyLmdldERpcmVjdGlvbihlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGlyZWN0aW9uKGUpIHtcblxuICAgICAgICAvLyB4XG4gICAgICAgIGlmICh3aW5kb3cubW91c2VYIDwgZS5wYWdlWClcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAxO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubW91c2VYID4gZS5wYWdlWClcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblggPSAtMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgd2luZG93Lm1vdXNlRGlyZWN0aW9uWCA9IDA7XG5cbiAgICAgICAgLy8geVxuICAgICAgICBpZiAod2luZG93Lm1vdXNlWSA8IGUucGFnZVkpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gMTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm1vdXNlWSA+IGUucGFnZVkpXG4gICAgICAgICAgICB3aW5kb3cubW91c2VEaXJlY3Rpb25ZID0gLTE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5tb3VzZURpcmVjdGlvblkgPSAwO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTcGVlZCgpIHtcbiAgICAgICAgd2luZG93Lm1vdXNlU3BlZWRYID0gd2luZG93Lm1vdXNlWCAtIHdpbmRvdy5tb3VzZUxhc3RYO1xuICAgICAgICB3aW5kb3cubW91c2VTcGVlZFkgPSB3aW5kb3cubW91c2VZIC0gd2luZG93Lm1vdXNlTGFzdFk7XG5cbiAgICAgICAgd2luZG93Lm1vdXNlTGFzdFggPSB3aW5kb3cubW91c2VYO1xuICAgICAgICB3aW5kb3cubW91c2VMYXN0WSA9IHdpbmRvdy5tb3VzZVk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3VzZU1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS9Nb3VzZU1hbmFnZXIuanMiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4uL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IEV2ZW50c01hbmFnZXIgZnJvbSAnLi4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBLZXlib2FyZENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gOjp0aGlzLm9uS2V5UHJlc3M7XG4gICAgICAgIHRoaXMub25LZXlEb3duID0gOjp0aGlzLm9uS2V5RG93bjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICBvbktleVVwICggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELktFWVVQLCB7IGtleSB9KTtcblxuICAgICAgICBpZiAoIGtleSA9PT0gJyAnICkge1xuICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvbktleURvd24gKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuS0VZRE9XTiwgeyBrZXkgfSk7XG5cbiAgICAgICAgaWYgKCBrZXkgPT09ICcgJyApIHtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuS0VZQk9BUkQuU1BBQ0VET1dOKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvbktleVByZXNzICggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELktFWVBSRVNTLCB7IGtleSB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2JhY2tncm91bmQnKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL0JhY2tncm91bmQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgQm90dG9tIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICdib3R0b20nKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoLTMsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXNbJ29wYWNpdHknXS52YWx1ZSA9IDEuMDtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHlUb2dnbGVyID0gJzInO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlIaWRlciA9ICczJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5U2hvd2VyID0gJzEnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvQm90dG9tLmpzIiwiaW1wb3J0IEFic3RyYWN0RmFjZSBmcm9tICcuL0Fic3RyYWN0RmFjZSc7XG5cbmNsYXNzIExlZnQgZXh0ZW5kcyBBYnN0cmFjdEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBnZW9tZXRyeSwgY29sb3IgKSB7XG4gICAgICAgIHN1cGVyKGdlb21ldHJ5LCBjb2xvciwgJ2xlZnQnKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAyMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcxOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnNCc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzEnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMyc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvTGVmdC5qcyIsImltcG9ydCBBYnN0cmFjdEZhY2UgZnJvbSAnLi9BYnN0cmFjdEZhY2UnO1xuXG5jbGFzcyBSaWdodCBleHRlbmRzIEFic3RyYWN0RmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIGdlb21ldHJ5LCBjb2xvciApIHtcbiAgICAgICAgc3VwZXIoZ2VvbWV0cnksIGNvbG9yLCAncmlnaHQnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgICAgICAgICBob3Jpem9udGFsU2tldzE6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0yMCwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MjogbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRvZ2dsZXIgPSAnNic7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUhpZGVyID0gJzEnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlTaG93ZXIgPSAnMyc7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vZmFjZXMvUmlnaHQuanMiLCJpbXBvcnQgQWJzdHJhY3RGYWNlIGZyb20gJy4vQWJzdHJhY3RGYWNlJztcblxuY2xhc3MgVG9wIGV4dGVuZHMgQWJzdHJhY3RGYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggZ2VvbWV0cnksIGNvbG9yICkge1xuICAgICAgICBzdXBlcihnZW9tZXRyeSwgY29sb3IsICd0b3AnLCBUSFJFRS5CYWNrU2lkZSk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbnMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgICAgICAgIGhvcml6b250YWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMjAsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxuICAgICAgICAgICAgdmVydGljYWxTa2V3MTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXG4gICAgICAgICAgICB2ZXJ0aWNhbFNrZXcyOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VG9nZ2xlciA9ICc4JztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5SGlkZXIgPSAnMyc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVNob3dlciA9ICcxJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL2ZhY2VzL1RvcC5qcyIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnd2ViLWF1ZGlvLXBsYXllcic7XG5pbXBvcnQgY3JlYXRlQW5hbHlzZXIgZnJvbSAnd2ViLWF1ZGlvLWFuYWx5c2VyJztcbmltcG9ydCBhdmVyYWdlIGZyb20gJ2FuYWx5c2VyLWZyZXF1ZW5jeS1hdmVyYWdlJztcbmltcG9ydCBSYW5nZSBmcm9tICcuL1JhbmdlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vZXZlbnRzL0V2ZW50cyc7XG5pbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbi8vIGNvbnN0IGF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dCA/IG5ldyBBdWRpb0NvbnRleHQoKSA6IG51bGw7XG5cbmNsYXNzIFNvdW5kTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYmFzcyA9IDA7XG4gICAgICAgIHRoaXMubWlkQmFzcyA9IDA7XG4gICAgICAgIHRoaXMudm9pY2UgPSAwO1xuICAgICAgICB0aGlzLmRydW0gPSAwO1xuICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hc3NldHMgPSAnYXNzZXRzL3NvdW5kcyc7XG4gICAgICAgIHRoaXMuc291cmNlcyA9IHtcbiAgICAgICAgICAgIGludHJvOiAnaW50cm8ubXAzJyxcbiAgICAgICAgICAgIHhwOiAneHAubXAzJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gOjp0aGlzLnN0YXJ0O1xuICAgICAgICB0aGlzLm9uU3BhY2VIb2xkID0gOjp0aGlzLm9uU3BhY2VIb2xkO1xuICAgICAgICB0aGlzLm9uU3BhY2VVcCA9IDo6dGhpcy5vblNwYWNlVXA7XG4gICAgICAgIHRoaXMub25TcGFjZURvd24gPSA6OnRoaXMub25TcGFjZURvd247XG4gICAgICAgIHRoaXMub25TdGFydCA9IDo6dGhpcy5vblN0YXJ0O1xuXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XG4gICAgICAgIC8vIHRoaXMuaW5pdEd1aSgpO1xuXG4gICAgICAgIGNvbnN0IGxvd0tpY2sgPSBuZXcgUmFuZ2UoJ2xvd0tpY2snLCBbMTEwLCAxMzBdLCA2MDAsIEV2ZW50cy5TT1VORFMuTE9XS0lDSyk7XG4gICAgICAgIGNvbnN0IG1pZGRsZUtpY2sgPSBuZXcgUmFuZ2UoJ21pZGRsZUtpY2snLCBbMjcwLCAyOTBdLCA2MDAsIEV2ZW50cy5TT1VORFMuTUlERExFS0lDSywgMC4zKTtcbiAgICAgICAgY29uc3QgdHJlbW9sbyA9IG5ldyBSYW5nZSgndHJlbW9sbycsIFs0ODAsIDUyMF0sIDEwMCwgRXZlbnRzLlNPVU5EUy5UUkVNT0xPKTtcbiAgICAgICAgY29uc3QgaGlnaEtpY2sgPSBuZXcgUmFuZ2UoJ2hpZ2hLaWNrJywgWzE1MDAsIDM1MDBdLCA4MDAsIEV2ZW50cy5TT1VORFMuSElHSEtJQ0ssIDAuNSk7XG5cbiAgICAgICAgdGhpcy5yYW5nZXMgPSBbbG93S2ljaywgaGlnaEtpY2ssIHRyZW1vbG8sIG1pZGRsZUtpY2tdO1xuXG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlNPVU5EUy5TVEFSVCwgdGhpcy5zdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgdGhpcy5vblNwYWNlSG9sZCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFVVAsIHRoaXMub25TcGFjZVVwKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgaW5pdEd1aSAoKSB7XG4gICAgICAgIHRoaXMuc291bmRHdWkgPSB3aW5kb3cuZ3VpLmFkZEZvbGRlcignU291bmQnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXVzZSA9IHRoaXMuc291bmRHdWkuYWRkKHRoaXMsICdwYXVzZScpO1xuICAgICAgICBwYXVzZS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZSkgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0U291bmQgKCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZXMpLm1hcCggKCBrZXkgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhdWRpbzogbnVsbCxcbiAgICAgICAgICAgICAgICBhbmFseXNlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBub2RlOiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSA9IDA7XG4gICAgICAgICAgICBhdWRpby5jcm9zc09yaWdpbiA9ICdBbm9ueW1vdXMnO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQgPyBuZXcgQXVkaW9Db250ZXh0KCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuYWx5c2VyID0gY3JlYXRlQW5hbHlzZXIoYXVkaW8sIGF1ZGlvQ29udGV4dCwgeyBhdWRpYmxlOiB0cnVlLCBzdGVyZW86IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmFuYWx5c2VyID0gYW5hbHlzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0ubm9kZSA9IGFuYWx5c2VyLmFuYWx5c2VyO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trZXldLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLlNPVU5EUy5DQU5QTEFZLCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgRXZlbnRzTWFuYWdlci5lbWl0KEV2ZW50cy5TT1VORFMuRU5ELCB7IG5hbWU6IGtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gYCR7dGhpcy5hc3NldHN9LyR7dGhpcy5zb3VyY2VzW2tleV19YDtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2tleV0uYXVkaW8gPSBhdWRpbztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcnNbJ3hwJ107XG5cbiAgICAgICAgaWYgKCBwbGF5ZXIubG9hZGVkICkge1xuICAgICAgICAgICAgcGxheWVyLmF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggdGhpcy5wbGF5ZXJzWyd4cCddLmxvYWRlZCApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYW5hbHlzZXIsIG5vZGUgfSA9IHRoaXMucGxheWVyc1sneHAnXTtcblxuICAgICAgICAgICAgY29uc3QgZnJlcXMgPSBhbmFseXNlci5mcmVxdWVuY2llcygpO1xuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnJhbmdlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gYXZlcmFnZShub2RlLCBmcmVxcywgcmFuZ2UuZnJlcXNbMF0sIHJhbmdlLmZyZXFzWzFdKTtcblxuICAgICAgICAgICAgICAgIHJhbmdlLnVwZGF0ZShsZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNwYWNlSG9sZCAoIGRhdGEgKSB7XG4gICAgICAgIGNvbnN0IHsgdm9sdW1lIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCB7IGF1ZGlvIH0gPSB0aGlzLnBsYXllcnNbJ2ludHJvJ107XG5cbiAgICAgICAgYXVkaW8udm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odm9sdW1lICogMC41LCAxKSk7XG4gICAgfVxuXG4gICAgb25TcGFjZURvd24gKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzU3BhY2VEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc1NwYWNlRG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICggIXdpbmRvdy5zdGFydGVkICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYXVkaW8gfSA9IHRoaXMucGxheWVyc1snaW50cm8nXTtcblxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VVcCAoKSB7XG4gICAgICAgIGlmICggdGhpcy5pc1NwYWNlRG93biApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGFjZURvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhcnQgKCkge1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiBpbnRybyB9ID0gdGhpcy5wbGF5ZXJzWydpbnRybyddO1xuICAgICAgICBjb25zdCB7IGF1ZGlvOiB4cCB9ID0gdGhpcy5wbGF5ZXJzWyd4cCddO1xuXG4gICAgICAgIHhwLnZvbHVtZSA9IDE7XG4gICAgICAgIHhwLnBsYXkoKTtcblxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bC50byhpbnRybywgMC41LCB7IHZvbHVtZTogMCwgZWFzZTogRXhwby5lYXNlT3V0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBpbnRyby5wYXVzZSgpO1xuICAgICAgICB9fSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1NvdW5kTWFuYWdlci5qcyIsInZhciBxdWV1ZSA9IHt9O1xuXG4vKlxuKiogYWxsb3cgYW55IG51bWJlciB2YXJpYWJsZSB0byBiZSBzbW9vdGhlZFxuKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBhIHVuaXF1ZSBuYW1lIGZvciB5b3VyIHNtb290aGluZ1xuKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB0aGUgdmFsdWUgeW91IHdhbnQgdG8gYmUgc21vb3RoZWRcbiogQHBhcmFtIHtudW1iZXJ9IGNvZWZmIChvcHRpb25hbCkgLSB0aGUgc21vb3RoaW5nIGNvZWZmaWNpZW50LCB0aGUgc21hbGxlciwgdGhlIHNsb3dlci4gRGVmYXVsdDogMC4xXG4qIEBwYXJhbSB7Ym9vbGVhbn0gbG9nIChvcHRpb25hbCkgLSBlaXRoZXIgdGhlIHNtb290aGVkIHZhbHVlIGlzIGxvZyBpbiB0aGUgY29uc29sZS4gRGVmYXVsdDogZmFsc2VcbiogQHBhcmFtIHtudW1iZXJ9IGluaXQgKG9wdGlvbmFsKSAtIHRoZSBzdGFydGluZyB2YWx1ZSBvZiB0aGUgc21vb3RoaW5nLiBEZWZhdWx0OiAwXG4qIEByZXR1cm4ge251bWJlcn0gdGhlIHNtb290aGVkIHZhbHVlXG4qKi9cblxuZnVuY3Rpb24gc21vb3RoICggaWQsIHZhbHVlLCBjb2VmZiA9IDAuMSwgbG9nID0gZmFsc2UsIGluaXQgPSAwICkge1xuXHRpZiAoIHF1ZXVlW2lkXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdHF1ZXVlW2lkXSArPSAoIHZhbHVlIC0gcXVldWVbaWRdICkgKiBjb2VmZjtcblxuXHRcdGlmICggbG9nICkge1xuXHRcdFx0Y29uc29sZS5sb2coYCVjU21vb3RoICR7aWR9IDo6ICR7cXVldWVbaWRdfWAsICdjb2xvcjogYmx1ZTsnKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkID09PSAnJyApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU21vb3RoIDo6IGlkIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0XHR9XG5cblx0XHRxdWV1ZVtpZF0gPSBpbml0O1xuXHR9XG5cblx0cmV0dXJuIHF1ZXVlW2lkXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNtb290aDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL3Ntb290aC5qcyIsImltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMvRXZlbnRzJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuXG5jbGFzcyBVSSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX3NlY3Rpb24tLWludHJvJyk7XG4gICAgICAgIHRoaXMuJGxvZ28gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fbG9nbycpO1xuICAgICAgICB0aGlzLiRhY3Rpb24gPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYWN0aW9uJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbkxhYmVsID0gdGhpcy4kYWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25fX2xhYmVsJyk7XG4gICAgICAgIHRoaXMuJGFjdGlvbkZpbGwgPSB0aGlzLiR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25fX2ZpbGwnKTtcbiAgICAgICAgdGhpcy4kdHV0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aV9fc2VjdGlvbi0tdHV0bycpO1xuICAgICAgICB0aGlzLiRjcmVkaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19zZWN0aW9uLS1jcmVkaXRzJyk7XG4gICAgICAgIHRoaXMuJGNyZWRpdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWRpdHNfX2l0ZW0nKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NGaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19wcm9ncmVzc19fZmlsbCcpO1xuICAgICAgICB0aGlzLiRoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpX19oZWxwJyk7XG4gICAgICAgIHRoaXMuJGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWlfX2JhY2tncm91bmQnKTtcblxuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubWF4VGltZSA9IDMwMDA7XG4gICAgICAgIHRoaXMuaGVscElzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1pbkZpbGwgPSAwLjAxO1xuICAgICAgICB0aGlzLm1heEZpbGwgPSAxO1xuICAgICAgICB0aGlzLmZpbGwgPSB0aGlzLm1pbkZpbGw7XG5cbiAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5yZXNldHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSA1O1xuXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IDo6dGhpcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6IHRoaXMub25Db21wbGV0ZSB9KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uLCB7IHZvbHVtZTogMSwgZWFzZTogTGluZWFyLmVhc2VOb25lICB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRwcm9ncmVzc0ZpbGwsIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgxKWAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGFjdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kbG9nbywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjI1LCB7IHByb2dyZXNzOiAxLCBlYXNlOiBFeHBvLmVhc2VJbk91dCB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjQpO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJHR1dG8sIHRoaXMuZHVyYXRpb24gKiAwLjc1LCB7IGNzczogeyBzY2FsZTogMS41IH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kdHV0bywgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIHRoaXMuZHVyYXRpb24gKiAwLjc1KTtcbiAgICAgICAgdGhpcy50bC5zZXQodGhpcywgeyBwcm9ncmVzczogMCB9KTtcbiAgICAgICAgLy8gdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uICogMC4yNSwgeyBwcm9ncmVzczogMC40NCwgZWFzZTogRXhwby5lYXNlT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjk4KTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5vbktleURvd24gPSA6OnRoaXMub25LZXlEb3duO1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSA6OnRoaXMub25LZXlVcDtcbiAgICAgICAgdGhpcy5vblNwYWNlRG93biA9IDo6dGhpcy5vblNwYWNlRG93bjtcbiAgICAgICAgdGhpcy5vblNwYWNlVXAgPSA6OnRoaXMub25TcGFjZVVwO1xuICAgICAgICB0aGlzLm9uRW5kWFAgPSA6OnRoaXMub25FbmRYUDtcbiAgICAgICAgdGhpcy5vbkNsaWNrSGVscCA9IDo6dGhpcy5vbkNsaWNrSGVscDtcblxuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5LRVlET1dOLCB0aGlzLm9uS2V5RG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELktFWVVQLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBFdmVudHNNYW5hZ2VyLm9uKEV2ZW50cy5LRVlCT0FSRC5TUEFDRVVQLCB0aGlzLm9uU3BhY2VVcCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLktFWUJPQVJELlNQQUNFRE9XTiwgdGhpcy5vblNwYWNlRG93bik7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlhQLkVORCwgdGhpcy5vbkVuZFhQKTtcblxuICAgICAgICB0aGlzLnRsSGVscFNob3cgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscElzT3BlbiA9IHRydWU7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGhpcy50bEhlbHBTaG93LnRvKHRoaXMuJHR1dG8sIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0aGlzLnRsSGVscFNob3cudG8odGhpcy4kYmFja2dyb3VuZCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICB0aGlzLnRsSGVscEhpZGUgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVscElzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9fSk7XG4gICAgICAgIHRoaXMudGxIZWxwSGlkZS50byh0aGlzLiR0dXRvLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIDApO1xuICAgICAgICB0aGlzLnRsSGVscEhpZGUudG8odGhpcy4kYmFja2dyb3VuZCwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwKTtcblxuICAgICAgICB0aGlzLiRoZWxwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrSGVscCk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICggIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICBFdmVudHNNYW5hZ2VyLmVtaXQoRXZlbnRzLktFWUJPQVJELlNQQUNFSE9MRCwgeyBwcm9ncmVzczogdGhpcy5wcm9ncmVzcywgdm9sdW1lOiB0aGlzLnZvbHVtZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXkgKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5NYXgudG8odGhpcy4kd3JhcHBlciwgMC41LCB7IGNzczogeyBvcGFjaXR5OiAxIH0sIGVhc2U6IEV4cG8uZWFzZU91dCB9KTtcbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMuJHdyYXBwZXIsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duICggZGF0YSApIHtcblxuICAgIH1cblxuICAgIG9uS2V5VXAgKCBkYXRhICkge1xuXG4gICAgfVxuXG4gICAgb25TcGFjZVVwICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgJiYgdGhpcy5pc0Rvd24gJiYgIXRoaXMuaXNDb21wbGV0ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50bC50aW1lU2NhbGUoNCk7XG4gICAgICAgICAgICB0aGlzLnRsLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3BhY2VEb3duICgpIHtcbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgJiYgIXRoaXMuaXNEb3duICkge1xuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50bC50aW1lU2NhbGUoMSk7XG4gICAgICAgICAgICB0aGlzLnRsLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29tcGxldGUgKCkge1xuICAgICAgICBpZiAoICF0aGlzLmlzQ29tcGxldGVkICkge1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMsIHsgcHJvZ3Jlc3M6IDAgfSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kY3JlZGl0SXRlbXMsIHsgY3NzOiB7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX0pO1xuICAgICAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJGNyZWRpdHMsIHsgY3NzOiB7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19KTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRwcm9ncmVzc0ZpbGwsIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgwKWB9fSk7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRoZWxwLCAwLjUsIHsgY3NzOiB7IG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0pO1xuXG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdChFdmVudHMuWFAuU1RBUlQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUNyZWRpdHMgKCkge1xuICAgICAgICB0aGlzLiRjcmVkaXRzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIHRoaXMuJGFjdGlvbkxhYmVsLmlubmVySFRNTCA9ICdIb2xkIHNwYWNlYmFyIHRvIHJlc3RhcnQnO1xuXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50bC5raWxsKCk7XG4gICAgICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6IHRoaXMub25Db21wbGV0ZSB9KTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLCB0aGlzLmR1cmF0aW9uLCB7IHZvbHVtZTogMSwgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgMCk7XG4gICAgICAgIHRoaXMudGwudG8odGhpcy4kYWN0aW9uLCB0aGlzLmR1cmF0aW9uLCB7IGNzczogeyBvcGFjaXR5OiAwIH0sIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcbiAgICAgICAgdGhpcy50bC50byh0aGlzLiRwcm9ncmVzc0ZpbGwsIHRoaXMuZHVyYXRpb24sIHsgY3NzOiB7IHRyYW5zZm9ybTogYHNjYWxlWCgxKWAgfSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMuJGNyZWRpdHMsIHRoaXMuZHVyYXRpb24sIHsgb3BhY2l0eTogMCwgc2NhbGU6IDEuNSwgZWFzZTogTGluZWFyLmVhc2VOb25lIH0sIDApO1xuICAgICAgICB0aGlzLnRsLnRvKHRoaXMsIHRoaXMuZHVyYXRpb24gKiAwLjUsIHsgcHJvZ3Jlc3M6IDEsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0sIHRoaXMuZHVyYXRpb24gKiAwLjUpO1xuXG4gICAgICAgIGlmICggdGhpcy5oZWxwSXNPcGVuICkge1xuICAgICAgICAgICAgdGhpcy50bEhlbHBIaWRlLnJlc3RhcnQoKTsgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMjtcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH19KTtcbiAgICAgICAgdGwuc3RhZ2dlckZyb21UbyhBcnJheS5mcm9tKHRoaXMuJGNyZWRpdEl0ZW1zKSwgZHVyYXRpb24sIHsgY3NzOiB7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX0sIHsgY3NzOiB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDEgfSwgZWFzZTogRXhwby5lYXNlT3V0IH0sIGR1cmF0aW9uICogMC4wNSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMuJGhlbHAsIDAuNSwgeyBjc3M6IHsgb3BhY2l0eTogMCB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMCk7XG4gICAgICAgIHRsLnRvKHRoaXMuJGFjdGlvbiwgdGhpcy5kdXJhdGlvbiwgeyBjc3M6IHsgb3BhY2l0eTogMSB9LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnJlc2V0dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMudm9sdW1lID0gMDtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMjtcbiAgICB9XG5cbiAgICBvbkVuZFhQICgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q3JlZGl0cygpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tIZWxwICggZXZlbnQgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCAhd2luZG93LnN0YXJ0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICF0aGlzLmhlbHBJc09wZW4gKSB7XG4gICAgICAgICAgICB0aGlzLiRoZWxwLmlubmVySFRNTCA9ICdYJztcblxuICAgICAgICAgICAgdGhpcy50bEhlbHBTaG93LnJlc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGhlbHAuaW5uZXJIVE1MID0gJz8nO1xuXG4gICAgICAgICAgICB0aGlzLnRsSGVscEhpZGUucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdWkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZ3MpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnc3RyaW5nJykgc3RyaW5ncyA9IFtzdHJpbmdzXVxuICB2YXIgZXhwcnMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKVxuICB2YXIgcGFydHMgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoLTE7IGkrKykge1xuICAgIHBhcnRzLnB1c2goc3RyaW5nc1tpXSwgZXhwcnNbaV0gfHwgJycpXG4gIH1cbiAgcGFydHMucHVzaChzdHJpbmdzW2ldKVxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbHNsaWZ5L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZlxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JhZi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiggVEhSRUUgKSB7XG5cdC8qKlxuXHQgKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuXHQgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG5cdCAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG5cdCAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuXHQgKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG5cdCAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5cdGZ1bmN0aW9uIE9yYml0Q29udHJvbHMoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0XHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0XHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHRcdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5ab29tID0gMDtcblx0XHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0XHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0XHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0XHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0XHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHRcdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0XHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdFx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdFx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdFx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0XHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdFx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHRcdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0XHQvLyBNb3VzZSBidXR0b25zXG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHRcdC8vIGZvciByZXNldFxuXHRcdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdFx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHRcdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdFx0Ly9cblx0XHQvLyBwdWJsaWMgbWV0aG9kc1xuXHRcdC8vXG5cblx0XHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fTtcblxuXHRcdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0XHR9O1xuXG5cdFx0Ly9cblx0XHQvLyBpbnRlcm5hbHNcblx0XHQvL1xuXG5cdFx0dmFyIHNjb3BlID0gdGhpcztcblxuXHRcdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0XHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHRcdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHRcdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHRcdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0XHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHRcdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdFx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdFx0dmFyIHNjYWxlID0gMTtcblx0XHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdFx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0XHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHRcdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRcdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdFx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR9XG5cblx0XHQvL1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHR9O1xuXG5cdE9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuXHRPcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9yYml0Q29udHJvbHM7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0XHRjZW50ZXI6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdG5vWm9vbToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1JvdGF0ZToge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub1Bhbjoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRub0tleXM6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSApO1xuXG5cdHJldHVybiBPcmJpdENvbnRyb2xzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aHJlZS1vcmJpdC1jb250cm9scy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZXF1ZW5jeVRvSW5kZXggPSByZXF1aXJlKCdhdWRpby1mcmVxdWVuY3ktdG8taW5kZXgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDI1NSlcbm1vZHVsZS5leHBvcnRzLmZsb2F0RGF0YSA9IGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZS5iaW5kKG51bGwsIDEpXG5cbmZ1bmN0aW9uIGFuYWx5c2VyRnJlcXVlbmN5QXZlcmFnZSAoZGl2LCBhbmFseXNlciwgZnJlcXVlbmNpZXMsIG1pbkh6LCBtYXhIeikge1xuICB2YXIgc2FtcGxlUmF0ZSA9IGFuYWx5c2VyLmNvbnRleHQuc2FtcGxlUmF0ZVxuICB2YXIgYmluQ291bnQgPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudFxuICB2YXIgc3RhcnQgPSBmcmVxdWVuY3lUb0luZGV4KG1pbkh6LCBzYW1wbGVSYXRlLCBiaW5Db3VudClcbiAgdmFyIGVuZCA9IGZyZXF1ZW5jeVRvSW5kZXgobWF4SHosIHNhbXBsZVJhdGUsIGJpbkNvdW50KVxuICB2YXIgY291bnQgPSBlbmQgLSBzdGFydFxuICB2YXIgc3VtID0gMFxuICBmb3IgKDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcbiAgICBzdW0gKz0gZnJlcXVlbmNpZXNbc3RhcnRdIC8gZGl2XG4gIH1cbiAgcmV0dXJuIGNvdW50ID09PSAwID8gMCA6IChzdW0gLyBjb3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmFseXNlci1mcmVxdWVuY3ktYXZlcmFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZXF1ZW5jeVRvSW5kZXhcbmZ1bmN0aW9uIGZyZXF1ZW5jeVRvSW5kZXggKGZyZXF1ZW5jeSwgc2FtcGxlUmF0ZSwgZnJlcXVlbmN5QmluQ291bnQpIHtcbiAgdmFyIG55cXVpc3QgPSBzYW1wbGVSYXRlIC8gMlxuICB2YXIgaW5kZXggPSBNYXRoLnJvdW5kKGZyZXF1ZW5jeSAvIG55cXVpc3QgKiBmcmVxdWVuY3lCaW5Db3VudClcbiAgcmV0dXJuIGNsYW1wKGluZGV4LCAwLCBmcmVxdWVuY3lCaW5Db3VudClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdWRpby1mcmVxdWVuY3ktdG8taW5kZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vZmFjZXMvQmFja2dyb3VuZCc7XG5pbXBvcnQgVG9wIGZyb20gJy4vZmFjZXMvVG9wJztcbmltcG9ydCBMZWZ0IGZyb20gJy4vZmFjZXMvTGVmdCc7XG5pbXBvcnQgUmlnaHQgZnJvbSAnLi9mYWNlcy9SaWdodCc7XG5pbXBvcnQgQm90dG9tIGZyb20gJy4vZmFjZXMvQm90dG9tJztcblxuaW1wb3J0IHNtb290aCBmcm9tICcuL3Ntb290aCc7XG5pbXBvcnQgRmFjZXNDb250cm9sbGVyIGZyb20gJy4vRmFjZXNDb250cm9sbGVyJztcbmltcG9ydCBNb3VzZU1hbmFnZXIgZnJvbSAnLi9Nb3VzZU1hbmFnZXInO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyJztcbmltcG9ydCBFdmVudHNNYW5hZ2VyIGZyb20gJy4vZXZlbnRzL0V2ZW50c01hbmFnZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy9FdmVudHMnO1xuaW1wb3J0IFVJIGZyb20gJy4vdWknO1xuXG5jb25zdCBnbHNsaWZ5ID0gcmVxdWlyZSgnZ2xzbGlmeScpO1xuXG5jbGFzcyBBcHAge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnVpSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gZmFsc2U7XG5cblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IDB4MDAwMDAwO1xuXHRcdFxuXHRcdC8vIHRoaXMuZ3VpID0gd2luZG93Lmd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyID0gbmV3IEZhY2VzQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmZhY2VzQ29udGFpbmVyID0gdGhpcy5mYWNlc0NvbnRyb2xsZXIuY29udGFpbmVyO1xuICAgICAgICB0aGlzLnVpID0gbmV3IFVJKCk7XG5cbiAgICAgICAgTW91c2VNYW5hZ2VyLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIgPSBuZXcgU291bmRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRDb250cm9sbGVyID0gbmV3IEtleWJvYXJkQ29udHJvbGxlcigpO1xuXHRcdFx0XG5cdFx0dGhpcy5yZXNpemUgPSA6OnRoaXMucmVzaXplO1xuXHRcdHRoaXMudXBkYXRlID0gOjp0aGlzLnVwZGF0ZTtcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gOjp0aGlzLm9uU3RhcnQ7XG4gICAgICAgIHRoaXMub25VSUhpZGRlbiA9IDo6dGhpcy5vblVJSGlkZGVuO1xuICAgICAgICB0aGlzLm9uU291bmRFbmQgPSA6OnRoaXMub25Tb3VuZEVuZDtcbiAgICAgICAgdGhpcy5yZXNldCA9IDo6dGhpcy5yZXNldDtcblx0XHRcblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGNhbnZhczogY2FudmFzLCBhbnRpYWxpYXM6IHRydWUsIGFscGhhOiBmYWxzZSB9KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yKTtcblx0XHQvLyB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA6IDEpO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXHRcdFxuXHRcdFdBR05FUi52ZXJ0ZXhTaGFkZXJzUGF0aCA9ICdqcy92ZXJ0ZXgtc2hhZGVycyc7XG5cdFx0V0FHTkVSLmZyYWdtZW50U2hhZGVyc1BhdGggPSAnanMvZnJhZ21lbnQtc2hhZGVycyc7XG5cblx0XHR0aGlzLmNvbXBvc2VyID0gbmV3IFdBR05FUi5Db21wb3Nlcih0aGlzLnJlbmRlcmVyKTtcblx0XHR0aGlzLmNvbXBvc2VyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cblx0XHRjb25zdCBibG9vbVdpZHRoID0gd2luZG93LmlzVG91Y2ggPyAyNTYgOiA1MTI7XG4gICAgICAgIGNvbnN0IGJsb29tSGVpZ2h0ID0gd2luZG93LmlzVG91Y2ggPyAyNTYgOiA1MTI7XG5cblx0XHR0aGlzLmJsb29tUGFzcyA9IG5ldyBXQUdORVIuTXVsdGlQYXNzQmxvb21QYXNzKGJsb29tV2lkdGgsIGJsb29tSGVpZ2h0KTtcblx0XHR0aGlzLmJsb29tUGFzcy5wYXJhbXMuc3RyZW5ndGggPSA1MC4wO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuYmx1ckFtb3VudCA9IDUuO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuYXBwbHlab29tQmx1ciA9IHRydWU7XG4gICAgICAgIHRoaXMuYmxvb21QYXNzLnBhcmFtcy56b29tQmx1clN0cmVuZ3RoID0gMy4wO1xuICAgICAgICB0aGlzLmJsb29tUGFzcy5wYXJhbXMuem9vbUJsdXJDZW50ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMiggMC41LCAwLjUgKTtcblxuICAgICAgICB0aGlzLnJnYlBhc3MgPSBuZXcgV0FHTkVSLlJHQlNwbGl0UGFzcygpO1xuICAgICAgICB0aGlzLnJnYlBhc3MucGFyYW1zLmRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoMjAsIDIwKTtcblxuICAgICAgICB0aGlzLm5vaXNlUGFzcyA9IG5ldyBXQUdORVIuTm9pc2VQYXNzKCk7XG4gICAgICAgIHRoaXMubm9pc2VQYXNzLnBhcmFtcy5hbW91bnQgPSAwLjI1O1xuICAgICAgICB0aGlzLm5vaXNlUGFzcy5wYXJhbXMuc3BlZWQgPSAwLjI7XG5cbiAgICAgICAgdGhpcy52aWduZXR0ZVBhc3MgPSBuZXcgV0FHTkVSLlZpZ25ldHRlUGFzcygpO1xuICAgICAgICB0aGlzLnZpZ25ldHRlUGFzcy5wYXJhbXMuYW1vdW50ID0gMC43O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5meGFhUGFzcyA9IG5ldyBXQUdORVIuRlhBQVBhc3MoKTtcblxuXHRcdHRoaXMud2lkdGggPSB3aW5kb3cud2lkdGggPSA2MDtcblx0XHR0aGlzLmhlaWdodCA9IHdpbmRvdy5oZWlnaHQgPSA2MDtcblx0XHR0aGlzLmxlbmd0aCA9IHdpbmRvdy5sZW5ndGggPSA2MDA7XG5cbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coMHgwMDAwMDAsIDAuOCwgdGhpcy5sZW5ndGggKiAuOTggKTtcblxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDMwMDApO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMDtcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XG5cblxuICAgICAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuYWRkTGlnaHRzKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgIFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGJpbmRMaXN0ZW5lcnMgKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG5cbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuU1RBUlQsIHRoaXMub25TdGFydCk7XG4gICAgICAgIEV2ZW50c01hbmFnZXIub24oRXZlbnRzLlVJLkhJRERFTiwgdGhpcy5vblVJSGlkZGVuKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuU09VTkRTLkVORCwgdGhpcy5vblNvdW5kRW5kKTtcbiAgICAgICAgRXZlbnRzTWFuYWdlci5vbihFdmVudHMuWFAuRU5ELCB0aGlzLnJlc2V0KTtcblx0fVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB3aW5kb3cuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgd2luZG93LnNvdW5kRW5kZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvblN0YXJ0ICgpIHtcbiAgICAgICAgd2luZG93LnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB3aW5kb3cudWlIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVUlIaWRkZW4gKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvblNvdW5kRW5kICggZGF0YSApIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmICggbmFtZSA9PT0gJ3hwJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5zb3VuZEVuZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXHRhZGRDb250cm9scyAoKSB7XG5cdFx0Y29uc3QgT3JiaXRDb250cm9scyA9IHJlcXVpcmUoJ3RocmVlLW9yYml0LWNvbnRyb2xzJykoVEhSRUUpO1xuXHRcdC8vIHRoaXMuY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdH1cblxuXHRhZGRMaWdodHMgKCkge1xuXHRcdHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4RkZGRkZGKTtcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICBcdFx0Y29uc3QgcG9pbnRMaWdodDMgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhmZmZmZmYsIDcuMSwgMCk7XG4gIFx0XHRwb2ludExpZ2h0My5wb3NpdGlvbi54ID0gMFxuICBcdFx0cG9pbnRMaWdodDMucG9zaXRpb24ueSA9IDQ7XG4gIFx0XHRwb2ludExpZ2h0My5wb3NpdGlvbi56ID0gNjA7XG5cbiAgXHRcdHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQzKTtcblx0fVxuXG5cdGFkZEVsZW1lbnRzICgpIHtcblx0XHR0aGlzLmRpdmlzYXRvciA9IDI7XG5cbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMubGVuZ3RoLCB0aGlzLndpZHRoLCAzMiwgMzIpO1xuICAgICAgICB0aGlzLm90aGVyR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmxlbmd0aCwgMzIsIDMyKTtcblxuXHRcdHRoaXMubGVmdFJpZ2h0R2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLmxlbmd0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvciksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvcikgKTtcblx0XHR0aGlzLnRvcEJvdHRvbUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5sZW5ndGgsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yKSAsIE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyB0aGlzLmRpdmlzYXRvcikpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuZGl2aXNhdG9yICogMiksIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmRpdmlzYXRvciAqIDIpICk7XG5cblx0XHR0aGlzLmxlZnQgPSBuZXcgTGVmdCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5sZWZ0LnJvdGF0aW9uLnkgPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMubGVmdC5wb3NpdGlvbi54ID0gLXRoaXMud2lkdGggKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdsZWZ0JywgdGhpcy5sZWZ0KVxuXG5cdFx0dGhpcy5yaWdodCA9IG5ldyBSaWdodCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy5yaWdodC5yb3RhdGlvbi55ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnJpZ2h0LnBvc2l0aW9uLnggPSB0aGlzLndpZHRoICogMC41O1xuICAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcigncmlnaHQnLCB0aGlzLnJpZ2h0KVxuXG5cdFx0dGhpcy5ib3R0b20gPSBuZXcgQm90dG9tKHRoaXMuZ2VvbWV0cnksIDB4MDAwMDAwKTtcblx0XHR0aGlzLmJvdHRvbS5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjU7XG4gICAgICAgIHRoaXMuYm90dG9tLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC41O1xuXHRcdHRoaXMuYm90dG9tLnBvc2l0aW9uLnkgPSAtdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCdib3R0b20nLCB0aGlzLmJvdHRvbSlcblxuXHRcdHRoaXMudG9wID0gbmV3IFRvcCh0aGlzLmdlb21ldHJ5LCAweDAwMDAwMCk7XG5cdFx0dGhpcy50b3Aucm90YXRpb24ueCA9IC1NYXRoLlBJICogMC41O1xuICAgICAgICB0aGlzLnRvcC5yb3RhdGlvbi56ID0gTWF0aC5QSSAqIDAuNTtcblx0XHR0aGlzLnRvcC5wb3NpdGlvbi55ID0gdGhpcy5oZWlnaHQgKiAwLjU7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnJlZ2lzdGVyKCd0b3AnLCB0aGlzLnRvcCk7XG5cblx0XHQvLyB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzLmJhY2tncm91bmRHZW9tZXRyeSwgMHgwMDAwMDApO1xuXHRcdC8vIHRoaXMuYmFja2dyb3VuZC5wb3NpdGlvbi56ID0gLXRoaXMubGVuZ3RoICogMC41O1xuICAvLyAgICAgICB0aGlzLmZhY2VzQ29udHJvbGxlci5yZWdpc3RlcignYmFja2dyb3VuZCcsIHRoaXMuYmFja2dyb3VuZCk7XG5cblx0XHR0aGlzLmZhY2VzQ29udHJvbGxlci5jb250YWluZXIucG9zaXRpb24ueiA9IC10aGlzLmxlbmd0aCAqIDAuNTtcblxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMuZmFjZXNDb250cm9sbGVyLmNvbnRhaW5lcik7XG5cdH1cblxuICAgIHJvdGF0ZSAoKSB7XG4gICAgICAgIGNvbnN0IHNlbnMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxO1xuICAgICAgICBjb25zdCBkZWxheSA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICB9XG5cblx0dXBkYXRlICgpIHtcbiAgICAgICAgdGhpcy51aS51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZmFjZXNDb250cm9sbGVyLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5jb21wb3Nlci5yZXNldCgpO1xuXHRcdHRoaXMuY29tcG9zZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMuYmxvb21QYXNzKTtcbiAgICAgICAgdGhpcy5jb21wb3Nlci5wYXNzKHRoaXMucmdiUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLm5vaXNlUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIucGFzcyh0aGlzLnZpZ25ldHRlUGFzcyk7XG4gICAgICAgIHRoaXMuY29tcG9zZXIudG9TY3JlZW4odGhpcy5meGFhUGFzcyk7XG5cblx0XHQvLyB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG5cblx0XHRyYWYodGhpcy51cGRhdGUpO1xuXHR9XG5cblx0cmVzaXplICgpIHtcblx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblx0fVxuXG59XG5cbm5ldyBBcHAoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL01haW4uanMiLCJpbXBvcnQgRXZlbnRzTWFuYWdlciBmcm9tICcuLi9ldmVudHMvRXZlbnRzTWFuYWdlcic7XG5cbmNsYXNzIFJhbmdlIHtcblxuICAgIGNvbnN0cnVjdG9yICggbmFtZSwgZnJlcXMsIGRlbHRhLCBldmVudCwgbWluTGV2ZWwgPSAwLjUgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZnJlcXMgPSBmcmVxcztcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLm1pbkxldmVsID0gbWluTGV2ZWw7XG5cbiAgICAgICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKCBsZXZlbCApIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lO1xuXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcblxuICAgICAgICBpZiAoIGRlbHRhID4gdGhpcy5kZWx0YSAmJiB0aGlzLmxldmVsID4gdGhpcy5taW5MZXZlbCApIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIEV2ZW50c01hbmFnZXIuZW1pdCh0aGlzLmV2ZW50KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCB0aGlzLm5hbWUgPT09ICdoaWdoS2ljaycgKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxldmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY3VzdG9tL21hbmFnZXJzL1JhbmdlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICBsZXQgdGltZW91dFxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKSwgd2FpdClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXN0b20vdXRpbHMvZGVib3VuY2UuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsdWNreSAoIGNoYW5jZXMgKSB7XG4gICAgcmV0dXJuICF+fihNYXRoLnJhbmRvbSgpICogY2hhbmNlcyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9sdWNreS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt+fihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1c3RvbS91dGlscy9yYW5kb21Gcm9tQXJyYXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdWRpby9taWRpXCI6IFtcblx0XHRcIm1pZFwiLFxuXHRcdFwibWlkaVwiLFxuXHRcdFwia2FyXCIsXG5cdFx0XCJybWlcIlxuXHRdLFxuXHRcImF1ZGlvL21wNFwiOiBbXG5cdFx0XCJtcDRhXCIsXG5cdFx0XCJtNGFcIlxuXHRdLFxuXHRcImF1ZGlvL21wZWdcIjogW1xuXHRcdFwibXBnYVwiLFxuXHRcdFwibXAyXCIsXG5cdFx0XCJtcDJhXCIsXG5cdFx0XCJtcDNcIixcblx0XHRcIm0yYVwiLFxuXHRcdFwibTNhXCJcblx0XSxcblx0XCJhdWRpby9vZ2dcIjogW1xuXHRcdFwib2dhXCIsXG5cdFx0XCJvZ2dcIixcblx0XHRcInNweFwiXG5cdF0sXG5cdFwiYXVkaW8vd2VibVwiOiBbXG5cdFx0XCJ3ZWJhXCJcblx0XSxcblx0XCJhdWRpby94LW1hdHJvc2thXCI6IFtcblx0XHRcIm1rYVwiXG5cdF0sXG5cdFwiYXVkaW8veC1tcGVndXJsXCI6IFtcblx0XHRcIm0zdVwiXG5cdF0sXG5cdFwiYXVkaW8vd2F2XCI6IFtcblx0XHRcIndhdlwiXG5cdF0sXG5cdFwidmlkZW8vM2dwcFwiOiBbXG5cdFx0XCIzZ3BcIlxuXHRdLFxuXHRcInZpZGVvLzNncHAyXCI6IFtcblx0XHRcIjNnMlwiXG5cdF0sXG5cdFwidmlkZW8vbXA0XCI6IFtcblx0XHRcIm1wNFwiLFxuXHRcdFwibXA0dlwiLFxuXHRcdFwibXBnNFwiXG5cdF0sXG5cdFwidmlkZW8vbXBlZ1wiOiBbXG5cdFx0XCJtcGVnXCIsXG5cdFx0XCJtcGdcIixcblx0XHRcIm1wZVwiLFxuXHRcdFwibTF2XCIsXG5cdFx0XCJtMnZcIlxuXHRdLFxuXHRcInZpZGVvL29nZ1wiOiBbXG5cdFx0XCJvZ3ZcIlxuXHRdLFxuXHRcInZpZGVvL3F1aWNrdGltZVwiOiBbXG5cdFx0XCJxdFwiLFxuXHRcdFwibW92XCJcblx0XSxcblx0XCJ2aWRlby93ZWJtXCI6IFtcblx0XHRcIndlYm1cIlxuXHRdLFxuXHRcInZpZGVvL3gtZjR2XCI6IFtcblx0XHRcImY0dlwiXG5cdF0sXG5cdFwidmlkZW8veC1mbGlcIjogW1xuXHRcdFwiZmxpXCJcblx0XSxcblx0XCJ2aWRlby94LWZsdlwiOiBbXG5cdFx0XCJmbHZcIlxuXHRdLFxuXHRcInZpZGVvL3gtbTR2XCI6IFtcblx0XHRcIm00dlwiXG5cdF0sXG5cdFwidmlkZW8veC1tYXRyb3NrYVwiOiBbXG5cdFx0XCJta3ZcIixcblx0XHRcIm1rM2RcIixcblx0XHRcIm1rc1wiXG5cdF1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXItbWVkaWEtbWltZS10eXBlL21pbWUtdHlwZXMuanNvblxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFtcFxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA8IG1heFxuICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhbXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Zvci1lYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGlzTm9kZVxuXG5mdW5jdGlvbiBpc05vZGUgKHZhbCkge1xuICByZXR1cm4gKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpXG4gICAgPyBmYWxzZVxuICAgIDogKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ29iamVjdCcpXG4gICAgICA/ICh2YWwgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZSlcbiAgICAgIDogKHR5cGVvZiB2YWwubm9kZVR5cGUgPT09ICdudW1iZXInKSAmJlxuICAgICAgICAodHlwZW9mIHZhbC5ub2RlTmFtZSA9PT0gJ3N0cmluZycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZG9tL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0cmltID0gcmVxdWlyZSgndHJpbScpXG4gICwgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJylcbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3JFYWNoKFxuICAgICAgdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcbiAgICAsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICAgICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICAgICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICAgICAgfVxuICAgICAgfVxuICApXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID1cbiAgZ2xvYmFsLnBlcmZvcm1hbmNlICYmXG4gIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPyBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpXG4gIH0gOiBEYXRlLm5vdyB8fCBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuICtuZXcgRGF0ZVxuICB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmlnaHQtbm93L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0RvbSA9IHJlcXVpcmUoJ2lzLWRvbScpXG52YXIgbG9va3VwID0gcmVxdWlyZSgnYnJvd3Nlci1tZWRpYS1taW1lLXR5cGUnKVxuXG5tb2R1bGUuZXhwb3J0cy52aWRlbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICd2aWRlbycpXG5tb2R1bGUuZXhwb3J0cy5hdWRpbyA9IHNpbXBsZU1lZGlhRWxlbWVudC5iaW5kKG51bGwsICdhdWRpbycpXG5cbmZ1bmN0aW9uIHNpbXBsZU1lZGlhRWxlbWVudCAoZWxlbWVudE5hbWUsIHNvdXJjZXMsIG9wdCkge1xuICBvcHQgPSBvcHQgfHwge31cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlcykpIHtcbiAgICBzb3VyY2VzID0gWyBzb3VyY2VzIF1cbiAgfVxuXG4gIHZhciBtZWRpYSA9IG9wdC5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpXG5cbiAgaWYgKG9wdC5sb29wKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2xvb3AnLCAnbG9vcCcpXG4gIGlmIChvcHQubXV0ZWQpIG1lZGlhLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnbXV0ZWQnKVxuICBpZiAob3B0LmF1dG9wbGF5KSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ2F1dG9wbGF5JylcbiAgaWYgKG9wdC5jb250cm9scykgbWVkaWEuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpXG4gIGlmIChvcHQuY3Jvc3NPcmlnaW4pIG1lZGlhLnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCBvcHQuY3Jvc3NPcmlnaW4pXG4gIGlmIChvcHQucHJlbG9hZCkgbWVkaWEuc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgb3B0LnByZWxvYWQpXG4gIGlmIChvcHQucG9zdGVyKSBtZWRpYS5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIG9wdC5wb3N0ZXIpXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcpIG1lZGlhLnNldEF0dHJpYnV0ZSgndm9sdW1lJywgb3B0LnZvbHVtZSlcblxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBtZWRpYS5hcHBlbmRDaGlsZChjcmVhdGVTb3VyY2VFbGVtZW50KHNvdXJjZSkpXG4gIH0pXG5cbiAgcmV0dXJuIG1lZGlhXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUVsZW1lbnQgKGRhdGEpIHtcbiAgaWYgKGlzRG9tKGRhdGEpKSByZXR1cm4gZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YSA9IHsgc3JjOiBkYXRhIH1cbiAgICBpZiAoZGF0YS5zcmMpIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb24oZGF0YS5zcmMpXG4gICAgICBpZiAoZXh0KSBkYXRhLnR5cGUgPSBsb29rdXAoZXh0KVxuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKVxuICBpZiAoZGF0YS5zcmMpIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEuc3JjKVxuICBpZiAoZGF0YS50eXBlKSBzb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKVxuICByZXR1cm4gc291cmNlXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAoZGF0YSkge1xuICB2YXIgZXh0SWR4ID0gZGF0YS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChleHRJZHggPD0gMCB8fCBleHRJZHggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIGRhdGEuc3Vic3RyaW5nKGV4dElkeCArIDEpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2ltcGxlLW1lZGlhLWVsZW1lbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cmltL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViQXVkaW9BbmFseXNlclxuXG5mdW5jdGlvbiBXZWJBdWRpb0FuYWx5c2VyKGF1ZGlvLCBjdHgsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFdlYkF1ZGlvQW5hbHlzZXIpKSByZXR1cm4gbmV3IFdlYkF1ZGlvQW5hbHlzZXIoYXVkaW8sIGN0eCwgb3B0cylcbiAgaWYgKCEoY3R4IGluc3RhbmNlb2YgQXVkaW9Db250ZXh0KSkgKG9wdHMgPSBjdHgpLCAoY3R4ID0gbnVsbClcblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICB0aGlzLmN0eCA9IGN0eCA9IGN0eCB8fCBuZXcgQXVkaW9Db250ZXh0XG5cbiAgaWYgKCEoYXVkaW8gaW5zdGFuY2VvZiBBdWRpb05vZGUpKSB7XG4gICAgYXVkaW8gPSAoYXVkaW8gaW5zdGFuY2VvZiBBdWRpbyB8fCBhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpXG4gICAgICA/IGN0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pXG4gICAgICA6IGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShhdWRpbylcbiAgfVxuXG4gIHRoaXMuYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKVxuICB0aGlzLnN0ZXJlbyAgID0gISFvcHRzLnN0ZXJlb1xuICB0aGlzLmF1ZGlibGUgID0gb3B0cy5hdWRpYmxlICE9PSBmYWxzZVxuICB0aGlzLndhdmVkYXRhID0gbnVsbFxuICB0aGlzLmZyZXFkYXRhID0gbnVsbFxuICB0aGlzLnNwbGl0dGVyID0gbnVsbFxuICB0aGlzLm1lcmdlciAgID0gbnVsbFxuICB0aGlzLnNvdXJjZSAgID0gYXVkaW9cblxuICBpZiAoIXRoaXMuc3RlcmVvKSB7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNvdXJjZVxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5hbmFseXNlcilcbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5hbmFseXNlci5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFuYWx5c2VyID0gW3RoaXMuYW5hbHlzZXJdXG4gICAgdGhpcy5hbmFseXNlci5wdXNoKGN0eC5jcmVhdGVBbmFseXNlcigpKVxuXG4gICAgdGhpcy5zcGxpdHRlciA9IGN0eC5jcmVhdGVDaGFubmVsU3BsaXR0ZXIoMilcbiAgICB0aGlzLm1lcmdlciAgID0gY3R4LmNyZWF0ZUNoYW5uZWxNZXJnZXIoMilcbiAgICB0aGlzLm91dHB1dCAgID0gdGhpcy5tZXJnZXJcblxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5zcGxpdHRlcilcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLnNwbGl0dGVyLmNvbm5lY3QodGhpcy5hbmFseXNlcltpXSwgaSwgMClcbiAgICAgIHRoaXMuYW5hbHlzZXJbaV0uY29ubmVjdCh0aGlzLm1lcmdlciwgMCwgaSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdWRpYmxlKVxuICAgICAgdGhpcy5tZXJnZXIuY29ubmVjdChjdHguZGVzdGluYXRpb24pXG4gIH1cbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUud2F2ZWZvcm0gPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMud2F2ZWRhdGEgfHwgKFxuICAgIHRoaXMud2F2ZWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEob3V0cHV0KVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuV2ViQXVkaW9BbmFseXNlci5wcm90b3R5cGUuZnJlcXVlbmNpZXMgPSBmdW5jdGlvbihvdXRwdXQsIGNoYW5uZWwpIHtcbiAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHRoaXMuZnJlcWRhdGEgfHwgKFxuICAgIHRoaXMuZnJlcWRhdGEgPSBuZXcgVWludDhBcnJheSgodGhpcy5hbmFseXNlclswXSB8fCB0aGlzLmFuYWx5c2VyKS5mcmVxdWVuY3lCaW5Db3VudClcbiAgKVxuXG4gIHZhciBhbmFseXNlciA9IHRoaXMuc3RlcmVvXG4gICAgPyB0aGlzLmFuYWx5c2VyW2NoYW5uZWwgfHwgMF1cbiAgICA6IHRoaXMuYW5hbHlzZXJcblxuICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShvdXRwdXQpXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYi1hdWRpby1hbmFseXNlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJ1ZmZlciA9IHJlcXVpcmUoJy4vbGliL2J1ZmZlci1zb3VyY2UnKVxudmFyIG1lZGlhID0gcmVxdWlyZSgnLi9saWIvbWVkaWEtc291cmNlJylcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWJBdWRpb1BsYXllclxuZnVuY3Rpb24gd2ViQXVkaW9QbGF5ZXIgKHNyYywgb3B0KSB7XG4gIGlmICghc3JjKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHNwZWNpZnkgYSBzcmMgcGFyYW1ldGVyJylcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIGlmIChvcHQuYnVmZmVyKSByZXR1cm4gYnVmZmVyKHNyYywgb3B0KVxuICBlbHNlIHJldHVybiBtZWRpYShzcmMsIG9wdClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBjcmVhdGVBdWRpb0NvbnRleHQgPSByZXF1aXJlKCcuL2F1ZGlvLWNvbnRleHQnKVxudmFyIHhockF1ZGlvID0gcmVxdWlyZSgnLi94aHItYXVkaW8nKVxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIHJpZ2h0Tm93ID0gcmVxdWlyZSgncmlnaHQtbm93JylcbnZhciByZXN1bWUgPSByZXF1aXJlKCcuL3Jlc3VtZS1jb250ZXh0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXJTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlclNvdXJjZSAoc3JjLCBvcHQpIHtcbiAgb3B0ID0gb3B0IHx8IHt9XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIHZhciBhdWRpb0NvbnRleHQgPSBvcHQuY29udGV4dCB8fCBjcmVhdGVBdWRpb0NvbnRleHQoKVxuXG4gIC8vIGEgcGFzcy10aHJvdWdoIG5vZGUgc28gdXNlciBqdXN0IG5lZWRzIHRvXG4gIC8vIGNvbm5lY3QoKSBvbmNlXG4gIHZhciBidWZmZXJOb2RlLCBidWZmZXIsIGR1cmF0aW9uXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgYXVkaW9TdGFydFRpbWUgPSBudWxsXG4gIHZhciBhdWRpb1BhdXNlVGltZSA9IG51bGxcbiAgdmFyIGF1ZGlvQ3VycmVudFRpbWUgPSAwXG4gIHZhciBwbGF5aW5nID0gZmFsc2VcbiAgdmFyIGxvb3AgPSBvcHQubG9vcFxuXG4gIGVtaXR0ZXIucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGxheWluZykgcmV0dXJuXG4gICAgcGxheWluZyA9IHRydWVcblxuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgZGlzcG9zZUJ1ZmZlcigpXG4gICAgYnVmZmVyTm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICAgIGJ1ZmZlck5vZGUuY29ubmVjdChlbWl0dGVyLm5vZGUpXG4gICAgYnVmZmVyTm9kZS5vbmVuZGVkID0gZW5kZWRcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAvLyBNaWdodCBiZSBudWxsIHVuZGVmaW5lZCBpZiB3ZSBhcmUgc3RpbGwgbG9hZGluZ1xuICAgICAgYnVmZmVyTm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICB9XG4gICAgaWYgKGxvb3ApIHtcbiAgICAgIGJ1ZmZlck5vZGUubG9vcCA9IHRydWVcbiAgICAgIGlmICh0eXBlb2Ygb3B0Lmxvb3BTdGFydCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcFN0YXJ0ID0gb3B0Lmxvb3BTdGFydFxuICAgICAgaWYgKHR5cGVvZiBvcHQubG9vcEVuZCA9PT0gJ251bWJlcicpIGJ1ZmZlck5vZGUubG9vcEVuZCA9IG9wdC5sb29wRW5kXG4gICAgfVxuXG4gICAgaWYgKGR1cmF0aW9uICYmIGF1ZGlvQ3VycmVudFRpbWUgPiBkdXJhdGlvbikge1xuICAgICAgLy8gZm9yIHdoZW4gaXQgbG9vcHMuLi5cbiAgICAgIGF1ZGlvQ3VycmVudFRpbWUgPSBhdWRpb0N1cnJlbnRUaW1lICUgZHVyYXRpb25cbiAgICB9XG4gICAgdmFyIG5leHRUaW1lID0gYXVkaW9DdXJyZW50VGltZVxuXG4gICAgYnVmZmVyTm9kZS5zdGFydCgwLCBuZXh0VGltZSlcbiAgICBhdWRpb1N0YXJ0VGltZSA9IHJpZ2h0Tm93KClcbiAgfVxuXG4gIGVtaXR0ZXIucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwbGF5aW5nKSByZXR1cm5cbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICAvLyBEb24ndCBsZXQgdGhlIFwiZW5kXCIgZXZlbnRcbiAgICAvLyBnZXQgdHJpZ2dlcmVkIG9uIG1hbnVhbCBwYXVzZS5cbiAgICBidWZmZXJOb2RlLm9uZW5kZWQgPSBudWxsXG4gICAgYnVmZmVyTm9kZS5zdG9wKDApXG4gICAgYXVkaW9QYXVzZVRpbWUgPSByaWdodE5vdygpXG4gICAgYXVkaW9DdXJyZW50VGltZSArPSAoYXVkaW9QYXVzZVRpbWUgLSBhdWRpb1N0YXJ0VGltZSkgLyAxMDAwXG4gIH1cblxuICBlbWl0dGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgZW1pdHRlci5wYXVzZSgpXG4gICAgZW5kZWQoKVxuICB9XG5cbiAgZW1pdHRlci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGRpc3Bvc2VCdWZmZXIoKVxuICAgIGJ1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGVtaXR0ZXIubm9kZSA9IG5vZGVcbiAgZW1pdHRlci5jb250ZXh0ID0gYXVkaW9Db250ZXh0XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZW1pdHRlciwge1xuICAgIGR1cmF0aW9uOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXlpbmdcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1ZmZlcjoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gc2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2Ygb3B0LnZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IG9wdC52b2x1bWVcbiAgfVxuXG4gIC8vIGZpbHRlciBkb3duIHRvIGEgbGlzdCBvZiBwbGF5YWJsZSBzb3VyY2VzXG4gIHZhciBzb3VyY2VzID0gQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogWyBzcmMgXVxuICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoQm9vbGVhbilcbiAgdmFyIHBsYXlhYmxlID0gc291cmNlcy5zb21lKGNhblBsYXlTcmMpXG4gIGlmIChwbGF5YWJsZSkge1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzLmZpbHRlcihjYW5QbGF5U3JjKVswXVxuICAgIC8vIFN1cHBvcnQgdGhlIHNhbWUgc291cmNlIHR5cGVzIGFzIGluXG4gICAgLy8gTWVkaWFFbGVtZW50IG1vZGUuLi5cbiAgICBpZiAodHlwZW9mIHNvdXJjZS5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlLnNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS5zcmNcbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBhdCBsZWFzdCBvbmUgcGxheWFibGUgc291cmNlLlxuICAgIC8vIEZvciBub3cganVzdCBwbGF5IHRoZSBmaXJzdCxcbiAgICAvLyBpZGVhbGx5IHRoaXMgbW9kdWxlIGNvdWxkIGF0dGVtcHQgZWFjaCBvbmUuXG4gICAgc3RhcnRMb2FkKHNvdXJjZSlcbiAgfSBlbHNlIHtcbiAgICAvLyBubyBzb3VyY2VzIGNhbiBiZSBwbGF5ZWQuLi5cbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGVtaXR0ZXJcblxuICBmdW5jdGlvbiBzdGFydExvYWQgKHNyYykge1xuICAgIHhockF1ZGlvKGF1ZGlvQ29udGV4dCwgc3JjLCBmdW5jdGlvbiBhdWRpb0RlY29kZWQgKGVyciwgZGVjb2RlZCkge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICBidWZmZXIgPSBkZWNvZGVkIC8vIHN0b3JlIGZvciBsYXRlciB1c2VcbiAgICAgIGlmIChidWZmZXJOb2RlKSB7XG4gICAgICAgIC8vIGlmIHBsYXkoKSB3YXMgY2FsbGVkIGVhcmx5XG4gICAgICAgIGJ1ZmZlck5vZGUuYnVmZmVyID0gYnVmZmVyXG4gICAgICB9XG4gICAgICBkdXJhdGlvbiA9IGJ1ZmZlci5kdXJhdGlvblxuICAgICAgbm9kZS5idWZmZXIgPSBidWZmZXJcbiAgICAgIGVtaXR0ZXIuZW1pdCgnbG9hZCcpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9Qcm9ncmVzcyAoYW1vdW50LCB0b3RhbCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdwcm9ncmVzcycsIGFtb3VudCwgdG90YWwpXG4gICAgfSwgZnVuY3Rpb24gYXVkaW9EZWNvZGluZyAoKSB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ2RlY29kaW5nJylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kZWQgKCkge1xuICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICBwbGF5aW5nID0gZmFsc2VcbiAgICBhdWRpb0N1cnJlbnRUaW1lID0gMFxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcG9zZUJ1ZmZlciAoKSB7XG4gICAgaWYgKGJ1ZmZlck5vZGUpIGJ1ZmZlck5vZGUuZGlzY29ubmVjdCgpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi9idWZmZXItc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGFkZE9uY2VcbmZ1bmN0aW9uIGFkZE9uY2UgKGVsZW1lbnQsIGV2ZW50LCBmbikge1xuICBmdW5jdGlvbiB0bXAgKGV2KSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0bXAsIGZhbHNlKVxuICAgIGZuKGV2LCBlbGVtZW50KVxuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdG1wLCBmYWxzZSlcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvZXZlbnQtYWRkLW9uY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXJcbnZhciBjcmVhdGVBdWRpbyA9IHJlcXVpcmUoJ3NpbXBsZS1tZWRpYS1lbGVtZW50JykuYXVkaW9cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxudmFyIHJlc3VtZSA9IHJlcXVpcmUoJy4vcmVzdW1lLWNvbnRleHQnKVxudmFyIGNyZWF0ZUF1ZGlvQ29udGV4dCA9IHJlcXVpcmUoJy4vYXVkaW8tY29udGV4dCcpXG52YXIgY2FuUGxheVNyYyA9IHJlcXVpcmUoJy4vY2FuLXBsYXktc3JjJylcbnZhciBhZGRPbmNlID0gcmVxdWlyZSgnLi9ldmVudC1hZGQtb25jZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTWVkaWFTb3VyY2VcbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhU291cmNlIChzcmMsIG9wdCkge1xuICBvcHQgPSBhc3NpZ24oe30sIG9wdClcbiAgdmFyIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvLyBEZWZhdWx0IHRvIEF1ZGlvIGluc3RlYWQgb2YgSFRNTEF1ZGlvRWxlbWVudFxuICAvLyBUaGVyZSBpcyBub3QgbXVjaCBkaWZmZXJlbmNlIGV4Y2VwdCBpbiB0aGUgZm9sbG93aW5nOlxuICAvLyAgICB4IGluc3RhbmNlb2YgQXVkaW9cbiAgLy8gICAgeCBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnRcbiAgLy8gQW5kIGluIG15IGV4cGVyaWVuY2UgQXVkaW8gaGFzIGJldHRlciBzdXBwb3J0IG9uIHZhcmlvdXNcbiAgLy8gcGxhdGZvcm1zIGxpa2UgQ29jb29uSlMuXG4gIC8vIFBsZWFzZSBvcGVuIGFuIGlzc3VlIGlmIHRoZXJlIGlzIGEgY29uY2VybiB3aXRoIHRoaXMuXG4gIGlmICghb3B0LmVsZW1lbnQpIG9wdC5lbGVtZW50ID0gbmV3IHdpbmRvdy5BdWRpbygpXG5cbiAgdmFyIGRlc2lyZWRWb2x1bWUgPSBvcHQudm9sdW1lXG4gIGRlbGV0ZSBvcHQudm9sdW1lIC8vIG1ha2Ugc3VyZSA8YXVkaW8+IHRhZyByZWNlaXZlcyBmdWxsIHZvbHVtZVxuICB2YXIgYXVkaW8gPSBjcmVhdGVBdWRpbyhzcmMsIG9wdClcbiAgdmFyIGF1ZGlvQ29udGV4dCA9IG9wdC5jb250ZXh0IHx8IGNyZWF0ZUF1ZGlvQ29udGV4dCgpXG4gIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICB2YXIgbWVkaWFOb2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbylcbiAgbWVkaWFOb2RlLmNvbm5lY3Qobm9kZSlcblxuICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2VuZCcpXG4gIH0pXG4gIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJQTEFZXCIpXG4gIH0pXG5cbiAgdmFyIGxvb3BTdGFydCA9IG9wdC5sb29wU3RhcnRcbiAgdmFyIGxvb3BFbmQgPSBvcHQubG9vcEVuZFxuICB2YXIgaGFzTG9vcFN0YXJ0ID0gdHlwZW9mIGxvb3BTdGFydCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobG9vcFN0YXJ0KVxuICB2YXIgaGFzTG9vcEVuZCA9IHR5cGVvZiBsb29wRW5kID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShsb29wRW5kKVxuICB2YXIgaXNMb29wUmVhZHkgPSBmYWxzZVxuICBpZiAoaGFzTG9vcFN0YXJ0IHx8IGhhc0xvb3BFbmQpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgICAvLyBhdWRpbyBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0Li4uXG4gICAgICBpZiAodHlwZW9mIGF1ZGlvLmR1cmF0aW9uICE9PSAnbnVtYmVyJykgcmV0dXJuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBhdWRpby5jdXJyZW50VGltZVxuXG4gICAgICAvLyB3aGVyZSB0byBlbmQgdGhlIGJ1ZmZlclxuICAgICAgdmFyIGVuZFRpbWUgPSBoYXNMb29wRW5kID8gTWF0aC5taW4oYXVkaW8uZHVyYXRpb24sIGxvb3BFbmQpIDogYXVkaW8uZHVyYXRpb25cblxuICAgICAgaWYgKGN1cnJlbnRUaW1lID4gKGxvb3BTdGFydCB8fCAwKSkge1xuICAgICAgICBpc0xvb3BSZWFkeSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8ganVtcCBhaGVhZCB0byBsb29wIHN0YXJ0IHBvaW50XG4gICAgICBpZiAoaGFzTG9vcFN0YXJ0ICYmIGlzTG9vcFJlYWR5ICYmIGN1cnJlbnRUaW1lIDwgbG9vcFN0YXJ0KSB7XG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gbG9vcFN0YXJ0XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlJ3ZlIGhpdCB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGxvb3AgZW5kIHBvaW50LCBsZXQgbmF0aXZlIGxvb3BpbmcgdGFrZSBvdmVyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBsb29wIGVuZCBwb2ludCwganVtcCBiYWNrIHRvIHN0YXJ0IHBvaW50IG9yIHplcm9cbiAgICAgICAgaWYgKGhhc0xvb3BFbmQpIHtcbiAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGhhc0xvb3BTdGFydCA/IGxvb3BTdGFydCA6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXG4gICAgfSk7XG4gIH1cblxuICBlbWl0dGVyLmVsZW1lbnQgPSBhdWRpb1xuICBlbWl0dGVyLmNvbnRleHQgPSBhdWRpb0NvbnRleHRcbiAgZW1pdHRlci5ub2RlID0gbm9kZVxuICBlbWl0dGVyLnBhdXNlID0gYXVkaW8ucGF1c2UuYmluZChhdWRpbylcbiAgZW1pdHRlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHQuYXV0b1Jlc3VtZSAhPT0gZmFsc2UpIHJlc3VtZShlbWl0dGVyLmNvbnRleHQpXG4gICAgcmV0dXJuIGF1ZGlvLnBsYXkoKVxuICB9XG5cbiAgLy8gVGhpcyBleGlzdHMgY3VycmVudGx5IGZvciBwYXJpdHkgd2l0aCBCdWZmZXIgc291cmNlXG4gIC8vIE9wZW4gdG8gc3VnZ2VzdGlvbnMgZm9yIHdoYXQgdGhpcyBzaG91bGQgZGlzcG9zZS4uLlxuICBlbWl0dGVyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7fVxuXG4gIGVtaXR0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2FzUGxheWluZyA9IGVtaXR0ZXIucGxheWluZ1xuICAgIGF1ZGlvLnBhdXNlKClcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDBcbiAgICBpc0xvb3BSZWFkeSA9IGZhbHNlXG4gICAgaWYgKHdhc1BsYXlpbmcpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZW5kJylcbiAgICB9XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbWl0dGVyLCB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXVkaW8uZHVyYXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbnRUaW1lOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGF1ZGlvLmN1cnJlbnRUaW1lXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGF5aW5nOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICFhdWRpby5wYXVzZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHVtZToge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub2RlLmdhaW4udmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIG5vZGUuZ2Fpbi52YWx1ZSA9IG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gU2V0IGluaXRpYWwgdm9sdW1lXG4gIGlmICh0eXBlb2YgZGVzaXJlZFZvbHVtZSA9PT0gJ251bWJlcicpIHtcbiAgICBlbWl0dGVyLnZvbHVtZSA9IGRlc2lyZWRWb2x1bWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFsbCBzb3VyY2VzIGFyZSB1bnBsYXlhYmxlLFxuICAvLyBpZiBzbyB3ZSBlbWl0IGFuIGVycm9yIHNpbmNlIHRoZSBicm93c2VyXG4gIC8vIG1pZ2h0IG5vdC5cbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbIHNyYyBdXG4gIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihCb29sZWFuKVxuICB2YXIgcGxheWFibGUgPSBzb3VyY2VzLnNvbWUoY2FuUGxheVNyYylcbiAgaWYgKHBsYXlhYmxlKSB7XG4gICAgLy8gQXQgbGVhc3Qgb25lIHNvdXJjZSBpcyBwcm9iYWJseS9tYXliZSBwbGF5YWJsZVxuICAgIHN0YXJ0TG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gZW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gdXNlciBjYW4gY2F0Y2ggaXRcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBjYW5QbGF5U3JjLmNyZWF0ZUVycm9yKHNvdXJjZXMpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZW1pdHRlclxuXG4gIGZ1bmN0aW9uIHN0YXJ0TG9hZCAoKSB7XG4gICAgLy8gVGhlIGZpbGUgZXJyb3JzIChsaWtlIGRlY29kaW5nIC8gNDA0cykgYXBwZWFyIG9uIDxzb3VyY2U+XG4gICAgdmFyIHNyY0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXVkaW8uY2hpbGRyZW4pXG4gICAgdmFyIHJlbWFpbmluZ1NyY0Vycm9ycyA9IHNyY0VsZW1lbnRzLmxlbmd0aFxuICAgIHZhciBoYXNFcnJvcmVkID0gZmFsc2VcbiAgICB2YXIgc291cmNlRXJyb3IgPSBmdW5jdGlvbiAoZXJyLCBlbCkge1xuICAgICAgaWYgKGhhc0Vycm9yZWQpIHJldHVyblxuICAgICAgcmVtYWluaW5nU3JjRXJyb3JzLS1cbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgbG9hZGluZyBzb3VyY2U6ICcgKyBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpKVxuICAgICAgaWYgKHJlbWFpbmluZ1NyY0Vycm9ycyA8PSAwKSB7XG4gICAgICAgIGhhc0Vycm9yZWQgPSB0cnVlXG4gICAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VyY2VFcnJvciwgZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwbGF5IGFueSBvZiB0aGUgc3VwcGxpZWQgc291cmNlcycpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5lbWl0KCdsb2FkJylcbiAgICB9XG5cbiAgICBpZiAoYXVkaW8ucmVhZHlTdGF0ZSA+PSBhdWRpby5IQVZFX0VOT1VHSF9EQVRBKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGRvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdjYW5wbGF5JywgZG9uZSlcbiAgICAgIGFkZE9uY2UoYXVkaW8sICdlcnJvcicsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBlbWl0dGVyLmVtaXQobmV3IEVycm9yKCdVbmtub3duIGVycm9yIHdoaWxlIGxvYWRpbmcgPGF1ZGlvPicpKVxuICAgICAgfSlcbiAgICAgIHNyY0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGFkZE9uY2UoZWwsICdlcnJvcicsIHNvdXJjZUVycm9yKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBPbiBtb3N0IGJyb3dzZXJzIHRoZSBsb2FkaW5nIGJlZ2luc1xuICAgIC8vIGltbWVkaWF0ZWx5LiBIb3dldmVyLCBvbiBpT1MgOS4yIFNhZmFyaSxcbiAgICAvLyB5b3UgbmVlZCB0byBjYWxsIGxvYWQoKSBmb3IgZXZlbnRzXG4gICAgLy8gdG8gYmUgdHJpZ2dlcmVkLlxuICAgIGF1ZGlvLmxvYWQoKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2ViLWF1ZGlvLXBsYXllci9saWIvbWVkaWEtc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgeGhyID0gcmVxdWlyZSgneGhyJylcbnZhciB4aHJQcm9ncmVzcyA9IHJlcXVpcmUoJ3hoci1wcm9ncmVzcycpXG5cbm1vZHVsZS5leHBvcnRzID0geGhyQXVkaW9cbmZ1bmN0aW9uIHhockF1ZGlvIChhdWRpb0NvbnRleHQsIHNyYywgY2IsIHByb2dyZXNzLCBkZWNvZGluZykge1xuICB2YXIgeGhyT2JqZWN0ID0geGhyKHtcbiAgICB1cmk6IHNyYyxcbiAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcidcbiAgfSwgZnVuY3Rpb24gKGVyciwgcmVzcCwgYXJyYXlCdWYpIHtcbiAgICBpZiAoIS9eMi8udGVzdChyZXNwLnN0YXR1c0NvZGUpKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ3N0YXR1cyBjb2RlICcgKyByZXNwLnN0YXR1c0NvZGUgKyAnIHJlcXVlc3RpbmcgJyArIHNyYylcbiAgICB9XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBkZWNvZGUoYXJyYXlCdWYpXG4gIH0pXG5cbiAgeGhyUHJvZ3Jlc3MoeGhyT2JqZWN0KVxuICAgIC5vbignZGF0YScsIGZ1bmN0aW9uIChhbW91bnQsIHRvdGFsKSB7XG4gICAgICBwcm9ncmVzcyhhbW91bnQsIHRvdGFsKVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gZGVjb2RlIChhcnJheUJ1Zikge1xuICAgIGRlY29kaW5nKClcbiAgICBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmLCBmdW5jdGlvbiAoZGVjb2RlZCkge1xuICAgICAgY2IobnVsbCwgZGVjb2RlZClcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdFcnJvciBkZWNvZGluZyBhdWRpbyBkYXRhJylcbiAgICAgIGVyci50eXBlID0gJ0RFQ09ERV9BVURJT19EQVRBJ1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWItYXVkaW8tcGxheWVyL2xpYi94aHItYXVkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIFBIT05HXFxuXFxudmFyeWluZyB2ZWMzIHZWaWV3UG9zaXRpb247XFxudmFyeWluZyB2ZWMyIHZVdjtcXG51bmlmb3JtIGZsb2F0IHVUaW1lO1xcblxcbiNpZm5kZWYgRkxBVF9TSEFERURcXG5cXG4gICAgdmFyeWluZyB2ZWMzIHZOb3JtYWw7XFxuXFxuI2VuZGlmXFxuXFxuI2luY2x1ZGUgPGNvbW1vbj5cXG4jaW5jbHVkZSA8dXZfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHV2Ml9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8ZGlzcGxhY2VtZW50bWFwX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxlbnZtYXBfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGNvbG9yX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxmb2dfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPG1vcnBodGFyZ2V0X3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxza2lubmluZ19wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8c2hhZG93bWFwX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3BhcnNfdmVydGV4PlxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgI2luY2x1ZGUgPHV2X3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHV2Ml92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxjb2xvcl92ZXJ0ZXg+XFxuXFxuICAgICNpbmNsdWRlIDxiZWdpbm5vcm1hbF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxtb3JwaG5vcm1hbF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxza2luYmFzZV92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxza2lubm9ybWFsX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPGRlZmF1bHRub3JtYWxfdmVydGV4PlxcblxcbiNpZm5kZWYgRkxBVF9TSEFERUQgLy8gTm9ybWFsIGNvbXB1dGVkIHdpdGggZGVyaXZhdGl2ZXMgd2hlbiBGTEFUX1NIQURFRFxcblxcbiAgICB2Tm9ybWFsID0gbm9ybWFsaXplKCB0cmFuc2Zvcm1lZE5vcm1hbCApO1xcblxcbiNlbmRpZlxcblxcbiAgICAjaW5jbHVkZSA8YmVnaW5fdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8ZGlzcGxhY2VtZW50bWFwX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPG1vcnBodGFyZ2V0X3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNraW5uaW5nX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHByb2plY3RfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8bG9nZGVwdGhidWZfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3ZlcnRleD5cXG5cXG4gICAgdlZpZXdQb3NpdGlvbiA9IC0gbXZQb3NpdGlvbi54eXo7XFxuICAgIHZVdiA9IHV2O1xcblxcbiAgICAjaW5jbHVkZSA8d29ybGRwb3NfdmVydGV4PlxcbiAgICAjaW5jbHVkZSA8ZW52bWFwX3ZlcnRleD5cXG4gICAgI2luY2x1ZGUgPHNoYWRvd21hcF92ZXJ0ZXg+XFxuICAgICNpbmNsdWRlIDxmb2dfdmVydGV4Plxcblxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2N1c3RvbS9zaGFkZXJzL2JvdHRvbS52ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIFBIT05HXFxuI2RlZmluZSBNX1BJIDMuMTRcXG5cXG51bmlmb3JtIHZlYzMgZGlmZnVzZTtcXG51bmlmb3JtIHZlYzMgZW1pc3NpdmU7XFxudW5pZm9ybSB2ZWMzIHNwZWN1bGFyO1xcbnVuaWZvcm0gZmxvYXQgc2hpbmluZXNzO1xcbnVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcXG5cXG51bmlmb3JtIGZsb2F0IHVUaW1lO1xcbnVuaWZvcm0gdmVjMyB1U3RyaXBlT3JpZW50YXRpb247XFxudW5pZm9ybSBmbG9hdCB1SW52ZXJ0O1xcbnVuaWZvcm0gdmVjMyB1U3F1YXJlO1xcbnVuaWZvcm0gZmxvYXQgdVdpZHRoO1xcbnVuaWZvcm0gZmxvYXQgdUhlaWdodDtcXG51bmlmb3JtIGZsb2F0IHVMZW5ndGg7XFxudW5pZm9ybSBmbG9hdCB1UHJvZ3Jlc3M7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDxwYWNraW5nPlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1dl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1djJfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGFscGhhbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGFvbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGxpZ2h0bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGVtaXNzaXZlbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGVudm1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxncmFkaWVudG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxmb2dfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8YnNkZnM+XFxuI2luY2x1ZGUgPGxpZ2h0c19wYXJzPlxcbiNpbmNsdWRlIDxsaWdodHNfcGhvbmdfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8c2hhZG93bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGJ1bXBtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bm9ybWFsbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPHNwZWN1bGFybWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc19wYXJzX2ZyYWdtZW50PlxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gICAgI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc19mcmFnbWVudD5cXG5cXG4gICAgdmVjNCBkaWZmdXNlQ29sb3IgPSB2ZWM0KCBkaWZmdXNlLCBvcGFjaXR5ICk7XFxuICAgIFJlZmxlY3RlZExpZ2h0IHJlZmxlY3RlZExpZ2h0ID0gUmVmbGVjdGVkTGlnaHQoIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICksIHZlYzMoIDAuMCApICk7XFxuICAgIHZlYzMgdG90YWxFbWlzc2l2ZVJhZGlhbmNlID0gZW1pc3NpdmU7XFxuXFxuICAgICNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPG1hcF9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGNvbG9yX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8YWxwaGFtYXBfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxhbHBoYXRlc3RfZnJhZ21lbnQ+XFxuICAgICNpbmNsdWRlIDxzcGVjdWxhcm1hcF9mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPG5vcm1hbF9mbGlwPlxcbiAgICAjaW5jbHVkZSA8bm9ybWFsX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8ZW1pc3NpdmVtYXBfZnJhZ21lbnQ+XFxuXFxuICAgIC8vIGFjY3VtdWxhdGlvblxcbiAgICAjaW5jbHVkZSA8bGlnaHRzX3Bob25nX2ZyYWdtZW50PlxcbiAgICAjaW5jbHVkZSA8bGlnaHRzX3RlbXBsYXRlPlxcblxcbiAgICAvLyBtb2R1bGF0aW9uXFxuICAgICNpbmNsdWRlIDxhb21hcF9mcmFnbWVudD5cXG5cXG4gICAgdmVjMyBvdXRnb2luZ0xpZ2h0ID0gcmVmbGVjdGVkTGlnaHQuZGlyZWN0RGlmZnVzZSArIHJlZmxlY3RlZExpZ2h0LmluZGlyZWN0RGlmZnVzZSArIHJlZmxlY3RlZExpZ2h0LmRpcmVjdFNwZWN1bGFyICsgcmVmbGVjdGVkTGlnaHQuaW5kaXJlY3RTcGVjdWxhciArIHRvdGFsRW1pc3NpdmVSYWRpYW5jZTtcXG5cXG4gICAgI2luY2x1ZGUgPGVudm1hcF9mcmFnbWVudD5cXG5cXG4gICAgdmVjNCBjb2xvciA9IHZlYzQob3V0Z29pbmdMaWdodCwgZGlmZnVzZUNvbG9yLmEgKTtcXG5cXG4gICAgZmxvYXQgYWJzWCA9IGZsb29yKC1jb3MoKHVUaW1lICogMC4xICsgTV9QSSAqIHVTcXVhcmUueCAqICggKCB2VXYueCArIHVQcm9ncmVzcyArIDAuMTUgKSAqIDIuIC0gMS4gKSAqIDAuNSkpKSArIDEuO1xcbiAgICBmbG9hdCBhYnNZID0gZmxvb3IoLWNvcygoTV9QSSAqIHVTcXVhcmUueSAqICggdlV2LnkgKiAyLiAtIDEuICkgKiAwLjUpKSkgKyAxLjtcXG5cXG4gICAgaWYgKCBhYnNYID4gMC4gfHwgYWJzWSA+IDAuICkge1xcbiAgICAgICBjb2xvciA9IHZlYzQodmVjMygxLjAgLSB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgY29sb3IgPSB2ZWM0KHZlYzMoMC4wICsgdUludmVydCksIGRpZmZ1c2VDb2xvci5hKTsgIFxcbiAgICB9XFxuXFxuICAgIC8vIGNvbG9yID0gdlV2LnggPiAxLiAtIHVQcm9ncmVzcyAgPyB2ZWM0KHZlYzMoMS4wIC0gdUludmVydCksIGRpZmZ1c2VDb2xvci5hKSA6IHZlYzQodmVjMygwLjAgKyB1SW52ZXJ0KSwgZGlmZnVzZUNvbG9yLmEpO1xcbiAgICBcXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3I7XFxuXFxuICAgICNpbmNsdWRlIDx0b25lbWFwcGluZ19mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGVuY29kaW5nc19mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPGZvZ19mcmFnbWVudD5cXG4gICAgI2luY2x1ZGUgPHByZW11bHRpcGxpZWRfYWxwaGFfZnJhZ21lbnQ+XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY3VzdG9tL3NoYWRlcnMvcHJvZ3Jlc3MuZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZ3Jlc3NcblxuZnVuY3Rpb24gcHJvZ3Jlc3MoeGhyKSB7XG4gIHZhciBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlclxuICB2YXIgZmluaXNoZWQgPSBmYWxzZVxuXG4gIGlmICh4aHIuYXR0YWNoRXZlbnQpIHtcbiAgICB4aHIuYXR0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGRvbmUpXG4gICAgcmV0dXJuIGVtaXR0ZXJcbiAgfVxuXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSwgZmFsc2UpXG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzLCBmYWxzZSlcbiAgZnVuY3Rpb24gcHJvZ3Jlc3MoZXZlbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlXG4gICAgICA/IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsXG4gICAgICA6IDBcblxuICAgIGlmICghZmluaXNoZWQpIGVtaXR0ZXIuZW1pdCgnZGF0YSdcbiAgICAgICwgdmFsdWVcbiAgICAgICwgZXZlbnQudG90YWwgfHwgbnVsbFxuICAgIClcblxuICAgIGZpbmlzaGVkID0gdmFsdWUgPT09IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSAhPT0gJ2xvYWQnICYmICEvXihyZWFkeXxjb21wbGV0ZSkkL2cudGVzdChcbiAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnJlYWR5U3RhdGVcbiAgICApKSByZXR1cm5cblxuICAgIGlmIChmaW5pc2hlZCkgcmV0dXJuXG4gICAgaWYgKHhoci5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRvbmUsIGZhbHNlKVxuICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MsIGZhbHNlKVxuICAgIH0gZWxzZVxuICAgIGlmICh4aHIuZGV0YXRjaEV2ZW50KSB7XG4gICAgICB4aHIuZGV0YXRjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCBkb25lKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgnZGF0YScsIDEsIGV2ZW50LnRvdGFsIHx8IG51bGwpXG4gICAgZW1pdHRlci5lbWl0KCdkb25lJylcbiAgICBmaW5pc2hlZCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34veGhyLXByb2dyZXNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciB3aW5kb3cgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKFwiaXMtZnVuY3Rpb25cIilcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKFwicGFyc2UtaGVhZGVyc1wiKVxudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlWEhSXG5jcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcFxuY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0ID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiAobmV3IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCgpKSA/IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA6IHdpbmRvdy5YRG9tYWluUmVxdWVzdFxuXG5mb3JFYWNoQXJyYXkoW1wiZ2V0XCIsIFwicHV0XCIsIFwicG9zdFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgY3JlYXRlWEhSW21ldGhvZCA9PT0gXCJkZWxldGVcIiA/IFwiZGVsXCIgOiBtZXRob2RdID0gZnVuY3Rpb24odXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iail7XG4gICAgZm9yKHZhciBpIGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJhbXMgPSB1cmlcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyYW1zID0ge3VyaTp1cml9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB4dGVuZChvcHRpb25zLCB7dXJpOiB1cml9KVxuICAgIH1cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHBhcmFtc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVhIUihvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2JPbmNlKGVyciwgcmVzcG9uc2UsIGJvZHkpe1xuICAgICAgICBpZighY2FsbGVkKXtcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2soZXJyLCByZXNwb25zZSwgYm9keSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkRnVuYywgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIC8vIENocm9tZSB3aXRoIHJlcXVlc3RUeXBlPWJsb2IgdGhyb3dzIGVycm9ycyBhcnJvdW5kIHdoZW4gZXZlbiB0ZXN0aW5nIGFjY2VzcyB0byByZXNwb25zZVRleHRcbiAgICAgICAgdmFyIGJvZHkgPSB1bmRlZmluZWRcblxuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlVGV4dCB8fCBnZXRYbWwoeGhyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGV2dCwgZmFpbHVyZVJlc3BvbnNlKVxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSAmIHByb2Nlc3MgdGhlIHJlc3BvbnNlIGluIGEgc3BlY2lhbCByZXNwb25zZSBvYmplY3RcbiAgICBmdW5jdGlvbiBsb2FkRnVuYygpIHtcbiAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICB2YXIgc3RhdHVzXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKG9wdGlvbnMudXNlWERSICYmIHhoci5zdGF0dXM9PT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vSUU4IENPUlMgR0VUIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZG9lc24ndCBoYXZlIGEgc3RhdHVzIGZpZWxkLCBidXQgYm9keSBpcyBmaW5lXG4gICAgICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICh4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBmYWlsdXJlUmVzcG9uc2VcbiAgICAgICAgdmFyIGVyciA9IG51bGxcblxuICAgICAgICBpZiAoc3RhdHVzICE9PSAwKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IGdldEJvZHkoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgICAgdXJsOiB1cmksXG4gICAgICAgICAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKXsgLy9yZW1lbWJlciB4aHIgY2FuIGluIGZhY3QgYmUgWERSIGZvciBDT1JTIGluIElFXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycyA9IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoXCJJbnRlcm5hbCBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGFcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luY1xuICAgIHZhciBpc0pzb24gPSBmYWxzZVxuICAgIHZhciB0aW1lb3V0VGltZXJcbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgdXJsOiB1cmksXG4gICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgIH1cblxuICAgIGlmIChcImpzb25cIiBpbiBvcHRpb25zICYmIG9wdGlvbnMuanNvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24gPT09IHRydWUgPyBib2R5IDogb3B0aW9ucy5qc29uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlYWR5c3RhdGVjaGFuZ2VcbiAgICB4aHIub25sb2FkID0gbG9hZEZ1bmNcbiAgICB4aHIub25lcnJvciA9IGVycm9yRnVuY1xuICAgIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb24uXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElFIG11c3QgZGllXG4gICAgfVxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHhoci5vbnRpbWVvdXQgPSBlcnJvckZ1bmNcbiAgICB4aHIub3BlbihtZXRob2QsIHVyaSwgIXN5bmMsIG9wdGlvbnMudXNlcm5hbWUsIG9wdGlvbnMucGFzc3dvcmQpXG4gICAgLy9oYXMgdG8gYmUgYWZ0ZXIgb3BlblxuICAgIGlmKCFzeW5jKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzXG4gICAgfVxuICAgIC8vIENhbm5vdCBzZXQgdGltZW91dCB3aXRoIHN5bmMgcmVxdWVzdFxuICAgIC8vIG5vdCBzZXR0aW5nIHRpbWVvdXQgb24gdGhlIHhociBvYmplY3QsIGJlY2F1c2Ugb2Ygb2xkIHdlYmtpdHMgZXRjLiBub3QgaGFuZGxpbmcgdGhhdCBjb3JyZWN0bHlcbiAgICAvLyBib3RoIG5wbSdzIHJlcXVlc3QgYW5kIGpxdWVyeSAxLnggdXNlIHRoaXMga2luZCBvZiB0aW1lb3V0LCBzbyB0aGlzIGlzIGJlaW5nIGNvbnNpc3RlbnRcbiAgICBpZiAoIXN5bmMgJiYgb3B0aW9ucy50aW1lb3V0ID4gMCApIHtcbiAgICAgICAgdGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICAgICAgYWJvcnRlZCA9IHRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgLy8gTWljcm9zb2Z0IEVkZ2UgYnJvd3NlciBzZW5kcyBcInVuZGVmaW5lZFwiIHdoZW4gc2VuZCBpcyBjYWxsZWQgd2l0aCB1bmRlZmluZWQgdmFsdWUuXG4gICAgLy8gWE1MSHR0cFJlcXVlc3Qgc3BlYyBzYXlzIHRvIHBhc3MgbnVsbCBhcyBib2R5IHRvIGluZGljYXRlIG5vIGJvZHlcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25hdWd0dXIveGhyL2lzc3Vlcy8xMDAuXG4gICAgeGhyLnNlbmQoYm9keSB8fCBudWxsKVxuXG4gICAgcmV0dXJuIHhoclxuXG5cbn1cblxuZnVuY3Rpb24gZ2V0WG1sKHhocikge1xuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cbiAgICB2YXIgZmlyZWZveEJ1Z1Rha2VuRWZmZWN0ID0geGhyLnJlc3BvbnNlWE1MICYmIHhoci5yZXNwb25zZVhNTC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09IFwicGFyc2VyZXJyb3JcIlxuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcIlwiICYmICFmaXJlZm94QnVnVGFrZW5FZmZlY3QpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3hoci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi94dGVuZC9pbW11dGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=