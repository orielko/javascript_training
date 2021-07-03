export class Speaker{
    color:string;
    volume:number;
   

    constructor(color:string,volume:number){
        this.color=color;
        this.volume=volume;
    }

    public displayDetails(displayElement:HTMLElement):void{
        displayElement.innerHTML=
        `Color: ${this.color},
        Volume:${this.volume}`
    }

    public on():string{
        return "Tturned on";
    }
    public off():string{
        return "Turned off";
    }
    public sound():string{
        return "lalala lalala";
    }
}

