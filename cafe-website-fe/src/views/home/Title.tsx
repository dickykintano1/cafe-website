export default function Title() {
	return (
		<div className="
      flex flex-1 flex-col overflow-hidden items-center w-full !text-black 
      bg-[#FFF8E1]"
		>
			<div className="flex flex-row mt-20 justify-center items-center">
				<img src='./img/logo.png' className="w-[72px] h-[72px]" />
				<span className="font-DMSerif text-[4rem] md:text-[5rem]">Ardell's</span>
			</div>
			<span className="font-Tinos text-2xl md:text-3xl text-center">Tradition, Brewed. Innovation, Poured.</span>
		</div>
	)
}