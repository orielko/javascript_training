import Random from "../../LayoutArea/Random/Random";
import Sales from "../../LayoutArea/Sales/Sales";
import SalesClass from "../../LayoutArea/SalesClass/SalesClass";
import Bestseller from "../Bestseller/Bestseller";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Recommended from "../Recommended/Recommended";
import RecommendedClass from "../RecommendedClass/RecommendedClass";
import Spacials from "../Spacials/Spacials";

function Home(): JSX.Element {
    return (
        // <> is just like <Fragement>
        <> 
        {/* interpolation example -> {} */}
			<Discount/>
        {/* conditional */}
            <Spacials/>
        {/*Displaying a list */}
            <Desserts/>

        {/* Props */}
            <Sales category="beverages" percent={10}/>
            <SalesClass category="beverages" percent={10}/>
        {/* class exercise */}
            <Random name="Milkshake" min={1} max={30}/>
            <Recommended/>
            <RecommendedClass/>
        {/* state */}
            <Bestseller/>
        </>
    );
}

export default Home;
