import React from "react";
import PricingCard from "./PricingCard";

export default function PricePlanSection() {
  return (
    <div id="pricing" className="mt-8 mb-5 relative h-fit">
      <img src="/price-plan-bg.png" alt="" className="absolute -top-40 -z-50" />
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-semibold">
          Smarter Plans for Every F&B Business
        </h2>
      </div>
      <p className="mt-5 px-56 text-center">
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
        <p>Need more? for 150+ Employees</p>
        <p className="text-lg text-[#0A80D2] underline">Contact use for Strategic Quote</p>
      </div>
    </div>
  );
}
