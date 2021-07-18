import { useSelector } from "react-redux";
import "./TotalProductsFunctionalComponent.css";

function TotalProductsFunctionalComponent(): JSX.Element {

    const count=useSelector((state:any)=>{
        return state.productsState.products.length;
    })
    return (
        <div className="TotalProductsFunctionalComponent">
			{count>0 && <span>Total products: {count}</span>}
        </div>
    );
}

export default TotalProductsFunctionalComponent;
