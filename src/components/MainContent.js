import React from "react";

const MainContent = ({
	loading,
	countries,
	search,
	region,
	setIsModal,
	setCountryData,
}) => {
	return (
		<div className="main-content">
			{loading && <h2>Loading...</h2>}
			<ul className="countries">
				{loading ||
					countries
						.filter((country) => {
							// Pass a value that only has currencies which are the actual countries
							if (country.currencies) {
								// Pass all the region if the condition is true
								if (region === "All") {
									// Pass all
									if (search === "") {
										return country;
										// Return only the countries that contains the letter or word that match on the country name based on the user input startWith()
									} else if (
										country.name.common
											.toLowerCase()
											.startsWith(search.toLowerCase())
									) {
										return country;
									}
									// Pass all the countries of a certain region if condition is met based on which region is selected on the select tag
								} else if (country.region === region) {
									if (search === "") {
										return country;
									} else if (
										country.name.common
											.toLowerCase()
											.startsWith(search.toLowerCase())
									) {
										return country;
									}
								}
							}
						})
						.map((country) => {
							return (
								<li key={country.name.common}>
									{/* Flag Images */}
									<img
										src={country.flags.svg}
										alt={country.name.common}
									/>
									{/* Country data inside the table */}
									<table>
										<thead>
											<tr>
												<th
													colSpan={2}
													style={{
														background:
															"rgb(3, 45, 94)",
													}}
												>
													<h2>
														{country.name.common}
													</h2>
												</th>
											</tr>
										</thead>
										<tbody>
											{/* Region */}
											<tr>
												<th>Region:</th>
												<td>{country.region}</td>
											</tr>
											{/* Language */}
											<tr>
												<th>Language:</th>
												<td>
													{Object.values(
														country.languages
													).join(", ")}
												</td>
											</tr>
											<tr>
												<th>Population:</th>
												<td>
													{country.population
														.toString()
														.replace(
															/\B(?=(\d{3})+(?!\d))/g,
															","
														)}
												</td>
											</tr>
										</tbody>
									</table>

									<div className="google-map-links">
										<a
											href={country.maps.googleMaps}
											target="_blank"
											className="google-map-link"
										>
											View Google Map
										</a>
										<button
											className="google-map-link"
											// Get a certain country data based on which country user click for the details that will be shown in ModalCountryDetails
											onClick={() => {
												setCountryData(country);
												setIsModal(true);
											}}
										>
											View More Details
										</button>
									</div>
								</li>
							);
						})}
			</ul>
		</div>
	);
};

export default MainContent;
