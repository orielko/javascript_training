import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import { useForm } from "react-hook-form";
import config from "../../../Services/Config";

import "./Login.css";
import notify from "../../../Services/Nofity";
import { loginAction } from "../../../Redux/AuthState";
import UserModel from "../../../Models/UserModel";


function Login(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<CredentialsModel>();
    const dispatch=useDispatch();
    const history=useHistory();
    async function send(user:CredentialsModel){
        console.log(user);
        try{
            const response=await axios.post<UserModel>(config.urls.login,user);
            dispatch(loginAction(response.data));
            console.log(response.data);
            notify.success("Login succeeded");
            history.push("/home"); 
            
        }catch(e){
            notify.error(e);
        }
    }
    return (
        <div className="Login Box">
			<h2>Login</h2>
            <form onSubmit={handleSubmit(send)}>
                <label>User Name:</label>
                <input type="text" {...register("username")}/>
                <label>Password:</label>
                <input type="password" {...register("password")}/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
