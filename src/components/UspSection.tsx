import FeatureCard from "./FeatureCard";

export default function UspSection() {
  return (
    <section id="features" className="my-10 md:my-16">
      <div className="mb-10 md:mb-16 flex justify-center items-center text-center px-6">
        <h2 className="text-3xl md:text-5xl text-black font-semibold">
          What Makes Us Different
        </h2>
      </div>


      <div className="flex flex-col lg:flex-row justify-center items-center 
                      space-y-6 lg:space-y-0 lg:space-x-4 mx-6 lg:mx-20">
        <FeatureCard
          iconImg="/ai-icon.png"
          title="AI That Thinks for You"
          description="Get personalized recommendations for staffing, inventory, and menu optimization"
          className="h-84!"
        />
        <FeatureCard
          iconImg="/how-icon-2.png"
          title="A Unified Dashboard"
          description="One view for all your operations—sales, staff, reviews, and inventory"
          className="h-84!"
        />
        <FeatureCard
          iconImg="/automation-icon.png"
          title="Automation That Works"
          description="Let AI handle repetitive tasks while you focus on what matters most"
          className="h-84!"
        />
        <FeatureCard
          iconImg="/predictive-icon.png"
          title="Predictive Intelligence"
          description="Tmoraa anticipates what’s next so you can stay ahead of every challenge"
          className="h-84!"
        />
      </div>

      <div className="mt-10 md:mt-16 flex justify-center items-center text-center px-6">
        <p className="text-[#0A80D2] text-lg md:text-xl">
          We don’t just deliver data—we deliver actionable intelligence that
          helps F&B businesses grow.
        </p>
      </div>
    </section>
  );
}