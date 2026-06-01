'use client'

import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer'
    const variantStyles = {
      default: 'bg-indigo-600 hover:bg-indigo-500 text-white',
      outline: 'border border-gray-500 text-gray-300 hover:bg-white/5'
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
