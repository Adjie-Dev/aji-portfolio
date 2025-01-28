import Head from 'next/head'
import React from 'react'
import Layout from './components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icon'
import project1 from '../../public/assets/images/projects/dishub-situbondo.jpg'
import project2 from '../../public/assets/images/projects/kang-anime.png'
import project3 from '../../public/assets/images/projects/kedai-kopi.png'
import project4 from '../../public/assets/images/projects/harvest-abadi.jpg'
import project5 from '../../public/assets/images/projects/ollshop.png'
import project6 from '../../public/assets/images/projects/Kamus.png'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 '>

            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] md:-right-2 md:w-[101%] xs:h-[102%]' />

            <Link href={link} target={'_blank'} className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full lg:pl-0 lg:pt-6'>
                <Image src={img} alt={title} className='w-full h-auto'
                    priority
                    sizes='( max-width: 768px) 100vw, ( max-width: 1200px) 50vw, 50vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target={'_blank'} className='w-10'>
                        <GithubIcon /> {""}
                    </Link>
                    <Link href={link} target={'_blank'} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 md:w[102%] xs:rounded-'>

            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:rounded-[1.5rem]' />

            <Link href={link} target={'_blank'} className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='my-2 w-full flex items-center justify-between'>
                    <Link href={link} target={'_blank'} className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target={'_blank'} className='w-8 md:w-6'>
                        <GithubIcon />{""}
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Aji | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Dishub Situbondo"
                                img={project1}
                                summary="The Smart Transportation Monitoring App for Dishub Situbondo is built with React and Tailwind CSS, featuring a modern, intuitive, and responsive interface. Every design detail is meticulously crafted to align with the visual concept in Figma, ensuring an optimal and seamless user experience."
                                link="https://dishub.situbondokab.go.id/"
                                github="https://github.com/hooxie-id/fe-dishub-situbondo.git"
                                type="Featured Projects"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="AnimeKisama"
                                img={project2}
                                link="https://kanganimekisama.vercel.app/"
                                github="https://github.com/WahyuAji11/kanganimekisama"
                                type="Featured Projects"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Kedai kopi"
                                img={project3}
                                link="https://wahyuaji11.github.io/coffe-shop/"
                                github="https://github.com/WahyuAji11/coffe-shop"
                                type="Featured Projects"
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Harvest Abadi"
                                img={project4}
                                summary="Company profile website featuring services, offerings, and an employee dashboard. Includes dark mode and light mode for better user experience."
                                link="https://harvestabadi.com/"
                                github="https://github.com/WahyuAji11/fe-harvestabadi.git"
                                type="Featured Projects"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="E-commerce Website"
                                img={project5}
                                link="https://ecommerce-reactjs-and-ts.vercel.app"
                                github="https://github.com/WahyuAji11/ecommerce-reactjsAndTs"
                                type="Featured Projects"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="IndoPali Dictionary"
                                img={project6}
                                link="https://drive.google.com/file/d/1PYhJtJPuDy3pO31Mwm6gpd0OsUb8wPJj/view?usp=drive_link"
                                github="https://github.com/WahyuAji11/KamusPaliIndonesia.git"
                                type="Featured Projects"
                            />
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default projects
