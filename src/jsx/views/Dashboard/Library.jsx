/* eslint-disable react-hooks/exhaustive-deps */
/// Bootstrap
import { Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
/// Compoents
import { useEffect } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Slider from "react-slick";
import CircleLoader from "react-spinners/CircleLoader";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import profile from '../../../images/profile/profile.png';
import { getTopLibraryAction } from '../../../store/actions/LibraryAction';
import CutText from '../../../utils/CutText';
import PageTitle from '../../layouts/PageTitle';
import GetCategory from './../../../utils/GetCategory';
import GetContentLanguage from './../../../utils/GetContentLanguage';
import { getNewTopicLibraryAction } from './../../../store/actions/LibraryAction';



const getImage = (image) => {
  if (image.length > 0) {
    return <img className="card-img-top img-block" src={image} alt="" />
  }
}

const Library = (props) => {

  const i18nextLng = localStorage.getItem('i18nextLng')
  const currentLanguageCode = i18nextLng || 'en'

  const { toplibrary, newtopiclibrary } = props
  const { t } = useTranslation();

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="conteact-next c-pointer" onClick={onClick}>
        <i className="las la-long-arrow-alt-right" />
      </div>
    );
  }
  const topcategory = [
    {
      catid: 1,
      title: "Blockchain Knowledge",
      link: "/blockchain-knowledge"
    },
    {
      catid: 2,
      title: "Cardano Knowledge",
      link: "/cardano-knowledge"
    },
    {
      catid: 3,
      title: "Cardano Dictionary",
      link: "/dictionary"
    },
    {
      catid: 4,
      title: "Catalyst Knowledge",
      link: "/catalyst-knowledge"
    }
  ]

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    infinite: true,
    touchMove: true,
    className: "contacts-card",
    centerPadding: "60px",
    speed: 100,
    accessibility: false,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: 0,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: 0,
          centerMode: false,
        },
      },
    ],
  };



  useEffect(() => {
    const postdata = {
      top: 10,
      lang: currentLanguageCode
    }
    props.fetchListLibraryTop(postdata);
  }, [currentLanguageCode])

  const library_top = toplibrary

  return (
    <>
      <PageTitle activeMenu={t('library')} motherMenu={t('library')} path={"library"} />
      <Row>
        <div className="col-xl-12 col-xxl-12">
          <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
            <div className="input-group d-inline-flex">
              <div className="input-group-append">
                <CircleLoader color="#641599"
                  loading
                  size={50}
                  speedMultiplier={1} />
                <span className="align-items-center  justify-content-center ml-2 mt-2 text-white">Top category</span>
              </div>

              {topcategory.map((category, index) => (
                <div className="col-xl-2 ml-5 mt-2" key={index}>
                  <Link to={category.link} className="btn-category btn-primary ml-auto">
                    {category.title}
                  </Link>

                </div>
              ))}

            </div>
          </div> </div>

      </Row>


      <Row>
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-body">
              <div className="testimonial-one owl-right-nav owl-carousel owl-loaded owl-drag">
                <Slider {...settings}>
                  {library_top.map((library, index) => (
                    <div className="items" key={index}>
                      <NavLink to={`${GetCategory(library.catid)}/${btoa(library.id)}`}>
                        <div className="media mt-4">
                          <img src={library.image} alt="" className="mr-3 rounded" width={50} />
                          <div className="media-body">
                            <h5> <CutText content={GetContentLanguage(currentLanguageCode, library.title)} start={0} end={20} /></h5>
                            <span className="mb-0 text-blue font-italic">{library.pubdt}</span>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

      </Row>

      <Row>
        <Col xl='7' className="mr-4">
          <Row>
            {library_top.map((knowledge, index) => (
              <Col xl='6' key={index}>
                <NavLink to={`${GetCategory(knowledge.catid)}/${btoa(knowledge.id)}`} className='float-right'>
                  <Card className='mb-3'>
                    {getImage(knowledge.image)}
                    <Card.Header>
                      <Card.Title className="fs-14 text-black" style={{minHeight:"120px"}}>
                        <h4>{GetContentLanguage(currentLanguageCode, knowledge.title)}</h4>
                        <div className="media mt-4">
                          <img src={profile} alt="" className="mr-3 rounded" width={25} />
                          <div className="media-body">
                            <h5> {knowledge.fullname} </h5>
                            <span className="mb-0 text-blue font-italic">{knowledge.pubdt}</span>
                          </div>
                        </div>
                      </Card.Title>
                    </Card.Header>
                    <Card.Body style={{minHeight:"100px"}}>
                      <Card.Text className="text-content subtitle">
                        <CutText content={GetContentLanguage(currentLanguageCode, knowledge.summary)} start={0} end={70} />
                      </Card.Text>
                      <NavLink to={`/${GetCategory(knowledge.catid)}`} className="btn btn-tag mt-4">
                        <i className="fa fa-tag mr-2"></i>
                        {knowledge.catname}
                      </NavLink>
                    </Card.Body>
                  </Card>
                </NavLink>
              </Col>
            ))}
          </Row>

        </Col>

        <Col xl='3' className="ml-4">
          <Row>
            <div className="card">
              <div className="card-header pb-0 border-0">
                <h4 className="mb-0 text-black fs-20">{t('newtopic')}</h4>

              </div>
              <div className="card-body">
                {newtopiclibrary.map((library, index) => (
                  <div key={index}>
                    <NavLink to={`${GetCategory(library.catid)}/${btoa(library.id)}`}>
                      <i className="fa fa-archive text-dark mr-2 scale-2" />
                      <span className="fs-14">{GetContentLanguage(currentLanguageCode, library.title)}</span>
                    </NavLink>
                  </div>
                ))}

              </div>
            </div>

            <div className="card card-full-width">
              <div className="card-header pb-0 border-0">
                <h4 className="mb-0 text-black fs-20">{t('featuredcategory')}</h4>

              </div>
              <div className="card-body">
                {topcategory.map((category, i) => (
                  <div key={i}>
                    <NavLink to={`/${GetCategory(category.catid)}`}>
                      <i className="fa fa-cat text-dark mr-2 scale-2" />
                      <span className="fs-14">{category.title}</span>
                    </NavLink>
                    <br></br>
                  </div>
                ))}
              </div>
            </div>

          </Row>


        </Col>
      </Row>
    </ >
  )
}

const mapStateToProps = (state) => {
  return {
    toplibrary: state.toplibrary,
    newtopiclibrary: state.newtopiclibrary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListLibraryTop: (postdata) => {
      dispatch(getTopLibraryAction(postdata))
      dispatch(getNewTopicLibraryAction(postdata))
    }
  }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Library))
