import React, { useState, useEffect } from "react";

const MainContent = () => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	const lan = useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw res;
			})
			.then((data) => {
				setCountries(data);
				setLoading(false);
				console.log(data);
			})
			.catch((error) => {
				console.log(`Error Fetching: ${error}`);
			});
	}, []);

	return (
		<div className="main-content">
			<ul className="countries">
				{loading && <h2>Loading...</h2>}
				{loading ||
					countries.map((country, index) => {
						// Added a condition to exclude the following: Antarctica, Bouvet Island, Heard Island and McDonald Islands.
						if (country.currencies) {
							return (
								<li key={index}>
									<img
										src={country.flags.svg}
										alt={country.name.common}
									/>
									<h2>{country.name.common}</h2>
									<table>
										<tbody>
											{/* Language */}
											<tr>
												<th>Language:</th>
												<td>
													{Object.values(
														country.languages
													).join(", ")}
												</td>
											</tr>
											{/* Currency */}
											<tr>
												<th>Currency:</th>
												<td>
													{
														Object.values(
															country.currencies
														)[0].name
													}
													(
													{
														Object.values(
															country.currencies
														)[0].symbol
													}
													)
												</td>
											</tr>
											{/* Currency Symbol */}
											<tr>
												<th>Currency Symbol:</th>
												<td>
													{
														Object.values(
															country.currencies
														)[0].symbol
													}
												</td>
											</tr>
										</tbody>
									</table>
									<a
										href={country.maps.googleMaps}
										className="google-map-link"
									>
										Google Map
									</a>
								</li>
							);
						}
					})}
			</ul>
		</div>
	);
};

export default MainContent;
