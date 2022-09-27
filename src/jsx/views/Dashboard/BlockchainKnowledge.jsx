/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react"
/// Bootstrap
import { Card, Col, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
/// Compoents
import { useTranslation, withTranslation } from 'react-i18next'
import profile from '../../../images/profile/profile.png'
import { getBKAction } from "../../../store/actions/LibraryAction"
import { isAuthenticated } from "../../../store/selectors/AuthSelectors"
import CutText from "../../../utils/CutText"
import PageTitle from "../../layouts/PageTitle"
import GetContentLanguage from './../../../utils/GetContentLanguage'


const getImage = (image) => {
  if (image.length > 0) {
    return <img className="card-img-bottom img-block" src={image} alt="" />
  }
}

const BlockchainKnowledge = (props) => {

  const { t } = useTranslation();
  const i18nextLng = localStorage.getItem('i18nextLng')
  const currentLanguageCode = i18nextLng || 'en'

  const knowledgelist = props.bk
  let postData = {
    catname: "Blockchain Knowledge"
  }

  useEffect(() => {
    props.fetchListBK(postData);
  }, [])

  return (
    <Fragment>
      <PageTitle activeMenu={t('blockchainknowledge')} motherMenu={t('library')} path={"library"} />

      <Row>
        {knowledgelist.map((knowledge, index) => (
          GetContentLanguage(currentLanguageCode, knowledge.title) &&
          <Col xl="4" key={index}>
            <NavLink to={`${props.match.url}/${btoa(knowledge.id)}`}>
              <Card className="mb-3">
                <Card.Link href="#" className="float-right">
                  {getImage(knowledge.image)}
                  <Card.Header>
                    <Card.Title className="fs-14 text-black" style={{minHeight:"120px"}}>
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
                  <Card.Body style={{minHeight:"100px"}}>
                    <Card.Text className="text-content subtitle">
                      <CutText content={GetContentLanguage(currentLanguageCode, knowledge.summary)} start={0} end={150} />
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
