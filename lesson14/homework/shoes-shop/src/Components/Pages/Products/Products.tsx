import "./Products.css";
import nikeImage from "../../Shoes/assets/images/nike.jpg"

function Products(): JSX.Element {
    const shoes=[];
    for (let index = 0; index < 30; index++) {
       shoes.push(<img src={nikeImage}/>);
        
    }
    return (
        <div className="Products">
			{shoes}
        </div>
    );
}

export default Products;
