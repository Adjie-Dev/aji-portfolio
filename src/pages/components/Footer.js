import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center'>
                    Build with
                    <span className='text-primary text-2xl px-1'>&#9825;</span>
                    By&nbsp;
                    <Link href="https://www.instagram.com/w.aji_666/" target={'_blank'} className='underline underline-offset-2' >Aji</Link>
                </div>
                <Link href="mailto:alhafidzw1@gmail.com" className='underline underline-offset-2'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer
