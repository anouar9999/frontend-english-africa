"use client"
import React, { use } from 'react'
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';


async function getData() {
    const res = await fetch(`${process.env.API_URL}/testimonials?populate=*`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
}

const dataPromise = getData()

const Testimonials =({title}) => {
   const { data } =use(dataPromise);



  return (
    <div className="my-24" id='testimonials'>
        <div className="container mx-auto">
            <h2 className='text-5xl font-bold font-libre-caslon text-center mb-24'>
             {title}
            </h2>
            <Swiper
               modules={[Pagination, A11y]}
               spaceBetween={5}
               loop
               breakpoints={{
                   640: {
                     slidesPerView: 1,
                     spaceBetween: 5
                   },
                   768: {
                     slidesPerView: 1,
                     spaceBetween: 5
                   },
                   1024: {
                     slidesPerView: 2,
                     spaceBetween: 5
                   }
               }}
                >
                {data.map((avis) => (
                    <SwiperSlide key={avis.id} className='px-12'>
                        <div className="avatar flex items-start gap-5">
                            <Image src={`${process.env.DOMAIN_BACKEND}${avis.attributes.avatar.data.attributes.url}`} className='rounded-full' width={"75"} height={"75"} alt="Avatar Avis" />
                            <div>
                                <p className='text-2xl font-semibold'>
                                    {avis.attributes.name}
                                </p>
                                <span className='text-[#aaaaaa]'>
                                    {avis.attributes.jobTitle}
                                </span>
                                <p className='mt-5'>
                                   {avis.attributes.content}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center gap-5">
                <Link href={"https://www.youtube.com/@englishforafrica/videos"} target='_blank' className='lg:w-auto w-full py-3 px-12 bg-main-color text-white font-semibold text-xl mt-5 uppercase'>Meet Our students</Link>
                <Link href={"https://www.youtube.com/watch?v=aTeCVF6eTcM&list=PLtH8K-RuWY5lXNdeFSHl5My5GVGE9OxwY"} target='_blank' className='lg:w-auto w-full py-3 px-12  text-main-color border border-main-color font-semibold text-xl mt-5 uppercase'>Youtube Page</Link>
            </div>
        </div>
    </div>
  )
}



export default Testimonials