import React from "react";
import logo from "../logo.png";

const Navbar = ({
	sortName,
	sortPopulation,
	search,
	setSearch,
	region,
	setRegion,
}) => {
	// To set clear the text in the search
	function clearInput() {
		setSearch("");
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
					<input
						type="text"
						placeholder="Search...."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<button
						style={{
							visibility: search ? "visible" : "hidden",
						}}
						onClick={clearInput}
					>
						X
					</button>
				</div>

				<div className="nav-buttons">
					<label>Sort by:</label>
					<button onClick={sortName}>Name</button>
					<button onClick={sortPopulation}>Population</button>

					<label htmlFor="sort-region">Filter by Region:</label>
					<select
						name="sort-region"
						id="sort-region"
						value={region}
						onChange={(e) => setRegion(e.target.value)}
					>
						<option disabled>-- select an option --</option>
						<option value="All">All</option>
						<option value="Africa">Africa</option>
						<option value="Americas">Americas</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
