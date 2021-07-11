import "./Sales.css";
//Child component of "Home"
//name is the convention for the interface: [component name]Props
interface SalesProps{
    category:string;
    percent:number;
}

// function Sales(props:{category:string,percent:number}): JSX.Element {
//props types can be also defined by interface (the above syntax is less common)
function Sales(props:SalesProps): JSX.Element {
    
    return (
        <div className="Sales Box">
			<p>
                Sale: {props.percent}% discount on all {props.category}!
            </p>
        </div>
    );
}

export default Sales;
