export default function Header() {
	return (
		<header className="transparent fixed px-12 h-24 top-0 w-full flex justify-between items-center">
			<nav className="flex items-center justify-between w-full">
				<div>
					<a href="/" className="text-2xl font-bold text-white">
						Enea Xharau
					</a>
				</div>
				<div>
					<ol className="flex items-center justify-between" id="headerlist">
						{['About', 'Experience', 'Work', 'Contact'].map((tab, index) => (
							<li
								key={index}
								className={`mx-1 relative hover:scale-[1.03]`}
								id={tab}
							>
								<a
									href={`#${tab.toLowerCase()}`}
									className="p-1 text-md font-semibold cursor-pointer hover:text-cyan-400"
								>
									{tab}
								</a>
							</li>
						))}
						<li className="mx-1 relative animate-fade-in-left">
							<button className="flex items-center font-mono justify-center gap-1 p-1 border-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 96 960 960"
									width="24"
									fill="currentColor"
								>
									<path d="M479.504 696.334q-10.231 0-19.617-4.273-9.387-4.273-16.887-11.727L280.334 518.667q-14.333-15.333-14.333-37.666T282 443.168q15.334-14.833 36.833-14.833 21.5 0 37.5 15.333l70.334 72.001V229.334q0-23.05 15.773-38.525 15.773-15.475 37.466-15.475 23.094 0 37.927 15.475 14.833 15.475 14.833 38.525v286.335l72.001-72.001q15.333-15.333 37.166-15.333T679 443.501q15.333 15.167 15.333 37.5T679 518.667L517.333 680.334q-7.473 7.363-17.75 11.682-10.277 4.318-20.079 4.318ZM209.333 950.666q-42.425 0-74.212-31.168-31.787-31.169-31.787-75.831V711.333q0-21.733 15.773-37.533t37.466-15.8q23.094 0 37.927 15.8 14.833 15.8 14.833 37.464V844h540.001V711.264q0-21.664 15.073-37.464Q779.48 658 802.073 658q22.593 0 37.927 15.8 15.333 15.8 15.333 37.464V844q0 44.525-32.138 75.595-32.137 31.071-73.861 31.071H209.333Z"></path>
								</svg>
							</button>
						</li>
					</ol>
				</div>
			</nav>
		</header>
	);
}
