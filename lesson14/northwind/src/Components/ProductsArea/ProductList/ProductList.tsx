import axios from "axios";
import { Fragment } from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Services/Config";
import Loading from "../../SharedArea/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

interface ProductListState {
	products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    async componentDidMount(){
        try{
            // const response= await axios.get<ProductModel[]>("http://localhost:3030/api/products/delayed");
            const response= await axios.get<ProductModel[]>(config.urls.products);
            this.setState({products:response.data});
        }catch(err){
           console.error(err); 
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">
				<h2>Product list</h2>
                <NavLink to={"/products/new/"} className="Box">
                    Add product
                </NavLink><br/>
                {/* we must use '?' for when we don't have it yet on the state */}
                {(!this.state && <Loading/>) || this.state?.products.map(item=><ProductCard key={item.id} product={item}/>)}
            </div>
        );
    }
}

export default ProductList;
