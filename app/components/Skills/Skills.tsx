import Carousel from './Carousel';
import SkillCard from './SkillCard';

export default function Skills() {
	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-start mx-auto my-0 p-0 pt-28 h-[100vh] text-left"
		>
			<div className="w-full flex items-center mb-4 self-start gap-8">
				<span className="w-full h-1 rounded bg-slate-300"></span>
				<h1 className="text-white text-2xl font-bold text-left flex-shrink-0">
					Skills
				</h1>
				<span className="w-full h-1 rounded bg-slate-300"></span>
			</div>
			<Carousel length={skills.length}>
				{skills.map((skill, index) => (
					<div key={index} className="duration-700 ease-in-out">
						<SkillCard {...{ ...skill }} />
					</div>
				))}
			</Carousel>
		</section>
	);
}

const skills = [
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'React',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
];
