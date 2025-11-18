import React from "react";
import PricingCard from "./PricingCard";
import GradientOutlineButton from "./GradientOutlineButton";

export default function PricePlanSection() {
  return (
    <section className="mt-4 lg:mt-0 mb-10 relative h-fit overflow-hidden">
      <img src="/price-plan-bg.png" alt="" className="hidden lg:block absolute -top-40 -z-50 w-full object-cover" />

      <div data-aos="zoom-out" className="flex justify-center items-center pt-20 px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-center">
          Smarter Plans for Every F&B Business
        </h2>
      </div>

      <p data-aos="zoom-out" className="mt-5 px-6 lg:px-96 text-center leading-9 text-base md:text-lg">
        Choose a flexible plan that grows with you. Whether you operate one F&B
        location or fifty, Tmoraa offers scalable pricing to match your business
        size and goals
      </p>

      <div className="flex flex-col lg:flex-row gap-6 my-10 justify-center items-center px-4">
        <div data-aos="slide-left"><PricingCard
          planName="Command Suite Essential"
          employeesRange="Up to 0-20 employees"
          price={99}
          features={[
            "All dashboard features",
            "AI insights & forecasting",
            "Schedule builder",
            "Real-time alerts",
          ]}
          isPopular={false}
        /></div>

        <div data-aos="fade-left"><PricingCard
          planName="Command Suite Professional"
          employeesRange="Up to 20-50 employees"
          price={199}
          features={[
            "All dashboard features",
            "AI insights & forecasting",
            "Schedule builder",
            "Real-time alerts",
          ]}
          isPopular={false}
        /></div>

        <div data-aos="zoom-in"><PricingCard
          planName="Command Suite Enterprise"
          employeesRange="Up to 50-100 employees"
          price={299}
          features={[
            "All dashboard features",
            "AI insights & forecasting",
            "Schedule builder",
            "Real-time alerts",
          ]}
          isPopular={true}
        /></div>

        <div data-aos="fade-right"><PricingCard
          planName="Command Suite Executive"
          employeesRange="Up to 100-150 employees"
          price={399}
          features={[
            "All dashboard features",
            "AI insights & forecasting",
            "Schedule builder",
            "Real-time alerts",
          ]}
          isPopular={false}
        /></div>

        <div data-aos="slide-right"><PricingCard
          planName="Command Suite Strategic"
          employeesRange="150+ employees"
          price="Custom"
          features={[
            "All dashboard features",
            "AI insights & forecasting",
            "Schedule builder",
            "Custom AI Models",
          ]}
          isPopular={false}
        /></div>
      </div>

      <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-1 text-center lg:text-left px-6 text-lg md:text-[20px]">
        <p>Need more? for 150+ Employees <a href="#contactUs" className="cursor-pointer text-[#0A80D2] underline" >Contact use for Strategic Quote</a> </p>
      </div>

      <div>
        <div data-aos="zoom-out" className="mt-20 flex justify-center items-center text-3xl md:text-5xl text-black font-semibold text-center px-6">All Plans Include</div>

        <div data-aos="zoom-in" className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-10 px-6 lg:px-64">
          <GradientOutlineButton className="cursor-default! focus:outline-none! focus:ring-0!" textStyle="text-foreground! text-lg! md:text-[20px]">Unlimited real-time data sync</GradientOutlineButton>
          <GradientOutlineButton className="cursor-default! focus:outline-none! focus:ring-0!" textStyle="text-foreground! text-lg! md:text-[20px]">AI insights and alerts</GradientOutlineButton>
          <GradientOutlineButton className="cursor-default! focus:outline-none! focus:ring-0!" textStyle="text-foreground! text-lg! md:text-[20px]">Forecasting and planning tools</GradientOutlineButton>
          <GradientOutlineButton className="cursor-default! focus:outline-none! focus:ring-0!" textStyle="text-foreground! text-lg! md:text-[20px]">Smart schedule builder</GradientOutlineButton>
          <GradientOutlineButton className="cursor-default! focus:outline-none! focus:ring-0!" textStyle="text-foreground! text-lg! md:text-[20px]">Customer sentiment analytics</GradientOutlineButton>
          <GradientOutlineButton className="cursor-default! focus:outline-none! focus:ring-0!" textStyle="text-foreground! text-lg! md:text-[20px]">Mobile app access</GradientOutlineButton>
        </div>
      </div>
    </section>
  );
}