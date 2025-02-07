import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil/Accueil";
import Contact from "./components/Contact/Contact";
import Paiement from "./components/Paiement/Paiement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SelectProduct from "./components/cartPage/SelectProduct";

function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar /> {/* La navbar est fixée en haut */}
				<div className="content-container">
					<Routes>
						<Route path="/" element={<Accueil />} />
						<Route path="/panier" element={<SelectProduct />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/paiement" element={<Paiement />} />
					</Routes>
				</div>
				<Footer /> {/* Le footer reste en bas */}
			</div>
		</Router>
	);
}

export default App;
