"use client";
import { Montserrat } from 'next/font/google';
import NavHero from './NavHero';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400"] })

const Hero = () => {
    return (
        <div className={`${montserrat.className} md:bg-[url('/images/banner.webp')] bg-[url('/images/banner2.jpg')] bg-cover bg-center`}>
            <NavHero />
            <div className={`md:h-screen h-[167vw] flex items-center justify-center`}>

                <div className='flex flex-col gap-2 text-center text-[#F7F7F7] sm:mt-10'>
                    <p className='sm:text-[14px] text-[12px] font-bold'>ESSENTIALS FOR ANY OCCASION</p>
                    <h1 className='text-[40px] font-extrabold text-white tracking-wider leading-tight'>CORE COLLECTION</h1>
                    <div className='flex items-center gap-4 justify-center mt-2'>
                       <Link href={"/men"}><button className='button'>SHOP MEN</button></Link>
                       <Link href={"/women"}><button className='button'>SHOP WOMEN</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
