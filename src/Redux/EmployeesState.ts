import EmployeeModel from "../Models/EmployeeModel";

// Employees AppState - The application level data:
export class EmployeesState {
    public employees: EmployeeModel[] = [];
}

// Employees ActionType - Which actions we can perform on the data:
export enum EmployeesActionType {
    FetchEmployees = "FetchEmployees", // Must be a strings
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee"
    // ...
}

// Employees Action - A single object containing data to perform for a single ActionType
export interface EmployeesAction {
    type: EmployeesActionType; // The action type
    payload: any; // The action data
}

// Employees Action Creators - functions for creating action object for sending to dispatch
export function fetchEmployeesAction(employees: EmployeeModel[]): EmployeesAction {
    return { type: EmployeesActionType.FetchEmployees, payload: employees };
}
export function addEmployeeAction(employeeToAdd: EmployeeModel): EmployeesAction {
    return { type: EmployeesActionType.AddEmployee, payload: employeeToAdd };
}
export function updateEmployeeAction(employeeToUpdate: EmployeeModel): EmployeesAction {
    return { type: EmployeesActionType.UpdateEmployee, payload: employeeToUpdate };
}
export function deleteEmployeeAction(idToDelete: number): EmployeesAction {
    return { type: EmployeesActionType.DeleteEmployee, payload: idToDelete };
}

// Employees Reducer - the function actually performing the operations: 
export function employeesReducer(currentEmployeesState: EmployeesState = new EmployeesState(), action: EmployeesAction): EmployeesState {

    // Duplicate the current employees state int a new one:
    const newEmployeesState = { ...currentEmployeesState };

    switch (action.type) {

        case EmployeesActionType.FetchEmployees: // Here action.payload is employees array downloaded from the server
            newEmployeesState.employees = action.payload;
            break;

        case EmployeesActionType.AddEmployee: // Here action.payload is a single employee to add
            newEmployeesState.employees.push(action.payload);
            break;

        case EmployeesActionType.UpdateEmployee: // Here action.payload is a single employee to update
            const indexToUpdate = newEmployeesState.employees.findIndex(p => p.id === action.payload.id);
            newEmployeesState.employees[indexToUpdate] = action.payload;
            break;

        case EmployeesActionType.DeleteEmployee: // Here action.payload is the id of the employee to delete
            const indexToDelete = newEmployeesState.employees.findIndex(p => p.id === action.payload);
            newEmployeesState.employees.splice(indexToDelete, 1); // 1 = delete only one item
            break;
    }

    return newEmployeesState;
}