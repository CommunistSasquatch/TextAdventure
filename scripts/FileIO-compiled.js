/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 File I/O
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
        key: "pullSceneData",
        value: function pullSceneData(scene) {
            var sceneChanger = new SceneChanger();
            var request = new XMLHttpRequest();
            request.open("GET", scene, true);
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
        }
    }]);

    return SceneChanger;
}();

exports.default = SceneChanger;

//# sourceMappingURL=FileIO-compiled.js.map