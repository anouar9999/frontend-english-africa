import React from 'react'
import Image from 'next/image'

const Delta = ({children,title,image}) => {
  return (
    <div>
      <div className='container mx-auto my-24 mb-24'>
        <h2 className="font-libre-caslon text-4xl font-extrabold text-main-color title-banner-page mb-5 px-12 ">
            {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-10">
            <div className='col-span-5 px-12 relative'>
                <div className='lg:block hidden'>
                    <Image src={image} width={700} height={400} alt="How we got Image" />
                </div>
            </div>
            <section className='col-span-5 relative'>
               {children}
            </section>
        </div>
      </div>
    </div>
  )
}

export default Delta