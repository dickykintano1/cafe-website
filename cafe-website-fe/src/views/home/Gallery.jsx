import useFadeInOnView from "../../hooks/useFadeInOnView";

export default function Gallery() {
	const interior1 = useFadeInOnView({ animation: 'fadeInRight' });
	const interior2 = useFadeInOnView({ animation: 'fadeInLeft' });
	const interior3 = useFadeInOnView({ animation: 'fadeInRight' });

	return (
		<div id="page2" className="flex flex-wrap py-5">
			<div className="basis-1/2 pr-5">
				<div ref={interior1} className="
          w-full h-50 md:h-75 lg:h-100
          bg-[url(/img/interior1.png)] bg-cover bg-center
        "
				/>
			</div>
			<div className="basis-1/2 pl-5">
				<div ref={interior2} className="
          w-full h-80 md:h-90 lg:h-160 mt-40
          bg-[url(/img/interior2.png)] bg-cover bg-center
          translate-y-5
        "
				/>
			</div>
			<div className="basis-1/2 pr-5">
				<div ref={interior3} className="
          w-full h-70 md:h-90 lg:h-140
          bg-[url(/img/interior3.png)] bg-cover bg-center
        "
				/>
			</div>
		</div>
	)
}