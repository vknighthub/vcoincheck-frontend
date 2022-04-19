import React from 'react';

const TextError = (props) => {
    return (
        <div
            className="invalid-feedback animated fadeInUp"
            style={{ display: "block" }}
        >
            {props.children}
        </div>
    );
}

export default TextError;
