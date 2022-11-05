import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:category" element={<Category />} />
				<Route path="/details/:name/:category" element={<Details />} />
				{/* <Route
					path="/gravy"
					element={
						<Gravy
							ingredient={ingredient}
							setIngredient={setIngredient}
							endPoint={endPoint}
							setEndPoint={setEndPoint}
						/>
					}
				/>
				<Route
					path="/soups"
					element={
						<Soups
							ingredient={ingredient}
							setIngredient={setIngredient}
							endPoint={endPoint}
							setEndPoint={setEndPoint}
						/>
					}
				/>
				<Route
					path="/maincourse"
					element={
						<MainCourse
							ingredient={ingredient}
							setIngredient={setIngredient}
							endPoint={endPoint}
							setEndPoint={setEndPoint}
						/>
					}
				/>
				<Route
					path="/desserts"
					element={
						<Desserts
							ingredient={ingredient}
							setIngredient={setIngredient}
							endPoint={endPoint}
							setEndPoint={setEndPoint}
						/>
					}
				/> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
