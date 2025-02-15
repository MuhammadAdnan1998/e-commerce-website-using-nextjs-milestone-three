"use client"
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Image from "next/image";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400"] });

const Volume = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className={`${montserrat.className} relative h-screen overflow-hidden`}>
            {/* Background Image */}
            <Image
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                src={"/images/v.webp"}
                alt="volume"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 bg-black bg-opacity-30 overflow-hidden object-top"
            />


            {/* Centered Text */}
            <div data-aos="zoom-in-up" data-aos-duration="700" data-aos-easing="ease-in-out" className="h-full flex items-center justify-center relative z-10">
                <div className="flex flex-col gap-2 text-center text-[#F7F7F7] sm:mt-10">
                    <p className="sm:text-[14px] text-[12px] font-bold">OUR MOST INTRICATE RELEASE EVER</p>
                    <h1 className="text-[40px] font-extrabold text-white tracking-wider leading-tight">VOLUME 12</h1>
                    <div className="flex justify-center mt-2">
                        <button className="buttonTwo border border-white tracking-wider">EXPLORE  VOLUME  12</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volume;
