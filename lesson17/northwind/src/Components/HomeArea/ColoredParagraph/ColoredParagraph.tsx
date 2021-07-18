import { Component, SyntheticEvent } from "react";
import "./ColoredParagraph.css";

interface ColoredParagraphProps {
	
}

interface ColoredParagraphState {
	pColor:string;
    pText:string;
}

class ColoredParagraph extends Component<ColoredParagraphProps, ColoredParagraphState> {


    public constructor(props: ColoredParagraphProps) {
        super(props);
        this.state = {
			pColor:"",
            pText:""
        };
    }

    public render(): JSX.Element {
        return (
            <div className="ColoredParagraph">
				<input type="text" onChange={this.onChangeHandler}></input><br/>
                {/* this is cammelCase and not Kabab because its inside JS object, and in JS we are always using cammelCase syntax */}
                <p style={{backgroundColor:this.state.pText}}>
                    {this.state.pText}
                </p>
            </div>
        );
    }

    private onChangeHandler=(args:SyntheticEvent):void=>{
        const value=(args.target as HTMLInputElement).value;
        this.setState({pText:value});
    }
}

export default ColoredParagraph;
