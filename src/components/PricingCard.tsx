import React from "react";
import GradientButton from "./GradientButton";
import GradientOutlineButton from "./GradientOutlineButton";
import { useRouter } from "next/navigation";

interface PricingCardProps {
    planName: string;
    employeesRange: string;
    price: string | number;
    features: string[];
    isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
    planName,
    employeesRange,
    price,
    features,
    isPopular = false,
}) => {
    const router = useRouter();
    return (
        <div className={`relative bg-background rounded-2xl shadow-md p-0.5 ${isPopular ? 'bg-linear-to-r from-[#29b47d] to-[#0a80d2]' : 'border border-gray-200'}  w-full max-w-[432px] hover:shadow-lg text-center transition-shadow duration-300`} >
            <div className="bg-background rounded-2xl p-8">
                {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A80D2] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        POPULAR
                    </div>
                )}

                <h3 className="text-2xl font-semibold mt-4 lg:text-left md:text-center sm:text-center">{planName}</h3>
                <p className="font-semibold text-2xl mt-2 mb-8 bg-linear-to-r from-[#29b47d] to-[#0a80d2] bg-clip-text text-transparent lg:text-left md:text-center sm:text-center">{employeesRange}</p>

                <div className="flex items-end sm:justify-center md:justify-center lg:justify-start justify-center mb-8 ">
                    <div className="text-[50px] font-bold ">{typeof price === 'number' ? `$${price}` : `${price}`}</div>
                    <p className="text-sm mb-5">/ month</p>
                </div>


                <ul className="text-sm space-y-2 lg:pl-0 md:pl-0 sm:pl-6 pl-6 text-left">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <span className="font-bold">✓</span>
                            <span className="text-base">{feature}</span>
                        </li>
                    ))}
                </ul>

                {isPopular ?
                    <GradientButton className={` ${isPopular ? 'mt-16 mb-4' : 'mt-8 mb-2'} px-20!`} onClick={() =>router.push("https://demo.ikon.keross.com/tmoraa/login")}>Choose Plan</GradientButton>
                    : <GradientOutlineButton className={` ${isPopular ? 'mt-16 mb-4' : 'mt-8 mb-2'}`} onClick={() =>router.push("https://demo.ikon.keross.com/tmoraa/login")}>Choose Plan</GradientOutlineButton>}
            </div>
        </div >
    );
};

export default PricingCard;
