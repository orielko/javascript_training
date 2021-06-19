"use strict";
/// <reference path="jquery-3.6.0.js" />
function setSquereCSS(element) {
    $(element).css("border", "1px solid black");
    $(element).css("display", "inline-block");
    $(element).css("width", "100px");
    $(element).css("height", "100px");
    $(element).css("margin", "10px");
    $(element).css("text-align", "center");
    $(element).css("vertical-align", "middle");
    $(element).css("line-height", "100px");
    $(element).css("color", "white");
    //set the color randomly
    const randomColor=Math.random()>0.5?"Red":"Blue";
    $(element).css("background-color", randomColor);  
    $(element).attr("class",randomColor);
}
function addFade(idSelector,elementClass,){
    $("#"+idSelector).click(function(){
        if($("."+elementClass).is(':visible')){
            $("."+elementClass).fadeOut(2000);
            $("#"+idSelector).text("Fade In "+elementClass+" Squares")
        }else{
            $("."+elementClass).fadeIn(2000);
            $("#"+idSelector).text("Fade Out "+elementClass+" Squares")
        }
    })
}
$(function () {
    //coloring the buttons
    $("#blueButton").css("background-color","blue");
    $("#redButton").css("background-color","red");
    $("button").css("color","white");
    //setting the buttons events
    addFade("blueButton","Blue");
    addFade("redButton","Red");
    //creating the divs
    for (let index = 1; index < 16; index++) {
        const div=this.createElement("div");
        div.innerText=getRandomNumber(1,100);
        setSquereCSS(div);
        $("#container").append(div);
        if(index%5===0){
            $("#container").append("<br>");
        }
        $(div).click(function(){
            alert($(this).text());
        });
        $(div).on('mouseenter',function(){
            $(this).css("border","3px solid black");
            $(this).css("font-weight","bold");
        });
        $(div).on('mouseout',function(){
            $(this).css("border","1px solid black");
            $(this).css("font-weight","normal");
        });
        
    }
})
