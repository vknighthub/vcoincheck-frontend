/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react"
/// Bootstrap
import { Card, Col, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
/// Compoents
import profile from '../../../images/profile/profile.png'
import { getBKAction } from "../../../store/actions/LibraryAction"
import { isAuthenticated } from "../../../store/selectors/AuthSelectors"
import CutText from "../../../utils/CutText"
import PageTitle from "../../layouts/PageTitle"
import { withTranslation, useTranslation } from 'react-i18next';



const getImage = (image) => {
  if (image.length > 0) {
    return <img className="card-img-bottom img-block" src={image} alt="" />
  }
}

const BlockchainKnowledge = (props) => {

  const { t } = useTranslation();

  const knowledgelist = props.bk

  let postData = {
    catname: "blockchain"
  }

  useEffect(() => {
    props.fetchListBK(postData);
  }, [])


  return (
    <Fragment>
      <PageTitle activeMenu={t('blockchainknowledge')} motherMenu={t('library')} path={"blockchain-knowledge"}/>
      <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
        <div className="input-group search-area d-inline-flex">
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="flaticon-381-search-2" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
        </div>
        {isAuthenticated &&
          <Link to="/library/add-new-blockchain-knowledge" className="btn btn-primary ml-auto">
            {t('addlibrary')}
          </Link>
        }
      </div>
      <Row>
        {knowledgelist.map((knowledge, index) => (
          <Col xl="4" key={index}>
            <NavLink to={`${props.match.url}/${knowledge.name}`}>
              <Card className="mb-3">
                <Card.Link href="#" className="float-right">
                  {getImage(knowledge.image)}
                  <Card.Header>
                    <Card.Title className="fs-14 text-black">
                      <h4>{knowledge.title}</h4>
                      <div className="media mt-4">
                        <img src={profile} alt="" className="mr-3 rounded img-fluid" width={25} />
                        <div className="media-body">
                          <h5> {knowledge.username} </h5>
                          <span className="mb-0 text-blue font-italic">{knowledge.createdt}</span>
                        </div>
                      </div>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="text-content subtitle">
                      <CutText content={knowledge.summary} start={0} end={150} />
                    </Card.Text>
                  </Card.Body>
                </Card.Link>
              </Card>
            </NavLink>

          </Col>
        ))}
      </Row>
    </Fragment >
  );
};


const mapStateToProps = (state) => {
  return {
    bk: state.blockchainknowledge,
    isAuthenticated: isAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListBK: (catname) => {
      dispatch(getBKAction(catname))
    }
  }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(BlockchainKnowledge));
