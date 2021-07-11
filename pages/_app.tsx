import type { AppProps } from 'next/app'
import "../styles/Styles.css"
import { Nav } from "../components/Nav";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])      

  return (
    <div>
      <Head>
        <title>Zeno Game Dev</title>
      </Head>
      <Nav />
      <Component {...pageProps} /> 
    </div>  
  )
}
export default MyApp
