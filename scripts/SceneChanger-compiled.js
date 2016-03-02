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

var _FileIO = require("./FileIO.js");

var _FileIO2 = _interopRequireDefault(_FileIO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

//# sourceMappingURL=SceneChanger-compiled.js.map