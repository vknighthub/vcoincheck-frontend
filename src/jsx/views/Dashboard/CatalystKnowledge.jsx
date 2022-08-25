/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react"
/// Bootstrap
import { Card, Col, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
/// Compoents
import { useTranslation, withTranslation } from 'react-i18next'
import profile from '../../../images/profile/profile.png'
import { getCAKAction } from "../../../store/actions/LibraryAction"
import { isAuthenticated } from "../../../store/selectors/AuthSelectors"
import CutText from "../../../utils/CutText"
import GetContentLanguage from '../../../utils/GetContentLanguage'
import PageTitle from "../../layouts/PageTitle"


const getImage = (image) => {
  if (image.length > 0) {
    return <img className="card-img-bottom img-block" src={image} alt="" />
  }
}

const CatalystKnowledge = (props) => {

  const { t } = useTranslation();
  const i18nextLng = localStorage.getItem('i18nextLng')
  const currentLanguageCode = i18nextLng || 'en'

  const knowledgelist = props.cak

  let postData = {
    catname: "Catalyst Knowledge"
  }

  useEffect(() => {
    props.fetchListCAK(postData);
  }, [])

  return (
    <>
      <PageTitle activeMenu={t('catalystknowledge')} motherMenu={t('library')} path={"catalyst-knowledge"} />

      <Row>
        {knowledgelist.map((knowledge, index) => (
          GetContentLanguage(currentLanguageCode, knowledge.title) &&
          <Col xl="4" key={index}>
            <NavLink to={`${props.match.url}/${btoa(knowledge.id)}`} className="float-right">
              <Card className="mb-3">
                  {getImage(knowledge.image)}
                  <Card.Header>
                    <Card.Title className="fs-14 text-black">
                      <h4>{GetContentLanguage(currentLanguageCode, knowledge.title)}</h4>
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
                      <CutText content={GetContentLanguage(currentLanguageCode, knowledge.summary)} start={0} end={150} />
                    </Card.Text>
                  </Card.Body>
              </Card>
            </NavLink>

          </Col>
        ))}
      </Row>
    </ >
  );
};


const mapStateToProps = (state) => {
  return {
    cak: state.catalystknowledge,
    isAuthenticated: isAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCAK: (catname) => {
      dispatch(getCAKAction(catname))
    }
  }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(CatalystKnowledge));
