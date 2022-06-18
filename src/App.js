import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ModalCountryDetails from "./components/ModalCountryDetails";

function App() {
	const [countries, setCountries] = useState([]);
	const [countryData, setCountryData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const [region, setRegion] = useState("All");
	const [isModal, setIsModal] = useState(false);
	const [{ countryAscend, populationAscend }, setAscend] = useState({
		countryAscend: true,
		populationAscend: true,
	});
	console.log(countryData);
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
	// To fetch countries API once the function is called
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
	// To initialize the fetchCountries() to fetch the API
	useEffect(() => {
		fetchCountries();
	}, []);

	return (
		<div className="App">
			<Navbar
				sortName={sortName}
				sortPopulation={sortPopulation}
				search={search}
				setSearch={setSearch}
				region={region}
				setRegion={setRegion}
			/>
			<MainContent
				countries={countries}
				loading={loading}
				search={search}
				region={region}
				setIsModal={setIsModal}
				setCountryData={setCountryData}
			/>
			<ModalCountryDetails
				isModal={isModal}
				setIsModal={setIsModal}
				countryData={countryData}
			/>
		</div>
	);
}

export default App;
