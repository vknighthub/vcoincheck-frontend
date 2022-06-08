/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import i18next from 'i18next';
import { useEffect, useState } from "react";
import { Accordion, Card, Dropdown, Modal } from "react-bootstrap";
import { useTranslation, withTranslation } from 'react-i18next';
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addFAQsAction, deleteFAQsAction, editFAQsAction, getFAQsAction } from "../../../store/actions/FAQsAction";
import GetContentLanguage from "../../../utils/GetContentLanguage";
import { isAdmin } from "../../../store/selectors/AuthSelectors";


const FAQs = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const defaultFAQs = props.faqs
  const isadmin = props.isadmin
  const language = i18next.language
  const [activeBordered, setActiveBordered] = useState(0)
  const [faqsModal, setFAQsModal] = useState(false)
  const [editFAQsId, setEditFAQsId] = useState(null);
  const [lang, setLang] = useState('en');
  const [langEdit, setLangEdit] = useState(language);
  const [fetchData, setFetchData] = useState(false);

  const [addFormData, setAddFormData] = useState({
    question: '',
    answer: ''
  });

  const [editFormData, setEditFormData] = useState({
    question: '',
    answer: ''
  })
  const [editFormFullData, setEditFormFullData] = useState({
    question: '',
    answer: ''
  })

  const [editModal, setEditModal] = useState(false);
  const [disableQuestion, setDisableQuestion] = useState(false);


  const handleAccording = (active, index) => {
    setActiveBordered(active === index ? -1 : index)
  }

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleChangeLanguage = (event) => {
    event.preventDefault();
    const fieldValue = event.target.value;
    setLang(fieldValue)
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    var error = false;
    var errorMsg = '';
    if (addFormData.question === "") {
      error = true;
      errorMsg = 'Please fill question.';
    }
    else if (addFormData.answer === "") {
      error = true;
      errorMsg = 'Please fill answer';
    }
    if (!error) {
      const newFAQs = {
        question: addFormData.question,
        answer: addFormData.answer
      };

      const postData = {
        lang: lang,
        body: newFAQs,
      }
      dispatch(addFAQsAction(postData));
      setFAQsModal(false);
      setFetchData(true);
    } else {
      Swal.fire('Oops', errorMsg, "error");
    }
  };

  const handleEditClick = (event, faqs) => {
    event.preventDefault();
    setEditFAQsId(faqs.faqid);
    setLangEdit(i18next.language)
    const formValues = {
      question: GetContentLanguage(language, faqs.question),
      answer: GetContentLanguage(language, faqs.answer)
    }
    const editValue = {
      question: faqs.question,
      answer: faqs.answer
    }
    if (formValues.question) {
      setDisableQuestion(true)
    }
    setEditFormData(formValues);
    setEditFormFullData(editValue);
    setEditModal(true);
  };

  const handleDeleteClick = (faqsId) => {
    Swal.fire({
      title: "Are you sure you want to delete this FAQs?",
      html: "Submit a delete FAQs",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        const postData = {
          lang: i18next.language,
          faqid: faqsId
        }
        dispatch(deleteFAQsAction(postData));
        setFetchData(true);
      }
    });

  }

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleOnEditChangeLanguage = (event) => {
    event.preventDefault();
    const fieldValue = event.target.value;
    setLangEdit(fieldValue)
    const formValues = {
      question: GetContentLanguage(fieldValue, editFormFullData.question),
      answer: GetContentLanguage(fieldValue, editFormFullData.answer)
    }
    if (formValues.question) {
      setDisableQuestion(true)
    } else {
      setDisableQuestion(false)
    }
    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedFAQs = {
      faqid: editFAQsId,
      question: editFormData.question,
      answer: editFormData.answer
    }
    const postData = {
      lang: langEdit,
      body: editedFAQs,
    }
    dispatch(editFAQsAction(postData));
    setEditFAQsId(null);
    setEditModal(false);
    setFetchData(true);
  }

  useEffect(() => {
    props.fetchListFAQs();
  }, [fetchData])

  return (
    <>
      <div className="row">
        <h2 className="text-black mx-auto pb-5">
          {t('faqstitle')}
        </h2>
        <div className="col-xl-12 col-xxl-12 col-lg-12">
          <div className="card">
            {isadmin &&
              <div className="card-header d-block d-sm-flex border-1">
                <Link to="#" className="btn btn-primary ml-auto" onClick={() => setFAQsModal(true)}>
                  {t('addfaqs')}
                </Link>
              </div>
            }
            {/* Form Add  */}
            <Modal className="modal fade" show={faqsModal} onHide={setFAQsModal}>
              <div className="" >
                <div className="">
                  <form >
                    <div className="modal-header">
                      <h4 className="modal-title fs-20">{t('addfaqs')}</h4>
                      <button type="button" className="btn close" onClick={() => setFAQsModal(false)}>
                        <span>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <i className="flaticon-cancel-12 close"></i>
                      <div className="add-contact-box">
                        <div className="add-contact-content">
                          <div className='form-group mb-3'>
                            <label>{t('chooselang')}</label>
                            <select
                              defaultValue={'option'}
                              className='form-control'
                              id='lang'
                              onChange={handleChangeLanguage}
                            >
                              <option key={'en'} value={'en'}>England</option>
                              <option key={'vn'} value={'vn'}>Vietnamese</option>
                              <option key={'jp'} value={'jp'}>Japanese</option>
                            </select>
                          </div>
                          <div className="form-group mb-3">
                            <label className="text-black font-w500">{t('question')}</label>
                            <div className="contact-name">
                              <input type="text" className="form-control" autoComplete="off"
                                name="question" required="required"
                                onChange={handleAddFormChange}
                                placeholder={t('question')}
                              />
                              <span className="validation-text"></span>
                            </div>
                          </div>

                          <div className="form-group mb-3">
                            <label className="text-black font-w500">{t('answer')}</label>
                            <div className="contact-occupation">
                              <textarea rows={12} autoComplete="off"
                                onChange={handleAddFormChange}
                                name="answer" required="required"
                                className="form-control" placeholder="Some description about 200 word..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Add</button>
                      <button type="button" onClick={() => setFAQsModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>
                    </div>
                  </form>
                </div>
              </div>
            </Modal>

            {/* Form Edit */}

            <Modal className="modal fade" show={editModal} onHide={setEditModal}>
              <div className="" role="document">
                <div className="">
                  <form >
                    <div className="modal-header">
                      <h4 className="modal-title fs-20">{t('editfaqs')}</h4>
                      <button type="button" className="btn close" onClick={() => setEditModal(false)}>
                        <span>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
                      <div className="add-contact-box">
                        <div className="add-contact-content">
                          <div className='form-group mb-3'>
                            <label>{t('chooselang')}</label>
                            <select
                              defaultValue={language}
                              className='form-control'
                              id='lang'
                              onChange={handleOnEditChangeLanguage}
                            >
                              <option key='en' value='en'>England</option>
                              <option key='vn' value='vn'>Vietnamese</option>
                              <option key='jp' value='jp'>Japanese</option>
                            </select>
                          </div>

                          <div className="form-group mb-3">
                            <label className="text-black font-w500">{t('question')}</label>
                            <div className="contact-name">
                              <input type="text" className="form-control" autoComplete="off"
                                name="question" required="required"
                                value={editFormData.question}
                                onChange={handleEditFormChange}
                                disabled={disableQuestion}
                              />
                              <span className="validation-text"></span>
                            </div>
                          </div>
                          <div className="form-group mb-3">
                            <label className="text-black font-w500">{t('answer')}</label>
                            <div className="contact-name">
                              <textarea rows={12} className="form-control" autoComplete="off"
                                name="answer" required="required"
                                value={editFormData.answer}
                                onChange={handleEditFormChange}
                              />
                              <span className="validation-text"></span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary" onClick={handleEditFormSubmit}>Save</button>
                      <button type="button" onClick={() => setEditModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>
                    </div>
                  </form>

                </div>
              </div>
            </Modal>

            <div className="table-responsive card-body tab-content p-3 ">
              <Accordion
                className='accordion accordion-rounded-stylish accordion-bordered'
                defaultActiveKey='0'
              >
                {defaultFAQs.map((data, i) => {
                  const question = GetContentLanguage(language, data.question)
                  const answer = GetContentLanguage(language, data.answer)
                  return (
                    <div className="row" key={i}>
                      {Object.keys(question).length !== 0 ?
                        <>
                          <div className={`${isadmin ? 'accordion__item col-lg-11 col-xl-11 col-sm-11 col-10' : 'accordion__item col-lg-12 col-xl-12 col-sm-12 col-12'}`} >
                            <Accordion.Toggle
                              className={`accordion__header ${activeBordered !== i ? 'collapsed' : ''}`}
                              as={Card.Text}
                              eventKey={`${i}`}
                              onClick={() =>
                                handleAccording(activeBordered, i)
                              }
                            >
                              {' '}
                              <span className='accordion__header--text'>
                                {question}
                              </span>
                              <span className='accordion__header--indicator'></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse
                              eventKey={`${i}`}
                              className='accordion__body'
                            >
                              <div className='accordion__body--text' >{parse(answer)}</div>
                            </Accordion.Collapse>
                          </div>

                          {isadmin &&
                            <div className='col-lg-01 col-xl-1 col-sm-1 col-1'>
                              <Dropdown className="">
                                <Dropdown.Toggle variant="" as="div" className="btn-link i-false" >
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu alignRight={true} className="dropdown-menu-right">
                                  <Dropdown.Item onClick={(event) => handleEditClick(event, data)}>{t('edit')}</Dropdown.Item>
                                  <Dropdown.Item onClick={() => handleDeleteClick(data.faqid)} className="text-danger">{t('delete')}</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          }
                        </>
                        : null}
                    </div>
                  )
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    faqs: state.faqs,
    isadmin: isAdmin(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListFAQs: () => {
      dispatch(getFAQsAction())
    }
  }
}
export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(FAQs));
