"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';


const Courses = ({title,courses}) => {
  return (
    <div className='py-24 bg-[#FEF8F5]'>
        <div className="container mx-auto px-2">
            <h2 className='text-5xl font-bold font-libre-caslon'>
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
                      slidesPerView: 2,
                      spaceBetween: 5
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 5
                    }
                }}
                className='mt-24 justify-center'
                >
                {courses.data.map((avis) => (
                    <SwiperSlide key={avis.id} className='px-5'>
                        <div className="relative">
                          <Link href={avis.attributes.url ?? ""}>
                            <Image src={`${process.env.DOMAIN_BACKEND}${avis.attributes.picture.data.attributes.url}`} width={"600"} height={"600"} alt="Avatar Avis" />
                            <span className='absolute top-2 right-2 bg-main-color text-white py-2 px-8'>
                              New
                            </span>
                            <div className='bg-white p-6'>
                                <p className='text-font-libre-caslon text-xl font-semibold min-h-[100px]'>
                                    {avis.attributes.title}
                                    
                                </p>
                                {/* <hr />
                                <span className='text-[#aaaaaa] flex items-center gap-5 pt-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                    {avis.attributes.times} Hours
                                </span> */}
                            </div>
                          </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        
        </div>
    </div>
  )
}

export default Courses