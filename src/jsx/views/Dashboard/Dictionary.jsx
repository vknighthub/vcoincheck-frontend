/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
/// Compoents
import parse from 'html-react-parser';
import { getDictionaryAction } from "../../../store/actions/LibraryAction";
import PageTitle from "../../layouts/PageTitle";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';


const Dictionary = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const list_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const content = props.dictionary

  const handleDictionary = (alphabet) => {
    let postData = {
      dictionarykey: alphabet.toUpperCase(),
      dictionaryname: ""
    }
    dispatch(getDictionaryAction(postData))
  }

  useEffect(() => {
    let postdata = {
      dictionarykey: 'A',
      dictionaryname: ""
    }
    props.fetchListDictionary(postdata)
  }, [])

  return (
    <>
      <PageTitle activeMenu={t('dictionary')} motherMenu= {t('library')} path={"dictionary"}/>

      <div className="row">

        <div className="col-xl-12 col-lg-12">
          <div className="card mb-4 mb-xl-0">
            <div className="card-body border-bottom">
              <div className="media profile-bx">
                <div className="media-body align-items-center">
                  <div className="social-icons justify-content-center">
                    {list_alphabet.map((value, index) => (
                      <Link key={index}
                        to="#"
                        className={`iconbx fa fa-${value}`}
                        onClick={() => handleDictionary(value)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {content &&
          <div className="col-xl-12 col-lg-12">
            <div className="card mb-4 mb-xl-0">
              <div className="card-body border-bottom">
                {content.map((value, index) => (
                  <div className="card-body pt-3" key={index}>
                    <div className="profile-blog">
                      <h4 className="card-title card-intro-title text-secondary">{value.dicname}</h4>
                      <span className="mb-0">
                        {parse(value.content)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListDictionary: (postData) => {
      dispatch(getDictionaryAction(postData))
    }
  }
}
export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Dictionary))
