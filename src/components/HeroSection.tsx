import GradientButton from './GradientButton'

export default function HeroSection() {
    return (
        <section id='home' className="relative min-h-screen bg-[url('/hero-bg.png')] bg-size-[150%_150%] bg-top bg-no-repeat -mt-[72px]">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] justify-items-center items-center gap-12 lg:gap-0 min-h-screen pt-[72px] px-6 lg:px-0 pb-12 lg:pb-0">

                <div className='w-full text-center lg:text-left lg:justify-self-start lg:ml-28 mt-10 lg:mt-0'>
                    <h1 data-aos="fade-right" className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[78px]'>
                        The <span className='bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent' >AI-Powered</span> Command Center for Your F&B Ecosystem.
                    </h1>
                    <p data-aos="fade-right" className='mt-6 lg:mt-10 leading-[29px] text-base max-w-xl mx-auto lg:mx-0'>
                        Say goodbye to fragmented tools and manual reporting. Tmoraa unifies your F&B operations into a single intelligent dashboard that tracks sales, labour, inventory, and reviews—all enhanced by AI to help you predict trends, prevent issues, and boost performance.
                    </p>

                    <GradientButton data-aos="fade-left" className='mt-8 lg:mt-10 mx-auto lg:mx-0' onClick={() => {
                        const el = document.getElementById('contactUs');
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>
                        Request a Demo
                    </GradientButton>
                </div>
                <div data-aos="zoom-in" className="bg-background rounded-2xl w-full max-w-xl lg:max-w-none h-[50vh] sm:h-[400px] lg:w-[836px] lg:h-[673px] lg:justify-self-center mx-auto lg:mx-0">
                </div>
            </div>
        </section>
    )
}