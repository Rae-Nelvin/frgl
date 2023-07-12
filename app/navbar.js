"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <nav className={`px-[120px] py-8 flex flex-row justify-between text-inter text-white fixed w-full transition-all duration-500 ease-in-out z-50 ${isScrolled ? 'bg-black bg-opacity-20 backdrop-blur-md' : ''}`}>
            <Link href={"/"} className='font-extrabold uppercase text-5xl'>FRGL.</Link>
            <div className='py-3 flex flex-row justify-between text-xl font-medium uppercase space-x-[50px]'>
                <h2>Trending</h2>
                <h2>Collections</h2>
                <h2>Brands</h2>
                <h2>Sales</h2>
            </div>
            <div className='py-2 flex flex-row justify-between space-x-[30px]'>
                <div className='flex flex-row uppercase items-center space-x-2 text-xl'>
                    <h2>Eng</h2>
                    <Image src={"/icons/akar-icons_chevron-down.svg"} alt='Down Arrow SVG' width={14} height={14} className='w-5'></Image>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                    <Image src={"/icons/Cart.svg"} alt='Cart SVG' width={24} height={24} className='w-8'></Image>
                    <Image src={"/icons/Profile.svg"} alt='Profile SVG' width={24} height={24} className='w-8'></Image>
                </div>
            </div>
        </nav>
    )
}