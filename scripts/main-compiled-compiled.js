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

//# sourceMappingURL=main-compiled.js.map

//# sourceMappingURL=main-compiled-compiled.js.map