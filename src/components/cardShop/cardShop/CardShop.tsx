// CardShop.tsx
import type React from "react";
import "./CardShop.css";
import ButtonAdd from "./ButtonAdd";

interface Product {
	id: number;
	nom: string;
	url: string;
	Prix: number;
}

interface CardShopProps {
	product: Product;
}

const CardShop: React.FC<CardShopProps> = ({ product }) => {
	return (
		<div id="cs-cardShop">
			<img src={product.url} alt={product.nom} className="cs-imgProduct" />
			<figcaption className="cs-infoCardShop">
				<div className="cs-nameProduct">
					<p className="cs-ProductName">{product.nom}</p>
					<div className="cs-containerPriceProduct">
						<p className="cs-priceProduct">Prix : {product.Prix} </p>
					</div>
					<ButtonAdd />
				</div>
			</figcaption>
		</div>
	);
};

export default CardShop;
