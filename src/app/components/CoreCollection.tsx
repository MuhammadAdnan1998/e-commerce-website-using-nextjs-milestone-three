"use client";
import React, { useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { Archivo } from "next/font/google";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
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


const CoreCollection = () => {
  const [category, setCategory] = useState<string>("men");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSeeAll, setShowSeeAll] = useState<boolean>(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const router = useRouter();

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
        const response = await fetch(`/api/products/${category}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);


  useEffect(() => {
    AOS.init({
      once: true,
      offset: 20,
    });
  }, []);

  return (
    <div className={`${archivo.className} sm:py-5`}>
      <div data-aos="fade-up" data-aos-duration="600" className="md:px-10 px-4 text-center sm:text-left flex flex-col justify-center items-center sm:items-stretch my-5">
        <h2 className="sm:text-[30px] text-[20px] font-medium mb-2 text-[#111111]">
          CORE COLLECTION
        </h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Category Toggle */}
            <div className="flex justify-center items-center gap-1 bg-[#F7F7F7] rounded-lg">
              <div className="relative flex bg-[#F0F0F2] items-center rounded-3xl w-max">
                {/* Sliding Capsule */}
                <div
                  className={`absolute top-[-3px] left-0 h-[32px] rounded-3xl shadow-inner bg-white border border-black transition-transform duration-300`}
                  style={{
                    width: "50%",
                    transform:
                      category === "men" ? "translateX(0)" : "translateX(100%)",
                  }}
                ></div>

                {/* MEN's Button */}
                <div
                  onClick={() => setCategory("men")}
                  className={`relative cursor-pointer py-[4px] pr-6 pl-8 text-center flex items-center justify-center text-[13px]`}
                >
                  Men&apos;s
                </div>

                {/* WOMEN's Button */}
                <div
                  onClick={() => setCategory("women")}
                  className={`relative cursor-pointer py-[4px] pr-6 pl-8 text-center flex items-center justify-center text-[13px]`}
                >
                  Women&apos;s
                </div>
              </div>
            </div>

            {/* "Shop All" Button */}
            <button
              className="underline underline-offset-8"
              onClick={() => router.push(`/${category}`)}
            >
              Shop All
            </button>
          </div>
          <div className="sm:flex hidden items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className={`text-[50px] ${activeIndex === 0 ? "text-gray-400" : "text-[#111111]"
                }`}
              disabled={activeIndex === 0}
            >
              <IoIosArrowRoundBack />
            </button>

            {/* Next Button */}
            <button
              onClick={() => swiperInstance?.slideNext()}
              className={`text-[50px] ${activeIndex === products.length - 1
                ? "text-gray-400"
                : "text-[#111111]"
                }`}
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
              <Image src={"/images/logo.png"} alt="logo" width={150} height={150} className="md:w-[150px] w-[100px] pt-10"/>
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



      {/* Swiper Product Grid */}
      {!loading && products.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="600" className="sm:pl-5 pl-2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              if (swiper.activeIndex >= 4) {
                setShowSeeAll(true);
              } else {
                setShowSeeAll(false);
              }
            }}
            className="carousel__wrapper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.slug.current}>
                <CustomCard
                  imageUrl={product.sideImages[0]}
                  title={product.title}
                  price={product.price}
                  salePrice={product.salePrice}
                  category={category}
                  slug={product.slug.current}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* "See All" Button */}
          {showSeeAll && (
            <div className="text-center">
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => router.push(`/${category}`)}
              >
                See All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CoreCollection;
