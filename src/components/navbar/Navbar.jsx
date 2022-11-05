import React from "react";
import "./Navbar.css";
import Return from "../return/Return";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<Return />
			<h1 className="nav-title-logo">RETETELE BUNICII</h1>
		</div>
	);
};

export default Navbar;
