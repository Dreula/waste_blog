import React, {Fragment, useEffect, useRef, useState} from 'react'
import Link from 'next/link'

import { Menu, Transition } from '@headlessui/react'

const MENU_LIST = [

    { text: "Contact", href: "/contact" },
    { text: "About", href: "/about" },
    { text: "Event & Annoucement", href: "/announcement" },
    { text: "What We Collect", href: "/whatwecollect" },
    
  ];

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
 
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Menu as="div" className="relative">
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='lg:float-left block md:mt-3'>
                <Link href="/">
                    <span className='cursor-pointer font-bold lg:text-4xl text-2xl text-white'>
                        Brgy. Manuyo Uno
                    </span>
                </Link>
                <div className='float-right lg:hidden md:mt-3'>
                    <Menu.Button className="rounded-md bg-black bg-opacity-20 px-2.5 py-1.5 text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                
                    </Menu.Button>
                   
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

                <Menu.Items className="lg:hidden absolute z-40 right-0 mt-7 w-90 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
                    <div className="px-1 py-1">
                    {MENU_LIST.map((menu) => (
                                    <Link key={menu.text} href={menu.href} passHref>
                                        <span className={'flex w-full items-center rounded-md px-2 py-2 text-lg'}
                  >
                                            {menu.text}
                                        </span>
                                    </Link>
                                ))}
                    </div>
                </Menu.Items>
            </Transition>
            
            {/** Start editing for the Header content */}
            <div className='hidden lg:float-right lg:contents'>
                {MENU_LIST.map((menu) => (
                    <Link key={menu.text} href={menu.href} passHref>
                        <span className='md:float-right mt-2 text-white ml-10 font-semibold cursor-pointer'>
                            {menu.text}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
        </Menu>
    </div>
  )
}

export default Header