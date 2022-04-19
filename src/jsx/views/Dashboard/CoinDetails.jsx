import React, { Fragment } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

// img
import bitcoin from "../../../images/svg/bitcoin.svg";
import turkish from "../../../images/money/turkish-lira.svg";
// Chart
import Chart from "../vKnightHub/CoinDetails/Chart/Chart";

const CoinDetails = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6 ">
          <div className="card currency-bx overflow-hidden relative bg-warning">
            <div className="card-body p-4">
              <div className="media align-items-center">
                <div className="media-body">
                  <h5 className="text-white fs-20">Bitcoin</h5>
                  <h1 className="text-white mb-0">$65,123</h1>
                </div>
                <div className="currency-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={45}
                    height={45}
                    x="0px"
                    y="0px"
                    fill="#ffab2d"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path d="M296,272h-16h-88v80h104c22.048,0,40-17.952,40-40C336,289.952,318.048,272,296,272z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M280,160h-88v80h88c22.048,0,40-17.952,40-40C320,177.952,302.048,160,280,160z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M256,0C114.624,0,0,114.624,0,256s114.624,256,256,256s256-114.624,256-256S397.376,0,256,0z M296,384h-8v16 c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-16h-32v16c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-16h-16 c-8.832,0-16-7.168-16-16V144c0-8.832,7.168-16,16-16h16v-16c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v16h32v-16 c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v16.8c35.904,4.032,64,34.24,64,71.2c0,19.392-7.776,36.928-20.288,49.856 C353.28,262.336,368,285.344,368,312C368,351.712,335.68,384,296,384z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <img className="bg-img" src="images/money/bitcoin.svg" alt="" />
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6 ">
          <div className="card currency-bx overflow-hidden relative bg-secondary">
            <div className="card-body p-4">
              <div className="media align-items-center">
                <div className="media-body">
                  <h5 className="text-white fs-20">Dollar</h5>
                  <h1 className="text-white mb-0">$2,251</h1>
                </div>
                <div className="currency-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width={45}
                    height={45}
                    fill="#dc3ccc"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.624,0,0,114.624,0,256s114.624,256,256,256s256-114.624,256-256S397.376,0,256,0z M272,366.72V384
			c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-17.344c-16.384-2.688-31.392-9.376-42.624-19.328
			c-6.624-5.888-7.2-15.968-1.344-22.592c5.856-6.624,15.968-7.168,22.592-1.344C227.648,331.392,241.28,336,256,336
			c26.016,0,48-14.656,48-32s-21.984-32-48-32c-44.096,0-80-28.704-80-64c0-30.912,27.52-56.768,64-62.72V128
			c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v17.344c16.384,2.688,31.392,9.376,42.624,19.328
			c6.592,5.888,7.232,16,1.344,22.592s-15.968,7.168-22.592,1.344C284.352,180.608,270.72,176,256,176c-26.016,0-48,14.656-48,32
			s21.984,32,48,32c44.128,0,80,28.704,80,64C336,334.912,308.48,360.768,272,366.72z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <img className="bg-img" src="images/money/dollar.svg" alt="" />
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6 ">
          <div className="card currency-bx overflow-hidden relative bg-info">
            <div className="card-body p-4">
              <div className="media align-items-center">
                <div className="media-body">
                  <h5 className="text-white fs-20">Euro</h5>
                  <h1 className="text-white mb-0">$12,123</h1>
                </div>
                <div className="currency-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width={45}
                    height={45}
                    fill="#319bd7"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.624,0,0,114.624,0,256s114.624,256,256,256s256-114.624,256-256S397.376,0,256,0z M272,208
			c8.832,0,16,7.168,16,16c0,8.832-7.168,16-16,16h-78.656c-0.736,5.216-1.344,10.528-1.344,16s0.608,10.784,1.344,16H256
			c8.832,0,16,7.168,16,16c0,8.832-7.168,16-16,16h-52.864c13.856,28.544,39.392,48,68.864,48c13.952,0,27.072-4.128,39.008-12.256
			c7.264-4.928,17.248-3.104,22.208,4.192c4.96,7.296,3.104,17.248-4.224,22.24C311.904,377.824,292.192,384,272,384
			c-46.88,0-87.008-33.184-103.68-80H144c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h17.408
			c-0.576-5.312-1.408-10.528-1.408-16s0.832-10.688,1.408-16H144c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h24.32
			c16.672-46.816,56.8-80,103.68-80c20.192,0,39.904,6.176,56.992,17.824c7.328,4.992,9.184,14.944,4.224,22.24
			c-4.96,7.36-14.976,9.152-22.208,4.192C299.072,164.128,285.952,160,272,160c-29.472,0-55.008,19.456-68.864,48H272z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <img className="bg-img" src="images/money/euro.svg" alt="" />
          </div>
        </div>
        <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6 ">
          <div className="card currency-bx overflow-hidden relative bg-dark">
            <div className="card-body p-4">
              <div className="media align-items-center">
                <div className="media-body">
                  <h5 className="text-white fs-20">Turkish</h5>
                  <h1 className="text-white mb-0">$6,512</h1>
                </div>
                <div className="currency-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={45}
                    height={45}
                    fill="#5f5f5f"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.624,0,0,114.624,0,256s114.624,256,256,256s256-114.624,256-256S397.376,0,256,0z M381.408,312.704
										c-41.568,63.968-101.632,71.968-129.152,71.968c-8.448,0-13.792-0.736-14.656-0.864c-7.808-1.184-13.6-7.904-13.6-15.808v-91.52
										l-44.128,11.04c-1.28,0.32-2.592,0.48-3.872,0.48c-7.2,0-13.696-4.832-15.52-12.128c-2.144-8.544,3.072-17.248,11.648-19.392
										L224,243.52v-31.04l-44.128,11.04c-1.28,0.32-2.592,0.48-3.872,0.48c-7.2,0-13.696-4.832-15.52-12.128
										c-2.144-8.544,3.072-17.248,11.648-19.392L224,179.52V144c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v27.52l44.128-11.04
										c8.384-2.24,17.248,3.072,19.392,11.648c2.112,8.576-3.072,17.248-11.648,19.392L256,204.48v31.04l44.128-11.04
										c8.384-2.208,17.248,3.072,19.392,11.648c2.112,8.576-3.072,17.248-11.648,19.392L256,268.48v84.192
										c22.24-0.704,66.944-8.704,98.592-57.408c4.832-7.392,14.816-9.44,22.112-4.672C384.128,295.392,386.208,305.312,381.408,312.704z
										"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <img className="bg-img" src={turkish} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 col-xxl-12 col-lg-12">
          <div className="card">
            <div className="card-header border-0 pb-0 ">
              <div>
                <h4 className="fs-20 text-black">Coin Chart</h4>
                <p className="mb-0 fs-13">Lorem ipsum dolor sit amet</p>
              </div>
              <Dropdown className="dropdown ml-auto custom-dropdown d-none d-md-block  mt-3 mt-sm-0 sabuj_ml_tb_2">
                <Dropdown.Toggle
                  variant=""
                  className="i-false btn bgl-light d-flex align-items-center rounded-0 svg-btn "
                  data-toggle="dropdown"
                >
                  <i className="fa fa-calendar-o scale5 text-dark mr-4" />
                  <div className="text-left">
                    <span className="d-block text-black fs-14">
                      4 June 2020 - 17 June 2020
                    </span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align="right"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <Link className="dropdown-item" to="/coin-details">
                    4 June 2020 - 4 July 2020
                  </Link>
                  <Link className="dropdown-item" to="/coin-details">
                    5 july 2020 - 4 Aug 2020
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="dropdown ml-3 custom-dropdown d-none d-md-block  mt-3 mt-sm-0">
                <Dropdown.Toggle
                  variant=""
                  className="i-false btn bgl-light d-flex align-items-center rounded-0 svg-btn "
                  data-toggle="dropdown"
                >
                  <div className="text-left">
                    <span className="d-block text-black fs-14">
                      USD ($ US Dollar)
                    </span>
                  </div>
                  <i className="fa fa-angle-down scale5 text-primary ml-3" />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align="right"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <Link className="dropdown-item" to="/coin-details">
                    4 June 2020 - 4 July 2020
                  </Link>
                  <Link className="dropdown-item" to="/coin-details">
                    5 july 2020 - 4 Aug 2020
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body">
              <div className="row sp20 mb-4 align-items-center">
                <div className="col-lg-3 col-md-4 mb-3 mb-sm-0">
                  <p className="fs-18 mb-1">Price</p>
                  <h2 className="fs-28 font-w600 text-black">$11,898.15</h2>
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="row sp20">
                    <div className="col-lg-4 col-sm-4 col-6 mb-3 mb-sm-0">
                      <p className="fs-14 mb-1">24h% change</p>
                      <h3 className="fs-20 font-w600 text-success">
                        1.64%
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
                            fill="#2BC155"
                          />
                        </svg>
                      </h3>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-6 mb-3 mb-sm-0">
                      <p className="fs-14 mb-1">Volume (24h)</p>
                      <h3 className="fs-20 font-w600 text-black">$47.22B</h3>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <p className="fs-14 mb-1">Market Cap</p>
                      <h3 className="fs-20 font-w600 text-black">$219.24B</h3>
                    </div>
                  </div>
                </div>
                <div className="d-lg-flex d-none col-lg-3 justify-content-end align-items-center">
                  <div className="text-right">
                    <h2 className="fs-24 font-w600 text-black mb-0">Bitcoin</h2>
                    <span className="fs-14 font-w600">BTC</span>
                  </div>
                  <img
                    className="ml-3 width60 height60"
                    height={60}
                    width={60}
                    src={bitcoin}
                    alt=""
                  />
                </div>
              </div>
              {/* <div id="chart" /> */}
              <Chart />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-6">
          <div className="card">
            <div className="card-header pb-0 border-0">
              <h4 className="mb-0 text-black fs-20">About</h4>
              <Dropdown className="dropdown custom-dropdown mb-0">
                <Dropdown.Toggle
                  variant=""
                  className="btn sharp i-false pr-0 tp-btn"
                  data-toggle="dropdown"
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
                <Dropdown.Menu
                  align="right"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <Link className="dropdown-item" to="/coin-details">
                    Details
                  </Link>
                  <Link
                    className="dropdown-item text-danger"
                    to="/coin-details"
                  >
                    Cancel
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <img
                  className="ml-auto mb-3 mr-auto d-block"
                  src={bitcoin}
                  alt=""
                />
                <h2 className="fs-24 font-w600 text-black mb-0">Bitcoin</h2>
                <span className="fs-14 font-w600">BTC</span>
              </div>
              <p className="fs-14">
                Bitcoin was the first cryptocurrency to successfully record
                transactions on a secure, decentralized blockchain-based
                network. Launched in early 2009 by its pseudonymous creator
                Satoshi Nakamoto, Bitcoin is the largest cryptocurrency measured
                by market capitalization and amount of data stored on its
                blockchain.{" "}
              </p>
              <p className="fs-14">
                The Bitcoin software is free and available online to anyone who
                wants to run a Bitcoin node and store their own copy of the
                Bitcoin blockchain
              </p>
            </div>
            <div className="card-footer border-0 pt-0 text-center">
              <Link to="/coin-details" className="btn-link d-flex">
                Read more{" "}
                <i className="fa fa-chevron-right text-dark ml-auto scale-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-header border-0">
              <h4 className="mb-0 text-black fs-20">Sell Order</h4>
              <Dropdown className="dropdown custom-dropdown mb-0">
                <Dropdown.Toggle
                  variant=""
                  className="btn sharp i-false pr-0 tp-btn"
                  data-toggle="dropdown"
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
                <Dropdown.Menu
                  align="right"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <Link className="dropdown-item" to="/coin-details">
                    Details
                  </Link>
                  <Link
                    className="dropdown-item text-danger"
                    to="/coin-details"
                  >
                    Cancel
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive card-table">
                <table className="table text-center bg-warning-hover">
                  <thead>
                    <tr>
                      <th className="text-left">Price</th>
                      <th>Amount</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">82.3</td>
                      <td>0.15</td>
                      <td className="text-right">$134,12</td>
                    </tr>
                    <tr>
                      <td className="text-left">83.9</td>
                      <td>0.18</td>
                      <td className="text-right">$237,31</td>
                    </tr>
                    <tr>
                      <td className="text-left">84.2</td>
                      <td>0.25</td>
                      <td className="text-right">$252,58</td>
                    </tr>
                    <tr>
                      <td className="text-left">86.2</td>
                      <td>0.35</td>
                      <td className="text-right">$126,26</td>
                    </tr>
                    <tr>
                      <td className="text-left">91.6</td>
                      <td>0.75</td>
                      <td className="text-right">$46,92</td>
                    </tr>
                    <tr>
                      <td className="text-left">92.6</td>
                      <td>0.21</td>
                      <td className="text-right">$123,27</td>
                    </tr>
                    <tr>
                      <td className="text-left">93.9</td>
                      <td>0.55</td>
                      <td className="text-right">$212,56</td>
                    </tr>
                    <tr>
                      <td className="text-left">94.2</td>
                      <td>0.18</td>
                      <td className="text-right">$129,26</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer border-0 pt-0 text-center">
              <Link to="/coin-details" className="btn-link">
                Show more <i className="fa fa-caret-right ml-2 scale-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-sm-6">
          <div className="card">
            <div className="card-header border-0">
              <h4 className="mb-0 text-black fs-20">Buy Order</h4>
              <Dropdown className="dropdown custom-dropdown mb-0">
                <Dropdown.Toggle
                  variant=""
                  className="btn sharp i-false pr-0 tp-btn"
                  data-toggle="dropdown"
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
                <Dropdown.Menu
                  align="right"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <Link className="dropdown-item" to="/coin-details">
                    Details
                  </Link>
                  <Link
                    className="dropdown-item text-danger"
                    to="/coin-details"
                  >
                    Cancel
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive card-table">
                <table className="table bg-warning-hover text-center">
                  <thead>
                    <tr>
                      <th className="text-left">Price</th>
                      <th>Amount</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">82.3</td>
                      <td>0.15</td>
                      <td className="text-right">$134,12</td>
                    </tr>
                    <tr>
                      <td className="text-left">83.9</td>
                      <td>0.18</td>
                      <td className="text-right">$237,31</td>
                    </tr>
                    <tr>
                      <td className="text-left">84.2</td>
                      <td>0.25</td>
                      <td className="text-right">$252,58</td>
                    </tr>
                    <tr>
                      <td className="text-left">86.2</td>
                      <td>0.35</td>
                      <td className="text-right">$126,26</td>
                    </tr>
                    <tr>
                      <td className="text-left">91.6</td>
                      <td>0.75</td>
                      <td className="text-right">$46,92</td>
                    </tr>
                    <tr>
                      <td className="text-left">92.6</td>
                      <td>0.21</td>
                      <td className="text-right">$123,27</td>
                    </tr>
                    <tr>
                      <td className="text-left">93.9</td>
                      <td>0.55</td>
                      <td className="text-right">$212,56</td>
                    </tr>
                    <tr>
                      <td className="text-left">94.2</td>
                      <td>0.18</td>
                      <td className="text-right">$129,26</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer border-0 pt-0 text-center">
              <Link to="/coin-details" className="btn-link">
                Show more <i className="fa fa-caret-right ml-2 scale-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-12 col-lg-8">
          <div className="card">
            <div className="card-header border-0 pb-0 d-block d-md-flex">
              <div>
                <h4 className="fs-20 text-black">Quick Trade</h4>
                <p className="fs-13">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0">
                <Dropdown.Toggle
                  variant=""
                  className="i-false btn bgl-light d-flex align-items-center rounded-0 svg-btn btn-md"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-angle-down scale5 mr-3" />
                  <div className="text-left ml-3">
                    <span className="d-block fs-16 text-black">
                      561,511 Btc
                    </span>
                  </div>
                  <svg
                    className="ml-3"
                    width={42}
                    height={42}
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5001 16.5002C28.4987 14.844 27.1561 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.1561 19.4985 28.4987 18.1559 28.5001 16.5002Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M16.5002 28.5H25.5003C27.157 28.5 28.5001 27.157 28.5001 25.5003C28.5001 23.8432 27.157 22.5001 25.5003 22.5001H16.5002V28.5Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M20.9999 0.00012207C9.40201 0.00012207 0 9.40213 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.9865 9.40762 32.5923 0.0133972 20.9999 0.00012207ZM31.5001 25.4998C31.496 28.8122 28.8121 31.4961 25.5002 31.4998V32.9998C25.5002 33.8284 24.8282 34.4999 24.0001 34.4999C23.1715 34.4999 22.5 33.8284 22.5 32.9998V31.4998H19.5003V32.9998C19.5003 33.8284 18.8283 34.4999 18.0002 34.4999C17.1716 34.4999 16.5001 33.8284 16.5001 32.9998V31.4998H12.0003C11.1717 31.4998 10.5002 30.8282 10.5002 30.0001C10.5002 29.1716 11.1717 28.5 12.0003 28.5H13.4999V13.5H12.0003C11.1717 13.5 10.5002 12.8285 10.5002 11.9999C10.5002 11.1714 11.1717 10.4998 12.0003 10.4998H16.5001V9.00021C16.5001 8.17166 17.1716 7.50012 18.0002 7.50012C18.8287 7.50012 19.5003 8.17166 19.5003 9.00021V10.4998H22.5V9.00021C22.5 8.17166 23.1715 7.50012 24.0001 7.50012C24.8286 7.50012 25.5002 8.17166 25.5002 9.00021V10.4998C28.7997 10.4861 31.4859 13.1494 31.5001 16.4489C31.5074 18.1962 30.7498 19.8593 29.4264 21C30.7375 22.128 31.4941 23.77 31.5001 25.4998Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align="right"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <Link className="dropdown-item" to="/coin-details">
                    4 June 2020 - 4 July 2020
                  </Link>
                  <Link className="dropdown-item" to="/coin-details">
                    5 july 2020 - 4 Aug 2020
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-transparent border rounded-0">
                          Amount BTC
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control rounded-0"
                        placeholder="0,000000"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-transparent border  rounded-0">
                          Price BPL
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control rounded-0"
                        placeholder="0,000000"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-transparent border rounded-0">
                          Fee (1%)
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control rounded-0"
                        placeholder="0,000000"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-transparent border rounded-0">
                          Total BPL
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
            </div>
            <div className="card-footer border-0 pt-0">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <p className="mb-0 fs-13">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
                <div className="col-md-7 text-left mt-3 mt-sm-0 text-sm-right">
                  <Link
                    to="/coin-details"
                    className="btn btn-success rounded-0 mb-2"
                  >
                    BUY
                    <svg
                      className="ml-4 scale3"
                      width={16}
                      height={16}
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                        fill="white"
                        stroke="white"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/coin-details"
                    className="btn ml-3 btn-danger rounded-0 mb-2"
                  >
                    SELL
                    <svg
                      className="ml-4 scale5"
                      width={16}
                      height={16}
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z"
                        fill="white"
                        stroke="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoinDetails;
