import React from 'react';

const VN = (props) => {
    return (
        <svg
            width={props.width} 
            height={props.height}
            viewBox="-15 -10 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            display={props.display}
        >
            <path fill="#DA251d" d="M-20-15h40v30h-40z" />
            <g id="b" transform="translate(0 -6)">
                <path id="a" fill="#FF0" transform="rotate(18)" d="M0 0v6h4" />
                <use xlinkHref="#a" transform="scale(-1 1)" />
            </g>
            <g id="c" transform="rotate(72)">
                <use xlinkHref="#b" />
                <use xlinkHref="#b" transform="rotate(72)" />
            </g>
            <use xlinkHref="#c" transform="scale(-1 1)" />
        </svg>
    )
}
export default VN;
