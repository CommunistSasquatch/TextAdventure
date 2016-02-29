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

    createScene(){
        let sceneChanger = new SceneChanger();
    }

    pullScene1Data(choice) {
        if (choice == true){
            request.open("GET", data/ChoiceRemainSilent.csv,true);
            request.send();
            request.onload = function () {
                const VOICE = 0;
                const REPLY1 = 1;
                const  REPLY2 =2;
                let data = [];
                for (let i = 0; i < data.length; i++) {
                   data = data[i].split (/\n/);
                }
                changeVocie(data[VOICE]);
            }

        } else if (choice == false){
            request.open("GET", data/ChoiceWhyHere.csv,true);
            request.send();
            request.onload = function () {
                const COLUMNS = 1;
                let data = [];
                for (let i = 0; i < data.length; i++) {
                    data = data[i].split (/\n/);
                }
            }
        }

    }
    changeVoice(data){
        document.getElementById('voice').innerHTML = data;
    }
    changeReply1(data){
        document.getElementById('reply1').innerHTML = data;
    }
    changeReply2(data){
        document.getElementById('reply1').innerHTML = data;
    }
}


