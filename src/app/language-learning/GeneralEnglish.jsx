import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const GeneralEnglish = ({title,image,children,buttonText}) => {
  return (
    <div className='container mx-auto my-24'>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <section className='px-12'>
                <h2 className="font-libre-caslon text-4xl font-extrabold title-banner-page">
                    {title}
                </h2>
               <div className='mt-12 flex items-start gap-5'>
                    <div className='lg:pr-12 px-0'>
                       {children}
                    </div>
                </div>
            </section>
            <section className=''>
                <Image src={image} width={600} height={700} alt="General English for Africa" />
                <Link href={"/courses"} className='inline-block border-2 border-main-color rounded-3xl text-main-color px-12 py-2 mt-8'>
                    Apply Now
                </Link>
            </section>
        
        </div>
    </div>
  )
}

export default GeneralEnglish