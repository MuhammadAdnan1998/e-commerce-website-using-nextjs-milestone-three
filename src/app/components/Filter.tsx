import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowDownUp } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Filter Component
export const Filter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-1 rounded-full border border-black cursor-pointer">
          <Image
            src={"/svg/filter.svg"}
            alt="filter"
            width={100}
            height={100}
            className="h-5 w-5"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#F7F7F7] p-4 sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="font-light text-[18px] text-left">
            Filter
          </SheetTitle>
          <div className="w-full h-[1.5px] bg-black mt-4"></div>
        </SheetHeader>
        <div className="mt-4 space-y-4">

          <Accordion type="multiple" className="text-[14px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>Availability</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="availability"
                      value="in-stock"
                      className="w-5 h-5 bg-transparent rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    <span>In stock</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="availability"
                      value="out-of-stock"
                      className="w-5 h-5 bg-transparent rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    <span>Out of stock</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>XS</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>S</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>M</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>L</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>XL</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Sub Category</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>Shirt</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>Pant</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>Dress</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5 bg-transparent rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                    <span>Shalwar kamez</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Sort Component
export const Sort = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-1 rounded-full border border-black cursor-pointer">
          <ArrowDownUp className="h-5 w-5" />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#F7F7F7]">
        <SheetHeader>
          <SheetTitle className="font-light text-[18px] text-left">Sort</SheetTitle>
          <div className="w-full h-[1.5px] bg-black mt-10"></div>
        </SheetHeader>
        {/* Add sort options or content here */}
        <div className="mt-4">
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="availability"
                value="in-stock"
                className="w-5 h-5 bg-transparent rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span>In stock</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="availability"
                value="out-of-stock"
                className="w-5 h-5 bg-transparent rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span>Out of stock</span>
            </label>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Combined Component
const FilterAndSort = () => {
  return (
    <div className="flex sm:hidden items-center space-x-2">
      <Filter />
      <Sort />
    </div>
  );
};

export default FilterAndSort;
