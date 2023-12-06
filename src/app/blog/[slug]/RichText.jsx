import React from 'react'
import remarkGfm from 'remark-gfm'
import Markdown from "react-markdown";


const RichText = ({content}) => {
  return (
    <section className="rich-text py-6 dark:bg-black dark:text-gray-50 ">
          <Markdown remarkPlugins={[remarkGfm]}>
            {content}
            </Markdown>
    </section>
  )
}

export default RichText