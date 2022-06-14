import React from "react";

const Navbar = () => {
	return (
		<div className="nav-base">
			<div className="nav-header">
				<h1>Country Database</h1>
			</div>
			<div className="nav-search">
				<input type="text" />
				<input type="button" value="Search" />
			</div>
		</div>
	);
};

export default Navbar;
