import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
import { Shape, Shapes } from "./Shape.js";
import Square from "./Square.js";

function drawRectangle(canvasId:string,color:string,heightSide:number,widthSide:number){
    const squareCanvas:HTMLCanvasElement=document.getElementById(canvasId) as HTMLCanvasElement;
    const squareCtx:CanvasRenderingContext2D=squareCanvas.getContext("2d");
    squareCtx.beginPath();
    squareCtx.fillStyle = color;
    squareCtx.fillRect(0, 0, heightSide, widthSide);  
    squareCtx.stroke();

}
function drawCircle(canvasId:string,color:string,radius:number){
    const circleCanvas:HTMLCanvasElement=document.getElementById(canvasId) as HTMLCanvasElement;
    const circleCtx:CanvasRenderingContext2D=circleCanvas.getContext("2d");
    circleCtx.arc(radius, radius, radius, 0, Math.PI * 2, false);
    circleCtx.fillStyle = color;
    circleCtx.fill()
}

let square:Square=new Square("blue",60);
document.getElementById("squareDetails").innerHTML=square.display();
document.getElementById("squareDetails").innerHTML+=' , Area:' +square.getArea();
document.getElementById("squareDetails").innerHTML+=' , Perimeter:' +square.getPerimeter();
//draw squere
drawRectangle("squareCanvas",square.getColor(),square.side,square.side);

let rectangle:Rectangle=new Rectangle("yellow",150,90);
document.getElementById("rectangleDetails").innerHTML=rectangle.display();
document.getElementById("rectangleDetails").innerHTML+=' , Area:' +rectangle.getArea();
document.getElementById("rectangleDetails").innerHTML+=' , Perimeter:' +rectangle.getPerimeter();
drawRectangle("rectangleCanvas",rectangle.getColor(),rectangle.heightSide,rectangle.widthSide);

let circle:Circle=new Circle("red",60);
document.getElementById("circleDetails").innerHTML=circle.display();
document.getElementById("circleDetails").innerHTML+=' , Area:' +circle.getArea();
document.getElementById("circleDetails").innerHTML+=' , Perimeter:' +circle.getPerimeter();
document.getElementById("circleDetails").innerHTML+=' , Diameter:' +circle.getDiameter();
drawCircle("circleCanvas",circle.getColor(),circle.radius);

let randomShape:Shapes=Math.floor(Math.random()*3);
let randomShapeReference:Shape;
switch(randomShape){
    case Shapes.Circle:
        randomShapeReference=circle;
        break;
    case Shapes.Rectangle:
        randomShapeReference=rectangle;
        break;
    case Shapes.Square:
        randomShapeReference=square;
        break;
}
document.getElementById("randomShapeDetails").innerHTML=randomShapeReference.display();
if(randomShapeReference instanceof Circle){
    document.getElementById("randomShapeDetails").innerHTML+=' , Diameter: '+randomShapeReference.getDiameter();
}


