import Image from 'next/image'
import React, { Children } from 'react'
import OurMissionImage from "../../../public/mr-oummih.jpeg"

const OurMission = ({title,children,image}) => {
  return (
    <div className='container mx-auto my-24'>
        <div className="grid lg:grid-cols-2 grid-cols-1">
            <section className='lg:px-12 px-4'>
                <h2 className="font-libre-caslon text-4xl font-extrabold text-main-color title-banner-page">
                    {title}
                </h2>
               {children}
            </section>
            <section className='flex justify-center px-2'>
                <Image src={image}width={500} height={100} alt="Our Mission English for Africa" />
            </section>
        
        </div>
    </div>
  )
}

export default OurMission