import { useEffect, useState } from "react";
import "./ClockFunctionalVersion.css";

function ClockFunctionalVersion(): JSX.Element {

    //Side-Effect: every action which is happening outside the component, for example: ajax is side-effect
    //we are not allowed to write side-effect directly in the fc component because we don't know how many times this will be called
    const [time,setTime]=useState<string>("");
    //to simulate: componentWillMount second parameter needs to be empty
    //second param, is array which is if the array is changed, the useEffect will be called again
    useEffect(()=>{
        const id=setInterval(()=>{
            const now=new Date();
            setTime(now.toLocaleTimeString());
        },1000);
        return ()=>window.clearInterval(id);
    },[]);

    //to simulate: componentDidUpdate
    // useEffect(()=>{
            //logic here
    // },[myProps,myState]);

    //to simulate: componentWillUnmount:
    useEffect(()=>{
        return ()=>{
            //my code for closing or cleaning etc...
        };
    },[]);

    return (
        <div className="ClockFunctionalVersion">
			{time}
        </div>
    );
}

export default ClockFunctionalVersion;
