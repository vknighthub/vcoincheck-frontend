import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const path_no_role = [
  '/page-lock-screen',
  '/page-forgot-password',
  '/page-otp-password',
  '/page-error-400',
  '/page-error-403',
  '/page-error-404',
  '/page-error-500',
  '/page-error-503',
  '/page-login',
  '/page-register',
  '/project',
  '/event',
  '/faq',
  '/market-info',
  '/dictionary',
  '/cardano-knowledge',
  '/blockchain-knowledge',
  '/cardano-knowledge/:name',
  '/blockchain-knowledge/:name',
  '/community',
  '/app-profile',
  '/ecom-project-detail/:proname',
  '/'
]
const PrivateRoute = ({ AccessPath, component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => {
      let path = props.match.path;

      if (path_no_role.includes(path)) {
        return <Component {...props} />
      }

      if (AccessPath.includes(path)) {
        return <Component {...props} />
      }

      return <Redirect to="/page-error-403" />
    }} />
  )
}

export default PrivateRoute