import React from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Activity from "../vKnightHub/Wallet/Chart/Activity";
import CardSlider1 from "../vKnightHub/Wallet/slider/CardSlider1";
import CardSlider2 from "../vKnightHub/Wallet/slider/CardSlider2";
import Contacts from "../vKnightHub/Wallet/slider/Contacts";

const Wallet = () => {
  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <Tab.Container defaultActiveKey="crypto-Wallet">
                <div className="card-header d-block d-sm-flex border-0 pb-0">
                  <div>
                    <h4 className="fs-20 text-black">My Cards</h4>
                    <p className="mb-0 fs-13">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                  <div className="card-action card-tabs mt-3 mt-sm-0">
                    <Nav className="nav nav-tabs tabs-lg">
                      <Nav.Item>
                        <Nav.Link
                          className=" px-3 wspace-no"
                          eventKey="crypto-Wallet"
                        >
                          Crypto Wallet
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          className="px-3 wspace-no"
                          eventKey="bank-Wallet"
                        >
                          Bank Wallet
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <div className="card-body border-bottom tab-content">
                  <Tab.Content>
                    <Tab.Pane eventKey="bank-Wallet" role="tabpanel">
                      <div className="owl-bank-wallet owl-carousel owl-loaded owl-drag mb-4">
                        <CardSlider1 />
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="text-black">Monthly Limits</p>
                        <h3 className="fs-20 font-w600 text-black ml-auto">
                          $2000 of $10000
                        </h3>
                      </div>
                      <div className="progress rounded-0">
                        <div
                          className="progress-bar rounded-0 bg-primary progress-animated"
                          style={{ width: "75%", height: 12 }}
                          role="progressbar"
                        >
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="crypto-Wallet" role="tabpanel">
                      <div className="owl-bank-wallet owl-carousel owl-loaded owl-drag mb-4">
                        <CardSlider2 />
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="text-black">Monthly Limits</p>
                        <h3 className="fs-20 font-w600 text-black ml-auto">
                          $2000 of $10000
                        </h3>
                      </div>
                      <div className="progress rounded-0">
                        <div
                          className="progress-bar rounded-0 bg-primary progress-animated"
                          style={{ width: "75%", height: 12 }}
                          role="progressbar"
                        >
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>

              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5 mb-4">
                    <p className="mb-2">Card Name</p>
                    <h4 className="text-black">Main Balance</h4>
                  </div>
                  <div className="col-sm-7 mb-4">
                    <p className="mb-2">Bank Name</p>
                    <h4 className="text-black">ABC Center Bank</h4>
                  </div>
                  <div className="col-sm-5 mb-4">
                    <p className="mb-2">Valid Date</p>
                    <h4 className="text-black">08/21</h4>
                  </div>
                  <div className="col-sm-7 mb-4">
                    <p className="mb-2">Card Holder</p>
                    <h4 className="text-black">Thomas Aldox</h4>
                  </div>
                  <div className="col-sm-5">
                    <p className="mb-2">Card Number</p>
                    <h4 className="text-black">**** **** **** 1234</h4>
                  </div>
                  <div className="col-sm-7">
                    <Link
                      className="btn btn-outline-primary rounded-0 mr-1 mb-1"
                      to="/my-wallet"
                    >
                      Generate Number
                    </Link>
                    <Link
                      className="btn btn-outline-primary rounded-0 mb-1"
                      to="/my-wallet"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <div>
                  <h4 className="fs-20 text-black">Transfer</h4>
                  <p className="mb-0 fs-13">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form>
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-transparent border rounded-0">
                            Amount
                          </span>
                        </div>
                        <input
                          type="number"
                          className="form-control rounded-0"
                          placeholder="0,000000"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fs-20 text-black mb-0">Recent Contacts</h4>
                  <Link to="/my-wallet" className="btn btn-link">
                    View more
                  </Link>
                </div>
                <div className="testimonial-one owl-right-nav owl-carousel owl-loaded owl-drag">
                  <Contacts />
                </div>
              </div>
              <div className="card-footer border-0 pt-0">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <p className="mb-0 fs-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </p>
                  </div>
                  <div className="col-md-5 text-right">
                    <Link
                      to="/my-wallet"
                      className="btn btn-primary d-block rounded-0 mt-3 mt-md-0"
                    >
                      TRANSFER NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="media p-4 top-up-bx col-md-6 align-items-center">
                  <div className="media-body">
                    <h3 className="fs-20 text-white">TOP UP</h3>
                    <p className="text-white font-w200 mb-0 fs-14">
                      Lorem ipsum dolor sit amet, consectetur adipis
                    </p>
                  </div>
                  <Link to="/my-wallet" className="icon-btn ml-3">
                    <svg
                      width={15}
                      height={27}
                      viewBox="0 0 15 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.9375 6.23198L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23201L11.2311 8.66231L11.2311 8.66232C11.7911 9.22502 12.7013 9.22719 13.264 8.66716C13.8269 8.107 13.8288 7.1968 13.2689 6.6342L12.9145 6.98689L13.2689 6.63419L8.3939 1.73557L8.38872 1.73036L8.38704 1.72877C7.82626 1.17279 6.92186 1.17467 6.36301 1.72875L6.36136 1.73031L6.35609 1.73561L1.48109 6.63424L1.48108 6.63425C0.921124 7.19694 0.9232 8.10708 1.48597 8.66719C2.04868 9.22724 2.95884 9.22508 3.51889 8.66237L3.51891 8.66235L5.9375 6.23198Z"
                        fill="#6418C3"
                        stroke="#6418C3"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="media p-4 withdraw-bx col-md-6 align-items-center">
                  <div className="media-body">
                    <h3 className="fs-20 text-white">WITHDRAW</h3>
                    <p className="text-white font-w200 mb-0 fs-14">
                      Lorem ipsum dolor sit amet, consectetur adipis
                    </p>
                  </div>
                  <Link to="/my-wallet" className="icon-btn ml-3">
                    <svg
                      width={27}
                      height={27}
                      viewBox="0 0 15 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.9375 20.768L5.9375 2.125C5.9375 1.33108 6.58107 0.6875 7.375 0.6875C8.16892 0.6875 8.8125 1.33108 8.8125 2.125L8.8125 20.768L11.2311 18.3377L11.2311 18.3377C11.7911 17.775 12.7013 17.7728 13.264 18.3328C13.8269 18.893 13.8288 19.8032 13.2689 20.3658L12.9145 20.0131L13.2689 20.3658L8.3939 25.2644L8.38872 25.2696L8.38704 25.2712C7.82626 25.8272 6.92186 25.8253 6.36301 25.2712L6.36136 25.2697L6.35609 25.2644L1.48109 20.3658L1.48108 20.3658C0.921124 19.8031 0.9232 18.8929 1.48597 18.3328C2.04868 17.7728 2.95884 17.7749 3.51889 18.3376L3.51891 18.3377L5.9375 20.768Z"
                        fill="#6418C3"
                        stroke="#6418C3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header border-0 pb-0 d-block d-sm-flex">
                <div>
                  <h4 className="fs-20 text-black">Overview Balance</h4>
                  <p className="mb-0 fs-13">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0">
                  <Dropdown.Toggle
                    variant=""
                    className="btn bgl-light d-flex align-items-center rounded-0 svg-btn i-false"
                  >
                    <div className="text-left">
                      <span className="d-block text-black">Weekly (2020)</span>
                    </div>
                    <i className="fa fa-angle-down scale5 text-primary ml-3" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/my-wallet">
                      4 June 2020 - 4 July 2020
                    </Link>
                    <Link className="dropdown-item" to="/my-wallet">
                      5 july 2020 - 4 Aug 2020
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body">
                {/* <canvas id="activity" className="chartjs" /> */}
                <Activity />
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <Tab.Container defaultActiveKey="monthly">
                <div className="card-header border-0 d-sm-flex d-block">
                  <div>
                    <h4 className="fs-20 text-black">Wallet Activity</h4>
                    <p className="mb-0 fs-13">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                  <div className="card-action card-tabs mt-3 mt-sm-0">
                    <Nav className="nav nav-tabs" role="tablist">
                      <Nav.Item>
                        <Nav.Link eventKey="monthly">Monthly</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Weekly">Weekly</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Today">Today</Nav.Link>
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
                              <td className="font-w600 text-center">+$5,553</td>
                              <td>
                                <Link
                                  className="btn-link text-success float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">+$5,553</td>
                              <td>
                                <Link
                                  className="btn-link text-dark float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">-$2,000</td>
                              <td>
                                <Link
                                  className="btn-link text-success float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">-$2,000</td>
                              <td>
                                <Link
                                  className="btn-link text-dark float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">+$5,553</td>
                              <td>
                                <Link
                                  className="btn-link text-success float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">-$2,000</td>
                              <td>
                                <Link
                                  className="btn-link text-danger float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">-$2,000</td>
                              <td>
                                <Link
                                  className="btn-link text-success float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">-$2,000</td>
                              <td>
                                <Link
                                  className="btn-link text-dark float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">+$5,553</td>
                              <td>
                                <Link
                                  className="btn-link text-success float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">-$2,000</td>
                              <td>
                                <Link
                                  className="btn-link text-danger float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">+$5,553</td>
                              <td>
                                <Link
                                  className="btn-link text-success float-right"
                                  to="/my-wallet"
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
                              <td className="font-w600 text-center">-$2,000</td>
                              <td>
                                <Link
                                  className="btn-link text-danger float-right"
                                  to="/my-wallet"
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
    </div>
  );
};

export default Wallet;
