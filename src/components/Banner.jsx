import Image from 'next/image'
import React from 'react'
import cambride from "../../public/cambride.webp"

const Banner = ({data}) => {
  return (
    <div className="banner text-white min-h-[85vh] flex flex-col items-center justify-center px-2">
        <div className='container mx-auto'>
            <div className='mb-5'>
                <Image src={cambride} alt="Cambridge logo" />
            </div>
            <h2 className='lg:text-4xl text-3xl font-medium'>
{data.title}
            </h2>
            {/* <h5 className='lg:text-7xl text-5xl font-extrabold py-3'>
                Empower, Engage, Excel:
            </h5> */}
            <p className='lg:text-5xl text-3xl font-semibold'>
                {/* Your Path to Language <br /> 
                Mastery and Teaching Success */}
                {data.subTitle}<br />{data.subTitle2}
            </p>
            <div className="call-to-action mt-12 lg:flex flex-col lg:flex-row gap-5 mb-2">
                {/* <button className='bg-second-color w-full lg:w-auto py-3 px-12 text-2xl rounded-3xl border border-second-color lg:mb-0 mb-5'>
                    Teacher Training
                </button> */}
                {/* <button className='bg-transparent w-full lg:w-auto py-3 px-12 text-2xl rounded-3xl border border-white'>
                    Interested in Learning English and/or Exam preparation
                </button> */}
            </div>

            
        </div>
    </div>
  )
}

export default Banner