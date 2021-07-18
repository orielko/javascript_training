import axios from "axios";
import { useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import { addProductAction } from "../../../Redux/ProductsState";
import store from "../../../Redux/Store";
import config from "../../../Services/Config";
import notify from "../../../Services/Nofity";
import "./AddProduct.css";

function AddProduct(): JSX.Element {
    /* 
        we will use library for the form elements: 
                    npm i react-hook-form 
    */

    const {register,handleSubmit, formState}=useForm<ProductModel>();
    // react hook that helps to redirect
    const history=useHistory();
    useEffect(()=>{
        if(!store.getState().authState.user){
            history.push("/login");
        }

    });

    async function send(product:ProductModel){
        console.log(product);
        try{
            const formData=new FormData();
            formData.append("name",product.name);
            formData.append("price",product.price.toString());
            formData.append("stock",product.stock.toString());
            formData.append("image",product.image.item(0));
            // one way to add the token to the header: (second way is to attach it to all)
            // const headers={"authorization":"Bearer "+store.getState().authState.user?.token};
            // const response= await axios.post<ProductModel>(config.urls.products,formData, {headers});
            
            const response= await axios.post<ProductModel>(config.urls.products,formData);
            store.dispatch(addProductAction(response.data));
            notify.success("Added product");
            history.push("/products"); 
        }catch(err){
           notify.error(err);
        }
    }

    return (
        <div className="AddProduct">
			<h2>Add Product</h2>
            {/* we need to use handleSubmit because "onSubmit" is a react event and expects the params: "args" */}
            <form onSubmit={handleSubmit(send)}>
                <label>Name:</label>
                {/* '...' operator is spread operator, creates new object with the other parts from the inside object */}
                <input type="text" {...register("name", {required: true, minLength:3, pattern:/^[A-Z]\S+/ })} />
                {formState.errors.name?.type==="required" && <span>Missing name</span>}
                {formState.errors.name?.type==="minLength" && <span>Name is too short</span>}
                {formState.errors.name?.type==="pattern" && <span>Name must start with capital letter</span>}
                <label>Price:</label>
                {/* second method to display errors is to write the errors inside */}
                <input type="number" {...register("price", {required: {value:true,message:"Missing price"}, min:{value:0, message:"Price can't be negative"},max:{value:1000, message:"Max value could be 1000"}})}/>
                <span>{formState.errors.price?.message}</span>
                <label>Stock:</label>
                <input type="number" {...register("stock", {required: {value:true,message:"Missing stock"}, min:{value:0, message:"stock can't be negative"},max:{value:10000, message:"Max value could be 10,000"}})}/>
                <span>{formState.errors.stock?.message}</span>
                <label>Image:</label>
                <input type="file" {...register("image")} accept="image/*" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
