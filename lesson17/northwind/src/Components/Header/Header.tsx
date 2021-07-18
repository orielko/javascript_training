import HelloUser from "../HelloUser/HelloUser";
import Logo from "../LayoutArea/Logo/Logo";
import "./Header.css";

function Header():JSX.Element{
    return (
        <div className="Header">
            <Logo/>
            <h1>
                Traders
            </h1>
            <HelloUser/>
        </div>
    );
}

export default Header;