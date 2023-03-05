import Carousel from './Carousel';
import SkillCard from './SkillCard';

export default function Skills() {
	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-start mx-auto my-0 p-0 pt-28 h-[100vh] text-left"
		>
			<div className="w-full flex items-center self-start gap-8">
				<span className="w-full h-1 rounded bg-slate-300"></span>
				<h1 className="text-white text-2xl font-bold text-left flex-shrink-0">
					Skills
				</h1>
				<span className="w-full h-1 rounded bg-slate-300"></span>
			</div>
			<Carousel length={skills.length} items={skills} />
		</section>
	);
}

const skills = [
	{
		title: 'Javascript',
		description:
			'JavaScript is a high-level, dynamic, and interpreted programming language used primarily for building interactive web pages and applications.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
	},
	{
		title: 'TypeScript',
		description:
			'TypeScript is a superset of JavaScript that adds static typing and other advanced features to improve code quality, scalability, and developer productivity.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	},
	{
		title: 'React',
		description:
			'React is a popular JavaScript library for building user interfaces and web applications, known for its performance, simplicity.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		title: 'NodeJS',
		description:
			'Node.js is a cross-platform JavaScript runtime environment used for server-side programming and building scalable network applications.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
	},
	{
		title: 'ExpressJS',
		description:
			'Express.js is a minimal and flexible Node.js web application framework used for building web applications and APIs quickly and easily.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
	},
	{
		title: 'NextJS',
		description:
			'Next.js is a popular React framework for building server-side rendered and static web applications with automatic code splitting, optimized performance, and easy deployment.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
	},
	{
		title: 'Golang',
		description:
			'Go, also known as Golang, is a fast, statically typed, and open-source programming language developed by Google for building efficient and scalable software systems.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
	},
	{
		title: 'SQL',
		description:
			'SQL, or Structured Query Language, is a standard programming language used for managing relational databases and performing operations such as querying, inserting, updating, and deleting data.',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
	},
];
