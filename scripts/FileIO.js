/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 File I/O
 */

"use strict";

import SceneChanger from "./SceneChanger";

export default class SceneChanger {

    constructor() {

    }
    pullSceneData(scene) {
        let sceneChanger = new SceneChanger();
            let request = new XMLHttpRequest();
            request.open("GET", scene, true);
            request.send();
            request.onload = function () {
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
            }
        }
}