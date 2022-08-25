import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ActionContext } from './ActionContext'

const SignField = ({ t }) => {
  const actions = useContext(ActionContext)

  return (
    <div className="signBox">
      <div className="signLine">
        {t('askcomment')}
      </div>
      <div>
        <Link
          className="loginBtn"
          to={actions.signinUrl}
        >
          {t('signin')}
        </Link>
        <Link
          className="signBtn"
          to={actions.signupUrl}
        >
          {t('register')}
        </Link>
      </div>
    </div>
  )
}

export default SignField
