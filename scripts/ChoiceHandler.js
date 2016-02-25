/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 document.getElementbyId ()
 */

"use strict";

export default class ChoiceHandler {
    constructor() {

    }

    getReply() {
        let choiceHandler = new ChoiceHandler();

        let reply1 = document.getElementById("reply1").addEventListener("click", function(){
            let choice = true;
            choiceHandler.changeReply(choice)
        });
        let reply2 = document.getElementById("reply2").addEventListener("click", function() {
            let choice = false;
            choiceHandler.changeReply(choice)
        });
        choiceHandler.changeReply()
    }

    changeReply(choice) {
        if (choice == true){
            document.getElementById("voice1").style.visibility = "hidden";
            window.alert ("silence");
        } else if (choice == false){
            window.alert ("idk what u doin her bb");
        }

    }


}





