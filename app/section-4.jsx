"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Section4() {
    return (
        <section className="bg-[#0C1C32] min-h-screen text-white flex flex-row items-center overflow-hidden max-h-screen">
            <div className="flex flex-row items-center mx-[120px] 3xl:mx-[240px] w-full relative">
                <div className="flex flex-col font-helvetica space-y-5 2xl:space-y-10 3xl:space-y-20">
                    <h1 className="text-[100px] 2xl:text-[120px] 3xl:text-[192px] uppercase leading-tight">
                        Our <br></br>
                        Brands
                    </h1>
                    <h2 className="text-[#9ea4ad] text-md 2xl:text-xl 3xl:text-2xl font-light">
                        We collaborate with various sources ranging from thrift store, <br></br>
                        prestigious brands, to designer clothes. All in one.
                    </h2>
                </div>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 100,
                        disableOnInteraction: false
                    }}
                    className='max-h-screen mt-[40rem]'
                >
                    <SwiperSlide><img src='icons/Puma-logo.png' className='w-[200px] 2xl:w-[300px] 3xl:w-[400px]'></img></SwiperSlide>
                    <SwiperSlide><img src='icons/Nike-logo.png' className='w-[200px] 2xl:w-[300px] 3xl:w-[400px]'></img></SwiperSlide>
                    <SwiperSlide><img src='icons/Gucci-logo.png' className='w-[200px] 2xl:w-[300px] 3xl:w-[400px]'></img></SwiperSlide>
                    <SwiperSlide><img src='icons/Giordano-logo.png' className='w-[200px] 2xl:w-[300px] 3xl:w-[400px]'></img></SwiperSlide>
                    <SwiperSlide><img src='icons/Adidas-logo.png' className='w-[200px] 2xl:w-[300px] 3xl:w-[400px]'></img></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
