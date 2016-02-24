/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 document.getElementById("voice1").style.visibility = "hidden";
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

        var reply1 = document.getElementById("reply1").addEventListener("click", function () {
            var choice = true;
            ChoiceHandler.changeReply();
        });
        var reply2 = document.getElementById("reply2").addEventListener("click", function () {
            window.alert("World");
        });
    }

    _createClass(ChoiceHandler, null, [{
        key: "changeReply",
        value: function changeReply(choice) {
            if (this.choice == true) {
                window.alert("hello");
            }
        }
    }]);

    return ChoiceHandler;
}();

exports.default = ChoiceHandler;

//# sourceMappingURL=ChoiceHandler-compiled.js.map