import HeaderA from './HeaderA';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className="">
			<HeaderA className="z-10" />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
