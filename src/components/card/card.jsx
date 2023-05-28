import "./card.css";

const Card = (props) => {
	return (
		<div className="card-container">
			<h5 className="card-title" title={props.title}>
				{props.title}
			</h5>
			{props.image && (
				<img src={props.image} alt="..." className="card-recipe-image" />
			)}
			<div className="card-body">{props.children}</div>
		</div>
	);
};

export default Card;
