import React from 'react'
import classRoom from "../../../public/languge-learning/classroom.png"
import Image from 'next/image'
import Link from 'next/link'

const BussiensEnglish = ({data}) => {
  return (
    <div>
        <div className='container mx-auto my-24 px-12'>
            <h2 className="font-libre-caslon text-4xl font-extrabold title-banner-page">
                {data.Title}
            </h2>
            <div className="my-6">
                <Image src={`${process.env.DOMAIN_BACKEND}${data.image.data.attributes.url}`} width={1200} height={400} alt="Business English for individuals or companies" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className='text-justify flex flex-col gap-6'>
                    <p>
                    {data.text1}                    </p>
                    <p>
                    {data.text2}                      </p>
                </div>

                <div className='text-justify flex flex-col gap-6'>
                    <p> {data.text3}
                    </p>
                    <p>
                    {data.text4}                    </p>
                </div>
            </div>
            <Link href={"/courses"} className='inline-block border-2 border-main-color rounded-3xl text-main-color px-12 py-2 mt-8'>
               {data.ButtonText}
            </Link>
        </div>
    </div>
  )
}

export default BussiensEnglish