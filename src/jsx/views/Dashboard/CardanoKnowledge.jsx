/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from 'react';
/// Bootstrap
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
/// Compoents
import { useEffect } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import profile from '../../../images/profile/profile.png';
import { getCKAction } from '../../../store/actions/LibraryAction';
import { isAuthenticated } from '../../../store/selectors/AuthSelectors';
import CutText from '../../../utils/CutText';
import PageTitle from '../../layouts/PageTitle';
import GetContentLanguage from './../../../utils/GetContentLanguage';



const getImage = (image) => {
  if (image.length > 0) {
    return <img className="card-img-top img-block" src={image} alt="Cardano Knowledge" />
  }
}

const CardanoKnowledge = (props) => {
  const i18nextLng = localStorage.getItem('i18nextLng')
  const currentLanguageCode = i18nextLng || 'en'
  const knowledgelist = props.ck
  const { t } = useTranslation();
  let postData = {
    catname: "Cardano Knowledge"
  }

  useEffect(() => {
    props.fetchListCK(postData);
  }, [])

  return (
    <Fragment>
      <PageTitle activeMenu={t('cardanoknowledge')} motherMenu={t('library')} path={"library"} />

      <Row>
        {knowledgelist.map((knowledge, index) => (
          GetContentLanguage(currentLanguageCode, knowledge.title) &&
          <Col xl='4' key={index}>
            <NavLink to={`${props.match.url}/${btoa(knowledge.id)}`} className='float-right'>
              <Card className='mb-3'>
                {getImage(knowledge.image)}
                <Card.Header>
                  <Card.Title className="fs-14 text-black" style={{minHeight:"120px"}}>
                    <h4>{GetContentLanguage(currentLanguageCode, knowledge.title)}</h4>
                    <div className="media mt-4">
                      <img src={profile} alt="" className="mr-3 rounded" width={25} />
                      <div className="media-body">
                        <h5> {knowledge.username} </h5>
                        <span className="mb-0 text-blue font-italic">{knowledge.createdt}</span>
                      </div>
                    </div>
                  </Card.Title>
                </Card.Header>
                <Card.Body style={{minHeight:"100px"}}>
                  <Card.Text className="text-content subtitle">
                    <CutText content={GetContentLanguage(currentLanguageCode, knowledge.summary)} start={0} end={100} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>

        ))}

      </Row>
    </Fragment >
  )
}

const mapStateToProps = (state) => {
  return {
    ck: state.cardanoknowledge,
    isAuthenticated: isAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCK: (catname) => {
      dispatch(getCKAction(catname))
    }
  }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(CardanoKnowledge))
