export interface TagProps {
	tagName: string;
	tagColor: string;
}

export default function Tag({ tagColor, tagName }: TagProps) {
	return (
		<button
			className={`flex items-center justify-center w-fit h-8 ${tagColor} rounded-md p-2 text-center align-text-[middle]`}
		>
			<p>{tagName}</p>
		</button>
	);
}
