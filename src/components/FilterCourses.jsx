import React from 'react'

const FilterCourses = () => {

    const levels = ["Beginner","Intermediate","Advanced"]
  return (
    <div className= 'bg-white filter-courses h-[500px] sticky top-6 lg:block hidden'>
        <div className="py-12 px-6">
            <div className="category">
                <h2 className='font-libre-caslon font-semibold text-2xl'>
                    Category
                </h2>
                <div className='mt-6'>
                    <div className="flex items-center mb-4">
                        <input id="teacher-training-courses" type="radio" value="Teacher Training courses" name="category" className="accent-main-color w-4 h-4 text-main-color bg-gray-100 border-gray-300" />
                        <label htmlFor="teacher-training-courses" className="ml-2 text-sm font-medium">
                            Teacher Training Courses
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="language-learning" type="radio" value="language learning" name="category" className="accent-main-color w-4 h-4 text-main-color bg-gray-100 border-gray-300" />
                        <label htmlFor="language-learning" className="ml-2 text-sm font-medium">
                            Language Learning
                        </label>
                    </div>
                </div>
            </div>

            <div className="level mt-12">
                <h2 className='font-libre-caslon font-semibold text-2xl'>
                    Level
                </h2>
                <div className='mt-6'>
                    {levels.map(level => (
                        <div key={level} className="flex items-center mb-4">
                            <input id={level} type="radio" value={level} name="level" className="accent-main-color w-4 h-4 text-main-color bg-main-color border-gray-300" />
                            <label htmlFor={level} className="ml-2 text-sm font-medium">
                                {level}
                            </label>
                        </div>
                    ) )}
                </div>
            </div>
            <button className='bg-main-color text-white w-full py-3 mt-12'>
                Show Results
            </button>
        </div>
    </div> 
  )
}

export default FilterCourses