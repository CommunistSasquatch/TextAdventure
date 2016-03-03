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

    selectScene(choice, counter){
        let fileIO = new FileIO();
        const CHOICE2 = 1;
        let scene;
        if (choice == true && counter  == 0) {
            scene = "./data/ChoiceWhyHere.csv";
            fileIO.pullSceneData(scene);
            console.log(1);
        } else if (choice == false && counter == 0){
            scene = "./data/ChoiceRemainSilent.csv";
            fileIO.pullSceneData(scene);
            console.log(2);
        } else if (choice == true && counter == CHOICE2){
            scene = "./data/ChoiceLetsGo.csv";
            fileIO.pullSceneData(scene);
            console.log(3);
        } else if (choice == false && counter == CHOICE2){
            scene = "./data/ChoiceLetsStay.csv";
            fileIO.pullSceneData(scene);
            console.log(4);
        }
    }

    sceneDecider (sceneNumber) {
        const SILENT = 0;
        const WHY_HERE = 1;
        const GO = 2;
        const STAY = 3;
        if (sceneNumber == SILENT) {
            SceneChanger.changeScene1();
        } else if (sceneNumber == WHY_HERE) {
            SceneChanger.changeScene2();
        } else if (sceneNumber == GO) {

        } else if (sceneNumber == STAY) {

        }

}

    changeScene1(fileData){
        const VOICE = 1;
        const SUBTITLE = 2;
        const BUTTON = 3;
        document.getElementById('voice').innerHTML = fileData[VOICE];
        document.getElementById('intro').innerHTML = fileData[SUBTITLE];
        document.getElementById('reply1').value = fileData[BUTTON];
        document.getElementById('reply2').style.visibility = 'hidden';
    }

    changeScene2 (fileData){
        const VOICE = 1;
        const SUBTITLE = 2;
        const BUTTON1 = 3;
        const BUTTON2 = 4;
        document.getElementById('voice').innerHTML = fileData[VOICE];
        document.getElementById('intro').innerHTML = fileData[SUBTITLE];
        document.getElementById('reply1').value = fileData[BUTTON1];
        document.getElementById('reply2').value = fileData[BUTTON2]

    }
}


