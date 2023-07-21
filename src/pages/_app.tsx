import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Meflix - Watch TV any where. Cancel any time.</title>
            <meta
               name='description'
               content={`
                  A netflix clone with typesript and tailwind
               `}
            />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link rel='icon' type='image/jpg' href='/netflix_icon.jpg' />
         </Head>
         <Component {...pageProps} />
      </>
   );
}
