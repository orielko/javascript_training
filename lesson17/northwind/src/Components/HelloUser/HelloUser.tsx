import { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Unsubscribe } from "redux";
import UserModel from "../../Models/UserModel";
import store from "../../Redux/Store";
import "./HelloUser.css";

interface HelloUserState {
	user:UserModel
}

class HelloUser extends Component<{}, HelloUserState> {

    private unsubscribeMe:Unsubscribe;
    constructor(){
        super({});
        this.state={
            user:store.getState().authState.user
        }
    }
    componentDidMount():void{
        this.unsubscribeMe=store.subscribe(()=>{this.setState({user:store.getState().authState.user})});
    }

    


    public render(): JSX.Element {
        console.log('@@@@@@@',store.getState().authState);
        const loggedIn=store.getState().authState.user!==null;
        return (
            <div className="HelloUser">
				<span>Hello {loggedIn && ( this.state.user.firstName +' '+ this.state.user.lastName ) || ('guest')} </span>
                {!loggedIn && (<NavLink to="/login">Login</NavLink>)}
                {!loggedIn && (<NavLink to="/register">Register</NavLink>)}
                {loggedIn && (<NavLink to="/logout">Logout</NavLink>)}
            </div>
        );
    }

    componentWillUnmount(){
        this.unsubscribeMe();
    }
}

export default HelloUser;
