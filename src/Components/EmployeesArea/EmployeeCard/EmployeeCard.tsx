import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import config from "../../../Utils/Config";
import "./EmployeeCard.css";

interface EmployeeCardProps {
  employee: EmployeeModel;
}

function EmployeeCard(props: EmployeeCardProps): JSX.Element {
  const birthday = props.employee.birthDate;
  const arr = birthday.split("-");
  let birthdayNew = `${arr[2]}-${arr[1]}-${+arr[0] + 30}`;

  return (
    <div className="EmployeeCard Box">
      <div>
        <div className="employeeDetails">
        First name: {props.employee.firstName}
        <br />
        Last name: {props.employee.lastName}
        <br />
        Title: {props.employee.title}
        <br />
        Country: {props.employee.country}
        <br />
        City: {props.employee.city}
        <br />
          Birthday: {birthdayNew}
        <br />
      </div>
        <NavLink to={"/employees/details/" + props.employee.id}>
          <button className="newEmployeeButton">Employee Details</button>
        </NavLink>
          </div>
      <div>
        <br />
        <NavLink to={"/employees/details/" + props.employee.id}>
          <img src={config.urls.employeesImages + props.employee.imageName} />
        </NavLink>
      </div>
    </div>
  );
}

export default EmployeeCard;
