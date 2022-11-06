import { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../db-final.json";
import Card from "../components/card/card";

const Details = () => {
	const [step, setStep] = useState(0);
	const { name, category } = useParams();
	const receipe = db[category].find((receipe) => receipe.nume === name);
	console.log(receipe);

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
			<h2>{receipe.nume}</h2>
			<img src={"/" + receipe.image} alt="..." />
			<p>{receipe.descriere}</p>
			<section>
				<h3>Ingrediente</h3>
				<ol style={{ width: "fit-content", margin: "auto" }}>
					{receipe.ingrediente.map((ing, index) => (
						<li key={ing.ingredient + index}>
							<span>{ing.ingredient}: </span>
							{ing.cantGram}g
						</li>
					))}
				</ol>
			</section>
			<section>
				<h3>Inidcatii</h3>
				<div className="details-indicatii-wrapper">
					<button className="custom-red-button" onClick={handlePrevStep}>
						{"<<"}
					</button>
					<Card title={`Pasul ${step + 1}`}>
						<p>{receipe.indicatii[step].mesaj}</p>
						{receipe.indicatii[step].timerSec !== 0 && (
							<p>{receipe.indicatii[step].timerSec}</p>
						)}
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
