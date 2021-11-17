/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
	return (
		<div className="Menu">

			<NavLink to="/home">Home</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/employees">Employees</NavLink>
			<NavLink to="/success">Success Stories</NavLink>
			<NavLink to="/about">About</NavLink>

			

		</div>
	);
}

export default Menu;
