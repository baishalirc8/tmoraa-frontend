import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'
export default function FaqSection() {
  return (
    <section id='faq' className='py-16 md:py-20'>
      <div className='mb-10 flex justify-center items-center px-6'>
        <h2 data-aos="zoom-out" className='text-3xl md:text-5xl font-semibold text-center'>Frequently Asked Questions</h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl mx-auto px-6 space-y-4"
        defaultValue="general-questions"
      >
        <div data-aos="fade-down"><AccordionItem value="general-questions" className='shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl'>
          <AccordionTrigger className='text-lg md:text-xl'>General Questions</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 leading-7 text-base md:text-lg">
            <div>
              <p className='font-semibold text-base md:text-[18px]'>What is Tmoraa?</p>
              <p>Tmoraa is an AI-powered operations platform for F&B businesses. It
                centralizes your data, automates tasks, and generates actionable insights to enhance
                performance across every location.</p>
            </div>
            <div>
              <p className='font-semibold text-base md:text-[18px]'>Who is Tmoraa for?</p>
              <p>Tmoraa serves single-location F&B businesses, growing chains, and
                enterprise-level franchises. It scales effortlessly as your business expands.</p>
            </div>
            <div>
              <p className='font-semibold text-base md:text-[18px]'>How does Tmoraa work?</p>
              <p>Tmoraa securely connects with your operational systems,
                consolidates your data, and uses AI to deliver real-time insights, forecasts, and
                recommendations.</p>
            </div>
          </AccordionContent>
        </AccordionItem></div>

        <div data-aos="slide-down" ><AccordionItem value="features-and-tools" className='shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl'>
          <AccordionTrigger className='text-lg md:text-xl'>Features & Tools</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 leading-7 text-base md:text-lg">
            <ul className='pl-2 list-disc list-inside leading-9'>
              <li>Centralized dashboard with real-time visibility</li>
              <li>AI forecasting and smart insights</li>
              <li>Staff scheduling and labour optimization</li>
              <li>Real-time alerts for issues like sales dips or negative feedback</li>
              <li>Sentiment analysis from reviews</li>
              <li>Mobile accessibility</li>
            </ul>
            <div>
              <p className='font-semibold text-base md:text-[18px]'>Does Tmoraa provide forecasting and reporting tools?</p>
              <p>Yes. Tmoraa’s AI analyzes trends and
                generates predictive forecasts for sales, labour, and inventory management.</p>
            </div>
            <div>
              <p className='font-semibold text-base md:text-[18px]'>Can I manage staff scheduling through Tmoraa?</p>
              <p>Absolutely. Create, modify, and share shift
                schedules directly from your dashboard with full AI-driven optimization.</p>
            </div>
          </AccordionContent>
        </AccordionItem></div>

        <div data-aos="slide-down" ><AccordionItem value="pricing-and-plans" className='shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl'>
          <AccordionTrigger className='text-lg md:text-xl'>Pricing & Plans</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 leading-7 text-base md:text-lg">
            <div>
              <p className='font-semibold text-base md:text-[18px]'>How much does Tmoraa cost?</p>
              <p>Pricing is based on employee tiers, starting at $99 per month
                for 0–20 employees. There
                might be integration fees based on the solution provided.
              </p>
            </div>
            <div>
              <p className='font-semibold text-base md:text-[18px]'>How long does setup take?</p>
              <p>Most F&B businesses are fully integrated within 30 minutes. Our support team ensures a seamless onboarding experience.</p>
            </div>
            <div>
              <p className='font-semibold text-base md:text-[18px]'>What systems does Tmoraa integrate with?</p>
              <p>Tmoraa integrates with your existing POS,
                scheduling, and inventory tools for smooth data synchronization.</p>
            </div>
          </AccordionContent>
        </AccordionItem></div>

        <div data-aos="slide-down"><AccordionItem value="custom-solutions" className='shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl'>
          <AccordionTrigger className='text-lg md:text-xl'>Large Chains & Custom Solutions</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 leading-7 text-base md:text-lg">
            <div>
              <p className='font-semibold text-base md:text-[18px]'>Do you support large F&B groups or multi-unit chains?</p>
              <p>Yes. Tmoraa offers enterprise-grade
                solutions with multi-unit dashboards, chain-level analytics, and AI models customized for
                scale.</p>

            </div>
          </AccordionContent>
        </AccordionItem></div>

      </Accordion>
    </section>
  )
}