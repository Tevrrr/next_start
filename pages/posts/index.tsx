/** @format */

import { NextPageContext } from 'next';
import Link from 'next/link';
import MainContainer from '../../components/MainContainer';
import style from '../../styles/Posts.module.scss';
import { MyPost } from '../../types/post';

interface PostPageProps {
    posts: MyPost[]
}

const Posts = ({ posts }:PostPageProps) => {
	return (
		<MainContainer title='Posts'>
			<h1>Posts</h1>
			<div className={style.postsContainer}>
				{posts.map((item) => {
					return (
						<Link
							key={item.id}
							href='posts/[id]'
							as={`posts/${item.id}`}>
							<a className={style.postLink}>{item.title}</a>
						</Link>
					);
				})}
			</div>
		</MainContainer>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	const response = await fetch(`${process.env.API_URL}/posts`);
	const posts: MyPost[] = await response.json();
	return {
		props: { posts }, // will be passed to the page component as props
	};
}

export default Posts;
