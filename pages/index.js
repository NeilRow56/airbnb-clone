import Head from 'next/head';
import RoomCard from '../components/RoomCard';
import RoomCard2 from '../components/RoomCard2';
import Image from 'next/image';
import mountain from '../public/images/mountain.jpg';

export default function Home() {
	return (
		<>
			<header></header>
			<main>
				<div className="items-center justify-center h-screen flex">
					Main Content
				</div>
				<div className="items-center justify-center h-screen flex">
					Main Content
				</div>
			</main>
		</>
	);
}
