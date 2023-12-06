import React from 'react'
import 'material-icons/iconfont/material-icons.css'
import Image from 'next/image'

  

const AdmissionsProcess = ({title,data}) => {
  // const data = [
  //   {
  //     title : "Complete the application documents",
  //     text : "Download, complete, and return documents to us by email",
  //     icon:'/icons/send.png'
  //   },
  //   {
  //     title : "Apply on our courses page.",
  //     text : "Select and pay for the courses you would like to attend.",
  //     icon:'/icons/info.png'
  //   },
  //   {
  //     title : "Submit",
  //     text : "Our team will contact you upon reception of your application documents",
  //     icon:'/icons/message.png'
  //   },

  // ]
  return (
    
    <div className='container mx-auto py-24'>
      <h2 className='text-5xl font-bold font-libre-caslon text-center'>
        {title}
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-2 gap-12 mt-12">
        {data.map((avis,index) => (
          <div className="card px-12 py-12" key={index}>
              <div>
                <Image src={`${process.env.DOMAIN_BACKEND}${avis.icon.data.attributes.url}`} alt={title} width={"45"} height={"45"} />
              </div>
              <h5 className='font-libre-caslon text-3xl font-semibold my-5'>
                {avis.Title}
              </h5>
              <p className='text-[#333333] text-sm pr-5'>
              {avis.text}
              </p>
          </div>
        ))}

      </div>
      
    </div>
  )
}

export default AdmissionsProcess