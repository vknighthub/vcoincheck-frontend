import React from 'react';
import profile from '../../../../images/profile/profile.png'
const Avatar = (props) => {
    return (
        <img src={props.src ? props.src : profile} width={props.width} height={props.height} alt={profile} className="img-fluid rounded-circle"></img>
    )
}
export default Avatar;
