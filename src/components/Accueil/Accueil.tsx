import type React from "react";
import VideoBackground from "./VideoBackground";
import CardShop from "../cardShop/cardShop/CardShop";
import "./Accueil.css";

const Accueil: React.FC = () => {
	return (
		<div className="accueil-container">
			<VideoBackground />
			<div className="content">
				<h1>Bienvenue sur notre boutique en ligne</h1>
				<p>Découvrez nos produits exclusifs et ajoutez-les à votre panier.</p>
				<CardShop />
			</div>
		</div>
	);
};

export default Accueil;
