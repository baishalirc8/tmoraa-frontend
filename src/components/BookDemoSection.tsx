import React from 'react'
import GradientButton from './GradientButton'

export default function BookDemoSection() {
    return (
        <section data-aos="zoom-out" className="py-12 px-0 md:px-20 lg:px-40 flex justify-center items-center">
            <div
                className="w-full rounded-none lg:rounded-[100px] text-center bg-[url('/smart-cta-bg.png')] bg-cover bg-center bg-no-repeat px-8 py-16 md:px-16 lg:px-30 md:py-20 lg:py-20"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl text-black font-bold mb-10 lg:leading-20 sm:leading-9 md:leading-10 leading-9">
                    Ready to stop juggling tools and start making smarter moves?
                </h2>
                <p className="mb-10 text-base md:text-lg">Schedule a demo today!</p>

                <GradientButton onClick={() => {
                    const el = document.getElementById('contactUs');
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                }}>BOOK A DEMO</GradientButton>
            </div>
        </section>
    )
}