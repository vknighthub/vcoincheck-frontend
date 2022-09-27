import parse from 'html-react-parser';
import { Tab } from "react-bootstrap";
import { useTranslation, withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { ProjectSvg } from "../../../../components/svg";
import Review from "./Review/Review";


const UserReviewed = ({ project, user }) => {

    const { t } = useTranslation();

    function showReview(reviewData, userName) {
        let result = null;
        if (reviewData.length > 0) {
            result = reviewData.map((review, index) => {
                return (
                    <Review key={index} review={review} index={index} username={userName} />
                )
            })
        }
        return result;
    };

    return (
        <div className="row">
            {project.map((projectReviewd, index) => (
                <div className="col-lg-12 col-xl-12 box mb-5" key={index} >
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                                    {/* Tab panes */}
                                    <Tab.Container defaultActiveKey="first">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <NavLink to={`/ecom-project-detail/${projectReviewd.project_info.proname}`}>
                                                    <ProjectSvg image={projectReviewd.project_info.proicon} width={400} height={400} />
                                                </NavLink>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>

                                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                                    <div className="product-detail-content">
                                        <div className="new-arrival-content pr row">
                                            <div className="col-xl-6 col-lg-6  col-md-6 col-xxl-6 ">
                                                <h1>{projectReviewd.project_info.proname}</h1>
                                                <p>{t('projectcode')}: <span className="item ml-3">{projectReviewd.project_info.procd}</span>{" "}</p>
                                                <p>{t('categories')} : <span className="item ml-3">{projectReviewd.project_info.protype}</span></p>
                                                <p>
                                                    {t('ecosystem')}:&nbsp;&nbsp;
                                                    <span className="badge badge-success light mr-1">{projectReviewd.project_info.Ecosystem}</span>
                                                </p>
                                            </div>
                                            <div className="col-xl-6 col-lg-6  col-md-6 col-xxl-6 ">
                                                <span className="text-content">
                                                    {parse(projectReviewd.project_info.prodescr.substring(0, 225))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-4">
                                <div className="tab-content p-0">
                                    <div className="table-responsive">
                                        <table className="table shadow-hover card-table">
                                            <thead>
                                                <tr>
                                                    <th className="width100">
                                                        <strong>{t('no')}</strong>
                                                    </th>
                                                    <th>
                                                        <strong>{t('reviewid')}</strong>
                                                    </th>
                                                    <th>
                                                        <strong>{t('status')}</strong>
                                                    </th>
                                                    <th>
                                                        <strong>{t('reviewdate')}</strong>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {showReview(projectReviewd.review_info, user.username)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    );
};


export default withTranslation()(UserReviewed);
