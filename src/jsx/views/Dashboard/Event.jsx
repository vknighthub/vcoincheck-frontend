import React, { Fragment } from "react";


const ListNews = [
   {
      src: require("../../../images/event/sora.png").default,
      content: "February 9th, 2022, Ecosystem Updates for SORA, Polkaswap, and Fearless Wallet...",
      href: "https://medium.com/sora-xor/february-9th-2022-ecosystem-updates-for-sora-polkaswap-and-fearless-wallet-f09cca62599d",
   },
   {
      src: require("../../../images/event/Subquery_Icon.png").default,
      content: "SubQuery Data Powers Nova Wallet — a next-gen mobile wallet for the Polkadot & Kusama ecosystem...",
      href: "https://subquery.medium.com/subquery-data-powers-nova-wallet-a-next-gen-mobile-wallet-for-the-polkadot-kusama-ecosystem-cfecd80a10e0",
   },
   {
      src: require("../../../images/event/Unique-02.png").default,
      content: "An NFT Workshop at ETH Denver by Unique Network CTO Greg Zaitsev...",
      href: "https://medium.com/unique-network/an-nft-workshop-at-eth-denver-by-unique-network-cto-greg-zaitsev-5a7d65d1542e",
   },
   {
      src: require("../../../images/event/Subquery_Icon.png").default,
      content: "$RMRK token: current utility, DeFi options and Staking... Feb 8, 2022 3:28 PM",
      href: "https://app.subsocial.network/@rmrkapp/rmrk-token-current-utility-de-fi-options-and-staking-31314",
   },
];
const RanKinglist = [
   {
      proname: "Kulupu",
      shotname: "KLP",
      src: require("../../../images/event/sora.png").default,
      price: "$0.019",
      precent: "5.36%"
   },
   {
      proname: "UniLend Finance",
      shotname: "UFT",
      src: require("../../../images/event/sora.png").default,
      price: "$0.89",
      precent: "4.48%"
   },
   {
      proname: "Raize Network",
      shotname: "RAZE",
      src: require("../../../images/event/sora.png").default,
      price: "$0.035",
      precent: "0.59%"
   },
   {
      proname: "Polkaswap",
      shotname: "PSWAP",
      src: require("../../../images/event/sora.png").default,
      price: "$0.016",
      precent: "0.02%"
   },
   {
      proname: "kUSD",
      shotname: "KUSD",
      src: require("../../../images/event/sora.png").default,
      price: "$1.00",
      precent: "0.00%"
   },
];

const Event = () => {
   return (
      <Fragment>
         <>
            <div className="row">
               <div className="col-xl-4 col-xxl-4 col-lg-4">
                  <div className="card">
                     <div className="card-header d-block d-sm-flex border-1 text-center">
                        <h2 className="text-black mx-auto">
                           News
                        </h2>
                     </div>
                     <div className="table-responsive card-body tab-content p-3">
                        {ListNews.map((value,index)=>(
                           <a target="_blank" href={value.href} rel="noreferrer" key={index}>
                              <div className="row">
                                 <div className="col-xl-2 col-xxl-2 col-lg-2">
                                    <img alt="" src={value.src} className="img-fluid mb-4"/>
                                 </div>
                                 <div className="col-xl-10 col-xxl-10 col-lg-10 mx-auto">
                                    <span>{value.content}</span>
                                 </div>
                              </div>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-xxl-4 col-lg-4">
                  <div className="card">
                  <div className="card-header d-block d-sm-flex border-1 text-center">
                        <h2 className="text-black mx-auto">
                           Top contributor
                        </h2>
                     </div>
                     <div className="table-responsive card-body tab-content p-3">
                        Comming soon
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-xxl-4 col-lg-4">
                  <div className="card">
                     <div className="card-header d-block d-sm-flex border-1 text-center">
                        <h2 className="text-black mx-auto">
                              Ranking list
                        </h2>
                     </div>
                     <div className="table-responsive card-body tab-content p-3">
                        {RanKinglist.map((value,index)=>(
                           <div className="row">
                              <div className="col-xl-2 col-xxl-2 col-lg-2">
                                 <img alt="" src={value.src} className="img-fluid p-2"/>
                              </div>
                              <div className="col-xl-7 col-xxl-67 col-lg-7">
                                 <p className="mt-1 mb-0 font-weight-bold">{value.proname}</p>
                                 <p className="mt-0 mb-0">{value.shotname}</p>
                              </div>
                              <div className="col-xl-3 col-xxl-3 col-lg-3">
                                 <p className="mt-1 mb-0 font-weight-bold">{value.price}</p>
                                 <span className="mt-0 mb-0 text-info">{value.precent}</span>
                                 <span className="fas fa-angle-up pl-1 text-info"></span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </>
      </Fragment>
   );
};

export default Event;
