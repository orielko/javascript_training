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

function getRandomColor():string{
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function drawShape(canvas:HTMLCanvasElement,shape:Shape):void{
    if(shape instanceof Rectangle){
        drawRectangle(canvas.id,shape.getColor(),shape.heightSide,shape.widthSide);
    }
    else if(shape instanceof Square){
        drawRectangle(canvas.id,shape.getColor(),shape.side,shape.side);
    }
    else if(shape instanceof Circle){
        drawCircle(canvas.id,shape.getColor(),shape.radius);
    }
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


const shapesArray:Shape[]=[];
for (let index = 0; index < 20; index++) {
    randomShape=Math.floor(Math.random()*3);
    switch(randomShape){
        case Shapes.Circle:
            shapesArray.push(new Circle(getRandomColor(),Math.floor(Math.random()*60)));
            break;
        case Shapes.Rectangle:
            shapesArray.push(new Rectangle(getRandomColor(),Math.floor(Math.random()*60),Math.floor(Math.random()*100)));
            break;
            case Shapes.Square:
                shapesArray.push(new Square(getRandomColor(),Math.floor(Math.random()*80)));
            break;
    }  
}

const randomShapeDetailsArray:HTMLElement=document.getElementById("randomShapeDetailsArray");
let index=1;
for (const shape of shapesArray) {
    const randomShapeDetailsArrayShape:HTMLElement=document.createElement("div") ;
    randomShapeDetailsArray.appendChild(randomShapeDetailsArrayShape);
    randomShapeDetailsArrayShape.innerHTML+=shape.display();
    if(shape instanceof Circle){
        randomShapeDetailsArrayShape.innerHTML+= ' , Diameter: '+shape.display();
    }
    randomShapeDetailsArrayShape.innerHTML+='<br>';
    const randomShapeDetailsArrayShapeCanvas:HTMLCanvasElement =document.createElement("canvas") ;
    randomShapeDetailsArrayShapeCanvas.id=index+'_id';
    randomShapeDetailsArrayShapeCanvas.height=150;
    randomShapeDetailsArrayShapeCanvas.width=300;
    randomShapeDetailsArrayShapeCanvas.setAttribute('style','border:1px solid #d3d3d3;');
    randomShapeDetailsArrayShape.appendChild(randomShapeDetailsArrayShapeCanvas);
    drawShape(randomShapeDetailsArrayShapeCanvas,shape);
    index++;
    
}
