import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import db from "../db-final.json";
import Card from "../components/card/card";

const Details = () => {
	const [step, setStep] = useState(0);
	const { name, category } = useParams();
	const receipe = db[category].find((receipe) => receipe.nume === name);
	const navigate = useNavigate();

	console.log(receipe);

	function handleRedirect() {
		navigate(`/category/${category}`);
	}

	const handlePrevStep = () => {
		console.log(step);
		if (step === 0) return;
		setStep((step) => step - 1);
	};

	const handleNextStep = () => {
		if (step === receipe.indicatii.length - 1) return;
		setStep((step) => step + 1);
	};

	return (
		<div className="details-wrapper">
			<h4 onClick={handleRedirect} className="details-return-heading">
				{"<<"} {category}{" "}
			</h4>
			<h2>{receipe.nume}</h2>
			<img src={"/" + receipe.image} alt="..." className="details-img" />
			<p style={{ color: "#d93838", fontSize: "1.2rem", fontWeight: "bolder" }}>
				{receipe.descriere}
			</p>
			<section>
				<h3>Macronutrienti / 100g</h3>
				<div
					style={{ width: "fit-content", margin: "auto" }}
					className="details-macro-container"
				>
					{receipe.macros.map((macr, index) => (
						<div key={macr.macronutrient + index}>
							<span className="details-macro-name-span">{macr.macronutrient}: </span>
							<span className="details-macro-value-span">{macr.valoare} </span>
						</div>
					))}
				</div>
				<h3>Ingrediente</h3>
				<ol
					style={{ width: "fit-content", margin: "auto" }}
					className="details-ingredients-container"
				>
					{receipe.ingrediente.map((ing, index) => (
						<li key={ing.ingredient + index} className="details-ingredient-list">
							<span>{ing.ingredient}: </span>
							{ing.cantGram}
						</li>
					))}
				</ol>
			</section>
			<section>
				<h3>Indicatii</h3>
				<div className="details-indicatii-wrapper">
					<button className="custom-red-button" onClick={handlePrevStep}>
						{"<<"}
					</button>
					<Card title={`Pasul ${step + 1}`}>
						<p>{receipe.indicatii[step].mesaj}</p>
					</Card>
					<button className="custom-red-button" onClick={handleNextStep}>
						{">>"}
					</button>
				</div>
			</section>
		</div>
	);
};

export default Details;
