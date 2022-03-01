import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardAB from './CardAB';

const Home = () => {
	return (
		<>
			<div id="rooms" className="flex flex-col container mx-auto ">
				<div className="flex  container md:px-10 px-7 mt-3 md:mt-16 mx-auto">
					<h3>Stays In New York</h3>
				</div>
				<div className="flex  w-full h-8 text-[#cc0000] items-center md:px-10 px-7 ">
					<a href="" className="text-[#cc0000]">
						<span className="flex ">
							<ArrowBackIcon className="mr-2 mt-[5px]" />
							<h4> Back to Search</h4>
						</span>
					</a>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  md:px-10 px-7 mt-2 md:mt-10 -z-10 ">
					<CardAB />
					<CardAB />
					<CardAB />
					<CardAB />
				</div>
			</div>
		</>
	);
};

export default Home;
