

import BannerPage from '@/components/BannerPage'
import React from 'react'
import BlogCard from './BlogCard';


async function getData() {
  const res = await fetch(`${process.env.API_URL}/blogs?populate=*`,{ cache: 'no-store' });
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

async function getBlogInfo() {
  const res = await fetch(`${process.env.API_URL}/blog-info?populate[0]=BlogInfo.backgroundImage`,{ cache: 'no-store' });
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}


const page =async () => {
  let {data} = await getData()
  let BlogInfo = await getBlogInfo()

  return (
    <>
      <BannerPage title={BlogInfo.data.attributes.BlogInfo.Title} backgroundImage={`${process.env.DOMAIN_BACKEND}${BlogInfo.data.attributes.BlogInfo.backgroundImage.data.attributes.url}`} />
      <div className="bg-[#f8f8f8]">
        <div className="container mx-auto py-24 ">
          <div className="w-full lg:w-3/4">
            {data.map(blog => (
              <BlogCard slug={blog.attributes.slug} key={blog.id} createdAt={blog.attributes.createdAt} title={blog.attributes.title} content={`${blog.attributes.content.substring(0,100)} ...`} picture={blog.attributes.picture.data?.attributes?.url} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page