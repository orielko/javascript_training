import { Component } from "react";
import "./Clock.css";

interface ClockProps {
	
}

interface ClockState {
	time:string;
}

class Clock extends Component<ClockProps, ClockState> {

    private intervalId:NodeJS.Timeout;
    //ctor is the first life cycle hook which is happenning (when the object is created)
    //usage: init state and fields
    public constructor(props: ClockProps) {
        super(props);
        this.state = {
			time:""
        };
    //     setInterval(() => {
    //         //we should not do setState in the constructor because the object is not mounted yet
    //         //we will get warning on the console for it even if it's in interval 
    //         this.setState({time:new Date().toLocaleTimeString()})
    //     }, 1000)
    }

    //render is the second like cycle hook 
    //usage: the render updates the UI
    public render(): JSX.Element {
        return (
            <div className="Clock">
				<span>{this.state.time}</span>
            </div>
        );
    }

    //component is ready for use. this function is called once
    //usage: do logic once
    public componentDidMount():void{
        this.intervalId=setInterval(() => {
                    this.setState({time:new Date().toLocaleTimeString()})
                }, 1000);
    }

    //state or props has been changed
    //usage: do logic accordingly
    public componentDidUpdate(pervProps:ClockProps,prevState:ClockState):void{
        // console.log(prevState);
    }

    //crash at child component
    //usage: do logic accordingly
    public componentDidCatch():void{

    }

    //component is about to be destroyed
    //usage: cleaning , closing, ending operations
    public componentWillUnmount():void{
        console.log("cleared interval id",this.intervalId);
        clearInterval(this.intervalId);
    }
}

export default Clock;
