import React from "react";
import db from "./db.json";
import "./index.css";

export default function Main() {
	const [endPoint, setEndPoint] = React.useState("");
	const [searchParam, setSearchParam] = React.useState("");
	const [ingredient, setIngredient] = React.useState("");

	const getSosuri = () => {
		setSearchParam(`${db.sosuri}`);
		const data = db.sosuri;
		// console.log(data);
		const mappedData = data.map((item) => {
			// console.log(item.nume);
			if (item.cuvinteCheie.includes(ingredient)) {
				console.log(ingredient);
				console.log(item.cuvinteCheie);
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
			}
		});
		console.log(mappedData);
		setEndPoint(mappedData);
	};

	const getFelPr = () => {
		setSearchParam(`${db.felPrincipal}`);
		const data = db.felPrincipal;
		console.log(data);
		const mappedData = data.map((item) => {
			console.log(item.nume);
			if (item.cuvinteCheie.includes(ingredient))
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
		});
		console.log(mappedData);
		// console.log(mappedData.map((item) => item));
		// return mappedData.map((item) => <li>item</li>);
		setEndPoint(mappedData);
	};
	function getSupe() {
		setSearchParam(`${db.supeCiorbe}`);
		const data = db.supeCiorbe;
		console.log(data);
		const mappedData = data.map((item) => {
			// if (item.cuvinteCheie === )
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
		});
		console.log(mappedData);
		// console.log(mappedData.map((item) => item));
		// return mappedData.map((item) => <li>item</li>);
		setEndPoint(mappedData);
	}
	function getDeserturi() {
		setSearchParam(`${db.deserturi}`);
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
		});
		console.log(mappedData);
		// console.log(mappedData.map((item) => item));
		// return mappedData.map((item) => <li>item</li>);
		setEndPoint(mappedData);
	}
	console.log(endPoint);

	function handleChange(event) {
		setIngredient(event.target.value);
		console.log(ingredient);
	}

	return (
		<div>
			<h2 onClick={getSosuri}>Sosuri</h2>
			<h2 onClick={getFelPr}>Fel Principal</h2>
			<h2 onClick={getSupe}>Supe | Ciorbe</h2>
			<h2 onClick={getDeserturi}>Deserturi</h2>
			<input onChange={handleChange}></input>
			{/* <button onClick={search}>Find Recipes</button> */}
			<div>{endPoint}</div>
		</div>
	);
}
