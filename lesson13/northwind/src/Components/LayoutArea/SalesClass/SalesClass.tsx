import { Component } from "react";
import "./SalesClass.css";
interface SalesProps{
    category:string;
    percent:number;
}
//the way to tell which type is the props is by writing the generic type to the interface type
class SalesClass extends Component<SalesProps> {

    //if we want to do more things on the on creation of the element , we can do that in the constructor
    constructor(props:SalesProps){
        super(props);
    }
    
    public render(): JSX.Element {
        return (
            <div className="Sales Box">
                <p>
                    Sale: { this.props.percent }% discount on all { this.props.category }!
                </p>
            </div>
        );
    }
}

export default SalesClass;
