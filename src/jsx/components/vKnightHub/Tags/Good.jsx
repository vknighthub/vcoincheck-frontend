import React from 'react';
import { NavLink } from 'react-router-dom';

const Good = ({ tag }) => {
    return (
        <NavLink to="#" className={`btn-good-tag ml-2`}>
            <i className={`fa fa-thumbs-up mr-2`}></i>
            {tag}
        </NavLink>
    );
}

export default Good;
