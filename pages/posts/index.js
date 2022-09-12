/** @format */

import Link from 'next/link';
import MainContainer from '../../components/MainContainer';
import style from '../../styles/Posts.module.scss';

const Posts = ({ posts }) => {
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

export async function getServerSideProps(context) {
	const response = await fetch(`http://localhost:4200/posts`);
	const posts = await response.json();
	return {
		props: { posts }, // will be passed to the page component as props
	};
}

export default Posts;
