import Link from 'next/link'
import React from 'react'

const ApplyAdmission = ({titles} ) => {
  return (
    <div className="my-24">
        <div className="container mx-auto">
            <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto bg-main-color lg:px-24 px-2 py-12 items-center justify-between'>
                <div className="col-span-2 text-white">
                    <h2 className='text-5xl font-bold font-libre-caslon'>
                       
                        {titles.Title} 
                    </h2>
                    <p className='mt-6 text-base'>
                    {titles.description}
                    </p>
                </div>
                <div className='lg:flex block mt-5 justify-end'>
                    <Link href={"/courses"} className='text-white lg:w-auto w-full bg-[#FE9131] px-12 py-3 uppercase text-xl'>
                    {titles.TitleButton}
                    </Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ApplyAdmission