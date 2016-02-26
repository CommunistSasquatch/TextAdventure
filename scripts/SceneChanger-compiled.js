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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

//# sourceMappingURL=SceneChanger-compiled.js.map