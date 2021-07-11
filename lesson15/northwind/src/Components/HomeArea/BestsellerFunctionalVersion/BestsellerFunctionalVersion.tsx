import { useState } from "react";
import "./BestsellerFunctionalVersion.css";

function BestsellerFunctionalVersion(): JSX.Element {

    // we can ONLY use react hooks in FUNCTIONAL COMPONENT
    // we can ONLY use react hooks inside conditions
    // react hooks will start with the word: "use" for example useState()
    
    const itemArray=useState<string>("",);

    let item=itemArray[0];
    let setItem=itemArray[1];

    const priceArray=useState<number>(0,);
    let price=priceArray[0];
    let setPrice=priceArray[1];

    function displayHandler(){
        setItem("Irish coffee");
        setPrice(9.8);
    }

    return (
        <div className="BestsellerFunctionalVersion Box">
            <button onClick={displayHandler}>Bestseller item (functional)</button>
            <span>{item} {price}</span>

        </div>
    );

    

}

export default BestsellerFunctionalVersion;
