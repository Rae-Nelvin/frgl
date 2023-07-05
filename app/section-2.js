import Image from 'next/image';

export default function Section2() {
    return (
        <section className="bg-[#F8F8F8] min-h-screen overflow-y-hidden">
            <div className='flex flex-row'>
                <div className='absolute'>
                    <Image src={"icons/Section-2-Line.svg"} width={411} height={455} alt='Section 2 Line SVG'></Image>
                    <Image src={"icons/Section-2-Star.svg"} width={148} height={148} alt='Section 2 Star SVG'></Image>
                </div>
            </div>
        </section>
    )
}