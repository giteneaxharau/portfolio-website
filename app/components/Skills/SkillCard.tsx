import Image from 'next/image';

interface ExperienceCardProps {
	// logo: string;
	// title: string;
}

export default function ExperienceCard({}: ExperienceCardProps) {
	return (
		<div className="flex flex-col h-[400px] w-[300px] bg-slate-200  flex-shrink-0 rounded-xl p-4">
			<div className="w-full h-full flex-auto rounded-t-xl flex items-center justify-center">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
					alt="react logo"
					loading="lazy"
					width={120}
					height={120}
					blurDataURL="blurDataURL"
					placeholder="blur"
				/>
			</div>
			<div className="flex flex-col text-left w-full">
				<h1 className="text-gray-900 text-6xl whitespace-normal flex-wrap">
					React
				</h1>
				<p className="text-gray-900 text-2xl whitespace-normal flex-wrap text-left">
					React is a JavaScript library for building user interfaces.
				</p>
			</div>
		</div>
	);
}
