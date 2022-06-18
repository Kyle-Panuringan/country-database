import React from "react";

const ModalCountryDetails = ({ isModal, setIsModal, countryData }) => {
	return isModal ? (
		<div
			className="modal"
			onClick={() => {
				setIsModal(false);
			}}
		>
			<div className="modal-inner">
				<div className="modal-content">
					<button
						className="close-modal"
						onClick={() => {
							setIsModal(false);
						}}
					>
						Close
					</button>
					<div className="modal-flag">
						<img
							src={countryData.flags.svg}
							alt={countryData.name.common}
						/>
					</div>
					<a
						href={countryData.maps.googleMaps}
						target="_blank"
						className="modal-google"
					>
						View Google Map
					</a>
					<div className="modal-infos">
						<table>
							<thead>
								<th colSpan={2}>
									<h2>Details</h2>
								</th>
							</thead>
							<tbody>
								<tr>
									<th>Country Name</th>
									<td>{countryData.name.common}</td>
								</tr>
								<tr>
									<th>Languages</th>
									<td>
										{Object.values(
											countryData.languages
										).join(", ")}
									</td>
								</tr>
								<tr>
									<th>Capital City</th>
									<td>{countryData.capital}</td>
								</tr>
								<tr>
									<th>Population:</th>
									<td>
										{countryData.population
											.toString()
											.replace(
												/\B(?=(\d{3})+(?!\d))/g,
												","
											)}
									</td>
								</tr>
								<tr>
									<th>Currency</th>
									<td>
										{
											Object.values(
												countryData.currencies
											)[0].name
										}{" "}
										(
										{
											Object.values(
												countryData.currencies
											)[0].symbol
										}
										)
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	) : null;
};

export default ModalCountryDetails;
