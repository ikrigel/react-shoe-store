import { Navigate, Route } from "react-router";
import { Routes } from "react-router";
import Employees from "../../EmployeesArea/Employees/Employees";
import About from "../../HomeArea/About/About";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../../PageNotFoundArea/PageNotFound/PageNotFound";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Success from "../../SuccessArea/Success/Success";




function Routing(): JSX.Element {
    return (

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/success" element={<Success />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>

    );
}

export default Routing;
