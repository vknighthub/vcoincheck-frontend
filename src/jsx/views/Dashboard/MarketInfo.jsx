import { withTranslation } from "react-i18next";
import Carousel from "./market/Carousel";
import CoinsTable from "./market/CoinsTable";

const MarketInfo = () => {
  return (
    <>
      <div className="row pb-5">
        <Carousel />
      </div>
      <div className="row">
        <CoinsTable />
      </div>
    </>
  );
};

export default withTranslation()(MarketInfo);
