
import Avatar from './../../../../components/svg/User/Avatar';
const PostComment = ({ t }) => {
    return (
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
                        <form
                            className="comment-form"
                            id="commentform"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="row">


                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div><Avatar width={40} />  Hoangnv</div>
                                        <textarea
                                            rows={8}
                                            className="form-control mt-2"
                                            name="comment"
                                            placeholder={t('comment')}
                                            id="comment"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value={t('submitcomment')}
                                            className="submit btn btn-primary"
                                            id="submit"
                                            name="submit"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostComment
