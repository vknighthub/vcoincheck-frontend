import React from 'react';
import { NavLink } from 'react-router-dom';

const Excellent = ({ tag }) => {
    return (
        <NavLink to="#" className={`btn-tag ml-2`}>
            <i className={`fa fa-star mr-2`}></i>
            {tag}
        </NavLink>
    );
}

export default Excellent;
