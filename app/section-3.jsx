'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper';
import Modal from './modal';

export default function Section3() {
    const [modalData, setModalData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSlideClick = (imageSrc, itemName, itemPrice) => {
        // Set the modal data and open the modal when a SwiperSlide is clicked
        setModalData({ imageSrc, itemName, itemPrice });
        setIsOpen(true);
    };

    const closeModal = () => {
        // Close the modal
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            // Close the modal after a delay (e.g., 5 seconds)
            const timeoutId = setTimeout(() => {
                setIsOpen(false);
            }, 5000);

            // Clear the timeout when the component unmounts or the modal is closed manually
            return () => clearTimeout(timeoutId);
        }
    }, [isOpen]);

    return (
        <section className="bg-[#F8F8F8] text-[#0C1C32] min-h-screen flex flex-col 3xl:pt-20 pb-40 justify-between w-screen overflow-hidden">
            <div className='w-max relative'>
                <img src='/icons/Section-3-texts.png' alt='Section 3 Texts' className='absolute bottom-[-30%] 2xl:bottom-[-25%] z-0 w-[100%]'></img>
                <div className="flex flex-row justify-between px-80 items-center">
                    <div></div>
                    <h1 className="text-[52px] 2xl:text-[96px] font-bold uppercase">New Items</h1>
                    <div className='flex flex-row space-x-2 items-center'>
                        <h2 className='text-xl 2xl:text-3xl font-normal leading-tight'>Look at the collection</h2>
                        <img src='icons/Arrow-Right.svg' alt='Arrow Right SVG' className='w-7 2xl:w-10'></img>
                    </div>
                </div>
                <div className='mt-32 2xl:mt-40 w-screen'>
                    <Swiper
                        direction='horizontal'
                        slidesPerView={3}
                        loop={true}
                        freeMode={true}
                        autoplay={{
                            delay: 3000
                        }}
                        modules={[FreeMode, Autoplay]}
                        spaceBetween={100}
                        className='overflow-visible'
                    >
                        <SwiperSlide className='flex flex-col w-[300px] 2xl:w-[400px] 3xl:w-[580px] pr-10 2xl:pr-20 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out h-max' onClick={() => handleSlideClick('/images/section-3-1.png', 'Sweater Putih Keren', '75')}>
                            <img src='/images/section-3-1.png' alt='Section 3 Image 1'></img>
                            <div className='bg-[#F8F8F8]'>
                                <h2 className='font-bold text-lg 2xl:text-2xl 3xl:text-3xl mt-3 mb-1'>Sweater Putih Keren</h2>
                                <h3 className='font-normal text-md 2xl:text-xl 3xl:text-2xl'>$75</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex flex-col w-[300px] 2xl:w-[400px] 3xl:w-[580px] pr-10 2xl:pr-20 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' onClick={() => handleSlideClick('/images/section-3-2.png', 'Jaket Luntur', '120')}>
                            <img src='/images/section-3-2.png' alt='Section 3 Image 2'></img>
                            <div className='bg-[#F8F8F8]'>
                                <h2 className='font-bold text-lg 2xl:text-2xl 3xl:text-3xl mt-3 mb-1'>Jacket Luntur</h2>
                                <h3 className='font-normal text-md 2xl:text-xl 3xl:text-2xl'>$120</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex flex-col w-[300px] 2xl:w-[400px] 3xl:w-[580px] pr-10 2xl:pr-20 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' onClick={() => handleSlideClick('/images/section-3-3.png', 'Kocomoto Kuda', '2.000')}>
                            <img src='/images/section-3-3.png' alt='Section 3 Image 3'></img>
                            <div className='bg-[#F8F8F8]'>
                                <h2 className='font-bold text-lg 2xl:text-2xl 3xl:text-3xl mt-3 mb-1'>Kocomoto Kuda</h2>
                                <h3 className='font-normal text-md 2xl:text-xl 3xl:text-2xl'>$2.000</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex flex-col w-[300px] 2xl:w-[400px] 3xl:w-[580px] pr-10 2xl:pr-20 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out' onClick={() => handleSlideClick('/images/section-3-4.png', 'Keram Pants', '127')}>
                            <img src='/images/section-3-4.png' alt='Section 3 Image 4'></img>
                            <div className='bg-[#F8F8F8]'>
                                <h2 className='font-bold text-lg 2xl:text-2xl 3xl:text-3xl mt-3 mb-1'>Keram Pants</h2>
                                <h3 className='font-normal text-md 2xl:text-xl 3xl:text-2xl'>$127</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* Render the Modal component */}
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                imageSrc={modalData?.imageSrc}
                itemName={modalData?.itemName}
                itemPrice={modalData?.itemPrice}
            />
        </section>
    )
}