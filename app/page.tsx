import Image from 'next/image';
import Experience from './components/Experience';
import Hero from './components/Hero';

export default function Home() {
	return (
		<main className="w-full mx-auto h-full lg:px-32 md:px-28 sm:px-24 max-[400px]:px-10">
			<Hero />
			<Experience />
		</main>
	);
}
