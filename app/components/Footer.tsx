export default function Footer() {
	return (
		<>
			<footer className="w-full mx-auto lg:px-32 md:px-28 sm:px-24 max-[500px]:px-10 py-4 sm:py-6">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a
							href="/"
							target="_blank"
							className="flex items-center hover:underline text-white"
						>
							<span className="self-center text-5xl font-semibold whitespace-nowrap text-white">
								EXH
							</span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6">
						<div>
							<h3 className="mb-6 text-sm font-semibold text-slate-200 uppercase">
								Sections
							</h3>
							<ul>
								{['About', 'Experience', 'Skills', 'My Work', 'Contact'].map(
									(item, index) => {
										return (
											<li className="mb-4" key={item}>
												<a
													href="#"
													target="_blank"
													className="text-gray-400 hover:underline dark:text-gray-400"
												>
													{item}
												</a>
											</li>
										);
									}
								)}
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 border-t-2 rounded" />
				<div className="sm:flex sm:items-center sm:justify-center">
					<span className="text-sm text-slate-400 sm:text-center">
						© 2022{' '}
						<a
							href="https://flowbite.com"
							// target="_blank"
							className="hover:underline"
						>
							Enea Xharau
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</footer>
		</>
	);
}
