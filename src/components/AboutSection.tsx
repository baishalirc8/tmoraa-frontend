import React from 'react'
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section>

            <div
                id="aboutUs"
                className="relative mt-5 bg-[#778EFF]/[0.14] h-fit text-foreground overflow-hidden" // Added overflow-hidden
            >
                <img
                    src="/blob-tear.png"
                    alt=""

                    className="absolute left-4 top-4 h-24 w-24 
                               md:left-15 md:top-15 md:h-48 md:w-48 z-30 object-cover"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="pt-28 pb-16 px-6 lg:pt-52 lg:pb-64 lg:pl-64 lg:pr-10 z-10">
                        <h2 className="text-3xl md:text-5xl text-black font-semibold">About Tmoraa</h2>
                        <p className="mt-6 md:mt-10 leading-[29px]">
                            Tmoraa is the restaurant industry's first true command
                            center—aggregating data from your existing POS, inventory, and
                            reservation systems to reveal insights you've never had access to
                            before. Unlike traditional restaurant management tools that force
                            you to replace your current systems, Tmoraa enhances what you
                            already have, delivering a unified view of your operations in
                            minutes, not months. We're the only solution that takes direct
                            action only where it matters most—shift management—while providing
                            clear guidance for all other operational decisions with simple
                            "Open in Vendor App" instructions. In a world of disconnected
                            restaurant technology, Tmoraa is where everything connects.
                        </p>
                    </div>

                    <div className="relative my-16 mx-6 lg:my-25 lg:ml-10 lg:mr-0 lg:w-[75%]">
                        <img
                            src="/card-bg-top.png"
                            alt=""
                            className="hidden lg:block absolute -top-12 -left-14 object-cover"
                        />

                        <div className="bg-background rounded-2xl w-full h-96 lg:w-[660px] lg:h-[584px] z-10 relative overflow-hidden">
                            <Image
                                src="/reports.png"
                                alt="Reports preview"
                                fill
                                className="object-cover object-left"
                            />
                        </div>

                        <img
                            src="/card-bg-bottom.png"
                            alt=""
                            className="hidden lg:block absolute -bottom-12 -right-10 object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="relative my-16 mx-6 lg:my-32 lg:mx-56">
                <img
                    src="/straight-quotes-top.png"
                    alt=""
                    className="absolute bottom-[95%] left-4 w-16 
                                md:bottom-[84%] md:left-9 md:w-auto z-30"
                />
                <img
                    src="/quotes.png"
                    alt=""
                    className="absolute bottom-[5%] left-[60%] w-24 
                                md:w-auto z-30 opacity-12"
                />

                <div className="bg-background rounded-2xl shadow-[0px_85.26px_181.4px_0px_#15151526] p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-8 md:gap-4">
                        <div className="pt-10 md:pt-20 pb-10 pr-0 lg:pr-32 order-last lg:order-0">
                            <p className='text-base md:text-[18px] leading-8 md:leading-9'>
                                Kyrian Said is a technological architecture expert with 4 years
                                of specialized experience building scalable data orchestration
                                platforms at a leading tech company, while simultaneously
                                scaling multiple ventures across digital and manufacturing
                                sectors. Born in France but raised entirely in the UAE, he
                                leveraged his deep understanding of system integration to create
                                Tmoraa—solving the real-world restaurant operations challenges
                                he observed across Dubai's vibrant dining scene by building the
                                industry's first true command center that intelligently connects
                                existing systems without replacement.
                            </p>
                            <p className="text-2xl md:text-3xl font-bold mt-8 md:mt-10">Kyrian Said</p>
                            <p className="mt-1 text-[#505050] text-lg">Founder & CEO</p>
                        </div>
                        <img
                            src="/krn1.png"
                            alt="Founder & CEO"
                            className="size-64 md:size-96 mx-auto lg:mx-0 order-first lg:order-0 rounded-full object-cover"
                        />

                    </div>
                </div>

            </div>
        </section>
    )
}