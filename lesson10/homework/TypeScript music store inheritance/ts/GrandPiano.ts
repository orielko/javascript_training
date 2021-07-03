import Piano from "./Piano.js";

class GrandPiano extends Piano{
    length:number;
    constructor(model:string,manufacturer:string,color:string,keyboardNumber:number,length:number){
        super(model,manufacturer,color,keyboardNumber);
        this.length=length;
    }
    public display(): string {
        return super.display()+` , 
        Grand Piano length: ${this.length} 
        `;
    }

}
export default GrandPiano;