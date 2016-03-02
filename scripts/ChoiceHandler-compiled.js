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

var _SceneChanger = require("./SceneChanger.js");

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

//# sourceMappingURL=ChoiceHandler-compiled.js.map