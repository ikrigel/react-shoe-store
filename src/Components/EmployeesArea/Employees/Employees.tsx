import axios from "axios";
import { Component } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import config from "../../../Utils/Config";
import Loading from "../../SharedArea/Loading/Loading";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Employees.css";

interface EmployeeListState {
  employee: EmployeeModel[];
}

class Employees extends Component<{}, EmployeeListState> {
  public async componentDidMount() {
    try {
      const response = await axios.get<EmployeeModel[]>(config.urls.employees);
      const employee = response.data;
      this.setState({ employee });
    } catch (err: any) {
      alert(err.message);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="Employees ">
        {this.state?.employee === undefined && <Loading />}

        {this.state?.employee?.map((p) => (
          <EmployeeCard key={p.id} employee={p} />
        ))}
      </div>
    );
  }
}

export default Employees;
