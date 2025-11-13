import React from 'react'

export default function AboutSection() {
    return (
        <section>
            <div
                id="aboutUs"
                className="relative mt-5 bg-[#778EFF]/[0.14] h-fit text-foreground"
            >
                <img
                    src="/blob-tear.png"
                    alt=""
                    className="absolute left-15 top-15 h-48 w-48 z-30 object-cover"
                />

                <div className="grid grid-cols-2">
                    <div className="pt-52 pb-64 pl-64 pr-10">
                        <h2 className="text-5xl text-black font-semibold">About Tmoraa</h2>
                        <p className="mt-10 leading-[29px]">
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

                    <div className="relative my-25 ml-10 w-[75%]">
                        <img
                            src="/card-bg-top.png"
                            alt=""
                            className="absolute -top-12 -left-14 object-cover"
                        />

                        <div className="bg-background rounded-2xl w-[660px] h-[584px] z-10 relative"></div>

                        <img
                            src="/card-bg-bottom.png"
                            alt=""
                            className="absolute -bottom-12 -right-10  object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="relative my-32 mx-56">
                <img
                    src="/straight-quotes-top.png"
                    alt=""
                    className="absolute bottom-[84%] left-9 z-30"
                />
                <img
                    src="/quotes.png"
                    alt=""
                    className="absolute bottom-[5%] left-[60%] z-30 opacity-12"
                />
                <div className="bg-background rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-[5fr_2fr] gap-4">
                        <div className="pt-20 pb-10 pr-32">
                            <p className='text-[18px] leading-9'>
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
                            <p className="text-3xl font-bold mt-10">Kyrian Said</p>
                            <p className="mt-1 text-[#505050] text-lg">Founder & CEO</p>
                        </div>
                        <img src="/krn1.png" alt="Founder & CEO" className="size-96" />
                    </div>
                </div>
            </div>
        </section>
    )
}
