import { Fragment } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import PageTitle from "../../layouts/PageTitle";
import ProjectTable from "./project/ProjectTable";
import TopProject from "./project/TopProject";



const Project = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageTitle activeMenu={t('allproject')} motherMenu={t('project')} path="project" />
            <TopProject t={t} />
            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-lg-12">
                    <div className="card">
                        <ProjectTable title={t('allproject')}/>
                    </div>
                </div>
            </div>
        </>
    );
};


export default withTranslation()(Project);
