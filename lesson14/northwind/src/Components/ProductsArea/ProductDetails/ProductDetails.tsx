import axios from "axios";
import { Component, Fragment } from "react";
import { NavLink, RouteComponentProps } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Services/Config";
import Loading from "../../SharedArea/Loading/Loading";
import "./ProductDetails.css";

// we need to create an interface with the routing parameters
interface RouteParams{
    id:string;
}

// to get the params, we need to extend 'RouteComponentProps' with our RouteParams interface for the generics
interface ProductDetailsProps extends RouteComponentProps<RouteParams>{
	
}

interface ProductDetailsState {
	product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    async componentDidMount(){
        try{
            const id=this.props.match.params.id;
            const response= await axios.get<ProductModel>(config.urls.products+id);
            this.setState({product:response.data});
        }catch(err){
           console.error(err); 
        }

    }

    public render(): JSX.Element {
        return (
            <div className="ProductDetails">
                {(!this.state && <Loading/>) ||  
                <Fragment>
                    <h1>{this.state.product.name}</h1>
                    <h2>Price: ${this.state.product.price}</h2>
                    <h2>Stock: {this.state.product.stock}</h2>
                    <img src={config.urls.productsImages+this.state.product.imageName}/> <br/>
                    <NavLink to={"/products/"} className="Box">
                        Back
                    </NavLink>
                </Fragment>
           
                }
            </div>
        );
    }
}

export default ProductDetails;
