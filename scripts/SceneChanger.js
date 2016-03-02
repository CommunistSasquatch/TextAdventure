/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 Scene Changer
 */

"use strict";
import FileIO from './FileIO.js';
export default class SceneChanger {

    constructor() {

    }

    createScene() {
        SceneChanger.loadData("data/ChoiceRemainSilent.csv", SceneChanger.createScene);
        SceneChanger.loadData("data/ChoiceWhyHere.csv", SceneChanger.createScene);
    }
    selectScene(choice, counter){
        let fileIO = new FileIO();
        const CHOICE2 = 1;
        let scene;
        if (choice == true && counter  == 0) {
            scene = "./data/ChoiceWhyHere.csv";
            fileIO.pullSceneData(scene);

        } else if (choice == false && counter == 0){
            scene = "./data/ChoiceRemainSilent.csv";
            fileIO.pullSceneData(scene);

        } else if (choice == true && counter == CHOICE2){
            scene = "./data/ChoiceLetsGo.csv";
            fileIO.pullSceneData(scene);

        } else if (choice == false && counter == CHOICE2){
            scene = "./data/ChoiceLetsStay.csv";
            fileIO.pullSceneData(scene);

        }
    }

    changeScene1(fileData){
        const VOICE = 0;
        const SUBTITLE = 1;
        const BUTTON = 2;
        document.getElementById('voice').innerHTML = fileData[VOICE];
        document.getElementById('intro').innerHTML = fileData[SUBTITLE];
        document.getElementById('reply1').value = fileData[BUTTON];
        document.getElementById('reply2').style.visibility = 'hidden';
    }

    changeScene2 (fileData){
        const VOICE = 0;
        const SUBTITLE = 1;
        const BUTTON1 = 2;
        const BUTTON2 = 3;
        document.getElementById('voice').innerHTML = fileData[VOICE];
        document.getElementById('intro').innerHTML = fileData[SUBTITLE];
        document.getElementById('reply1').value = fileData[BUTTON1];
        document.getElementById('reply2').value = fileData[BUTTON2]

    }
}


