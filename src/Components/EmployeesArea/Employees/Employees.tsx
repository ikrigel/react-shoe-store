import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesStore from "../../../Redux/Store";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import config from "../../../Utils/Config";
import Loading from "../../SharedArea/Loading/Loading";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Employees.css";

interface EmployeeListState {
  employee: EmployeeModel[];
  employee1: EmployeeModel[];
}

class Employees extends Component<{}, EmployeeListState> {
  public async componentDidMount() {
    try {
      // const response = await axios.get<EmployeeModel[]>(config.urls.employees);
      // const employee = response.data;
      const employee = await employeesService.getAllEmployees();
      this.setState({ employee });
    } catch (err: any) {
      notifyService.error(err);
    }
    employeesStore.subscribe(() => {
      const employee1 = employeesStore.getState().employees;
      this.setState({ employee1 });
  });
  }

  public render(): JSX.Element {
    return (
      <div className="Employees ">
        {this.state?.employee === undefined && <Loading />}

        <NavLink to="/employees/new/"><button className="newEmployeeButton">New Employee</button></NavLink>
{/* 
        {this.state?.employee?.sort((a,b) => b.id-a.id).map((e) => (
          <EmployeeCard key={e.id} employee={e} />
        ))} */}
        {this.state?.employee?.map((e) => (
          <EmployeeCard key={e.id} employee={e} />
        )).reverse()}
      </div>
    );
  }
}

export default Employees;
