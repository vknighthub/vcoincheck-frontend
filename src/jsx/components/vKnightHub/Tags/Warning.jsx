import React from 'react';
import { NavLink } from 'react-router-dom';

const Warning = ({ tag }) => {
    return (
        <NavLink to="#" className={`btn-warning-tag ml-2`}>
            <i className={`fa fa-exclamation-triangle mr-2`}></i>
            {tag}
        </NavLink>
    );
}

export default Warning;
