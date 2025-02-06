import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import VideoBackground from "./components/VideoBackground.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		errorElement: <div>Something went wrong! Please try again later.</div>, // Message d'erreur global
		children: [
			{
				path: "/videobackground",
				element: <VideoBackground />,
				errorElement: <div>Error loading video background.</div>, // Message d'erreur spécifique à cette route
			},
			// Ajoutez d'autres routes ici si nécessaire
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
} else {
	console.error("Root element not found");
}
