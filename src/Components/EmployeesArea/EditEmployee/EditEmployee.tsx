import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import authService from "../../../Services/AuthService";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import config from "../../../Utils/Config";
import EmployeeDetails from "../EmployeeDetails/EmployeeDetails";
import "./EditEmployee.css";

interface EditEmployeeProps {
  id: number;
  // firstName: string;
  // lastName: string;
  // title: string;
  // country: string;
  // city: string;
  // birthDate: string;


}
interface EditEmployeeState {
  employee: EmployeeModel;
}


function EditEmployee(
  props: EditEmployeeProps,
  _state: EditEmployeeState
): JSX.Element {
  // authService.doesUserLoggedIn();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<EmployeeModel>();
  const lastSlashIndex = window.location.pathname.lastIndexOf("/");
  const idEmpl = +window.location.pathname.substr(lastSlashIndex + 1);
  // const employee = await employeesService.getOneEmployee(idEmpl);
  const employee1 = employeesService.getOneEmployee1(idEmpl);
  console.log(employee1);
  
  setValue("id",idEmpl );
  setValue("firstName", employee1.firstName);
  setValue("lastName", employee1.lastName);
  setValue("city", employee1.city);
  setValue("birthDate", employee1.birthDate);
  setValue("country", employee1.country);
  setValue("title", employee1.title);
  setValue("imageName", employee1.imageName);
  // setValue("lastName", _state.employee.firstName);
  // alert(_state.employee.firstName);
  async function submit(employee: EmployeeModel) {
    try {
      const lastSlashIndex = window.location.pathname.lastIndexOf("/");
      const idEmpl = +window.location.pathname.substr(lastSlashIndex + 1);
    //    props.id = idEmpl;
    //    state.employee.id=idEmpl;
      const myFormData = new FormData();
      myFormData.append("id", props.id.toString());
      myFormData.append("firstName", employee.firstName);
      myFormData.append("lastName", employee.lastName);
      myFormData.append("title", employee.title);
      myFormData.append("country", employee.country);
      myFormData.append("city", employee.city);
      myFormData.append("birthDate", employee.birthDate);
      myFormData.append("image", employee.image.item(0)); // FileList has to be converted to File
      // const response = await axios.put<EmployeeModel>(
      //   config.urls.employees+props.id,
      //   myFormData
      // ); // Must send FormData and not product

      const updateEmployee = await employeesService.editEmployee(idEmpl,employee) ;// response.data;
      
      notifyService.success("Employee has been updated. id: " + updateEmployee.id);// In real life - never show ids to the user.
      navigate("/employees");
    } catch (err: any) {
      notifyService.error(err);
    }
  }

  return (
    <div className="EditEmployee Box">
      <form onSubmit={handleSubmit(submit)}>
        <label>ID: </label>
        <input
          defaultValue={props.id}
          type="number"
          {...register("id")}
          required
          minLength={1}
          maxLength={30}
        />
        <label>First Name: </label>
        <input
          defaultValue={"new employee"}
          type="text"
          {...register("firstName")}
          required
          minLength={2}
          maxLength={30}
        />
        <label>Last Name: </label>
        <input
          defaultValue={"new employee"}
          type="text"
          {...register("lastName")}
          required
          minLength={2}
          maxLength={30}
        />

        <label>Title: </label>
        <input
          defaultValue={"new employee"}
          type="text"
          {...register("title")}
          required
          minLength={2}
          maxLength={20}
        />

        <label>Country: </label>
        <input
          defaultValue={"new employee"}
          type="text"
          {...register("country")}
          required
          minLength={2}
          maxLength={30}
        />

        <label>City: </label>
        <input
          defaultValue={"new employee"}
          type="text"
          {...register("city")}
          required
          minLength={2}
          maxLength={30}
        />

        <label>BirthDate: </label>
        <input
          defaultValue={"1980-12-30"}
          type="date"
          {...register("birthDate")}
        />

        <label>Image:</label>
        <input
          //   file={"../../../Assets/Images/1.jpg"}
          type="file"
          accept="image/*"
          {...register("image")}
          required
        />

        <button>Update</button>

        <NavLink to={"/employees/details/" + idEmpl}>
          <button className="newEmployeeButton">Back To Employee Details</button>
        </NavLink>

      
      </form>
    </div>
  );
}

export default EditEmployee;

