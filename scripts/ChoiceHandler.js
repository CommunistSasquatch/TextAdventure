/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 document.getElementbyId ()
 */

"use strict";

import SceneChanger from './SceneChanger.js';

export default class ChoiceHandler {
    constructor() {
    }

    getReply() {
        let sceneChanger = new SceneChanger();
        let choiceHandler = new ChoiceHandler();

        let reply1 = document.getElementById("reply1").addEventListener("click", function(){
            let choice = true;
            sceneChanger.pullScene1Data(choice)
        });
        let reply2 = document.getElementById("reply2").addEventListener("click", function() {
            let choice = false;
            sceneChanger.pullScene1Data(choice)
        });
    }




}





