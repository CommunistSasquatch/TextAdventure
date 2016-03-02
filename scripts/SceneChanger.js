/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 Scene Changer
 */

"use strict";

export default class SceneChanger {

    constructor() {

    }

    createScene() {
        let sceneChanger = new SceneChanger();
        sceneChanger.loadData("data/ChoiceRemainSilent.csv", sceneChanger.createScene);
        sceneChanger.loadData("data/ChoiceWhyHere.csv", sceneChanger.createScene);
    }

    pullScene1Data(choice) {
        let sceneChanger = new SceneChanger();
        const VOICE = 0;
        const SUBTITLE = 1;
        const BUTTON = 2;
        if (choice == true) {
            let request = new XMLHttpRequest();
            request.open("GET", "./data/ChoiceRemainSilent.csv", true);
            request.send();
            request.onload = function() {
                const COLUMNS = 2;

                let data, middleData, fileData = [];
                if (request.readyState === 4 && request.status === 200) {
                    data = request.responseText.split(/\n/);
                }
                for (let i = 0; i < data.length; i++) {
                    middleData = data[i].split(/\n/);
                    fileData[i] = []; //makes it an MD array
                    for (let j = 0; j < COLUMNS; j++) {
                        fileData[i][j] = middleData[j];
                    }
                }
                sceneChanger.changeScene1(fileData);

            };

        }
        else if (choice == false) {
                let request = new XMLHttpRequest();
                request.open("GET", "./data/ChoiceWhyHere.csv", true);
                request.send();
                request.onload = function() {
                    const COLUMNS = 2;

                    let data, middleData, fileData = [];
                    if (request.readyState === 4 && request.status === 200) {
                        data = request.responseText.split(/\n/);
                    }
                    for (let i = 0; i < data.length; i++) {
                        middleData = data[i].split(/\n/);
                        fileData[i] = []; //makes it an MD array
                        for (let j = 0; j < COLUMNS; j++) {
                            fileData[i][j] = middleData[j];
                        }
                    }
                    sceneChanger.changeScene2(fileData);
                };
            }
         }

    changeScene1(fileData){
        const VOICE = 0;
        const SUBTITLE = 1;
        const BUTTON = 2;
        document.getElementById('voice').innerHTML = fileData[VOICE];
        document.getElementById('intro').innerHTML = fileData[SUBTITLE];
        document.getElementById('reply1').value =fileData[BUTTON];
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


