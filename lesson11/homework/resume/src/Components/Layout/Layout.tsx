import Details from "../Details/Details";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header/>
            <Details/>
            <Skills/>
        </div>
    );
}

export default Layout;
