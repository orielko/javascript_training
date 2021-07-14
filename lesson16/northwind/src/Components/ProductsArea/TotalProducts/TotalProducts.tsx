import { Component } from "react";
import { Unsubscribe } from "redux";
import store from "../../../Redux/Store";
import "./TotalProducts.css";

interface TotalProductsState {
	count:number;
}

class TotalProducts extends Component<{}, TotalProductsState> {

    public constructor(props: {}) {
        super(props);
        // this.state = {
        //     // this will not work (will be 0) because the component is built before the store state is set
		// 	// count:store.getState().productsState.products.length
        // };
    }
    private unsubscribeMe:Unsubscribe;
    componentDidMount():void{
        this.unsubscribeMe=store.subscribe(()=>{this.setState({count:store.getState().productsState.products.length})});
    }

    public render(): JSX.Element {
        return (
            <div className="TotalProducts">
				{this.state && <span>Total products: {this.state?.count}</span>}
            </div>
        );
    }

    componentWillUnmount(){
        this.unsubscribeMe();
    }
}

export default TotalProducts;
