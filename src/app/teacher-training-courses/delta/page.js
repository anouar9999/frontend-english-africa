import BannerPage from '@/components/BannerPage'
import Delta from '@/components/Delta/Delta'
import Information from '@/components/Delta/Information'
import OurMission from '@/components/WhyChooseUs/OurMission'
import infoImage from "../../../../public/delta/info.png"
import infoImage2 from "../../../../public/delta/writing.jpeg"
import deltaImage from "../../../../public/delta/delta.png"
import deltaImage1 from "../../../../public/delta/delta certificate.png"
import React from 'react'
import Link from 'next/link'
import CallToAction from '@/components/Celta/CallToAction'
import delta1 from "../../../../public/delta/delta m1_.png"
import delta2 from "../../../../public/delta/delta m2.png"
import delta3 from "../../../../public/delta/delta m3.png"
import CallToActionDelta from '@/components/Delta/CallToActionDelta'
import { use } from 'react'


async function getTeacherTrainingCourseDelta() {
  const res = await fetch(`${process.env.API_URL}/teacher-training-course-delta?populate[0]=backgroundImage&populate[1]=OurMission.image&populate[2]=Delta.image&populate[3]=CourseFormat.image&populate[4]=Information.image&populate[5]=Information2.image`,{ cache: 'no-store' });
  return res.json();
  
}
const TeacherTrainingCourseDeltaPromise = getTeacherTrainingCourseDelta()
const page = () => {
  const TeacherTrainingCourseDelta= use(TeacherTrainingCourseDeltaPromise)

  return (
    <>
        <BannerPage title={TeacherTrainingCourseDelta.data.attributes.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourseDelta.data.attributes.backgroundImage.data.attributes.url}`}/>
        
        <OurMission image={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourseDelta.data.attributes.OurMission.image.data.attributes.url}`} title={TeacherTrainingCourseDelta.data.attributes.OurMission.Title}>
          <div className='mt-12 flex items-start gap-5'>
              <p className='text-xl text-justify font-libre-caslon'>
              {TeacherTrainingCourseDelta.data.attributes.OurMission.text}
              </p>
          </div>
        </OurMission>

        <Delta title={TeacherTrainingCourseDelta.data.attributes.Delta.Title} image={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourseDelta.data.attributes.Delta.image.data.attributes.url}`}>
          <div className='bg-main-color text-white p-10 lg:absolute static -left-16 top-1/4 -z-10'>
            <p className='text-xl'>
            {TeacherTrainingCourseDelta.data.attributes.Delta.text}              </p>
          </div>
        </Delta>
        {TeacherTrainingCourseDelta.data.attributes.Information.map((item)=>{
        return   <Information key={item.id} title={item.Title} image={`${process.env.DOMAIN_BACKEND}${item.image.data.attributes.url}`}>
        <p className=' text-justify font-libre-caslon text-lg'>
        {item.text}        </p>
      </Information>
      })
      
      
      
      }
       

        <Information title={TeacherTrainingCourseDelta.data.attributes.Information2.Title} image={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourseDelta.data.attributes.Information2.image.data.attributes.url}`}>
            <>
             <ul className='text-justify font-libre-caslon text-lg list-footer'>
                <li className='before:mr-3'>
                  At least one year of teaching experience
                </li>
                <li className='before:mr-3'>
                  Be at least 20 years of age, and have a C1 level in English
                </li>
                <li className='before:mr-3'>
                  A range of specialist areas to choose from; experienced teachers can extend their expertise in a specific area, adding even more value to their teaching skillset.
                </li>
            </ul>
           
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-2">
              <Link href={"/contact"} className='block text-center py-3 px-6 bg-main-color text-white font-semibold text-xl uppercase mt-5'>{TeacherTrainingCourseDelta.data.attributes.Information2.ButtonText1} </Link>
                <div className="col-span-2">
                  <CallToActionDelta title={TeacherTrainingCourseDelta.data.attributes.Information2.ButtonText2} />
                </div>
                
            </div>
          </>


        </Information>
    </>
  )
}

export default page