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
import React, { useEffect, useRef, useState } from 'react'

export default function Home() {

  const sectionRefs = {
    home: useRef(null),
    aboutUs: useRef(null),
    features: useRef(null),
    pricing: useRef(null),
    faq: useRef(null),
    contactUs: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden sm:overflow-x-visible">
      <Appbar activeSection={activeSection} />


      <div id="home" ref={sectionRefs.home}>
        <HeroSection />
        {/* <CountdownSection /> */}
        <ProblemSolutionSection />
        <BenefitSection />
        <HowItWorksSection />
      </div>

      <div id="aboutUs" ref={sectionRefs.aboutUs}>
        <AboutSection />
      </div>

      <div id="features" ref={sectionRefs.features}>
        <UspSection />
        <HowTmoraaWorkSection />
        <WhyYoullLoveTmoraaSection />
      </div>

      <div id="pricing" ref={sectionRefs.pricing}>
        <PricePlanSection />
      </div>

      <div id="faq" ref={sectionRefs.faq}>
        <FaqSection />
        <BookDemoSection />
      </div>

      <div id="contactUs" ref={sectionRefs.contactUs}>
        <ContactUsSection />
      </div>
    </div>
  )
}
