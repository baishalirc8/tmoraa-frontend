import React from 'react'

interface ListProps {
    children: React.ReactNode
    className?: string
}


export default function List({ children, className = '' }: ListProps) {
    return (
        <div className={`flex space-x-2 ${className}`}>
            <img src="/check-icon.png" alt='⚫' className='h-5 w-5' />
            <div>{children}</div>
        </div>
    )
}
