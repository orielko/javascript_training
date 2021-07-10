import axios from "axios";
import config from "../../../Services/Config";
import { Component } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import "./Employees.css";
import EmployeeCard from "../../EmployeeCard/EmployeeCard";

interface EmployeesListState{
    employees:EmployeeModel[];
}
class Employees extends Component<{},EmployeesListState> {
   async componentDidMount(){
       try{
        const response=await axios.get<EmployeeModel[]>(config.urls.employees);
        this.setState({employees:response.data});

       }catch(e){
           console.error(e);
       }
   }

    public render():JSX.Element{
        return( 
            <div className="Employees">
{!this.state || this.state?.employees.map(employee=><EmployeeCard key={employee.id} employee={employee} />)}
            </div>
        );
    }
}

export default Employees;
