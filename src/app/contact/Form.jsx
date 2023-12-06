"use client"
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";
import Image from 'next/image';
import docsIcon from "../../../public/icons/docs.png"
import { Annie_Use_Your_Telescope } from 'next/font/google';
import Loading from '@/components/Loading';





const Form = ({data,title}) => {
    const [success,setSuccess]=useState("")
    const fileTypes = ['JPG', 'JPEG', 'PNG','DOC', 'DOCX','PDF'];
    const [files, setFiles] = useState([]);
    const [loading,setLoading]=useState(false)

    const handleChangeFile = (uploadFile) => {
        let updatedArray=[...files]
        for(let i=0; i<uploadFile.length;i++){
            updatedArray.push(uploadFile[i])
        }
        setFiles(updatedArray);
      };

      const removeFile=(fileName)=>{
        const updatedArray=files.filter((file)=>file.name != fileName)
        setFiles(updatedArray)
      }

      

  return (
    <div className='bg-[#F9F9F8] py-12 px-12'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                    setLoading(true)
                    const formData = new FormData();
                    formData.append("data",JSON.stringify(values));
                    files.map(file=>{
                        formData.append("files.docs",file);
                    })
                    axios.post(`${process.env.API_URL}/contacts`,formData,{
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                    .then(res=>{
                        setSuccess("Thank you for contacting us! Your message has been successfully submitted.")
                        resetForm({ values: {  name: '', email: '',phone:"",message:"" } });
                        setFiles([])
                        setLoading(false)
                    })
                    .catch(err=>{
                        setLoading(false)
                        setSuccess("We apologize, but there was an issue with your submission. Please review the form and make sure all required fields are filled out correctly.")
                    })
                    setSubmitting(false);
        
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
                         {title}
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
                        <FileUploader
                            multiple={true}
                            handleChange={handleChangeFile}
                            name="file"
                            types={fileTypes}
                            className="w-full"
                        />

                        <div className='grid grid-cols-3 gap-5 mt-12'>
                            {files.map(file => (
                                <div key={file.name} className='flex flex-col justify-between border-l border-2 p-5'>
                                    <div onClick={()=>removeFile(file.name)} className='flex justify-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='#FF0000' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    {file.type.startsWith('image/') ? (
                                        <Image src={URL.createObjectURL(file)} alt={file.name} width={75} height={75} />
                                    ) : (
                                        <Image src={docsIcon} alt={file.name} width={75} height={75} />
                                    )}
                                    <span className='text-xs'>
                                        {file.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div>
                            {loading ? 
                                <Loading />
                            :
                                <button type="submit" className='border-2 border-main-color rounded-3xl text-main-color px-12 py-2 mt-8'>
                                    Contact
                                </button> 
                            }
                        </div>
                    </form>
                )}
            </Formik>
               
                <div className='gap-5'>
                    <h2 className="font-libre-caslon text-4xl font-extrabold title-banner-page">
                       {data.ContactInfo.Title}
                    </h2>
                    <ul className='flex flex-col gap-5 mt-5'>
                        <li className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-color">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className='text-xl'>
{data.ContactInfo.Address}                        </p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-color">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <p className='text-xl'>
{data.ContactInfo.Number}                            </p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-color">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <a href='mailto:admin@englishforafrica.net' className='text-xl'>
{data.ContactInfo.email}                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form