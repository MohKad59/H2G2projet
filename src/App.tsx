import { useState } from "react";
import "./App.css";
import CardShop from "./components/cardShop/cardShop/CardShop";
import VideoBackground from "./components/VideoBackground";

function App() {
	// biome-ignore lint/correctness/noEmptyPattern: <explanation>
	const [] = useState(0);

	return (
		<>
			<VideoBackground />
			<CardShop />
		</>
	);
}

export default App;
