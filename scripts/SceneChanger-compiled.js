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
                window.alert("hi");
                var request = new XMLHttpRequest();
                request.open("GET", "./data/ChoiceRemainSilent.csv", true);
                request.send();
                request.onload = function () {
                    var data = undefined,
                        middleData = undefined,
                        finalData = [];
                    for (var i = 0; i < data.length; i++) {
                        middleData = data[i].split(/,/);
                        finalData[i] = [];
                        for (var j = 0; j < COLUMNS; j++) {
                            finalData[i][j] = middleData[j];
                        }
                    }
                    callback(finalData);
                    window.alert("hi");
                };
            } else if (choice == false) {
                (function () {
                    var request = new XMLHttpRequest();
                    request.open("GET", "./data/ChoiceWhyHere.csv", true);
                    request.send();
                    request.onload = function () {
                        var COLUMNS = 3;
                        var data = undefined,
                            middleData = undefined,
                            finalData = [];
                        if (request.readyState === 4 && request.status === 200) {
                            data = request.responseText.split(/\n/);
                        }
                        for (var i = 0; i < data.length; i++) {
                            middleData = data[i].split(/,/);
                            finalData[i] = []; //makes it an MD array
                            for (var j = 0; j < COLUMNS; j++) {
                                finalData[i][j] = middleData[j];
                            }
                        }
                        callback(finalData);
                    };
                })();
            }
        }
    }, {
        key: "changeVoice",
        value: function changeVoice(data) {
            document.getElementById('voice').innerHTML = data;
        }
    }, {
        key: "changeReply1",
        value: function changeReply1(data) {
            document.getElementById('reply1').innerHTML = data;
        }
    }, {
        key: "changeReply2",
        value: function changeReply2(data) {
            document.getElementById('reply1').innerHTML = data;
        }
    }]);

    return SceneChanger;
}();

exports.default = SceneChanger;

//# sourceMappingURL=SceneChanger-compiled.js.map