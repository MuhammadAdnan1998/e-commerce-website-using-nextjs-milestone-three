import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Fix for dynamically extracting params in Next.js API routes
export async function GET(req: Request, { params }: { params: { category: string } }) {
  // Directly access category from params
  const { category } = params;

  try {
    const query = groq`
      *[_type == "${category}"] {
        title,
        price,
        salePrice,
        mainImage,
        slug
      }
    `;
    const products = await client.fetch(query);
 
    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products for the category." },
      { status: 500 }
    );
  }
}
