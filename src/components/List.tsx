import React from 'react'

interface ListProps {
    children: React.ReactNode
    imageSrc?: string
    className?: string
}


export default function List({ children, imageSrc = '/check-icon.png', className = '' }: ListProps) {
    return (
        <div className={`flex space-x-2 ${className}`}>
            <img src={imageSrc} alt='⚫' className='h-5 w-5' />
            <div>{children}</div>
        </div>
    )
}
