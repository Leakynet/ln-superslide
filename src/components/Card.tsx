import React, { ReactNode } from 'react'

export interface CardProps {
    /**
     * Theme of the card
     */
    theme?: string;
    /**
     * Title of the card
     */
    title?: string;
    /**
     * Main Content 
     */
    children?: ReactNode;
    /**
     * Footer Content
     */
    footer?: ReactNode;
    /**
     * Adhoc Styles
     */
    style?: object
    /**
     * Custom class name
     */
    classname?: string;
}

// src/components/Card.tsx

/**
 Like a birthday card, but you can have one every day
 */

export const Card: React.FC<CardProps> = ({
    children,
    classname,
    footer,
    style,
    theme,
    title
}) => {
    return (
        <div className={`card ${theme ? `card-${theme}` : ''} ${classname ? classname : ''}`} style={style}>
            {title && (
                <div className="card-header">
                    <h4>{title}</h4>
                </div>
            )}
            <div className="card-content">
                {children}
            </div>
            {footer && (
                <div className="card-footer">
                    {footer}
                </div>
            )}
        </div>
    )
}
