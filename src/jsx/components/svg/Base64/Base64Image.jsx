import React from 'react';

const Base64Image = (props) => {
    return (
        <img src={`data:image/jpeg;base64,${props.data}`} alt="Base64Image" width={props.width} height={props.height}/>
    )
}
export default Base64Image;
