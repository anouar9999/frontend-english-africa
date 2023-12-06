"use client"
import React, { useState } from 'react'
import { Formik } from 'formik';
import axios from 'axios';

const ContactAdmissions = () => {
    const [success,setSuccess]=useState("")

  return (
    <div className='bg-[#F9F9F8] my-12 py-12 px-12'>
        <div className="container mx-auto">
            <h2 className="font-libre-caslon text-4xl font-extrabold title-banner-page">
                Contact our Deans of Admissions
            </h2>
            <Formik
                initialValues={{ name: '', email: '',phone:"",message:"" }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Please enter your name . This field is required.';
                    }
                    if (!values.email) {
                        errors.email = 'Please enter your email address. This field is required.';
                    }
                    if (!values.phone) {
                        errors.phone = 'Please enter your number. This field is required.';
                    }
                    if (!values.message) {
                        errors.message = 'Please enter your message. This field is required.';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting,resetForm  }) => {
                    setTimeout(() => {
                    
                    axios.post(`${process.env.API_URL}/contacts`,{
                        "data" : values
                    })
                    .then(res=>{
                        setSuccess("Thank you for contacting us! Your message has been successfully submitted.")
                        resetForm({ values: {  name: '', email: '',phone:"",message:"" } });
                    })
                    .catch(err=>{
                        setSuccess("We apologize, but there was an issue with your submission. Please review the form and make sure all required fields are filled out correctly.")
                    })
                    
                    
                    setSubmitting(false);
                    }, 400);
                }}
                    >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <h2 className="font-libre-caslon text-4xl font-extrabold title-banner-page">
                            Reach out to us
                        </h2>
                        <p className='text-main-color text-2xl font-semibold my-5 text-center'>
                            {success}
                        </p>
                        <div className='my-5'>
                            <input name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} className="border p-2 bg-white w-full" type="text" placeholder='Name *' />
                            <span className='text-red-400'>
                                {errors.name && touched.name && errors.name}
                            </span>
                        </div>
                        <div className='my-5'>
                            <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="border p-2 bg-white w-full" type="email" placeholder='Email *' />
                            <span className='text-red-400'>
                                {errors.email && touched.email && errors.email}
                            </span>
                        </div>
                        <div className='my-5'>
                            <input name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} className="border p-2 bg-white w-full" type="text" placeholder='Phone *' />
                            <span className='text-red-400'>
                                {errors.phone && touched.phone && errors.phone}
                            </span>
                        </div>
                        <div className='my-5'>
                            <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className="border p-2 bg-white w-full"  placeholder='Message *' rows="5"></textarea>
                            <span className='text-red-400'>
                                {errors.message && touched.message && errors.message}
                            </span>
                        </div>
                        <div>
                            <button type="submit" className='border-2 border-main-color rounded-3xl text-main-color px-12 py-2 mt-8'>
                                Contact
                            </button> 
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default ContactAdmissions