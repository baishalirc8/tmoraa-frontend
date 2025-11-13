import React from 'react'
import List from './List'
import GradientButton from './GradientButton'

export default function BenefitSection() {
    return (
        <section className="relative bg-[url('/benefit-bg.png')] bg-cover bg-center h-fit">
            <img
                src="/blob-tear.png"
                alt=""
                className="absolute left-15 top-15 h-48 w-48 z-30 object-cover"
            />

            <div className="flex">
                <div className="pt-52 pb-55 pl-64 w-fit">
                    <h2 className="text-5xl text-black font-semibold">Key Benefits</h2>
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
                    <GradientButton className="mt-10">Request a Demo</GradientButton>
                </div>

                <div className="relative my-25 ml-52 w-[36%]">
                    <img
                        src="/card-bg-top.png"
                        alt=""
                        className="absolute -top-12 -left-14 object-cover"
                    />

                    <div className="bg-background rounded-2xl w-[660px] h-[584px] z-10 relative"></div>

                    <img
                        src="/card-bg-bottom.png"
                        alt=""
                        className="absolute -bottom-16 -right-15 object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
