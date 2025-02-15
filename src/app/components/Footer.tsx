import { Inter, Lato } from 'next/font/google'
import Image from 'next/image'
import { GrInstagram } from 'react-icons/gr'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: ["400"] })
const Footer = () => {
    return (
        <div className={`${lato.className} lg:h-[440px] uppercase bg-[#000000] flex flex-col lg:items-center justify-end md:gap-[80px] gap-16 py-2 lg:pt-0 pt-10 lg:px-0 px-3`}>
            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-[87px] text-[#FAFAFA]`}>
                <div className='w-[217px] sm:h-[188px] gap-2 flex flex-col justify-between'>
                    <h1 className={`${inter.className} text-[24px] font-bold`}>Robiz</h1>
                    <p className={`text-[20px]`}>Subscribe</p>
                    <p className={`font-normal text-[16px]`}>Get 10% off on your first order</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border-[1.5px] bg-transparent rounded py-3 pr-10 pl-4 w-full"
                        />
                        <Image
                            src="/images/sendicon.png"
                            alt="send"
                            width={100}
                            height={100}
                            className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        />
                    </div>


                </div>
                <div className={`sm:h-[180px] gap-2 w-[185px] lg:flex hidden flex-col justify-between`}>
                    <h1 className="font-medium text-[20px] mb-1">Support</h1>
                    <p className='text-[16px] font-normal'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className='text-[16px] font-normal lowercase'>robiz@gmail.com</p>
                    <p className='text-[16px] font-normal'>+923464365890</p>
                </div>
                <div className={`w-[123px] sm:h-[236px] gap-2 lg:flex hidden flex-col justify-between`}>
                    <h1 className='font-medium text-[20px] mb-1'>Account</h1>
                    <p className='font-normal text-[16px]'>My Account</p>
                    <p className='font-normal text-[16px]'>Login / Register</p>
                    <p className='font-normal text-[16px]'>Cart</p>
                    <p className='font-normal text-[16px]'>Wishlist</p>
                    <p className='font-normal text-[16px]'>Shop</p>
                </div>
                <div className='sm:h-[196px] gap-2 w-[129px] lg:flex hidden flex-col justify-between'>
                    <h1 className='font-medium text-[20px] mb-1'>Quick Link</h1>
                    <p className='font-normal text-[16px]'>Privacy Policy</p>
                    <p className='font-normal text-[16px]'>Terms Of Use</p>
                    <p className='font-normal text-[16px]'>FAQ</p>
                    <p className='font-normal text-[16px]'>Contact</p>
                </div>
                <div className='lg:hidden block'>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[18px]">Support</AccordionTrigger>
                            <AccordionContent className="text-[16px] space-y-3">
                                <p className='text-[16px] font-normal'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                                <p className='text-[16px] font-normal'>exclusive@gmail.com</p>
                                <p className='text-[16px] font-normal'>+88015-88888-9999</p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[18px]">Account</AccordionTrigger>
                            <AccordionContent className="text-[16px] space-y-3">
                                <p className='font-normal text-[16px]'>My Account</p>
                                <p className='font-normal text-[16px]'>Login / Register</p>
                                <p className='font-normal text-[16px]'>Cart</p>
                                <p className='font-normal text-[16px]'>Wishlist</p>
                                <p className='font-normal text-[16px]'>Shop</p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[18px]">Quick Link</AccordionTrigger>
                            <AccordionContent className="text-[16px] space-y-3">
                                <p className='font-normal text-[16px]'>Privacy Policy</p>
                                <p className='font-normal text-[16px]'>Terms Of Use</p>
                                <p className='font-normal text-[16px]'>FAQ</p>
                                <p className='font-normal text-[16px]'>Contact</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='space-y-10'>
                    <div className='space-y-2'>
                        <h1 className='text-[20px] font-medium'>Easy and Secure Payments</h1>
                        <div className='flex items-center gap-3'>
                            <Image src={"/svg/apple-pay.svg"} alt='apple-pay' width={30} height={30} />
                            <Image src={"/svg/google-pay.svg"} alt='google-pay' width={30} height={30} />
                            <Image src={"/svg/discover.svg"} alt='discover-pay' width={30} height={30} />
                            <Image src={"/svg/paypal.svg"} alt='paypal-pay' width={31} height={30} className='bg-white px-2 py-[3px] rounded-[2px]' />
                            <Image src={"/svg/payoneer.svg"} alt='payoneer' width={30} height={30} />
                            <Image src={"/svg/amazon.svg"} alt='amazon' width={30} height={30} />
{/*                             <Image src={"/svg/bancon.svg"} alt='amazon' width={30} height={30} /> */}
                        </div>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <h1 className='text-[20px] font-medium'>Share:</h1>
                        <div className='flex sm:gap-[24px] gap-5 items-center'>
                            <Image src={"/images/facebook.png"} alt='facebook' width={100} height={100} className='h-6 w-6' />
                            <Image src={"/images/twitter.png"} alt='Twitter' width={100} height={100} className='h-6 w-6' />
                            <GrInstagram className='h-6 w-6 text-[#D5D5D5]/90' />
                            <Image src={"/images/linkedin.png"} alt='linkedin' width={100} height={100} className='h-6 w-6' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[100%] opacity-[40%] text-[#FFFFFF] flex flex-col gap-3'>
                <div className="bg-[#FFFFFF] opacity-[40%] h-[1px] w-full" />
                <p className="text-center font-normal sm:text-[14px] text-[12px]">
                    © Copyright Robiz 2024. All right reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
