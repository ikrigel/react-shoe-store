import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import EmployeeModel from "../../../Models/EmployeeModel";
import "./AddEmployee.css";
import axios from "axios";
import cat from "../../../Assets/Images/7.jpg"
import config from "../../../Utils/Config";
import { NavLink } from "react-router-dom";
import employeesService from "../../../Services/EmployeesService";
import authService from "../../../Services/AuthService";
import { useEffect, useState } from "react";
import notifyService from "../../../Services/NotifyService";




function AddEmployee(): JSX.Element {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<EmployeeModel>();
  // useState(() => {
  //   authService.doesUserLoggedIn();
  // });
  useEffect(() => {
    authService.doesUserLoggedIn();
  }, []);
  // authService.doesUserLoggedIn();
  async function submit(employee: EmployeeModel) {
    try {
      
      const addedEmployee = await employeesService.addEmployee(employee);
      // alert("Employee has been added. id: " + addedEmployee.id); // In real life - never show ids to the user.
      notifyService.success("Employee has been added. id: " + addedEmployee.id);
      navigate("/employees");
    } catch (err: any) {
      notifyService.error(err);
    }
  }

  return (
    <div className="AddEmployee Box">
      <form onSubmit={handleSubmit(submit)}>
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
        <input defaultValue={"1980-12-30"} type="date" {...register("birthDate")} />

        <label>Image:</label>
        <input
        //   file={"../../../Assets/Images/1.jpg"}
        // defaultValue={"cat"}
          type="file"
          accept="image/*"
          {...register("image")}
          required
        />

        <button>Add</button>
        <NavLink to="/employees/"><button className="newEmployeeButton">Cancel</button></NavLink>
      </form>
    </div>
  );
}

export default AddEmployee;
