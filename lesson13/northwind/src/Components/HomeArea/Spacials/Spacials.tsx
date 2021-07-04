import "./Spacials.css";

function Spacials(): JSX.Element {
    return (
        <div className="Spacials Box">
			<p>
                {/* short circuit syntax */}
                Our spacials:
                {
                isWeekend()&&<span>Pizza</span>||<span>Pasta</span>
                }
            </p>
        </div>
    );
}

function isWeekend():boolean{
    const now=new Date();
    const dayOfWeek=now.getDay()+1;
    return dayOfWeek>=6;
}
export default Spacials;
