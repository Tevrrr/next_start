/** @format */

import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<Link href={'/'} passHref>
				<a>Home</a>
			</Link>
			<Link href={'/posts'} passHref>
				<a>Posts</a>
			</Link>
		</nav>
	);
};

export default Navbar;
