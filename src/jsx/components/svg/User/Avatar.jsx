import React from 'react';
import profile from '../../../../images/profile/profile.png'

const Avatar = ({ src, width, height, ...rest }) => {
    return (
        <img src={src ? src : profile} width={width} height={height} alt={profile} className="img-fluid rounded-circle" {...rest} ></img>
    )
}
export default Avatar;
