import { Component } from "react";
import "./Shoes.css";

interface ShoesProps {
	model:string;
    size:number;
    price:number;
    image:string;
}

class Shoes extends Component<ShoesProps> {

    constructor(props:ShoesProps){
        super(props);
    }
    public render(): JSX.Element {
        return (
            <div className="Shoes">
				Model: {this.props.model}  Size: {this.props.size}  Price: {this.props.price} <img src={this.props.image}/>
         
            </div>
        );
    }
}

export default Shoes;
