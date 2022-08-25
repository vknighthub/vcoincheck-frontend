/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomInput from '../../../../components/vKnightHub/Control/CustomInput';
import { commentLibraryAction } from './../../../../../store/actions/LibraryAction';
import { CommentSection } from './../../../../components/vKnightHub/Comment/CommentSection';


const PostComment = ({ t, user, libraryid, comments }) => {
    const [comment, setComment] = useState(comments);
    const [insertComment, setInsertComment] = useState();

    const avatarUrl = user.avatar;
    const username = user.username;
    const name = user.firstname + ' ' + user.lastname;
    const signinUrl = "/page-login";
    const signupUrl = "/page-register";
    const dispatch = useDispatch();

    const customInputFunc = (props) => {
        return (
            <CustomInput
                parentId={props.parentId}
                cancellor={props.cancellor}
                value={props.value}
                edit={props.edit}
                submit={props.submit}
                handleCancel={props.handleCancel}
            />
        );
    };

    const commentLibrary = (library, commentContent) => {

        if (commentContent) {
            const postdata = {
                libraryid: library,
                data: commentContent
            }
            dispatch(commentLibraryAction(postdata));
        }
    }

    useEffect(() => {
        commentLibrary(libraryid, insertComment)
    }, [insertComment])


    return (
        <>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="comment-respond" id="respond">
                            <h4
                                className="comment-reply-title text-success mb-5"
                                id="reply-title"
                            >
                                {t('reply')}{" "}
                            </h4>
                            <CommentSection
                                currentUser={
                                    username && { username: username, avatarUrl: avatarUrl, name: name }
                                }
                                commentsArray={comment}
                                setComment={setComment}
                                setInsertComment={setInsertComment}
                                signinUrl={signinUrl}
                                signupUrl={signupUrl}
                                customInput={customInputFunc}
                                maxDeep={1}
                                t={t}
                            />

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}



export default PostComment
