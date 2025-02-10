"use client"
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400"] });

const AboutPage = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className={`${montserrat.className} flex flex-col`}>
            <div className={`relative h-screen overflow-hidden`}>
                {/* Background Image */}
                <Image
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    src={"/images/ab1.jpg"}
                    alt="volume"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 bg-black bg-opacity-10 overflow-hidden object-top"
                />


                {/* Centered Text */}
                <div data-aos="zoom-in-up" data-aos-duration="700" data-aos-easing="ease-in-out" className="h-full flex items-center justify-center relative z-10">
                    <div className="flex flex-col gap-2 text-center text-[#F7F7F7] sm:mt-10">
                        <p className="sm:text-[15px] text-[12px] font-bold">&quot;Robiz: Weaving Threads of Tomorrow&quot;</p>
                    </div>
                </div>
            </div>

            <div className="lg:h-screen flex md:flex-row flex-col-reverse items-center md:gap-0 gap-5 w-[93%] mx-auto py-4">
                <div className="flex-1 text-[#000000]">
                    <h1 className="text-[15px]">01. OUR STORY</h1>
                    <p data-aos="fade-up" className="font-semibold md:text-[14px] text-[12px] sm:w-[87%] pt-3">Robiz is not just a brand; it&apos;s a tribute to family, resilience, and the journey of creating something meaningful. Founded in 2024, Robiz was born out of a deep love and respect for my mother, whose name has inspired the very essence of this brand. It’s a blend of heritage and innovation, aiming to offer a modern yet personal touch to every product we create.</p>
                </div>
                <div className="md:flex-1 h-full w-full overflow-hidden">
                    <Image src={"/images/ab2.jpg"} alt="abdout-image-2" width={500} height={600} className="h-full w-full"    data-aos="zoom-out"
                    data-aos-duration="600"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"/>
                </div>
            </div>

            <div className={`relative h-screen overflow-hidden`}>
                {/* Background Image */}
                <Image
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    src={"/images/ab3.jpg"}
                    alt="volume"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 bg-black bg-opacity-10 overflow-hidden object-top"
                />


                {/* Centered Text */}
                <div data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-out" className="h-full flex items-center justify-center relative z-10">
                    <div className="flex flex-col gap-2 text-center text-[#F7F7F7] sm:mt-10">
                        <p className="sm:text-[15px] text-[12px] font-bold sm:w-[50%] mx-auto md:px-0 px-5">Robiz is a blend of traditional craftsmanship and modern technology, a harmonious fusion of South Asian heritage and cutting-edge digital solutions. Our goal is to provide more than just products; we aim to deliver experiences that speak to the soul and reflect the ever-changing dynamics of our world. Guided by a commitment to excellence and authenticity, Robiz is paving the way for a future where quality and creativity are never compromised.</p>
                    </div>
                </div>
            </div>
            <div className={`relative h-screen overflow-hidden`}>
                {/* Background Image */}
                <Image
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    src={"/images/ab4.jpg"}
                    alt="volume"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 bg-black opacity-[30%] overflow-hidden object-top"
                />


                {/* Centered Text */}
                <div data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-out" className="h-full flex items-center justify-center relative z-10">
                    <div className="flex flex-col gap-2 text-center text-[#F7F7F7] sm:mt-10">
                        <p className="sm:text-[15px] text-[12px] font-bold sm:w-[50%] mx-auto md:px-0 px-5">At Robiz, we do not just sell; we tell stories. Stories of ambition, perseverance, and the drive to make a difference. We challenge norms, break barriers, and redefine what it means to be a part of something that matters. With every product and service, we are on a journey to reshape the e-commerce landscape — and we invite you to be a part of this movement.
                            <br />

Join us at Robiz, where the essence of tradition meets the pulse of innovation, and every step forward is a tribute to those who inspire us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
