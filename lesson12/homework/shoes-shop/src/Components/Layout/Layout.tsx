import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header/>
            <NavigationMenu/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default Layout;
