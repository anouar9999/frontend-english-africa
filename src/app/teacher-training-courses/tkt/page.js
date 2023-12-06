import BannerPage from '@/components/BannerPage'
import Delta from '@/components/Delta/Delta'
import OurMission from '@/components/WhyChooseUs/OurMission'
import React from 'react'
import tktImage from "../../../../public/tkt/CERTIF.png"
import Information from '@/components/Delta/Information'
import applyTkt from "../../../../public/tkt/4.png"
import eligibleTkt from "../../../../public/tkt/3.png"
import Link from 'next/link'
import tkt1 from "../../../../public/tkt/tkt m1.png"
import tkt2 from "../../../../public/tkt/tkt 2.png"
import tkt3 from "../../../../public/tkt/tkt m3.png"
import { use } from 'react'


async function getTKTPage() {
  const res = await fetch(`${process.env.API_URL}/tkt?populate[0]=backgroundImage&populate[1]=OurMission.image&populate[2]=Delta.image&populate[3]=Delta.image&populate[4]=Information.image`,{ cache: 'no-store' });
  return res.json();
  
}
const TKTPagePromise = getTKTPage()
const page = () => {
  const TKTPage= use(TKTPagePromise)
  return (
    <>
    <BannerPage title={TKTPage.data.attributes.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${TKTPage.data.attributes.backgroundImage.data.attributes.url}`} />
    <OurMission title={TKTPage.data.attributes.OurMission.Title} image={`${process.env.DOMAIN_BACKEND}${TKTPage.data.attributes.OurMission.image.data.attributes.url}`}>
        <div className='mt-12 flex items-start gap-5'>
            <p className='text-base text-justify font-libre-caslon'>
            {TKTPage.data.attributes.OurMission.text}            </p>
        </div>
    </OurMission>
    <Delta title={TKTPage.data.attributes.Delta.Title} image={`${process.env.DOMAIN_BACKEND}${TKTPage.data.attributes.Delta.image.data.attributes.url}`}>
        <div className='lg:absolute static -left-16 top-1/4 -z-10'>
            <div className='bg-main-color text-white p-10'>
                <p className='text-xl'>
                {TKTPage.data.attributes.Delta.text}                 </p>
            </div>
            {/* <div className="flex justify-end">
                <Link href={"/contact"} className='inline-block mt-6 py-3 px-12 bg-main-color text-white font-semibold text-xl'>Brochure</Link>
            </div> */}
        </div>
    </Delta>

    {TKTPage.data.attributes.Information.map((item)=>{
      
      // eslint-disable-next-line react/jsx-key
      return    <Information title={item.Title} image={`${process.env.DOMAIN_BACKEND}${item.image.data.attributes.url}`}>
      <p className=' text-justify font-libre-caslon text-lg'>
      {item.text}      </p>
{      item.ButtonText1==null?<div></div>: <div className="mt-6">
          <Link href={"/contact"} className='py-3 px-12 bg-main-color text-white font-semibold text-xl'>Apply Now</Link>
      </div>}  </Information>
    })}  


    
    </>
  )
}

export default page