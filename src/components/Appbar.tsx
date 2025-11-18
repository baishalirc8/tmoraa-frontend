'use client'

import React, { useState } from 'react'
import GradientOutlineButton from './GradientOutlineButton'
import GradientButton from './GradientButton'
import Image from 'next/image'
import Link from 'next/link'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { toast } from 'sonner'


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



export default function Appbar({ activeSection }: { activeSection: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav data-aos="fade-down" className='sticky top-0 z-50 bg-white/2 backdrop-blur-md relative'>
            <div className="flex items-center justify-between py-4 px-6">

                <Link href="/" >
                    <Image src="/tmoraa-logo.png" alt="Tmoraa Logo" width={221} height={0} className="h-auto" />
                </Link>

                <ul className="hidden md:flex items-center space-x-16 ">
                    <li>
                        <Link
                            href="#home"
                            className={`
                                web application text-base font-medium focus:outline-none
                                hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2]
                                hover:bg-clip-text hover:text-transparent
                                ${activeSection === "home"
                                    ? "bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent"
                                    : "text-[#181818]"
                                }
                            `}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#aboutUs"
                            className={`
                            web application text-base font-medium focus:outline-none
                            hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2]
                            hover:bg-clip-text hover:text-transparent
                            ${activeSection === "aboutUs"
                                    ? "bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent"
                                    : "text-[#181818]"
                                }
                            `}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#features"
                            className={`
                            web application text-base font-medium focus:outline-none
                            hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2]
                            hover:bg-clip-text hover:text-transparent
                            ${activeSection === "features"
                                    ? "bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent"
                                    : "text-[#181818]"
                                }
                            `}
                        >
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#pricing"
                            className={`
                        web application text-base font-medium focus:outline-none
                        hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2]
                        hover:bg-clip-text hover:text-transparent
                        ${activeSection === "pricing"
                                    ? "bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent"
                                    : "text-[#181818]"
                                }
                        `}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#faq"
                            className={`
                        web application text-base font-medium focus:outline-none
                        hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2]
                        hover:bg-clip-text hover:text-transparent
                        ${activeSection === "faq"
                                    ? "bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent"
                                    : "text-[#181818]"
                                }
                        `}
                        >
                            FAQ
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#contactUs"
                            className={`
                        web application text-base font-medium focus:outline-none
                        hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2]
                        hover:bg-clip-text hover:text-transparent
                        ${activeSection === "contactUs"
                                    ? "bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent"
                                    : "text-[#181818]"
                                }
                        `}
                        >
                            Contact Us
                        </Link>
                    </li>

                </ul>

                <div className="hidden md:flex items-center space-x-4">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <GradientOutlineButton>Login</GradientOutlineButton>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Coming Soon</AlertDialogTitle>
                                <AlertDialogDescription>
                                    We are putting the finishing touches on the web application. We will be live very soon.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className='cursor-pointer px-6 py-3.5 font-medium text-white hover:text-white rounded-full bg-linear-to-r from-[#29b47d] to-[#0a80d2] hover:from-[#0a80d2] hover:to-[#29b47d]'>Close</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <GradientButton>Sign Up</GradientButton>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Coming Soon</AlertDialogTitle>
                                <AlertDialogDescription>
                                    We are putting the finishing touches on the web application. We will be live very soon.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className='cursor-pointer px-6 py-3.5 font-medium text-white hover:text-white rounded-full bg-linear-to-r from-[#29b47d] to-[#0a80d2] hover:from-[#0a80d2] hover:to-[#29b47d]'>Close</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
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
                    <GradientOutlineButton className="w-full justify-center" onClick={() =>
                        toast("Coming Soon", {
                            description: "We are putting the finishing touches on the web application. We will be live very soon.",
                            position: "top-center",
                            className: "max-w-[350px] text-base!",
                            richColors: true,
                        })
                    } >Login</GradientOutlineButton>
                    <GradientButton className="w-full justify-center" onClick={() =>
                        toast("Coming Soon", {
                            description: "We are putting the finishing touches on the web application. We will be live very soon.",
                            position: "top-center",
                            className: "max-w-[350px] text-base!",
                            richColors: true,
                        })
                    }> Sign up</GradientButton>
                </div>
            </div>
        </nav >
    )
}