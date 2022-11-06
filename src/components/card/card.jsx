import "./card.css";

const Card = ({ title, image, children }) => {
	return (
		<div className="card-container">
			<h5 className="card-title" title={title}>
				{title}
			</h5>
			{image && <img src={image} alt="..." className="card-recipe-image" />}
			<div className="card-body">{children}</div>
		</div>
	);
};

export default Card;
