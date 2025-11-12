'use client'

import * as React from "react"

interface GradientLinkButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

export default function LinkButton({
    children = "Click me",
    onClick,
    className = "",
    ...props
}: GradientLinkButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`text-[#181818] bg-transparent rounded-full text-base font-medium hover:underline focus:outline-none hover:bg-linear-to-r hover:from-[#29b47d] hover:to-[#0a80d2] hover:bg-clip-text hover:text-transparent ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
