import React, { Fragment } from "react";

const FAQs = () => {
  return (
      <Fragment>
        <>
            <div className="row">
              <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <div className="card">
                    <div className="card-header d-block d-sm-flex border-1 text-center">
                        <h2 className="text-black mx-auto">
                          Frequently Asked Questions (FAQs)
                        </h2>
                    </div>
                    <div className="table-responsive card-body tab-content p-3 ">
                        <p className="m-4">What is Moonbem?</p>
                        <p className="m-4">What is Moonbem Staking?</p>
                        <p className="m-4">Some important parameters to understand in relation to the staking system in Moonbeam include?</p>
                        <p className="m-4">What are the instructions for staking GLMR?</p>
                        <p className="m-4">What is the APR rate of GLMR?</p>
                        <p className="m-4">How are rewards calculated?</p>
                        <p className="m-4">Is there any risk when I stake?</p>
                        <p className="m-4">How soon can I start receiving staking rewards?</p>
                        <p className="m-4">How long does it take to unstake/revoke a delegation?</p>
                        <p className="m-4">Why did I stop receiving GLMR staking rewards?</p>
                    </div>
                  </div>
              </div>
            </div>
        </>
      </Fragment>
  );
};

export default FAQs;
