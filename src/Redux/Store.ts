import { createStore, combineReducers } from "redux";
import { employeesReducer } from "./EmployeesState";
//redux devtools chrome
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./AuthState";

// // For multiple reducers:
// // const reducers = combineReducers({ employeesState: employeesReducer, employeesState: employeesReducer, customersState: customersReducer });
// const reducers = combineReducers({ employeesState: employeesReducer });
// const store = createStore(reducers);
// export default store;

// For single reducer: 
// const employeesStore = createStore(employeesReducer);
const employeesStore = createStore(employeesReducer,
    composeWithDevTools(applyMiddleware())
);
// const store = createStore(reducers);


export default employeesStore;

export const authStore = createStore(authReducer,
    composeWithDevTools(applyMiddleware()));
