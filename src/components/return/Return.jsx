import "./Return.css";
import { Link } from "react-router-dom";

const Return = () => {
	return (
		<Link to="/">
			<div>
				<img
					src={"/images/home.png"}
					alt="..."
					className="return-home-image-button"
				/>
			</div>
		</Link>
	);
};

export default Return;
