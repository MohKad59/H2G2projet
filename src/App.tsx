import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil/Accueil";
import Contact from "./components/Contact/Contact";
import Paiement from "./components/Paiement/Paiement";
import SelectProduct from "./components/cartPage/SelectProduct";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/SelectProduct">Panier</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/paiement">Paiement</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Accueil />} />
					<Route path="/SelectProduct" element={<SelectProduct />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/paiement" element={<Paiement />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
