import "./Random.css";

interface RandomProps{
    name:string;
    min:number;
    max:number;
}
function Random(props:RandomProps): JSX.Element {
    return (
        <div className="Random">
            <span>
                ONLY today you can buy {props.name} for {Math.floor(Math.random()*props.max-props.min+props.min+1)} nis
            </span>
        </div>
    );
}

export default Random;
