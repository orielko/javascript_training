import { Component } from "react";
import "./RandomProduct.css";
import nikeImage from "../Shoes/assets/images/nike.jpg"
import reebokImage from "../Shoes/assets/images/reebok.jpg"
import adidasImage from "../Shoes/assets/images/adidas.jpg"
import Shoes from "../Shoes/Shoes";
import { setInterval } from "timers";
interface RandomProductProps {
	
}

interface RandomProductState {
	currentShoeIndex:number;
}

class RandomProduct extends Component<RandomProductProps, RandomProductState> {
    private sellingShoes = [
        { id: 1, model: "Mike", size: 33, price: 300, image: nikeImage },
        { id: 2, model: "Abidas", size: 43, price: 350, image: reebokImage },
        { id: 3, model: "Reebot", size: 53, price: 400, image: adidasImage }
    ];
    intervalId=0;
    public constructor(props: RandomProductProps) {
        super(props);
        this.state = {
			currentShoeIndex: this.getRandomShoeId()
        };
    }

    private getRandomShoeId():number{
        return Math.floor(Math.random()*this.sellingShoes.length);
    }

    public render(): JSX.Element {
        return (
            <div className="RandomProduct">
				<Shoes key={this.sellingShoes[this.state.currentShoeIndex].id}
                 model={this.sellingShoes[this.state.currentShoeIndex].model}
                  size={this.sellingShoes[this.state.currentShoeIndex].size} 
                  price={this.sellingShoes[this.state.currentShoeIndex].price}
                   image={this.sellingShoes[this.state.currentShoeIndex].image}  />
            </div>
        );
    }

    public componentDidMount(){
        this.intervalId=window.setInterval(() => {
            let randomProduct=this.getRandomShoeId();
            while(randomProduct===this.state.currentShoeIndex){
                randomProduct=this.getRandomShoeId();
            }
            this.setState({currentShoeIndex: randomProduct});
        }, 1000);
    }
    public componentWillUnmount(){
        window.clearInterval(this.intervalId);
    }

}

export default RandomProduct;
