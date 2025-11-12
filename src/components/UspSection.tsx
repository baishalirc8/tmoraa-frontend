import React from "react";
import FeatureCard from "./FeatureCard";

export default function UspSection() {
  return (
    <section id="features" className="my-10">
      <div className="mb-10 flex justify-center items-center">
        <h2 className="text-4xl font-semibold">What Makes Us Different</h2>
      </div>
      <div className="flex justify-center items-center space-x-4 mx-20">
        <FeatureCard
          iconImg="/ai-icon.png"
          title="AI That Thinks for You"
          description="Get personalized recommendations for staffing, inventory, and menu optimization"
        />
        <FeatureCard
          iconImg="/how-icon-2.png"
          title="A Unified Dashboard"
          description="One view for all your operations—sales, staff, reviews, and inventory"
        />
        <FeatureCard
          iconImg="/automation-icon.png"
          title="Automation That Works"
          description="Let AI handle repetitive tasks while you focus on what matters most"
        />
        <FeatureCard
          iconImg="/predictive-icon.png"
          title="Predictive Intelligence"
          description="Tmoraa anticipates what’s next so you can stay ahead of every challenge"
        />
      </div>
      <div className="mt-10 flex justify-center items-center">
        <p className="text-[#0A80D2] text-lg">
          We don’t just deliver data—we deliver actionable intelligence that
          helps F&B businesses grow.
        </p>
      </div>
    </section>
  );
}
