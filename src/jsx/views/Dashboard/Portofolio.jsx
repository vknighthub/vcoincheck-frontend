import React from "react";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
// Images
import profile16 from "../../../images/profile/16.jpg";
import bitcoin from "../../../images/svg/bitcoin-1.svg";
import ethereum from "../../../images/svg/ethereum-1.svg";
import ripple from "../../../images/svg/ripple-1.svg";
import litecoin from "../../../images/svg/litecoin-1.svg";
import contact1 from "../../../images/contact/1.jpg";
import contact2 from "../../../images/contact/2.jpg";
import contact3 from "../../../images/contact/3.jpg";
import contact4 from "../../../images/contact/4.jpg";
import contact5 from "../../../images/contact/5.jpg";
import contact6 from "../../../images/contact/6.jpg";
import contact7 from "../../../images/contact/7.jpg";
import contact8 from "../../../images/contact/8.jpg";
import contact9 from "../../../images/contact/9.jpg";
import contact10 from "../../../images/contact/10.jpg";
import contact11 from "../../../images/contact/11.jpg";

const ChartCircle = loadable(() =>
   pMinDelay(import("../vKnightHub/Portfolio/Chart/ChartCircle"), 1000)
);

const Portofolio = () => {
   return (
      <div className="row">
         <div className="col-xl-6 col-xxl-12">
            <div className="row">
               <div className="col-xl-12 col-lg-12">
                  <div className="card mb-4 mb-xl-0">
                     <div className="card-header border-0  pb-0">
                        <div>
                           <h4 className="text-black fs-20">My Profile</h4>
                           <p className="fs-12 mb-0">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                        <Dropdown className="dropdown custom-dropdown mb-0">
                           <Dropdown.Toggle
                              variant=""
                              className="btn i-false sharp pr-0 tp-btn"
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
                              <Link className="dropdown-item" to="/portfolio">
                                 Details
                              </Link>
                              <Link
                                 className="dropdown-item text-danger"
                                 to="/portfolio"
                              >
                                 Cancel
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body  border-bottom">
                        <div className="media profile-bx">
                           <img src={profile16} alt="" />
                           <div className="media-body align-items-center">
                              <h2 className="text-black font-w600">
                                 Thomas Aldox
                              </h2>
                              <p className="mb-2">@thomasdox</p>
                              <p className="text-black">
                                 Join on 24 March 2017
                              </p>
                              <div className="social-icons">
                                 <Link
                                    to="/portfolio"
                                    className="iconbx fa fa-phone"
                                 />
                                 <Link
                                    to="/portfolio"
                                    className="iconbx fa fa-envelope"
                                 />
                                 <Link
                                    to="/portfolio"
                                    className="iconbx fa fa-facebook"
                                 />
                                 <Link
                                    to="/portfolio"
                                    className="btn btn-outline-dark"
                                 >
                                    Edit Profile
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
                        <h4 className="mb-0 text-black fs-20">Coin Holding</h4>
                     </div>
                     <div className="card-body row sp16">
                        <div className="col-xl-6 mb-3 col-lg-12 col-md-6">
                           <div className="bgl-warning border border-warning media align-items-center p-4">
                              <img className="mr-3" src={bitcoin} alt="" />
                              <div className="media-body">
                                 <h2 className="text-black fs-28 mb-2 font-w600">
                                    65,123
                                 </h2>
                                 <span className="fs-14 font-w600">BTC</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6 mb-3 col-lg-12 col-md-6">
                           <div className="bgl-secondary border border-secondary media align-items-center p-4">
                              <img className="mr-3" src={ethereum} alt="" />
                              <div className="media-body">
                                 <h2 className="text-black fs-28 mb-2 font-w600">
                                    2,551
                                 </h2>
                                 <span className="fs-14 font-w600">ETH</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6 mb-3 col-lg-12 col-md-6">
                           <div className="bgl-info border border-info media align-items-center p-4">
                              <img className="mr-3" src={ripple} alt="" />
                              <div className="media-body">
                                 <h2 className="text-black fs-28 mb-2 font-w600">
                                    0,55
                                 </h2>
                                 <span className="fs-14 font-w600">RPL</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6 mb-3 col-lg-12 col-md-6">
                           <div className="bgl-dark border-info border border-dark media align-items-center p-4">
                              <img className="mr-3" src={litecoin} alt="" />
                              <div className="media-body">
                                 <h2 className="text-black fs-28 mb-2 font-w600">
                                    65,123
                                 </h2>
                                 <span className="fs-14 font-w600">LTC</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-12 col-lg-6">
                  <div className="card">
                     <Tab.Container defaultActiveKey="monthly">
                        <div className="card-header border-0 d-xl-flex d-lg-block d-md-flex d-sm-flex d-block">
                           <div className="mr-2">
                              <h4 className="fs-20 text-black">
                                 Wallet Activity
                              </h4>
                              <p className="fs-13">
                                 Lorem ipsum dolor sit amet, consectetur
                              </p>
                           </div>
                           <div className="card-action card-tabs mt-3 mt-sm-0">
                              <Nav className="nav nav-tabs" role="tablist">
                                 <Nav.Item>
                                    <Nav.Link
                                       className="nav-link"
                                       data-toggle="tab"
                                       eventKey="monthly"
                                       role="tab"
                                       aria-selected="true"
                                    >
                                       Monthly
                                    </Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link
                                       className="nav-link"
                                       data-toggle="tab"
                                       eventKey="Weekly"
                                       role="tab"
                                       aria-selected="false"
                                    >
                                       Weekly
                                    </Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link
                                       className="nav-link"
                                       data-toggle="tab"
                                       eventKey="Today"
                                       role="tab"
                                       aria-selected="false"
                                    >
                                       Today
                                    </Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </div>
                        </div>
                        <div className="card-body p-0 tab-content card-table">
                           <Tab.Content>
                              <Tab.Pane eventKey="monthly">
                                 <div className="table-responsive">
                                    <table className="table">
                                       <tbody>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 6.23199L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66717C13.8269 8.10701 13.8288 7.19681 13.2689 6.63421L12.9145 6.9869L13.2689 6.6342L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.1728 6.92186 1.17468 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63425L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66238L3.51891 8.66236L5.9375 6.23199Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Topup
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/portfolio"
                                                >
                                                   COMPLETED
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 6.23199L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66717C13.8269 8.10701 13.8288 7.19681 13.2689 6.63421L12.9145 6.9869L13.2689 6.6342L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.1728 6.92186 1.17468 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63425L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66238L3.51891 8.66236L5.9375 6.23199Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Topup
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-dark float-right"
                                                   to="/portfolio"
                                                >
                                                   PENDING
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 20.768L5.9375 2.12498C5.9375 1.33106 6.58107 0.687485 7.375 0.687485C8.16892 0.687485 8.8125 1.33106 8.8125 2.12499L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3657L1.48108 20.3657C0.921124 19.803 0.9232 18.8929 1.48597 18.3328C2.04868 17.7727 2.95884 17.7749 3.51889 18.3376L3.51891 18.3376L5.9375 20.768Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Withdraw
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$2,000
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/portfolio"
                                                >
                                                   COMPLETED
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 20.768L5.9375 2.12498C5.9375 1.33106 6.58107 0.687485 7.375 0.687485C8.16892 0.687485 8.8125 1.33106 8.8125 2.12499L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3657L1.48108 20.3657C0.921124 19.803 0.9232 18.8929 1.48597 18.3328C2.04868 17.7727 2.95884 17.7749 3.51889 18.3376L3.51891 18.3376L5.9375 20.768Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Withdraw
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$2,000
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-dark float-right"
                                                   to="/portfolio"
                                                >
                                                   PENDING
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 6.23199L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66717C13.8269 8.10701 13.8288 7.19681 13.2689 6.63421L12.9145 6.9869L13.2689 6.6342L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.1728 6.92186 1.17468 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63425L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66238L3.51891 8.66236L5.9375 6.23199Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Topup
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/portfolio"
                                                >
                                                   COMPLETED
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 20.768L5.9375 2.12498C5.9375 1.33106 6.58107 0.687485 7.375 0.687485C8.16892 0.687485 8.8125 1.33106 8.8125 2.12499L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3657L1.48108 20.3657C0.921124 19.803 0.9232 18.8929 1.48597 18.3328C2.04868 17.7727 2.95884 17.7749 3.51889 18.3376L3.51891 18.3376L5.9375 20.768Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Withdraw
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$2,000
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="/portfolio"
                                                >
                                                   CANCELED
                                                </Link>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Weekly">
                                 <div className="table-responsive">
                                    <table className="table">
                                       <tbody>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 20.768L5.9375 2.12498C5.9375 1.33106 6.58107 0.687485 7.375 0.687485C8.16892 0.687485 8.8125 1.33106 8.8125 2.12499L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3657L1.48108 20.3657C0.921124 19.803 0.9232 18.8929 1.48597 18.3328C2.04868 17.7727 2.95884 17.7749 3.51889 18.3376L3.51891 18.3376L5.9375 20.768Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Withdraw
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$2,000
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/portfolio"
                                                >
                                                   COMPLETED
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 20.768L5.9375 2.12498C5.9375 1.33106 6.58107 0.687485 7.375 0.687485C8.16892 0.687485 8.8125 1.33106 8.8125 2.12499L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3657L1.48108 20.3657C0.921124 19.803 0.9232 18.8929 1.48597 18.3328C2.04868 17.7727 2.95884 17.7749 3.51889 18.3376L3.51891 18.3376L5.9375 20.768Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Withdraw
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$2,000
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-dark float-right"
                                                   to="/portfolio"
                                                >
                                                   PENDING
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 6.23199L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66717C13.8269 8.10701 13.8288 7.19681 13.2689 6.63421L12.9145 6.9869L13.2689 6.6342L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.1728 6.92186 1.17468 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63425L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66238L3.51891 8.66236L5.9375 6.23199Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Topup
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/portfolio"
                                                >
                                                   COMPLETED
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 20.768L5.9375 2.12498C5.9375 1.33106 6.58107 0.687485 7.375 0.687485C8.16892 0.687485 8.8125 1.33106 8.8125 2.12499L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3657L1.48108 20.3657C0.921124 19.803 0.9232 18.8929 1.48597 18.3328C2.04868 17.7727 2.95884 17.7749 3.51889 18.3376L3.51891 18.3376L5.9375 20.768Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Withdraw
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$2,000
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="/portfolio"
                                                >
                                                   CANCELED
                                                </Link>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Today">
                                 <div className="table-responsive">
                                    <table className="table">
                                       <tbody>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 6.23199L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66717C13.8269 8.10701 13.8288 7.19681 13.2689 6.63421L12.9145 6.9869L13.2689 6.6342L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.1728 6.92186 1.17468 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63425L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66238L3.51891 8.66236L5.9375 6.23199Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Topup
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                +$5,553
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/portfolio"
                                                >
                                                   COMPLETED
                                                </Link>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <div className="media">
                                                   <span className="bgl-primary p-3 mr-3">
                                                      <svg
                                                         width={27}
                                                         height={27}
                                                         viewBox="0 0 15 27"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path
                                                            d="M5.9375 20.768L5.9375 2.12498C5.9375 1.33106 6.58107 0.687485 7.375 0.687485C8.16892 0.687485 8.8125 1.33106 8.8125 2.12499L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3657L1.48108 20.3657C0.921124 19.803 0.9232 18.8929 1.48597 18.3328C2.04868 17.7727 2.95884 17.7749 3.51889 18.3376L3.51891 18.3376L5.9375 20.768Z"
                                                            fill="#6418C3"
                                                            stroke="#6418C3"
                                                         />
                                                      </svg>
                                                   </span>
                                                   <div className="media-body align-self-center">
                                                      <h5 className="font-w600 text-black">
                                                         Withdraw
                                                      </h5>
                                                      <p className="mb-0 fs-15">
                                                         4/5/2020 06:24 AM
                                                      </p>
                                                   </div>
                                                </div>
                                             </td>
                                             <td className="font-w600 text-center">
                                                -$2,000
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-danger float-right"
                                                   to="/portfolio"
                                                >
                                                   CANCELED
                                                </Link>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </Tab.Pane>
                           </Tab.Content>
                        </div>
                     </Tab.Container>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-xl-6 col-xxl-12">
            <div className="row">
               <div className="col-xl-12">
                  <div className="card">
                     <div className="card-header border-0 pb-0 d-sm-flex d-block">
                        <div>
                           <h4 className="text-black fs-20">Contacts</h4>
                           <p className="fs-12 mb-0">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                        <Link
                           to="/portfolio"
                           className="btn btn-primary rounded-0 mt-3 mt-sm-0"
                        >
                           Invite Friends
                        </Link>
                     </div>
                     <div className="card-body contacts-list">
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact1}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Alexandro Queque
                              </h6>
                              <span className="fs-14">@alexandro</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="/portfolio"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="/portfolio"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact2}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Benny Cagur
                              </h6>
                              <span className="fs-14">@bennycag</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact3}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Chloe Sidabutar
                              </h6>
                              <span className="fs-14">@chloesi</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact4}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Cindy Elisabeth
                              </h6>
                              <span className="fs-14">@cindy</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact5}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Erica Silalahi
                              </h6>
                              <span className="fs-14">@ericasil</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact6}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Eddyson Brownlee
                              </h6>
                              <span className="fs-14">@eddyson</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact7}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Franklin Jr
                              </h6>
                              <span className="fs-14">@franklinjr</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact8}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Geovanny
                              </h6>
                              <span className="fs-14">@rendyor</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact9}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Samantha Eri
                              </h6>
                              <span className="fs-14">@samantha</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media mb-2 align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact10}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Samuel Handerson
                              </h6>
                              <span className="fs-14">@sam224</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="media align-items-center">
                           <img
                              className="mr-3 rounded-0 width70 height70"
                              src={contact11}
                              alt=""
                           />
                           <div className="media-body">
                              <h6 className="text-black fs-18 mb-0">
                                 Zain Edwards
                              </h6>
                              <span className="fs-14">@zain</span>
                           </div>
                           <Link
                              className="btn btn-md btn-outline-primary rounded-0"
                              to="#"
                           >
                              TRANSFER
                           </Link>
                           <Link
                              className="btn btn-md btn-dark rounded-0 ml-2"
                              to="#"
                           >
                              UNFOLLOW
                           </Link>
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
                                 <Link
                                    className="dropdown-item text-danger"
                                    to="/portfolio"
                                 >
                                    Cancel
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-12">
                  <div className="card">
                     <div className="card-header border-0 pb-0 d-sm-flex d-block">
                        <div>
                           <h4 className="fs-20 text-black">
                              Portofolio Chart
                           </h4>
                           <p className="mb-0 fs-13">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                        <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0">
                           <Dropdown.Toggle
                              variant=""
                              className="btn bgl-light i-false d-flex align-items-center rounded-0 svg-btn "
                           >
                              <div className="text-left">
                                 <span className="d-block text-black">
                                    Weekly (2020)
                                 </span>
                              </div>
                              <i className="fa fa-angle-down scale5 text-primary ml-3" />
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                              <Link className="dropdown-item" to="/portfolio">
                                 4 June 2020 - 4 July 2020
                              </Link>
                              <Link className="dropdown-item" to="/portfolio">
                                 5 july 2020 - 4 Aug 2020
                              </Link>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="card-body">
                        <div className="row mx-0 align-items-center">
                           <div className="col-sm-7 col-md-7  px-0">
                              {/* <div id="chartCircle" /> */}
                              <ChartCircle />
                           </div>
                           <div className="col-sm-5 col-md-5 px-0">
                              <div className="portfolio-chart-deta">
                                 <div className="col px-0">
                                    <span />
                                    <div>
                                       <p className="mb-1">Income (50%)</p>
                                       <h3 className="fs-20 font-w600 text-black">
                                          $632,662,662
                                       </h3>
                                    </div>
                                 </div>
                                 <div className="col px-0">
                                    <span />
                                    <div>
                                       <p className="mb-1">Spends (30%)</p>
                                       <h3 className="fs-20 font-w600 text-black">
                                          $53,234,662
                                       </h3>
                                    </div>
                                 </div>
                                 <div className="col px-0">
                                    <span />
                                    <div>
                                       <p className="mb-1">Safe (20%)</p>
                                       <h3 className="fs-20 font-w600 text-black">
                                          $21,412,556
                                       </h3>
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
   );
};

export default Portofolio;
