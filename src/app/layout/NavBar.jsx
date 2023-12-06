import DropDown from '@/components/DropDown'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const links = [
        {
            link:<Link href={"/"} className='text-sm flex-wrap'>Home</Link>
        },
        {
            link:<Link href={"/why-choose-us"} className='text-sm flex-wrap'>Why choose us</Link>
        },
        {
            link:<DropDown title="Teacher Training Courses" slug={"/teacher-training-courses"} links={[{title:"Cambridge CELTA",link:"celta"},{title:"Cambridge DELTA",link:"delta"},{title:"TKT",link:"tkt"},{title:"Short Courses",link:"short-courses"}] }/>
        },
        {
            link:<Link href={"/language-learning"} className='text-sm flex-wrap'>Language Learning</Link>
        },
        {
            link:<DropDown title="Courses & Workshops" slug={"/courses-workshops"} links={[{title:"Adults",link:"adults"},{title:"Kids",link:"kids"}] }/>
        },
        {
            link:<Link href={"/teacher-training-courses"} className='text-sm flex-wrap'>Contact</Link>
        },
        {
            link:<Link href={"/blog"} className='text-sm flex-wrap'>Blog</Link>

        },
        
    ]
  return (
    <div className="bg-main-color">
        <div className='container mx-auto'>
            <div className="flex justify-between items-center py-3">
                <Link href={"/"} className="logo">
                    <Image src={"/newlogo.webp"} width={"200"} height={"60"} alt="english for africa logo"  />
                </Link>
                <div className="nav-links">
                    <ul className='flex gap-5 text-white'>
                        {links.map(({link},index) => (
                            <li key={index} >
                                {link}
                            </li>
                            
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar