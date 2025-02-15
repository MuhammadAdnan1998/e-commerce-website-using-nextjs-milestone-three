import { Montserrat } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400"] });
const WinterWear = () => {
    return (
        <div className='lg:h-[110vh] md:h-screen sm:h-[90vh] h-[99vw] my-10'>
            <div className='flex h-full'>
                <Link href={"/men"} className='w-full h-full overflow-hidden'>
                    <div className={`${montserrat.className} relative w-full h-full overflow-hidden`}>
                        {/* Background Image */}
                        <Image
                            src={"/images/winmain.jpg"}
                            alt="volume"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 bg-black bg-opacity-30 overflow-hidden object-top"
                        />


                        {/* Centered Text */}
                        <div className="h-full flex items-end sm:pb-28 pb-16 justify-center relative z-10">
                            <div className="flex flex-col gap-2 text-center text-[#F7F7F7] sm:mt-10">
                                <h1 className="sm:text-[40px] text-[18px] font-extrabold text-white tracking-wider leading-tight">MEN&apos;S</h1>
                                <div className="flex justify-center mt-2">
                                    <button className="buttonTwo border border-white tracking-wider">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href={"/women"} className='w-full h-full overflow-hidden'>
                    <div className={`${montserrat.className} relative w-full h-full overflow-hidden`}>
                        {/* Background Image */}
                        <Image
                            src={"/images/winwomen.webp"}
                            alt="volume"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 bg-black bg-opacity-30 overflow-hidden object-top"
                        />


                        {/* Centered Text */}
                        <div className="h-full flex items-end sm:pb-28 pb-16 justify-center relative z-10">
                            <div className="flex flex-col gap-2 text-center text-[#F7F7F7] sm:mt-10">
                                <h1 className="sm:text-[40px] text-[18px] font-extrabold text-white tracking-wider leading-tight">WOMEN&apos;S</h1>
                                <div className="flex justify-center mt-2">
                                    <button className="buttonTwo border border-white tracking-wider">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WinterWear