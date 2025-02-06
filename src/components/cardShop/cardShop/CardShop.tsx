import "./CardShop.css";
import bouclier from "../../../assets/bouclier.jpg";
import ButtonAdd from "./ButtonAdd";

function CardShop() {
	return (
		<div id="cardShop">
			<img src={bouclier} alt="" className="imgProduct" />
			<figcaption className="infoCardShop">
				<div className="nameProduct">
					<p>Bouclier</p>
					<div className="containerPriceProduct">
						<p className="priceProduct">Prix :</p>
					</div>
					<ButtonAdd />
				</div>
			</figcaption>
		</div>
	);
}

export default CardShop;
