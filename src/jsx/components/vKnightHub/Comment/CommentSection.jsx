import React, { useEffect, useState } from 'react'
import DisplayComments from './components/DisplayComments'
import { ActionProvider } from './components/ActionContext'
import SignField from './components/SignField'
import Input from './components/Input'

export const CommentSection = ({
  commentsArray,
  currentUser,
  setComment,
  setInsertComment,
  signinUrl,
  signupUrl,
  customInput,
  maxDeep,
  t
}) => {

  const [comments, setComments] = useState(commentsArray)
  useEffect(() => {
    setComments(commentsArray)
  }, [commentsArray])

  return (
    <ActionProvider
      currentUser={currentUser}
      setComment={setComment}
      setInsertComment ={setInsertComment}
      comments={comments}
      signinUrl={signinUrl}
      signupUrl={signupUrl}
      customInput={customInput}
    >
      <div className="section">
        <div className="inputBox">
          {signupUrl && !currentUser ? <SignField t = {t}/> : <Input />}
        </div>
        <div className="displayComments">
          <DisplayComments comments={comments} maxDeep = {maxDeep} />
        </div>
      </div>
    </ActionProvider>
  )
}
