import Image from 'next/image'
import React from 'react'

const Information = ({title,children,image}) => {
  return (
    <div>
        <div className="container mx-auto my-24 lg:px-12 px-4">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="font-libre-caslon text-4xl lg:text-6xl font-extrabold title-banner-page" dangerouslySetInnerHTML={{ __html : title}}>
                    </h2>
                    <div className='mt-12 lg:px-0 px-3'>
                        {children}
                    </div>
                </div>
                <div>
                    <Image src={image} width={700} height={400} alt="English for africa" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Information