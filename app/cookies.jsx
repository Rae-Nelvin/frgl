"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Cookies() {
    const [isScroll, setShowScroll] = useState(true);
    const [showButtons, setShowButtons] = useState(true);

    useEffect(() => {
        setShowScroll(true);
        const handleScroll = () => {
            setShowScroll(false);
        };
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleButtonClick = () => {
        setShowButtons(false);
    }

    return (
        <div className='flex flex-row justify-between items-end bottom-5 2xl:bottom-10 fixed min-w-full z-50'>
            <div className={`flex flex-row space-x-4 2xl:space-x-6 items-center mb-7 ml-32 ${isScroll ? '' : 'transition-all duration-500 ease-in-out opacity-0'}`}>
                <img src='icons/Scroll-icon.svg' alt='Scroll Down SVG' className='w-6 2xl:w-10'></img>
                <h2 className='font-normal text-lg 2xl:text-2xl'>Scroll down</h2>
            </div>
            <div className={`flex flex-col justify-between bg-[#0C1C32] rounded-lg w-[300px] 2xl:w-[450px] p-6 space-y-4 2xl:space-y-8 mr-10 ${showButtons ? 'opacity-100 transition-opacity duration-500 ease-in-out' : 'opacity-0 transition-opacity duration-500 ease-in-out'}`}>
                <p className='font-normal text-sm 2xl:text-xl 3xl:text-2xl'>This website uses cookies. By continuing to browse the site you are agreeing to the use of cookies. <span className='underline'>Read more here</span>.
                </p>
                <div className='flex flex-row justify-between transition-colors duration-300 ease-in-out text-sm 2xl:text-lg 3xl:text-xl'>
                    <button className='bg-[#203046] px-11 py-4 items-center font-bold uppercase rounded-md shadow-black shadow-xl hover:bg-[#06101d] ' onClick={handleButtonClick}>Okay</button>
                    <button className='px-10 py-4 items-center font-bold uppercase rounded-md hover:bg-[#06101d]' onClick={handleButtonClick}>Reject</button>
                </div>
            </div>
        </div>
    )
}