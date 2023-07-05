import Image from 'next/image';

export default function Section1() {
    return (
        <section style={{ backgroundImage: "url('images/section-1.png')",
                            backgroundSize: "101%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat" }} 
                            className='min-h-screen flex flex-col text-white font-helvetica'>
            <div className='mx-auto items-center my-auto'>
                <h1 className='font-bold text-[150px] line-height-[120px] leading-[120px]'><span className='font-nympha font-normal'>Curate</span><br></br>
                    Your Own<br></br>
                    Style.
                </h1>
            </div>
            <div className='flex flex-row justify-between items-end mb-10 ml-32 mr-10'>
                <div className='flex flex-row space-x-6 items-center mb-7'>
                    <Image src={"icons/Scroll-icon.svg"} width={23} height={44} alt='Scroll Down SVG'></Image>
                    <h2 className='font-normal text-base'>Scroll down</h2>
                </div>
                <div className='flex flex-col justify-between bg-[#0C1C32] rounded-lg w-[350px] p-6 space-y-8'>
                    <p className='font-normal text-base'>This website uses cookies. By continuing to browse the site you are agreeing to the use of cookies. <span className='underline'>Read more here</span>.
                    </p>
                    <div className='flex flex-row justify-between'>
                        <button className='bg-[#203046] px-11 py-4 items-center font-bold uppercase rounded-md shadow-black shadow-xl hover:bg-[#06101d] transition-colors duration-300 ease-in-out'>Okay</button>
                        <button className='px-10 py-4 items-center font-bold uppercase rounded-md hover:bg-[#06101d] transition-colors duration-300 ease-in-out'>Reject</button>
                    </div>
                </div>
            </div>
        </section>
    )
}