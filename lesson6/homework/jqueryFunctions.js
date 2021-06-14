"use strict";
/// <reference path="jquery-3.6.0.js" />
$(function(){
    $("#firstNameButton").click(function(){
        const firstName=$("#firstNameInput").val();
        console.log(firstName);
        $("#firstNameSpan").text(firstName);
        if(firstName!==''){
            $("#firstNameInput").remove();
        }
    });
    $("#lastNameButton").click(function(){
        const firstName=$("#lastNameInput").val();
        console.log(firstName);
        $("#lastNameSpan").text(firstName);
        if(firstName!==''){
            $("#lastNameInput").remove();
        }
    });
    
})