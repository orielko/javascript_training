import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Services/Config";
import "./AddProduct.css";

function AddProduct(): JSX.Element {
    /* 
        we will use library for the form elements: 
                    npm i react-hook-form 
    */

    const {register,handleSubmit}=useForm<ProductModel>();
    // react hook that helps to redirect
    const history=useHistory();
    async function send(product:ProductModel){
        console.log(product);
        try{
            const formData=new FormData();
            formData.append("name",product.name);
            formData.append("price",product.price.toString());
            formData.append("stock",product.stock.toString());
            formData.append("image",product.image.item(0));
            const response= await axios.post<ProductModel>(config.urls.products,formData);
            console.log(response.data.id);
            history.push("/products"); 
        }catch(err){
           console.error(err); 
        }
    }

    return (
        <div className="AddProduct">
			<h2>Add Product</h2>
            {/* we need to use handleSubmit because "onSubmit" is a react event and expects the params: "args" */}
            <form onSubmit={handleSubmit(send)}>
                <label>Name:</label>
                {/* '...' operator is spread operator, creates new object with the other parts from the inside object */}
                <input type="text" {...register("name")}/>
                <label>Price:</label>
                <input type="number" {...register("price")}/>
                <label>Stock:</label>
                <input type="number" {...register("stock")}/>
                <label>Image:</label>
                <input type="file" {...register("image")} accept="image/*" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
