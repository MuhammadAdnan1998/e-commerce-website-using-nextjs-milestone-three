"use client";
// import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";  

interface ProductQuickReviewProps {
  product: {
    title: string;
    price: number;
    salePrice?: number;
    description: string;
    imageUrl: string;
    slug: string;
  };
  onClose: () => void; 
}

const ProductQuickReview: React.FC<ProductQuickReviewProps> = ({
  product,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 relative w-[90%] sm:w-[500px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600"
        >
          <IoClose />
        </button>
        <div className="flex flex-col items-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={300}
            height={400}
            className="object-cover mb-4"
          />
          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <div className="flex gap-3 items-center">
            <p className="text-xl font-semibold">Rs.{product.salePrice || product.price}</p>
            {product.salePrice && (
              <p className="text-sm text-gray-500 line-through">Rs.{product.price}</p>
            )}
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickReview;
