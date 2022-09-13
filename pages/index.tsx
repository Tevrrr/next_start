/** @format */

import Head from 'next/head';
import Image from 'next/image';
import MainContainer from '../components/MainContainer';
import styles from '../styles/Home.module.scss';




const Home = () => {
    return (
        <MainContainer title='Main'>
            <div>
                <h1>Main Page</h1>
            </div>
		</MainContainer>
    );
}

export default Home
