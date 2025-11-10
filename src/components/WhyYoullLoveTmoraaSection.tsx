import React from "react";
import GradientOutlineButton from "./GradientOutlineButton";

export default function WhyYoullLoveTmoraaSection() {
  return (
    <div className="relative h-fit px-56">
      <img
        src="/love-tmoraa-bg.png"
        alt=""
        className="absolute top-10 left-0 object-cover px-32 z-0"
      />
      <div className="grid grid-cols-[5fr_2fr] gap-4 items-center">
        <div>
          <h2 className="relative text-4xl font-semibold pt-20 z-30 text-background">
            Why You'll Love Tmoraa
          </h2>

          <ul className="pt-6 relative z-30 text-background list-disc list-inside">
            <li>Save hours every week on reporting and planning</li>
            <li>Make faster, smarter business decisions</li>
            <li>Optimize labour and inventory with AI-driven forecasts</li>
            <li>Increase customer satisfaction through proactive insights</li>
            <li>Grow revenue while maintaining operational control</li>
          </ul>
        </div>
        <GradientOutlineButton className="mt-20 h-min w-2xs">
          Request a Demo
        </GradientOutlineButton>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
