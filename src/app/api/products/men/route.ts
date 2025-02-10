import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";

interface Product {
  title: string;
  price: number;
  salePrice: number;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: string;
}

export async function GET() {
  try {
    const query = groq`
      *[_type == "men" && category == "shirt"]{
        title,
        price,
        salePrice,
         sideImages[]{
           asset->{
            _id,
             url
           },
          alt
         },
        productdetails,
        slug
      }
    `;
    const products: Product[] = await client.fetch(query);

    return NextResponse.json(
      { products },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Men category products." },
      { status: 500 }
    );
  }
}
