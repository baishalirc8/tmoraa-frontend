import React from 'react'
import Image from 'next/image'

type Props = {
    iconImg: string
    title?: string
    description: string
    className?: string
}

export default function FeatureCard({
    iconImg,
    title = '',
    description = '',
    className = '',
}: Props) {
    return (
        <div
            className={`h-70 flex flex-col items-center text-center p-4 pt-10 rounded-3xl 
            shadow-xl bg-background z-30 max-w-sm ${className} `}
        >
            {/* icon container with even shadow all around */}
            <div
                className="w-30 h-30 mb-10 p-5 flex items-center justify-center rounded-full 
                    bg-background shadow-[0_0_15px_rgba(0,0,0,0.15)] 
                    hover:shadow-none hover:border hover:border-[#0A80D2] hover:border-dashed
                    transition-all duration-50"
            >
                <Image src={iconImg} alt={title} width={60} height={60} />
            </div>
            {title && <h3 className="text-2xl font-semibold mb-2">{title}</h3>}
            <p className=" leading-[26px]">{description}</p>
        </div>
    )
}
