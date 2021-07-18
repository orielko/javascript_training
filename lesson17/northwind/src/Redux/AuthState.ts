import axios from "axios";
import UserModel from "../Models/UserModel";
import store from "./Store";

export class AuthState{
    public user:UserModel=null;
    constructor(){
        this.user=JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
    }
}

export enum AuthActionType{
    Register="Register",
    Login="Login",
    Logout="Logout"
}

export interface AuthAction{
    type:AuthActionType;
    payload?:any; //optional: on logout we don't need payload
}

export function registerAction(user:UserModel):AuthAction{
    return {type:AuthActionType.Register,payload:user};
}
export function loginAction(user:UserModel):AuthAction{
    return {type:AuthActionType.Login,payload:user};
}
export function logoutAction():AuthAction{
    return {type:AuthActionType.Logout};
}

export function authReducer(currentState:AuthState=new AuthState(),action:AuthAction):AuthState{
    const newState={...currentState};
    switch(action.type){
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.user=action.payload;
            localStorage.setItem("user",JSON.stringify(newState.user));
            //general way to always send the token
            axios.interceptors.request.use(request=>{
                request.headers={"authorization":"Bearer "+store.getState().authState.user?.token};
                //if null is sent it will not "approve" the request and will abort the request
                return request;
            });
            break; 
        case AuthActionType.Logout:
            newState.user=null;
            localStorage.removeItem("user");
            break; 
    }
    return newState;
}