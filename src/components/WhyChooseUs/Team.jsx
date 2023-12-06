import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import linkedin from "../../../public/icons/linkedin.png"
const Team = ({team,title}) => {
  return (
    <div className='container mx-auto my-24'>
        <h2 className="font-libre-caslon text-4xl font-extrabold text-main-color title-banner-page text-center after:mx-auto">
            {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-12">
            {team.data.map((avis) => (
                    <div key={avis.id} className='px-5 flex justify-center'>
                        <div className="">
                            <div className='flex justify-center'>
                                <Image className='rounded-full image-footer text-center' src={`${process.env.DOMAIN_BACKEND}${avis.attributes.picture.data.attributes.url}`} width={"150"} height={"150"} alt={avis.attributes.name} />
                            </div>
                            <div className='bg-white p-6  text-center'>
                                <p className='text-font-libre-caslon text-xl font-bold text-main-color'>
                                    {avis.attributes.name}
                                </p>
                                <hr className='my-2'/>
                                <a href={avis.attributes.linkedin} target='_blank' className='flex justify-center' >
                                    <Image src={linkedin} width={25} height={25} alt="linkedin"/>
                                </a>
                                <span className='text-[#aaaaaa] flex items-center gap-5 pt-3'>
                                    {avis.attributes.description} Hours
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Team