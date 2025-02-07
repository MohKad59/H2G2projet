import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil/Accueil";
import Panier from "./components/Panier/Panier";
import Contact from "./components/Contact/Contact";
import Paiement from "./components/Paiement/Paiement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar />
				<div className="content-container">
					<Routes>
						<Route path="/" element={<Accueil />} />
						<Route path="/panier" element={<Panier />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/paiement" element={<Paiement />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
