import type React from "react";
import { useEffect, useState } from "react";
import CardShop from "../cardShop/cardShop/CardShop";

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
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (products.length === 0) {
			setError("No products available.");
		}
	}, [products]);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div id="galerie">
			{products.map((product) => (
				<CardShop key={product.id} product={product} />
			))}
		</div>
	);
};

export default Galerie;
