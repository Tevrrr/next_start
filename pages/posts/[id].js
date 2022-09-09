/** @format */

import Head from 'next/head';
import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';

const Post = () => {
	const router = useRouter();
	return (
		<MainContainer title={'Post ' + router.query.id}>
			<h2>Post with id {router.query.id}</h2>
			<button
				onClick={() => {
					router.push('/posts');
				}}>
				{'<<<'} To back
			</button>
			<style jsx>
				{`
                button{
                    padding: .5rem 1rem;
                    font: inherit;
                    font-weight: 500;
                    cursor:pointer;
                }s
                `}
			</style>
		</MainContainer>
	);
};

export default Post;
