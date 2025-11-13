'use client'

import * as React from "react"

interface GradientOutlineButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    textStyle?: string,
}

export default function GradientOutlineButton({
    children = "Click me",
    onClick,
    className = "",
    textStyle = "",
    ...props
}: GradientOutlineButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer relative inline-block rounded-full p-px bg-linear-to-r from-[#29b47d] to-[#0a80d2] hover:to-[#29b47d] hover:from-[#0a80d2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#29b47d]/50 ${className}`}
            {...props}
        >
            <span className="block rounded-full bg-background px-6 py-3">
                <span className={`bg-clip-text text-transparent bg-linear-to-r from-[#29b47d] to-[#0a80d2] hover:to-[#29b47d] hover:from-[#0a80d2] font-medium ${textStyle}`}>
                    {children}
                </span>
            </span>
        </button>
    )
}
