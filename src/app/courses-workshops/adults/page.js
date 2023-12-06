"use client"
import React from 'react'
import BannerPage from '@/components/BannerPage'
import Delta from '@/components/Delta/Delta'
import Information from '@/components/Delta/Information'
import adultsImage from "../../../../public/clubs-workshop/adults/mekens.jpeg"
import writing from "../../../../public/clubs-workshop/adults/gamenight.jpeg"
import publicSpeaking from "../../../../public/clubs-workshop/adults/public-speaking.png"
import students from "../../../../public/clubs-workshop/adults/students.jpeg"
import books from "../../../../public/clubs-workshop/adults/books.png"
import Link from 'next/link'
import { use } from 'react'


async function getCoursesWorkshopsAdultPage() {
  const res = await fetch(`${process.env.API_URL}/courses-workshops-adult?populate[0]=backgroundImage&populate[1]=Delta.image&populate[2]=Information&&populate[3]=Information.image&populate[4]=Delta2.image&populate[5]=Information2.image`,{ cache: 'no-store' });
  return res.json();
  
}
const CoursesWorkshopsAdultPromise = getCoursesWorkshopsAdultPage()

const page = () => {
  const CoursesWorkshopsAdult = use(CoursesWorkshopsAdultPromise)

  return (
    <div>
        <BannerPage title={CoursesWorkshopsAdult.data.attributes.Title} subTitle={CoursesWorkshopsAdult.data.attributes.subTitle} backgroundImage={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopsAdult.data.attributes.backgroundImage.data.attributes.url}`} />
        <Delta title={CoursesWorkshopsAdult.data.attributes.Delta.Title} image={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopsAdult.data.attributes.Delta.image.data.attributes.url}`}>
          <div className='lg:absolute static -left-16 top-10 -z-10'>
              <div className='bg-main-color text-white p-10'>
                  <p className='text-xl'>{CoursesWorkshopsAdult.data.attributes.Delta.text}
                  </p>
                  <div className="flex justify-end mt-6 relative">
                      <Link href={"/courses"} className='py-2 px-12 border-2 border-white text-white font-semibold text-xl rounded-xl'>{CoursesWorkshopsAdult.data.attributes.Delta.ButtonText}</Link>
                  </div>
              </div>
          </div>
        </Delta>
        {
          CoursesWorkshopsAdult.data.attributes.Information.map((item)=>{
            // eslint-disable-next-line react/jsx-key
            return    <Information title={item.Title} image={`${process.env.DOMAIN_BACKEND}${item.image.data.attributes.url}`}>
            <div className='flex flex-col justify-between items-stretch'>
              <p className=' text-justify font-libre-caslon text-lg'>
{item.text}              </p>
              <div className="mt-6">
                  <Link href={item.ButtonLink} className='py-3 px-12 bg-main-color text-white font-semibold text-xl capitalize'>{item.ButtonText}</Link>
              </div>
            </div>
          </Information>
          })
        }
       



        <Delta title={CoursesWorkshopsAdult.data.attributes.Delta2.Title} image={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopsAdult.data.attributes.Delta2.image.data.attributes.url}`}>
          <div className='lg:absolute static -left-16 top-1/4 -z-10'>
              <div className='bg-main-color text-white p-10'>
                  <p className='text-xl'>
                  {CoursesWorkshopsAdult.data.attributes.Delta2.text}                  </p>
                  <div className="flex justify-end mt-6">
                      <button className='py-2 px-12 border-2 border-white text-white font-semibold text-xl rounded-xl'>{CoursesWorkshopsAdult.data.attributes.Delta2.ButtonText}</button>
                  </div>
              </div>
          </div>
        </Delta>


        <Information title={CoursesWorkshopsAdult.data.attributes.Information2.Title} image={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopsAdult.data.attributes.Information2.image.data.attributes.url}`}>
          <div className='flex flex-col justify-between items-stretch'>
            <p className=' text-justify font-libre-caslon text-lg'>
            {CoursesWorkshopsAdult.data.attributes.Information2.text}            </p>
            <div className="mt-6">
                <Link href={CoursesWorkshopsAdult.data.attributes.Information2.ButtonLink} className='py-3 px-12 bg-main-color text-white font-semibold text-xl'>{CoursesWorkshopsAdult.data.attributes.Information2.ButtonText}</Link>
            </div>
          </div>
        </Information>
    </div>
  )
}

export default page