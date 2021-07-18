// by default in node.js each file has automatically IFFI (to disconnect it from the global object)
const something="Hola";

function printMessage(msg){
    console.log(msg);
}

function printMultipleMessage(msg,times){
    for(let i=1;i<=times;i++){
        console.log(msg);
    }
}

module.exports={
    something,
    printMessage,
    printMultipleMessage
}