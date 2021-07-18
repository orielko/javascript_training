import Loading from "../../SharedArea/Loading/Loading";
import "./About.css";
import HeavyImage from "./assets/images/pexels-sanaan-mazhar-3052361.jpg";
import HeavyImage2 from "./assets/images/pexels-henda-watani-320014.jpg";
import HeavyImage3 from "./assets/images/pexels-eberhard-grossgasteiger-443446.jpg";
import HeavyImage4 from "./assets/images/whereslugo-vClGqkkQD9w-unsplash.jpg";
import Hours from "../Hours/Hours";
function About(): JSX.Element {
    return (
        <div className="About">
			{/* <Loading/> */}
            <img src={HeavyImage}/>
            <img src={HeavyImage2}/>
            <img src={HeavyImage3}/>
            <img src={HeavyImage4}/>
            <Hours/>
        </div>
    );
}

export default About;
