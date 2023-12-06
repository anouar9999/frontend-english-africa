import BannerPage from '@/components/BannerPage'
import OurMission from '@/components/WhyChooseUs/OurMission'
import React from 'react'
import Desc from './Desc'
import GeneralEnglish from './GeneralEnglish'
import generalEnglishImage from "../../../public/languge-learning/teacher.jpeg"
import studentImage from "../../../public/languge-learning/student.png"
import BussiensEnglish from './BussiensEnglish'
import ContactAdmissions from './ContactAdmissions'
import { use } from 'react'


async function getLanguageLearningPage() {
  const res = await fetch(`${process.env.API_URL}/language-learning?populate[0]=backgroundImage&populate[1]=Description.descriptionLanguageLearning &populate[2]=Description.GeneralEnglish.image&populate[3]=BussiensEnglish.image&populate[4]=Description.descriptionLanguageLearning.icon&populate[5]=GeneralEnglish.image`,{ cache: 'no-store' });
  return res.json();
  
}
const LanguageLearningPagePromise = getLanguageLearningPage()
const page = () => {
  const LanguageLearningPage = use(LanguageLearningPagePromise)

  return (
    <div>
        <BannerPage title={LanguageLearningPage.data.attributes.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${LanguageLearningPage.data.attributes.backgroundImage.data.attributes.url}`}/>
        <Desc data={LanguageLearningPage.data.attributes.Description} />
       {
        LanguageLearningPage.data.attributes.GeneralEnglish.map((item)=>{
        // eslint-disable-next-line react/jsx-key
        return  <GeneralEnglish title={item.Title} image={`${process.env.DOMAIN_BACKEND}${item.image.data.attributes.url}`}  buttonText={item.ButtonText}>
          <p className='text-xl text-justify font-libre-caslon'>
{item.text1}          </p>
          <p className='text-xl text-justify font-libre-caslon mt-8'>
{item.text2}          </p>
      </GeneralEnglish>
        })
       }
       
        <BussiensEnglish data={LanguageLearningPage.data.attributes.BussiensEnglish} />
        <ContactAdmissions />


    
    </div>
  )
}

export default page