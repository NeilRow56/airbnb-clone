import React from 'react';
import mountain from '../public/images/mountain.jpg';
import Image from 'next/image';

function RoomCard2() {
	return (
		<div className="flex container flex-col landscape:flex-row  items-center w-full px-4 mx-auto mt-[60px] md:mt-[150px]  bg-white border-[10px] border-gray-200 rounded-md">
			{/* Left Screen */}
			<div className=" intent">
				<h4>Mountain</h4>

				<Image
					className=" rounded-t-md"
					src={mountain}
					width={600}
					height={400}
					layout="responsive"
					alt="Mountain"
				/>
			</div>
			{/* Right Screen */}
			<div className="intent">
				<div className="p-4">
					<span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
						Highlight
					</span>
					<h4 className="mt-2 mb-2  font-bold">
						Purus Ullamcorper Inceptos Nibh
					</h4>
					<p className="text-sm">
						Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Donec ullamcorper nulla non metus auctor
						fringilla.
					</p>
					<div className="mt-3 flex items-center">
						<span className="text-sm font-semibold">ab</span>&nbsp;
						<span className="font-bold text-xl">45,00</span>&nbsp;
						<span className="text-sm font-semibold">€</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RoomCard2;
