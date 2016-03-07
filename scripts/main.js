/**
 AUTHOR: Joe Barbercheck
 VERSION: 1.0
 CREATED: 2-12-16
 ASSIGNMENT: Text Adventure
 Main
 */


"use strict";
import ChoiceHandler from './ChoiceHandler.js';
import FileIO from './FileIO.js';
import SceneChanger from './SceneChanger.js';

class main {
    constructor() {

    }
}




window.onload = function() {
    new main();
    new ChoiceHandler().getReply();
    new FileIO();
};