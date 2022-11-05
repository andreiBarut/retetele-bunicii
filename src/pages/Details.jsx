import { useParams } from "react-router-dom";
import db from "../db.json";

const Details = () => {
	const { name, category } = useParams();
	const receipe = db[category].find((receipe) => receipe.nume === name);
	console.log(receipe);
	return null;
};

export default Details;
