import AboutSection from '@/components/AboutSection'
import BenefitSection from '@/components/BenefitSection'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ProblemSolutionSection from '@/components/ProblemSolutionSection'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitSection />
      <HowItWorksSection />
      <AboutSection/>
    </>
  )
}
