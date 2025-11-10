import React from 'react'

export default function AboutSection() {
    return (
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
    )
}