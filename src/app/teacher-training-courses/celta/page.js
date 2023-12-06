import BannerPage from '@/components/BannerPage'
import OurMission from '@/components/WhyChooseUs/OurMission'
import celtaImage from "../../../../public/diplome.webp"
import image from "../../../../public/celta.webp"
import React from 'react'
import Delta from '@/components/Delta/Delta'
import Information from '@/components/Delta/Information'
import CallToAction from '@/components/Celta/CallToAction'
import celtaCertificate from "../../../../public/celta/celta certificate.png"
import Link from 'next/link'
import CourseFormat from '@/components/Celta/CourseFormat'
import faceToFace from "../../../../public/celta/celta-face-to-face.webp"
import fullyOnline from "../../../../public/celta/celta-fully-online.webp"
import mixedMode from "../../../../public/celta/mixed-mode-celta.webp"
import imagereplacing from "../../../../public/delta/imagereplacing.png"
import { use } from 'react'


async function getTeacherTrainingCourse() {
  const res = await fetch(`${process.env.API_URL}/teacher-training-course?populate[0]=backgroundImage&populate[1]=OurMission.image&populate[2]=Delta.image&populate[3]=CallToAction&populate[4]=CourseFormat.image&populate[5]=Information.image`,{ cache: 'no-store' });
  return res.json();
  
}
const TeacherTrainingCoursePromise = getTeacherTrainingCourse()

const page = () => {
  const TeacherTrainingCourse= use(TeacherTrainingCoursePromise)

  return (
    <div>
      <BannerPage title={TeacherTrainingCourse.data.attributes.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourse.data.attributes.backgroundImage.data.attributes.url}`} />

      <OurMission image={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourse.data.attributes.OurMission.image.data.attributes.url}`} title={TeacherTrainingCourse.data.attributes.OurMission.Title}>
        <div className='mt-12 flex items-start gap-5'>
            <p className='text-xl text-justify font-libre-caslon'>
            {TeacherTrainingCourse.data.attributes.OurMission.text}
            </p>
        </div>
      </OurMission>
      <Delta title={TeacherTrainingCourse.data.attributes.Delta.Title} image={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourse.data.attributes.Delta.image.data.attributes.url}`}>
        <div className='lg:absolute static -left-16 top-1/4 -z-10'>
            <div className='bg-main-color text-white p-10'>
                <p className='text-xl'>
                {TeacherTrainingCourse.data.attributes.Delta.text}                 </p>
            </div>
        </div>
      </Delta>
      <div className="my-24">
        <div className="container mx-auto">
            <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto bg-main-color lg:px-24 px-2 py-12 items-center justify-between'>
                <div className="col-span-2 text-white">
                    <p className='mt-6 text-base'>
                    {TeacherTrainingCourse.data.attributes.CallToAction.text}                     </p>
                </div>
                <div className='lg:flex block mt-5 justify-end'>
                <CallToAction bgColor={"bg-[#FE9131]"} title={TeacherTrainingCourse.data.attributes.CallToAction.ButtonText}  />
                </div>
            </div>
        </div>
      </div>
      {TeacherTrainingCourse.data.attributes.CourseFormat.map((item)=>{
        return   <CourseFormat key={item.id}
        title={item.Title} 
        description={item.text} 
        image={`${process.env.DOMAIN_BACKEND}${item.image.data.attributes.url}`} />
      })
      
      
      
      }
    

    

     

      <Information title=    {TeacherTrainingCourse.data.attributes.Information.Title} image={`${process.env.DOMAIN_BACKEND}${TeacherTrainingCourse.data.attributes.Information.image.data.attributes.url}`}>
        <p className=' text-justify font-libre-caslon text-lg'>
        {TeacherTrainingCourse.data.attributes.Information.text}        </p>
        <ul className='font-bold list-disc mt-5 text-xl capitalize'>
          <li>
            mixed mode
          </li>
          <li>
            Full online
          </li>
          <li>
            Face to Face
          </li>
        </ul>
        <div className="mt-6 flex items-center gap-2">
            <Link href={"/contact"} className='block text-center py-3 px-12 bg-main-color text-white font-semibold text-xl uppercase mt-5'>{TeacherTrainingCourse.data.attributes.Information.ButtonText1}</Link>
              <CallToAction title={TeacherTrainingCourse.data.attributes.Information.ButtonText2} />
        </div>
      </Information>
    </div>
  )
}

export default page