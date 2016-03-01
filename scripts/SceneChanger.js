/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 document.getElementbyId ()
 */

"use strict";

export default class SceneChanger {

    constructor() {
        SceneLoader.loadData("data/ChoiceRemainSilent.csv", sceneChanger.createScene);
    }

    createScene() {
        let sceneChanger = new SceneChanger();
    }

    pullScene1Data(choice) {
        if (choice == true) {
            window.alert("memes")
        } else if (choice == false){
            window.alert("no bueno")
        }

    }
}


