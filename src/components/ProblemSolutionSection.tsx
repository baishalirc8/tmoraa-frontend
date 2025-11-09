import Image from 'next/image'
import React from 'react'
import GradientButton from './GradientButton'
import { Check } from 'lucide-react'
import List from './List'

export default function ProblemSolutionSection() {
    return (
        <>
            <div className='mt-20 flex justify-center items-center'>
                <h2 className='text-4xl font-semibold'>Problem & Solution</h2>
            </div>
            <div className='relative h-screen '>
                <img src="/problem-bg.png" alt='' className='absolute left-0 top-10 h-96 w-[52%] z-10 object-cover' />
                <img src="/solution-bg.png" alt='' className='absolute right-0 top-14 h-96 w-[60%] z-20 object-cover' />
                <img src="/blob-tear.png" alt='' className='absolute right-30 top-0 h-36 w-36 z-30 object-cover' />
                <img src="/seamlessly-ellipse-img.png" alt='' className='absolute left-0 top-100 object-cover' />
                <div className='absolute left-32 top-24 z-40 w-100'>
                    <p className='text-3xl' >The Problem:</p>
                    <p className='mt-5'>Running an F&B business means managing a thousand moving parts—POS systems, shift planners, inventory trackers, reservation systems, and multiple review platforms.</p>
                    <List className='mt-3'>The result? Scattered data, inefficiencies, and lost opportunities.</List>
                    <List className='mt-3'>Without a single source of truth, decisions are delayed and margins shrink.</List>
                </div>
                <div className='absolute right-32 top-28 z-40 w-132'>
                    <p className='text-3xl' >The Tmoraa Solution:</p>
                    <p className='mt-5 font-semibold'>Tmoraa brings order to the chaos with a centralized, AI-powered platform that:</p>
                    <List className='mt-3'>Consolidates all your F&B data in real-time</List>
                    <List className='mt-3'>Predicts performance trends and automates key actions</List>
                    <List className='mt-3'>Provides instant alerts for issues that need attention</List>
                    <List className='mt-3'>Reduces waste and optimizes labour costs</List>
                    <List className='mt-3'>Automatically generates insights and reports from your data</List>
                </div>
                <div className='absolute top-136 w-full z-40'>
                    <h2 className='text-4xl font-semibold flex justify-center'>Seamlessly Connect Your Entire</h2>
                    <h2 className='text-4xl font-semibold flex justify-center mt-1'>Tech Stack</h2>
                    <p className='mt-5 w-[80%] mx-auto text-center '>Tmoraa is designed for maximum compatibility and minimal friction. We provide robust, secure integrations with the leading technology providers across the F&B ecosystem to ensure a complete and accurate view of your business. Connect your data and start receiving unified, real-time insights immediately.</p>
                </div>
            </div>
        </>
    )
}
