"use strict";
function calculate(){
    let val1=parseInt(firstNum.value);
    let val2=parseInt(secondNum.value);
    let answer,calcAction;
    
    switch (true) {
        case plus.checked:
            answer=val1+val2;
            calcAction='+';
            break;
        case minus.checked:
            answer=val1-val2;
            calcAction='-';
            break;
        case multiply.checked:
            answer=val1*val2;
            calcAction='*';
            break;
        case devide.checked:
            answer=val1/val2;
            calcAction='/';
            break;
    
        default:
            answer='__________';
            alert('You did not choose an operator');
            break;
    }
    if(isNaN(val1)||isNaN(val2 ||firstNum.value==='' || secondNum.value==='')){ 
        //will fail the isNaN() check, since the input type is for numbers - only if the input type is manually changed it will return true
        alert('You can enter only numbers');
    }else{
        result.innerText=answer;
        calcList.innerHTML=calcList.innerHTML+`
        <li>${val1} ${calcAction} ${val2} = ${answer}</li>`;
    }

}