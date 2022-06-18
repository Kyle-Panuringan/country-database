import React from "react";
import logo from "../logo.png";
import logoMobile from "../logo-mobile.png";
import logoText from "../logo-text-mobile.png";

const Navbar = ({
	sortName,
	sortPopulation,
	search,
	setSearch,
	region,
	setRegion,
	order,
}) => {
	const [open, setOpen] = React.useState(
		window.matchMedia("(orientation:landscape)").matches ? true : false
	);
	// To set clear the text in the search
	function clearInput() {
		setSearch("");
	}
	const countryArrow = order.countryAscend ? "▴" : "▾";
	const populationArror = order.populationAscend ? "▾" : "▴";
	let style = open ? "block" : "none";

	const testing = () => {
		if (window.matchMedia("(orientation:landscape)").matches) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener("resize", testing);
		return () => {
			window.removeEventListener("resize", testing);
		};
	}, [open]);

	return (
		<div className="nav-base">
			{/* Landscape Logo */}
			<div className="nav-header">
				<img
					src={logo}
					className="logo"
					alt="Logo of Country Database"
				/>
			</div>
			{/* Portrait Logo */}
			<div className="nav-mobile">
				<img
					src={logoMobile}
					className="logo-mobile"
					alt="Logo of Country Database"
				/>
				<img
					src={logoText}
					className="logo-text"
					alt="Logo of Country Database"
				/>
			</div>
			<button className="openMobile" onClick={(e) => setOpen(true)}>
				︾
			</button>
			<div className="nav-menu" style={{ display: `${style}` }}>
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
					<button onClick={sortName} className="nav-button">
						Name{" "}
						{order.countryActive && <span>{countryArrow}</span>}
					</button>
					<button onClick={sortPopulation} className="nav-button">
						Population{" "}
						{order.populationActive && (
							<span>{populationArror}</span>
						)}
					</button>

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
				<button className="closeMobile" onClick={(e) => setOpen(false)}>
					︽
				</button>
			</div>
		</div>
	);
};

export default Navbar;
