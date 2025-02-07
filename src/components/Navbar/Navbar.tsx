import type React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li className="navbar-item">
					<Link to="/" className="navbar-link">
						Accueil
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/panier" className="navbar-link">
						Panier
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/contact" className="navbar-link">
						Contact
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/paiement" className="navbar-link">
						Paiement
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
