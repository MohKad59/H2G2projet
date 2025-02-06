import type React from "react";
import "./Panier.css";

const Panier: React.FC = () => {
	return (
		<div className="panier-container">
			<h1>Votre Panier</h1>
			<p>Votre panier est vide pour le moment.</p>
		</div>
	);
};

export default Panier;
