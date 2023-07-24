"use client";
import Image from 'next/image';

export default function Section2() {
    return (
        <section className="bg-[#F8F8F8] min-h-screen overflow-hidden">
            <div className='flex flex-row'>
                <div className='flex flex-col w-1/2'>
                    <div className='mt-[-5%] relative'>
                        <img src='icons/Section-2-Line.svg' alt='Section 2 Line SVG' className='w-[50%] mt-[-15%] 3xl:w-[60%] 3xl:mt-[-30%]'></img>
                        <img src='icons/Section-2-Star.svg' alt='Section 2 Star SVG' className='absolute bottom-[-32%] left-[20%] 3xl:left-[25%] w-[20%]'></img>
                    </div>
                    <div className='flex flex-col font-helvetica text-[#0C1C32] mt-20 ml-40'>
                        <h1 className='text-[100px] 3xl:text-[160px] font-bold'>Enjoy Discount Up to 70%</h1>
                        <h2 className='text-2xl 3xl:text-3xl text-[#6a7481] font-normal mt-12'>Exclusively for this month. Fashion fade, style is eternal. Style is something each of us alread has, all we need to do is find it, grab yours now</h2>
                        <button className='bg-[#FB9910] rounded-lg font-light text-white py-6 3xl:py-10 w-[40%] 3xl:w-[40%] mt-16 text-2xl 3xl:text-4xl tracking-[0.3em] uppercase'>Shop Now</button>
                    </div>
                </div>
                <div className='flex flex-col w-1/2'>
                    <div className='w-full relative ml-80'>
                        <img src='/images/section-2-1.png' alt='Section 2 Picture 1' className='w-[50%] 3xl:w-[60%]'></img>
                        <img src='/images/section-2-2.png' alt='Section 2 Picture 2' className='absolute top-[60%] left-[25%] 3xl:left-[30%] w-[30%] 3xl:w-[40%]'></img>
                        <img src='/images/section-2-3.png' alt='Section 2 Picture 3' className='absolute top-[180%] left-[5%] 3xl:left-[10%] w-[30%] 3xl:w-[35%]'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}