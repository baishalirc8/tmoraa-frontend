import AboutSection from '@/components/AboutSection'
import BenefitSection from '@/components/BenefitSection'
import ContactUsSection from '@/components/ContactUsSection'
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import HowTmoraaWorkSection from '@/components/HowTmoraaWorkSection'
import PricePlanSection from '@/components/PricePlanSection'
import ProblemSolutionSection from '@/components/ProblemSolutionSection'
import UspSection from '@/components/UspSection'
import WhyYoullLoveTmoraaSection from '@/components/WhyYoullLoveTmoraaSection'
import { Contact } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitSection />
      <HowItWorksSection />
      <AboutSection />
      <UspSection />
      <HowTmoraaWorkSection />
      {/* <WhyYoullLoveTmoraaSection/> */}
      <FaqSection />
      <ContactUsSection />
    </>
  )
}
