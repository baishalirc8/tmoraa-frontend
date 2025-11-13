import React from 'react'
import FeatureCard from './FeatureCard'

export default function HowItWorksSection() {
    return (
        <section className='relative h-fit'>
            <img src="/smart-bg-ellipse.png" alt='' className='absolute w-screen object-cover -z-50' />
            <img src="/mission-card-top.png" alt='' className='absolute left-40 top-[56%]  object-cover' />
            <img src="/mission-card-bottom.png" alt='' className='absolute right-40 bottom-[2%] object-cover' />
            <div className='pt-20 mb-15 flex justify-center items-center'>
                <h2 className='text-5xl text-black font-semibold'>Workflow</h2>
            </div>
            <div className='flex justify-center items-center space-x-3 mx-20'>
                <FeatureCard iconImg='/how-icon-1.png' description='Connect your existing POS, inventory, reservation system, and review tools.' />
                <FeatureCard iconImg='/how-icon-2.png' description='Watch as Tmoraa builds a live dashboard tailored to your business.' />
                <FeatureCard iconImg='/how-icon-3.png' description='Let AI handle forecasting, insights, and proactive alerts.' />
                <FeatureCard iconImg='/how-icon-4.png' description='Focus on what matters most—your guests and your growth.' />
            </div>
            <div className='flex justify-center items-center mt-15 space-x-1 text-[#0A80D2] text-xl'>
                <p>Ready to transform how your F&B business operates? Schedule a personalized <span className='font-semibold'>demo today</span>.</p>
            </div>
            <div className="grid grid-cols-2">
                <div className={'ml-60 mr-2 mt-32 mb-32 p-8 rounded-3xl bg-[#EAF8F3] z-30'}>
                    <p className='text-[26px] font-semibold mb-5 text-black' >Mission</p>
                    <p className='leading-[29px]' >At Tmoraa, we empower restaurants by seamlessly connecting their existing technology systems to deliver actionable, cross-system insights—without replacing what already works. We believe restaurant owners shouldn't have to choose between their trusted tools; they deserve a command center that makes those tools work together intelligently.</p>
                </div>
                <div className={'ml-2 mr-60 mt-44 mb-24 p-8 rounded-3xl bg-[#D8EFFF] z-30'}>
                    <p className='text-[26px] font-semibold mb-5 text-black' >Vision</p>
                    <p className='leading-[29px]'>To become the essential intelligence layer that transforms fragmented restaurant data into clear, profitable decisions worldwide—helping every restaurant operate with the precision of a command center while preserving their existing technology investments.</p>
                </div>
            </div>
        </section>
    )
}
