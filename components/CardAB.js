import React from 'react';
import Image from 'next/image';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function CardAB() {
	return (
		<div className="flex relative flex-col white ">
			<Image
				src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
				alt="Room Picture"
				width={250}
				height={200}
				priority // lazy ,eager
				layout="responsive"
				className="rounded-tl-lg rounded-tr-lg"
			/>
			<div className="mt-3">
				<h4 className="">
					<a href="">
						Charming Studio less than 10 Miles to Wells Beaches!
					</a>
				</h4>
			</div>
			<div className="mt-3 flex mx-auto">
				<p className="font-semibold text-black">£125 </p>
				<p className=" text-black ml-1"> /night</p>
			</div>
			<ul className="flex mx-auto mt-3 gap-x-1">
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
					<div className="ml-2">( 5 reviews ) </div>
				</span>
			</ul>
			<button className="bg-[#cc0000] text-white w-full py-2 rounded-md mt-5">
				View Details
			</button>
		</div>
	);
}

export default CardAB;
