'use client';
import { useState } from 'react';

interface CarouselProps {
	children: React.ReactNode;
	length: number;
}

export default function Carousel({ children, length }: CarouselProps) {
	const [active, setActive] = useState(0);
	return (
		<div className="w-full rounded-lg">
			<div className="w-full overflow-x-scroll flex gap-3 rounded-lg">
				{children}
			</div>
		</div>
	);
}
