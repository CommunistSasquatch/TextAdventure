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
        ChoiceHandler.counter = -1;

    }

    getReply() {
        let sceneChanger = new SceneChanger();
            document.getElementById("reply1").addEventListener("click", function () {
                ChoiceHandler.counter++;
                console.log(ChoiceHandler.counter);
                let choice = true;
                sceneChanger.selectScene(choice, ChoiceHandler.counter);
            });
            document.getElementById("reply2").addEventListener("click", function () {
                ChoiceHandler.counter++;
                let choice = false;
                sceneChanger.selectScene(choice, ChoiceHandler.counter);
            });
    }
}





