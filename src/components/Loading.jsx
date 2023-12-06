import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[40vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default Loading