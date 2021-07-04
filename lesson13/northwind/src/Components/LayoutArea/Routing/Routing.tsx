import { Redirect, Route, Switch, SwitchProps } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            {/* this is the routing mechanism, we configure here for which route which component will be displayed */}
            {/* it takes the first which is matching, so it could also take the first for /home/here unless we add "exact" attribute */}
            <Switch>
                <Route path="/home" component={Home} exact />
                <Route path="/products" component={ProductList} exact />
                <Route path="/about" component={About} exact />
                {/* first way for default homepage */}
                <Route path="/" component={Home} exact />
                {/* second way for default homepage */}
                <Redirect from="/" to="/home" exact/>
                {/* page not found */}
                {/* <Route component={Home}/> */}
                <Route component={PageNotFound} />


            </Switch>
        </div>
    );
}

export default Routing;
