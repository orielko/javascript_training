//a bad way to write options
function printItemByColor(color) {
    switch (color) {
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
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function printItemByColorENUM(color) {
    switch (color) {
        case Color.Red:
            console.log("red");
            break;
        case Color.Blue:
            console.log("blue");
            break;
    }
}
printItemByColorENUM(Color.Blue);
