import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import db from "../db-final.json";
import Card from "../components/card/card";
import "../index.css";

const Category = () => {
	const { category } = useParams();
	// console.log(category);
	const [list, setList] = useState(db[category]);

	const navigate = useNavigate();
	const searchRef = useRef();

	document.addEventListener("keypress", searchOnEnter);

	function searchOnEnter(key) {
		if (key.code === "Enter") handleSearch();
	}

	function handleRedirect(nume) {
		navigate(`/details/${nume}/${category}`);
	}

	function handleSearch() {
		if (!searchRef.current?.value) return;
		const value = searchRef.current?.value.toLowerCase();
		const foundData = db[category].filter((cat) => {
			return cat.cuvinteCheie.includes(value);
		});
		setList(foundData);
	}

	function reset() {
		setList(db[category]);
	}

	return (
		<div className="category-parent-container">
			<h1>{category}</h1>

			<br />
			<div className="category-search-container">
				<div style={{ textAlign: "center" }}>
					<img src="/images/info.png" alt="..." style={{ height: "50px" }} />
					<h2>
						alege una dintre retetele disponibile, sau introdu niste cuvinte cuvinte
						cheie, iar noi te vom ajuta sa gasesti reteta potrivita.
					</h2>
				</div>
				<input type="text" ref={searchRef} />
				<img
					src="/images/x.png"
					alt="clear button"
					onClick={reset}
					className="category-clear-image"
				/>
				<button className="category-search-button" onClick={handleSearch}>
					Cauta
				</button>

				<h1>Retete</h1>
			</div>
			<div className="category-cards-list">
				{list.map((receipe) => (
					<Card title={receipe.nume} image={"/" + receipe.image} key={receipe.id}>
						<div>
							<p className="category-card-body-paragraph">
								<span style={{ marginRight: "0.5rem", fontSize: "1.2rem" }}>
									Ingrediente:
								</span>
								{receipe.ingrediente
									.map((ingredient) => ingredient.ingredient)
									.join(", ")}
							</p>
							<button
								className="category-custom-red-button"
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
