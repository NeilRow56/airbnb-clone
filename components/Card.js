import React from 'react';
import Image from 'next/image';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Card() {
	return (
		<>
			<div>
				<div className="container mx-auto">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full  p-4">
							<a
								href=""
								className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
							>
								<div className="relative pb-2 overflow-hidden">
									<Image
										className="absolute inset-0 h-full w-full object-cover"
										// src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 "
										src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
										width={350}
										height={350}
										priority // lazy ,eager
										layout="responsive"
										alt=""
									/>
								</div>
								<div className="p-4">
									<span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
										Highlight
									</span>
									<h4 className="mt-2 mb-2  font-bold">
										Room Details
									</h4>
									<p className="text-[20px]">
										Charming Studio less than 10 Miles to
										Wells Beaches!
									</p>
									<div className="mt-1 flex items-center">
										<span className="font-bold text-xl">
											£
										</span>
										<span className="font-bold text-xl">
											125.00
										</span>
										&nbsp;
										<span className="text-sm font-semibold">
											per night
										</span>
									</div>
								</div>
								<ul className="flex mx-auto mt-3 pb-2 pl-2 gap-x-1">
									<span className="flex ">
										<li>
											<StarOutlineIcon className="text-yellow-300 " />
										</li>
										<li>
											<StarOutlineIcon className="text-yellow-300 " />
										</li>
										<li>
											<StarOutlineIcon className="text-yellow-300 " />
										</li>
										<li>
											<StarOutlineIcon className="text-yellow-300 " />
										</li>
										<li>
											<StarOutlineIcon className="text-yellow-300 " />
										</li>
										<div className="ml-2">
											( 5 reviews ){' '}
										</div>
									</span>
								</ul>
							</a>
							<button className="bg-[#cc0000] text-white w-full py-2 rounded-md mt-5">
								View Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
