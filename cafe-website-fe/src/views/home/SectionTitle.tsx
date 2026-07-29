import RevealText from '../../components/revealText';

type SectionTitleProps = {
	title: string[];
	text: string;
};

export default function SectionTitle({ title, text }: SectionTitleProps) {
	return (
		<div className="w-full h-[40svh] text-center my-20 flex flex-col justify-center items-center">
			<RevealText containerClass={'mb-10'} textClass={'font-DMSerif text-5xl md:text-6xl text-amber-900'} phrases={title} />
			<p className="font-Tinos text-xl md:text-2xl max-w-[100%] mx-auto text-gray-700">
				{text}
			</p>
		</div>
	)
}