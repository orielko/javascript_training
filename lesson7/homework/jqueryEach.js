"use strict";
/// <reference path="jquery-3.6.0.js" />

$("button").click(function(){
    $("div").each(function(){
        console.log(this);
        $(this).text(getRandomNumber(1,100));
        $(this).css('background-color',getRandomColor());
    });

});
