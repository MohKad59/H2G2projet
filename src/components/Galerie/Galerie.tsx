import type React from "react";
import { useEffect, useState } from "react";
import CardShop from "../cardShop/cardShop/CardShop";

import "./Galerie.css";
interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
}

interface GalerieProps {
	products: Product[];
}

const Galerie: React.FC<GalerieProps> = ({ products }) => {
	return (
		<div id="gal-galeriesGlobal">
			{products?.map((product) => (
				<CardShop key={product.id} product={product} />
			))}
		</div>
	);
};

export default Galerie;
