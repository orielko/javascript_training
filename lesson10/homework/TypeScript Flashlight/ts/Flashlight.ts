export class Flashlight{
    color:string;
    length:number;
    lumens:number;
    batteries:number;
   

    constructor(color:string,length:number,lumens:number,batteries:number){
        this.color=color;
        this.length=length;
        this.lumens=lumens;
        this.batteries=batteries;
    }

    public displayDetails(displayElement:HTMLElement):void{
        displayElement.innerHTML=
        `Color: ${this.color},
        Lumens: ${this.lumens},
        Batteries: ${this.batteries},
        length:${this.length}`
    }

    public on():string{
        return "Tturned on";
    }
    public off():string{
        return "Turned off";
    }
    public switchBatteries():string{
        return "Batteries switched";
    }
}

