import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../../Redux/AuthState";
import notify from "../../../Services/Nofity";
import "./Logout.css";

function Logout(): JSX.Element {
    const dispatch=useDispatch();
    const history=useHistory();
    // we can only write the side effects in the useEffect: (which will only happen once- because we are in the renderer function because it's functional component)
    useEffect(()=>{
        dispatch(logoutAction());
        notify.success("Logged out");
        history.push("/home");
    },[]);

    return null;
}

export default Logout;
