import { useEffect, useState } from "react";
import { Navigate, Route, Router } from "react-router";
import { Routes } from "react-router";
import { Unsubscribe } from "redux";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/Store";
import authService from "../../../Services/AuthService";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import AddEmployee from "../../EmployeesArea/AddEmployee/AddEmployee";
import DeleteEmployee from "../../EmployeesArea/DeleteEmployee/DeleteEmployee";
import EditEmployee from "../../EmployeesArea/EditEmployee/EditEmployee";
import EmployeeDetails from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import Employees from "../../EmployeesArea/Employees/Employees";
import About from "../../HomeArea/About/About";
import Home from "../../HomeArea/Home/Home";
import OrderShoes from "../../OrderArea/OrderShoes/OrderShoes";
import PageNotFound from "../../PageNotFoundArea/PageNotFound/PageNotFound";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Success from "../../SuccessArea/Success/Success";


function Routing(): JSX.Element {
  const lastSlashIndex = window.location.pathname.lastIndexOf("/");
  const idEmpl = +window.location.pathname.substr(lastSlashIndex + 1);

  // const [user, setUser] = useState<UserModel>(authStore.getState().user);

  // const unsubscribeMe: Unsubscribe = authStore.subscribe(() => {
  //     setUser(authStore.getState().user)
  // });;

  // useEffect( () => {
  //     return () => {
  //         setUser(undefined);
  //         unsubscribeMe();
  //     };
  // }, []);
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
      const unsubscribeMe = authStore.subscribe(() => {
          setIsLoggedIn(authService.isLoggedIn());
      });
      return () => unsubscribeMe();
  }, []);


  return (
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/orders" element={<OrderShoes />} />
        <Route path="/employees" element={<Employees />} />
      <Route path="/employees/details/:id" element={<EmployeeDetails />} />
      
        <Route
          path="/employees/edit/:id"
          element={isLoggedIn ? <EditEmployee id={idEmpl} />: <Navigate to="/login" />}
        />
      <Route path="/employees/delete/:id" element={isLoggedIn ? <DeleteEmployee id={idEmpl} />: <Navigate to="/login" />} />
      <Route path="/employees/new/" element={isLoggedIn ? <AddEmployee /> : <Navigate to="/login" /> } />
        {/* <Route path="/employees/new/" element={<AddEmployee />} /> */}
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    
  );
}

export default Routing;
