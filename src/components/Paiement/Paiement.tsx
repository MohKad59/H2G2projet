import type React from "react";
import { useState } from "react";
import "../Paiement/Paiement.css";

type PaymentFormData = {
	cardNumber: string;
	expiryDate: string;
	cvv: string;
	cardHolder: string;
};

type ValidationErrors = {
	[K in keyof PaymentFormData]?: string;
};

const Paiement: React.FC = () => {
	const [formData, setFormData] = useState<PaymentFormData>({
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		cardHolder: "",
	});

	const [errors, setErrors] = useState<ValidationErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const formatCardNumber = (value: string): string => {
		const numbers = value.replace(/\D/g, "");
		const groups = numbers.match(/.{1,4}/g) || [];
		return groups.join(" ").substr(0, 19);
	};

	const formatExpiryDate = (value: string): string => {
		const numbers = value.replace(/\D/g, "");
		if (numbers.length >= 2) {
			return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
		}
		return numbers;
	};

	const validateForm = (): boolean => {
		const newErrors: ValidationErrors = {};
		const currentYear = new Date().getFullYear() % 100;
		const currentMonth = new Date().getMonth() + 1;

		if (!formData.cardNumber.replace(/\s/g, "").match(/^\d{16}$/)) {
			newErrors.cardNumber = "Numéro de carte invalide";
		}

		if (formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
			const [month, year] = formData.expiryDate.split("/").map(Number);
			if (month < 1 || month > 12) {
				newErrors.expiryDate = "Mois invalide";
			} else if (
				year < currentYear ||
				(year === currentYear && month < currentMonth)
			) {
				newErrors.expiryDate = "Carte expirée";
			}
		} else {
			newErrors.expiryDate = "Date invalide";
		}

		if (!formData.cvv.match(/^\d{3}$/)) {
			newErrors.cvv = "CVV invalide";
		}

		if (formData.cardHolder.length < 3) {
			newErrors.cardHolder = "Nom invalide";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSuccess(false);

		if (validateForm()) {
			setIsSubmitting(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 1500));
				setIsSuccess(true);
				setFormData({
					cardNumber: "",
					expiryDate: "",
					cvv: "",
					cardHolder: "",
				});
			} catch (error) {
				console.error("Erreur de paiement:", error);
			} finally {
				setIsSubmitting(false);
			}
		}
	};

	return (
		<>
			<div className="payment-form-container">
				<div className="payment-form-card">
					<div className="payment-form-header">
						<div className="icon-credit-card" />
						<h2>Informations de paiement</h2>
						<p>Veuillez saisir les informations de votre carte bancaire</p>
					</div>

					<form onSubmit={handleSubmit} className="payment-form">
						<div className="form-group">
							<label htmlFor="cardNumber">Numéro de carte</label>
							<div className="card-input-container">
								<input
									id="cardNumber"
									type="text"
									value={formData.cardNumber}
									onChange={(e) =>
										setFormData({
											...formData,
											cardNumber: formatCardNumber(e.target.value),
										})
									}
									placeholder="1234 5678 9012 3456"
									maxLength={19}
								/>
								<div className="card-type-icon" />
							</div>
							{errors.cardNumber && (
								<div className="error-message">{errors.cardNumber}</div>
							)}
						</div>

						<div className="form-row">
							<div className="form-group">
								<label htmlFor="expiryDate">Date d'expiration</label>
								<input
									id="expiryDate"
									type="text"
									value={formData.expiryDate}
									onChange={(e) =>
										setFormData({
											...formData,
											expiryDate: formatExpiryDate(e.target.value),
										})
									}
									placeholder="MM/YY"
									maxLength={5}
								/>
								{errors.expiryDate && (
									<div className="error-message">{errors.expiryDate}</div>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="cvv">CVV</label>
								<input
									id="cvv"
									type="text"
									value={formData.cvv}
									onChange={(e) =>
										setFormData({
											...formData,
											cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
										})
									}
									placeholder="123"
									maxLength={3}
								/>
								{errors.cvv && (
									<div className="error-message">{errors.cvv}</div>
								)}
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="cardHolder">Titulaire de la carte</label>
							<input
								id="cardHolder"
								type="text"
								value={formData.cardHolder}
								onChange={(e) =>
									setFormData({
										...formData,
										cardHolder: e.target.value.toUpperCase(),
									})
								}
								placeholder="NOM PRÉNOM"
							/>
							{errors.cardHolder && (
								<div className="error-message">{errors.cardHolder}</div>
							)}
						</div>

						{isSuccess && (
							<div className="success-message">
								Paiement effectué avec succès !
							</div>
						)}

						<button
							type="submit"
							className={`submit-button ${isSubmitting ? "submitting" : ""}`}
							disabled={isSubmitting}
						>
							{isSubmitting ? "Traitement en cours..." : "Payer maintenant"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Paiement;
