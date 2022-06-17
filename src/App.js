import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [{ countryAscend, populationAscend }, setAscend] = useState({
		countryAscend: true,
		populationAscend: true,
	});

	// Sort by Country Name
	function sortName() {
		let nameOrder = [...countries];
		if (countryAscend) {
			setCountries(
				nameOrder.sort((a, b) => {
					let x = a.name.common.toUpperCase();
					let y = b.name.common.toUpperCase();
					if (x < y) {
						return -1;
					}
					if (x > y) {
						return 1;
					}
					return 0;
				})
			);
			setAscend({ countryAscend: !countryAscend });
		} else {
			setCountries(
				nameOrder.sort((a, b) => {
					let x = a.name.common.toUpperCase();
					let y = b.name.common.toUpperCase();
					if (x < y) {
						return 1;
					}
					if (x > y) {
						return -1;
					}
					return 0;
				})
			);
			setAscend({ countryAscend: !countryAscend });
		}
	}
	// Sort by Population
	function sortPopulation() {
		let populationOrder = [...countries];
		if (populationAscend) {
			setCountries(
				populationOrder.sort((a, b) => b.population - a.population)
			);
			setAscend({ populationAscend: !populationAscend });
		} else {
			setCountries(
				populationOrder.sort((a, b) => a.population - b.population)
			);
			setAscend({ populationAscend: !populationAscend });
		}
	}
	// Filter by Region
	function filterRegion(e) {
		console.log(e.target.value);
		const x = e.target.value === "All" ? "all" : `region/${e.target.value}`;
		// fetch(`https://restcountries.com/v3.1/${x}`)
		// 	.then((res) => res.json())
		// 	.then((data) => setCountries(data));

		const fetchRegion = async () => {
			try {
				const response = await fetch(
					`https://restcountries.com/v3.1/${x}`
				);
				const data = await response.json();
				setCountries(data);
			} catch (error) {
				console.log("Hello", error);
			}
		};
		fetchRegion();
	}

	const fetchCountries = async () => {
		try {
			const response = await fetch("https://restcountries.com/v3.1/all");
			const data = await response.json();
			setCountries(data);
			setLoading(false);
		} catch (error) {
			console.log("Hello", error);
		}
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<div className="App">
			<Navbar
				sortName={sortName}
				sortPopulation={sortPopulation}
				filterRegion={filterRegion}
			/>
			<MainContent
				countries={countries}
				loading={loading}
				error={error}
			/>
		</div>
	);
}

export default App;
