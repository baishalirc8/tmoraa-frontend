import React from 'react'
import Footer from './Footer'

export default function ContactUsSection() {
    return (
        <section id='contactUs' className='relative overflow-hidden'>
            <img src="/footer-bg.png" alt="" className='absolute bottom-0 left-0 -z-10 w-full h-auto object-cover' />

            <div className="py-16 flex justify-center px-0">
                <div
                    className="w-full max-w-4xl rounded-2xl bg-[url('/contact-card.png')] bg-cover bg-center bg-no-repeat shadow-lg p-6 md:p-10 lg:px-16 text-white"
                >
                    <div className="text-center mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            We’re Here To Help You Run Smarter
                        </h2>
                        <p className="text-sm mt-4 px-0 md:px-10 lg:px-20">
                            Have Questions or Need Expert Help? Ready to Guide You Through Setup, Demo & Support.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12">
                        <input
                            type="text"
                            placeholder="First name"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2 h-12"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none h-12"
                        />
                        <input
                            type="text"
                            placeholder="Company name"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2 h-12"
                        />
                        <textarea
                            placeholder="Message"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2 h-16"
                        ></textarea>

                        <div className='flex justify-end sm:col-span-2'>
                            {/* Responsive text size */}
                            <button
                                type="submit"
                                className='hover:underline text-lg md:text-[20px] cursor-pointer'
                            >
                                Let’s Start the Conversation →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    )
}