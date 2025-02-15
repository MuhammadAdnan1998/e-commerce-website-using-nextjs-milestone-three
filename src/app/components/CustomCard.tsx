import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

interface CustomCardProps {
  imageUrl: SanityImageSource;
  title: string;
  price?: number | string;
  salePrice?: number | string;
  onClick?: () => void;
  category: string;
  slug: string;
  sideImages?: { asset: { _ref: string; url: string }; alt?: string }[];  
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  price,
  salePrice,
  onClick,
  category,
  slug,
  sideImages,  
}) => {

 
  const imageSrc = sideImages && sideImages.length > 0
    ? urlFor(sideImages[0].asset._ref).url()  
    : imageUrl
    ? urlFor(imageUrl).url()  
    : "/placeholder.png";

  return (
    <Link href={`/${category}/${slug}`} passHref>
      <div className="border lg:h-[530px] flex flex-col sm:gap-4 lg:w-[330px] sm:h-[400px] sm:w-[260px] w-[42vw] h-[74vw] hover:border-black mb-4 sm:mx-[5px]" onClick={onClick}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="w-full lg:h-[430px] sm:h-[300px] h-[54vw] object-cover object-top mb-3"
        />
        <div className="text-center flex flex-col items-center  px-1">
          <h3 className="sm:text-[17px] text-[14px] line-clamp-1">{title}</h3>
          {salePrice ? (
            <div className="flex items-center gap-3 text-[16px]">
              <p className="text-gray-900">Rs.{salePrice}</p>
              <p className="text-sm text-red-500 line-through">Rs.{price}</p>
            </div>
          ) : (
            <p className="text-gray-900">Rs.{price}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CustomCard;
