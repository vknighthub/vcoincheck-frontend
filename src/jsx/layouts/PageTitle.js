import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ pageHeading, motherMenu, activeMenu, path, activeDisplay}) => {

	return (
		<div className="page-titles">
			<h4>{activeMenu}{pageHeading}</h4>
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<Link to={`/${path}`}>{motherMenu}</Link>
				</li>
				<li className="breadcrumb-item active">
					<Link to="#">{activeDisplay}</Link>
				</li>
			</ol>
		</div>
	);
};

export default PageTitle;
