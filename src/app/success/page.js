import React from 'react'
import coche from "../../../public/coche.png"
import Image from 'next/image'
const page = () => {
  return (
    <div className='container mx-auto min-h-screen flex items-center justify-center'>
        <div className='text-center'>
            <div className="px-12 flex justify-center">
                <Image src={coche} width={"200"} height={"200"} alt="Thank You Page" />
            </div>
            <h2 className='text-8xl font-libre-caslon text-main-color'>
                Thank you !
            </h2>
            <p className='mt-5'>
                Your request has been received and is being reviewed by our support staff
            </p>
            <div className='border border-black rounded-md text-center py-6 px-12 mt-12'>
                <h5 className='text-4xl font-libre-caslon text-main-color'>
                Share with friends 
                </h5>
                <p>
                Help us spread the word by sharing our website with friends and followers on social media !
                </p>
                <div className="grid grid-cols-3 mt-12">
                    <button className='py-2 bg-main-color text-white'>
                        linkedin
                    </button>
                    <button className='py-2 bg-white border border-main-color text-main-color'>
                        Instagram
                    </button>
                    <button className='py-2 bg-main-color text-white'>
                        Facebook
                    </button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default page