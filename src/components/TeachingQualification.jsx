import Image from 'next/image'
import React from 'react'

const TeachingQualification = ({data}) => {
  return (
    <div className='container mx-auto my-24 px-2'>
        <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className=''>
                <h2 className='text-5xl font-bold font-libre-caslon'>
                    
                    {/* An authorized Cambridge <br /> Teaching Qualifications Center */}
                    {data.title}
                </h2>
                <p className='mt-6 text-xl mb-5'>
                   {/* {`As an authorized Cambridge Teaching Qualifications Center, English for Africa upholds the highest standards in English language teaching. The center is committed to providing quality training to its teachers, ensuring that they are equipped with the necessary skills and knowledge to deliver effective English language instruction. English for Africa's training programs are designed to prepare teachers for internationally recognized certifications such as CELTA and DELTA. By offering these qualifications, the center aims to improve the quality of English language teaching across Africa across Africa and throughout the rest of the world.`} */}
                   {data.description}
                </p>
            </div>
            <div className='flex justify-center'>
                <Image src={"/cambridge-home-page.webp"} alt='' width={"500"} height={"400"} />
            </div>

        </div>
        
        
    </div>
  )
}

export default TeachingQualification