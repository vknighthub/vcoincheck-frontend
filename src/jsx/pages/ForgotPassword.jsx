import { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginbg from "../../images/bg-login.jpg";

import { useTranslation, withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { forgotPasswordAction, loadingToggleAction } from '../../store/actions/AuthActions';
import LinkIcon from '../components/vKnightHub/Control/LinkIcon';
import Asideleft from './WidgetBasic/AsideLeft';


function ForgotPassword(props) {
   const { t } = useTranslation();

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   let errorsObj = { username: '', email: '' };
   const [errors, setErrors] = useState(errorsObj);
   const dispatch = useDispatch();

   function onLogin(e) {
      e.preventDefault();
      let error = false;
      const errorObj = { ...errorsObj };
      if (username === '') {
         errorObj.username = 'Please enter a username';
         error = true;
      }
      if (email === '') {
         errorObj.email = 'Please enter a email';
         error = true;
      }
      setErrors(errorObj);
      if (error) {
         return;
      }

      let postdata = {
         username: username,
         email: email
      }

      dispatch(loadingToggleAction(true));
      dispatch(forgotPasswordAction(postdata, props.history));
   }

   return (
      <div className="login-main-page" style={{ backgroundImage: "url(" + loginbg + ")" }}>
         <div className="login-wrapper">
            <Asideleft t={t} />
            <div className="login-aside-right gradient_one">
               <div className="row m-0 justify-content-center h-100 align-items-center">
                  <div className="col-xl-7 col-xxl-7">
                     <div className="authincation-content">
                        <div className="row no-gutters">
                           <div className="col-xl-12">
                              <div className="auth-form-1">
                                 <div className="mb-4">
                                    <h3 className="text-white mb-1">{t('welcome')} vCoincheck</h3>
                                    <p className="text-white">{t('forgotpwd')}</p>
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
                                       <label className="mb-2 "><strong className="text-white">{t('email')}</strong></label>
                                       <input
                                          type="email"
                                          className="form-control"
                                          value={email}
                                          autoComplete="current-email"
                                          onChange={(e) =>
                                             setEmail(e.target.value)
                                          }
                                       />
                                       {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                                    </div>

                                    <div className="text-center">
                                       <button
                                          type="submit"
                                          className="btn bg-dark text-light btn-block"
                                       >
                                          {t('resetpwd')}
                                       </button>
                                    </div>
                                 </form>

                                 <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="nav-item">
                                       <LinkIcon className="ai-icon" to="/" name="Back to home" />
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

export default withTranslation()(withRouter((ForgotPassword)));