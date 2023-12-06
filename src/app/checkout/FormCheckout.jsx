'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import Loading from '@/components/Loading';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);


// async function getOneCourse(courseId) {
//     const res = await fetch(`${process.env.API_URL}/courses/${courseId}?populate=*`,{ cache: 'no-store' });
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data');
//     }
//     return res.json();
// }

const getCourse = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem("course"))
   }
}


const FormCheckout =() => {
    // const searchParams = useSearchParams();
    // const courseId = searchParams.get('courseId');
    let course = getCourse()
    const [loading,setLoading] = useState(false)
    // const {data} = await getOneCourse(courseId)


    const handleCheckout = async ({attributes}) => {
        setLoading(true)
        const stripe = await stripePromise;
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: attributes.price * 100 ,title:attributes.title }), // Set your desired payment amount
        });
    
        const { sessionId } = await response.json();
    
    
        // Call Stripe to redirect the user to the checkout page
        const result = await stripe.redirectToCheckout({
            sessionId,
        });
    
        if (result.error) {
          // Handle any errors during redirection
          console.error(result.error);
        }
      
    };
    


  return (
    <div className='container mx-auto my-24'>
        {loading ? (
            <Loading />
        ) : (
            <div className="grid grid-cols-2">
                <div className='bg-gray-50 px-6 py-12'>
                    <h3 className='font-libre-caslon text-3xl font-semibold'>
                        Payment Details
                    </h3>
                    <h5 className='font-medium my-5'>
                        Complete your order by providing your payment details.
                    </h5>
                    <div>
                        <div className='my-5'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Full name</label>
                            <input type="text" 
                            id="first_name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5" 
                            placeholder="Full name" 
                            required />
                        </div>

                        <div className='my-5'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="text" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5" 
                            placeholder="Email" 
                            required />
                        </div>

                        <div className='my-5'>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                            <input type="text" 
                            id="phone" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5" 
                            placeholder="Phone" 
                            required />
                        </div>

                        <div className="my-5">
                            <button onClick={() => handleCheckout(course) } className='w-full bg-main-color text-white py-2 rounded-lg'>
                                Enroll Now
                            </button>
                        </div>
                    </div>

                </div>
                <div className='rounded-lg border bg-white px-6 py-12'>
                    <h3 className='font-libre-caslon text-3xl font-semibold'>
                        Order Summary
                    </h3>
                    <div className='grid grid-cols-4 mt-12 items-center'>
                        <div className='col-span-1'>
                            <Image src={`${process.env.DOMAIN_BACKEND}${course?.attributes.picture.data.attributes.url}`} width={"600"} height={"600"} alt={course?.attributes.title} />
                        </div>
                        <div className='px-6 col-span-3'>
                            <h5 className='text-3xl font-bold'>
                                {course?.attributes.title}
                            </h5>
                            <h6 className='text-[#A3A3A3] font-semibold my-3'>
                                {course?.attributes.category}
                            </h6>
                            <h6>
                                {course?.attributes.price} $
                            </h6>
                        </div>

                    </div>

                </div>
            </div>
        )}


    </div>
  )
}


export default FormCheckout