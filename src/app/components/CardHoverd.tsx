"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Archivo } from "next/font/google";


const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });

interface CustomCardProps {
  imageUrl: SanityImageSource;
  title: string;
  price?: number | string;
  salePrice?: number | string;
  onClick?: () => void;
  category: string;
  slug: string;
  sideImages?: { asset: { _ref?: string; url?: string }; alt?: string }[];
  stockStatus?: string;
}

const HoverdCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  price,
  salePrice,
  onClick,
  slug,
  sideImages,
  stockStatus,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Helper function to safely resolve an image URL
  const getSanityImageUrl = (image: SanityImageSource | undefined): string => {
    try {
      return image ? urlFor(image).url() || "/placeholder.png" : "/placeholder.png";
    } catch (error) {
      console.error("Error resolving image URL:", error);
      return "/placeholder.png";
    }
  };

  // Determine default image
  const defaultImage =
    sideImages?.[0]?.asset?.url || getSanityImageUrl(imageUrl);

  // Determine hover image
  const hoverImage =
    sideImages?.[1]?.asset?.url || defaultImage;

  return (
    <Link href={`/men/${slug}`} passHref>
      <div
        className="border lg:h-[530px] flex flex-col sm:gap-4 lg:w-[330px] sm:h-[400px] sm:w-[260px] w-[42vw] h-[74vw] hover:border-black mb-4 sm:mx-[5px]"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >


        {/* Image Section */}
        <div className="relative w-full h-[54vw] lg:h-[430px] sm:h-[300px] overflow-hidden">
          <Image
            src={isHovered ? hoverImage : defaultImage}
            alt={title || "Product image"}
            width={500}
            height={500}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"
              }`}
          />

          {/* Sold Out Badge */}
          {stockStatus === "outOfStock" && (
            <div className={`${archivo.className} absolute sm:top-4 top-2 sm:left-3 left-2 bg-[#414141] text-white sm:text-[10px] text-[8px] font-semibold px-[5px] py-[2px] uppercase`}>
              Sold Out
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="text-center flex flex-col items-center px-1 mt-3">
          <h3 className="sm:text-[17px] text-[14px] line-clamp-1">{title}</h3>
          {salePrice ? (
            <div className="flex items-center gap-3 sm:text-[16px] text-[14px]">
              <p className="text-gray-900">Rs.{salePrice}</p>
              <p className="text-red-500 line-through">Rs.{price}</p>
            </div>
          ) : (
            <p className="text-gray-900">Rs.{price}</p>
          )}

        </div>
      </div>
    </Link>
  );
};

export default HoverdCard;
