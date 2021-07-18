import axios from "axios";
import { Component, Fragment } from "react";
import { NavLink, Redirect, RouteComponentProps, useHistory } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import { deleteProductAction } from "../../../Redux/ProductsState";
import store from "../../../Redux/Store";
import config from "../../../Services/Config";
import Loading from "../../SharedArea/Loading/Loading";
import notify from "../../../Services/Nofity";

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
    redirect:string
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    async componentDidMount(){
        try{
            //convert to number for the "find"
            const id=+this.props.match.params.id;
            // const response= await axios.get<ProductModel>(config.urls.products+id);
            //this.setState({product:response.data});
            const product=store.getState().productsState.products.find(p=>p.id===id);
            this.setState({product});
        }catch(err){
           console.error(err); 
        }

    }

    //we build it as arrow so we will have "this"
    public deleteHandler=async ()=>{
        const answer=window.confirm("Are you sure?");
        if(answer){
            try{
                //delete this product in server side
                const response= await axios.delete<ProductModel>(config.urls.products+this.state.product.id);
                //delete this product in client side
                store.dispatch(deleteProductAction(this.state.product.id));
                notify.success("Product removed");
                this.setState({redirect:"/products"})
            }catch(e){
                notify.error(e);
            }

        }
    }

    public render(): JSX.Element {
        //we can also do for redirect: (we have it from RouteComponentProps)
        //this.props.history.push("/products");
        if(this.state?.redirect){
            return <Redirect to={this.state.redirect}/>
        }else{

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
                        <button onClick={this.deleteHandler}>Delete</button>
                    </Fragment>
               
                    }
                </div>
            );
        }
    }
}

export default ProductDetails;
