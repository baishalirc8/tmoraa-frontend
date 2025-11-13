import React from 'react'
import GradientButton from './GradientButton'

export default function BookDemoSection() {
    return (
        <section className="py-12 mx-40 flex justify-center items-center">
            <div
                className="rounded-[100px] text-center bg-[url('/smart-cta-bg.png')]  bg-cover bg-center bg-no-repeat px-30 py-24"
            >
                <h2 className="text-6xl text-black font-bold mb-10">
                    Ready to stop juggling tools and start making smarter moves?
                </h2>
                <p className=" mb-10 text-lg">Schedule a demo today!</p>

                <GradientButton>BOOK A DEMO </GradientButton>
            </div>
        </section>
    )
}
