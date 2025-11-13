import List from './List'

export default function ProblemSolutionSection() {
    return (
        <section className="overflow-x-hidden">
            <div className="mt-12 md:mt-20 flex justify-center items-center px-4">
                <h2 className="text-3xl md:text-5xl font-semibold text-black text-center">Problem & Solution</h2>
            </div>

            <div className="relative mt-12 md:mt-16 overflow-hidden">
                <img
                    src="/problem-bg.png"
                    alt=""
                    className="absolute left-0 top-4 h-132 w-[52%] object-cover opacity-80 hidden lg:block"
                />
                <img
                    src="/solution-bg.png"
                    alt=""
                    className="absolute -right-20 top-8 h-132 w-[65%] object-cover opacity-80 hidden lg:block"
                />
                <img
                    src="/blob-tear.png"
                    alt=""
                    className="absolute right-30 top-0 h-36 w-36 object-cover hidden lg:block"
                />
                <img
                    src="/seamlessly-ellipse-img.png"
                    alt=""
                    className="absolute left-0 top-136 object-cover -z-10 hidden lg:block"
                />

                <div className="relative z-10 container mx-auto px-0 md:px-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mt-16">

                        <div className='
                            lg:mr-40 // <-- CHANGED
                            p-6  md:p-0 md:rounded-none
                            bg-[linear-gradient(131.34deg,#E7F5FF_23.04%,#F9FCFE_88.6%)] md:bg-none
                        '>
                            <p className="text-3xl lg:text-4xl font-semibold mb-8">The Problem:</p>
                            <p className="mb-8 leading-[29px]">
                                Running an F&B business means managing a thousand moving parts—POS systems, shift planners, inventory trackers, reservation systems, and multiple review platforms.
                            </p>
                            <List className="mt-4 leading-[29px]">The result? Scattered data, inefficiencies, and lost opportunities.</List>
                            <List className="mt-4 leading-[29px]">Without a single source of truth, decisions are delayed and margins shrink.</List>
                        </div>


                        <div className='
                            md:mt-10 // <-- CHANGED
                            p-6 md:p-0 md:rounded-none
                            bg-[linear-gradient(273.66deg,#B7DEFA_17.27%,#FFFFFF_79.95%)] md:bg-none
                        '>
                            <p className="text-3xl lg:text-4xl font-semibold mt-4 mb-4">The Tmoraa Solution:</p>
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

                    <div className="mt-24 md:mt-40 lg:mt-60 mb-16 md:mb-28 text-center">
                        <h2 className="text-3xl md:text-5xl text-black font-semibold leading-tight md:leading-[58px] w-full max-w-[789px] mx-auto">
                            Seamlessly Connect Your Entire Tech Stack
                        </h2>
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