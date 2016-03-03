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

var _SceneChanger = require("./SceneChanger");

var _SceneChanger2 = _interopRequireDefault(_SceneChanger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileIO = function () {
    function FileIO() {
        _classCallCheck(this, FileIO);

        FileIO.sceneChanger = new _SceneChanger2.default();
    }

    _createClass(FileIO, [{
        key: "pullSceneData",
        value: function pullSceneData(scene) {
            var request = new XMLHttpRequest();
            var sceneNumber = undefined;
            request.open("GET", scene, true);
            request.send();
            request.onload = function () {
                var SCENE_NUM = 0;
                var COLUMNS = 2;
                var data = undefined,
                    middleData = undefined,
                    fileData = [];
                if (request.readyState === 4 && request.status === 200) {
                    data = request.responseText.split(/\n/);
                    console.log(data);
                }for (var i = 0; i < data.length; i++) {
                    middleData = data[i].split(/\n/);
                    fileData[i] = [];
                    for (var j = 0; j < COLUMNS; j++) {
                        fileData[i][j] = middleData[j];
                        //console.log(fileData[i][j]);
                    }
                }
                sceneNumber = fileData[0][1];
                //console.log (sceneNumber);
            };
        }
    }]);

    return FileIO;
}();

exports.default = FileIO;

//# sourceMappingURL=FileIO-compiled.js.map