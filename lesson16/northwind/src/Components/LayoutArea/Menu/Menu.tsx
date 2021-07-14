import { NavLink } from "react-router-dom";
import HelloUserMenu from "../../AuthArea/HelloUserMenu/HelloUserMenu";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <HelloUserMenu/>
            {/* we should not use "a" tag, because it refreshes all the page */}
			{/* <a href="/home">Home</a>
			<a href="/products">Products</a>
			<a href="/about">About</a> */}
            {/* use nav instead */}
            <NavLink to="/home/" exact>Home</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Menu;
