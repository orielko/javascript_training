class Test<T>{ //could be any name then T, and T is generic
    public value:T;

    public constructor(value:T){
        this.value=value;
    }

    public display(): void{
        console.log("value:",this.value);
    }
    add(value:T){
        console.log("value:",value);

    }
}

export default Test;