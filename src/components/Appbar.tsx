'use client'

import React from 'react'
import GradientOutlineButton from './GradientOutlineButton'
import GradientButton from './GradientButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Appbar() {

    return (
        <nav className='sticky top-0 z-50 bg-white/2 backdrop-blur-md'>
            <div className="flex items-center justify-between py-4 px-6">
                <Image src="/tmoraa-logo.png" alt="Tmoraa Logo" width={221} height={0} />

                <ul className="flex items-center space-x-16 ">
                    <li><Link href="#home" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Home</Link></li>

                    <li><Link href="#aboutUs" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent' >About Us</Link></li>

                    <li><Link href="#features" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Features</Link></li>

                    <li><Link href="#pricing" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Pricing</Link></li>

                    <li><Link href="#faq" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>FAQ</Link></li>

                    <li><Link href="#contactUs" className='text-[#181818] bg-transparent rounded-full text-base font-medium focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent'>Contact Us</Link></li>
                </ul>

                <div className="flex items-center space-x-4">
                    <GradientOutlineButton>Login</GradientOutlineButton>
                    <GradientButton>Sign up</GradientButton>
                </div>
            </div>
        </nav>
    )
}