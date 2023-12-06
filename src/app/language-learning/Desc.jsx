import React from 'react'
import certificate from "../../../public/icons/certificate.png"
import Image from 'next/image'
import Link from 'next/link'

const Desc = ({data}) => {
  const data2 = [
    {
      title:"General English courses",
      content:"Our team is dedicated to your progress, actively following a professional development program and using both course books and materials designed specifically for you"
    },
    {
      title:"Exam preparation",
      content:"Ready to ace your TOEFL, TOEIC, or IELTS exams? Let our Complete Exam Preparation Solution guide you to success! Join our small group exam preparation sessions"
    },
    {
      title:"Business English",
      content:"Our courses are designed to be fun, engaging, and challenging, taking you and your business where you want to go"
    },
    
  ]
  return (
    <div className='container mx-auto my-24'>
        <h2 className="font-libre-caslon text-center after:mx-auto text-4xl font-extrabold title-banner-page">
           {data.Title}
        </h2>
        <p className='w-3/4 my-12 text-center mx-auto'>
{data.text}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-5 lg:px-12 px-2">
          {data.descriptionLanguageLearning.map((item) => (
            <div key={item.Title} className='flex gap-5 card p-6'>
              <div>
                <Image width={300} height={300} src={`${process.env.DOMAIN_BACKEND}${item.icon.data.attributes.url}`}  alt="certificate icon" />
              </div>
              <div>
                <h3 className='font-extrabold text-lg mb-5'>
                  {item.Title}
                </h3>
                <p>
                {item.text}
                </p>
                  <Link href={"/courses"} className='block border-2 border-main-color rounded-3xl px-12 mt-6 text-lg py-2'>
                   {item.ButtonText}
                  </Link>
              </div>

            </div>
          ))}

        </div>
    </div>
  )
}

export default Desc