import { Inter, Montserrat } from 'next/font/google'
import SearchInput from './SearchInput'
import MobileMenuBar from './Navlink'
import CartPopup from './CartPopup'
import CustomDropdown from './Dropdown'
import { Search } from './Search'
import { FiUser } from 'react-icons/fi'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ["400"] })
const dropdownData = [
    {
        label: "SHOP",
        items: [
            { href: "/men", text: "MEN'S" },
            { href: "/women", text: "WOMEN'S" },
            { href: "/shirts", text: "T-SHIRTS & SHIRTS" },
            { href: "/health-and-fitness", text: "Health & Fitness" },
            { href: "/jackets", text: "JACKATES" },
            { href: "/Accessories", text: "ACCESSORIES" },
        ],
    },
    {
        label: "CORE COLLECTION",
        items: [
            { href: "/products", text: "ALL PRODUCTS" },
            { href: "/shirts", text: "SHIRTS" },
            { href: "/dress", text: "DRESS" },
            { href: "/jacket", text: "JACKET" },
            { href: "/hoodies", text: "HOODIES" },
        ],
    },
    {
        label: "ABOUT ROBIZ",
        items: [
            { href: "/tutorials", text: "PRESS" },
            { href: "/case-studies", text: "LOOKBOOK" },
            { href: "/about-us", text: "ABOUT US" },
            { href: "/contact-us", text: "CONTACT US" },
        ],
    },
];

const Nav = () => {
    return (
        <div className={`${montserrat.className} md:h-[130px] h-[60px] md:pt-4 justify-end flex flex-col md:gap-3 bg-[#F7F7F7] duration-150`}>
            <div className="flex md:items-end items-center md:h-[38px] h-full justify-between md:px-10 px-5  text-black">
                <MobileMenuBar />
                <Search />

                <div className="flex flex-col justify-center items-center gap-4 ml-5">
                    <Link href={"/"}>
                        <h1
                            className={`${inter.className} sm:text-[40px] text-[33px] uppercase md:pl-0 pl-[52px] font-bold text-black`}
                        >
                            Robiz
                        </h1>
                    </Link>
                    <div className="md:flex hidden items-center gap-5">
                        {dropdownData.map((dropdown, index) => (
                            <CustomDropdown
                                key={index}
                                label={dropdown.label}
                                items={dropdown.items}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <SearchInput />
                        <CartPopup />
                        <FiUser className="text-2xl text-black" />
                    </div>
                </div>
            </div>
            <div className="md:mt-2 border-b border-black w-[95%] mx-auto" />
        </div>
    );
};

export default Nav;
