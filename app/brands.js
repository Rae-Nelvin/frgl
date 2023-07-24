"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Brands() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const scrollSpeed = 50;
        const animationDuration = 5000;

        let animationId = null;

        const startScrollAnimation = () => {
            let startTime = null;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const scrollDistance = (elapsed / animationDuration) * scrollSpeed;
                container.scrollTop += scrollDistance;
                if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                    container.scrollTop = 0;
                }

                if (elapsed < animationDuration) {
                    animationId = requestAnimationFrame(step);
                } else {
                    cancelAnimationFrame(animationId);
                }
            };

            animationId = requestAnimationFrame(step);
        };
        startScrollAnimation();
    }, []);

    return (
        <div className="absolute bottom-[-35rem] right-80 ">
            <div ref={containerRef} className='scroll-container flex flex-col space-y-40'>
                <Image src={"/icons/Puma-logo.png"} width={200} height={100} alt='Puma Logo' className='w-[400px]'></Image>
                <Image src={"/icons/Nike-logo.png"} width={200} height={70} alt='Nike Logo' className='w-[400px]'></Image>
                <Image src={"/icons/Gucci-logo.png"} width={200} height={60} alt='Gucci Logo' className='w-[400px]'></Image>
                <Image src={"/icons/Giordano-logo.png"} width={200} height={100} alt='Giordano Logo' className='w-[400px]'></Image>
                <Image src={"/icons/Adidas-logo.png"} width={200} height={100} alt='Adidas Logo' className='w-[400px]'></Image>
            </div>
        </div>
    )
}
