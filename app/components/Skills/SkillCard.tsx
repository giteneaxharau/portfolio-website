import Image from 'next/image';

interface SkillCardProps {
	title: string;
	description: string;
	logo: string;
}

export default function SkillCard({
	description,
	logo,
	title,
}: SkillCardProps) {
	return (
		<div className="flex flex-col h-[400px] w-[300px] bg-slate-200  flex-shrink-0 rounded-xl p-4">
			<div className="w-full h-full flex-auto rounded-t-xl flex items-center justify-center">
				<Image
					src={logo}
					alt={description}
					loading="lazy"
					width={120}
					height={120}
					blurDataURL="blurDataURL"
					placeholder="blur"
				/>
			</div>
			<div className="flex flex-col text-left w-full">
				<h1 className="text-gray-900 text-6xl whitespace-normal flex-wrap">
					{title}
				</h1>
				<p className="text-gray-900 text-2xl whitespace-normal flex-wrap text-left">
					{description}
				</p>
			</div>
		</div>
	);
}
