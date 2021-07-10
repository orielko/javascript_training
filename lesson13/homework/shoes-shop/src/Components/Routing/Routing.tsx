import { Route, Switch } from "react-router-dom";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import SuccessStories from "../Pages/SuccessStories/SuccessStories";
import "./Routing.css";
import HomePage from "../Pages/HomePage/HomePage";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={HomePage} exact/>
                <Route path="/products" component={Products} exact/>
                <Route path="/success_stories" component={SuccessStories} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/" component={HomePage} exact/>
                <Route component={PageNotFound} exact/>

            </Switch>
        </div>
    );
}

export default Routing;
