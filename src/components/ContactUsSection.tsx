import React from 'react'
import Footer from './Footer'

export default function ContactUsSection() {
    return (
        <section id='contactUs' className='relative'>
            <img src="/footer-bg.png" alt="" className='absolute bottom-0 left-0 -z-10' />
            <div className="py-16 flex justify-center">
                <div
                    className="w-full max-w-3xl rounded-2xl bg-[url('/contact-card.png')] bg-cover bg-center bg-no-repeat shadow-lg p-10 text-white"
                >
                    <div className="text-center mb-20">
                        <h2 className="text-2xl font-semibold">
                            We’re Here To Help You Run Smarter
                        </h2>
                        <p className="text-sm mt-2">
                            Have Questions or Need Expert Help? Ready to Guide You Through Setup, Demo & Support.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                        <input
                            type="text"
                            placeholder="First name"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Company name"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2"
                        />
                        <textarea
                            placeholder="Message"
                            className="bg-transparent border-b border-white placeholder-white/80 focus:outline-none sm:col-span-2 h-16"
                        ></textarea>

                        <div className='flex justify-end sm:col-span-2'>
                            <button
                                type="submit"
                                className='hover:underline'
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
