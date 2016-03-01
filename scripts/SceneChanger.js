/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure

 document.getElementbyId ()
 let request = new XMLHttpRequest();
 request.open("GET", "./data/ChoiceRemainSilent.csv", true);
 request.send();
 request.onload = function () {
                let data, middleData, finalData = [];
                for (let i = 0; i < data.length; i++) {
                    middleData = data[i].split(/\n/);
                    finalData[i] = [];
                    for (let j = 0; j < COLUMNS; j++) {
                        finalData[i][j] = middleData[j];
                    }
                }
                callback(finalData);
                window.alert("hi");

                 let request = new XMLHttpRequest();
            request.open("GET", "./data/ChoiceWhyHere.csv", true);
            request.send();
            request.onload = function() {
                const COLUMNS = 3;
                let data, middleData, finalData = [];
                for (let i = 0; i < data.length; i++) {
                    middleData = data[i].split(/\n/);
                    finalData[i] = []; //makes it an MD array
                    for (let j = 0; j < COLUMNS; j++) {
                        finalData[i][j] = middleData[j];
                    }
                }
                callback(finalData);
            };



                changeVoice(data){
        document.getElementById('voice').innerHTML = data;
    }
    changeReply1(data){
        document.getElementById('reply1').innerHTML = data;
    }
    changeReply2(data){
        document.getElementById('reply1').innerHTML = data;
    }



            SceneLoader.loadData("data/ChoiceRemainSilent.csv", sceneChanger.createScene);
 */

"use strict";

export default class SceneChanger {

    constructor() {

    }

    createScene() {
        let sceneChanger = new SceneChanger();
        sceneChanger.pullScene1Data();
    }

    pullScene1Data(choice) {
        if (choice == true) {
            window.alert("asdasddas");
            }
        else if(choice == true) {
            window.alert("asdasddfgdfgdfgdfgdas");
        }

    }

}


