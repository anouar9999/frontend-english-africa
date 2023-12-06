"use client"
import React, { Fragment } from 'react'
import { Popover, Transition,Dialog } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import DropDown from '@/components/DropDown'
import logo from "../../../public/newlogo.webp"


const Menu = () => {
  const links = [
    {
        link:<Link href={"/"} className='text-sm flex-wrap'>Home</Link>
    },
    {
        link:<Link href={"/why-choose-us"} className='text-sm flex-wrap'>Why choose us</Link>
    },
    {
        link:<DropDown title="Teacher Training Courses" slug={"/teacher-training-courses"} links={[{title:"Celta",link:"celta"},{title:"Delta",link:"delta"},{title:"TKT",link:"tkt"},{title:"CPDP",link:"cpdp"}] }/>
    },
    {
        link:<Link href={"/language-learning"} className='text-sm flex-wrap'>Language Learning</Link>
    },
    {
        link:<DropDown title="Clubs & Workshops" slug={"/courses-workshops"} links={[{title:"Adults",link:"adults"},{title:"Kids",link:"kids"}] }/>
    },
    {
        link:<Link href={"/contact"} className='text-sm flex-wrap'>Contact</Link>
    },
    {
        link:<Link href={"/blog"} className='text-sm flex-wrap'>Blog</Link>

    },
    
]
  return (
    <>
    <Popover className="bg-main-color">
        <div className="mx-auto px-8">
            <div className="flex items-center justify-between flex-row-reverse lg:flex-row py-2 lg:space-x-10">
                <div className="hidden lg:flex items-center px-5">
                    <Link href={"/"} className="logo">
                        <Image src={logo} width={"200"} height={"60"} alt="english for africa logo"  />
                    </Link>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
                    <ul className="flex flex-col  mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:">
                        {links.map(({link},index) => (
                            <li key={index} className='text-white'>
                                {link}
                            </li>
                            
                        ))}
                    </ul>
                </div>
                <div className="-my-2 -mr-2 lg:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Popover.Button>
                </div>
                <div className="block lg:hidden">
                    <Image src={"/newlogo.webp"} width={"200"} height={"60"} alt="english for africa logo"  />
                </div>
            </div>
        </div>
        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel style={{zIndex:111}} focus className="z-20 bg-white absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-end">
                            <div className="-mr-2">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 py-6 px-5">
                        <ul>
                            {links.map(({link},index) => (
                                <li key={index} data-headlessui-state="open" className='text-black py-2'>
                                <Popover.Button>
                                    {link}
                                </Popover.Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>
    </>
  )
}

export default Menu
