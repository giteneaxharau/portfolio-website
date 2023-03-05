import ExperienceCard from '../Skills/SkillCard';
import VerticaStepper from './VerticalStepper';

export default function Experience() {
	return (
		<section
			id="experience"
			className="flex flex-col items-center justify-center mx-auto my-0 p-0 pt-28 h-[100vh] text-left"
		>
			<div className="w-full flex items-center mb-4 self-start gap-8">
				<span className="w-full h-1 rounded bg-slate-300"></span>
				<h1 className="text-white text-2xl font-bold text-left flex-shrink-0">
					Work Experience
				</h1>
				<span className="w-full h-1 rounded bg-slate-300"></span>
			</div>
			<VerticaStepper />
			{/* <div className="w-full flex items-center mb-4 self-start gap-8">
				<span className="w-full h-1 rounded bg-slate-300"></span>
				<h1 className="text-white text-2xl font-bold text-left flex-shrink-0">
					Skills
				</h1>
				<span className="w-full h-1 rounded bg-slate-300"></span>
			</div>
			<div className="grid col-auto grid-rows-1">
				{[{}, {}].map((item, index) => (
					<ExperienceCard key={index} />
				))}
			</div> */}
		</section>
	);
}
