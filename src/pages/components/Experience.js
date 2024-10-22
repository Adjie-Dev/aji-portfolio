import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {

    const ref = useRef(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className="capitalize font-bold text-2xl">{position}&nbsp;
                    <a href={companyLink} target={'_blank'} className="text-primary capitalize">
                        {company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75">{time} | {address}</span>
                <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='my-64'>
            <h1 className="font-bold text-8xl mb-32 w-full text-center">Experience</h1>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div

                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        position={"Web Developer"}
                        company={"Freelance"}
                        companyLink={"https://fivver.com"}
                        time={"2023-2024"}
                        address={"Denpasar, Indonesia"}
                        work={"Web developer with a focus on front-end development. I have worked in a team responsible for developing new features for a leading search engine, including improving the accuracy and relevance of search results."}
                    />



                    <Details
                        position={"Front-end Developer"}
                        company={"Hooxie.id"}
                        companyLink={"https://www.linkedin.com/company/hooxieid"}
                        time={"2024-right now"}
                        address={"Batu. Malang, Indonesia"}
                        work={"As a front-end developer at Hooxie.id, I am responsible for designing and implementing responsive and interactive user interfaces. I collaborate with the team to develop new features that enhance the user experience, including optimizing the speed and performance of web applications. With in-depth knowledge of React.js and Next.js, I focus on creating innovative solutions that support business and user needs."}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
