import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import ScrollToTop from './components/ScrollToTop '

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/profile/ajibulat.png" />
      </Head>
      <main className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode='wait' >
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
