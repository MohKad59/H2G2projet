import type React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
	return (
		<div className="contact-container">
			<h1>Contactez-nous</h1>
			<form>
				<label>
					Nom:
					<input type="text" name="name" />
				</label>
				<label>
					Email:
					<input type="email" name="email" />
				</label>
				<label>
					Message:
					<textarea name="message" />
				</label>
				<button type="submit">Envoyer</button>
			</form>
		</div>
	);
};

export default Contact;
