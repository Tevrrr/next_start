import Head from 'next/head';
import Link from 'next/link';
import style from '../styles/404.module.scss';


const Error404 = () => {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
			<div className={style.container}>
				<h1 className={style.error}> ERROR 404</h1>
				<p >
					Go to{' '}
					<Link href='/'>
						<a className={style.link}>main page</a>
					</Link>
				</p>
			</div>
		</>
	);
}

export default Error404;
