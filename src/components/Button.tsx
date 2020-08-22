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
            className={`button `}
            disabled={disabled} 
            onClick={() => onClick}>
            I am a button
        </button>
    )
}
