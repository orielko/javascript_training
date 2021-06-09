"use strict";
function testAjax(){
    //Create an AJAX object
    const ajax=new XMLHttpRequest();
    //Register an event for getting back the data
    ajax.onreadystatechange=()=>{
        //this function will happen 4 times
        //the first 3 respones (ready state 1,2,3,4) doesn't concern us (internal operations)
        console.log("AJAX function",Date.now());
        if(ajax.readyState===4 && ajax.status===200){
            console.log("Here the response is ready. ",ajax.responseText);
            let items=JSON.parse(ajax.responseText);
            document.getElementById("ajaxResult").innerHTML='';
            for(const item of items){
                const li=`<li>userId:${item.userId} , id: ${item.id}, title: ${item.title},completed: ${item.completed}</li>`;
                document.getElementById("ajaxResult").innerHTML+=li;
            }
        }
    };
    //Tell the AJAX object the method of request (GET/POST) and the URL to go to:
    ajax.open("GET","https://jsonplaceholder.typicode.com/todos");
    //Go - do the AJAX request
    ajax.send();
}