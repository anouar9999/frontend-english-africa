"use client"
import Image from 'next/image'
import React from 'react'
import coursesIcon from "../../public/icons/courses.png"
import typeIcon from "../../public/icons/type.png"
import dayIcon from "../../public/icons/day.png"
import { useRouter } from 'next/navigation'



const CourseCard = ({course}) => {
    const router = useRouter()
    let {attributes} = course

    const addCourse = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("course",JSON.stringify(course))
            router.push("/checkout")
        }

    }
    
    return (
    <div className="lg:grid grid-cols-4 items-center my-5">
        <div className='col-span-1'>
            <Image src={`${process.env.DOMAIN_BACKEND}${attributes.picture.data.attributes.url}`} width={"600"} height={"600"} alt={attributes.title} />
        </div>
        <div className="col-span-3">
            <div className='bg-white py-6 px-2'>
                <div className='text-font-libre-caslon'>
                    <div className="flex justify-between items-center">
                        <h2 className='text-xl font-semibold'>
                            {attributes.title}
                        </h2>
                        <div className='flex items-center gap-2'>
                            <Image src={dayIcon} alt="Date Courses English for africa"  />
                            {attributes.time}
                        </div>
                    </div>
                    <div className='my-2 flex items-center gap-2'>
                        <Image alt="Icon Course English for Africa" src={coursesIcon} />
                        <span>
                            Courses {attributes.coursesNumber}
                        </span>
                    </div>
                    <div className='my-2 flex items-center gap-2'>
                        <Image alt="Icon Type English for Africa" src={typeIcon} />
                        <span>
                           {attributes.mode}
                        </span>
                    </div>
                    <h6 className='text-[#A3A3A3]'>
                        {attributes.category}
                    </h6>
                </div>
                <div className="flex justify-between items-center pt-3">
                    <div>
                        <h2 className='font-semibold'>
                            Part-Time
                        </h2>
                        <h3 className='mt-2'>
                            {attributes.duration}
                        </h3>
                    </div>
                    <div>
                        <button onClick={addCourse} className='bg-main-color text-white px-12 py-3 rounded-md text-xl'>
                             {attributes.price} $
                        </button>
                    </div>
                </div>
            </div>
        </div>       
    </div>
    
  )
}

export default CourseCard