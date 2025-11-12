'use client'

import * as React from "react"

interface GradientButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

export default function GradientButton({
    children = "Click me",
    onClick,
    className = "",
    ...props
}: GradientButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3.5 font-medium text-white rounded-full bg-linear-to-r from-[#29b47d] to-[#0a80d2] hover:from-[#0a80d2] hover:to-[#29b47d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#29b47d]/50 transition-all ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
