import React from 'react'
import Maps from './Maps'
import BannerPage from '@/components/BannerPage'
import Form from './Form'

import { use } from 'react'


async function getContactInfo() {
  const res = await fetch(`${process.env.API_URL}/contact-info?populate[0]=ContactInfo&populate[1]=backgroundImage`,{ cache: 'no-store' });
  return res.json();
  
}
const ContactInfoPromise = getContactInfo()

const page = () => {
  const ContactInfo = use(ContactInfoPromise)

  return (
    <>
        <BannerPage title={ContactInfo.data.attributes.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${ContactInfo.data.attributes.backgroundImage.data.attributes.url}`} />
        <Form data={ContactInfo.data.attributes}  title={ContactInfo.data.attributes.TitleForm}/>
        <Maps />
    </>
  )
}

export default page