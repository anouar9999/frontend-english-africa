import BannerPage from '@/components/BannerPage'
import HowWeGot from '@/components/WhyChooseUs/HowWeGot'
import OurMission from '@/components/WhyChooseUs/OurMission'
import OurValues from '@/components/WhyChooseUs/OurValues'
import Team from '@/components/WhyChooseUs/Team'
import React from 'react'
import { use } from 'react'

async function getTeam() {
  const res = await fetch(`${process.env.API_URL}/teams?populate=*`,{ cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

async function getWhyChooseUsPage() {
  const res = await fetch(`${process.env.API_URL}/why-choose-us?populate[0]=OurValues&populate[1]=OurValues.OurValuesImages&populate[2]=OurValues.OurValuesImages.image&populate[3]=OurMission&populate[4]=OurMission.image&populate[5]=backgroundImage&populate[6]=Team&populate[7]=HowWeGot&populate[8]=HowWeGot.image`,{ cache: 'no-store' });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}



const teamPromise=getTeam()
const getWhyChooseUsPagePromise=getWhyChooseUsPage()

const page = () => {
  const team = use(teamPromise)
  const getWhyChooseUsPage = use(getWhyChooseUsPagePromise)
  return (
    <>
      <BannerPage title={getWhyChooseUsPage.data.attributes.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${getWhyChooseUsPage.data.attributes.backgroundImage.data.attributes.url}`}/>
      <OurMission title=  {getWhyChooseUsPage.data.attributes.OurMission.Title} image={`${process.env.DOMAIN_BACKEND}${getWhyChooseUsPage.data.attributes.OurMission.image.data.attributes.url}`}>
        <div className='mt-12 flex items-start gap-5 our-mission-qoute'>
            <p className=' text-justify font-libre-caslon text-lg'>
          {getWhyChooseUsPage.data.attributes.OurMission.text}
            </p>
        </div>
        <section className='mt-12'>
          {/* <span className="teacher-name text-[#333] font-bold">
              Mr. Mohamed Oummih, {" "}
          </span> */}
          <span className='text-[#595959] lg:inline block'>
          {getWhyChooseUsPage.data.attributes.OurMission.shortText}

          </span>
        </section>
      </OurMission>
      <HowWeGot  data={getWhyChooseUsPage.data.attributes.HowWeGot}/>
      <Team  team={team} title={getWhyChooseUsPage.data.attributes.Team.Title}/>
      <OurValues data={getWhyChooseUsPage.data.attributes.OurValues} />
   </>
  )
}

export default page