/** @format */


import Head from 'next/head';
import Navbar from './Navbar';

const MainContainer = ({ children, title='' }) => {
	return (
        <div>
            
			<Head>
				
				<title>{title}</title>
			</Head>{' '}
			<Navbar />
			{children}
		</div>
	);
};

export default MainContainer;
