import { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import loginbg from "../../images/bg-login.jpg";
//
import { loadingToggleAction, loginAction } from '../../store/actions/AuthActions';
import LinkIcon from '../components/vKnightHub/Control/LinkIcon';
import Asideleft from './WidgetBasic/AsideLeft';


function Login(props) {

  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  let errorsObj = { username: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (username === '') {
      errorObj.username = 'Username is Required';
      error = true;
    }
    if (password === '') {
      errorObj.password = 'Password is Required';
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }

    dispatch(loadingToggleAction(true));
    dispatch(loginAction(username, password, props.history));
  }

  return (
    <div className="login-main-page" style={{ backgroundImage: "url(" + loginbg + ")" }}>
      <div className="login-wrapper">
        <Asideleft t = {t} />
        <div className="login-aside-right gradient_one">
          <div className="row m-0 justify-content-center h-100 align-items-center">
            <div className="col-xl-7 col-xxl-7">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form-1">
                      <div className="mb-4">
                        <h3 className="text-white mb-1">{t('welcome')} vCoincheck</h3>
                        <p className="text-white">{t('signinby')}</p>
                      </div>
                      {props.errorMessage && (
                        <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                          {props.errorMessage}
                        </div>
                      )}
                      <form onSubmit={onLogin}>
                        <div className="form-group">
                          <label className="mb-2 ">
                            <strong className="text-white">{t('username')}</strong>
                          </label>
                          <input type="text" className="form-control"
                            value={username} autoComplete="username"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          {errors.username && <div className="text-danger fs-12">{errors.username}</div>}
                        </div>
                        <div className="form-group">
                          <label className="mb-2 "><strong className="text-white">{t('password')}</strong></label>
                          <input
                            type="password"
                            className="form-control"
                            value={password}
                            autoComplete="current-password"
                            onChange={(e) =>
                              setPassword(e.target.value)
                            }
                          />
                          {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                        </div>
                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group">
                            <div className="custom-control custom-checkbox ml-1 ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="basic_checkbox_1"
                              />
                              <label
                                className="form-check-label text-white"
                                htmlFor="basic_checkbox_1 "
                              >
                                {t('rememberme')}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn bg-dark text-light btn-block"
                          >
                            {t('signin')}
                          </button>
                        </div>
                      </form>

                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="nav-item">
                          <LinkIcon className="ai-icon" to="/page-register" name={t('register')} />
                        </div>
                      </div>

                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="nav-item">
                          <LinkIcon className="ai-icon" to="/page-forgot-password" name={t('forgotpwd')} />
                        </div>
                      </div>

                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="nav-item">
                          <LinkIcon className="ai-icon" to="/" name={t('backtohome')} />
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

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default withTranslation()(connect(mapStateToProps)(Login));