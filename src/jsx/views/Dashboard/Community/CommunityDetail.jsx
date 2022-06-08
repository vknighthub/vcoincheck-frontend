import { useTranslation, withTranslation } from "react-i18next";

import { Card, Col, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// Images
import contact1 from "../../../../images/profile/1.jpg";
import profile16 from "../../../../images/profile/16.jpg";
import Avatar from './../../../components/svg/User/Avatar';


const community_member = [
    {
        member_id: '1',
        name: 'Alexandro Queque',
        hashtag: '@alexandro',
        avatar: contact1
    },
    {
        member_id: '2',
        name: 'Alexandro Queque',
        hashtag: '@alexandro',
        avatar: contact1
    },
    {
        member_id: '3',
        name: 'Alexandro Queque',
        hashtag: '@alexandro',
        avatar: contact1
    },
    {
        member_id: '4',
        name: 'Alexandro Queque',
        hashtag: '@alexandro',
        avatar: contact1
    }
]

const author = {
    username: 'hoangnv',
    name: 'Anh Ben',
    createdt: '24 March 2022',
    phone: '+84388861300',
    email: 'nguyenvuhoangz@gmail.com',
    avatar: profile16,
}

const replies = [
    {
        name: 'Anh Ben',
        avatar: profile16,
        comments: 'I think you should not be here'
    },
    {
        name: 'Kan',
        avatar: profile16,
        comments: 'I think that ok'
    }
]


const CommunityDetail = () => {
    const { t } = useTranslation();
    return (
        <div className="row">
            <div className="col-xl-8 col-xxl-12">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header border-0  pb-0">
                                <div>
                                    <h4 className="text-black fs-20">Author</h4>
                                </div>
                            </div>
                            <div className="card-body  border-bottom">
                                <div className="media profile-bx">
                                    <img src={author.avatar} alt="" />
                                    <div className="media-body align-items-center">
                                        <h2 className="text-black font-w600">
                                            {author.name}
                                        </h2>
                                        <p className="mb-2">@{author.username}</p>
                                        <p className="text-black">
                                            Join on {author.createdt}
                                        </p>
                                        <div className="social-icons">
                                            <Nav.Link href={`tel:${author.phone}`}
                                                to="#"
                                                className="iconbx fa fa-phone"
                                                style={{ lineHeight: '45px' }}
                                            />
                                            <Nav.Link as="a" href={`mailto:${author.email}`}
                                                to="#"
                                                className="iconbx fa fa-envelope"
                                                style={{ lineHeight: '45px' }}
                                            />
                                            <Link
                                                to="#"
                                                className="btn btn-outline-dark"
                                            >
                                                View Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-6">
                        <div className="card">
                            <div className="card-header pb-0 border-0">
                                <h4 className="mb-0 text-black fs-20">Topic</h4>
                            </div>
                            <div className="card-body row sp16">
                                <Col xl={12}>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title className="text-white" >Why should I join Project Catalyst?</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Project Catalyst enables funding of projects from all over the world. You will get to know a global community that shares a common vision: to bank the unbanked. You may want to join Project Catalyst because you are:
                                                <ul className='list-icons'>
                                                    <li>
                                                        <span className='align-middle mr-2'>
                                                            <i className='ti-angle-right'></i>
                                                        </span>{' '}
                                                        Looking to bring new ideas to life and help with the future of decentralized platforms
                                                    </li>
                                                    <li>
                                                        <span className='align-middle mr-2'>
                                                            <i className='ti-angle-right'></i>
                                                        </span>{' '}
                                                        Want to learn about all of the new ideas and projects being funded or about the progress of decentralized governance
                                                    </li>
                                                    <li>
                                                        <span className='align-middle mr-2'>
                                                            <i className='ti-angle-right'></i>
                                                        </span>{' '}
                                                        Interested in helping create one of the largest decentralized governance systems
                                                    </li>
                                                    <li>
                                                        <span className='align-middle mr-2'>
                                                            <i className='ti-angle-right'></i>
                                                        </span>{' '}
                                                        Looking to be rewarded for your participation in growing the Cardano ecosystem through creating proposals, voting or helping as a community advisor
                                                    </li>
                                                    <li>
                                                        <span className='align-middle mr-2'>
                                                            <i className='ti-angle-right'></i>
                                                        </span>{' '}
                                                        Wanting to be part of a disrupting innovation force that is constantly evolving</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-6">
                        <div className="card">
                            <div className="card">
                                <div className="card-header pb-0 border-0">
                                    <h4 className="mb-0 text-black fs-20">Comment</h4>
                                </div>
                                <div className="card-body row sp16">
                                    <div className="profile-news">
                                        {replies.map((reply, index) => (
                                            <div className="media pt-3 pb-3" key={index}>
                                                <img src={reply.avatar} alt="" className="mr-3 rounded" width={75} />
                                                <div className="media-body">
                                                    <h5 className="m-b-5">
                                                        {reply.name}
                                                    </h5>
                                                    <p className="mb-0">{reply.comments}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-6">
                        <div className="card">
                            <div className="card">
                                <div className="card-header pb-0 border-0">
                                    <h4
                                        className="comment-reply-title text-success mb-5"
                                        id="reply-title"
                                    >
                                        {t('reply')}{" "}
                                    </h4>
                                </div>
                                <div className="card-body sp16">

                                    <div><Avatar width={40} />  Hoangnv</div>
                                    <form
                                        className="comment-form"
                                        id="commentform"
                                        onSubmit={(e) => e.preventDefault()}
                                    >

                                        <div className="col-lg-12">
                                            <div className="form-group">

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
                                                    name="comment"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-xl-4 col-xxl-12">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 className="text-black fs-20">Member</h4>
                                </div>
                                <Link
                                    to="/portfolio"
                                    className="btn btn-primary rounded-0 mt-3 mt-sm-0"
                                >
                                    Invite Member
                                </Link>
                            </div>
                            <div className="card-body contacts-list">
                                {community_member.map((member, index) => (
                                    <div className="media mb-2 align-items-center" key={index}>
                                        <img
                                            className="mr-3 rounded-0 width70 height70"
                                            src={contact1}
                                            alt=""
                                        />
                                        <div className="media-body">
                                            <h6 className="text-black fs-18 mb-0">
                                                {member.name}
                                            </h6>
                                            <span className="fs-14">{member.hashtag}</span>
                                        </div>
                                        <Dropdown className="dropdown custom-dropdown mb-0">
                                            <Dropdown.Toggle
                                                variant=""
                                                className="btn sharp i-false pr-0 tp-btn"
                                            >
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                        stroke="#2E2E2E"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                                        stroke="#2E2E2E"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                                        stroke="#2E2E2E"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                                <Link
                                                    className="dropdown-item"
                                                    to="/portfolio"
                                                >
                                                    Details
                                                </Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 className="fs-20 text-black">
                                        Related Topics
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mx-0 align-items-center">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(CommunityDetail);
