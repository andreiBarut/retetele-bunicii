import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home-parent-container">
			<div className="home-info-container">
				<img src="/images/info.png" alt="..." />
				<h2 className="home-info-header">
					alege o categorie de mancare din optiunile de mai jos si vom gasi reteta
					potrivita pentru tine.
				</h2>
			</div>
			<div className="all-container">
				<div className="main-container">
					<div className="element-container">
						<Link to="category/Sosuri">
							<div className="home-cateogory-link-container">
								<img src={"images/gravy.png"} alt="gravy" className="category-img" />
								<h3 className="home-category-title">Sosuri</h3>
							</div>
						</Link>
					</div>
					<div className="element-container">
						<Link to="category/Fel Principal">
							<div className="home-cateogory-link-container">
								<img src={"images/mainCourse.png"} alt="" className="category-img" />
								<h3 className="home-category-title">Fel Principal</h3>
							</div>
						</Link>
					</div>
					<div className="element-container">
						<Link to="category/Supe | Ciorbe">
							<div className="home-cateogory-link-container">
								<img src={"images/soup.png"} alt="" className="category-img" />
								<h3 className="home-category-title">Supe | Ciorbe</h3>
							</div>
						</Link>
					</div>
					<div className="element-container">
						<Link to="category/Deserturi">
							<div className="home-cateogory-link-container">
								<img
									src={"images/dessert.png"}
									alt="dessert"
									className="category-img"
								/>
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
