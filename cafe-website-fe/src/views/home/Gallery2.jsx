import { useState } from "react";

const IMAGES = [
	{ src: "/img/interior1.png", alt: "Window seat by the rain" },
	{ src: "/img/interior2.png", alt: "Espresso bar" },
	{ src: "/img/interior3.png", alt: "Cafe interior" },
];

const DEFAULT_ACTIVE = 0; // image 1 is expanded by default

export default function Gallery2() {
	const [active, setActive] = useState(DEFAULT_ACTIVE);

	return (
		<div className="my-5 md:my-10">
			<div
				className="flex flex-col gap-5 min-h-[100svh] block md:hidden"
				// Back to image 1 once the pointer leaves the whole gallery
				onMouseLeave={() => setActive(DEFAULT_ACTIVE)}
			>
				{IMAGES.map((img, i) => (
					<div
						key={img.src}
						role="img"
						aria-label={img.alt}
						tabIndex={0}
						onMouseEnter={() => setActive(i)}
						onFocus={() => setActive(i)} // keyboard
						onClick={() => setActive(i)}  // touch devices (no hover)
						style={{ backgroundImage: `url(${img.src})` }}
						className={`
							min-h-10 w-full
							bg-cover bg-center cursor-pointer
							duration-700 ease-in-out
							${active === i ? "flex-3" : "flex-1"}
						`}
					/>
				))}
			</div>
			<div
				className="flex-row gap-5 hidden md:flex"
				onMouseLeave={() => setActive(DEFAULT_ACTIVE)}
				>
				{IMAGES.map((img, i) => (
					<div
					key={img.src}
					role="img"
					aria-label={img.alt}
					tabIndex={0}
					onMouseEnter={() => setActive(i)}
					onFocus={() => setActive(i)} // keyboard
					onClick={() => setActive(i)}  // touch devices (no hover)
					style={{ backgroundImage: `url(${img.src})` }}
					className={`
						min-w-0 h-70 md:h-90 lg:h-140
						bg-cover bg-center cursor-pointer
						duration-700 ease-in-out
						${active === i ? "flex-3" : "flex-1"}
						`}
						/>
					))}
			</div>
		</div>
	);
}
