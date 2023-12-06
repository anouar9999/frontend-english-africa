"use client"
import React from 'react'
import dataFile from "../../../public/adults.jpeg"
import { saveAs } from 'file-saver';


const CallToActionDelta = ({bgColor,title}) => {
    const handleClick=()=>{
      // fileDownload(dataFile, 'Efa.zip');
      saveAs("/delta/DELTA Application Documents.zip","DELTA Application Documents.zip")
    }
  return (
    <button onClick={handleClick} className={`bg-main-color lg:w-auto w-full py-3 px-12  text-white font-semibold text-xl mt-5`}>
      {title}
    </button>
  )
}

export default CallToActionDelta