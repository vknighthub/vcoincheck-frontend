import React from 'react';
import { NavLink } from 'react-router-dom';

const Risk = ({ tag }) => {
    return (
        <NavLink to="#" className={`btn-hight-risk  ml-2`}>
            <i className={`fa fa-remove mr-2`}></i>
            {tag}
        </NavLink>
    );
}

export default Risk;
