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

var ChoiceHandler = function () {
    function ChoiceHandler() {
        _classCallCheck(this, ChoiceHandler);
    }

    _createClass(ChoiceHandler, [{
        key: "getReply",
        value: function getReply() {
            var choiceHandler = new ChoiceHandler();

            var reply1 = document.getElementById("reply1").addEventListener("click", function () {
                var choice = true;
                choiceHandler.changeReply(choice);
            });
            var reply2 = document.getElementById("reply2").addEventListener("click", function () {
                var choice = false;
                choiceHandler.changeReply(choice);
            });
            choiceHandler.changeReply();
        }
    }, {
        key: "changeReply",
        value: function changeReply(choice) {
            if (choice == true) {
                document.getElementById("voice1").style.visibility = "hidden";
                window.alert("silence");
            } else if (choice == false) {
                window.alert("idk what u doin her bb");
            }
        }
    }]);

    return ChoiceHandler;
}();

exports.default = ChoiceHandler;

//# sourceMappingURL=ChoiceHandler-compiled.js.map