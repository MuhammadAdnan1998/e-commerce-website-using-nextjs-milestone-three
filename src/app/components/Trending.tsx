"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  title: string;
  price: number;
  salePrice: number;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
}

function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchTopTrending = async () => {
      try {
        const response = await fetch("/api/products/men");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch top trending products:", error);
      }
    };

    fetchTopTrending();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Top Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.slug.current}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={urlFor(product.mainImage).url() || "/placeholder.png"} // Generate URL dynamically
              alt={product.title}
              width={400}
              height={400}
              className="w-full h-40 object-cover rounded-t-lg mb-3"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">
              {product.salePrice
                ? `Sale: $${product.salePrice}`
                : `Price: $${product.price}`}
            </p>
            {product.salePrice && (
              <p className="text-sm text-red-500 line-through">
                Original: ${product.price}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;
