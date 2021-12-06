import axios from "axios";
import { Component, ReactNode } from "react";
import { Navigate, NavLink, Route, useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesStore from "../../../Redux/Store";
import authService from "../../../Services/AuthService";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import config from "../../../Utils/Config";
import DeleteEmployee from "../DeleteEmployee/DeleteEmployee";
import EditEmployee from "../EditEmployee/EditEmployee";
import Employees from "../Employees/Employees";
import "./EmployeeDetails.css";


interface EmployeeDetailsProps {}

interface EmployeeDetailsState {
  employee: EmployeeModel;
  employee1: EmployeeModel[];
}

class EmployeeDetails extends Component<
  EmployeeDetailsProps,
  EmployeeDetailsState
> {
  birthdayNew: string;


  
  public async componentDidMount() {
    try {
      // Workaround:
      const lastSlashIndex = window.location.pathname.lastIndexOf("/");
      const id = +window.location.pathname.substr(lastSlashIndex + 1);

      // const response = await axios.get<EmployeeModel>(
      //   config.urls.employees + id
      // );
      const employee = await employeesService.getOneEmployee(id);
      this.setState({ employee });

      employeesStore.subscribe(() => {
        const employee1 = employeesStore.getState().employees;
        this.setState({ employee1 });
    });

    } catch (err: any) {
      notifyService.error(err);
    }
  }

  // private showItem3 = () => { // Same "this" outside will be the "this" inside.

  //     const birthday = this.state?.employee?.birthDate;
  //         const arr = birthday.split('-');
  //         let birthdayNew = `${arr[2]}-${arr[1]}-${+arr[0] + 30}`;
  //     this.state.employee.birthDate = birthdayNew;
  //     console.log(`-------------
  //     ${this.state.employee.birthDate}
  //     ------------------`);

  //     alert("Favorite: " + birthdayNew);
  //     this.birth2 = birthdayNew;
  //     return this.state?.employee?.birthDate;
  // }
  // public birth2: string;

  private deleteEmployee = async () => {
    
    authService.doesUserLoggedIn();
    const lastSlashIndex = window.location.pathname.lastIndexOf("/");
    const id = +window.location.pathname.substr(lastSlashIndex + 1);

    <DeleteEmployee id={id}/>;

    const employee =await employeesService.deleteEmployee(id);
	
    this.setState({ employee });
    notifyService.success("Delete employee ID 2222--> " + id);
    //alert("Delete employee ID: " + id);
    <Route path="/employees"  />
    // this.props.history.push("/employees");
    

    // <Redirect to='/employees' />
    // this.props.history.push
  };

  public render(): JSX.Element {
    return (
      <div className="EmployeeDetails">
        <div className="EmployeeDetails1 Box">
          <h3>First Name: {this.state?.employee?.firstName}</h3>
          <h3>Last Name: {this.state?.employee?.lastName} </h3>
          <h3>Title: {this.state?.employee?.title}</h3>
          <h3>Country: {this.state?.employee?.country}</h3>
          <h3>City: {this.state?.employee?.city}</h3>
          <h3> BirthDate:{this.state?.employee?.birthDate} </h3>
          <img
            src={config.urls.employeesImages + this.state?.employee?.imageName}
          />

          <NavLink to={"/employees/edit/" +this.state?.employee?.id}>
            <button className="editEmployeeButton">Edit Employee </button>
          </NavLink>
<br />
          <NavLink to="/employees">Back</NavLink>

          <NavLink to={"/employees/edit/" +this.state?.employee?.id}>
            {/* <Route path="/employees/edit/:id" element={<EditEmployee id={0} firstName={""} lastName={""} title={""} country={""} city={""} birthDate={""} />} />  */}
          </NavLink>
        </div>
        {/* <div className="deleteEmployeeButton">
          <NavLink to={""}>
            <button
              className="deleteEmployeeButton1"
              onClick={this.deleteEmployee}
              
            >
              Delete Employee
             
            </button>
          </NavLink>
        </div> */}

        <div className="deleteEmployeeButton2">
        <NavLink to={"/employees/delete/" +this.state?.employee?.id}>
            <button
              className="deleteEmployeeButton2"
              
            >
              Delete Employee
            </button>
          </NavLink>
        </div>

      </div>
    );
  }
}

export default EmployeeDetails;
