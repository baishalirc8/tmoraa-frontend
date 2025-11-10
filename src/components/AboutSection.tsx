import React from 'react'

export default function AboutSection() {
    return (
        <>
            <div className='relative mt-5 bg-[#778EFF]/[0.14] h-fit text-foreground'>
                <img src="/blob-tear.png" alt='' className='absolute left-15 top-15 h-28 w-28 z-30 object-cover' />
                <img src="/card-bg-top.png" alt='' className='absolute right-[46.5%] top-12 h-20 w-21 object-cover' />
                <img src="/card-bg-bottom.png" alt='' className='absolute right-[8%] bottom-16 h-20 w-20 object-cover' />             
                <div className="grid grid-cols-2">
                    <div className='py-36 pl-44 pr-10'>
                        <h2 className='text-4xl font-semibold'>About Tmoraa</h2>
                        <p className='mt-10'>Tmoraa is the restaurant industry's first true command center—aggregating data from your existing POS, inventory, and reservation systems to reveal insights you've never had access to before. Unlike traditional restaurant management tools that force you to replace your current systems, Tmoraa enhances what you already have, delivering a unified view of your operations in minutes, not months. We're the only solution that takes direct action only where it matters most—shift management—while providing clear guidance for all other operational decisions with simple "Open in Vendor App" instructions. In a world of disconnected restaurant technology, Tmoraa is where everything connects.</p>
                    </div>
                    <div className="my-25 ml-5 bg-background rounded-2xl w-[75%] z-10"></div>
                </div>
            </div>
            <div className='relative my-20 mx-32'>
                <img src="/straight-quotes-top.png" alt="" className='absolute bottom-[80%] left-9 z-30' />
                <img src="/quotes.png" alt="" className='absolute bottom-[5%] left-[56%] z-30 opacity-12' />
                 <div className="bg-background rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-[5fr_2fr] gap-4">
                        <div className='pt-20 pb-10 pr-20'>
                            <p>Kyrian Said is a technological architecture expert with 4 years of specialized experience building scalable data orchestration platforms at a leading tech company, while simultaneously scaling multiple ventures across digital and manufacturing sectors. Born in France but raised entirely in the UAE, he leveraged his deep understanding of system integration to create Tmoraa—solving the real-world restaurant operations challenges he observed across Dubai's vibrant dining scene by building the industry's first true command center that intelligently connects existing systems without replacement.</p>
                            <p className='text-2xl font-semibold mt-10'>Kyrian Said</p>
                            <p className='mt-1 text-muted-foreground'>Founded & CEO</p>
                        </div>
                        <img src="/krn1.png" alt="Founder & CEO" className='pt-5'/>
                    </div>
                 </div>
            </div>
        </>
    )
}