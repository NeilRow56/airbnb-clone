import Head from 'next/head';
import Card from '../components/Card';
import Image from 'next/image';
import mountain from '../public/images/mountain.jpg';

export default function Home() {
	return (
		<>
			<header></header>
			<main className="flex flex-col lg:flex lg:flex-row lg:flex-wrap lg:space-x-10 lg:mt-[120px] w-full justify-center">
				<div className="items-center justify-center  flex">
					<Card />
				</div>
				<div className="items-center justify-center  flex">
					<Card />
				</div>
				<div className="items-center justify-center  flex">
					<Card />
				</div>
				<div className="items-center justify-center  flex">
					<Card />
				</div>
			</main>
		</>
	);
}
