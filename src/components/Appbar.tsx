'use client'

import React, { useState } from 'react'
import GradientOutlineButton from './GradientOutlineButton'
import GradientButton from './GradientButton'
import Image from 'next/image'
import Link from 'next/link'


const MenuIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
    >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);


const XIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);



export default function Appbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav data-aos="fade-down" className='sticky top-0 z-50 bg-white/2 backdrop-blur-md relative'>
            <div className="flex items-center justify-between py-4 px-6">

                <Link href="/" >
                    <Image src="/tmoraa-logo.png" alt="Tmoraa Logo" width={221} height={0} className="h-auto" />
                </Link>

                <ul className="hidden md:flex items-center space-x-16 ">
                    <li><Link href="#home" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Home</Link></li>
                    <li><Link href="#aboutUs" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent' >About Us</Link></li>
                    <li><Link href="#features" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Features</Link></li>
                    <li><Link href="#pricing" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Pricing</Link></li>
                    <li><Link href="#faq" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>FAQ</Link></li>
                    <li><Link href="#contactUs" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Contact Us</Link></li>
                </ul>

                <div className="hidden md:flex items-center space-x-4">
                    <GradientOutlineButton>Login</GradientOutlineButton>
                    <GradientButton>Sign up</GradientButton>
                </div>


                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="text-black focus:outline-none"
                    >
                        {isOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <div
                className={`
                    md:hidden absolute top-full left-0 right-0 z-40 
                    bg-white/90 backdrop-blur-md shadow-lg
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                `}
            >
                <ul className="flex flex-col items-center space-y-2 py-4">

                    <li><Link href="#home" onClick={() => setIsOpen(false)} className='block w-full text-center text-[#181818] text-base font-medium py-3 hover:bg-gray-100/50'>Home</Link></li>
                    <li><Link href="#aboutUs" onClick={() => setIsOpen(false)} className='block w-full text-center text-[#181818] text-base font-medium py-3 hover:bg-gray-100/50' >About Us</Link></li>
                    <li><Link href="#features" onClick={() => setIsOpen(false)} className='block w-full text-center text-[#181818] text-base font-medium py-3 hover:bg-gray-100/50'>Features</Link></li>
                    <li><Link href="#pricing" onClick={() => setIsOpen(false)} className='block w-full text-center text-[#181818] text-base font-medium py-3 hover:bg-gray-100/50'>Pricing</Link></li>
                    <li><Link href="#faq" onClick={() => setIsOpen(false)} className='block w-full text-center text-[#181818] text-base font-medium py-3 hover:bg-gray-100/50'>FAQ</Link></li>
                    <li><Link href="#contactUs" onClick={() => setIsOpen(false)} className='block w-full text-center text-[#181818] text-base font-medium py-3 hover:bg-gray-100/50'>Contact Us</Link></li>
                </ul>

                <div className="flex flex-col items-center space-y-4 p-4 border-t border-gray-200/50">
                    <GradientOutlineButton className="w-full justify-center">Login</GradientOutlineButton>
                    <GradientButton className="w-full justify-center">Sign up</GradientButton>
                </div>
            </div>
        </nav>
    )
}