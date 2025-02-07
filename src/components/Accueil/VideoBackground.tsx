import type React from "react";
import { useEffect } from "react";
import video from "../../assets/images/Godefroy.mp4";
import "./VideoBackground.css";

const VideoBackground: React.FC = () => {
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const videoElement = document.querySelector(
	// 			".video-background video",
	// 		) as HTMLVideoElement;
	// 		const scrollPosition = window.pageYOffset;
	// 		if (videoElement) {
	// 			videoElement.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<div className="video-background">
			<video autoPlay muted loop>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoBackground;
