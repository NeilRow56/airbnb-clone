import Head from 'next/head';
import HeaderA from './HeaderA';
import Footer from './Footer';

export default function Layout({
	children,
	title = 'Book Super Hotels for your Holiday',
}) {
	return (
		<div className="">
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<HeaderA className="z-10" />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
