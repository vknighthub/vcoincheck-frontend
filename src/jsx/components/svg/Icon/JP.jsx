import React from 'react';

const JP = (props) => {
    return (
        <svg
            width={props.width} 
            height={props.height}
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            display={props.display}
        >
            <rect fill="#fff" height="600" width="900"/>
            <circle fill="#bc002d" cx="450" cy="300" r="180"/>
        </svg>
    )
}
export default JP;
