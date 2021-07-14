import { Provider } from "react-redux";
import store from "../../../Redux/Store";
import Header from "../../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";
function Layout():JSX.Element{
    return (
        <Provider store={store}>
            <div className="Layout">
                <header><Header/></header>
                <aside><Menu/></aside>
                <main><Routing/></main>
                <footer><Footer/></footer>
            </div>

        </Provider>
    );
}

export default Layout;