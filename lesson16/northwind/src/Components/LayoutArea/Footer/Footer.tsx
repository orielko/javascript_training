import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import TotalProductsFunctionalComponent from "../../ProductsArea/TotalProductsFunctionalComponent/TotalProductsFunctionalComponent";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <TotalProducts/>
			<span>this is my website</span>
            <TotalProductsFunctionalComponent/>
        </div>
    );
}

export default Footer;
