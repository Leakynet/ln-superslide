import React, { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export interface ToastProps {
    /**
     * Main content of the toast
     */
    children : ReactNode;
    /**
     * Custom css class name
     */
    classname ?: string;
    /**
     * Can the toast be dismissed manually
     */
    dismissable ?: boolean;
    /**
     * The icons associated with the toast
     */
    icon ?: ReactNode;
    /**
     * Adhoc Styles
     */
    style ?: object;
    /**
     * Title of the toast
     */
    title ?: string;
    
    
}

export const Toast: React.FC<ToastProps> = ({
    classname,
    children,
    dismissable,
    icon,
    style,
    title
}) => {
    const showHeader = (title || dismissable) ? true : false

    return (
        <div className={`toast ${classname ? classname : ''} `} style={style}>
            {showHeader && (
                <div className="toast-header">
                    {title && (
                        <h4>{title}</h4>
                    )}
                    {dismissable && (
                        <div className="toast-dismiss">
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    )}
                </div>
            )}
                

            <div className="toast-content">
                {children}
            </div>
        </div>
    )
}
