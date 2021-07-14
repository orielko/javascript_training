import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./HelloUserMenu.css";

function HelloUserMenu(): JSX.Element {
    const user=useSelector((state:any)=>state.authState.user);
    return (
        <div className="HelloUserMenu">
			<span>Hello {user && ( user.firstName +' '+ user.lastName ) || ('guest')} </span>
                {!user && (<NavLink to="/login">Login</NavLink>)}
                {!user && (<NavLink to="/register">Register</NavLink>)}
                {user && (<NavLink to="/logout">Logout</NavLink>)}
        </div>
    );
}

export default HelloUserMenu;
