import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Pages/home.tsx";
import App from "./App.tsx";
import Galerie from "./Components/ComponantGalerie/Galerie.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: </>,
			},
			{
				path: "/Galerie",
				element: <Galerie />,
			},
		],
	},
]);
// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
	<StrictMode>
		{" "}
		{/* Wrap the App component with CartProvider */}
		<RouterProvider router={router} />
	</StrictMode>,
);
