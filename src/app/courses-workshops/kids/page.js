import BannerPage from '@/components/BannerPage'
import Delta from '@/components/Delta/Delta'
import React from 'react'
import children from "../../../../public/clubs-workshop/kids/children.jpeg"
import kids from "../../../../public/clubs-workshop/kids/kids.jpeg"
import night from "../../../../public/clubs-workshop/kids/night.png"
import dance from "../../../../public/clubs-workshop/kids/dance.png"
import chess from "../../../../public/clubs-workshop/kids/kids.png"
import Information from '@/components/Delta/Information'
import Link from 'next/link'
import { use } from 'react'


async function getCoursesWorkshopsKidPage() {
  const res = await fetch(`${process.env.API_URL}/courses-workshops-kid?populate[0]=backgroundImage&populate[1]=Delta.image&populate[2]=Information&&populate[3]=Information.image&populate[4]=Delta2.image&populate[5]=Information2.image`,{ cache: 'no-store' });
  return res.json();
  
}
const CoursesWorkshopskidPromise = getCoursesWorkshopsKidPage()

const page = () => {
  const CoursesWorkshopskid = use(CoursesWorkshopskidPromise)
  return (
    <div>
      <BannerPage title={CoursesWorkshopskid.data.attributes.Title} subTitle={"For Kids"} backgroundImage={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopskid.data.attributes.backgroundImage.data.attributes.url}`}  />

      <Information title={CoursesWorkshopskid.data.attributes.Information.Title} image={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopskid.data.attributes.Information.image.data.attributes.url}`}>
        <div className='flex flex-col justify-between items-stretch'>
          <p className=' text-justify font-libre-caslon text-lg'>
          {CoursesWorkshopskid.data.attributes.Information.text}          
          </p>
          <div className="mt-12">
              <Link href={CoursesWorkshopskid.data.attributes.Information.ButtonLink} className='py-3 px-12 bg-main-color text-white font-semibold text-xl'>{CoursesWorkshopskid.data.attributes.Information.ButtonText}</Link>
          </div>
        </div>
      </Information>

      <Delta title={CoursesWorkshopskid.data.attributes.Delta.Title} image={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopskid.data.attributes.Delta.image.data.attributes.url}`}>
          <div className='lg:absolute static -left-16 top-10 -z-10'>
              <div className='bg-main-color text-white p-10'>
                  <p className='text-sm'>
                  {CoursesWorkshopskid.data.attributes.Delta.text}                  </p>
                
                  <div className="flex justify-end mt-6">
                      <Link href={"/courses"} className='py-2 px-12 border-2 border-white text-white font-semibold text-xl rounded-xl'>{CoursesWorkshopskid.data.attributes.Delta.ButtonText} </Link>
                  </div>
              </div>
          </div>
        </Delta>

        {
          CoursesWorkshopskid.data.attributes.Information2.map((item)=>{
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


        <Delta title= {CoursesWorkshopskid.data.attributes.Delta2.Title} image={`${process.env.DOMAIN_BACKEND}${CoursesWorkshopskid.data.attributes.Delta2.image.data.attributes.url}`}>
          <div className='lg:absolute static -left-16 top-1/4 -z-10'>
              <div className='bg-main-color text-white p-10'>
                  <p className='text-xl'>
                  {CoursesWorkshopskid.data.attributes.Delta2.text}                  </p>
                  <div className="flex justify-end mt-6">
                      <Link href={"/courses"} className='py-2 px-12 border-2 border-white text-white font-semibold text-xl rounded-xl'>{CoursesWorkshopskid.data.attributes.Delta2.ButtonText}</Link>
                  </div>
              </div>
          </div>
        </Delta>

       
    </div>
  )
}

export default page