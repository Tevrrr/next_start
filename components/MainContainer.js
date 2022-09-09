/** @format */

import Head from 'next/head';
import Navbar from './Navbar';

const MainContainer = ({ children, title='' }) => {
	return (
		<div>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'></link>
				<title>{title}</title>
			</Head>{' '}
			<Navbar />
			{children}
		</div>
	);
};

export default MainContainer;
