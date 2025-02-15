"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";

interface DropdownItem {
  href: string;
  text: string;
}

interface CustomDropdownProps {
  label: string;
  items: DropdownItem[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isDropdownVisible = isOpen || isHovered;

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 mx-[3px] text-[15px] font-semibold cursor-pointer focus:outline-none relative"
      >
        <span className="group-hover:text-black transition-all duration-300">
          {label}
        </span>
        <span className="transition-transform duration-300 text-[18px]">
          {isDropdownVisible ? <FiMinus className="group-hover:text-black" /> : <FiPlus />}
        </span>
        {/* Line effect */}
        {isDropdownVisible ?  <div className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full h-[2px] bg-black transition-all duration-300"></div> : null}
      </button>

      {isDropdownVisible && (
        <div className="absolute left-0 top-[35px] sm:mt-2 w-64 sm:bg-[#F7F7F7] border border-black dark:border-neutral-700 p-4 z-50">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="text-[16px] py-2 hover:underline text-black rounded cursor-pointer">
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
