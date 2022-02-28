import React, { useState } from 'react';
import Image from 'next/image';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();

	let Links = [
		{ name: 'Home', link: '/' },
		{ name: 'Services', link: '/services' },
		{ name: 'About', link: '/about' },
		{ name: 'Login', link: '/login' },
		{ name: 'Logout', link: '/logout' },
	];
	let [open, setOpen] = useState(false);

	return (
		<>
			{' '}
			<div className="flex w-full shadow-md ">
				<div className="container mx-auto    ">
					<div className="md:flex h-10 md:h-12 items-center justify-between z-50 bg-white py-2 lg:py-4 md:px-10 px-7  ">
						<div className="font-bold  text-2x1 cursor-pointer text-[#cc0000] hover:text-gray-500 flex  items-center font-poppins  ">
							<span className="text-3x1 text-[#cc0000]-400 mr-1 ">
								<BlurCircularIcon />
							</span>
							<Image
								src="/images/bookit_logo.png"
								alt=""
								width={80}
								height={30}
								className="pointer"
							/>
						</div>

						<ul
							className={`md:flex md:items-center  pt-[42px] md:pt-0 absolute md:static bg-white  md:z-auto z-[-1] left-0 w-1/3 bg-opacity-60 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
								open ? 'top-10 ' : 'top-[-470px]'
							}`}
						>
							{Links.map((link) => (
								<li
									key={link.name}
									href={link.link}
									className="md:ml-8 text-xl md:my-0 my-7"
								>
									<a
										className={`cursor-pointer ${
											router.pathname === link.link
												? 'text-[#cc0000] hover:text-gray-500'
												: 'text-blue-400 hover:text-gray-500'
										}`}
									>
										{link.name}
									</a>
								</li>
							))}
							<button className=" text-white bg-[#cc0000] md:ml-2  border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">
								Login
							</button>
						</ul>
					</div>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="text-3x1 z-10  fixed bottom-2 right-4 mt-2 cursor-pointer md:hidden bg-gray-500 flex h-7 w-7 justify-center rounded-full items-center"
				>
					<span className={open ? 'hidden' : ''}>
						{<MenuIcon className="text-white  " />}
					</span>
					<span className={open ? '' : 'hidden'}>
						{<CloseIcon className="text-white " />}
					</span>
				</div>
			</div>
		</>
	);
}
export default Header;
