/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 document.getElementById("voice1").style.visibility = "hidden";
 document.getElementbyId ()
 */

"use strict";

export default class ChoiceHandler {
    constructor() {
        let reply1 = document.getElementById("reply1").addEventListener("click", function(){
            let choice = true;
            ChoiceHandler.changeReply()
        });
        let reply2 = document.getElementById("reply2").addEventListener("click", function() {
            window.alert("World")
        });
    }
    static changeReply(choice) {
        if (this.choice == true){
            window.alert ("hello");
        }

    }


}





