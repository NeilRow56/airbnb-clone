import Head from 'next/head';
import Home from '../components/Home';

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Home />
			</main>
		</div>
	);
}
