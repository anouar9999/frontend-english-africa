import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({title,content,picture,createdAt,slug}) => {
  return (
    <div className='lg:flex my-12 lg:px-0 px-4'>
        <Image src={`${process.env.DOMAIN_BACKEND}${picture}`} width={400} height={400} alt={title} />
        <div className='relative' style={{ width: "-webkit-fill-available"}}>
            <div className="bg-white hover:bg-main-color hover:text-white px-6 py-5 static lg:absolute -left-5 top-10">
                <Link href={`/blog/${slug}`} className='font-semibold font-libre-caslon text-3xl mt-2'>
                    {title}
                </Link>
                <p className='font-semibold my-6'>
                    {content}
                </p>
                <p>
                    {moment(createdAt).format("MMM , D ,YYYY")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard