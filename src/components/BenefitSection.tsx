import React from 'react'
import List from './List'
import GradientButton from './GradientButton'

export default function BenefitSection() {
    return (

        <section className="relative bg-[url('/benefit-bg.png')] lg:bg-cover lg:bg-center lg:bg-transparent bg-[#77CAFF24] h-fit overflow-x-hidden ">
            <img
                src="/blob-tear.png"
                alt=""
                className="absolute left-15 top-15 h-48 w-48 z-30 object-cover hidden lg:block"
            />

            <div className="flex flex-col lg:flex-row">

                <div className="pt-24 pb-16 lg:pt-52 lg:pb-55 px-6 lg:pl-64 lg:px-0 w-full lg:w-fit text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold">Key Benefits</h2>
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
                    <GradientButton className="mt-10 mx-auto lg:mx-0">Request a Demo</GradientButton>
                </div>

                <div className="relative my-0 lg:my-25 lg:ml-52 w-full lg:w-[36%] px-6 lg:px-0 lg:pb-0 pb-20">
                    <img
                        src="/card-bg-top.png"
                        alt=""
                        className="absolute -top-12 -left-14 object-cover hidden lg:block"
                    />

                    <div className="bg-background rounded-2xl w-full h-[400px] sm:h-[500px] lg:w-[660px] lg:h-[584px] z-10 relative">
                    </div>

                    <img
                        src="/card-bg-bottom.png"
                        alt=""
                        className="absolute -bottom-16 -right-15 object-cover hidden lg:block"
                    />
                </div>
            </div>
        </section>
    )
}