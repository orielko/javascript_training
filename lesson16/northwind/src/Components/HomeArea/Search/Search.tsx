import { Component, SyntheticEvent } from "react";
import "./Search.css";

interface SearchState{
    textToSearch:string;
}
class Search extends Component<{},SearchState> {

    // first we need to define a variable to be binded to the search value, and we want it on the state so it will affect the render
    constructor(props:{}){
        super(props);
        this.state={textToSearch:""};
    }

    //because it uses "this" we want to use an arrow function syntax
    private changeHandler=(args:SyntheticEvent)=>{
        const value=(args.target as HTMLInputElement).value;
        this.setState({textToSearch:value});
    }
    private clearHandler=(args:SyntheticEvent)=>{
        this.setState({textToSearch:''});
    }

    public render(): JSX.Element {
        return (
            <div className="Search Box">
				<label>Text to Search:</label>
                <input type="text" onChange={this.changeHandler} value={this.state.textToSearch}/><br/>
                <span>Searching for: {this.state.textToSearch}</span><br/>
                <button onClick={this.clearHandler}>Clear</button>
            </div>
        );
    }
}

export default Search;
