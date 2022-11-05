import React from "react";
import gravyImg from "../img/gravy.png";
import dessertImg from "../img/dessert.png";
import mainCourseImg from "../img/mainCourse.png";
import soupsImg from "../img/soup.png";
import "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className="home-info-container">
				<img src="images/info.png" alt="..." />
				<h2 className="home-info-header">
					pick a food category from down below and we will find the right recipe for
					you.
				</h2>
			</div>
			<div className="all-container">
				<div className="main-container">
					<div className="element-container">
						<Link to="category/Sosuri">
							<div className="home-cateogory-link-container">
								<img src={gravyImg} alt="gravy" className="category-img" />
								<h3 className="home-category-title">Sosuri</h3>
							</div>
						</Link>
					</div>
					<div className="element-container">
						<Link to="category/Fel Principal">
							<div className="home-cateogory-link-container">
								<img src={mainCourseImg} alt="" className="category-img" />
								<h3 className="home-category-title">Fel Principal</h3>
							</div>
						</Link>
					</div>
					<div className="element-container">
						<Link to="category/Supe | Ciorbe">
							<div className="home-cateogory-link-container">
								<img src={soupsImg} alt="" className="category-img" />
								<h3 className="home-category-title">Supe | Ciorbe</h3>
							</div>
						</Link>
					</div>
					<div className="element-container">
						<Link to="category/Deserturi">
							<div className="home-cateogory-link-container">
								<img src={dessertImg} alt="dessert" className="category-img" />
								<h3 className="home-category-title">Deserturi</h3>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
