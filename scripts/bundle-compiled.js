"use strict";

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	var _ChoiceHandler = __webpack_require__(1);

	var _ChoiceHandler2 = _interopRequireDefault(_ChoiceHandler);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	} /**
    AUTHOR: Joe Barbercheck
    VERSION: 1.0
    CREATED: 2-12-16
    ASSIGNMENT: Text Adventure
    document.getElementById("reply1").addEventListener("click", function() {
               window.alert("Hello World")
           });
    */

	"use strict";

	var main = function main() {
		_classCallCheck(this, main);
	};

	window.onload = function () {
		new main();
		new _ChoiceHandler2.default().getReply();
	};

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	/**
  AUTHOR: Joe Barbercheck
  VERSION: 1.0
  CREATED: 2-12-16
  ASSIGNMENT: Text Adventure
  document.getElementbyId ()
  */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _SceneChanger = __webpack_require__(2);

	var _SceneChanger2 = _interopRequireDefault(_SceneChanger);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var ChoiceHandler = function () {
		function ChoiceHandler() {
			_classCallCheck(this, ChoiceHandler);
		}

		_createClass(ChoiceHandler, [{
			key: "getReply",
			value: function getReply() {
				var sceneChanger = new _SceneChanger2.default();
				var choiceHandler = new ChoiceHandler();

				var reply1 = document.getElementById("reply1").addEventListener("click", function () {
					var choice = true;
					sceneChanger.pullScene1Data(choice);
				});
				var reply2 = document.getElementById("reply2").addEventListener("click", function () {
					var choice = false;
					sceneChanger.pullScene1Data(choice);
				});
			}
		}]);

		return ChoiceHandler;
	}();

	exports.default = ChoiceHandler;

	/***/
},
/* 2 */
/***/function (module, exports) {

	/**
  AUTHOR: Joe Barbercheck
  VERSION: 1.0
  CREATED: 2-12-16
  ASSIGNMENT: Text Adventure
  document.getElementbyId ()
  */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var SceneChanger = function () {
		function SceneChanger() {
			_classCallCheck(this, SceneChanger);

			SceneLoader.loadData("data/ChoiceRemainSilent.csv", sceneChanger.createScene);
		}

		_createClass(SceneChanger, [{
			key: "createScene",
			value: function createScene() {
				var sceneChanger = new SceneChanger();
			}
		}, {
			key: "pullScene1Data",
			value: function pullScene1Data(choice) {
				if (choice == true) {
					window.alert("silence");
				} else if (choice == false) {
					window.alert("idk what you doin her bb");
				}
			}
		}]);

		return SceneChanger;
	}();

	exports.default = SceneChanger;

	/***/
}
/******/]);

//# sourceMappingURL=bundle-compiled.js.map