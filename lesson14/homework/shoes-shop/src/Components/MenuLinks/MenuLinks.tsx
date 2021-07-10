import { NavLink } from "react-router-dom";
import "./MenuLinks.css";

function MenuLinks(): JSX.Element {
    return (
        <div className="MenuLinks">
			<h1>Menu</h1>
           <NavLink to="/home" >Home</NavLink>
           <NavLink to="/products" >Products</NavLink>
           <NavLink to="/success_stories" >Success Stories</NavLink>
           <NavLink to="/employees" >Our employees</NavLink>
           <NavLink to="/about" >Who are we?</NavLink> 
        </div>
    );
}

export default MenuLinks;
