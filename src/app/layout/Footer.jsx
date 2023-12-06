"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import instagramLogo from "../../../public/icons/instagram.png"
import facebookLogo from "../../../public/icons/facebook.png"
import linkedin from "../../../public/icons/linkedin.png"
import { Link as ScrolLink } from 'react-scroll'
import { use } from 'react'


async function getFooterInfo() {
    const res = await fetch(`${process.env.API_URL}/footer?populate[0]=image&populate[1]=ContactInfoTitle&populate[2]=ContactInfo&populate[3]=SocialMedia.icon&populate[4]=QuickLinksTitle&populate[5]=QuickLinks&populate[6]=InformationAboutTitle&populate[7]=InformationAbout `, { cache: 'no-store' });
    return res.json();

}



async function getFooterImages() {
    const res = await fetch(`${process.env.API_URL}/footer-image?populate=*`, { cache: 'no-store' });
    return res.json();

}
const FooterImagesPromise = getFooterImages()
const FooterPromise = getFooterInfo()

const Footer = () => {
    const FooterInfo = use(FooterPromise)
    const FooterImages = use(FooterImagesPromise)
   
    // const images = [
    //     "/footer/footer 6.png",
    //     "/footer/footer 5.png",
    //     "/footer/footer 4.png",
    //     "/footer/footer 3.png",
    //     "/footer/footer 2.png",
    //     "/footer/footer 1.png",
    // ]
    return (
        <div>
            <div className="grid grid-cols-6">
                {FooterImages.data.attributes.Images.data.map((image) => (
                    <div key={image}>
                        <Image className='image-footer'
                            src={`${process.env.DOMAIN_BACKEND}${image.attributes.url}`} 
                            // src={`${process.env.DOMAIN_BACKEND}/${image.attributes.Images.data.attributes.url}`}
                            width={"500"} height={"250"} alt="" />
                    </div>
                ))}
            </div>
            <footer className='bg-[#fef9f3]'>
                <div className="container mx-auto py-24">
                    <div className='grid lg:grid-cols-4 grid-cols-1 lg:px-0 px-2 gap-4 items-start'>
                        <div>
                            <Image src={`${process.env.DOMAIN_BACKEND}${FooterInfo.data.attributes.image.data.attributes.url}`} height={"60"} width={"250"} alt="Logo english for africa" />
                            <p className='mt-5 mr-10'>
                                {FooterInfo.data.attributes.text}
                            </p>
                        </div>
                        <div className='flex flex-col justify-between gap-5'>
                            <h5 className='font-semibold uppercase text-xl font-libre-caslon'>
                            {FooterInfo.data.attributes.ContactInfoTitle}
                            </h5>
                            <ul className='flex flex-col gap-5 mt-5'>
                                <li className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-color">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    {FooterInfo.data.attributes.ContactInfo[0].text}
                                </li>
                                <li className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-color">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    {FooterInfo.data.attributes.ContactInfo[1].text}                         </li>
                                <li className='flex items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-color">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    {FooterInfo.data.attributes.ContactInfo[2].text}
                                </li>
                            </ul>
                            <ul className='flex gap-3'>
                                 {FooterInfo.data.attributes.SocialMedia.map((item)=>{
                                    return  <li key={item.key}>
                                    <a href={item.Link} target='_blank'>
                                        <Image src={`${process.env.DOMAIN_BACKEND}${item.icon.data.attributes.url}`} width={25} height={25} alt="intsgaram link english for africa" />
                                    </a>
                                </li>
                                 })}
                               
                            
                            </ul>
                        </div>
                        <div className='flex flex-col justify-between gap-5'>
                            <h5 className='font-semibold uppercase text-xl font-libre-caslon'>
                            {FooterInfo.data.attributes.QuickLinksTitle}
                            </h5>

                            {FooterInfo.data.attributes.QuickLinks.map((link) => (
                                // eslint-disable-next-line react/jsx-key
                                <ul className='flex flex-col gap-3 mt-5 list-footer'>
                                    <li className='flex items-center gap-3'>
                                        <Link href={`/${link.Link}`}>
                                            {link.text}
                                        </Link>
                                    </li>
                                </ul>
                            ))}

                        </div>
                        <div className='flex flex-col justify-between gap-5'>
                            <h5 className='font-semibold uppercase text-xl font-libre-caslon'>
                            {FooterInfo.data.attributes.ContactInfoTitle}
                            </h5>
                            {FooterInfo.data.attributes.InformationAbout.map((link) => (
                                // eslint-disable-next-line react/jsx-key
                                <ul className='flex flex-col gap-5 mt-5 list-footer'>
                                    <li className='flex items-center gap-3'>
                                        <Link href={`/${link.Link}`}>
                                        {link.text}
                                            </Link>
                                    </li>

                                </ul>
                            ))}

                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer