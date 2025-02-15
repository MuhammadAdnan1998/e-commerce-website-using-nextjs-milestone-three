"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

const Header = () => {
    const [language, setLanguage] = useState("en"); 

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
      };
  return (
    <div className={`${poppins.className} sm:h-[48px] w-full bg-black flex justify-between items-center sm:px-[60px]`}>
    <div className="flex justify-center items-center w-full">
      <p className="sm:text-[14px] text-[8px] text-[#FAFAFA] text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <span className="font-semibold sm:text-[14px] text-[8px] underline text-[#FAFAFA] sm:ml-4 ml-1 cursor-pointer">
        ShopNow
      </span>
      </p>
    </div>
  
    <div>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
        className="bg-black text-[#FAFAFA] sm:text-[14px] text-[10px] focus:ring-0 outline-none"
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  </div>
  
  )
}

export default Header