"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Archivo } from "next/font/google";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import FilterAndSort from "@/app/components/Filter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });

interface Product {
  title: string;
  price: number;
  salePrice: number;
  sideImages: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt: string;
  }[];
  slug: {
    current: string;
  };
}

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [columns, setColumns] = useState<number>(4);
  const [cardSize, setCardSize] = useState<"xl" | "lg" | "md">("lg");


  useEffect(() => {
    AOS.init({
      once: true,
      offset: 20,
    });

    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/${params.category}`);
        const data = await response.json();
        if (response.ok) {
          setProducts(data.products);
          setSortedProducts(data.products);
        } else {
          setError(data.error || "Failed to fetch products");
        }
      } catch (err) {
        console.log(err);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.category]);

  const handleSort = (order: "highToLow" | "lowToHigh") => {
    const sorted = [...products].sort((a, b) => {
      const priceA = a.salePrice || a.price;
      const priceB = b.salePrice || b.price;
      return order === "lowToHigh" ? priceA - priceB : priceB - priceA;
    });
    setSortedProducts(sorted);
  };

  if (loading) {
    return <div className="h-screen w-full flex justify-center items-center skeleton-loader">
    <Image src={"/images/logo.png"} alt="logo" width={150} height={150} className="md:w-[250px] w-[100px] pt-10" />
  </div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleColumnChange = (numColumns: number, size: "xl" | "lg" | "md") => {
    setColumns(numColumns);
    setCardSize(size);
  };

  const cardSizeClasses = {
    xl: "w-full h-[310px] sm:h-[650px] text-[14px]",
    lg: "lg:h-[530px] sm:gap-4 lg:w-[320px] sm:h-[400px] sm:w-[260px] w-[42vw] h-[74vw]",
    md: "w-full h-[310px] sm:h-[520px] text-[18px]",
  };

  return (
    <div className={`${archivo.className} mb-7 mt-3`}>
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        className={`${archivo.className} uppercase text-center text-[28px] font-semibold`}
      >
        {params.category}
      </p>


      {/* Filter div */}
      <div className="flex items-center justify-between gap-2 sm:px-10 px-4 sticky top-0 sm:py-9 py-4 stickys">
        <div className="flex items-center gap-3">
          <div className="text-sm">
            {/* Show results count */}
            <p className="text-[#7C7C7C]">{sortedProducts.length} Results</p>
          </div>
          <span className="bg-[#DFDFDF] w-[1px] h-5 mx-1"></span>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 hover:border hover:border-black p-2 border-[#F7F7F7] border">
              <input type="checkbox" className="sm:w-5 sm:h-5 h-4 w-4 rounded-none bg-[#F7F7F7] border border-gray-200 checked:bg-transparent" />
              <h1 className="text-[14px]">{params.category} <span className="text-[#7C7C7C]">({sortedProducts.length})</span></h1>
            </div>

            <div className="border hover:border-black px-1 border-[#f7f7f7] sm:block hidden">
              <Select>
                <SelectTrigger className="w-full space-x-2 p-0  bg-transparent rounded-none border-none focus:outline-none">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="border-[#f7f7f7] border hover:border-black px-1 sm:block hidden">
              <Select>
                <SelectTrigger className="w-full p-0 space-x-2  bg-transparent rounded-none border-none focus:outline-none">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="border-[#f7f7f7] border hover:border-black px-1 sm:block hidden">
              <Select>
                <SelectTrigger className="w-full space-x-2 p-0 bg-transparent rounded-none border-none focus:outline-none">
                  <SelectValue placeholder="Sub-Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="sm:flex hidden items-center gap-2">
          {/* Filter dropdown */}
          <div className="flex justify-center">
            <Select onValueChange={(value) => handleSort(value as "highToLow" | "lowToHigh")}>
              <SelectTrigger className="w-full p-0 bg-transparent border-none space-x-2 rounded-md focus:outline-none">
                <SelectValue placeholder="Sort: Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort Options</SelectLabel>
                  <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
                  <SelectItem value="highToLow">Price: High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <span className="bg-[#DFDFDF] w-[1px] h-5 mx-1"></span>

          {/* Filter dots */}
          <div className="items-center gap-2 hidden sm:flex">
            <h1 className="text-[12px] text-[#7C7C7C]">View</h1>
            <div className="justify-center flex items-center">
              <button
                onClick={() => handleColumnChange(3, "md")}
                className={`w-[10px] h-[10px] mx-[1px] ${columns === 3 ? "bg-black" : "bg-transparent border border-black"}`}
              ></button>
              <button
                onClick={() => handleColumnChange(4, "lg")}
                className={`w-[10px] h-[10px] mx-[1px] ${columns === 4 ? "bg-black" : "bg-transparent border border-black"}`}
              ></button>
              <button
                onClick={() => handleColumnChange(5, "xl")}
                className={`w-[10px] h-[10px] mx-[1px] ${columns === 5 ? "bg-black" : "bg-transparent border border-black"}`}
              ></button>
            </div>
          </div>
        </div>

        <FilterAndSort />
      </div>

      {/* Grid display */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-${columns} lg:grid-cols-${columns} xl:grid-cols-${columns} mt-8 sm:gap-5 gap-3 gap-y-6 mx-[10px] sm:mx-6`}
      >
        {sortedProducts.map((product) => (
          <Link key={product.slug.current} href={`/${params.category}/${product.slug.current}`}>
            <div
              className={`border flex flex-col justify-between pb-3 hover:border-black ${cardSizeClasses[cardSize]}`}
            >
              <Image
                src={urlFor(product.sideImages[0]?.asset).url() || "/placeholder.png"}
                alt={product.sideImages[0]?.alt || "Product Image"}
                width={500}
                height={500}
                className="w-full h-[85%] object-cover object-top"
              />
              <div className="text-center my-1 p-2">
                <h3 className="line-clamp-1">{product.title}</h3>
                {product.salePrice ? (
                  <div className="flex justify-center items-center gap-3 text-[16px] sm:mt-2">
                    <p className="text-gray-900 font-semibold">Rs.{product.salePrice}</p>
                    <p className="text-sm text-red-500 line-through">Rs.{product.price}</p>
                  </div>
                ) : (
                  <p className="text-gray-900 font-semibold">Rs.{product.price}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
