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
/***/function (module, exports) {

	/**
  AUTHOR: Joe Barbercheck
  VERSION: 1.0
  CREATED: 2-12-16
  ASSIGNMENT: Text Adventure
  document.getElementById("reply1").addEventListener("click", function() {
             window.alert("Hello World")
         });
  */

	//import ClickHandler from './ChoiceHandler.js';

	"use strict";

	class main {
		constructor() {
			document.getElementById("reply1").addEventListener("click", function () {
				window.alert("Hello");
			});
			document.getElementById("reply2").addEventListener("click", function () {
				window.alert("World");
			});
		}
	}

	window.onload = function () {
		new main();
	};

	/***/
}
/******/]);

//# sourceMappingURL=bundle-compiled.js.map

//# sourceMappingURL=bundle-compiled-compiled.js.map