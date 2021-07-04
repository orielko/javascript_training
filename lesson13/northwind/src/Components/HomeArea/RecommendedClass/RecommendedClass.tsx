import { SyntheticEvent } from "react";
import { Component } from "react";
import "./RecommendedClass.css";


class RecommendedClass extends Component {
    private item="White whine";

    private recommendHandler(args:SyntheticEvent):void{
    
        //the original native event
        console.log(args.nativeEvent)
        //the element that raised the event
        console.log(args.target);
        console.dir(args.target);//to display the object on the console
        //the value for the button value, we will do casting (down case) because not all elements has innerHTML
        console.log((args.target as HTMLButtonElement).innerHTML);
        alert(this.item);
    }
    private recommendHandlerWithoutThis(args:SyntheticEvent):void{
        alert("Red Whine");
    }
    private recommendHandlerWithBind(args:SyntheticEvent):void{
        alert(this.item);
    }

    // in this case we will need the arrow function to be in a variable
    private recommendHandlerWithArrowSyntax=(args:SyntheticEvent):void=>{
        alert(this.item);
    }
 
    
    public render(): JSX.Element {
        return (
            <div className="RecommendedClass Box">
                {/* this won't work, error will say it's undefined, in this case "this" is the function caller- the button */}
                {/* <button onClick={this.recommendHandler}>Recommend</button> */}
                <button onClick={this.recommendHandlerWithoutThis}>Recommend (without this)</button>
                {/* if we want to use this we have two options: bind or anon function */}
                <button onClick={this.recommendHandlerWithBind.bind(this)}>Recommend (with Bind)</button>
                <button onClick={this.recommendHandlerWithArrowSyntax}>Recommend (with arrow syntax)</button>

            </div>
        );
    }
}

export default RecommendedClass;
