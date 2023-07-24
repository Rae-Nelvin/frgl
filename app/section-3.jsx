import Image from 'next/image';

export default function Section3() {
    return (
        <section className="bg-[#F8F8F8] text-[#0C1C32] min-h-screen flex flex-col pt-4 pb-40 justify-between relative w-screen overflow-hidden">
            <div className='w-max'>
                {/* <Image src={"/icons/Section-3-texts.png"} width={2833} height={920} alt='Section 3 Texts' className='absolute bottom-[-15%] z-0 w-[100%]'></Image> */}
                <div className="flex flex-row justify-between px-80 items-center">
                    <div></div>
                    <h1 className="text-[96px] font-bold uppercase">New Items</h1>
                    <div className='flex flex-row space-x-2'>
                        <h2 className='text-3xl font-normal leading-tight'>Look at the collection</h2>
                        <img src='icons/Arrow-Right.svg'alt='Arrow Right SVG' className='w-10'></img>
                    </div>
                </div>
                <div className='flex flex-row space-x-40 z-10 mt-60'>
                    <div className='flex flex-col relative'>
                        <div className='bg-[#FB9910] rounded-full text-white py-20 px-16 absolute right-[-15%] top-[-10%]'>
                            <h1 className='font-bold text-3xl'>View</h1>
                        </div>
                        <img src='/images/section-3-1.png' alt='Section 3 Image 1' className='w-[400px] 3xl:w-[580px] mb-3'></img>
                        <h2 className='font-bold text-2xl 3xl:text-3xl mb-1'>Sweater Putih Keren</h2>
                        <h3 className='font-normal text-xl 3xl:text-2xl'>$75</h3>
                    </div>
                    <div className='flex flex-col z-10'>
                        <img src='/images/section-3-2.png' alt='Section 3 Image 2' className='w-[400px] 3xl:w-[580px] mb-3'></img>
                        <h2 className='font-bold text-2xl 3xl:text-3xl mb-1'>Jacket Luntur</h2>
                        <h3 className='font-normal text-xl 3xl:text-2xl'>$120</h3>
                    </div>
                    <div className='flex flex-col z-10'>
                        <img src='/images/section-3-3.png' alt='Section 3 Image 3' className='w-[400px] 3xl:w-[580px] mb-3'></img>
                        <h2 className='font-bold text-2xl 3xl:text-3xl mb-1'>Kocomoto Kuda</h2>
                        <h3 className='font-normal text-xl 3xl:text-2xl'>$2.000</h3>
                    </div>
                    <div className='flex flex-col z-10'>
                        <img src='/images/section-3-4.png' alt='Section 3 Image 4' className='w-[400px] 3xl:w-[580px] mb-3'></img>
                        <h2 className='font-bold text-2xl 3xl:text-3xl mb-1'>Keram Pants</h2>
                        <h3 className='font-normal text-xl 3xl:text-2xl'>$127</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}