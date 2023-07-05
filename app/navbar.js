import Link from 'next/link';
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='px-[120px] py-8 flex flex-row justify-between text-inter text-white fixed w-full'>
            <Link href={"/"} className='font-extrabold uppercase text-4xl'>FRGL.</Link>
            <div className='py-3 flex flex-row justify-between text-sm font-medium uppercase space-x-[50px]'>
                <h2>Trending</h2>
                <h2>Collections</h2>
                <h2>Brands</h2>
                <h2>Sales</h2>
            </div>
            <div className='py-2 flex flex-row justify-between space-x-[30px]'>
                <div className='flex flex-row uppercase items-center space-x-1 text-sm'>
                    <h2>Eng</h2>
                    <Image src={"/icons/akar-icons_chevron-down.svg"} alt='Down Arrow SVG' width={14} height={14}></Image>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                    <Image src={"/icons/Cart.svg"} alt='Cart SVG' width={24} height={24}></Image>
                    <Image src={"/icons/Profile.svg"} alt='Profile SVG' width={24} height={24}></Image>
                </div>
            </div>
        </nav>
    )
}