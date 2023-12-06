import BannerPage from '@/components/BannerPage'
import Information from '@/components/Delta/Information'
import OurMission from '@/components/WhyChooseUs/OurMission'
import React from 'react'
import image1 from "../../../../public/1.webp"
import image2 from "../../../../public/2.webp"
import image3 from "../../../../public/3.webp"
import Link from 'next/link'


import { use } from 'react'


async function getCPDPPage() {
  const res = await fetch(`${process.env.API_URL}/cpdp?populate[0]=backgroundImage&populate[1]=OurMission.image&populate[2]=backgroundImage&populate[3]=Information.image&populate[4]=joiningThePlatform&populate[5]=text`,{ cache: 'no-store' });
  return res.json();
  
}
const CPDPPagePromise = getCPDPPage()
const page = () => {
  const CPDPPage= use(CPDPPagePromise)

  // const data = [
  // "A Series of online workshops",
  // "ELT webinars",
  // "Highly-qualified speakers",
  // "The Monthly EfA Newsletter",
  // "Invitation to write articles ",
  // "Certificates of attendance",
  // "Valuable resources",
  // "Special Interest Groups (SIG)",]
  
  return (
    <div>
      <BannerPage title={CPDPPage.data.attributes.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${CPDPPage.data.attributes.backgroundImage.data.attributes.url}`}  />

      <OurMission title={CPDPPage.data.attributes.OurMission.Title} image={`${process.env.DOMAIN_BACKEND}${CPDPPage.data.attributes.OurMission.image.data.attributes.url}`} >
        <div className='mt-12 flex items-start gap-5'>
          <p className='text-xl text-justify font-libre-caslon'>
          {CPDPPage.data.attributes.OurMission.text}          </p>
        </div>
            <Link href={"/courses"} className='inline-block py-3 px-12 rounded-lg border border-main-color text-main-color font-semibold text-xl mt-6 hover:bg-main-color hover:text-white'>{"I'am Interested"}</Link>
      </OurMission>


{
  CPDPPage.data.attributes.Information.map((item)=>{
    return  <Information title={item.Title} image={`${process.env.DOMAIN_BACKEND}${item.image.data.attributes.url}`} key={item.id}>
    <p className=' text-justify font-libre-caslon text-lg'>
      {item.text}
    </p>
    <div className="mt-12">
        <Link href={"/courses"} className='py-3 px-12 bg-main-color text-white font-semibold text-xl uppercase'>{item.ButtonText1}</Link>
    </div>
  </Information>
  })
}

 

      <div className="bg-main-color py-24 text-white">
        <div className="container mx-auto">
          <section className='font-libre-caslon'>
            <h2 className="text-6xl font-bold">
            {CPDPPage.data.attributes.joiningThePlatform.Title}
            </h2>
            <h5 className='text-5xl font-semibold'>
            {CPDPPage.data.attributes.joiningThePlatform.subTitle}
            </h5>
          </section>
          <div className="my-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                  {CPDPPage.data.attributes.text.map(item  => (
                  <div key={item.id} className="flex justify-center px-6 py-4 text-xl my-3 border border-white rounded-3xl">
                      {item.text}
                  </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default page