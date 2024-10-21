import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import AnimatedText from './components/AnimatedText'
import Layout from './components/Layout'
import Image from 'next/image'
import profilePic from '../../public/assets/images/profile/aji.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from './components/Skills'
import Experience from './components/Experience'

const AnimateNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}>{0}</span>;
}


const about = () => {
    return (
        <>
            <Head>
                <title>Aji | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                            <p className='font-medium'>
                                I&apos;m Aji, a front-end web developer with 2 years of experience. I am passionate about building engaging and functional digital interfaces and always strive to find innovative ways to bring my clients&apos; visions to life.
                            </p>
                            <p className='my-4 font-medium'>
                                I believe that front-enddevelopment is about more thanjust writing code –
                                it&apos;s about solving problemsand building intuitive, enjoyableexperiences for users.
                            </p>
                            <p className='font-medium'>
                                Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image src={profilePic} alt='Wahyu Aji' className='w-full h-auto rounded-2xl' />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimateNumbers value={50} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimateNumbers value={40} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimateNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about
