import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardShop from "./Components/cardShop";
import Galerie from "./Components/ComponantGalerie/Galerie";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Galerie />
			<CardShop />
		</>
	);
}

export default App;
