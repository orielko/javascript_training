import UserModel from "../../../Models/UserModel";
import "./Register.css";
import { useForm } from "react-hook-form";
import notify from "../../../Services/Nofity";
import axios from "axios";
import config from "../../../Services/Config";
import { useDispatch } from "react-redux";
import { registerAction } from "../../../Redux/AuthState";
import { useHistory } from "react-router-dom";

function Register(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<UserModel>();
    const dispatch=useDispatch();
    const history=useHistory();
    async function send(user:UserModel){
        console.log(user);
        try{
            const response=await axios.post<UserModel>(config.urls.register,user);
            dispatch(registerAction(response.data));
            console.log(response.data);
            notify.success("Registration succeeded");
            history.push("/home"); 

            
        }catch(e){
            notify.error(e);
        }
    }
    return (
        <div className="Register Box">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")}/>
                <label>Last Name:</label>
                <input type="text" {...register("lastName")}/>
                <label>User Name:</label>
                <input type="text" {...register("username")}/>
                <label>Password:</label>
                <input type="password" {...register("password")}/>
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
