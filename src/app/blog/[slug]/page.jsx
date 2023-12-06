import BannerPage from '@/components/BannerPage'
import moment from 'moment';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import RichText from './RichText';

    
async function getOnePost(slug) {
    const res = await fetch(`${process.env.API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`,{ cache: 'no-store' });
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }


const page = async ({params}) => {
    const {slug} = params

    const {data} = await getOnePost(slug)
  return (
    <div>
      <BannerPage title={"Blog"} backgroundImage={"/adults.jpeg"} />
        <div className="container mx-auto my-24 lg:px-12 px-4">
            <h5 className="font-libre-caslon text-3xl py-5 font-bold">
                {data[0].attributes.title} 

            </h5>
            <span className='text-gray-400'>
                {moment(data[0].attributes.createdAt).format("MMM , D ,YYYY")}
            </span>
            <hr className='my-3' />
            <div className='mt-12'>
            <div dangerouslySetInnerHTML={{ __html: data[0].attributes.content }} />
            </div>
        </div>
    </div>
  )
}

export default page