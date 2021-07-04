import "./Logo.css";
//this will create a path for the image by react (in real time it will be a different path than this one)
import logoImage from "../../../Assets/Images/logo.jpg" 
import { Component } from "react";

// function Logo(): JSX.Element {
//     return (
//         <div className="Logo">
//             {/* in react we must close the tag even if in HTML we don't need to, same for <br> => <br/> */}
// 			<img src={logoImage}/>
//         </div>
//     );
// }

//Class component - to compare with the functional component
class Logo extends Component{
    //In class we have more capabilities that we have from extending Component, after some time 
    //they added some of those capabilieties to the functional (by hooks)
    //render is like what the functional component returns
    public render():JSX.Element{
         return (
                    <div className="Logo">
            			<img src={logoImage}/>
                    </div>
                );
    }
}

export default Logo;
