'use client'

import React from 'react'
import GradientOutlineButton from './GradientOutlineButton'
import GradientButton from './GradientButton'
import LinkButton from './LinkButton'
import Image from 'next/image'

export default function Appbar() {

    const handleScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='sticky top-0 z-50 bg-white/2 backdrop-blur-md'>
            <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <Image src="/tmoraa-logo.png" alt="Tmoraa Logo" width={200} height={0} />

                {/* Navigation Links */}
                <div className="flex items-center space-x-8">
                    <LinkButton onClick={() => {
                        handleScroll("home")
                    }}>Home</LinkButton>
                    <LinkButton onClick={() => {
                        handleScroll("aboutUs")
                    }} >About Us</LinkButton>
                    <LinkButton onClick={() => {
                        handleScroll("features")
                    }}>Features</LinkButton>
                    <LinkButton onClick={() => {
                        handleScroll("pricing")
                    }}>Pricing</LinkButton>
                    <LinkButton onClick={() => {
                        handleScroll("faq")
                    }}>FAQ</LinkButton>
                    <LinkButton onClick={() => {
                        handleScroll("contactUs")
                    }}>Contact Us</LinkButton>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <GradientOutlineButton>Login</GradientOutlineButton>
                    <GradientButton>Sign up</GradientButton>
                </div>
            </div>
        </div>
    )
}
