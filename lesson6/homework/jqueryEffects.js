"use strict";
/// <reference path="jquery-3.6.0.js" />
let blueFadeOut=true;
let redFadeOut=true;
$(function(){
    $("#fadeBlueButton").click(function(){
        if(blueFadeOut){
            $(".blueSquere").fadeOut(2000);
            $("#fadeBlueButton").text("Fade In blue squeres");
        }else{
            $(".blueSquere").fadeIn(2000);
            $("#fadeBlueButton").text("Fade Out blue squeres");
        }
        blueFadeOut=!blueFadeOut;

    });    
    $("#fadeRedButton").click(function(){
        if(redFadeOut){
            $(".redSquere").fadeOut(2000);
            $("#fadeRedButton").text("Fade In red squeres");
            
        }else{
            $(".redSquere").fadeIn(2000);
            $("#fadeRedButton").text("Fade Out red squeres");
        }
        redFadeOut=!redFadeOut;
    });    
})