import type { AppProps } from 'next/app'
import "../styles/Styles.css"
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Zeno</title>
        <meta property="og:title" content="Zeno"/>
        <meta property="og:description" content="Game Developer, Web Developer, Student"/>
        <meta property="og:image" content="https://i.imgur.com/yqpmpIC.png"/>
        <meta property="og:url" content="https://zeno3463.netlify.app/"/>
      </Head>
      <Component {...pageProps} /> 
    </div>  
  )
}
export default MyApp
