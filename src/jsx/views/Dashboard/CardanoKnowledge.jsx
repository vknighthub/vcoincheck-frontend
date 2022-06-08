/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from 'react';
/// Bootstrap
import { Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
/// Compoents
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCKAction } from '../../../store/actions/LibraryAction';
import PageTitle from '../../layouts/PageTitle';
import profile from '../../../images/profile/profile.png'
import CutText from '../../../utils/CutText';
import { isAuthenticated } from '../../../store/selectors/AuthSelectors';
import { withTranslation, useTranslation } from 'react-i18next';



const getImage = (image) => {
  if (image.length > 0) {
    return <img className="card-img-top img-fluid" src={image} alt="" />
  }
}

const CardanoKnowledge = (props) => {

  const knowledgelist = props.ck
  const { t } = useTranslation();

  let postData = {
    catname: "cardano"
  }

  useEffect(() => {
    props.fetchListCK(postData);
  }, [])

  return (
    <Fragment>
      <PageTitle activeMenu={t('cardanoknowledge')} motherMenu={t('library')} path={"cardano-knowledge"} />

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
            placeholder={t('search')}
          />
        </div>
        {isAuthenticated &&
          <Link to="/library/add-new-cardano-knowledge" className="btn btn-primary ml-auto">
            {t('addlibrary')}
          </Link>
        }
      </div>

      <Row>
        {knowledgelist.map((knowledge, index) => (
          <Col xl='4' key={index}>
            <NavLink to={`${props.match.url}/${knowledge.name}`} className='float-right'>
              <Card className='mb-3'>
                {getImage(knowledge.image)}
                <Card.Header>
                  <Card.Title className="fs-14 text-black">
                    <h4>{knowledge.title}</h4>
                    <div className="media mt-4">
                      <img src={profile} alt="" className="mr-3 rounded" width={25} />
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
