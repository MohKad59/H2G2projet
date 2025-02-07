// CardShop.tsx
import type React from "react";
import "./CardShop.css";
import ButtonAdd from "./ButtonAdd";

interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
}

interface CardShopProps {
	product: Product;
}

const CardShop: React.FC<CardShopProps> = ({ product }) => {
	return (
		<div id="cardShop">
			<img src={product.image} alt={product.name} className="imgProduct" />
			<figcaption className="infoCardShop">
				<div className="nameProduct">
					<p>{product.name}</p>
					<div className="containerPriceProduct">
						<p className="priceProduct">Prix : {product.price} €</p>
					</div>
					<ButtonAdd />
				</div>
			</figcaption>
		</div>
	);
};

export default CardShop;
