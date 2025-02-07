import type React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil/Accueil";
import Contact from "./components/Contact/Contact";
import Paiement from "./components/Paiement/Paiement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SelectProduct from "./components/cartPage/SelectProduct";

interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
}

const App: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("http://localhost:4242/armes")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setProducts(data);
			})
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	return (
		<Router>
			<div className="app-container">
				<Navbar />
				<div className="content-container">
					{error && <div className="error-message">{error}</div>}
					<Routes>
						<Route path="/" element={<Accueil products={products} />} />
						<Route path="/panier" element={<SelectProduct />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/paiement" element={<Paiement />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
