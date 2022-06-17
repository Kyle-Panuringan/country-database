import React, { useState, useEffect } from "react";

const MainContent = ({ loading, countries }) => {
	return (
		<div className="main-content">
			{loading && <h2>Loading...</h2>}
			<ul className="countries">
				{loading ||
					countries
						.filter((country) => country.currencies)
						.map((country, index) => {
							return (
								<li key={index}>
									<img
										src={country.flags.svg}
										alt={country.name.common}
									/>

									<table>
										<thead>
											<tr>
												<th
													colSpan={2}
													style={{
														background: "blue",
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
										<a href="#" className="google-map-link">
											View More Details
										</a>
									</div>
								</li>
							);
						})}
			</ul>
		</div>
	);
};

export default MainContent;
