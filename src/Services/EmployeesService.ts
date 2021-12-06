import axios from "axios";
import { error } from "console";
import EmployeeModel from "../Models/EmployeeModel";
import { addEmployeeAction, fetchEmployeesAction, updateEmployeeAction } from "../Redux/EmployeesState";
import employeesStore from "../Redux/Store";
import config from "../Utils/Config";

class EmployeesService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {
        if (employeesStore.getState().employees.length === 0) {
            const response = await axios.get<EmployeeModel[]>(config.urls.employees);
            const employees = response.data;
            employeesStore.dispatch(fetchEmployeesAction(employees)); // Send downloaded employees to Redux.
            return employees;
        }
        else {
            const employees = employeesStore.getState().employees;
            return employees;
        }
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        const employees = employeesStore.getState().employees;
        const employee = employees.find(p => p.id === id);
        if (employee) {
            return employee;
        }
        const response = await axios.get<EmployeeModel>(config.urls.employees + id);
        return response.data;
    }

    public async addEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
        const myFormData = new FormData();
        myFormData.append("firstName", employee.firstName);
      myFormData.append("lastName", employee.lastName);
      myFormData.append("title", employee.title);
      myFormData.append("country", employee.country);
      myFormData.append("city", employee.city);
      myFormData.append("birthDate", employee.birthDate);


     
       
        myFormData.append("image", employee.image.item(0)); // FileList has to be converted to File
        const response = await axios.post<EmployeeModel>(config.urls.employees, myFormData); // Must send FormData and not employee
        const addedEmployee = response.data;
        employeesStore.dispatch(addEmployeeAction(addedEmployee));
        return addedEmployee;
    }
    public async editEmployee(id: number,employee: EmployeeModel): Promise<EmployeeModel> {
        const myFormData = new FormData();
        myFormData.append("firstName", employee.firstName);
      myFormData.append("lastName", employee.lastName);
      myFormData.append("title", employee.title);
      myFormData.append("country", employee.country);
      myFormData.append("city", employee.city);
      myFormData.append("birthDate", employee.birthDate);


     
       
        myFormData.append("image", employee.image.item(0)); // FileList has to be converted to File
        const response = await axios.put<EmployeeModel>(config.urls.employees+id, myFormData); // Must send FormData and not employee
        const editedEmployee = response.data;
        employeesStore.dispatch(updateEmployeeAction(editedEmployee));
        return editedEmployee;
    }

    public async deleteEmployee(id: number): Promise<EmployeeModel> {
        const employees = employeesStore.getState().employees;
        const employee = employees.find(p => p.id === id);
        if (employee) {
            return employee;
        }
        const response = await axios.delete<EmployeeModel>(config.urls.employees + id);
        return response.data;
    }

    public  getOneEmployee1(id: number) {
        const employees = employeesStore.getState().employees;
        const employee = employees.find(p => p.id === id);
        if (employee) {
            return employee;
        }
        else {
            return null
       }
        
    }

}

// Single object:
const employeesService = new EmployeesService();

export default employeesService;