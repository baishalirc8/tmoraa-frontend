import React from 'react'
import List from './List'
import GradientButton from './GradientButton'

export default function BenefitSection() {
    return (
        <div className="relative bg-[url('/benefit-bg.png')] bg-cover bg-center h-fit">
            <img
                src="/blob-tear.png"
                alt=""
                className="absolute left-15 top-15 h-32 w-32 z-30 object-cover"
            />

            <div className="flex">
                {/* LEFT CONTENT */}
                <div className="pt-40 pb-30 pl-48 w-fit">
                    <h2 className="text-4xl font-semibold">Key Benefits</h2>
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

                <div className="relative my-25 ml-88 w-[36%]">
                    <img
                        src="/card-bg-top.png"
                        alt=""
                        className="absolute -top-14 -left-14 h-20 w-22 object-cover"
                    />

                    <div className="bg-background rounded-2xl w-full h-full min-h-[400px] z-10 relative"></div>

                    <img
                        src="/card-bg-bottom.png"
                        alt=""
                        className="absolute -bottom-10 -right-10 h-20 w-20 object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
