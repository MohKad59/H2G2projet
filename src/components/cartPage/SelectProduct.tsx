import "./selectProduct.css";
import epee from "../../assets/epee.png";

function SelectProduct() {
	return (
		<div id="containerCard">
			<p className="titleCart">Votre Attirail de guerre</p>
			<div className="selectedProduct">
				<div className="containerProduct">
					<div className="placeProduct">{/* photo produit selectionné */}</div>
					<div className="refProduct">
						<p>nom produit selectionné</p>
						<p>Prix :</p>
					</div>
				</div>
				<div className="containerQuantity">
					<div className="quantitySelected">- 1 +</div>
					<button type="button" className="stopButton">
						<img src={epee} alt="" typeof="button" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default SelectProduct;
