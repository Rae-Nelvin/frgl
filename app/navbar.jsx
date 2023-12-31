"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className={`px-[120px] py-4 2xl:py-8 flex flex-row justify-between items-center text-inter text-white fixed w-screen transition-all duration-500 ease-in-out z-50 ${isScrolled ? 'bg-black bg-opacity-20 backdrop-blur-md' : ''}`}>
            <Link href={"/"} className='font-extrabold uppercase text-2xl 2xl:text-5xl'>FRGL.</Link>
            <div className='py-3 flex flex-row justify-between text-sm 2xl:text-xl font-medium uppercase space-x-[50px]'>
                <h2>Trending</h2>
                <h2>Collections</h2>
                <h2>Brands</h2>
                <h2>Sales</h2>
            </div>
            <div className='py-2 flex flex-row justify-between space-x-[30px]'>
                <div className='flex flex-row uppercase items-center space-x-2 text-sm 2xl:text-xl'>
                    <h2>Eng</h2>
                    <img src='/icons/akar-icons_chevron-down.svg' alt='Down Arrow SVG' className='w-4 2xl:w-5'></img>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                    <img src='/icons/Cart.svg' alt='Cart SVG' className='w-5 2xl:w-8'></img>
                    <img src='/icons/Profile.svg' alt='Profile SVG' className='w-5 2xl:w-8'></img>
                </div>
            </div>
        </nav>
    )
}