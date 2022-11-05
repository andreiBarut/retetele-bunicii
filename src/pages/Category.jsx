import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import db from "../db.json";
import Card from "../components/card/card";
import "../index.css";

const Category = (props) => {
	const { category } = useParams();
	const navigate = useNavigate();
	console.log(category);

	function handleRedirect(nume) {
		navigate(`/details/${nume}/${category}`);
	}

	return (
		<div className="search-container">
			<h1>{category}</h1>

			<br />
			<div className="category-search-container">
				<label>Insereaza ingredientul aici</label>
				<input />
				<button className="category-search-button">Cauta</button>
			</div>
			<div className="category-cards-list">
				{db[category].map((receipe) => (
					<Card title={receipe.nume} image={"/" + receipe.image}>
						<div>
							<p className="category-card-body-paragraph">
								<span style={{ marginRight: "0.5rem" }}>Ingrediente:</span>
								{receipe.ingrediente
									.map((ingredient) => ingredient.ingredient)
									.join(", ")}
							</p>
							<button
								className="custom-red-button"
								onClick={() => handleRedirect(receipe.nume)}
							>
								GATESTE
							</button>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Category;
