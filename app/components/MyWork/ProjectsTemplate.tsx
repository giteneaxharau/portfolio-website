import Image from 'next/image';
import Tag, { TagProps } from './Tag';

export interface ProjectsTemplateProps {
	title: string;
	description: string;
	client?: string;
	disclaimer?: string;
	tags: string[];
	photo: string;
}

export default function ProjectsTemplate({
	description,
	photo,
	tags,
	title,
	client,
	disclaimer,
}: ProjectsTemplateProps) {
	return (
		<div
			role={'listitem'}
			className="group flex flex-col gap-5 bg-gray-700 shadow-sm shadow-white h-full w-full rounded-xl transition-all duration-200 hover:scale-[1.03]"
		>
			<div className="w-full h-full flex-1 flex justify-end items-center gap-5 pt-5 px-5 flex-wrap">
				{tags.map((item, index) => {
					return (
						<Tag key={index} {...{ tagName: item, tagColor: 'bg-blue-500' }} />
					);
				})}
			</div>
			<div className="h-full pt-5 px-5">
				<h1 className="text-5xl font-bold">{title}</h1>
				<h2 className="text-2xl font-semibold text-gray-300">{client}</h2>
				<p className="text-lg text-gray-400">{description}</p>
				{disclaimer && (
					<p className="text-sm text-blue-600 font-thin underline underline-offset-4 cursor-not-allowed">
						{disclaimer}
					</p>
				)}
			</div>
			<div className="h-1/2 shrink-0 overflow-hidden rounded-b-xl">
				<Image
					src={photo}
					alt="software screenshot to explain the application"
					loading="lazy"
					width={1920}
					height={1080}
					className="w-full h-full aspect-video object-cover rounded-b-xl transition-all duration-200 blur-[2px] group-hover:scale-110 group-hover:blur-0"
				/>
			</div>
		</div>
	);
}
