import type React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-section">
					<h3>À propos</h3>
					<p>
						Notre boutique en ligne propose des produits uniques et de haute
						qualité.
					</p>
				</div>
				<div className="footer-section">
					<h3>Liens utiles</h3>
					<ul>
						<li>
							<a href="/">Accueil</a>
						</li>
						<li>
							<a href="/panier">Panier</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
						<li>
							<a href="/paiement">Paiement</a>
						</li>
					</ul>
				</div>
				<div className="footer-section">
					<h3>Contact</h3>
					<p>Email: contact@example.com</p>
					<p>Téléphone: +33 1 23 45 67 89</p>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2023 Votre Boutique. Tous droits réservés.</p>
			</div>
		</footer>
	);
};

export default Footer;
