import Image from 'next/image'
import React from 'react'
import GradientButton from './GradientButton'
import { Check } from 'lucide-react'
import List from './List'

export default function ProblemSolutionSection() {
    return (
        <section>
            <div className="mt-20 flex justify-center items-center">
                <h2 className="text-5xl font-semibold text-black">Problem & Solution</h2>
            </div>

            <div className="relative mt-16 overflow-hidden">
                {/* Background images */}
                <img
                    src="/problem-bg.png"
                    alt=""
                    className="absolute left-0 top-4 h-132 w-[52%] object-cover opacity-80"
                />
                <img
                    src="/solution-bg.png"
                    alt=""
                    className="absolute -right-20 top-8 h-132 w-[65%] object-cover opacity-80"
                />
                <img
                    src="/blob-tear.png"
                    alt=""
                    className="absolute right-30 top-0 h-36 w-36 object-cover"
                />
                <img
                    src="/seamlessly-ellipse-img.png"
                    alt=""
                    className="absolute left-0 top-136 object-cover -z-10"
                />

                {/* Text sections */}
                <div className="relative z-40 container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        {/* Problem section */}
                        <div className='mt-8 mr-40'>
                            <p className="text-4xl font-semibold mb-8">The Problem:</p>
                            <p className="mb-8 leading-[29px]">
                                Running an F&B business means managing a thousand moving parts—POS systems, shift planners, inventory trackers, reservation systems, and multiple review platforms.
                            </p>
                            <List className="mt-4 leading-[29px]">The result? Scattered data, inefficiencies, and lost opportunities.</List>
                            <List className="mt-4 leading-[29px]">Without a single source of truth, decisions are delayed and margins shrink.</List>
                        </div>

                        {/* Solution section */}
                        <div className='mt-10'>
                            <p className="text-4xl font-semibold mt-4 mb-4">The Tmoraa Solution:</p>
                            <p className="mt-8 font-semibold">
                                Tmoraa brings order to the chaos with a centralized, AI-powered platform that:
                            </p>
                            <List className="mt-8">Consolidates all your F&B data in real-time</List>
                            <List className="mt-4">Predicts performance trends and automates key actions</List>
                            <List className="mt-4">Provides instant alerts for issues that need attention</List>
                            <List className="mt-4">Reduces waste and optimizes labour costs</List>
                            <List className="mt-4">Automatically generates insights and reports from your data</List>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="mt-60 mb-28 text-center">
                        <h2 className="text-5xl text-black font-semibold leading-[58px] w-[789px] mx-auto">Seamlessly Connect Your Entire Tech Stack</h2>
                        <p className="mt-5 w-full md:w-4/5 mx-auto leading-[29px]">
                            Tmoraa is designed for maximum compatibility and minimal friction. We provide robust, secure integrations
                            with the leading technology providers across the F&B ecosystem to ensure a complete and accurate view of
                            your business. Connect your data and start receiving unified, real-time insights immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
