import { NextResponse } from "next/server";
 
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

 
interface Product {
  title: string;
  price: number;
  salePrice: number;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  slug: string;
}

export async function GET(req: Request, { params }: { params: { category: string; product: string } }) {
  try {
    const { category, product: productSlug } = params;

    // Debugging: log the category and product slug
    console.log(`Fetching product for category: ${category} and slug: ${productSlug}`);

    const query = groq`
      *[_type == "${category}" && slug.current == "${productSlug}"][0]{
        title,
        price,
        salePrice,
        mainImage,
        sideImages[]{
           asset->{
            _id,
             url
           },
          alt
         },
        sizes,
        stockStatus,
        productdetails,
        slug
      }
    `;
    
    // Fetch the product data from Sanity
    const fetchedProduct: Product = await client.fetch(query);

    // Debugging: log the fetched product data
    console.log('Fetched product data:', fetchedProduct);

    if (!fetchedProduct) {
      console.error('Product not found');
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product: fetchedProduct });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: "Failed to fetch product details." },
      { status: 500 }
    );
  }
}
