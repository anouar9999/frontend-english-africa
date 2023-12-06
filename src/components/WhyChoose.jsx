import Image from 'next/image'
import React from 'react'
import cambride from "../../public/cambridge-english.png"





const WhyChoose = ({data}) => {
    // const key = [
    //     {
    //         number:"+156",
    //         text:"Cambridge CELTA certified graduates spread across North America, the Middle East, China, Europe, and Africa."
    //     },
    //     {
    //         number:"+26",
    //         text:"Cambridge qualified IELTS trainers in Morocco, China, Egypt, and the UK."
    //     },
    //     {
    //         number:"+10",
    //         text:"graduates who have successfully passed all three modules of the Teaching Knowledge Test"
    //     },
    //     // {
    //     //     number:"+87",
    //     //     text:"LCV graduates all across the world (North america, sothern africa, africa, asia, europe..)"
    //     // },

    // ]
  return (
    <div className="py-24 bg-main-color why-choose">
        <div className="container mx-auto px-2">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className='text-white'>
                    <h2 className='text-5xl font-bold font-libre-caslon'>
                        {/* Why choose English <br /> for africa */}
                        {data.Title}<br />{data.Title2}
                    </h2>
                    <p className='mt-6 text-base text-[#ffffff80]'>
                        {/* English for Africa has been operating as an authorized Cambridge Teaching Qualifications Center in Morocco since 2019, and has so far trained upwards of 150 people on the online, face-to-face, and mixed mode versions of the CELTA cours. English for Africa’s Director, Mohamed Oummih, has been training teachers of English as a foreign language for over 15 years. He has run CELTA courses in over half a dozen countries, including the USA, Singapore, France, Turkey, Oman, and the UAE, in addition to other courses such as the DELTA, the CELTA-YL, and the Trinity Certesol. Under his direction, Mr. Oummih aims to make English for Africa a hub for teacher development across  Africa, Europe, and the Middle East. */}
                        {data.description}
                 
                    </p>
                </div>
                <div className='flex justify-end w-3/4 lg:ml-auto mx-auto lg:mt-0 my-5'>
                    <Image src={cambride} alt="why choose us english for africa" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12 justify-center">
                {data.keys.map((avis) => (
                    <div key={avis.id} className='px-8'>
                        <div className='relative'>
                            <h5 className='text-7xl font-bold text-[#F89132] font-libre-caslon keys'>
                            + {avis.number}
                            </h5>
                        </div>
                        <p className='text-[#ffffff80] mt-5'>
                        {avis.description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default WhyChoose