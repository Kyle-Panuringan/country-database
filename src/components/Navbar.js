import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../logo.png";

const Navbar = () => {
	const [inputValue, setInputValue] = React.useState("");

	// To set blank the "inputValue" if the clear button is click
	function clearInput() {
		setInputValue("");
	}

	return (
		<div className="nav-base">
			<div className="nav-header">
				<img
					src={logo}
					className="logo"
					alt="Logo of Country Database"
				/>
			</div>
			<div className="nav-menu">
				<div className="nav-search">
					<button>
						<FaSearch />
					</button>
					<input
						type="text"
						placeholder="Search...."
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
					/>
					<button
						style={{
							visibility: inputValue ? "visible" : "hidden",
						}}
						onClick={clearInput}
					>
						X
					</button>
				</div>

				<div className="nav-buttons">
					<button>Sort by Name</button>
					<button>Sort by Population</button>

					<label htmlFor="sort-region">Select a Region:</label>
					<select name="sort-region" id="sort-region">
						<option disabled selected value>
							-- select an option --
						</option>
						<option value="Africa">Africa</option>
						<option value="Americas">Americas</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Ocenia">Ocenia</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
