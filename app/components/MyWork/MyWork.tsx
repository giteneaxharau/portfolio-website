import ProjectsTemplate from './ProjectsTemplate';

export default function MyWork() {
	return (
		<section
			id="my work"
			className="flex flex-col items-center mx-auto my-0 p-0 pt-[100px] pb-24 h-full text-left"
		>
			<div className="w-full flex items-center self-start gap-8 mb-10">
				<span className="w-full h-1 rounded bg-slate-300"></span>
				<h1 className="text-white text-2xl font-bold text-left flex-shrink-0">
					Featured Works
				</h1>
				<span className="w-full h-1 rounded bg-slate-300"></span>
			</div>
			<div
				role={'list'}
				className="grid gap-10 grid-cols-1 sm:grid-cols-2 items-center justify-center grid-rows-[auto] w-full"
			>
				<div className="flex flex-col gap-10">
					{works.slice(0, works.length / 2).map((item) => {
						return <ProjectsTemplate key={item.title} {...item} />;
					})}
				</div>
				<div className="flex flex-col gap-10">
					{works.slice(works.length / 2).map((item, index) => {
						return <ProjectsTemplate key={item.title} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
}

const works = [
	{
		title: 'Lead Manager',
		client: 'Core Scaffold Systems',
		description:
			'Lead Manager is a web application that allows users to manage their leads and clients. It also allows users to schedule workers and handle HR for a construction company in the US.',
		photo: '/leadmanager.webp',
		tags: [
			'React',
			'AWS',
			'DynamoDB',
			'Javascript',
			'Typescript',
			'Ant Design',
			'Socket.io',
			'expressJS',
		],
		disclaimer:
			'All rights reserved to Core Scaffold Systems & Flex Business Solutions',
	},
	{
		title: 'HR&Payroll Management',
		client: 'Flex Business Solutions',
		description:
			'HR&Payroll Management is a web application that allows users to manage their employees and payroll.',
		photo: '/hrmanagement.webp',
		tags: [
			'React',
			'Socket.io',
			'expressJS',
			'Typescript',
			'Redux Toolkit',
			'Ant Design',
			'AWS',
		],
		disclaimer: 'All rights reserved to Flex Business Solutions',
	},
	{
		title: 'Portfolio',
		client: 'Self',
		description:
			'This is my portfolio website. It is built with Next.js and Tailwind CSS.',
		photo: '/thisproject.webp',
		tags: ['Next.js', 'Tailwind CSS', 'React', 'Typescript', 'Vercel'],
	},
];
