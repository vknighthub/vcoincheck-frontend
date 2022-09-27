/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState } from 'react';
/// Bootstrap
import { Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
/// Components
import { useEffect } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import profile from '../../../images/profile/profile.png';
import { getNewsAction } from '../../../store/actions/EventsAction';
import { isAuthenticated } from '../../../store/selectors/AuthSelectors';
import CutText from '../../../utils/CutText';
import PageTitle from '../../layouts/PageTitle';
import SearchInput, { createFilter } from 'react-search-input'



const getImage = (image) => {
  if (image) {
    return <img className="card-img-top img-block" src={image} alt="" />
  }
}

const News = (props) => {

  const newslist = props.news
  const { t } = useTranslation();
  const displayAction = props.isAuthenticated

  useEffect(() => {
    props.fetchListNews();
  }, [])

  const [search, setSearch] = useState('')
  const searchUpdated = (term) => {
    setSearch(term)
  }
  const KEYS_TO_FILTERS = ['title']

  const filtered = newslist.filter(createFilter(search, KEYS_TO_FILTERS))

  return (
    <Fragment>
      <PageTitle activeMenu={t('news')} motherMenu={t('event')} path={"event/news"} />

      <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
        <div className="input-group search-area d-inline-flex">
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="flaticon-381-search-2" />
            </span>
          </div>
          <SearchInput type="text" inputClassName="form-control" placeholder={t('search')} onChange={searchUpdated} />

        </div>
        {displayAction &&
          <Link to="/event/news/addnews" className="btn btn-primary ml-auto">
            {t('postnews')}
          </Link>
        }
      </div>

      <Row>
        {filtered.map((news, index) => (
          <Col xl='4' key={index}>
            <NavLink to={`${props.match.url}/details/${news.name}`} className='float-right'>
              <Card className='mb-3'>
                {getImage(news.image)}
                <Card.Header>
                  <Card.Title className="fs-14 text-black" style={{ minHeight: "120px" }}>
                    <h4>{news.title}</h4>
                    <div className="media mt-4">
                      <img src={profile} alt="" className="mr-3 rounded" width={25} />
                      <div className="media-body">
                        <h5> {news.username} </h5>
                        <span className="mb-0 text-blue font-italic">{news.createdt}</span>
                      </div>
                    </div>
                  </Card.Title>
                </Card.Header>
                <Card.Body style={{ minHeight: "150px" }}>
                  <Card.Text className="text-content subtitle">
                    {news.summary && <CutText content={news.summary} start={0} end={150} />}
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
    news: state.news,
    isAuthenticated: isAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListNews: () => {
      dispatch(getNewsAction(dispatch))
    }
  }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(News))
