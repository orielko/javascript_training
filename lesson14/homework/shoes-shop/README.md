# to activate north-wind-backend
http://localhost:3030/api/employees
### `northwind`

# to ignore the unassign variables on the model: 
add    
### "strictNullChecks": false,
on the tsconfig.json file

# to use the model for the display component (such as card) we should use props for the details
```javascript
interface EmployeeCardProps {
	employee:EmployeeModel;
}
...
function EmployeeCard(props:EmployeeCardProps): JSX.Element {
...
            <h3>{props.employee.title}</h3>
...
```

# Axious - Ajax

 ### `npm i --save-dev @types/axios`

## First define the model:

```javascript
interface EmployeesListState{
    employees:EmployeeModel[];
}
``` 

## Better to create a class because we want to involve in the component lifecycle
```javascript
import axios from "axios";
class Employees extends Component<{},EmployeesListState> {
   async componentDidMount(){
       try{
        const response=await axios.get<EmployeeModel[]>("http://...");
        this.setState({employees:response.data});

       }catch(e){
           console.error(e);
       }
   }
...
    public render():JSX.Element{
            return( 
                <div className="Employees">
    {!this.state || this.state?.employees.map(employee=><EmployeeCard key={employee.id} employee={employee} />)}
                </div>
            );
        }
```