import CourseCard from '@/components/CourseCard'
import FilterCourses from '@/components/FilterCourses'
import React, { use } from 'react'

export async function getCourses () {
    const res = await fetch(`${process.env.API_URL}/courses?populate=*`,{ cache: 'no-store' });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}

let coursesPromise = getCourses();

const page = () => {

    let {data} = use(coursesPromise)
  return (
    <div className="bg-[#EFEFEF]">
        <div className='container mx-auto py-24'>
            <h2 className='font-libre-caslon text-6xl font-bold'>
                Courses
            </h2>
            <div className="lg:grid grid-cols-4 mt-12">
                <FilterCourses />
                <div className='col-span-3 px-6'>
                    <div className="my-5">
                        {data.map((course) => (
                            <CourseCard 
                                key={course.id} 
                                course={course}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page


