import Image from 'next/image';
import mountain from '../public/images/mountain.jpg';

export default function Card() {
	return (
		<>
			<div className="items-center border-2 border-gray-200 justify-center h-[580px] w-[290px] rounded-md  flex flex-col mt-[15px]  md:flex sm:flex-row sm:w-[580px] sm:h-[290px] lg:h-[640px] lg:flex lg:flex-col lg:w-[350px]">
				<div className="flex  min-h-[290px] w-full bg-blue-200  items- center justify-center lg:min-h-[350px] ">
					<h3>Image</h3>
				</div>
				{/* Bottom part of card */}
				<div className="flex min-h-[290px] md:min-h-full lg:min-h-[290px] w-full items-center justify-center">
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
