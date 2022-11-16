import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 sticky top-0 z-50 flex items-center flex-wrap bg-white p-3 ">
				<Link href="/" legacyBehavior>
					<a className="inline-flex items-center p-2 mr-4 ">
						<span className="text-xl text-black font-bold uppercase tracking-wide">
							Zero To Hero:DSA
						</span>
					</a>
				</Link>
				<button
					className=" inline-flex p-3 hover:bg-black rounded lg:hidden text-black ml-auto hover:text-white outline-none"
					onClick={handleClick}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div
					className={`${active ? "" : "hidden"
						}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
				>
					<div className="justify-center flex-1 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
						<Link href="/" legacyBehavior>
							<a className="lg:inline-flex pr-6 lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-black hover:text-white ">
								Home
							</a>
						</Link>
						<Link href="/solutions" legacyBehavior>
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-black hover:text-white">
								Solutions
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;