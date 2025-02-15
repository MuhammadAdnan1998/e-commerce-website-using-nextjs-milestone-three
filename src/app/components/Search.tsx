"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Archivo} from "next/font/google"
import Link from "next/link"
import { FiSearch } from "react-icons/fi"

const archivo = Archivo({ subsets: ['latin'], weight: ["400"] })
const SHEET_SIDES = ["left"] as const

export function Search() {
    return (
        <div className={`${archivo.className} md:block hidden`}>
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                            <FiSearch className="text-2xl cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent side={side} className="bg-[#f7f7f7]">
                        <div className="mt-10">
                            <div className="relative">
                                <FiSearch className="h-6 w-6 cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input
                                    id="name"
                                    placeholder="What are you looking for?"
                                    className="p-2 pl-12 focus:outline-none bg-transparent w-full"
                                />
                            </div>
                            <div className="w-full h-[1.5px] bg-black"></div>

                            <div className="px-4 space-y-4 py-10">
                                <h1 className="text-[16px] text-gray-600">Popular collections</h1>

                                <ul className="text-[14px] text-black">
                                    <Link href={"/"}><li className="hover:underline">CORE COLLECTION</li></Link>
                                </ul>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
