import React, { useContext } from 'react'
// import Popup from 'reactjs-popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'

// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
// import {
//   modal,
//   modalClose,
//   modalHeader,
//   modalContent,
//   modalActions,
//   modalActionBtn,
//   modalDelBtn
// } from './ModalStyles'
import { ActionContext } from './ActionContext'

const CommentStructure = ({ i, reply, displayReply, parentId }) => {
  const actions = useContext(ActionContext)
  // const edit = true
  return (
    <div className="halfDiv">
      <div
        className="userInfo"
        style={reply && { marginLeft: 40, marginTop: '10px', color: '#659bdb' }}
      >
        <div>{i.text}</div>
        <div className="commentsTwo">
          <div>
            <img
              src={i.avatarUrl}
              style={{ width: 24, height: 24, borderRadius: 24 / 2 }}
              alt='userIcon'
            />
          </div>
          <div className="fullName">{i.fullname} </div>
          <div>
            <button
              className="replyBtn"
              onClick={() => actions.handleAction(i.comId)}
              disabled={!actions.user}
              hidden={displayReply}
            >
              {' '}
              <FontAwesomeIcon icon={faReply} size='1x' color='#a5a5a5' /> Reply
            </button>
          </div>
        </div>
      </div>
      {/* <div className="userActions">
        {actions.userId === i.userId && actions.user && (
          <Popup
            role='tooltip'
            trigger={
              <button className="actionsBtn">
                <FontAwesomeIcon icon={faEllipsisV} size='1x' color='#b9b9b9' />
              </button>
            }
            position='right center'
            nested
          >
            <div className="actionDiv">
              <div>
                <button
                  className="editBtn"
                  onClick={() => actions.handleAction(i.comId, edit)}
                >
                  {' '}
                  edit
                </button>
              </div>
              <div>
                <Popup
                  trigger={
                    <button className="deleteBtn"> delete</button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className='modal' style={modal}>
                      <button
                        className='close'
                        onClick={close}
                        style={modalClose}
                      >
                        &times;
                      </button>
                      <div className='header' style={modalHeader}>
                        {' '}
                        Delete Comment{' '}
                      </div>
                      <div className='content' style={modalContent}>
                        {' '}
                        Delete your comment permanently?
                      </div>
                      <div className='actions' style={modalActions}>
                        <button
                          className='button'
                          style={modalActionBtn}
                          onClick={() => {
                            actions.onDelete(i.comId, parentId)
                            close()
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className='button'
                          style={modalDelBtn}
                          onClick={() => {
                            close()
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </Popup>
        )}
      </div> */}
    </div>
  )
}

export default CommentStructure
