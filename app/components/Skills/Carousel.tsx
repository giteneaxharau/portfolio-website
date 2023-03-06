'use client';
import { useEffect, useState } from 'react';
import SkillCard, { SkillCardProps } from './SkillCard';

interface CarouselProps {
	children?: React.ReactNode;
	length: number;
	items: SkillCardProps[];
}

export default function Carousel({ children, length, items }: CarouselProps) {
	const [active, setActive] = useState(NaN);
	useEffect(() => {
		const doc = document.getElementById(
			`${items.find((_, i) => i === active)?.title}`
		);
		doc?.scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: 'center',
		});
	}, [active, items]);
	return (
		<div className="flex flex-col w-full rounded-lg">
			<div className="flex items-center justify-between w-full py-4">
				<button
					type="button"
					className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					onClick={() =>
						setActive((prev) =>
							prev === 0 ? 0 : Number.isNaN(prev) ? 0 : prev - 1
						)
					}
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					onClick={() =>
						setActive((prev) =>
							prev === items.length ? 0 : Number.isNaN(prev) ? 1 : prev + 1
						)
					}
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>
			<div
				className="w-full overflow-x-scroll flex gap-3 rounded-lg"
				id="carouselId"
			>
				{items.map((skill, index) => (
					<div
						key={index}
						id={skill.title}
						className="duration-700 ease-in-out"
					>
						<SkillCard {...{ ...skill }} />
					</div>
				))}
			</div>
		</div>
	);
}
