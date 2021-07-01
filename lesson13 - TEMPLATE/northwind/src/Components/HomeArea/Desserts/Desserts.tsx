import "./Desserts.css";

function Desserts(): JSX.Element {
    
    const items=[
        {id:1,name:"Ice cream",price:10},
        {id:2,name:"Pavlova",price:7},
        {id:3,name:"Eclair",price:5},
        {id:4,name:"Cake",price:16},
    ];

    return (
        <div className="Desserts">
			<p>
                Our desserts:
                {
                    // we need key so react will know if to re-render the element (performance)
                    items.map((x,index)=><span key={x.id}> {x.name} ({x.price} nis) {index!==items.length-1 && ' | '}</span>)
                }
            </p>
        </div>
    );
}

export default Desserts;
