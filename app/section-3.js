import Image from 'next/image';

export default function Sector3() {
    return (
        <section className="bg-[#F8F8F8] text-[#0C1C32] min-h-screen flex flex-col py-20 justify-between">
            <div className="flex flex-row justify-between px-40 items-center">
                <div></div>
                <h1 className="text-[96px] font-bold uppercase">New Items</h1>
                <div className='flex flex-row space-x-2'>
                    <h2 className='text-3xl font-normal leading-tight'>Look at the collection</h2>
                    <Image src={"icons/Arrow-Right.svg"} width={24} height={24} alt='Arrow Right SVG' className='w-10'></Image>
                </div>
            </div>
            <div className='flex flex-row space-x-40 overflow-y-visible'>
                <div className='flex flex-col relative'>
                    <div className='bg-[#FB9910] rounded-full text-white py-20 px-16 absolute right-[-15%] top-[-10%]'>
                        <h1 className='font-bold text-3xl'>View</h1>
                    </div>
                    <Image src={"/images/section-3-1.png"} width={336} height={578} alt='Section 3 Image 1' className='w-[900px] mb-3'></Image>
                    <h2 className='font-bold text-3xl mb-1'>Sweater Putih Keren</h2>
                    <h3 className='font-normal text-2xl'>$75</h3>
                </div>
                <div className='flex flex-col'>
                    <Image src={"/images/section-3-2.png"} width={336} height={578} alt='Section 3 Image 2' className='w-[900px] mb-3'></Image>
                    <h2 className='font-bold text-3xl mb-1'>Jacket Luntur</h2>
                    <h3 className='font-normal text-2xl'>$120</h3>
                </div>
                <div className='flex flex-col'>
                    <Image src={"/images/section-3-3.png"} width={336} height={578} alt='Section 3 Image 3' className='w-[900px] mb-3'></Image>
                    <h2 className='font-bold text-3xl mb-1'>Kocomoto Kuda</h2>
                    <h3 className='font-normal text-2xl'>$2.000</h3>
                </div>
                <div className='flex flex-col'>
                    <Image src={"/images/section-3-4.png"} width={336} height={578} alt='Section 3 Image 4' className='w-[900px] mb-3'></Image>
                    <h2 className='font-bold text-3xl mb-1'>Keram Pants</h2>
                    <h3 className='font-normal text-2xl'>$127</h3>
                </div>
            </div>
        </section>
    )
}