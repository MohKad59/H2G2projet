// NavBar.tsx
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
	const { items } = useCart();
	const itemCount = items.reduce((total, item) => total + item.quantity, 0);

	return (
		<nav className="navbar">
			<div className="welcome">
				<div className="bloc1">
					<Link to={"/"}>
						<img
							className="title"
							src="../../public/assets/models/logo_navB.png"
							alt="logo"
						/>
					</Link>
				</div>
				<ul className="onglets">
					<li>
						<Link to={"/dnd"}>Donjon & Dragons</Link>
					</li>
					<li>
						<Link to={"/manga"}>Manga</Link>
					</li>
					<li>
						<Link to={"/musique"}>Musique</Link>
					</li>
					<li>
						<Link to={"/mode"}>Mode</Link>
					</li>
					<li>
						<Link to={"/sport"}>Sports</Link>
					</li>
					<li>
						<Link to={"/ghibli"}>Ghibli</Link>
					</li>
					<li className="cart-icon-container">
						<Link to={"/cart"} className="cart-icon">
							<span className="cart-icon-badge">{itemCount}</span>
							<img
								src="https://img.icons8.com/?size=100&id=tz6w0lMKRgTZ&format=png&color=000000"
								alt="Icon"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
