import Image from 'next/image';

export default function Hero() {
	return (
		<section
			id="about"
			className="flex items-center mx-auto my-0 p-0 pt-[100px] h-full text-left"
		>
			<div className="flex flex-col justify-start items-start flex-1 flex-wrap">
				<div className="">
					<h3 className="text-cyan-400 text-xl font-mono">Hello, my name is</h3>
				</div>
				<div className="">
					<h1 className="text-slate-200 font-bold text-7xl mb-5 flex-1">
						Enea Xharau.
					</h1>
				</div>
				<div className="">
					<h2 className="text-slate-400 font-bold text-5xl mb-5">
						Full-stack developer. Digital magician.
					</h2>
				</div>
				<div className="">
					<p className="font-bold text-slate-300 w-[50%] max-[400px]:w-[75%]">
						I am a software engineer based in{' '}
						<a
							href="https://goo.gl/maps/HaC5635iUfoVzLXe8"
							className="text-cyan-600 underline"
						>
							Tirana, Albania
						</a>
						. I specialize in building (and occasionally designing) exceptional
						websites, applications, and everything.
					</p>
				</div>
				<div className="">
					<button
						className="py-2 px-10 text-slate-200 border-slate-400 hover:border-cyan-400 hover:text-cyan-400 border rounded-lg mt-8"
						name="contact me button"
					>
						<a href="#contact" className="font-bold text-md">
							Contact me!
						</a>
					</button>
				</div>
			</div>
			{/* <div
				className="rounded-[50%] bg-transparent w-[500px] h-[500px]"
				style={{ verticalAlign: 'center' }}
			>
				<Image
					{...{
						className: 'rounded-[50%]',
						src: '',
						alt: 'hero image',
						width: 500,
						height: 500,
					}}
				></Image>
			</div> */}
		</section>
	);
}
