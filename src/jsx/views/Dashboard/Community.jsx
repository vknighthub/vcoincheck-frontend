import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Dropdown, Modal } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import swal from "sweetalert";
//Images
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { isAdmin, isAuthenticated } from '../../../store/selectors/AuthSelectors';
import { default as card1, default as user } from './../../../images/library/cardano.png';

const CardListBlog = [
  {
    id: 1,
    image: card1,
    comcode: "01234",
    comname: "Should I participation to Cardano project",
    author: "Nguyen Vu Hoang",
    postdate: "Sep 8th, 2020",
    Replies: "25"
  },
  {
    id: 2,
    image: card1,
    comcode: "01234",
    comname: "Should I participation to Cardano project",
    author: "Nguyen Vu Hoang",
    postdate: "Sep 8th, 2020",
    Replies: "25"
  }
];

const Community = (props) => {
  const { isadmin, isAuthenticated } = props
  const [postModal, setPostModal] = useState(false);
  const [community, setCommunity] = useState(CardListBlog);
  // delete data  
  const handleDeleteClick = (contactId) => {
    const newcommunity = [...community];
    const index = community.findIndex((contact) => contact.id === contactId);
    newcommunity.splice(index, 1);
    setCommunity(newcommunity);
  }

  //Add data 
  const [addFormData, setAddFormData] = useState({
    comcode: '',
    author: '',
    replies: '',
    image: '',
  });

  // Add contact function
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    var error = false;
    var errorMsg = '';
    if (addFormData.Date_Join === "") {
      error = true;
      errorMsg = 'Please fill date';
    } else if (addFormData.author === "") {
      error = true;
      errorMsg = 'Please fill name.';
    }
    else if (addFormData.Replies === "") {
      error = true;
      errorMsg = 'Please fill Replies';
    }
    if (!error) {
      const newContact = {
        id: nanoid(),
        comcode: addFormData.comcode,
        Date_Join: addFormData.Date_Join,
        author: addFormData.author,
        Replies: addFormData.Replies,
        image: addFormData.image,
      };
      const newcommunity = [...community, newContact];
      setCommunity(newcommunity);
      setPostModal(false);
      swal('Good job!', 'Successfully Added', "success");
      addFormData.author = addFormData.Replies = addFormData.Date_Join = '';

    } else {
      swal('Oops', errorMsg, "error");
    }
  };


  const [editModal, setEditModal] = useState(false);

  // Edit function editable page loop
  const [editContactId, setEditContactId] = useState(null);

  // Edit function button click to edit
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      comcode: contact.comcode,
      Date_Join: contact.Date_Join,
      author: contact.author,
      Replies: contact.Replies,
      image: contact.image,
    }
    setEditFormData(formValues);
    setEditModal(true);
  };


  // edit  data  
  const [editFormData, setEditFormData] = useState({
    comcode: '',
    Date_Join: '',
    author: '',
    Replies: '',
    image: '',
  })

  //update data function
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // edit form data submit
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      comcode: editFormData.comcode,
      Date_Join: editFormData.Date_Join,
      author: editFormData.author,
      Replies: editFormData.Replies,
      image: editFormData.image,
    }
    const newcommunity = [...community];
    const index = community.findIndex((contact) => contact.id === editContactId);
    newcommunity[index] = editedContact;
    setCommunity(newcommunity);
    setEditContactId(null);
    setEditModal(false);
  }

  //For Image upload in ListBlog
  const [file, setFile] = React.useState(null)
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setTimeout(function () {
      var src = document.getElementById("saveImageFile").getAttribute("src");
      addFormData.image = src;
    }, 200);
  }

  return (
    <>
      <div className="mb-sm-5 mb-3 d-flex flex-wrap align-items-center text-head">
        {isAuthenticated &&
          <Link className="btn btn-primary font-w600 mb-2 mr-auto" onClick={() => setPostModal(true)}>+ Post topic</Link>
        }
        {/* <!-- Modal --> */}
        <Modal className="modal fade" show={postModal} onHide={setPostModal} >
          <div className="" >
            <div className="">
              <form >
                <div className="modal-header">
                  <h4 className="modal-title fs-20">Post topic</h4>
                  <button type="button" className="btn close" onClick={() => setPostModal(false)}>
                    <span>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <i className="flaticon-cancel-12 close"></i>
                  <div className="add-contact-box">
                    <div className="add-contact-content">
                      <div className="image-placeholder">
                        <div className="avatar-edit">
                          <input type="file" onChange={fileHandler} id="imageUpload"
                            onClick={(event) => setFile(event.target.value)}
                          />
                          <label htmlFor="imageUpload" name=''></label>
                        </div>
                        <div className="avatar-preview">
                          <div id="imagePreview">
                            <img id="saveImageFile" src={file ? URL.createObjectURL(file) : user}
                              alt={file ? file.name : null}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Customer Id</label>
                        <div className="contact-name">
                          <input type="text" className="form-control" autoComplete="off"
                            name="comcode" required="required"
                            onChange={handleAddFormChange}
                            placeholder="write Id"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Client</label>
                        <div className="contact-occupation">
                          <input type="text" autoComplete="off"
                            onChange={handleAddFormChange}
                            name="author" required="required"
                            className="form-control" placeholder="name"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Replies</label>
                        <div className="contact-occupation">
                          <input type="text" autocomplete="off"
                            name="Replies" required="required"
                            onChange={handleAddFormChange}
                            className="form-control" placeholder="Replies"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Add</button>
                  <button type="button" onClick={() => setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>
                </div>
              </form>

            </div>
          </div>
        </Modal>
        <Modal className="modal fade" show={editModal} onHide={setEditModal} >
          <div className="" role="document">
            <div className="">
              <form >
                <div className="modal-header">
                  <h4 className="modal-title fs-20">Edit Task</h4>
                  <button type="button" className="btn close" onClick={() => setEditModal(false)}>
                    <span>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
                  <div className="add-contact-box">
                    <div className="add-contact-content">
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Customer Id</label>
                        <div className="contact-name">
                          <input type="text" className="form-control" autocomplete="off"
                            name="comcode" required="required"
                            value={editFormData.comcode}
                            onChange={handleEditFormChange}
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Deadline Date</label>
                        <div className="contact-name">
                          <input type="text" className="form-control" autocomplete="off"
                            name="Date_Join" required="required"
                            value={editFormData.Date_Join}
                            onChange={handleEditFormChange}
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Client</label>
                        <div className="contact-occupation">
                          <input type="text" autocomplete="off"
                            value={editFormData.author}
                            onChange={handleEditFormChange}
                            name="author" required="required"
                            className="form-control" placeholder="name"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="text-black font-w500">Replies</label>
                        <div className="contact-occupation">
                          <input type="text" autocomplete="off"
                            name="Replies" required="required"
                            value={editFormData.Replies}
                            onChange={handleEditFormChange}
                            className="form-control" placeholder="Replies"
                          />
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
      </div>
      <div className="row">
        {community.map((communitys, index) => (
          <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
            <div className="card project-boxed">
              <NavLink to={`${'/community-details'}/${communitys.comcode}`} className="text-black user-name">
                <div className="img-bx">
                  <img src={communitys.image} alt="" className=" mr-3 card-list-img w-100" width="130" />
                </div>
                <div className="card-header align-items-start">
                  <div>
                    <p className="fs-14 mb-2 text-primary">#{communitys.comcode}</p>
                    <h6 className="fs-18 font-w500 mb-3">{communitys.comname}</h6>
                    <div className="text-dark fs-14 text-nowrap"><i className="fa fa-calendar-o mr-3" aria-hidden="true"></i>Created on {communitys.postdate}</div>
                  </div>
                </div>
                <div className="card-body p-0 pb-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="mb-0 title">Author</span> :
                      <span className="text-black ml-2">{communitys.author}</span>
                    </li>
                    <li className="list-group-item">
                      <span className="mb-0 title">Replies</span> :
                      <span className="text-black desc-text ml-2">{communitys.Replies}</span>
                    </li>
                  </ul>
                </div>
              </NavLink>
              {isadmin &&
                <div className="card-header align-items-start">
                  <> <div></div> </>
                  <Dropdown className="">
                    <Dropdown.Toggle variant="" as="div" className="btn-link i-false" >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight={true} className="dropdown-menu-right">
                      <Dropdown.Item
                        onClick={(event) => handleEditClick(event, communitys)}
                      >Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="text-danger"
                        onClick={() => handleDeleteClick(communitys.id)}
                      >Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
    isadmin: isAdmin(state)
  };
};
export default withTranslation()(connect(mapStateToProps, null)(Community));