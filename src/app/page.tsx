'use client'

import AboutSection from '@/components/AboutSection'
import Appbar from '@/components/Appbar'
import BenefitSection from '@/components/BenefitSection'
import BookDemoSection from '@/components/BookDemoSection'
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
      <Appbar />
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitSection />
      <HowItWorksSection />
      <AboutSection />
      <UspSection />
      <HowTmoraaWorkSection />
      <WhyYoullLoveTmoraaSection />
      <PricePlanSection />
      <FaqSection />
      <BookDemoSection />
      <ContactUsSection />
    </>
  )
}
