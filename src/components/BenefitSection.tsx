import React from 'react'
import List from './List'
import GradientButton from './GradientButton'
import Image from 'next/image';

export default function BenefitSection() {
    return (

        <section className="relative bg-[url('/benefit-bg.png')] lg:bg-cover lg:bg-center lg:bg-transparent bg-[#77CAFF24] h-fit overflow-x-hidden overflow-y-hidden">
            <img
                src="/blob-tear.png"
                alt=""
                className="absolute left-15 top-15 h-48 w-48 z-30 object-cover hidden lg:block"
            />

            <div className="flex flex-col lg:flex-row items-center">

                {/* Text Section */}
                <div className="pt-24 pb-16 lg:pt-52 lg:pb-55 px-6 lg:pl-64 lg:px-0 w-full lg:w-fit text-left">
                    <h2 data-aos="fade-right" className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold">Key Benefits</h2>
                    <div data-aos="fade-right">
                        <List className="mt-10" imageSrc="/blt-one.png">
                            Unified dashboard for all operational data
                        </List>
                        <List className="mt-4" imageSrc="/blt-one.png">
                            AI-driven forecasting and smart recommendations
                        </List>
                        <List className="mt-4" imageSrc="/blt-one.png">
                            Real-time alerts for faster decision-making
                        </List>
                        <List className="mt-4" imageSrc="/blt-one.png">
                            Streamlined operations and improved efficiency
                        </List>
                        <List className="mt-4" imageSrc="/blt-one.png">
                            Save time, reduce costs, and maximize revenue
                        </List>
                    </div>
                    <GradientButton data-aos="fade-left" className="mt-10 mx-auto lg:mx-0" onClick={() => {
                        const el = document.getElementById('contactUs');
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>Request a Demo</GradientButton>
                </div>

                {/* Image Section */}
                <div className="relative my-0 lg:my-25 lg:ml-32 w-full lg:w-[55%] px-6 lg:px-0 lg:pb-0 pb-20">
                    <img
                        data-aos="fade-down-right"
                        src="/card-bg-top.png"
                        alt=""
                        className="absolute -top-12 -left-14 object-cover hidden lg:block"
                    />

                    <div data-aos="zoom-in" className="bg-background rounded-2xl w-full lg:w-[850px] z-10 relative overflow-hidden shadow-lg">
                        <Image
                            src="/dashboard.png"
                            alt="Dashboard preview"
                            width={1904}
                            height={1079}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, 850px"
                        />
                    </div>

                    <img
                        data-aos="fade-up-left"
                        src="/card-bg-bottom.png"
                        alt=""
                        className="absolute -bottom-16 right-30 object-cover hidden lg:block"
                    />
                </div>
            </div>
        </section>
    )
}