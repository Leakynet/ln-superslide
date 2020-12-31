import React, {ReactNode} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export interface AlertProps {
    /**
         * Main content of the toast
         */
    children: ReactNode;
    /**
     * Custom css class name
     */
    classname?: string;
    /**
     * Can the toast be dismissed manually
     */
    dismissable?: boolean;
    /**
     * Adhoc Styles
     */
    style?: object;
    /**
     * Theme of the button, `primary` and `type` will override in some instances
     */
    theme?: string;
    /**
     * Click Event
     */
    onClick?: () => void;
    /**
     * Dismiss Event
     */
    onDismiss?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
    classname,
    children,
    dismissable,
    style,
    theme,
    onClick,
    onDismiss
}) => {
    return (
        <div className={`alert ${theme ? `alert-${theme}` : ''} ${classname}`} role="alert" style={style}>
            {dismissable && (
                <button className="alert-dismiss" onClick={() => onDismiss}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            )}
            <div className="alert-content" onClick={() => onClick}>
            {children}
            </div>
        </div>
    )
}
