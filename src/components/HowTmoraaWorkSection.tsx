import React from "react";
import FeatureCard from "./FeatureCard";

export default function HowTmoraaWorkSection() {
  return (
    <section className="mt-20">
      <div className="mb-10 flex justify-center items-center">
        <h2 className="text-5xl text-black font-semibold">How Tmoraa Works</h2>
      </div>
      <p className="mb-10 mx-60 text-center text-xl">
        Tmoraa helps F&B leaders streamline daily operations, enhance
        visibility, and drive data-backed performance. Every feature is designed
        to simplify complex workflows and uncover opportunities for improvement.
      </p>
      <div className="grid grid-rows-2 grid-cols-3 gap-y-6 mx-36">
        <FeatureCard
          iconImg="/ai-all-icon.png"
          title="All-in-One Dashboard"
          description="Your Operations at a Glance – Monitor everything that matters in real time—from sales and reviews to staff performance and inventory status. Gain instant visibility into every location and make informed decisions from anywhere"
          className="h-100! max-w-lg!"
        />
        <FeatureCard
          iconImg="/ai-insights.png"
          title="AI Insights"
          description="Turn Data into Action – Tmoraa analyses your operational data to identify trends, predict customer demand, and recommend optimal actions. From adjusting staffing levels to highlighting menu opportunities, the AI ensures your next move is your smartest"
          className="h-100! max-w-lg!"
        />
        <FeatureCard
          iconImg="/schedule-icon.png"
          title="Smart Schedule Builder"
          description="Eliminate the guesswork from shift planning. Auto-generate schedules aligned with forecasted traffic, balance labour costs, and notify your team instantly."
          className="h-100! max-w-lg!"
        />
        <FeatureCard
          iconImg="/forecasting-icon.png"
          title="Forecasting & Planning"
          description="Predict busy periods, optimize inventory, and reduce waste with AI-driven forecasting. Tmoraa helps you plan days, weeks, and months ahead—with confidence."
          className="h-96! max-w-lg!"
        />
        <FeatureCard
          iconImg="/seamless-icon.png"
          title="Seamless Data Sync"
          description="Tmoraa connects securely with your existing systems, consolidating all your data in real-time for consistent accuracy and better insight."
          className="h-96! max-w-lg!"
        />
        <FeatureCard
          iconImg="/mobile-management-icon.png"
          title="Mobile Management"
          description="Access dashboards, reports, and alerts from anywhere. Stay in control, whether on-site or on the go."
          className="h-96! max-w-lg!"
        />
      </div>
    </section>
  );
}
