"use client"
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'


const Provider = ({children}) => {
  return (
    <>
        {children}
        <ScrollToTop smooth />
    </>
  )
}

export default Provider