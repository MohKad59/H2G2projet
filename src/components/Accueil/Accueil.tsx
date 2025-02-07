import type React from "react";
import VideoBackground from "./VideoBackground";
import Galerie from "../Galerie/Galerie";
import "./Accueil.css";

interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
}

interface AccueilProps {
	products: Product[];
}

const Accueil: React.FC<AccueilProps> = ({ products }) => {
	return (
		<div className="accueil-container">
			<VideoBackground />
			<div className="content">
				<h1>Bienvenue sur notre boutique en ligne</h1>
				<p>Découvrez nos produits exclusifs et ajoutez-les à votre panier.</p>
				<Galerie products={products} />
			</div>
		</div>
	);
};

export default Accueil;
