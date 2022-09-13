import '../styles/globals.scss'
import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';



const MyApp =({ Component, pageProps }:AppProps) => {
  return (
		<>
			<NextNProgress
				color='#666'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<Component {...pageProps} />
		</>
  ); 
}

export default MyApp
