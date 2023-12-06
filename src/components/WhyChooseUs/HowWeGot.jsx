import React from 'react'
import HowWeGotImage from "../../../public/our-mission/2.png"
import Image from 'next/image'
import Link from 'next/link'

const HowWeGot = ({data}) => {
  return (
    <div className='container mx-auto my-24'>
        <div className="grid grid-cols-1 lg:grid-cols-10 overflow-hidden">
            <div className='col-span-5 px-12 relative'>
                <h2 className="font-libre-caslon text-4xl font-extrabold text-main-color title-banner-page">
               {data.Title}
                </h2>
                <div className='absolute top-1/4 -right-5 hidden lg:block'>
                    <Image src={`${process.env.DOMAIN_BACKEND}${data.image.data.attributes.url}`} width={"1000"} height={"400"} className='w-full' alt="How we got Image" />
                </div>
            </div>

            <section className='col-span-5 lg:mt-0 mt-12'>
                <div className='bg-main-color text-white p-4 lg:p-10'>
                    <p>{data.text1}
                    </p>
                    <div className="flex justify-end">
                        <Link href={"/courses"} className='border-2 border-white rounded-3xl px-5 py-2 mt-5 flex items-center gap-2'>
                        {data.ButtonText}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="p-4 lg:p-10">
                {data.text2}
                </div>
            </section>


        </div>
        
    
    </div>
  )
}

export default HowWeGot