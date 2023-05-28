import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:category" element={<Category />} />
				<Route path="/details/:name/:category" element={<Details />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
