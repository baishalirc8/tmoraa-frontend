import Appbar from './Appbar'
import GradientButton from './GradientButton'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section id='home' className="relative min-h-screen bg-[url('/hero-bg.png')] bg-size-[150%_150%] bg-top bg-no-repeat -mt-[72px]">
            <div className="grid grid-cols-[2fr_3fr] justify-items-center h-screen items-center pt-[72px]">
                <div className='justify-self-start ml-28 w-full'>

                    <h1 className='text-6xl font-bold leading-[78px]'>The <span className='bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent' >AI-Powered</span> Command Center for Your F&B Ecosystem.</h1>

                    <p className='mt-10 leading-[29px] text-base'>Say goodbye to fragmented tools and manual reporting. Tmoraa unifies your F&B operations into a single intelligent dashboard that tracks sales, labour, inventory, and reviews—all enhanced by AI to help you predict trends, prevent issues, and boost performance.</p>
                    <GradientButton className='mt-10'>Request a Demo</GradientButton>
                </div>
                <div className="bg-background rounded-2xl w-[836px] h-[673px]"></div>
            </div>
        </section>
    )
}