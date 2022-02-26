import Image from 'next/image';
import mountain from '../public/images/mountain.jpg';

export default function RoomCard() {
	return (
		<>
			<div className="flex  flex-col  items-center  rounded-lg mt-[60px] md:mt-[150px]  bg-white  ">
				{/* Top */}
				<div className=" intent">
					<h4>Mountain</h4>

					<Image
						className=" rounded-t-md"
						src={mountain}
						width={300}
						height={200}
						layout="responsive"
						alt="Mountain"
					/>

					{/* Bottom Screen */}

					<div className="p-4">
						<span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
							Highlight
						</span>
						<h4 className="mt-2 mb-2  font-bold">
							Purus Ullamcorper Inceptos Nibh
						</h4>
						<p className="text-sm">
							Cras justo odio, dapibus ac facilisis in, egestas
							eget quam. Donec ullamcorper nulla non metus auctor
							fringilla.
						</p>
						<div className="mt-3 flex items-center">
							<span className="text-sm font-semibold">ab</span>
							&nbsp;
							<span className="font-bold text-xl">45,00</span>
							&nbsp;
							<span className="text-sm font-semibold">€</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
