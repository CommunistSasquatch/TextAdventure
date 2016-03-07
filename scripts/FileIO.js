/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 File I/O
 */

"use strict";

import SceneChanger from "./SceneChanger";


export default class FileIO {

    constructor() {
        FileIO.sceneChanger = new SceneChanger();
    }

    pullSceneData(scene) {
        let request = new XMLHttpRequest();
        let sceneNumber;
        request.open("GET", scene, true);
        request.send();
        request.onload = function () {
            const SCENE_NUM = 0;
            const COLUMNS = 2;
            let data, middleData, fileData = [];
            if (request.readyState === 4 && request.status === 200) {
                data = request.responseText.split(/\n/);
            }
            for (let i = 0; i < data.length; i++) {
                middleData = data[i].split(/\n/);
                fileData[i] = [];
                for (let j = 0; j < COLUMNS; j++) {
                    fileData[i][j] = middleData[j];
                }
            }
            sceneNumber = fileData[0][0];
            FileIO.sceneChanger.sceneDecider(sceneNumber, fileData);
        }
    }
}