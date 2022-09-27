import React from 'react';
import { NavLink } from 'react-router-dom';

const Medium = ({ tag }) => {
    return (
        <NavLink to="#" className={`btn-medium ml-2`}>
            <i className={`fa fa-refresh mr-2`}></i>
            {tag}
        </NavLink>
    );
}

export default Medium;
