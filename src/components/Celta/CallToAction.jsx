"use client"
import React from 'react'
import dataFile from "../../../public/adults.jpeg"
import { saveAs } from 'file-saver';


const CallToAction = ({bgColor,title}) => {
    const handleClick=()=>{
      // fileDownload(dataFile, 'Efa.zip');
      saveAs("/celta/CELTA Application Documents.zip","CELTA Application Documents.zip")
    }
  return (
    <button onClick={handleClick} className={`${bgColor ? bgColor : "bg-main-color"} lg:w-auto w-full py-3 px-12  text-white font-semibold text-xl mt-5`}>
      {title ? title: "Brochure"}
    </button>
  )
}

export default CallToAction