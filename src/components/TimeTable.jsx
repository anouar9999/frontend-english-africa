import React from 'react'

const TimeTable =async ({title}) => {
  const { data } =await getTimeTableData()

  return (
      <div className="my-24 lg:block hidden">
        <div className="container mx-auto">
            <h2 className='text-5xl font-bold font-libre-caslon text-center mb-24'>
                {title}
            </h2>
            <div className="grid grid-cols-7 timetable-container">
               {data.map(({id,attributes}) => (
                 <div key={id} className='text-center time-line-card'>
                    <div className="day-title text-[#aaa] pb-2">
                      {attributes.day}
                    </div>
                    <div className="time-line-info w-full h-40 bg-white flex flex-col justify-between py-3">
                            <div>
                              <span>
                                {attributes.TitleCourseOne}
                              </span>
                            </div>
                            <div>
                              <p>
                              {attributes.ClassCourseOne}
                              </p>
                              <p>
                              {attributes.TeacherCourseOne}
                              </p>
                              <span>
                              {attributes.TimeCourseOne}
                              </span>
                            </div>
                    </div>

                    <div className="time-line-info w-full h-40 bg-white flex flex-col justify-between py-3">
                        <div>
                          <span>
                            {attributes.TitleCourseTwo}
                          </span>
                        </div>
                        <div>
                          <p>
                          {attributes.ClassCourseTwo}
                          </p>
                          <p>
                          {attributes.TeacherCourseTwo}
                          </p>
                          <span>
                          {attributes.TimeCourseTwo}
                          </span>
                        </div>
                    </div>

                    <div className="time-line-info w-full h-40 bg-white flex flex-col justify-between py-3">
                        <div>
                          <span>
                            {attributes.TitleCourseThree}
                          </span>
                        </div>
                        <div>
                          <p>
                          {attributes.ClassCourseThree}
                          </p>
                          <p>
                          {attributes.TeacherCourseThree}
                          </p>
                          <span>
                          {attributes.TimeCourseThree}
                          </span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default TimeTable


const getTimeTableData =async () => {
  const res = await fetch(`${process.env.API_URL}/time-tables`,{ cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}