import { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import ProjectTable from "./project/ProjectTable";
import TopProject from "./project/TopProject";



const Project = () => {

    return (
        <Fragment>
            <PageTitle activeMenu="All Project" motherMenu="Project" />
            <TopProject/>
            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-lg-12">
                    <div className="card">
                        <ProjectTable title="ALL PROJECT"/>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};


export default Project;
