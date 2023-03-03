import Image from 'next/image';

export default function SocialIcons() {
	return (
		<>
			<div className="fixed bottom-0 left-10 w-10 z-10 max-sm:hidden max-md:hidden">
				<ul className="flex flex-col items-center m-0 p-0 list-none after:list-none after:block after:w-[2px] after:h-[90px] after:bg-slate-400 overflow-hidden">
					{[
						{ social: 'GitHub', href: 'https://github.com/giteneaxharau' },
						{
							social: 'LinkedIn',
							href: 'https://www.linkedin.com/in/enea-xharau',
						},
						{
							social: 'Instagram',
							href: 'https://www.instagram.com/enea_xharau',
						},
					].map(({ social, href }) => (
						<li key={social} className="last-of-type:mb-2 p-[10px]">
							<a
								href={href}
								target="_blank"
								rel="noreferrer noopener"
								className="text-slate-200 hover:text-cyan-400 w-[32px] h-[32px] flex items-center justify-center"
							>
								<Image
									{...{
										src: `/${social.toLowerCase()}.svg`,
										alt: `${social} logo`,
										className: 'cyanFilter',
										width: 40,
										height: 40,
									}}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="fixed bottom-0 right-10 w-10 z-10 max-sm:hidden max-md:hidden">
				<ul className="flex flex-col items-center m-0 p-0 list-none after:list-none after:block after:w-[2px] after:h-[90px] after:bg-slate-400 overflow-hidden">
					<li className="last-of-type:mb-2 p-[10px]">
						<a
							href={'https://www.linkedin.com/in/enea-xharau'}
							target="_blank"
							rel="noreferrer noopener"
							className="text-slate-200 hover:text-cyan-400 w-[32px] flex items-center justify-center"
							style={{
								writingMode: 'vertical-rl',
							}}
						>
							xharauenea@gmail.com
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
