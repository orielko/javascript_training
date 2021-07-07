import { SyntheticEvent } from "react";
import "./Recommended.css";

function Recommended(): JSX.Element {
    const item="White whine";
    //the SyntheticEvent is the wrapper for all the events (react wrapper) - one for all the events (in HTML each event is different)
    function recommendHandler(args:SyntheticEvent):void{
        //the original native event
        console.log(args.nativeEvent)
        //the element that raised the event
        console.log(args.target);
        console.dir(args.target);//to display the object on the console
        //the value for the button value, we will do casting (down case) because not all elements has innerHTML
        console.log((args.target as HTMLButtonElement).innerHTML);
        alert(item);
    }
    return (
        <div className="Recommended Box">
            <button onClick={recommendHandler}>Recommend</button>
        </div>
    );
    
}

export default Recommended;
