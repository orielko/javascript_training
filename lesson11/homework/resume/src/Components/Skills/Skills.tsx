import "./Skills.css";

function Skills(): JSX.Element {
    const skills:string[]=["Java","Scala","JavaScript","Python","React","Spark","Angular 1.6","Seismic"];
    return (
        <div className="Skills">
            
            <h2>I know the following technologies:</h2>
            <p>
                <ul>
                    {skills.map(skill=>{return <li>{skill}</li>})}
                </ul>
            </p>
        </div>
    );
}

export default Skills;
