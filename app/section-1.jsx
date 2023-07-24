import Image from 'next/image';

export default function Section1() {
    return (
        <section style={{ backgroundImage: "url('images/section-1.png')",
                            backgroundSize: "101%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat" }} 
                            className='min-h-screen flex flex-col text-white font-helvetica'>
            <div className='mx-auto items-center my-auto'>
                <h1 className='font-bold text-[120px] leading-[100px] 2xl:text-[150px] 2xl:leading-[130px] 3xl:text-[300px] 3xl:leading-[250px]'><span className='font-nympha font-normal'>Curate</span><br></br>
                    Your Own<br></br>
                    Style.
                </h1>
            </div>
        </section>
    )
}