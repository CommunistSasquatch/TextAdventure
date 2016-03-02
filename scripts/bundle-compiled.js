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

	/**
  AUTHOR: Joe Barbercheck
  VERSION: 1.0
  CREATED: 2-12-16
  ASSIGNMENT: Text Adventure
  Main
  */

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
	}

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
  Choice handler
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
				var counter = 0;

				var reply1 = document.getElementById("reply1").addEventListener("click", function () {
					var choice = true;
					sceneChanger.selectScene(choice, counter);
					counter++;
				});
				var reply2 = document.getElementById("reply2").addEventListener("click", function () {
					var choice = false;
					sceneChanger.selectScene(choice, counter);
					counter = 0;
				});
			}
		}]);

		return ChoiceHandler;
	}();

	exports.default = ChoiceHandler;

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	/**
  AUTHOR: Joe Barbercheck
  VERSION: 1.0
  CREATED: 2-12-16
  ASSIGNMENT: Text Adventure
  Scene Changer
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

	var _FileIO = __webpack_require__(!function webpackMissingModule() {
		var e = new Error("Cannot find module \"./FileIO.js\"");e.code = 'MODULE_NOT_FOUND';throw e;
	}());

	var _FileIO2 = _interopRequireDefault(_FileIO);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var SceneChanger = function () {
		function SceneChanger() {
			_classCallCheck(this, SceneChanger);
		}

		_createClass(SceneChanger, [{
			key: "createScene",
			value: function createScene() {
				SceneChanger.loadData("data/ChoiceRemainSilent.csv", SceneChanger.createScene);
				SceneChanger.loadData("data/ChoiceWhyHere.csv", SceneChanger.createScene);
			}
		}, {
			key: "selectScene",
			value: function selectScene(choice, counter) {
				var fileIO = new _FileIO2.default();
				var CHOICE2 = 1;
				var scene = undefined;
				if (choice == true && counter == 0) {
					scene = "./data/ChoiceWhyHere.csv";
					fileIO.pullSceneData(scene);
				} else if (choice == false && counter == 0) {
					scene = "./data/ChoiceRemainSilent.csv";
					fileIO.pullSceneData(scene);
				} else if (choice == true && counter == CHOICE2) {
					scene = "./data/ChoiceLetsGo.csv";
					fileIO.pullSceneData(scene);
				} else if (choice == false && counter == CHOICE2) {
					scene = "./data/ChoiceLetsStay.csv";
					fileIO.pullSceneData(scene);
				}
			}
		}, {
			key: "changeScene1",
			value: function changeScene1(fileData) {
				var VOICE = 0;
				var SUBTITLE = 1;
				var BUTTON = 2;
				document.getElementById('voice').innerHTML = fileData[VOICE];
				document.getElementById('intro').innerHTML = fileData[SUBTITLE];
				document.getElementById('reply1').value = fileData[BUTTON];
				document.getElementById('reply2').style.visibility = 'hidden';
			}
		}, {
			key: "changeScene2",
			value: function changeScene2(fileData) {
				var VOICE = 0;
				var SUBTITLE = 1;
				var BUTTON1 = 2;
				var BUTTON2 = 3;
				document.getElementById('voice').innerHTML = fileData[VOICE];
				document.getElementById('intro').innerHTML = fileData[SUBTITLE];
				document.getElementById('reply1').value = fileData[BUTTON1];
				document.getElementById('reply2').value = fileData[BUTTON2];
			}
		}]);

		return SceneChanger;
	}();

	exports.default = SceneChanger;

	/***/
}
/******/]);

//# sourceMappingURL=bundle-compiled.js.map