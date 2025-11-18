import FeatureCard from './FeatureCard'

export default function HowItWorksSection() {
    return (
        <section className='relative h-fit overflow-hidden'>
            <img src="/smart-bg-ellipse.png" alt='' className='absolute w-screen object-cover -z-50' />
            <img data-aos="fade-down-right" src="/mission-card-top.png" alt='' className='hidden md:block absolute left-40 top-[56%] object-cover -z-40' />
            <img data-aos="fade-up-left" src="/mission-card-bottom.png" alt='' className='hidden md:block absolute right-40 bottom-[2%] object-cover -z-40' />

            <div className='pt-12 md:pt-20 mb-12 md:mb-16 flex justify-center items-center'>
                <h2 data-aos="zoom-out" className='text-3xl md:text-5xl text-black font-semibold'>Workflow</h2>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center 
                            space-y-6 lg:space-y-0 lg:space-x-3 mx-6 lg:mx-20'>
                <div data-aos="fade-right" ><FeatureCard iconImg='/how-icon-1.png' description='Connect your existing POS, inventory, reservation system, and review tools.' /></div>
                <div data-aos="slide-right"><FeatureCard iconImg='/how-icon-2.png' description='Watch as Tmoraa builds a live dashboard tailored to your business.' /></div>
                <div data-aos="slide-left"><FeatureCard iconImg='/how-icon-3.png' description='Let AI handle forecasting, insights, and proactive alerts.' /></div>
                <div data-aos="fade-left"><FeatureCard iconImg='/how-icon-4.png' description='Focus on what matters most—your guests and your growth.' /></div>
            </div>

            <div className='flex justify-center items-center text-center px-6 
                            mt-12 md:mt-16 space-x-1 text-[#0A80D2] text-lg md:text-xl'>
                <p data-aos="zoom-in" >Ready to transform how your F&B business operates? Schedule a personalized <span className='font-semibold'>demo today</span>.</p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-6 lg:px-0 mt-16 lg:mt-0 pb-16 lg:pb-0">
                <div data-aos="flip-right" className={'lg:ml-60 lg:mr-2 lg:mt-32 lg:mb-32 p-8 rounded-3xl bg-[#EAF8F3] z-30'}>
                    <p className='text-[26px] font-semibold mb-5 text-black' >Mission</p>
                    <p className='leading-[29px]' >At Tmoraa, we empower restaurants by seamlessly connecting their existing technology systems to deliver actionable, cross-system insights—without replacing what already works. We believe restaurant owners shouldn't have to choose between their trusted tools; they deserve a command center that makes those tools work together intelligently.</p>
                </div>
                <div data-aos="flip-left" className={'lg:ml-2 lg:mr-60 lg:mt-44 lg:mb-24 p-8 rounded-3xl bg-[#D8EFFF] z-30'}>
                    <p className='text-[26px] font-semibold mb-5 text-black' >Vision</p>
                    <p className='leading-[29px]'>To become the essential intelligence layer that transforms fragmented restaurant data into clear, profitable decisions worldwide—helping every restaurant operate with the precision of a command center while preserving their existing technology investments.</p>
                </div>
            </div>
        </section>
    )
}