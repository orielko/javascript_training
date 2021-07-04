import { Component } from "react";
import "./Bestseller.css";

interface BestsellerState{
    item:string;
}
interface BestsellerProps{
}

//in the Component generics, first param is always props and second is state
// class Bestseller extends Component<BestsellerProps,BestsellerState> {
    // we can use empty object also as the props type which contains nothing
class Bestseller extends Component<{},BestsellerState> {

    private constructor(props:{}){
        super(props);
        //we can do that only in the constructor
        this.state={item:"none"};

    }
    private item="no item";
    //Instead of using class private variables, we need to use the state

    private displayHandler=()=>{
        //we can't update the state this way, we need to use the function setState, so react will know to render
        // this.state.item="Irish Coffee";
        //second parameter is a callback function after the state is changed
        this.setState({item:"Irish Coffee"});
        this.item="Irish Coffee";
        //setState is async, this is why we can't use the state changes in here, like this:
        // alert(this.state.item);
    }
    public render(): JSX.Element {
        return (
            <div className="Bestseller Box">
				<button onClick={this.displayHandler}>Bestseller item</button>
                {/* we won't see the item changed after the button click because it doesn't render automatically */}
                {/* if we want react to notice the changes, react listen to the state changes */}
                {/* when we work with react, we do the changes on the Virtual DOM of React, and react updates the Real DOM when needed */}
                <span>{this.item} </span>
                {/* By using state: (by default state will be null)*/}
                {/* this is why its a good practice to create initial state instead of the conditional rendering */}
                {this.state && <span>{ this.state.item} </span>}
                {<span>{this.state.item}</span>}
            </div>
        );
    }
}

export default Bestseller;
