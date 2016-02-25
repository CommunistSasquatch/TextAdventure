"use strict";

var _ChoiceHandler = require("./ChoiceHandler.js");

var _ChoiceHandler2 = _interopRequireDefault(_ChoiceHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           AUTHOR: Joe Barbercheck
                                                                                                                                                           VERSION: 1.0
                                                                                                                                                           CREATED: 2-12-16
                                                                                                                                                           ASSIGNMENT: Text Adventure
                                                                                                                                                           document.getElementById("reply1").addEventListener("click", function() {
                                                                                                                                                                      window.alert("Hello World")
                                                                                                                                                                  });
                                                                                                                                                           */

"use strict";

var main = function main() {
    _classCallCheck(this, main);
};

window.onload = function () {
    new main();
    new _ChoiceHandler2.default().getReply();
};

//# sourceMappingURL=main-compiled.js.map