"use strict";
//if JQUERY is not working add this for the VS code: (to recognize jQuery functions)
/// <reference path="jquery-3.6.0.js" />

function test1(){
    //$("some-css-selector").someFunction(...);
    $('div').slideUp(2000);
}
function test2(){
    $('div').slideDown(2000);
}
function test3(){
    $('div').hide(2000);
}
function test4(){
    $('div').slideUp(2000).slideDown(2000).hide(2000).show(500).fadeOut(500).fadeIn(500);
}
function test5(){
    $('div').fadeToggle(500).slideToggle(1000).toggle(1000);
}
function test6(){
    $('.second').hide(1000);
}
function test7(){
    $('div').text('שלום!').attr("dir","rtl");
}
function test8(){
    $('div').html('hi<br>hello').attr("dir","ltr");
}
function test9(){
    $('div').css("background-color","green");
}
function test10(){
    $('div').css({width:"200px",height:"100px",backgroundColor:"orange"});
}
function test11(){
    $('#first').next().css({width:"200px",height:"100px",backgroundColor:"black"});
}
function test12(){
    $('#first').append('<hr>');
}
function test13(){
    $('#first').prepend('add before <br>');
}
function classEx1(){
    $('div').slideUp(1000);
    $('p').append($('textarea').val());
    $('textarea').val('');
}
