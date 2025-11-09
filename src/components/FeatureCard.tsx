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
            className={`h-70 flex flex-col items-center justify-center text-center p-4 rounded-3xl 
            shadow-xl bg-background z-30 ${className}`}
        >
            {/* icon container with even shadow all around */}
            <div
                className="w-24 h-24 mb-10 p-5 flex items-center justify-center rounded-full 
                bg-background shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] 
                transition-shadow duration-300"
            >
                <Image src={iconImg} alt={title} width={40} height={40} />
            </div>
            {title && <h3 className="font-semibold mb-2">{title}</h3>}
            <p className="max-w-xs">{description}</p>
        </div>
    )
}
