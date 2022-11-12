import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import db from "../db-final.json";
import Card from "../components/card/card";
import "../index.css";

const Category = (props) => {
	const { category } = useParams();
	const [list, setList] = useState(db[category]);

	const navigate = useNavigate();
	const searchRef = useRef();

	useEffect(() => {
		document.addEventListener("keypress", searchOnEnter);
		return () => document.removeEventListener("keydown", searchOnEnter);
	}, []);

	function searchOnEnter(key) {
		console.log(key);
		if (key.code === "Enter") handleSearch();
	}

	function handleRedirect(nume) {
		navigate(`/details/${nume}/${category}`);
	}

	function handleSearch() {
		const value = searchRef.current.value.toLowerCase();
		if (!value || value === "") {
			setList(db[category]);
			return;
		}
		const foundData = db[category].filter((cat) => {
			return cat.cuvinteCheie.includes(value);
		});
		setList(foundData);
	}

	return (
		<div className="search-container">
			<h1>{category}</h1>

			<br />
			<div className="category-search-container">
				<div className="home-info-container">
					<img src="/images/info.png" alt="..." />
					<h2 className="home-info-header">
						alege una dintre retetele disponibile, sau introdu niste cuvinte cuvinte
						cheie, iar noi te vom ajuta sa gasesti reteta potrivita.
					</h2>
				</div>
				<input type="text" ref={searchRef} />
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
