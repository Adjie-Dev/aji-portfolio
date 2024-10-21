import Head from 'next/head';
import Layout from './components/Layout';
import Image from 'next/image';
import profilPicture from '../../public/assets/images/profile/aji.png'
import AnimatedText from './components/AnimatedText';
import Link from 'next/link';
import HireMe from './components/HireMe';
import { LinkArrow } from './components/Icon';
import lightBulb from '../../public/assets/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aji&apos;s Portfolio</title>
        <meta name="description" content="Portfolio of Aji" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilPicture} alt="Aji" className="w-full h-auto" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Ideas into Reality with Clean and Efficient Code." className='!text-6xl !text-left' />
              <p className='my-4 text-xl font-medium'>As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects that showcase my expertise in React.js and web development.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/wahyu-aji-pangestu.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2'
                  download={true} >Resume <LinkArrow className={'w-6 ml-1'} /> </Link>
                <Link href="mailto:alhafidzw1@gmail.com" className='ml-4 text-lg font-medium capitalize text-dark underline'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="Adjie" className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}