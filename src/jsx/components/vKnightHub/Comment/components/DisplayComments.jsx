import React, { useContext } from 'react'
import { ActionContext } from './ActionContext'
import 'reactjs-popup/dist/index.css'
import CommentStructure from './CommentStructure'
import InputField from './InputField';

const DisplayComments = ({ comments, maxDeep }) => {
  const actions = useContext(ActionContext)
  return (
    <div>
      {comments && comments.map((i, index) => (
        <div key={index}>
          {actions.editArr.filter((id) => id === i.comId).length !== 0 ? (
            actions.customInput ? (
              actions.customInput({
                cancellor: i.comId,
                value: i.text,
                handleCancel: actions.handleCancel,
                submit: actions.submit,
                edit: true
              })
            ) : (
              <InputField cancellor={i.comId} value={i.text} edit />
            )
          ) : (
            <CommentStructure i={i} handleEdit={() => actions.handleAction} />
          )}
          {actions.replies.filter((id) => id === i.comId).length !== 0 &&
            (actions.customInput ? (
              actions.customInput({
                cancellor: i.comId,
                parentId: i.comId,
                submit: actions.submit,
                handleCancel: actions.handleCancel,
                edit: false
              })
            ) : (
              <InputField cancellor={i.comId} parentId={i.comId} />
            ))}
          <div className="replySection">
            {i.replies &&
              i.replies.map((a, index) => (
                <div key={index}>
                  {
                    actions.editArr.filter((id) => id === a.comId).length !== 0
                      ?
                      (
                        actions.customInput ? (
                          actions.customInput({
                            cancellor: a.comId,
                            value: a.text,
                            handleCancel: actions.handleCancel,
                            edit: true,
                            parentId: i.comId,
                            submit: actions.submit
                          })
                        ) : (
                          <InputField
                            cancellor={a.comId}
                            value={a.text}
                            edit
                            parentId={i.comId}
                          />
                        )
                      ) : (
                        <CommentStructure
                          i={a}
                          reply
                          displayReply={i.replies.length + 1 > maxDeep ? true : false}
                          parentId={i.comId}
                          handleEdit={() => actions.handleAction}
                        />
                      )
                  }

                  {actions.replies.filter((id) => id === a.comId).length !==
                    0 &&
                    (actions.customInput ? (
                      actions.customInput({
                        cancellor: a.comId,
                        parentId: i.comId,
                        child: true,
                        submit: actions.submit,
                        handleCancel: actions.handleCancel,
                        edit: false
                      })
                    ) : (
                      <InputField
                        cancellor={a.comId}
                        parentId={i.comId}
                        child
                      />
                    ))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayComments
