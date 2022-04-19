import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { registerAction, loadingToggleAction } from '../../store/actions/UserAction';

//
import logo from '../../images/Logo450x450.svg'
import login from "../../images/bg-login2.png";
import loginbg from "../../images/bg-login.jpg";

function Register(props) {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setbirthday] = useState('');
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  let errorsObj = { username: '', firstname: '', lastname: '', birthday: '', gender: '', email: '', address: '', phone: '' };
  const [errors, setErrors] = useState(errorsObj);
  const dispatch = useDispatch();

  function onRegister(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    let gender = 1;

    if (checked) {
      gender = 1;
    } else {
      gender = 0;
    }

    if (firstname === '') {
      errorObj.firstname = 'First name is Required';
      error = true;
    }
    if (lastname === '') {
      errorObj.lastname = 'Last name is Required';
      error = true;
    }
    if (username === '') {
      errorObj.username = 'username is Required';
      error = true;
    }
    if (birthday === "") {
      errorObj.birthday = 'Day of birth is Required';
      error = true;

    }
    if (email === '') {
      errorObj.email = 'Email is Required';
      error = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errorObj.email = 'Invalid email address';
    }
    if (address === '') {
      errorObj.address = 'Address is Required';
      error = true;
    }
    if (phone === '') {
      errorObj.phone = 'Phone is Required';
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }

    function postData() {
      let data = {
        username,
        firstname,
        lastname,
        birthday,
        gender,
        email,
        address,
        phone
      }
      return data;
    }

    dispatch(loadingToggleAction(true));
    dispatch(registerAction(postData(), props.history));
  }

  return (
    <div className="register-main-page" style={{ backgroundImage: "url(" + loginbg + ")" }}>
      <div className="register-wrapper">
        <div className="register-aside-left" style={{ backgroundImage: "url(" + login + ")" }}>
          <div className="register-logo">
            <img src={logo} alt="" className="mr-2 img-fluid" />
          </div>
          <div className="register-description">
            <div className="mt-5">
              <Link to={"#"} className="text-black mr-4">Privacy Policy</Link>
              <Link to={"#"} className="text-black mr-4">Contact</Link>
              <Link to={"https://www.vknight.io/"} className="text-black">© 2021 vKnightHub</Link>
            </div>
          </div>
        </div>
        <div className="register-aside-right gradient_one">
          <div className="row m-0 justify-content-center h-100 align-items-center">
            <div className="col-xl-10 col-xxl-10">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form-1">
                      <div className="mb-4">
                        <h3 className="text-white mb-1">Welcome to vCoincheck</h3>
                        <p className="text-white">Register by entering information below</p>
                      </div>
                      {props.errorMessage && (
                        <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                          {props.errorMessage}
                        </div>
                      )}
                      {props.successMessage && (
                        <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                          {props.successMessage}
                        </div>
                      )}
                      <form onSubmit={onRegister}>
                        <div className="row">
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">First name</strong>
                            </label>
                            <input type="text" className="form-control"
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                            />
                            {errors.firstname && <div className="text-danger fs-12">{errors.firstname}</div>}
                          </div>
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">Last name</strong>
                            </label>
                            <input type="text" className="form-control"
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                            />
                            {errors.lastname && <div className="text-danger fs-12">{errors.lastname}</div>}
                          </div>
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">Username</strong>
                            </label>
                            <input type="text" className="form-control"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <div className="text-danger fs-12">{errors.username}</div>}
                          </div>
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">Day of birth</strong>
                            </label>
                            <input type="date" className="form-control"
                              value={birthday}
                              onChange={(e) => setbirthday(e.target.value)}
                            />
                            {errors.birthday && <div className="text-danger fs-12">{errors.birthday}</div>}
                          </div>
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">Gender</strong>
                            </label>
                            <div className="row mt-3 ml-5">
                              <div className="col-xl-6 col-xl-6">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={checked}
                                  onChange={() => setChecked(true)}
                                />
                                <label className="mb-2 ">
                                  <strong className="text-white">Male</strong>
                                </label>
                              </div>
                              <div className="col-xl-6 col-xl-6">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={!checked}
                                  onChange={() => setChecked(false)}
                                />
                                <label className="mb-2 ">
                                  <strong className="text-white">Female</strong>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">Phone</strong>
                            </label>
                            <input type="text" className="form-control"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && <div className="text-danger fs-12">{errors.phone}</div>}
                          </div>
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">Email</strong>
                            </label>
                            <input type="text" className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                          </div>
                          <div className="form-group col-xl-6 col-xl-6">
                            <label className="mb-2 ">
                              <strong className="text-white">Address</strong>
                            </label>
                            <input type="text" className="form-control"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                            {errors.address && <div className="text-danger fs-12">{errors.address}</div>}
                          </div>
                        </div>
                        <div className="form-row d-flex justify-content-between mt-2 mb-2">
                          <div className="form-group">
                            <div className="custom-control custom-checkbox">
                              <label
                                className="form-check-label text-white"
                              >
                                Password will be send for you by email you input
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <button
                            type="submit"
                            className="btn bg-dark text-light btn-block"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="nav-item">
                          <Link className="ai-icon" to="/page-login">
                            <svg
                              id="icon-login"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-success mr-2"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                              <polyline points="16 17 21 12 16 7" />
                              <line x1={21} y1={12} x2={9} y2={12} />
                            </svg>
                            Login
                          </Link>
                        </div>
                        <div className="nav-item">
                          <Link className="ai-icon mr-2" to="/">
                            <svg
                              id="icon-login"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-success mr-2"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                              <polyline points="16 17 21 12 16 7" />
                              <line x1={21} y1={12} x2={9} y2={12} />
                            </svg>
                              Back to home
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register;