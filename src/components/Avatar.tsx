import React from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

export interface AvatarProps  {
    /**
     * Loading state to indicate if the avatar still loading
     */
    loading: boolean;
    /**
     * User initials serve as fallback state if avatar images cannot load
     */
    username: string;
    /**
     * Source for the avatar images
     */
    src: string;
    /**
     * Size of the avatar
     */
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

export const Avatar: React.FC<AvatarProps> = ({
    loading = false,
    username = '',
    src = '',
    size = 'medium'

}) => {
    const userInitials = () => {
        if(username) {
            const split = username.split(' ');
            return split[0].substr(0,1) + split[1].substr(0,1)
        }
        return ''
        
    }
    //const initials = userInitials[0].substr(0,1) + userInitials[1].substr(0,1);
    return (
        <div className={`avatar avatar-${size}`}>
            {loading && (
                <div className="avatar-loading">
                    <FontAwesomeIcon icon={faSyncAlt} spin={true} />
                </div>
            )}
            {!loading && src && (
                <div className="avatar-image">
                    <img src={src} alt={username}/>
                </div>
            )}
            {!loading && !src && (
                <div className="avatar-img">
                    <div className="avatar-initials">{userInitials()}</div>
                </div>
            )}
        </div>
    )
}
