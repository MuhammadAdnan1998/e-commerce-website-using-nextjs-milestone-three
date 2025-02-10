import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function NotFound() {
  return (
    <div className={`${poppins.className} md:px-[68px] px-5 flex flex-col md:h-[80vh] h-[70vh] py-10`}>
      <div className="">
        <Link href="/" className="text-gray-500 font-medium hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black">404 Error</span>
      </div>
 
      <div className="flex flex-col gap-20 justify-center items-center h-full px-4">
        <div className="flex flex-col items-center">
          <h1 className="sm:text-[110px] text-[60px] text-center font-medium">404 Not Found</h1>
          <p className="text-[16px]">
            Your visited page not found. You may go to the home page.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="text-[16px] text-white font-medium py-[16px] px-[48px] bg-[#DB4444] rounded"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  )
}
