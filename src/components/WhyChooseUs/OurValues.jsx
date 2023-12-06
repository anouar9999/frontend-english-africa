import Image from 'next/image'
import React from 'react'
import expertise from "../../../public/our-mission/expertise.png"
import quality from "../../../public/our-mission/quality.png"
import recognition from "../../../public/our-mission/Recognition.png"

const OurValues = ({data}) => {
    const data2 = [
        {
            image: expertise,
            title:"Excellence"
        },
        {
            image:quality,
            title:"Growth"
        },
        {
            image:recognition,
            title:"Integrity"
        }
    ]
  return (
    <div className='container mx-auto my-24'>
        <h2 className="font-libre-caslon text-4xl font-extrabold text-main-color title-banner-page text-center after:mx-auto">
          {data.Title}
        </h2>
        <div className="text-center mt-5 w-full px-5 lg:px-0 lg:w-3/4 mx-auto">
        {data.text}        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-12">
            {data.OurValuesImages.map((item) => (
                <div key={item.id} className='relative'>
                    <Image src={`${process.env.DOMAIN_BACKEND}${item.image.data.attributes.url}`} width={100} height={100} className='mx-auto w-full' />
                    <figcaption className='bg-white w-1/2 mx-auto py-5 text-center absolute -bottom-6 right-1/2 left-1/2 text-relative'
                    >
                        {item.Title}
                    </figcaption>

                </div>
            ))}
        </div>
        
    </div>
  )
}

export default OurValues