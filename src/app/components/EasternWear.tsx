"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Archivo } from "next/font/google";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HoverdCard from "./CardHoverd";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });

interface Product {
    title: string;
    price: number;
    salePrice: number;
    sideImages: {
        asset: {
            _ref: string;
        };
        alt: string;
    }[];
    slug: {
        current: string;
    };
}

const EasternWear = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex] = useState<number>(0);

    const [screenSize, setScreenSize] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/products/easternwear`);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 20,
        });
    }, []);

    const getImageUrl = (imageRef: string | undefined) => {
        return imageRef ? urlFor(imageRef).url() : "/placeholder.png";
    };

    return (
        <div className={`${archivo.className} py-5 sm:pl-0 pl-2`}>
            <div data-aos="fade-up" data-aos-duration="600" className="md:px-10 px-4  text-left flex flex-col justify-center my-5">
                <h2 className="sm:text-[30px] text-[22px] font-medium mb-2 text-[#111111]">
                    EASTERN WEAR
                </h2>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <button className="underline underline-offset-8">
                            Shop All
                        </button>
                    </div>
                    <div className="sm:flex hidden items-center gap-2">
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className={`text-[50px] ${activeIndex === 0 ? "text-gray-400" : "text-[#111111]"} `}
                            disabled={activeIndex === 0}
                        >
                            <IoIosArrowRoundBack />
                        </button>

                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className={`text-[50px] ${activeIndex === products.length - 1 ? "text-gray-400" : "text-[#111111]"}`}
                            disabled={activeIndex === products.length - 1}
                        >
                            <IoIosArrowRoundForward />
                        </button>
                    </div>
                </div>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex justify-start items-center gap-4 overflow-x-auto sm:pl-5 pl-2">
                    {Array.from({
                        length:
                            screenSize >= 1024 ? 4 : screenSize >= 768 ? 3 : 2,
                    }).map((_, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 justify-center items-center lg:h-[530px] flex flex-col gap-4 lg:w-[330px] sm:h-[400px] sm:w-[260px] w-[42vw] h-[74vw] bg-gray-100 skeleton-loader"
                        >
                            {/* Image Placeholder */}
                            <div className="h-3/5 w-full flex justify-center items-center skeleton-loader">
                                <Image src={"/images/logo.png"} alt="logo" width={150} height={150} className="md:w-[150px] w-[100px] pt-10" />
                            </div>

                            <div className="text-center space-y-3">
                                {/* Title Placeholder */}
                                <div className="bg-gray-300 rounded-md h-4 w-3/4 skeleton-loader"></div>

                                {/* Price Placeholder */}
                                <div className="bg-gray-300 rounded-md h-4 w-1/2 skeleton-loader"></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && products.length > 0 && (
                <div data-aos="fade-up" data-aos-duration="600" className="sm:pl-5">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={3}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        className="carousel__wrapper"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.slug.current}>
                                <HoverdCard
                                    imageUrl={getImageUrl(product.sideImages?.[0]?.asset._ref)}
                                    sideImages={product.sideImages}
                                    title={product.title}
                                    price={product.price}
                                    salePrice={product.salePrice}
                                    category={""}
                                    slug={product.slug.current}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default EasternWear;
