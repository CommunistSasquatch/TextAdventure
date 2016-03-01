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
    }

    pullScene1Data(choice) {
        if (choice == true) {
            window.alert("first working")
            let request = new XMLHttpRequest();
            request.open("GET", filePath, true);
            request.send();
            request.onload = function() {
                const COLUMNS = 3;
                let data, middleData, finalData = [];
                for (let i = 0; i < data.length; i++) {
                    middleData = data[i].split(/,/);
                    finalData[i] = []; //makes it an MD array
                    for (let j = 0; j < COLUMNS; j++) {
                        finalData[i][j] = middleData[j];
                    }
                }
                callback(finalData);
            };
        } else if (choice == false){

            let request = new XMLHttpRequest();
            request.open("GET", "./data/ChoiceWhyHere.csv", true);
            request.send();
            request.onload = function() {
                const COLUMNS = 3;
                let data, middleData, finalData = [];
                for (let i = 0; i < data.length; i++) {
                    middleData = data[i].split(/\n/);
                    window.alert("middleData[i]")
                }
                callback(finalData);
            };
        }

    }
}


