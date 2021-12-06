import axios from "axios";
import { Component } from "react";
import { Navigate, NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import authService from "../../../Services/AuthService";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import config from "../../../Utils/Config";
import "./DeleteEmployee.css";

interface DeleteEmployeeProps {
  id: number;
}

interface DeleteEmployeeState {
    employee: EmployeeModel;
    employee1: EmployeeModel;
}

class DeleteEmployee extends Component<
  DeleteEmployeeProps,
  DeleteEmployeeState
> {
    
    public async componentDidMount() {
        
    try {
      // Workaround:
      //authService.doesUserLoggedIn();
      const lastSlashIndex = window.location.pathname.lastIndexOf("/");
      const id = +window.location.pathname.substr(lastSlashIndex + 1);
      const idEmpl = this.props.id;
        // this.setState({employee});
        // alert(this.state.employee.id);
      // const response = await axios.delete<EmployeeModel>(config.urls.employees + idEmpl);
        this.deleteEmployee();
        
      // this.setState({ employee });
      // await employeesService.deleteEmployee(id);
      
    } catch (err: any) {
      notifyService.error(err);
    }
  }
  
    
  private deleteEmployee = async () => {
    
    
    const lastSlashIndex = window.location.pathname.lastIndexOf("/");
    const id = +window.location.pathname.substr(lastSlashIndex + 1);
    var answer = window.confirm("Delete data?");
    if (answer) {
      // notifyService.success("Delete employee ID --> Adididi? "+ id);
      const employee =await employeesService.deleteEmployee(id);
	
    this.setState({ employee });
    
    notifyService.success("Delete employee ID --> Adididi? " + id);
              // {this.deleteEmployee};
    }
    else {
      notifyService.error("Delete aborted--> Adididi? ");
        //some code
        // notifyService.error("Delete aborted);
    }
    
    
    //   alert(this.state.employee.id);
   
  };

  

  public render(): JSX.Element {
    return (
        <div className="DeleteEmployee">
 
{this.deleteEmployee};
        <Navigate to="/employees" />;
      </div>
    );
  }
}

export default DeleteEmployee;
