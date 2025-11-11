import Appbar from './Appbar'
import GradientButton from './GradientButton'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div id='home' className="relative h-fit bg-[url('/hero-bg.png')] bg-size-[150%_150%] bg-top bg-no-repeat">
            <div className="grid grid-cols-2 justify-items-center">
                <div className='justify-self-start ml-32 mt-20 space-y-2'>
                    <div className='flex space-x-2' >
                        <h1 className='text-5xl font-semibold '>The</h1>
                        <h1 className='text-5xl font-bold bg-[linear-gradient(to_right,#29b47d_20%,#0a80d2_80%)] bg-clip-text text-transparent'>AI-Powered</h1>
                    </div>
                    <h1 className='text-5xl font-semibold '>Command Center for</h1>
                    <h1 className='text-5xl font-semibold '>Your F&B Ecosystem.</h1>
                    <p className='mt-5'>Say goodbye to fragmented tools and manual reporting. Tmoraa unifies your F&B operations into a single intelligent dashboard that tracks sales, labour, inventory, and reviews—all enhanced by AI to help you predict trends, prevent issues, and boost performance.</p>
                    <GradientButton className='mt-5'>Request a Demo</GradientButton>
                </div>
                <div className="mt-10 bg-background rounded-2xl h-100 w-3/4"></div>
            </div>
            {/* <div className='mt-25 flex items-center justify-center space-x-20'>
                <Image src="/google-logo.png" alt="Google" width={100} height={0} className="grayscale hover:grayscale-0 transition duration-300" />
                <Image src="/trello-logo.png" alt="Trello" width={100} height={0} className="grayscale hover:grayscale-0 transition duration-300" />
                <Image src="/monday-logo.png" alt="Monday" width={100} height={0} className="grayscale hover:grayscale-0 transition duration-300" />
                <Image src="/notion-logo.png" alt="Notion" width={100} height={0} className="grayscale hover:grayscale-0 transition duration-300" />
                <Image src="/slack-logo.png" alt="Slack" width={100} height={0} className="grayscale hover:grayscale-0 transition duration-300" />
            </div> */}
            <div className='h-20'></div>
        </div>
    )
}
