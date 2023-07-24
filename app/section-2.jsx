"use client";
import Image from 'next/image';

export default function Section2() {
    return (
        <section className="bg-[#F8F8F8] min-h-screen overflow-hidden">
            <div className='flex flex-row'>
                <div className='flex flex-col w-1/2'>
                    <div className='mt-[-5%] relative'>
                        <Image src={"icons/Section-2-Line.svg"} width={411} height={455} alt='Section 2 Line SVG' className='w-[60%] mt-[-30%]'></Image>
                        <Image src={"icons/Section-2-Star.svg"} width={148} height={148} alt='Section 2 Star SVG' className='absolute bottom-[-32%] left-[25%] w-[20%]'></Image>
                    </div>
                    <div className='flex flex-col font-helvetica text-[#0C1C32] mt-20 ml-40'>
                        <h1 className='text-[160px] font-bold'>Enjoy Discount Up to 70%</h1>
                        <h2 className='text-3xl text-[#6a7481] font-normal mt-12'>Exclusively for this month. Fashion fade, style is eternal. Style is something each of us alread has, all we need to do is find it, grab yours now</h2>
                        <button className='bg-[#FB9910] rounded-lg font-light text-white py-10 w-[40%] mt-16 text-4xl tracking-[0.3em] uppercase'>Shop Now</button>
                    </div>
                </div>
                <div className='flex flex-col w-1/2'>
                    <div className='w-full relative ml-80'>
                        <Image src={"/images/section-2-1.png"} width={538} height={876} alt='Section 2 Picture 1' className='w-[60%]'></Image>
                        <Image src={"/images/section-2-2.png"} width={363} height={642} alt='Section 2 Picture 2' className='absolute top-[60%] left-[30%] w-[40%]'></Image>
                        <Image src={"/images/section-2-3.png"} width={342} height={316} alt='Section 2 Picture 3' className='absolute top-[180%] left-[10%] w-[35%]'></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}