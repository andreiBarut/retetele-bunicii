import React from "react";
import db from "./db.json";
import "./index.css";

export default function Main() {
	const [endPoint, setEndPoint] = React.useState("");

	const getSosuri = () => {
		const data = db.sosuri;
		console.log(data);
		const mappedData = data.map((item) => {
			console.log(item.nume);
			return (
				<div className="recipe-container">
					<h1>{item.nume}</h1>
					<ul className="ingredients-list">
						{item.ingrediente.map((item) => {
							return (
								<li>
									{item.ingredient} {item.cantGram}
								</li>
							);
						})}
					</ul>
					<div>
						{item.indicatii.map((item) => {
							return <p>{item.mesaj}</p>;
						})}
					</div>
					<button className="cook-button">Cook</button>
				</div>
			);
			// return `${item.nume} ${item.ingrediente.map((item) => {
			// 	return `${item.ingredient} ${item.cantGram} g`;
			// })} \n
			// ${item.indicatii.map((item) => {
			// 	return `${item.mesaj}`;
			// })}`;
		});
		console.log(mappedData);
		// console.log(mappedData.map((item) => item));
		// return mappedData.map((item) => <li>item</li>);
		setEndPoint(mappedData);
	};

	const getFelPr = () => {
		const data = db.felPrincipal;
		console.log(data);
		const mappedData = data.map((item) => {
			console.log(item.nume);
			return (
				<div className="recipe-container">
					<h1>{item.nume}</h1>
					<ul className="ingredients-list">
						{item.ingrediente.map((item) => {
							return (
								<li>
									{item.ingredient} {item.cantGram}
								</li>
							);
						})}
					</ul>
					<div>
						{item.indicatii.map((item) => {
							return <p>{item.mesaj}</p>;
						})}
					</div>
					<button className="cook-button">Cook</button>
				</div>
			);
			// return `${item.nume} ${item.ingrediente.map((item) => {
			// 	return `${item.ingredient} ${item.cantGram} g`;
			// })} \n
			// ${item.indicatii.map((item) => {
			// 	return `${item.mesaj}`;
			// })}`;
		});
		console.log(mappedData);
		// console.log(mappedData.map((item) => item));
		// return mappedData.map((item) => <li>item</li>);
		setEndPoint(mappedData);
	};
	function getSupe() {
		const data = db.supeCiorbe;
		console.log(data);
		const mappedData = data.map((item) => {
			console.log(item.nume);
			return (
				<div className="recipe-container">
					<h1>{item.nume}</h1>
					<ul className="ingredients-list">
						{item.ingrediente.map((item) => {
							return (
								<li>
									{item.ingredient} {item.cantGram}
								</li>
							);
						})}
					</ul>
					<div>
						{item.indicatii.map((item) => {
							return <p>{item.mesaj}</p>;
						})}
					</div>
					<button className="cook-button">Cook</button>
				</div>
			);
			// return `${item.nume} ${item.ingrediente.map((item) => {
			// 	return `${item.ingredient} ${item.cantGram} g`;
			// })} \n
			// ${item.indicatii.map((item) => {
			// 	return `${item.mesaj}`;
			// })}`;
		});
		console.log(mappedData);
		// console.log(mappedData.map((item) => item));
		// return mappedData.map((item) => <li>item</li>);
		setEndPoint(mappedData);
	}
	function getDeserturi() {
		const data = db.deserturi;
		console.log(data);
		const mappedData = data.map((item) => {
			console.log(item.nume);
			return (
				<div className="recipe-container">
					<h1>{item.nume}</h1>
					<ul className="ingredients-list">
						{item.ingrediente.map((item) => {
							return (
								<li>
									{item.ingredient} {item.cantGram}
								</li>
							);
						})}
					</ul>
					<div>
						{item.indicatii.map((item) => {
							return <p>{item.mesaj}</p>;
						})}
					</div>
					<button className="cook-button">Cook</button>
				</div>
			);
			// return `${item.nume} ${item.ingrediente.map((item) => {
			// 	return `${item.ingredient} ${item.cantGram} g`;
			// })} \n
			// ${item.indicatii.map((item) => {
			// 	return `${item.mesaj}`;
			// })}`;
		});
		console.log(mappedData);
		// console.log(mappedData.map((item) => item));
		// return mappedData.map((item) => <li>item</li>);
		setEndPoint(mappedData);
	}
	console.log(endPoint);

	return (
		<div>
			<h2 onClick={getSosuri}>Sosuri</h2>
			<h2 onClick={getFelPr}>Fel Principal</h2>
			<h2 onClick={getSupe}>Supe | Ciorbe</h2>
			<h2 onClick={getDeserturi}>Deserturi</h2>
			<div>{endPoint}</div>
		</div>
	);
}
