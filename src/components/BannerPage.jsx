import React from 'react'

const BannerPage = ({title,backgroundImage,subTitle}) => {
  return (
    <div className='bg-main-banner' style={{backgroundImage:`url(${backgroundImage})`}}>
        <div className="container mx-auto py-24">
            <div className="font-libre-caslon  text-white title-banner-page mx-5 lg:mx-0 ">
              <h2 className='text-4xl lg:text-6xl font-bold'>
                {title}
              </h2>
              {subTitle && (
                <h5 className='font-semibold text-2xl lg:text-4xl'>
                  {subTitle}
                </h5>
              )}
            </div>
        </div>
    </div>
  )
}

export default BannerPage