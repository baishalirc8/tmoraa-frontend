import React from 'react'
import List from './List'
import GradientButton from './GradientButton'

export default function BenefitSection() {
    return (

        <div className="relative mt-[100px] bg-[url('/benefit-bg.png')] bg-cover bg-center h-fit">
            <img src="/blob-tear.png" alt='' className='absolute left-15 top-15 h-32 w-32 z-30 object-cover' />
            <img src="/card-bg-top.png" alt='' className='absolute right-[47.5%] top-[7%] h-20 w-21 object-cover' />
            <img src="/card-bg-bottom.png" alt='' className='absolute right-[10.5%] top-[78.5%] h-20 w-20 object-cover' />
            <div className='flex'>
                <div className='pt-40 pb-30 pl-48 w-fit'>
                    <h2 className='text-4xl font-semibold'>Key Benefits</h2>
                    <List className='mt-10' imageSrc='/blt-one.png'>Unified dashboard for all operational data</List>
                    <List className='mt-4' imageSrc='/blt-one.png'>AI-driven forecasting and smart recommendations</List>
                    <List className='mt-4' imageSrc='/blt-one.png'>Real-time alerts for faster decision-making</List>
                    <List className='mt-4' imageSrc='/blt-one.png'>Streamlined operations and improved efficiency</List>
                    <List className='mt-4' imageSrc='/blt-one.png'>Save time, reduce costs, and maximize revenue</List>
                    <GradientButton className='mt-10'>Request a Demo</GradientButton>
                </div>

                <div className="my-25 ml-30 bg-background rounded-2xl w-[36%] z-10"></div>
            </div>

        </div>

    )
}
