/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 AUTHOR: Joe Barbercheck
	 VERSION: 1.0
	 CREATED: 2-12-16
	 ASSIGNMENT: Text Adventure
	 document.getElementbyId ()
	 */

	"use strict";

	var _ChoiceHandler = __webpack_require__(1);

	var _ChoiceHandler2 = _interopRequireDefault(_ChoiceHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function main() {
	    _classCallCheck(this, main);
	};

	window.onload = function () {
	    new main();
	    new _ChoiceHandler2.default().getReply();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SceneChanger = __webpack_require__(2);

	var _SceneChanger2 = _interopRequireDefault(_SceneChanger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ },
/* 2 */
/***/ function(module, exports) {

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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneChanger = function () {
	    function SceneChanger() {
	        _classCallCheck(this, SceneChanger);
	    }

	    _createClass(SceneChanger, [{
	        key: "createScene",
	        value: function createScene() {
	            var sceneChanger = new SceneChanger();
	            sceneChanger.loadData("data/ChoiceRemainSilent.csv", sceneChanger.createScene);
	            sceneChanger.loadData("data/ChoiceWhyHere.csv", sceneChanger.createScene);
	        }
	    }, {
	        key: "pullScene1Data",
	        value: function pullScene1Data(choice) {
	            var sceneChanger = new SceneChanger();
	            var VOICE = 0;
	            var SUBTITLE = 1;
	            var BUTTON = 2;
	            if (choice == true) {
	                (function () {
	                    var request = new XMLHttpRequest();
	                    request.open("GET", "./data/ChoiceRemainSilent.csv", true);
	                    request.send();
	                    request.onload = function () {
	                        var COLUMNS = 2;

	                        var data = undefined,
	                            middleData = undefined,
	                            fileData = [];
	                        if (request.readyState === 4 && request.status === 200) {
	                            data = request.responseText.split(/\n/);
	                        }
	                        for (var i = 0; i < data.length; i++) {
	                            middleData = data[i].split(/\n/);
	                            fileData[i] = []; //makes it an MD array
	                            for (var j = 0; j < COLUMNS; j++) {
	                                fileData[i][j] = middleData[j];
	                            }
	                        }
	                        sceneChanger.changeScene1(fileData);
	                    };
	                })();
	            } else if (choice == false) {
	                (function () {
	                    var request = new XMLHttpRequest();
	                    request.open("GET", "./data/ChoiceWhyHere.csv", true);
	                    request.send();
	                    request.onload = function () {
	                        var COLUMNS = 2;

	                        var data = undefined,
	                            middleData = undefined,
	                            fileData = [];
	                        if (request.readyState === 4 && request.status === 200) {
	                            data = request.responseText.split(/\n/);
	                        }
	                        for (var i = 0; i < data.length; i++) {
	                            middleData = data[i].split(/\n/);
	                            fileData[i] = []; //makes it an MD array
	                            for (var j = 0; j < COLUMNS; j++) {
	                                fileData[i][j] = middleData[j];
	                            }
	                        }
	                        sceneChanger.changeScene2(fileData);
	                    };
	                })();
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

/***/ }
/******/ ]);