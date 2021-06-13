"use strict";
/// <reference path="jquery-3.6.0.js" />
(function(){
    
    $("#button1").click(function (){
        $("div").each(function(){
            //this way all will get the same random number
            $("div").text(Math.floor(Math.random()*100));
        })
    });
    $("#button2").click(function (){
        $("div").each(function(){
            //this will give each div, a different number
            $(this).text(Math.floor(Math.random()*100));
        })
    });
    //class work: color all the buttons on enter or leave
    $("button").mouseenter(function(){
        $(this).css("background-color","red");
    });
    $("button").mouseleave(function(){
        $(this).css("background-color","green");
    });

    //will not work on the new added divs
    $("div").click(function(){
        $(this).css("background-color","blue");
    });
    //if we want the css above to work on the new divs
    $("#divs").on("click","div",function(){
        $(this).css("background-color","blue");
    });

    $("#buttonDivCreation").click(function(){
        $("#divs").append("<div>new</div>");
    });

}());

//we can write all under the document.ready(...) and then all of the code will work after the DOM is loaded
//this way we can write our code under this and not use the 'deffer' on the script loading
$(document).ready(alert('will happen after the DOM is loaded'));
$(function(){
    alert('Another way to write $(document).ready(...) is $(function()...)');
})

//class exercise 2
$(function(){
    let counter=1;
    $("#buttonCreate").click(function(){
        $("#buttons").append(`<button>button ${counter++}</button>`);
    });

    $("#buttons").on("mouseenter","button",function(){
        $("button").mouseenter(function(){
            $(this).css("background-color","red");
        });
    });
    $("#buttons").on("mouseleave","button",function(){
        $("button").mouseleave(function(){
            $(this).css("background-color","green");
        });
    });

});