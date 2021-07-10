import { Fragment } from "react";
import EmployeeModel from "../../Models/EmployeeModel";
import config from "../../Services/Config";
import "./EmployeeCard.css";

interface EmployeeCardProps {
	employee:EmployeeModel;
}

function EmployeeCard(props:EmployeeCardProps): JSX.Element {
    
    return (
        <div className="EmployeeCard Box">
            <h3>{props.employee.title}</h3>
			{props.employee.firstName} {props.employee.lastName}
            <br/>
            Residence: {props.employee.country} , {props.employee.city}
            <br/>
            Birth date: {props.employee.birthDate}
            <br/>
            <div className=''>
                <img src={config.urls.employeeImage+props.employee.imageName}/>
            </div>

        </div>
    );
}

export default EmployeeCard;
