import React from "react";
import PricingCard from "./PricingCard";
import GradientOutlineButton from "./GradientOutlineButton";

export default function PricePlanSection() {
  return (
    <section id="pricing" className="mt-4 mb-10 relative h-fit">
      <img src="/price-plan-bg.png" alt="" className="absolute -top-40 -z-50" />
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-semibold">
          Smarter Plans for Every F&B Business
        </h2>
      </div>
      <p className="mt-5 px-56 text-center leading-9">
        Choose a flexible plan that grows with you. Whether you operate one F&B
        location or fifty, Tmoraa offers scalable pricing to match your business
        size and goals
      </p>
      <div className="flex gap-x-6 my-10 justify-center items-center">
        <PricingCard
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
        />

        <PricingCard
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
        />

        <PricingCard
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
        />

        <PricingCard
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
        />
        <PricingCard
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
        />
      </div>
      <div className="flex justify-center items-center gap-1">
        <p className="text-[20px]">Need more? for 150+ Employees <span className="cursor-pointer text-[#0A80D2] underline" >Contact use for Strategic Quote</span> </p>
      </div>

      <div>
        <div className="mt-20 flex justify-center items-center text-5xl text-black font-semibold">All Plans Include</div>
        <div className="flex justify-center items-center gap-x-6 mt-10">
          <GradientOutlineButton textStyle="text-foreground! text-[20px]!">Unlimited real-time data sync</GradientOutlineButton>
          <GradientOutlineButton textStyle="text-foreground! text-[20px]!">AI insights and alerts</GradientOutlineButton>
          <GradientOutlineButton textStyle="text-foreground! text-[20px]!">Forecasting and planning tools</GradientOutlineButton>
          <GradientOutlineButton textStyle="text-foreground! text-[20px]!">Smart schedule builder</GradientOutlineButton>
        </div>
        <div className="flex justify-center items-center gap-x-6 mt-6">
          <GradientOutlineButton textStyle="text-foreground! text-[20px]!">Customer sentiment analytics</GradientOutlineButton>
          <GradientOutlineButton textStyle="text-foreground! text-[20px]!">Mobile app access</GradientOutlineButton>
        </div>
      </div>
    </section>
  );
}
