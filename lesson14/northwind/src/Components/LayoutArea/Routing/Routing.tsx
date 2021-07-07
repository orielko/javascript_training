import { Redirect, Route, Switch, SwitchProps } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";
import  Loadable  from "react-loadable";
import React from "react";
import Loading from "../../SharedArea/Loading/Loading";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            {/* this is the routing mechanism, we configure here for which route which component will be displayed */}
            {/* it takes the first which is matching, so it could also take the first for /home/here unless we add "exact" attribute */}
            <Switch>
                <Route path="/home" component={Home} exact />
                <Route path="/products" component={ProductList} exact />
                <Route path="/products/new" component={AddProduct} exact />
                {/* route with parameter, '?' for optional */}
                {/* <Route path="/products/details/:id?" component={ProductDetails} exact /> */}
                {/* <Route path="/products/details/:id" component={ProductDetails} exact /> */}

                {/* inside the Brackets we can define a regex for the input pattern */}
                <Route path="/products/details/:id([0-9]+)" component={ProductDetails} exact />

                 {/* To use lazy loading we need the next package: npm i react-loadable @types/react-loadable */}
                 {/* Instead of: */}
                {/* <Route path="/about" component={About} exact /> */}
                {/* Use: (for lazy loading) */}
                <Route path="/about" component={Loadable({
                    loader:()=>import("../../AboutArea/About/About")
                    ,
                    loading: Loading
                })} exact />
                
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
