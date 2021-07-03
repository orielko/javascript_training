class Car{
    private manifacturer:string;
    private model:string;
    private color:string;
    private engineVolume:number;

    constructor(manifacturer:string,model:string,color:string,engineVolume:number){
        this.manifacturer=manifacturer;
        this.model=model;
        this.color=color;
        if(engineVolume>0 && engineVolume<=4000){
            this.engineVolume=engineVolume;
        }else{
            throw new Error("Invalid engine volume value- must be between 0 to 4000");      
        }
    }

    public displayDetails(displayElement:HTMLElement):void{
        displayElement.innerHTML=
        `Manifacturer: ${this.manifacturer},
        Model:${this.model},
        Color:${this.color},
        Engine Volume:${this.engineVolume}`
    }

    public getManifacturer():string{
        return this.manifacturer;
    }
    public getColor():string{
        return this.color;
    }
    public getModel():string{
        return this.model;
    }
    public getEngineVolume():number{
        return this.engineVolume;
    }
    public setManifacturer(manifacturer:string):void{
        this.manifacturer=manifacturer;
    }
    public setColor(color:string):void{
        this.color=color;
    }
    public setModel(model:string):void{
        this.model=model;
    }
    public setEngineVolume(engineVolume:number):void{
        if(engineVolume>0 && engineVolume<=4000){
            this.engineVolume=engineVolume;
        }else{
            throw new Error("Invalid engine volume value- must be between 0 to 4000");      
        }
    }
}

export default Car;