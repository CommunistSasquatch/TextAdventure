/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 Choice handler
 */

"use strict";

import SceneChanger from './SceneChanger.js';

export default class ChoiceHandler {
    constructor() {
        ChoiceHandler.counter = 0;

    }

    getReply() {
        let sceneChanger = new SceneChanger();
        let reply1 = document.getElementById("reply1").addEventListener("click", function () {
            let choice = true;
            sceneChanger.selectScene(choice, ChoiceHandler.counter);
        });
        let reply2 = document.getElementById("reply2").addEventListener("click", function () {
            let choice = false;
            sceneChanger.selectScene(choice, ChoiceHandler.counter);
        });
    }


}





