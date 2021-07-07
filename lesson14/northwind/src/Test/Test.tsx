import "./Test.css";

//FC (functional component) - most of the components
function Test():JSX.Element{ //JSX.Element -> the component UI
    //return //we cant write return and use new line after because the "Semicolon-Injection" mechanism will do: return;
    return (<div className="Test">
            <p >Testing functional component</p>
        </div>);
    //another syntax: (for readable new lines)
    // return(
    //     <p>Testing functional component</p>
    // );
    // return <p class="...">Testing functional component</p>; //we can't write class because class is saved word for HTML classes

}

export default Test;
//CC (class component) - for more complex cases 