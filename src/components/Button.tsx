import React from 'react'

export interface ButtonProps {
    /**
     * Is this the primary call to action
     */
    primary?: boolean;
    /**
     * Label of the button
     */
    label: string;
    /**
     * Type of button
     */
    type: 'default' | 'link' | 'split' | 'text';
    /**
     * Theme of the button, `primary` and `type` will override in some instances
     */
    theme?: string;
    /**
     * Set Disabled state
     */
    disabled?: boolean;
    /**
     * Click Event
     */
    onClick?: () => void;
}

// src/components/Button.tsx

/**
 A button is just a button, but newtons are fruit and cake 
 */

export const Button: React.FC<ButtonProps> = ({
    primary = false,
    label,
    type = 'default',
    theme,
    disabled = false,
    onClick,
    ...props
}) => {
    return (
        <button 
            className={`button ${primary ? `button-primary` : `button-${theme}` } button-${type}`}
            disabled={disabled} 
            onClick={() => onClick} 
            {...props}>
            {label}
        </button>
    )
}
