import React from 'react'
import { Link } from "react-router-dom";
import Avatar from './../../../../components/svg/User/Avatar';
import { useState } from 'react';

const CommentList = (props) => {
    const comments = props.comments
    const [activeToggle, setActiveToggle] = useState('');
    const [replyComment, setReplyComment] = useState(null);

    const handleReply = (reply, id) => {
        setActiveToggle(id);
        setReplyComment(reply);
    }

    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h4 className="text-black">Latest comments</h4>
                </div>
                <div className="card-body pt-3">
                    {comments.map((comment, index) => (
                        <div className="profile-news">
                            <div className="media pt-3 pb-3">
                                <Avatar src={comment.avatar} width={40} />
                                <div className="media-body ml-4">
                                    <h5 className="m-b-5">
                                        <Link to="/app-profile" className="text-black">
                                            {comment.usrname}
                                        </Link>
                                    </h5>
                                    <p className="mb-0">{comment.content}</p>
                                </div>
                                <Link to="#" onClick={() => handleReply(comment.reply, index)}><span><i className="fa fa-reply mr-2"></i>Reply</span></Link>
                            </div>

                            <div className="tab-content ml-5">
                                <div id="reply" className={`tab-pane fade ${activeToggle === index ? "active show" : ""}`} >
                                    {replyComment.map((reply) => (
                                        <div className="media mb-3">
                                            <Avatar src={reply.avatar} width={40} />
                                            <div className="media-body ml-3">
                                                <h5 className="m-b-5">
                                                    <Link to="/app-profile" className="text-black">
                                                        {reply.usrname}
                                                    </Link>
                                                </h5>
                                                <p className="mb-0">{reply.content}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="media">
                                        <Avatar src={comment.avatar} width={40} />
                                        <div className="media-body ml-3">
                                            <div className="form-group">
                                                <textarea
                                                    rows={2}
                                                    className="form-control"
                                                    name="comment"
                                                    placeholder="Comment"
                                                    id="comment"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}
export default CommentList
