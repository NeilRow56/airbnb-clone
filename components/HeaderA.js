import React, { useState } from 'react';
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
			<div className="shadow-md  w-full fixed top-0 left-0">
				<div className="md:flex items-center justify-between bg-[#cc0000] py-4 md:px-10 px-7">
					<div className="font-bold text-2x1 cursor-pointer text-white hover:text-blue-600 flex items-center font-poppins  ">
						<span className="text-3x1 text-blue-600 mr-1 ">
							<BlurCircularIcon />
						</span>
						Header
					</div>

					<ul
						className={`md:flex md:items-center  pt-[42px] md:pt-0 absolute md:static bg-[#cc0000]  md:z-auto z-[-1] left-0 w-1/3 bg-opacity-60 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
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
											? 'text-blue-600 hover:text-blue-500'
											: 'text-white hover:text-blue-500'
									}`}
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div
				onClick={() => setOpen(!open)}
				className="text-3x1 z-10  fixed bottom-3 right-4 mt-2 cursor-pointer md:hidden bg-gray-500 flex h-10 w-10 justify-center rounded-full items-center"
			>
				<span className={open ? 'hidden' : ''}>
					{<MenuIcon className="text-white  " />}
				</span>
				<span className={open ? '' : 'hidden'}>
					{<CloseIcon className="text-white " />}
				</span>
			</div>
		</>
	);
}
export default Header;
