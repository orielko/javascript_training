import Shoes from "../Shoes/Shoes";
import "./Main.css";
import nikeImage from "../Shoes/assets/images/nike.jpg"
import reebokImage from "../Shoes/assets/images/reebok.jpg"
import adidasImage from "../Shoes/assets/images/adidas.jpg"


function Main(): JSX.Element {
    //display SALE only on Sunday (0) and Monday (1)
    const today: number = new Date().getDay();
    const sellingShoes = [
        { id: 1, model: "Mike", size: 33, price: 300, image: nikeImage },
        { id: 2, model: "Abidas", size: 43, price: 350, image: reebokImage },
        { id: 3, model: "Reebot", size: 53, price: 400, image: adidasImage }
    ];
    return (
        <div className="Main">
            {(today === 0 || today === 1) && <p>SALE!</p>}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3HjIljJd-o0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <ul>
                {sellingShoes.map((shoe) => <li key={shoe.id}>{shoe.model}</li>)}
            </ul>
            {sellingShoes.map(shoe =>
                <Shoes key={shoe.id} model={shoe.model} size={shoe.size} price={shoe.price} image={shoe.image} />
            )}
        </div>
    );
}

export default Main;
