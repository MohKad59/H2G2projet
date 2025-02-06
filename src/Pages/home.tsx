import Galerie from "../Components/ComponantGalerie/Galerie";

function Home() {
	//   const handleButtonClick = () => {
	//     alert("Bouton cliqué !");
	//   };

	return (
		<>
			<Galerie
				myClassName="Structure"
				title="Test"
				title2="Essai"
				paragraph="votre créativité."
				paragraph2="Découvrez nous"
			/>
		</>
	);
}
export default Home;
