import Experience from './components/Experience/Experience';
import Hero from './components/About/Hero';
import Skills from './components/Skills/Skills';

export default function Home() {
	return (
		<main className="w-full mx-auto h-full lg:px-32 md:px-28 sm:px-24 max-[500px]:px-10 overflow-hidden overflow-x-hidden">
			<Hero />
			<Experience />
			<Skills />
		</main>
	);
}
