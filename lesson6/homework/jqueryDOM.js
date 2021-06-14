"use strict";
/// <reference path="jquery-3.6.0.js" />
$(function(){
    $("#fillList").click(function(){
        const min=parseInt($("#lowerBoundInput").val());
        const max=parseInt($("#upperBoundInput").val());
        console.log(min,max);
        $("#numbersSelect").empty();
        let options='';
        for (let index = min; index <= max; index++) {
            options+=`<option value="${index}">${index}</option>`;
            
        }
        console.log(options);
        $("#numbersSelect").append(options);
    });    
})