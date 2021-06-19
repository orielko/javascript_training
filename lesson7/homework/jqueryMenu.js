"use strict";
/// <reference path="jquery-3.6.0.js" />
$(function(){
    $("li").hide();
    $("h3").on("mouseenter",function(){
        $("li").hide();
        $(this).next().children().toggle();
    })
})