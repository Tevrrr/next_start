/** @format */

import Head from 'next/head';
import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';

const Post = ({post}) => {
	const router = useRouter();
	return (
		<MainContainer title={'Post ' + router.query.id}>
            <h2>Post with id {router.query.id}</h2>
            <p>{post.body}</p>
			<button
				onClick={() => {
					router.push('/posts');
				}}>
				{'<<<'} To back
			</button>
			<style>
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

// export async function getStaticPaths() {
//     const response = await fetch(`http://localhost:4200/posts`);
//     const posts = await response.json();
//     const paths = posts.map((post) => ({
// 		params: { id: post.id.toString() },
// 	}));
// 	return { paths, fallback: false };
// }


// export async function getStaticProps({ params }) {
// 	const response = await fetch(`http://localhost:4200/posts/${params.id}`);
// 	const post = await response.json();
// 	return {
// 		props: { post },
// 	};
// }

export async function getServerSideProps(context) {
    console.log(context);
    const response = await fetch(
		`http://localhost:4200/posts/${context.params.id}`
	);
    const post = await response.json();
	return {
		props: { post }, 
	};
}

export default Post;
