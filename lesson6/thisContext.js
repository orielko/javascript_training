"use strict";
myButton9.addEventListener("click",()=>{
    console.log("lala",this);
    this.style.backgroundColor="Yellow";
});
(function(){
    //we can't reach this function in this IFFI scope, because for all the functions that we are using from the HTML, on the "onclick=", must be on the window,
    //and if it's inside the IFFI scope, it's not on the window
    function paintMe(){
        myButton.style.baclgroundColor="Yellow";
    }
    //so we need to use event registering on the HTML element, if we want our functions to be inside an IFFI
    // myButton.addEventListener("click",function(){
    //     myButton.style.backgroundColor="Yellow";
    // });
    
    //we can also use "this", which is the object that activated the function
    myButton.addEventListener("click",function(){
        this.style.backgroundColor="Yellow";
    });
    
    myButton4.addEventListener("click",function(){
        setTimeout(function(){
            console.log(this);
            this.style.backgroundColor="Yellow";
        }, 10);   
    });

    //the first legacy way to solve it is to use "that"
    myButton5.addEventListener("click",function(){
        const that=this; //that / me / self / thiz / _this
        setTimeout(function(){
            console.log(that);
            that.style.backgroundColor="Yellow";
        }, 10);   
    });

    //the arrow function has automatically has "bind" with the outside this
    myButton6.addEventListener("click",function(){
        setTimeout(()=>{
            //here the "this"
            console.log(this);
            this.style.backgroundColor="Yellow";
        }, 10);   
    });

    //second legacy way to solve it, is to bind the function this to the function, the element we will put inside the bind will be the "this"
    myButton7.addEventListener("click",function(){
        setTimeout(function(){
            //here the "this"
            console.log(this);
            this.style.backgroundColor="Yellow";
        }.bind(this), 10);   
        // }.bind({lala:"could be any object"}), 10);   
    });

    //we have example which the arrow function will not work, because the arrow function is binded to the window's "this" or "undefined" if it's inside an IFFI (like in this case)
    myButton8.addEventListener("click",()=>{
        console.log("lala",this);
        this.style.backgroundColor="Yellow";
    });

    //we can also attach listeners for all the buttons in general
    // const buttons=document.getElementsByTagName('button');
    // for(const b of buttons){
    //     b.addEventListener("click",function(){
    //         b.style.backgroundColor="Yellow";
    //     });
    // }

})();