import Image from 'next/image'
import React from 'react'

const CourseFormat = ({title,description,image,className}) => {
  return (
    <div className='my-24 container mx-auto lg:px-12 px-4'>
        <div className={`grid grid-cols-2 items-center`}>
            <Image src={image} alt={title} width={700} height={400} />
            <div className={`px-12 flex flex-col gap-5 ${className}`}>
                <h2 className='text-4xl text-main-color font-semibold uppercase'>
                    {title}
                </h2>
                <p>
                    {description}
                </p>    
            
            </div>        
        </div>
    </div>
  )
}

export default CourseFormat