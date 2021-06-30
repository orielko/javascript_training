//a bad way to write options
function printItemByColor(color:string){
    switch(color){
        case "Red":
            console.log("red");
            break;
        case "blue":
            console.log("blue");
            break;
    }
}
printItemByColor("Red");

//options with enum
enum Color{ //by default its number from 0 (with no equals)
    Red="Red",Green="Green",Blue="Blue"
}

function printItemByColorENUM(color:Color){
    switch(color){
        case Color.Red:
            console.log("red");
            break;
        case Color.Blue:
            console.log("blue");
            break;
    }
}

printItemByColorENUM(Color.Blue);